import React from 'react';
import { BUNDLE_ECOSYSTEM, TOP_20_PRODUCTS } from '../data/strategyData';
import { Package, Sparkles, CheckCircle2, ShieldCheck, Tag, Gift, ShoppingBag, Coffee, Image as ImageIcon, ExternalLink, ArrowRight } from 'lucide-react';

interface BundleArchitectureProps {
  onSelectProduct?: (productId: string) => void;
}

export const BundleArchitecture: React.FC<BundleArchitectureProps> = ({ onSelectProduct }) => {
  return (
    <div className="space-y-10 pb-16">
      {/* Header */}
      <div className="border-b border-[#E5DFD5] pb-5">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <span className="editorial-badge">
            <Package className="w-3 h-3" />
            <span>Curated Suite Strategy</span>
          </span>
          <span className="text-[#1C1917]/40 text-xs">•</span>
          <span className="text-xs text-[#4A533E] font-medium">Fourthwall High-AOV Bundles</span>
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#1C1917] font-bold tracking-tight">
          High-Converting Bundle Architecture & Merch Synergy
        </h2>
        <p className="text-xs sm:text-sm text-[#1C1917]/70 mt-1 max-w-3xl font-serif italic">
          Strategically grouped systems that increase Average Order Value (AOV) on Fourthwall while delivering massive customer savings (35% to 63% off).
        </p>
      </div>

      {/* Bundles Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {BUNDLE_ECOSYSTEM.map((bundle) => {
          const isMasterVault = bundle.id === 'bundle-ultimate-12-kit-vault' || bundle.id === 'bundle-complete-all-access';
          
          return (
            <div
              key={bundle.id}
              className={`border p-6 sm:p-8 flex flex-col justify-between space-y-6 transition-all rounded-xs ${
                isMasterVault
                  ? 'bg-[#1C1917] text-[#FAF8F5] border-[#1C1917] shadow-md'
                  : 'bg-white text-[#1C1917] border-[#E5DFD5] shadow-xs hover:border-[#4A533E]/50'
              }`}
            >
              <div className="space-y-4">
                {/* Badge Row */}
                <div className="flex items-center justify-between gap-2">
                  <span
                    className={`text-[9px] font-bold uppercase tracking-[0.15em] px-2.5 py-0.5 border rounded-xs ${
                      isMasterVault
                        ? 'bg-[#4A533E] text-white border-[#4A533E]'
                        : 'bg-[#FAF8F5] text-[#4A533E] border-[#E5DFD5]'
                    }`}
                  >
                    {isMasterVault ? 'VIP Master Collection' : 'Curated Solution Suite'}
                  </span>

                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 border rounded-xs ${
                    isMasterVault 
                      ? 'text-white bg-[#A85A3C] border-[#A85A3C]' 
                      : 'text-[#4A533E] bg-[#FAF8F5] border-[#E5DFD5]'
                  }`}>
                    Save {bundle.savingsPercentage}% OFF
                  </span>
                </div>

                {/* Title & Tagline */}
                <div>
                  <h3 className={`font-serif text-xl sm:text-2xl font-bold ${isMasterVault ? 'text-white' : 'text-[#1C1917]'}`}>
                    {bundle.name}
                  </h3>
                  <p className={`text-xs italic font-serif mt-1 ${isMasterVault ? 'text-[#FAF8F5]/75' : 'text-[#1C1917]/70'}`}>
                    "{bundle.tagline}"
                  </p>
                </div>

                {/* Target & Problem */}
                <div className={`p-3.5 border text-xs space-y-2 rounded-xs ${
                  isMasterVault ? 'bg-white/5 border-white/10 text-[#FAF8F5]' : 'bg-[#FAF8F5] border-[#E5DFD5] text-[#1C1917]'
                }`}>
                  <div>
                    <span className={`font-bold uppercase text-[9px] tracking-[0.15em] block ${isMasterVault ? 'text-[#D9D3C7]' : 'text-[#4A533E]'}`}>
                      Target Customer:
                    </span>
                    <span className={isMasterVault ? 'text-white/90' : 'text-[#1C1917]'}>{bundle.targetCustomer}</span>
                  </div>
                  <div>
                    <span className={`font-bold uppercase text-[9px] tracking-[0.15em] block ${isMasterVault ? 'text-[#D9D3C7]' : 'text-[#4A533E]'}`}>
                      Problem Solved:
                    </span>
                    <span className={isMasterVault ? 'text-white/80' : 'text-[#1C1917]/80'}>{bundle.problemSolved}</span>
                  </div>
                </div>

                {/* Products Included */}
                <div className="space-y-2">
                  <span className={`text-[9px] font-bold uppercase tracking-[0.15em] block ${isMasterVault ? 'text-[#D9D3C7]' : 'text-[#4A533E]'}`}>
                    Products & Systems Included:
                  </span>
                  <ul className="space-y-1.5 text-xs">
                    {bundle.productsIncluded.map((item, idx) => {
                      // Try to resolve product
                      const matchedProduct = TOP_20_PRODUCTS.find(p => p.id === item);
                      const displayTitle = matchedProduct 
                        ? `#${matchedProduct.rank} ${matchedProduct.title} ($${matchedProduct.recommendedPrice} CAD)` 
                        : item;

                      return (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${isMasterVault ? 'text-[#D9D3C7]' : 'text-[#4A533E]'}`} />
                          <span className={isMasterVault ? 'text-[#FAF8F5]/90' : 'text-[#1C1917]/90'}>
                            {displayTitle}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {/* Total Scope */}
                <div className={`p-3 border text-xs rounded-xs ${
                  isMasterVault ? 'bg-white/5 border-white/10 text-[#D9D3C7]' : 'bg-[#FAF8F5] border-[#E5DFD5] text-[#1C1917]'
                }`}>
                  <strong>Package Scope:</strong> {bundle.totalComponents}
                </div>

                {/* Buying Rationale */}
                <div className={`text-xs p-3 border rounded-xs ${
                  isMasterVault ? 'bg-white/5 border-white/10 text-[#FAF8F5]/70' : 'bg-white border-[#E5DFD5] text-[#1C1917]/80'
                }`}>
                  <span className={`font-bold block text-[9px] uppercase tracking-wider ${isMasterVault ? 'text-[#D9D3C7]' : 'text-[#4A533E]'}`}>
                    Customer Rationale:
                  </span>
                  <p className="mt-0.5 italic font-serif text-xs">"{bundle.buyingRationale}"</p>
                </div>

                {/* Physical Merch Synergy (Fourthwall Integration) */}
                {bundle.physicalCrossSell && (
                  <div className={`p-3.5 border text-xs space-y-1.5 rounded-xs ${
                    isMasterVault 
                      ? 'bg-white/10 border-white/20 text-[#FAF8F5]' 
                      : 'bg-[#FAF8F5] border-[#E5DFD5] text-[#1C1917]'
                  }`}>
                    <div className={`flex items-center gap-1.5 font-bold text-[9px] uppercase tracking-[0.15em] ${isMasterVault ? 'text-[#D9D3C7]' : 'text-[#4A533E]'}`}>
                      {bundle.physicalCrossSell.merchType === 'Wall Art' ? (
                        <ImageIcon className="w-3.5 h-3.5" />
                      ) : (
                        <Coffee className="w-3.5 h-3.5" />
                      )}
                      <span>Fourthwall Physical Pairing ({bundle.physicalCrossSell.merchType})</span>
                    </div>
                    <p className="font-bold text-xs">{bundle.physicalCrossSell.productName}</p>
                    <p className={`text-[11px] italic font-serif ${isMasterVault ? 'text-white/70' : 'text-[#1C1917]/70'}`}>
                      {bundle.physicalCrossSell.synergyPitch}
                    </p>
                  </div>
                )}

              </div>

              {/* Price & Action Row */}
              <div className={`pt-4 border-t flex items-center justify-between ${isMasterVault ? 'border-white/15' : 'border-[#E5DFD5]'}`}>
                <div>
                  <div className="flex items-center gap-2">
                    <span className={`text-xs line-through ${isMasterVault ? 'text-white/40' : 'text-[#1C1917]/40'}`}>
                      ${bundle.perceivedValue} CAD
                    </span>
                    <span className={`text-xl font-serif font-bold ${isMasterVault ? 'text-white' : 'text-[#1C1917]'}`}>
                      ${bundle.suggestedPrice} CAD
                    </span>
                  </div>
                  <span className={`text-[9px] uppercase tracking-wider block ${isMasterVault ? 'text-[#FAF8F5]/60' : 'text-[#1C1917]/60'}`}>
                    One-time purchase • Instant digital delivery
                  </span>
                </div>

                <div className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 border rounded-xs ${
                  isMasterVault 
                    ? 'bg-[#4A533E] text-white border-[#4A533E]' 
                    : 'bg-[#1C1917] text-white border-[#1C1917]'
                }`}>
                  {isMasterVault ? 'All-Access Vault' : 'Store Featured Bundle'}
                </div>
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
};

