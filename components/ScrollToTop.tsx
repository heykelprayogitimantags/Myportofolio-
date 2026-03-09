"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollUp = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          key="scroll-top"
          initial={{ opacity: 0, scale: 0.6, y: 16 }}
          animate={{ opacity: 1, scale: 1,   y: 0  }}
          exit={{    opacity: 0, scale: 0.6,  y: 16 }}
          transition={{ type: "spring", stiffness: 300, damping: 24 }}
          onClick={scrollUp}
          aria-label="Scroll to top"
          className="fixed bottom-8 right-8 z-[900] w-11 h-11 rounded-2xl flex items-center justify-center transition-all duration-300"
          style={{
            background:     "rgba(7,13,26,0.85)",
            backdropFilter: "blur(12px)",
            border:         "1px solid rgba(56,189,248,0.3)",
            color:          "var(--sky)",
            boxShadow:      "0 8px 24px rgba(0,0,0,0.3), 0 0 16px rgba(56,189,248,0.15)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background  = "linear-gradient(135deg,var(--sky-dark),var(--sky))";
            e.currentTarget.style.color       = "#000";
            e.currentTarget.style.borderColor = "transparent";
            e.currentTarget.style.transform   = "translateY(-3px)";
            e.currentTarget.style.boxShadow   = "0 12px 28px rgba(0,0,0,0.3), 0 0 24px var(--sky-glow)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background  = "rgba(7,13,26,0.85)";
            e.currentTarget.style.color       = "var(--sky)";
            e.currentTarget.style.borderColor = "rgba(56,189,248,0.3)";
            e.currentTarget.style.transform   = "translateY(0)";
            e.currentTarget.style.boxShadow   = "0 8px 24px rgba(0,0,0,0.3), 0 0 16px rgba(56,189,248,0.15)";
          }}
        >
          <ArrowUp size={17} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}