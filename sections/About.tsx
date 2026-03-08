"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
// Import ikon media sosial
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";

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

const socials = [
  { 
    icon: FaGithub, 
    label: "GitHub", 
    url: "https://github.com/heykelprayogitimantags/",
    color: "#38BDF8" 
  },
  { 
    icon: FaLinkedin, 
    label: "LinkedIn", 
    url: "https://www.linkedin.com/in/heykelprayogitimanta/", 
    color: "#0077B5" 
  },
  { 
    icon: FaInstagram, 
    label: "Instagram", 
    url: "https://instagram.com/hykl.gtg.s", 
    color: "#E4405F" 
  },
  { 
    icon: FaWhatsapp, 
    label: "WhatsApp", 
    url: "https://wa.me/6287822274814", 
    color: "#25D366" 
  },
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

          {/* ══ LEFT — Photo + Socials ══════════════════════════ */}
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
                <div className="absolute bottom-5 left-5 right-5">
                  <div
                    className="inline-flex flex-col px-4 py-3 rounded-2xl"
                    style={{
                      background:     "rgba(7,13,26,0.75)",
                      backdropFilter: "blur(12px)",
                      border:         "1px solid rgba(56,189,248,0.2)",
                    }}
                  >
                    <span className="font-syne font-extrabold text-base leading-tight text-white">
                      Heykel Prayogi Timanta
                    </span>
                    <span className="text-xs font-bold mt-0.5 text-sky-400">
                      Web & Mobile Developer
                    </span>
                  </div>
                </div>
              </div>

              {/* Availability badge */}
              <div
                className="absolute -top-4 -right-4 flex items-center gap-2 px-3 py-2 rounded-full text-xs font-bold font-syne text-sky-400"
                style={{
                  background:     "rgba(7,13,26,0.9)",
                  backdropFilter: "blur(12px)",
                  border:         "1px solid rgba(56,189,248,0.3)",
                }}
              >
                <span
                  className="w-2 h-2 rounded-full flex-shrink-0 bg-green-400"
                  style={{
                    boxShadow:  "0 0 6px #34d399",
                    animation:  "pulse 2s infinite",
                  }}
                />
                Open to Work
              </div>
            </motion.div>

            {/* Socials row (Pengganti Stats) */}
            <motion.div
              variants={fadeUp}
              className="flex gap-4 w-full max-w-[400px]"
            >
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex flex-col items-center py-5 rounded-2xl transition-all duration-300 group hover:-translate-y-1"
                    style={{
                      background: "rgba(30, 41, 59, 0.5)",
                      border:     "1px solid rgba(255,255,255,0.05)",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.borderColor = social.color)}
                    onMouseLeave={(e) => (e.currentTarget.style.borderColor = "transparent")}
                  >
                    <Icon className="text-2xl mb-2 transition-colors duration-300 group-hover:text-white" style={{ color: social.color }} />
                    <span className="text-[0.6rem] font-bold uppercase tracking-widest text-gray-400 group-hover:text-gray-200">
                      {social.label}
                    </span>
                  </a>
                );
              })}
            </motion.div>
          </motion.div>

          {/* ══ RIGHT — Text + Timeline ═══════════════════════ */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="text-sky-400 font-bold uppercase tracking-widest text-sm mb-4">
              About Me
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="font-syne font-extrabold mb-6 leading-[1.1] text-white"
              style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)" }}
            >
              Membangun Solusi Digital{" "}
              <span className="text-sky-400">yang Bermakna</span>
            </motion.h2>

            <motion.div variants={fadeUp} className="space-y-4 mb-10 text-gray-400">
              <p className="text-base leading-[1.85]">
                Halo! Saya <strong className="text-white">Heykel Prayogi Timanta</strong>, 
                mahasiswa Teknik Komputer di <strong className="text-white">Politeknik Negeri Medan</strong> yang passionate dalam membangun aplikasi web dan mobile modern.
              </p>
              <p className="text-base leading-[1.85]">
                Pengalaman magang saya sebagai <strong className="text-white">IT Support</strong> di <strong className="text-white">PT Bank Negara Indonesia (Persero) Tbk.</strong> mengasah ketelitian saya dalam maintenance hardware dan troubleshooting sistem.
              </p>
            </motion.div>

            {/* Soft skills chips */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-2 mb-10">
              {["Problem Solver", "Team Player", "Fast Learner", "Detail Oriented", "Prompt Engineer"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-full text-xs font-bold font-syne bg-slate-800/50 border border-slate-700 text-gray-400"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* Timeline */}
            <motion.div variants={fadeUp}>
              <div className="text-xs font-bold uppercase tracking-[0.15em] mb-5 font-syne text-gray-500">
                Career Timeline
              </div>
              <div className="relative flex flex-col gap-0">
                <div
                  className="absolute left-[7px] top-3 bottom-3 w-[1px]"
                  style={{
                    background: "linear-gradient(to bottom, #38BDF8, rgba(167,139,250,0.5), transparent)",
                  }}
                />

                {timelineData.map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex gap-5 pb-7 last:pb-0"
                  >
                    <div className="flex flex-col items-center flex-shrink-0 mt-1">
                      <div
                        className="w-4 h-4 rounded-full flex items-center justify-center border-2"
                        style={{ borderColor: item.color, background: `${item.color}22` }}
                      >
                        <div className="w-1.5 h-1.5 rounded-full" style={{ background: item.color }} />
                      </div>
                    </div>

                    <div className="flex-1 p-4 rounded-2xl bg-slate-800/30 border border-slate-700/50 hover:border-slate-500 transition-colors">
                      <div className="text-[0.7rem] font-bold uppercase mb-1" style={{ color: item.color }}>
                        {item.year}
                      </div>
                      <div className="font-bold text-sm mb-1 text-white">
                        {item.title}
                      </div>
                      <div className="text-xs font-semibold mb-2 text-gray-400">
                        {item.company}
                      </div>
                      <p className="text-xs leading-relaxed text-gray-500">
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