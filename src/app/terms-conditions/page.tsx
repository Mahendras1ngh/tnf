import { LegalPage } from '@/components/layout/LegalPage';
import { CONTACT } from '@/lib/site';

export const metadata = {
  title: 'Terms & Conditions',
  description:
    'The terms governing your use of The Next Frame website and engagement with our services.',
  alternates: { canonical: '/terms-conditions' },
};

export default function TermsConditionsPage() {
  return (
    <LegalPage
      title='Terms & Conditions'
      intro='These terms govern your use of the The Next Frame website and your engagement with our services.'
    >
      <h2>1. Acceptance of Terms</h2>
      <p>
        By using our website or engaging with our services, you acknowledge that
        you have read, understood, and agree to be legally bound by these terms.
      </p>

      <h2>2. Services</h2>
      <p>
        TNF offers creative services including video production, branding,
        advertising, and content development, all contingent on availability and
        project agreements.
      </p>

      <h2>3. Intellectual Property</h2>
      <p>
        All content on this website — including text, images, videos, designs,
        logos, and graphics — is the property of The Next Frame unless otherwise
        stated.
      </p>

      <h2>4. User Conduct</h2>
      <p>
        Users must refrain from posting false information, attempting to disrupt
        the site, or violating laws. The company reserves termination rights for
        violations.
      </p>

      <h2>5. Payment & Project Terms</h2>
      <p>
        Specific payment terms, timelines, and deliverables are established
        through separate service agreements that supersede general website terms.
      </p>

      <h2>6. Third-Party Links</h2>
      <p>
        Our website may contain links to external websites for your convenience.
        We are not responsible for the content, privacy practices, or terms of
        those third-party websites.
      </p>

      <h2>7. Limitation of Liability</h2>
      <p>
        The company disclaims liability for damages arising from website use or
        content reliance.
      </p>

      <h2>8. Termination</h2>
      <p>
        We reserve the right to suspend or terminate access to our website or
        services at any time, without notice, for any reason we believe violates
        these terms.
      </p>

      <h2>9. Changes to Terms</h2>
      <p>
        Updates will be posted with revised effective dates; continued site use
        indicates acceptance.
      </p>

      <h2>10. Contact</h2>
      <p>
        Questions? Reach us at{' '}
        <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>.
      </p>
    </LegalPage>
  );
}
