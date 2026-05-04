'use client';

import Link from 'next/link';
import {
  Film,
  Building2,
  MessageSquare,
  FileText,
  Share2,
  Package,
  GraduationCap,
  TrendingUp,
  Camera,
  Sparkles,
  Wand2,
  Scissors,
  ArrowRight,
  BookOpen,
} from 'lucide-react';

const serviceCategories = [
  {
    name: 'Film & Brand',
    services: [
      {
        title: 'Branded Commercials',
        subtitle: 'Hero TVCs & Brand Films',
        icon: Film,
        href: '/services/branded-commercials',
      },
      {
        title: 'Corporate Films',
        subtitle: 'Company Stories & Culture',
        icon: Building2,
        href: '/services/corporate-films',
      },
      {
        title: 'Testimonials',
        subtitle: 'Customer Success Stories',
        icon: MessageSquare,
        href: '/services/testimonials',
      },
      {
        title: 'Documentary',
        subtitle: 'Long-form Narratives',
        icon: FileText,
        href: '/services/documentary',
      },
    ],
  },
  {
    name: 'Performance & Social',
    services: [
      {
        title: 'Social Shorts',
        subtitle: 'Instagram, YouTube, TikTok',
        icon: Share2,
        href: '/services/social-shorts',
      },
      {
        title: 'Product Demos',
        subtitle: 'Explainer & Unboxing',
        icon: Package,
        href: '/services/product-demos',
      },
      {
        title: 'Educational',
        subtitle: 'Training & E-learning',
        icon: GraduationCap,
        href: '/services/educational',
      },
      {
        title: 'Performance Ads',
        subtitle: 'High-converting Video Ads',
        icon: TrendingUp,
        href: '/services/performance-ads',
      },
    ],
  },
  {
    name: 'Adjacent Crafts',
    services: [
      {
        title: 'Photography',
        subtitle: 'Product & Brand Photography',
        icon: Camera,
        href: '/services/photography',
      },
      {
        title: 'Animation & Motion',
        subtitle: '2D/3D Animation',
        icon: Sparkles,
        href: '/services/animation',
      },
      {
        title: 'AI Video',
        subtitle: 'AI-powered Content',
        icon: Wand2,
        href: '/services/ai-video',
      },
      {
        title: 'Post & Edit',
        subtitle: 'Editing & Color Grading',
        icon: Scissors,
        href: '/services/post-production',
      },
    ],
  },
];

export function MegaMenu() {
  return (
    <div className="fixed top-[72px] left-0 right-0 z-80">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-xl" />

      {/* Menu Content */}
      <div className="relative container-tnf py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Service Categories (3 columns) */}
          {serviceCategories.map((category) => (
            <div key={category.name} className="space-y-6">
              <div className="label text-[10px]">{category.name}</div>
              <div className="space-y-4">
                {category.services.map((service) => {
                  const Icon = service.icon;
                  return (
                    <Link
                      key={service.title}
                      href={service.href}
                      className="group flex items-start gap-3 p-3 rounded-lg border border-transparent hover:border-[var(--border-strong)] hover:bg-[var(--surface-2)] transition-all duration-300"
                    >
                      <div className="w-10 h-10 rounded-lg bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center flex-shrink-0 group-hover:border-[var(--gold)] group-hover:bg-[var(--gold)] transition-all duration-300">
                        <Icon className="w-5 h-5 text-[var(--ink-mute)] group-hover:text-[var(--bg)] transition-colors duration-300" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-display text-[15px] text-[var(--ink)] group-hover:text-[var(--gold)] transition-colors duration-300">
                            {service.title}
                          </span>
                          <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[var(--gold)]" />
                        </div>
                        <p className="text-[12px] text-[var(--ink-dim)] mt-1">
                          {service.subtitle}
                        </p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Featured Article (4th column) */}
          <div className="space-y-6">
            <div className="label text-[10px]">Featured</div>
            <Link
              href="/journal/inside-a-tvc-shoot"
              className="block group"
            >
              <div className="aspect-video rounded-lg bg-gradient-to-br from-[var(--gold)] to-[var(--red)] relative overflow-hidden mb-4">
                <div className="absolute inset-0 flex items-center justify-center">
                  <BookOpen className="w-12 h-12 text-white/30" />
                </div>
              </div>
              <div className="label text-[10px] mb-2">Latest Article</div>
              <h3 className="font-display text-[18px] leading-tight mb-2 group-hover:text-[var(--gold)] transition-colors duration-300">
                Inside a TVC Shoot
              </h3>
              <p className="text-[13px] text-[var(--ink-dim)] line-clamp-2">
                A behind-the-scenes look at how we create branded commercials
                from concept to final cut.
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
