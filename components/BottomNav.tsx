'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Heart, ShoppingBag, Package, User } from 'lucide-react';

function Item({
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
        'navbtn',
        active ? 'navbtn-active' : '',
      ].join(' ')}
    >
      {children}
    </Link>
  );
}

export default function BottomNav() {
  const pathname = usePathname();
  const is = (p: string) => (pathname === '/' && p === '/') || pathname.startsWith(p) && p !== '/';

  return (
    <nav className="bottomnav" aria-label="Bottom navigation">
      <Item href="/" active={is('/')}><Home size={18} /></Item>
      <Item href="/stores" active={is('/stores')}><Heart size={18} /></Item>
      <Item href="/stores" active={false}><ShoppingBag size={18} /></Item>
      <Item href="/contact" active={is('/contact')}><Package size={18} /></Item>
      <Item href="/api/whoami" active={is('/api/whoami')}><User size={18} /></Item>
    </nav>
  );
}
