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

    // Validate file type
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
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ]

    if (!allowedTypes.includes(file.type)) {
      return errorResponse('File type not supported', 400)
    }

    // Validate file size (10MB limit)
    const maxSize = 10 * 1024 * 1024 // 10MB
    if (file.size > maxSize) {
      return errorResponse('File size too large. Maximum size is 10MB', 400)
    }

    // For development, we'll simulate Cloudinary upload
    // In production, you would integrate with actual Cloudinary API
    const simulatedUpload = await simulateCloudinaryUpload(file)

    // Create media record in database
    const mediaFile = await db.media.create({
      data: {
        filename: simulatedUpload.public_id,
        originalName: file.name,
        url: simulatedUpload.secure_url,
        altText: altText || '',
        size: file.size,
        mimeType: file.type,
        width: simulatedUpload.width,
        height: simulatedUpload.height,
      }
    })

    return successResponse(mediaFile, 'File uploaded successfully', 201)
  } catch (error) {
    return handleApiError(error)
  }
}

// Simulate Cloudinary upload for development
async function simulateCloudinaryUpload(file: File) {
  // Generate a unique filename
  const timestamp = Date.now()
  const randomId = Math.random().toString(36).substring(2, 15)
  const extension = file.name.split('.').pop()
  const public_id = `cms_${timestamp}_${randomId}`
  
  // For images, we can get dimensions
  let width: number | undefined
  let height: number | undefined

  if (file.type.startsWith('image/')) {
    try {
      const dimensions = await getImageDimensions(file)
      width = dimensions.width
      height = dimensions.height
    } catch (error) {
      // If we can't get dimensions, that's okay
      console.warn('Could not get image dimensions:', error)
    }
  }

  // Simulate Cloudinary response
  return {
    public_id,
    secure_url: `https://res.cloudinary.com/demo/image/upload/v${timestamp}/${public_id}.${extension}`,
    width,
    height,
    format: extension,
    resource_type: file.type.startsWith('image/') ? 'image' : 
                   file.type.startsWith('video/') ? 'video' : 'raw',
    bytes: file.size,
    created_at: new Date().toISOString(),
  }
}

// Helper function to get image dimensions
function getImageDimensions(file: File): Promise<{ width: number; height: number }> {
  return new Promise((resolve, reject) => {
    if (!file.type.startsWith('image/')) {
      reject(new Error('Not an image file'))
      return
    }

    const img = new Image()
    const url = URL.createObjectURL(file)

    img.onload = () => {
      URL.revokeObjectURL(url)
      resolve({
        width: img.naturalWidth,
        height: img.naturalHeight
      })
    }

    img.onerror = () => {
      URL.revokeObjectURL(url)
      reject(new Error('Failed to load image'))
    }

    img.src = url
  })
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
