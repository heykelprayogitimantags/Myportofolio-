"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const timelineData = [
  {
    year: "2026 – Sekarang",
    title: "IT Support Intern",
    company: "PT Bank Negara Indonesia (BNI) — KCP KIM Mabar 2",
    desc: "Maintenance hardware, troubleshooting sistem operasional, dan mendukung infrastruktur IT cabang perbankan.",
    color: "#38BDF8",
  },
  {
    year: "2025",
    title: "Fullstack Developer — Project Based",
    company: "Freelance / Independent",
    desc: "Mengembangkan Simperas & Nangin Beauty E-commerce dari desain hingga deployment.",
    color: "#a78bfa",
  },
  {
    year: "2023 – Sekarang",
    title: "Mahasiswa Teknik Komputer",
    company: "Politeknik Negeri Medan (Polmed)",
    desc: "Fokus pada rekayasa perangkat lunak, jaringan komputer, dan pengembangan aplikasi modern.",
    color: "#34d399",
  },
];

const stats = [
  { num: "1+",  label: "Tahun Pengalaman" },
  { num: "10+", label: "Proyek Selesai"   },
  { num: "5+",  label: "Tech Stack"       },
];

// Framer Motion variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.12 } },
};

export default function About() {
  return (
    <section id="about" className="py-28 relative overflow-hidden">
      {/* Subtle background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 60% at 10% 50%, rgba(56,189,248,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-[1160px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-center">

          {/* ══ LEFT — Photo + stats ══════════════════════════ */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
            className="flex flex-col items-center lg:items-start gap-6"
          >
            {/* Photo card */}
            <motion.div variants={fadeUp} className="relative w-full max-w-[400px]">

              {/* Decorative border frame */}
              <div
                className="absolute -top-3 -left-3 w-full h-full rounded-3xl pointer-events-none"
                style={{ border: "1.5px solid rgba(56,189,248,0.2)", borderRadius: "24px" }}
              />
              <div
                className="absolute -bottom-3 -right-3 w-full h-full rounded-3xl pointer-events-none"
                style={{ border: "1.5px solid rgba(167,139,250,0.15)", borderRadius: "24px" }}
              />

              {/* Photo container */}
              <div
                className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden"
                style={{
                  border:     "1px solid rgba(56,189,248,0.25)",
                  boxShadow:  "0 24px 60px rgba(0,0,0,0.35), 0 0 40px rgba(56,189,248,0.06)",
                }}
              >
                <Image
                  src="/images/heykel.jpeg"
                  alt="Heykel Prayogi Timanta"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 400px"
                  priority
                />

                {/* Gradient overlay bawah */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(7,13,26,0.55) 0%, transparent 45%)",
                  }}
                />

                {/* Name tag di dalam foto */}
                <div
                  className="absolute bottom-5 left-5 right-5"
                >
                  <div
                    className="inline-flex flex-col px-4 py-3 rounded-2xl"
                    style={{
                      background:     "rgba(7,13,26,0.75)",
                      backdropFilter: "blur(12px)",
                      border:         "1px solid rgba(56,189,248,0.2)",
                    }}
                  >
                    <span
                      className="font-syne font-extrabold text-base leading-tight"
                      style={{ color: "var(--text)" }}
                    >
                      Heykel Prayogi Timanta
                    </span>
                    <span
                      className="text-xs font-bold mt-0.5"
                      style={{ color: "var(--sky)" }}
                    >
                      Web & Mobile Developer
                    </span>
                  </div>
                </div>
              </div>

              {/* Availability badge — pojok kanan atas */}
              <div
                className="absolute -top-4 -right-4 flex items-center gap-2 px-3 py-2 rounded-full text-xs font-bold font-syne"
                style={{
                  background:     "rgba(7,13,26,0.9)",
                  backdropFilter: "blur(12px)",
                  border:         "1px solid rgba(56,189,248,0.3)",
                  color:          "var(--sky)",
                }}
              >
                <span
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{
                    background: "#34d399",
                    boxShadow:  "0 0 6px #34d399",
                    animation:  "pulse 2s infinite",
                  }}
                />
                Open to Work
              </div>
            </motion.div>

            {/* Stats row */}
            <motion.div
              variants={fadeUp}
              className="flex gap-6 w-full max-w-[400px]"
            >
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="flex-1 flex flex-col items-center py-4 rounded-2xl"
                  style={{
                    background: "var(--surface)",
                    border:     "1px solid var(--border)",
                  }}
                >
                  <span
                    className="font-syne font-extrabold text-2xl"
                    style={{ color: "var(--sky)" }}
                  >
                    {s.num}
                  </span>
                  <span
                    className="text-[0.65rem] font-bold uppercase tracking-wider text-center mt-0.5 leading-tight"
                    style={{ color: "var(--text2)" }}
                  >
                    {s.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ══ RIGHT — Text + Timeline ═══════════════════════ */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
          >
            {/* Section label */}
            <motion.div variants={fadeUp} className="section-label mb-4">
              About Me
            </motion.div>

            {/* Heading */}
            <motion.h2
              variants={fadeUp}
              className="font-syne font-extrabold mb-6 leading-[1.1]"
              style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", color: "var(--text)" }}
            >
              Membangun Solusi Digital{" "}
              <span style={{ color: "var(--sky)" }}>yang Bermakna</span>
            </motion.h2>

            {/* Description */}
            <motion.div variants={fadeUp} className="space-y-4 mb-10">
              <p
                className="text-base leading-[1.85]"
                style={{ color: "var(--text2)" }}
              >
                Halo! Saya <strong style={{ color: "var(--text)" }}>Heykel Prayogi Timanta</strong>,
                mahasiswa Teknik Komputer di Politeknik Negeri Medan yang passionate dalam membangun
                aplikasi web dan mobile yang modern, cepat, dan berdampak nyata.
              </p>
              <p
                className="text-base leading-[1.85]"
                style={{ color: "var(--text2)" }}
              >
                Pengalaman magang di <strong style={{ color: "var(--text)" }}>PT Bank Negara Indonesia (BNI)</strong> mengasah
                ketelitian saya dalam pemeliharaan infrastruktur IT dan troubleshooting sistem.
                Saya percaya kode yang baik bukan hanya yang berfungsi — tapi juga yang mudah
                dibaca, di-maintain, dan memberi pengalaman pengguna terbaik.
              </p>
              <p
                className="text-base leading-[1.85]"
                style={{ color: "var(--text2)" }}
              >
                Saat tidak coding, saya aktif mengeksplorasi teknologi terbaru di bidang
                fullstack development, UI/UX, dan IT security.
              </p>
            </motion.div>

            {/* Soft skills chips */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-2 mb-10">
              {["Problem Solver", "Team Player", "Fast Learner", "Detail Oriented", "UI/UX Minded"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-full text-xs font-bold font-syne"
                  style={{
                    background: "var(--surface)",
                    border:     "1px solid var(--border)",
                    color:      "var(--text2)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* Timeline */}
            <motion.div variants={fadeUp}>
              <div
                className="text-xs font-bold uppercase tracking-[0.15em] mb-5 font-syne"
                style={{ color: "var(--text3)" }}
              >
                Career Timeline
              </div>
              <div className="relative flex flex-col gap-0">
                {/* Vertical line */}
                <div
                  className="absolute left-[7px] top-3 bottom-3 w-[1px]"
                  style={{
                    background:
                      "linear-gradient(to bottom, var(--sky), rgba(167,139,250,0.5), transparent)",
                  }}
                />

                {timelineData.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.12, duration: 0.5 }}
                    className="flex gap-5 pb-7 last:pb-0"
                  >
                    {/* Dot */}
                    <div className="flex flex-col items-center flex-shrink-0 mt-1">
                      <div
                        className="w-4 h-4 rounded-full flex-shrink-0 flex items-center justify-center"
                        style={{
                          background: `${item.color}22`,
                          border:     `2px solid ${item.color}`,
                          boxShadow:  `0 0 10px ${item.color}55`,
                        }}
                      >
                        <div
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ background: item.color }}
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div
                      className="flex-1 p-4 rounded-2xl transition-all duration-300 group"
                      style={{
                        background: "var(--surface)",
                        border:     "1px solid var(--border)",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.borderColor = `${item.color}44`)
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.borderColor = "var(--border)")
                      }
                    >
                      <div
                        className="text-[0.7rem] font-bold uppercase tracking-[0.1em] mb-1 font-syne"
                        style={{ color: item.color }}
                      >
                        {item.year}
                      </div>
                      <div
                        className="font-syne font-bold text-sm mb-1"
                        style={{ color: "var(--text)" }}
                      >
                        {item.title}
                      </div>
                      <div
                        className="text-xs font-semibold mb-2"
                        style={{ color: "var(--text2)" }}
                      >
                        {item.company}
                      </div>
                      <p className="text-xs leading-relaxed" style={{ color: "var(--text3)" }}>
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}