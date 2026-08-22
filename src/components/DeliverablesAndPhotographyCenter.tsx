import React, { useState } from 'react';
import { TOP_20_PRODUCTS } from '../data/strategyData';
import { getProductAssetBundle, DetailedDeliverableFile } from '../data/productAssetsData';
import { PLAYBOOK_SERIES, PlaybookMeta } from '../data/playbookSeriesData';
import { 
  downloadValidPDF, 
  downloadMasterPlaybookPDF,
  downloadPocketCardsPDF,
  downloadQuickStartChecklistPDF,
  downloadThreePDFSuite
} from '../utils/pdfGenerator';
import { EditorialPdfViewer } from './EditorialPdfViewer';
import { 
  Download, 
  Copy, 
  Check, 
  FileText, 
  Image as ImageIcon, 
  Sparkles, 
  Maximize2, 
  ShieldCheck, 
  Compass, 
  ArrowRight,
  Printer,
  FileCheck2,
  CheckCircle2,
  Layers,
  Search
} from 'lucide-react';

interface DeliverablesAndPhotographyCenterProps {
  initialProductId?: string;
  onOpenStoreKit?: (productId: string) => void;
}

export const DeliverablesAndPhotographyCenter: React.FC<DeliverablesAndPhotographyCenterProps> = ({
  initialProductId = 'kit-zero-damage-mounting',
  onOpenStoreKit
}) => {
  const [selectedProductId, setSelectedProductId] = useState<string>(initialProductId);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFileId, setSelectedFileId] = useState<string | null>(null);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [isPhotoZoomed, setIsPhotoZoomed] = useState(false);

  const activeProduct = TOP_20_PRODUCTS.find(p => p.id === selectedProductId) || TOP_20_PRODUCTS[0];
  const assetBundle = getProductAssetBundle(selectedProductId);

  const activeFile = assetBundle.files.find(f => f.id === selectedFileId) || assetBundle.files[0];

  const matchedPlaybook: PlaybookMeta = PLAYBOOK_SERIES.find(p => p.volumeNumber === activeProduct.rank) || PLAYBOOK_SERIES[0];

  const filteredProducts = TOP_20_PRODUCTS.filter(p => {
    const query = searchQuery.toLowerCase();
    return p.title.toLowerCase().includes(query) || 
           p.blogCategory.toLowerCase().includes(query) ||
           p.targetProblem.toLowerCase().includes(query);
  });

  const handleCopy = (content: string, key: string) => {
    navigator.clipboard.writeText(content);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleDownloadSingleFile = (file: DetailedDeliverableFile) => {
    const fileId = file.id.toLowerCase();
    const fileName = file.fileName.toLowerCase();

    if (fileId.includes('pdf-01') || fileName.includes('master_field_playbook') || fileId.endsWith('-1')) {
      downloadMasterPlaybookPDF(matchedPlaybook);
      return;
    }

    if (fileId.includes('pdf-02') || fileName.includes('pocket_field_cards') || fileId.endsWith('-2')) {
      downloadPocketCardsPDF(matchedPlaybook);
      return;
    }

    if (fileId.includes('pdf-03') || fileName.includes('quick_start') || fileId.endsWith('-3')) {
      downloadQuickStartChecklistPDF(matchedPlaybook);
      return;
    }

    // Fallback vector PDF download
    downloadValidPDF(file.downloadableContent, file.fileName, activeProduct.title, file.badge);
  };

  const handleDownloadThreePDFSuite = () => {
    downloadThreePDFSuite(matchedPlaybook);
  };

  const getFileIcon = (file: DetailedDeliverableFile) => {
    if (file.id.includes('pdf-01') || file.fileName.includes('01_Master')) {
      return <FileText className="w-4 h-4 text-[#4A533E]" />;
    }
    if (file.id.includes('pdf-02') || file.fileName.includes('02_Pocket')) {
      return <Layers className="w-4 h-4 text-emerald-800" />;
    }
    return <FileCheck2 className="w-4 h-4 text-amber-800" />;
  };

  return (
    <div className="space-y-6 sm:space-y-8 animate-in fade-in duration-200">
      
      {/* Top Banner with smallspacehome.ca brand styling */}
      <div className="bg-[#FAF8F5] border border-[#E5DFD5] p-5 sm:p-8 shadow-xs">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#4A533E]" />
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em] text-[#4A533E]">
                SmallSpaceHome.ca • 3-PDF Standard Product Delivery System
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#1C1917] tracking-tight">
              3-PDF Deliverable Suite & Photography Vault (Vols. 01–11)
            </h1>
            <p className="text-xs sm:text-sm text-[#1C1917]/80 max-w-3xl leading-relaxed">
              Every SmallSpaceHome product is delivered as <strong>exactly three separate standalone PDF files</strong>: (1) PDF 01 Master Field Playbook (25–36 pages), (2) PDF 02 4×6" Pocket Field Cards, and (3) PDF 03 Quick-Start Execution Checklist — tested in our 510 sq ft Toronto rental test lab.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-2.5 shrink-0">
            <button
              onClick={handleDownloadThreePDFSuite}
              className="w-full sm:w-auto px-4 py-2.5 bg-[#4A533E] hover:bg-[#38402F] text-[#FAF8F5] text-xs font-bold tracking-wider transition-all cursor-pointer border border-[#38402F] shadow-xs flex items-center justify-center gap-2 ring-2 ring-[#4A533E]/20"
            >
              <Download className="w-4 h-4" />
              <span>Download 3-PDF Suite (Vol. 0{activeProduct.rank})</span>
            </button>
            {onOpenStoreKit && (
              <button
                onClick={() => onOpenStoreKit(selectedProductId)}
                className="w-full sm:w-auto px-3.5 py-2.5 bg-white hover:bg-[#FAF8F5] text-[#1C1917] text-xs font-bold tracking-wider transition-all cursor-pointer border border-[#E5DFD5] flex items-center justify-center gap-1.5"
              >
                <span>Store Posting Kit</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#4A533E]" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Product Selection Bar with Responsive Grid */}
      <div className="bg-white border border-[#E5DFD5] p-4 sm:p-5 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#E5DFD5] pb-3">
          <div className="flex items-center gap-2">
            <ImageIcon className="w-4 h-4 text-[#4A533E]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#1C1917]">
              Select from All 11 Product Volumes
            </span>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <div className="relative flex-1 sm:w-64">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[#1C1917]/40" />
              <input
                type="text"
                placeholder="Filter products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-8 pr-3 py-1.5 text-xs bg-[#FAF8F5] border border-[#E5DFD5] rounded-xs focus:outline-none focus:border-[#4A533E]"
              />
            </div>
            <span className="text-[11px] text-[#1C1917]/60 font-mono shrink-0">
              {filteredProducts.length} Products
            </span>
          </div>
        </div>

        {/* Thumbnail Selector Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5 pt-1">
          {filteredProducts.map((p) => {
            const isSelected = p.id === selectedProductId;
            const bundle = getProductAssetBundle(p.id);
            return (
              <button
                key={p.id}
                onClick={() => {
                  setSelectedProductId(p.id);
                  setSelectedFileId(null);
                }}
                className={`p-2 border text-left transition-all cursor-pointer flex flex-col gap-2 rounded-xs group relative ${
                  isSelected 
                    ? 'bg-[#4A533E] text-white border-[#4A533E] shadow-sm' 
                    : 'bg-[#FAF8F5] hover:bg-white border-[#E5DFD5] hover:border-[#4A533E]/50 text-[#1C1917]'
                }`}
              >
                <div className="aspect-16/10 bg-stone-200 overflow-hidden relative border border-black/10">
                  <img 
                    src={bundle.photography.url} 
                    alt={bundle.photography.alt}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className={`absolute top-0.5 left-0.5 text-[8px] font-black px-1 py-0.2 ${
                    isSelected ? 'bg-[#4A533E] text-white' : 'bg-black/70 text-white'
                  }`}>
                    VOL 0{p.rank}
                  </span>
                </div>
                <div className="leading-tight">
                  <span className="block text-[10px] font-bold line-clamp-1">
                    {p.title}
                  </span>
                  <span className={`text-[9px] block mt-0.5 ${isSelected ? 'text-[#FAF8F5]/80' : 'text-[#4A533E]'}`}>
                    ${p.recommendedPrice} CAD • 3 Standalone PDFs
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Focus: Photography & Deliverable Files Explorer */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
        
        {/* Left Column: Architectural Photography & Styling Specs (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          
          <div className="bg-white border border-[#E5DFD5] shadow-xs overflow-hidden rounded-xs">
            
            {/* Photography Header */}
            <div className="bg-[#1C1917] text-[#FAF8F5] px-4 py-3 border-b border-[#1C1917] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ImageIcon className="w-4 h-4 text-[#D9D3C7]" />
                <span className="text-xs font-bold uppercase tracking-wider text-white">
                  Vol. 0{activeProduct.rank} Architectural Photography
                </span>
              </div>
              <button
                onClick={() => setIsPhotoZoomed(!isPhotoZoomed)}
                className="text-[10px] uppercase font-bold text-[#D9D3C7] hover:text-white flex items-center gap-1 cursor-pointer"
              >
                <Maximize2 className="w-3 h-3" />
                <span>{isPhotoZoomed ? 'Reset' : 'Zoom'}</span>
              </button>
            </div>

            {/* High-Res Photo Container */}
            <div className="relative aspect-16/10 sm:aspect-16/11 bg-stone-900 overflow-hidden group">
              <img 
                src={assetBundle.photography.url} 
                alt={assetBundle.photography.alt}
                referrerPolicy="no-referrer"
                className={`w-full h-full object-cover transition-all duration-500 ${
                  isPhotoZoomed ? 'scale-125 cursor-zoom-out' : 'group-hover:scale-105 cursor-pointer'
                }`}
                onClick={() => setIsPhotoZoomed(!isPhotoZoomed)}
              />
              
              {/* Product Rank & Format Badge */}
              <div className="absolute top-3 left-3 bg-[#1C1917]/90 backdrop-blur-xs text-[#FAF8F5] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-xs border border-white/20">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4A533E]" />
                <span>Vol. 0{activeProduct.rank} • 3 Standalone PDFs</span>
              </div>

              {/* Price Tag in CAD */}
              <div className="absolute bottom-3 right-3 bg-[#4A533E] text-white px-2.5 py-1 text-xs font-bold uppercase tracking-wider shadow-xs">
                ${activeProduct.recommendedPrice} CAD
              </div>
            </div>

            {/* Caption & Specs */}
            <div className="p-4 sm:p-5 space-y-4 bg-[#FAF8F5]">
              <div>
                <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#4A533E] block mb-1">
                  Architectural Spatial Context
                </span>
                <p className="text-xs sm:text-sm text-[#1C1917] leading-relaxed font-serif italic">
                  "{assetBundle.photography.caption}"
                </p>
              </div>

              {/* Spatial Specs */}
              <div className="bg-white p-3 border border-[#E5DFD5] space-y-1.5">
                <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-[#4A533E]">
                  <Compass className="w-3.5 h-3.5" />
                  <span>Room Blueprint & Spatial Specs</span>
                </div>
                <p className="text-xs font-semibold text-[#1C1917]">
                  {assetBundle.photography.spatialSpecs}
                </p>
              </div>

              {/* Color Palette Swatches */}
              <div className="space-y-1.5">
                <span className="text-[9px] font-bold uppercase tracking-wider text-[#1C1917]/70 block">
                  Curated Aesthetic Palette
                </span>
                <div className="flex items-center gap-2 flex-wrap">
                  {assetBundle.photography.palette.map((color, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 bg-white px-2 py-1 border border-[#E5DFD5]">
                      <span 
                        className="w-3.5 h-3.5 border border-black/15" 
                        style={{ backgroundColor: color }} 
                      />
                      <span className="text-[9px] font-mono font-bold text-[#1C1917]">{color}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Styling Keywords */}
              <div className="flex flex-wrap items-center gap-1.5 pt-1">
                {assetBundle.photography.stylingKeywords.map((kw, idx) => (
                  <span 
                    key={idx}
                    className="text-[9px] font-bold px-2 py-0.5 bg-white border border-[#E5DFD5] text-[#4A533E]"
                  >
                    #{kw}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Product Strategy & Secret Hacks Summary */}
          <div className="bg-white p-5 border border-[#E5DFD5] shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#4A533E]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#1C1917]">
                  Product Strategy Overview
                </span>
              </div>
              <span className="text-[10px] font-bold uppercase px-2 py-0.5 bg-[#4A533E] text-white">
                {activeProduct.renterSafetyRating || '100% Renter Safe'}
              </span>
            </div>

            <div>
              <h3 className="font-serif font-bold text-lg text-[#1C1917]">
                {activeProduct.title}
              </h3>
              <p className="text-xs text-[#1C1917]/80 leading-relaxed mt-1">
                {activeProduct.tagline}
              </p>
            </div>

            {/* Viral Social Hook Callout */}
            {activeProduct.viralHook && (
              <div className="bg-[#FAF8F5] border-l-2 border-[#4A533E] p-2.5 space-y-1">
                <span className="text-[9px] font-bold uppercase tracking-wider text-[#4A533E] flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-[#4A533E]" />
                  Viral Hook / High-Converting Search Angle:
                </span>
                <p className="text-xs font-serif italic text-[#1C1917]">
                  "{activeProduct.viralHook}"
                </p>
              </div>
            )}

            {/* Secret Hacks Inside Deck */}
            {activeProduct.secretHacks && activeProduct.secretHacks.length > 0 && (
              <div className="space-y-2 pt-1 border-t border-[#E5DFD5]">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#1C1917] flex items-center gap-1">
                  <span>⚡ Secret Hacks & Hardware Tricks:</span>
                </span>
                <div className="space-y-1.5">
                  {activeProduct.secretHacks.map((hack, idx) => (
                    <div key={idx} className="flex items-start gap-2 bg-[#FAF8F5] p-2 border border-[#E5DFD5] text-xs">
                      <span className="w-4 h-4 rounded-full bg-[#4A533E] text-white font-bold text-[9px] flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span className="text-[#1C1917] text-[11px] leading-snug font-medium">
                        {hack}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Pro Tips Inside Deck */}
            {activeProduct.proTips && activeProduct.proTips.length > 0 && (
              <div className="space-y-2 pt-1 border-t border-[#E5DFD5]">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#4A533E] flex items-center gap-1">
                  <span>💡 Field Tested Pro Tips:</span>
                </span>
                <div className="space-y-1">
                  {activeProduct.proTips.map((tip, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-[11px] text-[#1C1917]/80">
                      <Check className="w-3 h-3 text-[#4A533E] shrink-0" />
                      <span>{tip}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="border-t border-[#E5DFD5] pt-3 text-[11px] space-y-1.5">
              <div className="flex justify-between">
                <span className="text-[#1C1917]/60">Target Category:</span>
                <span className="font-bold text-[#1C1917]">{activeProduct.blogCategory}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#1C1917]/60">Target Problem:</span>
                <span className="font-bold text-[#1C1917] text-right line-clamp-1 max-w-[200px]">{activeProduct.targetProblem}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column: 3 Standalone Deliverable PDF Files Explorer (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          
          <div className="bg-white border border-[#E5DFD5] shadow-xs overflow-hidden">
            
            {/* Header */}
            <div className="bg-[#1C1917] text-[#FAF8F5] px-4 sm:px-5 py-4 border-b border-[#1C1917] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#D9D3C7]" />
                  <h2 className="text-sm font-bold uppercase tracking-wider text-white">
                    Deliverable PDF Suite (Exactly 3 Standalone PDF Files)
                  </h2>
                </div>
                <p className="text-[11px] text-[#D9D3C7] mt-0.5">
                  100% PDF deliverables • No ZIP • No All-In-One • No CSV/DOCX
                </p>
              </div>

              <div className="flex items-center gap-2 flex-wrap">
                <button
                  onClick={handleDownloadThreePDFSuite}
                  className="px-3.5 py-1.5 bg-[#4A533E] hover:bg-[#38402F] text-white text-[10px] font-bold uppercase tracking-wider transition-all cursor-pointer border border-white/20 flex items-center justify-center gap-1.5 shrink-0 shadow-xs"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download All 3 PDFs</span>
                </button>
              </div>
            </div>

            {/* File Item List: Exactly 3 Separate PDFs */}
            <div className="p-4 sm:p-5 space-y-3 bg-[#FAF8F5] border-b border-[#E5DFD5]">
              <div className="flex items-center justify-between">
                <div className="text-[10px] font-bold uppercase tracking-wider text-[#4A533E]">
                  Customer-Facing Deliverables:
                </div>
                <div className="text-[9px] text-[#1C1917]/70 font-serif italic">
                  PDF 01 (Playbook) • PDF 02 (Cards) • PDF 03 (Checklist)
                </div>
              </div>

              <div className="grid grid-cols-1 gap-2.5">
                {assetBundle.files.map((file, idx) => {
                  const isSelected = file.id === activeFile.id;
                  return (
                    <div
                      key={file.id}
                      onClick={() => setSelectedFileId(file.id)}
                      className={`p-3.5 border transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-xs ${
                        isSelected
                          ? 'bg-white border-[#1C1917] shadow-xs ring-1 ring-[#1C1917]'
                          : 'bg-white/80 border-[#E5DFD5] hover:border-[#4A533E]/50 hover:bg-white'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-[#FAF8F5] border border-[#E5DFD5] shrink-0 mt-0.5">
                          {getFileIcon(file)}
                        </div>
                        <div className="space-y-0.5 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="font-mono font-bold text-xs text-[#1C1917] break-all">
                              {file.fileName}
                            </span>
                            <span className="text-[9px] font-bold uppercase px-1.5 py-0.2 bg-[#4A533E] text-white shrink-0">
                              {file.badge}
                            </span>
                          </div>
                          <p className="text-[11px] text-[#1C1917]/70 leading-relaxed">
                            {file.description}
                          </p>
                          <div className="flex items-center gap-2.5 text-[10px] text-[#1C1917]/60 pt-0.5">
                            <span className="font-semibold">{file.fileType}</span>
                            <span>•</span>
                            <span>{file.fileSize}</span>
                          </div>
                        </div>
                      </div>

                      {/* File Direct Actions */}
                      <div className="flex items-center gap-1.5 shrink-0 self-end sm:self-center">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleCopy(file.downloadableContent, `file-${file.id}`);
                          }}
                          title="Copy File Outline"
                          className="p-1.5 bg-[#FAF8F5] hover:bg-[#1C1917] hover:text-white text-[#1C1917] border border-[#E5DFD5] transition-colors cursor-pointer"
                        >
                          {copiedKey === `file-${file.id}` ? (
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDownloadSingleFile(file);
                          }}
                          title="Download PDF"
                          className="px-2.5 py-1.5 bg-[#1C1917] hover:bg-[#4A533E] text-white text-[10px] font-bold uppercase tracking-wider border border-[#1C1917] transition-colors cursor-pointer flex items-center gap-1"
                        >
                          <Download className="w-3 h-3" />
                          <span>Download PDF 0{idx + 1}</span>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Active File Content Viewer */}
            <div className="p-4 sm:p-5 space-y-4 bg-white">
              
              <EditorialPdfViewer
                fileName={activeFile.fileName}
                fileSize={activeFile.fileSize}
                badge={activeFile.badge}
                description={activeFile.description}
                productTitle={activeProduct.title}
                rawContent={activeFile.downloadableContent}
              />

              {/* 3-PDF Delivery Standard Quick Action */}
              <div className="bg-[#FAF8F5] border border-[#E5DFD5] p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                <div className="flex items-center gap-2 text-xs text-[#1C1917]/80">
                  <Sparkles className="w-4 h-4 text-[#4A533E]" />
                  <span>Download the complete 3-PDF package for <strong>{activeProduct.title}</strong>:</span>
                </div>

                <div className="flex flex-wrap items-center gap-2 shrink-0">
                  <button
                    onClick={handleDownloadThreePDFSuite}
                    className="px-3.5 py-1.5 bg-[#4A533E] hover:bg-[#38402F] text-[#FAF8F5] text-[10px] font-bold uppercase tracking-wider border border-[#38402F] transition-colors cursor-pointer flex items-center gap-1.5 shadow-2xs"
                  >
                    <Download className="w-3 h-3 text-[#FAF8F5]" />
                    <span>Download 3-PDF Suite (PDF 01, 02, 03)</span>
                  </button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-[10px] text-[#1C1917]/60 pt-1 gap-1">
                <span>Direct 3-PDF Digital Fulfillment • Exact Standards Across All 11 Product Volumes</span>
                <span>Matches smallspacehome.ca design identity & spatial engineering standards</span>
              </div>
            </div>

          </div>

          {/* Customer Delivery Guarantee */}
          <div className="bg-[#FAF8F5] p-4 border border-[#E5DFD5] flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-[#4A533E] shrink-0 mt-0.5" />
            <div className="text-xs space-y-1">
              <span className="font-bold text-[#1C1917] block">
                SmallSpaceHome 3-PDF Delivery Standard
              </span>
              <p className="text-[#1C1917]/70 leading-relaxed">
                Every purchase fulfills directly into three distinct, publication-grade vector PDFs: <strong>PDF 01 Master Field Playbook</strong> (core chapters & formulas), <strong>PDF 02 4×6" Pocket Field Cards</strong> (quick field companion), and <strong>PDF 03 Quick-Start Execution Checklist</strong> (1-page operational sheet). No ZIP files, no generic text dumps, and no merged all-in-one compendiums.
              </p>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
