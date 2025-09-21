import { NextRequest, NextResponse } from 'next/server'
import { ZodError } from 'zod'
import { ApiResponse, PaginatedResponse } from '../types'

// API Response helpers
export function successResponse<T>(data: T, message?: string): NextResponse<ApiResponse<T>> {
  return NextResponse.json({
    success: true,
    data,
    message,
  })
}

export function errorResponse(error: string, status: number = 400): NextResponse<ApiResponse> {
  return NextResponse.json(
    {
      success: false,
      error,
    },
    { status }
  )
}

export function paginatedResponse<T>(
  data: T[],
  page: number,
  limit: number,
  total: number
): NextResponse<PaginatedResponse<T>> {
  return NextResponse.json({
    success: true,
    data,
    pagination: {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
    },
  })
}

// Error handling
export function handleApiError(error: unknown): NextResponse<ApiResponse> {
  console.error('API Error:', error)

  if (error instanceof ZodError) {
    return errorResponse(
      `Validation error: ${error.errors.map(e => e.message).join(', ')}`,
      400
    )
  }

  if (error instanceof Error) {
    // Don't expose internal errors in production
    const message = process.env.NODE_ENV === 'development' 
      ? error.message 
      : 'Internal server error'
    return errorResponse(message, 500)
  }

  return errorResponse('Unknown error occurred', 500)
}

// Request parsing helpers
export async function parseRequestBody<T>(request: NextRequest): Promise<T> {
  try {
    return await request.json()
  } catch {
    throw new Error('Invalid JSON in request body')
  }
}

export function getSearchParams(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  return {
    page: parseInt(searchParams.get('page') || '1'),
    limit: Math.min(parseInt(searchParams.get('limit') || '10'), 100),
    q: searchParams.get('q') || undefined,
    published: searchParams.get('published') === 'true' ? true : 
               searchParams.get('published') === 'false' ? false : undefined,
    sortBy: searchParams.get('sortBy') || 'createdAt',
    sortOrder: (searchParams.get('sortOrder') || 'desc') as 'asc' | 'desc',
  }
}

// Database query helpers
export function buildWhereClause(searchParams: ReturnType<typeof getSearchParams>) {
  const where: any = {}

  if (searchParams.published !== undefined) {
    where.published = searchParams.published
  }

  if (searchParams.q) {
    where.OR = [
      { title: { contains: searchParams.q, mode: 'insensitive' } },
      { name: { contains: searchParams.q, mode: 'insensitive' } },
      { description: { contains: searchParams.q, mode: 'insensitive' } },
    ]
  }

  return where
}

export function buildOrderBy(sortBy: string, sortOrder: 'asc' | 'desc') {
  return { [sortBy]: sortOrder }
}

// Slug generation helper
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single
    .trim()
}

// CORS headers for API routes
export function corsHeaders() {
  return {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  }
}

// Method validation
export function validateMethod(request: NextRequest, allowedMethods: string[]): boolean {
  return allowedMethods.includes(request.method)
}

// ID validation
export function validateId(id: string): boolean {
  // Basic CUID validation (starts with 'c' and is 25 characters long)
  return /^c[a-z0-9]{24}$/.test(id)
}
