
import { THEME_PRESETS, type Preset } from './themes';
import { hexToHsl, isColorDark } from './colorUtils';
import { mix } from 'polished';

export type ThemeVariant = {
  id: string;
  name: string;
  colors: PresetColorDefinition;
};

export type PresetColorDefinition = {
    background: string;
    foreground: string;
    primary: string;
    secondary: string;
    accent: string;
    card: string;
    muted: string;
    border: string;
    input: string;
    ring: string;
    primaryGradientStart?: string;
    primaryGradientEnd?: string;
    mutedForeground?: string;
    starColor?: string;
};

export type CustomTheme = {
  id: string;
  name: string;
  variants?: ThemeVariant[];
  selectedVariantId?: string;
  hasFullScreenBackground?: boolean;
  colors: {
    primaryGradientStart: string;
    primaryGradientEnd: string;
    primary: string;
    secondary: string;
    background: string;
    accent: string;
    foreground: string;
    card: string;
    cardForeground: string;
    popover: string;
    popoverForeground: string;
    muted: string;
    mutedForeground: string;
    accentForeground: string;
    border: string;
    input: string;
    ring: string;
    primaryForeground: string;
    secondaryForeground: string;
    starColor: string;
  };
};

export type SavedCustomThemeRef = {
  id: string;
  selectedVariantId?: string;
};


export class ThemeManager {
    private themeRef: SavedCustomThemeRef | CustomTheme | null;
    private themeObject: CustomTheme | null;

    constructor(themeRef: SavedCustomThemeRef | CustomTheme | null) {
        this.themeRef = themeRef;
        this.themeObject = this.generateThemeObject();
    }

    private generateThemeObject(): CustomTheme | null {
        if (!this.themeRef) return null;

        // If the provided ref is already a full CustomTheme object, use it directly.
        if ('colors' in this.themeRef && this.themeRef.colors) {
            return this.themeRef;
        }

        const ref = this.themeRef as SavedCustomThemeRef;
        const preset = THEME_PRESETS.find(p => p.id === ref.id);
        if (!preset) return null;

        let activeColors = preset.colors;
        let selectedVariantId = ref.selectedVariantId;

        if (preset.variants && preset.variants.length > 0) {
            const variant = ref.selectedVariantId ? preset.variants.find(v => v.id === ref.selectedVariantId) : preset.variants[0];
            if (variant) {
                activeColors = variant.colors;
                selectedVariantId = variant.id;
            }
        }

        const fullColors: CustomTheme['colors'] = {
            primaryGradientStart: activeColors.primaryGradientStart || activeColors.background,
            primaryGradientEnd: activeColors.primaryGradientEnd || mix(0.2, '#000000', activeColors.background),
            background: activeColors.background,
            foreground: activeColors.foreground,
            card: activeColors.card,
            cardForeground: activeColors.foreground,
            popover: activeColors.secondary,
            popoverForeground: activeColors.foreground,
            primary: activeColors.primary,
            primaryForeground: isColorDark(activeColors.primary) ? '#FFFFFF' : '#111827',
            secondary: activeColors.secondary,
            secondaryForeground: isColorDark(activeColors.secondary)
                ? activeColors.foreground
                : mix(0.8, activeColors.foreground, activeColors.secondary),
            muted: activeColors.muted,
            mutedForeground: activeColors.mutedForeground || mix(0.5, activeColors.foreground, activeColors.muted),
            accent: activeColors.accent,
            accentForeground: isColorDark(activeColors.accent) ? '#FFFFFF' : '#111827',
            border: activeColors.border,
            input: activeColors.input,
            ring: activeColors.ring,
            starColor: activeColors.starColor || '#FFFFFF',
        };

        return {
            id: preset.id,
            name: preset.name,
            hasFullScreenBackground: preset.hasFullScreenBackground,
            ...(preset.variants && { variants: preset.variants }),
            ...(selectedVariantId && { selectedVariantId: selectedVariantId }),
            colors: fullColors,
        };
    }
    
    public getThemeObject(): CustomTheme | null {
        return this.themeObject;
    }

    public apply(): void {
        const root = document.documentElement;
        if (!this.themeObject) {
            root.removeAttribute('data-custom-theme-active');
            root.removeAttribute('data-theme-id');
            root.removeAttribute('data-has-full-background');
            this.clearCustomProperties(root);
            return;
        }

        const { colors } = this.themeObject;
        const themeValues = {
            '--custom-primary-gradient-start': hexToHsl(colors.primaryGradientStart),
            '--custom-primary-gradient-end': hexToHsl(colors.primaryGradientEnd),
            '--custom-background': hexToHsl(colors.background),
            '--custom-foreground': hexToHsl(colors.foreground),
            '--custom-card': hexToHsl(colors.card),
            '--custom-card-foreground': hexToHsl(colors.cardForeground),
            '--custom-popover': hexToHsl(colors.popover),
            '--custom-popover-foreground': hexToHsl(colors.popoverForeground),
            '--custom-primary': hexToHsl(colors.primary),
            '--custom-primary-foreground': hexToHsl(colors.primaryForeground),
            '--custom-secondary': hexToHsl(colors.secondary),
            '--custom-secondary-foreground': hexToHsl(colors.secondaryForeground),
            '--custom-muted': hexToHsl(colors.muted),
            '--custom-muted-foreground': hexToHsl(colors.mutedForeground),
            '--custom-accent': hexToHsl(colors.accent),
            '--custom-accent-foreground': hexToHsl(colors.accentForeground),
            '--custom-border': hexToHsl(colors.border),
            '--custom-input': hexToHsl(colors.input),
            '--custom-ring': hexToHsl(colors.ring),
            '--custom-star-color': hexToHsl(colors.starColor),
        };

        for (const [prop, value] of Object.entries(themeValues)) {
            root.style.setProperty(prop, value);
        }
        
        root.setAttribute('data-custom-theme-active', 'true');
        root.setAttribute('data-theme-id', this.themeObject.id);
        
        if (this.themeObject.hasFullScreenBackground) {
            root.setAttribute('data-has-full-background', 'true');
        } else {
            root.removeAttribute('data-has-full-background');
        }
    }

    private clearCustomProperties(root: HTMLElement): void {
        const customProps = ['--custom-primary-gradient-start', '--custom-primary-gradient-end', '--custom-background', '--custom-foreground', '--custom-card', '--custom-card-foreground', '--custom-popover', '--custom-popover-foreground', '--custom-primary', '--custom-primary-foreground', '--custom-secondary', '--custom-secondary-foreground', '--custom-muted', '--custom-muted-foreground', '--custom-accent', '--custom-accent-foreground', '--custom-border', '--custom-input', '--custom-ring', '--custom-star-color'];
        for(const prop of customProps) {
            root.style.removeProperty(prop);
        }
    }
}
