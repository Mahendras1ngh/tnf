'use client';

import { ReactNode } from 'react';

interface MarqueeProps {
  children: ReactNode;
  speed?: 'slow' | 'medium' | 'fast';
  reverse?: boolean;
  className?: string;
}

export function Marquee({
  children,
  speed = 'slow',
  reverse = false,
  className = '',
}: MarqueeProps) {
  const speedMap = {
    slow: 'var(--speed-slow)',
    medium: 'var(--speed-medium)',
    fast: 'var(--speed-fast)',
  };

  return (
    <div className={`marquee ${className}`}>
      <div
        className={`marquee-track ${reverse ? 'marquee-track-reverse' : ''}`}
        style={{ ['--speed' as string]: speedMap[speed] }}
      >
        {children}
      </div>
      {/* Duplicate track for seamless loop */}
      <div
        className={`marquee-track ${reverse ? 'marquee-track-reverse' : ''}`}
        style={{ ['--speed' as string]: speedMap[speed] }}
        aria-hidden="true"
      >
        {children}
      </div>
    </div>
  );
}
