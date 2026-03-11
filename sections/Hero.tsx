"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDownRight, Download, Sparkles } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const roles = ["Web Developer", "Mobile App Developer", "IT Support", "Software Student"];

// ── Animated counter hook ─────────────────────────────────
function useCounter(target: number, duration = 1800) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration]);
  return count;
}

// ── Typing hook ───────────────────────────────────────────
function useTyping(words: string[]) {
  const [text,       setText]       = useState("");
  const [wordIdx,    setWordIdx]    = useState(0);
  const [deleting,   setDeleting]   = useState(false);
  const [speed,      setSpeed]      = useState(120);

  useEffect(() => {
    const full = words[wordIdx % words.length];
    const t = setTimeout(() => {
      setText((p) => deleting ? full.slice(0, p.length - 1) : full.slice(0, p.length + 1));
      setSpeed(deleting ? 50 : 100);
      if (!deleting && text === full)      setTimeout(() => setDeleting(true), 1800);
      else if (deleting && text === "") { setDeleting(false); setWordIdx((n) => n + 1); }
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, wordIdx, speed, words]);

  return text;
}

// ── Noise canvas overlay ──────────────────────────────────
function NoiseOverlay() {
  return (
    <div
      className="absolute inset-0 pointer-events-none z-[1] opacity-[0.025]"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        backgroundSize: "180px",
      }}
    />
  );
}

// ── Floating tech pills ───────────────────────────────────
const techPills = [
  { label: "React",    color: "#61DAFB", x: -60,  y: -30,  delay: 0    },
  { label: "Flutter",  color: "#54C5F8", x:  70,  y:  50,  delay: 0.4  },
  { label: "Next.js",  color: "#ffffff", x: -50,  y:  80,  delay: 0.8  },
  { label: "Node.js",  color: "#339933", x:  80,  y: -60,  delay: 1.2  },
];

export default function Hero() {
  const typedText = useTyping(roles);
  const projects  = useCounter(10, 1600);
  const techs     = useCounter(15, 1800);

  const { scrollY } = useScroll();
  const photoY = useTransform(scrollY, [0, 600], [0, -60]);
  const textY  = useTransform(scrollY, [0, 600], [0, 40]);

  const container = {
    hidden: {},
    show:   { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };
  const up = {
    hidden: { opacity: 0, y: 32 },
    show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <>
      <style>{`
        @keyframes blink      { 0%,100%{opacity:1}50%{opacity:0} }
        @keyframes spin-slow  { to{transform:rotate(360deg)} }
        @keyframes spin-rev   { to{transform:rotate(-360deg)} }
        @keyframes drift-up   { 0%{transform:translateY(0) translateX(0);opacity:.5}
                                100%{transform:translateY(-100px) translateX(12px);opacity:0} }
        @keyframes scan-line  { 0%{top:-10%} 100%{top:110%} }
        .cursor-blink         { animation: blink 0.85s step-end infinite; }
        .ring-cw              { animation: spin-slow 12s linear infinite; }
        .ring-ccw             { animation: spin-rev  18s linear infinite; }
        .particle             { animation: drift-up linear infinite; }
        .scan                 { animation: scan-line 3.5s linear infinite; }
      `}</style>

      <section
        id="hero"
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ background: "var(--bg)" }}
      >
        <NoiseOverlay />

        {/* ── Background layers ──────────────────────────── */}
        {/* Deep glow */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse 70% 60% at 65% 45%, rgba(56,189,248,0.07) 0%, transparent 65%)",
        }} />
        {/* Second glow */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse 40% 50% at 10% 80%, rgba(167,139,250,0.05) 0%, transparent 55%)",
        }} />

        {/* ── Diagonal grid lines ─────────────────────────── */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ opacity: 0.035 }}>
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-sky-400"
              style={{
                width: "1px",
                height: "200%",
                left:   `${5 + i * 14}%`,
                top:    "-50%",
                transform: "rotate(15deg)",
                transformOrigin: "top center",
              }}
            />
          ))}
        </div>

        {/* ── Floating particles ──────────────────────────── */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(18)].map((_, i) => (
            <span
              key={i}
              className="particle absolute rounded-full"
              style={{
                width:           `${1.5 + (i % 3)}px`,
                height:          `${1.5 + (i % 3)}px`,
                left:            `${(i * 17 + 5) % 100}%`,
                bottom:          `${(i * 23) % 45}%`,
                background:      i % 3 === 0 ? "var(--sky)" : i % 3 === 1 ? "#a78bfa" : "#34d399",
                opacity:         0.2 + (i % 4) * 0.08,
                animationDuration:`${6 + (i % 5) * 1.5}s`,
                animationDelay:  `${(i * 0.7) % 4}s`,
              }}
            />
          ))}
        </div>

        {/* ── Main content ───────────────────────────────── */}
        <div className="relative z-10 max-w-[1160px] mx-auto px-6 w-full pt-28 pb-16 lg:pt-32 lg:pb-20 min-h-screen flex items-center">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 xl:gap-20 w-full">

            {/* ════ LEFT ════════════════════════════════════ */}
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              style={{ y: textY }}
              className="flex-1 max-w-[600px]"
            >
              {/* Status badge */}
              <motion.div variants={up} className="mb-8">
                <span
                  className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-[11px] font-bold uppercase tracking-[0.14em] font-syne"
                  style={{
                    background: "var(--sky-dim)",
                    border:     "1px solid rgba(56,189,248,0.3)",
                    color:      "var(--sky)",
                  }}
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60" style={{ background: "#34d399" }} />
                    <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: "#34d399" }} />
                  </span>
                  Available for Internship &amp; Freelance
                  <Sparkles size={11} />
                </span>
              </motion.div>

              {/* ── HERO NAME — large editorial typography ── */}
              <motion.div variants={up} className="mb-5">
                {/* Small eyebrow */}
                <p
                  className="font-syne font-bold text-[0.65rem] uppercase tracking-[0.35em] mb-3"
                  style={{ color: "var(--text3)" }}
                >
                  ✦ Fullstack · Mobile · IT Support
                </p>

                <h1
                  className="font-syne font-extrabold leading-[0.9] tracking-tight"
                  style={{ fontSize: "clamp(2.8rem, 6.5vw, 5rem)" }}
                >
                  {/* First line — gradient */}
                  <span
                    className="block"
                    style={{
                      background:           "linear-gradient(120deg, var(--text) 0%, var(--sky) 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor:  "transparent",
                      backgroundClip:       "text",
                    }}
                  >
                    Heykel
                  </span>
                  {/* Second line — outlined */}
                  <span
                    className="block"
                    style={{
                      WebkitTextStroke:    "1.5px rgba(56,189,248,0.6)",
                      color:               "transparent",
                    }}
                  >
                    Prayogi
                  </span>
                  {/* Third line — solid sky */}
                  <span className="block" style={{ color: "var(--sky)" }}>
                    Timanta<span style={{ color: "var(--text3)", fontSize: "0.5em", verticalAlign: "super" }}>G.s</span>
                  </span>
                </h1>
              </motion.div>

              {/* Typing role */}
              <motion.div
                variants={up}
                className="flex items-center gap-3 mb-7"
                style={{ color: "var(--text2)" }}
              >
                {/* Accent line */}
                <div
                  className="w-8 h-[2px] rounded-full flex-shrink-0"
                  style={{ background: "linear-gradient(90deg, var(--sky), transparent)" }}
                />
                <span className="font-syne font-semibold text-base md:text-lg">
                  I&apos;m a{" "}
                  <span style={{ color: "var(--text)", fontWeight: 800 }}>{typedText}</span>
                  <span
                    className="cursor-blink inline-block w-[2px] ml-0.5 rounded-sm"
                    style={{ height: "1.1em", background: "var(--sky)", verticalAlign: "text-bottom" }}
                  />
                </span>
              </motion.div>

              {/* Description */}
              <motion.p
                variants={up}
                className="text-[0.95rem] leading-[1.85] max-w-[480px] mb-8"
                style={{ color: "var(--text2)" }}
              >
                Mahasiswa Teknologi rekaya perangkat lunak di Polmed yang passionate membangun
                aplikasi kebutuhan dari web responsif hingga mobile app Flutter.
                Saat ini magang sebagai{" "}
                <strong style={{ color: "var(--text)", fontWeight: 700 }}>
                  IT Support di BNI
                </strong>.
              </motion.p>

              {/* CTA row */}
              <motion.div variants={up} className="flex flex-wrap items-center gap-3 mb-10">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 font-syne font-extrabold text-[0.8rem] uppercase tracking-widest px-6 py-3.5 rounded-2xl transition-all duration-300"
                  style={{
                    background: "linear-gradient(135deg, var(--sky-dark), var(--sky))",
                    color:      "#000",
                    boxShadow:  "0 0 30px var(--sky-glow), inset 0 1px 0 rgba(255,255,255,0.2)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform  = "translateY(-2px)";
                    e.currentTarget.style.boxShadow  = "0 0 45px var(--sky-glow), inset 0 1px 0 rgba(255,255,255,0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform  = "translateY(0)";
                    e.currentTarget.style.boxShadow  = "0 0 30px var(--sky-glow), inset 0 1px 0 rgba(255,255,255,0.2)";
                  }}
                >
                  Lihat Proyek
                  <ArrowDownRight size={14} />
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 font-syne font-extrabold text-[0.8rem] uppercase tracking-widest px-6 py-3.5 rounded-2xl transition-all duration-300"
                  style={{
                    background: "var(--surface)",
                    border:     "1.5px solid var(--border)",
                    color:      "var(--text)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--sky)";
                    e.currentTarget.style.color       = "var(--sky)";
                    e.currentTarget.style.transform   = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--border)";
                    e.currentTarget.style.color       = "var(--text)";
                    e.currentTarget.style.transform   = "translateY(0)";
                  }}
                >
                  Hubungi Saya
                </a>

                <a
                  href="/cv-heykel.pdf"
                  download
                  className="inline-flex items-center gap-2 font-syne font-bold text-[0.8rem] px-5 py-3.5 rounded-2xl transition-all duration-300"
                  style={{
                    background: "transparent",
                    border:     "1.5px solid var(--border)",
                    color:      "var(--text2)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color       = "var(--sky)";
                    e.currentTarget.style.borderColor = "rgba(56,189,248,0.4)";
                    e.currentTarget.style.transform   = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color       = "var(--text2)";
                    e.currentTarget.style.borderColor = "var(--border)";
                    e.currentTarget.style.transform   = "translateY(0)";
                  }}
                >
                  <Download size={13} />
                  CV
                </a>

                {/* Social mini buttons */}
                {[
                  { icon: FaGithub,   href: "https://github.com/heykelprayogitimantags", color: "#e2e8f0" },
                  { icon: FaLinkedin, href: "https://linkedin.com/in/heykelprayogitimanta", color: "#0A66C2" },
                ].map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 flex items-center justify-center rounded-2xl transition-all duration-300 flex-shrink-0"
                    style={{
                      background: "var(--surface)",
                      border:     "1.5px solid var(--border)",
                      color:      "var(--text3)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color       = s.color;
                      e.currentTarget.style.borderColor = s.color + "55";
                      e.currentTarget.style.transform   = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color       = "var(--text3)";
                      e.currentTarget.style.borderColor = "var(--border)";
                      e.currentTarget.style.transform   = "translateY(0)";
                    }}
                  >
                    <s.icon size={17} />
                  </a>
                ))}
              </motion.div>

              {/* Stats row */}
              <motion.div
                variants={up}
                className="flex items-center gap-8 pt-7"
                style={{ borderTop: "1px solid var(--border)" }}
              >
                {[
                  { val: `${projects}+`, label: "Projects" },
                  { val: `${techs}+`,    label: "Tech Stack" },
                  { val: "1+",           label: "Yrs Exp" },
                ].map((s, i) => (
                  <React.Fragment key={s.label}>
                    <div>
                      <div
                        className="font-syne font-extrabold"
                        style={{ fontSize: "clamp(1.6rem,3vw,2.2rem)", color: "var(--sky)" }}
                      >
                        {s.val}
                      </div>
                      <div
                        className="text-[0.65rem] font-bold uppercase tracking-[0.15em] font-syne mt-0.5"
                        style={{ color: "var(--text3)" }}
                      >
                        {s.label}
                      </div>
                    </div>
                    {i < 2 && (
                      <div className="w-[1px] h-10 flex-shrink-0" style={{ background: "var(--border)" }} />
                    )}
                  </React.Fragment>
                ))}
              </motion.div>
            </motion.div>

            {/* ════ RIGHT — Photo ════════════════════════════ */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              style={{ y: photoY }}
              className="hidden lg:block flex-shrink-0 relative"
            >
              <div className="relative w-[340px] xl:w-[380px]">

                {/* ── Decorative elements ── */}
                {/* Large outer ring dashed */}
                <div
                  className="ring-cw absolute rounded-full pointer-events-none"
                  style={{
                    inset:        "-36px",
                    border:       "1px dashed rgba(56,189,248,0.18)",
                    borderRadius: "50%",
                  }}
                />
                {/* Inner ring solid partial */}
                <div
                  className="ring-ccw absolute rounded-full pointer-events-none"
                  style={{
                    inset:        "-18px",
                    border:       "1.5px solid transparent",
                    borderTop:    "1.5px solid rgba(56,189,248,0.55)",
                    borderRight:  "1.5px solid rgba(56,189,248,0.2)",
                    borderRadius: "50%",
                  }}
                />
                {/* Purple ring */}
                <div
                  className="ring-cw absolute rounded-full pointer-events-none"
                  style={{
                    inset:         "-52px",
                    border:        "1px solid transparent",
                    borderBottom:  "1px solid rgba(167,139,250,0.3)",
                    borderLeft:    "1px solid rgba(167,139,250,0.15)",
                    borderRadius:  "50%",
                    animationDuration: "22s",
                  }}
                />

                {/* Glow behind photo */}
                <div
                  className="absolute inset-0 rounded-full pointer-events-none"
                  style={{ boxShadow: "0 0 100px 30px rgba(56,189,248,0.12)", borderRadius: "50%" }}
                />

                {/* ── Photo circle ── */}
                <div
                  className="relative rounded-full overflow-hidden"
                  style={{
                    aspectRatio:  "1",
                    border:       "2.5px solid rgba(56,189,248,0.4)",
                    boxShadow:    "0 0 50px rgba(56,189,248,0.2), inset 0 0 30px rgba(56,189,248,0.05)",
                  }}
                >
                  {/* Scan line effect */}
                  <div
                    className="scan absolute left-0 right-0 z-10 pointer-events-none"
                    style={{
                      height:     "40px",
                      background: "linear-gradient(to bottom, transparent, rgba(56,189,248,0.06), transparent)",
                    }}
                  />

                  <Image
                    src="/images/hero.png"
                    alt="Heykel Prayogi Timanta"
                    fill
                    className="object-cover object-top"
                    priority
                  />

                  {/* Inner gradient overlay */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: "linear-gradient(to top, rgba(7,13,26,0.45) 0%, transparent 55%)",
                    }}
                  />
                </div>

                {/* ── Tech pills floating ── */}
                {techPills.map((pill) => (
                  <motion.div
                    key={pill.label}
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
                    transition={{
                      opacity:   { duration: 0.5, delay: 0.8 + pill.delay },
                      scale:     { duration: 0.5, delay: 0.8 + pill.delay },
                      y:         { duration: 3 + pill.delay, repeat: Infinity, ease: "easeInOut", delay: pill.delay },
                    }}
                    className="absolute flex items-center gap-2 px-3.5 py-2 rounded-xl font-syne font-bold text-xs pointer-events-none"
                    style={{
                      background:     "rgba(7,13,26,0.88)",
                      backdropFilter: "blur(16px)",
                      border:         `1px solid ${pill.color}30`,
                      color:          pill.color,
                      boxShadow:      `0 4px 20px rgba(0,0,0,0.3), 0 0 12px ${pill.color}18`,
                      // Position relative to center
                      left:  `calc(50% + ${pill.x}px)`,
                      top:   `calc(50% + ${pill.y}px)`,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: pill.color, boxShadow: `0 0 6px ${pill.color}` }}
                    />
                    {pill.label}
                  </motion.div>
                ))}

                {/* ── Corner stat card ── */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                  className="absolute -bottom-8 -right-8 px-5 py-4 rounded-2xl"
                  style={{
                    background:     "rgba(7,13,26,0.92)",
                    backdropFilter: "blur(20px)",
                    border:         "1px solid rgba(56,189,248,0.2)",
                    boxShadow:      "0 16px 48px rgba(0,0,0,0.4)",
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: "var(--sky-dim)", border: "1px solid rgba(56,189,248,0.2)" }}
                    >
                      <span style={{ fontSize: "1.1rem" }}>🎓</span>
                    </div>
                    <div>
                      <p className="font-syne font-extrabold text-xs" style={{ color: "var(--text)" }}>
                        Politeknik Negeri Medan
                      </p>
                      <p className="text-[10px] font-semibold" style={{ color: "var(--text3)" }}>
                        Teknologi rekayasa perangkat lunak
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* ── BNI badge ── */}
                <motion.div
                  initial={{ opacity: 0, y: -16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4, duration: 0.6 }}
                  className="absolute -top-6 -left-8 px-4 py-3 rounded-2xl"
                  style={{
                    background:     "rgba(7,13,26,0.92)",
                    backdropFilter: "blur(20px)",
                    border:         "1px solid rgba(52,211,153,0.25)",
                    boxShadow:      "0 8px 32px rgba(0,0,0,0.3)",
                  }}
                >
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60" style={{ background: "#34d399" }} />
                      <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: "#34d399" }} />
                    </span>
                    <span className="font-syne font-bold text-[11px]" style={{ color: "#34d399" }}>
                      IT Support @ BNI
                    </span>
                  </div>
                </motion.div>

              </div>
            </motion.div>
          </div>
        </div>

        {/* ── Scroll indicator ───────────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span
            className="font-syne font-bold text-[0.6rem] uppercase tracking-[0.25em]"
            style={{ color: "var(--text3)" }}
          >
            Scroll
          </span>
          <div
            className="relative w-5 h-8 rounded-full flex justify-center pt-1.5"
            style={{ border: "1.5px solid rgba(56,189,248,0.25)" }}
          >
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-1.5 rounded-full"
              style={{ background: "var(--sky)" }}
            />
          </div>
        </motion.div>

      </section>
    </>
  );
}