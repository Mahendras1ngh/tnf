// Mega-menu / footer service navigation.
// Every `slug` here maps to a real, content-rich Service page seeded in the DB
// (rendered at /services/<slug>). Update mappings here and the header mega menu,
// mobile submenu, and footer all stay in sync.

export interface ServiceMenuItem {
  ico: string; // single-letter glyph shown in the mega menu
  title: string;
  sub: string; // small descriptor line
  slug: string; // -> /services/<slug>
}

export interface ServiceMenuColumn {
  heading: string;
  items: ServiceMenuItem[];
}

export const SERVICE_MENU: ServiceMenuColumn[] = [
  {
    heading: 'Film & Brand',
    items: [
      {
        ico: 'B',
        title: 'Branded Commercials',
        sub: 'TVC · Brand Films · Ad Films',
        slug: 'branded-commercials-ad-films',
      },
      {
        ico: 'C',
        title: 'Corporate Films',
        sub: 'Profiles · Culture · Anthems',
        slug: 'corporate-films-company-profiles',
      },
      {
        ico: 'T',
        title: 'TV Commercials',
        sub: 'TVC · Broadcast · Ad Films',
        slug: 'tv-commercial-production-company-in-india',
      },
      {
        ico: 'V',
        title: 'Testimonials',
        sub: 'Customer · Founder · Case Study',
        slug: 'customer-testimonial-case-study-videos',
      },
    ],
  },
  {
    heading: 'Performance & Social',
    items: [
      {
        ico: 'S',
        title: 'Social Media & Shorts',
        sub: 'Reels · Shorts · Creatives',
        slug: 'social-media-video-creatives-shorts',
      },
      {
        ico: 'U',
        title: 'UGC Videos',
        sub: 'Creators · Authentic · Scale',
        slug: 'ugc-video-production-company-in-india',
      },
      {
        ico: 'P',
        title: 'Product Demos',
        sub: 'Launch · Hero · Tabletop',
        slug: 'product-demo-launch-videos',
      },
      {
        ico: 'E',
        title: 'Educational & E-Learning',
        sub: 'EdTech · Courses · Explainers',
        slug: 'educational-e-learning-videos',
      },
    ],
  },
  {
    heading: 'Adjacent Crafts',
    items: [
      {
        ico: 'F',
        title: 'Corporate Photography',
        sub: 'Brand · Product · Stills',
        slug: 'corporate-photography-visual-branding',
      },
      {
        ico: 'M',
        title: 'Explainer & Animation',
        sub: '2D · 3D · Motion Graphics',
        slug: 'explainer-animated-videos',
      },
      {
        ico: 'I',
        title: 'AI Video Production',
        sub: 'Hybrid pipelines · Pitches',
        slug: 'ai-video-production-service',
      },
      {
        ico: 'L',
        title: 'Live Streaming',
        sub: 'Broadcast · Events · Multicam',
        slug: 'video-broadcasting-live-streaming-services',
      },
    ],
  },
];

// Flattened list for the footer / simpler menus.
export const SERVICE_MENU_FLAT: ServiceMenuItem[] = SERVICE_MENU.flatMap(
  (col) => col.items
);
