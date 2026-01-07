"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  const navItems = ["About", "Projects", "Tools", "Experiences", "Contacts"];

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

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
    return () => {
      window.removeEventListener("scroll", updateScroll);
    };
  }, [lastScrollY]);

  const handleScroll = (e: React.MouseEvent, index: number) => {
    e.preventDefault();
    setOpen(false);

    const targetIndex = index + 1;
    const targetScroll = targetIndex * window.innerHeight;

    window.scrollTo({
      top: targetScroll,
      behavior: "smooth",
    });
  };

  return (
    <motion.nav
      className="fixed md:left-1/2 md:top-4 z-50 md:-translate-x-1/2 lg:top-8"
      animate={
        !isMobile && hidden
          ? { y: -80, opacity: 0, scale: 0.96 }
          : { y: 0, opacity: 1, scale: 1 }
      }
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="md:flex hidden items-center gap-6 rounded-full border border-[#425c9c] bg-[rgba(21,32,59,0.8)] px-8 py-4 backdrop-blur-md md:gap-8 md:px-8 xl:px-16">
        {navItems.map((item, i) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            onClick={(e) => handleScroll(e, i)}
            className="font-stint text-[1rem] text-white transition-colors hover:text-slate-300 md:text-xl cursor-pointer"
          >
            {item === "About" ? "About Me" : item}
          </a>
        ))}
      </div>

      <button
        className="block md:hidden fixed right-0 text-2xl transition-all z-10 p-10 py-4"
        onClick={() => setOpen(!open)}
      >
        {open ? <IoClose /> : <GiHamburgerMenu />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="md:hidden fixed bg-black/80 w-full h-full z-0 flex flex-col items-center justify-center gap-10"
            initial="closed"
            animate="open"
            exit="closed"
            variants={{
              closed: { opacity: 0, transition: { duration: 0.2 } },
              open: { opacity: 1, transition: { duration: 0.2 } },
            }}
          >
            {navItems.map((item, i) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => handleScroll(e, i)}
                className="font-stint text-white transition-colors hover:text-slate-300 text-5xl cursor-pointer"
              >
                {item === "About" ? "About Me" : item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
