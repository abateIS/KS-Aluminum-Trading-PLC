export interface ProductItem {
  id: string;
  name: string;
  category: 'import-profiles' | 'local-profiles' | 'glasses' | 'panels' | 'accessories' | 'metals';
  description: string;
  specs?: string[];
  colors?: string[];
  thicknesses?: string[];
  imageUrl: string;
}

export const PRODUCT_CATEGORIES = {
  'import-profiles': 'Import Aluminium Profile 🇨🇳',
  'local-profiles': 'Local Aluminium Profile 🇪🇹',
  'glasses': 'Premium Glasses 💎',
  'panels': 'Aluminium Composite Panel 💎',
  'accessories': 'Aluminium Accessories 💎',
  'metals': 'Stainless Steel & Handrails 💎',
};

export const productsData: ProductItem[] = [
  // 1. Import Aluminum Profiles
  {
    id: 'imp-black',
    name: 'Import Profile - Black',
    category: 'import-profiles',
    description: 'High-durability anodized black profile, designed for premium structural stability and modern look.',
    colors: ['Black'],
    specs: ['Architectural Grade', 'Smooth finish', 'Anodized coating'],
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'imp-silver',
    name: 'Import Profile - Silver',
    category: 'import-profiles',
    description: 'Classic matte silver profile offering high weather resistance and structural rigidity.',
    colors: ['Silver'],
    specs: ['Anodized finish', 'Imported standard', 'Corrosion resistant'],
    imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'imp-bronze',
    name: 'Import Profile - Bronze',
    category: 'import-profiles',
    description: 'Elegant architectural bronze profile that adds deep, warm tones to luxury windows and door frames.',
    colors: ['Bronze'],
    specs: ['Premium anodized', 'Thermal break compatible', 'Superior thickness'],
    imageUrl: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'imp-champagne',
    name: 'Import Profile - Coffee Electrophoresis Champagne',
    category: 'import-profiles',
    description: 'Elite electrophoresis coated profile matching premium champagne aesthetics with maximum surface hardness.',
    colors: ['Coffee Electrophoresis Champagne'],
    specs: ['Electrophoresis surface processing', 'Scratch resistant', 'Ultra-premium look'],
    imageUrl: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=600'
  },

  // 2. Local Aluminum Profiles
  {
    id: 'loc-profiles',
    name: 'Local Aluminum Profiles (Multiple Colors)',
    category: 'local-profiles',
    description: 'Locally manufactured high-standard aluminum profiles with various finishes tailored for Ethiopian climate conditions.',
    colors: ['Black', 'Grey', 'Ivory', 'Bronze', 'Mat Coffee', 'White', 'Coffee Shine', 'Silver'],
    specs: ['Standard extrusion', 'Extensive color availability', 'Cost-effective quality'],
    imageUrl: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=600'
  },

  // 3. Glasses
  {
    id: 'gl-clear',
    name: 'Clear Architectural Glass',
    category: 'glasses',
    description: 'Premium clarity float glass suitable for glazing doors, shopfronts, and partition walls.',
    thicknesses: ['4mm', '5mm', '6mm', '10mm', '12mm'],
    specs: ['High transparency', 'Tempering optional', 'Float glass quality'],
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'gl-grey',
    name: 'Toned Grey & Dark Grey Glass',
    category: 'glasses',
    description: 'Energy saving and glare reduction glass with sleek grey tinting.',
    thicknesses: ['5mm (Grey)', '5mm (Dark Grey)'],
    specs: ['Heat reduction', 'Enhanced privacy', 'Sleek dark aesthetic'],
    imageUrl: 'https://images.unsplash.com/photo-1517502884422-41eaaced0168?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'gl-colored',
    name: 'Bronze & Blue Tinted Glass',
    category: 'glasses',
    description: 'Stunning structural glass in warm brown and marine blue shades, providing privacy and UV defense.',
    thicknesses: ['5mm (Brown)', '6mm (Brown)', '5mm (Blue)'],
    specs: ['Solar heat control', 'Rich pigment tone', 'Modern facades compatibility'],
    imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'gl-reflective-ocean',
    name: 'Ocean Blue Reflective Glass',
    category: 'glasses',
    description: 'High performance reflective glass giving a mirror finish on the outside, greatly reducing heat transfer and glare.',
    thicknesses: ['5mm'],
    specs: ['Mirrored coating', 'Optimal solar control', 'Striking ocean finish'],
    imageUrl: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&q=80&w=600'
  },

  // 4. ACP
  {
    id: 'acp-panels',
    name: 'Aluminium Composite Panel (ACP)',
    category: 'panels',
    description: 'Premium cladding composite sheets featuring polyethylene core bonded between two aluminum skins.',
    specs: ['Double F (Double-Facing PE)', 'Single F (Single-Facing PE)', 'Weatherproof cladding', 'Easy routing & installation'],
    imageUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=600'
  },

  // 5. Accessories
  {
    id: 'al-accessories',
    name: 'System Accessories & Fittings',
    category: 'accessories',
    description: 'Complete range of locking gear, heavy-duty hinges, rollers, gaskets, and weatherproofing silicones for structural perfection.',
    specs: ['Standard & Friction hinges', 'Sliding window rollers', 'Premium silicone sealants', 'EPDM rubber gaskets'],
    imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=600'
  },

  // 6. Metals & Handrails
  {
    id: 'stainless-rails',
    name: 'Stainless Steel & Handrails',
    category: 'metals',
    description: 'Industrial-grade stainless steel products and balcony/staircase handrails designed for elegant space barriers.',
    specs: ['Stainless Steel Pipes & Sheets', 'Glass rail base profiles', 'Grade 304 and 316 steel', 'Polished chrome & satin finish'],
    imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=600'
  }
];
