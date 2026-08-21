import React, { useState } from 'react';
import { formatCurrency } from '../utils/helpers';
import { DollarSign, X } from 'lucide-react';

interface RevenueSimulatorProps {
  onClose: () => void;
}

export const RevenueSimulator: React.FC<RevenueSimulatorProps> = ({ onClose }) => {
  const [monthlyBlogTraffic, setMonthlyBlogTraffic] = useState<number>(25000);
  const [ctaClickRate, setCtaClickRate] = useState<number>(3.5); // 3.5%
  const [storeConversionRate, setStoreConversionRate] = useState<number>(4.2); // 4.2%
  const [avgQuickWinPrice, setAvgQuickWinPrice] = useState<number>(18);
  const [bundleUptakeRate, setBundleUptakeRate] = useState<number>(28); // 28% of buyers upgrade to bundles/flagship
  const [avgBundlePrice, setAvgBundlePrice] = useState<number>(54);
  const [checkoutBumpTakeRate, setCheckoutBumpTakeRate] = useState<number>(35); // 35% add $7 bump
  const [checkoutBumpPrice, setCheckoutBumpPrice] = useState<number>(7);

  // Math
  const storeVisitors = Math.round(monthlyBlogTraffic * (ctaClickRate / 100));
  const totalBuyers = Math.round(storeVisitors * (storeConversionRate / 100));
  
  const bundleBuyers = Math.round(totalBuyers * (bundleUptakeRate / 100));
  const singleBuyers = totalBuyers - bundleBuyers;
  const bumpBuyers = Math.round(totalBuyers * (checkoutBumpTakeRate / 100));

  const revenueSingle = singleBuyers * avgQuickWinPrice;
  const revenueBundles = bundleBuyers * avgBundlePrice;
  const revenueBumps = bumpBuyers * checkoutBumpPrice;
  const totalMonthlyRevenue = revenueSingle + revenueBundles + revenueBumps;
  const totalAnnualRevenue = totalMonthlyRevenue * 12;
  const effectiveAov = totalBuyers > 0 ? totalMonthlyRevenue / totalBuyers : 0;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm overflow-y-auto">
      <div className="bg-[#FAF9F6] border-2 border-[#1A1A1A] shadow-[6px_6px_0_0_#1A1A1A] max-w-2xl w-full max-h-[90vh] overflow-y-auto text-[#1A1A1A] animate-in fade-in zoom-in duration-150">
        
        {/* Header */}
        <div className="sticky top-0 bg-[#1A1A1A] text-[#FAF9F6] px-6 py-4 border-b border-[#1A1A1A] flex items-center justify-between z-10">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-[#5A5A40] text-white flex items-center justify-center font-bold">
              <DollarSign className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#A0A090] block">Financial Projection</span>
              <h3 className="font-serif text-lg font-bold text-white">
                SmallSpaceHome Revenue & Funnel Simulator
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#FAF9F6]/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer border border-transparent hover:border-white/20"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Simulator Controls & Calculations */}
        <div className="p-6 space-y-6 text-xs">
          
          {/* Revenue Highlight Banner */}
          <div className="bg-[#1A1A1A] text-[#FAF9F6] p-5 border border-[#1A1A1A] shadow-[4px_4px_0_0_#5A5A40] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#A0A090]">
                Projected Monthly Digital Run Rate
              </span>
              <div className="text-3xl sm:text-4xl font-serif font-bold text-white mt-1">
                {formatCurrency(totalMonthlyRevenue)} CAD
              </div>
              <span className="text-[10px] text-[#FAF9F6]/70 block mt-0.5 font-sans">
                Annual Run Rate: <strong className="text-white">{formatCurrency(totalAnnualRevenue)} CAD/yr</strong> (at {totalBuyers} monthly buyers)
              </span>
            </div>

            <div className="bg-white/10 p-3.5 border border-white/20 text-right shrink-0">
              <span className="text-[9px] font-bold text-[#A0A090] uppercase tracking-wider block">Blended AOV</span>
              <span className="text-lg font-serif font-bold text-[#EAE8DF]">
                {formatCurrency(effectiveAov)}
              </span>
            </div>
          </div>

          {/* Sliders Grid */}
          <div className="space-y-4">
            <div>
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#5A5A40] block">Variable Simulation</span>
              <h4 className="font-serif font-bold text-[#1A1A1A] text-sm border-b border-[#1A1A1A]/15 pb-2">
                Adjust Funnel Assumptions:
              </h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Traffic */}
              <div className="bg-white p-3.5 border border-[#1A1A1A]/20 shadow-[2px_2px_0_0_#1A1A1A] space-y-1.5">
                <div className="flex justify-between">
                  <label className="text-[#1A1A1A] font-bold text-[11px] uppercase tracking-wider">Monthly Blog Visitors</label>
                  <span className="font-mono font-bold text-[#1A1A1A]">{monthlyBlogTraffic.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min={5000}
                  max={150000}
                  step={2500}
                  value={monthlyBlogTraffic}
                  onChange={(e) => setMonthlyBlogTraffic(Number(e.target.value))}
                  className="w-full accent-[#5A5A40] cursor-pointer"
                />
              </div>

              {/* CTA Click-through */}
              <div className="bg-white p-3.5 border border-[#1A1A1A]/20 shadow-[2px_2px_0_0_#1A1A1A] space-y-1.5">
                <div className="flex justify-between">
                  <label className="text-[#1A1A1A] font-bold text-[11px] uppercase tracking-wider">Blog CTA Click-Through Rate</label>
                  <span className="font-mono font-bold text-[#1A1A1A]">{ctaClickRate}%</span>
                </div>
                <input
                  type="range"
                  min={1.0}
                  max={8.0}
                  step={0.2}
                  value={ctaClickRate}
                  onChange={(e) => setCtaClickRate(Number(e.target.value))}
                  className="w-full accent-[#5A5A40] cursor-pointer"
                />
                <span className="text-[10px] text-[#1A1A1A]/60 font-serif italic">{storeVisitors.toLocaleString()} store clicks/month</span>
              </div>

              {/* Conversion Rate */}
              <div className="bg-white p-3.5 border border-[#1A1A1A]/20 shadow-[2px_2px_0_0_#1A1A1A] space-y-1.5">
                <div className="flex justify-between">
                  <label className="text-[#1A1A1A] font-bold text-[11px] uppercase tracking-wider">Store Conversion Rate</label>
                  <span className="font-mono font-bold text-[#1A1A1A]">{storeConversionRate}%</span>
                </div>
                <input
                  type="range"
                  min={1.5}
                  max={9.0}
                  step={0.1}
                  value={storeConversionRate}
                  onChange={(e) => setStoreConversionRate(Number(e.target.value))}
                  className="w-full accent-[#5A5A40] cursor-pointer"
                />
                <span className="text-[10px] text-[#1A1A1A]/60 font-serif italic">{totalBuyers} paying customers/month</span>
              </div>

              {/* Bundle Upgrade % */}
              <div className="bg-white p-3.5 border border-[#1A1A1A]/20 shadow-[2px_2px_0_0_#1A1A1A] space-y-1.5">
                <div className="flex justify-between">
                  <label className="text-[#1A1A1A] font-bold text-[11px] uppercase tracking-wider">Bundle / Flagship Upgrade %</label>
                  <span className="font-mono font-bold text-[#1A1A1A]">{bundleUptakeRate}%</span>
                </div>
                <input
                  type="range"
                  min={10}
                  max={60}
                  step={2}
                  value={bundleUptakeRate}
                  onChange={(e) => setBundleUptakeRate(Number(e.target.value))}
                  className="w-full accent-[#5A5A40] cursor-pointer"
                />
                <span className="text-[10px] text-[#1A1A1A]/60 font-serif italic">{bundleBuyers} buyers choose suites ($54 CAD)</span>
              </div>

            </div>
          </div>

          {/* Revenue Breakdown by Stream */}
          <div className="bg-[#F2F1EC] p-4 border border-[#5A5A40]/30 space-y-2">
            <span className="font-bold text-[#5A5A40] text-[9px] uppercase tracking-[0.15em] block">
              Revenue Stream Breakdown:
            </span>
            <div className="space-y-1.5 text-[#1A1A1A]">
              <div className="flex justify-between">
                <span>Single Products ({singleBuyers} sales @ avg ${avgQuickWinPrice}):</span>
                <span className="font-mono font-bold">{formatCurrency(revenueSingle)}</span>
              </div>
              <div className="flex justify-between">
                <span>Bundles & Flagship ({bundleBuyers} sales @ avg ${avgBundlePrice}):</span>
                <span className="font-mono font-bold text-[#5A5A40]">{formatCurrency(revenueBundles)}</span>
              </div>
              <div className="flex justify-between">
                <span>$7 Checkout Bumps ({bumpBuyers} take-ups @ 35%):</span>
                <span className="font-mono font-bold">{formatCurrency(revenueBumps)}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="bg-[#FAF9F6] px-6 py-3.5 border-t border-[#1A1A1A]/15 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#1A1A1A] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#333] transition-colors cursor-pointer border border-[#1A1A1A]"
          >
            Close Simulator
          </button>
        </div>

      </div>
    </div>
  );
};
