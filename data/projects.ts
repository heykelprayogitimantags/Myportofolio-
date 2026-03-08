export type Project = {
  id: number;
  title: string;
  desc: string;
  category: "web" | "android" | "aiml";
  tags: string[];
  icon: string;
  gradient: string;
  github: string;
  demo: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "MonzaRadar",
    desc:
      "Interactive store mapping platform for Medan city. Helps users discover and locate stores with real-time location data and smart filtering.",
    category: "web",
    tags: ["Next.js", "Leaflet.js", "PostgreSQL"],
    icon: "🗺️",
    gradient: "linear-gradient(135deg,#0C1528,#0EA5E9)",
    github: "https://github.com/heykel/monzaradar",
    demo: "https://monzaradar.vercel.app",
  },
  {
    id: 2,
    title: "Nangin Beauty Store",
    desc:
      "Full-featured e-commerce system for Nangin Beauty skincare brand. Includes product catalog, cart, checkout, and admin dashboard.",
    category: "web",
    tags: ["Laravel", "MySQL", "Bootstrap"],
    icon: "🛍️",
    gradient: "linear-gradient(135deg,#1a0533,#a78bfa)",
    github: "https://github.com/heykel/nangin-beauty",
    demo: "#",
  },
  {
    id: 3,
    title: "Android ListView App",
    desc:
      "Native Android application demonstrating dynamic data management with ListView, custom adapters, and local SQLite storage.",
    category: "android",
    tags: ["Java", "Android SDK", "SQLite"],
    icon: "📱",
    gradient: "linear-gradient(135deg,#0c2010,#34d399)",
    github: "https://github.com/heykel/android-listview",
    demo: "#",
  },
  {
    id: 4,
    title: "Student Concentration Detection",
    desc:
      "Real-time attention monitoring system using CNN and OpenCV to detect student focus levels during online learning sessions.",
    category: "aiml",
    tags: ["Python", "TensorFlow", "OpenCV"],
    icon: "🧠",
    gradient: "linear-gradient(135deg,#1a0c02,#f59e0b)",
    github: "https://github.com/heykel/concentration-cnn",
    demo: "#",
  },
];
