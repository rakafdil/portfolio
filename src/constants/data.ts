import type { IconType } from "react-icons";
import { SiGmail, SiGithub, SiInstagram, SiLinkedin } from "react-icons/si";

export const ASSETS = {
  profile: "/img/foto2.jpeg",
  tools: [
    "https://www.figma.com/api/mcp/asset/f0c3439b-543a-4138-979b-e0d369612662", // imgImage1
    "https://www.figma.com/api/mcp/asset/54a16e3f-9b3c-44e6-83df-71fce2d6bc8a", // imgImage2
    "https://www.figma.com/api/mcp/asset/214e972b-3fa0-4461-8fbb-3a3681f53d8e", // imgImage14
    "https://www.figma.com/api/mcp/asset/47f7f827-84c5-451c-a039-6bafd1efbf8f", // imgImage7
    "https://www.figma.com/api/mcp/asset/5ed259dc-4f9b-4c31-8fa0-ed63bcb45beb", // imgImage6
    "https://www.figma.com/api/mcp/asset/26ca3a6e-b78c-433b-9632-e57d1635b2ca", // imgImage15
    "https://www.figma.com/api/mcp/asset/4be31a9b-88d0-4edb-94d6-c7696bb3231e", // imgImage9
    "https://www.figma.com/api/mcp/asset/3d28992c-6d25-4c35-ac42-db82fdc5cd58", // imgImage13
    "https://www.figma.com/api/mcp/asset/4254d710-11b0-4bf7-86da-2b685b7a5062", // imgImage10
    "https://www.figma.com/api/mcp/asset/5b2a0ceb-ba8a-423d-8e31-5d8bccfed1c5", // imgImage11
    "https://www.figma.com/api/mcp/asset/3a0a0de0-4c9f-4669-b35c-c0ec04d819c3", // imgImage5
    "https://www.figma.com/api/mcp/asset/6e2019c3-883c-4b99-8ac8-b53f843360c9", // imgImage12
    "https://www.figma.com/api/mcp/asset/56aacd8f-9938-4382-b45d-94609b23651c", // imgImage4
    "https://www.figma.com/api/mcp/asset/b0bb43ea-4d6a-458d-b857-b9137190fc29", // imgImage3
    "https://www.figma.com/api/mcp/asset/7052c2ed-6566-445a-a6a2-9642f39514d3", // imgImage8
  ],
};

export const PROJECTS = [
  {
    title: "NutriMori",
    subTitle: "A smart nutrition tracking web application",
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
    subTitle: "A digital platform for personal growth and well-being",
    period: "Sep - Oct 2025",
    description:
      "Built to help users track progress, manage personal goals, and access curated self-improvement resources in a single integrated platform.",
    role: "front-end developer",
    role2: "",
    githubLink: "https://github.com/rakafdil/creanomic",
    webLink: "https://creanomic.vercel.app/products",
  },
  {
    title: "Sukolilo",
    subTitle: "A community information and local service website",
    period: "Jul - Aug 2025",
    description:
      "Developed to present local area data, public information, and community activities in a clear and accessible digital format.",
    role: "front-end developer",
    role2: "",
    githubLink: "https://github.com/raffi194/Web-Sukolilo",
    webLink: "https://web-sukolilo-deploy.vercel.app/",
  },
  {
    title: "CellVerse",
    subTitle: "An interactive 3D web-based biology learning application",
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
    subTitle: "A healthcare consultation and meeting platform",
    period: "Sep - Dec 2025",
    description:
      "Designed to streamline interactions between users and medical professionals through a simple, user-friendly consultation flow.",
    role: "developer, sescurity",
    role2: "infra",
    githubLink: "https://github.com/HzardGenmu/CuraMeet",
    webLink: "https://nutri-mori.vercel.app/",
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
