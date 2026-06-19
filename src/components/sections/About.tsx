export default function About() {
  return (
    <div className="px-6 lg:px-16 py-14 max-w-4xl">
      <p className="text-xs tracking-[0.2em] uppercase text-gray-400 font-medium mb-8">What We Do</p>

      <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight leading-tight mb-8">
        Building the frontier, responsibly.
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
        <p className="text-base text-gray-500 leading-relaxed">
          Mardenic is an AI research and development company. We build intelligent systems
          that are capable, aligned, and trustworthy — starting from first principles
          rather than from the pressure to ship.
        </p>
        <p className="text-base text-gray-500 leading-relaxed">
          We believe the most powerful AI is also the most careful. Every system we
          develop is stress-tested against real-world failure modes before it reaches
          anyone outside our team.
        </p>
      </div>

      <div className="border-t border-gray-200 pt-10 grid grid-cols-3 gap-8 mb-16">
        {[
          { label: "Founded", value: "2024" },
          { label: "Focus", value: "Safety-First AI" },
          { label: "Stage", value: "Research" },
        ].map((item) => (
          <div key={item.label}>
            <p className="text-xs tracking-[0.15em] uppercase text-gray-400 mb-1">{item.label}</p>
            <p className="text-base font-medium text-gray-900">{item.value}</p>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-200 pt-10">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">For Companies & SaaS Teams</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
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
          ].map((f) => (
            <div key={f.title}>
              <h3 className="text-sm font-semibold text-gray-900 mb-2">{f.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
