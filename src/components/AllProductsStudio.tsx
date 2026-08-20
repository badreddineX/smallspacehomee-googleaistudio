import React, { useState } from 'react';
import { TOP_20_PRODUCTS } from '../data/strategyData';
import { INTERACTIVE_PRODUCTS_MAP, InteractiveProductData } from '../data/productInteractiveData';
import { FirstProductExperience } from './FirstProductExperience';
import { 
  Sparkles, 
  Layers, 
  Grid, 
  Calculator, 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  Copy, 
  Printer, 
  Check, 
  Search, 
  ArrowRight, 
  Star, 
  Sliders, 
  FileText, 
  Download,
  DollarSign,
  Compass,
  Box,
  Home,
  Sun,
  Award,
  AlertCircle,
  Tag,
  ShoppingBag,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Mail,
  HelpCircle,
  Share2,
  Terminal,
  Code
} from 'lucide-react';

interface AllProductsStudioProps {
  initialProductId?: string;
}

export const AllProductsStudio: React.FC<AllProductsStudioProps> = ({ initialProductId = 'flagship-ss-os' }) => {
  const [selectedProductId, setSelectedProductId] = useState<string>(initialProductId);
  const [activeTab, setActiveTab] = useState<'store-post' | 'interactive-tool' | 'notion-schema' | 'printable-sheet'>('store-post');
  const [storeTab, setStoreTab] = useState<'description' | 'files' | 'email' | 'seo' | 'faq'>('description');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterLevel, setFilterLevel] = useState<string>('all');
  const [copyState, setCopyState] = useState<string | null>(null);

  // Custom tool states for Product 2 (Furniture Clearance)
  const [corridorWidthFt, setCorridorWidthFt] = useState<number>(10);
  const [sofaDepthIn, setSofaDepthIn] = useState<number>(34);
  const [coffeeTableDepthIn, setCoffeeTableDepthIn] = useState<number>(20);
  const [diningChairPulloutIn, setDiningChairPulloutIn] = useState<number>(32);

  // Custom tool states for Product 5 (Rent Tax Calculator)
  const [monthlyRent, setMonthlyRent] = useState<number>(2100);
  const [apartmentSqFt, setApartmentSqFt] = useState<number>(550);
  const [clutterSqFt, setClutterSqFt] = useState<number>(15);

  // Custom tool states for Product 8 (First Apartment Budget)
  const [budgetTier, setBudgetTier] = useState<'minimalist' | 'comfort' | 'sanctuary'>('comfort');
  const [customTotalBudget, setCustomTotalBudget] = useState<number>(2400);

  // Custom tool states for Product 10 (Landlord Email Generator)
  const [landlordSubjectType, setLandlordSubjectType] = useState<string>('heating');
  const [tenantUnitNum, setTenantUnitNum] = useState<string>('4B');
  const [tenantName, setTenantName] = useState<string>('Alex Johnson');

  // Custom tool states for Product 18 (Circadian Lighting)
  const [roomAreaSqFt, setRoomAreaSqFt] = useState<number>(220);
  const [selectedRoomType, setSelectedRoomType] = useState<'living' | 'kitchen' | 'bedroom'>('living');

  // Active product details
  const activeProduct = TOP_20_PRODUCTS.find(p => p.id === selectedProductId) || TOP_20_PRODUCTS[0];
  const interactiveData: InteractiveProductData = INTERACTIVE_PRODUCTS_MAP[selectedProductId] || INTERACTIVE_PRODUCTS_MAP['flagship-ss-os'];

  const currentIndex = TOP_20_PRODUCTS.findIndex(p => p.id === selectedProductId);
  const prevProduct = currentIndex > 0 ? TOP_20_PRODUCTS[currentIndex - 1] : null;
  const nextProduct = currentIndex < TOP_20_PRODUCTS.length - 1 ? TOP_20_PRODUCTS[currentIndex + 1] : null;

  const filteredProducts = TOP_20_PRODUCTS.filter(p => {
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.targetProblem.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.blogCategory.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLevel = filterLevel === 'all' || p.level === filterLevel;
    return matchesSearch && matchesLevel;
  });

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopyState(key);
    setTimeout(() => setCopyState(null), 2200);
  };

  const generateFullStoreListingCopy = () => {
    return `# ${interactiveData.title}
**Price:** $${interactiveData.priceCAD} CAD / $${interactiveData.priceUSD} USD (Compare at $${interactiveData.compareAtPriceCAD} CAD)
**Category:** ${interactiveData.fourthwallCollection}
**Format:** ${interactiveData.format}

---

## Short Summary
${interactiveData.storeShortDescription}

---

${interactiveData.storeFullListingMarkdown}

---

## Deliverable Files Included in Instant Download:
${interactiveData.deliverableFiles.map((f, i) => `${i + 1}. **${f.name}** (${f.format}, ${f.size}) - ${f.description}`).join('\n')}

---

## Frequently Asked Questions:
${interactiveData.storeFaq.map(faq => `**Q: ${faq.question}**\nA: ${faq.answer}`).join('\n\n')}

---

## SEO Meta:
- **Title:** ${interactiveData.seoMeta.metaTitle}
- **Description:** ${interactiveData.seoMeta.metaDescription}
- **Keywords:** ${interactiveData.seoMeta.keywords.join(', ')}
- **URL Handle:** ${interactiveData.storeSlug}
`;
  };

  // Calculations for rent tax
  const rentPerSqFtYear = apartmentSqFt > 0 ? (monthlyRent * 12) / apartmentSqFt : 0;
  const annualRentTax = rentPerSqFtYear * clutterSqFt;

  // Calculations for furniture clearance
  const sofaCorridorLeftoverIn = (corridorWidthFt * 12) - (sofaDepthIn + coffeeTableDepthIn);
  const isClearanceSafe = sofaCorridorLeftoverIn >= 36;

  // Lumens formula calculation
  const getLumensRequired = () => {
    if (selectedRoomType === 'kitchen') return roomAreaSqFt * 40;
    if (selectedRoomType === 'bedroom') return roomAreaSqFt * 15;
    return roomAreaSqFt * 20; // living room
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      
      {/* Section Header */}
      <div className="bg-[#FAF9F6] border-2 border-[#1A1A1A] p-6 sm:p-8 shadow-[4px_4px_0_0_#1A1A1A]">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 bg-[#5A5A40]" />
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#5A5A40]">
                Single Product Store Posting Kit & Interactive Suite
              </span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-serif font-black text-[#1A1A1A] tracking-tight">
              Individual Store-Ready Products (1–20)
            </h1>
            <p className="mt-2 text-sm sm:text-base text-[#1A1A1A]/80 max-w-3xl leading-relaxed">
              Every single product in the SmallSpaceHome catalog is fully isolated below as a ready-to-post store listing pack with high-converting copy, pricing in CAD & USD, file delivery packages, customer onboarding emails, and live interactive simulators.
            </p>
          </div>

          {/* Quick Stats Banner */}
          <div className="flex items-center gap-3 bg-white p-3.5 border border-[#1A1A1A] shadow-[2px_2px_0_0_#1A1A1A] shrink-0">
            <div className="text-center px-3 border-r border-[#1A1A1A]/20">
              <span className="text-[10px] text-[#5A5A40] uppercase font-bold tracking-wider block">Total Catalog</span>
              <span className="font-serif font-black text-xl text-[#1A1A1A]">20 Products</span>
            </div>
            <div className="text-center px-3 border-r border-[#1A1A1A]/20">
              <span className="text-[10px] text-[#5A5A40] uppercase font-bold tracking-wider block">Active Product</span>
              <span className="font-serif font-black text-xl text-[#5A5A40]">#{activeProduct.rank}</span>
            </div>
            <div className="text-center px-3">
              <span className="text-[10px] text-[#5A5A40] uppercase font-bold tracking-wider block">Store Status</span>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700">
                <CheckCircle2 className="w-3.5 h-3.5" /> Ready to Post
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Studio Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Product Selector & Filter (4 cols) */}
        <div className="lg:col-span-4 space-y-4">
          
          {/* Search & Filter Bar */}
          <div className="bg-white p-4 border-2 border-[#1A1A1A] shadow-[3px_3px_0_0_#1A1A1A] space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1A1A1A] flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-[#5A5A40]" />
                <span>Select Product to Post / Test</span>
              </span>
              <span className="text-[10px] font-bold bg-[#FAF9F6] px-2 py-0.5 border border-[#1A1A1A]/30">
                {filteredProducts.length} Available
              </span>
            </div>

            {/* Search Input */}
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#1A1A1A]/50" />
              <input 
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products, problems, formats..."
                className="w-full bg-[#FAF9F6] border border-[#1A1A1A] pl-9 pr-3 py-2 text-xs font-medium focus:outline-hidden focus:ring-1 focus:ring-[#5A5A40]"
              />
            </div>

            {/* Filter Pills */}
            <div className="flex items-center gap-1.5 flex-wrap pt-1">
              {[
                { id: 'all', label: 'All 20' },
                { id: 'flagship', label: 'Flagship' },
                { id: 'premium', label: 'Premium ($29+)' },
                { id: 'quick-win', label: 'Quick Wins ($15-24)' }
              ].map(f => (
                <button
                  key={f.id}
                  onClick={() => setFilterLevel(f.id)}
                  className={`text-[10px] font-bold px-2.5 py-1 border transition-all cursor-pointer ${
                    filterLevel === f.id
                      ? 'bg-[#1A1A1A] text-[#FAF9F6] border-[#1A1A1A]'
                      : 'bg-white text-[#1A1A1A] border-[#1A1A1A]/30 hover:border-[#1A1A1A]'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          {/* Product List Scroll Area */}
          <div className="space-y-2 max-h-[750px] overflow-y-auto pr-1">
            {filteredProducts.map((prod) => {
              const isSelected = prod.id === selectedProductId;
              return (
                <div
                  key={prod.id}
                  onClick={() => setSelectedProductId(prod.id)}
                  className={`p-3.5 border-2 transition-all cursor-pointer text-left ${
                    isSelected
                      ? 'bg-[#5A5A40] text-white border-[#1A1A1A] shadow-[4px_4px_0_0_#1A1A1A]'
                      : 'bg-white text-[#1A1A1A] border-[#1A1A1A]/40 hover:border-[#1A1A1A] hover:shadow-[2px_2px_0_0_#1A1A1A]'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className={`w-6 h-6 flex items-center justify-center font-serif text-xs font-bold border ${
                        isSelected ? 'bg-[#1A1A1A] text-white border-white/40' : 'bg-[#FAF9F6] text-[#1A1A1A] border-[#1A1A1A]/30'
                      }`}>
                        #{prod.rank}
                      </span>
                      <span className={`text-[9px] uppercase font-bold tracking-wider ${
                        isSelected ? 'text-[#FAF9F6]/80' : 'text-[#5A5A40]'
                      }`}>
                        {prod.level === 'flagship' ? 'Flagship OS' : prod.level === 'premium' ? 'Premium Kit' : 'Quick Win'}
                      </span>
                    </div>

                    <span className={`text-xs font-serif font-black ${
                      isSelected ? 'text-white' : 'text-[#1A1A1A]'
                    }`}>
                      ${prod.recommendedPrice} CAD
                    </span>
                  </div>

                  <h4 className={`text-xs sm:text-sm font-serif font-bold mt-2 leading-tight ${
                    isSelected ? 'text-white' : 'text-[#1A1A1A]'
                  }`}>
                    {prod.title}
                  </h4>

                  <p className={`text-[11px] mt-1 line-clamp-2 ${
                    isSelected ? 'text-[#FAF9F6]/90' : 'text-[#1A1A1A]/70'
                  }`}>
                    {prod.targetProblem}
                  </p>

                  <div className="flex items-center justify-between mt-2.5 pt-2 border-t border-current/20 text-[10px] font-medium">
                    <span className="truncate max-w-[170px] opacity-90">{prod.format}</span>
                    <span className="font-bold underline flex items-center gap-0.5">
                      <span>{isSelected ? 'Active' : 'Select'}</span>
                      <ChevronRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Quick Prev / Next Navigator */}
          <div className="bg-white p-3 border border-[#1A1A1A] flex items-center justify-between text-xs font-bold">
            <button
              disabled={!prevProduct}
              onClick={() => prevProduct && setSelectedProductId(prevProduct.id)}
              className="flex items-center gap-1 text-[#1A1A1A] disabled:opacity-30 hover:text-[#5A5A40] cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Prev Product</span>
            </button>
            <span className="text-[#5A5A40] font-serif">
              {activeProduct.rank} / 20
            </span>
            <button
              disabled={!nextProduct}
              onClick={() => nextProduct && setSelectedProductId(nextProduct.id)}
              className="flex items-center gap-1 text-[#1A1A1A] disabled:opacity-30 hover:text-[#5A5A40] cursor-pointer"
            >
              <span>Next Product</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right Column: Single Product View & Store Kit (8 cols) */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* Active Product Header Card */}
          <div className="bg-white border-2 border-[#1A1A1A] p-6 shadow-[5px_5px_0_0_#1A1A1A] relative">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="bg-[#1A1A1A] text-white px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider">
                    Product #{activeProduct.rank}
                  </span>
                  <span className="bg-[#5A5A40] text-white px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider">
                    {interactiveData.fourthwallCollection}
                  </span>
                  <span className="bg-emerald-100 text-emerald-900 border border-emerald-400 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider">
                    Ready for Fourthwall Store
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-serif font-black text-[#1A1A1A] pt-1">
                  {activeProduct.title}
                </h2>
                <p className="text-xs sm:text-sm text-[#1A1A1A]/80 font-medium max-w-2xl leading-relaxed">
                  {interactiveData.overviewSummary}
                </p>
              </div>

              {/* Price Tag Pill */}
              <div className="bg-[#FAF9F6] border-2 border-[#1A1A1A] p-3 text-center sm:text-right shrink-0 shadow-[2px_2px_0_0_#1A1A1A]">
                <span className="text-[10px] text-[#5A5A40] uppercase font-bold tracking-wider block">Recommended Price</span>
                <div className="flex items-baseline justify-center sm:justify-end gap-1.5">
                  <span className="font-serif font-black text-2xl text-[#1A1A1A]">${interactiveData.priceCAD} CAD</span>
                  <span className="text-xs text-[#1A1A1A]/70 font-semibold">(${interactiveData.priceUSD} USD)</span>
                </div>
                <span className="text-[10px] text-stone-500 line-through block mt-0.5">
                  Compare: ${interactiveData.compareAtPriceCAD} CAD
                </span>
              </div>
            </div>

            {/* Quick 1-Click Copy Full Listing Action Bar */}
            <div className="mt-5 pt-4 border-t border-[#1A1A1A]/20 flex flex-wrap items-center justify-between gap-3">
              <div className="text-xs text-[#1A1A1A]/80 font-medium">
                <span className="font-bold text-[#1A1A1A]">Store URL Slug:</span> <code className="bg-[#FAF9F6] px-2 py-0.5 border border-[#1A1A1A]/30 text-[11px]">{interactiveData.storeSlug}</code>
              </div>

              <button
                onClick={() => handleCopy(generateFullStoreListingCopy(), 'full-listing')}
                className="px-4 py-2 bg-[#1A1A1A] hover:bg-[#5A5A40] text-white text-xs font-bold uppercase tracking-wider transition-all cursor-pointer border border-[#1A1A1A] shadow-[2px_2px_0_0_#5A5A40] flex items-center gap-2"
              >
                {copyState === 'full-listing' ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Listing Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>1-Click Copy Complete Store Listing</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Primary View Modes Selector (Store Posting Kit vs Interactive Workspace vs Notion vs Cheatsheet) */}
          <div className="flex items-center gap-2 border-b-2 border-[#1A1A1A] pb-2 flex-wrap">
            {[
              { id: 'store-post', label: '🛍️ Store Posting Kit (Single View)', desc: 'Ready-to-paste store listing' },
              { id: 'interactive-tool', label: '⚙️ Live Interactive Tool', desc: 'Working customer simulator' },
              { id: 'notion-schema', label: '📋 Notion DB Schema', desc: 'Database properties' },
              { id: 'printable-sheet', label: '🖨️ Printable Cheatsheet', desc: 'Printable room blueprint' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2.5 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer border-2 ${
                  activeTab === tab.id
                    ? 'bg-[#1A1A1A] text-white border-[#1A1A1A] shadow-[3px_3px_0_0_#5A5A40]'
                    : 'bg-white text-[#1A1A1A] border-[#1A1A1A]/40 hover:border-[#1A1A1A]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* TAB CONTENT: 1. STORE POSTING KIT (Single Product Store Posting Mode) */}
          {activeTab === 'store-post' && (
            <div className="space-y-6">
              
              {/* Store Kit Navigation Sub-tabs */}
              <div className="bg-[#FAF9F6] p-2 border-2 border-[#1A1A1A] flex items-center gap-1.5 flex-wrap">
                {[
                  { id: 'description', label: '1. Store Description & Copy', icon: FileText },
                  { id: 'files', label: '2. Deliverable Asset Files', icon: Download },
                  { id: 'email', label: '3. Customer Welcome Email', icon: Mail },
                  { id: 'seo', label: '4. SEO Meta & URL Slug', icon: Tag },
                  { id: 'faq', label: '5. Store FAQ & Policies', icon: HelpCircle },
                ].map(sub => {
                  const Icon = sub.icon;
                  return (
                    <button
                      key={sub.id}
                      onClick={() => setStoreTab(sub.id as any)}
                      className={`px-3 py-1.5 text-xs font-bold transition-colors cursor-pointer flex items-center gap-1.5 border ${
                        storeTab === sub.id
                          ? 'bg-[#5A5A40] text-white border-[#1A1A1A]'
                          : 'bg-white text-[#1A1A1A] border-[#1A1A1A]/30 hover:border-[#1A1A1A]'
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      <span>{sub.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Subtab 1: Description & Copy */}
              {storeTab === 'description' && (
                <div className="bg-white border-2 border-[#1A1A1A] p-6 shadow-[4px_4px_0_0_#1A1A1A] space-y-6">
                  <div className="flex items-center justify-between pb-3 border-b border-[#1A1A1A]/20">
                    <div>
                      <h3 className="font-serif font-bold text-lg text-[#1A1A1A]">
                        High-Converting Store Description
                      </h3>
                      <p className="text-xs text-[#1A1A1A]/70">
                        Paste directly into the Fourthwall / Shopify product description box.
                      </p>
                    </div>

                    <button
                      onClick={() => handleCopy(interactiveData.storeFullListingMarkdown, 'desc-copy')}
                      className="px-3 py-1.5 bg-[#FAF9F6] hover:bg-[#1A1A1A] hover:text-white text-[#1A1A1A] border border-[#1A1A1A] text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      {copyState === 'desc-copy' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copyState === 'desc-copy' ? 'Copied!' : 'Copy Description'}</span>
                    </button>
                  </div>

                  {/* Short Hook */}
                  <div className="bg-[#FAF9F6] p-4 border border-[#1A1A1A] space-y-1">
                    <span className="text-[10px] text-[#5A5A40] font-bold uppercase tracking-wider block">Catchy One-Paragraph Store Hook</span>
                    <p className="text-sm font-serif italic text-[#1A1A1A] leading-relaxed">
                      "{interactiveData.storeShortDescription}"
                    </p>
                  </div>

                  {/* Full Listing Formatted Preview */}
                  <div className="prose prose-sm max-w-none text-[#1A1A1A] bg-stone-50/50 p-6 border border-[#1A1A1A]/20 font-sans leading-relaxed whitespace-pre-line">
                    {interactiveData.storeFullListingMarkdown}
                  </div>
                </div>
              )}

              {/* Subtab 2: Deliverable Files Pack */}
              {storeTab === 'files' && (
                <div className="bg-white border-2 border-[#1A1A1A] p-6 shadow-[4px_4px_0_0_#1A1A1A] space-y-6">
                  <div className="flex items-center justify-between pb-3 border-b border-[#1A1A1A]/20">
                    <div>
                      <h3 className="font-serif font-bold text-lg text-[#1A1A1A]">
                        Digital Asset Files Manifest (Fourthwall File Uploader)
                      </h3>
                      <p className="text-xs text-[#1A1A1A]/70">
                        Upload these files to your Fourthwall digital download fulfillment area.
                      </p>
                    </div>

                    <button
                      onClick={() => handleCopy(interactiveData.deliverableFiles.map(f => `${f.name} (${f.format})`).join('\n'), 'files-manifest')}
                      className="px-3 py-1.5 bg-[#FAF9F6] hover:bg-[#1A1A1A] hover:text-white text-[#1A1A1A] border border-[#1A1A1A] text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      {copyState === 'files-manifest' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>Copy Manifest</span>
                    </button>
                  </div>

                  <div className="space-y-3">
                    {interactiveData.deliverableFiles.map((file, idx) => (
                      <div key={idx} className="p-4 bg-[#FAF9F6] border border-[#1A1A1A] flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-[2px_2px_0_0_#1A1A1A]">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <Box className="w-4 h-4 text-[#5A5A40]" />
                            <span className="font-mono text-xs font-bold text-[#1A1A1A]">{file.name}</span>
                            <span className="bg-white px-2 py-0.5 border border-[#1A1A1A]/30 text-[10px] font-bold text-[#5A5A40]">
                              {file.format}
                            </span>
                            <span className="text-[10px] text-stone-500 font-mono">({file.size})</span>
                          </div>
                          <p className="text-xs text-[#1A1A1A]/80 pl-6">
                            {file.description}
                          </p>
                        </div>

                        <div className="flex items-center gap-2 pl-6 sm:pl-0">
                          <button
                            onClick={() => handleCopy(file.name, `fname-${idx}`)}
                            className="px-2.5 py-1 bg-white hover:bg-[#1A1A1A] hover:text-white border border-[#1A1A1A] text-[11px] font-bold transition-colors cursor-pointer flex items-center gap-1"
                          >
                            {copyState === `fname-${idx}` ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                            <span>Copy Filename</span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Subtab 3: Customer Welcome Email */}
              {storeTab === 'email' && (
                <div className="bg-white border-2 border-[#1A1A1A] p-6 shadow-[4px_4px_0_0_#1A1A1A] space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-[#1A1A1A]/20">
                    <div>
                      <h3 className="font-serif font-bold text-lg text-[#1A1A1A]">
                        Automated Customer Post-Purchase Delivery Email
                      </h3>
                      <p className="text-xs text-[#1A1A1A]/70">
                        Paste into Fourthwall's "Post-Purchase Customer Email" or "Thank You Page".
                      </p>
                    </div>

                    <button
                      onClick={() => handleCopy(interactiveData.customerWelcomeEmail, 'email-copy')}
                      className="px-3 py-1.5 bg-[#FAF9F6] hover:bg-[#1A1A1A] hover:text-white text-[#1A1A1A] border border-[#1A1A1A] text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      {copyState === 'email-copy' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>Copy Email Text</span>
                    </button>
                  </div>

                  <div className="bg-[#FAF9F6] p-5 border border-[#1A1A1A] font-mono text-xs text-[#1A1A1A] whitespace-pre-line leading-relaxed shadow-inner">
                    {interactiveData.customerWelcomeEmail}
                  </div>
                </div>
              )}

              {/* Subtab 4: SEO Meta & Social Tags */}
              {storeTab === 'seo' && (
                <div className="bg-white border-2 border-[#1A1A1A] p-6 shadow-[4px_4px_0_0_#1A1A1A] space-y-5">
                  <div className="pb-3 border-b border-[#1A1A1A]/20">
                    <h3 className="font-serif font-bold text-lg text-[#1A1A1A]">
                      Search Engine Optimization (SEO) & Social Meta
                    </h3>
                    <p className="text-xs text-[#1A1A1A]/70">
                      Copy into Fourthwall SEO settings and Pinterest board descriptions.
                    </p>
                  </div>

                  <div className="space-y-4 text-xs">
                    <div className="bg-[#FAF9F6] p-3.5 border border-[#1A1A1A]">
                      <span className="text-[10px] text-[#5A5A40] uppercase font-bold tracking-wider block">Meta Title (58 Chars)</span>
                      <div className="flex items-center justify-between gap-2 mt-1">
                        <span className="font-bold text-[#1A1A1A]">{interactiveData.seoMeta.metaTitle}</span>
                        <button 
                          onClick={() => handleCopy(interactiveData.seoMeta.metaTitle, 'seo-title')}
                          className="text-[10px] font-bold uppercase underline cursor-pointer"
                        >
                          {copyState === 'seo-title' ? 'Copied' : 'Copy'}
                        </button>
                      </div>
                    </div>

                    <div className="bg-[#FAF9F6] p-3.5 border border-[#1A1A1A]">
                      <span className="text-[10px] text-[#5A5A40] uppercase font-bold tracking-wider block">Meta Description</span>
                      <div className="flex items-center justify-between gap-2 mt-1">
                        <span className="text-[#1A1A1A]/90">{interactiveData.seoMeta.metaDescription}</span>
                        <button 
                          onClick={() => handleCopy(interactiveData.seoMeta.metaDescription, 'seo-desc')}
                          className="text-[10px] font-bold uppercase underline cursor-pointer shrink-0"
                        >
                          {copyState === 'seo-desc' ? 'Copied' : 'Copy'}
                        </button>
                      </div>
                    </div>

                    <div className="bg-[#FAF9F6] p-3.5 border border-[#1A1A1A]">
                      <span className="text-[10px] text-[#5A5A40] uppercase font-bold tracking-wider block">Target Keywords & Tags</span>
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {interactiveData.seoMeta.keywords.map((kw, i) => (
                          <span key={i} className="bg-white px-2.5 py-1 border border-[#1A1A1A]/30 text-[11px] font-medium text-[#1A1A1A]">
                            #{kw}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Subtab 5: Store FAQ */}
              {storeTab === 'faq' && (
                <div className="bg-white border-2 border-[#1A1A1A] p-6 shadow-[4px_4px_0_0_#1A1A1A] space-y-4">
                  <div className="pb-3 border-b border-[#1A1A1A]/20">
                    <h3 className="font-serif font-bold text-lg text-[#1A1A1A]">
                      Frequently Asked Questions (For Store Accordion)
                    </h3>
                    <p className="text-xs text-[#1A1A1A]/70">
                      Answer customer hesitations before checkout.
                    </p>
                  </div>

                  <div className="space-y-3">
                    {interactiveData.storeFaq.map((faq, i) => (
                      <div key={i} className="p-4 bg-[#FAF9F6] border border-[#1A1A1A] space-y-1">
                        <h4 className="font-bold text-xs sm:text-sm text-[#1A1A1A] flex items-center gap-2">
                          <HelpCircle className="w-4 h-4 text-[#5A5A40]" />
                          <span>{faq.question}</span>
                        </h4>
                        <p className="text-xs text-[#1A1A1A]/80 pl-6 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Visual Card Store Shelf Mockup */}
              <div className="bg-[#FAF9F6] border-2 border-[#1A1A1A] p-5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#5A5A40] block mb-3">
                  Store Shelf Product Card Preview (Customer View)
                </span>
                
                <div className="max-w-md bg-white border-2 border-[#1A1A1A] p-5 shadow-[4px_4px_0_0_#1A1A1A] space-y-3">
                  <div className="flex items-center justify-between text-[10px] font-bold">
                    <span className="bg-[#5A5A40] text-white px-2 py-0.5">INSTANT DIGITAL DOWNLOAD</span>
                    <span className="text-stone-500">★★★★★ 4.9 (120+ reviews)</span>
                  </div>

                  <h3 className="font-serif font-bold text-lg text-[#1A1A1A]">
                    {interactiveData.title}
                  </h3>

                  <p className="text-xs text-[#1A1A1A]/80 line-clamp-2">
                    {interactiveData.storeShortDescription}
                  </p>

                  <div className="flex items-center justify-between pt-3 border-t border-[#1A1A1A]/20">
                    <div>
                      <span className="font-serif font-black text-xl text-[#1A1A1A]">${interactiveData.priceCAD} CAD</span>
                      <span className="text-[10px] text-stone-500 line-through ml-1.5">${interactiveData.compareAtPriceCAD} CAD</span>
                    </div>
                    
                    <button className="px-4 py-1.5 bg-[#1A1A1A] text-white text-xs font-bold uppercase tracking-wider">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* TAB CONTENT: 2. LIVE INTERACTIVE TOOL PLAYGROUND */}
          {activeTab === 'interactive-tool' && (
            <div className="space-y-6">
              
              {/* If Flagship SS-OS: Load full 6-module experience */}
              {selectedProductId === 'flagship-ss-os' ? (
                <FirstProductExperience />
              ) : (
                <div className="bg-white border-2 border-[#1A1A1A] p-6 shadow-[4px_4px_0_0_#1A1A1A] space-y-6">
                  
                  {/* Tool Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-[#1A1A1A]/20">
                    <div>
                      <span className="text-[10px] text-[#5A5A40] uppercase font-bold tracking-wider">
                        Interactive Tool Engine #{activeProduct.rank}
                      </span>
                      <h3 className="text-xl font-serif font-bold text-[#1A1A1A]">
                        {activeProduct.title}
                      </h3>
                    </div>

                    <span className="bg-[#5A5A40] text-white text-[10px] font-bold px-2.5 py-1 uppercase tracking-wider">
                      Live Customer Simulator
                    </span>
                  </div>

                  {/* SPECIFIC INTERACTIVE TOOL IMPLEMENTATIONS */}

                  {/* Tool 2: Layout & Clearance Calculator */}
                  {selectedProductId === 'layout-furniture-planner' && (
                    <div className="space-y-6">
                      <div className="bg-[#FAF9F6] p-5 border border-[#1A1A1A] space-y-4">
                        <h4 className="font-serif font-bold text-sm text-[#1A1A1A] flex items-center gap-2">
                          <Sliders className="w-4 h-4 text-[#5A5A40]" />
                          <span>Walkway Clearance & Proportion Verification Engine</span>
                        </h4>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                          <div>
                            <label className="font-bold text-[#1A1A1A] block mb-1">Room Width (Ft): {corridorWidthFt} ft</label>
                            <input 
                              type="range" min="8" max="18" value={corridorWidthFt}
                              onChange={(e) => setCorridorWidthFt(Number(e.target.value))}
                              className="w-full accent-[#5A5A40]"
                            />
                          </div>

                          <div>
                            <label className="font-bold text-[#1A1A1A] block mb-1">Sofa Depth (In): {sofaDepthIn}"</label>
                            <input 
                              type="range" min="28" max="44" value={sofaDepthIn}
                              onChange={(e) => setSofaDepthIn(Number(e.target.value))}
                              className="w-full accent-[#5A5A40]"
                            />
                          </div>

                          <div>
                            <label className="font-bold text-[#1A1A1A] block mb-1">Coffee Table Depth (In): {coffeeTableDepthIn}"</label>
                            <input 
                              type="range" min="14" max="36" value={coffeeTableDepthIn}
                              onChange={(e) => setCoffeeTableDepthIn(Number(e.target.value))}
                              className="w-full accent-[#5A5A40]"
                            />
                          </div>
                        </div>

                        {/* Result Verdict */}
                        <div className={`p-4 border-2 flex items-center justify-between gap-3 ${
                          isClearanceSafe 
                            ? 'bg-emerald-50 border-emerald-700 text-emerald-900'
                            : 'bg-amber-50 border-amber-700 text-amber-900'
                        }`}>
                          <div className="space-y-0.5">
                            <span className="font-bold text-sm">
                              Remaining Walkway: {sofaCorridorLeftoverIn} Inches
                            </span>
                            <p className="text-xs">
                              {isClearanceSafe 
                                ? '✓ PASS: Meets the 36" architectural standard for unobstructed 2-way traffic.'
                                : '⚠️ WARNING: Below 36" corridor standard. Select a low-profile 32" sofa or oval coffee table.'}
                            </p>
                          </div>

                          <span className={`px-2.5 py-1 text-xs font-bold uppercase border ${
                            isClearanceSafe ? 'bg-emerald-700 text-white' : 'bg-amber-700 text-white'
                          }`}>
                            {isClearanceSafe ? 'Standard Approved' : 'Clearance Hazard'}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Tool 5: Rent Tax Calculator */}
                  {selectedProductId === 'declutter-reset-protocol' && (
                    <div className="space-y-6">
                      <div className="bg-[#FAF9F6] p-5 border border-[#1A1A1A] space-y-4">
                        <h4 className="font-serif font-bold text-sm text-[#1A1A1A] flex items-center gap-2">
                          <Calculator className="w-4 h-4 text-[#5A5A40]" />
                          <span>The "Rent Tax" Clutter Cost Calculator</span>
                        </h4>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                          <div>
                            <label className="font-bold text-[#1A1A1A] block mb-1">Monthly Rent: ${monthlyRent} CAD</label>
                            <input 
                              type="range" min="1000" max="4000" step="50" value={monthlyRent}
                              onChange={(e) => setMonthlyRent(Number(e.target.value))}
                              className="w-full accent-[#5A5A40]"
                            />
                          </div>

                          <div>
                            <label className="font-bold text-[#1A1A1A] block mb-1">Apartment Size: {apartmentSqFt} Sq Ft</label>
                            <input 
                              type="range" min="300" max="1000" step="25" value={apartmentSqFt}
                              onChange={(e) => setApartmentSqFt(Number(e.target.value))}
                              className="w-full accent-[#5A5A40]"
                            />
                          </div>

                          <div>
                            <label className="font-bold text-[#1A1A1A] block mb-1">Unused Clutter Area: {clutterSqFt} Sq Ft</label>
                            <input 
                              type="range" min="5" max="50" value={clutterSqFt}
                              onChange={(e) => setClutterSqFt(Number(e.target.value))}
                              className="w-full accent-[#5A5A40]"
                            />
                          </div>
                        </div>

                        {/* Calculation Output */}
                        <div className="bg-white p-4 border border-[#1A1A1A] grid grid-cols-2 sm:grid-cols-3 gap-4 text-center shadow-[2px_2px_0_0_#1A1A1A]">
                          <div>
                            <span className="text-[10px] text-[#5A5A40] uppercase font-bold block">Cost Per Sq Ft / Year</span>
                            <span className="font-serif font-black text-lg text-[#1A1A1A]">${rentPerSqFtYear.toFixed(2)}</span>
                          </div>
                          <div>
                            <span className="text-[10px] text-[#5A5A40] uppercase font-bold block">Monthly Clutter Cost</span>
                            <span className="font-serif font-black text-lg text-amber-800">${(annualRentTax / 12).toFixed(2)}</span>
                          </div>
                          <div>
                            <span className="text-[10px] text-[#5A5A40] uppercase font-bold block">Annual Clutter Rent Tax</span>
                            <span className="font-serif font-black text-lg text-red-700">${annualRentTax.toFixed(2)} / yr</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Tool 8: First Apartment Budget Calculator */}
                  {selectedProductId === 'first-apartment-budget-inventory' && (
                    <div className="space-y-6">
                      <div className="bg-[#FAF9F6] p-5 border border-[#1A1A1A] space-y-4">
                        <h4 className="font-serif font-bold text-sm text-[#1A1A1A] flex items-center gap-2">
                          <DollarSign className="w-4 h-4 text-[#5A5A40]" />
                          <span>Move-In Starter Budget Allocator</span>
                        </h4>

                        <div className="flex gap-2 flex-wrap text-xs font-bold">
                          {[
                            { id: 'minimalist', label: 'Minimalist ($1,200)', val: 1200 },
                            { id: 'comfort', label: 'Balanced Comfort ($2,400)', val: 2400 },
                            { id: 'sanctuary', label: 'Sanctuary ($4,200)', val: 4200 },
                          ].map(t => (
                            <button
                              key={t.id}
                              onClick={() => {
                                setBudgetTier(t.id as any);
                                setCustomTotalBudget(t.val);
                              }}
                              className={`px-3 py-1.5 border transition-all cursor-pointer ${
                                budgetTier === t.id
                                  ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]'
                                  : 'bg-white text-[#1A1A1A] border-[#1A1A1A]/30'
                              }`}
                            >
                              {t.label}
                            </button>
                          ))}
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-white p-4 border border-[#1A1A1A] text-xs">
                          <div>
                            <span className="text-[10px] text-[#5A5A40] uppercase font-bold block">Furniture (50%)</span>
                            <span className="font-serif font-bold text-base text-[#1A1A1A]">${(customTotalBudget * 0.5).toFixed(0)}</span>
                          </div>
                          <div>
                            <span className="text-[10px] text-[#5A5A40] uppercase font-bold block">Kitchen Capsule (20%)</span>
                            <span className="font-serif font-bold text-base text-[#1A1A1A]">${(customTotalBudget * 0.2).toFixed(0)}</span>
                          </div>
                          <div>
                            <span className="text-[10px] text-[#5A5A40] uppercase font-bold block">Bed & Bath (18%)</span>
                            <span className="font-serif font-bold text-base text-[#1A1A1A]">${(customTotalBudget * 0.18).toFixed(0)}</span>
                          </div>
                          <div>
                            <span className="text-[10px] text-[#5A5A40] uppercase font-bold block">Hidden Fees Buffer (12%)</span>
                            <span className="font-serif font-bold text-base text-amber-800">${(customTotalBudget * 0.12).toFixed(0)}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Tool 10: Landlord Email Generator */}
                  {selectedProductId === 'renter-maintenance-vault' && (
                    <div className="space-y-6">
                      <div className="bg-[#FAF9F6] p-5 border border-[#1A1A1A] space-y-4">
                        <h4 className="font-serif font-bold text-sm text-[#1A1A1A] flex items-center gap-2">
                          <FileText className="w-4 h-4 text-[#5A5A40]" />
                          <span>Legal-Grade Formal Notice Generator</span>
                        </h4>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                          <div>
                            <label className="font-bold text-[#1A1A1A] block mb-1">Issue Type</label>
                            <select
                              value={landlordSubjectType}
                              onChange={(e) => setLandlordSubjectType(e.target.value)}
                              className="w-full bg-white border border-[#1A1A1A] p-1.5"
                            >
                              <option value="heating">Urgent Heating Failure</option>
                              <option value="leak">Plumbing / Sink Leak</option>
                              <option value="deposit">Deposit Return Demand Letter</option>
                            </select>
                          </div>

                          <div>
                            <label className="font-bold text-[#1A1A1A] block mb-1">Unit Number</label>
                            <input 
                              type="text" value={tenantUnitNum}
                              onChange={(e) => setTenantUnitNum(e.target.value)}
                              className="w-full bg-white border border-[#1A1A1A] p-1.5"
                            />
                          </div>

                          <div>
                            <label className="font-bold text-[#1A1A1A] block mb-1">Your Name</label>
                            <input 
                              type="text" value={tenantName}
                              onChange={(e) => setTenantName(e.target.value)}
                              className="w-full bg-white border border-[#1A1A1A] p-1.5"
                            />
                          </div>
                        </div>

                        <div className="bg-white p-4 border border-[#1A1A1A] font-mono text-xs text-[#1A1A1A] whitespace-pre-line leading-relaxed">
                          {landlordSubjectType === 'heating' && `Subject: URGENT: Primary Heating Failure at Unit ${tenantUnitNum}\n\nDear Property Manager / Landlord,\n\nI am writing to formally log that the heating system in Apt ${tenantUnitNum} is malfunctioning. The current ambient temperature is below the required municipal standard.\n\nPlease schedule an HVAC technician visit within 24 hours.\n\nSincerely,\n${tenantName}`}
                          {landlordSubjectType === 'leak' && `Subject: Repair Request: Plumbing Leak at Unit ${tenantUnitNum}\n\nDear Landlord,\n\nThere is active moisture accumulation under the bathroom sink at Apt ${tenantUnitNum}. Photos have been recorded in our tenant maintenance vault.\n\nBest regards,\n${tenantName}`}
                          {landlordSubjectType === 'deposit' && `Subject: Formal Demand: Security Deposit Return for Unit ${tenantUnitNum}\n\nDear Landlord,\n\nOur tenancy terminated on schedule with a signed move-out condition report. Please remit the full deposit via e-transfer.\n\nSincerely,\n${tenantName}`}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Tool 18: Lighting Lumens Calculator */}
                  {selectedProductId === 'circadian-lighting-guide' && (
                    <div className="space-y-6">
                      <div className="bg-[#FAF9F6] p-5 border border-[#1A1A1A] space-y-4">
                        <h4 className="font-serif font-bold text-sm text-[#1A1A1A] flex items-center gap-2">
                          <Sun className="w-4 h-4 text-[#5A5A40]" />
                          <span>3-Layer Photometric Lumens Calculator</span>
                        </h4>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                          <div>
                            <label className="font-bold text-[#1A1A1A] block mb-1">Room Type</label>
                            <select
                              value={selectedRoomType}
                              onChange={(e) => setSelectedRoomType(e.target.value as any)}
                              className="w-full bg-white border border-[#1A1A1A] p-2"
                            >
                              <option value="living">Living Room / Lounge (20 lm/sq ft)</option>
                              <option value="kitchen">Galley Kitchen (40 lm/sq ft)</option>
                              <option value="bedroom">Bedroom Sanctuary (15 lm/sq ft)</option>
                            </select>
                          </div>

                          <div>
                            <label className="font-bold text-[#1A1A1A] block mb-1">Room Area (Sq Ft): {roomAreaSqFt} sq ft</label>
                            <input 
                              type="range" min="80" max="500" value={roomAreaSqFt}
                              onChange={(e) => setRoomAreaSqFt(Number(e.target.value))}
                              className="w-full accent-[#5A5A40]"
                            />
                          </div>
                        </div>

                        <div className="bg-white p-4 border border-[#1A1A1A] flex items-center justify-between gap-4">
                          <div>
                            <span className="text-[10px] text-[#5A5A40] uppercase font-bold block">Total Recommended Lumens</span>
                            <span className="font-serif font-black text-2xl text-[#1A1A1A]">{getLumensRequired()} Lumens</span>
                          </div>

                          <div className="text-right text-xs space-y-0.5">
                            <span className="font-bold text-[#5A5A40] block">3-Layer Distribution:</span>
                            <span className="block text-[#1A1A1A]">Layer 1 Ambient: {Math.round(getLumensRequired() * 0.5)} lm (2700K)</span>
                            <span className="block text-[#1A1A1A]">Layer 2 Task: {Math.round(getLumensRequired() * 0.35)} lm (3000K)</span>
                            <span className="block text-[#1A1A1A]">Layer 3 Accent: {Math.round(getLumensRequired() * 0.15)} lm (2200K)</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* General Sections for Products 3, 4, 6, 7, 9, 11-17, 19-20 */}
                  <div className="space-y-4">
                    <h4 className="font-serif font-bold text-sm text-[#1A1A1A] uppercase tracking-wider">
                      Included Module Architecture
                    </h4>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {interactiveData.interactiveSections.map((sec) => (
                        <div key={sec.id} className="p-4 bg-[#FAF9F6] border border-[#1A1A1A] space-y-2">
                          <h5 className="font-serif font-bold text-sm text-[#1A1A1A]">
                            {sec.title}
                          </h5>
                          <p className="text-xs text-[#1A1A1A]/80">
                            {sec.description}
                          </p>

                          {Array.isArray(sec.content) && (
                            <ul className="pt-2 space-y-1 text-xs text-[#1A1A1A]/90">
                              {sec.content.map((item: any, i: number) => (
                                <li key={i} className="flex items-start gap-1.5">
                                  <span className="text-[#5A5A40] font-bold">•</span>
                                  <span>{typeof item === 'string' ? item : item.task || item.item || item.rule || item.zone || JSON.stringify(item)}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              )}
            </div>
          )}

          {/* TAB CONTENT: 3. NOTION DATABASE SCHEMA & EXPORT */}
          {activeTab === 'notion-schema' && (
            <div className="bg-white border-2 border-[#1A1A1A] p-6 shadow-[4px_4px_0_0_#1A1A1A] space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-[#1A1A1A]/20">
                <div>
                  <h3 className="font-serif font-bold text-lg text-[#1A1A1A]">
                    Notion Database Architecture & Export Schema
                  </h3>
                  <p className="text-xs text-[#1A1A1A]/70">
                    Use these property definitions to create or duplicate the customer's Notion hub.
                  </p>
                </div>

                <button
                  onClick={() => handleCopy(interactiveData.notionExportSchema, 'notion-copy')}
                  className="px-3 py-1.5 bg-[#FAF9F6] hover:bg-[#1A1A1A] hover:text-white text-[#1A1A1A] border border-[#1A1A1A] text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  {copyState === 'notion-copy' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>Copy Schema</span>
                </button>
              </div>

              <div className="bg-[#FAF9F6] p-5 border border-[#1A1A1A] font-mono text-xs text-[#1A1A1A] whitespace-pre-line leading-relaxed shadow-inner">
                {interactiveData.notionExportSchema}
              </div>

              <div className="bg-stone-50 p-4 border border-[#1A1A1A]/30 text-xs text-[#1A1A1A]/80 space-y-1">
                <span className="font-bold text-[#1A1A1A]">How to Use in Customer Store:</span>
                <p>Provide the customer with a read-only template link with permissions set to "Allow duplicate as template". Free Notion users can duplicate in 1-click.</p>
              </div>
            </div>
          )}

          {/* TAB CONTENT: 4. PRINTABLE CHEATSHEET PREVIEW */}
          {activeTab === 'printable-sheet' && (
            <div className="bg-white border-2 border-[#1A1A1A] p-6 shadow-[4px_4px_0_0_#1A1A1A] space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-[#1A1A1A]/20">
                <div>
                  <h3 className="font-serif font-bold text-lg text-[#1A1A1A]">
                    Printable Room Blueprint & Action Sheet (A4 / Letter)
                  </h3>
                  <p className="text-xs text-[#1A1A1A]/70">
                    Formatted for home printing on fridge, desk, or clipboard.
                  </p>
                </div>

                <button
                  onClick={() => window.print()}
                  className="px-3 py-1.5 bg-[#1A1A1A] hover:bg-[#5A5A40] text-white border border-[#1A1A1A] text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer shadow-[2px_2px_0_0_#5A5A40]"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print Sheet</span>
                </button>
              </div>

              {/* Sheet Container */}
              <div className="border-2 border-[#1A1A1A] p-8 bg-[#FAF9F6] font-serif space-y-6 text-[#1A1A1A]">
                <div className="flex items-center justify-between border-b-2 border-[#1A1A1A] pb-4">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#5A5A40] block">SmallSpaceHome Blueprint Sheet</span>
                    <h2 className="text-xl font-bold">{activeProduct.title}</h2>
                  </div>
                  <span className="text-xs font-bold font-mono">DOC ID: SSH-P{activeProduct.rank}</span>
                </div>

                <div className="prose prose-sm max-w-none text-[#1A1A1A] whitespace-pre-line leading-relaxed font-sans text-xs">
                  {interactiveData.printableWorksheetMarkdown}
                </div>

                <div className="border-t border-[#1A1A1A] pt-4 flex items-center justify-between text-[10px] font-sans text-[#1A1A1A]/60">
                  <span>© SmallSpaceHome — Architectural Digital System</span>
                  <span>smallspacehome.ca</span>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>

    </div>
  );
};
