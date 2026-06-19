import type { Metadata } from "next";
import Link from "next/link";
import { LogoMark } from "@/components/Logo";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Mardenic Privacy Policy — DRAFT, pending legal review.",
};

export default function PrivacyPage() {
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

        <h1 className="text-4xl font-bold mt-6 mb-3 tracking-tight">Privacy Policy</h1>
        <p className="text-white/40 text-sm mb-12">
          Effective Date: [To be determined] · Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
        </p>

        <div className="space-y-10 text-white/70 leading-relaxed text-sm">
          <div className="border border-amber-400/20 bg-amber-400/5 rounded-sm px-6 py-4 text-amber-200/70">
            <strong className="text-amber-200">Legal Draft Notice:</strong> This is a template document for review purposes only. It has not been reviewed by legal counsel. Mardenic will replace this with reviewed privacy terms prior to launch.
          </div>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">1. Information We Collect</h2>
            <p className="mb-3">We collect the following categories of information:</p>
            <ul className="list-disc list-inside space-y-2 text-white/60">
              <li><strong className="text-white/80">Contact information:</strong> Email address when you join the waitlist.</li>
              <li><strong className="text-white/80">Usage data:</strong> Page visits, referrers, and interaction data (only with your consent).</li>
              <li><strong className="text-white/80">Technical data:</strong> IP address, browser type, and device type for security and rate limiting.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">2. How We Use Your Information</h2>
            <ul className="list-disc list-inside space-y-2 text-white/60">
              <li>To send product updates and launch announcements for Korith</li>
              <li>To improve our website and services</li>
              <li>To protect against spam and abuse</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">3. Data Sharing</h2>
            <p>We do not sell, rent, or share your personal information with third parties for their marketing purposes. We use trusted service providers (e.g., email delivery) who process data only on our behalf under strict confidentiality agreements.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">4. Cookies</h2>
            <p>We use cookies for essential functionality and, with your consent, for analytics. See our <Link href="/legal/cookies" className="text-white underline underline-offset-2">Cookie Policy</Link> for details.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">5. Data Retention</h2>
            <p>We retain your email address for as long as you remain on our waitlist or as required by law. You may request deletion at any time.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">6. Your Rights</h2>
            <p>Depending on your jurisdiction, you may have the right to access, correct, delete, or port your personal data, and to object to or restrict processing. Contact us to exercise these rights.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">7. Security</h2>
            <p>We implement industry-standard security measures to protect your data. No method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">8. Contact</h2>
            <p>For privacy inquiries: <a href="mailto:privacy@mardenic.com" className="text-white underline underline-offset-2">privacy@mardenic.com</a></p>
          </section>
        </div>
      </div>
    </div>
  );
}
