import { STORES, searchStores } from "@/data/stores";

export default function Stores({
  searchParams,
}: {
  searchParams?: { query?: string; q?: string };
}) {
  const q = (searchParams?.query ?? searchParams?.q ?? "").toString();
  const results = q ? searchStores(q) : STORES;

  return (
    <div className="space-y-4">
      <h1>Stores</h1>

      {/* Inline search (keeps the query in the box) */}
      <form action="/stores" method="GET" className="search">
        <input name="query" defaultValue={q} placeholder="Search stores…" />
      </form>

      {q && (
        <div className="text-sm text-muted">
          Showing {results.length} result{results.length === 1 ? "" : "s"} for <b>{q}</b>{" "}
          <a className="underline" href="/stores">clear</a>
        </div>
      )}

      <ul>
        {results.map((s) => (
          <li key={s.slug} className="card flex items-center gap-4" style={{ margin: "12px 0" }}>
            <div className="flex-1">
              <div className="font-semibold">{s.name}</div>
              {s.blurb && <div className="text-muted text-sm">{s.blurb}</div>}
              <div className="text-sm mt-1">
                <a className="underline" href={`/store/${s.slug}`}>Details</a>
              </div>
            </div>
            <a className="btn" href={s.url} target="_blank" rel="noreferrer">Visit</a>
          </li>
        ))}
      </ul>

      {!results.length && (
        <div className="text-muted">No stores match. <a href="/stores" className="underline">Reset</a></div>
      )}
    </div>
  );
}
