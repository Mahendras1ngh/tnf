'use client';

import { useEffect } from 'react';

export function HomeScripts() {
  useEffect(() => {
    // Testimonials carousel
    const TESTIS = [
      { q: "Their storytelling and visual execution helped us simplify complex financial concepts into relatable content. Fast, reliable, and always on-brand.", client: "Lendingplate", person: "Marketing Team", role: "Fintech · Delhi NCR" },
      { q: "They captured the essence of our intercity food delivery idea with vibrant visuals and a narrative that actually moves product.", client: "Tastes2Plate", person: "Founders", role: "F&B · Intercity Delivery" },
      { q: "Their understanding of brand voice and the execution quality was top-notch. We had three rounds of edits — they nailed the first draft.", client: "Bootes Impex", person: "Managing Director", role: "Industrial Trade" },
      { q: "TNF nailed clarity and impact with a clean, informative video campaign that ran across our entire funnel.", client: "TrueBalance", person: "Brand Team", role: "Consumer Fintech" },
      { q: "Professional, deadline-oriented, and highly creative. We briefed on a Tuesday, shot on Saturday, published on Monday.", client: "Ecom Express", person: "Marketing Lead", role: "Logistics" },
      { q: "Direction, shoot quality, and editing were truly impressive — and they handled a 12-location schedule without a single hiccup.", client: "Urban Company", person: "Creative Manager", role: "Home Services" },
      { q: "Reel concepts were sharp, engaging, and perfectly suited for our Gen-Z audience. The CPM on paid was our best in three quarters.", client: "WinZO", person: "Marketing Manager", role: "Gaming" },
      { q: "Beautifully brought our brand to life through visuals that felt both natural and premium — exactly what a food brand needs.", client: "Farmley", person: "Brand Manager", role: "FMCG / Snacks" },
    ];

    const $q = document.getElementById('t-quote');
    const $c = document.getElementById('t-client');
    const $p = document.getElementById('t-person');
    const $r = document.getElementById('t-role');
    const $cur = document.getElementById('t-cur');
    const $tot = document.getElementById('t-total');
    const $list = document.getElementById('t-list');
    const $prev = document.getElementById('t-prev');
    const $next = document.getElementById('t-next');

    if (!$q || !$c || !$p || !$r || !$cur || !$tot || !$list || !$prev || !$next) return;

    let ti = 0;
    $tot.textContent = String(TESTIS.length).padStart(2, '0');

    function renderList() {
      if (!$list) return;
      $list.innerHTML = TESTIS.map((t, i) => `
        <button data-i="${i}" class="${i === ti ? 'active' : ''}">
          <span>${t.client}</span>
          <span class="idx">${String(i + 1).padStart(2, '0')}</span>
        </button>
      `).join('');
      $list.querySelectorAll('button').forEach(b => {
        b.addEventListener('click', () => go(parseInt((b as HTMLElement).dataset.i || '0', 10)));
      });
    }

    function go(i: number) {
      ti = (i + TESTIS.length) % TESTIS.length;
      const t = TESTIS[ti];
      if (!$q || !$c || !$p || !$r || !$cur) return;

      $q.style.opacity = '0';
      $q.style.transform = 'translateY(10px)';
      setTimeout(() => {
        $q.textContent = t.q;
        $c.textContent = t.client;
        $p.textContent = t.person;
        $r.textContent = t.role;
        $cur.textContent = String(ti + 1).padStart(2, '0');
        $q.style.transition = 'opacity .5s ease, transform .5s ease';
        $q.style.opacity = '1';
        $q.style.transform = 'none';
      }, 200);
      renderList();
    }

    $prev.addEventListener('click', () => go(ti - 1));
    $next.addEventListener('click', () => go(ti + 1));
    renderList();

    const autoT = setInterval(() => go(ti + 1), 6500);
    const testiStage = document.querySelector('.testi-stage');
    if (testiStage) {
      testiStage.addEventListener('mouseenter', () => clearInterval(autoT));
    }

    return () => {
      clearInterval(autoT);
    };
  }, []);

  useEffect(() => {
    // Hero timecode counter
    const $tc = document.querySelector('.tc');
    if (!$tc) return;

    const tcStart = performance.now();
    let rafId: number;

    function tick() {
      const ms = performance.now() - tcStart;
      const s = Math.floor(ms / 1000);
      const f = Math.floor((ms % 1000) / 41.66);
      const m = Math.floor(s / 60);
      const h = Math.floor(m / 60);
      ($tc as HTMLElement).textContent =
        String(h).padStart(2, '0') + ':' +
        String(m % 60).padStart(2, '0') + ':' +
        String(s % 60).padStart(2, '0') + ':' +
        String(f).padStart(2, '0');
      rafId = requestAnimationFrame(tick);
    }
    tick();

    return () => {
      cancelAnimationFrame(rafId);
    };
  }, []);

  return null;
}
