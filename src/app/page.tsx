import { Metadata } from 'next';
import HomePage from './HomePage';

export const metadata: Metadata = {
  title: 'Studizilla - Ace Your APs',
  description: 'Ace Your APs with AI-powered tools and comprehensive study guides. Free flashcards, practice tests, and study resources for every AP course.',
  openGraph: {
    title: 'Studizilla - Ace Your APs',
    description: 'Ace Your APs with AI-powered tools and comprehensive study guides.',
  },
};

export default function Page() {
  return <HomePage />;
}

