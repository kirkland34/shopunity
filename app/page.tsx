// app/page.tsx
export default function Home() {
  return (
    <>
      <h2 className="h2">ShopUnity v12 TEST</h2>

      {/* Search (GET -> /stores?query=...) */}
      <div className="search">
        <form action="/stores" method="GET">
          <input
            name="query"
            placeholder="Search for products or stores"
            aria-label="Search"
          />
        </form>
      </div>
    </>
  );
}
