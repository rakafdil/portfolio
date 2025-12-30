"use client";
import { motion, Variants } from "framer-motion";
import { EXPERIENCES } from "@/constants/data";
import Image from "next/image";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: i * 0.15 },
  }),
  exit: { opacity: 0, y: 10, transition: { duration: 0.3 } },
};

export default function ExperiencesSection() {
  return (
    <section id="experiences" className="relative w-full overflow-hidden py-20">
      <div className="container relative z-10 mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="font-stint text-6xl tracking-wider text-white md:text-7xl lg:text-8xl">
            Experiences
          </h2>
          <p className="mt-4 font-crimson text-xl font-bold tracking-wider text-slate-400 md:text-2xl">
            My activities over the years
          </p>
        </div>

        <div className="mx-auto max-w-7xl space-y-8">
          {EXPERIENCES.map((exp, index) => {
            const isReverse = index % 2 !== 0;
            return (
              <motion.article
                key={exp.title + index}
                className={`group flex flex-col gap-6 overflow-hidden rounded-3xl border border-white/10 bg-[rgba(66,87,136,0.15)] p-8 md:items-center 
                ${
                  isReverse ? "ml-auto md:flex-row-reverse" : "md:flex-row"
                } max-w-5xl`}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                custom={index}
                exit="exit"
                role="article"
                aria-labelledby={`exp-title-${index}`}
              >
                <div className="flex-none w-full md:w-96 h-48 md:h-64 overflow-hidden rounded-2xl bg-gradient-to-tr from-[#0f1724]/30 to-transparent">
                  <Image
                    src={exp.img}
                    alt={exp.title}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    placeholder="blur"
                    blurDataURL="/img/placeholder.png"
                  />
                </div>

                <div className="text-left flex-1">
                  <h3
                    id={`exp-title-${index}`}
                    className="font-crimson text-2xl md:text-3xl lg:text-4xl tracking-wide text-white"
                  >
                    {exp.title}
                  </h3>
                  <p className="mt-4 text-justify text-lg leading-relaxed tracking-wide text-slate-200">
                    <span className="font-pacifico text-slate-100">
                      {exp.role}
                    </span>
                    {exp.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
