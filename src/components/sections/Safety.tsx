import { SAFETY_PRINCIPLES } from "@/lib/constants";

export default function Safety() {
  return (
    <div className="flex flex-col flex-1">
      <div className="px-6 lg:px-16 py-14" style={{ background: "#FFFFFF", borderBottom: "1px solid #E4E2DD" }}>
        <p className="text-xs tracking-[0.2em] uppercase font-medium mb-6" style={{ color: "#A8A59E" }}>Mardenic — Safety</p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight mb-6" style={{ color: "#1A1917" }}>
          Safety isn&apos;t a policy.<br />It&apos;s the architecture.
        </h1>
        <p className="text-base leading-relaxed max-w-xl" style={{ color: "#78756E" }}>
          Safety isn&apos;t a checklist we run at the end of a project. It&apos;s an
          engineering constraint built into every layer — from research hypotheses to
          deployment decisions.
        </p>
      </div>

      <div style={{ background: "#F7F6F3" }}>
        {SAFETY_PRINCIPLES.map((principle, i) => (
          <div
            key={principle.title}
            className="px-6 lg:px-16 py-8 grid grid-cols-1 md:grid-cols-[48px_1fr_2fr] gap-4 md:gap-10"
            style={{ borderBottom: "1px solid #E4E2DD" }}
          >
            <span className="text-xs font-mono pt-1" style={{ color: "#CBC9C2" }}>0{i + 1}</span>
            <h2 className="text-base font-semibold" style={{ color: "#1A1917" }}>{principle.title}</h2>
            <p className="text-sm leading-relaxed" style={{ color: "#78756E" }}>{principle.body}</p>
          </div>
        ))}
      </div>

      <div className="px-6 lg:px-16 py-10" style={{ background: "#F0EFEC", flex: 1 }}>
        <p className="text-xs leading-relaxed max-w-lg" style={{ color: "#A8A59E" }}>
          Our safety commitments are not marketing language. If a capability fails our
          internal safety review, it does not ship — regardless of competitive pressure.
        </p>
      </div>
    </div>
  );
}
