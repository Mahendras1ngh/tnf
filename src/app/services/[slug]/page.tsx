import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { prisma } from '@/lib/prisma';
import { SITE_URL } from '@/lib/site';
import { ArrowRight, Check, Clock, DollarSign } from 'lucide-react';

export const dynamic = 'force-dynamic';

interface Props {
  params: Promise<{ slug: string }>;
}

// Shape of the structured content stored in Service.content (JSON).
interface ServiceSection {
  heading: string;
  body?: string;
  items?: string[];
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

async function getService(slug: string) {
  return prisma.service.findFirst({
    where: { slug, isActive: true },
  });
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = await getService(slug);

  if (!service) {
    return { title: 'Service Not Found' };
  }

  const title = service.metaTitle || `${service.title}`;
  const description =
    service.metaDescription || service.heroSubtitle || service.description;

  return {
    title,
    description,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title,
      description,
      type: 'website',
      url: `${SITE_URL}/services/${service.slug}`,
      images: service.image ? [service.image] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: service.image ? [service.image] : undefined,
    },
  };
}


// Shared layout constants — mirror the About page for visual consistency.
const SERIF = '"Instrument Serif", Georgia, serif';
const wrap: React.CSSProperties = {
  maxWidth: '1100px',
  margin: '0 auto',
  padding: '0 32px',
  position: 'relative',
  zIndex: 10,
  width: '100%',
};
const prose: React.CSSProperties = {
  maxWidth: '760px',
  margin: '0 auto',
};

// Render body text that may contain paragraph breaks.
function Paragraphs({ text }: { text: string }) {
  return (
    <>
      {text
        .split('\n')
        .map((p) => p.trim())
        .filter(Boolean)
        .map((p, i) => (
          <p
            key={i}
            style={{
              fontSize: '17px',
              lineHeight: 1.8,
              color: 'var(--ink-mute)',
              marginBottom: '20px',
            }}
          >
            {p}
          </p>
        ))}
    </>
  );
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = await getService(slug);

  if (!service) {
    notFound();
  }

  const content = (service.content as ServiceContent | null) || {};
  const { intro, sections = [], faqs = [] } = content;

  // FAQ structured data for rich results.
  const faqJsonLd =
    faqs.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqs.map((f) => ({
            '@type': 'Question',
            name: f.question,
            acceptedAnswer: { '@type': 'Answer', text: f.answer },
          })),
        }
      : null;

  const hasBody = Boolean(intro) || sections.length > 0;

  return (
    <main className='relative'>
      <Navigation />

      {/* Hero */}
      <section
        style={{
          position: 'relative',
          minHeight: '52vh',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          background: 'var(--bg)',
        }}
      >
        <div className='grain' />
        <div className='vignette' />
        <div style={{ ...wrap, padding: '120px 32px 80px', textAlign: 'center' }}>
          <nav
            style={{
              fontFamily: '"Geist Mono", monospace',
              fontSize: '12px',
              textTransform: 'uppercase',
              letterSpacing: '0.18em',
              color: 'var(--ink-dim)',
              marginBottom: '20px',
            }}
          >
            <Link href='/services' className='hover:text-[var(--gold)] transition-colors'>
              Services
            </Link>
            <span style={{ margin: '0 8px' }}>/</span>
            <span style={{ color: 'var(--ink-mute)' }}>{service.title}</span>
          </nav>

          {service.tags.length > 0 && (
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px',
                justifyContent: 'center',
                marginBottom: '24px',
              }}
            >
              {service.tags.slice(0, 4).map((tag) => (
                <span key={tag} className='chip text-[10px]'>
                  {tag}
                </span>
              ))}
            </div>
          )}

          <h1 className='display-lg' style={{ marginBottom: '24px', lineHeight: 1.1 }}>
            {service.title}
          </h1>
          {(service.heroSubtitle || service.description) && (
            <p
              style={{
                fontSize: '20px',
                lineHeight: 1.6,
                color: 'var(--ink-mute)',
                maxWidth: '640px',
                margin: '0 auto 32px',
              }}
            >
              {service.heroSubtitle || service.description}
            </p>
          )}

          {(service.investment || service.turnaround) && (
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '32px',
                justifyContent: 'center',
                marginBottom: '32px',
              }}
            >
              {service.investment && (
                <div className='flex items-center gap-2 text-[14px] text-[var(--ink-mute)]'>
                  <DollarSign className='w-4 h-4 text-[var(--gold)]' />
                  {service.investment}
                </div>
              )}
              {service.turnaround && (
                <div className='flex items-center gap-2 text-[14px] text-[var(--ink-mute)]'>
                  <Clock className='w-4 h-4 text-[var(--gold)]' />
                  {service.turnaround}
                </div>
              )}
            </div>
          )}

          <Link href='/contact' className='btn-gold group'>
            Get a Custom Quote
            <ArrowRight className='w-4 h-4 transition-transform duration-300 group-hover:translate-x-1' />
          </Link>
        </div>
      </section>

      {/* Body */}
      {hasBody && (
        <section
          style={{
            position: 'relative',
            padding: '100px 0',
            background: 'var(--bg-2)',
            overflow: 'hidden',
          }}
        >
          <div className='grain' />
          <div style={wrap}>
            <div style={prose}>
              {intro && (
                <div style={{ marginBottom: '48px' }}>
                  <Paragraphs text={intro} />
                </div>
              )}

              {sections.map((section, i) => (
                <div key={i} style={{ marginBottom: '48px' }}>
                  <h2
                    style={{
                      fontFamily: SERIF,
                      fontSize: 'clamp(28px, 3.5vw, 40px)',
                      lineHeight: 1.15,
                      marginBottom: '20px',
                      color: 'var(--ink)',
                    }}
                  >
                    {section.heading}
                  </h2>
                  {section.body && <Paragraphs text={section.body} />}
                  {section.items && section.items.length > 0 && (
                    <ul style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                      {section.items.map((item, j) => (
                        <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                          <Check className='w-5 h-5 text-[var(--gold)] flex-shrink-0' style={{ marginTop: '4px' }} />
                          <span style={{ fontSize: '17px', lineHeight: 1.7, color: 'var(--ink-mute)' }}>
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Features / What's included */}
      {service.features.length > 0 && (
        <section
          style={{
            position: 'relative',
            padding: '100px 0',
            background: 'var(--bg)',
            overflow: 'hidden',
          }}
        >
          <div style={wrap}>
            <div className='label label-with-line' style={{ marginBottom: '48px' }}>
              What&apos;s Included
            </div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
                gap: '20px',
              }}
            >
              {service.features.map((feature) => (
                <div
                  key={feature}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                    padding: '22px 24px',
                    borderRadius: '12px',
                    border: '1px solid var(--border)',
                    background: 'var(--surface)',
                  }}
                >
                  <Check className='w-5 h-5 text-[var(--gold)] flex-shrink-0' />
                  <span style={{ fontSize: '15px', color: 'var(--ink)' }}>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQs */}
      {faqs.length > 0 && (
        <section
          style={{
            position: 'relative',
            padding: '100px 0',
            background: 'var(--bg-2)',
            overflow: 'hidden',
          }}
        >
          <div className='grain' />
          <div style={wrap}>
            <div
              className='label label-with-line'
              style={{ marginBottom: '48px' }}
            >
              Frequently Asked Questions
            </div>
            <div style={{ ...prose, display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {faqs.map((faq, i) => (
                <details key={i} className='service-faq'>
                  <summary>{faq.question}</summary>
                  <div className='service-faq-body'>{faq.answer}</div>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section
        style={{
          position: 'relative',
          padding: '100px 0',
          background: 'var(--bg)',
          overflow: 'hidden',
        }}
      >
        <div className='grain' />
        <div style={{ ...wrap, textAlign: 'center' }}>
          <div className='label' style={{ justifyContent: 'center', marginBottom: '16px' }}>
            Let&apos;s Talk
          </div>
          <h2
            style={{
              fontFamily: SERIF,
              fontSize: 'clamp(36px, 5vw, 56px)',
              lineHeight: 1.05,
              marginBottom: '20px',
              color: 'var(--ink)',
            }}
          >
            Ready to start your{' '}
            <span className='italic' style={{ color: 'var(--gold)' }}>
              project
            </span>
            ?
          </h2>
          <p
            style={{
              fontSize: '18px',
              lineHeight: 1.6,
              color: 'var(--ink-mute)',
              maxWidth: '520px',
              margin: '0 auto 32px',
            }}
          >
            Tell us what you have in mind and we&apos;ll come back with a tailored
            plan and quote within 24 hours.
          </p>
          <Link href='/contact' className='btn-gold group'>
            Schedule a Call
            <ArrowRight className='w-4 h-4 transition-transform duration-300 group-hover:translate-x-1' />
          </Link>
        </div>
      </section>

      <Footer />

      {faqJsonLd && (
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
    </main>
  );
}
