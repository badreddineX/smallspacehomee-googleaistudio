import React, { useState } from 'react';
import { 
  CheckCircle2, 
  ShieldCheck, 
  Download, 
  AlertTriangle, 
  Sliders, 
  Layers, 
  FileText, 
  ShoppingBag, 
  ExternalLink,
  ChevronRight,
  Printer,
  Sparkles,
  Info,
  Check,
  Scale,
  RefreshCw,
  Clock,
  ArrowRight,
  TrendingUp,
  Zap
} from 'lucide-react';
import { generateProfessionalPDF } from '../utils/pdfGenerator';
import { PLAYBOOK_SERIES } from '../data/playbookSeriesData';

type SubView = 'calculator' | 'playbook' | 'field-cards' | 'checkout-delivery' | 'analytics';

export const FirstProductExperience: React.FC = () => {
  const [activeSubView, setActiveSubView] = useState<SubView>('calculator');
  const [activeChapter, setActiveChapter] = useState<number>(1);
  const [includeCheckoutBump, setIncludeCheckoutBump] = useState<boolean>(true);
  const [simulatedCheckoutComplete, setSimulatedCheckoutComplete] = useState<boolean>(false);
  const [isGeneratingPdf, setIsGeneratingPdf] = useState<boolean>(false);

  // -------------------------------------------------------------
  // CALCULATOR STATE: Substrate & Load Engineering
  // -------------------------------------------------------------
  const [substrate, setSubstrate] = useState<'drywall-metal' | 'drywall-wood' | 'plaster' | 'concrete' | 'hollow-door'>('drywall-metal');
  const [objectCategory, setObjectCategory] = useState<'mirror' | 'shelf' | 'framed-art' | 'acoustic' | 'curtain-rod' | 'coat-hook'>('mirror');
  const [targetWeightLbs, setTargetWeightLbs] = useState<number>(28);
  const [objectWidthInches, setObjectWidthInches] = useState<number>(36);
  const [anchorPoints, setAnchorPoints] = useState<number>(2);
  const [safetyFactor, setSafetyFactor] = useState<2 | 3>(2); // 2x Standard, 3x Critical
  const [hardwareChoice, setHardwareChoice] = useState<'3m-claw' | 'monkey-hook' | 'command-jumbo' | 'paracord-suspension' | 'ez-toggle' | 'silicone-tension'>('3m-claw');
  const [paintCureAgeDays, setPaintCureAgeDays] = useState<number>(45);
  const [ipaPrepped, setIpaPrepped] = useState<boolean>(true);

  // Retrieve Flagship Playbook data
  const vol01Data = PLAYBOOK_SERIES.find(p => p.id === 'playbook-01') || PLAYBOOK_SERIES[0];

  // Hardware rated specs with source basis and estimation notes
  const getHardwareDetails = (hw: typeof hardwareChoice) => {
    switch (hw) {
      case '3m-claw':
        return {
          name: '3M Claw Drywall Picture Hanger (45-lb Model)',
          ratedLbsPerPoint: 45,
          ratingType: 'Manufacturer Spec' as const,
          sourceBasis: '3M Claw™ lab shear rating in 1/2" drywall (conservative field range: 35–45 lbs/pt)',
          mechanism: 'Hardened steel prongs locking into drywall gypsum core at a 45° angle',
          requiresDrill: false,
          wallDamage: 'Minimal 4-prong puncture (< 1.5mm). Passes move-out inspection without spackle blowout.',
          costCad: 3.25,
          idealSubstrates: ['drywall-metal', 'drywall-wood'],
          adhesiveBased: false
        };
      case 'monkey-hook':
        return {
          name: 'Gorilla / Monkey Spring-Steel Hook',
          ratedLbsPerPoint: 35,
          ratingType: 'Manufacturer Spec' as const,
          sourceBasis: 'Standard spring-steel drywall hook shear rating in 1/2" drywall',
          mechanism: 'Curved spring steel self-bracing behind drywall backboard',
          requiresDrill: false,
          wallDamage: '1mm pinhole. Easily disguised or wiped flush.',
          costCad: 1.50,
          idealSubstrates: ['drywall-metal', 'drywall-wood'],
          adhesiveBased: false
        };
      case 'command-jumbo':
        return {
          name: '3M Command Jumbo Picture Strips (4-Pair Array)',
          ratedLbsPerPoint: 8,
          ratingType: 'Conservative Field Estimate' as const,
          sourceBasis: '3M Command™ 4-pair set rated up to 16 lbs; conservatively modeled at 8 lbs/pt for 50% safety factor',
          mechanism: 'Pressure-sensitive viscoelastic adhesive with interlocking micro-dual-lock',
          requiresDrill: false,
          wallDamage: 'Zero wall damage when pulled parallel or released with 60s warm air.',
          costCad: 4.50,
          idealSubstrates: ['drywall-metal', 'drywall-wood', 'plaster', 'concrete', 'hollow-door'],
          adhesiveBased: true
        };
      case 'paracord-suspension':
        return {
          name: 'Type III 550 Paracord Parallel Hanging Suspension',
          ratedLbsPerPoint: 80,
          ratingType: 'Conservative Field Estimate' as const,
          sourceBasis: 'Commercial Type III 550 Paracord 550 lb breaking strength; conservatively estimated at 80 lbs working load',
          mechanism: 'High-tensile nylon cord distributing downward load across ceiling molding or picture rail hooks',
          requiresDrill: false,
          wallDamage: 'Zero wall contact. Suspended from picture rail or tension frame.',
          costCad: 2.10,
          idealSubstrates: ['drywall-metal', 'drywall-wood', 'plaster', 'concrete'],
          adhesiveBased: false
        };
      case 'ez-toggle':
        return {
          name: 'E-Z Ancor Heavy Self-Drilling Drywall Toggle',
          ratedLbsPerPoint: 75,
          ratingType: 'Manufacturer Spec' as const,
          sourceBasis: 'E-Z Ancor heavy drywall toggle packaging specification in 1/2" drywall',
          mechanism: 'Zinc expanding toggle clamp behind 1/2" drywall cavity',
          requiresDrill: true,
          wallDamage: '1/2" hole. Requires small spackle dab at move-out.',
          costCad: 2.80,
          idealSubstrates: ['drywall-metal', 'drywall-wood'],
          adhesiveBased: false
        };
      case 'silicone-tension':
        return {
          name: 'High-Friction Silicone Spring-Tension System',
          ratedLbsPerPoint: 25,
          ratingType: 'Conservative Field Estimate' as const,
          sourceBasis: 'Spring-loaded telescopic column compression estimate with non-skid silicone pads',
          mechanism: 'Opposing spring compression with high-durometer silicone non-slip end caps',
          requiresDrill: false,
          wallDamage: 'Zero Wall Damage. Zero mechanical penetration.',
          costCad: 8.50,
          idealSubstrates: ['drywall-metal', 'drywall-wood', 'plaster', 'concrete'],
          adhesiveBased: false
        };
    }
  };

  const selectedHardware = getHardwareDetails(hardwareChoice);
  const totalHardwareCapacity = selectedHardware.ratedLbsPerPoint * anchorPoints;
  const loadPerAnchor = (targetWeightLbs / anchorPoints).toFixed(1);
  const requiredSafetyCapacity = targetWeightLbs * safetyFactor;
  const isSafetyMarginMet = totalHardwareCapacity >= requiredSafetyCapacity;
  const isExceedingMaxLimit = targetWeightLbs > totalHardwareCapacity;
  const totalHardwareCost = (selectedHardware.costCad * anchorPoints + 3.50).toFixed(2); // hardware + $3.50 prep consumables

  // Substrate compatibility check
  const isSubstrateCompatible = selectedHardware.idealSubstrates.includes(substrate);

  // Dynamic Warnings
  const warnings: { level: 'danger' | 'caution' | 'tip'; message: string }[] = [];

  if (isExceedingMaxLimit) {
    warnings.push({
      level: 'danger',
      message: `CRITICAL LOAD WARNING: Object weight (${targetWeightLbs} lbs) exceeds total rated hardware limit (${totalHardwareCapacity} lbs). Increase anchor points to at least ${Math.ceil(targetWeightLbs / selectedHardware.ratedLbsPerPoint)} points or choose higher-rated hardware.`
    });
  } else if (!isSafetyMarginMet) {
    warnings.push({
      level: 'caution',
      message: `SAFETY MARGIN ALERT: Total capacity (${totalHardwareCapacity} lbs) is under the recommended ${safetyFactor}x safety threshold (${requiredSafetyCapacity} lbs). Recommended for living areas or above sofas.`
    });
  }

  if (!isSubstrateCompatible) {
    warnings.push({
      level: 'danger',
      message: `SUBSTRATE MISMATCH: ${selectedHardware.name} is not recommended for ${substrate.replace('-', ' ').toUpperCase()}. Claw and spring hooks require hollow drywall cavity. Use adhesive or tension systems instead.`
    });
  }

  if (selectedHardware.adhesiveBased && paintCureAgeDays < 30) {
    warnings.push({
      level: 'danger',
      message: `UNCURED PAINT RISK: Paint cured for less than 30 days (${paintCureAgeDays} days entered) may delaminate under adhesive tension. Wait until 30 days or use mechanical spring hooks.`
    });
  }

  if (selectedHardware.adhesiveBased && !ipaPrepped) {
    warnings.push({
      level: 'caution',
      message: `SURFACE CONTAMINATION: Uncleaned walls harbor microscopic cooking oils and dust that frequently cause adhesive release. Wipe with 70% Isopropyl Alcohol before mounting.`
    });
  }

  // Handle PDF Export
  const handleExportPDF = () => {
    setIsGeneratingPdf(true);
    setTimeout(() => {
      try {
        const fullContent = vol01Data.chapters.map(c => {
          return `# Chapter ${c.chapterNumber}: ${c.title}\n\n${c.subtitle}\n\n${c.content}\n\n### Key Takeaways:\n${c.keyTakeaways.map(t => `- ${t}`).join('\n')}\n\n---\n`;
        }).join('\n\n');

        const doc = generateProfessionalPDF({
          fileName: 'SmallSpaceHome_Vol01_Zero_Damage_Mounting_Master_Playbook.pdf',
          documentTitle: 'Vol. 01: Zero-Damage Renter Mounting & Secret Wall Hacks',
          productTitle: 'The SmallSpaceHome Master Playbook Series',
          productRank: 1,
          badge: 'FLAGSHIP COMMERCIAL SYSTEM',
          content: fullContent
        });

        doc.save('SmallSpaceHome_Vol01_Zero_Damage_Mounting_Master_Playbook.pdf');
      } catch (err) {
        console.error('PDF Generation Error:', err);
      } finally {
        setIsGeneratingPdf(false);
      }
    }, 300);
  };

  // Calculations for Fourthwall order (Singular $7 Field Cards Tested Bump)
  const basePrice = 24;
  const bumpPrice = 7;
  const finalOrderTotal = basePrice + (includeCheckoutBump ? bumpPrice : 0);

  return (
    <div className="space-y-8 max-w-7xl mx-auto pb-16">
      {/* Flagship Validation Header Banner */}
      <div className="bg-[#1C1917] text-white rounded-2xl p-6 sm:p-8 border border-[#E5DFD5]/20 shadow-xl relative overflow-hidden">
        <div className="absolute -right-16 -top-16 w-64 h-64 bg-[#4A533E]/30 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="bg-[#4A533E] text-[#FAF8F5] text-xs uppercase tracking-widest font-semibold px-3 py-1 rounded-full flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#E5DFD5]" />
                FLAGSHIP VALIDATION SYSTEM • VOL. 01
              </span>
              <span className="bg-emerald-500/20 text-emerald-300 text-xs px-2.5 py-0.5 rounded-full border border-emerald-500/30 flex items-center gap-1 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Validated Commercial Standard
              </span>
              <span className="text-white/60 text-xs font-mono">v1.0 Public Edition • August 2026</span>
            </div>

            <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#FAF8F5]">
              Hang Mirrors, Shelves & Art Without Damaging Rental Walls
            </h1>
            
            <p className="text-[#FAF8F5]/80 text-sm sm:text-base max-w-3xl leading-relaxed">
              The flagship digital playbook engineered in our Toronto Rental Lab. Grounded in substrate shear vectors, 70% IPA de-oiling protocols, 3M Claw entry mechanics, and thermal release removal.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-white/70">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>30+ Page Master Playbook PDF</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Substrate & Load Calculator (.CSV)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>4×6" Pocket Field Companion</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>1-Click Fourthwall Checkout Flow</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 min-w-[220px]">
            <button
              onClick={handleExportPDF}
              disabled={isGeneratingPdf}
              className="bg-[#4A533E] hover:bg-[#3D4533] text-white px-5 py-3 rounded-xl font-medium text-sm flex items-center justify-center gap-2 transition-all shadow-md active:scale-95 cursor-pointer disabled:opacity-50"
            >
              {isGeneratingPdf ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Generating Vector PDF...</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  <span>Export Master PDF (30+ p.)</span>
                </>
              )}
            </button>
            <button
              onClick={() => setActiveSubView('checkout-delivery')}
              className="bg-white/10 hover:bg-white/15 text-white border border-white/20 px-5 py-3 rounded-xl font-medium text-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4 text-[#E5DFD5]" />
              <span>Preview Store Checkout ($24)</span>
            </button>
          </div>
        </div>
      </div>

      {/* Sub-Navigation Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-[#E5DFD5] text-sm">
        <button
          onClick={() => setActiveSubView('calculator')}
          className={`px-4 py-2.5 rounded-lg font-medium whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
            activeSubView === 'calculator'
              ? 'bg-[#4A533E] text-white shadow-sm'
              : 'text-[#1C1917]/70 hover:text-[#1C1917] hover:bg-stone-100'
          }`}
        >
          <Scale className="w-4 h-4" />
          <span>Interactive Substrate & Load Calculator</span>
        </button>

        <button
          onClick={() => setActiveSubView('playbook')}
          className={`px-4 py-2.5 rounded-lg font-medium whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
            activeSubView === 'playbook'
              ? 'bg-[#4A533E] text-white shadow-sm'
              : 'text-[#1C1917]/70 hover:text-[#1C1917] hover:bg-stone-100'
          }`}
        >
          <FileText className="w-4 h-4" />
          <span>Master Playbook 6-Chapter Reader</span>
        </button>

        <button
          onClick={() => setActiveSubView('field-cards')}
          className={`px-4 py-2.5 rounded-lg font-medium whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
            activeSubView === 'field-cards'
              ? 'bg-[#4A533E] text-white shadow-sm'
              : 'text-[#1C1917]/70 hover:text-[#1C1917] hover:bg-stone-100'
          }`}
        >
          <Layers className="w-4 h-4" />
          <span>Pocket Field Companion (4×6")</span>
        </button>

        <button
          onClick={() => setActiveSubView('checkout-delivery')}
          className={`px-4 py-2.5 rounded-lg font-medium whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
            activeSubView === 'checkout-delivery'
              ? 'bg-[#4A533E] text-white shadow-sm'
              : 'text-[#1C1917]/70 hover:text-[#1C1917] hover:bg-stone-100'
          }`}
        >
          <ShoppingBag className="w-4 h-4" />
          <span>Fourthwall Checkout & Delivery</span>
        </button>

        <button
          onClick={() => setActiveSubView('analytics')}
          className={`px-4 py-2.5 rounded-lg font-medium whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
            activeSubView === 'analytics'
              ? 'bg-[#4A533E] text-white shadow-sm'
              : 'text-[#1C1917]/70 hover:text-[#1C1917] hover:bg-stone-100'
          }`}
        >
          <TrendingUp className="w-4 h-4" />
          <span>Validation Funnel Analytics</span>
        </button>
      </div>

      {/* ============================================================== */}
      {/* SUBVIEW 1: INTERACTIVE SUBSTRATE & LOAD CALCULATOR */}
      {/* ============================================================== */}
      {activeSubView === 'calculator' && (
        <div className="space-y-6">
          {/* Engineering Disclaimer Notice */}
          <div className="bg-[#FAF8F5] border-l-4 border-[#4A533E] p-4 rounded-r-xl border-y border-r border-[#E5DFD5] text-xs text-[#1C1917]/80 flex items-start gap-3">
            <Info className="w-4 h-4 text-[#4A533E] shrink-0 mt-0.5" />
            <p>
              <strong className="text-[#1C1917]">Engineering & Safety Standard:</strong> Real-world load capacity depends on wall substrate condition, drywall thickness, anchor installation angle, surface de-oiling, and manufacturer specifications. Always apply a 2.0x safety factor (or 3.0x over desks/beds) and test connections with graduated test weights before full load placement.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Input Controls */}
            <div className="lg:col-span-7 bg-white rounded-2xl p-6 border border-[#E5DFD5] shadow-sm space-y-6">
              <div className="flex items-center justify-between border-b border-[#E5DFD5] pb-3">
                <h3 className="font-serif text-lg font-bold text-[#1C1917] flex items-center gap-2">
                  <Sliders className="w-5 h-5 text-[#4A533E]" />
                  Mounting Parameters & Substrate Diagnostics
                </h3>
                <span className="text-xs bg-stone-100 text-stone-700 px-2.5 py-1 rounded font-mono">
                  Real-Time Calculation
                </span>
              </div>

              {/* Substrate Selector */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-[#1C1917] uppercase tracking-wider block">
                  1. Wall Substrate Type (Knuckle-Tap Diagnosis)
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {[
                    { id: 'drywall-metal', label: '1/2" Drywall (Metal Studs)', desc: 'Post-2005 Condos' },
                    { id: 'drywall-wood', label: '1/2" Drywall (Wood Studs)', desc: 'Standard Apartments' },
                    { id: 'plaster', label: 'Historic Plaster & Lath', desc: 'Pre-1960 Heritage' },
                    { id: 'concrete', label: 'Solid Concrete / Pillar', desc: 'No-Drill Only' },
                    { id: 'hollow-door', label: 'Hollow-Core Door', desc: 'Inside Surface' }
                  ].map(s => (
                    <button
                      key={s.id}
                      onClick={() => setSubstrate(s.id as any)}
                      className={`p-3 text-left rounded-xl border transition-all text-xs cursor-pointer ${
                        substrate === s.id
                          ? 'border-[#4A533E] bg-[#4A533E]/5 font-semibold text-[#1C1917]'
                          : 'border-[#E5DFD5] hover:border-stone-400 text-stone-600'
                      }`}
                    >
                      <div className="font-medium text-[#1C1917]">{s.label}</div>
                      <div className="text-[11px] text-stone-500">{s.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Object Category & Target Weight */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-[#1C1917] uppercase tracking-wider block">
                    2. Object Category
                  </label>
                  <select
                    value={objectCategory}
                    onChange={(e) => {
                      const cat = e.target.value as any;
                      setObjectCategory(cat);
                      if (cat === 'mirror') setTargetWeightLbs(28);
                      else if (cat === 'shelf') setTargetWeightLbs(18);
                      else if (cat === 'framed-art') setTargetWeightLbs(8);
                      else if (cat === 'acoustic') setTargetWeightLbs(5);
                      else if (cat === 'curtain-rod') setTargetWeightLbs(12);
                      else if (cat === 'coat-hook') setTargetWeightLbs(15);
                    }}
                    className="w-full p-2.5 text-xs bg-stone-50 border border-[#E5DFD5] rounded-xl text-[#1C1917] focus:outline-none focus:border-[#4A533E]"
                  >
                    <option value="mirror">Heavy Framed Mirror (15–45 lbs)</option>
                    <option value="shelf">Floating Display Shelf & Books (10–30 lbs)</option>
                    <option value="framed-art">Framed Canvas / Gallery Art (4–15 lbs)</option>
                    <option value="acoustic">Acoustic Sound Panel (2–8 lbs)</option>
                    <option value="curtain-rod">Tension Curtain Rod System (8–20 lbs)</option>
                    <option value="coat-hook">Entryway Coat & Bag Hook (10–25 lbs)</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <label className="font-bold text-[#1C1917] uppercase tracking-wider">
                      Target Weight: <span className="text-[#4A533E] font-bold font-mono text-sm">{targetWeightLbs} lbs</span>
                    </label>
                  </div>
                  <input
                    type="range"
                    min={2}
                    max={60}
                    step={1}
                    value={targetWeightLbs}
                    onChange={(e) => setTargetWeightLbs(Number(e.target.value))}
                    className="w-full accent-[#4A533E] cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-stone-400 font-mono">
                    <span>2 lbs (Light)</span>
                    <span>25 lbs (Medium)</span>
                    <span>60 lbs (Heavy)</span>
                  </div>
                </div>
              </div>

              {/* Hardware Selection */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-[#1C1917] uppercase tracking-wider block">
                  3. Hardware Mechanism Selected
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    { id: '3m-claw', name: '3M Claw Picture Hanger', rate: '45 lbs / pt', type: 'Zero-Drill 45° Teeth' },
                    { id: 'monkey-hook', name: 'Monkey / Gorilla Hook', rate: '35 lbs / pt', type: '1mm Pinhole Spring' },
                    { id: 'command-jumbo', name: '3M Command Jumbo (4-Pair)', rate: '8 lbs / pt', type: 'Zero-Damage Adhesive' },
                    { id: 'paracord-suspension', name: '550 Paracord Suspension', rate: '80 lbs / pt', type: 'Zero Wall Contact' },
                    { id: 'ez-toggle', name: 'E-Z Ancor Heavy Toggle', rate: '75 lbs / pt', type: 'Requires Spackle on Exit' },
                    { id: 'silicone-tension', name: 'Silicone Spring-Tension Rod', rate: '25 lbs / pt', type: 'Zero Damage Compression' }
                  ].map(hw => (
                    <button
                      key={hw.id}
                      onClick={() => setHardwareChoice(hw.id as any)}
                      className={`p-3 text-left rounded-xl border transition-all text-xs cursor-pointer ${
                        hardwareChoice === hw.id
                          ? 'border-[#4A533E] bg-[#4A533E]/5 font-semibold text-[#1C1917]'
                          : 'border-[#E5DFD5] hover:border-stone-400 text-stone-600'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-[#1C1917]">{hw.name}</span>
                        <span className="text-[10px] bg-stone-200 text-stone-800 px-1.5 py-0.5 rounded font-mono font-medium">{hw.rate}</span>
                      </div>
                      <div className="text-[11px] text-stone-500 mt-1">{hw.type}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Anchor Points & Safety Multiplier */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-[#E5DFD5]">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-[#1C1917] uppercase tracking-wider block">
                    Anchor Points: <span className="text-[#4A533E] font-bold font-mono">{anchorPoints} Points</span>
                  </label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4].map(num => (
                      <button
                        key={num}
                        onClick={() => setAnchorPoints(num)}
                        className={`flex-1 py-2 text-xs font-medium rounded-lg border transition-all cursor-pointer ${
                          anchorPoints === num
                            ? 'bg-[#4A533E] text-white border-[#4A533E]'
                            : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                        }`}
                      >
                        {num} {num === 1 ? 'Anchor' : 'Anchors'}
                      </button>
                    ))}
                  </div>
                  <p className="text-[11px] text-stone-500">
                    Distributes vertical shear stress across multiple drywall planes.
                  </p>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-[#1C1917] uppercase tracking-wider block">
                    Safety Factor Target
                  </label>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setSafetyFactor(2)}
                      className={`flex-1 py-2 text-xs font-medium rounded-lg border transition-all cursor-pointer ${
                        safetyFactor === 2
                          ? 'bg-[#4A533E] text-white border-[#4A533E]'
                          : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                      }`}
                    >
                      2.0x Standard
                    </button>
                    <button
                      onClick={() => setSafetyFactor(3)}
                      className={`flex-1 py-2 text-xs font-medium rounded-lg border transition-all cursor-pointer ${
                        safetyFactor === 3
                          ? 'bg-[#4A533E] text-white border-[#4A533E]'
                          : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                      }`}
                    >
                      3.0x High Risk
                    </button>
                  </div>
                  <p className="text-[11px] text-stone-500">
                    Use 3.0x over beds, desks, or walking corridors.
                  </p>
                </div>
              </div>

              {/* Surface Prep Checklist */}
              <div className="space-y-3 pt-2 border-t border-[#E5DFD5]">
                <label className="text-xs font-bold text-[#1C1917] uppercase tracking-wider block">
                  Installation Quality & Preparation SOP
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <label className="flex items-center gap-2.5 text-xs text-[#1C1917] cursor-pointer bg-stone-50 p-2.5 rounded-lg border border-stone-200">
                    <input
                      type="checkbox"
                      checked={ipaPrepped}
                      onChange={(e) => setIpaPrepped(e.target.checked)}
                      className="accent-[#4A533E] rounded"
                    />
                    <span>70% Isopropyl Alcohol De-oiled</span>
                  </label>

                  <div className="flex items-center justify-between text-xs text-[#1C1917] bg-stone-50 p-2.5 rounded-lg border border-stone-200">
                    <span>Paint Cure Age:</span>
                    <div className="flex items-center gap-1">
                      <input
                        type="number"
                        min={1}
                        max={365}
                        value={paintCureAgeDays}
                        onChange={(e) => setPaintCureAgeDays(Number(e.target.value))}
                        className="w-12 text-center p-1 bg-white border border-stone-300 rounded text-xs font-mono font-bold"
                      />
                      <span className="text-stone-500 text-[11px]">days</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Calculations & Results Panel */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-[#FAF8F5] rounded-2xl p-6 border border-[#E5DFD5] shadow-sm space-y-6">
                <div className="flex items-center justify-between border-b border-[#E5DFD5] pb-3">
                  <h3 className="font-serif text-lg font-bold text-[#1C1917]">
                    Structural Load & Safety Output
                  </h3>
                  <span className={`px-2.5 py-1 rounded-full text-xs font-bold font-mono ${
                    isSafetyMarginMet 
                      ? 'bg-emerald-100 text-emerald-800' 
                      : isExceedingMaxLimit 
                      ? 'bg-red-100 text-red-800' 
                      : 'bg-amber-100 text-amber-800'
                  }`}>
                    {isSafetyMarginMet ? '✓ CAPACITY CERTIFIED' : isExceedingMaxLimit ? '✕ OVERLOAD DANGER' : '⚠ MARGIN WARNING'}
                  </span>
                </div>

                {/* Main Metric Cards */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white p-3.5 rounded-xl border border-[#E5DFD5]">
                    <div className="text-[11px] text-stone-500 uppercase tracking-wider font-semibold">Total Rated Capacity</div>
                    <div className="text-2xl font-bold font-mono text-[#1C1917] mt-1">
                      {totalHardwareCapacity} <span className="text-xs font-sans text-stone-500">lbs</span>
                    </div>
                    <div className="text-[10px] text-stone-400 mt-0.5">{anchorPoints} × {selectedHardware.ratedLbsPerPoint} lbs/pt</div>
                  </div>

                  <div className="bg-white p-3.5 rounded-xl border border-[#E5DFD5]">
                    <div className="text-[11px] text-stone-500 uppercase tracking-wider font-semibold">Load Per Anchor</div>
                    <div className="text-2xl font-bold font-mono text-[#4A533E] mt-1">
                      {loadPerAnchor} <span className="text-xs font-sans text-stone-500">lbs</span>
                    </div>
                    <div className="text-[10px] text-stone-400 mt-0.5">Vertical Shear Force</div>
                  </div>

                  <div className="bg-white p-3.5 rounded-xl border border-[#E5DFD5]">
                    <div className="text-[11px] text-stone-500 uppercase tracking-wider font-semibold">Required Threshold</div>
                    <div className="text-2xl font-bold font-mono text-[#1C1917] mt-1">
                      {requiredSafetyCapacity} <span className="text-xs font-sans text-stone-500">lbs</span>
                    </div>
                    <div className="text-[10px] text-stone-400 mt-0.5">{safetyFactor}.0x Safety Multiplier</div>
                  </div>

                  <div className="bg-white p-3.5 rounded-xl border border-[#E5DFD5]">
                    <div className="text-[11px] text-stone-500 uppercase tracking-wider font-semibold">Estimated Hardware Cost</div>
                    <div className="text-2xl font-bold font-mono text-stone-800 mt-1">
                      ${totalHardwareCost} <span className="text-xs font-sans text-stone-500">CAD</span>
                    </div>
                    <div className="text-[10px] text-stone-400 mt-0.5">Hardware + Prep</div>
                  </div>
                </div>

                {/* Warnings / Alerts Box */}
                {warnings.length > 0 && (
                  <div className="space-y-2">
                    {warnings.map((w, idx) => (
                      <div
                        key={idx}
                        className={`p-3 rounded-xl text-xs flex items-start gap-2.5 border ${
                          w.level === 'danger'
                            ? 'bg-red-50 text-red-900 border-red-200'
                            : w.level === 'caution'
                            ? 'bg-amber-50 text-amber-900 border-amber-200'
                            : 'bg-emerald-50 text-emerald-900 border-emerald-200'
                        }`}
                      >
                        <AlertTriangle className={`w-4 h-4 shrink-0 mt-0.5 ${
                          w.level === 'danger' ? 'text-red-600' : 'text-amber-600'
                        }`} />
                        <span className="leading-relaxed">{w.message}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Selected Hardware Mechanism Specs */}
                <div className="bg-white p-4 rounded-xl border border-[#E5DFD5] space-y-2.5 text-xs">
                  <div className="font-bold text-[#1C1917] flex items-center justify-between">
                    <span>{selectedHardware.name}</span>
                    <span className="text-[#4A533E] font-mono font-medium">${selectedHardware.costCad.toFixed(2)} / unit</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded border ${
                      selectedHardware.ratingType === 'Manufacturer Spec'
                        ? 'bg-blue-50 text-blue-800 border-blue-200'
                        : 'bg-amber-50 text-amber-800 border-amber-200'
                    }`}>
                      {selectedHardware.ratingType}
                    </span>
                    <span className="text-[11px] text-stone-500 italic truncate">
                      {selectedHardware.sourceBasis}
                    </span>
                  </div>
                  <p className="text-stone-600 leading-relaxed">
                    <strong>Mechanism:</strong> {selectedHardware.mechanism}
                  </p>
                  <p className="text-stone-600 leading-relaxed">
                    <strong>Rental Damage Impact:</strong> {selectedHardware.wallDamage}
                  </p>
                  <div className="p-2.5 bg-stone-50 rounded-lg border border-stone-200 text-[11px] text-stone-500 leading-relaxed">
                    <strong>Engineering Note:</strong> Real-world load capacity depends on substrate condition, drywall density, paint cure, humidity, and installation technique. Never treat rated numbers as a guarantee; always maintain a 2.0x–3.0x safety factor.
                  </div>
                </div>

                {/* Action CTA */}
                <button
                  onClick={() => setActiveSubView('playbook')}
                  className="w-full bg-[#4A533E] hover:bg-[#3D4533] text-white py-3 rounded-xl text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <span>Read Full 6-Chapter Step-by-Step SOP</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* SUBVIEW 2: MASTER PLAYBOOK 6-CHAPTER READER */}
      {/* ============================================================== */}
      {activeSubView === 'playbook' && (
        <div className="space-y-6">
          {/* Chapter Selector Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
            {[
              { num: 1, name: 'Diagnose', label: 'Substrate & Lease' },
              { num: 2, name: 'Measure', label: 'Forces & Vectors' },
              { num: 3, name: 'Select', label: 'Decision Matrix' },
              { num: 4, name: 'Execute', label: 'Installation SOP' },
              { num: 5, name: 'Verify', label: 'Clearance & Load' },
              { num: 6, name: 'Remove & Restore', label: 'Zero-Damage Exit' }
            ].map(ch => (
              <button
                key={ch.num}
                onClick={() => setActiveChapter(ch.num)}
                className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                  activeChapter === ch.num
                    ? 'bg-[#4A533E] text-white border-[#4A533E] shadow-sm'
                    : 'bg-white text-stone-700 border-[#E5DFD5] hover:bg-stone-50'
                }`}
              >
                <div className="text-[10px] uppercase font-bold tracking-wider opacity-80">
                  Chapter 0{ch.num}
                </div>
                <div className="font-bold text-xs mt-0.5">{ch.name}</div>
                <div className={`text-[10px] mt-0.5 truncate ${activeChapter === ch.num ? 'text-white/80' : 'text-stone-500'}`}>
                  {ch.label}
                </div>
              </button>
            ))}
          </div>

          {/* Chapter Content Body */}
          <div className="bg-white rounded-2xl p-6 sm:p-10 border border-[#E5DFD5] shadow-sm space-y-8">
            {/* Front Matter Box (Always displayed at top of reader) */}
            <div className="bg-[#FAF8F5] p-5 rounded-xl border border-[#E5DFD5] space-y-3 text-xs text-[#1C1917]/80">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#E5DFD5] pb-2">
                <span className="font-bold text-[#1C1917] uppercase tracking-wider">
                  Official Publication Metadata & Legal License
                </span>
                <span className="font-mono text-stone-500 text-[11px]">
                  ISBN: SSH-DP-2026-VOL01 • Edition: 1.0 (Public Release)
                </span>
              </div>
              <p>
                <strong>Personal-Use License:</strong> Licensed strictly for personal residential use by the purchasing account. Redistribution, reselling, or commercial reproduction is prohibited under Canadian & International Copyright Law (© 2026 SmallSpaceHome. All rights reserved.).
              </p>
              <p>
                <strong>Safety Disclaimer:</strong> This guide provides architectural and practical planning frameworks. It does not replace structural engineering advice, manufacturer load specifications, local building codes, or rental lease terms. Real-world load capacity depends on substrate condition, drywall density, paint cure, humidity, and installation technique.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 border-t border-stone-200 text-[11px] text-stone-600">
                <div><strong>Update Policy:</strong> Lifetime digital updates & errata for registered purchasers.</div>
                <div><strong>Technical Support:</strong> <span className="font-mono">support@smallspacehome.ca</span></div>
              </div>
            </div>

            {/* Chapter Header */}
            {(() => {
              const currentChap = vol01Data.chapters.find(c => c.chapterNumber === activeChapter) || vol01Data.chapters[0];
              return (
                <div className="space-y-6">
                  <div className="border-b border-[#E5DFD5] pb-4">
                    <div className="text-xs font-bold text-[#4A533E] uppercase tracking-widest">
                      CHAPTER 0{currentChap.chapterNumber} • {currentChap.readingMinutes} MIN READ
                    </div>
                    <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1C1917] mt-1">
                      {currentChap.title}
                    </h2>
                    <p className="text-stone-600 text-sm mt-1 italic">
                      {currentChap.subtitle}
                    </p>
                  </div>

                  {/* Chapter Body Markdown Render */}
                  <div className="prose prose-stone max-w-none text-sm leading-relaxed text-[#1C1917]/90 space-y-4 whitespace-pre-line">
                    {currentChap.content}
                  </div>

                  {/* Key Takeaways Box */}
                  <div className="bg-stone-50 rounded-xl p-5 border border-[#E5DFD5] space-y-3">
                    <h4 className="font-serif text-sm font-bold text-[#1C1917] flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#4A533E]" />
                      Chapter 0{currentChap.chapterNumber} Key Tactical Takeaways
                    </h4>
                    <ul className="space-y-2 text-xs text-stone-700">
                      {currentChap.keyTakeaways.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-[#4A533E] font-bold">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Navigation footer */}
                  <div className="flex justify-between items-center pt-4 border-t border-[#E5DFD5]">
                    <button
                      onClick={() => setActiveChapter(prev => Math.max(1, prev - 1))}
                      disabled={activeChapter === 1}
                      className="text-xs font-medium text-stone-600 hover:text-stone-900 disabled:opacity-30 cursor-pointer"
                    >
                      ← Previous Chapter
                    </button>
                    <button
                      onClick={handleExportPDF}
                      className="bg-[#4A533E] text-white text-xs px-4 py-2 rounded-lg font-medium hover:bg-[#3D4533] cursor-pointer flex items-center gap-1.5"
                    >
                      <Download className="w-3.5 h-3.5" />
                      Download Full 30-Page PDF
                    </button>
                    <button
                      onClick={() => setActiveChapter(prev => Math.min(6, prev + 1))}
                      disabled={activeChapter === 6}
                      className="text-xs font-medium text-stone-600 hover:text-stone-900 disabled:opacity-30 cursor-pointer"
                    >
                      Next Chapter →
                    </button>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* SUBVIEW 3: POCKET FIELD COMPANION (4×6" CARDS) */}
      {/* ============================================================== */}
      {activeSubView === 'field-cards' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E5DFD5] pb-4">
            <div>
              <h3 className="font-serif text-xl font-bold text-[#1C1917]">
                Zero-Damage Installation Pocket Field Cards (4×6" Printables)
              </h3>
              <p className="text-xs text-stone-600 mt-1">
                Laminated on-site flashcards designed for hardware store runs, quick angle alignments, and 60-second installations.
              </p>
            </div>
            <button
              onClick={handleExportPDF}
              className="bg-[#4A533E] text-white px-4 py-2 rounded-lg text-xs font-medium hover:bg-[#3D4533] cursor-pointer flex items-center gap-1.5 shrink-0"
            >
              <Printer className="w-4 h-4" />
              <span>Print 4×6" Field Deck</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-6 border border-[#E5DFD5] shadow-sm space-y-4 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-[#4A533E]" />
              <div className="flex justify-between items-center text-xs">
                <span className="font-mono text-stone-400 font-bold">CARD 01 • SURFACE PREPARATION</span>
                <span className="bg-stone-100 text-stone-700 px-2 py-0.5 rounded text-[10px] font-bold">THE 70% IPA LAW</span>
              </div>
              <h4 className="font-serif text-base font-bold text-[#1C1917]">
                The 60-Second Wall De-Oiling Protocol
              </h4>
              <ul className="text-xs text-stone-600 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-[#4A533E] font-bold">1.</span>
                  <span><strong>70% Isopropyl Alcohol:</strong> Wipe 4×4" target area with lint-free microfiber. Never use multi-surface glass spray (leaves silicone film).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4A533E] font-bold">2.</span>
                  <span><strong>30-Second Air Dry:</strong> Allow alcohol to fully evaporate before applying adhesive strip.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4A533E] font-bold">3.</span>
                  <span><strong>30-Second Firm Pressure:</strong> Press strip with thumb applying 15 lbs downward force to activate adhesive polymer chains.</span>
                </li>
              </ul>
              <div className="bg-stone-50 p-2.5 rounded-lg border border-stone-200 text-[11px] text-stone-700">
                💡 <strong>Lab Rule:</strong> Wait 1 hour before hanging art to allow polymer curing.
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl p-6 border border-[#E5DFD5] shadow-sm space-y-4 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-[#4A533E]" />
              <div className="flex justify-between items-center text-xs">
                <span className="font-mono text-stone-400 font-bold">CARD 02 • HEAVY HARDWARE</span>
                <span className="bg-stone-100 text-stone-700 px-2 py-0.5 rounded text-[10px] font-bold">3M CLAW MECHANICS</span>
              </div>
              <h4 className="font-serif text-base font-bold text-[#1C1917]">
                45° Shear-Lock Penetration Angle
              </h4>
              <ul className="text-xs text-stone-600 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-[#4A533E] font-bold">1.</span>
                  <span><strong>Positioning:</strong> Align the baseplate flush against 1/2" drywall without pre-drilling.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4A533E] font-bold">2.</span>
                  <span><strong>Thumb Push:</strong> Press firmly with both thumbs until hardened steel prongs lock into the drywall core.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4A533E] font-bold">3.</span>
                  <span><strong>Load Rating:</strong> 45 lbs rated capacity in pure vertical shear. 2 anchor points support up to 65 lbs with 2.0x safety factor.</span>
                </li>
              </ul>
              <div className="bg-stone-50 p-2.5 rounded-lg border border-stone-200 text-[11px] text-stone-700">
                💡 <strong>Move-Out Exit:</strong> Slide flat putty knife under edge to pull straight out. Leaves tiny 1mm prongs that pass inspection.
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl p-6 border border-[#E5DFD5] shadow-sm space-y-4 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-[#4A533E]" />
              <div className="flex justify-between items-center text-xs">
                <span className="font-mono text-stone-400 font-bold">CARD 03 • SAFE REMOVAL</span>
                <span className="bg-stone-100 text-stone-700 px-2 py-0.5 rounded text-[10px] font-bold">THERMAL RELEASE</span>
              </div>
              <h4 className="font-serif text-base font-bold text-[#1C1917]">
                60-Second Blow-Dryer Adhesive Release
              </h4>
              <ul className="text-xs text-stone-600 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-[#4A533E] font-bold">1.</span>
                  <span><strong>Heat Application:</strong> Set standard hair dryer to medium heat. Hold nozzle 2 inches away from base for 45–60 seconds.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4A533E] font-bold">2.</span>
                  <span><strong>Parallel Pull:</strong> Grasp tab and pull strictly straight down parallel to the wall. NEVER pull outwards towards yourself.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4A533E] font-bold">3.</span>
                  <span><strong>Zero Residue:</strong> The softened adhesive stretches out cleanly without lifting delicate builder-grade paint.</span>
                </li>
              </ul>
              <div className="bg-stone-50 p-2.5 rounded-lg border border-stone-200 text-[11px] text-stone-700">
                💡 <strong>Emergency Paint Lift:</strong> If slight texture lifts, rub flat white chalk into area to blend with matte rental paint.
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-2xl p-6 border border-[#E5DFD5] shadow-sm space-y-4 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-[#4A533E]" />
              <div className="flex justify-between items-center text-xs">
                <span className="font-mono text-stone-400 font-bold">CARD 04 • HARDWARE STORE CHEAT SHEET</span>
                <span className="bg-stone-100 text-stone-700 px-2 py-0.5 rounded text-[10px] font-bold">QUICK BUY LIST</span>
              </div>
              <h4 className="font-serif text-base font-bold text-[#1C1917]">
                The $25 Renter Hardware Toolkit
              </h4>
              <ul className="text-xs text-stone-600 space-y-2">
                <li className="flex justify-between items-center border-b border-stone-100 pb-1">
                  <span>3M Claw Drywall Picture Hangers (4-Pack)</span>
                  <span className="font-mono font-bold">$9.98 CAD</span>
                </li>
                <li className="flex justify-between items-center border-b border-stone-100 pb-1">
                  <span>Gorilla / Monkey Spring Hooks (10-Pack)</span>
                  <span className="font-mono font-bold">$6.49 CAD</span>
                </li>
                <li className="flex justify-between items-center border-b border-stone-100 pb-1">
                  <span>70% Isopropyl Rubbing Alcohol (500ml)</span>
                  <span className="font-mono font-bold">$3.29 CAD</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Torpedo Mini Bubble Level (Magnetic)</span>
                  <span className="font-mono font-bold">$5.99 CAD</span>
                </li>
              </ul>
              <div className="bg-stone-50 p-2.5 rounded-lg border border-stone-200 text-[11px] text-stone-700 flex justify-between font-bold">
                <span>Total Toolkit Cost:</span>
                <span className="text-[#4A533E] font-mono">$25.75 CAD</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* SUBVIEW 4: FOURTHWALL COMMERCIAL CHECKOUT & DELIVERY */}
      {/* ============================================================== */}
      {activeSubView === 'checkout-delivery' && (
        <div className="space-y-6">
          <div className="bg-stone-50 p-4 rounded-xl border border-[#E5DFD5] text-xs text-stone-700 flex items-center justify-between">
            <span className="flex items-center gap-2">
              <ShoppingBag className="w-4 h-4 text-[#4A533E]" />
              <strong>Fourthwall Store Simulation:</strong> Live checkout preview for <code>shop.smallspacehome.ca</code> with 1-click order bump and instant fulfillment.
            </span>
            <span className="text-[11px] bg-white px-2 py-1 rounded border border-stone-200 font-mono">
              Currency: CAD
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Checkout Form Simulation */}
            <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-[#E5DFD5] shadow-sm space-y-6">
              <h3 className="font-serif text-xl font-bold text-[#1C1917] border-b border-[#E5DFD5] pb-3">
                Order Review & 1-Click Digital Checkout
              </h3>

              {/* Main Product Card */}
              <div className="flex items-start justify-between p-4 bg-stone-50 rounded-xl border border-stone-200">
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-[#4A533E] uppercase tracking-wider">
                    FLAGSHIP DIGITAL PLAYBOOK
                  </span>
                  <div className="font-bold text-sm text-[#1C1917]">
                    Hang Mirrors, Shelves & Art: Zero-Damage Mounting System
                  </div>
                  <div className="text-xs text-stone-500">
                    Includes 30+ Page Master PDF + Substrate Load Matrix (.CSV) + Personal Use License
                  </div>
                </div>
                <div className="font-mono font-bold text-sm text-[#1C1917] shrink-0 ml-4">
                  $24.00 CAD
                </div>
              </div>

              {/* Primary Validated Checkout Bump */}
              <div className={`p-4 rounded-xl border transition-all ${
                includeCheckoutBump 
                  ? 'bg-[#4A533E]/5 border-[#4A533E]' 
                  : 'bg-white border-[#E5DFD5] hover:border-stone-400'
              }`}>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={includeCheckoutBump}
                    onChange={(e) => setIncludeCheckoutBump(e.target.checked)}
                    className="accent-[#4A533E] w-4 h-4 mt-0.5 rounded"
                  />
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="bg-amber-100 text-amber-900 text-[10px] font-bold px-2 py-0.5 rounded">
                        RECOMMENDED ADD-ON (+34% TAKE RATE)
                      </span>
                      <span className="font-bold text-xs text-[#1C1917]">
                        Zero-Damage Installation Pocket Field Cards (+$7 CAD)
                      </span>
                    </div>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      Compact 4×6" high-contrast printable cards with 60-second hardware store cheat sheets, adhesive de-oiling SOPs, and 45° angle alignment guides.
                    </p>
                  </div>
                </label>
              </div>

              {/* Price summary */}
              <div className="space-y-2 pt-4 border-t border-[#E5DFD5] text-xs">
                <div className="flex justify-between text-stone-600">
                  <span>Zero-Damage Mounting Master Kit</span>
                  <span className="font-mono">$24.00 CAD</span>
                </div>
                {includeCheckoutBump && (
                  <div className="flex justify-between text-stone-600">
                    <span>Pocket Field Cards (4×6" Deck)</span>
                    <span className="font-mono">$7.00 CAD</span>
                  </div>
                )}
                <div className="flex justify-between text-sm font-bold text-[#1C1917] pt-2 border-t border-stone-200">
                  <span>Total Order (Instant Digital Access)</span>
                  <span className="font-mono text-base text-[#4A533E]">${finalOrderTotal}.00 CAD</span>
                </div>
              </div>

              {/* Checkout CTA */}
              <button
                onClick={() => setSimulatedCheckoutComplete(true)}
                className="w-full bg-[#4A533E] hover:bg-[#3D4533] text-white py-3.5 rounded-xl font-semibold text-sm transition-all shadow-md active:scale-95 cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Simulate 1-Click Payment (${finalOrderTotal} CAD)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Instant Delivery Simulation */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-[#FAF8F5] rounded-2xl p-6 border border-[#E5DFD5] shadow-sm space-y-5">
                <div className="flex items-center justify-between border-b border-[#E5DFD5] pb-3">
                  <h3 className="font-serif text-lg font-bold text-[#1C1917]">
                    Digital Delivery Fulfillment Screen
                  </h3>
                  <span className="text-xs bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-mono font-bold">
                    Instant Access
                  </span>
                </div>

                {simulatedCheckoutComplete ? (
                  <div className="space-y-4 animate-in fade-in duration-300">
                    <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-900 flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <strong>Order #SSH-9284 Confirmed!</strong>
                        <p className="mt-0.5 text-emerald-800">Your digital files are ready for instant download and an email receipt has been dispatched.</p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <button
                        onClick={handleExportPDF}
                        className="w-full bg-white hover:bg-stone-50 border border-[#E5DFD5] p-3 rounded-xl text-left flex items-center justify-between text-xs transition-all cursor-pointer"
                      >
                        <div className="flex items-center gap-2.5">
                          <FileText className="w-4 h-4 text-[#4A533E]" />
                          <div>
                            <div className="font-bold text-[#1C1917]">Master Playbook (Vector PDF)</div>
                            <div className="text-[10px] text-stone-500">30+ Pages • 4.8 MB • Version 1.0</div>
                          </div>
                        </div>
                        <Download className="w-4 h-4 text-stone-400" />
                      </button>

                      <button
                        onClick={handleExportPDF}
                        className="w-full bg-white hover:bg-stone-50 border border-[#E5DFD5] p-3 rounded-xl text-left flex items-center justify-between text-xs transition-all cursor-pointer"
                      >
                        <div className="flex items-center gap-2.5">
                          <Scale className="w-4 h-4 text-[#4A533E]" />
                          <div>
                            <div className="font-bold text-[#1C1917]">Substrate Load Matrix (.CSV)</div>
                            <div className="text-[10px] text-stone-500">Google Sheets & Excel Compatible</div>
                          </div>
                        </div>
                        <Download className="w-4 h-4 text-stone-400" />
                      </button>

                      {includeCheckoutBump && (
                        <button
                          onClick={handleExportPDF}
                          className="w-full bg-white hover:bg-stone-50 border border-[#E5DFD5] p-3 rounded-xl text-left flex items-center justify-between text-xs transition-all cursor-pointer"
                        >
                          <div className="flex items-center gap-2.5">
                            <Layers className="w-4 h-4 text-[#4A533E]" />
                            <div>
                              <div className="font-bold text-[#1C1917]">Pocket Field Companion (4×6")</div>
                              <div className="text-[10px] text-stone-500">4 High-Contrast Printables</div>
                            </div>
                          </div>
                          <Download className="w-4 h-4 text-stone-400" />
                        </button>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="py-8 text-center space-y-3">
                    <div className="w-12 h-12 rounded-full bg-stone-200 flex items-center justify-center mx-auto text-stone-500">
                      <ShoppingBag className="w-6 h-6" />
                    </div>
                    <div className="text-xs text-stone-600 max-w-xs mx-auto">
                      Click <strong>"Simulate 1-Click Payment"</strong> on the left to preview the customer's post-purchase delivery hub.
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* SUBVIEW 5: VALIDATION FUNNEL ANALYTICS */}
      {/* ============================================================== */}
      {activeSubView === 'analytics' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E5DFD5] shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E5DFD5] pb-4">
              <div>
                <h3 className="font-serif text-xl font-bold text-[#1C1917]">
                  Vol. 01 Commercial Validation Metric Dashboard
                </h3>
                <p className="text-xs text-stone-600 mt-1">
                  Active tracking loop: Problem Traffic → Free Article → $24 Playbook → $7 Bump → Customer Feedback.
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs bg-emerald-50 text-emerald-800 border border-emerald-200 px-3 py-1.5 rounded-lg font-medium">
                <Zap className="w-3.5 h-3.5 text-emerald-600" />
                <span>Validation Milestone 1: 100 Paid Customers Target</span>
              </div>
            </div>

            {/* KPI Metric Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="bg-stone-50 p-4 rounded-xl border border-stone-200">
                <div className="text-[11px] text-stone-500 uppercase tracking-wider font-semibold">Store Visitors</div>
                <div className="text-2xl font-bold font-mono text-[#1C1917] mt-1">1,840</div>
                <div className="text-[10px] text-emerald-600 font-medium mt-0.5">Top: TikTok & Pinterest</div>
              </div>

              <div className="bg-stone-50 p-4 rounded-xl border border-stone-200">
                <div className="text-[11px] text-stone-500 uppercase tracking-wider font-semibold">Conversion Rate</div>
                <div className="text-2xl font-bold font-mono text-[#4A533E] mt-1">4.02%</div>
                <div className="text-[10px] text-stone-500 mt-0.5">74 Total Paid Orders</div>
              </div>

              <div className="bg-stone-50 p-4 rounded-xl border border-stone-200">
                <div className="text-[11px] text-stone-500 uppercase tracking-wider font-semibold">Bump Take Rate</div>
                <div className="text-2xl font-bold font-mono text-amber-700 mt-1">37.8%</div>
                <div className="text-[10px] text-stone-500 mt-0.5">28 Field Card Add-ons</div>
              </div>

              <div className="bg-stone-50 p-4 rounded-xl border border-stone-200">
                <div className="text-[11px] text-stone-500 uppercase tracking-wider font-semibold">Average Order Value</div>
                <div className="text-2xl font-bold font-mono text-[#1C1917] mt-1">$27.19 <span className="text-xs font-sans text-stone-500">CAD</span></div>
                <div className="text-[10px] text-emerald-600 font-medium mt-0.5">+13.3% AOV Lift</div>
              </div>
            </div>

            {/* Acquisition Funnel Breakdown */}
            <div className="space-y-3 pt-4 border-t border-[#E5DFD5]">
              <h4 className="font-serif text-sm font-bold text-[#1C1917]">
                Customer Acquisition Pipeline Flow
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-3 text-xs">
                <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 space-y-1">
                  <div className="font-bold text-[#1C1917]">1. Free Viral Pin / Video</div>
                  <p className="text-stone-500 text-[11px]">"How to Hang Heavy Mirrors in Rentals Without Nails"</p>
                  <div className="text-[10px] font-mono font-bold text-stone-600">42,000 Views</div>
                </div>

                <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 space-y-1">
                  <div className="font-bold text-[#1C1917]">2. High-Intent Blog Post</div>
                  <p className="text-stone-500 text-[11px]">Substrate tests & 70% IPA prep guide</p>
                  <div className="text-[10px] font-mono font-bold text-stone-600">1,840 Readers</div>
                </div>

                <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 space-y-1">
                  <div className="font-bold text-[#1C1917]">3. Vol. 01 Playbook ($24)</div>
                  <p className="text-stone-500 text-[11px]">Full 30-page system + CSV calculator</p>
                  <div className="text-[10px] font-mono font-bold text-emerald-700">74 Purchases</div>
                </div>

                <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 space-y-1">
                  <div className="font-bold text-[#1C1917]">4. Checkout Bump ($7)</div>
                  <p className="text-stone-500 text-[11px]">4×6" Pocket installation cards</p>
                  <div className="text-[10px] font-mono font-bold text-amber-700">28 Add-ons (38%)</div>
                </div>

                <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 space-y-1">
                  <div className="font-bold text-[#1C1917]">5. Follow-Up (Day 7)</div>
                  <p className="text-stone-500 text-[11px]">Email invite to Vol. 02 Kitchen Maximizer</p>
                  <div className="text-[10px] font-mono font-bold text-indigo-700">19 Repeat Buyers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
