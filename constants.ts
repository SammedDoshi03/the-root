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
    image: "https://image.pollinations.ai/prompt/mobile%20app%20ui%20design%20mindful%20eating%20nutrition%20tracker%20food%20recognition%20ai%20clean%20modern%20interface?width=1280&height=720&nologo=true&seed=101",
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
    image: "https://image.pollinations.ai/prompt/mobile%20app%20ui%20travel%20planner%20itinerary%20gemini%20ai%20map%20interface%20vibrant%20modern?width=1280&height=720&nologo=true&seed=102",
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
    image: "https://image.pollinations.ai/prompt/mobile%20app%20ui%20dairy%20products%20milk%20delivery%20e-commerce%20fresh%20white%20blue%20clean?width=1280&height=720&nologo=true&seed=103",
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
    image: "https://image.pollinations.ai/prompt/mobile%20app%20ui%20asset%20management%20system%20dashboard%20inventory%20business%20blue%20corporate?width=1280&height=720&nologo=true&seed=104",
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
    image: "https://image.pollinations.ai/prompt/web%20dashboard%20analytics%20charts%20commodity%20price%20analysis%20data%20visualization%20dark%20mode?width=1280&height=720&nologo=true&seed=105",
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
    image: "https://image.pollinations.ai/prompt/mobile%20app%20ui%20social%20media%20login%20screen%20flutter%20gradient%20purple%20modern%20sleek?width=1280&height=720&nologo=true&seed=106",
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
    image: "https://image.pollinations.ai/prompt/website%20ui%20creative%20writing%20blog%20poetry%20minimalist%20typography%20elegant%20artsy?width=1280&height=720&nologo=true&seed=107",
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
    image: "https://image.pollinations.ai/prompt/website%20ui%20matchmaking%20dating%20profiles%20connections%20love%20hearts%20red%20theme%20classic?width=1280&height=720&nologo=true&seed=108",
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
    image: "https://image.pollinations.ai/prompt/technical%20article%20header%20react%20code%20firebase%20logo%20developer%20screen%20programming?width=1280&height=720&nologo=true&seed=109",
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