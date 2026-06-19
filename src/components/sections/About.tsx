import SectionReveal from "@/components/ui/SectionReveal";

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-32 lg:py-44 bg-black border-t border-white/[0.06]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: label + heading */}
          <div>
            <SectionReveal>
              <span className="text-xs tracking-[0.3em] uppercase text-white/30 font-medium mb-6 block">
                What We Do
              </span>
              <h2
                id="about-heading"
                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-white"
              >
                Building the
                <br />
                frontier,
                <br />
                <span className="text-white/40">responsibly.</span>
              </h2>
            </SectionReveal>
          </div>

          {/* Right: body copy */}
          <div className="space-y-6 lg:pt-16">
            <SectionReveal delay={120}>
              <p className="text-lg text-white/60 leading-relaxed">
                Mardenic is an AI research and development company. We build
                intelligent systems that are capable, aligned, and trustworthy
                — starting from first principles rather than from the pressure
                to ship.
              </p>
            </SectionReveal>
            <SectionReveal delay={220}>
              <p className="text-lg text-white/60 leading-relaxed">
                We believe the most powerful AI is also the most careful. Every
                system we develop is stress-tested against real-world failure
                modes before it reaches anyone outside our team.
              </p>
            </SectionReveal>
            <SectionReveal delay={320}>
              <p className="text-lg text-white/60 leading-relaxed">
                Our work spans foundational research, applied development, and
                the hard engineering of making safety constraints practical —
                not theoretical.
              </p>
            </SectionReveal>
            <SectionReveal delay={420}>
              <div className="pt-4 border-t border-white/10 mt-8">
                <dl className="grid grid-cols-3 gap-6">
                  {[
                    { label: "Founded", value: "2024" },
                    { label: "Focus", value: "Safety-First AI" },
                    { label: "Stage", value: "Research" },
                  ].map((item) => (
                    <div key={item.label}>
                      <dt className="text-xs tracking-widest uppercase text-white/25 mb-1">
                        {item.label}
                      </dt>
                      <dd className="text-base font-medium text-white/80">
                        {item.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </SectionReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
