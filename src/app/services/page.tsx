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
  CheckCircle,
} from 'lucide-react';

export const metadata = {
  title: 'Services',
  description: 'Comprehensive video production services from concept to delivery. Branded commercials, corporate films, documentaries, and more.',
};

const services = [
  {
    id: 'S/01',
    category: 'Film & Brand',
    title: 'Branded Commercials',
    description: 'Hero TVCs and brand films that capture attention and drive action. From 15-second spots to 3-minute narratives.',
    icon: Film,
    tags: ['TVC', 'Brand Film', 'Hero Commercial'],
    investment: '₹8-25L',
    turnaround: '4-8 weeks',
    href: '/services/branded-commercials',
  },
  {
    id: 'S/02',
    category: 'Film & Brand',
    title: 'Corporate Films',
    description: 'Company stories, culture videos, and internal communications that align your team and impress stakeholders.',
    icon: Building2,
    tags: ['Company Story', 'Culture Video', 'Internal Comms'],
    investment: '₹3-12L',
    turnaround: '3-6 weeks',
    href: '/services/corporate-films',
  },
  {
    id: 'S/03',
    category: 'Film & Brand',
    title: 'Testimonials',
    description: 'Authentic customer success stories that build trust and drive conversions.',
    icon: MessageSquare,
    tags: ['Customer Stories', 'Case Studies', 'Reviews'],
    investment: '₹1.5-6L',
    turnaround: '2-4 weeks',
    href: '/services/testimonials',
  },
  {
    id: 'S/04',
    category: 'Film & Brand',
    title: 'Documentary',
    description: 'Long-form storytelling that explores your brand heritage, impact, or industry insights.',
    icon: FileText,
    tags: ['Brand Documentary', 'Impact Film', 'Heritage Story'],
    investment: '₹10-30L',
    turnaround: '6-12 weeks',
    href: '/services/documentary',
  },
  {
    id: 'S/05',
    category: 'Performance & Social',
    title: 'Social Shorts',
    description: 'Platform-optimized content for Instagram, YouTube, and TikTok that stops the scroll.',
    icon: Share2,
    tags: ['Reels', 'Shorts', 'TikTok'],
    investment: '₹50K-3L',
    turnaround: '1-3 weeks',
    href: '/services/social-shorts',
  },
  {
    id: 'S/06',
    category: 'Performance & Social',
    title: 'Product Demos',
    description: 'Clear, compelling explainers and unboxing videos that showcase your product value.',
    icon: Package,
    tags: ['Explainer', 'Unboxing', 'Tutorial'],
    investment: '₹1-5L',
    turnaround: '2-4 weeks',
    href: '/services/product-demos',
  },
  {
    id: 'S/07',
    category: 'Performance & Social',
    title: 'Educational',
    description: 'E-learning content, training videos, and instructional series that engage and inform.',
    icon: GraduationCap,
    tags: ['E-learning', 'Training', 'Course Content'],
    investment: '₹2-8L',
    turnaround: '3-6 weeks',
    href: '/services/educational',
  },
  {
    id: 'S/08',
    category: 'Performance & Social',
    title: 'Performance Ads',
    description: 'High-converting video ads designed for Meta, Google, and YouTube campaigns.',
    icon: TrendingUp,
    tags: ['Meta Ads', 'Google Ads', 'YouTube Ads'],
    investment: '₹80K-4L',
    turnaround: '1-3 weeks',
    href: '/services/performance-ads',
  },
  {
    id: 'S/09',
    category: 'Adjacent Crafts',
    title: 'Photography',
    description: 'Product photography, brand photography, and lifestyle shoots that complement your video content.',
    icon: Camera,
    tags: ['Product', 'Brand', 'Lifestyle'],
    investment: '₹40K-2L',
    turnaround: '1-2 weeks',
    href: '/services/photography',
  },
  {
    id: 'S/10',
    category: 'Adjacent Crafts',
    title: 'Animation & Motion',
    description: '2D/3D animation, motion graphics, and kinetic typography for dynamic visual storytelling.',
    icon: Sparkles,
    tags: ['2D/3D', 'Motion Graphics', 'Explainer'],
    investment: '₹1.5-8L',
    turnaround: '2-5 weeks',
    href: '/services/animation',
  },
  {
    id: 'S/11',
    category: 'Adjacent Crafts',
    title: 'AI Video',
    description: 'Cutting-edge AI-powered video creation for rapid content production and personalization.',
    icon: Wand2,
    tags: ['AI Generated', 'Personalization', 'Synthetic'],
    investment: '₹60K-4L',
    turnaround: '1-2 weeks',
    href: '/services/ai-video',
  },
  {
    id: 'S/12',
    category: 'Adjacent Crafts',
    title: 'Post & Edit',
    description: 'Professional editing, color grading, and post-production services for your existing footage.',
    icon: Scissors,
    tags: ['Editing', 'Color Grading', 'Post'],
    investment: '₹50K-3L',
    turnaround: '1-3 weeks',
    href: '/services/post-production',
  },
];

const process = [
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

export default function ServicesPage() {
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
      {categories.map((category) => (
        <section
          key={category}
          className="relative py-20 md:py-32 bg-[var(--bg-2)] odd:bg-[var(--bg)] overflow-hidden"
        >
          {category === 'Film & Brand' && <div className="grain" />}

          <div className="container-tnf relative z-10">
            <div className="label label-with-line mb-12">{category}</div>

            <div className="grid md:grid-cols-2 gap-8">
              {services
                .filter((service) => service.category === category)
                .map((service) => {
                  const Icon = service.icon;
                  return (
                    <Link
                      key={service.id}
                      href={service.href}
                      className="group card-base hover:border-[var(--border-strong)] transition-all duration-400 relative accent-line"
                    >
                      {/* Service Number */}
                      <div className="absolute top-8 right-8 font-mono text-[48px] font-medium text-[var(--border)] group-hover:text-[var(--gold)] transition-colors duration-400">
                        {service.id}
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
                        <div className="flex items-center gap-2">
                          <DollarSign className="w-4 h-4" />
                          {service.investment}
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          {service.turnaround}
                        </div>
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
      ))}

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
            {process.map((item, index) => (
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
