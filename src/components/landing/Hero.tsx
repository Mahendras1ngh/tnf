import { Check, Phone, MessageCircle } from 'lucide-react';
import { CONTACT, WHATSAPP_DEFAULT_MESSAGE } from '@/lib/site';
import { HERO_CHECKS } from './landing-data';
import { ConsultationForm } from './ConsultationForm';

const whatsappHref = `https://wa.me/${CONTACT.whatsappE164}?text=${encodeURIComponent(
  WHATSAPP_DEFAULT_MESSAGE
)}`;

export function Hero() {
  return (
    <section
      className="grain"
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: 'var(--bg)',
      }}
    >
      {/* Background image + overlays */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/assets/professional-camera-rig.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center right',
          filter: 'brightness(0.4) saturate(0.9)',
        }}
      />
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(90deg, var(--bg) 0%, color-mix(in srgb, var(--bg) 78%, transparent) 45%, color-mix(in srgb, var(--bg) 30%, transparent) 100%)',
        }}
      />

      <div className="wrap" style={{ position: 'relative', zIndex: 3 }}>
        <div className="grid lg:grid-cols-2 gap-12 items-center py-20 lg:py-28">
          {/* Left — copy */}
          <div className="reveal">
            <div className="label" style={{ marginBottom: '24px' }}>
              Corporate Video Production
            </div>
            <h1
              className="display display-md"
              style={{ marginBottom: '24px' }}
            >
              Powerful Videos.
              <br />
              <span className="italic">Stronger Brand Impact.</span>
            </h1>
            <p
              className="lede"
              style={{ marginBottom: '32px', color: 'var(--ink-mute)' }}
            >
              We help businesses communicate their story, build trust and drive
              results through high-quality corporate videos.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8" style={{ maxWidth: '460px' }}>
              {HERO_CHECKS.map((c) => (
                <div
                  key={c}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                  }}
                >
                  <span
                    style={{
                      width: '22px',
                      height: '22px',
                      borderRadius: '999px',
                      background: 'var(--gold)',
                      display: 'grid',
                      placeItems: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Check className="w-3.5 h-3.5" style={{ color: '#111' }} />
                  </span>
                  <span style={{ fontSize: '14px', color: 'var(--ink)' }}>
                    {c}
                  </span>
                </div>
              ))}
            </div>

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

            <a
              href={`tel:${CONTACT.phoneE164}`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                marginTop: '24px',
                color: 'var(--ink)',
                fontWeight: 500,
              }}
            >
              <Phone className="w-4 h-4" style={{ color: 'var(--gold)' }} />
              {CONTACT.phoneDisplay}
            </a>
          </div>

          {/* Right — consultation form */}
          <div className="reveal-r" id="consultation" style={{ scrollMarginTop: '110px' }}>
            <ConsultationForm />
          </div>
        </div>
      </div>
    </section>
  );
}
