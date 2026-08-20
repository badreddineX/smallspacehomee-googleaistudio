export interface StoreDeliverableFile {
  name: string;
  format: string;
  size: string;
  description: string;
}

export interface StoreFaqItem {
  question: string;
  answer: string;
}

export interface InteractiveProductData {
  id: string;
  rank: number;
  title: string;
  storeSlug: string;
  category: string;
  fourthwallCollection: string;
  priceCAD: number;
  priceUSD: number;
  compareAtPriceCAD: number;
  format: string;
  deliverableBadge: string;
  overviewSummary: string;
  storeShortDescription: string;
  storeFullListingMarkdown: string;
  primaryActionLabel: string;
  interactiveToolType: 
    | 'spatial-blueprint'
    | 'furniture-grid'
    | 'moving-logistics'
    | 'renter-upgrades'
    | 'declutter-protocol'
    | 'vertical-storage'
    | 'studio-zoning'
    | 'starter-budget'
    | 'cleaning-rhythm'
    | 'landlord-vault'
    | 'pantry-cooking'
    | 'capsule-wardrobe'
    | 'acoustic-soften'
    | 'balcony-garden'
    | 'wfh-ergonomic'
    | 'pet-small-space'
    | 'hosting-kit'
    | 'circadian-light'
    | 'seasonal-storage'
    | 'roommate-harmony';
  interactiveSections: {
    id: string;
    title: string;
    description: string;
    content: any;
  }[];
  printableWorksheetMarkdown: string;
  notionExportSchema: string;
  quickChecklist: { id: string; label: string; tag: string }[];
  deliverableFiles: StoreDeliverableFile[];
  storeFaq: StoreFaqItem[];
  seoMeta: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
  };
  customerWelcomeEmail: string;
}

export const INTERACTIVE_PRODUCTS_MAP: Record<string, InteractiveProductData> = {
  'flagship-ss-os': {
    id: 'flagship-ss-os',
    rank: 1,
    title: 'The Small Space Operating System (SS-OS)',
    storeSlug: 'small-space-operating-system-ss-os',
    category: 'Complete Small-Space Living & Organization',
    fourthwallCollection: 'Flagship Systems',
    priceCAD: 79,
    priceUSD: 58,
    compareAtPriceCAD: 149,
    format: 'Hybrid (Notion Hub + Google Sheets + 120-Page PDF)',
    deliverableBadge: 'Master Flagship Suite',
    overviewSummary: 'The definitive architectural master system for small-space living, furniture proportioning, vertical storage engineering, and intentional dwelling.',
    storeShortDescription: 'Transform any studio, condo, or small apartment into a calm, high-functioning sanctuary. The complete 6-module digital OS with connected Notion databases, automated clearance calculators, and 120-page blueprint.',
    storeFullListingMarkdown: `## THE ARCHITECTURAL OPERATING SYSTEM FOR SMALL HOMES

Living in under 800 sq ft shouldn't feel like a constant battle against visual clutter and tight corridors. **The Small Space Operating System (SS-OS)** is the all-in-one digital master suite engineered specifically for renters, studio dwellers, and compact homeowners.

---

### WHAT'S INSIDE THE 6-MODULE SYSTEM:
- **Module 01: Spatial Assessment & 2D Scale Floorplan Grid** — Calculate exact traffic corridors (36" standard) and avoid costly sizing mistakes.
- **Module 02: Vertical Storage & Renter-Safe Anchor Load Matrix** — Unlock 35% more usable storage with zero-damage mounting specs.
- **Module 03: 30-Day Ruthless Declutter Protocol** — Stop paying the "Real Estate Rent Tax" on unused items with the 14-Day Quarantine Box.
- **Module 04: Renter Aesthetic & 3-Layer Lighting Formula** — Replace builder-grade lighting with 2700K ambient, 3000K task, and 2200K accent formulas.
- **Module 05: 12-Minute Closing Shift & Daily Reset Engine** — Keep your home guest-ready in 12 minutes without weekend cleaning marathons.
- **Module 06: Move-In, Inventory & Landlord Communication Vault** — Digital lease tracking, repair ticket logs, and deposit protection templates.

---

### WHAT YOU RECEIVE INSTANTLY:
1. **Notion Master Workspace (SS-OS v2.4)** — 6 interconnected databases ready to duplicate into free Notion accounts.
2. **Google Sheets & Excel Spatial Calculator Suite** — Automated formulas with real-time clearance warnings.
3. **120-Page Interactive Architectural PDF Guide** — High-contrast typography with clickable navigation and print-ready blueprints.
4. **Printable Quick-Reference Room Blueprint Cards (A4/Letter)**.
5. **Video Walkthrough & Onboarding Setup Guide**.

---

### COMPATIBILITY:
- Notion (Free or Plus accounts on Mac, Windows, iOS, Android)
- Google Sheets & Microsoft Excel (.xlsx)
- PDF (Adobe Acrobat, GoodNotes, Apple Books, or standard print)`,
    primaryActionLabel: 'Open Flagship 6-Module OS Suite',
    interactiveToolType: 'spatial-blueprint',
    interactiveSections: [
      {
        id: 'mod1',
        title: 'Spatial Blueprint & 2D Scale Layout Grid',
        description: 'Interactive architectural grid with automated clearance detection.',
        content: { type: 'grid', clearance: 36 }
      },
      {
        id: 'mod2',
        title: 'Vertical Storage & Structural Anchor Load Matrix',
        description: 'Zero-damage mounting load calculator and cubic capacity analyzer.',
        content: { type: 'load-calc', maxCapacity: '120 lbs' }
      },
      {
        id: 'mod3',
        title: '30-Day Ruthless Declutter Protocol',
        description: 'Four-week milestone roadmap with the 14-Day Spatial Quarantine Box.',
        content: { type: 'schedule', weeks: 4 }
      }
    ],
    printableWorksheetMarkdown: `# SS-OS Master Spatial Sheet\n\nRoom Dimensions: 18ft x 12ft\nCorridor Standard: 36 inches minimum\nDeposit Safe Mounting Limit: 25 lbs per hook.`,
    notionExportSchema: `Notion Hub: 6 Connected Databases (Furniture, Clearance, Maintenance, Hardware, Declutter, Reset)`,
    quickChecklist: [
      { id: 'ss-1', label: 'Complete 360-degree room clearance laser measurement', tag: 'Spatial' },
      { id: 'ss-2', label: 'Install tool-free vertical wall hanging hooks', tag: 'Hardware' },
      { id: 'ss-3', label: 'Set up 14-day quarantine box for excess kitchen wares', tag: 'Declutter' },
      { id: 'ss-4', label: 'Calibrate 3-layer lighting (2700K ambient, 3000K task)', tag: 'Aesthetic' }
    ],
    deliverableFiles: [
      { name: '01_SS-OS_Notion_Master_Hub_Access.pdf', format: 'PDF + Notion Link', size: '2.4 MB', description: 'One-click duplicate link with full 6 connected databases and onboarding video link' },
      { name: '02_Spatial_Clearance_Calculators_v2.xlsx', format: 'Google Sheets / Excel', size: '1.8 MB', description: 'Automated formulas for room layout, sofa scale, and kitchen flow' },
      { name: '03_SS-OS_120Page_Master_Guide.pdf', format: 'Interactive PDF', size: '18.6 MB', description: 'Complete 6-module architectural handbook with illustrations' },
      { name: '04_Printable_Blueprint_Cards_A4_Letter.pdf', format: 'Printable PDF', size: '4.1 MB', description: 'Quick-reference physical cards for desk, fridge, and moving day' }
    ],
    storeFaq: [
      { question: 'Do I need a paid Notion subscription?', answer: 'No! The SS-OS Notion workspace is 100% compatible with the standard free Notion account.' },
      { question: 'Can I use this if I rent my apartment?', answer: 'Yes, every single hack, mounting technique, and fixture swap is 100% deposit-safe and tool-free.' },
      { question: 'How quickly do I get access?', answer: 'Immediately upon purchase. You will receive an instant download page plus an email with all files.' }
    ],
    seoMeta: {
      metaTitle: 'The Small Space Operating System (SS-OS) | SmallSpaceHome',
      metaDescription: 'The definitive architectural master system for small-space living, furniture proportioning, and zero-damage renter upgrades.',
      keywords: ['small space operating system', 'studio apartment planner', 'small home notion template', 'renter friendly organization']
    },
    customerWelcomeEmail: `Subject: Your Small Space Operating System (SS-OS) Access Link\n\nWelcome to SmallSpaceHome!\n\nYour complete SS-OS Master Suite is ready for immediate download:\n\n1. Notion Workspace Duplicate: [Link]\n2. Spreadsheet Calculators: [Link]\n3. 120-Page Master PDF: [Link]\n\nStart by duplicating the Notion workspace and checking off Module 01 in the spatial assessment.\n\nWarmly,\nThe SmallSpaceHome Architecture Team`
  },

  'layout-furniture-planner': {
    id: 'layout-furniture-planner',
    rank: 2,
    title: 'Small-Space Layout & Furniture Proportion Planner',
    storeSlug: 'small-space-layout-furniture-proportion-planner',
    category: 'Furniture & Layouts',
    fourthwallCollection: 'Layout & Spatial Kits',
    priceCAD: 34,
    priceUSD: 25,
    compareAtPriceCAD: 68,
    format: 'Google Sheets + Excel + Printable PDF + Canva',
    deliverableBadge: 'Architectural Grid Kit',
    overviewSummary: 'Never buy the wrong-sized furniture again. Architectural grid kit, clearance calculator & visual zoning maps to prevent the "Two-Inch Error".',
    storeShortDescription: 'Design your exact room layout before spending a dollar on furniture. Automated walkway clearance formulas, 1/4" scale cutouts, and 12 pre-scaled studio templates.',
    storeFullListingMarkdown: `## STOP BUYING FURNITURE THAT IS TWO INCHES TOO BIG

A sofa that blocks a closet door or a dining chair that bangs into a radiator will ruin the flow of your apartment. The **Small-Space Layout & Furniture Proportion Planner** gives you architectural certainty before you order online or visit a showroom.

---

### WHAT'S INCLUDED:
- **Automated Walkway Clearance Spreadsheet** (Google Sheets & Excel) with built-in pass/fail traffic alerts.
- **Printable 1/4" Architectural Scale Grid** with 60+ pre-scaled cutout furniture blocks.
- **Canva Digital Floorplan Kit** with 12 plug-and-play layouts for studios, alcoves, and 1-bedrooms.
- **Multi-Functional Furniture Buying Matrix** detailing exact max depth thresholds for compact living.

---

### ZERO-RISK MEASUREMENT GUARANTEE:
Avoid the hassle of $150 return shipping fees on oversized sectionals and desks.`,
    primaryActionLabel: 'Launch Interactive Layout Simulator',
    interactiveToolType: 'furniture-grid',
    interactiveSections: [
      {
        id: 'clearance-engine',
        title: 'Architectural Clearance Threshold Calculator',
        description: 'Verify walkway clearance, sofa depth, and door swing arcs before purchasing furniture.',
        content: {
          rules: [
            { zone: 'Main Traffic Corridor', standard: '36" minimum', criticalMin: '30"', tip: 'Allows 2 people to pass comfortably' },
            { zone: 'Coffee Table to Sofa Edge', standard: '16" to 18"', criticalMin: '14"', tip: 'Permits leg stretching while reaching drinks' },
            { zone: 'Dining Chair Pullout', standard: '32" to 36"', criticalMin: '28"', tip: 'Prevents chair from banging baseboards' },
            { zone: 'Galley Kitchen Flow', standard: '42" to 48"', criticalMin: '36"', tip: 'Permits oven door and opposite drawer opening' }
          ]
        }
      }
    ],
    printableWorksheetMarkdown: `# Furniture Scale & Clearance Cheat Sheet\n\n- Main Corridor: >= 36"\n- Sofa to Coffee Table: 16"-18"\n- Dining Chair Pushback: 32"\n- Kitchen Galley: 42"`,
    notionExportSchema: `Furniture DB: [Item, Room, Width, Depth, Height, Weight, Clearance Req, Store Link]`,
    quickChecklist: [
      { id: 'lay-1', label: 'Measure entry door width and hallway turn radius before ordering sofa', tag: 'Logistics' },
      { id: 'lay-2', label: 'Tape outline on floor with blue painter’s tape for 48 hours', tag: 'Visual' },
      { id: 'lay-3', label: 'Verify 36" clearance between TV stand and coffee table', tag: 'Clearance' }
    ],
    deliverableFiles: [
      { name: '01_Walkway_Clearance_Calculator.xlsx', format: 'Excel & Google Sheets', size: '1.2 MB', description: 'Automated clearance verification sheet' },
      { name: '02_Printable_1-4_Scale_Grid_and_Cutouts.pdf', format: 'Printable PDF', size: '3.4 MB', description: '60+ furniture block cutouts on 1/4" scale' },
      { name: '03_Canva_Digital_Floorplan_Templates.pdf', format: 'Canva Link Guide', size: '850 KB', description: '12 drag-and-drop floorplan layout templates' }
    ],
    storeFaq: [
      { question: 'What scale are the printable cutouts?', answer: 'Standard architectural 1/4 inch = 1 foot scale, compatible with standard drafting rulers.' },
      { question: 'Can I customize dimensions for my unique apartment?', answer: 'Yes! The spreadsheet allows custom room dimensions down to the half-inch.' }
    ],
    seoMeta: {
      metaTitle: 'Small-Space Layout & Furniture Proportion Planner | SmallSpaceHome',
      metaDescription: 'Avoid buying oversized furniture. Architectural clearance calculator and 1/4 scale grid templates for small apartments.',
      keywords: ['small space floor plan', 'furniture proportion planner', 'walkway clearance calculator']
    },
    customerWelcomeEmail: `Subject: Download: Small-Space Layout & Furniture Proportion Planner\n\nThank you for choosing SmallSpaceHome!\n\nYour layout planner kit is available below:\n- Clearance Spreadsheet: [Link]\n- Printable Cutout Sheet: [Link]\n- Canva Floorplan Templates: [Link]\n\nHappy planning!`
  },

  'moving-in-blueprint': {
    id: 'moving-in-blueprint',
    rank: 3,
    title: 'The Small Space Moving-In Blueprint & Transition OS',
    storeSlug: 'small-space-moving-in-blueprint-transition-os',
    category: 'Moving & Transitioning',
    fourthwallCollection: 'Transition Toolkits',
    priceCAD: 29,
    priceUSD: 22,
    compareAtPriceCAD: 58,
    format: 'Notion Workspace + Interactive PDF',
    deliverableBadge: 'Transition System',
    overviewSummary: 'The stress-free system to downsize, pack, book elevators, and unpack a small home in 48 hours without clutter towers.',
    storeShortDescription: 'Downsize, pack, and unpack into a compact apartment in 48 hours flat. Includes First-Night Survival Capsule inventory, elevator booking checklists, and QR box system.',
    storeFullListingMarkdown: `## UNPACK YOUR ENTIRE APARTMENT IN 48 HOURS WITHOUT CHAOS

Moving into a small apartment requires military precision. If boxes pile up in your 450 sq ft living room, you lose all walking space on day one.

---

### WHAT'S INCLUDED:
- **8-Week Micro-Transition Roadmap** — Never leave elevator bookings or packing until the final week.
- **First-Night Survival Capsule Inventory** — The exact items to keep in Box #01 for instant sleep and shower calm.
- **QR Box Inventory Notion Database** — Scan a QR label on any taped box to see its exact contents on your phone.
- **Condo Elevator Booking & COI Guide** — Step-by-step insurance request templates for property managers.`,
    primaryActionLabel: 'Launch 48-Hour Transition OS',
    interactiveToolType: 'moving-logistics',
    interactiveSections: [
      {
        id: 'countdown-8week',
        title: '8-Week Micro-Transition Timeline',
        description: 'Step-by-step countdown to eliminate move-day panic.',
        content: [
          { phase: '8 Weeks Out', task: 'Book elevator service elevator & request COI from condo management' },
          { phase: '6 Weeks Out', task: 'Audit large furniture against new floorplan; list non-fitting items for sale' },
          { phase: '4 Weeks Out', task: 'Order uniform small & medium boxes; pack off-season wardrobe & decor' },
          { phase: '2 Weeks Out', task: 'Pack kitchen down to 2-plate capsule kit; notify internet & hydro' },
          { phase: 'Move Day (Hour 0-6)', task: 'Load essential Survival Capsule Box into personal vehicle trunk' },
          { phase: 'Hour 6-48 Unpack', task: 'Execute room-by-room rapid unpacking sequence (Bed -> Bath -> Kitchen)' }
        ]
      }
    ],
    printableWorksheetMarkdown: `# Moving-In Survival Capsule & QR Box Master\n\nBox 01: First-Night Bed & Bath Capsule\nBox 02: Essential Kitchen Cookware\nBox 03: Work & Tech Hub`,
    notionExportSchema: `Moving DB: [Box Number, Target Room, Contents, Fragile, Priority (High/Med/Low), Location]`,
    quickChecklist: [
      { id: 'mov-1', label: 'Submit Elevator Booking & Certificate of Insurance (COI)', tag: 'Permit' },
      { id: 'mov-2', label: 'Pack Box #01 Survival Capsule with bed linens & kettle', tag: 'Survival' },
      { id: 'mov-3', label: 'Color-code box labels by apartment zone (Green: Kitchen, Blue: Bed)', tag: 'Label' }
    ],
    deliverableFiles: [
      { name: '01_Moving_Transition_Notion_Workspace.pdf', format: 'Notion Duplicate Link', size: '1.1 MB', description: 'Connected moving planner with QR box inventory' },
      { name: '02_48Hour_Unpack_Master_Guide.pdf', format: 'Interactive PDF', size: '4.8 MB', description: 'Phased room-by-room unpacking manual' },
      { name: '03_Printable_ColorCoded_Box_Labels.pdf', format: 'Printable PDF', size: '2.1 MB', description: 'Room-by-room colored label sheets' }
    ],
    storeFaq: [
      { question: 'How do the QR codes work?', answer: 'You can generate instant free QR codes linking each physical box to its digital Notion inventory row.' }
    ],
    seoMeta: {
      metaTitle: 'Small Space Moving-In Blueprint & Transition OS | SmallSpaceHome',
      metaDescription: 'Downsize and unpack your small apartment in 48 hours without clutter towers.',
      keywords: ['small apartment moving guide', '48 hour unpack plan', 'moving notion template']
    },
    customerWelcomeEmail: `Subject: Moving In Blueprint Download Link\n\nYour 48-Hour Moving In OS is ready. Access your Notion template and printable labels here: [Link]`
  },

  'renter-upgrade-manual': {
    id: 'renter-upgrade-manual',
    rank: 4,
    title: 'The Damage-Free Renter Upgrade Manual & Action Binder',
    storeSlug: 'damage-free-renter-upgrade-manual-action-binder',
    category: 'Renter-Friendly Home Improvement',
    fourthwallCollection: 'Renter Toolkits',
    priceCAD: 19,
    priceUSD: 14,
    compareAtPriceCAD: 38,
    format: 'Interactive PDF + Printables',
    deliverableBadge: 'Deposit-Safe Recipes',
    overviewSummary: '50+ curated, designer-tested, zero-damage rental hacks with exact tool-free hardware links, weight load formulas, and move-out restore guides.',
    storeShortDescription: '50+ designer-approved, 100% zero-damage rental upgrades with tool-free hardware links, lighting swaps, and 100% security deposit guarantee restore guides.',
    storeFullListingMarkdown: `## UPGRADE YOUR RENTAL WITHOUT LOSING A SINGLE DOLLAR OF YOUR DEPOSIT

Say goodbye to builder-grade boob lights, dated brass handles, and yellow lighting. The **Damage-Free Renter Upgrade Manual** teaches you how to upgrade your rental to boutique standard with zero permanent modifications.

---

### INCLUDED UPGRADES:
- **Kitchen Transformations**: Matte black bar pulls, heat-resistant peel-and-stick backsplashes, and under-cabinet LED pucks.
- **Bathroom Refreshes**: High-pressure rainfall showerheads and damage-free floating shelves.
- **Lighting Formula**: Tool-free plug-in wall sconces with paintable cord covers.
- **Full Move-Out Reversal Checklist**: Restore every fixture in under 2 hours during lease end.`,
    primaryActionLabel: 'Open Renter Upgrade Manual',
    interactiveToolType: 'renter-upgrades',
    interactiveSections: [
      {
        id: 'hardware-swaps',
        title: 'Tool-Free Hardware & Fixture Upgrade Recipes',
        description: 'Instant visual transformations that reverse in under 5 minutes upon move-out.',
        content: [
          { item: 'Modern Matte Black Cabinet Bar Pulls', method: 'Unscrew existing builder-grade pulls; store originals in labeled ziploc bag. Swap in standard 3" center pulls.', timeToRestore: '8 mins' },
          { item: 'Plug-In Wall Sconces with Cord Covers', method: 'Mount with OOK monkey hooks or Command heavy-duty picture strips; run paintable cord covers down drywall.', timeToRestore: '4 mins' }
        ]
      }
    ],
    printableWorksheetMarkdown: `# Renter Upgrade & Hardware Reversal Log\n\nFixture 01: Kitchen Pulls (Stored: Box 4)\nFixture 02: Brass Pendant (Stored: Closet Shelf)`,
    notionExportSchema: `Hardware DB: [Fixture Name, Original Location, Storage Bin ID, Replacement Cost, Move-out Status]`,
    quickChecklist: [
      { id: 'ren-1', label: 'Store all original landlord screws and knobs in labeled Ziploc', tag: 'Deposit' },
      { id: 'ren-2', label: 'Use 2700K warm LED bulbs instead of harsh 6000K overhead lights', tag: 'Lighting' },
      { id: 'ren-3', label: 'Test adhesive on small hidden wall section for 24 hours', tag: 'Safety' }
    ],
    deliverableFiles: [
      { name: '01_Renter_Upgrade_Master_Manual.pdf', format: 'Interactive PDF', size: '9.2 MB', description: '50+ step-by-step DIY rental recipes with hardware links' },
      { name: '02_MoveOut_Deposit_Guarantee_Checklist.pdf', format: 'Printable PDF', size: '1.5 MB', description: 'Reversal and spackle touch-up guide' }
    ],
    storeFaq: [
      { question: 'Will this damage drywall or paint?', answer: 'No. Every method has been tested on standard rental drywall with zero peeling when reversed properly.' }
    ],
    seoMeta: {
      metaTitle: 'The Damage-Free Renter Upgrade Manual | SmallSpaceHome',
      metaDescription: '50+ zero-damage rental upgrade recipes for modern apartments without losing your deposit.',
      keywords: ['damage free renter upgrades', 'renter friendly home decor', 'no drill apartment hacks']
    },
    customerWelcomeEmail: `Subject: Download: The Damage-Free Renter Upgrade Manual\n\nYour manual is ready: [Link]\n\nStart with the Kitchen Cabinet Hardware swap on Page 14!`
  },

  'declutter-reset-protocol': {
    id: 'declutter-reset-protocol',
    rank: 5,
    title: 'The 30-Day Small Home Declutter & Spatial Reset Protocol',
    storeSlug: '30-day-small-home-declutter-spatial-reset-protocol',
    category: 'Decluttering & Organization',
    fourthwallCollection: 'Daily Systems',
    priceCAD: 27,
    priceUSD: 20,
    compareAtPriceCAD: 54,
    format: 'Interactive PDF + Printables + Notion Calendar',
    deliverableBadge: '30-Day Protocol',
    overviewSummary: 'A systematic room-by-room blueprint to eliminate 40% of visual clutter without emotional exhaustion, using the Real Estate Tax formula.',
    storeShortDescription: 'Eliminate 40% of physical clutter in 30 days. Uses the Real Estate Rent Tax formula and 14-Day Spatial Quarantine Box to overcome emotional hesitation.',
    storeFullListingMarkdown: `## ELIMINATE 40% OF YOUR CLUTTER WITHOUT EMOTIONAL BURNOUT

In a small apartment, every single item occupies expensive square footage. If you pay $2,000/mo for 500 sq ft, each square foot costs you $48/year.

---

### THE 4-WEEK DECLUTTER ENGINE:
- **Week 1: Flat Surface Zero** — Kitchen countertops, entryway drop zone, and bedside tables.
- **Week 2: Hidden Vertical Volumes** — Wardrobe closets, under-bed storage, and upper cabinets.
- **Week 3: The Sentimental & Paper Filter** — Tax paperwork, old cables, duplicate kitchenware.
- **Week 4: Spatial Lockdown & Reset Routine** — Establishing the 1-In-1-Out rule.`,
    primaryActionLabel: 'Launch 30-Day Declutter Calendar',
    interactiveToolType: 'declutter-protocol',
    interactiveSections: [
      {
        id: 'rent-tax-calc',
        title: 'The Real Estate Rent Tax Calculation Formula',
        description: 'Understand the literal financial cost of keeping unused clutter in a small apartment.',
        content: {
          explanation: 'If your monthly rent is $2,000 for 500 sq ft, every square foot costs you $4.00 per month ($48/year).',
          heuristic: 'If an item does not provide $50/year in joy or utility, it is costing you more to store than it is worth.'
        }
      }
    ],
    printableWorksheetMarkdown: `# 30-Day Declutter Tracker\n\n- Total Sq Ft Liberated: __ sq ft\n- Annual Rent Tax Saved: $__\n- Quarantine Box Exit Date: __`,
    notionExportSchema: `Declutter DB: [Item, Category, Rent Tax Cost, Action (Keep/Sell/Donate), Date Completed]`,
    quickChecklist: [
      { id: 'dec-1', label: 'Clear 100% of flat kitchen counters for 24 hours', tag: 'Visual' },
      { id: 'dec-2', label: 'Fill 14-Day Quarantine Box #01 with duplicate mugs and cords', tag: 'Action' },
      { id: 'dec-3', label: 'Purge bathroom medicine cabinet of expired items', tag: 'Health' }
    ],
    deliverableFiles: [
      { name: '01_30Day_Declutter_Protocol_Workbook.pdf', format: 'Interactive PDF', size: '5.6 MB', description: 'Daily action calendar with milestone milestones' },
      { name: '02_Declutter_Tracker_Notion_Database.pdf', format: 'Notion Link', size: '920 KB', description: 'Item inventory with rent tax calculator' }
    ],
    storeFaq: [
      { question: 'How much time does this take each day?', answer: 'Just 15 to 20 focused minutes per day following the daily prompts.' }
    ],
    seoMeta: {
      metaTitle: '30-Day Small Home Declutter Protocol | SmallSpaceHome',
      metaDescription: 'Eliminate 40% of visual clutter in 30 days with the Rent Tax declutter formula.',
      keywords: ['small space decluttering', '30 day declutter challenge', 'minimalist apartment organization']
    },
    customerWelcomeEmail: `Subject: Your 30-Day Declutter Protocol is Ready\n\nDownload your 30-day calendar here: [Link]`
  },

  'vertical-storage-kit': {
    id: 'vertical-storage-kit',
    rank: 6,
    title: 'Apartment Storage Audit & Vertical Optimization Kit',
    storeSlug: 'apartment-storage-audit-vertical-optimization-kit',
    category: 'Storage & Organization',
    fourthwallCollection: 'Storage Solutions',
    priceCAD: 17,
    priceUSD: 13,
    compareAtPriceCAD: 34,
    format: 'Interactive PDF + Printables',
    deliverableBadge: 'Vertical Blueprint',
    overviewSummary: 'Unlock 35% more usable storage using the vertical envelope of your walls, doors, and dead zones without sacrificing floor space.',
    storeShortDescription: 'Unlock 35% more storage without taking up an inch of floor space. 15 architectural dead-zone blueprints for above cabinets, behind doors, and narrow gaps.',
    storeFullListingMarkdown: `## EXPAND YOUR APARTMENT'S STORAGE CAPACITY BY 35%

Most small apartments waste huge volumes of vertical space above 6 feet. The **Vertical Optimization Kit** unlocks high-capacity vertical storage zones using renter-safe mechanisms.

---

### INCLUDED DEAD-ZONE BLUEPRINTS:
- Above upper kitchen cabinets (Woven basket storage systems).
- Behind bedroom and bathroom solid doors (Tiered chrome hanging racks).
- Under-sink P-trap bypass shelves.
- 6-inch narrow gaps beside refrigerators (Slide-out slim rolling pantries).`,
    primaryActionLabel: 'Launch Storage Audit Calculator',
    interactiveToolType: 'vertical-storage',
    interactiveSections: [
      {
        id: 'dead-zone-blueprints',
        title: '15 Architectural Dead-Zone Blueprints',
        description: 'High-leverage vertical zones ignored by 90% of small space dwellers.',
        content: [
          { zone: 'Above Kitchen Upper Cabinets', depth: '12"–14"', bestUse: 'Matching woven baskets for seasonal baking pans' },
          { zone: 'Behind Bathroom Doors', depth: '4"–6"', bestUse: 'Heavy-duty over-the-door tiered racks' }
        ]
      }
    ],
    printableWorksheetMarkdown: `# Vertical Dead-Zone Inventory\n\nZone 01: Above Fridge (Volume: 4.2 cu ft)\nZone 02: Under-Bed Vault (Volume: 18.5 cu ft)`,
    notionExportSchema: `Vertical DB: [Zone Name, Height Band (Ft), Usable Volume (Cu Ft), Renter Hardware, Items Stored]`,
    quickChecklist: [
      { id: 'ver-1', label: 'Measure vertical gap between top of kitchen cabinets and ceiling', tag: 'Audit' },
      { id: 'ver-2', label: 'Install expandable 2-tier shelf around bathroom P-trap pipe', tag: 'Plumbing' },
      { id: 'ver-3', label: 'Slide rolling slim cart into 6-inch refrigerator gap', tag: 'Pantry' }
    ],
    deliverableFiles: [
      { name: '01_Vertical_Storage_Optimization_Kit.pdf', format: 'Interactive PDF', size: '4.2 MB', description: '15 dead-zone dimensional diagrams' }
    ],
    storeFaq: [
      { question: 'Do I need power tools?', answer: 'No! All vertical solutions use tension rods, over-the-door hooks, and heavy-duty adhesive anchors.' }
    ],
    seoMeta: {
      metaTitle: 'Apartment Storage Audit & Vertical Optimization Kit | SmallSpaceHome',
      metaDescription: 'Unlock 35% more storage in small apartments using architectural vertical dead zones.',
      keywords: ['vertical storage small apartment', 'over the door storage', 'cabinet dead space']
    },
    customerWelcomeEmail: `Subject: Your Vertical Storage Kit is Ready: [Link]`
  },

  'studio-zoning-system': {
    id: 'studio-zoning-system',
    rank: 7,
    title: 'Studio & Multi-Functional Room Zoning System',
    storeSlug: 'studio-multi-functional-room-zoning-system',
    category: 'Studio Apartment Living',
    fourthwallCollection: 'Layout & Spatial Kits',
    priceCAD: 27,
    priceUSD: 20,
    compareAtPriceCAD: 54,
    format: 'Interactive PDF + Canva Templates',
    deliverableBadge: 'Zoning Architect',
    overviewSummary: 'Create the psychological feeling of a 3-room home inside a single open studio footprint using sensory dividers, lighting, and rug ratios.',
    storeShortDescription: 'Make your studio apartment feel like a 3-room home. Sensory zoning rules, rug proportion guides, and the 5:00 PM work-to-rest transition protocol.',
    storeFullListingMarkdown: `## CREATE 3 DISTINCT ROOMS IN A SINGLE STUDIO FOOTPRINT

When you sleep, work, and eat in the same room, your brain never fully relaxes. The **Studio Zoning System** uses psychological and optical boundaries to separate your life without building walls.

---

### CORE ZONING TOOLS:
- **The Rug Island Rule**: Exact dimensions to anchor living vs bedroom zones.
- **Circadian Light Zoning**: 5000K daylight work lighting transitioning to 2200K evening calm.
- **The 5:00 PM Work-to-Rest Stowaway Routine**: Making your desk vanish when the workday ends.`,
    primaryActionLabel: 'Launch Studio Zoning Engine',
    interactiveToolType: 'studio-zoning',
    interactiveSections: [
      {
        id: 'sensory-boundaries',
        title: 'The 3 Sensory Micro-Zoning Rules',
        description: 'Define psychological rooms without building physical walls.',
        content: [
          { rule: 'The Rug Island Rule', detail: 'Living room rug MUST seat front furniture legs.' },
          { rule: 'Circadian Light Switching', detail: 'Crisp task lighting strictly during 9-5 work hours.' }
        ]
      }
    ],
    printableWorksheetMarkdown: `# Studio Micro-Zoning Blueprint\n\nZone 1: Sleep Sanctuary (Rug: 5x8)\nZone 2: Living Lounge (Rug: 6x9)\nZone 3: Work Station (Concealed 5 PM)`,
    notionExportSchema: `Zoning DB: [Micro-Zone, Primary Function, Lighting Kelvin, Divider Tool, Transition Trigger]`,
    quickChecklist: [
      { id: 'zon-1', label: 'Place front legs of sofa on living room rug to anchor zone', tag: 'Visual' },
      { id: 'zon-2', label: 'Set timer for 5:00 PM laptop desk stowaway routine', tag: 'Psychology' },
      { id: 'zon-3', label: 'Position open-shelf bookcase perpendicular to bed for privacy', tag: 'Dividers' }
    ],
    deliverableFiles: [
      { name: '01_Studio_Zoning_Master_Guide.pdf', format: 'Interactive PDF', size: '5.1 MB', description: 'Complete studio layout and acoustic separation guide' }
    ],
    storeFaq: [
      { question: 'Will this work for micro-studios under 350 sq ft?', answer: 'Yes! Specially tested layouts for units as small as 280 sq ft are included.' }
    ],
    seoMeta: {
      metaTitle: 'Studio & Multi-Functional Room Zoning System | SmallSpaceHome',
      metaDescription: 'How to divide a studio apartment into bedroom, living room, and office zones without walls.',
      keywords: ['studio apartment zoning', 'room dividers small space', 'studio layout ideas']
    },
    customerWelcomeEmail: `Subject: Download: Studio & Multi-Functional Room Zoning System: [Link]`
  },

  'first-apartment-budget-inventory': {
    id: 'first-apartment-budget-inventory',
    rank: 8,
    title: 'First-Apartment Essential Inventory & Smart Budget Planner',
    storeSlug: 'first-apartment-essential-inventory-smart-budget-planner',
    category: 'Budgeting & First Apartment',
    fourthwallCollection: 'Budget & Financial',
    priceCAD: 24,
    priceUSD: 18,
    compareAtPriceCAD: 48,
    format: 'Google Sheets + Excel + PDF',
    deliverableBadge: 'Financial Starter Kit',
    overviewSummary: 'Never overspend or buy duplicates. The smart financial calculator & itemized starter registry categorized by move-in urgency.',
    storeShortDescription: 'Furnish your first small apartment for $1,000–$2,500 without debt or junk. Automated move-in expense calculator, hidden cost buffers, and week-by-week starter registry.',
    storeFullListingMarkdown: `## FURNISH YOUR FIRST APARTMENT WITHIN A REALISTIC BUDGET

Moving into your first apartment can drain your savings if you buy unnecessary gadgets before move-in day.

---

### INCLUDED FINANCIAL TOOLS:
- **3 Budget Allocation Models**: Minimalist ($1,000), Balanced Comfort ($2,400), Sanctuary ($4,200).
- **The 6 Hidden Move-In Costs**: Elevator deposits, hydro connection fees, renter insurance buffers.
- **Urgency Matrix (Week 1 vs Month 3)**: Know exactly what to buy on Day 1 vs what can wait.`,
    primaryActionLabel: 'Launch Starter Budget Calculator',
    interactiveToolType: 'starter-budget',
    interactiveSections: [
      {
        id: 'tier-allocations',
        title: 'First-Apartment Starter Budget Tiers',
        description: 'Realistic starter budget allocations for furnishing a 500 sq ft apartment.',
        content: [
          { tier: 'Minimalist Essentials ($800–$1,200)', focus: 'Mattress in a box, basic bed frame, 2-plate kitchen capsule' },
          { tier: 'Balanced Comfort ($1,800–$2,500)', focus: 'Solid new sofa, ergonomic hybrid desk, quality cookware' }
        ]
      }
    ],
    printableWorksheetMarkdown: `# First Apartment Budget & Expense Sheet\n\nTarget Budget: $2,500 CAD\nAllocated: Furniture (55%), Kitchen (20%), Bath/Bed (15%), Tools (10%)`,
    notionExportSchema: `Budget DB: [Item, Category, Urgency (Week 1/Month 1), Est Cost, Actual Cost, Store, Purchased]`,
    quickChecklist: [
      { id: 'bud-1', label: 'Buy emergency plunger and basic toolkit BEFORE move-in day', tag: 'Emergency' },
      { id: 'bud-2', label: 'Calculate total security deposit & elevator booking fee buffer', tag: 'Finance' },
      { id: 'bud-3', label: 'Stick to Week 1 Essentials list before buying decorative items', tag: 'Discipline' }
    ],
    deliverableFiles: [
      { name: '01_First_Apartment_Budget_Calculator.xlsx', format: 'Excel & Google Sheets', size: '1.4 MB', description: 'Automated furniture expense allocator' },
      { name: '02_First_Apartment_Registry_Checklist.pdf', format: 'Printable PDF', size: '2.3 MB', description: 'Itemized checklist by urgency tier' }
    ],
    storeFaq: [
      { question: 'Does this calculate taxes and shipping?', answer: 'Yes, formulas automatically include customizable local tax and freight buffers.' }
    ],
    seoMeta: {
      metaTitle: 'First-Apartment Essential Inventory & Smart Budget Planner | SmallSpaceHome',
      metaDescription: 'Smart financial planner and itemized starter registry for your first small apartment.',
      keywords: ['first apartment checklist', 'apartment starter budget', 'furnishing small apartment']
    },
    customerWelcomeEmail: `Subject: Your First-Apartment Budget Planner: [Link]`
  },

  'cleaning-micro-reset-system': {
    id: 'cleaning-micro-reset-system',
    rank: 9,
    title: 'Small Home Cleaning Rhythm & Micro-Reset Routine System',
    storeSlug: 'small-home-cleaning-rhythm-micro-reset-routine-system',
    category: 'Cleaning & Maintenance',
    fourthwallCollection: 'Daily Systems',
    priceCAD: 15,
    priceUSD: 11,
    compareAtPriceCAD: 30,
    format: 'Interactive PDF + Printables',
    deliverableBadge: '12-Min Routine Cards',
    overviewSummary: 'Keep a tight home perpetually guest-ready in 12 minutes a day without weekend-long cleaning marathons.',
    storeShortDescription: 'Keep your small home spotless in 12 minutes a day. The 4-bottle universal cleaning caddy, 5-minute micro-zone schedule, and nightly closing shift timer.',
    storeFullListingMarkdown: `## NO MORE SPENDING SATURDAY MORNINGS CLEANING YOUR APARTMENT

Small homes get cluttered and dusty quickly, but they can also be cleaned in minutes with a systematic routine.

---

### INCLUDED PROTOCOLS:
- **12-Minute Closing Shift**: 3 choreographed 4-minute resets before sleep (Kitchen Counter Zero, Surface Reset, Entryway Align).
- **The 4-Bottle Universal Caddy**: Replace 15 plastic bottles with 4 non-toxic, highly effective cleaning formulas.
- **Weekly 5-Minute Micro-Zone Rotation**: Monday Kitchen, Tuesday Bath, Wednesday Floors, Thursday Linens, Friday Launchpad.`,
    primaryActionLabel: 'Launch 12-Minute Reset Timer',
    interactiveToolType: 'cleaning-rhythm',
    interactiveSections: [
      {
        id: 'four-bottle-caddy',
        title: 'The 4-Bottle Universal Cleaning Caddy Formula',
        description: 'Eliminate 15 bulky plastic bottles cluttering under-sink cabinets.',
        content: [
          { bottle: '1. All-Surface Castile Soap Spray', use: 'Counters, dining table, baseboards' },
          { bottle: '2. 50/50 White Vinegar & Water with Citrus', use: 'Windows, mirrors, chrome faucets' }
        ]
      }
    ],
    printableWorksheetMarkdown: `# 12-Minute Closing Shift Protocol\n\n00:00 - 04:00: Kitchen Counter Zero\n04:00 - 08:00: Living Room Blanket & Cable Tuck\n08:00 - 12:00: Entryway Shoe Align & Launchpad`,
    notionExportSchema: `Cleaning DB: [Zone, Frequency, Tool Required, Last Completed, Next Due, Assigned]`,
    quickChecklist: [
      { id: 'cle-1', label: 'Run 12-Minute Closing Shift timer every evening before bed', tag: 'Daily' },
      { id: 'cle-2', label: 'Consolidate cleaning supplies into single grab-and-go caddy', tag: 'Caddy' },
      { id: 'cle-3', label: 'Squeegee shower glass after every shower to prevent soap scum', tag: 'Bathroom' }
    ],
    deliverableFiles: [
      { name: '01_12Min_Cleaning_Rhythm_Cards.pdf', format: 'Printable Cards', size: '3.1 MB', description: 'Laminatable quick-routine cards for fridge and mirror' }
    ],
    storeFaq: [
      { question: 'Are the cleaning formulas eco-friendly?', answer: 'Yes! 100% natural, non-toxic recipes using Castile soap, vinegar, and baking soda.' }
    ],
    seoMeta: {
      metaTitle: 'Small Home Cleaning Rhythm & Micro-Reset Routine System | SmallSpaceHome',
      metaDescription: 'Keep your small apartment clean in 12 minutes a day with the 4-bottle caddy system.',
      keywords: ['small apartment cleaning routine', '12 minute reset routine', 'minimalist cleaning caddy']
    },
    customerWelcomeEmail: `Subject: Download: Small Home Cleaning Rhythm System: [Link]`
  },

  'renter-maintenance-vault': {
    id: 'renter-maintenance-vault',
    rank: 10,
    title: 'Apartment Maintenance & Landlord Communication Vault',
    storeSlug: 'apartment-maintenance-landlord-communication-vault',
    category: 'Renter Living & Rights',
    fourthwallCollection: 'Renter Toolkits',
    priceCAD: 19,
    priceUSD: 14,
    compareAtPriceCAD: 38,
    format: 'Notion Workspace + PDF Scripts',
    deliverableBadge: 'Legal-Grade Vault',
    overviewSummary: 'Document repairs, protect your deposit, and manage landlord communication with professional legal-grade clarity and pre-written scripts.',
    storeShortDescription: 'Protect your deposit and get repairs resolved fast. Pre-written legal-grade email templates, date-stamped photo audit protocol, and digital lease vault.',
    storeFullListingMarkdown: `## GET REPAIRS FIXED QUICKLY AND GUARANTEE YOUR DEPOSIT RETURN

When your heat fails in January or a pipe leaks under the sink, sending an emotional text message causes delays. Use legally grounded, professional communication templates.

---

### INCLUDED TOOLS:
- **12 Pre-Written Landlord Formal Scripts**: Emergency heating failure, mold remediation, illegal entry notice, deposit return demand letters.
- **Move-In Date-Stamped Photo Audit Protocol**: 40 essential photos to document day 1 condition.
- **Notion Maintenance Ticket Hub**: Track repair requests, landlord responses, and technician appointments.`,
    primaryActionLabel: 'Open Landlord Communication Vault',
    interactiveToolType: 'landlord-vault',
    interactiveSections: [
      {
        id: 'script-templates',
        title: 'Pre-Written Landlord Formal Email Templates',
        description: 'Polite, firm, legally grounded scripts that get immediate maintenance action.',
        content: [
          {
            situation: 'Heating Failure / Urgent Winter Repair',
            subject: 'URGENT: Heating Malfunction at Unit [Unit Number]',
            body: 'Dear [Landlord Name],\n\nI am writing to notify you that the primary heating unit in Unit [Unit Number] ceased functioning.'
          }
        ]
      }
    ],
    printableWorksheetMarkdown: `# Landlord Repair Ticket & Photo Audit Log\n\nTicket #01: Leaking Faucet (Notified: Oct 12, Resolved: Oct 14)\nTicket #02: Window Draft Seal (Status: Pending Landlord Review)`,
    notionExportSchema: `Maintenance Vault DB: [Ticket ID, Issue, Date Logged, Photos Attached, Landlord Response, Status]`,
    quickChecklist: [
      { id: 'mnt-1', label: 'Take 40+ date-stamped move-in photos before placing any furniture', tag: 'Audit' },
      { id: 'mnt-2', label: 'Send repair requests in written email format to create paper trail', tag: 'Legal' },
      { id: 'mnt-3', label: 'Keep copy of signed lease and addendums in digital cloud backup', tag: 'Backup' }
    ],
    deliverableFiles: [
      { name: '01_Landlord_Communication_Vault_Notion.pdf', format: 'Notion Workspace', size: '1.2 MB', description: 'Maintenance ticketing and document hub' },
      { name: '02_12_Legal_Grade_Email_Templates.pdf', format: 'Printable PDF', size: '2.5 MB', description: 'Copy-paste formal tenant letters' }
    ],
    storeFaq: [
      { question: 'Does this apply to both Canada and the US?', answer: 'Yes, templates follow universal North American residential tenancy principles.' }
    ],
    seoMeta: {
      metaTitle: 'Apartment Maintenance & Landlord Communication Vault | SmallSpaceHome',
      metaDescription: 'Pre-written landlord email templates, photo audit checklist, and repair log for renters.',
      keywords: ['landlord repair email template', 'tenant deposit protection', 'apartment maintenance log']
    },
    customerWelcomeEmail: `Subject: Download: Apartment Maintenance & Landlord Vault: [Link]`
  },

  'tiny-kitchen-pantry-os': {
    id: 'tiny-kitchen-pantry-os',
    rank: 11,
    title: 'Tiny Kitchen & Pantry Space Optimization Engine',
    storeSlug: 'tiny-kitchen-pantry-space-optimization-engine',
    category: 'Kitchen & Cooking',
    fourthwallCollection: 'Storage Solutions',
    priceCAD: 22,
    priceUSD: 16,
    compareAtPriceCAD: 44,
    format: 'Google Sheets + Notion + Printable Guide',
    deliverableBadge: 'Culinary OS',
    overviewSummary: 'Maximize 18 inches of counter space and narrow cabinets with capsule cookware lists, decanting formulas, and 3-step meal prep staging.',
    storeShortDescription: 'Cook delicious meals with just 18 inches of counter space. Capsule cookware audit, decanting jar calculator, and single-skillet staging guides.',
    storeFullListingMarkdown: `## COOK LIKE A CHEF WITH 18 INCHES OF COUNTER SPACE

Tiny galley kitchens become chaotic when filled with single-use gadgets and mismatched spice jars. The **Tiny Kitchen & Pantry OS** engineers your culinary workspace.

---

### INCLUDED MODULES:
- **The 8-Piece Essential Cookware Capsule**: Eliminate 20 clutter pans with 8 high-performance pieces.
- **Pantry Decanting Dimension Matrix**: Exact airtight jar volumes to fit standard 10-inch cabinet shelves.
- **Countertop Staging Protocol**: Keep cutting board, knife block, and trash bowl in a 14" operational triangle.`,
    primaryActionLabel: 'Launch Kitchen Staging Engine',
    interactiveToolType: 'pantry-cooking',
    interactiveSections: [
      {
        id: 'capsule-cookware',
        title: 'The 8-Piece Minimalist Cookware Capsule',
        description: 'Covers 99% of cooking tasks without overflowing drawers.',
        content: ['10-inch Stainless Steel Skillet', '3.5-qt Enameled Cast Iron Dutch Oven', '2-qt Saucepan with lid', '8-inch Chef Knife', 'Large Acacia Cutting Board']
      }
    ],
    printableWorksheetMarkdown: `# Kitchen Decanting & Spices Inventory\n\nJar Tier A (Grains): 1.5L Jars\nJar Tier B (Spices): 120ml Magnetic Tins`,
    notionExportSchema: `Pantry DB: [Item, Category, Jar Volume, Expiry, Restock Level]`,
    quickChecklist: [
      { id: 'kit-1', label: 'Eliminate duplicate skillets and single-use plastic gadgets', tag: 'Purge' },
      { id: 'kit-2', label: 'Install magnetic knife bar above backsplash', tag: 'Vertical' }
    ],
    deliverableFiles: [
      { name: '01_Tiny_Kitchen_Pantry_Optimization_Guide.pdf', format: 'PDF Guide', size: '4.7 MB', description: 'Kitchen layout, decanting, and meal prep workflow' }
    ],
    storeFaq: [
      { question: 'Will this fit rental cabinets?', answer: 'Yes! Tailored to standard 11" and 12" rental depth cabinets.' }
    ],
    seoMeta: {
      metaTitle: 'Tiny Kitchen & Pantry Space Optimization Engine | SmallSpaceHome',
      metaDescription: 'How to organize and cook in a small galley kitchen with minimal counter space.',
      keywords: ['tiny kitchen organization', 'pantry decanting guide', 'small apartment cooking']
    },
    customerWelcomeEmail: `Subject: Download: Tiny Kitchen & Pantry Optimization OS: [Link]`
  },

  'capsule-wardrobe-closet-builder': {
    id: 'capsule-wardrobe-closet-builder',
    rank: 12,
    title: 'Small-Closet Capsule Wardrobe & Storage Architect',
    storeSlug: 'small-closet-capsule-wardrobe-storage-architect',
    category: 'Wardrobe & Clothing',
    fourthwallCollection: 'Daily Systems',
    priceCAD: 24,
    priceUSD: 18,
    compareAtPriceCAD: 48,
    format: 'Notion Wardrobe Hub + Printable Style Matrix',
    deliverableBadge: 'Wardrobe Architect',
    overviewSummary: 'Fit a complete year-round wardrobe in a 3-foot closet using tiered hanging rods, slim velvet hangers, and a 36-piece seasonal capsule matrix.',
    storeShortDescription: 'Fit your entire year-round wardrobe in a single 3-foot closet. Tiered double-hanging formulas, velvet hanger standards, and 36-piece capsule matrix.',
    storeFullListingMarkdown: `## FIT A FULL STYLISH WARDROBE INTO A 3-FOOT RENTAL CLOSET

When your closet is packed tight, getting dressed in the morning is stressful and clothes get wrinkled.

---

### INCLUDED ARCHITECTURE:
- **The Double-Hanging Drop Rod Formula**: Instantly double hanging volume without drilling holes.
- **36-Piece Seasonal Capsule Matrix**: Create 80+ stylish outfits from just 36 quality items.
- **Vertical Shoe & Accessory Grid**: Zero floor footprint shoe storage systems.`,
    primaryActionLabel: 'Open Capsule Wardrobe Hub',
    interactiveToolType: 'capsule-wardrobe',
    interactiveSections: [
      {
        id: 'capsule-formula',
        title: 'The 36-Piece Core Capsule Formula',
        description: '9 Tops, 6 Bottoms, 4 Layers, 3 Dresses/Suits, 5 Shoes, 9 Accessories.',
        content: { totalPieces: 36, possibleOutfits: 84 }
      }
    ],
    printableWorksheetMarkdown: `# 36-Piece Capsule Wardrobe Matrix\n\n- Outerwear: 3 pieces\n- Tops: 9 pieces\n- Bottoms: 6 pieces\n- Footwear: 5 pairs`,
    notionExportSchema: `Closet DB: [Garment, Season, Color Palette, Wear Count, Storage Location]`,
    quickChecklist: [
      { id: 'cl-1', label: 'Swap all bulky plastic hangers for uniform ultra-slim velvet hangers', tag: 'Storage' },
      { id: 'cl-2', label: 'Install tension drop-rod below shirts for double-tier hanging', tag: 'Vertical' }
    ],
    deliverableFiles: [
      { name: '01_Capsule_Wardrobe_Notion_Hub.pdf', format: 'Notion Link', size: '1.1 MB', description: 'Digital closet inventory and outfit creator' }
    ],
    storeFaq: [
      { question: 'Does this work for both men and women?', answer: 'Yes! The capsule matrix is gender-neutral and customizable.' }
    ],
    seoMeta: {
      metaTitle: 'Small-Closet Capsule Wardrobe & Storage Architect | SmallSpaceHome',
      metaDescription: 'How to fit a full stylish wardrobe in a small 3-foot closet using capsule formulas.',
      keywords: ['small closet organization', 'capsule wardrobe formula', 'double hanging rod small space']
    },
    customerWelcomeEmail: `Subject: Download: Small-Closet Capsule Wardrobe Architect: [Link]`
  },

  'apartment-acoustic-quiet-kit': {
    id: 'apartment-acoustic-quiet-kit',
    rank: 13,
    title: 'Apartment Sound Dampening & Acoustic Softening Guide',
    storeSlug: 'apartment-sound-dampening-acoustic-softening-guide',
    category: 'Comfort & Acoustics',
    fourthwallCollection: 'Comfort & Wellness',
    priceCAD: 19,
    priceUSD: 14,
    compareAtPriceCAD: 38,
    format: 'Interactive PDF + Material Buyers Guide',
    deliverableBadge: 'Acoustic Blueprint',
    overviewSummary: 'Dampen hallway noise, street sirens, and neighbor footsteps using dense linen drapes, draft sweeps, and acoustic rug density formulas.',
    storeShortDescription: 'Reduce street sirens, hallway noise, and echo in small apartments by up to 60%. Dense rug backing specs, heavy linen drapes, and door draft seals.',
    storeFullListingMarkdown: `## TRANSFORM NOISY APARTMENT ECHO INTO A SERENE BOUTIQUE RETREAT

Hardwood floors and thin rental walls reflect high-frequency sound, making your apartment feel noisy and stressful.

---

### INCLUDED NOISE REDUCTION RECIPES:
- **The Entryway Acoustic Barrier**: Heavy-duty silicon door sweeps and perimeter weatherstripping to block hallway chatter.
- **Window Sound Softening**: Double-layered heavy linen and blackout thermal drapery formulas.
- **Subfloor Decoupling**: Dense felt rug pad ratings (minimum 1/2" 40oz felt) to absorb footfall.`,
    primaryActionLabel: 'Open Acoustic Blueprint',
    interactiveToolType: 'acoustic-soften',
    interactiveSections: [
      {
        id: 'acoustic-layers',
        title: '3-Layer Sound Absorption Matrix',
        description: 'Floor decoupling, window dampening, and entryway sealing.',
        content: ['40oz Felt Underlayment', 'Triple-weave 300 GSM Linen Drapes', 'Silicone Bottom Door Sweep']
      }
    ],
    printableWorksheetMarkdown: `# Sound Dampening Checklist\n\n- Entry Door Seal: Pass / Fail\n- Window Acoustic Curtain: Pass / Fail\n- Felt Rug Pad: 40oz High-Density`,
    notionExportSchema: `Acoustic DB: [Noise Source, Room, Decibel Reduction Tool, Material Spec, Cost]`,
    quickChecklist: [
      { id: 'ac-1', label: 'Install self-adhesive silicone door sweep on main apartment door', tag: 'Noise' },
      { id: 'ac-2', label: 'Add 1/2" 40oz dense felt pad under main living room rug', tag: 'Floors' }
    ],
    deliverableFiles: [
      { name: '01_Apartment_Acoustic_Quiet_Guide.pdf', format: 'PDF Manual', size: '3.8 MB', description: 'Complete soundproofing and noise dampening manual' }
    ],
    storeFaq: [
      { question: 'Will this completely soundproof my apartment?', answer: 'It dampens ambient airborne noise and echo by up to 60% without opening walls.' }
    ],
    seoMeta: {
      metaTitle: 'Apartment Sound Dampening & Acoustic Softening Guide | SmallSpaceHome',
      metaDescription: 'Reduce neighbor noise, street sirens, and echo in small apartments using renter-safe acoustic methods.',
      keywords: ['apartment soundproofing renter', 'reduce neighbor noise', 'acoustic curtains small space']
    },
    customerWelcomeEmail: `Subject: Download: Apartment Acoustic Quiet Guide: [Link]`
  },

  'balcony-small-garden-blueprint': {
    id: 'balcony-small-garden-blueprint',
    rank: 14,
    title: 'Small Balcony & Micro-Garden Sanctuary Blueprint',
    storeSlug: 'small-balcony-micro-garden-sanctuary-blueprint',
    category: 'Outdoor & Balcony',
    fourthwallCollection: 'Outdoor & Plants',
    priceCAD: 19,
    priceUSD: 14,
    compareAtPriceCAD: 38,
    format: 'Interactive PDF + Plant Care Matrix',
    deliverableBadge: 'Garden Blueprint',
    overviewSummary: 'Turn a 4x8 ft concrete condo balcony into a lush, private urban oasis with railing planters, cedar deck tiles, and low-light plant species.',
    storeShortDescription: 'Transform a 4x8 ft concrete balcony into a lush, private urban oasis. Interlocking acacia deck tiles, railing planter specs, and low-wind herb guides.',
    storeFullListingMarkdown: `## TURN YOUR 4X8 FT CONDO BALCONY INTO A PRIVATE URBAN GARDEN

Don't let your balcony remain a dusty storage space for bikes and empty boxes.

---

### INCLUDED BLUEPRINTS:
- **Tool-Free Interlocking Deck Tiles**: Instant hardwood patio warmth over cold grey concrete.
- **Vertical Railing Herb Gardens**: Maximize herbs and greens without losing floor space for chairs.
- **Wind-Resistant Plant Species**: Hardy varieties that thrive on high-floor condo balconies.`,
    primaryActionLabel: 'Open Balcony Blueprint',
    interactiveToolType: 'balcony-garden',
    interactiveSections: [
      {
        id: 'balcony-layout',
        title: 'Micro-Balcony Layout Plans',
        description: 'Bistro dining, reading lounge, and vertical herb garden layouts.',
        content: ['30" Folding Bistro Table + 2 Chairs', 'Over-Railing Planter Boxes', 'Interlocking Deck Flooring']
      }
    ],
    printableWorksheetMarkdown: `# Balcony Planter & Plant Sunlight Chart\n\n- Morning Sun (East): Basil, Mint, Ferns\n- Afternoon Sun (West): Lavender, Rosemary, Succulents`,
    notionExportSchema: `Plant DB: [Plant Name, Sun Req, Water Cycle, Balcony Tier, Harvest Date]`,
    quickChecklist: [
      { id: 'bg-1', label: 'Measure balcony dimensions and drainage slope', tag: 'Dimensions' },
      { id: 'bg-2', label: 'Install interlocking wood deck tiles over concrete floor', tag: 'Floor' }
    ],
    deliverableFiles: [
      { name: '01_Balcony_Micro_Garden_Blueprint.pdf', format: 'PDF Guide', size: '4.5 MB', description: 'Balcony floorplan blueprints and plant care guide' }
    ],
    storeFaq: [
      { question: 'Will deck tiles drain rain water?', answer: 'Yes! Interlocking tiles have elevated plastic grid bases allowing water to drain directly to gutters.' }
    ],
    seoMeta: {
      metaTitle: 'Small Balcony & Micro-Garden Sanctuary Blueprint | SmallSpaceHome',
      metaDescription: 'Turn a small condo balcony into an urban garden with deck tiles and railing planters.',
      keywords: ['small condo balcony ideas', 'balcony garden blueprint', 'interlocking deck tiles apartment']
    },
    customerWelcomeEmail: `Subject: Download: Small Balcony Sanctuary Blueprint: [Link]`
  },

  'wfh-ergonomic-nook-planner': {
    id: 'wfh-ergonomic-nook-planner',
    rank: 15,
    title: 'Micro-WFH & Dual-Purpose Work Desk Architecture',
    storeSlug: 'micro-wfh-dual-purpose-work-desk-architecture',
    category: 'Work & Productivity',
    fourthwallCollection: 'Layout & Spatial Kits',
    priceCAD: 24,
    priceUSD: 18,
    compareAtPriceCAD: 48,
    format: 'Interactive PDF + Notion Productivity Hub',
    deliverableBadge: 'WFH Architect',
    overviewSummary: 'Design an ergonomic home office in an alcove, closet, or living room corner with fold-away desks, magnetic cable management, and proper monitor heights.',
    storeShortDescription: 'Set up an ergonomic, high-productivity home office in an alcove or closet. Fold-away desks, magnetic cable channels, and 5:00 PM invisible desk transitions.',
    storeFullListingMarkdown: `## BUILD A HIGH-PERFORMANCE ERGONOMIC DESK IN A 36-INCH CORNER

You don't need a spare bedroom to work comfortably from home. The **Micro-WFH Architecture Kit** shows you how to build a high-performance ergonomic station in an alcove or closet.

---

### INCLUDED SPECIFICATIONS:
- **The "Cloffice" (Closet Office) Blueprint**: Exact shelving depths and monitor arm clearances.
- **Magnetic Zero-Cable Clutter System**: Route all power cables along steel desk legs invisibly.
- **Ergonomic Posture Standards**: Desk height, monitor riser, and lumbar angles in compact footprints.`,
    primaryActionLabel: 'Open WFH Architecture Kit',
    interactiveToolType: 'wfh-ergonomic',
    interactiveSections: [
      {
        id: 'cloffice-specs',
        title: 'Closet Office & Alcove Dimensional Specs',
        description: 'Standard 36" to 48" desk alcove clearances.',
        content: ['Desk Depth: 20"–24"', 'Keyboard Tray Height: 28"', 'Monitor Arm Reach: 18"']
      }
    ],
    printableWorksheetMarkdown: `# Ergonomic Alignment Checklist\n\n- Monitor Top Edge: Eye Level\n- Elbow Angle: 90 Degrees\n- Cable Channel: Zero Wires on Floor`,
    notionExportSchema: `WFH DB: [Hardware Item, Model, Ergonomic Rating, Cable Route, Power Draw]`,
    quickChecklist: [
      { id: 'wfh-1', label: 'Clamp monitor arm to rear of desk to liberate 1.5 sq ft of desk space', tag: 'Monitor' },
      { id: 'wfh-2', label: 'Install under-desk magnetic cable management tray', tag: 'Cables' }
    ],
    deliverableFiles: [
      { name: '01_Micro_WFH_Ergonomic_Architecture.pdf', format: 'PDF Blueprint', size: '5.2 MB', description: 'Corner desk and closet office layout guide' }
    ],
    storeFaq: [
      { question: 'Can I do this in a rental closet?', answer: 'Yes! Uses freestanding desks and tension or damage-free monitor mounts.' }
    ],
    seoMeta: {
      metaTitle: 'Micro-WFH & Dual-Purpose Work Desk Architecture | SmallSpaceHome',
      metaDescription: 'How to build an ergonomic home office in an alcove or small apartment corner.',
      keywords: ['cloffice small apartment', 'micro home office setup', 'small desk ergonomics']
    },
    customerWelcomeEmail: `Subject: Download: Micro-WFH Work Desk Architecture: [Link]`
  },

  'pet-small-apartment-manual': {
    id: 'pet-small-apartment-manual',
    rank: 16,
    title: 'Small Space Pet Care & Odorless Habitat Protocol',
    storeSlug: 'small-space-pet-care-odorless-habitat-protocol',
    category: 'Pets & Home Living',
    fourthwallCollection: 'Daily Systems',
    priceCAD: 19,
    priceUSD: 14,
    compareAtPriceCAD: 38,
    format: 'Interactive PDF + Maintenance Schedule',
    deliverableBadge: 'Pet OS',
    overviewSummary: 'Keep a clean, odorless home with dogs or cats in under 700 sq ft. Concealed litter furniture, vertical cat superhighways, and daily fur management.',
    storeShortDescription: 'Live with pets in a small apartment with zero odor and zero clutter. Concealed litter box furniture, vertical wall highways, and daily 3-minute hair control.',
    storeFullListingMarkdown: `## KEEP YOUR SMALL APARTMENT FRESH AND ODORLESS WITH PETS

Living with pets in under 700 sq ft doesn't have to mean stepping on dog toys or smelling litter boxes.

---

### INCLUDED PET ARCHITECTURE:
- **Concealed Litter Furniture Blueprints**: Vented credenzas with activated charcoal carbon filters.
- **Vertical Cat Superhighways**: Wall-mounted steps that give cats exercise without floor cat trees.
- **Daily 3-Minute Hair & Dander Routine**: Rubber squeegee techniques for rugs and sofas.`,
    primaryActionLabel: 'Open Pet Habitat Protocol',
    interactiveToolType: 'pet-small-space',
    interactiveSections: [
      {
        id: 'odor-control',
        title: 'Zero-Odor Ventilation Architecture',
        description: 'Activated carbon filtration and concealed cabinet venting.',
        content: ['Carbon Filter Vents', 'Stainless Steel Litter Pans', 'Enclosed Storage Credenza']
      }
    ],
    printableWorksheetMarkdown: `# Pet Habitat Routine\n\n- Daily: Litter Scoop & Food Bowl Wash\n- Weekly: Filter Replacement & Bed Vacuum`,
    notionExportSchema: `Pet DB: [Pet Name, Diet Schedule, Vet History, Toy Bin Rotation, Grooming Cycle]`,
    quickChecklist: [
      { id: 'pet-1', label: 'Switch to stainless steel litter box (prevents plastic odor absorption)', tag: 'Odor' },
      { id: 'pet-2', label: 'Use rubber lint brush on living room upholstery daily', tag: 'Cleaning' }
    ],
    deliverableFiles: [
      { name: '01_Small_Space_Pet_Habitat_Manual.pdf', format: 'PDF Manual', size: '3.9 MB', description: 'Odorless pet habitat guide and vertical wall highway plans' }
    ],
    storeFaq: [
      { question: 'Why stainless steel litter boxes?', answer: 'Plastic scratches and traps bacteria odors; stainless steel never absorbs smell and wipes clean in seconds.' }
    ],
    seoMeta: {
      metaTitle: 'Small Space Pet Care & Odorless Habitat Protocol | SmallSpaceHome',
      metaDescription: 'How to live with dogs and cats in a small apartment without odors or clutter.',
      keywords: ['small apartment pet hacks', 'odorless litter box furniture', 'cat superhighway small space']
    },
    customerWelcomeEmail: `Subject: Download: Small Space Pet Care Protocol: [Link]`
  },

  'entertaining-hosting-small-spaces': {
    id: 'entertaining-hosting-small-spaces',
    rank: 17,
    title: 'Small-Space Dinner Party & Hosting Flow Blueprint',
    storeSlug: 'small-space-dinner-party-hosting-flow-blueprint',
    category: 'Hosting & Entertaining',
    fourthwallCollection: 'Daily Systems',
    priceCAD: 19,
    priceUSD: 14,
    compareAtPriceCAD: 38,
    format: 'Interactive PDF + Menu Staging Planner',
    deliverableBadge: 'Hosting Blueprint',
    overviewSummary: 'Host 6 to 8 friends comfortably in a small apartment. Drop-leaf table configurations, coat drop zones, and batch cocktail staging.',
    storeShortDescription: 'Host 6–8 people comfortably in a studio or 1-bedroom. Drop-leaf dining setups, folding seat stows, batch cocktail staging, and traffic flow recipes.',
    storeFullListingMarkdown: `## HOST UNFORGETTABLE DINNER PARTIES IN UNDER 600 SQ FT

You don't need a formal dining room to host your favorite people.

---

### INCLUDED HOSTING RECIPES:
- **The Drop-Leaf Expansion Blueprint**: Transform a 2-person breakfast bar into an 8-person dining table in 2 minutes.
- **Traffic Flow & Drop Zones**: Coat racks, shoe stows, and drink station separation to prevent kitchen bottlenecks.
- **Batch Cocktail & Make-Ahead Menus**: Staging dishes that require zero last-minute cooking heat.`,
    primaryActionLabel: 'Open Hosting Blueprint',
    interactiveToolType: 'hosting-kit',
    interactiveSections: [
      {
        id: 'hosting-flow',
        title: 'Party Traffic Staging Zones',
        description: 'Entry Drop -> Drink Station -> Seating Circle -> Dessert Buffet.',
        content: ['Self-Serve Drink Bar on Media Console', 'Appetizer Platter on Coffee Table', 'Coats on Rolling Garment Rack']
      }
    ],
    printableWorksheetMarkdown: `# 8-Person Hosting Checklist\n\n- T-Minus 2 Hours: Ice Bucket Ready, Glasses Staged\n- T-Minus 30 Mins: Playlist Active, Scent & Lighting Set (2200K)`,
    notionExportSchema: `Hosting DB: [Event Name, Guest Count, Menu Items, Table Configuration, Music Playlist]`,
    quickChecklist: [
      { id: 'hos-1', label: 'Set up drink station away from kitchen to prevent corridor bottleneck', tag: 'Flow' },
      { id: 'hos-2', label: 'Unfold extra stackable wooden stools for living room circle', tag: 'Seating' }
    ],
    deliverableFiles: [
      { name: '01_Small_Space_Hosting_Flow_Blueprint.pdf', format: 'PDF Blueprint', size: '4.1 MB', description: 'Party layout, seating hacks, and staging checklists' }
    ],
    storeFaq: [
      { question: 'Where do guests put their coats?', answer: 'We include 3 compact over-the-door and folding garment rack staging methods.' }
    ],
    seoMeta: {
      metaTitle: 'Small-Space Dinner Party & Hosting Flow Blueprint | SmallSpaceHome',
      metaDescription: 'How to host 6 to 8 people for dinner in a small apartment without crowding.',
      keywords: ['hosting dinner party small apartment', 'small space entertaining', 'drop leaf dining hacks']
    },
    customerWelcomeEmail: `Subject: Download: Small-Space Dinner Party Blueprint: [Link]`
  },

  'circadian-lighting-guide': {
    id: 'circadian-lighting-guide',
    rank: 18,
    title: 'Circadian 3-Layer Lighting & Window Daylight Maximizer',
    storeSlug: 'circadian-3-layer-lighting-window-daylight-maximizer',
    category: 'Lighting & Aesthetics',
    fourthwallCollection: 'Comfort & Wellness',
    priceCAD: 22,
    priceUSD: 16,
    compareAtPriceCAD: 44,
    format: 'Interactive PDF + Lumens Calculator',
    deliverableBadge: 'Lighting Blueprint',
    overviewSummary: 'Eliminate dreary overhead lights with the 3-layer lighting formula (Ambient, Task, Accent), mirror reflection math, and circadian color temperatures.',
    storeShortDescription: 'Eliminate dreary overhead lighting. The 3-layer lighting formula (2700K ambient, 3000K task, 2200K accent), mirror bounce math, and lumen calculator.',
    storeFullListingMarkdown: `## TRANSFORM DREARY APARTMENT LIGHTING INTO WARM RESORT LUXURY

Single overhead boob lights make small apartments feel flat, cold, and claustrophobic.

---

### THE 3-LAYER FORMULA:
- **Layer 1: Ambient Base (2700K Warm White)**: Bouncing light off matte ceilings.
- **Layer 2: Task Precision (3000K Neutral)**: Under-cabinet cooking LED strips and desk reading lamps.
- **Layer 3: Accent Glow (2200K Candle Warmth)**: Low-level table lamps and plinth spotlights for evening calm.
- **Mirror Bounce Angle Matrix**: Double natural window daylight into dark corners.`,
    primaryActionLabel: 'Launch Lighting Lumens Calculator',
    interactiveToolType: 'circadian-light',
    interactiveSections: [
      {
        id: 'lumens-calc',
        title: 'Room Lumens & Color Temperature Rules',
        description: 'Calculate exact lumens based on room area and ceiling height.',
        content: ['Living Room: 20 lumens/sq ft (2700K)', 'Kitchen: 40 lumens/sq ft (3000K)', 'Bedroom: 15 lumens/sq ft (2200K)']
      }
    ],
    printableWorksheetMarkdown: `# 3-Layer Lighting Room Specs\n\n- Floor Lamp: 2700K Dimmable LED (800 lumens)\n- Task Light: 3000K Directional (500 lumens)\n- Accent Light: 2200K Ambient (300 lumens)`,
    notionExportSchema: `Lighting DB: [Fixture, Bulb Type, Kelvin Rating, Lumens, Smart Plug Group]`,
    quickChecklist: [
      { id: 'lt-1', label: 'Replace all 5000K blue-white overhead bulbs with 2700K warm LEDs', tag: 'Bulbs' },
      { id: 'lt-2', label: 'Position floor mirror opposite window to bounce daylight', tag: 'Natural Light' }
    ],
    deliverableFiles: [
      { name: '01_Circadian_3Layer_Lighting_Guide.pdf', format: 'PDF Guide', size: '5.8 MB', description: 'Photometric calculator and fixture placement guide' }
    ],
    storeFaq: [
      { question: 'What is the best Kelvin for evening relaxing?', answer: '2200K to 2400K ultra-warm amber glow triggers natural melatonin release.' }
    ],
    seoMeta: {
      metaTitle: 'Circadian 3-Layer Lighting Guide | SmallSpaceHome',
      metaDescription: 'Transform small apartment lighting with the 3-layer formula and mirror reflection angles.',
      keywords: ['small apartment lighting guide', '3 layer lighting formula', 'renter lighting hacks']
    },
    customerWelcomeEmail: `Subject: Download: Circadian 3-Layer Lighting Guide: [Link]`
  },

  'seasonal-storage-rotation-system': {
    id: 'seasonal-storage-rotation-system',
    rank: 19,
    title: 'Off-Season Garment & Gear Compression Protocol',
    storeSlug: 'off-season-garment-gear-compression-protocol',
    category: 'Seasonal Storage',
    fourthwallCollection: 'Storage Solutions',
    priceCAD: 17,
    priceUSD: 13,
    compareAtPriceCAD: 34,
    format: 'Interactive PDF + Storage Box Label Kit',
    deliverableBadge: 'Compression Protocol',
    overviewSummary: 'Compress heavy winter coats, duvets, and camping gear by 70% volume using vacuum seal ratios, cedar block vaults, and under-bed clearance charts.',
    storeShortDescription: 'Compress off-season winter coats, bulky duvets, and gear by 70% volume. Vacuum seal ratios, moisture-proof bins, and under-bed clearance sizing.',
    storeFullListingMarkdown: `## SHRINK BULKY WINTER COATS AND GEAR BY 70% VOLUME

Bulky parkas and heavy wool blankets take up valuable closet space during summer months.

---

### INCLUDED COMPRESSION TECHNIQUES:
- **Vacuum Compression Ratios**: Shrink down jackets and duvets into flat 3-inch slabs.
- **Under-Bed Vault Sizing**: Select low-profile rolling bins that clear 6" to 8" bed frames.
- **Moisture & Moth Defense**: Natural cedar block placement and silica gel pouch formulas.`,
    primaryActionLabel: 'Open Seasonal Compression Guide',
    interactiveToolType: 'seasonal-storage',
    interactiveSections: [
      {
        id: 'compression-vaults',
        title: 'Seasonal Rotation Schedule',
        description: 'Spring Transition (April) & Autumn Transition (October).',
        content: ['Bin A: Heavy Winter Parkas & Boots', 'Bin B: Summer Linens & Beach Gear', 'Bin C: Holiday Decor & Heaters']
      }
    ],
    printableWorksheetMarkdown: `# Seasonal Storage Bin Manifest\n\nBin 01 (Under Bed Left): Heavy Knit Sweaters\nBin 02 (Top Shelf Closet): Summer Dresses & Swim`,
    notionExportSchema: `Storage DB: [Bin Number, Location, Season, Garments Stored, Inspection Date]`,
    quickChecklist: [
      { id: 'sea-1', label: 'Wash and thoroughly dry all winter garments before vacuum sealing', tag: 'Care' },
      { id: 'sea-2', label: 'Place 2 cedar blocks in each off-season storage tote', tag: 'Protection' }
    ],
    deliverableFiles: [
      { name: '01_Seasonal_Garment_Compression_Protocol.pdf', format: 'PDF Guide', size: '3.6 MB', description: 'Vacuum compression and under-bed storage guide' }
    ],
    storeFaq: [
      { question: 'Will vacuum bags ruin down coats?', answer: 'We include specific 50% compression guidelines for natural down feathers to prevent quills from breaking.' }
    ],
    seoMeta: {
      metaTitle: 'Off-Season Garment & Gear Compression Protocol | SmallSpaceHome',
      metaDescription: 'How to store winter coats and bulky gear in small apartments using vacuum compression.',
      keywords: ['seasonal clothes storage small apartment', 'vacuum seal clothes guide', 'under bed storage bins']
    },
    customerWelcomeEmail: `Subject: Download: Seasonal Garment Compression Protocol: [Link]`
  },

  'roommate-co-living-harmony-os': {
    id: 'roommate-co-living-harmony-os',
    rank: 20,
    title: 'Shared Small Apartment & Roommate Harmony System',
    storeSlug: 'shared-small-apartment-roommate-harmony-system',
    category: 'Co-Living & Roommates',
    fourthwallCollection: 'Daily Systems',
    priceCAD: 24,
    priceUSD: 18,
    compareAtPriceCAD: 48,
    format: 'Notion Workspace + Legal-Grade Living Agreement',
    deliverableBadge: 'Co-Living OS',
    overviewSummary: 'Eliminate passive-aggressive friction in shared 2-bed apartments with chore rotation charts, split expense trackers, and quiet hours agreements.',
    storeShortDescription: 'Eliminate friction in shared small apartments. Digital chore rotation boards, split grocery and utility expense trackers, and roommate agreement templates.',
    storeFullListingMarkdown: `## ELIMINATE TENSION AND CHORE ARGUING IN SHARED APARTMENTS

Sharing a small 2-bedroom apartment or split condo can test friendships without clear, objective ground rules.

---

### INCLUDED CO-LIVING ARCHITECTURE:
- **The Roommate Living Agreement Contract**: Clear rules for overnight guests, noise curfews (10 PM), and thermostat settings.
- **Automated Expense Splitter Notion Hub**: Split wifi, electricity, and shared toilet paper/cleaning supplies effortlessly.
- **Fair Chore Rotation System**: No more guessing who last took out the recycling or deep-cleaned the shower.`,
    primaryActionLabel: 'Open Roommate Harmony Hub',
    interactiveToolType: 'roommate-harmony',
    interactiveSections: [
      {
        id: 'co-living-rules',
        title: 'Core Shared Space Ground Rules',
        description: 'Sink dish policy, guest notice windows, and quiet hours.',
        content: ['Dishes in dishwasher within 2 hours', '24-hour advance notice for weekend overnight guests', 'Quiet hours 10 PM - 7 AM weekdays']
      }
    ],
    printableWorksheetMarkdown: `# Roommate Living Agreement Summary\n\n- Quiet Hours: 10:00 PM - 7:30 AM\n- Guest Policy: Max 2 consecutive nights\n- Shared Expense Settlement: 1st of every month`,
    notionExportSchema: `Roommate DB: [Chore, Assigned Roommate, Frequency, Completed Date, Expense Ledger]`,
    quickChecklist: [
      { id: 'rm-1', label: 'Sign and agree upon Roommate Living Agreement before move-in', tag: 'Agreement' },
      { id: 'rm-2', label: 'Set up automated recurring split expense tracker for utilities', tag: 'Finances' }
    ],
    deliverableFiles: [
      { name: '01_Roommate_Harmony_Notion_Hub.pdf', format: 'Notion Duplicate Link', size: '1.2 MB', description: 'Connected roommate chore and expense workspace' },
      { name: '02_Printable_Roommate_Agreement_Contract.pdf', format: 'Printable PDF', size: '2.4 MB', description: 'Fill-in-the-blank formal co-living agreement' }
    ],
    storeFaq: [
      { question: 'Can both roommates edit the Notion workspace?', answer: 'Yes! Notion allows free collaboration and sharing between roommates.' }
    ],
    seoMeta: {
      metaTitle: 'Shared Small Apartment & Roommate Harmony System | SmallSpaceHome',
      metaDescription: 'Chore rotation boards, expense splitters, and living agreements for small shared apartments.',
      keywords: ['roommate agreement template', 'shared apartment chores', 'roommate expense tracker notion']
    },
    customerWelcomeEmail: `Subject: Download: Shared Apartment & Roommate Harmony System: [Link]`
  }
};
