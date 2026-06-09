import type { Metadata } from 'next';
import { Inter, Instrument_Serif } from 'next/font/google';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { WhatsAppButton } from '@/components/layout/WhatsAppButton';
import './globals.css';

// Font configurations matching the handoff design
const interTight = Inter({
  subsets: ['latin'],
  variable: '--font-inter-tight',
  display: 'swap',
  weight: ['300', '400', '500', '600'],
});

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  variable: '--font-instrument-serif',
  display: 'swap',
  weight: ['400'],
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  title: {
    default: 'The Next Frame — Framing The Future',
    template: '%s | The Next Frame',
  },
  description: 'Delhi-based cinematic production house creating branded commercials, corporate films, documentaries, and video content since 2015.',
  keywords: [
    'video production',
    'film production',
    'branded commercials',
    'corporate films',
    'documentary',
    'Delhi production house',
    'cinematic content',
    'TVC',
    'brand films',
  ],
  authors: [{ name: 'The Next Frame' }],
  creator: 'The Next Frame',
  publisher: 'The Next Frame',
  metadataBase: new URL('https://thenextframe.in'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://thenextframe.in',
    siteName: 'The Next Frame',
    title: 'The Next Frame — Framing The Future',
    description: 'Delhi-based cinematic production house creating branded commercials, corporate films, documentaries, and video content since 2015.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'The Next Frame',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Next Frame — Framing The Future',
    description: 'Delhi-based cinematic production house creating branded commercials, corporate films, documentaries, and video content since 2015.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter+Tight:wght@300;400;500;600&family=Geist+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${interTight.variable} ${instrumentSerif.variable}`}
      >
        <ThemeProvider>
          {children}
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
