// app/stores/page.tsx
import Link from "next/link";
import { STORES } from "@/data/stores";

type Props = { searchParams?: { query?: string } };

export default function StoresPage({ searchParams }: Props) {
  const q = (searchParams?.query ?? "").toLowerCase().trim();

  const list = q
    ? STORES.filter((s) =>
        `${s.name} ${s.tagline}`.toLowerCase().includes(q)
      )
    : STORES;

  return (
    <div className="mobile-wrap">
      <h1 className="h2">Stores</h1>

      {list.length === 0 ? (
        <p>No matches for “{q}”.</p>
      ) : (
        <ul className="space-y-4 mt-4">
          {list.map((s) => (
            <li key={s.slug}>
              <Link href={`/store/${s.slug}`} className="block">
                <div className="tab">
                  <div className="text-base font-semibold">{s.name}</div>
                  <div className="text-sm text-muted-foreground">{s.tagline}</div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
