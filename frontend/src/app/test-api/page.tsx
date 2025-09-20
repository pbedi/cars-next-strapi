'use client';

import { useEffect, useState } from 'react';
import { strapiService } from '@/lib/strapi';

export default function TestApiPage() {
  const [pages, setPages] = useState<any[]>([]);
  const [carSeries, setCarSeries] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const testApi = async () => {
      try {
        setLoading(true);
        
        // Test Pages API
        const pagesData = await strapiService.getPages();
        setPages(pagesData.data || []);
        
        // Test Car Series API
        const carSeriesData = await strapiService.getCarSeries();
        setCarSeries(carSeriesData.data || []);
        
        setLoading(false);
      } catch (err) {
        console.error('API Test Error:', err);
        setError(err instanceof Error ? err.message : 'Unknown error');
        setLoading(false);
      }
    };

    testApi();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-lg">Testing API Connection...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">API Integration Test</h1>
        
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
            <strong>Error:</strong> {error}
          </div>
        )}

        {/* API Status */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">API Connection Status</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center">
              <div className={`w-3 h-3 rounded-full mr-3 ${error ? 'bg-red-500' : 'bg-green-500'}`}></div>
              <span>Strapi Backend: {error ? 'Error' : 'Connected'}</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-green-500 mr-3"></div>
              <span>Frontend: Connected</span>
            </div>
          </div>
        </div>

        {/* Pages Data */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Pages API Test</h2>
          <p className="text-gray-600 mb-4">
            Endpoint: <code className="bg-gray-100 px-2 py-1 rounded">GET /api/pages</code>
          </p>
          {pages.length > 0 ? (
            <div>
              <p className="text-green-600 font-medium mb-2">✅ Success! Found {pages.length} page(s)</p>
              <pre className="bg-gray-100 p-4 rounded overflow-x-auto text-sm">
                {JSON.stringify(pages, null, 2)}
              </pre>
            </div>
          ) : (
            <div>
              <p className="text-yellow-600 font-medium mb-2">⚠️ No pages found</p>
              <p className="text-sm text-gray-600">
                Create a page in Strapi admin to see data here.
              </p>
            </div>
          )}
        </div>

        {/* Car Series Data */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Car Series API Test</h2>
          <p className="text-gray-600 mb-4">
            Endpoint: <code className="bg-gray-100 px-2 py-1 rounded">GET /api/car-series-collection</code>
          </p>
          {carSeries.length > 0 ? (
            <div>
              <p className="text-green-600 font-medium mb-2">✅ Success! Found {carSeries.length} car series</p>
              <pre className="bg-gray-100 p-4 rounded overflow-x-auto text-sm">
                {JSON.stringify(carSeries, null, 2)}
              </pre>
            </div>
          ) : (
            <div>
              <p className="text-yellow-600 font-medium mb-2">⚠️ No car series found</p>
              <p className="text-sm text-gray-600">
                Create a car series in Strapi admin to see data here.
              </p>
            </div>
          )}
        </div>

        {/* Instructions */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">Next Steps</h3>
          <ol className="list-decimal list-inside text-blue-800 space-y-1">
            <li>Go to <a href="http://localhost:1337/admin" className="underline" target="_blank">Strapi Admin</a></li>
            <li>Create content in Content Manager → Pages or Car Series</li>
            <li>Refresh this page to see the data</li>
            <li>Once data appears, the integration is fully working!</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
