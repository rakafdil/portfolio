import Image from "next/image";
import { PROJECTS } from "../constants/data";
import { motion } from "framer-motion";
import { FaGithub, FaGlobe } from "react-icons/fa";
import Link from "next/link";
import BgBox from "./BgBox";
import { FaWebAwesome } from "react-icons/fa6";

interface SeamlessBorderProps {
  img: string;
  alt: string;
  webLink: string;
}
const SeamlessBorder = ({ img, alt, webLink }: SeamlessBorderProps) => {
  const numberOfLines = 2;
  const duration = 6;
  return (
    <div className="relative w-full max-w-3xl mx-auto hover:scale-110 transition-all">
      <div className="cursor-pointer relative z-0  w-full rounded-3xl border border-[#172039] bg-[rgba(23,32,57,0.35)] overflow-clip justify-center align-middle">
        <Link href={webLink} target="_blank" rel="noopener noreferrer">
          <Image
            src={img}
            alt={alt}
            height={500}
            width={500}
            className="w-full"
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
            animate={{
              pathOffset: 1,
              opacity: [0, 1, 1, 0.1],
            }}
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

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative w-full overflow-hidden py-20">
      <BgBox className="absolute z-0 scale-50 top-4 left-10" />
      <BgBox className="absolute z-0 scale-75 top-20 left-1/4" />
      <BgBox className="absolute z-0 scale-50 top-32 left-2/3" />
      <BgBox className="absolute z-0 scale-100 top-10 right-16" />
      <BgBox className="absolute z-0 scale-75 top-48 right-32" />

      <BgBox className="absolute z-0 scale-50 bottom-10 left-20" />
      <BgBox className="absolute z-0 scale-75 bottom-24 left-1/3" />
      <BgBox className="absolute z-0 scale-100 bottom-40 left-2/3" />
      <BgBox className="absolute z-0 scale-50 bottom-16 right-24" />
      <BgBox className="absolute z-0 scale-75 bottom-32 right-10" />

      <BgBox className="absolute z-0 scale-50 top-1/3 left-12" />
      <BgBox className="absolute z-0 scale-75 top-1/2 right-20" />
      <BgBox className="absolute z-0 scale-100 top-2/3 left-1/4" />
      <BgBox className="absolute z-0 scale-50 top-3/4 right-1/3" />
      <BgBox className="absolute z-0 scale-75 top-[60%] left-[70%]" />

      <div className="flex flex-col items-center container relative z-10 mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="font-stint text-6xl tracking-wider text-white md:text-7xl lg:text-8xl">
            Projects
          </h2>
          <p className="mt-4 font-crimson text-xl font-bold tracking-wider text-slate-400 md:text-2xl">
            The ideas that comes to life
          </p>
        </div>
        <div className="grid gap-20 lg:grid-cols-2 max-w-7xl">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index % 2 === 0 ? 0 : 0.2,
              }}
              viewport={{ margin: "-100px" }}
              className={`flex flex-col gap-8 group ${
                index % 2 !== 0 ? "lg:mt-32" : ""
              }`}
            >
              <SeamlessBorder
                img={`/img/${project.title}.png`}
                alt={project.title}
                webLink={project.webLink}
              />

              <div className="font-crimson text-white">
                <div className="mb-2">
                  {project.stack.map((stack, stackIndex) => (
                    <motion.span
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.3 + stackIndex * 0.1,
                        duration: 0.5,
                      }}
                      key={stackIndex}
                      className="bg-[#2F4989] py-1 px-3 text-sm mr-2 rounded-2xl font-stint tracking-widest"
                    >
                      {stack}
                    </motion.span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <h3 className="text-4xl tracking-widest md:text-5xl">
                    <Link
                      href={project.webLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative inline-block cursor-pointer"
                    >
                      {project.title}
                      <span
                        aria-hidden="true"
                        className="absolute left-0 -bottom-0.5 h-0.5 w-full bg-white transform origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"
                      />
                    </Link>
                  </h3>

                  <div className="flex  gap-2">
                    {project.webLink !== "" && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGlobe className="text-3xl opacity-80 hover:opacity-100 transition-all hover:scale-110" />
                      </a>
                    )}
                    <a
                      href={project.webLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub className="text-3xl opacity-80 hover:opacity-100 transition-all hover:scale-110" />
                    </a>
                  </div>
                </div>

                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="mt-1 text-lg tracking-wider md:text-xl"
                >
                  {project.period}
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="mt-4 text-justify text-lg leading-relaxed tracking-wide md:text-xl"
                >
                  <span className="font-pacifico">{project.subTitle}</span>
                  {` - ${project.description} ${
                    project.role2 === ""
                      ? "My role in this project is "
                      : "My roles in this project are "
                  }`}
                  <span className="font-bold">{project.role} </span>
                  {project.role2 === "" ? "." : "and "}
                  <span className="font-bold">{project.role2}</span>
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
