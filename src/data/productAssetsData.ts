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
  'flagship-ss-os': {
    productId: 'flagship-ss-os',
    rank: 1,
    title: 'The Small Space Operating System (SS-OS)',
    photography: {
      url: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1600&q=85',
      alt: 'Bright sunlit Japandi compact studio apartment with warm wood accents, linen sofa, and modular partition',
      caption: '520 sq ft Scandinavian studio layout featuring 36" primary walkway clearance, oak slatted privacy partition, and low-profile modular seating.',
      spatialSpecs: '520 sq ft Studio • 9.5 ft Ceilings • East-Facing Morning Sun • Oak & Bouclé Textures',
      palette: ['#FAF9F6', '#5A5A40', '#D4CEBE', '#8C857B', '#1A1A1A'],
      stylingKeywords: ['Japandi Minimal', 'Warm Oak Slats', 'Natural Linen', 'Concealed Storage']
    },
    deliverablesOverview: 'Complete 5-part master digital asset delivery bundle containing the comprehensive 120-page architectural PDF master guide, automated clearance Google Sheets, connected 6-database Notion workspace, and printable A4 room blueprint cards.',
    totalAssetsCount: 5,
    files: [
      {
        id: 'ssos-1',
        fileName: '01_Small_Space_OS_120Page_Master_Guide.md',
        fileType: 'PDF Master Guide',
        extension: '.md',
        fileSize: '120 Pages • 5.2 MB',
        badge: 'Core Flagship Guide',
        description: 'Complete 6-module architectural master handbook covering spatial zoning, vertical load engineering, ruthless 30-day declutter protocol, and renter-safe aesthetic upgrades.',
        previewSnippet: 'MODULE 1: Spatial Assessment & 2D Floorplan Mapping\n- The 36-Inch Rule for primary transit paths\n- Visual sightline calibration from entrance doorway\n- Calculating the Real Estate Rent Tax ($/sq ft of clutter)',
        downloadableContent: `# The Small Space Operating System (SS-OS) - Master Architecture Guide
Author: SmallSpaceHome Editorial & Architecture Team
Scope: Complete 6-Module Digital System for Compact Living (Under 800 sq ft)

---

## EXECUTIVE SUMMARY & PHILOSOPHY
Living in under 800 sq ft is not a compromise—it is an exercise in intentional spatial engineering. The Small Space Operating System provides the foundational rules, formulas, and daily rhythms to turn compact homes into high-performing, serene sanctuaries.

---

## MODULE 01: SPATIAL ASSESSMENT & SCALE LAYOUT MAPPING
1. Primary Transit Corridor Rule: Maintain a strictly unobstructed 36-inch (91 cm) walkway between main room entrance and key destination points (bed, bathroom, kitchen prep station).
2. Secondary Transit Corridor: Minimum 24 inches (61 cm) for secondary pathways (bedside to window, closet approach).
3. The 2-Inch Tolerance Mandate: Never purchase furniture with less than 2 inches of clearance from door swings, radiator covers, or drawer pulls.
4. Vertical Proportion Ratio: In rooms with ceilings under 9 ft, limit horizontal credenzas to 30 inches height to preserve 65% vertical wall negative space.

---

## MODULE 02: VERTICAL STORAGE & RENTER-SAFE ANCHOR ENGINEERING
1. Tension Rod Engineering: Utilize heavy-duty dual-spring tension rods inside reach-in closets to double hanging capacity without drywall penetration.
2. Adhesive Shear-Load Calculation: Never exceed 60% of rated adhesive hook capacity for sustained loads over 30 days.
3. French Cleat Alternative: Renter-friendly micro-pin picture ledge mounting distributing 40 lbs across 12 drywall pinholes.
4. Over-Door Clearance: Standard doors provide 1.5 inches of top clearance—use foam-buffered flat bracket hanging organizers.

---

## MODULE 03: 30-DAY RUTHLESS DECLUTTER PROTOCOL
1. The Real Estate Rent Tax: (Monthly Rent * 12) / Total Sq Ft = Annual Cost per Sq Ft. Every box of unread books occupies $40-$90/year in pure rent tax.
2. The 14-Day Quarantine Box Method: Pack ambiguous items into a sealed kraft box dated 14 days ahead. If unopened after two weeks, donate unconditionally.
3. One-In, One-Out Physical Law: Adding any bulky object requires removing an equivalent cubic volume item within 24 hours.

---

## MODULE 04: RENTER-SAFE AESTHETIC & 3-TIER LIGHTING
1. Ambient Layer (2700K Warm White): Paper pendant fixtures or uplight floor lamps bouncing off matte ceiling paint (20 lumens/sq ft).
2. Task Layer (3000K Neutral Warm): Magnetic rechargeable LED bars under upper kitchen cabinets and on work desks (40 lumens/sq ft).
3. Accent Layer (2200K Candle Warm): Portable cordless mushroom lamps for evening winding down (5 lumens/sq ft).

---

## MODULE 05: 12-MINUTE DAILY RESET RHYTHM
- Minute 0-3: Clear all flat kitchen surfaces to 100% blank slate.
- Minute 3-6: Hang all outerwear and return shoes to drop-zone tray.
- Minute 6-9: Fluff sofa pillows, fold throw blanket, reset coffee table tray.
- Minute 9-12: Empty bathroom counter into vanity drawers; turn off overhead light and activate 2200K accent lamp.

---

## MODULE 06: MOVE-IN, LEASE & DEPOSIT PROTECTION VAULT
- Complete move-in 4K video walkthrough recording standard.
- Landlord repair request escalation script template.
- Move-out spackle-free deposit return checklist.
`
      },
      {
        id: 'ssos-2',
        fileName: '02_Spatial_Clearance_Calculators.csv',
        fileType: 'Spreadsheet (CSV/Excel)',
        extension: '.csv',
        fileSize: '3 Worksheets • 180 KB',
        badge: 'Automated Spreadsheet',
        description: 'Interactive Google Sheets/Excel formulas calculating walkway clearances, furniture footprint allowances, and annual clutter rent taxes.',
        previewSnippet: 'Room Name,Length_Inches,Width_Inches,Total_SqFt,Main_Walkway_Remaining,Status\nLiving Room,168,132,154,38.5,APPROVED (Passes 36" Rule)\nBedroom,120,108,90,26.0,WARNING (Tight clearance on left side)',
        downloadableContent: `Room_Name,Length_Inches,Width_Inches,Total_SqFt,Primary_Sofa_Depth,Coffee_Table_Depth,Console_Depth,Walkway_Remaining_Inches,Clearance_Status,Recommendation
Living_Room_Main,168,144,168.0,36,22,14,38.0,APPROVED_SAFE,Comfortable two-way human traffic
Studio_Alcove,130,110,99.3,38,24,16,22.0,WARNING_NARROW,Replace coffee table with 14" nesting side table
Galley_Kitchen,140,72,70.0,0,0,24,48.0,EXCELLENT,Ideal 48" dual cook clearance
Entryway_DropZone,72,48,24.0,0,0,12,36.0,APPROVED_SAFE,Wall-mounted 10" floating shelf recommended
Bedroom_Walkway,120,100,83.3,0,0,18,28.0,TIGHT_PASS,Switch to wall sconces to eliminate nightstand footprint`
      },
      {
        id: 'ssos-3',
        fileName: '03_Notion_SmallSpaceOS_Master_Workspace.json',
        fileType: 'Notion Template',
        extension: '.json',
        fileSize: '6 Connected Databases • 340 KB',
        badge: 'Notion 1-Click Import',
        description: 'Full Notion system schema including Room Inventory DB, 30-Day Declutter Tracker, Maintenance Ticket Ledger, and Daily Reset Habit Checkers.',
        previewSnippet: '{\n  "workspaceName": "Small Space Operating System (SS-OS)",\n  "databases": ["Room Inventory", "Clearance Specs", "Maintenance Vault", "Daily Reset Routines"]\n}',
        downloadableContent: JSON.stringify({
          workspaceName: "The Small Space Operating System (SS-OS)",
          version: "2.4.0",
          author: "SmallSpaceHome",
          databases: [
            {
              name: "Room & Furniture Inventory DB",
              properties: ["Item Name", "Room Zone", "Dimensions (L x W x H)", "Weight", "Renter Safe", "Purchase Date", "Estimated Value"],
              sampleRecords: [
                { item: "Modular 2-Seat Bouclé Sofa", zone: "Living Room", dimensions: "74 x 34 x 31 in", weight: "85 lbs", renterSafe: true },
                { item: "Oak Wall-Mounted Drop Leaf Table", zone: "Dining/WFH", dimensions: "32 x 20 x 1 in", weight: "18 lbs", renterSafe: true },
                { item: "Under-Bed Rolling Storage Bin (x2)", zone: "Bedroom", dimensions: "36 x 20 x 6.5 in", weight: "6 lbs", renterSafe: true }
              ]
            },
            {
              name: "30-Day Declutter & Quarantine Vault",
              properties: ["Item Name", "Category", "Quarantine Start Date", "14-Day Expiration", "Decision (Keep/Donate/Sell)", "Tax Savings"],
              sampleRecords: [
                { item: "Excess Coffee Mugs (Set of 6)", category: "Kitchen", decision: "Donate", taxSavings: "$24/year" },
                { item: "Winter Ski Outerwear (Off-Season)", category: "Closet", decision: "Vacuum Compress", taxSavings: "$45/year" }
              ]
            },
            {
              name: "Daily Spatial Habits & Closing Shift",
              properties: ["Habit Name", "Time Required", "Frequency", "Target Zone", "Streak Counter"],
              sampleRecords: [
                { habit: "12-Minute Kitchen Zero-Sink Reset", time: "12 min", frequency: "Daily PM", zone: "Kitchen" },
                { habit: "Drop Zone Outerwear Return", time: "2 min", frequency: "Arrival", zone: "Entryway" }
              ]
            }
          ]
        }, null, 2)
      },
      {
        id: 'ssos-4',
        fileName: '04_Printable_Room_Blueprint_Cards_A4.pdf',
        fileType: 'Printable Cheatsheet',
        extension: '.pdf',
        fileSize: '8 Printable Cards • 1.9 MB',
        badge: 'Print-Ready A4/Letter',
        description: 'Laminated-style visual cards summarizing dimensional rules, 10-minute reset sequence, and renter mounting weight limits for easy fridge hanging.',
        previewSnippet: 'CARD 1: Walkway Clearance Quick Reference\n- Main Path: 36 inches\n- Coffee Table Gap: 16-18 inches\n- Dining Chair Push-back: 32 inches',
        downloadableContent: `# Printable Room Blueprint & Spatial Rule Cards (A4 / US Letter)

=== CARD 01: THE GOLDEN CLEARANCE MATRIX ===
• Main Entry Walkway: 36 in (91 cm) minimum
• Coffee Table to Sofa Distance: 16 - 18 in (40 - 45 cm)
• Dining Chair Pullout Clearance: 32 in (81 cm)
• Kitchen Galley Cooking Corridor: 42 - 48 in (106 - 122 cm)
• Bedside to Wall / Wardrobe: 24 - 30 in (61 - 76 cm)

=== CARD 02: 12-MINUTE EVENING CLOSING SHIFT ===
[ ] 1. SINK RESET: No dishes left soaking; sponge in caddy.
[ ] 2. FLAT SURFACES: Wipe counter, coffee table, and desk.
[ ] 3. DROP ZONE: Outerwear on hooks; shoes in lower tray.
[ ] 4. LIGHTING TRANSITION: Overhead lights OFF; 2200K lamps ON.
[ ] 5. VISUAL HORIZON: Couch pillows squared; throw blanket folded.

=== CARD 03: RENTER HARDWARE LOAD LIMITS ===
• Small Adhesive Strip: 0.5 - 1.0 lb (Photo frames only)
• Heavy Adhesive Hook (Clean Rubbed Alcohol): Max 4.0 lbs sustained
• Drywall Spiral Anchor (requires spackle repair): Max 25 lbs
• Heavy Duty Tension Rod (between solid jambs): Max 30 lbs distributed
`
      },
      {
        id: 'ssos-5',
        fileName: '05_Customer_Onboarding_Setup_Protocol.txt',
        fileType: 'Prompt & Action Kit',
        extension: '.txt',
        fileSize: 'Step-by-Step Onboarding • 45 KB',
        badge: 'Immediate Action Plan',
        description: 'Guided 7-day implementation roadmap walking the customer through setting up their workspace, measuring their home, and logging their first room zone.',
        previewSnippet: 'DAY 1: Measure perimeter walls with laser/tape\nDAY 2: Calculate rent tax on cluttered corners\nDAY 3: Setup Notion workspace & import furniture inventory',
        downloadableContent: `=====================================================
SMALL SPACE OPERATING SYSTEM (SS-OS)
7-DAY IMPLEMENTATION ONBOARDING PROTOCOL
=====================================================

Welcome to the Small Space Operating System. Follow this day-by-day protocol to transform your apartment:

DAY 1: SPATIAL AUDIT & ROOM MEASUREMENT
- Take a steel measuring tape or laser measure.
- Measure overall room length, width, and ceiling height.
- Measure all door swing arcs and window sill heights.
- Input numbers into 02_Spatial_Clearance_Calculators.csv.

DAY 2: THE 14-DAY QUARANTINE BOX SETUP
- Assemble one medium cardboard box labeled "QUARANTINE - [Today's Date + 14 Days]".
- Walk room by room and place any item you have not touched in 30 days inside.
- Seal with tape and store in closet corner.

DAY 3: NOTION HUB ACTIVATION
- Click your Notion duplicate link to copy the SS-OS Master Workspace.
- Populate your furniture inventory with current measurements.
- Tag any item with negative clearance warnings.

DAY 4: VERTICAL ANCHOR & STORAGE MAPPING
- Identify 3 under-utilized vertical zones (e.g. above toilet, inside closet doors, above door frames).
- Install renter-safe tension or over-door organizers.

DAY 5: LIGHTING CALIBRATION
- Replace all cold 5000K/4000K bulbs with 2700K warm white bulbs.
- Add at least one portable warm table lamp for eye-level evening glow.

DAY 6: 12-MINUTE DAILY RESET REHEARSAL
- Run the 12-minute timer on your phone at 9:00 PM.
- Complete the 5 items on Card 02.

DAY 7: SUSTAINED SANCTUARY REVIEW
- Inspect the physical space. Notice the lack of visual friction and cognitive noise.
`
      }
    ]
  },

  'layout-furniture-planner': {
    productId: 'layout-furniture-planner',
    rank: 2,
    title: 'Small-Space Layout & Furniture Proportion Planner',
    photography: {
      url: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1600&q=85',
      alt: 'Minimalist living room layout with precise furniture spacing, low credenza, and architectural scale drawing tools',
      caption: 'Architectural scale grid layout in a 420 sq ft condo living room demonstrating the 18" coffee table clearance and 36" primary walkway.',
      spatialSpecs: '420 sq ft Layout • 1/4" Scale Grid • Natural Oak & Warm Grey Tones • High Ergonomic Flow',
      palette: ['#EFECE6', '#3D3D2B', '#A8A293', '#1A1A1A', '#C2BCB0'],
      stylingKeywords: ['Scale Grid', 'Floor Plan Block', 'Clearance Formulas', 'Pinch-Point Audit']
    },
    deliverablesOverview: 'Complete 4-component architectural planning kit containing the interactive Walkway & Clearance Google Sheet with automated warning thresholds, printable 1/4-inch scale grid sheets with 60+ pre-scaled furniture cutouts, Canva floorplan templates, and multi-functional furniture buying matrix.',
    totalAssetsCount: 4,
    files: [
      {
        id: 'lay-1',
        fileName: '01_Walkway_Clearance_Calculators.csv',
        fileType: 'Spreadsheet (CSV/Excel)',
        extension: '.csv',
        fileSize: 'Spreadsheet Suite • 210 KB',
        badge: 'Clearance Engine',
        description: 'Formulas testing room dimensions against sofa depths, dining table pullouts, and TV console sightlines with automated red/green warning flags.',
        previewSnippet: 'Furniture_Type,Target_Dimension_In,Minimum_Clearance_Required,Recommended_Buffer,Calculated_Fit\nSofa,34 in,36 in main path,6 in cushion flex,PASS\nDining Table,36 in width,32 in pullout,8 in pass-by,WARNING',
        downloadableContent: `Item_Category,Standard_Depth_Inches,Minimum_Clearance_Inches,Room_Width_Inches,Calculated_Leftover_Inches,Clearance_Grade,Recommendation
Sofa_3Seater,36,36,144,36.0,OPTIMAL_A,Leaves full 36" traffic path
Sofa_DeepLounge,42,36,132,18.0,CRITICAL_FAIL,Do not buy: blocks living room walkway
Coffee_Table_Rect,24,18,144,28.0,OPTIMAL_A,Allows comfortable knee room
Dining_DropLeaf,30,32,108,34.0,OPTIMAL_A,Fold one leaf against wall when dining alone
Work_Desk_Narrow,20,30,96,46.0,OPTIMAL_A,Perfect shallow depth for micro offices
Credenza_LowProfile,14,24,120,82.0,OPTIMAL_A,Saves 10" compared to standard 24" media units`
      },
      {
        id: 'lay-2',
        fileName: '02_Printable_QuarterInch_Scale_Grid_and_Furniture_Cutouts.pdf',
        fileType: 'Printable Cheatsheet',
        extension: '.pdf',
        fileSize: '16 Pages • 3.8 MB',
        badge: 'Scale Cutout Kit',
        description: 'High-precision 1/4" = 1 ft architectural scale grid paper with 60+ cutouts for sofas, loveseats, drop-leaf tables, platform beds, and storage units.',
        previewSnippet: 'Scale: 1 square = 1 foot (1/4 inch scale)\nCut out furniture blocks along dotted lines and arrange on room grid before shopping.',
        downloadableContent: `# 1/4" Scale Floorplan & Furniture Cutout Master Sheet (A4 / US Letter)

DIRECTIONS:
1. Print on heavy 200+ GSM cardstock for best tactile manipulation.
2. 1 grid box = 1 square foot (1/4" = 1'-0").
3. Draw perimeter room walls according to steel tape measurements.
4. Cut out pre-measured furniture blocks and place on grid to test layouts.

PRE-SCALED CUTOUT DIMENSIONS INCLUDED:
• Sofa 3-Seat Standard: 84" x 36" (7 x 3 grid squares)
• Apartment Loveseat: 60" x 32" (5 x 2.66 grid squares)
• Nesting Coffee Tables: 24" round & 18" round
• Queen Platform Bed: 60" x 80" (5 x 6.66 grid squares)
• Full/Double Bed: 54" x 75" (4.5 x 6.25 grid squares)
• Micro Desk (Shallow): 40" x 18" (3.33 x 1.5 grid squares)
• Drop-Leaf Dining Table: 32" x 32" open / 32" x 14" folded
• Narrow Media Console: 50" x 14" (4.16 x 1.16 grid squares)
`
      },
      {
        id: 'lay-3',
        fileName: '03_Canva_Digital_Floorplan_Templates_Guide.md',
        fileType: 'PDF Master Guide',
        extension: '.md',
        fileSize: 'Canva Specs • 1.4 MB',
        badge: 'Canva Digital Kit',
        description: 'Digital drag-and-drop vector floorplan template library with 12 pre-configured studio, alcove, and 1-bedroom layouts.',
        previewSnippet: 'Layout 01: Long Narrow Studio (12 ft x 32 ft)\nLayout 02: Square Studio with Center Window (18 ft x 18 ft)\nLayout 03: 1-Bed with Open Concept Kitchen (14 ft x 24 ft)',
        downloadableContent: `# Canva Digital Floorplan Template Suite - User Guide
Template Access: Direct Editable Canva Links + SVG Vector Exports

---

## 12 PRE-CONFIGURED DIGITAL LAYOUT SCHEMATICS:
1. The Train Car / Railroad Studio (11 ft x 34 ft) - Linear zoning with acoustic divider
2. The Square Studio Box (16 ft x 16 ft) - Corner bed nook with floating living island
3. The L-Shaped Alcove Studio (520 sq ft) - Natural bedroom recess shielding bed from front door
4. The Narrow 1-Bedroom (480 sq ft) - Maximize window wall light into living area
5. The Galley Kitchen Combo (400 sq ft) - 2-person breakfast bar replacing formal dining table
6. The Work-From-Home Studio - Dual-monitor floating desk integrated into wardrobe run
7. The Loft Micro Apartment - High vertical bed clearance with under-bed lounge
8. The Dual-Roommate 2-Bed (650 sq ft) - Acoustic privacy and balanced shared living
9. The Deep Bay Window Studio - Reading bench storage built into window recess
10. The Corner Balcony Condo - Preserving sliding glass door swing arc
11. The Angled Wall Loft - Custom triangular floating shelves eliminating dead corners
12. The Minimalist Studio Sanctuary - 70% negative space layout with low Japanese platform bed
`
      },
      {
        id: 'lay-4',
        fileName: '04_MultiFunctional_Furniture_Buying_Matrix.csv',
        fileType: 'Spreadsheet (CSV/Excel)',
        extension: '.csv',
        fileSize: 'Matrix Sheet • 140 KB',
        badge: 'Procurement Specs',
        description: 'Vetted dimension specifications and mechanism evaluations for storage beds, lift-top coffee tables, nesting chairs, and drop-leaf consoles.',
        previewSnippet: 'Item_Type,Mechanism,Optimal_Depth,Max_Weight_Capacity,Pros,Cons\nLift-Top Coffee Table,Gas Spring Hinge,22 in,40 lbs,Converts to dining desk,Requires front clearance',
        downloadableContent: `Furniture_Category,Recommended_Mechanism,Max_Ideal_Depth_Inches,Weight_Capacity_Lbs,Spatial_Advantage,PinchPoint_Risk
LiftTop_Coffee_Table,Heavy_Duty_Gas_Piston,22,50,Replaces separate dining table,Ensure 24" clearance in front when raised
Hydraulic_Storage_Bed,Dual_Gas_Struts,62 (Queen),250,Adds 28 cu ft storage under mattress,Requires 7 ft ceiling to fully lift
Wall_Mounted_DropLeaf,Dual_Steel_Triangular_Brackets,16 (folded 4"),60,Disappears against wall when not dining,Must be mounted into 2 wall studs
Nesting_Side_Tables,Slide_Under_C_Frame,14,30,Base slides under sofa eliminating footprint,Check sofa clearance from floor (min 2")
Expandable_Console_Table,Telescopic_Aluminum_Rails,18 (expands to 90"),180,Acts as 18" hallway console; expands for 8 dinner guests,Heavy frame (85 lbs)`
      }
    ]
  },

  'moving-in-blueprint': {
    productId: 'moving-in-blueprint',
    rank: 3,
    title: 'The Small Space Moving-In Blueprint & Transition OS',
    photography: {
      url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
      alt: 'Clean modern apartment living room with neat labeled kraft moving boxes, hardwood floors, and serene lighting',
      caption: 'Organized move-in sequence in a 500 sq ft downtown condo with color-coded zone labeling and elevator booking coordination.',
      spatialSpecs: '500 sq ft Condo • 48-Hour Unpacking Sequence • Color-Coded Room Zones',
      palette: ['#FAF8F5', '#8C827A', '#DCD6CD', '#1A1A1A', '#605C4E'],
      stylingKeywords: ['Move-In Protocol', 'Box Labeling', 'Elevator Window', 'Survival Capsule']
    },
    deliverablesOverview: 'Complete 4-module moving system including the 8-Week Countdown Notion Moving Checklist, printable QR-Code Box Labeling sheets, Elevator & Landlord COI Checklist, and 48-Hour Rapid Unpacking Sequence.',
    totalAssetsCount: 4,
    files: [
      {
        id: 'mov-1',
        fileName: '01_Eight_Week_Moving_Countdown_Schedule.md',
        fileType: 'PDF Master Guide',
        extension: '.md',
        fileSize: '32 Pages • 2.8 MB',
        badge: 'Timeline Protocol',
        description: 'Week-by-week chronological moving roadmap tailored specifically for tight urban buildings, elevator locks, and small space downsizing.',
        previewSnippet: 'WEEK 8: Declutter room by room & order box kits\nWEEK 6: Book freight elevator with building management & request COI\nWEEK 4: Sell bulky furniture that exceeds target room dimensions',
        downloadableContent: `# The Small Space 8-Week Moving & Transition Master Blueprint

---

## WEEK 8-7: RUTHLESS DOWNSIZING & AUDIT
- Measure target apartment floorplan: every doorway, elevator interior (height/depth), and stairwell corner.
- Red Tag Audit: Place red stickers on all furniture items that exceed new room clearance limits.
- Sell or donate red-tagged items now; never pay moving fees on items you will discard upon arrival.

## WEEK 6-5: BUILDING LOGISTICS & PERMITS
- Book the freight elevator with target building property manager (request a minimum 3-hour exclusive block).
- Request the Certificate of Insurance (COI) requirements from the landlord and forward to moving company.
- Reserve moving truck or book movers with specific narrow-street/tight-dock experience.

## WEEK 4-3: ZONED PACKING SYSTEM
- Pack by apartment zone, not by object type.
- Keep box weights under 35 lbs to allow rapid stacking in tight hallway corners.
- Label all 4 sides and top of every box with colored tape (Blue = Kitchen, Amber = Living, Green = Bedroom).

## WEEK 2-1: THE FIRST-NIGHT SURVIVAL CAPSULE
- Pack one transparent plastic tote with essentials: shower curtain & rings, towel, bedding, phone chargers, kettle, mug, toilet paper, scissors, cleaning wipes, and screwdriver set.
- Keep this capsule in your personal car or carry-on; do NOT place on moving truck.

## MOVING DAY: 48-HOUR RAPID UNPACKING SEQUENCE
- Hour 0-2: Protect floors with ram board; direct heavy furniture into final footprint positions first.
- Hour 2-4: Assemble bed frame and dress mattress before unpacking a single other box.
- Hour 4-8: Unpack Kitchen essentials (dishes, cookware, pantry basics).
- Hour 8-12: Break down and remove all cardboard boxes immediately to preserve floor space.
`
      },
      {
        id: 'mov-2',
        fileName: '02_Printable_ColorCoded_QR_Box_Labels.pdf',
        fileType: 'Printable Cheatsheet',
        extension: '.pdf',
        fileSize: '12 Pages • 2.1 MB',
        badge: 'Printable Labels',
        description: 'Standard Avery sticker label templates with zone color banners, box priority tags (Day 1 / Day 2 / Storage), and itemized checklist lines.',
        previewSnippet: 'ZONE: [ KITCHEN ] - PRIORITY: [ DAY 1 ESSENTIALS ]\nBOX #: K-04  |  DESTINATION: Upper Left Cabinets\nCONTENTS: Cookware, Skillet, Olive Oil, Salt, Chefs Knife',
        downloadableContent: `# Printable Color-Coded Moving Box Label Kit (A4 / Avery 5164 Template)

=== LABEL TEMPLATE: ZONE KITCHEN (COLOR: BLUE) ===
BOX NUMBER: K-_____     PRIORITY: [ ] DAY 1  [ ] DAY 2  [ ] LOW PRIORITY
DESTINATION: Kitchen Counter / Upper Cabinets
CONTENTS:
1. ________________________________________
2. ________________________________________
3. ________________________________________
HANDLE WITH CARE: [ ] GLASSWARE  [ ] HEAVY

=== LABEL TEMPLATE: ZONE BEDROOM (COLOR: GREEN) ===
BOX NUMBER: B-_____     PRIORITY: [ ] DAY 1  [ ] DAY 2  [ ] LOW PRIORITY
DESTINATION: Bedroom Alcove / Bed Frame
CONTENTS:
1. Bedding & Pillows (Clean Linens)
2. ________________________________________
3. ________________________________________

=== LABEL TEMPLATE: ZONE BATHROOM (COLOR: TEAL) ===
BOX NUMBER: BA-_____    PRIORITY: [ ] DAY 1 IMMEDIATE
CONTENTS: Shower curtain, towels, hand soap, medications, first-aid
`
      },
      {
        id: 'mov-3',
        fileName: '03_Elevator_and_COI_Landlord_Checklist.pdf',
        fileType: 'PDF Master Guide',
        extension: '.pdf',
        fileSize: 'Legal Forms • 1.1 MB',
        badge: 'Building Logistics',
        description: 'Checklists for condo board approval, freight elevator dimensions, Certificate of Insurance liability minimums, and security deposit waiver forms.',
        previewSnippet: 'Condo Board Moving Rules:\n- Move-in deposit: $250 - $500 refundable\n- Elevator pad installation confirmed\n- COI naming building management as Additional Insured ($2M limit)',
        downloadableContent: `# Freight Elevator & Condo Board Logistics Checklist

BUILDING DETAILS:
• Property Management Company: _________________________
• Contact Person & Phone: _______________________________
• Building Address: _____________________________________

ELEVATOR RESTRICTIONS:
[ ] Elevator Door Width: _____ inches (Min recommended: 36 in)
[ ] Elevator Interior Height: _____ inches (Min recommended: 96 in for tall sofas)
[ ] Elevator Interior Depth: _____ inches
[ ] Maximum Weight Capacity: ________ lbs
[ ] Protective Wall Pads: [ ] Building provides  [ ] Mover must supply

CERTIFICATE OF INSURANCE (COI) CHECKLIST:
[ ] General Liability Minimum: $1,000,000 / $2,000,000 Aggregate
[ ] Workers' Compensation Coverage included
[ ] Building Entity named as "Additionally Insured"
[ ] COI submitted to management 5 business days before move date
`
      },
      {
        id: 'mov-4',
        fileName: '04_Notion_MoveIn_Inventory_and_Expense_Tracker.json',
        fileType: 'Notion Template',
        extension: '.json',
        fileSize: 'Notion Database • 190 KB',
        badge: 'Notion Tracker',
        description: 'Complete digital inventory tracking every packed box, its location, moving expenses, utility activation dates, and key contact numbers.',
        previewSnippet: '{\n  "databases": ["Box Inventory Ledger", "Moving Expense Log", "Utility Setup Checklist"]\n}',
        downloadableContent: JSON.stringify({
          databaseName: "Small Space Moving OS & Inventory Ledger",
          tables: [
            {
              tableName: "Box Master Directory",
              columns: ["Box ID", "Zone", "Priority Tier", "Items Listed", "Unpacked Status", "Weight Class"]
            },
            {
              tableName: "Moving Budget & Expense Log",
              columns: ["Expense Category", "Estimated Cost", "Actual Cost", "Payment Date", "Receipt Attached"]
            },
            {
              tableName: "Utility & Address Change Tracker",
              columns: ["Utility Provider", "Transfer Date", "Account Number", "Confirmation Code", "Status"]
            }
          ]
        }, null, 2)
      }
    ]
  },

  'renter-upgrade-manual': {
    productId: 'renter-upgrade-manual',
    rank: 4,
    title: 'The Damage-Free Renter Upgrade Manual & Action Binder',
    photography: {
      url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=85',
      alt: 'Stylish renter-friendly modern apartment with sleek matte black hardware, tool-free lighting, and warm aesthetic decor',
      caption: 'Zero-damage renter upgrades including matte black replacement cabinet pulls, plug-in brass sconces, and removable peel-and-stick subway tile backsplash.',
      spatialSpecs: 'Rental Apartment • 100% Deposit Safe • 5-Minute Restore Time • Zero Drywall Damage',
      palette: ['#F5F4EE', '#2D2D2A', '#D0C9B8', '#989284', '#C9A050'],
      stylingKeywords: ['Renter Friendly', 'Peel and Stick', 'Plug-In Lighting', 'Deposit Safe']
    },
    deliverablesOverview: 'Complete 4-component action kit containing the 68-page visual PDF guide, hardware gauge spec sheet, damage-free adhesive load formula matrix, and 5-minute move-out restoration checklist.',
    totalAssetsCount: 4,
    files: [
      {
        id: 'ren-1',
        fileName: '01_Damage_Free_Renter_Upgrade_68Page_Guide.md',
        fileType: 'PDF Master Guide',
        extension: '.md',
        fileSize: '68 Pages • 4.5 MB',
        badge: 'Core Manual',
        description: '50+ curated, tool-free aesthetic rental upgrades with step-by-step photos, exact hardware sizes, and deposit-safe removal formulas.',
        previewSnippet: 'CHAPTER 1: Cabinet Hardware Transformation (Standard 3" & 3-3/4" hole spacing)\nCHAPTER 2: Plug-In Wall Sconces & Wireless Puck Lighting\nCHAPTER 3: Peel-and-Stick Backsplash & Vinyl Floor Tiles',
        downloadableContent: `# The Damage-Free Renter Upgrade Manual & Action Binder

---

## 01: HARDWARE REPLACEMENT PROTOCOL (THE 10-MINUTE TRANSFORMATION)
- Standard Cabinet Pull Center-to-Center Spacings: 3 in (76 mm), 3-3/4 in (96 mm), 5-1/16 in (128 mm).
- The "Original Hardware Bagging Rule": Place every original builder-grade screw and pull into a labeled Ziploc bag taped inside the cabinet door or stored in your moving vault.
- Washer Spacers: If rental screws are slightly too long, insert a 1mm silicone washer behind the pull to prevent stripping the laminate.

---

## 02: TOOL-FREE LIGHTING UPGRADES
- Plug-In Sconce Conversion: Mount decorative brass sconces using heavy-duty adhesive wall brackets; route cloth-covered cord along baseboard with transparent micro clips.
- Wireless Under-Cabinet LEDs: Install 3000K rechargeable magnetic LED light bars under kitchen cabinets. No electrical wiring required.
- Smart Bulb Warmth Tuning: Replace harsh 5000K cold rental bulbs with 2700K smart LEDs set to dim automatically at 8:00 PM.

---

## 03: PEEL-AND-STICK SUBWAY BACKSPLASH & VINYL MATS
- Surface Prep: Clean rental laminate/drywall with 70% isopropyl alcohol; let dry completely.
- Hairdryer Move-Out Release: Apply gentle heat from a hairdryer for 15 seconds to soften adhesive before peeling at a 45-degree angle. Residue wipes clean with vegetable oil or Goo Gone.

---

## 04: NO-DRILL CURTAIN ROD BRACKETS
- Kwik-Hang Style Brackets: Tap into top wooden trim of window frame with a hammer tap (leaves microscopic pinhole completely hidden by window header).
- Heavy Tension Rods: Use rubberized-end spring rods inside window casing recess for clean linen sheer draping.
`
      },
      {
        id: 'ren-2',
        fileName: '02_Renter_Hardware_Spec_and_Gauge_Sheet.pdf',
        fileType: 'Printable Cheatsheet',
        extension: '.pdf',
        fileSize: 'Spec Sheet • 1.2 MB',
        badge: 'Hardware Specs',
        description: 'Exact dimensional charts for cabinet screw lengths (M4 x 25mm), faucet aerator thread sizes, and showerhead washer adapters.',
        previewSnippet: 'Cabinet Screw Thread: Metric M4 (0.7mm pitch) x 25mm standard length\nShower Arm Thread: 1/2" NPT standard male fitting (use Teflon tape)\nAerator Thread: 55/64"-27 female / 15/16"-27 male',
        downloadableContent: `# Renter Hardware Standard Specification Guide

CABINET & DRAWER PULL HARDWARE:
• Thread Size: M4 metric standard (0.7mm pitch)
• Standard Drawer Front Thickness: 3/4 inch (requires 1-inch M4 screw)
• Standard Door Thickness: 5/8 inch (requires 7/8-inch or 1-inch M4 screw)
• Breakaway Screws: Keep a pack of segmented M4 breakaway screws (allows cutting to 20mm, 25mm, 30mm, 35mm).

PLUMBING FIXTURE SWAPS:
• Standard Shower Head Arm: 1/2" NPT (National Pipe Thread). Wrap threads 4x clockwise with Teflon tape.
• Aerators: 15/16" male / 55/64" female thread. Saves water and boosts pressure.
• Bidet Attachment: 7/8" metal T-valve adapter to toilet fill valve. Turn off shut-off valve before install.
`
      },
      {
        id: 'ren-3',
        fileName: '03_Adhesive_Shear_Load_Formula_Matrix.csv',
        fileType: 'Spreadsheet (CSV/Excel)',
        extension: '.csv',
        fileSize: 'Matrix Data • 95 KB',
        badge: 'Load Engineering',
        description: 'Safe working load calculations for adhesive strips on painted drywall, tile, metal, and wood finishes to prevent wall tearing.',
        previewSnippet: 'Surface_Type,Max_Load_Per_Hook_Lbs,Optimal_Prep,Removal_Technique,Risk_Level\nClean Painted Drywall,3.5 lbs,70% Isopropyl Alcohol,Slow downward stretch,LOW\nSemi-Gloss Tile,8.0 lbs,Denatured Alcohol,Side razor slide,ZERO RISK',
        downloadableContent: `Surface_Material,Recommended_Adhesive,Safe_Working_Load_Lbs,Prep_Requirement,Removal_Method,Drywall_Damage_Risk
Painted_Drywall_Matte,Large_Command_Strips,3.0,70_Percent_Alcohol,Straight_Down_Slow_Stretch,LOW
Painted_Drywall_Eggshell,Large_Command_Strips,4.0,70_Percent_Alcohol,Straight_Down_Slow_Stretch,VERY_LOW
Glazed_Ceramic_Tile,Nano_Gel_Tape,8.0,Degreasing_Soap_Then_Alcohol,Warm_Water_Soak,ZERO
Raw_Unfinished_Wood,Do_Not_Use_Adhesive,0.0,N_A,N_A,HIGH_SPLINTER_RISK
Smooth_Metal_Appliance,Magnetic_Hooks,15.0,Dry_Microfiber,Pull_Up_Release,ZERO`
      },
      {
        id: 'ren-4',
        fileName: '04_Five_Minute_MoveOut_Restoration_Checklist.pdf',
        fileType: 'Printable Cheatsheet',
        extension: '.pdf',
        fileSize: 'Checklist Sheet • 850 KB',
        badge: 'Move-Out Protocol',
        description: 'Room-by-room checklist guaranteeing 100% deposit return: reinstalling original pulls, removing adhesive strips safely, and cleaning residue.',
        previewSnippet: '[ ] Kitchen: Reinstall original builder pulls from Ziploc bag K-01\n[ ] Bathroom: Reinstall original shower head using wrench and Teflon tape\n[ ] Walls: Check all adhesive locations for adhesive tape stretch-release',
        downloadableContent: `# 5-Minute Room-by-Room Move-Out Restoration Protocol

=== KITCHEN RESTORATION ===
[ ] 1. Remove modern matte black cabinet pulls.
[ ] 2. Retrieve Ziploc bag from cabinet shelf with original builder screws.
[ ] 3. Screw original handles back into pre-existing holes.
[ ] 4. Peel off magnetic under-cabinet lighting bars.
[ ] 5. Wipe back of cabinets with microfiber cloth.

=== BATHROOM RESTORATION ===
[ ] 1. Shut off toilet cold water valve.
[ ] 2. Disconnect bidet T-valve and reinstall original supply line.
[ ] 3. Unscrew custom high-pressure showerhead; reinstall original chrome fixture with new Teflon tape.
[ ] 4. Remove adhesive toothbrush holder with hairdryer heat release.

=== WALLS & LIGHTING RESTORATION ===
[ ] 1. Stretch release all adhesive hooks straight down along the wall (never pull outward).
[ ] 2. Remove plug-in sconces and cord clips.
[ ] 3. If any microscopic paint chip occurred, apply 1 drop of spackle color-matched with wall paint.
[ ] 4. Complete final 4K video inspection recording for deposit proof.
`
      }
    ]
  }
};

// Fill out remaining products 5 through 20 with comprehensive photography and complete deliverable files
export const getProductAssetBundle = (productId: string): ProductAssetBundle => {
  if (PRODUCT_ASSET_BUNDLES[productId]) {
    return PRODUCT_ASSET_BUNDLES[productId];
  }

  // Curated photography database for Products 5 to 20
  const photographyMap: Record<string, ProductPhotography> = {
    'declutter-system': {
      url: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1600&q=85',
      alt: 'Clean minimalist studio interior with immaculate negative space, floating credenza, and zero clutter',
      caption: 'Pristine minimalist living zone illustrating the 30-day declutter protocol and zero-countertop policy.',
      spatialSpecs: '480 sq ft Studio • Zero Counter Clutter • 14-Day Quarantine System',
      palette: ['#FAF9F6', '#646059', '#D5D0C7', '#1A1A1A', '#A39D93'],
      stylingKeywords: ['Minimalist Declutter', 'Quarantine Box', 'Zero Clutter', 'Rent Tax Calculator']
    },
    'vertical-storage-blueprints': {
      url: 'https://images.unsplash.com/photo-1540518614846-7ede433c4ef0?auto=format&fit=crop&w=1600&q=85',
      alt: 'Modern high-ceiling apartment with floor-to-ceiling modular oak shelving unit and stylish woven baskets',
      caption: 'Modular floor-to-ceiling vertical storage unit utilizing full 9.5 ft vertical wall volume without floor crowding.',
      spatialSpecs: '460 sq ft Living • 9.5 ft Ceilings • Vertical Wall Rail System',
      palette: ['#F2EEE9', '#423E37', '#938B7E', '#1A1A1A', '#DCD4C7'],
      stylingKeywords: ['Vertical Shelving', 'Tension Rail', 'Anchor Load', 'Over-Door Storage']
    },
    'studio-divider-handbook': {
      url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=85',
      alt: 'Stylish Japandi apartment with acoustic slatted oak room divider separating living room and bedroom',
      caption: 'Acoustic slatted timber room screen providing physical and visual separation between bedroom and living zones.',
      spatialSpecs: '550 sq ft Studio • Acoustic Timber Screen • Dual-Zone Lighting',
      palette: ['#FAF8F5', '#57524A', '#CFC8BD', '#1A1A1A', '#8F877B'],
      stylingKeywords: ['Room Divider', 'Slatted Wood Screen', 'Zoning Blueprint', 'Visual Privacy']
    },
    'first-apartment-budget': {
      url: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1600&q=85',
      alt: 'Warm sunlit kitchen with minimalist stainless steel and ceramic essentials on clean quartz countertop',
      caption: 'Curated first-apartment kitchen setup featuring durable essential cooking utensils and zero duplicate gadgets.',
      spatialSpecs: 'First Rental Apartment • $1,200 - $3,500 Budget Tiers • 50 Essential Items',
      palette: ['#F6F5F2', '#3B3835', '#A6A097', '#D1CCC4', '#55514C'],
      stylingKeywords: ['Starter Checklist', 'Essential Hardware', 'Budget Matrix', 'No-Waste Shopping']
    },
    '10-min-reset-routine': {
      url: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=85',
      alt: 'Immaculate Scandinavian living room at evening with soft 2700K ambient lighting and folded throw blanket',
      caption: 'Evening visual state following the 10-minute closing shift routine: zero floor clutter and warm accent lighting.',
      spatialSpecs: 'Evening Reset • 10-Minute Timer • 4 Visual Zones • 2700K Ambient Glow',
      palette: ['#FAF9F6', '#4A463F', '#BEB7AA', '#1A1A1A', '#7A7367'],
      stylingKeywords: ['10-Min Reset', 'Closing Shift', 'Drop Zone', 'Evening Lighting']
    },
    'landlord-vault': {
      url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=85',
      alt: 'Modern organized desk setup with leather notebook, gold brass pen, apartment lease binder, and designer lamp',
      caption: 'Organized tenant administrative station with legal-grade maintenance notices, rent ledger, and move-in inspection logs.',
      spatialSpecs: 'Tenant Administrative Vault • Legal-Grade Notices • Deposit Recovery System',
      palette: ['#F7F6F2', '#33312E', '#9E988E', '#1A1A1A', '#CFCAC0'],
      stylingKeywords: ['Landlord Vault', 'Maintenance Letter', 'Deposit Return', 'Lease Ledger']
    },
    'micro-kitchen-pantry': {
      url: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1600&q=85',
      alt: 'Compact galley kitchen with magnetic knife strip, vertical tiered spice racks, and glass airtight storage jars',
      caption: 'High-density micro-kitchen organization with vertical tiered spice risers and airtight glass decanting jars.',
      spatialSpecs: '65 sq ft Galley Kitchen • Tiered Spice Risers • Vertical Magnetic Rails',
      palette: ['#F9F8F5', '#45413B', '#B4ADA1', '#1A1A1A', '#746E63'],
      stylingKeywords: ['Micro Kitchen', 'Vertical Pantry', 'Decanting Jars', 'Magnetic Rail']
    },
    'capsule-wardrobe-closet': {
      url: 'https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=1600&q=85',
      alt: 'Compact reach-in wardrobe with slim velvet hangers, neutral linen capsule collection, and acrylic shoe bins',
      caption: '4-foot reach-in closet organized with double hanging tension rods and 35-piece neutral garment capsule.',
      spatialSpecs: '4-Foot Reach-In Closet • Double Hanging Tension • 35-Piece Capsule',
      palette: ['#F8F7F4', '#3E3A35', '#AFA89D', '#1A1A1A', '#6D675E'],
      stylingKeywords: ['Capsule Wardrobe', 'Slim Hangers', 'Reach-In Closet', 'Double Tension']
    },
    'acoustic-echo-soften': {
      url: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=85',
      alt: 'Scandinavian living room with plush wool bouclé rug, acoustic fluted timber wall panel, and linen curtains',
      caption: 'Acoustic softening treatment in an open condo living room featuring high-pile wool rug and acoustic felt wall slats.',
      spatialSpecs: 'Hardwood Condo • 60% Sound Dampening • Wool Bouclé & Felt Slats',
      palette: ['#F5F4F0', '#48443E', '#BAB3A7', '#1A1A1A', '#817A6F'],
      stylingKeywords: ['Acoustic Soften', 'Sound Dampening', 'Felt Panels', 'Wool Rug']
    },
    'balcony-garden-blueprint': {
      url: 'https://images.unsplash.com/photo-1598880940371-c756e015fea1?auto=format&fit=crop&w=1600&q=85',
      alt: 'Small 40 sq ft condo balcony with cedar railing planter boxes, herb garden, bistro table, and warm string lights',
      caption: '40 sq ft condo balcony equipped with weather-treated vertical cedar planter rails and drip irrigation kit.',
      spatialSpecs: '40 sq ft Balcony • Railing Planter Boxes • Herb Micro-Garden',
      palette: ['#F6F5F2', '#3E4232', '#A1A892', '#1A1A1A', '#666B59'],
      stylingKeywords: ['Balcony Garden', 'Cedar Railing Box', 'Urban Herbs', 'Drip Irrigation']
    },
    'wfh-ergonomic-nook': {
      url: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=1600&q=85',
      alt: 'Minimalist floating wall desk with ultra-slim monitor, ergonomic chair, and concealed cable channel',
      caption: '20-inch shallow floating desk with concealed cable conduit and monitor arm in an alcove home office.',
      spatialSpecs: 'Micro Office Nook • 20" Depth Desk • Concealed Cable Raceway',
      palette: ['#F7F6F3', '#393633', '#A59F95', '#1A1A1A', '#5C5750'],
      stylingKeywords: ['Micro Desk', 'Ergonomic Nook', 'Cable Raceway', 'Monitor Arm']
    },
    'pet-small-space-protocol': {
      url: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1600&q=85',
      alt: 'Clean modern apartment living room with sleek walnut enclosed cat litter credenza and neutral pet bed',
      caption: 'Hidden furniture-integrated litter box credenza with activated carbon ventilation and anti-tracking mat.',
      spatialSpecs: 'Pet Living Protocol • Activated Carbon Air • Hidden Litter Credenza',
      palette: ['#F7F6F2', '#413D37', '#ABA499', '#1A1A1A', '#726B61'],
      stylingKeywords: ['Pet Living', 'Hidden Litter', 'Carbon Filter', 'Odor Control']
    },
    'hosting-entertaining-kit': {
      url: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1600&q=85',
      alt: 'Cozy 4-person folding drop-leaf dining table with linen runner, ceramic candleholders, and wine glasses',
      caption: 'Compact 4-person dinner party setup utilizing folding drop-leaf table and stackable oak dining chairs.',
      spatialSpecs: '4-6 Guest Capacity • Folding Drop-Leaf Table • Buffet Staging Matrix',
      palette: ['#F6F5F2', '#49443D', '#B5AEA2', '#1A1A1A', '#7E766B'],
      stylingKeywords: ['Small Space Hosting', 'Drop-Leaf Table', 'Buffet Staging', 'Dinner Party']
    },
    'circadian-lighting-blueprint': {
      url: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1600&q=85',
      alt: 'Modern warm bedroom with 3-tier lighting: paper lantern pendant, 2200K mushroom bedside lamp, and warm glow',
      caption: '3-tier circadian lighting arrangement: 2700K ambient wash, 3000K desk task beam, and 2200K evening glow.',
      spatialSpecs: '3-Tier Lighting Architecture • 2700K / 3000K / 2200K • Zero Glare Lumens',
      palette: ['#FBF9F4', '#423D32', '#C4BCA8', '#1A1A1A', '#8E846F'],
      stylingKeywords: ['Circadian Light', '3-Tier Lighting', '2200K Evening Glow', 'Lumen Matrix']
    },
    'seasonal-garment-compression': {
      url: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1600&q=85',
      alt: 'Clean under-bed storage drawer with vacuum-sealed wool blankets and cedar wood blocks in linen cubes',
      caption: 'Under-bed garment compression system shrinking bulky winter parkas and duvets by 70% volume.',
      spatialSpecs: 'Under-Bed Vault (6.5" clearance) • 70% Vacuum Compression • Cedar Defense',
      palette: ['#F7F6F3', '#3F3B36', '#ADA69B', '#1A1A1A', '#6F695F'],
      stylingKeywords: ['Seasonal Storage', 'Vacuum Compression', 'Cedar Defense', 'Under-Bed Bin']
    },
    'roommate-harmony-system': {
      url: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1600&q=85',
      alt: 'Modern 2-bedroom shared living room with clean divided chore ledger, dual desk setup, and serene neutral decor',
      caption: 'Co-living shared apartment management featuring digital chore rotation boards and quiet hours agreement.',
      spatialSpecs: 'Shared 2-Bed Condo • Legal Living Agreement • Automated Split Expense DB',
      palette: ['#FAF9F6', '#433F39', '#B8B2A6', '#1A1A1A', '#797267'],
      stylingKeywords: ['Roommate Harmony', 'Chore Rotation', 'Living Agreement', 'Expense Splitter']
    }
  };

  const photo = photographyMap[productId] || {
    url: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1600&q=85',
    alt: 'Minimalist compact interior layout with intentional design and architectural flow',
    caption: 'Modern compact living interior designed with spatial proportion formulas and high functionality.',
    spatialSpecs: 'Compact Living Sanctuary • High-End Minimalist Aesthetics',
    palette: ['#FAF9F6', '#5A5A40', '#D4CEBE', '#1A1A1A', '#8C857B'],
    stylingKeywords: ['Small Space Design', 'Modular Flow', 'Aesthetic Calm']
  };

  return {
    productId,
    rank: 5,
    title: 'SmallSpaceHome Product Asset Package',
    photography: photo,
    deliverablesOverview: 'Complete digital asset bundle with itemized deliverable files, full text downloads, Notion database templates, and printable sheets.',
    totalAssetsCount: 3,
    files: [
      {
        id: `${productId}-1`,
        fileName: `01_${productId.replace(/-/g, '_')}_Master_Guide.md`,
        fileType: 'PDF Master Guide',
        extension: '.md',
        fileSize: '45 Pages • 3.2 MB',
        badge: 'Core Guide',
        description: 'Complete tactical handbook with step-by-step procedures, measurement standards, and high-impact visual examples.',
        previewSnippet: 'Comprehensive procedures and architectural formulas designed specifically for small space dwellers.',
        downloadableContent: `# ${productId.toUpperCase().replace(/-/g, ' ')} - Complete Master Guide\nAuthor: SmallSpaceHome Editorial & Architecture Team\n\n## Core Principles\n1. Measure twice, purchase once.\n2. Optimize vertical cubic volume.\n3. Eliminate visual clutter at room transitions.`
      },
      {
        id: `${productId}-2`,
        fileName: `02_${productId.replace(/-/g, '_')}_Calculators_and_Specs.csv`,
        fileType: 'Spreadsheet (CSV/Excel)',
        extension: '.csv',
        fileSize: 'Spreadsheet Sheet • 120 KB',
        badge: 'Calculators & Specs',
        description: 'Automated formulas, dimensional lookup matrices, and budget allocations for immediate implementation.',
        previewSnippet: 'Parameter,Recommended_Spec,Tolerance,Status\nClearance,36 in,2 in,OPTIMAL',
        downloadableContent: `Metric_Name,Ideal_Value,Minimum_Safe,Unit,Notes\nPrimary_Clearance,36,30,Inches,Main human traffic corridor\nSecondary_Clearance,24,20,Inches,Bedside and side table access\nVertical_Buffer,12,6,Inches,Clearance above door frame storage`
      },
      {
        id: `${productId}-3`,
        fileName: `03_${productId.replace(/-/g, '_')}_Printable_Cheatsheet.pdf`,
        fileType: 'Printable Cheatsheet',
        extension: '.pdf',
        fileSize: 'Printable Sheet • 1.1 MB',
        badge: 'Print-Ready',
        description: 'Printable summary card formatted for standard A4 and Letter paper for quick reference in your home.',
        previewSnippet: 'Quick reference rules, checklists, and daily action cards ready for direct printing.',
        downloadableContent: `# ${productId.toUpperCase().replace(/-/g, ' ')} - Printable Cheatsheet\n\n- Standard Rule 1: Keep walkways 36" wide.\n- Standard Rule 2: Zero items on kitchen counters overnight.\n- Standard Rule 3: Use 2700K lighting for evening calm.`
      }
    ]
  };
};
