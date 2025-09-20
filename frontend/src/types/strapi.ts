// Strapi Media Types
export interface StrapiMedia {
  id: number;
  attributes: {
    name: string;
    alternativeText?: string;
    caption?: string;
    width: number;
    height: number;
    formats?: {
      thumbnail?: StrapiMediaFormat;
      small?: StrapiMediaFormat;
      medium?: StrapiMediaFormat;
      large?: StrapiMediaFormat;
    };
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl?: string;
    provider: string;
    provider_metadata?: any;
    createdAt: string;
    updatedAt: string;
  };
}

export interface StrapiMediaFormat {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  width: number;
  height: number;
  size: number;
  path?: string;
  url: string;
}

// Hero Component Types
export interface HeroContent {
  id: number;
  attributes: {
    title: string;
    subtitle?: string;
    description?: string;
    image?: {
      data: StrapiMedia;
    };
    video?: {
      data: StrapiMedia;
    };
    hasVideo: boolean;
    ctaText?: string;
    ctaLink?: string;
  };
}

// Carousel Types
export interface CarouselImage {
  id: number;
  attributes: {
    title?: string;
    description?: string;
    image: {
      data: StrapiMedia;
    };
  };
}

export interface CarouselContent {
  id: number;
  attributes: {
    title?: string;
    images: {
      data: CarouselImage[];
    };
  };
}

// Page Types
export interface PageContent {
  id: number;
  attributes: {
    title: string;
    slug: string;
    description?: string;
    hero?: {
      data: HeroContent;
    };
    carousel?: {
      data: CarouselContent;
    };
    content?: string;
    seo?: {
      metaTitle?: string;
      metaDescription?: string;
    };
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

// Navigation Types
export interface NavigationItem {
  id: number;
  title: string;
  url: string;
  target?: string;
  children?: NavigationItem[];
}

export interface Navigation {
  id: number;
  attributes: {
    title: string;
    slug: string;
    items: NavigationItem[];
  };
}

// Car Series Types
export interface CarSeries {
  id: number;
  attributes: {
    name: string;
    slug: string;
    description?: string;
    hero?: {
      data: HeroContent;
    };
    carousel?: {
      data: CarouselContent;
    };
    specifications?: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

// API Response Types
export interface StrapiResponse<T> {
  data: T;
  meta: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}
