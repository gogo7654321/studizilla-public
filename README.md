# ⚡ Studizilla

**Studizilla** is a sleek academic platform built to help students **crush their AP courses** with ease.  
Designed with performance, clarity, and user experience at its core.

---

## 🧠 What It Does

- **AI-Powered Learning**: Study with Genkit-powered AI assistance using Google's Gemini
- **Interactive Flashcards**: Spaced repetition, matching games, and deep-dive study modes
- **Practice Tests**: Full-length AP practice exams with detailed scoring
- **Study Guides**: Comprehensive unit-by-unit guides for 40+ AP courses
- **Smart Dashboard**: Track progress, manage classes, and stay organized
- **Custom Timer**: Pomodoro-style focus sessions with customizable sounds
- **Calendar & Tasks**: Built-in scheduling and to-do management

---

## ✨ Built For

- High school students preparing for AP exams
- Ambitious learners who want structured study tools
- People who hate clutter and love clean, modern design

---

## 🚀 Tech Stack

### Frontend
- **Next.js 15** (App Router) + **React 18**
- **TypeScript** for type safety
- **Tailwind CSS** + **shadcn/ui** components
- **Framer Motion** for smooth animations
- **Radix UI** for accessible component primitives

### Backend
- **Firebase** (Firestore, Authentication, Storage)
- **Genkit** for AI orchestration
- **Google Generative AI** (Gemini) for content generation
- **Next.js API Routes** for serverless functions

### Key Features
- 🎨 6 custom animated themes (Sakura Drift, Frostbite Winter, etc.)
- 🔐 Google OAuth authentication
- 📊 Real-time analytics and progress tracking
- 🎵 Integrated music player with YouTube playback
- ♿ Full accessibility support with dyslexia-friendly fonts

---

## 🛠️ Setup

### Prerequisites
- Node.js 18+ 
- Firebase project with Firestore, Auth, and Storage enabled
- Google Gemini API key
- reCAPTCHA v2 site key

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/gogo7654321/studizilla-public.git
   cd studizilla-public
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` and fill in your credentials:
   - Firebase configuration (from Firebase Console)
   - Gemini API key (from Google AI Studio)
   - reCAPTCHA keys (from Google reCAPTCHA)
   - Firebase Admin SDK service account JSON
   - OpenWeatherMap API key (optional, for weather widget)

4. **Set up Firestore**
   - Deploy Firestore rules: `firebase deploy --only firestore:rules`
   - Deploy Firestore indexes: `firebase deploy --only firestore:indexes`
   - Deploy Storage rules: `firebase deploy --only storage`

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open [http://localhost:3000](http://localhost:3000)**

---

## 📦 Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── dashboard/         # Student dashboard
│   ├── classes/           # AP course pages
│   ├── ace-os/            # Flashcard creation & study
│   ├── tools/             # Study tools (essay grader, practice tests)
│   └── api/               # API routes
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── landing/          # Landing page components
│   └── backgrounds/      # Animated theme backgrounds
├── lib/                  # Utility functions and data
│   ├── course-data/      # AP course content
│   └── firebase.ts       # Firebase configuration
└── contexts/             # React context providers
```

---

## 🎯 Key Features Guide

### Flashcard System (AceOS)
- Create custom flashcard decks with AI generation
- Study modes: standard, spaced repetition, matching game, deep dive
- Import/export decks in Quizlet-compatible format
- Public deck sharing with moderation

### Practice Tests
- Full-length timed AP exams
- Multiple choice with detailed explanations
- FRQ support with AI-powered feedback
- Score calculator matching AP scoring rubrics

### Study Guides
- 500+ unit-specific study guides
- Markdown-rendered content with LaTeX math support
- Code syntax highlighting
- Printable PDF export

---

## 🔒 Security & Privacy

- API keys and service accounts are **NOT** included in this repo
- All sensitive credentials must be configured in `.env.local`
- Firebase security rules enforce proper access control
- reCAPTCHA protects forms from bots
- User data is stored securely in Firebase with proper authentication

---

## 📝 Environment Variables Reference

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_FIREBASE_*` | Firebase client config (safe to expose) | ✅ |
| `GEMINI_API_KEY` | Google Gemini API key (server-side only) | ✅ |
| `FIREBASE_SERVICE_ACCOUNT` | Firebase Admin SDK credentials (JSON) | ✅ |
| `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` | reCAPTCHA v2 site key | ✅ |
| `RECAPTCHA_SECRET_KEY` | reCAPTCHA secret (server-side only) | ✅ |
| `NEXT_PUBLIC_GOOGLE_CLIENT_ID` | Google OAuth client ID | ✅ |
| `NEXT_PUBLIC_OPENWEATHERMAP_API_KEY` | Weather widget API key | ❌ |

---

## 🚧 Status

Studizilla is in **active development**. Features are being added and refined regularly.

Current version: **0.1.0**

---

## 🦾 Contributing

This is a public version of Studizilla with core functionality exposed. Contributions are welcome!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is for educational purposes. All course content and study materials are derived from publicly available AP resources.

---

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)
- AI powered by [Google Gemini](https://ai.google.dev/)
- Hosted on Firebase

---

**Made with ❤️ for students who want to ace their AP exams**
