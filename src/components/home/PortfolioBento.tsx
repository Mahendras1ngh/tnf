'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Play } from 'lucide-react';

const portfolioItems = [
  {
    id: 1,
    title: 'Tech Startup Launch',
    category: 'Branded Commercial',
    client: 'TechCorp',
    aspectRatio: 'aspect-video',
    colSpan: 'md:col-span-2',
    image: '/assets/film-production-studio.png',
  },
  {
    id: 2,
    title: 'Sustainability Story',
    category: 'Corporate Film',
    client: 'GreenCo',
    aspectRatio: 'aspect-portrait',
    colSpan: 'md:col-span-1',
    image: '/assets/corporate-boardroom-filming.png',
  },
  {
    id: 3,
    title: 'Product Launch',
    category: 'Social Shorts',
    client: 'Fashion Brand',
    aspectRatio: 'aspect-square',
    colSpan: 'md:col-span-1',
    image: '/assets/social-media-content-creation.png',
  },
  {
    id: 4,
    title: 'Customer Testimonials',
    category: 'Testimonial Series',
    client: 'SaaS Platform',
    aspectRatio: 'aspect-video',
    colSpan: 'md:col-span-1',
    image: '/assets/interview-podcast-setup.png',
  },
  {
    id: 5,
    title: 'Brand Documentary',
    category: 'Documentary',
    client: 'Heritage Brand',
    aspectRatio: 'aspect-video',
    colSpan: 'md:col-span-2',
    image: '/assets/movie-production-clapperboard.png',
  },
  {
    id: 6,
    title: 'Motion Graphics',
    category: 'Animation',
    client: 'FinTech Startup',
    aspectRatio: 'aspect-square',
    colSpan: 'md:col-span-1',
    image: '/assets/animation-workstation.png',
  },
];

export function PortfolioBento() {
  return (
    <section className="relative py-20 md:py-32 bg-[var(--bg-2)] overflow-hidden">
      {/* Film Grain */}
      <div className="grain" />

      <div className="container-tnf relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="label label-with-line mb-4">Featured Work</div>
            <h2 className="display-md mb-6">
              Stories That <span className="italic text-[var(--gold)]">Resonate</span>
            </h2>
            <p className="lede">
              A selection of our recent projects across industries, each
              crafted to tell a unique story and achieve measurable results.
            </p>
          </div>

          <Link
            href="/work"
            className="btn-gold group flex-shrink-0"
          >
            View All Work
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {portfolioItems.map((item) => (
            <Link
              key={item.id}
              href={`/work/${item.id}`}
              className={`group relative ${item.colSpan} ${item.aspectRatio} overflow-hidden rounded-lg bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--border-strong)] transition-all duration-400 hover:shadow-card`}
            >
              {/* Image */}
              <div className="relative w-full h-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-[var(--bg)]/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-400" />

                {/* Play Icon */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-[var(--gold)]/20 backdrop-blur-sm border border-[var(--gold)]/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-400 transform scale-90 group-hover:scale-100">
                  <Play className="w-6 h-6 text-[var(--gold)] ml-1" fill="currentColor" />
                </div>
              </div>

              {/* Category Label */}
              <div className="absolute top-4 left-4 chip text-[10px] backdrop-blur-sm bg-[var(--surface)]/60">
                {item.category}
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="font-mono text-[10px] text-[var(--gold)] mb-2 uppercase tracking-wider">
                  {item.client}
                </div>
                <h3 className="font-display text-[22px] md:text-[26px] text-[var(--ink)] mb-2 group-hover:text-[var(--gold)] transition-colors duration-300">
                  {item.title}
                </h3>
                <div className="flex items-center gap-2 text-[var(--ink-dim)] group-hover:text-[var(--gold)] transition-colors duration-300">
                  <span className="text-[13px]">View Case Study</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
