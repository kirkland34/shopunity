"use client";
import Image from "next/image";

const logos = [
  { name: "Target", slug: "target", href: "/store/target" },
  { name: "Burlington", slug: "burlington", href: "/stores" },
  { name: "Sephora", slug: "sephora", href: "/stores" },
  { name: "Ulta", slug: "ulta", href: "/stores" },
];

export default function Home() {
  return (
    <>
      {/* Search */}
      <div className="search">
        <input placeholder="Search for products or stores" aria-label="Search" />
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
        <div className="chips">
          {logos.map((b) => (
            <a key={b.slug} className="chip" href={b.href} aria-label={b.name}>
              <div className="logo">
                <Image
                  src={`https://cdn.simpleicons.org/${b.slug}/111827`}
                  alt={`${b.name} logo`}
                  width={28}
                  height={28}
                />
              </div>
              <div>{b.name}</div>
            </a>
          ))}
        </div>

        {/* Promo */}
        <div className="promo">
          <div className="badge">
            WE FOUND<br />THIS CHEAPER<br />
            <span className="text-sm font-semibold">Women&apos;s Sneakers</span>
            <div className="mt-2 opacity-80 font-semibold">marshalls</div>
          </div>
          <div className="flex-1">
            <Image
              className="rounded-xl"
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop"
              alt="Sneaker"
              width={320}
              height={240}
            />
          </div>
        </div>
      </section>

      {/* Gift ideas */}
      <section className="section">
        <h2 className="h2">Valentine’s Day Gift Ideas</h2>
        <div className="card">
          <div className="flex-1 rounded-xl bg-[#fde2e4] aspect-[4/3]" />
          <button className="btn" onClick={() => alert("Recommendations coming soon!")}>
            GET RECOMMENDATIONS
          </button>
        </div>
      </section>
    </>
  );
}
