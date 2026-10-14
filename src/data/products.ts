export interface Product {
  id: string;
  name: string;
  category: 'fresh-produce' | 'spices' | 'tissue-products' | 'kitchenware';
  categoryLabel: string;
  shortDescription: string;
  overview: string;
  qualityFocus: string;
  packagingOptions: string[];
  exportSpecs: {
    origin: string;
    shelfLifeOrGrade: string;
    inspectionReady: string;
    temperatureOrStorage?: string;
  };
  image: string;
  gallery: string[];
  featured?: boolean;
}

export interface ProductCategory {
  id: 'fresh-produce' | 'spices' | 'tissue-products' | 'kitchenware';
  name: string;
  shortTag: string;
  description: string;
  bannerImage: string;
  productCountText: string;
}

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    id: 'fresh-produce',
    name: 'Fresh Produce',
    shortTag: 'Agro Exports',
    description: 'Farm-fresh vegetables and fruits sourced directly from verified agricultural clusters with intact cold-chain readiness.',
    bannerImage: '/images/veg_fruits_rich_luxury.jpeg',
    productCountText: '4 Primary Export Varieties',
  },
  {
    id: 'spices',
    name: 'Spices & Dried Products',
    shortTag: 'Indian Spices',
    description: 'Sortex-cleaned, high-aroma whole spices and sun-dried specialties prepared under strict moisture-controlled standards.',
    bannerImage: '/images/spices_luxury_export.jpeg',
    productCountText: '4 High-Demand Spice Lines',
  },
  {
    id: 'tissue-products',
    name: 'Tissue & Paper Products',
    shortTag: 'Sanitary Paper',
    description: 'Hygienic 100% virgin pulp & eco-grade tissue products tailored for commercial dispensers, hospitality, and retail.',
    bannerImage: '/images/tissue_paper_rpe_brand.jpeg',
    productCountText: '4 Commercial Formats',
  },
  {
    id: 'kitchenware',
    name: 'Stainless Steel Kitchenware',
    shortTag: 'Cookware & Drinkware',
    description: 'Food-grade stainless steel cookware, insulated vacuum flasks, and durable storage containers with mirror or satin finish.',
    bannerImage: '/images/ss_bottles_only_rpe.jpeg',
    productCountText: '3 Engineered Product Lines',
  },
];

export const PRODUCTS: Product[] = [
  // --- FRESH PRODUCE ---
  {
    id: 'green-chilli',
    name: 'Fresh Green Chilli',
    category: 'fresh-produce',
    categoryLabel: 'Fresh Produce',
    shortDescription: 'Fresh, carefully selected green chillies prepared for international export markets.',
    overview: 'Premium export-grade fresh green chillies harvested at optimal maturity from Gujarat and Maharashtra farming belts. Cleaned, sorted for uniform length and vibrant emerald color, free from punctures or blemishes.',
    qualityFocus: 'Pre-cooled immediately post-harvest to preserve pungency, crispness, and crown integrity. Strict sorting to discard discolored or bruised units.',
    packagingOptions: [
      '3.5 kg / 4.0 kg / 5.0 kg Corrugated Fiberboard (CFB) Export Cartons',
      'Punched micro-perforated food-grade liners for breathability',
      'Customized palletized consignments with temperature data-loggers',
    ],
    exportSpecs: {
      origin: 'India (Gujarat / Maharashtra)',
      shelfLifeOrGrade: 'G4, Teja & Export Long Varieties (6cm - 12cm)',
      inspectionReady: 'APEDA & Phytosanitary Inspection Compliant',
      temperatureOrStorage: 'Maintained at 7°C to 10°C with 90-95% RH',
    },
    image: '/images/green_chilli_fresh.jpeg',
    gallery: [
      '/images/green_chilli_fresh.jpeg',
      '/images/fresh_produce_showcase.jpeg',
      '/images/hero_export_logistics.jpeg',
    ],
    featured: true,
  },
  {
    id: 'onion',
    name: 'Fresh Red Onion',
    category: 'fresh-produce',
    categoryLabel: 'Fresh Produce',
    shortDescription: 'Uniformly graded, sun-cured red onions ready for global ocean container transit.',
    overview: 'High-pungency, solid red onions with tight outer skin layers. Naturally field-cured to ensure low moisture in the outer peels and long shelf life during sea voyages to Gulf, Far East, and European destinations.',
    qualityFocus: 'Mechanically and manually graded for diameter (45mm+, 55mm+, 60mm+). Free from sprouting, rot, soil residues, and mechanical cuts.',
    packagingOptions: [
      '5 kg, 10 kg, 20 kg, 25 kg & 50 kg Red Lenomesh / Net Bags',
      'Jute gunny bags available upon buyer request',
      'Reefer container stuffing (40ft high cube holding approx. 28-29 MT)',
    ],
    exportSpecs: {
      origin: 'India (Nashik / Gujarat)',
      shelfLifeOrGrade: 'Export Grade (Sizes: 45mm - 65mm+)',
      inspectionReady: 'Phytosanitary & Fumigation Certified',
      temperatureOrStorage: 'Optimal dry transit ventilation at 0°C - 4°C or ambient ventilated containers',
    },
    image: '/images/red_onion_mesh_bag.jpeg',
    gallery: [
      '/images/red_onion_mesh_bag.jpeg',
      '/images/fresh_produce_showcase.jpeg',
    ],
    featured: true,
  },
  {
    id: 'sweet-corn',
    name: 'Fresh Sweet Corn',
    category: 'fresh-produce',
    categoryLabel: 'Fresh Produce',
    shortDescription: 'Plump, golden-kernel sweet corn cobs packed in protective export crates.',
    overview: 'Tender, naturally sweet corn cobs harvested in early morning hours to lock in sugar levels. De-husked or with green husk protective packaging based on buyer preference.',
    qualityFocus: 'Zero pesticide residue compliance, high kernel moisture, vibrant golden color, and uniform cob length with clean silking.',
    packagingOptions: [
      '5 kg / 10 kg ventilated export master cartons',
      'Shrink-wrapped trays (2-4 cobs per tray) with barcode labeling',
      'Crushed ice or pre-cooled reefer packing',
    ],
    exportSpecs: {
      origin: 'India',
      shelfLifeOrGrade: 'A-Grade Fresh Cobs (Length 18cm - 22cm)',
      inspectionReady: 'Food Safety & Microbiological Standards Tested',
      temperatureOrStorage: 'Strict cold-chain transit at 0°C to 2°C',
    },
    image: '/images/fresh_produce_showcase.jpeg',
    gallery: [
      '/images/fresh_produce_showcase.jpeg',
    ],
    featured: true,
  },
  {
    id: 'mango',
    name: 'Fresh Mangoes (Seasonal)',
    category: 'fresh-produce',
    categoryLabel: 'Fresh Produce',
    shortDescription: 'Hand-picked premium Indian mangoes, foam-sleeved for luxury international distribution.',
    overview: 'World-renowned Indian mangoes including GI-tagged Kesar and Alphonso varieties. Cultivated in sun-drenched orchards, hot water treated or VHT/gamma irradiated according to import country protocols.',
    qualityFocus: 'Hand-harvested with stem clips to prevent sap burn. Individually inspected for uniform brix levels, fragrance, and flawless skin.',
    packagingOptions: [
      '3.0 kg / 3.2 kg / 4.0 kg CFB gift/export boxes with partition dividers',
      'Soft protective foam net netting for each individual mango fruit',
      'Air-freight ready palletized consignments with temperature trackers',
    ],
    exportSpecs: {
      origin: 'India (Gujarat / Maharashtra)',
      shelfLifeOrGrade: 'Premium Table Grade (Counts: 9, 10, 12 per box)',
      inspectionReady: 'APEDA Packhouse Certified & Quarantine Inspected',
      temperatureOrStorage: 'Maintained at 12°C - 13°C for regulated ripening',
    },
    image: '/images/fresh_produce_showcase.jpeg',
    gallery: [
      '/images/fresh_produce_showcase.jpeg',
    ],
    featured: false,
  },

  // --- SPICES & DRIED PRODUCTS ---
  {
    id: 'red-chilli',
    name: 'Whole Dried Red Chilli',
    category: 'spices',
    categoryLabel: 'Spices & Dried Products',
    shortDescription: 'Sun-dried, vibrant red chillies with controlled moisture and intense natural heat.',
    overview: 'Top-grade Indian dried whole red chillies sourced from prime growing belts. Available in Teja, Sannam (S4), and Byadgi varieties, tailored for both direct retail repackaging and commercial spice grinding.',
    qualityFocus: 'Moisture capped below 11% to prevent aflatoxin and mold formation. Sortex-cleaned to remove foreign matter, dust, and loose seeds.',
    packagingOptions: [
      '5 kg, 10 kg, 25 kg new export-grade Jute / Gunny Bags',
      'Poly-lined moisture barrier PP woven bags',
      'Custom pressed bales (compressed 100 kg bales) for bulk sea containers',
    ],
    exportSpecs: {
      origin: 'India (Andhra / Gujarat)',
      shelfLifeOrGrade: 'Stem / Stemless Whole Chilli (SHU heat levels verified)',
      inspectionReady: 'Spices Board of India / FSSAI Tested',
      temperatureOrStorage: 'Dry, cool, ventilated storage (< 20°C)',
    },
    image: '/images/spices_export_showcase.jpeg',
    gallery: [
      '/images/spices_export_showcase.jpeg',
    ],
    featured: true,
  },
  {
    id: 'turmeric',
    name: 'Turmeric / Haldi',
    category: 'spices',
    categoryLabel: 'Spices & Dried Products',
    shortDescription: 'High-curcumin whole dried turmeric fingers and sorted export powder.',
    overview: 'Polished dried turmeric fingers (Salem & Nizamabad types) known globally for their golden-yellow hue, deep earthy aroma, and elevated natural curcumin content.',
    qualityFocus: 'Double-polished surface, free from artificial colorants, lead chromate, or chemical preservatives. Hard, sound fingers with uniform density.',
    packagingOptions: [
      '25 kg / 50 kg Double-layer PP woven bags with inner poly liner',
      'Food-grade kraft paper bags for ground turmeric powder',
      'Vacuum-sealed bulk cartons upon buyer specification',
    ],
    exportSpecs: {
      origin: 'India',
      shelfLifeOrGrade: 'Curcumin Content: 3.0% to 5.0%+ (Bold Polished Fingers)',
      inspectionReady: 'Microbiology & Heavy Metals Certificate of Analysis',
      temperatureOrStorage: 'Store in airtight containers in ambient dry condition',
    },
    image: '/images/spices_export_showcase.jpeg',
    gallery: [
      '/images/spices_export_showcase.jpeg',
    ],
    featured: true,
  },
  {
    id: 'cumin-seeds',
    name: 'Cumin Seeds / Jeera',
    category: 'spices',
    categoryLabel: 'Spices & Dried Products',
    shortDescription: 'Sortex machine-cleaned Gujarat cumin seeds with 99.5% purity guarantee.',
    overview: 'India produces the world’s most aromatic cumin seeds. Sourced directly from Gujarat and Rajasthan agricultural markets, passing through multi-stage destoning, aspirating, and optical sortex machines.',
    qualityFocus: 'High volatile oil percentage, uniform elongated seed shape, natural greyish-brown color, zero weed seed contamination.',
    packagingOptions: [
      '25 kg / 50 kg Polypropylene woven export sacks',
      'Multi-wall paper bags with PE inner liner',
      'Private-label retail standup pouches (250g, 500g, 1kg)',
    ],
    exportSpecs: {
      origin: 'India (Gujarat / Rajasthan)',
      shelfLifeOrGrade: '99% / 99.5% Machine Cleaned & Sortex Quality',
      inspectionReady: 'Purity, Moisture & Extraneous Matter Certified',
      temperatureOrStorage: 'Dry ambient storage away from direct sunlight',
    },
    image: '/images/cumin_seeds_sortex.jpeg',
    gallery: [
      '/images/cumin_seeds_sortex.jpeg',
      '/images/spices_export_showcase.jpeg',
    ],
    featured: true,
  },
  {
    id: 'mango-based-products',
    name: 'Dried Mango / Amchur Specialties',
    category: 'spices',
    categoryLabel: 'Spices & Dried Products',
    shortDescription: 'Naturally dried raw mango slices and fine tart amchur powder.',
    overview: 'Unripened green mangoes sun-dried under sanitary hygienic conditions and processed into tart, tangy dried mango slices or fine amchur powder used widely in culinary seasonings.',
    qualityFocus: 'Clean sun-drying on raised food-safe tables, moisture-regulated to prevent clump formation, zero sulfur bleaching.',
    packagingOptions: [
      '10 kg / 25 kg Food-grade poly-lined master cartons',
      'Nitrogen-flushed foil bags for powder stability',
    ],
    exportSpecs: {
      origin: 'India',
      shelfLifeOrGrade: 'Commercial Food-Grade Slices & Powder',
      inspectionReady: 'FSSAI Food Safety Approved',
      temperatureOrStorage: 'Airtight dry container',
    },
    image: '/images/spices_export_showcase.jpeg',
    gallery: [
      '/images/spices_export_showcase.jpeg',
    ],
    featured: false,
  },

  // --- TISSUE & PAPER PRODUCTS ---
  {
    id: 'toilet-tissue',
    name: 'Toilet Tissue Rolls',
    category: 'tissue-products',
    categoryLabel: 'Tissue & Paper',
    shortDescription: 'Ultra-soft, quick-dissolving 2-ply and 3-ply virgin tissue rolls in bulk bundles.',
    overview: 'High-bulk, soft embossed toilet tissue rolls manufactured from 100% virgin wood pulp or eco-recycled cellulose. Designed for septic-safe rapid dispersion and optimal hand feel.',
    qualityFocus: 'Bleach-free chlorine-safe processing, zero lint shedding, tight roll winding with uniform perforation spacing.',
    packagingOptions: [
      'Individual paper-wrapped rolls or shrink-wrapped 4-packs / 10-packs',
      'Master polyethylene poly-bales containing 48 to 96 rolls',
      'High-cube 40ft container loose-loaded or palletized for ocean transit',
    ],
    exportSpecs: {
      origin: 'India',
      shelfLifeOrGrade: '2-Ply / 3-Ply (GSM: 15-18 per ply, 150-300 sheets)',
      inspectionReady: 'Hygienic Manufacturing & Tensile Tested',
      temperatureOrStorage: 'Dry warehouse pallet storage',
    },
    image: '/images/tissue_paper_rpe_brand.jpeg',
    gallery: [
      '/images/tissue_paper_rpe_brand.jpeg',
    ],
    featured: true,
  },
  {
    id: 'facial-tissue',
    name: 'Facial Tissue Boxes & Soft Packs',
    category: 'tissue-products',
    categoryLabel: 'Tissue & Paper',
    shortDescription: 'Gentle, hypoallergenic interfolded facial tissues in retail and dispenser formats.',
    overview: 'Silky smooth, high-absorbency multi-ply facial tissue paper gentle on delicate skin. Interfolded V-fold sheets ensure smooth pop-up dispensing without tearing.',
    qualityFocus: 'Optical brightener agent (OBA) free, dermatologically neutral, high dry and wet tensile strength.',
    packagingOptions: [
      '100 / 150 / 200 sheets premium printed cardboard dispenser boxes',
      'Poly soft-pack pouch wraps for hospitality and travel',
      'Master cartons containing 24 to 36 boxes',
    ],
    exportSpecs: {
      origin: 'India',
      shelfLifeOrGrade: '100% Virgin Fiber (2-Ply / 3-Ply Soft)',
      inspectionReady: 'Sanitary Quality Compliance',
      temperatureOrStorage: 'Standard ambient dry conditions',
    },
    image: '/images/tissue_paper_rpe_brand.jpeg',
    gallery: [
      '/images/tissue_paper_rpe_brand.jpeg',
    ],
    featured: false,
  },
  {
    id: 'kitchen-tissue',
    name: 'Kitchen Towel / Jumbo Tissue Rolls',
    category: 'tissue-products',
    categoryLabel: 'Tissue & Paper',
    shortDescription: 'Heavy-duty embossed absorbent kitchen towels for food service & home.',
    overview: 'Thick, textured point-to-point embossed kitchen paper towels engineered for maximum oil absorption and liquid spill cleanup without disintegrating.',
    qualityFocus: 'Certified safe for direct food contact. High wet-tensile strength prevents fiber residue on food items or kitchen counters.',
    packagingOptions: [
      'Twin-roll (2 pack) or 4-roll retail poly packs',
      'Commercial jumbo roll rolls (300m - 500m) for center-pull dispensers',
      'Corrugated master shipping boxes',
    ],
    exportSpecs: {
      origin: 'India',
      shelfLifeOrGrade: 'Heavy Embossed 2-Ply (High Wet Strength)',
      inspectionReady: 'Food Contact Safety Compliant',
      temperatureOrStorage: 'Dry moisture-free stacking',
    },
    image: '/images/tissue_paper_showcase.jpeg',
    gallery: [
      '/images/tissue_paper_showcase.jpeg',
    ],
    featured: true,
  },
  {
    id: 'table-napkins',
    name: 'Table Napkins & Dinner Serviettes',
    category: 'tissue-products',
    categoryLabel: 'Tissue & Paper',
    shortDescription: 'Embossed dining napkins for hospitality, airline catering & institutional dining.',
    overview: 'Crisp, quarter-fold or 1/8-fold paper napkins available in 1-ply snack formats and luxurious 2-ply dinner napkin weights for restaurants, hotels, and airline procurement.',
    qualityFocus: 'Uniform border embossing, clean edge cut, high opacity, clean absorbency.',
    packagingOptions: [
      '50, 100, and 250 count clear wrapped packs',
      'Master cartons of 2,000 to 5,000 units',
      'Buyer custom logo printing capability available',
    ],
    exportSpecs: {
      origin: 'India',
      shelfLifeOrGrade: '1-Ply & 2-Ply (Sizes: 30x30cm, 33x33cm, 40x40cm)',
      inspectionReady: 'Hospitality Export Standard',
      temperatureOrStorage: 'Standard dry storage',
    },
    image: '/images/tissue_paper_showcase.jpeg',
    gallery: [
      '/images/tissue_paper_showcase.jpeg',
    ],
    featured: false,
  },

  // --- STAINLESS STEEL KITCHENWARE ---
  {
    id: 'stainless-steel-cookware',
    name: 'Stainless Steel Cookware & Utensils',
    category: 'kitchenware',
    categoryLabel: 'Stainless Steel Kitchenware',
    shortDescription: 'Heavy-gauge food-grade stainless steel pots, pans, casseroles, and cooking sets.',
    overview: 'Precision-fabricated Indian stainless steel kitchenware manufactured from food-grade SS 304 and magnetic induction-compatible SS 430. Features tri-ply base construction for uniform thermal conductivity.',
    qualityFocus: 'Mirror-polished outer surface and satin inner finish. Heavy-duty riveted stay-cool handles and rolled drip-free pouring rims.',
    packagingOptions: [
      'Individual protective bubble pouch in 5-ply printed color gift boxes',
      'Heavy-duty corrugated export outer shipper (4 to 8 sets per carton)',
      'Barcode and shrink-wrap options for direct retail palletization',
    ],
    exportSpecs: {
      origin: 'India',
      shelfLifeOrGrade: 'SS 304 / Heavy Gauge Tri-Ply Base',
      inspectionReady: 'Food Contact Safe (LFGB / FDA Standards Tested)',
      temperatureOrStorage: 'Moisture-desiccant packed sea cartons',
    },
    image: '/images/kitchenware_steel_showcase.jpeg',
    gallery: [
      '/images/kitchenware_steel_showcase.jpeg',
      '/images/stainless_vacuum_flasks.jpeg',
    ],
    featured: true,
  },
  {
    id: 'stainless-steel-vacuum-products',
    name: 'Stainless Steel Bottles & Vacuum Flasks',
    category: 'kitchenware',
    categoryLabel: 'Stainless Steel Kitchenware',
    shortDescription: 'Classic single-wall stainless steel bottles and double-wall insulated vacuum thermal flasks.',
    overview: 'Engineered from premium food-grade SS 304 (18/8). Offers both lightweight classic bottles and advanced double-wall vacuum insulation technology retaining hot beverages for 18+ hours and cold beverages for 24+ hours.',
    qualityFocus: 'Electro-polished interior preventing metallic odors. Available in high-gloss mirror finish, satin brushed, and matte powder-coated finishes with leakproof silicone seal caps.',
    packagingOptions: [
      'Individual white or bespoke retail box with PE bag protection',
      '24 / 48 pcs master export cartons with internal honeycomb dividers',
    ],
    exportSpecs: {
      origin: 'India',
      shelfLifeOrGrade: 'SS 304 (18/8) Food Grade / Single & Double-Wall (350ml - 1500ml)',
      inspectionReady: 'BPA-Free & Thermal Performance Factory Inspected',
      temperatureOrStorage: 'Standard export warehousing',
    },
    image: '/images/ss_bottles_only_rpe.jpeg',
    gallery: [
      '/images/ss_bottles_only_rpe.jpeg',
      '/images/stainless_vacuum_flasks.jpeg',
    ],
    featured: true,
  },
  {
    id: 'stainless-steel-containers',
    name: 'Household & Kitchen Containers',
    category: 'kitchenware',
    categoryLabel: 'Stainless Steel Kitchenware',
    shortDescription: 'Airtight storage canister sets, multi-tier tiffin lunchboxes, and mixing bowls.',
    overview: 'Durable, rust-proof stainless steel canisters and multi-compartment lunch tiffins. Reusable, non-leaching, and designed for decades of daily residential and institutional kitchen use.',
    qualityFocus: 'Precision-stamped deep draw bodies, seamless rounded corners for easy cleaning, tight clamp locks or silicone snap lids.',
    packagingOptions: [
      'Nesting sets (3-piece, 4-piece, 5-piece) to optimize freight volume',
      'Corrugated export outer cartons',
    ],
    exportSpecs: {
      origin: 'India',
      shelfLifeOrGrade: 'Export Grade Food-Safe Stainless Steel',
      inspectionReady: 'Corrosion Resistance & Finish Checked',
      temperatureOrStorage: 'Dry sea freight storage',
    },
    image: '/images/kitchenware_steel_showcase.jpeg',
    gallery: [
      '/images/kitchenware_steel_showcase.jpeg',
    ],
    featured: false,
  },
];
