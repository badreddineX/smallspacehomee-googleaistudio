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
  interactiveToolType: string;
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
  'kit-zero-damage-mounting': {
    id: 'kit-zero-damage-mounting',
    rank: 1,
    title: 'The Zero-Damage Renter Mounting & Secret Wall Hacks Kit',
    storeSlug: 'zero-damage-renter-mounting-hacks-kit',
    category: 'Renter Hacks & Wall Decor',
    fourthwallCollection: 'Tactical Action Kits',
    priceCAD: 24,
    priceUSD: 18,
    compareAtPriceCAD: 38,
    format: 'Visual Field Playbook (.PDF) + Pocket Hacks Deck + Load Safety Calculator (.CSV) + Notion Hub',
    deliverableBadge: '100% Zero-Damage Certified',
    overviewSummary: 'The definitive tactical field guide and calculator for hanging heavy mirrors, floating shelves, and gallery art with zero drill holes or paint peeling.',
    storeShortDescription: 'Hang 45-lb heavy mirrors, floating shelves, and gallery walls without a single drill hole, paint tear, or lost deposit. Includes 3M Claw shear formulas, painter tape + hot glue hacks, and emergency drywall touchup tricks.',
    storeFullListingMarkdown: `### The Zero-Damage Renter Mounting & Secret Wall Hacks Kit
*Tested in a 510 sq ft Toronto Rental Apartment*

Tired of living with depressing, blank white walls because your landlord banned nails or drywall anchors? 

**The Zero-Damage Renter Mounting Kit** gives you the exact structural formulas, hardware store dupes, and physics-tested hacks to hang heavy decor, curtain rods, and floating shelves with 100% zero wall damage.

#### What’s Included in Your Instant Download:
1. **The 36-Page Vector Field Playbook (.PDF)**: High-resolution diagrams, 70% alcohol prep rules, shear force calculations, and blow-dryer thermal adhesive release protocols.
2. **Pocket Hacks & Tricks Cheat Cards (.PDF)**: Printable 4x6 emergency cards with weight load ratings and hardware store money-saving dupes.
3. **Adhesive & Tension Load Safety Matrix (.CSV)**: Interactive spreadsheet compatible with Excel and Google Sheets with instant safety calculations.
4. **1-Click Renter Hardware & Wall Inventory Hub (.Notion)**: Pre-built Notion dashboard for cataloging wall art, weights, and move-out patch tasks.

#### The 4 Secret Hacks Inside:
- **The Painter’s Tape + Hot Glue Trick**: How to mount wooden ledges and acoustic panels with 20-lb shear strength and peel it off cleanly with zero paint residue.
- **The 3M Claw 45-Degree Drywall Anchor Hack**: Push hardened steel anchors with your thumbs to support 45 lbs through microscopic pinholes smaller than a staple.
- **The 60-Second Blow-Dryer Thermal Release**: How gentle heating prevents Command strips from snapping and tearing off latex paint.
- **The $12 Spackle + Chalk Sheen Matching Trick**: How to fill pinholes flush and match rental wall paint without buying expensive sample paint cans.`,
    primaryActionLabel: 'Download Mounting Hacks Kit ($24 CAD)',
    interactiveToolType: 'vertical-storage',
    interactiveSections: [
      {
        id: 'zdm-tool-1',
        title: 'Adhesive Shear-Force & Weight Safety Calculator',
        description: 'Calculate real-world downward shear load vs rated capacity.',
        content: { defaultLoadLbs: 35, safetyMargin: '30%', prepRequirement: '70% Isopropyl Alcohol' }
      }
    ],
    printableWorksheetMarkdown: `# Zero-Damage Mounting Quick Reference & Checklist
SmallSpaceHome.ca • Pocket Hacks Deck

[ ] Step 1: Clean wall with 70% Isopropyl alcohol. Let dry 15 mins.
[ ] Step 2: For mirrors over 20 lbs, use two diagonal 3M Claw 45lb push anchors spaced 16" apart.
[ ] Step 3: For lightweight wooden shelves, apply blue painter's tape + hot glue bead.
[ ] Step 4: To remove adhesive, warm with blow-dryer for 45s and pull tab STRAIGHT DOWN.`,
    notionExportSchema: JSON.stringify({ name: "Zero-Damage Mounting Hub", version: "2.4.0" }),
    quickChecklist: [
      { id: '1', label: 'Wipe wall with 70% Isopropyl Alcohol (Zero oil residue)', tag: 'Wall Prep' },
      { id: '2', label: 'Use 2 anchor points 16" apart for frames over 15 lbs', tag: 'Shear Physics' },
      { id: '3', label: 'Warm adhesive with hair dryer before pulling tab down', tag: 'Peel-Safe' }
    ],
    deliverableFiles: [
      { name: '01_Zero_Damage_Mounting_Field_Playbook.pdf', format: 'PDF Master Guide', size: '4.1 MB', description: 'Illustrated field guide with load diagrams and hack tutorials.' },
      { name: '02_Zero_Damage_Pocket_Hacks_Deck.pdf', format: 'Printable Cards', size: '1.8 MB', description: '4x6 printable emergency cheat cards and dupe lists.' },
      { name: '03_Adhesive_Load_Safety_Matrix.csv', format: 'CSV / Sheets', size: '14 KB', description: 'Interactive load capacity and hardware selector.' },
      { name: '04_Zero_Damage_Mounting_Notion_Hub.json', format: 'Notion Hub', size: '22 KB', description: '1-Click Notion workspace with wall inventory tracker.' }
    ],
    storeFaq: [
      { question: 'Will this really hold a 35-lb heavy mirror without screws?', answer: 'Yes! When using two 3M Claw push anchors spaced 16 inches apart, the downward shear load is distributed across two drywall planes supporting up to 70 lbs with zero drilling.' },
      { question: 'What if my rental apartment has textured or cold walls?', answer: 'The field guide includes specific protocols for textured plaster and cold walls, including 10-second thermal pre-heating and painter tape adhesion bridges.' }
    ],
    seoMeta: {
      metaTitle: 'Zero-Damage Renter Mounting & Secret Wall Hacks Kit | SmallSpaceHome',
      metaDescription: 'Hang 45-lb mirrors, floating shelves, and gallery walls with zero drill holes or lost deposits. Instant PDF, CSV calculator, and Notion hub.',
      keywords: ['zero damage mounting', 'how to hang heavy mirror rental', 'command strip hacks', 'renter wall decor hacks']
    },
    customerWelcomeEmail: `Subject: Your Zero-Damage Mounting & Secret Wall Hacks Kit is here! 🔨✨

Hi friend,

Thank you for grabbing The Zero-Damage Renter Mounting & Wall Hacks Kit!

You can now download your complete deliverable bundle:
1. 01_Zero_Damage_Mounting_Field_Playbook.pdf
2. 02_Zero_Damage_Pocket_Hacks_Deck.pdf
3. 03_Adhesive_Load_Safety_Matrix.csv
4. 04_Zero_Damage_Mounting_Notion_Hub.json

Remember: Always prep your walls with 70% Isopropyl alcohol before applying any adhesive!

Happy decorating,
The SmallSpaceHome Team`
  },

  'kit-micro-kitchen-maxima': {
    id: 'kit-micro-kitchen-maxima',
    rank: 2,
    title: 'The 500 Sq Ft Micro-Kitchen & Cabinet Space Doubler Kit',
    storeSlug: 'micro-kitchen-cabinet-space-doubler-kit',
    category: 'Kitchen Organization & Prep Hacks',
    fourthwallCollection: 'Tactical Action Kits',
    priceCAD: 22,
    priceUSD: 16,
    compareAtPriceCAD: 35,
    format: 'Visual Field Playbook (.PDF) + Cabinet Blueprint Cards + Dimension Calculator (.CSV) + Notion Hub',
    deliverableBadge: '100% Zero Modification',
    overviewSummary: 'Unlock 18+ cubic feet of dead cabinet storage and create 40% more food prep area in small galley kitchens under 45 sq ft.',
    storeShortDescription: 'Double your usable kitchen storage and food prep area in a cramped galley kitchen under 45 sq ft. Includes inside-door tension pot lid racks, over-sink cutting board bridge blueprints, and magnetic undershelf spice layouts.',
    storeFullListingMarkdown: `### The 500 Sq Ft Micro-Kitchen & Cabinet Space Doubler Kit
*Tested in a 510 sq ft Toronto Rental Apartment*

Cramped galley kitchen with zero counter space for meal prep and cabinets overflowing with cookware?

**The Micro-Kitchen Space Doubler Kit** transforms tiny kitchens into high-efficiency cooking sanctuaries using renter-safe hardware tricks and vertical multipliers.

#### What’s Included:
1. **Micro-Kitchen Space Doubler Field Playbook (.PDF)**: 32 pages of clearance specs, tension rod inside-door organizers, and magnetic spice maps.
2. **Cabinet Door Blueprint Cards (.PDF)**: Pocket reference cards with exact inch clearances for lid racks and prep bridges.
3. **Cabinet Vertical Multiplier Matrix (.CSV)**: Interactive capacity multiplier sheet for Excel and Google Sheets.
4. **1-Click Pantry & Meal Prep Hub (.Notion)**: Ready-to-use Notion database for spices, bulk pantry, and small appliances.`,
    primaryActionLabel: 'Download Micro-Kitchen Kit ($22 CAD)',
    interactiveToolType: 'pantry-cooking',
    interactiveSections: [
      {
        id: 'mkm-tool-1',
        title: 'Cabinet Vertical Space Recovery Calculator',
        description: 'Calculate recovered storage volume using multi-tier risers.',
        content: { defaultCubicFtGain: 18.5, prepSurfaceGainSqFt: 3.0 }
      }
    ],
    printableWorksheetMarkdown: `# Micro-Kitchen Reset & Cabinet Checklist
SmallSpaceHome.ca • Pocket Blueprint Cards

[ ] Inside Door 1: Dual 12" tension rods for pot lids
[ ] Inside Door 2: Clear adhesive acrylic bin for foil & parchment rolls
[ ] Sink Area: 18x24" Hardwood cutting board prep bridge over basin
[ ] Refrigerator Side: Magnetic knife & spice strip rail`,
    notionExportSchema: JSON.stringify({ name: "Micro-Kitchen Pantry Hub", version: "2.4.0" }),
    quickChecklist: [
      { id: '1', label: 'Install dual tension rods inside lower cabinet doors for lids', tag: 'Door Hack' },
      { id: '2', label: 'Place hardwood cutting board bridge over half the sink basin', tag: 'Prep Surface' },
      { id: '3', label: 'Mount magnetic spice rail under upper cabinets', tag: 'Dead Air' }
    ],
    deliverableFiles: [
      { name: '01_Micro_Kitchen_Space_Doubler_Playbook.pdf', format: 'PDF Master Guide', size: '3.8 MB', description: 'Complete illustrated field guide to galley kitchen expansion.' },
      { name: '02_Cabinet_Door_Blueprint_Cards.pdf', format: 'Printable Cards', size: '1.5 MB', description: 'Pocket blueprint cards with exact inch clearances.' },
      { name: '03_Cabinet_Clearance_And_Multiplier_Matrix.csv', format: 'CSV / Sheets', size: '12 KB', description: 'Interactive cabinet capacity multiplier matrix.' },
      { name: '04_Kitchen_Zone_Pantry_Notion_Hub.json', format: 'Notion Hub', size: '20 KB', description: '1-Click Notion workspace for pantry organization.' }
    ],
    storeFaq: [
      { question: 'Will the over-sink cutting board damage my faucet or sink?', answer: 'No! The bridge is sized with silicone rubber feet that rest safely on countertop edges or sink rims, preventing any scratching or faucet interference.' }
    ],
    seoMeta: {
      metaTitle: 'Micro-Kitchen & Cabinet Space Doubler Kit | SmallSpaceHome',
      metaDescription: 'Double your storage and food prep area in small galley kitchens under 45 sq ft. Instant PDF playbook, printable blueprints, and CSV calculator.',
      keywords: ['small kitchen organization', 'galley kitchen hacks', 'over sink cutting board', 'tiny apartment kitchen storage']
    },
    customerWelcomeEmail: `Subject: Your Micro-Kitchen Space Doubler Kit is ready! 🍳✨

Hi friend,

Get ready to unlock 18+ cubic feet of dead cabinet storage in your kitchen!

Your download bundle is ready:
1. 01_Micro_Kitchen_Space_Doubler_Playbook.pdf
2. 02_Cabinet_Door_Blueprint_Cards.pdf
3. 03_Cabinet_Clearance_And_Multiplier_Matrix.csv
4. 04_Kitchen_Zone_Pantry_Notion_Hub.json

To culinary calm in compact spaces,
The SmallSpaceHome Team`
  },

  'kit-closet-quadrupler': {
    id: 'kit-closet-quadrupler',
    rank: 3,
    title: 'The Small Closet Quadrupler & Vertical Storage Hack Kit',
    storeSlug: 'small-closet-quadrupler-vertical-storage-kit',
    category: 'Closet & Wardrobe Systems',
    fourthwallCollection: 'Tactical Action Kits',
    priceCAD: 24,
    priceUSD: 18,
    compareAtPriceCAD: 38,
    format: 'Visual Field Playbook (.PDF) + Wardrobe Ratio Cards + Garment Density Calculator (.CSV) + Notion Hub',
    deliverableBadge: 'Zero-Drill Suspended Rod',
    overviewSummary: 'Quadruple hanging and folded capacity in 3-foot rental closets using suspended dual-rods, cascading hangers, and upper-shelf bins.',
    storeShortDescription: 'Turn a cramped 3-foot single-rod rental closet into a 4-tiered boutique wardrobe with zero carpentry. Fit 120 garments cleanly with suspended dual-rods, velvet cascading hangers, and vertical shelf dividers.',
    storeFullListingMarkdown: `### The Small Closet Quadrupler & Vertical Storage Hack Kit
*Tested in a 510 sq ft Toronto Rental Apartment*

Struggling with an overflowing 3-foot closet where clothes are crammed together and piles of shoes cover the floor?

**The Small Closet Quadrupler Kit** unlocks 4 tiers of usable hanging and folded space using suspended secondary rods, velvet cascading hangers, and vertical filing dividers.

#### What’s Included:
1. **Small Closet Quadrupler Field Playbook (.PDF)**: 34 pages of suspended rod blueprints, garment spacing formulas, and seasonal compression guides.
2. **Wardrobe Density Blueprint Cards (.PDF)**: 4x6 printable cheat cards with vertical clearance specs for shirts, pants, and coats.
3. **Closet Vertical Capacity Matrix (.CSV)**: Interactive garment capacity planner for Excel and Google Sheets.
4. **1-Click Capsule Wardrobe & Inventory Hub (.Notion)**: Minimalist Notion database for managing seasonal capsule rotations.`,
    primaryActionLabel: 'Download Closet Quadrupler Kit ($24 CAD)',
    interactiveToolType: 'capsule-wardrobe',
    interactiveSections: [
      {
        id: 'cq-tool-1',
        title: 'Closet Hanging Capacity Multiplier Calculator',
        description: 'Calculate total garments accommodated on single vs dual rod setup.',
        content: { singleRodMaxGarments: 45, hackedRodMaxGarments: 120, capacityGain: '+166%' }
      }
    ],
    printableWorksheetMarkdown: `# Small Closet Quadrupler Checklist
SmallSpaceHome.ca • Pocket Cards

[ ] Tier 1 (Top Rod): Blouses & Shirts on thin velvet hangers with soda tabs
[ ] Tier 2 (Suspended Rod): Trousers & skirts on 32" paracord dowel
[ ] Tier 3 (Upper Shelf): Heavy knitwear filed vertically between acrylic dividers
[ ] Tier 4 (Floor): Double-decker shoe slots recovering 50% floor width`,
    notionExportSchema: JSON.stringify({ name: "Capsule Wardrobe Hub", version: "2.4.0" }),
    quickChecklist: [
      { id: '1', label: 'Suspend secondary rod 34" below main rod with 550 paracord', tag: 'Dual Rod' },
      { id: '2', label: 'Replace chunky hangers with 0.2" velvet non-slip hangers', tag: 'Width Recovery' },
      { id: '3', label: 'Install acrylic shelf dividers to file sweaters vertically', tag: 'No Toppling' }
    ],
    deliverableFiles: [
      { name: '01_Small_Closet_Quadrupler_Playbook.pdf', format: 'PDF Master Guide', size: '3.9 MB', description: 'Field playbook with suspended rod construction diagrams.' },
      { name: '02_Wardrobe_Density_Blueprint_Cards.pdf', format: 'Printable Cards', size: '1.6 MB', description: 'Pocket cards with vertical garment clearances.' },
      { name: '03_Closet_Vertical_Capacity_Matrix.csv', format: 'CSV / Sheets', size: '11 KB', description: 'Interactive garment density planning matrix.' },
      { name: '04_Capsule_Wardrobe_Notion_Hub.json', format: 'Notion Hub', size: '21 KB', description: '1-Click Notion hub for capsule wardrobe tracking.' }
    ],
    storeFaq: [
      { question: 'Will paracord hold heavy winter coats?', answer: 'Yes! 550 Mil-Spec Paracord has a breaking strength of 550 lbs. Two cord loops easily support 40+ lbs of trousers and shirts safely.' }
    ],
    seoMeta: {
      metaTitle: 'Small Closet Quadrupler & Vertical Storage Hack Kit | SmallSpaceHome',
      metaDescription: 'Turn a 3-foot rental closet into a 4-tier boutique wardrobe. Fit 120 garments with zero carpentry. Instant PDF, printable cards, and CSV calculator.',
      keywords: ['small closet organization', 'how to organize small closet', 'double hanging rod hack', 'capsule wardrobe small space']
    },
    customerWelcomeEmail: `Subject: Your Small Closet Quadrupler Kit is inside! 👗👔

Hi friend,

Say goodbye to closet clutter and wrinkled clothes!

Your complete kit is ready to download:
1. 01_Small_Closet_Quadrupler_Playbook.pdf
2. 02_Wardrobe_Density_Blueprint_Cards.pdf
3. 03_Closet_Vertical_Capacity_Matrix.csv
4. 04_Capsule_Wardrobe_Notion_Hub.json

To intentional wardrobe bliss,
The SmallSpaceHome Team`
  },

  'kit-deposit-protection-defense': {
    id: 'kit-deposit-protection-defense',
    rank: 4,
    title: 'The Renter Security Deposit Defense & Emergency Repair Kit',
    storeSlug: 'renter-security-deposit-defense-repair-kit',
    category: 'Tenant Rights & Rental Hacks',
    fourthwallCollection: 'Tactical Action Kits',
    priceCAD: 27,
    priceUSD: 20,
    compareAtPriceCAD: 45,
    format: 'Field Repair Playbook (.PDF) + Landlord Script Cards + Move-Out Inspection Matrix (.CSV) + Notion Vault',
    deliverableBadge: '100% Tenant Shielded',
    overviewSummary: 'The exact move-out inspection protocol, landlord pushback scripts, and $12 repair tricks that saved $14,000+ in fraudulent deposit deductions.',
    storeShortDescription: 'Protect your $2,000+ security deposit with legally airtight move-out inspection protocols, word-for-word landlord pushback scripts, and foolproof $12 DIY drywall texture matching recipes.',
    storeFullListingMarkdown: `### The Renter Security Deposit Defense & Emergency Repair Kit
*Tested in a 510 sq ft Toronto Rental Apartment*

Moving out of your rental and worried your landlord will withhold hundreds of dollars for pinholes, baseboard scuffs, or standard living wear?

**The Renter Security Deposit Defense Kit** gives you the legal clauses, timestamped photographic frameworks, and $12 repair formulas to protect every single dollar of your deposit.

#### What’s Included:
1. **Renter Security Deposit Defense Playbook (.PDF)**: 38 pages of tenant tribunal dispute frameworks, drywall matching formulas, and appliance cleaning hacks.
2. **Landlord Pushback Script Cards (.PDF)**: Copy-paste email templates for disputing painting and mandatory cleaning fees.
3. **Move-In / Move-Out 4K Photo Matrix (.CSV)**: 40-point room-by-room photographic proof checklist.
4. **1-Click Deposit Claim & Inspection Vault (.Notion)**: Comprehensive Notion database for evidence storage and dispute logs.`,
    primaryActionLabel: 'Download Deposit Defense Kit ($27 CAD)',
    interactiveToolType: 'landlord-vault',
    interactiveSections: [
      {
        id: 'dpd-tool-1',
        title: 'Security Deposit Deductions Dispute Estimator',
        description: 'Calculate disputed amount vs legal normal wear thresholds.',
        content: { averageSavedDeposit: '$1,250 CAD', diyRepairCost: '$12.00 CAD' }
      }
    ],
    printableWorksheetMarkdown: `# Move-Out Inspection & Dispute Quick Card
SmallSpaceHome.ca • Pocket Cards

[ ] Day -14: Send preliminary walkthrough request email
[ ] Wall Repair: Fill nail holes flush with vinyl spackle; rub matching chalk sheen
[ ] Baseboards: Damp Magic Eraser + 2 drops Dawn dish soap
[ ] Final Walkthrough: Continuous 10-minute 4K video recording with time stamp`,
    notionExportSchema: JSON.stringify({ name: "Deposit Defense Vault", version: "2.4.0" }),
    quickChecklist: [
      { id: '1', label: 'Take continuous 4K walkthrough video on move-in and move-out', tag: 'Legal Proof' },
      { id: '2', label: 'Patch pinholes flush and match paint sheen with artist chalk', tag: '$12 Fix' },
      { id: '3', label: 'Cite statutory "Normal Wear and Tear" clause in deposit dispute', tag: 'Tenant Rights' }
    ],
    deliverableFiles: [
      { name: '01_Renter_Deposit_Defense_Playbook.pdf', format: 'PDF Master Guide', size: '4.2 MB', description: 'Comprehensive legal defense and repair field guide.' },
      { name: '02_Landlord_Pushback_Script_Cards.pdf', format: 'Printable Cards', size: '1.7 MB', description: 'Copy-paste landlord dispute letter scripts.' },
      { name: '03_Move_Out_Inspection_Matrix.csv', format: 'CSV / Sheets', size: '13 KB', description: '40-point photographic inspection checklist.' },
      { name: '04_Deposit_Defense_Legal_Notion_Vault.json', format: 'Notion Vault', size: '23 KB', description: '1-Click Notion database for move-out evidence logs.' }
    ],
    storeFaq: [
      { question: 'Can my landlord legally charge for pinholes from hanging picture frames?', answer: 'In over 85% of North American tenant jurisdictions (including Ontario RTA and California Civil Code), hanging standard picture frames is legally recognized as normal wear and tear that cannot be deducted from a deposit.' }
    ],
    seoMeta: {
      metaTitle: 'Renter Security Deposit Defense & Emergency Repair Kit | SmallSpaceHome',
      metaDescription: 'Protect your $2,000 security deposit with move-out inspection checklists, landlord pushback scripts, and $12 wall repair hacks.',
      keywords: ['security deposit refund', 'apartment move out checklist', 'how to fix holes in rental wall', 'landlord dispute letter']
    },
    customerWelcomeEmail: `Subject: Your Security Deposit Defense Kit is ready! 🛡️💼

Hi friend,

Never let a landlord withhold your hard-earned security deposit unjustly again!

Your complete kit is ready:
1. 01_Renter_Deposit_Defense_Playbook.pdf
2. 02_Landlord_Pushback_Script_Cards.pdf
3. 03_Move_Out_Inspection_Matrix.csv
4. 04_Deposit_Defense_Legal_Notion_Vault.json

To stress-free renting and deposit protection,
The SmallSpaceHome Team`
  }
};
