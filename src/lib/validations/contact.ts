import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z
    .string()
    .regex(/^[+]?[91]?[-\s]?[6-9]\d{9}$/, 'Please enter a valid phone number')
    .optional()
    .or(z.literal('')),
  company: z.string().max(100, 'Company name must be less than 100 characters').optional(),
  subject: z.string().max(200, 'Subject must be less than 200 characters').optional(),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(2000, 'Message must be less than 2000 characters'),
  service: z.string().optional(),
  budget: z.string().optional(),
});

export type ContactFormSchema = z.infer<typeof contactFormSchema>;

export const contactStatusSchema = z.enum(['NEW', 'READ', 'REPLIED', 'ARCHIVED']);
