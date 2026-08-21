import React, { useState } from 'react';
import { TOP_20_PRODUCTS } from '../data/strategyData';
import { getProductAssetBundle, DetailedDeliverableFile } from '../data/productAssetsData';
import { downloadValidPDF } from '../utils/pdfGenerator';
import { CsvTableViewer } from './CsvTableViewer';
import { NotionWorkspaceViewer } from './NotionWorkspaceViewer';
import { 
  Download, 
  Copy, 
  Check, 
  FileText, 
  Table, 
  CheckSquare, 
  Image as ImageIcon, 
  Sparkles, 
  Eye, 
  Layers, 
  Search, 
  Maximize2, 
  FolderDown, 
  ShieldCheck, 
  Compass, 
  ArrowRight,
  ExternalLink,
  Info,
  Printer,
  FileCheck2,
  FileSpreadsheet
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
  const [pdfViewTab, setPdfViewTab] = useState<'formatted' | 'raw'>('formatted');

  const activeProduct = TOP_20_PRODUCTS.find(p => p.id === selectedProductId) || TOP_20_PRODUCTS[0];
  const assetBundle = getProductAssetBundle(selectedProductId);

  const activeFile = assetBundle.files.find(f => f.id === selectedFileId) || assetBundle.files[0];

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
    const isPdf = file.fileName.toLowerCase().endsWith('.pdf') || 
                  file.fileType.toLowerCase().includes('pdf') || 
                  file.fileType.toLowerCase().includes('printable');
    
    const isCsv = file.fileName.toLowerCase().endsWith('.csv') || 
                  file.fileType.toLowerCase().includes('spreadsheet');

    const isJson = file.fileName.toLowerCase().endsWith('.json') || 
                   file.fileType.toLowerCase().includes('notion');

    if (isPdf) {
      // Generate genuine multi-page vector PDF using jsPDF + autoTable
      downloadValidPDF(file.downloadableContent, file.fileName, activeProduct.title, file.badge);
      return;
    }

    if (isCsv) {
      const blob = new Blob([file.downloadableContent], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      let name = file.fileName;
      if (!name.toLowerCase().endsWith('.csv')) {
        name = name.replace(/\.[a-z0-9]+$/i, '') + '.csv';
      }
      link.download = name;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      return;
    }

    if (isJson) {
      const blob = new Blob([file.downloadableContent], { type: 'application/json;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      let name = file.fileName;
      if (!name.toLowerCase().endsWith('.json')) {
        name = name.replace(/\.[a-z0-9]+$/i, '') + '.json';
      }
      link.download = name;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      return;
    }

    // Default: Markdown / Text
    const blob = new Blob([file.downloadableContent], { type: 'text/markdown;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = file.fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleDownloadAllFiles = () => {
    const combinedContent = assetBundle.files.map((file, idx) => {
      return `================================================================================
FILE ${idx + 1}: ${file.fileName} (${file.fileType})
SIZE: ${file.fileSize}
PURPOSE: ${file.description}
================================================================================

${file.downloadableContent}

`;
    }).join('\n\n');

    const blob = new Blob([combinedContent], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `SmallSpaceHome_Product_${activeProduct.rank}_${activeProduct.id}_Complete_Deliverable_Bundle.md`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleExportMasterPDF = () => {
    // Collect all markdown and printable content across the bundle into a comprehensive publication
    const publicationContent = assetBundle.files.map((f, i) => `## MODULE 0${i + 1}: ${f.fileName.replace(/_/g, ' ').replace(/\.[a-z0-9]+$/i, '')}\n*Deliverable Type: ${f.fileType} • Size: ${f.fileSize}*\n\n${f.downloadableContent}`).join('\n\n---\n\n');
    downloadValidPDF(
      publicationContent, 
      `SmallSpaceHome_Product_${activeProduct.rank}_${activeProduct.id}_Master_Publication.pdf`, 
      activeProduct.title, 
      'Complete Product Master Publication'
    );
  };

  const getFileIcon = (file: DetailedDeliverableFile) => {
    const isCsv = file.fileName.toLowerCase().endsWith('.csv') || file.fileType.toLowerCase().includes('spreadsheet');
    const isJson = file.fileName.toLowerCase().endsWith('.json') || file.fileType.toLowerCase().includes('notion');
    const isPdf = file.fileName.toLowerCase().endsWith('.pdf') || file.fileType.toLowerCase().includes('printable') || file.fileType.toLowerCase().includes('pdf');

    if (isCsv) return <FileSpreadsheet className="w-4 h-4 text-emerald-700" />;
    if (isJson) return <Layers className="w-4 h-4 text-indigo-700" />;
    if (isPdf) return <FileCheck2 className="w-4 h-4 text-rose-700" />;
    return <FileText className="w-4 h-4 text-[#4A533E]" />;
  };

  const isActiveFilePdf = activeFile.fileName.toLowerCase().endsWith('.pdf') || 
                          activeFile.fileType.toLowerCase().includes('pdf') || 
                          activeFile.fileType.toLowerCase().includes('printable');

  const isActiveFileCsv = activeFile.fileName.toLowerCase().endsWith('.csv') || 
                          activeFile.fileType.toLowerCase().includes('spreadsheet');

  const isActiveFileJson = activeFile.fileName.toLowerCase().endsWith('.json') || 
                           activeFile.fileType.toLowerCase().includes('notion');

  return (
    <div className="space-y-6 sm:space-y-8 animate-in fade-in duration-200">
      
      {/* Top Banner with smallspacehome.ca brand styling */}
      <div className="bg-[#FAF8F5] border border-[#E5DFD5] p-5 sm:p-8 shadow-xs">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#4A533E]" />
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em] text-[#4A533E]">
                SmallSpaceHome.ca • Tactical Action Kits & Renter Hacks Vault
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#1C1917] tracking-tight">
              Tactical Action Kits & Deliverable Formats (1–12)
            </h1>
            <p className="text-xs sm:text-sm text-[#1C1917]/80 max-w-3xl leading-relaxed">
              Every digital product is engineered as an actionable, high-converting <strong>Tactical Action Kit</strong> loaded with tested renter hacks, zero-damage hardware tricks, printable pocket cheat sheets, and plug-and-play dimension calculators tested in our 510 sq ft Toronto rental test lab.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-2.5 shrink-0">
            <button
              onClick={handleDownloadAllFiles}
              className="w-full sm:w-auto px-4 py-2.5 bg-[#4A533E] hover:bg-[#1C1917] text-[#FAF8F5] text-xs font-bold tracking-wider transition-all cursor-pointer border border-[#4A533E] shadow-xs flex items-center justify-center gap-2"
            >
              <FolderDown className="w-4 h-4" />
              <span>Download Kit #{activeProduct.rank} All Files (.md)</span>
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
              Select from All 12 Tactical Action Kits
            </span>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <div className="relative flex-1 sm:w-64">
              <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-[#1C1917]/50" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search kits, hacks, rooms..."
                className="w-full bg-[#FAF8F5] border border-[#E5DFD5] pl-8 pr-2.5 py-1.5 text-xs font-medium focus:outline-hidden focus:border-[#4A533E]"
              />
            </div>
            <span className="text-[10px] font-bold bg-[#FAF8F5] px-2 py-1.5 border border-[#E5DFD5] text-[#4A533E] shrink-0">
              {filteredProducts.length} Action Kits
            </span>
          </div>
        </div>

        {/* Responsive Grid for all 20 products */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-10 gap-2 sm:gap-2.5">
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
                className={`text-left p-1.5 sm:p-2 border transition-all cursor-pointer flex flex-col justify-between group rounded-xs ${
                  isSelected 
                    ? 'bg-[#1C1917] text-[#FAF8F5] border-[#1C1917] shadow-xs scale-[1.02]' 
                    : 'bg-[#FAF8F5] text-[#1C1917] border-[#E5DFD5] hover:border-[#4A533E]/50 hover:bg-white'
                }`}
              >
                {/* Photo Thumbnail */}
                <div className="relative aspect-4/3 w-full overflow-hidden bg-stone-200 border border-black/10 mb-1.5 rounded-xs">
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
                    #{p.rank}
                  </span>
                </div>
                <div className="leading-tight">
                  <span className="block text-[10px] font-bold line-clamp-1">
                    {p.title}
                  </span>
                  <span className={`text-[9px] block mt-0.5 ${isSelected ? 'text-[#FAF8F5]/80' : 'text-[#4A533E]'}`}>
                    ${p.recommendedPrice} CAD • {bundle.files.length} Files
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
                  Product #{activeProduct.rank} Architectural Photography
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
                <span>Product #{activeProduct.rank} • {activeProduct.format}</span>
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
                  Tactical Kit Details
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

        {/* Right Column: Deliverable Asset Files Explorer & Direct Exporter (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          
          <div className="bg-white border border-[#E5DFD5] shadow-xs overflow-hidden">
            
            {/* Header */}
            <div className="bg-[#1C1917] text-[#FAF8F5] px-4 sm:px-5 py-4 border-b border-[#1C1917] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#D9D3C7]" />
                  <h2 className="text-sm font-bold uppercase tracking-wider text-white">
                    Deliverable Asset File Package ({assetBundle.files.length} Files)
                  </h2>
                </div>
                <p className="text-[11px] text-[#D9D3C7] mt-0.5">
                  Real, downloadable, copyable master files formatted for direct customer delivery
                </p>
              </div>

              <button
                onClick={handleDownloadAllFiles}
                className="px-3.5 py-1.5 bg-[#4A533E] hover:bg-white hover:text-[#1C1917] text-white text-[10px] font-bold uppercase tracking-wider transition-all cursor-pointer border border-white/20 flex items-center justify-center gap-1.5 shrink-0"
              >
                <FolderDown className="w-3.5 h-3.5" />
                <span>Export Complete Bundle</span>
              </button>
            </div>

            {/* File Item List */}
            <div className="p-4 sm:p-5 space-y-3 bg-[#FAF8F5] border-b border-[#E5DFD5]">
              <div className="text-[10px] font-bold uppercase tracking-wider text-[#4A533E]">
                Select File to Inspect & Download:
              </div>

              <div className="grid grid-cols-1 gap-2.5">
                {assetBundle.files.map((file) => {
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
                          title="Copy File Content"
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
                          title="Download File"
                          className="px-2.5 py-1.5 bg-[#1C1917] hover:bg-[#4A533E] text-white text-[10px] font-bold uppercase tracking-wider border border-[#1C1917] transition-colors cursor-pointer flex items-center gap-1"
                        >
                          <Download className="w-3 h-3" />
                          <span>Download</span>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Active File Content Viewer */}
            <div className="p-4 sm:p-5 space-y-4 bg-white">
              
              {/* Dynamic View Mode Router based on file type */}
              {isActiveFileCsv ? (
                <CsvTableViewer 
                  fileName={activeFile.fileName}
                  csvContent={activeFile.downloadableContent}
                  badge={activeFile.badge}
                  description={activeFile.description}
                />
              ) : isActiveFileJson ? (
                <NotionWorkspaceViewer 
                  fileName={activeFile.fileName}
                  jsonContent={activeFile.downloadableContent}
                  badge={activeFile.badge}
                  description={activeFile.description}
                  productTitle={activeProduct.title}
                />
              ) : isActiveFilePdf ? (
                <div className="bg-white border border-[#E5DFD5] shadow-xs rounded-xs overflow-hidden">
                  
                  {/* PDF Viewer Header */}
                  <div className="bg-[#FAF8F5] p-3.5 sm:p-4 border-b border-[#E5DFD5] flex flex-col lg:flex-row lg:items-center justify-between gap-3">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <div className="p-1 bg-rose-700 text-white rounded-xs">
                          <FileCheck2 className="w-3.5 h-3.5" />
                        </div>
                        <span className="font-mono font-bold text-xs text-[#1C1917]">
                          {activeFile.fileName}
                        </span>
                        <span className="text-[9px] font-bold uppercase px-2 py-0.5 bg-rose-700 text-white rounded-xs">
                          {activeFile.badge}
                        </span>
                        <span className="text-[10px] font-semibold text-[#1C1917]/70 bg-white px-2 py-0.5 border border-[#E5DFD5]">
                          Vector PDF Engine • Printable A4 & US Letter
                        </span>
                      </div>
                      <p className="text-[11px] text-[#1C1917]/70">
                        {activeFile.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 shrink-0">
                      <div className="flex items-center bg-white border border-[#E5DFD5] p-0.5 rounded-xs">
                        <button
                          onClick={() => setPdfViewTab('formatted')}
                          className={`px-2 py-1 text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 transition-colors cursor-pointer ${
                            pdfViewTab === 'formatted' ? 'bg-[#1C1917] text-white' : 'text-[#1C1917]/70 hover:text-[#1C1917]'
                          }`}
                        >
                          <Eye className="w-3 h-3" />
                          <span>Publication Layout</span>
                        </button>
                        <button
                          onClick={() => setPdfViewTab('raw')}
                          className={`px-2 py-1 text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 transition-colors cursor-pointer ${
                            pdfViewTab === 'raw' ? 'bg-[#1C1917] text-white' : 'text-[#1C1917]/70 hover:text-[#1C1917]'
                          }`}
                        >
                          <FileText className="w-3 h-3" />
                          <span>Source Content</span>
                        </button>
                      </div>

                      <button
                        onClick={() => handleCopy(activeFile.downloadableContent, 'pdf-copy')}
                        className="px-2.5 py-1 bg-white hover:bg-[#FAF8F5] text-[#1C1917] text-[10px] font-bold uppercase tracking-wider border border-[#E5DFD5] transition-colors cursor-pointer flex items-center gap-1"
                      >
                        {copiedKey === 'pdf-copy' ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                        <span>Copy Text</span>
                      </button>

                      <button
                        onClick={() => handleDownloadSingleFile(activeFile)}
                        className="px-3.5 py-1.5 bg-rose-700 hover:bg-[#1C1917] text-white text-[10px] font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5 border border-rose-700 shadow-xs"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>Download Valid .PDF</span>
                      </button>
                    </div>
                  </div>

                  {pdfViewTab === 'formatted' ? (
                    <div className="p-4 sm:p-6 bg-[#FAF8F5] space-y-4">
                      {/* Formatted Paper Page Simulation */}
                      <div className="bg-white border border-[#E5DFD5] shadow-xs p-5 sm:p-8 max-w-3xl mx-auto space-y-5">
                        
                        <div className="border-b-2 border-[#1C1917] pb-4 flex justify-between items-start">
                          <div>
                            <span className="text-[10px] font-bold tracking-[0.2em] text-[#4A533E] uppercase block">
                              SmallSpaceHome.ca • Master Publication
                            </span>
                            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#1C1917] mt-1">
                              {activeProduct.title}
                            </h2>
                            <p className="text-xs text-[#1C1917]/70 font-medium">
                              Document: {activeFile.fileName.replace(/_/g, ' ').replace(/\.[a-z0-9]+$/i, '')}
                            </p>
                          </div>
                          <span className="text-[9px] font-mono font-bold bg-[#FAF8F5] px-2 py-1 border border-[#E5DFD5] text-[#4A533E] shrink-0">
                            STANDARD A4
                          </span>
                        </div>

                        {/* Rendered content */}
                        <div className="text-xs text-[#1C1917] space-y-3 leading-relaxed">
                          {activeFile.downloadableContent.split('\n\n').map((block, bIdx) => {
                            if (block.startsWith('# ')) {
                              return (
                                <h1 key={bIdx} className="text-lg font-serif font-bold text-[#1C1917] pt-2 border-b border-[#E5DFD5] pb-1">
                                  {block.replace(/^#\s*/, '')}
                                </h1>
                              );
                            }
                            if (block.startsWith('## ') || block.startsWith('=== ')) {
                              return (
                                <h2 key={bIdx} className="text-sm font-bold uppercase tracking-wider text-[#4A533E] pt-2 border-b border-[#E5DFD5]/70 pb-1">
                                  {block.replace(/^##\s*|^===\s*|\s*===$/g, '')}
                                </h2>
                              );
                            }
                            if (block.includes('[ ]') || block.includes('• ') || block.startsWith('- ')) {
                              const lines = block.split('\n');
                              return (
                                <ul key={bIdx} className="space-y-1.5 pl-1">
                                  {lines.map((line, lIdx) => {
                                    const isCheck = line.includes('[ ]');
                                    return (
                                      <li key={lIdx} className="flex items-start gap-2 text-xs">
                                        {isCheck ? (
                                          <input type="checkbox" readOnly className="mt-0.5 w-3.5 h-3.5 accent-[#4A533E]" />
                                        ) : (
                                          <span className="text-[#4A533E] font-bold shrink-0">•</span>
                                        )}
                                        <span className="text-[#1C1917]">{line.replace(/^\[\s*\]\s*|^[-•]\s*/, '')}</span>
                                      </li>
                                    );
                                  })}
                                </ul>
                              );
                            }
                            return (
                              <p key={bIdx} className="text-xs text-[#1C1917]/85 whitespace-pre-line leading-relaxed">
                                {block}
                              </p>
                            );
                          })}
                        </div>

                        <div className="border-t border-[#E5DFD5] pt-4 flex justify-between items-center text-[10px] text-[#1C1917]/50 font-mono">
                          <span>© 2026 SmallSpaceHome.ca • All Rights Reserved</span>
                          <span>PDF Page 1 of 1</span>
                        </div>

                      </div>
                    </div>
                  ) : (
                    <div className="p-4">
                      <pre className="bg-[#1C1917] text-[#FAF8F5] p-3.5 sm:p-4 text-xs font-mono leading-relaxed overflow-x-auto max-h-[380px] border border-[#1C1917] whitespace-pre-wrap select-all">
                        {activeFile.downloadableContent}
                      </pre>
                    </div>
                  )}

                </div>
              ) : (
                /* Standard Markdown / Text Viewer */
                <div className="bg-white border border-[#E5DFD5] shadow-xs rounded-xs overflow-hidden">
                  <div className="bg-[#FAF8F5] p-3.5 sm:p-4 border-b border-[#E5DFD5] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-2">
                        <FileText className="w-4 h-4 text-[#4A533E]" />
                        <span className="font-mono font-bold text-xs text-[#1C1917]">{activeFile.fileName}</span>
                        <span className="text-[9px] font-bold uppercase px-1.5 py-0.2 bg-[#4A533E] text-white">
                          {activeFile.badge}
                        </span>
                      </div>
                      <p className="text-[11px] text-[#1C1917]/70">{activeFile.description}</p>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleCopy(activeFile.downloadableContent, 'md-copy')}
                        className="px-2.5 py-1 bg-white hover:bg-[#FAF8F5] text-[#1C1917] text-[10px] font-bold uppercase tracking-wider border border-[#E5DFD5] transition-colors cursor-pointer flex items-center gap-1"
                      >
                        {copiedKey === 'md-copy' ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                        <span>Copy Markdown</span>
                      </button>
                      <button
                        onClick={() => handleDownloadSingleFile(activeFile)}
                        className="px-3 py-1 bg-[#4A533E] hover:bg-[#1C1917] text-white text-[10px] font-bold uppercase tracking-wider border border-[#4A533E] transition-colors cursor-pointer flex items-center gap-1"
                      >
                        <Download className="w-3 h-3" />
                        <span>Download .md</span>
                      </button>
                    </div>
                  </div>

                  <div className="p-4 sm:p-5">
                    <pre className="bg-[#1C1917] text-[#FAF8F5] p-3.5 sm:p-4 text-xs font-mono leading-relaxed overflow-x-auto max-h-[380px] border border-[#1C1917] whitespace-pre-wrap break-words select-all">
                      {activeFile.downloadableContent}
                    </pre>
                  </div>
                </div>
              )}

              {/* Master Publication Quick Actions */}
              <div className="bg-[#FAF8F5] border border-[#E5DFD5] p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                <div className="flex items-center gap-2 text-xs text-[#1C1917]/80">
                  <Sparkles className="w-4 h-4 text-[#4A533E]" />
                  <span>Generate all files for <strong>{activeProduct.title}</strong> in one click:</span>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={handleExportMasterPDF}
                    className="px-3 py-1.5 bg-white hover:bg-[#FAF8F5] text-rose-800 text-[10px] font-bold uppercase tracking-wider border border-rose-300 transition-colors cursor-pointer flex items-center gap-1.5 shadow-2xs"
                  >
                    <Download className="w-3 h-3 text-rose-700" />
                    <span>Download Master PDF Publication</span>
                  </button>

                  <button
                    onClick={handleDownloadAllFiles}
                    className="px-3 py-1.5 bg-[#4A533E] hover:bg-[#1C1917] text-white text-[10px] font-bold uppercase tracking-wider border border-[#4A533E] transition-colors cursor-pointer flex items-center gap-1.5 shadow-2xs"
                  >
                    <FolderDown className="w-3 h-3" />
                    <span>Download All 4 Files (.md)</span>
                  </button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-[10px] text-[#1C1917]/60 pt-1 gap-1">
                <span>Direct Digital Asset Fulfillment Ready • All 20 Catalog Products Supported</span>
                <span>Matches smallspacehome.ca design identity & spatial engineering standards</span>
              </div>
            </div>

          </div>

          {/* Customer Delivery Guarantee */}
          <div className="bg-[#FAF8F5] p-4 border border-[#E5DFD5] flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-[#4A533E] shrink-0 mt-0.5" />
            <div className="text-xs space-y-1">
              <span className="font-bold text-[#1C1917] block">
                Instant Digital Delivery Standard
              </span>
              <p className="text-[#1C1917]/70 leading-relaxed">
                All deliverable files (PDF, CSV, Notion JSON, Markdown) are generated on-demand with vector crispness and clean data formatting. Compatible with Fourthwall, Shopify, Gumroad, and Etsy digital product fulfillment.
              </p>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
