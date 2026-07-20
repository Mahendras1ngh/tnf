'use client';

import { useState } from 'react';
import { Play, Quote, Star, X } from 'lucide-react';
import { CASE_STUDY, TESTIMONIALS } from './landing-data';
import { extractYouTubeId, extractVimeoId } from '@/lib/utils';

function getEmbedUrl(url: string): string | null {
  const youtubeId = extractYouTubeId(url);
  if (youtubeId) {
    return `https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`;
  }
  const vimeoId = extractVimeoId(url);
  if (vimeoId) {
    return `https://player.vimeo.com/video/${vimeoId}?autoplay=1`;
  }
  return null;
}

export function CaseStudy() {
  const [isPlaying, setIsPlaying] = useState(false);
  const embedUrl = CASE_STUDY.videoUrl ? getEmbedUrl(CASE_STUDY.videoUrl) : null;

  return (
    <section className="section-pad" style={{ background: 'var(--bg-2)' }}>
      <div className="wrap">
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Case study */}
          <div className="card-base reveal-l">
            <div className="label" style={{ marginBottom: '24px' }}>
              Case Study
            </div>
            <div className="grid sm:grid-cols-2 gap-6 items-center">
              <button
                type="button"
                onClick={() => embedUrl && setIsPlaying(true)}
                aria-label={embedUrl ? `Play ${CASE_STUDY.title} video` : undefined}
                disabled={!embedUrl}
                style={{
                  position: 'relative',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  aspectRatio: '4 / 3',
                  border: 'none',
                  padding: 0,
                  width: '100%',
                  cursor: embedUrl ? 'pointer' : 'default',
                  background: 'transparent',
                }}
              >
                <span
                  aria-hidden
                  style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: `url(${CASE_STUDY.thumbnail})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'brightness(0.7)',
                  }}
                />
                <span
                  style={{
                    position: 'absolute',
                    inset: 0,
                    display: 'grid',
                    placeItems: 'center',
                  }}
                >
                  <span
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '999px',
                      background: 'rgba(255,255,255,0.9)',
                      display: 'grid',
                      placeItems: 'center',
                    }}
                  >
                    <Play className="w-5 h-5" style={{ color: '#111', marginLeft: '2px' }} />
                  </span>
                </span>
              </button>

              <div>
                <h3
                  style={{
                    fontSize: '20px',
                    fontWeight: 600,
                    color: 'var(--ink)',
                    marginBottom: '14px',
                  }}
                >
                  {CASE_STUDY.title}
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {CASE_STUDY.points.map((p) => (
                    <li
                      key={p.label}
                      style={{
                        display: 'flex',
                        gap: '8px',
                        fontSize: '13px',
                        marginBottom: '8px',
                      }}
                    >
                      <span style={{ color: 'var(--ink)', fontWeight: 600, minWidth: '68px' }}>
                        {p.label}:
                      </span>
                      <span style={{ color: 'var(--ink-mute)' }}>{p.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-6">
              {CASE_STUDY.stats.map((s) => (
                <div key={s.label} style={{ textAlign: 'center' }}>
                  <div
                    className="serif"
                    style={{ fontSize: '30px', color: 'var(--gold)', lineHeight: 1 }}
                  >
                    {s.value}
                  </div>
                  <div style={{ fontSize: '12px', color: 'var(--ink-mute)', marginTop: '4px' }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials */}
          <div className="card-base reveal-r" style={{ display: 'flex', flexDirection: 'column' }}>
            <div className="label" style={{ marginBottom: '24px' }}>
              Client Reviews
            </div>
            <Quote
              className="w-9 h-9"
              style={{ color: 'var(--gold)', marginBottom: '16px' }}
            />
            <div className="space-y-6">
              {TESTIMONIALS.map((t) => (
                <div
                  key={t.name}
                  style={{
                    borderBottom: '1px solid var(--border)',
                    paddingBottom: '20px',
                  }}
                >
                  <div className="flex items-center gap-4 mb-3">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      width={48}
                      height={48}
                      style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '999px',
                        objectFit: 'cover',
                        border: '1px solid var(--border)',
                      }}
                    />
                    <div>
                      <div style={{ color: 'var(--ink)', fontWeight: 600 }}>
                        {t.name}
                      </div>
                      <div style={{ color: 'var(--ink-mute)', fontSize: '13px' }}>
                        {t.role}
                      </div>
                    </div>
                    <div className="flex gap-1 ml-auto">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4"
                          style={{ color: 'var(--gold)', fill: 'var(--gold)' }}
                        />
                      ))}
                    </div>
                  </div>
                  <p style={{ color: 'var(--ink)', fontSize: '15px', lineHeight: 1.6, margin: 0 }}>
                    “{t.quote}”
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Video lightbox */}
      {isPlaying && embedUrl && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${CASE_STUDY.title} video`}
          onClick={() => setIsPlaying(false)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1000,
            background: 'rgba(0,0,0,0.85)',
            display: 'grid',
            placeItems: 'center',
            padding: '24px',
          }}
        >
          <button
            type="button"
            aria-label="Close video"
            onClick={() => setIsPlaying(false)}
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              width: '44px',
              height: '44px',
              borderRadius: '999px',
              border: '1px solid rgba(255,255,255,0.3)',
              background: 'rgba(0,0,0,0.4)',
              color: '#fff',
              display: 'grid',
              placeItems: 'center',
              cursor: 'pointer',
            }}
          >
            <X className="w-5 h-5" />
          </button>
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: 'min(960px, 100%)',
              aspectRatio: '16 / 9',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
            }}
          >
            <iframe
              src={embedUrl}
              title={`${CASE_STUDY.title} video`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ width: '100%', height: '100%', border: 'none' }}
            />
          </div>
        </div>
      )}
    </section>
  );
}
