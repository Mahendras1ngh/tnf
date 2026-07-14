import { WHY_CHOOSE_US } from './landing-data';

export function WhyChooseUs() {
  return (
    <section className="section-pad" style={{ background: 'var(--bg)' }}>
      <div className="wrap">
        <div
          className="label reveal"
          style={{ justifyContent: 'center', marginBottom: '48px' }}
        >
          Why Choose Us
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_CHOOSE_US.map(({ icon: Icon, title, description }, i) => (
            <div
              key={title}
              className={`card-base reveal delay-${(i % 3) + 1}`}
              style={{ textAlign: 'center' }}
            >
              <span
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '14px',
                  border: '1px solid var(--border)',
                  background: 'var(--surface-2)',
                  display: 'inline-grid',
                  placeItems: 'center',
                  marginBottom: '20px',
                }}
              >
                <Icon className="w-6 h-6" style={{ color: 'var(--gold)' }} />
              </span>
              <h3
                style={{
                  fontSize: '18px',
                  fontWeight: 600,
                  color: 'var(--ink)',
                  marginBottom: '10px',
                }}
              >
                {title}
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--ink-mute)', margin: 0 }}>
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
