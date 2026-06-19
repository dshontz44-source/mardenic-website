import SectionReveal from "@/components/ui/SectionReveal";

const FEATURES = [
  {
    title: "Enterprise-Ready Architecture",
    body: "Built for teams that need compliance, auditability, and data isolation from day one.",
  },
  {
    title: "API-First Integration",
    body: "Drop Korith into your stack without a rebuild. Designed for SaaS teams who move fast.",
  },
  {
    title: "Safety by Default",
    body: "Every deployment comes with Mardenic's alignment layer — so you inherit our safety guarantees.",
  },
];

export default function ForCompanies() {
  return (
    <section
      id="companies"
      aria-labelledby="companies-heading"
      className="py-32 lg:py-44 bg-white border-t border-black/10"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left */}
          <div>
            <SectionReveal>
              <span className="text-xs tracking-[0.3em] uppercase text-black/30 font-medium mb-6 block">
                For Companies & SaaS Teams
              </span>
              <h2
                id="companies-heading"
                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-black mb-8"
              >
                AI you can
                <br />
                actually deploy.
              </h2>
              <p className="text-lg text-black/50 leading-relaxed mb-8">
                Mardenic builds for teams that can&apos;t afford surprises.
                Whether you&apos;re building a product or running critical
                infrastructure, Korith is designed to be predictable,
                auditable, and safe to put in production.
              </p>
              <div>
                <a
                  href="#korith"
                  className="inline-flex items-center gap-2 text-sm font-medium text-black border border-black/20 px-6 py-3 rounded-sm hover:bg-black hover:text-white hover:border-black transition-all duration-200"
                >
                  Join the partner waitlist →
                </a>
              </div>
            </SectionReveal>
          </div>

          {/* Right: feature list */}
          <div className="space-y-8">
            {FEATURES.map((f, i) => (
              <SectionReveal key={f.title} delay={i * 100}>
                <div className="flex gap-5 items-start">
                  <div className="mt-1 shrink-0 w-6 h-6 rounded-sm border border-black/15 flex items-center justify-center">
                    <span className="text-xs font-semibold text-black/40">
                      {i + 1}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-black mb-2">
                      {f.title}
                    </h3>
                    <p className="text-sm text-black/50 leading-relaxed">{f.body}</p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
