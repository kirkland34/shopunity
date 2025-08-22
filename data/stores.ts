// data/stores.ts
export type Store = {
  slug: string;
  name: string;
  url: string;
  tagline?: string;
  logo?: string; // NEW (optional)
};

export const STORES: Store[] = [
  {
    slug: "amazon",
    name: "Amazon",
    url: "https://www.amazon.com",
    tagline: "Everything store",
    logo: "/logos/amazon.svg",
  },
  {
    slug: "walmart",
    name: "Walmart",
    url: "https://www.walmart.com",
    tagline: "Low prices, big selection",
    logo: "/logos/walmart.svg",
  },
  {
    slug: "target",
    name: "Target",
    url: "https://www.target.com",
    tagline: "Everyday essentials & more",
    logo: "/logos/target.svg",
  },
  {
    slug: "homedepot",
    name: "Home Depot",
    url: "https://www.homedepot.com",
    tagline: "Tools & home improvement",
    logo: "/logos/homedepot.svg",
  },
  {
    slug: "lowes",
    name: "Lowe’s",
    url: "https://www.lowes.com",
    tagline: "Home improvement",
    logo: "/logos/lowes.svg",
  },
  {
    slug: "sephora",
    name: "Sephora",
    url: "https://www.sephora.com",
    tagline: "Beauty & skincare",
    logo: "/logos/sephora.svg",
  },
  {
    slug: "ulta",
    name: "Ulta",
    url: "https://www.ulta.com",
    tagline: "Beauty & salon",
    logo: "/logos/ulta.svg",
  },
  {
    slug: "nike",
    name: "Nike",
    url: "https://www.nike.com",
    tagline: "Shoes & apparel",
    logo: "/logos/nike.svg",
  },
  {
    slug: "adidas",
    name: "adidas",
    url: "https://www.adidas.com",
    tagline: "Shoes & apparel",
    logo: "/logos/adidas.svg",
  },
  {
    slug: "walgreens",
    name: "Walgreens",
    url: "https://www.walgreens.com",
    tagline: "Pharmacy & essentials",
    logo: "/logos/walgreens.svg",
  },
  {
    slug: "cvs",
    name: "CVS",
    url: "https://www.cvs.com",
    tagline: "Pharmacy & health",
    logo: "/logos/cvs.svg",
  },
  {
    slug: "microsoft",
    name: "Microsoft",
    url: "https://www.microsoft.com",
    tagline: "Surface, Xbox & more",
    logo: "/logos/microsoft.svg",
  },
];
