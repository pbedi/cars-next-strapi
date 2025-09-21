import { NextRequest } from 'next/server'
import { db } from '../../../../lib/cms/db'
import { createMediaSchema, paginationSchema, searchSchema } from '../../../../lib/cms/validations'
import {
  successResponse,
  errorResponse,
  paginatedResponse,
  handleApiError,
  parseRequestBody,
  getSearchParams,
  buildOrderBy,
  validateMethod,
} from '../../../../lib/cms/api-utils'

// GET /api/cms/media - List all media files
export async function GET(request: NextRequest) {
  try {
    validateMethod(request, 'GET')

    const searchParams = getSearchParams(request)
    const { page, limit, search, sortBy, sortOrder } = paginationSchema.parse(searchParams)

    // Build where clause for search (media doesn't have published field)
    const where: any = {}
    if (search) {
      where.OR = [
        { filename: { contains: search, mode: 'insensitive' } },
        { originalName: { contains: search, mode: 'insensitive' } },
        { altText: { contains: search, mode: 'insensitive' } }
      ]
    }

    // Add media type filter if provided
    if (searchParams.type) {
      const mediaType = searchParams.type
      if (mediaType === 'image') {
        where.mimeType = { startsWith: 'image/' }
      } else if (mediaType === 'video') {
        where.mimeType = { startsWith: 'video/' }
      } else if (mediaType === 'document') {
        where.mimeType = {
          not: {
            OR: [
              { startsWith: 'image/' },
              { startsWith: 'video/' }
            ]
          }
        }
      }
    }

    // Get total count
    const total = await db.media.count({ where })

    // Get media files
    const mediaFiles = await db.media.findMany({
      where,
      orderBy: buildOrderBy(sortBy, sortOrder, 'createdAt'),
      skip: (page - 1) * limit,
      take: limit,
    })

    return paginatedResponse(mediaFiles, { page, limit, total })
  } catch (error) {
    return handleApiError(error)
  }
}

// POST /api/cms/media - Create new media record (after upload)
export async function POST(request: NextRequest) {
  try {
    validateMethod(request, 'POST')

    const body = await parseRequestBody(request)
    const validatedData = createMediaSchema.parse(body)

    // Check if filename already exists
    const existingMedia = await db.media.findFirst({
      where: { filename: validatedData.filename }
    })

    if (existingMedia) {
      return errorResponse('Media file with this filename already exists', 400)
    }

    const mediaFile = await db.media.create({
      data: validatedData
    })

    return successResponse(mediaFile, 'Media file record created successfully', 201)
  } catch (error) {
    return handleApiError(error)
  }
}

// DELETE /api/cms/media/bulk - Bulk delete media files
export async function DELETE(request: NextRequest) {
  try {
    validateMethod(request, 'DELETE')

    const body = await parseRequestBody(request)
    const { ids } = body

    if (!Array.isArray(ids) || ids.length === 0) {
      return errorResponse('IDs array is required', 400)
    }

    // Note: In the current schema, Media doesn't have direct relationships
    // In a future version, you might want to add relationships and check usage
    // For now, we'll allow deletion since media files are standalone

    // Delete media files
    const result = await db.media.deleteMany({
      where: { id: { in: ids } }
    })

    return successResponse(
      { deletedCount: result.count },
      `Successfully deleted ${result.count} media files`
    )
  } catch (error) {
    return handleApiError(error)
  }
}
