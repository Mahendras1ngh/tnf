import { redirect } from 'next/navigation';

// Services section is marked "Coming Soon" — send any deep links back to the
// services landing page rather than hitting the database for detail content.
export default function ServiceDetailPage() {
  redirect('/services');
}
