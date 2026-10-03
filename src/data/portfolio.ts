export type Project = {
  title: string;
  kind: string;
  desc: string;
  tags: string[];
  year: string;
};

export const PROJECTS: Project[] = [
  {
    title: "Ombak UI",
    kind: "Animated component library",
    desc: "40+ motion-first React components with springy physics and accessible defaults.",
    tags: ["React", "Motion", "A11y"],
    year: "2026",
  },
  {
    title: "TideTrack",
    kind: "Surf & tide forecast PWA",
    desc: "Real-time tide charts for Indonesian surf spots, installable and offline-ready.",
    tags: ["PWA", "Charts", "Geo"],
    year: "2025",
  },
  {
    title: "Lumbung",
    kind: "Recipe platform",
    desc: "A warm, editorial home for Indonesian home cooking with 12k monthly readers.",
    tags: ["Next-gen web", "CMS", "SEO"],
    year: "2025",
  },
  {
    title: "Pasar Pagi",
    kind: "Marketplace for local farmers",
    desc: "Order fresh produce straight from farmers around Bandung, with live delivery tracking.",
    tags: ["E-commerce", "Maps", "Payments"],
    year: "2024",
  },
  {
    title: "Senja Studio",
    kind: "Photographer portfolio",
    desc: "A cinematic, scroll-driven gallery with buttery image transitions.",
    tags: ["WebGL", "GSAP", "Design"],
    year: "2024",
  },
  {
    title: "Karya Kelas",
    kind: "Learning dashboard",
    desc: "Classroom tracker for 3,000+ students with playful progress visuals.",
    tags: ["Dashboard", "Charts", "Edu"],
    year: "2023",
  },
  {
    title: "Nusantara Type",
    kind: "Font specimen site",
    desc: "Interactive specimen for a typeface inspired by Indonesian scripts.",
    tags: ["Typography", "Variable fonts"],
    year: "2023",
  },
  {
    title: "Kopi Kita",
    kind: "Café ordering app",
    desc: "Scan-to-order menu that cut queue times by 40% across four outlets.",
    tags: ["Mobile web", "QR", "Realtime"],
    year: "2022",
  },
];

export const EXPERIENCES = [
  {
    role: "Senior Creative Developer",
    company: "Ombak Studio",
    period: "2024 — Now",
    desc: "Leading motion and front-end for brand sites and the Karang design system.",
  },
  {
    role: "Frontend Engineer",
    company: "Tokopedia-like Marketplace",
    period: "2022 — 2024",
    desc: "Built high-traffic checkout flows and an internal animation toolkit.",
  },
  {
    role: "UI Developer",
    company: "Freelance",
    period: "2020 — 2022",
    desc: "Shipped 20+ websites for cafés, photographers, and startups across Indonesia.",
  },
  {
    role: "Design Intern",
    company: "Kreatif Lab",
    period: "2019",
    desc: "Prototyped interfaces and learned to turn sketches into living products.",
  },
];
