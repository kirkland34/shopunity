'use client';

import Image from 'next/image';

const logos = [
  { name: 'Target', slug: 'target', href: '/store/target' },
  { name: 'Burlington', slug: 'burlington', href: '/store/burlington' },
  { name: 'Sephora', slug: 'sephora', href: '/store/sephora' },
  { name: 'Ulta', slug: 'ulta', href: '/store/ulta' },
];

export default function Home() {
  return (
    <>
      {/* Search */}
      <div className="search">
        <input
          placeholder="Search for products or stores"
          aria-label="Search"
        />
      </div>

      {/* Tabs */}
      <nav className="tabs" aria-label="Categories">
        <div className="tab tab-active">Fashion</div>
        <div className="tab">Beauty</div>
        <div className="tab">Home</div>
        <div className="tab">Tech</div>
      </nav>

      {/* Featured Stores */}
      <section className="section">
        <h2 className="h2">Featured Stores</h2>
        <ul className="logos">
          {logos.map((s) => (
            <li key={s.slug} className="logo">
              <a href={s.href}>
                <div className="logo-circle">{s.name[0]}</div>
                <div className="logo-name">{s.name}</div>
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* Price find banner */}
      <section className="section">
        <div className="card">
          <div className="flex-1 rounded-xl bg-[#1f2937] text-white p-6">
            <p className="kicker">WE FOUND THIS CHEAPER</p>
            <p>Women&apos;s Sneakers</p>
            <p className="brand">marshalls</p>
          </div>
          <Image
            src="https://images.unsplash.com/photo-1542291026-7eec2642ff?auto=format&fit=crop&w=800&q=80"
            alt="Sneaker"
            width={320}
            height={240}
            className="rounded-xl"
          />
        </div>
      </section>

      {/* Gift ideas */}
      <section className="section">
        <h2 className="h2">Valentine’s Day Gift Ideas</h2>
        <div className="card">
          <div className="flex-1 rounded-xl bg-[#fde2e4] aspect-[4/3]" />
          {/* NOTE: No onClick here—use a simple link so there are no event handler props */}
          <a className="btn" href="/stores">
            GET RECOMMENDATIONS
          </a>
        </div>
      </section>
    </>
  );
}
