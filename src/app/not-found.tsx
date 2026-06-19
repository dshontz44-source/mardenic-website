import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-6 text-center">
      <p className="text-xs tracking-[0.3em] uppercase text-white/25 mb-6">404</p>
      <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 tracking-tight">
        Nothing here.
      </h1>
      <p className="text-white/40 text-lg mb-12 max-w-sm leading-relaxed">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="text-sm font-medium bg-white text-black px-8 py-3 rounded-sm hover:bg-white/90 transition-colors duration-200"
      >
        Back to home
      </Link>
    </div>
  );
}
