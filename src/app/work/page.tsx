'use client';

import { useState } from 'react';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { Play, ExternalLink } from 'lucide-react';

const categories = [
  'All',
  'Commercial',
  'Music Video',
  'Corporate',
  'Explainer',
  'Social',
];

const projects = [
  {
    id: 1,
    title: 'Tu Rahe Na Rahe',
    client: 'Jatinn Singh Rajput',
    category: 'Music Video',
    year: '2024',
    description: 'A soulful music video capturing raw emotions and cinematic visuals.',
    youtubeId: '1Xgw_mtOMWQ',
    featured: true,
  },
  {
    id: 2,
    title: 'Aaj Dil Udaas Hai',
    client: 'Jatinn Singh Rajput ft. Aman Malik',
    category: 'Music Video',
    year: '2024',
    description: 'Emotional storytelling through music and visual poetry.',
    youtubeId: '_XITAVNW0FM',
    featured: false,
  },
  {
    id: 3,
    title: 'Family Vacations',
    client: 'lendingplate',
    category: 'Commercial',
    year: '2024',
    description: 'Instant loan solutions for family vacations - making dreams accessible.',
    youtubeId: '1BaHmUmrGQU',
    featured: true,
  },
  {
    id: 4,
    title: 'Unlock Dreams - Raksha Bandhan',
    client: 'lendingplate',
    category: 'Commercial',
    year: '2024',
    description: 'A heartwarming campaign celebrating the bond of siblings.',
    youtubeId: 'KbvPsZ4hVtg',
    featured: true,
  },
  {
    id: 5,
    title: 'Khushiya Bina Rukawat',
    client: 'lendingplate',
    category: 'Commercial',
    year: '2024',
    description: 'Diwali special - spreading joy without interruptions.',
    youtubeId: 'nBGup9EyJHg',
    featured: false,
  },
  {
    id: 6,
    title: 'Improve Your CIBIL Score',
    client: 'lendingplate',
    category: 'Explainer',
    year: '2024',
    description: 'Educational content explaining CIBIL score improvement.',
    youtubeId: '28nf-Q7p0ow',
    featured: false,
  },
  {
    id: 7,
    title: 'Medical Emergency',
    client: 'lendingplate',
    category: 'Commercial',
    year: '2024',
    description: 'Quick financial solutions for urgent medical needs.',
    youtubeId: 'Td95vYCmAYo',
    featured: false,
  },
  {
    id: 8,
    title: 'Tastes, Delivered Intercity',
    client: 'Tastes2Plate',
    category: 'Commercial',
    year: '2024',
    description: 'Brand film showcasing intercity food delivery service.',
    youtubeId: 'wt7z6SN6B4c',
    featured: true,
  },
  {
    id: 9,
    title: 'Empower Your Dreams',
    client: 'lendingplate',
    category: 'Commercial',
    year: '2024',
    description: 'Quick personal loan solutions to empower aspirations.',
    youtubeId: 'wuhbejxwvbk',
    featured: false,
  },
  {
    id: 10,
    title: 'Instant Loan Made Easy',
    client: 'lendingplate',
    category: 'Commercial',
    year: '2024',
    description: 'Simplifying the loan process for everyday needs.',
    youtubeId: 'Kof-BSwBxAo',
    featured: false,
  },
  {
    id: 11,
    title: 'Food Delivery Reimagined',
    client: 'Tastes2Plate',
    category: 'Commercial',
    year: '2024',
    description: 'Brand video showcasing the food delivery experience.',
    youtubeId: 'iFCEtj-22JU',
    featured: false,
  },
  {
    id: 12,
    title: 'Easier Than Yoga',
    client: 'lendingplate',
    category: 'Social',
    year: '2024',
    description: 'Humorous take on how easy getting a loan can be.',
    youtubeId: 'UAtfA9eCLFE',
    featured: false,
  },
];

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <main className="relative">
      <Navigation />

      {/* Hero Section */}
      <section
        style={{
          position: 'relative',
          minHeight: '45vh',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          background: 'var(--bg)',
        }}
      >
        <div className="grain" />
        <div className="vignette" />

        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '80px 32px',
            width: '100%',
            position: 'relative',
            zIndex: 10,
            textAlign: 'center',
          }}
        >
          <div className="label" style={{ justifyContent: 'center', marginBottom: '20px' }}>
            Our Portfolio
          </div>
          <h1
            style={{
              fontFamily: '"Instrument Serif", Georgia, serif',
              fontSize: 'clamp(48px, 8vw, 100px)',
              lineHeight: 0.95,
              letterSpacing: '-0.02em',
              marginBottom: '24px',
              color: 'var(--ink)',
            }}
          >
            Selected <span className="italic">Works</span>
          </h1>
          <p
            style={{
              fontSize: '20px',
              lineHeight: 1.6,
              color: 'var(--ink-mute)',
              maxWidth: '550px',
              margin: '0 auto',
            }}
          >
            A curated collection of our best commercials, music videos, and brand films.
          </p>
        </div>
      </section>

      {/* Featured Project */}
      <section
        style={{
          position: 'relative',
          padding: '0 0 80px',
          background: 'var(--bg)',
        }}
      >
        <div
          style={{
            maxWidth: '1400px',
            margin: '0 auto',
            padding: '0 32px',
          }}
        >
          <div
            style={{
              position: 'relative',
              aspectRatio: '16/9',
              borderRadius: '16px',
              overflow: 'hidden',
              border: '1px solid var(--border)',
              background: '#000',
            }}
          >
            {playingVideo === featuredProjects[0].id ? (
              <iframe
                src={`https://www.youtube.com/embed/${featuredProjects[0].youtubeId}?autoplay=1`}
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  border: 'none',
                }}
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            ) : (
              <>
                <img
                  src={`https://img.youtube.com/vi/${featuredProjects[0].youtubeId}/maxresdefault.jpg`}
                  alt={featuredProjects[0].title}
                  onError={(e) => {
                    const img = e.currentTarget;
                    if (!img.dataset.fallback) {
                      img.dataset.fallback = '1';
                      img.src = `https://img.youtube.com/vi/${featuredProjects[0].youtubeId}/hqdefault.jpg`;
                    }
                  }}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 50%)',
                  }}
                />
                <button
                  onClick={() => setPlayingVideo(featuredProjects[0].id)}
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '100px',
                    height: '100px',
                    borderRadius: '50%',
                    border: '2px solid var(--gold)',
                    background: 'rgba(232, 197, 71, 0.1)',
                    backdropFilter: 'blur(8px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <Play
                    style={{
                      width: '32px',
                      height: '32px',
                      color: 'var(--gold)',
                      marginLeft: '4px',
                    }}
                    fill="var(--gold)"
                  />
                </button>
                <div
                  style={{
                    position: 'absolute',
                    bottom: '40px',
                    left: '40px',
                    right: '40px',
                  }}
                >
                  <span
                    style={{
                      fontFamily: '"Geist Mono", monospace',
                      fontSize: '11px',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color: 'var(--gold)',
                    }}
                  >
                    Featured • {featuredProjects[0].category}
                  </span>
                  <h2
                    style={{
                      fontFamily: '"Instrument Serif", Georgia, serif',
                      fontSize: 'clamp(28px, 4vw, 48px)',
                      color: '#fff',
                      marginTop: '8px',
                    }}
                  >
                    {featuredProjects[0].title}
                  </h2>
                  <p
                    style={{
                      fontSize: '16px',
                      color: 'rgba(255,255,255,0.7)',
                      marginTop: '8px',
                    }}
                  >
                    {featuredProjects[0].client}
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Filter & Grid */}
      <section
        style={{
          position: 'relative',
          padding: '80px 0 120px',
          background: 'var(--bg-2)',
        }}
      >
        <div className="grain" />

        <div
          style={{
            maxWidth: '1400px',
            margin: '0 auto',
            padding: '0 32px',
            position: 'relative',
            zIndex: 10,
          }}
        >
          {/* Filters */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '12px',
              flexWrap: 'wrap',
              marginBottom: '60px',
            }}
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                style={{
                  fontFamily: '"Geist Mono", monospace',
                  fontSize: '11px',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  padding: '12px 20px',
                  borderRadius: '999px',
                  border: '1px solid',
                  borderColor:
                    activeCategory === category ? 'var(--gold)' : 'var(--border)',
                  background:
                    activeCategory === category ? 'var(--gold)' : 'transparent',
                  color: activeCategory === category ? '#111' : 'var(--ink-mute)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))',
              gap: '32px',
            }}
          >
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                style={{
                  position: 'relative',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  border: '1px solid var(--border)',
                  background: 'var(--surface)',
                  transition: 'all 0.4s ease',
                }}
              >
                {/* Video Thumbnail */}
                <div
                  style={{
                    position: 'relative',
                    aspectRatio: '16/9',
                    background: '#000',
                    overflow: 'hidden',
                  }}
                >
                  {playingVideo === project.id ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${project.youtubeId}?autoplay=1`}
                      style={{
                        position: 'absolute',
                        inset: 0,
                        width: '100%',
                        height: '100%',
                        border: 'none',
                      }}
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                    />
                  ) : (
                    <>
                      <img
                        src={`https://img.youtube.com/vi/${project.youtubeId}/hqdefault.jpg`}
                        alt={project.title}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'transform 0.5s ease',
                        }}
                      />
                      <div
                        style={{
                          position: 'absolute',
                          inset: 0,
                          background:
                            'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 50%)',
                        }}
                      />
                      <button
                        onClick={() => setPlayingVideo(project.id)}
                        style={{
                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          transform: 'translate(-50%, -50%)',
                          width: '60px',
                          height: '60px',
                          borderRadius: '50%',
                          border: '1px solid rgba(255,255,255,0.3)',
                          background: 'rgba(0,0,0,0.5)',
                          backdropFilter: 'blur(4px)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease',
                        }}
                      >
                        <Play
                          style={{
                            width: '20px',
                            height: '20px',
                            color: '#fff',
                            marginLeft: '2px',
                          }}
                          fill="#fff"
                        />
                      </button>
                      <span
                        style={{
                          position: 'absolute',
                          top: '16px',
                          right: '16px',
                          fontFamily: '"Geist Mono", monospace',
                          fontSize: '10px',
                          letterSpacing: '0.1em',
                          textTransform: 'uppercase',
                          color: '#fff',
                          background: 'rgba(0,0,0,0.6)',
                          padding: '6px 10px',
                          borderRadius: '4px',
                        }}
                      >
                        {project.category}
                      </span>
                    </>
                  )}
                </div>

                {/* Project Info */}
                <div style={{ padding: '24px' }}>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      gap: '16px',
                    }}
                  >
                    <div>
                      <h3
                        style={{
                          fontFamily: '"Instrument Serif", Georgia, serif',
                          fontSize: '22px',
                          color: 'var(--ink)',
                          marginBottom: '6px',
                        }}
                      >
                        {project.title}
                      </h3>
                      <p
                        style={{
                          fontFamily: '"Geist Mono", monospace',
                          fontSize: '11px',
                          letterSpacing: '0.1em',
                          textTransform: 'uppercase',
                          color: 'var(--gold)',
                        }}
                      >
                        {project.client}
                      </p>
                    </div>
                    <a
                      href={`https://youtube.com/watch?v=${project.youtubeId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        border: '1px solid var(--border)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--ink-mute)',
                        transition: 'all 0.3s ease',
                        flexShrink: 0,
                      }}
                    >
                      <ExternalLink style={{ width: '14px', height: '14px' }} />
                    </a>
                  </div>
                  <p
                    style={{
                      fontSize: '14px',
                      lineHeight: 1.6,
                      color: 'var(--ink-mute)',
                      marginTop: '12px',
                    }}
                  >
                    {project.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        style={{
          position: 'relative',
          padding: '100px 0',
          background: 'var(--bg)',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            maxWidth: '700px',
            margin: '0 auto',
            padding: '0 32px',
          }}
        >
          <h2
            style={{
              fontFamily: '"Instrument Serif", Georgia, serif',
              fontSize: 'clamp(36px, 5vw, 56px)',
              lineHeight: 1.05,
              marginBottom: '20px',
              color: 'var(--ink)',
            }}
          >
            Have a Project in <span className="italic">Mind?</span>
          </h2>
          <p
            style={{
              fontSize: '18px',
              lineHeight: 1.6,
              color: 'var(--ink-mute)',
              marginBottom: '40px',
            }}
          >
            Let's discuss how we can bring your vision to life with compelling video content.
          </p>
          <div
            style={{
              display: 'flex',
              gap: '16px',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <a href="/contact" className="btn-gold">
              Start a Project
            </a>
            <a href="tel:+919888715815" className="btn btn-ghost">
              Call: +91 9888 715 815
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
