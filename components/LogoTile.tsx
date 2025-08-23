"use client";

import { useState } from "react";

export default function LogoTile({
  src,
  letter,
  className = "",
}: {
  src?: string;
  letter: string;
  className?: string;
}) {
  const [broken, setBroken] = useState(false);

  return (
    <div className={`logo-tile ${className}`}>
      {!src || broken ? (
        <span className="logo-letter">{letter}</span>
      ) : (
        <img
          src={src}
          alt=""
          aria-hidden="true"
          className="h-9 w-9 object-contain p-1"
          loading="lazy"
          onError={() => setBroken(true)}
        />
      )}
    </div>
  );
}
