import React, { useState, useMemo } from 'react';
import { TOP_20_PRODUCTS } from '../data/strategyData';
import { DigitalProduct, ProductLevel } from '../types';
import { ProductDetailModal } from './ProductDetailModal';
import { Search, Filter, Sparkles, CheckCircle2, ChevronRight, BarChart2, Star, Layers, AlertCircle, ShoppingBag } from 'lucide-react';

interface ProductCatalogProps {
  onSelectFlagship: () => void;
  onSelectProductStudio?: (productId: string) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({ onSelectFlagship, onSelectProductStudio }) => {
  const [selectedProduct, setSelectedProduct] = useState<DigitalProduct | null>(null);
  const [viewMode, setViewMode] = useState<'top10' | 'all20'>('all20');
  const [searchQuery, setSearchQuery] = useState('');
  const [levelFilter, setLevelFilter] = useState<string>('all');
  const [roomFilter, setRoomFilter] = useState<string>('all');

  const filteredProducts = useMemo(() => {
    return TOP_20_PRODUCTS.filter((p) => {
      if (levelFilter !== 'all' && p.level !== levelFilter) return false;
      if (roomFilter !== 'all' && p.roomZone && !p.roomZone.toLowerCase().includes(roomFilter.toLowerCase())) return false;
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        const matchTitle = p.title.toLowerCase().includes(q);
        const matchProblem = p.targetProblem.toLowerCase().includes(q);
        const matchCat = p.blogCategory.toLowerCase().includes(q);
        const matchHacks = p.secretHacks?.some(h => h.toLowerCase().includes(q));
        return matchTitle || matchProblem || matchCat || matchHacks;
      }
      return true;
    });
  }, [levelFilter, roomFilter, searchQuery]);

  return (
    <div className="space-y-8 pb-12">
      {/* Header & Mode Switcher */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#1A1A1A] pb-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-[#4A533E] text-white text-[9px] font-bold uppercase tracking-[0.2em] mb-1.5">
            <Sparkles className="w-3 h-3" />
            <span>Tactical Action Kits Catalog</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif text-[#1A1A1A] font-bold">
            12 High-Value Tactical Action Kits & Renter Hacks
          </h2>
          <p className="text-xs sm:text-sm text-[#1A1A1A]/70 mt-0.5 font-serif italic">
            Engineered exclusively for urban renters and spaces under 800 sq ft. Each kit delivers zero-damage hardware formulas, multi-page vector field playbooks, pocket cheat cards, and automated dimension calculators.
          </p>
        </div>
      </div>

      {/* Critical Filter & Search Bar */}
      <div className="bg-white p-4 border border-[#1A1A1A] shadow-[2px_2px_0_0_#1A1A1A] flex flex-col sm:flex-row gap-3 items-center justify-between">
        {/* Search */}
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#1A1A1A]/40" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search kits, hacks, wall tricks, tools..."
            className="w-full pl-9 pr-3 py-2 text-xs border border-[#1A1A1A]/30 focus:outline-none focus:border-[#1A1A1A] bg-[#FAF9F6] text-[#1A1A1A]"
          />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
          {/* Room Zone Filter */}
          <select
            value={roomFilter}
            onChange={(e) => setRoomFilter(e.target.value)}
            className="text-xs px-2.5 py-2 border border-[#1A1A1A]/30 bg-[#FAF9F6] text-[#1A1A1A] font-medium focus:outline-none cursor-pointer"
          >
            <option value="all">All Room Zones</option>
            <option value="universal">Universal / Whole Apartment</option>
            <option value="kitchen">Kitchen & Galley</option>
            <option value="closet">Closet & Bedroom</option>
            <option value="living">Living & Studio</option>
            <option value="entryway">Entryway & Hallway</option>
            <option value="bathroom">Bathroom & Shower</option>
            <option value="balcony">Balcony & Patio</option>
          </select>

          {/* Level Filter */}
          <select
            value={levelFilter}
            onChange={(e) => setLevelFilter(e.target.value)}
            className="text-xs px-2.5 py-2 border border-[#1A1A1A]/30 bg-[#FAF9F6] text-[#1A1A1A] font-medium focus:outline-none cursor-pointer"
          >
            <option value="all">All Tiers ($19–$79 CAD)</option>
            <option value="quick-win">Action Kits ($19–$24 CAD)</option>
            <option value="premium">Premium Action Kits ($27–$34 CAD)</option>
            <option value="flagship">Master Vault ($79 CAD)</option>
          </select>
        </div>
      </div>

      {/* Critical Strategy Note if in Top 10 View */}
      {viewMode === 'top10' && (
        <div className="bg-[#1A1A1A] text-[#FAF9F6] p-4 sm:p-5 border border-[#1A1A1A] shadow-[3px_3px_0_0_#5A5A40] flex items-start gap-3.5">
          <div className="w-8 h-8 bg-white/10 border border-white/20 flex items-center justify-center text-[#EAE8DF] shrink-0">
            <CheckCircle2 className="w-4 h-4" />
          </div>
          <div className="space-y-1">
            <h4 className="text-sm font-serif font-bold text-white">
              Why These 10 Deserve Immediate Production Over The Rest:
            </h4>
            <p className="text-xs text-[#FAF9F6]/80 leading-relaxed font-sans">
              These 10 products directly anchor your top-performing blog categories, eliminate high-risk furniture mistakes, and convert urgent tenant relocation anxiety. Each product integrates directly into Fourthwall and cross-sells naturally into our signature Flagship Operating System.
            </p>
          </div>
        </div>
      )}

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {filteredProducts.map((product) => {
          const isFlagship = product.level === 'flagship';
          return (
            <div
              key={product.id}
              onClick={() => setSelectedProduct(product)}
              className={`group bg-white border p-5 sm:p-6 shadow-[2px_2px_0_0_#1A1A1A] hover:shadow-[4px_4px_0_0_#5A5A40] transition-all cursor-pointer relative flex flex-col justify-between ${
                isFlagship
                  ? 'border-[#5A5A40] bg-[#FAF9F6] ring-1 ring-[#5A5A40]'
                  : 'border-[#1A1A1A]'
              }`}
            >
              <div className="space-y-3">
                {/* Card Header Badge Row */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 bg-[#1A1A1A] text-[#FAF9F6] text-xs font-serif font-bold flex items-center justify-center border border-[#1A1A1A]">
                      #{product.rank}
                    </span>
                    <span
                      className={`text-[9px] font-bold uppercase tracking-[0.2em] px-2.5 py-0.5 border ${
                        product.level === 'flagship'
                          ? 'bg-[#5A5A40] text-white border-[#5A5A40]'
                          : product.level === 'premium'
                          ? 'bg-[#F2F1EC] text-[#5A5A40] border-[#5A5A40]/30'
                          : 'bg-white text-[#1A1A1A] border-[#1A1A1A]/30'
                      }`}
                    >
                      {product.level === 'flagship' ? 'Flagship' : product.level === 'premium' ? 'Premium' : 'Quick Win'}
                    </span>
                  </div>

                  <div className="flex items-center gap-1 text-xs font-bold text-[#1A1A1A] bg-[#FAF9F6] px-2 py-0.5 border border-[#1A1A1A]/20">
                    <BarChart2 className="w-3.5 h-3.5 text-[#5A5A40]" />
                    <span>{product.scores.totalScore}/140</span>
                  </div>
                </div>

                {/* Title & Tagline */}
                <div>
                  <h3 className="font-serif font-bold text-lg text-[#1A1A1A] group-hover:text-[#4A533E] transition-colors leading-snug">
                    {product.title}
                  </h3>
                  <p className="text-xs text-[#1A1A1A]/70 italic font-serif mt-0.5">{product.tagline}</p>
                </div>

                {/* Secret Hacks Mini Pill Deck */}
                {product.secretHacks && product.secretHacks.length > 0 && (
                  <div className="space-y-1.5 bg-[#FAF8F5] p-2.5 border border-[#E5DFD5]">
                    <span className="text-[9px] font-bold uppercase tracking-wider text-[#4A533E] block">
                      ⚡ Key Secret Hacks & Tricks Inside:
                    </span>
                    <div className="space-y-1">
                      {product.secretHacks.slice(0, 2).map((hack, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-1.5 text-[11px] text-[#1C1917]/90">
                          <span className="text-[#4A533E] font-bold font-mono text-[9px] mt-0.5">•</span>
                          <span className="line-clamp-1">{hack}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Problem Box */}
                <div className="bg-[#FAF8F5] p-3 border border-[#1A1A1A]/10 text-xs text-[#1C1917]/80 space-y-1">
                  <span className="font-bold text-[#4A533E] block text-[9px] uppercase tracking-[0.15em]">Problem Solved:</span>
                  <p className="line-clamp-2 leading-relaxed">{product.targetProblem}</p>
                </div>

                {/* Value Proposition */}
                <div className="text-xs text-[#1C1917] space-y-1">
                  <span className="font-bold text-[#4A533E] block text-[9px] uppercase tracking-[0.15em]">Core Transformation:</span>
                  <p className="line-clamp-2 leading-relaxed font-serif italic text-xs text-[#1C1917]/90">{product.valueProposition}</p>
                </div>
              </div>

              {/* Card Footer Info */}
              <div className="pt-4 mt-4 border-t border-[#1A1A1A]/15 flex items-center justify-between text-xs">
                <div>
                  <span className="text-[9px] text-[#4A533E] uppercase font-bold tracking-wider block">Price</span>
                  <span className="font-bold text-[#1C1917] font-serif text-base">${product.recommendedPrice} CAD</span>
                </div>

                <div className="text-right">
                  <span className="text-[9px] text-[#4A533E] uppercase font-bold tracking-wider block">Safety Rating</span>
                  <span className="font-bold text-[#4A533E] text-[10px] uppercase truncate max-w-[140px] block">{product.renterSafetyRating || '100% Renter Safe'}</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      if (onSelectProductStudio) {
                        onSelectProductStudio(product.id);
                      } else {
                        setSelectedProduct(product);
                      }
                    }}
                    className="px-2.5 py-1 bg-[#1C1917] hover:bg-[#4A533E] text-white text-[10px] font-bold uppercase tracking-wider transition-colors cursor-pointer border border-[#1C1917] flex items-center gap-1 shadow-xs"
                  >
                    <ShoppingBag className="w-3 h-3" />
                    <span>Store Kit</span>
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProduct(product);
                    }}
                    className="flex items-center gap-0.5 text-xs font-bold text-[#1C1917] hover:text-[#4A533E] cursor-pointer uppercase tracking-wider text-[10px]"
                  >
                    <span>Inspect</span>
                    <ChevronRight className="w-3.5 h-3.5 text-[#4A533E]" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Flagship Callout Banner */}
      <div className="bg-[#1A1A1A] text-[#FAF9F6] p-6 sm:p-8 border border-[#1A1A1A] shadow-[4px_4px_0_0_#5A5A40] flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-2 max-w-xl text-center sm:text-left">
          <span className="inline-block text-[9px] font-bold uppercase tracking-[0.2em] text-[#FAF9F6] bg-[#5A5A40] px-3 py-1 border border-[#5A5A40]">
            Brand Signature Asset
          </span>
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
            The Small Space Operating System (SS-OS)
          </h3>
          <p className="text-xs sm:text-sm text-[#FAF9F6]/80 leading-relaxed font-serif italic">
            Ready to inspect the full 6-module architecture, clearance Google Sheet, Notion 2.0 connected hub, and 120-page editorial PDF guide?
          </p>
        </div>
        <button
          onClick={onSelectFlagship}
          className="px-6 py-3 bg-[#5A5A40] hover:bg-[#484833] text-white font-bold text-xs uppercase tracking-wider shadow-[2px_2px_0_0_#FAF9F6] transition-all whitespace-nowrap cursor-pointer border border-white/20"
        >
          View Full Flagship Blueprint
        </button>
      </div>

      {/* Product Detail Inspector Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onLaunchStudio={onSelectProductStudio}
      />
    </div>
  );
};
