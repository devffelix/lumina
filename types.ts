

export interface BibleBook {
  name: string;
  englishName: string; // Used for API calls
  chapters: number;
  testament: 'Old' | 'New';
  abbrev: string;
}

export interface DailyVerse {
  text: string;
  reference: string;
}

export interface UserProgress {
  readChapters: string[]; // Format: "BookName-ChapterNumber"
  lastRead: string | null;
  streak: number;
  lastLoginDate: string | null;
}

export enum Mood {
  Anxious = 'Ansioso',
  Happy = 'Feliz',
  Tired = 'Cansado',
  Thankful = 'Grato',
  Sad = 'Triste',
  Confused = 'Confuso',
  Angry = 'Com Raiva'
}

export interface SongSuggestion {
  id: string;
  title: string;
  artist: string;
  reason: string;
  audioUrl?: string; // Link direto para o arquivo MP3
}

export interface Challenge {
  id: string;
  title: string;
  description: string;
  days: number;
  theme: string;
}

export interface ChallengeDayContent {
  verse: string;
  thought: string;
  action: string;
  reflection: string;
}

export interface BibleApiResponse {
  reference: string;
  verses: {
    book_id: string;
    book_name: string;
    chapter: number;
    verse: number;
    text: string;
  }[];
  text: string;
  translation_id: string;
  translation_name: string;
  translation_note: string;
}

export interface Note {
  id: string;
  reference: string;
  text: string;
  date: string;
  book: string;
  chapter: number;
  verse: number;
}

export interface AudioContextType {
  currentSong: SongSuggestion | null;
  isPlaying: boolean;
  progress: number; // Current time in seconds
  duration: number; // Total duration in seconds
  volume: number; // 0 to 1
  playSong: (song: SongSuggestion) => void;
  togglePlay: () => void;
  seek: (time: number) => void;
  setVolume: (level: number) => void; // level 0 to 1
  closePlayer: () => void;
}