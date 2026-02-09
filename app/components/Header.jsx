"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

export default function Header() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 40);
  });

  return (
    <motion.header
      initial={false}
      animate={{
        backgroundColor: scrolled
          ? "rgba(11, 29, 81, 0.6)"
          : "rgba(11, 29, 81, 0)",
        backdropFilter: scrolled ? "blur(14px)" : "blur(0px)",
        boxShadow: scrolled
          ? "0 10px 30px rgba(0,0,0,0.15)"
          : "0 0 0 rgba(0,0,0,0)",
      }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="fixed top-0 left-0 z-50 w-full px-6 lg:px-20 flex items-center justify-between py-6"
    >
      <div className="flex items-center gap-2">
        <div className="size-7 text-primary">
          <svg fill="currentColor" viewBox="0 0 48 48">
            <path d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z" />
          </svg>
        </div>
        <h2 className="text-xl font-black tracking-[0.15em] uppercase text-white">
          COREKEYS
        </h2>
      </div>

      <nav className="hidden md:flex items-center gap-12 text-white/90">
        <a className="nav-link" href="#">Properties</a>
        <a className="nav-link" href="#">Neighborhoods</a>
        <a className="nav-link" href="#">Concierge</a>
        <a className="nav-link" href="#">About</a>
      </nav>

      <div className="flex items-center gap-6">
        <button className="hidden sm:block text-white text-xs font-bold tracking-widest uppercase hover:text-primary transition-colors">
          Login
        </button>
        <button className="bg-primary hover:bg-primary/90 text-white px-7 py-3 rounded-full font-bold text-xs tracking-widest uppercase transition-all shadow-lg shadow-primary/20">
          List Property
        </button>
      </div>
    </motion.header>
  );
}




