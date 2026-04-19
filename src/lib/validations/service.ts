import { z } from 'zod';

export const serviceFormSchema = z.object({
  title: z
    .string()
    .min(2, 'Title must be at least 2 characters')
    .max(100, 'Title must be less than 100 characters'),
  slug: z
    .string()
    .min(2, 'Slug must be at least 2 characters')
    .max(100, 'Slug must be less than 100 characters')
    .regex(/^[a-z0-9-]+$/, 'Slug can only contain lowercase letters, numbers, and hyphens'),
  description: z
    .string()
    .min(10, 'Description must be at least 10 characters')
    .max(500, 'Description must be less than 500 characters'),
  icon: z.string().optional(),
  image: z.string().url('Please enter a valid URL').optional().or(z.literal('')),
  content: z.any().optional(), // JSON content blocks
  features: z.array(z.string()).min(1, 'At least one feature is required'),
  order: z.number().int().min(0).default(0),
  isActive: z.boolean().default(true),
});

export type ServiceFormSchema = z.infer<typeof serviceFormSchema>;
