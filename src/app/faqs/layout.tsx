import type { Metadata } from 'next';
import { FAQS } from './faqs-data';

export const metadata: Metadata = {
  title: 'FAQs',
  description:
    'Answers to common questions about working with The Next Frame — process, timelines, pricing, and deliverables.',
  alternates: { canonical: '/faqs' },
};

// FAQPage structured data — makes the page eligible for FAQ rich results.
const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
};

export default function FaqsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {children}
    </>
  );
}
