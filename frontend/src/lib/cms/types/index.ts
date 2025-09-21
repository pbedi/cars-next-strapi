// CMS Type Definitions
export interface HeroData {
  title?: string
  subtitle?: string
  description?: string
  image?: string
  video?: string
  ctaText?: string
  ctaUrl?: string
}

export interface CarouselData {
  images: Array<{
    url: string
    alt: string
    caption?: string
  }>
}

export interface SEOData {
  title?: string
  description?: string
  keywords?: string
  ogImage?: string
  ogTitle?: string
  ogDescription?: string
  twitterCard?: string
  canonicalUrl?: string
}

export interface CarSpecifications {
  engine?: string
  power?: string
  torque?: string
  transmission?: string
  fuelType?: string
  acceleration?: string
  topSpeed?: string
  weight?: string
  dimensions?: {
    length?: string
    width?: string
    height?: string
    wheelbase?: string
  }
  features?: string[]
}

export interface ContentBlockData {
  // Hero block
  hero?: HeroData
  
  // Text block
  text?: {
    content: string
    alignment?: 'left' | 'center' | 'right'
  }
  
  // Image block
  image?: {
    url: string
    alt: string
    caption?: string
    width?: number
    height?: number
  }
  
  // Carousel block
  carousel?: CarouselData
  
  // Custom HTML block
  html?: {
    content: string
  }
}

// API Response types
export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}

// Form types
export interface CreatePageForm {
  title: string
  slug: string
  content?: any
  heroData?: HeroData
  carouselData?: CarouselData
  seoData?: SEOData
  published: boolean
}

export interface CreateCarSeriesForm {
  name: string
  slug: string
  description?: string
  specifications?: CarSpecifications
  price?: number
  heroData?: HeroData
  carouselData?: CarouselData
  published: boolean
}

export interface CreateUserForm {
  email: string
  password: string
  firstName?: string
  lastName?: string
  role: string
}

export interface LoginForm {
  email: string
  password: string
}

// Navigation types
export interface NavigationItemWithChildren {
  id: string
  label: string
  url?: string
  orderIndex: number
  isActive: boolean
  children: NavigationItemWithChildren[]
}
