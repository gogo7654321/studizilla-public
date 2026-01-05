'use client';

import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Cloud, CloudRain, CloudSnow, CloudDrizzle, CloudLightning, CloudFog, Sun, Wind, Droplets, Gauge, Loader2, Umbrella } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { db } from '@/lib/firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';

type LocationData = {
  city: string;
  country: string;
  lat: number;
  lon: number;
};

type WeatherData = {
  temp: number;
  feelsLike: number;
  description: string;
  humidity: number;
  windSpeed: number;
  pressure: number;
  icon: string;
  precipChance: number;
};

type ForecastDay = {
  date: string;
  temp: number;
  description: string;
  icon: string;
};

const weatherIcons: Record<string, typeof Sun> = {
  '01d': Sun,
  '01n': Sun,
  '02d': Cloud,
  '02n': Cloud,
  '03d': Cloud,
  '03n': Cloud,
  '04d': Cloud,
  '04n': Cloud,
  '09d': CloudDrizzle,
  '09n': CloudDrizzle,
  '10d': CloudRain,
  '10n': CloudRain,
  '11d': CloudLightning,
  '11n': CloudLightning,
  '13d': CloudSnow,
  '13n': CloudSnow,
  '50d': CloudFog,
  '50n': CloudFog,
};

export function WeatherWidget() {
  const { user } = useAuth();
  const [location, setLocation] = useState<LocationData | null>(null);
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [forecast, setForecast] = useState<ForecastDay[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const [overlayStyle, setOverlayStyle] = useState<React.CSSProperties>({});
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetchLocationAndWeather();
  }, [user]);

  const fetchLocationAndWeather = async () => {
    try {
      setIsLoading(true);
      setError(null);

      // Always fetch fresh location from Cloudflare Geolocation API
      const cfResponse = await fetch('https://speed.cloudflare.com/meta');
      const cfData = await cfResponse.json();

      const loc: LocationData = {
        city: cfData.city,
        country: cfData.country,
        lat: parseFloat(cfData.latitude),
        lon: parseFloat(cfData.longitude),
      };

      setLocation(loc);

      // Save the updated location to user profile
      if (user) {
        await setDoc(
          doc(db, 'users', user.uid),
          { weatherLocation: loc },
          { merge: true }
        );
      }

      // Fetch fresh weather data
      await fetchWeather(loc.lat, loc.lon);
    } catch (err) {
      console.error('Weather fetch error:', err);
      setError('Failed to load weather');
    } finally {
      setIsLoading(false);
    }
  };

  const fetchWeather = async (lat: number, lon: number) => {
    const API_KEY =
      process.env.NEXT_PUBLIC_OPENWEATHERMAP_API_KEY ||
      process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY ||
      'demo';

    const [currentRes, forecastRes] = await Promise.all([
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`),
      fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`),
    ]);

    if (!currentRes.ok || !forecastRes.ok) {
      throw new Error('Failed to fetch weather');
    }

    const current = await currentRes.json();
    const forecastData = await forecastRes.json();

    setWeather({
      temp: Math.round(current.main.temp),
      feelsLike: Math.round(current.main.feels_like),
      description: current.weather[0].description,
      humidity: current.main.humidity,
      windSpeed: Math.round(current.wind.speed * 3.6),
      pressure: current.main.pressure,
      icon: current.weather[0].icon,
      precipChance: Math.round((forecastData.list?.[0]?.pop || 0) * 100),
    });

    const byDay: Record<string, { temps: number[]; icon: string; desc: string }> = {};
    forecastData.list?.forEach((entry: any) => {
      const date = entry.dt_txt.split(' ')[0];
      if (!byDay[date]) {
        byDay[date] = { temps: [], icon: entry.weather[0].icon, desc: entry.weather[0].description };
      }
      byDay[date].temps.push(entry.main.temp);
    });

    const nextFive = Object.entries(byDay)
      .slice(0, 5)
      .map(([date, info]) => ({
        date,
        temp: Math.round(info.temps.reduce((a, b) => a + b, 0) / info.temps.length),
        description: info.desc,
        icon: info.icon,
      }));

    setForecast(nextFive);
  };

  if (isLoading) {
    return (
      <div className="flex items-center gap-3 p-4 rounded-xl border bg-card">
        <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
        <span className="text-sm text-muted-foreground">Loading weather...</span>
      </div>
    );
  }

  if (error || !location || !weather) {
    return (
      <div className="flex items-center gap-3 p-4 rounded-xl border bg-card">
        <Cloud className="h-5 w-5 text-muted-foreground" />
        <span className="text-sm text-muted-foreground">Weather unavailable</span>
      </div>
    );
  }

  const WeatherIcon = weatherIcons[weather.icon] || Cloud;

  const region = location.country || location.city;
  const isUS = location.country === 'US';
  const tempUnit = isUS ? '°F' : '°C';
  
  // Convert Celsius to Fahrenheit if US
  const displayTemp = (celsius: number) => {
    if (isUS) {
      return Math.round((celsius * 9/5) + 32);
    }
    return celsius;
  };

  const showOverlay = () => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setOverlayStyle({
      position: 'fixed',
      right: `${window.innerWidth - rect.right}px`,
      top: `${rect.bottom + 8}px`,
      zIndex: 9999,
    });
    setOpen(true);
  };

  const hideOverlay = () => setOpen(false);

  return (
    <div
      ref={cardRef}
      className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl border bg-card/50 backdrop-blur"
      onMouseEnter={showOverlay}
      onMouseLeave={hideOverlay}
    >
      {/* Compact inline layout */}
      <div className="flex items-center gap-2">
        <div className="rounded-lg bg-primary/10 p-1.5">
          <WeatherIcon className="h-5 w-5 text-primary" />
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span className="text-sm font-medium leading-none">{location.city}, {region}</span>
          </div>
          <span className="text-xs text-muted-foreground leading-none mt-0.5">{displayTemp(weather.temp)}{tempUnit} • {weather.description}</span>
        </div>
      </div>

      {/* Hover panel below (fixed overlay to sit above all widgets) */}
      {open && typeof window !== 'undefined' && createPortal(
        <div
          style={overlayStyle}
          className="fixed opacity-100 transition-all duration-200 pointer-events-auto"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={hideOverlay}
        >
          <div className="rounded-xl border-2 border-primary/20 bg-background shadow-2xl overflow-hidden min-w-[450px]">
            {/* Gradient accent bar */}
            <div className="h-1.5 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500"></div>
            
            <div className="p-6">
            <div className="flex items-center justify-between mb-5">
              <div>
                <p className="text-sm text-muted-foreground">5-day outlook</p>
                <p className="text-2xl font-bold">{location.city}</p>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/30 rounded-full px-4 py-2">
                <Umbrella className="h-5 w-5" />
                <span>{weather.precipChance}% chance</span>
              </div>
            </div>

            <div className="grid grid-cols-5 gap-4 text-sm mb-5">
              {forecast.map((day) => {
                const Icon = weatherIcons[day.icon] || Cloud;
                return (
                  <div key={day.date} className="rounded-lg border border-border/50 bg-muted/20 hover:bg-muted/40 transition-colors p-3 flex flex-col items-center gap-2 text-center">
                    <span className="font-semibold text-sm">{new Date(day.date).toLocaleDateString(undefined, { weekday: 'short' })}</span>
                    <Icon className="h-8 w-8 text-primary" />
                    <span className="text-base font-bold">{displayTemp(day.temp)}{tempUnit}</span>
                    <span className="text-xs text-muted-foreground capitalize line-clamp-2">{day.description}</span>
                  </div>
                );
              })}
            </div>

            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="flex flex-col items-center gap-2 bg-muted/20 rounded-lg p-4">
                <Droplets className="h-6 w-6 text-blue-500" />
                <div className="text-center">
                  <div className="text-xl font-bold">{weather.humidity}%</div>
                  <div className="text-xs text-muted-foreground">Humidity</div>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2 bg-muted/20 rounded-lg p-4">
                <Wind className="h-6 w-6 text-cyan-500" />
                <div className="text-center">
                  <div className="text-xl font-bold">{weather.windSpeed}</div>
                  <div className="text-xs text-muted-foreground">km/h</div>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2 bg-muted/20 rounded-lg p-4">
                <Gauge className="h-6 w-6 text-purple-500" />
                <div className="text-center">
                  <div className="text-xl font-bold">{weather.pressure}</div>
                  <div className="text-xs text-muted-foreground">hPa</div>
                </div>
              </div>
            </div>
            <div className="text-sm text-muted-foreground text-center py-2 bg-muted/10 rounded-lg">
              Feels like <span className="font-semibold text-foreground">{displayTemp(weather.feelsLike)}{tempUnit}</span>
            </div>
          </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}
