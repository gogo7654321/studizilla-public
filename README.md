# ⚡ Studizilla

Studizilla is a modern study platform built by Neil Mendpara to help high school students stay organized and actually learn their AP content without juggling five different tools.
(TLDR? pretty much the better version on quizlet)
This repo is the PUBLIC-FACING version of Studizilla.
Sensitive credentials (API keys, service accounts, production configs) was NOT included and is in a private deployment while we migrate to Google Cloud Secret Manager.

---

## What It Does

- AI-powered study help (flashcards, explanations, concept breakdowns)
- Interactive flashcards with spaced repetition and games
- Full-length AP-style practice tests with scoring
- Unit-by-unit study guides for 40+ AP and honors classes
- Built-in focus timer (Pomodoro-style)
- Dashboard for classes, tasks, and progress tracking

The focus is speed, clarity, and staying locked in — not cramming features nobody uses.

---

## Who It’s For

- High school students taking AP classes
- Students who want structure without clutter
- Anyone tired of messy study tools and paywalls

---

## Tech Stack

### Frontend
- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS 

### Backend
- Firebase/GCP (OAuth, Firestore, Storage)
- Next.js API Routes
- Genkit
- Google Gemini (AI)
- repactcha (no bots!)

---

## Key Features

- Custom animated themes!!! (very unique and tailored to gen z/alpha)
- Google OAuth authentication
- Real-time progress tracking
- Integrated music player (we know what students want)
- Accessibility support (including dyslexia-friendly fonts)

---

## Setup (Public Repo)

### Prerequisites

- Node.js 18+
- Firebase project (Auth, Firestore, Storage)
- Google Gemini API key
- reCAPTCHA v2 keys


### Environment Variables

Create a local env file with same format as .env.example

Required variables:
  NEXT_PUBLIC_FIREBASE_*
  GEMINI_API_KEY
  NEXT_PUBLIC_RECAPTCHA_SITE_KEY
  RECAPTCHA_SECRET_KEY
  NEXT_PUBLIC_GOOGLE_CLIENT_ID

Production secrets and admin credentials are NOT stored in this repository.
They exist only in the private deployment repo with workflow while migrating to Google Cloud Secret Manager.

## License

Educational use only.
All study content is based on publicly available AP resources.

---

Built for students who want to study smarter, not longer.
contact me with issues or team@studizilla.com
