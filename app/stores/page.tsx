import { STORES } from '@/data/stores';

export default function Stores() {
  return (
    <div>
      <h1>Stores</h1>
      <ul>
        {STORES.map(s => (
          <li key={s.slug} style={{margin:'12px 0'}}>
            <a href={`/store/${s.slug}`}><b>{s.name}</b></a>
            <div>{s.blurb}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
