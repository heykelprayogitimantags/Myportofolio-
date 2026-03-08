"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const roles = [
  "Web Developer",
  "Mobile App Developer",
  "IT Support Intern",
  "Software Student",
];

// ── Particle component ────────────────────────────────────
function Particles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 24 }).map((_, i) => (
        <span
          key={i}
          className="absolute rounded-full"
          style={{
            width:  `${2 + Math.random() * 3}px`,
            height: `${2 + Math.random() * 3}px`,
            left:   `${Math.random() * 100}%`,
            bottom: `${Math.random() * 40}%`,
            background: "var(--sky)",
            opacity: 0.15 + Math.random() * 0.3,
            animation: `float-particle ${5 + Math.random() * 6}s linear ${Math.random() * 4}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  const [text,        setText]        = useState("");
  const [isDeleting,  setIsDeleting]  = useState(false);
  const [loopNum,     setLoopNum]     = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  // ── Typing effect ────────────────────────────────────────
  useEffect(() => {
    const fullText = roles[loopNum % roles.length];

    const timer = setTimeout(() => {
      setText((prev) =>
        isDeleting
          ? fullText.substring(0, prev.length - 1)
          : fullText.substring(0, prev.length + 1)
      );
      setTypingSpeed(isDeleting ? 55 : 110);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum((n) => n + 1);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  // ── Stagger variants ──────────────────────────────────────
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  };
  const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    show:   { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <>
      {/* Particle keyframe injected once */}
      <style>{`
        @keyframes float-particle {
          0%   { transform: translateY(0) translateX(0); opacity: .4; }
          50%  { opacity: .08; }
          100% { transform: translateY(-120px) translateX(18px); opacity: 0; }
        }
        @keyframes spin-slow { to { transform: rotate(360deg); } }
        @keyframes spin-rev  { to { transform: rotate(-360deg); } }
        @keyframes blink     { 0%,100%{opacity:1} 50%{opacity:0} }
        .cursor-blink { animation: blink 0.9s step-end infinite; }
        .ring-spin     { animation: spin-slow 10s linear infinite; }
        .ring-spin-rev { animation: spin-rev  14s linear infinite; }
      `}</style>

      <section
        id="hero"
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ background: "var(--bg)" }}
      >
        {/* ── Radial glow background ── */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              radial-gradient(ellipse 55% 50% at 68% 42%, rgba(56,189,248,0.07) 0%, transparent 70%),
              radial-gradient(ellipse 35% 55% at 15% 80%, rgba(14,165,233,0.05) 0%, transparent 60%)
            `,
          }}
        />

        {/* ── Grid dots ── */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(rgba(56,189,248,0.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(56,189,248,0.04) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
            maskImage: "radial-gradient(ellipse 80% 80% at 60% 40%, black 0%, transparent 100%)",
          }}
        />

        <Particles />

        <div className="relative z-10 max-w-[1160px] mx-auto px-6 w-full pt-28 pb-16 lg:pt-36 lg:pb-24 min-h-screen flex items-center">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16 w-full">

            {/* ── LEFT: Text content ──────────────────────── */}
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="flex-1 max-w-[620px]"
            >
              {/* Available badge */}
              <motion.div variants={fadeUp}>
                <span
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-[0.12em] mb-10 mt-2"
                  style={{
                    background: "var(--sky-dim)",
                    border: "1px solid rgba(56,189,248,0.25)",
                    color: "var(--sky)",
                  }}
                >
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ background: "var(--sky)", animation: "blink 2s infinite" }}
                  />
                  Available for Freelance &amp; Internship
                </span>
              </motion.div>

              {/* Name */}
              <motion.h1
                variants={fadeUp}
                className="font-syne font-extrabold leading-[0.92] tracking-tight mb-6"
                style={{ fontSize: "clamp(2.4rem, 5.5vw, 4.2rem)" }}
              >
                <span
                  className="block"
                  style={{
                    background: "linear-gradient(135deg, var(--text) 30%, var(--sky))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Heykel Prayogi
                </span>
                <span style={{ color: "var(--sky)" }}>Timanta G.s</span>
              </motion.h1>

              {/* Typing */}
              <motion.div
                variants={fadeUp}
                className="flex items-center gap-2 font-syne font-bold text-xl md:text-2xl mb-6"
                style={{ color: "var(--text2)" }}
              >
                <span>I&apos;m a&nbsp;</span>
                <span style={{ color: "var(--text)" }}>{text}</span>
                <span
                  className="cursor-blink inline-block w-[2px] rounded-full"
                  style={{ height: "1.2em", background: "var(--sky)" }}
                />
              </motion.div>

              {/* Description */}
              <motion.p
                variants={fadeUp}
                className="text-base md:text-[1.05rem] leading-[1.8] max-w-[500px] mb-10"
                style={{ color: "var(--text2)" }}
              >
                Berfokus pada pengembangan aplikasi web dan mobile yang modern,
                serta berpengalaman dalam pemeliharaan infrastruktur IT
                di sektor perbankan (BNI).
              </motion.p>

              {/* CTA buttons */}
              <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mb-12">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 font-syne font-bold text-sm px-7 py-3.5 rounded-full transition-all duration-300"
                  style={{
                    background: "linear-gradient(135deg, var(--sky-dark), var(--sky))",
                    color: "#000",
                    boxShadow: "0 0 28px var(--sky-glow)",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
                >
                  Lihat Proyek
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 font-syne font-bold text-sm px-7 py-3.5 rounded-full transition-all duration-300"
                  style={{
                    background: "var(--surface)",
                    border: "1.5px solid var(--border)",
                    color: "var(--text)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--sky)";
                    e.currentTarget.style.color = "var(--sky)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--border)";
                    e.currentTarget.style.color = "var(--text)";
                  }}
                >
                   Hubungi Saya
                </a>
                <a
                  href="/cv-heykel.pdf"
                  download
                  className="inline-flex items-center gap-2 font-syne font-bold text-sm px-7 py-3.5 rounded-full transition-all duration-300"
                  style={{
                    background: "var(--surface)",
                    border: "1.5px solid var(--border)",
                    color: "var(--text)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--sky)";
                    e.currentTarget.style.color = "var(--sky)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--border)";
                    e.currentTarget.style.color = "var(--text)";
                  }}
                >
                  📄 Download My CV
                </a>
              </motion.div>

              {/* Stats */}
              <motion.div
                variants={fadeUp}
                className="flex gap-10 pt-8"
                style={{ borderTop: "1px solid var(--border)" }}
              >
                {[
                  { num: "10+", label: "Projects Done" },
                  { num: "2+",  label: "Years Exp" },
                  { num: "5+",  label: "Tech Stack" },
                ].map((s) => (
                  <div key={s.label}>
                    <div
                      className="font-syne font-extrabold text-3xl"
                      style={{ color: "var(--sky)" }}
                    >
                      {s.num}
                    </div>
                    <div
                      className="text-[0.7rem] font-bold uppercase tracking-[0.12em] mt-0.5"
                      style={{ color: "var(--text2)" }}
                    >
                      {s.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* ── RIGHT: Avatar ────────────────────────────── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="hidden lg:flex flex-shrink-0 items-center justify-center"
            >
              <div className="relative w-[320px] h-[320px]">

                {/* Outer spinning ring (dashed) */}
                <div
                  className="ring-spin absolute rounded-full pointer-events-none"
                  style={{
                    inset: "-28px",
                    border: "1.5px dashed rgba(56,189,248,0.25)",
                    borderRadius: "50%",
                  }}
                />

                {/* Inner spinning ring */}
                <div
                  className="ring-spin-rev absolute rounded-full pointer-events-none"
                  style={{
                    inset: "-14px",
                    border: "1px solid transparent",
                    borderTop: "1px solid rgba(56,189,248,0.5)",
                    borderRight: "1px solid rgba(56,189,248,0.2)",
                    borderRadius: "50%",
                  }}
                />

                {/* Glow behind avatar */}
                <div
                  className="absolute inset-0 rounded-full pointer-events-none"
                  style={{
                    boxShadow: "0 0 80px 20px rgba(56,189,248,0.15)",
                    borderRadius: "50%",
                  }}
                />

                
                <div
                  className="relative w-full h-full rounded-full overflow-hidden"
                  style={{
                    border: "3px solid rgba(56,189,248,0.35)",
                    boxShadow: "0 0 40px rgba(56,189,248,0.25)",
                  }}
                >
                  
                  <Image
                    src="/images/heykel.jpeg"
                    alt="Heykel Prayogi"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                  {/* Overlay gradient bawah agar menyatu */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: "linear-gradient(to top, rgba(7,13,26,0.4) 0%, transparent 50%)",
                    }}
                  />
                </div>

                {/* Floating card — kiri bawah */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-5 -left-10 px-4 py-3 rounded-2xl text-sm font-bold font-syne"
                  style={{
                    background: "var(--surface2)",
                    border: "1px solid var(--border)",
                    backdropFilter: "blur(16px)",
                    color: "var(--sky)",
                    whiteSpace: "nowrap",
                  }}
                >
                  💻 Full Stack Dev
                </motion.div>

                {/* Floating card — kanan atas */}
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -top-5 -right-6 px-4 py-3 rounded-2xl text-sm font-bold font-syne"
                  style={{
                    background: "var(--surface2)",
                    border: "1px solid var(--border)",
                    backdropFilter: "blur(16px)",
                    color: "#a78bfa",
                    whiteSpace: "nowrap",
                  }}
                >
                  📱 Flutter Dev
                </motion.div>

                {/* Floating card — kanan tengah */}
                <motion.div
                  animate={{ x: [0, 10, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute top-1/2 -translate-y-1/2 -right-16 px-4 py-3 rounded-2xl text-sm font-bold font-syne"
                  style={{
                    background: "var(--surface2)",
                    border: "1px solid var(--border)",
                    backdropFilter: "blur(16px)",
                    color: "#34d399",
                    whiteSpace: "nowrap",
                  }}
                >
                  🛡️ IT Security
                </motion.div>
              </div>
            </motion.div>

          </div>
        </div>

        {/* ── Scroll indicator ─────────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{ color: "var(--text3)" }}
        >
          <span className="text-[0.65rem] font-bold uppercase tracking-[0.2em] font-syne">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-[1px] h-8 rounded-full"
            style={{ background: "linear-gradient(to bottom, var(--sky), transparent)" }}
          />
        </motion.div>
      </section>
    </>
  );
}