import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { prisma } from '@/lib/prisma';
import { ArrowLeft, Clock, Calendar, User } from 'lucide-react';

export const dynamic = 'force-dynamic';

interface Props {
  params: Promise<{ slug: string }>;
}

async function getBlogPost(slug: string) {
  const post = await prisma.blogPost.findUnique({
    where: {
      slug,
      published: true,
    },
    include: {
      author: {
        select: {
          name: true,
          image: true,
        },
      },
    },
  });
  return post;
}

async function getRelatedPosts(currentSlug: string, category: string) {
  const posts = await prisma.blogPost.findMany({
    where: {
      published: true,
      slug: { not: currentSlug },
      category,
    },
    take: 3,
    orderBy: {
      publishedAt: 'desc',
    },
  });
  return posts;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    return {
      title: 'Post Not Found | The Next Frame',
    };
  }

  return {
    title: `${post.title} | Journal | The Next Frame`,
    description: post.excerpt || post.title,
    openGraph: {
      title: post.title,
      description: post.excerpt || post.title,
      type: 'article',
      publishedTime: post.publishedAt?.toISOString(),
      authors: post.author?.name ? [post.author.name] : undefined,
      images: post.coverImage ? [post.coverImage] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt || post.title,
      images: post.coverImage ? [post.coverImage] : undefined,
    },
  };
}

// Generate static params for SSG (optional - for better performance)
export async function generateStaticParams() {
  const posts = await prisma.blogPost.findMany({
    where: { published: true },
    select: { slug: true },
  });

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = await getRelatedPosts(slug, post.category || '');

  // Simple markdown-like rendering (basic)
  const renderContent = (content: string) => {
    return content
      .split('\n\n')
      .map((paragraph, index) => {
        // Headers
        if (paragraph.startsWith('# ')) {
          return (
            <h1
              key={index}
              className='text-4xl font-display mb-6 mt-12'
              style={{ color: 'var(--ink)' }}
            >
              {paragraph.replace('# ', '')}
            </h1>
          );
        }
        if (paragraph.startsWith('## ')) {
          return (
            <h2
              key={index}
              className='text-2xl font-display mb-4 mt-10'
              style={{ color: 'var(--ink)' }}
            >
              {paragraph.replace('## ', '')}
            </h2>
          );
        }
        if (paragraph.startsWith('### ')) {
          return (
            <h3
              key={index}
              className='text-xl font-display mb-3 mt-8'
              style={{ color: 'var(--ink)' }}
            >
              {paragraph.replace('### ', '')}
            </h3>
          );
        }

        // Lists
        if (paragraph.includes('\n- ') || paragraph.startsWith('- ')) {
          const items = paragraph.split('\n').filter((line) => line.startsWith('- '));
          return (
            <ul
              key={index}
              className='list-disc pl-6 mb-6 space-y-2'
              style={{ color: 'var(--ink-mute)' }}
            >
              {items.map((item, i) => (
                <li key={i}>{item.replace('- ', '')}</li>
              ))}
            </ul>
          );
        }

        // Numbered lists
        if (paragraph.match(/^\d+\./)) {
          const items = paragraph.split('\n').filter((line) => line.match(/^\d+\./));
          return (
            <ol
              key={index}
              className='list-decimal pl-6 mb-6 space-y-2'
              style={{ color: 'var(--ink-mute)' }}
            >
              {items.map((item, i) => (
                <li key={i}>{item.replace(/^\d+\.\s*/, '')}</li>
              ))}
            </ol>
          );
        }

        // Bold text rendering
        const renderBoldText = (text: string) => {
          const parts = text.split(/\*\*(.*?)\*\*/g);
          return parts.map((part, i) =>
            i % 2 === 1 ? (
              <strong key={i} style={{ color: 'var(--ink)' }}>
                {part}
              </strong>
            ) : (
              part
            )
          );
        };

        // Regular paragraphs
        return (
          <p
            key={index}
            className='text-lg leading-relaxed mb-6'
            style={{ color: 'var(--ink-mute)' }}
          >
            {renderBoldText(paragraph)}
          </p>
        );
      });
  };

  return (
    <main className='relative'>
      <Navigation />

      {/* Article Header */}
      <article>
        <header
          className='relative py-20 md:py-28 overflow-hidden'
          style={{ background: 'var(--bg-2)' }}
        >
          <div className='grain' />
          <div className='container-tnf relative z-10'>
            <Link
              href='/journal'
              className='inline-flex items-center gap-2 mb-8 text-sm transition-colors hover:text-[var(--gold)]'
              style={{ color: 'var(--ink-mute)' }}
            >
              <ArrowLeft className='w-4 h-4' />
              Back to Journal
            </Link>

            <div className='max-w-3xl'>
              <div className='flex items-center gap-3 mb-6'>
                {post.category && (
                  <span
                    className='chip'
                    style={{ background: 'var(--gold)', color: 'var(--bg)' }}
                  >
                    {post.category}
                  </span>
                )}
                {post.tags?.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className='chip'
                    style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h1
                className='display-lg mb-6'
                style={{ lineHeight: 1.15 }}
              >
                {post.title}
              </h1>

              {post.excerpt && (
                <p
                  className='text-xl mb-8'
                  style={{ color: 'var(--ink-mute)', lineHeight: 1.6 }}
                >
                  {post.excerpt}
                </p>
              )}

              <div
                className='flex flex-wrap items-center gap-6 pt-6 border-t'
                style={{ borderColor: 'var(--border)' }}
              >
                <div className='flex items-center gap-3'>
                  {post.author?.image ? (
                    <Image
                      src={post.author.image}
                      alt={post.author.name || 'Author'}
                      width={44}
                      height={44}
                      className='rounded-full'
                    />
                  ) : (
                    <div
                      className='w-11 h-11 rounded-full flex items-center justify-center'
                      style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
                    >
                      <User className='w-5 h-5' style={{ color: 'var(--ink-mute)' }} />
                    </div>
                  )}
                  <div>
                    <div className='font-medium' style={{ color: 'var(--ink)' }}>
                      {post.author?.name || 'The Next Frame'}
                    </div>
                    <div
                      className='text-xs'
                      style={{ color: 'var(--ink-dim)', fontFamily: '"Geist Mono", monospace' }}
                    >
                      Author
                    </div>
                  </div>
                </div>

                <div className='flex items-center gap-2' style={{ color: 'var(--ink-mute)' }}>
                  <Calendar className='w-4 h-4' />
                  <span className='text-sm'>
                    {post.publishedAt
                      ? new Date(post.publishedAt).toLocaleDateString('en-US', {
                          month: 'long',
                          day: 'numeric',
                          year: 'numeric',
                        })
                      : 'Draft'}
                  </span>
                </div>

                <div className='flex items-center gap-2' style={{ color: 'var(--ink-mute)' }}>
                  <Clock className='w-4 h-4' />
                  <span className='text-sm'>{post.readTime} min read</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Cover Image */}
        {post.coverImage && (
          <div className='container-tnf -mt-8 relative z-20'>
            <div
              className='relative aspect-[21/9] rounded-xl overflow-hidden border'
              style={{ borderColor: 'var(--border)' }}
            >
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className='object-cover'
                priority
              />
            </div>
          </div>
        )}

        {/* Content */}
        <div className='section-pad' style={{ background: 'var(--bg)' }}>
          <div className='container-tnf'>
            <div className='max-w-3xl mx-auto prose-custom'>
              {post.content && renderContent(post.content)}
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section
          className='section-pad border-t'
          style={{ background: 'var(--bg-2)', borderColor: 'var(--border)' }}
        >
          <div className='container-tnf'>
            <h2 className='text-2xl font-display mb-8' style={{ color: 'var(--ink)' }}>
              Related Articles
            </h2>
            <div className='grid md:grid-cols-3 gap-8'>
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  href={`/journal/${relatedPost.slug}`}
                  className='group block'
                >
                  <article>
                    <div
                      className='relative aspect-[16/10] rounded-lg overflow-hidden border mb-4'
                      style={{ borderColor: 'var(--border)' }}
                    >
                      {relatedPost.coverImage ? (
                        <Image
                          src={relatedPost.coverImage}
                          alt={relatedPost.title}
                          fill
                          className='object-cover transition-transform duration-500 group-hover:scale-105'
                        />
                      ) : (
                        <div
                          className='w-full h-full'
                          style={{ background: 'var(--surface)' }}
                        />
                      )}
                    </div>
                    <h3
                      className='text-lg font-display transition-colors duration-300 group-hover:text-[var(--gold)]'
                      style={{ color: 'var(--ink)', lineHeight: 1.3 }}
                    >
                      {relatedPost.title}
                    </h3>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
