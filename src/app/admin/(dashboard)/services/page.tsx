import { prisma } from '@/lib/prisma';
import { Plus, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { ServicesTable } from '@/components/admin/ServicesTable';

export const dynamic = 'force-dynamic';

async function getServices() {
  return prisma.service.findMany({
    orderBy: { order: 'asc' },
  });
}

export default async function ServicesPage() {
  const services = await getServices();
  const listed = services.filter((s) => s.isListed).length;
  const seoOnly = services.length - listed;

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <Link
            href="/admin/dashboard"
            className="inline-flex items-center gap-2 text-sm text-[var(--ink-mute)] hover:text-[var(--ink)] transition-colors mb-3"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Dashboard
          </Link>
          <h1 className="admin-page-title">Services</h1>
          <p className="admin-page-sub">
            {services.length} total · {listed} listed · {seoOnly} SEO landing pages
          </p>
        </div>
        <Link href="/admin/services/new" className="btn-gold">
          <Plus className="w-4 h-4" />
          Add Service
        </Link>
      </div>

      <ServicesTable services={services} />
    </div>
  );
}
