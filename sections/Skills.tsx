"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skillCategories } from "@/data/skills";

export default function Skills() {
  const [activeTab, setActiveTab] = useState(skillCategories[0]?.id || "programming");
  const [animateBar, setAnimateBar] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Intersection Observer — trigger animasi saat section masuk viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimateBar(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const currentCategory = skillCategories.find((cat) => cat.id === activeTab);

  const handleTabChange = (id: string) => {
    if (id === activeTab) return;
    setAnimateBar(false);
    setActiveTab(id);
    setTimeout(() => setAnimateBar(true), 400);
  };

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
      style={{ background: "var(--bg2)" }}
    >
      <div className="max-w-[1160px] mx-auto px-6 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">My Toolkit</div>
          <h2 className="font-syne font-extrabold text-4xl md:text-5xl mb-6">
            Skills &amp; <span style={{ color: "var(--sky)" }}>Technologies</span>
          </h2>
          <p className="max-w-2xl mb-12" style={{ color: "var(--text2)" }}>
            Kombinasi keahlian teknis yang saya asah melalui pendidikan, pengalaman
            magang, serta pengembangan proyek mandiri.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-3 mb-12 p-2 rounded-2xl w-fit"
          style={{ background: "rgba(0,0,0,0.4)", border: "1px solid var(--border)" }}
        >
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleTabChange(cat.id)}
              className="px-6 py-3 rounded-xl font-syne font-bold text-sm transition-all duration-500"
              style={
                activeTab === cat.id
                  ? {
                      background: "var(--sky)",
                      color: "#000",
                      boxShadow: "0 0 25px rgba(56,189,248,0.4)",
                      transform: "scale(1.05)",
                    }
                  : { color: "var(--text2)" }
              }
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {currentCategory?.skills.map((skill, idx) => (
              <div
                key={`${activeTab}-${idx}`}
                className="p-6 rounded-2xl transition-all duration-300 group"
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderColor = "rgba(56,189,248,0.3)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderColor = "var(--border)")
                }
              >
                {/* Card Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <span className="text-3xl transition-all duration-500 grayscale group-hover:grayscale-0 group-hover:scale-110">
                      {skill.icon}
                    </span>
                    <div>
                      <h3 className="font-syne font-bold text-lg leading-tight"
                        style={{ color: "var(--text)" }}
                      >
                        {skill.name}
                      </h3>
                      <span
                        className="text-[10px] font-bold uppercase tracking-wider"
                        style={{ color: "var(--sky)", opacity: 0.7 }}
                      >
                        {skill.level}
                      </span>
                    </div>
                  </div>
                  <span
                    className="text-sm font-mono"
                    style={{ color: "var(--text2)" }}
                  >
                    {skill.percent}%
                  </span>
                </div>

                {/* Progress Bar */}
                <div
                  className="h-1.5 w-full rounded-full overflow-hidden"
                  style={{ background: "rgba(255,255,255,0.08)" }}
                >
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: animateBar ? `${skill.percent}%` : 0 }}
                    transition={{
                      duration: 1.4,
                      ease: [0.22, 1, 0.36, 1],
                      delay: idx * 0.08,
                    }}
                    className="h-full relative"
                    style={{
                      background: "linear-gradient(90deg, var(--sky-dark), var(--sky))",
                      boxShadow: "0 0 15px rgba(56,189,248,0.5)",
                    }}
                  >
                    {/* Shimmer di ujung bar */}
                    <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-r from-transparent to-white/20 blur-sm" />
                  </motion.div>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}``