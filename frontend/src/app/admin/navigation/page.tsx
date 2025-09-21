'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

interface NavigationItem {
  id: string
  label: string
  url?: string
  slug?: string
  parentId?: string
  orderIndex: number
  isExternal: boolean
  target: string
  description?: string
  isActive: boolean
  parent?: { id: string; label: string; url?: string }
  children?: { id: string; label: string; url?: string; orderIndex: number }[]
  createdAt: string
  updatedAt: string
}

export default function NavigationManagement() {
  const router = useRouter()
  const [navigationItems, setNavigationItems] = useState<NavigationItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [showForm, setShowForm] = useState(false)
  const [editingItem, setEditingItem] = useState<NavigationItem | null>(null)
  const [formData, setFormData] = useState({
    label: '',
    url: '',
    parentId: '',
    isExternal: false,
    target: '_self',
    description: '',
    isActive: true,
  })

  useEffect(() => {
    // Check authentication
    const token = localStorage.getItem('cms_session_token')
    if (!token) {
      router.push('/admin/login')
      return
    }

    fetchNavigationItems()
  }, [router])

  const fetchNavigationItems = async () => {
    try {
      const response = await fetch('/api/cms/navigation')
      const data = await response.json()

      if (response.ok) {
        setNavigationItems(data.data || [])
      } else {
        setError(data.error || 'Failed to fetch navigation items')
      }
    } catch (err) {
      setError('Failed to fetch navigation items')
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    try {
      const url = editingItem
        ? `/api/cms/navigation/${editingItem.id}`
        : '/api/cms/navigation'

      const method = editingItem ? 'PUT' : 'POST'

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          parentId: formData.parentId || undefined,
        }),
      })

      const data = await response.json()

      if (response.ok) {
        await fetchNavigationItems()
        setShowForm(false)
        setEditingItem(null)
        setFormData({
          label: '',
          url: '',
          parentId: '',
          isExternal: false,
          target: '_self',
          description: '',
          isActive: true,
        })
      } else {
        setError(data.error || 'Failed to save navigation item')
      }
    } catch (err) {
      setError('Failed to save navigation item')
    }
  }

  const handleEdit = (item: NavigationItem) => {
    setEditingItem(item)
    setFormData({
      label: item.label,
      url: item.url || '',
      parentId: item.parentId || '',
      isExternal: item.isExternal,
      target: item.target,
      description: item.description || '',
      isActive: item.isActive,
    })
    setShowForm(true)
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this navigation item?')) {
      return
    }

    try {
      const response = await fetch(`/api/cms/navigation/${id}`, {
        method: 'DELETE',
      })

      if (response.ok) {
        await fetchNavigationItems()
      } else {
        const data = await response.json()
        setError(data.error || 'Failed to delete navigation item')
      }
    } catch (err) {
      setError('Failed to delete navigation item')
    }
  }

  const renderNavigationTree = (items: NavigationItem[], level = 0) => {
    const rootItems = items.filter(item => !item.parentId)
    const childItems = items.filter(item => item.parentId)

    return rootItems.map(item => (
      <div key={item.id} className={`mb-2 ${level > 0 ? 'ml-6' : ''}`}>
        <div className="flex items-center justify-between p-3 bg-white border rounded-lg shadow-sm">
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h3 className="font-medium text-gray-900">{item.label}</h3>
              {!item.isActive && (
                <span className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded">
                  Inactive
                </span>
              )}
              {item.isExternal && (
                <span className="px-2 py-1 text-xs bg-blue-100 text-blue-600 rounded">
                  External
                </span>
              )}
            </div>
            {item.url && (
              <p className="text-sm text-gray-600 mt-1">{item.url}</p>
            )}
            {item.description && (
              <p className="text-sm text-gray-500 mt-1">{item.description}</p>
            )}
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleEdit(item)}
              className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded hover:bg-blue-200"
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(item.id)}
              className="px-3 py-1 text-sm bg-red-100 text-red-700 rounded hover:bg-red-200"
            >
              Delete
            </button>
          </div>
        </div>

        {/* Render children */}
        {childItems
          .filter(child => child.parentId === item.id)
          .sort((a, b) => a.orderIndex - b.orderIndex)
          .map(child => (
            <div key={child.id} className="ml-6 mt-2">
              {renderNavigationTree([child], level + 1)}
            </div>
          ))
        }
      </div>
    ))
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading navigation items...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Navigation Management</h1>
            <p className="text-gray-600 mt-2">Manage your site navigation structure</p>
          </div>
          <div className="flex gap-4">
            <button
              onClick={() => router.push('/admin')}
              className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              Back to Dashboard
            </button>
            <button
              onClick={() => {
                setShowForm(true)
                setEditingItem(null)
                setFormData({
                  label: '',
                  url: '',
                  parentId: '',
                  isExternal: false,
                  target: '_self',
                  description: '',
                  isActive: true,
                })
              }}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Add Navigation Item
            </button>
          </div>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-800">{error}</p>
          </div>
        )}

        {/* Navigation Tree */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Navigation Structure</h2>
          {navigationItems.length === 0 ? (
            <p className="text-gray-500 text-center py-8">
              No navigation items found. Create your first navigation item to get started.
            </p>
          ) : (
            <div className="space-y-2">
              {renderNavigationTree(navigationItems)}
            </div>
          )}
        </div>

        {/* Form Modal */}
        {showForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  {editingItem ? 'Edit Navigation Item' : 'Add Navigation Item'}
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Label *
                    </label>
                    <input
                      type="text"
                      value={formData.label}
                      onChange={(e) => setFormData({ ...formData, label: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      URL
                    </label>
                    <input
                      type="text"
                      value={formData.url}
                      onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="/about or https://example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Parent Item
                    </label>
                    <select
                      value={formData.parentId}
                      onChange={(e) => setFormData({ ...formData, parentId: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">None (Top Level)</option>
                      {navigationItems
                        .filter(item => item.id !== editingItem?.id)
                        .map(item => (
                          <option key={item.id} value={item.id}>
                            {item.label}
                          </option>
                        ))
                      }
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Description
                    </label>
                    <textarea
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      rows={3}
                      placeholder="Optional description for this navigation item"
                    />
                  </div>

                  <div className="flex items-center gap-4">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={formData.isExternal}
                        onChange={(e) => setFormData({ ...formData, isExternal: e.target.checked })}
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">External Link</span>
                    </label>

                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={formData.isActive}
                        onChange={(e) => setFormData({ ...formData, isActive: e.target.checked })}
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">Active</span>
                    </label>
                  </div>

                  {formData.isExternal && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Target
                      </label>
                      <select
                        value={formData.target}
                        onChange={(e) => setFormData({ ...formData, target: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="_self">Same Window</option>
                        <option value="_blank">New Window</option>
                        <option value="_parent">Parent Frame</option>
                        <option value="_top">Top Frame</option>
                      </select>
                    </div>
                  )}

                  <div className="flex justify-end gap-3 pt-4">
                    <button
                      type="button"
                      onClick={() => {
                        setShowForm(false)
                        setEditingItem(null)
                      }}
                      className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >
                      {editingItem ? 'Update' : 'Create'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
