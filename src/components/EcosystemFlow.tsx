import React, { useState } from 'react';
import { ArrowDown, ArrowRight, Sparkles, CheckCircle2, Shield, ShoppingCart, RefreshCw, Layers } from 'lucide-react';

export const EcosystemFlow: React.FC = () => {
  const [activePathway, setActivePathway] = useState<'renter' | 'moving' | 'clutter'>('renter');

  const pathways = {
    renter: {
      title: 'Pathway A: The Rental Aesthetic & Upgrade Journey',
      entryBlog: 'Blog: "12 Rental Kitchen Upgrades That Won’t Void Your Lease"',
      level1: 'Level 1: The Damage-Free Renter Upgrade Manual ($19 CAD)',
      level2: 'Level 2: Studio & Multi-Functional Room Zoning System ($27 CAD)',
      bundle: 'Bundle: The Tiny Space Layout & Storage Mastery Suite ($54 CAD)',
      flagship: 'Flagship: The Small Space Operating System ($79 CAD)',
      merch: 'Physical Merch: SmallSpaceHome "Calm Sanctuary" Art Print Series'
    },
    moving: {
      title: 'Pathway B: The Urgent Relocation & Move-In Journey',
      entryBlog: 'Blog: "The Ultimate First Apartment Moving Checklist & Timeline"',
      level1: 'Level 1: Apartment Maintenance & Landlord Vault ($19 CAD)',
      level2: 'Level 2: The Small Space Moving-In Blueprint & Transition OS ($29 CAD)',
      bundle: 'Bundle: The First-Apartment & Moving Survival Suite ($47 CAD)',
      flagship: 'Flagship: Complete Master Ecosystem All-Access ($97 CAD)',
      merch: 'Physical Merch: SmallSpaceHome "New Beginnings" Morning Coffee Mug'
    },
    clutter: {
      title: 'Pathway C: The Daily Clutter Fatigue & Spatial Reset Journey',
      entryBlog: 'Blog: "How to Keep a Small Apartment Clutter-Free in 12 Minutes a Day"',
      level1: 'Level 1: Small Home Cleaning Rhythm & Micro-Reset Cards ($15 CAD)',
      level2: 'Level 2: The 30-Day Small Home Declutter & Spatial Reset Protocol ($27 CAD)',
      bundle: 'Bundle: The Peaceful Small Home Reset & Maintenance Suite ($39 CAD)',
      flagship: 'Flagship: The Small Space Operating System ($79 CAD)',
      merch: 'Physical Merch: Minimalist Geometric Wall Art Trio'
    }
  };

  const current = pathways[activePathway];

  return (
    <div className="space-y-10 pb-12">
      {/* Overview Header */}
      <div className="border-b border-[#1A1A1A] pb-4">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-[#5A5A40] text-white text-[9px] font-bold uppercase tracking-[0.2em] mb-1.5">
          <Sparkles className="w-3 h-3" />
          <span>Section 03 / Strategic Cohesion</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-serif text-[#1A1A1A] font-bold">
          The 3-Tier Product Ecosystem & Ascension Architecture
        </h2>
        <p className="text-xs sm:text-sm text-[#1A1A1A]/70 mt-0.5 font-serif italic">
          How individual tripwires lead naturally to premium workbooks, high-margin bundles, and physical Fourthwall merchandise.
        </p>
      </div>

      {/* 3 Tier Structural Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Tier 1: Quick Wins */}
        <div className="bg-white border border-[#1A1A1A] p-6 shadow-[2px_2px_0_0_#1A1A1A] flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] px-2.5 py-1 bg-white text-[#1A1A1A] border border-[#1A1A1A]/30">
                Tier 1: Quick Wins
              </span>
              <span className="text-sm font-serif font-bold text-[#1A1A1A]">$12 – $19 CAD</span>
            </div>
            <h3 className="font-serif text-lg text-[#1A1A1A] font-bold">
              Immediate Relief Impulse Tripwires
            </h3>
            <p className="text-xs text-[#1A1A1A]/70 leading-relaxed font-sans">
              Targeted, single-problem printables and compact PDF manuals that convert first-time readers with zero checkout friction.
            </p>
            <div className="space-y-1.5 pt-2 text-xs text-[#1A1A1A]/80 font-medium">
              <div className="font-bold text-[#5A5A40] text-[9px] uppercase tracking-[0.2em]">Key Examples:</div>
              <div className="flex items-center gap-2">• The Damage-Free Renter Manual ($19)</div>
              <div className="flex items-center gap-2">• Apartment Storage Audit Kit ($17)</div>
              <div className="flex items-center gap-2">• 12-Min Nightly Closing Shift Cards ($15)</div>
            </div>
          </div>
          <div className="pt-4 border-t border-[#1A1A1A]/10 text-[11px] text-[#5A5A40] font-bold uppercase tracking-wider">
            🎯 <strong>Role:</strong> Converts blog visitors into paying customers on day 1.
          </div>
        </div>

        {/* Tier 2: Premium Products */}
        <div className="bg-white border border-[#5A5A40] p-6 shadow-[2px_2px_0_0_#5A5A40] flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] px-2.5 py-1 bg-[#F2F1EC] text-[#5A5A40] border border-[#5A5A40]/40">
                Tier 2: Premium Systems
              </span>
              <span className="text-sm font-serif font-bold text-[#1A1A1A]">$24 – $39 CAD</span>
            </div>
            <h3 className="font-serif text-lg text-[#1A1A1A] font-bold">
              Multi-Tool Workspaces & Calculators
            </h3>
            <p className="text-xs text-[#1A1A1A]/70 leading-relaxed font-sans">
              Comprehensive frameworks powered by automated Google Sheets, connected Notion databases, and scale layout grids.
            </p>
            <div className="space-y-1.5 pt-2 text-xs text-[#1A1A1A]/80 font-medium">
              <div className="font-bold text-[#5A5A40] text-[9px] uppercase tracking-[0.2em]">Key Examples:</div>
              <div className="flex items-center gap-2">• Layout & Furniture Proportion Planner ($34)</div>
              <div className="flex items-center gap-2">• Small Space Moving-In Blueprint ($29)</div>
              <div className="flex items-center gap-2">• 30-Day Spatial Reset Protocol ($27)</div>
            </div>
          </div>
          <div className="pt-4 border-t border-[#1A1A1A]/10 text-[11px] text-[#5A5A40] font-bold uppercase tracking-wider">
            🎯 <strong>Role:</strong> Delivers deep transformation and core digital revenue.
          </div>
        </div>

        {/* Tier 3: Flagship Master System */}
        <div className="bg-[#1A1A1A] text-[#FAF9F6] border border-[#1A1A1A] p-6 shadow-[4px_4px_0_0_#5A5A40] flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] px-2.5 py-1 bg-[#5A5A40] text-white border border-[#5A5A40]">
                Tier 3: Flagship OS
              </span>
              <span className="text-sm font-serif font-bold text-[#EAE8DF]">$67 – $97 CAD</span>
            </div>
            <h3 className="font-serif text-lg text-white font-bold">
              The Small Space Operating System
            </h3>
            <p className="text-xs text-[#FAF9F6]/70 leading-relaxed font-sans">
              The signature asset uniting all 6 living pillars into one unified life operating system + lifetime update community.
            </p>
            <div className="space-y-1.5 pt-2 text-xs text-[#FAF9F6]/80 font-medium">
              <div className="font-bold text-[#A0A090] text-[9px] uppercase tracking-[0.2em]">Includes:</div>
              <div className="flex items-center gap-2">• 6 Connected Notion Hubs</div>
              <div className="flex items-center gap-2">• Automated Clearance Google Sheets</div>
              <div className="flex items-center gap-2">• 120-Page Master Editorial Guide</div>
            </div>
          </div>
          <div className="pt-4 border-t border-white/15 text-[11px] text-[#A0A090] font-bold uppercase tracking-wider">
            🎯 <strong>Role:</strong> Establishes SmallSpaceHome as the category authority.
          </div>
        </div>

      </div>

      {/* Interactive Pathway Selector */}
      <div className="bg-white border border-[#1A1A1A] p-6 sm:p-8 shadow-[3px_3px_0_0_#1A1A1A] space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#1A1A1A]/15 pb-4">
          <div>
            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#5A5A40] block">Funnel Architecture</span>
            <h3 className="font-serif text-xl text-[#1A1A1A] font-bold">
              Interactive Customer Journey & Upsell Flow
            </h3>
            <p className="text-xs text-[#1A1A1A]/70">
              See how a specific blog reader seamlessly upgrades from free content to physical lifestyle merchandise.
            </p>
          </div>

          <div className="flex items-center gap-1.5 p-1 bg-[#F2F1EC] border border-[#1A1A1A] self-start">
            <button
              onClick={() => setActivePathway('renter')}
              className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activePathway === 'renter' ? 'bg-[#1A1A1A] text-[#FAF9F6]' : 'text-[#1A1A1A]/70 hover:text-[#1A1A1A]'
              }`}
            >
              Renter Decorator
            </button>
            <button
              onClick={() => setActivePathway('moving')}
              className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activePathway === 'moving' ? 'bg-[#1A1A1A] text-[#FAF9F6]' : 'text-[#1A1A1A]/70 hover:text-[#1A1A1A]'
              }`}
            >
              Apartment Mover
            </button>
            <button
              onClick={() => setActivePathway('clutter')}
              className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activePathway === 'clutter' ? 'bg-[#1A1A1A] text-[#FAF9F6]' : 'text-[#1A1A1A]/70 hover:text-[#1A1A1A]'
              }`}
            >
              Clutter Reset
            </button>
          </div>
        </div>

        {/* Selected Journey Steps */}
        <div className="space-y-4">
          <h4 className="font-serif font-bold text-[#1A1A1A] text-base">{current.title}</h4>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 relative">
            
            {/* Step 1: Blog Post */}
            <div className="bg-[#FAF9F6] p-4 border border-[#1A1A1A]/20 space-y-2 flex flex-col justify-between">
              <div>
                <span className="text-[9px] font-bold text-[#5A5A40] uppercase tracking-wider block">Step 1: Discovery</span>
                <p className="text-xs font-bold text-[#1A1A1A] mt-1">{current.entryBlog}</p>
              </div>
              <span className="text-[10px] text-[#1A1A1A]/50 italic font-serif">Organic Google / Pinterest</span>
            </div>

            {/* Step 2: Quick Win */}
            <div className="bg-white p-4 border border-[#1A1A1A] shadow-[2px_2px_0_0_#1A1A1A] space-y-2 flex flex-col justify-between">
              <div>
                <span className="text-[9px] font-bold text-[#5A5A40] uppercase tracking-wider block">Step 2: Low-Ticket Entry</span>
                <p className="text-xs font-bold text-[#1A1A1A] mt-1">{current.level1}</p>
              </div>
              <span className="text-[10px] text-[#5A5A40] font-bold uppercase tracking-wider">Instant $15–$19 Purchase</span>
            </div>

            {/* Step 3: Premium Upgrade */}
            <div className="bg-[#F2F1EC] p-4 border border-[#5A5A40] space-y-2 flex flex-col justify-between">
              <div>
                <span className="text-[9px] font-bold text-[#5A5A40] uppercase tracking-wider block">Step 3: Core System</span>
                <p className="text-xs font-bold text-[#1A1A1A] mt-1">{current.level2}</p>
              </div>
              <span className="text-[10px] text-[#5A5A40] font-bold uppercase tracking-wider">Automated Tools & Sheets</span>
            </div>

            {/* Step 4: Curated Bundle */}
            <div className="bg-white p-4 border border-[#1A1A1A] shadow-[2px_2px_0_0_#5A5A40] space-y-2 flex flex-col justify-between">
              <div>
                <span className="text-[9px] font-bold text-[#5A5A40] uppercase tracking-wider block">Step 4: Bundle Savings</span>
                <p className="text-xs font-bold text-[#1A1A1A] mt-1">{current.bundle}</p>
              </div>
              <span className="text-[10px] text-[#1A1A1A] font-serif font-bold">High AOV ($39–$54)</span>
            </div>

            {/* Step 5: Physical Merch */}
            <div className="bg-[#1A1A1A] text-[#FAF9F6] p-4 border border-[#1A1A1A] space-y-2 flex flex-col justify-between">
              <div>
                <span className="text-[9px] font-bold text-[#A0A090] uppercase tracking-wider block">Step 5: Physical Merch</span>
                <p className="text-xs font-medium text-white mt-1">{current.merch}</p>
              </div>
              <span className="text-[10px] text-[#A0A090] font-serif italic">Fourthwall Wall Art & Mugs</span>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
