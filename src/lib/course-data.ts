
export type Flashcard = {
  term: string;
  definition: string;
};

export type Question = {
  question: string;
  options: string[];
  answer: string;
};

export type Unit = {
  id: string;
  title: string;
  description: string;
  flashcards: Flashcard[];
  questions: Question[];
  content?: string;
};

export type CourseData = {
  id: string;
  slug: string;
  name: string;
  icon: string;
  description: string;
  subject: string;
  examDate: string;
  units: Unit[];
  comingSoon?: boolean;
  abbreviations?: string[];
  examWeights: { [key: string]: number };
};
