'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CONTACT, SOCIALS } from '@/lib/site';
import { SERVICE_MENU } from '@/lib/services-menu';

export function Navigation() {
  const [isMegaOpen, setIsMegaOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav className='nav'>
        <div className='wrap-wide nav-inner'>
          <Link className='logo' href='/' onClick={() => setIsMobileMenuOpen(false)}>
            <span className='logo-mark'>
              <span>TNF</span>
            </span>
            <div>The Next Frame</div>
          </Link>

          <div className='nav-links'>
            <Link href='/' className={pathname === '/' ? 'active' : ''}>
              Home
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
                  {SERVICE_MENU.map((col) => (
                    <div className='mega-col' key={col.heading}>
                      <h5>{col.heading}</h5>
                      <ul>
                        {col.items.map((item) => (
                          <li key={item.slug}>
                            <Link
                              className='mega-link'
                              href={`/services/${item.slug}`}
                            >
                              <span className='ico'>{item.ico}</span>
                              <span>
                                <span className='ml-title'>{item.title}</span>
                                <span className='ml-sub'>{item.sub}</span>
                              </span>
                              <span className='ml-arrow'>→</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}

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
            <a
              href={`tel:${CONTACT.phoneE164}`}
              className='phone-text mono'
              style={{
                fontSize: '11px',
                letterSpacing: '.18em',
                color: 'var(--ink)',
                opacity: 0.7,
                textTransform: 'uppercase',
              }}
            >
              {CONTACT.phoneDisplay}
            </a>
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
            <Link className='btn btn-gold desktop-only' href='/contact' data-magnetic=''>
              Schedule <span className='btn-arrow'></span>
            </Link>
            <button
              className={`mobile-toggle ${isMobileMenuOpen ? 'active' : ''}`}
              aria-label='Menu'
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className='mobile-menu-content'>
          <div className='mobile-menu-links'>
            <Link
              href='/'
              className={`mobile-menu-link ${pathname === '/' ? 'active' : ''}`}
            >
              <span className='mobile-link-number'>01</span>
              <span className='mobile-link-text'>Home</span>
            </Link>
            <Link
              href='/work'
              className={`mobile-menu-link ${pathname === '/work' ? 'active' : ''}`}
            >
              <span className='mobile-link-number'>02</span>
              <span className='mobile-link-text'>Work</span>
            </Link>
            <Link
              href='/about'
              className={`mobile-menu-link ${pathname === '/about' ? 'active' : ''}`}
            >
              <span className='mobile-link-number'>03</span>
              <span className='mobile-link-text'>About</span>
            </Link>

            {/* Services with accordion */}
            <div className='mobile-menu-accordion'>
              <button
                className={`mobile-menu-link mobile-accordion-trigger ${isMobileServicesOpen ? 'open' : ''}`}
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
              >
                <span className='mobile-link-number'>04</span>
                <span className='mobile-link-text'>Services</span>
                <span className='mobile-accordion-icon'>
                  <svg width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'>
                    <path d='M6 9l6 6 6-6'/>
                  </svg>
                </span>
              </button>
              <div className={`mobile-accordion-content ${isMobileServicesOpen ? 'open' : ''}`}>
                <Link href='/services' className='mobile-submenu-link'>
                  All Services
                </Link>
                {SERVICE_MENU.map((col) => (
                  <div key={col.heading}>
                    <div className='mobile-submenu-category'>{col.heading}</div>
                    {col.items.map((item) => (
                      <Link
                        key={item.slug}
                        href={`/services/${item.slug}`}
                        className='mobile-submenu-link'
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <Link
              href='/journal'
              className={`mobile-menu-link ${pathname === '/journal' ? 'active' : ''}`}
            >
              <span className='mobile-link-number'>05</span>
              <span className='mobile-link-text'>Journal</span>
            </Link>
            <Link
              href='/faqs'
              className={`mobile-menu-link ${pathname === '/faqs' ? 'active' : ''}`}
            >
              <span className='mobile-link-number'>06</span>
              <span className='mobile-link-text'>FAQs</span>
            </Link>
            <Link
              href='/contact'
              className={`mobile-menu-link ${pathname === '/contact' ? 'active' : ''}`}
            >
              <span className='mobile-link-number'>07</span>
              <span className='mobile-link-text'>Contact</span>
            </Link>
          </div>

          <div className='mobile-menu-footer'>
            <Link href='/contact' className='btn btn-gold mobile-menu-cta'>
              Schedule a Call
              <span className='btn-arrow'></span>
            </Link>
            <a href={`tel:${CONTACT.phoneE164}`} className='mobile-menu-phone'>
              {CONTACT.phoneDisplay}
            </a>
            <div className='mobile-menu-socials'>
              <a href={SOCIALS.instagram} target='_blank' rel='noopener noreferrer' aria-label='Instagram'>
                <svg width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.5'>
                  <rect x='2' y='2' width='20' height='20' rx='5' ry='5'/>
                  <path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z'/>
                  <line x1='17.5' y1='6.5' x2='17.51' y2='6.5'/>
                </svg>
              </a>
              <a href={SOCIALS.youtube} target='_blank' rel='noopener noreferrer' aria-label='YouTube'>
                <svg width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.5'>
                  <path d='M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z'/>
                  <polygon points='9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02'/>
                </svg>
              </a>
              <a href={SOCIALS.linkedin} target='_blank' rel='noopener noreferrer' aria-label='LinkedIn'>
                <svg width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.5'>
                  <path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z'/>
                  <rect x='2' y='9' width='4' height='12'/>
                  <circle cx='4' cy='4' r='2'/>
                </svg>
              </a>
              <a href={SOCIALS.vimeo} target='_blank' rel='noopener noreferrer' aria-label='Vimeo'>
                <svg width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.5'>
                  <path d='M22 8.64c-.09 2-1.34 4.74-3.76 8.21-2.5 3.63-4.62 5.44-6.35 5.44-1.07 0-1.98-1-2.72-2.98L7.5 13.32c-.53-2-1.1-2.98-1.7-2.98-.13 0-.6.28-1.4.84L3.46 10c.88-.77 1.75-1.55 2.6-2.32 1.18-1.02 2.06-1.55 2.65-1.6 1.39-.13 2.25.82 2.57 2.86.35 2.2.59 3.57.72 4.1.4 1.82.84 2.73 1.32 2.73.37 0 .93-.59 1.68-1.77.75-1.18 1.15-2.08 1.2-2.7.11-1.03-.3-1.54-1.21-1.54-.43 0-.88.1-1.34.3.89-2.91 2.59-4.33 5.1-4.25 1.86.05 2.74 1.26 2.65 3.63z'/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
