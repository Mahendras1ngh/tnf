'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Pencil,
  Trash2,
  MoreVertical,
  Eye,
  EyeOff,
  GripVertical,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import type { Service } from '@prisma/client';

const categoryLabels: Record<string, string> = {
  FILM_BRAND: 'Film & Brand',
  PERFORMANCE_SOCIAL: 'Performance & Social',
  ADJACENT_CRAFTS: 'Adjacent Crafts',
};

interface ServicesTableProps {
  services: Service[];
}

export function ServicesTable({ services }: ServicesTableProps) {
  const router = useRouter();
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isDeleting, setIsDeleting] = useState<string | null>(null);

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this service?')) return;

    setIsDeleting(id);
    try {
      const res = await fetch(`/api/services/${id}`, {
        method: 'DELETE',
      });

      if (res.ok) {
        router.refresh();
      } else {
        alert('Failed to delete service');
      }
    } catch {
      alert('Failed to delete service');
    } finally {
      setIsDeleting(null);
    }
  };

  const toggleActive = async (service: Service) => {
    try {
      const res = await fetch(`/api/services/${service.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...service, isActive: !service.isActive }),
      });

      if (res.ok) {
        router.refresh();
      }
    } catch {
      alert('Failed to update service');
    }
  };

  if (services.length === 0) {
    return (
      <div className="card-base text-center py-12">
        <p className="text-[var(--ink-mute)] mb-4">No services yet</p>
        <a href="/admin/services/new" className="btn-gold inline-flex">
          Add your first service
        </a>
      </div>
    );
  }

  return (
    <div className="card-base overflow-hidden p-0">
      <table className="w-full">
        <thead className="bg-[var(--bg)] border-b border-[var(--border)]">
          <tr>
            <th className="text-left px-6 py-4 text-sm font-medium text-[var(--ink-mute)]">
              Order
            </th>
            <th className="text-left px-6 py-4 text-sm font-medium text-[var(--ink-mute)]">
              Service
            </th>
            <th className="text-left px-6 py-4 text-sm font-medium text-[var(--ink-mute)] hidden md:table-cell">
              Category
            </th>
            <th className="text-left px-6 py-4 text-sm font-medium text-[var(--ink-mute)] hidden lg:table-cell">
              Investment
            </th>
            <th className="text-left px-6 py-4 text-sm font-medium text-[var(--ink-mute)]">
              Status
            </th>
            <th className="text-right px-6 py-4 text-sm font-medium text-[var(--ink-mute)]">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-[var(--border)]">
          {services.map((service) => (
            <tr key={service.id} className="hover:bg-[var(--bg-2)]">
              <td className="px-6 py-4">
                <div className="flex items-center gap-2 text-[var(--ink-mute)]">
                  <GripVertical className="w-4 h-4" />
                  <span className="font-mono text-sm">{service.order}</span>
                </div>
              </td>
              <td className="px-6 py-4">
                <div>
                  <p className="font-medium">{service.title}</p>
                  <p className="text-sm text-[var(--ink-mute)] truncate max-w-xs">
                    {service.description}
                  </p>
                </div>
              </td>
              <td className="px-6 py-4 hidden md:table-cell">
                <span className="chip">
                  {categoryLabels[service.category] || service.category}
                </span>
              </td>
              <td className="px-6 py-4 hidden lg:table-cell">
                <span className="text-sm">{service.investment || '-'}</span>
              </td>
              <td className="px-6 py-4">
                <button
                  onClick={() => toggleActive(service)}
                  className={cn(
                    'px-2 py-1 text-xs rounded-full flex items-center gap-1',
                    service.isActive
                      ? 'bg-green-500/10 text-green-400'
                      : 'bg-gray-500/10 text-gray-400'
                  )}
                >
                  {service.isActive ? (
                    <>
                      <Eye className="w-3 h-3" /> Active
                    </>
                  ) : (
                    <>
                      <EyeOff className="w-3 h-3" /> Hidden
                    </>
                  )}
                </button>
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center justify-end gap-2 relative">
                  <a
                    href={`/admin/services/${service.id}`}
                    className="p-2 hover:bg-[var(--bg)] rounded-lg transition-colors"
                  >
                    <Pencil className="w-4 h-4" />
                  </a>
                  <button
                    onClick={() =>
                      setActiveMenu(activeMenu === service.id ? null : service.id)
                    }
                    className="p-2 hover:bg-[var(--bg)] rounded-lg transition-colors"
                  >
                    <MoreVertical className="w-4 h-4" />
                  </button>

                  {activeMenu === service.id && (
                    <div className="absolute right-0 top-full mt-1 bg-[var(--bg-2)] border border-[var(--border)] rounded-lg shadow-lg overflow-hidden z-10 min-w-[120px]">
                      <button
                        onClick={() => {
                          handleDelete(service.id);
                          setActiveMenu(null);
                        }}
                        disabled={isDeleting === service.id}
                        className="w-full px-4 py-2 text-left text-sm text-red-400 hover:bg-red-500/10 flex items-center gap-2"
                      >
                        <Trash2 className="w-4 h-4" />
                        {isDeleting === service.id ? 'Deleting...' : 'Delete'}
                      </button>
                    </div>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
