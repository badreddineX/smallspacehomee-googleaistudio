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
  renderDedicated4x6PocketCardsPDF,
  renderDedicatedQuickStartChecklistPDF,
  renderAppendix,
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
 * ============================================================================
 * SMALLSPACEHOME 3-PDF DELIVERY SYSTEM
 * PERMANENT STANDARD: Every product is delivered as EXACTLY THREE SEPARATE PDFs
 * 1. PDF 01 — MASTER FIELD PLAYBOOK (Learn + Understand + Decide)
 * 2. PDF 02 — 4x6" POCKET FIELD CARDS (Quick Field Reference)
 * 3. PDF 03 — QUICK-START EXECUTION CHECKLIST (Execute)
 * ============================================================================
 */

/**
 * PDF 01 — MASTER FIELD PLAYBOOK
 * The complete core publication (25–36 pages depending on volume depth).
 * Includes: Cover, Personal Use License, Legal/Safety Disclaimers, Copyright,
 * Version/Date, Table of Contents, Chapters, Architectural Schematics, Worked Formulas,
 * Decision Matrices, Appendix A (5-Column Troubleshooting Matrix), Appendix B (Canadian Retailers & Sourcing).
 * Purpose: LEARN + UNDERSTAND + DECIDE
 */
export function generateMasterPlaybookPDF(playbook: PlaybookMeta): jsPDF {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  doc.setProperties({
    title: `${playbook.title} — Master Field Playbook (PDF 01)`,
    subject: `PDF 01: Master Field Playbook — ${playbook.volumeLabel} (${playbook.category})`,
    author: playbook.author,
    keywords: `SmallSpaceHome, ${playbook.category}, Master Field Playbook, PDF 01, Toronto Rental Lab, DIY, Architecture`,
    creator: 'SmallSpaceHome Digital Publishing OS',
  });

  const ctx = createRenderContext(doc, playbook);

  // 1. Cover Page (Page 1)
  renderPlaybookCover(ctx);

  // 2. Personal Use License + Legal Disclaimers (Page 2)
  renderLicenseAndDisclaimer(ctx);

  // 3. Table of Contents & Roadmap (Page 3)
  renderTableOfContents(ctx);

  // 4. Chapters & Tactical Execution (Pages 4+)
  renderPlaybookChapters(ctx);

  // 5. Appendix A (Troubleshooting Matrix) & Appendix B (Canadian Retailers & Sourcing)
  renderAppendix(ctx);

  // Add running headers and footers to all pages except Cover (Page 1)
  const totalPages = doc.internal.pages.length - 1;
  for (let i = 2; i <= totalPages; i++) {
    doc.setPage(i);
    addRunningHeaderAndFooter(ctx, i, totalPages, `${playbook.title} • MASTER FIELD PLAYBOOK`);
  }

  return doc;
}

export function downloadMasterPlaybookPDF(playbook: PlaybookMeta): void {
  const doc = generateMasterPlaybookPDF(playbook);
  const cleanName = `SmallSpaceHome_Vol_0${playbook.volumeNumber}_Master_Field_Playbook.pdf`;
  doc.save(cleanName);
}

/**
 * PDF 02 — 4x6" POCKET FIELD CARDS
 * A dedicated standalone 4x6" print-ready reference PDF containing exactly 4 cards:
 * Card 01: Surface Preparation (Solvent protocols & substrate check)
 * Card 02: Hardware & Installation (Load physics, 40% safety buffer formula)
 * Card 03: Removal & Restoration (Zero-damage stretch & spackle repair)
 * Card 04: Hardware Store Quick Buy (Canadian SKUs & shopping list)
 * Purpose: QUICK FIELD REFERENCE
 */
export function generatePocketCardsPDF(playbook: PlaybookMeta): jsPDF {
  // 4x6 inches in mm = 152.4 x 101.6 mm (landscape card)
  const doc = new jsPDF({
    orientation: 'landscape',
    unit: 'mm',
    format: [152.4, 101.6],
  });

  doc.setProperties({
    title: `${playbook.title} — 4x6" Pocket Field Cards (PDF 02)`,
    subject: `PDF 02: 4x6" Pocket Field Reference Cards — ${playbook.volumeLabel}`,
    author: playbook.author,
    keywords: `SmallSpaceHome, 4x6 Cards, Pocket Field Cards, PDF 02, Field Companion, Toronto Rental Lab`,
    creator: 'SmallSpaceHome Digital Publishing OS',
  });

  const enrichment = getVolumeEnrichment(playbook.id, playbook.volumeNumber, playbook.title, playbook.category);
  renderDedicated4x6PocketCardsPDF(doc, playbook, enrichment);

  return doc;
}

export function downloadPocketCardsPDF(playbook: PlaybookMeta): void {
  const doc = generatePocketCardsPDF(playbook);
  const cleanName = `SmallSpaceHome_Vol_0${playbook.volumeNumber}_Pocket_Field_Cards_4x6.pdf`;
  doc.save(cleanName);
}

/**
 * PDF 03 — QUICK-START EXECUTION CHECKLIST
 * A dedicated single-page (1-page A4) operational execution sheet organized strictly into:
 * 1. BEFORE (Substrate, Weight, Compatibility, Surface, Manufacturer, Measurements, Tools)
 * 2. DURING (Prepare surface, Measure/mark, Install method, Verify placement, Curing time)
 * 3. AFTER (Verification, Inspection, Record configuration, Photograph, Schedule re-check)
 * 4. REMOVE (Removal procedure, Surface inspection, Restoration, Final photograph)
 * Purpose: EXECUTE
 */
export function generateQuickStartChecklistPDF(playbook: PlaybookMeta): jsPDF {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  doc.setProperties({
    title: `${playbook.title} — Quick-Start Execution Checklist (PDF 03)`,
    subject: `PDF 03: Quick-Start Field Execution Checklist — ${playbook.volumeLabel}`,
    author: playbook.author,
    keywords: `SmallSpaceHome, Execution Checklist, PDF 03, Field Guide, Toronto Rental Lab`,
    creator: 'SmallSpaceHome Digital Publishing OS',
  });

  const enrichment = getVolumeEnrichment(playbook.id, playbook.volumeNumber, playbook.title, playbook.category);
  renderDedicatedQuickStartChecklistPDF(doc, playbook, enrichment);

  return doc;
}

export function downloadQuickStartChecklistPDF(playbook: PlaybookMeta): void {
  const doc = generateQuickStartChecklistPDF(playbook);
  const cleanName = `SmallSpaceHome_Vol_0${playbook.volumeNumber}_Quick_Start_Execution_Checklist.pdf`;
  doc.save(cleanName);
}

/**
 * Downloads the complete 3-PDF deliverable suite for a product:
 * Downloads PDF 01 (Master Playbook), PDF 02 (4x6" Pocket Cards), and PDF 03 (Execution Checklist)
 * as separate standalone PDF files.
 */
export function downloadThreePDFSuite(playbook: PlaybookMeta): void {
  downloadMasterPlaybookPDF(playbook);
  setTimeout(() => downloadPocketCardsPDF(playbook), 350);
  setTimeout(() => downloadQuickStartChecklistPDF(playbook), 700);
}

/**
 * Alias for generating PDF 01 (Master Field Playbook) for backwards compatibility.
 */
export function generatePlaybookPDF(playbook: PlaybookMeta): jsPDF {
  return generateMasterPlaybookPDF(playbook);
}

export function downloadPlaybookPDF(playbook: PlaybookMeta): void {
  downloadMasterPlaybookPDF(playbook);
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
