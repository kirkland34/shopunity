import { getStore } from '@/data/stores';

export default function StorePage({ params }: { params: { slug: string } }) {
  const store = getStore(params.slug);
  if (!store) return <div>Store not found.</div>;
  return (
    <div>
      <h1>{store.name}</h1>
      <p><a href={store.url} target="_blank">Visit {store.name}</a></p>
      <p>{store.blurb}</p>
    </div>
  );
}
