// app/store/[slug]/page.tsx
import { notFound } from "next/navigation";
import { STORES } from "@/data/stores";

export default function StoreDetail({ params }: { params: { slug: string } }) {
  const store = STORES.find((s) => s.slug === params.slug);
  if (!store) return notFound();

  return (
    <div className="mobile-wrap">
      <h1 className="h2">{store.name}</h1>

      {/* IMPORTANT: outbound goes through /out/<slug> */}
      <a
        className="btn mt-3 inline-block"
        href={`/out/${store.slug}`}
        target="_blank"
        rel="noreferrer nofollow sponsored"
      >
        Visit {store.name}
      </a>

      <p className="mt-3 text-muted-foreground">{store.tagline}</p>
    </div>
  );
}

// optional: pre-render all store pages
export function generateStaticParams() {
  return STORES.map((s) => ({ slug: s.slug }));
}
