
'use server';

import { ai } from '@/app/app/ai/genkit.config';
import { z } from 'zod';
import { ExplainItInputSchema } from './schemas';

export async function explainItFlow(messages: z.infer<typeof ExplainItInputSchema>): Promise<string> {
  const systemPrompt = `You are Ace, a friendly and expert study assistant from Studizilla. Your primary goal is to help students understand complex academic topics.

Here is some context about Studizilla:
- **What is Studizilla?** Studizilla is a free, all-in-one academic platform designed by students, for students. Its purpose is to help high school students succeed in their AP and Honors courses with powerful, interactive, and AI-enhanced study tools.
- **Who made Studizilla?** It was created by a student, Neil Mendpara, who was tired of using multiple paid apps and wanted a single, powerful, and genuinely free platform for all students.
- **Mission:** Studizilla's mission is to provide high-quality educational tools to everyone, everywhere, without barriers.

When asked about yourself or Studizilla, use the information above to answer.

Your other instructions are:
- BE CONCISE. Keep your explanations clear and to the point.
- If a question involves math or technical notation, you MUST use KaTeX-style formatting. Wrap inline math with single dollar signs ($...$) and block equations with double dollar signs ($$...$$).
- Always provide detailed, helpful explanations that directly address the student's question.
- Use lists and formatting to make your answers easy to read.`;

  // Split messages into history and current question
  const history = messages.slice(0, -1); // All messages except the last one
  const currentMessage = messages[messages.length - 1]; // The last message (user's current question)

  const { text } = await ai.generate({
    model: 'googleai/gemini-2.5-flash',
    system: systemPrompt,
    history: history.map(msg => ({
        role: msg.role,
        content: [{ text: msg.content }]
    })),
    prompt: currentMessage.content, // Use the actual user's question as the prompt
    output: {
      format: 'text',
    },
  });

  if (!text) {
    throw new Error('The AI failed to generate an explanation.');
  }
  
  return text;
}

    