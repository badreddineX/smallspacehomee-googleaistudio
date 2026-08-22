import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { PlaybookMeta, PLAYBOOK_SERIES } from '../data/playbookSeriesData';
import { getVolumeEnrichment } from './playbookEnrichmentData';
import {
  createRenderContext,
  renderPlaybookCover,
  renderLicenseAndDisclaimer,
  renderTableOfContents,
  renderPlaybookChapters,
  renderExecutionChecklist,
  renderAppendix,
  render4x6PocketCards,
  addRunningHeaderAndFooter,
  PALETTE
} from './pdfPlaybookRenderer';

interface PDFOptions {
  fileName: string;
  documentTitle: string;
  productTitle?: string;
  productRank?: number;
  badge?: string;
  content: string;
}

/**
 * Generates a clean, professional, publication-ready PDF document
 * using jsPDF and jsPDF-autotable matching smallspacehome.ca design language.
 */
export function generateProfessionalPDF({
  fileName,
  documentTitle,
  productTitle,
  productRank,
  badge,
  content,
}: PDFOptions): jsPDF {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 18;
  const contentWidth = pageWidth - margin * 2;
  let cursorY = margin;

  // SmallSpaceHome Brand Editorial Palette
  const { creamBg, softCharcoal, terracotta, sageGreen, amberRed, hairlineGrey, mutedText, sageLightBg, redLightBg } = PALETTE;

  // Helper for adding headers and footers to new pages
  const addHeaderAndFooter = (pageNumber: number, totalPages: number) => {
    // Header top terracotta accent band
    doc.setFillColor(terracotta[0], terracotta[1], terracotta[2]);
    doc.rect(0, 0, pageWidth, 4, 'F');

    // Header running head
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7.5);
    doc.setTextColor(terracotta[0], terracotta[1], terracotta[2]);
    doc.text('SMALLSPACEHOME.CA • EDITORIAL PLAYBOOK', margin, 11);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7);
    doc.setTextColor(mutedText[0], mutedText[1], mutedText[2]);
    doc.text('TORONTO RENTAL LAB ARCHIVE (510 SQ FT APARTMENT)', pageWidth - margin, 11, { align: 'right' });

    doc.setDrawColor(hairlineGrey[0], hairlineGrey[1], hairlineGrey[2]);
    doc.setLineWidth(0.3);
    doc.line(margin, 13, pageWidth - margin, 13);

    // Footer
    doc.setDrawColor(hairlineGrey[0], hairlineGrey[1], hairlineGrey[2]);
    doc.setLineWidth(0.3);
    doc.line(margin, pageHeight - 12, pageWidth - margin, pageHeight - 12);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(mutedText[0], mutedText[1], mutedText[2]);
    doc.text('SmallSpaceHome • Tested in a real 510 sq ft Toronto rental apartment', margin, pageHeight - 7);
    doc.text(`Page ${pageNumber} of ${totalPages}`, pageWidth - margin, pageHeight - 7, { align: 'right' });
  };

  // Check page overflow and trigger page break if needed
  const checkPageBreak = (neededHeight: number) => {
    if (cursorY + neededHeight > pageHeight - 20) {
      doc.addPage();
      // Paint warm cream page background
      doc.setFillColor(creamBg[0], creamBg[1], creamBg[2]);
      doc.rect(0, 0, pageWidth, pageHeight, 'F');
      cursorY = 22; // Start below header
    }
  };

  // Paint first page warm cream background
  doc.setFillColor(creamBg[0], creamBg[1], creamBg[2]);
  doc.rect(0, 0, pageWidth, pageHeight, 'F');

  // --- COVER / HEADER SECTION ---
  cursorY = 22;

  // Document Badge / Product Rank
  if (productRank || badge) {
    const badgeText = `PRODUCT #${productRank || 1} • ${badge || 'FIELD DELIVERABLE'}`.toUpperCase();
    doc.setFillColor(255, 255, 255);
    doc.setDrawColor(hairlineGrey[0], hairlineGrey[1], hairlineGrey[2]);
    doc.setLineWidth(0.3);
    doc.roundedRect(margin, cursorY, 65, 6, 1, 1, 'FD');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7);
    doc.setTextColor(terracotta[0], terracotta[1], terracotta[2]);
    doc.text(badgeText, margin + 3, cursorY + 4.2);
    cursorY += 10;
  }

  // Document Title in Serif
  doc.setFont('times', 'bold');
  doc.setFontSize(18);
  doc.setTextColor(softCharcoal[0], softCharcoal[1], softCharcoal[2]);
  const titleLines = doc.splitTextToSize(documentTitle.replace(/\.md|\.pdf|\.txt/gi, '').replace(/_/g, ' '), contentWidth);
  doc.text(titleLines, margin, cursorY);
  cursorY += titleLines.length * 7 + 2;

  // Product Subtitle
  if (productTitle) {
    doc.setFont('times', 'italic');
    doc.setFontSize(11);
    doc.setTextColor(terracotta[0], terracotta[1], terracotta[2]);
    doc.text(`Official Component of: ${productTitle}`, margin, cursorY);
    cursorY += 6;
  }

  // Brand Positioning Statement
  doc.setFont('times', 'italic');
  doc.setFontSize(8.5);
  doc.setTextColor(mutedText[0], mutedText[1], mutedText[2]);
  doc.text('"Your space doesn\'t need to be bigger — it needs to work smarter."', margin, cursorY);
  cursorY += 5;

  // Terracotta hairline divider
  doc.setDrawColor(terracotta[0], terracotta[1], terracotta[2]);
  doc.setLineWidth(0.8);
  doc.line(margin, cursorY, margin + 35, cursorY);
  cursorY += 8;

  // --- PARSE AND RENDER CONTENT ---
  const lines = content.split('\n');
  let inTable = false;
  let tableHeaders: string[] = [];
  let tableRows: string[][] = [];

  const flushTable = () => {
    if (tableHeaders.length > 0 && tableRows.length > 0) {
      checkPageBreak(30);
      autoTable(doc, {
        startY: cursorY,
        head: [tableHeaders],
        body: tableRows,
        margin: { left: margin, right: margin },
        styles: {
          fontSize: 8,
          font: 'helvetica',
          textColor: [43, 40, 37],
          cellPadding: 2.5,
          lineColor: [220, 213, 203],
          lineWidth: 0.2,
        },
        headStyles: {
          fillColor: [195, 111, 74],
          textColor: [250, 247, 242],
          fontStyle: 'bold',
        },
        alternateRowStyles: {
          fillColor: [255, 255, 255],
        },
      });
      // @ts-expect-error - jsPDF autoTable attaches lastAutoTable
      cursorY = doc.lastAutoTable.finalY + 6;
      tableHeaders = [];
      tableRows = [];
      inTable = false;
    }
  };

  for (let i = 0; i < lines.length; i++) {
    const rawLine = lines[i];
    const trimmed = rawLine.trim();

    // Check for markdown table line
    if (trimmed.startsWith('|') && trimmed.endsWith('|')) {
      const cells = trimmed
        .split('|')
        .slice(1, -1)
        .map(c => c.trim());

      // If separator line like |---|---|
      if (cells.every(c => /^[-:]+$/.test(c))) {
        continue;
      }

      if (!inTable) {
        tableHeaders = cells;
        inTable = true;
      } else {
        tableRows.push(cells);
      }
      continue;
    } else if (inTable) {
      flushTable();
    }

    if (!trimmed) {
      cursorY += 3;
      continue;
    }

    // Markdown H1 (# Header) - Chapter Opening Serif
    if (trimmed.startsWith('# ')) {
      checkPageBreak(16);
      const text = trimmed.replace(/^#\s+/, '');
      doc.setFillColor(255, 255, 255);
      doc.setDrawColor(hairlineGrey[0], hairlineGrey[1], hairlineGrey[2]);
      doc.roundedRect(margin, cursorY - 1, contentWidth, 8, 1, 1, 'FD');
      doc.setFillColor(terracotta[0], terracotta[1], terracotta[2]);
      doc.rect(margin, cursorY - 1, 2.5, 8, 'F');

      doc.setFont('times', 'bold');
      doc.setFontSize(12);
      doc.setTextColor(terracotta[0], terracotta[1], terracotta[2]);
      doc.text(text, margin + 5, cursorY + 5);
      cursorY += 12;
      continue;
    }

    // Markdown H2 (## Header) or Card Header
    if (trimmed.startsWith('## ') || trimmed.startsWith('=== CARD')) {
      checkPageBreak(14);
      const text = trimmed.replace(/^##\s+/, '').replace(/===/g, '').trim();
      doc.setFont('times', 'bold');
      doc.setFontSize(11);
      doc.setTextColor(terracotta[0], terracotta[1], terracotta[2]);
      doc.text(text, margin, cursorY);
      cursorY += 2;
      doc.setDrawColor(hairlineGrey[0], hairlineGrey[1], hairlineGrey[2]);
      doc.setLineWidth(0.4);
      doc.line(margin, cursorY, margin + contentWidth, cursorY);
      cursorY += 6;
      continue;
    }

    // Markdown H3 (### Header)
    if (trimmed.startsWith('### ')) {
      checkPageBreak(10);
      const text = trimmed.replace(/^###\s+/, '');
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9);
      doc.setTextColor(softCharcoal[0], softCharcoal[1], softCharcoal[2]);
      doc.text(text, margin, cursorY);
      cursorY += 5.5;
      continue;
    }

    // Horizontal Rule (--- or ===)
    if (trimmed === '---' || trimmed === '===' || trimmed === '=====================================================') {
      checkPageBreak(6);
      doc.setDrawColor(hairlineGrey[0], hairlineGrey[1], hairlineGrey[2]);
      doc.setLineWidth(0.4);
      doc.line(margin, cursorY, margin + contentWidth, cursorY);
      cursorY += 5;
      continue;
    }

    // Callout boxes (> Callout, RULE:, DANGER:, AVOID:, PRO TIP:, NOTE:)
    if (trimmed.startsWith('> ') || trimmed.startsWith('NOTE:') || trimmed.startsWith('IMPORTANT:') || trimmed.startsWith('RULE:') || trimmed.startsWith('DANGER:') || trimmed.startsWith('AVOID:') || trimmed.startsWith('PRO TIP:')) {
      checkPageBreak(18);
      const cleanText = trimmed.replace(/^>\s*/, '');
      const isDanger = cleanText.toLowerCase().includes('[danger') || cleanText.toLowerCase().includes('[avoid') || cleanText.startsWith('DANGER:') || cleanText.startsWith('AVOID:');
      const isRule = cleanText.toLowerCase().includes('[rule') || cleanText.startsWith('RULE:');
      const isTip = cleanText.toLowerCase().includes('[pro tip') || cleanText.toLowerCase().includes('[tip') || cleanText.startsWith('PRO TIP:');

      // Box styling colors matching design system
      let boxBg = [255, 255, 255];
      let barColor = sageGreen;
      let titleColor = sageGreen;
      let badgeLabel = 'FIELD NOTE & BEST PRACTICE';

      if (isDanger) {
        boxBg = redLightBg; // Light warm-red tint
        barColor = amberRed; // Desaturated amber-red
        titleColor = amberRed;
        badgeLabel = '⚠ LOAD LIMIT & DAMAGE WARNING';
      } else if (isRule) {
        boxBg = sageLightBg; // Soft sage tint
        barColor = sageGreen;
        titleColor = sageGreen;
        badgeLabel = 'ZERO-DAMAGE MANDATORY RULE';
      } else if (isTip) {
        boxBg = sageLightBg; // Soft sage tint
        barColor = sageGreen;
        titleColor = sageGreen;
        badgeLabel = 'PRACTICAL RENTER TIP (510 SQ FT LAB)';
      }

      doc.setFillColor(boxBg[0], boxBg[1], boxBg[2]);
      doc.setDrawColor(hairlineGrey[0], hairlineGrey[1], hairlineGrey[2]);
      doc.setLineWidth(0.3);

      const wrapped = doc.splitTextToSize(cleanText, contentWidth - 10);
      const boxHeight = wrapped.length * 4.4 + 10;
      doc.roundedRect(margin, cursorY - 1, contentWidth, boxHeight, 1, 1, 'FD');
      doc.setFillColor(barColor[0], barColor[1], barColor[2]);
      doc.rect(margin, cursorY - 1, 2.5, boxHeight, 'F'); // Left accent bar

      // Badge label
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(7);
      doc.setTextColor(titleColor[0], titleColor[1], titleColor[2]);
      doc.text(badgeLabel, margin + 6, cursorY + 4);

      // Body text
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8);
      doc.setTextColor(softCharcoal[0], softCharcoal[1], softCharcoal[2]);
      doc.text(wrapped, margin + 6, cursorY + 8.5);
      cursorY += boxHeight + 4;
      continue;
    }

    // Checklist item ([ ] or [x])
    if (trimmed.startsWith('[ ]') || trimmed.startsWith('[x]') || trimmed.startsWith('[X]')) {
      checkPageBreak(7);
      const isChecked = trimmed.startsWith('[x]') || trimmed.startsWith('[X]');
      const text = trimmed.replace(/^\[[ xX]\]\s*/, '');

      // Draw box
      doc.setDrawColor(sageGreen[0], sageGreen[1], sageGreen[2]);
      doc.setLineWidth(0.3);
      doc.rect(margin, cursorY - 3, 3, 3);
      if (isChecked) {
        doc.setFillColor(sageGreen[0], sageGreen[1], sageGreen[2]);
        doc.rect(margin + 0.6, cursorY - 2.4, 1.8, 1.8, 'F');
      }

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8);
      doc.setTextColor(softCharcoal[0], softCharcoal[1], softCharcoal[2]);
      const wrapped = doc.splitTextToSize(text, contentWidth - 6);
      doc.text(wrapped, margin + 6, cursorY);
      cursorY += wrapped.length * 4.2 + 1.5;
      continue;
    }

    // Bullet point (- or • or * )
    if (trimmed.startsWith('- ') || trimmed.startsWith('• ') || trimmed.startsWith('* ')) {
      checkPageBreak(7);
      const text = trimmed.replace(/^[-•*]\s*/, '');
      doc.setFillColor(terracotta[0], terracotta[1], terracotta[2]);
      doc.circle(margin + 1.5, cursorY - 1, 0.7, 'F');

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8);
      doc.setTextColor(softCharcoal[0], softCharcoal[1], softCharcoal[2]);
      const wrapped = doc.splitTextToSize(text, contentWidth - 5);
      doc.text(wrapped, margin + 5, cursorY);
      cursorY += wrapped.length * 4.2 + 1.5;
      continue;
    }

    // Standard numbered lists (1. , 2. )
    const numberedMatch = trimmed.match(/^(\d+[\.\)])\s*(.*)/);
    if (numberedMatch) {
      checkPageBreak(7);
      const numberPrefix = numberedMatch[1];
      const text = numberedMatch[2];

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8);
      doc.setTextColor(terracotta[0], terracotta[1], terracotta[2]);
      doc.text(numberPrefix, margin, cursorY);

      doc.setFont('helvetica', 'normal');
      doc.setTextColor(softCharcoal[0], softCharcoal[1], softCharcoal[2]);
      const wrapped = doc.splitTextToSize(text, contentWidth - 8);
      doc.text(wrapped, margin + 8, cursorY);
      cursorY += wrapped.length * 4.2 + 1.5;
      continue;
    }

    // Standard text paragraph
    checkPageBreak(6);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(softCharcoal[0], softCharcoal[1], softCharcoal[2]);
    const wrapped = doc.splitTextToSize(trimmed, contentWidth);
    doc.text(wrapped, margin, cursorY);
    cursorY += wrapped.length * 4.2 + 2;
  }

  if (inTable) {
    flushTable();
  }

  // Add headers and footers to all pages
  const totalPages = doc.internal.pages.length - 1;
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    addHeaderAndFooter(i, totalPages);
  }

  return doc;
}

/**
 * Generates a full, publication-ready commercial PDF Playbook for any of the 11 volumes
 * in the SmallSpaceHome Digital Product Playbook Series following the Master Playbook architecture:
 * - Cover page with luxury typography, ISBN, volume badge, and metadata (Page 1)
 * - Personal Use License + Important Safety & Property Disclaimers (Page 2)
 * - Table of Contents with interactive link navigation (Page 3)
 * - Structured multi-page Chapters, architectural schematics, formulas, stop conditions & checklists
 * - Stand-alone 4-Stage Operational Execution Checklist (Before · During · After · Remove)
 * - Appendix A: 5-Column Structured Troubleshooting Matrix
 * - Appendix B: Verified Canadian Retailer & Sourcing Matrix
 * - Appendix C: 4x6" Printable Pocket Field Cards (Cards 01–04)
 */
export function generatePlaybookPDF(playbook: PlaybookMeta): jsPDF {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  doc.setProperties({
    title: playbook.title,
    subject: `${playbook.volumeLabel} - ${playbook.category}`,
    author: playbook.author,
    keywords: `SmallSpaceHome, ${playbook.category}, Rental Apartment, Toronto Rental Lab, DIY, Architecture`,
    creator: 'SmallSpaceHome Digital Publishing OS',
  });

  const ctx = createRenderContext(doc, playbook);

  // 1. Cover Page (Page 1)
  renderPlaybookCover(ctx);

  // 2. Personal Use License + Legal Disclaimers (Page 2)
  renderLicenseAndDisclaimer(ctx);

  // 3. Table of Contents & Roadmap (Page 3)
  renderTableOfContents(ctx);

  // 4. Chapters & Tactical Execution
  renderPlaybookChapters(ctx);

  // 5. Standalone Execution Checklist (Before · During · After · Remove)
  renderExecutionChecklist(ctx);

  // 6. Appendix: Troubleshooting Matrix & Canadian Sourcing
  renderAppendix(ctx);

  // 7. 4x6" Printable Pocket Field Cards
  render4x6PocketCards(ctx);

  // Add running headers and footers to all pages except Cover (Page 1)
  const totalPages = doc.internal.pages.length - 1;
  for (let i = 2; i <= totalPages; i++) {
    doc.setPage(i);
    addRunningHeaderAndFooter(ctx, i, totalPages, playbook.title);
  }

  return doc;
}

/**
 * Generates the unified Master All-In-One PDF containing all 11 Products in a single document:
 * 1. Commercial Specifications, Licensing & Disclaimers
 * 2. Complete Chapter Guides, Architectural Schematics & Formulas
 * 3. Standalone 4-Stage Execution Checklists & 5-Column Troubleshooting Matrices
 * 4. Printable 4x6" Field Companion Reference Cards (Cards 01-04)
 */
export function generateMasterAllInOneCompendiumPDF(playbooks?: PlaybookMeta[]): jsPDF {
  const series = playbooks || PLAYBOOK_SERIES;

  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  doc.setProperties({
    title: 'SmallSpaceHome - Master All-In-One Commercial Product Compendium',
    subject: 'All 11 Digital Product Playbooks + Printable Pocket Cheatsheets + Commercial Specifications & Licensing',
    author: 'SmallSpaceHome Editorial Design & Architecture Research Group',
    keywords: 'SmallSpaceHome, All Products, Digital Playbooks, Pocket Cheatsheets, Commercial PDF, Renter Friendly, Toronto Rental Lab',
    creator: 'SmallSpaceHome Digital Publishing OS',
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 18;
  const contentWidth = pageWidth - margin * 2;
  const { creamBg, softCharcoal, terracotta, sageGreen, hairlineGrey } = PALETTE;

  // Master Compendium Cover
  doc.setFillColor(creamBg[0], creamBg[1], creamBg[2]);
  doc.rect(0, 0, pageWidth, pageHeight, 'F');

  doc.setDrawColor(hairlineGrey[0], hairlineGrey[1], hairlineGrey[2]);
  doc.setLineWidth(0.8);
  doc.rect(margin - 4, margin - 4, contentWidth + 8, pageHeight - margin * 2 + 8);

  doc.setFillColor(terracotta[0], terracotta[1], terracotta[2]);
  doc.rect(margin, margin, contentWidth, 14, 'F');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(creamBg[0], creamBg[1], creamBg[2]);
  doc.text('SMALLSPACEHOME.CA • ALL-IN-ONE COMMERCIAL MASTER COMPENDIUM', margin + 4, margin + 9);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.text('11 PRODUCTS IN ONE PDF', pageWidth - margin - 4, margin + 9, { align: 'right' });

  // Volume & Badge Pill
  doc.setFillColor(255, 255, 255);
  doc.setDrawColor(terracotta[0], terracotta[1], terracotta[2]);
  doc.setLineWidth(0.4);
  doc.roundedRect(margin, margin + 20, contentWidth, 8.5, 1.5, 1.5, 'FD');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7.5);
  doc.setTextColor(terracotta[0], terracotta[1], terracotta[2]);
  doc.text('COMPLETE 11-VOLUME ARCHIVE: PLAYBOOKS + 4x6" FIELD CARDS + COMMERCIAL LICENSING', margin + 4, margin + 26);

  // Grand Title
  let curY = margin + 40;
  doc.setFont('times', 'bold');
  doc.setFontSize(22);
  doc.setTextColor(softCharcoal[0], softCharcoal[1], softCharcoal[2]);
  doc.text('The SmallSpaceHome Master Product Suite', margin, curY);
  curY += 8;

  doc.setFont('times', 'italic');
  doc.setFontSize(11.5);
  doc.setTextColor(terracotta[0], terracotta[1], terracotta[2]);
  doc.text('The Complete 11-Volume Field Playbook Library, 4x6" Pocket Field Cards & Sourcing Matrices', margin, curY);
  curY += 8;

  doc.setDrawColor(terracotta[0], terracotta[1], terracotta[2]);
  doc.setLineWidth(1);
  doc.line(margin, curY, margin + 45, curY);
  curY += 8;

  // Overview Box
  doc.setFillColor(255, 255, 255);
  doc.setDrawColor(hairlineGrey[0], hairlineGrey[1], hairlineGrey[2]);
  doc.setLineWidth(0.4);
  doc.roundedRect(margin, curY, contentWidth, 26, 1.5, 1.5, 'FD');
  doc.setFillColor(sageGreen[0], sageGreen[1], sageGreen[2]);
  doc.rect(margin, curY, 3, 26, 'F');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8);
  doc.setTextColor(sageGreen[0], sageGreen[1], sageGreen[2]);
  doc.text('COMPREHENSIVE MASTER ARCHIVE OF ALL 11 SPATIAL OPTIMIZATION SYSTEMS:', margin + 6, curY + 6);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(softCharcoal[0], softCharcoal[1], softCharcoal[2]);
  doc.text('1. COMMERCIAL & TECHNICAL LICENSING: Single-user personal license, legal disclaimers, and 40% safety margin.', margin + 6, curY + 12);
  doc.text('2. FULL TACTICAL CHAPTERS: Comprehensive narrative guides, architectural schematics, and worked formulas.', margin + 6, curY + 17);
  doc.text('3. STAND-ALONE CHECKLISTS & 4x6" FIELD CARDS: On-site operational checklists and cut-ready pocket companion cards.', margin + 6, curY + 22);

  curY += 32;

  // Product Summary Table
  const productSummaryRows = series.map((p) => [
    `Vol. 0${p.volumeNumber}`,
    p.title.length > 50 ? p.title.substring(0, 48) + '...' : p.title,
    `$${p.priceCad} CAD`,
    p.isbn
  ]);

  autoTable(doc, {
    startY: curY,
    head: [['Vol.', 'Product Name', 'Retail ($CAD)', 'Registered ISBN']],
    body: productSummaryRows,
    margin: { left: margin, right: margin },
    styles: {
      fontSize: 7,
      font: 'helvetica',
      textColor: [43, 40, 37],
      cellPadding: 1.6,
      lineColor: [220, 213, 203],
      lineWidth: 0.2
    },
    headStyles: {
      fillColor: [195, 111, 74],
      textColor: [250, 247, 242],
      fontStyle: 'bold'
    },
    alternateRowStyles: {
      fillColor: [250, 247, 242]
    }
  });

  // Render each volume in the master compendium
  series.forEach((vol) => {
    const volCtx = createRenderContext(doc, vol);
    renderPlaybookCover(volCtx);
    renderLicenseAndDisclaimer(volCtx);
    renderTableOfContents(volCtx);
    renderPlaybookChapters(volCtx);
    renderExecutionChecklist(volCtx);
    renderAppendix(volCtx);
    render4x6PocketCards(volCtx);
  });

  // Stamp running header and footer across all master pages (except Cover)
  const totalMasterPages = doc.internal.pages.length - 1;
  for (let i = 2; i <= totalMasterPages; i++) {
    doc.setPage(i);
    const enrichment = getVolumeEnrichment(series[0].id, 1, series[0].title, series[0].category);
    addRunningHeaderAndFooter(
      {
        doc,
        playbook: series[0],
        enrichment,
        pageWidth,
        pageHeight,
        margin,
        contentWidth,
        tocTargets: {}
      },
      i,
      totalMasterPages,
      'MASTER 11-PRODUCT COMPENDIUM'
    );
  }

  return doc;
}

/**
 * Downloads the Master All-In-One Compendium PDF containing all 11 Products
 * (Playbooks + Printable Pocket Cheatsheets + Commercial Specs & License).
 */
export function downloadMasterAllInOnePDF(playbooks?: PlaybookMeta[]): void {
  const doc = generateMasterAllInOneCompendiumPDF(playbooks);
  doc.save('SmallSpaceHome_Master_All_In_One_11_Product_Compendium.pdf');
}

/**
 * Downloads a single product's All-In-One PDF (Playbook + Pocket Cheatsheets + Commercial License).
 */
export function downloadProductAllInOnePDF(playbook: PlaybookMeta): void {
  const doc = generatePlaybookPDF(playbook);
  let cleanName = playbook.fileName;
  if (!cleanName.toLowerCase().includes('all_in_one')) {
    cleanName = cleanName.replace('.pdf', '_All_In_One_Playbook_And_Cheatsheets.pdf');
  }
  doc.save(cleanName);
}

/**
 * Downloads a complete commercial playbook PDF to the user's filesystem.
 */
export function downloadPlaybookPDF(playbook: PlaybookMeta): void {
  const doc = generatePlaybookPDF(playbook);
  doc.save(playbook.fileName);
}

/**
 * Downloads a generated PDF file directly to user device with valid binary PDF content.
 */
export function downloadValidPDF(
  optionsOrContent: PDFOptions | string,
  fileName?: string,
  productTitle?: string,
  badge?: string
): void {
  let opts: PDFOptions;
  if (typeof optionsOrContent === 'string') {
    opts = {
      content: optionsOrContent,
      fileName: fileName || 'SmallSpaceHome_Document.pdf',
      documentTitle: (fileName || 'Document').replace(/_/g, ' ').replace(/\.[a-z0-9]+$/i, ''),
      productTitle: productTitle,
      badge: badge || 'Master Deliverable'
    };
  } else {
    opts = optionsOrContent;
  }

  const doc = generateProfessionalPDF(opts);
  let cleanName = opts.fileName;
  if (!cleanName.toLowerCase().endsWith('.pdf')) {
    cleanName = cleanName.replace(/\.[a-z0-9]+$/i, '') + '.pdf';
  }
  doc.save(cleanName);
}
