'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Pencil,
  Trash2,
  MoreVertical,
  Eye,
  EyeOff,
  ExternalLink,
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
      const res = await fetch(`/api/services/${id}`, { method: 'DELETE' });
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
      if (res.ok) router.refresh();
    } catch {
      alert('Failed to update service');
    }
  };

  if (services.length === 0) {
    return (
      <div className="admin-card text-center py-14">
        <p className="text-[var(--ink-mute)] mb-4">No services yet</p>
        <a href="/admin/services/new" className="btn-gold inline-flex">
          Add your first service
        </a>
      </div>
    );
  }

  return (
    <div className="admin-table-wrap">
      <table className="admin-table">
        <thead>
          <tr>
            <th style={{ width: '64px' }}>#</th>
            <th>Service</th>
            <th className="hidden md:table-cell">Category</th>
            <th className="hidden lg:table-cell">Visibility</th>
            <th>Status</th>
            <th className="text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service) => (
            <tr key={service.id}>
              <td>
                <span className="admin-order-badge">{service.order}</span>
              </td>

              <td>
                <p className="font-medium text-[var(--ink)] leading-tight">
                  {service.title}
                </p>
                <p className="text-xs text-[var(--ink-dim)] font-mono mt-1 truncate max-w-[260px]">
                  /services/{service.slug}
                </p>
              </td>

              <td className="hidden md:table-cell">
                <span className="text-sm text-[var(--ink-mute)]">
                  {categoryLabels[service.category] || service.category}
                </span>
              </td>

              <td className="hidden lg:table-cell">
                {service.isListed ? (
                  <span className="admin-vis-pill bg-blue-500/10 text-blue-400">
                    Listed
                  </span>
                ) : (
                  <span className="admin-vis-pill bg-purple-500/10 text-purple-400">
                    SEO only
                  </span>
                )}
              </td>

              <td>
                <button
                  onClick={() => toggleActive(service)}
                  className={cn(
                    'admin-status-pill',
                    service.isActive
                      ? 'bg-green-500/10 text-green-400'
                      : 'bg-gray-500/10 text-gray-400'
                  )}
                >
                  {service.isActive ? (
                    <>
                      <Eye className="w-3.5 h-3.5" /> Active
                    </>
                  ) : (
                    <>
                      <EyeOff className="w-3.5 h-3.5" /> Hidden
                    </>
                  )}
                </button>
              </td>

              <td>
                <div className="flex items-center justify-end gap-1 relative">
                  <a
                    href={`/services/${service.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="admin-icon-btn"
                    title="View on site"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <a
                    href={`/admin/services/${service.id}`}
                    className="admin-icon-btn"
                    title="Edit"
                  >
                    <Pencil className="w-4 h-4" />
                  </a>
                  <button
                    onClick={() =>
                      setActiveMenu(activeMenu === service.id ? null : service.id)
                    }
                    className="admin-icon-btn"
                    title="More"
                  >
                    <MoreVertical className="w-4 h-4" />
                  </button>

                  {activeMenu === service.id && (
                    <div className="absolute right-0 top-full mt-1 bg-[var(--bg)] border border-[var(--border)] rounded-lg shadow-lg overflow-hidden z-10 min-w-[140px]">
                      <button
                        onClick={() => {
                          handleDelete(service.id);
                          setActiveMenu(null);
                        }}
                        disabled={isDeleting === service.id}
                        className="w-full px-4 py-3 text-left text-sm text-red-400 hover:bg-red-500/10 flex items-center gap-2"
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
