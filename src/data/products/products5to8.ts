import { ProductAssetBundle, generateThreePDFDeliverables } from '../productAssetsData';

export const PRODUCTS_5_TO_8: Record<string, ProductAssetBundle> = {
  // ==========================================
  // PRODUCT 5: STUDIO ACOUSTIC PRIVACY KIT (VOL 05)
  // ==========================================
  'kit-studio-acoustic-privacy': {
    productId: 'kit-studio-acoustic-privacy',
    rank: 5,
    title: 'The Studio Apartment Acoustic Privacy & Soundproofing Hacks Kit',
    photography: {
      url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=85',
      alt: 'Quiet Scandinavian apartment with floor-to-ceiling heavyweight curtains, wool rug, and acoustic door draft seal',
      caption: 'Tested in a noisy high-rise Toronto condo: Reduced hallway footsteps, elevator chimes, and neighbor noise by 12–14 dB using zero-damage peelable perimeter seals and acoustic mass positioning.',
      spatialSpecs: 'Studio Apartment • 1-Inch Door Gap • 100% Removable Silicone & Acoustic Drapes',
      palette: ['#FAF8F5', '#4A533E', '#D9D3C7', '#8C857B', '#1C1917'],
      stylingKeywords: ['Acoustic Air-Lock', 'Door Perimeter Gaskets', '32oz Thermal Drapes', 'Impact Decoupling']
    },
    deliverablesOverview: 'Delivered as exactly 3 standalone PDF files: (1) PDF 01 Master Field Playbook (25–36 pages), (2) PDF 02 4×6" Pocket Field Cards (4 print-ready companion cards), and (3) PDF 03 Quick-Start Execution Checklist (1-page operational sheet).',
    totalAssetsCount: 3,
    files: generateThreePDFDeliverables(5)
  },

  // ==========================================
  // PRODUCT 6: MICRO-ENTRYWAY DROP ZONE KIT (VOL 06)
  // ==========================================
  'kit-entryway-dropzone': {
    productId: 'kit-entryway-dropzone',
    rank: 6,
    title: 'The Micro-Entryway 6-Inch "Drop Zone" & Clutter-Stop Kit',
    photography: {
      url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=85',
      alt: 'Clean minimalist 6-inch floating entryway ledge with magnetic key holders, wall hooks, and vertical shoe storage',
      caption: 'Tested in a narrow 36-inch apartment hallway: Created a complete 6-jacket, 8-shoe, mail and key drop zone with an ultra-slim 5.5-inch wall projection.',
      spatialSpecs: '36" Hallway Width • 5.5" Floating Console Depth • 36" Clear Door Swing Arc',
      palette: ['#FAF8F5', '#4A533E', '#D9D3C7', '#8C857B', '#1C1917'],
      stylingKeywords: ['6-Inch Floating Ledge', 'Staggered Hooks', 'River Stone Boot Tray', 'Magnetic Key Hub']
    },
    deliverablesOverview: 'Delivered as exactly 3 standalone PDF files: (1) PDF 01 Master Field Playbook (25–36 pages), (2) PDF 02 4×6" Pocket Field Cards (4 print-ready companion cards), and (3) PDF 03 Quick-Start Execution Checklist (1-page operational sheet).',
    totalAssetsCount: 3,
    files: generateThreePDFDeliverables(6)
  },

  // ==========================================
  // PRODUCT 7: UNDER-BED SECRET STORAGE (VOL 07)
  // ==========================================
  'kit-underbed-hidden-storage': {
    productId: 'kit-underbed-hidden-storage',
    rank: 7,
    title: 'The Under-Bed & Hidden Space Secret Storage Blueprint',
    photography: {
      url: 'https://images.unsplash.com/photo-1540518614846-7ede433c4550?auto=format&fit=crop&w=1600&q=85',
      alt: 'Clean minimalist bedroom with smooth gliding under-bed wooden caster drawers and dust-proof Oxford cloth containers',
      caption: 'Tested under standard Queen and Double bed frames: Recovered 28.5 cubic feet of dust-proof, organized hidden storage with heavy-duty steel risers and smooth rubber casters.',
      spatialSpecs: 'Queen Bed (60x80") • 11.5" Under-Bed Clearance • 28.5 cu ft Recovered Volume',
      palette: ['#FAF8F5', '#4A533E', '#D9D3C7', '#8C857B', '#1C1917'],
      stylingKeywords: ['Dust-Proof Storage', 'Steel Bed Risers', 'Luggage Nesting', 'Rubber Caster Crates']
    },
    deliverablesOverview: 'Delivered as exactly 3 standalone PDF files: (1) PDF 01 Master Field Playbook (25–36 pages), (2) PDF 02 4×6" Pocket Field Cards (4 print-ready companion cards), and (3) PDF 03 Quick-Start Execution Checklist (1-page operational sheet).',
    totalAssetsCount: 3,
    files: generateThreePDFDeliverables(7)
  },

  // ==========================================
  // PRODUCT 8: STUDIO BED SEPARATION KIT (VOL 08)
  // ==========================================
  'kit-studio-zoning-separation': {
    productId: 'kit-studio-zoning-separation',
    rank: 8,
    title: 'The Studio Living-Bed Separation & Visual Privacy Kit',
    photography: {
      url: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1600&q=85',
      alt: 'Clean Scandinavian open studio apartment divided into bedroom sanctuary and living lounge with open-back bookcase and linen curtain',
      caption: 'Tested in a 440 sq ft open studio: Created 3 distinct rooms (Bedroom Sanctuary, Lounge, Dining Nook) with zero drywall screws and 100% natural daylight preservation.',
      spatialSpecs: '440 sq ft Open Studio • 100% Zero-Drill Dividers • 40% Sheer Daylight Flow',
      palette: ['#FAF8F5', '#4A533E', '#D9D3C7', '#8C857B', '#1C1917'],
      stylingKeywords: ['Studio Zoning', 'Open-Back Bookcase', 'Tension Curtain Track', 'Psychological Anchoring']
    },
    deliverablesOverview: 'Delivered as exactly 3 standalone PDF files: (1) PDF 01 Master Field Playbook (25–36 pages), (2) PDF 02 4×6" Pocket Field Cards (4 print-ready companion cards), and (3) PDF 03 Quick-Start Execution Checklist (1-page operational sheet).',
    totalAssetsCount: 3,
    files: generateThreePDFDeliverables(8)
  }
};
