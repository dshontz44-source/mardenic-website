import { RESEARCH_POSTS } from "@/lib/constants";

export default function Research() {
  return (
    <div className="px-6 lg:px-16 py-14 max-w-4xl">
      <p className="text-xs tracking-[0.2em] uppercase text-gray-400 font-medium mb-8">Research</p>

      <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight leading-tight mb-6">
        We publish what we learn.
      </h1>

      <p className="text-base text-gray-500 leading-relaxed max-w-xl mb-14">
        Our first papers and notes are in review. Subscribe to the waitlist to get
        research updates when they publish.
      </p>

      <div className="border-t border-gray-200">
        {RESEARCH_POSTS.map((post) => (
          <div
            key={post.title}
            className="border-b border-gray-200 py-8 grid grid-cols-1 md:grid-cols-[140px_1fr_80px] gap-3 md:gap-10 items-start"
          >
            <span className="text-xs tracking-[0.15em] uppercase text-gray-400">{post.tag}</span>
            <div>
              <h2 className="text-base font-medium text-gray-900 mb-2 leading-snug">{post.title}</h2>
              <p className="text-sm text-gray-500 leading-relaxed">{post.excerpt}</p>
            </div>
            <span className="text-xs text-gray-400 md:text-right">{post.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
