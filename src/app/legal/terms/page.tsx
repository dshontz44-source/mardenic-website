import type { Metadata } from "next";
import Link from "next/link";
import { LogoMark } from "@/components/Logo";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Mardenic Terms of Service — DRAFT, pending legal review.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-3xl mx-auto px-6 py-20 lg:py-32">
        {/* Back */}
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

        <h1 className="text-4xl font-bold mt-6 mb-3 tracking-tight">Terms of Service</h1>
        <p className="text-white/40 text-sm mb-12">
          Effective Date: [To be determined] · Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
        </p>

        <div className="prose prose-invert prose-sm max-w-none space-y-10 text-white/70 leading-relaxed">
          <div className="border border-amber-400/20 bg-amber-400/5 rounded-sm px-6 py-4 text-amber-200/70 text-sm">
            <strong className="text-amber-200">Legal Draft Notice:</strong> This is a template document generated for review purposes only. It has not been reviewed or approved by legal counsel and does not constitute legally binding terms. Mardenic will replace this with reviewed terms prior to product launch.
          </div>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
            <p>By accessing or using the Mardenic website, products, or services (collectively, "Services"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree, you may not use the Services.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">2. Description of Services</h2>
            <p>Mardenic provides AI research, development, and product services. Our current product, Korith, is in active development. Features and availability are subject to change without notice.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">3. Eligibility</h2>
            <p>You must be at least 18 years of age and capable of forming a legally binding contract to use our Services. By using the Services, you represent and warrant that you meet these requirements.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">4. User Conduct</h2>
            <p>You agree not to use the Services to:</p>
            <ul className="list-disc list-inside space-y-2 mt-3 text-white/60">
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe the rights of third parties</li>
              <li>Transmit harmful, offensive, or malicious content</li>
              <li>Attempt to circumvent security measures</li>
              <li>Use the Services for any purpose prohibited by our Acceptable Use Policy</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">5. Intellectual Property</h2>
            <p>All content, trademarks, and intellectual property on the Services are owned by Mardenic or its licensors. You may not reproduce, distribute, or create derivative works without express written permission.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">6. Disclaimer of Warranties</h2>
            <p>THE SERVICES ARE PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND. MARDENIC DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">7. Limitation of Liability</h2>
            <p>TO THE MAXIMUM EXTENT PERMITTED BY LAW, MARDENIC SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF THE SERVICES.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">8. Changes to Terms</h2>
            <p>Mardenic reserves the right to modify these Terms at any time. Continued use of the Services after changes constitutes acceptance of the revised Terms.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">9. Contact</h2>
            <p>For questions about these Terms, contact us at <a href="mailto:legal@mardenic.com" className="text-white underline underline-offset-2">legal@mardenic.com</a>.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
