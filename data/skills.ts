export type Skill = {
  name: string;
  icon: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  percent: number;
};

export type SkillCategory = {
  id: string;
  label: string;
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "programming",
    label: "Programming",
    skills: [
      { name: "Python",     icon: "🐍", level: "Advanced",     percent: 85 },
      { name: "Java",       icon: "☕", level: "Intermediate",  percent: 72 },
      { name: "JavaScript", icon: "⚡", level: "Advanced",     percent: 88 },
      { name: "TypeScript", icon: "🔷", level: "Intermediate",  percent: 70 },
      { name: "PHP",        icon: "💡", level: "Intermediate",  percent: 68 },
      { name: "C / C++",   icon: "🦀", level: "Beginner",      percent: 45 },
    ],
  },
  {
    id: "web",
    label: "Web",
    skills: [
      { name: "React.js",     icon: "⚛️", level: "Advanced",    percent: 85 },
      { name: "Next.js",      icon: "🔺", level: "Intermediate", percent: 75 },
      { name: "Node.js",      icon: "💚", level: "Intermediate", percent: 72 },
      { name: "Tailwind CSS", icon: "🎨", level: "Advanced",    percent: 90 },
      { name: "Bootstrap",    icon: "🔷", level: "Advanced",    percent: 82 },
      { name: "Laravel",      icon: "🌿", level: "Intermediate", percent: 68 },
    ],
  },
  {
    id: "database",
    label: "Database",
    skills: [
      { name: "MySQL",      icon: "🐬", level: "Advanced",    percent: 85 },
      { name: "MongoDB",    icon: "🍃", level: "Intermediate", percent: 70 },
      { name: "PostgreSQL", icon: "🐘", level: "Intermediate", percent: 65 },
      { name: "Firebase",   icon: "🔥", level: "Intermediate", percent: 72 },
    ],
  },
  {
    id: "tools",
    label: "Tools",
    skills: [
      { name: "Git / GitHub",   icon: "🐙", level: "Advanced",    percent: 87 },
      { name: "Docker",         icon: "🐳", level: "Beginner",     percent: 45 },
      { name: "TensorFlow",     icon: "🧠", level: "Intermediate", percent: 65 },
      { name: "OpenCV",         icon: "👁️", level: "Intermediate", percent: 68 },
      { name: "Figma",          icon: "🎯", level: "Intermediate", percent: 70 },
      { name: "Android Studio", icon: "📱", level: "Intermediate", percent: 65 },
    ],
  },
];
