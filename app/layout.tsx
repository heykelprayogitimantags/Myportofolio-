import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar       from "@/components/Navbar";
import Footer       from "@/components/Footer";
import ScrollToTop  from "@/components/ScrollToTop";

const syne = Syne({
  subsets:  ["latin"],
  weight:   ["400", "600", "700", "800"],
  variable: "--font-syne",
  display:  "swap",
});

const dmSans = DM_Sans({
  subsets:  ["latin"],
  weight:   ["300", "400", "500"],
  variable: "--font-dm",
  display:  "swap",
});

export const metadata: Metadata = {
  title:       "Heykel Prayogi Web & Mobile Developer",
  description: "Portfolio of Heykel Prayogi, a Web & Mobile Developer based in Medan, Indonesia. Passionate about building modern, clean, and impactful digital solutions.",
  keywords:    ["Heykel Prayogi", "Web Developer", "Mobile Developer", "Flutter", "Next.js", "Medan", "Portfolio"],
  authors:     [{ name: "Heykel Prayogi Timanta" }],
  creator:     "Heykel Prayogi Timanta",
  openGraph: {
    title:       "Heykel Prayogi Web & Mobile Developer",
    description: "Passionate developer building modern web & mobile applications with clean code and great UX.",
    type:        "website",
    locale:      "id_ID",
    siteName:    "Heykel Prayogi Portfolio",
  },
  twitter: {
    card:    "summary_large_image",
    title:   "Heykel Prayogi — Portfolio",
    description: "Web & Mobile Developer based in Medan, Indonesia.",
  },
  robots: {
    index:  true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${syne.variable} ${dmSans.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          <Navbar />
          <main>{children}</main>
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}