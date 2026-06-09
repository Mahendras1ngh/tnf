/**
 * One-off: surface the content-rich seeded pages in the /services grid and
 * retire the 12 empty placeholder "core" services.
 *
 * - Empty core services  -> isListed:false, pushed to the bottom (order 900+).
 * - 12 rich seeded pages -> isListed:true, ordered 1-12, categories balanced
 *   to match the header mega menu (4 Film & Brand, 4 Performance & Social,
 *   4 Adjacent Crafts).
 *
 * Run: npx tsx prisma/promote-services.ts
 */
import { PrismaClient, ServiceCategory } from '@prisma/client';

const prisma = new PrismaClient();

// Empty placeholder services to retire from the grid (kept active, URLs alive).
const CORE_SLUGS = [
  'branded-commercials',
  'corporate-films',
  'testimonials',
  'documentary',
  'social-shorts',
  'product-demos',
  'educational',
  'performance-ads',
  'photography',
  'animation',
  'ai-video',
  'post-production',
];

// Rich seeded pages to feature, in grid order, with their grid category.
const PROMOTE: { slug: string; category: ServiceCategory }[] = [
  { slug: 'branded-commercials-ad-films', category: 'FILM_BRAND' },
  { slug: 'corporate-films-company-profiles', category: 'FILM_BRAND' },
  { slug: 'tv-commercial-production-company-in-india', category: 'FILM_BRAND' },
  { slug: 'customer-testimonial-case-study-videos', category: 'FILM_BRAND' },
  { slug: 'social-media-video-creatives-shorts', category: 'PERFORMANCE_SOCIAL' },
  { slug: 'ugc-video-production-company-in-india', category: 'PERFORMANCE_SOCIAL' },
  { slug: 'product-demo-launch-videos', category: 'PERFORMANCE_SOCIAL' },
  { slug: 'educational-e-learning-videos', category: 'PERFORMANCE_SOCIAL' },
  { slug: 'corporate-photography-visual-branding', category: 'ADJACENT_CRAFTS' },
  { slug: 'explainer-animated-videos', category: 'ADJACENT_CRAFTS' },
  { slug: 'ai-video-production-service', category: 'ADJACENT_CRAFTS' },
  { slug: 'video-broadcasting-live-streaming-services', category: 'ADJACENT_CRAFTS' },
];

async function main() {
  // Retire empties -> unlisted, sink to bottom.
  for (let i = 0; i < CORE_SLUGS.length; i++) {
    await prisma.service.updateMany({
      where: { slug: CORE_SLUGS[i] },
      data: { isListed: false, order: 900 + i },
    });
  }
  console.log(`✓ Retired ${CORE_SLUGS.length} empty placeholder services`);

  // Promote rich pages -> listed, ordered, balanced categories.
  for (let i = 0; i < PROMOTE.length; i++) {
    const { slug, category } = PROMOTE[i];
    const res = await prisma.service.updateMany({
      where: { slug },
      data: { isListed: true, order: i + 1, category },
    });
    console.log(`  ${res.count ? '✓' : '✗ (not found)'} ${slug} -> ${category}`);
  }

  const listed = await prisma.service.count({ where: { isListed: true } });
  console.log(`✅ Listed services now: ${listed}`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
