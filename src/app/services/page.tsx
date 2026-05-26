import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
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
  Clock,
  DollarSign,
  Video,
  Image,
  Music,
  Mic,
  Monitor,
  Smartphone,
  type LucideIcon,
} from 'lucide-react';
import { prisma } from '@/lib/prisma';

export const metadata = {
  title: 'Services',
  description: 'Comprehensive video production services from concept to delivery. Branded commercials, corporate films, documentaries, and more.',
};

// Icon mapping
const iconMap: Record<string, LucideIcon> = {
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
  Video,
  Image,
  Music,
  Mic,
  Monitor,
  Smartphone,
};

const categoryMap: Record<string, string> = {
  FILM_BRAND: 'Film & Brand',
  PERFORMANCE_SOCIAL: 'Performance & Social',
  ADJACENT_CRAFTS: 'Adjacent Crafts',
};

async function getServices() {
  return prisma.service.findMany({
    where: { isActive: true },
    orderBy: { order: 'asc' },
  });
}

const processSteps = [
  {
    step: '01',
    title: 'Discovery',
    description: 'We deep dive into your brand, goals, and target audience to craft the perfect creative strategy.',
  },
  {
    step: '02',
    title: 'Concept',
    description: 'Our team develops creative concepts, scripts, and storyboards aligned with your vision.',
  },
  {
    step: '03',
    title: 'Production',
    description: 'Professional crew, premium equipment, and meticulous execution bring the concept to life.',
  },
  {
    step: '04',
    title: 'Post',
    description: 'Expert editing, color grading, sound design, and motion graphics polish the final product.',
  },
  {
    step: '05',
    title: 'Delivery',
    description: 'Optimized files in all required formats, ready for deployment across any platform.',
  },
];

export default async function ServicesPage() {
  const services = await getServices();
  const categories = ['Film & Brand', 'Performance & Social', 'Adjacent Crafts'];

  return (
    <main className="relative">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-[var(--bg)]">
        <div className="grain" />
        <div className="vignette" />

        <div className="container-tnf relative z-10 py-20">
          <div className="max-w-4xl">
            <div className="label label-with-line mb-6">Full-Service Production</div>
            <h1 className="display-lg mb-8">
              12 Crafts, <span className="italic text-[var(--gold)]">Infinite</span> Possibilities
            </h1>
            <p className="lede max-w-2xl mb-8">
              From cinematic brand films to viral social content, we offer a
              comprehensive suite of video production services designed to meet
              your unique needs and budget.
            </p>
            <Link href="/contact" className="btn-gold group">
              Get a Custom Quote
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      {categories.map((category) => {
        const categoryKey = Object.entries(categoryMap).find(
          ([, value]) => value === category
        )?.[0];
        const categoryServices = services.filter(
          (service) => categoryMap[service.category] === category
        );

        if (categoryServices.length === 0) return null;

        return (
          <section
            key={category}
            className="relative py-20 md:py-32 bg-[var(--bg-2)] odd:bg-[var(--bg)] overflow-hidden"
          >
            {category === 'Film & Brand' && <div className="grain" />}

            <div className="container-tnf relative z-10">
              <div className="label label-with-line mb-12">{category}</div>

              <div className="grid md:grid-cols-2 gap-8">
                {categoryServices.map((service, index) => {
                  const Icon = iconMap[service.icon || 'Film'] || Film;
                  const serviceNumber = `S/${String(service.order).padStart(2, '0')}`;
                  return (
                    <Link
                      key={service.id}
                      href={`/services/${service.slug}`}
                      className="group card-base hover:border-[var(--border-strong)] transition-all duration-400 relative accent-line"
                    >
                      {/* Service Number */}
                      <div className="absolute top-8 right-8 font-mono text-[48px] font-medium text-[var(--border)] group-hover:text-[var(--gold)] transition-colors duration-400">
                        {serviceNumber}
                      </div>

                      {/* Icon */}
                      <div className="w-14 h-14 rounded-lg bg-[var(--bg)] border border-[var(--border)] flex items-center justify-center mb-6 group-hover:border-[var(--gold)] group-hover:bg-[var(--gold)] transition-all duration-400">
                        <Icon className="w-7 h-7 text-[var(--ink-mute)] group-hover:text-[var(--bg)] transition-colors duration-400" />
                      </div>

                      {/* Content */}
                      <h3 className="font-display text-[28px] mb-3 group-hover:text-[var(--gold)] transition-colors duration-300">
                        {service.title}
                      </h3>

                      <p className="text-[15px] text-[var(--ink-mute)] mb-6 leading-relaxed">
                        {service.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {service.tags.map((tag) => (
                          <span key={tag} className="chip text-[10px]">
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Meta Info */}
                      <div className="flex items-center gap-6 text-[13px] text-[var(--ink-dim)]">
                        {service.investment && (
                          <div className="flex items-center gap-2">
                            <DollarSign className="w-4 h-4" />
                            {service.investment}
                          </div>
                        )}
                        {service.turnaround && (
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            {service.turnaround}
                          </div>
                        )}
                      </div>

                      {/* Arrow */}
                      <div className="absolute bottom-8 right-8 w-10 h-10 rounded-full border border-[var(--border-strong)] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-400">
                        <ArrowRight className="w-4 h-4 text-[var(--gold)]" />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        );
      })}

      {/* Process Timeline */}
      <section className="relative py-20 md:py-32 bg-[var(--bg)] overflow-hidden">
        <div className="container-tnf relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="label mb-4">Our Process</div>
            <h2 className="display-md mb-6">
              From Concept to <span className="italic text-[var(--gold)]">Delivery</span>
            </h2>
            <p className="lede">
              A proven 5-stage process that ensures every project exceeds
              expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {processSteps.map((item, index) => (
              <div key={index} className="card-base text-center">
                <div className="font-mono text-[36px] text-[var(--gold)] mb-4">
                  {item.step}
                </div>
                <h3 className="font-display text-[20px] mb-3">{item.title}</h3>
                <p className="text-[13px] text-[var(--ink-mute)] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
