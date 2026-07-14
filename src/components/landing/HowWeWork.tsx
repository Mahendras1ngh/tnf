import { STEPS } from './landing-data';

export function HowWeWork() {
  return (
    <section className="section-pad" style={{ background: 'var(--bg)' }}>
      <div className="wrap">
        <div
          className="label reveal"
          style={{ justifyContent: 'center', marginBottom: '56px' }}
        >
          How We Work
        </div>

        <div className="relative">
          {/* connecting line (desktop) */}
          <div
            aria-hidden
            className="hidden lg:block"
            style={{
              position: 'absolute',
              top: '28px',
              left: '10%',
              right: '10%',
              height: '1px',
              background:
                'repeating-linear-gradient(90deg, var(--border-strong) 0 8px, transparent 8px 16px)',
            }}
          />
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
            {STEPS.map(({ title, description }, i) => (
              <div
                key={title}
                className={`reveal delay-${(i % 5) + 1}`}
                style={{ textAlign: 'center', position: 'relative' }}
              >
                <span
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '999px',
                    background: 'var(--gold)',
                    color: '#111',
                    display: 'inline-grid',
                    placeItems: 'center',
                    fontFamily: '"Geist Mono", monospace',
                    fontWeight: 600,
                    fontSize: '18px',
                    marginBottom: '18px',
                    position: 'relative',
                    zIndex: 2,
                  }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3
                  style={{
                    fontSize: '16px',
                    fontWeight: 600,
                    color: 'var(--ink)',
                    marginBottom: '8px',
                  }}
                >
                  {title}
                </h3>
                <p
                  style={{
                    fontSize: '13px',
                    color: 'var(--ink-mute)',
                    margin: '0 auto',
                    maxWidth: '200px',
                  }}
                >
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
