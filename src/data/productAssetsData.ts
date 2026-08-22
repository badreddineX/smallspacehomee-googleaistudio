import { PRODUCTS_1_TO_4 } from './products/products1to4';
import { PRODUCTS_5_TO_8 } from './products/products5to8';
import { PRODUCTS_9_TO_11 } from './products/products9to11';
import { PLAYBOOK_SERIES } from './playbookSeriesData';
import { getVolumeEnrichment } from '../utils/playbookEnrichmentData';

export interface DetailedDeliverableFile {
  id: string;
  fileName: string;
  fileType: 'PDF Master Field Playbook' | 'PDF 4×6" Pocket Field Cards' | 'PDF Quick-Start Execution Checklist' | 'PDF Document';
  extension: '.pdf';
  fileSize: string;
  badge: string;
  description: string;
  previewSnippet: string;
  downloadableContent: string;
}

/**
 * Generates the permanent 3-PDF Deliverable Suite for any SmallSpaceHome product volume:
 * 1. PDF 01 — MASTER FIELD PLAYBOOK (Learn + Understand + Decide)
 * 2. PDF 02 — 4×6" POCKET FIELD CARDS (Quick Field Reference)
 * 3. PDF 03 — QUICK-START EXECUTION CHECKLIST (Execute)
 */
export function generateThreePDFDeliverables(volumeNumber: number): DetailedDeliverableFile[] {
  const playbook = PLAYBOOK_SERIES.find(p => p.volumeNumber === volumeNumber) || PLAYBOOK_SERIES[0];
  const enrichment = getVolumeEnrichment(playbook.id, playbook.volumeNumber, playbook.title, playbook.category);

  // 1. PDF 01 — MASTER FIELD PLAYBOOK
  const pdf1: DetailedDeliverableFile = {
    id: `playbook-vol-0${playbook.volumeNumber}-pdf-01`,
    fileName: `SmallSpaceHome_Vol_0${playbook.volumeNumber}_Master_Field_Playbook.pdf`,
    fileType: 'PDF Master Field Playbook',
    extension: '.pdf',
    fileSize: playbook.targetFileSize,
    badge: 'PDF 01 • Master Field Playbook (Learn · Understand · Decide)',
    description: `The complete core publication (~25–36 pages). Includes cover, personal use license, safety disclaimers, copyright, table of contents, ${playbook.chapters.length} tactical chapters, structural schematics, worked formulas, 5-column troubleshooting matrix, and Canadian retailer sourcing directory.`,
    previewSnippet: `[PDF 01 — MASTER FIELD PLAYBOOK]\nVOL 0${playbook.volumeNumber}: ${playbook.title}\nISBN: ${playbook.isbn} • Target Size: ${playbook.targetFileSize}\n\n• MANDATORY LICENSE & SAFETY DISCLAIMER (Page 2)\n• ${playbook.chapters.length} STRATEGIC CHAPTERS & WORKED FORMULAS\n• APPENDIX A: 5-COLUMN TROUBLESHOOTING MATRIX\n• APPENDIX B: VERIFIED CANADIAN SOURCING MATRIX\n• RUNNING HEADERS & FOOTERS ON ALL CONTENT PAGES`,
    downloadableContent: `# ${playbook.title} — MASTER FIELD PLAYBOOK (PDF 01)\n## ${playbook.subtitle}\n*ISBN: ${playbook.isbn} • Author: ${playbook.author} • Publisher: ${playbook.publisher}*\n\n${playbook.chapters.map(c => `### Chapter 0${c.chapterNumber}: ${c.title}\n${c.content}`).join('\n\n')}`
  };

  // 2. PDF 02 — 4x6" POCKET FIELD CARDS
  const pdf2: DetailedDeliverableFile = {
    id: `playbook-vol-0${playbook.volumeNumber}-pdf-02`,
    fileName: `SmallSpaceHome_Vol_0${playbook.volumeNumber}_Pocket_Field_Cards_4x6.pdf`,
    fileType: 'PDF 4×6" Pocket Field Cards',
    extension: '.pdf',
    fileSize: '4 Cards • 4x6" Print-Ready • 850 KB',
    badge: 'PDF 02 • 4×6" Pocket Field Cards (Quick Field Reference)',
    description: 'Dedicated standalone 4×6" print-ready reference cards with cut guides. Contains: Card 01 Surface Preparation, Card 02 Hardware Selection / Installation, Card 03 Removal & Restoration, Card 04 Hardware Store Quick Buy.',
    previewSnippet: `[PDF 02 — 4×6" POCKET FIELD CARDS]\n• CARD 01: Surface Preparation (Solvent protocols & substrate check)\n• CARD 02: Hardware Selection / Installation (Load physics, 40% safety buffer formula)\n• CARD 03: Removal & Restoration (Zero-damage stretch & spackle repair)\n• CARD 04: Hardware Store Quick Buy (Canadian SKUs & shopping list)\n\nPrint-ready & phone-readable with cut guides and high-contrast typography.`,
    downloadableContent: `# ${playbook.title} — 4x6" POCKET FIELD CARDS (PDF 02)\n\n${enrichment.pocketCards.map(c => `### CARD ${c.cardNumber}: ${c.title}\n- Purpose: ${c.purpose}\n- Critical Steps:\n${c.criticalSteps.map(s => `  * ${s}`).join('\n')}\n- Stop Condition: ${c.stopCondition}`).join('\n\n')}`
  };

  // 3. PDF 03 — QUICK-START EXECUTION CHECKLIST
  const pdf3: DetailedDeliverableFile = {
    id: `playbook-vol-0${playbook.volumeNumber}-pdf-03`,
    fileName: `SmallSpaceHome_Vol_0${playbook.volumeNumber}_Quick_Start_Execution_Checklist.pdf`,
    fileType: 'PDF Quick-Start Execution Checklist',
    extension: '.pdf',
    fileSize: '1 Page • High-Density A4 • 350 KB',
    badge: 'PDF 03 • Quick-Start Execution Checklist (Execute)',
    description: 'Dedicated standalone 1-page operational execution sheet organized strictly into 4 stages: (1) BEFORE, (2) DURING, (3) AFTER, and (4) REMOVE. Dense, highly actionable with checkboxes and field sign-off lines.',
    previewSnippet: `[PDF 03 — QUICK-START EXECUTION CHECKLIST]\n• STAGE 1: BEFORE INSTALLATION (Substrate, Weight, Compatibility, Tools)\n• STAGE 2: DURING INSTALLATION (Surface prep, Measure/mark, Cure window)\n• STAGE 3: AFTER INSTALLATION (Verification, Inspection, Photography)\n• STAGE 4: REMOVAL & RESTORATION (Move-out safe, Spackle touch-up)\n\nSingle-page high-density operational field guide.`,
    downloadableContent: `# ${playbook.title} — QUICK-START EXECUTION CHECKLIST (PDF 03)\n\n${enrichment.executionChecklist.map(s => `### ${s.stageName}: ${s.title}\n${s.items.map(i => `- [ ] ${i}`).join('\n')}`).join('\n\n')}`
  };

  return [pdf1, pdf2, pdf3];
}

export function generatePlaybookDeliverableFile(volumeNumber: number): DetailedDeliverableFile {
  return generateThreePDFDeliverables(volumeNumber)[0];
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
