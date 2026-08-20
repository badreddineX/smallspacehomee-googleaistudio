import React from 'react';
import { TabId } from '../types';
import { Home, Compass, Layers, Package, Sparkles, BookOpen, ShoppingBag, Calendar, DollarSign, ExternalLink, Image as ImageIcon, ChevronRight } from 'lucide-react';

interface NavbarProps {
  activeTab: TabId;
  onSelectTab: (tab: TabId) => void;
  onOpenSimulator: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, onSelectTab, onOpenSimulator }) => {
  const navItems: { id: TabId; label: string; number: string; icon: React.ElementType }[] = [
    { id: 'deliverables-photography', label: 'Deliverable Files & Photography (1–20)', number: '01', icon: ImageIcon },
    { id: 'all-products', label: 'Store Posting Kits & Studio (1–20)', number: '02', icon: Layers },
    { id: 'first-product', label: 'Product 01: SS-OS (Flagship)', number: '03', icon: Sparkles },
    { id: 'top-10', label: 'Top 10 & Catalog', number: '04', icon: Home },
    { id: 'audience', label: 'Audience & Problem Map', number: '05', icon: Compass },
    { id: 'ecosystem', label: 'Ecosystem Flow', number: '06', icon: Package },
    { id: 'flagship', label: 'Flagship Strategy', number: '07', icon: BookOpen },
    { id: 'bundles', label: 'Bundles & Physical Merch', number: '08', icon: ShoppingBag },
    { id: 'blog-funnel', label: 'Blog Funnel & CTAs', number: '09', icon: Calendar },
    { id: 'store-architecture', label: 'Fourthwall Store Layout', number: '10', icon: DollarSign },
    { id: 'roadmap', label: 'Roadmap', number: '11', icon: ExternalLink },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5] text-[#1C1917] border-b border-[#E5DFD5] shadow-xs">
      
      {/* Top Notice Bar matching smallspacehome.ca */}
      <div className="bg-[#4A533E] text-[#FAF8F5] px-4 py-1.5 text-[11px] sm:text-xs font-medium border-b border-[#38402F]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="bg-[#FAF8F5]/20 px-1.5 py-0.2 rounded-xs text-[10px] uppercase font-bold tracking-wider">
              🍁 SmallSpaceHome.ca
            </span>
            <span className="hidden sm:inline">
              Tested in a 510 sq ft Toronto Rental Apartment • Renter-Friendly Solutions
            </span>
            <span className="sm:hidden">
              Tested in 510 sq ft Toronto Rental Lab
            </span>
          </div>
          <div className="flex items-center gap-3 text-[11px]">
            <a 
              href="https://smallspacehome.ca" 
              target="_blank" 
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-white transition-colors flex items-center gap-1"
            >
              <span>Visit Main Blog</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Masthead Header */}
        <div className="flex items-center justify-between h-16 sm:h-20 border-b border-[#E5DFD5]">
          {/* Brand Masthead */}
          <div className="flex items-center gap-3.5">
            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-[#4A533E] text-[#FAF8F5] flex items-center justify-center font-serif font-bold text-base shadow-xs">
              <span>SSH</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif tracking-tight text-xl sm:text-2xl font-bold text-[#1C1917]">
                  SmallSpaceHome
                </span>
                <span className="bg-[#E5DFD5] text-[#4A533E] px-2 py-0.5 text-[9px] uppercase tracking-[0.2em] font-bold">
                  Digital OS
                </span>
              </div>
              <p className="text-[10px] sm:text-[11px] text-[#1C1917]/70 uppercase tracking-[0.15em] font-medium hidden sm:block">
                Digital Product Architecture & Spatial Systems Catalog
              </p>
            </div>
          </div>

          {/* External Links & Revenue Simulator Action */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="https://smallspacehome.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-semibold tracking-wider text-[#1C1917]/80 hover:text-[#1C1917] hidden md:flex items-center gap-1 transition-colors px-2.5 py-1.5 border border-[#E5DFD5] hover:border-[#4A533E] bg-white/70"
            >
              <span>smallspacehome.ca</span>
              <ExternalLink className="w-3 h-3 text-[#4A533E]" />
            </a>
            <a
              href="https://shop.smallspacehome.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-semibold tracking-wider text-[#4A533E] hover:text-[#1C1917] hidden md:flex items-center gap-1 transition-colors px-2.5 py-1.5 border border-[#4A533E]/30 hover:border-[#4A533E] bg-[#FAF8F5]"
            >
              <span>shop.smallspacehome.ca</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            <button
              onClick={onOpenSimulator}
              className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider bg-[#1C1917] hover:bg-[#4A533E] text-[#FAF8F5] px-3.5 py-2 transition-all cursor-pointer border border-[#1C1917] shadow-xs"
            >
              <DollarSign className="w-3.5 h-3.5 text-[#FAF8F5]" />
              <span className="hidden sm:inline">Revenue Simulator</span>
              <span className="sm:hidden">Simulator</span>
            </button>
          </div>
        </div>

        {/* Editorial Tab Bar with Smooth Horizontal Scrolling */}
        <nav className="flex space-x-1.5 overflow-x-auto no-scrollbar py-2 text-xs scroll-smooth">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id || (item.id === 'top-10' && activeTab === 'top-20');
            return (
              <button
                key={item.id}
                onClick={() => onSelectTab(item.id)}
                className={`flex items-center gap-2 px-3 py-1.5 text-xs font-medium whitespace-nowrap transition-all cursor-pointer border ${
                  isActive
                    ? 'bg-[#1C1917] text-[#FAF8F5] border-[#1C1917] shadow-xs font-semibold'
                    : 'bg-white/60 text-[#1C1917]/80 border-[#E5DFD5] hover:border-[#4A533E]/40 hover:bg-white hover:text-[#1C1917]'
                }`}
              >
                <span className={`text-[10px] font-serif font-bold ${isActive ? 'text-[#D9D3C7]' : 'text-[#4A533E]'}`}>
                  {item.number}
                </span>
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#FAF8F5]' : 'text-[#4A533E]'}`} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
