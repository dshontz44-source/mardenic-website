import { RESEARCH_POSTS } from "@/lib/constants";

export default function Research() {
  return (
    <div className="flex flex-col flex-1">
      <div className="px-6 lg:px-16 py-14" style={{ background: "#FFFFFF", borderBottom: "1px solid #E4E2DD" }}>
        <p className="text-xs tracking-[0.2em] uppercase font-medium mb-6" style={{ color: "#A8A59E" }}>Mardenic — Research</p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight mb-6" style={{ color: "#1A1917" }}>
          We publish what we learn.
        </h1>
        <p className="text-base leading-relaxed max-w-xl" style={{ color: "#78756E" }}>
          Our first papers and notes are in review. Subscribe to the waitlist to get
          research updates when they publish.
        </p>
      </div>

      <div style={{ background: "#F7F6F3", flex: 1 }}>
        {RESEARCH_POSTS.map((post) => (
          <div
            key={post.title}
            className="px-6 lg:px-16 py-8 grid grid-cols-1 md:grid-cols-[140px_1fr_80px] gap-3 md:gap-10 items-start"
            style={{ borderBottom: "1px solid #E4E2DD" }}
          >
            <span className="text-xs tracking-[0.15em] uppercase" style={{ color: "#A8A59E" }}>{post.tag}</span>
            <div>
              <h2 className="text-base font-medium mb-2 leading-snug" style={{ color: "#1A1917" }}>{post.title}</h2>
              <p className="text-sm leading-relaxed" style={{ color: "#78756E" }}>{post.excerpt}</p>
            </div>
            <span className="text-xs md:text-right" style={{ color: "#A8A59E" }}>{post.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
