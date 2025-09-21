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

    // Get SEO statistics
    const stats = await Promise.all([
      // Pages with missing meta titles
      db.page.count({
        where: {
          OR: [
            { metaTitle: null },
            { metaTitle: '' }
          ]
        }
      }),
      
      // Pages with missing meta descriptions
      db.page.count({
        where: {
          OR: [
            { metaDescription: null },
            { metaDescription: '' }
          ]
        }
      }),

      // Pages with long meta titles (>60 chars)
      db.page.count({
        where: {
          metaTitle: {
            not: null
          }
        }
      }).then(async (total) => {
        const pages = await db.page.findMany({
          where: {
            metaTitle: { not: null }
          },
          select: { metaTitle: true }
        })
        return pages.filter(p => p.metaTitle && p.metaTitle.length > 60).length
      }),

      // Pages with long meta descriptions (>160 chars)
      db.page.count({
        where: {
          metaDescription: {
            not: null
          }
        }
      }).then(async (total) => {
        const pages = await db.page.findMany({
          where: {
            metaDescription: { not: null }
          },
          select: { metaDescription: true }
        })
        return pages.filter(p => p.metaDescription && p.metaDescription.length > 160).length
      }),

      // Duplicate meta titles
      db.page.groupBy({
        by: ['metaTitle'],
        where: {
          metaTitle: { not: null }
        },
        _count: true,
        having: {
          metaTitle: {
            _count: {
              gt: 1
            }
          }
        }
      }).then(groups => groups.length),

      // Published pages count
      db.page.count({
        where: { published: true }
      }),

      // Total pages count
      db.page.count()
    ])

    const [
      missingMetaTitles,
      missingMetaDescriptions,
      longMetaTitles,
      longMetaDescriptions,
      duplicateMetaTitles,
      publishedPages,
      totalPages
    ] = stats

    // Get pages with SEO issues
    const pagesWithIssues = await db.page.findMany({
      where: {
        OR: [
          { metaTitle: null },
          { metaTitle: '' },
          { metaDescription: null },
          { metaDescription: '' }
        ]
      },
      select: {
        id: true,
        title: true,
        slug: true,
        metaTitle: true,
        metaDescription: true,
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
        seoScore: Math.round(((totalPages - missingMetaTitles - missingMetaDescriptions) / (totalPages * 2)) * 100)
      },
      issues: {
        missingMetaTitles,
        missingMetaDescriptions,
        longMetaTitles,
        longMetaDescriptions,
        duplicateMetaTitles
      },
      pagesWithIssues,
      recommendations: generateSEORecommendations({
        missingMetaTitles,
        missingMetaDescriptions,
        longMetaTitles,
        longMetaDescriptions,
        duplicateMetaTitles,
        totalPages
      })
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
    const { action, pageIds, template } = body

    if (!action || !Array.isArray(pageIds)) {
      return errorResponse('Action and pageIds array are required', 400)
    }

    let updatedCount = 0

    switch (action) {
      case 'generate_meta_titles':
        for (const pageId of pageIds) {
          const page = await db.page.findUnique({
            where: { id: pageId },
            select: { title: true }
          })
          
          if (page) {
            await db.page.update({
              where: { id: pageId },
              data: {
                metaTitle: template ? 
                  template.replace('{title}', page.title) : 
                  `${page.title} | JuniorCars`
              }
            })
            updatedCount++
          }
        }
        break

      case 'generate_meta_descriptions':
        for (const pageId of pageIds) {
          const page = await db.page.findUnique({
            where: { id: pageId },
            select: { title: true, content: true }
          })
          
          if (page) {
            const description = template ? 
              template.replace('{title}', page.title) :
              generateMetaDescription(page.title, page.content)
            
            await db.page.update({
              where: { id: pageId },
              data: { metaDescription: description }
            })
            updatedCount++
          }
        }
        break

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

function generateSEORecommendations(issues: any) {
  const recommendations = []

  if (issues.missingMetaTitles > 0) {
    recommendations.push({
      type: 'error',
      title: 'Missing Meta Titles',
      description: `${issues.missingMetaTitles} pages are missing meta titles`,
      action: 'Add unique, descriptive meta titles (50-60 characters)',
      priority: 'high'
    })
  }

  if (issues.missingMetaDescriptions > 0) {
    recommendations.push({
      type: 'error',
      title: 'Missing Meta Descriptions',
      description: `${issues.missingMetaDescriptions} pages are missing meta descriptions`,
      action: 'Add compelling meta descriptions (150-160 characters)',
      priority: 'high'
    })
  }

  if (issues.longMetaTitles > 0) {
    recommendations.push({
      type: 'warning',
      title: 'Long Meta Titles',
      description: `${issues.longMetaTitles} pages have meta titles longer than 60 characters`,
      action: 'Shorten meta titles to improve search result display',
      priority: 'medium'
    })
  }

  if (issues.longMetaDescriptions > 0) {
    recommendations.push({
      type: 'warning',
      title: 'Long Meta Descriptions',
      description: `${issues.longMetaDescriptions} pages have meta descriptions longer than 160 characters`,
      action: 'Shorten meta descriptions to prevent truncation',
      priority: 'medium'
    })
  }

  if (issues.duplicateMetaTitles > 0) {
    recommendations.push({
      type: 'warning',
      title: 'Duplicate Meta Titles',
      description: `${issues.duplicateMetaTitles} meta titles are used on multiple pages`,
      action: 'Make each meta title unique to avoid SEO conflicts',
      priority: 'medium'
    })
  }

  return recommendations
}

function generateMetaDescription(title: string, content?: string): string {
  if (content) {
    // Extract first sentence or 150 characters from content
    const plainText = content.replace(/<[^>]*>/g, '').trim()
    const firstSentence = plainText.split('.')[0]
    
    if (firstSentence.length <= 150) {
      return firstSentence + '.'
    } else {
      return plainText.substring(0, 147) + '...'
    }
  }
  
  return `Learn more about ${title} at JuniorCars. Discover amazing cars and automotive content.`
}
