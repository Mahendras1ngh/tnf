import { Metadata } from 'next';
import { ComingSoon } from '@/components/layout/ComingSoon';

export const metadata: Metadata = {
  title: 'Journal | The Next Frame',
  description:
    'Insights, behind-the-scenes stories, and industry knowledge from The Next Frame video production studio.',
  alternates: { canonical: '/journal' },
  // "Coming Soon" placeholder — keep it out of the index until real content
  // ships so Google doesn't treat it as a thin/soft-404 page.
  robots: { index: false, follow: true },
  openGraph: {
    title: 'Journal | The Next Frame',
    description:
      'Insights, behind-the-scenes stories, and industry knowledge from The Next Frame video production studio.',
    type: 'website',
  },
};

export default function JournalPage() {
  return (
    <ComingSoon
      eyebrow="Journal"
      title="Our Journal is"
      description="Stories, insights and behind-the-lens knowledge from our studio are on the way. Check back soon."
    />
  );
}
