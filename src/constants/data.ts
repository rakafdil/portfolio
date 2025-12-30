import type { IconType } from "react-icons";
import { SiGmail, SiGithub, SiInstagram, SiLinkedin } from "react-icons/si";

export const ASSETS = {
  profile: "/img/foto2.jpeg",
  tools: [
    "/logo/image 1.png",
    "/logo/image 2.png",
    "/logo/image 3.png",
    "/logo/image 4.png",
    "/logo/image 5.png",
    "/logo/image 6.png",
    "/logo/image 7.png",
    "/logo/image 8.png",
    "/logo/image 9.png",
    "/logo/image 10.png",
    "/logo/image 11.png",
    "/logo/image 12.png",
    "/logo/image 13.png",
    "/logo/image 14.png",
    "/logo/image 15.png",
    "/logo/image 16.png",
  ],
};

export const PROJECTS = [
  {
    title: "NutriMori",
    subTitle: "A smart nutrition tracking web application",
    stack: ["Next.js", "Nest.js", "Flask", "Supabase"],
    period: "Nov - Dec 2025",
    description:
      "Designed to help users log daily food intake, analyze nutritional values, and receive personalized recommendations based on dietary patterns and individual preferences.",
    role: "front-end developer, backend developer (auth and logging logic)",
    role2: "product manager",
    githubLink: "https://github.com/rakafdil/NutriMori",
    webLink: "https://nutri-mori.vercel.app/",
  },
  {
    title: "MediScan",
    subTitle: "A web-based health screening and symptom analysis tool",
    stack: ["Next.js", "Supabase"],
    period: "Aug - Sep 2025",
    description:
      "Allows users to input symptoms and receive preliminary medical insights through a structured, decision-based analysis approach.",
    role: "front-end developer, backend developer (symptoms checker)",
    role2: "product manager",
    githubLink: "https://github.com/rakafdil/mediscan/",
    webLink: "https://mediscan-smoky.vercel.app/",
  },
  {
    title: "GrowthWell",
    subTitle: "A digital marketplace connecting local farmers with consumers",
    stack: ["Next.js", "Express.js", "Flask", "Supabase"],
    period: "Sep - Oct 2025",
    description:
      "A digital e-commerce platform designed to help local farmers market and sell their agricultural products directly to consumers. The platform reduces reliance on intermediaries by providing product listings, order management, and a simple purchasing flow, enabling fairer pricing for farmers while making fresh local produce more accessible to customers.",
    role: "front-end developer",
    role2: "",
    githubLink: "https://github.com/rakafdil/creanomic",
    webLink: "https://creanomic.vercel.app/products",
  },

  {
    title: "Sukolilo",
    subTitle: "An interactive village information website",
    stack: ["React + Vite"],
    period: "Jul - Aug 2025",
    description:
      "An interactive and animated village profile website that presents essential information such as organizational charts, public services for document requests, village profiles, and local business data. The platform is integrated with Google Sheets, allowing non-technical users to easily add and manage local business information without directly interacting with the system code.",
    role: "front-end developer",
    role2: "",
    githubLink: "https://github.com/raffi194/Web-Sukolilo",
    webLink: "https://web-sukolilo-deploy.vercel.app/",
  },

  {
    title: "CellVerse",
    subTitle: "An interactive 3D web-based biology learning application",
    stack: ["Next.js", "Three.js"],
    period: "Nov - Dec 2025",
    description:
      "Visualizes biological cell structures in 3D to enhance student understanding through immersive and interactive learning experiences.",
    role: "front-end developer",
    role2: "product manager",
    githubLink: "https://github.com/rakafdil/cell-3d-learning",
    webLink: "https://cell-3d-learning.vercel.app/",
  },
  {
    title: "CuraMeet",
    subTitle:
      "A healthcare digital appointment, medical record, and patient administration platform",
    stack: ["Laravel", "React", "Docker", "Nginx Proxy Manager"],
    period: "Sep - Dec 2025",
    description:
      "Developed as a security-focused experiment to evaluate common web vulnerabilities and protection mechanisms. The project includes two versions—secure and insecure—to compare implementation practices as part of a DevSecOps course.",
    role: "developer, security",
    role2: "infrastructure",
    githubLink: "https://github.com/HzardGenmu/CuraMeet",
    webLink: "",
  },

  // {
  //   title: "TeamQuest",
  //   subTitle: "A team collaboration and task management application",
  //   period: "Sep - Dec 2025",
  //   description:
  //     "Helps teams organize tasks, track progress, and improve collaboration within structured project-based workflows.",
  //   role: "front-end, logging logic",
  //   role2: "product manager",
  //   githubLink: "https://github.com/VeryFach/TeamQuest",
  //   webLink: "https://nutri-mori.vercel.app/",
  // },
  // {
  //   title: "Monku",
  //   subTitle: "A simple object-oriented programming game project",
  //   period: "Dec 2025",
  //   description:
  //     "Created as a learning project to apply object-oriented programming concepts through core gameplay mechanics and structured code design.",
  //   role: "front-end, logging logic",
  //   role2: "product manager",
  //   githubLink: "https://github.com/ahmadnafi30/MonkuGame",
  //   webLink: "https://github.com/ahmadnafi30/MonkuGame",
  // },
];

export const EXPERIENCES = [
  {
    title: "Lab Assistant",
    role: "Object Oriented Programming",
    description:
      " - Assisted in teaching Object-Oriented Programming to first-year students at FILKOM Universitas Brawijaya for one semester. This role sharpened my understanding of core OOP concepts while giving me valuable insights into effective teaching and communication.",
    img: "/img/asprak.png",
  },
  {
    title: "Finalist in Gemastik 2023",
    role: "Data Mining Division",
    description:
      " - Reached the final stage of the national Gemastik 2023 competition as part of a three-member team in the Data Mining division. Although we did not secure a top position, the experience strengthened my problem-solving skills and exposed me to real-world competitive and collaborative environments.",
    img: "/img/gemastik.png",
  },
];

export const CONTACTS = [
  {
    icon: SiGmail,
    label: "rakafadillah123@gmail.com",
    href: "mailto:rakafadillah123@gmail.com",
    isExternal: false,
  },
  {
    icon: SiGithub,
    label: "rakafdil",
    href: "https://github.com/rakafdil",
    isExternal: true,
  },
  {
    icon: SiInstagram,
    label: "_rakaf",
    href: "https://instagram.com/_rakaf",
    isExternal: true,
  },

  {
    icon: SiLinkedin,
    label: "M. Raka Fadillah",
    href: "https://www.linkedin.com/in/m-raka-fadillah-3a2964208/",
    isExternal: true,
  },
];
