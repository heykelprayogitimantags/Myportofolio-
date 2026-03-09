"use client";

import React from "react";
import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";

const navLinks = [
  { name: "About",        href: "#about"        },
  { name: "Projects",     href: "#projects"     },
  { name: "Experience",   href: "#experience"   },
  { name: "Certificates", href: "#certificates" },
  { name: "Contact",      href: "#contact"      },
];

const socialLinks = [
  { icon: Github,        href: "https://github.com/heykelpt",                          label: "GitHub"    },
  { icon: Linkedin,      href: "https://linkedin.com/in/heykel",                       label: "LinkedIn"  },
  { icon: Mail,          href: "mailto:heykel.prayogi@student.polmed.ac.id",           label: "Email"     },
  { icon: MessageCircle, href: "https://wa.me/6281234567890",                          label: "WhatsApp"  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      {/* Top accent line */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-[1px]"
        style={{
          background: "linear-gradient(90deg, transparent, var(--sky), transparent)",
        }}
      />

      <div className="max-w-[1160px] mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Left — name + copy */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <a
              href="#hero"
              className="font-syne font-extrabold text-lg tracking-tight"
              style={{ color: "var(--text)" }}
            >
              hykl<span style={{ color: "var(--sky)" }}>.</span>
            </a>
            <p className="text-xs" style={{ color: "var(--text3)" }}>
              © {year} Heykel Prayogi Timanta G.s
            </p>
          </div>

          {/* Center — nav links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-bold font-syne uppercase tracking-wider transition-colors duration-200"
                style={{ color: "var(--text3)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text3)")}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right — social icons */}
          <div className="flex items-center gap-2">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200"
                style={{
                  background: "var(--surface)",
                  border:     "1px solid var(--border)",
                  color:      "var(--text3)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(56,189,248,0.4)";
                  e.currentTarget.style.color       = "var(--sky)";
                  e.currentTarget.style.transform   = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.color       = "var(--text3)";
                  e.currentTarget.style.transform   = "translateY(0)";
                }}
              >
                <s.icon size={15} />
              </a>
            ))}
          </div>

        </div>
      </div>
    </footer>
  );
} 