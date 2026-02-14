import React from 'react';

export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  image?: string;
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
}