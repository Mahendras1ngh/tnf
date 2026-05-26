import { prisma } from '@/lib/prisma';
import { Plus } from 'lucide-react';
import Link from 'next/link';
import { ServicesTable } from '@/components/admin/ServicesTable';

async function getServices() {
  return prisma.service.findMany({
    orderBy: { order: 'asc' },
  });
}

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-2xl mb-2">Services</h1>
          <p className="text-[var(--ink-mute)]">
            Manage your service offerings
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
