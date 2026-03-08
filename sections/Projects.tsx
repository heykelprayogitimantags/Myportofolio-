"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projectsData = [
  {
    id: 1,
    title: "PolCare - Lost & Found",
    category: "Mobile",
    desc: "Aplikasi mobile layanan barang hilang di Polmed. Mengintegrasikan Firebase untuk real-time database dan CNN untuk pencocokan gambar.",
    icon: "🔍",
    github: "https://github.com/heykel/polcare",
    demo: "#",
    tags: ["Flutter", "Firebase", "CNN"]
  },
  {
    id: 2,
    title: "Simperas BNI",
    category: "Web",
    desc: "Sistem Manajemen Pemeliharaan Perangkat untuk BNI KCP KIM Mabar 2. Memudahkan monitoring aset hardware secara digital.",
    icon: "🏦",
    github: "#",
    demo: "#",
    tags: ["React", "Node.js", "MySQL"]
  },
  {
    id: 3,
    title: "Nangin Beauty E-commerce",
    category: "Web",
    desc: "Platform e-commerce modern dengan Next.js yang dioptimasi untuk SEO dan performa load yang sangat cepat.",
    icon: "💄",
    github: "https://github.com/heykel/nangin-beauty",
    demo: "https://nangin-beauty.vercel.app",
    tags: ["Next.js", "Tailwind", "Stripe"]
  },
  {
    id: 4,
    title: "Nexa Assistant (WA Bot)",
    category: "AI",
    desc: "WhatsApp Bot produktivitas yang ditenagai Groq API untuk memproses perintah berbasis bahasa alami (LLM).",
    icon: "🤖",
    github: "https://github.com/heykel/nexa-bot",
    demo: "#",
    tags: ["Node.js", "Groq API", "WA-Web.js"]
  }
];

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Web', 'Mobile', 'AI'];

  const filteredProjects = filter === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 bg-[#0a0a0a] overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-syne font-extrabold italic mb-4">
            Featured <span className="text-sky">Projects</span>
          </h2>
          <p className="text-gray-500 max-w-xl">
            Beberapa karya terpilih yang mencakup pengembangan Web, Mobile App, 
            hingga implementasi Artificial Intelligence.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="proj-filters flex flex-wrap gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-3 rounded-full font-syne font-bold text-xs uppercase tracking-widest transition-all duration-300 border ${
                filter === cat 
                ? 'bg-sky text-black border-sky shadow-[0_0_20px_rgba(56,189,248,0.3)]' 
                : 'bg-transparent text-gray-500 border-white/10 hover:border-sky/50 hover:text-sky'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid dengan AnimatePresence */}
        <motion.div 
          layout
          className="proj-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="proj-card group bg-[#111] border border-white/5 rounded-[2.5rem] overflow-hidden hover:border-sky/30 transition-colors"
              >
                {/* Thumbnail Area */}
                <div className="proj-thumb relative h-64 overflow-hidden">
                  <div className="proj-thumb-bg absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] flex items-center justify-center">
                    <span className="proj-thumb-icon text-7xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                      {project.icon}
                    </span>
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="proj-overlay absolute inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <a href={project.github} className="px-6 py-3 border border-white/20 rounded-full font-bold text-xs hover:bg-white hover:text-black transition-all">GitHub</a>
                    <a href={project.demo} className="px-6 py-3 bg-sky text-black rounded-full font-bold text-xs hover:shadow-[0_0_20px_rgba(56,189,248,0.5)] transition-all">Live Demo</a>
                  </div>
                </div>

                {/* Body Area */}
                <div className="proj-body p-10">
                  <div className="proj-cats flex gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-sky/10 border border-sky/20 rounded-lg text-[9px] text-sky font-bold uppercase tracking-tighter">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="proj-title font-syne font-bold text-2xl mb-4 group-hover:text-sky transition-colors">
                    {project.title}
                  </h3>
                  <p className="proj-desc text-gray-400 text-sm leading-relaxed">
                    {project.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;