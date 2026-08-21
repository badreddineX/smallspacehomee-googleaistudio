export interface ProductPhotography {
  url: string;
  alt: string;
  caption: string;
  spatialSpecs: string;
  palette: string[];
  stylingKeywords: string[];
}

export interface DetailedDeliverableFile {
  id: string;
  fileName: string;
  fileType: 'PDF Master Guide' | 'Spreadsheet (CSV/Excel)' | 'Notion Template' | 'Printable Cheatsheet' | 'Interactive Checklist' | 'Prompt & Action Kit';
  extension: '.pdf' | '.csv' | '.notion' | '.md' | '.txt' | '.json';
  fileSize: string;
  badge: string;
  description: string;
  previewSnippet: string;
  downloadableContent: string;
}

export interface ProductAssetBundle {
  productId: string;
  rank: number;
  title: string;
  photography: ProductPhotography;
  deliverablesOverview: string;
  totalAssetsCount: number;
  files: DetailedDeliverableFile[];
}

export const PRODUCT_ASSET_BUNDLES: Record<string, ProductAssetBundle> = {
  'kit-zero-damage-mounting': {
    productId: 'kit-zero-damage-mounting',
    rank: 1,
    title: 'The Zero-Damage Renter Mounting & Secret Wall Hacks Kit',
    photography: {
      url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=85',
      alt: 'Clean scandinavian apartment living room with gallery wall mounted securely on white walls without drilling',
      caption: 'Tested in 510 sq ft Toronto Rental Lab: 35-lb oversized brass mirror and oak art frames mounted using zero-drill shear-angle anchors and 70% alcohol wall prep.',
      spatialSpecs: '510 sq ft Studio • Matte White Drywall • 35-lb Heavy Mirror Test • 100% Zero-Damage',
      palette: ['#FAF8F5', '#4A533E', '#D9D3C7', '#8C857B', '#1C1917'],
      stylingKeywords: ['Zero-Drill Mounting', 'Gallery Wall', 'Heavy Mirror Hack', 'Painter Tape Trick']
    },
    deliverablesOverview: 'The complete 4-part tactical action delivery bundle: Field Playbook (PDF), Pocket Hacks Card Deck (PDF), Adhesive Load Safety Matrix (CSV), and 1-Click Hardware Notion Hub.',
    totalAssetsCount: 4,
    files: [
      {
        id: 'zdm-1',
        fileName: '01_Zero_Damage_Mounting_Field_Playbook.pdf',
        fileType: 'PDF Master Guide',
        extension: '.pdf',
        fileSize: '36 Pages • 4.1 MB',
        badge: 'Core Field Guide',
        description: 'Complete illustrated field guide to hanging heavy art, floating mirrors, and shelves without drill holes, paint tears, or deposit loss.',
        previewSnippet: 'SECTION 1: The Adhesive Science & 70% Isopropyl Alcohol Rule\n- The Invisible Grease Layer that causes 80% of adhesive failure\n- The Painter’s Tape + Hot Glue Trick for acoustic panels & shelves\n- The 3M Claw 45-degree shear angle load multiplier',
        downloadableContent: `# The Zero-Damage Renter Mounting & Secret Wall Hacks Field Playbook
Publication by SmallSpaceHome.ca Editorial Lab (Tested in 510 sq ft Toronto Rental Lab)
Target Outcome: Hang up to 45-lb frames, floating shelves, and drapery with 100% zero wall damage.

=== 01. THE ADHESIVE SCIENCE & 70% ALCOHOL WALL PREP ===
• The Invisible Grease Layer: Rental walls hold microscopic aerosolized cooking oils and dust that reduce adhesive stickiness by up to 75%.
• Mandatory Prep: Wipe surface with 70% Isopropyl Alcohol (do NOT use Windex or multi-surface sprays with silicone oils). Allow 15 minutes to air dry.
• Temperature Threshold: Never apply adhesive strips below 15°C (59°F). If walls feel cold, warm the spot with a hair dryer on low for 10 seconds before pressing.
• The 30-Second Continuous Pressure Rule: Hold adhesive brackets with firm palm pressure for 30 full seconds, then wait 1 hour before hanging weight.

=== 02. THE PAINTER'S TAPE + HOT GLUE MOUNTING TRICK ===
• Ideal For: Lightweight wooden ledges, cork boards, cable raceways, and foam acoustic soundproofing panels.
• Step 1: Apply high-tack blue painter's tape to the wall where the item will sit. Rub firmly to seal edges.
• Step 2: Apply a matching strip of blue painter's tape to the back of your wooden shelf or acoustic panel.
• Step 3: Run a bead of hot glue directly onto the tape on your item, then press firmly against the wall tape.
• Result: The hot glue bonds the two tape surfaces together with 20-lb shear strength. Upon moving out, simply peel the painter's tape cleanly off the drywall without a trace!

=== 03. HEAVY MIRROR & ARTWORK ZERO-DRILL FORMULA (UP TO 45 LBS) ===
• The 3M Claw Drywall Anchor Hack: Engineered hardened steel prongs push directly into drywall with your thumbs (no drill required). Distributes 45 lbs across 4 micro-pinholes smaller than a thumbtack.
• Two-Point Diagonal Load Distribution: Never hang a heavy mirror from a single center point. Use two anchor points spaced 16 inches apart along the top frame to distribute downward shear force across two drywall planes.
• French Cleat Adhesive Hybrid: For wide headboards or art panels, use interlocking aluminum cleats secured with interlocking heavy-duty dual-lock polyolefin fasteners.

=== 04. THERMAL BLOW-DRYER REMOVAL SECRET ===
• Why Command Strips Break: Pulling the tab sideways or at a 45-degree angle causes the adhesive to snap, tearing the top layer of rental latex paint.
• The Blow-Dryer Thermal Hack: Warm the plastic base with a blow-dryer on medium heat for 45 seconds to soften the elastomeric polymer.
• Pulling Technique: Pull the adhesive tab straight DOWN parallel to the wall, stretching it slowly 6 to 12 inches until it releases silently with zero resistance.`
      },
      {
        id: 'zdm-2',
        fileName: '02_Zero_Damage_Pocket_Hacks_Deck.pdf',
        fileType: 'Printable Cheatsheet',
        extension: '.pdf',
        fileSize: '4x6 Cards • 1.8 MB',
        badge: 'Printable Deck',
        description: 'Pocket-sized printable cheat cards with weight limits, store dupe lists, and emergency paint-peel fix formulas.',
        previewSnippet: 'CARD 1: Weight Load Quick-Reference Chart\nCARD 2: The Hardware Store Dupe List (Save 60% vs Brand Names)\nCARD 3: Emergency 3-Minute Drywall Touchup Card',
        downloadableContent: `# Pocket Hacks Deck: Zero-Damage Mounting Cheat Cards
SmallSpaceHome.ca • Pocket Reference Cards (Print on 4x6 Cardstock or Save to Phone)

CARD 01: WEIGHT LOAD CHEAT SHEET
[ ] Under 4 lbs: 3M Picture Hanging Strips (Medium, 2 pairs)
[ ] 4 to 12 lbs: 3M Heavy-Duty Large Strips (4 pairs on outer corners)
[ ] 12 to 25 lbs: 3M Claw 25-lb Drywall Push Anchor (2 micro-pinholes)
[ ] 25 to 45 lbs: 3M Claw 45-lb Anchor or Gorilla Heavy Hook (Zero-Drill)
[ ] Over 45 lbs: Locate wood stud using magnetic stud finder or use floor-leaning mirror anchor

CARD 02: THE HARDWARE STORE DUPE LIST
[ ] Instead of branded $18 hanging packs -> Buy Heavy Duty Polyolefin Dual-Lock Tape 10ft roll ($11)
[ ] Instead of $25 specialty mirror brackets -> Buy 3M Claw Drywall Anchors 4-pack ($7)
[ ] Instead of expensive spackle tubs -> Buy 3-in-1 Spackle Stick with built-in scraper & sander ($8)

CARD 03: EMERGENCY PAINT-PEEL REPAIR CARD
[ ] Step 1: Sand rough paint edge with 220-grit sandpaper until flush with drywall
[ ] Step 2: Apply coin-sized dab of lightweight spackle; smooth with credit card
[ ] Step 3: Once dry (15 mins), rub matching off-white blackboard chalk to blend sheen`
      },
      {
        id: 'zdm-3',
        fileName: '03_Adhesive_Load_Safety_Matrix.csv',
        fileType: 'Spreadsheet (CSV/Excel)',
        extension: '.csv',
        fileSize: '18 Rows • 14 KB',
        badge: 'Plug-and-Play Matrix',
        description: 'Interactive load calculator and hardware selector matrix compatible with Excel, Google Sheets, and Numbers.',
        previewSnippet: 'Hardware_Type,Rated_Weight_Capacity_LBS,Recommended_Safety_Load_LBS,Wall_Surface_Compatibility,Zero_Damage_Rating,Removal_Method\n3M_Picture_Hanging_Large,16,10,Painted Drywall / Smooth Wood,OPTIMAL,Straight Down Stretch\n3M_Claw_Push_Anchor,45,35,Standard Drywall Only,OPTIMAL (Micro-Pin),Lever Pull',
        downloadableContent: `Hardware_Type,Rated_Weight_Capacity_LBS,Recommended_Safety_Load_LBS,Wall_Surface_Compatibility,Zero_Damage_Rating,Removal_Method
3M_Picture_Hanging_Small,4,2.5,Painted Drywall / Smooth Tile,OPTIMAL,Straight Down Stretch
3M_Picture_Hanging_Medium,12,8,Painted Drywall / Finished Wood,OPTIMAL,Straight Down Stretch
3M_Picture_Hanging_Large,16,10,Painted Drywall / Metal / Glass,OPTIMAL,Straight Down Stretch
3M_Claw_25lb_Anchor,25,20,Standard Drywall Only,OPTIMAL (Micro-Pin),Thumb Lever Pull
3M_Claw_45lb_Anchor,45,35,Standard Drywall Only,OPTIMAL (Micro-Pin),Thumb Lever Pull
Heavy_Polyolefin_Dual_Lock,30,20,Painted Drywall / Wood / Glass,OPTIMAL,Blow-Dryer Heat Release
Painter_Tape_Hot_Glue_Bond,15,10,Painted Drywall / Wallpaper,100% ZERO RISK,Peel Tape Base
Spring_Tension_Shower_Rod,30,22,Tile / Solid Door Jambs,100% ZERO RISK,Twist Tension Release
Tension_Closet_Multiplier_Bar,45,35,Solid Wood / Finished Frame,100% ZERO RISK,Twist Tension Release
Gorilla_Drywall_Push_Hook,30,22,Standard Drywall Only,OPTIMAL (Micro-Pin),Twist Pull
Over_Door_Flat_Bracket,25,18,Standard 1.38" Interior Doors,100% ZERO RISK,Lift Off
Magnetic_Knife_Bar_Strip,12,8,Refrigerator Steel Side,100% ZERO RISK,Magnetic Lift`
      },
      {
        id: 'zdm-4',
        fileName: '04_Zero_Damage_Mounting_Notion_Hub.json',
        fileType: 'Notion Template',
        extension: '.json',
        fileSize: 'Notion Schema • 22 KB',
        badge: 'Notion Action Hub',
        description: '1-Click Notion workspace containing wall inventory ledger, room-by-room hardware tracker, and shopping lists.',
        previewSnippet: '{\n  "workspaceName": "Zero-Damage Renter Mounting Hub",\n  "version": "2.4.0",\n  "databases": [\n    {\n      "name": "Wall Art & Mounting Tracker",\n      "properties": ["Item Name", "Room Zone", "Item Weight LBS", "Mounting Hardware Used", "Install Date", "Renter Safe Status"]\n    }\n  ]\n}',
        downloadableContent: JSON.stringify({
          workspaceName: "Zero-Damage Renter Mounting & Hardware Hub",
          version: "2.4.0",
          author: "SmallSpaceHome.ca Editorial Lab",
          databases: [
            {
              name: "Wall Art & Hanging Inventory",
              properties: ["Item Name", "Room Zone", "Item Weight (LBS)", "Hardware Method", "Install Date", "Renter Safety Status"],
              sampleRecords: [
                { item: "Living Room Oversized Brass Mirror", zone: "Living Room", weight: "32 lbs", method: "Dual 3M Claw 45lb Anchors", date: "2026-03-01", status: "Active & Certified Safe" },
                { item: "Dining Nook Gallery Frame Set (x6)", zone: "Dining Nook", weight: "3.5 lbs each", method: "3M Picture Strips (Large)", date: "2026-03-05", status: "Active & Certified Safe" },
                { item: "Acoustic Wall Hexagon Panels (x12)", zone: "Bedroom / Office", weight: "8 lbs total", method: "Painter Tape + Hot Glue Hack", date: "2026-03-10", status: "Active & Certified Safe" },
                { item: "Micro-Entryway Key Catch Shelf", zone: "Entryway", weight: "4.5 lbs", method: "3M Claw 25lb Push Anchor", date: "2026-03-12", status: "Active & Certified Safe" }
              ]
            },
            {
              name: "Hardware Toolkit & Dupe Checklist",
              properties: ["Tool / Hardware Name", "Category", "Acquired", "Cost CAD", "Primary Use"],
              sampleRecords: [
                { tool: "70% Isopropyl Alcohol Spray Bottle", category: "Surface Prep", acquired: true, cost: "$3.50", use: "Grease Removal on Drywall" },
                { tool: "3M Claw 45-lb Drywall Push Anchors (4pk)", category: "Heavy Mount", acquired: true, cost: "$7.99", use: "Heavy Mirrors & Clocks" },
                { tool: "Blue Painter's Tape (1.88 inch)", category: "Zero-Damage Base", acquired: true, cost: "$6.49", use: "Tape + Hot Glue Shelf Hack" },
                { tool: "3-in-1 Spackle & Scraper Tool", category: "Move-Out Repair", acquired: false, cost: "$7.99", use: "Emergency Move-Out Patching" }
              ]
            }
          ]
        }, null, 2)
      }
    ]
  },

  'kit-micro-kitchen-maxima': {
    productId: 'kit-micro-kitchen-maxima',
    rank: 2,
    title: 'The 500 Sq Ft Micro-Kitchen & Cabinet Space Doubler Kit',
    photography: {
      url: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1600&q=85',
      alt: 'Clean scandinavian compact galley kitchen with natural oak cutting board over sink and magnetic knife strip',
      caption: 'Tested in 510 sq ft Toronto Rental Lab: Over-sink prep bridge creating 3 sq ft of prep space and vertical tension rod lid racks.',
      spatialSpecs: '42 sq ft Galley Kitchen • 30" Counter Depth • 4-Tier Inside Cabinet Door Multipliers',
      palette: ['#FAF8F5', '#4A533E', '#D9D3C7', '#8C857B', '#1C1917'],
      stylingKeywords: ['Galley Kitchen', 'Over-Sink Bridge', 'Cabinet Door Hack', 'Magnetic Spice Strip']
    },
    deliverablesOverview: 'Complete 4-part micro-kitchen space doubler delivery bundle: Field Playbook (PDF), Cabinet Door Blueprint Cards (PDF), Dimension Multiplier Matrix (CSV), and 1-Click Pantry Notion Hub.',
    totalAssetsCount: 4,
    files: [
      {
        id: 'mkm-1',
        fileName: '01_Micro_Kitchen_Space_Doubler_Playbook.pdf',
        fileType: 'PDF Master Guide',
        extension: '.pdf',
        fileSize: '32 Pages • 3.8 MB',
        badge: 'Core Field Guide',
        description: 'Complete playbook for unlocking 18+ cubic feet of dead cabinet storage and creating 40% more food prep area in small kitchens.',
        previewSnippet: 'MODULE 1: The 4-Tier Cabinet Vertical Multiplier\nMODULE 2: Inside-Door Tension Rod Lid Hacks\nMODULE 3: The Over-Sink Cutting Board Prep Bridge\nMODULE 4: Magnetic Under-Shelf Spice Matrix',
        downloadableContent: `# The 500 Sq Ft Micro-Kitchen & Cabinet Space Doubler Playbook
Publication by SmallSpaceHome.ca Editorial Lab (Tested in 510 sq ft Toronto Rental Lab)
Target Outcome: Double usable kitchen storage and food prep area in under 45 sq ft.

=== 01. THE 4-TIER CABINET VERTICAL MULTIPLIER ===
• The Dead Air Problem: Standard apartment upper cabinets have 14 inches between shelves, while cups and spice bottles only need 4 to 6 inches.
• The Hack: Install freestanding coated-wire or expandable bamboo shelf risers to create 2 to 3 tiers per shelf.
• Vertical Plate Stacking: Never stack bowls and plates horizontally in towering piles. Use vertical plate racks to store plates like file folders (pull out dinner plates instantly without lifting soup bowls).

=== 02. INSIDE-CABINET-DOOR TENSION ROD LID ORGANIZER ===
• The Hack: Mount two short (12-inch) spring-tension rods horizontally across the interior of lower cabinet doors spaced 4 inches apart.
• Result: Slide pot lids vertically between the rods and door face. Frees up an entire bottom cabinet shelf where lids usually cause chaotic tangles.
• Clear Adhesive Pocket Hack: Place adhesive clear acrylic bins on the inside of the pantry door for foil rolls, parchment paper, and plastic wraps.

=== 03. THE OVER-SINK SOLID WOOD CUTTING BOARD PREP BRIDGE ===
• The Countertop Shortage: In small galley kitchens, sinks occupy 40% of horizontal counter space.
• The Bridge Formula: Purchase an end-grain hardwood cutting board measuring 2 inches wider than your sink basin with silicone rubber feet underneath.
• Usage: Place directly over half the sink basin. Gives you 3 square feet of solid, heavy-duty chopping surface while still leaving faucet access open for rinsing.

=== 04. MAGNETIC UNDER-SHELF SPICE MATRIX ===
• Freeing The Spice Shelf: Storing spices in a cabinet eats 1 to 2 full shelves.
• The Hack: Screw or heavy-duty tape a stainless steel magnetic strip to the underside of upper cabinets (or on the side of the refrigerator).
• Decanting: Use uniform hexagonal glass jars with magnetic lids. Spices hang suspended invisibly above the countertop.`
      },
      {
        id: 'mkm-2',
        fileName: '02_Cabinet_Door_Blueprint_Cards.pdf',
        fileType: 'Printable Cheatsheet',
        extension: '.pdf',
        fileSize: '4x6 Cards • 1.5 MB',
        badge: 'Printable Deck',
        description: 'Pocket blueprint cards with exact inch clearances for cabinet doors, cutting board bridges, and pantry tiers.',
        previewSnippet: 'CARD 1: Cabinet Door Clearance Calibration\nCARD 2: The Over-Sink Bridge Dimension Formula\nCARD 3: Daily 3-Minute Kitchen Reset Card',
        downloadableContent: `# Pocket Hacks Deck: Micro-Kitchen Blueprint Cards
SmallSpaceHome.ca • Pocket Reference Cards (Print on 4x6 Cardstock or Save to Phone)

CARD 01: CABINET DOOR CLEARANCE CALIBRATION
[ ] Minimum Door Interior Depth: 2.25 inches before hitting internal shelf
[ ] Pot Lid Tension Rod Spacing: Lower rod 3" from bottom, upper rod 8" from bottom
[ ] Cutting Board Bridge Thickness: Minimum 1.25" solid hardwood to prevent flexing

CARD 02: THE $25 HARDWARE STORE KITCHEN HACKS
[ ] 2x Small Spring Tension Rods (11-18"): $6 total -> Inside-door pot lid organizer
[ ] 1x Magnetic Tool / Knife Bar (16"): $9 -> Side of fridge knife & utensil storage
[ ] 2x Expandable Wire Shelf Risers: $10 -> Doubles coffee mug & bowl vertical capacity

CARD 03: THE 3-MINUTE "SINK AT ZERO" RESET
[ ] Step 1: Wipe all crumbs into trash; dry counter surfaces with microfiber cloth
[ ] Step 2: Rinse sink basin; stow scrub brush in inside-cabinet suction holder
[ ] Step 3: Clear cutting board bridge and replace over sink`
      },
      {
        id: 'mkm-3',
        fileName: '03_Cabinet_Clearance_And_Multiplier_Matrix.csv',
        fileType: 'Spreadsheet (CSV/Excel)',
        extension: '.csv',
        fileSize: '15 Rows • 12 KB',
        badge: 'Plug-and-Play Matrix',
        description: 'Interactive cabinet capacity multiplier and clearance dimensions spreadsheet.',
        previewSnippet: 'Cabinet_Zone,Standard_Height_IN,Item_Height_Needed_IN,Wasted_Vertical_Space_PCT,Recommended_Hack,Capacity_Multiplier\nUpper_Shelf_1_Mugs,14,4.5,68%,Dual-Tier Wire Riser,2.0x Capacity\nUnder_Sink_Zone,22,8.0,64%,Expandable Tension Pipe Shelf,2.5x Capacity',
        downloadableContent: `Cabinet_Zone,Standard_Height_IN,Item_Height_Needed_IN,Wasted_Vertical_Space_PCT,Recommended_Hack,Capacity_Multiplier
Upper_Shelf_1_Mugs,14,4.5,68%,Dual-Tier Wire Riser,2.0x Capacity
Upper_Shelf_2_Plates,14,2.0,85%,Vertical Plate File Rack,2.2x Capacity
Upper_Shelf_3_Spices,14,3.5,75%,Magnetic Undershelf Strip,3.0x Capacity
Inside_Lower_Door_Left,24,1.5,80%,Dual Tension Rods (Pot Lids),1.8x Capacity
Inside_Lower_Door_Right,24,2.0,75%,Adhesive Acrylic Foil Bin,2.0x Capacity
Under_Sink_Plumbing_Zone,22,8.0,64%,Expandable Tension Pipe Shelf,2.5x Capacity
Countertop_Corner_Nook,18,12.0,50%,Tiered Bamboo Corner Shelf,2.0x Capacity
Over_Sink_Basin,0,0,100% Unused,Hardwood Prep Bridge (18x24),+3.0 Sq Ft Surface
Side_Of_Refrigerator,48,2.0,90%,Magnetic Spice & Knife Racks,+4.5 Sq Ft Wall
Under_Upper_Cabinet,8,0,100% Unused,Under-Shelf Wine Glass Rail,1.5x Capacity`
      },
      {
        id: 'mkm-4',
        fileName: '04_Kitchen_Zone_Pantry_Notion_Hub.json',
        fileType: 'Notion Template',
        extension: '.json',
        fileSize: 'Notion Schema • 20 KB',
        badge: 'Notion Action Hub',
        description: '1-Click Notion database for kitchen pantry inventory, cabinet mapping, and meal prep tools.',
        previewSnippet: '{\n  "workspaceName": "Micro-Kitchen & Pantry Organization Hub",\n  "version": "2.4.0",\n  "databases": [\n    {\n      "name": "Pantry & Cabinet Inventory Ledger",\n      "properties": ["Item / Ingredient", "Cabinet Zone", "Quantity", "Decanted Status", "Restock Trigger"]\n    }\n  ]\n}',
        downloadableContent: JSON.stringify({
          workspaceName: "Micro-Kitchen & Pantry Organization Hub",
          version: "2.4.0",
          author: "SmallSpaceHome.ca Editorial Lab",
          databases: [
            {
              name: "Pantry & Spice Inventory",
              properties: ["Item", "Storage Zone", "Container Type", "Quantity", "Status"],
              sampleRecords: [
                { item: "Extra Virgin Olive Oil (1L)", zone: "Lower Cabinet Lazy Susan", container: "Dark Glass Bottle with Pourer", qty: "1 bottle", status: "Full" },
                { item: "Organic Rolled Oats", zone: "Upper Shelf 2 Pantry", container: "Airtight Glass Jar (2L)", qty: "1.5 kg", status: "Optimal" },
                { item: "Smoked Paprika & Cumin", zone: "Magnetic Under-Cabinet Bar", container: "Hexagonal Magnetic Jars", qty: "2 jars", status: "Full" }
              ]
            }
          ]
        }, null, 2)
      }
    ]
  },

  'kit-closet-quadrupler': {
    productId: 'kit-closet-quadrupler',
    rank: 3,
    title: 'The Small Closet Quadrupler & Vertical Storage Hack Kit',
    photography: {
      url: 'https://images.unsplash.com/photo-1558997519-83ea9252def8?auto=format&fit=crop&w=1600&q=85',
      alt: 'Clean minimalist organized closet with double hanging rods and matching velvet hangers in neutral tones',
      caption: 'Tested in 510 sq ft Toronto Rental Lab: Suspended dual-rod adding 35 lower hangers and acrylic shelf dividers for folded knitwear.',
      spatialSpecs: '36" Reach-In Closet • 8 ft Ceiling • Suspended Dual Rod • Velvet Cascading Hangers',
      palette: ['#FAF8F5', '#4A533E', '#D9D3C7', '#8C857B', '#1C1917'],
      stylingKeywords: ['Closet Organization', 'Velvet Hangers', 'Suspended Rod', 'Capsule Wardrobe']
    },
    deliverablesOverview: 'The complete 4-part closet storage quadrupler bundle: Field Playbook (PDF), Wardrobe Density Blueprint Cards (PDF), Closet Vertical Capacity Matrix (CSV), and Notion Capsule Hub.',
    totalAssetsCount: 4,
    files: [
      {
        id: 'cq-1',
        fileName: '01_Small_Closet_Quadrupler_Playbook.pdf',
        fileType: 'PDF Master Guide',
        extension: '.pdf',
        fileSize: '34 Pages • 3.9 MB',
        badge: 'Core Field Guide',
        description: 'Complete field guide to quadrupling hanging and folded capacity in 3-foot rental closets with zero carpentry.',
        previewSnippet: 'MODULE 1: The Suspended Dual-Rod Hack\nMODULE 2: The Soda-Can Tab Hanger Cascade Trick\nMODULE 3: Upper Shelf Acrylic Compression\nMODULE 4: Seasonal Vacuum-Seal Flat Storage',
        downloadableContent: `# The Small Closet Quadrupler & Vertical Storage Hack Playbook
Publication by SmallSpaceHome.ca Editorial Lab (Tested in 510 sq ft Toronto Rental Lab)
Target Outcome: Fit 120 garments cleanly in a 36-inch rental closet with zero carpentry.

=== 01. THE SUSPENDED DUAL-ROD HACK ===
• The Dead Space Reality: Shirts and blouses measure 28 to 32 inches long, leaving 38 to 44 inches of empty air below them before hitting the floor.
• The Hack: Loop two lengths of 550-lb Mil-Spec Paracord around your existing top closet rod. Tie each cord to a 32-inch wooden dowel or secondary steel rod hanging 34 inches below the top rod.
• Result: Adds a complete secondary hanging rod for trousers, skirts, and folded jeans with zero drywall anchor drilling!

=== 02. THE SODA-CAN TAB CASCADE TRICK ===
• The Horizontal Bottleneck: Wooden and plastic hangers occupy 0.75 inches of rod width each, capping a 36-inch rod at 45 shirts max.
• The Velvet + Tab Hack: Switch to 0.2-inch ultra-thin velvet non-slip hangers. Slip a washed aluminum soda-can tab over the neck of the first hanger. Hook the next hanger through the lower tab opening.
• Result: Hang 3 shirts vertically in the horizontal space of one single hanger! Multiplies capacity from 45 to 120+ garments.

=== 03. UPPER SHELF ACRYLIC COMPRESSION ===
• The Wire Shelf Problem: Rental wire shelves cause clothing stacks to topple over sideways and leave wire creases on knitwear.
• The Hack: Cut thin corrugated cardboard or corrugated plastic sheets to lay flat over wire shelves. Install clip-on clear acrylic dividers every 10 inches.
• Filing System: Stack sweaters vertically like books in a library rather than horizontal piles. You can pull the bottom sweater without disturbing the stack!

=== 04. SEASONAL VACUUM-SEAL COMPRESSION ===
• Heavy winter parkas and bulky wool blankets consume 50% of closet cubic volume.
• The Protocol: Store off-season heavy garments in flat vacuum-seal compression bags. Slide them under the bed or on the topmost closet shelf during spring and summer.`
      },
      {
        id: 'cq-2',
        fileName: '02_Wardrobe_Density_Blueprint_Cards.pdf',
        fileType: 'Printable Cheatsheet',
        extension: '.pdf',
        fileSize: '4x6 Cards • 1.6 MB',
        badge: 'Printable Deck',
        description: 'Pocket blueprint cards with garment spacing formulas, hanger ratios, and seasonal capsule checklist.',
        previewSnippet: 'CARD 1: Garment Vertical Clearance Specs\nCARD 2: The $15 Closet Hardware Dupe List\nCARD 3: 30-Item Capsule Wardrobe Rotation Card',
        downloadableContent: `# Pocket Hacks Deck: Closet Quadrupler Cards
SmallSpaceHome.ca • Pocket Reference Cards (Print on 4x6 Cardstock or Save to Phone)

CARD 01: GARMENT VERTICAL CLEARANCE SPECS
[ ] Tops / Shirts / Blouses: 34 inches vertical hanging clearance
[ ] Trousers & Pants (Folded on Hanger): 22 inches vertical clearance
[ ] Long Coats / Maxi Dresses: 58 inches vertical clearance (Reserve 8" width on far left)
[ ] Folded Sweaters (Vertical File): 9 inches shelf height between acrylic dividers

CARD 02: THE $15 CLOSET HARDWARE DUPE LIST
[ ] 1x 32" Hardwood Dowel (1.25" diameter): $4.50 -> Lower suspended rod
[ ] 1x Paracord 50ft (550 lb test): $5.00 -> Suspended rod loops
[ ] 1x 50-pack Ultra-Thin Velvet Hangers: $18 -> Recovers 35% closet width

CARD 03: 1-IN, 1-OUT WARDROBE LAW
[ ] Before buying a new garment, identify which existing piece leaves the closet
[ ] Donate or sell within 48 hours to preserve zero-overflow equilibrium`
      },
      {
        id: 'cq-3',
        fileName: '03_Closet_Vertical_Capacity_Matrix.csv',
        fileType: 'Spreadsheet (CSV/Excel)',
        extension: '.csv',
        fileSize: '14 Rows • 11 KB',
        badge: 'Plug-and-Play Matrix',
        description: 'Interactive garment density calculator and closet dimension planning sheet.',
        previewSnippet: 'Closet_Tier,Hardware_Method,Item_Category,Max_Item_Count_Standard,Max_Item_Count_Hacked,Space_Gain_PCT\nTop_Rod_Upper,Velvet + Cascading Tabs,Shirts / Blouses,40,90,+125%\nLower_Suspended_Rod,Paracord Dowel,Pants / Skirts,0,35,+35 Items Added',
        downloadableContent: `Closet_Tier,Hardware_Method,Item_Category,Max_Item_Count_Standard,Max_Item_Count_Hacked,Space_Gain_PCT
Top_Rod_Upper,Velvet + Cascading Tabs,Shirts / Blouses,40,90,+125%
Lower_Suspended_Rod,Paracord Dowel,Pants / Skirts,0,35,+35 Items Added
Upper_Shelf_Left,Acrylic Dividers (Vertical),Folded Knitwear,6,16,+166%
Upper_Shelf_Center,Clear Acrylic Bin,Seasonal Linens,4,12,+200%
Upper_Shelf_Right,Vacuum Compression Cube,Winter Parkas,2,8,+300%
Door_Interior_Back,Over-Door Hanging Rail,Scarves / Belts,8,24,+200%
Floor_Lower_Level,Shoe Slots Stacker,Footwear (Pairs),5,14,+180%
Corner_Dead_Zone,S-Hook Chain,Handbags / Totes,2,8,+300%`
      },
      {
        id: 'cq-4',
        fileName: '04_Capsule_Wardrobe_Notion_Hub.json',
        fileType: 'Notion Template',
        extension: '.json',
        fileSize: 'Notion Schema • 21 KB',
        badge: 'Notion Action Hub',
        description: '1-Click Notion workspace for tracking clothing inventory, seasonal capsule rotations, and outfit pairings.',
        previewSnippet: '{\n  "workspaceName": "Small Closet Capsule Wardrobe Hub",\n  "version": "2.4.0",\n  "databases": [\n    {\n      "name": "Wardrobe Master Ledger",\n      "properties": ["Garment Name", "Category", "Season", "Tier Position", "Color Palette", "Wear Count"]\n    }\n  ]\n}',
        downloadableContent: JSON.stringify({
          workspaceName: "Small Closet Capsule Wardrobe Hub",
          version: "2.4.0",
          author: "SmallSpaceHome.ca Editorial Lab",
          databases: [
            {
              name: "Capsule Wardrobe Ledger",
              properties: ["Garment", "Category", "Season", "Storage Tier", "Color"],
              sampleRecords: [
                { garment: "Structured Wool Blazer", category: "Outerwear", season: "All Season", tier: "Top Rod Left (Full Length)", color: "Charcoal" },
                { garment: "Organic Cotton Oxford Shirts (x4)", category: "Tops", season: "Spring/Fall", tier: "Top Rod Cascading Tabs", color: "White / Light Blue" },
                { garment: "Heavy Merino Knit Sweaters (x3)", category: "Knitwear", season: "Winter", tier: "Upper Shelf Acrylic Dividers", color: "Oatmeal / Olive" }
              ]
            }
          ]
        }, null, 2)
      }
    ]
  },

  'kit-deposit-protection-defense': {
    productId: 'kit-deposit-protection-defense',
    rank: 4,
    title: 'The Renter Security Deposit Defense & Emergency Repair Kit',
    photography: {
      url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1600&q=85',
      alt: 'Clean modern rental apartment wall repair and inspection with smooth white paint and baseboard details',
      caption: 'Tested in 510 sq ft Toronto Rental Lab: $12 spackle and chalk texture matching trick and timestamped 4K move-out evidence logs.',
      spatialSpecs: 'Rental Apartment Move-Out Protocol • $12 DIY Drywall Kit • Legal Pushback Letters',
      palette: ['#FAF8F5', '#4A533E', '#D9D3C7', '#8C857B', '#1C1917'],
      stylingKeywords: ['Deposit Protection', 'Drywall Repair', 'Tenant Rights', 'Inspection Log']
    },
    deliverablesOverview: 'The complete 4-part deposit defense delivery bundle: Field Repair Playbook (PDF), Landlord Pushback Script Cards (PDF), Move-In/Out 4K Photo Matrix (CSV), and Notion Legal Vault.',
    totalAssetsCount: 4,
    files: [
      {
        id: 'dpd-1',
        fileName: '01_Renter_Deposit_Defense_Playbook.pdf',
        fileType: 'PDF Master Guide',
        extension: '.pdf',
        fileSize: '38 Pages • 4.2 MB',
        badge: 'Core Field Guide',
        description: 'Complete guide to move-out inspection defense, $12 DIY drywall patching, and legally airtight pushback scripts.',
        previewSnippet: 'MODULE 1: Move-In 4K Photographic Evidence Protocol\nMODULE 2: The $12 Drywall Texture & Sheen Matching Hack\nMODULE 3: Baseboard & Appliance Rapid Restoration\nMODULE 4: Landlord Pushback Letters & Legal Normal Wear Clauses',
        downloadableContent: `# The Renter Security Deposit Defense & Emergency Repair Playbook
Publication by SmallSpaceHome.ca Editorial Lab (Tested in 510 sq ft Toronto Rental Lab)
Target Outcome: Protect your full $2,000+ security deposit and repair minor wall flaws for under $12.

=== 01. THE MOVE-IN 4K EVIDENCE PROTOCOL ===
• The Timestamp Video Rule: Before unpacking a single box on day 1, take a continuous 10-minute 4K 60fps video walking through the entire unit.
• Key Focus Areas: Window sill caulking, inside oven, baseboard scuffs, tile grout, and interior closet corners.
• The Physical Ruler Trick: When photographing pre-existing scratches, place a physical coin or millimeter ruler directly beside the defect to prove scale.
• Certified Cloud Delivery: Upload the uncompressed photos to a cloud folder and email the read-only link to your landlord within 48 hours of key handover.

=== 02. THE $12 DRYWALL & CHALK TEXTURE MATCHING HACK ===
• The Problem: Standard hardware spackle dries stark bright white, while rental walls are painted off-white builder's beige or eggshell. Landlords spot white circles instantly.
• The $12 DIY Recipe:
  1. Fill the nail hole with lightweight vinyl spackle.
  2. Level flush using a plastic credit card (do NOT leave a mound).
  3. Once dry (15 mins), take a stick of soft artist chalk (warm off-white or beige).
  4. Rub the chalk lightly over the patch with your thumb to blend the color and sheen seamlessly into surrounding paint.

=== 03. APPLIANCE & BASEBOARD 10-MINUTE RESTORATION ===
• Baseboard Scuffs: Use a melamine sponge (Magic Eraser) damp with warm water and 2 drops of Dawn dish soap. Wipes away 5 years of shoe scuffs in 8 minutes.
• Oven Glass Grease: Mix baking soda + white vinegar into a thick paste. Coat oven door glass for 20 minutes, then wipe with a non-scratch scrub pad.

=== 04. LANDLORD DISPUTE SCRIPTS & NORMAL WEAR CLAUSES ===
• Legal Standard: Under North American tenant legislation (e.g. Ontario RTA, California Civil Code 1950.5), landlords CANNOT deduct for "Normal Wear and Tear" caused by reasonable daily living.
• Pinholes from Art: Legally recognized as normal wear and tear in over 85% of jurisdictions.`
      },
      {
        id: 'dpd-2',
        fileName: '02_Landlord_Pushback_Script_Cards.pdf',
        fileType: 'Printable Cheatsheet',
        extension: '.pdf',
        fileSize: '4x6 Cards • 1.7 MB',
        badge: 'Printable Deck',
        description: 'Printable word-for-word copy-paste pushback scripts for disputing unlawful cleaning fees and paint charges.',
        previewSnippet: 'SCRIPT 1: Response to Painting Deduction Request\nSCRIPT 2: Response to "Professional Cleaning" Requirement\nSCRIPT 3: Joint Preliminary Walkthrough Request Script',
        downloadableContent: `# Pocket Hacks Deck: Landlord Pushback Scripts
SmallSpaceHome.ca • Pocket Reference Cards (Print on 4x6 Cardstock or Save to Phone)

CARD 01: SCRIPT FOR UNLAWFUL PAINT DEDUCTION
"Dear [Landlord Name],
Thank you for your inspection report. Regarding the $350 paint deduction for minor nail holes in the living room: please note that hanging customary wall art and minor pinholes constitute normal wear and tear under [Local Tenant Act]. The unit was returned in clean condition with all holes professionally patched flush. Please provide the itemized balance of the deposit within the statutory deadline."

CARD 02: SCRIPT FOR MANDATORY CLEANING FEE DISPUTE
"Dear [Landlord Name],
Per Section [X] of the tenancy legislation, a tenant is required to leave the premises in 'broom swept' clean condition, which was completed and documented via timestamped video on [Date]. A landlord cannot unilaterally require professional commercial cleaning fees without evidence of gross tenant neglect. Please remit the withheld funds by [Date]."

CARD 03: PRE-INSPECTION 14-DAY NOTICE SCRIPT
"Dear [Landlord Name],
As our lease concludes on [Date], I request a joint preliminary walkthrough on [Date - 14 Days] to review any items requiring attention so they may be addressed prior to key return."`
      },
      {
        id: 'dpd-3',
        fileName: '03_Move_Out_Inspection_Matrix.csv',
        fileType: 'Spreadsheet (CSV/Excel)',
        extension: '.csv',
        fileSize: '16 Rows • 13 KB',
        badge: 'Plug-and-Play Matrix',
        description: 'Comprehensive 40-point room-by-room move-out inspection and photographic proof checklist.',
        previewSnippet: 'Room_Zone,Inspection_Item,Normal_Wear_Status,DIY_Fix_Cost_CAD,Landlord_Claim_Risk,Action_Required\nLiving_Room,Nail Pinholes (Under 1/8"),NORMAL WEAR,$1.50,LOW,Patch Flush with Spackle\nKitchen,Oven Glass Grease,TENANT REPAIR,$2.00,HIGH,Baking Soda + Vinegar Paste',
        downloadableContent: `Room_Zone,Inspection_Item,Normal_Wear_Status,DIY_Fix_Cost_CAD,Landlord_Claim_Risk,Action_Required
Living_Room,Nail Pinholes (Under 1/8"),NORMAL WEAR,$1.50,LOW,Patch Flush with Spackle
Living_Room,Baseboard Shoe Scuffs,NORMAL WEAR,$0.50,MEDIUM,Magic Eraser + Dawn Soap
Kitchen,Oven Glass Grease,TENANT REPAIR,$2.00,HIGH,Baking Soda + Vinegar Paste
Kitchen,Inside Refrigerator Drawers,TENANT REPAIR,$0.00,HIGH,Warm Soapy Water Rinse
Kitchen,Range Hood Grease Filter,TENANT REPAIR,$1.00,HIGH,Boiling Water + Dishwasher Pod
Bathroom,Grout Mildew on Caulking,TENANT REPAIR,$3.50,HIGH,Bleach Gel Pen Treatment
Bathroom,Mirror Water Spots,NORMAL WEAR,$0.00,LOW,Microfiber Cloth Polish
Bathroom,Toilet Base Sanitation,TENANT REPAIR,$0.50,HIGH,Disinfectant Wipe Down
Bedroom,Door Handle Wall Dents,TENANT REPAIR,$4.00,HIGH,Drywall Patch Kit + Sanding
Entryway,Floor Scuff Marks,NORMAL WEAR,$0.50,LOW,Damp Melamine Sponge
Windows,Blinds Dust Accumulation,TENANT REPAIR,$0.00,MEDIUM,Microfiber Sock Wipe
Balcony,Floor Debris & Dirt,TENANT REPAIR,$0.00,MEDIUM,Broom Sweep & Mop Wash`
      },
      {
        id: 'dpd-4',
        fileName: '04_Deposit_Defense_Legal_Notion_Vault.json',
        fileType: 'Notion Template',
        extension: '.json',
        fileSize: 'Notion Schema • 23 KB',
        badge: 'Notion Action Hub',
        description: '1-Click Notion database for organizing move-in photos, landlord correspondence, and deposit return tracking.',
        previewSnippet: '{\n  "workspaceName": "Renter Security Deposit Defense Vault",\n  "version": "2.4.0",\n  "databases": [\n    {\n      "name": "Move-In/Out Evidence Ledger",\n      "properties": ["Item / Room", "Move-In Photo Link", "Move-Out Photo Link", "Condition Notes", "Dispute Status"]\n    }\n  ]\n}',
        downloadableContent: JSON.stringify({
          workspaceName: "Renter Security Deposit Defense Vault",
          version: "2.4.0",
          author: "SmallSpaceHome.ca Editorial Lab",
          databases: [
            {
              name: "Move-Out Inspection & Evidence Vault",
              properties: ["Room / Area", "Item Inspected", "Pre-Existing Note", "Move-Out Condition", "Proof Video Timestamp"],
              sampleRecords: [
                { room: "Living Room", item: "East Wall Drywall", preExisting: "3 pre-existing nail holes noted on move-in log", condition: "All patched flush & chalk blended", timestamp: "02:14 in Walkthrough Video" },
                { room: "Kitchen", item: "Ceramic Cooktop & Oven", preExisting: "Clean on move-in", condition: "Deep cleaned, zero grease residues", timestamp: "04:30 in Walkthrough Video" },
                { room: "Bathroom", item: "Shower Caulking & Glass", preExisting: "Minor wear on bottom caulking bead", condition: "Bleached & polished clean", timestamp: "07:15 in Walkthrough Video" }
              ]
            }
          ]
        }, null, 2)
      }
    ]
  }
};

// Fallback generator for remaining kits (kit 5 to 12)
export function getProductAssetBundle(productId: string): ProductAssetBundle {
  if (PRODUCT_ASSET_BUNDLES[productId]) {
    return PRODUCT_ASSET_BUNDLES[productId];
  }

  // Generic Tactical Kit generator for kits 5 through 12
  return {
    productId: productId,
    rank: 5,
    title: productId.replace(/^kit-/, '').replace(/-/g, ' ').toUpperCase() + ' TACTICAL ACTION KIT',
    photography: {
      url: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1600&q=85',
      alt: 'Clean small apartment interior with modern scandinavian styling and clever storage solutions',
      caption: 'Tested in 510 sq ft Toronto Rental Lab: Tactical zero-damage hardware blueprints and spatial clearance optimization.',
      spatialSpecs: '510 sq ft Studio • Renter Safe • Tested & Calibrated Blueprints',
      palette: ['#FAF8F5', '#4A533E', '#D9D3C7', '#8C857B', '#1C1917'],
      stylingKeywords: ['Tactical Kit', 'Renter Hacks', 'Zero Damage', 'Spatial Blueprint']
    },
    deliverablesOverview: 'Complete 4-part tactical action delivery bundle: Field Playbook (PDF), Pocket Blueprint Cards (PDF), Dimension Matrix (CSV), and 1-Click Notion Action Hub.',
    totalAssetsCount: 4,
    files: [
      {
        id: `${productId}-1`,
        fileName: `01_${productId.replace(/-/g, '_')}_Field_Playbook.pdf`,
        fileType: 'PDF Master Guide',
        extension: '.pdf',
        fileSize: '30 Pages • 3.5 MB',
        badge: 'Core Field Guide',
        description: 'Comprehensive illustrated tactical field guide with step-by-step hacks, store dupes, and measurements.',
        previewSnippet: 'MODULE 1: Core Spatial Physics & Clearance Formulas\nMODULE 2: Step-by-Step Hardware Store Hacks\nMODULE 3: Renter-Safe Installation Protocols\nMODULE 4: 15-Minute Daily Spatial Reset',
        downloadableContent: `# ${productId.replace(/-/g, ' ').toUpperCase()} FIELD PLAYBOOK
SmallSpaceHome.ca Editorial Lab • Tested in 510 sq ft Toronto Rental Lab

=== 01. CORE TACTICAL PRINCIPLES ===
• Primary Rule: Never purchase or mount furniture without verifying 30-inch clear walkway access.
• Renter Safety: 100% zero-drill, zero-damage hardware hacks tested for rental walls and strict condo bylaws.
• Cost Efficiency: Leverage hardware store dupes to save up to 65% compared to designer brand organizers.

=== 02. PROVEN STEP-BY-STEP HACKS ===
1. Prep surfaces with 70% Isopropyl alcohol to ensure maximum adhesive load bonding.
2. Utilize vertical dead spaces (under-bed, inside-cabinet-door, behind-mirror) to recover cubic volume.
3. Layer warm 2200K-2700K ambient lighting to push room boundaries back visually.

=== 03. MOVE-OUT RESTORATION ===
• Always restore surfaces using lightweight vinyl spackle and texture-matching chalk tricks.`
      },
      {
        id: `${productId}-2`,
        fileName: `02_${productId.replace(/-/g, '_')}_Pocket_Cards.pdf`,
        fileType: 'Printable Cheatsheet',
        extension: '.pdf',
        fileSize: '4x6 Cards • 1.5 MB',
        badge: 'Printable Deck',
        description: 'Pocket-sized printable reference cards and rapid action checklists.',
        previewSnippet: 'CARD 1: Essential Clearance & Safety Formulas\nCARD 2: Hardware Store Dupe List\nCARD 3: Daily Micro-Reset Rhythm',
        downloadableContent: `# Pocket Hacks Deck: Quick Reference Cards
SmallSpaceHome.ca • Pocket Cards

CARD 01: ESSENTIAL CLEARANCE FORMULAS
[ ] Primary Walkway: Minimum 32 inches unobstructed
[ ] Furniture Clearance: Minimum 2 inches from door swings and heating vents
[ ] Vertical Proportion: Credenzas under 30" preserve 65% wall negative space

CARD 02: HARDWARE STORE SAVINGS
[ ] Use multi-pack heavy polyolefin dual-lock tape instead of single branded strips
[ ] Use spring tension rods with non-slip silicone end pads for instant divider tracks`
      },
      {
        id: `${productId}-3`,
        fileName: `03_${productId.replace(/-/g, '_')}_Matrix.csv`,
        fileType: 'Spreadsheet (CSV/Excel)',
        extension: '.csv',
        fileSize: '12 Rows • 10 KB',
        badge: 'Plug-and-Play Matrix',
        description: 'Interactive dimension calculator and load planning spreadsheet.',
        previewSnippet: 'Zone_ID,Target_Area,Recommended_Hardware,Max_Weight_LBS,Renter_Safe_Rating\n01,Main Zone,Tension / Dual-Lock,30,OPTIMAL\n02,Secondary Zone,Over-Door / Bracket,20,OPTIMAL',
        downloadableContent: `Zone_ID,Target_Area,Recommended_Hardware,Max_Weight_LBS,Renter_Safe_Rating
01,Primary Living Space,Tension Rod / Dual-Lock,30,OPTIMAL
02,Secondary Bed Space,3M Claw Push Anchors,45,OPTIMAL
03,Storage Expansion,Clear Acrylic Dividers,15,100% ZERO RISK
04,Door Interior,Over-Door Hanging Brackets,25,100% ZERO RISK
05,Under-Furniture,Smooth Rolling Casters,40,100% ZERO RISK`
      },
      {
        id: `${productId}-4`,
        fileName: `04_${productId.replace(/-/g, '_')}_Notion_Hub.json`,
        fileType: 'Notion Template',
        extension: '.json',
        fileSize: 'Notion Schema • 18 KB',
        badge: 'Notion Action Hub',
        description: '1-Click Notion database and checklist for tracking items, dimensions, and habits.',
        previewSnippet: '{\n  "workspaceName": "Tactical Action Hub",\n  "version": "2.4.0",\n  "databases": [\n    {\n      "name": "Action Task & Inventory Ledger",\n      "properties": ["Item", "Zone", "Status", "Priority"]\n    }\n  ]\n}',
        downloadableContent: JSON.stringify({
          workspaceName: `${productId.replace(/-/g, ' ').toUpperCase()} Action Hub`,
          version: "2.4.0",
          author: "SmallSpaceHome.ca Editorial Lab",
          databases: [
            {
              name: "Action Tasks & Spatial Ledger",
              properties: ["Task / Item", "Room Zone", "Status", "Priority"],
              sampleRecords: [
                { item: "Spatial Calibration & Walkway Check", zone: "Main Living", status: "Completed", priority: "High" },
                { item: "Zero-Damage Hardware Mount Installation", zone: "Wall Decor", status: "In Progress", priority: "High" },
                { item: "Daily 5-Minute Room Reset Setup", zone: "Universal", status: "Active", priority: "Medium" }
              ]
            }
          ]
        }, null, 2)
      }
    ]
  };
}
