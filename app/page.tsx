// app/page.tsx
import Link from "next/link";
import LogoTile from "@/components/LogoTile";
import { STORES } from "@/data/stores";

export const metadata = {
  title: "Shopunity",
  description:
    "Shopunity – a clean way to browse popular stores, search, and jump out to buy.",
};

const CATS = [
  { slug: "fashion", icon: "👗", label: "Fashion" },
  { slug: "beauty", icon: "💄", label: "Beauty" },
  { slug: "home", icon: "🏠", label: "Home" },
  { slug: "tech", icon: "💻", label: "Tech" },
];

export default function HomePage() {
  const featured = STORES.slice(0, 8);

  return (
    <div className="mx-auto max-w-screen-sm px-4 py-6">
      <h1 className="sr-only">Shopunity</h1>

      {/* Search */}
      <form action="/stores" method="GET" className="mb-3">
        <input
          name="q"
          placeholder="Search for products or stores"
          aria-label="Search"
          className="w-full rounded-full border border-stroke bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-black/10"
        />
      </form>

      {/* Category chips */}
      <div className="chips mb-3">
        {CATS.map((c) => (
          <Link key={c.slug} href={`/stores?tag=${c.slug}`} className="chip">
            <span className="mr-2">{c.icon}</span>
            {c.label}
          </Link>
        ))}
      </div>

      {/* Featured stores */}
      <div className="mb-1 flex items-center justify-between">
        <h2 className="h2">Featured Stores</h2>
        <Link
          href="/stores"
          className="text-sm text-neutral-600 hover:underline"
        >
          View all
        </Link>
      </div>

      <div className="tabs mb-4 no-scrollbar">
        {featured.map((s) => (
          <div key={s.slug} className="logo-tile-wrap">
            {/* ⬇️ THIS is what stops the alt text from appearing */}
            <LogoTile src={s.logo} letter={s.name[0]} />

            <div className="text-xs text-neutral-700 mt-2 text-center truncate w-[72px]">
              {s.name}
            </div>
          </div>
        ))}
      </div>

      {/* Promo card (placeholder art) */}
      <div className="promo mb-6 rounded-2xl border border-stroke bg-white p-4">
        <div className="text-xs text-neutral-500 mb-1">
          WE FOUND THIS CHEAPER
        </div>
        <div className="flex items-center gap-3">
          <div className="font-medium">Women’s Sneakers</div>
          <a
            href="/stores?q=sneakers"
            className="ml-auto rounded-full bg-blue-600 px-4 py-2 text-white text-sm font-medium hover:bg-blue-700"
          >
            Browse
          </a>
        </div>
        <div className="promo-art mt-3 h-28 rounded-xl bg-[#f3f6f8]" />
      </div>

      {/* Ideas card */}
      <div className="rounded-2xl border border-stroke bg-white p-4">
        <div className="mb-3 font-semibold">Valentine’s Day Gift Ideas</div>
        <div className="grid grid-cols-5 gap-3">
          <div className="col-span-3 h-28 rounded-xl bg-[#fde6ea]" />
          <Link
            href="/stores?q=gift"
            className="col-span-2 grid place-items-center rounded-xl bg-blue-600 text-white text-sm font-medium hover:bg-blue-700"
          >
            Get Recommendations
          </Link>
        </div>
      </div>
    </div>
  );
}
