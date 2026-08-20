import React, { useState } from 'react';
import { FLAGSHIP_DETAILED_SPEC } from '../data/strategyData';
import { FlagshipModule } from '../types';
import { ShieldCheck, CheckCircle2, Calculator, Layers, BookOpen, Sparkles, FileText, ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';

interface FlagshipDeepDiveProps {
  onOpenLiveProduct?: () => void;
}

export const FlagshipDeepDive: React.FC<FlagshipDeepDiveProps> = ({ onOpenLiveProduct }) => {
  const [activeModule, setActiveModule] = useState<string>(FLAGSHIP_DETAILED_SPEC.modules[0].id);

  // Clearance Simulator State
  const [roomWidthInches, setRoomWidthInches] = useState<number>(144); // 12 ft
  const [sofaDepthInches, setSofaDepthInches] = useState<number>(38);
  const [tvConsoleDepthInches, setTvConsoleDepthInches] = useState<number>(16);
  const [coffeeTableDepthInches, setCoffeeTableDepthInches] = useState<number>(24);

  // Clearance calculation
  const totalOccupied = sofaDepthInches + tvConsoleDepthInches + coffeeTableDepthInches;
  const remainingWalkway = roomWidthInches - totalOccupied;
  const hasGoodWalkway = remainingWalkway >= 66; // Leaves 36" main path + 18" coffee table gap + 12" console gap

  const selectedModuleObj = FLAGSHIP_DETAILED_SPEC.modules.find((m) => m.id === activeModule) || FLAGSHIP_DETAILED_SPEC.modules[0];

  return (
    <div className="space-y-10 pb-12">
      {/* Flagship Hero Presentation */}
      <section className="bg-[#1A1A1A] text-[#FAF9F6] p-6 sm:p-10 border border-[#1A1A1A] shadow-[4px_4px_0_0_#5A5A40] relative overflow-hidden">
        <div className="max-w-3xl relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#5A5A40] border border-[#5A5A40] text-white text-[9px] font-bold uppercase tracking-[0.2em]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Section 04 / The Signature SmallSpaceHome Asset</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif tracking-tight text-white font-bold">
            {FLAGSHIP_DETAILED_SPEC.name}
          </h1>
          <p className="text-[#EAE8DF] font-serif italic text-lg sm:text-xl">
            {FLAGSHIP_DETAILED_SPEC.subtitle}
          </p>
          <p className="text-[#FAF9F6]/80 text-sm sm:text-base leading-relaxed pt-2 font-sans">
            {FLAGSHIP_DETAILED_SPEC.corePromise}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 text-xs">
            <div className="bg-white/10 p-3.5 border border-white/20">
              <span className="text-[#A0A090] uppercase tracking-wider block text-[9px] font-bold">Standalone Price</span>
              <span className="text-white font-serif font-bold text-lg">{FLAGSHIP_DETAILED_SPEC.pricingStrategy.standalonePrice}</span>
            </div>
            <div className="bg-white/10 p-3.5 border border-white/20">
              <span className="text-[#A0A090] uppercase tracking-wider block text-[9px] font-bold">System Scope</span>
              <span className="text-white font-serif font-bold text-lg">6 Core Modules</span>
            </div>
            <div className="bg-white/10 p-3.5 border border-white/20">
              <span className="text-[#A0A090] uppercase tracking-wider block text-[9px] font-bold">Delivery Formats</span>
              <span className="text-white font-semibold text-xs mt-1 block">Notion + Sheets + PDF</span>
            </div>
            <div className="bg-white/10 p-3.5 border border-white/20">
              <span className="text-[#A0A090] uppercase tracking-wider block text-[9px] font-bold">Target Audience</span>
              <span className="text-white font-semibold text-xs mt-1 block">&lt; 800 Sq Ft Dwellers</span>
            </div>
          </div>

          {onOpenLiveProduct && (
            <div className="pt-4">
              <button
                onClick={onOpenLiveProduct}
                className="inline-flex items-center gap-2.5 px-5 py-3 bg-[#5A5A40] hover:bg-white hover:text-[#1A1A1A] text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer border border-[#FAF9F6]/40 shadow-[3px_3px_0_0_#FAF9F6]"
              >
                <Sparkles className="w-4 h-4" />
                <span>Launch Complete SS-OS Interactive Suite (Customer Experience)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Deliverable Ecosystem Specs */}
      <section className="bg-white border border-[#1A1A1A] p-6 sm:p-8 shadow-[3px_3px_0_0_#1A1A1A] space-y-6">
        <div>
          <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#5A5A40] block">Production Assets</span>
          <h2 className="text-xl sm:text-2xl font-serif text-[#1A1A1A] font-bold border-b border-[#1A1A1A]/15 pb-3">
            Exact Deliverables & Digital Asset Package
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {FLAGSHIP_DETAILED_SPEC.formatSpecs.map((spec, idx) => (
            <div key={idx} className="bg-[#FAF9F6] p-4 border border-[#1A1A1A]/20 flex items-start gap-3">
              <div className="w-6 h-6 bg-[#5A5A40] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 font-serif">
                {idx + 1}
              </div>
              <p className="text-xs sm:text-sm text-[#1A1A1A] font-medium leading-relaxed">{spec}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6-Module Interactive Deep Dive */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#1A1A1A] pb-3">
          <div>
            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#5A5A40] block">Comprehensive Breakdown</span>
            <h2 className="text-xl sm:text-2xl font-serif text-[#1A1A1A] font-bold">
              The 6 Architectural Modules of SS-OS
            </h2>
            <p className="text-xs sm:text-sm text-[#1A1A1A]/70 font-serif italic">
              Click any module to inspect its included tools, interactive assets, and customer transformation.
            </p>
          </div>
        </div>

        {/* Module Selector Pills */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
          {FLAGSHIP_DETAILED_SPEC.modules.map((m) => {
            const isActive = m.id === activeModule;
            return (
              <button
                key={m.id}
                onClick={() => setActiveModule(m.id)}
                className={`p-3 text-left border transition-all cursor-pointer flex flex-col justify-between ${
                  isActive
                    ? 'bg-[#1A1A1A] text-[#FAF9F6] border-[#1A1A1A] shadow-[2px_2px_0_0_#5A5A40]'
                    : 'bg-white text-[#1A1A1A] border-[#1A1A1A]/30 hover:border-[#1A1A1A]'
                }`}
              >
                <span className={`text-[10px] font-bold uppercase tracking-wider ${isActive ? 'text-[#A0A090]' : 'text-[#5A5A40]'}`}>
                  Module {m.moduleNumber}
                </span>
                <span className="text-xs font-serif font-bold mt-1 line-clamp-2">
                  {m.title.split(' ')[0]} {m.title.split(' ')[1]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Module Detail Panel */}
        <div className="bg-white border border-[#1A1A1A] p-6 sm:p-8 shadow-[3px_3px_0_0_#1A1A1A] space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-[#1A1A1A]/15 pb-4">
            <div>
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white bg-[#5A5A40] px-2.5 py-1">
                Module {selectedModuleObj.moduleNumber}
              </span>
              <h3 className="text-xl sm:text-2xl font-serif text-[#1A1A1A] font-bold mt-2">
                {selectedModuleObj.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#1A1A1A]/70 mt-1 max-w-2xl font-sans">
                {selectedModuleObj.summary}
              </p>
            </div>
            <div className="bg-[#F2F1EC] border border-[#5A5A40]/30 p-3.5 max-w-xs">
              <span className="text-[9px] font-bold text-[#5A5A40] uppercase tracking-wider block">Outcome Transformation:</span>
              <p className="text-xs text-[#1A1A1A] font-serif italic mt-0.5">
                "{selectedModuleObj.transformation}"
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-serif font-bold text-[#1A1A1A] text-sm flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#5A5A40]" />
                Tools & Blueprints Included
              </h4>
              <ul className="space-y-2 text-xs text-[#1A1A1A]/80">
                {selectedModuleObj.toolsIncluded.map((t, idx) => (
                  <li key={idx} className="flex items-start gap-2 bg-[#FAF9F6] p-2.5 border border-[#1A1A1A]/15">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#5A5A40] mt-0.5 shrink-0" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-serif font-bold text-[#1A1A1A] text-sm flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#5A5A40]" />
                Automated & Interactive Assets
              </h4>
              <ul className="space-y-2 text-xs text-[#1A1A1A]">
                {selectedModuleObj.interactiveAssets.map((asset, idx) => (
                  <li key={idx} className="flex items-start gap-2 bg-[#F2F1EC] p-2.5 border border-[#5A5A40]/30">
                    <Sparkles className="w-3.5 h-3.5 text-[#5A5A40] mt-0.5 shrink-0" />
                    <span className="font-bold">{asset}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mini Interactive Module Tool: Module 01 Clearance Simulator */}
      <section className="bg-[#1A1A1A] text-[#FAF9F6] p-6 sm:p-8 border border-[#1A1A1A] shadow-[4px_4px_0_0_#5A5A40] space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-[#5A5A40] border border-white/20 flex items-center justify-center text-white shrink-0">
            <Calculator className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-serif text-white font-bold">
              Interactive Preview: Module 01 Clearance Formula Simulator
            </h3>
            <p className="text-xs text-[#FAF9F6]/70 font-serif italic">
              Test how the SS-OS automated Google Sheet checks walkway clearance before furniture buying.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
          <div className="bg-white/10 p-4 border border-white/15 space-y-2">
            <label className="text-[#A0A090] block font-bold uppercase tracking-wider text-[9px]">Living Room Width (Inches)</label>
            <input
              type="number"
              value={roomWidthInches}
              onChange={(e) => setRoomWidthInches(Number(e.target.value))}
              className="w-full bg-[#1A1A1A] border border-white/30 px-3 py-1.5 text-white font-mono text-sm focus:outline-none focus:border-[#FAF9F6]"
            />
            <span className="text-[10px] text-[#A0A090]">{(roomWidthInches / 12).toFixed(1)} feet wide</span>
          </div>

          <div className="bg-white/10 p-4 border border-white/15 space-y-2">
            <label className="text-[#A0A090] block font-bold uppercase tracking-wider text-[9px]">Sofa Depth (Inches)</label>
            <input
              type="number"
              value={sofaDepthInches}
              onChange={(e) => setSofaDepthInches(Number(e.target.value))}
              className="w-full bg-[#1A1A1A] border border-white/30 px-3 py-1.5 text-white font-mono text-sm focus:outline-none focus:border-[#FAF9F6]"
            />
            <span className="text-[10px] text-[#A0A090]">Standard: 38–42" / Compact: 32–34"</span>
          </div>

          <div className="bg-white/10 p-4 border border-white/15 space-y-2">
            <label className="text-[#A0A090] block font-bold uppercase tracking-wider text-[9px]">Coffee Table Width (Inches)</label>
            <input
              type="number"
              value={coffeeTableDepthInches}
              onChange={(e) => setCoffeeTableDepthInches(Number(e.target.value))}
              className="w-full bg-[#1A1A1A] border border-white/30 px-3 py-1.5 text-white font-mono text-sm focus:outline-none focus:border-[#FAF9F6]"
            />
            <span className="text-[10px] text-[#A0A090]">Need 16–18" gap from sofa</span>
          </div>

          <div className="bg-white/10 p-4 border border-white/15 space-y-2">
            <label className="text-[#A0A090] block font-bold uppercase tracking-wider text-[9px]">TV Console Depth (Inches)</label>
            <input
              type="number"
              value={tvConsoleDepthInches}
              onChange={(e) => setTvConsoleDepthInches(Number(e.target.value))}
              className="w-full bg-[#1A1A1A] border border-white/30 px-3 py-1.5 text-white font-mono text-sm focus:outline-none focus:border-[#FAF9F6]"
            />
            <span className="text-[10px] text-[#A0A090]">Slim media unit: 12–16"</span>
          </div>
        </div>

        {/* Calculation Result */}
        <div className={`p-4 border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs ${
          hasGoodWalkway
            ? 'bg-[#5A5A40]/50 border-white/30 text-white'
            : 'bg-red-950/50 border-red-500/50 text-red-100'
        }`}>
          <div>
            <div className="font-bold text-sm font-serif flex items-center gap-2">
              {hasGoodWalkway ? '✓ Safe Architectural Layout Clearance' : '⚠ Caution: Spatial Pinch Point Detected'}
            </div>
            <p className="text-[#FAF9F6]/80 text-xs mt-0.5 font-sans">
              Total occupied furniture depth: <strong>{totalOccupied}"</strong>. Remaining traffic zone: <strong>{remainingWalkway}"</strong>. (Recommended minimum clear aisle: 36 inches).
            </p>
          </div>

          <div className="text-right shrink-0">
            <span className="text-[9px] text-[#A0A090] uppercase font-bold tracking-wider block">Traffic Flow Verdict</span>
            <span className={`font-bold font-mono text-sm ${hasGoodWalkway ? 'text-white' : 'text-red-300'}`}>
              {hasGoodWalkway ? 'OPTIMAL (PASS)' : 'CROWDED (FAIL)'}
            </span>
          </div>
        </div>
      </section>

    </div>
  );
};
