import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Corporate Video Production',
  description:
    'Powerful corporate videos that build trust and drive results. The Next Frame delivers creative, on-time, end-to-end video production. Get a free consultation.',
  alternates: { canonical: '/landing' },
  openGraph: {
    title: 'Corporate Video Production | The Next Frame',
    description:
      'We help businesses communicate their story, build trust and drive results through high-quality corporate videos.',
    url: '/landing',
  },
};

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
