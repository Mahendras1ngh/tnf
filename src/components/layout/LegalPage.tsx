import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';

interface LegalPageProps {
  eyebrow?: string;
  title: string;
  intro?: string;
  lastUpdated?: string;
  children: React.ReactNode;
}

export function LegalPage({
  eyebrow = 'Legal',
  title,
  intro,
  lastUpdated,
  children,
}: LegalPageProps) {
  return (
    <main className='relative'>
      <Navigation />

      {/* Hero */}
      <section className='relative flex items-center overflow-hidden bg-[var(--bg)]'>
        <div className='grain' />
        <div className='vignette' />
        <div className='container-tnf relative z-10 pt-32 pb-12'>
          <div className='max-w-3xl'>
            <div className='label label-with-line mb-6'>{eyebrow}</div>
            <h1 className='display-md mb-6'>{title}</h1>
            {intro && <p className='lede max-w-2xl'>{intro}</p>}
            {lastUpdated && (
              <p className='mt-6 font-mono text-[12px] text-[var(--ink-dim)]'>
                Last updated: {lastUpdated}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Body */}
      <section className='relative pb-24 bg-[var(--bg)]'>
        <div className='container-tnf relative z-10'>
          <div className='legal-prose max-w-3xl'>{children}</div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
