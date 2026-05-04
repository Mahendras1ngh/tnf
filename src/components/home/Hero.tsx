'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Play, ChevronDown } from 'lucide-react';

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [time, setTime] = useState('00:00:00:00');

  useEffect(() => {
    // Trigger animations on mount
    setIsLoaded(true);

    // Timecode animation
    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const hours = Math.floor(elapsed / 3600000);
      const minutes = Math.floor((elapsed % 3600000) / 60000);
      const seconds = Math.floor((elapsed % 60000) / 1000);
      const frames = Math.floor((elapsed % 1000) / (1000 / 24)); // 24 fps

      setTime(
        `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(frames).padStart(2, '0')}`
      );
    }, 1000 / 24);

    return () => clearInterval(interval);
  }, []);

  const slabs = [0, 1, 2, 3, 4, 5];
  const headline = ['Cinematic', 'Stories', 'That', 'Move'];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[var(--bg)]">
      {/* Film Grain */}
      <div className="grain" />

      {/* Vignette Overlay */}
      <div className="vignette" />

      {/* Film-strip Slabs Background */}
      <div className="absolute inset-0 flex">
        {slabs.map((slab, index) => (
          <motion.div
            key={slab}
            className="flex-1 relative overflow-hidden bg-[var(--surface-2)] border-r border-[var(--border)]"
            initial={{ y: '-100%', opacity: 0 }}
            animate={isLoaded ? { y: 0, opacity: 1 } : {}}
            transition={{
              duration: 1.2,
              delay: index * 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {/* Background gradient for each slab */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--bg)]/50 to-[var(--bg)]" />

            {/* Ambient letterforms */}
            <div className="absolute inset-0 flex items-center justify-center opacity-5">
              <span className="font-display text-[20vw] text-[var(--gold)]">
                {['T', 'N', 'F', 'T', 'N', 'F'][index]}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Shutter Wipe Animation */}
      <AnimatePresence>
        {!isLoaded && (
          <>
            <motion.div
              className="absolute top-0 left-0 right-0 h-1/2 bg-[var(--bg)] z-50"
              initial={{ y: 0 }}
              animate={{ y: '-100%' }}
              exit={{ y: '-100%' }}
              transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            />
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-1/2 bg-[var(--bg)] z-50"
              initial={{ y: 0 }}
              animate={{ y: '100%' }}
              exit={{ y: '100%' }}
              transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            />
          </>
        )}
      </AnimatePresence>

      {/* Light Streak */}
      <motion.div
        className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-[var(--gold)] to-transparent z-40"
        initial={{ x: '-100%' }}
        animate={isLoaded ? { x: '100vw' } : {}}
        transition={{ duration: 2, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* Hero Content */}
      <div className="container-tnf relative z-20 py-20">
        <div className="max-w-4xl">
          {/* Eyebrow Label with Live Indicator */}
          <motion.div
            className="flex items-center gap-3 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="live-indicator" />
            <span className="label label-with-line">Delhi Production House</span>
          </motion.div>

          {/* Split-text Headline */}
          <h1 className="display-xl mb-6">
            {headline.map((word, index) => (
              <motion.span
                key={index}
                className={`inline-block ${
                  index === headline.length - 1 ? 'italic text-[var(--gold)]' : ''
                }`}
                initial={{ opacity: 0, y: 60 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.8,
                  delay: 2 + index * 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {word}
                {index < headline.length - 1 && ' '}
              </motion.span>
            ))}
          </h1>

          {/* Subtitle */}
          <motion.p
            className="lede max-w-2xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 2.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Award-winning production house crafting branded commercials,
            corporate films, and video content that captivates audiences and
            drives results.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap items-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 2.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link href="/work" className="btn-gold group">
              View Our Work
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link href="#showreel" className="btn-ghost group">
              <Play className="w-4 h-4" />
              Watch Showreel
            </Link>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            className="flex flex-wrap items-center gap-8 md:gap-12 border-t border-[var(--border)] pt-6"
            initial={{ opacity: 0 }}
            animate={isLoaded ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div>
              <div className="font-display text-3xl md:text-4xl text-[var(--gold)] mb-1">
                500+
              </div>
              <div className="text-[13px] text-[var(--ink-dim)]">
                Projects Delivered
              </div>
            </div>
            <div>
              <div className="font-display text-3xl md:text-4xl text-[var(--gold)] mb-1">
                150+
              </div>
              <div className="text-[13px] text-[var(--ink-dim)]">
                Happy Clients
              </div>
            </div>
            <div>
              <div className="font-display text-3xl md:text-4xl text-[var(--gold)] mb-1">
                20+
              </div>
              <div className="text-[13px] text-[var(--ink-dim)]">
                Industry Awards
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Timecode Display */}
      <motion.div
        className="absolute bottom-8 left-8 font-mono text-[11px] text-[var(--ink-dim)] tracking-wider"
        initial={{ opacity: 0 }}
        animate={isLoaded ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 3.2, ease: [0.16, 1, 0.3, 1] }}
      >
        TC: {time}
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={isLoaded ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 3.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="label text-[9px] rotate-90 mb-4">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-5 h-5 text-[var(--gold)]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
