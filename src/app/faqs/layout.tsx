import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQs',
  description:
    'Answers to common questions about working with The Next Frame — process, timelines, pricing, and deliverables.',
  alternates: { canonical: '/faqs' },
};

export default function FaqsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
