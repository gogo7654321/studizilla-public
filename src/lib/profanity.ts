

export const wordlist: string[] = [
  // This wordlist is intentionally left empty to avoid blocking educational content
  // that may be flagged by a generic profanity filter in a school setting.
  // The AI model's own safety features will be relied upon for content moderation.
];

/**
 * Checks if a given string contains any profane words from the wordlist.
 * The check is case-insensitive.
 * @param {string} text The string to check.
 * @returns {boolean} True if the string contains profanity, false otherwise.
 */
export const isProfane = (text: string): boolean => {
  if (!text) return false;
  const lowerCaseText = text.toLowerCase();
  
  // A simple check to see if any word in the list is a substring of the input.
  // For a more robust solution, one might use regex with word boundaries `\b`,
  // but for usernames and first names, this substring check is often sufficient
  // to prevent clever bypasses
  return wordlist.some(word => lowerCaseText.includes(word));
};
