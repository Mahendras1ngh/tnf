'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Loader2, Plus, X } from 'lucide-react';
import { slugify } from '@/lib/utils';
import type { Service, ServiceCategory } from '@prisma/client';

const ICONS = [
  'Film',
  'Building2',
  'MessageSquare',
  'FileText',
  'Share2',
  'Package',
  'GraduationCap',
  'TrendingUp',
  'Camera',
  'Sparkles',
  'Wand2',
  'Scissors',
  'Video',
  'Image',
  'Music',
  'Mic',
  'Monitor',
  'Smartphone',
];

const CATEGORIES = [
  { value: 'FILM_BRAND', label: 'Film & Brand' },
  { value: 'PERFORMANCE_SOCIAL', label: 'Performance & Social' },
  { value: 'ADJACENT_CRAFTS', label: 'Adjacent Crafts' },
];

interface ServiceFormProps {
  service?: Service | null;
}

export function ServiceForm({ service }: ServiceFormProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const [formData, setFormData] = useState({
    title: service?.title || '',
    slug: service?.slug || '',
    description: service?.description || '',
    icon: service?.icon || 'Film',
    category: service?.category || 'FILM_BRAND',
    investment: service?.investment || '',
    turnaround: service?.turnaround || '',
    features: service?.features || [],
    tags: service?.tags || [],
    order: service?.order || 0,
    isActive: service?.isActive ?? true,
  });

  const [newFeature, setNewFeature] = useState('');
  const [newTag, setNewTag] = useState('');

  const handleTitleChange = (title: string) => {
    setFormData({
      ...formData,
      title,
      slug: service ? formData.slug : slugify(title),
    });
  };

  const addFeature = () => {
    if (newFeature.trim()) {
      setFormData({
        ...formData,
        features: [...formData.features, newFeature.trim()],
      });
      setNewFeature('');
    }
  };

  const removeFeature = (index: number) => {
    setFormData({
      ...formData,
      features: formData.features.filter((_, i) => i !== index),
    });
  };

  const addTag = () => {
    if (newTag.trim()) {
      setFormData({
        ...formData,
        tags: [...formData.tags, newTag.trim()],
      });
      setNewTag('');
    }
  };

  const removeTag = (index: number) => {
    setFormData({
      ...formData,
      tags: formData.tags.filter((_, i) => i !== index),
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const url = service
        ? `/api/services/${service.id}`
        : '/api/services';
      const method = service ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Failed to save service');
      }

      router.push('/admin/services');
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {error && (
        <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm">
          {error}
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        {/* Title */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Title <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => handleTitleChange(e.target.value)}
            className="w-full px-4 py-3 bg-[var(--bg)] border border-[var(--border)] rounded-lg focus:outline-none focus:border-[var(--gold)]"
            required
          />
        </div>

        {/* Slug */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Slug <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            value={formData.slug}
            onChange={(e) =>
              setFormData({ ...formData, slug: slugify(e.target.value) })
            }
            className="w-full px-4 py-3 bg-[var(--bg)] border border-[var(--border)] rounded-lg focus:outline-none focus:border-[var(--gold)] font-mono text-sm"
            required
          />
        </div>
      </div>

      {/* Description */}
      <div>
        <label className="block text-sm font-medium mb-2">
          Description <span className="text-red-400">*</span>
        </label>
        <textarea
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
          rows={3}
          className="w-full px-4 py-3 bg-[var(--bg)] border border-[var(--border)] rounded-lg focus:outline-none focus:border-[var(--gold)] resize-none"
          required
        />
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Icon */}
        <div>
          <label className="block text-sm font-medium mb-2">Icon</label>
          <select
            value={formData.icon}
            onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
            className="w-full px-4 py-3 bg-[var(--bg)] border border-[var(--border)] rounded-lg focus:outline-none focus:border-[var(--gold)]"
          >
            {ICONS.map((icon) => (
              <option key={icon} value={icon}>
                {icon}
              </option>
            ))}
          </select>
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-medium mb-2">Category</label>
          <select
            value={formData.category}
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value as ServiceCategory })
            }
            className="w-full px-4 py-3 bg-[var(--bg)] border border-[var(--border)] rounded-lg focus:outline-none focus:border-[var(--gold)]"
          >
            {CATEGORIES.map((cat) => (
              <option key={cat.value} value={cat.value}>
                {cat.label}
              </option>
            ))}
          </select>
        </div>

        {/* Order */}
        <div>
          <label className="block text-sm font-medium mb-2">Order</label>
          <input
            type="number"
            value={formData.order}
            onChange={(e) =>
              setFormData({ ...formData, order: parseInt(e.target.value) || 0 })
            }
            className="w-full px-4 py-3 bg-[var(--bg)] border border-[var(--border)] rounded-lg focus:outline-none focus:border-[var(--gold)]"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Investment */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Investment Range
          </label>
          <input
            type="text"
            value={formData.investment}
            onChange={(e) =>
              setFormData({ ...formData, investment: e.target.value })
            }
            placeholder="e.g., ₹8-25L"
            className="w-full px-4 py-3 bg-[var(--bg)] border border-[var(--border)] rounded-lg focus:outline-none focus:border-[var(--gold)]"
          />
        </div>

        {/* Turnaround */}
        <div>
          <label className="block text-sm font-medium mb-2">Turnaround</label>
          <input
            type="text"
            value={formData.turnaround}
            onChange={(e) =>
              setFormData({ ...formData, turnaround: e.target.value })
            }
            placeholder="e.g., 4-8 weeks"
            className="w-full px-4 py-3 bg-[var(--bg)] border border-[var(--border)] rounded-lg focus:outline-none focus:border-[var(--gold)]"
          />
        </div>
      </div>

      {/* Features */}
      <div>
        <label className="block text-sm font-medium mb-2">Features</label>
        <div className="flex gap-2 mb-3">
          <input
            type="text"
            value={newFeature}
            onChange={(e) => setNewFeature(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), addFeature())}
            placeholder="Add a feature"
            className="flex-1 px-4 py-2 bg-[var(--bg)] border border-[var(--border)] rounded-lg focus:outline-none focus:border-[var(--gold)]"
          />
          <button
            type="button"
            onClick={addFeature}
            className="px-4 py-2 bg-[var(--gold)] text-[var(--bg)] rounded-lg hover:opacity-90"
          >
            <Plus className="w-5 h-5" />
          </button>
        </div>
        <div className="flex flex-wrap gap-2">
          {formData.features.map((feature, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-[var(--bg)] border border-[var(--border)] rounded-full text-sm flex items-center gap-2"
            >
              {feature}
              <button
                type="button"
                onClick={() => removeFeature(index)}
                className="text-[var(--ink-mute)] hover:text-red-400"
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          ))}
        </div>
      </div>

      {/* Tags */}
      <div>
        <label className="block text-sm font-medium mb-2">Tags</label>
        <div className="flex gap-2 mb-3">
          <input
            type="text"
            value={newTag}
            onChange={(e) => setNewTag(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
            placeholder="Add a tag"
            className="flex-1 px-4 py-2 bg-[var(--bg)] border border-[var(--border)] rounded-lg focus:outline-none focus:border-[var(--gold)]"
          />
          <button
            type="button"
            onClick={addTag}
            className="px-4 py-2 bg-[var(--gold)] text-[var(--bg)] rounded-lg hover:opacity-90"
          >
            <Plus className="w-5 h-5" />
          </button>
        </div>
        <div className="flex flex-wrap gap-2">
          {formData.tags.map((tag, index) => (
            <span
              key={index}
              className="chip flex items-center gap-2"
            >
              {tag}
              <button
                type="button"
                onClick={() => removeTag(index)}
                className="text-[var(--ink-mute)] hover:text-red-400"
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          ))}
        </div>
      </div>

      {/* Active Toggle */}
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          id="isActive"
          checked={formData.isActive}
          onChange={(e) =>
            setFormData({ ...formData, isActive: e.target.checked })
          }
          className="w-5 h-5 rounded border-[var(--border)] bg-[var(--bg)] checked:bg-[var(--gold)]"
        />
        <label htmlFor="isActive" className="text-sm">
          Service is active and visible on the website
        </label>
      </div>

      {/* Submit */}
      <div className="flex gap-4">
        <button
          type="submit"
          disabled={isLoading}
          className="btn-gold disabled:opacity-50"
        >
          {isLoading && <Loader2 className="w-4 h-4 animate-spin" />}
          {service ? 'Update Service' : 'Create Service'}
        </button>
        <button
          type="button"
          onClick={() => router.back()}
          className="px-6 py-3 border border-[var(--border)] rounded-full hover:border-[var(--border-strong)] transition-colors"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
