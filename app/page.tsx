import Link from "next/link";
import { STORES } from "@/data/stores";
import {
  Shirt,
  Sparkles,
  Home as HomeIcon,
  Cpu,
  ArrowRight,
} from "lucide-react";

const CATEGORIES = [
  { label: "Fashion", q: "fashion", icon: Shirt },
  { label: "Beauty", q: "beauty", icon: Sparkles },
  { label: "Home", q: "home", icon: HomeIcon },
  { label: "Tech", q: "tech", icon: Cpu },
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
    .map((slug) => STORES.find((s) => s.slug === slug))
    .filter(Boolean) as typeof STORES;

  return (
    <div className="mobile-wrap page-grad">
      {/* Title */}
      <h2 className="h2 mb-2">ShopUnity</h2>

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

      {/* Category chips with icons */}
      <div className="chips fancy-chips mb-3">
        {CATEGORIES.map(({ label, q, icon: Icon }) => (
          <Link
            key={q}
            className="chip chip-icon"
            href={`/stores?query=${encodeURIComponent(q)}`}
          >
            <Icon className="chip-icn" size={16} />
            <span>{label}</span>
          </Link>
        ))}
      </div>

      {/* Featured Stores */}
      <section className="section">
        <div className="section-title">
          <h3 className="h3">Featured Stores</h3>
          <Link className="link-more" href="/stores">
            View all <ArrowRight size={16} />
          </Link>
        </div>

        <div className="featured-scroller">
          {featured.map((s) => (
            <div key={s.slug} className="store-tile">
              <Link href={`/out/${s.slug}`} prefetch={false}>
                <div className="logo-tile">
                  {/* Fallback initial – swap to real logo later */}
                  <span className="logo-letter">{s.name[0]}</span>
                </div>
                <div className="tile-name">{s.name}</div>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Promo card */}
      <div className="promo-v2 mb-4">
        <div className="promo-left">
          <div className="promo-kicker">We found this cheaper</div>
          <div className="promo-title">Women’s Sneakers</div>
          <Link href="/stores?query=sneakers" className="btn mt-2 inline-block">
            Browse
          </Link>
        </div>
        <div className="promo-art" aria-hidden />
      </div>

      {/* Seasonal row */}
      <section className="section">
        <div className="section-title">
          <h3 className="h3">Valentine’s Day Gift Ideas</h3>
          <Link className="link-more" href="/stores?query=gifts">
            See ideas <ArrowRight size={16} />
          </Link>
        </div>

        <div className="card grid grid-cols-2 gap-3 items-center">
          <div className="gift-image" aria-hidden />
          <Link href="/stores?query=gifts" className="btn text-center">
            Get Recommendations
          </Link>
        </div>
      </section>

      <div className="spacer" />
    </div>
  );
}
