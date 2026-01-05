
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const headers = request.headers;
    const ip = headers.get('x-forwarded-for') || '8.8.8.8'; // Fallback to Google DNS for local dev

    // 1. Get location from IP using a different free service (ip-api.com)
    const geoResponse = await fetch(`http://ip-api.com/json/${ip}?fields=status,message,country,countryCode,regionName,city,lat,lon,query`);
    if (!geoResponse.ok) {
        // This service might not return a helpful statusText, so we'll create a generic one.
        return NextResponse.json({ error: `Failed to fetch location data (status: ${geoResponse.status}).` }, { status: geoResponse.status });
    }
    const locationData = await geoResponse.json();
    if (locationData.status !== 'success') {
        return NextResponse.json({ error: `Failed to get location from IP: ${locationData.message || 'Unknown error'}` }, { status: 500 });
    }
    
    const { lat: latitude, lon: longitude, countryCode: country, regionName: region, city } = locationData;
    
    if (!latitude || !longitude) {
        return NextResponse.json({ error: 'Could not determine location from IP.' }, { status: 404 });
    }

    // 2. Get weather data using location
    const openWeatherApiKey = process.env.NEXT_PUBLIC_OPENWEATHERMAP_API_KEY;
    if (!openWeatherApiKey) {
        throw new Error("OpenWeatherMap API key is not configured.");
    }
    const units = country === 'US' ? 'imperial' : 'metric';
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${openWeatherApiKey}&units=${units}`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${openWeatherApiKey}&units=${units}&cnt=6`;

    const [weatherResponse, forecastResponse] = await Promise.all([
        fetch(weatherUrl),
        fetch(forecastUrl),
    ]);

    if (!weatherResponse.ok) throw new Error('Failed to fetch current weather');
    if (!forecastResponse.ok) throw new Error('Failed to fetch forecast');

    const weatherData = await weatherResponse.json();
    const forecastData = await forecastResponse.json();

    return NextResponse.json({
        locationData: { city, region, country },
        weatherData,
        forecastData
    });

  } catch (error: any) {
    console.error('[API/WEATHER_ERROR]', error.message);
    return new NextResponse(
        JSON.stringify({ error: error.message }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
