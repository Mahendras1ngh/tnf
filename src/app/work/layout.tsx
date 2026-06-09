import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Work',
  description:
    'Selected films, commercials, and branded content from The Next Frame — a Delhi-based cinematic production house.',
  alternates: { canonical: '/work' },
};

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
