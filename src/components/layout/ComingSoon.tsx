import Link from 'next/link';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { ArrowLeft } from 'lucide-react';

interface ComingSoonProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

export function ComingSoon({
  eyebrow = 'Coming Soon',
  title,
  description = 'This page is currently in production. Check back soon — we are putting the finishing touches on it.',
}: ComingSoonProps) {
  return (
    <main className="relative">
      <Navigation />

      <section
        className="relative min-h-[70vh] flex items-center overflow-hidden"
        style={{ background: 'var(--bg)' }}
      >
        <div className="grain" />
        <div className="vignette" />

        <div className="max-w-[900px] mx-auto px-8 relative z-10 py-28 text-center">
          <div className="label mb-6" style={{ justifyContent: 'center' }}>
            {eyebrow}
          </div>
          <h1 className="display-lg mb-8">
            {title} <span className="italic text-[var(--gold)]">Coming Soon</span>
          </h1>
          <p className="lede mx-auto" style={{ maxWidth: '560px' }}>
            {description}
          </p>

          <div className="mt-12 flex justify-center">
            <Link href="/" className="btn btn-ghost">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
