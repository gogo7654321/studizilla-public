
'use client';

import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { db } from '@/lib/firebase';
import { doc, onSnapshot, setDoc } from 'firebase/firestore';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Music, Link as LinkIcon, Headphones, X, GripVertical, Loader2, AudioLines, Volume2 } from 'lucide-react';
import { FaSpotify, FaYoutube, FaDeezer } from 'react-icons/fa';
import { SiApplemusic, SiSoundcloud, SiAmazonmusic, SiTidal } from 'react-icons/si';
import { useToast } from '@/hooks/use-toast';
import { Separator } from './ui/separator';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Slider } from '@/components/ui/slider';
import { Badge } from './ui/badge';

// Define the shape of the player's state
type PlayerState = {
    position: { x: number; y: number };
    size: { width: number; height: number };
};

type ActiveNoise = 'white' | 'brown' | 'pink' | null;

const noiseConfig = {
    white: {
        label: 'White Noise',
        url: 'https://archive.org/download/TenMinutesOfWhiteNoise/10min-white-noise.mp3'
    },
    brown: {
        label: 'Brown Noise',
        url: 'https://archive.org/download/10-minutes-of-brown-noise/10min-brown-noise.mp3'
    },
    pink: {
        label: 'Pink Noise',
        url: 'https://archive.org/download/pink-noise-2/pink-noise.mp3'
    }
};

const getDefaultPlayerState = (): PlayerState => ({
    position: { x: (typeof window !== 'undefined' ? window.innerWidth : 1024) - 470, y: 100 },
    size: { width: 450, height: 400 },
});

// This is the standalone PlayerWindow component.
function PlayerWindow({
    playerRef,
    isPlayerVisible,
    playerState,
    transformStyle,
    handleMouseDownDrag,
    handleMouseDownResize,
    setIsPickerOpen,
    setIsPlayerVisible,
    isLoading,
    embedUrl,
    activeNoise,
    volume,
    onVolumeChange,
}: {
    playerRef: React.RefObject<HTMLDivElement>;
    isPlayerVisible: boolean;
    playerState: PlayerState;
    transformStyle: React.CSSProperties;
    handleMouseDownDrag: (e: React.MouseEvent<HTMLDivElement>) => void;
    handleMouseDownResize: (e: React.MouseEvent<HTMLDivElement>) => void;
    setIsPickerOpen: (open: boolean) => void;
    setIsPlayerVisible: (visible: boolean) => void;
    isLoading: boolean;
    embedUrl: string | null;
    activeNoise: ActiveNoise;
    volume: number;
    onVolumeChange: (value: number) => void;
}) {
    return (
        <div
            ref={playerRef}
            className={cn(
                "fixed z-[60] flex flex-col rounded-xl border shadow-2xl overflow-hidden player-window",
                isPlayerVisible ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none",
                !isPlayerVisible && "transition-opacity transition-transform duration-300"
            )}
            style={{
                ...transformStyle,
                width: playerState.size.width,
                height: playerState.size.height,
            }}
        >
            <div
                className="flex items-center justify-between p-1 border-b bg-card text-card-foreground cursor-move"
                onMouseDown={handleMouseDownDrag}
            >
                <div className="flex items-center gap-1">
                    <GripVertical className="h-5 w-5 text-muted-foreground/50" />
                    <p className="font-semibold text-sm">Study Music</p>
                </div>
                <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" className="h-7 w-7 rounded-full" onClick={(e) => { e.stopPropagation(); setIsPlayerVisible(false); setIsPickerOpen(true); }}><Music className="h-4 w-4" /></Button>
                    <Button variant="ghost" size="icon" className="h-7 w-7 rounded-full" onClick={(e) => { e.stopPropagation(); setIsPlayerVisible(false); }}><X className="h-4 w-4" /></Button>
                </div>
            </div>
            
            <div className="flex-grow bg-background">
                {isLoading ? (
                    <div className="flex items-center justify-center h-full"><Loader2 className="h-6 w-6 animate-spin"/></div>
                ) : embedUrl ? (
                    <iframe
                        key={embedUrl}
                        title="Music Player"
                        style={{ borderRadius: '0', width: '100%', height: '100%', border: 0 }}
                        src={embedUrl}
                        allowFullScreen
                        allow="autoplay; clipboard-write *; encrypted-media *; fullscreen *; picture-in-picture *;"
                        loading="lazy"
                    ></iframe>
                ) : activeNoise ? (
                     <div className="flex flex-col items-center justify-center h-full text-center p-4">
                        <AudioLines className="h-10 w-10 text-primary" />
                        <p className="mt-2 text-lg font-semibold">{noiseConfig[activeNoise].label}</p>
                        <p className="text-sm text-muted-foreground">Playing ambient noise...</p>
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center h-full text-center p-4">
                        <Music className="h-8 w-8 text-muted-foreground" />
                        <p className="mt-2 text-sm font-medium">No Playlist Set</p>
                        <Button size="sm" className="mt-2" onClick={(e) => { e.stopPropagation(); setIsPlayerVisible(false); setIsPickerOpen(true); }}>
                            Set Playlist
                        </Button>
                    </div>
                )}
            </div>

            <div className="p-2 border-t bg-card/50 backdrop-blur-sm">
                <Slider 
                    value={[volume]} 
                    onValueChange={(vals) => onVolumeChange(vals[0])}
                    max={100} 
                    step={1} 
                />
            </div>

            <div
                className="absolute bottom-0 right-0 w-4 h-4 cursor-se-resize z-10"
                onMouseDown={handleMouseDownResize}
            >
                <div className="w-2 h-2 border-r-2 border-b-2 border-muted-foreground/50 absolute bottom-0.5 right-0.5" />
            </div>
        </div>
    );
}

const ComingSoonIcon = ({ children }: { children: React.ReactNode }) => (
  <Tooltip>
    <TooltipTrigger asChild>
      <div className="relative cursor-not-allowed opacity-50">
        {children}
      </div>
    </TooltipTrigger>
    <TooltipContent>
      <p>Coming Soon</p>
    </TooltipContent>
  </Tooltip>
);

export function FloatingMusicPlayer() {
    const { user } = useAuth();
    const { toast } = useToast();
    const router = useRouter();
    const playerRef = useRef<HTMLDivElement>(null);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    // Player Content State
    const [isPlayerVisible, setIsPlayerVisible] = useState(false);
    const [isPickerOpen, setIsPickerOpen] = useState(false);
    const [playlistUrl, setPlaylistUrl] = useState('');
    const [inputUrl, setInputUrl] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [activeNoise, setActiveNoise] = useState<ActiveNoise>(null);
    const [volume, setVolume] = useState(50);

    // Player Position & Size State
    const [playerState, setPlayerState] = useState<PlayerState>(getDefaultPlayerState());
    const debounceTimer = useRef<NodeJS.Timeout | null>(null);
    
    // Transform state for smooth movement
    const [transform, setTransform] = useState({ x: 0, y: 0 });

    // --- Data Loading and Saving ---
    useEffect(() => {
        if (!user) {
            setIsLoading(false);
            return;
        }
        const userDocRef = doc(db, 'users', user.uid);
        const unsubscribe = onSnapshot(userDocRef, (docSnap) => {
            if (docSnap.exists()) {
                const data = docSnap.data();
                const savedUrl = data.musicPlaylistUrl || '';
                const savedNoise = data.activeNoise || null;
                const savedVolume = data.musicPlayerVolume ?? 50;

                setPlaylistUrl(savedUrl);
                setInputUrl(savedUrl);
                setActiveNoise(savedNoise);
                setVolume(savedVolume);
                
                if (data.musicPlayerState) {
                    setPlayerState(data.musicPlayerState);
                    setTransform(data.musicPlayerState.position);
                }
            }
            setIsLoading(false);
        });
        return () => unsubscribe();
    }, [user]);

    const saveStateToDb = useCallback((dataToSave: { musicPlayerState?: PlayerState, musicPlaylistUrl?: string, activeNoise?: ActiveNoise | null, musicPlayerVolume?: number }) => {
        if (!user) return;
        if (debounceTimer.current) clearTimeout(debounceTimer.current);
        debounceTimer.current = setTimeout(() => {
            const userDocRef = doc(db, 'users', user.uid);
            setDoc(userDocRef, dataToSave, { merge: true });
        }, 500);
    }, [user]);

    // --- Audio Playback Logic for Ambient Noise ---
    useEffect(() => {
        if (!audioRef.current) return;
        
        const shouldPlay = isPlayerVisible && !!activeNoise;
        const noiseUrl = activeNoise ? noiseConfig[activeNoise].url : null;
        
        if (shouldPlay && noiseUrl) {
            if (audioRef.current.src !== noiseUrl) {
                audioRef.current.src = noiseUrl;
            }
            audioRef.current.loop = true;
            audioRef.current.volume = volume / 100;
            audioRef.current.play().catch(e => console.error("Audio play failed:", e));
        } else {
            audioRef.current.pause();
        }
    }, [activeNoise, isPlayerVisible, volume]);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = volume / 100;
        }
    }, [volume]);

    // --- Event Handlers for Drag/Resize ---
    const handleMouseDownDrag = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        if (!playerRef.current) return;
        e.preventDefault();

        const startPos = { x: e.clientX, y: e.clientY };
        const startTransform = { ...transform };
        
        const handleMouseMove = (moveEvent: MouseEvent) => {
            const dx = moveEvent.clientX - startPos.x;
            const dy = moveEvent.clientY - startPos.y;
            setTransform({ x: startTransform.x + dx, y: startTransform.y + dy });
        };
        
        const handleMouseUp = () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
            setPlayerState(prev => {
                const newState = { ...prev, position: { x: transform.x, y: transform.y }};
                saveStateToDb({ musicPlayerState: newState });
                return newState;
            });
        };
        
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
    }, [transform, saveStateToDb]);
    
    const handleMouseDownResize = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        e.preventDefault();
        
        const startSize = { ...playerState.size };
        const startPos = { x: e.clientX, y: e.clientY };
        
        const handleMouseMove = (moveEvent: MouseEvent) => {
            const dx = moveEvent.clientX - startPos.x;
            const dy = moveEvent.clientY - startPos.y;
            setPlayerState(prev => ({
                ...prev,
                size: { 
                    width: Math.max(300, startSize.width + dx), 
                    height: Math.max(200, startSize.height + dy) 
                },
            }));
        };

        const handleMouseUp = () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
            saveStateToDb({ musicPlayerState: playerState });
        };
        
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
    }, [playerState, saveStateToDb]);
    
    const handleVolumeChange = (newVolume: number) => {
        setVolume(newVolume);
        saveStateToDb({ musicPlayerVolume: newVolume });
    }


    // --- Playlist and UI Logic ---
    const embedUrl = useMemo(() => {
        if (!playlistUrl || activeNoise) return null;
        try {
            const url = new URL(playlistUrl);
            if (url.hostname === 'open.spotify.com') {
                const pathParts = url.pathname.split('/');
                if (pathParts.length >= 3 && (pathParts[1] === 'playlist' || pathParts[1] === 'album')) {
                    return `https://open.spotify.com/embed/${pathParts[1]}/${pathParts[2]}?utm_source=generator`;
                }
            }
        } catch (error) { return null; }
        return null;
    }, [playlistUrl, activeNoise]);

    const handleSaveUrl = (urlToSave: string, toastTitle: string, toastDescription: string) => {
         if (!user) {
            toast({ title: 'Sign Up to Save Playlists', description: 'Create a free account to save your custom music playlists.', action: <Button onClick={() => router.push('/auth')}>Sign Up</Button> });
            setIsPickerOpen(false);
            return;
        }
        setPlaylistUrl(urlToSave);
        setInputUrl(urlToSave);
        setActiveNoise(null);
        saveStateToDb({ musicPlaylistUrl: urlToSave, activeNoise: null });
        toast({ title: toastTitle, description: toastDescription });
        setIsPickerOpen(false);
        setIsPlayerVisible(true);
    };

    const handleSavePlaylist = () => {
         try { new URL(inputUrl); } catch (e) { toast({ variant: 'destructive', title: 'Invalid URL', description: 'Please enter a valid playlist link.' }); return; }
        handleSaveUrl(inputUrl, 'Playlist Saved!', 'Your study music playlist has been updated.');
    };

    const handleSelectLofi = () => {
        handleSaveUrl('https://open.spotify.com/playlist/0vvXsWCC9xrXsKd4FyS8kM', 'Playlist Set!', 'Lofi Study Beats is now ready to play.');
    };

    const handleSelectNoise = (noiseType: ActiveNoise) => {
        if (!user) {
            toast({ title: 'Sign Up to Save Sounds', description: 'Create a free account to save your ambient noise settings.', action: <Button onClick={() => router.push('/auth')}>Sign Up</Button> });
            setIsPickerOpen(false);
            return;
        }
        setActiveNoise(noiseType);
        setPlaylistUrl(''); // Clear playlist URL when selecting noise
        setInputUrl('');
        saveStateToDb({ activeNoise: noiseType, musicPlaylistUrl: '' });
        toast({ title: 'Ambient Noise Set!', description: `Playing ${noiseType} noise.`});
        setIsPickerOpen(false);
        setIsPlayerVisible(true);
    };
    
    const transformStyle = { transform: `translate(${transform.x}px, ${transform.y}px)` };

    return (
        <TooltipProvider>
            <audio ref={audioRef} />
            <Button
                onClick={() => setIsPlayerVisible(v => !v)}
                className={cn("fixed bottom-5 right-5 z-50 rounded-full shadow-lg h-9 w-9 p-0", "bg-gradient-to-br from-primary to-accent text-primary-foreground", "hover:opacity-90")}
                aria-label="Toggle Music Player"
            >
                {isPlayerVisible ? <X className="h-3.5 w-3.5"/> : <Music className="h-3.5 w-3.5" />}
            </Button>
            
            <PlayerWindow
                playerRef={playerRef}
                isPlayerVisible={isPlayerVisible}
                playerState={playerState}
                transformStyle={transformStyle}
                handleMouseDownDrag={handleMouseDownDrag}
                handleMouseDownResize={handleMouseDownResize}
                setIsPickerOpen={setIsPickerOpen}
                setIsPlayerVisible={setIsPlayerVisible}
                isLoading={isLoading}
                embedUrl={embedUrl}
                activeNoise={activeNoise}
                volume={volume}
                onVolumeChange={handleVolumeChange}
            />

            <Dialog open={isPickerOpen} onOpenChange={setIsPickerOpen}>
                <DialogContent className="music-player-dialog sm:max-w-md solid-dialog">
                    <DialogHeader>
                        <DialogTitle>Change Playlist or Sound</DialogTitle>
                        <DialogDescription>Select a preset or add a link from a supported service.</DialogDescription>
                        <Badge variant="outline" className="w-fit mt-2">Beta Feature</Badge>
                    </DialogHeader>
                    <div className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                           <Button variant="outline" size="sm" className="w-full justify-start gap-2" onClick={handleSelectLofi}><Headphones className="h-4 w-4" />Lofi Study Beats</Button>
                           <Button variant="outline" size="sm" className="w-full justify-start gap-2" onClick={() => handleSelectNoise('white')}><AudioLines className="h-4 w-4" />White Noise</Button>
                           <Button variant="outline" size="sm" className="w-full justify-start gap-2" onClick={() => handleSelectNoise('brown')}><AudioLines className="h-4 w-4" />Brown Noise</Button>
                           <Button variant="outline" size="sm" className="w-full justify-start gap-2" onClick={() => handleSelectNoise('pink')}><AudioLines className="h-4 w-4" />Pink Noise</Button>
                        </div>
                        <Separator />
                        <div className="grid gap-2"><Label htmlFor="playlist-url" className="text-xs">Or Add Your Playlist Link</Label><div className="relative"><LinkIcon className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3 w-3 text-muted-foreground" /><Input id="playlist-url" value={inputUrl} onChange={(e) => setInputUrl(e.target.value)} className="pl-7 h-9 text-xs" placeholder="https://open.spotify.com/playlist/..." onKeyDown={(e) => e.key === 'Enter' && handleSavePlaylist()} /></div></div>
                        <div className="grid grid-cols-5 gap-y-3 gap-x-2 text-muted-foreground place-items-center pt-2">
                          <a href="https://www.spotify.com" target="_blank" rel="noopener noreferrer" aria-label="Spotify"><FaSpotify title="Spotify" className="h-5 w-5 text-green-500 transition-transform hover:scale-110" /></a>
                          <ComingSoonIcon><SiApplemusic title="Apple Music" className="h-5 w-5 text-pink-500" /></ComingSoonIcon>
                          <ComingSoonIcon><FaYoutube title="YouTube" className="h-5 w-5 text-red-600" /></ComingSoonIcon>
                          <ComingSoonIcon><SiSoundcloud title="SoundCloud" className="h-6 w-6" /></ComingSoonIcon>
                          <ComingSoonIcon><SiAmazonmusic title="Amazon Music" className="h-5 w-5" /></ComingSoonIcon>
                          <ComingSoonIcon><SiTidal title="Tidal" className="h-5 w-5" /></ComingSoonIcon>
                          <ComingSoonIcon><FaDeezer title="Deezer" className="h-5 w-5" /></ComingSoonIcon>
                        </div>
                        <Button onClick={handleSavePlaylist} size="sm" className="w-full">Save Playlist</Button>
                    </div>
                </DialogContent>
            </Dialog>
        </TooltipProvider>
    );
}
