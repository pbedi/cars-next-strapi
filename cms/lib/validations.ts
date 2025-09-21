import { z } from 'zod'

// User validation schemas
export const createUserSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  role: z.enum(['admin', 'editor']).default('admin'),
})

export const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(1, 'Password is required'),
})

// Page validation schemas
export const heroDataSchema = z.object({
  title: z.string().optional(),
  subtitle: z.string().optional(),
  description: z.string().optional(),
  image: z.string().url().optional(),
  video: z.string().url().optional(),
  ctaText: z.string().optional(),
  ctaUrl: z.string().url().optional(),
}).optional()

export const carouselDataSchema = z.object({
  images: z.array(z.object({
    url: z.string().url(),
    alt: z.string(),
    caption: z.string().optional(),
  })),
}).optional()

export const seoDataSchema = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
  keywords: z.string().optional(),
  ogImage: z.string().url().optional(),
  ogTitle: z.string().optional(),
  ogDescription: z.string().optional(),
  twitterCard: z.string().optional(),
  canonicalUrl: z.string().url().optional(),
}).optional()

export const createPageSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  slug: z.string().min(1, 'Slug is required').regex(/^[a-z0-9-]+$/, 'Slug must contain only lowercase letters, numbers, and hyphens'),
  content: z.any().optional(),
  heroData: heroDataSchema,
  carouselData: carouselDataSchema,
  seoData: seoDataSchema,
  published: z.boolean().default(false),
})

export const updatePageSchema = createPageSchema.partial().extend({
  id: z.string().cuid(),
})

// Car Series validation schemas
export const carSpecificationsSchema = z.object({
  engine: z.string().optional(),
  power: z.string().optional(),
  torque: z.string().optional(),
  transmission: z.string().optional(),
  fuelType: z.string().optional(),
  acceleration: z.string().optional(),
  topSpeed: z.string().optional(),
  weight: z.string().optional(),
  dimensions: z.object({
    length: z.string().optional(),
    width: z.string().optional(),
    height: z.string().optional(),
    wheelbase: z.string().optional(),
  }).optional(),
  features: z.array(z.string()).optional(),
}).optional()

export const createCarSeriesSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  slug: z.string().min(1, 'Slug is required').regex(/^[a-z0-9-]+$/, 'Slug must contain only lowercase letters, numbers, and hyphens'),
  description: z.string().optional(),
  specifications: carSpecificationsSchema,
  price: z.number().positive().optional(),
  heroData: heroDataSchema,
  carouselData: carouselDataSchema,
  published: z.boolean().default(false),
})

export const updateCarSeriesSchema = createCarSeriesSchema.partial().extend({
  id: z.string().cuid(),
})

// Navigation validation schemas
export const createNavigationItemSchema = z.object({
  label: z.string().min(1, 'Label is required'),
  url: z.string().optional(),
  parentId: z.string().cuid().optional(),
  orderIndex: z.number().int().default(0),
  isActive: z.boolean().default(true),
})

export const updateNavigationItemSchema = createNavigationItemSchema.partial().extend({
  id: z.string().cuid(),
})

// Media validation schemas
export const createMediaSchema = z.object({
  filename: z.string().min(1, 'Filename is required'),
  originalName: z.string().min(1, 'Original name is required'),
  url: z.string().url('Invalid URL'),
  altText: z.string().optional(),
  size: z.number().int().positive().optional(),
  mimeType: z.string().optional(),
  width: z.number().int().positive().optional(),
  height: z.number().int().positive().optional(),
})

export const updateMediaSchema = createMediaSchema.partial().extend({
  id: z.string().cuid(),
})

// Content Block validation schemas
export const contentBlockDataSchema = z.object({
  hero: heroDataSchema,
  text: z.object({
    content: z.string(),
    alignment: z.enum(['left', 'center', 'right']).optional(),
  }).optional(),
  image: z.object({
    url: z.string().url(),
    alt: z.string(),
    caption: z.string().optional(),
    width: z.number().int().positive().optional(),
    height: z.number().int().positive().optional(),
  }).optional(),
  carousel: carouselDataSchema,
  html: z.object({
    content: z.string(),
  }).optional(),
}).partial()

export const createContentBlockSchema = z.object({
  pageId: z.string().cuid(),
  type: z.enum(['hero', 'carousel', 'text', 'image', 'html']),
  data: contentBlockDataSchema,
  orderIndex: z.number().int().default(0),
})

export const updateContentBlockSchema = createContentBlockSchema.partial().extend({
  id: z.string().cuid(),
})

// Query parameter schemas
export const paginationSchema = z.object({
  page: z.coerce.number().int().positive().default(1),
  limit: z.coerce.number().int().positive().max(100).default(10),
})

export const searchSchema = z.object({
  q: z.string().optional(),
  published: z.coerce.boolean().optional(),
  sortBy: z.enum(['createdAt', 'updatedAt', 'title', 'name']).default('createdAt'),
  sortOrder: z.enum(['asc', 'desc']).default('desc'),
})

// Type exports
export type CreateUserInput = z.infer<typeof createUserSchema>
export type LoginInput = z.infer<typeof loginSchema>
export type CreatePageInput = z.infer<typeof createPageSchema>
export type UpdatePageInput = z.infer<typeof updatePageSchema>
export type CreateCarSeriesInput = z.infer<typeof createCarSeriesSchema>
export type UpdateCarSeriesInput = z.infer<typeof updateCarSeriesSchema>
export type CreateNavigationItemInput = z.infer<typeof createNavigationItemSchema>
export type UpdateNavigationItemInput = z.infer<typeof updateNavigationItemSchema>
export type CreateMediaInput = z.infer<typeof createMediaSchema>
export type UpdateMediaInput = z.infer<typeof updateMediaSchema>
export type CreateContentBlockInput = z.infer<typeof createContentBlockSchema>
export type UpdateContentBlockInput = z.infer<typeof updateContentBlockSchema>
export type PaginationInput = z.infer<typeof paginationSchema>
export type SearchInput = z.infer<typeof searchSchema>
