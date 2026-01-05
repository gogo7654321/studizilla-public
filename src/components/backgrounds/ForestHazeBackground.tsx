'use client';

import React, { useEffect, useState } from 'react';
import { useAppearance } from '@/contexts/AppearanceContext';

interface MistLayer {
  id: number;
  delay: string;
  duration: string;
  direction: 'left' | 'right';
}

export function ForestHazeBackground() {
  const { customTheme } = useAppearance();
  const themeId = customTheme?.id;
  const [layers, setLayers] = useState<MistLayer[]>([]);

  useEffect(() => {
    if (themeId !== 'forest-haze') {
      setLayers([]);
      return;
    }

    const generated: MistLayer[] = [];
    for (let i = 0; i < 3; i++) {
      generated.push({
        id: i,
        delay: `${i * 4}s`,
        duration: `${20 + i * 5}s`,
        direction: i % 2 === 0 ? 'left' : 'right',
      });
    }
    setLayers(generated);
  }, [themeId]);

  if (themeId !== 'forest-haze') return null;

  return (
    <div className="forest-haze-bg" aria-hidden="true">
      {layers.map((layer) => (
        <div
          key={layer.id}
          className={`mist-layer ${layer.direction}`}
          style={{
            animationDelay: layer.delay,
            animationDuration: layer.duration,
          }}
        />
      ))}
    </div>
  );
}
