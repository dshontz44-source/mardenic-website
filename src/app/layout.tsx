import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://mardenic.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Mardenic — AI Research & Development",
    template: "%s | Mardenic",
  },
  description:
    "Mardenic leads in AI research and development without compromising safety. Building intelligent systems that align with human values.",
  keywords: ["AI research", "artificial intelligence", "safety", "Korith", "Mardenic", "AI development"],
  authors: [{ name: "Mardenic" }],
  creator: "Mardenic",
  publisher: "Mardenic",
  category: "technology",
  openGraph: {
    type: "website",
    siteName: "Mardenic",
    title: "Mardenic — AI Research & Development",
    description:
      "Mardenic leads in AI research and development without compromising safety. Building intelligent systems that align with human values.",
    url: siteUrl,
    images: [
      {
        url: "/og",
        width: 1200,
        height: 630,
        alt: "Mardenic — AI Research & Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mardenic — AI Research & Development",
    description:
      "Mardenic leads in AI research and development without compromising safety.",
    images: ["/og"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icons/icon-16.svg", sizes: "16x16", type: "image/svg+xml" },
      { url: "/icons/icon-32.svg", sizes: "32x32", type: "image/svg+xml" },
      { url: "/icons/icon-192.svg", sizes: "192x192", type: "image/svg+xml" },
      { url: "/icons/icon-512.svg", sizes: "512x512", type: "image/svg+xml" },
    ],
    apple: [{ url: "/icons/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
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
      description:
        "Mardenic leads in AI research and development without compromising safety.",
      sameAs: [],
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${siteUrl}/#korith`,
      name: "Korith",
      applicationCategory: "ArtificialIntelligence",
      operatingSystem: "Cloud",
      description:
        "Korith is Mardenic's flagship AI product, currently in development.",
      publisher: { "@id": `${siteUrl}/#organization` },
      applicationStatus: "InDevelopment",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-black text-white antialiased overflow-x-hidden">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        {children}
        <Script
          src="https://va.vercel-scripts.com/v1/script.debug.js"
          strategy="afterInteractive"
          data-endpoint="/api/vitals"
        />
      </body>
    </html>
  );
}
