'use client';

import React from 'react';

export function ParisianDaydreamBackground() {
  return (
    <div
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: -1 }}
      aria-hidden="true"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
        style={{ filter: 'brightness(0.9)' }}
      >
        <source src="/images/theme/paris.mp4" type="video/mp4" />
      </video>
      {/* Overlay for better text readability */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, rgba(253,238,241,0.3) 0%, rgba(253,238,241,0.5) 100%)',
        }}
      />
    </div>
  );
}
