# Portfolio Heykel Prayogi — Next.js 14

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run dev server
npm run dev
# → open http://localhost:3000

# 3. Build for production
npm run build
```

---

## 📁 Struktur Folder

```
portfolio-heykel/
├── app/
│   ├── layout.tsx          ← Root layout (ThemeProvider, Navbar, Footer, fonts, metadata)
│   ├── page.tsx            ← Home page (import & susun semua sections)
│   └── globals.css         ← Tailwind directives + CSS variables + utility classes
│
├── components/
│   ├── ThemeProvider.tsx   ← Wrapper next-themes (sudah selesai)
│   ├── ThemeToggle.tsx     ← Tombol dark/light (sudah selesai)
│   ├── Navbar.tsx          ← ← PASTE CODE DI SINI
│   ├── Footer.tsx          ← ← PASTE CODE DI SINI
│   └── ui/                 ← (opsional) Shadcn primitives
│
├── sections/
│   ├── Hero.tsx            ← ← PASTE CODE DI SINI
│   ├── About.tsx           ← ← PASTE CODE DI SINI
│   ├── Skills.tsx          ← ← PASTE CODE DI SINI
│   ├── Projects.tsx        ← ← PASTE CODE DI SINI
│   ├── Experience.tsx      ← ← PASTE CODE DI SINI
│   ├── Certificates.tsx    ← ← PASTE CODE DI SINI
│   └── Contact.tsx         ← ← PASTE CODE DI SINI
│
├── data/
│   ├── projects.ts         ← Data 4 proyek (sudah lengkap, edit sesuai kebutuhan)
│   ├── skills.ts           ← Data skill per kategori (sudah lengkap)
│   ├── experience.ts       ← Data timeline experience (sudah lengkap)
│   └── certificates.ts     ← Data 6 sertifikat (sudah lengkap)
│
├── lib/
│   └── utils.ts            ← cn() utility (clsx + tailwind-merge)
│
├── public/
│   └── images/             ← Taruh foto profil & screenshot proyek di sini
│
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.js
└── next.config.js
```

---

## 🎨 Cara Pakai CSS Variables di Tailwind

Karena warna utama pakai CSS variables, gunakan inline style atau `[]` syntax:

```tsx
// Cara 1 — inline style (paling mudah)
<div style={{ color: "var(--sky)", background: "var(--bg2)" }}>

// Cara 2 — Tailwind arbitrary value
<div className="text-[var(--sky)] bg-[var(--bg2)]">

// Cara 3 — className glass / glass2 (sudah didefinisikan di globals.css)
<div className="glass">
<div className="glass2">
```

---

## ✨ Framer Motion — Pola Umum

```tsx
import { motion } from "framer-motion";

// Fade up saat scroll
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  viewport={{ once: true }}
>
  ...
</motion.div>

// Stagger children
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0 },
};

<motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
  {items.map(i => (
    <motion.div key={i.id} variants={item}>...</motion.div>
  ))}
</motion.div>
```

---

## 📦 Libraries yang Sudah Terpasang

| Library | Kegunaan |
|---|---|
| `framer-motion` | Semua animasi |
| `next-themes` | Dark/light mode |
| `lucide-react` | Icon (Moon, Sun, Github, dll) |
| `react-icons` | Icon brand tambahan (FaGithub, SiNextdotjs, dll) |
| `react-hook-form` | Validasi form Contact |
| `clsx` + `tailwind-merge` | Utility `cn()` |

---

## 🖼️ Menambah Foto Profil

1. Taruh file foto di `public/images/heykel.jpg`
2. Di `Hero.tsx` dan `About.tsx`, ganti `<span>HP</span>` dengan:
```tsx
import Image from "next/image";
<Image src="/images/heykel.jpg" alt="Heykel Prayogi" fill className="object-cover" />
```

---

## 🌐 Deploy ke Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Atau push ke GitHub → import di vercel.com → auto deploy.
