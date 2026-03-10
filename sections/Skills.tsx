"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiHtml5, SiCss3,
  SiNodedotjs, SiExpress, SiMysql, SiFirebase, SiPhp,
  SiFlutter, SiDart, SiAndroid,
  SiGit, SiGithub, SiVisualstudiocode, SiFigma, SiLinux, SiDocker,
} from "react-icons/si";
import { skillCategories, type Skill } from "@/data/skills";

// ── Brand icon map ────────────────────────────────────────
const ICON_MAP: Record<string, React.ReactElement> = {
  react:      <SiReact />,
  nextjs:     <SiNextdotjs />,
  typescript: <SiTypescript />,
  tailwind:   <SiTailwindcss />,
  html:       <SiHtml5 />,
  css:        <SiCss3 />,
  nodejs:     <SiNodedotjs />,
  express:    <SiExpress />,
  mysql:      <SiMysql />,
  firebase:   <SiFirebase />,
  php:        <SiPhp />,
  flutter:    <SiFlutter />,
  dart:       <SiDart />,
  android:    <SiAndroid />,
  git:        <SiGit />,
  github:     <SiGithub />,
  vscode:     <SiVisualstudiocode />,
  figma:      <SiFigma />,
  linux:      <SiLinux />,
  docker:     <SiDocker />,
};

// ── Brand colors ──────────────────────────────────────────
const ICON_COLOR: Record<string, string> = {
  react:      "#61DAFB",
  nextjs:     "#ffffff",
  typescript: "#3178C6",
  tailwind:   "#06B6D4",
  html:       "#E34F26",
  css:        "#1572B6",
  nodejs:     "#339933",
  express:    "#aaaaaa",
  mysql:      "#4479A1",
  firebase:   "#FFCA28",
  php:        "#777BB4",
  flutter:    "#54C5F8",
  dart:       "#0175C2",
  android:    "#3DDC84",
  git:        "#F05032",
  github:     "#ffffff",
  vscode:     "#007ACC",
  figma:      "#F24E1E",
  linux:      "#FCC624",
  docker:     "#2496ED",
};

// ── Level config ──────────────────────────────────────────
const LEVEL_CFG = {
  Beginner:     { color: "#f59e0b", dots: 1, label: "Beginner"     },
  Intermediate: { color: "#38BDF8", dots: 2, label: "Intermediate" },
  Advanced:     { color: "#34d399", dots: 3, label: "Advanced"     },
};

// ── Skill Card ────────────────────────────────────────────
function SkillCard({ skill, idx, animateBar }: { skill: Skill; idx: number; animateBar: boolean }) {
  const [hov, setHov] = useState(false);
  const lvl   = LEVEL_CFG[skill.level];
  const iColor = ICON_COLOR[skill.iconKey] ?? "var(--sky)";
  const icon   = ICON_MAP[skill.iconKey];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: idx * 0.06, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className="relative p-5 rounded-2xl overflow-hidden transition-all duration-300"
      style={{
        background: hov ? `linear-gradient(135deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))` : "var(--surface)",
        border:     `1px solid ${hov ? iColor + "44" : "var(--border)"}`,
        boxShadow:  hov ? `0 16px 40px rgba(0,0,0,0.3), 0 0 24px ${iColor}12` : "none",
        transform:  hov ? "translateY(-4px)" : "translateY(0)",
      }}
    >
      {/* Corner glow */}
      <div
        className="absolute -top-10 -right-10 w-28 h-28 rounded-full pointer-events-none transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle, ${iColor}20 0%, transparent 70%)`,
          opacity:    hov ? 1 : 0,
        }}
      />

      <div className="relative z-10">
        {/* Icon + name row */}
        <div className="flex items-center gap-4 mb-5">
          {/* SVG Icon box */}
          <div
            className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-400"
            style={{
              background: hov ? `${iColor}1A` : "rgba(255,255,255,0.04)",
              border:     `1.5px solid ${hov ? iColor + "40" : "rgba(255,255,255,0.08)"}`,
              boxShadow:  hov ? `0 0 20px ${iColor}22` : "none",
              fontSize:   "1.5rem",
              color:      hov ? iColor : "rgba(255,255,255,0.5)",
            }}
          >
            {icon}
          </div>

          <div className="flex-1 min-w-0">
            <p
              className="font-syne font-extrabold text-sm truncate transition-colors duration-300"
              style={{ color: hov ? "var(--text)" : "var(--text)" }}
            >
              {skill.name}
            </p>
            {/* Level indicator */}
            <div className="flex items-center gap-1.5 mt-1.5">
              {[1, 2, 3].map((d) => (
                <div
                  key={d}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width:      d <= lvl.dots ? "14px" : "6px",
                    height:     "4px",
                    background: d <= lvl.dots ? (hov ? lvl.color : lvl.color + "99") : "var(--border)",
                    boxShadow:  d <= lvl.dots && hov ? `0 0 6px ${lvl.color}` : "none",
                  }}
                />
              ))}
              <span
                className="text-[9px] font-bold font-syne uppercase tracking-widest ml-0.5 transition-colors duration-300"
                style={{ color: hov ? lvl.color : "var(--text3)" }}
              >
                {lvl.label}
              </span>
            </div>
          </div>

          {/* Percentage */}
          <span
            className="font-mono font-bold text-sm flex-shrink-0 transition-all duration-300"
            style={{
              color:      hov ? iColor : "var(--text2)",
              textShadow: hov ? `0 0 12px ${iColor}66` : "none",
            }}
          >
            {skill.percent}%
          </span>
        </div>

        {/* Progress bar */}
        <div className="relative">
          {/* Track */}
          <div
            className="h-1.5 w-full rounded-full overflow-hidden"
            style={{ background: "rgba(255,255,255,0.06)" }}
          >
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: animateBar ? `${skill.percent}%` : 0 }}
              transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: idx * 0.07 }}
              className="h-full rounded-full relative"
              style={{
                background: hov
                  ? `linear-gradient(90deg, ${iColor}88, ${iColor})`
                  : `linear-gradient(90deg, ${lvl.color}66, ${lvl.color}cc)`,
                boxShadow: hov ? `0 0 12px ${iColor}66` : "none",
              }}
            >
              <span className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-r from-transparent to-white/30 blur-sm" />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ── Main Component ────────────────────────────────────────
export default function Skills() {
  const [activeTab,  setActiveTab]  = useState(skillCategories[0]?.id ?? "frontend");
  const [animateBar, setAnimateBar] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setAnimateBar(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  const handleTab = (id: string) => {
    if (id === activeTab) return;
    setAnimateBar(false);
    setActiveTab(id);
    setTimeout(() => setAnimateBar(true), 320);
  };

  const current = skillCategories.find((c) => c.id === activeTab);

  const allSkills  = skillCategories.flatMap((c) => c.skills);
  const total      = allSkills.length;
  const advanced   = allSkills.filter((s) => s.level === "Advanced").length;
  const avgPct     = Math.round(allSkills.reduce((s, sk) => s + sk.percent, 0) / (total || 1));

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-28 relative overflow-hidden"
      style={{ background: "var(--bg2)" }}
    >
      {/* Ambient */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse 55% 50% at 85% 15%, rgba(56,189,248,0.05) 0%, transparent 65%)",
      }} />
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse 40% 40% at 5% 85%, rgba(167,139,250,0.04) 0%, transparent 60%)",
      }} />

      <div className="max-w-[1160px] mx-auto px-6 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="section-label mb-4">My Toolkit</div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5">
            <h2
              className="font-syne font-extrabold leading-[1.05]"
              style={{ fontSize: "clamp(2rem,4.5vw,3rem)", color: "var(--text)" }}
            >
              Skills &amp;{" "}
              <span style={{ color: "var(--sky)" }}>Technologies</span>
            </h2>
            <p className="max-w-sm text-sm leading-relaxed" style={{ color: "var(--text2)" }}>
              Keahlian yang diasah melalui pendidikan, magang, dan proyek mandiri.
            </p>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-3 gap-3 mb-8"
        >
          {[
            { num: total,        label: "Total Skills",     color: "var(--sky)"  },
            { num: `${avgPct}%`, label: "Avg Proficiency",  color: "#a78bfa"     },
            { num: advanced,     label: "Advanced Level",   color: "#34d399"     },
          ].map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center py-4 rounded-2xl"
              style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
            >
              <span className="font-syne font-extrabold text-2xl" style={{ color: s.color }}>
                {s.num}
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider font-syne mt-0.5" style={{ color: "var(--text3)" }}>
                {s.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Tab bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-wrap gap-2 mb-8 p-1.5 rounded-2xl w-fit"
          style={{ background: "rgba(0,0,0,0.4)", border: "1px solid var(--border)" }}
        >
          {skillCategories.map((cat) => {
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => handleTab(cat.id)}
                className="relative px-5 py-2 rounded-xl font-syne font-bold text-sm transition-all duration-200"
                style={{ color: isActive ? "#000" : "var(--text2)", zIndex: 1 }}
              >
                {isActive && (
                  <motion.div
                    layoutId="skill-tab-pill"
                    className="absolute inset-0 rounded-xl"
                    style={{
                      background: "linear-gradient(135deg, var(--sky-dark), var(--sky))",
                      boxShadow:  "0 0 20px var(--sky-glow)",
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  {cat.label}
                  <span
                    className="px-1.5 py-0.5 rounded-md text-[9px] font-bold"
                    style={{
                      background: isActive ? "rgba(0,0,0,0.25)" : "var(--border)",
                      color:      isActive ? "#000" : "var(--text3)",
                    }}
                  >
                    {cat.skills.length}
                  </span>
                </span>
              </button>
            );
          })}
        </motion.div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {current?.skills.map((skill, idx) => (
              <SkillCard
                key={`${activeTab}-${skill.name}`}
                skill={skill}
                idx={idx}
                animateBar={animateBar}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex items-center gap-6 mt-10 pt-8"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <span className="text-[10px] font-bold uppercase tracking-wider font-syne" style={{ color: "var(--text3)" }}>
            Level:
          </span>
          {Object.entries(LEVEL_CFG).map(([key, cfg]) => (
            <div key={key} className="flex items-center gap-2">
              <div className="flex gap-1">
                {[1, 2, 3].map((d) => (
                  <div
                    key={d}
                    className="rounded-full"
                    style={{
                      width:      d <= cfg.dots ? "10px" : "5px",
                      height:     "3px",
                      background: d <= cfg.dots ? cfg.color : "var(--border)",
                    }}
                  />
                ))}
              </div>
              <span className="text-[10px] font-bold font-syne" style={{ color: cfg.color }}>
                {cfg.label}
              </span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}