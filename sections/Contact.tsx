"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail, Github, Linkedin, MessageCircle,
  MapPin, Clock, Send, CheckCircle, Loader2,
} from "lucide-react";

// ── Ganti dengan info kamu ────────────────────────────────
const INFO = {
  email:    "heykel.prayogi@student.polmed.ac.id",
  whatsapp: "https://wa.me/6281234567890",
  github:   "https://github.com/heykelpt",
  linkedin: "https://linkedin.com/in/heykel",
  location: "Medan, Sumatera Utara",
  timezone: "WIB (UTC+7)",
};
// ─────────────────────────────────────────────────────────

const socialLinks = [
  {
    icon:    Mail,
    label:   "Email",
    value:   INFO.email,
    href:    `mailto:${INFO.email}`,
    color:   "#f59e0b",
    bg:      "rgba(245,158,11,0.1)",
    border:  "rgba(245,158,11,0.2)",
  },
  {
    icon:    Github,
    label:   "GitHub",
    value:   "@heykelpt",
    href:    INFO.github,
    color:   "#e2e8f0",
    bg:      "rgba(226,232,240,0.08)",
    border:  "rgba(226,232,240,0.12)",
  },
  {
    icon:    Linkedin,
    label:   "LinkedIn",
    value:   "Heykel Prayogi Timanta",
    href:    INFO.linkedin,
    color:   "#38BDF8",
    bg:      "rgba(56,189,248,0.1)",
    border:  "rgba(56,189,248,0.2)",
  },
  {
    icon:    MessageCircle,
    label:   "WhatsApp",
    value:   "Chat langsung",
    href:    INFO.whatsapp,
    color:   "#34d399",
    bg:      "rgba(52,211,153,0.1)",
    border:  "rgba(52,211,153,0.2)",
  },
];

type Status = "idle" | "sending" | "success" | "error";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Partial<typeof form>>({});
  const [status, setStatus] = useState<Status>("idle");

  const validate = () => {
    const e: Partial<typeof form> = {};
    if (!form.name.trim())                                 e.name    = "Nama wajib diisi";
    if (!form.email.trim())                                e.email   = "Email wajib diisi";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Format email tidak valid";
    if (!form.subject.trim())                              e.subject = "Subjek wajib diisi";
    if (!form.message.trim())                              e.message = "Pesan wajib diisi";
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setStatus("sending");
    // ── Ganti dengan integrasi Formspree / EmailJS / API route ──
    await new Promise((r) => setTimeout(r, 1600));
    setStatus("success");
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setStatus("idle"), 6000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    if (errors[name as keyof typeof form]) {
      setErrors((p) => ({ ...p, [name]: "" }));
    }
  };

  const inputBase: React.CSSProperties = {
    width:        "100%",
    padding:      "13px 16px",
    background:   "rgba(255,255,255,0.03)",
    border:       "1.5px solid var(--border)",
    borderRadius: "12px",
    color:        "var(--text)",
    fontFamily:   "inherit",
    fontSize:     "0.9rem",
    outline:      "none",
    transition:   "border-color 0.2s, box-shadow 0.2s",
  };

  return (
    <section
      id="contact"
      className="py-28 relative overflow-hidden"
      style={{ background: "var(--bg2)" }}
    >
      {/* BG decorations */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse 55% 60% at 5% 60%, rgba(56,189,248,0.05) 0%, transparent 65%)",
      }} />
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse 40% 40% at 95% 20%, rgba(167,139,250,0.04) 0%, transparent 60%)",
      }} />

      <div className="max-w-[1160px] mx-auto px-6 relative z-10">

        {/* ── Header ───────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="section-label mb-4 justify-center">Contact</div>
          <h2
            className="font-syne font-extrabold mb-4"
            style={{ fontSize: "clamp(2rem,4.5vw,3rem)", color: "var(--text)" }}
          >
            Let&apos;s Build Something{" "}
            <span style={{ color: "var(--sky)" }}>Together</span>
          </h2>
          <p className="max-w-lg mx-auto text-base leading-relaxed" style={{ color: "var(--text2)" }}>
            Punya proyek menarik, pertanyaan, atau sekadar ingin berkenalan?
            Saya selalu terbuka untuk kolaborasi dan peluang baru.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 xl:gap-14">

          {/* ══ LEFT ══════════════════════════════════════ */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            {/* Availability card */}
            <motion.div
              variants={fadeUp}
              className="p-5 rounded-2xl"
              style={{
                background: "linear-gradient(135deg,rgba(56,189,248,0.08),rgba(14,165,233,0.03))",
                border:     "1px solid rgba(56,189,248,0.18)",
              }}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background:"#34d399" }} />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5" style={{ background:"#34d399" }} />
                </span>
                <span className="font-syne font-bold text-xs uppercase tracking-wider" style={{ color: "#34d399" }}>
                  Available for Work
                </span>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text2)" }}>
                Saat ini saya <strong style={{ color: "var(--text)" }}>open untuk internship, freelance</strong>, dan 
                kolaborasi proyek. Response time biasanya kurang dari 24 jam.
              </p>
            </motion.div>

            {/* Location + Timezone */}
            <motion.div variants={fadeUp} className="grid grid-cols-2 gap-3">
              {[
                { icon: MapPin, label: "Location",  value: INFO.location,  color: "#f59e0b" },
                { icon: Clock,  label: "Timezone",  value: INFO.timezone,  color: "#a78bfa" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-3 p-4 rounded-2xl"
                  style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: `${item.color}18` }}
                  >
                    <item.icon size={15} style={{ color: item.color }} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider font-syne mb-0.5" style={{ color: "var(--text3)" }}>
                      {item.label}
                    </p>
                    <p className="text-xs font-bold font-syne" style={{ color: "var(--text)" }}>
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Social links */}
            {socialLinks.map((s, i) => (
              <motion.a
                key={i}
                variants={fadeUp}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 group"
                style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = s.border;
                  e.currentTarget.style.transform   = "translateX(6px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.transform   = "translateX(0)";
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: s.bg, border: `1px solid ${s.border}` }}
                >
                  <s.icon size={17} style={{ color: s.color }} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] font-bold uppercase tracking-wider font-syne mb-0.5" style={{ color: "var(--text3)" }}>
                    {s.label}
                  </p>
                  <p className="text-sm font-bold truncate" style={{ color: "var(--text)" }}>
                    {s.value}
                  </p>
                </div>
                <span
                  className="text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0"
                  style={{ color: s.color }}
                >
                  ↗
                </span>
              </motion.a>
            ))}
          </motion.div>

          {/* ══ RIGHT — Form ══════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3"
          >
            <div
              className="relative p-8 rounded-3xl"
              style={{
                background: "var(--surface)",
                border:     "1px solid var(--border)",
                boxShadow:  "0 24px 64px rgba(0,0,0,0.25)",
              }}
            >
              {/* Decorative top accent */}
              <div
                className="absolute top-0 left-8 right-8 h-[1px] rounded-full"
                style={{
                  background: "linear-gradient(90deg,transparent,var(--sky),transparent)",
                }}
              />

              <AnimatePresence mode="wait">
                {status === "success" ? (
                  /* ── Success state ── */
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center text-center py-16 gap-5"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
                      className="w-20 h-20 rounded-full flex items-center justify-center"
                      style={{
                        background: "linear-gradient(135deg,var(--sky-dark),var(--sky))",
                        boxShadow:  "0 0 50px var(--sky-glow)",
                      }}
                    >
                      <CheckCircle size={36} color="#000" />
                    </motion.div>
                    <div>
                      <h4 className="font-syne font-extrabold text-2xl mb-2" style={{ color: "var(--text)" }}>
                        Pesan Terkirim! 🎉
                      </h4>
                      <p className="text-sm leading-relaxed" style={{ color: "var(--text2)" }}>
                        Terima kasih telah menghubungi saya.<br />
                        Saya akan membalas dalam 24 jam.
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  /* ── Form ── */
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    noValidate
                  >
                    <h3
                      className="font-syne font-extrabold text-xl mb-7"
                      style={{ color: "var(--text)" }}
                    >
                      Kirim Pesan 
                      <span style={{ color: "var(--sky)" }}> ✦</span>
                    </h3>

                    {/* Name + Email row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                      {[
                        { name: "name",  label: "Nama Lengkap",  type: "text",  placeholder: "Kael Si anak Baik"          },
                        { name: "email", label: "Alamat Email",   type: "email", placeholder: "kaelanakbaik@email.com"    },
                      ].map((f) => (
                        <div key={f.name}>
                          <label
                            className="block text-[10px] font-bold uppercase tracking-wider font-syne mb-1.5"
                            style={{ color: "var(--sky)" }}
                          >
                            {f.label}
                          </label>
                          <input
                            type={f.type}
                            name={f.name}
                            placeholder={f.placeholder}
                            value={form[f.name as keyof typeof form]}
                            onChange={handleChange}
                            disabled={status === "sending"}
                            style={{
                              ...inputBase,
                              borderColor: errors[f.name as keyof typeof errors] ? "#f87171" : undefined,
                            }}
                            onFocus={(e) => {
                              if (!errors[f.name as keyof typeof errors]) {
                                e.target.style.borderColor = "var(--sky)";
                                e.target.style.boxShadow   = "0 0 0 3px rgba(56,189,248,0.1)";
                              }
                            }}
                            onBlur={(e) => {
                              e.target.style.borderColor = errors[f.name as keyof typeof errors] ? "#f87171" : "var(--border)";
                              e.target.style.boxShadow   = "none";
                            }}
                          />
                          {errors[f.name as keyof typeof errors] && (
                            <p className="text-[10px] mt-1 font-semibold" style={{ color: "#f87171" }}>
                              {errors[f.name as keyof typeof errors]}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Subject */}
                    <div className="mb-4">
                      <label
                        className="block text-[10px] font-bold uppercase tracking-wider font-syne mb-1.5"
                        style={{ color: "var(--sky)" }}
                      >
                        Subjek
                      </label>
                      <input
                        type="text"
                        name="subject"
                        placeholder="Kolaborasi Proyek / Pertanyaan / Lainnya"
                        value={form.subject}
                        onChange={handleChange}
                        disabled={status === "sending"}
                        style={{
                          ...inputBase,
                          borderColor: errors.subject ? "#f87171" : undefined,
                        }}
                        onFocus={(e) => {
                          if (!errors.subject) {
                            e.target.style.borderColor = "var(--sky)";
                            e.target.style.boxShadow   = "0 0 0 3px rgba(56,189,248,0.1)";
                          }
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = errors.subject ? "#f87171" : "var(--border)";
                          e.target.style.boxShadow   = "none";
                        }}
                      />
                      {errors.subject && (
                        <p className="text-[10px] mt-1 font-semibold" style={{ color: "#f87171" }}>{errors.subject}</p>
                      )}
                    </div>

                    {/* Message */}
                    <div className="mb-6">
                      <label
                        className="block text-[10px] font-bold uppercase tracking-wider font-syne mb-1.5"
                        style={{ color: "var(--sky)" }}
                      >
                        Pesan
                      </label>
                      <textarea
                        name="message"
                        placeholder="Ceritakan proyek atau ide kamu..."
                        value={form.message}
                        onChange={handleChange}
                        disabled={status === "sending"}
                        rows={5}
                        style={{
                          ...inputBase,
                          resize:     "none",
                          borderColor: errors.message ? "#f87171" : undefined,
                        }}
                        onFocus={(e) => {
                          if (!errors.message) {
                            e.target.style.borderColor = "var(--sky)";
                            e.target.style.boxShadow   = "0 0 0 3px rgba(56,189,248,0.1)";
                          }
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = errors.message ? "#f87171" : "var(--border)";
                          e.target.style.boxShadow   = "none";
                        }}
                      />
                      {errors.message && (
                        <p className="text-[10px] mt-1 font-semibold" style={{ color: "#f87171" }}>{errors.message}</p>
                      )}
                    </div>

                    {/* Submit */}
                    <motion.button
                      type="submit"
                      disabled={status === "sending"}
                      whileHover={{ scale: status === "sending" ? 1 : 1.02 }}
                      whileTap={{ scale:  status === "sending" ? 1 : 0.98 }}
                      className="w-full flex items-center justify-center gap-2.5 py-4 rounded-2xl font-syne font-extrabold text-sm uppercase tracking-widest transition-all duration-300"
                      style={{
                        background:   status === "sending"
                          ? "rgba(56,189,248,0.4)"
                          : "linear-gradient(135deg,var(--sky-dark),var(--sky))",
                        color:        "#000",
                        boxShadow:    status === "sending" ? "none" : "0 0 30px var(--sky-glow)",
                        cursor:       status === "sending" ? "not-allowed" : "pointer",
                      }}
                    >
                      {status === "sending" ? (
                        <>
                          <Loader2 size={16} className="animate-spin" />
                          Mengirim...
                        </>
                      ) : (
                        <>
                          <Send size={15} />
                          Kirim Pesan
                        </>
                      )}
                    </motion.button>

                    <p className="text-center text-[10px] mt-4 font-semibold" style={{ color: "var(--text3)" }}>
                      🔒 Data kamu aman dan tidak akan dibagikan ke pihak manapun.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}