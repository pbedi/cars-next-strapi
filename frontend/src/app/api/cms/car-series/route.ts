import { NextRequest } from 'next/server'
import { db } from '../../../../../cms/lib/db'
import { createCarSeriesSchema, paginationSchema, searchSchema } from '../../../../../cms/lib/validations'
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

// GET /api/cms/car-series - List all car series with pagination and search
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
    const total = await db.carSeries.count({ where })

    // Get car series with pagination
    const carSeries = await db.carSeries.findMany({
      where,
      orderBy,
      skip: (validatedParams.page - 1) * validatedParams.limit,
      take: validatedParams.limit,
    })

    return paginatedResponse(carSeries, validatedParams.page, validatedParams.limit, total)
  } catch (error) {
    return handleApiError(error)
  }
}

// POST /api/cms/car-series - Create a new car series
export async function POST(request: NextRequest) {
  try {
    if (!validateMethod(request, ['POST'])) {
      return errorResponse('Method not allowed', 405)
    }

    const body = await parseRequestBody(request)
    const validatedData = createCarSeriesSchema.parse(body)

    // Generate slug if not provided or ensure uniqueness
    let slug = validatedData.slug || generateSlug(validatedData.name)
    
    // Check if slug already exists
    const existingCarSeries = await db.carSeries.findUnique({
      where: { slug }
    })

    if (existingCarSeries) {
      // Append timestamp to make it unique
      slug = `${slug}-${Date.now()}`
    }

    const carSeries = await db.carSeries.create({
      data: {
        ...validatedData,
        slug,
      },
    })

    return successResponse(carSeries, 'Car series created successfully')
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
