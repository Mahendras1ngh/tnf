'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Navigation() {
  const [isMegaOpen, setIsMegaOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className='nav'>
      <div className='wrap-wide nav-inner'>
        <Link className='logo' href='/'>
          <span className='logo-mark'>
            <span>TNF</span>
          </span>
          <div>The Next Frame</div>
        </Link>

        <div className='nav-links'>
          <Link href='/' className={pathname === '/' ? 'active' : ''}>
            Index
          </Link>
          <Link href='/work' className={pathname === '/work' ? 'active' : ''}>
            Work
          </Link>
          <Link href='/about' className={pathname === '/about' ? 'active' : ''}>
            About
          </Link>

          <div
            className={`has-mega ${isMegaOpen ? 'open' : ''}`}
            onMouseEnter={() => setIsMegaOpen(true)}
            onMouseLeave={() => setIsMegaOpen(false)}
          >
            <span className='mega-trigger'>
              Services <span className='chev'></span>
            </span>
            <div className='mega'>
              <div className='wrap-wide mega-grid'>
                <div className='mega-col'>
                  <h5>Film & Brand</h5>
                  <ul>
                    <li>
                      <Link
                        className='mega-link'
                        href='/services/branded-commercials'
                      >
                        <span className='ico'>B</span>
                        <span>
                          <span className='ml-title'>Branded Commercials</span>
                          <span className='ml-sub'>
                            TVC · Brand Films · DTC
                          </span>
                        </span>
                        <span className='ml-arrow'>→</span>
                      </Link>
                    </li>
                    <li>
                      <Link className='mega-link' href='/services#corporate'>
                        <span className='ico'>C</span>
                        <span>
                          <span className='ml-title'>Corporate Films</span>
                          <span className='ml-sub'>
                            Anthems · Manifesto · Culture
                          </span>
                        </span>
                        <span className='ml-arrow'>→</span>
                      </Link>
                    </li>
                    <li>
                      <Link className='mega-link' href='/services#testimonials'>
                        <span className='ico'>T</span>
                        <span>
                          <span className='ml-title'>Testimonials</span>
                          <span className='ml-sub'>
                            Customer · Founder · Case
                          </span>
                        </span>
                        <span className='ml-arrow'>→</span>
                      </Link>
                    </li>
                    <li>
                      <Link className='mega-link' href='/services#documentary'>
                        <span className='ico'>D</span>
                        <span>
                          <span className='ml-title'>Documentary</span>
                          <span className='ml-sub'>
                            Long-form · Series · Impact
                          </span>
                        </span>
                        <span className='ml-arrow'>→</span>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className='mega-col'>
                  <h5>Performance & Social</h5>
                  <ul>
                    <li>
                      <Link className='mega-link' href='/services#shorts'>
                        <span className='ico'>S</span>
                        <span>
                          <span className='ml-title'>Social Shorts</span>
                          <span className='ml-sub'>
                            Reels · TikTok · Shorts
                          </span>
                        </span>
                        <span className='ml-arrow'>→</span>
                      </Link>
                    </li>
                    <li>
                      <Link className='mega-link' href='/services#product'>
                        <span className='ico'>P</span>
                        <span>
                          <span className='ml-title'>Product Demos</span>
                          <span className='ml-sub'>
                            Hero shots · Tabletop · CGI
                          </span>
                        </span>
                        <span className='ml-arrow'>→</span>
                      </Link>
                    </li>
                    <li>
                      <Link className='mega-link' href='/services#educational'>
                        <span className='ico'>E</span>
                        <span>
                          <span className='ml-title'>Educational</span>
                          <span className='ml-sub'>
                            EdTech · Explainers · Course
                          </span>
                        </span>
                        <span className='ml-arrow'>→</span>
                      </Link>
                    </li>
                    <li>
                      <Link className='mega-link' href='/services#performance'>
                        <span className='ico'>A</span>
                        <span>
                          <span className='ml-title'>Performance Ads</span>
                          <span className='ml-sub'>
                            Meta · YouTube · Iterative
                          </span>
                        </span>
                        <span className='ml-arrow'>→</span>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className='mega-col'>
                  <h5>Adjacent Crafts</h5>
                  <ul>
                    <li>
                      <Link className='mega-link' href='/services#photography'>
                        <span className='ico'>F</span>
                        <span>
                          <span className='ml-title'>Photography</span>
                          <span className='ml-sub'>
                            Editorial · Product · Stills
                          </span>
                        </span>
                        <span className='ml-arrow'>→</span>
                      </Link>
                    </li>
                    <li>
                      <Link className='mega-link' href='/services#animation'>
                        <span className='ico'>M</span>
                        <span>
                          <span className='ml-title'>Animation & Motion</span>
                          <span className='ml-sub'>2D · 3D · Mograph</span>
                        </span>
                        <span className='ml-arrow'>→</span>
                      </Link>
                    </li>
                    <li>
                      <Link className='mega-link' href='/services#ai'>
                        <span className='ico'>I</span>
                        <span>
                          <span className='ml-title'>AI Video</span>
                          <span className='ml-sub'>
                            Hybrid pipelines · Pitches
                          </span>
                        </span>
                        <span className='ml-arrow'>→</span>
                      </Link>
                    </li>
                    <li>
                      <Link className='mega-link' href='/services#post'>
                        <span className='ico'>X</span>
                        <span>
                          <span className='ml-title'>Post & Edit</span>
                          <span className='ml-sub'>Color · Sound · VFX</span>
                        </span>
                        <span className='ml-arrow'>→</span>
                      </Link>
                    </li>
                  </ul>
                </div>

                <Link
                  className='mega-feature'
                  href='/journal/inside-a-tvc-shoot'
                >
                  <div className='mf-img ph'>
                    <span className='ph-label'>Mega · Featured Read</span>
                  </div>
                  <div className='mf-body'>
                    <div className='mf-eyebrow'>Field Notes · 11 min read</div>
                    <div className='mf-title'>
                      <em>Inside a 6-day TVC shoot</em> — what really makes
                      commercials feel cinematic.
                    </div>
                    <div className='mf-meta'>
                      Read the breakdown <span>→</span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <Link
            href='/journal'
            className={pathname === '/journal' ? 'active' : ''}
          >
            Journal
          </Link>
          <Link href='/faqs' className={pathname === '/faqs' ? 'active' : ''}>
            FAQs
          </Link>
          <Link
            href='/contact'
            className={pathname === '/contact' ? 'active' : ''}
          >
            Contact
          </Link>
        </div>

        <div className='nav-cta'>
          <span
            className='phone-text mono'
            style={{
              fontSize: '11px',
              letterSpacing: '.18em',
              color: 'var(--ink)',
              opacity: 0.7,
              textTransform: 'uppercase',
            }}
          >
            +91 9888 715 815
          </span>
          <button
            className='theme-toggle'
            onClick={() => {
              const root = document.documentElement;
              const current = root.getAttribute('data-theme');
              const next = current === 'light' ? 'dark' : 'light';
              root.setAttribute('data-theme', next);
              localStorage.setItem('tnf-theme', next);
            }}
            aria-label='Toggle theme'
          >
            <svg
              className='ico-sun'
              width='18'
              height='18'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='1.6'
            >
              <circle cx='12' cy='12' r='4' />
              <path d='M12 2v2M12 20v2M2 12h2M20 12h2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41' />
            </svg>
            <svg
              className='ico-moon'
              width='18'
              height='18'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='1.6'
            >
              <path d='M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z' />
            </svg>
          </button>
          <Link className='btn btn-gold' href='/contact' data-magnetic=''>
            Schedule <span className='btn-arrow'></span>
          </Link>
          <button className='mobile-toggle' aria-label='Menu'>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
}
