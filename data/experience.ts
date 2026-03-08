export type Experience = {
  id: number;
  period: string;
  type: string;
  title: string;
  company: string;
  desc: string;
  tags: string[];
};

export const experiences: Experience[] = [
  {
    id: 1,
    period: "Jan 2024 – Jun 2024",
    type: "Internship",
    title: "Web Developer Intern",
    company: "PT. XYZ Technology — Medan",
    desc:
      "Developed and maintained internal web applications. Built REST APIs with Laravel, worked on frontend features using React.js, and collaborated in agile sprints with the product team.",
    tags: ["Laravel", "React.js", "REST API", "MySQL"],
  },
  {
    id: 2,
    period: "2023 – Present",
    type: "Freelance",
    title: "Freelance Web & App Developer",
    company: "Independent — Remote",
    desc:
      "Delivered custom web solutions and Android apps for local businesses. Projects include e-commerce systems, company profiles, and data management tools.",
    tags: ["Next.js", "Android", "PHP", "Figma"],
  },
  {
    id: 3,
    period: "2022 – 2024",
    type: "Organization",
    title: "Head of Technology Division",
    company: "Himpunan Mahasiswa Informatika USU",
    desc:
      "Led the tech division of the informatics student association. Organized workshops, hackathons, and built the official organization website.",
    tags: ["Leadership", "Web Dev", "Workshop"],
  },
  {
    id: 4,
    period: "2021 – 2022",
    type: "Campus Project",
    title: "Campus Database System Project",
    company: "Informatics Engineering — USU",
    desc:
      "Collaborated in a team of 4 to design and implement a student academic record management system as part of the Database Systems coursework.",
    tags: ["MySQL", "PHP", "Team Project"],
  },
];
