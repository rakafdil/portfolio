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
    slug: "nutrimori",
    type: "Healthcare Tool",
    subTitle: "A smart nutrition tracking web application",
    stack: ["Next.js", "Nest.js", "Flask", "Supabase"],
    period: "Nov - Dec 2025",
    description:
      "Designed to help users log daily food intake, analyze nutritional values, and receive personalized recommendations based on dietary patterns and individual preferences.",
    role: "front-end developer, backend developer (auth and logging logic)",
    role2: "product manager",
    githubLink: "https://github.com/rakafdil/NutriMori",
    webLink: "https://nutri-mori.vercel.app/",
    article: `
NutriMori aims to revolutionize how we track daily food intake by using AI-powered nutrition analysis. 
The application breaks down your meals and gives personalized recommendations. Let's delve into the process.

## Problem Statement
Keeping track of daily nutrition is usually tedious. Existing solutions involve manual data entry which deters most users.

## Our Solution
A seamless web app where you simply take a photo of your meal to know its approximate nutritional values.

## Key Features
- **Instant Tracking**: Quick and seamless logging.
- **AI Recommendations**: Get weekly feedback based on your diet pattern.
    `,
    milestones: [
      { date: "Oct 2025", title: "Project Inception", description: "Market research and prototyping.", status: "completed" },
      { date: "Nov 2025", title: "Core Features Development", description: "Built the auth system and logging logic.", status: "completed" },
      { date: "Dec 2025", title: "Testing & Launch", description: "Private beta testing with early users.", status: "completed" }
    ]
  },
  {
    title: "MediScan",
    slug: "mediscan",
    type: "Healthcare Tool",
    subTitle: "A web-based health screening and symptom analysis tool",
    stack: ["Next.js", "Supabase"],
    period: "Aug - Sep 2025",
    description:
      "Allows users to input symptoms and receive preliminary medical insights through a structured, decision-based analysis approach.",
    role: "front-end developer, backend developer (symptoms checker)",
    role2: "product manager",
    githubLink: "https://github.com/rakafdil/mediscan/",
    webLink: "https://mediscan-smoky.vercel.app/",
    article: `
MediScan provides structured medical insights by taking user-input symptoms and processing them through an expert system.

## The Approach
By leveraging established decision trees, the system gives an early assessment, guiding users on whether they need immediate medical consultation.

## Key Features
- **Symptom Checker**: Intelligent parsing of user inputs.
- **Preliminary Reports**: Printable PDF summaries to share with doctors.
    `,
    milestones: [
      { date: "Aug 2025", title: "Initial Prototyping", description: "Created low-fidelity wireframes.", status: "completed" },
      { date: "Sep 2025", title: "Full Scale Development", description: "Implemented symptom analysis backend.", status: "completed" },
      { date: "Oct 2025", title: "System Refinement", description: "Refining decision tree algorithms.", status: "pending" }
    ]
  },
  {
    title: "GrowthWell",
    slug: "growthwell",
    type: "E-Commerce",
    subTitle: "A digital marketplace connecting local farmers with consumers",
    stack: ["Next.js", "Express.js", "Flask", "Supabase"],
    period: "Sep - Oct 2025",
    description:
      "A digital e-commerce platform designed to help local farmers market and sell their agricultural products directly to consumers. The platform reduces reliance on intermediaries by providing product listings, order management, and a simple purchasing flow, enabling fairer pricing for farmers while making fresh local produce more accessible to customers.",
    role: "front-end developer",
    role2: "",
    githubLink: "https://github.com/rakafdil/creanomic",
    webLink: "https://creanomic.vercel.app/products",
    article: `
GrowthWell aims to empower local farmers by providing a direct channel to consumers, bypassing the middleman and increasing their revenue margin.

## Why GrowthWell?
Selling agricultural goods traditionally involves multiple intermediaries which leads to higher consumer prices and lower profits for farmers. GrowthWell mitigates this.

## Technologies Used
- Next.js for a robust, SEO-friendly front end
- Supabase for scalable data storage
    `,
    milestones: [
      { date: "Sep 2025", title: "E-Commerce Storefront", description: "Built the core browsing experience.", status: "completed" },
      { date: "Oct 2025", title: "Farmer Dashboard", description: "Dashboard for order management.", status: "completed" }
    ]
  },
  {
    title: "Sukolilo",
    slug: "sukolilo",
    type: "Information Portal",
    subTitle: "An interactive village information website",
    stack: ["React + Vite"],
    period: "Jul - Aug 2025",
    description:
      "An interactive and animated village profile website that presents essential information such as organizational charts, public services for document requests, village profiles, and local business data. The platform is integrated with Google Sheets, allowing non-technical users to easily add and manage local business information without directly interacting with the system code.",
    role: "front-end developer",
    role2: "",
    githubLink: "https://github.com/raffi194/Web-Sukolilo",
    webLink: "https://web-sukolilo-deploy.vercel.app/",
    article: `
Sukolilo provides digital presence for offline village communities.

## Overview
By utilizing low-cost tools like Google Sheets as a CMS, village administrators have full control over the website's content without writing any code.

## Results
- Boosted local businesses visibility
- Simplified the bureaucracy for document requests
    `,
    milestones: [
      { date: "Jul 2025", title: "Design Phase", description: "Gathered community requirements.", status: "completed" },
      { date: "Aug 2025", title: "Development & Delivery", description: "Implemented frontend and integrated Google Sheets.", status: "completed" }
    ]
  },
  {
    title: "CellVerse",
    slug: "cellverse",
    type: "EdTech",
    subTitle: "An interactive 3D web-based biology learning application",
    stack: ["Next.js", "Three.js"],
    period: "Nov - Dec 2025",
    description:
      "CellVerse is an interactive, web-based biology learning platform that visualizes biological cell structures in 3D using real-time rendering. The application enhances student understanding through immersive exploration and includes an AI-powered quiz feature generated via Google Gemini to reinforce learning outcomes. Built with Next.js and Three.js. I worked as a front-end developer, implementing 3D interactions and user experience flow, and as a product manager, defining learning goals and feature direction.",
    role: "front-end developer",
    role2: "product manager",
    githubLink: "https://github.com/rakafdil/cell-3d-learning",
    webLink: "https://cell-3d-learning.vercel.app/",
    article: `
CellVerse merges learning with gamification through immersive 3D visualizations.

## Core Features
- **3D Cell Exploration**: Intersect and explore cell components with Three.js.
- **AI Quizzes**: Dinamically generated using Google Gemini based on the user's progress.

This approach proved extremely effective in testing among high-school biology students.
    `,
    milestones: [
      { date: "Nov 2025", title: "3D Asset Tuning", description: "Optimizing 3D models for web performance.", status: "completed" },
      { date: "Dec 2025", title: "Integration", description: "Connecting Next.js frontend with Three.js.", status: "completed" },
      { date: "Jan 2026", title: "AI Quiz Launch", description: "Rolling out the Gemini powered quizzes.", status: "pending" }
    ]
  },
  {
    title: "CuraMeet",
    slug: "curameet",
    type: "Healthcare Tool",
    subTitle:
      "A healthcare digital appointment, medical record, and patient administration platform",
    stack: ["Laravel", "React", "Docker", "Nginx Proxy Manager", "PostgreSQL"],
    period: "Sep - Dec 2025",
    description:
      "Developed as a security-focused experiment to evaluate common web vulnerabilities and protection mechanisms. The project includes two versions—secure and insecure—to compare implementation practices as part of a DevSecOps course.",
    role: "developer, security",
    role2: "infrastructure",
    githubLink: "https://github.com/HzardGenmu/CuraMeet",
    webLink: "",
    article: `
CuraMeet serves as both an administration platform and a DevSecOps playground.

## Security Experiments
We maintain a vulnerable build alongside our secure deployment to serve as educational material on web defense.

## Deployment Setup
Using Docker and Nginx Proxy Manager allowed us to quickly pivot the infrastructure.
    `,
    milestones: [
      { date: "Sep 2025", title: "Drafting Architecture", description: "Deciding the tech stack.", status: "completed" },
      { date: "Nov 2025", title: "Insecure Version Build", description: "Purposely added vulnerable code.", status: "completed" },
      { date: "Dec 2025", title: "Secure Implementation", description: "Patching the insecure endpoints.", status: "completed" }
    ]
  },
  {
    title: "Alomany Healthcare",
    slug: "alomany-healthcare",
    type: "Healthcare Tool",
    subTitle: "Expert system on detecting diseases by symptoms",
    stack: ["Laravel", "MySQL", "Flask"],
    period: "Apr - Jun 2025",
    description:
      "Alomany Healthcare is an early version of Mediscan, a healthcare web application that implements an expert system to detect potential diseases based on user-reported symptoms. The system leverages a predefined symptom dataset and integrates an external machine learning API for symptom analysis. Built using Laravel, MySQL, and Flask. I contributed as a developer, focusing on the symptom checker logic, while also taking part as a product manager in defining features and system flow.",
    role: "developer",
    role2: "product manager",
    githubLink: "https://github.com/HzardGenmu/CuraMeet",
    webLink: "",
    article: `
Alomany Healthcare laid the groundwork for robust symptom screening before evolving into its modern iteration.

## Features
- **Symptom DB**: Scalable relational dataset mapping diseases to common indicators.
- **Machine Learning Integration**: Built bridges to Flask APIs for more complex logic.
    `,
    milestones: [
      { date: "Apr 2025", title: "Data Modeling", description: "Structuring the Laravel backend models.", status: "completed" },
      { date: "Jun 2025", title: "API Release", description: "Connected the ML Flask service.", status: "completed" }
    ]
  }
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
