import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { AudienceSection } from './components/AudienceSection';
import { ProductCatalog } from './components/ProductCatalog';
import { EcosystemFlow } from './components/EcosystemFlow';
import { FlagshipDeepDive } from './components/FlagshipDeepDive';
import { BundleArchitecture } from './components/BundleArchitecture';
import { BlogFunnelEngine } from './components/BlogFunnelEngine';
import { StoreArchitecture } from './components/StoreArchitecture';
import { ProductionRoadmap } from './components/ProductionRoadmap';
import { RevenueSimulator } from './components/RevenueSimulator';
import { TabId } from './types';
import { Sparkles, ArrowRight, ShieldCheck, ShoppingBag, BookOpen, Layers, Star, TrendingUp, Calendar, HelpCircle } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabId>('top-10');
  const [isSimulatorOpen, setIsSimulatorOpen] = useState(false);

  const renderActiveSection = () => {
    switch (activeTab) {
      case 'audience':
        return <AudienceSection />;
      case 'top-20':
      case 'top-10':
        return <ProductCatalog onSelectFlagship={() => setActiveTab('flagship')} />;
      case 'ecosystem':
        return <EcosystemFlow />;
      case 'flagship':
        return <FlagshipDeepDive />;
      case 'bundles':
        return <BundleArchitecture />;
      case 'blog-funnel':
        return <BlogFunnelEngine />;
      case 'store-architecture':
        return <StoreArchitecture />;
      case 'roadmap':
        return <ProductionRoadmap />;
      default:
        return <ProductCatalog onSelectFlagship={() => setActiveTab('flagship')} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#1A1A1A] flex flex-col font-sans selection:bg-[#5A5A40] selection:text-[#FAF9F6]">
      {/* Top Main Navigation */}
      <Navbar
        activeTab={activeTab}
        onSelectTab={setActiveTab}
        onOpenSimulator={() => setIsSimulatorOpen(true)}
      />

      {/* Hero Brand Context Banner - Editorial Masthead */}
      <div className="bg-[#FAF9F6] border-b border-[#1A1A1A] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            
            <div className="space-y-3 max-w-3xl">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-block bg-[#5A5A40] text-white px-2.5 py-0.5 text-[9px] uppercase tracking-[0.2em] font-bold">
                  Digital Product Strategy & Ecosystem
                </span>
                <span className="text-[#1A1A1A]/40 text-xs hidden sm:inline">•</span>
                <a
                  href="https://smallspacehome.ca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#5A5A40] hover:text-[#1A1A1A] underline underline-offset-4 decoration-[#5A5A40]/40 hover:decoration-[#1A1A1A] transition-colors uppercase tracking-wider font-semibold"
                >
                  smallspacehome.ca
                </a>
                <span className="text-[#1A1A1A]/40 text-xs hidden sm:inline">•</span>
                <a
                  href="https://shop.smallspacehome.ca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#5A5A40] hover:text-[#1A1A1A] underline underline-offset-4 decoration-[#5A5A40]/40 hover:decoration-[#1A1A1A] transition-colors uppercase tracking-wider font-semibold"
                >
                  shop.smallspacehome.ca (Fourthwall)
                </a>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-[#1A1A1A] leading-tight">
                Engineering a Premium Digital Ecosystem for Small-Space Dwellers
              </h1>

              <p className="text-[#1A1A1A]/80 text-sm sm:text-base leading-relaxed max-w-2xl font-serif italic">
                Transitioning SmallSpaceHome beyond coffee mugs and wall art into high-utility digital tools, automated calculators, Notion operating hubs, and high-AOV product suites.
              </p>
            </div>

            {/* Quick Strategic Metrics Bar - Editorial Cards */}
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 self-start lg:self-center">
              <div className="bg-white px-4 py-3.5 border border-[#1A1A1A] text-xs min-w-[135px] shadow-[2px_2px_0_0_#1A1A1A]">
                <span className="text-[#5A5A40] block text-[9px] uppercase font-bold tracking-[0.2em]">Top 10 Build List</span>
                <span className="text-[#1A1A1A] font-serif font-bold text-lg">10 Selected</span>
                <span className="text-[#5A5A40] text-[10px] block mt-0.5 font-medium">Scored out of 140</span>
              </div>

              <div className="bg-white px-4 py-3.5 border border-[#1A1A1A] text-xs min-w-[135px] shadow-[2px_2px_0_0_#1A1A1A]">
                <span className="text-[#5A5A40] block text-[9px] uppercase font-bold tracking-[0.2em]">Flagship Tier</span>
                <span className="text-[#1A1A1A] font-serif font-bold text-lg">$79 – $97 CAD</span>
                <span className="text-[#1A1A1A]/60 text-[10px] block mt-0.5 font-medium">SS-OS Suite</span>
              </div>

              <button
                onClick={() => setIsSimulatorOpen(true)}
                className="bg-[#1A1A1A] hover:bg-[#5A5A40] text-[#FAF9F6] px-4 py-3.5 font-medium text-xs shadow-[2px_2px_0_0_#5A5A40] transition-all flex flex-col justify-center items-start min-w-[135px] cursor-pointer border border-[#1A1A1A]"
              >
                <span className="text-[#A0A090] text-[9px] uppercase font-bold tracking-[0.2em] flex items-center gap-1">
                  <TrendingUp className="w-3 h-3 text-[#FAF9F6]" />
                  Live Simulator
                </span>
                <span className="font-serif font-bold text-base text-white">Model Revenue</span>
                <span className="text-[#A0A090] text-[10px]">Interactive Tool →</span>
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        {renderActiveSection()}
      </main>

      {/* Footer - Editorial Style */}
      <footer className="bg-[#FAF9F6] border-t border-[#1A1A1A] py-8 text-[#1A1A1A]/70 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 bg-[#5A5A40]" />
            <span className="font-serif text-[#1A1A1A] font-bold text-sm">SmallSpaceHome Digital Product Blueprint</span>
            <span className="text-[#1A1A1A]/50">• Fourthwall Store & Blog Growth</span>
          </div>

          <div className="flex items-center gap-4 text-[#1A1A1A]/80 font-medium">
            <button
              onClick={() => setActiveTab('top-10')}
              className="hover:text-[#1A1A1A] transition-colors cursor-pointer uppercase tracking-wider text-[11px]"
            >
              Top 10 Build List
            </button>
            <button
              onClick={() => setActiveTab('flagship')}
              className="hover:text-[#1A1A1A] transition-colors cursor-pointer uppercase tracking-wider text-[11px]"
            >
              Flagship SS-OS
            </button>
            <button
              onClick={() => setActiveTab('bundles')}
              className="hover:text-[#1A1A1A] transition-colors cursor-pointer uppercase tracking-wider text-[11px]"
            >
              Bundles
            </button>
            <button
              onClick={() => setActiveTab('roadmap')}
              className="hover:text-[#1A1A1A] transition-colors cursor-pointer uppercase tracking-wider text-[11px]"
            >
              Launch Roadmap
            </button>
          </div>
        </div>
      </footer>

      {/* Revenue Simulator Modal */}
      {isSimulatorOpen && (
        <RevenueSimulator onClose={() => setIsSimulatorOpen(false)} />
      )}
    </div>
  );
}
