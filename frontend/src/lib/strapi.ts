import axios from 'axios';

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';

export const strapiApi = axios.create({
  baseURL: `${STRAPI_URL}/api`,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Helper function to get media URL
export const getStrapiMediaUrl = (url: string | null): string => {
  if (!url) return '';
  if (url.startsWith('http')) return url;
  return `${STRAPI_URL}${url}`;
};

// Generic fetch function for Strapi
export const fetchFromStrapi = async (endpoint: string, params?: any) => {
  try {
    const response = await strapiApi.get(endpoint, { params });
    return response.data;
  } catch (error) {
    console.error(`Error fetching from Strapi: ${endpoint}`, error);
    throw error;
  }
};

// Specific API functions
export const strapiService = {
  // Get all pages
  getPages: () => fetchFromStrapi('/pages', { populate: '*' }),

  // Get page by slug
  getPageBySlug: (slug: string) =>
    fetchFromStrapi('/pages', {
      filters: { slug: { $eq: slug } },
      populate: '*'
    }),

  // Get hero content
  getHeroContent: (pageId: string) =>
    fetchFromStrapi(`/pages/${pageId}`, {
      populate: {
        hero: {
          populate: ['image', 'video']
        }
      }
    }),

  // Get carousel images
  getCarouselImages: (pageId: string) =>
    fetchFromStrapi(`/pages/${pageId}`, {
      populate: {
        carousel: {
          populate: ['images']
        }
      }
    }),

  // Get navigation menu
  getNavigation: () => fetchFromStrapi('/navigation', { populate: '*' }),

  // Get car series
  getCarSeries: () => fetchFromStrapi('/car-series-collection', { populate: '*' }),

  // Get car series by slug
  getCarSeriesBySlug: (slug: string) =>
    fetchFromStrapi('/car-series-collection', {
      filters: { slug: { $eq: slug } },
      populate: '*'
    }),
};
