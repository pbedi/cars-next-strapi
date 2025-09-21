import { NextRequest } from 'next/server'
import { db } from '../../../../../lib/cms/db'
import { updateNavigationItemSchema } from '../../../../../lib/cms/validations'
import {
  successResponse,
  errorResponse,
  handleApiError,
  parseRequestBody,
  validateMethod,
  validateId,
} from '../../../../../lib/cms/api-utils'

// GET /api/cms/navigation/[id] - Get navigation item by ID
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    validateMethod(request, 'GET')
    const id = validateId(params.id)

    const navigationItem = await db.navigationItem.findUnique({
      where: { id },
      include: {
        parent: {
          select: { id: true, label: true, url: true }
        },
        children: {
          select: { id: true, label: true, url: true, orderIndex: true },
          orderBy: { orderIndex: 'asc' }
        }
      }
    })

    if (!navigationItem) {
      return errorResponse('Navigation item not found', 404)
    }

    return successResponse(navigationItem)
  } catch (error) {
    return handleApiError(error)
  }
}

// PUT /api/cms/navigation/[id] - Update navigation item
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    validateMethod(request, 'PUT')
    const id = validateId(params.id)

    const body = await parseRequestBody(request)
    const validatedData = updateNavigationItemSchema.parse(body)

    // Check if navigation item exists
    const existingItem = await db.navigationItem.findUnique({
      where: { id }
    })

    if (!existingItem) {
      return errorResponse('Navigation item not found', 404)
    }

    // Check slug uniqueness if slug is being updated
    if (validatedData.slug && validatedData.slug !== existingItem.slug) {
      const slugExists = await db.navigationItem.findFirst({
        where: {
          slug: validatedData.slug,
          id: { not: id }
        }
      })

      if (slugExists) {
        return errorResponse('Navigation item with this slug already exists', 400)
      }
    }

    // If parent is being changed, verify it exists and prevent circular references
    if (validatedData.parentId !== undefined) {
      if (validatedData.parentId) {
        // Check if parent exists
        const parentExists = await db.navigationItem.findUnique({
          where: { id: validatedData.parentId }
        })

        if (!parentExists) {
          return errorResponse('Parent navigation item not found', 400)
        }

        // Prevent circular references (item cannot be its own parent or grandparent)
        if (validatedData.parentId === id) {
          return errorResponse('Navigation item cannot be its own parent', 400)
        }

        // Check for deeper circular references
        const checkCircular = async (parentId: string, depth = 0): Promise<boolean> => {
          if (depth > 10) return true // Prevent infinite recursion

          const parent = await db.navigationItem.findUnique({
            where: { id: parentId },
            select: { parentId: true }
          })

          if (!parent) return false
          if (parent.parentId === id) return true
          if (parent.parentId) return checkCircular(parent.parentId, depth + 1)

          return false
        }

        const isCircular = await checkCircular(validatedData.parentId)
        if (isCircular) {
          return errorResponse('Circular reference detected in navigation hierarchy', 400)
        }
      }
    }

    const updatedItem = await db.navigationItem.update({
      where: { id },
      data: validatedData,
      include: {
        parent: {
          select: { id: true, label: true, url: true }
        },
        children: {
          select: { id: true, label: true, url: true, orderIndex: true },
          orderBy: { orderIndex: 'asc' }
        }
      }
    })

    return successResponse(updatedItem, 'Navigation item updated successfully')
  } catch (error) {
    return handleApiError(error)
  }
}

// DELETE /api/cms/navigation/[id] - Delete navigation item
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    validateMethod(request, 'DELETE')
    const id = validateId(params.id)

    // Check if navigation item exists
    const existingItem = await db.navigationItem.findUnique({
      where: { id },
      include: {
        children: { select: { id: true } }
      }
    })

    if (!existingItem) {
      return errorResponse('Navigation item not found', 404)
    }

    // Check if item has children
    if (existingItem.children.length > 0) {
      return errorResponse('Cannot delete navigation item with children. Please delete or move children first.', 400)
    }

    await db.navigationItem.delete({
      where: { id }
    })

    return successResponse(null, 'Navigation item deleted successfully')
  } catch (error) {
    return handleApiError(error)
  }
}
