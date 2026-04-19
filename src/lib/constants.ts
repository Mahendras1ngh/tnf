// Site metadata defaults
export const SITE_CONFIG = {
  name: 'TheNextFrame',
  shortName: 'TNF',
  description:
    'TheNextFrame is a premium media production company specializing in commercials, corporate videos, music videos, and documentaries. We craft visual stories that inspire and drive results.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://thenextframe.in',
  ogImage: '/images/og-image.jpg',
  creator: 'TheNextFrame Team',
  keywords: [
    'video production',
    'media production',
    'commercial production',
    'corporate videos',
    'music videos',
    'documentary films',
    'animation',
    'motion graphics',
    'Mumbai',
    'India',
  ],
} as const;

// Navigation links
export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/blog', label: 'Blog' },
  { href: '/faqs', label: 'FAQs' },
  { href: '/contact', label: 'Contact' },
] as const;

// Admin navigation links
export const ADMIN_NAV_LINKS = [
  { href: '/admin/dashboard', label: 'Dashboard', icon: 'LayoutDashboard' },
  { href: '/admin/services', label: 'Services', icon: 'Briefcase' },
  { href: '/admin/portfolio', label: 'Portfolio', icon: 'FolderOpen' },
  { href: '/admin/blog', label: 'Blog', icon: 'FileText' },
  { href: '/admin/team', label: 'Team', icon: 'Users' },
  { href: '/admin/testimonials', label: 'Testimonials', icon: 'Quote' },
  { href: '/admin/faqs', label: 'FAQs', icon: 'HelpCircle' },
  { href: '/admin/contacts', label: 'Contacts', icon: 'Mail' },
  { href: '/admin/settings', label: 'Settings', icon: 'Settings' },
] as const;

// Portfolio categories
export const PORTFOLIO_CATEGORIES = [
  { value: 'COMMERCIAL', label: 'Commercial' },
  { value: 'CORPORATE', label: 'Corporate' },
  { value: 'MUSIC_VIDEO', label: 'Music Video' },
  { value: 'DOCUMENTARY', label: 'Documentary' },
  { value: 'SHORT_FILM', label: 'Short Film' },
  { value: 'WEDDING', label: 'Wedding' },
  { value: 'EVENT', label: 'Event' },
  { value: 'SOCIAL_MEDIA', label: 'Social Media' },
  { value: 'ANIMATION', label: 'Animation' },
  { value: 'OTHER', label: 'Other' },
] as const;

// Contact status options
export const CONTACT_STATUS = [
  { value: 'NEW', label: 'New', color: 'bg-blue-500' },
  { value: 'READ', label: 'Read', color: 'bg-yellow-500' },
  { value: 'REPLIED', label: 'Replied', color: 'bg-green-500' },
  { value: 'ARCHIVED', label: 'Archived', color: 'bg-gray-500' },
] as const;

// Service icons mapping
export const SERVICE_ICONS = [
  'Film',
  'Building2',
  'Music',
  'Camera',
  'Share2',
  'Sparkles',
  'Video',
  'Clapperboard',
  'Play',
  'Monitor',
  'Mic',
  'Palette',
] as const;

// Social links
export const SOCIAL_LINKS = [
  { name: 'Instagram', icon: 'Instagram', key: 'social_instagram' },
  { name: 'YouTube', icon: 'Youtube', key: 'social_youtube' },
  { name: 'LinkedIn', icon: 'Linkedin', key: 'social_linkedin' },
  { name: 'Twitter', icon: 'Twitter', key: 'social_twitter' },
] as const;

// Animation variants for Framer Motion
export const FADE_IN_UP = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
} as const;

export const FADE_IN = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
} as const;

export const SCALE_IN = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.95 },
} as const;

export const SLIDE_IN_LEFT = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 },
} as const;

export const SLIDE_IN_RIGHT = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 20 },
} as const;

export const STAGGER_CONTAINER = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
} as const;

// Default transition
export const DEFAULT_TRANSITION = {
  duration: 0.5,
  ease: [0.4, 0, 0.2, 1],
} as const;

// Stats for the homepage
export const STATS = [
  { label: 'Projects Completed', value: 500, suffix: '+' },
  { label: 'Happy Clients', value: 150, suffix: '+' },
  { label: 'Years Experience', value: 10, suffix: '+' },
  { label: 'Awards Won', value: 25, suffix: '' },
] as const;

// Pagination defaults
export const PAGINATION = {
  defaultPageSize: 12,
  pageSizeOptions: [6, 12, 24, 48],
} as const;

// Image sizes
export const IMAGE_SIZES = {
  thumbnail: { width: 400, height: 300 },
  card: { width: 600, height: 400 },
  hero: { width: 1920, height: 1080 },
  og: { width: 1200, height: 630 },
} as const;

// Budget options for contact form
export const BUDGET_OPTIONS = [
  { value: 'under-50k', label: 'Under ₹50,000' },
  { value: '50k-1l', label: '₹50,000 - ₹1,00,000' },
  { value: '1l-3l', label: '₹1,00,000 - ₹3,00,000' },
  { value: '3l-5l', label: '₹3,00,000 - ₹5,00,000' },
  { value: '5l-10l', label: '₹5,00,000 - ₹10,00,000' },
  { value: 'above-10l', label: 'Above ₹10,00,000' },
  { value: 'not-sure', label: 'Not Sure' },
] as const;

// API endpoints
export const API_ENDPOINTS = {
  contact: '/api/contact',
  revalidate: '/api/revalidate',
  aiImage: '/api/ai-image',
} as const;

// Revalidation tags
export const CACHE_TAGS = {
  services: 'services',
  portfolio: 'portfolio',
  blog: 'blog',
  team: 'team',
  testimonials: 'testimonials',
  faqs: 'faqs',
  settings: 'settings',
  clients: 'clients',
} as const;

// Error messages
export const ERROR_MESSAGES = {
  generic: 'Something went wrong. Please try again later.',
  notFound: 'The requested resource was not found.',
  unauthorized: 'You are not authorized to perform this action.',
  validation: 'Please check your input and try again.',
  network: 'Network error. Please check your connection.',
} as const;

// Success messages
export const SUCCESS_MESSAGES = {
  contactSubmitted: 'Thank you for your message! We will get back to you soon.',
  saved: 'Changes saved successfully.',
  deleted: 'Item deleted successfully.',
  created: 'Item created successfully.',
} as const;
