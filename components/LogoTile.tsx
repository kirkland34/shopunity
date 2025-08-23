// components/LogoTile.tsx
"use client";

import { useState } from "react";

type Props = {
  src?: string;         // public path like "/logos/target.svg"
  letter: string;       // fallback letter, usually s.name[0]
  size?: "sm" | "md";   // optional, default "md"
};

const sizeClasses = {
  sm: "h-10 w-10 text-sm",
  md: "h-12 w-12 text-base",
};

export default function LogoTile({ src, letter, size = "md" }: Props) {
  const [broken, setBroken] = useState(false);
  const showFallback = broken || !src;

  return (
    <div
      className={`logo-tile grid place-items-center rounded-full border border-stroke bg-white ${sizeClasses[size]}`}
    >
      {showFallback ? (
        <span
          className="select-none font-semibold text-neutral-700"
          aria-hidden="true"
        >
          {letter?.toUpperCase()}
        </span>
      ) : (
        // alt text is intentionally empty; the label is shown next to this tile
        <img
          src={src}
          alt=""
          className="h-9 w-9 object-contain"
          onError={() => setBroken(true)}
          loading="lazy"
        />
      )}
    </div>
  );
}
