'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { CONTACT } from '@/lib/site';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

// Common country dial codes — India first (default).
const COUNTRY_CODES = [
  { code: '+91', label: 'IN +91' },
  { code: '+1', label: 'US +1' },
  { code: '+44', label: 'UK +44' },
  { code: '+971', label: 'UAE +971' },
  { code: '+61', label: 'AU +61' },
  { code: '+65', label: 'SG +65' },
  { code: '+49', label: 'DE +49' },
  { code: '+33', label: 'FR +33' },
];

type FieldErrors = Partial<
  Record<'name' | 'email' | 'phone' | 'service' | 'budget' | 'message', string>
>;

export default function ContactPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    countryCode: '+91',
    phone: '',
    service: '',
    budget: [] as string[],
    message: '',
    website: '', // honeypot
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitError, setSubmitError] = useState('');

  const budgetOptions = [
    '< ₹1L',
    '₹1-3L',
    '₹3-5L',
    '₹5-10L',
    '₹10-20L',
    '> ₹20L',
  ];

  const handleBudgetToggle = (budget: string) => {
    setFormData((prev) => ({
      ...prev,
      budget: prev.budget.includes(budget)
        ? prev.budget.filter((b) => b !== budget)
        : [...prev.budget, budget],
    }));
    setErrors((prev) => ({ ...prev, budget: undefined }));
  };

  const validate = (): FieldErrors => {
    const next: FieldErrors = {};
    if (formData.name.trim().length < 2) {
      next.name = 'Please enter your name';
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      next.email = 'Please enter a valid email address';
    }
    // Phone optional, but if filled must be a valid national number (6–14 digits)
    const digits = formData.phone.replace(/[^\d]/g, '');
    if (digits && !/^\d{6,14}$/.test(digits)) {
      next.phone = 'Please enter a valid phone number';
    }
    if (formData.countryCode === '+91' && digits && !/^[6-9]\d{9}$/.test(digits)) {
      next.phone = 'Enter a valid 10-digit Indian mobile number';
    }
    if (!formData.service) {
      next.service = 'Please select a service';
    }
    if (formData.budget.length === 0) {
      next.budget = 'Please select a budget range';
    }
    if (formData.message.trim().length < 10) {
      next.message = 'Tell us a little more (min 10 characters)';
    }
    return next;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError('');

    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);
    try {
      const phoneDigits = formData.phone.replace(/[^\d]/g, '');
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          company: formData.company.trim(),
          phone: phoneDigits ? `${formData.countryCode} ${phoneDigits}` : '',
          service: formData.service,
          budget: formData.budget.join(', '),
          message: formData.message.trim(),
          website: formData.website,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || 'Submission failed');
      }

      router.push('/thank-you');
    } catch (err) {
      setIsSubmitting(false);
      setSubmitError(
        err instanceof Error
          ? err.message
          : 'Something went wrong. Please try again.'
      );
    }
  };

  const characterCount = formData.message.length;
  const maxCharacters = 2000;

  return (
    <main className="relative">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden bg-[var(--bg)]">
        <div className="grain" />
        <div className="vignette" />

        <div className="max-w-[1100px] mx-auto px-8 relative z-10 py-20 text-center">
          <div className="label mb-6" style={{ justifyContent: 'center' }}>
            Get In Touch
          </div>
          <h1 className="display-lg mb-8">
            Let's Create Something <span className="italic text-[var(--gold)]">Exceptional</span>
          </h1>
          <p className="lede mx-auto" style={{ maxWidth: '620px' }}>
            Ready to bring your vision to life? Fill out the form below and
            we'll get back to you within 24 hours with a custom proposal.
          </p>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="relative py-20 md:py-32 bg-[var(--bg-2)] overflow-hidden">
        <div className="grain" />

        <div className="max-w-[1100px] mx-auto px-8 relative z-10">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Name & Email */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="label text-[11px] mb-3 block">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        setErrors({ ...errors, name: undefined });
                      }}
                      className="input-underline"
                      placeholder="John Doe"
                      aria-invalid={!!errors.name}
                    />
                    {errors.name && (
                      <p className="field-error">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="label text-[11px] mb-3 block">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        setErrors({ ...errors, email: undefined });
                      }}
                      className="input-underline"
                      placeholder="john@company.com"
                      aria-invalid={!!errors.email}
                    />
                    {errors.email && (
                      <p className="field-error">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Company & Phone */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="label text-[11px] mb-3 block">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      className="input-underline"
                      placeholder="Your Company"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="label text-[11px] mb-3 block">
                      Phone Number
                    </label>
                    <div className="flex gap-3 items-end">
                      <select
                        aria-label="Country code"
                        value={formData.countryCode}
                        onChange={(e) =>
                          setFormData({ ...formData, countryCode: e.target.value })
                        }
                        className="input-underline w-[110px] flex-shrink-0"
                      >
                        {COUNTRY_CODES.map((c) => (
                          <option key={c.code} value={c.code}>
                            {c.label}
                          </option>
                        ))}
                      </select>
                      <input
                        type="tel"
                        id="phone"
                        inputMode="numeric"
                        value={formData.phone}
                        onChange={(e) => {
                          setFormData({ ...formData, phone: e.target.value });
                          setErrors({ ...errors, phone: undefined });
                        }}
                        className="input-underline flex-1"
                        placeholder="98765 43210"
                        aria-invalid={!!errors.phone}
                      />
                    </div>
                    {errors.phone && (
                      <p className="field-error">{errors.phone}</p>
                    )}
                  </div>
                </div>

                {/* Service */}
                <div>
                  <label htmlFor="service" className="label text-[11px] mb-3 block">
                    Service of Interest *
                  </label>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={(e) => {
                      setFormData({ ...formData, service: e.target.value });
                      setErrors({ ...errors, service: undefined });
                    }}
                    className="input-underline"
                    aria-invalid={!!errors.service}
                  >
                    <option value="">Select a service</option>
                    <option value="branded-commercials">Branded Commercials</option>
                    <option value="corporate-films">Corporate Films</option>
                    <option value="testimonials">Testimonials</option>
                    <option value="documentary">Documentary</option>
                    <option value="social-shorts">Social Shorts</option>
                    <option value="product-demos">Product Demos</option>
                    <option value="educational">Educational</option>
                    <option value="performance-ads">Performance Ads</option>
                    <option value="photography">Photography</option>
                    <option value="animation">Animation & Motion</option>
                    <option value="ai-video">AI Video</option>
                    <option value="post-production">Post & Edit</option>
                  </select>
                  {errors.service && (
                    <p className="field-error">{errors.service}</p>
                  )}
                </div>

                {/* Budget Selection */}
                <div>
                  <div className="label text-[11px] mb-3 block">Budget Range *</div>
                  <div className="flex flex-wrap gap-3">
                    {budgetOptions.map((budget) => (
                      <button
                        key={budget}
                        type="button"
                        onClick={() => handleBudgetToggle(budget)}
                        className={`chip ${
                          formData.budget.includes(budget) ? 'active' : ''
                        }`}
                      >
                        {budget}
                      </button>
                    ))}
                  </div>
                  {errors.budget && (
                    <p className="field-error">{errors.budget}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <label htmlFor="message" className="label text-[11px]">
                      Project Details *
                    </label>
                    <span
                      className={`text-[11px] font-mono ${
                        characterCount > maxCharacters
                          ? 'text-[var(--red)]'
                          : 'text-[var(--ink-dim)]'
                      }`}
                    >
                      {characterCount}/{maxCharacters}
                    </span>
                  </div>
                  <textarea
                    id="message"
                    rows={6}
                    maxLength={maxCharacters}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      setErrors({ ...errors, message: undefined });
                    }}
                    className="input-underline resize-none"
                    placeholder="Tell us about your project, timeline, and any specific requirements..."
                    aria-invalid={!!errors.message}
                  />
                  {errors.message && (
                    <p className="field-error">{errors.message}</p>
                  )}
                </div>

                {/* Honeypot — hidden from users, traps bots */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="website">Website</label>
                  <input
                    type="text"
                    id="website"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formData.website}
                    onChange={(e) =>
                      setFormData({ ...formData, website: e.target.value })
                    }
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-gold w-full md:w-auto group"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                {submitError && (
                  <p className="field-error mt-2">{submitError}</p>
                )}
              </form>
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-8">
              <div className="card-base">
                <div className="label mb-6">Contact Information</div>

                <div className="space-y-6">
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="flex items-center gap-4 group p-4 rounded-lg hover:bg-[var(--surface)] transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-lg bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center flex-shrink-0 group-hover:border-[var(--gold)] group-hover:bg-[var(--gold)] transition-all duration-300">
                      <Mail className="w-5 h-5 group-hover:text-[var(--bg)] transition-colors duration-300" style={{ color: 'var(--ink)', opacity: 0.7 }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[11px] uppercase tracking-wider mb-1 font-mono" style={{ color: 'var(--ink)', opacity: 0.5 }}>Email</div>
                      <div className="text-[15px] font-medium group-hover:text-[var(--gold)] transition-colors duration-300 truncate" style={{ color: 'var(--ink)' }}>
                        {CONTACT.email}
                      </div>
                    </div>
                  </a>

                  <a href={`tel:${CONTACT.phoneE164}`} className="flex items-center gap-4 group p-4 rounded-lg hover:bg-[var(--surface)] transition-all duration-300">
                    <div className="w-12 h-12 rounded-lg bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center flex-shrink-0 group-hover:border-[var(--gold)] group-hover:bg-[var(--gold)] transition-all duration-300">
                      <Phone className="w-5 h-5 group-hover:text-[var(--bg)] transition-colors duration-300" style={{ color: 'var(--ink)', opacity: 0.7 }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[11px] uppercase tracking-wider mb-1 font-mono" style={{ color: 'var(--ink)', opacity: 0.5 }}>Phone</div>
                      <div className="text-[15px] font-medium group-hover:text-[var(--gold)] transition-colors duration-300" style={{ color: 'var(--ink)' }}>
                        {CONTACT.phoneDisplay}
                      </div>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-4 rounded-lg">
                    <div className="w-12 h-12 rounded-lg bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5" style={{ color: 'var(--ink)', opacity: 0.7 }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[11px] uppercase tracking-wider mb-1 font-mono" style={{ color: 'var(--ink)', opacity: 0.5 }}>
                        Office
                      </div>
                      <div className="text-[15px] font-medium" style={{ color: 'var(--ink)' }}>
                        New Delhi, India
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-base bg-gradient-to-br from-[var(--gold)]/10 to-[var(--red)]/10 border-[var(--gold)]/30">
                <div className="label mb-4">Response Time</div>
                <p className="text-[15px] text-[var(--ink-mute)] leading-relaxed">
                  We typically respond to all inquiries within 24 hours on
                  business days. For urgent requests, please call us directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
