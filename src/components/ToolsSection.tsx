"use client";

import Image from "next/image";
import { ASSETS } from "../constants/data";
import { motion } from "framer-motion";

export default function ToolsSection() {
  const duplicatedTools = [...ASSETS.tools, ...ASSETS.tools, ...ASSETS.tools];

  return (
    <section
      id="tools"
      className="relative w-full pb-20 pt-12 overflow-hidden bg-black/40"
    >
      <div className="mb-16 text-center">
        <h2 className="font-stint text-6xl tracking-wider text-white md:text-7xl lg:text-8xl">
          Tools
        </h2>
        <p className="mt-4 font-crimson text-xl font-bold tracking-wider text-slate-400 md:text-2xl">
          Technologies I work with
        </p>
      </div>

      <div className="relative flex w-full flex-col items-center justify-center py-20">
        <div
          className="absolute inset-0 flex w-full overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0%, black 30%, black 70%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 30%, black 70%, transparent 100%)",
          }}
        >
          <MarqueeContent tools={duplicatedTools} />
        </div>
      </div>
    </section>
  );
}

const MarqueeContent = ({ tools }: { tools: string[] }) => {
  return (
    <motion.div
      className="flex flex-nowrap gap-12 px-6"
      animate={{ x: "-50%" }}
      transition={{
        ease: "linear",
        duration: 30,
        repeat: Infinity,
      }}
    >
      {tools.map((src, index) => (
        <div
          key={index}
          className="relative flex h-24 w-24 shrink-0 items-center justify-center"
        >
          <Image
            src={src}
            alt="Tool"
            fill
            className="object-contain"
            unoptimized
          />
        </div>
      ))}
    </motion.div>
  );
};
