import { redirect } from 'next/navigation';

// Journal section is marked "Coming Soon" — send any deep links back to the
// journal landing page rather than hitting the database for post content.
export default function JournalPostPage() {
  redirect('/journal');
}
