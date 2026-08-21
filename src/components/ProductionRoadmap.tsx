import React, { useState } from 'react';
import { PRODUCTION_ROADMAP, TOP_20_PRODUCTS, BUNDLE_ECOSYSTEM, FLAGSHIP_DETAILED_SPEC } from '../data/strategyData';
import { copyToClipboard } from '../utils/helpers';
import { Calendar, CheckCircle2, Circle, Download, ShieldCheck, Check } from 'lucide-react';

export const ProductionRoadmap: React.FC = () => {
  const [completedTasks, setCompletedTasks] = useState<Record<string, boolean>>({
    'Build & Polish Product #4: The Damage-Free Renter Upgrade Manual ($19 CAD)': true,
    'Build & Polish Product #6: Apartment Storage Audit & Vertical Optimization Kit ($17 CAD)': true
  });
  const [copiedReport, setCopiedReport] = useState(false);

  const toggleTask = (taskName: string) => {
    setCompletedTasks((prev) => ({
      ...prev,
      [taskName]: !prev[taskName]
    }));
  };

  const handleExportFullMarkdown = () => {
    const report = `# SmallSpaceHome — Complete Digital Product Strategy & Blueprint
**Blog:** https://smallspacehome.ca/
**Store:** https://shop.smallspacehome.ca/

---

## 1. Audience & Problem Analysis
- **Target Audience:** First-time apartment renters, compact condo owners, and downsizing professionals living in under 800 sq ft.
- **Core Pain Points:** 
  1. The "Two-Inch Error" Spatial Trap (furniture blocking walkways)
  2. Renter Deposit & Damage Restrictions (fear of landlord fines)
  3. Visual Clutter & Cognitive Overload (daily chaos from small footprints)
  4. Dual-Purpose Room Identity Crisis (restlessness in multi-use rooms)

---

## 2. Top 10 Products to Actually Build
${TOP_20_PRODUCTS.slice(0, 10).map((p) => `
### #${p.rank}. ${p.title} (${p.priceRange})
- **Level:** ${p.level.toUpperCase()}
- **Format:** ${p.format}
- **Problem Solved:** ${p.targetProblem}
- **Value Proposition:** ${p.valueProposition}
- **Why Build:** ${p.whyBuild}
- **Total Rubric Score:** ${p.scores.totalScore}/140
`).join('\n')}

---

## 3. Flagship Product: ${FLAGSHIP_DETAILED_SPEC.name}
- **Core Promise:** ${FLAGSHIP_DETAILED_SPEC.corePromise}
- **Price:** ${FLAGSHIP_DETAILED_SPEC.pricingStrategy.standalonePrice}
- **Formats:** ${FLAGSHIP_DETAILED_SPEC.formatSpecs.join(' | ')}
- **Modules:**
${FLAGSHIP_DETAILED_SPEC.modules.map((m) => `  - Module ${m.moduleNumber}: ${m.title} (${m.summary})`).join('\n')}

---

## 4. Bundle Architecture
${BUNDLE_ECOSYSTEM.map((b) => `
### ${b.name} — $${b.suggestedPrice} CAD (Value: $${b.perceivedValue} CAD)
- **Target Customer:** ${b.targetCustomer}
- **Savings:** ${b.savingsPercentage}% OFF
- **Products:** ${b.productsIncluded.join(', ')}
`).join('\n')}

---

## 5. Production Phases
${PRODUCTION_ROADMAP.map((phase) => `
### ${phase.phase} (${phase.timeline})
- **Goal:** ${phase.primaryGoal}
${phase.milestones.map((m) => `  - [ ] ${m.task} (${m.format})`).join('\n')}
`).join('\n')}
`;

    copyToClipboard(report);
    setCopiedReport(true);
    setTimeout(() => setCopiedReport(false), 2500);
  };

  return (
    <div className="space-y-10 pb-12">
      {/* Header with Export Button */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#1A1A1A] pb-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-[#5A5A40] text-white text-[9px] font-bold uppercase tracking-[0.2em] mb-1.5">
            <Calendar className="w-3 h-3" />
            <span>Section 08 / Execution Timeline</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif text-[#1A1A1A] font-bold">
            Production Roadmap & Launch Schedule
          </h2>
          <p className="text-xs sm:text-sm text-[#1A1A1A]/70 mt-0.5 font-serif italic">
            The sequenced 12-week build plan prioritizing speed to revenue, quality standards, and blog traffic integration.
          </p>
        </div>

        <button
          onClick={handleExportFullMarkdown}
          className="flex items-center gap-2 px-4 py-2.5 bg-[#1A1A1A] hover:bg-[#333] text-white font-bold text-xs uppercase tracking-wider shadow-[3px_3px_0_0_#5A5A40] transition-all self-start cursor-pointer border border-[#1A1A1A]"
        >
          {copiedReport ? <Check className="w-4 h-4 text-white" /> : <Download className="w-4 h-4" />}
          <span>{copiedReport ? 'Strategy Copied to Clipboard!' : 'Export Master Strategy (.MD)'}</span>
        </button>
      </div>

      {/* 4 Phases Timeline */}
      <div className="space-y-6">
        {PRODUCTION_ROADMAP.map((phase, idx) => (
          <div key={idx} className="bg-white border border-[#1A1A1A] p-6 sm:p-8 shadow-[3px_3px_0_0_#1A1A1A] space-y-4">
            
            {/* Phase Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#1A1A1A]/15 pb-3">
              <div>
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white bg-[#5A5A40] px-2.5 py-0.5">
                  {phase.timeline}
                </span>
                <h3 className="font-serif text-xl font-bold text-[#1A1A1A] mt-1.5">
                  {phase.phase}
                </h3>
              </div>
              <p className="text-xs text-[#1A1A1A]/70 max-w-md font-sans">
                <strong className="text-[#1A1A1A]">Primary Goal:</strong> {phase.primaryGoal}
              </p>
            </div>

            {/* Milestones List */}
            <div className="space-y-2.5 pt-2">
              {phase.milestones.map((m, mIdx) => {
                const isDone = completedTasks[m.task] || false;
                return (
                  <div
                    key={mIdx}
                    onClick={() => toggleTask(m.task)}
                    className={`p-3.5 border flex items-center justify-between gap-3 text-xs transition-all cursor-pointer ${
                      isDone
                        ? 'bg-[#F2F1EC] border-[#5A5A40]/40 text-[#1A1A1A]'
                        : 'bg-[#FAF9F6] border-[#1A1A1A]/20 text-[#1A1A1A] hover:border-[#1A1A1A]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {isDone ? (
                        <CheckCircle2 className="w-4 h-4 text-[#5A5A40] shrink-0" />
                      ) : (
                        <Circle className="w-4 h-4 text-[#1A1A1A]/40 shrink-0" />
                      )}
                      <div>
                        <span className={`font-bold ${isDone ? 'line-through text-[#1A1A1A]/50' : 'text-[#1A1A1A]'}`}>
                          {m.task}
                        </span>
                        <span className="text-[10px] text-[#1A1A1A]/60 block font-mono">
                          Format: {m.format}
                        </span>
                      </div>
                    </div>

                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#5A5A40] bg-white px-2 py-0.5 border border-[#1A1A1A]/20 shrink-0 shadow-[1px_1px_0_0_#1A1A1A]">
                      {m.targetLaunchWeek}
                    </span>
                  </div>
                );
              })}
            </div>

          </div>
        ))}
      </div>

      {/* Quality Control & Anti-Slop Rubric */}
      <div className="bg-[#1A1A1A] text-[#FAF9F6] p-6 sm:p-8 border border-[#1A1A1A] shadow-[4px_4px_0_0_#5A5A40] space-y-4">
        <div className="flex items-center gap-2.5">
          <ShieldCheck className="w-5 h-5 text-white" />
          <h3 className="font-serif text-lg font-bold text-white">
            SmallSpaceHome "Anti-Slop" Quality Standard Checklist
          </h3>
        </div>
        <p className="text-xs text-[#FAF9F6]/70 font-serif italic">
          Every digital product must pass all 6 quality gates before being published on Fourthwall:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div className="bg-white/10 p-3.5 border border-white/15 flex items-start gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#EAE8DF] mt-0.5 shrink-0" />
            <span className="font-sans text-[#FAF9F6]/90"><strong className="text-white">Zero Generic Fillers:</strong> No empty lined to-do pages. Every page must contain actionable spatial formulas, diagrams, or calculators.</span>
          </div>
          <div className="bg-white/10 p-3.5 border border-white/15 flex items-start gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#EAE8DF] mt-0.5 shrink-0" />
            <span className="font-sans text-[#FAF9F6]/90"><strong className="text-white">Clearance Math Verification:</strong> All layout guides must include exact 36" primary aisle and 18" secondary pullout measurements.</span>
          </div>
          <div className="bg-white/10 p-3.5 border border-white/15 flex items-start gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#EAE8DF] mt-0.5 shrink-0" />
            <span className="font-sans text-[#FAF9F6]/90"><strong className="text-white">Deposit-Safe Guarantee:</strong> Every renter upgrade must include an exact 5-minute reverse restoration protocol for move-out.</span>
          </div>
          <div className="bg-white/10 p-3.5 border border-white/15 flex items-start gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#EAE8DF] mt-0.5 shrink-0" />
            <span className="font-sans text-[#FAF9F6]/90"><strong className="text-white">Editorial Aesthetic:</strong> Neutral palette (stone, warm parchment, forest pine, terracotta) with refined typography (serif titles, clean sans body).</span>
          </div>
        </div>
      </div>
    </div>
  );
};
