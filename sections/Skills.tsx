"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skillCategories } from "@/data/skills";

// ── Level → accent color ──────────────────────────────────
const levelColor: Record<string, string> = {
  Beginner:     "#f59e0b",
  Intermediate: "#38BDF8",
  Advanced:     "#34d399",
};
const levelDot: Record<string, number> = {
  Beginner: 1, Intermediate: 2, Advanced: 3,
};

export default function Skills() {
  const [activeTab,  setActiveTab]  = useState(skillCategories[0]?.id ?? "programming");
  const [animateBar, setAnimateBar] = useState(false);
  const [hovered,    setHovered]    = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // Trigger on viewport enter
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

  // Stats for summary row
  const total     = skillCategories.reduce((s, c) => s + c.skills.length, 0);
  const advanced  = skillCategories.flatMap((c) => c.skills).filter((s) => s.level === "Advanced").length;
  const avgPct    = Math.round(
    skillCategories.flatMap((c) => c.skills).reduce((s, sk) => s + sk.percent, 0) /
    (skillCategories.flatMap((c) => c.skills).length || 1)
  );

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-28 relative overflow-hidden"
      style={{ background: "var(--bg2)" }}
    >
      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse 50% 55% at 80% 20%, rgba(56,189,248,0.05) 0%, transparent 65%)",
      }} />
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse 40% 40% at 10% 80%, rgba(167,139,250,0.04) 0%, transparent 60%)",
      }} />

      <div className="max-w-[1160px] mx-auto px-6 relative z-10">

        {/* ── Header ─────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="section-label mb-4">My Toolkit</div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <h2
              className="font-syne font-extrabold leading-[1.05]"
              style={{ fontSize: "clamp(2rem,4.5vw,3rem)", color: "var(--text)" }}
            >
              Skills &amp;{" "}
              <span style={{ color: "var(--sky)" }}>Technologies</span>
            </h2>
            <p className="max-w-sm text-sm leading-relaxed" style={{ color: "var(--text2)" }}>
              Kombinasi keahlian yang diasah melalui pendidikan, magang, dan proyek mandiri.
            </p>
          </div>
        </motion.div>

        {/* ── Stats bar ──────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-3 gap-4 mb-10"
        >
          {[
            { num: total,            label: "Total Skills",    color: "var(--sky)"   },
            { num: `${avgPct}%`,     label: "Avg Proficiency", color: "#a78bfa"      },
            { num: advanced,         label: "Advanced Level",  color: "#34d399"      },
          ].map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center py-4 rounded-2xl"
              style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
            >
              <span
                className="font-syne font-extrabold text-2xl"
                style={{ color: s.color }}
              >
                {s.num}
              </span>
              <span
                className="text-[10px] font-bold uppercase tracking-wider font-syne mt-0.5"
                style={{ color: "var(--text3)" }}
              >
                {s.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* ── Tab bar ────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-wrap gap-2 mb-10 p-2 rounded-2xl w-fit"
          style={{ background: "rgba(0,0,0,0.35)", border: "1px solid var(--border)" }}
        >
          {skillCategories.map((cat) => {
            const active = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => handleTab(cat.id)}
                className="relative px-5 py-2.5 rounded-xl font-syne font-bold text-sm transition-all duration-300"
                style={{ color: active ? "#000" : "var(--text2)", zIndex: 1 }}
              >
                {active && (
                  <motion.div
                    layoutId="skill-pill"
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
                      background: active ? "rgba(0,0,0,0.2)" : "var(--border)",
                      color:      active ? "#000" : "var(--text3)",
                    }}
                  >
                    {cat.skills.length}
                  </span>
                </span>
              </button>
            );
          })}
        </motion.div>

        {/* ── Skills grid ────────────────────────────── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {current?.skills.map((skill, idx) => {
              const color = levelColor[skill.level] ?? "var(--sky)";
              const dots  = levelDot[skill.level]  ?? 1;
              const isHov = hovered === idx;

              return (
                <motion.div
                  key={`${activeTab}-${idx}`}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.055, duration: 0.4 }}
                  onMouseEnter={() => setHovered(idx)}
                  onMouseLeave={() => setHovered(null)}
                  className="relative p-5 rounded-2xl overflow-hidden transition-all duration-300 group"
                  style={{
                    background:  "var(--surface)",
                    border:      isHov ? `1px solid ${color}44` : "1px solid var(--border)",
                    boxShadow:   isHov ? `0 12px 32px rgba(0,0,0,0.25), 0 0 20px ${color}12` : "none",
                    transform:   isHov ? "translateY(-3px)" : "translateY(0)",
                  }}
                >
                  {/* Subtle corner glow on hover */}
                  <div
                    className="absolute -top-8 -right-8 w-24 h-24 rounded-full pointer-events-none transition-opacity duration-300"
                    style={{
                      background: `radial-gradient(circle, ${color}18 0%, transparent 70%)`,
                      opacity:    isHov ? 1 : 0,
                    }}
                  />

                  {/* Top row: icon + name + percentage */}
                  <div className="flex items-start justify-between mb-4 relative z-10">
                    <div className="flex items-center gap-3">
                      {/* Icon box */}
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0 transition-all duration-500"
                        style={{
                          background: isHov ? `${color}22` : "rgba(255,255,255,0.05)",
                          border:     `1px solid ${isHov ? color + "33" : "var(--border)"}`,
                          filter:     isHov ? "none" : "grayscale(0.4)",
                        }}
                      >
                        {skill.icon}
                      </div>
                      <div>
                        <p
                          className="font-syne font-extrabold text-sm leading-tight"
                          style={{ color: "var(--text)" }}
                        >
                          {skill.name}
                        </p>
                        {/* Level dots */}
                        <div className="flex items-center gap-1 mt-1">
                          {[1, 2, 3].map((d) => (
                            <div
                              key={d}
                              className="w-1.5 h-1.5 rounded-full transition-all duration-300"
                              style={{
                                background: d <= dots ? color : "var(--border)",
                                boxShadow:  d <= dots && isHov ? `0 0 6px ${color}` : "none",
                              }}
                            />
                          ))}
                          <span
                            className="text-[10px] font-bold font-syne ml-1 uppercase tracking-wider"
                            style={{ color: isHov ? color : "var(--text3)" }}
                          >
                            {skill.level}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Percentage */}
                    <span
                      className="font-mono font-bold text-sm flex-shrink-0 transition-colors duration-300"
                      style={{ color: isHov ? color : "var(--text2)" }}
                    >
                      {skill.percent}%
                    </span>
                  </div>

                  {/* Progress bar */}
                  <div
                    className="h-1.5 w-full rounded-full overflow-hidden relative z-10"
                    style={{ background: "rgba(255,255,255,0.06)" }}
                  >
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: animateBar ? `${skill.percent}%` : 0 }}
                      transition={{
                        duration: 1.3,
                        ease:     [0.22, 1, 0.36, 1],
                        delay:    idx * 0.07,
                      }}
                      className="h-full rounded-full relative"
                      style={{
                        background: `linear-gradient(90deg, ${color}99, ${color})`,
                        boxShadow:  `0 0 10px ${color}66`,
                      }}
                    >
                      {/* Shimmer */}
                      <span className="absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-r from-transparent to-white/25 blur-sm" />
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}