import React from 'react';
import { FOURTHWALL_STORE_ARCHITECTURE } from '../data/strategyData';
import { ShoppingBag, Zap, Coffee, Image as ImageIcon } from 'lucide-react';

export const StoreArchitecture: React.FC = () => {
  return (
    <div className="space-y-10 pb-12">
      {/* Header */}
      <div className="border-b border-[#1A1A1A] pb-4">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-[#5A5A40] text-white text-[9px] font-bold uppercase tracking-[0.2em] mb-1.5">
          <ShoppingBag className="w-3 h-3" />
          <span>Section 07 / Fourthwall Merchandising Architecture</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-serif text-[#1A1A1A] font-bold">
          Fourthwall Store Organization & Merch Synergy
        </h2>
        <p className="text-xs sm:text-sm text-[#1A1A1A]/70 mt-0.5 font-serif italic">
          How to structure collections, product pages, physical pairings, and checkout bumps on <strong>shop.smallspacehome.ca</strong>.
        </p>
      </div>

      {/* Fourthwall Store Collections Grid */}
      <div className="space-y-4">
        <div>
          <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#5A5A40] block">Navigation Structure</span>
          <h3 className="font-serif text-xl font-bold text-[#1A1A1A]">
            1. Storefront Navigation & Collection Taxonomy
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
                  <span className="text-[9px] font-bold text-[#5A5A40] uppercase tracking-[0.15em]">
                    Collection 0{idx + 1}
                  </span>
                  <span className="w-2 h-2 bg-[#5A5A40]" />
                </div>
                <h4 className="font-serif text-lg font-bold text-[#1A1A1A]">
                  {col.title}
                </h4>
                <p className="text-xs text-[#1A1A1A]/70 leading-relaxed font-sans">
                  {col.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[#1A1A1A]/15 space-y-1.5 text-xs text-[#1A1A1A]">
                <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#5A5A40] block">
                  Featured Products:
                </span>
                <ul className="space-y-1">
                  {col.featuredProducts.map((p, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-[#5A5A40] font-bold">•</span>
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
      <div className="bg-[#1A1A1A] text-[#FAF9F6] p-6 sm:p-8 border border-[#1A1A1A] shadow-[4px_4px_0_0_#5A5A40] space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-[#5A5A40] border border-white/20 flex items-center justify-center text-white shrink-0">
            <Zap className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-serif text-white font-bold">
              2. High-Converting Checkout Bumps ($5 – $9 CAD)
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
                <span className="text-white font-bold text-[10px] uppercase tracking-wider bg-[#5A5A40] px-2 py-0.5 border border-white/20">
                  Est. Take Rate: {bump.takeRateEstimate}
                </span>
              </div>
              <span className="text-[#FAF9F6]/80 block pt-1 font-sans">
                <strong className="text-[#EAE8DF]">Trigger Rule:</strong> {bump.triggerConditions}
              </span>
              <p className="text-[#FAF9F6]/60 text-[11px] font-serif italic">
                Increases basket value by $5–$7 with zero fulfillment overhead.
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Physical-to-Digital Synergy (Wall Art & Mugs) */}
      <div className="bg-white border border-[#1A1A1A] p-6 sm:p-8 shadow-[3px_3px_0_0_#1A1A1A] space-y-6">
        <div className="border-b border-[#1A1A1A]/15 pb-3">
          <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#5A5A40] block">Cross-Catalog Bundling</span>
          <h3 className="font-serif text-xl font-bold text-[#1A1A1A]">
            3. Physical Merchandise Synergy (Fourthwall Wall Art & Ceramic Mugs)
          </h3>
          <p className="text-xs text-[#1A1A1A]/70 font-serif italic">
            Connecting physical aesthetic objects with functional digital systems to create premium lifestyle kits.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Wall Art Synergy */}
          <div className="bg-[#FAF9F6] p-5 border border-[#1A1A1A]/20 space-y-3">
            <div className="flex items-center gap-2 text-[#5A5A40] font-bold text-[9px] uppercase tracking-[0.2em]">
              <ImageIcon className="w-4 h-4" />
              <span>SmallSpaceHome Wall Art Prints</span>
            </div>
            <h4 className="font-serif text-lg font-bold text-[#1A1A1A]">
              The "Focal Point Sanctuary" Art & Layout Bundle
            </h4>
            <p className="text-xs text-[#1A1A1A]/80 leading-relaxed font-sans">
              In small apartments, an oversized or poorly proportioned art frame shrinks wall height. Pair our physical art prints with the <strong>Small-Space Layout & Furniture Planner</strong> and <strong>Aesthetic Lighting Formula</strong> so customers know exactly how to hang and light their art for maximum room expansion.
            </p>
            <div className="bg-white p-3 border border-[#1A1A1A]/20 text-xs text-[#1A1A1A] font-medium shadow-[2px_2px_0_0_#5A5A40]">
              🎁 <strong>Store Offer:</strong> Buy any 18x24" Wall Art Print → Get the Digital Layout Planner for 50% OFF ($17).
            </div>
          </div>

          {/* Coffee Mug Synergy */}
          <div className="bg-[#FAF9F6] p-5 border border-[#1A1A1A]/20 space-y-3">
            <div className="flex items-center gap-2 text-[#5A5A40] font-bold text-[9px] uppercase tracking-[0.2em]">
              <Coffee className="w-4 h-4" />
              <span>SmallSpaceHome Ceramic Coffee Mugs</span>
            </div>
            <h4 className="font-serif text-lg font-bold text-[#1A1A1A]">
              The "Morning Calm & Nightly Reset" Daily Ritual Kit
            </h4>
            <p className="text-xs text-[#1A1A1A]/80 leading-relaxed font-sans">
              Position the ceramic mug not merely as merchandise, but as the physical anchor for the <strong>12-Minute Morning Calm & Nightly Reset Routine</strong>. The customer sips coffee while reviewing their laminated daily rhythm card.
            </p>
            <div className="bg-white p-3 border border-[#1A1A1A]/20 text-xs text-[#1A1A1A] font-medium shadow-[2px_2px_0_0_#5A5A40]">
              🎁 <strong>Store Offer:</strong> Buy the Ceramic Mug ($24) → Receive the Printable 12-Minute Cleaning Rhythm Cards for FREE.
            </div>
          </div>

        </div>
      </div>

      {/* Digital Fulfillment & Onboarding Experience */}
      <div className="bg-[#F2F1EC] border border-[#5A5A40]/30 p-6 space-y-4">
        <div>
          <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#5A5A40] block">Post-Checkout Retention</span>
          <h3 className="font-serif text-lg font-bold text-[#1A1A1A]">
            4. Post-Purchase Digital Fulfillment & Onboarding Flow
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          <div className="bg-white p-3.5 border border-[#1A1A1A]/20 space-y-1 shadow-[2px_2px_0_0_#1A1A1A]">
            <span className="font-bold text-[#5A5A40] uppercase text-[9px] tracking-wider block">Step 1: Instant Download</span>
            <p className="text-[#1A1A1A]">Fourthwall instant order confirmation page provides immediate direct access to PDFs, Notion duplicate links, and Google Sheets.</p>
          </div>
          <div className="bg-white p-3.5 border border-[#1A1A1A]/20 space-y-1 shadow-[2px_2px_0_0_#1A1A1A]">
            <span className="font-bold text-[#5A5A40] uppercase text-[9px] tracking-wider block">Step 2: Automated Email Access</span>
            <p className="text-[#1A1A1A]">Automated welcome email with PDF attachments, Notion 1-click duplicate instructions, and a 3-minute video walkthrough.</p>
          </div>
          <div className="bg-white p-3.5 border border-[#1A1A1A]/20 space-y-1 shadow-[2px_2px_0_0_#1A1A1A]">
            <span className="font-bold text-[#5A5A40] uppercase text-[9px] tracking-wider block">Step 3: 7-Day Nurture & Upsell</span>
            <p className="text-[#1A1A1A]">Day 3: "How is your layout planning going?" → Day 7: Invite to upgrade to the Flagship SS-OS with credit from their first purchase.</p>
          </div>
        </div>
      </div>

    </div>
  );
};
