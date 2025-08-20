"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Heart, ShoppingBag, Package, User } from "lucide-react";
import type { Route } from "next";

type Item = {
  href: Route;
  icon: React.ReactNode;
  label: string;
};

const items = [
  { href: "/" as Route,        icon: <Home size={20} />,        label: "Home" },
  { href: "/stores" as Route,  icon: <Heart size={20} />,       label: "Stores" },
  { href: "/contact" as Route, icon: <ShoppingBag size={20} />, label: "Contact" },
  { href: "/stores" as Route,  icon: <Package size={20} />,     label: "Orders" },
  { href: "/contact" as Route, icon: <User size={20} />,        label: "Account" },
] as const;

function NavBtn({
  href,
  active,
  children,
}: {
  href: Route;
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} className={`navbtn ${active ? "navbtn-active" : ""}`}>
      {children}
    </Link>
  );
}

export default function BottomNav() {
  const pathname = usePathname();
  const isActive = (to: Route) =>
    to === "/" ? pathname === "/" : pathname.startsWith(to);

  return (
    <nav className="bottomnav">
      {items.map((i, idx) => (
        <NavBtn key={idx} href={i.href} active={isActive(i.href)}>
          {i.icon}
        </NavBtn>
      ))}
    </nav>
  );
}
