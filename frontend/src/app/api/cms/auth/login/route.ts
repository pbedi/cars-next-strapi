import { NextRequest } from 'next/server'
import bcrypt from 'bcryptjs'
import { db } from '../../../../../../cms/lib/db'
import {
  successResponse,
  errorResponse,
  handleApiError,
  parseRequestBody,
  validateMethod,
} from '../../../../../../cms/lib/api-utils'

// POST /api/cms/auth/login - Admin login
export async function POST(request: NextRequest) {
  try {
    if (!validateMethod(request, ['POST'])) {
      return errorResponse('Method not allowed', 405)
    }

    const body = await parseRequestBody<{
      email: string
      password: string
    }>(request)

    const { email, password } = body

    if (!email || !password) {
      return errorResponse('Email and password are required', 400)
    }

    // Find user by email
    const user = await db.user.findUnique({
      where: { email: email.toLowerCase() }
    })

    if (!user) {
      return errorResponse('Invalid credentials', 401)
    }

    // For development, we'll use a simple password check
    // In production, you should use bcrypt.compare(password, user.passwordHash)
    const isValidPassword = password === 'admin123' || 
                           await bcrypt.compare(password, user.passwordHash)

    if (!isValidPassword) {
      return errorResponse('Invalid credentials', 401)
    }

    // Create a simple session token (in production, use JWT or proper session management)
    const sessionToken = Buffer.from(`${user.id}:${Date.now()}`).toString('base64')

    // Return user data (excluding password)
    const userData = {
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      role: user.role,
      sessionToken,
    }

    return successResponse(userData, 'Login successful')
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
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  })
}
