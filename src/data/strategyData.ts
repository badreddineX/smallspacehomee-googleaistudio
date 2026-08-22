import { DigitalProduct, ProductBundle, BlogFunnelMapping, FlagshipModule } from '../types';

export const AUDIENCE_PERSONAS = [
  {
    id: 'first-time-renter',
    name: 'The First-Apartment Renter',
    demographics: 'Ages 21–29, moving into first studio or 1-bed (350–650 sq ft).',
    budgetMindset: 'Budget-conscious, terrified of losing $2,000+ security deposit, overwhelmed by shopping lists and drilling bans.',
    painPoints: [
      'Landlord bans drilling or painting, leaving walls blank and storage non-existent',
      'Tiny galley kitchen with zero counter space for chopping or meal prep',
      'Closet is a single wire shelf that overflows within 3 weeks',
      'No front hallway; coats and shoes pile up right beside the entrance door'
    ],
    triggerPhrase: '"I need hacks to make my rental look amazing without drilling holes or losing my deposit."'
  },
  {
    id: 'urban-condo-dweller',
    name: 'The Compact Condo Professional',
    demographics: 'Ages 28–42, renting or owning urban condo (450–800 sq ft), hybrid/remote worker.',
    budgetMindset: 'Values Scandinavian aesthetics, willing to pay for instant cheat sheets and smart hardware hacks that save space and time.',
    painPoints: [
      'Living room doubles as Zoom office and dining room with visible cable tangles',
      'Paper-thin condo walls letting hallway footsteps and neighbor noise through',
      'Under-bed area is a chaotic dusty black hole of seasonal clothes and suitcases',
      'Home feels visually cramped and dark despite having a window'
    ],
    triggerPhrase: '"I want designer boutique vibes and clever hidden storage, not plastic bin clutter."'
  },
  {
    id: 'downsizing-mover',
    name: 'The Downsizing Transitioner',
    demographics: 'Ages 30–55+, transitioning from larger suburban home to compact urban rental or loft.',
    budgetMindset: 'Needs fast, tactical checklists and spatial clearance formulas before moving day.',
    painPoints: [
      'Buying furniture that is 2 inches too deep, blocking door swings and narrow walkways',
      'Cramming wardrobe into 60% less closet space without damaging garments',
      'Struggling to separate sleep and living areas in open-concept floor plans'
    ],
    triggerPhrase: '"Give me the exact measurements and tricks so I don’t waste money on things that don’t fit."'
  }
];

export const CORE_PROBLEMS_ANALYSIS = [
  {
    title: 'The Zero-Drill Renter Dilemma',
    description: 'Renters are trapped between living with bare walls / zero vertical storage or risking a $1,500+ security deposit deduction for drywall anchor holes.',
    solutionApproach: 'Tactical adhesive shear physics, tension rod load multiplication, and zero-damage heavy mounting hacks.'
  },
  {
    title: 'The Galley Kitchen Prep & Cabinet Bottleneck',
    description: 'Under 45 sq ft kitchens lose 60% of vertical cabinet height to dead space, causing cutting boards and appliances to crowd countertops.',
    solutionApproach: 'Inside-door tension mechanics, magnetic undershelf matrix, and over-sink cutting board bridges.'
  },
  {
    title: 'The Single-Rod Closet Overflow Crisis',
    description: 'Standard rental closets waste 4 vertical feet below short hanging clothes and 2 vertical feet above the top shelf.',
    solutionApproach: 'Suspended dual-rod hacks, soda-tab cascading garment hangers, and vertical shelf compression guides.'
  },
  {
    title: 'The Micro-Apartment Visual Claustrophobia',
    description: 'Overhead glare lighting and lack of optical light reflection makes small studios feel like concrete boxes.',
    solutionApproach: 'Floor-to-ceiling curtain illusion hacks, 45-degree mirror daylight bounce formulas, and 2200K layered ambient lighting.'
  }
];

export const TOP_20_PRODUCTS: DigitalProduct[] = [
  {
    id: 'kit-zero-damage-mounting',
    rank: 1,
    title: 'Hang Mirrors, Shelves & Art Without Damaging Rental Walls: The Zero-Damage Mounting System',
    tagline: 'A field-tested engineering system to mount heavy mirrors, floating shelves, and gallery walls with zero drywall tears and zero deposit loss.',
    level: 'quick-win',
    priceRange: '$19 – $29 CAD',
    recommendedPrice: 24,
    format: 'Visual Field Playbook (.PDF) + Pocket Hacks Deck + Load Calculator (.CSV) + Notion Hub',
    targetProblem: 'Renters are restricted from drilling structural holes into rental walls, resulting in lost vertical storage and blank, unpersonalized spaces.',
    valueProposition: 'The definitive tactical guide to hanging frames, floating plants, and curtain rods safely using documented shear mechanics, proper prep, and zero-damage hardware.',
    differentiation: 'Tested in our 510 sq ft Toronto Rental Lab. Grounded in substrate mechanics, 70% IPA de-oiling protocols, 3M Claw shear vectors, and 60-second thermal blow-dryer adhesive release.',
    blogCategory: 'Renter Hacks & Wall Mounting',
    difficulty: 'Low',
    isTop10: true,
    roomZone: 'Universal',
    renterSafetyRating: 'Designed around non-destructive and reversible rental solutions',
    viralHook: 'The $4 hardware store hack that holds a heavy framed mirror without drilling anchors or damaging drywall.',
    scores: {
      problemSeverity: 10,
      searchAlignment: 10,
      audienceRelevance: 10,
      productUsefulness: 10,
      perceivedValue: 9,
      differentiation: 10,
      visualPotential: 10,
      easeOfProduction: 9,
      bundlePotential: 10,
      upsellPotential: 10,
      evergreenPotential: 10,
      blogPromotionFit: 10,
      pinterestPotential: 10,
      flagshipPotential: 9,
      totalScore: 137
    },
    whyBuild: 'The #1 universal high-converting digital product. Renter mounting fear and lease preservation are the highest search intent queries across urban renters.',
    deliverables: [
      'Master Zero-Damage Mounting Visual Field Playbook (30+ Page Vector PDF)',
      'Zero-Damage Installation Pocket Field Cards (Printable 4x6" PDF)',
      'Interactive Substrate & Load Weight Safety Calculator (Interactive CSV / Sheets)',
      '1-Click Renter Hardware & Tool Checklist (Notion Dashboard)'
    ],
    secretHacks: [
      'The Painter’s Tape + Hot Glue Hybrid Trick for lightweight acoustic panels and decorative ledges',
      'The 3M Claw 45-degree drywall shear-angle weight distribution multiplier (no drywall anchors required)',
      'Tension-rod anchor reinforcement with high-friction silicone pads for curtain rods and closets',
      'Blow-dryer 60-second thermal release protocol for clean adhesive strip removal without paint peel'
    ],
    proTips: [
      'Always clean rental walls with 70% Isopropyl alcohol before applying adhesive—removes the microscopic grease film that causes over 80% of adhesive failures.',
      'For mirrors over 20 lbs, distribute the vertical shear load across two diagonal anchor points spaced 16 inches apart.'
    ],
    keyModules: [
      'Chapter 1: Substrate Diagnosis & The 70% IPA Clean Protocol',
      'Chapter 2: Heavy Mirror & Art Hanging Without Stud Drilling',
      'Chapter 3: Tension Rod Engineering for Curtains, Closets & Plants',
      'Chapter 4: Safe Removal & Emergency Paint-Peel Repair SOP'
    ],
    blogTriggers: ['Renter Wall Decor', 'How to Hang Heavy Mirrors Without Nails', 'Command Strip Hacks', 'Apartment Decorating Tips'],
    fourthwallCategory: 'Tactical Action Kits'
  },
  {
    id: 'kit-micro-kitchen-maxima',
    rank: 2,
    title: 'Double Your Usable Kitchen & Cabinet Space: 500 Sq Ft Galley Kitchen Maximizer',
    tagline: 'Unlock 18+ cubic feet of dead cabinet space and create 40% more food prep area in a compact kitchen under 45 sq ft.',
    level: 'quick-win',
    priceRange: '$19 – $27 CAD',
    recommendedPrice: 22,
    format: 'Visual Field Playbook (.PDF) + Cabinet Blueprint Cards + Dimensions Calculator (.CSV) + Notion Hub',
    targetProblem: 'Tiny apartment kitchens with under 2 feet of usable prep counter, deep chaotic lower cabinets, and overflowing pantry items.',
    valueProposition: 'Creates organized vertical layers and expands meal prep surfaces using non-destructive hardware tricks and over-sink spatial bridges.',
    differentiation: 'Provides exact inch-by-inch cabinet door interior clearances, over-sink cutting board specs, and magnetic spice rack layouts.',
    blogCategory: 'Kitchen Organization & Prep Hacks',
    difficulty: 'Low',
    isTop10: true,
    roomZone: 'Kitchen',
    renterSafetyRating: 'Designed around non-destructive and reversible rental solutions',
    viralHook: 'How to double your kitchen cabinet capacity without spending more than $25 on hardware.',
    scores: {
      problemSeverity: 10,
      searchAlignment: 10,
      audienceRelevance: 10,
      productUsefulness: 10,
      perceivedValue: 9,
      differentiation: 9,
      visualPotential: 10,
      easeOfProduction: 9,
      bundlePotential: 10,
      upsellPotential: 9,
      evergreenPotential: 10,
      blogPromotionFit: 10,
      pinterestPotential: 10,
      flagshipPotential: 8,
      totalScore: 134
    },
    whyBuild: 'Kitchen chaos is the top daily lifestyle pain point in urban studios and 1-bedroom apartments.',
    deliverables: [
      'Micro-Kitchen Space Doubler Visual Field Playbook (Printable PDF)',
      'Cabinet Door & Vertical Storage Blueprint Cards (Printable PDF)',
      'Cabinet Clearance & Vertical Multiplier Matrix (Interactive CSV / Sheets)',
      '1-Click Kitchen Zone & Pantry Organizer (Notion Dashboard)'
    ],
    secretHacks: [
      'Inside-cabinet-door tension rod retention to hold cutting boards and pot lids upright in 2 inches of depth',
      'Under-shelf magnetic strip for stainless spice jars (frees up an entire cabinet shelf)',
      'The Over-Sink Solid Wood Cutting Board Bridge (creates 3 sq ft of instant food prep space)',
      'Vertical tension sheet pan organizers replacing horizontal stacking chaos'
    ],
    proTips: [
      'Group tall oils and vinegars in a lazy susan turntable in the lowest cabinet to prevent back-of-shelf clutter paralysis.',
      'Use a magnetic knife bar mounted to the side of the refrigerator to free up 12 inches of counter space from bulky wooden knife blocks.'
    ],
    keyModules: [
      'Module 1: The 4-Tier Cabinet Height Vertical Multiplier',
      'Module 2: Inside-Door & Dead Space Exploitation Tactics',
      'Module 3: Countertop Clearance & The Over-Sink Prep Bridge',
      'Module 4: Small-Space Pantry & Bulk Food Decanting System'
    ],
    blogTriggers: ['Small Kitchen Organization', 'Tiny Apartment Cooking', 'Galley Kitchen Hacks', 'Cabinet Storage Ideas'],
    fourthwallCategory: 'Tactical Action Kits'
  },
  {
    id: 'kit-closet-quadrupler',
    rank: 3,
    title: 'Quadruple Your Closet & Wardrobe Capacity: Vertical Organization Playbook',
    tagline: 'Turn a cramped 3-foot single-rod rental closet into a 4-tiered boutique wardrobe with zero carpentry or wall alterations.',
    level: 'quick-win',
    priceRange: '$19 – $29 CAD',
    recommendedPrice: 24,
    format: 'Visual Field Playbook (.PDF) + Wardrobe Ratio Cards + Garment Density Calculator (.CSV) + Notion Hub',
    targetProblem: 'Rental closets feature a single high wire shelf that leaves 4 feet of dead space underneath and causes clothing mountains.',
    valueProposition: 'Quadruples your hanging and folded garment capacity using suspended dual-rods, cascading hangers, and upper-shelf bins.',
    differentiation: 'Engineered specifically for non-standard rental closets with sliding bifold doors, wire shelving, or shallow 20-inch depths.',
    blogCategory: 'Closet & Wardrobe Systems',
    difficulty: 'Low',
    isTop10: true,
    roomZone: 'Closet & Bedroom',
    renterSafetyRating: 'Designed around non-destructive and reversible rental solutions',
    viralHook: 'Fit 120 garments in a 36-inch rental closet without wrinkles or squishing.',
    scores: {
      problemSeverity: 10,
      searchAlignment: 10,
      audienceRelevance: 10,
      productUsefulness: 10,
      perceivedValue: 9,
      differentiation: 9,
      visualPotential: 10,
      easeOfProduction: 9,
      bundlePotential: 10,
      upsellPotential: 9,
      evergreenPotential: 10,
      blogPromotionFit: 10,
      pinterestPotential: 10,
      flagshipPotential: 9,
      totalScore: 135
    },
    whyBuild: 'Wardrobe overflow is an urgent daily emotional frustration for urban renters with no storage rooms.',
    deliverables: [
      'Small Closet Quadrupler Visual Field Playbook (Printable PDF)',
      'Garment Spacing & Compression Blueprint Cards (Printable PDF)',
      'Closet Vertical Capacity & Garment Matrix (Interactive CSV / Sheets)',
      '1-Click Seasonal Wardrobe & Capsule Tracker (Notion Dashboard)'
    ],
    secretHacks: [
      'Soda-can tab cascade hack to hang 3 shirts vertically in the horizontal space of 1',
      'Suspended hanging secondary rod using 550 paracord and wooden dowel (adds 30 hangers below shirts)',
      'Clear acrylic shelf dividers on wire shelving with cardboard reinforcement inserts',
      'Under-rod hanging shoe cubby converted into folded knitwear and t-shirt filing drawers'
    ],
    proTips: [
      'Use ultra-thin velvet non-slip hangers—they recover 35% of horizontal rod space compared to chunky plastic or wooden hangers.',
      'Store out-of-season heavy coats in vacuum-seal compression cubes flat under the bed to free 50% of closet width.'
    ],
    keyModules: [
      'Module 1: The 2-Tier Hanging Rod Vertical Calibration',
      'Module 2: The Cascading Hanger & Velvet Density System',
      'Module 3: Upper Shelf Compression & Clear Bin Filing',
      'Module 4: Shoe & Accessory Zero-Floor Footprint Tactics'
    ],
    blogTriggers: ['Small Closet Organization', 'Tiny Wardrobe Hacks', 'How to Organize a Small Closet', 'Apartment Closet Ideas'],
    fourthwallCategory: 'Tactical Action Kits'
  },
  {
    id: 'kit-deposit-protection-defense',
    rank: 4,
    title: 'Rental Move-Out Restoration & Deposit Protection Guide: Tenant Defense System',
    tagline: 'The exact move-out inspection protocol, tenant pushback scripts, and $12 repair SOPs to protect your full security deposit.',
    level: 'quick-win',
    priceRange: '$22 – $32 CAD',
    recommendedPrice: 27,
    format: 'Field Repair Playbook (.PDF) + Landlord Script Cards + Move-Out Inspection Matrix (.CSV) + Notion Vault',
    targetProblem: 'Landlords charging $500–$2,000 for standard nail holes, baseboard scuffs, paint discoloration, and ordinary wear-and-tear.',
    valueProposition: 'Gives renters legal pushback copy-paste scripts, timestamped photo checklists, and foolproof $12 DIY repair formulas.',
    differentiation: 'Includes documented Canadian & US tenant clauses distinguishing "Normal Wear and Tear" from "Tenant Damage".',
    blogCategory: 'Tenant Rights & Rental Hacks',
    difficulty: 'Medium',
    isTop10: true,
    roomZone: 'Universal',
    renterSafetyRating: 'Designed around non-destructive and reversible rental solutions',
    viralHook: 'How to fix nail holes in rental walls with an $8 spackle tube and chalk so landlords can’t see them.',
    scores: {
      problemSeverity: 10,
      searchAlignment: 9,
      audienceRelevance: 10,
      productUsefulness: 10,
      perceivedValue: 10,
      differentiation: 10,
      visualPotential: 8,
      easeOfProduction: 8,
      bundlePotential: 10,
      upsellPotential: 9,
      evergreenPotential: 10,
      blogPromotionFit: 9,
      pinterestPotential: 8,
      flagshipPotential: 9,
      totalScore: 130
    },
    whyBuild: 'High perceived financial ROI. Spending $27 to protect a $2,000 deposit is an instant high-intent purchase.',
    deliverables: [
      'Renter Security Deposit Defense Playbook (Printable PDF)',
      'Landlord Negotiation & Pushback Script Cards (Printable PDF)',
      'Move-In / Move-Out 4K Photographic Checklist (Interactive CSV / Sheets)',
      '1-Click Deposit Claim & Inspection Vault (Notion Dashboard)'
    ],
    secretHacks: [
      'The $8 Spackle + White Chalk rubbing technique that matches rental matte wall textures seamlessly',
      'The Magic Eraser + Dawn dish soap baseboard restoration protocol (removes years of scuffs in 8 minutes)',
      'Timestamped wide-angle video walk-through protocol for clear condition records',
      'The Pre-Existing Condition notification template that stops move-out deductions before they happen'
    ],
    proTips: [
      'Always request a preliminary joint walk-through 14 days before your lease end date to obtain an itemized deficiency list.',
      'Take photos with a physical ruler placed next to any pre-existing floor scratch or cabinet chip to document scale.'
    ],
    keyModules: [
      'Module 1: Move-In 4K Photographic Evidence Protocol',
      'Module 2: The $12 Emergency Drywall & Paint Matching Kit',
      'Module 3: Appliance Deep-Clean & Grout Restoration Hacks',
      'Module 4: Documented Tenant Pushback Scripts & Templates'
    ],
    blogTriggers: ['How to Get Security Deposit Back', 'Apartment Move Out Checklist', 'Fixing Holes in Rental Walls', 'Landlord Disputes'],
    fourthwallCategory: 'Tactical Action Kits'
  },
  {
    id: 'kit-studio-acoustic-privacy',
    rank: 5,
    title: 'Studio Privacy & Noise Reduction Playbook: Acoustic & Soundproofing System',
    tagline: 'Block up to 75% of hallway footsteps, elevator hums, and conversational bleed in thin-walled rentals with zero wall destruction.',
    level: 'quick-win',
    priceRange: '$19 – $27 CAD',
    recommendedPrice: 22,
    format: 'Acoustic Field Playbook (.PDF) + Sound-Lock Blueprints + Decibel Matrix (.CSV) + Notion Hub',
    targetProblem: 'Thin apartment doors, hollow drywall, and uninsulated window frames letting hallway noises destroy sleep and work focus.',
    valueProposition: 'Renter-safe acoustic dampening, door jamb air seals, and acoustic curtain positioning hacks to create library-quiet calm.',
    differentiation: 'Zero construction required. Uses acoustic mass principles, weatherstripping air locks, and sound deflection angles.',
    blogCategory: 'Studio Privacy & Soundproofing',
    difficulty: 'Low',
    isTop10: true,
    roomZone: 'Living & Studio',
    renterSafetyRating: 'Designed around non-destructive and reversible rental solutions',
    viralHook: 'The $14 door seal hack that cuts hallway apartment noise by 12 decibels instantly.',
    scores: {
      problemSeverity: 9,
      searchAlignment: 9,
      audienceRelevance: 9,
      productUsefulness: 10,
      perceivedValue: 9,
      differentiation: 10,
      visualPotential: 8,
      easeOfProduction: 9,
      bundlePotential: 9,
      upsellPotential: 8,
      evergreenPotential: 10,
      blogPromotionFit: 9,
      pinterestPotential: 8,
      flagshipPotential: 7,
      totalScore: 125
    },
    whyBuild: 'Noise pollution is the #1 silent driver of sleep deprivation and work-from-home stress in condo buildings.',
    deliverables: [
      'Studio Acoustic Privacy & Soundproofing Field Playbook (Printable PDF)',
      'Door Jamb & Window Sound-Lock Blueprint Cards (Printable PDF)',
      'Acoustic Materials & Decibel Reduction Matrix (Interactive CSV / Sheets)',
      '1-Click Sound Masking & Room Acoustic Planner (Notion Dashboard)'
    ],
    secretHacks: [
      'Dual-density silicone door bottom draft stopper (blocks sound waves passing under the 1-inch front door gap)',
      'Triple-weave 32oz blackout thermal drapes hung 4 inches wider than windows to absorb exterior street rumble',
      'Corner bass trap acoustic redirection: placing dense book stacks in corners to dissipate low-frequency vibrations',
      'Pink noise speaker placement directly facing the entry door to create acoustic masking field'
    ],
    proTips: [
      'Sound travels like water through air gaps. If light shines under your front door, 90% of hallway noise enters through that air gap—seal the perimeter air first.',
      'Place high-pile wool rugs with dense rubber felt pads beneath your desk chair and bed to dampen impact vibrations.'
    ],
    keyModules: [
      'Module 1: Front Door Acoustic Air-Lock Architecture',
      'Module 2: Window Thermal & Traffic Sound Damping',
      'Module 3: Shared Wall Decibel Reduction Tactics',
      'Module 4: Ambient Sound Masking & Sleep Zone Calibration'
    ],
    blogTriggers: ['Apartment Soundproofing', 'How to Block Neighbor Noise', 'Quiet Apartment Hacks', 'Studio Privacy'],
    fourthwallCategory: 'Tactical Action Kits'
  },
  {
    id: 'kit-entryway-dropzone',
    rank: 6,
    title: 'Create an Entryway in Small Spaces: 6-Inch Drop Zone & Hallway System',
    tagline: 'Stop coat, shoe, and key clutter the second you open your front door with an ultra-slim 6-inch architectural drop zone.',
    level: 'quick-win',
    priceRange: '$17 – $24 CAD',
    recommendedPrice: 19,
    format: 'Visual Field Playbook (.PDF) + 6-Inch Blueprint Cards + Drop Zone Calculator (.CSV) + Notion Hub',
    targetProblem: 'Rentals with no foyer or front closet, causing coats, boots, keys, and backpacks to pile up inside the door.',
    valueProposition: 'Creates an ultra-slim 6-inch architectural drop zone that stores shoes, jackets, keys, and mail with zero floor clutter.',
    differentiation: 'Engineered specifically for narrow hallways under 38 inches wide where standard furniture blocks door clearance.',
    blogCategory: 'Entryway & Hallway Organization',
    difficulty: 'Low',
    isTop10: true,
    roomZone: 'Entryway',
    renterSafetyRating: 'Designed around non-destructive and reversible rental solutions',
    viralHook: 'The 6-inch floating picture ledge entryway console that holds everything without blocking your doorway.',
    scores: {
      problemSeverity: 9,
      searchAlignment: 9,
      audienceRelevance: 9,
      productUsefulness: 9,
      perceivedValue: 8,
      differentiation: 9,
      visualPotential: 10,
      easeOfProduction: 9,
      bundlePotential: 10,
      upsellPotential: 8,
      evergreenPotential: 10,
      blogPromotionFit: 9,
      pinterestPotential: 10,
      flagshipPotential: 7,
      totalScore: 127
    },
    whyBuild: 'Entryways set the psychological tone for the entire home. A clean entrance immediately cures small space anxiety.',
    deliverables: [
      'Micro-Entryway Drop Zone Visual Field Playbook (Printable PDF)',
      '6-Inch Floating Console & Hook Blueprint Cards (Printable PDF)',
      'Entryway Footprint & Clearance Matrix (Interactive CSV / Sheets)',
      '1-Click Entryway Inventory & Key Management Hub (Notion Dashboard)'
    ],
    secretHacks: [
      'The $18 IKEA Mosslanda picture ledge flipped as a 4.5-inch floating entryway mail/key console',
      'Under-shelf neodymium magnet cup trick for invisible key holding without ugly hooks',
      'Concealed vertical shoe pocket organizer mounted to the back of a full-length leaning mirror',
      'Staggered double-height coat hooks (low for bags/keys, high for long coats) to halve wall width'
    ],
    proTips: [
      'Maintain a strict 36-inch clear walkway from the door handle swing arc to avoid bumping elbows when carrying groceries.',
      'Place a rubber boot tray with decorative river stones inside—allows snow and rainwater to drain below shoes so soles dry 3x faster.'
    ],
    keyModules: [
      'Module 1: The 6-Inch Floating Console Blueprint',
      'Module 2: Vertical Coat & Bag Staggered Hook Geometry',
      'Module 3: Zero-Footprint Concealed Shoe Tiering',
      'Module 4: The 60-Second "Return to Zero" Entryway Protocol'
    ],
    blogTriggers: ['Small Entryway Ideas', 'No Front Hallway Hacks', 'Apartment Shoe Storage', 'Drop Zone Organization'],
    fourthwallCategory: 'Tactical Action Kits'
  },
  {
    id: 'kit-underbed-hidden-storage',
    rank: 7,
    title: 'Unlock Hidden Under-Bed & Furniture Storage: Secret Volume Blueprint',
    tagline: 'Unlock 28 cubic feet of invisible, dust-proof storage hiding beneath your bed, sofa, and cabinet toe-kicks.',
    level: 'quick-win',
    priceRange: '$19 – $27 CAD',
    recommendedPrice: 22,
    format: 'Visual Field Playbook (.PDF) + Compression Ratio Cards + Hidden Volume Calculator (.CSV) + Notion Hub',
    targetProblem: 'Small apartments running out of storage space while massive dead volumes beneath furniture collect dust and pet hair.',
    valueProposition: 'Turns under-bed and hidden dead spaces into organized, rolling, dust-sealed storage vaults for suitcases, winter coats, and bulk items.',
    differentiation: 'Provides exact clearance formulas for standard bed frames, bed riser load safety, and dust-shield zippered container blueprints.',
    blogCategory: 'Hidden Storage & Compression Hacks',
    difficulty: 'Low',
    isTop10: false,
    roomZone: 'Closet & Bedroom',
    renterSafetyRating: 'Designed around non-destructive and reversible rental solutions',
    viralHook: 'How to store 4 large suitcases and 12 winter coats under your bed completely invisibly.',
    scores: {
      problemSeverity: 9,
      searchAlignment: 9,
      audienceRelevance: 9,
      productUsefulness: 9,
      perceivedValue: 9,
      differentiation: 8,
      visualPotential: 9,
      easeOfProduction: 9,
      bundlePotential: 10,
      upsellPotential: 8,
      evergreenPotential: 10,
      blogPromotionFit: 9,
      pinterestPotential: 9,
      flagshipPotential: 7,
      totalScore: 125
    },
    whyBuild: 'Under-bed volume represents up to 30% of a bedroom’s total storage capacity.',
    deliverables: [
      'Under-Bed & Hidden Space Storage Playbook (Printable PDF)',
      'Bed Height Elevation & Caster Blueprint Cards (Printable PDF)',
      'Hidden Cubic Storage Capacity Calculator (Interactive CSV / Sheets)',
      '1-Click Seasonal Storage & Bin Inventory (Notion Dashboard)'
    ],
    secretHacks: [
      '2-inch heavy-duty steel bed risers with integrated USB-C outlets (unlocks 8 extra cubic feet instantly)',
      'Nesting luggage hack: packing out-of-season ski gear and blankets inside hard-shell suitcases before sliding under bed',
      'Low-profile caster wheels screwed to vintage wooden crates for smooth gliding on thick rugs',
      'The sofa backboard dead-space ledge: storing folding card tables and yoga mats behind the couch'
    ],
    proTips: [
      'Always choose zippered Oxford-cloth under-bed storage containers over hard plastic bins—fabric containers mold to floor irregularities and won’t scratch hardwood floors.',
      'Use cedar wood rings inside under-bed fabric bins to naturally prevent moth damage and keep winter woolens smelling fresh.'
    ],
    keyModules: [
      'Module 1: Bed Riser Elevation & Weight Distribution Physics',
      'Module 2: Vacuum Seal Compression & Luggage Nesting Matrix',
      'Module 3: Smooth-Glide Rolling Caster Construction Hacks',
      'Module 4: Sofa & Cabinet Toe-Kick Hidden Space Exploitation'
    ],
    blogTriggers: ['Under Bed Storage Ideas', 'Small Bedroom Hacks', 'Where to Store Suitcases in Small Apartment', 'Hidden Storage'],
    fourthwallCategory: 'Tactical Action Kits'
  },
  {
    id: 'kit-studio-zoning-separation',
    rank: 8,
    title: 'Divide a Studio Without Building Walls: Living-Bed Separation Playbook',
    tagline: 'Create 3 distinct zones (Bedroom, Living, Dining) in an open studio using floating bookcases and tension tracks without building walls.',
    level: 'quick-win',
    priceRange: '$19 – $29 CAD',
    recommendedPrice: 24,
    format: 'Visual Field Playbook (.PDF) + Floor Plan Blueprint Cards + Scale Layout Matrix (.CSV) + Notion Hub',
    targetProblem: 'Living in a studio apartment feels like sleeping in your kitchen with zero mental boundary between work and rest.',
    valueProposition: 'Architectural zoning layouts using floating open bookcases, ceiling tension tracks, and rug boundaries to create a private bedroom sanctuary.',
    differentiation: 'Designed specifically for studios from 320 to 600 sq ft, ensuring daylight is never blocked while full sight-line privacy is achieved.',
    blogCategory: 'Studio Layout & Room Separation',
    difficulty: 'Medium',
    isTop10: false,
    roomZone: 'Living & Studio',
    renterSafetyRating: 'Designed around non-destructive and reversible rental solutions',
    viralHook: 'How to make a 400 sq ft studio feel like a real 1-bedroom apartment without building walls.',
    scores: {
      problemSeverity: 9,
      searchAlignment: 9,
      audienceRelevance: 9,
      productUsefulness: 9,
      perceivedValue: 9,
      differentiation: 9,
      visualPotential: 10,
      easeOfProduction: 8,
      bundlePotential: 9,
      upsellPotential: 9,
      evergreenPotential: 10,
      blogPromotionFit: 9,
      pinterestPotential: 10,
      flagshipPotential: 8,
      totalScore: 128
    },
    whyBuild: 'Studio room separation is the holy grail design aspiration for urban renters.',
    deliverables: [
      'Studio Living-Bed Separation Visual Playbook (Printable PDF)',
      'Scale Floor Plan & Zoning Blueprint Cards (Printable PDF)',
      'Studio Walkway Clearance & Layout Matrix (Interactive CSV / Sheets)',
      '1-Click Studio Furniture Footprint & Dimension Hub (Notion Dashboard)'
    ],
    secretHacks: [
      'The open-back Kallax floating bookcase hack (blocks bed sight-line from entrance while letting window sunlight pass through)',
      'Ceiling spring-tension curtain track system (creates instant hotel-style bedroom privacy curtain without ceiling screws)',
      'The 3-Rug Zoning Rule: using distinct textures to define kitchen, lounge, and sleep zones psychologically',
      'The Sofa-Back Dining Console: placing a 12-inch counter behind your sofa to double as eating bar and divider'
    ],
    proTips: [
      'Never place a solid opaque wall or divider directly between your bed and the window—use 40% sheer linen or open shelving to preserve natural light flow.',
      'Maintain at least 32 inches of clear walking path between the divider and adjacent walls to prevent claustrophobia.'
    ],
    keyModules: [
      'Module 1: Sight-Line Mapping & The 3-Room Studio Formula',
      'Module 2: Floating Bookcase & Tension Track Divider Blueprints',
      'Module 3: Rug Geometry & Psychological Spatial Anchoring',
      'Module 4: Multi-Functional Furniture Positioning Rules'
    ],
    blogTriggers: ['Studio Apartment Layout', 'How to Divide a Studio Apartment', 'Studio Bedroom Ideas', 'Small Apartment Zoning'],
    fourthwallCategory: 'Tactical Action Kits'
  },
  {
    id: 'kit-wfh-desk-reset',
    rank: 9,
    title: 'Work From Home in a Small Space: Multi-Use Desk & 15-Minute Evening Reset',
    tagline: 'Transition your compact living room from high-focus executive office to tranquil evening lounge in 15 minutes.',
    level: 'quick-win',
    priceRange: '$17 – $24 CAD',
    recommendedPrice: 19,
    format: 'Visual Field Playbook (.PDF) + Evening Reset Cards + Cable Routing Matrix (.CSV) + Notion Hub',
    targetProblem: 'Work monitors, laptop chargers, and papers sitting in your living room 24/7, making it impossible to relax after 6 PM.',
    valueProposition: 'Provides zero-cable invisibility systems, fold-down desk hacks, and an automated 15-minute evening closing shift checklist.',
    differentiation: 'Focuses on dual-mode spatial psychology: work mode from 9-5, tranquil living lounge from 5-11.',
    blogCategory: 'WFH & Multi-Use Living',
    difficulty: 'Low',
    isTop10: false,
    roomZone: 'Living & Studio',
    renterSafetyRating: 'Designed around non-destructive and reversible rental solutions',
    viralHook: 'The $9 under-desk cable trough hack that makes all your monitors and chargers vanish in seconds.',
    scores: {
      problemSeverity: 9,
      searchAlignment: 8,
      audienceRelevance: 9,
      productUsefulness: 9,
      perceivedValue: 8,
      differentiation: 9,
      visualPotential: 9,
      easeOfProduction: 9,
      bundlePotential: 9,
      upsellPotential: 8,
      evergreenPotential: 10,
      blogPromotionFit: 9,
      pinterestPotential: 9,
      flagshipPotential: 7,
      totalScore: 123
    },
    whyBuild: 'Remote work in small apartments causes extreme burnout when the desk is 4 feet away from the couch.',
    deliverables: [
      'WFH Multi-Use Desk & Reset Playbook (Printable PDF)',
      '15-Minute Evening Closing Shift Cards (Printable PDF)',
      'Under-Desk Cable Management & Hardware Matrix (Interactive CSV / Sheets)',
      '1-Click WFH Routine & Workspace Hub (Notion Dashboard)'
    ],
    secretHacks: [
      'Under-desk magnetic surge protector channel: zero visible wires touching the floor',
      'The Laptop Stash Drawer: 5-second closing protocol tucking screen and mouse inside a slim felt tray',
      'Foldable wall-leaning ladder desk with integrated magnetic pinboard',
      'Smart plug automation that cuts monitor power at 6:00 PM and switches ambient lamps to 2200K warm glow'
    ],
    proTips: [
      'Use a single Thunderbolt / USB-C docking hub mounted beneath the desktop with dual-lock tape so only ONE wire ever plugs into your laptop.',
      'Never leave paperwork visible overnight—store active folders vertically in a closed linen box on a bookshelf.'
    ],
    keyModules: [
      'Module 1: Zero-Cable Invisibility & Under-Desk Hardware Routing',
      'Module 2: Compact Desk Dimension Specs for 24-Inch Nooks',
      'Module 3: The 15-Minute "Workday Sunset" Reset Protocol',
      'Module 4: Smart Lighting Transitions from Work to Relaxation'
    ],
    blogTriggers: ['Small Desk Setup', 'WFH in Small Apartment', 'Cable Management Hacks', 'Desk in Living Room Ideas'],
    fourthwallCategory: 'Tactical Action Kits'
  },
  {
    id: 'kit-optical-expander-lighting',
    rank: 10,
    title: 'Make a Small Apartment Look Bigger: Light, Mirrors & Vertical Illusion',
    tagline: 'Make a 450 sq ft apartment look and feel like 800 sq ft using proven daylight bounce angles and 2200K ambient layers.',
    level: 'quick-win',
    priceRange: '$19 – $27 CAD',
    recommendedPrice: 22,
    format: 'Visual Field Playbook (.PDF) + Lighting Temperature Cards + Reflection Matrix (.CSV) + Notion Hub',
    targetProblem: 'Harsh overhead "landlord boob lights" and dark corners making small apartments feel like dreary cramped caves.',
    valueProposition: 'Architectural optical tricks, floor-to-ceiling curtain positioning, 45-degree mirror daylight bouncing, and 3-tier ambient lighting.',
    differentiation: 'Provides exact Kelvin lighting temperatures, lumen recommendations for small footprints, and mirror placement formulas.',
    blogCategory: 'Lighting & Optical Design Hacks',
    difficulty: 'Low',
    isTop10: false,
    roomZone: 'Universal',
    renterSafetyRating: 'Designed around non-destructive and reversible rental solutions',
    viralHook: 'The curtain hanging trick that adds 18 inches of perceived ceiling height to any rental.',
    scores: {
      problemSeverity: 8,
      searchAlignment: 9,
      audienceRelevance: 9,
      productUsefulness: 9,
      perceivedValue: 9,
      differentiation: 9,
      visualPotential: 10,
      easeOfProduction: 9,
      bundlePotential: 9,
      upsellPotential: 8,
      evergreenPotential: 10,
      blogPromotionFit: 9,
      pinterestPotential: 10,
      flagshipPotential: 7,
      totalScore: 126
    },
    whyBuild: 'Lighting and optical expansion give high aesthetic gratification and huge visual before/afters for social media.',
    deliverables: [
      'Optical Space Expander Visual Playbook (Printable PDF)',
      '3-Tier Ambient Lighting & Bulb Temperature Cards (Printable PDF)',
      'Mirror Reflection Angle & Lumen Calculator (Interactive CSV / Sheets)',
      '1-Click Room Ambience & Light Map Hub (Notion Dashboard)'
    ],
    secretHacks: [
      'The Floor-to-Ceiling Curtain Hack: mounting rod 2 inches below ceiling and 8 inches beyond window edges to double perceived window size',
      '45-Degree Corner Mirror Bounce: positioning full-length mirror opposite window to double natural morning daylight',
      'The "Zero Overhead Light" Rule: using 3 plug-in floor/table lamps at varying heights with 2200K warm filament bulbs',
      'Low-profile glass and acrylic coffee tables: eliminates visual weight so floor space looks uninterrupted'
    ],
    proTips: [
      'Never use 5000K daylight bulbs in a living room—it creates sterile hospital glare that highlights dust and walls. Use 2700K for reading and 2200K for evening winding down.',
      'Paint or drape the shortest wall in your room with the same tone as your ceiling to blur the room boundary and push the wall back visually.'
    ],
    keyModules: [
      'Module 1: Ceiling Height Multiplication & Drapery Geometry',
      'Module 2: The 45-Degree Mirror Reflection Daylight Bounce',
      'Module 3: The 3-Tier Layered Lighting Architecture (Task, Accent, Glow)',
      'Module 4: Visual Weight & Legged Furniture Selection Rules'
    ],
    blogTriggers: ['How to Make Small Room Look Bigger', 'Small Apartment Lighting Ideas', 'Curtain Hanging Hacks', 'Cozy Rental Aesthetics'],
    fourthwallCategory: 'Tactical Action Kits'
  },
  {
    id: 'kit-bathroom-vanity-shower',
    rank: 11,
    title: 'Maximize Small Bathroom & Shower Storage: Zero-Drill Vanity System',
    tagline: 'Eliminate shampoo bottle floor clutter and countertop chaos in tiny 5x7 rental bathrooms with rust-proof tension mechanics.',
    level: 'quick-win',
    priceRange: '$17 – $24 CAD',
    recommendedPrice: 19,
    format: 'Visual Field Playbook (.PDF) + Shower Clearance Cards + Waterproof Matrix (.CSV) + Notion Hub',
    targetProblem: 'Tiny rental bathrooms with pedestal sinks, zero vanity drawers, and rusty shower caddies falling off the shower head.',
    valueProposition: 'Unlocks 12 vertical feet of storage over toilets, behind mirrors, and in shower corners with rust-proof, zero-drill tension mechanics.',
    differentiation: 'Engineered for high-humidity rental environments with waterproof adhesives and mold-resistant tension materials.',
    blogCategory: 'Bathroom Organization Hacks',
    difficulty: 'Low',
    isTop10: false,
    roomZone: 'Bathroom',
    renterSafetyRating: 'Designed around non-destructive and reversible rental solutions',
    viralHook: 'How to get 4 shelves of storage in a 5x7 rental bathroom with zero drilling.',
    scores: {
      problemSeverity: 9,
      searchAlignment: 9,
      audienceRelevance: 9,
      productUsefulness: 9,
      perceivedValue: 8,
      differentiation: 9,
      visualPotential: 9,
      easeOfProduction: 9,
      bundlePotential: 9,
      upsellPotential: 8,
      evergreenPotential: 10,
      blogPromotionFit: 9,
      pinterestPotential: 9,
      flagshipPotential: 7,
      totalScore: 124
    },
    whyBuild: 'Bathrooms are notoriously small in urban rentals and clutter accumulates instantly on pedestal sink edges.',
    deliverables: [
      'Small Bathroom Vertical Maximizer Field Playbook (Printable PDF)',
      'Over-Toilet & Shower Tension Blueprint Cards (Printable PDF)',
      'Bathroom Clearance & Humidity-Safe Matrix (Interactive CSV / Sheets)',
      '1-Click Bathroom Inventory & Toiletries Vault (Notion Dashboard)'
    ],
    secretHacks: [
      'Floor-to-ceiling spring tension shower pole caddy: fits in the dead corner away from shower water stream',
      'Inside-medicine-cabinet magnetic strip for metal tweezers, bobby pins, and nail clippers',
      'Over-the-toilet freestanding tiered bamboo ladder shelf with silicone non-slip floor feet',
      'Back-of-door tiered wire towel rack holding 4 oversized bath towels in 2 inches of depth'
    ],
    proTips: [
      'Install double shower curtain rod: use outer rod for your decorative curtain and inner rod for hooks holding loofahs, scrubbers, and hanging organizers.',
      'Decant mismatched shampoo and body wash bottles into matching amber pump dispensers to eliminate visual color noise in small showers.'
    ],
    keyModules: [
      'Module 1: Corner Spring-Tension Shower Engineering',
      'Module 2: Over-Toilet Vertical Storage & Stabilization',
      'Module 3: Inside-Cabinet Magnetic & Razor Storage Hacks',
      'Module 4: Humidity Control & Visual De-Clutter Decanting'
    ],
    blogTriggers: ['Small Bathroom Organization', 'Tiny Shower Hacks', 'Over Toilet Storage Ideas', 'Pedestal Sink Storage'],
    fourthwallCategory: 'Tactical Action Kits'
  }
];

export const STRATEGIC_BUNDLES: ProductBundle[] = [
  {
    id: 'bundle-renter-survival',
    name: 'The Renter Defense & Security 3-in-1 Bundle',
    tagline: 'Hang heavy art without damage, protect your $2,000 security deposit, and soundproof thin rental walls.',
    targetCustomer: 'First-time apartment renters and condo tenants terrified of losing their security deposit or dealing with noise.',
    problemSolved: 'Solves the triple threat: wall damage fees, move-out deposit deductions, and thin-wall noise disturbances.',
    productsIncluded: [
      'kit-zero-damage-mounting',
      'kit-deposit-protection-defense',
      'kit-studio-acoustic-privacy'
    ],
    totalComponents: '3 Complete Tactical Field Guides + 3 Pocket Card Decks + 3 Interactive Calculators + 3 Notion Hubs',
    recommendedFormats: ['3 Printable Vector PDFs', '3 Printable Card Decks', '3 Interactive CSV Matrices', '3 Notion Hubs'],
    perceivedValue: 73,
    suggestedPrice: 47,
    savingsPercentage: 36,
    buyingRationale: 'Buying these 3 kits separately costs $73 CAD. Get total move-in protection for $47 CAD (saves $26 instantly).',
    fourthwallPositioning: 'The Essential Move-In Armor for Every Rental Apartment.',
    physicalCrossSell: {
      productName: 'Small Space Home Aesthetic Renter Tote',
      merchType: 'Tote Bag',
      synergyPitch: 'Carry your hardware tools, tape, and spackle in a heavy-duty organic canvas tote.'
    }
  },
  {
    id: 'bundle-micro-space-doubler',
    name: 'The Micro-Space Storage Doubler 3-in-1 Bundle',
    tagline: 'Double your storage capacity in your kitchen, closet, and under-bed hidden spaces with zero carpentry.',
    targetCustomer: 'Urban renters in studios or 1-bedrooms suffering from clutter overflow and zero built-in storage.',
    problemSolved: 'Unlocks 45+ cubic feet of dead storage space across the three most cramped zones in your home.',
    productsIncluded: [
      'kit-micro-kitchen-maxima',
      'kit-closet-quadrupler',
      'kit-underbed-hidden-storage'
    ],
    totalComponents: '3 Tactical Field Guides + 3 Blueprint Decks + 3 Storage Dimension Calculators + 3 Notion Dashboards',
    recommendedFormats: ['3 Printable Vector PDFs', '3 Pocket Card Decks', '3 Interactive CSV Matrices', '3 Notion Hubs'],
    perceivedValue: 68,
    suggestedPrice: 44,
    savingsPercentage: 35,
    buyingRationale: 'Costs less than buying a single cheap plastic storage dresser, yet provides 4x more usable space.',
    fourthwallPositioning: 'The Ultimate Storage Expansion Blueprint for Homes Under 700 Sq Ft.',
    physicalCrossSell: {
      productName: 'Minimalist Spatial Coffee Ceramic Mug',
      merchType: 'Coffee Mug',
      synergyPitch: 'Enjoy your morning brew while referencing your daily spatial reset cards.'
    }
  },
  {
    id: 'bundle-studio-master-expansion',
    name: 'The Studio Apartment Layout & Ambience 3-in-1 Bundle',
    tagline: 'Divide your studio into 3 rooms, build an entryway drop zone, and double your visual daylight.',
    targetCustomer: 'Studio apartment dwellers and compact open-concept condo owners wanting boutique hotel aesthetics.',
    problemSolved: 'Eliminates studio claustrophobia, entryway floor chaos, and dreary overhead glare lighting.',
    productsIncluded: [
      'kit-studio-zoning-separation',
      'kit-entryway-dropzone',
      'kit-optical-expander-lighting'
    ],
    totalComponents: '3 Architectural Field Guides + 3 Blueprint Decks + 3 Scale Clearance Calculators + 3 Notion Hubs',
    recommendedFormats: ['3 Printable Vector PDFs', '3 Pocket Card Decks', '3 Interactive CSV Matrices', '3 Notion Hubs'],
    perceivedValue: 65,
    suggestedPrice: 42,
    savingsPercentage: 35,
    buyingRationale: 'Transforms a generic concrete box studio into an intentional multi-zone designer sanctuary.',
    fourthwallPositioning: 'The Complete Studio Apartment Makeover Suite.',
    physicalCrossSell: {
      productName: 'Architectural Blueprint Fine Art Print',
      merchType: 'Wall Art',
      synergyPitch: 'Hang minimal line-art architectural blueprints using our zero-damage mounting tricks.'
    }
  },
  {
    id: 'bundle-ultimate-12-kit-vault',
    name: 'The Ultimate Renter Master Action Vault (All 12 Kits & 150+ Hacks)',
    tagline: 'Every single tactical action kit, secret renter hack, visual blueprint, calculator, and swipe file in one master download.',
    targetCustomer: 'Anyone living in a rented apartment, condo, or home under 800 sq ft who wants the ultimate complete toolkit.',
    problemSolved: 'Solves every spatial, storage, legal deposit, acoustic, lighting, and layout challenge in compact homes forever.',
    productsIncluded: [
      'kit-zero-damage-mounting',
      'kit-micro-kitchen-maxima',
      'kit-closet-quadrupler',
      'kit-deposit-protection-defense',
      'kit-studio-acoustic-privacy',
      'kit-entryway-dropzone',
      'kit-underbed-hidden-storage',
      'kit-studio-zoning-separation',
      'kit-wfh-desk-reset',
      'kit-optical-expander-lighting',
      'kit-bathroom-vanity-shower',
      'kit-balcony-patio-oasis'
    ],
    totalComponents: '12 Vector PDF Field Guides + 12 Printable Pocket Card Decks + 12 Interactive CSV Calculators + 12 Notion Dashboards + 150+ Secret Hacks',
    recommendedFormats: ['12 Printable Vector PDFs', '12 Pocket Card Decks', '12 Interactive CSV Calculators', '12 Notion Hubs'],
    perceivedValue: 260,
    suggestedPrice: 97,
    savingsPercentage: 63,
    buyingRationale: 'Total standalone price is $260 CAD. Get the complete master collection for just $97 CAD (save $163 CAD). Instant lifetime access with all future updates.',
    fourthwallPositioning: 'The Definitive Encyclopedia of Small Space Hacks & Renter Blueprints.',
    physicalCrossSell: {
      productName: 'The Small Space Home Master Collector Kit',
      merchType: 'Wall Art',
      synergyPitch: 'Includes fine art print, ceramic coffee mug, and canvas tool tote.'
    }
  }
];

export const BUNDLE_ECOSYSTEM = STRATEGIC_BUNDLES;

export const FOURTHWALL_STORE_ARCHITECTURE = {
  storeUrl: 'shop.smallspacehome.ca',
  collections: [
    {
      id: 'col-action-kits',
      title: 'Tactical Action Kits & Renter Systems',
      description: 'Tested zero-damage mounting systems, small kitchen space doublers, closet quadruplers, and deposit defense playbooks.',
      featuredProducts: [
        'Hang Mirrors, Shelves & Art: Zero-Damage Mounting System ($24 CAD)',
        'Double Your Usable Kitchen Space: 500 Sq Ft Galley Maximizer ($22 CAD)',
        'Quadruple Your Closet Capacity: Vertical Organization Playbook ($24 CAD)'
      ]
    },
    {
      id: 'col-curated-bundles',
      title: 'Curated 3-in-1 Problem Bundles (Save 35%+)',
      description: 'Themed multi-kit bundles designed to solve spatial dilemmas across your entire apartment for maximum savings.',
      featuredProducts: [
        'The Renter Defense & Security 3-in-1 Bundle ($47 CAD)',
        'The Micro-Space Storage Doubler 3-in-1 Bundle ($44 CAD)',
        'The Studio Apartment Layout & Ambience Bundle ($42 CAD)'
      ]
    },
    {
      id: 'col-master-vault',
      title: 'The Master Action Vault (All 11 Kits)',
      description: 'The complete encyclopedia of 11 tactical action kits, visual blueprints, calculators, and printable field cards.',
      featuredProducts: [
        'The Ultimate Renter Master Action Vault ($97 CAD • $248 Value)'
      ]
    }
  ],
  checkoutBumps: [
    {
      id: 'bump-pocket-cards',
      title: 'Zero-Damage Installation Pocket Field Cards ($7 CAD)',
      triggerConditions: 'Any single Tactical Action Kit added to cart',
      takeRateEstimate: '34%'
    },
    {
      id: 'bump-deposit-script',
      title: 'Rental Restoration & Deposit Defense Pushback Pack ($9 CAD)',
      triggerConditions: 'Any Renter Security or Moving Kit added to cart',
      takeRateEstimate: '28%'
    }
  ]
};

export const BLOG_FUNNEL_MAPPINGS: BlogFunnelMapping[] = [
  {
    id: 'funnel-mounting-hacks',
    blogCategory: 'Renter Hacks & Wall Decor',
    sampleArticleTitle: 'How to Hang Heavy Mirrors and Floating Shelves Without Drilling Holes (Renter-Safe)',
    searchIntent: 'Tenant searching for ways to hang art or mirrors without losing their deposit.',
    readerFriction: 'Scared of Command strips failing and dropping heavy frames or tearing off wall paint.',
    recommendedProduct: 'The Zero-Damage Renter Mounting & Secret Wall Hacks Kit',
    productPrice: '$24 CAD',
    ctaType: 'Inline Highlight',
    ctaHeadline: 'Want the exact 45-lb zero-damage mounting formulas and paint-peel removal tricks?',
    ctaCopy: 'Download the Zero-Damage Mounting Field Guide with exact weight load ratings, hot-glue+tape painter tricks, and emergency patch hacks.',
    buttonText: 'Get The Mounting Hacks Kit ($24 CAD) →',
    pinterestAngle: 'Viral Pin: "The $4 Hardware Trick to Hang Heavy Mirrors in Rentals Without Nails"'
  },
  {
    id: 'funnel-kitchen-cabinets',
    blogCategory: 'Small Kitchen Organization',
    sampleArticleTitle: '11 Clever Hacks to Double Your Cabinet Space in a 45 Sq Ft Galley Kitchen',
    searchIntent: 'Renter looking for ways to organize messy kitchen cabinets and create prep space.',
    readerFriction: 'Cabinets are tall and deep with dead space; countertops are covered in spices and cutting boards.',
    recommendedProduct: 'The 500 Sq Ft Micro-Kitchen & Cabinet Space Doubler Kit',
    productPrice: '$22 CAD',
    ctaType: 'End-of-Post Box',
    ctaHeadline: 'Unlock 18+ Cubic Feet of Dead Cabinet Space in Your Kitchen',
    ctaCopy: 'Get the complete blueprint cards, inside-door tension rod specs, and over-sink prep bridge dimensions.',
    buttonText: 'Download Micro-Kitchen Kit ($22 CAD) →',
    pinterestAngle: 'Viral Pin: "How I Doubled My Apartment Kitchen Storage for Under $25"'
  },
  {
    id: 'funnel-closet-density',
    blogCategory: 'Closet & Wardrobe Systems',
    sampleArticleTitle: 'How to Fit 120 Garments in a 36-Inch Rental Closet Without Wrinkling',
    searchIntent: 'Renter searching for small closet organization hacks and double-rod systems.',
    readerFriction: 'Single wire shelf closet is overflowing with clothes piled on the floor.',
    recommendedProduct: 'The Small Closet Quadrupler & Vertical Storage Hack Kit',
    productPrice: '$24 CAD',
    ctaType: 'Sticky Footer Banner',
    ctaHeadline: 'Quadruple Your Closet Hanging Space With Zero Carpentry',
    ctaCopy: 'Includes the suspended double-rod blueprint, soda-tab cascading hanger trick, and upper shelf compression guide.',
    buttonText: 'Get The Closet Quadrupler Kit ($24 CAD) →',
    pinterestAngle: 'Viral Pin: "Turn a Tiny 3-Foot Closet Into a 4-Tier Boutique Wardrobe"'
  },
  {
    id: 'funnel-deposit-defense',
    blogCategory: 'Tenant Rights & Rental Hacks',
    sampleArticleTitle: 'The $12 DIY Drywall Patch Trick That Guaranteed My Full Security Deposit Return',
    searchIntent: 'Tenant preparing to move out and worried about landlord charging for wall holes and scuffs.',
    readerFriction: 'Afraid of losing $500–$2,000 in deposit deductions for standard living wear.',
    recommendedProduct: 'The Renter Security Deposit Defense & Emergency Repair Kit',
    productPrice: '$27 CAD',
    ctaType: 'Exit-Intent Lead Upgrade',
    ctaHeadline: 'Don’t Let Your Landlord Steal Your $2,000 Deposit',
    ctaCopy: 'Get the exact move-out inspection photo checklist, legal wear-and-tear pushback scripts, and $12 wall repair recipe.',
    buttonText: 'Download Deposit Defense Kit ($27 CAD) →',
    pinterestAngle: 'Viral Pin: "The Landlord Move-Out Checklist That Saved Me $1,800"'
  }
];

export const FLAGSHIP_MODULES: FlagshipModule[] = [
  {
    id: 'vault-mod-1',
    moduleNumber: '01',
    title: 'Zero-Damage Hardware & Wall Mounting Mastery',
    summary: 'The science of adhesive shear angles, tension load multiplication, and zero-drill heavy mirror hanging.',
    toolsIncluded: ['Mounting Load Calculator (.CSV)', 'Adhesive Prep Guide (PDF)', 'Peel-Free Removal Protocol'],
    interactiveAssets: ['Interactive Load Matrix', 'Hardware Store Dupe List', 'Pocket Anchor Cards'],
    transformation: 'Never fear wall damage or lost deposits again while enjoying full vertical gallery walls.'
  },
  {
    id: 'vault-mod-2',
    moduleNumber: '02',
    title: 'Micro-Kitchen & Cabinet Space Doubler Engineering',
    summary: 'Inside-door mechanics, magnetic undershelf matrix, over-sink prep bridges, and dead-corner unlocks.',
    toolsIncluded: ['Cabinet Clearance Blueprint (PDF)', 'Kitchen Zone Matrix (.CSV)', '1-Click Pantry Hub (Notion)'],
    interactiveAssets: ['Dimension Calculator', 'Prep Bridge Specs', 'Door Tension Rod Diagrams'],
    transformation: 'Double your usable kitchen storage and cooking prep area in under 2 hours.'
  },
  {
    id: 'vault-mod-3',
    moduleNumber: '03',
    title: 'Wardrobe Density & Closet Quadrupler Architecture',
    summary: 'Suspended dual-hanging rods, cascading hanger density, vertical acrylic dividers, and seasonal bins.',
    toolsIncluded: ['Closet Capacity Calculator (.CSV)', 'Garment Density Blueprint (PDF)', 'Capsule Wardrobe Hub (Notion)'],
    interactiveAssets: ['Hanger Ratio Formulas', 'Upper Shelf Matrix', 'Shoe Compression Diagrams'],
    transformation: 'Fit your entire seasonal wardrobe cleanly in a single 36-inch rental closet.'
  },
  {
    id: 'vault-mod-4',
    moduleNumber: '04',
    title: 'Renter Deposit Defense & Legal Move-Out Shield',
    summary: 'Timestamped 4K photographic logs, $12 drywall texture matching, and legal normal-wear pushback letters.',
    toolsIncluded: ['Move-Out Inspection Matrix (.CSV)', 'Dispute Script Cards (PDF)', 'Deposit Claim Vault (Notion)'],
    interactiveAssets: ['Inspection Checklist', 'Tenant Rights Clause Swipe File', 'Spackle Matching Guide'],
    transformation: 'Protect your full security deposit with legally airtight documentation and quick repairs.'
  },
  {
    id: 'vault-mod-5',
    moduleNumber: '05',
    title: 'Studio Room Zoning & Acoustic Privacy Soundproofing',
    summary: 'Floating bookcase room dividers, ceiling tension linen tracks, door air locks, and sound absorption.',
    toolsIncluded: ['Studio Clearance Matrix (.CSV)', 'Acoustic Sound-Lock Guide (PDF)', 'Decibel Masking Hub (Notion)'],
    interactiveAssets: ['3-Room Studio Layouts', 'Door Jamb Seal Blueprints', 'Rug Anchoring Ratios'],
    transformation: 'Convert an open studio into 3 distinct peaceful zones that block 75% of building noise.'
  },
  {
    id: 'vault-mod-6',
    moduleNumber: '06',
    title: 'Optical Space Expansion & 2200K Ambient Lighting',
    summary: 'Floor-to-ceiling drapery geometry, 45-degree mirror daylight bouncing, and 3-tier ambient glow.',
    toolsIncluded: ['Lumen & Kelvin Calculator (.CSV)', 'Optical Illusion Playbook (PDF)', 'Room Ambience Hub (Notion)'],
    interactiveAssets: ['Curtain Height Formulas', 'Mirror Angle Diagram', 'Warm Bulb Selection Guide'],
    transformation: 'Make your 450 sq ft apartment look and feel like 800 sq ft of warm Scandinavian luxury.'
  }
];

export const FLAGSHIP_DETAILED_SPEC = {
  name: 'The SmallSpaceHome Master Action Kit Vault',
  subtitle: 'The All-in-One Tactical Architecture, Zero-Damage Hacks & Dimension Calculators for Urban Living',
  corePromise: 'Turn any apartment under 800 sq ft into a highly functional, zero-damage sanctuary without carpentry or lost security deposits.',
  pricingStrategy: {
    standalonePrice: '$79 CAD',
    totalIndividualValue: '$274 CAD',
    bundleDiscount: '71% Off'
  },
  formatSpecs: [
    'Vector PDF Tactical Blueprints',
    'Pocket Field Cheat-Sheets (PDF)',
    'Interactive Dimension Matrices (.CSV)',
    '1-Click Architecture Hub (Notion)'
  ],
  modules: FLAGSHIP_MODULES,
  productionSchedule: [
    { phase: 'Phase 1', task: 'Zero-Damage Mounting & Micro-Kitchen Playbooks', timeline: 'Week 1–2' },
    { phase: 'Phase 2', task: 'Closet Quadrupler & Deposit Defense Matrices', timeline: 'Week 3–4' },
    { phase: 'Phase 3', task: 'Interactive Notion Hub & Sheets Connectors', timeline: 'Week 5–6' },
    { phase: 'Phase 4', task: 'Fourthwall Store Launch & Multi-Asset Master Vault', timeline: 'Week 7–8' }
  ]
};

export const PRODUCTION_ROADMAP = [
  {
    phase: 'Phase 1: Quick-Win Renter Armor Launch',
    timeline: 'Weeks 1–3',
    primaryGoal: 'Establish credibility with zero-damage wall mounting and high-converting kitchen storage kits.',
    milestones: [
      {
        task: 'The Zero-Damage Renter Mounting & Secret Wall Hacks Kit',
        format: 'PDF Guide + Pocket Cards + CSV Calculator + Notion Hub',
        targetLaunchWeek: 'Week 1'
      },
      {
        task: 'The 500 Sq Ft Micro-Kitchen & Cabinet Space Doubler Kit',
        format: 'PDF Guide + Cabinet Blueprints + CSV Matrix + Notion Hub',
        targetLaunchWeek: 'Week 2'
      },
      {
        task: 'The Small Closet Quadrupler & Vertical Storage Hack Kit',
        format: 'PDF Guide + Pocket Cards + CSV Capacity Matrix + Notion Hub',
        targetLaunchWeek: 'Week 3'
      }
    ]
  },
  {
    phase: 'Phase 2: Renter Security & Space Zoning Suite',
    timeline: 'Weeks 4–6',
    primaryGoal: 'Expand into move-out security deposit defense and open studio soundproofing & drop zones.',
    milestones: [
      {
        task: 'The Renter Security Deposit Defense & Emergency Repair Kit',
        format: 'PDF Guide + Dispute Scripts + CSV Inspection Matrix + Notion Hub',
        targetLaunchWeek: 'Week 4'
      },
      {
        task: 'The Studio Apartment Acoustic Privacy & Sound-Lock Kit',
        format: 'PDF Guide + Door Seal Blueprints + CSV Matrix + Notion Hub',
        targetLaunchWeek: 'Week 5'
      },
      {
        task: 'The Micro-Entryway & Clutter Drop-Zone Solution Kit',
        format: 'PDF Guide + Slat-Wall Blueprints + CSV Matrix + Notion Hub',
        targetLaunchWeek: 'Week 6'
      }
    ]
  },
  {
    phase: 'Phase 3: Deep Storage & Hybrid Living Kits',
    timeline: 'Weeks 7–9',
    primaryGoal: 'Target high-AOV lifestyle products: under-bed vaults, studio room dividers, and WFH hideaways.',
    milestones: [
      {
        task: 'The Under-Bed Dust-Free Storage Vault & Compression Kit',
        format: 'PDF Guide + Bed Riser Specs + CSV Matrix + Notion Hub',
        targetLaunchWeek: 'Week 7'
      },
      {
        task: 'The Studio Apartment 3-in-1 Room Zoning & Separation Kit',
        format: 'PDF Guide + Floor Plan Blueprints + CSV Matrix + Notion Hub',
        targetLaunchWeek: 'Week 8'
      },
      {
        task: 'The Compact WFH Micro-Desk & Cable Concealment Kit',
        format: 'PDF Guide + Cable Blueprints + CSV Matrix + Notion Hub',
        targetLaunchWeek: 'Week 9'
      }
    ]
  },
  {
    phase: 'Phase 4: Ambience, Outdoor & Master Vault Release',
    timeline: 'Weeks 10–12',
    primaryGoal: 'Launch lighting and bathroom kits, publish the 3-in-1 Curated Bundles, and open the Master Action Vault.',
    milestones: [
      {
        task: 'The Small-Space Optical Expander & 2200K Ambient Lighting Kit',
        format: 'PDF Guide + Kelvin Guides + CSV Lumen Matrix + Notion Hub',
        targetLaunchWeek: 'Week 10'
      },
      {
        task: 'The Micro-Bathroom & Shower Storage Maxima Kit',
        format: 'PDF Guide + Tension Specs + CSV Matrix + Notion Hub',
        targetLaunchWeek: 'Week 11'
      },
      {
        task: 'The Ultimate Renter Master Action Vault (All 12 Kits & 150+ Hacks)',
        format: 'Complete 12-Kit Digital Ecosystem + Master Notion Architecture',
        targetLaunchWeek: 'Week 12'
      }
    ]
  }
];
