export interface Project {
  title: string;
  description: string;
  tech: string[];
  category: string;
  image?: string;
  link?: string;
  github?: string;
  highlights: string[];
}

export interface Experience {
  company: string;
  role: string;
  location: string;
  period: string;
  clients: string[];
  achievements: string[];
}

export interface Skill {
  name: string;
  iconKey: string; // Key for devicon or custom mapping
  funTooltip?: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
  icon: 'code' | 'database' | 'layout' | 'tool' | 'ai' | 'cicd';
}

export interface Education {
  institution: string;
  degree: string;
  location: string;
  date: string;
  honors: string;
}

export interface Certification {
  name: string;
  issuer: string;
}

export interface BlogPost {
  title: string;
  pubDate: string;
  link: string;
  guid: string;
  author: string;
  thumbnail: string;
  description: string;
  categories: string[];
}