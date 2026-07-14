import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { ClientScripts } from '@/components/ClientScripts';

import { Hero } from '@/components/landing/Hero';
import { TrustBar } from '@/components/landing/TrustBar';
import { WhyChooseUs } from '@/components/landing/WhyChooseUs';
import { ServicesShowcase } from '@/components/landing/ServicesShowcase';
import { BenefitsStrip } from '@/components/landing/BenefitsStrip';
import { HowWeWork } from '@/components/landing/HowWeWork';
import { CaseStudy } from '@/components/landing/CaseStudy';
import { ClientsRow } from '@/components/landing/ClientsRow';
import { StatsBand } from '@/components/landing/StatsBand';
import { CertificationsCta } from '@/components/landing/CertificationsCta';
import { Faq } from '@/components/landing/Faq';
import { ContactStrip } from '@/components/landing/ContactStrip';

export default function LandingPage() {
  return (
    <>
      <ClientScripts />
      <Navigation />

      <main>
        <Hero />
        <TrustBar />
        <WhyChooseUs />
        <ServicesShowcase />
        <BenefitsStrip />
        <HowWeWork />
        <CaseStudy />
        <ClientsRow />
        <StatsBand />
        <CertificationsCta />
        <Faq />
        <ContactStrip />
      </main>

      <Footer />
    </>
  );
}
