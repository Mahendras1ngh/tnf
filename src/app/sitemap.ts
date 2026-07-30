import { MetadataRoute } from 'next';
import { prisma } from '@/lib/prisma';

// Regenerate the sitemap hourly (ISR). NOT force-dynamic: a force-dynamic +
// Prisma sitemap 500s whenever the DB is briefly unreachable, which stops
// Google reading it at all. Every DB read below is guarded so a hiccup falls
// back to the static routes instead of failing the whole sitemap.
export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://thenextframe.in';
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/landing`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/work`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/services`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/journal`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/faqs`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/privacy-policy`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/terms-conditions`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/refund-cancellation-policy`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
  ];

  // Dynamic service landing pages
  let services: MetadataRoute.Sitemap = [];
  try {
    const list = await prisma.service.findMany({
      where: { isActive: true },
      select: { slug: true, updatedAt: true },
    });
    services = list.map((s) => ({
      url: `${baseUrl}/services/${s.slug}`,
      lastModified: s.updatedAt || now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    }));
  } catch (error) {
    console.error('sitemap: failed to load services:', error);
  }

  // Dynamic journal posts
  let posts: MetadataRoute.Sitemap = [];
  try {
    const list = await prisma.blogPost.findMany({
      where: { published: true },
      select: { slug: true, updatedAt: true, publishedAt: true },
    });
    posts = list.map((p) => ({
      url: `${baseUrl}/journal/${p.slug}`,
      lastModified: p.updatedAt || p.publishedAt || now,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }));
  } catch (error) {
    console.error('sitemap: failed to load posts:', error);
  }

  return [...staticPages, ...services, ...posts];
}
