export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  type: string;
  period: string;
  location?: string;
  summary: string;
  bullets: string[];
  technologies: string[];
  accentColor: 'cyan' | 'emerald' | 'amber' | 'purple' | 'rose' | 'blue';
  highlightBadge?: string;
}

export interface PublicationItem {
  id: string;
  title: string;
  publisher: string;
  year: string;
  authors: string[];
  url: string;
  abstract: string;
  tags: string[];
  type: 'Journal / IEEE' | 'Industry Research / Medium';
}

export interface EducationItem {
  degree: string;
  field: string;
  period: string;
  institution: string;
  coursework: string[];
  grade?: string;
  badge?: string;
}

export interface SkillCategory {
  category: string;
  description: string;
  color: 'cyan' | 'emerald' | 'amber' | 'purple' | 'rose' | 'blue';
  skills: {
    name: string;
    level: 'Advanced' | 'Proficient' | 'Core';
    description?: string;
  }[];
}
