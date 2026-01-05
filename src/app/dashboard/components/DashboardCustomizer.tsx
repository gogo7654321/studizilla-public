'use client';

import { Button } from '@/components/ui/button';
import { Palette, Droplet, Sparkles, Play, Pause } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { useAppearance } from '@/contexts/AppearanceContext';
import { ScrollArea } from '@/components/ui/scroll-area';
import { THEME_PRESETS } from '@/lib/themes';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';
import { useState } from 'react';

const TAG_COLORS: Record<string, string> = {
  popular: 'bg-rose-500/20 text-rose-500 border-rose-500/30',
  preppy: 'bg-pink-500/20 text-pink-500 border-pink-500/30',
  girly: 'bg-fuchsia-500/20 text-fuchsia-500 border-fuchsia-500/30',
  cool: 'bg-blue-500/20 text-blue-500 border-blue-500/30',
  games: 'bg-purple-500/20 text-purple-500 border-purple-500/30',
  gaming: 'bg-purple-500/20 text-purple-500 border-purple-500/30',
  sports: 'bg-orange-500/20 text-orange-500 border-orange-500/30',
  animated: 'bg-emerald-500/20 text-emerald-500 border-emerald-500/30',
  cozy: 'bg-amber-500/20 text-amber-500 border-amber-500/30',
  aesthetic: 'bg-violet-500/20 text-violet-500 border-violet-500/30',
  lofi: 'bg-cyan-500/20 text-cyan-500 border-cyan-500/30',
};

export function DashboardCustomizer() {
  const { customTheme, applyCustomTheme, resetCustomTheme, isGlassmorphismEnabled, setIsGlassmorphismEnabled, areAnimationsEnabled, setAreAnimationsEnabled } = useAppearance();
  const [customColors, setCustomColors] = useState({
    primary: '#3b82f6',
    secondary: '#8b5cf6',
    accent: '#10b981',
    background: '#ffffff',
  });

  const handlePresetSelect = (presetId: string) => {
    const preset = THEME_PRESETS.find((p) => p.id === presetId);
    if (preset) {
      applyCustomTheme({ id: preset.id });
    }
  };

  const handleApplyCustomColors = () => {
    applyCustomTheme({
      id: 'custom',
      name: 'Custom Colors',
      colors: {
        background: customColors.background,
        foreground: '#000000',
        primary: customColors.primary,
        secondary: customColors.secondary,
        accent: customColors.accent,
        card: customColors.background,
        muted: customColors.secondary,
        border: customColors.secondary,
        input: customColors.secondary,
        ring: customColors.primary,
        primaryGradientStart: customColors.primary,
        primaryGradientEnd: customColors.secondary,
        primaryForeground: '#ffffff',
        secondaryForeground: '#ffffff',
        cardForeground: '#000000',
        popover: customColors.background,
        popoverForeground: '#000000',
        mutedForeground: '#666666',
        accentForeground: '#ffffff',
        starColor: '#ffffff',
      }
    });
  };

  const currentPresetId = customTheme?.id || 'default';

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="rounded-full">
          <Palette className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full sm:max-w-md">
        <SheetHeader>
          <SheetTitle>Customize Theme</SheetTitle>
          <SheetDescription>Personalize your dashboard appearance</SheetDescription>
        </SheetHeader>

        <Tabs defaultValue="presets" className="mt-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="presets">Presets</TabsTrigger>
            <TabsTrigger value="custom" disabled className="relative">
              Custom
              <Badge variant="secondary" className="ml-1.5 text-[10px] px-1.5 py-0 h-4">Soon</Badge>
            </TabsTrigger>
            <TabsTrigger value="effects">Effects</TabsTrigger>
          </TabsList>

          <ScrollArea className="h-[calc(100vh-14rem)] mt-4">
            <TabsContent value="presets" className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                {THEME_PRESETS.map((preset) => {
                  const isActive = currentPresetId === preset.id;
                  return (
                    <button
                      key={preset.id}
                      onClick={() => handlePresetSelect(preset.id)}
                      className={cn(
                        'relative p-3 rounded-lg border-2 transition-all hover:scale-105',
                        isActive ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'
                      )}
                    >
                      {isActive && (
                        <div className="absolute top-2 right-2 h-5 w-5 rounded-full bg-primary text-primary-foreground flex items-center justify-center z-10">
                          <Check className="h-3 w-3" />
                        </div>
                      )}
                      <div
                        className="w-full h-16 rounded-md mb-2 overflow-hidden relative"
                        style={{
                          background: preset.previewType === 'stars'
                            ? '#152238'
                            : preset.previewType === 'video'
                            ? `url('/images/theme/paris.mp4') center/cover`
                            : preset.backgroundImage
                            ? `url('${preset.backgroundImage}') center/cover`
                            : `linear-gradient(135deg, ${preset.colors.primaryGradientStart || preset.colors.primary} 0%, ${preset.colors.primaryGradientEnd || preset.colors.secondary} 100%)`,
                        }}
                      >
                        {preset.previewType === 'stars' && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-1 h-1 rounded-full bg-white animate-pulse" style={{ boxShadow: '0 0 8px 2px rgba(255,255,255,0.8)' }} />
                            <div className="w-1 h-1 rounded-full bg-white animate-pulse absolute top-2 right-4" style={{ animationDelay: '0.3s', boxShadow: '0 0 8px 2px rgba(255,255,255,0.8)' }} />
                            <div className="w-1 h-1 rounded-full bg-white animate-pulse absolute bottom-3 left-6" style={{ animationDelay: '0.6s', boxShadow: '0 0 8px 2px rgba(255,255,255,0.8)' }} />
                          </div>
                        )}
                        {preset.previewType === 'video' && (
                          <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover"
                            src="/images/theme/paris.mp4"
                          />
                        )}
                      </div>
                      <div className="text-sm font-medium text-center mb-1">{preset.name}</div>
                      {preset.tags && preset.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1 justify-center">
                          {preset.tags.slice(0, 2).map((tag) => (
                            <Badge
                              key={tag}
                              variant="outline"
                              className={cn('text-[10px] px-1.5 py-0 h-4', TAG_COLORS[tag] || 'bg-muted')}
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
              <Button onClick={resetCustomTheme} variant="outline" className="w-full">
                Reset to Default
              </Button>
            </TabsContent>

            <TabsContent value="custom" className="space-y-4">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Primary Color</Label>
                  <div className="flex gap-2">
                    <Input
                      type="color"
                      value={customColors.primary}
                      onChange={(e) => setCustomColors({ ...customColors, primary: e.target.value })}
                      className="w-20 h-10 cursor-pointer"
                    />
                    <Input
                      type="text"
                      value={customColors.primary}
                      onChange={(e) => setCustomColors({ ...customColors, primary: e.target.value })}
                      className="flex-1"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Secondary Color</Label>
                  <div className="flex gap-2">
                    <Input
                      type="color"
                      value={customColors.secondary}
                      onChange={(e) => setCustomColors({ ...customColors, secondary: e.target.value })}
                      className="w-20 h-10 cursor-pointer"
                    />
                    <Input
                      type="text"
                      value={customColors.secondary}
                      onChange={(e) => setCustomColors({ ...customColors, secondary: e.target.value })}
                      className="flex-1"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Accent Color</Label>
                  <div className="flex gap-2">
                    <Input
                      type="color"
                      value={customColors.accent}
                      onChange={(e) => setCustomColors({ ...customColors, accent: e.target.value })}
                      className="w-20 h-10 cursor-pointer"
                    />
                    <Input
                      type="text"
                      value={customColors.accent}
                      onChange={(e) => setCustomColors({ ...customColors, accent: e.target.value })}
                      className="flex-1"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Background Color</Label>
                  <div className="flex gap-2">
                    <Input
                      type="color"
                      value={customColors.background}
                      onChange={(e) => setCustomColors({ ...customColors, background: e.target.value })}
                      className="w-20 h-10 cursor-pointer"
                    />
                    <Input
                      type="text"
                      value={customColors.background}
                      onChange={(e) => setCustomColors({ ...customColors, background: e.target.value })}
                      className="flex-1"
                    />
                  </div>
                </div>

                <Button onClick={handleApplyCustomColors} className="w-full">
                  <Droplet className="h-4 w-4 mr-2" />
                  Apply Custom Colors
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="effects" className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Background Animations</Label>
                    <p className="text-sm text-muted-foreground">Enable animated theme effects</p>
                  </div>
                  <Switch
                    checked={areAnimationsEnabled}
                    onCheckedChange={setAreAnimationsEnabled}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Glassmorphism</Label>
                    <p className="text-sm text-muted-foreground">Semi-transparent card backgrounds</p>
                  </div>
                  <Switch
                    checked={isGlassmorphismEnabled}
                    onCheckedChange={setIsGlassmorphismEnabled}
                  />
                </div>
                <div className="p-4 rounded-lg border bg-muted/50">
                  <Sparkles className="h-5 w-5 mb-2 text-primary" />
                  <p className="text-sm">Toggle animations and glassmorphism for a personalized experience.</p>
                </div>
              </div>
            </TabsContent>
          </ScrollArea>
        </Tabs>
      </SheetContent>
    </Sheet>
  );
}
