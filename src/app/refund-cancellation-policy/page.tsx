import { LegalPage } from '@/components/layout/LegalPage';
import { CONTACT } from '@/lib/site';

export const metadata = {
  title: 'Refund & Cancellation Policy',
  description:
    'Our cancellation terms, refund eligibility, and how refunds are processed at The Next Frame.',
  alternates: { canonical: '/refund-cancellation-policy' },
};

export default function RefundCancellationPolicyPage() {
  return (
    <LegalPage
      title='Cancellation & Refund Policy'
      intro='Please review how cancellations and refunds are handled for projects undertaken by The Next Frame.'
    >
      <h2>Project Cancellation (by client)</h2>
      <p>
        If a project is cancelled after confirmation but before work has begun, a
        partial refund may be issued (after deducting any advance planning or
        consultation charges). Once work has started, <strong>no refunds</strong>{' '}
        will be issued.
      </p>

      <h2>Project Delays or Abandonment</h2>
      <p>
        If the client becomes unresponsive or delays deliverables for over 30
        days, the project may be considered abandoned, and no refund will be
        provided.
      </p>

      <h2>Refund for Dissatisfaction</h2>
      <p>
        We provide multiple revision rounds within the agreed scope. However,
        creative preferences are subjective — <strong>refunds are not provided</strong>{' '}
        for dissatisfaction after delivery unless the issue is a result of
        non-compliance with the agreed scope.
      </p>

      <h2>Force Majeure</h2>
      <p>
        No refunds will be issued for delays or cancellations caused by events
        beyond our control (natural disasters, illness, etc.).
      </p>

      <h2>Mode of Refund</h2>
      <p>
        If applicable, refunds will be processed within{' '}
        <strong>7–10 working days</strong> via the original mode of payment.
      </p>

      <h2>Contact</h2>
      <p>
        For clarification, reach us at{' '}
        <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>.
      </p>
    </LegalPage>
  );
}
