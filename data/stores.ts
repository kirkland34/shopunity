// data/stores.ts
export type Store = {
  slug: string;
  name: string;
  url: string;
  tagline: string;
};

export const STORES: Store[] = [
  // Core, high-coverage merchants
  { slug: "amazon",     name: "Amazon",      url: "https://www.amazon.com",      tagline: "Everything store" },
  { slug: "walmart",    name: "Walmart",     url: "https://www.walmart.com",     tagline: "Low prices, big selection" },
  { slug: "target",     name: "Target",      url: "https://www.target.com",      tagline: "Everyday essentials & more" },
  { slug: "home-depot", name: "Home Depot",  url: "https://www.homedepot.com",   tagline: "Tools & home improvement" },
  { slug: "lowes",      name: "Lowe’s",      url: "https://www.lowes.com",       tagline: "Home improvement" },
  { slug: "nike",       name: "Nike",        url: "https://www.nike.com",        tagline: "Shoes & apparel" },
  { slug: "adidas",     name: "adidas",      url: "https://www.adidas.com",      tagline: "Shoes & apparel" },
  { slug: "microsoft",  name: "Microsoft",   url: "https://www.microsoft.com",   tagline: "Surface, Xbox & more" },
  { slug: "macys",      name: "Macy's",      url: "https://www.macys.com",       tagline: "Dept. store classics" },
  { slug: "sephora",    name: "Sephora",     url: "https://www.sephora.com",     tagline: "Beauty & skincare" },
  { slug: "ulta",       name: "Ulta",        url: "https://www.ulta.com",        tagline: "Beauty & salon" },
  { slug: "nordstrom",  name: "Nordstrom",   url: "https://www.nordstrom.com",   tagline: "Fashion & luxury" },
  { slug: "kohls",      name: "Kohl’s",      url: "https://www.kohls.com",       tagline: "Apparel & home" },
  { slug: "walgreens",  name: "Walgreens",   url: "https://www.walgreens.com",   tagline: "Pharmacy & essentials" },
  { slug: "cvs",        name: "CVS",         url: "https://www.cvs.com",         tagline: "Pharmacy & health" },
];

export const getStore = (slug: string) => STORES.find(s => s.slug === slug);
