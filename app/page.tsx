// NOTE: Do NOT add "use client" here.
// This page stays a Server Component. The interactive button lives
// in a tiny Client Component (RecommendButton).

import Image from "next/image";
import RecommendButton from "@/components/RecommendButton";

const logos = [
  { name: "Target", slug: "target", href: "/store/target" },
  { name: "Burlington", slug: "burlington", href: "/store/burlington" },
  { name: "Sephora", slug: "sephora", href: "/store/sephora" },
  { name: "Ulta", slug: "ulta", href: "/store/ulta" },
];

export default function Home() {
  return (
    <main className="container">
      <h1>ShopUnity</h1>

      {/* Search */}
      <div className="search">
        <input
          placeholder="Search for products or stores"
          aria-label="Search"
        />
      </div>

      {/* Example hero / image */}
      <section className="section">
        <div className="card">
          <div className="flex-1 rounded-xl bg-[#fde2e4] aspect-[4/3]" />
        </div>
      </section>

      {/* Gift ideas with client button */}
      <section className="section">
        <h2 className="h2">Valentine’s Day Gift Ideas</h2>
        <div className="card">
          {/* Put anything you like here… */}
          <RecommendButton />
        </div>
      </section>
    </main>
  );
}
