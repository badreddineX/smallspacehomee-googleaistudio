import React from 'react';
import { BUNDLE_ECOSYSTEM } from '../data/strategyData';
import { Package, Sparkles, CheckCircle2, ShieldCheck, Tag, Gift, ShoppingBag, Coffee, Image as ImageIcon } from 'lucide-react';

export const BundleArchitecture: React.FC = () => {
  return (
    <div className="space-y-10 pb-12">
      {/* Header */}
      <div className="border-b border-[#1A1A1A] pb-4">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-[#5A5A40] text-white text-[9px] font-bold uppercase tracking-[0.2em] mb-1.5">
          <Package className="w-3 h-3" />
          <span>Section 05 / Curated Suite Strategy</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-serif text-[#1A1A1A] font-bold">
          High-Converting Bundle Architecture & Merch Synergy
        </h2>
        <p className="text-xs sm:text-sm text-[#1A1A1A]/70 mt-0.5 font-serif italic">
          Strategically grouped systems that increase Average Order Value (AOV) on Fourthwall while delivering massive customer savings.
        </p>
      </div>

      {/* Bundles Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {BUNDLE_ECOSYSTEM.map((bundle) => {
          const isAllAccess = bundle.id === 'bundle-complete-all-access';
          return (
            <div
              key={bundle.id}
              className={`border p-6 sm:p-8 flex flex-col justify-between space-y-6 transition-all ${
                isAllAccess
                  ? 'bg-[#1A1A1A] text-[#FAF9F6] border-[#1A1A1A] shadow-[4px_4px_0_0_#5A5A40]'
                  : 'bg-white text-[#1A1A1A] border-[#1A1A1A] shadow-[3px_3px_0_0_#1A1A1A]'
              }`}
            >
              <div className="space-y-4">
                {/* Badge Row */}
                <div className="flex items-center justify-between gap-2">
                  <span
                    className={`text-[9px] font-bold uppercase tracking-[0.2em] px-2.5 py-0.5 border ${
                      isAllAccess
                        ? 'bg-[#5A5A40] text-white border-[#5A5A40]'
                        : 'bg-[#F2F1EC] text-[#5A5A40] border-[#5A5A40]/30'
                    }`}
                  >
                    {isAllAccess ? 'VIP Flagship Bundle' : 'Curated Solution Suite'}
                  </span>

                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#5A5A40] bg-[#F2F1EC] px-2 py-0.5 border border-[#5A5A40]/30">
                    Save {bundle.savingsPercentage}% OFF
                  </span>
                </div>

                {/* Title & Tagline */}
                <div>
                  <h3 className={`font-serif text-xl sm:text-2xl font-bold ${isAllAccess ? 'text-white' : 'text-[#1A1A1A]'}`}>
                    {bundle.name}
                  </h3>
                  <p className={`text-xs italic font-serif mt-0.5 ${isAllAccess ? 'text-[#FAF9F6]/70' : 'text-[#1A1A1A]/70'}`}>
                    {bundle.tagline}
                  </p>
                </div>

                {/* Target & Problem */}
                <div className={`p-3.5 border text-xs space-y-1.5 ${
                  isAllAccess ? 'bg-white/10 border-white/15 text-[#FAF9F6]' : 'bg-[#FAF9F6] border-[#1A1A1A]/20 text-[#1A1A1A]'
                }`}>
                  <div>
                    <span className="font-bold uppercase text-[9px] tracking-[0.15em] block text-[#5A5A40]">Target Customer:</span>
                    <span className={isAllAccess ? 'text-white' : 'text-[#1A1A1A]'}>{bundle.targetCustomer}</span>
                  </div>
                  <div>
                    <span className="font-bold uppercase text-[9px] tracking-[0.15em] block text-[#5A5A40]">Problem Solved:</span>
                    <span className="font-sans">{bundle.problemSolved}</span>
                  </div>
                </div>

                {/* Products Included */}
                <div className="space-y-2">
                  <span className={`text-[9px] font-bold uppercase tracking-[0.2em] block ${isAllAccess ? 'text-[#EAE8DF]' : 'text-[#5A5A40]'}`}>
                    Products & Systems Included:
                  </span>
                  <ul className="space-y-1.5 text-xs">
                    {bundle.productsIncluded.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${isAllAccess ? 'text-[#A0A090]' : 'text-[#5A5A40]'}`} />
                        <span className={isAllAccess ? 'text-[#FAF9F6]/90' : 'text-[#1A1A1A]/90'}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Total Scope */}
                <div className={`p-3 border text-xs ${
                  isAllAccess ? 'bg-white/5 border-white/10 text-[#EAE8DF]' : 'bg-[#F2F1EC] border-[#5A5A40]/30 text-[#1A1A1A]'
                }`}>
                  <strong>Package Scope:</strong> {bundle.totalComponents}
                </div>

                {/* Buying Rationale */}
                <div className={`text-xs p-3 border ${
                  isAllAccess ? 'bg-white/5 border-white/10 text-[#FAF9F6]/70' : 'bg-[#FAF9F6] border-[#1A1A1A]/15 text-[#1A1A1A]/80'
                }`}>
                  <span className="font-bold block text-[9px] uppercase tracking-wider text-[#5A5A40]">Customer Rationale:</span>
                  <p className="mt-0.5 italic font-serif text-xs">"{bundle.buyingRationale}"</p>
                </div>

                {/* Physical Merch Synergy (Fourthwall Integration) */}
                {bundle.physicalCrossSell && (
                  <div className={`p-3.5 border text-xs space-y-1.5 ${
                    isAllAccess ? 'bg-white/10 border-white/20 text-[#FAF9F6]' : 'bg-white border-[#1A1A1A] shadow-[2px_2px_0_0_#5A5A40] text-[#1A1A1A]'
                  }`}>
                    <div className="flex items-center gap-1.5 text-[#5A5A40] font-bold text-[9px] uppercase tracking-[0.2em]">
                      {bundle.physicalCrossSell.merchType === 'Wall Art' ? (
                        <ImageIcon className="w-3.5 h-3.5 text-[#5A5A40]" />
                      ) : (
                        <Coffee className="w-3.5 h-3.5 text-[#5A5A40]" />
                      )}
                      <span>Fourthwall Physical Pairing ({bundle.physicalCrossSell.merchType})</span>
                    </div>
                    <p className="font-bold text-xs">{bundle.physicalCrossSell.productName}</p>
                    <p className="text-[11px] text-[#1A1A1A]/70 italic font-serif">{bundle.physicalCrossSell.synergyPitch}</p>
                  </div>
                )}

              </div>

              {/* Price & Action Row */}
              <div className={`pt-4 border-t flex items-center justify-between ${isAllAccess ? 'border-white/15' : 'border-[#1A1A1A]/15'}`}>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs line-through text-[#1A1A1A]/40">${bundle.perceivedValue} CAD</span>
                    <span className={`text-xl font-serif font-bold ${isAllAccess ? 'text-white' : 'text-[#1A1A1A]'}`}>
                      ${bundle.suggestedPrice} CAD
                    </span>
                  </div>
                  <span className={`text-[9px] uppercase tracking-wider block ${isAllAccess ? 'text-[#FAF9F6]/60' : 'text-[#1A1A1A]/60'}`}>
                    One-time purchase • Instant digital delivery
                  </span>
                </div>

                <div className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 border ${
                  isAllAccess 
                    ? 'bg-[#5A5A40] text-white border-[#5A5A40]' 
                    : 'bg-[#1A1A1A] text-white border-[#1A1A1A]'
                }`}>
                  Store Featured Bundle
                </div>
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
};
