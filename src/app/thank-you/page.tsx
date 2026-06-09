import Link from 'next/link';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { CheckCircle, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Thank You',
  description: 'Thanks for reaching out to The Next Frame. We will be in touch shortly.',
  alternates: { canonical: '/thank-you' },
  robots: { index: false, follow: true },
};

export default function ThankYouPage() {
  return (
    <main className='relative'>
      <Navigation />

      <section className='relative min-h-[70vh] flex items-center overflow-hidden bg-[var(--bg)]'>
        <div className='grain' />
        <div className='vignette' />

        <div className='container-tnf relative z-10 py-24 text-center'>
          <div className='w-16 h-16 rounded-full bg-[var(--gold)] flex items-center justify-center mx-auto mb-8'>
            <CheckCircle className='w-8 h-8 text-[var(--bg)]' />
          </div>
          <div className='label label-with-line mx-auto mb-6 w-fit'>
            Message Received
          </div>
          <h1 className='display-md mb-6'>
            Thank you for{' '}
            <span className='italic text-[var(--gold)]'>reaching out</span>
          </h1>
          <p className='lede max-w-xl mx-auto mb-10'>
            We&apos;ve received your enquiry and our team will get back to you
            within 24 hours on business days. For anything urgent, feel free to
            call or WhatsApp us directly.
          </p>

          <div className='flex flex-wrap items-center justify-center gap-4'>
            <Link href='/work' className='btn-gold group'>
              Explore Our Work
              <ArrowRight className='w-4 h-4 transition-transform duration-300 group-hover:translate-x-1' />
            </Link>
            <Link href='/' className='btn-ghost'>
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
