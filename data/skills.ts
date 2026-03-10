// data/skills.ts
// Icon menggunakan nama dari react-icons — di-render di Skills.tsx

export type SkillLevel = "Beginner" | "Intermediate" | "Advanced";

export interface Skill {
  name:    string;
  iconKey: string;   // key untuk mapping ke React Icons di Skills.tsx
  level:   SkillLevel;
  percent: number;
}

export interface SkillCategory {
  id:     string;
  label:  string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    id:    "frontend",
    label: "Frontend",
    skills: [
      { name: "React",       iconKey: "react",       level: "Advanced",      percent: 85 },
      { name: "Next.js",     iconKey: "nextjs",      level: "Advanced",      percent: 82 },
      { name: "TypeScript",  iconKey: "typescript",  level: "Intermediate",  percent: 72 },
      { name: "Tailwind",    iconKey: "tailwind",    level: "Advanced",      percent: 90 },
      { name: "HTML5",       iconKey: "html",        level: "Advanced",      percent: 95 },
      { name: "CSS3",        iconKey: "css",         level: "Advanced",      percent: 88 },
    ],
  },
  {
    id:    "backend",
    label: "Backend",
    skills: [
      { name: "Node.js",     iconKey: "nodejs",      level: "Intermediate",  percent: 70 },
      { name: "Express",     iconKey: "express",     level: "Intermediate",  percent: 68 },
      { name: "MySQL",       iconKey: "mysql",       level: "Intermediate",  percent: 72 },
      { name: "Firebase",    iconKey: "firebase",    level: "Intermediate",  percent: 75 },
      { name: "PHP",         iconKey: "php",         level: "Beginner",      percent: 50 },
    ],
  },
  {
    id:    "mobile",
    label: "Mobile",
    skills: [
      { name: "Flutter",     iconKey: "flutter",     level: "Intermediate",  percent: 74 },
      { name: "Dart",        iconKey: "dart",        level: "Intermediate",  percent: 70 },
      { name: "Android",     iconKey: "android",     level: "Beginner",      percent: 55 },
    ],
  },
  {
    id:    "tools",
    label: "Tools",
    skills: [
      { name: "Git",         iconKey: "git",         level: "Advanced",      percent: 85 },
      { name: "GitHub",      iconKey: "github",      level: "Advanced",      percent: 88 },
      { name: "VS Code",     iconKey: "vscode",      level: "Advanced",      percent: 95 },
      { name: "Figma",       iconKey: "figma",       level: "Intermediate",  percent: 68 },
      { name: "Linux",       iconKey: "linux",       level: "Intermediate",  percent: 65 },
      { name: "Docker",      iconKey: "docker",      level: "Beginner",      percent: 45 },
    ],
  },
];