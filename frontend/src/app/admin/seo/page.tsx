'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

interface SEOData {
  overview: {
    totalPages: number
    publishedPages: number
    seoScore: number
  }
  issues: {
    missingMetaTitles: number
    missingMetaDescriptions: number
    longMetaTitles: number
    longMetaDescriptions: number
    duplicateMetaTitles: number
  }
  pagesWithIssues: Array<{
    id: string
    title: string
    slug: string
    metaTitle?: string
    metaDescription?: string
    published: boolean
    updatedAt: string
  }>
  recommendations: Array<{
    type: 'error' | 'warning' | 'info'
    title: string
    description: string
    action: string
    priority: 'high' | 'medium' | 'low'
  }>
}

export default function SEOManagement() {
  const router = useRouter()
  const [seoData, setSeoData] = useState<SEOData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [selectedPages, setSelectedPages] = useState<Set<string>>(new Set())
  const [bulkAction, setBulkAction] = useState('')
  const [processing, setProcessing] = useState(false)

  useEffect(() => {
    // Check authentication
    const token = localStorage.getItem('cms_token')
    if (!token) {
      router.push('/admin/login')
      return
    }

    fetchSEOData()
  }, [router])

  const fetchSEOData = async () => {
    try {
      const response = await fetch('/api/cms/seo')
      const data = await response.json()

      if (response.ok) {
        setSeoData(data.data)
      } else {
        setError(data.error || 'Failed to fetch SEO data')
      }
    } catch (err) {
      setError('Failed to fetch SEO data')
    } finally {
      setLoading(false)
    }
  }

  const handleBulkAction = async () => {
    if (!bulkAction || selectedPages.size === 0) return

    setProcessing(true)
    setError('')

    try {
      const response = await fetch('/api/cms/seo/bulk-update', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: bulkAction,
          pageIds: Array.from(selectedPages),
        }),
      })

      const data = await response.json()

      if (response.ok) {
        await fetchSEOData()
        setSelectedPages(new Set())
        setBulkAction('')
      } else {
        setError(data.error || 'Failed to perform bulk action')
      }
    } catch (err) {
      setError('Failed to perform bulk action')
    } finally {
      setProcessing(false)
    }
  }

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600 bg-green-100'
    if (score >= 60) return 'text-yellow-600 bg-yellow-100'
    return 'text-red-600 bg-red-100'
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800'
      case 'medium': return 'bg-yellow-100 text-yellow-800'
      case 'low': return 'bg-blue-100 text-blue-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'error': return '❌'
      case 'warning': return '⚠️'
      case 'info': return 'ℹ️'
      default: return '📝'
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading SEO data...</p>
        </div>
      </div>
    )
  }

  if (!seoData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Failed to Load SEO Data</h1>
          <button
            onClick={() => router.push('/admin')}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">SEO Management</h1>
            <p className="text-gray-600 mt-2">Optimize your site for search engines</p>
          </div>
          <button
            onClick={() => router.push('/admin')}
            className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            Back to Dashboard
          </button>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-800">{error}</p>
          </div>
        )}

        {/* SEO Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">SEO Score</p>
                <p className={`text-2xl font-bold ${getScoreColor(seoData.overview.seoScore).split(' ')[0]}`}>
                  {seoData.overview.seoScore}%
                </p>
              </div>
              <div className={`p-3 rounded-full ${getScoreColor(seoData.overview.seoScore)}`}>
                📊
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Pages</p>
                <p className="text-2xl font-bold text-gray-900">{seoData.overview.totalPages}</p>
              </div>
              <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                📄
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Published</p>
                <p className="text-2xl font-bold text-gray-900">{seoData.overview.publishedPages}</p>
              </div>
              <div className="p-3 rounded-full bg-green-100 text-green-600">
                ✅
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Issues Found</p>
                <p className="text-2xl font-bold text-red-600">
                  {seoData.issues.missingMetaTitles + seoData.issues.missingMetaDescriptions}
                </p>
              </div>
              <div className="p-3 rounded-full bg-red-100 text-red-600">
                ⚠️
              </div>
            </div>
          </div>
        </div>

        {/* SEO Issues Breakdown */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">SEO Issues Breakdown</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 bg-red-50 rounded-lg">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-red-800">Missing Meta Titles</span>
                <span className="text-lg font-bold text-red-600">{seoData.issues.missingMetaTitles}</span>
              </div>
            </div>
            <div className="p-4 bg-red-50 rounded-lg">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-red-800">Missing Meta Descriptions</span>
                <span className="text-lg font-bold text-red-600">{seoData.issues.missingMetaDescriptions}</span>
              </div>
            </div>
            <div className="p-4 bg-yellow-50 rounded-lg">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-yellow-800">Long Meta Titles</span>
                <span className="text-lg font-bold text-yellow-600">{seoData.issues.longMetaTitles}</span>
              </div>
            </div>
            <div className="p-4 bg-yellow-50 rounded-lg">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-yellow-800">Long Meta Descriptions</span>
                <span className="text-lg font-bold text-yellow-600">{seoData.issues.longMetaDescriptions}</span>
              </div>
            </div>
            <div className="p-4 bg-orange-50 rounded-lg">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-orange-800">Duplicate Meta Titles</span>
                <span className="text-lg font-bold text-orange-600">{seoData.issues.duplicateMetaTitles}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Recommendations */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">SEO Recommendations</h2>
          {seoData.recommendations.length === 0 ? (
            <div className="text-center py-8">
              <div className="text-4xl mb-4">🎉</div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Great job!</h3>
              <p className="text-gray-500">No SEO issues found. Your site is well optimized!</p>
            </div>
          ) : (
            <div className="space-y-4">
              {seoData.recommendations.map((rec, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">{getTypeIcon(rec.type)}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-medium text-gray-900">{rec.title}</h3>
                        <span className={`px-2 py-1 text-xs rounded-full ${getPriorityColor(rec.priority)}`}>
                          {rec.priority}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm mb-2">{rec.description}</p>
                      <p className="text-blue-600 text-sm font-medium">{rec.action}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Pages with Issues */}
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-900">Pages with SEO Issues</h2>
            {selectedPages.size > 0 && (
              <div className="flex items-center gap-3">
                <select
                  value={bulkAction}
                  onChange={(e) => setBulkAction(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg text-sm"
                >
                  <option value="">Select Action</option>
                  <option value="generate_meta_titles">Generate Meta Titles</option>
                  <option value="generate_meta_descriptions">Generate Meta Descriptions</option>
                </select>
                <button
                  onClick={handleBulkAction}
                  disabled={!bulkAction || processing}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 text-sm"
                >
                  {processing ? 'Processing...' : `Apply to ${selectedPages.size} pages`}
                </button>
              </div>
            )}
          </div>

          {seoData.pagesWithIssues.length === 0 ? (
            <div className="text-center py-8">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">All pages look good!</h3>
              <p className="text-gray-500">No pages with SEO issues found.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      <input
                        type="checkbox"
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedPages(new Set(seoData.pagesWithIssues.map(p => p.id)))
                          } else {
                            setSelectedPages(new Set())
                          }
                        }}
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Page
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Issues
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {seoData.pagesWithIssues.map((page) => (
                    <tr key={page.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <input
                          type="checkbox"
                          checked={selectedPages.has(page.id)}
                          onChange={(e) => {
                            const newSelected = new Set(selectedPages)
                            if (e.target.checked) {
                              newSelected.add(page.id)
                            } else {
                              newSelected.delete(page.id)
                            }
                            setSelectedPages(newSelected)
                          }}
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div>
                          <div className="text-sm font-medium text-gray-900">{page.title}</div>
                          <div className="text-sm text-gray-500">/{page.slug}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex flex-wrap gap-1">
                          {!page.metaTitle && (
                            <span className="px-2 py-1 text-xs bg-red-100 text-red-800 rounded">
                              No Meta Title
                            </span>
                          )}
                          {!page.metaDescription && (
                            <span className="px-2 py-1 text-xs bg-red-100 text-red-800 rounded">
                              No Meta Description
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          page.published 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {page.published ? 'Published' : 'Draft'}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button
                          onClick={() => router.push(`/admin/pages/edit/${page.id}`)}
                          className="text-blue-600 hover:text-blue-900"
                        >
                          Edit
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
