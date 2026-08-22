import { ProductAssetBundle, generateThreePDFDeliverables } from '../productAssetsData';

export const PRODUCTS_9_TO_11: Record<string, ProductAssetBundle> = {
  // ==========================================
  // PRODUCT 9: WFH MULTI-USE DESK RESET KIT (VOL 09)
  // ==========================================
  'kit-wfh-desk-reset': {
    productId: 'kit-wfh-desk-reset',
    rank: 9,
    title: 'The WFH Multi-Use Desk & 15-Minute Room Reset Kit',
    photography: {
      url: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=1600&q=85',
      alt: 'Clean minimalist home office nook in small apartment living room with zero cables and quick-reset felt laptop tray',
      caption: 'Tested in a 510 sq ft hybrid apartment: Transformed a compact 36x20" desk from high-output workstation to serene evening console in under 8 minutes with zero visible cords.',
      spatialSpecs: '36x20" Desk Footprint • Zero Visible Cords • 15-Min Evening Transition Protocol',
      palette: ['#FAF8F5', '#4A533E', '#D9D3C7', '#8C857B', '#1C1917'],
      stylingKeywords: ['Zero-Cable Invisibility', 'Felt Laptop Hideaway', '4000K to 2200K Shift', '15-Min Reset']
    },
    deliverablesOverview: 'Delivered as exactly 3 standalone PDF files: (1) PDF 01 Master Field Playbook (25–36 pages), (2) PDF 02 4×6" Pocket Field Cards (4 print-ready companion cards), and (3) PDF 03 Quick-Start Execution Checklist (1-page operational sheet).',
    totalAssetsCount: 3,
    files: generateThreePDFDeliverables(9)
  },

  // ==========================================
  // PRODUCT 10: OPTICAL SPACE EXPANDER KIT (VOL 10)
  // ==========================================
  'kit-optical-expander-lighting': {
    productId: 'kit-optical-expander-lighting',
    rank: 10,
    title: 'The Optical Illusion Small Space Expander & Lighting Kit',
    photography: {
      url: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1600&q=85',
      alt: 'Clean Scandinavian living room with high-mounted floor-to-ceiling drapes, 45-degree angled daylight mirror, and warm layered ambient lighting',
      caption: 'Tested in a 450 sq ft north-facing rental apartment: Visually expanded ceiling perception and daylight penetration by 60% using floor-to-ceiling drapery geometry and 45-degree mirror reflection angles.',
      spatialSpecs: '450 sq ft Studio • North-Facing Daylight • 3-Tier Layered 2700K Lighting',
      palette: ['#FAF8F5', '#4A533E', '#D9D3C7', '#8C857B', '#1C1917'],
      stylingKeywords: ['Optical Height', '45-Degree Mirror Bounce', 'Floor-to-Ceiling Drapes', 'Zero Overhead Glare']
    },
    deliverablesOverview: 'Delivered as exactly 3 standalone PDF files: (1) PDF 01 Master Field Playbook (25–36 pages), (2) PDF 02 4×6" Pocket Field Cards (4 print-ready companion cards), and (3) PDF 03 Quick-Start Execution Checklist (1-page operational sheet).',
    totalAssetsCount: 3,
    files: generateThreePDFDeliverables(10)
  },

  // ==========================================
  // PRODUCT 11: SMALL BATHROOM MAXIMIZER KIT (VOL 11)
  // ==========================================
  'kit-small-bathroom-maximizer': {
    productId: 'kit-small-bathroom-maximizer',
    rank: 11,
    title: 'The Small Bathroom Vanity & Shower Vertical Maximizer',
    photography: {
      url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1600&q=85',
      alt: 'Clean modern small rental bathroom with over-toilet tiered storage, tension corner shower caddy, and amber decanted toiletries',
      caption: 'Tested in a 5x7 ft Canadian rental bathroom: Eliminated pedestal sink chaos and recovered 14 cubic feet of vertical storage with zero tile drilling and rust-proof anodized tension poles.',
      spatialSpecs: '5x7 ft Rental Bathroom • Pedestal Sink • 100% Zero-Drill Tile Architecture',
      palette: ['#FAF8F5', '#4A533E', '#D9D3C7', '#8C857B', '#1C1917'],
      stylingKeywords: ['Over-Toilet Tower', 'Spring Tension Shower Caddy', 'Double Curtain Rod', 'Amber Decanting']
    },
    deliverablesOverview: 'Delivered as exactly 3 standalone PDF files: (1) PDF 01 Master Field Playbook (25–36 pages), (2) PDF 02 4×6" Pocket Field Cards (4 print-ready companion cards), and (3) PDF 03 Quick-Start Execution Checklist (1-page operational sheet).',
    totalAssetsCount: 3,
    files: generateThreePDFDeliverables(11)
  }
};
