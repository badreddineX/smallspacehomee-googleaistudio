import React from 'react';
import { TabId } from '../types';
import { Home, Compass, Layers, Package, Sparkles, BookOpen, ShoppingBag, Calendar, DollarSign, ExternalLink, Image as ImageIcon } from 'lucide-react';

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
    <header className="sticky top-0 z-40 bg-[#FAF9F6] text-[#1A1A1A] border-b border-[#1A1A1A] shadow-[0_2px_0_0_#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Masthead Header */}
        <div className="flex items-center justify-between h-16 sm:h-20 border-b border-[#1A1A1A]/15">
          {/* Brand Masthead */}
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 bg-[#1A1A1A] text-[#FAF9F6] border border-[#1A1A1A] flex items-center justify-center font-serif font-black text-base shadow-sm">
              <span>SSH</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif tracking-tight text-xl sm:text-2xl font-bold text-[#1A1A1A]">
                  SmallSpaceHome
                </span>
                <span className="bg-[#5A5A40] text-white px-2 py-0.5 text-[9px] uppercase tracking-[0.2em] font-bold">
                  Digital OS
                </span>
              </div>
              <p className="text-[10px] sm:text-[11px] text-[#1A1A1A]/70 uppercase tracking-[0.15em] font-semibold hidden sm:block">
                Strategic Digital Product Architecture & Monetization Engine
              </p>
            </div>
          </div>

          {/* External Links & Revenue Simulator Action */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="https://smallspacehome.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-semibold uppercase tracking-wider text-[#1A1A1A]/80 hover:text-[#1A1A1A] hidden md:flex items-center gap-1 transition-colors px-2.5 py-1.5 border border-[#1A1A1A]/20 hover:border-[#1A1A1A] bg-white/70"
            >
              <span>smallspacehome.ca</span>
              <ExternalLink className="w-3 h-3 text-[#5A5A40]" />
            </a>
            <a
              href="https://shop.smallspacehome.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-semibold uppercase tracking-wider text-[#5A5A40] hover:text-[#1A1A1A] hidden md:flex items-center gap-1 transition-colors px-2.5 py-1.5 border border-[#5A5A40]/40 hover:border-[#5A5A40] bg-[#FAF9F6]"
            >
              <span>shop.smallspacehome.ca</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            <button
              onClick={onOpenSimulator}
              className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider bg-[#1A1A1A] hover:bg-[#5A5A40] text-[#FAF9F6] px-3.5 py-2 transition-all cursor-pointer border border-[#1A1A1A] shadow-[2px_2px_0_0_#1A1A1A]"
            >
              <DollarSign className="w-3.5 h-3.5 text-[#FAF9F6]" />
              <span>Revenue Simulator</span>
            </button>
          </div>
        </div>

        {/* Editorial Tab Bar */}
        <nav className="flex space-x-1 overflow-x-auto no-scrollbar py-2 text-xs">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id || (item.id === 'top-10' && activeTab === 'top-20');
            return (
              <button
                key={item.id}
                onClick={() => onSelectTab(item.id)}
                className={`flex items-center gap-2 px-3 py-1.5 text-xs font-medium whitespace-nowrap transition-all cursor-pointer border ${
                  isActive
                    ? 'bg-[#1A1A1A] text-[#FAF9F6] border-[#1A1A1A] shadow-sm font-semibold'
                    : 'bg-transparent text-[#1A1A1A]/80 border-transparent hover:border-[#1A1A1A]/30 hover:bg-[#F2F1EC] hover:text-[#1A1A1A]'
                }`}
              >
                <span className={`text-[10px] font-serif font-bold ${isActive ? 'text-[#A0A090]' : 'text-[#5A5A40]'}`}>
                  {item.number}
                </span>
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#FAF9F6]' : 'text-[#5A5A40]'}`} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

