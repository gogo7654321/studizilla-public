import { Metadata } from 'next';
import { notFound, redirect } from 'next/navigation';
import { getUserProfileByUsername, type PublicUserProfile } from '@/app/profile/actions';
import { ProfileView } from './ProfileView';

type ProfilePageProps = {
  params: Promise<{ username: string }>;
};

const STUDIZILLA_USERNAME = 'studizilla';

export async function generateMetadata({ params }: ProfilePageProps): Promise<Metadata> {
  const { username } = await params;
  
  // Special metadata for Studizilla
  if (username === STUDIZILLA_USERNAME) {
    return {
      title: 'Studizilla Official - Your AI Study Companion',
      description: 'Official Studizilla account providing curated course materials, study guides, and resources to help you ace your exams!',
    };
  }

  const profile = await getUserProfileByUsername(username, null);

  if (!profile) {
    return {
      title: 'Profile Not Found',
    };
  }

  return {
    title: `${profile.displayName} (@${profile.username})`,
    description: profile.bio || `View ${profile.displayName}'s profile, study decks, and courses on Studizilla.`,
  };
}

export default async function ProfilePage({ params }: ProfilePageProps) {
  const { username } = await params;

  if (!username) {
    notFound();
  }

  // Redirect to static Studizilla profile
  if (username === STUDIZILLA_USERNAME) {
    redirect('/profile/studizilla');
  }

  const profile = await getUserProfileByUsername(username, null);

  if (!profile) {
    notFound();
  }

  return <ProfileView initialProfile={profile} />;
}
