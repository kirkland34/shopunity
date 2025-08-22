// app/page.tsx
import Link from "next/link";
import { STORES } from "@/data/stores";

const FEATURED = ["target", "sephora", "ulta", "amazon"];

export default function HomePage() {
  const bySlug = new Map(STORES.map((s) => [s.slug, s]));
  const featured = FEATURED.map((slug) => bySlug.get(slug)).filter(Boolean) as typeof STORES;

  return (
    <div className="mobile-wrap">
      <h2 className="h2">ShopUnity</h2>

      {/* Search */}
      <div className="search">
        <form action="/stores" method="GET">
          <input
            name="query"
            placeholder="Search for products or stores"
            aria-label="Search"
          />
        </form>
      </div>

      {/* Chips */}
      <div className="chips">
        <Link className="chip" href="/stores?query=Fashion">👗 Fashion</Link>
        <Link className="chip" href="/stores?query=Beauty">💄 Beauty</Link>
        <Link className="chip" href="/stores?query=Home">🏠 Home</Link>
        <Link className="chip" href="/stores?query=Tech">💻 Tech</Link>
      </div>

      {/* Featured stores */}
      <section className="section">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-extrabold text-lg">Featured Stores</h3>
          <Link href="/stores" className="text-sm text-neutral-600 hover:underline">View all</Link>
        </div>

        <div className="flex gap-4 overflow-x-auto no-scrollbar px-1">
          {featured.map((s) => (
            <Link
              key={s.slug}
              href={`/out/${s.slug}`}
              className="grid place-items-center logo-card"
              aria-label={`Visit ${s.name}`}
            >
              <div className="logo-tile">
                {s.logo ? (
                  // plain <img> is fine here; Next/Image not required
                  <img
                    src={s.logo}
                    alt={`${s.name} logo`}
                    className="h-11 w-11 object-contain"
                    loading="lazy"
                  />
                ) : (
                  <span className="logo-letter">{s.name[0]}</span>
                )}
              </div>
              <div className="text-xs mt-2">{s.name}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Promo card (optional art via /public/promo/* files) */}
      <section className="section">
        <div className="promo flex items-center justify-between">
          <div>
            <div className="text-xs text-neutral-500">WE FOUND THIS CHEAPER</div>
            <div className="font-extrabold mt-1">Women’s Sneakers</div>
            <Link href="/stores?query=sneakers" className="btn mt-3 inline-block">Browse</Link>
          </div>
          <div className="promo-art bg-[url('/promo/sneaker.jpg')] bg-cover bg-center" />
        </div>
      </section>

      {/* Gift ideas */}
      <section className="section">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-extrabold text-lg">Valentine’s Day Gift Ideas</h3>
          <Link href="/stores?query=gifts" className="text-sm text-neutral-600 hover:underline">See ideas</Link>
        </div>
        <div className="promo flex items-center justify-between">
          <div className="promo-art bg-[url('/promo/gift.jpg')] bg-cover bg-center" />
          <Link href="/stores?query=recommendations" className="btn">Get Recommendations</Link>
        </div>
      </section>
    </div>
  );
}
