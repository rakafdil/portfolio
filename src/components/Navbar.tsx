"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);
  const pathname = usePathname();

  const navItems = useMemo(() => {
    const homeItems = [
      { label: "About", href: "/#about", hint: "Profile" },
      { label: "Projects", href: "/work/#projects", hint: "Showcase" },
      { label: "Contact", href: "/work/#contacts", hint: "Reach out" },
    ];

    const workItems = [
      { label: "Projects", href: "/work#projects", hint: "Showcase" },
      { label: "Tools", href: "/work#tools", hint: "Stack" },
      { label: "Experience", href: "/work#experiences", hint: "Timeline" },
      { label: "Contact", href: "/work#contacts", hint: "Reach out" },
    ];

    return pathname?.startsWith("/work") ? workItems : homeItems;
  }, [pathname]);

  const updateScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > 100) {
      if (lastScrollY.current > currentScrollY) {
        setHidden(false);
      } else {
        setHidden(true);
      }
    }
    lastScrollY.current = currentScrollY;
  };

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    try {
      const [path, hash] = href.split("#");
      const targetPath = path || "/";
      const currentPath = pathname || "/";

      if (
        hash &&
        (currentPath === targetPath ||
          (currentPath === "" && targetPath === "/"))
      ) {
        e.preventDefault();
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        setOpen(false);
      }
    } catch (err) {
      // ignore and allow normal navigation
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
    return () => {
      window.removeEventListener("scroll", updateScroll);
    };
  }, []); // Hapus dependensi lastScrollY agar tidak boros re-render

  return (
    <>
      {/* 1. DESKTOP NAVBAR (Animasi hide saat scroll hanya berlaku di sini) */}
      <motion.nav
        className="fixed md:left-1/2 md:top-4 z-50 md:w-[calc(100vw-1.5rem)] max-w-5xl md:-translate-x-1/2 lg:top-6 hidden md:block"
        animate={
          hidden
            ? { y: -80, opacity: 0.8, scale: 0.96 }
            : { y: 0, opacity: 1, scale: 1 }
        }
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="flex items-center justify-between gap-4 rounded-[1.75rem] border border-white/10 bg-[rgba(10,14,24,0.75)] px-4 py-3 shadow-[0_20px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl lg:px-6">
          <Link
            href="/"
            className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-slate-200"
          >
            <span className="font-stint text-lg tracking-[0.12em]">Raka</span>
          </Link>

          <div className="flex flex-wrap items-center justify-center gap-2 lg:gap-3">
            {navItems.map((item) => {
              const isSectionLink = item.href.includes("#");
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e as any, item.href)}
                  className="group rounded-full border border-white/10 bg-white/5 px-4 py-2 text-center transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-[#2F4989]"
                >
                  <span className="block font-stint text-lg tracking-[0.18em] text-white">
                    {item.label}
                  </span>
                  <span className="block text-[0.65rem] uppercase tracking-[0.28em] text-slate-400 transition-colors group-hover:text-slate-200">
                    {item.hint}
                  </span>
                  {isSectionLink && (
                    <span className="mt-1 block h-px w-0 bg-white/70 transition-all duration-300 group-hover:w-full" />
                  )}
                </Link>
              );
            })}
          </div>

          <Link
            href={pathname?.startsWith("/work") ? "/" : "/work"}
            className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-[#405A9F] to-[#2F4989] px-4 py-2 font-stint text-lg tracking-[0.2em] text-white shadow-lg shadow-blue-950/30 transition-transform duration-300 hover:-translate-y-0.5"
          >
            {pathname?.startsWith("/work") ? "Home" : "Portfolio"}{" "}
            <FaArrowRight className="text-sm" />
          </Link>
        </div>
      </motion.nav>

      {/* 2. MOBILE HAMBURGER BUTTON (Terpisah dari motion.nav agar tidak ikut ter-transform) */}
      <button
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        className="fixed right-3 top-3 z-50 rounded-full border border-white/10 bg-[rgba(10,14,24,0.85)] p-4 text-2xl text-white shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-transform duration-300 hover:scale-105 md:hidden"
        onClick={() => setOpen(!open)}
      >
        {open ? <IoClose /> : <GiHamburgerMenu />}
      </button>

      {/* 3. MOBILE MENU OVERLAY (Juga terpisah agar independen) */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-4 bg-[#0b1020]/95 px-6 backdrop-blur-2xl md:hidden"
            initial="closed"
            animate="open"
            exit="closed"
            variants={{
              closed: { opacity: 0, transition: { duration: 0.2 } },
              open: { opacity: 1, transition: { duration: 0.2 } },
            }}
          >
            <div className="mb-4 text-center">
              <p className="font-stint text-sm uppercase tracking-[0.45em] text-slate-400">
                Navigation
              </p>
              <h2 className="mt-3 font-stint text-5xl tracking-[0.18em] text-white">
                Portfolio
              </h2>
            </div>

            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e as any, item.href)}
                className="flex w-full max-w-sm items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white transition-all duration-300 hover:border-white/20 hover:bg-[#2F4989]"
              >
                <span className="font-stint text-3xl tracking-[0.18em]">
                  {item.label}
                </span>
                <span className="text-xs uppercase tracking-[0.3em] text-slate-300">
                  {item.hint}
                </span>
              </Link>
            ))}

            <Link
              href={pathname?.startsWith("/work") ? "/" : "/work"}
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-linear-to-r from-[#405A9F] to-[#2F4989] px-6 py-3 font-stint text-2xl tracking-[0.2em] text-white shadow-lg shadow-blue-950/30"
            >
             {pathname?.startsWith("/work") ? "Home" : "Portfolio"}{" "} <FaArrowRight className="text-lg" />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
