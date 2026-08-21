import { ProductAssetBundle, generatePlaybookDeliverableFile } from '../productAssetsData';

export const PRODUCTS_5_TO_8: Record<string, ProductAssetBundle> = {
  // ==========================================
  // PRODUCT 5: STUDIO ACOUSTIC PRIVACY KIT
  // ==========================================
  'kit-studio-acoustic-privacy': {
    productId: 'kit-studio-acoustic-privacy',
    rank: 5,
    title: 'The Studio Apartment Acoustic Privacy & Soundproofing Hacks Kit',
    photography: {
      url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=85',
      alt: 'Quiet Scandinavian apartment with floor-to-ceiling heavyweight curtains, wool rug, and acoustic door draft seal',
      caption: 'Tested in a noisy high-rise Toronto condo: Reduced hallway footsteps, elevator chimes, and neighbor noise by 12–14 dB using zero-damage peelable perimeter seals and acoustic mass positioning.',
      spatialSpecs: 'Studio Apartment • 1-Inch Door Gap • 100% Removable Silicone & Acoustic Drapes',
      palette: ['#FAF8F5', '#4A533E', '#D9D3C7', '#8C857B', '#1C1917'],
      stylingKeywords: ['Acoustic Air-Lock', 'Door Perimeter Gaskets', '32oz Thermal Drapes', 'Impact Decoupling']
    },
    deliverablesOverview: 'The complete 3-part digital suite: (1) 3-in-1 Master Commercial Playbook PDF (30+ Page Guide + 4x6" Pocket Cards + License & Specs), (2) Decibel Reduction & Materials Matrix (CSV), and (3) Tactical Studio Acoustic Privacy Checklist (MD).',
    totalAssetsCount: 3,
    files: [
      generatePlaybookDeliverableFile(5),
      {
        id: 'apk-2',
        fileName: '02_Acoustic_Materials_And_Decibel_Matrix.csv',
        fileType: 'Spreadsheet (CSV/Excel)',
        extension: '.csv',
        fileSize: '18 Columns • 14 Rows • 16 KB',
        badge: 'Acoustic Decibel Matrix (CSV)',
        description: 'Structured spreadsheet matrix calculating noise reduction coefficients (NRC), decibel drops, and acoustic materials costs in CAD.',
        previewSnippet: 'Record_ID,Module,Hack_Name,Category,Difficulty,Time_Minutes,Cost_Level_CAD,Materials,Tools_Required,Target_Surface_or_Zone,Rental_Safe,Reversible,Damage_Risk_Level,Space_Gain_or_Impact,Conservative_Capacity_or_Rating,Core_Step_Summary,Safety_or_Manufacturer_Note,Status',
        downloadableContent: `Record_ID,Module,Hack_Name,Category,Difficulty,Time_Minutes,Cost_Level_CAD,Materials,Tools_Required,Target_Surface_or_Zone,Rental_Safe,Reversible,Damage_Risk_Level,Space_Gain_or_Impact,Conservative_Capacity_or_Rating,Core_Step_Summary,Safety_or_Manufacturer_Note,Status
ACO-001,M01: Door Seal,Dual-Density Silicone Under-Door Sweep,Door Acoustics,Low,20,14.50,Silicone Door Sweep + Alcohol Wipe,Scissors,Front Door Bottom,Yes,Yes,Low,-8 to -10 dB hallway noise,100% air-leak seal,Cut sweep to width; clean door; adhere flush to floor,Do not let sweep drag heavily on carpet,Verified
ACO-002,M01: Door Jamb,Hollow D-Profile Rubber Frame Weatherstrip,Door Acoustics,Low,15,11.00,Hollow D-Profile Rubber Foam (16ft),Scissors,Door Frame Jamb,Yes,Yes,Low,-4 to -6 dB high frequencies,0.25in seal compression,Apply to clean door stop; ensure latch closes firmly,Check that deadbolt engages smoothly after gasketing,Verified
ACO-003,M02: Windows,Triple-Weave 32oz Blackout Acoustic Drapes,Window Acoustics,Low,30,38.00,32oz Heavy Velvet Drapes + Tension Rod,Level,Window Frame,Yes,Yes,Low,-6 dB traffic rumble,0.65 NRC sound absorption,Mount rod 4in above and 6in beyond window edges,Drapes must touch floor to trap sound waves,Verified
ACO-004,M03: Floor Decouple,Dense Felt-Rubber Rug Underlayment (1/2in),Floor Acoustics,Low,15,26.00,1/2in Dual-Surface Felt Rug Pad,Utility Knife,Living Room Hardwood,Yes,Yes,Low,-12 dB impact footstep echo,0.45 IIC impact rating,Lay rubber-side down; place wool rug on top,Protects floor and deadens chair roll noise,Verified
ACO-005,M04: Shared Wall,Dense Bookcase Wall Sound Diffuser,Wall Acoustics,Medium,40,0.00,Existing Bookshelf + Heavy Hardcovers,None,Shared Bedroom Wall,Yes,Yes,Low,-5 dB voice transmission,Dense physical mass,Place bookcase flat against shared wall; pack books,Stagger book depths to create natural sound diffuser,Verified
ACO-006,M05: Sound Masking,Calibrated 45dB Pink Noise Sound Machine,Acoustic Masking,Low,5,28.00,Dedicated Sound Machine / Smart Speaker,Smartphone,Entryway / Bedroom,Yes,Yes,Low,Masks sudden elevator noises,45 to 50 dBA safe level,Position speaker facing doorway; play smooth pink noise,Keep sound below 55 dB for restorative sleep,Verified
ACO-007,M06: Air Vent,Sound-Baffle Acoustic Foam Vent Insert,HVAC Acoustics,Low,15,12.00,Open-Cell Acoustic Foam Strip,Scissors,Supply Air Vent Grille,Yes,Yes,Low,-6 dB duct whistling,Maintains 85% airflow,Insert foam zig-zag baffle behind vent louvers,Never block return air vents or restrict heating airflow,Verified`
      },
      {
        id: 'apk-3',
        fileName: '03_Studio_Acoustic_Privacy_Execution_Checklist.md',
        fileType: 'Action Checklist & Pocket Cards',
        extension: '.md',
        fileSize: '4x6 Cards • Step-by-Step Checklist • 11 KB',
        badge: 'Action Checklist & Pocket Cards',
        description: 'Complete step-by-step studio apartment soundproofing checklist and 4x6" printable reference cards for door air-lock calibration and acoustic gasketing.',
        previewSnippet: '# STUDIO APARTMENT ACOUSTIC PRIVACY EXECUTION CHECKLIST\n## PHASE 1: FRONT DOOR ACOUSTIC AIR-LOCK & PERIMETER SEAL\n[ ] 1. Perform hallway light leak audit\n[ ] 2. Clean door base with 70% alcohol...',
        downloadableContent: `# STUDIO APARTMENT ACOUSTIC PRIVACY & SOUNDPROOFING: EXECUTION CHECKLIST
*SmallSpaceHome.ca • High-Rise Rental Living Tactical Guide*

## PHASE 1: FRONT DOOR ACOUSTIC AIR-LOCK & PERIMETER SEAL
- [ ] **1. Hallway Light-Leak Test**: Turn off hallway lights and turn on living room lights. If light shines under or around the front door, sound waves pass freely.
- [ ] **2. 70% Alcohol Prep**: Clean the door frame stop moulding and bottom door stile with 70% Isopropyl alcohol.
- [ ] **3. Silicone Under-Door Sweep**: Cut a multi-fin silicone sweep to exact door width. Adhere firmly so the bottom silicone fins seal lightly against floor without carpet drag (-8 to -10 dB hallway reduction).
- [ ] **4. Hollow D-Profile Jamb Gasket**: Install self-adhesive hollow rubber foam along the interior door stop moulding. Confirm deadbolt engages smoothly without forcing the lock.

---

## PHASE 2: 32OZ ACOUSTIC WINDOW DRAPERY
- [ ] **1. Heavy Tension Rod Span**: Extend a 1-inch heavy-duty spring-tension rod 4 inches above the window frame and 6 inches beyond each side.
- [ ] **2. Floor-Touching Velvet Drapes**: Hang 32oz triple-weave blackout acoustic drapes. Ensure the hem touches the floor to prevent sound waves leaking under.
- [ ] **3. Air Gap Elimination**: Overlap curtain center panels by at least 4 inches.

---

## PHASE 3: FLOOR IMPACT DECOUPLING & MASS DIFFUSION
- [ ] **1. 1/2-Inch Dual-Felt Rug Underlay**: Lay dense felt/rubber rug pads beneath living and sleeping rugs to absorb impact footstep thuds.
- [ ] **2. Shared-Wall Bookcase Diffuser**: Position a solid wood bookcase against the shared unit wall. Stagger book spine depths to naturally scatter incoming voice frequencies.
- [ ] **3. HVAC Vent Foam Baffle**: Place an open-cell zig-zag acoustic foam strip behind supply air vent louvers to eliminate duct whistle while maintaining 85% airflow.

---

## PHASE 4: PINK NOISE ACOUSTIC MASKING
- [ ] **1. Calibrated Speaker Placement**: Place a sound machine or smart speaker facing the entryway doorway.
- [ ] **2. Pink Noise Calibration**: Set to continuous pink noise at 45–48 dBA (covers sudden hallway spikes without disturbing REM sleep).

---

## APPENDIX: PRINTABLE 4x6" BLUEPRINT CARDS
### CARD 01: THE DOOR AIR-LOCK LIGHT TEST
- Turn off hallway lights and turn on interior living lights
- Stand in dark hallway: If light shines under door, sound enters freely
- Clean door base with 70% alcohol; align silicone sweep to block 100% light

### CARD 02: GASKET COMPRESSION RULES
- Hollow D-profile rubber foam: Compresses from 6mm to 2mm when latched
- Adhere along interior door stop moulding (not the outer frame)
- Ensure door handle latches firmly without requiring heavy shoulder push

### CARD 03: ACOUSTIC CURTAIN FLOOR-TO-CEILING SPANS
- Extend rod 4" above frame and 6" beyond sides
- Drapes must brush floor to trap sound waves
- 32oz fabric achieves 0.65 NRC sound absorption`
      }
    ]
  },

  // ==========================================
  // PRODUCT 6: MICRO-ENTRYWAY DROP ZONE KIT
  // ==========================================
  'kit-entryway-dropzone': {
    productId: 'kit-entryway-dropzone',
    rank: 6,
    title: 'The Micro-Entryway 6-Inch "Drop Zone" & Clutter-Stop Kit',
    photography: {
      url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=85',
      alt: 'Clean minimalist 6-inch floating entryway ledge with magnetic key holders, wall hooks, and vertical shoe storage',
      caption: 'Tested in a narrow 36-inch apartment hallway: Created a complete 6-jacket, 8-shoe, mail and key drop zone with an ultra-slim 5.5-inch wall projection.',
      spatialSpecs: '36" Hallway Width • 5.5" Floating Console Depth • 36" Clear Door Swing Arc',
      palette: ['#FAF8F5', '#4A533E', '#D9D3C7', '#8C857B', '#1C1917'],
      stylingKeywords: ['6-Inch Floating Ledge', 'Staggered Hooks', 'River Stone Boot Tray', 'Magnetic Key Hub']
    },
    deliverablesOverview: 'The complete 3-part digital suite: (1) 3-in-1 Master Commercial Playbook PDF (30+ Page Guide + 4x6" Pocket Cards + License & Specs), (2) Footprint & Door Clearance Matrix (CSV), and (3) Tactical Micro-Entryway Execution Checklist (MD).',
    totalAssetsCount: 3,
    files: [
      generatePlaybookDeliverableFile(6),
      {
        id: 'edz-2',
        fileName: '02_Entryway_Footprint_And_Clearance_Matrix.csv',
        fileType: 'Spreadsheet (CSV/Excel)',
        extension: '.csv',
        fileSize: '18 Columns • 14 Rows • 16 KB',
        badge: 'Entryway Clearance Matrix (CSV)',
        description: 'Structured spreadsheet matrix calculating hallway walkway widths, hook load capacities, and Canadian boot drainage clearances.',
        previewSnippet: 'Record_ID,Module,Hack_Name,Category,Difficulty,Time_Minutes,Cost_Level_CAD,Materials,Tools_Required,Target_Surface_or_Zone,Rental_Safe,Reversible,Damage_Risk_Level,Space_Gain_or_Impact,Conservative_Capacity_or_Rating,Core_Step_Summary,Safety_or_Manufacturer_Note,Status',
        downloadableContent: `Record_ID,Module,Hack_Name,Category,Difficulty,Time_Minutes,Cost_Level_CAD,Materials,Tools_Required,Target_Surface_or_Zone,Rental_Safe,Reversible,Damage_Risk_Level,Space_Gain_or_Impact,Conservative_Capacity_or_Rating,Core_Step_Summary,Safety_or_Manufacturer_Note,Status
ENT-001,M01: Floating Console,5.5-Inch Floating Picture Ledge Console,Console,Low,20,16.00,45in Picture Ledge + OOK Hooks,Level + Scale,Entryway Drywall,Yes,Yes,Low,Preserves 32in walkway,15 lbs distributed load,Mount ledge at 38in height; verify door arc clearance,Do not place heavy textbooks or backpacks on narrow ledges,Verified
ENT-002,M02: Staggered Hooks,Staggered Double-Height Coat Hook Grid,Coat Hanging,Low,20,14.00,Cast Iron Double Hooks (4pk),Push Anchors,Entryway Wall,Yes,Yes,Low,Halves wall width footprint,20 lbs per hook pair,Mount high hooks at 66in and low hooks at 46in,Stagger horizontal spacing by 8 inches to prevent bulk overlap,Verified
ENT-003,M03: Magnetic Keys,Under-Ledge Neodymium Magnet Key Mounts,Key Storage,Low,10,8.50,Neodymium Disc Magnets (6pk),Adhesive Tape,Ledge Underside,Yes,Yes,Low,Zero visual hook clutter,1.5 lbs magnetic hold,Adhere magnets beneath wooden ledge; touch keys to wood,Keep magnets away from credit cards and key fobs,Verified
ENT-004,M04: Boot Drainage,Canadian River Stone Rubber Boot Tray,Footwear,Low,10,18.00,Rubber Boot Tray + 5lb River Stones,None,Entryway Floor,Yes,Yes,Low,Boots dry 3x faster,Holds 4 pairs of boots,Fill rubber tray with clean river stones; place wet boots,Allows melted snow to drain below boot soles,Verified
ENT-005,M05: Vertical Shoes,Vertical 2-Tier Wall-Leaning Shoe Rack,Footwear,Low,15,22.00,Slim Steel Shoe Rack (6in depth),Silicone Feet,Baseboard & Floor,Yes,Yes,Low,Holds 6 pairs in 6in depth,18 lbs floor support,Lean rack against wall over rubber base feet,Floor carries 100% load with zero wall anchors,Verified
ENT-006,M06: Daily Rhythm,The 60-Second Return-to-Zero Entryway Rhythm,Habit System,Low,1,0.00,Timer,None,Entryway,Yes,Yes,Low,Eliminates floor piles,100% daily reset,Hang coat; place shoes in tray; drop keys on magnet,Execute immediately upon entering doorway,Standard`
      },
      {
        id: 'edz-3',
        fileName: '03_Micro_Entryway_Execution_Checklist.md',
        fileType: 'Action Checklist & Pocket Cards',
        extension: '.md',
        fileSize: '4x6 Cards • Step-by-Step Checklist • 11 KB',
        badge: 'Action Checklist & Pocket Cards',
        description: 'Complete step-by-step micro-entryway installation checklist and 4x6" printable reference cards for 6-inch drop zone layouts and 60-second daily reset routines.',
        previewSnippet: '# MICRO-ENTRYWAY DROP ZONE & CLUTTER STOP EXECUTION CHECKLIST\n## PHASE 1: 5.5-INCH FLOATING PICTURE LEDGE CONSOLE\n[ ] 1. Measure hallway width (minimum 32" clear)\n[ ] 2. Mount ledge at 38" elbow height...',
        downloadableContent: `# MICRO-ENTRYWAY 6-INCH "DROP ZONE" & CLUTTER-STOP: EXECUTION CHECKLIST
*SmallSpaceHome.ca • Canadian Urban Renter Tactical Guide*

## PHASE 1: 5.5-INCH FLOATING PICTURE LEDGE CONSOLE
- [ ] **1. Hallway Clearance Verification**: Measure hallway width. Confirm at least 32 inches of clear walking corridor remains with console in place.
- [ ] **2. 36-Inch Door Arc Clearance**: Ensure the entryway door can swing open a full 90+ degrees without contacting the console ledge.
- [ ] **3. Ledge Mounting at 38" Height**: Mount a 45-inch solid wood picture ledge at natural elbow drop height (38 to 40 inches).
- [ ] **4. Under-Ledge Neodymium Key Magnets**: Adhere 4 neodymium disc magnets to the underside of the ledge. Keys snap effortlessly beneath the wood with zero visual hooks.

---

## PHASE 2: STAGGERED DOUBLE-HEIGHT COAT HOOK GRID
- [ ] **1. Upper Hook Row**: Mount heavy-duty push-pin hooks at 66 inches from the floor for long winter coats and parkas.
- [ ] **2. Lower Hook Row**: Mount secondary hooks at 46 inches from the floor, offset horizontally by 8 inches between upper hooks.
- [ ] **3. Bulk Elimination**: Staggering prevents jackets from piling into a thick, bulky mass in narrow hallways.

---

## PHASE 3: CANADIAN RIVER STONE BOOT DRAINAGE
- [ ] **1. Rubber Boot Tray**: Place a heavy-duty vulcanized rubber boot tray against the entryway baseboard.
- [ ] **2. River Stone Layer**: Pour 5 lbs of smooth 1-inch Mexican beach pebbles or river stones into tray.
- [ ] **3. Fast Drying**: Snow and slush melt through stones to the bottom tray, keeping boot soles dry and free of salt stains.

---

## PHASE 4: 60-SECOND RETURN-TO-ZERO ENTRYWAY RHYTHM
- [ ] **1. Doorway Entry Protocol**: Step onto rubber mat; hang coat on upper hook immediately.
- [ ] **2. Shoe Placement**: Place boots directly on river stone tray.
- [ ] **3. Key & Mail Drop**: Snap keys to underside magnet; place mail in picture ledge channel.
- [ ] **4. Clutter Baseline**: Never leave bags, Amazon boxes, or footwear scattered on hallway floor.

---

## APPENDIX: PRINTABLE 4x6" BLUEPRINT CARDS
### CARD 01: HALLWAY CLEARANCE RULES
- Minimum Clear Walkway: 32 inches from ledge to opposite wall
- Door Swing Clearance: 36 inches clear radius from hinge point
- Ledge Height: 38 to 40 inches from floor (natural elbow drop)

### CARD 02: STAGGERED HOOK GEOMETRY
- Upper Hooks (Coats & Parkas): 66 inches from floor
- Lower Hooks (Bags & Keys): 46 inches from floor (offset 8" horizontally)
- Spacing: 8 to 10 inches between adjacent vertical pairs

### CARD 03: 60-SECOND RETURN-TO-ZERO RHYTHM
- Step inside; hang coat on staggered hook
- Place boots on river stone drainage tray
- Touch keys to under-shelf magnetic mount`
      }
    ]
  },

  // ==========================================
  // PRODUCT 7: UNDER-BED SECRET STORAGE
  // ==========================================
  'kit-underbed-hidden-storage': {
    productId: 'kit-underbed-hidden-storage',
    rank: 7,
    title: 'The Under-Bed & Hidden Space Secret Storage Blueprint',
    photography: {
      url: 'https://images.unsplash.com/photo-1540518614846-7ede433c4550?auto=format&fit=crop&w=1600&q=85',
      alt: 'Clean minimalist bedroom with smooth gliding under-bed wooden caster drawers and dust-proof Oxford cloth containers',
      caption: 'Tested under standard Queen and Double bed frames: Recovered 28.5 cubic feet of dust-proof, organized hidden storage with heavy-duty steel risers and smooth rubber casters.',
      spatialSpecs: 'Queen Bed (60x80") • 11.5" Under-Bed Clearance • 28.5 cu ft Recovered Volume',
      palette: ['#FAF8F5', '#4A533E', '#D9D3C7', '#8C857B', '#1C1917'],
      stylingKeywords: ['Dust-Proof Storage', 'Steel Bed Risers', 'Luggage Nesting', 'Rubber Caster Crates']
    },
    deliverablesOverview: 'The complete 3-part digital suite: (1) 3-in-1 Master Commercial Playbook PDF (30+ Page Guide + 4x6" Pocket Cards + License & Specs), (2) Hidden Cubic Volume Calculator (CSV), and (3) Tactical Under-Bed Secret Storage Checklist (MD).',
    totalAssetsCount: 3,
    files: [
      generatePlaybookDeliverableFile(7),
      {
        id: 'ubs-2',
        fileName: '02_Hidden_Cubic_Storage_Calculator.csv',
        fileType: 'Spreadsheet (CSV/Excel)',
        extension: '.csv',
        fileSize: '18 Columns • 14 Rows • 16 KB',
        badge: 'Hidden Volume Matrix (CSV)',
        description: 'Structured spreadsheet matrix calculating under-bed cubic feet, bed riser loads, and seasonal luggage nesting capacity.',
        previewSnippet: 'Record_ID,Module,Hack_Name,Category,Difficulty,Time_Minutes,Cost_Level_CAD,Materials,Tools_Required,Target_Surface_or_Zone,Rental_Safe,Reversible,Damage_Risk_Level,Space_Gain_or_Impact,Conservative_Capacity_or_Rating,Core_Step_Summary,Safety_or_Manufacturer_Note,Status',
        downloadableContent: `Record_ID,Module,Hack_Name,Category,Difficulty,Time_Minutes,Cost_Level_CAD,Materials,Tools_Required,Target_Surface_or_Zone,Rental_Safe,Reversible,Damage_Risk_Level,Space_Gain_or_Impact,Conservative_Capacity_or_Rating,Core_Step_Summary,Safety_or_Manufacturer_Note,Status
UND-001,M01: Bed Elevation,2-Inch Heavy Steel Bed Risers + Felt Pads,Elevation,Low,20,22.00,Steel Bed Risers (4pk) + Felt Pads,Tape Measure,Bed Frame Legs,Yes,Yes,Low,+8.2 cu ft clearance,1500 lbs total capacity,Place risers under all bed legs including center rail,Ensure center support leg also receives matching riser,Verified
UND-002,M02: Dust Defense,Zippered Oxford-Cloth Under-Bed Totes,Dust Vaults,Low,15,26.00,Oxford Fabric Totes (3pk) + Cedar,None,Under-Bed Floor,Yes,Yes,Low,Stores 6 bulky duvets,40 lbs per tote,Pack linens into fabric bins; insert cedar rings; slide under,Fabric bins do not scratch wood floors or crack,Verified
UND-003,M03: Luggage Nesting,Suitcase Nesting & Winter Coat Vault,Luggage,Low,30,0.00,Existing Suitcases + Vacuum Bags,Vacuum Hose,Under-Bed Center,Yes,Yes,Low,Stores 8 winter coats,100% dust-sealed,Pack compressed coats inside hard-shell luggage,Store medium suitcase nested inside large suitcase,Verified
UND-004,M04: Rolling Crates,Smooth-Glide Rubber Caster Wooden Crates,Caster Drawers,Medium,35,28.00,Pine Crates + 1.5in Swivel Casters,Screwdriver,Under-Bed Front,Yes,Yes,Low,+6.5 cu ft sliding drawers,35 lbs per crate,Screw 4 rubber casters to crate base; pull via front handle,Rubber wheels prevent marking on polyurethane hardwood,Verified
UND-005,M05: Sofa Dead Space,Sofa Backboard Secret Folding Table Ledge,Hidden Ledges,Low,15,0.00,Felt Floor Gliders,Tape Measure,Behind Sofa Void,Yes,Yes,Low,Stores folding tables/yoga mats,20 lbs resting load,Slide folding card table flat behind sofa backboard,Keep 2-inch air gap between sofa and wall for airflow,Verified
UND-006,M06: Seasonal Swap,Biannual Under-Bed Rotation Checklist,Routine,Low,25,0.00,Timer,None,Bedroom,Yes,Yes,Low,Keeps storage organized,100% seasonal audit,Vacuum floor beneath bed; replace cedar rings every 6 months,Perform during spring and fall daylight savings transitions,Standard`
      },
      {
        id: 'ubs-3',
        fileName: '03_Underbed_Hidden_Storage_Execution_Checklist.md',
        fileType: 'Action Checklist & Pocket Cards',
        extension: '.md',
        fileSize: '4x6 Cards • Step-by-Step Checklist • 11 KB',
        badge: 'Action Checklist & Pocket Cards',
        description: 'Complete step-by-step under-bed storage optimization checklist and 4x6" printable reference cards for bed riser safety and luggage compression nesting.',
        previewSnippet: '# UNDER-BED & HIDDEN SPACE SECRET STORAGE EXECUTION CHECKLIST\n## PHASE 1: BED FRAME ELEVATION & CLEARANCE CALCULATION\n[ ] 1. Measure bed frame legs and center support\n[ ] 2. Install heavy-duty steel risers...',
        downloadableContent: `# UNDER-BED & HIDDEN SPACE SECRET STORAGE: EXECUTION CHECKLIST
*SmallSpaceHome.ca • Canadian Urban Renter Tactical Guide*

## PHASE 1: BED FRAME ELEVATION & CLEARANCE CALCULATION
- [ ] **1. Bed Leg Audit**: Count all contact points on bed frame (4 corner legs + 1 or 2 center spine legs).
- [ ] **2. Heavy-Duty Steel Risers**: Place 2-inch solid steel risers with dense wool felt bases under every leg. Never elevate only the corners without supporting center legs.
- [ ] **3. Clearance Gain**: Confirm 11.5 inches of vertical clearance from floor to lower bed rail (recovers +28.5 cu ft of volume).

---

## PHASE 2: DUST-PROOF ZIPPERED OXFORD TOTES
- [ ] **1. 600D Oxford Cloth Selection**: Replace brittle plastic containers with flexible 600D breathable Oxford cloth totes.
- [ ] **2. Aromatic Cedar Protection**: Place 2 natural red cedar rings inside each tote with wool sweaters, down duvets, and linens to repel moths and humidity.
- [ ] **3. Clear View Windows**: Orient clear vinyl viewing windows toward outer bed edge for instant inventory identification.

---

## PHASE 3: HARDSHELL SUITCASE NESTING & VACUUM CUBES
- [ ] **1. Luggage Decanting**: Empty hard-shell suitcases of travel gear.
- [ ] **2. Winter Garment Compression**: Pack seasonal winter ski jackets and wool coats into vacuum compression cubes; place flat inside large suitcase.
- [ ] **3. Matryoshka Nesting**: Place small carry-on suitcase inside medium suitcase, and medium inside large suitcase under center of bed.

---

## PHASE 4: SMOOTH-GLIDE RUBBER CASTER DRAWERS
- [ ] **1. Pine Crate Fabrication**: Fasten 4 non-marking 1.5-inch polyurethane swivel casters to the base of wooden pine crates.
- [ ] **2. Daily Access Zone**: Use rolling crates for daily gym gear, extra shoes, and laundry bags. Smooth rubber casters roll freely over hardwood without scratching.

---

## APPENDIX: PRINTABLE 4x6" BLUEPRINT CARDS
### CARD 01: BED ELEVATION SAFETY
- Check total bed legs (4 corner legs + 1 or 2 center support legs)
- Always install matching height risers on center legs to prevent spine dip
- Ensure riser base features 100% dense wool felt to protect hardwood floors

### CARD 02: DUST DEFENSE PROTOCOL
- Avoid open-top plastic bins that accumulate pet hair and dust bunnies
- Use fully zippered 600D Oxford-cloth storage totes with clear viewing windows
- Place 2 aromatic red cedar rings per container for natural wool moth defense

### CARD 03: BIANNUAL SEASONAL ROTATION (APRIL & OCTOBER)
- Vacuum and mop hardwood beneath bed frame
- Sand cedar rings lightly to rejuvenate aromatic oils
- Swap seasonal duvets and apparel between closet and under-bed totes`
      }
    ]
  },

  // ==========================================
  // PRODUCT 8: STUDIO BED SEPARATION KIT
  // ==========================================
  'kit-studio-zoning-separation': {
    productId: 'kit-studio-zoning-separation',
    rank: 8,
    title: 'The Studio Living-Bed Separation & Visual Privacy Kit',
    photography: {
      url: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1600&q=85',
      alt: 'Clean Scandinavian open studio apartment divided into bedroom sanctuary and living lounge with open-back bookcase and linen curtain',
      caption: 'Tested in a 440 sq ft open studio: Created 3 distinct rooms (Bedroom Sanctuary, Lounge, Dining Nook) with zero drywall screws and 100% natural daylight preservation.',
      spatialSpecs: '440 sq ft Open Studio • 100% Zero-Drill Dividers • 40% Sheer Daylight Flow',
      palette: ['#FAF8F5', '#4A533E', '#D9D3C7', '#8C857B', '#1C1917'],
      stylingKeywords: ['Studio Zoning', 'Open-Back Bookcase', 'Tension Curtain Track', 'Psychological Anchoring']
    },
    deliverablesOverview: 'The complete 3-part digital suite: (1) 3-in-1 Master Commercial Playbook PDF (30+ Page Guide + 4x6" Pocket Cards + License & Specs), (2) Floor Plan Scale & Walkway Matrix (CSV), and (3) Tactical Studio Living-Bed Separation Checklist (MD).',
    totalAssetsCount: 3,
    files: [
      generatePlaybookDeliverableFile(8),
      {
        id: 'sbs-2',
        fileName: '02_Studio_Layout_And_Clearance_Matrix.csv',
        fileType: 'Spreadsheet (CSV/Excel)',
        extension: '.csv',
        fileSize: '18 Columns • 14 Rows • 16 KB',
        badge: 'Studio Layout Matrix (CSV)',
        description: 'Structured spreadsheet matrix calculating walkway clearances, bookcase divider sightline angles, and rug zoning dimensions.',
        previewSnippet: 'Record_ID,Module,Hack_Name,Category,Difficulty,Time_Minutes,Cost_Level_CAD,Materials,Tools_Required,Target_Surface_or_Zone,Rental_Safe,Reversible,Damage_Risk_Level,Space_Gain_or_Impact,Conservative_Capacity_or_Rating,Core_Step_Summary,Safety_or_Manufacturer_Note,Status',
        downloadableContent: `Record_ID,Module,Hack_Name,Category,Difficulty,Time_Minutes,Cost_Level_CAD,Materials,Tools_Required,Target_Surface_or_Zone,Rental_Safe,Reversible,Damage_Risk_Level,Space_Gain_or_Impact,Conservative_Capacity_or_Rating,Core_Step_Summary,Safety_or_Manufacturer_Note,Status
STU-001,M01: Divider,Open-Back 4x2 Modular Bookcase Divider,Room Division,Low,30,59.00,4x2 Cube Bookcase + Felt Base Pads,None,Bed/Living Boundary,Yes,Yes,Low,Creates distinct bedroom,150 lbs floor support,Position perpendicular to wall; leave top cubes open for light,Maintain 32in clear walkway around divider end,Verified
STU-002,M02: Tension Curtain,Ceiling Spring-Tension Track Drapery,Room Division,Medium,35,42.00,Floor-to-Ceiling Tension Rods + Linen Drapes,Level,Studio Center Span,Yes,Yes,Low,100% instant privacy,25 lbs tension load,Expand vertical tension poles; hang sheer linen drapes,Use sheer linen (40% opacity) to preserve daylight,Verified
STU-003,M03: Rug Zoning,The 3-Rug Psychological Zoning Matrix,Floor Zoning,Low,20,0.00,Living Rug (6x9) + Bed Runner (2x6),Tape Measure,Studio Floor,Yes,Yes,Low,Defines 3 mental zones,100% visual separation,Anchor sofa on large rug; place runner beside bed,Keep 8in bare floor boundary between adjacent rugs,Verified
STU-004,M04: Sofa Console,Sofa-Back 10-Inch Dining Console Bar,Multi-Use,Low,25,36.00,Slim Console Table (10in depth),Level,Sofa Rear,Yes,Yes,Low,Doubles as dining & divider,50 lbs surface load,Position 10in counter behind sofa with 2 barstools,Acts as natural transition between kitchen and lounge,Verified
STU-005,M05: Sightlines,Diagonal Bed Placement & Screen Shield,Sightlines,Low,20,0.00,Existing Folding Screen / Headboard,Tape Measure,Sleeping Nook,Yes,Yes,Low,Shields bed from entry door,100% sightline block,Orient bed headboard away from direct front door view,Prevents guests from seeing bed when entering doorway,Verified
STU-006,M06: Lighting Shift,Zoned Smart Ambient Lighting Rhythms,Ambience,Low,15,24.00,Warm 2200K Smart Bulbs (2pk),Smartphone,Living & Bed Lamps,Yes,Yes,Low,Psychological shift,100% mood zoning,Turn off living lamps at 10 PM; switch bed lamp to warm glow,Signals brain that work/lounge mode is concluded,Standard`
      },
      {
        id: 'sbs-3',
        fileName: '03_Studio_Living_Bed_Separation_Execution_Checklist.md',
        fileType: 'Action Checklist & Pocket Cards',
        extension: '.md',
        fileSize: '4x6 Cards • Step-by-Step Checklist • 11 KB',
        badge: 'Action Checklist & Pocket Cards',
        description: 'Complete step-by-step studio zoning execution checklist and 4x6" printable reference cards for sightline blockage and 3-rug psychological boundaries.',
        previewSnippet: '# STUDIO LIVING-BED SEPARATION EXECUTION CHECKLIST\n## PHASE 1: OPEN-BACK BOOKCASE ROOM DIVIDER PLACEMENT\n[ ] 1. Position 4x2 cube bookcase perpendicular to wall\n[ ] 2. Verify 32" perimeter walkway...',
        downloadableContent: `# STUDIO LIVING-BED SEPARATION & VISUAL PRIVACY: EXECUTION CHECKLIST
*SmallSpaceHome.ca • Open Studio Apartment Tactical Guide*

## PHASE 1: OPEN-BACK BOOKCASE ROOM DIVIDER PLACEMENT
- [ ] **1. Room Orientation**: Position an open-back 4x2 cube bookcase perpendicular to main perimeter wall between bed and lounge area.
- [ ] **2. 32-Inch Walkway Rule**: Verify at least 32 inches of clear walking corridor exists around the outer end of the bookcase.
- [ ] **3. 40% Daylight Flow**: Place books and decorative boxes in lower cube rows for visual privacy; leave top cubes open or display green trailing plants to let natural window daylight pass through.

---

## PHASE 2: CEILING-HEIGHT SPRING TENSION DRAPERY
- [ ] **1. Vertical Tension Poles**: Position heavy-duty rubber-footed tension poles between floor and ceiling at studio mid-span.
- [ ] **2. Semi-Sheer Linen Drapes**: Hang 40% opacity natural linen drapes. Drapes provide instant visual boundary when sleeping while keeping room bright and airy during daytime.

---

## PHASE 3: THE 3-RUG PSYCHOLOGICAL ZONING MATRIX
- [ ] **1. Zone 1 (Sanctuary Rug)**: Place a 2x6 foot plush wool runner beside the bed.
- [ ] **2. Zone 2 (Lounge Rug)**: Anchor sofa and coffee table on a 6x9 foot flat-weave living rug.
- [ ] **3. Zone 3 (Dining/Work Rug)**: Place a 3x5 foot low-pile rug under dining table and chairs.
- [ ] **4. Floor Boundary**: Maintain 8 inches of bare hardwood floor between rug edges to define distinct mental zones.

---

## PHASE 4: SOFA-BACK 10-INCH DINING CONSOLE
- [ ] **1. Console Positioning**: Place a 10-inch deep slim console bar table directly against the back of sofa.
- [ ] **2. Barstool Tucking**: Tuck 2 backless counter stools completely beneath the console when not eating or working to preserve open floor area.

---

## APPENDIX: PRINTABLE 4x6" BLUEPRINT CARDS
### CARD 01: SIGHTLINE & CLEARANCE FORMULAS
- Primary Walkway Clearance: Minimum 32 inches unobstructed
- Bookcase Divider Height: 55 to 60 inches (blocks eye-level bed view)
- Daylight Rule: Leave top 40% of divider open or sheer

### CARD 02: PSYCHOLOGICAL ZONING RHYTHM
- Zone 1 (Sanctuary): Bed + runner rug + 2200K warm glow
- Zone 2 (Lounge): Sofa + 6x9 rug + 2700K reading lamp
- Zone 3 (Dining/Work): 10" console behind sofa with dual barstools

### CARD 03: NIGHTTIME TRANSITION PROTOCOL
- 10:00 PM: Switch living room lamps OFF
- Dim bedroom sanctuary lamp to warm 2200K amber
- Draw sheer linen curtain closed to enter sleep state`
      }
    ]
  }
};
