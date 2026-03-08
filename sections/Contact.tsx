"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    // Simulasi delay pengiriman API (misal ke Formspree atau EmailJS)
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log("Data dikirim:", formData);
    setStatus('success');
    
    // Reset form setelah 5 detik
    setTimeout(() => {
      setStatus('idle');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 5000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden" style={{ background: "var(--bg2)" }}>
      <div className="container mx-auto px-6 relative z-10">
        <div className="contact-grid grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Sisi Kiri: Branding & Links */}
          <div className="contact-info">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="font-syne font-extrabold text-4xl mb-6 italic">
                Mari <span className="text-sky">Berkolaborasi</span>
              </h3>
              <p className="text-gray-400 leading-relaxed mb-10 max-w-md">
                Saya selalu terbuka untuk diskusi mengenai proyek IT, keamanan siber, 
                atau peluang kerja sama lainnya. Jangan ragu untuk menyapa!
              </p>

              <div className="social-links flex flex-col gap-4">
                {[
                  { label: 'Email', value: 'heykel.prayogi@student.polmed.ac.id', icon: '📧', href: 'mailto:heykel.prayogi@student.polmed.ac.id' },
                  { label: 'LinkedIn', value: 'Heykel Prayogi Timanta', icon: '🔗', href: 'https://linkedin.com/in/heykel' },
                  { label: 'GitHub', value: '@heykelpt', icon: '📁', href: 'https://github.com/heykel' }
                ].map((link, i) => (
                  <motion.a 
                    key={i}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 10 }}
                    className="social-link p-5 rounded-2xl border border-white/5 bg-white/5 flex items-center gap-5 hover:border-sky/30 transition-all"
                  >
                    <div className="social-icon w-12 h-12 rounded-xl bg-sky/10 flex items-center justify-center text-xl text-sky">
                      {link.icon}
                    </div>
                    <div className="social-info">
                      <div className="label text-[10px] font-bold text-gray-500 uppercase tracking-widest">{link.label}</div>
                      <div className="value font-bold text-sm text-gray-200">{link.value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sisi Kanan: Form */}
          <div className="contact-right relative min-h-[400px]">
            <AnimatePresence mode="wait">
              {status !== 'success' ? (
                <motion.form 
                  key="contact-form"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="contact-form flex flex-col gap-5 p-8 rounded-[2.5rem] bg-[#111] border border-white/5 shadow-2xl"
                  onSubmit={handleSubmit}
                >
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="form-group">
                      <label className="form-label text-[11px] font-bold text-sky uppercase tracking-tighter mb-2 block">Nama Lengkap</label>
                      <input 
                        type="text" name="name" className="form-input w-full" 
                        placeholder="Nama Anda" required
                        value={formData.name} onChange={handleChange}
                        disabled={status === 'sending'}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label text-[11px] font-bold text-sky uppercase tracking-tighter mb-2 block">Alamat Email</label>
                      <input 
                        type="email" name="email" className="form-input w-full" 
                        placeholder="email@contoh.com" required
                        value={formData.email} onChange={handleChange}
                        disabled={status === 'sending'}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label text-[11px] font-bold text-sky uppercase tracking-tighter mb-2 block">Subjek</label>
                    <input 
                      type="text" name="subject" className="form-input w-full" 
                      placeholder="Judul pesan" required
                      value={formData.subject} onChange={handleChange}
                      disabled={status === 'sending'}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label text-[11px] font-bold text-sky uppercase tracking-tighter mb-2 block">Pesan</label>
                    <textarea 
                      name="message" className="form-textarea w-full min-h-[150px]" 
                      placeholder="Tulis pesan Anda..." required
                      value={formData.message} onChange={handleChange}
                      disabled={status === 'sending'}
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={status === 'sending'}
                    className="form-submit bg-sky text-black font-extrabold py-4 rounded-2xl hover:shadow-[0_0_30px_rgba(56,189,248,0.4)] transition-all disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-widest text-sm"
                  >
                    {status === 'sending' ? 'MENGIRIM...' : 'KIRIM PESAN'}
                  </button>
                </motion.form>
              ) : (
                <motion.div 
                  key="success-msg"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="form-success h-full flex flex-col items-center justify-center text-center p-12 rounded-[2.5rem] bg-sky/5 border border-sky/20"
                >
                  <div className="w-20 h-20 bg-sky rounded-full flex items-center justify-center text-4xl mb-6 shadow-[0_0_40px_rgba(56,189,248,0.5)]">
                    ✓
                  </div>
                  <h4 className="text-2xl font-syne font-bold mb-3 text-white">Terima Kasih!</h4>
                  <p className="text-gray-400 leading-relaxed">
                    Pesan Anda telah berhasil terkirim. Saya akan segera menghubungi Anda kembali melalui email.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;