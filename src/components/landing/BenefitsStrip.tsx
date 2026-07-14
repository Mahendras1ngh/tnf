import { BENEFITS } from './landing-data';

export function BenefitsStrip() {
  return (
    <section
      className="grain"
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/assets/film-production-studio.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.35)',
        }}
      />
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(90deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.55) 100%)',
        }}
      />
      <div
        className="wrap"
        style={{ position: 'relative', zIndex: 2, padding: '64px 32px' }}
      >
        <div className="label" style={{ marginBottom: '32px', color: 'var(--gold)' }}>
          Benefits You Get
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
          {BENEFITS.map(({ icon: Icon, title }, i) => (
            <div
              key={title}
              className={`reveal delay-${(i % 5) + 1}`}
              style={{ textAlign: 'center' }}
            >
              <span
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '999px',
                  border: '1px solid rgba(232,197,71,0.5)',
                  display: 'inline-grid',
                  placeItems: 'center',
                  marginBottom: '14px',
                }}
              >
                <Icon className="w-5 h-5" style={{ color: 'var(--gold)' }} />
              </span>
              <div style={{ color: '#fff', fontSize: '14px', fontWeight: 600 }}>
                {title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
