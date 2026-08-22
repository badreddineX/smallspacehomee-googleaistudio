import React, { useState } from 'react';
import { PLAYBOOK_SERIES, PlaybookMeta } from '../data/playbookSeriesData';
import { 
  downloadMasterPlaybookPDF,
  downloadPocketCardsPDF,
  downloadQuickStartChecklistPDF,
  downloadThreePDFSuite
} from '../utils/pdfGenerator';
import { getVolumeEnrichment } from '../utils/playbookEnrichmentData';
import { 
  BookOpen, 
  Download, 
  CheckCircle2, 
  ShieldCheck, 
  FileText, 
  ExternalLink, 
  Layers, 
  Sparkles, 
  CheckSquare, 
  Clock, 
  ChevronRight,
  Search,
  Printer,
  ListOrdered,
  Square,
  PenTool
} from 'lucide-react';

interface PlaybookSeriesCenterProps {
  onOpenProduct?: (productId: string) => void;
}

export const PlaybookSeriesCenter: React.FC<PlaybookSeriesCenterProps> = ({ onOpenProduct }) => {
  const [selectedVolumeId, setSelectedVolumeId] = useState<string>(PLAYBOOK_SERIES[0].id);
  const [searchQuery, setSearchQuery] = useState('');
  const [isDownloading, setIsDownloading] = useState(false);
  const [activeTab, setActiveTab] = useState<'checklist' | 'chapters' | 'license' | 'pocketCards' | 'sourcing'>('checklist');
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
  const [stageInitials, setStageInitials] = useState<Record<string, string>>({});
  const [locationZone, setLocationZone] = useState('Toronto Rental Lab — Primary Wall');
  const [measuredPayload, setMeasuredPayload] = useState('8.4');
  const [substrateType, setSubstrateType] = useState('1/2" Drywall');

  const activePlaybook: PlaybookMeta = PLAYBOOK_SERIES.find(p => p.id === selectedVolumeId) || PLAYBOOK_SERIES[0];
  const enrichment = getVolumeEnrichment(activePlaybook.id, activePlaybook.volumeNumber, activePlaybook.title, activePlaybook.category);

  const toggleCheck = (itemId: string) => {
    setCheckedItems(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  const handlePrint = () => {
    window.print();
  };

  const filteredPlaybooks = PLAYBOOK_SERIES.filter(p => {
    const q = searchQuery.toLowerCase();
    return p.title.toLowerCase().includes(q) ||
           p.subtitle.toLowerCase().includes(q) ||
           p.category.toLowerCase().includes(q) ||
           `volume ${p.volumeNumber}`.includes(q);
  });

  const handleDownloadSuite = () => {
    setIsDownloading(true);
    try {
      downloadThreePDFSuite(activePlaybook);
    } catch (err) {
      console.error('PDF generation error:', err);
    } finally {
      setTimeout(() => setIsDownloading(false), 800);
    }
  };

  const handleDownloadPDF01 = () => {
    downloadMasterPlaybookPDF(activePlaybook);
  };

  const handleDownloadPDF02 = () => {
    downloadPocketCardsPDF(activePlaybook);
  };

  const handleDownloadPDF03 = () => {
    downloadQuickStartChecklistPDF(activePlaybook);
  };

  return (
    <div className="bg-[#FAF8F5] min-h-screen text-[#1C1917] pb-16">
      {/* Header Banner */}
      <div className="bg-white border-b border-[#E5DFD5] py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="bg-[#4A533E] text-[#FAF8F5] text-[9px] uppercase tracking-[0.2em] font-bold px-2.5 py-0.5 rounded-xs">
                  Commercial Master Series
                </span>
                <span className="text-[#1C1917]/30 text-xs">•</span>
                <span className="text-xs text-[#4A533E] font-medium">11 Digital Product Volumes</span>
                <span className="text-[#1C1917]/30 text-xs">•</span>
                <span className="text-xs text-[#1C1917]/60">3-PDF Delivery Standard</span>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#1C1917] tracking-tight">
                Digital Product Playbook Series (Volumes 01–11)
              </h1>
              <p className="text-[#1C1917]/75 font-serif italic text-sm sm:text-base max-w-3xl">
                Every SmallSpaceHome volume is delivered as <strong>exactly three standalone vector PDF files</strong>: PDF 01 Master Field Playbook (25–36 pages), PDF 02 4×6" Pocket Field Cards, and PDF 03 Quick-Start Execution Checklist.
              </p>
            </div>

            {/* 3-PDF Download Action */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={handleDownloadSuite}
                disabled={isDownloading}
                className="bg-[#4A533E] hover:bg-[#38402F] text-[#FAF8F5] text-xs font-semibold px-5 py-3.5 border border-[#38402F] rounded-xs shadow-sm transition-all flex items-center justify-center gap-2.5 cursor-pointer ring-2 ring-[#4A533E]/20"
              >
                <Download className="w-4 h-4" />
                <span>{isDownloading ? 'Generating 3-PDF Suite...' : `Download 3-PDF Suite (Vol. 0${activePlaybook.volumeNumber})`}</span>
              </button>
            </div>
          </div>

          {/* Value Feature Strip: 3 Standalone PDFs */}
          <div className="mt-6 pt-6 border-t border-[#E5DFD5] grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-[#FAF8F5] border border-[#E5DFD5] p-3.5 rounded-xs flex items-start gap-3">
              <div className="w-7 h-7 bg-[#4A533E]/10 rounded-xs flex items-center justify-center text-[#4A533E] shrink-0 font-serif font-bold text-xs">
                01
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#1C1917]">PDF 01: Master Field Playbook</h4>
                <p className="text-[11px] text-[#1C1917]/70 leading-snug">Full tactical chapters (25–36 pages), formulas, license terms, and diagrams.</p>
              </div>
            </div>

            <div className="bg-[#FAF8F5] border border-[#E5DFD5] p-3.5 rounded-xs flex items-start gap-3">
              <div className="w-7 h-7 bg-[#4A533E]/10 rounded-xs flex items-center justify-center text-[#4A533E] shrink-0 font-serif font-bold text-xs">
                02
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#1C1917]">PDF 02: 4×6" Pocket Field Cards</h4>
                <p className="text-[11px] text-[#1C1917]/70 leading-snug">4 companion cards formatted for printing and cutting for fast physical job execution.</p>
              </div>
            </div>

            <div className="bg-[#FAF8F5] border border-[#E5DFD5] p-3.5 rounded-xs flex items-start gap-3">
              <div className="w-7 h-7 bg-[#4A533E]/10 rounded-xs flex items-center justify-center text-[#4A533E] shrink-0 font-serif font-bold text-xs">
                03
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#1C1917]">PDF 03: Quick-Start Checklist</h4>
                <p className="text-[11px] text-[#1C1917]/70 leading-snug">1-page operational roadmap covering pre-installation, execution, and cleanup.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Workspace Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Sidebar: 11 Volumes Navigation */}
          <div className="lg:col-span-4 space-y-4">
            
            {/* Search Input */}
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#1C1917]/40" />
              <input
                type="text"
                placeholder="Search 11 playbook volumes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-[#E5DFD5] pl-9 pr-4 py-2.5 text-xs text-[#1C1917] placeholder-[#1C1917]/40 rounded-xs focus:outline-none focus:border-[#4A533E]"
              />
            </div>

            {/* List of 11 Playbooks */}
            <div className="bg-white border border-[#E5DFD5] rounded-xs divide-y divide-[#E5DFD5] max-h-[720px] overflow-y-auto shadow-xs">
              {filteredPlaybooks.map((p) => {
                const isSelected = p.id === selectedVolumeId;
                return (
                  <button
                    key={p.id}
                    onClick={() => setSelectedVolumeId(p.id)}
                    className={`w-full text-left p-4 transition-colors cursor-pointer flex flex-col gap-1.5 ${
                      isSelected 
                        ? 'bg-[#4A533E]/5 border-l-4 border-[#4A533E]' 
                        : 'hover:bg-[#FAF8F5] border-l-4 border-transparent'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[9px] uppercase tracking-wider font-bold text-[#4A533E] bg-[#4A533E]/10 px-2 py-0.5 rounded-xs">
                        VOL 0{p.volumeNumber}
                      </span>
                      <span className="text-[10px] text-[#1C1917]/60 font-medium">
                        3 Standalone PDFs
                      </span>
                    </div>

                    <h3 className="font-serif font-bold text-xs sm:text-sm text-[#1C1917] leading-snug">
                      {p.title}
                    </h3>

                    <p className="text-[11px] text-[#1C1917]/70 line-clamp-1">
                      {p.category}
                    </p>

                    <div className="flex items-center justify-between text-[10px] text-[#1C1917]/50 pt-1">
                      <span>${p.priceCad} CAD • Value ${p.perceivedValueCad}</span>
                      <span className="text-[#4A533E] font-medium flex items-center gap-0.5">
                        Inspect <ChevronRight className="w-3 h-3" />
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Quality Standards Summary */}
            <div className="bg-white border border-[#E5DFD5] p-4 rounded-xs text-xs space-y-2">
              <span className="text-[9px] uppercase font-bold tracking-wider text-[#4A533E] block">
                SmallSpaceHome Delivery Standard
              </span>
              <ul className="text-[11px] text-[#1C1917]/70 space-y-1">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3 h-3 text-[#4A533E]" />
                  <span>PDF 01: Master Field Playbook (25–36 pages)</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3 h-3 text-[#4A533E]" />
                  <span>PDF 02: 4×6" Pocket Field Cards</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3 h-3 text-[#4A533E]" />
                  <span>PDF 03: Quick-Start Execution Checklist</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3 h-3 text-[#4A533E]" />
                  <span>100% PDF deliverables • No ZIP • No All-In-One</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Right Main Inspection & Viewer Panel */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Active Playbook Header Card */}
            <div className="bg-white border border-[#E5DFD5] p-6 sm:p-8 rounded-xs shadow-xs relative overflow-hidden">
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className="bg-[#4A533E] text-[#FAF8F5] text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-xs">
                      {activePlaybook.volumeLabel}
                    </span>
                    <span className="text-xs text-[#1C1917]/50 font-mono">
                      ISBN: {activePlaybook.isbn}
                    </span>
                  </div>

                  {/* 3 Standalone PDF Download Triggers */}
                  <div className="flex flex-wrap items-center gap-2">
                    <button
                      onClick={handleDownloadPDF01}
                      className="bg-[#1C1917] hover:bg-[#4A533E] text-white text-[11px] font-semibold px-3 py-2 rounded-xs shadow-xs transition-colors flex items-center gap-1.5 cursor-pointer"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>PDF 01 (Playbook)</span>
                    </button>
                    <button
                      onClick={handleDownloadPDF02}
                      className="bg-white hover:bg-[#FAF8F5] text-[#1C1917] text-[11px] font-semibold px-3 py-2 border border-[#E5DFD5] rounded-xs shadow-xs transition-colors flex items-center gap-1.5 cursor-pointer"
                    >
                      <Layers className="w-3.5 h-3.5 text-[#4A533E]" />
                      <span>PDF 02 (Cards)</span>
                    </button>
                    <button
                      onClick={handleDownloadPDF03}
                      className="bg-white hover:bg-[#FAF8F5] text-[#1C1917] text-[11px] font-semibold px-3 py-2 border border-[#E5DFD5] rounded-xs shadow-xs transition-colors flex items-center gap-1.5 cursor-pointer"
                    >
                      <CheckSquare className="w-3.5 h-3.5 text-[#4A533E]" />
                      <span>PDF 03 (Checklist)</span>
                    </button>
                  </div>
                </div>

                <div>
                  <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#1C1917] leading-tight">
                    {activePlaybook.title}
                  </h2>
                  <p className="text-sm font-serif italic text-[#4A533E] mt-1">
                    {activePlaybook.subtitle}
                  </p>
                </div>

                <div className="bg-[#FAF8F5] border border-[#E5DFD5] p-4 rounded-xs text-xs space-y-2">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="font-bold text-[#4A533E]">CORE DELIVERABLE PROMISE:</span>
                    <span className="text-[#1C1917]/60">3 Standalone Vector PDFs</span>
                  </div>
                  <p className="text-[#1C1917]/80 leading-relaxed font-sans">
                    {activePlaybook.promise}
                  </p>
                  <p className="text-[11px] text-[#1C1917]/60 italic">
                    Audience: {activePlaybook.audience}
                  </p>
                </div>

                {/* Navigation Tabs */}
                <div className="flex items-center border-b border-[#E5DFD5] pt-2 gap-2 sm:gap-6 overflow-x-auto">
                  <button
                    onClick={() => setActiveTab('checklist')}
                    className={`pb-3 text-xs font-semibold uppercase tracking-wider transition-colors border-b-2 whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                      activeTab === 'checklist'
                        ? 'border-[#4A533E] text-[#4A533E] font-bold'
                        : 'border-transparent text-[#1C1917]/60 hover:text-[#1C1917]'
                    }`}
                  >
                    <ListOrdered className="w-3.5 h-3.5" />
                    Quick-Start Checklist (PDF 03)
                  </button>

                  <button
                    onClick={() => setActiveTab('chapters')}
                    className={`pb-3 text-xs font-semibold uppercase tracking-wider transition-colors border-b-2 whitespace-nowrap cursor-pointer ${
                      activeTab === 'chapters'
                        ? 'border-[#4A533E] text-[#4A533E]'
                        : 'border-transparent text-[#1C1917]/60 hover:text-[#1C1917]'
                    }`}
                  >
                    Chapters & Tactics ({activePlaybook.chapters.length})
                  </button>

                  <button
                    onClick={() => setActiveTab('license')}
                    className={`pb-3 text-xs font-semibold uppercase tracking-wider transition-colors border-b-2 whitespace-nowrap cursor-pointer ${
                      activeTab === 'license'
                        ? 'border-[#4A533E] text-[#4A533E]'
                        : 'border-transparent text-[#1C1917]/60 hover:text-[#1C1917]'
                    }`}
                  >
                    Personal Use License (Page 2)
                  </button>

                  <button
                    onClick={() => setActiveTab('pocketCards')}
                    className={`pb-3 text-xs font-semibold uppercase tracking-wider transition-colors border-b-2 whitespace-nowrap cursor-pointer ${
                      activeTab === 'pocketCards'
                        ? 'border-[#4A533E] text-[#4A533E]'
                        : 'border-transparent text-[#1C1917]/60 hover:text-[#1C1917]'
                    }`}
                  >
                    4x6" Field Cards ({activePlaybook.pocketCards.length})
                  </button>

                  <button
                    onClick={() => setActiveTab('sourcing')}
                    className={`pb-3 text-xs font-semibold uppercase tracking-wider transition-colors border-b-2 whitespace-nowrap cursor-pointer ${
                      activeTab === 'sourcing'
                        ? 'border-[#4A533E] text-[#4A533E]'
                        : 'border-transparent text-[#1C1917]/60 hover:text-[#1C1917]'
                    }`}
                  >
                    Sourcing & Retailers ({activePlaybook.sourcesAndRetailers.length})
                  </button>
                </div>
              </div>
            </div>

            {/* Tab 0: Quick-Start Execution Checklist (PDF 03) */}
            {activeTab === 'checklist' && (
              <div className="space-y-6">
                {/* Action Bar */}
                <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-4 border border-[#E5DFD5] rounded-xs">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="bg-[#4A533E] text-[#FAFAF7] font-bold px-2 py-0.5 rounded-xs text-[10px] uppercase tracking-wider">
                      PDF 03
                    </span>
                    <span className="font-serif font-bold text-[#1C1917]">
                      On-Site Single-Page Field Execution Sheet
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handlePrint}
                      className="px-3 py-1.5 bg-[#FAFAF7] border border-[#E5DFD5] text-[#1C1917] text-xs font-medium rounded-xs hover:bg-[#E5DFD5]/40 transition-colors flex items-center gap-1.5 cursor-pointer"
                    >
                      <Printer className="w-3.5 h-3.5 text-[#4A533E]" />
                      <span>Print Sheet</span>
                    </button>
                    <button
                      onClick={handleDownloadPDF03}
                      className="px-3 py-1.5 bg-[#4A533E] text-white text-xs font-semibold rounded-xs hover:bg-[#3D4533] transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download PDF 03 (1-Page PDF)</span>
                    </button>
                  </div>
                </div>

                {/* Printable 1-Page Field Execution Sheet Card */}
                <div className="bg-[#FAFAF7] border-2 border-[#E5DFD5] p-6 sm:p-8 rounded-xs shadow-sm space-y-6 max-w-4xl mx-auto print:border-none print:p-0 print:bg-white">
                  {/* Top Architectural Header */}
                  <div className="border-b-2 border-[#1C1917] pb-4 space-y-2">
                    <div className="flex items-center justify-between text-[11px] font-sans font-bold tracking-widest text-[#1C1917]/70 uppercase">
                      <span>SmallSpaceHome.ca • Quick-Start Execution Checklist</span>
                      <span>Deliverable PDF 03 • Vol 0{activePlaybook.volumeNumber}</span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#1C1917]">
                      {activePlaybook.title}: On-Site Field Execution Checklist
                    </h2>
                    <p className="text-xs text-[#1C1917]/70 font-sans">
                      Single-Page Operational Guide • Tested in 510 sq ft Toronto Rental Lab • Execute all steps directly on site without reopening Master Playbook
                    </p>
                  </div>

                  {/* 4-Stage Chronological Workflow Ribbon */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
                    <div className="bg-[#C4A882]/25 border border-[#C4A882] p-2 rounded-xs font-bold text-[#1C1917]">
                      1. BEFORE (AUDIT)
                    </div>
                    <div className="bg-[#8FAF8A]/25 border border-[#8FAF8A] p-2 rounded-xs font-bold text-[#1C1917]">
                      2. DURING (INSTALL)
                    </div>
                    <div className="bg-[#C4A882]/25 border border-[#C4A882] p-2 rounded-xs font-bold text-[#1C1917]">
                      3. AFTER (VERIFY)
                    </div>
                    <div className="bg-[#4A533E] text-white p-2 rounded-xs font-bold">
                      4. REMOVE (RESTORE)
                    </div>
                  </div>

                  {/* 4 Chronological Execution Stages */}
                  <div className="space-y-4">
                    {enrichment.executionChecklist.map((section, sIdx) => {
                      const stageAccents = [
                        { border: 'border-l-[#C4A882]', badge: 'bg-[#C4A882]/30 text-[#1C1917]', name: 'STAGE 1: BEFORE' },
                        { border: 'border-l-[#8FAF8A]', badge: 'bg-[#8FAF8A]/30 text-[#1C1917]', name: 'STAGE 2: DURING' },
                        { border: 'border-l-[#C4A882]', badge: 'bg-[#C4A882]/30 text-[#1C1917]', name: 'STAGE 3: AFTER' },
                        { border: 'border-l-[#4A533E]', badge: 'bg-[#4A533E] text-white', name: 'STAGE 4: REMOVE' },
                      ];
                      const accent = stageAccents[sIdx] || stageAccents[0];

                      return (
                        <div
                          key={sIdx}
                          className={`bg-white border border-[#E5DFD5] ${accent.border} border-l-4 p-4 rounded-xs shadow-xs space-y-3`}
                        >
                          <div className="flex items-center justify-between border-b border-[#E5DFD5]/60 pb-2">
                            <div className="flex items-center gap-2">
                              <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-xs ${accent.badge}`}>
                                {accent.name}
                              </span>
                              <h3 className="font-serif font-bold text-sm text-[#1C1917]">
                                {section.title.replace(/^Stage \d+:\s*/i, '')}
                              </h3>
                            </div>
                            <span className="text-[10px] text-[#1C1917]/50 font-mono">
                              Phase 0{sIdx + 1}/04
                            </span>
                          </div>

                          <div className="space-y-2 pt-1">
                            {section.items.map((item, iIdx) => {
                              const itemId = `vol${activePlaybook.volumeNumber}-s${sIdx}-i${iIdx}`;
                              const isChecked = !!checkedItems[itemId];

                              return (
                                <div
                                  key={iIdx}
                                  onClick={() => toggleCheck(itemId)}
                                  className={`flex items-start gap-3 p-1.5 rounded-xs transition-colors cursor-pointer group ${
                                    isChecked ? 'bg-[#8FAF8A]/15' : 'hover:bg-[#FAF8F5]'
                                  }`}
                                >
                                  {/* Printable Real Square Checkbox Element */}
                                  <div className="mt-0.5 w-4 h-4 border border-[#1C1917] rounded-none flex items-center justify-center bg-white shrink-0 group-hover:border-[#4A533E]">
                                    {isChecked && (
                                      <div className="w-2.5 h-2.5 bg-[#4A533E]" />
                                    )}
                                  </div>
                                  <span className={`text-xs leading-relaxed ${
                                    isChecked ? 'text-[#1C1917]/60 line-through' : 'text-[#1C1917]'
                                  }`}>
                                    {item}
                                  </span>
                                </div>
                              );
                            })}
                          </div>

                          {/* Discrete Stage Checkpoint Sign-Off Line */}
                          <div className="pt-2 border-t border-[#E5DFD5] flex flex-wrap items-center justify-between text-[11px] text-[#1C1917]/70 gap-2">
                            <label className="flex items-center gap-1.5 font-bold text-[#4A533E]">
                              <input
                                type="checkbox"
                                checked={!!checkedItems[`stage-signoff-${sIdx}`]}
                                onChange={() => toggleCheck(`stage-signoff-${sIdx}`)}
                                className="w-3.5 h-3.5 accent-[#4A533E]"
                              />
                              Stage 0{sIdx + 1} Sign-Off Checkpoint Verified
                            </label>
                            <div className="flex items-center gap-2">
                              <span>Initials:</span>
                              <input
                                type="text"
                                placeholder="____"
                                value={stageInitials[sIdx] || ''}
                                onChange={(e) => setStageInitials(prev => ({ ...prev, [sIdx]: e.target.value }))}
                                className="w-16 px-1.5 py-0.5 bg-white border border-[#E5DFD5] text-[11px] rounded-none focus:outline-none focus:border-[#4A533E]"
                              />
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Master On-Site Field Verification & Sign-Off Strip */}
                  <div className="bg-white border-2 border-[#4A533E] p-4 rounded-xs space-y-3">
                    <div className="bg-[#4A533E] text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 -mx-4 -mt-4 rounded-t-xs">
                      Master On-Site Field Verification & Deposit Defense Sign-Off
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs pt-1">
                      <div>
                        <label className="block text-[10px] uppercase font-bold text-[#1C1917]/60">
                          Room / Spatial Zone
                        </label>
                        <input
                          type="text"
                          value={locationZone}
                          onChange={(e) => setLocationZone(e.target.value)}
                          className="w-full mt-1 px-2 py-1 bg-[#FAF8F5] border border-[#E5DFD5] text-xs rounded-none focus:outline-none focus:border-[#4A533E]"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] uppercase font-bold text-[#1C1917]/60">
                          Measured Tare Payload (lbs)
                        </label>
                        <input
                          type="text"
                          value={measuredPayload}
                          onChange={(e) => setMeasuredPayload(e.target.value)}
                          className="w-full mt-1 px-2 py-1 bg-[#FAF8F5] border border-[#E5DFD5] text-xs rounded-none focus:outline-none focus:border-[#4A533E]"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] uppercase font-bold text-[#1C1917]/60">
                          Target Substrate
                        </label>
                        <select
                          value={substrateType}
                          onChange={(e) => setSubstrateType(e.target.value)}
                          className="w-full mt-1 px-2 py-1 bg-[#FAF8F5] border border-[#E5DFD5] text-xs rounded-none focus:outline-none focus:border-[#4A533E]"
                        >
                          <option>1/2" Modern Drywall</option>
                          <option>Heritage Lathe & Plaster</option>
                          <option>Ceramic / Porcelain Tile</option>
                          <option>Solid Wood / Cabinet Side</option>
                          <option>Hollow Core Door</option>
                        </select>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-[#E5DFD5] flex flex-wrap items-center justify-between text-[11px] text-[#1C1917]/70 gap-2">
                      <div className="flex items-center gap-2">
                        <PenTool className="w-3.5 h-3.5 text-[#4A533E]" />
                        <span>Inspector / Tenant Sign-Off: ____________________</span>
                      </div>
                      <span className="font-mono text-[10px]">
                        Date: {new Date().toLocaleDateString('en-CA')}
                      </span>
                    </div>
                  </div>

                  {/* Discreet Footer */}
                  <div className="text-center text-[10px] text-[#1C1917]/50 pt-2 border-t border-[#E5DFD5] flex flex-wrap items-center justify-between">
                    <span>SmallSpaceHome.ca • Field Execution Sheet • Vol 0{activePlaybook.volumeNumber}</span>
                    <span>Single-Page Operational Reference • No Resale Allowed</span>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 1: Chapters & Content Details */}
            {activeTab === 'chapters' && (
              <div className="space-y-6">
                {activePlaybook.chapters.map((ch) => (
                  <div key={ch.chapterNumber} className="bg-white border border-[#E5DFD5] p-6 rounded-xs shadow-xs space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#E5DFD5] pb-3">
                      <div className="flex items-center gap-2">
                        <span className="bg-[#4A533E] text-white text-[9px] uppercase font-bold px-2 py-0.5 rounded-xs">
                          Chapter 0{ch.chapterNumber}
                        </span>
                        <h3 className="font-serif font-bold text-base text-[#1C1917]">
                          {ch.title}
                        </h3>
                      </div>
                      <span className="text-[11px] text-[#1C1917]/60 flex items-center gap-1 font-medium">
                        <Clock className="w-3 h-3 text-[#4A533E]" />
                        {ch.readingMinutes} min read
                      </span>
                    </div>

                    <p className="text-xs font-serif italic text-[#4A533E]">
                      {ch.subtitle}
                    </p>

                    <div className="text-xs text-[#1C1917]/80 leading-relaxed whitespace-pre-line font-sans bg-[#FAF8F5] p-4 rounded-xs border border-[#E5DFD5]">
                      {ch.content}
                    </div>

                    {/* Key Takeaways */}
                    {ch.keyTakeaways && ch.keyTakeaways.length > 0 && (
                      <div className="bg-[#4A533E]/5 border border-[#4A533E]/20 p-4 rounded-xs space-y-2">
                        <span className="text-[9px] uppercase font-bold tracking-wider text-[#4A533E] block">
                          Key Architectural Takeaways:
                        </span>
                        <ul className="text-xs text-[#1C1917] space-y-1.5">
                          {ch.keyTakeaways.map((tk, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 bg-[#4A533E] rounded-full mt-1.5 shrink-0" />
                              <span>{tk}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Step-by-Step Checklist */}
                    {ch.checklistItems && ch.checklistItems.length > 0 && (
                      <div className="space-y-2 pt-1">
                        <span className="text-[9px] uppercase font-bold tracking-wider text-[#1C1917]/70 block">
                          Tactical Execution Checklist:
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {ch.checklistItems.map((item, idx) => (
                            <div key={idx} className="flex items-start gap-2 bg-white border border-[#E5DFD5] p-2.5 rounded-xs text-[11px] text-[#1C1917]">
                              <CheckSquare className="w-3.5 h-3.5 text-[#4A533E] shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Tab 2: Mandatory Personal Use License */}
            {activeTab === 'license' && (
              <div className="bg-white border border-[#E5DFD5] p-6 sm:p-8 rounded-xs shadow-xs space-y-6">
                <div className="border-b border-[#E5DFD5] pb-4">
                  <span className="text-[9px] uppercase font-bold tracking-widest text-[#4A533E] block">
                    Page 2 Legal Deliverable
                  </span>
                  <h3 className="font-serif font-bold text-lg text-[#1C1917]">
                    Commercial Notice & Personal Use License
                  </h3>
                </div>

                <div className="bg-[#FAF8F5] border-l-4 border-[#4A533E] p-4 text-xs space-y-3 text-[#1C1917]">
                  <p className="font-bold text-[#4A533E]">
                    TERMS OF USE & DIGITAL RESALE PROTECTION
                  </p>
                  <p className="leading-relaxed">
                    <strong>Grant of License:</strong> SmallSpaceHome Inc. grants the purchaser a single-user, non-exclusive, non-transferable Personal Use License for this Digital Product Playbook Kit.
                  </p>
                  <p className="leading-relaxed">
                    <strong>Intellectual Property:</strong> The buyer does NOT acquire ownership of any underlying trademarks, patents, proprietary formulas, or copyright assets. All content remains the exclusive intellectual property of SmallSpaceHome Inc.
                  </p>
                  <p className="leading-relaxed">
                    <strong>Digital Resale Restriction:</strong> You may NOT resell, sub-license, distribute, redistribute, bundle, or share this PDF document or its component files in whole or in part across any digital marketplace (e.g. Gumroad, Etsy, Shopify, Patreon) or file-sharing network.
                  </p>
                  <p className="leading-relaxed">
                    <strong>Derivative Works:</strong> You may not reverse-engineer, decompile, transcribe, or repackage this guide to create competing commercial digital products or AI training corpora.
                  </p>
                </div>

                <div className="border border-[#E5DFD5] p-4 rounded-xs text-xs space-y-2">
                  <h4 className="font-bold text-[#1C1917] flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#4A533E]" />
                    Structural & Tenant Disclaimer
                  </h4>
                  <p className="text-[11px] text-[#1C1917]/70 leading-relaxed">
                    The techniques, mounting hardware recommendations, load capacities, and legal guidelines provided in this publication are documented based on real-world testing in standard North American rental drywall construction. Building construction methods, wall anchor substrates, electrical conduits, and provincial/state residential tenancy laws vary. Always test fasteners in inconspicuous test spots.
                  </p>
                </div>
              </div>
            )}

            {/* Tab 3: Pocket Companion Field Cards */}
            {activeTab === 'pocketCards' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {activePlaybook.pocketCards.map((card, idx) => (
                  <div key={idx} className="bg-white border-2 border-[#4A533E] p-5 rounded-xs shadow-xs space-y-3">
                    <div className="border-b border-[#E5DFD5] pb-2">
                      <span className="text-[9px] uppercase font-bold tracking-wider text-[#4A533E] block">
                        Printable 4x6" Field Card 0{idx + 1}
                      </span>
                      <h4 className="font-serif font-bold text-sm text-[#1C1917]">
                        {card.title}
                      </h4>
                      <p className="text-[11px] font-serif italic text-[#1C1917]/60">
                        {card.description}
                      </p>
                    </div>

                    <ul className="text-xs text-[#1C1917] space-y-2">
                      {card.bulletPoints.map((bp, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-[#4A533E] rounded-full mt-1.5 shrink-0" />
                          <span className="leading-snug">{bp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {/* Tab 4: Verified Sourcing Matrix */}
            {activeTab === 'sourcing' && (
              <div className="bg-white border border-[#E5DFD5] p-6 rounded-xs shadow-xs space-y-4">
                <div className="border-b border-[#E5DFD5] pb-3">
                  <h3 className="font-serif font-bold text-base text-[#1C1917]">
                    Verified Canadian Retailers & Hardware Sourcing
                  </h3>
                  <p className="text-xs font-serif italic text-[#4A533E]">
                    Tested in the 510 sq ft Toronto Rental Lab
                  </p>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="bg-[#4A533E] text-[#FAF8F5]">
                        <th className="p-2.5 font-bold">Category</th>
                        <th className="p-2.5 font-bold">Verified Retailer</th>
                        <th className="p-2.5 font-bold">Recommended Model / SKU</th>
                        <th className="p-2.5 font-bold">Verified Source</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E5DFD5]">
                      {activePlaybook.sourcesAndRetailers.map((item, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-[#FAF8F5]'}>
                          <td className="p-2.5 font-medium text-[#1C1917]">{item.category}</td>
                          <td className="p-2.5 text-[#1C1917]/80">{item.retailer}</td>
                          <td className="p-2.5 text-[#1C1917]/80">{item.recommendedItems}</td>
                          <td className="p-2.5">
                            <a
                              href={item.webUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[#4A533E] hover:text-[#1C1917] underline flex items-center gap-1 font-semibold"
                            >
                              <span>Verify Link</span>
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

          </div>

        </div>
      </div>
    </div>
  );
};
