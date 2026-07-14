import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { CONTACT } from '@/lib/site';
import { BUSINESS_HOURS } from './landing-data';

const items = [
  {
    icon: Phone,
    label: 'Phone',
    value: CONTACT.phoneDisplay,
    href: `tel:${CONTACT.phoneE164}`,
  },
  {
    icon: Mail,
    label: 'Email',
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
  },
  {
    icon: MapPin,
    label: 'Address',
    value: `${CONTACT.address.line1}, ${CONTACT.address.line2}`,
    href: undefined,
  },
  {
    icon: Clock,
    label: 'Business Hours',
    value: BUSINESS_HOURS,
    href: undefined,
  },
];

export function ContactStrip() {
  return (
    <section
      className="section-pad-sm"
      style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)' }}
    >
      <div className="wrap">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, label, value, href }) => {
            const body = (
              <>
                <span
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    border: '1px solid var(--border)',
                    background: 'var(--surface-2)',
                    display: 'grid',
                    placeItems: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Icon className="w-5 h-5" style={{ color: 'var(--gold)' }} />
                </span>
                <span>
                  <span
                    className="mono"
                    style={{
                      display: 'block',
                      fontSize: '11px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.14em',
                      color: 'var(--ink-dim)',
                      marginBottom: '4px',
                    }}
                  >
                    {label}
                  </span>
                  <span style={{ color: 'var(--ink)', fontSize: '14px', fontWeight: 500 }}>
                    {value}
                  </span>
                </span>
              </>
            );

            const wrapStyle: React.CSSProperties = {
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
            };

            return href ? (
              <a key={label} href={href} className="reveal" style={wrapStyle}>
                {body}
              </a>
            ) : (
              <div key={label} className="reveal" style={wrapStyle}>
                {body}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
