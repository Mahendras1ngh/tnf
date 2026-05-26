import type {
  Service,
  PortfolioItem,
  BlogPost,
  TeamMember,
  Testimonial,
  FAQ,
  ContactSubmission,
  SiteSetting,
  ClientLogo,
  User,
  PortfolioCategory,
  ContactStatus,
  UserRole,
} from '@prisma/client';

// Re-export Prisma types
export type {
  Service,
  PortfolioItem,
  BlogPost,
  TeamMember,
  Testimonial,
  FAQ,
  ContactSubmission,
  SiteSetting,
  ClientLogo,
  User,
  PortfolioCategory,
  ContactStatus,
  UserRole,
};

// Extended types with relations
export type ServiceWithPortfolio = Service & {
  portfolioItems?: PortfolioItem[];
};

export type BlogPostWithAuthor = BlogPost & {
  author?: Pick<User, 'id' | 'name' | 'image'> | null;
};

export type PortfolioItemWithService = PortfolioItem & {
  service?: Pick<Service, 'id' | 'title' | 'slug'> | null;
};

// Form input types
export interface ContactFormInput {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  subject?: string;
  message: string;
  service?: string;
  budget?: string;
}

export interface ServiceFormInput {
  title: string;
  slug: string;
  description: string;
  icon?: string;
  image?: string;
  content?: ContentBlock[];
  features: string[];
  order: number;
  isActive: boolean;
}

export interface PortfolioFormInput {
  title: string;
  slug: string;
  description: string;
  thumbnail?: string;
  videoUrl?: string;
  images: string[];
  client?: string;
  category: PortfolioCategory;
  tags: string[];
  featured: boolean;
  order: number;
  isActive: boolean;
  completedAt?: Date;
  serviceId?: string;
}

export interface BlogFormInput {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage?: string;
  tags: string[];
  category?: string;
  readTime?: number;
  published: boolean;
  featured: boolean;
  publishedAt?: Date;
}

export interface TeamMemberFormInput {
  name: string;
  role: string;
  bio?: string;
  image?: string;
  email?: string;
  phone?: string;
  linkedin?: string;
  twitter?: string;
  instagram?: string;
  order: number;
  isActive: boolean;
}

export interface TestimonialFormInput {
  name: string;
  role?: string;
  company?: string;
  content: string;
  image?: string;
  rating: number;
  videoUrl?: string;
  featured: boolean;
  isActive: boolean;
  order: number;
}

export interface FAQFormInput {
  question: string;
  answer: string;
  category?: string;
  order: number;
  isActive: boolean;
}

// Content block types for rich content
export type ContentBlockType =
  | 'text'
  | 'heading'
  | 'image'
  | 'video'
  | 'gallery'
  | 'quote'
  | 'list'
  | 'cta';

export interface BaseContentBlock {
  id: string;
  type: ContentBlockType;
}

export interface TextBlock extends BaseContentBlock {
  type: 'text';
  content: string;
}

export interface HeadingBlock extends BaseContentBlock {
  type: 'heading';
  content: string;
  level: 1 | 2 | 3 | 4 | 5 | 6;
}

export interface ImageBlock extends BaseContentBlock {
  type: 'image';
  src: string;
  alt: string;
  caption?: string;
}

export interface VideoBlock extends BaseContentBlock {
  type: 'video';
  url: string;
  caption?: string;
}

export interface GalleryBlock extends BaseContentBlock {
  type: 'gallery';
  images: { src: string; alt: string }[];
}

export interface QuoteBlock extends BaseContentBlock {
  type: 'quote';
  content: string;
  author?: string;
  role?: string;
}

export interface ListBlock extends BaseContentBlock {
  type: 'list';
  items: string[];
  ordered?: boolean;
}

export interface CTABlock extends BaseContentBlock {
  type: 'cta';
  title: string;
  description?: string;
  buttonText: string;
  buttonLink: string;
}

export type ContentBlock =
  | TextBlock
  | HeadingBlock
  | ImageBlock
  | VideoBlock
  | GalleryBlock
  | QuoteBlock
  | ListBlock
  | CTABlock;

// Pagination types
export interface PaginationParams {
  page?: number;
  limit?: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasMore: boolean;
  };
}

// API response types
export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Site settings map type
export interface SiteSettingsMap {
  site_name?: string;
  site_tagline?: string;
  contact_email?: string;
  contact_phone?: string;
  contact_address?: string;
  social_instagram?: string;
  social_youtube?: string;
  social_linkedin?: string;
  social_twitter?: string;
  meta_description?: string;
  showreel_url?: string;
  [key: string]: string | undefined;
}

// Dashboard stats type
export interface DashboardStats {
  totalServices: number;
  totalPortfolio: number;
  totalBlogPosts: number;
  totalTeamMembers: number;
  totalTestimonials: number;
  totalFAQs: number;
  newContacts: number;
  totalContacts: number;
  recentContacts: ContactSubmission[];
  recentPosts: BlogPost[];
}

// Filter types
export interface PortfolioFilters {
  category?: PortfolioCategory;
  featured?: boolean;
  serviceId?: string;
  search?: string;
}

export interface BlogFilters {
  category?: string;
  tag?: string;
  featured?: boolean;
  published?: boolean;
  search?: string;
}

// NextAuth extended types
declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      email: string;
      name?: string | null;
      image?: string | null;
      role: string;
    };
  }

  interface User {
    id: string;
    email: string;
    name?: string | null;
    image?: string | null;
    role: string;
  }
}

declare module '@auth/core/jwt' {
  interface JWT {
    id: string;
    role: string;
  }
}

// Form state types
export interface FormState {
  success: boolean;
  message?: string;
  errors?: Record<string, string[]>;
}

// Search params type
export interface SearchParams {
  [key: string]: string | string[] | undefined;
}

// Video provider types
export type VideoProvider = 'youtube' | 'vimeo' | 'custom';

export interface VideoInfo {
  provider: VideoProvider;
  id: string;
  url: string;
  thumbnail?: string;
}
