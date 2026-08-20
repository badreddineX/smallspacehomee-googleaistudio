import { DigitalProduct, ProductBundle, BlogFunnelMapping, FlagshipModule } from '../types';

export const AUDIENCE_PERSONAS = [
  {
    id: 'first-time-renter',
    name: 'The First-Apartment Renter',
    demographics: 'Ages 21–29, moving into first studio or 1-bed (400–650 sq ft).',
    budgetMindset: 'Budget-conscious, anxious about security deposit deductions, overwhelmed by shopping lists.',
    painPoints: [
      'Buying furniture that turns out 2 inches too big for doorways or tight corners',
      'No built-in storage; relying on cheap plastic bins that look messy',
      'Fear of drilling walls or causing lease violations',
      'Sudden accumulation of unpacking chaos and lack of daily spatial routines'
    ],
    triggerPhrase: '"I have zero closet space and my bedroom is also my living room."'
  },
  {
    id: 'urban-condo-dweller',
    name: 'The Compact Condo Professional',
    demographics: 'Ages 28–42, renting or owning urban condo (500–800 sq ft), works hybrid/remote.',
    budgetMindset: 'Values design aesthetics, willing to pay for clean, streamlined systems that save time and mental fatigue.',
    painPoints: [
      'Visual clutter overload from work equipment, kitchen gadgets, and daily life colliding',
      'Dual-purpose friction: converting living room to office without looking like a cubicle',
      'Lacking a disciplined seasonal rotation system for coats, luggage, and bulk goods',
      'Wants high-end Scandinavian/minimalist calm but feels overwhelmed by small footprint'
    ],
    triggerPhrase: '"I want my home to feel like an intentional boutique retreat, not an Amazon warehouse."'
  },
  {
    id: 'downsizing-mover',
    name: 'The Downsizing Transitioner',
    demographics: 'Ages 30–55+, transitioning from suburban/larger home to smaller rental or townhome.',
    budgetMindset: 'Seeks ruthless decluttering frameworks and spatial measurement certainty before moving truck arrives.',
    painPoints: [
      'Emotional and logistical paralysis deciding what furniture to keep vs. sell vs. discard',
      'Moving logistics chaos in small elevator buildings with strict move-in booking windows',
      'Fitting existing sentimental or functional items into 50% less cubic capacity'
    ],
    triggerPhrase: '"How do I fit my life into half the space without feeling claustrophobic?"'
  }
];

export const CORE_PROBLEMS_ANALYSIS = [
  {
    title: 'The "Two-Inch Error" Spatial Trap',
    description: 'In small apartments, standard furniture shopping causes catastrophic layout gridlock. Buying a sofa or console table that is just 2 inches too deep blocks walkway clearance (standard minimum: 30–36 inches), preventing doors or drawers from opening.',
    solutionApproach: 'Interactive clearance calculators, architectural furniture footprint templates, and scale layout grids.'
  },
  {
    title: 'The Renter Deposit & Damage Restriction Bind',
    description: 'Tenants cannot drill heavy studs, replace cabinetry, or install permanent built-ins. They need structural-grade, damage-free vertical mounting formulas, tension-rod architecture, and landlord-approved hardware blueprints.',
    solutionApproach: 'Damage-free mounting load calculators, weight-distribution diagrams, and lease-safe upgrade registries.'
  },
  {
    title: 'Visual Clutter & Cognitive Overload',
    description: 'In small spaces, leaving 3 items on a counter occupies 25% of the visual field. Without structured 5-minute micro-reset systems and hidden "drop zones", homes rapidly degrade into chaos.',
    solutionApproach: 'Daily micro-reset routine cards, categorized drop-zone maps, and 30-day spatial declutter protocols.'
  },
  {
    title: 'Dual-Purpose Room Identity Crisis',
    description: 'When the bedroom is also the zoom office, gym, and dining room, boundaries collapse. Dwellers suffer from chronic restlessness because the room never switches modes.',
    solutionApproach: 'Zoning divider guides, lighting transition checklists, and foldable workspace transition protocols.'
  }
];

export const TOP_20_PRODUCTS: DigitalProduct[] = [
  {
    id: 'flagship-ss-os',
    rank: 1,
    title: 'The Small Space Operating System (SS-OS)',
    tagline: 'The complete architectural master system for small-space living, organizing, and intentional dwelling.',
    level: 'flagship',
    priceRange: '$67 – $97 CAD',
    recommendedPrice: 79,
    format: 'Hybrid (Notion + Sheets + Interactive PDF)',
    targetProblem: 'Fragmented home chaos, poor layout planning, lack of vertical storage systems, moving stress, and constant clutter in spaces under 800 sq ft.',
    valueProposition: 'The all-in-one digital operating system that transforms any cramped rental or condo into a serene, highly efficient, designer-grade sanctuary in 30 days.',
    differentiation: 'Combines Notion automated databases, architectural clearance Google Sheets, and a 120-page editorial visual workbook. Not a generic daily planner—an actual structural life system.',
    blogCategory: 'Complete Small-Space Living & Organization',
    difficulty: 'High',
    isTop10: true,
    scores: {
      problemSeverity: 10,
      searchAlignment: 10,
      audienceRelevance: 10,
      productUsefulness: 10,
      perceivedValue: 10,
      differentiation: 10,
      visualPotential: 10,
      easeOfProduction: 7,
      bundlePotential: 10,
      upsellPotential: 10,
      evergreenPotential: 10,
      blogPromotionFit: 10,
      pinterestPotential: 10,
      flagshipPotential: 10,
      totalScore: 137
    },
    whyBuild: 'This is the cornerstone asset for the entire SmallSpaceHome brand. Every single blog post can naturally route into one of its 6 core modules.',
    deliverables: [
      'Comprehensive Notion Small Space OS Hub (6 Connected Databases)',
      'Automated Google Sheets Spatial & Budget Calculator Suite',
      '120-Page Interactive Editorial PDF Master Guide & Workbook',
      'Printable Quick-Reference Room Blueprint Cards (A4/Letter)',
      'Video Walkthrough & Onboarding Setup Guide'
    ],
    keyModules: [
      'Module 1: Spatial Assessment & Scale Layout Mapping',
      'Module 2: The Vertical Storage & Cabinet Engineering Blueprint',
      'Module 3: 30-Day Ruthless Declutter & Room-by-Room Protocol',
      'Module 4: Renter-Safe Home Upgrades & Aesthetic Lighting Formula',
      'Module 5: Daily 10-Minute Reset & Habit Rhythm Engine',
      'Module 6: Small-Space Moving, Inventory & Lease Management Vault'
    ],
    blogTriggers: ['General Small Space Tips', 'Studio Apartment Living', 'Condo Storage Ideas', 'Apartment Hacks'],
    fourthwallCategory: 'Flagship Systems'
  },
  {
    id: 'layout-furniture-planner',
    rank: 2,
    title: 'Small-Space Layout & Furniture Proportion Planner',
    tagline: 'Never buy the wrong-sized furniture again. Architectural grid kit, clearance calculator & visual zoning maps.',
    level: 'premium',
    priceRange: '$29 – $39 CAD',
    recommendedPrice: 34,
    format: 'Google Sheets + Excel + PDF',
    targetProblem: 'Anxiety over furniture scale, buying pieces that crowd narrow walkways, and failing to maximize square footage.',
    valueProposition: 'Architectural scale grid planner and automated clearance tool to design your perfect small space layout before spending a dime on furniture.',
    differentiation: 'Includes exact walkway clearance formulas (e.g., 36" dining pullout, 18" coffee table gap, 42" galley kitchen flow) with interactive calculators and Canva drag-and-drop floor plan blocks.',
    blogCategory: 'Furniture & Layouts',
    difficulty: 'Medium',
    isTop10: true,
    scores: {
      problemSeverity: 9,
      searchAlignment: 9,
      audienceRelevance: 10,
      productUsefulness: 10,
      perceivedValue: 9,
      differentiation: 9,
      visualPotential: 10,
      easeOfProduction: 8,
      bundlePotential: 10,
      upsellPotential: 9,
      evergreenPotential: 10,
      blogPromotionFit: 10,
      pinterestPotential: 10,
      flagshipPotential: 8,
      totalScore: 131
    },
    whyBuild: 'Extremely high commercial intent. People searching for small space furniture are about to spend $500–$2,000+; paying $34 for measurement security is an instant no-brainer.',
    deliverables: [
      'Interactive Walkway & Clearance Google Sheet with Automated Warnings',
      'Printable 1/4" Scale Grid Sheets + 60+ Pre-Scaled Furniture Cutouts',
      'Canva Digital Floorplan Creator with 12 Pre-built Studio/1-Bed Layouts',
      'Multi-Functional Furniture Buying Matrix & Dimension Cheat-Sheet'
    ],
    keyModules: [
      'Walkway Clearance Standards Matrix',
      'Studio Zoning & Sightline Optimization Guide',
      'Foldable & Multi-Purpose Furniture Dimension Specs',
      'Entryway & Hallway Pinch-Point Audit'
    ],
    blogTriggers: ['Best Furniture for Small Living Rooms', 'Studio Apartment Layout Ideas', 'How to Measure for Small Apartments'],
    fourthwallCategory: 'Planners & Workbooks'
  },
  {
    id: 'moving-in-blueprint',
    rank: 3,
    title: 'The Small Space Moving-In Blueprint & Transition OS',
    tagline: 'The stress-free system to downsize, pack, book elevators, and unpack a small home in 48 hours.',
    level: 'premium',
    priceRange: '$27 – $37 CAD',
    recommendedPrice: 29,
    format: 'Notion Workspace + PDF',
    targetProblem: 'Moving into a small apartment without knowing what fits, elevator booking constraints, moving box towers blocking rooms.',
    valueProposition: 'A tactical, timeline-driven moving system designed specifically for tight condos, narrow stairwells, and strict apartment move-in windows.',
    differentiation: 'Specifically built for small space logistics: box color-coding by small apartment zones, elevator timing calculator, and the "First Night Essential Capsule Box" blueprint.',
    blogCategory: 'Moving & Transitioning',
    difficulty: 'Medium',
    isTop10: true,
    scores: {
      problemSeverity: 10,
      searchAlignment: 9,
      audienceRelevance: 9,
      productUsefulness: 10,
      perceivedValue: 9,
      differentiation: 9,
      visualPotential: 8,
      easeOfProduction: 8,
      bundlePotential: 9,
      upsellPotential: 9,
      evergreenPotential: 9,
      blogPromotionFit: 9,
      pinterestPotential: 9,
      flagshipPotential: 7,
      totalScore: 124
    },
    whyBuild: 'Moving is an urgent, deadline-driven life event where stress is at maximum and purchase willingness is highest.',
    deliverables: [
      '8-Week Countdown Notion Moving Checklist & Expense Tracker',
      'Printable QR-Code Box Label System (Print on standard label sheets)',
      'Elevator & Certificate of Insurance (COI) Landlord Checklist',
      '48-Hour Rapid Unpacking Sequence for Studios & 1-Bedrooms'
    ],
    keyModules: [
      'Pre-Move Downsizing Decision Tree',
      'Box Inventory & Priority Label Database',
      'First-Day Survival Capsule Packing List',
      'Change of Address & Utility Transfer Checklist'
    ],
    blogTriggers: ['Moving into First Apartment', 'Downsizing Checklist', 'Small Apartment Move-In Day Tips'],
    fourthwallCategory: 'Planners & Workbooks'
  },
  {
    id: 'renter-upgrade-manual',
    rank: 4,
    title: 'The Damage-Free Renter Upgrade Manual & Action Binder',
    tagline: 'Elevate your rental aesthetic without losing your security deposit. Hardware, lighting & peel-and-stick mastery.',
    level: 'quick-win',
    priceRange: '$17 – $24 CAD',
    recommendedPrice: 19,
    format: 'Interactive PDF + Printables',
    targetProblem: 'Ugly rental finishes (dated cabinet pulls, harsh fluorescent lights, plain walls) + intense fear of landlord fines.',
    valueProposition: '50+ curated, designer-tested, zero-damage rental hacks with exact tool-free hardware links, weight load formulas, and move-out restore guides.',
    differentiation: 'Focuses on the "deposit-safe restore" guarantee—every single hack has an exact 5-minute reverse procedure with no spackle required.',
    blogCategory: 'Renter-Friendly Home Improvement',
    difficulty: 'Low',
    isTop10: true,
    scores: {
      problemSeverity: 8,
      searchAlignment: 10,
      audienceRelevance: 10,
      productUsefulness: 9,
      perceivedValue: 8,
      differentiation: 9,
      visualPotential: 10,
      easeOfProduction: 9,
      bundlePotential: 9,
      upsellPotential: 8,
      evergreenPotential: 10,
      blogPromotionFit: 10,
      pinterestPotential: 10,
      flagshipPotential: 6,
      totalScore: 126
    },
    whyBuild: 'Renter-friendly content on Pinterest and TikTok has viral visual appeal. High conversion as an impulse purchase ($19).',
    deliverables: [
      '68-Page Editorial Visual PDF with Step-by-Step Photos & Diagrams',
      'Renter Hardware Spec Sheet (Standard screw gauges & adapter sizes)',
      'Peel-and-Stick Backsplash & Flooring Master Rating Matrix',
      'Move-Out Reversal Checklist to Guarantee Full Deposit Return'
    ],
    keyModules: [
      'No-Drill Wall Sconce & Ambient Lighting Formula',
      'Rental Kitchen Cabinetry Hardware Swaps',
      'Temporary Bathroom Tile & Vanity Transformations',
      'Command Strip & Tension Rod Weight Load Engineering'
    ],
    blogTriggers: ['Renter Friendly Decor Hacks', 'How to Upgrade Rental Kitchen', 'No-Drill Shelving Ideas'],
    fourthwallCategory: 'Guides & Manuals'
  },
  {
    id: 'declutter-reset-protocol',
    rank: 5,
    title: 'The 30-Day Small Home Declutter & Spatial Reset Protocol',
    tagline: 'A systematic room-by-room blueprint to eliminate 40% of visual clutter without emotional exhaustion.',
    level: 'premium',
    priceRange: '$24 – $34 CAD',
    recommendedPrice: 27,
    format: 'Interactive PDF + Printables',
    targetProblem: 'Suffocating clutter accumulation, cabinet overflow, decision fatigue, and "clutter rebound" within 2 weeks of cleaning.',
    valueProposition: 'A micro-step daily protocol structured specifically for homes without basements, garages, or extra storage closets.',
    differentiation: 'Replaces generic "keep/toss" rules with small-space specific heuristics: "The Real Estate Tax Formula", "Duplicate Penalty Rule", and "Seasonal Compression Methods".',
    blogCategory: 'Decluttering & Organization',
    difficulty: 'Medium',
    isTop10: true,
    scores: {
      problemSeverity: 9,
      searchAlignment: 10,
      audienceRelevance: 10,
      productUsefulness: 9,
      perceivedValue: 9,
      differentiation: 9,
      visualPotential: 9,
      easeOfProduction: 8,
      bundlePotential: 10,
      upsellPotential: 9,
      evergreenPotential: 10,
      blogPromotionFit: 10,
      pinterestPotential: 9,
      flagshipPotential: 8,
      totalScore: 129
    },
    whyBuild: 'Decluttering is the #1 reader search category in January, Spring, and Fall. Extremely strong year-round organic driver.',
    deliverables: [
      '30-Day Step-by-Step Daily Action Cards (Printable & Mobile PDF)',
      'Decision-Tree Flowcharts: "Does This Deserve 1 Sq Ft of Rent?"',
      'Room-by-Room Clutter Heatmap & Progress Tracker',
      'The "Sell & Donate" Local Disposal Guide for City Dwellers'
    ],
    keyModules: [
      'Micro-Zones: Linen Closets, Under-Sink & Entry Drop Points',
      'Capsule Wardrobe & Vertical Clothing Folding Systems',
      'Paperless Apartment Transition & Digital Document Protocol',
      'The 90-Day Anti-Clutter Maintenance System'
    ],
    blogTriggers: ['How to Declutter a Small Apartment', 'Minimalist Living in a Studio', 'Spring Cleaning for Small Spaces'],
    fourthwallCategory: 'Planners & Workbooks'
  },
  {
    id: 'vertical-storage-kit',
    rank: 6,
    title: 'Apartment Storage Audit & Vertical Optimization Kit',
    tagline: 'Unlock 35% more usable storage using the vertical envelope of your walls, doors, and dead zones.',
    level: 'quick-win',
    priceRange: '$15 – $22 CAD',
    recommendedPrice: 17,
    format: 'Interactive PDF + Printables',
    targetProblem: 'Stuffed kitchen cabinets, closet doors that won’t shut, zero broom closet, under-bed dead space.',
    valueProposition: 'Exact measurement worksheets, vertical stacking formulas, and over-the-door spatial blueprints to maximize every cubic foot.',
    differentiation: 'Provides dimensional formulas for obscure dead zones: above kitchen upper cabinets, back of closet doors, narrow 6-inch gaps beside refrigerators, and vertical closet double-hang spacing.',
    blogCategory: 'Storage & Organization',
    difficulty: 'Low',
    isTop10: true,
    scores: {
      problemSeverity: 9,
      searchAlignment: 10,
      audienceRelevance: 10,
      productUsefulness: 9,
      perceivedValue: 8,
      differentiation: 9,
      visualPotential: 9,
      easeOfProduction: 9,
      bundlePotential: 10,
      upsellPotential: 8,
      evergreenPotential: 10,
      blogPromotionFit: 10,
      pinterestPotential: 10,
      flagshipPotential: 6,
      totalScore: 127
    },
    whyBuild: 'Storage is the highest-volume keyword across the entire small space niche. Easy to make and instantly actionable.',
    deliverables: [
      'Cubic Foot Storage Audit Worksheet (Interactive Calculation)',
      '15 Dead-Zone Blueprints with Exact Renter-Safe Product Matches',
      'Closet Vertical Tier Planner (Hanger drop measurements & shoe shelves)',
      'Under-Sink Plumbing Bypass Organizational Templates'
    ],
    keyModules: [
      'Kitchen Cabinet Riser & Vertical Pan Organizer Geometry',
      'Bathroom Over-Toilet & Behind-Door Vertical Architecture',
      'Under-Bed Low-Profile Storage Strategy',
      'Entryway Drop-Zone in under 2 Square Feet'
    ],
    blogTriggers: ['Small Apartment Storage Ideas', 'How to Organize a Small Closet', 'Kitchen Storage Hacks for Renters'],
    fourthwallCategory: 'Guides & Manuals'
  },
  {
    id: 'studio-zoning-system',
    rank: 7,
    title: 'Studio & Multi-Functional Room Zoning System',
    tagline: 'Create the psychological feeling of a 3-room home inside a single open studio footprint.',
    level: 'premium',
    priceRange: '$24 – $34 CAD',
    recommendedPrice: 27,
    format: 'Interactive PDF + Canva Templates',
    targetProblem: 'Living, sleeping, and working in the same 400 sq ft room leads to restlessness, insomnia, and visual clutter.',
    valueProposition: 'Architectural divider strategies, acoustic softening tips, and lighting micro-zones to create distinct functional rooms without building walls.',
    differentiation: 'Focuses on sensory and psychological zoning: light temperature transitions (5000K focus -> 2200K unwind), rug boundary ratios, and acoustic divider tactics.',
    blogCategory: 'Studio Apartment Living',
    difficulty: 'Medium',
    isTop10: true,
    scores: {
      problemSeverity: 9,
      searchAlignment: 9,
      audienceRelevance: 9,
      productUsefulness: 9,
      perceivedValue: 9,
      differentiation: 10,
      visualPotential: 10,
      easeOfProduction: 8,
      bundlePotential: 9,
      upsellPotential: 9,
      evergreenPotential: 9,
      blogPromotionFit: 9,
      pinterestPotential: 10,
      flagshipPotential: 7,
      totalScore: 126
    },
    whyBuild: 'Studio apartments represent the most desperate, passionate segment of small space dwellers. Solutions here create lifelong brand loyalty.',
    deliverables: [
      'Studio Zoning Architectural Lookbook & Plan Diagrams',
      'Canva 2D Room Divider & Sightline Simulator',
      'Lighting Circadian Transition Schedule for One-Room Living',
      'Bed Disguise & Work-From-Home Concealment Worksheets'
    ],
    keyModules: [
      'Bookshelf & Screen Room Divider Positioning Maps',
      'Rug Perimeter Sizing for Room Boundaries',
      'Sound Dampening in Hardwood/Concrete Condos',
      'Desk-to-Dinner Table 3-Minute Switch Protocol'
    ],
    blogTriggers: ['Studio Apartment Layouts', 'How to Divide a Studio Apartment', 'Working from Home in a Studio'],
    fourthwallCategory: 'Planners & Workbooks'
  },
  {
    id: 'first-apartment-budget-inventory',
    rank: 8,
    title: 'First-Apartment Essential Inventory & Smart Budget Planner',
    tagline: 'Never overspend or buy duplicates. The smart financial calculator & itemized starter registry.',
    level: 'premium',
    priceRange: '$22 – $32 CAD',
    recommendedPrice: 24,
    format: 'Google Sheets + Excel + PDF',
    targetProblem: 'Spending thousands on useless gadgets while forgetting essentials (plunger, tape measure, extension cords), blowing move-in budgets.',
    valueProposition: 'Automated tiered expense calculator (High/Mid/Thrifty) and prioritized 180-item essential registry categorized by urgency.',
    differentiation: 'Features automated "Cost-Per-Square-Foot" filtering—warning you if an item takes up too much physical space relative to its utility.',
    blogCategory: 'Budgeting & First Apartment',
    difficulty: 'Medium',
    isTop10: true,
    scores: {
      problemSeverity: 8,
      searchAlignment: 9,
      audienceRelevance: 9,
      productUsefulness: 9,
      perceivedValue: 8,
      differentiation: 9,
      visualPotential: 8,
      easeOfProduction: 8,
      bundlePotential: 10,
      upsellPotential: 8,
      evergreenPotential: 10,
      blogPromotionFit: 9,
      pinterestPotential: 9,
      flagshipPotential: 7,
      totalScore: 122
    },
    whyBuild: 'Directly monetizes the high-traffic "First Apartment Checklist" blog posts that currently just bounce readers off-site.',
    deliverables: [
      'Automated Google Sheets Budget & Purchase Tracker with Visual Charts',
      'Tiered 180-Item Essential Gear Checklist (Week 1 vs. Month 1 vs. Month 3)',
      'Security Deposit & Utility Startup Cost Predictor',
      'Thrift & Secondhand Inspection Checklist (avoiding bedbugs/structural flaws)'
    ],
    keyModules: [
      'Budget Tier Allocator (Minimalist $800 vs Comfort $2,500)',
      'Kitchen Capsule Cookware Registry (10 pieces that do 90% of jobs)',
      'Emergency Tool & Repair Kit Essentials',
      'Grocery & Pantry Bulk Buy Spatial Limits'
    ],
    blogTriggers: ['First Apartment Checklist', 'Budgeting for First Rental', 'What to Buy for a Small Apartment'],
    fourthwallCategory: 'Spreadsheets & Tools'
  },
  {
    id: 'cleaning-micro-reset-system',
    rank: 9,
    title: 'Small Home Cleaning Rhythm & Micro-Reset Routine System',
    tagline: 'Keep a tight home perpetually guest-ready in 12 minutes a day without weekend-long cleaning marathons.',
    level: 'quick-win',
    priceRange: '$12 – $19 CAD',
    recommendedPrice: 15,
    format: 'Interactive PDF + Printables',
    targetProblem: 'Small spaces get dirty in 30 minutes; dust accumulates rapidly on high surfaces; cleaning supplies clutter small cabinets.',
    valueProposition: 'Visual habit-loop cards and a zoned daily cleaning routine designed specifically for compact homes with minimal cleaning storage.',
    differentiation: 'Focuses on the "12-Minute Closing Shift" and multi-surface micro cleaning toolkits that fit inside a single carry caddy.',
    blogCategory: 'Cleaning & Maintenance',
    difficulty: 'Low',
    isTop10: true,
    scores: {
      problemSeverity: 8,
      searchAlignment: 9,
      audienceRelevance: 9,
      productUsefulness: 9,
      perceivedValue: 8,
      differentiation: 8,
      visualPotential: 9,
      easeOfProduction: 9,
      bundlePotential: 9,
      upsellPotential: 7,
      evergreenPotential: 10,
      blogPromotionFit: 9,
      pinterestPotential: 9,
      flagshipPotential: 6,
      totalScore: 120
    },
    whyBuild: 'Ideal entry-level impulse product ($15) that customers love printing and laminating or keeping on their fridge.',
    deliverables: [
      'Laminable Daily/Weekly/Monthly Cleaning Rhythm Visual Cards',
      '12-Minute "Nightly Reset" Room Sequence Flowchart',
      'Non-Toxic Compact Cleaning Caddy Formula (4 bottles that do everything)',
      'Deep Clean Seasonal Checklists (HVAC filters, fridge coils, window tracks)'
    ],
    keyModules: [
      'Nightly 12-Minute Closing Shift Protocol',
      'Zoned Weekly Micro-Clean Schedule (Mon: Kitchen, Tue: Bath, etc.)',
      'Odor Management & Air Quality Protocol for Compact Spaces',
      'Compact Cleaning Tool Essentials'
    ],
    blogTriggers: ['Cleaning Small Spaces', 'How to Keep a Tiny Apartment Clean', 'Apartment Daily Cleaning Schedule'],
    fourthwallCategory: 'Printable Systems'
  },
  {
    id: 'renter-maintenance-vault',
    rank: 10,
    title: 'Apartment Maintenance & Landlord Communication Vault',
    tagline: 'Document repairs, protect your deposit, and manage landlord communication with professional legal-grade clarity.',
    level: 'quick-win',
    priceRange: '$15 – $22 CAD',
    recommendedPrice: 19,
    format: 'Notion Workspace + PDF',
    targetProblem: 'Unresponsive landlords, lost repair requests, disputed security deposit deductions, and zero tracking of apartment issues.',
    valueProposition: 'Pre-written legal-grade email templates, condition inspection photo database, and appliance maintenance log.',
    differentiation: 'Provides exact script templates for noise complaints, pest issues, heat failures, and illegal entry notices.',
    blogCategory: 'Renter Living & Rights',
    difficulty: 'Low',
    isTop10: true,
    scores: {
      problemSeverity: 8,
      searchAlignment: 8,
      audienceRelevance: 9,
      productUsefulness: 9,
      perceivedValue: 9,
      differentiation: 9,
      visualPotential: 7,
      easeOfProduction: 9,
      bundlePotential: 9,
      upsellPotential: 7,
      evergreenPotential: 9,
      blogPromotionFit: 8,
      pinterestPotential: 7,
      flagshipPotential: 6,
      totalScore: 114
    },
    whyBuild: 'High trust-builder. Gives the brand authoritative credibility while solving a stressful, adversarial tenant problem.',
    deliverables: [
      'Notion Tenant Vault (Lease, Inspection Photos, Maintenance Ticket Log)',
      '24 Copy-and-Paste Landlord Email & Notice Templates (Word & PDF)',
      'Move-In / Move-Out Photo Audit Protocol Checklist',
      'Appliance Model & Filter Size Log Sheet'
    ],
    keyModules: [
      'Move-In Condition Inspection Master Log',
      'Emergency Repair Script Escalation Flowchart',
      'Security Deposit Refund Demand Letter Kit',
      'Sublet & Lease Transfer Checklist'
    ],
    blogTriggers: ['Renter Rights', 'How to Talk to Landlord About Repairs', 'Getting Security Deposit Back'],
    fourthwallCategory: 'Spreadsheets & Tools'
  },
  {
    id: 'small-pantry-meal-system',
    rank: 11,
    title: 'Small Kitchen & Mini-Pantry Meal Strategy Kit',
    tagline: 'Cook gourmet meals with 2 burners, 1 tiny fridge, and zero counter space.',
    level: 'quick-win',
    priceRange: '$14 – $19 CAD',
    recommendedPrice: 16,
    format: 'Interactive PDF + Notion',
    targetProblem: 'Lack of kitchen counter space, mini fridge overflowing, expired canned goods hidden in deep narrow cabinets.',
    valueProposition: 'A compact cooking strategy with one-pot recipes, modular grocery lists, and vertical fridge zoning maps.',
    differentiation: 'Built around the constraints of 2-burner stoves, lack of dishwashers, and single-shelf pantries.',
    blogCategory: 'Kitchen & Cooking',
    difficulty: 'Low',
    isTop10: false,
    scores: {
      problemSeverity: 7,
      searchAlignment: 8,
      audienceRelevance: 9,
      productUsefulness: 8,
      perceivedValue: 7,
      differentiation: 8,
      visualPotential: 8,
      easeOfProduction: 9,
      bundlePotential: 8,
      upsellPotential: 6,
      evergreenPotential: 9,
      blogPromotionFit: 8,
      pinterestPotential: 9,
      flagshipPotential: 5,
      totalScore: 109
    },
    whyBuild: 'Great lifestyle add-on that connects physical kitchen mugs to everyday kitchen organization.',
    deliverables: ['Pantry Inventory Database', 'One-Pot 3-Ingredient Recipe Cards', 'Mini-Fridge Spatial Map'],
    keyModules: ['Vertical Spice Storage Blueprint', 'Grocery Batch Planning for Tiny Fridges'],
    blogTriggers: ['Small Kitchen Organization', 'Cooking in a Studio Apartment'],
    fourthwallCategory: 'Printable Systems'
  },
  {
    id: 'capsule-wardrobe-closet-blueprint',
    rank: 12,
    title: 'Tiny Closet Transformation & Capsule Wardrobe System',
    tagline: 'Fit 60+ outfits into a 3-foot closet without wrinkles, clutter, or off-site storage.',
    level: 'quick-win',
    priceRange: '$16 – $22 CAD',
    recommendedPrice: 19,
    format: 'Interactive PDF + Canva Templates',
    targetProblem: 'Single 36-inch standard rental closet overflowing with clothes; shoes piled on the floor.',
    valueProposition: 'Step-by-step closet tier re-engineering, compression storage tactics, and 36-piece seasonal capsule generator.',
    differentiation: 'Provides physical closet tier schematics matching standard rental wire shelves and wooden rods.',
    blogCategory: 'Closet & Fashion',
    difficulty: 'Low',
    isTop10: false,
    scores: {
      problemSeverity: 8,
      searchAlignment: 9,
      audienceRelevance: 9,
      productUsefulness: 8,
      perceivedValue: 8,
      differentiation: 8,
      visualPotential: 9,
      easeOfProduction: 9,
      bundlePotential: 9,
      upsellPotential: 7,
      evergreenPotential: 9,
      blogPromotionFit: 9,
      pinterestPotential: 10,
      flagshipPotential: 6,
      totalScore: 118
    },
    whyBuild: 'Huge Pinterest driver. Visual before/after closet diagrams drive massive organic traffic.',
    deliverables: ['Closet Dimension Reconfiguration Guide', 'Seasonal Wardrobe Swap Calendar', 'Shoe & Accessory Vertical Blueprint'],
    keyModules: ['Double-Rod Spacing Guide', 'Shoe Wall Geometry', 'Vacuum Bag Storage Protocol'],
    blogTriggers: ['Organizing a Small Closet', 'Capsule Wardrobe for Small Apartments'],
    fourthwallCategory: 'Guides & Manuals'
  },
  {
    id: 'small-balcony-oasis-planner',
    rank: 13,
    title: 'Small Balcony & Patio Oasis Design Guide',
    tagline: 'Turn a 4x8 ft concrete slab into a private European-style garden retreat.',
    level: 'quick-win',
    priceRange: '$14 – $20 CAD',
    recommendedPrice: 17,
    format: 'Interactive PDF + Printables',
    targetProblem: 'Unusable, dusty apartment balconies with wind exposure, lack of privacy, and weight limit fears.',
    valueProposition: 'Curated plant selection guide, privacy screen solutions, and weatherproof compact furniture arrangements.',
    differentiation: 'Considers apartment building strata/bylaw restrictions, wind tunnel dynamics, and drainage rules.',
    blogCategory: 'Outdoor & Balcony',
    difficulty: 'Low',
    isTop10: false,
    scores: {
      problemSeverity: 6,
      searchAlignment: 8,
      audienceRelevance: 8,
      productUsefulness: 8,
      perceivedValue: 7,
      differentiation: 8,
      visualPotential: 10,
      easeOfProduction: 9,
      bundlePotential: 7,
      upsellPotential: 6,
      evergreenPotential: 7,
      blogPromotionFit: 8,
      pinterestPotential: 10,
      flagshipPotential: 5,
      totalScore: 107
    },
    whyBuild: 'High seasonal revenue spike during Spring/Summer. High visual appeal on social media.',
    deliverables: ['Balcony Layout Lookbook', 'Low-Light & Wind-Tolerant Container Plant Guide', 'Privacy Screen Buying Matrix'],
    keyModules: ['Interlocking Deck Tile Calculator', 'Vertical Railing Planter Blueprints'],
    blogTriggers: ['Small Balcony Ideas', 'Apartment Gardening', 'Renter Friendly Balcony Decor'],
    fourthwallCategory: 'Guides & Manuals'
  },
  {
    id: 'small-space-host-kit',
    rank: 14,
    title: 'Small Home Host & Guest Ready Kit',
    tagline: 'Host dinner parties and overnight guests in under 600 sq ft with effortless hospitality.',
    level: 'quick-win',
    priceRange: '$14 – $19 CAD',
    recommendedPrice: 15,
    format: 'Interactive PDF + Printables',
    targetProblem: 'Embarrassment about entertaining in small quarters, nowhere for guests to sit or sleep, coat piles on beds.',
    valueProposition: 'Seating expansion formulas, folding furniture hosting protocols, and guest comfort checklists.',
    differentiation: 'Provides multi-functional hosting blueprints: converting coffee tables to dining stations, folding floor cushion floorplans.',
    blogCategory: 'Entertaining & Lifestyle',
    difficulty: 'Low',
    isTop10: false,
    scores: {
      problemSeverity: 6,
      searchAlignment: 7,
      audienceRelevance: 8,
      productUsefulness: 8,
      perceivedValue: 7,
      differentiation: 8,
      visualPotential: 8,
      easeOfProduction: 9,
      bundlePotential: 7,
      upsellPotential: 6,
      evergreenPotential: 8,
      blogPromotionFit: 7,
      pinterestPotential: 8,
      flagshipPotential: 4,
      totalScore: 101
    },
    whyBuild: 'Great emotional resonance. Addresses the social insecurity of living in a compact home.',
    deliverables: ['Hosting Prep Timeline', 'Overnight Guest Capsule Kit Checklist', 'Drink & Appetizer Station Layouts'],
    keyModules: ['Instant Seating Hacks (Floor Pillows & Stacking Stools)', 'Sound & Privacy Management'],
    blogTriggers: ['Hosting in a Small Apartment', 'Dinner Party Ideas for Small Spaces'],
    fourthwallCategory: 'Printable Systems'
  },
  {
    id: 'entryway-drop-zone-blueprint',
    rank: 15,
    title: 'The Zero-Square-Foot Entryway & Drop-Zone Kit',
    tagline: 'Create an organized command center in 18 inches of wall space without a foyer.',
    level: 'quick-win',
    priceRange: '$12 – $16 CAD',
    recommendedPrice: 14,
    format: 'Interactive PDF + Printables',
    targetProblem: 'Shoes, coats, keys, and mail dumped right at the front door because the apartment opens straight into the living room.',
    valueProposition: 'Vertical wall-mount blueprints, slim shoe cabinet modifications, and key drop ergonomics.',
    differentiation: 'Tailored specifically for apartments with zero hallway/foyer footprint.',
    blogCategory: 'Entryway & Hallways',
    difficulty: 'Low',
    isTop10: false,
    scores: {
      problemSeverity: 8,
      searchAlignment: 8,
      audienceRelevance: 9,
      productUsefulness: 8,
      perceivedValue: 7,
      differentiation: 8,
      visualPotential: 8,
      easeOfProduction: 9,
      bundlePotential: 8,
      upsellPotential: 6,
      evergreenPotential: 9,
      blogPromotionFit: 9,
      pinterestPotential: 9,
      flagshipPotential: 5,
      totalScore: 112
    },
    whyBuild: 'High conversion tripwire product that can be offered as a $7 checkout bump.',
    deliverables: ['18-Inch Entryway Wall Schematic', 'Shoe Capacity Sizing Matrix', 'Mail & Key Drop Organization Printables'],
    keyModules: ['Slim IKEA Trones / Hemnes Optimization', 'No-Drill Heavy Coat Hook Formulas'],
    blogTriggers: ['Apartment with No Entryway Ideas', 'Small Hallway Storage'],
    fourthwallCategory: 'Printable Systems'
  },
  {
    id: 'small-bathroom-spa-vault',
    rank: 16,
    title: 'The Tiny Rental Bathroom Spa Transformation',
    tagline: 'Maximize a 35 sq ft bathroom with zero drawers into a clean, luxury retreat.',
    level: 'quick-win',
    priceRange: '$14 – $19 CAD',
    recommendedPrice: 16,
    format: 'Interactive PDF + Printables',
    targetProblem: 'Pedestal sinks with zero counter space, tiny medicine cabinets, towel rack congestion, moisture buildup.',
    valueProposition: 'Over-toilet vertical shelving guides, suction shower organization frameworks, and mold-prevention protocols.',
    differentiation: 'Engineered specifically for awkward pedestal sinks and landlord plumbing constraints.',
    blogCategory: 'Bathroom Organization',
    difficulty: 'Low',
    isTop10: false,
    scores: {
      problemSeverity: 8,
      searchAlignment: 8,
      audienceRelevance: 9,
      productUsefulness: 8,
      perceivedValue: 7,
      differentiation: 8,
      visualPotential: 8,
      easeOfProduction: 9,
      bundlePotential: 8,
      upsellPotential: 6,
      evergreenPotential: 9,
      blogPromotionFit: 9,
      pinterestPotential: 9,
      flagshipPotential: 5,
      totalScore: 112
    },
    whyBuild: 'Bathroom clutter causes daily irritation. High immediate gratification for the buyer.',
    deliverables: ['Pedestal Sink Add-On Guide', 'Towel Drying Micro-Space Schematics', 'Product Expiration & Decanting Checklist'],
    keyModules: ['Medicine Cabinet Tier Organization', 'Shower Wall Suction Geometry'],
    blogTriggers: ['Small Bathroom Storage', 'How to Organize a Rental Bathroom with No Drawers'],
    fourthwallCategory: 'Guides & Manuals'
  },
  {
    id: 'work-from-home-nook-planner',
    rank: 17,
    title: 'The "Disappearing Desk" Work-From-Home Nook Planner',
    tagline: 'Build a high-productivity home office inside a closet, alcove, or corner that packs away in seconds.',
    level: 'premium',
    priceRange: '$22 – $29 CAD',
    recommendedPrice: 24,
    format: 'Interactive PDF + Canva Templates',
    targetProblem: 'Looming computer monitors ruining the living room vibe on weekends; bad ergonomics on couches.',
    valueProposition: 'Architectural "cloffice" (closet-office) layouts, floating drop-leaf desk schematics, and cable concealment masterplans.',
    differentiation: 'Focuses on visual "disappearance" at 5 PM on Friday to restore home peace.',
    blogCategory: 'Home Office & Productivity',
    difficulty: 'Medium',
    isTop10: false,
    scores: {
      problemSeverity: 8,
      searchAlignment: 9,
      audienceRelevance: 9,
      productUsefulness: 9,
      perceivedValue: 8,
      differentiation: 9,
      visualPotential: 9,
      easeOfProduction: 8,
      bundlePotential: 9,
      upsellPotential: 7,
      evergreenPotential: 9,
      blogPromotionFit: 9,
      pinterestPotential: 9,
      flagshipPotential: 6,
      totalScore: 119
    },
    whyBuild: 'Hybrid work is permanent. Small apartment dwellers desperately need psychological separation from work.',
    deliverables: ['Cloffice Measurement & Shelf Specs', 'Zero-Footprint Cable Management Blueprint', 'Ergonomic Compact Chair Buying Guide'],
    keyModules: ['Closet Door Removal & Curtain Concealment', 'Lighting & Zoom Background Acoustics in Tight Spaces'],
    blogTriggers: ['Cloffice Ideas', 'Small Space Home Office', 'Work from Home in a Studio Apartment'],
    fourthwallCategory: 'Planners & Workbooks'
  },
  {
    id: 'small-space-lighting-formula',
    rank: 18,
    title: 'The Small Space 3-Layer Lighting Formula',
    tagline: 'Make your apartment look twice as big with ambient, task, and accent lighting layouts.',
    level: 'quick-win',
    priceRange: '$14 – $19 CAD',
    recommendedPrice: 16,
    format: 'Interactive PDF + Printables',
    targetProblem: 'Harsh overhead ceiling "boob lights" making small rooms feel like interrogation cells and accentuating shadows.',
    valueProposition: 'Color temperature guides (Kelvin), bounce-lighting reflection maps, and battery/plug-in sconce placement.',
    differentiation: 'Focuses on light diffusion to visually push back walls and eliminate dark corners.',
    blogCategory: 'Decorating & Aesthetics',
    difficulty: 'Low',
    isTop10: false,
    scores: {
      problemSeverity: 7,
      searchAlignment: 7,
      audienceRelevance: 8,
      productUsefulness: 8,
      perceivedValue: 8,
      differentiation: 8,
      visualPotential: 9,
      easeOfProduction: 9,
      bundlePotential: 8,
      upsellPotential: 7,
      evergreenPotential: 9,
      blogPromotionFit: 8,
      pinterestPotential: 9,
      flagshipPotential: 5,
      totalScore: 110
    },
    whyBuild: 'Huge aesthetic impact with low effort. High visual synergy with Fourthwall Wall Art products.',
    deliverables: ['Room-by-Room Kelvin & Lumen Calculator', 'Floor Lamp vs Sconce Footprint Comparison', 'Smart Bulb Automation Schedule'],
    keyModules: ['Corner Illumination Optics', 'Under-Cabinet Puck Lighting Setup'],
    blogTriggers: ['How to Light a Dark Apartment', 'Apartment Lighting Ideas for Renters'],
    fourthwallCategory: 'Guides & Manuals'
  },
  {
    id: 'studio-acoustic-privacy-kit',
    rank: 19,
    title: 'Condo & Apartment Acoustic Privacy & Soundproofing Kit',
    tagline: 'Block hallway stomping, neighbor noise, and echo without structural construction.',
    level: 'quick-win',
    priceRange: '$16 – $22 CAD',
    recommendedPrice: 19,
    format: 'Interactive PDF + Printables',
    targetProblem: 'Thin drywall, drafty front door gaps, echo from hardwood floors, neighbor noise anxiety.',
    valueProposition: 'Decibel testing methods, acoustic drape placement formulas, and door sweep seal guides.',
    differentiation: 'Real physics-backed dampening tailored for rental doors and windows.',
    blogCategory: 'Comfort & Acoustics',
    difficulty: 'Medium',
    isTop10: false,
    scores: {
      problemSeverity: 8,
      searchAlignment: 7,
      audienceRelevance: 8,
      productUsefulness: 8,
      perceivedValue: 8,
      differentiation: 9,
      visualPotential: 7,
      easeOfProduction: 8,
      bundlePotential: 7,
      upsellPotential: 6,
      evergreenPotential: 9,
      blogPromotionFit: 7,
      pinterestPotential: 7,
      flagshipPotential: 5,
      totalScore: 104
    },
    whyBuild: 'Niche, high-urgency pain point for city dwellers facing noisy streets or hallway traffic.',
    deliverables: ['Door Perimeter Sound Leak Audit Sheet', 'Rug Pad & Drape Density Buyer Matrix', 'White Noise Sound-Masking Guide'],
    keyModules: ['Front Door Sweep & Weatherstrip Installation', 'Acoustic Wall Art Backing Technique'],
    blogTriggers: ['How to Soundproof an Apartment Door', 'Quiet Living in a Noisy Condo'],
    fourthwallCategory: 'Guides & Manuals'
  },
  {
    id: 'pet-living-small-space-system',
    rank: 20,
    title: 'Small Space Pet Living & Litter Concealment System',
    tagline: 'Live happily with cats or dogs in under 700 sq ft without odors or bulky pet eyesores.',
    level: 'quick-win',
    priceRange: '$14 – $19 CAD',
    recommendedPrice: 16,
    format: 'Interactive PDF + Printables',
    targetProblem: 'Litter box taking over bathroom or closet, dog beds blocking walkways, pet toy clutter, odors.',
    valueProposition: 'Concealed furniture litter box schematics, vertical cat climbing walls that double as art, and pet gear storage.',
    differentiation: 'Focuses on smell containment and dual-purpose human/pet furniture.',
    blogCategory: 'Pets & Small Spaces',
    difficulty: 'Low',
    isTop10: false,
    scores: {
      problemSeverity: 8,
      searchAlignment: 8,
      audienceRelevance: 8,
      productUsefulness: 8,
      perceivedValue: 7,
      differentiation: 9,
      visualPotential: 8,
      easeOfProduction: 9,
      bundlePotential: 7,
      upsellPotential: 6,
      evergreenPotential: 9,
      blogPromotionFit: 8,
      pinterestPotential: 9,
      flagshipPotential: 4,
      totalScore: 108
    },
    whyBuild: 'Pet owners in apartments are fiercely passionate and constantly seek scent/space solutions.',
    deliverables: ['Litter Box Concealment DIY Guide', 'Pet Gear Minimalist Capsule List', 'Odor Elimination Daily Routine'],
    keyModules: ['Hidden Litter Cabinet Specs', 'Vertical Cat Runway Planning'],
    blogTriggers: ['Cats in a Studio Apartment', 'Dog Living in Small Condo'],
    fourthwallCategory: 'Guides & Manuals'
  }
];

export const BUNDLE_ECOSYSTEM: ProductBundle[] = [
  {
    id: 'bundle-first-apartment-moving',
    name: 'The First-Apartment & Moving Survival Suite',
    tagline: 'Everything you need to plan, budget, move, and unpack your first rental without stress.',
    targetCustomer: 'First-time renters, students, and young professionals moving into a new apartment or condo.',
    problemSolved: 'Moving overwhelm, budget blowouts, forgotten move-in necessities, and chaotic first weeks.',
    productsIncluded: [
      'The Small Space Moving-In Blueprint & Transition OS (Valued at $29)',
      'First-Apartment Essential Inventory & Smart Budget Planner (Valued at $24)',
      'The Damage-Free Renter Upgrade Manual (Valued at $19)',
      'Apartment Maintenance & Landlord Communication Vault (Valued at $19)'
    ],
    totalComponents: '4 Complete Systems • 3 Notion Workspaces • 2 Google Sheets • 140+ Editorial PDF Pages',
    recommendedFormats: ['Notion Workspace', 'Google Sheets', 'Interactive PDF'],
    perceivedValue: 91,
    suggestedPrice: 47,
    savingsPercentage: 48,
    buyingRationale: 'Buying these four items separately costs $91. At $47, the buyer saves $44 while acquiring the definitive end-to-end relocation and move-in suite.',
    fourthwallPositioning: 'Featured in "Moving & New Renter Starter Bundles" on shop.smallspacehome.ca',
    physicalCrossSell: {
      productName: 'SmallSpaceHome "New Beginnings" Minimalist Wall Art & Morning Mug',
      merchType: 'Wall Art',
      synergyPitch: 'Pair your move-in system with an architectural print that establishes your new serene focal point.'
    }
  },
  {
    id: 'bundle-spatial-mastery',
    name: 'The Tiny Space Layout & Storage Mastery Suite',
    tagline: 'The definitive architectural system to master furniture scale, room zoning, and vertical storage.',
    targetCustomer: 'Studio apartment dwellers, compact condo owners, and anyone struggling with cramped square footage.',
    problemSolved: 'Furniture layout paralysis, wasted dead zones, visual clutter, and room identity confusion.',
    productsIncluded: [
      'Small-Space Layout & Furniture Proportion Planner (Valued at $34)',
      'Studio & Multi-Functional Room Zoning System (Valued at $27)',
      'Apartment Storage Audit & Vertical Optimization Kit (Valued at $17)',
      'The Damage-Free Renter Upgrade Manual (Valued at $19)'
    ],
    totalComponents: '4 Architectural Systems • 1 Clearance Google Sheet • 60+ Scale Cutouts • Canva Zoning Simulator',
    recommendedFormats: ['Google Sheets', 'Canva Templates', 'Interactive PDF'],
    perceivedValue: 97,
    suggestedPrice: 54,
    savingsPercentage: 44,
    buyingRationale: 'Saves buyers from making a single $500+ furniture sizing mistake. The clearance calculator alone pays for the bundle ten times over.',
    fourthwallPositioning: 'Top Seller in "Design & Organization Kits"',
    physicalCrossSell: {
      productName: 'SmallSpaceHome "Geometry of Space" Ceramic Coffee Mug',
      merchType: 'Coffee Mug',
      synergyPitch: 'Enjoy your morning brew while referencing your laminated daily reset card.'
    }
  },
  {
    id: 'bundle-peaceful-home-reset',
    name: 'The Peaceful Small Home Reset & Maintenance Suite',
    tagline: 'Eliminate 40% of clutter, establish 12-minute daily rhythms, and protect your home peace forever.',
    targetCustomer: 'Busy renters and homeowners experiencing clutter fatigue in small footprints.',
    problemSolved: 'Rebounding clutter, weekend-long exhausting cleaning sprees, and friction with landlord repairs.',
    productsIncluded: [
      'The 30-Day Small Home Declutter & Spatial Reset Protocol (Valued at $27)',
      'Small Home Cleaning Rhythm & Micro-Reset Routine System (Valued at $15)',
      'Apartment Storage Audit & Vertical Optimization Kit (Valued at $17)',
      'Apartment Maintenance & Landlord Communication Vault (Valued at $19)'
    ],
    totalComponents: '4 Habit & Declutter Kits • 30 Daily Action Cards • Printable Cleaning Visuals • Maintenance Log',
    recommendedFormats: ['Interactive PDF', 'Printables', 'Notion Workspace'],
    perceivedValue: 78,
    suggestedPrice: 39,
    savingsPercentage: 50,
    buyingRationale: 'An accessible, high-relief package that directly restores mental calm and cleanliness to cluttered spaces.',
    fourthwallPositioning: 'Featured in "Declutter & Daily Rhythms"',
    physicalCrossSell: {
      productName: 'SmallSpaceHome "Calm Sanctuary" Art Print Series',
      merchType: 'Wall Art',
      synergyPitch: 'Complete your decluttered living room with a serene, minimalist focal piece.'
    }
  },
  {
    id: 'bundle-complete-all-access',
    name: 'The Complete SmallSpaceHome Master Ecosystem (All-Access Pass)',
    tagline: 'Every single system, planner, database, template, and guide SmallSpaceHome produces.',
    targetCustomer: 'Dedicated small space lifestyle enthusiasts, serial renters, and intentional living practitioners.',
    problemSolved: 'Solves the entire spectrum of small space living from moving day to daily habits and aesthetic design.',
    productsIncluded: [
      'The Small Space Operating System (Flagship) (Valued at $79)',
      'All Top 10 Digital Systems & Workbooks (Total Value $240+)',
      'Bonus: Lifetime Access to All Future Template Updates',
      'Bonus: Private Small Space Layout Q&A Archive'
    ],
    totalComponents: 'Complete Digital Master Library • 6 Notion Hubs • 4 Automated Spreadsheets • 280+ PDF Pages',
    recommendedFormats: ['All Formats (Notion, Google Sheets, Canva, Interactive PDF, Printables)'],
    perceivedValue: 249,
    suggestedPrice: 97,
    savingsPercentage: 61,
    buyingRationale: 'For less than the price of a single side table, gain lifetime access to the entire SmallSpaceHome intellectual property library.',
    fourthwallPositioning: 'Highlighted as the Brand VIP Flagship on Fourthwall',
    physicalCrossSell: {
      productName: 'The SmallSpaceHome Collector Mug + Limited Edition Print Bundle',
      merchType: 'Wall Art',
      synergyPitch: 'Unlock an exclusive 25% discount code on all physical wall art and mugs when buying the All-Access Pass.'
    }
  }
];

export const FLAGSHIP_DETAILED_SPEC = {
  name: 'The Small Space Operating System (SS-OS)',
  subtitle: 'The Definitive Architecture for Intentional Living in Under 800 Sq Ft',
  corePromise: 'Transform any cramped apartment, condo, or rental into a spacious, serene, highly organized sanctuary in 30 days without renovation or lease violations.',
  targetCustomer: 'Urban apartment dwellers, studio renters, downsizing couples, and small condo owners seeking structured, beautiful systems for their home.',
  transformation: 'Moves the customer from feeling overwhelmed, cramped, and visually suffocated to feeling in complete control, peaceful, and proud of their small home.',
  formatSpecs: [
    'Notion Small Space Hub (2.0 Template with connected databases & custom dashboard views)',
    'Automated Google Sheets & Excel Workbook (Walkway clearance, budget calculator, inventory auditor)',
    '120-Page Editorial Interactive PDF Master Guide (Typography, diagrams, interactive checkfields)',
    'Printable Quick-Reference Binder System (Standard US Letter & A4 printable cards)'
  ],
  pricingStrategy: {
    standalonePrice: '$79 CAD / $59 USD',
    introductoryLaunchPrice: '$59 CAD / $44 USD',
    bundleUpsellPrice: '$97 CAD (with All-Access & Lifetime Updates)',
    checkoutBumpOption: 'Add $9 for the "Audio Micro-Reset Guide & Landlord Notice Script Pack"'
  },
  modules: [
    {
      id: 'mod-1',
      moduleNumber: '01',
      title: 'Spatial Geometry & Scale Layout Architecture',
      summary: 'Map your floor plan with architectural precision, verify walkway clearances, and plan furniture dimensions before purchasing.',
      toolsIncluded: [
        'Interactive Google Sheet Walkway Clearance Validator',
        'Canva 2D Floorplan Modular Template Pack (12 Pre-built Studio/1-Bed layouts)',
        'Scale Furniture Cutout Printable Kit (1/4" scale)',
        'Sightline & Natural Light Reflection Audit'
      ],
      interactiveAssets: ['Clearance Warning Engine', 'Furniture Scale Matrix'],
      transformation: 'Eliminates furniture sizing errors and optimizes room flow.'
    },
    {
      id: 'mod-2',
      moduleNumber: '02',
      title: 'The Vertical Storage & Cabinet Engineering Blueprint',
      summary: 'Uncover 35% more usable storage across walls, doors, ceilings, and concealed dead zones.',
      toolsIncluded: [
        'Cubic Foot Vertical Storage Calculator',
        'Cabinet Riser & Shelf Tier Blueprint Matrix',
        'Over-Door & Behind-Plumbing Optimization Blueprints',
        'Closet Vertical Drop Measurement Guide'
      ],
      interactiveAssets: ['Dead-Zone Audit Checklist', 'Cabinet Geometry Sheets'],
      transformation: 'Clears countertops and stores everything cleanly behind closed doors.'
    },
    {
      id: 'mod-3',
      moduleNumber: '03',
      title: 'The 30-Day Ruthless Declutter & Spatial Reset',
      summary: 'A day-by-day micro-declutter protocol specifically engineered for homes without basements or garages.',
      toolsIncluded: [
        '30 Daily Micro-Action Protocols (15-20 mins/day)',
        'The Real-Estate Tax Decision Matrix',
        'Digital Document & Paperless Apartment Transition Vault',
        'Local City Sell/Donate Strategy Guide'
      ],
      interactiveAssets: ['Clutter Heatmap Notion Database', 'Progress Bar Tracker'],
      transformation: 'Removes 40% of visual clutter permanently without burnout.'
    },
    {
      id: 'mod-4',
      moduleNumber: '04',
      title: 'Damage-Free Renter Upgrades & Aesthetic Lighting',
      summary: 'Elevate dated rental finishes, upgrade lighting layers, and create a high-end look without risking your security deposit.',
      toolsIncluded: [
        '50+ No-Drill Renter Upgrade Guides (Hardware, Backsplash, Lighting)',
        '3-Layer Circadian Lighting Temperature Schedule (Kelvin & Lumen formulas)',
        'Damage-Free Mounting Load Calculator (Command/Tension/Adhesive safety)',
        'Move-Out Deposit Restoration Checklist'
      ],
      interactiveAssets: ['Hardware Gauge Matcher', 'Lighting Map Diagram'],
      transformation: 'Makes rental spaces feel like a custom-designed luxury boutique.'
    },
    {
      id: 'mod-5',
      moduleNumber: '05',
      title: 'Daily Micro-Reset Rhythms & Habit Engine',
      summary: 'Maintain pristine order with 12-minute closing shifts and sustainable routines.',
      toolsIncluded: [
        '12-Minute Nightly Closing Shift Visual Card',
        'Zoned Weekly Micro-Clean Rhythm Matrix',
        'Compact Eco Cleaning Caddy Blueprint (4 Multi-Surface Formulations)',
        'Seasonal Deep Refresh Schedule'
      ],
      interactiveAssets: ['Printable Laminable Habit Cards', 'Weekly Cleaning Dashboard'],
      transformation: 'Replaces exhausting weekend cleans with effortless 12-minute daily flow.'
    },
    {
      id: 'mod-6',
      moduleNumber: '06',
      title: 'Moving, Inventory & Lease Management Vault',
      summary: 'A complete administrative repository for your lease, moving logistics, appliance serials, and landlord notices.',
      toolsIncluded: [
        'Notion Tenant Vault & Move-In Condition Photo Log',
        '8-Week Countdown Moving Project Management Board',
        'QR-Code Box Labeling Printable Templates',
        '24 Pre-Written Landlord Notice & Repair Request Scripts'
      ],
      interactiveAssets: ['Notion Tenant Dashboard', 'Elevator Booking Timing Sheet'],
      transformation: 'Protects legal tenant rights, secures full deposit return, and eases moving.'
    }
  ]
};

export const BLOG_FUNNEL_MAPPINGS: BlogFunnelMapping[] = [
  {
    id: 'funnel-storage-closet',
    blogCategory: 'Organization & Storage',
    sampleArticleTitle: 'How to Organize a Tiny Rental Closet with Zero Built-ins',
    searchIntent: 'Reader has clothes falling off shelves, shoes on the floor, and an undersized 36" rental closet.',
    readerFriction: 'Frustrated by generic closet advice that requires custom IKEA Pax systems or drilling permanent rails.',
    recommendedProduct: 'Apartment Storage Audit & Vertical Optimization Kit ($17 CAD)',
    productPrice: '$17 CAD',
    ctaType: 'Inline Highlight',
    ctaHeadline: 'Stop fighting your closet door.',
    ctaCopy: 'Download the exact vertical tier measurement blueprint that fits 60+ garments and 14 pairs of shoes into a standard 36-inch rental closet without drilling a single hole.',
    buttonText: 'Get The Closet Tier Blueprint ($17)',
    pinterestAngle: 'Pin Graphic: "Before/After 36-Inch Rental Closet Tier Schematic + Free Measurement Guide"'
  },
  {
    id: 'funnel-furniture-layout',
    blogCategory: 'Furniture & Layouts',
    sampleArticleTitle: '7 Furniture Mistakes That Make Small Living Rooms Feel Cramped',
    searchIntent: 'Reader is browsing sofas, coffee tables, or TV units and worried their room will feel claustrophobic.',
    readerFriction: 'Unsure about dimensions and afraid of spending $1,200 on a sofa that blocks the balcony door.',
    recommendedProduct: 'Small-Space Layout & Furniture Proportion Planner ($34 CAD)',
    productPrice: '$34 CAD',
    ctaType: 'End-of-Post Box',
    ctaHeadline: 'Calculate your exact walkway clearances before buying.',
    ctaCopy: 'Our interactive Google Sheets calculator instantly tests if your dream sofa leaves the mandatory 36-inch traffic flow. Includes 60+ pre-scaled printable furniture cutouts and 12 Canva layout templates.',
    buttonText: 'Unlock The Layout Planner ($34)',
    pinterestAngle: 'Pin Graphic: "The 36-Inch Rule: Small Living Room Furniture Clearance Diagram & Calculator"'
  },
  {
    id: 'funnel-studio-living',
    blogCategory: 'Studio Apartment Living',
    sampleArticleTitle: 'How to Divide a Studio Apartment into 3 Distinct Zones',
    searchIntent: 'Reader sleeps, works, and eats in one room; feels restless and lacks privacy or bedtime separation.',
    readerFriction: 'Does not know how to position dividers or manage light so work does not bleed into bedtime.',
    recommendedProduct: 'Studio & Multi-Functional Room Zoning System ($27 CAD)',
    productPrice: '$27 CAD',
    ctaType: 'Inline Highlight',
    ctaHeadline: 'Make your studio feel like a real one-bedroom.',
    ctaCopy: 'Get the architectural divider sightline templates, lighting circadian schedule, and rug boundary proportion guides created specifically for 350–550 sq ft open studio layouts.',
    buttonText: 'Get The Studio Zoning System ($27)',
    pinterestAngle: 'Pin Graphic: "Studio Apartment Floorplan Blueprint: 3 Rooms in 450 Sq Ft"'
  },
  {
    id: 'funnel-renter-hacks',
    blogCategory: 'Renter-Friendly Decor',
    sampleArticleTitle: '12 Rental Kitchen Upgrades That Won’t Void Your Lease',
    searchIntent: 'Reader hates their yellow oak cabinets and fluorescent tube lighting but fears losing their $1,500 security deposit.',
    readerFriction: 'Wants aesthetic transformation without heavy tools or permanent alterations.',
    recommendedProduct: 'The Damage-Free Renter Upgrade Manual & Action Binder ($19 CAD)',
    productPrice: '$19 CAD',
    ctaType: 'End-of-Post Box',
    ctaHeadline: 'Transform your rental without losing a cent of your deposit.',
    ctaCopy: 'Step-by-step visual guides for tool-free cabinet hardware swaps, peel-and-stick backsplash installation, and plug-in wall sconces—complete with 5-minute move-out reversal procedures.',
    buttonText: 'Download The Renter Upgrade Manual ($19)',
    pinterestAngle: 'Pin Graphic: "$100 Renter Kitchen Transformation: No-Drill Hardware & Backsplash Guide"'
  },
  {
    id: 'funnel-moving-downsizing',
    blogCategory: 'Moving & Transitioning',
    sampleArticleTitle: 'The Ultimate First Apartment Moving Checklist & Timeline',
    searchIntent: 'Reader is moving in 30 days, feeling overwhelmed by logistics, elevator reservations, and packing chaos.',
    readerFriction: 'Panicking over packing order and forgetting critical day-one utilities or supplies.',
    recommendedProduct: 'The Small Space Moving-In Blueprint & Transition OS ($29 CAD)',
    productPrice: '$29 CAD',
    ctaType: 'Sticky Footer Banner',
    ctaHeadline: 'Move into your small apartment in 48 hours without the stress.',
    ctaCopy: 'Our complete Notion Moving OS + printable QR-code box labels and elevator timing sheets guide every day from 8 weeks out to your first night.',
    buttonText: 'Get The Moving-In Blueprint ($29)',
    pinterestAngle: 'Pin Graphic: "8-Week Apartment Moving Timeline & Printable QR-Code Box Label System"'
  },
  {
    id: 'funnel-declutter-cleaning',
    blogCategory: 'Cleaning & Organization',
    sampleArticleTitle: 'How to Keep a Small Apartment Clutter-Free in 12 Minutes a Day',
    searchIntent: 'Reader is tired of their apartment feeling messy every 3 days and spending whole Saturdays cleaning.',
    readerFriction: 'Lacks a fast, structured micro-routine and suffers from clutter rebound.',
    recommendedProduct: 'Small Home Cleaning Rhythm & Micro-Reset Routine System ($15 CAD)',
    productPrice: '$15 CAD',
    ctaType: 'Inline Highlight',
    ctaHeadline: 'Ditch the 4-hour weekend cleaning marathon.',
    ctaCopy: 'Print our laminated 12-Minute Nightly Closing Shift card and zoned weekly micro-clean schedule designed exclusively for spaces under 800 sq ft.',
    buttonText: 'Get The 12-Minute Reset System ($15)',
    pinterestAngle: 'Pin Graphic: "The 12-Minute Nightly Closing Shift: Small Apartment Cleaning Schedule Card"'
  }
];

export const FOURTHWALL_STORE_ARCHITECTURE = {
  storeUrl: 'shop.smallspacehome.ca',
  brandName: 'SmallSpaceHome Studio & Store',
  collections: [
    {
      id: 'col-flagship',
      title: 'Flagship Systems & Suites',
      description: 'Comprehensive digital operating systems and all-in-one bundles for serious small-space dwellers.',
      featuredProducts: [
        'The Complete SmallSpaceHome Master Ecosystem (All-Access Pass)',
        'The Small Space Operating System (SS-OS)',
        'The Tiny Space Layout & Storage Mastery Suite'
      ]
    },
    {
      id: 'col-planners',
      title: 'Layout, Furniture & Moving Planners',
      description: 'Architectural clearance calculators, scale grid sheets, and relocation project management tools.',
      featuredProducts: [
        'Small-Space Layout & Furniture Proportion Planner',
        'The Small Space Moving-In Blueprint & Transition OS',
        'Studio & Multi-Functional Room Zoning System'
      ]
    },
    {
      id: 'col-guides',
      title: 'Renter Upgrades & Storage Blueprints',
      description: 'Damage-free rental transformation manuals, vertical storage kits, and landlord communication vaults.',
      featuredProducts: [
        'The Damage-Free Renter Upgrade Manual & Action Binder',
        'Apartment Storage Audit & Vertical Optimization Kit',
        'Apartment Maintenance & Landlord Communication Vault'
      ]
    },
    {
      id: 'col-printables',
      title: 'Daily Rhythms & Decluttering Kits',
      description: 'Printable laminated habit cards, 30-day declutter protocols, and compact cleaning routine systems.',
      featuredProducts: [
        'The 30-Day Small Home Declutter & Spatial Reset Protocol',
        'Small Home Cleaning Rhythm & Micro-Reset Routine System',
        'First-Apartment Essential Inventory & Smart Budget Planner'
      ]
    },
    {
      id: 'col-physical-hybrid',
      title: 'Art & Lifestyle Merch + Digital Pairings',
      description: 'Curated pairings of physical SmallSpaceHome wall art and ceramic mugs with matching digital systems.',
      featuredProducts: [
        'Peaceful Studio Art Print + Layout Planner Bundle',
        'Small Space Morning Mug + 12-Minute Daily Reset System',
        'New Beginnings Wall Art + Moving-In Survival Suite'
      ]
    }
  ],
  checkoutBumps: [
    {
      id: 'bump-repair-scripts',
      title: 'Renter Emergency Landlord Repair Script Pack ($7 CAD)',
      triggerConditions: 'When adding any Renter Guide or Moving Planner to cart',
      takeRateEstimate: '38%'
    },
    {
      id: 'bump-cleaning-cards',
      title: 'Printable 12-Minute Closing Shift Fridge Cards ($5 CAD)',
      triggerConditions: 'When adding any Declutter or Storage product to cart',
      takeRateEstimate: '42%'
    }
  ]
};

export const PRODUCTION_ROADMAP = [
  {
    phase: 'Phase 1: Brand Anchor & High-Converting Quick Wins',
    timeline: 'Weeks 1–3',
    primaryGoal: 'Establish the flagship framework and launch 2 high-volume impulse products to monetize existing blog traffic.',
    milestones: [
      {
        task: 'Build & Polish Product #4: The Damage-Free Renter Upgrade Manual ($19 CAD)',
        format: 'Interactive 68-page Editorial PDF + Resource Links',
        status: 'Ready to build',
        targetLaunchWeek: 'Week 1'
      },
      {
        task: 'Build & Polish Product #6: Apartment Storage Audit & Vertical Optimization Kit ($17 CAD)',
        format: 'Interactive PDF + Printable Worksheets',
        status: 'Ready to build',
        targetLaunchWeek: 'Week 2'
      },
      {
        task: 'Build & Polish Product #9: Small Home Cleaning Rhythm & Micro-Reset System ($15 CAD)',
        format: 'Printable Visual Cards + Mobile PDF',
        status: 'Ready to build',
        targetLaunchWeek: 'Week 3'
      },
      {
        task: 'Embed Mid-Post CTAs into Top 10 Existing Storage & Renter Blog Posts',
        format: 'Inline Callouts & Custom Banners',
        status: 'Ready',
        targetLaunchWeek: 'Week 3'
      }
    ]
  },
  {
    phase: 'Phase 2: High-Ticket Planners & Spreadsheets',
    timeline: 'Weeks 4–6',
    primaryGoal: 'Launch the high-intent furniture layout and moving planners with automated Google Sheets and Notion databases.',
    milestones: [
      {
        task: 'Build Product #2: Small-Space Layout & Furniture Proportion Planner ($34 CAD)',
        format: 'Google Sheets Calculator + Canva Layout Pack + 1/4" Cutout Grid',
        status: 'Planned',
        targetLaunchWeek: 'Week 4'
      },
      {
        task: 'Build Product #3: The Small Space Moving-In Blueprint & Transition OS ($29 CAD)',
        format: 'Notion Workspace + Printable QR Labels + Timeline PDF',
        status: 'Planned',
        targetLaunchWeek: 'Week 5'
      },
      {
        task: 'Build Product #8: First-Apartment Essential Inventory & Smart Budget Planner ($24 CAD)',
        format: 'Automated Google Sheets Expense & Gear Registry',
        status: 'Planned',
        targetLaunchWeek: 'Week 6'
      },
      {
        task: 'Deploy Bundle #1: The First-Apartment & Moving Survival Suite ($47 CAD)',
        format: 'Fourthwall Curated Product Bundle',
        status: 'Planned',
        targetLaunchWeek: 'Week 6'
      }
    ]
  },
  {
    phase: 'Phase 3: Flagship Launch & Studio Mastery',
    timeline: 'Weeks 7–9',
    primaryGoal: 'Assemble and launch the ultimate signature product (SS-OS) and studio zoning system.',
    milestones: [
      {
        task: 'Build Product #7: Studio & Multi-Functional Room Zoning System ($27 CAD)',
        format: 'Canva Sightline Simulator + Circadian Light Schedule',
        status: 'Planned',
        targetLaunchWeek: 'Week 7'
      },
      {
        task: 'Build Product #5: The 30-Day Small Home Declutter & Spatial Reset ($27 CAD)',
        format: 'Interactive PDF + Action Card Pack',
        status: 'Planned',
        targetLaunchWeek: 'Week 8'
      },
      {
        task: 'Finalize & Launch Flagship Product #1: The Small Space Operating System (SS-OS) ($79 CAD)',
        format: 'Notion 2.0 Hub + Sheets + 120-Page Master Guide + Video Walkthrough',
        status: 'Planned',
        targetLaunchWeek: 'Week 9'
      },
      {
        task: 'Launch Bundle #4: The Complete SmallSpaceHome Master Ecosystem ($97 CAD)',
        format: 'All-Access Pass on Fourthwall',
        status: 'Planned',
        targetLaunchWeek: 'Week 9'
      }
    ]
  },
  {
    phase: 'Phase 4: Physical-Digital Synergy & Organic Growth Engine',
    timeline: 'Weeks 10+',
    primaryGoal: 'Scale blog traffic, optimize Pinterest pins, and bundle Fourthwall physical merchandise (wall art & mugs).',
    milestones: [
      {
        task: 'Create Physical Merch + Digital Bundles on Fourthwall (Art Print + Layout Planner, Mug + Reset System)',
        format: 'Fourthwall Cross-Sell Rule Setup',
        status: 'Planned',
        targetLaunchWeek: 'Week 10'
      },
      {
        task: 'Roll Out 30 Targeted Pinterest Rich Pins for Each Product & Bundle',
        format: 'Canva Pin Templates with High-Contrast Schematics',
        status: 'Planned',
        targetLaunchWeek: 'Week 11'
      },
      {
        task: 'Implement Checkout Bumps ($5–$9 Add-ons) on Fourthwall Checkout',
        format: 'Fourthwall Post-Purchase & In-Cart Bumps',
        status: 'Planned',
        targetLaunchWeek: 'Week 12'
      }
    ]
  }
];
