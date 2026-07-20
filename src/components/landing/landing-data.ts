// Static content for the corporate video landing page (/landing).
// Copy mirrors The_Next_Frame_Landing_Page_HighRes.pdf mockup.
// NOTE: client logos, stats and the testimonial are placeholders from the
// mockup — replace with real, verified figures/logos before going live.

import {
  Award,
  Clock,
  Users,
  Tag,
  Headphones,
  TrendingUp,
  Zap,
  Gauge,
  Lightbulb,
  PiggyBank,
  type LucideIcon,
} from 'lucide-react';

export interface FeatureItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  image: string;
}

export interface StepItem {
  title: string;
  description: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

// Hero trust checks
export const HERO_CHECKS = [
  'Creative & Professional',
  'On-Time Delivery',
  'Result Driven Approach',
  'End-to-End Support',
];

// Service options for the consultation form dropdown
export const SERVICE_OPTIONS = [
  'Corporate Videos',
  'Brand Films',
  'Product Videos',
  'Event Coverage',
  'Aerial Video & Drone Shoots',
  'Other',
];

// Third-party brand wordmarks (rendered as styled text)
export const CLIENT_LOGOS = [
  'Adobe',
  'HP',
  'LendingPlate',
  'Unacademy',
  'Cars24',
  'Vedanta',
  'Decathlon',
];

// Why Choose Us — 6 cards
export const WHY_CHOOSE_US: FeatureItem[] = [
  {
    icon: Award,
    title: '10+ Years Experience',
    description: 'A decade of delivering exceptional video solutions.',
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Creative professionals who bring ideas to life.',
  },
  {
    icon: Tag,
    title: 'Transparent Pricing',
    description: 'No hidden costs, only value-driven solutions.',
  },
  {
    icon: Headphones,
    title: 'Dedicated Support',
    description: 'We are with you at every step of your journey.',
  },
  {
    icon: TrendingUp,
    title: 'Proven Results',
    description: 'Videos that drive engagement and deliver ROI.',
  },
  {
    icon: Clock,
    title: 'Fast Turnaround Time',
    description: 'High-quality videos delivered on time, every time.',
  },
];

// Our Services — 5 cards
export const SERVICES: ServiceItem[] = [
  {
    title: 'Corporate Videos',
    description: 'Build trust and communicate your brand story.',
    image: '/assets/corporate-boardroom-filming.png',
  },
  {
    title: 'Brand Films',
    description: 'Create emotional connect and long-lasting impact.',
    image: '/assets/movie-production-clapperboard.png',
  },
  {
    title: 'Product Videos',
    description: 'Highlight features and boost product sales.',
    image: '/assets/product-photography-studio.png',
  },
  {
    title: 'Event Coverage',
    description: 'Capture every moment with perfection.',
    image: '/assets/interview-podcast-setup.png',
  },
  {
    title: 'Aerial Video & Drone Shoots',
    description: 'Stunning aerial visuals for a unique perspective.',
    image: '/assets/professional-camera-rig.png',
  },
];

// Benefits You Get — 6 items
export const BENEFITS: FeatureItem[] = [
  { icon: TrendingUp, title: 'Increase Revenue', description: '' },
  { icon: Clock, title: 'Save Time', description: '' },
  { icon: Gauge, title: 'Improve ROI', description: '' },
  { icon: PiggyBank, title: 'Reduce Costs', description: '' },
  { icon: Zap, title: 'Better Performance', description: '' },
  { icon: Lightbulb, title: 'Expert Guidance', description: '' },
];

// How We Work — 5 steps
export const STEPS: StepItem[] = [
  {
    title: 'Consultation',
    description: 'Understanding your goals and vision.',
  },
  {
    title: 'Requirement Analysis',
    description: 'We analyze your needs in detail.',
  },
  {
    title: 'Strategy Planning',
    description: 'Creating the right plan for your project.',
  },
  {
    title: 'Implementation',
    description: 'Our team brings the plan to life.',
  },
  {
    title: 'Reporting & Support',
    description: 'Delivering results and ongoing support.',
  },
];

// Case study
export const CASE_STUDY = {
  title: 'Real Estate Project',
  thumbnail: '/assets/corporate-boardroom-filming.png',
  // NOTE: placeholder reel — replace with the real case-study video URL
  // (YouTube or Vimeo) before going live.
  videoUrl: 'https://www.youtube.com/watch?v=aqz-KE-bpKQ',
  points: [
    { label: 'Objective', value: 'Increase brand visibility' },
    { label: 'Solution', value: 'Corporate film + Aerial shoot' },
    { label: 'Result', value: '200% increase in leads' },
  ],
  stats: [
    { value: '200%', label: 'More Leads' },
    { value: '150%', label: 'More Engagement' },
    { value: '3M+', label: 'Views' },
  ],
};

// Testimonials / client reviews
export interface TestimonialItem {
  quote: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
}

export const TESTIMONIALS: TestimonialItem[] = [
  {
    quote:
      'The Next Frame understood our vision perfectly and delivered a video that exceeded our expectations.',
    name: 'Rohit Sharma',
    role: 'Marketing Head, Cars24',
    avatar: '/assets/profile.jpg',
    rating: 5,
  },
  {
    quote:
      'Professional, creative and always on time. Our brand film generated a huge response across all our channels.',
    name: 'Ananya Verma',
    role: 'Brand Manager, Decathlon',
    avatar: '/assets/profile.jpg',
    rating: 5,
  },
  {
    quote:
      'From concept to final cut, the team made the whole process effortless. The results speak for themselves.',
    name: 'Karan Mehta',
    role: 'Founder, LendingPlate',
    avatar: '/assets/profile.jpg',
    rating: 5,
  },
  {
    quote:
      'Exceptional storytelling and production quality. They truly captured what our company stands for.',
    name: 'Priya Nair',
    role: 'Communications Lead, Vedanta',
    avatar: '/assets/profile.jpg',
    rating: 5,
  },
];

// Stats band — 5 metrics
export const STATS: StatItem[] = [
  { value: '10+', label: 'Years of Experience' },
  { value: '500+', label: 'Projects Completed' },
  { value: '250+', label: 'Happy Clients' },
  { value: '95%', label: 'Client Retention' },
  { value: '400%', label: 'Average ROI Delivered' },
];

// Certifications & trust badges
export const CERTIFICATIONS = [
  'Google Partner',
  'ISO 9001:2015 Certified',
  'Meta Business Partner',
  'Best Video Production Agency 2023',
];

// FAQ — 6 questions
export const FAQS: FaqItem[] = [
  {
    question: 'What types of videos do you create?',
    answer:
      'We produce corporate videos, brand films, product videos, event coverage, testimonials and aerial/drone shoots — tailored to your business goals.',
  },
  {
    question: 'How long does a typical project take?',
    answer:
      'Most projects are delivered within 2–4 weeks depending on scope, shoot days and post-production complexity. We agree on a clear timeline before we start.',
  },
  {
    question: 'Do you provide script and concept?',
    answer:
      'Yes. Our creative team handles concept development, scripting and storyboarding as part of an end-to-end production service.',
  },
  {
    question: 'Can you help with video marketing?',
    answer:
      'Absolutely. Beyond production we advise on distribution, platform-specific edits and performance so your videos actually drive results.',
  },
  {
    question: 'What is your pricing structure?',
    answer:
      'Pricing is transparent and project-based — it depends on duration, crew, locations and deliverables. Request a free consultation for a custom quote.',
  },
  {
    question: 'Do you offer revisions?',
    answer:
      'Yes, every package includes structured revision rounds so the final video matches your vision.',
  },
];

// Contact strip
export const BUSINESS_HOURS = 'Mon – Sat: 10:00 AM – 7:00 PM';
