import SectionReveal from "@/components/ui/SectionReveal";
import WaitlistForm from "@/components/ui/WaitlistForm";
import { KORITH_CAPABILITIES } from "@/lib/constants";
import { CheckCircle } from "lucide-react";

export default function Korith() {
  return (
    <section
      id="korith"
      aria-labelledby="korith-heading"
      className="py-32 lg:py-44 bg-black border-t border-white/[0.06]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: product info */}
          <div>
            <SectionReveal>
              <div className="mb-6 flex items-center gap-3">
                <span className="inline-flex items-center gap-1.5 bg-white/8 border border-white/15 text-white/60 text-xs tracking-[0.2em] uppercase font-medium px-3 py-1.5 rounded-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/50 inline-block" />
                  In Development
                </span>
              </div>
              <h2
                id="korith-heading"
                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-white mb-6"
              >
                Meet Korith.
              </h2>
              <p className="text-lg text-white/50 leading-relaxed mb-8">
                Korith is Mardenic&apos;s first product — an AI system designed
                for enterprise and technical teams who need power without
                unpredictability. Built with alignment-first architecture and
                full decision traceability.
              </p>
              <p className="text-base text-white/40 leading-relaxed">
                Korith is currently in active development. We&apos;re building
                something we believe in deeply, and we won&apos;t release it
                until it&apos;s ready.
              </p>
            </SectionReveal>

            {/* Capabilities */}
            <SectionReveal delay={150}>
              <ul className="mt-10 space-y-4" aria-label="Korith capabilities">
                {KORITH_CAPABILITIES.map((cap) => (
                  <li key={cap} className="flex items-start gap-3 text-white/60 text-sm leading-relaxed">
                    <CheckCircle
                      size={16}
                      className="mt-0.5 shrink-0 text-white/30"
                      strokeWidth={1.5}
                    />
                    {cap}
                  </li>
                ))}
              </ul>
            </SectionReveal>
          </div>

          {/* Right: waitlist */}
          <div className="lg:pt-16">
            <SectionReveal delay={200}>
              <div className="border border-white/10 rounded-sm p-8 lg:p-12 bg-[#050505]">
                <h3 className="text-2xl font-semibold text-white mb-3 tracking-tight">
                  Be first to know.
                </h3>
                <p className="text-white/50 text-sm leading-relaxed mb-8">
                  Join the waitlist to get early access and product updates
                  directly from the team building Korith.
                </p>

                <WaitlistForm />

                {/* Social proof placeholder */}
                <div className="mt-8 pt-6 border-t border-white/[0.08]">
                  <p className="text-xs text-white/25 tracking-wide">
                    Join researchers, engineers, and enterprise teams already on the list.
                  </p>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
