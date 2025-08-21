export type Store = { slug: string; name: string; url: string; blurb?: string };

export const STORES: Store[] = [
  { slug: "target",     name: "Target",      url: "https://www.target.com",     blurb: "Everyday essentials & more" },
  { slug: "best-buy",   name: "Best Buy",    url: "https://www.bestbuy.com",    blurb: "Electronics & appliances" },
  { slug: "walmart",    name: "Walmart",     url: "https://www.walmart.com",    blurb: "Low prices & groceries" },
  { slug: "costco",     name: "Costco",      url: "https://www.costco.com",     blurb: "Warehouse club deals" },
  { slug: "amazon",     name: "Amazon",      url: "https://www.amazon.com",     blurb: "The everything store" },
  { slug: "sephora",    name: "Sephora",     url: "https://www.sephora.com",    blurb: "Beauty & cosmetics" },
  { slug: "ulta",       name: "Ulta Beauty", url: "https://www.ulta.com",       blurb: "Makeup & skincare" },
  { slug: "burlington", name: "Burlington",  url: "https://www.burlington.com", blurb: "Off-price fashion" },
  { slug: "marshalls",  name: "Marshalls",   url: "https://www.marshalls.com",  blurb: "Off-price finds" },
  { slug: "tj-maxx",    name: "TJ Maxx",     url: "https://tjmaxx.tjx.com",     blurb: "Designer deals" },
];

export const getStore = (slug: string) => STORES.find(s => s.slug === slug);

export const searchStores = (q: string) => {
  const term = (q || "").trim().toLowerCase();
  if (!term) return STORES;
  return STORES.filter(s =>
    s.name.toLowerCase().includes(term) ||
    s.slug.toLowerCase().includes(term) ||
    (s.blurb?.toLowerCase().includes(term) ?? false)
  );
};
