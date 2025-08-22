import Link from "next/link";
import { STORES } from "@/data/stores";

const CATEGORIES = [
  { label: "Fashion", q: "fashion" },
  { label: "Beauty", q: "beauty" },
  { label: "Home", q: "home" },
  { label: "Tech", q: "tech" },
];

const FEATURED_SLUGS = [
  "target",
  "burlington",
  "sephora",
  "ulta",
  "amazon",
  "walmart",
  "homedepot",
  "nike",
];

export default function HomePage() {
  const featured = FEATURED_SLUGS
    .map(slug => STORES.find(s => s.slug === slug))
    .filter(Boolean) as typeof STORES;

  return (
    <div className="mobile-wrap">
      {/* Page title area (keeps things friendly & scannable) */}
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

      {/* Category chips */}
      <div className="chips mb-3">
        {CATEGORIES.map(c => (
          <Link
            key={c.q}
            className="chip"
            href={`/stores?query=${encodeURIComponent(c.q)}`}
          >
            {c.label}
          </Link>
        ))}
      </div>

      {/* Featured Stores */}
      <section className="section">
        <h3 className="text-lg font-extrabold mb-3">Featured Stores</h3>

        <div className="featured-scroller">
          {featured.map(s => (
            <div key={s.slug} className="store-card">
              <Link href={`/out/${s.slug}`} prefetch={false}>
                <span className="sr-only">Visit {s.name}</span>
                {/* Minimal logo placeholder (text) — swap for real logos later */}
                <div className="logo-lite">{s.name[0]}</div>
              </Link>
              <div className="store-name">{s.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Promo card (simple, classy) */}
      <div className="promo mb-4">
        <div className="promo-left">
          <div className="promo-kicker">We found this cheaper</div>
          <div className="promo-title">Women’s Sneakers</div>
          <Link
            href="/stores?query=sneakers"
            className="btn mt-2 inline-block"
          >
            Browse
          </Link>
        </div>
        <div className="promo-right" aria-hidden />
      </div>

      {/* Seasonal row */}
      <section className="section">
        <h3 className="text-lg font-extrabold mb-3">
          Valentine’s Day Gift Ideas
        </h3>

        <div className="card grid grid-cols-2 gap-3 items-center">
          <div className="gift-image" aria-hidden />
          <Link
            href="/stores?query=gifts"
            className="btn justify-center text-center"
          >
            Get Recommendations
          </Link>
        </div>
      </section>

      <div className="spacer" />
    </div>
  );
}
