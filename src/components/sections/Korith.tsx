import WaitlistForm from "@/components/ui/WaitlistForm";
import { KORITH_CAPABILITIES } from "@/lib/constants";

export default function Korith() {
  return (
    <div className="px-6 lg:px-16 py-14 max-w-4xl">
      <div className="flex items-center gap-3 mb-8">
        <p className="text-xs tracking-[0.2em] uppercase text-gray-400 font-medium">Korith</p>
        <span className="text-xs font-medium text-gray-500 bg-gray-100 border border-gray-200 px-2.5 py-1 rounded-sm">
          In Development
        </span>
      </div>

      <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight leading-tight mb-6">
        Meet Korith.
      </h1>

      <p className="text-base text-gray-500 leading-relaxed max-w-2xl mb-4">
        Korith is Mardenic&apos;s first product — an AI system designed for enterprise and
        technical teams who need power without unpredictability. Built with
        alignment-first architecture and full decision traceability.
      </p>
      <p className="text-sm text-gray-400 leading-relaxed max-w-xl mb-12">
        Korith is in active development. We won&apos;t release it until it&apos;s ready.
      </p>

      <div className="border-t border-gray-200 pt-10 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-sm font-semibold text-gray-900 mb-5 tracking-wide uppercase text-xs">Capabilities</h2>
          <ul className="space-y-3">
            {KORITH_CAPABILITIES.map((cap) => (
              <li key={cap} className="flex gap-3 text-sm text-gray-500 leading-relaxed">
                <span className="text-gray-300 shrink-0 mt-0.5">—</span>
                {cap}
              </li>
            ))}
          </ul>
        </div>

        <div className="border border-gray-200 rounded-sm p-6 bg-gray-50">
          <h2 className="text-base font-semibold text-gray-900 mb-1">Be first to know.</h2>
          <p className="text-sm text-gray-500 mb-6 leading-relaxed">
            Join the waitlist to get early access and updates from the team building Korith.
          </p>
          <WaitlistForm />
        </div>
      </div>
    </div>
  );
}
