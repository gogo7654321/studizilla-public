import { Metadata } from 'next';
import { StudizillaStaticProfile } from './StudizillaStaticProfile';

export const metadata: Metadata = {
  title: 'Studizilla Official - Your AI Study Companion',
  description: 'Official Studizilla account providing curated course materials, study guides, and resources to help you ace your exams!',
};

export default function StudizillaProfilePage() {
  return <StudizillaStaticProfile />;
}
