"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bell } from "lucide-react";

const tabs = [
  { href: "/", label: "Home" },
  { href: "/stores", label: "Stores" },
  { href: "/contact", label: "Contact" },
];

export default function TopNav() {
  const pathname = usePathname() || "/";

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/70 pt-[env(safe-area-inset-top)] glass">
      <div className="mx-auto max-w-screen-sm px-4">
        <div className="flex h-14 items-center justify-between">
          <div className="font-extrabold tracking-wide text-xl">SHOPUNITY v8 🚀</div>

          <Bell className="h-5 w-5 text-neutral-600" />
        </div>

        <nav className="flex gap-6 -mb-px">
          {tabs.map((t) => {
            const active = pathname === t.href || pathname.startsWith(`${t.href}/`);
            return (
              <Link
                key={t.href}
                href={t.href}
                className={
                  active
                    ? "pb-3 border-b-2 border-black font-medium"
                    : "pb-3 text-neutral-500 hover:text-black"
                }
              >
                {t.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
