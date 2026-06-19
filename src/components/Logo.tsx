"use client";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  showWordmark?: boolean;
}

export function LogoMark({ className = "", size = "md" }: { className?: string; size?: "sm" | "md" | "lg" }) {
  const sizes = { sm: 24, md: 32, lg: 48 };
  const s = sizes[size];

  return (
    <svg
      width={s}
      height={s}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      {/* Diamond frame */}
      <path
        d="M16 2 L30 16 L16 30 L2 16 Z"
        stroke="white"
        strokeWidth="1.5"
        fill="none"
        strokeLinejoin="round"
      />
      {/* M mark inside diamond */}
      <path
        d="M9 21 L9 11 L16 18 L23 11 L23 21"
        stroke="white"
        strokeWidth="1.75"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function LogoWordmark({ className = "" }: { className?: string }) {
  return (
    <svg
      width="108"
      height="16"
      viewBox="0 0 108 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Mardenic"
      className={className}
    >
      <text
        x="0"
        y="13"
        fontFamily="var(--font-geist-sans), Inter, system-ui, sans-serif"
        fontSize="13"
        fontWeight="600"
        letterSpacing="0.18em"
        fill="white"
      >
        MARDENIC
      </text>
    </svg>
  );
}

export default function Logo({ className = "", size = "md", showWordmark = true }: LogoProps) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <LogoMark size={size} />
      {showWordmark && (
        <span
          className="text-white font-semibold tracking-[0.18em] text-sm uppercase select-none"
          aria-label="Mardenic"
        >
          MARDENIC
        </span>
      )}
    </div>
  );
}
