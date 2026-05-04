import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import Image from 'next/image';
import { Award, Users, Video, Target } from 'lucide-react';

export const metadata = {
  title: 'About Us',
  description: 'Learn about The Next Frame, our story, philosophy, and the team behind award-winning video production.',
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
    <main className="relative">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-[var(--bg)]">
        <div className="grain" />
        <div className="vignette" />

        <div className="container-tnf relative z-10 py-20">
          <div className="max-w-4xl">
            <div className="label label-with-line mb-6">Est. 2015, Delhi</div>
            <h1 className="display-lg mb-8">
              We Turn <span className="italic text-[var(--gold)]">Ideas</span> Into Films
            </h1>
            <p className="lede max-w-2xl">
              Since 2015, The Next Frame has been Delhi's trusted partner for
              cinematic brand storytelling. From Fortune 500 companies to
              ambitious startups, we craft video content that moves audiences
              and drives results.
            </p>
          </div>
        </div>
      </section>

      {/* Editorial Story Section */}
      <section className="relative py-20 md:py-32 bg-[var(--bg-2)] overflow-hidden">
        <div className="grain" />

        <div className="container-tnf container-narrow relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="aspect-portrait rounded-lg overflow-hidden bg-[var(--surface)] border border-[var(--border)]">
                <Image
                  src="/assets/film-equipment-director-chair.png"
                  alt="Behind the scenes"
                  width={600}
                  height={800}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            <div>
              <div className="label mb-4">Our Story</div>
              <h2 className="display-sm mb-6">Born from a Simple Belief</h2>

              <div className="space-y-4 text-[17px] leading-relaxed text-[var(--ink-mute)]">
                <p className="drop-cap">
                  In 2015, founder Rajesh Kumar saw a gap in the Indian video
                  production landscape. Brands wanted cinematic quality, but
                  most agencies offered templated solutions. TNF was founded to
                  bridge that divide.
                </p>

                <p>
                  We started with a single camera, a small team, and an
                  unwavering commitment to craft. Our first client was a Delhi
                  tech startup launching their Series A. The brand film we
                  created helped them close ₹50 crore in funding.
                </p>

                <p>
                  Word spread. Within three years, we'd worked with over 150
                  clients across India, won our first international award, and
                  built a reputation for exceeding expectations.
                </p>

                <p>
                  Today, we're a 20-person team with a state-of-the-art studio
                  in Delhi. But we've never lost sight of what made us
                  different: treating every project like it's our own.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Triptych */}
      <section className="relative py-20 md:py-32 bg-[var(--bg)] overflow-hidden">
        <div className="container-tnf relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="label mb-4">Our Philosophy</div>
            <h2 className="display-md mb-6">
              How We <span className="italic text-[var(--gold)]">Think</span>
            </h2>
            <p className="lede">
              Three principles that guide every decision we make, from concept
              to final delivery.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {philosophy.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="card-hover text-center relative overflow-hidden"
                >
                  <div className="mb-6 flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-[var(--gold)]/10 border border-[var(--gold)]/30 flex items-center justify-center">
                      <Icon className="w-8 h-8 text-[var(--gold)]" />
                    </div>
                  </div>
                  <h3 className="font-display text-[22px] mb-4">{item.title}</h3>
                  <p className="text-[15px] text-[var(--ink-mute)] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="relative py-20 md:py-32 bg-[var(--bg-2)] overflow-hidden">
        <div className="grain" />

        <div className="container-tnf relative z-10">
          <div className="max-w-3xl mb-16">
            <div className="label label-with-line mb-4">The Team</div>
            <h2 className="display-md mb-6">
              Meet the <span className="italic text-[var(--gold)]">Makers</span>
            </h2>
            <p className="lede">
              A diverse team of directors, cinematographers, editors, and
              strategists united by a passion for storytelling.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="group relative aspect-portrait rounded-lg overflow-hidden bg-gradient-to-br from-[var(--surface)] to-[var(--bg)] border border-[var(--border)] hover:border-[var(--border-strong)] transition-all duration-400 cursor-pointer"
              >
                {/* Placeholder gradient (awaiting real photos) */}
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--gold)]/10 to-[var(--red)]/10" />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-[var(--bg)]/95 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center p-8">
                  <div className="text-center">
                    <h3 className="font-display text-[20px] mb-2 text-[var(--gold)]">
                      {member.name}
                    </h3>
                    <div className="label text-[10px] mb-4">{member.role}</div>
                    <p className="text-[14px] text-[var(--ink-mute)]">
                      {member.bio}
                    </p>
                  </div>
                </div>

                {/* Default State */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[var(--bg)] to-transparent">
                  <h3 className="font-display text-[18px] mb-1">{member.name}</h3>
                  <div className="text-[13px] text-[var(--ink-dim)]">{member.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="relative py-20 md:py-32 bg-[var(--bg)] overflow-hidden">
        <div className="container-tnf relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="label mb-4">Recognition</div>
            <h2 className="display-md mb-12">
              Award-Winning <span className="italic text-[var(--gold)]">Excellence</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {awards.map((award, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-6 rounded-lg border border-[var(--border)] bg-[var(--surface)] hover:border-[var(--gold)] transition-colors duration-300"
                >
                  <Award className="w-8 h-8 text-[var(--gold)] flex-shrink-0" />
                  <span className="text-[15px] text-left">{award}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BTS Cinematic Frame */}
      <section className="relative py-20 md:py-32 bg-[var(--bg-2)] overflow-hidden">
        <div className="grain" />

        <div className="container-tnf relative z-10">
          <div className="aspect-cinema rounded-lg overflow-hidden bg-[var(--surface)] border border-[var(--border-strong)]">
            <Image
              src="/assets/movie-production-clapperboard.png"
              alt="Behind the scenes"
              width={1920}
              height={823}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="text-center mt-6">
            <div className="label">Behind the Scenes — On Set in Delhi</div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
