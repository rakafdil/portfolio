"use client";

import { motion, Variants } from "framer-motion";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import ToolsSection from "@/components/ToolsSection";
import ExperiencesSection from "@/components/ExperiencesSection";
import ContactsSection from "@/components/ContactsSection";
import AboutSection from "@/components/AboutSection";

export default function Home() {
  // Opsi animasi sederhana (Fade In + Slide Up)
  const variants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <main className="relative w-full h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth transition-all bg-black text-white">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>

      <motion.section
        className="h-screen w-full snap-start flex flex-col justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={variants}
      >
        <HeroSection />
      </motion.section>

      <motion.section
        className="h-screen w-full snap-start"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={variants}
      >
        <AboutSection />
      </motion.section>

      <motion.div
        className="relative w-full min-h-screen snap-start overflow-hidden"
        style={{
          background:
            "linear-gradient(117deg, rgba(18, 27, 50, 1) 36%, rgba(16, 16, 18, 1) 120%)",
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 1 } },
        }}
      >
        <div className="py-20">
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
      </motion.div>
    </main>
  );
}
