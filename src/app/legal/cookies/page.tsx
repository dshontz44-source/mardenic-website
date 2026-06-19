import type { Metadata } from "next";
import Link from "next/link";
import { LogoMark } from "@/components/Logo";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Mardenic Cookie Policy — DRAFT, pending legal review.",
};

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-3xl mx-auto px-6 py-20 lg:py-32">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white mb-16 transition-colors"
        >
          ← Back to Mardenic
        </Link>

        <div className="flex items-center gap-3 mb-3">
          <LogoMark size="sm" />
          <span className="text-xs tracking-[0.25em] uppercase text-white/30">Mardenic</span>
        </div>

        <div className="mb-2 mt-8">
          <span className="inline-block bg-white/10 border border-white/20 text-white/60 text-xs tracking-widest uppercase px-3 py-1 rounded-sm">
            DRAFT — Pending Legal Review
          </span>
        </div>

        <h1 className="text-4xl font-bold mt-6 mb-3 tracking-tight">Cookie Policy</h1>
        <p className="text-white/40 text-sm mb-12">
          Effective Date: [To be determined] · Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
        </p>

        <div className="space-y-10 text-white/70 leading-relaxed text-sm">
          <div className="border border-amber-400/20 bg-amber-400/5 rounded-sm px-6 py-4 text-amber-200/70">
            <strong className="text-amber-200">Legal Draft Notice:</strong> Template document for review only.
          </div>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">What Are Cookies?</h2>
            <p>Cookies are small text files stored on your device when you visit a website. They help us provide a working, secure, and improved experience.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">Cookies We Use</h2>
            <div className="space-y-6">
              {[
                {
                  category: "Essential Cookies",
                  required: true,
                  description: "Required for the website to function. These include security tokens and your cookie consent preference. Cannot be disabled.",
                  examples: ["mardenic_cookie_consent — stores your consent choice"],
                },
                {
                  category: "Analytics Cookies",
                  required: false,
                  description: "Help us understand how visitors use our site. We use privacy-friendly analytics (Vercel Analytics) that do not track individuals across sites. Only set with your consent.",
                  examples: ["Vercel Analytics (no personal data stored)"],
                },
              ].map((cat) => (
                <div key={cat.category} className="border border-white/[0.08] rounded-sm p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="font-semibold text-white">{cat.category}</h3>
                    <span className={`text-xs px-2 py-0.5 rounded-sm ${cat.required ? "bg-white/10 text-white/50" : "bg-white/5 text-white/30"}`}>
                      {cat.required ? "Always Active" : "Consent Required"}
                    </span>
                  </div>
                  <p className="text-white/50 mb-3">{cat.description}</p>
                  <ul className="text-white/30 text-xs space-y-1 font-mono">
                    {cat.examples.map((ex) => <li key={ex}>· {ex}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">Managing Cookies</h2>
            <p>You can change your consent choice at any time by clearing your browser&apos;s localStorage or using your browser&apos;s cookie settings. Rejecting analytics cookies will not affect your ability to use the site.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">Contact</h2>
            <p>Cookie questions: <a href="mailto:privacy@mardenic.com" className="text-white underline underline-offset-2">privacy@mardenic.com</a></p>
          </section>
        </div>
      </div>
    </div>
  );
}
