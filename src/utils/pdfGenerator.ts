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

  // Colors matching smallspacehome.ca
  const olive = [74, 83, 62]; // #4A533E
  const darkCharcoal = [28, 25, 23]; // #1C1917
  const softStone = [250, 248, 245]; // #FAF8F5
  const borderStone = [229, 223, 213]; // #E5DFD5
  const mutedText = [90, 85, 80];

  // Helper for adding headers to new pages
  const addHeaderAndFooter = (pageNumber: number, totalPages: number) => {
    // Header bar
    doc.setFillColor(olive[0], olive[1], olive[2]);
    doc.rect(0, 0, pageWidth, 5, 'F');

    // Header subtle text
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(olive[0], olive[1], olive[2]);
    doc.text('SMALLSPACEHOME.CA • DIGITAL SYSTEMS', margin, 12);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(mutedText[0], mutedText[1], mutedText[2]);
    doc.text('TORONTO RENTAL LAB ARCHIVE', pageWidth - margin, 12, { align: 'right' });

    doc.setDrawColor(borderStone[0], borderStone[1], borderStone[2]);
    doc.setLineWidth(0.3);
    doc.line(margin, 14, pageWidth - margin, 14);

    // Footer
    doc.setDrawColor(borderStone[0], borderStone[1], borderStone[2]);
    doc.setLineWidth(0.3);
    doc.line(margin, pageHeight - 12, pageWidth - margin, pageHeight - 12);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(mutedText[0], mutedText[1], mutedText[2]);
    doc.text('Tested in a 510 sq ft Toronto Rental Lab • Renter-Safe Standard', margin, pageHeight - 7);
    doc.text(`Page ${pageNumber} of ${totalPages}`, pageWidth - margin, pageHeight - 7, { align: 'right' });
  };

  // Check page overflow and trigger page break if needed
  const checkPageBreak = (neededHeight: number) => {
    if (cursorY + neededHeight > pageHeight - 20) {
      doc.addPage();
      cursorY = 22; // Start below header
    }
  };

  // --- COVER / HEADER SECTION ---
  cursorY = 22;

  // Document Badge / Product Rank
  if (productRank || badge) {
    const badgeText = `PRODUCT #${productRank || 1} • ${badge || 'MASTER DELIVERABLE'}`.toUpperCase();
    doc.setFillColor(softStone[0], softStone[1], softStone[2]);
    doc.setDrawColor(borderStone[0], borderStone[1], borderStone[2]);
    doc.setLineWidth(0.3);
    doc.roundedRect(margin, cursorY, 65, 6, 1, 1, 'FD');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7.5);
    doc.setTextColor(olive[0], olive[1], olive[2]);
    doc.text(badgeText, margin + 3, cursorY + 4.2);
    cursorY += 10;
  }

  // Document Title
  doc.setFont('times', 'bold');
  doc.setFontSize(18);
  doc.setTextColor(darkCharcoal[0], darkCharcoal[1], darkCharcoal[2]);
  const titleLines = doc.splitTextToSize(documentTitle.replace(/\.md|\.pdf|\.txt/gi, '').replace(/_/g, ' '), contentWidth);
  doc.text(titleLines, margin, cursorY);
  cursorY += titleLines.length * 7 + 2;

  // Product Subtitle
  if (productTitle) {
    doc.setFont('times', 'italic');
    doc.setFontSize(11);
    doc.setTextColor(olive[0], olive[1], olive[2]);
    doc.text(`Official Component of: ${productTitle}`, margin, cursorY);
    cursorY += 6;
  }

  // Metadata horizontal divider
  doc.setDrawColor(olive[0], olive[1], olive[2]);
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
          fontSize: 8.5,
          font: 'helvetica',
          textColor: [28, 25, 23],
          cellPadding: 2.5,
          lineColor: [229, 223, 213],
          lineWidth: 0.2,
        },
        headStyles: {
          fillColor: [74, 83, 62],
          textColor: [250, 248, 245],
          fontStyle: 'bold',
        },
        alternateRowStyles: {
          fillColor: [250, 248, 245],
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

    // Markdown H1 (# Header)
    if (trimmed.startsWith('# ')) {
      checkPageBreak(16);
      const text = trimmed.replace(/^#\s+/, '');
      doc.setFillColor(softStone[0], softStone[1], softStone[2]);
      doc.rect(margin, cursorY - 1, contentWidth, 8, 'F');
      doc.setFillColor(olive[0], olive[1], olive[2]);
      doc.rect(margin, cursorY - 1, 2, 8, 'F');

      doc.setFont('times', 'bold');
      doc.setFontSize(13);
      doc.setTextColor(darkCharcoal[0], darkCharcoal[1], darkCharcoal[2]);
      doc.text(text, margin + 4, cursorY + 5);
      cursorY += 12;
      continue;
    }

    // Markdown H2 (## Header) or Card Header
    if (trimmed.startsWith('## ') || trimmed.startsWith('=== CARD')) {
      checkPageBreak(14);
      const text = trimmed.replace(/^##\s+/, '').replace(/===/g, '').trim();
      doc.setFont('times', 'bold');
      doc.setFontSize(11.5);
      doc.setTextColor(olive[0], olive[1], olive[2]);
      doc.text(text, margin, cursorY);
      cursorY += 2;
      doc.setDrawColor(borderStone[0], borderStone[1], borderStone[2]);
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
      doc.setFontSize(9.5);
      doc.setTextColor(darkCharcoal[0], darkCharcoal[1], darkCharcoal[2]);
      doc.text(text, margin, cursorY);
      cursorY += 6;
      continue;
    }

    // Horizontal Rule (--- or ===)
    if (trimmed === '---' || trimmed === '===' || trimmed === '=====================================================') {
      checkPageBreak(6);
      doc.setDrawColor(borderStone[0], borderStone[1], borderStone[2]);
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

      // Box styling colors
      let boxBg = softStone;
      let barColor = olive;
      let titleColor = olive;
      let badgeLabel = 'IMPORTANT NOTICE';

      if (isDanger) {
        boxBg = [253, 242, 242]; // Light red/terracotta
        barColor = [185, 28, 28]; // Dark crimson
        titleColor = [185, 28, 28];
        badgeLabel = 'DANGER ZONE • HIGH DAMAGE RISK (AVOID)';
      } else if (isRule) {
        boxBg = [240, 244, 238]; // Soft sage
        barColor = [74, 83, 62]; // Olive
        titleColor = [74, 83, 62];
        badgeLabel = 'ZERO-DAMAGE MANDATORY LAW';
      } else if (isTip) {
        boxBg = [254, 249, 235]; // Warm cream
        barColor = [180, 120, 30]; // Amber
        titleColor = [180, 120, 30];
        badgeLabel = 'LAB TESTED PRO TIP';
      }

      doc.setFillColor(boxBg[0], boxBg[1], boxBg[2]);
      doc.setDrawColor(borderStone[0], borderStone[1], borderStone[2]);
      doc.setLineWidth(0.3);

      const wrapped = doc.splitTextToSize(cleanText, contentWidth - 10);
      const boxHeight = wrapped.length * 4.6 + 10;
      doc.roundedRect(margin, cursorY - 1, contentWidth, boxHeight, 1, 1, 'FD');
      doc.setFillColor(barColor[0], barColor[1], barColor[2]);
      doc.rect(margin, cursorY - 1, 2.8, boxHeight, 'F'); // Left accent bar

      // Badge label
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(7.5);
      doc.setTextColor(titleColor[0], titleColor[1], titleColor[2]);
      doc.text(badgeLabel, margin + 6, cursorY + 4);

      // Body text
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8);
      doc.setTextColor(darkCharcoal[0], darkCharcoal[1], darkCharcoal[2]);
      doc.text(wrapped, margin + 6, cursorY + 9);
      cursorY += boxHeight + 4;
      continue;
    }

    // Checklist item ([ ] or [x])
    if (trimmed.startsWith('[ ]') || trimmed.startsWith('[x]') || trimmed.startsWith('[X]')) {
      checkPageBreak(7);
      const isChecked = trimmed.startsWith('[x]') || trimmed.startsWith('[X]');
      const text = trimmed.replace(/^\[[ xX]\]\s*/, '');

      // Draw box
      doc.setDrawColor(olive[0], olive[1], olive[2]);
      doc.setLineWidth(0.3);
      doc.rect(margin, cursorY - 3, 3.2, 3.2);
      if (isChecked) {
        doc.setFillColor(olive[0], olive[1], olive[2]);
        doc.rect(margin + 0.6, cursorY - 2.4, 2, 2, 'F');
      }

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8.5);
      doc.setTextColor(darkCharcoal[0], darkCharcoal[1], darkCharcoal[2]);
      const wrapped = doc.splitTextToSize(text, contentWidth - 6);
      doc.text(wrapped, margin + 6, cursorY);
      cursorY += wrapped.length * 4.5 + 1.5;
      continue;
    }

    // Bullet point (- or • or * )
    if (trimmed.startsWith('- ') || trimmed.startsWith('• ') || trimmed.startsWith('* ')) {
      checkPageBreak(7);
      const text = trimmed.replace(/^[-•*]\s*/, '');
      doc.setFillColor(olive[0], olive[1], olive[2]);
      doc.circle(margin + 1.5, cursorY - 1, 0.8, 'F');

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8.5);
      doc.setTextColor(darkCharcoal[0], darkCharcoal[1], darkCharcoal[2]);
      const wrapped = doc.splitTextToSize(text, contentWidth - 5);
      doc.text(wrapped, margin + 5, cursorY);
      cursorY += wrapped.length * 4.5 + 1.5;
      continue;
    }

    // Standard numbered lists (1. , 2. )
    const numberedMatch = trimmed.match(/^(\d+[\.\)])\s*(.*)/);
    if (numberedMatch) {
      checkPageBreak(7);
      const numberPrefix = numberedMatch[1];
      const text = numberedMatch[2];

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8.5);
      doc.setTextColor(olive[0], olive[1], olive[2]);
      doc.text(numberPrefix, margin, cursorY);

      doc.setFont('helvetica', 'normal');
      doc.setTextColor(darkCharcoal[0], darkCharcoal[1], darkCharcoal[2]);
      const wrapped = doc.splitTextToSize(text, contentWidth - 8);
      doc.text(wrapped, margin + 8, cursorY);
      cursorY += wrapped.length * 4.5 + 1.5;
      continue;
    }

    // Standard text paragraph
    checkPageBreak(6);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(darkCharcoal[0], darkCharcoal[1], darkCharcoal[2]);
    const wrapped = doc.splitTextToSize(trimmed, contentWidth);
    doc.text(wrapped, margin, cursorY);
    cursorY += wrapped.length * 4.5 + 2;
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

  // Colors
  const olive = [74, 83, 62]; // #4A533E
  const darkCharcoal = [28, 25, 23]; // #1C1917
  const softStone = [250, 248, 245]; // #FAF8F5
  const borderStone = [229, 223, 213]; // #E5DFD5
  const mutedText = [90, 85, 80];

  const addHeaderAndFooter = (pageNumber: number, totalPages: number, pageTitle?: string) => {
    // Header top accent band
    doc.setFillColor(olive[0], olive[1], olive[2]);
    doc.rect(0, 0, pageWidth, 4, 'F');

    // Header running head
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7.5);
    doc.setTextColor(olive[0], olive[1], olive[2]);
    doc.text(`SMALLSPACEHOME.CA • ${playbook.volumeLabel.toUpperCase()}`, margin, 11);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7);
    doc.setTextColor(mutedText[0], mutedText[1], mutedText[2]);
    doc.text(pageTitle || 'DIGITAL PRODUCT PLAYBOOK KIT', pageWidth - margin, 11, { align: 'right' });

    doc.setDrawColor(borderStone[0], borderStone[1], borderStone[2]);
    doc.setLineWidth(0.3);
    doc.line(margin, 13, pageWidth - margin, 13);

    // Footer
    doc.line(margin, pageHeight - 12, pageWidth - margin, pageHeight - 12);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(mutedText[0], mutedText[1], mutedText[2]);
    doc.text(`Tested in a 510 sq ft Toronto Rental Lab • Commercial Edition • ISBN: ${playbook.isbn}`, margin, pageHeight - 7);
    doc.text(`Page ${pageNumber} of ${totalPages}`, pageWidth - margin, pageHeight - 7, { align: 'right' });
  };

  // =========================================================================
  // PAGE 1: COVER PAGE
  // =========================================================================
  // Background aesthetic
  doc.setFillColor(softStone[0], softStone[1], softStone[2]);
  doc.rect(0, 0, pageWidth, pageHeight, 'F');

  // Decorative border
  doc.setDrawColor(borderStone[0], borderStone[1], borderStone[2]);
  doc.setLineWidth(0.8);
  doc.rect(margin - 4, margin - 4, contentWidth + 8, pageHeight - margin * 2 + 8);

  // Top header banner
  doc.setFillColor(olive[0], olive[1], olive[2]);
  doc.rect(margin, margin, contentWidth, 14, 'F');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(250, 248, 245);
  doc.text('SMALLSPACEHOME.CA • TORONTO RENTAL LAB ARCHIVE', margin + 4, margin + 9);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.text(`SERIES VOL. 0${playbook.volumeNumber}`, pageWidth - margin - 4, margin + 9, { align: 'right' });

  // Volume & Badge Pill
  doc.setFillColor(255, 255, 255);
  doc.setDrawColor(olive[0], olive[1], olive[2]);
  doc.setLineWidth(0.4);
  doc.roundedRect(margin, margin + 22, contentWidth, 9, 1.5, 1.5, 'FD');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8);
  doc.setTextColor(olive[0], olive[1], olive[2]);
  doc.text(`${playbook.volumeLabel.toUpperCase()} • DIGITAL PRODUCT PLAYBOOK KIT`, margin + 4, margin + 28);

  // Main Book Title
  let curY = margin + 44;
  doc.setFont('times', 'bold');
  doc.setFontSize(22);
  doc.setTextColor(darkCharcoal[0], darkCharcoal[1], darkCharcoal[2]);
  const titleLines = doc.splitTextToSize(playbook.title, contentWidth);
  doc.text(titleLines, margin, curY);
  curY += titleLines.length * 9 + 4;

  // Subtitle
  doc.setFont('times', 'italic');
  doc.setFontSize(12);
  doc.setTextColor(olive[0], olive[1], olive[2]);
  const subLines = doc.splitTextToSize(playbook.subtitle, contentWidth);
  doc.text(subLines, margin, curY);
  curY += subLines.length * 6 + 8;

  // Accent divider line
  doc.setDrawColor(olive[0], olive[1], olive[2]);
  doc.setLineWidth(1);
  doc.line(margin, curY, margin + 40, curY);
  curY += 12;

  // Key Promise Box
  doc.setFillColor(255, 255, 255);
  doc.setDrawColor(borderStone[0], borderStone[1], borderStone[2]);
  doc.setLineWidth(0.4);
  doc.roundedRect(margin, curY, contentWidth, 34, 1.5, 1.5, 'FD');
  doc.setFillColor(olive[0], olive[1], olive[2]);
  doc.rect(margin, curY, 3, 34, 'F');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(olive[0], olive[1], olive[2]);
  doc.text('TARGET DELIVERABLE & CORE VALUE PROMISE', margin + 7, curY + 7);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(darkCharcoal[0], darkCharcoal[1], darkCharcoal[2]);
  const promiseLines = doc.splitTextToSize(playbook.promise, contentWidth - 14);
  doc.text(promiseLines, margin + 7, curY + 14);

  doc.setFont('helvetica', 'italic');
  doc.setFontSize(7.5);
  doc.setTextColor(mutedText[0], mutedText[1], mutedText[2]);
  doc.text(`Target Audience: ${playbook.audience}`, margin + 7, curY + 28);
  curY += 46;

  // Commercial Spec Metadata Grid
  const specY = curY;
  const colW = contentWidth / 3;

  // Box 1
  doc.setFillColor(255, 255, 255);
  doc.roundedRect(margin, specY, colW - 2, 22, 1, 1, 'FD');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7.5);
  doc.setTextColor(mutedText[0], mutedText[1], mutedText[2]);
  doc.text('ESTIMATED TARGET', margin + 3, specY + 6);
  doc.setFont('times', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(darkCharcoal[0], darkCharcoal[1], darkCharcoal[2]);
  doc.text(playbook.targetFileSize, margin + 3, specY + 14);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7);
  doc.setTextColor(olive[0], olive[1], olive[2]);
  doc.text('Digital-First Standard', margin + 3, specY + 19);

  // Box 2
  doc.setFillColor(255, 255, 255);
  doc.roundedRect(margin + colW + 1, specY, colW - 2, 22, 1, 1, 'FD');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7.5);
  doc.setTextColor(mutedText[0], mutedText[1], mutedText[2]);
  doc.text('COMMERCIAL PRICING', margin + colW + 4, specY + 6);
  doc.setFont('times', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(darkCharcoal[0], darkCharcoal[1], darkCharcoal[2]);
  doc.text(`$${playbook.priceCad} CAD`, margin + colW + 4, specY + 14);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7);
  doc.setTextColor(mutedText[0], mutedText[1], mutedText[2]);
  doc.text(`Perceived Value: $${playbook.perceivedValueCad} CAD`, margin + colW + 4, specY + 19);

  // Box 3
  doc.setFillColor(255, 255, 255);
  doc.roundedRect(margin + colW * 2 + 2, specY, colW - 2, 22, 1, 1, 'FD');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7.5);
  doc.setTextColor(mutedText[0], mutedText[1], mutedText[2]);
  doc.text('IDENTIFIER & EDITION', margin + colW * 2 + 5, specY + 6);
  doc.setFont('times', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(darkCharcoal[0], darkCharcoal[1], darkCharcoal[2]);
  doc.text(playbook.isbn, margin + colW * 2 + 5, specY + 13);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7);
  doc.setTextColor(olive[0], olive[1], olive[2]);
  doc.text('First Commercial Edition', margin + colW * 2 + 5, specY + 19);

  // Cover Footer Credits
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(mutedText[0], mutedText[1], mutedText[2]);
  doc.text(`Author: ${playbook.author}`, margin, pageHeight - margin - 8);
  doc.text(`Publisher: ${playbook.publisher} • © ${playbook.copyrightYear}`, margin, pageHeight - margin - 3);

  // =========================================================================
  // PAGE 2: MANDATORY PERSONAL USE LICENSE & COPYRIGHT NOTICE
  // =========================================================================
  doc.addPage();
  curY = 24;

  doc.setFont('times', 'bold');
  doc.setFontSize(16);
  doc.setTextColor(darkCharcoal[0], darkCharcoal[1], darkCharcoal[2]);
  doc.text('COMMERCIAL NOTICE & PERSONAL USE LICENSE', margin, curY);
  curY += 6;

  doc.setDrawColor(olive[0], olive[1], olive[2]);
  doc.setLineWidth(0.8);
  doc.line(margin, curY, margin + 40, curY);
  curY += 8;

  // License Card Box
  doc.setFillColor(softStone[0], softStone[1], softStone[2]);
  doc.setDrawColor(borderStone[0], borderStone[1], borderStone[2]);
  doc.setLineWidth(0.3);
  doc.roundedRect(margin, curY, contentWidth, 76, 1.5, 1.5, 'FD');
  doc.setFillColor(olive[0], olive[1], olive[2]);
  doc.rect(margin, curY, 2.5, 76, 'F');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(olive[0], olive[1], olive[2]);
  doc.text('STANDARD DIGITAL PRODUCT LICENSE TERMS', margin + 6, curY + 6);

  const licenseTerms = [
    '• GRANT OF LICENSE: SmallSpaceHome Inc. grants the purchaser a single-user, non-exclusive, non-transferable Personal Use License for this Digital Product Playbook Kit.',
    '• INTELLECTUAL PROPERTY: The buyer does NOT acquire ownership of any underlying trademarks, patents, proprietary formulas, or copyright assets. All content remains the exclusive intellectual property of SmallSpaceHome Inc.',
    '• COMMERCIAL RESALE RESTRICTION: You may NOT resell, sub-license, distribute, redistribute, bundle, or share this PDF document or its component files in whole or in part across any digital marketplace (e.g. Gumroad, Etsy, Shopify, Patreon) or file-sharing network.',
    '• DERIVATIVE WORKS: You may not reverse-engineer, decompile, transcribe, or repackage this guide to create competing commercial digital products or AI training corpora.',
    '• JURISDICTION: This agreement is governed by the laws of the Province of Ontario and the applicable federal copyright laws of Canada.'
  ];

  let licY = curY + 12;
  licenseTerms.forEach(term => {
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(darkCharcoal[0], darkCharcoal[1], darkCharcoal[2]);
    const wrapped = doc.splitTextToSize(term, contentWidth - 12);
    doc.text(wrapped, margin + 6, licY);
    licY += wrapped.length * 3.8 + 2;
  });

  curY += 84;

  // Disclaimer Box
  doc.setFillColor(255, 255, 255);
  doc.setDrawColor(borderStone[0], borderStone[1], borderStone[2]);
  doc.roundedRect(margin, curY, contentWidth, 42, 1, 1, 'FD');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(darkCharcoal[0], darkCharcoal[1], darkCharcoal[2]);
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
  doc.setTextColor(olive[0], olive[1], olive[2]);
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
      textColor: [28, 25, 23],
      lineColor: [229, 223, 213],
      lineWidth: 0.2
    },
    headStyles: {
      fillColor: [74, 83, 62],
      textColor: [250, 248, 245],
      fontStyle: 'bold'
    },
    alternateRowStyles: {
      fillColor: [250, 248, 245]
    }
  });

  // =========================================================================
  // PAGE 3: CLICKABLE TABLE OF CONTENTS & EXECUTIVE ROADMAP
  // =========================================================================
  doc.addPage();
  curY = 24;

  doc.setFont('times', 'bold');
  doc.setFontSize(16);
  doc.setTextColor(darkCharcoal[0], darkCharcoal[1], darkCharcoal[2]);
  doc.text('TABLE OF CONTENTS & CHAPTER ROADMAP', margin, curY);
  curY += 6;

  doc.setDrawColor(olive[0], olive[1], olive[2]);
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
    doc.setFillColor(softStone[0], softStone[1], softStone[2]);
    doc.setDrawColor(borderStone[0], borderStone[1], borderStone[2]);
    doc.roundedRect(margin, curY, contentWidth, 14, 1, 1, 'FD');

    // Chapter badge
    doc.setFillColor(olive[0], olive[1], olive[2]);
    doc.rect(margin, curY, 18, 14, 'F');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(250, 248, 245);
    doc.text(`CH 0${ch.chapterNumber}`, margin + 2.5, curY + 8.5);

    // Title & Subtitle
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(darkCharcoal[0], darkCharcoal[1], darkCharcoal[2]);
    doc.text(ch.title, margin + 22, curY + 5.5);

    doc.setFont('helvetica', 'italic');
    doc.setFontSize(7.5);
    doc.setTextColor(mutedText[0], mutedText[1], mutedText[2]);
    doc.text(`${ch.subtitle} • (${ch.readingMinutes} min read)`, margin + 22, curY + 10.5);

    // Arrow indicator
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(olive[0], olive[1], olive[2]);
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
    doc.setDrawColor(borderStone[0], borderStone[1], borderStone[2]);
    doc.roundedRect(margin, curY, contentWidth, 12, 1, 1, 'FD');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(olive[0], olive[1], olive[2]);
    doc.text(`APPX 0${idx + 1}`, margin + 4, curY + 7.5);

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(darkCharcoal[0], darkCharcoal[1], darkCharcoal[2]);
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

    // Chapter Header Banner
    doc.setFillColor(softStone[0], softStone[1], softStone[2]);
    doc.setDrawColor(borderStone[0], borderStone[1], borderStone[2]);
    doc.roundedRect(margin, chapY, contentWidth, 18, 1, 1, 'FD');
    doc.setFillColor(olive[0], olive[1], olive[2]);
    doc.rect(margin, chapY, 3, 18, 'F');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7.5);
    doc.setTextColor(olive[0], olive[1], olive[2]);
    doc.text(`CHAPTER 0${chapter.chapterNumber} • ${chapter.readingMinutes} MIN READ`, margin + 6, chapY + 5.5);

    doc.setFont('times', 'bold');
    doc.setFontSize(11);
    doc.setTextColor(darkCharcoal[0], darkCharcoal[1], darkCharcoal[2]);
    doc.text(chapter.title, margin + 6, chapY + 11.5);

    doc.setFont('helvetica', 'italic');
    doc.setFontSize(7.5);
    doc.setTextColor(mutedText[0], mutedText[1], mutedText[2]);
    doc.text(chapter.subtitle, margin + 6, chapY + 15.5);

    chapY += 24;

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
        doc.setTextColor(olive[0], olive[1], olive[2]);
        doc.text(para.trim(), margin, chapY);
        chapY += 5;
      } else {
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(8.5);
        doc.setTextColor(darkCharcoal[0], darkCharcoal[1], darkCharcoal[2]);
        const wrapped = doc.splitTextToSize(para.trim(), contentWidth);
        doc.text(wrapped, margin, chapY);
        chapY += wrapped.length * 4.4 + 4;
      }
    });

    // Key Takeaways Box
    if (chapter.keyTakeaways && chapter.keyTakeaways.length > 0) {
      if (chapY > pageHeight - 50) {
        doc.addPage();
        chapY = 24;
      }

      const boxHeight = chapter.keyTakeaways.length * 7 + 12;
      doc.setFillColor(softStone[0], softStone[1], softStone[2]);
      doc.setDrawColor(olive[0], olive[1], olive[2]);
      doc.setLineWidth(0.4);
      doc.roundedRect(margin, chapY, contentWidth, boxHeight, 1, 1, 'FD');
      doc.setFillColor(olive[0], olive[1], olive[2]);
      doc.rect(margin, chapY, 3, boxHeight, 'F');

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8);
      doc.setTextColor(olive[0], olive[1], olive[2]);
      doc.text('KEY ARCHITECTURAL TAKEAWAYS', margin + 6, chapY + 5.5);

      let tkY = chapY + 11;
      chapter.keyTakeaways.forEach((tk) => {
        doc.setFillColor(olive[0], olive[1], olive[2]);
        doc.circle(margin + 7, tkY - 1, 0.8, 'F');
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(7.5);
        doc.setTextColor(darkCharcoal[0], darkCharcoal[1], darkCharcoal[2]);
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
      doc.setTextColor(darkCharcoal[0], darkCharcoal[1], darkCharcoal[2]);
      doc.text('TACTICAL STEP-BY-STEP CHECKLIST:', margin, chapY);
      chapY += 5;

      chapter.checklistItems.forEach((item) => {
        if (chapY > pageHeight - 20) {
          doc.addPage();
          chapY = 24;
        }

        // Draw interactive checkbox
        doc.setDrawColor(olive[0], olive[1], olive[2]);
        doc.setLineWidth(0.3);
        doc.rect(margin, chapY - 2.8, 3, 3);

        doc.setFont('helvetica', 'normal');
        doc.setFontSize(8);
        doc.setTextColor(darkCharcoal[0], darkCharcoal[1], darkCharcoal[2]);
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
    doc.setTextColor(darkCharcoal[0], darkCharcoal[1], darkCharcoal[2]);
    doc.text('APPENDIX A: 4x6" POCKET COMPANION FIELD CARDS', margin, pockY);
    pockY += 6;

    doc.setDrawColor(olive[0], olive[1], olive[2]);
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
      doc.setFillColor(softStone[0], softStone[1], softStone[2]);
      doc.setDrawColor(olive[0], olive[1], olive[2]);
      doc.setLineWidth(0.6);
      doc.roundedRect(margin, pockY, contentWidth, cardH, 2, 2, 'FD');

      doc.setFont('times', 'bold');
      doc.setFontSize(10);
      doc.setTextColor(olive[0], olive[1], olive[2]);
      doc.text(card.title, margin + 6, pockY + 6.5);

      doc.setFont('helvetica', 'italic');
      doc.setFontSize(7.5);
      doc.setTextColor(mutedText[0], mutedText[1], mutedText[2]);
      doc.text(card.description, margin + 6, pockY + 11.5);

      doc.setDrawColor(borderStone[0], borderStone[1], borderStone[2]);
      doc.setLineWidth(0.3);
      doc.line(margin + 6, pockY + 13.5, margin + contentWidth - 6, pockY + 13.5);

      let bY = pockY + 18;
      card.bulletPoints.forEach((bp) => {
        doc.setFillColor(olive[0], olive[1], olive[2]);
        doc.circle(margin + 7, bY - 0.8, 0.7, 'F');
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(7.5);
        doc.setTextColor(darkCharcoal[0], darkCharcoal[1], darkCharcoal[2]);
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
    doc.setTextColor(darkCharcoal[0], darkCharcoal[1], darkCharcoal[2]);
    doc.text('APPENDIX B: VERIFIED SOURCING & RETAILER MATRIX', margin, srcY);
    srcY += 6;

    doc.setDrawColor(olive[0], olive[1], olive[2]);
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
        textColor: [28, 25, 23],
        cellPadding: 2.5,
        lineColor: [229, 223, 213],
        lineWidth: 0.2
      },
      headStyles: {
        fillColor: [74, 83, 62],
        textColor: [250, 248, 245],
        fontStyle: 'bold'
      },
      alternateRowStyles: {
        fillColor: [250, 248, 245]
      }
    });

    // @ts-expect-error - jsPDF autoTable attaches lastAutoTable
    srcY = doc.lastAutoTable.finalY + 12;

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(olive[0], olive[1], olive[2]);
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
