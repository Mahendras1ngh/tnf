import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { prisma } from '@/lib/prisma';

// ISR: static + hourly refresh (never force-dynamic — see /services rationale).
export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Journal | The Next Frame',
  description: 'Insights, behind-the-scenes stories, and industry knowledge from The Next Frame video production studio.',
  alternates: { canonical: '/journal' },
  openGraph: {
    title: 'Journal | The Next Frame',
    description: 'Insights, behind-the-scenes stories, and industry knowledge from The Next Frame video production studio.',
    type: 'website',
  },
};

async function getBlogPosts() {
  try {
    return await prisma.blogPost.findMany({
      where: {
        published: true,
      },
      orderBy: {
        publishedAt: 'desc',
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
  } catch (error) {
    console.error('Failed to load blog posts:', error);
    return [];
  }
}

export default async function JournalPage() {
  const posts = await getBlogPosts();

  const featuredPost = posts.find((post) => post.featured);
  const regularPosts = posts.filter((post) => !post.featured || post.id !== featuredPost?.id);

  return (
    <main className='relative'>
      <Navigation />

      {/* Hero Section */}
      <section
        className='relative min-h-[40vh] flex items-center overflow-hidden'
        style={{ background: 'var(--bg)' }}
      >
        <div className='grain' />
        <div className='vignette' />

        <div className='max-w-[1100px] mx-auto px-8 relative z-10 py-20 text-center'>
          <div className='label mb-6' style={{ justifyContent: 'center' }}>
            Journal
          </div>
          <h1 className='display-lg mb-6'>
            Stories, Insights & <span className='italic'>Behind the Lens</span>
          </h1>
          <p className='lede mx-auto' style={{ maxWidth: '620px' }}>
            Dive into the world of video production. From industry trends to
            behind-the-scenes stories, we share everything we learn along the way.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section
          className='relative py-16 md:py-24'
          style={{ background: 'var(--bg-2)' }}
        >
          <div className='grain' />
          <div className='max-w-[1100px] mx-auto px-8 relative z-10'>
            <Link
              href={`/journal/${featuredPost.slug}`}
              className='group block'
            >
              <article className='grid md:grid-cols-2 gap-8 md:gap-12 items-center'>
                <div
                  className='relative aspect-[16/10] rounded-xl overflow-hidden border'
                  style={{ borderColor: 'var(--border)' }}
                >
                  {featuredPost.coverImage ? (
                    <Image
                      src={featuredPost.coverImage}
                      alt={featuredPost.title}
                      fill
                      className='object-cover transition-transform duration-500 group-hover:scale-105'
                      priority
                    />
                  ) : (
                    <div
                      className='w-full h-full'
                      style={{ background: 'var(--surface)' }}
                    />
                  )}
                  <div className='absolute top-4 left-4'>
                    <span className='chip' style={{ background: 'var(--gold)', color: 'var(--bg)' }}>
                      Featured
                    </span>
                  </div>
                </div>
                <div>
                  <div className='flex items-center gap-3 mb-4'>
                    <span
                      className='chip'
                      style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
                    >
                      {featuredPost.category}
                    </span>
                    <span
                      className='text-sm'
                      style={{ color: 'var(--ink-mute)', fontFamily: '"Geist Mono", monospace' }}
                    >
                      {featuredPost.readTime} min read
                    </span>
                  </div>
                  <h2
                    className='text-3xl md:text-4xl font-display mb-4 transition-colors duration-300 group-hover:text-[var(--gold)]'
                    style={{ color: 'var(--ink)', lineHeight: 1.2 }}
                  >
                    {featuredPost.title}
                  </h2>
                  <p
                    className='text-lg mb-6'
                    style={{ color: 'var(--ink-mute)', lineHeight: 1.6 }}
                  >
                    {featuredPost.excerpt}
                  </p>
                  <div className='flex items-center gap-4'>
                    {featuredPost.author?.image && (
                      <Image
                        src={featuredPost.author.image}
                        alt={featuredPost.author.name || 'Author'}
                        width={40}
                        height={40}
                        className='rounded-full'
                      />
                    )}
                    <div>
                      <div className='text-sm font-medium' style={{ color: 'var(--ink)' }}>
                        {featuredPost.author?.name || 'The Next Frame'}
                      </div>
                      <div
                        className='text-xs'
                        style={{ color: 'var(--ink-mute)', fontFamily: '"Geist Mono", monospace' }}
                      >
                        {featuredPost.publishedAt
                          ? new Date(featuredPost.publishedAt).toLocaleDateString('en-US', {
                              month: 'long',
                              day: 'numeric',
                              year: 'numeric',
                            })
                          : 'Draft'}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className='section-pad' style={{ background: 'var(--bg)' }}>
        <div className='max-w-[1100px] mx-auto px-8'>
          {regularPosts.length > 0 ? (
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {regularPosts.map((post) => (
                <Link
                  key={post.id}
                  href={`/journal/${post.slug}`}
                  className='group block'
                >
                  <article>
                    <div
                      className='relative aspect-[16/10] rounded-lg overflow-hidden border mb-5'
                      style={{ borderColor: 'var(--border)' }}
                    >
                      {post.coverImage ? (
                        <Image
                          src={post.coverImage}
                          alt={post.title}
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
                    <div className='flex items-center gap-3 mb-3'>
                      <span
                        className='chip text-xs'
                        style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
                      >
                        {post.category}
                      </span>
                      <span
                        className='text-xs'
                        style={{ color: 'var(--ink-mute)', fontFamily: '"Geist Mono", monospace' }}
                      >
                        {post.readTime} min
                      </span>
                    </div>
                    <h3
                      className='text-xl font-display mb-2 transition-colors duration-300 group-hover:text-[var(--gold)]'
                      style={{ color: 'var(--ink)', lineHeight: 1.3 }}
                    >
                      {post.title}
                    </h3>
                    <p
                      className='text-sm line-clamp-2'
                      style={{ color: 'var(--ink-mute)', lineHeight: 1.6 }}
                    >
                      {post.excerpt}
                    </p>
                    <div
                      className='mt-4 text-xs'
                      style={{ color: 'var(--ink-dim)', fontFamily: '"Geist Mono", monospace' }}
                    >
                      {post.publishedAt
                        ? new Date(post.publishedAt).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric',
                          })
                        : 'Draft'}
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          ) : (
            <div className='text-center py-20'>
              <p style={{ color: 'var(--ink-mute)' }}>
                No posts yet. Check back soon!
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
