import React, { useState } from 'react';
import { TOP_20_PRODUCTS } from '../data/strategyData';
import { getProductAssetBundle, DetailedDeliverableFile, ProductPhotography } from '../data/productAssetsData';
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
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  FolderDown, 
  ExternalLink,
  ShieldCheck,
  Tag,
  Clock,
  Compass,
  ArrowRight,
  Info
} from 'lucide-react';

interface DeliverablesAndPhotographyCenterProps {
  initialProductId?: string;
  onOpenStoreKit?: (productId: string) => void;
}

export const DeliverablesAndPhotographyCenter: React.FC<DeliverablesAndPhotographyCenterProps> = ({
  initialProductId = 'flagship-ss-os',
  onOpenStoreKit
}) => {
  const [selectedProductId, setSelectedProductId] = useState<string>(initialProductId);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFileId, setSelectedFileId] = useState<string | null>(null);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [isPhotoZoomed, setIsPhotoZoomed] = useState(false);
  const [viewMode, setViewMode] = useState<'all' | 'photography-only' | 'files-only'>('all');

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
    const blob = new Blob([file.downloadableContent], { type: 'text/plain;charset=utf-8' });
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

  const getFileIcon = (fileType: string) => {
    if (fileType.includes('Spreadsheet')) return <Table className="w-4 h-4 text-emerald-700" />;
    if (fileType.includes('Checklist')) return <CheckSquare className="w-4 h-4 text-amber-700" />;
    if (fileType.includes('Notion')) return <Layers className="w-4 h-4 text-indigo-700" />;
    return <FileText className="w-4 h-4 text-[#5A5A40]" />;
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      
      {/* Top Banner */}
      <div className="bg-[#FAF9F6] border-2 border-[#1A1A1A] p-6 sm:p-8 shadow-[4px_4px_0_0_#1A1A1A]">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-[#5A5A40]" />
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#5A5A40]">
                Deliverable Asset Vault & Architectural Photography
              </span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-serif font-black text-[#1A1A1A] tracking-tight">
              Product Deliverable Files & Photography (1–20)
            </h1>
            <p className="text-sm sm:text-base text-[#1A1A1A]/80 max-w-3xl leading-relaxed">
              Access the complete, tangible deliverable files (master guides, automated spreadsheets, Notion databases, printable cards) and curated architectural interior photography for every single product in the SmallSpaceHome catalog.
            </p>
          </div>

          {/* Quick Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={handleDownloadAllFiles}
              className="px-4 py-2.5 bg-[#1A1A1A] hover:bg-[#5A5A40] text-white text-xs font-bold uppercase tracking-wider transition-all cursor-pointer border border-[#1A1A1A] shadow-[2px_2px_0_0_#5A5A40] flex items-center gap-2"
            >
              <FolderDown className="w-4 h-4" />
              <span>Download Product #{activeProduct.rank} Bundle (.md)</span>
            </button>
            {onOpenStoreKit && (
              <button
                onClick={() => onOpenStoreKit(selectedProductId)}
                className="px-3.5 py-2.5 bg-white hover:bg-[#FAF9F6] text-[#1A1A1A] text-xs font-bold uppercase tracking-wider transition-all cursor-pointer border border-[#1A1A1A] flex items-center gap-1.5"
              >
                <span>Store Posting Kit</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Catalog Product Grid / Switcher */}
      <div className="bg-white border-2 border-[#1A1A1A] p-4 shadow-[3px_3px_0_0_#1A1A1A] space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#1A1A1A]/10 pb-3">
          <div className="flex items-center gap-2">
            <ImageIcon className="w-4 h-4 text-[#5A5A40]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#1A1A1A]">
              Select from All 20 Products to View Photography & Deliverable Files
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative w-full sm:w-64">
              <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-[#1A1A1A]/50" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search 20 products..."
                className="w-full bg-[#FAF9F6] border border-[#1A1A1A] pl-8 pr-2.5 py-1 text-xs font-medium focus:outline-hidden"
              />
            </div>
            <span className="text-[10px] font-bold bg-[#FAF9F6] px-2 py-1 border border-[#1A1A1A]/20 shrink-0">
              {filteredProducts.length} Items
            </span>
          </div>
        </div>

        {/* Thumbnail Selector Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-10 gap-2">
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
                className={`text-left p-1.5 border transition-all cursor-pointer flex flex-col justify-between group ${
                  isSelected 
                    ? 'bg-[#1A1A1A] text-white border-[#1A1A1A] shadow-[2px_2px_0_0_#5A5A40] scale-[1.02]' 
                    : 'bg-[#FAF9F6] text-[#1A1A1A] border-[#1A1A1A]/20 hover:border-[#1A1A1A]'
                }`}
              >
                {/* Photo Thumbnail */}
                <div className="relative aspect-4/3 w-full overflow-hidden bg-stone-200 border border-black/10 mb-1.5">
                  <img 
                    src={bundle.photography.url} 
                    alt={bundle.photography.alt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className={`absolute top-0.5 left-0.5 text-[8px] font-black px-1 py-0.2 ${
                    isSelected ? 'bg-[#5A5A40] text-white' : 'bg-black/70 text-white'
                  }`}>
                    #{p.rank}
                  </span>
                </div>
                <div className="leading-tight">
                  <span className="block text-[9px] font-bold line-clamp-1">
                    {p.title}
                  </span>
                  <span className={`text-[8px] block mt-0.5 ${isSelected ? 'text-[#FAF9F6]/70' : 'text-[#5A5A40]'}`}>
                    ${p.recommendedPrice} CAD • {bundle.files.length} Files
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Focus Split: Photography (Left) & Deliverable Files Explorer (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Architectural Photography & Styling Specs (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          
          <div className="bg-white border-2 border-[#1A1A1A] shadow-[4px_4px_0_0_#1A1A1A] overflow-hidden">
            
            {/* Photography Header */}
            <div className="bg-[#1A1A1A] text-[#FAF9F6] px-4 py-3 border-b border-[#1A1A1A] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ImageIcon className="w-4 h-4 text-[#A0A090]" />
                <span className="text-xs font-bold uppercase tracking-wider">
                  Product #{activeProduct.rank} Architectural Photography
                </span>
              </div>
              <button
                onClick={() => setIsPhotoZoomed(!isPhotoZoomed)}
                className="text-[10px] uppercase font-bold text-[#A0A090] hover:text-white flex items-center gap-1 cursor-pointer"
              >
                <Maximize2 className="w-3 h-3" />
                <span>{isPhotoZoomed ? 'Reset' : 'Zoom'}</span>
              </button>
            </div>

            {/* Main High-Res Photo Container */}
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
              
              {/* Product Rank & Format Floating Badge */}
              <div className="absolute top-3 left-3 bg-[#1A1A1A]/90 backdrop-blur-xs text-[#FAF9F6] px-2.5 py-1 border border-white/20 text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-md">
                <span className="w-1.5 h-1.5 rounded-full bg-[#5A5A40]" />
                <span>Product #{activeProduct.rank} • {activeProduct.format}</span>
              </div>

              {/* Price Tag */}
              <div className="absolute bottom-3 right-3 bg-[#5A5A40] text-white px-2.5 py-1 text-xs font-bold uppercase tracking-wider shadow-md">
                ${activeProduct.recommendedPrice} CAD
              </div>
            </div>

            {/* Photography Architectural Caption & Specs */}
            <div className="p-4 sm:p-5 space-y-4 bg-[#FAF9F6]">
              <div>
                <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#5A5A40] block mb-1">
                  Architectural Spatial Context
                </span>
                <p className="text-xs sm:text-sm text-[#1A1A1A] leading-relaxed font-serif italic">
                  "{assetBundle.photography.caption}"
                </p>
              </div>

              {/* Spatial Specs */}
              <div className="bg-white p-3 border border-[#1A1A1A]/20 space-y-2">
                <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-[#5A5A40]">
                  <Compass className="w-3.5 h-3.5" />
                  <span>Room Blueprint & Spatial Spec</span>
                </div>
                <p className="text-xs font-semibold text-[#1A1A1A]">
                  {assetBundle.photography.spatialSpecs}
                </p>
              </div>

              {/* Color Palette Swatches */}
              <div className="space-y-1.5">
                <span className="text-[9px] font-bold uppercase tracking-wider text-[#1A1A1A]/70 block">
                  Curated Aesthetic Palette
                </span>
                <div className="flex items-center gap-2">
                  {assetBundle.photography.palette.map((color, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 bg-white px-2 py-1 border border-[#1A1A1A]/20">
                      <span 
                        className="w-3.5 h-3.5 border border-black/20" 
                        style={{ backgroundColor: color }} 
                      />
                      <span className="text-[9px] font-mono font-bold text-[#1A1A1A]">{color}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Styling Keywords */}
              <div className="flex flex-wrap items-center gap-1.5 pt-1">
                {assetBundle.photography.stylingKeywords.map((kw, idx) => (
                  <span 
                    key={idx}
                    className="text-[9px] font-bold px-2 py-0.5 bg-white border border-[#1A1A1A]/20 text-[#5A5A40]"
                  >
                    #{kw}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Product Overview Card */}
          <div className="bg-white p-5 border-2 border-[#1A1A1A] shadow-[3px_3px_0_0_#1A1A1A] space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1A1A1A]">
                Product Strategy Summary
              </span>
              <span className="text-[10px] font-bold uppercase px-2 py-0.5 bg-[#5A5A40] text-white">
                {activeProduct.level}
              </span>
            </div>
            <h3 className="font-serif font-bold text-lg text-[#1A1A1A]">
              {activeProduct.title}
            </h3>
            <p className="text-xs text-[#1A1A1A]/80 leading-relaxed">
              {activeProduct.tagline}
            </p>
            <div className="border-t border-[#1A1A1A]/10 pt-3 text-[11px] space-y-1.5">
              <div className="flex justify-between">
                <span className="text-[#1A1A1A]/60">Target Category:</span>
                <span className="font-bold text-[#1A1A1A]">{activeProduct.blogCategory}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#1A1A1A]/60">Difficulty to Produce:</span>
                <span className="font-bold text-[#1A1A1A]">{activeProduct.difficulty}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#1A1A1A]/60">Audience Problem:</span>
                <span className="font-bold text-[#1A1A1A] text-right line-clamp-1 max-w-[200px]">{activeProduct.targetProblem}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column: Deliverable Asset Files Explorer & Direct Exporter (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          
          <div className="bg-white border-2 border-[#1A1A1A] shadow-[4px_4px_0_0_#1A1A1A] overflow-hidden">
            
            {/* Header */}
            <div className="bg-[#1A1A1A] text-[#FAF9F6] px-5 py-4 border-b border-[#1A1A1A] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#A0A090]" />
                  <h2 className="text-sm font-bold uppercase tracking-wider text-white">
                    Deliverable Asset File Package ({assetBundle.files.length} Files)
                  </h2>
                </div>
                <p className="text-[11px] text-[#A0A090] mt-0.5">
                  Real, downloadable, copyable master files formatted for direct customer delivery
                </p>
              </div>

              <button
                onClick={handleDownloadAllFiles}
                className="px-3.5 py-1.5 bg-[#5A5A40] hover:bg-white hover:text-[#1A1A1A] text-white text-[10px] font-bold uppercase tracking-wider transition-all cursor-pointer border border-white/20 flex items-center gap-1.5 shrink-0"
              >
                <FolderDown className="w-3.5 h-3.5" />
                <span>Export Complete Bundle</span>
              </button>
            </div>

            {/* File Item List */}
            <div className="p-4 sm:p-5 space-y-3 bg-[#FAF9F6] border-b border-[#1A1A1A]">
              <div className="text-[10px] font-bold uppercase tracking-wider text-[#5A5A40]">
                Select File to Inspect & Download:
              </div>

              <div className="grid grid-cols-1 gap-2.5">
                {assetBundle.files.map((file) => {
                  const isSelected = file.id === activeFile.id;
                  return (
                    <div
                      key={file.id}
                      onClick={() => setSelectedFileId(file.id)}
                      className={`p-3.5 border transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                        isSelected
                          ? 'bg-white border-[#1A1A1A] shadow-[3px_3px_0_0_#5A5A40] ring-1 ring-[#1A1A1A]'
                          : 'bg-white/80 border-[#1A1A1A]/20 hover:border-[#1A1A1A] hover:bg-white'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-[#FAF9F6] border border-[#1A1A1A]/20 shrink-0 mt-0.5">
                          {getFileIcon(file.fileType)}
                        </div>
                        <div className="space-y-0.5">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="font-mono font-bold text-xs text-[#1A1A1A]">
                              {file.fileName}
                            </span>
                            <span className="text-[9px] font-bold uppercase px-1.5 py-0.2 bg-[#5A5A40] text-white">
                              {file.badge}
                            </span>
                          </div>
                          <p className="text-[11px] text-[#1A1A1A]/70 leading-relaxed">
                            {file.description}
                          </p>
                          <div className="flex items-center gap-3 text-[10px] text-[#1A1A1A]/60 pt-0.5">
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
                          className="p-1.5 bg-[#FAF9F6] hover:bg-[#1A1A1A] hover:text-white text-[#1A1A1A] border border-[#1A1A1A] transition-colors cursor-pointer"
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
                          className="px-2.5 py-1.5 bg-[#1A1A1A] hover:bg-[#5A5A40] text-white text-[10px] font-bold uppercase tracking-wider border border-[#1A1A1A] transition-colors cursor-pointer flex items-center gap-1"
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
            <div className="p-4 sm:p-5 space-y-3 bg-white">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#1A1A1A]/10 pb-2.5">
                <div className="flex items-center gap-2">
                  <Eye className="w-4 h-4 text-[#5A5A40]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1A1A1A]">
                    Live Content Inspector: <span className="font-mono text-[#5A5A40]">{activeFile.fileName}</span>
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleCopy(activeFile.downloadableContent, 'active-file-inspect')}
                    className="px-2.5 py-1 bg-[#FAF9F6] hover:bg-[#1A1A1A] hover:text-white text-[#1A1A1A] text-[10px] font-bold uppercase tracking-wider border border-[#1A1A1A] transition-colors cursor-pointer flex items-center gap-1"
                  >
                    {copiedKey === 'active-file-inspect' ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-600" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy Content</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={() => handleDownloadSingleFile(activeFile)}
                    className="px-3 py-1 bg-[#5A5A40] hover:bg-[#1A1A1A] text-white text-[10px] font-bold uppercase tracking-wider border border-[#1A1A1A] transition-colors cursor-pointer flex items-center gap-1"
                  >
                    <Download className="w-3 h-3" />
                    <span>Download {activeFile.extension}</span>
                  </button>
                </div>
              </div>

              {/* Code / Content Box */}
              <div className="relative">
                <pre className="bg-[#1A1A1A] text-[#FAF9F6] p-4 text-xs font-mono leading-relaxed overflow-x-auto max-h-[380px] border border-[#1A1A1A] whitespace-pre-wrap select-all">
                  {activeFile.downloadableContent}
                </pre>
              </div>

              <div className="flex items-center justify-between text-[10px] text-[#1A1A1A]/60 pt-1">
                <span>File Format: {activeFile.fileType} ({activeFile.extension})</span>
                <span>Ready for Fourthwall, Shopify, Gumroad & Etsy download delivery</span>
              </div>
            </div>

          </div>

          {/* Customer Delivery Guarantee */}
          <div className="bg-[#FAF9F6] p-4 border border-[#1A1A1A] flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-[#5A5A40] shrink-0 mt-0.5" />
            <div className="text-xs space-y-1">
              <span className="font-bold text-[#1A1A1A] block">
                Instant Delivery Architecture Guarantee
              </span>
              <p className="text-[#1A1A1A]/70 leading-relaxed">
                Every file above is configured for instant zip and individual file download attachment on digital storefront platforms. Customers receive immediate automated access upon checkout.
              </p>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
