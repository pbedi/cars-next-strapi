import { NextRequest } from 'next/server'
import { db } from '../../../../lib/cms/db'
import { createNavigationItemSchema, paginationSchema, searchSchema } from '../../../../lib/cms/validations'
import {
  successResponse,
  errorResponse,
  paginatedResponse,
  handleApiError,
  parseRequestBody,
  getSearchParams,
  buildWhereClause,
  buildOrderBy,
  validateMethod,
  generateSlug,
} from '../../../../lib/cms/api-utils'

// GET /api/cms/navigation - List all navigation items with hierarchy
export async function GET(request: NextRequest) {
  try {
    validateMethod(request, 'GET')

    const searchParams = getSearchParams(request)
    const { page, limit, search, sortBy, sortOrder } = paginationSchema.parse(searchParams)

    // Build where clause for search (navigation items don't have published field)
    const where: any = {}
    if (search) {
      where.OR = [
        { label: { contains: search, mode: 'insensitive' } },
        { url: { contains: search, mode: 'insensitive' } }
      ]
    }

    // Get total count
    const total = await db.navigationItem.count({ where })

    // Get navigation items with hierarchy (parent-child relationships)
    const navigationItems = await db.navigationItem.findMany({
      where,
      include: {
        parent: {
          select: { id: true, label: true, url: true }
        },
        children: {
          select: { id: true, label: true, url: true, orderIndex: true },
          orderBy: { orderIndex: 'asc' }
        }
      },
      orderBy: buildOrderBy(sortBy, sortOrder, 'orderIndex'),
      skip: (page - 1) * limit,
      take: limit,
    })

    return paginatedResponse(navigationItems, { page, limit, total })
  } catch (error) {
    return handleApiError(error)
  }
}

// POST /api/cms/navigation - Create new navigation item
export async function POST(request: NextRequest) {
  try {
    validateMethod(request, 'POST')

    const body = await parseRequestBody(request)
    const validatedData = createNavigationItemSchema.parse(body)

    // Check for label uniqueness at the same level
    const existingItem = await db.navigationItem.findFirst({
      where: {
        label: validatedData.label,
        parentId: validatedData.parentId || null
      }
    })

    if (existingItem) {
      return errorResponse('Navigation item with this label already exists at this level', 400)
    }

    // If parent is specified, verify it exists
    if (validatedData.parentId) {
      const parentExists = await db.navigationItem.findUnique({
        where: { id: validatedData.parentId }
      })

      if (!parentExists) {
        return errorResponse('Parent navigation item not found', 400)
      }
    }

    // Set order index if not provided
    if (!validatedData.orderIndex) {
      const maxOrder = await db.navigationItem.aggregate({
        where: { parentId: validatedData.parentId || null },
        _max: { orderIndex: true }
      })
      validatedData.orderIndex = (maxOrder._max.orderIndex || 0) + 1
    }

    const navigationItem = await db.navigationItem.create({
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

    return successResponse(navigationItem, 'Navigation item created successfully', 201)
  } catch (error) {
    return handleApiError(error)
  }
}

// PUT /api/cms/navigation/reorder - Reorder navigation items
export async function PUT(request: NextRequest) {
  try {
    validateMethod(request, 'PUT')

    const body = await parseRequestBody(request)
    const { items } = body

    if (!Array.isArray(items)) {
      return errorResponse('Items must be an array', 400)
    }

    // Update order indexes in a transaction
    await db.$transaction(async (tx) => {
      for (const item of items) {
        await tx.navigationItem.update({
          where: { id: item.id },
          data: {
            orderIndex: item.orderIndex,
            parentId: item.parentId || null
          }
        })
      }
    })

    return successResponse(null, 'Navigation items reordered successfully')
  } catch (error) {
    return handleApiError(error)
  }
}
