import { useEffect } from "react";

const clamp = (value: number, min = 0, max = 1) => Math.min(max, Math.max(min, value));

const smoothstep = (edge0: number, edge1: number, value: number) => {
  const t = clamp((value - edge0) / (edge1 - edge0));

  return t * t * (3 - 2 * t);
};

export function SmoothScroll() {
  useEffect(() => {
    const root = document.documentElement;
    const about = document.getElementById("about");

    if (!about) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const coarsePointer = window.matchMedia("(pointer: coarse)").matches;

    let rafId = 0;
    let disposed = false;
    let cleanupLenis: (() => void) | undefined;

    let aboutTop = about.offsetTop;

    const updateAboutPosition = () => {
      aboutTop = about.offsetTop;
      updateScrollProgress();
    };

    const updateScrollProgress = () => {
      if (rafId) return;

      rafId = window.requestAnimationFrame(() => {
        rafId = 0;

        const scrollY = window.scrollY;

        const progress = aboutTop > 0 ? clamp(scrollY / aboutTop) : 0;

        /*
         * Bubble visibility
         *
         * Fade in:
         * 18% → 50%
         *
         * Fade out:
         * 72% → 100%
         *
         * smoothstep membuat kedua ujungnya
         * masuk/keluar secara perlahan.
         */
        const fadeIn = smoothstep(0.18, 0.5, progress);

        const fadeOut = 1 - smoothstep(0.72, 1, progress);

        const bubbleIntensity = clamp(Math.min(fadeIn, fadeOut));

        root.style.setProperty("--shore-progress", progress.toFixed(3));

        root.style.setProperty("--bubble-intensity", bubbleIntensity.toFixed(3));
      });
    };

    updateAboutPosition();
    updateScrollProgress();

    window.addEventListener("scroll", updateScrollProgress, { passive: true });

    window.addEventListener("resize", updateAboutPosition, { passive: true });

    if (reducedMotion || coarsePointer) {
      return () => {
        window.cancelAnimationFrame(rafId);

        window.removeEventListener("scroll", updateScrollProgress);

        window.removeEventListener("resize", updateAboutPosition);

        root.style.removeProperty("--shore-progress");

        root.style.removeProperty("--bubble-intensity");
      };
    }

    void import("lenis").then(({ default: Lenis }) => {
      if (disposed) return;

      const lenis = new Lenis({
        autoRaf: true,
        duration: 1.15,

        easing: (time) => Math.min(1, 1.001 - Math.pow(2, -10 * time)),

        smoothWheel: true,
        syncTouch: false,
        wheelMultiplier: 0.9,

        anchors: {
          offset: 0,
        },
      });

      if (disposed) {
        lenis.destroy();
        return;
      }

      cleanupLenis = () => {
        lenis.destroy();
      };
    });

    return () => {
      disposed = true;

      window.cancelAnimationFrame(rafId);

      window.removeEventListener("scroll", updateScrollProgress);

      window.removeEventListener("resize", updateAboutPosition);

      cleanupLenis?.();

      root.style.removeProperty("--shore-progress");

      root.style.removeProperty("--bubble-intensity");
    };
  }, []);

  return null;
}
