'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Lock } from 'lucide-react';
import { SERVICE_OPTIONS } from './landing-data';

// India-first dial codes (mirrors the contact page).
const COUNTRY_CODES = [
  { code: '+91', label: 'IN +91' },
  { code: '+1', label: 'US +1' },
  { code: '+44', label: 'UK +44' },
  { code: '+971', label: 'UAE +971' },
  { code: '+61', label: 'AU +61' },
  { code: '+65', label: 'SG +65' },
];

type FieldErrors = Partial<
  Record<'name' | 'company' | 'email' | 'phone' | 'service', string>
>;

// Sent when the optional message is left blank so the API's 10-char
// minimum is satisfied without changing /api/contact.
const DEFAULT_MESSAGE =
  'Requested a free consultation via the corporate video landing page.';

export function ConsultationForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    countryCode: '+91',
    phone: '',
    service: '',
    message: '',
    website: '', // honeypot
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitError, setSubmitError] = useState('');

  const update = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const validate = (): FieldErrors => {
    const next: FieldErrors = {};
    const name = formData.name.trim();
    if (name.length < 2) {
      next.name = 'Please enter your name';
    } else if (!/^[A-Za-z][A-Za-z\s.'-]*$/.test(name)) {
      next.name = 'Name cannot contain numbers';
    }
    const company = formData.company.trim();
    if (company.length < 2) {
      next.company = 'Please enter your company name';
    } else if (!/[A-Za-z]/.test(company)) {
      next.company = 'Please enter a valid company name';
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim()))
      next.email = 'Please enter a valid email address';
    const digits = formData.phone.replace(/[^\d]/g, '');
    if (!digits) {
      next.phone = 'Please enter your mobile number';
    } else if (!/^\d{6,14}$/.test(digits)) {
      next.phone = 'Please enter a valid mobile number';
    } else if (formData.countryCode === '+91' && !/^[6-9]\d{9}$/.test(digits)) {
      next.phone = 'Enter a valid 10-digit Indian mobile number';
    }
    if (!formData.service) next.service = 'Please select a service';
    return next;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError('');

    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      // Bring the first invalid field into view so the click always has an
      // effect even when the offending field is scrolled out of sight.
      // Deferred so it runs after React re-renders the aria-invalid state.
      setTimeout(() => {
        const el =
          document.querySelector<HTMLElement>('[aria-invalid="true"]');
        el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        el?.focus?.();
      }, 0);
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
          phone: `${formData.countryCode} ${phoneDigits}`,
          service: formData.service,
          budget: '',
          message: formData.message.trim() || DEFAULT_MESSAGE,
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

  return (
    <div className="card-base" style={{ padding: '28px' }}>
      <h3
        className="serif"
        style={{ fontSize: '26px', lineHeight: 1.15, marginBottom: '20px' }}
      >
        Get a <span className="italic">Free</span> Consultation
      </h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            aria-label="Your Name"
            value={formData.name}
            onChange={(e) => update('name', e.target.value.replace(/[0-9]/g, ''))}
            className="input-underline"
            placeholder="Your Name*"
            aria-invalid={!!errors.name}
          />
          {errors.name && <p className="field-error">{errors.name}</p>}
        </div>

        <div>
          <input
            type="text"
            aria-label="Company Name"
            value={formData.company}
            onChange={(e) => update('company', e.target.value)}
            className="input-underline"
            placeholder="Company Name*"
            aria-invalid={!!errors.company}
          />
          {errors.company && <p className="field-error">{errors.company}</p>}
        </div>

        <div>
          <input
            type="email"
            aria-label="Email Address"
            value={formData.email}
            onChange={(e) => update('email', e.target.value)}
            className="input-underline"
            placeholder="Email Address*"
            aria-invalid={!!errors.email}
          />
          {errors.email && <p className="field-error">{errors.email}</p>}
        </div>

        <div>
          <div className="flex gap-3 items-end">
            <select
              aria-label="Country code"
              value={formData.countryCode}
              onChange={(e) => update('countryCode', e.target.value)}
              className="input-underline w-[92px] flex-shrink-0"
            >
              {COUNTRY_CODES.map((c) => (
                <option key={c.code} value={c.code}>
                  {c.label}
                </option>
              ))}
            </select>
            <input
              type="tel"
              inputMode="numeric"
              aria-label="Mobile Number"
              value={formData.phone}
              onChange={(e) => update('phone', e.target.value)}
              className="input-underline flex-1"
              placeholder="Mobile Number*"
              aria-invalid={!!errors.phone}
            />
          </div>
          {errors.phone && <p className="field-error">{errors.phone}</p>}
        </div>

        <div>
          <select
            aria-label="Service Required"
            value={formData.service}
            onChange={(e) => update('service', e.target.value)}
            className="input-underline"
            aria-invalid={!!errors.service}
            style={{ color: formData.service ? 'var(--ink)' : 'var(--ink-dim)' }}
          >
            <option value="">Service Required*</option>
            {SERVICE_OPTIONS.map((s) => (
              <option key={s} value={s} style={{ color: 'var(--ink)' }}>
                {s}
              </option>
            ))}
          </select>
          {errors.service && <p className="field-error">{errors.service}</p>}
        </div>

        <div>
          <textarea
            rows={3}
            aria-label="Message (Optional)"
            maxLength={2000}
            value={formData.message}
            onChange={(e) => update('message', e.target.value)}
            className="input-underline resize-none"
            placeholder="Message (Optional)"
          />
        </div>

        {/* Honeypot — hidden from users, traps bots */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="cv-website">Website</label>
          <input
            type="text"
            id="cv-website"
            tabIndex={-1}
            autoComplete="off"
            value={formData.website}
            onChange={(e) => update('website', e.target.value)}
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-gold w-full"
          style={{ justifyContent: 'center' }}
        >
          {isSubmitting ? 'Sending...' : 'Request Quote Now'}
        </button>

        {submitError && <p className="field-error">{submitError}</p>}

        <p
          className="mono"
          style={{
            fontSize: '11px',
            color: 'var(--ink-dim)',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            justifyContent: 'center',
            marginTop: '4px',
          }}
        >
          <Lock className="w-3 h-3" /> Your information is 100% secure
        </p>
      </form>
    </div>
  );
}
