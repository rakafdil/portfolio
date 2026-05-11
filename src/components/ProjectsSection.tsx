"use client";

import Image from "next/image";
import { useState } from "react";
import { PROJECTS } from "../constants/data";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaGlobe } from "react-icons/fa";
import Link from "next/link";
// import BgBox from "./BgBox"; // Dipertahankan dari kode asli Anda
// import { FaWebAwesome } from "react-icons/fa6"; 

interface SeamlessBorderProps {
  img: string;
  alt: string;
  slug: string;
}

const SeamlessBorder = ({ img, alt, slug }: SeamlessBorderProps) => {
  const numberOfLines = 2;
  const duration = 6;

  return (
    // OPTIMASI: Menggunakan will-change-transform agar scaling diproses oleh GPU dan tidak patah-patah
    <div className="relative w-full max-w-3xl mx-auto hover:scale-[1.03] transition-transform duration-500 ease-out will-change-transform">
      <div className="cursor-pointer relative z-0 w-full rounded-3xl border border-[#172039] bg-[rgba(23,32,57,0.35)] overflow-clip justify-center align-middle">
        <Link href={`/projects/${slug}`}>
          <Image
            src={img}
            alt={alt}
            height={500}
            width={500}
            className="w-full object-cover"
            loading="lazy" // OPTIMASI: Lazy loading bawaan
          />
        </Link>
      </div>

      <svg
        className="absolute inset-0 z-10 h-full w-full pointer-events-none rounded-3xl"
        xmlns="http://www.w3.org/2000/svg"
      >
        {[...Array(numberOfLines)].map((_, index) => (
          <motion.rect
            key={index}
            width="100%"
            height="100%"
            rx="24"
            ry="24"
            fill="none"
            stroke="#405A9F"
            strokeWidth="6"
            strokeLinecap="round"
            initial={{ pathLength: 0.15, pathOffset: 0, opacity: 0 }}
            // OPTIMASI: Ubah 'animate' menjadi 'whileInView' agar animasi otomatis berhenti (pause) saat tidak terlihat di layar
            whileInView={{
              pathOffset: 1,
              opacity: [0, 1, 1, 0.1],
            }}
            viewport={{ once: false, margin: "100px" }}
            transition={{
              duration: duration,
              ease: "linear",
              repeat: Infinity,
              delay: (duration / numberOfLines) * index,
              times: [0, 0.3, 0.8, 0.95],
            }}
          />
        ))}
      </svg>
    </div>
  );
};

// OPTIMASI: Ekstrak variants ke luar komponen untuk mencegah re-render object
const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: i % 2 === 0 ? 0 : 0.2,
      // OPTIMASI: Memicu animasi anak (tags, teks) secara otomatis berurutan
      when: "beforeChildren",
      staggerChildren: 0.1, 
    },
  }),
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
};

const tagVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};

export default function ProjectsSection() {
  const [filter, setFilter] = useState("All");
  
  const projectTypes = ["All", ...Array.from(new Set(PROJECTS.map((p) => p.type || "Other")))];
  
  const filteredProjects = PROJECTS.filter((p) => {
    if (filter === "All") return true;
    return (p.type || "Other") === filter;
  });

  return (
    <section id="projects" className="relative w-full overflow-hidden min-h-screen">
      <div className="flex flex-col items-center container relative z-10 mx-auto px-4">
        <div className="mb-8 text-center">
          <h2 className="font-stint text-6xl tracking-wider text-white md:text-7xl lg:text-8xl">
            Projects
          </h2>
          <p className="mt-4 font-crimson text-xl font-bold tracking-wider text-slate-400 md:text-2xl">
            The ideas that comes to life
          </p>
        </div>

        <div className="mb-16 flex flex-wrap justify-center gap-4">
          {projectTypes.map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-6 py-2 rounded-full font-stint text-lg tracking-wider transition-all duration-300 ${
                filter === type
                  ? "bg-[#405A9F] text-white shadow-[0_0_15px_rgba(64,90,159,0.5)]"
                  : "bg-[rgba(23,32,57,0.5)] text-slate-300 hover:bg-[#2F4989] hover:text-white border border-[#172039]"
              }`}
            >
              {type}
            </button>
          ))}
        </div>
        
        <div className="grid gap-20 lg:grid-cols-2 max-w-7xl w-full">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                custom={index}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
              className={`flex flex-col gap-8 group ${
                index % 2 !== 0 ? "lg:mt-32" : ""
              }`}
            >
              <SeamlessBorder
                img={`/img/${project.title}.png`}
                alt={project.title}
                slug={project.slug}
              />

              <div className="flex flex-col font-crimson text-white items-start">
                <div className="mb-2 flex flex-wrap gap-2 items-center">
                  <motion.span
                    variants={tagVariants}
                    className="bg-[#d97706] py-1 px-3 text-sm rounded-2xl font-bold tracking-widest text-[#fff]"
                  >
                    {project.type || "Project"}
                  </motion.span>
                  {project.stack.map((stack, stackIndex) => (
                    <motion.span
                      variants={tagVariants} // Diatur otomatis oleh staggerChildren parent
                      key={stackIndex}
                      className="bg-[#2F4989] py-1 px-3 text-sm rounded-2xl font-stint tracking-widest"
                    >
                      {stack}
                    </motion.span>
                  ))}
                </div>
                
                <motion.div variants={itemVariants} className="flex justify-between items-center w-full mt-2">
                  <h3 className="text-4xl tracking-widest md:text-5xl">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="relative inline-block cursor-pointer"
                    >
                      {project.title}
                      <span
                        aria-hidden="true"
                        className="absolute left-0 -bottom-0.5 h-0.5 w-full bg-white transform origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"
                      />
                    </Link>
                  </h3>

                  <div className="flex gap-4">
                    {project.webLink !== "" && (
                      <a href={project.webLink} target="_blank" rel="noopener noreferrer">
                        <FaGlobe className="text-3xl opacity-80 hover:opacity-100 transition-all hover:scale-110" />
                      </a>
                    )}
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <FaGithub className="text-3xl opacity-80 hover:opacity-100 transition-all hover:scale-110" />
                    </a>
                  </div>
                </motion.div>

                <motion.p
                  variants={itemVariants}
                  className="mt-3 text-lg tracking-wider md:text-xl text-slate-300"
                >
                  {project.period}
                </motion.p>

                <motion.p
                  variants={itemVariants}
                  className="mt-4 text-justify text-lg leading-relaxed tracking-wide md:text-xl text-slate-200"
                >
                  <span className="font-pacifico text-white">{project.subTitle}</span>
                  {` - ${project.description} ${
                    project.role2 === ""
                      ? "My role in this project is "
                      : "My roles in this project are "
                  }`}
                  <span className="font-bold text-white">{project.role} </span>
                  {project.role2 === "" ? "." : "and "}
                  <span className="font-bold text-white">{project.role2}</span>
                </motion.p>
              </div>
            </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}