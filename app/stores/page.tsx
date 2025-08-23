// app/stores/page.tsx
import Link from "next/link";
import { STORES } from "@/data/stores";

export default function StoresPage({
  searchParams,
}: {
  searchParams?: { query?: string };
}) {
  const q = (searchParams?.query ?? "").toLowerCase().trim();
  const results = q
    ? STORES.filter(
        (s) =>
          s.name.toLowerCase().includes(q) ||
          s.tagline?.toLowerCase().includes(q)
      )
    : STORES;

  return (
    <div className="mobile-wrap">
      <h2 className="h2">Stores</h2>

      {/* Search */}
      <div className="search">
        <form>
          <input
            name="query"
            defaultValue={q}
            placeholder="Search stores…"
            aria-label="Search stores"
          />
        </form>
      </div>

      <ul className="grid gap-3 mt-3">
        {results.map((s) => (
          <li key={s.slug} className="store-card flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="logo-tile">
                {s.logo ? (
                  <img
                    src={s.logo}
                    alt={`${s.name} logo`}
                    className="h-9 w-9 object-contain"
                    loading="lazy"
                  />
                ) : (
                  <span className="logo-letter">{s.name[0]}</span>
                )}
              </div>
              <div>
                <div className="font-medium">{s.name}</div>
                {s.tagline && (
                  <div className="text-sm text-neutral-600">{s.tagline}</div>
                )}
              </div>
            </div>

            <Link
              href={`/out/${s.slug}`}
              className="btn"
              target="_blank"
              rel="noreferrer nofollow sponsored"
            >
              Visit
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
