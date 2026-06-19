import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://mardenic-website.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Mardenic — AI Research & Development",
    template: "%s | Mardenic",
  },
  description:
    "Mardenic leads in AI research and development without compromising safety. Building intelligent systems that align with human values.",
  keywords: ["AI research", "artificial intelligence", "safety", "Korith", "Mardenic"],
  authors: [{ name: "Mardenic" }],
  creator: "Mardenic",
  openGraph: {
    type: "website",
    siteName: "Mardenic",
    title: "Mardenic — AI Research & Development",
    description: "Mardenic leads in AI research and development without compromising safety.",
    url: siteUrl,
    images: [{ url: "/og", width: 1200, height: 630, alt: "Mardenic" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mardenic — AI Research & Development",
    description: "Mardenic leads in AI research and development without compromising safety.",
    images: ["/og"],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/icons/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Mardenic",
      url: siteUrl,
      description: "Mardenic leads in AI research and development without compromising safety.",
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${siteUrl}/#korith`,
      name: "Korith",
      applicationCategory: "ArtificialIntelligence",
      description: "Korith is Mardenic's flagship AI product, currently in development.",
      publisher: { "@id": `${siteUrl}/#organization` },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-white text-gray-900 antialiased overflow-x-hidden">
        <a href="#main-content" className="skip-link">Skip to content</a>
        {children}
      </body>
    </html>
  );
}
