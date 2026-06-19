import { SAFETY_PRINCIPLES } from "@/lib/constants";

export default function Safety() {
  return (
    <div className="px-6 lg:px-16 py-14 max-w-4xl">
      <p className="text-xs tracking-[0.2em] uppercase text-gray-400 font-medium mb-8">Safety</p>

      <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight leading-tight mb-6">
        Safety isn&apos;t a policy.<br />It&apos;s the architecture.
      </h1>

      <p className="text-base text-gray-500 leading-relaxed max-w-2xl mb-14">
        At Mardenic, safety isn&apos;t a checklist we run at the end of a project. It&apos;s an
        engineering constraint built into every layer — from research hypotheses to
        deployment decisions.
      </p>

      <div className="border-t border-gray-200">
        {SAFETY_PRINCIPLES.map((principle, i) => (
          <div
            key={principle.title}
            className="border-b border-gray-200 py-8 grid grid-cols-1 md:grid-cols-[40px_1fr_2fr] gap-4 md:gap-10"
          >
            <span className="text-xs text-gray-300 font-mono pt-1">0{i + 1}</span>
            <h2 className="text-base font-semibold text-gray-900">{principle.title}</h2>
            <p className="text-sm text-gray-500 leading-relaxed">{principle.body}</p>
          </div>
        ))}
      </div>

      <p className="text-xs text-gray-400 leading-relaxed max-w-lg mt-10">
        Our safety commitments are not marketing language. If a capability fails our
        internal safety review, it does not ship — regardless of competitive pressure.
      </p>
    </div>
  );
}
