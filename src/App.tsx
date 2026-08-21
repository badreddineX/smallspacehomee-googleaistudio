import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { PlaybookSeriesCenter } from './components/PlaybookSeriesCenter';
import { DeliverablesAndPhotographyCenter } from './components/DeliverablesAndPhotographyCenter';
import { AllProductsStudio } from './components/AllProductsStudio';
import { FirstProductExperience } from './components/FirstProductExperience';
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
import { TrendingUp, ExternalLink } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabId>('playbooks');
  const [selectedStudioProductId, setSelectedStudioProductId] = useState<string>('flagship-ss-os');
  const [isSimulatorOpen, setIsSimulatorOpen] = useState(false);

  const handleLaunchProductStudio = (productId: string) => {
    setSelectedStudioProductId(productId);
    setActiveTab('all-products');
  };

  const handleOpenDeliverables = (productId: string) => {
    setSelectedStudioProductId(productId);
    setActiveTab('deliverables-photography');
  };

  const renderActiveSection = () => {
    switch (activeTab) {
      case 'playbooks':
        return <PlaybookSeriesCenter onOpenProduct={handleLaunchProductStudio} />;
      case 'deliverables-photography':
        return (
          <DeliverablesAndPhotographyCenter 
            initialProductId={selectedStudioProductId} 
            onOpenStoreKit={handleLaunchProductStudio}
          />
        );
      case 'all-products':
        return <AllProductsStudio initialProductId={selectedStudioProductId} />;
      case 'first-product':
        return <FirstProductExperience />;
      case 'audience':
        return <AudienceSection />;
      case 'top-20':
      case 'top-10':
        return (
          <ProductCatalog 
            onSelectFlagship={() => handleLaunchProductStudio('flagship-ss-os')}
            onSelectProductStudio={handleLaunchProductStudio}
          />
        );
      case 'ecosystem':
        return <EcosystemFlow />;
      case 'flagship':
        return <FlagshipDeepDive onOpenLiveProduct={() => handleLaunchProductStudio('flagship-ss-os')} />;
      case 'bundles':
        return <BundleArchitecture />;
      case 'blog-funnel':
        return <BlogFunnelEngine />;
      case 'store-architecture':
        return <StoreArchitecture />;
      case 'roadmap':
        return <ProductionRoadmap />;
      default:
        return (
          <DeliverablesAndPhotographyCenter 
            initialProductId={selectedStudioProductId} 
            onOpenStoreKit={handleLaunchProductStudio}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1C1917] flex flex-col font-sans selection:bg-[#4A533E] selection:text-[#FAF8F5]">
      {/* Top Main Navigation */}
      <Navbar
        activeTab={activeTab}
        onSelectTab={setActiveTab}
        onOpenSimulator={() => setIsSimulatorOpen(true)}
      />

      {/* Hero Brand Context Banner - Warm Editorial Style */}
      <div className="bg-[#FAF8F5] border-b border-[#E5DFD5] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-9">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            
            <div className="space-y-3 max-w-3xl">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-block bg-[#4A533E] text-[#FAF8F5] px-2.5 py-0.5 text-[9px] uppercase tracking-[0.2em] font-bold rounded-xs">
                  SmallSpaceHome.ca • Digital Systems
                </span>
                <span className="text-[#1C1917]/30 text-xs hidden sm:inline">•</span>
                <a
                  href="https://smallspacehome.ca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#4A533E] hover:text-[#1C1917] underline underline-offset-4 decoration-[#4A533E]/40 hover:decoration-[#1C1917] transition-colors uppercase tracking-wider font-semibold flex items-center gap-1"
                >
                  <span>Visit smallspacehome.ca</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <span className="text-[#1C1917]/30 text-xs hidden sm:inline">•</span>
                <span className="text-xs text-[#1C1917]/70 font-medium">
                  Tested in a 510 sq ft Toronto Rental Apartment
                </span>
              </div>

              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-[#1C1917] leading-tight">
                High-Value Digital Products for Small-Space Living
              </h1>

              <p className="text-[#1C1917]/80 text-sm sm:text-base leading-relaxed max-w-2xl font-serif italic">
                Architectural layout calculators, renter-safe mounting blueprints, legal tenant notice templates, and Notion operating systems designed specifically for urban apartments under 800 sq ft.
              </p>
            </div>

            {/* Strategic Metrics Bar */}
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 self-start lg:self-center">
              <div className="bg-white px-4 py-3 border border-[#E5DFD5] text-xs min-w-[130px] shadow-xs rounded-xs">
                <span className="text-[#4A533E] block text-[9px] uppercase font-bold tracking-[0.15em]">Catalog Scope</span>
                <span className="text-[#1C1917] font-serif font-bold text-lg">20 Products</span>
                <span className="text-[#4A533E] text-[10px] block mt-0.5 font-medium">Full Master Bundles</span>
              </div>

              <div className="bg-white px-4 py-3 border border-[#E5DFD5] text-xs min-w-[130px] shadow-xs rounded-xs">
                <span className="text-[#4A533E] block text-[9px] uppercase font-bold tracking-[0.15em]">Flagship Price</span>
                <span className="text-[#1C1917] font-serif font-bold text-lg">$79 CAD</span>
                <span className="text-[#1C1917]/60 text-[10px] block mt-0.5 font-medium">SS-OS Master Suite</span>
              </div>

              <button
                onClick={() => setIsSimulatorOpen(true)}
                className="bg-[#1C1917] hover:bg-[#4A533E] text-[#FAF8F5] px-4 py-3 font-medium text-xs shadow-xs transition-all flex flex-col justify-center items-start min-w-[135px] cursor-pointer border border-[#1C1917] rounded-xs"
              >
                <span className="text-[#D9D3C7] text-[9px] uppercase font-bold tracking-[0.15em] flex items-center gap-1">
                  <TrendingUp className="w-3 h-3 text-[#FAF8F5]" />
                  Interactive Tool
                </span>
                <span className="font-serif font-bold text-base text-white">Revenue Model</span>
                <span className="text-[#D9D3C7] text-[10px]">Simulate Projections →</span>
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 w-full">
        {renderActiveSection()}
      </main>

      {/* Footer matching smallspacehome.ca */}
      <footer className="bg-[#FAF8F5] border-t border-[#E5DFD5] py-8 text-[#1C1917]/70 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#4A533E]" />
            <span className="font-serif text-[#1C1917] font-bold text-sm">SmallSpaceHome.ca</span>
            <span className="text-[#1C1917]/50">• Rental Organization & Digital Systems</span>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-[#1C1917]/80 font-medium">
            <button
              onClick={() => setActiveTab('deliverables-photography')}
              className="hover:text-[#4A533E] transition-colors cursor-pointer tracking-wider text-[11px]"
            >
              Deliverables & Photos
            </button>
            <button
              onClick={() => setActiveTab('all-products')}
              className="hover:text-[#4A533E] transition-colors cursor-pointer tracking-wider text-[11px]"
            >
              Store Posting Kits
            </button>
            <button
              onClick={() => setActiveTab('top-10')}
              className="hover:text-[#4A533E] transition-colors cursor-pointer tracking-wider text-[11px]"
            >
              Top 10 Catalog
            </button>
            <button
              onClick={() => setActiveTab('flagship')}
              className="hover:text-[#4A533E] transition-colors cursor-pointer tracking-wider text-[11px]"
            >
              Flagship Strategy
            </button>
            <a
              href="https://smallspacehome.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#4A533E] hover:underline flex items-center gap-1"
            >
              <span>smallspacehome.ca</span>
              <ExternalLink className="w-3 h-3" />
            </a>
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
