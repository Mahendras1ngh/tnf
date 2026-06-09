// Central site contact + social configuration.
// Update social URLs here once the real profile links are provided.

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://thenextframe.in';

export const CONTACT = {
  // Display + tel: forms of the primary phone number
  phoneDisplay: '+91 9888 715 815',
  phoneE164: '+919888715815', // used for tel: and wa.me links
  whatsappE164: '919888715815', // wa.me requires no leading +
  email: 'hello@thenextframe.in',
  address: {
    line1: 'A-7, Hauz Khas Village',
    line2: 'New Delhi 110016, IN',
    city: 'New Delhi',
    country: 'India',
  },
} as const;

// Placeholder profile URLs — replace with the real handles when available.
export const SOCIALS = {
  instagram: 'https://instagram.com/thenextframe',
  youtube: 'https://youtube.com/@thenextframe',
  linkedin: 'https://linkedin.com/company/thenextframe',
  vimeo: 'https://vimeo.com/thenextframe',
} as const;

export const WHATSAPP_DEFAULT_MESSAGE =
  "Hi The Next Frame, I'd like to discuss a video project.";
