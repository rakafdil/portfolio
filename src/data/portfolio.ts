export type Project = {
  title: string;
  kind: string;
  desc: string;
  tags: string[];
  year: string;
};

export const PROJECTS = [
  {
    title: "Portal Supplier Management",
    kind: "Supplier and purchase order management platform",
    desc: "A web application to streamline procurement workflows by consolidating material requests, grouping items by supplier, and integrating purchase order creation with ERPNext.",
    tags: ["Next.js", "MongoDB", "n8n", "ERPNext"],
    year: "2026",
    imageSrc: "./projects/Supplier and purchase order management platform.png",
  },
  {
    title: "EcoOil",
    kind: "Oil supply chain management platform",
    desc: "An end-to-end web application to streamline oil supply chain management, supporting operational workflows with containerized deployment.",
    tags: ["Next.js", "NestJS", "PostgreSQL", "Docker"],
    year: "2026",
    imageSrc: "./projects/NutriMori.png",
  },
  {
    title: "NutriMori",
    kind: "Smart nutrition tracking web app",
    desc: "Designed to help users log daily food intake, analyze nutritional values, and receive personalized recommendations based on dietary patterns and individual preferences.",
    tags: ["Next.js", "Python/Flask", "Gemini API"],
    year: "2025",
    imageSrc: "./projects/NutriMori.png",
  },
  {
    title: "MediScan",
    kind: "Health screening & symptom tool",
    desc: "Allows users to input symptoms and receive preliminary medical insights through a structured, decision-based analysis approach.",
    tags: ["Next.js", "Supabase", "Gemini API"],
    year: "2025",
    imageSrc: "./projects/MediScan.png",
  },
  {
    title: "GrowthWell",
    kind: "Agricultural e-commerce platform",
    desc: "A digital marketplace designed to help local farmers sell agricultural products directly to consumers, featuring product listings, order management, and a simple purchasing flow.",
    tags: ["E-commerce", "Next.js", "Express.js"],
    year: "2025",
  },
  {
    title: "Sukolilo",
    kind: "Community info & local service site",
    desc: "Developed to present local area data, public information, and community activities in a clear and accessible digital format.",
    tags: ["Full-stack", "Public Info", "Community"],
    year: "2025",
  },
  {
    title: "CellVerse",
    kind: "Interactive 3D biology app",
    desc: "Visualizes biological cell structures in 3D to enhance student understanding through immersive and interactive learning experiences.",
    tags: ["3D/WebGL", "Education", "Interactive"],
    year: "2025",
  },
  {
    title: "CuraMeet",
    kind: "Healthcare consultation platform",
    desc: "Designed to streamline interactions between users and medical professionals through a simple, user-friendly consultation flow.",
    tags: ["React", "PHP/Laravel", "Docker"],
    year: "2025",
  },
  {
    title: "TeamQuest",
    kind: "Team collaboration & task app",
    desc: "Helps teams organize tasks, track progress, and improve collaboration within structured project-based workflows.",
    tags: ["React Native", "Expo", "Firebase"],
    year: "2025",
  },
  {
    title: "Monku",
    kind: "OOP learning game",
    desc: "Created as a learning project to apply object-oriented programming concepts through core gameplay mechanics and structured code design.",
    tags: ["OOP", "Game Dev", "Educational"],
    year: "2025",
  },
];

export const EXPERIENCES = [
  {
    role: "Intern IT Programmer (Business Process & Information System)",
    company: "PT. Intidaya Dinamika Sejati",
    period: "07/2026 — Current",
    desc: "Developed a full-stack Supplier Management Portal and built business process automations using n8n and Microsoft Power Automate.",
  },
  {
    role: "Lab Member - RnD Web Division",
    company: "MGM Lab FILKOM UB",
    period: "04/2026 — Current",
    desc: "Researched modern web technologies, prototyped solutions for community problems, and assisted in faculty research.",
  },
  {
    role: "Lab Assistant - Web Programming",
    company: "FILKOM Universitas Brawijaya",
    period: "02/2026 — 06/2026",
    desc: "Assisted students with Laravel web development, debugged code, and provided technical feedback on REST API structures.",
  },
  {
    role: "Lab Assistant - Object-Oriented Programming",
    company: "FILKOM Universitas Brawijaya",
    period: "02/2025 — 06/2025",
    desc: "Guided students in OOP principles, assessed code quality for assignments, and assisted with laboratory samples.",
  },
];
