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
 * 5. EXECUTION CHECKLIST (Standalone 4-Stage Workflow)
 */
export function renderExecutionChecklist(ctx: RenderContext) {
  const { doc, enrichment, pageHeight, margin, contentWidth } = ctx;
  const { softCharcoal, terracotta, sageGreen, hairlineGrey, mutedText, sageLightBg } = PALETTE;

  doc.addPage();
  let chkY = 24;

  // Title
  doc.setFont('times', 'bold');
  doc.setFontSize(15);
  doc.setTextColor(softCharcoal[0], softCharcoal[1], softCharcoal[2]);
  doc.text('STAND-ALONE EXECUTION CHECKLIST: 4-STAGE WORKFLOW', margin, chkY);
  chkY += 6;

  doc.setDrawColor(terracotta[0], terracotta[1], terracotta[2]);
  doc.setLineWidth(0.8);
  doc.line(margin, chkY, margin + 40, chkY);
  chkY += 7;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(mutedText[0], mutedText[1], mutedText[2]);
  doc.text('A self-contained operational checklist — execute every stage on-site without reopening narrative chapters:', margin, chkY);
  chkY += 6;

  enrichment.executionChecklist.forEach(stage => {
    if (chkY > pageHeight - 45) {
      doc.addPage();
      chkY = 24;
    }

    // Stage header box
    doc.setFillColor(sageLightBg[0], sageLightBg[1], sageLightBg[2]);
    doc.setDrawColor(hairlineGrey[0], hairlineGrey[1], hairlineGrey[2]);
    doc.setLineWidth(0.3);
    doc.roundedRect(margin, chkY, contentWidth, 7, 1, 1, 'FD');
    doc.setFillColor(terracotta[0], terracotta[1], terracotta[2]);
    doc.rect(margin, chkY, 3, 7, 'F');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7.5);
    doc.setTextColor(terracotta[0], terracotta[1], terracotta[2]);
    doc.text(stage.title.toUpperCase(), margin + 6, chkY + 5);

    chkY += 10;

    stage.items.forEach(item => {
      if (chkY > pageHeight - 16) {
        doc.addPage();
        chkY = 24;
      }

      // Checkbox
      doc.setDrawColor(sageGreen[0], sageGreen[1], sageGreen[2]);
      doc.setLineWidth(0.3);
      doc.rect(margin, chkY - 2.8, 3, 3);

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(7.5);
      doc.setTextColor(softCharcoal[0], softCharcoal[1], softCharcoal[2]);
      const wrapped = doc.splitTextToSize(item, contentWidth - 6);
      doc.text(wrapped, margin + 6, chkY);
      chkY += wrapped.length * 3.8 + 2;
    });

    chkY += 4;
  });
}

/**
 * 6. APPENDIX (Hardware Specs, Formulas, 5-Column Troubleshooting Matrix & Retailer Sourcing)
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
    doc.text('END OF OFFICIAL TECHNICAL PLAYBOOK DELIVERABLE', margin, srcY);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(mutedText[0], mutedText[1], mutedText[2]);
    doc.text(`SmallSpaceHome Digital Product Suite • Toronto Rental Lab • Document ${playbook.fileName}`, margin, srcY + 5);
  }
}

/**
 * 7. 4x6" POCKET FIELD CARDS (4 Standalone Field Tools)
 */
export function render4x6PocketCards(ctx: RenderContext) {
  const { doc, enrichment, pageHeight, pageWidth, margin, contentWidth } = ctx;
  const { softCharcoal, terracotta, amberRed, hairlineGrey, mutedText } = PALETTE;

  doc.addPage();
  let pockY = 24;

  doc.setFont('times', 'bold');
  doc.setFontSize(15);
  doc.setTextColor(softCharcoal[0], softCharcoal[1], softCharcoal[2]);
  doc.text('APPENDIX C: 4x6" POCKET COMPANION FIELD CARDS', margin, pockY);
  pockY += 6;

  doc.setDrawColor(terracotta[0], terracotta[1], terracotta[2]);
  doc.setLineWidth(0.8);
  doc.line(margin, pockY, margin + 40, pockY);
  pockY += 8;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(mutedText[0], mutedText[1], mutedText[2]);
  doc.text('Print, screenshot, or cut these 4x6" field cards for instant reference while shopping or installing on-site:', margin, pockY);
  pockY += 6;

  enrichment.pocketCards.forEach((card) => {
    if (pockY > pageHeight - 65) {
      doc.addPage();
      pockY = 24;
    }

    const cardH = card.criticalSteps.length * 4.2 + 30;
    doc.setFillColor(255, 255, 255);
    doc.setDrawColor(terracotta[0], terracotta[1], terracotta[2]);
    doc.setLineWidth(0.6);
    doc.roundedRect(margin, pockY, contentWidth, cardH, 2, 2, 'FD');

    // Scissor Cut Guide
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(6.5);
    doc.setTextColor(terracotta[0], terracotta[1], terracotta[2]);
    doc.text(`✂ [PRINT & CUT 4x6" POCKET FIELD CARD ${card.cardNumber}]`, pageWidth - margin - 62, pockY + 6);

    // Card Title
    doc.setFont('times', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(terracotta[0], terracotta[1], terracotta[2]);
    doc.text(`CARD ${card.cardNumber}: ${card.title.toUpperCase()}`, margin + 5, pockY + 6.5);

    // Purpose
    doc.setFont('helvetica', 'italic');
    doc.setFontSize(7.2);
    doc.setTextColor(mutedText[0], mutedText[1], mutedText[2]);
    doc.text(`Purpose: ${card.purpose}`, margin + 5, pockY + 11);

    doc.setDrawColor(hairlineGrey[0], hairlineGrey[1], hairlineGrey[2]);
    doc.setLineWidth(0.3);
    doc.line(margin + 5, pockY + 13, margin + contentWidth - 5, pockY + 13);

    // Critical Steps
    let bY = pockY + 17;
    card.criticalSteps.forEach((step) => {
      doc.setFillColor(terracotta[0], terracotta[1], terracotta[2]);
      doc.circle(margin + 6, bY - 0.8, 0.6, 'F');
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(7.2);
      doc.setTextColor(softCharcoal[0], softCharcoal[1], softCharcoal[2]);
      const wrapped = doc.splitTextToSize(step, contentWidth - 14);
      doc.text(wrapped, margin + 9, bY);
      bY += wrapped.length * 3.4 + 1.2;
    });

    // Warning / Stop condition footer inside card
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(6.8);
    doc.setTextColor(amberRed[0], amberRed[1], amberRed[2]);
    doc.text(`STOP CONDITION: ${card.stopCondition}`, margin + 5, pockY + cardH - 3.5);

    pockY += cardH + 6;
  });
}
