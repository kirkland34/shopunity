"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Route } from "next";
import {
  Home as HomeIcon,
  Store,
  Package,
  ShoppingBag,
  User,
} from "lucide-react";

type Item = {
  href: Route;
  icon: React.ElementType;
  label: string;
};

const items: Item[] = [
  { href: "/", icon: HomeIcon, label: "Home" },
  { href: "/stores", icon: Store, label: "Stores" },
  { href: "/contact", icon: Package, label: "Contact" },
  // The last two can point to real pages later; for now they link to "/"
  { href: "/", icon: ShoppingBag, label: "Bag" },
  { href: "/", icon: User, label: "Account" },
];

export default function BottomNav() {
  const pathname = usePathname() || "/";

  return (
    <footer className="fixed bottom-0 inset-x-0 z-50 border-t bg-neutral-900 text-white">
      <nav className="mx-auto max-w-screen-sm">
        <ul className="grid grid-cols-5">
          {items.map(({ href, icon: Icon, label }) => {
            const active = pathname === href;
            return (
              <li key={href} className="flex">
                <Link
                  href={href}
                  className="flex-1 py-3 flex flex-col items-center gap-1"
                >
                  <Icon className={`h-5 w-5 ${active ? "" : "opacity-60"}`} />
                  <span className="sr-only">{label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </footer>
  );
}
