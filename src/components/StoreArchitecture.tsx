import React from 'react';
import { FOURTHWALL_STORE_ARCHITECTURE } from '../data/strategyData';
import { ShoppingBag, Zap, ShieldCheck, Download, Sparkles } from 'lucide-react';

export const StoreArchitecture: React.FC = () => {
  return (
    <div className="space-y-10 pb-12">
      {/* Header */}
      <div className="border-b border-[#1A1A1A] pb-4">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-[#4A533E] text-white text-[9px] font-bold uppercase tracking-[0.2em] mb-1.5">
          <ShoppingBag className="w-3 h-3" />
          <span>Section 07 / Fourthwall Digital Store Architecture</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-serif text-[#1A1A1A] font-bold">
          Fourthwall Storefront Architecture & Digital Catalog
        </h2>
        <p className="text-xs sm:text-sm text-[#1A1A1A]/70 mt-0.5 font-serif italic">
          How to structure collections, product pages, digital checkout bumps, and instant delivery on <strong>shop.smallspacehome.ca</strong>.
        </p>
      </div>

      {/* Fourthwall Store Collections Grid */}
      <div className="space-y-4">
        <div>
          <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#4A533E] block">Navigation Structure</span>
          <h3 className="font-serif text-xl font-bold text-[#1A1A1A]">
            1. Storefront Navigation & 11-Product Taxonomy
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {FOURTHWALL_STORE_ARCHITECTURE.collections.map((col, idx) => (
            <div
              key={col.id}
              className="bg-white border border-[#1A1A1A] p-5 shadow-[3px_3px_0_0_#1A1A1A] space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-bold text-[#4A533E] uppercase tracking-[0.15em]">
                    Collection 0{idx + 1}
                  </span>
                  <span className="w-2 h-2 bg-[#4A533E]" />
                </div>
                <h4 className="font-serif text-lg font-bold text-[#1A1A1A]">
                  {col.title}
                </h4>
                <p className="text-xs text-[#1A1A1A]/70 leading-relaxed font-sans">
                  {col.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[#1A1A1A]/15 space-y-1.5 text-xs text-[#1A1A1A]">
                <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#4A533E] block">
                  Featured Products:
                </span>
                <ul className="space-y-1">
                  {col.featuredProducts.map((p, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-[#4A533E] font-bold">•</span>
                      <span className="text-[#1A1A1A] font-medium truncate">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* High-Margin Checkout Bumps on Fourthwall */}
      <div className="bg-[#1A1A1A] text-[#FAF9F6] p-6 sm:p-8 border border-[#1A1A1A] shadow-[4px_4px_0_0_#4A533E] space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-[#4A533E] border border-white/20 flex items-center justify-center text-white shrink-0">
            <Zap className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-serif text-white font-bold">
              2. High-Converting Digital Checkout Bumps ($5 – $9 CAD)
            </h3>
            <p className="text-xs text-[#FAF9F6]/70 font-serif italic">
              Low-friction impulse add-ons presented inside Fourthwall's 1-click checkout flow.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {FOURTHWALL_STORE_ARCHITECTURE.checkoutBumps.map((bump) => (
            <div key={bump.id} className="bg-white/10 p-5 border border-white/20 space-y-2 text-xs">
              <div className="flex items-center justify-between">
                <span className="font-serif font-bold text-white text-sm">{bump.title}</span>
                <span className="text-white font-bold text-[10px] uppercase tracking-wider bg-[#4A533E] px-2 py-0.5 border border-white/20">
                  Est. Take Rate: {bump.takeRateEstimate}
                </span>
              </div>
              <span className="text-[#FAF9F6]/80 block pt-1 font-sans">
                <strong className="text-[#EAE8DF]">Trigger Rule:</strong> {bump.triggerConditions}
              </span>
              <p className="text-[#FAF9F6]/60 text-[11px] font-serif italic">
                Increases average order value with zero marginal delivery cost.
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Digital Fulfillment & Onboarding Experience */}
      <div className="bg-[#FAF8F5] border border-[#4A533E]/30 p-6 space-y-4">
        <div>
          <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#4A533E] block">Post-Checkout Retention</span>
          <h3 className="font-serif text-lg font-bold text-[#1C1917]">
            3. Post-Purchase Instant Digital Fulfillment & Onboarding Flow
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          <div className="bg-white p-4 border border-[#1C1917]/20 space-y-2 shadow-[2px_2px_0_0_#1C1917]">
            <div className="flex items-center gap-1.5 text-[#4A533E] font-bold text-[9px] uppercase tracking-wider">
              <Download className="w-3.5 h-3.5" />
              <span>Step 1: Instant Download</span>
            </div>
            <p className="text-[#1C1917]/80 leading-relaxed">Fourthwall instant order confirmation page provides immediate direct access to the 30+ page Master Playbook PDF, CSV Decision Matrix, and Markdown Tactical Checklist.</p>
          </div>
          <div className="bg-white p-4 border border-[#1C1917]/20 space-y-2 shadow-[2px_2px_0_0_#1C1917]">
            <div className="flex items-center gap-1.5 text-[#4A533E] font-bold text-[9px] uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Step 2: Automated Email Delivery</span>
            </div>
            <p className="text-[#1C1917]/80 leading-relaxed">Automated delivery email sent within 60 seconds with customer-facing personal use license, clickable links, and quick-start tips.</p>
          </div>
          <div className="bg-white p-4 border border-[#1C1917]/20 space-y-2 shadow-[2px_2px_0_0_#1C1917]">
            <div className="flex items-center gap-1.5 text-[#4A533E] font-bold text-[9px] uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Step 3: Lifetime Access</span>
            </div>
            <p className="text-[#1C1917]/80 leading-relaxed">Customers can re-download their purchased playbooks and files anytime with zero account friction.</p>
          </div>
        </div>
      </div>

    </div>
  );
};
