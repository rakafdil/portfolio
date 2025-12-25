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
        className="w-full min-h-screen snap-start"
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
          <ToolsSection />
          <ExperiencesSection />
          <ContactsSection />
        </div>
      </motion.div>
    </main>
  );
}
