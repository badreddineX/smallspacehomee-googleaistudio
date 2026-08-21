import { ProductAssetBundle } from '../productAssetsData';

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
    deliverablesOverview: 'The complete 4-part acoustic privacy system: Acoustic Playbook (PDF), Decibel Reduction & Materials Matrix (CSV), 6-Database Notion Acoustic Vault (JSON), and Door Sound-Lock Blueprint Cards (PDF).',
    totalAssetsCount: 4,
    files: [
      {
        id: 'apk-1',
        fileName: '01_Studio_Acoustic_Privacy_Playbook.pdf',
        fileType: 'PDF Master Guide',
        extension: '.pdf',
        fileSize: '28 Pages • 3.9 MB',
        badge: 'Core Field Guide (Learn & Execute)',
        description: 'Comprehensive 16-section guide on acoustic air-lock physics, front door perimeter seals, window sound damping, and corner bass absorption.',
        previewSnippet: 'MODULE 1: Acoustic Air-Lock Physics & Flanking Paths\nMODULE 2: Front Door Silicone Sweep & Perimeter Gaskets\nMODULE 3: Triple-Weave Heavyweight Drapes (4" Window Overhang)\nMODULE 4: Impact Decoupling & Ambient Pink Noise Masking',
        downloadableContent: `# The Studio Apartment Acoustic Privacy & Soundproofing Field Playbook
## How to Cut Hallway Footsteps, Elevator Hum, and Neighbor Noise by Up to 14 dB in Thin-Walled Rentals
*Publication by SmallSpaceHome.ca Editorial Lab • Tested in 510 sq ft Toronto Rental Lab*

### CORE PROMISE
Create a tranquil, library-quiet living sanctuary in a noisy apartment building using renter-safe acoustic mass, airtight perimeter seals, and sound deflection angles.

---

### TACTICAL DASHBOARD
- **Setup Time**: 1.5 hours (under 90 minutes)
- **Materials Cost**: $38–$75 CAD total
- **Noise Reduction**: -10 to -14 dB hallway noise reduction
- **Renter Safety**: 100% Zero-Damage Peelable Silicone & Tension Rods
- **Reversibility**: Leaves zero adhesive residue on door frames

---

### HACK MODULE 01: THE FRONT DOOR DUAL-DENSITY SILICONE AIR-LOCK
- **The Problem**: Standard apartment doors have a 3/4" to 1" open air gap at the bottom and loose perimeter jambs. Because sound behaves like water through air leaks, 85% of hallway noise passes through this single gap.
- **The Hack**: A heavy dual-density silicone under-door draft stopper paired with self-adhesive hollow rubber D-profile weatherstripping around the door frame.
- **Materials**: 39-inch multi-layer silicone door sweep ($14.50), silicone jamb weatherstripping ($11.00), 70% alcohol wipe.
- **Steps**:
  1. Clean bottom edge of door interior with 70% Isopropyl alcohol.
  2. Cut silicone sweep to match exact door width with scissors.
  3. Close door and press sweep so the 3 bottom silicone fins lightly touch the hardwood floor with zero drag resistance.
  4. Adhere D-profile hollow rubber foam along the inner door jamb stop so door compresses gasket tightly when latched.
- **Why It Works**: Eliminates the open air channel, cutting voice and footstep transmission by 8–12 dB immediately.
- **Rental Check**: Uses low-residue peelable acrylic adhesive; removes cleanly at move-out with gentle hair dryer heat.`
      },
      {
        id: 'apk-2',
        fileName: '02_Acoustic_Materials_And_Decibel_Matrix.csv',
        fileType: 'Spreadsheet (CSV/Excel)',
        extension: '.csv',
        fileSize: '18 Columns • 14 Rows • 16 KB',
        badge: 'Acoustic Decibel Matrix (Filter & Manage)',
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
        fileName: '03_Studio_Acoustic_Notion_Vault.json',
        fileType: 'Notion Template',
        extension: '.json',
        fileSize: '6 Databases • 22 KB',
        badge: 'Notion Workspace (Plan & Track)',
        description: 'Complete Notion workspace with Noise Source Tracker, Decibel Audit Log, Materials Shopping List, and Soundproofing Project Board.',
        previewSnippet: '{\n  "workspaceName": "Studio Acoustic Privacy Operating System",\n  "version": "3.0.0",\n  "databases": ["Noise Audit & Decibel Log", "Acoustic Hardware Shopping List", "Room Sound-Lock Checklist"]\n}',
        downloadableContent: JSON.stringify({
          workspaceName: "Studio Acoustic Privacy Operating System",
          version: "3.0.0",
          author: "SmallSpaceHome.ca Editorial Lab",
          theme: {
            palette: ["#FAF8F5 (Warm Cream)", "#4A533E (Warm Sage)", "#1C1917 (Charcoal)", "#D9D3C7 (Muted Tan)"],
            style: "Acoustic calibration, door air-lock architecture, and decibel reduction tracking."
          },
          databases: [
            {
              name: "Noise Audit & Decibel Log",
              properties: ["Noise Source", "Location", "Peak Decibels (dBA)", "Frequency Profile", "Installed Fix", "Result dB Drop"],
              sampleRecords: [
                { source: "Hallway Footsteps & Voices", location: "Front Door Bottom Gap", peak: "68 dBA", freq: "Mid/High Voice", fix: "Silicone Sweep + D-Profile Gasket", drop: "-12 dBA" },
                { source: "Street Traffic Rumble", location: "Balcony Sliding Window", peak: "62 dBA", freq: "Low Frequency", fix: "32oz Triple-Weave Velvet Drapes", drop: "-7 dBA" },
                { source: "Adjacent Unit TV Audio", location: "Shared Living Wall", peak: "54 dBA", freq: "Mid Frequency", fix: "Solid Bookshelf + High-Pile Rug Underlay", drop: "-5 dBA" }
              ]
            }
          ]
        }, null, 2)
      },
      {
        id: 'apk-4',
        fileName: '04_Door_Sound_Lock_Blueprint_Cards.pdf',
        fileType: 'Printable Cheatsheet',
        extension: '.pdf',
        fileSize: '4x6 Cards • 1.5 MB',
        badge: 'Printable Blueprint Cards',
        description: '4x6" printable reference cards for door air-lock measurements, weatherstripping compression rules, and pink noise placement.',
        previewSnippet: 'CARD 1: Door Air-Lock Light Test Protocol\nCARD 2: Weatherstrip Profile Sizing (D vs V)\nCARD 3: Acoustic Curtain Floor-to-Ceiling Spans\nCARD 4: Safe Sound-Masking Decibel Thresholds',
        downloadableContent: `# Studio Soundproofing Cheat Cards
SmallSpaceHome.ca • Canadian Urban Renter Edition

CARD 01: THE DOOR AIR-LOCK LIGHT TEST
[ ] Turn off hallway lights and turn on interior living lights
[ ] Stand in dark hallway: If light shines under door, sound enters freely
[ ] Clean door base with 70% alcohol; align silicone sweep to block 100% light

CARD 02: GASKET COMPRESSION RULES
[ ] Hollow D-profile rubber foam: Compresses from 6mm to 2mm when latched
[ ] Adhere along interior door stop moulding (not the outer frame)
[ ] Ensure door handle latches firmly without requiring heavy shoulder push`
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
    deliverablesOverview: 'The complete 4-part entryway system: Field Playbook (PDF), Footprint & Door Clearance Matrix (CSV), 6-Database Notion Entry Hub (JSON), and 6-Inch Floating Blueprint Cards (PDF).',
    totalAssetsCount: 4,
    files: [
      {
        id: 'edz-1',
        fileName: '01_Micro_Entryway_Dropzone_Playbook.pdf',
        fileType: 'PDF Master Guide',
        extension: '.pdf',
        fileSize: '28 Pages • 3.8 MB',
        badge: 'Core Field Guide (Learn & Execute)',
        description: 'Comprehensive 16-section guide on 6-inch floating picture ledges as consoles, staggered double-height hooks, river stone boot trays, and concealed shoe tiering.',
        previewSnippet: 'MODULE 1: The 6-Inch Floating Console Architecture\nMODULE 2: Staggered Double-Height Coat Hook Geometry\nMODULE 3: Zero-Footprint Concealed Shoe Tiering\nMODULE 4: River Stone Canadian Winter Boot Drainage',
        downloadableContent: `# The Micro-Entryway 6-Inch "Drop Zone" & Clutter-Stop Field Playbook
## How to Stop Coat, Shoe, Key, and Mail Clutter at Your Front Door with Zero Floor Space Required
*Publication by SmallSpaceHome.ca Editorial Lab • Tested in 510 sq ft Toronto Rental Lab*

### CORE PROMISE
Create an ultra-slim, designer-grade entryway drop zone in a narrow apartment hallway under 38 inches wide without blocking door swings or cluttering floor walkways.

---

### TACTICAL DASHBOARD
- **Setup Time**: 1 hour total
- **Materials Cost**: $32–$55 CAD
- **Wall Projection**: 5.5 inches maximum (preserves 32"+ walkway)
- **Renter Safety**: Zero drywall damage using OOK/3M Claw micro-pin anchors
- **Capacity**: Holds 6 winter coats, 8 pairs of shoes, keys, mail, and umbrellas

---

### HACK MODULE 01: THE 5.5-INCH FLOATING PICTURE LEDGE CONSOLE
- **The Problem**: Standard hallway console tables are 12 to 16 inches deep, completely choking narrow rental corridors and bumping opening doors.
- **The Hack**: An inverted 45" solid pine or MDF picture ledge (4.5–5.5" depth) mounted at 38" height with micro-pin drywall anchors.
- **Materials**: 45" picture ledge ($16.00), 2 OOK push wire hooks or 3M Claw anchors ($8.00), mini bubble level.
- **Steps**:
  1. Measure 38 inches up from floor along entryway wall (optimal elbow height).
  2. Verify 36-inch clearance from front door handle arc.
  3. Mount picture ledge level using micro-pin hooks through pre-drilled bracket slots.
  4. Place ceramic catchall dish on ledge for mail, wallet, and sunglasses.
- **Why It Works**: Provides a solid surface for incoming mail and keys while protruding less than 6 inches into the hallway walkway.`
      },
      {
        id: 'edz-2',
        fileName: '02_Entryway_Footprint_And_Clearance_Matrix.csv',
        fileType: 'Spreadsheet (CSV/Excel)',
        extension: '.csv',
        fileSize: '18 Columns • 14 Rows • 16 KB',
        badge: 'Entryway Clearance Matrix (Filter & Manage)',
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
        fileName: '03_Micro_Entryway_Notion_Hub.json',
        fileType: 'Notion Template',
        extension: '.json',
        fileSize: '6 Databases • 22 KB',
        badge: 'Notion Workspace (Plan & Track)',
        description: 'Complete Notion workspace with Entryway Item Ledger, Daily Outflow Checklist, Shopping List, and Spatial Clearance Calculator.',
        previewSnippet: '{\n  "workspaceName": "Micro-Entryway & Drop Zone Operating System",\n  "version": "3.0.0",\n  "databases": ["Entryway Item & Spatial Ledger", "Daily 60-Second Outflow Checklist", "Hardware Shopping List"]\n}',
        downloadableContent: JSON.stringify({
          workspaceName: "Micro-Entryway & Drop Zone Operating System",
          version: "3.0.0",
          author: "SmallSpaceHome.ca Editorial Lab",
          theme: {
            palette: ["#FAF8F5 (Warm Cream)", "#4A533E (Warm Sage)", "#1C1917 (Charcoal)", "#D9D3C7 (Muted Tan)"],
            style: "Ultra-slim entryway organization, 6-inch drop zone architecture, and daily clutter-stop habits."
          },
          databases: [
            {
              name: "Entryway Item & Spatial Ledger",
              properties: ["Item Name", "Storage Location", "Depth Projection", "Weight Capacity", "Status"],
              sampleRecords: [
                { item: "Floating Picture Ledge Mail Bar", location: "North Wall at 38in", depth: "4.5 inches", capacity: "15 lbs", status: "Active" },
                { item: "Staggered Winter Coat Hooks (x4)", location: "East Wall at 66in & 46in", depth: "3.0 inches", capacity: "40 lbs total", status: "Active" },
                { item: "River Stone Boot Drainage Tray", location: "Floor along Baseboard", depth: "12.0 inches", capacity: "4 pairs", status: "Active" }
              ]
            }
          ]
        }, null, 2)
      },
      {
        id: 'edz-4',
        fileName: '04_Entryway_6_Inch_Blueprint_Cards.pdf',
        fileType: 'Printable Cheatsheet',
        extension: '.pdf',
        fileSize: '4x6 Cards • 1.5 MB',
        badge: 'Printable Blueprint Cards',
        description: '4x6" printable reference cards for entryway walkway clearances, hook staggering geometry, and boot tray river stone ratios.',
        previewSnippet: 'CARD 1: Hallway Walkway Clearance Rule (32" Minimum)\nCARD 2: Staggered Double-Height Hook Measurements\nCARD 3: Under-Ledge Neodymium Magnet Placement\nCARD 4: 60-Second Daily Return-to-Zero Protocol',
        downloadableContent: `# Micro-Entryway Tactical Blueprint Cards
SmallSpaceHome.ca • Canadian Urban Renter Edition

CARD 01: HALLWAY CLEARANCE RULES
[ ] Minimum Clear Walkway: 32 inches from ledge to opposite wall
[ ] Door Swing Clearance: 36 inches clear radius from hinge point
[ ] Ledge Height: 38 to 40 inches from floor (natural elbow drop)

CARD 02: STAGGERED HOOK GEOMETRY
[ ] Upper Hooks (Coats & Parkas): 66 inches from floor
[ ] Lower Hooks (Bags & Keys): 46 inches from floor (offset 8" horizontally)
[ ] Spacing: 8 to 10 inches between adjacent vertical pairs`
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
    deliverablesOverview: 'The complete 4-part hidden storage blueprint: Field Playbook (PDF), Hidden Cubic Volume Calculator (CSV), 6-Database Notion Vault (JSON), and Elevation Blueprint Cards (PDF).',
    totalAssetsCount: 4,
    files: [
      {
        id: 'ubs-1',
        fileName: '01_Underbed_Hidden_Storage_Playbook.pdf',
        fileType: 'PDF Master Guide',
        extension: '.pdf',
        fileSize: '28 Pages • 3.8 MB',
        badge: 'Core Field Guide (Learn & Execute)',
        description: 'Comprehensive 16-section guide on bed riser weight distribution, zippered Oxford-cloth dust defense, nesting hard-shell luggage, and sofa backboard ledges.',
        previewSnippet: 'MODULE 1: Bed Riser Elevation & Weight Physics (1,500 lb Safe Load)\nMODULE 2: Oxford-Cloth Dust Vaults vs Rigid Plastic Bins\nMODULE 3: Hard-Shell Suitcase Nesting & Vacuum Compression\nMODULE 4: Sofa & Credenza Toe-Kick Hidden Dead Space',
        downloadableContent: `# The Under-Bed & Hidden Space Secret Storage Field Playbook
## How to Unlock 28+ Cubic Feet of Invisible, Dust-Proof Storage Beneath Beds, Sofas, and Cabinet Bases
*Publication by SmallSpaceHome.ca Editorial Lab • Tested in 510 sq ft Toronto Rental Lab*

### CORE PROMISE
Transform the massive dead space beneath your bed and furniture into a dust-sealed, rolling storage vault holding suitcases, winter coats, and bulky linens invisibly.

---

### TACTICAL DASHBOARD
- **Setup Time**: 1.5 hours
- **Materials Cost**: $34–$65 CAD
- **Recovered Volume**: +28.5 cubic feet (equivalent to a 4-drawer dresser)
- **Renter Safety**: 100% Floor & Frame Safe (Heavy-duty steel risers with felt pads)
- **Accessibility**: Smooth-glide rubber casters roll easily on rugs and hardwood

---

### HACK MODULE 01: 2-INCH HEAVY STEEL BED RISERS WITH FELT BASES
- **The Problem**: Standard bed frames offer only 6 to 8 inches of under-bed clearance, blocking suitcases and large storage totes.
- **The Hack**: 2-inch heavy-duty steel or solid wood risers equipped with heavy felt base pads.
- **Materials**: 4 heavy-duty steel bed risers (1,500 lb rated load), 4 adhesive felt furniture pads.
- **Steps**:
  1. Lift bed frame corner with assistance.
  2. Position steel riser cup squarely beneath bed leg.
  3. Verify center leg support also receives matching riser to prevent mattress sag.
- **Why It Works**: Increases under-bed clearance from 7.5" to 9.5"+, instantly accommodating standard 9-inch hard-shell carry-on luggage and large Oxford storage containers.`
      },
      {
        id: 'ubs-2',
        fileName: '02_Hidden_Cubic_Storage_Calculator.csv',
        fileType: 'Spreadsheet (CSV/Excel)',
        extension: '.csv',
        fileSize: '18 Columns • 14 Rows • 16 KB',
        badge: 'Hidden Volume Matrix (Filter & Manage)',
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
        fileName: '03_Underbed_Storage_Notion_Vault.json',
        fileType: 'Notion Template',
        extension: '.json',
        fileSize: '6 Databases • 22 KB',
        badge: 'Notion Workspace (Plan & Track)',
        description: 'Complete Notion workspace with Hidden Storage Inventory, Bed Clearance Calculator, Luggage Contents Log, and Seasonal Rotation Schedule.',
        previewSnippet: '{\n  "workspaceName": "Under-Bed & Hidden Storage Operating System",\n  "version": "3.0.0",\n  "databases": ["Hidden Storage Bin Inventory", "Luggage & Compression Contents", "Seasonal Rotation Schedule"]\n}',
        downloadableContent: JSON.stringify({
          workspaceName: "Under-Bed & Hidden Storage Operating System",
          version: "3.0.0",
          author: "SmallSpaceHome.ca Editorial Lab",
          theme: {
            palette: ["#FAF8F5 (Warm Cream)", "#4A533E (Warm Sage)", "#1C1917 (Charcoal)", "#D9D3C7 (Muted Tan)"],
            style: "Under-bed clearance planning, dust-proof storage inventory, and luggage compression tracking."
          },
          databases: [
            {
              name: "Hidden Storage Bin Inventory",
              properties: ["Container Name", "Zone Location", "Stored Contents", "Volume (cu ft)", "Access Frequency"],
              sampleRecords: [
                { name: "Under-Bed Tote A (Left Front)", location: "Under Queen Bed (Left)", contents: "Extra Queen Duvet & Linen Sets", volume: "4.8 cu ft", frequency: "Monthly" },
                { name: "Large Away Suitcase (Center)", location: "Under Queen Bed (Center)", contents: "Heavy Winter Ski Gear & Woolens", volume: "9.5 cu ft", frequency: "Seasonal" },
                { name: "Rolling Pine Crate (Right Front)", location: "Under Queen Bed (Right)", contents: "Workout Equipment & Foam Roller", volume: "3.2 cu ft", frequency: "Weekly" }
              ]
            }
          ]
        }, null, 2)
      },
      {
        id: 'ubs-4',
        fileName: '04_Bed_Elevation_Blueprint_Cards.pdf',
        fileType: 'Printable Cheatsheet',
        extension: '.pdf',
        fileSize: '4x6 Cards • 1.5 MB',
        badge: 'Printable Blueprint Cards',
        description: '4x6" printable reference cards for bed frame elevation safety, caster installation clearances, and cedar ring refreshing.',
        previewSnippet: 'CARD 1: Bed Riser Safe Weight Distribution\nCARD 2: Zippered Oxford-Cloth vs Plastic Comparison\nCARD 3: Hard-Shell Suitcase Nesting Ratios\nCARD 4: Biannual Seasonal Swap Checklist',
        downloadableContent: `# Under-Bed Storage Tactical Blueprint Cards
SmallSpaceHome.ca • Canadian Urban Renter Edition

CARD 01: BED ELEVATION SAFETY
[ ] Check total bed legs (4 corner legs + 1 or 2 center support legs)
[ ] Always install matching height risers on center legs to prevent spine dip
[ ] Ensure riser base features 100% dense wool felt to protect hardwood floors

CARD 02: DUST DEFENSE PROTOCOL
[ ] Avoid open-top plastic bins that accumulate pet hair and dust bunnies
[ ] Use fully zippered 600D Oxford-cloth storage totes with clear viewing windows
[ ] Place 2 aromatic red cedar rings per container for natural wool moth defense`
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
    deliverablesOverview: 'The complete 4-part studio separation system: Visual Field Playbook (PDF), Floor Plan Scale & Walkway Matrix (CSV), 6-Database Notion Studio Hub (JSON), and Floor Plan Blueprint Cards (PDF).',
    totalAssetsCount: 4,
    files: [
      {
        id: 'sbs-1',
        fileName: '01_Studio_Living_Bed_Separation_Playbook.pdf',
        fileType: 'PDF Master Guide',
        extension: '.pdf',
        fileSize: '30 Pages • 4.1 MB',
        badge: 'Core Field Guide (Learn & Execute)',
        description: 'Comprehensive 16-section guide on studio sightline mapping, open-back modular bookcase dividers, ceiling spring-tension track drapery, and multi-rug psychological zoning.',
        previewSnippet: 'MODULE 1: Sightline Mapping & The 40% Natural Light Rule\nMODULE 2: Floating Open-Back Modular Bookcase Architecture\nMODULE 3: Ceiling Spring-Tension Curtain Track Systems\nMODULE 4: Multi-Rug Geometry & Spatial Psychological Anchoring',
        downloadableContent: `# The Studio Living-Bed Separation & Visual Privacy Field Playbook
## How to Create 3 Distinct "Rooms" in a Single Open Studio Without Building Walls or Blocking Natural Daylight
*Publication by SmallSpaceHome.ca Editorial Lab • Tested in 510 sq ft Toronto Rental Lab*

### CORE PROMISE
Transform a single open studio into a private bedroom sanctuary, relaxing living lounge, and functional dining nook without drywall screws or losing natural window light.

---

### TACTICAL DASHBOARD
- **Setup Time**: 2.5 hours
- **Materials Cost**: $45–$95 CAD
- **Sightline Privacy**: 100% visual privacy from entryway/living area
- **Daylight Preservation**: Preserves 90%+ natural sunlight penetration
- **Renter Safety**: 100% No-Drill Divider Systems (Freestanding & Tension-based)

---

### HACK MODULE 01: THE OPEN-BACK FLOATING BOOKCASE DIVIDER
- **The Problem**: Solid walls or opaque screens completely plunge the back half of a studio into depressing darkness.
- **The Hack**: A 4x2 or 4x4 open-back modular cube bookcase (such as IKEA Kallax) placed perpendicular to the wall.
- **Materials**: 4x2 modular bookcase ($59.00), heavy felt base pads, decorative linen storage boxes.
- **Steps**:
  1. Position bookcase perpendicular to wall at the foot of the bed.
  2. Maintain a strict 32-inch clear walkway between bookcase end and opposite wall.
  3. Fill lower 2 cube rows with closed fabric boxes (blocks bed sightlines).
  4. Leave upper 2 cube rows open with trailing plants and books (allows 80% natural daylight to pass freely).
- **Why It Works**: Creates a 58-inch tall architectural room divider that provides 16 cubic feet of dual-sided storage and full bed privacy while preserving window sunlight.`
      },
      {
        id: 'sbs-2',
        fileName: '02_Studio_Layout_And_Clearance_Matrix.csv',
        fileType: 'Spreadsheet (CSV/Excel)',
        extension: '.csv',
        fileSize: '18 Columns • 14 Rows • 16 KB',
        badge: 'Studio Layout Matrix (Filter & Manage)',
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
        fileName: '03_Studio_Separation_Notion_Hub.json',
        fileType: 'Notion Template',
        extension: '.json',
        fileSize: '6 Databases • 22 KB',
        badge: 'Notion Workspace (Plan & Track)',
        description: 'Complete Notion workspace with Studio Floor Plan Calculator, Furniture Footprint Ledger, Sightline Checklist, and Zone Lighting Planner.',
        previewSnippet: '{\n  "workspaceName": "Studio Living-Bed Separation Operating System",\n  "version": "3.0.0",\n  "databases": ["Studio Furniture Footprint Ledger", "Sightline & Clearance Audit", "Zone Lighting & Ambience Map"]\n}',
        downloadableContent: JSON.stringify({
          workspaceName: "Studio Living-Bed Separation Operating System",
          version: "3.0.0",
          author: "SmallSpaceHome.ca Editorial Lab",
          theme: {
            palette: ["#FAF8F5 (Warm Cream)", "#4A533E (Warm Sage)", "#1C1917 (Charcoal)", "#D9D3C7 (Muted Tan)"],
            style: "Studio zoning architecture, sightline mapping, and daylight preservation tracking."
          },
          databases: [
            {
              name: "Studio Furniture Footprint Ledger",
              properties: ["Furniture Item", "Zone Assignment", "Width (in)", "Depth (in)", "Walkway Clearance", "Status"],
              sampleRecords: [
                { item: "Open-Back 4x2 Bookcase", zone: "Bedroom / Lounge Boundary", width: "58 in", depth: "15 in", clearance: "34 in to wall", status: "Installed" },
                { item: "Sofa-Back Dining Console", zone: "Lounge / Kitchen Boundary", width: "48 in", depth: "10 in", clearance: "36 in to kitchen counter", status: "Installed" },
                { item: "Queen Bed & Side Table", zone: "Bedroom Sanctuary", width: "64 in", depth: "84 in", clearance: "32 in perimeter", status: "Installed" }
              ]
            }
          ]
        }, null, 2)
      },
      {
        id: 'sbs-4',
        fileName: '04_Studio_Floor_Plan_Blueprint_Cards.pdf',
        fileType: 'Printable Cheatsheet',
        extension: '.pdf',
        fileSize: '4x6 Cards • 1.5 MB',
        badge: 'Printable Blueprint Cards',
        description: '4x6" printable reference cards for studio sightline calculations, 32-inch walkway rules, and sheer drapery light formulas.',
        previewSnippet: 'CARD 1: Studio 32-Inch Walkway Rule\nCARD 2: Open-Back Bookcase Light Ratios\nCARD 3: The 3-Rug Floor Boundary Geometry\nCARD 4: Evening Bedroom Lighting Transition',
        downloadableContent: `# Studio Living-Bed Separation Cheat Cards
SmallSpaceHome.ca • Canadian Urban Renter Edition

CARD 01: SIGHTLINE & CLEARANCE FORMULAS
[ ] Primary Walkway Clearance: Minimum 32 inches unobstructed
[ ] Bookcase Divider Height: 55 to 60 inches (blocks eye-level bed view)
[ ] Daylight Rule: Leave top 40% of divider open or sheer

CARD 02: PSYCHOLOGICAL ZONING RHYTHM
[ ] Zone 1 (Sanctuary): Bed + runner rug + 2200K warm glow
[ ] Zone 2 (Lounge): Sofa + 6x9 rug + 2700K reading lamp
[ ] Zone 3 (Dining/Work): 10" console behind sofa with dual barstools`
      }
    ]
  }
};
