import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import Image from 'next/image';
import { Award, Users, Video, Target } from 'lucide-react';

export const metadata = {
  title: 'About Us',
  description:
    'Learn about The Next Frame, our story, philosophy, and the team behind award-winning video production.',
  alternates: { canonical: '/about' },
};

const philosophy = [
  {
    icon: Video,
    title: 'Craft Over Formula',
    description:
      'Every frame is intentional. We reject templated approaches in favor of bespoke storytelling tailored to your brand.',
  },
  {
    icon: Target,
    title: 'Strategy Meets Art',
    description:
      'Beautiful visuals that serve a purpose. We balance creative excellence with measurable business outcomes.',
  },
  {
    icon: Users,
    title: 'Partnership, Not Vendor',
    description:
      'We embed with your team, becoming an extension of your brand to deliver work that truly represents who you are.',
  },
];

const team = [
  {
    name: 'Rajesh Kumar',
    role: 'Founder & Creative Director',
    bio: '15+ years crafting brand stories',
  },
  {
    name: 'Priya Sharma',
    role: 'Director of Photography',
    bio: 'Award-winning cinematographer',
  },
  {
    name: 'Amit Patel',
    role: 'Lead Editor',
    bio: 'Master of post-production',
  },
  {
    name: 'Neha Gupta',
    role: 'Production Manager',
    bio: 'Orchestrating seamless shoots',
  },
  {
    name: 'Vikram Singh',
    role: 'Motion Graphics Lead',
    bio: 'Bringing ideas to life',
  },
  {
    name: 'Anjali Mehta',
    role: 'Client Relations',
    bio: 'Your voice in our process',
  },
];

const awards = [
  'Best Branded Content - IDMA 2024',
  'Gold Lion - Cannes Corporate Media',
  'Excellence in Documentary - Mumbai International',
  'Best Corporate Film - Delhi Film Festival',
];

export default function AboutPage() {
  return (
    <main className='relative'>
      <Navigation />

      {/* Hero Section */}
      <section
        style={{
          position: 'relative',
          minHeight: '50vh',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          background: 'var(--bg)',
        }}
      >
        <div className='grain' />
        <div className='vignette' />

        <div
          className='container-tnf'
          style={{
            maxWidth: '1100px',
            padding: '80px 32px',
            width: '100%',
            position: 'relative',
            zIndex: 10,
            textAlign: 'center',
          }}
        >
          <div className='label' style={{ justifyContent: 'center', marginBottom: '20px' }}>
            Est. 2015, Delhi
          </div>
          <h1
            className='display-lg'
            style={{ marginBottom: '24px' }}
          >
            We Turn <span className='italic'>Ideas</span> Into Films
          </h1>
          <p
            style={{
              fontSize: '20px',
              lineHeight: 1.6,
              color: 'var(--ink-mute)',
              maxWidth: '600px',
              margin: '0 auto',
            }}
          >
            Since 2015, The Next Frame has been Delhi's trusted partner for cinematic brand storytelling that moves audiences and drives results.
          </p>
        </div>
      </section>

      {/* Editorial Story Section */}
      <section
        style={{
          position: 'relative',
          padding: '100px 0',
          background: 'var(--bg-2)',
          overflow: 'hidden',
        }}
      >
        <div className='grain' />

        <div
          style={{
            maxWidth: '1100px',
            margin: '0 auto',
            padding: '0 32px',
            position: 'relative',
            zIndex: 10,
          }}
        >
          <div
            className='about-story-grid'
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))',
              gap: '60px',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                aspectRatio: '1',
                borderRadius: '12px',
                overflow: 'hidden',
                border: '1px solid var(--border)',
              }}
            >
              <Image
                src='/assets/film-equipment-director-chair.png'
                alt='Behind the scenes'
                width={600}
                height={600}
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
              />
            </div>

            <div>
              <div className='label' style={{ marginBottom: '16px' }}>Our Story</div>
              <h2
                style={{
                  fontFamily: '"Instrument Serif", Georgia, serif',
                  fontSize: 'clamp(32px, 4vw, 48px)',
                  lineHeight: 1.1,
                  marginBottom: '28px',
                  color: 'var(--ink)',
                }}
              >
                Born from a Simple Belief
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <p
                  style={{
                    fontSize: '17px',
                    lineHeight: 1.7,
                    color: 'var(--ink-mute)',
                  }}
                >
                  In 2015, founder Rajesh Kumar saw a gap in the Indian video production landscape. Brands wanted cinematic quality, but most agencies offered templated solutions. TNF was founded to bridge that divide.
                </p>

                <p
                  style={{
                    fontSize: '17px',
                    lineHeight: 1.7,
                    color: 'var(--ink-mute)',
                  }}
                >
                  We started with a single camera, a small team, and an unwavering commitment to craft. Our first client was a Delhi tech startup launching their Series A. The brand film we created helped them close ₹50 crore in funding.
                </p>

                <p
                  style={{
                    fontSize: '17px',
                    lineHeight: 1.7,
                    color: 'var(--ink-mute)',
                  }}
                >
                  Today, we're a 20-person team with a state-of-the-art studio in Delhi. But we've never lost sight of what made us different: treating every project like it's our own.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Triptych */}
      <section
        style={{
          position: 'relative',
          padding: '100px 0',
          background: 'var(--bg)',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            maxWidth: '1100px',
            margin: '0 auto',
            padding: '0 32px',
            position: 'relative',
            zIndex: 10,
          }}
        >
          <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 60px' }}>
            <div className='label' style={{ justifyContent: 'center', marginBottom: '16px' }}>
              Our Philosophy
            </div>
            <h2
              style={{
                fontFamily: '"Instrument Serif", Georgia, serif',
                fontSize: 'clamp(36px, 5vw, 56px)',
                lineHeight: 1.05,
                marginBottom: '20px',
                color: 'var(--ink)',
              }}
            >
              How We <span className='italic'>Think</span>
            </h2>
            <p
              style={{
                fontSize: '18px',
                lineHeight: 1.6,
                color: 'var(--ink-mute)',
              }}
            >
              Three principles that guide every decision we make.
            </p>
          </div>

          <div
            className='philosophy-grid'
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
              gap: '24px',
            }}
          >
            {philosophy.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  style={{
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                    borderRadius: '16px',
                    padding: '40px 32px',
                    textAlign: 'center',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <div
                    style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '50%',
                      background: 'rgba(232, 197, 71, 0.1)',
                      border: '1px solid rgba(232, 197, 71, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 24px',
                    }}
                  >
                    <Icon style={{ width: '28px', height: '28px', color: 'var(--gold)' }} />
                  </div>
                  <h3
                    style={{
                      fontFamily: '"Instrument Serif", Georgia, serif',
                      fontSize: '22px',
                      marginBottom: '12px',
                      color: 'var(--ink)',
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '15px',
                      lineHeight: 1.6,
                      color: 'var(--ink-mute)',
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section
        style={{
          position: 'relative',
          padding: '100px 0',
          background: 'var(--bg-2)',
          overflow: 'hidden',
        }}
      >
        <div className='grain' />

        <div
          style={{
            maxWidth: '1100px',
            margin: '0 auto',
            padding: '0 32px',
            position: 'relative',
            zIndex: 10,
          }}
        >
          <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 60px' }}>
            <div className='label' style={{ justifyContent: 'center', marginBottom: '16px' }}>
              The Team
            </div>
            <h2
              style={{
                fontFamily: '"Instrument Serif", Georgia, serif',
                fontSize: 'clamp(36px, 5vw, 56px)',
                lineHeight: 1.05,
                marginBottom: '20px',
                color: 'var(--ink)',
              }}
            >
              Meet the <span className='italic'>Makers</span>
            </h2>
            <p
              style={{
                fontSize: '18px',
                lineHeight: 1.6,
                color: 'var(--ink-mute)',
              }}
            >
              A diverse team united by a passion for storytelling.
            </p>
          </div>

          <div
            className='team-grid'
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 160px), 1fr))',
              gap: '16px',
              maxWidth: '900px',
              margin: '0 auto',
            }}
          >
            {team.map((member, index) => (
              <div
                key={index}
                style={{
                  position: 'relative',
                  aspectRatio: '3/4',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  border: '1px solid var(--border)',
                  cursor: 'pointer',
                }}
                className='group'
              >
                <Image
                  src='/assets/profile.jpg'
                  alt={member.name}
                  width={300}
                  height={400}
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%)',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: '24px 20px',
                  }}
                >
                  <h3
                    style={{
                      fontFamily: '"Instrument Serif", Georgia, serif',
                      fontSize: '18px',
                      color: '#fff',
                      marginBottom: '4px',
                    }}
                  >
                    {member.name}
                  </h3>
                  <p
                    style={{
                      fontFamily: '"Geist Mono", monospace',
                      fontSize: '10px',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'var(--gold)',
                    }}
                  >
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section
        style={{
          position: 'relative',
          padding: '100px 0',
          background: 'var(--bg)',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            maxWidth: '900px',
            margin: '0 auto',
            padding: '0 32px',
            position: 'relative',
            zIndex: 10,
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div className='label' style={{ justifyContent: 'center', marginBottom: '16px' }}>
              Recognition
            </div>
            <h2
              style={{
                fontFamily: '"Instrument Serif", Georgia, serif',
                fontSize: 'clamp(36px, 5vw, 56px)',
                lineHeight: 1.05,
                color: 'var(--ink)',
              }}
            >
              Award-Winning <span className='italic'>Excellence</span>
            </h2>
          </div>

          <div
            className='awards-grid'
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
              gap: '16px',
            }}
          >
            {awards.map((award, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  padding: '24px',
                  borderRadius: '12px',
                  border: '1px solid var(--border)',
                  background: 'var(--surface)',
                  transition: 'border-color 0.3s ease',
                }}
              >
                <Award style={{ width: '24px', height: '24px', color: 'var(--gold)', flexShrink: 0 }} />
                <span style={{ fontSize: '15px', color: 'var(--ink)' }}>{award}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BTS Cinematic Frame */}
      <section
        style={{
          position: 'relative',
          padding: '80px 0 100px',
          background: 'var(--bg-2)',
          overflow: 'hidden',
        }}
      >
        <div className='grain' />

        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 32px',
            position: 'relative',
            zIndex: 10,
          }}
        >
          <div
            style={{
              aspectRatio: '2.35/1',
              borderRadius: '12px',
              overflow: 'hidden',
              border: '1px solid var(--border)',
            }}
          >
            <Image
              src='/assets/movie-production-clapperboard.png'
              alt='Behind the scenes'
              width={1920}
              height={823}
              style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            />
          </div>
          <div style={{ textAlign: 'center', marginTop: '24px' }}>
            <span
              style={{
                fontFamily: '"Geist Mono", monospace',
                fontSize: '11px',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--ink-mute)',
              }}
            >
              Behind the Scenes — On Set in Delhi
            </span>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
