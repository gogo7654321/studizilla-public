
'use client';

import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { useAppearance } from '@/contexts/AppearanceContext';

interface Bubble {
  id: number;
  left: string;
  size: number;
  duration: string;
  delay: string;
}

export function TidalBloomBackground() {
  const { customTheme, areAnimationsEnabled } = useAppearance();
  const themeId = customTheme?.id;
  const [bubbles, setBubbles] = useState<Bubble[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => setIsMounted(true), []);

  useEffect(() => {
    if (themeId !== 'tidal-bloom' || !areAnimationsEnabled || typeof window === 'undefined') {
      setBubbles([]);
      return;
    }

    const num = 20;
    const newBubbles: Bubble[] = [];
    for (let i = 0; i < num; i++) {
      newBubbles.push({
        id: i,
        left: `${Math.random() * 100}%`,
        size: Math.random() * 20 + 10,
        duration: `${8 + Math.random() * 8}s`,
        delay: `${Math.random() * 5}s`,
      });
    }
    setBubbles(newBubbles);
  }, [themeId, areAnimationsEnabled]);

  if (themeId !== 'tidal-bloom' || !isMounted) return null;

  return ReactDOM.createPortal(
    <>
        <div className="tidal-bloom-bg" aria-hidden="true">
            <div className="wave-layer wave1" />
            <div className="wave-layer wave2" />
            <div className="wave-layer wave3" />
        </div>
        {areAnimationsEnabled && (
          <div className="tidal-bubble-container" aria-hidden="true">
              {bubbles.map((bubble) => (
                  <div
                      key={bubble.id}
                      className="tidal-bubble"
                      style={{
                      left: bubble.left,
                      width: `${bubble.size}px`,
                      height: `${bubble.size}px`,
                      animationDuration: bubble.duration,
                      animationDelay: bubble.delay,
                      }}
                  />
              ))}
          </div>
        )}
    </>,
    document.body
  );
}
