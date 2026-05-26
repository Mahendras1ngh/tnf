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
} from 'lucide-react';
import Link from 'next/link';

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

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-display text-2xl mb-2">Dashboard</h1>
        <p className="text-[var(--ink-mute)]">
          Welcome back! Here&apos;s an overview of your content.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {statCards.map((stat) => {
          const Icon = stat.icon;
          return (
            <Link
              key={stat.label}
              href={stat.href}
              className="card-base hover:border-[var(--border-strong)] transition-colors"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={`p-2 rounded-lg ${stat.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
              </div>
              <p className="font-display text-2xl mb-1">{stat.value}</p>
              <p className="text-sm text-[var(--ink-mute)]">{stat.label}</p>
            </Link>
          );
        })}
      </div>

      {/* Recent Contacts */}
      <div className="card-base">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-display text-lg">Recent Contacts</h2>
          <Link
            href="/admin/contacts"
            className="text-sm text-[var(--gold)] hover:underline"
          >
            View all
          </Link>
        </div>

        {recentContacts.length === 0 ? (
          <p className="text-[var(--ink-mute)] text-center py-8">
            No contact submissions yet.
          </p>
        ) : (
          <div className="space-y-4">
            {recentContacts.map((contact) => (
              <div
                key={contact.id}
                className="flex items-start justify-between gap-4 p-4 bg-[var(--bg)] rounded-lg"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="font-medium truncate">{contact.name}</p>
                    {contact.status === 'NEW' && (
                      <span className="px-2 py-0.5 text-xs bg-red-500/10 text-red-400 rounded-full">
                        New
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-[var(--ink-mute)] truncate">
                    {contact.email}
                  </p>
                  <p className="text-sm text-[var(--ink-dim)] truncate mt-1">
                    {contact.message}
                  </p>
                </div>
                <div className="text-xs text-[var(--ink-dim)] whitespace-nowrap">
                  {new Date(contact.createdAt).toLocaleDateString()}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
