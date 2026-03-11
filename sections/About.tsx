"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Download } from "lucide-react";

// ── Data ──────────────────────────────────────────────────
const socials = [
  { icon: FaGithub,    label: "GitHub",    url: "https://github.com/heykelprayogitimantags", color: "#e2e8f0" },
  { icon: FaLinkedin,  label: "LinkedIn",  url: "https://linkedin.com/in/heykelprayogitimanta", color: "#0A66C2" },
  { icon: FaInstagram, label: "Instagram", url: "https://instagram.com/hykl.gtg.s",          color: "#E4405F" },
  { icon: FaWhatsapp,  label: "WhatsApp",  url: "https://wa.me/6287822274814",                color: "#25D366" },
];

const traits = ["Problem Solver", "Team Player", "Fast Learner", "Detail Oriented", "Prompt Engineer"];

const timeline = [
  {
    year:    "2026 – Sekarang",
    title:   "IT Support Intern",
    company: "PT Bank Negara Indonesia (BNI) — KCP KIM Mabar 2",
    desc:    "Maintenance hardware, troubleshooting sistem operasional, dan mendukung infrastruktur IT cabang perbankan.",
    color:   "#38BDF8",
  },
  {
    year:    "2025",
    title:   "Fullstack Developer — Project Based",
    company: "Freelance / Independent",
    desc:    "Mengembangkan Simperas & E-commerce | Es Dongan dari desain hingga deployment penuh.",
    color:   "#a78bfa",
  },
  {
    year:    "2023 – Sekarang",
    title:   "Mahasiswa Teknologi Rekayasa perangkat Lunak",
    company: "Politeknik Negeri Medan (Polmed)",
    desc:    "Fokus pada rekayasa perangkat lunak, jaringan komputer, dan pengembangan aplikasi modern.",
    color:   "#34d399",
  },
];

// ── Variants ──────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.11 } } };

export default function About() {
  return (
    <section id="about" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse 55% 65% at 8% 50%, rgba(56,189,248,0.04) 0%, transparent 70%)",
      }} />

      <div className="max-w-[1160px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-center">

          {/* ══ LEFT — Photo ══════════════════════════════ */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
            className="flex flex-col items-center lg:items-start gap-5"
          >
            {/* Photo card */}
            <motion.div variants={fadeUp} className="relative w-full max-w-[400px]">

              {/* Frame decorations */}
              <div className="absolute -top-3 -left-3 w-full h-full pointer-events-none"
                style={{ border: "1.5px solid rgba(56,189,248,0.18)", borderRadius: "26px" }} />
              <div className="absolute -bottom-3 -right-3 w-full h-full pointer-events-none"
                style={{ border: "1.5px solid rgba(167,139,250,0.13)", borderRadius: "26px" }} />

              {/* Photo */}
              <div
                className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden"
                style={{
                  border:    "1px solid rgba(56,189,248,0.22)",
                  boxShadow: "0 28px 64px rgba(0,0,0,0.38), 0 0 44px rgba(56,189,248,0.06)",
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
                {/* Bottom gradient */}
                <div className="absolute inset-0 pointer-events-none"
                  style={{ background: "linear-gradient(to top, rgba(7,13,26,0.72) 0%, transparent 48%)" }} />

                {/* Name tag */}
                <div className="absolute bottom-5 left-5 right-5">
                  <div
                    className="inline-flex flex-col px-4 py-3 rounded-2xl w-full"
                    style={{
                      background:     "rgba(7,13,26,0.78)",
                      backdropFilter: "blur(14px)",
                      border:         "1px solid rgba(56,189,248,0.18)",
                    }}
                  >
                    <span className="font-syne font-extrabold text-sm leading-tight" style={{ color: "var(--text)" }}>
                      Heykel Prayogi Timanta
                    </span>
                    <span className="text-[11px] font-bold mt-0.5" style={{ color: "var(--sky)" }}>
                      Web & Mobile Developer
                    </span>
                  </div>
                </div>

                {/* Floating experience badge — top left of photo */}
                <div
                  className="absolute top-4 left-4 flex flex-col items-center px-3 py-2 rounded-2xl"
                  style={{
                    background:     "rgba(7,13,26,0.82)",
                    backdropFilter: "blur(12px)",
                    border:         "1px solid rgba(56,189,248,0.2)",
                  }}
                >
                  <span className="font-syne font-extrabold text-lg leading-none" style={{ color: "var(--sky)" }}>1+</span>
                  <span className="text-[9px] font-bold uppercase tracking-wider mt-0.5" style={{ color: "var(--text3)" }}>
                    Tahun Exp
                  </span>
                </div>
              </div>

              {/* Open to Work badge */}
              <div
                className="absolute -top-4 -right-4 flex items-center gap-2 px-3 py-2 rounded-full text-xs font-bold font-syne"
                style={{
                  background:     "rgba(7,13,26,0.92)",
                  backdropFilter: "blur(14px)",
                  border:         "1px solid rgba(56,189,248,0.28)",
                  color:          "var(--sky)",
                  boxShadow:      "0 4px 20px rgba(0,0,0,0.3)",
                }}
              >
                <span className="relative flex h-2 w-2 flex-shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-70"
                    style={{ background: "#34d399" }} />
                  <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: "#34d399" }} />
                </span>
                Open to Work
              </div>
            </motion.div>

            {/* Social icons row */}
            <motion.div variants={fadeUp} className="flex gap-3 w-full max-w-[400px]">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex flex-col items-center py-4 rounded-2xl transition-all duration-300 group"
                  style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = s.color + "55";
                    e.currentTarget.style.background  = s.color + "12";
                    e.currentTarget.style.transform   = "translateY(-3px)";
                    e.currentTarget.style.boxShadow   = `0 8px 24px rgba(0,0,0,0.2)`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--border)";
                    e.currentTarget.style.background  = "var(--surface)";
                    e.currentTarget.style.transform   = "translateY(0)";
                    e.currentTarget.style.boxShadow   = "none";
                  }}
                >
                  <s.icon
                    size={20}
                    className="mb-1.5 transition-all duration-300"
                    style={{ color: s.color }}
                  />
                  <span className="text-[9px] font-bold uppercase tracking-widest font-syne"
                    style={{ color: "var(--text3)" }}>
                    {s.label}
                  </span>
                </a>
              ))}
            </motion.div>

            {/* Download CV button */}
            <motion.div variants={fadeUp} className="w-full max-w-[400px]">
              <a
                href="/cv-heykel.pdf"
                download
                className="flex items-center justify-center gap-2.5 w-full py-3.5 rounded-2xl font-syne font-bold text-sm transition-all duration-300"
                style={{
                  background: "var(--surface)",
                  border:     "1.5px solid var(--border)",
                  color:      "var(--text2)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--sky)";
                  e.currentTarget.style.color       = "var(--sky)";
                  e.currentTarget.style.background  = "var(--sky-dim)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.color       = "var(--text2)";
                  e.currentTarget.style.background  = "var(--surface)";
                }}
              >
                <Download size={15} />
                Download CV
              </a>
            </motion.div>
          </motion.div>

          {/* ══ RIGHT — Text + Timeline ════════════════════ */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
          >
            {/* Label */}
            <motion.div variants={fadeUp} className="section-label mb-4">
              About Me
            </motion.div>

            {/* Heading */}
            <motion.h2
              variants={fadeUp}
              className="font-syne font-extrabold mb-6 leading-[1.08]"
              style={{ fontSize: "clamp(1.9rem, 4vw, 2.8rem)", color: "var(--text)" }}
            >
              Membangun Solusi Digital{" "}
              <span style={{ color: "var(--sky)" }}>yang Bermakna</span>
            </motion.h2>

            {/* Description */}
            <motion.div variants={fadeUp} className="space-y-3.5 mb-8">
              <p className="text-[0.95rem] leading-[1.85]" style={{ color: "var(--text2)" }}>
                Halo! Saya{" "}
                <strong style={{ color: "var(--text)", fontWeight: 700 }}>Heykel Prayogi Timanta</strong>,
                mahasiswa Teknik Komputer di{" "}
                <strong style={{ color: "var(--text)" }}>Politeknik Negeri Medan</strong>{" "}
                yang passionate dalam membangun aplikasi web dan mobile yang modern, cepat, dan berdampak nyata.
              </p>
              <p className="text-[0.95rem] leading-[1.85]" style={{ color: "var(--text2)" }}>
                Pengalaman magang sebagai{" "}
                <strong style={{ color: "var(--text)" }}>IT Support</strong> di{" "}
                <strong style={{ color: "var(--text)" }}>PT Bank Negara Indonesia (BNI)</strong>{" "}
                mengasah ketelitian saya dalam pemeliharaan hardware, troubleshooting, dan efisiensi sistem operasional.
              </p>
            </motion.div>

            {/* Traits chips */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-2 mb-10">
              {traits.map((tag) => (
                <span
                  key={tag}
                  className="px-3.5 py-1.5 rounded-full text-[11px] font-bold font-syne transition-all duration-200 cursor-default"
                  style={{
                    background: "var(--surface)",
                    border:     "1px solid var(--border)",
                    color:      "var(--text2)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(56,189,248,0.35)";
                    e.currentTarget.style.color       = "var(--text)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--border)";
                    e.currentTarget.style.color       = "var(--text2)";
                  }}
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* Timeline */}
            <motion.div variants={fadeUp}>
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] mb-5 font-syne"
                style={{ color: "var(--text3)" }}>
                Career Timeline
              </p>

              <div className="relative flex flex-col pl-7">
                {/* Vertical line */}
                <div
                  className="absolute left-[7px] top-2 bottom-2 w-[1.5px] rounded-full"
                  style={{
                    background: "linear-gradient(to bottom, var(--sky), rgba(167,139,250,0.5), transparent)",
                  }}
                />

                {timeline.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.12, duration: 0.5 }}
                    className="relative flex gap-0 pb-6 last:pb-0"
                  >
                    {/* Dot */}
                    <div
                      className="absolute -left-7 mt-[5px] w-[15px] h-[15px] rounded-full flex items-center justify-center flex-shrink-0"
                      style={{
                        background: `${item.color}20`,
                        border:     `2px solid ${item.color}`,
                        boxShadow:  `0 0 10px ${item.color}55`,
                      }}
                    >
                      <div className="w-[5px] h-[5px] rounded-full" style={{ background: item.color }} />
                    </div>

                    {/* Card */}
                    <div
                      className="flex-1 p-4 rounded-2xl transition-all duration-300 group cursor-default"
                      style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
                      onMouseEnter={(e) => (e.currentTarget.style.borderColor = `${item.color}40`)}
                      onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
                    >
                      <span
                        className="inline-block text-[10px] font-bold uppercase tracking-wider font-syne mb-1.5 px-2 py-0.5 rounded-full"
                        style={{
                          background: `${item.color}15`,
                          border:     `1px solid ${item.color}30`,
                          color:      item.color,
                        }}
                      >
                        {item.year}
                      </span>
                      <p className="font-syne font-extrabold text-sm mb-0.5 leading-tight" style={{ color: "var(--text)" }}>
                        {item.title}
                      </p>
                      <p className="text-[11px] font-semibold mb-2" style={{ color: item.color, opacity: 0.85 }}>
                        {item.company}
                      </p>
                      <p className="text-[11px] leading-relaxed" style={{ color: "var(--text3)" }}>
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