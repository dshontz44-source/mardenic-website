"use client";

interface LogoProps {
  className?: string;
}

export function LogoMark() {
  return null;
}

export default function Logo({ className = "" }: LogoProps) {
  return (
    <span
      className={`text-white font-semibold tracking-[0.18em] text-sm uppercase select-none ${className}`}
      aria-label="Mardenic"
    >
      MARDENIC
    </span>
  );
}
