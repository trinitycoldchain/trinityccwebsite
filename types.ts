import React from 'react';

export interface ServiceTier {
  name: string;
  volume: string;
  rate: number;
  handling: number;
  commitment: string;
  color: string;
}

export interface PricingTier {
  label: string;
  range: string;
  price: number;
}

export interface GelPackTier {
  size: string;
  priceDisplay: string; // Display string for simple cards or header
  minOrder: number;
  availability: string;
  description?: string;
  tiers?: PricingTier[]; // Optional detailed volume tiers
}

export interface NavItem {
  label: string;
  href: string;
}

export interface FeatureProps {
  icon: React.ElementType;
  title: string;
  description: string;
}