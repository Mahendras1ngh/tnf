import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    "Get in touch with The Next Frame. Tell us about your project and we'll respond within 24 hours with a custom proposal.",
  alternates: { canonical: '/contact' },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
