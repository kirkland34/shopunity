// app/stores/page.tsx
import Link from "next/link";
import LogoTile from "@/components/LogoTile";
import { STORES } from "@/data/stores";

type Props = {
  searchParams?: { q?: string; query?: string };
};

export const metadata = {
  title: "Stores · Shopunity",
  description: "Browse all merchants available on Shopunity.",
};

export default function StoresPage({ searchParams }: Props) {
  // we accept either ?q= or ?query= (both will work)
  const q = (searchParams?.q || searchParams?.query || "")
    .toString()
    .trim()
    .toLowerCase();

  const filtered =
    q.length === 0
      ? STORES
      : STORES.filter((s) =>
          [s.name, s.tagline, s.slug].some((v) =>
            v?.toLowerCase().includes(q)
          )
        );

  return (
    <div className="mx-auto max-w-screen-sm px-4 py-6">
      <h1 className="text-xl font-extrabold tracking-wide mb-3">Stores</h1>

      <form action="/stores" method="GET" className="mb-4">
        <input
          name="q"
          defaultValue={q}
          placeholder="Search for products or stores"
          aria-label="Search"
          className="w-full rounded-full border border-stroke bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-black/10"
        />
      </form>

      <div className="text-sm text-neutral-600 mb-4">
        Showing <span className="font-medium">{filtered.length}</span> of{" "}
        <span className="font-medium">{STORES.length}</span> stores
      </div>

      {filtered.length === 0 ? (
        <div className="text-neutral-600">
          No stores match “<span className="font-medium">{q}</span>”.
        </div>
      ) : (
        <ul className="grid grid-cols-1 gap-3">
          {filtered.map((s) => (
            <li key={s.slug}>
              <div className="flex items-center gap-3 rounded-xl border border-stroke bg-white p-3 hover:shadow-sm transition-shadow">
                <LogoTile src={s.logo} letter={s.name[0]} />

                <div className="min-w-0 flex-1">
                  <Link
                    href={`/store/${s.slug}`}
                    className="font-medium hover:underline truncate block"
                  >
                    {s.name}
                  </Link>
                  {s.tagline && (
                    <div className="text-sm text-neutral-600 truncate">
                      {s.tagline}
                    </div>
                  )}
                </div>

                <a
                  href={`/out/${s.slug}`}
                  target="_blank"
                  rel="noreferrer nofollow sponsored"
                  className="shrink-0 rounded-full bg-blue-600 px-4 py-2 text-white text-sm font-medium hover:bg-blue-700"
                >
                  Visit
                </a>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
