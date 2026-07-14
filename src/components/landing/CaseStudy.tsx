import { Play, Quote, Star } from 'lucide-react';
import { CASE_STUDY, TESTIMONIAL } from './landing-data';

export function CaseStudy() {
  return (
    <section className="section-pad" style={{ background: 'var(--bg-2)' }}>
      <div className="wrap">
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Case study */}
          <div className="card-base reveal-l">
            <div className="label" style={{ marginBottom: '24px' }}>
              Case Study
            </div>
            <div className="grid sm:grid-cols-2 gap-6 items-center">
              <div
                style={{
                  position: 'relative',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  aspectRatio: '4 / 3',
                }}
              >
                <div
                  aria-hidden
                  style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: `url(${CASE_STUDY.thumbnail})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'brightness(0.7)',
                  }}
                />
                <span
                  style={{
                    position: 'absolute',
                    inset: 0,
                    display: 'grid',
                    placeItems: 'center',
                  }}
                >
                  <span
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '999px',
                      background: 'rgba(255,255,255,0.9)',
                      display: 'grid',
                      placeItems: 'center',
                    }}
                  >
                    <Play className="w-5 h-5" style={{ color: '#111', marginLeft: '2px' }} />
                  </span>
                </span>
              </div>

              <div>
                <h3
                  style={{
                    fontSize: '20px',
                    fontWeight: 600,
                    color: 'var(--ink)',
                    marginBottom: '14px',
                  }}
                >
                  {CASE_STUDY.title}
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {CASE_STUDY.points.map((p) => (
                    <li
                      key={p.label}
                      style={{
                        display: 'flex',
                        gap: '8px',
                        fontSize: '13px',
                        marginBottom: '8px',
                      }}
                    >
                      <span style={{ color: 'var(--ink)', fontWeight: 600, minWidth: '68px' }}>
                        {p.label}:
                      </span>
                      <span style={{ color: 'var(--ink-mute)' }}>{p.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-6">
              {CASE_STUDY.stats.map((s) => (
                <div key={s.label} style={{ textAlign: 'center' }}>
                  <div
                    className="serif"
                    style={{ fontSize: '30px', color: 'var(--gold)', lineHeight: 1 }}
                  >
                    {s.value}
                  </div>
                  <div style={{ fontSize: '12px', color: 'var(--ink-mute)', marginTop: '4px' }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial */}
          <div className="card-base reveal-r" style={{ display: 'flex', flexDirection: 'column' }}>
            <div className="label" style={{ marginBottom: '24px' }}>
              Client Testimonial
            </div>
            <Quote
              className="w-9 h-9"
              style={{ color: 'var(--gold)', marginBottom: '16px' }}
            />
            <div className="flex items-center gap-4 mb-4">
              <img
                src={TESTIMONIAL.avatar}
                alt={TESTIMONIAL.name}
                width={56}
                height={56}
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '999px',
                  objectFit: 'cover',
                  border: '1px solid var(--border)',
                }}
              />
              <div>
                <div style={{ color: 'var(--ink)', fontWeight: 600 }}>
                  {TESTIMONIAL.name}
                </div>
                <div style={{ color: 'var(--ink-mute)', fontSize: '13px' }}>
                  {TESTIMONIAL.role}
                </div>
              </div>
            </div>
            <div className="flex gap-1 mb-4">
              {Array.from({ length: TESTIMONIAL.rating }).map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4"
                  style={{ color: 'var(--gold)', fill: 'var(--gold)' }}
                />
              ))}
            </div>
            <p style={{ color: 'var(--ink)', fontSize: '17px', lineHeight: 1.6, margin: 0 }}>
              “{TESTIMONIAL.quote}”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
