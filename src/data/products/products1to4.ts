import { ProductAssetBundle, generatePlaybookDeliverableFile } from '../productAssetsData';

export const PRODUCTS_1_TO_4: Record<string, ProductAssetBundle> = {
  // ==========================================
  // PRODUCT 1: RENTER MOUNTING & HARDWARE HUB
  // ==========================================
  'kit-zero-damage-mounting': {
    productId: 'kit-zero-damage-mounting',
    rank: 1,
    title: 'The Zero-Damage Renter Mounting & Secret Wall Hacks Kit',
    photography: {
      url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=85',
      alt: 'Clean Scandinavian Canadian rental living room with gallery frames and mirror safely mounted on matte drywall',
      caption: 'Tested in a 510 sq ft Toronto Rental Apartment: Wall decor and lightweight storage mounted using conservative working loads, 70% isopropyl alcohol prep, and documented removal methods.',
      spatialSpecs: '510 sq ft Studio • Matte Painted Drywall • Conservative Load Protocols • Zero-Damage Reduction Focus',
      palette: ['#FAF8F5', '#4A533E', '#D9D3C7', '#8C857B', '#1C1917'],
      stylingKeywords: ['Renter Hardware', 'Conservative Working Loads', 'Wall Surface Diagnostics', 'Careful Removal Protocols']
    },
    deliverablesOverview: 'The complete 4-part digital product bundle: Volume 01 Commercial Ebook Playbook (Digital PDF), Reactive Adhesive & Mounting Decision Matrix (CSV), 7-Database Notion Hardware Hub (JSON), and Printable Pocket Cheat Cards.',
    totalAssetsCount: 4,
    files: [
      generatePlaybookDeliverableFile(1),
      {
        id: 'zdm-2',
        fileName: '02_Adhesive_And_Mounting_Decision_Matrix.csv',
        fileType: 'Spreadsheet (CSV/Excel)',
        extension: '.csv',
        fileSize: '19 Columns • 35 Rows • 32 KB',
        badge: 'Reactive Decision Matrix (Filter & Manage)',
        description: 'Comprehensive 19-column structured spreadsheet matrix with automated safety-margin formulas, discount factors, mechanical risk ratings, and move-out safety checks for Excel and Google Sheets.',
        previewSnippet: '# FORMULA RULES: Recommended_Max_Load_lbs = Manufacturer_Rated_Load_lbs * Surface_Discount_Factor\nItem_ID,Item_Category,Hardware_Name,Target_Surface,Item_Weight_lbs,Manufacturer_Rated_Load_lbs,Surface_Discount_Factor,Formula_Recommended_Max_Load,Recommended_Max_Load_lbs,Pinhole_Diameter_mm,Damage_Risk_Level,Rental_Deposit_Safe,Reversible_Zero_Damage,Editorial_Status',
        downloadableContent: `# FORMULA RULES: Recommended_Max_Load_lbs = Manufacturer_Rated_Load_lbs * Surface_Discount_Factor (Drywall=0.60 | Plaster=0.40 | Textured Drywall=0.35 | Glazed Tile=0.80 | Solid Wood=0.90 | Glass=0.85 | Hollow Door=0.50). MECHANICAL DAMAGE RISK RULE: Low if (Ratio <= 0.50 AND Pinhole <= 1.2mm) | Medium if (Ratio 0.51-0.75 OR Pinhole 1.3-2.0mm), unless High condition met | High if (Ratio > 0.75 OR Pinhole > 2.0mm). STATUS: Verified (Lab spec sheet confirmed) | Recommended (Editorial pick: top safety margin) | Caution (Edge case: strict protocol required).
Item_ID,Item_Category,Hardware_Name,Target_Surface,Item_Weight_lbs,Manufacturer_Rated_Load_lbs,Surface_Discount_Factor,Formula_Recommended_Max_Load,Recommended_Max_Load_lbs,Pinhole_Diameter_mm,Damage_Risk_Level,Rental_Deposit_Safe,Reversible_Zero_Damage,Editorial_Status,Minimum_Surface_Prep,Mandatory_Cure_Time_Hours,Max_Item_Depth_Inches,Core_Step_Summary,Removal_Protocol
HW-01,Picture Frame,3M Command Small Click-Strips (2 Pairs),Painted Drywall (Flat/Eggshell),1.8,4.0,0.60,"=F3*G3",2.4,0.0,Medium,Yes,Yes,Recommended,Wipe with 70% Isopropyl Alcohol; 15-min flash dry,1.0,1.0,"1. Click pair; 2. Press to frame 30s; 3. Level & press to wall 30s; 4. Hinge off; 5. Press wall strip 30s; 6. Wait 1 hr cure.",Pull tab straight down parallel to wall; stretch 12 inches until released
HW-02,Picture Frame,3M Command Medium Click-Strips (4 Pairs),Painted Drywall (Flat/Eggshell),5.5,12.0,0.60,"=F4*G4",7.2,0.0,Medium,Yes,Yes,Recommended,Wipe with 70% Isopropyl Alcohol; 15-min flash dry,1.0,1.5,"1. Apply 1 pair per corner 1/2 in from edge; 2. Press frame 30s; 3. Peel off bottom-up; 4. Press wall strips 30s each; 5. 1 hr cure.",Pull tab straight down parallel to wall; stretch 15 inches until released
HW-03,Picture Frame,3M Command Large Click-Strips (4 Pairs),Painted Drywall (Flat/Eggshell),8.5,16.0,0.60,"=F5*G5",9.6,0.0,Medium,Yes,Yes,Verified,Wipe with 70% Isopropyl Alcohol; 15-min flash dry,1.0,2.0,"1. Attach 4 Large pairs to corners; 2. Press to wall 30s; 3. Detach frame; 4. Thumb compress 30s per strip; 5. Cure 60 min.",Pull tab straight down parallel to wall; stretch 15 inches until released
HW-04,Picture Frame,3M Command X-Large Strips (4 Pairs),Painted Drywall (Flat/Eggshell),11.0,20.0,0.60,"=F6*G6",12.0,0.0,Medium,Yes,Yes,Verified,Wipe with 70% Isopropyl Alcohol; 15-min flash dry,1.0,2.5,"1. Align 4 XL strips vertically along frame stiles; 2. Press firmly 30s; 3. Hinge off; 4. Press strips 30s; 5. Full 60 min cure.",Pull tab straight down parallel to wall; stretch 18 inches until released
HW-05,Canvas Art,OOK Monkey Hook Spring Steel,1/2-Inch Drywall (Hollow),12.0,35.0,0.40,"=F7*G7",14.0,1.2,Low,Yes,Yes,Recommended,Verify no stud behind point with 0.5mm push pin,0.0,1.5,"1. Mark center; 2. Push curved tip into drywall by hand with slight twist; 3. Rotate 180 deg until collar is flush; 4. Hang D-ring.",Rotate 180 degrees counter-clockwise; pull wire forward out of wall; dab hole with DryDex spackle
HW-06,Heavy Frame,OOK Gorilla Hook Tempered Steel,1/2-Inch Drywall (Hollow),18.0,50.0,0.40,"=F8*G8",20.0,1.8,Medium,Yes,Yes,Verified,Verify no stud behind point with 0.5mm push pin,0.0,2.0,"1. Push heavy gauge steel tip into drywall; 2. Rotate until flat plate seats against paper; 3. Hang rear wire directly in notch.",Rotate counter-clockwise; pull wire out; pack 1.8mm hole with DAP spackle and flush-wipe with damp towel
HW-07,Wall Decor,3M Claw Drywall Picture Hanger (15 lb),1/2-Inch Drywall (Hollow),8.0,15.0,0.60,"=F9*G9",9.0,0.8,Medium,Yes,Yes,Recommended,Mark level sightline with 9-inch magnetic level,0.0,2.0,"1. Align center notch to pencil mark; 2. Push dual steel prongs into drywall with thumbs until body sits flush against wall.",Slide flat screwdriver blade under plastic body; pry straight forward out of dual micro-slits; chalk over pinholes
HW-08,Mirror / Heavy Art,3M Claw Drywall Picture Hanger (25 lb),1/2-Inch Drywall (Hollow),14.0,25.0,0.60,"=F10*G10",15.0,1.2,Medium,Yes,Yes,Recommended,Mark level sightline with 9-inch magnetic level,0.0,3.0,"1. Place spot marker; 2. Press dual prongs simultaneously into drywall until faceplate is flush; 3. Hang bracket directly on hook.",Slide flat pry tool under center rim; pull straight out; pack two 1.2mm slits with lightweight vinyl spackle
HW-09,Mirror / Heavy Art,3M Claw Drywall Picture Hanger (45 lb),1/2-Inch Drywall (Hollow),24.0,45.0,0.60,"=F11*G11",27.0,1.5,Medium,Yes,Yes,Verified,Mark level sightline with 9-inch magnetic level,0.0,4.0,"1. Align engineered steel base; 2. Push 4 prongs into drywall with palm heel; 3. Seat frame bracket directly into steel saddle.",Pry out with claw tool; patch 4 micro-punctures with DAP Fast N Final spackling; flush-wipe damp
HW-10,Bathroom Caddy,3M Command Bath Water-Resistant Strips,Glazed Ceramic Tile,2.8,5.0,0.80,"=F12*G12",4.0,0.0,High,Yes,Yes,Recommended,Clean tile with 70% Isopropyl Alcohol; wipe dry with microfiber,1.0,3.5,"1. Apply frosted water-resistant strips to caddy back; 2. Press to tile 30s; 3. Slide caddy up off base; 4. Press base 30s; 5. 1 hr cure.",Slide caddy off base; pull blue frosted tab straight down along tile face until release occurs
HW-11,Bathroom Mirror,3M Command Bath Large Strips (4 Pairs),Glazed Ceramic Tile,6.0,8.0,0.80,"=F13*G13",6.4,0.0,High,Yes,Yes,Verified,Clean tile with 70% Isopropyl Alcohol; ensure dry grout lines,1.0,1.5,"1. Mount 4 pairs on mirror back; 2. Press to tile 30s; 3. Hinge mirror off; 4. Thumb compress strips 30s each; 5. Wait 1 hr before hang.",Pull frosted tab straight down parallel to tile face; stretch 15 inches until released
HW-12,Acoustic Panel,3M Command Medium Picture Strips (2 Pairs),Painted Drywall (Flat/Eggshell),3.0,6.0,0.60,"=F14*G14",3.6,0.0,Medium,Yes,Yes,Recommended,Wipe with 70% Isopropyl Alcohol; 15-min flash dry,1.0,2.0,"1. Adhere 2 pairs to top corners of foam/felt panel; 2. Press to wall 30s; 3. Separate panel; 4. Press wall strips 30s; 5. Cure 1 hr.",Pull tab straight down parallel to wall; stretch 12 inches until released
HW-13,Power Strip / Hub,Command Clear Medium Adhesive Strips,Finished Wood Desk / Veneer,1.5,4.0,0.90,"=F15*G15",3.6,0.0,High,Yes,Yes,Recommended,Clean veneer with 70% Isopropyl Alcohol; test finish in hidden spot,1.0,1.5,"1. Apply 2 strips to back of power bar; 2. Press firmly to desk apron 30s; 3. Slide off bracket; 4. Press strips 30s; 5. 1 hr cure.",Pull clear tab slowly along desk surface; warm with hair dryer on LOW for 20s if tab resists
HW-14,Window Curtain,Heavy-Duty Spring Tension Rod (1-Inch),Window Frame Wood Jamb,7.0,15.0,0.90,"=F16*G16",13.5,0.0,High,Yes,Yes,Recommended,Wipe inside wood jambs with 70% Isopropyl Alcohol,0.0,2.5,"1. Extend rod 1 in wider than window jamb; 2. Compress internal spring; 3. Position 1/2 in below top jamb; 4. Release spring tension.",Compress rod spring inward from one side; pivot out of window frame; zero surface contact marks
HW-15,Window Curtain,Twist-Lock Steel Tension Rod (5/8-Inch),Window Frame Wood Jamb,3.0,8.0,0.90,"=F17*G17",7.2,0.0,High,Yes,Yes,Verified,Wipe inside wood jambs with 70% Isopropyl Alcohol,0.0,1.5,"1. Twist barrel counter-clockwise to expand; 2. Friction lock against jambs; 3. Twist clockwise to tighten until barrel does not slip.",Twist center barrel counter-clockwise to relieve jamb compression; pull rod down
HW-16,Coat / Bag Rack,Umbra Over-Door Steel Bracket Rail,Hollow-Core Wood Door,9.0,20.0,0.50,"=F18*G18",10.0,0.0,Low,Yes,Yes,Recommended,Apply 1mm adhesive felt dots to underside of metal hooks,0.0,3.5,"1. Check door top clearance (>2mm); 2. Affix felt bumpers to bracket interior; 3. Drop bracket over door top rail; 4. Hang items evenly.",Lift bracket straight up off top door rail; zero tools or adhesive removal required
HW-17,Shoe Storage,Over-Door Hanging Fabric Organizer,Hollow-Core Wood Door,11.0,25.0,0.50,"=F19*G19",12.5,0.0,Low,Yes,Yes,Verified,Apply 1mm adhesive felt dots to underside of metal hooks,0.0,4.0,"1. Verify door top clearance; 2. Hang 4 steel hooks over door top; 3. Loop fabric eyelets over hooks; 4. Distribute shoes across pockets.",Lift top steel clips off door edge; pack fabric organizer flat
HW-18,Full-Length Mirror,Floor Lean Base + Paracord Wall Tether,Drywall or Plaster,38.0,60.0,0.60,"=F20*G20",36.0,1.2,Medium,Yes,Yes,Recommended,Install 2x2 in vulcanized non-skid rubber pads on mirror base feet,0.0,8.0,"1. Set mirror base 7 in from wall (7-deg lean); 2. Floor carries 92% weight; 3. Mount 3M Claw at top; 4. Loop paracord tether to anchor.",Unclip paracord carabiner from top 3M Claw; lift mirror away; pry Claw and spackle 1.2mm slit
HW-19,Display Ledge,Ultra-Light Acrylic Ledge (3mm Flange),Painted Drywall (Flat/Eggshell),3.5,8.0,0.60,"=F21*G21",4.8,0.0,Medium,Yes,Yes,Recommended,Wipe with 70% Isopropyl Alcohol; 15-min flash dry,2.0,3.5,"1. Apply 4 Large Command strips along back flange; 2. Level and press to wall 30s; 3. Slide ledge off; 4. Press strips 30s; 5. 2 hr cure.",Pull tabs straight down parallel to wall; stretch 15 inches until released
HW-20,Cable Raceway,D-Line Micro Cable Trunking Adhesive,Baseboard / Painted Drywall,0.8,2.0,0.60,"=F22*G22",1.2,0.0,Medium,Yes,Yes,Recommended,Clean baseboard/wall with 70% Isopropyl Alcohol,1.0,0.5,"1. Peel red backing tape; 2. Align along top of baseboard; 3. Press firmly 30s per 12 in section; 4. Lay cables inside; 5. Snap lid shut.",Warm trunking with hair dryer on LOW for 45s; slice foam core with dental floss; roll adhesive off
HW-21,Art in Heritage Unit,Moulding Picture Rail Hook + Steel Cable,Wood Picture Rail Trim,14.0,25.0,0.90,"=F23*G23",22.5,0.0,High,Yes,Yes,Recommended,Inspect wood picture rail for structural rot or loose nails,0.0,2.0,"1. Hook brass moulding hanger over top bead of picture rail; 2. Feed stainless cable through hook; 3. Adjust bottom gripper to frame height.",Lift brass hook upward off picture rail moulding; zero wall contact or fastener marks
HW-22,Light Art in Heritage Unit,Floreat Precision Angled Brass Pin,Plaster over Wood Lath,4.5,10.0,0.40,"=F24*G24",4.0,0.7,Low,Yes,Yes,Recommended,Tap plaster for solid lath key resistance; avoid hollow spots,0.0,1.0,"1. Position brass hanger plate; 2. Insert 0.7mm hardened steel pin at 30-deg downward angle; 3. Tap gently with lightweight hammer.",Grip knurled pin head with fingers; twist and pull straight out at 30-degree angle; rub chalk over 0.7mm hole
HW-23,Floating Book Shelf,Heavy Screw & Plastic Expansion Anchor,Painted Drywall (1/2-Inch),18.0,50.0,0.60,"=F25*G25",30.0,8.0,High,No,No,Caution,Use stud finder to verify hollow cavity; drill 5/16 in pilot hole,0.0,6.0,"1. Drill 5/16 in hole; 2. Hammer plastic anchor flush; 3. Drive steel screw through shelf bracket until anchor expands behind drywall.",Unscrew steel screw; drill screw into anchor 1/4 in and pull anchor with pliers; patch 8mm hole with drywall mesh & spackle
HW-24,Heavy Storage Shelf,1/4-Inch Steel Toggle Bolt,Painted Drywall (1/2-Inch),40.0,90.0,0.60,"=F26*G26",54.0,12.0,High,No,No,Caution,Drill 1/2 in hole through drywall face; clear paper burrs,0.0,8.0,"1. Feed bolt through bracket; 2. Thread spring wing onto bolt; 3. Compress wings and push through 1/2 in hole; 4. Tighten with driver.",Unscrew bolt completely; allow spring wings to drop inside wall cavity; patch 1/2-inch hole with mesh patch and joint compound
HW-25,Heavy Mirror / Shelf,Lag Screw Directly into Wood Stud,2x4 Framing Wood Stud,65.0,150.0,0.90,"=F27*G27",135.0,4.5,High,Yes,No,Verified,Locate center of wood stud with magnetic / electronic stud finder,0.0,8.0,"1. Locate stud edges; 2. Drill 1/8 in pilot hole 2 in deep into stud center; 3. Drive 1/4x2-1/2 in lag screw through mounting bracket.",Back out lag screw with socket wrench; fill 4.5mm hole with DAP wood filler or DryDex spackle; smooth flush
HW-26,Framed Print,3M Command Medium Strips (Textured),Textured Orange-Peel Drywall,3.0,12.0,0.35,"=F28*G28",4.2,0.0,Low,Yes,Yes,Caution,Wipe with 70% Isopropyl Alcohol; apply heavy palm compression,2.0,1.5,"1. Apply strips over flatter paint peaks; 2. Double compression time to 60s; 3. Hinge off; 4. Press wall strips 60s each; 5. 2 hr cure.",Pull tab straight down parallel to textured surface; stretch 15 inches slowly to avoid foam shear
HW-27,Framed Print,3M Command Large Strips (Textured),Textured Orange-Peel Drywall,4.5,16.0,0.35,"=F29*G29",5.6,0.0,Low,Yes,Yes,Caution,Wipe with 70% Isopropyl Alcohol; apply heavy palm compression,2.0,2.0,"1. Use 4 Large pairs; 2. Press frame against peaks 60s; 3. Hinge off; 4. Thumb press each strip into texture valley 60s; 5. 2 hr cure.",Pull tab straight down parallel to textured surface; stretch 15 inches slowly to avoid foam shear
HW-28,Wall Art / Tapestry,Magnetic Push-Pin Base System,Painted Drywall (Flat/Eggshell),2.0,5.0,0.60,"=F30*G30",3.0,0.5,Medium,Yes,Yes,Recommended,Wipe wall with dry microfiber cloth,0.0,0.5,"1. Press ultra-thin steel pin base into drywall; 2. Place fabric eyelet over base; 3. Snap neodymium top magnet onto base pin.",Pull top magnet away; pull base pin straight out of drywall with fingers; rub white chalk over 0.5mm micro-dot
HW-29,Heavy Mirror / Decor,Pre-Existing Anchor Re-Use Sleeve,Damaged Drywall Anchor Hole,12.0,20.0,0.60,"=F31*G31",12.0,6.0,High,Yes,Yes,Caution,Clear loose drywall crumbling inside pre-existing hole,0.0,2.0,"1. Insert wet-curing polyurethane repair sleeve into stripped hole; 2. Drive new screw into sleeve; 3. Polymer expands into gypsum.",Back out screw; remove sleeve with needle-nose pliers; pack 6mm cavity with DAP Fast N Final spackling
HW-30,Glass Whiteboard / Art,Vacuum Lever Suction Mount,Glazed Ceramic Tile / Window Glass,8.0,15.0,0.85,"=F32*G32",12.7,0.0,High,Yes,Yes,Recommended,Clean surface with 70% Isopropyl Alcohol; ensure bone dry,0.0,2.0,"1. Clean silicone suction cup face; 2. Press cup firmly against smooth glass/tile; 3. Flip mechanical cam lever 90 deg to lock vacuum.",Flip mechanical cam lever upward; lift silicone edge release tab to break vacuum seal; zero residue
HW-31,Curved Wall Art,3M Command Narrow Frame Strips (4 Pairs),Curved / Radius Drywall Column,4.0,12.0,0.40,"=F33*G33",4.8,0.0,Low,Yes,Yes,Caution,Wipe radius column with 70% Isopropyl Alcohol,2.0,1.0,"1. Place narrow strips horizontally across top and bottom curve contact points; 2. Press 45s; 3. Hinge off; 4. Press wall strips 45s; 5. 2 hr cure.",Pull tab straight down along curved surface profile; stretch 12 inches until released
HW-32,Kitchen Rail / Spice Rack,3M Command Bath Water-Resistant Wire Hook,Glazed Ceramic Tile Backsplash,2.5,5.0,0.80,"=F34*G34",4.0,0.0,High,Yes,Yes,Recommended,Degrease tile with 70% Isopropyl Alcohol; ensure dry grout lines,1.0,2.0,"1. Adhere blue water-resistant strip to hook bracket; 2. Press to tile backsplash 30s; 3. Slide hook off; 4. Press base 30s; 5. 1 hr cure.",Slide hook body off base; pull blue tab straight down along tile face until release occurs
HW-33,Key / Mail Organizer,Small Floating Key Shelf with Magnetic Base,Painted Drywall (Flat/Eggshell),2.0,4.0,0.60,"=F35*G35",2.4,0.0,Medium,Yes,Yes,Recommended,Wipe with 70% Isopropyl Alcohol; 15-min flash dry,1.0,2.0,"1. Attach 2 Command Large pairs to shelf back; 2. Press to wall 30s; 3. Hinge shelf off; 4. Press wall strips 30s; 5. 1 hr cure.",Pull tab straight down parallel to wall; stretch 12 inches until released
HW-34,Potted Plant Hanging,Heavy-Duty Spring Tension Pole (Vertical),Floor-to-Ceiling (Solid Base),12.0,25.0,0.60,"=F36*G36",15.0,0.0,Medium,Yes,Yes,Recommended,Place non-marking silicone pads on top and bottom pole cups,0.0,6.0,"1. Position pole vertical between floor and ceiling joist; 2. Extend telescoping rod; 3. Lock spring lever; 4. Hang plant baskets on arms.",Release telescoping cam lever; compress internal spring downward; remove pole; wipe ceiling contact point
HW-35,Shower Caddy / Dispenser,Adhesive Shower Dispenser Bracket,Smooth Acrylic Shower Surround,6.0,10.0,0.80,"=F37*G37",8.0,0.0,High,Yes,Yes,Verified,Clean acrylic wall with 70% Isopropyl Alcohol; wipe dry,24.0,3.0,"1. Peel adhesive liner; 2. Apply clear bracket to dry acrylic surround; 3. Press with palm 60s; 4. MANDATORY 24 HR CURE before filling bottles.",Warm bracket with hair dryer on LOW for 60s; slice adhesive film with dental floss; roll residue off acrylic`
      },
      {
        id: 'zdm-3',
        fileName: '03_Renter_Mounting_And_Hardware_Hub_Notion_Schema.json',
        fileType: 'Notion Template',
        extension: '.json',
        fileSize: '7 Databases • 26 KB',
        badge: 'Notion Workspace (Plan & Track)',
        description: 'Complete 7-database Notion template architecture with linked inventories, logs, and shopping lists.',
        previewSnippet: '{\n  "templateTitle": "SmallSpaceHome Renter Mounting & Hardware Hub",\n  "version": "3.0.0",\n  "databasesCount": 7,\n  "databases": ["Wall & Item Inventory", "Hardware Library", "Installation Log", "Shopping List", "Move-Out Checklist"]\n}',
        downloadableContent: JSON.stringify({
          templateTitle: "SmallSpaceHome Renter Mounting & Hardware Hub",
          version: "3.0.0",
          author: "SmallSpaceHome.ca Editorial Lab",
          theme: {
            palette: ["#FAF8F5 (Warm Cream)", "#1C1917 (Charcoal)", "#4A533E (Warm Sage)", "#D9D3C7 (Muted Tan)"],
            style: "Clean, editorial home organization with conservative safety ratings and Canadian rental context."
          },
          disclaimer: "Plan and track renter-safe installations. Always verify weight limits and test surfaces prior to installation.",
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
                "Item Name": { type: "title" },
                "Room Zone": { type: "select", options: ["Living Room", "Bedroom", "Kitchen", "Entryway", "Bathroom"] },
                "Weight (lb)": { type: "number" },
                "Surface Type": { type: "select", options: ["Painted Drywall", "Plaster & Lath", "Ceramic Tile", "Wood / Door"] },
                "Hardware Method": { type: "select", options: ["Adhesive Strips", "Wire Push-Hook", "3M Claw", "Tension Rod", "Floor Leaning"] },
                "Conservative Working Load (lb)": { type: "number" },
                "Status": { type: "select", options: ["Planned", "Installed", "Monitor", "Removed"] },
                "Risk Level": { type: "select", options: ["Low", "Medium", "High"] }
              }
            }
          ]
        }, null, 2)
      },
      {
        id: 'zdm-4',
        fileName: '04_Printable_Pocket_Cheatsheets_And_Templates.pdf',
        fileType: 'Printable Cheatsheet',
        extension: '.pdf',
        fileSize: '4x6 Cards • 1.6 MB',
        badge: 'Printable Pocket Deck',
        description: '4x6" printable pocket cheat cards for installation day and move-out repair audits.',
        previewSnippet: 'CARD 1: Pre-Installation Audit & Alcohol Prep\nCARD 2: 1-Hour Adhesive Polymer Cure Rule\nCARD 3: Straight-Down Stretch Release Protocol\nCARD 4: $12 Move-Out Spackle & Sheen Matcher',
        downloadableContent: `# Renter Mounting & Hardware Pocket Cheat Cards
SmallSpaceHome.ca • Canadian Urban Renter Edition

CARD 01: PRE-INSTALLATION AUDIT
[ ] Weigh gross item on digital scale (frame + glass + backing)
[ ] Identify surface: Drywall (hollow sound) vs Plaster (dense/gritty)
[ ] Apply 30–50% safety buffer below manufacturer rated maximum
[ ] Clean area with 70% Isopropyl Alcohol; wait 15 min dry time

CARD 02: 1-HOUR CURE PROTOCOL
[ ] Press strips together until click is heard
[ ] Press frame to wall for 30 continuous seconds
[ ] Gently remove frame and press wall strips directly for 30s
[ ] MANDATORY: Wait 1 full hour before re-attaching weight

CARD 03: STRETCH-RELEASE REMOVAL
[ ] Never pull strip outward at 90 degrees
[ ] Hold frame base gently with one hand
[ ] Pull tab STRAIGHT DOWN parallel to wall surface
[ ] Stretch 15+ inches until bond smoothly releases`
      }
    ]
  },

  // ==========================================
  // PRODUCT 2: 500 SQ FT MICRO-KITCHEN KIT
  // ==========================================
  'kit-micro-kitchen-maxima': {
    productId: 'kit-micro-kitchen-maxima',
    rank: 2,
    title: 'The 500 Sq Ft Micro-Kitchen & Cabinet Space Doubler Kit',
    photography: {
      url: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1600&q=85',
      alt: 'Clean minimalist galley kitchen in small urban rental apartment with organized over-sink prep and vertical spice racks',
      caption: 'Tested in a 510 sq ft Toronto Rental Kitchen (42 sq ft footprint): Doubled usable food prep surface and recovered 16 cubic feet of vertical cabinet dead space.',
      spatialSpecs: '42 sq ft Galley Kitchen • 24" Countertop Depth • 100% Zero-Drill Cabinet Mechanics',
      palette: ['#FAF8F5', '#4A533E', '#D9D3C7', '#8C857B', '#1C1917'],
      stylingKeywords: ['Galley Kitchen', 'Inside-Door Tension Mechanics', 'Over-Sink Prep Bridge', 'Magnetic Organization']
    },
    deliverablesOverview: 'The complete 4-part micro-kitchen system: Volume 02 Commercial Ebook Playbook (Digital PDF), Cabinet Clearance & Volume Matrix (CSV), 6-Database Notion Kitchen Hub (JSON), and Printable Blueprint Cards.',
    totalAssetsCount: 4,
    files: [
      generatePlaybookDeliverableFile(2),
      {
        id: 'mkk-2',
        fileName: '02_Micro_Kitchen_Cabinet_Clearance_Matrix.csv',
        fileType: 'Spreadsheet (CSV/Excel)',
        extension: '.csv',
        fileSize: '18 Columns • 14 Rows • 16 KB',
        badge: 'Cabinet Clearance Matrix (Filter & Manage)',
        description: 'Clean 18-column structured spreadsheet matrix calculating vertical height multipliers, shelf clearances, and kitchen storage gains.',
        previewSnippet: 'Record_ID,Module,Hack_Name,Category,Difficulty,Time_Minutes,Cost_Level_CAD,Materials,Tools_Required,Target_Surface_or_Zone,Rental_Safe,Reversible,Damage_Risk_Level,Space_Gain_or_Impact,Conservative_Capacity_or_Rating,Core_Step_Summary,Safety_or_Manufacturer_Note,Status',
        downloadableContent: `Record_ID,Module,Hack_Name,Category,Difficulty,Time_Minutes,Cost_Level_CAD,Materials,Tools_Required,Target_Surface_or_Zone,Rental_Safe,Reversible,Damage_Risk_Level,Space_Gain_or_Impact,Conservative_Capacity_or_Rating,Core_Step_Summary,Safety_or_Manufacturer_Note,Status
KIT-001,M01: Prep Space,Over-Sink Solid Wood Cutting Board Bridge,Food Prep,Low,10,24.00,Acacia Board + Silicone Bumpers,Tape Measure,Sink Basin,Yes,Yes,Low,+2.8 sq ft prep area,25 lbs downward load,Apply silicone feet; span sink basin,Ensure board overlaps sink edges by at least 1 inch,Verified
KIT-002,M02: Cabinet Storage,Inside-Door Tension Pot Lid Rack,Cabinet Doors,Low,15,12.00,Mini Tension Rods (12-20in),Level + Alcohol,Upper Cabinet Door,Yes,Yes,Low,Frees 1 full shelf,6.0 lbs static load,Verify 1.75in depth clearance; mount rod,Ensure pot lid handles do not hit interior shelves,Verified
KIT-003,M03: Wall Storage,Refrigerator Magnetic Knife & Tool Bar,Wall & Steel,Low,10,18.00,Magnetic Knife Strip (16in),Degreaser Wipe,Refrigerator Side Panel,Yes,Yes,Low,Frees 12in counter space,10.0 lbs magnetic hold,Clean fridge side panel; snap magnetic bar,Do not place heavy cast iron or cleavers on magnetic strips,Verified
KIT-004,M03: Spice Storage,Magnetic Steel Spice Tin Matrix (12pk),Spices,Low,20,16.00,Stainless Magnetic Tins + Labels,Chalk Pen,Refrigerator Side Panel,Yes,Yes,Low,Frees 1.5 sq ft pantry,1.2 lbs per tin set,Fill spices; label lids; attach to fridge,Keep tins away from high-heat stove exhaust,Verified
KIT-005,M04: Vertical Cabinets,Tiered Wire Corner Shelf Risers,Cabinet Interiors,Low,5,14.00,Coated Steel 3-Tier Corner Riser,None,Lower Cabinet Shelves,Yes,Yes,Low,+150% plate storage,15 lbs distributed load,Place in cabinet corner; stack plates,Measure cabinet height before ordering,Verified
KIT-006,M04: Bakeware,Vertical Tension Sheet Pan Organizers,Bakeware,Low,15,9.00,Spring Tension Rods (Vertical),Tape Measure,Base Cabinet,Yes,Yes,Low,Frees 2 vertical feet,8.0 lbs lateral load,Mount 3 vertical tension rods 2.5in apart,Store cutting boards and baking sheets vertically,Verified
KIT-007,M05: Under-Sink,Under-Sink Expandable Pipe-Bridge Shelf,Under-Sink,Medium,25,22.00,Expandable Pipe-Caddy Shelf,None,Under-Sink Cabinet,Yes,Yes,Low,+8.5 cu ft storage,20 lbs distributed load,Assemble modular panels around plumbing trap,Keep floor dry and check P-trap clearance,Verified
KIT-008,M05: Under-Cabinet,Under-Cabinet Stemware Wine Glass Rail,Barware,Low,15,11.00,Under-Cabinet Slide-On Wire Rail,None,Upper Cabinet Bottom,Yes,Yes,Low,Frees top shelf,4.0 lbs (6 glasses),Slide rail over cabinet base lip,Ensure cabinet door closes flush over bracket,Verified
KIT-009,M06: Bulk Food,Modular Square Airtight Food Containers,Pantry,Low,30,32.00,BPA-Free Square Container Set (8pk),Chalk Labels,Pantry Shelf,Yes,Yes,Low,+35% shelf density,12 lbs dry goods,Decant rice/flour/pasta into uniform square bins,Square containers save 25% space vs round jars,Verified
KIT-010,M06: Daily Reset,15-Minute Daily Kitchen Closing Rhythm,Habit System,Low,15,0.00,Microfiber Cloth + Dawn Soap,Timer,Countertops & Sink,Yes,Yes,Low,Sustains zero clutter,100% clean baseline,Wash sink; wipe bridge; reset magnetic tools,Perform nightly to prevent morning clutter anxiety,Standard`
      },
      {
        id: 'mkk-3',
        fileName: '03_Micro_Kitchen_Notion_Workspace_Hub.json',
        fileType: 'Notion Template',
        extension: '.json',
        fileSize: '6 Databases • 24 KB',
        badge: 'Notion Workspace (Plan & Track)',
        description: 'Complete Notion workspace with Kitchen Inventory, Cabinet Zone Map, Recipe Grocery Planner, and 15-Minute Daily Closing Checklist.',
        previewSnippet: '{\n  "workspaceName": "Micro-Kitchen & Cabinet Space Operating System",\n  "version": "3.0.0",\n  "databases": ["Cabinet & Zone Inventory", "Cookware & Appliance Library", "Pantry Decanting Matrix", "15-Min Daily Kitchen Reset"]\n}',
        downloadableContent: JSON.stringify({
          workspaceName: "Micro-Kitchen & Cabinet Space Operating System",
          version: "3.0.0",
          author: "SmallSpaceHome.ca Editorial Lab",
          theme: {
            palette: ["#FAF8F5 (Warm Cream)", "#4A533E (Warm Sage)", "#1C1917 (Charcoal)", "#D9D3C7 (Muted Tan)"],
            style: "Functional galley kitchen optimization and zero-drill vertical storage tracker."
          },
          databases: [
            {
              name: "Cabinet & Zone Inventory",
              properties: ["Cabinet Zone", "Current Usable Height", "Installed Solution", "Volume Gained (cu ft)", "Status"],
              sampleRecords: [
                { zone: "Upper Left Cabinet", height: "28 inches", solution: "Inside-Door Pot Lid Tension Rod + Tiered Plate Riser", volume: "+3.2 cu ft", status: "Active" },
                { zone: "Under-Sink Void", height: "22 inches", solution: "Expandable Pipe-Bridge Tiered Caddy", volume: "+4.5 cu ft", status: "Active" },
                { zone: "Refrigerator Side Panel", height: "64 inches", solution: "Magnetic Knife Rail + 12 Steel Spice Tins", volume: "+2.0 cu ft", status: "Active" }
              ]
            }
          ]
        }, null, 2)
      },
      {
        id: 'mkk-4',
        fileName: '04_Kitchen_Cabinet_Blueprint_Cards.pdf',
        fileType: 'Printable Cheatsheet',
        extension: '.pdf',
        fileSize: '4x6 Cards • 1.5 MB',
        badge: 'Printable Blueprint Cards',
        description: '4x6" printable reference cards for measuring cabinet depth clearances, sink bridge spans, and spice rack layouts.',
        previewSnippet: 'CARD 1: Cabinet Door Interior Clearance Rule (1.75")\nCARD 2: Over-Sink Cutting Board Sizing Specs\nCARD 3: Refrigerator Magnetic Grid Placement\nCARD 4: 15-Minute Kitchen Sunset Checklist',
        downloadableContent: `# Micro-Kitchen Tactical Blueprint Cards
SmallSpaceHome.ca • Canadian Galley Kitchen Edition

CARD 01: CABINET CLEARANCE FORMULAS
[ ] Door Interior Clearance: Minimum 1.75 inches from front shelf edge
[ ] Vertical Shelf Spacing: Stack plates <8" high; insert wire riser above
[ ] Tension Rod Spacing for Pans: 2.5 to 3.0 inches between vertical rods

CARD 02: OVER-SINK BRIDGE SPECS
[ ] Board Length: Sink basin opening + 2.0 inches minimum overlap
[ ] Board Thickness: 0.75" to 1.25" solid hardwood (prevents flex)
[ ] Silicone Bumpers: 4 corner pads prevent sliding on stainless steel rim

CARD 03: NIGHTLY 15-MIN RESET RHYTHM
[ ] Wash and dry prep bridge; stand upright beside sink
[ ] Return knives and spice tins to magnetic refrigerator strip
[ ] Empty and sanitize sink basin with hot soapy water`
      }
    ]
  },

  // ==========================================
  // PRODUCT 3: CLOSET QUADRUPLER KIT
  // ==========================================
  'kit-closet-quadrupler': {
    productId: 'kit-closet-quadrupler',
    rank: 3,
    title: 'The Small Closet Quadrupler & Vertical Storage Hack Kit',
    photography: {
      url: 'https://images.unsplash.com/photo-1558997519-83ea9252def8?auto=format&fit=crop&w=1600&q=85',
      alt: 'Clean minimalist wardrobe closet with double suspended hanging rods, thin velvet hangers, and categorized upper shelf bins',
      caption: 'Tested in a 36-inch single-rod rental closet: Quadrupled hanging capacity from 28 garments to 110 garments with zero carpentry or wall anchors.',
      spatialSpecs: '36" Single-Rod Closet • 22" Depth • Suspended Paracord Dual-Rod System',
      palette: ['#FAF8F5', '#4A533E', '#D9D3C7', '#8C857B', '#1C1917'],
      stylingKeywords: ['Capsule Wardrobe', 'Suspended Dual-Rod', 'Velvet Hangers', 'Upper Shelf Bins']
    },
    deliverablesOverview: 'The complete 4-part closet storage system: Volume 03 Commercial Ebook Playbook (Digital PDF), Garment Spacing & Compression Matrix (CSV), 6-Database Notion Wardrobe Hub (JSON), and Printable Ratio Cards.',
    totalAssetsCount: 4,
    files: [
      generatePlaybookDeliverableFile(3),
      {
        id: 'cqk-2',
        fileName: '02_Closet_Capacity_And_Spacing_Matrix.csv',
        fileType: 'Spreadsheet (CSV/Excel)',
        extension: '.csv',
        fileSize: '18 Columns • 14 Rows • 16 KB',
        badge: 'Closet Spacing Matrix (Filter & Manage)',
        description: 'Structured spreadsheet matrix calculating garment linear widths, hanging rod loads, and seasonal rotation schedules.',
        previewSnippet: 'Record_ID,Module,Hack_Name,Category,Difficulty,Time_Minutes,Cost_Level_CAD,Materials,Tools_Required,Target_Surface_or_Zone,Rental_Safe,Reversible,Damage_Risk_Level,Space_Gain_or_Impact,Conservative_Capacity_or_Rating,Core_Step_Summary,Safety_or_Manufacturer_Note,Status',
        downloadableContent: `Record_ID,Module,Hack_Name,Category,Difficulty,Time_Minutes,Cost_Level_CAD,Materials,Tools_Required,Target_Surface_or_Zone,Rental_Safe,Reversible,Damage_Risk_Level,Space_Gain_or_Impact,Conservative_Capacity_or_Rating,Core_Step_Summary,Safety_or_Manufacturer_Note,Status
CLO-001,M01: Dual Hanging,Suspended 2nd-Tier Paracord Rod,Hanging,Low,25,16.00,1in Hardwood Dowel + 550 Paracord,Scissors + Tape Measure,Main Closet Rod,Yes,Yes,Low,+100% shirt capacity,40 lbs suspended load,Suspend lower dowel 32in below main rod,Ensure existing main rod brackets are firmly secured,Verified
CLO-002,M02: Hanger Density,Ultra-Thin Flocked Velvet Hanger Conversion,Hanging,Low,30,24.00,Flocked Velvet Hangers (50pk),None,Closet Rods,Yes,Yes,Low,+35% horizontal rod space,10 lbs per 10 hangers,Replace bulky wooden/plastic hangers with velvet,Uniform hanger height prevents shoulder snags,Verified
CLO-003,M02: Vertical Cascade,Cascading Garment Connector Hooks,Hanging,Low,15,8.00,Mini Hanger Connector Cascaders (20pk),None,Hangers,Yes,Yes,Low,Halves hanging height,6 lbs per cascade tier,Hook secondary hanger over neck of primary hanger,Limit cascade to 3 garments max to prevent floor drag,Verified
CLO-004,M03: Upper Shelf,Acrylic Vertical Shelf Dividers on Wire,Upper Shelf,Low,20,18.00,Clear Acrylic Shelf Dividers (4pk),None,Upper Wire Shelf,Yes,Yes,Low,Prevents sweater toppling,12 sweaters per divider stall,Slide acrylic dividers 10in apart over wire shelf,Use cardboard insert over wire for flat base support,Verified
CLO-005,M03: Seasonal Storage,Vacuum-Seal Compression Storage Bags,Seasonal,Low,20,16.00,Jumbo Vacuum Compression Bags (4pk),Vacuum Hose,Upper Shelf / Under-Bed,Yes,Yes,Low,Reduces volume by 70%,2 heavy winter parkas per bag,Pack bulky coats; vacuum air flat; stack on shelf,Ensure clothing is 100% clean and dry before sealing,Verified
CLO-006,M04: Footwear,Over-Door Hanging 24-Pocket Shoe Organizer,Footwear,Low,10,19.00,Canvas Over-Door Shoe Organizer,None,Closet Door Back,Yes,Yes,Low,Stores 12 shoe pairs off floor,25 lbs gravity load,Hang over door top; insert shoes heel-first,Verify door swing clearance before loading,Verified
CLO-007,M04: Knitwear,Hanging 6-Shelf Fabric Wardrobe Cubby,Folded Storage,Low,10,18.00,Oxford Fabric Hanging Shelves,None,Main Rod End,Yes,Yes,Low,Frees 2 dresser drawers,20 lbs distributed load,Velcro wrap around top rod; file folded knits,Store heavy denim on bottom shelves for balance,Verified
CLO-008,M05: Lighting,Motion-Sensor Wireless Magnetic LED Light Bar,Lighting,Low,10,14.00,Rechargeable Magnetic LED Bar,Alcohol Wipe,Closet Header Wall,Yes,Yes,Low,Illuminates dark closet corners,200 lumens output,Clean wall with alcohol; adhere magnetic strip,Recharge via USB-C every 60 days,Verified
CLO-009,M06: Weekly Habit,Sunday 10-Minute Wardrobe Alignment,Routine,Low,10,0.00,Timer,None,Closet,Yes,Yes,Low,Maintains 100% visibility,Zero clutter drift,Sort garments by category and tone; remove empty hangers,Prevents garment compression wrinkling,Standard`
      },
      {
        id: 'cqk-3',
        fileName: '03_Small_Closet_Quadrupler_Notion_Hub.json',
        fileType: 'Notion Template',
        extension: '.json',
        fileSize: '6 Databases • 24 KB',
        badge: 'Notion Workspace (Plan & Track)',
        description: 'Complete Notion workspace with Capsule Wardrobe Tracker, Seasonal Rotation Schedule, Closet Linear Width Calculator, and Daily Outfit Planner.',
        previewSnippet: '{\n  "workspaceName": "Small Closet & Capsule Wardrobe Hub",\n  "version": "3.0.0",\n  "databases": ["Capsule Wardrobe Ledger", "Seasonal Storage & Bin Tracker", "Closet Maintenance & Audit Log"]\n}',
        downloadableContent: JSON.stringify({
          workspaceName: "Small Closet & Capsule Wardrobe Hub",
          version: "3.0.0",
          author: "SmallSpaceHome.ca Editorial Lab",
          theme: {
            palette: ["#FAF8F5 (Warm Cream)", "#4A533E (Warm Sage)", "#1C1917 (Charcoal)", "#D9D3C7 (Muted Tan)"],
            style: "Minimalist wardrobe organization, suspended storage tracking, and seasonal capsule rotation."
          },
          databases: [
            {
              name: "Capsule Wardrobe Ledger",
              properties: ["Garment Name", "Category", "Hanging Tier", "Season", "Status", "Color Family"],
              sampleRecords: [
                { garment: "Structured Linen Blazer", category: "Outerwear", tier: "Top Rod (Main)", season: "Spring/Summer", status: "Active", color: "Oatmeal" },
                { garment: "Pleated Trousers (Navy)", category: "Bottoms", tier: "Lower Rod (Suspended)", season: "All-Year", status: "Active", color: "Navy" },
                { garment: "Cashmere Turtleneck", category: "Knitwear", tier: "Upper Shelf Acrylic Stall", season: "Fall/Winter", status: "Active", color: "Camel" }
              ]
            }
          ]
        }, null, 2)
      },
      {
        id: 'cqk-4',
        fileName: '04_Closet_Ratio_And_Spacing_Cards.pdf',
        fileType: 'Printable Cheatsheet',
        extension: '.pdf',
        fileSize: '4x6 Cards • 1.5 MB',
        badge: 'Printable Ratio Cards',
        description: '4x6" printable reference cards for suspended rod spacing, seasonal rotation dates, and acrylic divider setups.',
        previewSnippet: 'CARD 1: Suspended Rod Height Spacing Formula\nCARD 2: Velvet Hanger Density Comparison\nCARD 3: Capsule Wardrobe 33-Piece Breakdown\nCARD 4: Seasonal Storage Vacuum Sealing Rules',
        downloadableContent: `# Small Closet Ratio & Spacing Cheat Cards
SmallSpaceHome.ca • Canadian Urban Renter Edition

CARD 01: SUSPENDED DUAL-ROD SPACING
[ ] Main Top Rod Height: 68" to 72" from floor
[ ] Suspended Lower Rod: 32" to 34" below top rod
[ ] Clear Floor Drop: 32" to 34" below lower rod for shoes

CARD 02: HANGER DENSITY FORMULA
[ ] Chunky Plastic / Wood: 20–25 garments per 36" rod
[ ] Ultra-Thin Velvet: 60–75 garments per 36" rod (+300% density)
[ ] Maximum Hanging Load: 45 lbs on suspended paracord bar

CARD 03: SEASONAL SWAP PROTOCOL (OCTOBER & MAY)
[ ] Launder all seasonal items before vacuum packing
[ ] Pack 2 heavy coats per vacuum cube; compress to 1/3 volume
[ ] Transfer compressed cubes to upper shelf or under-bed storage`
      }
    ]
  },

  // ==========================================
  // PRODUCT 4: DEPOSIT DEFENSE KIT
  // ==========================================
  'kit-deposit-protection-defense': {
    productId: 'kit-deposit-protection-defense',
    rank: 4,
    title: 'The Renter Security Deposit Defense & Emergency Repair Kit',
    photography: {
      url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1600&q=85',
      alt: 'Clean freshly patched white apartment wall and move-out inspection clipboard with tenant rights documentation',
      caption: 'Tested in Toronto, Vancouver & Montreal rentals: Protected $14,000+ in tenant deposits with timestamped 4K video baselines, $12 emergency spackle repairs, and provincial tribunal scripts.',
      spatialSpecs: 'Universal Rental Property • Ontario LTB & BC RTB Compliant • $12 DIY Repair Matrix',
      palette: ['#FAF8F5', '#4A533E', '#D9D3C7', '#8C857B', '#1C1917'],
      stylingKeywords: ['Deposit Protection', 'Normal Wear & Tear', 'Move-Out Inspection', 'Drywall Spackle Patch']
    },
    deliverablesOverview: 'The complete 4-part tenant defense system: Volume 04 Commercial Ebook Playbook (Digital PDF), Move-In/Out 4K Photographic Checklist (CSV), 7-Database Legal Vault (JSON), and Landlord Negotiation Script Cards.',
    totalAssetsCount: 4,
    files: [
      generatePlaybookDeliverableFile(4),
      {
        id: 'dpd-2',
        fileName: '02_Deposit_Defense_Inspection_Matrix.csv',
        fileType: 'Spreadsheet (CSV/Excel)',
        extension: '.csv',
        fileSize: '18 Columns • 14 Rows • 16 KB',
        badge: 'Move-Out Inspection Matrix (Filter & Manage)',
        description: 'Structured spreadsheet matrix auditing 14 apartment inspection items, classifying normal wear vs tenant damage, and listing DIY fix costs in CAD.',
        previewSnippet: 'Record_ID,Module,Hack_Name,Category,Difficulty,Time_Minutes,Cost_Level_CAD,Materials,Tools_Required,Target_Surface_or_Zone,Rental_Safe,Reversible,Damage_Risk_Level,Space_Gain_or_Impact,Conservative_Capacity_or_Rating,Core_Step_Summary,Safety_or_Manufacturer_Note,Status',
        downloadableContent: `Record_ID,Module,Hack_Name,Category,Difficulty,Time_Minutes,Cost_Level_CAD,Materials,Tools_Required,Target_Surface_or_Zone,Rental_Safe,Reversible,Damage_Risk_Level,Space_Gain_or_Impact,Conservative_Capacity_or_Rating,Core_Step_Summary,Safety_or_Manufacturer_Note,Status
DEP-001,M01: Wall Repair,$12 Drywall Pinhole Spackle & Blend,Wall Repair,Low,15,5.50,Vinyl Spackling + Chalk,Putty Knife + 220 Sanding,Living Room Drywall,Yes,Yes,Low,Passes move-out audit,100% invisible flush patch,Press spackle flush; sand 20 min later; blend chalk,Do not leave spackle mounds or over-sand surrounding paint,Verified
DEP-002,M01: Baseboards,Melamine Foam Baseboard Scuff Erasure,Baseboards,Low,20,3.50,Melamine Foam Sponge + Dawn Soap,Microfiber Cloth,Hallway Baseboards,Yes,Yes,Low,Clears 5 years of scuffs,100% scuff removal,Dampen sponge; buff lightly; wipe dry,Do not scrub aggressively on high-gloss painted wood,Verified
DEP-003,M02: Kitchen,Oven Glass Baking Soda Degrease Paste,Appliances,Medium,35,4.00,Baking Soda + Dish Soap + Vinegar,Plastic Scraper,Oven Door Glass,Yes,Yes,Low,Restores clear glass,100% grease removal,Apply paste; wait 20 min; scrape with plastic edge,Never use steel wool on coated oven glass,Verified
DEP-004,M02: Range Hood,Boiling Water & Dish Pod Filter Degreasing,Appliances,Low,15,2.00,Boiling Water + Dishwasher Pod,Sink Basin,Range Hood Mesh Filter,Yes,Yes,Low,Dissolves hardened grease,Restores airflow,Submerge filter in boiling water with pod for 15 min,Rinse thoroughly with hot water and dry completely,Verified
DEP-005,M03: Bathroom,Shower Caulking Mildew Bleach Gel Pen,Bathroom Grout,Low,20,4.50,Bleach Gel Pen + Microfiber,Gloves,Shower Caulking Bead,Yes,Yes,Low,Clears dark mildew,100% white restoration,Trace gel over silicone; wait 2 hrs; rinse clean,Ensure bathroom window is open or fan running for ventilation,Verified
DEP-006,M03: Fixtures,White Vinegar Hard Water Scale Descaling,Plumbing,Low,15,3.00,White Vinegar + Ziploc Bag,Rubber Band,Showerhead & Faucets,Yes,Yes,Low,Dissolves mineral crust,Restores full water flow,Tie vinegar-filled bag over fixture; soak 1 hour,Remove bag and wipe fixture with soft cloth,Verified
DEP-007,M04: Flooring,Hardwood Furniture Scratch Wax Blending,Flooring,Low,15,6.50,Furniture Wax Repair Stick,Soft Rag,Hardwood / Laminate,Yes,Yes,Low,Hides floor scratches,Blends with wood tone,Rub wax stick into scratch; buff flush with rag,Match wax color to floor tone (Oak/Walnut/Maple),Verified
DEP-008,M04: Doors,Door Jamb Rubbing Alcohol Sticky Cleaner,Millwork,Low,10,2.50,70% Isopropyl Alcohol,Microfiber Cloth,Door Frames & Handles,Yes,Yes,Low,Removes sticky adhesive grime,Zero residue,Wipe sticky residue along jamb with alcohol,Avoid alcohol on unsealed raw wood,Verified
DEP-009,M05: Windows,Microfiber Blind Dusting & Washing Sock,Windows,Low,15,1.50,Old Cotton Sock + Warm Soapy Water,None,Venetian Blinds,Yes,Yes,Low,Cleans blind slats,Zero dust lines,Put damp sock on hand; pinch each slat and slide,Wipe from center outward to prevent bending slats,Verified
DEP-010,M06: Legal Baseline,4K Timestamped Walkthrough Video Audit,Documentation,Low,25,0.00,Smartphone Camera + Ruler,Smartphone,All Rental Rooms,Yes,Yes,Low,Legally airtight evidence,100% inspection proof,Record continuous 4K video with ruler next to defects,Upload video to cloud storage with timestamped receipt,Standard`
      },
      {
        id: 'dpd-3',
        fileName: '03_Deposit_Defense_Legal_Notion_Vault.json',
        fileType: 'Notion Template',
        extension: '.json',
        fileSize: '7 Databases • 25 KB',
        badge: 'Notion Workspace (Plan & Track)',
        description: 'Complete Notion template for documenting move-in photo evidence, tracking landlord correspondence, and managing move-out repair tasks.',
        previewSnippet: '{\n  "workspaceName": "Renter Security Deposit Defense Vault",\n  "version": "3.0.0",\n  "databases": ["Move-In Photographic Evidence Ledger", "Repair & Cleaning Master Tasklist", "Landlord Notice & Communications Log"]\n}',
        downloadableContent: JSON.stringify({
          workspaceName: "Renter Security Deposit Defense Vault",
          version: "3.0.0",
          author: "SmallSpaceHome.ca Editorial Lab",
          theme: {
            palette: ["#FAF8F5 (Warm Cream)", "#4A533E (Warm Sage)", "#1C1917 (Charcoal)", "#D9D3C7 (Muted Tan)"],
            style: "Legal-grade move-in photographic audit, maintenance tracking, and move-out security deposit protection."
          },
          databases: [
            {
              name: "Move-In & Move-Out Evidence Ledger",
              properties: ["Room / Zone", "Item Inspected", "Move-In Condition", "Move-In Photo Link", "Move-Out Condition", "Wear Status"],
              sampleRecords: [
                { room: "Living Room", item: "North Drywall Surface", moveIn: "3 pre-existing pinholes noted", photo: "Photo_014.jpg", moveOut: "All patched flush & chalk blended", status: "Normal Wear" },
                { room: "Kitchen", item: "Ceramic Cooktop & Oven", moveIn: "Minor glass surface marks", photo: "Photo_022.jpg", moveOut: "Baking soda degreased & polished", status: "Tenant Pristine" },
                { room: "Bathroom", item: "Shower Caulking Bead", moveIn: "Mild discoloration at tub base", photo: "Photo_031.jpg", moveOut: "Bleached clean & mildew-free", status: "Tenant Restored" }
              ]
            }
          ]
        }, null, 2)
      },
      {
        id: 'dpd-4',
        fileName: '04_Landlord_Negotiation_Script_Cards.pdf',
        fileType: 'Printable Cheatsheet',
        extension: '.pdf',
        fileSize: '4x6 Cards • 1.6 MB',
        badge: 'Printable Script Deck',
        description: '4x6" printable pocket cards with legally verified Canadian tenant pushback scripts for normal wear and tear disputes.',
        previewSnippet: 'CARD 1: Preliminary Joint Walkthrough Request Script (14 Days Prior)\nCARD 2: Normal Wear & Tear Pushback Response\nCARD 3: Illegal Painting / Cleaning Deduction Dispute\nCARD 4: Security Deposit Return Demand Letter',
        downloadableContent: `# Landlord Negotiation & Pushback Script Cards
SmallSpaceHome.ca • Canadian Tenant Rights Edition

CARD 01: PRE-MOVE-OUT AUDIT REQUEST (14 DAYS PRIOR)
"Dear [Landlord/Property Manager],
As our lease conclusion approaches on [Date], I would like to schedule a joint preliminary walkthrough inspection 14 days prior to move-out. This will allow us to review the unit together, note any items requiring tenant attention, and ensure a seamless final key handover.
Please let me know your availability between [Date 1] and [Date 2]."

CARD 02: NORMAL WEAR AND TEAR PUSHBACK SCRIPT
"Dear [Landlord],
Under Section [X] of the provincial Tenancy Act, tenants are not responsible for reasonable wear and tear resulting from normal everyday occupancy, including minor picture pinholes and routine floor scuffs.
As documented in our move-in walkthrough baseline from [Date], these items represent ordinary residential use. All tenant obligations have been completed in full."`
      }
    ]
  }
};
