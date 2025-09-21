import { NextRequest } from 'next/server'
import { db } from '../../../../../../cms/lib/db'
import { updatePageSchema } from '../../../../../../cms/lib/validations'
import {
  successResponse,
  errorResponse,
  handleApiError,
  parseRequestBody,
  validateMethod,
  validateId,
} from '../../../../../../cms/lib/api-utils'

// GET /api/cms/pages/[id] - Get a specific page
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    if (!validateMethod(request, ['GET'])) {
      return errorResponse('Method not allowed', 405)
    }

    const { id } = params

    if (!validateId(id)) {
      return errorResponse('Invalid page ID', 400)
    }

    const page = await db.page.findUnique({
      where: { id },
      include: {
        contentBlocks: {
          orderBy: { orderIndex: 'asc' }
        }
      }
    })

    if (!page) {
      return errorResponse('Page not found', 404)
    }

    return successResponse(page)
  } catch (error) {
    return handleApiError(error)
  }
}

// PUT /api/cms/pages/[id] - Update a specific page
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    if (!validateMethod(request, ['PUT'])) {
      return errorResponse('Method not allowed', 405)
    }

    const { id } = params

    if (!validateId(id)) {
      return errorResponse('Invalid page ID', 400)
    }

    const body = await parseRequestBody(request)
    const validatedData = updatePageSchema.parse({ ...body, id })

    // Check if page exists
    const existingPage = await db.page.findUnique({
      where: { id }
    })

    if (!existingPage) {
      return errorResponse('Page not found', 404)
    }

    // If slug is being updated, check for uniqueness
    if (validatedData.slug && validatedData.slug !== existingPage.slug) {
      const slugExists = await db.page.findFirst({
        where: {
          slug: validatedData.slug,
          id: { not: id }
        }
      })

      if (slugExists) {
        return errorResponse('Slug already exists', 400)
      }
    }

    const updatedPage = await db.page.update({
      where: { id },
      data: validatedData,
      include: {
        contentBlocks: {
          orderBy: { orderIndex: 'asc' }
        }
      }
    })

    return successResponse(updatedPage, 'Page updated successfully')
  } catch (error) {
    return handleApiError(error)
  }
}

// DELETE /api/cms/pages/[id] - Delete a specific page
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    if (!validateMethod(request, ['DELETE'])) {
      return errorResponse('Method not allowed', 405)
    }

    const { id } = params

    if (!validateId(id)) {
      return errorResponse('Invalid page ID', 400)
    }

    // Check if page exists
    const existingPage = await db.page.findUnique({
      where: { id }
    })

    if (!existingPage) {
      return errorResponse('Page not found', 404)
    }

    // Delete the page (content blocks will be deleted automatically due to cascade)
    await db.page.delete({
      where: { id }
    })

    return successResponse(null, 'Page deleted successfully')
  } catch (error) {
    return handleApiError(error)
  }
}

// OPTIONS - Handle CORS preflight
export async function OPTIONS() {
  return new Response(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  })
}
