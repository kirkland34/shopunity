export type Store = { slug: string; name: string; url: string; blurb?: string; };
export const STORES: Store[] = [
  { slug: 'target', name: 'Target', url: 'https://www.target.com', blurb: 'Everyday essentials & more' },
  { slug: 'best-buy', name: 'Best Buy', url: 'https://www.bestbuy.com', blurb: 'Electronics & appliances' }
];
export const getStore = (slug: string) => STORES.find(s => s.slug === slug);
