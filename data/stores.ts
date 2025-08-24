// data/stores.ts
export type Store = {
  slug: string;
  name: string;
  url: string;
  tagline: string;
  logo?: string; // optional; LogoTile falls back to a letter
};

export const STORES: Store[] = [
  { slug: "amazon",    name: "Amazon",    url: "https://www.amazon.com",    tagline: "Everything store",            logo: "https://logo.clearbit.com/amazon.com" },
  { slug: "walmart",   name: "Walmart",   url: "https://www.walmart.com",   tagline: "Low prices, big selection",   logo: "https://logo.clearbit.com/walmart.com" },
  { slug: "target",    name: "Target",    url: "https://www.target.com",    tagline: "Everyday essentials",         logo: "https://logo.clearbit.com/target.com" },
  { slug: "homedepot", name: "Home Depot",url: "https://www.homedepot.com", tagline: "Tools & home improvement",     logo: "https://logo.clearbit.com/homedepot.com" },
  { slug: "lowes",     name: "Lowe’s",    url: "https://www.lowes.com",     tagline: "Home improvement",            logo: "https://logo.clearbit.com/lowes.com" },
  { slug: "sephora",   name: "Sephora",   url: "https://www.sephora.com",   tagline: "Beauty & skincare",           logo: "https://logo.clearbit.com/sephora.com" },
  { slug: "ulta",      name: "Ulta",      url: "https://www.ulta.com",      tagline: "Beauty & salon",              logo: "https://logo.clearbit.com/ulta.com" },
  { slug: "bestbuy",   name: "Best Buy",  url: "https://www.bestbuy.com",   tagline: "Electronics & appliances",    logo: "https://logo.clearbit.com/bestbuy.com" },
  { slug: "nike",      name: "Nike",      url: "https://www.nike.com",      tagline: "Shoes & apparel",             logo: "https://logo.clearbit.com/nike.com" },
  { slug: "adidas",    name: "adidas",    url: "https://www.adidas.com",    tagline: "Shoes & apparel",             logo: "https://logo.clearbit.com/adidas.com" },
  { slug: "microsoft", name: "Microsoft", url: "https://www.microsoft.com", tagline: "Surface, Xbox & more",         logo: "https://logo.clearbit.com/microsoft.com" },
  { slug: "macys",     name: "Macy’s",    url: "https://www.macys.com",     tagline: "Dept. store classics",        logo: "https://logo.clearbit.com/macys.com" },
  { slug: "nordstrom", name: "Nordstrom", url: "https://www.nordstrom.com", tagline: "Fashion & luxury",            logo: "https://logo.clearbit.com/nordstrom.com" },
  { slug: "kohls",     name: "Kohl’s",    url: "https://www.kohls.com",     tagline: "Apparel & home",              logo: "https://logo.clearbit.com/kohls.com" },
  { slug: "walgreens", name: "Walgreens", url: "https://www.walgreens.com", tagline: "Pharmacy & essentials",       logo: "https://logo.clearbit.com/walgreens.com" },
  { slug: "cvs",       name: "CVS",       url: "https://www.cvs.com",       tagline: "Pharmacy & health",           logo: "https://logo.clearbit.com/cvs.com" },
];
