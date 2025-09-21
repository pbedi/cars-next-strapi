import { NextRequest } from 'next/server'
import { db } from '../../../../../lib/cms/db'
import {
  successResponse,
  errorResponse,
  handleApiError,
  validateMethod,
} from '../../../../../lib/cms/api-utils'

// POST /api/cms/media/upload - Upload media file to Cloudinary
export async function POST(request: NextRequest) {
  try {
    validateMethod(request, 'POST')

    const formData = await request.formData()
    const file = formData.get('file') as File
    const altText = formData.get('altText') as string

    if (!file) {
      return errorResponse('No file provided', 400)
    }



    // Validate file type - be more lenient for development
    const allowedTypes = [
      'image/jpeg',
      'image/jpg',
      'image/png',
      'image/gif',
      'image/webp',
      'image/svg+xml',
      'video/mp4',
      'video/webm',
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'application/octet-stream' // Allow for development
    ]

    // For octet-stream, try to determine type from file extension
    let actualMimeType = file.type
    if (file.type === 'application/octet-stream') {
      const extension = file.name.split('.').pop()?.toLowerCase()
      if (extension === 'png') actualMimeType = 'image/png'
      else if (extension === 'jpg' || extension === 'jpeg') actualMimeType = 'image/jpeg'
      else if (extension === 'gif') actualMimeType = 'image/gif'
      else if (extension === 'webp') actualMimeType = 'image/webp'
    }

    if (!allowedTypes.includes(file.type) && !allowedTypes.includes(actualMimeType)) {
      return errorResponse(`File type not supported: ${file.type}. Allowed types: ${allowedTypes.join(', ')}`, 400)
    }

    // Validate file size (10MB limit)
    const maxSize = 10 * 1024 * 1024 // 10MB
    if (file.size > maxSize) {
      return errorResponse('File size too large. Maximum size is 10MB', 400)
    }

    // For development, we'll store files locally and create data URLs
    // In production, you would integrate with actual Cloudinary API
    const uploadResult = await handleFileUpload(file, actualMimeType)

    // Create media record in database
    const mediaFile = await db.media.create({
      data: {
        filename: uploadResult.filename,
        originalName: file.name,
        url: uploadResult.url,
        altText: altText || '',
        size: file.size,
        mimeType: actualMimeType,
        width: uploadResult.width,
        height: uploadResult.height,
      }
    })

    return successResponse(mediaFile, 'File uploaded successfully', 201)
  } catch (error) {
    return handleApiError(error)
  }
}

// Handle file upload for development (creates data URLs)
async function handleFileUpload(file: File, mimeType: string = file.type) {
  // Generate a unique filename
  const timestamp = Date.now()
  const randomId = Math.random().toString(36).substring(2, 15)
  const extension = file.name.split('.').pop()
  const filename = `cms_${timestamp}_${randomId}`

  // Convert file to data URL for development
  const arrayBuffer = await file.arrayBuffer()
  const buffer = Buffer.from(arrayBuffer)
  const base64 = buffer.toString('base64')
  const dataUrl = `data:${mimeType};base64,${base64}`

  // Set default dimensions for images
  let width: number | null = null
  let height: number | null = null

  if (mimeType.startsWith('image/')) {
    // Set reasonable default dimensions for images
    // In production, Cloudinary would provide actual dimensions
    width = 800
    height = 600
  }

  return {
    filename,
    url: dataUrl,
    width,
    height,
    format: extension,
    resource_type: mimeType.startsWith('image/') ? 'image' :
      mimeType.startsWith('video/') ? 'video' : 'raw',
    bytes: file.size,
    created_at: new Date().toISOString(),
  }
}



// GET /api/cms/media/upload - Get upload configuration
export async function GET(request: NextRequest) {
  try {
    validateMethod(request, 'GET')

    // Return upload configuration
    const config = {
      maxFileSize: 10 * 1024 * 1024, // 10MB
      allowedTypes: [
        'image/jpeg',
        'image/jpg',
        'image/png',
        'image/gif',
        'image/webp',
        'image/svg+xml',
        'video/mp4',
        'video/webm',
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
      ],
      cloudinaryConfig: {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME || 'demo',
        uploadPreset: process.env.CLOUDINARY_UPLOAD_PRESET || 'cms_uploads',
      }
    }

    return successResponse(config)
  } catch (error) {
    return handleApiError(error)
  }
}
