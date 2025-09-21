import { NextRequest } from 'next/server'
import { db } from '../../../../../../cms/lib/db'
import { updateCarSeriesSchema } from '../../../../../../cms/lib/validations'
import {
  successResponse,
  errorResponse,
  handleApiError,
  parseRequestBody,
  validateMethod,
  validateId,
} from '../../../../../../cms/lib/api-utils'

// GET /api/cms/car-series/[id] - Get a specific car series
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
      return errorResponse('Invalid car series ID', 400)
    }

    const carSeries = await db.carSeries.findUnique({
      where: { id },
    })

    if (!carSeries) {
      return errorResponse('Car series not found', 404)
    }

    return successResponse(carSeries)
  } catch (error) {
    return handleApiError(error)
  }
}

// PUT /api/cms/car-series/[id] - Update a specific car series
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
      return errorResponse('Invalid car series ID', 400)
    }

    const body = await parseRequestBody(request)
    const validatedData = updateCarSeriesSchema.parse({ ...body, id })

    // Check if car series exists
    const existingCarSeries = await db.carSeries.findUnique({
      where: { id }
    })

    if (!existingCarSeries) {
      return errorResponse('Car series not found', 404)
    }

    // If slug is being updated, check for uniqueness
    if (validatedData.slug && validatedData.slug !== existingCarSeries.slug) {
      const slugExists = await db.carSeries.findFirst({
        where: {
          slug: validatedData.slug,
          id: { not: id }
        }
      })

      if (slugExists) {
        return errorResponse('Slug already exists', 400)
      }
    }

    const updatedCarSeries = await db.carSeries.update({
      where: { id },
      data: validatedData,
    })

    return successResponse(updatedCarSeries, 'Car series updated successfully')
  } catch (error) {
    return handleApiError(error)
  }
}

// DELETE /api/cms/car-series/[id] - Delete a specific car series
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
      return errorResponse('Invalid car series ID', 400)
    }

    // Check if car series exists
    const existingCarSeries = await db.carSeries.findUnique({
      where: { id }
    })

    if (!existingCarSeries) {
      return errorResponse('Car series not found', 404)
    }

    // Delete the car series
    await db.carSeries.delete({
      where: { id }
    })

    return successResponse(null, 'Car series deleted successfully')
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
