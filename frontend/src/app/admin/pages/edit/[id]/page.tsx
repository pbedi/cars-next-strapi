'use client'

import { useState, useEffect } from 'react'
import { useRouter, useParams } from 'next/navigation'

interface Page {
  id: string
  title: string
  slug: string
  content?: string
  metaTitle?: string
  metaDescription?: string
  published: boolean
  createdAt: string
  updatedAt: string
}

interface ContentBlock {
  id: string
  type: 'hero' | 'carousel' | 'text' | 'image' | 'html'
  data: any
  orderIndex: number
  pageId: string
}

export default function PageEditor() {
  const router = useRouter()
  const params = useParams()
  const pageId = params.id as string

  const [page, setPage] = useState<Page | null>(null)
  const [contentBlocks, setContentBlocks] = useState<ContentBlock[]>([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')
  const [activeTab, setActiveTab] = useState<'content' | 'blocks' | 'seo'>('content')

  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    content: '',
    metaTitle: '',
    metaDescription: '',
    published: false,
  })

  useEffect(() => {
    // Check authentication
    const token = localStorage.getItem('cms_token')
    if (!token) {
      router.push('/admin/login')
      return
    }

    if (pageId) {
      fetchPage()
      fetchContentBlocks()
    }
  }, [router, pageId])

  const fetchPage = async () => {
    try {
      const response = await fetch(`/api/cms/pages/${pageId}`)
      const data = await response.json()

      if (response.ok) {
        setPage(data.data)
        setFormData({
          title: data.data.title,
          slug: data.data.slug,
          content: data.data.content || '',
          metaTitle: data.data.metaTitle || '',
          metaDescription: data.data.metaDescription || '',
          published: data.data.published,
        })
      } else {
        setError(data.error || 'Failed to fetch page')
      }
    } catch (err) {
      setError('Failed to fetch page')
    } finally {
      setLoading(false)
    }
  }

  const fetchContentBlocks = async () => {
    try {
      const response = await fetch(`/api/cms/content-blocks?pageId=${pageId}`)
      const data = await response.json()

      if (response.ok) {
        setContentBlocks(data.data || [])
      }
    } catch (err) {
      console.error('Failed to fetch content blocks:', err)
    }
  }

  const handleSave = async () => {
    setSaving(true)
    setError('')

    try {
      const response = await fetch(`/api/cms/pages/${pageId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setPage(data.data)
        // Show success message or redirect
      } else {
        setError(data.error || 'Failed to save page')
      }
    } catch (err) {
      setError('Failed to save page')
    } finally {
      setSaving(false)
    }
  }

  const addContentBlock = async (type: ContentBlock['type']) => {
    try {
      const defaultData = getDefaultBlockData(type)
      
      const response = await fetch('/api/cms/content-blocks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          pageId,
          type,
          data: defaultData,
        }),
      })

      if (response.ok) {
        await fetchContentBlocks()
      } else {
        const data = await response.json()
        setError(data.error || 'Failed to add content block')
      }
    } catch (err) {
      setError('Failed to add content block')
    }
  }

  const getDefaultBlockData = (type: ContentBlock['type']) => {
    switch (type) {
      case 'hero':
        return {
          hero: {
            title: 'New Hero Section',
            subtitle: 'Add your subtitle here',
            backgroundImage: '',
            ctaText: 'Learn More',
            ctaUrl: '#'
          }
        }
      case 'text':
        return {
          text: {
            content: '<p>Add your text content here...</p>',
            alignment: 'left'
          }
        }
      case 'image':
        return {
          image: {
            url: '',
            alt: '',
            caption: ''
          }
        }
      case 'carousel':
        return {
          carousel: {
            items: []
          }
        }
      case 'html':
        return {
          html: {
            content: '<div>Custom HTML content</div>'
          }
        }
      default:
        return {}
    }
  }

  const deleteContentBlock = async (blockId: string) => {
    if (!confirm('Are you sure you want to delete this content block?')) {
      return
    }

    try {
      const response = await fetch(`/api/cms/content-blocks/${blockId}`, {
        method: 'DELETE',
      })

      if (response.ok) {
        await fetchContentBlocks()
      } else {
        const data = await response.json()
        setError(data.error || 'Failed to delete content block')
      }
    } catch (err) {
      setError('Failed to delete content block')
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading page...</p>
        </div>
      </div>
    )
  }

  if (!page) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Page Not Found</h1>
          <button
            onClick={() => router.push('/admin/pages')}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Back to Pages
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Edit Page</h1>
            <p className="text-gray-600 mt-2">Editing: {page.title}</p>
          </div>
          <div className="flex gap-4">
            <button
              onClick={() => router.push('/admin/pages')}
              className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              Back to Pages
            </button>
            <button
              onClick={handleSave}
              disabled={saving}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
            >
              {saving ? 'Saving...' : 'Save Changes'}
            </button>
          </div>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-800">{error}</p>
          </div>
        )}

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-sm border mb-6">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {[
                { id: 'content', label: 'Content' },
                { id: 'blocks', label: 'Content Blocks' },
                { id: 'seo', label: 'SEO' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'content' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Title *
                    </label>
                    <input
                      type="text"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Slug *
                    </label>
                    <input
                      type="text"
                      value={formData.slug}
                      onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Content
                  </label>
                  <textarea
                    value={formData.content}
                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    rows={12}
                    placeholder="Enter your page content here..."
                  />
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="published"
                    checked={formData.published}
                    onChange={(e) => setFormData({ ...formData, published: e.target.checked })}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <label htmlFor="published" className="ml-2 text-sm text-gray-700">
                    Published
                  </label>
                </div>
              </div>
            )}

            {activeTab === 'blocks' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium text-gray-900">Content Blocks</h3>
                  <div className="flex gap-2">
                    {['hero', 'text', 'image', 'carousel', 'html'].map((type) => (
                      <button
                        key={type}
                        onClick={() => addContentBlock(type as ContentBlock['type'])}
                        className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded hover:bg-blue-200 capitalize"
                      >
                        Add {type}
                      </button>
                    ))}
                  </div>
                </div>

                {contentBlocks.length === 0 ? (
                  <div className="text-center py-8 border-2 border-dashed border-gray-300 rounded-lg">
                    <p className="text-gray-500 mb-4">No content blocks yet</p>
                    <p className="text-sm text-gray-400">Add content blocks to build your page layout</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {contentBlocks
                      .sort((a, b) => a.orderIndex - b.orderIndex)
                      .map((block) => (
                        <div key={block.id} className="border border-gray-200 rounded-lg p-4">
                          <div className="flex justify-between items-center mb-3">
                            <div className="flex items-center gap-2">
                              <span className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded capitalize">
                                {block.type}
                              </span>
                              <span className="text-sm text-gray-500">Order: {block.orderIndex}</span>
                            </div>
                            <button
                              onClick={() => deleteContentBlock(block.id)}
                              className="px-2 py-1 text-xs bg-red-100 text-red-700 rounded hover:bg-red-200"
                            >
                              Delete
                            </button>
                          </div>
                          <div className="bg-gray-50 p-3 rounded text-sm">
                            <pre className="whitespace-pre-wrap text-xs text-gray-600">
                              {JSON.stringify(block.data, null, 2)}
                            </pre>
                          </div>
                        </div>
                      ))
                    }
                  </div>
                )}
              </div>
            )}

            {activeTab === 'seo' && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Meta Title
                  </label>
                  <input
                    type="text"
                    value={formData.metaTitle}
                    onChange={(e) => setFormData({ ...formData, metaTitle: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="SEO title for search engines"
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    Recommended: 50-60 characters
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Meta Description
                  </label>
                  <textarea
                    value={formData.metaDescription}
                    onChange={(e) => setFormData({ ...formData, metaDescription: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    rows={3}
                    placeholder="Brief description for search engines"
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    Recommended: 150-160 characters
                  </p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-medium text-blue-900 mb-2">SEO Preview</h4>
                  <div className="space-y-1">
                    <div className="text-blue-600 text-lg font-medium">
                      {formData.metaTitle || formData.title}
                    </div>
                    <div className="text-green-600 text-sm">
                      https://juniorcars.com/{formData.slug}
                    </div>
                    <div className="text-gray-600 text-sm">
                      {formData.metaDescription || 'No meta description provided'}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
