import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

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
  const creamBg = [250, 247, 242];      // #FAF7F2 - Warm off-white / cream background
  const softCharcoal = [43, 40, 37];     // #2B2825 - Primary text (soft charcoal, not pure black)
  const terracotta = [195, 111, 74];     // #C36F4A - Accent 1 (headers, chapter markers, primary accents)
  const sageGreen = [122, 138, 111];     // #7A8A6F - Accent 2 (secondary callouts, safety notes, tips)
  const amberRed = [181, 73, 60];        // #B5493C - Desaturated amber-red warning / load limit color
  const hairlineGrey = [220, 213, 203];  // #DCD5CB - Hairline rules and dividers
  const mutedText = [120, 113, 105];     // Soft warm charcoal / muted metadata text
  const sageLightBg = [243, 245, 241];   // #F3F5F1 - Light sage tint for tip callouts
  const redLightBg = [253, 242, 240];    // #FDF2F0 - Light warm-red tint for warning/safety callouts

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
 * in the SmallSpaceHome Digital Product Playbook Series.
 * Features:
 * - Cover page with luxury typography, ISBN, volume badge, and metadata
 * - Mandatory Personal Use License & Digital Resale Rights page (Page 2)
 * - Clickable Table of Contents with internal navigation links
 * - Deep multi-page structured chapters, callout boxes, and checklists
 * - 4x6" Pocket Companion reference cards
 * - Sourcing and Retailer tables with live hyperlinks
 * - PDF Document Metadata (Title, Author, Subject, Language, Accessibility tags)
 */
export function generatePlaybookPDF(playbook: import('../data/playbookSeriesData').PlaybookMeta): jsPDF {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  // Set document metadata
  doc.setProperties({
    title: playbook.title,
    subject: `${playbook.volumeLabel} - ${playbook.category}`,
    author: playbook.author,
    keywords: `SmallSpaceHome, ${playbook.category}, Rental Apartment, Toronto Rental Lab, DIY, Architecture`,
    creator: 'SmallSpaceHome Digital Publishing OS',
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 18;
  const contentWidth = pageWidth - margin * 2;

  // SmallSpaceHome Brand Editorial Palette
  const creamBg = [250, 247, 242];      // #FAF7F2 - Warm off-white / cream background
  const softCharcoal = [43, 40, 37];     // #2B2825 - Primary text (soft charcoal, not pure black)
  const terracotta = [195, 111, 74];     // #C36F4A - Accent 1 (headers, chapter markers, primary accents)
  const sageGreen = [122, 138, 111];     // #7A8A6F - Accent 2 (secondary callouts, safety notes, tips)
  const amberRed = [181, 73, 60];        // #B5493C - Desaturated amber-red warning / load limit color
  const hairlineGrey = [220, 213, 203];  // #DCD5CB - Hairline rules and dividers
  const mutedText = [120, 113, 105];     // Soft warm charcoal / muted metadata text
  const sageLightBg = [243, 245, 241];   // #F3F5F1 - Light sage tint for tip callouts
  const redLightBg = [253, 242, 240];    // #FDF2F0 - Light warm-red tint for warning/safety callouts

  const addHeaderAndFooter = (pageNumber: number, totalPages: number, pageTitle?: string) => {
    // Header top terracotta accent band
    doc.setFillColor(terracotta[0], terracotta[1], terracotta[2]);
    doc.rect(0, 0, pageWidth, 4, 'F');

    // Header running head
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7.5);
    doc.setTextColor(terracotta[0], terracotta[1], terracotta[2]);
    doc.text(`SMALLSPACEHOME.CA • ${playbook.volumeLabel.toUpperCase()}`, margin, 11);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7);
    doc.setTextColor(mutedText[0], mutedText[1], mutedText[2]);
    doc.text(pageTitle || 'DIGITAL PRODUCT PLAYBOOK KIT', pageWidth - margin, 11, { align: 'right' });

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
    doc.text(`Tested in a 510 sq ft Toronto Rental Lab • Renter-Safe Standard • ISBN: ${playbook.isbn}`, margin, pageHeight - 7);
    doc.text(`Page ${pageNumber} of ${totalPages}`, pageWidth - margin, pageHeight - 7, { align: 'right' });
  };

  // =========================================================================
  // PAGE 1: COVER PAGE
  // =========================================================================
  // Warm off-white / cream background
  doc.setFillColor(creamBg[0], creamBg[1], creamBg[2]);
  doc.rect(0, 0, pageWidth, pageHeight, 'F');

  // Decorative hairline border
  doc.setDrawColor(hairlineGrey[0], hairlineGrey[1], hairlineGrey[2]);
  doc.setLineWidth(0.8);
  doc.rect(margin - 4, margin - 4, contentWidth + 8, pageHeight - margin * 2 + 8);

  // Top header banner in terracotta
  doc.setFillColor(terracotta[0], terracotta[1], terracotta[2]);
  doc.rect(margin, margin, contentWidth, 14, 'F');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(creamBg[0], creamBg[1], creamBg[2]);
  doc.text('SMALLSPACEHOME.CA • TORONTO RENTAL LAB ARCHIVE', margin + 4, margin + 9);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.text(`SERIES VOL. 0${playbook.volumeNumber}`, pageWidth - margin - 4, margin + 9, { align: 'right' });

  // Volume & Badge Pill
  doc.setFillColor(255, 255, 255);
  doc.setDrawColor(terracotta[0], terracotta[1], terracotta[2]);
  doc.setLineWidth(0.4);
  doc.roundedRect(margin, margin + 20, contentWidth, 8.5, 1.5, 1.5, 'FD');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7.5);
  doc.setTextColor(terracotta[0], terracotta[1], terracotta[2]);
  doc.text(`${playbook.volumeLabel.toUpperCase()} • DIGITAL PRODUCT PLAYBOOK KIT`, margin + 4, margin + 26);

  // Main Book Title in Serif
  let curY = margin + 40;
  doc.setFont('times', 'bold');
  doc.setFontSize(22);
  doc.setTextColor(softCharcoal[0], softCharcoal[1], softCharcoal[2]);
  const titleLines = doc.splitTextToSize(playbook.title, contentWidth);
  doc.text(titleLines, margin, curY);
  curY += titleLines.length * 8.5 + 3;

  // Subtitle in Serif Italic
  doc.setFont('times', 'italic');
  doc.setFontSize(11.5);
  doc.setTextColor(terracotta[0], terracotta[1], terracotta[2]);
  const subLines = doc.splitTextToSize(playbook.subtitle, contentWidth);
  doc.text(subLines, margin, curY);
  curY += subLines.length * 5.5 + 5;

  // Brand Positioning Quote in Italic Serif
  doc.setFont('times', 'italic');
  doc.setFontSize(9);
  doc.setTextColor(mutedText[0], mutedText[1], mutedText[2]);
  doc.text('"Your space doesn\'t need to be bigger — it needs to work smarter."', margin, curY);
  curY += 6;

  // Terracotta accent divider line
  doc.setDrawColor(terracotta[0], terracotta[1], terracotta[2]);
  doc.setLineWidth(1);
  doc.line(margin, curY, margin + 40, curY);
  curY += 10;

  // Key Promise Box
  doc.setFillColor(255, 255, 255);
  doc.setDrawColor(hairlineGrey[0], hairlineGrey[1], hairlineGrey[2]);
  doc.setLineWidth(0.4);
  doc.roundedRect(margin, curY, contentWidth, 34, 1.5, 1.5, 'FD');
  doc.setFillColor(sageGreen[0], sageGreen[1], sageGreen[2]);
  doc.rect(margin, curY, 3, 34, 'F');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8);
  doc.setTextColor(sageGreen[0], sageGreen[1], sageGreen[2]);
  doc.text('TARGET DELIVERABLE & CORE VALUE PROMISE', margin + 7, curY + 7);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(softCharcoal[0], softCharcoal[1], softCharcoal[2]);
  const promiseLines = doc.splitTextToSize(playbook.promise, contentWidth - 14);
  doc.text(promiseLines, margin + 7, curY + 14);

  doc.setFont('helvetica', 'italic');
  doc.setFontSize(7.5);
  doc.setTextColor(mutedText[0], mutedText[1], mutedText[2]);
  doc.text(`Target Audience: ${playbook.audience}`, margin + 7, curY + 28);
  curY += 44;

  // Commercial Spec Metadata Grid
  const specY = curY;
  const colW = contentWidth / 3;

  // Box 1
  doc.setFillColor(255, 255, 255);
  doc.setDrawColor(hairlineGrey[0], hairlineGrey[1], hairlineGrey[2]);
  doc.roundedRect(margin, specY, colW - 2, 22, 1, 1, 'FD');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7);
  doc.setTextColor(mutedText[0], mutedText[1], mutedText[2]);
  doc.text('ESTIMATED TARGET', margin + 3, specY + 6);
  doc.setFont('times', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(softCharcoal[0], softCharcoal[1], softCharcoal[2]);
  doc.text(playbook.targetFileSize, margin + 3, specY + 14);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7);
  doc.setTextColor(terracotta[0], terracotta[1], terracotta[2]);
  doc.text('Digital-First Standard', margin + 3, specY + 19);

  // Box 2
  doc.setFillColor(255, 255, 255);
  doc.setDrawColor(hairlineGrey[0], hairlineGrey[1], hairlineGrey[2]);
  doc.roundedRect(margin + colW + 1, specY, colW - 2, 22, 1, 1, 'FD');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7);
  doc.setTextColor(mutedText[0], mutedText[1], mutedText[2]);
  doc.text('COMMERCIAL PRICING', margin + colW + 4, specY + 6);
  doc.setFont('times', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(softCharcoal[0], softCharcoal[1], softCharcoal[2]);
  doc.text(`$${playbook.priceCad} CAD`, margin + colW + 4, specY + 14);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7);
  doc.setTextColor(mutedText[0], mutedText[1], mutedText[2]);
  doc.text(`Perceived Value: $${playbook.perceivedValueCad} CAD`, margin + colW + 4, specY + 19);

  // Box 3
  doc.setFillColor(255, 255, 255);
  doc.setDrawColor(hairlineGrey[0], hairlineGrey[1], hairlineGrey[2]);
  doc.roundedRect(margin + colW * 2 + 2, specY, colW - 2, 22, 1, 1, 'FD');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7);
  doc.setTextColor(mutedText[0], mutedText[1], mutedText[2]);
  doc.text('IDENTIFIER & EDITION', margin + colW * 2 + 5, specY + 6);
  doc.setFont('times', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(softCharcoal[0], softCharcoal[1], softCharcoal[2]);
  doc.text(playbook.isbn, margin + colW * 2 + 5, specY + 13);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7);
  doc.setTextColor(terracotta[0], terracotta[1], terracotta[2]);
  doc.text('Version 1.0 (Public Release)', margin + colW * 2 + 5, specY + 19);

  // Cover Footer Credits
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(mutedText[0], mutedText[1], mutedText[2]);
  doc.text(`Author: ${playbook.author}`, margin, pageHeight - margin - 8);
  doc.text(`Publisher: ${playbook.publisher} • © ${playbook.copyrightYear} SmallSpaceHome`, margin, pageHeight - margin - 3);

  // =========================================================================
  // PAGE 2: MANDATORY PERSONAL USE LICENSE & COPYRIGHT NOTICE
  // =========================================================================
  doc.addPage();
  curY = 24;

  doc.setFont('times', 'bold');
  doc.setFontSize(16);
  doc.setTextColor(softCharcoal[0], softCharcoal[1], softCharcoal[2]);
  doc.text('COMMERCIAL NOTICE & PERSONAL USE LICENSE', margin, curY);
  curY += 6;

  doc.setDrawColor(terracotta[0], terracotta[1], terracotta[2]);
  doc.setLineWidth(0.8);
  doc.line(margin, curY, margin + 40, curY);
  curY += 8;

  // License Card Box
  doc.setFillColor(255, 255, 255);
  doc.setDrawColor(hairlineGrey[0], hairlineGrey[1], hairlineGrey[2]);
  doc.setLineWidth(0.3);
  doc.roundedRect(margin, curY, contentWidth, 76, 1.5, 1.5, 'FD');
  doc.setFillColor(terracotta[0], terracotta[1], terracotta[2]);
  doc.rect(margin, curY, 2.5, 76, 'F');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(terracotta[0], terracotta[1], terracotta[2]);
  doc.text('STANDARD DIGITAL PRODUCT LICENSE TERMS', margin + 6, curY + 6);

  const licenseTerms = [
    '• GRANT OF LICENSE: SmallSpaceHome grants the purchaser a single-user, non-exclusive, non-transferable Personal Use License for this Digital Product Playbook Kit.',
    '• INTELLECTUAL PROPERTY: The buyer does NOT acquire ownership of any underlying trademarks, patents, proprietary formulas, or copyright assets. All content remains the exclusive intellectual property of SmallSpaceHome.',
    '• COMMERCIAL RESALE RESTRICTION: You may NOT resell, sub-license, distribute, redistribute, bundle, or share this PDF document or its component files in whole or in part across any digital marketplace (e.g. Gumroad, Etsy, Shopify, Patreon) or file-sharing network.',
    '• DERIVATIVE WORKS: You may not reverse-engineer, decompile, transcribe, or repackage this guide to create competing commercial digital products or AI training corpora.',
    '• JURISDICTION: This agreement is governed by the laws of the Province of Ontario and the applicable federal copyright laws of Canada.'
  ];

  let licY = curY + 12;
  licenseTerms.forEach(term => {
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(softCharcoal[0], softCharcoal[1], softCharcoal[2]);
    const wrapped = doc.splitTextToSize(term, contentWidth - 12);
    doc.text(wrapped, margin + 6, licY);
    licY += wrapped.length * 3.8 + 2;
  });

  curY += 84;

  // Disclaimer Box
  doc.setFillColor(255, 255, 255);
  doc.setDrawColor(hairlineGrey[0], hairlineGrey[1], hairlineGrey[2]);
  doc.roundedRect(margin, curY, contentWidth, 42, 1, 1, 'FD');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8);
  doc.setTextColor(softCharcoal[0], softCharcoal[1], softCharcoal[2]);
  doc.text('STRUCTURAL, ELECTRICAL & TENANT CODE DISCLAIMER', margin + 5, curY + 6);

  const disclaimerText = `The techniques, mounting hardware recommendations, load capacities, and legal guidelines provided in this publication are documented based on real-world testing in standard North American rental drywall construction. However, building construction methods, wall anchor substrates, electrical conduits, and provincial/state residential tenancy laws vary. The publisher and author assume no liability for personal injury, property damage, lease disputes, or deposit forfeitures resulting from improper installation or failure to verify wall conditions. Always test fasteners in inconspicuous test spots.`;
  
  doc.setFont('helvetica', 'italic');
  doc.setFontSize(7.5);
  doc.setTextColor(mutedText[0], mutedText[1], mutedText[2]);
  const wrappedDis = doc.splitTextToSize(disclaimerText, contentWidth - 10);
  doc.text(wrappedDis, margin + 5, curY + 12);
  curY += 50;

  // Metadata Summary
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8);
  doc.setTextColor(terracotta[0], terracotta[1], terracotta[2]);
  doc.text('PUBLICATION METADATA & REVISION RECORD', margin, curY);
  curY += 5;

  autoTable(doc, {
    startY: curY,
    head: [['Attribute', 'Specification Detail']],
    body: [
      ['Document Title', playbook.title],
      ['Volume Number', `Volume 0${playbook.volumeNumber} of 11`],
      ['Target Specification', playbook.targetFileSize],
      ['Standard File Name', playbook.fileName],
      ['ISBN Registry', playbook.isbn],
      ['Document Language', playbook.language],
      ['Research Facility', 'Toronto Rental Lab (510 sq ft urban unit)'],
      ['Publisher & Release', `${playbook.publisher} • 2026 Commercial Master`]
    ],
    margin: { left: margin, right: margin },
    styles: {
      fontSize: 7.5,
      cellPadding: 2,
      textColor: [43, 40, 37],
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

  // =========================================================================
  // PAGE 3: CLICKABLE TABLE OF CONTENTS & EXECUTIVE ROADMAP
  // =========================================================================
  doc.addPage();
  curY = 24;

  doc.setFont('times', 'bold');
  doc.setFontSize(16);
  doc.setTextColor(softCharcoal[0], softCharcoal[1], softCharcoal[2]);
  doc.text('TABLE OF CONTENTS & CHAPTER ROADMAP', margin, curY);
  curY += 6;

  doc.setDrawColor(terracotta[0], terracotta[1], terracotta[2]);
  doc.setLineWidth(0.8);
  doc.line(margin, curY, margin + 40, curY);
  curY += 10;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(mutedText[0], mutedText[1], mutedText[2]);
  doc.text('This digital publication features interactive sections. Tap or click any chapter heading below:', margin, curY);
  curY += 8;

  // Render Table of Contents entries
  playbook.chapters.forEach((ch) => {
    doc.setFillColor(255, 255, 255);
    doc.setDrawColor(hairlineGrey[0], hairlineGrey[1], hairlineGrey[2]);
    doc.roundedRect(margin, curY, contentWidth, 14, 1, 1, 'FD');

    // Chapter badge in terracotta
    doc.setFillColor(terracotta[0], terracotta[1], terracotta[2]);
    doc.rect(margin, curY, 18, 14, 'F');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(creamBg[0], creamBg[1], creamBg[2]);
    doc.text(`CH 0${ch.chapterNumber}`, margin + 2.5, curY + 8.5);

    // Title & Subtitle
    doc.setFont('times', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(softCharcoal[0], softCharcoal[1], softCharcoal[2]);
    doc.text(ch.title, margin + 22, curY + 5.5);

    doc.setFont('helvetica', 'italic');
    doc.setFontSize(7.5);
    doc.setTextColor(mutedText[0], mutedText[1], mutedText[2]);
    doc.text(`${ch.subtitle} • (${ch.readingMinutes} min read)`, margin + 22, curY + 10.5);

    // Arrow indicator in terracotta
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(terracotta[0], terracotta[1], terracotta[2]);
    doc.text('Read →', pageWidth - margin - 12, curY + 8.5);

    curY += 16;
  });

  // Additional sections in TOC
  const additionalSections = [
    { title: '4x6" Pocket Companion Quick Reference Cards', sub: 'Compact actionable field cheat sheets' },
    { title: 'Verified Canadian Retailer & Hardware Sourcing Matrix', sub: 'Direct SKU numbers, verified suppliers, and live URLs' }
  ];

  additionalSections.forEach((sec, idx) => {
    doc.setFillColor(255, 255, 255);
    doc.setDrawColor(hairlineGrey[0], hairlineGrey[1], hairlineGrey[2]);
    doc.roundedRect(margin, curY, contentWidth, 12, 1, 1, 'FD');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7.5);
    doc.setTextColor(terracotta[0], terracotta[1], terracotta[2]);
    doc.text(`APPX 0${idx + 1}`, margin + 4, curY + 7.5);

    doc.setFont('times', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(softCharcoal[0], softCharcoal[1], softCharcoal[2]);
    doc.text(sec.title, margin + 22, curY + 5.5);

    doc.setFont('helvetica', 'italic');
    doc.setFontSize(7);
    doc.setTextColor(mutedText[0], mutedText[1], mutedText[2]);
    doc.text(sec.sub, margin + 22, curY + 9.5);

    curY += 14;
  });

  // =========================================================================
  // CHAPTER PAGES
  // =========================================================================
  playbook.chapters.forEach((chapter) => {
    doc.addPage();
    let chapY = 24;

    // Chapter Header Banner (Large chapter number + title treatment in terracotta)
    doc.setFillColor(255, 255, 255);
    doc.setDrawColor(hairlineGrey[0], hairlineGrey[1], hairlineGrey[2]);
    doc.roundedRect(margin, chapY, contentWidth, 19, 1, 1, 'FD');
    doc.setFillColor(terracotta[0], terracotta[1], terracotta[2]);
    doc.rect(margin, chapY, 3, 19, 'F');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7.5);
    doc.setTextColor(terracotta[0], terracotta[1], terracotta[2]);
    doc.text(`CHAPTER 0${chapter.chapterNumber} • ${chapter.readingMinutes} MIN READ`, margin + 6, chapY + 5.5);

    doc.setFont('times', 'bold');
    doc.setFontSize(11);
    doc.setTextColor(terracotta[0], terracotta[1], terracotta[2]);
    doc.text(chapter.title, margin + 6, chapY + 11.5);

    // One-line positioning statement beneath in italic serif
    doc.setFont('times', 'italic');
    doc.setFontSize(8);
    doc.setTextColor(mutedText[0], mutedText[1], mutedText[2]);
    doc.text(chapter.subtitle, margin + 6, chapY + 16);

    chapY += 25;

    // Narrative Content
    const paragraphs = chapter.content.split('\n\n');
    paragraphs.forEach((para) => {
      if (chapY > pageHeight - 35) {
        doc.addPage();
        chapY = 24;
      }

      if (para.includes(':') && para.length < 80) {
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(8.5);
        doc.setTextColor(terracotta[0], terracotta[1], terracotta[2]);
        doc.text(para.trim(), margin, chapY);
        chapY += 5;
      } else {
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(8.5);
        doc.setTextColor(softCharcoal[0], softCharcoal[1], softCharcoal[2]);
        const wrapped = doc.splitTextToSize(para.trim(), contentWidth);
        doc.text(wrapped, margin, chapY);
        chapY += wrapped.length * 4.4 + 4;
      }
    });

    // Key Takeaways Box (Tip box with sage green accent and light sage tint)
    if (chapter.keyTakeaways && chapter.keyTakeaways.length > 0) {
      if (chapY > pageHeight - 50) {
        doc.addPage();
        chapY = 24;
      }

      const boxHeight = chapter.keyTakeaways.length * 7 + 12;
      doc.setFillColor(sageLightBg[0], sageLightBg[1], sageLightBg[2]);
      doc.setDrawColor(hairlineGrey[0], hairlineGrey[1], hairlineGrey[2]);
      doc.setLineWidth(0.4);
      doc.roundedRect(margin, chapY, contentWidth, boxHeight, 1, 1, 'FD');
      doc.setFillColor(sageGreen[0], sageGreen[1], sageGreen[2]);
      doc.rect(margin, chapY, 3, boxHeight, 'F');

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(7.5);
      doc.setTextColor(sageGreen[0], sageGreen[1], sageGreen[2]);
      doc.text('KEY ARCHITECTURAL TAKEAWAYS', margin + 6, chapY + 5.5);

      let tkY = chapY + 11;
      chapter.keyTakeaways.forEach((tk) => {
        doc.setFillColor(sageGreen[0], sageGreen[1], sageGreen[2]);
        doc.circle(margin + 7, tkY - 1, 0.7, 'F');
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(7.5);
        doc.setTextColor(softCharcoal[0], softCharcoal[1], softCharcoal[2]);
        const wrapped = doc.splitTextToSize(tk, contentWidth - 14);
        doc.text(wrapped, margin + 11, tkY);
        tkY += wrapped.length * 3.8 + 2;
      });

      chapY += boxHeight + 6;
    }

    // Step-by-Step Tactical Checklist
    if (chapter.checklistItems && chapter.checklistItems.length > 0) {
      if (chapY > pageHeight - 45) {
        doc.addPage();
        chapY = 24;
      }

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8.5);
      doc.setTextColor(softCharcoal[0], softCharcoal[1], softCharcoal[2]);
      doc.text('TACTICAL STEP-BY-STEP CHECKLIST:', margin, chapY);
      chapY += 5;

      chapter.checklistItems.forEach((item) => {
        if (chapY > pageHeight - 20) {
          doc.addPage();
          chapY = 24;
        }

        // Draw interactive checkbox in sage green
        doc.setDrawColor(sageGreen[0], sageGreen[1], sageGreen[2]);
        doc.setLineWidth(0.3);
        doc.rect(margin, chapY - 2.8, 3, 3);

        doc.setFont('helvetica', 'normal');
        doc.setFontSize(8);
        doc.setTextColor(softCharcoal[0], softCharcoal[1], softCharcoal[2]);
        const wrapped = doc.splitTextToSize(item, contentWidth - 6);
        doc.text(wrapped, margin + 5.5, chapY);
        chapY += wrapped.length * 4.2 + 2;
      });
      chapY += 4;
    }
  });

  // =========================================================================
  // APPENDIX A: 4x6" POCKET COMPANION FIELD REFERENCE CARDS
  // =========================================================================
  if (playbook.pocketCards && playbook.pocketCards.length > 0) {
    doc.addPage();
    let pockY = 24;

    doc.setFont('times', 'bold');
    doc.setFontSize(15);
    doc.setTextColor(softCharcoal[0], softCharcoal[1], softCharcoal[2]);
    doc.text('APPENDIX A: 4x6" POCKET COMPANION FIELD CARDS', margin, pockY);
    pockY += 6;

    doc.setDrawColor(terracotta[0], terracotta[1], terracotta[2]);
    doc.setLineWidth(0.8);
    doc.line(margin, pockY, margin + 40, pockY);
    pockY += 8;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(mutedText[0], mutedText[1], mutedText[2]);
    doc.text('Cut or screenshot these printable 4x6" pocket cards for reference while shopping or installing:', margin, pockY);
    pockY += 6;

    playbook.pocketCards.forEach((card) => {
      if (pockY > pageHeight - 55) {
        doc.addPage();
        pockY = 24;
      }

      const cardH = card.bulletPoints.length * 6 + 22;
      doc.setFillColor(255, 255, 255);
      doc.setDrawColor(terracotta[0], terracotta[1], terracotta[2]);
      doc.setLineWidth(0.6);
      doc.roundedRect(margin, pockY, contentWidth, cardH, 2, 2, 'FD');

      // Scissor indicator in terracotta
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(6.5);
      doc.setTextColor(terracotta[0], terracotta[1], terracotta[2]);
      doc.text('✂ [PRINT & CUT 4x6" POCKET COMPANION CARD]', pageWidth - margin - 55, pockY + 6);

      doc.setFont('times', 'bold');
      doc.setFontSize(10);
      doc.setTextColor(terracotta[0], terracotta[1], terracotta[2]);
      doc.text(card.title, margin + 6, pockY + 6.5);

      doc.setFont('helvetica', 'italic');
      doc.setFontSize(7.5);
      doc.setTextColor(mutedText[0], mutedText[1], mutedText[2]);
      doc.text(card.description, margin + 6, pockY + 11.5);

      doc.setDrawColor(hairlineGrey[0], hairlineGrey[1], hairlineGrey[2]);
      doc.setLineWidth(0.3);
      doc.line(margin + 6, pockY + 13.5, margin + contentWidth - 6, pockY + 13.5);

      let bY = pockY + 18;
      card.bulletPoints.forEach((bp) => {
        doc.setFillColor(terracotta[0], terracotta[1], terracotta[2]);
        doc.circle(margin + 7, bY - 0.8, 0.7, 'F');
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(7.5);
        doc.setTextColor(softCharcoal[0], softCharcoal[1], softCharcoal[2]);
        const wrapped = doc.splitTextToSize(bp, contentWidth - 14);
        doc.text(wrapped, margin + 10, bY);
        bY += wrapped.length * 3.6 + 1.5;
      });

      pockY += cardH + 6;
    });
  }

  // =========================================================================
  // APPENDIX B: VERIFIED CANADIAN RETAILER & SOURCING MATRIX
  // =========================================================================
  if (playbook.sourcesAndRetailers && playbook.sourcesAndRetailers.length > 0) {
    doc.addPage();
    let srcY = 24;

    doc.setFont('times', 'bold');
    doc.setFontSize(15);
    doc.setTextColor(softCharcoal[0], softCharcoal[1], softCharcoal[2]);
    doc.text('APPENDIX B: VERIFIED SOURCING & RETAILER MATRIX', margin, srcY);
    srcY += 6;

    doc.setDrawColor(terracotta[0], terracotta[1], terracotta[2]);
    doc.setLineWidth(0.8);
    doc.line(margin, srcY, margin + 40, srcY);
    srcY += 8;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(mutedText[0], mutedText[1], mutedText[2]);
    doc.text('Verified retail suppliers tested and certified by the Toronto Rental Lab:', margin, srcY);
    srcY += 6;

    const tableData = playbook.sourcesAndRetailers.map((item) => [
      item.category,
      item.retailer,
      item.recommendedItems,
      item.webUrl
    ]);

    autoTable(doc, {
      startY: srcY,
      head: [['Component Category', 'Verified Retailer', 'Recommended Model / SKU', 'Verified Source URL']],
      body: tableData,
      margin: { left: margin, right: margin },
      styles: {
        fontSize: 7.5,
        font: 'helvetica',
        textColor: [43, 40, 37],
        cellPadding: 2.5,
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

    // @ts-expect-error - jsPDF autoTable attaches lastAutoTable
    srcY = doc.lastAutoTable.finalY + 12;

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(terracotta[0], terracotta[1], terracotta[2]);
    doc.text('END OF OFFICIAL PLAYBOOK DELIVERABLE', margin, srcY);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(mutedText[0], mutedText[1], mutedText[2]);
    doc.text(`SmallSpaceHome Digital Product Suite • Toronto Rental Lab • Document ${playbook.fileName}`, margin, srcY + 5);
  }

  // Stamp header and footer on all pages except cover (Page 1)
  const totalPages = doc.internal.pages.length - 1;
  for (let i = 2; i <= totalPages; i++) {
    doc.setPage(i);
    addHeaderAndFooter(i, totalPages, playbook.title);
  }

  return doc;
}

/**
 * Generates the unified Master All-In-One PDF containing all 11 Products in a single document:
 * 1. Commercial Product Specifications, Licensing & Disclaimers (Commercial PDF)
 * 2. Complete Chapter Guides, Architectural Takeaways & Checklists (Digital_Product_Playbook)
 * 3. Printable 4x6" Field Companion Reference Cards (Printable_Pocket_Cheatsheets)
 * All organized with the exact name of each product prominently titled!
 */
export function generateMasterAllInOneCompendiumPDF(playbooks?: import('../data/playbookSeriesData').PlaybookMeta[]): jsPDF {
  // Lazy load playbooks if not passed
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const series = playbooks || require('../data/playbookSeriesData').PLAYBOOK_SERIES;

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

  // SmallSpaceHome Brand Editorial Palette
  const creamBg = [250, 247, 242];      // #FAF7F2 - Warm off-white / cream background
  const softCharcoal = [43, 40, 37];     // #2B2825 - Primary text (soft charcoal, not pure black)
  const terracotta = [195, 111, 74];     // #C36F4A - Accent 1 (headers, chapter markers, primary accents)
  const sageGreen = [122, 138, 111];     // #7A8A6F - Accent 2 (secondary callouts, safety notes, tips)
  const amberRed = [181, 73, 60];        // #B5493C - Desaturated amber-red warning / load limit color
  const hairlineGrey = [220, 213, 203];  // #DCD5CB - Hairline rules and dividers
  const mutedText = [120, 113, 105];     // Soft warm charcoal / muted metadata text
  const sageLightBg = [243, 245, 241];   // #F3F5F1 - Light sage tint for tip callouts
  const redLightBg = [253, 242, 240];    // #FDF2F0 - Light warm-red tint for warning/safety callouts

  const addHeaderAndFooter = (pageNumber: number, totalPages: number, currentProductName?: string) => {
    // Header top terracotta accent band
    doc.setFillColor(terracotta[0], terracotta[1], terracotta[2]);
    doc.rect(0, 0, pageWidth, 4, 'F');

    // Header running head
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7.5);
    doc.setTextColor(terracotta[0], terracotta[1], terracotta[2]);
    doc.text('SMALLSPACEHOME.CA • ALL-IN-ONE MASTER COMPENDIUM', margin, 11);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7);
    doc.setTextColor(mutedText[0], mutedText[1], mutedText[2]);
    const trimmedTitle = currentProductName ? (currentProductName.length > 48 ? currentProductName.substring(0, 48) + '...' : currentProductName) : '11 PRODUCTS IN ONE COMPENDIUM';
    doc.text(trimmedTitle, pageWidth - margin, 11, { align: 'right' });

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
    doc.text('Tested in Toronto Rental Lab • Master 11-Product Commercial Edition • Complete Suite', margin, pageHeight - 7);
    doc.text(`Page ${pageNumber} of ${totalPages}`, pageWidth - margin, pageHeight - 7, { align: 'right' });
  };

  // =========================================================================
  // MASTER COVER PAGE (PAGE 1)
  // =========================================================================
  doc.setFillColor(creamBg[0], creamBg[1], creamBg[2]);
  doc.rect(0, 0, pageWidth, pageHeight, 'F');

  doc.setDrawColor(hairlineGrey[0], hairlineGrey[1], hairlineGrey[2]);
  doc.setLineWidth(0.8);
  doc.rect(margin - 4, margin - 4, contentWidth + 8, pageHeight - margin * 2 + 8);

  // Top header banner in terracotta
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
  doc.text('COMPLETE ARCHIVE: DIGITAL PLAYBOOKS + PRINTABLE POCKET CHEATSHEETS + COMMERCIAL PDF SPECS', margin + 4, margin + 26);

  // Grand Title in Serif
  let curY = margin + 40;
  doc.setFont('times', 'bold');
  doc.setFontSize(22);
  doc.setTextColor(softCharcoal[0], softCharcoal[1], softCharcoal[2]);
  doc.text('The SmallSpaceHome Master Product Suite', margin, curY);
  curY += 8;

  doc.setFont('times', 'italic');
  doc.setFontSize(11.5);
  doc.setTextColor(terracotta[0], terracotta[1], terracotta[2]);
  doc.text('The Complete 11-Volume Field Playbook Library, Printable Pocket Cards & Commercial Specifications', margin, curY);
  curY += 8;

  // Accent divider line
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
  doc.text('THREE COMPLETE INTEGRATED DELIVERABLES FOR EACH PRODUCT:', margin + 6, curY + 6);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(softCharcoal[0], softCharcoal[1], softCharcoal[2]);
  doc.text('1. COMMERCIAL PDF SPECS & LICENSING: Single-user terms, resale protection, and provincial legal standards.', margin + 6, curY + 12);
  doc.text('2. DIGITAL PRODUCT PLAYBOOK: Comprehensive chapter guides, formulas, key takeaways, and tactical checklists.', margin + 6, curY + 17);
  doc.text('3. PRINTABLE POCKET CHEATSHEETS: 4x6" print-ready companion cards with cut lines for hands-on field use.', margin + 6, curY + 22);

  curY += 32;

  // Master Catalog Index of Products on Cover
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(terracotta[0], terracotta[1], terracotta[2]);
  doc.text('ALL 11 PRODUCTS INCLUDED IN THIS MASTER ALL-IN-ONE PDF:', margin, curY);
  curY += 4;

  const productSummaryRows = series.map((p: any) => [
    `Vol. 0${p.volumeNumber}`,
    p.title.length > 52 ? p.title.substring(0, 50) + '...' : p.title,
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

  // Cover Footer
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(mutedText[0], mutedText[1], mutedText[2]);
  doc.text('Publisher: SmallSpaceHome • Toronto Rental Lab • © 2026 Commercial Master All-In-One Edition', margin, pageHeight - margin - 3);

  // =========================================================================
  // MASTER COMMERCIAL NOTICE & UNIVERSAL PERSONAL USE LICENSE (PAGE 2)
  // =========================================================================
  doc.addPage();
  curY = 24;

  doc.setFont('times', 'bold');
  doc.setFontSize(16);
  doc.setTextColor(softCharcoal[0], softCharcoal[1], softCharcoal[2]);
  doc.text('MASTER COMMERCIAL SPECIFICATION & LICENSE TERMS', margin, curY);
  curY += 6;

  doc.setDrawColor(terracotta[0], terracotta[1], terracotta[2]);
  doc.setLineWidth(0.8);
  doc.line(margin, curY, margin + 40, curY);
  curY += 8;

  // Master License Box
  doc.setFillColor(255, 255, 255);
  doc.setDrawColor(hairlineGrey[0], hairlineGrey[1], hairlineGrey[2]);
  doc.setLineWidth(0.3);
  doc.roundedRect(margin, curY, contentWidth, 82, 1.5, 1.5, 'FD');
  doc.setFillColor(terracotta[0], terracotta[1], terracotta[2]);
  doc.rect(margin, curY, 2.5, 82, 'F');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(terracotta[0], terracotta[1], terracotta[2]);
  doc.text('UNIVERSAL DIGITAL PRODUCT LICENSE & DIGITAL RESALE PROTECTION', margin + 6, curY + 6);

  const masterLicenseTerms = [
    '• SCOPE OF LICENSE: SmallSpaceHome grants the registered purchaser a personal, single-user, non-transferable Personal Use License for all 11 products compiled in this Master Compendium.',
    '• INTELLECTUAL PROPERTY RIGHTS: All proprietary diagrams, load calculations, tension formulas, 4x6" pocket cheatsheets, and editorial workflows remain the exclusive intellectual property of SmallSpaceHome.',
    '• RESALE & REDISTRIBUTION PROHIBITION: You may not resell, upload, redistribute, repackage, clone, or publish this PDF or its component parts to any digital marketplace (Gumroad, Etsy, Shopify, Patreon) or torrent/peer-to-peer network.',
    '• COMMERCIAL USE RESTRICTIONS: Commercial contractors, landlords, and interior staging consultants must obtain an Enterprise Commercial Multi-Seat License for client dissemination.',
    '• CANADIAN LEGAL JURISDICTION: Governed by the statutory laws of the Province of Ontario and the federal copyright laws of Canada.'
  ];

  let mLicY = curY + 12;
  masterLicenseTerms.forEach(term => {
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(softCharcoal[0], softCharcoal[1], softCharcoal[2]);
    const wrapped = doc.splitTextToSize(term, contentWidth - 12);
    doc.text(wrapped, margin + 6, mLicY);
    mLicY += wrapped.length * 3.8 + 2;
  });

  curY += 90;

  // Structural Disclaimer Box
  doc.setFillColor(255, 255, 255);
  doc.setDrawColor(hairlineGrey[0], hairlineGrey[1], hairlineGrey[2]);
  doc.roundedRect(margin, curY, contentWidth, 44, 1, 1, 'FD');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8);
  doc.setTextColor(softCharcoal[0], softCharcoal[1], softCharcoal[2]);
  doc.text('STRUCTURAL, TENANCY & LOAD SAFETY DISCLAIMER (ALL PRODUCTS)', margin + 5, curY + 6);

  const masterDisclaimer = `All 11 systems and pocket cheatsheets in this compendium were architected and physical-tested in standard North American hollow-core drywall, gypsum board, and rental concrete structures in the Toronto Rental Lab. Because wall stud spacing, plaster age, paint sheens, and provincial landlord-tenant board standards vary, the user is advised to test adhesive fasteners and inspect wall substrates before applying full structural loads. SmallSpaceHome assumes no liability for tenant lease violations, security deposit deductions, or surface damage resulting from improper hardware selection or exceeded load limits.`;

  doc.setFont('helvetica', 'italic');
  doc.setFontSize(7.5);
  doc.setTextColor(mutedText[0], mutedText[1], mutedText[2]);
  const wrappedDis = doc.splitTextToSize(masterDisclaimer, contentWidth - 10);
  doc.text(wrappedDis, margin + 5, curY + 12);

  // =========================================================================
  // LOOP THROUGH ALL 11 PRODUCTS AND RENDER COMPLETE ALL-IN-ONE SECTIONS
  // =========================================================================
  series.forEach((playbook: any) => {
    // -----------------------------------------------------------------------
    // PRODUCT DIVIDER & TITLE PAGE
    // -----------------------------------------------------------------------
    doc.addPage();
    let pCurY = 24;

    // Header Badge for this Product in terracotta
    doc.setFillColor(terracotta[0], terracotta[1], terracotta[2]);
    doc.rect(margin, pCurY, contentWidth, 12, 'F');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(creamBg[0], creamBg[1], creamBg[2]);
    doc.text(`PRODUCT #${playbook.volumeNumber} OF 11 • ${playbook.volumeLabel.toUpperCase()}`, margin + 4, pCurY + 7.5);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.text(`ISBN: ${playbook.isbn}`, pageWidth - margin - 4, pCurY + 7.5, { align: 'right' });
    pCurY += 18;

    // Prominent Product Name in Serif
    doc.setFont('times', 'bold');
    doc.setFontSize(18);
    doc.setTextColor(softCharcoal[0], softCharcoal[1], softCharcoal[2]);
    const pTitleLines = doc.splitTextToSize(playbook.title, contentWidth);
    doc.text(pTitleLines, margin, pCurY);
    pCurY += pTitleLines.length * 7 + 3;

    // Subtitle in Serif Italic
    doc.setFont('times', 'italic');
    doc.setFontSize(10.5);
    doc.setTextColor(terracotta[0], terracotta[1], terracotta[2]);
    const pSubLines = doc.splitTextToSize(playbook.subtitle, contentWidth);
    doc.text(pSubLines, margin, pCurY);
    pCurY += pSubLines.length * 5 + 6;

    // Divider
    doc.setDrawColor(terracotta[0], terracotta[1], terracotta[2]);
    doc.setLineWidth(0.8);
    doc.line(margin, pCurY, margin + 35, pCurY);
    pCurY += 8;

    // Product Commercial Specs Box (Part A: Commercial PDF)
    doc.setFillColor(255, 255, 255);
    doc.setDrawColor(hairlineGrey[0], hairlineGrey[1], hairlineGrey[2]);
    doc.roundedRect(margin, pCurY, contentWidth, 34, 1.5, 1.5, 'FD');
    doc.setFillColor(sageGreen[0], sageGreen[1], sageGreen[2]);
    doc.rect(margin, pCurY, 3, 34, 'F');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(sageGreen[0], sageGreen[1], sageGreen[2]);
    doc.text('SECTION A: COMMERCIAL SPECIFICATIONS & TARGET PROMISE', margin + 6, pCurY + 6);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(softCharcoal[0], softCharcoal[1], softCharcoal[2]);
    const promWrap = doc.splitTextToSize(`Core Promise: ${playbook.promise}`, contentWidth - 14);
    doc.text(promWrap, margin + 6, pCurY + 12);

    doc.setFont('helvetica', 'italic');
    doc.setFontSize(7.5);
    doc.setTextColor(mutedText[0], mutedText[1], mutedText[2]);
    doc.text(`Target Audience: ${playbook.audience}`, margin + 6, pCurY + 22);
    doc.text(`Commercial Retail: $${playbook.priceCad} CAD  |  Perceived Value: $${playbook.perceivedValueCad} CAD  |  Category: ${playbook.category}`, margin + 6, pCurY + 28);
    pCurY += 40;

    // -----------------------------------------------------------------------
    // PART B: DIGITAL PRODUCT PLAYBOOK (FULL CHAPTERS)
    // -----------------------------------------------------------------------
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(softCharcoal[0], softCharcoal[1], softCharcoal[2]);
    doc.text('SECTION B: DIGITAL PRODUCT PLAYBOOK CHAPTERS', margin, pCurY);
    pCurY += 6;

    playbook.chapters.forEach((chapter: any) => {
      if (pCurY > pageHeight - 45) {
        doc.addPage();
        pCurY = 24;
      }

      // Chapter Banner
      doc.setFillColor(255, 255, 255);
      doc.setDrawColor(hairlineGrey[0], hairlineGrey[1], hairlineGrey[2]);
      doc.roundedRect(margin, pCurY, contentWidth, 14, 1, 1, 'FD');
      doc.setFillColor(terracotta[0], terracotta[1], terracotta[2]);
      doc.rect(margin, pCurY, 2.5, 14, 'F');

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(7.5);
      doc.setTextColor(terracotta[0], terracotta[1], terracotta[2]);
      doc.text(`CHAPTER 0${chapter.chapterNumber} • ${chapter.readingMinutes} MIN READ`, margin + 5, pCurY + 4.5);

      doc.setFont('times', 'bold');
      doc.setFontSize(9.5);
      doc.setTextColor(softCharcoal[0], softCharcoal[1], softCharcoal[2]);
      doc.text(chapter.title, margin + 5, pCurY + 9.5);

      pCurY += 18;

      // Chapter Narrative
      const paragraphs = chapter.content.split('\n\n');
      paragraphs.forEach((para: string) => {
        if (pCurY > pageHeight - 30) {
          doc.addPage();
          pCurY = 24;
        }

        if (para.includes(':') && para.length < 80) {
          doc.setFont('helvetica', 'bold');
          doc.setFontSize(8);
          doc.setTextColor(terracotta[0], terracotta[1], terracotta[2]);
          doc.text(para.trim(), margin, pCurY);
          pCurY += 4.5;
        } else {
          doc.setFont('helvetica', 'normal');
          doc.setFontSize(8);
          doc.setTextColor(softCharcoal[0], softCharcoal[1], softCharcoal[2]);
          const wrapped = doc.splitTextToSize(para.trim(), contentWidth);
          doc.text(wrapped, margin, pCurY);
          pCurY += wrapped.length * 4 + 3;
        }
      });

      // Key Takeaways Box (Sage green accent + light sage tint)
      if (chapter.keyTakeaways && chapter.keyTakeaways.length > 0) {
        if (pCurY > pageHeight - 40) {
          doc.addPage();
          pCurY = 24;
        }

        const boxH = chapter.keyTakeaways.length * 6 + 10;
        doc.setFillColor(sageLightBg[0], sageLightBg[1], sageLightBg[2]);
        doc.setDrawColor(hairlineGrey[0], hairlineGrey[1], hairlineGrey[2]);
        doc.setLineWidth(0.3);
        doc.roundedRect(margin, pCurY, contentWidth, boxH, 1, 1, 'FD');
        doc.setFillColor(sageGreen[0], sageGreen[1], sageGreen[2]);
        doc.rect(margin, pCurY, 2.5, boxH, 'F');

        doc.setFont('helvetica', 'bold');
        doc.setFontSize(7.5);
        doc.setTextColor(sageGreen[0], sageGreen[1], sageGreen[2]);
        doc.text('KEY ARCHITECTURAL TAKEAWAYS', margin + 6, pCurY + 5);

        let tkY = pCurY + 9.5;
        chapter.keyTakeaways.forEach((tk: string) => {
          doc.setFillColor(sageGreen[0], sageGreen[1], sageGreen[2]);
          doc.circle(margin + 6.5, tkY - 0.8, 0.6, 'F');
          doc.setFont('helvetica', 'normal');
          doc.setFontSize(7.5);
          doc.setTextColor(softCharcoal[0], softCharcoal[1], softCharcoal[2]);
          const wrapped = doc.splitTextToSize(tk, contentWidth - 14);
          doc.text(wrapped, margin + 10, tkY);
          tkY += wrapped.length * 3.5 + 1.5;
        });

        pCurY += boxH + 5;
      }

      // Tactical Step-by-Step Checklist
      if (chapter.checklistItems && chapter.checklistItems.length > 0) {
        if (pCurY > pageHeight - 35) {
          doc.addPage();
          pCurY = 24;
        }

        doc.setFont('helvetica', 'bold');
        doc.setFontSize(8);
        doc.setTextColor(softCharcoal[0], softCharcoal[1], softCharcoal[2]);
        doc.text('TACTICAL STEP-BY-STEP CHECKLIST:', margin, pCurY);
        pCurY += 4.5;

        chapter.checklistItems.forEach((item: string) => {
          if (pCurY > pageHeight - 18) {
            doc.addPage();
            pCurY = 24;
          }

          doc.setDrawColor(sageGreen[0], sageGreen[1], sageGreen[2]);
          doc.setLineWidth(0.3);
          doc.rect(margin, pCurY - 2.5, 2.8, 2.8);

          doc.setFont('helvetica', 'normal');
          doc.setFontSize(7.5);
          doc.setTextColor(softCharcoal[0], softCharcoal[1], softCharcoal[2]);
          const wrapped = doc.splitTextToSize(item, contentWidth - 6);
          doc.text(wrapped, margin + 5, pCurY);
          pCurY += wrapped.length * 3.8 + 1.5;
        });
        pCurY += 3;
      }
    });

    // -----------------------------------------------------------------------
    // PART C: PRINTABLE POCKET CHEATSHEETS (4x6" FIELD COMPANION CARDS)
    // -----------------------------------------------------------------------
    if (playbook.pocketCards && playbook.pocketCards.length > 0) {
      doc.addPage();
      let pockY = 24;

      doc.setFont('times', 'bold');
      doc.setFontSize(14);
      doc.setTextColor(softCharcoal[0], softCharcoal[1], softCharcoal[2]);
      doc.text(`SECTION C: 4x6" PRINTABLE POCKET CHEATSHEETS (PRODUCT #${playbook.volumeNumber})`, margin, pockY);
      pockY += 5;

      doc.setDrawColor(terracotta[0], terracotta[1], terracotta[2]);
      doc.setLineWidth(0.6);
      doc.line(margin, pockY, margin + 35, pockY);
      pockY += 6;

      doc.setFont('helvetica', 'italic');
      doc.setFontSize(7.5);
      doc.setTextColor(mutedText[0], mutedText[1], mutedText[2]);
      doc.text('Print-ready 4x6" pocket field cards. Follow dashed border guidelines to cut and carry:', margin, pockY);
      pockY += 6;

      playbook.pocketCards.forEach((card: any) => {
        if (pockY > pageHeight - 55) {
          doc.addPage();
          pockY = 24;
        }

        const cardH = card.bulletPoints.length * 5.5 + 20;
        doc.setFillColor(255, 255, 255);
        doc.setDrawColor(terracotta[0], terracotta[1], terracotta[2]);
        doc.setLineWidth(0.5);
        doc.roundedRect(margin, pockY, contentWidth, cardH, 2, 2, 'FD');

        // Scissor indicator in terracotta
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(6.5);
        doc.setTextColor(terracotta[0], terracotta[1], terracotta[2]);
        doc.text('✂ [PRINT & CUT 4x6" POCKET CARD]', pageWidth - margin - 42, pockY + 5.5);

        doc.setFont('times', 'bold');
        doc.setFontSize(9.5);
        doc.setTextColor(terracotta[0], terracotta[1], terracotta[2]);
        doc.text(card.title, margin + 5, pockY + 6);

        doc.setFont('helvetica', 'italic');
        doc.setFontSize(7);
        doc.setTextColor(mutedText[0], mutedText[1], mutedText[2]);
        doc.text(card.description, margin + 5, pockY + 10.5);

        doc.setDrawColor(hairlineGrey[0], hairlineGrey[1], hairlineGrey[2]);
        doc.setLineWidth(0.3);
        doc.line(margin + 5, pockY + 12.5, margin + contentWidth - 5, pockY + 12.5);

        let bY = pockY + 17;
        card.bulletPoints.forEach((bp: string) => {
          doc.setFillColor(terracotta[0], terracotta[1], terracotta[2]);
          doc.circle(margin + 6, bY - 0.7, 0.6, 'F');
          doc.setFont('helvetica', 'normal');
          doc.setFontSize(7.2);
          doc.setTextColor(softCharcoal[0], softCharcoal[1], softCharcoal[2]);
          const wrapped = doc.splitTextToSize(bp, contentWidth - 14);
          doc.text(wrapped, margin + 9, bY);
          bY += wrapped.length * 3.4 + 1.2;
        });

        pockY += cardH + 5;
      });
    }

    // -----------------------------------------------------------------------
    // PART D: VERIFIED SOURCING MATRIX
    // -----------------------------------------------------------------------
    if (playbook.sourcesAndRetailers && playbook.sourcesAndRetailers.length > 0) {
      if (pCurY > pageHeight - 40) {
        doc.addPage();
        pCurY = 24;
      }

      const tableData = playbook.sourcesAndRetailers.map((item: any) => [
        item.category,
        item.retailer,
        item.recommendedItems,
        item.webUrl
      ]);

      autoTable(doc, {
        startY: pCurY,
        head: [[`Verified Sourcing (${playbook.title.substring(0, 30)}...)`, 'Retailer', 'SKU / Model', 'Source URL']],
        body: tableData,
        margin: { left: margin, right: margin },
        styles: {
          fontSize: 7,
          font: 'helvetica',
          textColor: [43, 40, 37],
          cellPadding: 1.8,
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
    }
  });

  // Stamp header & footer on all pages (excluding cover Page 1)
  const totalMasterPages = doc.internal.pages.length - 1;
  for (let i = 2; i <= totalMasterPages; i++) {
    doc.setPage(i);
    addHeaderAndFooter(i, totalMasterPages);
  }

  return doc;
}

/**
 * Downloads the Master All-In-One Compendium PDF containing all 11 Products
 * (Playbooks + Printable Pocket Cheatsheets + Commercial Specs & License).
 */
export function downloadMasterAllInOnePDF(playbooks?: import('../data/playbookSeriesData').PlaybookMeta[]): void {
  const doc = generateMasterAllInOneCompendiumPDF(playbooks);
  doc.save('SmallSpaceHome_Master_All_In_One_11_Product_Compendium.pdf');
}

/**
 * Downloads a single product's All-In-One PDF (Playbook + Pocket Cheatsheets + Commercial License).
 */
export function downloadProductAllInOnePDF(playbook: import('../data/playbookSeriesData').PlaybookMeta): void {
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
export function downloadPlaybookPDF(playbook: import('../data/playbookSeriesData').PlaybookMeta): void {
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

