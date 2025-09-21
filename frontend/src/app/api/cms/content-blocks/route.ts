import { NextRequest } from 'next/server'
import { db } from '../../../../lib/cms/db'
import { createContentBlockSchema, paginationSchema } from '../../../../lib/cms/validations'
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

// GET /api/cms/content-blocks - List content blocks (optionally filtered by page)
export async function GET(request: NextRequest) {
  try {
    validateMethod(request, 'GET')

    const searchParams = getSearchParams(request)
    const { page, limit, sortBy, sortOrder } = paginationSchema.parse(searchParams)
    const pageId = searchParams.pageId

    // Build where clause
    const where: any = {}
    if (pageId) {
      where.pageId = pageId
    }

    // Get total count
    const total = await db.contentBlock.count({ where })

    // Get content blocks
    const contentBlocks = await db.contentBlock.findMany({
      where,
      include: {
        page: {
          select: { id: true, title: true, slug: true }
        }
      },
      orderBy: buildOrderBy(sortBy, sortOrder, 'orderIndex'),
      skip: (page - 1) * limit,
      take: limit,
    })

    return paginatedResponse(contentBlocks, { page, limit, total })
  } catch (error) {
    return handleApiError(error)
  }
}

// POST /api/cms/content-blocks - Create new content block
export async function POST(request: NextRequest) {
  try {
    validateMethod(request, 'POST')

    const body = await parseRequestBody(request)
    const validatedData = createContentBlockSchema.parse(body)

    // Verify page exists
    const pageExists = await db.page.findUnique({
      where: { id: validatedData.pageId }
    })

    if (!pageExists) {
      return errorResponse('Page not found', 400)
    }

    // Set order index if not provided
    if (!validatedData.orderIndex) {
      const maxOrder = await db.contentBlock.aggregate({
        where: { pageId: validatedData.pageId },
        _max: { orderIndex: true }
      })
      validatedData.orderIndex = (maxOrder._max.orderIndex || 0) + 1
    }

    const contentBlock = await db.contentBlock.create({
      data: validatedData,
      include: {
        page: {
          select: { id: true, title: true, slug: true }
        }
      }
    })

    return successResponse(contentBlock, 'Content block created successfully', 201)
  } catch (error) {
    return handleApiError(error)
  }
}

// PUT /api/cms/content-blocks/reorder - Reorder content blocks
export async function PUT(request: NextRequest) {
  try {
    validateMethod(request, 'PUT')

    const body = await parseRequestBody(request)
    const { blocks } = body

    if (!Array.isArray(blocks)) {
      return errorResponse('Blocks must be an array', 400)
    }

    // Update order indexes in a transaction
    await db.$transaction(async (tx) => {
      for (const block of blocks) {
        await tx.contentBlock.update({
          where: { id: block.id },
          data: { orderIndex: block.orderIndex }
        })
      }
    })

    return successResponse(null, 'Content blocks reordered successfully')
  } catch (error) {
    return handleApiError(error)
  }
}
