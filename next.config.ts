import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  output: 'standalone',
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // NOTE: Disabled optimizePackageImports (webpack) due to runtime chunk errors in the
  // client bundle ("Cannot read properties of undefined (reading 'call')") when
  // loading FloatingSettings. Re-enable only after verifying the experiment is
  // stable with our icon/radix imports.
  experimental: {},
  // Webpack config for stability in Codespaces
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      // Prevent crashes from Fast Refresh in Codespaces
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      };
    }
    return config;
  },
  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  serverExternalPackages: [
    'genkit',
    '@genkit-ai/core',
    '@genkit-ai/googleai',
    '@genkit-ai/google-genai',
    '@opentelemetry/sdk-node',
    '@opentelemetry/instrumentation',
    '@opentelemetry/exporter-trace-otlp-grpc',
    '@opentelemetry/otlp-grpc-exporter-base',
    '@grpc/grpc-js',
    'firebase-admin',
  ],
  env: {
    GEMINI_API_KEY: process.env.GEMINI_API_KEY,
    NEXT_PUBLIC_GOOGLE_CLIENT_ID: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
    NEXT_PUBLIC_RECAPTCHA_SITE_KEY: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
    NEXT_PUBLIC_OPENWEATHERMAP_API_KEY: process.env.NEXT_PUBLIC_OPENWEATHERMAP_API_KEY,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Referrer-Policy',
            value: 'no-referrer-when-downgrade',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains',
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.desmos.com https://ajax.googleapis.com https://cdnjs.cloudflare.com https://www.googletagmanager.com https://www.google-analytics.com https://cdn.jsdelivr.net https://*.google.com https://*.gstatic.com https://accounts.google.com; style-src 'self' 'unsafe-inline' https:; font-src 'self' https: data:; img-src 'self' data: https: blob:; connect-src 'self' https: wss:; media-src 'self' data: blob:; frame-src 'self' https://www.desmos.com https://*.google.com https://*.googleapis.com https://*.firebaseapp.com https://*.recaptcha.net https://www.youtube.com; object-src 'none'; base-uri 'self'; form-action 'self' https:;",
          },
        ],
      },
    ];
  },
};
export default nextConfig;