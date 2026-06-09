'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Film,
  Briefcase,
  FileText,
  Users,
  MessageSquare,
  HelpCircle,
  Mail,
  Settings,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

const navItems = [
  { href: '/admin/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { href: '/admin/services', icon: Film, label: 'Services' },
  { href: '/admin/portfolio', icon: Briefcase, label: 'Portfolio' },
  { href: '/admin/blog', icon: FileText, label: 'Blog' },
  { href: '/admin/team', icon: Users, label: 'Team' },
  { href: '/admin/testimonials', icon: MessageSquare, label: 'Testimonials' },
  { href: '/admin/faqs', icon: HelpCircle, label: 'FAQs' },
  { href: '/admin/contacts', icon: Mail, label: 'Contacts' },
  { href: '/admin/settings', icon: Settings, label: 'Settings' },
];

interface AdminSidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

export function AdminSidebar({ collapsed, onToggle }: AdminSidebarProps) {
  const pathname = usePathname();

  return (
    <aside
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        height: '100vh',
        width: collapsed ? '80px' : '256px',
        background: 'var(--bg-2)',
        borderRight: '1px solid var(--border)',
        zIndex: 50,
        transition: 'width 0.3s ease',
        display: 'none',
      }}
      className="lg:!block"
    >
      {/* Logo */}
      <div
        style={{
          height: '64px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 16px',
          borderBottom: '1px solid var(--border)',
        }}
      >
        {!collapsed && (
          <Link
            href="/admin/dashboard"
            style={{
              fontFamily: '"Instrument Serif", Georgia, serif',
              fontSize: '20px',
              color: 'var(--ink)',
              textDecoration: 'none',
            }}
          >
            TNF Admin
          </Link>
        )}
        <button
          onClick={onToggle}
          style={{
            padding: '8px',
            background: 'transparent',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            color: 'var(--ink-mute)',
            marginLeft: collapsed ? 'auto' : '0',
            marginRight: collapsed ? 'auto' : '0',
            transition: 'background 0.2s',
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.background = 'var(--bg)')
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.background = 'transparent')
          }
        >
          {collapsed ? (
            <ChevronRight style={{ width: '20px', height: '20px' }} />
          ) : (
            <ChevronLeft style={{ width: '20px', height: '20px' }} />
          )}
        </button>
      </div>

      {/* Navigation */}
      <nav style={{ padding: '16px' }}>
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: collapsed ? '10px' : '10px 12px',
                borderRadius: '8px',
                marginBottom: '4px',
                textDecoration: 'none',
                transition: 'all 0.2s',
                background: isActive ? 'var(--gold)' : 'transparent',
                color: isActive ? '#111' : 'var(--ink-mute)',
                justifyContent: collapsed ? 'center' : 'flex-start',
              }}
              onMouseEnter={(e) => {
                if (!isActive) {
                  e.currentTarget.style.background = 'var(--bg)';
                  e.currentTarget.style.color = 'var(--ink)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = 'var(--ink-mute)';
                }
              }}
            >
              <Icon
                style={{
                  width: '20px',
                  height: '20px',
                  flexShrink: 0,
                }}
              />
              {!collapsed && (
                <span style={{ fontSize: '14px' }}>{item.label}</span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      {!collapsed && (
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            padding: '16px',
            borderTop: '1px solid var(--border)',
          }}
        >
          <Link
            href="/"
            target="_blank"
            style={{
              fontSize: '13px',
              color: 'var(--ink-dim)',
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold)')}
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = 'var(--ink-dim)')
            }
          >
            View Website →
          </Link>
        </div>
      )}
    </aside>
  );
}
