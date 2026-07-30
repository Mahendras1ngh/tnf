'use client';

import { useState } from 'react';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { Plus, Minus } from 'lucide-react';
import { FAQS } from './faqs-data';

export default function FAQsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = FAQS;

  return (
    <main className="relative">
      <Navigation />

      {/* Hero Section */}
      <section
        style={{
          position: 'relative',
          minHeight: '45vh',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          background: 'var(--bg)',
        }}
      >
        <div className="grain" />
        <div className="vignette" />

        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '80px 32px',
            width: '100%',
            position: 'relative',
            zIndex: 10,
            textAlign: 'center',
          }}
        >
          <div className="label" style={{ justifyContent: 'center', marginBottom: '24px' }}>
            Got Questions?
          </div>
          <h1
            className="display-lg"
            style={{ marginBottom: '24px' }}
          >
            Frequently Asked <span className="italic">Questions</span>
          </h1>
          <p
            className="lede"
            style={{
              maxWidth: '600px',
              margin: '0 auto',
              color: 'var(--ink-mute)',
            }}
          >
            Everything you need to know about our video production services, process, and pricing.
          </p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section
        style={{
          position: 'relative',
          padding: '80px 0 120px',
          background: 'var(--bg-2)',
          overflow: 'hidden',
        }}
      >
        <div className="grain" />

        <div
          style={{
            maxWidth: '900px',
            margin: '0 auto',
            padding: '0 32px',
            position: 'relative',
            zIndex: 10,
          }}
        >
          {faqs.map((faq, index) => (
            <div
              key={index}
              style={{
                borderBottom: '1px solid var(--border)',
                transition: 'all 0.3s ease',
              }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '24px',
                  textAlign: 'left',
                  padding: '28px 0',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
              >
                <h3
                  style={{
                    fontFamily: '"Instrument Serif", Georgia, serif',
                    fontSize: 'clamp(18px, 2.5vw, 24px)',
                    lineHeight: 1.3,
                    fontWeight: 400,
                    color: openIndex === index ? 'var(--gold)' : 'var(--ink)',
                    transition: 'color 0.3s ease',
                    flex: 1,
                  }}
                >
                  {faq.question}
                </h3>
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    border: `1px solid ${openIndex === index ? 'var(--gold)' : 'var(--border)'}`,
                    background: openIndex === index ? 'var(--gold)' : 'transparent',
                    color: openIndex === index ? 'var(--bg)' : 'var(--ink)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    transition: 'all 0.3s ease',
                  }}
                >
                  {openIndex === index ? (
                    <Minus style={{ width: '20px', height: '20px' }} />
                  ) : (
                    <Plus style={{ width: '20px', height: '20px' }} />
                  )}
                </div>
              </button>

              <div
                style={{
                  maxHeight: openIndex === index ? '400px' : '0',
                  overflow: 'hidden',
                  transition: 'max-height 0.4s ease-in-out',
                }}
              >
                <p
                  style={{
                    fontSize: '16px',
                    lineHeight: 1.75,
                    color: 'var(--ink-mute)',
                    paddingBottom: '28px',
                    paddingRight: '68px',
                  }}
                >
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section
        style={{
          position: 'relative',
          padding: '100px 0',
          background: 'var(--bg)',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            maxWidth: '700px',
            margin: '0 auto',
            padding: '0 32px',
            textAlign: 'center',
          }}
        >
          <h2 className="display-md" style={{ marginBottom: '20px' }}>
            Still Have <span className="italic">Questions?</span>
          </h2>
          <p
            className="lede"
            style={{
              color: 'var(--ink-mute)',
              marginBottom: '40px',
              fontSize: '18px',
            }}
          >
            Our team is here to help. Reach out and we will get back to you within 24 hours.
          </p>
          <div
            style={{
              display: 'flex',
              gap: '16px',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <a href="/contact" className="btn-gold">
              Get in Touch
            </a>
            <a
              href="tel:+919888715815"
              className="btn btn-ghost"
            >
              Call Us: +91 9888 715 815
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
