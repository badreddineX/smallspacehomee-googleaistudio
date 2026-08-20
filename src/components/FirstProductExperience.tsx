import React, { useState, useEffect, useRef } from 'react';
import { 
  Home, 
  Layers, 
  Calculator, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  Sparkles, 
  Download, 
  Copy, 
  Printer, 
  Play, 
  Pause, 
  RotateCcw, 
  ArrowRight, 
  Sliders, 
  Maximize2, 
  AlertTriangle, 
  Sun, 
  Moon, 
  Box, 
  Grid, 
  Compass, 
  Check, 
  ExternalLink,
  Flame,
  Award
} from 'lucide-react';

export const FirstProductExperience: React.FC = () => {
  const [activeModuleTab, setActiveModuleTab] = useState<'module1' | 'module2' | 'module3' | 'module4' | 'module5' | 'module6'>('module1');
  const [copiedNotionSchema, setCopiedNotionSchema] = useState(false);
  const [showPrintView, setShowPrintView] = useState(false);

  // -------------------------------------------------------------
  // MODULE 1 STATE: Spatial Assessment & Interactive Floorplan Grid
  // -------------------------------------------------------------
  const [floorplanPreset, setFloorplanPreset] = useState<'studio-450' | 'onebed-580' | 'micro-320' | 'custom'>('studio-450');
  const [roomLengthFt, setRoomLengthFt] = useState<number>(18);
  const [roomWidthFt, setRoomWidthFt] = useState<number>(12);
  const [sofaLengthInches, setSofaLengthInches] = useState<number>(80);
  const [sofaDepthInches, setSofaDepthInches] = useState<number>(36);
  const [coffeeTableDepthInches, setCoffeeTableDepthInches] = useState<number>(22);
  const [tvConsoleDepthInches, setTvConsoleDepthInches] = useState<number>(14);
  const [includeDesk, setIncludeDesk] = useState<boolean>(true);
  const [includeDiningNook, setIncludeDiningNook] = useState<boolean>(true);

  // Clearance calculations (converted to inches)
  const roomWidthInches = roomWidthFt * 12;
  const occupiedLivingDepth = sofaDepthInches + coffeeTableDepthInches + tvConsoleDepthInches;
  const mainWalkwayInches = roomWidthInches - occupiedLivingDepth;
  const isWalkwayOptimal = mainWalkwayInches >= 66; // 36" primary path + 18" coffee-to-sofa + 12" console gap
  const isWalkwayTight = mainWalkwayInches >= 48 && mainWalkwayInches < 66;

  const handlePresetChange = (preset: 'studio-450' | 'onebed-580' | 'micro-320' | 'custom') => {
    setFloorplanPreset(preset);
    if (preset === 'studio-450') {
      setRoomLengthFt(19);
      setRoomWidthFt(13);
      setSofaLengthInches(78);
      setSofaDepthInches(34);
      setCoffeeTableDepthInches(20);
      setTvConsoleDepthInches(14);
      setIncludeDesk(true);
      setIncludeDiningNook(true);
    } else if (preset === 'onebed-580') {
      setRoomLengthFt(22);
      setRoomWidthFt(14);
      setSofaLengthInches(84);
      setSofaDepthInches(38);
      setCoffeeTableDepthInches(24);
      setTvConsoleDepthInches(16);
      setIncludeDesk(true);
      setIncludeDiningNook(true);
    } else if (preset === 'micro-320') {
      setRoomLengthFt(16);
      setRoomWidthFt(10);
      setSofaLengthInches(68);
      setSofaDepthInches(32);
      setCoffeeTableDepthInches(18);
      setTvConsoleDepthInches(12);
      setIncludeDesk(false);
      setIncludeDiningNook(true);
    }
  };

  // -------------------------------------------------------------
  // MODULE 2 STATE: Vertical Storage & Structural Load Calculator
  // -------------------------------------------------------------
  const [wallType, setWallType] = useState<'drywall-metal' | 'drywall-wood' | 'hollow-drywall' | 'brick-masonry'>('drywall-metal');
  const [mountType, setMountType] = useState<'command-jumbo' | 'monkey-hook' | 'heavy-toggle' | 'tension-rod'>('monkey-hook');
  const [shelfLengthInches, setShelfLengthInches] = useState<number>(36);
  const [shelfDepthInches, setShelfDepthInches] = useState<number>(10);
  const [itemWeightLbs, setItemWeightLbs] = useState<number>(18);
  const [verticalElevationFt, setVerticalElevationFt] = useState<number>(7.5);

  const getHardwareSpecs = () => {
    switch (mountType) {
      case 'command-jumbo':
        return { ratedLbs: 8, maxSafeLbs: 6, toolFree: true, damageRisk: '0% (Zero Damage)', bestFor: 'Light art, key racks, lightweight acrylic shelves' };
      case 'monkey-hook':
        return { ratedLbs: 35, maxSafeLbs: 25, toolFree: true, damageRisk: '< 1mm Pin Hole (Deposit Safe)', bestFor: 'Framed mirrors, hanging wall shelves, heavy artwork' };
      case 'heavy-toggle':
        return { ratedLbs: 80, maxSafeLbs: 55, toolFree: false, damageRisk: 'Requires Spackle upon move-out', bestFor: 'Solid wood book shelves, TV mounts' };
      case 'tension-rod':
        return { ratedLbs: 25, maxSafeLbs: 20, toolFree: true, damageRisk: '0% (Compression Grip)', bestFor: 'Closet double-hanging, window herb gardens, room dividers' };
    }
  };

  const hardwareSpec = getHardwareSpecs();
  const isLoadSafe = itemWeightLbs <= hardwareSpec.maxSafeLbs;
  const loadPercentage = Math.min(100, Math.round((itemWeightLbs / hardwareSpec.ratedLbs) * 100));
  const cubicFeetGained = ((shelfLengthInches * shelfDepthInches * 24) / 1728).toFixed(1);

  // -------------------------------------------------------------
  // MODULE 3 STATE: 30-Day Ruthless Declutter Protocol
  // -------------------------------------------------------------
  const [completedTasks, setCompletedTasks] = useState<Record<string, boolean>>({
    'w1-d1': true,
    'w1-d2': true,
    'w1-d3': true,
    'w1-d4': false,
    'w1-d5': false,
    'w2-d1': false,
    'w2-d2': false,
    'w3-d1': false,
    'w4-d1': false
  });

  const declutterSchedule = [
    {
      week: 'Week 1: The High-Friction Entry & Kitchen Zones',
      days: [
        { id: 'w1-d1', day: 'Day 01', zone: 'Entryway Drop Zone', task: 'Purge shoes down to max 3 daily pairs; mount tool-free key dock', category: 'High-Impact' },
        { id: 'w1-d2', day: 'Day 02', zone: 'Kitchen Counter Zero', task: 'Clear all small appliances off main counter into designated lower bins', category: 'Visual Clear' },
        { id: 'w1-d3', day: 'Day 03', zone: 'Pantry Bulk Audit', task: 'Decant bulky cereal & pasta boxes into uniform stackable square containers', category: 'Volume Reduction' },
        { id: 'w1-d4', day: 'Day 04', zone: 'Under-Sink Plumbing Zone', task: 'Install 2-tier expandable tension shelf around sink drain P-trap', category: 'Vertical Architecture' },
        { id: 'w1-d5', day: 'Day 05', zone: 'Spatial Quarantine Box #1', task: 'Place duplicate mugs and cooking tools in 14-day quarantine box', category: 'Quarantine Protocol' }
      ]
    },
    {
      week: 'Week 2: Living & Work Sanctuary Architecture',
      days: [
        { id: 'w2-d1', day: 'Day 08', zone: 'Coffee Table Surface Audit', task: 'Remove all magazines & loose cables; install under-table magnetic cable tray', category: 'Cable Conceal' },
        { id: 'w2-d2', day: 'Day 10', zone: 'Hybrid Desk Boundary Protocol', task: 'Establish the 5:00 PM foldaway routine for laptop, monitor and notes', category: 'Zoning' },
        { id: 'w2-d3', day: 'Day 12', zone: 'Sofa & Throw Pillow Cap', task: 'Cap throw pillows at exactly 2 pieces; store excess throws in footstool cavity', category: 'Aesthetic Rule' }
      ]
    },
    {
      week: 'Week 3: The Capsule Closet & Vertical Wardrobe',
      days: [
        { id: 'w3-d1', day: 'Day 15', zone: 'Closet 1st Tier Double Hanging', task: 'Add tension hanging rod to drop shirt clearance and double closet capacity', category: 'Capacity Double' },
        { id: 'w3-d2', day: 'Day 18', zone: 'Seasonal Vacuum Compression', task: 'Seal heavy winter parkas and bedding into flat under-bed vacuum packs', category: 'Sub-Bed Vault' }
      ]
    },
    {
      week: 'Week 4: Final Quarantine Liquidation & Peace Audit',
      days: [
        { id: 'w4-d1', day: 'Day 25', zone: 'Quarantine Box Liquidation', task: 'Donate or sell 100% of items remaining untouched in Quarantine Box #1', category: 'Final Exit' },
        { id: 'w4-d2', day: 'Day 30', zone: 'Sanctuary Certification Walk', task: 'Perform 360-degree room clearance check and celebrate 30 days of calm', category: 'Mastery' }
      ]
    }
  ];

  const totalTaskCount = Object.keys(completedTasks).length;
  const finishedTaskCount = Object.values(completedTasks).filter(Boolean).length;
  const declutterProgressPct = Math.round((finishedTaskCount / totalTaskCount) * 100);

  const toggleDeclutterTask = (id: string) => {
    setCompletedTasks(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // -------------------------------------------------------------
  // MODULE 4 STATE: 3-Layer Lighting Formula & Kelvin Engine
  // -------------------------------------------------------------
  const [roomAreaSqFt, setRoomAreaSqFt] = useState<number>(220);
  const [ceilingHeightFt, setCeilingHeightFt] = useState<number>(9);
  const [primaryRoomUse, setPrimaryRoomUse] = useState<'living' | 'bedroom' | 'studio-multipurpose'>('studio-multipurpose');

  const getLightingCalculations = () => {
    // Standard interior design foot-candle / lumens benchmarks
    const lumensMultiplier = primaryRoomUse === 'bedroom' ? 15 : primaryRoomUse === 'living' ? 20 : 25;
    const heightFactor = ceilingHeightFt > 8 ? 1 + (ceilingHeightFt - 8) * 0.1 : 1;
    const totalLumensNeeded = Math.round(roomAreaSqFt * lumensMultiplier * heightFactor);

    return {
      totalLumens: totalLumensNeeded,
      layer1Ambient: Math.round(totalLumensNeeded * 0.50), // 50% indirect ceiling / diffused
      layer2Task: Math.round(totalLumensNeeded * 0.35),    // 35% focused desk / reading / counter
      layer3Accent: Math.round(totalLumensNeeded * 0.15),  // 15% warm floor glow / art spotlight
      recommendedAmbientKelvin: '2700K Warm Neutral',
      recommendedTaskKelvin: '3000K Clean White',
      recommendedAccentKelvin: '2200K Candle Amber'
    };
  };

  const lightingSpecs = getLightingCalculations();

  // -------------------------------------------------------------
  // MODULE 5 STATE: 12-Minute Reset Timer Engine
  // -------------------------------------------------------------
  const [timerSeconds, setTimerSeconds] = useState<number>(720); // 12 minutes = 720 seconds
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);
  const [currentResetPhase, setCurrentResetPhase] = useState<'kitchen' | 'living' | 'entryway'>('kitchen');
  const [resetStreak, setResetStreak] = useState<number>(14);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isTimerRunning && timerSeconds > 0) {
      timerRef.current = setInterval(() => {
        setTimerSeconds(prev => {
          if (prev <= 1) {
            setIsTimerRunning(false);
            return 0;
          }
          const next = prev - 1;
          // Determine phase
          if (next > 480) setCurrentResetPhase('kitchen');
          else if (next > 240) setCurrentResetPhase('living');
          else setCurrentResetPhase('entryway');
          return next;
        });
      }, 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isTimerRunning, timerSeconds]);

  const toggleTimer = () => {
    setIsTimerRunning(prev => !prev);
  };

  const resetTimer = () => {
    setIsTimerRunning(false);
    setTimerSeconds(720);
    setCurrentResetPhase('kitchen');
  };

  const formatTimerTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  // -------------------------------------------------------------
  // MODULE 6 STATE: Notion Hub Connected Schema Explorer
  // -------------------------------------------------------------
  const [activeNotionTable, setActiveNotionTable] = useState<'furniture' | 'clearance' | 'maintenance' | 'hardware'>('furniture');

  const notionDatabaseSchemas = {
    furniture: [
      { item: 'Stockholm Minimal 3-Seater Sofa', roomZone: 'Living Room', length: '82"', depth: '35"', height: '31"', clearanceReq: '36" walkway', floorFootprint: '19.9 sq ft', purchaseDate: '2025-04-12' },
      { item: 'Slim Travertine Coffee Plinth', roomZone: 'Living Room', length: '38"', depth: '18"', height: '14"', clearanceReq: '18" sofa gap', floorFootprint: '4.75 sq ft', purchaseDate: '2025-05-01' },
      { item: 'Floating Bamboo Drop-Leaf Desk', roomZone: 'Hybrid Nook', length: '32"', depth: '12"-24"', height: '29"', clearanceReq: '30" pull-out', floorFootprint: '2.6 sq ft', purchaseDate: '2025-06-15' },
      { item: 'Under-Bed Solid Oak Rolling Drawers (Pair)', roomZone: 'Bedroom', length: '36"', depth: '28"', height: '8"', clearanceReq: 'Zero floor footprint', floorFootprint: 'Hidden Vault', purchaseDate: '2025-07-02' }
    ],
    clearance: [
      { zone: 'Primary Living-to-Kitchen Thoroughfare', requiredClearance: '36" minimum', currentActual: '38.5"', status: 'Optimal (Pass)', notes: 'Allows two adults to cross comfortably without shoulder turning' },
      { zone: 'Coffee Table to Sofa Edge', requiredClearance: '16" – 18"', currentActual: '17.0"', status: 'Optimal (Pass)', notes: 'Permits leg stretching while reaching beverage easily' },
      { zone: 'Dining Chair Pull-Out Margin', requiredClearance: '32" from table edge', currentActual: '34.0"', status: 'Optimal (Pass)', notes: 'Full chair slide without scuffing perimeter wall baseboard' },
      { zone: 'Entryway Front Door Swing Arc', requiredClearance: '36" clear radius', currentActual: '37.0"', status: 'Optimal (Pass)', notes: 'Zero shoe clutter in the door swing perimeter' }
    ],
    maintenance: [
      { task: 'Reverse Peel-and-Stick Tile Inspection', frequency: 'Every 6 Months', tool: 'Gentle Hair Dryer Test', damageRisk: 'None if warmed', status: 'Verified Solid' },
      { task: 'Tension Rod Compression Recalibration', frequency: 'Quarterly', tool: 'Hand Twist', damageRisk: 'Zero', status: 'Inspected' },
      { task: 'Baseboard Protection Pad Check', frequency: 'Annually', tool: 'Felt Replacement', damageRisk: 'Zero', status: 'Updated' }
    ],
    hardware: [
      { fixture: 'Living Room Brushed Brass Dome Pendant', originalStoredIn: 'Bin #04 (Original Renter Hardware)', adapterType: 'E26 Tool-Free Screw In', restoreTimeMin: '4 min' },
      { fixture: 'Kitchen Cabinet Minimalist Bar Pulls (x10)', originalStoredIn: 'Bin #04 (Plastic Bag labeled KITCHEN)', adapterType: 'Standard 3" Center-to-Center', restoreTimeMin: '8 min' },
      { fixture: 'Entryway Modern Magnetic Key Bar', originalStoredIn: 'Command Strip Release Tabs', adapterType: 'Zero-Drill Adhesive', restoreTimeMin: '1 min' }
    ]
  };

  const handleCopyNotionTemplate = () => {
    const fullMarkdownExport = `# SmallSpaceHome: The Small Space Operating System (SS-OS)
Master Architectural Notion Hub & Digital Workspace Architecture
Version: 1.0.4 | License: Lifetime Personal | Brand: shop.smallspacehome.ca

## Connected Database 01: Furniture Footprint & Clearance Matrix
${JSON.stringify(notionDatabaseSchemas.furniture, null, 2)}

## Connected Database 02: Architectural Clearance Standard
${JSON.stringify(notionDatabaseSchemas.clearance, null, 2)}

## Connected Database 03: Renter Deposit & Hardware Restoration Log
${JSON.stringify(notionDatabaseSchemas.hardware, null, 2)}

## Connected Database 04: 30-Day Declutter Protocols & Milestones
- Week 1: Entryway & Kitchen Counter Zero
- Week 2: Living & Work Sanctuary Architecture
- Week 3: Capsule Closet & Vertical Double-Hanging
- Week 4: Quarantine Liquidation & 360 Sanctuary Audit

## Daily Rhythm Engine (12-Minute Reset Protocol)
1. 00:00 - 04:00: Kitchen Counter Zero
2. 04:00 - 08:00: Living Room Surface Reset
3. 08:00 - 12:00: Entryway Drop Zone & Tomorrow Launchpad
`;
    navigator.clipboard.writeText(fullMarkdownExport);
    setCopiedNotionSchema(true);
    setTimeout(() => setCopiedNotionSchema(false), 2500);
  };

  return (
    <div className="space-y-10 pb-16">
      
      {/* Product Master Masthead Header */}
      <section className="bg-[#FAF9F6] border-b-2 border-[#1A1A1A] pb-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="bg-[#1A1A1A] text-white px-2.5 py-0.5 text-[9px] uppercase tracking-[0.2em] font-bold">
                Product #1 / Flagship System
              </span>
              <span className="bg-[#5A5A40] text-white px-2.5 py-0.5 text-[9px] uppercase tracking-[0.2em] font-bold">
                Edition 1.0.4 Master Suite
              </span>
              <span className="text-[#5A5A40] font-bold text-xs uppercase tracking-wider font-mono">
                shop.smallspacehome.ca ($79 CAD)
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1A1A1A] tracking-tight leading-tight">
              The Small Space Operating System (SS-OS)
            </h1>

            <p className="text-sm sm:text-base text-[#1A1A1A]/80 font-serif italic max-w-2xl leading-relaxed">
              The definitive architectural master system for small-space living, furniture proportioning, vertical storage engineering, and intentional dwelling.
            </p>
          </div>

          {/* Action Hub */}
          <div className="flex flex-wrap sm:flex-nowrap items-center gap-2.5 self-start lg:self-center">
            <button
              onClick={handleCopyNotionTemplate}
              className="flex items-center gap-2 px-4 py-2.5 bg-[#1A1A1A] hover:bg-[#333] text-white text-xs font-bold uppercase tracking-wider transition-all cursor-pointer border border-[#1A1A1A] shadow-[2px_2px_0_0_#5A5A40]"
            >
              {copiedNotionSchema ? <Check className="w-4 h-4 text-white" /> : <Copy className="w-4 h-4 text-[#A0A090]" />}
              <span>{copiedNotionSchema ? 'Notion Hub Copied!' : 'Copy Notion OS Schema'}</span>
            </button>

            <button
              onClick={() => window.print()}
              className="flex items-center gap-2 px-3.5 py-2.5 bg-white hover:bg-[#F2F1EC] text-[#1A1A1A] text-xs font-bold uppercase tracking-wider transition-all cursor-pointer border border-[#1A1A1A] shadow-[2px_2px_0_0_#1A1A1A]"
            >
              <Printer className="w-4 h-4 text-[#5A5A40]" />
              <span>Print Room Sheet</span>
            </button>
          </div>
        </div>

        {/* 6 Core Product Modules Interactive Navigation Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mt-8 pt-6 border-t border-[#1A1A1A]/15">
          {[
            { id: 'module1', num: '01', label: 'Spatial Blueprint', sub: 'Clearance & Grid', icon: Grid },
            { id: 'module2', num: '02', label: 'Vertical Storage', sub: 'Load & Capacity', icon: Box },
            { id: 'module3', num: '03', label: '30-Day Declutter', sub: 'Zone Schedule', icon: CheckCircle2 },
            { id: 'module4', num: '04', label: 'Renter Aesthetic', sub: '3-Layer Lighting', icon: Sun },
            { id: 'module5', num: '05', label: 'Daily Reset Engine', sub: '12-Min Routine', icon: Clock },
            { id: 'module6', num: '06', label: 'Notion Master Vault', sub: 'Connected DBs', icon: Layers }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeModuleTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveModuleTab(tab.id as any)}
                className={`p-3 text-left border transition-all cursor-pointer flex flex-col justify-between ${
                  isActive
                    ? 'bg-[#1A1A1A] text-[#FAF9F6] border-[#1A1A1A] shadow-[3px_3px_0_0_#5A5A40]'
                    : 'bg-white text-[#1A1A1A] border-[#1A1A1A]/30 hover:border-[#1A1A1A] hover:bg-[#FAF9F6]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-[9px] font-bold uppercase tracking-[0.2em] ${isActive ? 'text-[#A0A090]' : 'text-[#5A5A40]'}`}>
                    Module {tab.num}
                  </span>
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-[#5A5A40]'}`} />
                </div>
                <div className="mt-2">
                  <span className="text-xs font-serif font-bold block leading-tight">
                    {tab.label}
                  </span>
                  <span className={`text-[10px] font-mono block mt-0.5 ${isActive ? 'text-[#FAF9F6]/70' : 'text-[#1A1A1A]/60'}`}>
                    {tab.sub}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* MODULE 01: SPATIAL ASSESSMENT & INTERACTIVE SCALE FLOORPLAN GRID */}
      {/* ========================================================================= */}
      {activeModuleTab === 'module1' && (
        <div className="space-y-8 animate-in fade-in duration-200">
          
          {/* Module Description & Strategy */}
          <div className="bg-white border border-[#1A1A1A] p-6 sm:p-8 shadow-[3px_3px_0_0_#1A1A1A] flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#5A5A40] block">
                Interactive Spatial Blueprint • Architectural Scale
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1A1A1A]">
                Walkway Clearance & Proportion Calculator
              </h2>
              <p className="text-xs sm:text-sm text-[#1A1A1A]/80 font-sans leading-relaxed">
                The "Two-Inch Error" destroys small space flow. In spaces under 800 sq ft, buying a sofa or console that is just 2" too deep reduces main corridor clearance below the 36" architectural minimum.
              </p>
            </div>

            {/* Presets Bar */}
            <div className="bg-[#FAF9F6] p-3.5 border border-[#1A1A1A]/20 space-y-2 shrink-0">
              <span className="text-[9px] font-bold uppercase tracking-wider text-[#5A5A40] block">
                Load Space Preset:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {[
                  { id: 'studio-450', label: '450 sq ft Studio' },
                  { id: 'onebed-580', label: '580 sq ft 1-Bed' },
                  { id: 'micro-320', label: '320 sq ft Micro' }
                ].map((p) => (
                  <button
                    key={p.id}
                    onClick={() => handlePresetChange(p.id as any)}
                    className={`px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider border cursor-pointer transition-all ${
                      floorplanPreset === p.id
                        ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]'
                        : 'bg-white text-[#1A1A1A] border-[#1A1A1A]/30 hover:border-[#1A1A1A]'
                    }`}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Interactive Sliders & Live 2D Visual Floorplan */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Control Column */}
            <div className="lg:col-span-5 space-y-4">
              <div className="bg-white border border-[#1A1A1A] p-5 shadow-[2px_2px_0_0_#1A1A1A] space-y-4">
                <h3 className="font-serif font-bold text-base text-[#1A1A1A] border-b border-[#1A1A1A]/15 pb-2 flex items-center justify-between">
                  <span>Room & Furniture Dimensions</span>
                  <Sliders className="w-4 h-4 text-[#5A5A40]" />
                </h3>

                {/* Sliders */}
                <div className="space-y-3.5 text-xs">
                  <div>
                    <div className="flex justify-between font-bold">
                      <label className="text-[#1A1A1A]">Room Width (Corridor Span)</label>
                      <span className="font-mono text-[#5A5A40]">{roomWidthFt} ft ({roomWidthFt * 12}")</span>
                    </div>
                    <input
                      type="range"
                      min={9}
                      max={18}
                      step={0.5}
                      value={roomWidthFt}
                      onChange={(e) => setRoomWidthFt(Number(e.target.value))}
                      className="w-full accent-[#5A5A40] cursor-pointer mt-1"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between font-bold">
                      <label className="text-[#1A1A1A]">Room Length</label>
                      <span className="font-mono text-[#5A5A40]">{roomLengthFt} ft</span>
                    </div>
                    <input
                      type="range"
                      min={12}
                      max={26}
                      step={0.5}
                      value={roomLengthFt}
                      onChange={(e) => setRoomLengthFt(Number(e.target.value))}
                      className="w-full accent-[#5A5A40] cursor-pointer mt-1"
                    />
                  </div>

                  <div className="pt-2 border-t border-[#1A1A1A]/10">
                    <div className="flex justify-between font-bold">
                      <label className="text-[#1A1A1A]">Sofa Depth (Wall to Front)</label>
                      <span className="font-mono text-[#5A5A40]">{sofaDepthInches}"</span>
                    </div>
                    <input
                      type="range"
                      min={28}
                      max={44}
                      step={1}
                      value={sofaDepthInches}
                      onChange={(e) => setSofaDepthInches(Number(e.target.value))}
                      className="w-full accent-[#5A5A40] cursor-pointer mt-1"
                    />
                    <span className="text-[10px] text-[#1A1A1A]/60 font-serif italic">Compact Small Space standard is 32"–35"</span>
                  </div>

                  <div>
                    <div className="flex justify-between font-bold">
                      <label className="text-[#1A1A1A]">Coffee Table Width</label>
                      <span className="font-mono text-[#5A5A40]">{coffeeTableDepthInches}"</span>
                    </div>
                    <input
                      type="range"
                      min={14}
                      max={32}
                      step={1}
                      value={coffeeTableDepthInches}
                      onChange={(e) => setCoffeeTableDepthInches(Number(e.target.value))}
                      className="w-full accent-[#5A5A40] cursor-pointer mt-1"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between font-bold">
                      <label className="text-[#1A1A1A]">TV Media Console Depth</label>
                      <span className="font-mono text-[#5A5A40]">{tvConsoleDepthInches}"</span>
                    </div>
                    <input
                      type="range"
                      min={10}
                      max={22}
                      step={1}
                      value={tvConsoleDepthInches}
                      onChange={(e) => setTvConsoleDepthInches(Number(e.target.value))}
                      className="w-full accent-[#5A5A40] cursor-pointer mt-1"
                    />
                  </div>
                </div>

                {/* Additional Zones Toggles */}
                <div className="pt-3 border-t border-[#1A1A1A]/15 space-y-2">
                  <span className="text-[9px] font-bold uppercase tracking-wider text-[#5A5A40] block">Include Micro-Zones:</span>
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-medium text-[#1A1A1A]">Dedicated Hybrid Desk Nook</span>
                    <button
                      onClick={() => setIncludeDesk(prev => !prev)}
                      className={`px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider border cursor-pointer ${
                        includeDesk ? 'bg-[#5A5A40] text-white border-[#5A5A40]' : 'bg-white text-[#1A1A1A] border-[#1A1A1A]/30'
                      }`}
                    >
                      {includeDesk ? 'ACTIVE' : 'OFF'}
                    </button>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-medium text-[#1A1A1A]">Bistro Dining / Drop-Leaf Table</span>
                    <button
                      onClick={() => setIncludeDiningNook(prev => !prev)}
                      className={`px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider border cursor-pointer ${
                        includeDiningNook ? 'bg-[#5A5A40] text-white border-[#5A5A40]' : 'bg-white text-[#1A1A1A] border-[#1A1A1A]/30'
                      }`}
                    >
                      {includeDiningNook ? 'ACTIVE' : 'OFF'}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* 2D Architectural Floorplan & Clearance Verdict */}
            <div className="lg:col-span-7 space-y-4">
              
              {/* Floorplan Canvas Container */}
              <div className="bg-[#FAF9F6] border-2 border-[#1A1A1A] p-6 shadow-[3px_3px_0_0_#1A1A1A] space-y-4">
                <div className="flex items-center justify-between border-b border-[#1A1A1A]/15 pb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 bg-[#5A5A40]" />
                    <span className="text-xs font-serif font-bold text-[#1A1A1A] uppercase tracking-wider">
                      Architectural Floorplan Rendering (Scale 1/4" : 1')
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-[#5A5A40] font-bold">
                    {(roomLengthFt * roomWidthFt)} Sq Ft Total
                  </span>
                </div>

                {/* SVG Visual Schematic Layout */}
                <div className="relative w-full aspect-[4/3] bg-white border border-[#1A1A1A] p-4 flex flex-col justify-between overflow-hidden shadow-inner">
                  
                  {/* Grid Lines Overlay */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#1A1A1A08_1px,transparent_1px),linear-gradient(to_bottom,#1A1A1A08_1px,transparent_1px)] bg-[size:16px_16px]" />

                  {/* Top Wall: TV Console Zone */}
                  <div className="relative z-10 flex justify-between items-start">
                    <div className="bg-[#5A5A40] text-white text-[9px] font-bold uppercase tracking-wider px-2 py-1 border border-[#1A1A1A] shadow-sm">
                      Wall A: Media Unit ({tvConsoleDepthInches}" Depth)
                    </div>
                    {includeDesk && (
                      <div className="bg-[#1A1A1A] text-white text-[9px] font-bold uppercase tracking-wider px-2 py-1 border border-[#1A1A1A]">
                        Hybrid Desk (32" x 18")
                      </div>
                    )}
                  </div>

                  {/* Middle: Traffic Clearance Zone */}
                  <div className={`relative z-10 my-auto p-3 border text-center transition-all ${
                    isWalkwayOptimal
                      ? 'bg-[#5A5A40]/15 border-[#5A5A40] text-[#1A1A1A]'
                      : isWalkwayTight
                      ? 'bg-amber-100/70 border-amber-600 text-amber-950'
                      : 'bg-red-100 border-red-600 text-red-950'
                  }`}>
                    <div className="text-xs font-serif font-bold flex items-center justify-center gap-2">
                      <span>Primary Traffic Corridor Clearance:</span>
                      <span className="font-mono text-sm underline font-bold">{mainWalkwayInches}" Remaining</span>
                    </div>
                    <span className="text-[10px] block mt-0.5 font-sans">
                      {isWalkwayOptimal
                        ? '✓ Optimal Flow: Exceeds 36" primary walkway standard. Two adults can pass without turning.'
                        : isWalkwayTight
                        ? '⚠ Tight Clearance: Walkway between 48"–65". Consider a 32" depth sofa or nesting coffee table.'
                        : '❌ Pinch Point Detected: Corridor < 48". Furniture depth gridlock will cause door/drawer blockage.'}
                    </span>
                  </div>

                  {/* Bottom Wall: Sofa & Dining Nook */}
                  <div className="relative z-10 flex justify-between items-end">
                    <div className="bg-[#1A1A1A] text-white text-[9px] font-bold uppercase tracking-wider px-3 py-2 border border-[#1A1A1A] shadow-sm">
                      Sofa & Lounge Zone ({sofaLengthInches}" W x {sofaDepthInches}" D)
                    </div>
                    {includeDiningNook && (
                      <div className="bg-[#FAF9F6] text-[#1A1A1A] text-[9px] font-bold uppercase tracking-wider px-2.5 py-1.5 border border-[#1A1A1A] shadow-sm">
                        Drop-Leaf Dining (28" Sq)
                      </div>
                    )}
                  </div>
                </div>

                {/* Mathematical Summary Card */}
                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="bg-white p-2.5 border border-[#1A1A1A]/20 shadow-sm">
                    <span className="text-[9px] uppercase font-bold text-[#5A5A40] block">Occupied Depth</span>
                    <span className="font-mono font-bold text-sm text-[#1A1A1A]">{occupiedLivingDepth}"</span>
                  </div>
                  <div className="bg-white p-2.5 border border-[#1A1A1A]/20 shadow-sm">
                    <span className="text-[9px] uppercase font-bold text-[#5A5A40] block">Free Corridor</span>
                    <span className="font-mono font-bold text-sm text-[#5A5A40]">{mainWalkwayInches}"</span>
                  </div>
                  <div className="bg-white p-2.5 border border-[#1A1A1A]/20 shadow-sm">
                    <span className="text-[9px] uppercase font-bold text-[#5A5A40] block">Flow Verdict</span>
                    <span className={`font-serif font-bold text-xs ${isWalkwayOptimal ? 'text-[#5A5A40]' : 'text-red-700'}`}>
                      {isWalkwayOptimal ? 'APPROVED' : 'RECALIBRATE'}
                    </span>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      )}

      {/* ========================================================================= */}
      {/* MODULE 02: VERTICAL STORAGE & RENTER-SAFE LOAD CALCULATOR */}
      {/* ========================================================================= */}
      {activeModuleTab === 'module2' && (
        <div className="space-y-8 animate-in fade-in duration-200">
          
          <div className="bg-white border border-[#1A1A1A] p-6 sm:p-8 shadow-[3px_3px_0_0_#1A1A1A] space-y-3">
            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#5A5A40] block">
              Vertical Engineering • Zero-Damage Guarantee
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1A1A1A]">
              Vertical Cubic Capacity & Structural Anchor Calculator
            </h2>
            <p className="text-xs sm:text-sm text-[#1A1A1A]/80 font-sans leading-relaxed max-w-3xl">
              Small apartments lack square footage, but they possess identical 8-to-10 foot vertical air space. By activating the 6.5ft–8.5ft elevation band safely without drywall damage, you immediately expand storage capacity by 40%.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Input Parameters */}
            <div className="bg-white border border-[#1A1A1A] p-6 shadow-[2px_2px_0_0_#1A1A1A] space-y-5">
              <h3 className="font-serif font-bold text-base text-[#1A1A1A] border-b border-[#1A1A1A]/15 pb-2">
                1. Mounting Specifications & Anchor Selection
              </h3>

              <div className="space-y-4 text-xs">
                {/* Wall Type Selection */}
                <div>
                  <label className="text-[#1A1A1A] font-bold block mb-1.5">Rental Substrate / Wall Construction</label>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { id: 'drywall-metal', label: 'Drywall (Metal Studs)' },
                      { id: 'drywall-wood', label: 'Drywall (Wood Studs)' },
                      { id: 'hollow-drywall', label: 'Hollow Drywall (No Stud)' },
                      { id: 'brick-masonry', label: 'Exposed Brick / Masonry' }
                    ].map((w) => (
                      <button
                        key={w.id}
                        onClick={() => setWallType(w.id as any)}
                        className={`p-2.5 text-left border text-xs cursor-pointer transition-all ${
                          wallType === w.id
                            ? 'bg-[#1A1A1A] text-white border-[#1A1A1A] font-bold'
                            : 'bg-[#FAF9F6] text-[#1A1A1A] border-[#1A1A1A]/20 hover:border-[#1A1A1A]'
                        }`}
                      >
                        {w.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Mounting Mechanism */}
                <div>
                  <label className="text-[#1A1A1A] font-bold block mb-1.5">Mounting Hardware Mechanism</label>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { id: 'command-jumbo', label: 'Command Jumbo (3.4kg)' },
                      { id: 'monkey-hook', label: 'OOK Monkey Hook (15kg)' },
                      { id: 'heavy-toggle', label: 'Snaptoggle Anchor (35kg)' },
                      { id: 'tension-rod', label: 'Vertical Tension System' }
                    ].map((m) => (
                      <button
                        key={m.id}
                        onClick={() => setMountType(m.id as any)}
                        className={`p-2.5 text-left border text-xs cursor-pointer transition-all ${
                          mountType === m.id
                            ? 'bg-[#5A5A40] text-white border-[#5A5A40] font-bold'
                            : 'bg-[#FAF9F6] text-[#1A1A1A] border-[#1A1A1A]/20 hover:border-[#1A1A1A]'
                        }`}
                      >
                        {m.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Sliders for Shelf Dimensions & Weight */}
                <div className="space-y-3 pt-2">
                  <div>
                    <div className="flex justify-between font-bold">
                      <label className="text-[#1A1A1A]">Shelf Length</label>
                      <span className="font-mono text-[#5A5A40]">{shelfLengthInches}"</span>
                    </div>
                    <input
                      type="range"
                      min={18}
                      max={60}
                      step={2}
                      value={shelfLengthInches}
                      onChange={(e) => setShelfLengthInches(Number(e.target.value))}
                      className="w-full accent-[#5A5A40] cursor-pointer"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between font-bold">
                      <label className="text-[#1A1A1A]">Estimated Item Weight (Books, Planters, Decor)</label>
                      <span className="font-mono text-[#5A5A40]">{itemWeightLbs} lbs</span>
                    </div>
                    <input
                      type="range"
                      min={2}
                      max={50}
                      step={1}
                      value={itemWeightLbs}
                      onChange={(e) => setItemWeightLbs(Number(e.target.value))}
                      className="w-full accent-[#5A5A40] cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Engineering Safety Analysis & Cubic Gain */}
            <div className="bg-[#FAF9F6] border border-[#1A1A1A] p-6 shadow-[2px_2px_0_0_#1A1A1A] space-y-6 flex flex-col justify-between">
              <div>
                <h3 className="font-serif font-bold text-base text-[#1A1A1A] border-b border-[#1A1A1A]/15 pb-2 flex items-center justify-between">
                  <span>2. Structural Safety Factor & Deposit Risk</span>
                  <ShieldCheck className="w-4 h-4 text-[#5A5A40]" />
                </h3>

                <div className="space-y-4 pt-4 text-xs">
                  {/* Load Rating Gauge */}
                  <div className="bg-white p-4 border border-[#1A1A1A]/20 space-y-2">
                    <div className="flex justify-between font-bold">
                      <span>Rated Capacity Utilization:</span>
                      <span className={`font-mono ${isLoadSafe ? 'text-[#5A5A40]' : 'text-red-700'}`}>{loadPercentage}%</span>
                    </div>
                    <div className="w-full bg-[#FAF9F6] h-3 border border-[#1A1A1A]/30 overflow-hidden">
                      <div
                        className={`h-full transition-all duration-300 ${
                          isLoadSafe ? 'bg-[#5A5A40]' : 'bg-red-600'
                        }`}
                        style={{ width: `${loadPercentage}%` }}
                      />
                    </div>
                    <div className="flex justify-between text-[10px] text-[#1A1A1A]/60 font-mono">
                      <span>Applied: {itemWeightLbs} lbs</span>
                      <span>Safe Limit: {hardwareSpec.maxSafeLbs} lbs</span>
                    </div>
                  </div>

                  {/* Hardware Spec Card */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white p-3 border border-[#1A1A1A]/20">
                      <span className="text-[9px] uppercase font-bold text-[#5A5A40] block">Deposit Impact</span>
                      <span className="font-bold text-[#1A1A1A] text-xs block mt-1">{hardwareSpec.damageRisk}</span>
                    </div>
                    <div className="bg-white p-3 border border-[#1A1A1A]/20">
                      <span className="text-[9px] uppercase font-bold text-[#5A5A40] block">Installation Tooling</span>
                      <span className="font-bold text-[#1A1A1A] text-xs block mt-1">{hardwareSpec.toolFree ? 'Zero Tools Required' : 'Requires Pilot Drill'}</span>
                    </div>
                  </div>

                  {/* Cubic Volume Gained */}
                  <div className="bg-[#1A1A1A] text-white p-4 border border-[#1A1A1A] shadow-[2px_2px_0_0_#5A5A40] space-y-1">
                    <span className="text-[9px] uppercase font-bold tracking-wider text-[#A0A090] block">
                      Vertical Storage Volume Gained
                    </span>
                    <div className="text-2xl font-serif font-bold text-white">
                      +{cubicFeetGained} Cubic Feet
                    </div>
                    <p className="text-[11px] text-[#FAF9F6]/70 font-serif italic">
                      Equivalent to freeing up 3 full storage bins of floor clutter.
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-[11px] text-[#1A1A1A]/80 font-sans border-t border-[#1A1A1A]/10 pt-3">
                <strong>Best Practice:</strong> {hardwareSpec.bestFor}.
              </div>
            </div>

          </div>

        </div>
      )}

      {/* ========================================================================= */}
      {/* MODULE 03: 30-DAY RUTHLESS DECLUTTER PROTOCOL */}
      {/* ========================================================================= */}
      {activeModuleTab === 'module3' && (
        <div className="space-y-8 animate-in fade-in duration-200">
          
          <div className="bg-white border border-[#1A1A1A] p-6 sm:p-8 shadow-[3px_3px_0_0_#1A1A1A] flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#5A5A40] block">
                Spatial Psychology • Milestone Roadmap
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1A1A1A]">
                The 30-Day Ruthless Declutter Protocol
              </h2>
              <p className="text-xs sm:text-sm text-[#1A1A1A]/80 font-sans leading-relaxed">
                Standard decluttering advice fails in apartments because there is no attic or garage buffer. This protocol uses the <strong>14-Day Spatial Quarantine Box</strong> to eliminate emotional friction without regret.
              </p>
            </div>

            {/* Progress Gauge */}
            <div className="bg-[#FAF9F6] border border-[#1A1A1A] p-4 text-center min-w-[170px] shadow-[2px_2px_0_0_#1A1A1A]">
              <span className="text-[9px] font-bold uppercase tracking-wider text-[#5A5A40] block">Declutter Completion</span>
              <span className="font-serif font-bold text-3xl text-[#1A1A1A]">{declutterProgressPct}%</span>
              <div className="w-full bg-white h-2 border border-[#1A1A1A]/30 mt-2 overflow-hidden">
                <div className="h-full bg-[#5A5A40] transition-all" style={{ width: `${declutterProgressPct}%` }} />
              </div>
              <span className="text-[10px] text-[#1A1A1A]/60 block mt-1">{finishedTaskCount} of {totalTaskCount} Milestones Done</span>
            </div>
          </div>

          {/* 4-Week Schedule Checklist */}
          <div className="space-y-6">
            {declutterSchedule.map((weekBlock, wIdx) => (
              <div key={wIdx} className="bg-white border border-[#1A1A1A] p-6 shadow-[2px_2px_0_0_#1A1A1A] space-y-4">
                <div className="border-b border-[#1A1A1A]/15 pb-2">
                  <h3 className="font-serif font-bold text-lg text-[#1A1A1A]">
                    {weekBlock.week}
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                  {weekBlock.days.map((item) => {
                    const isDone = completedTasks[item.id] || false;
                    return (
                      <div
                        key={item.id}
                        onClick={() => toggleDeclutterTask(item.id)}
                        className={`p-3.5 border flex items-start justify-between gap-3 transition-all cursor-pointer ${
                          isDone
                            ? 'bg-[#F2F1EC] border-[#5A5A40]/40 text-[#1A1A1A]'
                            : 'bg-[#FAF9F6] border-[#1A1A1A]/20 text-[#1A1A1A] hover:border-[#1A1A1A]'
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          {isDone ? (
                            <CheckCircle2 className="w-4 h-4 text-[#5A5A40] shrink-0 mt-0.5" />
                          ) : (
                            <div className="w-4 h-4 rounded-full border border-[#1A1A1A]/40 shrink-0 mt-0.5" />
                          )}
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <span className="font-mono text-[10px] font-bold text-[#5A5A40] uppercase">
                                {item.day} • {item.zone}
                              </span>
                            </div>
                            <p className={`font-sans leading-relaxed ${isDone ? 'line-through text-[#1A1A1A]/50 font-normal' : 'font-bold text-[#1A1A1A]'}`}>
                              {item.task}
                            </p>
                          </div>
                        </div>

                        <span className="text-[9px] font-bold uppercase tracking-wider text-[#5A5A40] bg-white px-2 py-0.5 border border-[#1A1A1A]/20 shrink-0">
                          {item.category}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

        </div>
      )}

      {/* ========================================================================= */}
      {/* MODULE 04: RENTER AESTHETIC BLUEPRINT & 3-LAYER LIGHTING FORMULA */}
      {/* ========================================================================= */}
      {activeModuleTab === 'module4' && (
        <div className="space-y-8 animate-in fade-in duration-200">
          
          <div className="bg-white border border-[#1A1A1A] p-6 sm:p-8 shadow-[3px_3px_0_0_#1A1A1A] space-y-3">
            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#5A5A40] block">
              Optical Expansion • Renter Upgrades
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1A1A1A]">
              The 3-Layer Lighting Formula & Tool-Free Hardware Upgrades
            </h2>
            <p className="text-xs sm:text-sm text-[#1A1A1A]/80 font-sans leading-relaxed max-w-3xl">
              Harsh single overhead "boob lights" flatten a small apartment, making walls feel suffocatingly close. By calculating and layering ambient, task, and accent lumens, you create optical depth and visual zoning.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Lighting Calculator Controls */}
            <div className="lg:col-span-5 bg-white border border-[#1A1A1A] p-6 shadow-[2px_2px_0_0_#1A1A1A] space-y-5">
              <h3 className="font-serif font-bold text-base text-[#1A1A1A] border-b border-[#1A1A1A]/15 pb-2 flex items-center justify-between">
                <span>Room Photometric Parameters</span>
                <Sun className="w-4 h-4 text-[#5A5A40]" />
              </h3>

              <div className="space-y-4 text-xs">
                <div>
                  <div className="flex justify-between font-bold">
                    <label className="text-[#1A1A1A]">Floor Surface Area</label>
                    <span className="font-mono text-[#5A5A40]">{roomAreaSqFt} Sq Ft</span>
                  </div>
                  <input
                    type="range"
                    min={100}
                    max={600}
                    step={10}
                    value={roomAreaSqFt}
                    onChange={(e) => setRoomAreaSqFt(Number(e.target.value))}
                    className="w-full accent-[#5A5A40] cursor-pointer mt-1"
                  />
                </div>

                <div>
                  <div className="flex justify-between font-bold">
                    <label className="text-[#1A1A1A]">Ceiling Height</label>
                    <span className="font-mono text-[#5A5A40]">{ceilingHeightFt} Feet</span>
                  </div>
                  <input
                    type="range"
                    min={8}
                    max={12}
                    step={0.5}
                    value={ceilingHeightFt}
                    onChange={(e) => setCeilingHeightFt(Number(e.target.value))}
                    className="w-full accent-[#5A5A40] cursor-pointer mt-1"
                  />
                </div>

                <div>
                  <label className="text-[#1A1A1A] font-bold block mb-1.5">Primary Zone Function</label>
                  <div className="grid grid-cols-3 gap-1.5">
                    {[
                      { id: 'living', label: 'Living Zone' },
                      { id: 'bedroom', label: 'Bedroom' },
                      { id: 'studio-multipurpose', label: 'Studio All-in-1' }
                    ].map((mode) => (
                      <button
                        key={mode.id}
                        onClick={() => setPrimaryRoomUse(mode.id as any)}
                        className={`p-2 text-center text-[10px] font-bold uppercase tracking-wider border cursor-pointer ${
                          primaryRoomUse === mode.id
                            ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]'
                            : 'bg-[#FAF9F6] text-[#1A1A1A] border-[#1A1A1A]/20 hover:border-[#1A1A1A]'
                        }`}
                      >
                        {mode.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* 3-Layer Output Specs */}
            <div className="lg:col-span-7 space-y-4">
              <div className="bg-[#FAF9F6] border border-[#1A1A1A] p-6 shadow-[2px_2px_0_0_#1A1A1A] space-y-4">
                <div className="flex items-center justify-between border-b border-[#1A1A1A]/15 pb-2">
                  <span className="font-serif font-bold text-base text-[#1A1A1A]">
                    Target Photometric Balance: {lightingSpecs.totalLumens} Lumens
                  </span>
                  <span className="text-[10px] font-mono text-[#5A5A40] font-bold uppercase">
                    3-Layer Distribution
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  {/* Layer 1: Ambient */}
                  <div className="bg-white p-4 border border-[#1A1A1A]/20 space-y-2 shadow-sm">
                    <span className="text-[9px] font-bold uppercase tracking-wider text-[#5A5A40] block">Layer 01: Ambient (50%)</span>
                    <div className="text-lg font-serif font-bold text-[#1A1A1A]">{lightingSpecs.layer1Ambient} Lumens</div>
                    <span className="text-[10px] font-mono text-[#5A5A40] block font-bold">{lightingSpecs.recommendedAmbientKelvin}</span>
                    <p className="text-[11px] text-[#1A1A1A]/70 font-sans">Diffused paper pendant or uplight wall washers bouncing light off ceiling.</p>
                  </div>

                  {/* Layer 2: Task */}
                  <div className="bg-white p-4 border border-[#1A1A1A]/20 space-y-2 shadow-sm">
                    <span className="text-[9px] font-bold uppercase tracking-wider text-[#5A5A40] block">Layer 02: Task (35%)</span>
                    <div className="text-lg font-serif font-bold text-[#1A1A1A]">{lightingSpecs.layer2Task} Lumens</div>
                    <span className="text-[10px] font-mono text-[#5A5A40] block font-bold">{lightingSpecs.recommendedTaskKelvin}</span>
                    <p className="text-[11px] text-[#1A1A1A]/70 font-sans">Under-cabinet LED tape in kitchen; articulated reading sconce beside sofa.</p>
                  </div>

                  {/* Layer 3: Accent */}
                  <div className="bg-white p-4 border border-[#1A1A1A]/20 space-y-2 shadow-sm">
                    <span className="text-[9px] font-bold uppercase tracking-wider text-[#5A5A40] block">Layer 03: Accent (15%)</span>
                    <div className="text-lg font-serif font-bold text-[#1A1A1A]">{lightingSpecs.layer3Accent} Lumens</div>
                    <span className="text-[10px] font-mono text-[#5A5A40] block font-bold">{lightingSpecs.recommendedAccentKelvin}</span>
                    <p className="text-[11px] text-[#1A1A1A]/70 font-sans">Low-level bookshelf glow, picture frame spotlight, floor corner glow.</p>
                  </div>
                </div>

                <div className="bg-[#1A1A1A] text-white p-4 border border-[#1A1A1A] text-xs flex items-center justify-between">
                  <span className="font-serif font-bold text-sm">Renter 5-Minute Restore Rule:</span>
                  <span className="text-[#A0A090] text-[11px] font-mono">Store original bulbs in Box #4</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      )}

      {/* ========================================================================= */}
      {/* MODULE 05: 12-MINUTE MORNING CALM & NIGHTLY RESET ENGINE */}
      {/* ========================================================================= */}
      {activeModuleTab === 'module5' && (
        <div className="space-y-8 animate-in fade-in duration-200">
          
          <div className="bg-white border border-[#1A1A1A] p-6 sm:p-8 shadow-[3px_3px_0_0_#1A1A1A] flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#5A5A40] block">
                Daily Spatial Rhythm • Frictionless Habits
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1A1A1A]">
                The 12-Minute Morning Calm & Nightly Reset Engine
              </h2>
              <p className="text-xs sm:text-sm text-[#1A1A1A]/80 font-sans leading-relaxed">
                In small spaces, clutter compounds exponentially. A single coffee mug and unopened letter left on a counter takes up 25% of the room's visual surface. This 12-minute rhythm maintains effortless order daily.
              </p>
            </div>

            {/* Streak Counter */}
            <div className="bg-[#FAF9F6] border border-[#1A1A1A] p-4 text-center min-w-[170px] shadow-[2px_2px_0_0_#1A1A1A]">
              <div className="flex items-center justify-center gap-1 text-[#5A5A40]">
                <Flame className="w-4 h-4 fill-[#5A5A40]" />
                <span className="text-[9px] font-bold uppercase tracking-wider">Current Streak</span>
              </div>
              <span className="font-serif font-bold text-3xl text-[#1A1A1A]">{resetStreak} Days</span>
              <span className="text-[10px] text-[#5A5A40] block font-semibold mt-0.5">Automated Habit Lock</span>
            </div>
          </div>

          {/* Interactive Live Timer & 3-Phase Choreography */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Timer Clock Box */}
            <div className="lg:col-span-5 bg-[#1A1A1A] text-[#FAF9F6] p-8 border border-[#1A1A1A] shadow-[4px_4px_0_0_#5A5A40] flex flex-col justify-between items-center text-center space-y-6">
              <div className="space-y-1">
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#A0A090] block">
                  Active Reset Countdown
                </span>
                <span className="font-mono text-5xl sm:text-6xl font-bold tracking-tight text-white">
                  {formatTimerTime(timerSeconds)}
                </span>
              </div>

              {/* Phase Indicator */}
              <div className="bg-white/10 px-4 py-2 border border-white/20 text-xs w-full">
                <span className="text-[#A0A090] text-[9px] uppercase font-bold tracking-wider block">Current Phase:</span>
                <span className="font-serif font-bold text-sm text-white capitalize mt-0.5 block">
                  {currentResetPhase === 'kitchen' && 'Phase 1: Kitchen Counter Zero (0:00 – 4:00)'}
                  {currentResetPhase === 'living' && 'Phase 2: Living Surface Clear (4:00 – 8:00)'}
                  {currentResetPhase === 'entryway' && 'Phase 3: Entryway & Launchpad (8:00 – 12:00)'}
                </span>
              </div>

              {/* Timer Buttons */}
              <div className="flex items-center gap-3">
                <button
                  onClick={toggleTimer}
                  className="flex items-center gap-2 px-5 py-2.5 bg-white text-[#1A1A1A] font-bold text-xs uppercase tracking-wider hover:bg-[#FAF9F6] transition-all cursor-pointer border border-white shadow-sm"
                >
                  {isTimerRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  <span>{isTimerRunning ? 'Pause Routine' : 'Start 12-Min Reset'}</span>
                </button>
                <button
                  onClick={resetTimer}
                  className="p-2.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all cursor-pointer"
                  title="Reset to 12 minutes"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* 3 Micro-Phase Choreography Steps */}
            <div className="lg:col-span-7 space-y-3">
              {[
                {
                  phase: 'Phase 1: Kitchen Counter Zero (4 Mins)',
                  target: '00:00 – 04:00',
                  active: currentResetPhase === 'kitchen',
                  items: [
                    'Dishes into washer or dried & put into vertical drying rack',
                    'Wipe main prep counter with natural citrus spray',
                    'Return salt/oil canisters to cabinet lazy susan'
                  ]
                },
                {
                  phase: 'Phase 2: Living Room Surface Reset (4 Mins)',
                  target: '04:00 – 08:00',
                  active: currentResetPhase === 'living',
                  items: [
                    'Fold throw blanket into clean hotel fold over sofa arm',
                    'Fluff 2 accent cushions and return TV remote to hidden plinth',
                    'Dock coffee mugs in sink and sweep coffee table clear'
                  ]
                },
                {
                  phase: 'Phase 3: Entryway & Tomorrow Launchpad (4 Mins)',
                  target: '08:00 – 12:00',
                  active: currentResetPhase === 'entryway',
                  items: [
                    'Keys, wallet, and headphones docked onto magnetic entryway bar',
                    'Shoes aligned on 2-tier shoe riser (max 3 daily pairs)',
                    'Water bottle filled and placed by door for tomorrow'
                  ]
                }
              ].map((step, idx) => (
                <div
                  key={idx}
                  className={`p-4 border transition-all ${
                    step.active
                      ? 'bg-white border-[#1A1A1A] shadow-[3px_3px_0_0_#5A5A40]'
                      : 'bg-[#FAF9F6] border-[#1A1A1A]/20 opacity-80'
                  }`}
                >
                  <div className="flex items-center justify-between border-b border-[#1A1A1A]/10 pb-2">
                    <span className="font-serif font-bold text-sm text-[#1A1A1A]">{step.phase}</span>
                    <span className="text-[10px] font-mono font-bold text-[#5A5A40] bg-white px-2 py-0.5 border border-[#1A1A1A]/15">
                      {step.target}
                    </span>
                  </div>
                  <ul className="mt-2.5 space-y-1.5 text-xs text-[#1A1A1A]">
                    {step.items.map((it, iIdx) => (
                      <li key={iIdx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#5A5A40] shrink-0" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

          </div>

        </div>
      )}

      {/* ========================================================================= */}
      {/* MODULE 06: NOTION OS CONNECTED DATABASE VAULT */}
      {/* ========================================================================= */}
      {activeModuleTab === 'module6' && (
        <div className="space-y-8 animate-in fade-in duration-200">
          
          <div className="bg-white border border-[#1A1A1A] p-6 sm:p-8 shadow-[3px_3px_0_0_#1A1A1A] flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#5A5A40] block">
                Digital Operating System • Notion 1-Click Vault
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1A1A1A]">
                The Connected Notion Master Database Hub
              </h2>
              <p className="text-xs sm:text-sm text-[#1A1A1A]/80 font-sans leading-relaxed">
                6 pre-configured relational databases connecting your furniture dimensions, walkway clearance calculations, lease terms, and landlord-safe hardware specs.
              </p>
            </div>

            <button
              onClick={handleCopyNotionTemplate}
              className="flex items-center gap-2 px-4 py-2.5 bg-[#1A1A1A] hover:bg-[#333] text-white text-xs font-bold uppercase tracking-wider transition-all cursor-pointer border border-[#1A1A1A] shadow-[2px_2px_0_0_#5A5A40] shrink-0"
            >
              {copiedNotionSchema ? <Check className="w-4 h-4 text-white" /> : <Copy className="w-4 h-4 text-[#A0A090]" />}
              <span>{copiedNotionSchema ? 'Notion Schema Copied!' : 'Export Notion JSON / Schema'}</span>
            </button>
          </div>

          {/* Notion Table Switcher */}
          <div className="flex flex-wrap gap-2 border-b border-[#1A1A1A]/15 pb-2">
            {[
              { id: 'furniture', label: '1. Furniture Inventory & Footprint' },
              { id: 'clearance', label: '2. Clearance Standards Audit' },
              { id: 'maintenance', label: '3. Seasonal Renter Maintenance' },
              { id: 'hardware', label: '4. Hardware & Paint Restore Vault' }
            ].map((tbl) => (
              <button
                key={tbl.id}
                onClick={() => setActiveNotionTable(tbl.id as any)}
                className={`px-3.5 py-1.5 text-xs font-serif font-bold border transition-all cursor-pointer ${
                  activeNotionTable === tbl.id
                    ? 'bg-[#1A1A1A] text-white border-[#1A1A1A] shadow-sm'
                    : 'bg-white text-[#1A1A1A] border-[#1A1A1A]/20 hover:border-[#1A1A1A]'
                }`}
              >
                {tbl.label}
              </button>
            ))}
          </div>

          {/* Interactive Notion Table View */}
          <div className="bg-white border border-[#1A1A1A] shadow-[3px_3px_0_0_#1A1A1A] overflow-x-auto">
            
            {activeNotionTable === 'furniture' && (
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-[#F2F1EC] border-b border-[#1A1A1A] text-[#5A5A40] uppercase tracking-wider text-[9px] font-bold font-mono">
                    <th className="p-3.5 border-r border-[#1A1A1A]/15">Furniture Item</th>
                    <th className="p-3.5 border-r border-[#1A1A1A]/15">Room Zone</th>
                    <th className="p-3.5 border-r border-[#1A1A1A]/15">Dimensions (L x D x H)</th>
                    <th className="p-3.5 border-r border-[#1A1A1A]/15">Clearance Requirement</th>
                    <th className="p-3.5">Floor Footprint</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#1A1A1A]/10 text-[#1A1A1A]">
                  {notionDatabaseSchemas.furniture.map((row, idx) => (
                    <tr key={idx} className="hover:bg-[#FAF9F6]">
                      <td className="p-3.5 font-bold border-r border-[#1A1A1A]/15 font-serif">{row.item}</td>
                      <td className="p-3.5 border-r border-[#1A1A1A]/15">{row.roomZone}</td>
                      <td className="p-3.5 border-r border-[#1A1A1A]/15 font-mono">{row.length} x {row.depth} x {row.height}</td>
                      <td className="p-3.5 border-r border-[#1A1A1A]/15 text-[#5A5A40] font-semibold">{row.clearanceReq}</td>
                      <td className="p-3.5 font-mono">{row.floorFootprint}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}

            {activeNotionTable === 'clearance' && (
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-[#F2F1EC] border-b border-[#1A1A1A] text-[#5A5A40] uppercase tracking-wider text-[9px] font-bold font-mono">
                    <th className="p-3.5 border-r border-[#1A1A1A]/15">Traffic Zone</th>
                    <th className="p-3.5 border-r border-[#1A1A1A]/15">Architectural Minimum</th>
                    <th className="p-3.5 border-r border-[#1A1A1A]/15">Measured Clearance</th>
                    <th className="p-3.5 border-r border-[#1A1A1A]/15">Status</th>
                    <th className="p-3.5">Spatial Recommendation</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#1A1A1A]/10 text-[#1A1A1A]">
                  {notionDatabaseSchemas.clearance.map((row, idx) => (
                    <tr key={idx} className="hover:bg-[#FAF9F6]">
                      <td className="p-3.5 font-bold border-r border-[#1A1A1A]/15 font-serif">{row.zone}</td>
                      <td className="p-3.5 border-r border-[#1A1A1A]/15 font-mono">{row.requiredClearance}</td>
                      <td className="p-3.5 border-r border-[#1A1A1A]/15 font-mono font-bold">{row.currentActual}</td>
                      <td className="p-3.5 border-r border-[#1A1A1A]/15">
                        <span className="bg-[#5A5A40] text-white px-2 py-0.5 text-[9px] uppercase font-bold tracking-wider">
                          {row.status}
                        </span>
                      </td>
                      <td className="p-3.5 text-xs text-[#1A1A1A]/80">{row.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}

            {activeNotionTable === 'maintenance' && (
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-[#F2F1EC] border-b border-[#1A1A1A] text-[#5A5A40] uppercase tracking-wider text-[9px] font-bold font-mono">
                    <th className="p-3.5 border-r border-[#1A1A1A]/15">Preventive Task</th>
                    <th className="p-3.5 border-r border-[#1A1A1A]/15">Inspection Frequency</th>
                    <th className="p-3.5 border-r border-[#1A1A1A]/15">Required Tool</th>
                    <th className="p-3.5">Verification Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#1A1A1A]/10 text-[#1A1A1A]">
                  {notionDatabaseSchemas.maintenance.map((row, idx) => (
                    <tr key={idx} className="hover:bg-[#FAF9F6]">
                      <td className="p-3.5 font-bold border-r border-[#1A1A1A]/15 font-serif">{row.task}</td>
                      <td className="p-3.5 border-r border-[#1A1A1A]/15 font-mono">{row.frequency}</td>
                      <td className="p-3.5 border-r border-[#1A1A1A]/15">{row.tool}</td>
                      <td className="p-3.5 font-bold text-[#5A5A40]">{row.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}

            {activeNotionTable === 'hardware' && (
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-[#F2F1EC] border-b border-[#1A1A1A] text-[#5A5A40] uppercase tracking-wider text-[9px] font-bold font-mono">
                    <th className="p-3.5 border-r border-[#1A1A1A]/15">Aesthetic Fixture</th>
                    <th className="p-3.5 border-r border-[#1A1A1A]/15">Original Landlord Hardware Location</th>
                    <th className="p-3.5 border-r border-[#1A1A1A]/15">Adapter Mechanism</th>
                    <th className="p-3.5">Move-Out Restore Time</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#1A1A1A]/10 text-[#1A1A1A]">
                  {notionDatabaseSchemas.hardware.map((row, idx) => (
                    <tr key={idx} className="hover:bg-[#FAF9F6]">
                      <td className="p-3.5 font-bold border-r border-[#1A1A1A]/15 font-serif">{row.fixture}</td>
                      <td className="p-3.5 border-r border-[#1A1A1A]/15 font-mono text-[#5A5A40]">{row.originalStoredIn}</td>
                      <td className="p-3.5 border-r border-[#1A1A1A]/15">{row.adapterType}</td>
                      <td className="p-3.5 font-mono font-bold">{row.restoreTimeMin}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}

          </div>

        </div>
      )}

    </div>
  );
};
