import WaitlistForm from "@/components/ui/WaitlistForm";
import { KORITH_CAPABILITIES } from "@/lib/constants";

export default function Korith() {
  return (
    <div className="flex flex-col flex-1">
      <div className="px-6 lg:px-16 py-14" style={{ background: "#FFFFFF", borderBottom: "1px solid #E4E2DD" }}>
        <div className="flex items-center gap-3 mb-6">
          <p className="text-xs tracking-[0.2em] uppercase font-medium" style={{ color: "#A8A59E" }}>Mardenic — Korith</p>
          <span className="text-xs font-medium px-2.5 py-1 rounded-sm" style={{ background: "#F0EFEC", border: "1px solid #E4E2DD", color: "#78756E" }}>
            In Development
          </span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight mb-5" style={{ color: "#1A1917" }}>
          Meet Korith.
        </h1>
        <p className="text-base leading-relaxed max-w-2xl mb-3" style={{ color: "#78756E" }}>
          Korith is Mardenic&apos;s first product — an AI system designed for enterprise and
          technical teams who need power without unpredictability. Built with
          alignment-first architecture and full decision traceability.
        </p>
        <p className="text-sm leading-relaxed max-w-xl" style={{ color: "#A8A59E" }}>
          We&apos;re in active development. We won&apos;t release it until it&apos;s ready.
        </p>
      </div>

      <div className="px-6 lg:px-16 py-12 grid grid-cols-1 md:grid-cols-2 gap-12" style={{ background: "#F7F6F3", flex: 1 }}>
        <div>
          <p className="text-xs tracking-[0.2em] uppercase font-medium mb-5" style={{ color: "#A8A59E" }}>Capabilities</p>
          <ul className="space-y-3">
            {KORITH_CAPABILITIES.map((cap) => (
              <li key={cap} className="flex gap-3 text-sm leading-relaxed" style={{ color: "#57554F" }}>
                <span style={{ color: "#CBC9C2" }} className="shrink-0 mt-0.5">—</span>
                {cap}
              </li>
            ))}
          </ul>
        </div>

        <div className="p-7 rounded-sm" style={{ background: "#FFFFFF", border: "1px solid #E4E2DD" }}>
          <h2 className="text-base font-semibold mb-1" style={{ color: "#1A1917" }}>Be first to know.</h2>
          <p className="text-sm leading-relaxed mb-6" style={{ color: "#78756E" }}>
            Join the waitlist for early access and updates from the team building Korith.
          </p>
          <WaitlistForm />
        </div>
      </div>
    </div>
  );
}
