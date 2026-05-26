'use client';

import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { ClientScripts } from '@/components/ClientScripts';
import { HomeScripts } from '@/components/HomeScripts';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <ClientScripts />
      <HomeScripts />
      <Navigation />

      {/* Hero Section */}
      <section className="hero grain" id="hero" style={{
        position: 'relative',
        height: '100vh',
        minHeight: '780px',
        overflow: 'hidden',
        background: '#050505',
      }}>
        <div className="hero-bg" style={{
          position: 'absolute',
          inset: 0,
          display: 'grid',
          gridTemplateColumns: 'repeat(6, 1fr)',
        }}>
          {[...Array(6)].map((_, i) => (
            <div key={i} className="slab" style={{
              position: 'relative',
              overflow: 'hidden',
              transform: 'translateY(100%)',
              animation: `slab-in 1.4s var(--ease-out) forwards`,
              animationDelay: `${0.05 + i * 0.1}s`,
            }}>
              <div style={{
                content: '',
                position: 'absolute',
                inset: 0,
                backgroundImage: i === 0 || i === 2 || i === 4
                  ? 'url(/assets/film-production-studio.png)'
                  : i === 1
                    ? 'url(/assets/professional-camera-rig.png)'
                    : i === 3
                      ? 'url(/assets/movie-production-clapperboard.png)'
                      : 'url(/assets/film-equipment-director-chair.png)',
                backgroundSize: 'cover',
                backgroundPosition: `${i * 20}% center`,
                filter: 'saturate(.95) contrast(1.05) brightness(0.65)',
              }} />
            </div>
          ))}
        </div>

        <div className="hero-ambient" style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1,
          pointerEvents: 'none',
          fontFamily: '"Instrument Serif", serif',
          color: 'rgba(232,197,71,0.035)',
          fontSize: '60vw',
          lineHeight: 0.8,
          overflow: 'hidden',
          display: 'grid',
          placeItems: 'center',
          letterSpacing: '-0.05em',
          userSelect: 'none',
        }}>
          <span style={{ fontStyle: 'italic' }}>F</span>
        </div>

        <div className="hero-vignette" style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at 50% 40%, transparent 0%, rgba(5,5,5,0.6) 70%, #050505 100%), linear-gradient(180deg, rgba(0,0,0,0.4) 0%, transparent 35%, rgba(0,0,0,0.8) 100%)',
          zIndex: 4,
          pointerEvents: 'none',
        }} />

        <div className="shutter" style={{
          position: 'absolute',
          inset: 0,
          zIndex: 20,
          display: 'grid',
          gridTemplateRows: '1fr 1fr',
          pointerEvents: 'none',
        }}>
          <div className="top" style={{ background: '#000', animation: 'shutter-top 1.2s .2s var(--ease-out) forwards' }} />
          <div className="bot" style={{ background: '#000', animation: 'shutter-bot 1.2s .2s var(--ease-out) forwards' }} />
        </div>

        <div className="hero-content" style={{
          position: 'absolute',
          inset: 0,
          zIndex: 5,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '120px 40px 40px',
        }}>
          <div className="hero-top" style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: '20px',
            fontFamily: '"Geist Mono", monospace',
            fontSize: '11px',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--ink-mute)',
          }}>
            <div className="tag-l" style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
              <span className="dot" style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: 'var(--red)',
                boxShadow: '0 0 12px var(--red)',
                animation: 'blink 1.4s infinite',
              }} />
              <span>REC · 24.000 fps</span>
              <span>A-CAM 01</span>
              <span>ISO 800</span>
            </div>
            <div className="tag-r" style={{ textAlign: 'right' }}>
              <div>N 28°38'13" · E 77°17'02"</div>
              <div style={{ color: 'var(--gold)', marginTop: '4px' }} className="tc">00:00:00:00</div>
            </div>
          </div>

          <div className="hero-center wrap-wide" style={{ padding: '0 40px', maxWidth: '1200px', margin: '0 auto' }}>
            <div className="eyebrow-line">A Video Production House · Est. 2015 — Delhi</div>
            <h1 className="hero-title" style={{
              fontFamily: '"Instrument Serif", serif',
              fontSize: 'clamp(48px, 9vw, 140px)',
              lineHeight: 0.95,
              letterSpacing: '-0.03em',
              color: 'var(--ink)',
              overflow: 'hidden',
              marginTop: '28px',
            }}>
              <span className="line l1" style={{ overflow: 'hidden', display: 'block' }}>
                <span className="word" style={{ display: 'inline-block', transform: 'translateY(110%)', animation: 'word-up 1.2s 1.3s var(--ease-out) forwards' }}>Framing</span>
                &nbsp;
                <span className="word" style={{ display: 'inline-block', transform: 'translateY(110%)', animation: 'word-up 1.2s 1.4s var(--ease-out) forwards' }}>The</span>
              </span>
              <span className="line l2" style={{ overflow: 'hidden', display: 'block' }}>
                <span className="word" style={{ display: 'inline-block', transform: 'translateY(110%)', animation: 'word-up 1.2s 1.55s var(--ease-out) forwards' }}>Future,</span>
                &nbsp;
                <span className="word" style={{ display: 'inline-block', transform: 'translateY(110%)', animation: 'word-up 1.2s 1.7s var(--ease-out) forwards', fontStyle: 'italic', color: 'var(--gold)' }}>frame.</span>
              </span>
            </h1>
            <p className="hero-sub" style={{ marginTop: '24px' }}>
              Delhi-based video production studio crafting cinematic commercials, corporate films and scroll-stopping content for brands that refuse to blend in.
            </p>
            <div className="hero-ctas" style={{ marginTop: '32px' }}>
              <Link className="btn btn-gold" href="/work" data-magnetic="">
                View our work <span className="btn-arrow"></span>
              </Link>
              <Link className="btn btn-ghost" href="/contact" data-magnetic="">
                Start a project
              </Link>
            </div>
          </div>

          <div className="hero-bottom wrap-wide" style={{ padding: '40px 40px 0' }}>
            <div className="stat-pills">
              <div><strong>500+</strong>Projects shipped</div>
              <div><strong>150+</strong>Clients</div>
              <div><strong>10+</strong>Years behind the lens</div>
            </div>
            <div></div>
            <div className="timecode">Scene 01 · Take 03 · Action</div>
          </div>
        </div>

        <div className="scroll-ind">
          <div>Scroll</div>
          <div className="bar"></div>
        </div>
      </section>

      <style jsx>{`
        @keyframes slab-in {
          to { transform: translateY(0); }
        }
        @keyframes shutter-top {
          to { transform: translateY(-100%); }
        }
        @keyframes shutter-bot {
          to { transform: translateY(100%); }
        }
        @keyframes word-up {
          to { transform: translateY(0); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        .eyebrow-line {
          display: flex;
          align-items: center;
          gap: 16px;
          font-family: "Geist Mono", monospace;
          font-size: 11px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: var(--gold);
          opacity: 0;
          animation: fade-up 1s 1.6s var(--ease-out) forwards;
        }
        .eyebrow-line::before {
          content: "";
          width: 40px;
          height: 1px;
          background: var(--gold);
        }
        .hero-sub {
          max-width: 56ch;
          font-size: 19px;
          line-height: 1.6;
          color: var(--ink-mute);
          opacity: 0;
          animation: fade-up 1s 2s var(--ease-out) forwards;
        }
        .hero-ctas {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          opacity: 0;
          animation: fade-up 1s 2.2s var(--ease-out) forwards;
          max-width: 100%;
        }
        .hero-bottom {
          display: grid;
          grid-template-columns: auto 1fr auto;
          align-items: end;
          gap: 40px;
          padding-top: 40px;
          border-top: 1px solid var(--border);
          opacity: 0;
          animation: fade-up 1s 2.4s var(--ease-out) forwards;
        }
        .stat-pills {
          display: flex;
          gap: 36px;
          font-family: "Geist Mono", monospace;
          font-size: 11px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--ink-mute);
        }
        .stat-pills strong {
          color: var(--ink);
          font-weight: 500;
          margin-right: 6px;
        }
        .timecode {
          font-family: "Geist Mono", monospace;
          font-size: 11px;
          letter-spacing: 0.15em;
          color: var(--ink-mute);
          display: flex;
          align-items: center;
          gap: 14px;
        }
        .timecode::before {
          content: "";
          width: 5px;
          height: 5px;
          background: var(--gold);
          display: inline-block;
        }
        .scroll-ind {
          position: absolute;
          left: 50%;
          bottom: 20px;
          transform: translateX(-50%);
          z-index: 6;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          font-family: "Geist Mono", monospace;
          font-size: 10px;
          letter-spacing: 0.25em;
          color: var(--ink-mute);
          opacity: 0;
          animation: fade-up 1s 2.6s var(--ease-out) forwards;
        }
        .scroll-ind .bar {
          width: 1px;
          height: 40px;
          background: linear-gradient(180deg, transparent, var(--gold));
          position: relative;
          overflow: hidden;
        }
        .scroll-ind .bar::after {
          content: "";
          position: absolute;
          top: -40px;
          left: 0;
          right: 0;
          height: 40px;
          background: linear-gradient(180deg, transparent, #fff);
          animation: scroll-drip 2s infinite;
        }
        @keyframes scroll-drip {
          to { transform: translateY(80px); }
        }
        @keyframes fade-up {
          to { opacity: 1; }
        }
      `}</style>

      {/* Services Ticker */}
      <section className="ticker-bar">
        <div className="marquee">
          <div className="marquee-track">
            <span className="marquee-item">Branded Commercials <span className="diamond"></span></span>
            <span className="marquee-item outline">Corporate Films <span className="diamond"></span></span>
            <span className="marquee-item">Photography <span className="diamond"></span></span>
            <span className="marquee-item outline">Testimonials <span className="diamond"></span></span>
            <span className="marquee-item">Educational Videos <span className="diamond"></span></span>
            <span className="marquee-item outline">Animation <span className="diamond"></span></span>
            <span className="marquee-item">Product Demos <span className="diamond"></span></span>
            <span className="marquee-item outline">Social Shorts <span className="diamond"></span></span>
            <span className="marquee-item">AI Video <span className="diamond"></span></span>
          </div>
          <div className="marquee-track" aria-hidden="true">
            <span className="marquee-item">Branded Commercials <span className="diamond"></span></span>
            <span className="marquee-item outline">Corporate Films <span className="diamond"></span></span>
            <span className="marquee-item">Photography <span className="diamond"></span></span>
            <span className="marquee-item outline">Testimonials <span className="diamond"></span></span>
            <span className="marquee-item">Educational Videos <span className="diamond"></span></span>
            <span className="marquee-item outline">Animation <span className="diamond"></span></span>
            <span className="marquee-item">Product Demos <span className="diamond"></span></span>
            <span className="marquee-item outline">Social Shorts <span className="diamond"></span></span>
            <span className="marquee-item">AI Video <span className="diamond"></span></span>
          </div>
        </div>
      </section>

      {/* Showreel */}
      <section className="showreel">
        <div className="wrap">
          <div className="reveal showreel-frame grain">
            <span className="showreel-corner tl">·House Reel / 2026</span>
            <span className="showreel-corner tr">02:14</span>
            <span className="showreel-corner bl">TNF—MEDIA</span>
            <span className="showreel-corner br">A-CAM · B-CAM · 4K</span>
            <div className="showreel-play">
              <button className="play-btn" aria-label="Play showreel">
                <span className="play-btn-ring"></span>
              </button>
            </div>
          </div>
          <div className="showreel-caption reveal delay-1">
            <strong>Our House Reel — 2026</strong>
            <span>Runtime 02:14 · Dir. Siddharth Kashyap · DOP Vipin Aggarwal</span>
          </div>
        </div>
      </section>

      {/* Works / Portfolio */}
      <section className="section-pad" id="works">
        <div className="wrap-wide">
          <div className="works-head reveal">
            <div>
              <span className="label">Portfolio & Projects</span>
              <h2 className="display display-lg" style={{ marginTop: '20px' }}>Our <span className="italic">works</span>.</h2>
            </div>
            <div className="filters">
              <button className="filter-chip active">All</button>
              <button className="filter-chip">Commercial</button>
              <button className="filter-chip">Corporate</button>
              <button className="filter-chip">Music Video</button>
              <button className="filter-chip">Social</button>
              <button className="filter-chip">Animation</button>
            </div>
          </div>

          <div className="bento">
            <article className="work w-6 reveal">
              <div className="cover cover-1"></div>
              <span className="work-index">001</span>
              <span className="work-cat">Music Video</span>
              <div className="work-meta">
                <div>
                  <div className="work-client">Jatinn Singh Rajput</div>
                  <div className="work-title">Tu Rahe Na Rahe</div>
                </div>
                <button className="work-watch"></button>
              </div>
            </article>
            <article className="work w-3 reveal delay-1">
              <div className="cover cover-2"></div>
              <span className="work-index">002</span>
              <span className="work-cat">Music</span>
              <div className="work-meta">
                <div>
                  <div className="work-client">Original release</div>
                  <div className="work-title" style={{ fontSize: '20px' }}>Aaj Dil Udaas</div>
                </div>
              </div>
            </article>
            <article className="work w-3 reveal delay-2">
              <div className="cover cover-3"></div>
              <span className="work-index">003</span>
              <span className="work-cat">Commercial</span>
              <div className="work-meta">
                <div>
                  <div className="work-client">lendingplate</div>
                  <div className="work-title" style={{ fontSize: '20px' }}>Vacations</div>
                </div>
              </div>
            </article>

            <article className="work w-4 reveal">
              <div className="cover cover-4"></div>
              <span className="work-index">004</span>
              <span className="work-cat">Commercial</span>
              <div className="work-meta">
                <div>
                  <div className="work-client">lendingplate</div>
                  <div className="work-title">Unlock Dreams — Raksha Bandhan</div>
                </div>
                <button className="work-watch"></button>
              </div>
            </article>
            <article className="work w-4 reveal delay-1">
              <div className="cover cover-5"></div>
              <span className="work-index">005</span>
              <span className="work-cat">Commercial</span>
              <div className="work-meta">
                <div>
                  <div className="work-client">lendingplate · Diwali</div>
                  <div className="work-title">Khushiya Bina Rukawat</div>
                </div>
                <button className="work-watch"></button>
              </div>
            </article>
            <article className="work w-4 reveal delay-2">
              <div className="cover cover-6"></div>
              <span className="work-index">006</span>
              <span className="work-cat">Explainer</span>
              <div className="work-meta">
                <div>
                  <div className="work-client">lendingplate</div>
                  <div className="work-title">Improve Your CIBIL</div>
                </div>
                <button className="work-watch"></button>
              </div>
            </article>

            <article className="work w-8 reveal">
              <div className="cover cover-7"></div>
              <span className="work-index">007</span>
              <span className="work-cat">Commercial</span>
              <div className="work-meta">
                <div>
                  <div className="work-client">Tastes2Plate — Food Delivery</div>
                  <div className="work-title">Tastes, delivered. Intercity.</div>
                </div>
                <button className="work-watch"></button>
              </div>
            </article>
            <article className="work w-4 reveal delay-1">
              <div className="cover cover-8"></div>
              <span className="work-index">008</span>
              <span className="work-cat">Commercial</span>
              <div className="work-meta">
                <div>
                  <div className="work-client">lendingplate</div>
                  <div className="work-title">Medical Emergency</div>
                </div>
                <button className="work-watch"></button>
              </div>
            </article>
          </div>

          <div className="reveal" style={{ marginTop: '48px', textAlign: 'center' }}>
            <Link className="btn btn-ghost" href="/work" data-magnetic="">
              Browse all 120 projects <span className="btn-arrow"></span>
            </Link>
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="section-pad" style={{ background: '#080808', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="wrap">
          <div className="about-teaser">
            <div className="ph ph-4 reveal" style={{ aspectRatio: '4/5', backgroundImage: 'url(/assets/film-equipment-director-chair.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <span className="ph-tag">BTS · 2025</span>
              <span className="ph-label">On set · TNF Studio</span>
            </div>
            <div className="reveal delay-1">
              <span className="label">About the studio</span>
              <h2 className="display display-lg" style={{ marginTop: '24px' }}>We're <span className="italic">The Next Frame</span>.</h2>
              <p style={{ marginTop: '28px', fontSize: '18px', lineHeight: 1.6 }}>A bold, new-age video production and branding agency obsessed with storytelling. Our team blends creativity and strategy to turn every idea into a scroll-stopping visual experience.</p>
              <p style={{ marginTop: '16px', fontSize: '15px' }}>From cinematic commercials and corporate films to viral reels and high-impact social content — we live and breathe content that performs.</p>
              <div style={{ marginTop: '40px' }}>
                <Link className="btn btn-ghost" href="/about" data-magnetic="">
                  More about us <span className="btn-arrow"></span>
                </Link>
              </div>
            </div>
          </div>

          <div className="stats-row reveal">
            <div className="stat">
              <div className="num"><span data-count="500">0</span><sup>+</sup></div>
              <div className="lab">Projects Shipped</div>
            </div>
            <div className="stat">
              <div className="num"><span data-count="150">0</span><sup>+</sup></div>
              <div className="lab">Clients Served</div>
            </div>
            <div className="stat">
              <div className="num"><span data-count="10">0</span><sup>+</sup></div>
              <div className="lab">Years of Craft</div>
            </div>
            <div className="stat">
              <div className="num"><span data-count="25">0</span></div>
              <div className="lab">Creative Awards</div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="clients">
        <div className="wrap-wide">
          <div className="clients-head reveal">
            <div>
              <span className="label">Partners in Frames</span>
              <h3 className="serif" style={{ fontSize: '44px', marginTop: '16px' }}>Brands we've shot for.</h3>
            </div>
            <div className="mono" style={{ fontSize: '11px', letterSpacing: '.2em', color: 'var(--ink-mute)', textTransform: 'uppercase' }}>
              — Scroll to reel ↓
            </div>
          </div>
        </div>
        <div className="marquee" style={{ '--speed': '60s' } as React.CSSProperties}>
          <div className="clients-track marquee-track">
            <span className="client-logo">lendingplate<span className="mono-tag">Fintech · 14 films</span></span>
            <span className="client-logo">Tastes2Plate<span className="mono-tag">F&B · 6 films</span></span>
            <span className="client-logo">Bootes Impex<span className="mono-tag">Industrial · 4 films</span></span>
            <span className="client-logo">TrueBalance<span className="mono-tag">Fintech · 3 films</span></span>
            <span className="client-logo">Ecom Express<span className="mono-tag">Logistics · 5 films</span></span>
            <span className="client-logo">Urban Company<span className="mono-tag">Services · 8 films</span></span>
            <span className="client-logo">WinZO<span className="mono-tag">Gaming · 11 reels</span></span>
            <span className="client-logo">Farmley<span className="mono-tag">FMCG · 7 films</span></span>
          </div>
          <div className="clients-track marquee-track" aria-hidden="true">
            <span className="client-logo">lendingplate<span className="mono-tag">Fintech · 14 films</span></span>
            <span className="client-logo">Tastes2Plate<span className="mono-tag">F&B · 6 films</span></span>
            <span className="client-logo">Bootes Impex<span className="mono-tag">Industrial · 4 films</span></span>
            <span className="client-logo">TrueBalance<span className="mono-tag">Fintech · 3 films</span></span>
            <span className="client-logo">Ecom Express<span className="mono-tag">Logistics · 5 films</span></span>
            <span className="client-logo">Urban Company<span className="mono-tag">Services · 8 films</span></span>
            <span className="client-logo">WinZO<span className="mono-tag">Gaming · 11 reels</span></span>
            <span className="client-logo">Farmley<span className="mono-tag">FMCG · 7 films</span></span>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-pad">
        <div className="wrap">
          <div className="testi-head reveal">
            <div>
              <span className="label">What Clients Say</span>
              <h2 className="display display-lg" style={{ marginTop: '20px' }}>Success <span className="italic">stories</span>.</h2>
            </div>
            <div className="mono" style={{ fontSize: '11px', letterSpacing: '.18em', color: 'var(--ink-mute)', textTransform: 'uppercase' }}>
              <span id="t-cur">01</span> / <span id="t-total">08</span>
            </div>
          </div>

          <div className="testi-stage reveal delay-1">
            <div>
              <blockquote className="testi-quote" id="t-quote">
                Their storytelling and visual execution helped us simplify complex financial concepts into relatable content. Fast, reliable, and always on-brand.
              </blockquote>
              <div className="testi-attr">
                <div className="testi-client" id="t-client">Lendingplate</div>
                <div className="testi-person" id="t-person">Marketing Team</div>
                <div className="testi-role" id="t-role">Fintech · Delhi NCR</div>
              </div>
              <div className="testi-nav">
                <button id="t-prev" aria-label="Previous">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M8.5 2.5L4 7l4.5 4.5" stroke="currentColor" strokeWidth="1.2"/></svg>
                </button>
                <button id="t-next" aria-label="Next">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M5.5 2.5L10 7l-4.5 4.5" stroke="currentColor" strokeWidth="1.2"/></svg>
                </button>
              </div>
            </div>
            <div className="testi-list" id="t-list"></div>
          </div>
        </div>
      </section>

      {/* Journal / Blog */}
      <section className="section-pad" id="journal" style={{ background: '#080808', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="wrap">
          <div className="works-head reveal">
            <div>
              <span className="label">Fresh Frames</span>
              <h2 className="display display-lg" style={{ marginTop: '20px' }}>Creative <span className="italic">insights</span>.</h2>
            </div>
            <Link className="btn btn-ghost" href="/journal" data-magnetic="">
              Read all articles <span className="btn-arrow"></span>
            </Link>
          </div>

          <div className="blog-grid">
            <article className="post reveal">
              <div className="ph ph-16">
                <span className="ph-tag">Issue 014</span>
                <span className="ph-label">AI × Cinematic</span>
              </div>
              <div className="post-meta"><span>Apr 16, 2026</span><span>·</span><span>Siddharth Kashyap</span><span>·</span><span>6 min read</span></div>
              <h3 className="post-title">AI Video Production: How It Helps Create High-Converting Ad Campaigns</h3>
              <p className="post-excerpt">Generative tools are rewiring how we shoot, storyboard and iterate on short-form. Here's what's working on real briefs.</p>
              <Link href="/journal/ai-video-production" className="post-read">
                Read essay <span className="btn-arrow"></span>
              </Link>
            </article>
            <article className="post reveal delay-1">
              <div className="ph ph-16">
                <span className="ph-tag">Issue 013</span>
                <span className="ph-label">City guide / Delhi</span>
              </div>
              <div className="post-meta"><span>Apr 2, 2026</span><span>·</span><span>TNF Desk</span><span>·</span><span>5 min read</span></div>
              <h3 className="post-title">Top Digital Video Content Creation Services in Delhi</h3>
              <p className="post-excerpt">A working list — who to brief, who to avoid, and how to spot a film crew that actually ships.</p>
              <Link href="/journal/delhi-video-services" className="post-read">
                Read essay <span className="btn-arrow"></span>
              </Link>
            </article>
            <article className="post reveal delay-2">
              <div className="ph ph-16">
                <span className="ph-tag">Issue 012</span>
                <span className="ph-label">City guide / BLR</span>
              </div>
              <div className="post-meta"><span>Apr 2, 2026</span><span>·</span><span>TNF Desk</span><span>·</span><span>4 min read</span></div>
              <h3 className="post-title">Best Digital Video Content Creation Services in Bangalore</h3>
              <p className="post-excerpt">Bangalore's studio economy is shifting post-2024. We break down the new shape and the studios leading it.</p>
              <Link href="/journal/bangalore-video-services" className="post-read">
                Read essay <span className="btn-arrow"></span>
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta grain">
        <div className="cta-inner wrap">
          <span className="cta-phone reveal">Call direct · +91 9888 715 815</span>
          <h2 className="cta-title reveal delay-1">Let's create something <span className="italic">extraordinary.</span></h2>
          <p className="cta-sub reveal delay-2">Ready to tell your story? We're one conversation away from a shot list that'll make your competitors nervous.</p>
          <div className="cta-ctas reveal delay-3">
            <Link className="btn btn-gold" href="/contact" data-magnetic="">
              Start a project <span className="btn-arrow"></span>
            </Link>
            <Link className="btn btn-ghost" href="/contact" data-magnetic="">
              Schedule a call
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
