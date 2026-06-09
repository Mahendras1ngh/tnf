import { prisma } from '@/lib/prisma';
import {
  Film,
  Briefcase,
  FileText,
  Users,
  MessageSquare,
  Mail,
  HelpCircle,
  TrendingUp,
  Plus,
  ExternalLink,
  ArrowRight,
} from 'lucide-react';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

async function getStats() {
  const [
    servicesCount,
    portfolioCount,
    blogCount,
    teamCount,
    testimonialsCount,
    faqsCount,
    newContactsCount,
    totalContactsCount,
  ] = await Promise.all([
    prisma.service.count({ where: { isActive: true } }),
    prisma.portfolioItem.count({ where: { isActive: true } }),
    prisma.blogPost.count({ where: { published: true } }),
    prisma.teamMember.count({ where: { isActive: true } }),
    prisma.testimonial.count({ where: { isActive: true } }),
    prisma.fAQ.count({ where: { isActive: true } }),
    prisma.contactSubmission.count({ where: { status: 'NEW' } }),
    prisma.contactSubmission.count(),
  ]);

  return {
    servicesCount,
    portfolioCount,
    blogCount,
    teamCount,
    testimonialsCount,
    faqsCount,
    newContactsCount,
    totalContactsCount,
  };
}

async function getRecentContacts() {
  return prisma.contactSubmission.findMany({
    orderBy: { createdAt: 'desc' },
    take: 5,
  });
}

export default async function DashboardPage() {
  const stats = await getStats();
  const recentContacts = await getRecentContacts();

  const statCards = [
    {
      label: 'Services',
      value: stats.servicesCount,
      icon: Film,
      href: '/admin/services',
      color: 'bg-blue-500/10 text-blue-400',
    },
    {
      label: 'Portfolio Items',
      value: stats.portfolioCount,
      icon: Briefcase,
      href: '/admin/portfolio',
      color: 'bg-purple-500/10 text-purple-400',
    },
    {
      label: 'Blog Posts',
      value: stats.blogCount,
      icon: FileText,
      href: '/admin/blog',
      color: 'bg-green-500/10 text-green-400',
    },
    {
      label: 'Team Members',
      value: stats.teamCount,
      icon: Users,
      href: '/admin/team',
      color: 'bg-orange-500/10 text-orange-400',
    },
    {
      label: 'Testimonials',
      value: stats.testimonialsCount,
      icon: MessageSquare,
      href: '/admin/testimonials',
      color: 'bg-pink-500/10 text-pink-400',
    },
    {
      label: 'FAQs',
      value: stats.faqsCount,
      icon: HelpCircle,
      href: '/admin/faqs',
      color: 'bg-cyan-500/10 text-cyan-400',
    },
    {
      label: 'New Contacts',
      value: stats.newContactsCount,
      icon: Mail,
      href: '/admin/contacts',
      color: 'bg-red-500/10 text-red-400',
    },
    {
      label: 'Total Contacts',
      value: stats.totalContactsCount,
      icon: TrendingUp,
      href: '/admin/contacts',
      color: 'bg-yellow-500/10 text-yellow-400',
    },
  ];

  const quickActions = [
    { label: 'Add Service', href: '/admin/services/new', icon: Plus },
    { label: 'Manage Services', href: '/admin/services', icon: Film },
    { label: 'View Contacts', href: '/admin/contacts', icon: Mail },
    { label: 'Open Website', href: '/', icon: ExternalLink, external: true },
  ];

  return (
    <div className='space-y-8'>
      <div>
        <h1 className='admin-page-title'>Dashboard</h1>
        <p className='admin-page-sub'>
          Welcome back! Here&apos;s an overview of your content.
        </p>
      </div>

      {/* Stats Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
        {statCards.map((stat) => {
          const Icon = stat.icon;
          return (
            <Link
              key={stat.label}
              href={stat.href}
              className='admin-card group !p-5 hover:border-[var(--border-strong)] transition-colors'
            >
              <div className='flex items-start justify-between mb-5'>
                <div className={`p-2.5 rounded-xl ${stat.color}`}>
                  <Icon className='w-5 h-5' />
                </div>
                <ArrowRight className='w-4 h-4 text-[var(--ink-dim)] opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all' />
              </div>
              <p className='font-display text-[34px] leading-none mb-2 text-[var(--ink)]'>
                {stat.value}
              </p>
              <p className='text-sm text-[var(--ink-mute)]'>{stat.label}</p>
            </Link>
          );
        })}
      </div>

      {/* Lower section: contacts + quick actions */}
      <div className='grid lg:grid-cols-3 gap-6 items-start'>
        {/* Recent Contacts */}
        <div className='admin-card lg:col-span-2 !p-0 overflow-hidden'>
          <div className='flex items-center justify-between px-6 py-5 border-b border-[var(--border)]'>
            <h2 className='admin-section-title'>Recent Contacts</h2>
            <Link
              href='/admin/contacts'
              className='inline-flex items-center gap-1 text-sm text-[var(--gold)] hover:gap-2 transition-all'
            >
              View all <ArrowRight className='w-3.5 h-3.5' />
            </Link>
          </div>

          {recentContacts.length === 0 ? (
            <p className='text-[var(--ink-mute)] text-center py-16'>
              No contact submissions yet.
            </p>
          ) : (
            <div className='divide-y divide-[var(--border)]'>
              {recentContacts.map((contact) => (
                <div
                  key={contact.id}
                  className='flex items-start justify-between gap-4 px-6 py-4 hover:bg-[var(--bg)] transition-colors'
                >
                  <div className='flex items-start gap-3 flex-1 min-w-0'>
                    <div className='w-9 h-9 rounded-full bg-[var(--bg)] border border-[var(--border)] flex items-center justify-center flex-shrink-0 text-sm font-medium text-[var(--ink-mute)]'>
                      {contact.name.charAt(0).toUpperCase()}
                    </div>
                    <div className='flex-1 min-w-0'>
                      <div className='flex items-center gap-2 mb-0.5'>
                        <p className='font-medium truncate text-[var(--ink)]'>
                          {contact.name}
                        </p>
                        {contact.status === 'NEW' && (
                          <span className='px-2 py-0.5 text-[10px] bg-red-500/10 text-red-400 rounded-full uppercase tracking-wide'>
                            New
                          </span>
                        )}
                      </div>
                      <p className='text-sm text-[var(--ink-mute)] truncate'>
                        {contact.email}
                      </p>
                      <p className='text-sm text-[var(--ink-dim)] truncate mt-1'>
                        {contact.message}
                      </p>
                    </div>
                  </div>
                  <div className='text-xs text-[var(--ink-dim)] whitespace-nowrap font-mono'>
                    {new Date(contact.createdAt).toLocaleDateString()}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Quick Actions */}
        <div className='admin-card !p-0 overflow-hidden'>
          <div className='px-6 py-5 border-b border-[var(--border)]'>
            <h2 className='admin-section-title'>Quick Actions</h2>
          </div>
          <div className='divide-y divide-[var(--border)]'>
            {quickActions.map((action) => {
              const Icon = action.icon;
              return (
                <Link
                  key={action.label}
                  href={action.href}
                  target={action.external ? '_blank' : undefined}
                  className='flex items-center gap-3 px-6 py-4 hover:bg-[var(--bg)] transition-colors group'
                >
                  <span className='w-9 h-9 rounded-lg bg-[var(--bg)] border border-[var(--border)] flex items-center justify-center flex-shrink-0 group-hover:border-[var(--gold)] transition-colors'>
                    <Icon className='w-4 h-4 text-[var(--gold)]' />
                  </span>
                  <span className='text-sm text-[var(--ink)] flex-1'>
                    {action.label}
                  </span>
                  <ArrowRight className='w-4 h-4 text-[var(--ink-dim)] opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all' />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
