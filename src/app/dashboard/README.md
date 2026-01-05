# New Dashboard - The Claude Way! 🚀

## Overview
A completely rebuilt dashboard system with modern architecture, better performance, and enhanced user experience.

## Structure

```
src/app/dashboard/
├── page.tsx                 # Main dashboard with react-grid-layout
├── layout.tsx               # Auth wrapper
├── dashboard.css            # Grid styling & animations
├── widgets/                 # All widget components
│   ├── ClassProgress.tsx
│   ├── Schedule.tsx
│   ├── TodoList.tsx
│   ├── DailyGoals.tsx
│   ├── FocusZone.tsx
│   ├── FlashcardsWidget.tsx
│   └── QuickTools.tsx
└── components/              # Dashboard-specific components
    ├── DashboardHeader.tsx
    ├── DashboardSidebar.tsx
    ├── DashboardCustomizer.tsx
    └── WeatherWidget.tsx
```

## Features

### Core Widgets
1. **Class Progress** - Track enrolled courses with XP and progress bars
2. **Schedule** - Today's calendar events with completion checkboxes
3. **Todo List** - Task management with priorities and course filters
4. **Daily Goals** - Daily goal tracking with progress percentage
5. **Focus Zone** - Pomodoro timer with circular progress & notifications
6. **Flashcards Widget** - Recently studied decks with mastery levels
7. **Quick Tools** - Quick access to AI-powered study tools

### Header Components
- **Welcome Message** - Personalized greeting with motivational quotes
- **Streak Counter** - Daily login streak with flame icon
- **Current Time** - Real-time clock with date
- **Weather Widget** - Live weather using OpenWeather API + Cloudflare trace
- **Theme Customizer** - Quick theme preset selector

### Sidebar
- **Navigation** - Dashboard, Flashcards, Classes, Tools, Calendar, Social
- **User Profile** - Avatar with dropdown menu
- **Dev Portal Access** - For developer accounts
- **Settings & Support** - Quick access links

## APIs Used

### Weather System
- **Cloudflare Trace API**: Get user's IP address
- **ip-api.com**: Convert IP to geolocation
- **OpenWeather API**: Fetch current weather data

### Firebase Firestore
- `users/{uid}` - User settings, streaks, layouts
- `users/{uid}/tasks` - Todo items
- `users/{uid}/goals` - Daily goals
- `users/{uid}/events` - Calendar events
- `users/{uid}/decks` - Flashcard decks

## Key Features

### Drag & Drop Grid
- Responsive breakpoints (lg, md, sm, xs, xxs)
- Persistent layouts saved to Firestore
- Smooth animations and transitions
- Touch-friendly on mobile

### Theme Customization
- Multiple preset themes
- Real-time preview
- Gradient backgrounds
- Persistent across sessions

### Smart Widgets
- Real-time Firestore sync
- Loading states with skeletons
- Empty states with call-to-actions
- Error boundaries

### Pomodoro Timer
- Customizable work/break durations
- Visual progress ring
- Browser notifications
- Session counter
- Settings persistence

## Environment Variables

Add to `.env.local`:
```
NEXT_PUBLIC_OPENWEATHER_API_KEY=your_api_key_here
```

Get your free API key at: https://openweathermap.org/api

## Responsive Design

- **Desktop (1200px+)**: 12 column grid, full sidebar
- **Tablet (768-1199px)**: Stacked widgets, collapsible sidebar
- **Mobile (<768px)**: Single column, icon-only sidebar

## Performance

- Dynamic imports for heavy components
- Lazy-loaded widgets
- Optimized re-renders
- Debounced layout saves
- Efficient Firestore queries

## Animations

- Card entrance animations
- Drag handle hover effects
- Smooth resize transitions
- Progress ring animations
- Theme switch transitions

## Next Steps

- [ ] Add more timer sounds
- [ ] Implement widget marketplace
- [ ] Add custom widget creation
- [ ] Enhanced analytics
- [ ] Social features integration
- [ ] Lock-In Labs feature
- [ ] Mobile app companion

## Built With ❤️

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Shadcn UI
- Firebase
- react-grid-layout
- date-fns
- Framer Motion (for future animations)

---

**The Claude Way**: Clean architecture, type-safe, performant, and beautiful! 🎯
