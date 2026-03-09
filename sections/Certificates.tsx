"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Shield, X } from "lucide-react";


const certs = [
  {
    id: 1, 
    name: "Certified Developer",
    issuer: "Alibaba Cloud",
    issuerShort: "Alibaba",
    year: "2024", 
    icon: "☁️", 
    image: "/images/alibaba.png",
    issuerLogo: "/images/issuers/alibaba.png",
    issuerColor: "#FF6A00", 
    desc: "Berhasil mengembangkan aplikasi menggunakan layanan Alibaba Cloud dan mencapai kompetensi sebagai Certified Developer.",
    credentialId: "ACCD0119700100009779",
    link: "https://certification.alibabacloud.com/verify", 
    category: "Cloud Computing",
  },
  {
    id: 2,
      name: "Junior Web Developer",
      issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
      issuerShort: "BNSP",
      year: "2026",
      icon: "🌐",
      image: "/images/bnsp.jpeg",
      issuerLogo: "/images/issuers/bnsp.png",
      issuerColor: "#CC0000", //
      desc: "Sertifikasi kompetensi nasional dalam bidang Pengembangan Website (Web Development) yang diterbitkan oleh LSP Teknologi Digital melalui program Vocational School Graduate Academy (VSGA).",
      credentialId: "62090 2513 3 0168630 2026",
      link: "https://bnsp.go.id", 
      category: "Web Development",
  },
  {
   id: 3, 
    name: "Belajar Dasar AI",
    issuer: "Dicoding Indonesia",
    issuerShort: "Dicoding",
    year: "2025",
    icon: "🤖",
    image: "/images/aidasar.png",
    issuerLogo: "/images/issuers/dicoding.png",
    issuerColor: "#2D3E50", // 
    desc: "Mempelajari konsep dasar kecerdasan buatan (AI), sejarah perkembangan AI, serta pemahaman tentang Machine Learning dan Deep Learning sebagai pilar utama teknologi masa depan.",
    credentialId: "MRZM68VGKPYQ",
    link: "https://www.dicoding.com/certificates/MRZM68VGKPYQ",
    category: "Artificial Intelligence",
  },
];

// Gradient placeholder per issuer (tampil jika image belum ada)
const placeholders: Record<string, string> = {
  Cisco:    "linear-gradient(135deg,#0C1A2E,#1BA0D7)",
  Google:   "linear-gradient(135deg,#0C1528,#4285F4)",
  Dicoding: "linear-gradient(135deg,#0C1528,#38BDF8)",
};

type Cert = typeof certs[0];

export default function Certifications() {
  const [active, setActive] = useState<Cert | null>(null);

  // ESC close + scroll lock
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setActive(null); };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = active ? "hidden" : "";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <section id="certificates" className="py-28 relative overflow-hidden">
      {/* BG glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 55% 45% at 80% 30%, rgba(56,189,248,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-[1160px] mx-auto px-6 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="section-label mb-4">Recognition</div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h2
              className="font-syne font-extrabold leading-[1.05]"
              style={{ fontSize: "clamp(2rem,4.5vw,3rem)", color: "var(--text)" }}
            >
              My <span style={{ color: "var(--sky)" }}>Certifications</span>
            </h2>
            <p className="text-sm" style={{ color: "var(--text2)" }}>
              {certs.length} sertifikat diterbitkan
            </p>
          </div>
        </motion.div>

        {/* ── Card Grid ──────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certs.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              onClick={() => setActive(cert)}
              className="group cursor-pointer rounded-3xl overflow-hidden flex flex-col transition-all duration-300"
              style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform   = "translateY(-6px)";
                e.currentTarget.style.borderColor = `${cert.issuerColor}44`;
                e.currentTarget.style.boxShadow   = `0 20px 50px rgba(0,0,0,0.3), 0 0 24px ${cert.issuerColor}18`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform   = "translateY(0)";
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.boxShadow   = "none";
              }}
            >
              {/* ── Certificate image ─────────────────── */}
              <div className="relative h-48 overflow-hidden flex-shrink-0">
                {/* Gradient placeholder */}
                <div
                  className="absolute inset-0"
                  style={{ background: placeholders[cert.issuerShort] || placeholders.Dicoding }}
                />

                {/* Actual cert image */}
                <Image
                  src={cert.image}
                  alt={cert.name}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />

                {/* Dark gradient overlay */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: "linear-gradient(to top, rgba(7,13,26,0.65) 0%, transparent 50%)",
                  }}
                />

                {/* Category badge — top left */}
                <div className="absolute top-3 left-3">
                  <span
                    className="px-2.5 py-1 rounded-full text-[10px] font-bold font-syne backdrop-blur-sm"
                    style={{
                      background: "rgba(7,13,26,0.75)",
                      border:     `1px solid ${cert.issuerColor}44`,
                      color:      cert.issuerColor,
                    }}
                  >
                    {cert.category}
                  </span>
                </div>

                {/* Emoji icon — center (placeholder mode) */}
                <div
                  className="absolute inset-0 flex items-center justify-center pointer-events-none"
                  style={{ opacity: 0.35 }}
                >
                  <span className="text-6xl">{cert.icon}</span>
                </div>

                {/* "Click to view" hint */}
                <div
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "rgba(7,13,26,0.5)", backdropFilter: "blur(2px)" }}
                >
                  <span
                    className="px-4 py-2 rounded-full font-syne font-bold text-xs"
                    style={{
                      background: "rgba(56,189,248,0.15)",
                      border:     "1px solid rgba(56,189,248,0.4)",
                      color:      "var(--sky)",
                    }}
                  >
                    Lihat Detail →
                  </span>
                </div>
              </div>

              {/* ── Card body ─────────────────────────── */}
              <div className="flex flex-col flex-1 p-5">

                {/* Issuer row dengan logo */}
                <div className="flex items-center gap-2.5 mb-3">
                  {/* Issuer logo */}
                  <div
                    className="w-7 h-7 rounded-lg overflow-hidden flex items-center justify-center flex-shrink-0"
                    style={{ background: `${cert.issuerColor}20`, border: `1px solid ${cert.issuerColor}30` }}
                  >
                    <Image
                      src={cert.issuerLogo}
                      alt={cert.issuer}
                      width={20}
                      height={20}
                      className="object-contain"
                      onError={(e) => {
                        // Fallback: tampilkan inisial
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) {
                          (e.target as HTMLImageElement).style.display = "none";
                          parent.innerHTML = `<span style="font-size:10px;font-weight:800;color:${cert.issuerColor}">${cert.issuerShort[0]}</span>`;
                        }
                      }}
                    />
                  </div>
                  <span
                    className="text-[11px] font-bold font-syne uppercase tracking-wider"
                    style={{ color: cert.issuerColor }}
                  >
                    {cert.issuer}
                  </span>
                </div>

                {/* Cert name */}
                <h3
                  className="font-syne font-extrabold text-base leading-snug mb-1 flex-1 transition-colors duration-300"
                  style={{ color: "var(--text)" }}
                >
                  {cert.name}
                </h3>

                {/* Year + verify link */}
                <div
                  className="flex items-center justify-between mt-4 pt-4"
                  style={{ borderTop: "1px solid var(--border)" }}
                >
                  <span className="text-xs font-bold" style={{ color: "var(--text3)" }}>
                    Issued {cert.year}
                  </span>
                  {cert.link !== "#" && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1 text-[10px] font-bold font-syne uppercase tracking-wider transition-colors duration-200"
                      style={{ color: "var(--text3)" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = cert.issuerColor)}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text3)")}
                    >
                      <Shield size={10} />
                      Verify
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ══ MODAL ════════════════════════════════════════ */}
      <AnimatePresence>
        {active && (
          <div className="fixed inset-0 z-[3000] flex items-center justify-center p-5">
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="absolute inset-0"
              style={{ background: "rgba(0,0,0,0.75)", backdropFilter: "blur(10px)" }}
              onClick={() => setActive(null)}
            />

            {/* Modal box */}
            <motion.div
              key="modal"
              initial={{ opacity: 0, scale: 0.93, y: 24 }}
              animate={{ opacity: 1, scale: 1,    y: 0  }}
              exit={{    opacity: 0, scale: 0.95,  y: 16 }}
              transition={{ type: "spring", stiffness: 320, damping: 28 }}
              className="relative z-10 w-[min(540px,94vw)] rounded-3xl overflow-hidden"
              style={{ background: "var(--bg2)", border: "1px solid var(--border)" }}
            >
              {/* Modal cert image */}
              <div className="relative h-52 overflow-hidden">
                <div
                  className="absolute inset-0"
                  style={{ background: placeholders[active.issuerShort] || placeholders.Dicoding }}
                />
                <Image
                  src={active.image}
                  alt={active.name}
                  fill
                  className="object-cover object-top"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(to top, var(--bg2) 0%, transparent 55%)",
                  }}
                />
                {/* Close button */}
                <button
                  onClick={() => setActive(null)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200"
                  style={{
                    background: "rgba(7,13,26,0.8)",
                    border:     "1px solid var(--border)",
                    color:      "var(--text2)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  <X size={14} />
                </button>
              </div>

              {/* Modal content */}
              <div className="px-8 pb-8 -mt-6 relative z-10">
                {/* Issuer */}
                <div className="flex items-center gap-2 mb-3">
                  <div
                    className="w-8 h-8 rounded-xl overflow-hidden flex items-center justify-center flex-shrink-0"
                    style={{ background: `${active.issuerColor}25`, border: `1px solid ${active.issuerColor}40` }}
                  >
                    <Image
                      src={active.issuerLogo}
                      alt={active.issuer}
                      width={22}
                      height={22}
                      className="object-contain"
                      onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                    />
                  </div>
                  <span
                    className="text-xs font-bold font-syne uppercase tracking-wider"
                    style={{ color: active.issuerColor }}
                  >
                    {active.issuer}
                  </span>
                </div>

                {/* Title */}
                <h2
                  className="font-syne font-extrabold text-2xl mb-4 leading-tight"
                  style={{ color: "var(--text)" }}
                >
                  {active.name}
                </h2>

                {/* Description */}
                <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text2)" }}>
                  {active.desc}
                </p>

                {/* Meta */}
                <div
                  className="flex gap-8 mb-6 pt-5"
                  style={{ borderTop: "1px solid var(--border)" }}
                >
                  <div>
                    <p className="text-[10px] uppercase tracking-wider font-bold font-syne mb-1" style={{ color: "var(--text3)" }}>
                      Issued
                    </p>
                    <p className="font-syne font-bold text-sm" style={{ color: "var(--text)" }}>
                      {active.year}
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider font-bold font-syne mb-1" style={{ color: "var(--text3)" }}>
                      Credential ID
                    </p>
                    <p className="font-mono font-bold text-sm" style={{ color: "var(--text)" }}>
                      {active.credentialId}
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider font-bold font-syne mb-1" style={{ color: "var(--text3)" }}>
                      Category
                    </p>
                    <p className="font-syne font-bold text-sm" style={{ color: active.issuerColor }}>
                      {active.category}
                    </p>
                  </div>
                </div>

                {/* CTA button */}
                <a
                  href={active.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl font-syne font-bold text-sm transition-all duration-300"
                  style={
                    active.link !== "#"
                      ? {
                          background: `linear-gradient(135deg, ${active.issuerColor}cc, ${active.issuerColor})`,
                          color:      "#000",
                          boxShadow:  `0 0 24px ${active.issuerColor}44`,
                        }
                      : {
                          background: "var(--surface)",
                          border:     "1px solid var(--border)",
                          color:      "var(--text3)",
                          cursor:     "not-allowed",
                        }
                  }
                  onClick={(e) => active.link === "#" && e.preventDefault()}
                >
                  <ExternalLink size={15} />
                  {active.link !== "#" ? "Verify Credential" : "Credential Not Available"}
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}