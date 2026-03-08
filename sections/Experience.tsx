"use client";

import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    id: 1,
    period: "Januari 2026 - Sekarang",
    type: "Internship",
    title: "IT Support Intern",
    company: "PT Bank Negara Indonesia (Persero) Tbk - KCP KIM Mabar 2",
    desc: "Bertanggung jawab dalam pemeliharaan hardware dan software operasional perbankan. Mengembangkan sistem manajemen pemeliharaan (Simperas) untuk efisiensi pelaporan aset IT dan monitoring perangkat secara real-time.",
    tags: ["Hardware Troubleshooting", "Network Maintenance", "Simperas System"]
  },
  {
    id: 2,
    period: "2023 - Sekarang",
    type: "Education",
    title: "Mahasiswa Teknik Komputer",
    company: "Politeknik Negeri Medan (Polmed)",
    desc: "Mendalami fundamental computer science, algoritma, dan pengembangan aplikasi. Aktif mengembangkan solusi berbasis teknologi untuk kebutuhan kampus.",
    tags: ["Computer Science", "Algorithms", "Software Engineering"]
  },
  {
    id: 3,
    period: "2025",
    type: "Personal Project",
    title: "Fullstack Web Developer",
    company: "Nangin Beauty E-commerce",
    desc: "Membangun platform e-commerce modern menggunakan Next.js. Mengimplementasikan fitur manajemen produk yang kompleks, integrasi payment gateway, dan optimasi SEO.",
    tags: ["Next.js", "Tailwind CSS", "E-commerce"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden" style={{ background: "var(--bg2)" }}>
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-syne font-extrabold italic tracking-tight mb-4">
            Work & <span className="text-sky">Education</span>
          </h2>
          <div className="w-20 h-1.5 bg-sky mx-auto rounded-full"></div>
        </motion.div>

        <div className="exp-timeline max-w-4xl mx-auto relative">
          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="exp-item relative pl-12 pb-16 last:pb-0"
            >
              {/* Dot Indikator dengan Efek Glow */}
              <div className="exp-dot absolute left-[-9px] top-1.5 w-[18px] h-[18px] rounded-full bg-sky shadow-[0_0_15px_rgba(56,189,248,0.6)] z-10 border-4 border-[#0a0a0a]"></div>

              {/* Konten Utama */}
              <div className="exp-content group bg-white/5 p-8 rounded-3xl border border-white/5 hover:border-sky/30 transition-all duration-300">
                <div className="exp-meta flex flex-wrap gap-3 items-center mb-4">
                  <span className="exp-period bg-sky/10 text-sky px-4 py-1 rounded-full text-[11px] font-bold uppercase tracking-widest border border-sky/20">
                    {exp.period}
                  </span>
                  <span className="exp-type text-gray-500 text-[11px] font-bold uppercase tracking-widest">
                    {exp.type}
                  </span>
                </div>

                <h3 className="exp-title font-syne font-bold text-2xl mb-1 group-hover:text-sky transition-colors">
                  {exp.title}
                </h3>
                <div className="exp-company text-gray-400 font-medium mb-4 italic">
                  {exp.company}
                </div>
                
                <p className="exp-desc text-gray-400 leading-relaxed text-sm mb-6">
                  {exp.desc}
                </p>

                {/* Tags Skill */}
                <div className="exp-tags flex flex-wrap gap-2">
                  {exp.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="exp-tag bg-white/5 border border-white/10 px-3 py-1 rounded-lg text-[10px] font-bold text-gray-400 group-hover:border-sky/20 group-hover:text-sky/80 transition-all">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}

          {/* Garis Vertikal Timeline (Background) */}
          <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-sky via-sky/20 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default Experience;