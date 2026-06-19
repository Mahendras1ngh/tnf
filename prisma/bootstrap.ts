/**
 * Deploy-time bootstrap. Runs during `npm run build` (after `prisma migrate deploy`).
 *
 * Ensures the seeded service pages + grid curation exist in whatever database
 * DATABASE_URL points to — so a fresh production DB is populated automatically.
 *
 * Idempotent + guarded: a sentinel slug is checked first, so it only bootstraps
 * once and never overwrites later admin edits. Failures are logged but never
 * fail the build (so a transient DB hiccup can't block a deploy).
 */
import { PrismaClient } from '@prisma/client';
import { seedServices } from './seed-services';
import { promoteServices } from './promote-services';

const SENTINEL_SLUG = 'explainer-video-production-agency-in-india';

async function main() {
  const prisma = new PrismaClient();
  try {
    const existing = await prisma.service.findUnique({
      where: { slug: SENTINEL_SLUG },
      select: { id: true },
    });

    if (existing) {
      console.log('⏭  Service pages already bootstrapped — skipping.');
      return;
    }

    console.log('🚀 Bootstrapping service pages into the database...');
    await seedServices(prisma);
    await promoteServices(prisma);
    console.log('✅ Bootstrap complete.');
  } finally {
    await prisma.$disconnect();
  }
}

main().catch((e) => {
  // Soft-fail: never break the build over seeding.
  console.error('⚠️  Bootstrap skipped due to error:', e?.message || e);
  process.exit(0);
});
