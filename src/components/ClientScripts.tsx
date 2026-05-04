'use client';

import { useEffect } from 'react';

export function ClientScripts() {
  useEffect(() => {
    // NAV scroll
    const nav = document.querySelector('.nav');
    if (nav) {
      const onScroll = () => {
        if (window.scrollY > 40) nav.classList.add('scrolled');
        else nav.classList.remove('scrolled');
      };
      onScroll();
      window.addEventListener('scroll', onScroll, { passive: true });
      return () => window.removeEventListener('scroll', onScroll);
    }
  }, []);

  useEffect(() => {
    // Reveal animations
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );

    document
      .querySelectorAll('.reveal, .reveal-l, .reveal-r, .reveal-scale, .split-reveal')
      .forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, []);

  useEffect(() => {
    // Magnetic buttons
    const handleMouseMove = (btn: Element) => (e: MouseEvent) => {
      const r = btn.getBoundingClientRect();
      const x = e.clientX - r.left - r.width / 2;
      const y = e.clientY - r.top - r.height / 2;
      (btn as HTMLElement).style.transform = `translate(${x * 0.22}px, ${y * 0.25}px)`;
    };

    const handleMouseLeave = (btn: Element) => () => {
      (btn as HTMLElement).style.transform = '';
    };

    const magneticElements = document.querySelectorAll('[data-magnetic]');
    const handlers = new Map();

    magneticElements.forEach((btn) => {
      const moveHandler = handleMouseMove(btn);
      const leaveHandler = handleMouseLeave(btn);
      handlers.set(btn, { moveHandler, leaveHandler });
      btn.addEventListener('mousemove', moveHandler as EventListener);
      btn.addEventListener('mouseleave', leaveHandler as EventListener);
    });

    return () => {
      handlers.forEach(({ moveHandler, leaveHandler }, btn) => {
        btn.removeEventListener('mousemove', moveHandler);
        btn.removeEventListener('mouseleave', leaveHandler);
      });
    };
  }, []);

  useEffect(() => {
    // Animated counters
    const cio = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const el = e.target as HTMLElement;
          const target = parseInt(el.dataset.count || '0', 10);
          const dur = 1400;
          const start = performance.now();

          const tick = (t: number) => {
            const p = Math.min(1, (t - start) / dur);
            const eased = 1 - Math.pow(1 - p, 3);
            el.textContent = Math.round(target * eased).toLocaleString();
            if (p < 1) requestAnimationFrame(tick);
          };

          requestAnimationFrame(tick);
          cio.unobserve(el);
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll('[data-count]').forEach((el) => cio.observe(el));

    return () => cio.disconnect();
  }, []);

  useEffect(() => {
    // Custom cursor (dark mode only)
    const root = document.documentElement;
    if (root.getAttribute('data-theme') === 'dark') {
      const dot = document.createElement('div');
      dot.className = 'cursor-dot';
      dot.style.cssText = `position: fixed; top: 0; left: 0; width: 8px; height: 8px; background: var(--gold); border-radius: 50%; pointer-events: none; z-index: 9999; transform: translate(-50%, -50%); mix-blend-mode: difference; transition: width .25s, height .25s, opacity .2s; opacity: 0;`;
      document.body.appendChild(dot);

      const ring = document.createElement('div');
      ring.className = 'cursor-ring';
      ring.style.cssText = `position: fixed; top: 0; left: 0; width: 36px; height: 36px; border: 1px solid color-mix(in srgb, var(--gold) 50%, transparent); border-radius: 50%; pointer-events: none; z-index: 9998; transform: translate(-50%, -50%); transition: transform .18s var(--ease), width .25s, height .25s, opacity .25s; opacity: 0;`;
      document.body.appendChild(ring);

      let rx = 0,
        ry = 0,
        tx = 0,
        ty = 0;

      const handleMouseMove = (e: MouseEvent) => {
        tx = e.clientX;
        ty = e.clientY;
        dot.style.opacity = '1';
        ring.style.opacity = '1';
        dot.style.left = tx + 'px';
        dot.style.top = ty + 'px';
      };

      window.addEventListener('mousemove', handleMouseMove);

      const anim = () => {
        rx += (tx - rx) * 0.18;
        ry += (ty - ry) * 0.18;
        ring.style.left = rx + 'px';
        ring.style.top = ry + 'px';
        requestAnimationFrame(anim);
      };
      requestAnimationFrame(anim);

      document.querySelectorAll('a, button, [data-cursor]').forEach((el) => {
        el.addEventListener('mouseenter', () => {
          ring.style.width = '56px';
          ring.style.height = '56px';
        });
        el.addEventListener('mouseleave', () => {
          ring.style.width = '36px';
          ring.style.height = '36px';
        });
      });

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        dot.remove();
        ring.remove();
      };
    }
  }, []);

  useEffect(() => {
    // Split-reveal: wrap each word
    document.querySelectorAll('.split-reveal').forEach((el) => {
      if (el.children.length > 0) return; // Already processed
      const words = el.textContent?.trim().split(/\s+/) || [];
      el.innerHTML = words
        .map((w, i) => `<span class="word" style="--i:${i}"><span>${w}</span></span>`)
        .join(' ');
    });
  }, []);

  return null;
}
