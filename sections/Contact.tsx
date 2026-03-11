"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  Mail, Github, Linkedin, MessageCircle,
  MapPin, Clock, Send, CheckCircle, Loader2, ArrowUpRight,
} from "lucide-react";


const EMAILJS_CONFIG = {
  serviceId:  "YOUR_SERVICE_ID",   // dari EmailJS dashboard → Email Services
  templateId: "YOUR_TEMPLATE_ID",  // dari EmailJS dashboard → Email Templates
  publicKey:  "YOUR_PUBLIC_KEY",   // dari EmailJS dashboard → Account → Public Key
};

const INFO = {
  email:    "heykelprayogi123@gmail.com",
  whatsapp: "https://wa.me/6287822274814",
  github:   "https://github.com/heykelprayogitimantags",
  linkedin: "https://www.linkedin.com/in/heykelprayogitimanta/",
  location: "Medan, Sumatera Utara 🇮🇩",
};
// ═══════════════════════════════════════════════════════════

const socialLinks = [
  {
    icon:   Github,
    label:  "GitHub",
    value:  "@heykelprayogitimantags",
    href:   INFO.github,
    color:  "#e2e8f0",
    accent: "rgba(226,232,240,0.15)",
  },
  {
    icon:   Linkedin,
    label:  "LinkedIn",
    value:  "hykl.",
    href:   INFO.linkedin,
    color:  "#0A66C2",
    accent: "rgba(10,102,194,0.15)",
  },
  {
    icon:   Mail,
    label:  "Email",
    value:  INFO.email,
    href:   `mailto:${INFO.email}`,
    color:  "#f59e0b",
    accent: "rgba(245,158,11,0.15)",
  },
  {
    icon:   MessageCircle,
    label:  "WhatsApp",
    value:  "Chat Langsung",
    href:   INFO.whatsapp,
    color:  "#25D366",
    accent: "rgba(37,211,102,0.15)",
  },
];

type Status = "idle" | "sending" | "success" | "error";
type FormData = { name: string; email: string; subject: string; message: string };

const inputCls: React.CSSProperties = {
  width:        "100%",
  padding:      "12px 16px",
  background:   "rgba(255,255,255,0.03)",
  border:       "1.5px solid var(--border)",
  borderRadius: "14px",
  color:        "var(--text)",
  fontFamily:   "inherit",
  fontSize:     "0.875rem",
  outline:      "none",
  transition:   "border-color 0.2s, box-shadow 0.2s",
};

export default function Contact() {
  const [form,   setForm]   = useState<FormData>({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [status, setStatus] = useState<Status>("idle");

  const validate = (): Partial<FormData> => {
    const e: Partial<FormData> = {};
    if (!form.name.trim())    e.name    = "Nama wajib diisi";
    if (!form.email.trim())   e.email   = "Email wajib diisi";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Format email tidak valid";
    if (!form.subject.trim()) e.subject = "Subjek wajib diisi";
    if (!form.message.trim()) e.message = "Pesan wajib diisi";
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setStatus("sending");

    try {
      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        {
          from_name:    form.name,
          from_email:   form.email,
          subject:      form.subject,
          message:      form.message,
          reply_to:     form.email,
        },
        EMAILJS_CONFIG.publicKey
      );
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 7000);
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    if (errors[name as keyof FormData]) setErrors((p) => ({ ...p, [name]: "" }));
  };

  const focusStyle  = (hasErr: boolean) => ({
    borderColor: hasErr ? "#f87171" : "var(--sky)",
    boxShadow:   hasErr ? "0 0 0 3px rgba(248,113,113,0.1)" : "0 0 0 3px rgba(56,189,248,0.1)",
  });
  const blurStyle   = (hasErr: boolean) => ({
    borderColor: hasErr ? "#f87171" : "var(--border)",
    boxShadow:   "none",
  });

  return (
    <section
      id="contact"
      className="py-28 relative overflow-hidden"
    >
      {/* BG glows */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse 60% 60% at 0% 70%, rgba(56,189,248,0.05) 0%, transparent 65%)",
      }} />
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse 45% 45% at 100% 10%, rgba(167,139,250,0.04) 0%, transparent 60%)",
      }} />

      <div className="max-w-[1160px] mx-auto px-6 relative z-10">

        {/* ── Header ─────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="mb-16 text-center"
        >
          <div className="section-label mb-4" style={{ justifyContent: "center" }}>Contact</div>
          <h2
            className="font-syne font-extrabold mb-5 leading-[1.05]"
            style={{ fontSize: "clamp(2rem,5vw,3.2rem)", color: "var(--text)" }}
          >
            Mari{" "}
            <span style={{
              background: "linear-gradient(135deg, var(--sky-dark), var(--sky), #a78bfa)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              Berkolaborasi
            </span>
          </h2>
          <p className="max-w-md mx-auto text-base leading-relaxed" style={{ color: "var(--text2)" }}>
            Terbuka untuk diskusi proyek, peluang kerja sama, atau sekadar saling berkenalan.
          </p>
        </motion.div>

        {/* ── Social quick links ────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-14"
        >
          {socialLinks.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2.5 py-5 px-4 rounded-2xl transition-all duration-300"
              style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background   = s.accent;
                e.currentTarget.style.borderColor  = s.color + "44";
                e.currentTarget.style.transform    = "translateY(-4px)";
                e.currentTarget.style.boxShadow    = `0 12px 32px rgba(0,0,0,0.2), 0 0 20px ${s.color}12`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background   = "var(--surface)";
                e.currentTarget.style.borderColor  = "var(--border)";
                e.currentTarget.style.transform    = "translateY(0)";
                e.currentTarget.style.boxShadow    = "none";
              }}
            >
              <div
                className="w-11 h-11 rounded-2xl flex items-center justify-center transition-all duration-300"
                style={{
                  background: `${s.color}18`,
                  border:     `1.5px solid ${s.color}30`,
                  color:       s.color,
                }}
              >
                <s.icon size={20} />
              </div>
              <div className="text-center">
                <p className="font-syne font-extrabold text-xs" style={{ color: "var(--text)" }}>
                  {s.label}
                </p>
                <p className="text-[10px] truncate max-w-[100px]" style={{ color: "var(--text3)" }}>
                  {s.value}
                </p>
              </div>
              <ArrowUpRight
                size={12}
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ color: s.color }}
              />
            </a>
          ))}
        </motion.div>

        {/* ── Main grid ─────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 xl:gap-12">

          {/* LEFT — info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            {/* Availability */}
            <div
              className="p-5 rounded-2xl"
              style={{
                background: "linear-gradient(135deg, rgba(52,211,153,0.07), rgba(52,211,153,0.02))",
                border:     "1px solid rgba(52,211,153,0.2)",
              }}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
                </span>
                <span className="font-syne font-bold text-xs uppercase tracking-wider" style={{ color: "#34d399" }}>
                  Available for Work
                </span>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text2)" }}>
                Saat ini saya{" "}
                <strong style={{ color: "var(--text)" }}>open untuk internship & freelance</strong>.
                Response biasanya dalam{" "}
                <strong style={{ color: "#34d399" }}>24 jam</strong>.
              </p>
            </div>

            {/* Location + Timezone */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: MapPin, label: "Location", value: "Medan, ID 🇮🇩", color: "#f59e0b" },
                { icon: Clock,  label: "Timezone", value: "WIB (UTC+7)",   color: "#a78bfa" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-3 p-4 rounded-2xl"
                  style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
                >
                  <div
                    className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${item.color}18`, border: `1px solid ${item.color}25` }}
                  >
                    <item.icon size={14} style={{ color: item.color }} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider font-syne" style={{ color: "var(--text3)" }}>
                      {item.label}
                    </p>
                    <p className="text-xs font-bold font-syne mt-0.5" style={{ color: "var(--text)" }}>
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Preferred contact */}
            <div
              className="p-5 rounded-2xl"
              style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
            >
              <p className="text-[10px] font-bold uppercase tracking-wider font-syne mb-3" style={{ color: "var(--text3)" }}>
                Preferred Contact
              </p>
              <div className="flex flex-col gap-2.5">
                {[
                  { icon: Mail,           label: INFO.email,    href: `mailto:${INFO.email}`,    color: "#f59e0b" },
                  { icon: MessageCircle,  label: "WhatsApp",    href: INFO.whatsapp,              color: "#25D366" },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 py-2.5 px-3 rounded-xl transition-all duration-200 group"
                    style={{ border: "1px solid var(--border)" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor  = item.color + "44";
                      e.currentTarget.style.background   = item.color + "0d";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor  = "var(--border)";
                      e.currentTarget.style.background   = "transparent";
                    }}
                  >
                    <item.icon size={14} style={{ color: item.color, flexShrink: 0 }} />
                    <span className="text-xs font-semibold truncate" style={{ color: "var(--text2)" }}>
                      {item.label}
                    </span>
                    <ArrowUpRight
                      size={11}
                      className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"
                      style={{ color: item.color }}
                    />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT — form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.05 }}
            className="lg:col-span-3"
          >
            <div
              className="relative rounded-3xl overflow-hidden"
              style={{
                background: "var(--surface)",
                border:     "1px solid var(--border)",
                boxShadow:  "0 32px 80px rgba(0,0,0,0.2)",
              }}
            >
              {/* Top gradient bar */}
              <div
                className="h-[2px] w-full"
                style={{
                  background: "linear-gradient(90deg, var(--sky-dark), var(--sky), #a78bfa)",
                }}
              />

              <div className="p-8">
                <AnimatePresence mode="wait">
                  {/* ── SUCCESS ── */}
                  {status === "success" && (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex flex-col items-center justify-center text-center py-14 gap-6"
                    >
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: "spring", stiffness: 220, damping: 18, delay: 0.1 }}
                        className="w-20 h-20 rounded-full flex items-center justify-center"
                        style={{
                          background: "linear-gradient(135deg,#34d399,#059669)",
                          boxShadow:  "0 0 50px rgba(52,211,153,0.4)",
                        }}
                      >
                        <CheckCircle size={38} color="#fff" strokeWidth={2.5} />
                      </motion.div>
                      <div>
                        <h4 className="font-syne font-extrabold text-2xl mb-2" style={{ color: "var(--text)" }}>
                          Pesan Terkirim!
                        </h4>
                        <p className="text-sm leading-relaxed" style={{ color: "var(--text2)" }}>
                          Terima kasih sudah menghubungi saya.<br />
                          Saya akan membalas secepatnya melalui email kamu.
                        </p>
                      </div>
                    </motion.div>
                  )}

                  {/* ── ERROR ── */}
                  {status === "error" && (
                    <motion.div
                      key="error"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex flex-col items-center justify-center text-center py-14 gap-4"
                    >
                      <div className="w-16 h-16 rounded-full flex items-center justify-center text-3xl"
                        style={{ background: "rgba(248,113,113,0.15)", border: "1px solid rgba(248,113,113,0.3)" }}
                      >
                        ⚠️
                      </div>
                      <div>
                        <h4 className="font-syne font-extrabold text-xl mb-1" style={{ color: "var(--text)" }}>
                          Gagal Mengirim
                        </h4>
                        <p className="text-sm" style={{ color: "var(--text2)" }}>
                          Terjadi kesalahan. Coba hubungi langsung via email atau WhatsApp.
                        </p>
                      </div>
                    </motion.div>
                  )}

                  {/* ── FORM ── */}
                  {(status === "idle" || status === "sending") && (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      noValidate
                    >
                      <div className="flex items-center justify-between mb-7">
                        <h3 className="font-syne font-extrabold text-xl" style={{ color: "var(--text)" }}>
                          Kirim Pesan
                        </h3>
                      </div>

                      {/* Name + Email */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                        {[
                          { name: "name",  label: "Nama Lengkap", type: "text",  placeholder: "hykl si anak baik"         },
                          { name: "email", label: "Email",         type: "email", placeholder: "hykl@email.com"   },
                        ].map((f) => {
                          const err = errors[f.name as keyof FormData];
                          return (
                            <div key={f.name}>
                              <label className="block text-[10px] font-bold uppercase tracking-wider font-syne mb-1.5"
                                style={{ color: err ? "#f87171" : "var(--sky)" }}>
                                {f.label}
                              </label>
                              <input
                                type={f.type}
                                name={f.name}
                                placeholder={f.placeholder}
                                value={form[f.name as keyof FormData]}
                                onChange={handleChange}
                                disabled={status === "sending"}
                                style={{ ...inputCls, borderColor: err ? "#f87171" : undefined }}
                                onFocus={(e) => Object.assign(e.target.style, focusStyle(!!err))}
                                onBlur={(e)  => Object.assign(e.target.style, blurStyle(!!err))}
                              />
                              {err && <p className="text-[10px] mt-1 font-semibold" style={{ color: "#f87171" }}>{err}</p>}
                            </div>
                          );
                        })}
                      </div>

                      {/* Subject */}
                      <div className="mb-4">
                        <label className="block text-[10px] font-bold uppercase tracking-wider font-syne mb-1.5"
                          style={{ color: errors.subject ? "#f87171" : "var(--sky)" }}>
                          Subjek
                        </label>
                        <input
                          type="text" name="subject"
                          placeholder="Kolaborasi / Pertanyaan / Peluang Kerja"
                          value={form.subject}
                          onChange={handleChange}
                          disabled={status === "sending"}
                          style={{ ...inputCls, borderColor: errors.subject ? "#f87171" : undefined }}
                          onFocus={(e) => Object.assign(e.target.style, focusStyle(!!errors.subject))}
                          onBlur={(e)  => Object.assign(e.target.style, blurStyle(!!errors.subject))}
                        />
                        {errors.subject && <p className="text-[10px] mt-1 font-semibold" style={{ color: "#f87171" }}>{errors.subject}</p>}
                      </div>

                      {/* Message */}
                      <div className="mb-6">
                        <label className="block text-[10px] font-bold uppercase tracking-wider font-syne mb-1.5"
                          style={{ color: errors.message ? "#f87171" : "var(--sky)" }}>
                          Pesan
                        </label>
                        <textarea
                          name="message" rows={5}
                          placeholder="Ceritakan proyek atau ide kamu..."
                          value={form.message}
                          onChange={handleChange}
                          disabled={status === "sending"}
                          style={{ ...inputCls, resize: "none", borderColor: errors.message ? "#f87171" : undefined }}
                          onFocus={(e) => Object.assign(e.target.style, focusStyle(!!errors.message))}
                          onBlur={(e)  => Object.assign(e.target.style, blurStyle(!!errors.message))}
                        />
                        {errors.message && <p className="text-[10px] mt-1 font-semibold" style={{ color: "#f87171" }}>{errors.message}</p>}
                        {/* Char count */}
                        <p className="text-right text-[10px] mt-1" style={{ color: "var(--text3)" }}>
                          {form.message.length} karakter
                        </p>
                      </div>

                      {/* Submit */}
                      <motion.button
                        type="submit"
                        disabled={status === "sending"}
                        whileHover={{ scale: status === "sending" ? 1 : 1.015 }}
                        whileTap={{  scale: status === "sending" ? 1 : 0.985 }}
                        className="w-full flex items-center justify-center gap-2.5 py-4 rounded-2xl font-syne font-extrabold text-sm uppercase tracking-widest transition-all duration-300"
                        style={{
                          background: status === "sending"
                            ? "rgba(56,189,248,0.35)"
                            : "linear-gradient(135deg, var(--sky-dark), var(--sky))",
                          color:      "#000",
                          boxShadow:  status === "sending" ? "none" : "0 0 32px var(--sky-glow)",
                          cursor:     status === "sending" ? "not-allowed" : "pointer",
                        }}
                      >
                        {status === "sending" ? (
                          <><Loader2 size={16} className="animate-spin" /> Mengirim...</>
                        ) : (
                          <><Send size={15} /> Kirim Pesan</>
                        )}
                      </motion.button>

                      <p className="text-center text-[10px] mt-4" style={{ color: "var(--text3)" }}>
                        🔒 Pesan dikirim langsung ke email saya • Tidak ada data yang disimpan
                      </p>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/*
════════════════════════════════════════════════════════════
  CARA SETUP EMAILJS (Gratis, 200 email/bulan)
════════════════════════════════════════════════════════════

1. INSTALL PACKAGE
   npm install @emailjs/browser

2. DAFTAR AKUN
   Buka: https://www.emailjs.com → Sign Up (gratis)

3. BUAT EMAIL SERVICE
   Dashboard → Email Services → Add New Service
   Pilih Gmail → Connect Account → Copy "Service ID"
   Isi EMAILJS_CONFIG.serviceId dengan nilai ini

4. BUAT EMAIL TEMPLATE
   Dashboard → Email Templates → Create New Template
   Isi template seperti ini:

   Subject : New Contact from {{from_name}} — {{subject}}
   Body    :
     Nama    : {{from_name}}
     Email   : {{from_email}}
     Subjek  : {{subject}}

     Pesan:
     {{message}}

   → Klik Save → Copy "Template ID"
   Isi EMAILJS_CONFIG.templateId dengan nilai ini

5. AMBIL PUBLIC KEY
   Dashboard → Account → General → Public Key
   Isi EMAILJS_CONFIG.publicKey dengan nilai ini

6. SELESAI — test kirim form, email masuk ke Gmail kamu!
════════════════════════════════════════════════════════════
*/