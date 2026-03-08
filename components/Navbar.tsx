"use client";

import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Efek Glassmorphism saat scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Certificates", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav id="navbar" className={`fixed top-0 left-0 w-full z-[2000] transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md py-4 border-b border-white/5" : "bg-transparent py-6"
      }`}>
        <div className="container mx-auto px-6">
          <div className="nav-inner flex items-center justify-between">
            {/* Logo */}
            <a href="#hero" className="nav-logo text-2xl font-extrabold font-syne">
              HP<span className="text-sky">.</span>
            </a>

            {/* Desktop Links */}
            <ul className="nav-links hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-sm font-bold uppercase tracking-widest hover:text-sky transition-colors text-white/70">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Actions */}
            <div className="nav-actions flex items-center gap-4">
              <button id="theme-toggle" className="text-xl hover:scale-110 transition-transform">🌙</button>
              
              <a href="#contact" className="hidden sm:block px-6 py-2.5 bg-sky text-black text-xs font-extrabold rounded-full hover:shadow-[0_0_20px_rgba(56,189,248,0.4)] transition-all uppercase tracking-tighter">
                Hire Me
              </a>

              {/* Hamburger Button */}
              <button 
                id="hamburger" 
                className={`lg:hidden flex flex-col gap-1.5 z-[3001] ${isOpen ? 'active' : ''}`}
                onClick={toggleMenu}
              >
                <span className={`w-6 h-0.5 bg-white transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`w-6 h-0.5 bg-white transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
                <span className={`w-6 h-0.5 bg-white transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black/90 backdrop-blur-xl z-[2500] transition-all duration-500 lg:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              className="text-3xl font-syne font-extrabold hover:text-sky transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="mt-4 px-10 py-4 bg-sky text-black font-bold rounded-full"
            onClick={() => setIsOpen(false)}
          >
            LET'S TALK
          </a>
        </div>
      </div>
    </>
  );
}