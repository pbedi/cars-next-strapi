import { NextRequest } from 'next/server'
import { db } from '../../../../lib/cms/db'
import {
  successResponse,
  errorResponse,
  handleApiError,
  parseRequestBody,
  validateMethod,
} from '../../../../lib/cms/api-utils'

// GET /api/cms/seo - Get SEO analytics and insights
export async function GET(request: NextRequest) {
  try {
    validateMethod(request, 'GET')

    // Get basic page statistics (simplified for now)
    const stats = await Promise.all([
      // Total pages
      db.page.count(),

      // Published pages
      db.page.count({
        where: { published: true }
      }),

      // Pages with SEO data
      db.page.count({
        where: {
          seoData: {
            not: null
          }
        }
      }),

      // Car series count
      db.carSeries.count(),
    ])

    const [
      totalPages,
      publishedPages,
      pagesWithSEO,
      totalCarSeries
    ] = stats

    // Get recent pages for SEO review
    const recentPages = await db.page.findMany({
      select: {
        id: true,
        title: true,
        slug: true,
        seoData: true,
        published: true,
        updatedAt: true
      },
      take: 10,
      orderBy: { updatedAt: 'desc' }
    })

    const seoData = {
      overview: {
        totalPages,
        publishedPages,
        pagesWithSEO,
        totalCarSeries,
        seoScore: totalPages > 0 ? Math.round((pagesWithSEO / totalPages) * 100) : 0
      },
      recentPages,
      recommendations: [
        'Add meta descriptions to pages without SEO data',
        'Optimize page titles for search engines',
        'Review and update existing SEO metadata',
        'Ensure all published pages have proper SEO data'
      ]
    }

    return successResponse(seoData)
  } catch (error) {
    return handleApiError(error)
  }
}

// POST /api/cms/seo/bulk-update - Bulk update SEO data
export async function POST(request: NextRequest) {
  try {
    validateMethod(request, 'POST')

    const body = await parseRequestBody(request)
    const { action, pageIds } = body

    if (!action || !Array.isArray(pageIds)) {
      return errorResponse('Action and pageIds array are required', 400)
    }

    let updatedCount = 0

    switch (action) {
      case 'generate_seo_data':
        for (const pageId of pageIds) {
          const page = await db.page.findUnique({
            where: { id: pageId },
            select: { title: true, seoData: true }
          })

          if (page) {
            const currentSeoData = (page.seoData as any) || {}
            await db.page.update({
              where: { id: pageId },
              data: {
                seoData: {
                  ...currentSeoData,
                  metaTitle: currentSeoData.metaTitle || `${page.title} | JuniorCars`,
                  metaDescription: currentSeoData.metaDescription || `Learn more about ${page.title} at JuniorCars.`
                }
              }
            })
            updatedCount++
          }
        }
      default:
        return errorResponse('Invalid action', 400)
    }

    return successResponse(
      { updatedCount },
      `Successfully updated ${updatedCount} pages`
    )
  } catch (error) {
    return handleApiError(error)
  }
}


