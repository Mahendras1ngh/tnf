import { Metadata } from 'next';
import { ComingSoon } from '@/components/layout/ComingSoon';

export const metadata: Metadata = {
  title: 'Journal | The Next Frame',
  description:
    'Insights, behind-the-scenes stories, and industry knowledge from The Next Frame video production studio.',
  alternates: { canonical: '/journal' },
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
