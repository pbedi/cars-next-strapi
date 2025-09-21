'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'

interface MediaFile {
  id: string
  filename: string
  originalName: string
  url: string
  altText?: string
  size?: number
  mimeType?: string
  width?: number
  height?: number
  createdAt: string
  updatedAt: string
  pages?: { id: string; title: string; slug: string }[]
  carSeries?: { id: string; name: string; slug: string }[]
  contentBlocks?: { id: string; type: string; page: { title: string } }[]
}

export default function MediaLibrary() {
  const router = useRouter()
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [mediaFiles, setMediaFiles] = useState<MediaFile[]>([])
  const [loading, setLoading] = useState(true)
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState('')
  const [selectedFiles, setSelectedFiles] = useState<Set<string>>(new Set())
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [filterType, setFilterType] = useState<'all' | 'image' | 'video' | 'document'>('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [showUploadModal, setShowUploadModal] = useState(false)
  const [selectedFile, setSelectedFile] = useState<MediaFile | null>(null)
  const [editingAltText, setEditingAltText] = useState('')

  useEffect(() => {
    // Check authentication
    const token = localStorage.getItem('cms_token')
    if (!token) {
      router.push('/admin/login')
      return
    }

    fetchMediaFiles()
  }, [router, filterType, searchQuery])

  const fetchMediaFiles = async () => {
    try {
      const params = new URLSearchParams()
      if (filterType !== 'all') params.append('type', filterType)
      if (searchQuery) params.append('search', searchQuery)

      const response = await fetch(`/api/cms/media?${params}`)
      const data = await response.json()

      if (response.ok) {
        setMediaFiles(data.data || [])
      } else {
        setError(data.error || 'Failed to fetch media files')
      }
    } catch (err) {
      setError('Failed to fetch media files')
    } finally {
      setLoading(false)
    }
  }

  const handleFileUpload = async (files: FileList) => {
    setUploading(true)
    setError('')

    try {
      for (const file of Array.from(files)) {
        const formData = new FormData()
        formData.append('file', file)
        formData.append('altText', '')

        const response = await fetch('/api/cms/media/upload', {
          method: 'POST',
          body: formData,
        })

        if (!response.ok) {
          const data = await response.json()
          throw new Error(data.error || 'Upload failed')
        }
      }

      await fetchMediaFiles()
      setShowUploadModal(false)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Upload failed')
    } finally {
      setUploading(false)
    }
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    const files = e.dataTransfer.files
    if (files.length > 0) {
      handleFileUpload(files)
    }
  }

  const handleDeleteSelected = async () => {
    if (selectedFiles.size === 0) return

    if (!confirm(`Are you sure you want to delete ${selectedFiles.size} file(s)?`)) {
      return
    }

    try {
      const response = await fetch('/api/cms/media', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ids: Array.from(selectedFiles),
        }),
      })

      if (response.ok) {
        await fetchMediaFiles()
        setSelectedFiles(new Set())
      } else {
        const data = await response.json()
        setError(data.error || 'Failed to delete files')
      }
    } catch (err) {
      setError('Failed to delete files')
    }
  }

  const handleUpdateAltText = async (id: string, altText: string) => {
    try {
      const response = await fetch(`/api/cms/media/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ altText }),
      })

      if (response.ok) {
        await fetchMediaFiles()
        setSelectedFile(null)
      } else {
        const data = await response.json()
        setError(data.error || 'Failed to update alt text')
      }
    } catch (err) {
      setError('Failed to update alt text')
    }
  }

  const formatFileSize = (bytes?: number) => {
    if (!bytes) return 'Unknown'
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(1024))
    return Math.round(bytes / Math.pow(1024, i) * 100) / 100 + ' ' + sizes[i]
  }

  const getFileIcon = (mimeType?: string) => {
    if (!mimeType) return '📄'
    if (mimeType.startsWith('image/')) return '🖼️'
    if (mimeType.startsWith('video/')) return '🎥'
    if (mimeType.includes('pdf')) return '📕'
    if (mimeType.includes('word')) return '📝'
    return '📄'
  }

  const filteredFiles = mediaFiles.filter(file => {
    if (filterType === 'image' && !file.mimeType?.startsWith('image/')) return false
    if (filterType === 'video' && !file.mimeType?.startsWith('video/')) return false
    if (filterType === 'document' && (file.mimeType?.startsWith('image/') || file.mimeType?.startsWith('video/'))) return false
    return true
  })

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading media library...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Media Library</h1>
            <p className="text-gray-600 mt-2">Manage your images, videos, and documents</p>
          </div>
          <div className="flex gap-4">
            <button
              onClick={() => router.push('/admin')}
              className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              Back to Dashboard
            </button>
            <button
              onClick={() => setShowUploadModal(true)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Upload Files
            </button>
          </div>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-800">{error}</p>
          </div>
        )}

        {/* Filters and Controls */}
        <div className="bg-white rounded-lg shadow-sm border p-4 mb-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <label className="text-sm font-medium text-gray-700">Filter:</label>
                <select
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value as any)}
                  className="px-3 py-1 border border-gray-300 rounded-lg text-sm"
                >
                  <option value="all">All Files</option>
                  <option value="image">Images</option>
                  <option value="video">Videos</option>
                  <option value="document">Documents</option>
                </select>
              </div>

              <div className="flex items-center gap-2">
                <label className="text-sm font-medium text-gray-700">Search:</label>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search files..."
                  className="px-3 py-1 border border-gray-300 rounded-lg text-sm w-48"
                />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded ${viewMode === 'grid' ? 'bg-blue-100 text-blue-600' : 'text-gray-600 hover:bg-gray-100'}`}
                >
                  Grid
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded ${viewMode === 'list' ? 'bg-blue-100 text-blue-600' : 'text-gray-600 hover:bg-gray-100'}`}
                >
                  List
                </button>
              </div>

              {selectedFiles.size > 0 && (
                <button
                  onClick={handleDeleteSelected}
                  className="px-3 py-1 bg-red-100 text-red-700 rounded hover:bg-red-200 text-sm"
                >
                  Delete Selected ({selectedFiles.size})
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Media Grid/List */}
        <div className="bg-white rounded-lg shadow-sm border p-6">
          {filteredFiles.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">📁</div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No media files found</h3>
              <p className="text-gray-500 mb-4">Upload your first file to get started</p>
              <button
                onClick={() => setShowUploadModal(true)}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Upload Files
              </button>
            </div>
          ) : (
            <div className={viewMode === 'grid' ? 'grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4' : 'space-y-2'}>
              {filteredFiles.map((file) => (
                <div
                  key={file.id}
                  className={`border rounded-lg overflow-hidden hover:shadow-md transition-shadow cursor-pointer ${
                    selectedFiles.has(file.id) ? 'ring-2 ring-blue-500' : ''
                  } ${viewMode === 'list' ? 'flex items-center p-3' : 'aspect-square'}`}
                  onClick={() => {
                    if (selectedFiles.has(file.id)) {
                      const newSelected = new Set(selectedFiles)
                      newSelected.delete(file.id)
                      setSelectedFiles(newSelected)
                    } else {
                      setSelectedFiles(new Set([...selectedFiles, file.id]))
                    }
                  }}
                >
                  {viewMode === 'grid' ? (
                    <>
                      <div className="aspect-square bg-gray-100 flex items-center justify-center">
                        {file.mimeType?.startsWith('image/') ? (
                          <img
                            src={file.url}
                            alt={file.altText || file.originalName}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="text-4xl">{getFileIcon(file.mimeType)}</div>
                        )}
                      </div>
                      <div className="p-2">
                        <p className="text-xs font-medium text-gray-900 truncate" title={file.originalName}>
                          {file.originalName}
                        </p>
                        <p className="text-xs text-gray-500">{formatFileSize(file.size)}</p>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="w-12 h-12 bg-gray-100 rounded flex items-center justify-center mr-3">
                        {file.mimeType?.startsWith('image/') ? (
                          <img
                            src={file.url}
                            alt={file.altText || file.originalName}
                            className="w-full h-full object-cover rounded"
                          />
                        ) : (
                          <div className="text-xl">{getFileIcon(file.mimeType)}</div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-gray-900 truncate">{file.originalName}</p>
                        <p className="text-sm text-gray-500">
                          {formatFileSize(file.size)} • {new Date(file.createdAt).toLocaleDateString()}
                        </p>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          setSelectedFile(file)
                          setEditingAltText(file.altText || '')
                        }}
                        className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded hover:bg-gray-200"
                      >
                        Edit
                      </button>
                    </>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Upload Modal */}
        {showUploadModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Upload Files</h2>
                
                <div
                  className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 transition-colors"
                  onDragOver={handleDragOver}
                  onDrop={handleDrop}
                >
                  <div className="text-4xl mb-4">📁</div>
                  <p className="text-gray-600 mb-4">
                    Drag and drop files here, or click to select
                  </p>
                  <input
                    ref={fileInputRef}
                    type="file"
                    multiple
                    accept="image/*,video/*,.pdf,.doc,.docx"
                    onChange={(e) => {
                      if (e.target.files) {
                        handleFileUpload(e.target.files)
                      }
                    }}
                    className="hidden"
                  />
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    disabled={uploading}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
                  >
                    {uploading ? 'Uploading...' : 'Select Files'}
                  </button>
                </div>

                <div className="flex justify-end gap-3 mt-6">
                  <button
                    onClick={() => setShowUploadModal(false)}
                    disabled={uploading}
                    className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Edit Modal */}
        {selectedFile && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Edit Media File</h2>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Alt Text
                  </label>
                  <input
                    type="text"
                    value={editingAltText}
                    onChange={(e) => setEditingAltText(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Describe this image for accessibility"
                  />
                </div>

                <div className="flex justify-end gap-3">
                  <button
                    onClick={() => setSelectedFile(null)}
                    className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => handleUpdateAltText(selectedFile.id, editingAltText)}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
