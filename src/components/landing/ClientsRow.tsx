import { CLIENT_LOGOS } from './landing-data';

export function ClientsRow() {
  return (
    <section style={{ background: 'var(--bg)', padding: '56px 0' }}>
      <div className="wrap">
        <div
          className="label reveal"
          style={{ justifyContent: 'center', marginBottom: '32px' }}
        >
          Our Clients
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {CLIENT_LOGOS.map((name) => (
            <span
              key={name}
              className="reveal"
              style={{
                fontFamily: '"Instrument Serif", Georgia, serif',
                fontSize: '24px',
                fontWeight: 600,
                color: 'var(--ink)',
                opacity: 0.5,
                letterSpacing: '-0.01em',
              }}
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
