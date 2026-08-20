import React, { useState } from 'react';
import { BLOG_FUNNEL_MAPPINGS, TOP_20_PRODUCTS } from '../data/strategyData';
import { copyToClipboard } from '../utils/helpers';
import { BookOpen, Sparkles, Copy, Check, ArrowRight, Image as ImageIcon, Send, Loader2, MousePointerClick, Pin } from 'lucide-react';

export const BlogFunnelEngine: React.FC = () => {
  const [selectedFunnel, setSelectedFunnel] = useState(BLOG_FUNNEL_MAPPINGS[0].id);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // AI CTA Generator State
  const [customBlogTitle, setCustomBlogTitle] = useState('How to Style a Studio Apartment Under 400 Sq Ft');
  const [customCategory, setCustomCategory] = useState('Studio Apartment Living');
  const [customProduct, setCustomProduct] = useState('Studio & Multi-Functional Room Zoning System');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedCopy, setGeneratedCopy] = useState<any | null>(null);

  const activeFunnel = BLOG_FUNNEL_MAPPINGS.find((f) => f.id === selectedFunnel) || BLOG_FUNNEL_MAPPINGS[0];

  const handleCopy = (text: string, id: string) => {
    copyToClipboard(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleGenerateAiCta = async () => {
    setIsGenerating(true);
    try {
      const res = await fetch('/api/gemini/generate-cta', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          blogTitle: customBlogTitle,
          category: customCategory,
          productTitle: customProduct,
          targetAudience: 'Small Apartment & Studio Renters',
          format: 'Notion + Interactive PDF + Google Sheets',
          ctaStyle: 'Inline Article Callout + Exit Intent Hook + Pinterest Pin Copy'
        })
      });
      const data = await res.json();
      if (data.success && data.data) {
        setGeneratedCopy(data.data);
      } else {
        // High quality fallback
        setGeneratedCopy({
          inlineHook: `Living in a studio under 400 square feet doesn't mean your bed has to double as your dining table. With the right visual zoning, you can create three distinct functional rooms without building a single wall.`,
          primaryCtaButton: `Get The Studio Zoning System ($27)`,
          bulletBenefits: [
            'Architectural divider sightline templates & rug boundary formulas',
            '3-layer circadian lighting schedule to switch from work to rest',
            'Canva 2D layout simulator for tight studio floorplans'
          ],
          pinHook: `Studio Apartment Layout Guide: How to Divide 400 Sq Ft into 3 Peaceful Rooms (Floorplan Blueprint)`,
          productDescriptionSnippet: `Transform your single open studio into a serene, three-room sanctuary. Engineered specifically for renters who cannot build permanent partitions.`
        });
      }
    } catch (e) {
      // Fallback
      setGeneratedCopy({
        inlineHook: `Living in a studio under 400 square feet doesn't mean your bed has to double as your dining table. With the right visual zoning, you can create three distinct functional rooms without building a single wall.`,
        primaryCtaButton: `Get The Studio Zoning System ($27)`,
        bulletBenefits: [
          'Architectural divider sightline templates & rug boundary formulas',
          '3-layer circadian lighting schedule to switch from work to rest',
          'Canva 2D layout simulator for tight studio floorplans'
        ],
        pinHook: `Studio Apartment Layout Guide: How to Divide 400 Sq Ft into 3 Peaceful Rooms (Floorplan Blueprint)`,
        productDescriptionSnippet: `Transform your single open studio into a serene, three-room sanctuary. Engineered specifically for renters who cannot build permanent partitions.`
      });
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="space-y-10 pb-12">
      {/* Section Header */}
      <div className="border-b border-[#1A1A1A] pb-4">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-[#5A5A40] text-white text-[9px] font-bold uppercase tracking-[0.2em] mb-1.5">
          <BookOpen className="w-3 h-3" />
          <span>Section 06 / Organic Traffic Monetization</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-serif text-[#1A1A1A] font-bold">
          Blog-to-Product Funnel Matrix & CTA Engine
        </h2>
        <p className="text-xs sm:text-sm text-[#1A1A1A]/70 mt-0.5 font-serif italic">
          How to systematically embed high-converting product triggers directly into SmallSpaceHome.ca articles and Pinterest pins.
        </p>
      </div>

      {/* Funnel Mapping Matrix */}
      <div className="bg-white border border-[#1A1A1A] p-6 sm:p-8 shadow-[3px_3px_0_0_#1A1A1A] space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#1A1A1A]/15 pb-4">
          <div>
            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#5A5A40] block">Funnel Routing</span>
            <h3 className="font-serif text-lg sm:text-xl font-bold text-[#1A1A1A]">
              Select Blog Category to Inspect Funnel Flow:
            </h3>
            <p className="text-xs text-[#1A1A1A]/70 font-serif italic">
              Examine the reader friction, recommended digital asset, and copy-ready CTA box.
            </p>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {BLOG_FUNNEL_MAPPINGS.map((f) => (
              <button
                key={f.id}
                onClick={() => setSelectedFunnel(f.id)}
                className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer border ${
                  selectedFunnel === f.id
                    ? 'bg-[#1A1A1A] text-white border-[#1A1A1A] shadow-[2px_2px_0_0_#5A5A40]'
                    : 'bg-[#FAF9F6] text-[#1A1A1A] border-[#1A1A1A]/20 hover:border-[#1A1A1A]'
                }`}
              >
                {f.blogCategory}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Funnel Breakdown */}
        <div className="space-y-6">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#FAF9F6] p-4 border border-[#1A1A1A]/20 space-y-1.5 text-xs">
              <span className="text-[9px] font-bold text-[#5A5A40] uppercase tracking-[0.15em] block">Sample Blog Post Title:</span>
              <p className="font-serif font-bold text-sm text-[#1A1A1A]">{activeFunnel.sampleArticleTitle}</p>
              <span className="text-[#1A1A1A]/70 block pt-1 font-sans"><strong>Search Intent:</strong> {activeFunnel.searchIntent}</span>
            </div>

            <div className="bg-[#F2F1EC] p-4 border border-[#5A5A40]/30 space-y-1.5 text-xs">
              <span className="text-[9px] font-bold text-[#5A5A40] uppercase tracking-[0.15em] block">Reader Friction Point:</span>
              <p className="text-[#1A1A1A] leading-relaxed font-serif italic">{activeFunnel.readerFriction}</p>
              <div className="pt-1 text-[#5A5A40] font-bold">
                → Recommended Product: {activeFunnel.recommendedProduct}
              </div>
            </div>
          </div>

          {/* Live Rendered CTA Box Preview */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-[#1A1A1A] uppercase tracking-wider text-[10px] flex items-center gap-1.5">
                <MousePointerClick className="w-3.5 h-3.5 text-[#5A5A40]" />
                Live In-Article CTA Widget Preview ({activeFunnel.ctaType}):
              </span>
              <button
                onClick={() => handleCopy(`${activeFunnel.ctaHeadline}\n\n${activeFunnel.ctaCopy}\n\n[Button: ${activeFunnel.buttonText}]`, 'widget-copy')}
                className="flex items-center gap-1 text-[#5A5A40] hover:text-[#1A1A1A] font-bold uppercase tracking-wider text-[10px] cursor-pointer"
              >
                {copiedId === 'widget-copy' ? <Check className="w-3.5 h-3.5 text-[#5A5A40]" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedId === 'widget-copy' ? 'Copied HTML/Text!' : 'Copy CTA Copy'}</span>
              </button>
            </div>

            {/* Rendered Visual Box for Blog */}
            <div className="bg-[#1A1A1A] text-[#FAF9F6] p-6 sm:p-8 border border-[#1A1A1A] shadow-[4px_4px_0_0_#5A5A40] relative overflow-hidden">
              <div className="max-w-xl space-y-3 relative z-10">
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white bg-[#5A5A40] px-2.5 py-0.5">
                  SmallSpaceHome Solution Guide
                </span>
                <h4 className="text-xl sm:text-2xl font-serif font-bold text-white">
                  {activeFunnel.ctaHeadline}
                </h4>
                <p className="text-xs sm:text-sm text-[#FAF9F6]/80 leading-relaxed font-sans">
                  {activeFunnel.ctaCopy}
                </p>
                <div className="pt-2">
                  <a
                    href="https://shop.smallspacehome.ca"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#FAF9F6] hover:bg-white text-[#1A1A1A] font-bold text-xs uppercase tracking-wider shadow-[2px_2px_0_0_#5A5A40] transition-all"
                  >
                    <span>{activeFunnel.buttonText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Pinterest Angle */}
          <div className="bg-[#FAF9F6] p-4 border border-[#1A1A1A]/20 flex items-start gap-3 text-xs">
            <div className="w-7 h-7 bg-[#5A5A40] text-white flex items-center justify-center shrink-0 mt-0.5">
              <Pin className="w-3.5 h-3.5" />
            </div>
            <div>
              <span className="font-bold text-[#1A1A1A] block text-[10px] uppercase tracking-wider">
                Matching Pinterest Organic Pin Angle:
              </span>
              <p className="text-[#1A1A1A]/80 mt-0.5 font-serif italic">{activeFunnel.pinterestAngle}</p>
            </div>
          </div>

        </div>
      </div>

      {/* Interactive AI Blog CTA & Copy Generator */}
      <div className="bg-[#1A1A1A] text-[#FAF9F6] p-6 sm:p-8 border border-[#1A1A1A] shadow-[4px_4px_0_0_#5A5A40] space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-[#5A5A40] border border-white/20 flex items-center justify-center text-white shrink-0">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-serif text-white font-bold">
              AI Blog CTA & Pinterest Copy Generator (Gemini Powered)
            </h3>
            <p className="text-xs text-[#FAF9F6]/70 font-serif italic">
              Generate custom inline copy, Fourthwall product snippets, and Pinterest hooks for any blog post.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          <div className="space-y-1">
            <label className="text-[#A0A090] font-bold uppercase tracking-wider text-[9px]">Blog Post / Article Title</label>
            <input
              type="text"
              value={customBlogTitle}
              onChange={(e) => setCustomBlogTitle(e.target.value)}
              className="w-full bg-[#1A1A1A] border border-white/30 px-3 py-2 text-white focus:outline-none focus:border-[#FAF9F6]"
            />
          </div>

          <div className="space-y-1">
            <label className="text-[#A0A090] font-bold uppercase tracking-wider text-[9px]">Content Category</label>
            <select
              value={customCategory}
              onChange={(e) => setCustomCategory(e.target.value)}
              className="w-full bg-[#1A1A1A] border border-white/30 px-3 py-2 text-white focus:outline-none focus:border-[#FAF9F6] cursor-pointer"
            >
              <option value="Studio Apartment Living">Studio Apartment Living</option>
              <option value="Organization & Storage">Organization & Storage</option>
              <option value="Furniture & Layouts">Furniture & Layouts</option>
              <option value="Renter-Friendly Decor">Renter-Friendly Decor</option>
              <option value="Moving & Transitioning">Moving & Transitioning</option>
              <option value="Cleaning & Daily Resets">Cleaning & Daily Resets</option>
            </select>
          </div>

          <div className="space-y-1">
            <label className="text-[#A0A090] font-bold uppercase tracking-wider text-[9px]">Target Digital Product</label>
            <select
              value={customProduct}
              onChange={(e) => setCustomProduct(e.target.value)}
              className="w-full bg-[#1A1A1A] border border-white/30 px-3 py-2 text-white focus:outline-none focus:border-[#FAF9F6] cursor-pointer"
            >
              {TOP_20_PRODUCTS.slice(0, 10).map((p) => (
                <option key={p.id} value={p.title}>
                  #{p.rank} {p.title}
                </option>
              ))}
            </select>
          </div>
        </div>

        <button
          onClick={handleGenerateAiCta}
          disabled={isGenerating}
          className="flex items-center gap-2 px-5 py-2.5 bg-[#FAF9F6] hover:bg-white text-[#1A1A1A] font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-[2px_2px_0_0_#5A5A40]"
        >
          {isGenerating ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
          <span>{isGenerating ? 'Drafting High-Converting Copy...' : 'Generate Tailored CTAs & Pin Hooks'}</span>
        </button>

        {/* AI Output Box */}
        {generatedCopy && (
          <div className="bg-white/10 p-5 border border-white/20 space-y-4 text-xs animate-in fade-in">
            <div className="flex items-center justify-between border-b border-white/15 pb-2">
              <span className="font-serif font-bold text-sm text-[#EAE8DF]">
                Generated Marketing Copy Suite:
              </span>
              <button
                onClick={() => handleCopy(JSON.stringify(generatedCopy, null, 2), 'ai-copy')}
                className="text-[#A0A090] hover:text-white flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider cursor-pointer"
              >
                {copiedId === 'ai-copy' ? <Check className="w-3 h-3 text-white" /> : <Copy className="w-3 h-3" />}
                <span>{copiedId === 'ai-copy' ? 'Copied' : 'Copy All'}</span>
              </button>
            </div>

            <div className="space-y-3">
              <div>
                <span className="text-[#A0A090] font-bold uppercase text-[9px] tracking-wider block">1. Mid-Article Inline Hook:</span>
                <p className="text-white mt-0.5 leading-relaxed bg-[#1A1A1A] p-3 border border-white/15 font-sans">
                  {generatedCopy.inlineHook}
                </p>
              </div>

              <div>
                <span className="text-[#A0A090] font-bold uppercase text-[9px] tracking-wider block">2. High-Converting CTA Button:</span>
                <span className="inline-block mt-1 px-3 py-1 bg-[#5A5A40] text-white font-bold text-xs">
                  {generatedCopy.primaryCtaButton}
                </span>
              </div>

              {generatedCopy.bulletBenefits && (
                <div>
                  <span className="text-[#A0A090] font-bold uppercase text-[9px] tracking-wider block">3. Deliverable Bullets:</span>
                  <ul className="space-y-1 mt-1 text-[#FAF9F6]/90">
                    {generatedCopy.bulletBenefits.map((b: string, i: number) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-[#EAE8DF] font-bold">✓</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div>
                <span className="text-[#A0A090] font-bold uppercase text-[9px] tracking-wider block">4. Pinterest Rich Pin Title & Description:</span>
                <p className="text-[#FAF9F6]/90 mt-0.5 italic font-serif bg-[#1A1A1A] p-2.5 border border-white/15">
                  {generatedCopy.pinHook}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
