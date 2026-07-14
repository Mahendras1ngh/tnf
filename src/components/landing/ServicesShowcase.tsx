import { SERVICES } from './landing-data';

export function ServicesShowcase() {
  return (
    <section className="section-pad" style={{ background: 'var(--bg-2)' }}>
      <div className="wrap">
        <div className="grid lg:grid-cols-[320px_1fr] gap-12 items-start">
          {/* Intro */}
          <div className="reveal-l">
            <div className="label" style={{ marginBottom: '20px' }}>
              Our Services
            </div>
            <h2 className="display display-md" style={{ marginBottom: '20px' }}>
              Creative Videos.
              <br />
              <span className="italic">Impactful Results.</span>
            </h2>
            <p style={{ color: 'var(--ink-mute)', marginBottom: '28px' }}>
              Tailored video solutions for every business need.
            </p>
            <a href="#consultation" className="btn btn-gold">
              Explore Services
              <span className="btn-arrow" />
            </a>
          </div>

          {/* Horizontal scroll-snap cards */}
          <div
            className="reveal-r"
            style={{
              display: 'flex',
              gap: '20px',
              overflowX: 'auto',
              scrollSnapType: 'x mandatory',
              paddingBottom: '12px',
              scrollbarWidth: 'thin',
            }}
          >
            {SERVICES.map(({ title, description, image }) => (
              <article
                key={title}
                style={{
                  scrollSnapAlign: 'start',
                  flex: '0 0 240px',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  position: 'relative',
                  minHeight: '320px',
                  border: '1px solid var(--border)',
                  background: 'var(--surface)',
                }}
              >
                <div
                  aria-hidden
                  style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: `url(${image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
                <div
                  aria-hidden
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background:
                      'linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.55) 55%, rgba(0,0,0,0.92) 100%)',
                  }}
                />
                <div
                  style={{
                    position: 'relative',
                    zIndex: 2,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    padding: '20px',
                  }}
                >
                  <h3
                    style={{
                      color: '#fff',
                      fontSize: '18px',
                      fontWeight: 600,
                      marginBottom: '8px',
                    }}
                  >
                    {title}
                  </h3>
                  <p
                    style={{
                      color: 'rgba(255,255,255,0.8)',
                      fontSize: '13px',
                      margin: 0,
                    }}
                  >
                    {description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
