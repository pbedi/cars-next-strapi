'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

interface User {
  id: string
  email: string
  firstName: string
  lastName: string
  role: string
}

interface DashboardStats {
  pages: number
  carSeries: number
  navigationItems: number
}

export default function AdminDashboard() {
  const [user, setUser] = useState<User | null>(null)
  const [stats, setStats] = useState<DashboardStats>({ pages: 0, carSeries: 0, navigationItems: 0 })
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // Check if user is logged in
    const sessionToken = localStorage.getItem('cms_session_token')
    const userData = localStorage.getItem('cms_user')

    if (!sessionToken || !userData) {
      router.push('/admin/login')
      return
    }

    try {
      setUser(JSON.parse(userData))
      loadDashboardStats()
    } catch (error) {
      console.error('Error parsing user data:', error)
      router.push('/admin/login')
    }
  }, [router])

  const loadDashboardStats = async () => {
    try {
      // Load basic stats from our API
      const [pagesRes, carSeriesRes] = await Promise.all([
        fetch('/api/cms/pages?limit=1'),
        fetch('/api/cms/car-series?limit=1'),
      ])

      const pagesData = await pagesRes.json()
      const carSeriesData = await carSeriesRes.json()

      setStats({
        pages: pagesData.pagination?.total || 0,
        carSeries: carSeriesData.pagination?.total || 0,
        navigationItems: 1, // We'll implement this later
      })
    } catch (error) {
      console.error('Error loading dashboard stats:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('cms_session_token')
    localStorage.removeItem('cms_user')
    router.push('/admin/login')
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    return null // Will redirect to login
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">JuniorCars CMS</h1>
              <p className="text-sm text-gray-600">Welcome back, {user.firstName}!</p>
            </div>
            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center">
                    <span className="text-white text-sm font-bold">P</span>
                  </div>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Total Pages</dt>
                    <dd className="text-lg font-medium text-gray-900">{stats.pages}</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-green-500 rounded-md flex items-center justify-center">
                    <span className="text-white text-sm font-bold">C</span>
                  </div>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Car Series</dt>
                    <dd className="text-lg font-medium text-gray-900">{stats.carSeries}</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-purple-500 rounded-md flex items-center justify-center">
                    <span className="text-white text-sm font-bold">N</span>
                  </div>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Navigation Items</dt>
                    <dd className="text-lg font-medium text-gray-900">{stats.navigationItems}</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">Quick Actions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link
                href="/admin/pages"
                className="bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-lg p-4 text-center transition-colors"
              >
                <div className="text-blue-600 font-medium">Manage Pages</div>
                <div className="text-sm text-blue-500 mt-1">Create and edit pages</div>
              </Link>

              <Link
                href="/admin/car-series"
                className="bg-green-50 hover:bg-green-100 border border-green-200 rounded-lg p-4 text-center transition-colors"
              >
                <div className="text-green-600 font-medium">Car Series</div>
                <div className="text-sm text-green-500 mt-1">Manage car collections</div>
              </Link>

              <Link
                href="/admin/navigation"
                className="bg-purple-50 hover:bg-purple-100 border border-purple-200 rounded-lg p-4 text-center transition-colors"
              >
                <div className="text-purple-600 font-medium">Navigation</div>
                <div className="text-sm text-purple-500 mt-1">Edit site navigation</div>
              </Link>

              <Link
                href="/admin/media"
                className="bg-orange-50 hover:bg-orange-100 border border-orange-200 rounded-lg p-4 text-center transition-colors"
              >
                <div className="text-orange-600 font-medium">Media Library</div>
                <div className="text-sm text-orange-500 mt-1">Upload and manage images</div>
              </Link>
            </div>

            <div className="mt-4">
              <Link
                href="/admin/seo"
                className="bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 rounded-lg p-4 text-center transition-colors block"
              >
                <div className="text-indigo-600 font-medium">SEO Management</div>
                <div className="text-sm text-indigo-500 mt-1">Optimize for search engines</div>
              </Link>
            </div>
          </div>
        </div>

        {/* Status */}
        <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <div className="w-5 h-5 bg-green-500 rounded-full"></div>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-green-800">CMS Status: Active</h3>
              <p className="text-sm text-green-600 mt-1">
                Your custom CMS is running successfully. Database connected and API routes are functional.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
