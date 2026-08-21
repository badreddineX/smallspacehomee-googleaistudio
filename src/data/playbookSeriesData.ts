export interface PlaybookChapter {
  chapterNumber: number;
  title: string;
  subtitle: string;
  readingMinutes: number;
  content: string;
  keyTakeaways: string[];
  checklistItems?: string[];
  tableData?: {
    headers: string[];
    rows: string[][];
  };
}

export interface PlaybookMeta {
  id: string;
  volumeNumber: number;
  volumeLabel: string;
  slug: string;
  fileName: string;
  targetPages: number;
  targetFileSize: string;
  title: string;
  subtitle: string;
  category: string;
  audience: string;
  promise: string;
  accentColor: string; // e.g. '#4A533E'
  priceCad: number;
  perceivedValueCad: number;
  isbn: string;
  copyrightYear: number;
  author: string;
  publisher: string;
  edition: string;
  language: string;
  chapters: PlaybookChapter[];
  pocketCards: {
    title: string;
    description: string;
    bulletPoints: string[];
  }[];
  sourcesAndRetailers: {
    category: string;
    retailer: string;
    recommendedItems: string;
    webUrl: string;
  }[];
}

export const PLAYBOOK_SERIES: PlaybookMeta[] = [
  // =========================================================================
  // VOLUME 01: ZERO-DAMAGE RENTER MOUNTING OPERATING SYSTEM (9-CHAPTER MASTER PLAYBOOK)
  // =========================================================================
  {
    id: 'playbook-01',
    volumeNumber: 1,
    volumeLabel: 'Volume 01 / Core Architectural Operating System',
    slug: 'zero-damage-renter-mounting-playbook',
    fileName: 'Digital_Product_Playbook_01_Zero_Damage_Renter_Mounting_Master_Kit.pdf',
    targetPages: 36,
    targetFileSize: '36 Pages • 4.8 MB',
    title: 'The Zero-Damage Renter Mounting & Secret Wall Hacks Master Playbook',
    subtitle: 'A Decision-Heavy Engineering System to Mount Art, Mirrors, Shelving & Acoustics with 100% Renter Safety, Zero Drywall Tears, and Zero Deposit Loss',
    category: 'Renter Hardware & Wall Systems',
    audience: 'Urban renters living in 350–750 sq ft apartments seeking gallery-quality wall installations and vertical storage with 0% drywall damage.',
    promise: 'Transform bare rental walls into high-end gallery layouts and smart vertical storage using shear physics, 70% IPA protocols, surface decision matrices, and landlord-safe removal methods.',
    accentColor: '#4A533E',
    priceCad: 29,
    perceivedValueCad: 99,
    isbn: 'SSH-DP-2026-VOL01',
    copyrightYear: 2026,
    author: 'SmallSpaceHome Editorial Design & Architecture Research Group',
    publisher: 'SmallSpaceHome Inc. • Toronto Rental Lab',
    edition: 'Second Commercial Master Edition, 2026',
    language: 'en-CA',
    chapters: [
      {
        chapterNumber: 1,
        title: 'Assessing Space Constraints, Substrates & Lease Realities',
        subtitle: 'Substrate diagnosis, provincial lease rights, and establishing your baseline',
        readingMinutes: 5,
        content: `Renting in urban apartments requires balancing personal aesthetic expression with strict lease obligations. Most rental agreements contain generic clauses prohibiting "structural alterations," yet decorating with damage-free systems is a standard tenant right.

SUBSTRATE RECONNAISSANCE:
Before driving any fastener or placing any adhesive, you must identify what lies behind your paint layer:
1. POST-2005 CONDOS: Standard 1/2-inch gypsum drywall over light-gauge metal studs. Finish is usually flat builder-grade latex paint prone to paper tearing if adhesives are pulled outward.
2. PRE-1950 HERITAGE WALK-UPS: Brittle plaster over wooden lath. Plaster shatters easily when struck with standard nails or heavy toggle bolts, creating large crater blowouts.
3. CONCRETE / MASONRY PILLARS: Solid poured concrete with thin skim coats. Expansion anchors require hammer drilling (prohibited in leases); only high-strength adhesive shear systems or mechanical tension poles can be used.

DECISION RULE: Execute the Knuckle-Tap Resonance Test:
• Hollow drum ring $\to$ Modern drywall (stud spacing: 16" on-center).
• High-frequency dense thud $\to$ Plaster & lath or concrete.`,
        keyTakeaways: [
          'Know your lease rights: Tenant decorating is permissible provided walls are restored to move-in condition.',
          'Never assume all walls in a unit are identical: exterior boundary walls often feature masonry or metal furring channels.',
          'Identify paint age: Paint cured for less than 30 days must never receive pressure-sensitive adhesive.'
        ],
        checklistItems: [
          'Perform knuckle-tap resonance test on each target wall zone.',
          'Check target wall for underlying electrical switches and plumbing stacks within 12 inches.',
          'Confirm wall paint is older than 30 days and completely free of bubbling or moisture stains.'
        ]
      },
      {
        chapterNumber: 2,
        title: 'Choosing the Right Hardware & Safe Working Load Protocols',
        subtitle: 'Shear physics, the 40% Safety Buffer, and choosing fasteners by load bracket',
        readingMinutes: 6,
        content: `Commercial packaging claims (e.g. "Holds up to 16 lbs") reflect static vertical shear tests conducted on polished steel in climate-controlled labs. In real rentals, paint elasticity, humidity fluctuations, and micro-vibrations from closing doors significantly reduce holding capacity.

THE 40% SAFETY BUFFER FORMULA:
Always reduce manufacturer weight ratings by 40% to calculate the Conservative Working Load (CWL):
$$\\text{CWL} = \\text{Rated Weight} \\times 0.60$$

HARDWARE SELECTION BRACKETS:
• UNDER 2 LBS (0.9 KG): Small poster strips or micro adhesive hooks. Ideal for unframed prints, cable clips, and calendar boards.
• 2 TO 10 LBS (0.9–4.5 KG): Interlocking hook-and-loop picture hanging strips (4 corner pairs minimum). Distributes shear load evenly across four points.
• 10 TO 25 LBS (4.5–11.3 KG): Drywall claw hangers (micro-pins that leave only pinpricks) or dual-bracket picture rail moulding hooks into top picture rails.
• OVER 25 LBS (11.3+ KG): Strictly floor-grounded leaners with safety anti-tip tether straps into solid wood studs, or floor-to-ceiling tension architectural columns.`,
        keyTakeaways: [
          'Never hang items near the maximum printed package rating; always apply the 40% safety reduction buffer.',
          'Interlocking hook-and-loop strips distribute shear load 300% better than single hook adhesive mounts.',
          'Items over 25 lbs must use gravity-grounded floor furniture or mechanical stud anchors.'
        ],
        checklistItems: [
          'Weigh complete object with glass, frame, and mounting wire on a digital kitchen scale.',
          'Calculate required fastener pairs using: (Total Weight in lbs) / 3.0 = Number of Medium Strip Pairs.',
          'Verify that hardware chosen matches the specific load bracket.'
        ],
        tableData: {
          headers: ['Weight Bracket', 'Recommended Hardware', 'Safe Working Load', 'Risk Level'],
          rows: [
            ['Under 2 lbs', 'Poster / Foam Mini Strips', '1.2 lbs max', 'Very Low (Safe)'],
            ['2 to 10 lbs', 'Interlocking Hook-and-Loop (4 corner pairs)', '6.0 lbs max', 'Low (Verified Safe)'],
            ['10 to 25 lbs', 'Curved Drywall Claw / Hardened Steel Pins', '16.0 lbs max', 'Moderate (Requires Pinprick)'],
            ['Over 25 lbs', 'Floor-Grounded Leaner + Anti-Tip Strap', '100+ lbs capacity', 'Zero Wall Risk']
          ]
        }
      },
      {
        chapterNumber: 3,
        title: 'Safe Wall Mounting Decisions by Surface Type',
        subtitle: 'The comprehensive decision matrix for Drywall, Plaster, Tile, and Hollow Doors',
        readingMinutes: 7,
        content: `Fastener failure is primarily a mismatch between the wall substrate and fastener chemistry. What works flawlessly on smooth drywall will fail catastrophically on bathroom ceramic tile or textured plaster.

SURFACE-BY-SURFACE DECISION RULES:

1. MODERN GYPSUM DRYWALL (FLAT/EGGSHELL LATEX):
• SAFE: Interlocking hook-and-loop strips with 70% IPA solvent prep; curved steel drywall claws.
• CAUTION: Foam double-sided tape (causes paper peeling during removal).
• DANGER / AVOID: Heavy expansion plastic plugs in open drywall cavities without stud backing.

2. HERITAGE PLASTER & LATH:
• SAFE: Hardened steel fine-gauge picture pins (2mm diameter) driven at a 45-degree angle; top moulding picture rail hooks.
• CAUTION: Heavy adhesive strips on brittle unprimed lime wash paint (adhesive can pull away top lime plaster skin).
• DANGER / AVOID: Standard spiral screw anchors (shatters brittle plaster keys behind lath).

3. BATHROOM CERAMIC TILE & GLASS:
• SAFE: Heavy-duty vacuum-lock suction cups with silicone seals; non-porous clear acrylic mounting strips.
• CAUTION: Foam tape (breaks down under steam humidity).
• DANGER / AVOID: Drilling tile grout lines without landlord written permission.

4. HOLLOW-CORE WOOD DOORS (VENEER):
• SAFE: Padded over-door friction hanging brackets; lightweight micro-strips under 1.5 lbs.
• CAUTION: Self-adhesive utility hooks loaded with heavy wet towels.
• DANGER / AVOID: Threaded screw hooks (hollow veneer is only 3mm thick and strips under load).`,
        keyTakeaways: [
          'Never use adhesive foam tape on drywall; it lacks parallel stretch release tabs and tears drywall paper.',
          'Plaster walls require top moulding hooks or 45-degree angled hardened pins to prevent crumbling.',
          'For ceramic tile, non-porous suction levers or removable acrylic gel strips are 100% damage-free.'
        ],
        checklistItems: [
          'Verify surface classification against the Surface Decision Matrix.',
          'Perform a 24-hour test strip adhesion test on an inconspicuous corner of the target wall.',
          'Ensure tiles are completely cleaned of soap scum using alcohol before applying suction hardware.'
        ],
        tableData: {
          headers: ['Surface Type', 'Recommended Option (Safe)', 'Caution Option', 'Dangerous Option (Avoid)'],
          rows: [
            ['Modern Drywall', 'Hook-and-Loop Strips + 70% IPA', 'Single-Point Adhesive Hook', 'Expansion Anchors without Studs'],
            ['Heritage Plaster', 'Hardened Steel Picture Pins (45°)', 'High-Tack Strips on Lime Paint', 'Spiral Drywall Plastic Anchors'],
            ['Ceramic Tile', 'Vacuum Suction Lever + Silicone', 'Removable Clear Gel Tape', 'Drilling Grout / Glaze'],
            ['Hollow Core Door', 'Padded Over-Door Hanging Bracket', 'Lightweight 1-lb Hook', 'Threaded Screw Hooks']
          ]
        }
      },
      {
        chapterNumber: 4,
        title: 'Small-Space Layout Planning, Sightlines & Eye-Level Geometry',
        subtitle: 'The 57" gallery centerline standard and multi-stud weight distribution',
        readingMinutes: 6,
        content: `In compact apartments under 700 sq ft, visual clutter shrinks perceived room volume faster than physical furniture. Proper wall zoning organizes sightlines, creates artificial depth, and prevents chaotic clustering.

THE 57-INCH CENTERLINE GALLERY FORMULA:
Museums and luxury galleries position the vertical center of artwork precisely 57 inches (145 cm) from the finished floor—the average human eye level.
$$\\text{Hook Height} = 57\\text{"} + \\frac{\\text{Frame Height}}{2} - \\text{Drop from Top of Frame to Mounting Point}$$

ZONING BY ROOM FUNCTION:
1. ENTRYWAY LANDING ZONE: Mount drop-shelves and key rails between 42" and 48" from floor. Keep profile under 4" depth to maintain clear 36" corridor flow.
2. STUDIO LIVING & SLEEP DIVISION: Use vertically suspended acoustic divider panels or open shelving tension columns to divide sleeping zones from desk areas without building physical partitions.
3. VERTICAL SIGHTLINE EXTENSION: Hang mirrors opposite primary window openings to bounce natural daylight into dark galley corridors, doubling visual depth.`,
        keyTakeaways: [
          'The 57" centerline formula ensures cohesive, professional gallery alignment across varied frame sizes.',
          'Maintain a minimum 36" clear walkway corridor in tight entryways by keeping wall accessories under 4" depth.',
          'Position mirrors opposite natural light sources to visually double studio apartment square footage.'
        ],
        checklistItems: [
          'Measure from finished floor to mark 57-inch centerline on wall with a faint pencil tick.',
          'Confirm that entryway wall fixtures leave at least 36 inches of clear walking corridor width.',
          'Use painter\'s blue tape to mock up frame dimensions on the wall before placing hardware.'
        ]
      },
      {
        chapterNumber: 5,
        title: 'Zero-Damage Vertical Storage & Heavy Mirror Strutting',
        subtitle: 'Gravity leaners, tension columns, over-door mechanics, and acoustic floating rails',
        readingMinutes: 7,
        content: `When floor space is at a premium, vertical walls are your most valuable storage real estate. However, mounting heavy functional storage requires smart mechanical leverage rather than relying solely on chemical adhesive bonds.

TACTICAL VERTICAL STORAGE BLUEPRINTS:

1. THE FLOOR-GROUNDED HEAVY MIRROR BLUEPRINT:
Full-length mirrors (25–65 lbs) make compact rooms look expansive, but hanging them entirely on drywall is high-risk.
• IMPLEMENTATION: Place mirror base on the floor with anti-skid silicone rubber pads set 8–12 inches out from the wall baseboard. The mirror leans back at a safe 5-degree angle. Gravity supports 92% of the gross weight.
• RETENTION: Secure the top frame using a single non-load-bearing anti-tip tension strap tethered into a stud with a single 2mm pin to prevent accidental tip-over.

2. FLOOR-TO-CEILING TENSION STORAGE COLUMNS:
Adjustable spring-loaded aluminum tension poles (e.g. Telescopic tension columns) wedge securely between floor and ceiling using 80 lbs of compressive spring force with padded rubber feet.
• CAPACITY: Mount floating shelves, shoe racks, or bike hooks directly to the column with zero screws in walls or ceiling.

3. OVER-DOOR CANTILEVER BRACKET UPGRADES:
Transform hollow-core bedroom and closet doors into heavy pantry or shoe organizers:
• Line bracket contact points with 1mm self-adhesive felt tape to prevent door-frame scuffing.
• Secure bottom of organizer basket with hook-and-loop strips to eliminate annoying door-swing clatter.`,
        keyTakeaways: [
          'Gravity-grounded leaning mirror setups transfer 92% of weight to the floor while requiring zero load-bearing drywall anchors.',
          'Tension poles provide structural floor-to-ceiling storage without touching or penetrating drywall.',
          'Always damp over-door organizer brackets with felt tape to protect painted door frames from abrasion.'
        ],
        checklistItems: [
          'Install silicone anti-slip floor pads beneath bases of leaning mirrors or ladder desks.',
          'Apply felt protective padding to all over-door hanging bracket hooks.',
          'Verify tension column compressive lock before loading shelves with heavy books.'
        ]
      },
      {
        chapterNumber: 6,
        title: 'Common Mistakes & The High-Risk Danger Zone',
        subtitle: 'Overhead zones, cantilever lever arms, and chemical cleaner disasters to strictly avoid',
        readingMinutes: 6,
        content: `Understanding what NOT to do is just as important as knowing proper installation techniques. The majority of catastrophic mounting failures stem from three preventable mistakes:

THE THREE FORBIDDEN MOUNTING SINS:

1. THE OVERHEAD HEADBOARD HAZARD:
> DANGER: Never mount heavy glass frames, mirrors, or projecting shelves directly over beds, cribs, or primary sofa seating using adhesive strips alone. Thermal cycling, humidity, and micro-vibrations can cause sudden release during sleep.
• FIX: Use floor-standing headboard units, soft tapestry hangings, or ultra-lightweight foam-core prints under 1 lb.

2. THE CANTILEVER ROTATIONAL TORQUE DISASTER:
Adhesive strips are engineered exclusively for vertical shear (pulling straight down). When you attach a 6-inch deep floating shelf, placing a 3-lb object on the outer edge creates a rotational lever arm that multiplies outward peeling force by 400% at the top edge.
• RULE: Floating display shelves must always utilize bottom diagonal brackets or floor-grounded vertical supports.

3. CLEANING WALLS WITH SILICONE / WAX-BASED SPRAYS:
Using Windex, Lysol wipes, or multi-surface cleaner prior to mounting deposits surfactants and silicone lubricants onto paint pores, guaranteeing bond failure within 72 hours.
• RULE: Strictly use 70% Isopropyl Alcohol USP. No exceptions.`,
        keyTakeaways: [
          'Never place adhesive-mounted heavy frames above sleeping or high-traffic seating zones.',
          'Projecting shelves convert vertical loads into destructive peeling torque; avoid floating adhesive shelves.',
          'Common household cleaners contain lubricating surfactants that ruin adhesive bonding.'
        ],
        checklistItems: [
          'Audit bedroom and sofa zones to ensure zero heavy glass is mounted overhead on adhesive.',
          'Verify that all adhesive-mounted items are flat to the wall with zero forward cantilever tilt.',
          'Confirm that only 70% Isopropyl Alcohol was used for pre-installation surface degreasing.'
        ]
      },
      {
        chapterNumber: 7,
        title: 'Quick-Win High-Impact Upgrades for Tight Rentals',
        subtitle: '15-minute entryway drop zones, 30-minute acoustic arrays, and invisible cable channels',
        readingMinutes: 5,
        content: `Maximize your living comfort and visual serenity in a single afternoon with these three rapid, renter-certified upgrades:

PROJECT 1: THE 15-MINUTE ENTRYWAY DROP ZONE
• PROBLEM: Coats, keys, and incoming mail clutter front entryway floors in small apartments lacking hall closets.
• SOLUTION: Mount a 24-inch solid bamboo key rail with 5 hooks using 3 pairs of Large interlocking strips. Add an ultra-slim 2-inch acrylic letter bin directly below.
• RESULT: Total entryway decluttering taking under 0.5 sq ft of wall space and supporting up to 9 lbs of daily jackets and bags.

PROJECT 2: THE 30-MINUTE ACOUSTIC RETROFIT
• PROBLEM: Thin apartment walls transmit hallway footsteps and neighbor conversation noise.
• SOLUTION: Create a 6-panel hexagonal acoustic felt array on the shared party wall using 3M poster tabs. Felt absorbs high-frequency flutter echoes and doubles as a modern geometric art installation.

PROJECT 3: DAMAGE-FREE CABLE CAMOUFLAGE
• PROBLEM: Black power cables hanging down from wall-mounted TVs or desk monitors create immediate visual chaos.
• SOLUTION: Route cables through paintable half-round cord raceways secured with removable low-tack clear adhesive strips. Paint raceway with leftover wall paint to render cords 100% invisible.`,
        keyTakeaways: [
          'A vertical entryway drop zone eliminates floor clutter in compact foyers in under 15 minutes.',
          'Hexagonal acoustic felt tiles reduce ambient noise transmission while acting as contemporary gallery art.',
          'Low-tack paintable cord raceways eliminate cable clutter without drilling or drywall patching.'
        ],
        checklistItems: [
          'Assemble entryway key rail and weigh intended daily load (keys, bag, coats).',
          'Map out acoustic tile pattern on floor before mounting on shared party wall.',
          'Wipe cord raceway mounting track with 70% IPA and allow 2 minutes to dry.'
        ]
      },
      {
        chapterNumber: 8,
        title: 'Troubleshooting, Environmental Audits & 24-Hour Maintenance',
        subtitle: 'Thermal audits, humidity peeling prevention, and the 60-minute cure milestone',
        readingMinutes: 5,
        content: `Environmental shifts in rental apartments—such as winter radiator cycling or high-humidity summer days—affect adhesive flexibility. Conducting seasonal health audits ensures your wall systems remain 100% secure year-round.

THE MANDATORY 60-MINUTE COLD-FLOW CURE:
Pressure-sensitive viscoelastic acrylic adhesives require at least 60 minutes under zero load to flow microscopically into paint pores and achieve maximum chemical bond strength.
> RULE: Always disengage frame from wall strips after initial alignment, press wall strips firmly for 30 seconds each, and wait a full 60 minutes before re-attaching artwork.

SEASONAL THERMAL & HUMIDITY AUDITS:
• WINTER EXTERIOR WALL AUDIT: Exterior concrete walls in Canadian winters can drop below 10°C (50°F). Adhesives become glassy and brittle below 12°C. Ensure indoor temperature is maintained at 18°C+ during initial installation.
• SUMMER HUMIDITY AUDIT: When indoor relative humidity exceeds 70%, moisture can condense behind heavy frames. Use 1/4-inch silicone rubber bumper pads on bottom frame corners to maintain a breathing air gap between frame and wall.`,
        keyTakeaways: [
          'The 60-minute cure cycle is non-negotiable and increases ultimate shear strength by 300%.',
          'Exterior walls in cold climates must be thermally stabilized before applying adhesive fasteners.',
          'Bottom bumper pads provide air circulation and prevent moisture buildup behind frames.'
        ],
        checklistItems: [
          'Set a 60-minute timer after applying wall strips before hanging artwork.',
          'Verify ambient room temperature is at least 18°C (65°F) during installation.',
          'Attach soft silicone bumper pads to bottom corners of all framed art.'
        ]
      },
      {
        chapterNumber: 9,
        title: 'Move-Out Protocol, Thermal Floss Release & Deposit Defense',
        subtitle: 'The Hair Dryer + Dental Floss sawing method, micro-spackle restoration, and landlord letters',
        readingMinutes: 6,
        content: `The ultimate test of any renter mounting system is the move-out inspection. By following our laboratory-tested thermal release protocol, you can remove dozens of wall fixtures in under an hour with zero paint peel, zero drywall blowout, and zero deposit deductions.

THE 5-STEP THERMAL FLOSS RELEASE PROTOCOL:
If an adhesive tab breaks, or if the strip has been on the wall for multiple years:
1. NEVER PRY WITH A METAL TOOL: Putty knives and screwdrivers crush drywall gypsum.
2. THERMAL SOFTENING: Set a hair dryer to Medium heat. Direct warm air onto the plastic mount for 45–60 seconds from 4 inches away to soften the acrylic polymer matrix.
3. DENTAL FLOSS SAWING: Take an 18-inch length of unflavored dental floss or nylon fishing line. Wrap ends around your fingers, slide floss behind the top of the bracket, and gently saw downward in a steady slicing motion.
4. RESIDUE ROLLING: Roll away any remaining adhesive rubber film using firm thumb friction.
5. SOLVENT FINISH: Wipe the spot with a drop of 70% IPA to remove microscopic residue.

TENANT DEPOSIT DEFENSE SCRIPT:
When scheduling move-out walkthroughs with landlords, provide a signed pre-inspection checklist confirming all walls have been inspected, restored to baseline condition, and documented with high-resolution daylight photographs.`,
        keyTakeaways: [
          'Never pull adhesive tabs outward at 90 degrees; always stretch parallel to the wall surface.',
          'The Hair Dryer + Dental Floss method safely removes stuck brackets without tearing drywall paper.',
          'Document wall restoration with dated daylight photographs before your final landlord walkthrough.'
        ],
        checklistItems: [
          'Keep hair dryer and unflavored dental floss in your move-out tool kit.',
          'Inspect all wall surfaces in bright daylight 48 hours prior to move-out inspection.',
          'Take wide-angle photographs of all walls for your move-out inspection record.'
        ],
        tableData: {
          headers: ['Removal Scenario', 'Correct Technique', 'Tool Required', 'Estimated Time'],
          rows: [
            ['Intact Pull Tab', 'Parallel downward stretch (0° angle)', 'Hands Only', '15 Seconds'],
            ['Broken / Snapped Tab', 'Thermal Hair Dryer + Dental Floss sawing', 'Hair Dryer + Floss', '90 Seconds'],
            ['Adhesive Residue Dot', 'Friction thumb roll + 70% IPA wipe', '70% IPA + Microfiber', '30 Seconds'],
            ['Micro Pinhole Fix', 'Lightweight spackle dab + damp sponge wipe', 'Fast \'N Final Spackle', '60 Seconds']
          ]
        }
      }
    ],
    pocketCards: [
      {
        title: 'Pre-Mounting 4-Step Decision Card (4x6")',
        description: 'Keep this card beside your digital scale and tool kit for every wall project.',
        bulletPoints: [
          '1. WEIGH: Record exact gross tare weight with glass and hardware on digital kitchen scale.',
          '2. DIAGNOSE: Knuckle-tap wall to verify modern drywall vs heritage plaster vs concrete.',
          '3. SOLVENT PREP: Degrease target area with 70% Isopropyl Alcohol USP; wait 2 mins.',
          '4. 60-MIN CURE: Disengage frame, press wall strips for 30s each, and wait 1 hour before hanging.'
        ]
      },
      {
        title: 'Emergency Removal & Floss Release Card (4x6")',
        description: 'Instant reference for damage-free adhesive removal and broken tab recovery.',
        bulletPoints: [
          '1. STANDARD RELEASE: Pull tab strictly parallel to wall (0 degrees down). Never pull out.',
          '2. BROKEN TAB FIX: Warm bracket with hair dryer on Medium heat for 45–60 seconds.',
          '3. FLOSS SAWING: Slide unflavored dental floss behind bracket and saw downward.',
          '4. RESIDUE CLEANUP: Roll away remaining adhesive film with thumb friction and 70% IPA.'
        ]
      },
      {
        title: 'Surface Safety Decision Reference Card (4x6")',
        description: 'Quick guide to matching fasteners with wall materials to prevent failures.',
        bulletPoints: [
          '• DRYWALL: Interlocking hook-and-loop strips (<10 lbs) or curved steel drywall claws.',
          '• PLASTER: 45° angled hardened steel picture pins (2mm) or top moulding rail hooks.',
          '• TILE / GLASS: Vacuum suction lever cups or non-porous clear acrylic gel strips.',
          '• AVOID: Never use foam tape on drywall; never hang heavy glass above beds on adhesive.'
        ]
      }
    ],
    sourcesAndRetailers: [
      {
        category: 'Adhesive Strips & Dual Lock Fasteners',
        retailer: 'Home Depot Canada / Canadian Tire',
        recommendedItems: '3M Command Picture Hanging Strips (Medium & Large), 3M Claw Drywall Picture Hanger (15lb & 25lb)',
        webUrl: 'https://homedepot.ca'
      },
      {
        category: 'Precision Hardware & Picture Rail Hooks',
        retailer: 'Lee Valley Tools (Toronto / Vancouver / Online)',
        recommendedItems: 'Solid Brass Moulding Hooks for Heritage Plaster Rails, Heavy-Duty Monofilament Hanging Wire',
        webUrl: 'https://leevalley.com'
      },
      {
        category: 'Solvents, Surface Prep & Spackle Repair',
        retailer: 'Rexall / Shoppers Drug Mart / Home Hardware',
        recommendedItems: '70% Isopropyl Alcohol USP, DAP Fast \'N Final Lightweight Spackling, Microfiber Cloths',
        webUrl: 'https://homehardware.ca'
      },
      {
        category: 'Tension Columns & Modular Storage',
        retailer: 'IKEA Canada / Structube',
        recommendedItems: 'ELVARLI Floor-to-Ceiling Aluminum Tension Post System, Anti-Skid Rubber Furniture Floor Pads',
        webUrl: 'https://ikea.ca'
      }
    ]
  },

  // =========================================================================
  // VOLUME 02: MICRO-KITCHEN STORAGE MAXIMA PLAYBOOK
  // =========================================================================
  {
    id: 'playbook-02',
    volumeNumber: 2,
    volumeLabel: 'Volume 02 / Culinary Space Engineering',
    slug: 'micro-kitchen-storage-maxima-playbook',
    fileName: 'Digital_Product_Playbook_02_Micro_Kitchen_Storage_Maxima_Playbook.pdf',
    targetPages: 32,
    targetFileSize: '32 Pages • 4.3 MB',
    title: 'The Micro-Kitchen Storage Maxima & Galley Optimization Playbook',
    subtitle: 'How to Double Vertical Prep Capacity, Master Zero-Drill Rail Systems, and Eliminate Counter Clutter in 45 Sq Ft',
    category: 'Small Space Kitchen Architecture',
    audience: 'Apartment renters dealing with 40–70 sq ft galley kitchens, zero pantry space, and crowded countertops.',
    promise: 'Double usable prep surface area, unlock 14 cubic feet of vertical backsplash storage, and keep counters 100% clutter-free.',
    accentColor: '#4A533E',
    priceCad: 29,
    perceivedValueCad: 95,
    isbn: 'SSH-DP-2026-VOL02',
    copyrightYear: 2026,
    author: 'SmallSpaceHome Editorial Design & Architecture Research Group',
    publisher: 'SmallSpaceHome Inc. • Toronto Rental Lab',
    edition: 'Second Commercial Master Edition, 2026',
    language: 'en-CA',
    chapters: [
      {
        chapterNumber: 1,
        title: 'The Anatomy of a 45 Sq Ft Canadian Condo Kitchen',
        subtitle: 'Spatial constraints, appliance bulk, and the clear-countertop imperative',
        readingMinutes: 5,
        content: `Most urban apartments in Toronto and Vancouver offer less than 4 running feet of continuous countertop space. Standard appliances—air fryers, espresso machines, electric kettles, and knife blocks—quickly consume 80% of available prep surfaces, turning meal prep into a frustrating juggling act.

THE FUNDAMENTAL LAW OF MICRO-KITCHEN ENGINEERING:
> RULE: Vertical airspace is primary storage; countertops are strictly for active food preparation.

By shifting dry goods, cutlery, spices, and cleaning supplies into vertical airspace and underutilized cabinet depths, you reclaim full culinary freedom.`,
        keyTakeaways: [
          'Reclaim 80% of counter space by elevating daily tools onto vertical rail and magnetic systems.',
          'Never store static items on countertops that can live on vertical backsplash rails or inside upper cabinet doors.',
          'Create distinct Culinary Zones: Prep Zone, Wash Zone, Cook Zone, and Coffee Station.'
        ],
        checklistItems: [
          'Measure total square footage and linear countertop width in inches.',
          'Perform a 24-hour appliance usage audit to identify daily vs occasional tools.',
          'Clear all non-essential items off countertops onto a staging table for re-zoning.'
        ],
        tableData: {
          headers: ['Kitchen Zone', 'Target Footprint', 'Permitted Items', 'Prohibited Counter Clutter'],
          rows: [
            ['Active Prep Zone', '24" x 36" continuous', 'End-grain cutting board, chef knife', 'Toasters, blenders, mail, oils'],
            ['Cooking Zone', 'Beside stovetop', 'Salt cellar, silicone spatula on rail', 'Spice racks, bulky utensil crocks'],
            ['Clean-Up Zone', 'Sink perimeter', 'Hanging dish wand, colander bridge', 'Drying mats with stagnant puddles'],
            ['Coffee / Beverage', 'Dedicated 12" corner', 'Compact espresso machine only', 'Syrup bottles, mugs on counter']
          ]
        }
      },
      {
        chapterNumber: 2,
        title: 'Tension-Mounted Backsplash Rail Architecture',
        subtitle: 'Zero-drill suspension rails for utensils, spices, and cutting boards',
        readingMinutes: 6,
        content: `Rental kitchens rarely allow drilling into ceramic tile backsplashes. The solution is vertical tension-rod suspension systems and heavy-duty silicone suction rail hardware.

> RULE: Never drill tile grout lines in rental units. Use vertical compression tension rails spanning from quartz/laminate countertop to upper cabinet underside.

TENSION RAIL SETUP:
1. Clean counter and cabinet underside with 70% IPA to degrease cooking residue.
2. Install twin vertical tension poles with non-slip silicone footpads.
3. Clamp horizontal stainless steel utility rails across the poles.
4. Hang S-hooks for spatulas, magnetic spice canisters, and hanging paper towel dispensers.

LOAD CAPACITY: A properly installed tension rail system easily supports 15–20 lbs of culinary tools while preserving 100% of countertop depth beneath it.`,
        keyTakeaways: [
          'Tension rails span from countertop to upper cabinet soffits with zero drilling and zero adhesive residue.',
          'Suspends spatulas, spices, paper towels, and knives above the counter, freeing 100% of prep surface.',
          'Silicone footpads prevent scratching laminate or quartz countertops.'
        ],
        checklistItems: [
          'Measure vertical clearance between counter and upper cabinet underside (typical: 18–20 inches).',
          'Assemble stainless steel tension rail with silicone protective footpads.',
          'Distribute heavy items (olive oil, wooden boards) toward the outer upright poles.'
        ]
      },
      {
        chapterNumber: 3,
        title: 'Under-Shelf Wire Baskets & Cabinet Volumetric Mastery',
        subtitle: 'Eliminating the dead 8 inches of air at the top of every kitchen shelf',
        readingMinutes: 5,
        content: `Standard rental kitchen cabinets feature fixed shelves with 12 to 14 inches of vertical clearance. Standard stacked plates or mugs only occupy 4 to 6 inches, leaving 50% of your cabinet volume completely wasted as empty air.

THE VOLUMETRIC MULTIPLIER:
1. UNDER-SHELF SLIDE-IN WIRE BASKETS: Slide powder-coated steel baskets over existing cabinet shelves to create a secondary mezzanine tier for flat items (cutting boards, wraps, napkins, tea boxes).
2. TIERED BAMBOO RISERS: Place 3-tier stepped risers inside spice and can cabinets so every label is instantly visible without moving items in front.
3. EXPANDABLE SHELF RISERS: Double plate capacity by stacking bowls and smaller side plates on top of elevated risers while dinner plates rest underneath.`,
        keyTakeaways: [
          'Under-shelf baskets reclaim the empty top 6 inches of cabinet space without any tools or installation.',
          'Tiered risers provide 100% label visibility for canned goods and spices.',
          'Double plate storage capacity per shelf using heavy-duty expandable metal shelf risers.'
        ],
        checklistItems: [
          'Measure shelf thickness and vertical headspace inside all upper cabinets.',
          'Install slide-on under-shelf baskets for wraps, parchment paper, and cutting boards.',
          'Arrange spice jars on 3-tier stepped bamboo risers.'
        ],
        tableData: {
          headers: ['Cabinet Tier', 'Target Vertical Space', 'Recommended Storage Hack', 'Capacity Gain'],
          rows: [
            ['Upper Shelf Top', 'Top 6–8" dead airspace', 'Slide-on powder-coated wire basket', '+100% usable mezzanine'],
            ['Middle Plate Tier', 'Bottom 6" shelf base', 'Expandable chrome wire shelf riser', '+100% stacked plate capacity'],
            ['Lower Spice Zone', 'Eye-level 10" shelf', '3-tier stepped bamboo stadium riser', '3x label visibility'],
            ['Under-Sink Basin', 'Around plumbing trap', 'Expandable 2-tier sliding drawer caddy', '+14 cubic feet volume']
          ]
        }
      },
      {
        chapterNumber: 4,
        title: 'Over-Sink Solid Wood Workstation Extenders',
        subtitle: 'Converting your kitchen sink basin into an extra 2.5 square feet of prep cutting area',
        readingMinutes: 4,
        content: `In a micro-kitchen, the sink basin represents 30% of total countertop footprint. When not actively washing dishes, an open sink is dead space.

THE WORKSTATION EXTENDER SYSTEM:
Invest in a heavy-duty end-grain cutting board designed with built-in rubber edge tracks that sits securely across the rim of your sink basin.
- CHOP & SLIDE: Chop vegetables directly over the sink; slide scraps into a collapsible colander suspended in the basin below.
- FLUID DRAINAGE: Liquids drain directly into the sink, eliminating countertop sticky mess.
- STABILITY: Ensure the cutting board has food-safe silicone grip pads on the underside to prevent slipping during knife work.`,
        keyTakeaways: [
          'An over-sink cutting board instantly adds 2.5 sq ft of solid prep surface in micro-apartments.',
          'Integrated collapsible colanders allow instant washing and food prep in one footprint.',
          'Always use non-slip silicone base feet for safety during heavy chopping.'
        ],
        checklistItems: [
          'Measure internal width and lip depth of kitchen sink basin.',
          'Select an over-sink cutting board with silicone anti-slip bumpers.',
          'Oil cutting board monthly with food-grade mineral oil for longevity.'
        ]
      },
      {
        chapterNumber: 5,
        title: 'Magnetic Refrigerator Side-Wall Pantry Systems',
        subtitle: 'Transforming 12 square feet of dead fridge metal into high-density storage',
        readingMinutes: 5,
        content: `The exposed metal side wall of your refrigerator is an unutilized structural steel surface. In most rental layouts, this side faces the main kitchen corridor or prep counter.

THE MAGNETIC ARSENAL:
1. HEAVY-DUTY NEODYMIUM SPICE RACKS: Magnetic powder-coated steel baskets with 8-lb holding power each. Store 12 olive oils, vinegars, and daily seasonings within arm's reach of the stove.
2. MAGNETIC PAPER TOWEL ROLLER & FOIL DISPENSER: Free up wall and counter space completely.
3. MAGNETIC KNIFE STRIP (WITH PROTECTIVE VINYL): Mount chef's knives safely on the fridge side away from counter edges. Ensure the magnetic strip has a scratch-resistant silicone or wood face to prevent marking fridge paint.`,
        keyTakeaways: [
          'High-strength neodymium magnetic shelves turn refrigerator side walls into vertical spice pantries.',
          'Each magnetic shelf holds up to 8 lbs of oils, sauces, and jars securely.',
          'Protects rental appliance finish with rubberized magnetic backing pads.'
        ],
        checklistItems: [
          'Test refrigerator side wall with a magnet to confirm ferromagnetic steel substrate.',
          'Install 2 to 3 heavy-duty magnetic shelving caddies.',
          'Arrange daily cooking oils and heavy spices on lower magnetic tier for easy access.'
        ]
      },
      {
        chapterNumber: 6,
        title: '15-Minute Daily Kitchen Reset & Eradication of Counter Creep',
        subtitle: 'The behavioral maintenance system that preserves pristine order effortlessly',
        readingMinutes: 4,
        content: `The greatest storage system in the world fails if dirty dishes and random packaging are allowed to accumulate. Implement the 15-Minute Evening Kitchen Reset:

THE 4-STAGE EVENING SHUTDOWN:
1. DISHWASHER / DRYING RACK RUN (5 mins): Clear all utensils and pots into wash cycle; wipe drying mat.
2. CLEAR-SURFACE WIPEDOWN (3 mins): Wipe quartz/laminate countertops with microfiber cloth and warm soapy water.
3. VERTICAL TOOL AUDIT (2 mins): Return all spatulas, spices, and cutting boards to their designated hanging rails.
4. SINK SANITIZE & POLISH (5 mins): Scrub sink basin with baking soda and drop of dish soap; dry stainless steel faucet to prevent limescale water spots.`,
        keyTakeaways: [
          'The 15-minute evening shutdown prevents morning visual friction and clutter buildup.',
          'Wiping sink basins dry nightly prevents hard water limescale stains on rental fixtures.',
          'Adhere strictly to the "Zero Items Left on Counter Overnight" rule.'
        ],
        checklistItems: [
          'Run or empty dishwasher/drying rack before 10:00 PM.',
          'Wipe prep counter surfaces completely clean and dry.',
          'Return all spices to magnetic fridge racks or upper shelf risers.'
        ]
      }
    ],
    pocketCards: [
      {
        title: 'Micro-Kitchen Clear Counter Rule (4x6")',
        description: 'Keep inside upper cabinet door as daily operational guideline.',
        bulletPoints: [
          'Countertops are for ACTIVE PREP only—never static storage.',
          'Elevate daily tools onto tension backsplash rails.',
          'Utilize magnetic fridge side wall for heavy oils & spices.',
          'Execute 15-minute evening reset: Zero items left on counters.'
        ]
      },
      {
        title: 'Cabinet Headspace Optimization Card (4x6")',
        description: 'Cabinet shelf spacing and divider blueprint.',
        bulletPoints: [
          'Slide under-shelf wire baskets onto shelves with >10" clearance.',
          'Use 3-tier bamboo stepped risers for canned goods & spices.',
          'Store baking sheets & cutting boards vertically with wire dividers.',
          'Group small items in clear pull-out acrylic organizer bins.'
        ]
      }
    ],
    sourcesAndRetailers: [
      {
        category: 'Tension Rails & Cabinet Organizers',
        retailer: 'IKEA Canada / Amazon Canada',
        recommendedItems: 'IKEA SUNNERSTA Rail System, IKEA VARIERA Shelf Inserts, Heavy-Duty Magnetic Fridge Shelves',
        webUrl: 'https://ikea.ca'
      },
      {
        category: 'Specialty Kitchen Organizers & Woodware',
        retailer: 'Lee Valley Tools / Canadian Tire',
        recommendedItems: 'Over-Sink End-Grain Cutting Boards, Neodymium Magnetic Tool Bars, Expandable Bamboo Risers',
        webUrl: 'https://leevalley.com'
      }
    ]
  },

  // =========================================================================
  // VOLUME 03: CLOSET STORAGE QUADRUPLER SYSTEM
  // =========================================================================
  {
    id: 'playbook-03',
    volumeNumber: 3,
    volumeLabel: 'Volume 03 / High-Density Wardrobe Architecture',
    slug: 'closet-storage-quadrupler-playbook',
    fileName: 'Digital_Product_Playbook_03_Closet_Storage_Quadrupler_System.pdf',
    targetPages: 30,
    targetFileSize: '30 Pages • 4.1 MB',
    title: 'The Small Closet Storage Quadrupler & Vertical Space Mastery Playbook',
    subtitle: 'How to Transform a Standard 4-Foot Single-Rod Rental Closet into a 4-Tier High-Density Wardrobe',
    category: 'Wardrobe & Vertical Storage Systems',
    audience: 'Renters with narrow, single-rod sliding or bifold closets who struggle with seasonal garment overflow.',
    promise: 'Quadruple hanging and folded storage capacity without drilling holes or modifying rental closet shelving.',
    accentColor: '#4A533E',
    priceCad: 29,
    perceivedValueCad: 95,
    isbn: 'SSH-DP-2026-VOL03',
    copyrightYear: 2026,
    author: 'SmallSpaceHome Editorial Design & Architecture Research Group',
    publisher: 'SmallSpaceHome Inc. • Toronto Rental Lab',
    edition: 'Second Commercial Master Edition, 2026',
    language: 'en-CA',
    chapters: [
      {
        chapterNumber: 1,
        title: 'The Anatomy of Single-Rod Closet Inefficiency',
        subtitle: 'Why standard rental builder closets waste 65% of usable vertical volume',
        readingMinutes: 5,
        content: `Standard North American rental apartments feature a basic closet: a single wooden or metal hanging rod mounted at 66 inches from the floor, topped by a single 12-inch wire or MDF shelf.

When shirts and jackets are hung from this rod, they drop approximately 34 inches, leaving a massive 32-inch void of dead air between the garment hem and the closet floor. Meanwhile, the shelf above is overwhelmed by chaotic piles of sweaters that tip over.

> RULE: By dividing a single 66-inch vertical span into four distinct architectural tiers, you multiply usable wardrobe capacity by 400% with zero permanent modifications.`,
        keyTakeaways: [
          'Single-rod closets waste 32 vertical inches below shirts and jackets.',
          'Dividing the closet into 4 vertical tiers creates structured zones for tops, bottoms, shoes, and luggage.',
          'Standardize hangers to ultra-slim velvet profiles to immediately reclaim 50% of rod width.'
        ],
        checklistItems: [
          'Measure closet interior: Width, Depth, and Ceiling Height in inches.',
          'Count total number of hanging garments and folded items.',
          'Identify dead airspace zones above shelf and beneath short garments.'
        ],
        tableData: {
          headers: ['Closet Tier', 'Vertical Height Band', 'Recommended Hardware', 'Optimized Garments'],
          rows: [
            ['Tier 1: Top Mezzanine', '72" to Ceiling (96")', 'Clear acrylic dividers + fabric bins', 'Bulky winter knits, travel duffels'],
            ['Tier 2: Upper Rod', '40" to 70"', 'Slim velvet hangers (0.18" thick)', 'Shirts, blouses, blazers, short jackets'],
            ['Tier 3: Suspended Rod', '16" to 38"', 'Adjustable double-hang closet bar', 'Folded trousers, denim, skirts'],
            ['Tier 4: Floor Base', '0" to 14"', 'Stackable drop-front clear shoe boxes', 'Footwear, gym sneakers, storage bins']
          ]
        }
      },
      {
        chapterNumber: 2,
        title: 'The 4-Tier Vertical Division Matrix',
        subtitle: 'Zoning ceiling-to-floor geometry for maximum capacity and accessibility',
        readingMinutes: 6,
        content: `Transform your closet into a high-efficiency system using the 4-Tier Matrix:

- TIER 1: THE ARCHIVE MEZZANINE (Top Shelf to Ceiling, 72"–96"):
  Store off-season clothing in clear, zippered fabric storage bins. Add vertical clear acrylic shelf dividers to keep bulky winter knitwear stacked straight without tipping.
- TIER 2: PRIMARY HIGH-HANGING ZONE (Rod to 38"):
  Hang button-down shirts, blazers, and lightweight blouses using uniform ultra-slim non-slip velvet hangers.
- TIER 3: SECONDARY SUSPENDED LOWER-HANGING ZONE (38" to 14"):
  Install a suspended double-hang adjustable closet rod hooked directly over the top rod. Hang folded pants, trousers, and skirts in this lower tier.
- TIER 4: THE FLOOR MODULAR VAULT (0" to 14"):
  Place stackable front-drop shoe boxes or a 3-drawer fabric modular chest for underwear, socks, and gym gear.`,
        keyTakeaways: [
          'Tier 1 (Top Shelf): Seasonal items in dust-sealed clear bins + acrylic dividers.',
          'Tier 2 (Upper Rod): Shirts & blazers on slim velvet hangers.',
          'Tier 3 (Suspended Rod): Pants and skirts on secondary lower bar.',
          'Tier 4 (Floor Base): Clear drop-front stackable shoe boxes.'
        ],
        checklistItems: [
          'Install suspended lower double-hang rod ($16 CAD).',
          'Clip clear acrylic dividers onto top shelf ($14 CAD for 4-pack).',
          'Arrange stackable drop-front shoe boxes across closet floor.'
        ]
      },
      {
        chapterNumber: 3,
        title: 'Ultra-Slim Velvet Hanger Aerodynamics & Density Gains',
        subtitle: 'Why eliminating chunky wooden and plastic tubular hangers doubles closet rod capacity',
        readingMinutes: 4,
        content: `Standard wooden coat hangers measure 0.6 inches thick; mismatched plastic tubular hangers measure 0.45 inches and have slippery profiles that cause garments to sag.

THE UNIFORM VELVET UPGRADE:
Replacing mismatched hangers with 0.18-inch ultra-slim velvet hangers delivers three instant transformations:
1. CAPACITY MULTIPLIER: Reclaims 55% of physical rod width immediately. A 48-inch rod that previously held 35 wooden hangers now comfortably holds 80 velvet-hung garments.
2. VISUAL CALM: Eliminates visual noise; all garment collars rest at the exact same horizontal sightline.
3. SHOULDER PRESERVATION: Velvet flocking prevents silk, linen, and wide-neck tops from slipping onto the floor.`,
        keyTakeaways: [
          'Uniform 0.18-inch velvet hangers more than double physical garment capacity on the same rod.',
          'Matching hanger heights creates a clean, serene, boutique-level visual aesthetic.',
          'Non-slip velvet surface prevents delicate fabrics from sliding into closet corners.'
        ],
        checklistItems: [
          'Purchase 50-pack of black or ivory slim velvet hangers ($24 CAD).',
          'Donate or recycle old bulky plastic and wire dry-cleaner hangers.',
          'Group garments by category (blazers -> shirts -> trousers) and color gradient.'
        ],
        tableData: {
          headers: ['Hanger Type', 'Thickness (Inches)', 'Garments per 48" Rod', 'Visual & Fabric Impact'],
          rows: [
            ['Wooden Suit Hanger', '0.60 inches', '35 garments', 'Bulky, high friction, steals 60% rod width'],
            ['Tubular Plastic Hanger', '0.45 inches', '48 garments', 'Slippery, drooping shoulders, visual clutter'],
            ['Wire Dry-Cleaner Hanger', '0.10 inches', '65 garments (Distorts)', 'Ripples fabric shoulders, tangles easily'],
            ['Ultra-Slim Velvet Hanger', '0.18 inches', '85 garments (Optimal)', 'Non-slip grip, perfect sightline, 2.4x density']
          ]
        }
      },
      {
        chapterNumber: 4,
        title: 'Over-Door Hanging Storage & Felt-Padded Brackets',
        subtitle: 'Recovering the vertical door face for shoes, accessories, and bags',
        readingMinutes: 5,
        content: `The interior face of a hinged closet door provides 15 square feet of vertical real estate that is almost always neglected.

OVER-DOOR ARCHITECTURE:
Install an over-the-door modular pocket organizer or steel basket grid:
1. PAD THE BRACKETS: Line the inside of over-door metal hooks with 1mm adhesive felt tape to prevent scratching rental door enamel and prevent rattling during door movement.
2. ACCESSORY ZONING: Store belts, scarves, sunglasses, watches, and clutches in designated transparent pockets.
3. WEIGHT LIMIT: Distribute load evenly across both top brackets; keep total weight under 15 lbs to prevent door hinge sagging over time.`,
        keyTakeaways: [
          'Over-door organizers unlock 15 sq ft of vertical storage for shoes, belts, and accessories.',
          'Always line metal door hooks with adhesive felt tape to prevent scratching door paint.',
          'Keep total door weight under 15 lbs to protect door hinge alignment.'
        ],
        checklistItems: [
          'Apply adhesive felt pads to underside of all over-door metal brackets.',
          'Load heavier accessories into lower pockets for stable center of gravity.',
          'Confirm closet door latches smoothly without bracket interference.'
        ]
      },
      {
        chapterNumber: 5,
        title: 'Weekly Reset Routine: The 1-In-1-Out Equilibrium Rule',
        subtitle: 'The behavioral system that prevents closet re-cluttering permanently',
        readingMinutes: 4,
        content: `Spatial equilibrium in a small apartment closet requires strict discipline:

THE EQUILIBRIUM RULES:
1. THE 1-IN-1-OUT MANDATE: Whenever you purchase a new garment, one older item must be donated, sold, or retired. Never add an extra hanger to the rod.
2. THE 10-SECOND SUNDAY RESET: Take 5 minutes every Sunday evening to face all hangers in the same direction, button the top button of all shirts, and return shoes to their drop-front boxes.
3. SEASONAL SWAP AUDIT: At the start of Spring and Autumn, rotate off-season garments into under-bed vacuum compression bags.`,
        keyTakeaways: [
          'Maintain closet equilibrium: One new garment purchased equals one item donated or sold.',
          'The 5-minute Sunday alignment keeps closet sightlines serene and effortless to navigate.',
          'Bi-annual seasonal swaps keep closet density optimized year-round.'
        ],
        checklistItems: [
          'Designate a permanent fabric donation bag in the corner of your closet.',
          'Perform a 5-minute garment straightening reset every Sunday.',
          'Rotate heavy seasonal coats into vacuum storage twice per year.'
        ]
      }
    ],
    pocketCards: [
      {
        title: '4-Tier Closet Architecture Card (4x6")',
        description: 'Visual diagram of the 4-tier vertical closet configuration.',
        bulletPoints: [
          'Tier 1 (Top Shelf): Off-season bins + acrylic dividers.',
          'Tier 2 (Upper Rod): Shirts & blazers on slim velvet hangers.',
          'Tier 3 (Suspended Rod): Pants, skirts, and shorts.',
          'Tier 4 (Floor): Drop-front stackable shoe boxes.'
        ]
      },
      {
        title: 'Closet Maintenance & Reset Card (4x6")',
        description: 'Keep on closet door interior for daily habit reinforcement.',
        bulletPoints: [
          'One in, one out: Never add an extra hanger.',
          'All hanger hooks face inward toward the rear wall.',
          'Button top buttons of all blazers and collared shirts.',
          'Return accessories to over-door felt caddy immediately.'
        ]
      }
    ],
    sourcesAndRetailers: [
      {
        category: 'Hangers & Rod Extenders',
        retailer: 'Amazon Canada / Canadian Tire / Winners',
        recommendedItems: 'Ultra-Slim Velvet Hangers (50-Pack), Adjustable Hanging Closet Double-Rod Bar',
        webUrl: 'https://amazon.ca'
      },
      {
        category: 'Acrylic Dividers & Shoe Boxes',
        retailer: 'IKEA Canada / Solutions - Your Organized Store',
        recommendedItems: 'Clear Acrylic Shelf Dividers, Drop-Front Stackable Clear Shoe Boxes',
        webUrl: 'https://ikea.ca'
      }
    ]
  },

  // =========================================================================
  // VOLUME 04: RENTER SECURITY DEPOSIT DEFENSE VAULT
  // =========================================================================
  {
    id: 'playbook-04',
    volumeNumber: 4,
    volumeLabel: 'Volume 04 / Legal & Move-Out Defense',
    slug: 'renter-security-deposit-defense-playbook',
    fileName: 'Digital_Product_Playbook_04_Renter_Security_Deposit_Defense_Vault.pdf',
    targetPages: 32,
    targetFileSize: '32 Pages • 4.3 MB',
    title: 'The Renter Security Deposit Defense & Move-Out Restoration Playbook',
    subtitle: 'The Ultimate Legal, Photographic, and Zero-Cost Repair Playbook to Guarantee 100% Deposit Return',
    category: 'Tenancy Rights & Damage Mitigation',
    audience: 'Tenants moving into or preparing to vacate rental apartments in Canada and the US who want 100% of their deposit back.',
    promise: 'Document baseline condition with legal precision, execute professional $12 repairs, and defend against unlawful landlord deductions.',
    accentColor: '#4A533E',
    priceCad: 34,
    perceivedValueCad: 119,
    isbn: 'SSH-DP-2026-VOL04',
    copyrightYear: 2026,
    author: 'SmallSpaceHome Editorial Design & Architecture Research Group',
    publisher: 'SmallSpaceHome Inc. • Toronto Rental Lab',
    edition: 'First Digital Commercial Edition, 2026',
    language: 'en-CA',
    chapters: [
      {
        chapterNumber: 1,
        title: 'Canadian Tenancy Realities & Legal Baselines',
        subtitle: 'Understanding the Ontario LTB, BC RTB, and Quebec TAL security deposit laws',
        readingMinutes: 6,
        content: `Residential tenancy laws across Canada provide robust protections for tenants, yet hundreds of thousands of dollars in deposits are improperly withheld each year due to lack of tenant documentation.

PROVINCIAL LEGAL HIGHLIGHTS:
- ONTARIO (Residential Tenancies Act): Landlords are legally prohibited from collecting a "security deposit" or "damage deposit." Only last month's rent deposit is permitted, which cannot be applied toward repairs. Landlords must file a formal application with the Landlord and Tenant Board (LTB) to claim damages.
- BRITISH COLUMBIA (Residential Tenancy Act): Security deposits are capped at 50% of one month's rent. The landlord must return the deposit with interest within 15 days of move-out or file for dispute resolution with the Residential Tenancy Branch (RTB).
- QUEBEC (Tribunal administratif du logement): Landlords cannot require any deposit beyond the first month's rent.

Regardless of your jurisdiction, having timestamped photographic evidence and understanding the legal definition of "Reasonable Wear and Tear" ensures you never pay for pre-existing or minor cosmetic age.`,
        keyTakeaways: [
          'In Ontario, security deposits for damage are illegal; landlords cannot deduct repair fees from last month\'s rent.',
          'In BC, landlords must return deposits within 15 days or file with the RTB; failure to do so doubles the penalty.',
          'Always communicate with property managers in writing (email) to create a permanent legal paper trail.'
        ],
        checklistItems: [
          'Check your provincial tenancy act rules on deposit return timelines.',
          'Save all landlord communication in a dedicated email folder.',
          'Review your initial lease condition report and move-in inspection sheet.'
        ]
      },
      {
        chapterNumber: 2,
        title: 'The 100-Point Move-In Photographic Baseline Audit',
        subtitle: 'How to capture timestamped, unalterable proof of pre-existing apartment condition',
        readingMinutes: 7,
        content: `The moment you receive your apartment keys, execute the 100-Point Move-In Audit BEFORE moving a single box or piece of furniture into the space:

THE 4-STEP AUDIT METHOD:
1. CONTINUOUS 4K VIDEO WALKTHROUGH: Record a single continuous 10-minute video walking slowly through every room, panning from ceiling to baseboards, opening all cabinet doors, testing window locks, and running all faucets.
2. CLOSE-UP MACRO PHOTOS: Photograph every pre-existing flaw with a coin or ruler placed next to the damage for scale:
   - Scratches in hardwood or laminate floors
   - Chips in bathroom tile glaze or kitchen laminate countertops
   - Stains on oven interior or refrigerator crisper drawers
   - Loose outlet plates or window screen tears
3. TIMESTAMP & CLOUD BACKUP: Upload all photos immediately to Google Drive, Dropbox, or iCloud. The metadata creates indisputable proof of pre-existing condition.
4. FORMAL TRANSMISSION: Send an email to your landlord within 48 hours containing a link to the photo folder and a polite note: "Hello, for our mutual records, here is the baseline condition documentation captured on move-in day."`,
        keyTakeaways: [
          'Capture a continuous 4K video walkthrough before moving furniture into the apartment.',
          'Photograph every pre-existing scratch with a coin for undeniable physical scale.',
          'Email photo links to landlord within 48 hours to establish a certified legal record.'
        ],
        checklistItems: [
          'Record 10-minute continuous move-in video before placing furniture.',
          'Photograph pre-existing floor scuffs, window screens, and appliance interiors.',
          'Email shared cloud album link to landlord within 48 hours of key handover.'
        ]
      },
      {
        chapterNumber: 3,
        title: 'Normal Wear and Tear vs Unreasonable Tenant Damage',
        subtitle: 'The legal distinction every renter must know to defend against unfair deductions',
        readingMinutes: 6,
        content: `Landlords frequently attempt to charge outgoing tenants for normal wear and tear that is legally the landlord's cost of doing business.

THE LEGAL DISTINCTION MATRIX:
- NORMAL WEAR & TEAR (Landlord Responsibility):
  * Minor pinholes from small picture nails (<2mm)
  * Faded paint from sunlight exposure
  * Minor wear paths in high-traffic carpet or hardwood
  * Loose door handles or cabinet hinges from routine daily use
  * Minor limescale around plumbing fixtures after multi-year tenancy
- UNREASONABLE DAMAGE (Tenant Repair Obligation):
  * Large anchor holes, torn drywall paper from ripped tape, or fist holes
  * Deep gouges in hardwood caused by dragging heavy furniture without felt pads
  * Broken window panes or ripped window screens
  * Heavy pet stains, burned laminate countertops, or uncleaned grease buildup on oven walls`,
        keyTakeaways: [
          'Pinholes from hanging small picture frames are recognized across Canada as normal wear and tear.',
          'Landlords cannot charge for repainting walls if the tenancy lasted more than 2 to 3 years (paint depreciation lifespan).',
          'Damage caused by dragging heavy furniture without felt pads is tenant liability; always pad furniture legs.'
        ],
        checklistItems: [
          'Review the wear-and-tear matrix before beginning move-out repairs.',
          'Verify how long you have lived in the unit (paint life expectancy is typically 3–5 years).',
          'Focus repair efforts on tenant-caused holes and scuffs only.'
        ],
        tableData: {
          headers: ['Condition Category', 'Landlord Responsibility (Wear & Tear)', 'Tenant Responsibility (Damage)'],
          rows: [
            ['Wall Fasteners', 'Tiny pinholes from picture nails (<2mm)', 'Large anchor blowouts (>5mm) or torn drywall'],
            ['Floor Condition', 'Light surface scuffing in high-traffic halls', 'Deep gouges from dragging metal furniture'],
            ['Paint & Finishes', 'Sunlight fading and mild discoloration', 'Unapproved neon accent wall paint or drawings'],
            ['Plumbing & Grout', 'Aging silicone caulk and mineral buildup', 'Cracked porcelain sink or broken faucet handles']
          ]
        }
      },
      {
        chapterNumber: 4,
        title: 'The $12 Emergency Move-Out Repair Kit & Execution',
        subtitle: 'Spackle, color-match touch-ups, wood scratch repair, and melamine foam chemistry',
        readingMinutes: 8,
        content: `You can restore 95% of common rental apartment blemishes in under two hours with four inexpensive supplies costing under $25 CAD total:

TOOL 1: LIGHTWEIGHT VINYL SPACKLING & DAMP CLOTH ($6 CAD)
- Fill all nail holes with a pea-sized dab of DAP Fast 'N Final spackle. Wipe flush with a damp microfiber cloth immediately. Zero sanding dust, zero mess, dries in 15 minutes.

TOOL 2: WALNUT KERNEL & WAX TOUCH-UP STICKS FOR HARDWOOD ($4 CAD)
- For light scratches on hardwood or laminate: Rub a raw walnut kernel firmly across the scratch. The natural oils and wood tannins penetrate the wood grain and make surface scratches vanish instantly. For deeper scratches, use a color-matched wax fill stick.

TOOL 3: MELAMINE FOAM ERASERS (MAGIC ERASER) ($5 CAD)
- Dampen with water (never chemicals) and gently wipe dark scuffs off white baseboards, doors, and walls. Caution: Use light pressure to avoid rubbing through matte latex paint sheen.

TOOL 4: 50/50 WHITE VINEGAR & DAWN DEGREASER FOR BATH & KITCHEN ($4 CAD)
- Dissolves limescale on shower glass and cuts baked-on grease in ovens in 15 minutes without toxic fumes.`,
        keyTakeaways: [
          'A $20 repair kit saves $500–$1,500 in unjustified landlord repair deductions.',
          'Raw walnut kernels eliminate 80% of light surface scratches on hardwood floors naturally.',
          'Wiping spackle flush with a damp cloth eliminates the need for messy sanding and repainting.'
        ],
        checklistItems: [
          'Assemble move-out repair kit: Vinyl spackle, walnut kernels, melamine sponges, vinegar.',
          'Fill all wall fastener holes 48 hours prior to move-out inspection.',
          'Wipe all baseboards and door jambs clean with damp melamine sponge.'
        ]
      },
      {
        chapterNumber: 5,
        title: 'The 72-Hour Pre-Inspection Walkthrough & Formal Dispute Letters',
        subtitle: 'How to conduct joint inspections and dispute illegal deductions in writing',
        readingMinutes: 6,
        content: `Never leave move-out inspection to chance. Execute the 72-Hour Protocol:

1. REQUEST WRITTEN PRE-INSPECTION: Request a joint walkthrough with your landlord 72 hours before your final move-out date. This allows you to address any landlord concerns yourself before turning over keys.
2. MOVE-OUT TIMESTAMPED PHOTO SET: After the apartment is completely empty and clean, take a second complete set of 4K photos and a continuous walkthrough video.
3. THE FORMAL DISPUTE LETTER: If a landlord attempts to deduct fees for wear and tear, respond in writing within 48 hours using our standardized legal template:

"Dear [Landlord Name],
Thank you for your move-out summary dated [Date]. I am writing to formally dispute the proposed deduction of $[Amount] for [Item, e.g., wall repainting / pinhole filling]. 
As documented in our move-in baseline photographic archive dated [Move-in Date], and pursuant to Section [X] of the provincial Residential Tenancies Act, minor nail pinholes and normal paint aging constitute reasonable wear and tear for a [X]-year tenancy.
Please remit the full security deposit balance of $[Amount] to [Email / Address] within the statutory [15-day] timeline.
Sincerely, [Tenant Name]"`,
        keyTakeaways: [
          'Conduct pre-inspections 72 hours prior to move-out to fix any issues on your own terms.',
          'Capture a second complete set of 4K photos once the unit is 100% empty and cleaned.',
          'Use formal written dispute templates citing provincial tenancy statutes to stop unfair deductions.'
        ],
        checklistItems: [
          'Schedule pre-inspection walkthrough 3 days before lease termination.',
          'Capture 4K move-out photo archive after moving all furniture.',
          'Send formal deposit return reminder letter with your forwarding address.'
        ]
      }
    ],
    pocketCards: [
      {
        title: 'Move-Out Repair Checklist Card (4x6")',
        description: 'Complete 24 hours before final landlord inspection.',
        bulletPoints: [
          'Fill all pinholes flush with damp-cloth spackle technique.',
          'Erase baseboard scuffs with damp melamine sponge.',
          'Rub floor scratches with raw walnut kernel or wax stick.',
          'Degrease oven and wipe shower glass with vinegar solution.'
        ]
      },
      {
        title: 'Deposit Defense Rights Card (4x6")',
        description: 'Key legal timelines and rights for Ontario, BC, and US tenants.',
        bulletPoints: [
          'Ontario: Damage deposits are illegal; no deductions from last month rent.',
          'BC: 15-day deposit return deadline or landlord owes double.',
          'Normal wear & tear: Pinholes & paint aging are landlord costs.',
          'All communication must be in writing with photo backup.'
        ]
      }
    ],
    sourcesAndRetailers: [
      {
        category: 'Move-Out Repair Hardware',
        retailer: 'Home Depot Canada / Canadian Tire',
        recommendedItems: 'DAP Fast \'N Final Lightweight Spackling, 3M Scotch-Brite Melamine Erasers, Minwax Hardwood Wax Sticks',
        webUrl: 'https://homedepot.ca'
      },
      {
        category: 'Legal Tenancy Information Portals',
        retailer: 'Provincial Tenancy Boards (Public Domain / Government)',
        recommendedItems: 'Ontario Landlord and Tenant Board (tribunalsontario.ca/ltb), BC Residential Tenancy Branch (gov.bc.ca/rto)',
        webUrl: 'https://tribunalsontario.ca'
      }
    ]
  },

  // =========================================================================
  // VOLUME 05: STUDIO ACOUSTIC PRIVACY & SOUNDPROOFING
  // =========================================================================
  {
    id: 'playbook-05',
    volumeNumber: 5,
    volumeLabel: 'Volume 05 / Acoustic Architecture & Quiet Living',
    slug: 'studio-acoustic-privacy-soundproofing-playbook',
    fileName: 'Digital_Product_Playbook_05_Studio_Acoustic_Privacy_Soundproofing.pdf',
    targetPages: 30,
    targetFileSize: '30 Pages • 4.1 MB',
    title: 'The Studio Apartment Acoustic Privacy & Renter Soundproofing Playbook',
    subtitle: 'How to Cut Hallway Footsteps, Elevator Hum, and Neighbor Noise by Up to 14 dB in Thin-Walled Rentals',
    category: 'Acoustic Engineering & Quiet Living',
    audience: 'Urban renters in thin-walled condos or older walk-ups dealing with hallway footsteps, elevator chimes, and neighbor noise.',
    promise: 'Reduce airborne noise transmission by 10–14 dB using zero-damage removable silicone gaskets, acoustic mass, and deflection.',
    accentColor: '#4A533E',
    priceCad: 29,
    perceivedValueCad: 95,
    isbn: 'SSH-DP-2026-VOL05',
    copyrightYear: 2026,
    author: 'SmallSpaceHome Editorial Design & Architecture Research Group',
    publisher: 'SmallSpaceHome Inc. • Toronto Rental Lab',
    edition: 'Second Commercial Master Edition, 2026',
    language: 'en-CA',
    chapters: [
      {
        chapterNumber: 1,
        title: 'Apartment Acoustic Physics: Airborne vs Structure-Borne Noise',
        subtitle: 'Sound transmission class (STC), flanking paths, and why foam pyramids do not work',
        readingMinutes: 5,
        content: `Acoustic privacy in urban apartments requires understanding the difference between AIRBORNE NOISE (conversations, TV audio, barking dogs) and STRUCTURE-BORNE IMPACT NOISE (footsteps, slamming doors, elevator machinery vibrations).

THE FOAM MYTH:
> DANGER / AVOID: Thin, lightweight egg-crate foam pyramids glued to walls DO NOT soundproof a room. Foam absorbs high-frequency flutter echoes inside a room, but because sound waves pass straight through low-density foam, it provides zero sound isolation from your neighbors.

THE TWO PRINCIPLES OF REAL RENTER SOUNDPROOFING:
1. AIRTIGHT AIR-LOCK SEALING: Sound behaves like water. A 1% unsealed air gap around a solid door leaks up to 85% of total sound energy. Sealing air gaps is the single highest-ROI acoustic improvement in an apartment.
2. DENSE PHYSICAL MASS: Stopping sound waves requires heavy, dense material (solid silicone seals, 32oz heavyweight triple-weave curtains, high-density felt rug underlays).`,
        keyTakeaways: [
          'Acoustic foam pyramids do not block sound from neighbors; they only reduce room echo.',
          'An unsealed 1-inch gap under your front door leaks 85% of hallway noise into your studio.',
          'Real soundproofing requires airtight perimeter seals and dense, heavyweight materials.'
        ],
        checklistItems: [
          'Identify whether your primary noise issue is airborne (voices/TV) or structure-borne (footsteps/vibrations).',
          'Inspect front door perimeter for visible light leaks and air gaps.',
          'Check window frame seals for street traffic drafts and noise leaks.'
        ],
        tableData: {
          headers: ['Noise Category', 'Typical Decibel Level', 'Recommended Renter System', 'Ineffective / Wasteful Option'],
          rows: [
            ['Hallway Speech & Steps', '65–75 dB', 'Multi-fin silicone bottom door sweep + D-gasket', 'Eggcrate polyurethane wall foam'],
            ['Street Sirens & Traffic', '70–85 dB', '32oz triple-weave ceiling-to-floor velvet drapes', 'Sheer decorative curtains'],
            ['Floor Impact & Scraping', '55–65 dB', '1/2" dense recycled-fiber felt pad + leg sliders', 'Thin waffle-rubber mesh underlays'],
            ['Neighbor TV Bass Muffle', '45–55 dB', 'Dual-frequency calibrated pink noise sound masker', 'Earplugs alone during active day']
          ]
        }
      },
      {
        chapterNumber: 2,
        title: 'The Front Door Dual-Density Silicone Air-Lock System',
        subtitle: 'The 20-minute, $25 CAD hack that cuts hallway noise by 8 to 12 dB instantly',
        readingMinutes: 6,
        content: `In high-rise apartment buildings, the hallway acts as an acoustic megaphone for elevator chimes, footsteps, and neighbor conversations. Because fire-rated corridor doors require clearance, they typically feature a 3/4-inch to 1-inch open gap at the floor.

THE 3-PART AIR-LOCK BLUEPRINT:
1. MULTI-LAYER SILICONE UNDER-DOOR SWEEP ($14 CAD):
   - Clean the bottom interior edge of the door with 70% IPA.
   - Cut a 39-inch multi-fin flexible silicone draft sweep to match door width.
   - Adhere the sweep so the three flexible silicone fins lightly touch the hardwood floor with zero drag resistance when opening.
2. HOLLOW RUBBER D-PROFILE JAMB WEATHERSTRIPPING ($11 CAD):
   - Adhere soft D-profile hollow rubber foam along the inner door frame stop.
   - When the door latches closed, the rubber compresses tightly, sealing all four perimeter air gaps.
3. RESULT: Cuts speech transmission and corridor footsteps by 8 to 12 dB—turning loud hallway chatter into an imperceptible whisper.`,
        keyTakeaways: [
          'Sealing the front door perimeter cuts hallway sound transmission by 8 to 12 decibels.',
          'Use multi-fin silicone sweeps that glide smoothly over floors without scratching.',
          'Uses low-tack acrylic adhesive that releases cleanly with gentle hair dryer heat at move-out.'
        ],
        checklistItems: [
          'Measure door bottom gap and door width with tape measure.',
          'Clean door surface with 70% IPA prior to installing silicone sweep.',
          'Test door latching to ensure compression seal closes smoothly.'
        ]
      },
      {
        chapterNumber: 3,
        title: 'Window Sound Damping & 32oz Heavy Velvet Drapes',
        subtitle: 'Cutting sirens, streetcar screech, and traffic rumble without modifying glass',
        readingMinutes: 5,
        content: `Apartment windows—especially single or standard double-pane glass—resonate easily with exterior street vibrations.

THE ACOUSTIC DRAPERY PROTOCOL:
1. FABRIC DENSITY SPECIFICATION: Use 32oz to 36oz per yard triple-weave black velvet or high-density thermal acoustic curtains. Lightweight sheer curtains provide zero sound dampening.
2. THE 4-INCH OVERHANG RULE: The curtain rod must extend at least 4 to 6 inches beyond the window frame on both sides, and the curtain hem must graze or pool slightly on the floor. Sound waves wrap around narrow drapery edges.
3. FLOOR-TO-CEILING MOUNTING: Mount high-strength tension rods near the ceiling to trap a pocket of static dead air between the heavy fabric and window pane. This air buffer dissipates acoustic kinetic energy.`,
        keyTakeaways: [
          'Use 32oz+ heavyweight blackout velvet curtains for genuine sound and thermal dampening.',
          'Extend curtain width 4 to 6 inches past window edges to prevent acoustic flanking leaks.',
          'Mount curtains from ceiling to floor to trap an insulating acoustic air pocket.'
        ],
        checklistItems: [
          'Measure window width and add 12 inches for acoustic overlap.',
          'Hang heavy-duty tension rod with silicone non-slip end caps.',
          'Ensure curtain fabric reaches completely to floor level.'
        ]
      },
      {
        chapterNumber: 4,
        title: 'Floor Impact Decoupling & High-Density Felt Rug Underlays',
        subtitle: 'Preventing neighbor complaints from chair scraping and footsteps',
        readingMinutes: 4,
        content: `Laminate and engineered hardwood floors installed in rental buildings transmit impact vibrations directly into the concrete floor slab below.

THE 3-TIER DECOUPLING SYSTEM:
1. HIGH-DENSITY 1/2-INCH FELT RUG PAD: Place a dense recycled-fiber felt pad beneath living room and bedroom area rugs. Felt provides far superior acoustic absorption compared to thin waffle-rubber pads.
2. FELT SLIDER CAPS ON ALL FURNITURE LEGS: Screw or slide heavy felt pads onto dining chairs, desks, and barstools to eliminate chair scraping noise.
3. BED FRAME ISOLATION PADS: Place 1/4-inch dense rubber vibration damping pads under bed frame legs to isolate mechanical motion from floorboards.`,
        keyTakeaways: [
          '1/2-inch dense felt rug pads absorb up to 60% of floor impact vibrations.',
          'Felt pads on all chair legs eliminate 100% of high-frequency floor scraping screech.',
          'Protects rental hardwood from gouging and wear.'
        ],
        checklistItems: [
          'Install dense 1/2-inch felt pads under all major area rugs.',
          'Attach heavy-duty felt protector pads to all chair and table legs.',
          'Place rubber vibration dampers under bed and desk frame feet.'
        ]
      },
      {
        chapterNumber: 5,
        title: 'Ambient Sound Masking: Dual-Frequency Pink Noise Setup',
        subtitle: 'Psychoacoustic sound masking to eliminate sudden neighbor noise startle reflexes',
        readingMinutes: 4,
        content: `Complete silence in an apartment makes even faint neighbor noises (a distant cabinet closing or muffled TV bass) sound startlingly loud.

THE PINK NOISE STANDARD:
Unlike harsh high-frequency White Noise, Pink Noise balances equal energy per octave, mirroring natural sounds like rainfall, wind rustling leaves, or ocean surf.
- PLACEMENT: Position a dedicated non-looping sound masking speaker near the party wall or front entrance—between you and the noise source.
- SOUND MASKING VOLUME: Calibrate volume to 45–50 dB (the volume of a gentle refrigerator hum). This psychoacoustically masks background interruptions, allowing deep, uninterrupted sleep and focus.`,
        keyTakeaways: [
          'Pink noise provides soothing balanced sound masking that neutralizes sudden background spikes.',
          'Position sound masking devices near the door or party wall between you and the noise source.',
          'Keep volume calibrated to 45–50 dB for optimal sleep and concentration.'
        ],
        checklistItems: [
          'Set up a non-looping sound machine or smart speaker with high-quality pink noise audio.',
          'Place speaker 4 to 6 feet from the front door or shared party wall.',
          'Test sound masking volume during peak evening corridor traffic.'
        ]
      }
    ],
    pocketCards: [
      {
        title: 'Front Door Sound-Lock Blueprint (4x6")',
        description: 'Exact specs for 12 dB corridor noise reduction.',
        bulletPoints: [
          'Install 3-fin flexible silicone under-door sweep.',
          'Apply hollow D-profile rubber gasket to inner door jamb.',
          'Check door perimeter with flashlight: Zero light leaks = Zero sound.',
          'Cuts corridor footsteps and elevator noise by 8–12 dB.'
        ]
      },
      {
        title: 'Acoustic Drapes & Decoupling Guide (4x6")',
        description: 'Drapery and floor vibration isolation guidelines.',
        bulletPoints: [
          'Specify 32oz+ heavyweight triple-weave velvet drapes.',
          'Extend curtains 4" past window frame on both sides.',
          'Use 1/2" dense felt rug pads beneath all living area rugs.',
          'Attach heavy felt pads to all chair and table legs.'
        ]
      }
    ],
    sourcesAndRetailers: [
      {
        category: 'Acoustic Seals & Weatherstripping',
        retailer: 'Home Depot Canada / Amazon Canada',
        recommendedItems: 'Suptikes Silicone Under-Door Sweep, Frost King D-Profile Hollow Rubber Gaskets',
        webUrl: 'https://homedepot.ca'
      },
      {
        category: 'Heavyweight Acoustic Drapes & Rug Pads',
        retailer: 'IKEA Canada / Amazon Canada / Wayfair',
        recommendedItems: 'IKEA SANELA Velvet Curtains (Heavy Cotton Velvet), Mohawk Home 1/2" Felt Rug Pad',
        webUrl: 'https://ikea.ca'
      }
    ]
  },

  // =========================================================================
  // VOLUME 06: MICRO-ENTRYWAY & 3-FOOT DROPZONE ARCHITECTURE
  // =========================================================================
  {
    id: 'playbook-06',
    volumeNumber: 6,
    volumeLabel: 'Volume 06 / Threshold Architecture & Dropzones',
    slug: 'micro-entryway-dropzone-playbook',
    fileName: 'Digital_Product_Playbook_06_Micro_Entryway_Dropzone_Architecture.pdf',
    targetPages: 30,
    targetFileSize: '30 Pages • 4.1 MB',
    title: 'The Micro-Entryway & 3-Foot Dropzone Architecture Playbook',
    subtitle: 'How to Build an Ultra-Slim, 4.5-Inch Depth Hallway Transition Hub for Shoes, Keys, Mail, and Wet Coats',
    category: 'Threshold Architecture & Transition Zones',
    audience: 'Renters with zero dedicated foyer space where front doors open directly into living or kitchen zones.',
    promise: 'Eliminate floor shoe piles, lost keys, and winter gear chaos in a narrow 36-inch hallway corridor.',
    accentColor: '#4A533E',
    priceCad: 29,
    perceivedValueCad: 95,
    isbn: 'SSH-DP-2026-VOL06',
    copyrightYear: 2026,
    author: 'SmallSpaceHome Editorial Design & Architecture Research Group',
    publisher: 'SmallSpaceHome Inc. • Toronto Rental Lab',
    edition: 'Second Commercial Master Edition, 2026',
    language: 'en-CA',
    chapters: [
      {
        chapterNumber: 1,
        title: 'The Friction Zone: Why Apartment Hallways Become Cluttered',
        subtitle: 'The behavioral psychology of arrival fatigue and entry bottle-necks',
        readingMinutes: 4,
        content: `In a studio or one-bedroom apartment, the front door often opens directly into a 36-inch wide hallway. When arriving home exhausted, any friction in storing coats, boots, umbrellas, and keys leads to immediate dumping on the floor or kitchen counter.

THE 4.5-INCH DEPTH ARCHITECTURAL RULE:
> RULE: In corridors under 40 inches wide, standard 12-inch console tables or deep shoe racks obstruct walking pathways and create claustrophobic visual bottlenecks. The architectural limit for entryway furniture in small apartments is strictly 4.5 to 6.5 inches of projection.`,
        keyTakeaways: [
          'Entryway clutter is caused by storage friction; systems must require under 2 seconds to use.',
          'Enforce the 4.5-inch maximum depth rule to maintain code-compliant hallway passage.',
          'Never place deep 12-inch floor furniture in corridors narrower than 42 inches.'
        ],
        checklistItems: [
          'Measure hallway corridor width from baseboard to baseboard.',
          'Count daily items entering the home: Pairs of shoes, keys, bags, mail.',
          'Clear floor obstacle clutter to establish clear walking sightlines.'
        ],
        tableData: {
          headers: ['Hallway Width', 'Permitted Furniture Depth', 'Recommended Solution', 'Clearance Status'],
          rows: [
            ['Under 36 Inches', '0 to 4.5 inches max', 'Staggered wall hooks + ultra-slim acrylic bin', 'Clear 32" walking code'],
            ['36 to 42 Inches', '6.5 inches max', 'IKEA TRONES elevated shoe cabinet + wood top', 'Clear 34" walking code'],
            ['42 to 48 Inches', '8.0 inches max', 'Bespoke floating console shelf with key rail', 'Optimal luxury flow'],
            ['Over 48 Inches', '10.0 inches max', 'Freestanding bench with lower wire shoe tier', 'Spacious landing hub']
          ]
        }
      },
      {
        chapterNumber: 2,
        title: 'Floating Wall Shoe Cabinets with Zero Floor Stencil',
        subtitle: 'IKEA Trones and BISSA architectural wall hacks with zero drywall anchor blowouts',
        readingMinutes: 6,
        content: `Vertical tip-out shoe cabinets (such as IKEA TRONES) measure only 6.5 inches deep and store 6 pairs of shoes in vertical gravity slots.

THE RENTER MOUNTING BLUEPRINT:
1. ELEVATE ABOVE BASEBOARDS: Mount shoe cabinets 6 inches above the floor. This preserves continuous floor visibility, which psychologically expands hallway perceived width.
2. LOW-IMPACT FASTENERS: Instead of heavy masonry screws, use 4 corner 3M Claw drywall anchors or adhesive hook-and-loop brackets rated for 25 lbs static shear.
3. SOLID OAK TOPPING SLAB: Adhere a 3/4-inch edge-glued solid oak wood plank across the top of the cabinets with removable nano-tape to transform plastic bins into a luxury architectural console ledge.`,
        keyTakeaways: [
          'Tip-out shoe cabinets consume only 6.5 inches of depth while holding 6 pairs of shoes.',
          'Elevating cabinets off the floor expands perceived room width by 25%.',
          'A solid oak topping plank upgrades standard plastic modules into a custom architectural console.'
        ],
        checklistItems: [
          'Mount tip-out cabinets 6 inches above floor level.',
          'Level console top using mini torpedo level.',
          'Attach solid wood top shelf with removable silicone tape.'
        ]
      },
      {
        chapterNumber: 3,
        title: 'Staggered Vertical Gravity Hooks & Heavy Winter Coat Spacing',
        subtitle: 'Preventing the bulky winter jacket pile-up on single wall rails',
        readingMinutes: 5,
        content: `In Canadian winters, heavy down parkas, scarves, and bags quickly overwhelm standard horizontal coat racks, causing jackets to stick out 14 inches into the hallway.

THE STAGGERED VERTICAL ZIG-ZAG:
Mount heavy-duty matte black cast metal coat hooks in two alternating vertical rows spaced 8 inches apart vertically and 12 inches horizontally.
- UPPER ROW (64" height): For lightweight hats, tote bags, and umbrellas.
- LOWER ROW (48" height): For heavy winter parkas and backpacks.
This vertical staggering prevents jacket bulk from overlapping at the exact same shoulder height, cutting total wall projection by half.`,
        keyTakeaways: [
          'Staggering hook heights prevents heavy parka shoulders from stacking into a bulky lump.',
          'Upper row accommodates hats and bags; lower row handles heavy winter down parkas.',
          'Reduces hallway protrusion from 16 inches down to under 8 inches.'
        ],
        checklistItems: [
          'Mark two horizontal leveling lines at 64" and 48" height.',
          'Space hooks 12 inches apart in alternating zig-zag pattern.',
          'Test coat clearance to ensure hems clear lower shoe console.'
        ]
      },
      {
        chapterNumber: 4,
        title: 'Wet Winter Boot Trays & Diatomaceous Earth Fast-Drying Mats',
        subtitle: 'Eliminating puddle damage, salt stains, and damp odors at your doorstep',
        readingMinutes: 4,
        content: `Standard plastic boot trays trap melted snow water, leading to standing dirty puddles that soak boot bottoms and breed mold.

THE MINERAL ABSORPTION REVOLUTION:
Replace plastic trays with a natural Diatomaceous Earth stone bath mat placed inside a low-profile aluminum rim.
- RAPID EVAPORATION: Diatomaceous earth absorbs water on contact and fully evaporates moisture in under 90 seconds.
- HARDWOOD PROTECTION: Zero water overflows onto rental floorboards.
- COMPACT PROFILE: Measures only 0.4 inches thick, allowing hallway doors to swing freely without catching.`,
        keyTakeaways: [
          'Diatomaceous earth stone mats evaporate melting snow and slush in under 90 seconds.',
          'Ultra-thin 0.4-inch profile allows low-clearance apartment doors to swing freely.',
          'Eliminates muddy standing water and salt stains on rental flooring.'
        ],
        checklistItems: [
          'Position diatomaceous stone mat inside door landing zone.',
          'Verify front door bottom sweeps over mat without rubbing.',
          'Sand lightly with 400-grit sandpaper once per season to restore absorption speed.'
        ]
      }
    ],
    pocketCards: [
      {
        title: 'Micro-Entryway Clearance Blueprint (4x6")',
        description: 'Dimension rules for narrow apartment corridors.',
        bulletPoints: [
          'Maximum furniture projection: 4.5" to 6.5" max.',
          'Elevate shoe storage 6" above floor for optical width.',
          'Stagger coat hooks vertically at 64" and 48" heights.',
          'Use diatomaceous earth mat for rapid snow absorption.'
        ]
      }
    ],
    sourcesAndRetailers: [
      {
        category: 'Slim Shoe Cabinets & Trays',
        retailer: 'IKEA Canada / Amazon Canada',
        recommendedItems: 'IKEA TRONES Shoe Cabinets (Black/White), Diatomaceous Earth Stone Drying Mat',
        webUrl: 'https://ikea.ca'
      }
    ]
  },

  // =========================================================================
  // VOLUME 07: UNDERBED HIDDEN STORAGE VAULT SYSTEM
  // =========================================================================
  {
    id: 'playbook-07',
    volumeNumber: 7,
    volumeLabel: 'Volume 07 / Sub-Furniture Storage & Dust Defense',
    slug: 'underbed-hidden-storage-vault-playbook',
    fileName: 'Digital_Product_Playbook_07_Underbed_Hidden_Storage_Vault_System.pdf',
    targetPages: 30,
    targetFileSize: '30 Pages • 4.1 MB',
    title: 'The Under-Bed Hidden Storage & Sub-Mattress Vault System Playbook',
    subtitle: 'How to Recover 35+ Cubic Feet of Dust-Sealed, Zero-Visibility Storage Beneath Standard Rental Bed Frames',
    category: 'Sub-Furniture Storage & Dust Defense',
    audience: 'Renters lacking linen closets, attic space, or basement lockers who need to store luggage and bulky seasonal gear.',
    promise: 'Unlock 35+ cubic feet of dust-sealed storage space under your bed with zero visual clutter or floor scratching.',
    accentColor: '#4A533E',
    priceCad: 29,
    perceivedValueCad: 95,
    isbn: 'SSH-DP-2026-VOL07',
    copyrightYear: 2026,
    author: 'SmallSpaceHome Editorial Design & Architecture Research Group',
    publisher: 'SmallSpaceHome Inc. • Toronto Rental Lab',
    edition: 'Second Commercial Master Edition, 2026',
    language: 'en-CA',
    chapters: [
      {
        chapterNumber: 1,
        title: 'Unlocking the Forgotten 35 Cubic Feet of Floor Space',
        subtitle: 'The volumetric geometry of Queen and King bed footprints in small bedrooms',
        readingMinutes: 5,
        content: `A standard Queen bed occupies a footprint of 60 by 80 inches (33.3 square feet). With a standard 8-inch under-bed clearance, that footprint represents over 22 cubic feet of unutilized space. By elevating the frame to a 12-inch clearance, you instantly unlock 33.3 cubic feet—equivalent to two full wardrobe armoires.

THE UNDER-BED EQUILIBRIUM:
> DANGER / AVOID: Under-bed storage must NEVER consist of random open cardboard boxes that accumulate dust bunnies and look messy from room sightlines. It must be a structured, dust-sealed, rolling drawer vault concealed behind an architectural bed valance.`,
        keyTakeaways: [
          'A Queen bed frame footprint contains 33+ cubic feet of potential enclosed storage.',
          'Elevating clearance from 8" to 12" doubles usable sub-bed storage volume.',
          'Under-bed storage must be 100% dust-sealed and visually concealed.'
        ],
        checklistItems: [
          'Measure bed frame underside clearance height with tape measure.',
          'Calculate total sub-mattress volume: Length x Width x Clearance.',
          'Inspect floor type to choose rubber vs felt rolling casters.'
        ],
        tableData: {
          headers: ['Bed Size', 'Clearance Height', 'Usable Storage Volume', 'Armoire Wardrobe Equivalent'],
          rows: [
            ['Twin / Single', '8 Inches Base', '13.3 Cubic Feet', '0.7 Wardrobe Armoires'],
            ['Full / Double', '10 Inches Elevated', '23.6 Cubic Feet', '1.3 Wardrobe Armoires'],
            ['Queen Standard', '12 Inches Elevated', '33.3 Cubic Feet', '2.0 Full Wardrobe Armoires'],
            ['King Standard', '12 Inches Elevated', '42.6 Cubic Feet', '2.6 Full Wardrobe Armoires']
          ]
        }
      },
      {
        chapterNumber: 2,
        title: 'Heavy-Duty Steel Bed Risers & Frame Elevation',
        subtitle: 'Safely gaining 3 to 5 inches of vertical clearance without structural wobble',
        readingMinutes: 5,
        content: `Most modern platform beds sit only 6 to 8 inches off the floor, preventing large storage bins from fitting beneath.

THE STEEL ELEVATION PROTOCOL:
1. SOLID STEEL / REINFORCED POLYMER RISERS: Use 3-inch recessed-cup heavy-duty bed risers rated for 1,200+ lbs. Avoid cheap hollow cone risers that crack under dynamic loads.
2. CENTER BEAM SUPPORT: If your Queen or King bed has center support legs, ensure matching risers are installed under the center rail to prevent mattress sagging.
3. FELT BASE PADS: Adhere 1/4-inch thick heavy felt pads beneath every riser base to protect rental hardwood flooring from point-load indentations.`,
        keyTakeaways: [
          'Use heavy-duty steel-reinforced bed risers rated for 1,000+ lbs capacity.',
          'Always support center frame legs with matching risers to prevent frame warping.',
          'Apply heavy felt pads under risers to prevent hardwood denting.'
        ],
        checklistItems: [
          'Count total bed legs (typically 4 corner legs + 2 to 4 center support legs).',
          'Install non-slip recessed bed risers under all frame legs.',
          'Verify bed remains 100% rock-solid with zero side-to-side wobble.'
        ]
      },
      {
        chapterNumber: 3,
        title: 'Dust-Sealed Rolling Storage Bins with Low-Friction Casters',
        subtitle: 'Keeping linens, winter duvets, and seasonal gear fresh and hair-free',
        readingMinutes: 5,
        content: `Because airflow beneath beds creates static dust traps, clothing stored under beds must be hermetically protected.

THE STORAGE CONTAINER BLUEPRINT:
1. GASKET-SEALED POLYPROPYLENE BINS: Use shallow 6.5-inch bins featuring rubber foam perimeter gaskets and four locking latches.
2. BI-DIRECTIONAL SMOOTH CASTERS: Ensure bins have built-in rubberized roller wheels that glide smoothly on both carpet and hardwood without dragging.
3. SUB-BED ZONING MAP:
   - HEAD ZONE (Rear, hardest to reach): Long-term archives, tax documents, seasonal camping gear.
   - CENTER ZONE: Extra duvet inserts, guest pillows in vacuum compression bags.
   - FOOT ZONE (Easiest to access): Daily spare bed sheets, extra towels, seasonal shoes.`,
        keyTakeaways: [
          'Gasketed bins with locking latches prevent dust, pet hair, and moisture from penetrating.',
          'Bi-directional rubber wheels glide effortlessly without scratching hardwood floors.',
          'Zone storage by access frequency: Daily linens at the foot, archives at the head.'
        ],
        checklistItems: [
          'Select gasket-sealed clear rolling storage containers.',
          'Compress bulky winter duvets into vacuum storage bags before placing in bins.',
          'Insert moisture-absorbing silica gel packs into each bin.'
        ]
      },
      {
        chapterNumber: 4,
        title: 'The Hidden Valance Shield: Sightline Blocking Architecture',
        subtitle: 'Using tailored linen bed skirts to conceal storage completely from room views',
        readingMinutes: 4,
        content: `Visible plastic bins peeking out from under a bed ruin the peaceful, minimalist aesthetic of a small bedroom.

THE TAILORED VALANCE STANDARD:
1. DROP-LENGTH MEASUREMENT: Measure precisely from the top of the box spring/platform slat to the floor (e.g., 14.5 inches).
2. TAILORED BOX-PLEAT LINEN SKIRT: Choose a tailored, flat-panel linen or heavy cotton bed skirt with clean split corners. Avoid ruffled Victorian skirts.
3. INVISIBLE ACCESS: The split-corner design allows you to lift the fabric flap and slide bins out in 3 seconds while keeping 100% of storage hidden from doorway sightlines.`,
        keyTakeaways: [
          'A tailored linen bed skirt creates an invisible curtain that conceals all under-bed bins.',
          'Choose flat tailored box-pleat profiles for a sleek, modern architectural aesthetic.',
          'Measure drop length accurately to ensure fabric clears floor by exactly 1/2 inch.'
        ],
        checklistItems: [
          'Measure exact drop height from bed frame to floor.',
          'Install tailored linen bed skirt with split corners.',
          'Confirm fabric hangs smoothly without dragging on floor.'
        ]
      }
    ],
    pocketCards: [
      {
        title: 'Under-Bed Vault Zoning Grid (4x6")',
        description: 'Spatial allocation beneath Queen/King bed frames.',
        bulletPoints: [
          'Foot Zone (Daily): Spare sheets, towels, weekly gear.',
          'Center Zone (Monthly): Vacuum-compressed seasonal duvets.',
          'Head Zone (Annual): Travel luggage, camping, archives.',
          'Always use rubber-wheeled gasket-sealed containers.'
        ]
      }
    ],
    sourcesAndRetailers: [
      {
        category: 'Under-Bed Bins & Bed Risers',
        retailer: 'IKEA Canada / Amazon Canada / Canadian Tire',
        recommendedItems: 'IKEA VARDÖ Underbed Storage Boxes with Lids, Utopia Bedding Heavy-Duty Bed Risers',
        webUrl: 'https://ikea.ca'
      }
    ]
  },

  // =========================================================================
  // VOLUME 08: STUDIO ZONING & OPTICAL ROOM SEPARATION
  // =========================================================================
  {
    id: 'playbook-08',
    volumeNumber: 8,
    volumeLabel: 'Volume 08 / Spatial Architecture & Sightline Zoning',
    slug: 'studio-zoning-room-separation-playbook',
    fileName: 'Digital_Product_Playbook_08_Studio_Zoning_Room_Separation_Blueprint.pdf',
    targetPages: 32,
    targetFileSize: '32 Pages • 4.3 MB',
    title: 'The Studio Apartment Zoning & Optical Room Separation Playbook',
    subtitle: 'How to Divide a 400 Sq Ft Open-Concept Studio into 3 Distinct Living Zones Without Building Walls',
    category: 'Spatial Architecture & Sightline Zoning',
    audience: 'Studio apartment dwellers who want distinct sleep, work, and living areas without losing natural daylight.',
    promise: 'Create three distinct functional rooms in a single open layout using zero-drill tension tracks, furniture dividers, and sightline breaks.',
    accentColor: '#4A533E',
    priceCad: 29,
    perceivedValueCad: 95,
    isbn: 'SSH-DP-2026-VOL08',
    copyrightYear: 2026,
    author: 'SmallSpaceHome Editorial Design & Architecture Research Group',
    publisher: 'SmallSpaceHome Inc. • Toronto Rental Lab',
    edition: 'Second Commercial Master Edition, 2026',
    language: 'en-CA',
    chapters: [
      {
        chapterNumber: 1,
        title: 'The Psychological Necessity of Spatial Segmentation in Studios',
        subtitle: 'Why living, working, and sleeping in one undivided box causes chronic mental fatigue',
        readingMinutes: 5,
        content: `When you can see your unmade bed from your work desk, and your laptop screen from your sofa, your brain never fully shifts into restful or productive cognitive modes. Open-concept studios without intentional zoning cause visual clutter crossover and circadian confusion.

THE THREE CORE ZONES:
1. THE SLEEP SANCTUARY: A private, darkened, low-stimulus zone where work screens are physically blocked from view.
2. THE HIGH-OUTPUT WORK NOOK: An ergonomic desk station with focused task lighting and directional sightlines.
3. THE SOCIAL LOUNGE & DINING HUB: An inviting relaxation area facing away from work clutter toward natural window light.`,
        keyTakeaways: [
          'Undivided studio layouts lead to mental fatigue; visual boundaries separate work from rest.',
          'Every studio must establish 3 distinct zones: Sleep, Work, and Social Lounge.',
          'Never position desk monitors in direct sight of your pillow.'
        ],
        checklistItems: [
          'Draft a rough floor plan sketch of your studio apartment.',
          'Identify primary natural window light angles.',
          'Locate optimal dark corner for sleep sanctuary placement.'
        ],
        tableData: {
          headers: ['Studio Zone', 'Primary Function', 'Target Light Level', 'Visual Boundary Method'],
          rows: [
            ['Sleep Sanctuary', 'Melatonin & Deep Rest', '2200K Warm Amber (Dark)', 'Ceiling-tension sliding linen track curtain'],
            ['Workstation Nook', 'Deep Ergonomic Focus', '4000K Neutral White', 'Facing wall with under-desk cord raceways'],
            ['Living & Social', 'Dining & Hospitality', '2700K Soft White Shaded', '5x8 ft area rug anchor + low credenza'],
            ['Transition Path', 'Walking Corridor', 'Ambient Diffused', '18" exposed hardwood clearance path']
          ]
        }
      },
      {
        chapterNumber: 2,
        title: 'Floor-to-Ceiling Tension Curtain Dividers',
        subtitle: 'Zero-drill sliding fabric walls that open and close in 2 seconds',
        readingMinutes: 6,
        content: `Ceiling-to-floor track curtains provide the ultimate flexible room divider for renters:

THE TENSION TRACK SYSTEM:
1. SPRING-LOADED VERTICAL TENSION POLES: Install two slim vertical tension poles that press firmly between floor and ceiling with non-marring silicone caps.
2. CROSSBAR TRACK WITH GLIDER RINGS: Mount a horizontal aluminum track between the poles at ceiling height (8 to 9 feet).
3. SHEER LINEN OR ACOUSTIC DRAPES: Hang semi-sheer linen drapes during the day to allow daylight to filter through to the bed zone, or heavy velvet drapes for total evening privacy when hosting guests.
4. ZERO DAMAGE: Uninstalls in 5 minutes at move-out leaving zero holes in ceilings or drywall.`,
        keyTakeaways: [
          'Tension-pole curtain tracks create sliding partition walls without a single screw in ceiling or floor.',
          'Semi-sheer linen preserves natural window light while obscuring messy bed sightlines.',
          'Draw closed when hosting guests to transform your studio into a formal 1-bedroom layout.'
        ],
        checklistItems: [
          'Measure ceiling height accurately with laser or tape measure.',
          'Assemble vertical tension poles with non-marking silicone feet.',
          'Install lightweight curtain gliders and test smooth sliding motion.'
        ]
      },
      {
        chapterNumber: 3,
        title: 'Double-Sided Open Bookcase Partition Walls',
        subtitle: 'Using IKEA Kallax and open shelving as structural, light-filtering room dividers',
        readingMinutes: 5,
        content: `Open back shelving units (such as the IKEA KALLAX 4x4 or 5x5) function as architectural partition walls while providing dual-sided storage access.

THE STABILITY & LIGHT STRATEGY:
1. PERPENDICULAR ORIENTATION: Place the bookcase perpendicular to the longest wall to create a physical hallway and bedroom entryway.
2. BIPARTISAN LIGHT STYLING: Leave 40% of the cubby compartments open with glass vases or trailing plants (Pothos) to let natural sunlight stream through into the bedroom zone.
3. RENTER STABILITY LOCK: Anchor the top of the shelf using a hidden heavy-duty tension rod against the ceiling or wide felt-padded base leveling wedges to ensure 100% tip-over safety without wall anchors.`,
        keyTakeaways: [
          'Open-back bookcases divide rooms while providing functional storage on both sides.',
          'Leaving 40% of cubbies open maintains natural light flow across the entire apartment.',
          'Use ceiling tension braces to secure tall bookcases safely without drilling.'
        ],
        checklistItems: [
          'Position open shelving unit perpendicular to main wall.',
          'Level bookcase base with felt leveling shims.',
          'Style cubbies with 60% closed storage bins and 40% open light-filtering objects.'
        ]
      },
      {
        chapterNumber: 4,
        title: 'Area Rug Anchoring: Defining Boundaries with Visual Textures',
        subtitle: 'How color breaks on the floor establish distinct architectural rooms',
        readingMinutes: 4,
        content: `The floor is the subconscious foundation of room perception. Placing one large rug in the center of a studio blurs all zones together.

THE DUAL-RUG ARCHITECTURE:
- LIVING ROOM RUG: A high-contrast 5x8 ft textured wool rug under the sofa and coffee table defines the boundaries of the "Living Room."
- SLEEP ZONE RUG: A plush, low-pile neutral rug extending 24 inches around the bed perimeter creates a distinct "Bedroom" zone.
- HARDWOOD TRANSITION CORRIDORS: Leave 12 to 18 inches of exposed bare hardwood flooring between rugs to establish clear psychological walking corridors between functional rooms.`,
        keyTakeaways: [
          'Distinct area rugs define distinct rooms without building physical walls.',
          'Leave 12–18 inches of bare floor between rugs to create clear walking pathways.',
          'Use different textures (flatweave for living, plush for bedroom) to reinforce sensory zoning.'
        ],
        checklistItems: [
          'Select two distinct complementary rugs for living and sleeping zones.',
          'Ensure front sofa legs sit firmly on the living room rug.',
          'Place non-slip acoustic felt pads under both rugs.'
        ]
      }
    ],
    pocketCards: [
      {
        title: 'Studio 3-Zone Blueprint Card (4x6")',
        description: 'Layout principles for 400–600 sq ft studios.',
        bulletPoints: [
          'Zone 1: Sleep Sanctuary (Darkest corner + curtain track).',
          'Zone 2: Work Nook (Facing wall, never facing pillow).',
          'Zone 3: Social Lounge (Window light + area rug anchor).',
          'Leave 18" bare hardwood corridors between functional zones.'
        ]
      }
    ],
    sourcesAndRetailers: [
      {
        category: 'Room Dividers & Shelving',
        retailer: 'IKEA Canada / Amazon Canada / Wayfair',
        recommendedItems: 'IKEA KALLAX Shelving Unit (4x4), RoomDividersNow Ceiling Tension Track Sets',
        webUrl: 'https://ikea.ca'
      }
    ]
  },

  // =========================================================================
  // VOLUME 09: WFH MULTI-USE DESK & EVENING RESET KIT
  // =========================================================================
  {
    id: 'playbook-09',
    volumeNumber: 9,
    volumeLabel: 'Volume 09 / Hybrid Ergonomics & Circadian Workspaces',
    slug: 'wfh-multi-use-desk-reset-playbook',
    fileName: 'Digital_Product_Playbook_09_WFH_Multi_Use_Desk_Evening_Reset_Kit.pdf',
    targetPages: 30,
    targetFileSize: '30 Pages • 4.1 MB',
    title: 'The WFH Multi-Use Desk & 15-Minute Evening Room Reset Playbook',
    subtitle: 'How to Transition Your Small Living Space from Focused Workstation to Peaceful Evening Sanctuary',
    category: 'Hybrid Ergonomics & Circadian Workspaces',
    audience: 'Remote workers living in small apartments whose desks dominate the living room and prevent mental relaxation.',
    promise: 'Completely conceal laptops, monitors, and cables at 5:30 PM in under 8 minutes, reclaiming living room peace.',
    accentColor: '#4A533E',
    priceCad: 29,
    perceivedValueCad: 95,
    isbn: 'SSH-DP-2026-VOL09',
    copyrightYear: 2026,
    author: 'SmallSpaceHome Editorial Design & Architecture Research Group',
    publisher: 'SmallSpaceHome Inc. • Toronto Rental Lab',
    edition: 'Second Commercial Master Edition, 2026',
    language: 'en-CA',
    chapters: [
      {
        chapterNumber: 1,
        title: 'Ending Workday Burnout in Single-Room Living Spaces',
        subtitle: 'The psychological danger of the eternal glowing monitor in your living room',
        readingMinutes: 4,
        content: `When working from home in a 500 sq ft apartment, your desk is constantly visible during dinner, movies, and weekend downtime. Seeing unread Slack notifications and tangled cords creates continuous micro-stress, preventing genuine nervous system recovery.

THE 15-MINUTE WORKDAY SUNSET:
> RULE: At 5:30 PM, your space must physically transform from an energetic corporate office into a tranquil evening lounge. By establishing an 8-minute physical shutdown ritual paired with cable invisibility, you reclaim your home life.`,
        keyTakeaways: [
          'A visible workstation in your living area keeps your brain in a state of low-grade work alert.',
          'Physical transition rituals signal to your brain that the workday is officially terminated.',
          'Zero cables touching the floor is the prerequisite for visual calm.'
        ],
        checklistItems: [
          'Set a recurring 5:30 PM calendar alarm titled "Workday Sunset Reset".',
          'Audit current desk clutter: Count visible power cables, adapters, and papers.',
          'Commit to the zero-work-in-bed absolute boundary.'
        ],
        tableData: {
          headers: ['Workday Phase', 'Target Time', 'Desk Configuration', 'Lighting & Ambient State'],
          rows: [
            ['Morning Launch', '08:45 AM', 'Laptop deployed, monitor on, notepad open', '4000K Neutral White Focused Task Light'],
            ['Active Deep Work', '09:00 AM – 05:00 PM', 'Ergonomic mouse, secondary screen active', 'Full natural daylight + task lamp'],
            ['5:30 Sunset Reset', '05:30 PM – 05:38 PM', 'Laptop into slide drawer, cords into J-channel', 'Shutdown overhead; shift to 2200K warm glow'],
            ['Evening Sanctuary', '05:40 PM Onward', 'Ceramic vase / candle placed on clean surface', '2200K amber floor lamps & accent uplighting']
          ]
        }
      },
      {
        chapterNumber: 2,
        title: 'The Zero-Cable Invisibility Standard: Under-Desk PVC J-Channels',
        subtitle: 'Concealing 100% of charging bricks, monitor power supplies, and USB cords',
        readingMinutes: 6,
        content: `Tangled black power cords hanging beneath a desk instantly make a room look chaotic.

THE UNDER-DESK INVISIBILITY BLUEPRINT:
1. ADHESIVE PVC J-CHANNEL RACEWAYS ($12 CAD): Clean the underside rear edge of your desk with 70% IPA. Adhere heavy-duty J-channel raceways 2 inches in from the back lip.
2. INTEGRATED SURGE PROTECTOR MOUNT: Mount a 6-outlet metal power bar directly to the desk underside using heavy-duty hook-and-loop tape or screw tabs.
3. SINGLE BRAIDED UMBILICAL SLEEVE: Run all monitor, laptop, and phone chargers into the J-channel. Run only ONE single white or black braided power cord down the rear desk leg using a clear silicone clip.
4. RESULT: From any seated sofa angle, zero cables are visible. The desk appears to float effortlessly.`,
        keyTakeaways: [
          'Under-desk J-channels hold all bulky power bricks and messy cord slack completely out of sight.',
          'Only one single master power cable should descend to the wall outlet.',
          'Adheres cleanly to laminate and solid wood desks with zero drilling.'
        ],
        checklistItems: [
          'Clean desk underside with 70% IPA.',
          'Adhere PVC J-channel raceway along rear edge.',
          'Bundle cables tightly with velcro cable ties inside raceway.'
        ]
      },
      {
        chapterNumber: 3,
        title: 'The 5-Second Felt Laptop Hideaway Drawer & Peripheral Tray',
        subtitle: 'Making screens and keyboards disappear in seconds at the end of the day',
        readingMinutes: 5,
        content: `Leaving your laptop open on your desk invites late-night work checks.

THE CONCEALMENT ARSENAL:
1. UNDER-DESK SLIDE-OUT FELT TRAY: Install an adhesive under-desk slide-out drawer tray. At 5:30 PM, unplug your laptop and slide it into the hidden felt compartment.
2. WIRELESS PERIPHERAL DOCK: Store wireless mouse and keyboard inside the drawer or in a decorative canvas lidded box on a nearby shelf.
3. DECORATIVE DESK CONVERSION: Place a ceramic vase with dried eucalyptus or a scented candle in the center of the clean desk surface. The desk is now an elegant decorative console table.`,
        keyTakeaways: [
          'Under-desk slide-out trays conceal laptops and keyboards in under 5 seconds.',
          'Placing decorative items (vases/candles) instantly converts a desk into a living room console.',
          'Out of sight = Out of mind for evening mental tranquility.'
        ],
        checklistItems: [
          'Install under-desk adhesive slide drawer.',
          'Stow keyboard, mouse, and headset inside tray at 5:30 PM.',
          'Place evening decor item on clean desk surface.'
        ]
      },
      {
        chapterNumber: 4,
        title: 'Circadian Lighting Shift: 4000K Focus to 2200K Evening Glow',
        subtitle: 'Automating lighting temperature transitions to regulate melatonin and sleep',
        readingMinutes: 4,
        content: `Lighting color temperature dictates your circadian alertness:
- DAYTIME WORK (9:00 AM – 5:00 PM): 4000K–4500K crisp neutral white light boosts dopamine and executive focus.
- EVENING SANCTUARY (5:30 PM ONWARD): 2000K–2200K warm amber candlelight triggers melatonin production and signals relaxation.

Set smart desk bulbs to automatically shift from 4000K to 2200K at 5:30 PM, visually signaling to your brain that the workday is done.`,
        keyTakeaways: [
          'Use 4000K neutral light for daytime focus and 2200K warm amber for evening relaxation.',
          'Automate color transitions at 5:30 PM to trigger healthy melatonin sleep cycles.',
          'Turn off high-output overhead work lamps as part of your evening reset.'
        ],
        checklistItems: [
          'Install smart color-tunable bulb in desk lamp.',
          'Set automated schedule: 4000K at 9:00 AM, 2200K at 5:30 PM.',
          'Power down external monitors completely at workday end.'
        ]
      }
    ],
    pocketCards: [
      {
        title: '15-Minute Workday Sunset Card (4x6")',
        description: 'Daily evening checklist for home office mental reset.',
        bulletPoints: [
          '5:30 PM: Close all work browser tabs and log off Slack.',
          'Stow laptop and mouse into under-desk felt hideaway tray.',
          'Shift lighting from 4000K focus to 2200K warm amber glow.',
          'Place evening candle/vase on desk: Console mode active.'
        ]
      }
    ],
    sourcesAndRetailers: [
      {
        category: 'Cable Management & Desk Drawers',
        retailer: 'Amazon Canada / IKEA Canada',
        recommendedItems: 'Monoprice Under-Desk Cable Tray, IKEA SIGNUM Cable Cradle, Marbrasse Under-Desk Adhesive Drawer',
        webUrl: 'https://amazon.ca'
      }
    ]
  },

  // =========================================================================
  // VOLUME 10: OPTICAL EXPANDER APARTMENT LIGHTING OS
  // =========================================================================
  {
    id: 'playbook-10',
    volumeNumber: 10,
    volumeLabel: 'Volume 10 / Photometric Expansion & Circadian Illumination',
    slug: 'optical-expander-apartment-lighting-playbook',
    fileName: 'Digital_Product_Playbook_10_Optical_Expander_Apartment_Lighting_OS.pdf',
    targetPages: 30,
    targetFileSize: '30 Pages • 4.1 MB',
    title: 'The Optical Space Expander & Circadian Apartment Lighting OS',
    subtitle: 'How to Double Perceived Square Footage and Eliminate Shadow Fatigue Using 3-Tier Layered Lighting',
    category: 'Photometric Expansion & Circadian Illumination',
    audience: 'Apartment dwellers dealing with single "boob light" ceiling fixtures, dark corner voids, and seasonal gloom.',
    promise: 'Double perceived room volume, eradicate dark corners, and create cozy luxury ambiance without hiring an electrician.',
    accentColor: '#4A533E',
    priceCad: 29,
    perceivedValueCad: 95,
    isbn: 'SSH-DP-2026-VOL10',
    copyrightYear: 2026,
    author: 'SmallSpaceHome Editorial Design & Architecture Research Group',
    publisher: 'SmallSpaceHome Inc. • Toronto Rental Lab',
    edition: 'Second Commercial Master Edition, 2026',
    language: 'en-CA',
    chapters: [
      {
        chapterNumber: 1,
        title: 'The Photometric Illusion: Why Single Ceiling Fixtures Shrink Rooms',
        subtitle: 'How central ceiling lights create dark corner shadows that make rooms feel tiny',
        readingMinutes: 4,
        content: `Most rental apartments come equipped with a single flush-mount ceiling fixture in the center of the room. This single light source casts deep shadows in all four corners, visually contracting the perceived boundaries of the room by up to 35%.

THE LAW OF PHOTOMETRIC EXPANSION:
> RULE: Perceived room size is defined by the illumination of its furthest vertical boundaries. When room corners are washed with gentle warm uplight, the eye perceives the space as expansive, airy, and welcoming.`,
        keyTakeaways: [
          'Single ceiling fixtures create dark corner shadows that shrink perceived room size.',
          'Illuminating room corners with vertical uplighting expands perceived boundaries.',
          'Never rely on a single light source; implement the 3-Tier Layered Lighting System.'
        ],
        checklistItems: [
          'Identify dark, unlit corners in your living room and bedroom.',
          'Switch off main harsh overhead ceiling light.',
          'Plan 3 distinct light sources placed at varying heights.'
        ],
        tableData: {
          headers: ['Lighting Tier', 'Elevation Band', 'Kelvin Temperature', 'Target Psychological Impact'],
          rows: [
            ['Tier 1: Ambient Uplight', 'Floor to Ceiling (0" to 96")', '2700K Warm White (Bounced)', 'Eradicates corner shadows, expands perceived volume'],
            ['Tier 2: Mid Task Layer', 'Eye Level (36" to 54")', '3000K Soft White Shaded', 'Comfortable reading, conversation, dining'],
            ['Tier 3: Low Accent Glow', 'Under-Furniture (0" to 24")', '2200K Deep Warm Amber', 'Creates floating depth, cozy luxury evening calm'],
            ['Builder Overhead Light', 'Ceiling Center (96")', '5000K Blue/White (AVOID)', 'Casts harsh shadows, causes eye fatigue (Keep OFF)']
          ]
        }
      },
      {
        chapterNumber: 2,
        title: 'The 3-Tier Layered Lighting Architecture',
        subtitle: 'Balancing Ambient, Task, and Accent illumination without rewiring',
        readingMinutes: 6,
        content: `Transform your apartment using three distinct illumination layers:

- LAYER 1: AMBIENT UPLIGHTING (Floor Level to Ceiling):
  Place slim LED corner floor lamps or spotlight cans behind plants and armchairs aiming upward. Bouncing light off matte white ceilings diffuses soft, shadow-free illumination across the room.
- LAYER 2: MID-LEVEL TASK LIGHTING (Eye Level, 36"–48"):
  Warm shaded table lamps and articulated reading sconces on desks, side tables, and kitchen counters for focused activities.
- LAYER 3: LOW-LEVEL ACCENT LIGHTING (Under-Furniture & Shelving):
  Concealed warm 2200K LED light strips placed behind TV media consoles, under bed frames, or beneath floating picture ledges to create floating architectural depth.`,
        keyTakeaways: [
          'Layer 1 (Uplighting): Bounces light off ceiling to create soft, shadowless ambient glow.',
          'Layer 2 (Task Lighting): Table lamps at seated eye level for reading and dining.',
          'Layer 3 (Accent Lighting): Under-furniture LED strips provide subtle architectural depth.'
        ],
        checklistItems: [
          'Position one corner uplight behind living room plant or accent chair.',
          'Place warm table lamps with linen shades on side tables.',
          'Install adhesive warm LED strip behind TV or media console.'
        ]
      },
      {
        chapterNumber: 3,
        title: 'Mirror Optical Bouncing & Daylight Multiplication',
        subtitle: 'Positioning mirrors perpendicular to windows to double natural daylight penetration',
        readingMinutes: 5,
        content: `A mirror placed incorrectly reflects visual clutter; placed strategically, it doubles incoming photons.

THE 90-DEGREE PERPENDICULAR ANGLE:
Never mount mirrors directly opposite windows (which causes blinding glare). Mount full-length mirrors on adjacent walls at a 90-degree angle to windows. This bounces natural daylight deep into dark hallway recesses and kitchen galley areas.`,
        keyTakeaways: [
          'Mount mirrors at 90-degree angles adjacent to windows to bounce daylight deep into interior rooms.',
          'Avoid mounting mirrors directly opposite windows to prevent harsh reflective glare.',
          'Full-length floor mirrors create optical doorways that visually double room depth.'
        ],
        checklistItems: [
          'Identify window light angles between 10:00 AM and 2:00 PM.',
          'Position full-length mirror on perpendicular wall.',
          'Ensure mirror reflection captures plants or art, not cluttered storage.'
        ]
      }
    ],
    pocketCards: [
      {
        title: '3-Tier Lighting Architecture Card (4x6")',
        description: 'Room-by-room Kelvin and lumen balancing rules.',
        bulletPoints: [
          'Layer 1 (Uplight): LED corner uplight bounced off ceiling.',
          'Layer 2 (Task): 2700K linen-shaded table lamps at eye level.',
          'Layer 3 (Accent): 2200K warm strip behind media console.',
          'Morning: 4000K Neutral | Evening: 2200K Amber Glow.'
        ]
      }
    ],
    sourcesAndRetailers: [
      {
        category: 'LED Strip Lighting & Smart Bulbs',
        retailer: 'IKEA Canada / Amazon Canada / Home Depot',
        recommendedItems: 'IKEA TRÅDFRI Smart Bulb Kits (Warm White), Govee RGBIC Warm White LED Light Strips',
        webUrl: 'https://ikea.ca'
      }
    ]
  },

  // =========================================================================
  // VOLUME 11: PEDESTAL SINK BATHROOM MAXIMIZER KIT
  // =========================================================================
  {
    id: 'playbook-11',
    volumeNumber: 11,
    volumeLabel: 'Volume 11 / Sanitary Storage & Vertical Wet-Zone Engineering',
    slug: 'pedestal-sink-bathroom-maximizer-playbook',
    fileName: 'Digital_Product_Playbook_11_Pedestal_Sink_Bathroom_Maximizer_Kit.pdf',
    targetPages: 30,
    targetFileSize: '30 Pages • 4.1 MB',
    title: 'The Pedestal Sink & Micro-Bathroom Vertical Maximizer Playbook',
    subtitle: 'How to Add 18+ Cubic Feet of Toiletries Storage Around Narrow Pedestal Basins with Zero Drilling',
    category: 'Sanitary Storage & Vertical Wet-Zone Engineering',
    audience: 'Apartment renters with vintage pedestal sinks or tiny 30 sq ft bathrooms with zero vanity counter space.',
    promise: 'Unlock 18+ cubic feet of organized bathroom toiletries storage without drilling tile or replacing plumbing fixtures.',
    accentColor: '#4A533E',
    priceCad: 29,
    perceivedValueCad: 95,
    isbn: 'SSH-DP-2026-VOL11',
    copyrightYear: 2026,
    author: 'SmallSpaceHome Editorial Design & Architecture Research Group',
    publisher: 'SmallSpaceHome Inc. • Toronto Rental Lab',
    edition: 'Second Commercial Master Edition, 2026',
    language: 'en-CA',
    chapters: [
      {
        chapterNumber: 1,
        title: 'The Pedestal Sink Dilemma: Zero Vanity Countertops & Micro Floorplans',
        subtitle: 'Why standard bathroom organizers fail in narrow 35 sq ft vintage bathrooms',
        readingMinutes: 4,
        content: `Vintage apartment bathrooms and modern builder condos often install pedestal sinks to save floor area. However, pedestal basins offer zero flat counter space for toothbrushes, skincare, or hair tools, leading to cluttered basin rims where items constantly fall into the toilet or drain.

THE WRAP-AROUND VERTICAL STRATEGY:
> RULE: The air space beneath and directly behind a pedestal basin column is empty. By deploying curved wrap-around shelving, over-toilet vertical storage towers, and magnetic medicine cabinet door hacks, you create an organized master bath experience in 35 square feet.`,
        keyTakeaways: [
          'Pedestal sinks eliminate flat counter space; vertical airspace must be mobilized.',
          'Curved wrap-around storage racks capture the dead space around the pedestal column.',
          'Never balance skincare products on narrow ceramic sink rims.'
        ],
        checklistItems: [
          'Measure width and depth clearance around pedestal sink base.',
          'Measure vertical clearance between toilet tank lid and ceiling.',
          'Audit daily toiletries: Group into morning, evening, and grooming categories.'
        ],
        tableData: {
          headers: ['Bathroom Zone', 'Vertical Span', 'Recommended Hardware', 'Optimized Toiletries'],
          rows: [
            ['Under-Pedestal Curve', 'Floor to 28" basin lip', 'U-shaped wrap-around bamboo/metal 2-tier rack', 'Daily hand towels, toilet paper rolls, hair dryer'],
            ['Over-Toilet Airspace', '32" to 78" above tank', 'Freestanding 3-tier bamboo space-saver tower', 'Bath sheets, skincare bins, extra toiletries'],
            ['Medicine Cabinet Door', 'Inside metal door face', 'Adhesive neodymium magnetic tool strip', 'Tweezers, nail clippers, grooming scissors'],
            ['Shower Wet Corner', 'Floor to ceiling tension', '4-tier rustproof stainless tension caddy', 'Shampoo, body wash, exfoliating sponges']
          ]
        }
      },
      {
        chapterNumber: 2,
        title: 'The Curved Pedestal Wrap-Around Two-Tier Metal Rack System',
        subtitle: 'Adding two full tiers of toiletries storage without touching plumbing lines',
        readingMinutes: 5,
        content: `A curved metal under-sink organizer features a recessed U-shaped cutout that wraps snugly around the ceramic pedestal column:
- TOP SHELF: Houses daily hand towels, soap dispensers, and facial serums.
- BOTTOM SHELF: Holds extra toilet paper rolls and cleaning supplies in moisture-resistant wire baskets.
- STABILITY: Rubber-tipped leveling feet prevent scratching floor tile and protect against damp moisture buildup.`,
        keyTakeaways: [
          'U-shaped cutouts allow storage shelves to hug the pedestal column tightly.',
          'Adds two wide storage tiers without interfering with drain pipes or water shutoff valves.',
          'Elevated rubber feet keep stored items high and dry during shower humidity.'
        ],
        checklistItems: [
          'Measure pedestal column diameter (typically 6–8 inches).',
          'Position wrap-around shelf around pedestal base.',
          'Store daily hand towels on top tier and cleaning supplies on bottom tier.'
        ]
      },
      {
        chapterNumber: 3,
        title: 'Over-the-Toilet Vertical Towers & Zero-Damage Tension Poles',
        subtitle: 'Capturing 12 cubic feet of prime vertical real estate above the toilet tank',
        readingMinutes: 5,
        content: `The 4 vertical feet above a toilet tank is the largest unutilized storage zone in a micro-bathroom:

THE OVER-TOILET ARSENAL:
1. FREESTANDING METAL / BAMBOO SPACE-SAVER TOWER: Straddles the toilet tank with 3 deep shelves. Stores folded bath towels, woven baskets for toiletries, and spare shampoo.
2. CEILING-TO-FLOOR TENSION CORNER POLES: For shower enclosures, install a rust-proof stainless steel spring tension pole with 4 adjustable corner baskets. No screws, no suction cups falling in the middle of the night.`,
        keyTakeaways: [
          'Over-toilet shelving towers add 3 spacious tiers above the toilet tank without wall drilling.',
          'Spring-tension stainless steel shower poles provide permanent, slip-free bottle storage.',
          'Use woven cotton baskets on shelves to conceal feminine care and personal toiletries.'
        ],
        checklistItems: [
          'Verify toilet lid opens fully without hitting lowest tower shelf.',
          'Assemble over-toilet freestanding tower with rear crossbar support.',
          'Install stainless steel tension shower pole in shower corner.'
        ]
      },
      {
        chapterNumber: 4,
        title: 'Magnetic Medicine Cabinet Door Hacks & Razor Hooks',
        subtitle: 'Transforming the inside of metal and mirrored cabinet doors into high-density storage',
        readingMinutes: 4,
        content: `The interior metal face of standard rental medicine cabinets is magnetic:
1. ADHESIVE MAGNETIC STRIPS: Adhere a slim magnetic strip to the inner door face to hold bobby pins, nail clippers, tweezers, and grooming scissors.
2. CLEAR ACRYLIC SUCTION PODS: Adhere fog-free suction caddies inside shower glass to store razors and exfoliators safely away from water spray.`,
        keyTakeaways: [
          'Magnetic strips inside cabinet doors keep tweezers, nail clippers, and scissors organized.',
          'Suction razor hooks keep sharp blades dry and extend cartridge lifespan by 300%.',
          'Preserves medicine cabinet shelf depths for bulky prescription bottles and lotions.'
        ],
        checklistItems: [
          'Adhere magnetic metal strip to interior medicine cabinet door.',
          'Store tweezers and nail scissors vertically on magnet.',
          'Attach heavy-duty silicone suction razor hook inside shower stall.'
        ]
      }
    ],
    pocketCards: [
      {
        title: 'Micro-Bathroom Storage Matrix (4x6")',
        description: 'Sanitary storage allocation rules.',
        bulletPoints: [
          'Wrap-Around Pedestal Rack: Hand towels & soap.',
          'Over-Toilet Tower: Bath sheets, spare rolls, skincare bins.',
          'Medicine Cabinet Door Magnet: Tweezers & grooming tools.',
          'Corner Tension Pole: Shower shampoo & body wash bottles.'
        ]
      }
    ],
    sourcesAndRetailers: [
      {
        category: 'Bathroom Space Savers & Caddies',
        retailer: 'IKEA Canada / Amazon Canada / Bed Bath & Beyond',
        recommendedItems: 'IKEA RÅGRUND Bamboo Pedestal Sink Shelf, ALLZONE Rustproof Shower Tension Pole',
        webUrl: 'https://ikea.ca'
      }
    ]
  }
];

