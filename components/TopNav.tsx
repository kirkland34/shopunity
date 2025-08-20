'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Store, Mail, Bell } from 'lucide-react';

function NavItem({
  href,
  active,
  children,
}: {
  href: string;
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={[
        'px-3 py-2 rounded-lg font-semibold',
        active ? 'text-text bg-pill border border-stroke' : 'text-muted hover:text-text',
      ].join(' ')}
    >
      {children}
    </Link>
  );
}

export default function TopNav() {
  const pathname = usePathname();
  const isActive = (p: string) => (pathname === '/' && p === '/') || pathname.startsWith(p) && p !== '/';

  return (
    <header className="header px-4">
      <div className="flex items-center gap-2">
        <span className="brand">SHOPUNITY</span>
      </div>

      <nav className="hidden sm:flex items-center gap-2">
        <NavItem href="/" active={isActive('/')}>
          <span className="inline-flex items-center gap-2"><Home size={18}/> Home</span>
        </NavItem>
        <NavItem href="/stores" active={isActive('/stores')}>
          <span className="inline-flex items-center gap-2"><Store size={18}/> Stores</span>
        </NavItem>
        <NavItem href="/contact" active={isActive('/contact')}>
          <span className="inline-flex items-center gap-2"><Mail size={18}/> Contact</span>
        </NavItem>
      </nav>

      <div className="flex items-center gap-3">
        <Bell aria-hidden className="text-muted" />
      </div>
    </header>
  );
}
