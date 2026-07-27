import { MetadataRoute } from 'next';

// Static sitemap. Intentionally free of any database access: the previous
// Prisma-backed, force-dynamic sitemap returned 500s whenever the DB was
// unreachable, which stopped Google from reading it at all. Journal and
// Services are "Coming Soon" placeholders right now, so they are deliberately
// excluded (and set to noindex on the pages themselves) until real content
// ships — indexing thin placeholder pages hurts rankings.
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://thenextframe.in';
  const lastModified = new Date();

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/landing`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/work`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/faqs`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ];
}
