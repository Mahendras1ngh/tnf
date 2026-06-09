'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Loader2,
  Plus,
  X,
  Trash2,
  ChevronUp,
  ChevronDown,
} from 'lucide-react';
import { slugify } from '@/lib/utils';
import type { Service, ServiceCategory } from '@prisma/client';

const ICONS = [
  'Film', 'Building2', 'MessageSquare', 'FileText', 'Share2', 'Package',
  'GraduationCap', 'TrendingUp', 'Camera', 'Sparkles', 'Wand2', 'Scissors',
  'Video', 'Image', 'Music', 'Mic', 'Monitor', 'Smartphone',
];

const CATEGORIES = [
  { value: 'FILM_BRAND', label: 'Film & Brand' },
  { value: 'PERFORMANCE_SOCIAL', label: 'Performance & Social' },
  { value: 'ADJACENT_CRAFTS', label: 'Adjacent Crafts' },
];

interface ServiceSection {
  heading: string;
  body: string;
  items: string[];
}
interface ServiceFAQ {
  question: string;
  answer: string;
}
interface ServiceContent {
  intro?: string;
  sections?: ServiceSection[];
  faqs?: ServiceFAQ[];
}

interface ServiceFormProps {
  service?: Service | null;
}

// Small section wrapper for the form.
function FormSection({
  step,
  title,
  desc,
  children,
}: {
  step: number;
  title: string;
  desc?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="admin-card">
      <div className="admin-section-head">
        <div className="admin-section-title">
          <span className="step">{step}</span>
          {title}
        </div>
        {desc && <p className="admin-section-desc">{desc}</p>}
      </div>
      {children}
    </div>
  );
}

export function ServiceForm({ service }: ServiceFormProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const initialContent = (service?.content as ServiceContent | null) || {};

  const [formData, setFormData] = useState({
    title: service?.title || '',
    slug: service?.slug || '',
    description: service?.description || '',
    heroSubtitle: service?.heroSubtitle || '',
    metaTitle: service?.metaTitle || '',
    metaDescription: service?.metaDescription || '',
    image: service?.image || '',
    icon: service?.icon || 'Film',
    category: service?.category || 'FILM_BRAND',
    investment: service?.investment || '',
    turnaround: service?.turnaround || '',
    features: service?.features || [],
    tags: service?.tags || [],
    order: service?.order || 0,
    isActive: service?.isActive ?? true,
    isListed: service?.isListed ?? true,
  });

  const [intro, setIntro] = useState(initialContent.intro || '');
  const [sections, setSections] = useState<ServiceSection[]>(
    (initialContent.sections || []).map((s) => ({
      heading: s.heading || '',
      body: s.body || '',
      items: s.items || [],
    }))
  );
  const [faqs, setFaqs] = useState<ServiceFAQ[]>(initialContent.faqs || []);

  const [newFeature, setNewFeature] = useState('');
  const [newTag, setNewTag] = useState('');

  const handleTitleChange = (title: string) => {
    setFormData({
      ...formData,
      title,
      slug: service ? formData.slug : slugify(title),
    });
  };

  // ---- features / tags ----
  const addFeature = () => {
    if (newFeature.trim()) {
      setFormData({ ...formData, features: [...formData.features, newFeature.trim()] });
      setNewFeature('');
    }
  };
  const removeFeature = (i: number) =>
    setFormData({ ...formData, features: formData.features.filter((_, idx) => idx !== i) });

  const addTag = () => {
    if (newTag.trim()) {
      setFormData({ ...formData, tags: [...formData.tags, newTag.trim()] });
      setNewTag('');
    }
  };
  const removeTag = (i: number) =>
    setFormData({ ...formData, tags: formData.tags.filter((_, idx) => idx !== i) });

  // ---- sections ----
  const addSection = () =>
    setSections([...sections, { heading: '', body: '', items: [] }]);
  const updateSection = (i: number, field: keyof ServiceSection, value: string) =>
    setSections(sections.map((s, idx) => (idx === i ? { ...s, [field]: value } : s)));
  const removeSection = (i: number) => setSections(sections.filter((_, idx) => idx !== i));
  const moveSection = (i: number, dir: -1 | 1) => {
    const j = i + dir;
    if (j < 0 || j >= sections.length) return;
    const next = [...sections];
    [next[i], next[j]] = [next[j], next[i]];
    setSections(next);
  };
  const addSectionItem = (i: number) =>
    setSections(sections.map((s, idx) => (idx === i ? { ...s, items: [...s.items, ''] } : s)));
  const updateSectionItem = (i: number, j: number, value: string) =>
    setSections(
      sections.map((s, idx) =>
        idx === i ? { ...s, items: s.items.map((it, k) => (k === j ? value : it)) } : s
      )
    );
  const removeSectionItem = (i: number, j: number) =>
    setSections(
      sections.map((s, idx) =>
        idx === i ? { ...s, items: s.items.filter((_, k) => k !== j) } : s
      )
    );

  // ---- faqs ----
  const addFaq = () => setFaqs([...faqs, { question: '', answer: '' }]);
  const updateFaq = (i: number, field: keyof ServiceFAQ, value: string) =>
    setFaqs(faqs.map((f, idx) => (idx === i ? { ...f, [field]: value } : f)));
  const removeFaq = (i: number) => setFaqs(faqs.filter((_, idx) => idx !== i));
  const moveFaq = (i: number, dir: -1 | 1) => {
    const j = i + dir;
    if (j < 0 || j >= faqs.length) return;
    const next = [...faqs];
    [next[i], next[j]] = [next[j], next[i]];
    setFaqs(next);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Clean content: drop empty sections/faqs.
    const cleanedSections = sections
      .map((s) => ({
        heading: s.heading.trim(),
        body: s.body.trim(),
        items: s.items.map((it) => it.trim()).filter(Boolean),
      }))
      .filter((s) => s.heading || s.body || s.items.length);
    const cleanedFaqs = faqs
      .map((f) => ({ question: f.question.trim(), answer: f.answer.trim() }))
      .filter((f) => f.question && f.answer);

    const content = {
      intro: intro.trim(),
      sections: cleanedSections,
      faqs: cleanedFaqs,
    };

    try {
      const url = service ? `/api/services/${service.id}` : '/api/services';
      const method = service ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, content }),
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
    <form onSubmit={handleSubmit} className="space-y-5">
      {error && (
        <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm">
          {error}
        </div>
      )}

      {/* 1 — Basics */}
      <FormSection step={1} title="Basics" desc="Core identity of the service.">
        <div className="admin-grid-2">
          <div>
            <label className="admin-label">
              Title <span className="req">*</span>
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => handleTitleChange(e.target.value)}
              className="admin-input"
              placeholder="e.g., Branded Commercials & Ad Films"
              required
            />
          </div>
          <div>
            <label className="admin-label">
              Slug <span className="req">*</span>
            </label>
            <input
              type="text"
              value={formData.slug}
              onChange={(e) => setFormData({ ...formData, slug: slugify(e.target.value) })}
              className="admin-input mono"
              required
            />
            <p className="admin-hint">/services/{formData.slug || 'your-slug'}</p>
          </div>
        </div>

        <div className="mt-5">
          <label className="admin-label">
            Short Description <span className="req">*</span>
          </label>
          <textarea
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            rows={2}
            className="admin-input"
            placeholder="One-line summary used in cards and listings."
            required
          />
        </div>

        <div className="mt-5">
          <label className="admin-label">Hero Subtitle</label>
          <textarea
            value={formData.heroSubtitle}
            onChange={(e) => setFormData({ ...formData, heroSubtitle: e.target.value })}
            rows={2}
            className="admin-input"
            placeholder="Intro line shown under the H1 on the service page."
          />
        </div>

        <div className="admin-grid-3 mt-5">
          <div>
            <label className="admin-label">Icon</label>
            <select
              value={formData.icon}
              onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
              className="admin-input"
            >
              {ICONS.map((icon) => (
                <option key={icon} value={icon}>{icon}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="admin-label">Category</label>
            <select
              value={formData.category}
              onChange={(e) =>
                setFormData({ ...formData, category: e.target.value as ServiceCategory })
              }
              className="admin-input"
            >
              {CATEGORIES.map((cat) => (
                <option key={cat.value} value={cat.value}>{cat.label}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="admin-label">Order</label>
            <input
              type="number"
              value={formData.order}
              onChange={(e) => setFormData({ ...formData, order: parseInt(e.target.value) || 0 })}
              className="admin-input"
            />
          </div>
        </div>

        <div className="mt-5">
          <label className="admin-label">Image URL</label>
          <input
            type="text"
            value={formData.image}
            onChange={(e) => setFormData({ ...formData, image: e.target.value })}
            className="admin-input mono"
            placeholder="https://… (optional OG / hero image)"
          />
        </div>
      </FormSection>

      {/* 2 — SEO */}
      <FormSection
        step={2}
        title="SEO"
        desc="How this page appears in search engines and social shares."
      >
        <div>
          <label className="admin-label">Meta Title</label>
          <input
            type="text"
            value={formData.metaTitle}
            onChange={(e) => setFormData({ ...formData, metaTitle: e.target.value })}
            className="admin-input"
            placeholder="e.g., Branded Commercials & Ad Films | The Next Frame"
          />
          <p className="admin-hint">{formData.metaTitle.length} chars · aim for 50–60</p>
        </div>
        <div className="mt-5">
          <label className="admin-label">Meta Description</label>
          <textarea
            value={formData.metaDescription}
            onChange={(e) => setFormData({ ...formData, metaDescription: e.target.value })}
            rows={3}
            className="admin-input"
            placeholder="Concise summary for search results."
          />
          <p className="admin-hint">{formData.metaDescription.length} chars · aim for 150–160</p>
        </div>
      </FormSection>

      {/* 3 — Commercials */}
      <FormSection step={3} title="Pricing & Timeline" desc="Optional commercial details.">
        <div className="admin-grid-2">
          <div>
            <label className="admin-label">Investment Range</label>
            <input
              type="text"
              value={formData.investment}
              onChange={(e) => setFormData({ ...formData, investment: e.target.value })}
              placeholder="e.g., ₹8-25L"
              className="admin-input"
            />
          </div>
          <div>
            <label className="admin-label">Turnaround</label>
            <input
              type="text"
              value={formData.turnaround}
              onChange={(e) => setFormData({ ...formData, turnaround: e.target.value })}
              placeholder="e.g., 4-8 weeks"
              className="admin-input"
            />
          </div>
        </div>
      </FormSection>

      {/* 4 — Features & Tags */}
      <FormSection
        step={4}
        title="Features & Tags"
        desc="Features appear in the “What’s Included” grid. Tags show as chips."
      >
        <label className="admin-label">Features</label>
        <div className="flex gap-2 mb-3">
          <input
            type="text"
            value={newFeature}
            onChange={(e) => setNewFeature(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), addFeature())}
            placeholder="Add a feature and press Enter"
            className="admin-input flex-1"
          />
          <button type="button" onClick={addFeature} className="admin-icon-btn" aria-label="Add feature">
            <Plus className="w-5 h-5 text-[var(--gold)]" />
          </button>
        </div>
        <div className="flex flex-wrap gap-2">
          {formData.features.map((feature, i) => (
            <span key={i} className="admin-chip">
              {feature}
              <button type="button" onClick={() => removeFeature(i)} aria-label="Remove">
                <X className="w-3.5 h-3.5" />
              </button>
            </span>
          ))}
          {formData.features.length === 0 && (
            <span className="admin-hint">No features yet.</span>
          )}
        </div>

        <label className="admin-label mt-6">Tags</label>
        <div className="flex gap-2 mb-3">
          <input
            type="text"
            value={newTag}
            onChange={(e) => setNewTag(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
            placeholder="Add a tag and press Enter"
            className="admin-input flex-1"
          />
          <button type="button" onClick={addTag} className="admin-icon-btn" aria-label="Add tag">
            <Plus className="w-5 h-5 text-[var(--gold)]" />
          </button>
        </div>
        <div className="flex flex-wrap gap-2">
          {formData.tags.map((tag, i) => (
            <span key={i} className="admin-chip">
              {tag}
              <button type="button" onClick={() => removeTag(i)} aria-label="Remove">
                <X className="w-3.5 h-3.5" />
              </button>
            </span>
          ))}
          {formData.tags.length === 0 && <span className="admin-hint">No tags yet.</span>}
        </div>
      </FormSection>

      {/* 5 — Page content */}
      <FormSection
        step={5}
        title="Page Content"
        desc="The body of the service page: intro, content sections, and FAQs."
      >
        <label className="admin-label">Intro</label>
        <textarea
          value={intro}
          onChange={(e) => setIntro(e.target.value)}
          rows={4}
          className="admin-input"
          placeholder="Opening paragraph(s). Use a new line for each paragraph."
        />

        {/* Sections */}
        <div className="mt-7">
          <div className="flex items-center justify-between mb-3">
            <label className="admin-label" style={{ marginBottom: 0 }}>
              Content Sections
            </label>
            <span className="admin-hint">{sections.length} section(s)</span>
          </div>

          {sections.map((section, i) => (
            <div key={i} className="admin-repeat-item">
              <div className="admin-repeat-head">
                <span className="admin-repeat-num">Section {i + 1}</span>
                <div className="flex items-center gap-1">
                  <button type="button" className="admin-icon-btn" onClick={() => moveSection(i, -1)} disabled={i === 0} aria-label="Move up">
                    <ChevronUp className="w-4 h-4" />
                  </button>
                  <button type="button" className="admin-icon-btn" onClick={() => moveSection(i, 1)} disabled={i === sections.length - 1} aria-label="Move down">
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  <button type="button" className="admin-icon-btn danger" onClick={() => removeSection(i)} aria-label="Delete section">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <input
                type="text"
                value={section.heading}
                onChange={(e) => updateSection(i, 'heading', e.target.value)}
                className="admin-input"
                placeholder="Section heading"
              />
              <textarea
                value={section.body}
                onChange={(e) => updateSection(i, 'body', e.target.value)}
                rows={3}
                className="admin-input mt-3"
                placeholder="Section body (optional). New line = new paragraph."
              />

              {/* Bulleted items */}
              <div className="mt-3">
                {section.items.map((item, j) => (
                  <div key={j} className="flex gap-2 mb-2">
                    <input
                      type="text"
                      value={item}
                      onChange={(e) => updateSectionItem(i, j, e.target.value)}
                      className="admin-input flex-1"
                      placeholder="List item"
                    />
                    <button type="button" className="admin-icon-btn danger" onClick={() => removeSectionItem(i, j)} aria-label="Remove item">
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
                <button type="button" onClick={() => addSectionItem(i)} className="text-[13px] text-[var(--gold)] hover:underline mt-1">
                  + Add list item
                </button>
              </div>
            </div>
          ))}

          <button type="button" onClick={addSection} className="admin-add-btn mt-3">
            <Plus className="w-4 h-4" /> Add Section
          </button>
        </div>

        {/* FAQs */}
        <div className="mt-8">
          <div className="flex items-center justify-between mb-3">
            <label className="admin-label" style={{ marginBottom: 0 }}>FAQs</label>
            <span className="admin-hint">{faqs.length} question(s)</span>
          </div>

          {faqs.map((faq, i) => (
            <div key={i} className="admin-repeat-item">
              <div className="admin-repeat-head">
                <span className="admin-repeat-num">Q{i + 1}</span>
                <div className="flex items-center gap-1">
                  <button type="button" className="admin-icon-btn" onClick={() => moveFaq(i, -1)} disabled={i === 0} aria-label="Move up">
                    <ChevronUp className="w-4 h-4" />
                  </button>
                  <button type="button" className="admin-icon-btn" onClick={() => moveFaq(i, 1)} disabled={i === faqs.length - 1} aria-label="Move down">
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  <button type="button" className="admin-icon-btn danger" onClick={() => removeFaq(i)} aria-label="Delete FAQ">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <input
                type="text"
                value={faq.question}
                onChange={(e) => updateFaq(i, 'question', e.target.value)}
                className="admin-input"
                placeholder="Question"
              />
              <textarea
                value={faq.answer}
                onChange={(e) => updateFaq(i, 'answer', e.target.value)}
                rows={3}
                className="admin-input mt-3"
                placeholder="Answer"
              />
            </div>
          ))}

          <button type="button" onClick={addFaq} className="admin-add-btn mt-3">
            <Plus className="w-4 h-4" /> Add FAQ
          </button>
        </div>
      </FormSection>

      {/* 6 — Visibility */}
      <FormSection step={6} title="Visibility" desc="Control where this service appears.">
        <div className="admin-toggle-row">
          <input
            type="checkbox"
            id="isActive"
            checked={formData.isActive}
            onChange={(e) => setFormData({ ...formData, isActive: e.target.checked })}
            className="w-5 h-5 mt-0.5 accent-[var(--gold)]"
          />
          <label htmlFor="isActive" className="text-sm">
            <span className="text-[var(--ink)] font-medium">Active</span>
            <span className="block text-[var(--ink-mute)] text-[13px] mt-0.5">
              Page is published and reachable at its URL. Unchecking returns a 404.
            </span>
          </label>
        </div>
        <div className="admin-toggle-row mt-3">
          <input
            type="checkbox"
            id="isListed"
            checked={formData.isListed}
            onChange={(e) => setFormData({ ...formData, isListed: e.target.checked })}
            className="w-5 h-5 mt-0.5 accent-[var(--gold)]"
          />
          <label htmlFor="isListed" className="text-sm">
            <span className="text-[var(--ink)] font-medium">Listed in main grid</span>
            <span className="block text-[var(--ink-mute)] text-[13px] mt-0.5">
              Show in the /services grid. Turn off for SEO landing pages that should
              still have a page + sitemap entry, but not clutter the listing.
            </span>
          </label>
        </div>
      </FormSection>

      {/* Actions */}
      <div className="admin-save-bar">
        <button type="submit" disabled={isLoading} className="btn-gold disabled:opacity-50">
          {isLoading && <Loader2 className="w-4 h-4 animate-spin" />}
          {service ? 'Update Service' : 'Create Service'}
        </button>
        <button
          type="button"
          onClick={() => router.back()}
          className="px-6 py-3 border border-[var(--border)] rounded-full hover:border-[var(--border-strong)] transition-colors text-sm"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
