
'use client';

import { useAppearance } from '@/contexts/AppearanceContext';

export function ThemeAttributionNotice() {
    const { customTheme } = useAppearance();

    if (customTheme?.id !== 'parisian-daydream') {
        return null;
    }

    return (
        <div className="w-full px-4 md:px-8 pb-4">
            <div className="w-full rounded-lg bg-black/50 p-3 text-xs text-white/90 shadow-lg backdrop-blur-sm text-balance text-center">
                Artwork and animation for the 'Parisian Daydream' theme are provided by the 'Healing Me' YouTube channel. Studizilla does not claim ownership of this content.
            </div>
        </div>
    );
}
