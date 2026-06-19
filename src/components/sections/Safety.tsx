import SectionReveal from "@/components/ui/SectionReveal";
import { SAFETY_PRINCIPLES } from "@/lib/constants";

export default function Safety() {
  return (
    <section
      id="safety"
      aria-labelledby="safety-heading"
      className="py-32 lg:py-44 bg-[#050505] border-t border-white/[0.06]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-20 lg:mb-28">
          <SectionReveal>
            <span className="text-xs tracking-[0.3em] uppercase text-white/30 font-medium mb-6 block">
              Safety First
            </span>
            <h2
              id="safety-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-white mb-8"
            >
              Safety isn&apos;t a policy.
              <br />
              <span className="text-white/40">It&apos;s the architecture.</span>
            </h2>
            <p className="text-lg text-white/50 leading-relaxed max-w-2xl">
              At Mardenic, safety isn&apos;t a checklist we run at the end of
              a project. It&apos;s an engineering constraint built into every
              layer — from research hypotheses to deployment decisions.
            </p>
          </SectionReveal>
        </div>

        {/* Principle cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/[0.06] rounded-sm overflow-hidden">
          {SAFETY_PRINCIPLES.map((principle, i) => (
            <SectionReveal key={principle.title} delay={i * 80}>
              <div className="bg-[#050505] p-8 lg:p-12 h-full group hover:bg-[#0c0c0c] transition-colors duration-300">
                <div className="mb-6">
                  <span className="text-xs tracking-[0.25em] uppercase text-white/20 font-medium">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 tracking-tight">
                  {principle.title}
                </h3>
                <p className="text-base text-white/50 leading-relaxed">
                  {principle.body}
                </p>
              </div>
            </SectionReveal>
          ))}
        </div>

        {/* Commitment footer */}
        <SectionReveal delay={400}>
          <div className="mt-16 lg:mt-20 pt-10 border-t border-white/[0.06]">
            <p className="text-sm text-white/30 max-w-xl leading-relaxed">
              Our safety commitments are not marketing language. They represent
              hard constraints on the capabilities we develop and deploy. If a
              capability fails our internal safety review, it does not ship —
              regardless of competitive pressure.
            </p>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
