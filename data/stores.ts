// data/stores.ts
export type Store = {
  slug: string;
  name: string;
  url: string;
  tagline: string;
};

export const STORES: Store[] = [
  { slug: "target",   name: "Target",   url: "https://www.target.com",   tagline: "Everyday essentials & more" },
  { slug: "best-buy", name: "Best Buy", url: "https://www.bestbuy.com",  tagline: "Electronics & appliances" },

  // ← add as many as you like (you can reach 200; it’s fine)
  { slug: "walmart",   name: "Walmart",   url: "https://www.walmart.com",   tagline: "Low prices, big selection" },
  { slug: "amazon",    name: "Amazon",    url: "https://www.amazon.com",    tagline: "Everything store" },
  { slug: "costco",    name: "Costco",    url: "https://www.costco.com",    tagline: "Warehouse deals" },
  { slug: "macys",     name: "Macy's",    url: "https://www.macys.com",     tagline: "Dept. store classics" },
  { slug: "sephora",   name: "Sephora",   url: "https://www.sephora.com",   tagline: "Beauty & skincare" },
  { slug: "ulta",      name: "Ulta",      url: "https://www.ulta.com",      tagline: "Beauty & salon" },
  { slug: "homedepot", name: "Home Depot",url: "https://www.homedepot.com", tagline: "Tools & home improvement" },
  { slug: "lowes",     name: "Lowe’s",    url: "https://www.lowes.com",     tagline: "Home improvement" },
  { slug: "kroger",    name: "Kroger",    url: "https://www.kroger.com",    tagline: "Groceries" },
  { slug: "wholefoods",name: "Whole Foods",url:"https://www.wholefoodsmarket.com",tagline:"Organic groceries" },
  { slug: "walgreens", name: "Walgreens", url: "https://www.walgreens.com", tagline: "Pharmacy & essentials" },
  { slug: "cvs",       name: "CVS",       url: "https://www.cvs.com",       tagline: "Pharmacy & health" },
  { slug: "nike",      name: "Nike",      url: "https://www.nike.com",      tagline: "Shoes & apparel" },
  { slug: "adidas",    name: "adidas",    url: "https://www.adidas.com",    tagline: "Shoes & apparel" },
  { slug: "apple",     name: "Apple",     url: "https://www.apple.com",     tagline: "Devices & accessories" },
  { slug: "microsoft", name: "Microsoft", url: "https://www.microsoft.com", tagline: "Surface, Xbox & more" },
  { slug: "nordstrom", name: "Nordstrom", url: "https://www.nordstrom.com", tagline: "Fashion & luxury" },
  { slug: "kohls",     name: "Kohl’s",    url: "https://www.kohls.com",     tagline: "Apparel & home" },
];
