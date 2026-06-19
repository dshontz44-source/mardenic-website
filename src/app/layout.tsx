import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"], display: "swap" });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"], display: "swap" });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://mardenic-website.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Mardenic — AI Research & Development", template: "%s | Mardenic" },
  description: "Mardenic leads in AI research and development without compromising safety.",
  openGraph: {
    type: "website", siteName: "Mardenic",
    title: "Mardenic — AI Research & Development",
    description: "Mardenic leads in AI research and development without compromising safety.",
    url: siteUrl,
    images: [{ url: "/og", width: 1200, height: 630, alt: "Mardenic" }],
  },
  twitter: { card: "summary_large_image", images: ["/og"] },
  robots: { index: true, follow: true },
  icons: { icon: [{ url: "/favicon.svg", type: "image/svg+xml" }] },
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  themeColor: "#F7F6F3",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased overflow-x-hidden" style={{ background: "#F7F6F3", color: "#1A1917" }}>
        <a href="#main-content" className="skip-link">Skip to content</a>
        {children}
      </body>
    </html>
  );
}
