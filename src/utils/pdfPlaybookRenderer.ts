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
      enrichment.formulas.slice(0, 2).forEach((form) => {
        if (chapY > pageHeight - 45) {
          doc.addPage();
          chapY = 24;
        }

        doc.setFillColor(sageLightBg[0], sageLightBg[1], sageLightBg[2]);
        doc.setDrawColor(sageGreen[0], sageGreen[1], sageGreen[2]);
        doc.setLineWidth(0.4);
        doc.roundedRect(margin, chapY, contentWidth, 34, 1.5, 1.5, 'FD');

        doc.setFont('helvetica', 'bold');
        doc.setFontSize(8);
        doc.setTextColor(sageGreen[0], sageGreen[1], sageGreen[2]);
        doc.text(`FIELD MATHEMATICAL FORMULA: ${form.name.toUpperCase()}`, margin + 5, chapY + 5.5);

        doc.setFont('times', 'bold');
        doc.setFontSize(9);
        doc.setTextColor(terracotta[0], terracotta[1], terracotta[2]);
        doc.text(`Formula: ${form.formula} (${form.units})`, margin + 5, chapY + 11);

        doc.setFont('helvetica', 'normal');
        doc.setFontSize(7);
        doc.setTextColor(softCharcoal[0], softCharcoal[1], softCharcoal[2]);
        const exLines = doc.splitTextToSize(`Worked Example: ${form.workedExample}`, contentWidth - 10);
        doc.text(exLines, margin + 5, chapY + 16);

        const decLines = doc.splitTextToSize(`Practical Decision: ${form.practicalDecision}`, contentWidth - 10);
        doc.text(decLines, margin + 5, chapY + 22.5);

        doc.setFont('helvetica', 'italic');
        doc.setFontSize(6.5);
        doc.setTextColor(mutedText[0], mutedText[1], mutedText[2]);
        doc.text(`Assumptions & Conditions: ${form.assumptions}`, margin + 5, chapY + 29.5);

        chapY += 38;
      });
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

    // Render Chapter Table Data (Decision Matrices & Specifications)
    if (chapter.tableData && chapter.tableData.rows && chapter.tableData.rows.length > 0) {
      if (chapY > pageHeight - 55) {
        doc.addPage();
        chapY = 24;
      }

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8.5);
      doc.setTextColor(softCharcoal[0], softCharcoal[1], softCharcoal[2]);
      doc.text('TACTICAL DECISION & SPECIFICATION MATRIX:', margin, chapY);
      chapY += 4;

      autoTable(doc, {
        startY: chapY,
        head: [chapter.tableData.headers],
        body: chapter.tableData.rows,
        margin: { left: margin, right: margin },
        styles: {
          fontSize: 7,
          font: 'helvetica',
          textColor: [43, 40, 37],
          cellPadding: 2.2,
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
      chapY = doc.lastAutoTable.finalY + 8;
    }
  });
}

/**
 * 5. 4x6" POCKET FIELD CARDS STANDALONE PDF RENDERER (PDF 02)
 * Generates FOUR independent, exact 4x6" (152.4 x 101.6 mm) print-ready field reference cards.
 * Designed as rapid on-site field tools with architectural grid, high-contrast typography,
 * 3-7 sequenced critical steps, key measurements, critical warnings, and prominent stop conditions.
 *
 * Brand Palette: Warm cream #FAFAF7, Warm dark ink #1C1917, Muted sage #8FAF8A, Muted tan #C4A882.
 */
export function renderDedicated4x6PocketCardsPDF(
  doc: jsPDF,
  playbook: PlaybookMeta,
  enrichment: VolumeEnrichment
) {
  const cardW = 152.4; // 6 inches in mm (landscape card)
  const cardH = 101.6; // 4 inches in mm
  const cardMargin = 6.5;
  const innerW = cardW - cardMargin * 2;
  const innerH = cardH - cardMargin * 2;

  // Architectural Brand Palette
  const creamBg: [number, number, number] = [250, 250, 247];       // #FAFAF7 Warm Cream
  const darkInk: [number, number, number] = [28, 25, 23];          // #1C1917 Warm Dark Ink
  const mutedSage: [number, number, number] = [143, 175, 138];     // #8FAF8A Muted Sage Primary Accent
  const mutedTan: [number, number, number] = [196, 168, 130];      // #C4A882 Muted Tan Secondary Accent
  const sageDark: [number, number, number] = [74, 83, 62];         // #4A533E Deep Forest/Sage
  const tanDark: [number, number, number] = [163, 130, 92];        // #A3825C Deep Tan
  const hairlineGrey: [number, number, number] = [229, 223, 213];  // #E5DFD5 Clean Border
  const mutedText: [number, number, number] = [115, 108, 100];     // Soft Charcoal
  const whiteBg: [number, number, number] = [255, 255, 255];
  const cardLightBg: [number, number, number] = [253, 252, 250];
  const stopBg: [number, number, number] = [253, 246, 244];         // Soft stop-condition tint
  const stopBorder: [number, number, number] = [197, 68, 48];       // Urgent stop border

  // Extract from volume-specific enrichment or fallback to standard 4 cards
  const volumeCards = enrichment.pocketCards && enrichment.pocketCards.length === 4
    ? enrichment.pocketCards
    : [
        {
          cardNumber: '01',
          type: 'SURFACE PREPARATION',
          title: 'Substrate & 70% IPA Solvent Protocol',
          purpose: 'Zero-failure adhesive bond activation without paint stripping',
          measurementsOrSpecs: [
            'Solvent: 70% Isopropyl Alcohol (IPA)',
            'Flash Dry: 2-minute evaporation',
            'Min Temp: 15°C (59°F) [A]',
            'Max Humidity: <65% RH'
          ],
          criticalSteps: [
            '1. INSPECT: Confirm painted drywall, sealed wood, glazed tile, or glass [B].',
            '2. DEGREASE: Wipe surface firmly with 70% IPA on lint-free microfiber cloth [A].',
            '3. FLASH DRY: Allow 2 full minutes for alcohol to completely evaporate [B].',
            '4. ZERO RESIDUE: Never use Windex, dish soap, or wet wipes (leaves silicone film) [A].',
            '5. SPOT TEST: Test inconspicuous 1" spot if paint is unknown or builder-grade matte [B].'
          ],
          warningCondition: 'Never apply adhesive strips to freshly painted walls (<30 days cure) or raw plaster [B].',
          stopCondition: 'STOP if paint is chalky, peeling, powdery, or surface feels damp to the touch [B].'
        },
        {
          cardNumber: '02',
          type: 'HARDWARE SELECTION / INSTALL',
          title: 'Load Physics & 40% Safety Buffer',
          purpose: 'Safe working load calculations and permanent installation protocols',
          measurementsOrSpecs: [
            'CWL Formula: Rated × 0.60 [C]',
            'Thumb Pressure: 30s per point [A]',
            'Unweighted Cure: 60 minutes [A]',
            'Gallery Centerline: 57" to floor [C]'
          ],
          criticalSteps: [
            '1. WEIGH OBJECT: Weigh tare load on digital scale — never estimate by feel [B].',
            '2. CALCULATE CWL: Conservative Working Load = Rated Capacity × 0.60 [C].',
            '3. INITIAL PRESS: Align hardware; apply 30 seconds firm thumb pressure [A].',
            '4. HINGE OFF: Disengage payload; press wall-mounted strips 30s each [A].',
            '5. COLD-FLOW CURE: Wait full 60-minute unweighted polymer cure before hanging [A].'
          ],
          warningCondition: 'Adhesives are shear-rated only. Never mount forward cantilevers >3.5" deep [B].',
          stopCondition: 'STOP if payload exceeds CWL. Upgrade immediately to mechanical 3M Claw or steel pin [B].'
        },
        {
          cardNumber: '03',
          type: 'REMOVAL & RESTORATION',
          title: 'Zero-Damage Shearing & Spackle Touch-Up',
          purpose: '100% deposit-safe removal and invisible surface restoration',
          measurementsOrSpecs: [
            'Pull Vector: 0° Parallel to wall [A]',
            'Stretch Distance: 12–15 inches [A]',
            'Thermal Heat: Medium / 45 sec [B]',
            'Spackle: DAP Fast \'N Final [A]'
          ],
          criticalSteps: [
            '1. UNLOAD FIRST: Remove 100% of payload items before touching hardware [B].',
            '2. 0° PARALLEL PULL: Stretch tab straight down against wall — NEVER pull outward [A].',
            '3. SLOW EXTENSION: Stretch steadily 12–15" until adhesive polymer releases [A].',
            '4. THERMAL FLOSS BACKUP: If tab snaps, warm 45s with hair dryer; saw with dental floss [B].',
            '5. RESTORE & DAB: Roll residue away with thumb; dab micro-pinholes with lightweight spackle [B].'
          ],
          warningCondition: 'Pulling outward at a 90° angle will delaminate and tear drywall paper [A].',
          stopCondition: 'STOP if wall paper begins to lift or bubble. Re-apply gentle heat and floss [B].'
        },
        {
          cardNumber: '04',
          type: 'HARDWARE STORE CARD',
          title: 'Canadian Retailer Sourcing & Tool Kit',
          purpose: 'Essential shopping list, certified SKUs, and field tool reference',
          measurementsOrSpecs: [
            'Est. Tool Budget: $32–$48 CAD',
            'Retailers: Home Depot, CT, IKEA',
            'Spirit Level: 9" Magnetic Torpedo',
            'Solvent: 70% USP Isopropyl Alcohol'
          ],
          criticalSteps: [
            '• 3M Command Large Picture Hanging Strips (Home Depot #1000674211 / CT #068-1204).',
            '• 3M Claw 25 lb Drywall Picture Hangers (Home Depot / Amazon CA).',
            '• 9" Magnetic Torpedo Spirit Level + Soft 2B Mechanical Pencil.',
            '• 70% USP Isopropyl Alcohol (500ml) + 3-pack Microfiber Cleaning Cloths.',
            '• DAP Fast \'N Final Lightweight Spackling (237ml) + 2" Flexible Plastic Putty Knife.'
          ],
          warningCondition: 'Never buy 99% alcohol (evaporates too rapidly) or pre-moistened wipes with oils [B].',
          stopCondition: 'STOP if fasteners lack clear, verified load ratings on original packaging [B].'
        }
      ];

  const cardThemeMap = [
    { num: '01', headerBg: mutedTan, headerText: darkInk, badgeBg: mutedTan, accent: tanDark },
    { num: '02', headerBg: mutedSage, headerText: darkInk, badgeBg: mutedSage, accent: sageDark },
    { num: '03', headerBg: sageDark, headerText: whiteBg, badgeBg: sageDark, accent: sageDark },
    { num: '04', headerBg: mutedTan, headerText: darkInk, badgeBg: mutedTan, accent: tanDark }
  ];

  volumeCards.forEach((card, idx) => {
    if (idx > 0) {
      doc.addPage([cardW, cardH], 'landscape');
    }

    const theme = cardThemeMap[idx] || cardThemeMap[0];

    // 1. Fill 4x6" Warm Cream Background Canvas (#FAFAF7)
    doc.setFillColor(creamBg[0], creamBg[1], creamBg[2]);
    doc.rect(0, 0, cardW, cardH, 'F');

    // 2. Architectural Outer Cut Guide & Print-Safe Margin
    doc.setDrawColor(hairlineGrey[0], hairlineGrey[1], hairlineGrey[2]);
    doc.setLineWidth(0.35);
    doc.rect(cardMargin, cardMargin, innerW, innerH);

    // Corner Crop / Cut Marks for Physical Printing
    const cropLen = 3;
    doc.setDrawColor(darkInk[0], darkInk[1], darkInk[2]);
    doc.setLineWidth(0.2);
    // Top-left
    doc.line(cardMargin - 1.5, cardMargin, cardMargin - 1.5 - cropLen, cardMargin);
    doc.line(cardMargin, cardMargin - 1.5, cardMargin, cardMargin - 1.5 - cropLen);
    // Top-right
    doc.line(cardMargin + innerW + 1.5, cardMargin, cardMargin + innerW + 1.5 + cropLen, cardMargin);
    doc.line(cardMargin + innerW, cardMargin - 1.5, cardMargin + innerW, cardMargin - 1.5 - cropLen);
    // Bottom-left
    doc.line(cardMargin - 1.5, cardMargin + innerH, cardMargin - 1.5 - cropLen, cardMargin + innerH);
    doc.line(cardMargin, cardMargin + innerH + 1.5, cardMargin, cardMargin + innerH + 1.5 + cropLen);
    // Bottom-right
    doc.line(cardMargin + innerW + 1.5, cardMargin + innerH, cardMargin + innerW + 1.5 + cropLen, cardMargin + innerH);
    doc.line(cardMargin + innerW, cardMargin + innerH + 1.5, cardMargin + innerW, cardMargin + innerH + 1.5 + cropLen);

    // 3. Inner White Field Card Container
    doc.setFillColor(cardLightBg[0], cardLightBg[1], cardLightBg[2]);
    doc.roundedRect(cardMargin + 1, cardMargin + 1, innerW - 2, innerH - 2, 1, 1, 'FD');

    // 4. Compact Architectural Header Bar
    const headBarH = 6.2;
    doc.setFillColor(theme.headerBg[0], theme.headerBg[1], theme.headerBg[2]);
    doc.rect(cardMargin + 1, cardMargin + 1, innerW - 2, headBarH, 'F');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(6.2);
    doc.setTextColor(theme.headerText[0], theme.headerText[1], theme.headerText[2]);
    doc.text(`SMALLSPACEHOME.CA  •  POCKET FIELD CARD 0${idx + 1} OF 04`, cardMargin + 3.5, cardMargin + 4.5);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(5.8);
    doc.text(`4×6" FIELD TOOL  •  VOL 0${playbook.volumeNumber}`, cardW - cardMargin - 3.5, cardMargin + 4.5, { align: 'right' });

    // 5. Card Title, Type Badge & Operational Purpose
    let curY = cardMargin + 10.5;

    // Type Badge (Top Right)
    const typeLabel = (card.type || `FIELD CARD 0${idx + 1}`).toUpperCase();
    doc.setFillColor(theme.accent[0], theme.accent[1], theme.accent[2]);
    doc.roundedRect(cardW - cardMargin - 45, curY - 3.2, 41.5, 4.2, 0.6, 0.6, 'F');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(5.4);
    doc.setTextColor(whiteBg[0], whiteBg[1], whiteBg[2]);
    doc.text(typeLabel, cardW - cardMargin - 24.25, curY - 0.4, { align: 'center' });

    // Title in Sophisticated Serif
    doc.setFont('times', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(darkInk[0], darkInk[1], darkInk[2]);
    doc.text(`Card 0${idx + 1}: ${card.title}`, cardMargin + 3.5, curY);

    curY += 3.8;
    // Purpose Statement
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(6.0);
    doc.setTextColor(mutedText[0], mutedText[1], mutedText[2]);
    doc.text(`Operational Purpose: ${card.purpose}`, cardMargin + 3.5, curY);

    curY += 2.8;
    doc.setDrawColor(hairlineGrey[0], hairlineGrey[1], hairlineGrey[2]);
    doc.setLineWidth(0.25);
    doc.line(cardMargin + 3.5, curY, cardW - cardMargin - 3.5, curY);

    // 6. Two-Column Architectural Body: Left (Critical Steps), Right (Essential Specs & Metrics)
    curY += 3.2;
    const colGap = 3.5;
    const leftW = innerW * 0.63;
    const rightW = innerW - leftW - colGap - 7;
    const rightX = cardMargin + 3.5 + leftW + colGap;

    // LEFT COLUMN: Sequenced Critical Actions (3-7 items)
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(6.2);
    doc.setTextColor(darkInk[0], darkInk[1], darkInk[2]);
    doc.text('CRITICAL ACTION STEPS (IN SEQUENCE):', cardMargin + 3.5, curY);

    let stepY = curY + 3.5;
    const steps = card.criticalSteps || card.steps || [];
    steps.forEach((step: string, sIdx: number) => {
      // Step Number Bullet Indicator
      doc.setFillColor(theme.accent[0], theme.accent[1], theme.accent[2]);
      doc.circle(cardMargin + 5.5, stepY - 0.6, 0.6, 'F');

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(5.7);
      doc.setTextColor(darkInk[0], darkInk[1], darkInk[2]);
      const wrapped = doc.splitTextToSize(step, leftW - 6);
      doc.text(wrapped, cardMargin + 7.8, stepY);
      stepY += wrapped.length * 2.7 + 1.0;
    });

    // RIGHT COLUMN: Essential Specifications & Measurements Box
    const specsBoxH = 43;
    doc.setFillColor(whiteBg[0], whiteBg[1], whiteBg[2]);
    doc.setDrawColor(hairlineGrey[0], hairlineGrey[1], hairlineGrey[2]);
    doc.setLineWidth(0.3);
    doc.roundedRect(rightX, curY - 0.8, rightW, specsBoxH, 0.8, 0.8, 'FD');

    // Right Box Header Accent
    doc.setFillColor(theme.accent[0], theme.accent[1], theme.accent[2]);
    doc.rect(rightX, curY - 0.8, 1.8, specsBoxH, 'F');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(5.8);
    doc.setTextColor(theme.accent[0], theme.accent[1], theme.accent[2]);
    doc.text('KEY BENCHMARKS & SPECS', rightX + 3.2, curY + 3.2);

    let specY = curY + 7.0;
    const specs = card.measurementsOrSpecs || card.specs || [];
    specs.forEach((sp: string) => {
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(5.4);
      doc.setTextColor(darkInk[0], darkInk[1], darkInk[2]);
      const wrapped = doc.splitTextToSize(`• ${sp}`, rightW - 5.5);
      doc.text(wrapped, rightX + 3.2, specY);
      specY += wrapped.length * 2.6 + 1.1;
    });

    // 7. Prominent Warning & Stop Condition Callout Box (Bottom)
    const warnH = 15;
    const warnY = cardH - cardMargin - warnH - 5.5;

    doc.setFillColor(stopBg[0], stopBg[1], stopBg[2]);
    doc.setDrawColor(stopBorder[0], stopBorder[1], stopBorder[2]);
    doc.setLineWidth(0.3);
    doc.roundedRect(cardMargin + 3.5, warnY, innerW - 7, warnH, 0.8, 0.8, 'FD');

    // Left Red Bar
    doc.setFillColor(stopBorder[0], stopBorder[1], stopBorder[2]);
    doc.rect(cardMargin + 3.5, warnY, 2.0, warnH, 'F');

    // Stop Condition (Top Line)
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(5.7);
    doc.setTextColor(stopBorder[0], stopBorder[1], stopBorder[2]);
    const stopLines = doc.splitTextToSize(`⚠ STOP CONDITION: ${card.stopCondition}`, innerW - 12);
    doc.text(stopLines, cardMargin + 7.5, warnY + 3.6);

    // Warning Line
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(5.3);
    doc.setTextColor(darkInk[0], darkInk[1], darkInk[2]);
    const warnLines = doc.splitTextToSize(`Critical Warning: ${card.warningCondition || card.warning}`, innerW - 12);
    doc.text(warnLines, cardMargin + 7.5, warnY + 8.5);

    // 8. Discreet SmallSpaceHome Footer
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(4.8);
    doc.setTextColor(mutedText[0], mutedText[1], mutedText[2]);
    doc.text(`SMALLSPACEHOME.CA  •  VOL 0${playbook.volumeNumber}: ${playbook.title.toUpperCase()}  •  CARD 0${idx + 1}/04`, cardMargin + 3.5, cardH - cardMargin - 1.8);
    doc.text('TESTED IN TORONTO RENTAL LAB  •  SINGLE-USER LICENSE', cardW - cardMargin - 3.5, cardH - cardMargin - 1.8, { align: 'right' });
  });
}

/**
 * 6. QUICK-START EXECUTION CHECKLIST STANDALONE PDF RENDERER (PDF 03)
 * Generates an architectural single-page (1-page A4) operational execution sheet
 * organized strictly into four chronological stages: BEFORE → DURING → AFTER → REMOVE.
 * Brand Palette: Warm cream #FAFAF7, Warm dark ink #1C1917, Muted sage #8FAF8A, Muted tan #C4A882.
 */
export function renderDedicatedQuickStartChecklistPDF(
  doc: jsPDF,
  playbook: PlaybookMeta,
  enrichment: VolumeEnrichment
) {
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 11;
  const contentWidth = pageWidth - margin * 2;

  // SmallSpaceHome Architectural Brand Palette
  const creamBg: [number, number, number] = [250, 250, 247];        // #FAFAF7 Warm Cream
  const darkInk: [number, number, number] = [28, 25, 23];           // #1C1917 Warm Dark Ink
  const mutedSage: [number, number, number] = [143, 175, 138];      // #8FAF8A Muted Sage Primary
  const mutedTan: [number, number, number] = [196, 168, 130];       // #C4A882 Muted Tan Secondary
  const sageDark: [number, number, number] = [74, 83, 62];          // #4A533E Deep Forest/Sage
  const tanDark: [number, number, number] = [163, 130, 92];         // #A3825C Deep Tan
  const hairlineGrey: [number, number, number] = [229, 223, 213];   // #E5DFD5 Clean Border
  const mutedText: [number, number, number] = [115, 108, 100];      // Soft Charcoal
  const whiteBg: [number, number, number] = [255, 255, 255];
  const cardLightBg: [number, number, number] = [253, 252, 250];

  // 1. Paint Warm Cream Page Canvas (#FAFAF7)
  doc.setFillColor(creamBg[0], creamBg[1], creamBg[2]);
  doc.rect(0, 0, pageWidth, pageHeight, 'F');

  // Architectural Outer Border
  doc.setDrawColor(hairlineGrey[0], hairlineGrey[1], hairlineGrey[2]);
  doc.setLineWidth(0.4);
  doc.rect(margin - 2, margin - 2, contentWidth + 4, pageHeight - margin * 2 + 4);

  // 2. Compact Top Brand Header Bar
  let curY = margin;
  doc.setFillColor(darkInk[0], darkInk[1], darkInk[2]);
  doc.rect(margin, curY, contentWidth, 6.5, 'F');

  // Top Left Eyebrow
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(6.8);
  doc.setTextColor(creamBg[0], creamBg[1], creamBg[2]);
  doc.text('SMALLSPACEHOME.CA  •  QUICK-START FIELD EXECUTION SHEET', margin + 3.5, curY + 4.5);

  // Top Right Deliverable Tag
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(6.5);
  doc.text(`DELIVERABLE PDF 03  •  VOL 0${playbook.volumeNumber}`, pageWidth - margin - 3.5, curY + 4.5, { align: 'right' });

  curY += 9.5;

  // 3. Document Title in Sophisticated Serif & Subtitle
  doc.setFont('times', 'bold');
  doc.setFontSize(12.5);
  doc.setTextColor(darkInk[0], darkInk[1], darkInk[2]);
  const volTitle = `${playbook.title}: On-Site Field Execution Checklist`;
  doc.text(volTitle, margin, curY);

  curY += 4.2;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(6.8);
  doc.setTextColor(mutedText[0], mutedText[1], mutedText[2]);
  doc.text('Single-Page Operational Guide  •  Tested in 510 sq ft Toronto Rental Lab  •  Execute all steps directly on site', margin, curY);

  curY += 4.5;

  // 4. Workflow Progression Ribbon (BEFORE → DURING → AFTER → REMOVE)
  const ribbonH = 5.8;
  const stageWidth = (contentWidth - 9) / 4;
  const stageHeaders = [
    { label: '1. BEFORE (AUDIT)', bg: mutedTan, textCol: darkInk },
    { label: '2. DURING (INSTALL)', bg: mutedSage, textCol: darkInk },
    { label: '3. AFTER (VERIFY)', bg: mutedTan, textCol: darkInk },
    { label: '4. REMOVE (RESTORE)', bg: sageDark, textCol: whiteBg }
  ];

  stageHeaders.forEach((stg, sIdx) => {
    const stgX = margin + sIdx * (stageWidth + 3);
    doc.setFillColor(stg.bg[0], stg.bg[1], stg.bg[2]);
    doc.roundedRect(stgX, curY, stageWidth, ribbonH, 0.8, 0.8, 'F');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(6.2);
    doc.setTextColor(stg.textCol[0], stg.textCol[1], stg.textCol[2]);
    doc.text(stg.label, stgX + stageWidth / 2, curY + 3.8, { align: 'center' });

    // Connecting arrow indicator between stages
    if (sIdx < 3) {
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(6.5);
      doc.setTextColor(mutedText[0], mutedText[1], mutedText[2]);
      doc.text('→', stgX + stageWidth + 1.5, curY + 4, { align: 'center' });
    }
  });

  curY += ribbonH + 4;

  // 5. Four Chronological Stages
  const rawSections = enrichment.executionChecklist && enrichment.executionChecklist.length === 4
    ? enrichment.executionChecklist
    : [
        {
          stageName: 'BEFORE',
          title: 'Stage 1: Pre-Execution Substrate Audit & Dimension Verification',
          items: [
            'Identify substrate via knuckle-tap: modern drywall (1/2") vs heritage plaster vs tile vs door [B].',
            'Weigh gross object assembly (frame + glass + hardware) on digital kitchen scale [B].',
            'Confirm hardware compatibility; apply Conservative Working Load: CWL = Rated * 0.60 [C].',
            'Inspect paint surface: verify cured >30 days with zero chalking, peeling, or moisture [B].',
            'Verify room temperature is at least 15°C (59°F) and relative humidity is under 65% RH [A].',
            'Calculate exact hanging coordinate using 57" Gallery Eye-Level Centerline Formula [C].',
            'Assemble field kit: 70% IPA, microfiber cloth, 9" torpedo level, pencil, tape measure [B].'
          ]
        },
        {
          stageName: 'DURING',
          title: 'Stage 2: Surface Preparation & Precision Assembly Protocol',
          items: [
            'Degrease target contact points with 70% Isopropyl Alcohol USP; wait 2 minutes to flash-dry [A].',
            'Mark exact alignment coordinates with 9" torpedo level pencil guide (do not score paint) [B].',
            'Apply interlocking hardware firmly with 30 seconds continuous thumb pressure per contact point [A].',
            'Disengage frame carefully; press remaining wall strips with thumbs for 30s each [A].',
            'Allow mandatory 60 minutes unweighted cure for adhesive polymer cross-linking before loading [A].'
          ]
        },
        {
          stageName: 'AFTER',
          title: 'Stage 3: Load Verification & Photographic Documentation Protocol',
          items: [
            'Re-engage payload until audible clicks confirm mechanical hook-and-loop interlock [A].',
            'Perform physical verification: apply gentle downward 25% test load (2–3 lbs manual shear) [B].',
            'Verify horizontal and vertical alignment with 9" magnetic spirit level [B].',
            'Record hardware model, installation date, and gross payload weight in maintenance log [B].',
            'Photograph completed installation in daylight; schedule 48-hour check and 30-day audit [B].'
          ]
        },
        {
          stageName: 'REMOVE',
          title: 'Stage 4: Zero-Damage Removal & Surface Restoration Protocol',
          items: [
            'Remove 100% of payload items before touching mounting hardware [B].',
            'Grip stretch-release tab; pull strictly PARALLEL to wall surface (0° downward); stretch 12–15" [A].',
            'If tab breaks: warm 45s with hair dryer on Medium; saw downward with unflavored dental floss [B].',
            'Roll microscopic adhesive residue away with thumb friction; clean with 70% IPA [B].',
            'Dab any micro-pinholes with DAP Fast \'N Final lightweight spackle; wipe flush with damp sponge [B].'
          ]
        }
      ];

  const stageThemes = [
    { name: 'BEFORE', badgeBg: mutedTan, badgeText: darkInk, borderCol: mutedTan, checkpointLabel: 'Substrate verified, CWL calculated, & tools gathered' },
    { name: 'DURING', badgeBg: mutedSage, badgeText: darkInk, borderCol: mutedSage, checkpointLabel: '70% IPA prepped, 30s pressure applied, & 60m cure complete' },
    { name: 'AFTER', badgeBg: mutedTan, badgeText: darkInk, borderCol: mutedTan, checkpointLabel: '2–3 lb shear tested, level verified, & daylight photo logged' },
    { name: 'REMOVE', badgeBg: sageDark, badgeText: whiteBg, borderCol: sageDark, checkpointLabel: '0° parallel stretch executed, residue rolled, & surface inspected' }
  ];

  rawSections.forEach((section, idx) => {
    const theme = stageThemes[idx] || stageThemes[0];
    const items = section.items;
    
    // Calculate compact dynamic block height to ensure single-page fit
    const lineSpacing = 3.6;
    const itemsHeight = items.length * lineSpacing;
    const blockH = itemsHeight + 11.5;

    // Card background & architectural border
    doc.setFillColor(cardLightBg[0], cardLightBg[1], cardLightBg[2]);
    doc.setDrawColor(hairlineGrey[0], hairlineGrey[1], hairlineGrey[2]);
    doc.setLineWidth(0.3);
    doc.roundedRect(margin, curY, contentWidth, blockH, 1, 1, 'FD');

    // Left Colored Accent Border Strip
    doc.setFillColor(theme.badgeBg[0], theme.badgeBg[1], theme.badgeBg[2]);
    doc.rect(margin, curY, 2.2, blockH, 'F');

    // Stage Header Eyebrow & Title
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(6.8);
    doc.setTextColor(theme.borderCol === sageDark ? sageDark[0] : (theme.borderCol === mutedSage ? sageDark[0] : tanDark[0]), theme.borderCol === sageDark ? sageDark[1] : (theme.borderCol === mutedSage ? sageDark[1] : tanDark[1]), theme.borderCol === sageDark ? sageDark[2] : (theme.borderCol === mutedSage ? sageDark[2] : tanDark[2]));
    doc.text(`STAGE 0${idx + 1}: ${section.stageName.toUpperCase()}  —  ${section.title.replace(/^Stage \d+:\s*/i, '').toUpperCase()}`, margin + 5, curY + 4.2);

    let itemY = curY + 7.8;

    items.forEach((itemText) => {
      // Printable Checkbox Element: Square Box [ ]
      doc.setDrawColor(darkInk[0], darkInk[1], darkInk[2]);
      doc.setLineWidth(0.3);
      doc.setFillColor(whiteBg[0], whiteBg[1], whiteBg[2]);
      doc.rect(margin + 5, itemY - 2.3, 2.7, 2.7, 'FD');

      // Checkpoint Item Text (High Readability Sans-Serif)
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(6.4);
      doc.setTextColor(darkInk[0], darkInk[1], darkInk[2]);
      const wrapped = doc.splitTextToSize(itemText, contentWidth - 14);
      doc.text(wrapped, margin + 9.5, itemY);

      itemY += lineSpacing;
    });

    // Discrete Stage Checkpoint Sign-Off Line
    const cpY = curY + blockH - 2.8;
    doc.setDrawColor(hairlineGrey[0], hairlineGrey[1], hairlineGrey[2]);
    doc.setLineWidth(0.2);
    doc.line(margin + 5, cpY - 1.2, margin + contentWidth - 5, cpY - 1.2);

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(5.5);
    doc.setTextColor(mutedText[0], mutedText[1], mutedText[2]);
    doc.text(`STAGE 0${idx + 1} CHECKPOINT: [  ] ${theme.checkpointLabel}`, margin + 5, cpY + 1.2);

    doc.setFont('helvetica', 'normal');
    doc.text('Initials: ________   Date: ____ / ____ / 2026', pageWidth - margin - 5, cpY + 1.2, { align: 'right' });

    curY += blockH + 2.5;
  });

  // 6. Master On-Site Field Verification & Sign-Off Strip (Bottom)
  const signHeight = 15;
  const signY = pageHeight - margin - signHeight - 4;

  doc.setFillColor(whiteBg[0], whiteBg[1], whiteBg[2]);
  doc.setDrawColor(sageDark[0], sageDark[1], sageDark[2]);
  doc.setLineWidth(0.4);
  doc.roundedRect(margin, signY, contentWidth, signHeight, 1, 1, 'FD');

  // Sign-Off Header
  doc.setFillColor(sageDark[0], sageDark[1], sageDark[2]);
  doc.rect(margin, signY, contentWidth, 4.2, 'F');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(6.2);
  doc.setTextColor(creamBg[0], creamBg[1], creamBg[2]);
  doc.text('MASTER ON-SITE FIELD VERIFICATION & DEPOSIT DEFENSE SIGN-OFF', margin + 3.5, signY + 3);

  // Field Input Lines for Hand / Digital Marking
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(5.8);
  doc.setTextColor(darkInk[0], darkInk[1], darkInk[2]);
  doc.text('Room / Spatial Zone:', margin + 4, signY + 7.5);
  doc.setFont('helvetica', 'normal');
  doc.text('_____________________________', margin + 27, signY + 7.5);

  doc.setFont('helvetica', 'bold');
  doc.text('Measured Tare Weight:', margin + 74, signY + 7.5);
  doc.setFont('helvetica', 'normal');
  doc.text('_______ lbs (CWL Applied)', margin + 102, signY + 7.5);

  doc.setFont('helvetica', 'bold');
  doc.text('Date Installed:', pageWidth - margin - 45, signY + 7.5);
  doc.setFont('helvetica', 'normal');
  doc.text('____ / ____ / 2026', pageWidth - margin - 26, signY + 7.5);

  doc.setFont('helvetica', 'bold');
  doc.text('Substrate Verified:', margin + 4, signY + 12);
  doc.setFont('helvetica', 'normal');
  doc.text('[  ] 1/2" Drywall   [  ] Plaster   [  ] Ceramic Tile   [  ] Wood / Door   [  ] Masonry', margin + 26, signY + 12);

  doc.setFont('helvetica', 'bold');
  doc.text('Inspector / Tenant Signature:', margin + 114, signY + 12);
  doc.setFont('helvetica', 'normal');
  doc.text('________________________', margin + 148, signY + 12);

  // 7. Discreet Brand Footer
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(5.6);
  doc.setTextColor(mutedText[0], mutedText[1], mutedText[2]);
  doc.text(`SMALLSPACEHOME.CA  •  VOL 0${playbook.volumeNumber}: ${playbook.title.toUpperCase()}  •  QUICK-START EXECUTION SHEET  •  VERSION 1.0 (AUGUST 2026)`, margin, pageHeight - margin + 0.5);
  doc.text('EXACTLY 1 PAGE OPERATIONAL REFERENCE  •  SINGLE-USER PERSONAL USE LICENSE', pageWidth - margin, pageHeight - margin + 0.5, { align: 'right' });
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

