import React from 'react';
import { DigitalProduct } from '../types';
import { X, CheckCircle, Sparkles, Layers, BookOpen, ShoppingBag, BarChart3, HelpCircle, FileText } from 'lucide-react';

interface ProductDetailModalProps {
  product: DigitalProduct | null;
  onClose: () => void;
  onLaunchStudio?: (productId: string) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ product, onClose, onLaunchStudio }) => {
  if (!product) return null;

  const scoreCriteria = [
    { label: 'Problem Severity', val: product.scores.problemSeverity },
    { label: 'Search / Content Alignment', val: product.scores.searchAlignment },
    { label: 'Audience Relevance', val: product.scores.audienceRelevance },
    { label: 'Product Usefulness', val: product.scores.productUsefulness },
    { label: 'Perceived Value', val: product.scores.perceivedValue },
    { label: 'Differentiation', val: product.scores.differentiation },
    { label: 'Visual Potential', val: product.scores.visualPotential },
    { label: 'Ease of Production', val: product.scores.easeOfProduction },
    { label: 'Bundle Potential', val: product.scores.bundlePotential },
    { label: 'Upsell Potential', val: product.scores.upsellPotential },
    { label: 'Evergreen Potential', val: product.scores.evergreenPotential },
    { label: 'Blog Promotion Fit', val: product.scores.blogPromotionFit },
    { label: 'Pinterest Potential', val: product.scores.pinterestPotential },
    { label: 'Flagship Potential', val: product.scores.flagshipPotential },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1A1A1A]/80 backdrop-blur-xs overflow-y-auto">
      <div className="bg-[#FAF9F6] border-2 border-[#1A1A1A] shadow-[6px_6px_0_0_#1A1A1A] max-w-3xl w-full max-h-[90vh] overflow-y-auto text-[#1A1A1A] animate-in fade-in zoom-in duration-150">
        
        {/* Header */}
        <div className="sticky top-0 bg-[#1A1A1A] text-[#FAF9F6] px-6 py-4 border-b border-[#1A1A1A] flex items-center justify-between z-10">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 bg-[#5A5A40] text-white flex items-center justify-center font-serif text-sm font-bold border border-white/20">
              #{product.rank}
            </span>
            <div>
              <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-[#A0A090] block">
                {product.level === 'flagship' ? 'Flagship Master System' : product.level === 'premium' ? 'Level 2: Premium System' : 'Level 1: Quick Win Tripwire'}
              </span>
              <h3 className="text-lg sm:text-xl font-serif font-bold text-[#FAF9F6] leading-tight">
                {product.title}
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#FAF9F6]/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer border border-white/20"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-6 text-sm">
          
          {/* Quick Stat Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-white p-4 border border-[#1A1A1A] shadow-[2px_2px_0_0_#1A1A1A]">
            <div>
              <span className="text-[9px] text-[#5A5A40] font-bold uppercase tracking-wider block">Price Range</span>
              <span className="text-[#1A1A1A] font-serif font-bold text-base">{product.priceRange}</span>
            </div>
            <div>
              <span className="text-[9px] text-[#5A5A40] font-bold uppercase tracking-wider block">Format</span>
              <span className="text-[#1A1A1A] font-semibold text-xs">{product.format}</span>
            </div>
            <div>
              <span className="text-[9px] text-[#5A5A40] font-bold uppercase tracking-wider block">Build Difficulty</span>
              <span className="text-[#1A1A1A] font-semibold text-sm">{product.difficulty}</span>
            </div>
            <div>
              <span className="text-[9px] text-[#5A5A40] font-bold uppercase tracking-wider block">Total Score</span>
              <span className="text-[#5A5A40] font-serif font-bold text-base">{product.scores.totalScore} / 140</span>
            </div>
          </div>

          {/* Problem & Value Prop */}
          <div className="space-y-4">
            <div>
              <h4 className="font-serif font-bold text-[#1A1A1A] text-base flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-[#5A5A40]" />
                Target Problem Solved
              </h4>
              <p className="text-[#1A1A1A]/80 mt-1 leading-relaxed bg-white p-3.5 border border-[#1A1A1A]/20 font-sans">
                {product.targetProblem}
              </p>
            </div>

            <div>
              <h4 className="font-serif font-bold text-[#1A1A1A] text-base flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#5A5A40]" />
                Core Value Proposition
              </h4>
              <p className="text-[#1A1A1A] mt-1 leading-relaxed bg-[#F2F1EC] p-3.5 border border-[#5A5A40]/40 font-serif italic text-sm">
                "{product.valueProposition}"
              </p>
            </div>

            <div>
              <h4 className="font-serif font-bold text-[#1A1A1A] text-base flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#5A5A40]" />
                Differentiation & "Anti-Generic" Factor
              </h4>
              <p className="text-[#1A1A1A]/80 mt-1 leading-relaxed bg-white p-3.5 border border-[#1A1A1A]/20">
                {product.differentiation}
              </p>
            </div>
          </div>

          {/* Deliverables & Modules */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="bg-white p-4 border border-[#1A1A1A] shadow-[2px_2px_0_0_#1A1A1A] space-y-2">
              <h5 className="font-serif font-bold text-[#1A1A1A] text-sm flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#5A5A40]" />
                Exact Deliverables & Files
              </h5>
              <ul className="space-y-2 text-xs text-[#1A1A1A]/80">
                {product.deliverables.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-[#5A5A40] mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-4 border border-[#1A1A1A] shadow-[2px_2px_0_0_#1A1A1A] space-y-2">
              <h5 className="font-serif font-bold text-[#1A1A1A] text-sm flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#5A5A40]" />
                Key System Modules
              </h5>
              <ul className="space-y-2 text-xs text-[#1A1A1A]/80">
                {product.keyModules.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[#5A5A40] mt-1.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Why Build Justification */}
          <div className="bg-[#1A1A1A] text-[#FAF9F6] p-4 border border-[#1A1A1A] shadow-[3px_3px_0_0_#5A5A40] space-y-1.5">
            <span className="text-[9px] uppercase tracking-[0.2em] text-[#A0A090] font-bold block">Strategic Recommendation</span>
            <h5 className="font-serif text-base font-bold text-white">Why This Product Must Be Built:</h5>
            <p className="text-xs text-[#FAF9F6]/80 leading-relaxed font-serif italic">
              {product.whyBuild}
            </p>
          </div>

          {/* 14-Point Scoring Grid */}
          <div className="space-y-3 pt-2">
            <h4 className="font-serif font-bold text-[#1A1A1A] text-sm flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-[#5A5A40]" />
              14-Criteria Prioritization Rubric Breakdown
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 text-xs">
              {scoreCriteria.map((c, idx) => (
                <div key={idx} className="bg-white border border-[#1A1A1A]/20 p-2.5">
                  <span className="text-[10px] text-[#5A5A40] font-bold uppercase tracking-wider block truncate">{c.label}</span>
                  <div className="flex items-center justify-between mt-1">
                    <span className="font-serif font-bold text-[#1A1A1A]">{c.val} / 10</span>
                    <div className="w-12 bg-[#F2F1EC] h-1.5 overflow-hidden border border-[#1A1A1A]/15">
                      <div
                        className="bg-[#5A5A40] h-1.5"
                        style={{ width: `${(c.val / 10) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Blog & Store Connection */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-[#F2F1EC] p-4 border border-[#1A1A1A]/20 text-xs text-[#1A1A1A]">
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#5A5A40]" />
              <span><strong>Primary Blog Cluster:</strong> {product.blogCategory}</span>
            </div>
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-4 h-4 text-[#5A5A40]" />
              <span><strong>Fourthwall Collection:</strong> {product.fourthwallCategory}</span>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="bg-[#FAF9F6] px-6 py-3 border-t border-[#1A1A1A] flex flex-wrap items-center justify-between gap-3">
          {onLaunchStudio ? (
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  onClose();
                  onLaunchStudio(product.id);
                }}
                className="px-4 py-2 bg-[#1A1A1A] hover:bg-[#5A5A40] text-white text-xs font-bold uppercase tracking-wider transition-all cursor-pointer border border-[#1A1A1A] shadow-[2px_2px_0_0_#5A5A40] flex items-center gap-1.5"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Open Store Posting Kit</span>
              </button>
              <button
                onClick={() => {
                  onClose();
                  onLaunchStudio(product.id);
                }}
                className="px-3 py-2 bg-white hover:bg-[#FAF9F6] text-[#1A1A1A] text-xs font-bold uppercase tracking-wider transition-all cursor-pointer border border-[#1A1A1A] flex items-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#5A5A40]" />
                <span>Live Simulator</span>
              </button>
            </div>
          ) : (
            <div />
          )}
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#FAF9F6] hover:bg-[#1A1A1A] hover:text-white text-[#1A1A1A] text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer border border-[#1A1A1A]"
          >
            Close Inspector
          </button>
        </div>

      </div>
    </div>
  );
};
