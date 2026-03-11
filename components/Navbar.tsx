"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { name: "About",        href: "#about"         },
  { name: "Skills",       href: "#skills"         },
  { name: "Projects",     href: "#projects"       },
  { name: "Certificates", href: "#certificates" },
  { name: "Contact",      href: "#contact"        },
];

export default function Navbar() {
  const [isOpen,   setIsOpen]   = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState("");

  // Scroll progress bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Glassmorphism on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section via IntersectionObserver
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    navItems.forEach(({ href }) => {
      const el = document.getElementById(href.slice(1));
      if (!el) return;
      const obs = new IntersectionObserver(
        ([e]) => { if (e.isIntersecting) setActiveId(href.slice(1)); },
        { threshold: 0.3 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // Lock body scroll when drawer open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const close = () => setIsOpen(false);

  return (
    <>
      {/* ══ MAIN NAVBAR ══════════════════════════════════════ */}
      <nav
        className="fixed top-0 left-0 right-0 z-[1000] transition-all duration-500"
        style={{
          padding:              scrolled ? "10px 0" : "20px 0",
          background:           scrolled ? "rgba(7,13,26,0.88)" : "transparent",
          backdropFilter:       scrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom:         scrolled ? "1px solid var(--border)" : "1px solid transparent",
        }}
      >
        {/* Scroll progress bar */}
        <motion.div
          style={{
            scaleX,
            position:        "absolute",
            top:             0,
            left:            0,
            right:           0,
            height:          "2px",
            transformOrigin: "0%",
            background:      "linear-gradient(90deg, var(--sky-dark), var(--sky), #a78bfa)",
            boxShadow:       "0 0 12px var(--sky-glow)",
          }}
        />

        <div className="max-w-[1160px] mx-auto px-6 flex items-center justify-between">

          {/* Name text as logo */}
          <a
            href="#hero"
            aria-label="Home"
            className="font-syne font-extrabold text-xl tracking-tight flex-shrink-0"
            style={{ color: "var(--text)" }}
          >
            hykl<span style={{ color: "var(--sky)" }}>.</span>
          </a>

          {/* Desktop nav links */}
          <ul className="hidden lg:flex items-center gap-1">
            {navItems.map(({ name, href }) => {
              const id       = href.slice(1);
              const isActive = activeId === id;
              return (
                <li key={id} className="relative">
                  <a
                    href={href}
                    className="relative flex items-center px-4 py-2 font-syne font-bold text-[0.78rem] uppercase tracking-[0.08em] rounded-lg transition-all duration-300"
                    style={{
                      color:      isActive ? "var(--sky)"     : "var(--text2)",
                      background: isActive ? "var(--sky-dim)" : "transparent",
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) e.currentTarget.style.color = "var(--text)";
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) e.currentTarget.style.color = "var(--text2)";
                    }}
                  >
                    {name}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute bottom-1 left-4 right-4 h-[2px] rounded-full"
                        style={{ background: "var(--sky)" }}
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <ThemeToggle />

            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-1.5 font-syne font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-full transition-all duration-300 flex-shrink-0"
              style={{
                background: "linear-gradient(135deg, var(--sky-dark), var(--sky))",
                color:      "#000",
                boxShadow:  "0 0 20px var(--sky-glow)",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
            >
              Hire Me ✦
            </a>

            {/* Hamburger */}
            <button
              aria-label={isOpen ? "Tutup menu" : "Buka menu"}
              onClick={() => setIsOpen((v) => !v)}
              className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] rounded-xl flex-shrink-0 transition-all duration-300"
              style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
            >
              {[
                isOpen ? "rotate(45deg) translate(0,7px)"   : "none",
                "none",
                isOpen ? "rotate(-45deg) translate(0,-7px)" : "none",
              ].map((transform, i) => (
                <span
                  key={i}
                  className="block w-[18px] h-[2px] rounded-full transition-all duration-300"
                  style={{
                    background:      "var(--text)",
                    transform,
                    opacity:         i === 1 && isOpen ? 0 : 1,
                    transformOrigin: "center",
                  }}
                />
              ))}
            </button>
          </div>
        </div>
      </nav>

      {/* ══ MOBILE DRAWER ════════════════════════════════════ */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="bd"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-[1500] lg:hidden"
              style={{ background: "rgba(0,0,0,0.65)", backdropFilter: "blur(8px)" }}
              onClick={close}
            />

            {/* Drawer panel */}
            <motion.aside
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 z-[1600] w-[min(300px,88vw)] flex flex-col lg:hidden"
              style={{ background: "var(--bg2)", borderLeft: "1px solid var(--border)" }}
            >
              {/* Drawer header */}
              <div
                className="flex items-center justify-between px-7 py-5"
                style={{ borderBottom: "1px solid var(--border)" }}
              >
                <span
                  className="font-syne font-extrabold text-lg"
                  style={{ color: "var(--text)" }}
                >
                  HP<span style={{ color: "var(--sky)" }}>.</span>
                </span>
                <button
                  onClick={close}
                  aria-label="Tutup menu"
                  className="w-9 h-9 rounded-full flex items-center justify-center text-sm transition-all duration-300"
                  style={{
                    background: "var(--surface)",
                    border:     "1px solid var(--border)",
                    color:      "var(--text2)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--sky)";
                    e.currentTarget.style.color       = "var(--sky)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--border)";
                    e.currentTarget.style.color       = "var(--text2)";
                  }}
                >
                  ✕
                </button>
              </div>

              {/* Drawer links */}
              <nav className="flex flex-col gap-1 px-5 py-6 flex-1 overflow-y-auto">
                {navItems.map(({ name, href }, i) => {
                  const id       = href.slice(1);
                  const isActive = activeId === id;
                  return (
                    <motion.a
                      key={id}
                      href={href}
                      onClick={close}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.055, duration: 0.3 }}
                      className="flex items-center px-4 py-3.5 rounded-xl font-syne font-bold text-base transition-all duration-200"
                      style={{
                        color:      isActive ? "var(--sky)"     : "var(--text)",
                        background: isActive ? "var(--sky-dim)" : "transparent",
                        borderLeft: isActive
                          ? "3px solid var(--sky)"
                          : "3px solid transparent",
                      }}
                    >
                      {name}
                    </motion.a>
                  );
                })}
              </nav>

              {/* Drawer footer */}
              <div
                className="px-7 py-6 flex flex-col gap-3"
                style={{ borderTop: "1px solid var(--border)" }}
              >
                <a
                  href="#contact"
                  onClick={close}
                  className="flex items-center justify-center w-full py-3.5 rounded-full font-syne font-bold text-sm uppercase tracking-wider"
                  style={{
                    background: "linear-gradient(135deg, var(--sky-dark), var(--sky))",
                    color:      "#000",
                    boxShadow:  "0 0 24px var(--sky-glow)",
                  }}
                >
                  Let&apos;s Talk →
                </a>
                <div className="flex justify-center">
                  <ThemeToggle />
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}