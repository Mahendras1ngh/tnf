'use client';

import { useState } from 'react';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { Plus, Minus } from 'lucide-react';

export default function FAQsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What types of video services do you offer?',
      answer:
        'We offer a comprehensive range of video production services including ad films, corporate videos, product promos, explainer videos, UGC content, testimonial videos, and animation. Our services cover everything from branded commercials and documentary films to social shorts and AI-powered video production.',
    },
    {
      question: 'How much does it cost to make a video ad?',
      answer:
        'Pricing depends on several factors including script complexity, shoot days, locations, actors, and post-production requirements. We offer budget-friendly packages tailored to your needs. Our pricing typically ranges from ₹50K for simple projects to ₹25L+ for premium commercials. Contact us for a custom quote based on your specific requirements.',
    },
    {
      question: 'How long does it take to deliver a video?',
      answer:
        'Typically, project delivery takes 5–15 working days based on project complexity. Simple social shorts may be ready in 5-7 days, while full-scale commercials can take 2-4 weeks. We also offer expedited delivery options for urgent projects. Timeline depends on factors like shoot days, revision rounds, and animation complexity.',
    },
    {
      question: 'Can you help with scriptwriting and concept development?',
      answer:
        'Absolutely! Our in-house creative team specializes in concept development, scriptwriting, and storyboard creation. We work closely with you to understand your brand objectives, target audience, and key messages. Every script is crafted to align with your brand voice and campaign goals, ensuring maximum impact.',
    },
    {
      question: 'Do you provide voiceovers and background music?',
      answer:
        'Yes, we work with a network of professional voiceover artists in multiple languages and accents. We also provide royalty-free music tracks or can license premium music based on your preferences. Our audio post-production includes sound design, mixing, and mastering to ensure broadcast-quality output.',
    },
    {
      question: 'Can you shoot at my location?',
      answer:
        'Yes, we film at client locations including offices, factories, retail outlets, and any other venue across India. Our team handles all logistics including permits, equipment transport, and on-site setup. We also have access to premium studio spaces and can suggest ideal shooting locations based on your creative vision.',
    },
    {
      question: 'Do you offer social media-optimized videos?',
      answer:
        'Absolutely! We create platform-specific content optimized for Instagram Reels, YouTube Shorts, TikTok, LinkedIn, and other social platforms. Our social videos are formatted in vertical (9:16), square (1:1), or custom aspect ratios with attention-grabbing hooks, captions, and platform-specific best practices.',
    },
    {
      question: 'Will I get revisions after the first draft?',
      answer:
        'Yes, we provide 2–3 free revisions on all projects to ensure the final output meets your expectations. Our revision process covers changes to editing, color grading, music, graphics, and more. We work collaboratively to refine the video until you are completely satisfied with the result.',
    },
    {
      question: 'Do you work with startups and small businesses?',
      answer:
        'Yes! We offer budget-friendly packages specifically designed for MSMEs, startups, and D2C brands. We understand the constraints of early-stage companies and have flexible payment structures and scalable packages. Many of our startup clients have grown with us from their first video to full-scale campaigns.',
    },
    {
      question: 'How do I get started?',
      answer:
        'Getting started is simple! Contact us via email at hello@thenextframe.in or fill out our contact form. We typically respond within 24 hours. After understanding your requirements, we will send you a detailed proposal with creative concepts, timeline, and pricing. Once approved, we kick off with a creative briefing session.',
    },
  ];

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
