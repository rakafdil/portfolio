"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;

    if (!dot || !ring) return;

    const moveCursor = (e: MouseEvent) => {
      const { clientX, clientY } = e;

      dot.style.transform = `translate(${clientX}px, ${clientY}px)`;
      ring.style.transform = `translate(${clientX - 18}px, ${clientY - 18}px)`;
    };

    window.addEventListener("mousemove", moveCursor);
    const shrink = () => (ring.style.transform += " scale(0.85)");
    const expand = () =>
      (ring.style.transform = ring.style.transform.replace(" scale(0.85)", ""));

    window.addEventListener("mousedown", shrink);
    window.addEventListener("mouseup", expand);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", shrink);
      window.removeEventListener("mouseup", expand);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}
