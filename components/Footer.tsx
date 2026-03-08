"use client";

import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { icon: "📁", url: "https://github.com/heykelpt", label: "GitHub" },
    { icon: "🔗", url: "https://linkedin.com/in/heykel", label: "LinkedIn" },
    { icon: "📧", url: "mailto:heykel.prayogi@student.polmed.ac.id", label: "Email" },
    { icon: "💬", url: "https://wa.me/6281234567890", label: "WhatsApp" },
  ];

  return (
    <footer className="footer bg-black/20 backdrop-blur-sm mt-20">
      <div className="max-w-[1160px] mx-auto px-6">
        <div className="footer-inner flex flex-col md:flex-row items-center justify-between py-10 gap-8">
          
          {/* Left: Logo + Copyright */}
          <div className="footer-left flex flex-col items-center md:items-start gap-2">
            <div className="footer-logo">
              HEYKEL<span>PRAYOGI.</span>
            </div>
            <p className="footer-copy">
              © {currentYear} — Crafted with React & Next.js
            </p>
          </div>

          {/* Center: Quick Nav Links */}
          <nav className="footer-links flex gap-6 md:gap-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href}>
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right: Social Icons */}
          <div className="footer-socials flex gap-3">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>

        </div>
      </div>
    </footer>
  );
}