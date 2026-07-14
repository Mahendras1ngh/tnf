import { MessageCircle, ShieldCheck } from 'lucide-react';
import { CONTACT, WHATSAPP_DEFAULT_MESSAGE } from '@/lib/site';
import { CERTIFICATIONS } from './landing-data';

const whatsappHref = `https://wa.me/${CONTACT.whatsappE164}?text=${encodeURIComponent(
  WHATSAPP_DEFAULT_MESSAGE
)}`;

export function CertificationsCta() {
  return (
    <section className="section-pad" style={{ background: 'var(--bg)' }}>
      <div className="wrap">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Certifications */}
          <div className="reveal-l">
            <div className="label" style={{ marginBottom: '28px' }}>
              Certifications & Trust
            </div>
            <div className="grid grid-cols-2 gap-4">
              {CERTIFICATIONS.map((c) => (
                <div
                  key={c}
                  className="card-base"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '18px',
                  }}
                >
                  <ShieldCheck
                    className="w-5 h-5 flex-shrink-0"
                    style={{ color: 'var(--gold)' }}
                  />
                  <span style={{ fontSize: '13px', color: 'var(--ink)', fontWeight: 500 }}>
                    {c}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA card */}
          <div
            className="card-base reveal-r grain"
            style={{
              position: 'relative',
              overflow: 'hidden',
              background:
                'linear-gradient(135deg, color-mix(in srgb, var(--gold) 22%, var(--surface)) 0%, var(--surface) 60%)',
              borderColor: 'color-mix(in srgb, var(--gold) 40%, var(--border))',
              padding: '40px',
            }}
          >
            <div
              aria-hidden
              style={{
                position: 'absolute',
                right: '-40px',
                bottom: '-40px',
                width: '220px',
                height: '220px',
                backgroundImage: 'url(/assets/professional-camera-rig.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '999px',
                opacity: 0.25,
                filter: 'saturate(1.1)',
              }}
            />
            <div style={{ position: 'relative', zIndex: 2, maxWidth: '420px' }}>
              <h2
                className="display display-md"
                style={{ marginBottom: '12px', fontSize: 'clamp(30px, 4vw, 48px)' }}
              >
                Ready to Tell Your Story?
              </h2>
              <p style={{ color: 'var(--ink-mute)', marginBottom: '28px' }}>
                Let&apos;s create something amazing together!
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#consultation" className="btn btn-gold">
                  Get Free Consultation
                  <span className="btn-arrow" />
                </a>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost"
                >
                  <MessageCircle className="w-4 h-4" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
