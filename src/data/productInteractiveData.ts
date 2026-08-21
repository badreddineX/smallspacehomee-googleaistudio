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
    title: 'The SmallSpaceHome Renter Mounting & Hardware Hub',
    storeSlug: 'renter-mounting-and-hardware-hub',
    category: 'Renter Hardware & Wall Planning',
    fourthwallCollection: 'Tactical Action Kits',
    priceCAD: 24,
    priceUSD: 18,
    compareAtPriceCAD: 38,
    format: '16-Section Field Playbook (.PDF) + Reactive Decision Matrix (.CSV) + 7-Database Notion Workspace + Pocket Cards',
    deliverableBadge: 'Renter-Safe Planning Tools',
    overviewSummary: 'The definitive Canadian renter guide, reactive decision spreadsheet, and Notion workspace for planning, testing, installing, and removing wall decor with reduced damage risk.',
    storeShortDescription: 'Renter-friendly mounting planning tools designed to help you reduce unnecessary wall damage, choose hardware more carefully, and document your installations in Canadian rental apartments.',
    storeFullListingMarkdown: `### SmallSpaceHome Renter Mounting & Hardware Hub
*Real apartment-tested planning tools for Toronto, Vancouver & Montreal renters.*

Renting a small space shouldn't mean staring at depressing blank walls. But guessing with hardware or trusting exaggerated "100% damage-free" marketing claims can lead to pulled drywall paper, broken decor, and deducted security deposits.

**The SmallSpaceHome Renter Mounting & Hardware Hub** provides practical, conservative engineering guidelines, a reactive load safety spreadsheet, and a complete Notion workspace to plan, test, install, monitor, and remove wall-hung items without costly surprises.

---

#### What’s Included in Your Instant Download:
1. **The Zero-Damage Renter Mounting Field Playbook (.PDF)**: 16 comprehensive editorial sections covering surface identification (drywall, plaster, tile, wood, glass), conservative working loads, 70% isopropyl alcohol prep, 13-step installation checklist, and careful removal protocols.
2. **Adhesive & Mounting Decision Matrix (.CSV / Excel)**: 22-column reactive spreadsheet with automated safety margins, conditional risk formatting, and interactive recommendation logic.
3. **SmallSpaceHome Renter Mounting & Hardware Hub (.Notion JSON / Guide)**: 7 linked databases including Wall & Item Inventory, Hardware Library, Installation Log, Shopping List, Move-Out & Repair Checklist, and Verified Safety Notes.
4. **Printable Pocket Cheat Cards (.PDF)**: 4x6" field cards for pre-installation audits, 1-hour cure protocols, stretch-release removal, and $12 move-out spackling & sheen matching.

---

#### Ground Rules & Honest Renter Truths:
- **No False Guarantees**: We do not claim any adhesive is universally 100% damage-proof. We teach you how to diagnose paint condition, test discreetly, and calculate safe working loads.
- **Conservative Working Loads**: Learn why static manufacturer ratings must be discounted by 30% to 50% to account for vibration, humidity, and leverage.
- **Surface Diagnostics**: Know exactly what will hold on modern drywall vs fragile heritage plaster vs glazed ceramic tile.
- **Move-Out Repair Protocol**: Step-by-step techniques to patch minor pinholes and blend off-white sheen cleanly before landlord inspections.`,
    primaryActionLabel: 'Download Mounting & Hardware Hub ($24 CAD)',
    interactiveToolType: 'vertical-storage',
    interactiveSections: [
      {
        id: 'zdm-tool-1',
        title: 'Reactive Conservative Load & Safety Calculator',
        description: 'Calculate real-world downward shear load, conservative working load (30-50% safety margin), and risk assessment.',
        content: { defaultLoadLbs: 12, safetyMargin: '40%', prepRequirement: '70% Isopropyl Alcohol (15 min dry time)' }
      }
    ],
    printableWorksheetMarkdown: `# SmallSpaceHome Renter Mounting & Hardware Field Checklist
Publication by SmallSpaceHome.ca • Canadian Urban Renter Edition

[ ] STEP 1: Weigh item on a calibrated digital scale (Gross Weight = Frame + Glass + Backing).
[ ] STEP 2: Check wall surface (Drywall, Plaster & Lath, Ceramic Tile, Finished Wood, Glass).
[ ] STEP 3: Confirm manufacturer rating and calculate Conservative Working Load (Rating × 0.60).
[ ] STEP 4: Clean target wall area with 70% Isopropyl Alcohol; let dry 15 minutes.
[ ] STEP 5: Apply hardware with firm palm pressure for 30 continuous seconds.
[ ] STEP 6: MANDATORY: Wait 1 full hour before hanging weight to allow adhesive bond formation.
[ ] STEP 7: Check level, capture reference photo, and log in your Notion Wall Inventory.
[ ] STEP 8: On removal day, pull tab STRAIGHT DOWN parallel to wall (never outward).`,
    notionExportSchema: JSON.stringify({ 
      templateTitle: "SmallSpaceHome Renter Mounting & Hardware Hub", 
      version: "3.0.0",
      theme: "Calm Neutral Editorial (Muted Sage, Charcoal, Off-White)",
      databases: ["Wall & Item Inventory", "Hardware & Tools Library", "Installation Log", "Shopping List", "Move-Out & Repair Checklist", "Safety Notes & Sources"]
    }),
    quickChecklist: [
      { id: '1', label: 'Weigh item gross weight on a digital scale (include frame & glass)', tag: 'Weight Check' },
      { id: '2', label: 'Clean wall with 70% Isopropyl Alcohol (Zero multi-surface cleaners)', tag: 'Wall Prep' },
      { id: '3', label: 'Apply 30-50% conservative safety margin below manufacturer rating', tag: 'Load Safety' },
      { id: '4', label: 'Wait 1 full hour after pressing adhesive before hanging weight', tag: 'Cure Time' },
      { id: '5', label: 'Pull tab straight DOWN parallel to wall when removing (never outward)', tag: 'Safe Removal' }
    ],
    deliverableFiles: [
      { name: '01_Renter_Mounting_Field_Playbook.pdf', format: 'PDF Master Guide', size: '3.8 MB', description: 'Comprehensive 16-section editorial field guide with surface decision tables, installation checklists, and removal protocols.' },
      { name: '02_Adhesive_And_Mounting_Decision_Matrix.csv', format: 'CSV / Sheets', size: '18 KB', description: '22-column reactive decision spreadsheet with automated safety margin calculations and risk filters.' },
      { name: '03_Renter_Mounting_And_Hardware_Hub_Notion_Schema.json', format: 'Notion Hub', size: '26 KB', description: '1-Click 7-database Notion template architecture with linked inventories, logs, and shopping lists.' },
      { name: '04_Printable_Pocket_Cheatsheets_And_Templates.pdf', format: 'Printable Cards', size: '1.6 MB', description: '4x6" printable pocket cheat cards for installation day and move-out repair audits.' }
    ],
    storeFaq: [
      { 
        question: 'Is this method guaranteed to cause zero damage to my rental walls?', 
        answer: 'No mounting method can guarantee zero damage under all conditions because rental wall paints, plaster condition, and humidity vary widely. Our kit is designed to reduce wall damage by teaching you conservative working loads, surface compatibility testing, and careful removal techniques.' 
      },
      { 
        question: 'Can I safely hang a 25-lb or 35-lb mirror using adhesive strips?', 
        answer: 'We strictly advise against hanging mirrors over 15 lbs with standard adhesive strips due to dynamic shear and tensile torque. For mirrors over 15 lbs, our guide outlines safer alternatives: push-in drywall anchors with micro-pinholes, floor-leaning mounts with safety tethers, or stud-mounted fasteners where permitted.' 
      },
      { 
        question: 'Does this work on Canadian plaster-and-lath walls in older apartments?', 
        answer: 'Yes! Older Toronto, Montreal, and Vancouver walk-ups often feature brittle plaster. The guide provides specific diagnostic steps to identify plaster and recommends appropriate solutions like picture rail hooks or angled finish pins instead of wire push-hooks that snap on lath.' 
      },
      { 
        question: 'How do I use the Notion template if I am a beginner?', 
        answer: 'The Notion Hub includes a clean 4-step setup guide and 7 pre-built databases (Wall Inventory, Hardware Library, Installation Log, Shopping List, Move-Out Checklist, Safety Notes). You can use it as a complete workspace with sample records.' 
      }
    ],
    seoMeta: {
      metaTitle: 'SmallSpaceHome Renter Mounting & Hardware Hub | Canadian Rental Guide',
      metaDescription: 'Renter-friendly mounting planning tools, reactive decision matrix, and Notion workspace to safely hang decor and mirrors with reduced damage risk.',
      keywords: ['renter mounting guide', 'how to hang art apartment', 'damage free wall hanging canada', 'renter hardware notion template', 'command strip weight limits']
    },
    customerWelcomeEmail: `Subject: Your SmallSpaceHome Renter Mounting & Hardware Hub is ready! 🏠🔨

Hi neighbor,

Thank you for picking up the SmallSpaceHome Renter Mounting & Hardware Hub!

As small-space apartment renters in Canada, we know how stressful it can be to decorate without risking your security deposit or personal safety.

Here are your 4 core deliverables ready for immediate use:
1. 01_Renter_Mounting_Field_Playbook.pdf (28-page 16-section master guide)
2. 02_Adhesive_And_Mounting_Decision_Matrix.csv (22-column reactive spreadsheet)
3. 03_Renter_Mounting_And_Hardware_Hub_Notion_Schema.json (7-database workspace)
4. 04_Printable_Pocket_Cheatsheets_And_Templates.pdf (4x6" printable pocket cards)

Quick Start Recommendation:
Start by reading Section 03 ("Safety First") and Section 04 ("Identify the Wall or Surface") in the Field Playbook before buying hardware.

If you have any questions, reach out to us at hello@smallspacehome.ca.

Happy organizing,
The SmallSpaceHome.ca Team`
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
