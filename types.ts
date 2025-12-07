export interface Project {
  title: string;
  tech: string[];
  description: string[];
  impact: string;
  link?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
  score: string;
  location: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
