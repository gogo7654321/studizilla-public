'use server';

import { adminDb } from '@/lib/firebase-server';

export async function createEventWithAI(description: string, userId: string) {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error('Gemini API key not configured');
    }

    const today = new Date();
    const prompt = `Create a calendar event from this description. Today is ${today.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}.

Description: "${description}"

Return ONLY a JSON object (no markdown, no explanations):
{
  "title": "short event title (e.g., Tennis Tryouts)",
  "date": "YYYY-MM-DD",
  "time": "12:00 PM or All Day",
  "color": "blue"|"green"|"red"|"purple"|"orange",
  "location": "extract any place/location mentioned",
  "notes": "extract any important details, reminders, or things to bring",
  "recurrence": "none"|"daily"|"weekly"|"monthly"|"yearly"
}

Color guide: homework/assignments=blue, sports/clubs/activities=green, tests/exams=red, meetings=purple, personal=orange

Recurrence guide: Look for phrases like "every day"=daily, "every week"=weekly, "every month"=monthly, "every year"=yearly, otherwise=none

Extract ALL details. Keep title short. Put places in location. Put reminders/things to bring in notes. Detect if it repeats.`;

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-lite:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: {
            temperature: 0.3,
            maxOutputTokens: 200,
          }
        })
      }
    );

    if (!response.ok) {
      const error = await response.text();
      console.error('AI API error:', response.status, error);
      throw new Error(`AI API failed: ${response.status}`);
    }

    const data = await response.json();
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text?.trim();
    
    if (!text) {
      throw new Error('No response from AI');
    }
    
    const cleanText = text.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
    const event = JSON.parse(cleanText);

    // Map recurrence string to object format
    let recurrenceRule = { type: 'none' };
    if (event.recurrence && event.recurrence !== 'none') {
      recurrenceRule = { type: event.recurrence };
    }

    // Save to Firestore using admin SDK
    const eventData = {
      title: event.title || 'Event',
      date: new Date(event.date),
      time: event.time || 'All Day',
      color: ['blue', 'green', 'red', 'purple', 'orange'].includes(event.color) ? event.color : 'blue',
      location: event.location || '',
      notes: event.notes || '',
      recurrenceRule,
    };

    await adminDb.collection('users').doc(userId).collection('events').add(eventData);
    
    return { success: true, title: eventData.title };
  } catch (error: any) {
    console.error('AI event creation error:', error);
    throw new Error(error.message || 'Failed to create event');
  }
}
