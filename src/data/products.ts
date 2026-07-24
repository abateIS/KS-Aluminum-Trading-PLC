export interface ProductItem {
  id: string;
  name: string;
  category: 'import-profiles' | 'local-profiles' | 'glasses' | 'panels' | 'accessories' | 'metals' | 'others';
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
  'accessories': 'Aluminium Accessories ⚙️',
  'metals': 'Stainless Steel & Handrails 🛡️',
  'others': 'Other Products & Toolings 🔨',
};

// Sub-note: "We don't just sell what's listed here; we have a wide range of additional varieties, dimensions, and custom materials available on request."
export const GENERAL_DISCLAIMER_TEXT = "Looking for something else? The items listed above are just our most popular selections. We carry a wide range of additional profiles, glass dimensions, custom colors, hardware, and architectural toolings in our warehouse. Just contact us for any specific requirements!";

export const productsData: ProductItem[] = [
  // ──────────────────────────────────────────────────────
  // 1. IMPORT ALUMINUM PROFILES
  // ──────────────────────────────────────────────────────
  {
    id: 'imp-black',
    name: 'Import Profile - Matte Black',
    category: 'import-profiles',
    description: 'High-durability anodized black profile, designed for premium structural stability and modern look.',
    colors: ['Jet Black', 'Matte Black'],
    specs: ['Architectural Grade', 'Smooth finish', 'Anodized coating'],
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'imp-silver',
    name: 'Import Profile - Classic Silver',
    category: 'import-profiles',
    description: 'Classic matte silver profile offering high weather resistance and structural rigidity.',
    colors: ['Silver', 'Bright Silver'],
    specs: ['Anodized finish', 'Imported standard', 'Corrosion resistant'],
    imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'imp-bronze',
    name: 'Import Profile - Architectural Bronze',
    category: 'import-profiles',
    description: 'Elegant architectural bronze profile that adds deep, warm tones to luxury windows and door frames.',
    colors: ['Dark Bronze', 'Light Bronze'],
    specs: ['Premium anodized', 'Thermal break compatible', 'Superior thickness'],
    imageUrl: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'imp-champagne',
    name: 'Import Profile - Coffee Electrophoresis Champagne',
    category: 'import-profiles',
    description: 'Elite electrophoresis coated profile matching premium champagne aesthetics with maximum surface hardness.',
    colors: ['Coffee Champagne', 'Gold Champagne'],
    specs: ['Electrophoresis surface process', 'Scratch resistant', 'Ultra-premium look'],
    imageUrl: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'imp-woodgrain',
    name: 'Import Profile - Wood Grain Finish',
    category: 'import-profiles',
    description: 'Aluminum profiles finished with a heat-transferred wood grain texture, combining the beauty of timber with the strength of metal.',
    colors: ['Oak', 'Walnut', 'Cherry'],
    specs: ['Textured surface', 'Weatherproof', 'Anti-fading coating'],
    imageUrl: 'https://images.unsplash.com/photo-1628190760451-b8f28faaf9a8?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'imp-curtainwall',
    name: 'Import Profile - Heavy Curtain Wall Series',
    category: 'import-profiles',
    description: 'Heavy-duty structural profiles specifically extruded for multi-story glass curtain wall frameworks.',
    colors: ['Sliver', 'Black', 'Grey'],
    specs: ['High wind load resistance', 'Mullion & Transom systems', 'Structural glazing support'],
    imageUrl: 'https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?auto=format&fit=crop&q=80&w=600'
  },

  // ──────────────────────────────────────────────────────
  // 2. LOCAL ALUMINUM PROFILES
  // ──────────────────────────────────────────────────────
  {
    id: 'loc-profiles-standard',
    name: 'Standard Local Windows/Doors Profile',
    category: 'local-profiles',
    description: 'Locally manufactured high-standard sliding and casement profiles tailored for Ethiopian climate conditions.',
    colors: ['Black', 'Grey', 'Ivory', 'Bronze', 'Mat Coffee', 'White', 'Silver'],
    specs: ['Standard extrusion', 'Extensive color availability', 'Cost-effective quality'],
    imageUrl: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'loc-profiles-partition',
    name: 'Local Office Partition Profiles',
    category: 'local-profiles',
    description: 'Sleek structural profiles designed internally for creating segmented office rooms and commercial interior dividers.',
    colors: ['White', 'Silver', 'Black'],
    specs: ['Lightweight', 'Quick assembly', 'Glass integration'],
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'loc-profiles-louver',
    name: 'Local Aluminum Louver Blades',
    category: 'local-profiles',
    description: 'Ventilation-focused louver blades and framing, perfect for utility areas, generator rooms, and airflow management.',
    colors: ['Silver', 'Grey', 'Bronze'],
    specs: ['Fixed or adjustable angles', 'Rain defense', 'Airflow optimized'],
    imageUrl: 'https://images.unsplash.com/photo-1510619888998-356fd4df0512?auto=format&fit=crop&q=80&w=600'
  },

  // ──────────────────────────────────────────────────────
  // 3. PREMIUM GLASSES
  // ──────────────────────────────────────────────────────
  {
    id: 'gl-clear',
    name: 'Clear Architectural Float Glass',
    category: 'glasses',
    description: 'Premium clarity float glass suitable for glazing doors, shopfronts, and partition walls.',
    thicknesses: ['4mm', '5mm', '6mm', '8mm', '10mm', '12mm'],
    specs: ['High transparency', 'Tempering optional', 'Float glass quality'],
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'gl-grey',
    name: 'Toned Grey & Dark Grey Glass',
    category: 'glasses',
    description: 'Energy saving and glare reduction glass with sleek grey tinting.',
    thicknesses: ['5mm', '6mm', '8mm'],
    specs: ['Heat reduction', 'Enhanced privacy', 'Sleek dark aesthetic'],
    imageUrl: 'https://images.unsplash.com/photo-1517502884422-41eaaced0168?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'gl-colored',
    name: 'Bronze & Blue Tinted Glass',
    category: 'glasses',
    description: 'Stunning structural glass in warm brown and marine blue shades, providing privacy and UV defense.',
    thicknesses: ['5mm', '6mm'],
    specs: ['Solar heat control', 'Rich pigment tone', 'Modern facades compatibility'],
    imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'gl-reflective-ocean',
    name: 'Ocean Blue Reflective Glass',
    category: 'glasses',
    description: 'High performance reflective glass giving a mirror finish on the outside, greatly reducing heat transfer and glare.',
    thicknesses: ['5mm', '6mm'],
    specs: ['Mirrored coating', 'Optimal solar control', 'Striking ocean finish'],
    imageUrl: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'gl-tempered',
    name: 'Tempered / Toughened Safety Glass',
    category: 'glasses',
    description: 'Heat-treated safety glass that is up to five times stronger than standard float glass. Crumbles into pebble-like pieces upon breakage to prevent injury.',
    thicknesses: ['6mm', '8mm', '10mm', '12mm'],
    specs: ['Impact-resistant', 'Required for handrails/balustrades', 'High thermal shock resistance'],
    imageUrl: 'https://images.unsplash.com/photo-1520287515109-81fb77bcdc35?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'gl-frosted',
    name: 'Frosted & Patterned Glass',
    category: 'glasses',
    description: 'Sandblasted or chemically etched glass that obscures visibility while allowing light transmission. Ideal for bathrooms and private offices.',
    thicknesses: ['4mm', '5mm', '6mm'],
    specs: ['Privacy enhancement', 'Decorative patterns', 'Soft light diffusion'],
    imageUrl: 'https://images.unsplash.com/photo-1511874229606-5b9227183ca6?auto=format&fit=crop&q=80&w=600'
  },

  // ──────────────────────────────────────────────────────
  // 4. ACP PANELS
  // ──────────────────────────────────────────────────────
  {
    id: 'acp-panels',
    name: 'Standard Aluminium Composite Panel (ACP)',
    category: 'panels',
    description: 'Premium cladding composite sheets featuring polyethylene core bonded between two aluminum skins.',
    colors: ['Silver', 'White', 'Blue', 'Red', 'Gold', 'Black'],
    specs: ['Double F (Double-Facing PE)', 'Single F (Single-Facing PE)', 'Weatherproof cladding'],
    imageUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'acp-fire',
    name: 'Fire-Retardant ACP (FR Grade)',
    category: 'panels',
    description: 'Specialized composite cladding with a mineral-filled core designed to resist fire propagation, mandatory for high-rise buildings and public facilities.',
    colors: ['Metallic Silver', 'Arctic White', 'Champagne'],
    specs: ['B1 & A2 Fire Rating', 'Exceptional flatness', 'High thermal insulation'],
    imageUrl: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'acp-wood',
    name: 'Wood/Marble Texture ACP',
    category: 'panels',
    description: 'Architectural ACP sheets printed with high-resolution natural wood-grain and marble-stone finishes, coated with durable PVDF.',
    colors: ['Teak Wood', 'Walnut', 'Emperador Marble'],
    specs: ['Natural aesthetic', 'PVDF Coating for exterior', 'UV resistant'],
    imageUrl: 'https://images.unsplash.com/photo-1506822262706-03f6fdb3decf?auto=format&fit=crop&q=80&w=600'
  },

  // ──────────────────────────────────────────────────────
  // 5. ACCESSORIES
  // ──────────────────────────────────────────────────────
  {
    id: 'al-hardware-locks',
    name: 'Window & Door Locking Gears',
    category: 'accessories',
    description: 'High-security multi-point locking systems, crescent locks, and handles for aluminum sliding and casement frames.',
    specs: ['Crescent locks for sliders', 'Multi-point espagnolette', 'Mortise door locks'],
    imageUrl: 'https://images.unsplash.com/photo-1616782522730-8025257dc87d?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'al-hardware-friction',
    name: 'Friction Stays & Heavy Duty Hinges',
    category: 'accessories',
    description: 'Stainless steel friction stays for top and side hung windows, ensuring smooth opening and solid staying power in wind.',
    specs: ['304 Grade Stainless Steel stays', 'Concealed window hinges', 'Heavy-duty door butt-hinges'],
    imageUrl: 'https://images.unsplash.com/photo-1522071905252-895180004921?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'al-hardware-sealants',
    name: 'Weatherproofing Silicones & Gaskets',
    category: 'accessories',
    description: 'Structural glazing silicones, weather sealants, and EPDM rubber gaskets crucial for preventing water leaks and drafts.',
    specs: ['Neutral cure structural silicone', 'Weatherproof sealant', 'U-channel EPDM rubbers'],
    imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'al-hardware-rollers',
    name: 'Sliding Door & Window Rollers',
    category: 'accessories',
    description: 'Durable nylon and brass roller wheels for smooth track operation of sliding aluminum windows and heavy patio doors.',
    specs: ['Single & Double roller wheels', 'Adjustable height', 'Corrosion-resistant bearings'],
    imageUrl: 'https://images.unsplash.com/photo-1574768395568-15494cb31d04?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'al-hardware-spider',
    name: 'Spider Glass Routels & Fittings',
    category: 'accessories',
    description: 'Stainless steel spider fittings for frameless structural glass facades and canopies, offering maximum transparency.',
    specs: ['1-way to 4-way spiders', 'Articulated routels', 'Grade 316 Marine Stainless'],
    imageUrl: 'https://images.unsplash.com/photo-1563814144-8cb315e12be8?auto=format&fit=crop&q=80&w=600'
  },

  // ──────────────────────────────────────────────────────
  // 6. METALS & HANDRAILS
  // ──────────────────────────────────────────────────────
  {
    id: 'stainless-rails',
    name: 'Stainless Steel Handrail Systems',
    category: 'metals',
    description: 'Industrial-grade stainless steel products and balcony/staircase handrails designed for elegant space barriers.',
    specs: ['Stainless Steel Pipes & Sheets', 'Grade 304 and 316 steel', 'Polished chrome & satin finish'],
    imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'stainless-glass-balustrade',
    name: 'Frameless Glass Balustrade Bases',
    category: 'metals',
    description: 'Heavy-duty aluminum U-channel base shoes designed to hold thick tempered glass panels securely for modern, frameless balcony views.',
    specs: ['Surface or fascia mount base shoes', 'No vertical posts needed', 'Highly secure clamping system'],
    imageUrl: 'https://images.unsplash.com/photo-1602492471694-8bf26c45ba3a?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'stainless-standoffs',
    name: 'Stainless Steel Glass Standoffs',
    category: 'metals',
    description: 'Cylindrical stainless steel mounting hardware that pins glass panels securely to stair stringers and concrete slabs.',
    specs: ['Adjustable pin length', 'Solid stainless core', 'Polished finish'],
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=600'
  },

  // ──────────────────────────────────────────────────────
  // 7. OTHERS & TOOLINGS (New Category)
  // ──────────────────────────────────────────────────────
  {
    id: 'other-tools',
    name: 'Aluminum Cutting & Routing Machinery',
    category: 'others',
    description: 'Professional grade chop saws, copy routers, and end milling machines for precise fabrication of aluminum profiles.',
    specs: ['Heavy-duty dual mitre saws', 'Pneumatic clamping', 'Industrial routing bits'],
    imageUrl: 'https://images.unsplash.com/photo-1581092335198-d21626fdf942?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'other-blades',
    name: 'TCT Saw Blades & Drilling Bits',
    category: 'others',
    description: 'Tungsten Carbide Tipped saw blades specifically angled and tensioned for cleanly cutting thick aluminum extrusions without burrs.',
    specs: ['10-inch to 14-inch blades', 'High tooth count (T100 / T120)', 'HSS drill bits'],
    imageUrl: 'https://images.unsplash.com/photo-1533728343110-3367bd8dc6b4?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'other-safety',
    name: 'Glass Installation Suction Lifters',
    category: 'others',
    description: 'Heavy-duty double and triple cup vacuum lifters essential for safely maneuvering and placing large glass sheets on site.',
    specs: ['High load capacity', 'Ergonomic grips', 'Alloy body'],
    imageUrl: 'https://images.unsplash.com/photo-1541888087-b5523000b0d3?auto=format&fit=crop&q=80&w=600'
  }
];
