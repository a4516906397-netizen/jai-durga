import { Product } from './types';

export const COMPANY_NAME = "Jai Durga Chemical";
export const PARENT_COMPANY = "Sakarni";

export const PRODUCT_LIST: Product[] = [
  { id: '1', name: 'charm-', category: 'Decorative', description: 'Premium smooth finish for interior surfaces.' },
  { id: '2', name: 'charm-glow', category: 'Decorative', description: 'High-sheen washable finish for modern homes.' },
  { id: '3', name: 'charm-gold', category: 'Luxury', description: 'Gold-standard luxury emulsion.' },
  { id: '4', name: 'high-prime', category: 'Primers', description: 'Superior adhesion primer for longevity.' },
  { id: '5', name: 'magic-cout', category: 'Coating', description: 'Advanced protective coating solution.' },
  { id: '6', name: 'magic-grip', category: 'Adhesive', description: 'Industrial strength bonding agent.' },
  { id: '7', name: 'magna', category: 'Industrial', description: 'Heavy-duty industrial coating.' },
  { id: '8', name: 'magna-glow', category: 'Industrial', description: 'Gloss finish industrial enamel.' },
  { id: '9', name: 'maha-glow', category: 'Decorative', description: 'Economical yet vibrant finish.' },
  { id: '10', name: 'prp-protect', category: 'Protective', description: 'Anti-corrosive protection layer.' },
  { id: '11', name: 'quick-clean', category: 'Utility', description: 'Fast-acting surface cleaner.' },
  { id: '12', name: 'sak-classic', category: 'Classic', description: 'Time-tested formulation for durability.' },
  { id: '13', name: 'universal-stainer', category: 'Additives', description: 'High-strength color tinting stainer.' },
  { id: '14', name: 'wood-guard', category: 'Wood Care', description: 'Premium wood protection varnish.' },
  { id: '15', name: 'wood-secure', category: 'Wood Care', description: 'Deep penetrating wood preservative.' },
];

export const LEADERSHIP = {
  chairman: "Ashok Kumar Gupta",
  directors: ["Vikas Jain", "Mohit Aggarwal"]
};

export const LEADERSHIP_IMAGES = {
  chairman: "https://sakarni.com/public/img/uploads/team/1740121605.png",
  director_mohit: "https://sakarni.com/public/img/uploads/team/1740121691123.png",
  // Placeholder for Vikas Jain to ensure 3-column layout looks premium
  director_vikas: "/ima/vikas.png",
};

export const HERO_IMAGES = [
  "https://picsum.photos/1920/1080?grayscale&blur=2", // Industrial Abstract
  "https://picsum.photos/1920/1080?image=1050", // Manufacturing
  "https://picsum.photos/1920/1080?image=870", // Light/Shadows
];