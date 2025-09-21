import { NextRequest } from 'next/server'
import { db } from '../../../../../lib/cms/db'
import { updateMediaSchema } from '../../../../../lib/cms/validations'
import {
  successResponse,
  errorResponse,
  handleApiError,
  parseRequestBody,
  validateMethod,
  validateId,
} from '../../../../../lib/cms/api-utils'

// GET /api/cms/media/[id] - Get media file by ID
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    validateMethod(request, 'GET')
    const id = validateId(params.id)

    const mediaFile = await db.media.findUnique({
      where: { id },
      include: {
        pages: {
          select: { id: true, title: true, slug: true }
        },
        carSeries: {
          select: { id: true, name: true, slug: true }
        },
        contentBlocks: {
          select: { id: true, type: true, page: { select: { title: true } } }
        }
      }
    })

    if (!mediaFile) {
      return errorResponse('Media file not found', 404)
    }

    return successResponse(mediaFile)
  } catch (error) {
    return handleApiError(error)
  }
}

// PUT /api/cms/media/[id] - Update media file metadata
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    validateMethod(request, 'PUT')
    const id = validateId(params.id)

    const body = await parseRequestBody(request)
    const validatedData = updateMediaSchema.parse(body)

    // Check if media file exists
    const existingMedia = await db.media.findUnique({
      where: { id }
    })

    if (!existingMedia) {
      return errorResponse('Media file not found', 404)
    }

    // Check filename uniqueness if filename is being updated
    if (validatedData.filename && validatedData.filename !== existingMedia.filename) {
      const filenameExists = await db.media.findFirst({
        where: {
          filename: validatedData.filename,
          id: { not: id }
        }
      })

      if (filenameExists) {
        return errorResponse('Media file with this filename already exists', 400)
      }
    }

    const updatedMedia = await db.media.update({
      where: { id },
      data: validatedData,
      include: {
        pages: {
          select: { id: true, title: true, slug: true }
        },
        carSeries: {
          select: { id: true, name: true, slug: true }
        },
        contentBlocks: {
          select: { id: true, type: true, page: { select: { title: true } } }
        }
      }
    })

    return successResponse(updatedMedia, 'Media file updated successfully')
  } catch (error) {
    return handleApiError(error)
  }
}

// DELETE /api/cms/media/[id] - Delete media file
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    validateMethod(request, 'DELETE')
    const id = validateId(params.id)

    // Check if media file exists
    const existingMedia = await db.media.findUnique({
      where: { id },
      include: {
        pages: { select: { id: true } },
        carSeries: { select: { id: true } },
        contentBlocks: { select: { id: true } }
      }
    })

    if (!existingMedia) {
      return errorResponse('Media file not found', 404)
    }

    // Check if media file is in use
    const isInUse = existingMedia.pages.length > 0 || 
                   existingMedia.carSeries.length > 0 || 
                   existingMedia.contentBlocks.length > 0

    if (isInUse) {
      return errorResponse(
        'Cannot delete media file that is currently in use. Please remove it from all pages and content first.',
        400
      )
    }

    await db.media.delete({
      where: { id }
    })

    return successResponse(null, 'Media file deleted successfully')
  } catch (error) {
    return handleApiError(error)
  }
}
