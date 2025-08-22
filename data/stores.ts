// data/stores.ts

// Optional logo field for nicer tiles
export type Store = {
  slug: string;          // used in /stores and /out/{slug}
  name: string;          // human label
  url: string;           // canonical retailer URL
  tagline?: string;      // short description shown in list
  logo?: string;         // logo URL (CDN or /public)
};

// Master list
export const STORES: Store[] = [
  // General / Big box
  {
    slug: "amazon",
    name: "Amazon",
    url: "https://www.amazon.com",
    tagline: "Everything store",
    logo: "https://logo.clearbit.com/amazon.com",
  },
  {
    slug: "walmart",
    name: "Walmart",
    url: "https://www.walmart.com",
    tagline: "Low prices, big selection",
    logo: "https://logo.clearbit.com/walmart.com",
  },
  {
    slug: "target",
    name: "Target",
    url: "https://www.target.com",
    tagline: "Everyday essentials & more",
    logo: "https://logo.clearbit.com/target.com",
  },
  {
    slug: "bestbuy",
    name: "Best Buy",
    url: "https://www.bestbuy.com",
    tagline: "Electronics & appliances",
    logo: "https://logo.clearbit.com/bestbuy.com",
  },

  // Home improvement
  {
    slug: "homedepot",
    name: "Home Depot",
    url: "https://www.homedepot.com",
    tagline: "Tools & home improvement",
    logo: "https://logo.clearbit.com/homedepot.com",
  },
  {
    slug: "lowes",
    name: "Lowe’s",
    url: "https://www.lowes.com",
    tagline: "Home improvement",
    logo: "https://logo.clearbit.com/lowes.com",
  },

  // Beauty
  {
    slug: "sephora",
    name: "Sephora",
    url: "https://www.sephora.com",
    tagline: "Beauty & skincare",
    logo: "https://logo.clearbit.com/sephora.com",
  },
  {
    slug: "ulta",
    name: "Ulta",
    url: "https://www.ulta.com",
    tagline: "Beauty & salon",
    logo: "https://logo.clearbit.com/ulta.com",
  },

  // Fashion / Shoes
  {
    slug: "nike",
    name: "Nike",
    url: "https://www.nike.com",
    tagline: "Shoes & apparel",
    logo: "https://logo.clearbit.com/nike.com",
  },
  {
    slug: "adidas",
    name: "adidas",
    url: "https://www.adidas.com",
    tagline: "Shoes & apparel",
    logo: "https://logo.clearbit.com/adidas.com",
  },
  {
    slug: "macys",
    name: "Macy’s",
    url: "https://www.macys.com",
    tagline: "Dept. store classics",
    logo: "https://logo.clearbit.com/macys.com",
  },
  {
    slug: "nordstrom",
    name: "Nordstrom",
    url: "https://www.nordstrom.com",
    tagline: "Fashion & luxury",
    logo: "https://logo.clearbit.com/nordstrom.com",
  },
  {
    slug: "kohls",
    name: "Kohl’s",
    url: "https://www.kohls.com",
    tagline: "Apparel & home",
    logo: "https://logo.clearbit.com/kohls.com",
  },

  // Pharma / Health
  {
    slug: "walgreens",
    name: "Walgreens",
    url: "https://www.walgreens.com",
    tagline: "Pharmacy & essentials",
    logo: "https://logo.clearbit.com/walgreens.com",
  },
  {
    slug: "cvs",
    name: "CVS",
    url: "https://www.cvs.com",
    tagline: "Pharmacy & health",
    logo: "https://logo.clearbit.com/cvs.com",
  },

  // Grocery
  {
    slug: "kroger",
    name: "Kroger",
    url: "https://www.kroger.com",
    tagline: "Groceries",
    logo: "https://logo.clearbit.com/kroger.com",
  },
  {
    slug: "wholefoods",
    name: "Whole Foods",
    url: "https://www.wholefoodsmarket.com",
    tagline: "Organic groceries",
    logo: "https://logo.clearbit.com/wholefoodsmarket.com",
  },

  // Tech
  {
    slug: "microsoft",
    name: "Microsoft",
    url: "https://www.microsoft.com",
    tagline: "Surface, Xbox & more",
    logo: "https://logo.clearbit.com/microsoft.com",
  },

  // (Optional / De-prioritize for now)
  {
    slug: "costco",
    name: "Costco",
    url: "https://www.costco.com",
    tagline: "Warehouse deals",
    logo: "https://logo.clearbit.com/costco.com",
  },
  // You can keep adding up to 200; copy a block, change slug/name/url/tagline/logo
];

// Helper to find a store by slug (handy in /out/{slug} or dynamic pages)
export const getStore = (slug: string) => STORES.find((s) => s.slug === slug);
