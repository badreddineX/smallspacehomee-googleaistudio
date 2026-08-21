import { InteractiveProductData } from '../productInteractiveData';

export const INTERACTIVE_PRODUCTS_5_TO_11: Record<string, InteractiveProductData> = {
  'kit-studio-acoustic-privacy': {
    id: 'kit-studio-acoustic-privacy',
    rank: 5,
    title: 'The Studio Apartment Acoustic Privacy & Soundproofing Hacks Kit',
    storeSlug: 'studio-acoustic-privacy-soundproofing-kit',
    category: 'Acoustics & Ambient Soundproofing',
    fourthwallCollection: 'Tactical Action Kits',
    priceCAD: 24,
    priceUSD: 18,
    compareAtPriceCAD: 38,
    format: 'Acoustic Field Playbook (.PDF) + Door Sound-Lock Blueprint Cards + Decibel Reduction Matrix (.CSV) + Notion Hub',
    deliverableBadge: '100% Removable Silicone Seals',
    overviewSummary: 'Reduce hallway footsteps, elevator chimes, and neighbor noise by up to 14 dB using zero-damage peelable perimeter seals and acoustic mass positioning.',
    storeShortDescription: 'Cut hallway footsteps, elevator hums, and neighbor noise by up to 14 dB in thin-walled rentals with zero-damage peelable door seals, acoustic window layering, and pink noise masking.',
    storeFullListingMarkdown: `### The Studio Apartment Acoustic Privacy & Soundproofing Hacks Kit
*Tested in a 510 sq ft Toronto Rental Apartment*

Struggling with thin apartment walls, echoing hallway footsteps, elevator dings, and noisy neighbors keeping you awake?

**The Studio Apartment Acoustic Privacy Kit** uses proven architectural air-lock physics, dual-density silicone door sweeps, and sound-absorbing textile layering to create a library-quiet rental sanctuary.

#### What’s Included:
1. **Studio Acoustic Privacy Playbook (.PDF)**: 28 pages of door perimeter air-lock diagrams, window drape spans, and vent baffle acoustics.
2. **Door Sound-Lock Blueprint Cards (.PDF)**: 4x6 cheat cards for door gap light audits and gasket compression testing.
3. **Decibel Reduction & Materials Matrix (.CSV)**: Interactive spreadsheet calculating NRC ratings and decibel drops.
4. **1-Click Acoustic Vault (.Notion)**: Notion database for noise logs, hardware shopping, and room-by-room acoustic audits.`,
    primaryActionLabel: 'Download Acoustic Kit ($24 CAD)',
    interactiveToolType: 'acoustic-calculator',
    interactiveSections: [
      {
        id: 'apk-tool-1',
        title: 'Hallway Decibel Reduction Estimator',
        description: 'Calculate noise reduction across door air-locks, window drapes, and rug pads.',
        content: { defaultNoiseDropDb: '-12 to -14 dB', speechClarityDrop: '85%' }
      }
    ],
    printableWorksheetMarkdown: `# Studio Acoustic Reset Checklist
SmallSpaceHome.ca • Pocket Cards

[ ] Door Base: Align dual-density silicone sweep so 3 fins kiss floor lightly
[ ] Door Frame: Adhere hollow D-profile rubber foam along inner door stop
[ ] Windows: Mount 32oz velvet drapes 4" above and 6" wider than frame
[ ] Flooring: Lay 1/2" dense rubber-felt rug pad beneath living area wool rug`,
    notionExportSchema: JSON.stringify({ name: "Studio Acoustic Vault", version: "3.0.0" }),
    quickChecklist: [
      { id: '1', label: 'Eliminate front door air leaks with peelable silicone sweep', tag: 'Door Air-Lock' },
      { id: '2', label: 'Layer 32oz triple-weave curtains over bedroom windows', tag: 'Window Damping' },
      { id: '3', label: 'Place dense rubber-felt underlay beneath area rugs', tag: 'Impact Decoupling' }
    ],
    deliverableFiles: [
      { name: '01_Studio_Acoustic_Privacy_Playbook.pdf', format: 'PDF Master Guide', size: '3.9 MB', description: 'Comprehensive guide to rental soundproofing & air-locks.' },
      { name: '02_Door_Sound_Lock_Blueprint_Cards.pdf', format: 'Printable Cards', size: '1.5 MB', description: 'Pocket cards for door light audits & gasket fitting.' },
      { name: '03_Acoustic_Materials_And_Decibel_Matrix.csv', format: 'CSV / Sheets', size: '12 KB', description: 'Interactive decibel reduction spreadsheet.' },
      { name: '04_Studio_Acoustic_Notion_Vault.json', format: 'Notion Hub', size: '22 KB', description: 'Notion workspace for noise logs & hardware tracking.' }
    ],
    storeFaq: [
      { question: 'Will the door weatherstripping damage the landlord’s door frame?', answer: 'No! The recommended hollow D-profile rubber strips use light acrylic contact adhesive that removes cleanly with zero residue when warmed with a hair dryer.' }
    ],
    seoMeta: {
      metaTitle: 'Studio Apartment Acoustic Privacy & Soundproofing Kit | SmallSpaceHome',
      metaDescription: 'Cut apartment noise by up to 14 dB with renter-friendly door air-locks, acoustic curtain layering, and noise masking.',
      keywords: ['apartment soundproofing', 'how to soundproof rental door', 'studio apartment acoustic privacy', 'renter soundproofing hacks']
    },
    customerWelcomeEmail: `Subject: Your Studio Acoustic Privacy Kit is ready! 🤫🎧

Hi friend,

Get ready to enjoy quiet evenings in your apartment!

Your complete kit is ready:
1. 01_Studio_Acoustic_Privacy_Playbook.pdf
2. 02_Door_Sound_Lock_Blueprint_Cards.pdf
3. 03_Acoustic_Materials_And_Decibel_Matrix.csv
4. 04_Studio_Acoustic_Notion_Vault.json

To peaceful living,
The SmallSpaceHome Team`
  },

  'kit-entryway-dropzone': {
    id: 'kit-entryway-dropzone',
    rank: 6,
    title: 'The Micro-Entryway 6-Inch "Drop Zone" & Clutter-Stop Kit',
    storeSlug: 'micro-entryway-dropzone-clutter-stop-kit',
    category: 'Entryways & Hallway Flow',
    fourthwallCollection: 'Tactical Action Kits',
    priceCAD: 22,
    priceUSD: 16,
    compareAtPriceCAD: 35,
    format: 'Entryway Field Playbook (.PDF) + 6-Inch Blueprint Cards + Hallway Clearance Matrix (.CSV) + Notion Hub',
    deliverableBadge: '6-Inch Architectural Profile',
    overviewSummary: 'Create an ultra-slim 5.5-inch floating console, staggered coat hook grid, and river stone boot tray in narrow rental hallways under 38 inches wide.',
    storeShortDescription: 'Stop coat, shoe, and mail clutter at your front door within an ultra-slim 6-inch wall profile that preserves open 32-inch hallway walkways.',
    storeFullListingMarkdown: `### The Micro-Entryway 6-Inch "Drop Zone" & Clutter-Stop Kit
*Tested in a 510 sq ft Toronto Rental Apartment*

Narrow front hallway choked with shoe piles, winter coats, and scattered mail?

**The Micro-Entryway Drop Zone Kit** creates a high-functioning 6-coat, 8-shoe, key, and mail drop center protruding less than 6 inches from your wall.

#### What’s Included:
1. **Micro-Entryway Field Playbook (.PDF)**: 28 pages of 6-inch floating console mounting, staggered hook geometry, and boot drainage.
2. **6-Inch Floating Blueprint Cards (.PDF)**: 4x6 pocket cards for walkway clearance formulas and door swing arcs.
3. **Entryway Footprint & Clearance Matrix (.CSV)**: Interactive spreadsheet calculating hallway traffic widths and load limits.
4. **1-Click Entryway Hub (.Notion)**: Notion database for tracking incoming/outgoing items and daily 60-second reset habits.`,
    primaryActionLabel: 'Download Entryway Kit ($22 CAD)',
    interactiveToolType: 'entryway-calculator',
    interactiveSections: [
      {
        id: 'edz-tool-1',
        title: 'Hallway Clearance & Walkway Calculator',
        description: 'Calculate clear walking path width with floating console vs floor table.',
        content: { preservedWalkwayInches: '32.5 inches', floorSpaceSaved: '100%' }
      }
    ],
    printableWorksheetMarkdown: `# Micro-Entryway 60-Second Return-to-Zero
SmallSpaceHome.ca • Pocket Cards

[ ] Keys: Touch keychain to neodymium magnetic underside of ledge
[ ] Mail: Sort junk into recycling bin immediately; place bills in ceramic tray
[ ] Coat: Hang jacket on high hook (66") or lower hook (46")
[ ] Boots: Place footwear directly onto river stone drainage tray`,
    notionExportSchema: JSON.stringify({ name: "Micro-Entryway Hub", version: "3.0.0" }),
    quickChecklist: [
      { id: '1', label: 'Mount 5.5" floating picture ledge at 38" elbow height', tag: 'Floating Ledge' },
      { id: '2', label: 'Stagger coat hooks vertically at 66" and 46" height', tag: 'Staggered Hooks' },
      { id: '3', label: 'Fill rubber boot tray with clean natural river stones', tag: 'Boot Drainage' }
    ],
    deliverableFiles: [
      { name: '01_Micro_Entryway_Dropzone_Playbook.pdf', format: 'PDF Master Guide', size: '3.8 MB', description: 'Guide to narrow hallway drop zones & floating consoles.' },
      { name: '02_Entryway_6_Inch_Blueprint_Cards.pdf', format: 'Printable Cards', size: '1.5 MB', description: 'Cheat cards for walkway clearances & hook geometry.' },
      { name: '03_Entryway_Footprint_And_Clearance_Matrix.csv', format: 'CSV / Sheets', size: '12 KB', description: 'Interactive hallway capacity and clearance spreadsheet.' },
      { name: '04_Micro_Entryway_Notion_Hub.json', format: 'Notion Hub', size: '22 KB', description: 'Notion workspace for entryway reset tracking.' }
    ],
    storeFaq: [
      { question: 'Will the floating ledge pull out of drywall under the weight of mail and keys?', answer: 'No! The guide specifies using OOK push-in wire hooks or 3M Claw anchors rated for 20+ lbs that leave only tiny pinholes in drywall.' }
    ],
    seoMeta: {
      metaTitle: 'Micro-Entryway 6-Inch Drop Zone & Clutter-Stop Kit | SmallSpaceHome',
      metaDescription: 'Organize narrow rental hallways with ultra-slim 6-inch floating consoles, staggered coat hooks, and river stone boot trays.',
      keywords: ['small entryway ideas', 'narrow hallway drop zone', 'renter entryway hacks', 'floating key ledge']
    },
    customerWelcomeEmail: `Subject: Your Micro-Entryway Drop Zone Kit is ready! 🚪🔑

Hi friend,

Transform your front door from a clutter hotspot into a streamlined drop zone!

Your download bundle is ready:
1. 01_Micro_Entryway_Dropzone_Playbook.pdf
2. 02_Entryway_6_Inch_Blueprint_Cards.pdf
3. 03_Entryway_Footprint_And_Clearance_Matrix.csv
4. 04_Micro_Entryway_Notion_Hub.json

To smooth arrivals and departures,
The SmallSpaceHome Team`
  },

  'kit-underbed-hidden-storage': {
    id: 'kit-underbed-hidden-storage',
    rank: 7,
    title: 'The Under-Bed & Hidden Space Secret Storage Blueprint',
    storeSlug: 'underbed-hidden-space-secret-storage-blueprint',
    category: 'Hidden Storage & Multi-Use Furniture',
    fourthwallCollection: 'Tactical Action Kits',
    priceCAD: 24,
    priceUSD: 18,
    compareAtPriceCAD: 38,
    format: 'Hidden Storage Playbook (.PDF) + Elevation Blueprint Cards + Cubic Volume Calculator (.CSV) + Notion Hub',
    deliverableBadge: '28+ Cu Ft Recovered Volume',
    overviewSummary: 'Unlock 28.5 cubic feet of dust-proof, organized hidden storage beneath beds, sofas, and cabinet bases using steel risers and rubber-caster wooden crates.',
    storeShortDescription: 'Recover 28+ cubic feet of dust-proof storage hiding beneath beds and furniture. Features heavy steel risers, zippered Oxford totes, and suitcase nesting systems.',
    storeFullListingMarkdown: `### The Under-Bed & Hidden Space Secret Storage Blueprint
*Tested in a 510 sq ft Toronto Rental Apartment*

Running out of closet and dresser space while 30 cubic feet of dead air sits empty under your bed?

**The Under-Bed Secret Storage Blueprint** turns dead furniture voids into dust-sealed, rolling storage holding winter coats, extra linens, and luggage invisibly.

#### What’s Included:
1. **Under-Bed Hidden Storage Playbook (.PDF)**: 28 pages of bed riser elevation physics, zippered dust vaults, and rolling caster crates.
2. **Elevation Blueprint Cards (.PDF)**: 4x6 cheat cards for riser weight distribution and luggage nesting.
3. **Hidden Cubic Storage Calculator (.CSV)**: Interactive spreadsheet calculating storage volume gains.
4. **1-Click Under-Bed Storage Vault (.Notion)**: Notion database for cataloging under-bed container contents.`,
    primaryActionLabel: 'Download Under-Bed Storage Kit ($24 CAD)',
    interactiveToolType: 'underbed-calculator',
    interactiveSections: [
      {
        id: 'ubs-tool-1',
        title: 'Under-Bed Cubic Volume Calculator',
        description: 'Calculate storage volume beneath Twin, Double, Queen, and King bed frames.',
        content: { queenBedVolumeCuFt: '28.5 cu ft', dresserEquivalent: '4-Drawer Dresser' }
      }
    ],
    printableWorksheetMarkdown: `# Under-Bed Storage Audit Checklist
SmallSpaceHome.ca • Pocket Cards

[ ] Bed Elevation: Install 4 steel risers with dense wool felt floor pads
[ ] Center Support: Ensure center bed rail receives matching height riser
[ ] Dust Protection: Pack bedding into zippered 600D Oxford fabric totes with cedar
[ ] Luggage Nesting: Store winter coats compressed inside nested hard-shell suitcases`,
    notionExportSchema: JSON.stringify({ name: "Under-Bed Storage Vault", version: "3.0.0" }),
    quickChecklist: [
      { id: '1', label: 'Elevate bed frame 2 inches with heavy-duty steel risers', tag: 'Bed Elevation' },
      { id: '2', label: 'Use zippered Oxford-cloth totes to seal out dust and pet hair', tag: 'Dust Defense' },
      { id: '3', label: 'Nest compressed winter coats inside hard-shell luggage', tag: 'Luggage Nesting' }
    ],
    deliverableFiles: [
      { name: '01_Underbed_Hidden_Storage_Playbook.pdf', format: 'PDF Master Guide', size: '3.8 MB', description: 'Field guide to under-bed & dead space optimization.' },
      { name: '02_Bed_Elevation_Blueprint_Cards.pdf', format: 'Printable Cards', size: '1.5 MB', description: 'Cheat cards for riser safety & luggage nesting.' },
      { name: '03_Hidden_Cubic_Storage_Calculator.csv', format: 'CSV / Sheets', size: '12 KB', description: 'Interactive under-bed volume calculator spreadsheet.' },
      { name: '04_Underbed_Storage_Notion_Vault.json', format: 'Notion Hub', size: '22 KB', description: 'Notion workspace for hidden container inventories.' }
    ],
    storeFaq: [
      { question: 'Will bed risers damage my rental hardwood floors?', answer: 'No! The guide includes applying 100% dense wool felt pads to riser bases, preventing any floor indentation or scratches.' }
    ],
    seoMeta: {
      metaTitle: 'Under-Bed & Hidden Space Secret Storage Blueprint | SmallSpaceHome',
      metaDescription: 'Unlock 28 cubic feet of invisible, dust-proof storage under beds and furniture with steel risers and rolling drawers.',
      keywords: ['under bed storage hacks', 'hidden storage small apartment', 'bed risers for storage', 'how to store luggage small space']
    },
    customerWelcomeEmail: `Subject: Your Under-Bed Secret Storage Blueprint is ready! 🛏️📦

Hi friend,

Unlock 28+ cubic feet of hidden storage in your home today!

Your complete kit is ready:
1. 01_Underbed_Hidden_Storage_Playbook.pdf
2. 02_Bed_Elevation_Blueprint_Cards.pdf
3. 03_Hidden_Cubic_Storage_Calculator.csv
4. 04_Underbed_Storage_Notion_Vault.json

To spacious, clutter-free bedrooms,
The SmallSpaceHome Team`
  },

  'kit-studio-zoning-separation': {
    id: 'kit-studio-zoning-separation',
    rank: 8,
    title: 'The Studio Living-Bed Separation & Visual Privacy Kit',
    storeSlug: 'studio-living-bed-separation-visual-privacy-kit',
    category: 'Studio Zoning & Room Dividers',
    fourthwallCollection: 'Tactical Action Kits',
    priceCAD: 24,
    priceUSD: 18,
    compareAtPriceCAD: 38,
    format: 'Studio Field Playbook (.PDF) + Floor Plan Blueprint Cards + Layout Clearance Matrix (.CSV) + Notion Hub',
    deliverableBadge: '100% Zero-Drill Dividers',
    overviewSummary: 'Create 3 distinct functional zones (Bedroom Sanctuary, Living Lounge, Dining Nook) in open studios without building walls or blocking daylight.',
    storeShortDescription: 'Divide an open studio into 3 distinct functional rooms without building walls, blocking daylight, or drilling screws into rental drywall.',
    storeFullListingMarkdown: `### The Studio Living-Bed Separation & Visual Privacy Kit
*Tested in a 510 sq ft Toronto Rental Apartment*

Struggling with living, sleeping, and eating in a single open studio room where your bed is constantly in view?

**The Studio Living-Bed Separation Kit** maps architectural sightlines and uses open-back modular bookcases, tension curtain tracks, and multi-rug zoning to create 3 distinct rooms.

#### What’s Included:
1. **Studio Living-Bed Separation Playbook (.PDF)**: 30 pages of bookcase positioning, ceiling tension drapery, and 32-inch walkway rules.
2. **Floor Plan Blueprint Cards (.PDF)**: 4x6 cheat cards for sightline calculations and rug boundary dimensions.
3. **Studio Layout & Clearance Matrix (.CSV)**: Interactive spreadsheet calculating furniture footprints and walkway widths.
4. **1-Click Studio Zoning Hub (.Notion)**: Notion database for mapping zones, lighting shifts, and furniture clearances.`,
    primaryActionLabel: 'Download Studio Separation Kit ($24 CAD)',
    interactiveToolType: 'studio-zoning',
    interactiveSections: [
      {
        id: 'sbs-tool-1',
        title: 'Studio Sightline & Walkway Calculator',
        description: 'Calculate walkway clearances and daylight preservation with bookcase dividers.',
        content: { preservedDaylight: '85%', walkwayClearance: '34 inches' }
      }
    ],
    printableWorksheetMarkdown: `# Studio Zoning & Sightline Checklist
SmallSpaceHome.ca • Pocket Cards

[ ] Bookcase Divider: Place 4x2 cube unit perpendicular to wall at bed foot
[ ] Daylight Rule: Keep top 2 cube rows open with plants and books for light flow
[ ] Walkway: Verify minimum 32 inches clear path between divider and opposite wall
[ ] Rug Anchoring: Anchor sofa on 6x9 rug; place 2x6 runner beside bed`,
    notionExportSchema: JSON.stringify({ name: "Studio Zoning Hub", version: "3.0.0" }),
    quickChecklist: [
      { id: '1', label: 'Position open-back modular bookcase perpendicular to wall', tag: 'Bookcase Divider' },
      { id: '2', label: 'Maintain strict 32-inch clear primary walkway around divider', tag: 'Walkway Flow' },
      { id: '3', label: 'Use distinct area rugs to anchor living vs bedroom zones', tag: 'Rug Zoning' }
    ],
    deliverableFiles: [
      { name: '01_Studio_Living_Bed_Separation_Playbook.pdf', format: 'PDF Master Guide', size: '4.1 MB', description: 'Field guide to studio room division & daylight zoning.' },
      { name: '02_Studio_Floor_Plan_Blueprint_Cards.pdf', format: 'Printable Cards', size: '1.5 MB', description: 'Cheat cards for walkway clearances & divider placement.' },
      { name: '03_Studio_Layout_And_Clearance_Matrix.csv', format: 'CSV / Sheets', size: '12 KB', description: 'Interactive layout and clearance spreadsheet.' },
      { name: '04_Studio_Separation_Notion_Hub.json', format: 'Notion Hub', size: '22 KB', description: 'Notion workspace for studio zoning & furniture layouts.' }
    ],
    storeFaq: [
      { question: 'Will an open-back bookcase make my apartment feel dark?', answer: 'Not at all! By following our 40% Daylight Rule (filling lower cubes with storage boxes and keeping upper cubes open), over 80% of natural window light passes through.' }
    ],
    seoMeta: {
      metaTitle: 'Studio Living-Bed Separation & Visual Privacy Kit | SmallSpaceHome',
      metaDescription: 'Divide an open studio into 3 rooms without drywall screws. Open-back bookcases, tension curtain tracks, and daylight preservation.',
      keywords: ['studio apartment room divider', 'how to separate bed in studio', 'studio apartment layout ideas', 'renter friendly room divider']
    },
    customerWelcomeEmail: `Subject: Your Studio Living-Bed Separation Kit is ready! 🛋️🛏️

Hi friend,

Enjoy your newly zoned, peaceful studio apartment!

Your complete kit is ready:
1. 01_Studio_Living_Bed_Separation_Playbook.pdf
2. 02_Studio_Floor_Plan_Blueprint_Cards.pdf
3. 03_Studio_Layout_And_Clearance_Matrix.csv
4. 04_Studio_Separation_Notion_Hub.json

To intentional studio living,
The SmallSpaceHome Team`
  },

  'kit-wfh-desk-reset': {
    id: 'kit-wfh-desk-reset',
    rank: 9,
    title: 'The WFH Multi-Use Desk & 15-Minute Room Reset Kit',
    storeSlug: 'wfh-multi-use-desk-15-minute-room-reset-kit',
    category: 'Home Office & Workday Reset',
    fourthwallCollection: 'Tactical Action Kits',
    priceCAD: 22,
    priceUSD: 16,
    compareAtPriceCAD: 35,
    format: 'WFH Field Playbook (.PDF) + Evening Blueprint Cards + Cable & Ergonomics Matrix (.CSV) + Notion Hub',
    deliverableBadge: 'Zero Visible Cables',
    overviewSummary: 'Transition your small living space from a focused workstation into a tranquil evening sanctuary in under 8 minutes with zero visible cords.',
    storeShortDescription: 'End workday burnout in small apartments. Completely conceal laptops, monitors, and spaghetti cables at 5:30 PM with zero lingering visual work clutter.',
    storeFullListingMarkdown: `### The WFH Multi-Use Desk & 15-Minute Room Reset Kit
*Tested in a 510 sq ft Toronto Rental Apartment*

Staring at your glowing laptop, tangled power cords, and work paperwork all evening in your small living room?

**The WFH Multi-Use Desk & Reset Kit** provides under-desk J-channel cable raceways, 5-second felt laptop hideaways, and smart lighting routines that transition your room into an evening sanctuary.

#### What’s Included:
1. **WFH Desk Reset Playbook (.PDF)**: 28 pages of cable invisibility diagrams, felt hideaway trays, and 5:30 PM lighting transitions.
2. **Evening Transition Blueprint Cards (.PDF)**: 4x6 cheat cards for 8-minute workday sunset habits and circadian kelvin shifts.
3. **Desk Ergonomics & Cable Matrix (.CSV)**: Interactive spreadsheet calculating power loads and cable channel capacities.
4. **1-Click Workday Sunset Hub (.Notion)**: Notion database for daily workday shutdown routines and desk setups.`,
    primaryActionLabel: 'Download WFH Reset Kit ($22 CAD)',
    interactiveToolType: 'wfh-reset',
    interactiveSections: [
      {
        id: 'wfh-tool-1',
        title: 'Workday Sunset Time & Habit Calculator',
        description: 'Calculate time saved and mental clarity gained with standardized 8-minute resets.',
        content: { averageResetTimeMins: '7.5 mins', cableInvisibility: '100%' }
      }
    ],
    printableWorksheetMarkdown: `# 8-Minute Workday Sunset Checklist
SmallSpaceHome.ca • Pocket Cards

[ ] 5:25 PM: Close all work browser tabs and log off corporate chat
[ ] 5:30 PM: Disconnect laptop; slide into felt under-desk tray
[ ] 5:32 PM: Wipe desk surface; place decorative ceramic vase in center
[ ] 5:35 PM: Shift room lighting from 4000K focus white to 2200K warm amber`,
    notionExportSchema: JSON.stringify({ name: "WFH Sunset Hub", version: "3.0.0" }),
    quickChecklist: [
      { id: '1', label: 'Route all cords through under-desk adhesive J-channels', tag: 'Zero Cables' },
      { id: '2', label: 'Slide laptop into hidden felt under-desk tray at 5:30 PM', tag: 'Felt Hideaway' },
      { id: '3', label: 'Automate evening lighting shift from 4000K to 2200K', tag: 'Circadian Shift' }
    ],
    deliverableFiles: [
      { name: '01_WFH_Multi_Use_Desk_Reset_Playbook.pdf', format: 'PDF Master Guide', size: '3.8 MB', description: 'Field guide to WFH desk concealment & evening resets.' },
      { name: '02_Evening_Transition_Blueprint_Cards.pdf', format: 'Printable Cards', size: '1.5 MB', description: 'Cheat cards for cable routing & sunset rituals.' },
      { name: '03_Desk_Ergonomics_And_Cable_Matrix.csv', format: 'CSV / Sheets', size: '12 KB', description: 'Interactive cable and ergonomics spreadsheet.' },
      { name: '04_WFH_Desk_Reset_Notion_Hub.json', format: 'Notion Hub', size: '22 KB', description: 'Notion workspace for workday shutdown tracking.' }
    ],
    storeFaq: [
      { question: 'Do I need to buy an expensive new desk to use these cable hacks?', answer: 'No! The adhesive J-channels and felt slide-out trays mount to any existing desk, dining table, or console with zero power tools.' }
    ],
    seoMeta: {
      metaTitle: 'WFH Multi-Use Desk & 15-Minute Room Reset Kit | SmallSpaceHome',
      metaDescription: 'Conceal laptops and cables at 5:30 PM. Transition small living rooms into evening sanctuaries with zero visible work clutter.',
      keywords: ['small apartment home office', 'hide desk in living room', 'desk cable management renter', 'work from home small space reset']
    },
    customerWelcomeEmail: `Subject: Your WFH Desk Reset Kit is ready! 💻✨

Hi friend,

Say goodbye to after-hours work burnout in your living room!

Your download bundle is ready:
1. 01_WFH_Multi_Use_Desk_Reset_Playbook.pdf
2. 02_Evening_Transition_Blueprint_Cards.pdf
3. 03_Desk_Ergonomics_And_Cable_Matrix.csv
4. 04_WFH_Desk_Reset_Notion_Hub.json

To peaceful evenings and productive days,
The SmallSpaceHome Team`
  },

  'kit-optical-expander-lighting': {
    id: 'kit-optical-expander-lighting',
    rank: 10,
    title: 'The Optical Illusion Small Space Expander & Lighting Kit',
    storeSlug: 'optical-illusion-small-space-expander-lighting-kit',
    category: 'Lighting Architecture & Visual Geometry',
    fourthwallCollection: 'Tactical Action Kits',
    priceCAD: 24,
    priceUSD: 18,
    compareAtPriceCAD: 38,
    format: 'Optical Field Playbook (.PDF) + Lighting Blueprint Cards + Mirror Reflection Matrix (.CSV) + Notion Hub',
    deliverableBadge: '3-Tier Layered 2700K Lighting',
    overviewSummary: 'Make a 450 sq ft apartment look and feel like 750+ sq ft using architectural daylight bounce angles and layered warm lighting.',
    storeShortDescription: 'Double the perceived size and natural daylight of a dark rental apartment using optical tricks, 45-degree mirror bounce angles, and ceiling-height curtain hanging.',
    storeFullListingMarkdown: `### The Optical Illusion Small Space Expander & Lighting Kit
*Tested in a 510 sq ft Toronto Rental Apartment*

Struggling with low ceilings, dark north-facing windows, and harsh overhead hospital lighting in your rental?

**The Optical Illusion Small Space Expander Kit** applies professional interior design optical physics—mounting drapes 2 inches below ceilings, bouncing daylight at 45-degree mirror angles, and eliminating single overhead glare.

#### What’s Included:
1. **Optical Space Expander Playbook (.PDF)**: 28 pages of ceiling drapery geometry, mirror angles, and 3-tier warm lighting.
2. **Optical Geometry Blueprint Cards (.PDF)**: 4x6 cheat cards for curtain overhang widths and Kelvin temperature charts.
3. **Mirror Bounce & Kelvin Spectrum Matrix (.CSV)**: Interactive spreadsheet calculating lumens and reflection angles.
4. **1-Click Lighting Operating System (.Notion)**: Notion database for fixture mapping, bulb Kelvin logging, and sightline audits.`,
    primaryActionLabel: 'Download Optical Expander Kit ($24 CAD)',
    interactiveToolType: 'lighting-calculator',
    interactiveSections: [
      {
        id: 'ose-tool-1',
        title: 'Room Lumens & Daylight Penetration Calculator',
        description: 'Calculate total required ambient, task, and accent lumens for your apartment footprint.',
        content: { recommendedLumens: '2,400 lm total', perceivedHeightGain: '+18 inches' }
      }
    ],
    printableWorksheetMarkdown: `# Optical Space Expansion Checklist
SmallSpaceHome.ca • Pocket Cards

[ ] Curtains: Mount rod 2" below ceiling; extend 8" beyond window frame on each side
[ ] Mirror Bounce: Angle full-length mirror 45 degrees to primary window for daylight reflection
[ ] Overhead Ban: Turn off harsh ceiling light fixture; turn on 3 low 2700K lamps
[ ] Furniture Sightlines: Choose legged furniture with 6" exposed clearance to show floor`,
    notionExportSchema: JSON.stringify({ name: "Optical Lighting Hub", version: "3.0.0" }),
    quickChecklist: [
      { id: '1', label: 'Mount curtain rods high and wide (2" below ceiling, 8" beyond frame)', tag: 'High Drapes' },
      { id: '2', label: 'Angle full-length mirror at 45° to main window for daylight bounce', tag: 'Mirror Bounce' },
      { id: '3', label: 'Eliminate single overhead glare; layer 3 warm 2700K low lamps', tag: 'Layered Light' }
    ],
    deliverableFiles: [
      { name: '01_Optical_Space_Expander_Playbook.pdf', format: 'PDF Master Guide', size: '3.9 MB', description: 'Field guide to visual space expansion & layered lighting.' },
      { name: '02_Optical_Geometry_Blueprint_Cards.pdf', format: 'Printable Cards', size: '1.5 MB', description: 'Cheat cards for curtain hanging & Kelvin temperatures.' },
      { name: '03_Mirror_Bounce_And_Kelvin_Matrix.csv', format: 'CSV / Sheets', size: '12 KB', description: 'Interactive lumens and mirror reflection spreadsheet.' },
      { name: '04_Optical_Space_Expander_Notion_Hub.json', format: 'Notion Hub', size: '22 KB', description: 'Notion workspace for lighting fixture audits.' }
    ],
    storeFaq: [
      { question: 'Will high-mounted curtains work with standard rental window blinds?', answer: 'Yes! The high-and-wide curtain rod hangs in front of standard venetian blinds, completely concealing the metal headrail while allowing blinds to operate freely behind sheer linen drapes.' }
    ],
    seoMeta: {
      metaTitle: 'Optical Illusion Small Space Expander & Lighting Kit | SmallSpaceHome',
      metaDescription: 'Make small apartments look twice as large with ceiling-height drapery formulas, 45-degree mirror daylight bounce, and 2700K lighting.',
      keywords: ['how to make small apartment look bigger', 'curtain hanging height hack', 'small space lighting tips', 'mirror daylight bounce']
    },
    customerWelcomeEmail: `Subject: Your Optical Space Expander Kit is ready! 💡🪞

Hi friend,

Get ready to double the perceived size and natural light in your home!

Your download bundle is ready:
1. 01_Optical_Space_Expander_Playbook.pdf
2. 02_Optical_Geometry_Blueprint_Cards.pdf
3. 03_Mirror_Bounce_And_Kelvin_Matrix.csv
4. 04_Optical_Space_Expander_Notion_Hub.json

To bright, airy spaces,
The SmallSpaceHome Team`
  },

  'kit-small-bathroom-maximizer': {
    id: 'kit-small-bathroom-maximizer',
    rank: 11,
    title: 'The Small Bathroom Vanity & Shower Vertical Maximizer',
    storeSlug: 'small-bathroom-vanity-shower-vertical-maximizer',
    category: 'Bathroom Storage & Zero-Drill Systems',
    fourthwallCollection: 'Tactical Action Kits',
    priceCAD: 22,
    priceUSD: 16,
    compareAtPriceCAD: 35,
    format: 'Bathroom Field Playbook (.PDF) + Zero-Drill Blueprint Cards + Clearance & Humidity Matrix (.CSV) + Notion Hub',
    deliverableBadge: '100% Zero-Tile-Drilling',
    overviewSummary: 'Eliminate pedestal sink chaos and recover 14+ cubic feet of vertical storage in 5x7 rental bathrooms with rust-proof anodized tension poles and visual decanting.',
    storeShortDescription: 'Organize grooming supplies, towels, and shower bottles in cramped 5x7 rental bathrooms with zero tile drilling, rust-proof spring tension poles, and amber decanting bottles.',
    storeFullListingMarkdown: `### The Small Bathroom Vanity & Shower Vertical Maximizer
*Tested in a 510 sq ft Toronto Rental Apartment*

Cramped 5x7 rental bathroom with a pedestal sink, no storage vanity, and shampoo bottles cluttering the tub edge?

**The Small Bathroom Vertical Maximizer Kit** recovers 14+ cubic feet of vertical storage using freestanding over-toilet shelf towers, rust-proof anodized aluminum tension poles, and amber pump bottle decanting.

#### What’s Included:
1. **Small Bathroom Maximizer Playbook (.PDF)**: 28 pages of over-toilet clearances, double shower curtain rods, and steam-safe adhesives.
2. **Zero-Drill Bath Blueprint Cards (.PDF)**: 4x6 cheat cards for flush button clearances and tension pole compression.
3. **Bathroom Clearance & Humidity Matrix (.CSV)**: Interactive spreadsheet calculating storage capacities and cure times.
4. **1-Click Bathroom Operating System (.Notion)**: Notion database for toiletries inventories, restock dates, and moisture defense logs.`,
    primaryActionLabel: 'Download Bathroom Maximizer Kit ($22 CAD)',
    interactiveToolType: 'bathroom-calculator',
    interactiveSections: [
      {
        id: 'sbm-tool-1',
        title: 'Bathroom Vertical Volume & Clearance Calculator',
        description: 'Calculate recovered volume above toilet and in tub corners.',
        content: { recoveredStorageCuFt: '14.2 cu ft', tileDrillDamage: '0%' }
      }
    ],
    printableWorksheetMarkdown: `# Small Bathroom Vertical Reset Checklist
SmallSpaceHome.ca • Pocket Cards

[ ] Over-Toilet Shelf: Assemble 3-tier freestanding tower with 3" flush clearance
[ ] Wall Bumpers: Apply 2 silicone pads to top rear frame to prevent sway
[ ] Shower Pole: Compress anodized aluminum tension pole in tub corner
[ ] Toiletries: Decant shampoo and wash into uniform amber pump bottles`,
    notionExportSchema: JSON.stringify({ name: "Small Bathroom Hub", version: "3.0.0" }),
    quickChecklist: [
      { id: '1', label: 'Install freestanding 3-tier over-toilet tower with silicone bumpers', tag: 'Over-Toilet' },
      { id: '2', label: 'Position rust-proof anodized aluminum tension pole in shower corner', tag: 'Shower Pole' },
      { id: '3', label: 'Decant shower liquids into uniform amber pump bottles', tag: 'Visual Decanting' }
    ],
    deliverableFiles: [
      { name: '01_Small_Bathroom_Vertical_Maximizer_Playbook.pdf', format: 'PDF Master Guide', size: '3.8 MB', description: 'Field guide to zero-drill bathroom storage & tension poles.' },
      { name: '02_Bathroom_Zero_Drill_Blueprint_Cards.pdf', format: 'Printable Cards', size: '1.5 MB', description: 'Cheat cards for over-toilet clearances & humidity prep.' },
      { name: '03_Bathroom_Clearance_And_Humidity_Matrix.csv', format: 'CSV / Sheets', size: '12 KB', description: 'Interactive clearance and moisture spreadsheet.' },
      { name: '04_Small_Bathroom_Notion_Hub.json', format: 'Notion Hub', size: '22 KB', description: 'Notion workspace for toiletries & restock logs.' }
    ],
    storeFaq: [
      { question: 'Will the tension shower pole rust in a steamy bathroom?', answer: 'No! The guide specifically specifies rust-proof anodized aluminum and grade 304 stainless steel hardware that will never discolor or leave rust marks on rental tub tiles.' }
    ],
    seoMeta: {
      metaTitle: 'Small Bathroom Vanity & Shower Vertical Maximizer | SmallSpaceHome',
      metaDescription: 'Gain 14 cubic feet of rust-proof storage in 5x7 rental bathrooms with zero tile drilling. Over-toilet towers, tension shower poles, and amber decanting.',
      keywords: ['small bathroom organization', 'renter bathroom storage hacks', 'pedestal sink storage', 'rust proof tension shower caddy']
    },
    customerWelcomeEmail: `Subject: Your Small Bathroom Maximizer Kit is ready! 🚿🧼

Hi friend,

Transform your compact bathroom into a serene spa sanctuary!

Your download bundle is ready:
1. 01_Small_Bathroom_Vertical_Maximizer_Playbook.pdf
2. 02_Bathroom_Zero_Drill_Blueprint_Cards.pdf
3. 03_Bathroom_Clearance_And_Humidity_Matrix.csv
4. 04_Small_Bathroom_Notion_Hub.json

To fresh, organized mornings,
The SmallSpaceHome Team`
  }
};
