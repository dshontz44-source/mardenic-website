import type { Metadata } from "next";
import Link from "next/link";
import { LogoMark } from "@/components/Logo";

export const metadata: Metadata = {
  title: "Acceptable Use Policy",
  description: "Mardenic Acceptable Use & AI Use Policy — DRAFT, pending legal review.",
};

export default function AUPPage() {
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

        <h1 className="text-4xl font-bold mt-6 mb-3 tracking-tight">Acceptable Use & AI Use Policy</h1>
        <p className="text-white/40 text-sm mb-12">
          Effective Date: [To be determined] · Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
        </p>

        <div className="space-y-10 text-white/70 leading-relaxed text-sm">
          <div className="border border-amber-400/20 bg-amber-400/5 rounded-sm px-6 py-4 text-amber-200/70">
            <strong className="text-amber-200">Legal Draft Notice:</strong> Template document for review only.
          </div>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">Purpose</h2>
            <p>This Acceptable Use Policy ("AUP") governs all use of Mardenic&apos;s Services, including Korith. It is designed to protect users, third parties, and the integrity of our systems while upholding our safety-first mission.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">Prohibited Uses</h2>
            <p className="mb-4">You may not use Mardenic&apos;s Services to:</p>
            <div className="space-y-4">
              {[
                {
                  heading: "Harm or Harassment",
                  items: ["Generate content designed to harass, threaten, or demean individuals", "Create deepfakes or synthetic media for deceptive purposes"],
                },
                {
                  heading: "Illegal Activity",
                  items: ["Violate any applicable law or regulation", "Facilitate fraud, money laundering, or criminal activity"],
                },
                {
                  heading: "Dangerous Content",
                  items: ["Generate instructions for weapons, bioagents, or harmful substances", "Create content that exploits minors in any way"],
                },
                {
                  heading: "System Integrity",
                  items: ["Attempt to reverse-engineer, bypass, or manipulate our AI systems", "Use automated tools to scrape or extract model outputs at scale without permission"],
                },
                {
                  heading: "Misinformation",
                  items: ["Create or distribute large-scale disinformation or synthetic propaganda", "Impersonate individuals or organizations without authorization"],
                },
              ].map((group) => (
                <div key={group.heading} className="border-l-2 border-white/10 pl-5">
                  <h3 className="font-semibold text-white/80 mb-2">{group.heading}</h3>
                  <ul className="space-y-1.5 text-white/50">
                    {group.items.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="text-white/20 shrink-0">·</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">AI-Specific Guidelines</h2>
            <p className="mb-3">Because Mardenic builds AI systems, we hold ourselves and our users to additional standards:</p>
            <ul className="space-y-3 text-white/60">
              <li className="flex gap-2"><span className="text-white/20 shrink-0">·</span>AI outputs should not be presented as human-generated without disclosure where material.</li>
              <li className="flex gap-2"><span className="text-white/20 shrink-0">·</span>Users are responsible for reviewing AI-generated content before relying on it for consequential decisions.</li>
              <li className="flex gap-2"><span className="text-white/20 shrink-0">·</span>Do not attempt to jailbreak, prompt-inject, or manipulate Korith into violating its alignment constraints.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">Enforcement</h2>
            <p>Mardenic reserves the right to suspend or terminate access for violations of this AUP. We will cooperate with law enforcement as required.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">Reporting</h2>
            <p>Report violations to <a href="mailto:safety@mardenic.com" className="text-white underline underline-offset-2">safety@mardenic.com</a>.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
