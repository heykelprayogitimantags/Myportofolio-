"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowRight, Github } from "lucide-react";

const projectsData = [
  {
    id: 1,
    title: "PolCare — Lost & Found",
    category: "Mobile",
    desc: "Aplikasi mobile layanan barang hilang di Polmed. Mengintegrasikan Firebase untuk real-time database dan CNN untuk pencocokan gambar otomatis .",
    image: "/images/polcare.png",     
    accent: "#38BDF8",
    github: "https://github.com/heykel/polcare",
    demo: "#",
    tags: ["Flutter", "Firebase", "CNN"],
    status: "In Development",
  },
  {
    id: 2,
    title: "Es Dongan | E-Commerce Minuman & Makanan",
    category: "Web",
    desc: "Sistem Manajemen Pemeliharaan Perangkat untuk BNI KCP KIM Mabar 2. Memudahkan monitoring aset hardware secara digital dan real-time.",
    image: "/images/projects/simperas.png",
    accent: "#0EA5E9",
    github: "#",
    demo: "#",
    tags: ["React", "Node.js", "MySQL"],
    status: "Internal",
  },
  {
    id: 3,
    title: "Nangin Beauty E-commerce",
    category: "Web",
    desc: "Platform e-commerce modern dengan Next.js yang dioptimasi untuk SEO dan performa load yang sangat cepat. Dilengkapi admin dashboard.",
    image: "/images/projects/nangin.png",
    accent: "#a78bfa",
    github: "https://github.com/heykel/nangin-beauty",
    demo: "https://nangin-beauty.vercel.app",
    tags: ["Next.js", "Tailwind", "Stripe"],
    status: "Live",
  },
  {
    id: 4,
    title: "Nexa Assistant — WA Bot",
    category: "AI",
    desc: "WhatsApp Bot produktivitas yang ditenagai Groq API untuk memproses perintah berbasis bahasa alami (LLM). Mendukung multi-command.",
    image: "/images/projects/nexa.png",
    accent: "#34d399",
    github: "https://github.com/heykel/nexa-bot",
    demo: "#",
    tags: ["Node.js", "Groq API", "WA-Web.js"],
    status: "Open Source",
  },
];

const categories = ["All", "Web", "Mobile", "AI"];

const statusColor: Record<string, string> = {
  "Live":           "#34d399",
  "In Development": "#f59e0b",
  "Internal":       "#7A9BB5",
  "Open Source":    "#a78bfa",
};

// ── Gradient placeholder saat gambar belum ada ────────────
const placeholderGradients: Record<string, string> = {
  "#38BDF8": "linear-gradient(135deg, #0C1528 0%, #0C2A3A 50%, #0EA5E9 100%)",
  "#0EA5E9": "linear-gradient(135deg, #0C1528 0%, #0A1E2E 50%, #0369A1 100%)",
  "#a78bfa": "linear-gradient(135deg, #1a0533 0%, #2D1B4E 50%, #7C3AED 100%)",
  "#34d399": "linear-gradient(135deg, #0c2010 0%, #134020 50%, #059669 100%)",
};

export default function Projects() {
  const [filter, setFilter]       = useState("All");
  const [hovered, setHovered]     = useState<number | null>(null);

  const filtered =
    filter === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-28 relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 55% 40% at 90% 60%, rgba(56,189,248,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-[1160px] mx-auto px-6 relative z-10">

        {/* ── Header ───────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="section-label mb-4">Portfolio</div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <h2
              className="font-syne font-extrabold leading-[1.05]"
              style={{ fontSize: "clamp(2rem,4.5vw,3rem)", color: "var(--text)" }}
            >
              Featured{" "}
              <span style={{ color: "var(--sky)" }}>Projects</span>
            </h2>
            <p
              className="max-w-sm text-sm leading-relaxed"
              style={{ color: "var(--text2)" }}
            >
              Karya terpilih mencakup Web, Mobile App, hingga implementasi
              Artificial Intelligence.
            </p>
          </div>
        </motion.div>

        {/* ── Filter tabs ───────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-12"
        >
          {categories.map((cat) => {
            const active = filter === cat;
            return (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className="px-5 py-2.5 rounded-full font-syne font-bold text-xs uppercase tracking-[0.08em] transition-all duration-300"
                style={{
                  background:  active ? "var(--sky)"     : "var(--surface)",
                  color:       active ? "#000"            : "var(--text2)",
                  border:      active ? "1.5px solid var(--sky)" : "1.5px solid var(--border)",
                  boxShadow:   active ? "0 0 20px var(--sky-glow)" : "none",
                  transform:   active ? "scale(1.04)"    : "scale(1)",
                }}
              >
                {cat}
                <span
                  className="ml-2 px-1.5 py-0.5 rounded-md text-[9px]"
                  style={{
                    background: active ? "rgba(0,0,0,0.2)" : "var(--border)",
                    color:      active ? "#000" : "var(--text3)",
                  }}
                >
                  {cat === "All"
                    ? projectsData.length
                    : projectsData.filter((p) => p.category === cat).length}
                </span>
              </button>
            );
          })}
        </motion.div>

        {/* ── Project grid ──────────────────────────────── */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.article
                layout
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                onMouseEnter={() => setHovered(project.id)}
                onMouseLeave={() => setHovered(null)}
                className="group flex flex-col rounded-3xl overflow-hidden transition-all duration-300"
                style={{
                  background:  "var(--surface)",
                  border:      hovered === project.id
                    ? `1px solid ${project.accent}55`
                    : "1px solid var(--border)",
                  boxShadow:   hovered === project.id
                    ? `0 20px 60px rgba(0,0,0,0.35), 0 0 30px ${project.accent}18`
                    : "0 4px 24px rgba(0,0,0,0.2)",
                  transform:   hovered === project.id ? "translateY(-6px)" : "translateY(0)",
                }}
              >
                {/* ── Thumbnail ─────────────────────────── */}
                <div className="relative h-52 overflow-hidden flex-shrink-0">
                  {/* Gradient placeholder (tampil saat image belum ada) */}
                  <div
                    className="absolute inset-0"
                    style={{ background: placeholderGradients[project.accent] }}
                  />

                  {/*
                    Screenshot preview
                    Taruh file di: public/images/projects/[nama].png
                    Kalau belum ada, placeholder gradient otomatis tampil.
                  */}
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    onError={(e) => {
                      // Sembunyikan gambar jika tidak ditemukan, tampilkan placeholder
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />

                  {/* Gradient overlay bawah */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(7,13,26,0.7) 0%, transparent 50%)",
                    }}
                  />

                  {/* Status badge */}
                  <div className="absolute top-3 left-3">
                    <span
                      className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold font-syne backdrop-blur-sm"
                      style={{
                        background: "rgba(7,13,26,0.75)",
                        border:     `1px solid ${statusColor[project.status]}44`,
                        color:      statusColor[project.status],
                      }}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ background: statusColor[project.status] }}
                      />
                      {project.status}
                    </span>
                  </div>

                  {/* Category badge */}
                  <div className="absolute top-3 right-3">
                    <span
                      className="px-2.5 py-1 rounded-full text-[10px] font-bold font-syne backdrop-blur-sm"
                      style={{
                        background: "rgba(7,13,26,0.75)",
                        border:     "1px solid var(--border)",
                        color:      "var(--text2)",
                      }}
                    >
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* ── Body ──────────────────────────────── */}
                <div className="flex flex-col flex-1 p-6">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-md text-[10px] font-bold font-syne"
                        style={{
                          background: `${project.accent}15`,
                          border:     `1px solid ${project.accent}30`,
                          color:      project.accent,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3
                    className="font-syne font-extrabold text-lg mb-2 leading-tight transition-colors duration-300"
                    style={{
                      color: hovered === project.id ? project.accent : "var(--text)",
                    }}
                  >
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-sm leading-relaxed flex-1"
                    style={{ color: "var(--text2)" }}
                  >
                    {project.desc}
                  </p>

                  {/* ── Action buttons ─────────────────── */}
                  <div
                    className="flex items-center justify-between mt-5 pt-5"
                    style={{ borderTop: "1px solid var(--border)" }}
                  >
                    {/* Live Demo */}
                    <a
                      href={project.demo}
                      target={project.demo !== "#" ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 font-syne font-bold text-xs transition-all duration-300"
                      style={{
                        color:   project.demo !== "#" ? project.accent : "var(--text3)",
                        cursor:  project.demo !== "#" ? "pointer" : "not-allowed",
                        opacity: project.demo !== "#" ? 1 : 0.4,
                      }}
                      onClick={(e) => project.demo === "#" && e.preventDefault()}
                    >
                      <ExternalLink size={13} />
                      Live Demo
                    </a>

                    {/* Details / GitHub */}
                    <a
                      href={project.github}
                      target={project.github !== "#" ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-full font-syne font-bold text-xs transition-all duration-300"
                      style={{
                        background: "var(--surface2)",
                        border:     "1px solid var(--border)",
                        color:      "var(--text)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = project.accent;
                        e.currentTarget.style.color       = project.accent;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "var(--border)";
                        e.currentTarget.style.color       = "var(--text)";
                      }}
                    >
                      {project.github !== "#" ? (
                        <><Github size={12} /> GitHub</>
                      ) : (
                        <>Details <ArrowRight size={12} /></>
                      )}
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* ── View all CTA ──────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mt-14"
        >
          <a
            href="https://github.com/heykelprayogitimantags"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-syne font-bold text-sm px-8 py-3.5 rounded-full transition-all duration-300"
            style={{
              background: "var(--surface)",
              border:     "1.5px solid var(--border)",
              color:      "var(--text2)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--sky)";
              e.currentTarget.style.color       = "var(--sky)";
              e.currentTarget.style.transform   = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border)";
              e.currentTarget.style.color       = "var(--text2)";
              e.currentTarget.style.transform   = "translateY(0)";
            }}
          >
            <Github size={16} />
            Lihat Semua di GitHub
            <ArrowRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}