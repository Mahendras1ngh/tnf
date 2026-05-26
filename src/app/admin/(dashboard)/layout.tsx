import { redirect } from 'next/navigation';
import { auth } from '@/lib/auth';
import { AdminSidebar } from '@/components/admin/AdminSidebar';
import { AdminHeader } from '@/components/admin/AdminHeader';

export default async function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session?.user) {
    redirect('/admin/login');
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'var(--bg)',
        paddingTop: 0,
      }}
    >
      <AdminSidebar />
      <div
        style={{
          marginLeft: 0,
          transition: 'margin-left 0.3s ease',
        }}
        className="lg:ml-64"
      >
        <AdminHeader user={session.user} />
        <main style={{ padding: '24px' }}>{children}</main>
      </div>
    </div>
  );
}
