'use client';

import Link from 'next/link';

export function Footer() {
  return (
    <footer className='footer'>
      <div className='wrap'>
        <div className='footer-grid'>
          <div>
            <div className='logo' style={{ marginBottom: '20px' }}>
              <span className='logo-mark'>
                <span>TNF</span>
              </span>
              <div>The Next Frame</div>
            </div>
            <p className='tagline'>
              TNF captures moments beyond the lens, crafting stories that
              inspire, connect, and leave lasting impressions.
            </p>
            <div className='socials' style={{ marginTop: '28px' }}>
              <a href='#' aria-label='Instagram'>
                <svg
                  width='16'
                  height='16'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='1.5'
                >
                  <rect x='3' y='3' width='18' height='18' rx='4' />
                  <circle cx='12' cy='12' r='4' />
                </svg>
              </a>
              <a href='#' aria-label='YouTube'>
                <svg
                  width='16'
                  height='16'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='1.5'
                >
                  <rect x='2' y='5' width='20' height='14' rx='3' />
                  <path
                    d='M10 9l5 3-5 3V9z'
                    fill='currentColor'
                    stroke='none'
                  />
                </svg>
              </a>
              <a href='#' aria-label='LinkedIn'>
                <svg
                  width='16'
                  height='16'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='1.5'
                >
                  <rect x='3' y='3' width='18' height='18' rx='3' />
                  <path d='M8 10v8M8 7v.01M12 18v-5a2 2 0 0 1 4 0v5' />
                </svg>
              </a>
              <a href='#' aria-label='Vimeo'>
                <svg
                  width='16'
                  height='16'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='1.5'
                >
                  <circle cx='12' cy='12' r='9' />
                  <path d='M8 10c1-1 2-1 3 0 1 1 1 5 3 5s4-7 0-7' />
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h4>Studio</h4>
            <ul>
              <li>
                <Link href='/'>Index</Link>
              </li>
              <li>
                <Link href='/about'>About</Link>
              </li>
              <li>
                <Link href='/work'>Work</Link>
              </li>
              <li>
                <Link href='/journal'>Journal</Link>
              </li>
              <li>
                <Link href='/faqs'>FAQs</Link>
              </li>
              <li>
                <Link href='/contact'>Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>Services</h4>
            <ul>
              <li>
                <Link href='/services/branded-commercials'>
                  Branded Commercials
                </Link>
              </li>
              <li>
                <Link href='/services#corporate'>Corporate Films</Link>
              </li>
              <li>
                <Link href='/services#testimonials'>Testimonials</Link>
              </li>
              <li>
                <Link href='/services#documentary'>Documentary</Link>
              </li>
              <li>
                <Link href='/services#shorts'>Social Shorts</Link>
              </li>
              <li>
                <Link href='/services#product'>Product Demos</Link>
              </li>
              <li>
                <Link href='/services#animation'>Animation & Motion</Link>
              </li>
              <li>
                <Link href='/services#ai'>AI Video</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>Studio · Delhi</h4>
            <p className='tagline'>
              A-7, Hauz Khas Village
              <br />
              New Delhi 110016, IN
              <br />
              <br />
              +91 9888 715 815
              <br />
              hello@thenextframe.in
            </p>
          </div>
        </div>
        <div className='footer-bar'>
          <span>© 2015–2026 The Next Frame · All rights reserved</span>
          <span>Crafted in Delhi · Frame by frame</span>
        </div>
      </div>
    </footer>
  );
}
