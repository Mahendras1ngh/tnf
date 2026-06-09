/**
 * Seeds SEO service landing pages from scraped JSON files in prisma/seed-data/.
 * Each file maps to a Service row rendered at /services/<slug>.
 * These are marked isListed:false so they don't crowd the main /services grid,
 * but they have full detail pages and appear in the sitemap.
 *
 * Run: npx tsx prisma/seed-services.ts
 */
import { PrismaClient, ServiceCategory } from '@prisma/client';
import { readdirSync, readFileSync } from 'fs';
import { join } from 'path';

const prisma = new PrismaClient();

const VALID_CATEGORIES: ServiceCategory[] = [
  'FILM_BRAND',
  'PERFORMANCE_SOCIAL',
  'ADJACENT_CRAFTS',
];

interface SeedFile {
  slug: string;
  title: string;
  metaTitle?: string;
  metaDescription?: string;
  heroSubtitle?: string;
  tags?: string[];
  category?: string;
  icon?: string;
  features?: string[];
  content?: {
    intro?: string;
    sections?: { heading: string; body?: string; items?: string[] }[];
    faqs?: { question: string; answer: string }[];
  };
}

async function main() {
  const dir = join(__dirname, 'seed-data');
  const files = readdirSync(dir).filter((f) => f.endsWith('.json'));

  console.log(`🌱 Seeding ${files.length} service landing pages...`);

  // Place SEO landing pages after the core 12 listed services.
  let order = 100;

  for (const file of files.sort()) {
    const raw = readFileSync(join(dir, file), 'utf8');
    const data = JSON.parse(raw) as SeedFile;

    const category = (
      VALID_CATEGORIES.includes(data.category as ServiceCategory)
        ? data.category
        : 'FILM_BRAND'
    ) as ServiceCategory;

    const description =
      data.heroSubtitle?.slice(0, 480) ||
      data.metaDescription ||
      data.title;

    await prisma.service.upsert({
      where: { slug: data.slug },
      update: {
        title: data.title,
        description,
        metaTitle: data.metaTitle ?? null,
        metaDescription: data.metaDescription ?? null,
        heroSubtitle: data.heroSubtitle ?? null,
        icon: data.icon ?? 'Video',
        category,
        tags: data.tags ?? [],
        features: data.features ?? [],
        content: data.content ?? {},
        isActive: true,
        isListed: false,
      },
      create: {
        title: data.title,
        slug: data.slug,
        description,
        metaTitle: data.metaTitle ?? null,
        metaDescription: data.metaDescription ?? null,
        heroSubtitle: data.heroSubtitle ?? null,
        icon: data.icon ?? 'Video',
        category,
        tags: data.tags ?? [],
        features: data.features ?? [],
        content: data.content ?? {},
        order: order++,
        isActive: true,
        isListed: false,
      },
    });

    console.log(`  ✓ ${data.slug}`);
  }

  const total = await prisma.service.count();
  console.log(`✅ Done. Total services in DB: ${total}`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
