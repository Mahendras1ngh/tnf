import { z } from 'zod';

export const blogFormSchema = z.object({
  title: z
    .string()
    .min(5, 'Title must be at least 5 characters')
    .max(200, 'Title must be less than 200 characters'),
  slug: z
    .string()
    .min(5, 'Slug must be at least 5 characters')
    .max(200, 'Slug must be less than 200 characters')
    .regex(/^[a-z0-9-]+$/, 'Slug can only contain lowercase letters, numbers, and hyphens'),
  excerpt: z
    .string()
    .min(20, 'Excerpt must be at least 20 characters')
    .max(500, 'Excerpt must be less than 500 characters'),
  content: z.string().min(100, 'Content must be at least 100 characters'),
  coverImage: z.string().url('Please enter a valid URL').optional().or(z.literal('')),
  tags: z.array(z.string()).default([]),
  category: z.string().optional(),
  readTime: z.number().int().min(1).optional(),
  published: z.boolean().default(false),
  featured: z.boolean().default(false),
  publishedAt: z.date().optional().or(z.string().optional()),
});

export type BlogFormSchema = z.infer<typeof blogFormSchema>;

export const portfolioFormSchema = z.object({
  title: z
    .string()
    .min(2, 'Title must be at least 2 characters')
    .max(200, 'Title must be less than 200 characters'),
  slug: z
    .string()
    .min(2, 'Slug must be at least 2 characters')
    .max(200, 'Slug must be less than 200 characters')
    .regex(/^[a-z0-9-]+$/, 'Slug can only contain lowercase letters, numbers, and hyphens'),
  description: z
    .string()
    .min(20, 'Description must be at least 20 characters')
    .max(1000, 'Description must be less than 1000 characters'),
  thumbnail: z.string().url('Please enter a valid URL').optional().or(z.literal('')),
  videoUrl: z.string().url('Please enter a valid URL').optional().or(z.literal('')),
  images: z.array(z.string().url('Please enter valid URLs')).default([]),
  client: z.string().max(100, 'Client name must be less than 100 characters').optional(),
  category: z.enum([
    'COMMERCIAL',
    'CORPORATE',
    'MUSIC_VIDEO',
    'DOCUMENTARY',
    'SHORT_FILM',
    'WEDDING',
    'EVENT',
    'SOCIAL_MEDIA',
    'ANIMATION',
    'OTHER',
  ]),
  tags: z.array(z.string()).default([]),
  featured: z.boolean().default(false),
  order: z.number().int().min(0).default(0),
  isActive: z.boolean().default(true),
  completedAt: z.date().optional().or(z.string().optional()),
  serviceId: z.string().optional(),
});

export type PortfolioFormSchema = z.infer<typeof portfolioFormSchema>;

export const teamMemberFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters'),
  role: z
    .string()
    .min(2, 'Role must be at least 2 characters')
    .max(100, 'Role must be less than 100 characters'),
  bio: z.string().max(500, 'Bio must be less than 500 characters').optional(),
  image: z.string().url('Please enter a valid URL').optional().or(z.literal('')),
  email: z.string().email('Please enter a valid email').optional().or(z.literal('')),
  phone: z.string().optional(),
  linkedin: z.string().url('Please enter a valid URL').optional().or(z.literal('')),
  twitter: z.string().url('Please enter a valid URL').optional().or(z.literal('')),
  instagram: z.string().url('Please enter a valid URL').optional().or(z.literal('')),
  order: z.number().int().min(0).default(0),
  isActive: z.boolean().default(true),
});

export type TeamMemberFormSchema = z.infer<typeof teamMemberFormSchema>;

export const testimonialFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters'),
  role: z.string().max(100, 'Role must be less than 100 characters').optional(),
  company: z.string().max(100, 'Company must be less than 100 characters').optional(),
  content: z
    .string()
    .min(20, 'Testimonial must be at least 20 characters')
    .max(1000, 'Testimonial must be less than 1000 characters'),
  image: z.string().url('Please enter a valid URL').optional().or(z.literal('')),
  rating: z.number().int().min(1).max(5).default(5),
  videoUrl: z.string().url('Please enter a valid URL').optional().or(z.literal('')),
  featured: z.boolean().default(false),
  isActive: z.boolean().default(true),
  order: z.number().int().min(0).default(0),
});

export type TestimonialFormSchema = z.infer<typeof testimonialFormSchema>;

export const faqFormSchema = z.object({
  question: z
    .string()
    .min(10, 'Question must be at least 10 characters')
    .max(300, 'Question must be less than 300 characters'),
  answer: z
    .string()
    .min(20, 'Answer must be at least 20 characters')
    .max(2000, 'Answer must be less than 2000 characters'),
  category: z.string().max(50, 'Category must be less than 50 characters').optional(),
  order: z.number().int().min(0).default(0),
  isActive: z.boolean().default(true),
});

export type FAQFormSchema = z.infer<typeof faqFormSchema>;
