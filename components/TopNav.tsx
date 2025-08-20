"use client";

import Link from "next/link";
import { Bell } from "lucide-react";
import { usePathname } from "next/navigation";
import type { Route } from "next";

const tabs = [
  { label: "Home",    href: "/" as Route },
  { label: "Stores",  href: "/stores" as Route },
  { label: "Contact", href: "/contact" as Route },
] as const;

function Tab({
  href,
  active,
  children,
}: {
  href: Route;
  active: boolean;
  children: React.ReactNode;
}) {
  return <Link href={href} className={active ? "tab-active" : "tab"}>{children}</Link>;
}

export default function TopNav() {
  const pathname = usePathname();
  const isActive = (to: Route) =>
    to === "/" ? pathname === "/" : pathname.startsWith(to);

  return (
    <div>
      <header className="header">
        <div className="brand">SHOPUNITY</div>
        <Bell size={20} />
      </header>

      <nav className="tabs" aria-label="Top Navigation">
        {tabs.map((t) => (
          <Tab key={t.label} href={t.href} active={isActive(t.href)}>
            {t.label}
          </Tab>
        ))}
      </nav>
    </div>
  );
}
