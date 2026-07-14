import { STATS } from './landing-data';

export function StatsBand() {
  return (
    <section style={{ background: 'var(--gold)' }}>
      <div className="wrap" style={{ padding: '48px 32px' }}>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {STATS.map(({ value, label }) => (
            <div key={label} style={{ textAlign: 'center' }}>
              <div
                className="serif"
                style={{
                  fontSize: 'clamp(34px, 4vw, 48px)',
                  color: '#111',
                  lineHeight: 1,
                }}
              >
                {value}
              </div>
              <div
                className="mono"
                style={{
                  fontSize: '12px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  color: '#111',
                  opacity: 0.8,
                  marginTop: '8px',
                }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
