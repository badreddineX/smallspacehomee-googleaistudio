export interface FormulaItem {
  name: string;
  formula: string;
  variables: string[];
  units: string;
  workedExample: string;
  assumptions: string;
  practicalDecision: string;
}

export interface TroubleshootingItem {
  problem: string;
  likelyCause: string;
  whatToCheck: string;
  correctiveAction: string;
  stopCondition: string;
}

export interface ExecutionChecklistStage {
  stageName: 'BEFORE' | 'DURING' | 'AFTER' | 'REMOVE';
  title: string;
  items: string[];
}

export interface PocketFieldCard {
  id: string;
  cardNumber: '01' | '02' | '03' | '04';
  type: 'Surface Prep' | 'Hardware & Install' | 'Removal & Restore' | 'Field Sourcing';
  title: string;
  purpose: string;
  criticalSteps: string[];
  measurementsOrSpecs: string[];
  warningCondition: string;
  stopCondition: string;
}

export interface VolumeEnrichment {
  volumeId: string;
  volumeNumber: number;
  diagramTitle: string;
  diagramConcept: string;
  diagramDetails: string[];
  formulas: FormulaItem[];
  executionChecklist: ExecutionChecklistStage[];
  troubleshootingMatrix: TroubleshootingItem[];
  pocketCards: PocketFieldCard[];
}

export const PLAYBOOK_ENRICHMENT_DATA: Record<string, VolumeEnrichment> = {
  'playbook-01': {
    volumeId: 'playbook-01',
    volumeNumber: 1,
    diagramTitle: 'Shear Force vs. Cantilever Rotational Torque Architecture',
    diagramConcept: 'Mechanical Fastener Dynamics on 1/2" Gypsum Drywall and Heritage Plaster Substrates',
    diagramDetails: [
      '• SHEAR LOAD (Parallel to wall) [A]: Viscoelastic adhesive strips transfer 90%+ of static payload downward parallel to paint.',
      '• CANTILEVER TORQUE (Pull-out force) [C]: Projecting items create rotational moments M = W × D, concentrating peel stress at top edges.',
      '• CRITICAL REDUCTION RULE [B]: For every 1.5" of forward projection beyond 2", effective shear capacity drops by 20%.',
      '• CONSERVATIVE CAPACITY CEILING [B]: Damage-free adhesive flush mounting is strictly capped at 16 lbs gross tare weight.'
    ],
    formulas: [
      {
        name: 'Conservative Working Load Formula (CWL)',
        formula: 'CWL = Rated_Capacity * 0.60',
        variables: [
          'CWL = Safe Live Working Load Limit [B]',
          'Rated_Capacity = Manufacturer lab static shear rating [A]',
          '0.60 = 40% Renter Safety Buffer for paint flexibility and dynamic vibration [B]'
        ],
        units: 'Pounds (lbs) / Kilograms (kg)',
        workedExample: 'Four 3M Command Large Strips rated at 16.0 lbs: CWL = 16.0 * 0.60 = 9.6 lbs maximum live payload.',
        assumptions: 'Smooth, cured latex paint surface (>30 days), degreased with 70% IPA, ambient room temp >15°C [D].',
        practicalDecision: 'If measured gross weight exceeds 9.6 lbs, do not add more adhesive strips to a single small bracket; upgrade to 3M Claw hardened steel pins to prevent drywall paper delamination.'
      },
      {
        name: '57-Inch Gallery Centerline Eye-Level Formula',
        formula: 'Hanger_Mark = 57" + (Frame_Height / 2) - Wire_Drop',
        variables: [
          '57" = Museum standard viewing centerline height [B]',
          'Frame_Height = Total vertical dimension of frame (inches) [D]',
          'Wire_Drop = Distance from top frame edge to taut hanging bracket/wire (inches) [D]'
        ],
        units: 'Inches (") from finished floor',
        workedExample: 'Frame is 24" high with a 3" bracket drop: Hanger_Mark = 57" + (24" / 2) - 3" = 57" + 12" - 3" = 66" from finished floor.',
        assumptions: 'Level floor substrate, residential ceiling height 8–10 ft [D].',
        practicalDecision: 'Mark pencil tick at exactly 66" to ensure visual alignment across varied frame heights in gallery arrangements.'
      },
      {
        name: 'Cantilever Rotational Torque Overhang Limit',
        formula: 'M = Weight * Projection_Depth',
        variables: [
          'M = Overturn rotational moment (inch-pounds) [C]',
          'Weight = Gross payload weight (lbs) [D]',
          'Projection_Depth = Distance from wall surface to center of mass (inches) [D]'
        ],
        units: 'Inch-Pounds (in-lbs)',
        workedExample: 'A 4 lb shelf protruding 6" creates M = 4 * 6 = 24 in-lbs of rotational peel force at top mounting strips.',
        assumptions: 'Rigid shelf bracket with flat mounting backplate [D].',
        practicalDecision: 'If Projection_Depth exceeds 3.5", never rely on adhesive strips alone; use diagonal cantilever support struts or floor-resting uprights.'
      },
      {
        name: 'Multi-Point Fastener Shear Balance Formula',
        formula: 'Fastener_Pairs = Ceiling(Total_Weight_lbs / 2.5)',
        variables: [
          'Fastener_Pairs = Required interlocking strip pairs [B]',
          'Total_Weight_lbs = Gross measured weight with glass and frame [D]',
          '2.5 = Conservative load rating per Large strip pair (lbs) [B]'
        ],
        units: 'Integer Count (Pairs)',
        workedExample: 'An 8.2 lb mirror: Ceiling(8.2 / 2.5) = Ceiling(3.28) = 4 pairs (one pair applied at each of the 4 frame corners).',
        assumptions: 'Even 4-corner placement on rigid wooden or metal frame perimeter [D].',
        practicalDecision: 'Always distribute pairs to all four corners rather than clustering at the top to prevent lower-edge rotational peeling.'
      }
    ],
    executionChecklist: [
      {
        stageName: 'BEFORE',
        title: 'Stage 1: Pre-Execution Substrate Audit & Dimension Verification',
        items: [
          'Identify wall substrate via knuckle-tap test: resonant hollow (Drywall) vs dense dead thud (Plaster/Concrete) [B].',
          'Weigh gross object assembly (frame + glass + backboard + hanging hardware) on digital kitchen scale [B].',
          'Confirm hardware compatibility and calculate 40% safety margin: CWL = Rated * 0.60 [B].',
          'Inspect paint surface: verify cured >30 days with zero chalking, bubbling, peeling, or moisture stains [B].',
          'Review manufacturer instructions and confirm ambient room temperature is above 15°C (59°F) [A].',
          'Confirm layout geometry and calculate exact hanger mark using the 57" Centerline Formula [C].',
          'Gather complete field kit: 70% IPA USP, microfiber cloth, 9" magnetic torpedo level, pencil, tape measure [B].'
        ]
      },
      {
        stageName: 'DURING',
        title: 'Stage 2: Surface Preparation & Precision Assembly Protocol',
        items: [
          'Degrease target wall surface with 70% Isopropyl Alcohol USP on microfiber; allow 2 minutes to flash-dry [A].',
          'Mark exact alignment coordinates with light pencil tick using torpedo level (do not score paint) [B].',
          'Attach interlocking strip pairs to frame corners; press firmly for 30 seconds per strip pair [A].',
          'Press frame against wall; gently disengage frame by lifting bottom edge straight upward [A].',
          'Press remaining wall strips firmly with thumbs for 30 seconds each; wait mandatory 60 minutes unweighted [A].'
        ]
      },
      {
        stageName: 'AFTER',
        title: 'Stage 3: Load Verification & Documentation Protocol',
        items: [
          'Re-engage frame with wall strips until audible clicks confirm mechanical hook-and-loop interlock [A].',
          'Perform physical verification: apply gentle downward 25% test load (approx 2–3 lbs manual shear) [B].',
          'Verify level alignment with 9" magnetic torpedo level across top horizontal frame edge [B].',
          'Record hardware model, installation date, and measured gross payload in maintenance records [B].',
          'Photograph completed installation in daylight; schedule 48-hour perimeter check and 30-day seasonal audit [B].'
        ]
      },
      {
        stageName: 'REMOVE',
        title: 'Stage 4: Zero-Damage Extraction & Surface Restoration Protocol',
        items: [
          'Disengage payload carefully by tilting upward from bottom edge to separate interlocking strips [A].',
          'Grip stretch-release tab and pull strictly PARALLEL to wall surface (0° downward); stretch 12–15 inches [A].',
          'If pull tab breaks: warm bracket with hair dryer on Medium for 45s, then saw downward with unflavored dental floss [B].',
          'Roll microscopic adhesive residue away with thumb friction; wipe with 70% IPA on microfiber [B].',
          'Restore any micro-pinholes with a dab of DAP Fast \'N Final lightweight spackle; wipe flush with damp sponge [B].'
        ]
      }
    ],
    troubleshootingMatrix: [
      {
        problem: 'Adhesive strip lifting or edge curling from wall surface',
        likelyCause: 'Surface oil residue, high-gloss paint sheen, or room temperature below 15°C (59°F).',
        whatToCheck: 'Check if surface was degreased with 70% IPA and verify ambient room temperature with thermometer.',
        correctiveAction: 'Degrease area with 70% IPA, apply fresh strip with 30s firm thumb pressure, and cure 60 mins unweighted.',
        stopCondition: 'Do not hang mirror or art if strip edges lift or lose tack during initial 60-minute cure window.'
      },
      {
        problem: 'Fastener loose or spinning in wall void',
        likelyCause: 'Fastener stripped drywall gypsum core or punched into hollow metal stud transition void.',
        whatToCheck: 'Check hole diameter and magnetic stud finder reading for metal stud edges.',
        correctiveAction: 'Remove fastener, relocate 2" horizontally, or switch to curved steel 3M Claw picture hangers.',
        stopCondition: 'Stop tightening screws immediately if core gypsum begins crumbling or rotating freely.'
      },
      {
        problem: 'Heavy frame tilting forward away from wall plane',
        likelyCause: 'Top-edge rotational torque or hanging wire slack creating cantilever moment.',
        whatToCheck: 'Check distance between frame top and wall; inspect hanging wire tension.',
        correctiveAction: 'Add 4 corner dual-lock strip pairs and apply bottom silicone bumper pads to balance shear.',
        stopCondition: 'Do not load frame if forward tilt exceeds 2 degrees from vertical plane.'
      },
      {
        problem: 'Paint paper tearing or creasing during adhesive strip removal',
        likelyCause: 'Outward 90-degree pull vector or wall paint applied less than 30 days ago (uncured latex).',
        whatToCheck: 'Check pull angle and verify original lease move-in painting date.',
        correctiveAction: 'Stop pulling! Apply hair dryer on medium heat for 45 seconds and saw behind bracket with dental floss.',
        stopCondition: 'Halt manual tab pulling immediately if drywall paper resistance or creasing is observed.'
      },
      {
        problem: 'Suction cup falling off bathroom tile after 24–48 hours',
        likelyCause: 'Microscopic soap scum film, textured tile glaze, or suction cup placed over grout line.',
        whatToCheck: 'Inspect suction rubber perimeter for dust/scum; check if cup spans across grout seam.',
        correctiveAction: 'Relocate cup entirely within a single glazed tile; clean tile with 70% IPA; moisten silicone rim.',
        stopCondition: 'Never use suction mounts across grout lines or on matte unglazed porous stone tiles.'
      }
    ],
    pocketCards: [
      {
        id: 'card-01',
        cardNumber: '01',
        type: 'Surface Prep',
        title: 'Surface Inspection & 70% IPA Solvent Protocol',
        purpose: 'Zero-failure adhesive bond activation without paint stripping or surface residue.',
        criticalSteps: [
          '1. KNUCKLE-TAP: Tap wall to confirm modern drywall vs heritage plaster vs solid concrete.',
          '2. PAINT AUDIT: Verify paint is cured (>30 days) and free of moisture, chalking, or bubbling.',
          '3. SOLVENT WIPE: Degrease target area firmly with 70% Isopropyl Alcohol USP on microfiber.',
          '4. FLASH DRY: Allow 2 full minutes for alcohol solvent to evaporate completely.',
          '5. TEMPERATURE CHECK: Ensure ambient room temperature is at least 15°C (59°F).'
        ],
        measurementsOrSpecs: [
          'Solvent: 70% Isopropyl Alcohol USP',
          'Flash Dry Time: 2 minutes',
          'Min Room Temp: 15°C (59°F)',
          'Max Humidity: 65% RH'
        ],
        warningCondition: 'Never use Windex, dish soap, or household wipes — surfactants leave invisible lubricative films.',
        stopCondition: 'STOP immediately if wall feels damp/cold to the touch or paint is chalky/flaking.'
      },
      {
        id: 'card-02',
        cardNumber: '02',
        type: 'Hardware & Install',
        title: 'Hardware Decision & Safe Working Load Card',
        purpose: 'Match payload gross tare weight to certified damage-free hardware with 40% safety margin.',
        criticalSteps: [
          '1. WEIGH PAYLOAD: Measure exact weight on digital kitchen scale with frame and glass.',
          '2. APPLY BUFFER: Calculate Safe Working Load: CWL = Rated_Capacity × 0.60.',
          '3. MATCH FASTENER: 0–2 lbs (Small Strips); 2–10 lbs (4 Large Pairs); 10–25 lbs (3M Claw Steel).',
          '4. 57" EYE-LEVEL: Mark tick at Height = 57" + (Frame_Height / 2) - Wire_Drop.',
          '5. 30s PRESSURE: Press interlocking strips with firm thumb pressure for 30s per strip.',
          '6. 60-MIN CURE: Disengage frame and wait 1 hour under ZERO load before hanging.'
        ],
        measurementsOrSpecs: [
          'CWL Buffer: Rated × 0.60',
          'Thumb Pressure: 30 seconds / strip',
          'Unweighted Cure: 60 minutes',
          'Eye-Level Benchmark: 57" Centerline'
        ],
        warningCondition: 'Never hang heavy mirrors, acoustic panels, or shelves above beds on adhesive alone.',
        stopCondition: 'STOP if measured payload exceeds 16 lbs for adhesive. Switch to 3M Claw or floor leaner.'
      },
      {
        id: 'card-03',
        cardNumber: '03',
        type: 'Removal & Restore',
        title: 'Zero-Damage Shearing & Spackle Touch-Up Card',
        purpose: 'Execute 100% deposit-safe hardware removal without drywall paper tear or residue.',
        criticalSteps: [
          '1. DISENGAGE: Remove payload by lifting bottom frame edge straight upward.',
          '2. PARALLEL PULL: Grip pull tab and stretch strictly parallel to wall (0° downward).',
          '3. SLOW EXTENSION: Stretch slowly 12–15 inches until elastomeric core releases cleanly.',
          '4. BROKEN TAB FIX: Warm bracket with hair dryer on Medium for 45s; saw with dental floss.',
          '5. RESIDUE ROLLING: Roll away remaining adhesive rubber film using thumb friction.',
          '6. SPACKLE DAB: Fill micro-pinholes with DAP Fast \'N Final; wipe flush with damp sponge.'
        ],
        measurementsOrSpecs: [
          'Pull Vector: 0° (Parallel to wall)',
          'Hair Dryer: Medium heat (45 sec)',
          'Floss: Unwaxed / Nylon monofilament',
          'Spackle: Lightweight micro-bubble'
        ],
        warningCondition: 'Never pull tab outward at 90° angle — outward tension causes drywall paper tears 98% of the time.',
        stopCondition: 'STOP pulling immediately if drywall paper resists. Re-apply hair dryer heat and use dental floss.'
      },
      {
        id: 'card-04',
        cardNumber: '04',
        type: 'Field Sourcing',
        title: 'Canadian Retailer Sourcing & Field Tool Kit',
        purpose: 'Essential shopping list and stop-condition supplies for on-site execution.',
        criticalSteps: [
          '• 3M Command Large Picture Hanging Strips (16-pack, Black or White).',
          '• 3M Claw Drywall Picture Hanger (15lb & 25lb 4-packs).',
          '• Lee Valley Solid Brass Moulding Hooks (for heritage plaster picture rails).',
          '• DAP Fast \'N Final Lightweight Spackling (8oz tub) + 2" plastic putty knife.',
          '• 70% Isopropyl Alcohol USP (500ml) + 2 lint-free microfiber cleaning cloths.',
          '• 9" Magnetic Torpedo Level + 16ft Steel Tape Measure + Digital Kitchen Scale.'
        ],
        measurementsOrSpecs: [
          'Estimated Total Budget: $32–$48 CAD',
          'Stores: Home Depot CA, Canadian Tire, Lee Valley, IKEA',
          'Level: 9" Magnetic Spirit Level',
          'Solvent: 70% USP Isopropyl Alcohol'
        ],
        warningCondition: 'Never buy 99% alcohol (evaporates too fast to dissolve grease) or permanent foam mounting tape.',
        stopCondition: 'STOP if fasteners lack clear weight ratings on retail packaging.'
      }
    ]
  }
};

export function getVolumeEnrichment(volumeId: string, volumeNumber: number, title: string, category: string): VolumeEnrichment {
  if (PLAYBOOK_ENRICHMENT_DATA[volumeId]) {
    return PLAYBOOK_ENRICHMENT_DATA[volumeId];
  }

  const volNumPadded = volumeNumber < 10 ? `0${volumeNumber}` : `${volumeNumber}`;
  
  return {
    volumeId,
    volumeNumber,
    diagramTitle: `Spatial Optimization & Fastener Dynamics Architecture (Vol. ${volNumPadded})`,
    diagramConcept: `Systematic Load, Clearance & Mechanical Interface Blueprint for ${category}`,
    diagramDetails: [
      `• PRIMARY LOAD PATH [A]: Engineered distribution across verified structural points in ${category}.`,
      `• ZERO-MODIFICATION PRINCIPLE [B]: 100% reversible mechanical anchoring with zero drywall or finish damage.`,
      `• CONSERVATIVE SAFETY FACTOR [B]: 40% engineering safety margin applied to all working loads (CWL = Rated * 0.60).`,
      `• DEPOSIT DEFENSE PROTOCOL [B]: Documented baseline condition verification before and after installation.`
    ],
    formulas: [
      {
        name: 'Conservative Working Load Formula (CWL)',
        formula: 'CWL = Rated_Capacity * 0.60',
        variables: [
          'CWL = Conservative Safe Working Load (lbs) [B]',
          'Rated_Capacity = Manufacturer rated peak capacity (lbs) [A]',
          '0.60 = 40% renter safety buffer [B]'
        ],
        units: 'Pounds (lbs) / Kilograms (kg)',
        workedExample: `Hardware rated at 20.0 lbs: CWL = 20.0 * 0.60 = 12.0 lbs maximum live working payload.`,
        assumptions: 'Properly prepped substrate, temperature >15°C, following manufacturer torque specs [D].',
        practicalDecision: 'Always size hardware so working weight is below CWL to prevent unexpected structural creep or substrate fatigue.'
      },
      {
        name: 'Spatial Volumetric Clearance Ratio',
        formula: 'Usable_Gain = (Vertical_Airspace_Captured / Total_Footprint_SqFt) * Efficiency_Factor',
        variables: [
          'Usable_Gain = Effective storage volume multiplier [C]',
          'Vertical_Airspace_Captured = Total cubic feet reclaimed [D]',
          'Efficiency_Factor = 0.85 (access factor) [B]'
        ],
        units: 'Cubic Feet / Sq Ft (Multiplier)',
        workedExample: 'Capturing 14 cubic feet above a 4 sq ft counter footprint yields 3.0x net usable volume gain.',
        assumptions: 'Organized with modular vertical risers and zero-drill tension mounting [D].',
        practicalDecision: 'Prioritize vertical airspace expansion before adding any floor-standing organizers.'
      }
    ],
    executionChecklist: [
      {
        stageName: 'BEFORE',
        title: 'Stage 1: Pre-Execution Substrate Audit & Dimension Verification',
        items: [
          'Verify substrate material, load-bearing limitations, and landlord lease restrictions [B].',
          'Measure target area dimensions (height, width, depth) three times with steel tape measure [B].',
          'Confirm object weights and calculate 40% safety margin using CWL = Rated * 0.60 [C].',
          'Audit surface cleanliness and verify ambient room temperature is above 15°C (59°F) [A].',
          'Review manufacturer instructions and confirm all required mounting accessories are present [A].',
          'Plan layout geometry to preserve unobstructed pathways and door swing clearances [B].',
          'Assemble complete tool kit: scale, level, solvent, measuring tape, and protective drop cloth [B].'
        ]
      },
      {
        stageName: 'DURING',
        title: 'Stage 2: Preparation & Precision Assembly Protocol',
        items: [
          'Degrease contact points with 70% Isopropyl Alcohol USP; allow 2 minutes complete air dry [A].',
          'Mark exact alignment coordinates with low-tack painter tape or light pencil tick [B].',
          'Install primary tension/adhesive/mechanical mounts according to manufacturer specifications [A].',
          'Apply firm continuous pressure (30s per contact zone) to activate chemical or friction bonding [A].',
          'Allow mandatory curing period (60 minutes for adhesives, 15 minutes for tension settling) under zero load [A].'
        ]
      },
      {
        stageName: 'AFTER',
        title: 'Stage 3: Load Verification & Documentation Protocol',
        items: [
          'Perform physical verification test: apply 25% incremental test load before adding full payload [B].',
          'Verify alignment and squareness using a magnetic torpedo level [B].',
          'Record hardware configuration, model numbers, and installation date in maintenance log [B].',
          'Photograph completed installation in clear daylight for tenancy condition records [B].',
          'Schedule regular 60-day visual check for tension integrity or adhesive edge condition [B].'
        ]
      },
      {
        stageName: 'REMOVE',
        title: 'Stage 4: Zero-Damage Removal & Surface Restoration Protocol',
        items: [
          'Carefully remove 100% of payload items to eliminate weight on supporting hardware [B].',
          'Disengage fasteners following the exact reverse protocol (parallel stretch, thermal floss release, or counter-tension release) [B].',
          'Clean contact points with 70% IPA and microfiber cloth to remove all friction or adhesive trace [B].',
          'Inspect substrate under daylight; restore minor surface marks with matching lightweight spackle if required [B].'
        ]
      }
    ],
    troubleshootingMatrix: [
      {
        problem: 'Hardware slipping or failing to maintain friction lock',
        likelyCause: 'Oil/grease film on contact surface or inadequate initial tension torque.',
        whatToCheck: 'Check surface cleanliness, rubber footpad integrity, and vertical plumb alignment.',
        correctiveAction: 'Degrease contact areas with 70% IPA, replace smooth pads with non-slip silicone pads, and re-torque tension column.',
        stopCondition: 'Do not load storage racks if vertical posts exhibit noticeable deflection or sway.'
      },
      {
        problem: 'Clearance conflict with swinging cabinet doors or drawers',
        likelyCause: 'Overlooking spatial swing radius in 3D envelope planning.',
        whatToCheck: 'Check 90-degree door swing arcs and drawer extension depths.',
        correctiveAction: 'Offset hardware 2–3 inches away from hinge swing axis or use low-profile hanging caddies.',
        stopCondition: 'Halt installation if cabinet doors cannot open to at least 90 degrees freely.'
      },
      {
        problem: 'Adhesive or tension mount showing creeping movement under load',
        likelyCause: 'Operating beyond the 40% safety working load buffer or thermal expansion.',
        whatToCheck: 'Re-weigh payload on digital scale and check proximity to heating vents or direct sunlight.',
        correctiveAction: 'Reduce payload weight to match CWL formula and relocate away from heat sources.',
        stopCondition: 'Immediately unload shelf if vertical displacement exceeds 1/16 inch over 24 hours.'
      },
      {
        problem: 'Cosmetic scuff or micro-mark visible upon hardware removal',
        likelyCause: 'Drywall dust abrasion under friction footpad or unpadded metal edge contact.',
        whatToCheck: 'Check if silicone bumper barrier was installed between metal and painted drywall.',
        correctiveAction: 'Wipe with damp microfiber, gently buff with melamine sponge dab, or dab Fast \'N Final lightweight spackle.',
        stopCondition: 'Stop abrasive scrubbing immediately to prevent creating shiny burnish spots on flat paint.'
      }
    ],
    pocketCards: [
      {
        id: `${volumeId}-card-01`,
        cardNumber: '01',
        type: 'Surface Prep',
        title: `Surface Audit & Solvent Preparation (Vol. ${volNumPadded})`,
        purpose: 'Prepare contact surfaces for maximum mechanical/friction adhesion with zero residue.',
        criticalSteps: [
          '1. INSPECT: Confirm surface is structurally sound, clean, and cured (>30 days).',
          '2. DEGREASE: Wipe contact zones thoroughly with 70% Isopropyl Alcohol USP.',
          '3. AIR DRY: Wait 2 full minutes for complete solvent evaporation.',
          '4. TEMPERATURE: Ensure ambient room temperature is above 15°C (59°F).',
          '5. PROTECTION: Install silicone buffer pads between metal hardware and painted finishes.'
        ],
        measurementsOrSpecs: ['Solvent: 70% IPA USP', 'Air Dry: 2 minutes', 'Min Temp: 15°C / 59°F'],
        warningCondition: 'Never use household multi-surface sprays or ammonia cleaners which leave lubricative residue.',
        stopCondition: 'Stop if wall or tile exhibits condensation, grease buildup, or peeling paint.'
      },
      {
        id: `${volumeId}-card-02`,
        cardNumber: '02',
        type: 'Hardware & Install',
        title: `Hardware Selection & Working Load Card (Vol. ${volNumPadded})`,
        purpose: 'Verify safe working capacity with the mandatory 40% renter safety buffer.',
        criticalSteps: [
          '1. WEIGH PAYLOAD: Measure exact weight of all intended items on digital scale.',
          '2. CALCULATE CWL: Safe Working Load = Rated_Capacity × 0.60.',
          '3. POSITIONING: Check 3D clearance for doors, drawers, and human traffic paths.',
          '4. LEVEL ALIGNMENT: Use magnetic torpedo level to ensure true horizontal/vertical alignment.',
          '5. SETTLING CURE: Allow 60 minutes unweighted rest before applying full working payload.'
        ],
        measurementsOrSpecs: ['Safety Buffer: 40% deduction', 'Cure Time: 60 mins unweighted'],
        warningCondition: 'Never exceed the calculated CWL limit regardless of manufacturer promotional ratings.',
        stopCondition: 'If payload causes any structural deflection or creaking, remove payload immediately.'
      },
      {
        id: `${volumeId}-card-03`,
        cardNumber: '03',
        type: 'Removal & Restore',
        title: `Zero-Damage Disassembly & Restoration (Vol. ${volNumPadded})`,
        purpose: 'Execute 100% deposit-safe hardware removal and baseline condition restoration.',
        criticalSteps: [
          '1. UNLOAD: Remove 100% of stored items before touching mounting hardware.',
          '2. DISENGAGE: Release tension mechanisms or stretch adhesive tabs parallel to surface (0°).',
          '3. RESIDUE REMOVAL: Roll adhesive residue away with thumb; clean with 70% IPA.',
          '4. SPACKLE RESTORATION: Dab pinholes with lightweight spackle; wipe flush with damp sponge.',
          '5. PHOTO AUDIT: Capture daylight photographs of restored wall/cabinet surfaces.'
        ],
        measurementsOrSpecs: ['Pull Vector: 0° parallel', 'Spackle: Lightweight vinyl/micro-bubble', 'Inspection: Daylight photo'],
        warningCondition: 'Never pry metal brackets away with metal tools or screwdrivers.',
        stopCondition: 'Stop pulling immediately if any substrate resistance is felt; switch to thermal release.'
      },
      {
        id: `${volumeId}-card-04`,
        cardNumber: '04',
        type: 'Field Sourcing',
        title: `Retail Sourcing & Hardware Checklist (Vol. ${volNumPadded})`,
        purpose: 'Verified hardware store SKUs, required tools, and estimated budget.',
        criticalSteps: [
          '• Primary certified tension/adhesive modular hardware SKUs.',
          '• Silicone protective bumper pads (transparent 1/2" diameter dots).',
          '• 70% Isopropyl Alcohol USP + 2 lint-free microfiber cleaning cloths.',
          '• DAP Fast \'N Final Lightweight Spackling + 2" plastic flexible putty knife.',
          '• 9" Magnetic Torpedo Level + 16ft Steel Measuring Tape + Digital Kitchen Scale.'
        ],
        measurementsOrSpecs: ['Estimated Sourcing Budget: $28–$55 CAD', 'Stores: Home Depot CA, Canadian Tire, IKEA CA'],
        warningCondition: 'Always verify weight rating on original retail packaging before purchasing.',
        stopCondition: 'Do not substitute untested generic unrated mounting tape for certified hardware.'
      }
    ]
  };
}
