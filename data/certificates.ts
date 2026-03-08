export type Certificate = {
  id: number;
  icon: string;
  issuer: string;
  name: string;
  year: string;
  category: string;
  desc: string;
};

export const certificates: Certificate[] = [
  {
    id: 0,
    icon: "🎓",
    issuer: "Dicoding Indonesia",
    name: "Belajar Membuat Aplikasi Back-End untuk Pemula",
    year: "2023",
    category: "Web Development",
    desc: "Comprehensive backend development course covering Node.js, Express, RESTful APIs, and database integration.",
  },
  {
    id: 1,
    icon: "☁️",
    issuer: "Google Cloud Skills Boost",
    name: "Google Cloud Fundamentals: Core Infrastructure",
    year: "2023",
    category: "Cloud Computing",
    desc: "Foundational course on Google Cloud Platform covering compute, storage, networking, and cloud resource management.",
  },
  {
    id: 2,
    icon: "🤖",
    issuer: "Coursera — DeepLearning.AI",
    name: "Neural Networks and Deep Learning",
    year: "2024",
    category: "Artificial Intelligence",
    desc: "Deep learning fundamentals: neural network architectures, backpropagation, optimization algorithms, and practical implementation with TensorFlow.",
  },
  {
    id: 3,
    icon: "⚛️",
    issuer: "Dicoding Indonesia",
    name: "Belajar Fundamental Front-End Web Development",
    year: "2022",
    category: "Frontend Development",
    desc: "Modern frontend development fundamentals including HTML5, CSS3, JavaScript ES6+, DOM manipulation, and web accessibility.",
  },
  {
    id: 4,
    icon: "📱",
    issuer: "Dicoding Indonesia",
    name: "Memulai Pemrograman dengan Kotlin",
    year: "2022",
    category: "Mobile Development",
    desc: "Introduction to Kotlin programming for Android development, covering OOP, functional programming, and Android SDK basics.",
  },
  {
    id: 5,
    icon: "🏆",
    issuer: "Hackathon USU 2023",
    name: "Best Web Project — MonzaRadar",
    year: "2023",
    category: "Award / Competition",
    desc: "Awarded Best Web Project at Universitas Sumatera Utara Hackathon 2023 for the MonzaRadar store mapping platform.",
  },
];
