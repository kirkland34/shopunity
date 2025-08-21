import { STORES } from "@/data/stores";

export default function sitemap() {
  const base = "https://shopunity.vercel.app";
  const now = new Date().toISOString();

  const staticPages = ["", "/stores", "/contact", "/disclosure", "/privacy", "/terms"].map(
    (p) => ({ url: `${base}${p || "/"}`, lastModified: now })
  );
  const storePages = STORES.map((s) => ({
    url: `${base}/store/${s.slug}`,
    lastModified: now,
  }));

  return [...staticPages, ...storePages];
}
