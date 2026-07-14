import { CLIENT_LOGOS } from './landing-data';

export function TrustBar() {
  return (
    <section style={{ background: 'var(--gold)' }}>
      <div className="wrap" style={{ padding: '28px 32px' }}>
        <p
          className="mono"
          style={{
            textAlign: 'center',
            fontSize: '11px',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: '#111',
            marginBottom: '18px',
            fontWeight: 600,
          }}
        >
          Trusted by 200+ Brands Worldwide
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {CLIENT_LOGOS.map((name) => (
            <span
              key={name}
              style={{
                fontFamily: '"Instrument Serif", Georgia, serif',
                fontSize: '24px',
                fontWeight: 600,
                color: '#111',
                opacity: 0.85,
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
