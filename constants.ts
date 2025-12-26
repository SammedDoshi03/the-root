import { Experience, Project, SkillCategory, Education, Certification } from './types';

export const SOCIAL_LINKS = {
  linkedin: "https://linkedin.com/in/sammeddoshi03",
  github: "https://github.com/sammeddoshi03",
  email: "sammeddoshi03.sd@gmail.com",
};

export const ABOUT_TEXT = "Senior Software Engineer with 3.5+ years of experience specializing in scalable React Native, TypeScript, and GenAI-enabled enterprise applications. Proven ability to deliver high-performance solutions for global Banking and Energy sectors. Strengths include bridging Native Modules, architecting scalable design systems, and leading accessibility (a11y) initiatives.";

export const EXPERIENCES: Experience[] = [
  {
    company: "Capgemini Technology Services India Limited",
    role: "Senior Software Engineer",
    location: "Mumbai, India",
    period: "August 2022 – Present",
    clients: ["Major Energy Sector Client", "Major Banking Sector Client"],
    achievements: [
      "Accelerated development lifecycle by 20%, delivering the flagship mobile app 2 weeks ahead of schedule through AI-assisted coding and offline-first architecture.",
      "Engineered a component-based frontend using Redux Toolkit and Hooks for the banking client, reducing code redundancy by 30% and serving 1M+ active users.",
      "Built custom Native Modules (Android/iOS) to bridge legacy SDKs for hardware integration.",
      "Led inclusive design implementing 20+ a11y enhancements for TalkBack/VoiceOver, ensuring WCAG compliance.",
      "Orchestrated multi-environment CI/CD pipelines (Dev, Stage, Prod) utilizing Android Flavors.",
      "Mentored 4 developers ensuring 95% adherence to Agile sprint commitments.",
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "MindfulBite",
    category: "Mobile & AI",
    description: "An intelligent nutrition tracking application designed to promote mindful eating habits through AI-powered food analysis and personalized health insights.",
    tech: ["React Native", "GenAI", "TypeScript", "Firebase"],
    image: "https://picsum.photos/id/292/800/600",
    github: "https://github.com/SammedDoshi03/MindfulBite",
    highlights: [
      "Implemented AI-based food recognition for instant logging.",
      "Real-time nutrition analysis and tracking dashboard.",
      "User-friendly interface focused on accessibility."
    ]
  },
  {
    title: "AI-Powered Travel Planner",
    category: "Mobile & AI",
    description: "Developed a consumer-facing mobile app using Gemini GenAI API for personalized travel itineraries, real-time suggestions, and budget optimization. Architected the full application including Firestore data models.",
    tech: ["React Native", "GenAI", "Gemini API", "Firestore", "Google Cloud"],
    image: "https://picsum.photos/id/48/800/600",
    github: "https://github.com/SammedDoshi03/AI-Powered-Travel-Planner",
    highlights: [
      "Built complete '0-to-1' product focusing on AI-driven UX.",
      "Integrated external travel APIs for real-time data.",
      "Implemented Internationalization features."
    ]
  },
  {
    title: "E-Commerce Dairy Product App",
    category: "Mobile",
    description: "Spearheaded a full-stack React Native app for browsing and purchasing daily dairy products. Focused on dynamic subscription models and category mapping.",
    tech: ["React Native", "Redux", "Firebase Auth", "Firestore"],
    image: "https://picsum.photos/id/225/800/600",
    github: "https://github.com/SammedDoshi03/E-Commerce-Dairy-Product-App",
    highlights: [
      "Achieved 70% completion in 2 months with a 2-developer team.",
      "Designed key User, Home, and Category screens.",
      "Researched 3rd party API integration for subscriptions."
    ]
  },
  {
    title: "Asset Management System",
    category: "Mobile",
    description: "Developed a React Native mobile tool POC for allocating and managing assets and employee info in small organizations.",
    tech: ["React Native", "Redux Toolkit", "Firebase", "Cloud Messaging"],
    image: "https://picsum.photos/id/180/800/600",
    github: "https://github.com/SammedDoshi03/Asset-Management-System",
    highlights: [
      "Delivered POC ahead of deadline.",
      "Implemented comprehensive Firebase integration (Auth, Firestore, Remote Config).",
      "Utilized Saga Framework for side effects."
    ]
  },
  {
    title: "Commodity Price Analysis",
    category: "Web & ML",
    description: "Web-based system using MERN stack to analyze consumer goods price variations via e-commerce data and social media sentiment.",
    tech: ["MERN Stack", "Web Scraping", "Sentiment Analysis", "Mocha"],
    image: "https://picsum.photos/id/20/800/600",
    github: "https://github.com/SammedDoshi03/Commodity-Price-Analysis",
    highlights: [
      "Combined web scraping with Twitter sentiment analysis.",
      "Identified potential drivers for price changes.",
      "Forecasted short-term trends with reasonable accuracy."
    ]
  },
  {
    title: "Forelsket",
    category: "Mobile",
    description: "A Flutter application integrating multiple social media authentication methods (Google, Facebook) with Firebase backend.",
    tech: ["Flutter", "Firebase", "Dart", "Social Auth"],
    image: "https://picsum.photos/id/325/800/600",
    link: "https://www.youtube.com/watch?v=mmFpqPYjPYQ&ab_channel=SAM",
    github: "https://github.com/SammedDoshi03/Forelsket",
    highlights: [
      "Implemented seamless Signup/Login flows.",
      "Profile management with photo updates.",
      "Secure password reset functionality."
    ]
  },
  {
    title: "The Bus Stop Guy",
    category: "Web",
    description: "Django-based web platform for sharing creative content like poems and articles, uniquely tagged with photos.",
    tech: ["Django", "Python", "PL/SQL", "HTML/CSS"],
    image: "https://picsum.photos/id/435/800/600",
    github: "https://github.com/SammedDoshi03/The-Bus-Stop-Guy",
    highlights: [
      "Architected application workflow and security.",
      "Managed hashtag functionalities and search widgets.",
      "Designed engaging user interface for community interaction."
    ]
  },
  {
    title: "Virtual Matchmaking System",
    category: "Web",
    description: "Automated dating process web application enabling users to find connections and maintain virtual relationships securely.",
    tech: ["Java", "JSP", "MySQL", "Apache Tomcat"],
    image: "https://picsum.photos/id/535/800/600",
    github: "https://github.com/SammedDoshi03/Virtual-Matchmaking-System",
    highlights: [
      "Designed using Java Servlets and JDBC.",
      "Prioritized user data security and privacy.",
      "Deployed on Apache Tomcat server."
    ]
  },
  {
    title: "Firebase Auth in ReactJS",
    category: "Technical Writing",
    description: "Project-cum-article for Medium Blog implementing React Components, AuthProvider, User Management, Firebase authentication services.",
    tech: ["ReactJS", "Firebase", "Technical Writing"],
    image: "https://picsum.photos/id/635/800/600",
    link: "https://link.medium.com/ZzQJpuPdKqb",
    github: "https://github.com/SammedDoshi03/Firebase-Auth-ReactJS",
    highlights: [
      "Detailed implementation of User Management.",
      "Explained React development processes.",
      "Published on Medium."
    ]
  }
];

export const SKILLS: SkillCategory[] = [
  {
    title: "Languages & Core",
    icon: "code",
    skills: [
      { name: "TypeScript", iconKey: "typescript/typescript-original" },
      { name: "JavaScript", iconKey: "javascript/javascript-original" },
      { name: "Java", iconKey: "java/java-original" },
      { name: "HTML5", iconKey: "html5/html5-original" },
      { name: "CSS3", iconKey: "css3/css3-original" }
    ]
  },
  {
    title: "Mobile & Frontend",
    icon: "layout",
    skills: [
      { name: "React Native", iconKey: "react/react-original" },
      { name: "React.js", iconKey: "react/react-original" },
      { name: "Redux", iconKey: "redux/redux-original" },
      { name: "Tailwind CSS", iconKey: "tailwindcss/tailwindcss-original" }
    ]
  },
  {
    title: "Backend & Cloud",
    icon: "database",
    skills: [
      { name: "Node.js", iconKey: "nodejs/nodejs-original" },
      { name: "Express.js", iconKey: "express/express-original" },
      { name: "Firebase", iconKey: "firebase/firebase-plain" },
      { name: "MongoDB", iconKey: "mongodb/mongodb-original" },
      { name: "MySQL", iconKey: "mysql/mysql-original" }
    ]
  },
  {
    title: "Tools & DevOps",
    icon: "tool",
    skills: [
      { name: "Git", iconKey: "git/git-original" },
      { name: "Android Studio", iconKey: "android/android-original" },
      { name: "Jira", iconKey: "jira/jira-original" },
      { name: "Jest", iconKey: "jest/jest-plain" }
    ]
  }
];

export const EDUCATION: Education = {
  institution: "Savitribai Phule Pune University",
  degree: "Bachelor of Engineering (B.E.) in Computer Engineering",
  location: "Pune, India",
  date: "May 2022",
  honors: "Honours in Artificial Intelligence and Machine Learning"
};

export const CERTIFICATIONS: Certification[] = [
  { name: "React Query / TanStack Query: Server State Management", issuer: "Udemy" },
  { name: "React Native: Advance Concept", issuer: "Udemy" },
  { name: "AI & Generative AI: Executive Briefing", issuer: "Pluralsight" },
  { name: "Agile Software Development", issuer: "Coursera" }
];