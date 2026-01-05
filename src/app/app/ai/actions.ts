
'use server';

import { z } from 'zod';
import { ai } from './genkit.config';
import { adminDb } from '@/lib/firebase-server';
import { FieldValue, Timestamp } from 'firebase-admin/firestore';
import { isSameDay } from 'date-fns';
import type { CourseDetails } from '@/lib/course-data/course-details-schema';


// --- DECK GENERATION FROM PROMPT ---
const GenerateDeckFromPromptInputSchema = z.object({
  prompt: z.string(),
  model: z.string().optional(),
});
type GenerateDeckFromPromptInput = z.infer<typeof GenerateDeckFromPromptInputSchema>;

const GenerateDeckFromPromptOutputSchema = z.object({
  title: z.string(),
  description: z.string(),
  courseId: z.string().optional(),
  hashtags: z.array(z.string()),
  cards: z.array(
    z.object({
      term: z.string(),
      definition: z.string(),
    })
  ),
});
export type GenerateDeckFromPromptOutput = z.infer<typeof GenerateDeckFromPromptOutputSchema>;

const deckGenerationPrompt = ai.definePrompt({
  name: 'generateDeckFromPromptPrompt',
  input: { schema: GenerateDeckFromPromptInputSchema },
  output: { schema: GenerateDeckFromPromptOutputSchema },
  prompt: `You are an expert educational content creator specializing in flashcard decks for AP and Honors level students.
    
    Based on the following prompt, generate a complete flashcard deck. The deck should have a clear title, a concise and informative description, relevant hashtags, and a set of high-quality term-definition pairs.
    
    If the prompt clearly corresponds to a specific AP course, include the courseId in your response. The courseId should match the 'id' field from the provided course list exactly (e.g., 'ap_us_history', 'ap_biology').
    
    PROMPT:
    "{{prompt}}"
    
    Respond with a well-structured JSON object. Ensure all fields are filled appropriately based on the prompt. The "cards" array should contain between 10 and 30 flashcards.
    `,
});

const generateDeckFromPromptFlow = ai.defineFlow(
  {
    name: 'generateDeckFromPromptFlow',
    inputSchema: GenerateDeckFromPromptInputSchema,
    outputSchema: GenerateDeckFromPromptOutputSchema,
  },
  async (input) => {
    const { output } = await deckGenerationPrompt(input, {
        model: 'googleai/gemini-2.5-flash',
    });
    if (!output) {
      throw new Error("AI failed to generate a response for the deck.");
    }
    return output;
  }
);


// --- SINGLE CARD FIELD GENERATION ---
const GenerateSingleCardFieldInputSchema = z.object({
  uid: z.string(),
  generate: z.enum(['term', 'definition']),
  source: z.string().min(1, {message: 'Source content cannot be empty.'}),
  context: z
    .string()
    .optional()
    .describe('Optional context from other cards in the deck.'),
});
export type GenerateSingleCardFieldInput = z.infer<typeof GenerateSingleCardFieldInputSchema>;

const GenerateSingleCardFieldOutputSchema = z.object({
  generatedText: z
    .string()
    .describe('The generated text for the term or definition.'),
});
export type GenerateSingleCardFieldOutput = z.infer<typeof GenerateSingleCardFieldOutputSchema>;

const generationPrompt = ai.definePrompt({
  name: 'generateSingleCardFieldPrompt',
  model: 'googleai/gemini-2.5-flash',
  input: { schema: GenerateSingleCardFieldInputSchema },
  output: { schema: GenerateSingleCardFieldOutputSchema },
  prompt: `You are a flashcard creation assistant. Based on the provided source {{generate}}, generate a concise and accurate {{generate}}.
    
    Respond with ONLY the generated text, without any labels, markdown, or extra formatting.

    {{#if context}}
    For context, here are other cards in the deck:
    {{{context}}}
    {{/if}}

    Source {{#if generate == 'term'}}Definition{{else}}Term{{/if}}: "{{source}}"
    ---
    Generated {{generate}}:
    `,
});

const generateSingleCardFieldFlow = ai.defineFlow(
  {
    name: 'generateSingleCardFieldFlow',
    inputSchema: GenerateSingleCardFieldInputSchema,
    outputSchema: GenerateSingleCardFieldOutputSchema,
  },
  async input => {
    const { output } = await generationPrompt(input, { model: 'googleai/gemini-2.5-flash' });
    if (!output) {
        throw new Error('AI failed to generate a response.');
    }
    return output;
  }
);


// --- DECK METADATA SUGGESTION ---
const GenerateDeckMetadataInputSchema = z.object({
    cards: z.array(z.object({ term: z.string(), definition: z.string() })).min(1, "At least one card is required."),
    userId: z.string(),
    deckId: z.string(),
});
type GenerateDeckMetadataInput = z.infer<typeof GenerateDeckMetadataInputSchema>;

const GenerateDeckMetadataOutputSchema = z.object({
    title: z.string().describe('A concise, descriptive title for the deck.'),
    description: z.string().describe('A brief (1-2 sentence) summary of the deck\'s content.'),
    hashtags: z.array(z.string()).describe('An array of 3-5 relevant, one-word, lowercase hashtags.'),
    courseId: z.string().optional().describe('The ID of the most relevant AP® course, if applicable.'),
});
export type GenerateDeckMetadataOutput = z.infer<typeof GenerateDeckMetadataOutputSchema>;

const suggestDeckMetadataFlow = ai.defineFlow(
  {
    name: 'suggestDeckMetadataFlow',
    inputSchema: GenerateDeckMetadataInputSchema,
    outputSchema: GenerateDeckMetadataOutputSchema,
  },
  async ({ cards }) => {
    const cardSamples = cards.slice(0, 15).map(c => `Term: ${c.term}\nDefinition: ${c.definition}`).join('\n\n');
    
    const prompt = ai.definePrompt({
      name: 'suggestDeckMetadataPrompt',
      model: 'googleai/gemini-2.5-flash',
      output: { schema: GenerateDeckMetadataOutputSchema },
      prompt: `Based on the following flashcard samples, generate a concise title, a brief description, 3-5 relevant one-word hashtags, and an associated AP® course ID if applicable.
      
      CARD SAMPLES:
      ${cardSamples}
      `,
    });

    const { output } = await prompt({}, { model: 'googleai/gemini-2.5-flash' });
    if (!output) {
      throw new Error('AI failed to suggest metadata.');
    }
    return output;
  }
);

// --- All Server Actions ---

export async function generateDeckFromPromptAction(
  input: GenerateDeckFromPromptInput
): Promise<GenerateDeckFromPromptOutput> {
  return generateDeckFromPromptFlow(input);
}

export async function generateSingleCardFieldAction(
  input: GenerateSingleCardFieldInput
): Promise<GenerateSingleCardFieldOutput> {
  return generateSingleCardFieldFlow(input);
}

export async function generateDeckMetadataAction(
  input: GenerateDeckMetadataInput
): Promise<GenerateDeckMetadataOutput> {
  return suggestDeckMetadataFlow(input);
}

const DAILY_GENERATION_LIMIT = 10;
/**
 * A server action that takes notes, generates flashcards and metadata via AI,
 * creates a new deck in Firestore, and returns the ID of the new deck.
 * It also enforces a daily generation limit per user.
 * @param uid The user's ID.
 * @param options The options for flashcard generation, including the prompt text.
 * @returns The ID of the newly created deck.
 */
export async function processNotesAndCreateDeck(uid: string, options: GenerateDeckFromPromptInput): Promise<string> {
    if (!uid || !options.prompt) {
        throw new Error("User ID and prompt are required.");
    }
    
    const userDocRef = adminDb.collection('users').doc(uid);
    const userDoc = await userDocRef.get();
    const userData = userDoc.data();

    // --- Rate Limiting Check ---
    const lastGenerationDate = (userData?.lastAIGeneration as Timestamp)?.toDate();
    const generationCount = userData?.aiGenerationCount || 0;
    const today = new Date();

    if (lastGenerationDate && isSameDay(lastGenerationDate, today)) {
        if (generationCount >= DAILY_GENERATION_LIMIT) {
            throw new Error(`You have reached the daily limit of ${DAILY_GENERATION_LIMIT} AI generations. Please try again tomorrow.`);
        }
    }

    try {
        // Step 1: Call the AI flow to generate the full deck content
        const aiResponse: GenerateDeckFromPromptOutput = await generateDeckFromPromptFlow(options);
        
        // Step 2: Prepare the deck data for Firestore
        const newDeckRef = adminDb.collection('courseDecks').doc();
        
        const cardsForFirestore = aiResponse.cards.map(card => ({
            id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
            term: card.term,
            definition: card.definition,
            hint: '',
            options: [],
            cardType: 'term-definition',
        }));

        // Step 3: Set the new deck data, including metadata from the AI
        await newDeckRef.set({
            title: aiResponse.title,
            description: aiResponse.description,
            hashtags: aiResponse.hashtags.join(' '),
            courseId: aiResponse.courseId || null,
            cards: cardsForFirestore,
            status: 'draft',
            isPublic: true,
            createdAt: FieldValue.serverTimestamp(),
            updatedAt: FieldValue.serverTimestamp(),
            isPinned: false,
            ownerId: uid,
            ownerName: userData?.displayName || 'Anonymous',
            ownerPhotoURL: userData?.photoURL || null,
            ownerUsername: userData?.username || 'anonymous',
            generatedBy: 'ai-prompt',
        });

        // Step 4: Update user's generation count
        await userDocRef.update({
            lastAIGeneration: Timestamp.fromDate(today),
            aiGenerationCount: (lastGenerationDate && isSameDay(lastGenerationDate, today)) ? FieldValue.increment(1) : 1,
        });

        // Step 5: Return the new deck's ID
        return newDeckRef.id;

    } catch (e: any) {
        console.error("Error processing notes and creating deck:", e);
        // Bubble up a user-friendly error message
        throw new Error(e.message || 'An unexpected error occurred while generating the deck.');
    }
}

    