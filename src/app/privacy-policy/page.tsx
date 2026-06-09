import { LegalPage } from '@/components/layout/LegalPage';
import { CONTACT } from '@/lib/site';

export const metadata = {
  title: 'Privacy Policy',
  description:
    'How The Next Frame collects, uses, and safeguards the personal information you share with us.',
  alternates: { canonical: '/privacy-policy' },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title='Privacy Policy'
      intro='At The Next Frame (TNF), we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard the information you provide when you visit our website or interact with our services.'
    >
      <h2>1. Information We Collect</h2>
      <p>We may collect the following types of information:</p>
      <ul>
        <li>
          <strong>Personal Information:</strong> Name, email address, phone
          number, company name, and any other details you voluntarily submit via
          forms or inquiries.
        </li>
        <li>
          <strong>Usage Data:</strong> IP address, browser type, pages visited,
          time spent, and other analytics data.
        </li>
        <li>
          <strong>Cookies:</strong> We use cookies to enhance your experience and
          track website performance.
        </li>
      </ul>

      <h2>2. How We Use Your Information</h2>
      <p>We may use your information to:</p>
      <ul>
        <li>Respond to your queries and requests</li>
        <li>Provide updates about our services</li>
        <li>Improve our website and user experience</li>
        <li>Send marketing or promotional materials (with your consent)</li>
        <li>Analyze traffic and website usage</li>
      </ul>

      <h2>3. Information Sharing</h2>
      <p>
        We do <strong>not sell or rent</strong> your personal information. We may
        share it with trusted partners or service providers who assist us in
        operating the website or delivering services — always under strict
        confidentiality.
      </p>

      <h2>4. Data Protection</h2>
      <p>
        We take appropriate security measures to protect your data from
        unauthorized access, alteration, or disclosure.
      </p>

      <h2>5. Your Rights</h2>
      <p>You can:</p>
      <ul>
        <li>Request access to your data</li>
        <li>Ask us to correct or delete your personal information</li>
        <li>Opt out of promotional communications</li>
      </ul>
      <p>
        Simply contact us at{' '}
        <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a> to make any such
        request.
      </p>

      <h2>6. External Links</h2>
      <p>
        Our website may contain links to third-party sites. We are not
        responsible for their privacy practices. Please review their policies
        before providing any personal information.
      </p>

      <h2>7. Updates to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Any changes will be
        posted on this page with an updated effective date.
      </p>
    </LegalPage>
  );
}
