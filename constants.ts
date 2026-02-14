import { Product } from './types';

export const COMPANY_NAME = "Jai Durga Chemical Pvt Ltd";
export const PARENT_COMPANY = "Sakarni";

export const PRODUCT_LIST: Product[] = [
  { id: '1', name: 'Sakarni Charm', category: 'Stainer', description: 'Paint color enhancement', image: '/product/sakarni_charm_exterior_emulsion.png' },
  { id: '2', name: 'Sakarni Charm Glow', category: 'Stainer', description: 'Rich glow finish', image: '/product/sakarni_charm_glow_exterior_emulsion.png' },
  { id: '3', name: 'Sakarni Charm Gold', category: 'Stainer', description: 'Premium golden tint', image: '/product/sakarni_charm_gold_exterior_emulsion.png' },
  { id: '4', name: 'Sakarni Magna', category: 'Stainer', description: 'Deep color strength', image: '/product/sakarni_magna_interior_emulsion_bucket.png' },
  { id: '5', name: 'Sakarni Magna Glow', category: 'Stainer', description: 'Gloss & color depth', image: '/product/sakarni_magna_glow_interior_emulsion.png' },
  { id: '6', name: 'Sakarni Maha Glow', category: 'Stainer', description: 'High brightness finish', image: '/product/sakarni_mahaglow_distemper_bucket.png' },
  { id: '7', name: 'Sakarni Universal Stainer', category: 'Multi-Use Stainer', description: 'Paint & wood tinting', image: '/product/sakarni_universal_stainer_bottle.png' },
  { id: '8', name: 'Sakarni High Prime', category: 'Primer', description: 'Surface bonding & durability', image: '/product/sakarni_high_prime_red_oxide_primer_can.png' },
  { id: '9', name: 'Sakarni PRP Protect', category: 'Surface Protection', description: 'Moisture & surface protection', image: '/product/sakarni_primer_pro_protect_red_oxide_can.png' },
  { id: '10', name: 'Sakarni Wood Guard', category: 'Wood Coating', description: 'Wood protection', image: '/product/sakarni_primer_wood_guard_can.png' },
  { id: '11', name: 'Sakarni Wood Secure', category: 'Wood Treatment', description: 'Anti-damage protection', image: '/product/sakarni_primer_wood_secure_can.png' },
  { id: '12', name: 'Sakarni Quick Clean', category: 'Surface Cleaner', description: 'Pre-paint cleaning', image: '/product/sakarni_quick_clean_interior_emulsion.png' },
  { id: '13', name: 'Sakarni Magic Cout', category: 'Specialty Coating', description: 'Protective coating', image: '/product/sakarni_magic_coat_primer_bucket.png' },
  { id: '14', name: 'Sakarni Magic Grip', category: 'Adhesion Solution', description: 'Strong bonding', image: '/product/sakarni_magic_grip_primer_bucket_alt.png' },
  { id: '15', name: 'Sakarni Sak Classic', category: 'Multi-Purpose', description: 'General coating use', image: '/product/sakarni_sak_classic_gloss_enamel_can.png' },
];

export const LEADERSHIP = {
  chairman: "Dr. Ashok Kumar Gupta",
  directors: ["Mr. Vikas Jain", "Mr. Mohit Aggarwal"]
};

export const LEADERSHIP_IMAGES = {
  chairman: "https://sakarni.com/public/img/uploads/team/1740121605.png",
  director_mohit: "https://sakarni.com/public/img/uploads/team/1740121691123.png",
  // Placeholder for Vikas Jain to ensure 3-column layout looks premium
  director_vikas: "/images/vikas.png",
};

export const HERO_IMAGES = [
  "https://picsum.photos/1920/1080?grayscale&blur=2", // Industrial Abstract
  "https://picsum.photos/1920/1080?image=1050", // Manufacturing
  "https://picsum.photos/1920/1080?image=870", // Light/Shadows
];

export const FAQS = [
  { q: "What makes your paints different from competitors?", a: "We focus on consistency and reliability. Every batch undergoes rigorous quality control, and our formulations are designed for industrial-grade performance, not just decorative appeal. Our automated dosing systems ensure that Batch #1 and Batch #1000 are identical." },
  { q: "Do you provide custom formulations for bulk partners?", a: "Absolutely. Our R&D team specializes in developing custom formulations based on your specific requirements—whether it's viscosity, drying time, chemical resistance, or finish specifications. We work directly with your technical team to match exact standards." },
  { q: "What is your minimum order quantity for bulk orders?", a: "For industrial products, our typical MOQ is 500 liters. For decorative paints, we supply pallet-sized loads. However, we're flexible for long-term partnerships and can discuss specific requirements based on your project needs." },
  { q: "How do you ensure quality consistency across batches?", a: "We use computer-controlled automated blending systems, batch-level testing, and maintain strict protocols. Every batch is certified and documented before dispatch, ensuring 100% repeatability and traceability." }
];