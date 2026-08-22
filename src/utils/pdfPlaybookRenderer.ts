import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import { PlaybookMeta } from '../data/playbookSeriesData';
import { getVolumeEnrichment, VolumeEnrichment } from './playbookEnrichmentData';

// Color Palette Constants
export const PALETTE = {
  creamBg: [250, 247, 242] as [number, number, number],       // #FAF7F2
  softCharcoal: [43, 40, 37] as [number, number, number],     // #2B2825
  terracotta: [195, 111, 74] as [number, number, number],     // #C36F4A
  sageGreen: [122, 138, 111] as [number, number, number],     // #7A8A6F
  amberRed: [181, 73, 60] as [number, number, number],        // #B5493C
  hairlineGrey: [220, 213, 203] as [number, number, number],  // #DCD5CB
  mutedText: [120, 113, 105] as [number, number, number],     // Soft warm charcoal
  sageLightBg: [243, 245, 241] as [number, number, number],   // #F3F5F1
  redLightBg: [253, 242, 240] as [number, number, number],    // #FDF2F0
};

export interface RenderContext {
  doc: jsPDF;
  playbook: PlaybookMeta;
  enrichment: VolumeEnrichment;
  pageWidth: number;
  pageHeight: number;
  margin: number;
  contentWidth: number;
  tocTargets: Record<string, number>;
}

export function createRenderContext(doc: jsPDF, playbook: PlaybookMeta): RenderContext {
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 18;
  const contentWidth = pageWidth - margin * 2;
  const enrichment = getVolumeEnrichment(playbook.id, playbook.volumeNumber, playbook.title, playbook.category);

  return {
    doc,
    playbook,
    enrichment,
    pageWidth,
    pageHeight,
    margin,
    contentWidth,
    tocTargets: {}
  };
}

/**
 * Adds running header and footer to a given page
 */
export function addRunningHeaderAndFooter(
  ctx: RenderContext,
  pageNumber: number,
  totalPages: number,
  pageTitle?: string
) {
  const { doc, playbook, pageWidth, pageHeight, margin } = ctx;
  const { terracotta, hairlineGrey, mutedText } = PALETTE;

  // Top Terracotta Accent Band
  doc.setFillColor(terracotta[0], terracotta[1], terracotta[2]);
  doc.rect(0, 0, pageWidth, 4, 'F');

  // Running Header
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7.5);
  doc.setTextColor(terracotta[0], terracotta[1], terracotta[2]);
  doc.text(`SMALLSPACEHOME.CA • ${playbook.volumeLabel.toUpperCase()}`, margin, 11);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7);
  doc.setTextColor(mutedText[0], mutedText[1], mutedText[2]);
  doc.text(pageTitle || 'TECHNICAL FIELD MANUAL', pageWidth - margin, 11, { align: 'right' });

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
}

/**
 * 1. COVER PAGE (Page 1)
 */
export function renderPlaybookCover(ctx: RenderContext) {
  const { doc, playbook, pageWidth, pageHeight, margin, contentWidth } = ctx;
  const { creamBg, softCharcoal, terracotta, sageGreen, hairlineGrey, mutedText } = PALETTE;

  // Background
  doc.setFillColor(creamBg[0], creamBg[1], creamBg[2]);
  doc.rect(0, 0, pageWidth, pageHeight, 'F');

  // Decorative Border
  doc.setDrawColor(hairlineGrey[0], hairlineGrey[1], hairlineGrey[2]);
  doc.setLineWidth(0.8);
  doc.rect(margin - 4, margin - 4, contentWidth + 8, pageHeight - margin * 2 + 8);

  // Top Banner
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
  doc.text(`${playbook.volumeLabel.toUpperCase()} • TECHNICAL PLAYBOOK & FIELD MANUAL`, margin + 4, margin + 26);

  // Main Book Title
  let curY = margin + 40;
  doc.setFont('times', 'bold');
  doc.setFontSize(22);
  doc.setTextColor(softCharcoal[0], softCharcoal[1], softCharcoal[2]);
  const titleLines = doc.splitTextToSize(playbook.title, contentWidth);
  doc.text(titleLines, margin, curY);
  curY += titleLines.length * 8.5 + 3;

  // Subtitle
  doc.setFont('times', 'italic');
  doc.setFontSize(11.5);
  doc.setTextColor(terracotta[0], terracotta[1], terracotta[2]);
  const subLines = doc.splitTextToSize(playbook.subtitle, contentWidth);
  doc.text(subLines, margin, curY);
  curY += subLines.length * 5.5 + 5;

  // Brand Quote
  doc.setFont('times', 'italic');
  doc.setFontSize(9);
  doc.setTextColor(mutedText[0], mutedText[1], mutedText[2]);
  doc.text('"Your space doesn\'t need to be bigger — it needs to work smarter."', margin, curY);
  curY += 6;

  // Accent line
  doc.setDrawColor(terracotta[0], terracotta[1], terracotta[2]);
  doc.setLineWidth(1);
  doc.line(margin, curY, margin + 40, curY);
  curY += 10;

  // Target Deliverable Box
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

  // 3-Column Metadata Grid
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
  doc.text('COMMERCIAL VALUE', margin + colW + 4, specY + 6);
  doc.setFont('times', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(terracotta[0], terracotta[1], terracotta[2]);
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
  doc.text('REGISTERED ISBN & VER', margin + colW * 2 + 5, specY + 6);
  doc.setFont('times', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(softCharcoal[0], softCharcoal[1], softCharcoal[2]);
  doc.text(playbook.isbn, margin + colW * 2 + 5, specY + 13.5);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7);
  doc.setTextColor(sageGreen[0], sageGreen[1], sageGreen[2]);
  doc.text('Version 1.0 (Public Release)', margin + colW * 2 + 5, specY + 19);

  curY += 32;

  // Field Cards Included Box
  doc.setFillColor(255, 255, 255);
  doc.setDrawColor(terracotta[0], terracotta[1], terracotta[2]);
  doc.setLineWidth(0.4);
  doc.roundedRect(margin, curY, contentWidth, 24, 1.5, 1.5, 'FD');
  doc.setFillColor(terracotta[0], terracotta[1], terracotta[2]);
  doc.rect(margin, curY, 3, 24, 'F');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8);
  doc.setTextColor(terracotta[0], terracotta[1], terracotta[2]);
  doc.text('INCLUDES 4x6" POCKET FIELD COMPANION CARDS (PRINT & CUT APPENDIX):', margin + 6, curY + 6);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(softCharcoal[0], softCharcoal[1], softCharcoal[2]);
  doc.text('• Card 01: Surface Inspection & 70% IPA Solvent Activation Procedure', margin + 6, curY + 11.5);
  doc.text('• Card 02: Fastener Selection & Safe Working Load (40% Safety Buffer)', margin + 6, curY + 16);
  doc.text('• Card 03: Thermal Dental Floss Removal & Baseline Restoration', margin + 6, curY + 20.5);

  // Footer Credits
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(mutedText[0], mutedText[1], mutedText[2]);
  doc.text(`Author: ${playbook.author}`, margin, pageHeight - margin - 6);
  doc.text(`Publisher: ${playbook.publisher} • © ${playbook.copyrightYear} SmallSpaceHome`, margin, pageHeight - margin - 2);
}

/**
 * 2. PERSONAL USE LICENSE + IMPORTANT DISCLAIMER (Page 2)
 */
export function renderLicenseAndDisclaimer(ctx: RenderContext) {
  const { doc, playbook, pageHeight, margin, contentWidth } = ctx;
  const { softCharcoal, terracotta, sageGreen, hairlineGrey, mutedText, sageLightBg, amberRed, redLightBg } = PALETTE;

  doc.addPage();
  let lY = 24;

  // Title
  doc.setFont('times', 'bold');
  doc.setFontSize(16);
  doc.setTextColor(softCharcoal[0], softCharcoal[1], softCharcoal[2]);
  doc.text('PERSONAL USE LICENSE & IMPORTANT DISCLAIMER', margin, lY);
  lY += 6;

  doc.setDrawColor(terracotta[0], terracotta[1], terracotta[2]);
  doc.setLineWidth(0.8);
  doc.line(margin, lY, margin + 40, lY);
  lY += 8;

  // Box 1: Personal Use License Terms
  doc.setFillColor(sageLightBg[0], sageLightBg[1], sageLightBg[2]);
  doc.setDrawColor(hairlineGrey[0], hairlineGrey[1], hairlineGrey[2]);
  doc.setLineWidth(0.4);
  doc.roundedRect(margin, lY, contentWidth, 54, 1.5, 1.5, 'FD');
  doc.setFillColor(sageGreen[0], sageGreen[1], sageGreen[2]);
  doc.rect(margin, lY, 3, 54, 'F');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(sageGreen[0], sageGreen[1], sageGreen[2]);
  doc.text('PERSONAL-USE LICENSE TERMS (SINGLE USER)', margin + 6, lY + 6.5);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(softCharcoal[0], softCharcoal[1], softCharcoal[2]);
  const licenseTexts = [
    '• GRANTED RIGHTS: You are granted a non-exclusive, non-transferable, revocable single-user license to download, read, store, and print this playbook and its associated 4x6" field cards for personal, non-commercial use.',
    '• COPYRIGHT OWNERSHIP: SmallSpaceHome retains full copyright and intellectual property rights over all text, mathematical formulas, dimensional diagrams, field cards, and workflows contained within this publication.',
    '• STRICT NO-RESALE & REDISTRIBUTION: You may not resell, redistribute, sublicense, lease, upload to file-sharing networks, or commercially exploit this digital product in any form without express prior written consent.',
    '• COMMERCIAL BUNDLING: This document may not be bundled into paid membership sites, courses, or contractor kits without a certified commercial partner license.',
    '• SUPPORT & CONTACT: Official product support, inquiries, and errata: support@smallspacehome.ca • https://smallspacehome.ca'
  ];

  let lTextY = lY + 12;
  licenseTexts.forEach(txt => {
    const wrapped = doc.splitTextToSize(txt, contentWidth - 12);
    doc.text(wrapped, margin + 6, lTextY);
    lTextY += wrapped.length * 3.6 + 1.2;
  });

  lY += 60;

  // Box 2: Important Disclaimers (Safety, Manufacturer, Property, Engineering)
  doc.setFillColor(redLightBg[0], redLightBg[1], redLightBg[2]);
  doc.setDrawColor(hairlineGrey[0], hairlineGrey[1], hairlineGrey[2]);
  doc.setLineWidth(0.4);
  doc.roundedRect(margin, lY, contentWidth, 74, 1.5, 1.5, 'FD');
  doc.setFillColor(amberRed[0], amberRed[1], amberRed[2]);
  doc.rect(margin, lY, 3, 74, 'F');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(amberRed[0], amberRed[1], amberRed[2]);
  doc.text('CRITICAL TECHNICAL SAFETY & LEGAL DISCLAIMERS', margin + 6, lY + 6.5);

  const disclaimerTexts = [
    '• TECHNICAL GUIDANCE NOT PROFESSIONAL ENGINEERING: The testing data, calculations, and methods presented herein represent empirical field tests conducted in a residential setting (Toronto Rental Lab). They do not constitute formal structural engineering, architectural, or licensed contracting advice.',
    '• MANUFACTURER-INSTRUCTION PRECEDENCE: Always prioritize official manufacturer installation instructions and weight ratings on original retail packaging. Product formulations, adhesive chemistries, and fastener designs vary over time.',
    '• CONSERVATIVE SAFETY BUFFER: Always apply the 40% renter safety buffer (CWL = Rated * 0.60) outlined in this playbook. Never mount heavy objects, mirrors, or cantilevered storage above beds, cribs, or seating zones using adhesive alone.',
    '• PROPERTY RULES & LEASE OBLIGATIONS: Tenants are solely responsible for reviewing their residential lease agreements, building bylaws, and condominium rules. Substrate conditions (e.g., crumbly heritage plaster, unpainted drywall, humidity) vary widely.',
    '• NO ABSOLUTE GUARANTEES: While these methods are engineered to minimize damage to rental finishes when strictly executed, SmallSpaceHome assumes no liability for property damage, personal injury, landlord disputes, or security deposit deductions.'
  ];

  let dTextY = lY + 12;
  disclaimerTexts.forEach(txt => {
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.3);
    doc.setTextColor(softCharcoal[0], softCharcoal[1], softCharcoal[2]);
    const wrapped = doc.splitTextToSize(txt, contentWidth - 12);
    doc.text(wrapped, margin + 6, dTextY);
    dTextY += wrapped.length * 3.6 + 1.2;
  });

  lY += 80;

  // Metadata Table
  const metaRows = [
    ['Product Name', playbook.title],
    ['Volume / Series', `${playbook.volumeLabel} (Volume ${playbook.volumeNumber})`],
    ['ISBN / Registry', playbook.isbn],
    ['Publication Version', 'Version 1.0 (Public Release) • August 2026'],
    ['Legal Entity', `© ${playbook.copyrightYear} SmallSpaceHome • Toronto Rental Lab`]
  ];

  autoTable(doc, {
    startY: lY,
    head: [['Specification Key', 'Official Registry Record']],
    body: metaRows,
    margin: { left: margin, right: margin },
    styles: {
      fontSize: 7.2,
      font: 'helvetica',
      textColor: [43, 40, 37],
      cellPadding: 2,
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

/**
 * 3. TABLE OF CONTENTS & NAVIGATION ROADMAP (Page 3)
 */
export function renderTableOfContents(ctx: RenderContext) {
  const { doc, playbook, margin, contentWidth } = ctx;
  const { softCharcoal, terracotta, sageGreen, hairlineGrey, mutedText } = PALETTE;

  doc.addPage();
  let tocY = 24;

  // Header
  doc.setFont('times', 'bold');
  doc.setFontSize(16);
  doc.setTextColor(softCharcoal[0], softCharcoal[1], softCharcoal[2]);
  doc.text('TABLE OF CONTENTS & NAVIGATION ROADMAP', margin, tocY);
  tocY += 6;

  doc.setDrawColor(terracotta[0], terracotta[1], terracotta[2]);
  doc.setLineWidth(0.8);
  doc.line(margin, tocY, margin + 40, tocY);
  tocY += 8;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(mutedText[0], mutedText[1], mutedText[2]);
  doc.text('Click any chapter or operational tool below for instant navigation:', margin, tocY);
  tocY += 6;

  // Chapters list
  playbook.chapters.forEach((chap) => {
    const cardH = 17;
    doc.setFillColor(255, 255, 255);
    doc.setDrawColor(hairlineGrey[0], hairlineGrey[1], hairlineGrey[2]);
    doc.setLineWidth(0.4);
    doc.roundedRect(margin, tocY, contentWidth, cardH, 1, 1, 'FD');

    // Left chapter badge
    doc.setFillColor(terracotta[0], terracotta[1], terracotta[2]);
    doc.roundedRect(margin + 2.5, tocY + 2.5, 16, 12, 1, 1, 'F');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7.5);
    doc.setTextColor(255, 255, 255);
    doc.text(`CH 0${chap.chapterNumber}`, margin + 4, tocY + 9.5);

    // Chapter Title
    doc.setFont('times', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(softCharcoal[0], softCharcoal[1], softCharcoal[2]);
    const maxTitleW = contentWidth - 60;
    const titleLines = doc.splitTextToSize(chap.title, maxTitleW);
    doc.text(titleLines[0], margin + 22, tocY + 6.5);

    // Subtitle
    doc.setFont('helvetica', 'italic');
    doc.setFontSize(7);
    doc.setTextColor(mutedText[0], mutedText[1], mutedText[2]);
    const subLines = doc.splitTextToSize(chap.subtitle, maxTitleW);
    doc.text(subLines[0], margin + 22, tocY + 11.5);

    // Right Reading minutes
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(terracotta[0], terracotta[1], terracotta[2]);
    doc.text(`${chap.readingMinutes} Min Read →`, margin + contentWidth - 4, tocY + 9.5, { align: 'right' });

    tocY += cardH + 3.5;
  });

  // Standalone Operational Tools Cards in TOC
  const tools = [
    {
      code: 'EXEC',
      title: 'Tactical Execution Checklist: Compressed 4-Stage Workflow',
      subtitle: 'Stand-alone on-site operational checklist (Before · During · After · Remove)',
      color: sageGreen
    },
    {
      code: 'APPX',
      title: 'Appendix: Hardware Specifications, Formulas & Troubleshooting Matrix',
      subtitle: 'Safe Working Loads, 5-column problem solver, and math worked examples',
      color: terracotta
    },
    {
      code: 'CARD',
      title: '4x6" Printable Pocket Field Companion Cards (Print & Cut)',
      subtitle: 'Card 01: Surface Prep • Card 02: Hardware • Card 03: Removal • Card 04: Sourcing',
      color: terracotta
    }
  ];

  tools.forEach(tool => {
    const cardH = 17;
    doc.setFillColor(255, 255, 255);
    doc.setDrawColor(hairlineGrey[0], hairlineGrey[1], hairlineGrey[2]);
    doc.setLineWidth(0.4);
    doc.roundedRect(margin, tocY, contentWidth, cardH, 1, 1, 'FD');

    doc.setFillColor(tool.color[0], tool.color[1], tool.color[2]);
    doc.roundedRect(margin + 2.5, tocY + 2.5, 16, 12, 1, 1, 'F');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7.5);
    doc.setTextColor(255, 255, 255);
    doc.text(tool.code, margin + 4.5, tocY + 9.5);

    doc.setFont('times', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(softCharcoal[0], softCharcoal[1], softCharcoal[2]);
    doc.text(tool.title, margin + 22, tocY + 6.5);

    doc.setFont('helvetica', 'italic');
    doc.setFontSize(7);
    doc.setTextColor(mutedText[0], mutedText[1], mutedText[2]);
    doc.text(tool.subtitle, margin + 22, tocY + 11.5);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(tool.color[0], tool.color[1], tool.color[2]);
    doc.text('Field Tool →', margin + contentWidth - 4, tocY + 9.5, { align: 'right' });

    tocY += cardH + 3.5;
  });
}

/**
 * 4. CHAPTERS & TACTICS
 */
export function renderPlaybookChapters(ctx: RenderContext) {
  const { doc, playbook, enrichment, pageHeight, margin, contentWidth } = ctx;
  const { softCharcoal, terracotta, sageGreen, hairlineGrey, mutedText, sageLightBg, amberRed, redLightBg } = PALETTE;

  playbook.chapters.forEach((chapter, cIdx) => {
    doc.addPage();
    let chapY = 24;

    // Record chapter page
    ctx.tocTargets[`ch-${chapter.chapterNumber}`] = doc.internal.pages.length - 1;

    // Chapter Header Banner
    doc.setFillColor(255, 255, 255);
    doc.setDrawColor(hairlineGrey[0], hairlineGrey[1], hairlineGrey[2]);
    doc.setLineWidth(0.4);
    doc.roundedRect(margin, chapY, contentWidth, 20, 1.5, 1.5, 'FD');

    doc.setFillColor(terracotta[0], terracotta[1], terracotta[2]);
    doc.rect(margin, chapY, 3, 20, 'F');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7.5);
    doc.setTextColor(mutedText[0], mutedText[1], mutedText[2]);
    doc.text(`CHAPTER 0${chapter.chapterNumber} • ${chapter.readingMinutes} MIN READ`, margin + 6, chapY + 6);

    doc.setFont('times', 'bold');
    doc.setFontSize(11);
    doc.setTextColor(terracotta[0], terracotta[1], terracotta[2]);
    doc.text(chapter.title, margin + 6, chapY + 11.5);

    doc.setFont('times', 'italic');
    doc.setFontSize(8);
    doc.setTextColor(mutedText[0], mutedText[1], mutedText[2]);
    doc.text(chapter.subtitle, margin + 6, chapY + 16);

    chapY += 26;

    // Technical Architectural Diagram / Box (Shown on Chapter 1 and Chapter 2)
    if (cIdx === 0) {
      doc.setFillColor(255, 255, 255);
      doc.setDrawColor(terracotta[0], terracotta[1], terracotta[2]);
      doc.setLineWidth(0.4);
      doc.roundedRect(margin, chapY, contentWidth, 28, 1.5, 1.5, 'FD');

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8);
      doc.setTextColor(terracotta[0], terracotta[1], terracotta[2]);
      doc.text(`ARCHITECTURAL SCHEMATIC: ${enrichment.diagramTitle.toUpperCase()}`, margin + 5, chapY + 5.5);

      doc.setFont('helvetica', 'italic');
      doc.setFontSize(7.5);
      doc.setTextColor(mutedText[0], mutedText[1], mutedText[2]);
      doc.text(enrichment.diagramConcept, margin + 5, chapY + 10);

      doc.setDrawColor(hairlineGrey[0], hairlineGrey[1], hairlineGrey[2]);
      doc.setLineWidth(0.3);
      doc.line(margin + 5, chapY + 12, margin + contentWidth - 5, chapY + 12);

      let dY = chapY + 16;
      enrichment.diagramDetails.slice(0, 3).forEach(detail => {
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(7.2);
        doc.setTextColor(softCharcoal[0], softCharcoal[1], softCharcoal[2]);
        doc.text(detail, margin + 5, dY);
        dY += 3.8;
      });

      chapY += 34;
    }

    // Formula Box on Chapter 2 if available
    if (cIdx === 1 && enrichment.formulas && enrichment.formulas.length > 0) {
      const form = enrichment.formulas[0];
      doc.setFillColor(sageLightBg[0], sageLightBg[1], sageLightBg[2]);
      doc.setDrawColor(sageGreen[0], sageGreen[1], sageGreen[2]);
      doc.setLineWidth(0.4);
      doc.roundedRect(margin, chapY, contentWidth, 32, 1.5, 1.5, 'FD');

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8);
      doc.setTextColor(sageGreen[0], sageGreen[1], sageGreen[2]);
      doc.text(`FIELD MATHEMATICAL FORMULA: ${form.name.toUpperCase()}`, margin + 5, chapY + 5.5);

      doc.setFont('times', 'bold');
      doc.setFontSize(9.5);
      doc.setTextColor(terracotta[0], terracotta[1], terracotta[2]);
      doc.text(`Formula: ${form.formula}`, margin + 5, chapY + 11.5);

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(7.2);
      doc.setTextColor(softCharcoal[0], softCharcoal[1], softCharcoal[2]);
      doc.text(`Worked Example: ${form.workedExample}`, margin + 5, chapY + 16.5);
      doc.text(`Decision Rule: ${form.practicalDecision}`, margin + 5, chapY + 21.5);

      doc.setFont('helvetica', 'italic');
      doc.setFontSize(6.8);
      doc.setTextColor(mutedText[0], mutedText[1], mutedText[2]);
      doc.text(`Assumptions: ${form.assumptions}`, margin + 5, chapY + 27);

      chapY += 38;
    }

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

    // Stop Conditions & Safety Limits Callout Box
    if (cIdx === 0 || cIdx === 2) {
      if (chapY > pageHeight - 40) {
        doc.addPage();
        chapY = 24;
      }

      doc.setFillColor(redLightBg[0], redLightBg[1], redLightBg[2]);
      doc.setDrawColor(hairlineGrey[0], hairlineGrey[1], hairlineGrey[2]);
      doc.setLineWidth(0.4);
      doc.roundedRect(margin, chapY, contentWidth, 18, 1, 1, 'FD');
      doc.setFillColor(amberRed[0], amberRed[1], amberRed[2]);
      doc.rect(margin, chapY, 3, 18, 'F');

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(7.5);
      doc.setTextColor(amberRed[0], amberRed[1], amberRed[2]);
      doc.text('CRITICAL STOP CONDITIONS & SAFETY LIMITS', margin + 6, chapY + 5.5);

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(7.2);
      doc.setTextColor(softCharcoal[0], softCharcoal[1], softCharcoal[2]);
      doc.text('• Never install adhesives on cold surfaces (<15°C / 59°F) or freshly painted walls (<30 days cure).', margin + 6, chapY + 10.5);
      doc.text('• Never exceed the Conservative Working Load (CWL = Rated * 0.60) regardless of manufacturer claims.', margin + 6, chapY + 14.5);

      chapY += 24;
    }

    // Key Architectural Takeaways Box (Sage green accent)
    if (chapter.keyTakeaways && chapter.keyTakeaways.length > 0) {
      if (chapY > pageHeight - 48) {
        doc.addPage();
        chapY = 24;
      }

      const boxHeight = chapter.keyTakeaways.length * 6.5 + 12;
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

    // Tactical Checklist
    if (chapter.checklistItems && chapter.checklistItems.length > 0) {
      if (chapY > pageHeight - 40) {
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
}

/**
 * 5. 4x6" POCKET FIELD CARDS STANDALONE PDF RENDERER (PDF 02)
 * Generates exact 4x6" print-ready standalone cards with cut guides, large typography,
 * minimal text, 3-7 critical actions, essential measurements, and stop conditions.
 */
export function renderDedicated4x6PocketCardsPDF(
  doc: jsPDF,
  playbook: PlaybookMeta,
  enrichment: VolumeEnrichment
) {
  const cardW = 152.4; // 6 inches in mm (landscape card)
  const cardH = 101.6; // 4 inches in mm
  const cardMargin = 8;
  const innerW = cardW - cardMargin * 2;
  const { creamBg, softCharcoal, terracotta, sageGreen, amberRed, hairlineGrey, mutedText, sageLightBg, redLightBg } = PALETTE;

  const cardsData = [
    {
      num: '01',
      type: 'SURFACE PREPARATION',
      title: 'Substrate & 70% IPA Solvent Protocol',
      purpose: 'Zero-failure adhesive bond activation without paint stripping',
      specs: [
        'Solvent: 70% Isopropyl Alcohol (IPA)',
        'Evaporation: 5-minute flash dry',
        'Min Temp: 15°C (59°F)',
        'Max Humidity: 65% RH'
      ],
      steps: [
        'Inspect substrate: Confirm painted drywall, sealed wood, glass, or glazed tile.',
        'Wipe surface firmly with 70% IPA on a lint-free microfiber cloth.',
        'Allow 5 full minutes for alcohol solvent to flash-dry completely.',
        'Do NOT use Windex, dish soap, or household wipes (leaves silicone residue).',
        'Test inconspicuous 1" spot if paint is unknown or matte builder-grade.'
      ],
      warning: 'Never apply to freshly painted walls (<30 days cure) or unsealed plaster.',
      stopCondition: 'STOP if paint is chalky, peeling, or wall feels cold/damp to the touch.'
    },
    {
      num: '02',
      type: 'HARDWARE & INSTALLATION',
      title: 'Load Physics & 40% Safety Buffer',
      purpose: 'Safe working load calculations and permanent installation protocols',
      specs: [
        'CWL Formula: Rated * 0.60',
        'Thumb Pressure: 30-60 sec',
        'Adhesive Cure: 60 minutes',
        'Eye-Level: 57" Centerline'
      ],
      steps: [
        'Calculate Safe Load: CWL = Manufacturer Rated Capacity × 0.60.',
        'Weigh object on kitchen scale — NEVER estimate payload by feel.',
        'Apply hardware: Press firmly with thumbs for 30–60 seconds per point.',
        'Hinge frame off wall; compress wall strips for 30 seconds each.',
        'Wait full 60-minute curing window before hanging live payload.'
      ],
      warning: 'Adhesive alone is shear-rated only. Never hang heavy cantilevers >4" deep.',
      stopCondition: 'STOP if object weight exceeds CWL. Upgrade to steel pin / monkey hook.'
    },
    {
      num: '03',
      type: 'REMOVAL & RESTORATION',
      title: 'Zero-Damage Shearing & Spackle Touch-Up',
      purpose: '100% deposit-safe removal and invisible surface restoration',
      specs: [
        'Stretch Ratio: 12-15 inches',
        'Heat Setting: LOW (45 sec)',
        'Floss Type: Unwaxed / Nylon',
        'Spackle: Vinyl / DryDex'
      ],
      steps: [
        'Pull Command tab straight down PARALLEL to the wall — NEVER pull outward.',
        'Stretch slowly 12–15 inches until the adhesive releases cleanly.',
        'If tab breaks or adhesive resists: Warm with hair dryer on LOW for 45 seconds.',
        'Slide dental floss behind bracket in a gentle sawing motion to slice foam.',
        'Roll remaining adhesive off wall with thumb; dab pinholes with spackle.'
      ],
      warning: 'Pulling outward at a 90° angle WILL delaminate and tear drywall paper.',
      stopCondition: 'STOP if wall paper begins to lift. Re-apply low heat and use dental floss.'
    },
    {
      num: '04',
      type: 'HARDWARE STORE QUICK BUY',
      title: 'Canadian Retailer Sourcing & Field Tool Kit',
      purpose: 'Essential shopping list and stop-condition supplies for on-site execution',
      specs: [
        'Stores: Home Depot, CT, IKEA',
        'Level: 9" Torpedo Magnetic',
        'Spackle: DAP DryDex (Pink-to-White)',
        'Alcohol: 70% USP Isopropyl'
      ],
      steps: [
        '3M Command Large Picture Strips (Home Depot #1000674211 / CT #068-1204).',
        'OOK 30 lb Hardened Steel Monkey Hooks (Home Depot CA / Amazon CA).',
        '9-Inch Magnetic Torpedo Spirit Level + Soft 2B Mechanical Pencil.',
        '70% USP Isopropyl Alcohol (500ml) + 3-pack Microfiber Cleaning Cloths.',
        'DAP DryDex Spackling Compound (237ml) + 2" Flexible Plastic Putty Knife.'
      ],
      warning: 'Never buy 99% alcohol (dries too fast to dissolve grease) or rub-in wipes.',
      stopCondition: 'STOP if fasteners lack clear weight ratings on retail packaging.'
    }
  ];

  cardsData.forEach((card, idx) => {
    if (idx > 0) {
      doc.addPage([cardW, cardH], 'landscape');
    }

    // Card Background
    doc.setFillColor(creamBg[0], creamBg[1], creamBg[2]);
    doc.rect(0, 0, cardW, cardH, 'F');

    // Outer Border & Cut Guides
    doc.setDrawColor(hairlineGrey[0], hairlineGrey[1], hairlineGrey[2]);
    doc.setLineWidth(0.4);
    doc.rect(cardMargin, cardMargin, innerW, cardH - cardMargin * 2);

    // Inner Card Container
    doc.setFillColor(255, 255, 255);
    doc.roundedRect(cardMargin + 1, cardMargin + 1, innerW - 2, cardH - cardMargin * 2 - 2, 1.5, 1.5, 'FD');

    // Top Header Banner
    doc.setFillColor(terracotta[0], terracotta[1], terracotta[2]);
    doc.roundedRect(cardMargin + 1, cardMargin + 1, innerW - 2, 9, 1.5, 1.5, 'F');
    doc.rect(cardMargin + 1, cardMargin + 6, innerW - 2, 4, 'F'); // square bottom of banner

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7);
    doc.setTextColor(255, 255, 255);
    doc.text(`SMALLSPACEHOME.CA • POCKET FIELD CARD ${card.num} OF 04`, cardMargin + 4, cardMargin + 6);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(6.5);
    doc.text(`✂ 4x6" FIELD TOOL • VOL 0${playbook.volumeNumber}`, cardW - cardMargin - 4, cardMargin + 6, { align: 'right' });

    // Card Title & Category
    let curY = cardMargin + 14;
    doc.setFont('times', 'bold');
    doc.setFontSize(10.5);
    doc.setTextColor(softCharcoal[0], softCharcoal[1], softCharcoal[2]);
    doc.text(card.title, cardMargin + 4, curY);

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(6.5);
    doc.setTextColor(terracotta[0], terracotta[1], terracotta[2]);
    doc.text(card.type.toUpperCase(), cardW - cardMargin - 4, curY, { align: 'right' });

    curY += 4;
    doc.setFont('helvetica', 'italic');
    doc.setFontSize(6.5);
    doc.setTextColor(mutedText[0], mutedText[1], mutedText[2]);
    doc.text(`Purpose: ${card.purpose}`, cardMargin + 4, curY);

    curY += 3;
    doc.setDrawColor(hairlineGrey[0], hairlineGrey[1], hairlineGrey[2]);
    doc.setLineWidth(0.3);
    doc.line(cardMargin + 4, curY, cardW - cardMargin - 4, curY);

    // 2-Column Section: Left (Critical Steps), Right (Specs Box)
    curY += 4;
    const leftW = innerW * 0.64;
    const rightW = innerW * 0.31;
    const rightX = cardMargin + 4 + leftW + 3;

    // Left Column: Critical Action Steps (3-7 items)
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(6.8);
    doc.setTextColor(softCharcoal[0], softCharcoal[1], softCharcoal[2]);
    doc.text('CRITICAL ACTIONS (IN SEQUENCE):', cardMargin + 4, curY);

    let stepY = curY + 4;
    card.steps.forEach((step, sIdx) => {
      doc.setFillColor(terracotta[0], terracotta[1], terracotta[2]);
      doc.circle(cardMargin + 6, stepY - 0.7, 0.6, 'F');

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(6.5);
      doc.setTextColor(softCharcoal[0], softCharcoal[1], softCharcoal[2]);
      const wrapped = doc.splitTextToSize(step, leftW - 8);
      doc.text(wrapped, cardMargin + 9, stepY);
      stepY += wrapped.length * 3.1 + 1.1;
    });

    // Right Column: Essential Specs Box
    doc.setFillColor(sageLightBg[0], sageLightBg[1], sageLightBg[2]);
    doc.setDrawColor(hairlineGrey[0], hairlineGrey[1], hairlineGrey[2]);
    doc.setLineWidth(0.3);
    doc.roundedRect(rightX, curY - 1, rightW, 36, 1, 1, 'FD');
    doc.setFillColor(sageGreen[0], sageGreen[1], sageGreen[2]);
    doc.rect(rightX, curY - 1, 2, 36, 'F');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(6.5);
    doc.setTextColor(sageGreen[0], sageGreen[1], sageGreen[2]);
    doc.text('KEY SPECS & BENCHMARKS', rightX + 4, curY + 3.5);

    let specY = curY + 8;
    card.specs.forEach(sp => {
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(6);
      doc.setTextColor(softCharcoal[0], softCharcoal[1], softCharcoal[2]);
      const wrapped = doc.splitTextToSize(`• ${sp}`, rightW - 6);
      doc.text(wrapped, rightX + 4, specY);
      specY += wrapped.length * 2.9 + 1;
    });

    // Bottom Warning / Stop Condition Callout Box
    const warnY = cardH - cardMargin - 14;
    doc.setFillColor(redLightBg[0], redLightBg[1], redLightBg[2]);
    doc.setDrawColor(hairlineGrey[0], hairlineGrey[1], hairlineGrey[2]);
    doc.setLineWidth(0.3);
    doc.roundedRect(cardMargin + 4, warnY, innerW - 8, 10, 1, 1, 'FD');
    doc.setFillColor(amberRed[0], amberRed[1], amberRed[2]);
    doc.rect(cardMargin + 4, warnY, 2.5, 10, 'F');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(6);
    doc.setTextColor(amberRed[0], amberRed[1], amberRed[2]);
    doc.text(`⚠ STOP CONDITION: ${card.stopCondition}`, cardMargin + 9, warnY + 3.8);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(5.8);
    doc.setTextColor(softCharcoal[0], softCharcoal[1], softCharcoal[2]);
    doc.text(`Warning: ${card.warning}`, cardMargin + 9, warnY + 7.5);
  });
}

/**
 * 6. QUICK-START EXECUTION CHECKLIST STANDALONE PDF RENDERER (PDF 03)
 * Generates a dedicated single-page (1-page A4) operational execution sheet
 * organized strictly into: BEFORE, DURING, AFTER, REMOVE.
 */
export function renderDedicatedQuickStartChecklistPDF(
  doc: jsPDF,
  playbook: PlaybookMeta,
  enrichment: VolumeEnrichment
) {
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 14;
  const contentWidth = pageWidth - margin * 2;
  const { creamBg, softCharcoal, terracotta, sageGreen, amberRed, hairlineGrey, mutedText, sageLightBg, redLightBg } = PALETTE;

  // Background
  doc.setFillColor(creamBg[0], creamBg[1], creamBg[2]);
  doc.rect(0, 0, pageWidth, pageHeight, 'F');

  // Decorative Border
  doc.setDrawColor(hairlineGrey[0], hairlineGrey[1], hairlineGrey[2]);
  doc.setLineWidth(0.6);
  doc.rect(margin - 3, margin - 3, contentWidth + 6, pageHeight - margin * 2 + 6);

  // Top Header Banner
  doc.setFillColor(terracotta[0], terracotta[1], terracotta[2]);
  doc.rect(margin, margin, contentWidth, 12, 'F');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8);
  doc.setTextColor(255, 255, 255);
  doc.text('SMALLSPACEHOME.CA • QUICK-START EXECUTION CHECKLIST', margin + 4, margin + 7.5);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7);
  doc.text(`DELIVERABLE PDF 03 • VOL 0${playbook.volumeNumber}`, pageWidth - margin - 4, margin + 7.5, { align: 'right' });

  // Title & Subtitle
  let curY = margin + 18;
  doc.setFont('times', 'bold');
  doc.setFontSize(14);
  doc.setTextColor(softCharcoal[0], softCharcoal[1], softCharcoal[2]);
  doc.text(`${playbook.title}: On-Site Field Execution Checklist`, margin, curY);

  curY += 5;
  doc.setFont('helvetica', 'italic');
  doc.setFontSize(7.5);
  doc.setTextColor(mutedText[0], mutedText[1], mutedText[2]);
  doc.text('Single-Page Operational Guide — Execute every phase directly without reopening the Master Playbook.', margin, curY);

  curY += 4;
  doc.setDrawColor(terracotta[0], terracotta[1], terracotta[2]);
  doc.setLineWidth(0.6);
  doc.line(margin, curY, margin + 40, curY);

  curY += 6;

  // 4 Execution Stages (BEFORE, DURING, AFTER, REMOVE)
  const checklistSections = [
    {
      stage: 'STAGE 1: BEFORE INSTALLATION',
      color: terracotta,
      bgColor: sageLightBg,
      items: [
        'Identify Substrate: Confirm drywall (1/2"), heritage plaster, tile, solid wood, or hollow door.',
        'Confirm Object Weight: Weigh on kitchen scale. Apply Conservative Working Load: CWL = Rated × 0.60.',
        'Confirm Hardware Compatibility: Verify shear vs. tension load direction and fastener depth.',
        'Check Surface Condition: Inspect for peeling paint, grease, humidity >65%, or chalky residue.',
        'Check Manufacturer Requirements: Verify temperature is at least 15°C (59°F); check package date.',
        'Confirm Measurements: Calculate 57" gallery centerline: Eye_Level = 57" + (Height / 2) - Drop.',
        'Gather Essential Tools: 70% IPA, microfiber cloth, 9" magnetic level, 2B pencil, tape measure.'
      ]
    },
    {
      stage: 'STAGE 2: DURING INSTALLATION',
      color: sageGreen,
      bgColor: [255, 255, 255] as [number, number, number],
      items: [
        'Prepare Surface: Wipe thoroughly with 70% Isopropyl Alcohol; wait 5 full minutes to flash-dry.',
        'Measure and Mark: Pencil light level guide mark with 9" torpedo level (do NOT indent wall).',
        'Install Selected Method: Align hardware precisely; apply 30–60s firm thumb compression.',
        'Verify Placement: Check alignment with spirit level before finalizing adhesive contact.',
        'Complete Required Curing Period: Wait full 60 minutes for adhesive bond to polymerize before loading.'
      ]
    },
    {
      stage: 'STAGE 3: AFTER INSTALLATION (VERIFICATION)',
      color: terracotta,
      bgColor: sageLightBg,
      items: [
        'Perform Verification: Gradually transfer live weight to fastener; test for initial creep or flex.',
        'Inspect Installation: Check for strip gap, bracket lean, or paper bubbling at wall contact point.',
        'Record Configuration: Log fastener model, installation date, and payload weight.',
        'Photograph Installation: Take front and angled baseline photos for rental move-out records.',
        'Schedule Re-Check: Visually inspect adhesive contact perimeter at 48 hours and 30 days.'
      ]
    },
    {
      stage: 'STAGE 4: REMOVAL & RESTORATION (MOVE-OUT SAFE)',
      color: amberRed,
      bgColor: redLightBg,
      items: [
        'Follow Removal Procedure: Stretch tab straight down PARALLEL to wall; stretch 12–15 inches.',
        'Thermal / Floss Backup: If tab resists, warm 45s on LOW with hair dryer; slide dental floss behind.',
        'Inspect Surface: Inspect substrate for paint peeling, adhesive residue, or drywall paper tears.',
        'Restore Where Appropriate: Roll residue off with thumb; dab pinholes with DAP DryDex spackle.',
        'Photograph Final Condition: Capture clear photo of restored clean wall for deposit return file.'
      ]
    }
  ];

  checklistSections.forEach((section) => {
    const boxH = section.items.length * 4.6 + 9;

    doc.setFillColor(section.bgColor[0], section.bgColor[1], section.bgColor[2]);
    doc.setDrawColor(hairlineGrey[0], hairlineGrey[1], hairlineGrey[2]);
    doc.setLineWidth(0.3);
    doc.roundedRect(margin, curY, contentWidth, boxH, 1, 1, 'FD');

    doc.setFillColor(section.color[0], section.color[1], section.color[2]);
    doc.rect(margin, curY, 2.5, boxH, 'F');

    // Section Header
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7.2);
    doc.setTextColor(section.color[0], section.color[1], section.color[2]);
    doc.text(section.stage, margin + 5, curY + 5);

    let itemY = curY + 9.5;
    section.items.forEach((item) => {
      // Checkbox
      doc.setDrawColor(section.color[0], section.color[1], section.color[2]);
      doc.setLineWidth(0.3);
      doc.rect(margin + 5, itemY - 2.5, 2.6, 2.6);

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(6.8);
      doc.setTextColor(softCharcoal[0], softCharcoal[1], softCharcoal[2]);
      const wrapped = doc.splitTextToSize(item, contentWidth - 14);
      doc.text(wrapped, margin + 9.5, itemY);
      itemY += wrapped.length * 3.3 + 1.2;
    });

    curY += boxH + 3.5;
  });

  // Bottom Sign-off & Verification Strip
  const signY = pageHeight - margin - 12;
  doc.setFillColor(255, 255, 255);
  doc.setDrawColor(hairlineGrey[0], hairlineGrey[1], hairlineGrey[2]);
  doc.setLineWidth(0.3);
  doc.roundedRect(margin, signY, contentWidth, 11, 1, 1, 'FD');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(6.2);
  doc.setTextColor(mutedText[0], mutedText[1], mutedText[2]);
  doc.text('FIELD VERIFICATION SIGN-OFF:', margin + 4, signY + 4.5);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(6);
  doc.setTextColor(softCharcoal[0], softCharcoal[1], softCharcoal[2]);
  doc.text('Room / Location: _______________________', margin + 45, signY + 4.5);
  doc.text('Verified Live Payload: _______ lbs', margin + 105, signY + 4.5);
  doc.text('Date Installed: ____ / ____ / 2026', pageWidth - margin - 45, signY + 4.5);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(5.8);
  doc.setTextColor(amberRed[0], amberRed[1], amberRed[2]);
  doc.text('MANDATORY SAFETY RULE: Do NOT exceed CWL = Rated * 0.60. Tested in Toronto Rental Lab.', margin + 4, signY + 8.8);
}

/**
 * 7. APPENDIX (5-Column Troubleshooting Matrix & Verified Retailer Sourcing)
 */
export function renderAppendix(ctx: RenderContext) {
  const { doc, playbook, enrichment, margin } = ctx;
  const { softCharcoal, terracotta, mutedText } = PALETTE;

  // Appendix Section 1: Troubleshooting Matrix
  doc.addPage();
  let appY = 24;

  doc.setFont('times', 'bold');
  doc.setFontSize(15);
  doc.setTextColor(softCharcoal[0], softCharcoal[1], softCharcoal[2]);
  doc.text('APPENDIX A: STRUCTURED TROUBLESHOOTING MATRIX', margin, appY);
  appY += 6;

  doc.setDrawColor(terracotta[0], terracotta[1], terracotta[2]);
  doc.setLineWidth(0.8);
  doc.line(margin, appY, margin + 40, appY);
  appY += 8;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(mutedText[0], mutedText[1], mutedText[2]);
  doc.text('Field diagnostics and corrective action protocols certified by the Toronto Rental Lab:', margin, appY);
  appY += 6;

  const troubleRows = enrichment.troubleshootingMatrix.map(item => [
    item.problem,
    item.likelyCause,
    item.whatToCheck,
    item.correctiveAction,
    item.stopCondition
  ]);

  autoTable(doc, {
    startY: appY,
    head: [['Observed Problem', 'Likely Root Cause', 'What to Inspect', 'Corrective Action', 'Stop Condition']],
    body: troubleRows,
    margin: { left: margin, right: margin },
    styles: {
      fontSize: 6.8,
      font: 'helvetica',
      textColor: [43, 40, 37],
      cellPadding: 2,
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

  // Appendix Section 2: Verified Retailer & Sourcing Matrix
  if (playbook.sourcesAndRetailers && playbook.sourcesAndRetailers.length > 0) {
    doc.addPage();
    let srcY = 24;

    doc.setFont('times', 'bold');
    doc.setFontSize(15);
    doc.setTextColor(softCharcoal[0], softCharcoal[1], softCharcoal[2]);
    doc.text('APPENDIX B: VERIFIED CANADIAN SOURCING MATRIX', margin, srcY);
    srcY += 6;

    doc.setDrawColor(terracotta[0], terracotta[1], terracotta[2]);
    doc.setLineWidth(0.8);
    doc.line(margin, srcY, margin + 40, srcY);
    srcY += 8;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(mutedText[0], mutedText[1], mutedText[2]);
    doc.text('Tested retail hardware, specific product models, and certified supplier sources:', margin, srcY);
    srcY += 6;

    const sourceRows = playbook.sourcesAndRetailers.map((item) => [
      item.category,
      item.retailer,
      item.recommendedItems,
      item.webUrl
    ]);

    autoTable(doc, {
      startY: srcY,
      head: [['Component Category', 'Verified Retailer', 'Recommended Model / SKU', 'Verified Source URL']],
      body: sourceRows,
      margin: { left: margin, right: margin },
      styles: {
        fontSize: 7.2,
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
    doc.text('END OF PDF 01: OFFICIAL MASTER FIELD PLAYBOOK', margin, srcY);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(mutedText[0], mutedText[1], mutedText[2]);
    doc.text(`SmallSpaceHome Digital Product Suite • Toronto Rental Lab • Delivered as 3 Standalone PDFs`, margin, srcY + 5);
  }
}

