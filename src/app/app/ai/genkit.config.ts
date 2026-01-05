import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/google-genai';

// This is the global Genkit instance.
// It is used to register flows and other Genkit-related objects.
export const ai = genkit({
  plugins: [
    googleAI({
      apiKey: process.env.GEMINI_API_KEY,
    }),
  ],
  logLevel: 'debug',
  enableTracingAndMetrics: true,
});
