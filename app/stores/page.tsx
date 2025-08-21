// app/stores/page.tsx
import Link from "next/link";
import { STORES } from "@/data/stores";

type Props = { searchParams?: { query?: string } };

export default function StoresPage({ searchParams }: Props) {
  const q = (searchParams?.query ?? "").toLowerCase().trim();

  const items = q
    ? STORES.filter((s) =>
        [s.name, s.tagline].some((t) => t.toLowerCase().includes(q))
      )
    : STORES;

  return (
    <div className="mobile-wrap">
      <h1 className="h2">Stores</h1>

      {/* inline search (optional) */}
      <form action="/stores" method="GET" className="search mt-3">
        <input name="query" defaultValue={q} placeholder="Search stores…" />
      </form>

      <ul className="mt-4 space-y-4">
        {items.map((s) => (
          <li key={s.slug} className="card justify-between">
            <div>
              <Link href={`/store/${s.slug}`} className="block">
                <div className="font-semibold">{s.name}</div>
                <div className="text-muted-foreground">{s.tagline}</div>
              </Link>
            </div>

            {/* IMPORTANT: outbound goes through /out/<slug> */}
            <a
              className="btn"
              href={`/out/${s.slug}`}
              target="_blank"
              rel="noreferrer nofollow sponsored"
            >
              Visit
            </a>
          </li>
        ))}

        {!items.length && (
          <li className="text-muted-foreground">No matches.</li>
        )}
      </ul>
    </div>
  );
}
