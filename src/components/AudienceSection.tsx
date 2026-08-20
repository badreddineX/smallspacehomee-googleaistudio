import React, { useState } from 'react';
import { AUDIENCE_PERSONAS, CORE_PROBLEMS_ANALYSIS } from '../data/strategyData';
import { Users, AlertTriangle, ShieldCheck, TrendingUp, CheckCircle2, XCircle, ArrowRight, Zap, Award } from 'lucide-react';

interface AudienceSectionProps {
  onExploreProducts: () => void;
}

export const AudienceSection: React.FC<AudienceSectionProps> = ({ onExploreProducts }) => {
  const [selectedPersona, setSelectedPersona] = useState(AUDIENCE_PERSONAS[0].id);

  const activePersona = AUDIENCE_PERSONAS.find((p) => p.id === selectedPersona) || AUDIENCE_PERSONAS[0];

  const opportunityClusters = [
    {
      cluster: 'Storage & Vertical Optimization',
      intent: 'Urgent Pain Point / High Search Volume',
      conversionPotential: 'Very High (12-18% from blog CTAs)',
      recommendedEntryProduct: 'Apartment Storage Audit & Vertical Kit ($17 CAD)',
      flagshipTieIn: 'Feeds directly into Module 02 of SS-OS',
      avgSearchVolume: 'High (35k+ monthly niche impressions)',
      impulseVsSystem: 'Impulse Tripwire ($17) -> Upgrade to Complete Spatial Mastery ($54)'
    },
    {
      cluster: 'Furniture Sizing & Studio Layouts',
      intent: 'High Anxiety / Pre-Purchase Research',
      conversionPotential: 'High (9-14% from furniture guide posts)',
      recommendedEntryProduct: 'Small-Space Layout & Clearance Planner ($34 CAD)',
      flagshipTieIn: 'Feeds directly into Module 01 of SS-OS',
      avgSearchVolume: 'Very High (48k+ monthly impressions)',
      impulseVsSystem: 'High-Value Premium System ($34) — Saves buyer from $500+ mistakes'
    },
    {
      cluster: 'Renter Upgrades & Damage-Free Living',
      intent: 'High Aesthetic Desire / Fear of Deposit Loss',
      conversionPotential: 'Viral Social / High (14-20% on Pinterest & Blog)',
      recommendedEntryProduct: 'The Damage-Free Renter Upgrade Manual ($19 CAD)',
      flagshipTieIn: 'Feeds directly into Module 04 of SS-OS',
      avgSearchVolume: 'High (40k+ monthly impressions across decor/renter terms)',
      impulseVsSystem: 'Impulse Visual Guide ($19) with strong social sharing'
    },
    {
      cluster: 'Moving, Downsizing & First Apartment',
      intent: 'Deadline-Driven Urgent Relocation',
      conversionPotential: 'Extreme (18-24% during active move window)',
      recommendedEntryProduct: 'The Small Space Moving-In Blueprint ($29 CAD)',
      flagshipTieIn: 'Feeds directly into Module 06 of SS-OS',
      avgSearchVolume: 'Seasonal Spike (Spring/Summer moves)',
      impulseVsSystem: 'Full Project OS ($29) or Moving Survival Suite ($47)'
    },
    {
      cluster: 'Decluttering & 12-Minute Daily Resets',
      intent: 'Chronic Lifestyle Frustration / Visual Fatigue',
      conversionPotential: 'High Evergreen (10-15% from lifestyle articles)',
      recommendedEntryProduct: 'Small Home Cleaning Rhythm & Micro-Reset ($15 CAD)',
      flagshipTieIn: 'Feeds directly into Module 03 & 05 of SS-OS',
      avgSearchVolume: 'Steady Year-Round (Spikes Jan & Spring)',
      impulseVsSystem: 'Low-Ticket Habit Card ($15) -> 30-Day Reset Protocol ($27)'
    }
  ];

  return (
    <div className="space-y-12 pb-12">
      {/* Hero Strategic Overview - Editorial Masthead Box */}
      <section className="bg-white text-[#1A1A1A] p-6 sm:p-8 border border-[#1A1A1A] shadow-[3px_3px_0_0_#1A1A1A] relative overflow-hidden">
        <div className="max-w-3xl relative z-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#5A5A40] text-white text-[9px] font-bold uppercase tracking-[0.2em]">
            <Award className="w-3.5 h-3.5" />
            <span>Section 01 / Strategic Foundation</span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif tracking-tight text-[#1A1A1A] font-bold">
            Audience Breakdown & Commercial Opportunity Map
          </h1>
          <p className="text-[#1A1A1A]/80 text-sm sm:text-base leading-relaxed font-serif italic">
            Small space dwellers don’t need another generic 50-page lined PDF planner. They face intense physical constraints: narrow doorframes, zero closet depth, strict lease clauses, and sensory overload from multi-use rooms. Our digital product ecosystem turns spatial friction into high-margin, problem-solving digital assets.
          </p>
        </div>
      </section>

      {/* Part 1: Audience Personas */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#1A1A1A] pb-3">
          <div>
            <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-[#5A5A40] block">Target Demographics</span>
            <h2 className="text-xl sm:text-2xl font-serif text-[#1A1A1A] font-bold">
              1. The Three Core Audience Personas
            </h2>
            <p className="text-[#1A1A1A]/70 text-xs sm:text-sm">
              Tailored segments reading SmallSpaceHome.ca with distinct budgets and purchasing triggers.
            </p>
          </div>
          <div className="flex items-center gap-1.5 p-1 bg-[#F2F1EC] border border-[#1A1A1A] self-start">
            {AUDIENCE_PERSONAS.map((p) => (
              <button
                key={p.id}
                onClick={() => setSelectedPersona(p.id)}
                className={`px-3 py-1.5 text-xs font-medium transition-all cursor-pointer ${
                  selectedPersona === p.id
                    ? 'bg-[#1A1A1A] text-[#FAF9F6] font-semibold shadow-sm'
                    : 'text-[#1A1A1A]/80 hover:text-[#1A1A1A] hover:bg-white/60'
                }`}
              >
                {p.name.split(' ')[1] || p.name}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Persona Deep Dive Card */}
        <div className="bg-white border border-[#1A1A1A] p-6 sm:p-8 shadow-[2px_2px_0_0_#1A1A1A] space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div>
              <span className="inline-block bg-[#5A5A40] text-white px-2.5 py-0.5 text-[9px] font-bold tracking-[0.2em] uppercase">
                Primary Target Profile
              </span>
              <h3 className="text-xl sm:text-2xl font-serif text-[#1A1A1A] mt-2 font-bold">
                {activePersona.name}
              </h3>
              <p className="text-sm text-[#1A1A1A]/70 mt-1 font-medium">{activePersona.demographics}</p>
            </div>
            <div className="bg-[#FAF9F6] border border-[#1A1A1A] p-3 max-w-sm">
              <span className="text-[9px] font-bold text-[#5A5A40] block uppercase tracking-[0.2em]">Internal Trigger Quote</span>
              <p className="text-xs text-[#1A1A1A] italic font-serif mt-1">
                "{activePersona.triggerPhrase}"
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-[#1A1A1A]/15">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-[#1A1A1A] uppercase tracking-wider">
                <AlertTriangle className="w-4 h-4 text-[#5A5A40]" />
                <span>Critical Spatial Pain Points</span>
              </div>
              <ul className="space-y-2">
                {activePersona.painPoints.map((point, idx) => (
                  <li key={idx} className="text-xs sm:text-sm text-[#1A1A1A]/80 flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 bg-[#5A5A40] mt-2 shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-[#1A1A1A] uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-[#5A5A40]" />
                <span>Commercial & Budget Mindset</span>
              </div>
              <p className="text-xs sm:text-sm text-[#1A1A1A]/80 leading-relaxed bg-[#FAF9F6] p-4 border border-[#1A1A1A]/20">
                {activePersona.budgetMindset}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Part 2: Why Generic Printables Fail (The Anti-Slop Discipline) */}
      <section className="bg-[#1A1A1A] text-[#FAF9F6] p-6 sm:p-8 border border-[#1A1A1A] shadow-[3px_3px_0_0_#5A5A40] space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-white/10 border border-white/20 flex items-center justify-center text-amber-300">
            <AlertTriangle className="w-4 h-4" />
          </div>
          <div>
            <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-[#A0A090] block">Quality Benchmark</span>
            <h3 className="text-lg sm:text-xl font-serif font-bold text-[#FAF9F6]">
              Why Generic Etsy / Canva Printables Fail This Audience
            </h3>
            <p className="text-xs text-[#A0A090]">
              Our products are engineered with architectural accuracy, not decorative filler pages.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-[#242424] border border-[#1A1A1A] p-4 space-y-2.5">
            <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
              <XCircle className="w-4 h-4" />
              <span>Generic Printables (Saturated / Low Perceived Value)</span>
            </div>
            <ul className="text-xs text-[#FAF9F6]/70 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-amber-400 shrink-0">✕</span>
                <span>Empty lined boxes labeled "Monday" or "Living Room To-Do" with zero spatial intelligence.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 shrink-0">✕</span>
                <span>Assumes infinite floor space, suburban walk-in closets, and permanent homeowners.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 shrink-0">✕</span>
                <span>Static 50-page PDF bundles that are exhausting to print and impossible to use on a phone or laptop.</span>
              </li>
            </ul>
          </div>

          <div className="bg-[#2a2d24] border border-[#5A5A40] p-4 space-y-2.5">
            <div className="flex items-center gap-2 text-[#EAE8DF] text-xs font-bold uppercase tracking-wider">
              <CheckCircle2 className="w-4 h-4 text-[#A0A090]" />
              <span>SmallSpaceHome High-Craft Standard</span>
            </div>
            <ul className="text-xs text-[#FAF9F6]/90 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-[#A0A090] shrink-0 font-bold">✓</span>
                <span>Automated clearance calculators (36" traffic flow rule) and 1/4" scale furniture templates.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#A0A090] shrink-0 font-bold">✓</span>
                <span>Renter-safe hardware load formulas, Command-strip weight ratings, and deposit restoration guides.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#A0A090] shrink-0 font-bold">✓</span>
                <span>Hybrid delivery: Connected Notion workspaces, live Google Sheets, and editorial print-ready cards.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Part 3: Product Opportunity Matrix */}
      <section className="space-y-6">
        <div className="border-b border-[#1A1A1A] pb-3">
          <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-[#5A5A40] block">Strategy Matrix</span>
          <h2 className="text-xl sm:text-2xl font-serif text-[#1A1A1A] font-bold">
            2. Content Cluster vs. Commercial Intent Opportunity Map
          </h2>
          <p className="text-[#1A1A1A]/70 text-xs sm:text-sm">
            How existing SmallSpaceHome.ca blog categories bridge to high-converting product opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {opportunityClusters.map((cluster, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#1A1A1A] p-5 shadow-[2px_2px_0_0_#1A1A1A] hover:shadow-[3px_3px_0_0_#5A5A40] transition-all space-y-3"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 bg-[#1A1A1A] text-[#FAF9F6] font-serif font-bold text-xs flex items-center justify-center border border-[#1A1A1A]">
                    {idx + 1}
                  </div>
                  <h3 className="text-base sm:text-lg font-serif text-[#1A1A1A] font-bold">
                    {cluster.cluster}
                  </h3>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 bg-[#F2F1EC] text-[#5A5A40] border border-[#5A5A40]/30 self-start">
                  {cluster.intent}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs bg-[#FAF9F6] p-3.5 border border-[#1A1A1A]/20">
                <div>
                  <span className="text-[#5A5A40] font-bold uppercase tracking-wider text-[9px] block">Conversion Potential</span>
                  <span className="text-[#1A1A1A] font-semibold">{cluster.conversionPotential}</span>
                </div>
                <div>
                  <span className="text-[#5A5A40] font-bold uppercase tracking-wider text-[9px] block">Recommended Entry Product</span>
                  <span className="text-[#1A1A1A] font-bold">{cluster.recommendedEntryProduct}</span>
                </div>
                <div>
                  <span className="text-[#5A5A40] font-bold uppercase tracking-wider text-[9px] block">Flagship Ecosystem Link</span>
                  <span className="text-[#1A1A1A]/80">{cluster.flagshipTieIn}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-[#1A1A1A]/80 pt-2 border-t border-[#1A1A1A]/10 gap-2 font-medium">
                <div className="flex items-center gap-1.5">
                  <TrendingUp className="w-3.5 h-3.5 text-[#5A5A40]" />
                  <span><strong>Pricing Ladder:</strong> {cluster.impulseVsSystem}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Part 4: The 4 Core Spatial Traps */}
      <section className="space-y-4">
        <div className="border-b border-[#1A1A1A] pb-2">
          <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-[#5A5A40] block">Core Insights</span>
          <h2 className="text-xl font-serif text-[#1A1A1A] font-bold">
            The 4 Core Spatial & Psychological Traps We Solve
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {CORE_PROBLEMS_ANALYSIS.map((item, idx) => (
            <div key={idx} className="bg-white p-5 border border-[#1A1A1A] shadow-[2px_2px_0_0_#1A1A1A] space-y-2">
              <h4 className="font-serif text-[#1A1A1A] font-bold text-base flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-[#5A5A40]" />
                {item.title}
              </h4>
              <p className="text-xs text-[#1A1A1A]/80 leading-relaxed font-sans">{item.description}</p>
              <div className="pt-2 border-t border-[#1A1A1A]/10">
                <span className="text-[10px] font-bold text-[#5A5A40] uppercase tracking-[0.15em] block">Our Solution:</span>
                <span className="text-xs text-[#1A1A1A] font-semibold">{item.solutionApproach}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA to Products */}
      <div className="flex justify-center pt-4">
        <button
          onClick={onExploreProducts}
          className="flex items-center gap-2 px-6 py-3 bg-[#1A1A1A] hover:bg-[#5A5A40] text-[#FAF9F6] font-bold text-xs uppercase tracking-wider transition-all shadow-[3px_3px_0_0_#5A5A40] border border-[#1A1A1A] cursor-pointer"
        >
          <span>Explore The Top 20 Digital Products & Scoring Matrix</span>
          <ArrowRight className="w-4 h-4 text-[#FAF9F6]" />
        </button>
      </div>
    </div>
  );
};
