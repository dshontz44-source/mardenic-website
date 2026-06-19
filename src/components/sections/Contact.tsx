import Link from "next/link";

export default function Contact() {
  return (
    <div className="px-6 lg:px-16 py-14 max-w-4xl">
      <p className="text-xs tracking-[0.2em] uppercase text-gray-400 font-medium mb-8">Contact</p>

      <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight leading-tight mb-6">
        Ready to build the future of AI — together?
      </h1>

      <p className="text-base text-gray-500 leading-relaxed max-w-xl mb-12">
        Whether you&apos;re a researcher, an enterprise team, or just curious — we&apos;d like to hear from you.
      </p>

      <div className="flex flex-col sm:flex-row gap-3 mb-16">
        <Link
          href="/korith"
          className="inline-flex items-center justify-center gap-2 text-sm font-medium bg-gray-900 text-white px-6 py-3 rounded-sm hover:bg-gray-700 transition-colors duration-200"
        >
          Join the Korith Waitlist →
        </Link>
        <a
          href="mailto:hello@mardenic.com"
          className="inline-flex items-center justify-center text-sm font-medium text-gray-600 border border-gray-300 px-6 py-3 rounded-sm hover:border-gray-500 hover:text-gray-900 transition-colors duration-200"
        >
          hello@mardenic.com
        </a>
      </div>

      <div className="border-t border-gray-200 pt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { label: "General Inquiries", email: "hello@mardenic.com" },
          { label: "Research & Partnerships", email: "research@mardenic.com" },
          { label: "Privacy & Legal", email: "legal@mardenic.com" },
        ].map((item) => (
          <div key={item.label}>
            <p className="text-xs tracking-[0.15em] uppercase text-gray-400 mb-2">{item.label}</p>
            <a
              href={`mailto:${item.email}`}
              className="text-sm text-gray-900 hover:text-gray-500 transition-colors"
            >
              {item.email}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
