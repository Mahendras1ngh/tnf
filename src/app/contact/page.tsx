'use client';

import { useState } from 'react';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    budget: [] as string[],
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

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
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        budget: [],
        message: '',
      });

      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  const characterCount = formData.message.length;
  const maxCharacters = 500;

  return (
    <main className="relative">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden bg-[var(--bg)]">
        <div className="grain" />
        <div className="vignette" />

        <div className="container-tnf relative z-10 py-20">
          <div className="max-w-4xl">
            <div className="label label-with-line mb-6">Get In Touch</div>
            <h1 className="display-lg mb-8">
              Let's Create Something <span className="italic text-[var(--gold)]">Exceptional</span>
            </h1>
            <p className="lede max-w-2xl">
              Ready to bring your vision to life? Fill out the form below and
              we'll get back to you within 24 hours with a custom proposal.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="relative py-20 md:py-32 bg-[var(--bg-2)] overflow-hidden">
        <div className="grain" />

        <div className="container-tnf relative z-10">
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
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="input-underline"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="label text-[11px] mb-3 block">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="input-underline"
                      placeholder="john@company.com"
                    />
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
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="input-underline"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                {/* Service */}
                <div>
                  <label htmlFor="service" className="label text-[11px] mb-3 block">
                    Service of Interest *
                  </label>
                  <select
                    id="service"
                    required
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({ ...formData, service: e.target.value })
                    }
                    className="input-underline"
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
                    required
                    rows={6}
                    maxLength={maxCharacters}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="input-underline resize-none"
                    placeholder="Tell us about your project, timeline, and any specific requirements..."
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
              </form>

              {/* Success Message */}
              {isSuccess && (
                <div className="mt-8 p-6 rounded-lg bg-[var(--surface)] border border-[var(--gold)] flex items-center gap-4">
                  <CheckCircle className="w-6 h-6 text-[var(--gold)] flex-shrink-0" />
                  <div>
                    <div className="font-display text-[18px] mb-1">Message Sent!</div>
                    <p className="text-[14px] text-[var(--ink-mute)]">
                      Thank you for reaching out. We'll get back to you within 24 hours.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-8">
              <div className="card-base">
                <div className="label mb-6">Contact Information</div>

                <div className="space-y-6">
                  <a
                    href="mailto:hello@thenextframe.in"
                    className="flex items-center gap-4 group p-4 rounded-lg hover:bg-[var(--surface)] transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-lg bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center flex-shrink-0 group-hover:border-[var(--gold)] group-hover:bg-[var(--gold)] transition-all duration-300">
                      <Mail className="w-5 h-5 group-hover:text-[var(--bg)] transition-colors duration-300" style={{ color: 'var(--ink)', opacity: 0.7 }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[11px] uppercase tracking-wider mb-1 font-mono" style={{ color: 'var(--ink)', opacity: 0.5 }}>Email</div>
                      <div className="text-[15px] font-medium group-hover:text-[var(--gold)] transition-colors duration-300 truncate" style={{ color: 'var(--ink)' }}>
                        hello@thenextframe.in
                      </div>
                    </div>
                  </a>

                  <a href="tel:+919876543210" className="flex items-center gap-4 group p-4 rounded-lg hover:bg-[var(--surface)] transition-all duration-300">
                    <div className="w-12 h-12 rounded-lg bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center flex-shrink-0 group-hover:border-[var(--gold)] group-hover:bg-[var(--gold)] transition-all duration-300">
                      <Phone className="w-5 h-5 group-hover:text-[var(--bg)] transition-colors duration-300" style={{ color: 'var(--ink)', opacity: 0.7 }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[11px] uppercase tracking-wider mb-1 font-mono" style={{ color: 'var(--ink)', opacity: 0.5 }}>Phone</div>
                      <div className="text-[15px] font-medium group-hover:text-[var(--gold)] transition-colors duration-300" style={{ color: 'var(--ink)' }}>
                        +91 98765 43210
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
