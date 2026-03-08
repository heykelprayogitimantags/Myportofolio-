<div align="center">

<img src="public/images/heykel.jpg" alt="Heykel Prayogi" width="120" style="border-radius:50%" />

# 🚀 Heykel Prayogi — Personal Portfolio

**Web Developer · Mobile App Developer · IT Support**

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=nextdotjs)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-0055FF?style=flat-square&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

**[🌐 Live Demo](https://heykel-portfolio.vercel.app)** · **[📬 Contact Me](mailto:heykel@email.com)** · **[💼 LinkedIn](https://linkedin.com/in/heykel)**

</div>

---

## 📸 Preview

> Screenshot akan ditampilkan setelah deploy. Taruh file `preview.png` di folder `public/` lalu uncomment baris di bawah.

<!-- ![Portfolio Preview](public/preview.png) -->

---

## ✨ Features

- 🌗 **Dark / Light Mode** — smooth toggle dengan `next-themes`
- 🎞️ **Scroll Animations** — setiap section animate masuk dengan Framer Motion
- ⌨️ **Typing Effect** — hero section dengan animated role titles
- 📱 **Fully Responsive** — mobile-first, hamburger drawer untuk mobile
- 🪟 **Glassmorphism UI** — card & navbar dengan blur backdrop
- ⚡ **Performance** — Next.js Image optimization, font preloading, lazy sections
- ♿ **Accessible** — semantic HTML, aria-label, keyboard navigable

---

## 🗂️ Project Structure

```
portfolio-heykel/
├── app/
│   ├── layout.tsx          # Root layout — ThemeProvider, Navbar, Footer, metadata
│   ├── page.tsx            # Home page — assembles all sections
│   └── globals.css         # Tailwind directives + CSS variables + glassmorphism utils
│
├── components/
│   ├── Navbar.tsx          # Sticky navbar — scroll-aware, active link, mobile drawer
│   ├── Footer.tsx          # Footer — social links, quick nav
│   ├── ThemeProvider.tsx   # next-themes wrapper
│   ├── ThemeToggle.tsx     # Dark/light toggle button
│   └── ui/                 # Shadcn primitives (optional)
│
├── sections/
│   ├── Hero.tsx            # Full-screen hero — typing effect, avatar, floating cards
│   ├── About.tsx           # Profile + career mini-timeline
│   ├── Skills.tsx          # Tabbed skill grid + animated progress bars
│   ├── Projects.tsx        # Filterable project card grid
│   ├── Experience.tsx      # Animated vertical timeline
│   ├── Certificates.tsx    # Certificate grid + modal preview
│   └── Contact.tsx         # Contact form (react-hook-form) + social links
│
├── data/
│   ├── projects.ts         # Project entries (title, desc, tags, links)
│   ├── skills.ts           # Skills grouped by category
│   ├── experience.ts       # Timeline entries
│   └── certificates.ts     # Certificate data
│
├── lib/
│   └── utils.ts            # cn() utility — clsx + tailwind-merge
│
└── public/
    └── images/             # Profile photo, project screenshots
```

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| **Framework** | Next.js 14 (App Router) |
| **Language** | TypeScript 5 |
| **Styling** | Tailwind CSS v3 |
| **Animation** | Framer Motion v11 |
| **Icons** | Lucide React + React Icons |
| **Theme** | next-themes |
| **Form** | React Hook Form |
| **Font** | Syne + DM Sans (Google Fonts) |
| **Deploy** | Vercel |

---

## ⚡ Getting Started

### Prerequisites

Pastikan sudah terinstall:
- [Node.js](https://nodejs.org/) v18 atau lebih baru
- npm / yarn / pnpm

### Installation

```bash
# 1. Clone repository
git clone https://github.com/heykel/portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Jalankan dev server
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

### Build for Production

```bash
# Build
npm run build

# Preview build hasil
npm run start
```

---

## 🖼️ Menambahkan Foto Profil

1. Taruh file foto di `public/images/heykel.jpg`
2. Format yang didukung: `.jpg`, `.png`, `.webp`
3. Rekomendasi ukuran: **500×500px** minimum, rasio **1:1**
4. Foto akan otomatis di-crop lingkaran oleh CSS

Untuk mengganti nama file, update baris berikut di `sections/Hero.tsx`:

```tsx
<Image
  src="/images/nama-foto-kamu.jpg"   // ← ganti di sini
  alt="Heykel Prayogi"
  fill
  className="object-cover object-top"
  priority
/>
```

---

## 🎨 Design System

| Token | Value | Keterangan |
|---|---|---|
| `--sky` | `#38BDF8` | Primary accent — Sky Blue 400 |
| `--sky-dark` | `#0EA5E9` | Primary dark — Sky 500 |
| `--bg` | `#070D1A` | Background dark |
| `--bg2` | `#0C1528` | Surface dark |
| `--text` | `#E8F4FD` | Text primary |
| `--text2` | `#7A9BB5` | Text secondary |
| Font Heading | Syne 800 | Judul & label |
| Font Body | DM Sans 400 | Paragraf |

---

## 🔧 Kustomisasi Data

Semua data portfolio tersimpan di folder `data/`. Edit file berikut:

**`data/projects.ts`** — tambah/hapus proyek:
```ts
{
  id: 5,
  title: "Nama Proyek Baru",
  desc: "Deskripsi singkat proyek.",
  category: "web",               // "web" | "android" | "aiml"
  tags: ["React", "Firebase"],
  icon: "🔥",
  gradient: "linear-gradient(135deg, #1a0533, #a78bfa)",
  github: "https://github.com/...",
  demo: "https://...",
}
```

**`data/skills.ts`** — tambah skill baru:
```ts
{ name: "Vue.js", icon: "💚", level: "Intermediate", percent: 68 }
```

**`data/experience.ts`** — tambah pengalaman baru:
```ts
{
  id: 5,
  period: "2024 – Now",
  type: "Full-time",
  title: "Junior Developer",
  company: "PT. ABC — Medan",
  desc: "Deskripsi pekerjaan.",
  tags: ["React", "Node.js"],
}
```

---

## 🌐 Deploy ke Vercel

Cara termudah deploy portofolio ini:

**Option A — Via GitHub (Recommended):**
1. Push project ke GitHub
2. Buka [vercel.com](https://vercel.com) → **New Project**
3. Import repository → klik **Deploy**
4. Vercel otomatis build & deploy setiap push ke `main`

**Option B — Via CLI:**
```bash
npm i -g vercel
vercel
```

---

## 📄 License

Distributed under the MIT License. See [`LICENSE`](LICENSE) for more information.

---

<div align="center">

Made with ❤️ by **Heykel Prayogi Timanta G.s**

[![GitHub followers](https://img.shields.io/github/followers/heykel?style=social)](https://github.com/heykel)

</div>