import { ServiceForm } from '@/components/admin/ServiceForm';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function NewServicePage() {
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
        <h1 className="font-display text-2xl mb-2">Add New Service</h1>
        <p className="text-[var(--ink-mute)]">
          Create a new service offering
        </p>
      </div>

      <div className="card-base">
        <ServiceForm />
      </div>
    </div>
  );
}
