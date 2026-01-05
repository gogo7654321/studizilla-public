import { Metadata } from 'next';
import CalendarPageClient from './CalendarPage';

export const metadata: Metadata = {
  title: 'Calendar',
  description: 'Manage your study schedule, track assignments, and organize your academic calendar all in one place.',
  openGraph: {
    title: 'Calendar',
    description: 'Manage your study schedule and track assignments.',
  },
};

export default function CalendarPage() {
  return <CalendarPageClient />;
}
