/**
 * CMS Service - Frontend service to fetch data from our custom CMS
 * This replaces the Strapi service with our custom CMS API
 */

const CMS_BASE_URL = process.env.NEXT_PUBLIC_CMS_URL || '';

interface CMSResponse<T> {
  success: boolean;
  data: T;
  error?: string;
  pagination?: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

interface Page {
  id: string;
  title: string;
  slug: string;
  content: any;
  heroData: any;
  carouselData: any;
  seoData: any;
  published: boolean;
  createdAt: string;
  updatedAt: string;
}

interface CarSeries {
  id: string;
  name: string;
  slug: string;
  description: string;
  specifications: any;
  price: number;
  heroData: any;
  carouselData: any;
  published: boolean;
  createdAt: string;
  updatedAt: string;
}

interface NavigationItem {
  id: string;
  label: string;
  url: string;
  parentId: string | null;
  orderIndex: number;
  isActive: boolean;
  children?: NavigationItem[];
}

// Generic fetch function for CMS API
async function fetchFromCMS<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const url = `${CMS_BASE_URL}/api/cms${endpoint}`;
  
  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  });

  if (!response.ok) {
    throw new Error(`CMS API error: ${response.status} ${response.statusText}`);
  }

  const result: CMSResponse<T> = await response.json();
  
  if (!result.success) {
    throw new Error(result.error || 'CMS API request failed');
  }

  return result.data;
}

// CMS Service functions
export const cmsService = {
  // Pages
  getPages: () => fetchFromCMS<Page[]>('/pages'),
  
  getPageBySlug: async (slug: string): Promise<Page | null> => {
    try {
      const pages = await fetchFromCMS<Page[]>(`/pages?search=${slug}`);
      return pages.find(page => page.slug === slug) || null;
    } catch (error) {
      console.error('Error fetching page by slug:', error);
      return null;
    }
  },

  getPageById: (id: string) => fetchFromCMS<Page>(`/pages/${id}`),

  // Car Series
  getCarSeries: () => fetchFromCMS<CarSeries[]>('/car-series'),
  
  getCarSeriesBySlug: async (slug: string): Promise<CarSeries | null> => {
    try {
      const carSeries = await fetchFromCMS<CarSeries[]>(`/car-series?search=${slug}`);
      return carSeries.find(series => series.slug === slug) || null;
    } catch (error) {
      console.error('Error fetching car series by slug:', error);
      return null;
    }
  },

  getCarSeriesById: (id: string) => fetchFromCMS<CarSeries>(`/car-series/${id}`),

  // Navigation
  getNavigation: () => fetchFromCMS<NavigationItem[]>('/navigation'),

  // Media
  getMedia: () => fetchFromCMS<any[]>('/media'),
};

// Helper functions to transform CMS data to component props
export const cmsHelpers = {
  // Transform page data to PageTemplate props
  pageToProps: (page: Page) => ({
    title: page.title,
    heroTitle: page.heroData?.title,
    heroSubtitle: page.heroData?.subtitle,
    heroDescription: page.heroData?.description,
    heroImageUrl: page.heroData?.imageUrl,
    heroVideoUrl: page.heroData?.videoUrl,
    heroHasVideo: page.heroData?.hasVideo || false,
    carouselTitle: page.carouselData?.title,
    carouselImages: page.carouselData?.images?.map((img: any, index: number) => ({
      id: `${page.id}-${index}`,
      src: img.src || `/images/placeholder-${index + 1}.jpg`,
      alt: img.alt || img.title || `${page.title} image ${index + 1}`,
      title: img.title,
      description: img.description,
    })) || [],
    seoData: page.seoData,
  }),

  // Transform car series data to PageTemplate props
  carSeriesToProps: (carSeries: CarSeries) => ({
    title: carSeries.name,
    heroTitle: carSeries.heroData?.title || carSeries.name,
    heroSubtitle: carSeries.heroData?.subtitle,
    heroDescription: carSeries.heroData?.description || carSeries.description,
    heroImageUrl: carSeries.heroData?.imageUrl,
    carouselTitle: carSeries.carouselData?.title,
    carouselImages: carSeries.carouselData?.images?.map((img: any, index: number) => ({
      id: `${carSeries.id}-${index}`,
      src: img.src || `/images/cars/${carSeries.slug}/image-${index + 1}.jpg`,
      alt: img.alt || img.title || `${carSeries.name} ${img.title || 'image'}`,
      title: img.title,
      description: img.description,
    })) || [],
    specifications: carSeries.specifications,
    price: carSeries.price,
    seoData: {
      metaTitle: `${carSeries.name} - JuniorCars`,
      metaDescription: carSeries.description,
      keywords: [carSeries.name.toLowerCase(), 'car', 'automotive', 'collection'],
    },
  }),

  // Transform car series list for overview page
  carSeriesListToOverview: (carSeriesList: CarSeries[]) => 
    carSeriesList
      .filter(series => series.published)
      .map(series => ({
        name: series.name,
        slug: series.slug,
        description: series.description,
        image: series.heroData?.imageUrl || `/images/${series.slug}-hero.jpg`,
        price: series.price,
      })),
};

// Default fallback data (in case CMS is unavailable)
export const fallbackData = {
  homepage: {
    heroTitle: 'JuniorCars',
    heroSubtitle: 'Premium Automotive Collection',
    heroDescription: 'Discover our curated collection of classic and modern vehicles.',
    heroImageUrl: '/images/hero/hero-car.jpg',
    carouselTitle: 'Featured Collection',
    carouselImages: [
      { id: '1', src: '/images/gallery/series1.jpg', alt: 'Series 1', title: 'Series 1 Collection' },
      { id: '2', src: '/images/gallery/300.jpg', alt: '300 Series', title: '300 Series' },
      { id: '3', src: '/images/gallery/spyder.jpg', alt: '356 Heritage', title: '356 Heritage' },
      { id: '4', src: '/images/gallery/landjunior.jpg', alt: 'Landrover', title: 'Landrover Adventure' },
    ],
  },
  carSeries: [
    { name: 'Series 1', slug: 'series-1', description: 'Classic elegance redefined', image: '/images/series-1-hero.jpg' },
    { name: '300 Series', slug: '300', description: 'Power meets sophistication', image: '/images/300-hero.jpg' },
    { name: '356 Heritage', slug: '356', description: 'Timeless automotive art', image: '/images/356-hero.jpg' },
    { name: 'Landrover', slug: 'landrover', description: 'Built for adventure', image: '/images/landrover-hero.jpg' },
  ],
};

export default cmsService;
