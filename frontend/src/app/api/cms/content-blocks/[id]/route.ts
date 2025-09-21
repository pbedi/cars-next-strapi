import { NextRequest } from 'next/server'
import { db } from '../../../../../lib/cms/db'
import { updateContentBlockSchema } from '../../../../../lib/cms/validations'
import {
  successResponse,
  errorResponse,
  handleApiError,
  parseRequestBody,
  validateMethod,
  validateId,
} from '../../../../../lib/cms/api-utils'

// GET /api/cms/content-blocks/[id] - Get content block by ID
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    validateMethod(request, 'GET')
    const id = validateId(params.id)

    const contentBlock = await db.contentBlock.findUnique({
      where: { id },
      include: {
        page: {
          select: { id: true, title: true, slug: true }
        }
      }
    })

    if (!contentBlock) {
      return errorResponse('Content block not found', 404)
    }

    return successResponse(contentBlock)
  } catch (error) {
    return handleApiError(error)
  }
}

// PUT /api/cms/content-blocks/[id] - Update content block
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    validateMethod(request, 'PUT')
    const id = validateId(params.id)

    const body = await parseRequestBody(request)
    const validatedData = updateContentBlockSchema.parse(body)

    // Check if content block exists
    const existingBlock = await db.contentBlock.findUnique({
      where: { id }
    })

    if (!existingBlock) {
      return errorResponse('Content block not found', 404)
    }

    // If page is being changed, verify it exists
    if (validatedData.pageId && validatedData.pageId !== existingBlock.pageId) {
      const pageExists = await db.page.findUnique({
        where: { id: validatedData.pageId }
      })

      if (!pageExists) {
        return errorResponse('Page not found', 400)
      }
    }

    const updatedBlock = await db.contentBlock.update({
      where: { id },
      data: validatedData,
      include: {
        page: {
          select: { id: true, title: true, slug: true }
        }
      }
    })

    return successResponse(updatedBlock, 'Content block updated successfully')
  } catch (error) {
    return handleApiError(error)
  }
}

// DELETE /api/cms/content-blocks/[id] - Delete content block
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    validateMethod(request, 'DELETE')
    const id = validateId(params.id)

    // Check if content block exists
    const existingBlock = await db.contentBlock.findUnique({
      where: { id }
    })

    if (!existingBlock) {
      return errorResponse('Content block not found', 404)
    }

    await db.contentBlock.delete({
      where: { id }
    })

    return successResponse(null, 'Content block deleted successfully')
  } catch (error) {
    return handleApiError(error)
  }
}
