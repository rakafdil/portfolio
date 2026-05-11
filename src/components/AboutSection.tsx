"use client";

import { ASSETS } from "@/constants/data";
import { motion } from "framer-motion";
import Image from "next/image";

const AboutSection = () => {
  const highlights = [
    "System design",
    "Clean architecture",
    "Security minded",
    "Fullstack shipping",
  ];

  const stats = [
    { label: "Years building", value: "3+" },
    { label: "Projects shipped", value: "12+" },
    { label: "Focus", value: "Web, Mobile" },
    { label: "Location", value: "Indonesia" },
  ];

  return (
    <section
      id="about"
      // Mengubah align menjadi flex-col dan memberikan padding khusus agar tidak tertutup Navbar di atas
      className="relative flex min-h-screen w-full flex-col justify-center overflow-hidden pb-20 pt-32 md:pb-24 md:pt-36"
      style={{
        background:
          "linear-gradient(176deg, rgba(24, 34, 60, 1) 0%, rgba(10, 14, 24, 1) 120%)",
      }}
    >
      {/* Background Ornaments */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 right-0 h-[30rem] w-[30rem] rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[25rem] w-[25rem] rounded-full bg-slate-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(100,116,139,0.08),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(59,130,246,0.08),transparent_35%)]" />
      </div>

      {/* Container utama */}
      <div className="container relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-between gap-12 px-6 lg:flex-row lg:gap-16 xl:px-12">
        
        {/* Teks Content */}
        <motion.div
          className="order-2 w-full max-w-2xl text-center lg:order-1 lg:w-1/2 lg:text-left"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="font-stint text-sm tracking-[0.35em] text-slate-400 md:text-base lg:text-lg">
            ABOUT ME
          </p>
          <h2 className="mt-3 font-stint text-5xl text-slate-50 md:text-6xl lg:text-7xl">
            Hi, I&apos;m{" "}
            <span className="font-pacifico text-slate-300">Raka</span>
          </h2>
          
          <div className="mt-6 space-y-4">
            <p className="font-crimson text-lg leading-relaxed tracking-wide text-slate-100 md:text-xl xl:text-2xl">
              I design, build, and ship fullstack products with a focus on
              real-world impact. From early system design to deployment, I love
              turning ideas into clean, reliable applications.
            </p>
            <p className="font-crimson text-lg leading-relaxed tracking-wide text-slate-100 md:text-xl xl:text-2xl">
              I care about scalable architectures, thoughtful UX, and security
              across the stack.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
            {highlights.map((item, index) => (
              <motion.span
                key={item}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-stint uppercase tracking-[0.2em] text-slate-200 md:text-sm lg:text-base"
              >
                {item}
              </motion.span>
            ))}
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-4 text-left md:p-5"
              >
                <p className="text-2xl font-stint text-white md:text-3xl lg:text-4xl">{stat.value}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.2em] text-slate-400 md:text-sm">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Gambar Profil - Disesuaikan maksimal tingginya agar aman di resolusi laptop standar */}
        <motion.div
          className="order-1 flex w-full justify-center lg:order-2 lg:w-1/2 lg:justify-end"
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <div className="relative h-80 w-64 overflow-hidden rounded-[200px] border border-white/10 bg-white/5 md:h-[400px] md:w-[320px] lg:h-[480px] lg:w-[360px] xl:h-[520px] xl:w-[400px]">
            <Image
              src={ASSETS.profile}
              alt="Raka's profile photo"
              fill
              sizes="(min-width: 1280px) 400px, (min-width: 1024px) 360px, 70vw"
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 rounded-[200px] bg-gradient-to-b from-transparent via-transparent to-slate-900/40" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;