export default function About() {
  return (
    <div className="flex flex-col flex-1">
      {/* Page header */}
      <div className="px-6 lg:px-16 py-14" style={{ background: "#FFFFFF", borderBottom: "1px solid #E4E2DD" }}>
        <p className="text-xs tracking-[0.2em] uppercase font-medium mb-6" style={{ color: "#A8A59E" }}>Mardenic — What We Do</p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight mb-6" style={{ color: "#1A1917" }}>
          Building the frontier, responsibly.
        </h1>
        <p className="text-base leading-relaxed max-w-xl" style={{ color: "#78756E" }}>
          Mardenic is an AI research and development company building intelligent systems
          that are capable, aligned, and trustworthy — starting from first principles.
        </p>
      </div>

      {/* Two-col description */}
      <div className="px-6 lg:px-16 py-12 grid grid-cols-1 md:grid-cols-2 gap-10" style={{ background: "#F7F6F3", borderBottom: "1px solid #E4E2DD" }}>
        <p className="text-base leading-relaxed" style={{ color: "#57554F" }}>
          We believe the most powerful AI is also the most careful. Every system we
          develop is stress-tested against real-world failure modes before it reaches
          anyone outside our team.
        </p>
        <p className="text-base leading-relaxed" style={{ color: "#57554F" }}>
          Our work spans foundational research, applied development, and the hard
          engineering of making safety constraints practical — not theoretical.
        </p>
      </div>

      {/* Stats */}
      <div className="px-6 lg:px-16 py-10 grid grid-cols-3 gap-8" style={{ background: "#FFFFFF", borderBottom: "1px solid #E4E2DD" }}>
        {[
          { label: "Founded", value: "2024" },
          { label: "Focus", value: "Safety-First AI" },
          { label: "Stage", value: "Research" },
        ].map((item) => (
          <div key={item.label}>
            <p className="text-xs tracking-[0.15em] uppercase mb-1.5" style={{ color: "#A8A59E" }}>{item.label}</p>
            <p className="text-base font-medium" style={{ color: "#1A1917" }}>{item.value}</p>
          </div>
        ))}
      </div>

      {/* For Companies */}
      <div className="px-6 lg:px-16 py-12" style={{ background: "#F0EFEC", flex: 1 }}>
        <p className="text-xs tracking-[0.2em] uppercase font-medium mb-8" style={{ color: "#A8A59E" }}>For Companies & SaaS Teams</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Enterprise-Ready Architecture", body: "Built for teams that need compliance, auditability, and data isolation from day one." },
            { title: "API-First Integration", body: "Drop Korith into your stack without a rebuild. Designed for SaaS teams who move fast." },
            { title: "Safety by Default", body: "Every deployment comes with Mardenic's alignment layer — so you inherit our safety guarantees." },
          ].map((f) => (
            <div key={f.title} className="p-6 rounded-sm" style={{ background: "#FFFFFF", border: "1px solid #E4E2DD" }}>
              <h3 className="text-sm font-semibold mb-2" style={{ color: "#1A1917" }}>{f.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "#78756E" }}>{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
