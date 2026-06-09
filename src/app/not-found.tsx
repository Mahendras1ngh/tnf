import Link from 'next/link';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Page Not Found',
  description: "The page you're looking for doesn't exist or has moved.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className='relative'>
      <Navigation />

      <section className='relative min-h-[70vh] flex items-center overflow-hidden bg-[var(--bg)]'>
        <div className='grain' />
        <div className='vignette' />

        <div className='container-tnf relative z-10 py-24 text-center'>
          <div className='font-mono text-[var(--gold)] text-[120px] md:text-[180px] leading-none mb-4'>
            404
          </div>
          <div className='label label-with-line mx-auto mb-6 w-fit'>
            Off the storyboard
          </div>
          <h1 className='display-md mb-6'>
            This frame doesn&apos;t{' '}
            <span className='italic text-[var(--gold)]'>exist</span>
          </h1>
          <p className='lede max-w-xl mx-auto mb-10'>
            The page you&apos;re looking for may have been moved, renamed, or
            never made the final cut. Let&apos;s get you back on track.
          </p>

          <div className='flex flex-wrap items-center justify-center gap-4 mb-12'>
            <Link href='/' className='btn-gold group'>
              Back to Home
              <ArrowRight className='w-4 h-4 transition-transform duration-300 group-hover:translate-x-1' />
            </Link>
            <Link href='/work' className='btn-ghost'>
              View Our Work
            </Link>
            <Link href='/contact' className='btn-ghost'>
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
