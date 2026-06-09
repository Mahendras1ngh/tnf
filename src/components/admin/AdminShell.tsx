'use client';

import { useState } from 'react';
import { AdminSidebar } from './AdminSidebar';
import { AdminHeader } from './AdminHeader';

interface AdminShellProps {
  user: {
    name?: string | null;
    email?: string | null;
    image?: string | null;
  };
  children: React.ReactNode;
}

export function AdminShell({ user, children }: AdminShellProps) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="admin-shell" style={{ minHeight: '100vh', background: 'var(--bg)' }}>
      <AdminSidebar collapsed={collapsed} onToggle={() => setCollapsed((c) => !c)} />
      <div
        style={{ transition: 'margin-left 0.3s ease' }}
        className={collapsed ? 'lg:ml-20' : 'lg:ml-64'}
      >
        <AdminHeader user={user} />
        <main style={{ padding: '24px' }}>{children}</main>
      </div>
    </div>
  );
}
