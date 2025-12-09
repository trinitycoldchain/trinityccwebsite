import { ServiceTier, GelPackTier, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Services', href: '#services' },
  { label: 'Facilities', href: '#facilities' },
  { label: 'Gel Packs', href: '#gel-packs' },
  { label: 'Rates', href: '#rates' },
  { label: 'Contact', href: '#contact' },
];

export const SERVICE_TIERS: ServiceTier[] = [
  {
    name: 'Silver',
    volume: '1-9 Pallets',
    rate: 55.00,
    handling: 25.00,
    commitment: '1 Month',
    color: 'bg-slate-200'
  },
  {
    name: 'Gold',
    volume: '10-49 Pallets',
    rate: 50.00,
    handling: 20.00,
    commitment: '1 Month',
    color: 'bg-yellow-100'
  },
  {
    name: 'Platinum',
    volume: '50+ Pallets',
    rate: 45.00,
    handling: 15.00,
    commitment: '3 Months',
    color: 'bg-blue-100'
  }
];

export const GEL_PACK_PRICING: GelPackTier[] = [
  { 
    size: '8 oz', 
    priceDisplay: '$0.40 - $0.65', 
    minOrder: 500, 
    availability: 'Sourced to Order',
    description: 'Perfect for small parcel shipments.'
  },
  { 
    size: '16 oz', 
    priceDisplay: '$0.49 - $0.89', 
    minOrder: 350, 
    availability: 'In Stock (<1400)',
    description: 'Our standard size. High inventory availability.',
    tiers: [
      { label: 'Tier 1', range: '350 - 900', price: 0.89 },
      { label: 'Tier 2', range: '901 - 1,800', price: 0.79 },
      { label: 'Tier 3', range: '1,801 - 2,700', price: 0.69 },
      { label: 'Tier 4', range: '2,701 - 7,200', price: 0.59 },
      { label: 'Tier 5', range: '7,200+', price: 0.49 },
    ]
  },
  { 
    size: '24 oz', 
    priceDisplay: '$1.49', 
    minOrder: 150, 
    availability: 'Sourced to Order',
    description: 'Extended duration cooling.'
  },
];

export const CONTRACT_TERMS = [
  {
    title: "Limitation of Liability",
    content: "Liability is limited to the lowest of: cost of goods, $0.50/lb, or max $500/pallet."
  },
  {
    title: "Force Majeure",
    content: "Protection against events beyond control including power outages and mechanical failure."
  },
  {
    title: "Indemnification",
    content: "Customer defends warehouse against third-party claims arising from their goods."
  },
  {
    title: "Lien Rights",
    content: "Right to hold/sell goods for unpaid storage or handling charges."
  },
  {
    title: "Product Warranty",
    content: "Customer warrants goods are safe, legal, and properly packaged for cold storage."
  }
];