import { PRODUCTS_1_TO_4 } from './products/products1to4';
import { PRODUCTS_5_TO_8 } from './products/products5to8';
import { PRODUCTS_9_TO_11 } from './products/products9to11';
import { PLAYBOOK_SERIES } from './playbookSeriesData';

export interface DetailedDeliverableFile {
  id: string;
  fileName: string;
  fileType: 'PDF Master Guide' | 'Ebook Playbook (Commercial Digital PDF)' | 'Spreadsheet (CSV/Excel)' | 'Notion Template' | 'Printable Cheatsheet' | 'Companion Tool' | 'High-Res Asset';
  extension: '.pdf' | '.csv' | '.xlsx' | '.json' | '.png' | '.zip';
  fileSize: string;
  badge: string;
  description: string;
  previewSnippet: string;
  downloadableContent: string;
}

export function generatePlaybookDeliverableFile(volumeNumber: number): DetailedDeliverableFile {
  const playbook = PLAYBOOK_SERIES.find(p => p.volumeNumber === volumeNumber) || PLAYBOOK_SERIES[0];
  
  const chaptersMarkdown = playbook.chapters.map(ch => `
### CHAPTER 0${ch.chapterNumber}: ${ch.title.toUpperCase()}
*${ch.subtitle} • Reading Duration: ${ch.readingMinutes} mins*

${ch.content}

${ch.keyTakeaways && ch.keyTakeaways.length > 0 ? `**Key Architectural Takeaways:**\n${ch.keyTakeaways.map(t => `- ${t}`).join('\n')}` : ''}

${ch.checklistItems && ch.checklistItems.length > 0 ? `**Tactical Execution Checklist:**\n${ch.checklistItems.map(c => `- [ ] ${c}`).join('\n')}` : ''}
`).join('\n\n---\n\n');

  const pocketCardsMarkdown = playbook.pocketCards.map((c, i) => `
#### CARD 0${i + 1} (4x6" Field Card): ${c.title}
*${c.description}*
${c.bulletPoints.map(b => `- ${b}`).join('\n')}
`).join('\n');

  const sourcingMarkdown = playbook.sourcesAndRetailers.map(s => `| ${s.category} | ${s.retailer} | ${s.recommendedItems} | ${s.webUrl} |`).join('\n');

  const fullContent = `# ${playbook.title}
## ${playbook.subtitle}
*Publication by SmallSpaceHome Editorial Design & Architecture Research Group • Toronto Rental Lab*
*ISBN: ${playbook.isbn} • Edition: ${playbook.edition} • Commercial Price: $${playbook.priceCad} CAD (Perceived Value: $${playbook.perceivedValueCad} CAD)*

---

### PAGE 2: MANDATORY COMMERCIAL NOTICE & PERSONAL USE LICENSE
**Grant of License:** SmallSpaceHome Inc. grants the purchaser a single-user, non-exclusive, non-transferable Personal Use License for this Digital Product Playbook Kit.
**Digital Resale Protection:** You may NOT resell, sub-license, distribute, redistribute, bundle, or share this digital ebook or its component assets in whole or in part on any digital marketplace (e.g., Fourthwall, Gumroad, Etsy, Shopify) or file-sharing network.
**Intellectual Property:** All content remains the exclusive copyright of SmallSpaceHome Inc.
**Tenant & Structural Disclaimer:** Fastener and load recommendations are based on standard North American rental drywall construction. Always test in inconspicuous spots and adhere to local residential tenancy laws.

---

### CORE DELIVERABLE PROMISE
${playbook.promise}
*Target Audience: ${playbook.audience}*

---

${chaptersMarkdown}

---

### APPENDIX A: PRINTABLE 4x6" POCKET COMPANION FIELD CARDS
${pocketCardsMarkdown}

---

### APPENDIX B: VERIFIED CANADIAN SOURCING & RETAILER MATRIX
| Category | Verified Retailer | Recommended Model / SKU | Source URL |
|---|---|---|---|
${sourcingMarkdown}
`;

  return {
    id: `playbook-vol-0${playbook.volumeNumber}`,
    fileName: playbook.fileName,
    fileType: 'Ebook Playbook (Commercial Digital PDF)',
    extension: '.pdf',
    fileSize: playbook.targetFileSize,
    badge: `${playbook.volumeLabel} (Commercial Ebook PDF)`,
    description: `${playbook.title} — ${playbook.subtitle}. Digital publication format with embedded fonts, clickable Table of Contents, Personal Use License, and Verified Canadian Retailer Matrix.`,
    previewSnippet: `VOL 0${playbook.volumeNumber}: ${playbook.title}\nISBN: ${playbook.isbn} • ${playbook.targetFileSize}\nIncludes ${playbook.chapters.length} In-Depth Chapters, Page 2 Personal Use License, ${playbook.pocketCards.length} Pocket Companion Cards, and Verified Canadian Retailer Directory.`,
    downloadableContent: fullContent.trim()
  };
}

export interface ProductAssetBundle {
  productId: string;
  rank: number;
  title: string;
  photography: {
    url: string;
    alt: string;
    caption: string;
    spatialSpecs: string;
    palette: string[];
    stylingKeywords: string[];
  };
  deliverablesOverview: string;
  totalAssetsCount: number;
  files: DetailedDeliverableFile[];
}

// Master combined bundle registry for all 11 products
export const PRODUCT_ASSET_BUNDLES: Record<string, ProductAssetBundle> = {
  ...PRODUCTS_1_TO_4,
  ...PRODUCTS_5_TO_8,
  ...PRODUCTS_9_TO_11,

  // Direct alias mappings to support any variation in product IDs
  'kit-kitchen-space-doubler': PRODUCTS_1_TO_4['kit-micro-kitchen-maxima'],
  'kit-closet-vertical-storage': PRODUCTS_1_TO_4['kit-closet-quadrupler'],
  'kit-deposit-defense': PRODUCTS_1_TO_4['kit-deposit-protection-defense'],
  'kit-acoustic-privacy': PRODUCTS_5_TO_8['kit-studio-acoustic-privacy'],
  'kit-micro-entryway': PRODUCTS_5_TO_8['kit-entryway-dropzone'],
  'kit-studio-bed-separation': PRODUCTS_5_TO_8['kit-studio-zoning-separation'],
  'kit-optical-space-expander': PRODUCTS_9_TO_11['kit-optical-expander-lighting'],
  'kit-small-bathroom-maximizer': PRODUCTS_9_TO_11['kit-small-bathroom-maximizer'],
  'kit-bathroom-vanity-shower': PRODUCTS_9_TO_11['kit-small-bathroom-maximizer']
};

export const getProductAssetBundle = (productId: string): ProductAssetBundle => {
  if (PRODUCT_ASSET_BUNDLES[productId]) {
    return PRODUCT_ASSET_BUNDLES[productId];
  }

  // Fallback to product 1 if unknown ID
  return PRODUCT_ASSET_BUNDLES['kit-zero-damage-mounting'];
};
