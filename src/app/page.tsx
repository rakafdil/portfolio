"use client";

import { useScroll } from "framer-motion";
import { useRef } from "react";
import CardWrapper from "@/components/CardWrapper";

import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";

export default function Home() {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const sections = [
    { Component: HeroSection, id: "hero" },
    { Component: AboutSection, id: "about" },
  ];

  return (
    <main
      ref={container}
      className="relative text-white"
      style={{
        background:
          "linear-gradient(125deg, rgba(15, 23, 42, 1) 0%, rgba(51, 79, 144, 1) 150%)",
      }}
    >
      {sections.map((sect, i) => {
        const { Component } = sect;
        return (
          <CardWrapper key={i} range={[i * 0.1, 1]} progress={scrollYProgress}>
            <Component scrollYProgress={scrollYProgress} />
          </CardWrapper>
        );
      })}
    </main>
  );
}
