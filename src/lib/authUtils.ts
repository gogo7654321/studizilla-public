
import type { User } from 'firebase/auth';

const allowedEmails = [
  'epikmathdev@gmail.com',
  'npatel012010@gmail.com',
  'team@studizilla.com',
  'studizilla@gmail.com',
  'artval4games@gmail.com'
];

const ownerUID = '95gCM3yprJdpj2F0nLgLyEAd2E53';

// This function now accepts a simpler object with an email and optionally a uid.
export function isDev(user: { email?: string | null | undefined, uid?: string | null | undefined } | null): boolean {
  if (!user) {
    return false;
  }
  
  // Check if the UID matches the owner's UID
  if (user.uid && user.uid === ownerUID) {
    return true;
  }

  // Fallback to checking the email list
  if (user.email && allowedEmails.includes(user.email)) {
    return true;
  }
  
  return false;
}
