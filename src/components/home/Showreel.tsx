'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Play, Volume2, VolumeX, Maximize2 } from 'lucide-react';

export function Showreel() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  return (
    <section id="showreel" className="relative py-20 md:py-32 bg-[var(--bg-2)] overflow-hidden">
      {/* Film Grain */}
      <div className="grain" />

      <div className="container-tnf relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="label label-with-line mb-4">Showreel 2026</div>
          <h2 className="display-md mb-6">
            See Our Work in <span className="italic text-[var(--gold)]">Action</span>
          </h2>
          <p className="lede">
            A curated selection of our best work from the past year, showcasing
            our range across commercials, corporate films, and creative content.
          </p>
        </div>

        {/* Cinematic Frame - 21:9 Aspect Ratio */}
        <div className="relative aspect-cinema rounded-lg overflow-hidden bg-[var(--surface)] border border-[var(--border-strong)]">
          {/* Placeholder Image */}
          <div className="relative w-full h-full">
            <Image
              src="/assets/professional-camera-rig.png"
              alt="Showreel"
              fill
              className="object-cover"
              priority
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)]/80 via-transparent to-transparent" />

            {/* Play Button Overlay */}
            {!isPlaying && (
              <button
                onClick={() => setIsPlaying(true)}
                className="absolute inset-0 flex items-center justify-center group cursor-pointer"
              >
                <div className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-[var(--gold)] flex items-center justify-center transform transition-all duration-400 group-hover:scale-110 group-hover:shadow-glow-lg">
                  <Play className="w-8 h-8 md:w-12 md:h-12 text-[var(--bg)] ml-1" fill="currentColor" />
                </div>
              </button>
            )}

            {/* Video Controls (when playing) */}
            {isPlaying && (
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="w-10 h-10 rounded-full bg-[var(--surface)]/80 backdrop-blur-sm border border-[var(--border)] flex items-center justify-center hover:border-[var(--gold)] transition-colors duration-300"
                >
                  {isMuted ? (
                    <VolumeX className="w-4 h-4" />
                  ) : (
                    <Volume2 className="w-4 h-4" />
                  )}
                </button>

                <button className="w-10 h-10 rounded-full bg-[var(--surface)]/80 backdrop-blur-sm border border-[var(--border)] flex items-center justify-center hover:border-[var(--gold)] transition-colors duration-300">
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>
            )}

            {/* Film Frame Markers */}
            <div className="absolute top-0 left-0 right-0 h-6 flex justify-between px-4">
              {[...Array(40)].map((_, i) => (
                <div key={i} className="w-1 h-4 bg-[var(--border)] mt-1" />
              ))}
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-6 flex justify-between px-4">
              {[...Array(40)].map((_, i) => (
                <div key={i} className="w-1 h-4 bg-[var(--border)] mb-1" />
              ))}
            </div>
          </div>
        </div>

        {/* Showreel Info */}
        <div className="flex flex-wrap items-center justify-between gap-6 mt-8">
          <div className="flex items-center gap-8">
            <div>
              <div className="text-[13px] text-[var(--ink-dim)] mb-1">Duration</div>
              <div className="font-mono text-[15px] text-[var(--gold)]">03:42</div>
            </div>
            <div>
              <div className="text-[13px] text-[var(--ink-dim)] mb-1">Projects Featured</div>
              <div className="font-mono text-[15px] text-[var(--gold)]">24</div>
            </div>
            <div>
              <div className="text-[13px] text-[var(--ink-dim)] mb-1">Year</div>
              <div className="font-mono text-[15px] text-[var(--gold)]">2026</div>
            </div>
          </div>

          <a
            href="/showreel-2026.mp4"
            download
            className="text-[13px] text-[var(--ink-mute)] hover:text-[var(--gold)] transition-colors duration-300 flex items-center gap-2"
          >
            <span className="label text-[10px]">Download Showreel</span>
            <span className="text-[10px]">↓</span>
          </a>
        </div>
      </div>
    </section>
  );
}
