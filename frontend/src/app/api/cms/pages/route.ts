import { NextRequest } from 'next/server'
import { db } from '../../../../../cms/lib/db'
import { createPageSchema, paginationSchema, searchSchema } from '../../../../../cms/lib/validations'
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
} from '../../../../../cms/lib/api-utils'

// GET /api/cms/pages - List all pages with pagination and search
export async function GET(request: NextRequest) {
  try {
    if (!validateMethod(request, ['GET'])) {
      return errorResponse('Method not allowed', 405)
    }

    const searchParams = getSearchParams(request)
    
    // Validate query parameters
    const validatedParams = paginationSchema.merge(searchSchema).parse(searchParams)
    
    const where = buildWhereClause(validatedParams)
    const orderBy = buildOrderBy(validatedParams.sortBy, validatedParams.sortOrder)

    // Get total count for pagination
    const total = await db.page.count({ where })

    // Get pages with pagination
    const pages = await db.page.findMany({
      where,
      orderBy,
      skip: (validatedParams.page - 1) * validatedParams.limit,
      take: validatedParams.limit,
      include: {
        contentBlocks: {
          orderBy: { orderIndex: 'asc' }
        }
      }
    })

    return paginatedResponse(pages, validatedParams.page, validatedParams.limit, total)
  } catch (error) {
    return handleApiError(error)
  }
}

// POST /api/cms/pages - Create a new page
export async function POST(request: NextRequest) {
  try {
    if (!validateMethod(request, ['POST'])) {
      return errorResponse('Method not allowed', 405)
    }

    const body = await parseRequestBody(request)
    const validatedData = createPageSchema.parse(body)

    // Generate slug if not provided or ensure uniqueness
    let slug = validatedData.slug || generateSlug(validatedData.title)
    
    // Check if slug already exists
    const existingPage = await db.page.findUnique({
      where: { slug }
    })

    if (existingPage) {
      // Append timestamp to make it unique
      slug = `${slug}-${Date.now()}`
    }

    const page = await db.page.create({
      data: {
        ...validatedData,
        slug,
      },
      include: {
        contentBlocks: {
          orderBy: { orderIndex: 'asc' }
        }
      }
    })

    return successResponse(page, 'Page created successfully')
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
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  })
}
