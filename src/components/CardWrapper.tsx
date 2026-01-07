"use client";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import { useRef } from "react";

interface CardProps {
  children: React.ReactNode;
  progress: MotionValue<number>;
  range: number[];
  id?: string;
}

export default function CardWrapper({
  children,
  range,
  progress,
  id,
}: CardProps) {
  const container = useRef(null);

  const scale = useTransform(progress, range, [1, 0.8]);

  return (
    <div
      id={id}
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0"
    >
      <motion.div
        className="flex flex-col relative h-full w-full origin-top"
        style={{
          scale,
          backgroundColor: "#121b32",
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
