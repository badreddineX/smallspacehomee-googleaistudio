export interface FormulaItem {
  name: string;
  formula: string;
  variables: string[];
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
    diagramTitle: 'Shear Force vs. Cantilever Rotational Torque Diagram',
    diagramConcept: 'Wall Fastener Physics on Modern 1/2" Drywall & Plaster Substrates',
    diagramDetails: [
      '• SHEAR LOAD (Parallel to wall): Hook-and-loop strips bear 90% of payload downward.',
      '• CANTILEVER TORQUE (Pull-out force): Protruding shelf adds outward rotational moment: M = Weight × Depth.',
      '• CRITICAL RULE: For every 2" of shelf projection, dynamic load capacity decreases by 35%.',
      '• ZERO-DAMAGE THRESHOLD: True zero-damage is capped at 16 lbs using 4 corner dual-lock strip pairs.'
    ],
    formulas: [
      {
        name: 'Conservative Working Load Formula (40% Safety Buffer)',
        formula: 'CWL = Rated_Capacity * 0.60',
        variables: ['CWL = Safe Working Load (lbs)', 'Rated_Capacity = Manufacturer tested maximum load (lbs)', '0.60 = 40% renter safety buffer'],
        workedExample: 'Four 3M Command Large Strips rated at 16 lbs: CWL = 16 * 0.60 = 9.6 lbs maximum live payload.',
        assumptions: 'Smooth, cured latex paint surface (>30 days), degreased with 70% IPA, 20°C ambient room temperature.',
        practicalDecision: 'If payload exceeds 9.6 lbs, upgrade from adhesive strips to 3M Claw steel pins (15–25 lb rating) to avoid drywall paper delamination.'
      },
      {
        name: '57-Inch Gallery Centerline Eye-Level Formula',
        formula: 'Hanger_Mark = 57" + (Frame_Height / 2) - Wire_Drop',
        variables: ['57" = Museum standard viewing center', 'Frame_Height = Total vertical height of frame (inches)', 'Wire_Drop = Distance from top frame edge to taut hanging bracket (inches)'],
        workedExample: 'Frame is 24" high with a 3" bracket drop: Hanger_Mark = 57 + (24 / 2) - 3 = 57 + 12 - 3 = 66" from finished floor.',
        assumptions: 'Flat floor level, standard 8–9 ft residential ceiling height.',
        practicalDecision: 'Mark exact pencil tick at 66" to guarantee the art sits on the museum 57" center line.'
      }
    ],
    executionChecklist: [
      {
        stageName: 'BEFORE',
        title: 'Stage 1: Pre-Mounting Assessment & Substrate Audit',
        items: [
          'Identify wall substrate via knuckle-tap test: resonant hollow (Drywall) vs solid dead thud (Plaster/Concrete).',
          'Record exact gross tare weight of object with glass and hardware on digital scale (do not guess).',
          'Confirm hardware compatibility and calculate 40% safety buffer (CWL = Rated * 0.60).',
          'Inspect surface condition: verify paint is cured >30 days with zero bubbling, peeling, or chalking.',
          'Review manufacturer packaging specifications and ambient room temperature (>15°C / 59°F).',
          'Confirm layout geometry and calculate exact hanger mark using the 57" Centerline Formula.',
          'Gather complete field kit: digital scale, 70% Isopropyl Alcohol USP, microfiber, torpedo level, pencil.'
        ]
      },
      {
        stageName: 'DURING',
        title: 'Stage 2: Preparation & Mechanical Fastening Protocol',
        items: [
          'Degrease target wall surface with 70% IPA on microfiber cloth; allow mandatory 2-minute air dry.',
          'Mark mounting position with faint pencil tick or low-tack blue painter tape.',
          'Attach interlocking strip pairs to frame corners with 30 seconds firm palm pressure.',
          'Press frame against wall; gently disengage frame by lifting bottom upward to leave wall strips attached.',
          'Press remaining wall strips firmly for 30 seconds each; wait mandatory 60 minutes under ZERO load for polymer cure.'
        ]
      },
      {
        stageName: 'AFTER',
        title: 'Stage 3: Load Verification & Documentation Protocol',
        items: [
          'Re-engage frame with wall strips until audible clicks confirm hook-and-loop mechanical interlock.',
          'Apply gentle downward test load (approx 2 lbs manual shear) to verify firm adhesion.',
          'Verify levelness with magnetic torpedo level across top edge.',
          'Photograph completed installation in bright daylight for tenant maintenance records.',
          'Schedule a 30-day visual inspection for installations in high-humidity zones (near bathrooms/heaters).'
        ]
      },
      {
        stageName: 'REMOVE',
        title: 'Stage 4: Zero-Damage Removal & Surface Restoration Protocol',
        items: [
          'Disengage payload carefully by tilting upward from bottom edge.',
          'Grip stretch-release tab and pull strictly PARALLEL to wall surface (0° down). Never pull outward at 90°.',
          'If pull tab breaks: apply Hair Dryer on Medium heat for 45s, then saw downward with unflavored dental floss.',
          'Clean microscopic adhesive residue with thumb friction roll and 70% IPA dab; restore pinholes with lightweight spackle dab.'
        ]
      }
    ],
    troubleshootingMatrix: [
      {
        problem: 'Adhesive strip lifting or edge curling from wall',
        likelyCause: 'Surface oil residue, high-gloss paint sheen, or room temperature below 15°C (59°F).',
        whatToCheck: 'Check if surface was degreased with 70% IPA and whether ambient temperature is warm.',
        correctiveAction: 'Degrease area with 70% IPA, apply fresh strip with 30s firm thumb pressure, and cure 60 mins unweighted.',
        stopCondition: 'Do not hang mirror/art if strip edges lift during initial 60-minute cure period.'
      },
      {
        problem: 'Fastener loose or spinning in wall void',
        likelyCause: 'Anchor stripped drywall core or punched into hollow metal stud transition void.',
        whatToCheck: 'Check hole diameter and magnetic stud finder reading for metal stud edges.',
        correctiveAction: 'Remove fastener, relocate 2" horizontally, or switch to curved steel 3M Claw picture hangers.',
        stopCondition: 'Stop tightening screws once core gypsum begins crumbling or rotating freely.'
      },
      {
        problem: 'Heavy frame tilting forward away from wall',
        likelyCause: 'High top-edge rotational torque or hanging wire slack creating cantilever moment.',
        whatToCheck: 'Check distance between frame top and wall; check wire tension.',
        correctiveAction: 'Add 4 corner dual-lock strip pairs and apply bottom silicone bumper pads to balance shear.',
        stopCondition: 'Do not load frame if forward tilt exceeds 2 degrees from vertical plane.'
      },
      {
        problem: 'Paint paper tearing during adhesive strip removal',
        likelyCause: 'Outward 90-degree pull vector or freshly painted wall uncured (<30 days).',
        whatToCheck: 'Check pull angle and verify original move-in painting date.',
        correctiveAction: 'Stop pulling! Apply hair dryer on medium heat for 45 seconds and saw behind bracket with dental floss.',
        stopCondition: 'Halt manual tab pulling immediately if drywall paper resistance or creasing is observed.'
      }
    ],
    pocketCards: [
      {
        id: 'card-01',
        cardNumber: '01',
        type: 'Surface Prep',
        title: 'Surface Inspection & 70% IPA Activation Card',
        purpose: 'Establish zero-residue bond substrate before any fastener touches paint.',
        criticalSteps: [
          '1. KNUCKLE-TAP: Tap wall to confirm modern drywall vs heritage crumbly plaster.',
          '2. PAINT TEST: Verify paint is cured (>30 days) and free of moisture or chalking.',
          '3. SOLVENT WIPE: Degrease with 70% Isopropyl Alcohol USP on microfiber; air-dry 2 min.',
          '4. ACTIVATION: Press adhesive strips with 30s firm thumb pressure per strip.',
          '5. 60-MIN CURE: Disengage payload and wait 1 hour under ZERO load for viscoelastic cure.'
        ],
        measurementsOrSpecs: ['Solvent: 70% IPA USP', 'Pressure: 30 seconds / strip', 'Cure: 60 minutes unweighted'],
        warningCondition: 'Never use Windex, dish soap, or household spray cleaners — surfactants leave non-stick films.',
        stopCondition: 'Stop immediately if ambient room temperature is below 15°C (59°F) or paint is chalking.'
      },
      {
        id: 'card-02',
        cardNumber: '02',
        type: 'Hardware & Install',
        title: 'Hardware Decision & Weight Buffer Card',
        purpose: 'Match payload gross tare weight to certified damage-free hardware with 40% safety margin.',
        criticalSteps: [
          '1. WEIGH PAYLOAD: Weigh object with glass, mat, and hardware on digital kitchen scale.',
          '2. APPLY 40% BUFFER: Calculate CWL = Rated_Capacity × 0.60.',
          '3. 0–2 LBS: Use 2 pairs Small Command Hook-and-Loop Strips.',
          '4. 2–10 LBS: Use 4 pairs Large Command Picture Hanging Strips at corners.',
          '5. 10–25 LBS: Use 3M Claw Drywall Steel Hangers (leaves 2 micro-pinholes).',
          '6. 57" CENTERLINE: Height = 57" + (Frame_Height / 2) - Wire_Drop.'
        ],
        measurementsOrSpecs: ['Gallery Centerline: 57" from floor', 'Max Adhesive Load: 16 lbs gross (9.6 lbs CWL)'],
        warningCondition: 'Never mount heavy glass, acoustic mirrors, or floating cantilever shelves above beds on adhesive.',
        stopCondition: 'If payload exceeds 25 lbs on drywall, switch to floor-resting leaner mirror with wall anti-tip strap.'
      },
      {
        id: 'card-03',
        cardNumber: '03',
        type: 'Removal & Restore',
        title: 'Zero-Damage Removal & Broken Tab Recovery Card',
        purpose: 'Execute 100% deposit-safe hardware removal without drywall paper tear or residue.',
        criticalSteps: [
          '1. DISENGAGE: Carefully remove art frame by pulling bottom edge straight upward.',
          '2. PARALLEL PULL: Grip pull tab and stretch strictly parallel to wall (0° downward).',
          '3. SLOW EXTENSION: Stretch slowly up to 15 inches until elastomeric core releases.',
          '4. BROKEN TAB FIX: Warm plastic bracket with hair dryer (Medium heat, 45 seconds).',
          '5. FLOSS SAWING: Slip unflavored dental floss behind bracket and saw downward.',
          '6. RESTORATION: Roll away residue with thumb; dab pinholes with Fast \'N Final Spackle.'
        ],
        measurementsOrSpecs: ['Pull Angle: 0° (Parallel to wall)', 'Hair Dryer: Medium heat (45s)', 'Floss: Unflavored nylon'],
        warningCondition: 'Never pull tab outward at 90° angle — outward pull tears drywall paper 98% of the time.',
        stopCondition: 'Stop pulling dry tabs if drywall paper resists. Immediately switch to thermal floss release.'
      },
      {
        id: 'card-04',
        cardNumber: '04',
        type: 'Field Sourcing',
        title: 'Hardware Store Shopping & Tool Kit Card',
        purpose: 'Verified Canadian SKU shopping checklist and tool bag essentials.',
        criticalSteps: [
          '• 3M Command Large Picture Hanging Strips (16-pack, Black or White).',
          '• 3M Claw Drywall Picture Hanger (15lb & 25lb 4-packs).',
          '• Lee Valley Solid Brass Moulding Hooks (for heritage plaster picture rails).',
          '• DAP Fast \'N Final Lightweight Spackling (8oz tub) + 2" plastic putty knife.',
          '• 70% Isopropyl Alcohol USP + 2 lint-free microfiber cleaning cloths.',
          '• Magnetic 9" Torpedo Level + 25ft Tape Measure + Digital Kitchen Scale.'
        ],
        measurementsOrSpecs: ['Estimated Total Field Budget: $32–$48 CAD', 'Stores: Home Depot CA, Canadian Tire, Lee Valley'],
        warningCondition: 'Always verify package SKU indicates genuine 3M interlocking dual-lock strips, not single-sided foam tape.',
        stopCondition: 'Do not purchase double-sided foam tape for painted drywall (causes permanent paper tear).'
      }
    ]
  }
};

export function getVolumeEnrichment(volumeId: string, volumeNumber: number, title: string, category: string): VolumeEnrichment {
  if (PLAYBOOK_ENRICHMENT_DATA[volumeId]) {
    return PLAYBOOK_ENRICHMENT_DATA[volumeId];
  }

  // Generate domain-specific enrichment dynamically for other volumes
  const volNumPadded = volumeNumber < 10 ? `0${volumeNumber}` : `${volumeNumber}`;
  
  return {
    volumeId,
    volumeNumber,
    diagramTitle: `Spatial Optimization & Fastener Dynamics Architecture (Vol. ${volNumPadded})`,
    diagramConcept: `Systematic Load, Clearance & Mechanical Interface Blueprint for ${category}`,
    diagramDetails: [
      `• PRIMARY LOAD PATH: Engineered distribution across verified structural points in ${category}.`,
      `• ZERO-MODIFICATION PRINCIPLE: 100% reversible mechanical anchoring with zero drywall or finish damage.`,
      `• CONSERVATIVE SAFETY FACTOR: 40% engineering safety margin applied to all working loads.`,
      `• DEPOSIT DEFENSE PROTOCOL: Documented baseline condition verification before and after installation.`
    ],
    formulas: [
      {
        name: 'Conservative Working Load Formula (40% Safety Buffer)',
        formula: 'CWL = Rated_Capacity * 0.60',
        variables: ['CWL = Conservative Safe Working Load (lbs)', 'Rated_Capacity = Manufacturer rated peak capacity (lbs)', '0.60 = 40% renter safety buffer'],
        workedExample: `Hardware rated at 20 lbs: CWL = 20 * 0.60 = 12.0 lbs maximum live working payload.`,
        assumptions: 'Properly prepped substrate, temperature >15°C, following manufacturer torque specs.',
        practicalDecision: 'Always size hardware so working weight is below CWL to prevent unexpected structural creep or substrate fatigue.'
      },
      {
        name: 'Spatial Volumetric Clearance Ratio',
        formula: 'Usable_Gain = (Vertical_Airspace_Captured / Total_Footprint_SqFt) * Efficiency_Factor',
        variables: ['Usable_Gain = Effective storage volume multiplier', 'Vertical_Airspace = Total cubic feet reclaimed', 'Efficiency_Factor = 0.85 (access factor)'],
        workedExample: 'Capturing 14 cubic feet above a 4 sq ft counter footprint yields 3.0x net usable volume gain.',
        assumptions: 'Organized with modular vertical risers and zero-drill tension mounting.',
        practicalDecision: 'Prioritize vertical airspace expansion before adding any floor-standing organizers.'
      }
    ],
    executionChecklist: [
      {
        stageName: 'BEFORE',
        title: 'Stage 1: Pre-Execution Substrate Audit & Dimension Verification',
        items: [
          'Verify substrate material, load-bearing limitations, and landlord lease restrictions.',
          'Measure target area dimensions (height, width, depth) three times with steel tape measure.',
          'Confirm object weights and calculate 40% safety margin using CWL = Rated * 0.60.',
          'Audit surface cleanliness and verify ambient room temperature is above 15°C (59°F).',
          'Review manufacturer instructions and confirm all required mounting accessories are present.',
          'Plan layout geometry to preserve unobstructed pathways and door swing clearances.',
          'Assemble complete tool kit: scale, level, solvent, measuring tape, and protective drop cloth.'
        ]
      },
      {
        stageName: 'DURING',
        title: 'Stage 2: Preparation & Precision Assembly Protocol',
        items: [
          'Degrease contact points with 70% Isopropyl Alcohol USP; allow 2 minutes complete air dry.',
          'Mark exact alignment coordinates with low-tack painter tape or light pencil tick.',
          'Install primary tension/adhesive/mechanical mounts according to manufacturer specifications.',
          'Apply firm continuous pressure (30s per contact zone) to activate chemical or friction bonding.',
          'Allow mandatory curing period (60 minutes for adhesives, 15 minutes for tension settling) under zero load.'
        ]
      },
      {
        stageName: 'AFTER',
        title: 'Stage 3: Load Verification & Documentation Protocol',
        items: [
          'Perform physical verification test: apply 25% incremental test load before adding full payload.',
          'Verify alignment and squareness using a magnetic torpedo level.',
          'Record hardware configuration, model numbers, and installation date in maintenance log.',
          'Photograph completed installation in clear daylight for tenancy condition records.',
          'Schedule regular 60-day visual check for tension integrity or adhesive edge condition.'
        ]
      },
      {
        stageName: 'REMOVE',
        title: 'Stage 4: Zero-Damage Removal & Surface Restoration Protocol',
        items: [
          'Carefully remove all payload items to eliminate weight on supporting hardware.',
          'Disengage fasteners following the exact reverse protocol (parallel stretch, thermal floss release, or counter-tension release).',
          'Clean contact points with 70% IPA and microfiber cloth to remove all friction or adhesive trace.',
          'Inspect substrate under daylight; restore minor surface marks with matching lightweight spackle if required.'
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
