import { Product, MegaMenuCategory } from './types';

export const COMPANY_NAME = "Jai Durga Chemical Pvt Ltd";
export const PARENT_COMPANY = "Sakarni";

export const PRODUCT_LIST: Product[] = [
  {
    id: 'pyd-universal-stainer',
    name: 'PYD Universal Stainer',
    slug: 'pyd-universal-stainer',
    category: 'Universal Stainer',
    subTitle: 'Unleash Your Creativity with Vibrant Colors',
    description: 'Transform your space with PYD Universal Stainer, a highly concentrated pigment solution designed for limitless possibilities.',
    benefits: [
      'Rich & Vibrant Colors',
      'Durable and Long-lasting',
      'Versatile Application',
      'Eco-Friendly Choice',
      'Easy to Use & Cost-Effective'
    ],
    compatibility: [
      'Synthetic Enamels',
      'Plastic Emulsion Paints',
      'Water-Based Primers',
      'Oil-Based Primres',
      'Latex Paints',
      'Oil-Bound Distempers'
    ],
    instructions: [
      'Preparation: Ensure a clean and dry surface before application of color mixture',
      'Mixing: Thoroughly mix the desired amount of PYD Universal Stainer with your chosen paint medium to achieve your preferred shade.',
      'Tip: Add Stainer before thinning the paint.',
      'Application: Apply two coats of the colored mixture for a flawless finish.',
      'Note: Painted surface should not be exposed in direct sunlight.'
    ],
    safety: [
      'Avoid inhaling fumes and contact with eyes and skin',
      'Keep out of reach of children',
      'In case of eye contact, rinse thoroughly with water and seek medical attention',
      'Dispose of responsibly after the Stainer dries naturally'
    ],
    recommendation: 'Test a small mixture before full application • Maximum recommended usage: 5% for tinting purposes.',
    packing: '50 ml, 100 ml, 200 ml',
    image: '/product/pydstainer.png',
    colors: [
      { name: 'Fast Red', hex: '#A33434' },
      { name: 'Yellow Oxide', hex: '#BC8652' },
      { name: 'Mehandi', hex: '#3F5F4F' },
      { name: 'Fire Orange', hex: '#F04532' },
      { name: 'Fire Red', hex: '#E22E2E' },
      { name: 'Fast Blue', hex: '#003366' },
      { name: 'Fast Green', hex: '#0E6A52' },
      { name: 'Black', hex: '#000000' },
      { name: 'Fast Violet', hex: '#54407E' },
      { name: 'Fast Yellow', hex: '#F2B63D' },
      { name: 'Fast Yellow Green', hex: '#1A6F4A' },
      { name: 'Magenta', hex: '#C31F7B' },
      { name: 'Red Oxide', hex: '#8B2516' },
      { name: 'Turkey Amber', hex: '#865042' },
      { name: 'Burnt Sienna', hex: '#8A3324' },
      { name: 'Bright Green', hex: '#0E8A4B' },
    ]
  },
  {
    id: 'sakarni-universal-stainer',
    name: 'Universal Stainer',
    slug: 'sakarni-universal-stainer',
    category: 'Universal Stainer',
    description: `SAKARNI UNIVERSAL STAINER is a glycol based binder free pigment concentrate having both non-ionic and anionic wetting agent and dispersing agent in optimum dosage. It contains pro colorants with active pigments which enhances the final color and helps to achieve multiple shades with accurate desired color output.\n\nSakarni Universal Stainer is manufactured to right specifications such as color shade, color strength and rheology which guarantees both excellent color accuracy and color reproducibility. Due to the unique dispersion technique used in Sakarni universal stainer complete deagglomeration of pigments takes place hence optimum color development is obtained from each pigment which in turn results in maximum tinting strength.\n\nEach batch of Sakarni universal stainer goes through stringent quality control procedures in every step from selection of raw materials to its processing and packaging, using latest technology and equipments which make the product free from defects such as flocculation, flooding, cratering, etc. and also ensures to maintain highest of standards.`,
    features: [
      'Multiple attractive shades which can be mixed matched to achieve a range of colors',
      'Suitable to use with almost all kind of paints, primers and enamels',
      'Excellent long term viscosity stability over a wide temperature range',
      'Excellent color accuracy and color reproducibility',
      'High stability in a wide range of temperature',
      'Unlimited color matching compatibility',
      'Easy to use for on-site tinting',
      'Enhanced color output',
      'High tinting strength',
      'User friendly',
      'Low VOC'
    ],
    packing: '50 ml, 100 ml, 200 ml',
    image: '/product/sakarni_universal_stainer.png',
    recommendation: 'Test a small mixture before full application • Maximum recommended usage: 5% for tinting purposes.',
    colors: [
      { name: 'Fast Red', hex: '#A33434' },
      { name: 'Yellow Oxide', hex: '#BC8652' },
      { name: 'Mehandi', hex: '#3F5F4F' },
      { name: 'Fire Orange', hex: '#F04532' },
      { name: 'Fire Red', hex: '#E22E2E' },
      { name: 'Fast Blue', hex: '#003366' },
      { name: 'Fast Green', hex: '#0E6A52' },
      { name: 'Black', hex: '#000000' },
      { name: 'Fast Violet', hex: '#54407E' },
      { name: 'Fast Yellow', hex: '#F2B63D' },
      { name: 'Fast Yellow Green', hex: '#1A6F4A' },
      { name: 'Magenta', hex: '#C31F7B' },
      { name: 'Red Oxide', hex: '#8B2516' },
      { name: 'Turkey Amber', hex: '#865042' },
      { name: 'Burnt Sienna', hex: '#8A3324' },
      { name: 'Bright Green', hex: '#0E8A4B' },
    ]
  },
  {
    id: 'magic-coat',
    name: 'Magic Coat Primer',
    slug: 'magic-coat',
    category: 'Primers',
    description: `SAKARNI MAGIC COAT ACRYLIC CEMENT PRIMER is a carefully formulated interior water based acrylic cement primer based on modified styrene acrylic emulsion which can be used for application on interior surfaces. It has been specifically designed as a surface primer with excellent binding and spreading capacity.\n\nThe fine particle size allows outstanding penetration into porous and chalky substrates to consolidate the plaster and gives even shade to the surface. It is reinforced with inert pigments and extenders and also gives excellent covering capacity along with uniform absorption over the whole surface. These properties enhance the top coats adhesion and durability.`,
    features: [
      'Low VOC',
      'Better hiding',
      'High opacity',
      'Strong adhesion',
      'Superior whiteness',
      'Interlocking particles',
      'Strong surface bonding'
    ],
    packing: '1 LTR, 4 LTR, 10 LTR, 20 LTR',
    image: '/product/sakarni_magic_coat_interior_primer.png'
  },
  {
    id: 'magic-grip',
    name: 'Magic Grip Primer',
    slug: 'magic-grip',
    category: 'Primers',
    description: `SAKARNI MAGIC GRIP water based acrylic cement primer is based on modified styrene acrylic emulsion. It has been specially designed as a surface primer with excellent binding and spreading capacities.\n\nThe fine particle size allows good penetration into porous and chalky substrates to consolidate the plaster, give even shade to the surface and provide uniform absorption over the whole surface. These properties enhance the top coats adhesion, durability and also create strong surface bonding.\n\nSakarni primer is specially reinforced with inert pigments and extenders and has been designed to provide super sealing properties, excellent resistance from moisture and to keep the walls free from defects. The very fine particle size of Sakarni primer also allows penetration into substrates to enhance the physical barrier to water transportation and act as a chemical barrier to salt migration.`,
    features: [
      'Low VOC',
      'Better hiding',
      'High opacity',
      'Strong adhesion',
      'Superior whiteness',
      'Interlocking particles',
      'Strong surface bonding'
    ],
    packing: '1 LTR, 4 LTR, 10 LTR, 20 LTR',
    image: '/product/sakarni_magic_grip_primer_bucket.png'
  },
  {
    id: 'water-base-red-oxide-primer',
    name: 'High Prime - Red Oxide Primer',
    slug: 'water-base-red-oxide-primer',
    category: 'Primers',
    description: `SAKARNI HIGH PRIME – RED OXIDE PRIMER is a general purpose solvent thinnable metal primer built with superior quality base of synthetic resin which is pigmented with Red Oxide and other rust inhibitive pigments. Sakarni High Prime provides excellent protection to exterior and interior of ferrous metal surfaces (like steel, cast iron, wrought iron etc.) during and after fabrication. It also offers good opacity, coverage, flow, leveling, and adhesion.`,
    features: [
      'Durable',
      'Fast drying',
      'No skinning',
      'Easy to apply',
      'Longer shelf life',
      'Greater coverage',
      'High thermal stability',
      'Resistance to bacteria, fungus, moisture etc.',
      'Outstanding adhesion and anti-corrosive properties'
    ],
    packing: '500 ml, 1 LTR, 4 LTR',
    image: '/product/sakarni_high_prime_red_oxide_primer_can.png'
  },
  {
    id: 'solvent-base-red-oxide-primer',
    name: 'Pro Protect - Red Oxide Primer',
    slug: 'solvent-base-red-oxide-primer',
    category: 'Primers',
    description: `SAKARNI PRO PROTECT Red Oxide Primer is a premium quality polymer-based, non-flammable, and water-soluble primer. Specifically designed for metal surfaces like mild steel, casting, GI, and aluminium, it offers superior hardness and rust protection compared to conventional solvent-based primers.\n\nIt is eco-friendly, fast-drying, and can be top-coated with both water-based and solvent-based enamels, making it ideal for everything from railway wagons to household gates.`,
    features: [
      'Touch Dry: 2–3 hours',
      'Hard Dry: ~24 hours',
      'Recoat Time: 16 hours',
      'Shelf Life: 24 months in unopened condition',
      'Protection: Advanced Anti-Corrosive & Anti-Rust technology',
      'Eco-Profile: Eco-friendly, non-flammable, and odourless',
      'Durability: Superior scratch and impact resistance',
      'Storage: Store in cool, dry place away from heat sources',
      'Stability: Thermally stable with no dry skinning in the container',
      'Versatility: Compatible with water and solvent based topcoats'
    ],
    instructions: [
      'Surface Prep: Ensure surface is clean, dry, and free from oil or grease.',
      'Scraping: Remove existing rust or loose paint by scraping/brushing.',
      'Smoothing: Sand the surface with sandpaper for better adhesion.',
      'Dilution: Thinnable with potable water (approximately 5%).',
      'Tools: Apply using brush, roller, or spray gun.',
      'Application: Apply 1–2 coats depending on the surface requirement.',
      'Drying: Allow the first coat to dry completely before recoating.',
      'Protection: Ensure proper ventilation during application.',
      'Cleanup: Clean all tools with water immediately after use.'
    ],
    safety: [
      'Ensure proper ventilation during application',
      'Avoid inhaling spray mist and contact with eyes/skin',
      'In case of eye contact, rinse with plenty of water and seek medical help',
      'Dispose of responsibly after natural drying'
    ],
    recommendation: 'ANTI-CORROSIVE TECHNOLOGY: Formulated with advanced bonding features to provide a lifecycle-extending barrier against harsh environmental factors.',
    packing: '500 ml, 1 LTR, 4 LTR, 20 LTR',
    image: '/product/sakarni_primer_pro_protect_red_oxide_can.png'
  },
  {
    id: 'water-base-wood-primer',
    name: 'Wood Guard Primer',
    slug: 'water-base-wood-primer',
    category: 'Primers',
    description: `SAKARNI WOOD GUARD primer is a premium and environment friendly water-based acrylic primer that promotes excellent adhesion on wood substrates without the strong odour of solvent based primers. It is easily sandable and helps to provide a smooth finish.`,
    features: [
      'Low VOC',
      'Low Odour',
      'Fast Drying',
      'Eco-Friendly',
      'Antibacterial',
      'High Coverage',
      'Excellent Adhesion',
      'Free From Harmful Chemicals',
      'Prevents Dry Skinning in Container'
    ],
    packing: '500 ml, 1 LTR, 4 LTR',
    image: '/product/sakarni_primer_wood_guard_can.png'
  },
  {
    id: 'solvent-base-wood-primer',
    name: 'Wood Secure Primer',
    slug: 'solvent-base-wood-primer',
    category: 'Primers',
    description: 'Solvent-based primer for wood, offering deep penetration and protection against moisture and insects for long-lasting wood finishes.',
    packing: '500 ml, 1 LTR, 4 LTR',
    image: '/product/sakarni_primer_wood_secure_can.png'
  },

  {
    id: 'magna',
    name: 'Magna',
    slug: 'magna',
    category: 'Interior Emulsion',
    description: `Sakarni Magna Interior Emulsion is a solvent free acrylic emulsion paint which ensures to provide smooth and matt finish with a soft feel to the walls. It is formulated and specifically designed to provide higher coverage, long life and elegant finish. It can be applied on interior walls finished with cement plaster, gypsum plaster, gypsum board, wall putty, concrete, asbestos sheet and also on already painted surfaces.`,
    features: [
      'Higher coverage and excellent opacity.',
      'Gives extremely smooth finish with a soft feel.',
      'Robust durability and long life (lasts for more than 3-4 years).',
      'Sakarni magna interior emulsion is affordable and economical which makes it a perfect value for money product.'
    ],
    instructions: [
      'SURFACE PREPARATION: Remove all traces of loosely adhered paint and other particles by brushing and scraping. Ensure to thoroughly clean the surface. Fill surface imperfections such as holes and cracks before application of emulsion. Make the surface smooth with help of emery paper.',
      'APPLICATION METHOD: Dilution of 50-75% (Volume/Volume) with potable water is recommended according to the surface and atmospheric conditions.',
      'Tools like brush, roller and spray gun with 1.7 mm nozzle size can be used for application.',
      'Apply first coat of Sakarni magna interior emulsion and allow it to dry for 4-6 hours. Apply suitable emery paper between the coats for a better finish. Apply second coat after the first coat is dry.',
      'Note: In case of wall putty/gypsum plaster/freshly matured plaster - Application of a single coat of Sakarni acrylic primer is recommended before applying magna interior emulsion on the desired surface.',
      'HEALTH AND SAFETY PRECAUTIONS: Avoid inhalation, eyes and skin contact. In case of eye contact wash with plenty of clean water and seek medical attention. Do not pour the leftovers in drain. Dispose off after natural drying.',
      'DRYING TIME: Touch dry @27° C RH Max 50% - Minimum 45 mins | Dry to recoat - Minimum 4 hours | Hard dry - Minimum 24 hours',
      'CLEANING: Clean all used equipment with warm and soapy water.',
      'POT LIFE: Thinned material should be consumed the same day.',
      'STORAGE: Store in a cool and dry place having relative humidity below 70% and atmospheric temperature 5°-40° C. Keep the container tightly closed and protected from direct sunlight.',
      'SHELF LIFE: 24 months from the date of packing in unopened condition.',
      'AVAILABLE PACK SIZE: 1 LTR, 4 LTR, 10 LTR, 20 LTR'
    ],
    packing: '1 LTR, 4 LTR, 10 LTR, 20 LTR',
    image: '/product/sakarni_magna_emulsion_paint.png'
  },
  {
    id: 'magna-glow',
    name: 'Magna Glow',
    slug: 'magna-glow',
    category: 'Interior Emulsion',
    description: 'Premium interior emulsion with excellent coverage, vibrant colors, washability, and resistance to stains for a rich, long-lasting finish on interior walls.',
    packing: '1 LTR, 4 LTR, 10 LTR, 20 LTR',
    image: '/product/sakarni_magna_glow_interior_emulsion.png'
  },
  {
    id: 'quick-clean',
    name: 'Quick Clean',
    slug: 'quick-clean',
    category: 'Interior Emulsion',
    description: 'Luxury interior emulsion formulated for easy cleaning, with a washable surface that maintains shine even after removing stains, ideal for high-traffic areas.',
    packing: '1 LTR, 4 LTR, 10 LTR, 20 LTR',
    image: '/product/sakarni_quick_clean_interior_emulsion.png'
  },
  {
    id: 'charm-glow-sheen',
    name: 'Charm Glow Shades',
    slug: 'charm-glow-sheen',
    category: 'Exterior Emulsion',
    description: 'Advanced exterior emulsion with multiple premium shades, offering weather resistance, anti-fungal protection, and durability against rain, heat, and humidity.',
    packing: '1 LTR, 4 LTR, 10 LTR, 20 LTR',
    image: '/product/sakarni_charm_glow_exterior_emulsion.png',
    colors: [
      { name: 'Sporty Yellow', hex: '#E3BC2E' },
      { name: 'Lemon Souffle', hex: '#A9C84A' },
      { name: 'Sunrise', hex: '#F07C3A' },
      { name: 'Jolly Holly', hex: '#1FA04E' },
      { name: 'Terra Cotta', hex: '#7A4A3A' },
      { name: 'Pine', hex: '#166B52' },
      { name: 'Ming Red', hex: '#7A2B2B' },
      { name: 'Steel Grey', hex: '#8A9198' },
      { name: 'Signal Red', hex: '#D12F2F' },
      { name: 'Wild Purple', hex: '#7A6BA8' },
      { name: 'Nut Brown', hex: '#6B534C' },
      { name: 'Royal Blue', hex: '#355A7C' },
      { name: 'Black', hex: '#2E2A2A' },
      { name: 'White', hex: '#F4F4F4' },
    ]
  },
  {
    id: 'charm-gold',
    name: 'Charm Gold',
    slug: 'charm-gold',
    category: 'Exterior Emulsion',
    description: 'Premium exterior emulsion with 7-year warranty, Suspension Max Technology, low VOC, anti-fungal and antibacterial protection, and extra coverage for luxurious outdoor finishes.',
    packing: '1 LTR, 4 LTR, 10 LTR, 20 LTR',
    image: '/product/sakarni_charm_gold_exterior_emulsion.png'
  },
  {
    id: 'charm-gold-sheen',
    name: 'Charm Gold Shades',
    slug: 'charm-gold-sheen',
    category: 'Exterior Emulsion',
    description: 'Multiple premium shades of Charm Gold, providing robust protection and an elegant finish for exterior surfaces exposed to harsh weather conditions.',
    packing: '1 LTR, 4 LTR, 10 LTR, 20 LTR',
    image: '/product/sakarni_charm_gold_exterior_emulsion.png',
    colors: [
      { name: 'Signal Red', hex: '#D12F2F' },
    ]
  },
  {
    id: 'charm-glow-plus',
    name: 'Charm Glow Plus',
    slug: 'charm-glow-plus',
    category: 'Exterior Emulsion',
    description: 'Upgraded exterior emulsion with plus features like improved adhesion, crack resistance, and superior weather guard for long-term exterior wall protection.',
    packing: '1 LTR, 4 LTR, 10 LTR, 20 LTR',
    image: '/product/charmglow+.png'
  },
  {
    id: 'charm-glow',
    name: 'Charm Glow',
    slug: 'charm-glow',
    category: 'Exterior Emulsion',
    description: `Sakarni Charm Glow Exterior Emulsion Paint is based on modified acrylic emulsion which gives smooth and shiny finish with a soft feel to the walls. It is specifically formulated to provide excellent brushability, outstanding recoatable, enhanced look, greater durability and to withstand humidity, rain and hot climate. It also contains antifungal and antibacterial additives which protect the surface and help to provide a longer life. This economical and affordable emulsion paint can be applied on exterior and interior surfaces finished with cement plaster, gypsum plaster, gypsum board, wall putty, concrete, asbestos sheet and also on already painted surfaces.

SHINE MAX:
This innovative technology helps particles to reflect more light and gives enhanced consistent and shiny finish.`,
    features: [
      'Shiny finish – Sakarni Charm Glow provides a shiny finish, giving your newly painted home a beautiful, rich and soft lustrous look.',
      'Excellent flow and brushability – Specially formulated for easy application, allows the tools to move evenly and provide excellent flow and levelling.',
      'Smooth and soft finish – Provides a smooth and soft finish to the walls.',
      'Higher coverage and economical – Rutile grade titanium used in the formulation provides higher coverage and excellent opacity which makes it economical.',
      'Durability – Provides protection against wind, water, UV rays and any sudden changes in the temperature. It also equips the surface with resistance against chalking, peeling, cracking, flaking and prevents fungi or algae growth.',
      'Breathable in nature – It can breathe out trapped moisture through fine pores which makes the film long lasting.',
      'Protection from fungal growth – It contains antifungal and antibacterial additives which makes the film resistant to these microorganisms.',
      'Environment friendly – It is a low VOC product and does not contain lead, arsenic, cadmium and mercury.'
    ],
    instructions: [
      'SURFACE PREPARATION: Remove all traces of loosely adhered paint and other particles by brushing and scraping. Ensure to thoroughly clean the surface. Fill surface imperfections such as holes and cracks before application. Make the surface smooth with help of emery paper.',
      'APPLICATION METHOD: Dilution of 50–75% (Volume/Volume) with potable water is recommended according to the surface and atmospheric conditions.',
      'Tools like brush, roller and spray gun with 1.7 mm nozzle size can be used for application.',
      'Apply first coat and allow it to dry for 4–6 hours. Apply suitable emery paper between the coats for a better finish. Apply second coat after the first coat is dry.',
      'Note: In case of wall putty/gypsum plaster/freshly matured plaster – Application of a single coat of Sakarni acrylic primer is recommended before applying Sakarni Charm Glow exterior emulsion paint on the desired surface.',
      'HEALTH AND SAFETY PRECAUTIONS: Avoid inhalation, eyes and skin contact. In case of eye contact wash with plenty of clean water and seek medical attention. Do not pour the leftovers in drain. Dispose off after natural drying.',
      'DRYING TIME: Touch dry @27° C RH Max 50% – Minimum 45 mins | Dry to recoat – Minimum 4 hours | Hard dry – Minimum 24 hours',
      'CLEANING: Clean all used equipment with warm and soapy water.',
      'POT LIFE: Thinned material should be consumed the same day.',
      'STORAGE: Store in a cool and dry place having relative humidity below 70% and atmospheric temperature 5°–40° C. Keep the container tightly closed and protected from direct sunlight.',
      'SHELF LIFE: 24 months from the date of packing in unopened condition.',
      'AVAILABLE PACK SIZE: 1 LTR, 4 LTR, 10 LTR, 20 LTR'
    ],
    packing: '1 LTR, 4 LTR, 10 LTR, 20 LTR',
    image: '/product/sakarni_charm_glow_exterior_emulsion.png'
  },
  {
    id: 'charm',
    name: 'Charm',
    slug: 'charm',
    category: 'Exterior Emulsion',
    description: `Sakarni Charm Exterior Emulsion Paint is based on modified acrylic emulsion which gives smooth and matt finish with a soft feel to the walls. It is specifically formulated to provide excellent brushability, outstanding recoatatability, enhanced look, greater durability and to withstand humidity, rain and hot climate.\n\nIt also contains antifungal and antibacterial additives which protect the surface and help to provide a longer life. This economical and affordable emulsion paint can be applied on exterior and interior surfaces finished with cement plaster, gypsum plaster, gypsum board, wall putty, concrete, asbestos sheet and also on already painted surfaces.`,
    features: [
      'Touch dry @27°C: Minimum 45 mins',
      'Dry to recoat: Minimum 4 hours',
      'Hard dry: Minimum 24 hours',
      'Shelf life: 24 months in unopened condition',
      'Finish: Smooth and soft matt finish',
      'Coverage: Higher coverage with Rutile grade titanium',
      'Durability: Protection against wind, water, UV, and scaling',
      'Breathability: Micro-porous film allows trapped moisture to escape',
      'Protection: Antifungal and antibacterial protection',
      'Eco-Profile: Low VOC; Free from Lead, Arsenic, Cadmium, and Mercury',
      'Storage: Store in cool, dry place (5°–40°C) below 70% RH',
      'Pot Life: Consume thinned material on the same day'
    ],
    instructions: [
      'Surface Prep: Remove loose paint/particles by brushing and scraping.',
      'Repair: Fill surface imperfections, holes, and cracks before application.',
      'Smoothing: Sand the surface with emery paper for a smooth base.',
      'Dilution: Mix 50–75% by volume with potable water.',
      'Tools: Use brush, roller, or 1.7 mm nozzle spray gun.',
      'Application: Apply 1st coat and allow 4–6 hours drying time.',
      'Between Coats: Sand lightly with emery paper for better finish.',
      'Second Coat: Apply 2nd coat once the first coat is dry.',
      'Expert Advice: Apply Sakarni acrylic primer on fresh plaster/putty first.',
      'Cleanup: Clean all equipment with warm soapy water immediately.'
    ],
    safety: [
      'Avoid inhalation and contact with eyes or skin',
      'In case of eye contact, wash with clean water and seek medical attention',
      'Do not pour leftovers in drain; dispose after natural drying'
    ],
    packing: '1 LTR, 4 LTR, 10 LTR, 20 LTR',
    recommendation: 'SUSPENSION MAX: This innovative technology helps particles to be suspended for a longer period of time and imparts saturated uniform distribution for enhanced and consistent finish.',
    image: '/product/sakarni_charm_exterior_emulsion.png',
  },
  {
    id: 'sak-classic',
    name: 'Sak Classic',
    slug: 'sak-classic',
    category: 'Enamel',
    description: 'High-quality enamel paint for a classic finish, suitable for wood and metal surfaces, offering shine, durability, and protection against wear.',
    packing: '200 ml, 500 ml, 1 LTR, 4 LTR, 20 LTR',
    image: '/product/sakarni_sak_classic_gloss_enamel_can.png',
    colors: [
      { name: 'Golden Yellow', hex: '#F2A62B' },
      { name: 'Mint Green', hex: '#17964A' },
      { name: 'Deep Orange', hex: '#F05B2F' },
      { name: 'Bus Green', hex: '#0E5E4A' },
      { name: 'P.O. Red', hex: '#D62F2F' },
      { name: 'Smoke Grey', hex: '#6F8AA3' },
      { name: 'Crimson', hex: '#7A2F2F' },
      { name: 'Phirozi', hex: '#1F7FA3' },
      { name: 'Golden Brown', hex: '#9A643E' },
      { name: 'Oxford Blue', hex: '#444A86' },
      { name: 'Brown', hex: '#7B4A34' },
      { name: 'Truck Brown', hex: '#6A3A30' },
      { name: 'Black', hex: '#2B2B2B' },
      { name: 'White', hex: '#F3F3F3' },
    ]
  },
  {
    id: 'pyd-prime-shine',
    name: 'PYD Prime Shine',
    slug: 'pyd-prime-shine',
    category: 'Enamel',
    subTitle: 'Premium Semi Gloss Enamel',
    description: `PYD PRIME SHINE Premium Semi Gloss Enamel not only creates a radiant, refreshed appearance but also forms a durable, protective layer that shields surfaces from common household stains.

WHERE TO USE PRIME SHINE:
This premium semi gloss enamel is perfect for a variety of surfaces:
• Wood: Revitalize doors, windows, cabinets, and furniture.
• Metal: Protect and beautify grills, railings, and other metalwork.
• Masonry: For walls that require frequent washing, PYD PRIME SHINE provides a durable, washable finish (after proper surface preparation).`,
    features: [
      'Water Based & Easy Cleanup: Thins and cleans with water, no harsh solvents needed.',
      'Fast Drying: Speeds up project completion.',
      'Breathable Film: Prevents blistering and peeling by allowing moisture to escape, increasing durability.',
      'User Friendly: Easy application and cleanup. Touch-dry in 1 hour, recoatable in 4 hours.',
      'Weather Resistant & Antimicrobial: Protects against weather and prevents fungal/algae growth.',
      'Semi Gloss Finish: Provides a brilliant, reflective shine.',
      'Tough & Durable: Resists wear and tear.',
      'Stain Guard: Protects against household stains and allows easy cleaning.',
      'Low Odor: More pleasant painting experience.',
      'Environmentally Friendly: Formulated with reduced harmful content.'
    ],
    instructions: [
      'SURFACE PREPARATION: Before you begin, ensure your surface is completely clean, dry, and free of any rust, loose material, dirt, grease, or wax. Sand all surfaces thoroughly with appropriate sandpaper and wipe them clean.',
      'APPLICATION METHOD: Apply one coat of Sakarni Pro Protect Red Oxide Primer for the ferrous surfaces.',
      'Apply one coat of Sakarni Woodguard Wood Primer in case of application on fresh wooden surface.',
      'For previously painted surfaces, apply one coat of Sakarni Pro Protect Red Oxide Primer or Sakarni Woodguard Wood Primer and allow the primer to dry for 4 hours before applying PYD Premium Semi Gloss Enamel.',
      'Apply two coats of PYD premium semi gloss enamel keeping 4–6 hours of gap between two coats. Apply suitable emery paper between coats for better finish.',
      'DILUTION: Dilute with 20% potable water by volume, adjusting according to the surface to be painted and atmospheric conditions.',
      'APPLICATION TOOLS: Brush, roller or spray gun with 1.7 mm nozzle.',
      'DRYING TIME: Touch dry @27°C, RH Max 50% – Minimum 1 Hour | Dry to recoat – Minimum 4–6 Hours | Hard dry – Minimum 168 hours',
      'CLEANING: Clean all used equipment with warm and soapy water.',
      'POT LIFE: Thinned material should be used on the same day.',
      'STORAGE: Store in a cool, dry place having relative humidity below 70% and atmospheric temperature below 35°C.',
      'SHELF LIFE: 24 months from the date of packing in unopened condition.'
    ],
    packing: '1 LTR, 4 LTR, 10 LTR, 20 LTR',
    image: '/product/pyd_prime_shine.png'
  },
  {
    id: 'pyd-meta-ruby',
    name: 'Pyd Meta Ruby (Coming Soon)',
    slug: 'pyd-meta-ruby',
    category: 'Metallic Paint',
    subTitle: 'Upcoming Product',
    description: 'COMING SOON - Our luxury metallic emulsion paint with a ruby finish is currently in development.',
    packing: '1 LTR, 4 LTR, 10 LTR, 20 LTR'
  },
  {
    id: 'maha-glow',
    name: 'Maha Glow',
    slug: 'maha-glow',
    category: 'Distemper',
    description: 'Acrylic distemper paint offering an economical wall coating with smooth matt finish, emulsion-like feel, and availability in vibrant colors for budget-friendly interiors.',
    packing: '2 KG, 5 KG, 10 KG, 20 KG',
    image: '/product/sakarni_mahaglow_distemper_bucket.png'
  },
  {
    id: 'sakarni-maha-glow-colour-distemper',
    name: 'Maha Glow Colour Shades',
    slug: 'sakarni-maha-glow-colour-distemper',
    category: 'Distemper',
    description: 'Color distemper variant providing durable, washable finish with good coverage and a soft sheen, ideal for interior walls seeking affordable yet quality painting.',
    packing: '2 KG, 5 KG, 10 KG, 20 KG',
    image: '/product/sakarni_mahaglow_distemper_bucket.png',
    colors: [
      { name: 'Ivory', hex: '#E8C897' },
      { name: 'Purple', hex: '#B997B8' },
      { name: 'Pale Cream', hex: '#D7C98B' },
      { name: 'Electric Blue', hex: '#6A9AC5' },
      { name: 'Daffodil', hex: '#D9C763' },
      { name: 'Lemon Souffle', hex: '#C1CF62' },
      { name: 'Merrie Pink', hex: '#D7A7A9' },
      { name: 'Parrot Green', hex: '#8FBE6B' },
      { name: 'Pink', hex: '#D97883' },
      { name: 'Aquamarine', hex: '#149C8D' },
      { name: 'Candy', hex: '#E39A84' },
      { name: 'Sunrise', hex: '#E18A55' },
    ]
  },
  {
    id: 'pyd-super-booster',
    name: 'Pyd Super Booster',
    slug: 'pyd-super-booster',
    category: 'Waterproofing',
    subTitle: 'Liquid polymer additive to enhance bonding property. ',
    description: `PYD Super Booster is an advanced polymer based liquid additive specially formulated to enhance workability, adhesion, strength and overall performance for white cement-based Wall Putty, Waterproof Putty, Acrylic Primer, Acrylic Distemper, Acrylic Emulsion, Tile Adhesive, Repair Mortar and Bonding Agent for repair mortar/waterproofing chemical.`,
    features: [
      'Effortless mixing and application',
      'Enhances workability, strength and durability',
      'Reduced cracking and shrinkage',
      'Superior bonding and improved water resistance',
      'Lesser paint consumption',
      'No curing required (when added to repair mortar)'
    ],
    instructions: [
      'RECOMMENDED DOSAGE FOR APPLICATION:',
      '• White Cement Putty: Add 3-5% Super Booster in 50% water first. Add putty to mixture, then add remaining water while stirring.',
      '• Acrylic Primer/Distemper/Emulsion: 5%-10% of total paint weight.',
      '• Tile Adhesive: 3%-5% of total tile adhesive weight.',
      '• Bonding Agent: Mix OPC Grey Cement (43 Grade) and Super Booster in 1:1 ratio. Apply 1 coat. Overlay mortar within 4 hours.',
      '• Repair Mortar: 3%-5% of total mortar weight. Use 6-10 kg Super Booster per 50 kg cement + 150 kg sand + 15-20 kg water.',
      '• Waterproofing: Mix OPC Grey Cement (43 Grade) and Super Booster in 1:1 ratio. Apply 2 coats within 4-6 hours. Overlay with protective screed.',
      'TECHNICAL SPECIFICATIONS: Form: Ready to use milky liquid | Density: 1.0±0.05 g/cc | Application Temperature: Above 10°C.',
      'SURFACE PREPARATION: Clean surface thoroughly. Sand with suitable emery paper. Wash with clean water and allow to dry completely.',
      'CRACK TREATMENT: Clean cracks (up to 3mm), apply Sakarni exterior primer. Fill with Sak Crack Block. Apply second coat and dry overnight.',
      'SUPER BOOSTER ADDITION: Always mix Super Booster with 50% of total water first. Settle for 5 minutes before application.',
      'SHELF LIFE: 12 months from manufacturing date in tightly sealed containers. Store away from direct sunlight and excess heat.'
    ],
    packing: '1 LTR, 5 LTR, 10 LTR, 20 LTR',
    image: '/product/pyd_super_booster.png'
  },
  {
    id: 'pyd-roof-cover',
    name: 'Pyd Roof Cover (Coming Soon)',
    slug: 'pyd-roof-cover',
    category: 'Waterproofing',
    subTitle: 'Upcoming Product',
    description: 'COMING SOON - Our advanced roof waterproofing coating designed for ultimate durability and weatherproofing is currently in development.',
    image: 'missing'
  }
];

export const MEGA_MENU_DATA: MegaMenuCategory[] = [
  {
    title: "EXTERIOR EMULSION",
    items: [
      { name: "Charm Gold", slug: "charm-gold", image: "/product/sakarni_charm_gold_exterior_emulsion.png" },
      { name: "Charm Gold Shades", slug: "charm-gold-sheen", image: "/product/sakarni_charm_gold_exterior_emulsion.png" },
      { name: "Charm Glow Plus", slug: "charm-glow-plus", image: "/product/charmglow+.png" },
      { name: "Charm Glow", slug: "charm-glow", image: "/product/sakarni_charm_glow_exterior_emulsion.png" },
      { name: "Charm Glow Shades", slug: "charm-glow-sheen", image: "/product/sakarni_charm_glow_exterior_emulsion.png" },
      { name: "Charm", slug: "charm", image: "/product/sakarni_charm_exterior_emulsion.png" }
    ]
  },
  {
    title: "PRIMER",
    items: [
      { name: "Magic Coat Primer", slug: "magic-coat", image: "/product/sakarni_magic_coat_interior_primer.png" },
      { name: "Magic Grip Primer", slug: "magic-grip", image: "/product/sakarni_magic_grip_primer_bucket.png" },
      { name: "Pro Protect - Red Oxide Primer", slug: "solvent-base-red-oxide-primer", image: "/product/sakarni_primer_pro_protect_red_oxide_can.png" },
      { name: "Wood Guard Primer", slug: "water-base-wood-primer", image: "/product/sakarni_primer_wood_guard_can.png" },
      { name: "High Prime - Red Oxide Primer", slug: "water-base-red-oxide-primer", image: "/product/sakarni_high_prime_red_oxide_primer_can.png" },
      { name: "Wood Secure Primer", slug: "solvent-base-wood-primer", image: "/product/sakarni_primer_wood_secure_can.png" }
    ]
  },
  {
    title: "INTERIOR",
    items: [
      { name: "Magna Interior Emulsion", slug: "magna", image: "/product/sakarni_magna_emulsion_paint.png" },
      { name: "Magna Glow", slug: "magna-glow", image: "/product/sakarni_magna_glow_interior_emulsion.png" },
      { name: "Quick Clean", slug: "quick-clean", image: "/product/sakarni_quick_clean_interior_emulsion.png" }
    ]
  },
  {
    title: "ENAMEL",
    items: [
      { name: "Sak Classic", slug: "sak-classic", image: "/product/sakarni_sak_classic_gloss_enamel_can.png" },
      { name: "PYD Prime Shine", slug: "pyd-prime-shine", image: "/product/pyd_prime_shine.png" }
    ]
  },
  {
    title: "STAINER",
    items: [
      { name: "Universal Stainer", slug: "sakarni-universal-stainer", image: "/product/sakarni_universal_stainer.png" },
      { name: "PYD Universal Stainer", slug: "pyd-universal-stainer", image: "/product/pydstainer.png" }
    ]
  },
  {
    title: "METALLIC PAINT",
    items: [
      { name: "PYD Meta Ruby (Coming Soon)", slug: "pyd-meta-ruby" }
    ]
  },
  {
    title: "DISTEMPER",
    items: [
      { name: "Maha Glow", slug: "maha-glow", image: "/product/sakarni_mahaglow_distemper_bucket.png" },
      { name: "Maha Glow Colour Shades", slug: "sakarni-maha-glow-colour-distemper", image: "/product/sakarni_mahaglow_distemper_bucket.png" }
    ]
  },
  {
    title: "WATER PROOFING",
    items: [
      { name: "PYD Super Booster", slug: "pyd-super-booster", image: "/product/pyd_super_booster.png" },
      { name: "PYD Roof Cover (Coming Soon)", slug: "pyd-roof-cover" }
    ]
  }
];

export const LEADERSHIP = {
  chairman: "Dr. Ashok Kumar Gupta",
  directors: ["Mr. Vikas Jain", "Mr. Mohit Aggarwal"]
};

export const LEADERSHIP_IMAGES = {
  chairman: "https://sakarni.com/public/img/uploads/team/1740121605.png",
  director_mohit: "https://sakarni.com/public/img/uploads/team/1740121691123.png",
  director_vikas: "/images/vikas.png",
};

export const HERO_IMAGES = [
  "https://picsum.photos/1920/1080?grayscale&blur=2",
  "https://picsum.photos/1920/1080?image=1050",
  "https://picsum.photos/1920/1080?image=870",
];

export const FAQS = [
  { q: "What makes your paints different from competitors?", a: "We focus on consistency and reliability. Every batch undergoes rigorous quality control, and our formulations are designed for industrial-grade performance, not just decorative appeal. Our automated dosing systems ensure that Batch #1 and Batch #1000 are identical." },
  { q: "Do you provide custom formulations for bulk partners?", a: "Absolutely. Our R&D team specializes in developing custom formulations based on your specific requirements—whether it's viscosity, drying time, chemical resistance, or finish specifications. We work directly with your technical team to match exact standards." },
  { q: "What is your minimum order quantity for bulk orders?", a: "For industrial products, our typical MOQ is 500 LTR. For decorative paints, we supply pallet-sized loads. However, we're flexible for long-term partnerships and can discuss specific requirements based on your project needs." },
  { q: "How do you ensure quality consistency across batches?", a: "We use computer-controlled automated blending systems, batch-level testing, and maintain strict protocols. Every batch is certified and documented before dispatch, ensuring 100% repeatability and traceability." }
];