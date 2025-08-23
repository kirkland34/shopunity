// app/store/[slug]/page.tsx
import { notFound } from "next/navigation";
import Link from "next/link";
import LogoTile from "@/components/LogoTile";
import { STORES } from "@/data/stores";

type Props = {
  params: { slug: string };
};

export function generateMetadata({ params }: Props) {
  const store = STORES.find((s) => s.slug === params.slug);
  const title = store ? `${store.name} · Shopunity` : "Store · Shopunity";
  return {
    title,
    description: store?.tagline ?? "Shop this retailer on Shopunity.",
  };
}

export default function StorePage({ params }: Props) {
  const store = STORES.find((s) => s.slug === params.slug);
  if (!store) return notFound();

  return (
    <div className="mx-auto max-w-screen-sm px-4 py-6">
      <div className="flex items-center gap-3">
        <LogoTile src={store.logo} letter={store.name[0]} />
        <div>
          <h1 className="text-xl font-extrabold tracking-wide">{store.name}</h1>
          {store.tagline && (
            <p className="text-sm text-neutral-600">{store.tagline}</p>
          )}
        </div>
      </div>

      <div className="mt-4 flex items-center gap-3">
        <a
          href={`/out/${store.slug}`}
          target="_blank"
          rel="noreferrer nofollow sponsored"
          className="rounded-full bg-blue-600 px-4 py-2 text-white text-sm font-medium hover:bg-blue-700"
        >
          Visit {store.name}
        </a>

        <Link
          href="/stores"
          className="text-sm text-neutral-600 hover:underline"
        >
          ← Back to stores
        </Link>
      </div>
    </div>
  );
}
