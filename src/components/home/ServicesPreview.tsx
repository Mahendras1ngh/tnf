'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Marquee } from '@/components/ui/Marquee';

const services = [
  'Branded Commercials',
  'Corporate Films',
  'Documentary',
  'Testimonials',
  'Social Shorts',
  'Product Demos',
  'Educational Videos',
  'Performance Ads',
  'Photography',
  'Animation & Motion',
  'AI Video',
  'Post Production',
];

export function ServicesPreview() {
  return (
    <section className="relative py-20 md:py-32 bg-[var(--bg)] overflow-hidden">
      {/* Section Header */}
      <div className="container-tnf mb-16">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <div className="label label-with-line mb-4">What We Do</div>
            <h2 className="display-md mb-6">
              12 Crafts, One <span className="italic text-[var(--gold)]">Vision</span>
            </h2>
            <p className="lede">
              From concept to final cut, we offer a full suite of video
              production services tailored to your brand's unique needs.
            </p>
          </div>

          <Link
            href="/services"
            className="btn-gold group flex-shrink-0"
          >
            All Services
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      {/* Services Marquee - Top Row */}
      <div className="mb-6">
        <Marquee speed="medium">
          {services.slice(0, 6).map((service, index) => (
            <div
              key={index}
              className="px-8 py-6 border-r border-[var(--border)]"
            >
              <span className="font-display text-[28px] md:text-[36px] whitespace-nowrap text-[var(--ink-mute)] hover:text-[var(--gold)] transition-colors duration-300 cursor-pointer">
                {service}
              </span>
            </div>
          ))}
        </Marquee>
      </div>

      {/* Services Marquee - Bottom Row (Reverse) */}
      <div>
        <Marquee speed="medium" reverse>
          {services.slice(6).map((service, index) => (
            <div
              key={index}
              className="px-8 py-6 border-r border-[var(--border)]"
            >
              <span className="font-display text-[28px] md:text-[36px] whitespace-nowrap text-[var(--ink-mute)] hover:text-[var(--gold)] transition-colors duration-300 cursor-pointer">
                {service}
              </span>
            </div>
          ))}
        </Marquee>
      </div>

      {/* Bottom Info */}
      <div className="container-tnf mt-16">
        <div className="flex flex-wrap items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[var(--gold)]" />
            <span className="text-[13px] text-[var(--ink-dim)]">
              Full-service production capabilities
            </span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[var(--gold)]" />
            <span className="text-[13px] text-[var(--ink-dim)]">
              From pre-production to final delivery
            </span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[var(--gold)]" />
            <span className="text-[13px] text-[var(--ink-dim)]">
              Tailored to your budget and timeline
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
