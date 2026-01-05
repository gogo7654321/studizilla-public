
import React from 'react';
import { THEME_PRESETS } from '@/lib/themes';

// This function is stringified and must be self-contained.
// It runs before React hydrates to prevent any theme flashing.
const initializerFunction = () => {
  const applyTheme = () => {
    try {
      // Don't apply custom theme on home page
      const isHomePage = window.location.pathname === '/';
      
      const settingsJSON = localStorage.getItem('appearance-settings');
      if (!settingsJSON) {
        return;
      }

      const settings = JSON.parse(settingsJSON);
      const root = document.documentElement;
      
      // --- Helper functions (must be embedded) ---
      const hexToHsl = (hex) => {
        if (!hex || typeof hex !== 'string' || !hex.startsWith('#')) return '0 0% 0%';
        let r = 0, g = 0, b = 0;
        if (hex.length === 4) { r = parseInt(hex[1] + hex[1], 16); g = parseInt(hex[2] + hex[2], 16); b = parseInt(hex[3] + hex[3], 16); }
        else if (hex.length === 7) { r = parseInt(hex.substring(1, 3), 16); g = parseInt(hex.substring(3, 5), 16); b = parseInt(hex.substring(5, 7), 16); }
        r /= 255; g /= 255; b /= 255; const max = Math.max(r, g, b), min = Math.min(r, g, b); let h = 0, s = 0, l = (max + min) / 2;
        if (max !== min) { const d = max - min; s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
          switch (max) { case r: h = (g - b) / d + (g < b ? 6 : 0); break; case g: h = (b - r) / d + 2; break; case b: h = (r - g) / d + 4; break; }
          h /= 6;
        }
        return `${Math.round(h * 360)} ${Math.round(s * 100)}% ${Math.round(l * 100)}%`;
      };
      
      const isColorDark = (hex) => {
        const rgb = ((h) => {
          if (!h || typeof h !== 'string' || !h.startsWith('#')) return null;
          const res = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(h);
          return res ? { r: parseInt(res[1], 16), g: parseInt(res[2], 16), b: parseInt(res[3], 16) } : null;
        })(hex);
        if (!rgb) return false;
        const luminance = ((r, g, b) => {
          const a = [r, g, b].map(v => { v /= 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); });
          return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
        })(rgb.r, rgb.g, rgb.b);
        return luminance <= 0.179;
      };

      const mix = (ratio, color1, color2) => {
        const d2h = d => d.toString(16).padStart(2, '0');
        const h2d = h => parseInt(h, 16);
        let c1 = h2d(color1.substring(1));
        let c2 = h2d(color2.substring(1));
        let r = Math.floor(h2d((c1 >> 16).toString(16)) * ratio + h2d((c2 >> 16).toString(16)) * (1 - ratio));
        let g = Math.floor(h2d(((c1 >> 8) & 0xFF).toString(16)) * ratio + h2d(((c2 >> 8) & 0xFF).toString(16)) * (1 - ratio));
        let b = Math.floor(h2d((c1 & 0xFF).toString(16)) * ratio + h2d((c2 & 0xFF).toString(16)) * (1 - ratio));
        return '#' + d2h(r) + d2h(g) + d2h(b);
      };


      // --- Apply Themes ---
      if (settings.accessibilityTheme) {
        root.setAttribute('data-theme', settings.accessibilityTheme);
      }

      // Only apply custom theme if NOT on home page
      if (settings.customThemeRef && !isHomePage) {
          const THEME_PRESETS_EMBEDDED = [ { id: 'starry-night', name: '✨ Starry Night', category: 'Special Edition', hasFullScreenBackground: true, colors: { primaryGradientStart: '#000000', primaryGradientEnd: '#142b44', background: '#152238', foreground: '#FFFFFF', primary: '#89ddff', secondary: '#191919', accent: '#e1adff', card: '#152238', muted: '#191919', border: '#30363d', input: '#191919', ring: '#89ddff', starColor: '#FFFFFF', mutedForeground: '#ADB5BD' }, variants: [ { id: 'classic', name: 'Classic', colors: { primaryGradientStart: '#000000', primaryGradientEnd: '#142b44', background: '#152238', foreground: '#FFFFFF', primary: '#89ddff', secondary: '#191919', accent: '#e1adff', card: '#152238', muted: '#191919', mutedForeground: '#ADB5BD', border: '#30363d', input: '#191919', ring: '#89ddff', starColor: '#FFFFFF', } }, { id: 'cotton-candy', name: '🍭 Cotton Candy Sky', colors: { primaryGradientStart: '#ff71b2', primaryGradientEnd: '#509be1', background: '#9f45b0', foreground: '#ffffff', primary: '#d3e9ff', secondary: '#a763b6', accent: '#7f78be', card: '#9f45b0', muted: '#a763b6', mutedForeground: '#fff4f4', border: '#a763b6', input: '#a763b6', ring: '#d3e9ff', starColor: '#FFFFFF', } }, { id: 'forest', name: '🌲 Forest Night', colors: { primaryGradientStart: '#000000', primaryGradientEnd: '#14442b', background: '#011502', foreground: '#ffffff', primary: '#c4c6ff', secondary: '#191919', accent: '#77be80', card: '#011502', muted: '#191919', mutedForeground: '#DBF9F4', border: '#191919', input: '#191919', ring: '#c4c6ff', starColor: '#FFFFFF', } }, { id: 'galaxy', name: '🔮 Galaxy Dream', colors: { primaryGradientStart: '#00076f', primaryGradientEnd: '#b133c9', background: '#9f45b0', foreground: '#ffe4f2', primary: '#fff3c4', secondary: '#9d00ff', accent: '#9d00ff', card: '#9f45b0', muted: '#9d00ff', mutedForeground: '#FFFFFF', border: '#9d00ff', input: '#9d00ff', ring: '#fff3c4', starColor: '#FFFFFF', } }, { id: 'amber-horizon', name: '🟠 Amber Horizon', colors: { primaryGradientStart: '#000000', primaryGradientEnd: '#e69138', background: '#e69138', foreground: '#FFFFFF', primary: '#fbe39b', secondary: '#191919', accent: '#e06666', card: '#c37728', muted: '#191919', mutedForeground: '#FFFFFF', border: '#e69138', input: '#191919', ring: '#fbe39b', starColor: '#ffe234', } }, { id: 'twilight-sky', name: '🏙️ Twilight Sky', colors: { primaryGradientStart: '#1e48a9', primaryGradientEnd: '#62cff4', background: '#6b94f5', foreground: '#FFFFFF', primary: '#FFF3C4', secondary: '#95b3f8', accent: '#aac2f9', card: '#6b94f5', muted: '#95b3f8', mutedForeground: '#040a18', border: '#aac2f9', input: '#95b3f8', ring: '#FFF3C4', starColor: '#FFFFFF', } }, { id: 'sunrise-fade', name: '🌅 Sunrise Fade', colors: { primaryGradientStart: '#FFAE41', primaryGradientEnd: '#F83D41', background: '#C49C48', foreground: '#FFFFFF', primary: '#FFF3C4', secondary: '#191919', accent: '#C49C48', card: '#C49C48', muted: '#191919', mutedForeground: '#E0E0E0', border: '#C49C48', input: '#C49C48', ring: '#FFF3C4', starColor: '#FFFFFF', } }, ] }, { id: 'parisian-daydream', name: '🎨 Parisian Daydream', category: 'Special Edition', hasFullScreenBackground: true, colors: { background: '#fdeef1', foreground: '#d35867', primary: '#d35867', secondary: '#f9d8e1', accent: '#8eb2c7', card: '#f9d8e1', muted: '#f5c6d3', border: '#efb9c8', input: '#f5c6d3', ring: '#d35867', mutedForeground: '#ab7886', } }, { id: 'tidal-bloom', name: '🌊 Tidal Bloom', category: 'Scenic', hasFullScreenBackground: true, colors: { background: '#fdf6e3', foreground: '#5d4037', primary: '#3b82f6', secondary: '#f7f0e0', accent: '#ff8c69', card: '#fdfbf5', muted: '#f0e9d6', border: '#e6dcc9', input: '#f0e9d6', ring: '#3b82f6', mutedForeground: '#8c7a65', primaryGradientStart: '#a8edea', primaryGradientEnd: '#f7d794', }, }, { id: 'forest-haze', name: '🌲 Forest Haze', category: 'Scenic', hasFullScreenBackground: true, colors: { background: '#0b2e22', foreground: '#d4e0d9', primary: '#52a379', secondary: '#163e30', accent: '#a3b18a', card: '#163e30', muted: '#214d3f', border: '#2a5c4d', input: '#214d3f', ring: '#52a379', } }, { id: 'midnight-office', name: '🌃 Midnight Office', category: 'Scenic', hasFullScreenBackground: true, colors: { background: '#0c2434', foreground: '#cceeee', primary: '#d9444f', secondary: '#1e4966', accent: '#33cccc', card: '#14364e', muted: '#2d5a78', border: '#28516d', input: '#14364e', ring: '#d9444f', } }, { id: 'pastel-soft', name: '🌸 Pastel Soft', category: 'Light', hasFullScreenBackground: true, colors: { background: '#fff8f5', foreground: '#6b4e3d', primary: '#ffb6c1', secondary: '#ffeef2', accent: '#98d8c8', card: '#ffffff', muted: '#ffeef2', border: '#f7c2cc', input: '#ffeef2', ring: '#ffb6c1', }, }, { id: 'cloudy-cocoa', name: '☁️ Cloudy Cocoa', category: 'Light', colors: { background: '#917156', foreground: '#2b1c1c', primary: '#5a3b2e', secondary: '#7e5c45', accent: '#4b3621', card: '#a88a72', muted: '#7b5c49', border: '#5a3b2e', input: '#7c5f4a', ring: '#4b3621', }, }, { id: 'matcha-study', name: '🍵 Matcha Study', category: 'Light', colors: { background: '#e0f2e9', foreground: '#1b4332', primary: '#95d5b2', secondary: '#b7e4c7', accent: '#74c69d', card: '#ffffff', muted: '#cfe7d6', border: '#a3cbb3', input: '#bce0cd', ring: '#95d5b2', }, }, { id: 'pink-aesthetic', name: '🌸 Pink Aesthetic', category: 'Light', colors: { background: '#F8C2D4', foreground: '#9C425C', primary: '#9A2D4A', secondary: '#F8C2D4', accent: '#FF6384', card: '#fdeaf1', muted: '#FFE4E1', border: '#f0b8c8', input: '#F7AEC1', ring: '#9A2D4A', mutedForeground: '#ab7886', }, }, { id: 'fc-barcelona', name: 'FC Barcelona 🐐', category: 'Gaming', hasFullScreenBackground: true, colors: { background: '#1A2B3C', foreground: '#FFFFFF', primary: '#A50044', secondary: '#1A2B3C', accent: '#004D98', card: '#1A2B3C', muted: '#003B73', border: '#003B73', input: '#003B73', ring: '#EDBB00', mutedForeground: '#E0E0E0', } }, { id: 'catpuccin', name: '🐾 Catpuccin', category: 'Dark', hasFullScreenBackground: true, colors: { primaryGradientStart: '#23212e', primaryGradientEnd: '#23212e', background: '#23212e', foreground: '#e2e0ee', primary: '#b693ce', secondary: '#302e42', accent: '#997aae', card: '#2a2739', muted: '#39364c', border: '#434059', input: '#39364c', ring: '#b693ce', }, }, { id: 'cosmic-grape', name: '🍇 Cosmic Grape', category: 'Dark', colors: { background: '#231942', foreground: '#f1f1f1', primary: '#be95c4', secondary: '#5e548e', accent: '#9f86c0', card: '#2c2250', muted: '#3c316f', border: '#4a3d8a', input: '#3c316f', ring: '#be95c4', }, }, { id: 'obsidian-mind', name: '🪨 Obsidian Mind', category: 'Dark', colors: { primaryGradientStart: '#0a0a0a', primaryGradientEnd: '#0a0a0a', background: '#0a0a0a', foreground: '#f5f5f5', primary: '#e5e5e5', secondary: '#111111', accent: '#555555', card: '#1a1a1a', muted: '#555555', border: '#2e2e2e', input: '#2a2a2a', ring: '#e5e5e5', }, }, { id: 'hacker-terminal', name: '📟 Hacker Terminal', category: 'Gaming', colors: { background: '#000000', foreground: '#00ff00', primary: '#00ff00', secondary: '#1a1a1a', accent: '#00aa00', card: '#0a0a0a', muted: '#1f1f1f', border: '#2e2e2e', input: '#1a1a1a', ring: '#00ff00', }, }, { id: 'frostbite-winter', name: '❄️ Frostbite Winter', category: 'Seasonal', colors: { background: '#e0f7fa', foreground: '#004d40', primary: '#81d4fa', secondary: '#b2ebf2', accent: '#00bcd4', card: '#ffffff', muted: '#d0f0f3', border: '#a2d9e4', input: '#c9f2f9', ring: '#81d4fa', }, }, ];
          const { id: themeId, selectedVariantId } = settings.customThemeRef;
          const preset = THEME_PRESETS_EMBEDDED.find(p => p.id === themeId);

          if (preset) {
            let colors = preset.colors;
            if (selectedVariantId && preset.variants) {
              const variant = preset.variants.find(v => v.id === selectedVariantId);
              if (variant) colors = variant.colors;
            }
            
            const themeValues = {
              '--custom-primary-gradient-start': hexToHsl(colors.primaryGradientStart || colors.background),
              '--custom-primary-gradient-end': hexToHsl(colors.primaryGradientEnd || mix(0.2, '#000000', colors.background)),
              '--custom-background': hexToHsl(colors.background), '--custom-foreground': hexToHsl(colors.foreground), '--custom-card': hexToHsl(colors.card),
              '--custom-card-foreground': hexToHsl(colors.foreground), '--custom-popover': hexToHsl(colors.secondary), '--custom-popover-foreground': hexToHsl(colors.foreground),
              '--custom-primary': hexToHsl(colors.primary), '--custom-primary-foreground': isColorDark(colors.primary) ? hexToHsl('#f5f5f5') : hexToHsl('#111827'),
              '--custom-secondary': hexToHsl(colors.secondary), '--custom-secondary-foreground': hexToHsl(isColorDark(colors.secondary) ? colors.foreground : mix(0.8, colors.foreground, colors.secondary)),
              '--custom-muted': hexToHsl(colors.muted), '--custom-muted-foreground': hexToHsl(colors.mutedForeground || mix(0.5, colors.foreground, colors.muted)),
              '--custom-accent': hexToHsl(colors.accent), '--custom-accent-foreground': isColorDark(colors.accent) ? hexToHsl('#FFFFFF') : hexToHsl('#111827'),
              '--custom-border': hexToHsl(colors.border), '--custom-input': hexToHsl(colors.input), '--custom-ring': hexToHsl(colors.ring), '--custom-star-color': hexToHsl(colors.starColor || '#FFFFFF'),
            };
            for (const [prop, value] of Object.entries(themeValues)) { root.style.setProperty(prop, value); }
            root.setAttribute('data-custom-theme-active', 'true');
            root.setAttribute('data-theme-id', preset.id);
            if (preset.hasFullScreenBackground) root.setAttribute('data-has-full-background', 'true');
            else root.removeAttribute('data-has-full-background');
          }
      } else {
        root.removeAttribute('data-custom-theme-active');
        root.removeAttribute('data-theme-id');
        root.removeAttribute('data-has-full-background');
        // Explicitly clear the custom properties
        const customProps = ['--custom-primary-gradient-start', '--custom-primary-gradient-end', '--custom-background', '--custom-foreground', '--custom-card', '--custom-card-foreground', '--custom-popover', '--custom-popover-foreground', '--custom-primary', '--custom-primary-foreground', '--custom-secondary', '--custom-secondary-foreground', '--custom-muted', '--custom-muted-foreground', '--custom-accent', '--custom-accent-foreground', '--custom-border', '--custom-input', '--custom-ring', '--custom-star-color'];
        for(const prop of customProps) root.style.removeProperty(prop);
      }
    } catch (e) {
      console.error("Studizilla: Error applying initial theme from script.", e);
    }
  };

  // Run on first script execution
  applyTheme();
};

const blockingScript = `(${initializerFunction.toString()})()`;

export function ThemeInitializer() {
  return <script dangerouslySetInnerHTML={{ __html: blockingScript }} />;
}
