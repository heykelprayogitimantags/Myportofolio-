"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const certs = [
  {
    id: 1,
    name: "Cybersecurity Essentials",
    issuer: "CISCO Networking Academy",
    year: "2025",
    icon: "🛡️",
    desc: "Mempelajari dasar-dasar keamanan siber, ancaman jaringan, hingga teknik mitigasi serangan pada infrastruktur IT.",
    credentialId: "ID-123456",
    link: "https://cisco.com/verify"
  },
  {
    id: 2,
    name: "Mobile App Development with Flutter",
    issuer: "Google Developers",
    year: "2024",
    icon: "📱",
    desc: "Sertifikasi dalam membangun aplikasi lintas platform (Android/iOS) menggunakan framework Flutter dan integrasi Firebase.",
    credentialId: "CERT-FL-789",
    link: "#"
  },
  {
    id: 3,
    name: "Web Development Bootcamp",
    issuer: "Dicoding Indonesia",
    year: "2024",
    icon: "💻",
    desc: "Penguasaan teknologi frontend modern seperti React, Tailwind, dan integrasi API untuk aplikasi web yang responsif.",
    credentialId: "DIC-WEB-001",
    link: "https://dicoding.com/verify"
  }
];

const Certifications = () => {
  const [activeCert, setActiveCert] = useState<typeof certs[0] | null>(null);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveCert(null);
    };
    window.addEventListener('keydown', handleEsc);
    
    // Lock scroll when modal is open
    if (activeCert) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';

    return () => window.removeEventListener('keydown', handleEsc);
  }, [activeCert]);

  return (
    <section id="certificates" className="py-24 relative">
      <div className="container mx-auto px-6">
        <h2 className="font-syne font-extrabold text-4xl mb-12 italic">Certifications</h2>
        
        <div className="cert-grid">
          {certs.map((cert) => (
            <motion.div 
              whileHover={{ y: -5 }}
              key={cert.id} 
              className="cert-card bg-[#111] border border-[#222] rounded-3xl p-8 cursor-pointer relative overflow-hidden group" 
              onClick={() => setActiveCert(cert)}
            >
              <div className="cert-icon text-4xl mb-4 transition-transform group-hover:scale-110 duration-300">
                {cert.icon}
              </div>
              <div className="cert-issuer text-sky font-bold text-xs uppercase tracking-widest mb-2">
                {cert.issuer}
              </div>
              <h3 className="cert-name font-syne font-bold text-xl mb-4 leading-tight">
                {cert.name}
              </h3>
              <div className="cert-year text-gray-500 text-sm font-medium">
                Issued {cert.year}
              </div>
              
              <div className="cert-view absolute bottom-8 right-8 text-sky text-xs font-bold uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                View Details <span>→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal Section dengan AnimatePresence */}
      <AnimatePresence>
        {activeCert && (
          <div className="fixed inset-0 z-[3000] flex items-center justify-center p-6">
            {/* Overlay */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveCert(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />
            
            {/* Modal Box */}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="modal-box relative z-10 bg-[#111] border border-white/10 p-10 rounded-[2rem] max-w-lg w-full shadow-2xl"
            >
              <button 
                className="modal-close absolute top-6 right-6 text-2xl hover:text-sky transition-colors"
                onClick={() => setActiveCert(null)}
              >
                ✕
              </button>
              
              <div className="modal-icon text-6xl mb-6 drop-shadow-[0_0_15px_rgba(56,189,248,0.4)]">
                {activeCert.icon}
              </div>
              <h2 id="modal-title" className="font-syne font-extrabold text-3xl mb-2">
                {activeCert.name}
              </h2>
              <div id="modal-issuer" className="text-sky font-bold mb-6 italic text-lg">
                {activeCert.issuer}
              </div>
              <p id="modal-desc" className="text-gray-400 leading-relaxed mb-8">
                {activeCert.desc}
              </p>
              
              <div className="modal-meta flex justify-between border-t border-white/5 pt-8 mb-8">
                <div className="modal-meta-item">
                  <div className="lbl text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-1">Issued Date</div>
                  <div className="val font-syne font-bold">{activeCert.year}</div>
                </div>
                <div className="modal-meta-item">
                  <div className="lbl text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-1">Credential ID</div>
                  <div className="val font-syne font-bold">{activeCert.credentialId}</div>
                </div>
              </div>

              <a 
                href={activeCert.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block w-full text-center bg-sky text-black font-extrabold py-4 rounded-xl hover:shadow-[0_0_20px_rgba(56,189,248,0.4)] transition-all"
              >
                VERIFY CREDENTIAL
              </a>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certifications;