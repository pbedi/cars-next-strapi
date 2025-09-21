'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

interface CarSeries {
  id: string
  name: string
  slug: string
  description: string
  price: number
  published: boolean
  createdAt: string
  updatedAt: string
}

export default function CarSeriesManagement() {
  const [carSeries, setCarSeries] = useState<CarSeries[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const router = useRouter()

  useEffect(() => {
    // Check authentication
    const sessionToken = localStorage.getItem('cms_session_token')
    if (!sessionToken) {
      router.push('/admin/login')
      return
    }

    loadCarSeries()
  }, [router])

  const loadCarSeries = async () => {
    try {
      const response = await fetch('/api/cms/car-series')
      const data = await response.json()

      if (data.success) {
        setCarSeries(data.data)
      } else {
        setError('Failed to load car series')
      }
    } catch (error) {
      console.error('Error loading car series:', error)
      setError('Failed to load car series')
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this car series?')) return

    try {
      const response = await fetch(`/api/cms/car-series/${id}`, {
        method: 'DELETE',
      })

      if (response.ok) {
        setCarSeries(carSeries.filter(series => series.id !== id))
      } else {
        setError('Failed to delete car series')
      }
    } catch (error) {
      console.error('Error deleting car series:', error)
      setError('Failed to delete car series')
    }
  }

  const togglePublished = async (id: string, published: boolean) => {
    try {
      const response = await fetch(`/api/cms/car-series/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ published: !published }),
      })

      if (response.ok) {
        setCarSeries(carSeries.map(series =>
          series.id === id ? { ...series, published: !published } : series
        ))
      } else {
        setError('Failed to update car series')
      }
    } catch (error) {
      console.error('Error updating car series:', error)
      setError('Failed to update car series')
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading car series...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center gap-4">
              <button
                onClick={() => router.push('/admin')}
                className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Back to Dashboard
              </button>
              <h1 className="text-2xl font-bold text-gray-900">Car Series Management</h1>
            </div>
            <button
              onClick={() => router.push('/admin/car-series/new')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium"
            >
              Add New Series
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        <div className="bg-white shadow overflow-hidden sm:rounded-md">
          <ul className="divide-y divide-gray-200">
            {carSeries.length === 0 ? (
              <li className="px-6 py-8 text-center text-gray-500">
                No car series found. <button
                  onClick={() => router.push('/admin/car-series/new')}
                  className="text-blue-600 hover:text-blue-800"
                >
                  Create your first series
                </button>
              </li>
            ) : (
              carSeries.map((series) => (
                <li key={series.id}>
                  <div className="px-6 py-4 flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center">
                        <h3 className="text-lg font-medium text-gray-900">{series.name}</h3>
                        <span className={`ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${series.published
                            ? 'bg-green-100 text-green-800'
                            : 'bg-gray-100 text-gray-800'
                          }`}>
                          {series.published ? 'Published' : 'Draft'}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">{series.description}</p>
                      <div className="flex items-center mt-2 text-sm text-gray-500">
                        <span>Slug: {series.slug}</span>
                        {series.price && (
                          <>
                            <span className="mx-2">•</span>
                            <span>Price: ${series.price.toLocaleString()}</span>
                          </>
                        )}
                        <span className="mx-2">•</span>
                        <span>Updated: {new Date(series.updatedAt).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => togglePublished(series.id, series.published)}
                        className={`px-3 py-1 rounded text-sm font-medium ${series.published
                            ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            : 'bg-green-100 text-green-700 hover:bg-green-200'
                          }`}
                      >
                        {series.published ? 'Unpublish' : 'Publish'}
                      </button>
                      <button
                        onClick={() => router.push(`/admin/car-series/edit/${series.id}`)}
                        className="bg-blue-100 text-blue-700 hover:bg-blue-200 px-3 py-1 rounded text-sm font-medium"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(series.id)}
                        className="bg-red-100 text-red-700 hover:bg-red-200 px-3 py-1 rounded text-sm font-medium"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}
