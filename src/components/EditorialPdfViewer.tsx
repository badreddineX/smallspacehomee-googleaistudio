import React, { useState } from 'react';
import { 
  ShieldCheck, 
  AlertTriangle, 
  CheckCircle2, 
  Sparkles, 
  Download, 
  Copy, 
  Check, 
  FileText, 
  Compass, 
  ArrowRight, 
  Layers, 
  Info, 
  Scale, 
  Maximize2, 
  Minimize2, 
  Search, 
  Clock, 
  DollarSign, 
  RotateCcw, 
  CheckSquare, 
  Wrench, 
  Eye, 
  Bookmark, 
  Flame, 
  Zap, 
  Thermometer, 
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Sliders,
  Camera,
  Home,
  CheckCircle
} from 'lucide-react';
import { downloadValidPDF } from '../utils/pdfGenerator';

interface EditorialPdfViewerProps {
  fileName: string;
  fileSize: string;
  badge: string;
  description: string;
  productTitle: string;
  rawContent: string;
}

export const EditorialPdfViewer: React.FC<EditorialPdfViewerProps> = ({
  fileName,
  fileSize,
  badge,
  description,
  productTitle,
  rawContent
}) => {
  const [activeSection, setActiveSection] = useState<string>('sec-01');
  const [copied, setCopied] = useState<boolean>(false);
  const [viewMode, setViewMode] = useState<'editorial' | 'raw'>('editorial');
  const [searchFilter, setSearchFilter] = useState<string>('');
  
  // Interactive Decision Tree State
  const [dtWeightBracket, setDtWeightBracket] = useState<'under-2' | '2-to-10' | '10-to-25' | 'over-25'>('2-to-10');
  const [dtSurface, setDtSurface] = useState<'drywall' | 'plaster' | 'tile' | 'wood-door'>('drywall');
  const [dtItemType, setDtItemType] = useState<'frame' | 'mirror' | 'shelf' | 'cord'>('frame');

  // Interactive Checklist State
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({
    'pre-1': true,
    'pre-2': true,
    'mon-1': false,
    'mon-2': false,
    'mo-1': false,
    'mo-2': false
  });

  const toggleCheck = (id: string) => {
    setCheckedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(rawContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadPDF = () => {
    downloadValidPDF(rawContent, fileName, productTitle, badge);
  };

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Decision Tree Recommendation Engine
  const getDecisionRecommendation = () => {
    if (dtWeightBracket === 'over-25') {
      return {
        method: 'Floor-Leaning Support + Anti-Tip Base Tether',
        hardware: 'Solid furniture floor base + 3M Claw or Stud-Mounted Safety Tether',
        capacity: 'Floor carries 95% of load; wall tether only prevents forward tip',
        safeRating: '100% Renter Safe (Zero wall shear load)',
        caveat: 'NEVER attempt to mount items over 25 lbs to rental drywall using adhesive strips alone.'
      };
    }
    if (dtSurface === 'tile') {
      return {
        method: 'Water-Resistant Silicone Adhesive Strips or Vacuum Suction',
        hardware: '3M Command Bath Water-Resistant Strips (Frosted tab)',
        capacity: '3 to 5 lbs per strip (Clean with 70% Isopropyl Alcohol first)',
        safeRating: '100% Zero-Tile-Drilling Safe',
        caveat: 'Degrease tile thoroughly. Avoid grout lines; adhere only to smooth glazed ceramic surfaces.'
      };
    }
    if (dtSurface === 'plaster') {
      return {
        method: 'Pre-1950 Moulding Picture Rail Hooks or Angled Brass Pins into Lath',
        hardware: 'Moulding Hook + Stainless Cable, or Floreat Brass Precision Pins',
        capacity: '5 to 15 lbs depending on picture rail depth',
        safeRating: 'Safe for Brittle Heritage Plaster',
        caveat: 'Do NOT use push-in wire hooks (Gorilla/OOK) on plaster-and-lath—they will shatter the brittle plaster keys.'
      };
    }
    if (dtSurface === 'wood-door') {
      return {
        method: 'Over-Door Gravity Bracket with Dense Felt Cushioning',
        hardware: 'Umbra Over-Door Steel Bracket + Adhesive Felt Bumper Pads',
        capacity: 'Up to 15 lbs distributed across top door rail',
        safeRating: '100% Zero-Drill Millwork Safe',
        caveat: 'Verify at least 2mm clearance between top door edge and frame so door closes flush without binding.'
      };
    }
    // Default Drywall
    if (dtWeightBracket === 'under-2') {
      return {
        method: 'Small Adhesive Picture Hanging Strips',
        hardware: '3M Command Small Click-Strips (2 pairs per item)',
        capacity: 'Up to 2.5 lbs total weight (Gross tare-verified)',
        safeRating: '100% Renter Safe (< 1 hr cure)',
        caveat: 'Clean wall with 70% Isopropyl Alcohol. Wait 15 minutes before pressing strips.'
      };
    }
    if (dtWeightBracket === '2-to-10') {
      return {
        method: 'Medium/Large 4-Corner Adhesive Click-Strips',
        hardware: '3M Command Large Picture Hanging Strips (4 pairs on 4 corners)',
        capacity: 'Up to 8 to 10 lbs conservative working load (16 lbs rated)',
        safeRating: '100% Renter Safe (30-50% safety buffer)',
        caveat: 'Mandatory 1-hour cure time with frame removed before hanging weight.'
      };
    }
    return {
      method: 'Push-In Drywall Wire Hook or 3M Claw Anchor',
      hardware: 'OOK / Gorilla Steel Wire Push Hook or 3M Claw 25lb Anchor',
      capacity: 'Up to 20 lbs conservative working load',
      safeRating: 'Leaves pinhole < 1.5mm (Invisible with $12 spackle at move-out)',
      caveat: 'Insert by hand with gentle twisting motion. Do not install directly over sleeping areas.'
    };
  };

  const recommendation = getDecisionRecommendation();

  const sectionsList = [
    { id: 'sec-01', num: '01', title: 'Cover & Canadian Context' },
    { id: 'sec-02', num: '02', title: 'Opening & Promise' },
    { id: 'sec-03', num: '03', title: 'Quick Start (4 Core Checks)' },
    { id: 'sec-04', num: '04', title: 'Safety & Load Limits' },
    { id: 'sec-05', num: '05', title: 'Wall & Surface Diagnostics' },
    { id: 'sec-06', num: '06', title: 'Weight & Leverage Planning' },
    { id: 'sec-07', num: '07', title: 'Mounting Decision Tree' },
    { id: 'sec-08', num: '08', title: '70% IPA Surface Prep' },
    { id: 'sec-09', num: '09', title: '13-Step Installation Playbook' },
    { id: 'sec-10', num: '10', title: 'Tactical Hack Pages' },
    { id: 'sec-11', num: '11', title: 'Field Notes Vault' },
    { id: 'sec-12', num: '12', title: 'Careful Removal & Thermal' },
    { id: 'sec-13', num: '13', title: 'Monitoring & Seasonal Audits' },
    { id: 'sec-14', num: '14', title: 'Move-Out & Deposit Defense' },
    { id: 'sec-15', num: '15', title: 'Printable Pocket Cards' },
    { id: 'sec-16', num: '16', title: 'Sources & Canadian Retailers' },
  ];

  return (
    <div className="bg-white border border-[#E5DFD5] shadow-xs rounded-xs overflow-hidden">
      
      {/* Top Publication Toolbar */}
      <div className="bg-[#1C1917] text-[#FAF8F5] p-4 sm:p-5 border-b border-[#1C1917] flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="px-2 py-0.5 bg-[#4A533E] text-white text-[9px] font-bold uppercase tracking-wider rounded-xs">
              SmallSpaceHome Editorial Field Publication
            </span>
            <span className="text-[10px] text-[#D9D3C7] font-mono">
              {fileName} • {fileSize}
            </span>
          </div>
          <h2 className="text-base sm:text-lg font-serif font-bold text-white tracking-tight">
            {productTitle}
          </h2>
          <p className="text-xs text-[#D9D3C7]/80 line-clamp-1">
            {description}
          </p>
        </div>

        {/* View Mode Controls & Export */}
        <div className="flex items-center gap-2.5 shrink-0 flex-wrap">
          <div className="flex bg-[#292524] border border-white/20 p-0.5 rounded-xs">
            <button
              onClick={() => setViewMode('editorial')}
              className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer rounded-xs ${
                viewMode === 'editorial' ? 'bg-[#4A533E] text-white' : 'text-[#D9D3C7] hover:text-white'
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Editorial Magazine View</span>
            </button>
            <button
              onClick={() => setViewMode('raw')}
              className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer rounded-xs ${
                viewMode === 'raw' ? 'bg-[#4A533E] text-white' : 'text-[#D9D3C7] hover:text-white'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Markdown Source</span>
            </button>
          </div>

          <button
            onClick={handleCopy}
            title="Copy Raw Content"
            className="p-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-colors cursor-pointer rounded-xs"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
          </button>

          <button
            onClick={handleDownloadPDF}
            className="px-4 py-2 bg-[#4A533E] hover:bg-[#FAF8F5] hover:text-[#1C1917] text-white text-xs font-bold uppercase tracking-wider transition-all cursor-pointer border border-[#4A533E] shadow-xs flex items-center gap-2 rounded-xs"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download Vector .PDF</span>
          </button>
        </div>
      </div>

      {viewMode === 'raw' ? (
        <div className="p-4 sm:p-6 bg-[#1C1917]">
          <div className="flex justify-between items-center pb-2 text-xs text-[#D9D3C7] border-b border-white/10 font-mono">
            <span>RAW SOURCE PREVIEW ({rawContent.length} characters)</span>
            <span>UTF-8 ENCODED</span>
          </div>
          <pre className="mt-3 p-4 bg-[#292524] text-[#FAF8F5] text-xs font-mono leading-relaxed overflow-x-auto max-h-[700px] border border-white/10 whitespace-pre-wrap select-all">
            {rawContent}
          </pre>
        </div>
      ) : (
        <div>
          {/* Sticky Editorial Navigation Bar */}
          <div className="sticky top-0 z-30 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E5DFD5] px-4 py-2.5 flex items-center justify-between gap-3 overflow-x-auto scrollbar-none shadow-xs">
            <div className="flex items-center gap-1.5 shrink-0">
              <Compass className="w-4 h-4 text-[#4A533E]" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#1C1917]">
                Quick Jump:
              </span>
            </div>
            
            <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none">
              {sectionsList.map((sec) => (
                <button
                  key={sec.id}
                  onClick={() => scrollToSection(sec.id)}
                  className={`px-2.5 py-1 text-[11px] font-medium whitespace-nowrap transition-colors cursor-pointer border rounded-xs ${
                    activeSection === sec.id
                      ? 'bg-[#1C1917] text-[#FAF8F5] border-[#1C1917] font-bold'
                      : 'bg-white text-[#1C1917]/80 border-[#E5DFD5] hover:border-[#4A533E]'
                  }`}
                >
                  <span className="text-[#4A533E] font-mono mr-1">{sec.num}</span>
                  <span>{sec.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Editorial Publication Document Body */}
          <div className="bg-[#FAF8F5] p-4 sm:p-8 lg:p-12 space-y-12 max-w-5xl mx-auto">
            
            {/* ======================================================== */}
            {/* SECTION 01: COVER & CANADIAN CONTEXT */}
            {/* ======================================================== */}
            <article id="sec-01" className="bg-white border border-[#E5DFD5] p-6 sm:p-12 shadow-xs space-y-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#4A533E]/5 rounded-bl-full pointer-events-none" />
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E5DFD5] pb-4">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#4A533E]" />
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#4A533E]">
                    SmallSpaceHome.ca • Master Field Playbook
                  </span>
                </div>
                <div className="flex items-center gap-2 text-[10px] font-mono text-[#1C1917]/70">
                  <span className="px-2 py-0.5 bg-[#FAF8F5] border border-[#E5DFD5] font-bold text-[#4A533E]">
                    VOL. 01 • RENTER MOUNTING & WALL HACKS
                  </span>
                  <span>EDITION 2026.1</span>
                </div>
              </div>

              <div className="space-y-4 max-w-3xl">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1C1917] tracking-tight leading-[1.1]">
                  The Zero-Damage Renter Mounting & Secret Wall Hacks Kit
                </h1>
                <p className="text-base sm:text-xl font-serif italic text-[#4A533E] leading-relaxed">
                  A Practical Editorial Guide to Planning, Installing, Monitoring, and Removing Wall-Mounted Items in Rental Homes
                </p>
                <p className="text-xs sm:text-sm text-[#1C1917]/80 leading-relaxed font-sans pt-2">
                  Engineered and stress-tested in our 510 sq ft Toronto rental apartment laboratory. This publication provides verified hardware tolerances, surface diagnostics, 70% isopropyl degreasing procedures, and move-out repair recipes designed to protect your full security deposit while maximizing vertical living space.
                </p>
              </div>

              {/* Minimal Editorial Visual Stats Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="bg-[#FAF8F5] p-3.5 border border-[#E5DFD5]">
                  <span className="text-[9px] font-bold uppercase tracking-wider text-[#4A533E] block">Tested Environment</span>
                  <span className="font-serif font-bold text-sm text-[#1C1917] block mt-0.5">510 Sq Ft Studio Lab</span>
                  <span className="text-[10px] text-[#1C1917]/60">Toronto • Montreal • Vancouver</span>
                </div>
                <div className="bg-[#FAF8F5] p-3.5 border border-[#E5DFD5]">
                  <span className="text-[9px] font-bold uppercase tracking-wider text-[#4A533E] block">Safety Standard</span>
                  <span className="font-serif font-bold text-sm text-[#1C1917] block mt-0.5">30–50% Load Buffer</span>
                  <span className="text-[10px] text-[#1C1917]/60">Zero Unsupported Claims</span>
                </div>
                <div className="bg-[#FAF8F5] p-3.5 border border-[#E5DFD5]">
                  <span className="text-[9px] font-bold uppercase tracking-wider text-[#4A533E] block">Wall Protection</span>
                  <span className="font-serif font-bold text-sm text-[#1C1917] block mt-0.5">100% Zero-Tile-Drill</span>
                  <span className="text-[10px] text-[#1C1917]/60">Pinhole Drywall Anchors</span>
                </div>
                <div className="bg-[#FAF8F5] p-3.5 border border-[#E5DFD5]">
                  <span className="text-[9px] font-bold uppercase tracking-wider text-[#4A533E] block">Deliverable Scope</span>
                  <span className="font-serif font-bold text-sm text-[#1C1917] block mt-0.5">16 Core Modules</span>
                  <span className="text-[10px] text-[#1C1917]/60">PDF + CSV + Notion + Cards</span>
                </div>
              </div>
            </article>

            {/* ======================================================== */}
            {/* SECTION 02: OPENING & PROMISE */}
            {/* ======================================================== */}
            <article id="sec-02" className="bg-white border border-[#E5DFD5] p-6 sm:p-10 shadow-xs space-y-6">
              <div className="border-b border-[#E5DFD5] pb-3">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#4A533E] block">
                  Section 02 / The Foundation
                </span>
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#1C1917]">
                  What This Guide Is & How to Use It
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[#FAF8F5] p-5 border border-[#E5DFD5] space-y-2">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#4A533E]" />
                    <h3 className="font-serif font-bold text-sm text-[#1C1917]">What is this?</h3>
                  </div>
                  <p className="text-xs text-[#1C1917]/80 leading-relaxed">
                    A tactical, step-by-step operating system for hanging artwork, full-length mirrors, entryway hooks, curtains, and lightweight shelves without tearing drywall paper, cracking brittle heritage plaster, or losing your rental deposit.
                  </p>
                </div>

                <div className="bg-[#FAF8F5] p-5 border border-[#E5DFD5] space-y-2">
                  <div className="flex items-center gap-2">
                    <Home className="w-4 h-4 text-[#4A533E]" />
                    <h3 className="font-serif font-bold text-sm text-[#1C1917]">Who is it for?</h3>
                  </div>
                  <p className="text-xs text-[#1C1917]/80 leading-relaxed">
                    Urban renters in Canada and the US living in spaces under 800 sq ft who want their apartments to look thoughtfully styled, personalized, and functional without risking disputes with strict property managers.
                  </p>
                </div>

                <div className="bg-[#FAF8F5] p-5 border border-[#E5DFD5] space-y-2">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#4A533E]" />
                    <h3 className="font-serif font-bold text-sm text-[#1C1917]">What can I accomplish?</h3>
                  </div>
                  <p className="text-xs text-[#1C1917]/80 leading-relaxed">
                    Mount gallery walls in under 30 minutes, eliminate clutter from your floor, secure heavy full-length floor mirrors with hidden gravity tethers, and remove all hardware with zero residue when moving out.
                  </p>
                </div>

                <div className="bg-[#FAF8F5] p-5 border border-[#E5DFD5] space-y-2">
                  <div className="flex items-center gap-2">
                    <Compass className="w-4 h-4 text-[#4A533E]" />
                    <h3 className="font-serif font-bold text-sm text-[#1C1917]">What will I learn?</h3>
                  </div>
                  <p className="text-xs text-[#1C1917]/80 leading-relaxed">
                    How to diagnose wall substrates by sound, calculate conservative working loads, perform proper 70% isopropyl degreasing, execute thermal stretch releases, and patch pinholes in 60 seconds.
                  </p>
                </div>
              </div>
            </article>

            {/* ======================================================== */}
            {/* SECTION 03: QUICK START — BEFORE YOU MOUNT */}
            {/* ======================================================== */}
            <article id="sec-03" className="bg-white border border-[#E5DFD5] p-6 sm:p-10 shadow-xs space-y-6">
              <div className="border-b border-[#E5DFD5] pb-3 flex justify-between items-end flex-wrap gap-2">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#4A533E] block">
                    Section 03 / Quick Start
                  </span>
                  <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#1C1917]">
                    Before You Mount: The 4 Core Checks
                  </h2>
                </div>
                <span className="text-[10px] font-bold uppercase px-2.5 py-1 bg-[#4A533E] text-white">
                  Execute Before Every Project
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Check 1 */}
                <div className="bg-[#FAF8F5] p-5 border-t-2 border-t-[#4A533E] border-[#E5DFD5] space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase text-[#4A533E] tracking-wider">Step 01</span>
                    <Scale className="w-4 h-4 text-[#4A533E]" />
                  </div>
                  <h3 className="font-serif font-bold text-base text-[#1C1917]">WEIGHT</h3>
                  <p className="text-xs text-[#1C1917]/80 leading-relaxed">
                    Weigh the <strong>gross tare weight</strong> on a digital kitchen scale. Include frame, glass, mounting wire, and hardware. Never guess item weight.
                  </p>
                  <div className="pt-2 text-[10px] text-[#4A533E] font-bold flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" />
                    <span>Apply 30-50% buffer</span>
                  </div>
                </div>

                {/* Check 2 */}
                <div className="bg-[#FAF8F5] p-5 border-t-2 border-t-[#4A533E] border-[#E5DFD5] space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase text-[#4A533E] tracking-wider">Step 02</span>
                    <Home className="w-4 h-4 text-[#4A533E]" />
                  </div>
                  <h3 className="font-serif font-bold text-base text-[#1C1917]">SURFACE</h3>
                  <p className="text-xs text-[#1C1917]/80 leading-relaxed">
                    Perform knuckle-tap diagnostic. Differentiate smooth drywall, plaster-and-lath, glazed tile, or veneer millwork. Test paint adhesion.
                  </p>
                  <div className="pt-2 text-[10px] text-[#4A533E] font-bold flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" />
                    <span>Check texture & paint age</span>
                  </div>
                </div>

                {/* Check 3 */}
                <div className="bg-[#FAF8F5] p-5 border-t-2 border-t-[#4A533E] border-[#E5DFD5] space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase text-[#4A533E] tracking-wider">Step 03</span>
                    <Wrench className="w-4 h-4 text-[#4A533E]" />
                  </div>
                  <h3 className="font-serif font-bold text-base text-[#1C1917]">HARDWARE</h3>
                  <p className="text-xs text-[#1C1917]/80 leading-relaxed">
                    Verify manufacturer rated capacity. Match strip size (S/M/L) or wire hook gauge. Never mix mismatched adhesive brands on one item.
                  </p>
                  <div className="pt-2 text-[10px] text-[#4A533E] font-bold flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" />
                    <span>Use 4 corners for frames</span>
                  </div>
                </div>

                {/* Check 4 */}
                <div className="bg-[#FAF8F5] p-5 border-t-2 border-t-[#4A533E] border-[#E5DFD5] space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase text-[#4A533E] tracking-wider">Step 04</span>
                    <Compass className="w-4 h-4 text-[#4A533E]" />
                  </div>
                  <h3 className="font-serif font-bold text-base text-[#1C1917]">LOCATION</h3>
                  <p className="text-xs text-[#1C1917]/80 leading-relaxed">
                    Audit ambient conditions. Avoid cold exterior walls (&lt;10°C), steam zones, heating vents, and high-risk overhead areas directly above beds.
                  </p>
                  <div className="pt-2 text-[10px] text-[#4A533E] font-bold flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" />
                    <span>No adhesive over beds</span>
                  </div>
                </div>
              </div>
            </article>

            {/* ======================================================== */}
            {/* SECTION 04: SAFETY FIRST & CONSERVATIVE LOAD LIMITS */}
            {/* ======================================================== */}
            <article id="sec-04" className="bg-white border border-[#E5DFD5] p-6 sm:p-10 shadow-xs space-y-6">
              <div className="border-b border-[#E5DFD5] pb-3">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#4A533E] block">
                  Section 04 / Risk Mitigation
                </span>
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#1C1917]">
                  Safety Ground Rules & Conservative Working Loads
                </h2>
              </div>

              {/* Primary Safety Alert Box */}
              <div className="bg-[#FAF8F5] border-l-4 border-[#4A533E] p-4 sm:p-5 space-y-2">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#4A533E]" />
                  <span className="font-serif font-bold text-sm text-[#1C1917]">
                    The SmallSpaceHome Conservative Load Principle
                  </span>
                </div>
                <p className="text-xs text-[#1C1917]/85 leading-relaxed">
                  Manufacturer weight ratings are established in temperature-controlled laboratories on perfectly smooth, unpainted steel or virgin acrylic panels with static vertical downward loads. In real rental homes, fluctuating humidity, vibration from slammed doors, cantilever torque, and imperfect builder-grade latex paint reduce holding capacity. <strong>Always operate at 50% to 70% of stated packaging limits.</strong>
                </p>
              </div>

              {/* Do's and Don'ts Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-emerald-50/50 border border-emerald-200 p-4 space-y-2 rounded-xs">
                  <div className="flex items-center gap-2 text-emerald-900 font-bold text-xs uppercase tracking-wider">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                    <span>Always Do This (Renter Safe)</span>
                  </div>
                  <ul className="text-xs text-emerald-950 space-y-1.5 list-disc pl-4">
                    <li>Clean the exact contact patch with 70% Isopropyl Alcohol on a lint-free cloth.</li>
                    <li>Wait the full mandatory 1-hour cure time before re-attaching frames to wall strips.</li>
                    <li>Use 4 adhesive strip sets (one in each corner) on frames wider than 11 inches.</li>
                    <li>Pull the removal tab slowly, parallel to the wall, stretching at least 15 inches.</li>
                    <li>Log installation dates and photos in your digital Notion inventory for move-out defense.</li>
                  </ul>
                </div>

                <div className="bg-rose-50/50 border border-rose-200 p-4 space-y-2 rounded-xs">
                  <div className="flex items-center gap-2 text-rose-900 font-bold text-xs uppercase tracking-wider">
                    <AlertTriangle className="w-4 h-4 text-rose-700" />
                    <span>Never Do This (High Risk)</span>
                  </div>
                  <ul className="text-xs text-rose-950 space-y-1.5 list-disc pl-4">
                    <li>NEVER hang heavy glass frames, mirrors, or shelving directly over beds or cribs with adhesives.</li>
                    <li>Never use Windex, dish soap, or all-purpose spray cleaners (they leave silicone/glycol residues).</li>
                    <li>Never apply adhesive strips to fresh paint under 28 days old (solvents outgas and weaken bond).</li>
                    <li>Never pull adhesive tabs outward at a 90-degree angle toward yourself (tears drywall paper).</li>
                    <li>Never mount items exceeding 25 lbs on drywall without mechanical anchors or floor support.</li>
                  </ul>
                </div>
              </div>
            </article>

            {/* ======================================================== */}
            {/* SECTION 05: WALL & SURFACE DIAGNOSTICS */}
            {/* ======================================================== */}
            <article id="sec-05" className="bg-white border border-[#E5DFD5] p-6 sm:p-10 shadow-xs space-y-6">
              <div className="border-b border-[#E5DFD5] pb-3">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#4A533E] block">
                  Section 05 / Surface Diagnostics
                </span>
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#1C1917]">
                  Wall & Surface Identification Decision Table
                </h2>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left border-collapse border border-[#E5DFD5]">
                  <thead>
                    <tr className="bg-[#1C1917] text-[#FAF8F5]">
                      <th className="p-3 font-serif font-bold">Surface Type</th>
                      <th className="p-3 font-serif font-bold">Knuckle-Tap Diagnostic</th>
                      <th className="p-3 font-serif font-bold">Recommended Approach</th>
                      <th className="p-3 font-serif font-bold">What to Avoid</th>
                      <th className="p-3 font-serif font-bold">Rental Damage Risk</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E5DFD5]">
                    <tr className="bg-white hover:bg-[#FAF8F5]">
                      <td className="p-3 font-bold text-[#1C1917]">Modern Drywall (Gypsum Board)</td>
                      <td className="p-3 text-[#1C1917]/80">Hollow, resonant thud; slight give under firm thumb pressure</td>
                      <td className="p-3 text-[#4A533E] font-medium">3M Command Click-Strips, OOK Push-Wire Hooks, 3M Claw</td>
                      <td className="p-3 text-[#1C1917]/70">Plastic expansion screw anchors without landlord sign-off</td>
                      <td className="p-3"><span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 font-bold text-[10px]">Zero to Minimal (&lt;1mm pinhole)</span></td>
                    </tr>
                    <tr className="bg-[#FAF8F5] hover:bg-white">
                      <td className="p-3 font-bold text-[#1C1917]">Plaster & Lath (Pre-1950 Buildings)</td>
                      <td className="p-3 text-[#1C1917]/80">Solid, dense, dull thud; cold surface feel; slight sand texture</td>
                      <td className="p-3 text-[#4A533E] font-medium">Picture rail moulding hooks, angled thin brass pins into lath, floor tethers</td>
                      <td className="p-3 text-[#1C1917]/70">Curved push-wire hooks (will shatter brittle plaster keys)</td>
                      <td className="p-3"><span className="px-2 py-0.5 bg-amber-100 text-amber-800 font-bold text-[10px]">Medium (Plaster cracks easily)</span></td>
                    </tr>
                    <tr className="bg-white hover:bg-[#FAF8F5]">
                      <td className="p-3 font-bold text-[#1C1917]">Glazed Ceramic Tile (Bath/Kitchen)</td>
                      <td className="p-3 text-[#1C1917]/80">High-pitched glassy click; zero give; cold vitreous finish</td>
                      <td className="p-3 text-[#4A533E] font-medium">Water-Resistant Silicone Adhesive Strips, heavy suction locks</td>
                      <td className="p-3 text-[#1C1917]/70">Masonry drill bits or mounting directly over porous grout lines</td>
                      <td className="p-3"><span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 font-bold text-[10px]">100% Zero Damage</span></td>
                    </tr>
                    <tr className="bg-[#FAF8F5] hover:bg-white">
                      <td className="p-3 font-bold text-[#1C1917]">Finished Millwork & Veneer</td>
                      <td className="p-3 text-[#1C1917]/80">Muffled wood tap; smooth grain or satin polyurethane sheen</td>
                      <td className="p-3 text-[#4A533E] font-medium">Over-door gravity brackets with felt pads, light adhesive hooks (&lt;2 lbs)</td>
                      <td className="p-3 text-[#1C1917]/70">Aggressive heavy-duty mounting tape (tears wood veneer)</td>
                      <td className="p-3"><span className="px-2 py-0.5 bg-amber-100 text-amber-800 font-bold text-[10px]">Low (Use felt buffer)</span></td>
                    </tr>
                    <tr className="bg-white hover:bg-[#FAF8F5]">
                      <td className="p-3 font-bold text-[#1C1917]">Hollow-Core Rental Doors</td>
                      <td className="p-3 text-[#1C1917]/80">Very hollow, drum-like echo; 1/8" thin skin over cardboard honeycomb</td>
                      <td className="p-3 text-[#4A533E] font-medium">Over-door bracket rails with top-edge felt buffer, lightweight hooks</td>
                      <td className="p-3 text-[#1C1917]/70">Wood screws (will strip out under 3 lbs of load)</td>
                      <td className="p-3"><span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 font-bold text-[10px]">Zero (Using over-door rails)</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </article>

            {/* ======================================================== */}
            {/* SECTION 06: WEIGHT & LOAD PLANNING */}
            {/* ======================================================== */}
            <article id="sec-06" className="bg-white border border-[#E5DFD5] p-6 sm:p-10 shadow-xs space-y-6">
              <div className="border-b border-[#E5DFD5] pb-3">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#4A533E] block">
                  Section 06 / Structural Physics
                </span>
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#1C1917]">
                  Weight, Leverage & Dynamic Load Planning
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-[#FAF8F5] p-4 border border-[#E5DFD5] space-y-2">
                  <span className="text-[10px] font-mono font-bold text-[#4A533E]">01 • KNOW GROSS TARE</span>
                  <h3 className="font-serif font-bold text-sm text-[#1C1917]">Weigh Everything</h3>
                  <p className="text-xs text-[#1C1917]/80 leading-relaxed">
                    Always weigh the item including glass, backing, hardware, and any items stored on it (e.g. key tray with 5 heavy key rings).
                  </p>
                </div>

                <div className="bg-[#FAF8F5] p-4 border border-[#E5DFD5] space-y-2">
                  <span className="text-[10px] font-mono font-bold text-[#4A533E]">02 • CHECK RATINGS</span>
                  <h3 className="font-serif font-bold text-sm text-[#1C1917]">Rated vs Working</h3>
                  <p className="text-xs text-[#1C1917]/80 leading-relaxed">
                    Packaging claims 16 lbs for 4 pairs of large strips. SmallSpaceHome standard dictates max working load of <strong>8 to 10 lbs</strong>.
                  </p>
                </div>

                <div className="bg-[#FAF8F5] p-4 border border-[#E5DFD5] space-y-2">
                  <span className="text-[10px] font-mono font-bold text-[#4A533E]">03 • ACCOUNT FOR LEVERAGE</span>
                  <h3 className="font-serif font-bold text-sm text-[#1C1917]">Cantilever Torque</h3>
                  <p className="text-xs text-[#1C1917]/80 leading-relaxed">
                    A shelf protruding 6 inches exerts 3x more peeling force on top adhesive strips than a flat frame hanging flush against drywall.
                  </p>
                </div>

                <div className="bg-[#FAF8F5] p-4 border border-[#E5DFD5] space-y-2">
                  <span className="text-[10px] font-mono font-bold text-[#4A533E]">04 • APPLY 50% BUFFER</span>
                  <h3 className="font-serif font-bold text-sm text-[#1C1917]">The Renter Buffer</h3>
                  <p className="text-xs text-[#1C1917]/80 leading-relaxed">
                    If an item weighs 7 lbs, select hardware rated for at least 14 to 16 lbs. The margin guarantees safety during winter temperature drops.
                  </p>
                </div>
              </div>
            </article>

            {/* ======================================================== */}
            {/* SECTION 07: MOUNTING METHOD DECISION TREE */}
            {/* ======================================================== */}
            <article id="sec-07" className="bg-white border border-[#E5DFD5] p-6 sm:p-10 shadow-xs space-y-6">
              <div className="border-b border-[#E5DFD5] pb-3">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#4A533E] block">
                  Section 07 / Interactive Decision Tool
                </span>
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#1C1917]">
                  Mounting Method Decision Engine
                </h2>
                <p className="text-xs text-[#1C1917]/70 mt-1">
                  Select your mounting criteria below to generate the exact hardware protocol and safety guidelines.
                </p>
              </div>

              {/* Interactive Selectors */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-[#FAF8F5] p-4 sm:p-5 border border-[#E5DFD5]">
                {/* Weight Selector */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-[#4A533E] block">
                    1. Item Weight:
                  </label>
                  <select
                    value={dtWeightBracket}
                    onChange={(e) => setDtWeightBracket(e.target.value as any)}
                    className="w-full bg-white border border-[#E5DFD5] p-2 text-xs font-medium text-[#1C1917] focus:outline-hidden focus:border-[#4A533E]"
                  >
                    <option value="under-2">Under 2 lbs (Light decor, small prints)</option>
                    <option value="2-to-10">2 to 10 lbs (Medium frames, clocks)</option>
                    <option value="10-to-25">10 to 25 lbs (Heavy framed prints, small mirrors)</option>
                    <option value="over-25">Over 25 lbs (Oversized mirrors, floor units)</option>
                  </select>
                </div>

                {/* Surface Selector */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-[#4A533E] block">
                    2. Wall Surface:
                  </label>
                  <select
                    value={dtSurface}
                    onChange={(e) => setDtSurface(e.target.value as any)}
                    className="w-full bg-white border border-[#E5DFD5] p-2 text-xs font-medium text-[#1C1917] focus:outline-hidden focus:border-[#4A533E]"
                  >
                    <option value="drywall">Smooth Drywall / Gypsum</option>
                    <option value="plaster">Plaster & Lath (Pre-1950)</option>
                    <option value="tile">Glazed Ceramic Tile (Bath/Kitchen)</option>
                    <option value="wood-door">Hollow-Core Door / Finished Wood</option>
                  </select>
                </div>

                {/* Item Type Selector */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-[#4A533E] block">
                    3. Object Type:
                  </label>
                  <select
                    value={dtItemType}
                    onChange={(e) => setDtItemType(e.target.value as any)}
                    className="w-full bg-white border border-[#E5DFD5] p-2 text-xs font-medium text-[#1C1917] focus:outline-hidden focus:border-[#4A533E]"
                  >
                    <option value="frame">Picture Frame / Wall Art</option>
                    <option value="mirror">Framed Mirror</option>
                    <option value="shelf">Floating Ledge / Display Shelf</option>
                    <option value="cord">Cable Raceway / Power Strip</option>
                  </select>
                </div>
              </div>

              {/* Dynamic Result Card */}
              <div className="bg-white border-2 border-[#4A533E] p-5 space-y-3 shadow-xs">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#4A533E]" />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#4A533E]">
                      Recommended Protocol:
                    </span>
                  </div>
                  <span className="px-2 py-0.5 bg-[#4A533E] text-white font-bold text-[10px] uppercase">
                    {recommendation.safeRating}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-serif font-bold text-[#1C1917]">
                  {recommendation.method}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-1">
                  <div className="bg-[#FAF8F5] p-3 border border-[#E5DFD5]">
                    <span className="text-[9px] font-bold uppercase text-[#4A533E] block">Required Hardware</span>
                    <span className="font-semibold text-[#1C1917]">{recommendation.hardware}</span>
                  </div>
                  <div className="bg-[#FAF8F5] p-3 border border-[#E5DFD5]">
                    <span className="text-[9px] font-bold uppercase text-[#4A533E] block">Working Capacity</span>
                    <span className="font-semibold text-[#1C1917]">{recommendation.capacity}</span>
                  </div>
                </div>

                <div className="bg-amber-50 border border-amber-200 p-2.5 text-xs text-amber-900 flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <span><strong>Important Limitation:</strong> {recommendation.caveat}</span>
                </div>
              </div>
            </article>

            {/* ======================================================== */}
            {/* SECTION 08: SURFACE PREPARATION PROTOCOL */}
            {/* ======================================================== */}
            <article id="sec-08" className="bg-white border border-[#E5DFD5] p-6 sm:p-10 shadow-xs space-y-6">
              <div className="border-b border-[#E5DFD5] pb-3">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#4A533E] block">
                  Section 08 / Surface Chemistry
                </span>
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#1C1917]">
                  Surface Preparation: The 70% Isopropyl Alcohol Standard
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                <div className="bg-[#FAF8F5] p-4 border-t-2 border-[#4A533E] border-[#E5DFD5] space-y-1.5">
                  <span className="text-[9px] font-bold uppercase text-[#4A533E]">Phase 01</span>
                  <h3 className="font-serif font-bold text-sm text-[#1C1917]">PREP</h3>
                  <p className="text-xs text-[#1C1917]/80">
                    Dust wall with dry microfiber cloth. Inspect paint for bubbling or cold drafts.
                  </p>
                </div>

                <div className="bg-[#FAF8F5] p-4 border-t-2 border-[#4A533E] border-[#E5DFD5] space-y-1.5">
                  <span className="text-[9px] font-bold uppercase text-[#4A533E]">Phase 02</span>
                  <h3 className="font-serif font-bold text-sm text-[#1C1917]">CLEAN</h3>
                  <p className="text-xs text-[#1C1917]/80">
                    Wipe target spot with <strong>70% Isopropyl Alcohol</strong>. Dissolves oils with zero soapy residue.
                  </p>
                </div>

                <div className="bg-[#FAF8F5] p-4 border-t-2 border-[#4A533E] border-[#E5DFD5] space-y-1.5">
                  <span className="text-[9px] font-bold uppercase text-[#4A533E]">Phase 03</span>
                  <h3 className="font-serif font-bold text-sm text-[#1C1917]">DRY</h3>
                  <p className="text-xs text-[#1C1917]/80">
                    Wait exactly <strong>15 minutes</strong> for alcohol vapors to flash off completely.
                  </p>
                </div>

                <div className="bg-[#FAF8F5] p-4 border-t-2 border-[#4A533E] border-[#E5DFD5] space-y-1.5">
                  <span className="text-[9px] font-bold uppercase text-[#4A533E]">Phase 04</span>
                  <h3 className="font-serif font-bold text-sm text-[#1C1917]">CHECK</h3>
                  <p className="text-xs text-[#1C1917]/80">
                    Touch wall lightly. Must feel bone dry and room temperature (&gt;15°C / 60°F).
                  </p>
                </div>
              </div>
            </article>

            {/* ======================================================== */}
            {/* SECTION 09: 13-STEP VISUAL INSTALLATION PLAYBOOK */}
            {/* ======================================================== */}
            <article id="sec-09" className="bg-white border border-[#E5DFD5] p-6 sm:p-10 shadow-xs space-y-6">
              <div className="border-b border-[#E5DFD5] pb-3">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#4A533E] block">
                  Section 09 / Execution System
                </span>
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#1C1917]">
                  The 13-Step Repeatable Installation Playbook
                </h2>
              </div>

              {/* Group 1: PREP (01 - 04) */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 bg-[#4A533E] text-white font-mono text-[9px] font-bold uppercase">
                    STAGE 1: PREPARATION (STEPS 01–04)
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                  <div className="bg-[#FAF8F5] p-3 border border-[#E5DFD5] space-y-1">
                    <span className="text-[9px] font-mono font-bold text-[#4A533E]">STEP 01</span>
                    <h4 className="font-bold text-xs text-[#1C1917]">Tare Weigh Item</h4>
                    <p className="text-[11px] text-[#1C1917]/70">Weigh frame + glass on digital scale.</p>
                  </div>
                  <div className="bg-[#FAF8F5] p-3 border border-[#E5DFD5] space-y-1">
                    <span className="text-[9px] font-mono font-bold text-[#4A533E]">STEP 02</span>
                    <h4 className="font-bold text-xs text-[#1C1917]">Inspect Surface</h4>
                    <p className="text-[11px] text-[#1C1917]/70">Confirm no peeling paint or moisture.</p>
                  </div>
                  <div className="bg-[#FAF8F5] p-3 border border-[#E5DFD5] space-y-1">
                    <span className="text-[9px] font-mono font-bold text-[#4A533E]">STEP 03</span>
                    <h4 className="font-bold text-xs text-[#1C1917]">70% Alcohol Wipe</h4>
                    <p className="text-[11px] text-[#1C1917]/70">Wipe wall area with lint-free cloth.</p>
                  </div>
                  <div className="bg-[#FAF8F5] p-3 border border-[#E5DFD5] space-y-1">
                    <span className="text-[9px] font-mono font-bold text-[#4A533E]">STEP 04</span>
                    <h4 className="font-bold text-xs text-[#1C1917]">15-Min Flash-Off</h4>
                    <p className="text-[11px] text-[#1C1917]/70">Wait for alcohol to evaporate fully.</p>
                  </div>
                </div>
              </div>

              {/* Group 2: INSTALL (05 - 08) */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 bg-[#4A533E] text-white font-mono text-[9px] font-bold uppercase">
                    STAGE 2: INSTALLATION (STEPS 05–08)
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                  <div className="bg-[#FAF8F5] p-3 border border-[#E5DFD5] space-y-1">
                    <span className="text-[9px] font-mono font-bold text-[#4A533E]">STEP 05</span>
                    <h4 className="font-bold text-xs text-[#1C1917]">Pair Strips Together</h4>
                    <p className="text-[11px] text-[#1C1917]/70">Press 2 strips until they click loudly.</p>
                  </div>
                  <div className="bg-[#FAF8F5] p-3 border border-[#E5DFD5] space-y-1">
                    <span className="text-[9px] font-mono font-bold text-[#4A533E]">STEP 06</span>
                    <h4 className="font-bold text-xs text-[#1C1917]">Mount to Frame</h4>
                    <p className="text-[11px] text-[#1C1917]/70">Peel green liner; press 30s onto frame back.</p>
                  </div>
                  <div className="bg-[#FAF8F5] p-3 border border-[#E5DFD5] space-y-1">
                    <span className="text-[9px] font-mono font-bold text-[#4A533E]">STEP 07</span>
                    <h4 className="font-bold text-xs text-[#1C1917]">Level & Align</h4>
                    <p className="text-[11px] text-[#1C1917]/70">Remove wall liners; align using bubble level.</p>
                  </div>
                  <div className="bg-[#FAF8F5] p-3 border border-[#E5DFD5] space-y-1">
                    <span className="text-[9px] font-mono font-bold text-[#4A533E]">STEP 08</span>
                    <h4 className="font-bold text-xs text-[#1C1917]">Initial Wall Press</h4>
                    <p className="text-[11px] text-[#1C1917]/70">Press frame against wall firmly for 30s.</p>
                  </div>
                </div>
              </div>

              {/* Group 3: SET & CURE (09 - 11) */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 bg-[#4A533E] text-white font-mono text-[9px] font-bold uppercase">
                    STAGE 3: SET & CURE (STEPS 09–11)
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  <div className="bg-[#FAF8F5] p-3 border border-[#E5DFD5] space-y-1">
                    <span className="text-[9px] font-mono font-bold text-[#4A533E]">STEP 09</span>
                    <h4 className="font-bold text-xs text-[#1C1917]">Peel Frame Off</h4>
                    <p className="text-[11px] text-[#1C1917]/70">Grab bottom corners; peel upward to leave wall strips exposed.</p>
                  </div>
                  <div className="bg-[#FAF8F5] p-3 border border-[#E5DFD5] space-y-1">
                    <span className="text-[9px] font-mono font-bold text-[#4A533E]">STEP 10</span>
                    <h4 className="font-bold text-xs text-[#1C1917]">Thumb Pressure (30s)</h4>
                    <p className="text-[11px] text-[#1C1917]/70">Press thumb directly onto each exposed wall strip for 30 full seconds.</p>
                  </div>
                  <div className="bg-emerald-50 border border-emerald-300 p-3 space-y-1">
                    <span className="text-[9px] font-mono font-bold text-emerald-800">STEP 11 • CRITICAL</span>
                    <h4 className="font-bold text-xs text-emerald-900">Wait 1-Hour Cure</h4>
                    <p className="text-[11px] text-emerald-950">Mandatory 60-min wait before re-hanging frame. Allows polymer chains to bond.</p>
                  </div>
                </div>
              </div>

              {/* Group 4: VERIFY (12 - 13) */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 bg-[#4A533E] text-white font-mono text-[9px] font-bold uppercase">
                    STAGE 4: VERIFY & LOG (STEPS 12–13)
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <div className="bg-[#FAF8F5] p-3 border border-[#E5DFD5] space-y-1">
                    <span className="text-[9px] font-mono font-bold text-[#4A533E]">STEP 12</span>
                    <h4 className="font-bold text-xs text-[#1C1917]">Re-Attach & Click</h4>
                    <p className="text-[11px] text-[#1C1917]/70">Align frame over wall strips; press firmly until interlocking fasteners click into place.</p>
                  </div>
                  <div className="bg-[#FAF8F5] p-3 border border-[#E5DFD5] space-y-1">
                    <span className="text-[9px] font-mono font-bold text-[#4A533E]">STEP 13</span>
                    <h4 className="font-bold text-xs text-[#1C1917]">Photograph & Document</h4>
                    <p className="text-[11px] text-[#1C1917]/70">Take a timestamped reference photo; log date and strip type in your Notion Hub.</p>
                  </div>
                </div>
              </div>
            </article>

            {/* ======================================================== */}
            {/* SECTION 10: TACTICAL HACK PAGES */}
            {/* ======================================================== */}
            <article id="sec-10" className="bg-white border border-[#E5DFD5] p-6 sm:p-10 shadow-xs space-y-6">
              <div className="border-b border-[#E5DFD5] pb-3">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#4A533E] block">
                  Section 10 / Tactical Action Blueprints
                </span>
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#1C1917]">
                  Tactical Hack Pages: Standardized Execution Layouts
                </h2>
              </div>

              {/* Tactical Hack 1 */}
              <div className="bg-[#FAF8F5] border border-[#E5DFD5] p-5 sm:p-6 space-y-4">
                <div className="flex items-center justify-between flex-wrap gap-2 border-b border-[#E5DFD5] pb-3">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 bg-[#4A533E] text-white text-[9px] font-bold font-mono">HACK #01</span>
                    <h3 className="font-serif font-bold text-base text-[#1C1917]">
                      The Zero-Damage Acrylic Picture Ledge Shelf
                    </h3>
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] font-bold text-[#4A533E]">
                    <span>Diff: Low</span> • <span>Time: 20 min</span> • <span>Cost: $18 CAD</span> • <span>Reversible: 100%</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div className="space-y-2">
                    <div>
                      <span className="font-bold text-[#1C1917] block">THE PROBLEM:</span>
                      <p className="text-[#1C1917]/80 leading-relaxed">
                        Renters want floating picture ledges to display rotating art and books, but standard ledges require heavy drywall anchor screws that leave gaping holes.
                      </p>
                    </div>
                    <div>
                      <span className="font-bold text-[#1C1917] block">THE HACK:</span>
                      <p className="text-[#1C1917]/80 leading-relaxed">
                        Use an ultra-light 3mm clear acrylic U-channel ledge (under 0.8 lbs tare weight) mounted with 4 Large Command Picture Hanging Strips along the back flange.
                      </p>
                    </div>
                    <div>
                      <span className="font-bold text-[#1C1917] block">WHAT YOU NEED:</span>
                      <p className="text-[#1C1917]/80 leading-relaxed">
                        24" Acrylic J-Ledge (0.8 lbs) + 4 Large Command Click-Strips + 70% Isopropyl Alcohol + Bubble Level.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div>
                      <span className="font-bold text-[#1C1917] block">HOW TO DO IT:</span>
                      <ol className="list-decimal pl-4 space-y-1 text-[#1C1917]/80">
                        <li>Clean wall and acrylic ledge with 70% alcohol; dry 15 min.</li>
                        <li>Click 4 strip pairs together; apply evenly along the back upright flange.</li>
                        <li>Press ledge against wall for 30 seconds with bubble level on ledge bed.</li>
                        <li>Slide ledge upward off wall strips; press wall strips 30s each; wait 1-hour cure.</li>
                        <li>Re-click ledge in place. Load with lightweight prints (max 5 lbs total).</li>
                      </ol>
                    </div>
                    <div className="bg-white p-2.5 border border-[#E5DFD5]">
                      <span className="font-bold text-[#4A533E] block text-[10px] uppercase">Rental Check & Limitation:</span>
                      <p className="text-[11px] text-[#1C1917]/80 mt-0.5">
                        Do not display heavy pottery or solid metal objects. Keep display depth under 2.5 inches to minimize cantilever torque.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tactical Hack 2 */}
              <div className="bg-[#FAF8F5] border border-[#E5DFD5] p-5 sm:p-6 space-y-4">
                <div className="flex items-center justify-between flex-wrap gap-2 border-b border-[#E5DFD5] pb-3">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 bg-[#4A533E] text-white text-[9px] font-bold font-mono">HACK #02</span>
                    <h3 className="font-serif font-bold text-base text-[#1C1917]">
                      The Floor-Leaning Oversized Mirror Anti-Tip Tether
                    </h3>
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] font-bold text-[#4A533E]">
                    <span>Diff: Med</span> • <span>Time: 25 min</span> • <span>Cost: $12 CAD</span> • <span>Reversible: 100%</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div className="space-y-2">
                    <div>
                      <span className="font-bold text-[#1C1917] block">THE PROBLEM:</span>
                      <p className="text-[#1C1917]/80 leading-relaxed">
                        Full-length arched mirrors weigh 25–45 lbs. Hanging them on rental drywall with screws is dangerous and leaves large anchor holes.
                      </p>
                    </div>
                    <div>
                      <span className="font-bold text-[#1C1917] block">THE HACK:</span>
                      <p className="text-[#1C1917]/80 leading-relaxed">
                        Rest mirror base on floor with dense rubber grip wedges (carrying 95% of vertical load). Install a hidden top paracord tether to a 3M Claw anchor purely for forward tip prevention.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div>
                      <span className="font-bold text-[#1C1917] block">WHY IT WORKS:</span>
                      <p className="text-[#1C1917]/80 leading-relaxed">
                        The wall anchor experiences zero vertical gravitational load—it only encounters slight horizontal tension if bumped. The 3M Claw leaves tiny pinholes that require zero drilling.
                      </p>
                    </div>
                    <div className="bg-white p-2.5 border border-[#E5DFD5]">
                      <span className="font-bold text-[#4A533E] block text-[10px] uppercase">Safety Limitation:</span>
                      <p className="text-[11px] text-[#1C1917]/80 mt-0.5">
                        Ensure mirror base is angled between 5° and 8° from vertical. Never stand mirror completely vertical without anchored bottom base.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* ======================================================== */}
            {/* SECTION 11: FIELD NOTES VAULT */}
            {/* ======================================================== */}
            <article id="sec-11" className="bg-white border border-[#E5DFD5] p-6 sm:p-10 shadow-xs space-y-6">
              <div className="border-b border-[#E5DFD5] pb-3">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#4A533E] block">
                  Section 11 / Tactical Intelligence
                </span>
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#1C1917]">
                  Field Notes: Recurring Tactical Insights
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-[#FAF8F5] p-4 border border-[#E5DFD5] space-y-1.5">
                  <div className="flex items-center gap-1.5 text-[#4A533E] font-bold text-[10px] uppercase tracking-wider">
                    <Bookmark className="w-3.5 h-3.5" />
                    <span>FIELD NOTE #14</span>
                  </div>
                  <h4 className="font-serif font-bold text-sm text-[#1C1917]">Winter Exterior Wall Chill</h4>
                  <p className="text-xs text-[#1C1917]/80 leading-relaxed">
                    Exterior condo concrete walls in Canadian winters drop below 8°C (46°F). Adhesive polymer chains stiffen and lose tack. Warm wall area gently with hair dryer for 20 seconds before applying strips.
                  </p>
                </div>

                <div className="bg-[#FAF8F5] p-4 border border-[#E5DFD5] space-y-1.5">
                  <div className="flex items-center gap-1.5 text-[#4A533E] font-bold text-[10px] uppercase tracking-wider">
                    <Bookmark className="w-3.5 h-3.5" />
                    <span>FIELD NOTE #22</span>
                  </div>
                  <h4 className="font-serif font-bold text-sm text-[#1C1917]">The Dental Floss Slide</h4>
                  <p className="text-xs text-[#1C1917]/80 leading-relaxed">
                    If an adhesive pull tab snaps flush with the bracket during removal, NEVER pry with a screwdriver. Slide unflavored waxed dental floss behind the bracket with a gentle sawing motion to slice the foam cleanly.
                  </p>
                </div>

                <div className="bg-[#FAF8F5] p-4 border border-[#E5DFD5] space-y-1.5">
                  <div className="flex items-center gap-1.5 text-[#4A533E] font-bold text-[10px] uppercase tracking-wider">
                    <Bookmark className="w-3.5 h-3.5" />
                    <span>FIELD NOTE #31</span>
                  </div>
                  <h4 className="font-serif font-bold text-sm text-[#1C1917]">Pre-1950 Heritage Plaster</h4>
                  <p className="text-xs text-[#1C1917]/80 leading-relaxed">
                    Toronto and Montreal walk-up apartments often feature wooden picture rails near the ceiling. Always inspect upper moulding before touching walls—picture rail hooks eliminate 100% of wall fasteners.
                  </p>
                </div>
              </div>
            </article>

            {/* ======================================================== */}
            {/* SECTION 12: CAREFUL REMOVAL & THERMAL PROTOCOLS */}
            {/* ======================================================== */}
            <article id="sec-12" className="bg-white border border-[#E5DFD5] p-6 sm:p-10 shadow-xs space-y-6">
              <div className="border-b border-[#E5DFD5] pb-3">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#4A533E] block">
                  Section 12 / De-Installation
                </span>
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#1C1917]">
                  Careful Removal Protocols & Thermal Softening Limits
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                <div className="bg-[#FAF8F5] p-4 border-t-2 border-[#4A533E] border-[#E5DFD5] space-y-1.5">
                  <span className="text-[9px] font-bold uppercase text-[#4A533E]">STEP 01</span>
                  <h3 className="font-serif font-bold text-sm text-[#1C1917]">REMOVE FRAME</h3>
                  <p className="text-xs text-[#1C1917]/80">
                    Gently peel bottom of frame away from wall to decouple the interlocking fastener teeth.
                  </p>
                </div>

                <div className="bg-[#FAF8F5] p-4 border-t-2 border-[#4A533E] border-[#E5DFD5] space-y-1.5">
                  <span className="text-[9px] font-bold uppercase text-[#4A533E]">STEP 02</span>
                  <h3 className="font-serif font-bold text-sm text-[#1C1917]">HOLD BASE</h3>
                  <p className="text-xs text-[#1C1917]/80">
                    Press one hand flat against the plastic base to stabilize drywall paper.
                  </p>
                </div>

                <div className="bg-[#FAF8F5] p-4 border-t-2 border-[#4A533E] border-[#E5DFD5] space-y-1.5">
                  <span className="text-[9px] font-bold uppercase text-[#4A533E]">STEP 03</span>
                  <h3 className="font-serif font-bold text-sm text-[#1C1917]">PULL STRAIGHT DOWN</h3>
                  <p className="text-xs text-[#1C1917]/80">
                    Pull tab straight down parallel to wall. Stretch slowly at least 15 inches until clean release.
                  </p>
                </div>

                <div className="bg-[#FAF8F5] p-4 border-t-2 border-[#4A533E] border-[#E5DFD5] space-y-1.5">
                  <span className="text-[9px] font-bold uppercase text-[#4A533E]">STEP 04</span>
                  <h3 className="font-serif font-bold text-sm text-[#1C1917]">SOFTEN IF STUCK</h3>
                  <p className="text-xs text-[#1C1917]/80">
                    If tab resists, warm 30s with hair dryer on LOW heat to soften adhesive polymers.
                  </p>
                </div>
              </div>
            </article>

            {/* ======================================================== */}
            {/* SECTION 13: ROUTINE MONITORING & SEASONAL AUDITS */}
            {/* ======================================================== */}
            <article id="sec-13" className="bg-white border border-[#E5DFD5] p-6 sm:p-10 shadow-xs space-y-6">
              <div className="border-b border-[#E5DFD5] pb-3">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#4A533E] block">
                  Section 13 / Maintenance
                </span>
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#1C1917]">
                  Routine Monitoring & Seasonal Audit Checklist
                </h2>
              </div>

              <div className="space-y-2">
                {[
                  { id: 'mon-1', title: 'Adhesive Edge Peeling Check', desc: 'Inspect top corners of frames for any separation between strip foam and wall.' },
                  { id: 'mon-2', title: 'Vibration Audit near Entry Doors', desc: 'Verify items mounted within 4 feet of hallway door have not experienced fastener drift from door slams.' },
                  { id: 'mon-3', title: 'Seasonal Heating Shift Inspection', desc: 'When baseboard heating activates in October/November, check for localized paint drying near radiators.' },
                  { id: 'mon-4', title: 'Bathroom Moisture & Steam Check', desc: 'Inspect water-resistant hooks for mildew accumulation along perimeter silicone seals.' }
                ].map((item) => (
                  <div 
                    key={item.id}
                    onClick={() => toggleCheck(item.id)}
                    className="p-3 bg-[#FAF8F5] border border-[#E5DFD5] flex items-start gap-3 cursor-pointer hover:bg-white transition-colors"
                  >
                    <input 
                      type="checkbox" 
                      checked={!!checkedItems[item.id]} 
                      onChange={() => {}}
                      className="mt-0.5 w-4 h-4 accent-[#4A533E]" 
                    />
                    <div>
                      <h4 className="font-bold text-xs text-[#1C1917]">{item.title}</h4>
                      <p className="text-[11px] text-[#1C1917]/70 leading-relaxed mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </article>

            {/* ======================================================== */}
            {/* SECTION 14: MOVE-OUT & DEPOSIT DEFENSE */}
            {/* ======================================================== */}
            <article id="sec-14" className="bg-white border border-[#E5DFD5] p-6 sm:p-10 shadow-xs space-y-6">
              <div className="border-b border-[#E5DFD5] pb-3">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#4A533E] block">
                  Section 14 / Security Deposit Defense
                </span>
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#1C1917]">
                  Before You Move Out: The 5-Step Deposit Defense Protocol
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[#FAF8F5] p-5 border border-[#E5DFD5] space-y-3">
                  <h3 className="font-serif font-bold text-sm text-[#1C1917] flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-[#4A533E]" />
                    <span>The $12 Emergency Drywall Repair Recipe</span>
                  </h3>
                  <p className="text-xs text-[#1C1917]/80 leading-relaxed">
                    If an OOK wire hook or 3M Claw left a tiny pinhole, restore it in 60 seconds:
                  </p>
                  <ol className="list-decimal pl-4 text-xs text-[#1C1917]/80 space-y-1">
                    <li>Dab a pea-sized dot of lightweight vinyl spackle on the hole with your fingertip.</li>
                    <li>Wipe flush immediately with a damp paper towel (no sanding required).</li>
                    <li>Take a tiny piece of white school chalk and lightly rub over the spot to blend the paint sheen.</li>
                  </ol>
                </div>

                <div className="bg-[#FAF8F5] p-5 border border-[#E5DFD5] space-y-3">
                  <h3 className="font-serif font-bold text-sm text-[#1C1917] flex items-center gap-1.5">
                    <Camera className="w-4 h-4 text-[#4A533E]" />
                    <span>Photographic Move-Out Baseline</span>
                  </h3>
                  <p className="text-xs text-[#1C1917]/80 leading-relaxed">
                    Capture wide-angle 4K photographs of all walls in daylight with your phone's timestamp enabled. If a landlord attempts to deduct fees for normal picture hanging wear, your baseline photos prove pristine wall condition.
                  </p>
                </div>
              </div>
            </article>

            {/* ======================================================== */}
            {/* SECTION 15: PRINTABLE POCKET CARDS */}
            {/* ======================================================== */}
            <article id="sec-15" className="bg-white border border-[#E5DFD5] p-6 sm:p-10 shadow-xs space-y-6">
              <div className="border-b border-[#E5DFD5] pb-3">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#4A533E] block">
                  Section 15 / Printable Pocket Cards
                </span>
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#1C1917]">
                  4x6" Printable Pocket Cheat Cards
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Card 1 */}
                <div className="bg-[#FAF8F5] border-2 border-dashed border-[#4A533E] p-5 space-y-3">
                  <div className="flex justify-between items-center border-b border-[#E5DFD5] pb-2">
                    <span className="font-serif font-bold text-xs text-[#1C1917]">POCKET CARD 01: BEFORE YOU MOUNT</span>
                    <span className="text-[9px] font-mono font-bold text-[#4A533E]">4x6 INCH</span>
                  </div>
                  <ul className="text-xs text-[#1C1917]/80 space-y-1.5 list-disc pl-4">
                    <li>[ ] Weigh gross tare on digital scale.</li>
                    <li>[ ] Knuckle-tap wall to confirm substrate.</li>
                    <li>[ ] Degrease spot with 70% Isopropyl Alcohol.</li>
                    <li>[ ] Wait 15 minutes flash-off dry time.</li>
                  </ul>
                </div>

                {/* Card 2 */}
                <div className="bg-[#FAF8F5] border-2 border-dashed border-[#4A533E] p-5 space-y-3">
                  <div className="flex justify-between items-center border-b border-[#E5DFD5] pb-2">
                    <span className="font-serif font-bold text-xs text-[#1C1917]">POCKET CARD 02: REMOVAL & MOVE-OUT</span>
                    <span className="text-[9px] font-mono font-bold text-[#4A533E]">4x6 INCH</span>
                  </div>
                  <ul className="text-xs text-[#1C1917]/80 space-y-1.5 list-disc pl-4">
                    <li>[ ] Pull tab straight down parallel to wall.</li>
                    <li>[ ] Never pull outward at 90 degrees.</li>
                    <li>[ ] Warm 30s with hair dryer if tab resists.</li>
                    <li>[ ] Dab pinholes with vinyl spackle; wipe flush.</li>
                  </ul>
                </div>
              </div>
            </article>

            {/* ======================================================== */}
            {/* SECTION 16: SOURCES & CANADIAN RETAILERS */}
            {/* ======================================================== */}
            <article id="sec-16" className="bg-white border border-[#E5DFD5] p-6 sm:p-10 shadow-xs space-y-6">
              <div className="border-b border-[#E5DFD5] pb-3">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#4A533E] block">
                  Section 16 / Sourcing & References
                </span>
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#1C1917]">
                  Verified Sources, Canadian Retailers & Complete Disclaimer
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="bg-[#FAF8F5] p-4 border border-[#E5DFD5] space-y-2">
                  <h4 className="font-bold text-[#1C1917]">Manufacturer Guidelines</h4>
                  <ul className="text-[#1C1917]/70 space-y-1 list-disc pl-4">
                    <li>3M Command™ Picture Hanging Tech Data Sheets</li>
                    <li>OOK Professional Picture Hanging Hardware Specs</li>
                    <li>3M Claw™ Heavy Duty Drywall Push Anchor Data</li>
                  </ul>
                </div>

                <div className="bg-[#FAF8F5] p-4 border border-[#E5DFD5] space-y-2">
                  <h4 className="font-bold text-[#1C1917]">Canadian Tenancy Law</h4>
                  <ul className="text-[#1C1917]/70 space-y-1 list-disc pl-4">
                    <li>Ontario Residential Tenancies Act (RTA) Guidelines</li>
                    <li>BC Residential Tenancy Branch (RTB) Wear & Tear</li>
                    <li>Quebec Régie du logement Decor Guidelines</li>
                  </ul>
                </div>

                <div className="bg-[#FAF8F5] p-4 border border-[#E5DFD5] space-y-2">
                  <h4 className="font-bold text-[#1C1917]">Canadian Hardware Sourcing</h4>
                  <ul className="text-[#1C1917]/70 space-y-1 list-disc pl-4">
                    <li>Home Depot Canada (3M Claw & OOK Hooks)</li>
                    <li>Lee Valley Tools (Precision Brass Floreat Pins)</li>
                    <li>Canadian Tire (Vinyl Spackle & Level Kits)</li>
                  </ul>
                </div>
              </div>

              {/* Complete Disclaimer */}
              <div className="p-4 bg-[#FAF8F5] border border-[#E5DFD5] text-[11px] text-[#1C1917]/70 leading-relaxed">
                <strong>DISCLAIMER & LIABILITY NOTICE:</strong> This field guide is provided for educational and practical planning purposes only. Rental lease terms and wall conditions vary. Neither SmallSpaceHome.ca nor its contributors assume liability for damaged items or walls resulting from improper installation, unexpected structural defects, or failure to follow hardware manufacturer instructions. Always verify load limits and test a small hidden area first.
              </div>
            </article>

            {/* Footer Sign-off */}
            <div className="border-t border-[#E5DFD5] pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-[#1C1917]/60 font-serif">
              <span>Published by SmallSpaceHome.ca • Editorial Laboratory</span>
              <span>© 2026 SmallSpaceHome • All Rights Reserved</span>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
