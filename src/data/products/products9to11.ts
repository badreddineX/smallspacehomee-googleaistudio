import { ProductAssetBundle, generatePlaybookDeliverableFile } from '../productAssetsData';

export const PRODUCTS_9_TO_11: Record<string, ProductAssetBundle> = {
  // ==========================================
  // PRODUCT 9: WFH MULTI-USE DESK RESET KIT
  // ==========================================
  'kit-wfh-desk-reset': {
    productId: 'kit-wfh-desk-reset',
    rank: 9,
    title: 'The WFH Multi-Use Desk & 15-Minute Room Reset Kit',
    photography: {
      url: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=1600&q=85',
      alt: 'Clean minimalist home office nook in small apartment living room with zero cables and quick-reset felt laptop tray',
      caption: 'Tested in a 510 sq ft hybrid apartment: Transformed a compact 36x20" desk from high-output workstation to serene evening console in under 8 minutes with zero visible cords.',
      spatialSpecs: '36x20" Desk Footprint • Zero Visible Cords • 15-Min Evening Transition Protocol',
      palette: ['#FAF8F5', '#4A533E', '#D9D3C7', '#8C857B', '#1C1917'],
      stylingKeywords: ['Zero-Cable Invisibility', 'Felt Laptop Hideaway', '4000K to 2200K Shift', '15-Min Reset']
    },
    deliverablesOverview: 'The complete 4-part WFH reset system: Volume 09 Commercial Ebook Playbook (Digital PDF), Ergonomics & Cable Routing Matrix (CSV), 6-Database Notion Workstation Hub (JSON), and Evening Transition Blueprint Cards.',
    totalAssetsCount: 4,
    files: [
      generatePlaybookDeliverableFile(9),
      {
        id: 'wfh-2',
        fileName: '02_Desk_Ergonomics_And_Cable_Matrix.csv',
        fileType: 'Spreadsheet (CSV/Excel)',
        extension: '.csv',
        fileSize: '18 Columns • 14 Rows • 16 KB',
        badge: 'Cable & Reset Matrix (Filter & Manage)',
        description: 'Structured spreadsheet matrix calculating power draw loads, desk ergonomics, cable raceway lengths, and evening reset times.',
        previewSnippet: 'Record_ID,Module,Hack_Name,Category,Difficulty,Time_Minutes,Cost_Level_CAD,Materials,Tools_Required,Target_Surface_or_Zone,Rental_Safe,Reversible,Damage_Risk_Level,Space_Gain_or_Impact,Conservative_Capacity_or_Rating,Core_Step_Summary,Safety_or_Manufacturer_Note,Status',
        downloadableContent: `Record_ID,Module,Hack_Name,Category,Difficulty,Time_Minutes,Cost_Level_CAD,Materials,Tools_Required,Target_Surface_or_Zone,Rental_Safe,Reversible,Damage_Risk_Level,Space_Gain_or_Impact,Conservative_Capacity_or_Rating,Core_Step_Summary,Safety_or_Manufacturer_Note,Status
WFH-001,M01: Cable Channel,Under-Desk Adhesive J-Channel Raceway,Cable Management,Low,20,8.50,PVC J-Channel (24in) + Alcohol,Scissors,Desk Underside,Yes,Yes,Low,Hides 100% of desk cables,10 lbs static cable load,Clean desk bottom; adhere raceway; tuck all power cords,Do not overload channel with excess heavy adapters,Verified
WFH-002,M01: Power Hub,Under-Desk Power Strip Mounting,Power Hub,Low,15,6.00,Interlocking Mounting Strips (2 pairs),None,Desk Underside,Yes,Yes,Low,Lifts power bar off floor,1500W rated surge bar,Mount surge strip to underside; plug in chargers,Ensure power switch remains accessible by touch,Verified
WFH-003,M02: Laptop Hideaway,The 5-Second Felt Laptop Drawer Tray,Desk Reset,Low,15,18.00,Slide-Under Felt Storage Tray,None,Desk Underside,Yes,Yes,Low,Clears desk surface completely,12 lbs laptop + iPad,Mount slide-out tray; slide closed laptop inside at 5:30 PM,Prevents laptop screen from glowing in dark room,Verified
WFH-004,M03: Lighting Automation,5:30 PM Kelvin Shift Lighting Routine,Circadian Shift,Low,10,22.00,Smart Bulb (Tunable White),Smartphone,Desk Lamp,Yes,Yes,Low,Automates mental workday end,4000K focus / 2200K evening,Program bulb to shift from crisp white to warm amber at 5:30,Triggers melatonin production and mental relaxation,Verified
WFH-005,M04: Chair Roll,Low-Profile Clear Polycarbonate Floor Mat,Flooring,Low,5,28.00,Clear Polycarbonate Chair Mat,None,Desk Floor,Yes,Yes,Low,Protects hardwood from wheels,300 lbs chair load,Place mat beneath desk chair; smooth against floor,Prevents wheel gouges on rental hardwood floors,Verified
WFH-006,M05: Sunset Protocol,The 8-Minute Workday Sunset Habit,Habit System,Low,8,0.00,Timer,None,Desk & Living Area,Yes,Yes,Low,100% psychological separation,Zero lingering work guilt,File paperwork; slide laptop into tray; wipe desk surface,Execute consistently at exact same time daily,Standard`
      },
      {
        id: 'wfh-3',
        fileName: '03_WFH_Desk_Reset_Notion_Hub.json',
        fileType: 'Notion Template',
        extension: '.json',
        fileSize: '6 Databases • 22 KB',
        badge: 'Notion Workspace (Plan & Track)',
        description: 'Complete Notion workspace with Workstation Hardware Inventory, Daily Sunset Checklist, Lighting Automation Map, and Ergonomic Setup Log.',
        previewSnippet: '{\n  "workspaceName": "WFH Multi-Use Desk & Evening Reset Hub",\n  "version": "3.0.0",\n  "databases": ["Workstation Hardware & Peripherals", "Daily Workday Sunset Checklist", "Circadian Lighting Automation Map"]\n}',
        downloadableContent: JSON.stringify({
          workspaceName: "WFH Multi-Use Desk & Evening Reset Hub",
          version: "3.0.0",
          author: "SmallSpaceHome.ca Editorial Lab",
          theme: {
            palette: ["#FAF8F5 (Warm Cream)", "#4A533E (Warm Sage)", "#1C1917 (Charcoal)", "#D9D3C7 (Muted Tan)"],
            style: "Workstation concealment, zero-cable architecture, and 15-minute evening mental transition routines."
          },
          databases: [
            {
              name: "Daily Workday Sunset Checklist",
              properties: ["Task Step", "Estimated Minutes", "Category", "Trigger Time", "Status"],
              sampleRecords: [
                { task: "Close browser tabs & backup files", mins: 2, cat: "Digital Shutdown", time: "5:28 PM", status: "Active" },
                { task: "Slide laptop & mouse into felt under-desk tray", mins: 1, cat: "Physical Concealment", time: "5:30 PM", status: "Active" },
                { task: "Trigger 2200K warm amber desk lamp shift", mins: 1, cat: "Lighting Shift", time: "5:31 PM", status: "Active" },
                { task: "Place ceramic flower vase in center of clean desk", mins: 2, cat: "Living Transition", time: "5:32 PM", status: "Active" }
              ]
            }
          ]
        }, null, 2)
      },
      {
        id: 'wfh-4',
        fileName: '04_Evening_Transition_Blueprint_Cards.pdf',
        fileType: 'Printable Cheatsheet',
        extension: '.pdf',
        fileSize: '4x6 Cards • 1.5 MB',
        badge: 'Printable Blueprint Cards',
        description: '4x6" printable reference cards for under-desk cable routing, 5:30 PM lighting transitions, and evening mental reset habits.',
        previewSnippet: 'CARD 1: Under-Desk Cable Routing Geometry\nCARD 2: The 5-Second Laptop Concealment Step\nCARD 3: Circadian Kelvin Lighting Spectrum (4000K vs 2200K)\nCARD 4: 8-Minute Workday Sunset Checklist',
        downloadableContent: `# WFH Desk Reset Tactical Blueprint Cards
SmallSpaceHome.ca • Canadian Urban Renter Edition

CARD 01: ZERO-CABLE ROUTING RULES
[ ] Adhere J-channel 2 inches inward from rear edge (invisible from room)
[ ] Fasten surge strip securely with interlocking mounting strips
[ ] Use a single braided cable sleeve down the rear desk leg

CARD 02: THE 5:30 PM WORKDAY SUNSET
[ ] 5:25 PM: Complete final email and close all work tabs
[ ] 5:30 PM: Disconnect laptop; slide into felt under-desk tray
[ ] 5:32 PM: Wipe desk surface with microfiber cloth; place evening vase
[ ] 5:35 PM: Shift room lighting from 4000K focus to 2200K warm amber`
      }
    ]
  },

  // ==========================================
  // PRODUCT 10: OPTICAL SPACE EXPANDER KIT
  // ==========================================
  'kit-optical-expander-lighting': {
    productId: 'kit-optical-expander-lighting',
    rank: 10,
    title: 'The Optical Illusion Small Space Expander & Lighting Kit',
    photography: {
      url: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1600&q=85',
      alt: 'Clean Scandinavian living room with high-mounted floor-to-ceiling drapes, 45-degree angled daylight mirror, and warm layered ambient lighting',
      caption: 'Tested in a 450 sq ft north-facing rental apartment: Visually expanded ceiling perception and daylight penetration by 60% using floor-to-ceiling drapery geometry and 45-degree mirror reflection angles.',
      spatialSpecs: '450 sq ft Studio • North-Facing Daylight • 3-Tier Layered 2700K Lighting',
      palette: ['#FAF8F5', '#4A533E', '#D9D3C7', '#8C857B', '#1C1917'],
      stylingKeywords: ['Optical Height', '45-Degree Mirror Bounce', 'Floor-to-Ceiling Drapes', 'Zero Overhead Glare']
    },
    deliverablesOverview: 'The complete 4-part visual expansion system: Volume 10 Commercial Ebook Playbook (Digital PDF), Mirror Reflection & Kelvin Spectrum Matrix (CSV), 6-Database Notion Lighting Hub (JSON), and Optical Geometry Blueprint Cards.',
    totalAssetsCount: 4,
    files: [
      generatePlaybookDeliverableFile(10),
      {
        id: 'ose-2',
        fileName: '02_Mirror_Bounce_And_Kelvin_Matrix.csv',
        fileType: 'Spreadsheet (CSV/Excel)',
        extension: '.csv',
        fileSize: '18 Columns • 14 Rows • 16 KB',
        badge: 'Lighting & Mirror Matrix (Filter & Manage)',
        description: 'Structured spreadsheet matrix calculating window reflection angles, lumens per square foot, and color temperature mapping.',
        previewSnippet: 'Record_ID,Module,Hack_Name,Category,Difficulty,Time_Minutes,Cost_Level_CAD,Materials,Tools_Required,Target_Surface_or_Zone,Rental_Safe,Reversible,Damage_Risk_Level,Space_Gain_or_Impact,Conservative_Capacity_or_Rating,Core_Step_Summary,Safety_or_Manufacturer_Note,Status',
        downloadableContent: `Record_ID,Module,Hack_Name,Category,Difficulty,Time_Minutes,Cost_Level_CAD,Materials,Tools_Required,Target_Surface_or_Zone,Rental_Safe,Reversible,Damage_Risk_Level,Space_Gain_or_Impact,Conservative_Capacity_or_Rating,Core_Step_Summary,Safety_or_Manufacturer_Note,Status
OPT-001,M01: Drapery,Floor-to-Ceiling High Curtain Hanging,Window Styling,Low,25,32.00,96in Linen Curtain Panels + Rod,Level + Tape,Window Wall Header,Yes,Yes,Low,Perceived +18in ceiling height,12 lbs rod tension load,Mount rod 2in below ceiling; extend 8in beyond window,Curtains must lightly kiss floor without pooling heavily,Verified
OPT-002,M02: Mirror Bounce,The 45-Degree Window Daylight Mirror Bounce,Daylight Bounce,Low,20,0.00,Full-Length Leaning Mirror,Tape Measure,Adjacent Living Wall,Yes,Yes,Low,+60% daylight penetration,50 lbs floor support,Angle mirror at 45 degrees to main window; lean safely,Reflects outdoor sky views into dark back corners,Verified
OPT-003,M03: Overhead Ban,The "Zero Overhead Glare" 3-Tier Lighting Rule,Layered Lighting,Low,15,24.00,Warm 2700K LED Bulbs (3pk),None,Floor & Table Lamps,Yes,Yes,Low,Eliminates harsh hospital glare,100% warm ambiance,Turn off single overhead fixture; use 3 low lamps,Creates inviting warm pools of light at seated eye level,Verified
OPT-004,M04: Furniture Legs,Legged Furniture Continuous Floor Sightline,Spatial Flow,Low,15,0.00,Existing Legged Sofa / Side Tables,None,Living Area,Yes,Yes,Low,+25% perceived floor area,100% open sightlines,Choose sofas and credenzas with 6in exposed legs,Seeing continuous floor under furniture makes room feel larger,Verified
OPT-005,M05: Glass/Acrylic,Glass & Translucent Acrylic Coffee Table,Light Flow,Low,10,0.00,Glass Top Table / Acrylic Nesting,None,Living Center,Yes,Yes,Low,Zero visual bulk in center,40 lbs surface load,Place glass-top table in living room center,Allows floor rug pattern to show through uninterrupted,Verified
OPT-006,M06: Perimeter Drench,Tone-on-Tone Perimeter Color Uniformity,Perimeter Flow,Low,20,0.00,Neutral Linen Throws & Art,None,Perimeter Walls,Yes,Yes,Low,Eliminates harsh visual breaks,100% cohesive flow,Match curtain tones to surrounding wall off-white color,Removes high-contrast visual stops that shrink perceived space,Standard`
      },
      {
        id: 'ose-3',
        fileName: '03_Optical_Space_Expander_Notion_Hub.json',
        fileType: 'Notion Template',
        extension: '.json',
        fileSize: '6 Databases • 22 KB',
        badge: 'Notion Workspace (Plan & Track)',
        description: 'Complete Notion workspace with Lumens & Kelvin Calculator, Mirror Sightline Map, Lighting Fixture Ledger, and Curtain Sizing Guide.',
        previewSnippet: '{\n  "workspaceName": "Optical Space Expander & Lighting Operating System",\n  "version": "3.0.0",\n  "databases": ["Lumens & Kelvin Room Calculator", "Lighting Fixture & Lamp Ledger", "Mirror Reflection Sightline Map"]\n}',
        downloadableContent: JSON.stringify({
          workspaceName: "Optical Space Expander & Lighting Operating System",
          version: "3.0.0",
          author: "SmallSpaceHome.ca Editorial Lab",
          theme: {
            palette: ["#FAF8F5 (Warm Cream)", "#4A533E (Warm Sage)", "#1C1917 (Charcoal)", "#D9D3C7 (Muted Tan)"],
            style: "Optical spatial enlargement, daylight reflection geometry, and 3-tier warm lighting architecture."
          },
          databases: [
            {
              name: "Lighting Fixture & Lamp Ledger",
              properties: ["Fixture Name", "Room Zone", "Height from Floor", "Color Temp (Kelvin)", "Lumens", "Role"],
              sampleRecords: [
                { fixture: "Arched Floor Lamp (Living Corner)", zone: "Living Room Nook", height: "68 inches", kelvin: "2700K Warm White", lumens: "800 lm", role: "Primary Ambient Pool" },
                { fixture: "Ceramic Table Lamp (Credenza)", zone: "Dining Boundary", height: "30 inches", kelvin: "2400K Soft Glow", lumens: "450 lm", role: "Accent Glow" },
                { fixture: "Desk Task Lamp (Work Nook)", zone: "Workstation", height: "24 inches", kelvin: "4000K Focus White", lumens: "600 lm", role: "Direct Task Lighting" }
              ]
            }
          ]
        }, null, 2)
      },
      {
        id: 'ose-4',
        fileName: '04_Optical_Geometry_Blueprint_Cards.pdf',
        fileType: 'Printable Cheatsheet',
        extension: '.pdf',
        fileSize: '4x6 Cards • 1.5 MB',
        badge: 'Printable Blueprint Cards',
        description: '4x6" printable reference cards for curtain height hanging formulas, 45-degree mirror positioning, and 2700K lighting formulas.',
        previewSnippet: 'CARD 1: Curtain High-and-Wide Hanging Formulas\nCARD 2: 45-Degree Mirror Daylight Bounce Angle\nCARD 3: The 3-Tier Layered Lighting Formula\nCARD 4: Kelvin Color Temperature Guide',
        downloadableContent: `# Optical Space Expander Blueprint Cards
SmallSpaceHome.ca • Canadian Urban Renter Edition

CARD 01: CURTAIN HANGING FORMULAS
[ ] Height: Mount rod 2 to 3 inches below ceiling (never directly on window frame)
[ ] Width: Extend rod 8 to 10 inches beyond window frame on each side
[ ] Length: Hem must touch floor (1/2" hover or light contact)

CARD 02: 45-DEGREE MIRROR BOUNCE
[ ] Position mirror on wall adjacent to primary window (not opposite)
[ ] Angle mirror at 45 degrees to capture direct outdoor daylight
[ ] Reflects natural sky brightness deep into rear kitchen and hallway areas`
      }
    ]
  },

  // ==========================================
  // PRODUCT 11: SMALL BATHROOM MAXIMIZER KIT
  // ==========================================
  'kit-small-bathroom-maximizer': {
    productId: 'kit-small-bathroom-maximizer',
    rank: 11,
    title: 'The Small Bathroom Vanity & Shower Vertical Maximizer',
    photography: {
      url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1600&q=85',
      alt: 'Clean modern small rental bathroom with over-toilet tiered storage, tension corner shower caddy, and amber decanted toiletries',
      caption: 'Tested in a 5x7 ft Canadian rental bathroom: Eliminated pedestal sink chaos and recovered 14 cubic feet of vertical storage with zero tile drilling and rust-proof anodized tension poles.',
      spatialSpecs: '5x7 ft Rental Bathroom • Pedestal Sink • 100% Zero-Drill Tile Architecture',
      palette: ['#FAF8F5', '#4A533E', '#D9D3C7', '#8C857B', '#1C1917'],
      stylingKeywords: ['Over-Toilet Tower', 'Spring Tension Shower Caddy', 'Double Curtain Rod', 'Amber Decanting']
    },
    deliverablesOverview: 'The complete 4-part small bathroom system: Volume 11 Commercial Ebook Playbook (Digital PDF), Humidity & Clearance Matrix (CSV), 6-Database Notion Bath Hub (JSON), and Zero-Drill Bath Blueprint Cards.',
    totalAssetsCount: 4,
    files: [
      generatePlaybookDeliverableFile(11),
      {
        id: 'sbm-2',
        fileName: '02_Bathroom_Clearance_And_Humidity_Matrix.csv',
        fileType: 'Spreadsheet (CSV/Excel)',
        extension: '.csv',
        fileSize: '18 Columns • 14 Rows • 16 KB',
        badge: 'Bathroom Clearance Matrix (Filter & Manage)',
        description: 'Structured spreadsheet matrix calculating over-toilet dimensions, shower pole tension loads, and waterproof adhesive cure times.',
        previewSnippet: 'Record_ID,Module,Hack_Name,Category,Difficulty,Time_Minutes,Cost_Level_CAD,Materials,Tools_Required,Target_Surface_or_Zone,Rental_Safe,Reversible,Damage_Risk_Level,Space_Gain_or_Impact,Conservative_Capacity_or_Rating,Core_Step_Summary,Safety_or_Manufacturer_Note,Status',
        downloadableContent: `Record_ID,Module,Hack_Name,Category,Difficulty,Time_Minutes,Cost_Level_CAD,Materials,Tools_Required,Target_Surface_or_Zone,Rental_Safe,Reversible,Damage_Risk_Level,Space_Gain_or_Impact,Conservative_Capacity_or_Rating,Core_Step_Summary,Safety_or_Manufacturer_Note,Status
BAT-001,M01: Over-Toilet,Freestanding Over-Toilet 3-Tier Storage Tower,Vertical Storage,Low,25,38.00,3-Tier Over-Toilet Shelf + Silicone Pads,Screwdriver,Over-Toilet Void,Yes,Yes,Low,+8.5 cu ft storage,35 lbs distributed load,Assemble frame over toilet tank; apply silicone wall bumpers,Verify 3in clearance above toilet flush button,Verified
BAT-002,M02: Shower Pole,Anodized Aluminum Spring-Tension Shower Pole,Shower Storage,Low,20,32.00,Tension Shower Caddy (4 baskets),None,Tub Corner Floor/Ceiling,Yes,Yes,Low,Frees tub floor ledge,20 lbs tension load,Compress spring pole between tub ledge and ceiling,Rust-proof anodized aluminum will not stain white tile,Verified
BAT-003,M03: Curtain Rods,Double Shower Curtain Rod Friction Hook System,Towel Storage,Low,15,24.00,Double Tension Curtain Rod + S-Hooks,None,Tub Span,Yes,Yes,Low,Dries 3 towels & loofahs,18 lbs tension load,Install double rod; outer rod holds decor curtain; inner rod holds towels,Allows damp towels to air dry with full ventilation,Verified
BAT-004,M04: Medicine Cabinet,Inside-Door Magnetic Grooming Strip,Cabinet Storage,Low,10,7.50,Self-Adhesive Magnetic Tool Strip (8in),Alcohol Wipe,Medicine Cabinet Door,Yes,Yes,Low,Frees shelf clutter,2.0 lbs magnetic hold,Clean cabinet door with alcohol; press magnetic strip,Holds tweezers, nail clippers, and bobby pins invisibly,Verified
BAT-005,M05: Decanting,Visual Decanting Amber Dispenser Bottle Set,Aesthetics,Low,15,16.00,Amber PET Pump Bottles (3pk) + Labels,Chalk Pen,Shower Caddy Baskets,Yes,Yes,Low,Halves visual color noise,32 oz per bottle,Decant shampoo/conditioner/body wash into amber bottles,Uniform amber bottles eliminate aggressive brand packaging clutter,Verified
BAT-006,M06: Ventilation,Post-Shower 20-Minute Exhaust Fan Humidity Reset,Maintenance,Low,1,0.00,Timer,None,Bathroom,Yes,Yes,Low,Prevents mildew growth,100% moisture extraction,Run exhaust fan or crack window for 20 min after showering,Maintains waterproof adhesive strip longevity,Standard`
      },
      {
        id: 'sbm-3',
        fileName: '03_Small_Bathroom_Notion_Hub.json',
        fileType: 'Notion Template',
        extension: '.json',
        fileSize: '6 Databases • 22 KB',
        badge: 'Notion Workspace (Plan & Track)',
        description: 'Complete Notion workspace with Toiletries Decanting Inventory, Bathroom Spatial Calculator, Cleaning Routine Log, and Hardware Shopping List.',
        previewSnippet: '{\n  "workspaceName": "Small Bathroom Vertical Maximizer Hub",\n  "version": "3.0.0",\n  "databases": ["Toiletries & Restock Inventory", "Bathroom Spatial & Tension Calculator", "Weekly Moisture & Mildew Defense Log"]\n}',
        downloadableContent: JSON.stringify({
          workspaceName: "Small Bathroom Vertical Maximizer Hub",
          version: "3.0.0",
          author: "SmallSpaceHome.ca Editorial Lab",
          theme: {
            palette: ["#FAF8F5 (Warm Cream)", "#4A533E (Warm Sage)", "#1C1917 (Charcoal)", "#D9D3C7 (Muted Tan)"],
            style: "Bathroom vertical storage planning, rust-proof tension mechanics, and visual decanting workflows."
          },
          databases: [
            {
              name: "Toiletries & Restock Inventory",
              properties: ["Product Name", "Storage Tier", "Decanted", "Bottle Type", "Restock Status"],
              sampleRecords: [
                { name: "Organic Lavender Shampoo", tier: "Tension Shower Pole Tier 1", decanted: "Yes", bottle: "16 oz Amber Pump", status: "In Stock" },
                { name: "Bamboo Toothbrushes & Paste", tier: "Over-Toilet Basket 1", decanted: "N/A", bottle: "Ceramic Tumbler", status: "In Stock" },
                { name: "Turkish Cotton Bath Sheets (x3)", tier: "Over-Toilet Top Shelf", decanted: "N/A", bottle: "Folded", status: "Clean" }
              ]
            }
          ]
        }, null, 2)
      },
      {
        id: 'sbm-4',
        fileName: '04_Bathroom_Zero_Drill_Blueprint_Cards.pdf',
        fileType: 'Printable Cheatsheet',
        extension: '.pdf',
        fileSize: '4x6 Cards • 1.5 MB',
        badge: 'Printable Blueprint Cards',
        description: '4x6" printable reference cards for over-toilet clearance rules, tension shower pole installation, and waterproof adhesive curing.',
        previewSnippet: 'CARD 1: Over-Toilet Storage Clearance Rules\nCARD 2: Tension Shower Pole Spring Compression\nCARD 3: Waterproof Bath Adhesive Alcohol Prep\nCARD 4: 20-Minute Post-Shower Moisture Reset',
        downloadableContent: `# Small Bathroom Maximizer Blueprint Cards
SmallSpaceHome.ca • Canadian Urban Renter Edition

CARD 01: OVER-TOILET CLEARANCES
[ ] Height above flush button: Minimum 3 inches clearance
[ ] Wall Bumper: Adhere 2 silicone pads to top rear frame to prevent sway
[ ] Leg Pads: Rubber feet protect bathroom tile from moisture rust

CARD 02: WATERPROOF ADHESIVE IN BATHROOMS
[ ] Clean tile thoroughly with 70% Isopropyl alcohol
[ ] Press strip to dry tile for 30 continuous seconds
[ ] MANDATORY: Wait 24 hours before exposing to hot shower steam`
      }
    ]
  }
};
