import React, { useState } from 'react';
import { TOP_20_PRODUCTS, STRATEGIC_BUNDLES, FOURTHWALL_STORE_ARCHITECTURE } from '../data/strategyData';
import { DigitalProduct, TabId } from '../types';
import { 
  Package, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  ShoppingBag, 
  Compass, 
  Sparkles, 
  ShieldCheck, 
  FileText, 
  CreditCard, 
  SlidersHorizontal,
  Home,
  Check,
  Zap,
  ExternalLink,
  ChevronRight
} from 'lucide-react';

interface EcosystemFlowProps {
  onSelectProduct?: (productId: string) => void;
  onNavigateTab?: (tab: TabId) => void;
}

export const EcosystemFlow: React.FC<EcosystemFlowProps> = ({ onSelectProduct, onNavigateTab }) => {
  const [activePathway, setActivePathway] = useState<'renter-defense' | 'storage-doubler' | 'studio-zoning' | 'wfh-lifestyle'>('renter-defense');
  const [selectedZone, setSelectedZone] = useState<string>('All');
  const [hoveredProductId, setHoveredProductId] = useState<string | null>(null);

  // Filter 12 products
  const products: DigitalProduct[] = TOP_20_PRODUCTS.slice(0, 12);

  const zones = ['All', 'Universal', 'Kitchen', 'Closet & Bedroom', 'Living & Studio', 'Bathroom', 'Balcony'];

  const filteredProducts = selectedZone === 'All' 
    ? products 
    : products.filter(p => p.roomZone === selectedZone);

  const pathways = {
    'renter-defense': {
      id: 'renter-defense',
      title: 'Pathway 1: Renter Move-In & Security Deposit Armor',
      subtitle: 'For tenants who want to personalize walls, eliminate noise, and guarantee a 100% full deposit return.',
      blogPost: {
        title: 'How to Hang Heavy Mirrors and Floating Shelves Without Drilling Holes (Renter-Safe)',
        category: 'Renter Hacks & Wall Decor',
        trafficSource: 'Organic Search & Pinterest'
      },
      tripwire: products.find(p => p.id === 'kit-zero-damage-mounting') || products[0],
      upsells: [
        products.find(p => p.id === 'kit-deposit-protection-defense') || products[3],
        products.find(p => p.id === 'kit-studio-acoustic-privacy') || products[4]
      ],
      bundle: STRATEGIC_BUNDLES.find(b => b.id === 'bundle-renter-survival') || STRATEGIC_BUNDLES[0],
      masterVault: STRATEGIC_BUNDLES.find(b => b.id === 'bundle-ultimate-12-kit-vault') || STRATEGIC_BUNDLES[3]
    },
    'storage-doubler': {
      id: 'storage-doubler',
      title: 'Pathway 2: Small Space Storage Doubler & Kitchen Clutter',
      subtitle: 'For renters with tiny galley kitchens, overflowing single-rod closets, and dead under-bed space.',
      blogPost: {
        title: '11 Clever Hacks to Double Your Cabinet Space in a 45 Sq Ft Galley Kitchen',
        category: 'Small Kitchen Organization',
        trafficSource: 'Google Search & Instagram'
      },
      tripwire: products.find(p => p.id === 'kit-micro-kitchen-maxima') || products[1],
      upsells: [
        products.find(p => p.id === 'kit-closet-quadrupler') || products[2],
        products.find(p => p.id === 'kit-underbed-hidden-storage') || products[6]
      ],
      bundle: STRATEGIC_BUNDLES.find(b => b.id === 'bundle-micro-space-doubler') || STRATEGIC_BUNDLES[1],
      masterVault: STRATEGIC_BUNDLES.find(b => b.id === 'bundle-ultimate-12-kit-vault') || STRATEGIC_BUNDLES[3]
    },
    'studio-zoning': {
      id: 'studio-zoning',
      title: 'Pathway 3: Studio Apartment Layout & Optical Light Flow',
      subtitle: 'For open-concept studio dwellers needing distinct room boundaries, drop-zones, and daylight bounce.',
      blogPost: {
        title: 'How to Divide a 400 Sq Ft Studio Into 3 Distinct Rooms Without Building Walls',
        category: 'Studio Layout & Room Separation',
        trafficSource: 'Pinterest & TikTok'
      },
      tripwire: products.find(p => p.id === 'kit-studio-zoning-separation') || products[7],
      upsells: [
        products.find(p => p.id === 'kit-entryway-dropzone') || products[5],
        products.find(p => p.id === 'kit-optical-expander-lighting') || products[9]
      ],
      bundle: STRATEGIC_BUNDLES.find(b => b.id === 'bundle-studio-master-expansion') || STRATEGIC_BUNDLES[2],
      masterVault: STRATEGIC_BUNDLES.find(b => b.id === 'bundle-ultimate-12-kit-vault') || STRATEGIC_BUNDLES[3]
    },
    'wfh-lifestyle': {
      id: 'wfh-lifestyle',
      title: 'Pathway 4: Compact WFH, Bathroom & Balcony Upgrades',
      subtitle: 'For urban professionals balancing compact desk resets, pedestal sink storage, and outdoor balcony oasis.',
      blogPost: {
        title: 'How to Disappear Your Remote Work Desk From Your Living Room in 15 Minutes',
        category: 'WFH & Multi-Use Living',
        trafficSource: 'Search & Newsletter'
      },
      tripwire: products.find(p => p.id === 'kit-wfh-desk-reset') || products[8],
      upsells: [
        products.find(p => p.id === 'kit-bathroom-vanity-shower') || products[10],
        products.find(p => p.id === 'kit-balcony-patio-oasis') || products[11]
      ],
      bundle: STRATEGIC_BUNDLES.find(b => b.id === 'bundle-ultimate-12-kit-vault') || STRATEGIC_BUNDLES[3],
      masterVault: STRATEGIC_BUNDLES.find(b => b.id === 'bundle-ultimate-12-kit-vault') || STRATEGIC_BUNDLES[3]
    }
  };

  const currentPathway = pathways[activePathway];

  const handleProductClick = (productId: string) => {
    if (onSelectProduct) {
      onSelectProduct(productId);
    }
  };

  const handleTabClick = (tab: TabId) => {
    if (onNavigateTab) {
      onNavigateTab(tab);
    }
  };

  return (
    <div className="space-y-10 pb-16">
      
      {/* Editorial Header */}
      <div className="border-b border-[#E5DFD5] pb-5">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <span className="editorial-badge">
            <Package className="w-3 h-3" />
            <span>Product Architecture & Ecosystem</span>
          </span>
          <span className="text-[#1C1917]/40 text-xs">•</span>
          <span className="text-xs text-[#4A533E] font-medium">12 Tactical Action Kits + 4 Strategic Bundles</span>
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#1C1917] font-bold tracking-tight">
          The 12-Kit Digital Product Ecosystem & Ascension Engine
        </h2>
        <p className="text-xs sm:text-sm text-[#1C1917]/70 mt-1 max-w-3xl font-serif italic">
          How single-problem tactical action kits ($19–$24 CAD) naturally ascend into curated 3-in-1 problem bundles ($42–$47 CAD) and the definitive All-12 Master Vault ($97 CAD).
        </p>
      </div>

      {/* 3-Tier Value Ascension Pillars (Exclusively Real Products) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Tier 1: Standalone Tactical Action Kits */}
        <div className="bg-white border border-[#E5DFD5] p-6 shadow-xs flex flex-col justify-between space-y-4 hover:border-[#4A533E]/40 transition-colors">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[9px] font-bold uppercase tracking-[0.15em] px-2.5 py-1 bg-[#FAF8F5] text-[#4A533E] border border-[#E5DFD5]">
                Tier 1: 12 Action Kits
              </span>
              <span className="text-sm font-serif font-bold text-[#1C1917]">$19 – $24 CAD</span>
            </div>
            
            <h3 className="font-serif text-lg text-[#1C1917] font-bold">
              Single-Problem Tactical Action Kits
            </h3>
            
            <p className="text-xs text-[#1C1917]/70 leading-relaxed font-sans">
              Immediate, zero-damage solutions designed for immediate checkout from blog articles, Pinterest pins, and search intent.
            </p>

            <div className="space-y-1.5 pt-2 text-xs text-[#1C1917]/80">
              <div className="font-bold text-[#4A533E] text-[9px] uppercase tracking-[0.15em]">Standard Kit Deliverables:</div>
              <div className="flex items-center gap-2 text-xs text-[#1C1917]/80">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#4A533E] shrink-0" />
                <span>Vector PDF Field Playbook (12–16 pages)</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#1C1917]/80">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#4A533E] shrink-0" />
                <span>Printable Pocket Hacks Flashcards Deck</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#1C1917]/80">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#4A533E] shrink-0" />
                <span>Interactive Load & Clearance Calculator (.CSV)</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#1C1917]/80">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#4A533E] shrink-0" />
                <span>1-Click Notion Inventory & Checklist Dashboard</span>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-[#E5DFD5] flex items-center justify-between text-[11px]">
            <span className="text-[#4A533E] font-bold uppercase tracking-wider">
              12 Available Kits
            </span>
            <button 
              onClick={() => handleTabClick('all-products')}
              className="text-[#4A533E] hover:text-[#1C1917] font-semibold underline text-xs cursor-pointer flex items-center gap-1"
            >
              <span>View Store Kits</span>
              <ChevronRight className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* Tier 2: 3-in-1 Curated Problem Bundles */}
        <div className="bg-[#FAF8F5] border border-[#4A533E]/50 p-6 shadow-xs flex flex-col justify-between space-y-4 relative">
          <div className="absolute -top-2.5 right-4 bg-[#4A533E] text-[#FAF8F5] text-[9px] uppercase tracking-widest font-bold px-2 py-0.5 shadow-xs">
            Save 35%+
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[9px] font-bold uppercase tracking-[0.15em] px-2.5 py-1 bg-white text-[#4A533E] border border-[#4A533E]/30">
                Tier 2: 3-in-1 Bundles
              </span>
              <span className="text-sm font-serif font-bold text-[#1C1917]">$42 – $47 CAD</span>
            </div>

            <h3 className="font-serif text-lg text-[#1C1917] font-bold">
              Curated Problem-Solving Suites
            </h3>

            <p className="text-xs text-[#1C1917]/70 leading-relaxed font-sans">
              Combines 3 complementary action kits to solve complete spatial domains, dramatically increasing Average Order Value (AOV).
            </p>

            <div className="space-y-2 pt-2 text-xs">
              <div className="font-bold text-[#4A533E] text-[9px] uppercase tracking-[0.15em]">3 Flagship Suites:</div>
              <div className="p-2 bg-white border border-[#E5DFD5] rounded-xs space-y-0.5">
                <span className="font-bold text-[#1C1917] text-[11px] block">Renter Defense & Security 3-in-1 ($47)</span>
                <span className="text-[10px] text-[#1C1917]/60">Kits #1 Zero-Damage + #4 Deposit + #5 Acoustics</span>
              </div>
              <div className="p-2 bg-white border border-[#E5DFD5] rounded-xs space-y-0.5">
                <span className="font-bold text-[#1C1917] text-[11px] block">Micro-Space Storage Doubler 3-in-1 ($44)</span>
                <span className="text-[10px] text-[#1C1917]/60">Kits #2 Kitchen + #3 Closet + #7 Under-Bed</span>
              </div>
              <div className="p-2 bg-white border border-[#E5DFD5] rounded-xs space-y-0.5">
                <span className="font-bold text-[#1C1917] text-[11px] block">Studio Layout & Ambience 3-in-1 ($42)</span>
                <span className="text-[10px] text-[#1C1917]/60">Kits #8 Zoning + #6 Entryway + #10 Lighting</span>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-[#E5DFD5] flex items-center justify-between text-[11px]">
            <span className="text-[#4A533E] font-bold uppercase tracking-wider">
              3 Themed Bundles
            </span>
            <button 
              onClick={() => handleTabClick('bundles')}
              className="text-[#4A533E] hover:text-[#1C1917] font-semibold underline text-xs cursor-pointer flex items-center gap-1"
            >
              <span>Explore Bundles</span>
              <ChevronRight className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* Tier 3: Ultimate 12-Kit Master Vault */}
        <div className="bg-[#1C1917] text-[#FAF8F5] border border-[#1C1917] p-6 shadow-md flex flex-col justify-between space-y-4 relative">
          <div className="absolute -top-2.5 right-4 bg-[#A85A3C] text-white text-[9px] uppercase tracking-widest font-bold px-2 py-0.5 shadow-xs">
            Save 63% ($260 Value)
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[9px] font-bold uppercase tracking-[0.15em] px-2.5 py-1 bg-[#4A533E] text-white border border-[#4A533E]">
                Tier 3: Master Vault
              </span>
              <span className="text-sm font-serif font-bold text-[#FAF8F5]">$97 CAD</span>
            </div>

            <h3 className="font-serif text-lg text-white font-bold">
              The Ultimate Renter Action Vault
            </h3>

            <p className="text-xs text-[#FAF8F5]/70 leading-relaxed font-sans">
              The definitive encyclopedia: every single action kit, 150+ secret hacks, 12 printable pocket card decks, 12 CSV calculators, and 12 Notion dashboards.
            </p>

            <div className="space-y-1.5 pt-2 text-xs text-[#FAF8F5]/80">
              <div className="font-bold text-[#D9D3C7] text-[9px] uppercase tracking-[0.15em]">Master Access Includes:</div>
              <div className="flex items-center gap-2 text-xs text-[#FAF8F5]/90">
                <Sparkles className="w-3.5 h-3.5 text-[#D9D3C7] shrink-0" />
                <span>All 12 Tactical Action Kits (150+ Secret Hacks)</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#FAF8F5]/90">
                <Sparkles className="w-3.5 h-3.5 text-[#D9D3C7] shrink-0" />
                <span>12 Printable Pocket Flashcard Reference Decks</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#FAF8F5]/90">
                <Sparkles className="w-3.5 h-3.5 text-[#D9D3C7] shrink-0" />
                <span>12 Interactive CSV Clearance & Load Calculators</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#FAF8F5]/90">
                <Sparkles className="w-3.5 h-3.5 text-[#D9D3C7] shrink-0" />
                <span>12 Connected Notion Room & Inventory Hubs</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#FAF8F5]/90">
                <Sparkles className="w-3.5 h-3.5 text-[#D9D3C7] shrink-0" />
                <span>Lifetime Updates for All Future Small-Space Guides</span>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-white/15 flex items-center justify-between text-[11px]">
            <span className="text-[#D9D3C7] font-bold uppercase tracking-wider">
              100% Full Access
            </span>
            <span className="text-white/60 font-serif italic text-xs">Lifetime Updates</span>
          </div>
        </div>

      </div>

      {/* Interactive Customer Funnel Pathways */}
      <div className="bg-white border border-[#E5DFD5] p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-[#E5DFD5] pb-5">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Compass className="w-4 h-4 text-[#4A533E]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#4A533E]">
                Organic Conversion Pathways
              </span>
            </div>
            <h3 className="font-serif text-xl sm:text-2xl text-[#1C1917] font-bold">
              Real Product Acquisition & Ascension Journeys
            </h3>
            <p className="text-xs text-[#1C1917]/70 mt-0.5">
              Select a customer intent to view how organic blog traffic converts into tripwires, bundles, and the master vault.
            </p>
          </div>

          {/* Pathway Selector Tabs */}
          <div className="flex flex-wrap gap-1.5 p-1 bg-[#FAF8F5] border border-[#E5DFD5] rounded-xs self-start">
            <button
              onClick={() => setActivePathway('renter-defense')}
              className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer rounded-xs ${
                activePathway === 'renter-defense'
                  ? 'bg-[#1C1917] text-[#FAF8F5] shadow-xs'
                  : 'text-[#1C1917]/70 hover:text-[#1C1917] hover:bg-white/80'
              }`}
            >
              1. Renter Defense
            </button>
            <button
              onClick={() => setActivePathway('storage-doubler')}
              className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer rounded-xs ${
                activePathway === 'storage-doubler'
                  ? 'bg-[#1C1917] text-[#FAF8F5] shadow-xs'
                  : 'text-[#1C1917]/70 hover:text-[#1C1917] hover:bg-white/80'
              }`}
            >
              2. Storage Doubler
            </button>
            <button
              onClick={() => setActivePathway('studio-zoning')}
              className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer rounded-xs ${
                activePathway === 'studio-zoning'
                  ? 'bg-[#1C1917] text-[#FAF8F5] shadow-xs'
                  : 'text-[#1C1917]/70 hover:text-[#1C1917] hover:bg-white/80'
              }`}
            >
              3. Studio Zoning
            </button>
            <button
              onClick={() => setActivePathway('wfh-lifestyle')}
              className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer rounded-xs ${
                activePathway === 'wfh-lifestyle'
                  ? 'bg-[#1C1917] text-[#FAF8F5] shadow-xs'
                  : 'text-[#1C1917]/70 hover:text-[#1C1917] hover:bg-white/80'
              }`}
            >
              4. WFH & Oasis
            </button>
          </div>
        </div>

        {/* Selected Journey Pathway Display */}
        <div className="space-y-4">
          <div className="bg-[#FAF8F5] border border-[#E5DFD5] p-4 rounded-xs">
            <h4 className="font-serif font-bold text-[#1C1917] text-base">{currentPathway.title}</h4>
            <p className="text-xs text-[#1C1917]/70 mt-0.5 font-serif italic">{currentPathway.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 relative">
            
            {/* Step 1: Organic Blog Discovery */}
            <div className="bg-[#FAF9F6] p-4 border border-[#E5DFD5] space-y-2 flex flex-col justify-between rounded-xs">
              <div>
                <span className="text-[9px] font-bold text-[#4A533E] uppercase tracking-wider block">
                  Step 1: Blog Traffic
                </span>
                <p className="text-xs font-bold text-[#1C1917] mt-1 line-clamp-3">
                  "{currentPathway.blogPost.title}"
                </p>
              </div>
              <div className="pt-2 border-t border-[#E5DFD5] text-[10px] text-[#1C1917]/50 font-medium">
                📍 {currentPathway.blogPost.trafficSource}
              </div>
            </div>

            {/* Step 2: Instant Tripwire Purchase */}
            <div className="bg-white p-4 border border-[#4A533E]/40 shadow-xs space-y-2 flex flex-col justify-between rounded-xs">
              <div>
                <span className="text-[9px] font-bold text-[#4A533E] uppercase tracking-wider block">
                  Step 2: Low-Ticket Action Kit
                </span>
                <p className="text-xs font-bold text-[#1C1917] mt-1">
                  #{currentPathway.tripwire.rank} {currentPathway.tripwire.title}
                </p>
              </div>
              <div className="pt-2 border-t border-[#E5DFD5] flex items-center justify-between">
                <span className="text-xs font-serif font-bold text-[#4A533E]">
                  ${currentPathway.tripwire.recommendedPrice} CAD
                </span>
                <button 
                  onClick={() => handleProductClick(currentPathway.tripwire.id)}
                  className="text-[10px] text-[#1C1917] underline hover:text-[#4A533E] font-medium cursor-pointer"
                >
                  View Kit →
                </button>
              </div>
            </div>

            {/* Step 3: In-Product Cross-Sell / Upsells */}
            <div className="bg-[#FAF8F5] p-4 border border-[#E5DFD5] space-y-2 flex flex-col justify-between rounded-xs">
              <div>
                <span className="text-[9px] font-bold text-[#4A533E] uppercase tracking-wider block">
                  Step 3: Solution Expansion
                </span>
                <div className="space-y-1.5 mt-1">
                  {currentPathway.upsells.map((up) => (
                    <div key={up.id} className="text-[11px] text-[#1C1917] flex items-start gap-1 font-medium">
                      <span className="text-[#4A533E] font-bold">#{up.rank}</span>
                      <span className="line-clamp-1">{up.title}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="pt-2 border-t border-[#E5DFD5] text-[10px] text-[#4A533E] font-bold uppercase tracking-wider">
                Cross-Sell in Field Guide
              </div>
            </div>

            {/* Step 4: 3-in-1 Problem Bundle */}
            <div className="bg-white p-4 border border-[#1C1917] shadow-xs space-y-2 flex flex-col justify-between rounded-xs">
              <div>
                <span className="text-[9px] font-bold text-[#4A533E] uppercase tracking-wider block">
                  Step 4: 3-in-1 Bundle
                </span>
                <p className="text-xs font-bold text-[#1C1917] mt-1">
                  {currentPathway.bundle.name}
                </p>
              </div>
              <div className="pt-2 border-t border-[#E5DFD5] flex items-center justify-between">
                <span className="text-xs font-serif font-bold text-[#1C1917]">
                  ${currentPathway.bundle.suggestedPrice} CAD
                </span>
                <span className="text-[9px] text-[#4A533E] font-bold uppercase bg-[#FAF8F5] px-1 py-0.5 border border-[#E5DFD5]">
                  Save {currentPathway.bundle.savingsPercentage}%
                </span>
              </div>
            </div>

            {/* Step 5: Ultimate Master Vault */}
            <div className="bg-[#1C1917] text-[#FAF8F5] p-4 border border-[#1C1917] space-y-2 flex flex-col justify-between rounded-xs shadow-xs">
              <div>
                <span className="text-[9px] font-bold text-[#D9D3C7] uppercase tracking-wider block">
                  Step 5: Master Vault
                </span>
                <p className="text-xs font-medium text-white mt-1">
                  The Ultimate Renter Action Vault (All 12 Kits)
                </p>
              </div>
              <div className="pt-2 border-t border-white/15 flex items-center justify-between">
                <span className="text-xs font-serif font-bold text-white">
                  $97 CAD
                </span>
                <span className="text-[9px] text-[#D9D3C7] font-bold uppercase bg-white/10 px-1.5 py-0.5">
                  Save 63%
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Interactive 12-Product Master Catalog Grid */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E5DFD5] pb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Layers className="w-4 h-4 text-[#4A533E]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#4A533E]">
                Master Catalog Directory
              </span>
            </div>
            <h3 className="font-serif text-xl sm:text-2xl text-[#1C1917] font-bold">
              The 12 Tactical Action Kits Matrix
            </h3>
            <p className="text-xs text-[#1C1917]/70">
              Filter by room zone to inspect every individual kit, deliverables, and bundle positioning.
            </p>
          </div>

          {/* Room Zone Filter Chips */}
          <div className="flex flex-wrap items-center gap-1.5">
            {zones.map((zone) => (
              <button
                key={zone}
                onClick={() => setSelectedZone(zone)}
                className={`px-2.5 py-1 text-[11px] font-medium transition-all cursor-pointer rounded-xs border ${
                  selectedZone === zone
                    ? 'bg-[#4A533E] text-white border-[#4A533E] font-semibold'
                    : 'bg-white text-[#1C1917]/80 border-[#E5DFD5] hover:border-[#4A533E]/50 hover:bg-[#FAF8F5]'
                }`}
              >
                {zone}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredProducts.map((prod) => {
            const isHovered = hoveredProductId === prod.id;
            
            // Find which bundle includes this product
            const parentBundle = STRATEGIC_BUNDLES.find(b => b.productsIncluded.includes(prod.id));

            return (
              <div
                key={prod.id}
                onMouseEnter={() => setHoveredProductId(prod.id)}
                onMouseLeave={() => setHoveredProductId(null)}
                className={`bg-white border p-5 flex flex-col justify-between space-y-4 transition-all rounded-xs ${
                  isHovered 
                    ? 'border-[#4A533E] shadow-sm bg-[#FAF8F5]/40' 
                    : 'border-[#E5DFD5] shadow-xs'
                }`}
              >
                <div className="space-y-3">
                  {/* Top Badge Row */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1.5">
                      <span className="w-5 h-5 bg-[#4A533E] text-white text-[10px] font-serif font-bold flex items-center justify-center rounded-xs">
                        #{prod.rank}
                      </span>
                      <span className="text-[10px] uppercase tracking-wider font-semibold text-[#1C1917]/70 bg-[#FAF8F5] px-2 py-0.5 border border-[#E5DFD5] rounded-xs">
                        {prod.roomZone || 'Universal'}
                      </span>
                    </div>

                    <span className="text-sm font-serif font-bold text-[#1C1917]">
                      ${prod.recommendedPrice} CAD
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <div>
                    <h4 className="font-serif text-base font-bold text-[#1C1917] leading-snug line-clamp-2">
                      {prod.title}
                    </h4>
                    <p className="text-xs text-[#1C1917]/70 font-serif italic mt-1 line-clamp-2">
                      "{prod.tagline}"
                    </p>
                  </div>

                  {/* Viral Hook / Key Trick */}
                  {prod.viralHook && (
                    <div className="p-2.5 bg-[#FAF9F6] border border-[#E5DFD5] text-[11px] text-[#4A533E] rounded-xs">
                      <span className="font-bold block text-[9px] uppercase tracking-wider">Tested Lab Hack:</span>
                      <span className="line-clamp-2">{prod.viralHook}</span>
                    </div>
                  )}

                  {/* 4 Modular Deliverables Checklist */}
                  <div className="space-y-1 pt-1">
                    <span className="text-[9px] font-bold uppercase tracking-wider text-[#1C1917]/60 block">
                      Includes 4 Modalities:
                    </span>
                    <div className="grid grid-cols-2 gap-1 text-[10px] text-[#1C1917]/80">
                      <div className="flex items-center gap-1">
                        <Check className="w-3 h-3 text-[#4A533E]" />
                        <span>PDF Playbook</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Check className="w-3 h-3 text-[#4A533E]" />
                        <span>Pocket Cards</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Check className="w-3 h-3 text-[#4A533E]" />
                        <span>CSV Calculator</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Check className="w-3 h-3 text-[#4A533E]" />
                        <span>Notion Hub</span>
                      </div>
                    </div>
                  </div>

                  {/* Parent Bundle Cross-Reference */}
                  {parentBundle && (
                    <div className="pt-2 border-t border-[#E5DFD5] text-[10px] text-[#1C1917]/70 flex items-center justify-between">
                      <span className="text-[#4A533E] font-medium">Part of Bundle:</span>
                      <span className="font-bold text-[#1C1917] truncate max-w-[170px]">
                        {parentBundle.name}
                      </span>
                    </div>
                  )}
                </div>

                {/* Card Action Button */}
                <div className="pt-3 border-t border-[#E5DFD5] flex items-center justify-between">
                  <span className="text-[10px] font-semibold text-[#065F46] bg-[#ECFDF5] px-2 py-0.5 border border-[#A7F3D0] rounded-xs">
                    {prod.renterSafetyRating || '100% Renter Safe'}
                  </span>

                  <button
                    onClick={() => handleProductClick(prod.id)}
                    className="text-xs font-semibold text-[#4A533E] hover:text-[#1C1917] hover:underline cursor-pointer flex items-center gap-1"
                  >
                    <span>Inspect Kit & Files</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Fourthwall Store Checkout Bumps & AOV Optimization */}
      <div className="bg-[#FAF8F5] border border-[#E5DFD5] p-6 sm:p-8 rounded-xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#E5DFD5] pb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <ShoppingBag className="w-4 h-4 text-[#4A533E]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#4A533E]">
                Fourthwall Store Integration
              </span>
            </div>
            <h3 className="font-serif text-xl sm:text-2xl text-[#1C1917] font-bold">
              1-Click Checkout Bumps & Cross-Sell Upgrades
            </h3>
            <p className="text-xs text-[#1C1917]/70">
              Low-friction $5–$7 micro-upgrades displayed at checkout on shop.smallspacehome.ca to maximize Average Order Value.
            </p>
          </div>

          <a 
            href="https://shop.smallspacehome.ca" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xs font-bold text-[#4A533E] hover:text-[#1C1917] flex items-center gap-1.5 self-start px-3 py-1.5 bg-white border border-[#E5DFD5] rounded-xs hover:border-[#4A533E] transition-colors"
          >
            <span>shop.smallspacehome.ca</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {FOURTHWALL_STORE_ARCHITECTURE.checkoutBumps.map((bump) => (
            <div key={bump.id} className="bg-white border border-[#E5DFD5] p-4 rounded-xs shadow-xs space-y-2 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-bold uppercase tracking-wider text-[#4A533E] bg-[#FAF8F5] px-2 py-0.5 border border-[#E5DFD5]">
                    Estimated Take Rate: {bump.takeRateEstimate}
                  </span>
                  <span className="text-xs font-serif font-bold text-[#1C1917]">
                    1-Click Add
                  </span>
                </div>
                <h4 className="font-serif font-bold text-sm text-[#1C1917] mt-2">
                  {bump.title}
                </h4>
                <p className="text-xs text-[#1C1917]/70 mt-1 font-sans">
                  <strong>Trigger Rule:</strong> {bump.triggerConditions}
                </p>
              </div>

              <div className="pt-2 border-t border-[#E5DFD5] text-[10px] text-[#4A533E] font-medium flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Configured directly in Fourthwall Digital Downloads checkout flow</span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

