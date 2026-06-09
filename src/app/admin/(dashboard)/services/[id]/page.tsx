import { notFound } from 'next/navigation';
import { prisma } from '@/lib/prisma';
import { ServiceForm } from '@/components/admin/ServiceForm';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

interface EditServicePageProps {
  params: Promise<{ id: string }>;
}

export default async function EditServicePage({ params }: EditServicePageProps) {
  const { id } = await params;

  const service = await prisma.service.findUnique({
    where: { id },
  });

  if (!service) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <div>
        <Link
          href="/admin/services"
          className="inline-flex items-center gap-2 text-sm text-[var(--ink-mute)] hover:text-[var(--ink)] mb-4"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Services
        </Link>
        <h1 className="admin-page-title">Edit Service</h1>
        <p className="admin-page-sub">Update {service.title}</p>
      </div>

      <ServiceForm service={service} />
    </div>
  );
}
