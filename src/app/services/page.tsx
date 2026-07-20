import { ComingSoon } from '@/components/layout/ComingSoon';

export const metadata = {
  title: 'Services',
  description:
    'Comprehensive video production services from concept to delivery. Branded commercials, corporate films, documentaries, and more.',
  alternates: { canonical: '/services' },
};

export default function ServicesPage() {
  return (
    <ComingSoon
      eyebrow="Services"
      title="Our Services page is"
      description="From branded commercials to corporate films and post-production — the full breakdown of what we do is on the way. Check back soon."
    />
  );
}
