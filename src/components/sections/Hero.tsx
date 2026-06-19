import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Hero"
      className="min-h-[80vh] flex flex-col justify-center px-6 lg:px-16 py-24 border-b border-gray-200"
    >
      <div className="max-w-3xl">
        <p className="text-xs tracking-[0.25em] uppercase text-gray-400 font-medium mb-8">
          AI Research & Development
        </p>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight text-gray-900 mb-8">
          Intelligence that<br />doesn&apos;t compromise.
        </h1>
        <p className="text-lg text-gray-500 max-w-xl leading-relaxed mb-10">
          Mardenic advances AI research and development with safety at the
          core — not as a constraint, but as the foundation.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/korith"
            className="inline-flex items-center justify-center gap-2 text-sm font-medium bg-gray-900 text-white px-6 py-3 rounded-sm hover:bg-gray-700 transition-colors duration-200"
          >
            Meet Korith →
          </Link>
          <Link
            href="/safety"
            className="inline-flex items-center justify-center text-sm font-medium text-gray-600 border border-gray-300 px-6 py-3 rounded-sm hover:border-gray-500 hover:text-gray-900 transition-colors duration-200"
          >
            Our approach to safety
          </Link>
        </div>
      </div>
    </section>
  );
}
