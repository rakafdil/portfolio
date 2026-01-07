"use client";

import { useScroll } from "framer-motion";
import { useRef } from "react";
import CardWrapper from "@/components/CardWrapper"; // Import komponen wrapper tadi

// Import section kamu
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import ToolsSection from "@/components/ToolsSection";
import ExperiencesSection from "@/components/ExperiencesSection";
import ContactsSection from "@/components/ContactsSection";
import AboutSection from "@/components/AboutSection";

export default function Home() {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const sections = [
    { component: <HeroSection />, id: "hero" },
    { component: <AboutSection />, id: "about" },
  ];

  return (
    <main
      ref={container}
      className="relative text-white"
      style={{
        backgroundColor:
          "linear-gradient(125deg, rgba(15, 23, 42, 1) 0%, rgba(51, 79, 144, 1) 150%)",
      }}
    >
      <Navbar />

      {sections.map((sect, i) => {
        return (
          <CardWrapper key={i} range={[i * 0.1, 1]} progress={scrollYProgress}>
            {sect.component}
          </CardWrapper>
        );
      })}
      <div
        className="relative w-full overflow-hidden py-20"
        style={{
          background:
            "linear-gradient(117deg, rgba(18, 27, 50, 1) 36%, rgba(16, 16, 18, 1) 120%)",
        }}
      >
        <ProjectsSection />
        <svg
          width="1920"
          height="1974"
          viewBox="0 0 1920 1974"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute z-0"
        >
          <g filter="url(#filter0_f_26_83)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2019.43 671.441C1997.33 773.176 1998.91 870.161 1960.28 972.314C1924.25 1067.57 1859.31 1157.01 1800.69 1249.87C1733.92 1355.66 1720.88 1494.47 1589.1 1560.33C1452.86 1628.43 1305.66 1507.53 1165.04 1567.57C950.729 1659.08 858.451 1940.65 635.067 1967.69C448.256 1990.3 421.714 1784.02 361.851 1664.8C313.392 1568.3 393.581 1426.9 321.247 1342.74C218.417 1223.08 -75.1979 1239.1 -127.7 1095.16C-175.38 964.427 -105.979 752.456 70.0079 653.901C285.213 533.383 541.525 680.807 773.689 590.363C933.603 528.066 953.62 346.457 1094.28 254.875C1268.61 141.372 1471.02 17.1235 1672.42 5.20209C1869.27 -6.44948 2063.71 67.3443 2129.47 193.599C2199.27 327.603 2054.45 510.287 2019.43 671.441Z"
              fill="url(#paint0_linear_26_83)"
              fillOpacity="0.25"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_26_83"
              x="-146.353"
              y="0"
              width="2298.59"
              height="1973.4"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="2"
                result="effect1_foregroundBlur_26_83"
              />
            </filter>
            <linearGradient
              id="paint0_linear_26_83"
              x1="861.595"
              y1="290.901"
              x2="1407.6"
              y2="1672.13"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#031151" />
              <stop offset="1" stopColor="#121B32" />
            </linearGradient>
          </defs>
        </svg>
        <ToolsSection />
        <ExperiencesSection />
        <ContactsSection />
      </div>
    </main>
  );
}
