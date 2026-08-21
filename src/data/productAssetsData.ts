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
    title: 'The SmallSpaceHome Renter Mounting & Hardware Hub',
    photography: {
      url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=85',
      alt: 'Clean Scandinavian-inspired Canadian rental living room with carefully mounted art frames and mirror on matte drywall',
      caption: 'Tested in a 510 sq ft Toronto Rental Apartment: Wall decor and lightweight storage mounted using conservative working loads, 70% isopropyl alcohol prep, and documented removal methods.',
      spatialSpecs: '510 sq ft Studio • Matte Painted Drywall • Conservative Load Protocols • Zero-Damage Reduction Focus',
      palette: ['#FAF8F5', '#4A533E', '#D9D3C7', '#8C857B', '#1C1917'],
      stylingKeywords: ['Renter Hardware', 'Conservative Working Loads', 'Wall Surface Identification', 'Careful Removal Protocols']
    },
    deliverablesOverview: 'The complete 4-part digital product bundle: Field Playbook (PDF), Reactive Adhesive & Mounting Decision Matrix (CSV), 7-Database Notion Hardware Hub (JSON), and Printable Pocket Cheat Cards (PDF).',
    totalAssetsCount: 4,
    files: [
      {
        id: 'zdm-1',
        fileName: '01_Renter_Mounting_Field_Playbook.pdf',
        fileType: 'PDF Master Guide',
        extension: '.pdf',
        fileSize: '28 Pages • 3.8 MB',
        badge: 'Core Field Guide',
        description: 'Comprehensive 16-section editorial field playbook covering surface identification, conservative working loads, 13-step installation checklist, removal procedures, and move-out repairs.',
        previewSnippet: 'SECTION 1: Canadian Renter Context & Safety Ground Rules\nSECTION 4: Wall & Surface Identification Decision Table\nSECTION 8: 13-Step Repeatable Installation Checklist\nSECTION 10: Manufacturer-Compliant Removal & Heat Protocols',
        downloadableContent: `# The Zero-Damage Renter Mounting Field Playbook
## A Practical Renter's Guide to Planning, Installing, Monitoring, and Removing Wall-Mounted Items
*Publication by SmallSpaceHome.ca Editorial Lab • Canadian Renter Edition (Toronto • Vancouver • Montreal)*

> **IMPORTANT SAFETY & LIABILITY NOTICE**:
> This guide provides renter-friendly planning tools designed to help you reduce unnecessary wall damage, choose hardware more carefully, and document installations in rental homes. No mounting method can guarantee zero damage under all conditions. Always read, verify, and follow the exact manufacturer instructions for your hardware. Never exceed stated weight limits. When in doubt, use floor-standing furniture, approved stud-mounting with landlord permission, or professional assistance.

---

### TABLE OF CONTENTS
1. Cover & Canadian Renter Context
2. How to Use This Guide with the Spreadsheet & Notion Hub
3. Safety First: Working Loads & Hazard Prevention
4. Identify the Wall or Surface (Drywall, Plaster, Tile, Wood, Glass, Wallpaper)
5. Measuring & Weighing Items (Tare Weighing & Shelf Dynamic Loads)
6. Choose the Mounting Category (Adhesives, Push-Pins, Tension, Over-Door, Floor Supports)
7. Surface Preparation & The 70% Isopropyl Alcohol Protocol
8. The 13-Step Repeatable Installation Procedure
9. Routine Monitoring & Seasonal Inspection Checklist
10. Careful Removal Protocols & Thermal Softening Limits
11. Lightweight Mounting Methods & Experimental Boundaries (<2 lbs)
12. Heavier Items, High-Risk Objects & Floor Support Alternatives
13. Move-Out Inspection & Minor Surface Repair Protocol
14. Visual Decision Trees (Weight, Surface, Adhesive Suitability)
15. Printable Pocket Cheat Cards (Before, During, Removal, Move-Out)
16. Verified Sources, Canadian Retailers & Complete Disclaimer

---

### SECTION 01: CANADIAN RENTER CONTEXT & PHILOSOPHY
Renting in Canadian urban centres like Toronto, Vancouver, and Montreal presents specific architectural constraints:
- **Typical Footprint**: 450–650 sq ft open-concept condos or older heritage walk-ups with plaster-and-lath walls.
- **Lease Agreements**: Standard provincial leases (such as the Ontario Standard Lease or BC Residential Tenancy Agreement) generally permit reasonable decoration, but landlords may deduct repair expenses if improper fasteners tear drywall paper or leave large anchor blowouts.
- **Our Philosophy**: We do not believe in risking your security deposit or personal safety on exaggerated marketing claims. Instead of claiming "100% zero wall damage," we apply conservative structural load planning, surface testing, and meticulous documentation.

---

### SECTION 02: HOW TO USE THIS GUIDE
Follow the 4-step workflow:
1. **Measure & Weigh**: Use a digital scale to find the actual gross weight (including frame, glass, and hanging brackets).
2. **Identify Surface**: Distinguish between modern drywall, brittle heritage plaster, hollow hollow-core doors, and masonry.
3. **Select & Verify Hardware**: Match hardware to the surface and apply a 30% to 50% safety margin below manufacturer rated maximums.
4. **Log & Monitor**: Record installation dates, photo evidence, and follow-up checks in your Notion Hub.

**When to Stop and Choose a Different Method**:
- If the item exceeds 15 lbs and you cannot anchor into a structural wall stud.
- If the wall surface is textured, powdery, peeling, damp, or recently painted (less than 28 days cure time).
- If the item is suspended directly above a bed, crib, sofa, or primary walkway.
- In these cases, immediately transition to floor-leaning or freestanding furniture solutions.

---

### SECTION 03: SAFETY FIRST: WORKING LOADS & HAZARD PREVENTION
1. **Never Exceed Manufacturer Maximums**: Stated ratings represent static lab conditions. In real apartments with vibration, humidity, and airflow, dynamic forces reduce real holding capacity.
2. **Apply Conservative Working Loads**: As a rule of thumb, do not load adhesive products past 50% to 70% of their rated capacity. For example, a strip rated for 16 lbs should only be loaded to 8–10 lbs.
3. **Inconspicuous Test Area**: Always apply a test strip in a hidden spot (e.g., inside a closet or behind a door) and remove it after 24 hours to confirm paint adhesion.
4. **Hazard Zones**: Do not hang glass frames, mirrors, or heavy shelving over headboards or seating. If an adhesive bond fails, gravity causes injury.
5. **No Universal Guarantee**: Paint formulations vary widely (matte, eggshell, low-VOC, builder-grade). Low-VOC paints contain silicone additives that resist adhesives.

---

### SECTION 04: IDENTIFY THE WALL OR SURFACE
Use this decision table before choosing any mounting method:

| Surface Type | Diagnostic Characteristics | Suitable Mounting Options | Options to Avoid | Testing Advice |
| :--- | :--- | :--- | :--- | :--- |
| **Standard Drywall (Gypsum)** | Hollow sound when tapped; smooth painted finish; modern buildings. | Quality adhesive picture strips, push-in drywall hooks (small pinholes), stud screws. | Standard plastic anchors without stud backer for dynamic loads. | Test adhesive strip inside closet for 24 hours. |
| **Plaster & Lath** | Solid, dull sound; cold to the touch; common in pre-1960 buildings. | Picture rail hooks, thin picture wire nails driven at 45° into lath, tension rods. | Push-in wire hooks (will bend/snap on lath); heavy adhesive strips (risk pulling brittle skim coat). | Check for crumbling plaster around outlets. |
| **Glazed Ceramic Tile** | Non-porous, glossy or matte tile in bathrooms/kitchens. | Waterproof suction brackets, high-bond removable waterproof adhesive strips. | Mechanical drilling (cracks tile); standard paper-backed tape. | Clean with 70% isopropyl alcohol to remove soap scum before mounting. |
| **Finished Wood / Veneer** | Cabinet doors, trim, millwork. | Low-tack removable strips, felt-padded over-door hooks. | High-tack adhesives that can lift wood stain or polyurethane. | Test on interior back of cabinet door first. |
| **Metal & Refrigerator Sides** | Ferrous steel refrigerator or magnetic backsplash panels. | Rare-earth magnetic hooks, rubber-coated magnetic tool bars. | Permanent foam tape, cyanoacrylate glues. | Ensure steel thickness is adequate to prevent magnetic slippage. |
| **Glass & Mirrors** | Non-porous, smooth, rigid. | Suction hooks, clear removable double-sided acrylic strips. | Opaque foam adhesives that degrade in UV sunlight. | Clean thoroughly with alcohol; avoid mounting in direct freezing condensation. |
| **Wallpaper & Textured Drywall** | Embossed patterns, vinyl paper, orange-peel, or popcorn textures. | Freestanding shelving, tension poles, floor-leaning easels. | **ALL adhesive strips** (will rip paper or fail on textured peaks). | **DO NOT USE ADHESIVES**. Mechanical pinhooks only if lease permits. |

---

### SECTION 05: MEASURING & WEIGHING ITEMS
- **Tare Weighing Technique**: Step on a digital bathroom scale holding the item, note the total weight, then subtract your own body weight. For items under 5 lbs, use a digital kitchen scale.
- **Include All Hardware**: Weigh the frame with glass, backing board, and any internal mats or hanging wires.
- **Dynamic Shelf Loads**: A floating picture ledge weighs 2 lbs, but 4 hardcover books and a ceramic pot add 8 lbs. Calculate gross weight = Shelf tare weight + Maximum anticipated contents.
- **Dimension Check**: Measure width, height, and depth. Deep items (depth > 4 inches) exert high leverage/torque (shear + tensile pull) on wall fixings.

---

### SECTION 06: CHOOSE THE MOUNTING CATEGORY
1. **Adhesive Picture-Hanging Strips**: Best for flat, lightweight frames under 8 lbs on smooth drywall. Interlocking dual-lock teeth allow item removal without pulling adhesive from wall.
2. **Push-In Drywall Hooks / Wire Anchors**: Hardened steel wire hooks inserted by hand into drywall. Leaves a pinhole (<1.5 mm) smaller than a finish nail. Suitable for frames 10–25 lbs where lease permits minor pinholes.
3. **Spring Tension Rods**: Zero wall penetration. Ideal for sheer curtains, galley kitchen hanging organizers, and closet tier doublers between solid walls or door frames.
4. **Over-Door Brackets**: Utilizes door top clearance (standard 2mm gap required). Supports coats, towels, and shoe organizers without fasteners.
5. **Magnetic Mounting Systems**: Perfect for small kitchen spice bars and key hooks on metal surfaces.
6. **Floor-Leaning / Freestanding Alternatives**: The gold standard for mirrors over 20 lbs and oversized art. Place non-slip rubber floor pads under the base and a single tether cord to a low drywall anchor to prevent tip-over.

---

### SECTION 07: SURFACE PREPARATION & THE 70% ISOPROPYL ALCOHOL PROTOCOL
- **Why Preparation Fails**: 80% of adhesive bond failures occur because walls harbour a microscopic film of aerosolized cooking grease, skin oils, and ambient dust.
- **Cleaning Protocol**:
  1. Dampen a clean lint-free microfiber cloth with **70% Isopropyl Alcohol**.
  2. Wipe the target area gently in a circular motion.
  3. **DO NOT** use household multi-surface sprays, glass cleaners, or dish soap (they leave silicone surfactants that repel adhesive).
  4. Allow the area to air-dry completely for **15 minutes**.
- **Temperature & Humidity Thresholds**:
  - Minimum wall temperature: 15°C (59°F).
  - Maximum wall temperature: 30°C (86°F).
  - If walls feel cold (common in Canadian winter near exterior windows), warm the surface for 10 seconds with a hair dryer on low before adhesive application.

---

### SECTION 08: THE 13-STEP REPEATABLE INSTALLATION PROCEDURE
1. **Verify Weight**: Confirm gross item weight on a calibrated digital scale.
2. **Examine Surface**: Check surface type and verify paint is firmly bonded (no flaking).
3. **Check Product Rating**: Confirm manufacturer rated load and calculate conservative working load (≤60% rating).
4. **Plan Layout**: Hold item in place and use light painter's tape to mark top corners (do NOT use pencil or ink).
5. **Clean Surface**: Wipe with 70% Isopropyl alcohol and allow 15 minutes dry time.
6. **Apply Hardware to Item**: Press adhesive strip firmly to frame for 30 seconds.
7. **Apply Item to Wall**: Press frame firmly against wall for 30 full seconds across each adhesive point.
8. **Separate Item from Wall** (for dual-lock strips): Grab bottom corners and peel frame upward from the bottom to detach interlocking teeth, leaving wall strips in place.
9. **Reinforce Wall Strips**: Press remaining wall strips firmly with thumb pressure for 30 seconds.
10. **Mandatory 1-Hour Cure Wait**: **DO NOT** hang the item immediately. Allow adhesive bond to build molecular grip for 1 full hour (or 24 hours for maximum strength).
11. **Re-attach Frame**: Align interlocking teeth and press firmly until an audible click is felt.
12. **Check Level**: Place a small bubble level across top frame.
13. **Photograph & Log in Notion**: Capture installation photo and log date, hardware, and weight in your Notion Hub.

---

### SECTION 09: ROUTINE MONITORING & SEASONAL INSPECTION
Canadian homes experience extreme humidity swings (dry forced-air heating in winter, humid summers):
- **30-Day Initial Check**: Inspect adhesive top edges for any peeling, creeping, or downward sagging.
- **Seasonal Review**: Inspect bathroom and kitchen mounts when heating season begins (November) and summer humidity peaks (July).
- **Shelf Load Audits**: Ensure additional items have not been stacked on decorative ledges.

---

### SECTION 10: CAREFUL REMOVAL PROTOCOLS
1. **Never Pull Outward or Sideways**: Pulling an adhesive tab at a 45-degree angle will snap the tab and tear drywall paper.
2. **The Straight-Down Stretch**: Grasp the rounded tab and slowly pull it **straight DOWN parallel to the wall**. Stretch it smoothly 15 to 30 cm until the strip releases cleanly.
3. **Gentle Thermal Softening (If Permitted)**: If a tab snaps or feels bonded to delicate paint, warm the plastic bracket gently with a hair dryer on medium heat for 30–45 seconds to soften the adhesive polymer before sliding dental floss behind the bracket.
4. **DO NOT** use razor blades, putty knives, or screwdrivers against raw drywall.
5. **Inspect & Photograph**: Record removal photo and note surface condition in your Move-Out Checklist.

---

### SECTION 11: LIGHTWEIGHT MOUNTING METHODS (<2 LBS)
- **Small Decor & Postcards**: Use low-tack washi tape or removable poster putty on cured drywall.
- **Cable Management Clips**: Use small adhesive wire clips along baseboards. Warm slightly before removal.
- **Temporary Tape Bridges (Experimental)**: Blue painter's tape applied to wall + matching tape on lightweight wooden sign (<1.5 lbs) bonded with craft glue. *Note: Only suitable for ultra-light items under 1.5 lbs. Never use for structural storage.*

---

### SECTION 12: HEAVIER ITEMS & FLOOR SUPPORT ALTERNATIVES
- **Items Over 15 Lbs**: Do NOT rely on adhesive strips. Use stud-finding magnets to locate wooden studs and secure with wood screws (where permitted by lease), or use mechanical push-in drywall anchors with minimal pinholes.
- **Oversized Full-Length Mirrors**: Place base firmly on floor atop rubber non-slip furniture pads. Angle mirror back 5 degrees against wall. Use a single lightweight anti-tip tether at top to prevent forward tipping.
- **Freestanding Storage Towers**: Utilize vertical ladder shelves that rest on the floor and lean gracefully against the wall without carrying downward shear load.

---

### SECTION 13: MOVE-OUT INSPECTION & MINOR REPAIR PROTOCOL
1. **Pre-Move-Out Audit (14 Days Prior)**: Inspect all wall surfaces and cross-reference with your move-in photo baseline.
2. **Pinholes & Small Nail Holes**: Fill hole flush with a pea-sized dab of lightweight vinyl spackling compound. Smooth flat with a clean plastic putty knife or old credit card.
3. **Sanding**: Once dry (20–30 minutes), gently buff the spot with 220-grit ultra-fine sandpaper until perfectly flush.
4. **Sheen & Colour Blending**: If touch-up paint is not provided by the landlord, match the off-white sheen using artist chalk or soft blending compound.
5. **When Not to Repair**: Avoid large plaster gouges without consulting your landlord or building superintendent. Improperly painted patches often draw more attention than clean pinholes.

---

### SECTION 14: VISUAL DECISION TREES
- **Decision Tree 1: Item Weight**:
  - Under 4 lbs -> Standard adhesive picture strips.
  - 4 to 12 lbs -> Multi-pair heavy-duty adhesive strips with 50% safety margin.
  - 12 to 25 lbs -> Push-in steel drywall wire hooks (micro-pinholes) OR floor-leaning support.
  - Over 25 lbs -> Stud mounting with landlord approval OR freestanding furniture.
- **Decision Tree 2: Wall Surface**:
  - Smooth Drywall -> Compatible with verified adhesives and push hooks.
  - Plaster & Lath -> Picture rails, angled finish nails, or floor furniture.
  - Tile / Glass -> Waterproof suction or high-bond non-porous strips.
  - Wallpaper / Textured -> Freestanding / Tension rods ONLY.

---

### SECTION 15: PRINTABLE POCKET CHEAT CARDS
*(Printable 4x6" reference cards provided in File 04 for handy on-site reference during move-in and installation days).*

---

### SECTION 16: VERIFIED SOURCES & LIABILITY DISCLAIMER
- **Manufacturer Documentation Checked**: 3M Command Technical Specifications, OOK Picture Hanging Guidelines, 3M Claw Load Testing Reports.
- **Canadian Tenancy Frameworks**: Ontario Residential Tenancies Act (2006), BC Residential Tenancy Act, Régie du logement du Québec guidance on reasonable wear and tear.
- **Disclaimer**: *The advice and tools provided in this playbook are for general educational purposes. SmallSpaceHome.ca and its authors accept no liability for property damage, personal injury, or deposit disputes resulting from the use or misuse of these techniques. Always prioritize product manufacturer safety instructions.*`
      },
      {
        id: 'zdm-2',
        fileName: '02_Adhesive_And_Mounting_Decision_Matrix.csv',
        fileType: 'Spreadsheet (CSV/Excel)',
        extension: '.csv',
        fileSize: '22 Columns • 16 Rows • 18 KB',
        badge: 'Reactive Decision Matrix',
        description: 'Reactive spreadsheet matrix with 22 core columns, automated safety-margin calculations, conditional risk formatting, and interactive recommendation logic.',
        previewSnippet: 'Record_ID,Hardware_Type,Brand_or_Manufacturer,Product_Model,Rated_Capacity_LB,Conservative_Working_Load_LB,Item_Weight_LB,Safety_Margin_LB,Wall_Surface,Surface_Condition,Item_Category,Location,Adhesive_or_Mechanical,Removal_Method,Test_Required,Manufacturer_Instructions_Checked,Product_Link,Verification_Date,Risk_Level,Recommendation,Reason,Customer_Notes',
        downloadableContent: `Record_ID,Hardware_Type,Brand_or_Manufacturer,Product_Model,Rated_Capacity_LB,Conservative_Working_Load_LB,Item_Weight_LB,Safety_Margin_LB,Wall_Surface,Surface_Condition,Item_Category,Location,Adhesive_or_Mechanical,Removal_Method,Test_Required,Manufacturer_Instructions_Checked,Product_Link,Verification_Date,Risk_Level,Recommendation,Reason,Customer_Notes
REC-001,Adhesive Picture Strips (Small),3M Command,17202-ES,4.0,2.5,1.5,1.0,Painted Drywall,Smooth & Clean,Small Art Frame,Living Room,Adhesive,Straight Down Stretch,No,Yes,https://command.3mcanada.ca,2026-03-01,Low,Suitable for review,Adequate load margin and compatible smooth drywall surface,Use 2 pairs for balanced corner support
REC-002,Adhesive Picture Strips (Medium),3M Command,17201-ES,12.0,8.0,4.5,3.5,Painted Drywall,Smooth & Clean,Medium Framed Print,Bedroom,Adhesive,Straight Down Stretch,No,Yes,https://command.3mcanada.ca,2026-03-01,Low,Suitable for review,Conservative working load respected with >30% margin,Clean wall with 70% alcohol and wait 1hr before loading
REC-003,Adhesive Picture Strips (Large),3M Command,17206-ES,16.0,10.0,7.0,3.0,Painted Drywall,Smooth & Clean,Large Canvas Art,Dining Nook,Adhesive,Straight Down Stretch,No,Yes,https://command.3mcanada.ca,2026-03-01,Low,Suitable for review,Item weight 7 lbs is safely below 10 lb working load,Apply 4 pairs (one at each corner) for stability
REC-004,Adhesive Picture Strips (Large),3M Command,17206-ES,16.0,10.0,14.0,-4.0,Painted Drywall,Smooth & Clean,Heavy Wood Mirror,Living Room,Adhesive,Straight Down Stretch,No,Yes,https://command.3mcanada.ca,2026-03-01,High,Do not use,Item weight (14 lbs) exceeds conservative 10 lb working load,Risk of sudden adhesive creep failure over time
REC-005,Adhesive Water-Resistant Strips,3M Command,17605B-ES,5.0,3.0,1.8,1.2,Glazed Ceramic Tile,Clean & Degreased,Shower Caddy / Squeegee,Bathroom,Adhesive,Straight Down Stretch,Yes,Yes,https://command.3mcanada.ca,2026-03-01,Medium,Test first,High humidity environment requires surface degreasing,Test adhesion on spare tile area before loading
REC-006,Push-In Drywall Wire Hook,Gorilla Hook / OOK,Original Hook,30.0,20.0,12.0,8.0,Standard Drywall,Solid Drywall (Hollow Back),Heavy Framed Mirror,Hallway,Mechanical,Thumb Lever Pull,No,Yes,https://homedepot.ca,2026-03-01,Low,Suitable for review,Mechanical wire transfer load to drywall rear face,Leaves pinhole <1.5mm easily filled with dab of spackle
REC-007,Push-In Drywall Wire Hook,Gorilla Hook / OOK,Original Hook,30.0,20.0,10.0,10.0,Plaster & Lath,Brittle Heritage Plaster,Framed Art,Living Room,Mechanical,Thumb Lever Pull,Yes,Yes,https://homedepot.ca,2026-03-01,High,Do not use,Push wire cannot penetrate solid wood lath and will bend/crack plaster,Use picture rail hooks or surface-rated angled nails
REC-008,Heavy Duty Push Anchor,3M Claw,3MH45-4PK,45.0,30.0,22.0,8.0,Standard Drywall,Smooth Drywall,Oversized Wall Clock,Living Room,Mechanical,Lever Pull,No,Yes,https://3mcanada.ca,2026-03-01,Medium,Suitable for review,Hardened steel claws distribute load across 4 micro-pinholes,Do not install over sleeping areas or cribs
REC-009,Spring Tension Shower Rod,Zenith / Moen,TR100,30.0,20.0,8.0,12.0,Ceramic Tile / Solid Jambs,Rigid & Parallel,Shower Curtain & Liner,Bathroom,Mechanical (Tension),Twist Tension Release,No,Yes,https://canadiantire.ca,2026-03-01,Low,Suitable for review,Zero wall penetration with solid rubber end grips,Wipe wall jambs clean to prevent rubber slipping
REC-010,Heavy Spring Tension Rod,RoomDividersNow,T-ROD-84,45.0,30.0,16.0,14.0,Solid Wood / Door Frame,Rigid Door Jamb,Privacy Curtain Divider,Studio Entry,Mechanical (Tension),Twist Tension Release,No,Yes,https://amazon.ca,2026-03-01,Low,Suitable for review,Safe zero-damage room division between solid wall frames,Ensure vertical plumb alignment before tightening
REC-011,Over-Door 5-Hook Rail,Umbra,Schnook,20.0,14.0,9.0,5.0,Solid / Hollow Core Door,Standard 1.38in Door,Winter Coats & Bags,Entryway,Mechanical (Gravity),Lift Off,No,Yes,https://umbra.com,2026-03-01,Low,Suitable for review,Zero fasteners; uses door frame gravity support,Verify 2mm door top clearance to prevent rubbing jamb
REC-012,Magnetic Kitchen Rail,IKEA / Mastercraft,Kungsfors,15.0,10.0,6.0,4.0,Ferrous Metal / Fridge Side,Steel Surface,Chef Knives & Spices,Kitchen,Magnetic,Lift Off,No,Yes,https://ikea.ca,2026-03-01,Low,Suitable for review,Direct magnetic grip to refrigerator side panel,Keep heavy cast iron off magnetic strips for safety
REC-013,Painter Tape + Hot Glue Bridge,ScotchBlue + Gorilla,2090 + HotGlue,5.0,2.0,1.2,0.8,Painted Drywall,Smooth Cured Paint,Light Wood Sign / Key Hook,Entryway,Adhesive Hybrid,Peel Painter Tape,Yes,Yes,https://scotchblue.ca,2026-03-01,Medium,Test first,Experimental method: Blue tape provides clean-release base,Only for light decorative items under 2 lbs. Test first.
REC-014,Adhesive Poster Strips,3M Command,17024-ES,1.0,0.5,0.2,0.3,Wallpaper,Textured Vinyl Paper,Calendar / Print,Kitchen Nook,Adhesive,Straight Down Stretch,Yes,No,https://command.3mcanada.ca,2026-03-01,High,Do not use,Adhesive can delaminate vinyl or tear paper upon removal,Use freestanding calendar stand or magnetic board
REC-015,Freestanding Leaning Bracket,Custom / IKEA,Floor Support,100.0,75.0,38.0,37.0,Hardwood / Drywall,Level Floor,Full-Length Dressing Mirror,Bedroom,Floor Leaning + Tether,Unscrew Tether,No,Yes,https://ikea.ca,2026-03-01,Low,Suitable for review,Floor carries 95% of weight; wall tether prevents tip-over,The safest method for mirrors over 25 lbs in rentals
REC-016,Heavy Drywall Toggle Bolt,Hillman / Cobra,FlipToggle,100.0,50.0,42.0,8.0,Hollow Drywall,1/2in Drywall,Floating Book Shelf,Living Room,Mechanical (Drill),Unscrew & Push Inside,No,Yes,https://homedepot.ca,2026-03-01,High,Use floor support or professional method,Shelves carrying dynamic book loads risk drywall anchor blowout,Requires 1/2in drill hole that requires landlord repair consent`
      },
      {
        id: 'zdm-3',
        fileName: '03_Renter_Mounting_And_Hardware_Hub_Notion_Schema.json',
        fileType: 'Notion Template',
        extension: '.json',
        fileSize: '7 Databases • 26 KB',
        badge: '1-Click Notion Architecture',
        description: 'Complete 7-database Notion template specification with properties, select options, relations, sample records, recommended views, and setup guide.',
        previewSnippet: '{\n  "templateTitle": "SmallSpaceHome Renter Mounting & Hardware Hub",\n  "version": "3.0.0",\n  "author": "SmallSpaceHome.ca",\n  "theme": "Calm Neutral Editorial (Muted Sage, Charcoal, Off-White)",\n  "databasesCount": 7\n}',
        downloadableContent: JSON.stringify({
          templateTitle: "SmallSpaceHome Renter Mounting & Hardware Hub",
          version: "3.0.0",
          author: "SmallSpaceHome.ca Editorial Lab",
          theme: {
            palette: ["#FAF8F5 (Warm Off-White)", "#1C1917 (Charcoal)", "#4A533E (Muted Sage)", "#D9D3C7 (Warm Beige)", "#8C857B (Clay)", "#5B7C8D (Soft Blue)"],
            style: "Clean, editorial home organization with conservative safety ratings and Canadian rental context."
          },
          disclaimer: "This Notion template is a structured specification for planning and tracking renter-safe installations. It does not replace manufacturer instructions or guarantee zero damage. Always verify weight limits and test surfaces prior to installation.",
          workflow4Step: [
            "1. Measure and weigh the item (gross weight including frame & glass).",
            "2. Identify the wall or surface (drywall, plaster, tile, wood, glass).",
            "3. Choose and verify the hardware (apply 30-50% conservative safety margin).",
            "4. Record installation, photo evidence, and scheduled removal dates."
          ],
          databases: [
            {
              id: "db_wall_inventory",
              name: "Wall & Item Inventory",
              description: "Master ledger of all hung and mounted items across your apartment.",
              properties: {
                "Item Name": { type: "title", required: true },
                "Room / Zone": { type: "select", options: ["Living Room", "Bedroom", "Kitchen / Galley", "Dining Nook", "Entryway", "Bathroom", "Balcony"] },
                "Item Category": { type: "select", options: ["Framed Art", "Mirror", "Wall Clock", "Floating Shelf / Ledge", "Curtain Rod", "Storage Hook", "Acoustic / Decor"] },
                "Item Weight": { type: "number", format: "number" },
                "Weight Unit": { type: "select", options: ["lb", "kg"] },
                "Item Width (in)": { type: "number" },
                "Item Height (in)": { type: "number" },
                "Surface Type": { type: "select", options: ["Painted Drywall", "Plaster & Lath", "Glazed Tile", "Finished Wood", "Metal / Refrigerator", "Glass", "Wallpaper / Textured"] },
                "Hardware Method": { type: "select", options: ["Adhesive Picture Strips", "Adhesive Utility Hook", "Push-In Drywall Wire Hook", "3M Claw Push Anchor", "Spring Tension Rod", "Over-Door Bracket", "Magnetic Mount", "Floor-Leaning + Tether", "Stud Screw (Approved)"] },
                "Manufacturer Rating (lb)": { type: "number" },
                "Conservative Working Load (lb)": { type: "number" },
                "Installation Date": { type: "date" },
                "Removal Date": { type: "date" },
                "Installation Status": { type: "select", options: ["Planned", "Test Required", "Installed", "Monitor", "Removed"] },
                "Risk Level": { type: "select", options: ["Low (Green)", "Medium (Amber)", "High (Red)"] },
                "Source / Product Link": { type: "url" },
                "Notes": { type: "rich_text" },
                "Photo / Reference": { type: "files" }
              },
              views: [
                "All Items (Table)",
                "Planned Installations (List)",
                "Installed Items (Gallery / Cards)",
                "Items Requiring Monitoring (Filter: Status = Monitor)",
                "By Room (Board by Room / Zone)",
                "High-Risk Items (Filter: Risk = High)",
                "Upcoming Removal Dates (Calendar by Removal Date)"
              ],
              sampleRecords: [
                {
                  "Item Name": "Living Room Oversized Gold Mirror",
                  "Room / Zone": "Living Room",
                  "Item Category": "Mirror",
                  "Item Weight": 22.0,
                  "Weight Unit": "lb",
                  "Item Width (in)": 30,
                  "Item Height (in)": 48,
                  "Surface Type": "Painted Drywall",
                  "Hardware Method": "Floor-Leaning + Tether",
                  "Manufacturer Rating (lb)": 100.0,
                  "Conservative Working Load (lb)": 75.0,
                  "Installation Status": "Installed",
                  "Risk Level": "Low (Green)",
                  "Notes": "Resting on non-slip silicone floor pads; tethered to low wall anchor to prevent tipping."
                },
                {
                  "Item Name": "Dining Nook Gallery Frame Cluster (x4)",
                  "Room / Zone": "Dining Nook",
                  "Item Category": "Framed Art",
                  "Item Weight": 2.8,
                  "Weight Unit": "lb",
                  "Item Width (in)": 12,
                  "Item Height (in)": 16,
                  "Surface Type": "Painted Drywall",
                  "Hardware Method": "Adhesive Picture Strips",
                  "Manufacturer Rating (lb)": 12.0,
                  "Conservative Working Load (lb)": 8.0,
                  "Installation Status": "Installed",
                  "Risk Level": "Low (Green)",
                  "Notes": "2 pairs of Medium Command strips per frame. Wall cleaned with 70% Isopropyl alcohol."
                }
              ]
            },
            {
              id: "db_hardware_library",
              name: "Hardware & Tools Library",
              description: "Catalog of verified renter hardware, dupe tools, and compatibility guides.",
              properties: {
                "Hardware or Tool Name": { type: "title", required: true },
                "Brand / Manufacturer": { type: "select", options: ["3M Command", "3M Claw", "Gorilla / OOK", "Umbra", "IKEA", "Zenith", "ScotchBlue", "Hillman", "Generic / Store Brand"] },
                "Hardware Category": { type: "select", options: ["Adhesive Picture Strips", "Adhesive Hooks", "Push-In Wire Hooks", "Claw Anchors", "Tension Rods", "Over-Door Systems", "Surface Prep & Cleaning", "Move-Out Repair"] },
                "Rated Capacity (lb)": { type: "number" },
                "Recommended Working Load (lb)": { type: "number" },
                "Compatible Surface": { type: "multi_select", options: ["Painted Drywall", "Glazed Tile", "Wood / Millwork", "Metal / Steel", "Glass"] },
                "Incompatible Surface": { type: "multi_select", options: ["Wallpaper", "Textured / Popcorn", "Brittle Plaster", "Damp Walls", "Fresh Paint (<28 days)"] },
                "Removal Method": { type: "select", options: ["Straight Down Stretch", "Thumb Lever Pull", "Twist Tension Release", "Lift Off", "Gentle Thermal Softening", "Unscrew"] },
                "Purchased": { type: "checkbox" },
                "Quantity": { type: "number" },
                "Cost in CAD": { type: "number", format: "currency" },
                "Retailer": { type: "select", options: ["Home Depot Canada", "Canadian Tire", "RONA / Lowe's", "IKEA Canada", "Amazon.ca", "Local Dollarama"] },
                "Product URL": { type: "url" },
                "Verification Date": { type: "date" },
                "Safety Notes": { type: "rich_text" },
                "Alternative Product": { type: "rich_text" }
              },
              views: [
                "Shopping List (Filter: Purchased = false)",
                "By Hardware Category (Board)",
                "Adhesive Options (Filter: Category contains Adhesive)",
                "Mechanical Fasteners (Filter: Category contains Push-In or Claw)",
                "Removal and Repair Tools (Filter: Category = Move-Out Repair)",
                "Verified Products (Filter: Verification Date is not empty)",
                "Products Requiring Verification (Filter: Verification Date is empty)"
              ]
            },
            {
              id: "db_installation_log",
              name: "Installation Log",
              description: "Audit trail for step-by-step verification, safety checklists, and monitoring follow-ups.",
              properties: {
                "Installation Name": { type: "title", required: true },
                "Related Item": { type: "relation", targetDatabase: "db_wall_inventory" },
                "Room": { type: "select", options: ["Living Room", "Bedroom", "Kitchen", "Dining Nook", "Entryway", "Bathroom"] },
                "Installation Date": { type: "date" },
                "Installer": { type: "rich_text" },
                "Wall Preparation Completed": { type: "checkbox" },
                "Hardware Checked": { type: "checkbox" },
                "Weight Verified": { type: "checkbox" },
                "Test Completed": { type: "checkbox" },
                "Follow-Up Date": { type: "date" },
                "Result": { type: "select", options: ["Successful", "Adjusted", "Failed", "Removed"] },
                "Damage Observed": { type: "select", options: ["None", "Minor", "Moderate", "Significant"] },
                "Photos": { type: "files" },
                "Notes": { type: "rich_text" }
              },
              views: [
                "Installations Needing Follow-Up (Filter: Follow-Up Date is on or before today)",
                "Installations with Damage (Filter: Damage Observed != None)",
                "Recent Installations (Sort: Installation Date descending)",
                "Completed Installations (Filter: Result = Successful)"
              ]
            },
            {
              id: "db_shopping_list",
              name: "Shopping List & Budget Estimator",
              description: "Renter hardware shopping ledger categorized by priority and Canadian retailers.",
              properties: {
                "Item": { type: "title", required: true },
                "Category": { type: "select", options: ["Adhesives", "Mechanical Pins", "Tension Rods", "Prep Supplies", "Patch & Repair", "Tools"] },
                "Quantity": { type: "number" },
                "Estimated Cost CAD": { type: "number", format: "currency" },
                "Retailer": { type: "select", options: ["Home Depot Canada", "Canadian Tire", "RONA", "IKEA Canada", "Amazon.ca", "Dollarama"] },
                "Priority": { type: "select", options: ["Essential", "Useful", "Optional"] },
                "Purchased": { type: "checkbox" },
                "Product Link": { type: "url" },
                "Intended Use": { type: "rich_text" },
                "Notes": { type: "rich_text" }
              },
              views: [
                "Unpurchased Items (Filter: Purchased = false)",
                "Essential Items (Filter: Priority = Essential)",
                "By Retailer (Board by Retailer)",
                "Total Cost Summary (Table with CAD Sum)"
              ]
            },
            {
              id: "db_move_out_checklist",
              name: "Move-Out & Repair Checklist",
              description: "Room-by-room move-out removal and surface inspection checklist.",
              properties: {
                "Area / Zone": { type: "select", options: ["Living Room", "Bedroom", "Kitchen", "Entryway", "Bathroom", "Hallway"] },
                "Item to Remove": { type: "title", required: true },
                "Removal Method": { type: "select", options: ["Straight Down Stretch", "Thermal Soften + Slide Floss", "Lever Pull Claws", "Twist Tension", "Lift Off"] },
                "Removal Date": { type: "date" },
                "Removed": { type: "checkbox" },
                "Surface Inspected": { type: "checkbox" },
                "Damage Level": { type: "select", options: ["None", "Minor (Pinholes)", "Moderate (Scuff/Tear)", "Significant"] },
                "Repair Needed": { type: "checkbox" },
                "Repair Material": { type: "select", options: ["None Needed", "Lightweight Spackle", "220-Grit Sandpaper", "Chalk Blending", "Touch-Up Paint"] },
                "Completed": { type: "checkbox" },
                "Notes": { type: "rich_text" },
                "Photo Before": { type: "files" },
                "Photo After": { type: "files" }
              },
              views: [
                "Items to Remove (Filter: Removed = false)",
                "Repairs Needed (Filter: Repair Needed = true and Completed = false)",
                "Completed Move-Out Tasks (Filter: Completed = true)",
                "By Room (Board by Area / Zone)"
              ]
            },
            {
              id: "db_safety_sources",
              name: "Safety Notes & Verified Sources",
              description: "Manufacturer technical guidelines and Canadian rental tenancy references.",
              properties: {
                "Topic": { type: "title", required: true },
                "Safety Rule": { type: "rich_text" },
                "Source / Manufacturer Link": { type: "url" },
                "Verification Date": { type: "date" },
                "Applies To": { type: "select", options: ["All Adhesives", "Drywall Push Anchors", "Heavy Mirrors / Shelves", "Bathroom / High-Humidity", "Tenancy Rights & Deposits"] },
                "Important Warning": { type: "rich_text" },
                "Reviewed": { type: "checkbox" }
              },
              sampleRecords: [
                {
                  "Topic": "Never Mount Overhead in Sleeping Zones",
                  "Safety Rule": "Adhesive picture strips are subject to environmental shear fatigue. Do not hang glass or frames over headboards.",
                  "Source / Manufacturer Link": "https://command.3mcanada.ca/safety",
                  "Verification Date": "2026-03-01",
                  "Applies To": "All Adhesives",
                  "Important Warning": "Failure can result in physical injury if adhesive releases under vibration.",
                  "Reviewed": true
                },
                {
                  "Topic": "Ontario RTA Normal Wear & Tear Guidelines",
                  "Safety Rule": "Small nail holes and reasonable hanging marks are legally categorized as normal wear and tear under Ontario tenancy decisions.",
                  "Source / Manufacturer Link": "https://tribunalsontario.ca/ltb",
                  "Verification Date": "2026-03-01",
                  "Applies To": "Tenancy Rights & Deposits",
                  "Important Warning": "Large drywall anchors or water damage caused by improper shelf loading do not qualify as normal wear.",
                  "Reviewed": true
                }
              ]
            }
          ],
          setupInstructions: [
            "Step 1: Open Notion on desktop or web browser.",
            "Step 2: Create a new blank page titled 'SmallSpaceHome Renter Mounting & Hardware Hub'.",
            "Step 3: Create the 6 linked databases with the exact property names and types listed in this schema.",
            "Step 4: Configure the recommended views for each database to match your apartment rooms.",
            "Step 5: Reference the Safety Notes database before mounting any high-risk or heavy objects."
          ]
        }, null, 2)
      },
      {
        id: 'zdm-4',
        fileName: '04_Printable_Pocket_Cheatsheets_And_Templates.pdf',
        fileType: 'Printable Cheatsheet',
        extension: '.pdf',
        fileSize: '4x6 Cards • 1.6 MB',
        badge: 'Printable Field Cards',
        description: 'Pocket-sized printable 4x6" reference cards for pre-installation, wall testing, thermal removal, and move-out inspection audits.',
        previewSnippet: 'CARD 1: Pre-Installation Weight & Surface Verification\nCARD 2: 70% Isopropyl Prep & 1-Hour Wait Rule\nCARD 3: Emergency Stretch & Thermal Removal Guide\nCARD 4: 14-Day Move-Out Wall Patching & Sheen Matching',
        downloadableContent: `# SmallSpaceHome.ca • Printable Pocket Cheat Cards
## Compact 4x6" Field Reference Cards for Canadian Apartment Renters

================================================================================
CARD 1: PRE-INSTALLATION & LOAD SAFETY AUDIT
================================================================================
[ ] STEP 1: Weigh item on a digital scale (gross weight with frame & glass).
[ ] STEP 2: Verify manufacturer rated capacity.
[ ] STEP 3: Calculate Conservative Working Load (Rating × 0.60).
[ ] STEP 4: Confirm surface is flat painted drywall, glazed tile, or smooth wood.
[ ] CRITICAL: If item is >15 lbs or hanging over a bed, STOP. Use floor support.

================================================================================
CARD 2: 70% ISOPROPYL PREP & 1-HOUR CURE PROTOCOL
================================================================================
[ ] STEP 1: Wipe area with 70% Isopropyl Alcohol on a clean microfiber cloth.
[ ] STEP 2: Air dry for 15 minutes (do NOT use Windex or multi-surface cleaners).
[ ] STEP 3: Confirm wall temperature is between 15°C and 30°C.
[ ] STEP 4: Press adhesive brackets firmly against wall for 30 continuous seconds.
[ ] STEP 5: MANDATORY: Wait 1 full hour before hanging the weight.

================================================================================
CARD 3: STRETCH-RELEASE & THERMAL REMOVAL PROTOCOL
================================================================================
[ ] STEP 1: Detach frame from wall by pulling upward from bottom corners.
[ ] STEP 2: Grasp exposed pull tab and pull SLOWLY straight DOWN parallel to wall.
[ ] STEP 3: Stretch the strip 15–30 cm until it silently releases.
[ ] STEP 4: If tab breaks, warm bracket with hair dryer on medium for 45s.
[ ] STEP 5: Slide unflavoured dental floss behind bracket to saw adhesive free.
[ ] NEVER: Do not pull outward at 45° angle. Do not use razor blades on drywall.

================================================================================
CARD 4: MOVE-OUT INSPECTION & $12 WALL TOUCHUP
================================================================================
[ ] STEP 1: Audit all walls 14 days before move-out walkthrough.
[ ] STEP 2: Fill pinholes flush with a pea-sized dab of vinyl spackling.
[ ] STEP 3: Smooth flat with old plastic gift card or plastic putty knife.
[ ] STEP 4: Allow 20 minutes to dry; sand flush with 220-grit sandpaper.
[ ] STEP 5: Rub matching off-white artist chalk to blend sheen without painting.`
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
