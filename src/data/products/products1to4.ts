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
    deliverablesOverview: 'The complete 3-part digital suite: (1) 3-in-1 Master Commercial Playbook PDF (30+ Page Guide + 4x6" Pocket Cards + License & Specs), (2) Reactive Adhesive & Mounting Decision Matrix (CSV), and (3) Tactical Renter Mounting Execution Checklist (MD).',
    totalAssetsCount: 3,
    files: [
      generatePlaybookDeliverableFile(1),
      {
        id: 'zdm-2',
        fileName: '02_Adhesive_And_Mounting_Decision_Matrix.csv',
        fileType: 'Spreadsheet (CSV/Excel)',
        extension: '.csv',
        fileSize: '19 Columns • 35 Rows • 32 KB',
        badge: 'Reactive Decision Matrix (CSV)',
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
        fileName: '03_Zero_Damage_Mounting_Execution_Checklist.md',
        fileType: 'Action Checklist & Pocket Cards',
        extension: '.md',
        fileSize: '4x6 Cards • Step-by-Step Checklist • 12 KB',
        badge: 'Action Checklist & Pocket Cards',
        description: 'Complete step-by-step installation day execution checklist and 4x6" printable pocket cards for zero-damage mounting and move-out audits.',
        previewSnippet: '# ZERO-DAMAGE RENTER MOUNTING EXECUTION CHECKLIST\n## PHASE 1: PRE-INSTALLATION DIAGNOSTICS & WEIGHT AUDIT\n[ ] 1. Weigh gross item on digital scale\n[ ] 2. Perform 70% Isopropyl alcohol wall flash wipe...',
        downloadableContent: `# ZERO-DAMAGE RENTER MOUNTING & WALL HACKS: EXECUTION CHECKLIST
*SmallSpaceHome.ca • Canadian Urban Renter Tactical Guide*

## PHASE 1: PRE-INSTALLATION DIAGNOSTICS & WEIGHT AUDIT
- [ ] **1. Gross Weight Verification**: Weigh item on a digital scale including frame, glass, art, and backing hardware. Never guess weight.
- [ ] **2. Wall Substrate Diagnostics**:
  - [ ] Tap wall firmly with knuckle. Hollow resonance = 1/2" Drywall. Dense, dull thud = Plaster over wood lath.
  - [ ] Check for wallpaper, crumbly calcimine paint, or texture peaks.
- [ ] **3. Safety Margin Calculation**: Apply the 40% discount rule: Max safe load = Rated load × 0.60 for drywall, × 0.40 for plaster.
- [ ] **4. Chemical Decontamination**: Wipe the exact target area with 70% Isopropyl alcohol on a clean microfiber cloth. Never use Windex or soap.
- [ ] **5. Flash-Dry Window**: Wait exactly 15 minutes for all solvent alcohol vapors to evaporate before applying adhesive.

---

## PHASE 2: ADHESIVE MOUNTING & POLYMER CURE PROTOCOL
- [ ] **1. Strip Pair Interlocking**: Press Command strip pairs together until an audible *click* is heard across the entire surface.
- [ ] **2. Frame Bonding**: Apply strips to the back of the frame, 1/2 inch inside the outer frame edge. Press each strip firmly for 30 seconds.
- [ ] **3. Wall Alignment & Placement**: Use a 9-inch magnetic bubble level. Press the frame against the cleaned wall for 30 continuous seconds.
- [ ] **4. Hinge Release (Crucial Step)**: Gently hinge the bottom of the frame upward off the wall. Do NOT pull straight off.
- [ ] **5. Direct Polymer Compression**: Use thumb to press firmly on each wall strip base for 30 seconds to lock the pressure-sensitive adhesive.
- [ ] **6. Mandatory 1-Hour Chemical Cure**: Set a timer for 60 minutes. Leave strips unloaded. Do NOT hang the frame until the hour expires.
- [ ] **7. Final Mounting**: Align frame strips with wall strips and click firmly into place.

---

## PHASE 3: MECHANICAL PUSH-HOOK & CLAW INSTALLATION
- [ ] **1. Stud Clearance Check**: Probe target hanging point with a 0.5mm push pin. If solid resistance is felt at 1/2", move 1 inch horizontally to clear wood stud.
- [ ] **2. OOK Monkey Hook Deployment**: Push curved steel tip into drywall with a gentle twisting motion until collar sits flush against wall paper.
- [ ] **3. 3M Claw Deployment**: Align center alignment notch with pencil mark. Press dual prongs firmly into drywall with thumbs or heel of palm.
- [ ] **4. Frame Drop**: Lower frame wire or D-ring bracket gently into the steel saddle.

---

## PHASE 4: STRETCH-RELEASE REMOVAL & MOVE-OUT AUDIT
- [ ] **1. Frame Separation**: Grip frame bottom and hinge upward to detach from wall strips.
- [ ] **2. Stretch-Release Angle**: Hold frame base lightly with non-dominant hand. Never pull tab at a 90-degree angle from the wall.
- [ ] **3. Parallel Draw**: Pull tab SLOWLY and STRAIGHT DOWN, perfectly parallel to the drywall surface.
- [ ] **4. Full Release**: Stretch the elastomeric strip 12 to 15 inches until the bond cleanly releases with zero paper tearing.
- [ ] **5. Pinhole Repair**: For push hooks, fill 1.2mm slit with a dab of DAP DryDex spackle, wipe flush with a damp microfiber cloth, and blend with white chalk.

---

## APPENDIX: PRINTABLE 4x6" POCKET FIELD CARDS
### CARD 01: PRE-INSTALLATION AUDIT
- Weigh gross item on digital scale (frame + glass + backing)
- Identify surface: Drywall (hollow sound) vs Plaster (dense/gritty)
- Apply 30–50% safety buffer below manufacturer rated maximum
- Clean area with 70% Isopropyl Alcohol; wait 15 min dry time

### CARD 02: 1-HOUR CURE PROTOCOL
- Press strips together until click is heard
- Press frame to wall for 30 continuous seconds
- Gently remove frame and press wall strips directly for 30s
- MANDATORY: Wait 1 full hour before re-attaching weight

### CARD 03: STRETCH-RELEASE REMOVAL
- Never pull strip outward at 90 degrees
- Hold frame base gently with one hand
- Pull tab STRAIGHT DOWN parallel to wall surface
- Stretch 15+ inches until bond smoothly releases`
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
    deliverablesOverview: 'The complete 3-part digital suite: (1) 3-in-1 Master Commercial Playbook PDF (30+ Page Guide + 4x6" Pocket Cards + License & Specs), (2) Cabinet Clearance & Volume Matrix (CSV), and (3) Tactical Micro-Kitchen Execution Checklist (MD).',
    totalAssetsCount: 3,
    files: [
      generatePlaybookDeliverableFile(2),
      {
        id: 'mkk-2',
        fileName: '02_Micro_Kitchen_Cabinet_Clearance_Matrix.csv',
        fileType: 'Spreadsheet (CSV/Excel)',
        extension: '.csv',
        fileSize: '18 Columns • 14 Rows • 16 KB',
        badge: 'Cabinet Clearance Matrix (CSV)',
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
        fileName: '03_Micro_Kitchen_Execution_Checklist.md',
        fileType: 'Action Checklist & Pocket Cards',
        extension: '.md',
        fileSize: '4x6 Cards • Step-by-Step Checklist • 11 KB',
        badge: 'Action Checklist & Pocket Cards',
        description: 'Complete step-by-step micro-kitchen optimization checklist and 4x6" printable reference cards for cabinet clearances and daily closing rhythms.',
        previewSnippet: '# MICRO-KITCHEN & CABINET SPACE DOUBLER EXECUTION CHECKLIST\n## PHASE 1: COUNTERTOP & OVER-SINK PREP BRIDGE\n[ ] 1. Measure sink basin opening\n[ ] 2. Affix non-slip silicone bumpers...',
        downloadableContent: `# 500 SQ FT MICRO-KITCHEN & CABINET DOUBLER: EXECUTION CHECKLIST
*SmallSpaceHome.ca • Canadian Galley Kitchen Tactical Guide*

## PHASE 1: COUNTERTOP & OVER-SINK PREP BRIDGE
- [ ] **1. Sink Basin Measurement**: Measure sink basin width from outer rim to outer rim. Select an acacia or bamboo cutting board that spans the opening with at least 1.0 inch of solid overhang on each edge.
- [ ] **2. Silicone Non-Slip Feet**: Affix 4 heavy-duty 3mm vulcanized silicone bumpers to the underside corners of the board to prevent slipping against wet stainless steel.
- [ ] **3. Weight Test**: Verify board does not bow under 15 lbs of direct downward pressure.
- [ ] **4. Clear Workspace Routine**: Establish the over-sink bridge as the primary chopping and prep zone, instantly recovering 2.8 sq ft of counter area.

---

## PHASE 2: INSIDE-DOOR TENSION POT LID & SPICE RACKS
- [ ] **1. Door Interior Depth Audit**: Measure distance between the inside of the cabinet door and the front edge of interior shelves. Minimum required clearance is 1.75 inches.
- [ ] **2. Tension Rod Selection**: Use 12–20" rubber-tipped spring-tension rods with heavy internal springs.
- [ ] **3. Alcohol Cleaning**: Clean the inside cabinet door stiles with 70% Isopropyl alcohol to ensure rubber foot grip.
- [ ] **4. Rod Placement**: Install tension rod 4 inches above the bottom of the door. Slide pot lids handle-up behind the rod.
- [ ] **5. Door Closure Check**: Confirm cabinet door closes completely flush without lid handles impacting interior cookware.

---

## PHASE 3: VERTICAL CABINET & WIRE RISER MAXIMIZATION
- [ ] **1. Vertical Shelf Spacing**: Measure vertical height inside upper and lower cabinets.
- [ ] **2. 3-Tier Corner Riser**: Place coated steel corner risers in deep corner cabinets to separate dinner plates, salad plates, and bowls into 3 accessible tiers.
- [ ] **3. Vertical Bakeware Dividers**: Install 3 spring-tension rods vertically between cabinet shelves (2.5" apart) to store sheet pans, muffin tins, and cutting boards upright like books.
- [ ] **4. Decanting Square Bins**: Transfer pasta, grains, and flour into uniform square airtight BPA-free containers. Decanting saves 25% shelf volume compared to bulky cardboard packaging.

---

## PHASE 4: UNDER-SINK PIPE-BRIDGE STORAGE
- [ ] **1. Plumbing P-Trap Clearance**: Map drainage pipe locations under sink basin.
- [ ] **2. Expandable Pipe Caddy**: Assemble an expandable 2-tier shelving unit with removable snap-in plastic panels around the center plumbing pipes.
- [ ] **3. Cleaning Caddy Placement**: Store dish tabs, sponges, and spray bottles in pull-out caddies on lower shelf tier.

---

## PHASE 5: 15-MINUTE DAILY CLOSING RHYTHM
- [ ] **1. Sink Reset**: Wash and dry all prep tools and cutting board. Stand board upright beside sink.
- [ ] **2. Magnetic Tool Alignment**: Return chef's knife and steel spice tins to the side-refrigerator magnetic bar.
- [ ] **3. Hot Water Basin Sanitization**: Wipe sink basin clean with hot soapy water.
- [ ] **4. Counter Clearance**: Leave 100% of countertop surface bare and wiped dry before bedtime.

---

## APPENDIX: PRINTABLE 4x6" BLUEPRINT CARDS
### CARD 01: CABINET CLEARANCE FORMULAS
- Door Interior Clearance: Minimum 1.75 inches from front shelf edge
- Vertical Shelf Spacing: Stack plates <8" high; insert wire riser above
- Tension Rod Spacing for Pans: 2.5 to 3.0 inches between vertical rods

### CARD 02: OVER-SINK BRIDGE SPECS
- Board Length: Sink basin opening + 2.0 inches minimum overlap
- Board Thickness: 0.75" to 1.25" solid hardwood (prevents flex)
- Silicone Bumpers: 4 corner pads prevent sliding on stainless steel rim

### CARD 03: NIGHTLY 15-MIN RESET RHYTHM
- Wash and dry prep bridge; stand upright beside sink
- Return knives and spice tins to magnetic refrigerator strip
- Empty and sanitize sink basin with hot soapy water`
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
    deliverablesOverview: 'The complete 3-part digital suite: (1) 3-in-1 Master Commercial Playbook PDF (30+ Page Guide + 4x6" Pocket Cards + License & Specs), (2) Garment Spacing & Compression Matrix (CSV), and (3) Tactical Small Closet Execution Checklist (MD).',
    totalAssetsCount: 3,
    files: [
      generatePlaybookDeliverableFile(3),
      {
        id: 'cqk-2',
        fileName: '02_Closet_Capacity_And_Spacing_Matrix.csv',
        fileType: 'Spreadsheet (CSV/Excel)',
        extension: '.csv',
        fileSize: '18 Columns • 14 Rows • 16 KB',
        badge: 'Closet Spacing Matrix (CSV)',
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
        fileName: '03_Small_Closet_Execution_Checklist.md',
        fileType: 'Action Checklist & Pocket Cards',
        extension: '.md',
        fileSize: '4x6 Cards • Step-by-Step Checklist • 11 KB',
        badge: 'Action Checklist & Pocket Cards',
        description: 'Complete step-by-step closet organization checklist and 4x6" printable ratio cards for suspended rod spacing and seasonal swaps.',
        previewSnippet: '# SMALL CLOSET QUADRUPLER EXECUTION CHECKLIST\n## PHASE 1: SUSPENDED 2ND-TIER ROD FABRICATION\n[ ] 1. Measure closet width and main rod height\n[ ] 2. Cut 1-inch hardwood dowel...',
        downloadableContent: `# SMALL CLOSET QUADRUPLER & VERTICAL STORAGE: EXECUTION CHECKLIST
*SmallSpaceHome.ca • Canadian Urban Renter Tactical Guide*

## PHASE 1: SUSPENDED 2ND-TIER ROD FABRICATION
- [ ] **1. Rod Height Measurement**: Check that main closet rod is at least 68 inches above the floor.
- [ ] **2. Hardwood Dowel Preparation**: Cut a 1-inch diameter birch or oak dowel to 32 inches length (fits inside a standard 36" closet).
- [ ] **3. Paracord Suspension**: Loop two lengths of 550 military-grade paracord over the top main rod. Tie secure bowline or figure-8 loops to suspend the lower dowel exactly 32 inches below the main rod.
- [ ] **4. Weight Distribution**: Ensure existing closet shelf brackets are firmly attached. The lower rod holds 40 lbs of shirts, tees, and folded trousers.

---

## PHASE 2: VELVET HANGER CONVERSION
- [ ] **1. Hanger Purge**: Remove all mismatched thick wooden, wire, and plastic tubular hangers.
- [ ] **2. Flocked Velvet Replacement**: Replace with ultra-thin (0.2" profile) non-slip velvet hangers.
- [ ] **3. Directional Alignment**: Ensure all hanger hooks face inward toward the back of the closet.
- [ ] **4. Density Gain**: Verify that 60–75 velvet hangers fit smoothly along the 36-inch upper rod (+300% density vs bulky wood).

---

## PHASE 3: UPPER SHELF SWEATER DIVISION & SEASONAL VACUUM STORAGE
- [ ] **1. Acrylic Dividers**: Slide clear acrylic shelf dividers 10 inches apart over upper wire or wood shelving.
- [ ] **2. Vertical File Folding**: Fold wool and cashmere sweaters into compact rectangles; stack maximum 4 per stall to prevent toppling.
- [ ] **3. Seasonal Compression**: Place off-season winter parkas and bulky blankets into vacuum-seal storage bags. Compress flat with vacuum hose.
- [ ] **4. Upper Bin Storage**: Store compressed bags on upper rear shelf or inside under-bed storage containers.

---

## PHASE 4: DOOR SHOE & ACCESSORY MATRIX
- [ ] **1. Over-Door Hanging Organizer**: Hang a 24-pocket canvas or breathable fabric shoe organizer over the closet door.
- [ ] **2. Door Swing Clearance**: Check that shoes do not hit internal hanging rods when door swings closed.
- [ ] **3. Shoe Distribution**: Insert shoes heel-first, with heavy boots on bottom rows and lightweight flats/sandals at eye level.

---

## PHASE 5: MOTION LIGHTING & WEEKLY ALIGNMENT
- [ ] **1. Magnetic LED Bar**: Adhere a rechargeable motion-sensor 200-lumen LED light bar to the inside door header.
- [ ] **2. Sunday 10-Minute Reset**: Every Sunday evening, remove empty hangers to the far left, button top buttons, and group garments by color family.

---

## APPENDIX: PRINTABLE 4x6" BLUEPRINT CARDS
### CARD 01: SUSPENDED DUAL-ROD SPACING
- Main Top Rod Height: 68" to 72" from floor
- Suspended Lower Rod: 32" to 34" below top rod
- Clear Floor Drop: 32" to 34" below lower rod for shoes

### CARD 02: HANGER DENSITY FORMULA
- Chunky Plastic / Wood: 20–25 garments per 36" rod
- Ultra-Thin Velvet: 60–75 garments per 36" rod (+300% density)
- Maximum Hanging Load: 45 lbs on suspended paracord bar

### CARD 03: SEASONAL SWAP PROTOCOL (OCTOBER & MAY)
- Launder all seasonal items before vacuum packing
- Pack 2 heavy coats per vacuum cube; compress to 1/3 volume
- Transfer compressed cubes to upper shelf or under-bed storage`
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
    deliverablesOverview: 'The complete 3-part digital suite: (1) 3-in-1 Master Commercial Playbook PDF (30+ Page Guide + 4x6" Pocket Cards + License & Specs), (2) Move-In/Out 4K Inspection Matrix (CSV), and (3) Tactical Security Deposit Defense Checklist & Scripts (MD).',
    totalAssetsCount: 3,
    files: [
      generatePlaybookDeliverableFile(4),
      {
        id: 'dpd-2',
        fileName: '02_Deposit_Defense_Inspection_Matrix.csv',
        fileType: 'Spreadsheet (CSV/Excel)',
        extension: '.csv',
        fileSize: '18 Columns • 14 Rows • 16 KB',
        badge: 'Move-Out Inspection Matrix (CSV)',
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
        fileName: '03_Deposit_Defense_Execution_Checklist_And_Scripts.md',
        fileType: 'Action Checklist & Pocket Cards',
        extension: '.md',
        fileSize: '4x6 Cards • Step-by-Step Checklist • 12 KB',
        badge: 'Action Checklist & Legal Scripts',
        description: 'Complete step-by-step tenant move-out inspection checklist, $12 emergency repair protocols, and legally verified Canadian landlord negotiation pushback scripts.',
        previewSnippet: '# RENTER SECURITY DEPOSIT DEFENSE EXECUTION CHECKLIST\n## PHASE 1: 14 DAYS PRIOR - PRELIMINARY INSPECTION AUDIT\n[ ] 1. Send written joint walkthrough request\n[ ] 2. Audit all wall surfaces for pinholes...',
        downloadableContent: `# RENTER SECURITY DEPOSIT DEFENSE & EMERGENCY REPAIR: EXECUTION CHECKLIST
*SmallSpaceHome.ca • Canadian Tenant Rights Tactical Guide*

## PHASE 1: 14 DAYS PRIOR - PRELIMINARY WALKTHROUGH AUDIT
- [ ] **1. Written Walkthrough Request**: Email landlord or property manager to request a joint preliminary inspection 14 days prior to lease end.
- [ ] **2. 4K Video Baseline Comparison**: Review your original move-in timestamped video/photos to identify which defects are pre-existing.
- [ ] **3. Room-by-Room Damage Triage**: Categorize every imperfection as either *Normal Wear and Tear* (landlord responsibility) or *Tenant Actionable* (requires $12 DIY fix).

---

## PHASE 2: $12 EMERGENCY DRYWALL & SURFACE RESTORATION
- [ ] **1. Drywall Pinhole Patching**:
  - [ ] Apply a dime-sized dab of DAP DryDex vinyl spackling into push hook/nail holes with a flexible putty knife.
  - [ ] Press flat at a 45-degree angle. Let dry for 20 minutes (turns from pink to white).
  - [ ] Lightly rub with a damp microfiber cloth or 220-grit sanding sponge.
  - [ ] Blend with a piece of white school chalk for matte/flat walls.
- [ ] **2. Baseboard Scuff Eradication**:
  - [ ] Dampen a melamine foam eraser sponge with warm water and a drop of dish soap.
  - [ ] Gently buff black shoe and furniture scuff marks off baseboards and doors. Wipe dry.
- [ ] **3. Hardwood Scratch Blending**:
  - [ ] Rub a matching wax filler repair stick into floor scratches.
  - [ ] Buff flush with a clean microfiber cloth.

---

## PHASE 3: DEEP KITCHEN & BATHROOM RESTORATION
- [ ] **1. Oven Glass Degreasing**:
  - [ ] Mix baking soda, dish soap, and a splash of vinegar into a thick paste.
  - [ ] Coat inside oven glass door; let sit 20 minutes; scrape clean with a plastic scraper.
- [ ] **2. Range Hood Filter Reset**:
  - [ ] Submerge greasy aluminum mesh filters in boiling water with a dishwasher pod for 15 minutes. Rinse with hot water.
- [ ] **3. Shower Mildew Removal**:
  - [ ] Trace a bleach gel pen along discolored silicone caulking beads. Wait 2 hours; rinse sparkling white.
- [ ] **4. Hard Water Descaling**:
  - [ ] Fasten a Ziploc bag filled with white vinegar over showerhead with a rubber band. Soak 1 hour to dissolve mineral crust.

---

## PHASE 4: FINAL 4K DEPARTURE VIDEO & KEY HANDOVER
- [ ] **1. Continuous 4K Walkthrough Video**: Record a continuous slow video of every wall, ceiling, floor, inside of oven, and inside fridge.
- [ ] **2. High-Res Macro Photos**: Take close-up photos of all patched spots with a ruler placed beside them.
- [ ] **3. Cloud Upload**: Upload files immediately to Google Drive or iCloud with timestamped metadata.
- [ ] **4. Key Handover Receipt**: Obtain signed written receipt upon key return confirming keys received and unit vacated.

---

## APPENDIX: CANADIAN TENANT PUSHBACK SCRIPTS
### SCRIPT 01: PRE-MOVE-OUT AUDIT REQUEST (14 DAYS PRIOR)
"Dear [Landlord/Property Manager],
As our lease conclusion approaches on [Date], I would like to schedule a joint preliminary walkthrough inspection 14 days prior to move-out. This will allow us to review the unit together, note any items requiring tenant attention, and ensure a seamless final key handover.
Please let me know your availability between [Date 1] and [Date 2]."

### SCRIPT 02: NORMAL WEAR AND TEAR PUSHBACK
"Dear [Landlord],
Under Section [X] of the provincial Tenancy Act, tenants are not responsible for reasonable wear and tear resulting from normal everyday occupancy, including minor picture pinholes and routine floor scuffs.
As documented in our move-in walkthrough baseline from [Date], these items represent ordinary residential use. All tenant obligations have been completed in full."`
      }
    ]
  }
};
