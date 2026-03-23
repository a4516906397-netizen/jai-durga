import React from 'react';

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  description: string;
  image?: string;
  features?: string[];
  colors?: { name: string; hex: string }[];
  benefits?: string[];
  compatibility?: string[];
  instructions?: string[];
  safety?: string[];
  recommendation?: string;
  subTitle?: string;
  packing?: string;
  extraDetails?: string;
  seo?: {
    title?: string;
    description?: string;
    keywords?: string;
  };
}

export interface NavItem {
  label: string;
  path: string;
  icon?: React.ComponentType<any>;
}

export enum PageRoute {
  HOME = '/',
  ABOUT = '/about',
  PRODUCTS = '/products',
  CONTACT = '/contact',
  FAQ = '/faq',
  ADMIN = '/admin',
  INFRASTRUCTURE = '/infrastructure',
}

export interface MegaMenuItem {
  name: string;
  slug: string;
  image?: string;
}

export interface MegaMenuCategory {
  title: string;
  items: MegaMenuItem[];
}