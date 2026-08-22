import { ProductAssetBundle, generateThreePDFDeliverables } from '../productAssetsData';

export const PRODUCTS_1_TO_4: Record<string, ProductAssetBundle> = {
  // ==========================================
  // PRODUCT 1: ZERO-DAMAGE WALL MOUNTING (VOL 01)
  // ==========================================
  'kit-zero-damage-mounting': {
    productId: 'kit-zero-damage-mounting',
    rank: 1,
    title: 'The Zero-Damage Heavy Wall Mounting & Renter Hacks Kit',
    photography: {
      url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=85',
      alt: 'Clean minimalist rental apartment living room wall with heavy framed art, solid oak floating shelf, and round mirror hung without drywall damage',
      caption: 'Tested in the 510 sq ft Toronto Rental Lab: Safely mounted a 22-lb oak floating shelf and 18-lb framed artwork using our 3M Claw shear-friction bracket system with zero drywall anchor blowouts.',
      spatialSpecs: 'Drywall Substrate • 48-Hour Adhesive Curing Protocol • 35-lb Tested Peak Load',
      palette: ['#FAF8F5', '#4A533E', '#D9D3C7', '#8C857B', '#1C1917'],
      stylingKeywords: ['Shear Force Distribution', 'Isopropyl 70% Prep', 'Tension Bracing', 'Zero-Damage']
    },
    deliverablesOverview: 'Delivered as exactly 3 standalone PDF files: (1) PDF 01 Master Field Playbook (25–36 pages), (2) PDF 02 4×6" Pocket Field Cards (4 print-ready companion cards), and (3) PDF 03 Quick-Start Execution Checklist (1-page operational sheet).',
    totalAssetsCount: 3,
    files: generateThreePDFDeliverables(1)
  },

  // ==========================================
  // PRODUCT 2: 5-ZONE CLOSET EXPANDER (VOL 02)
  // ==========================================
  'kit-5zone-closet-expander': {
    productId: 'kit-5zone-closet-expander',
    rank: 2,
    title: 'The 5-Zone Vertical Closet Space Doubler & Organization Kit',
    photography: {
      url: 'https://images.unsplash.com/photo-1558997519-83ea9252def8?auto=format&fit=crop&w=1600&q=85',
      alt: 'Crisply organized Scandinavian reach-in apartment closet with tiered hanging rods, slim velvet hangers, and labeled canvas storage bins',
      caption: 'Tested in a standard 48-inch reach-in rental closet: Doubled linear hanging capacity from 48 inches to 96 inches using dual-tier tension rods and reclaimed 14 cubic feet of dead vertical space.',
      spatialSpecs: '48" Reach-in Closet Width • 8-Foot Ceiling • 100% Zero-Drill Modular Architecture',
      palette: ['#FAF8F5', '#4A533E', '#D9D3C7', '#8C857B', '#1C1917'],
      stylingKeywords: ['5-Zone Zoning', 'Slim Velvet Hangers', 'Dual-Tier Tension System', 'Vertical Maxing']
    },
    deliverablesOverview: 'Delivered as exactly 3 standalone PDF files: (1) PDF 01 Master Field Playbook (25–36 pages), (2) PDF 02 4×6" Pocket Field Cards (4 print-ready companion cards), and (3) PDF 03 Quick-Start Execution Checklist (1-page operational sheet).',
    totalAssetsCount: 3,
    files: generateThreePDFDeliverables(2)
  },

  // ==========================================
  // PRODUCT 3: RENTER KITCHEN EXPANDER (VOL 03)
  // ==========================================
  'kit-renter-kitchen-counter-expander': {
    productId: 'kit-renter-kitchen-counter-expander',
    rank: 3,
    title: 'The Micro-Kitchen Countertop & Cabinet Vertical Maximizer Kit',
    photography: {
      url: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1600&q=85',
      alt: 'Clean Scandinavian apartment kitchen with bamboo sink-top cutting board, magnetic knife bar on fridge, and under-shelf wire baskets',
      caption: 'Tested in a 42-inch rental galley kitchen: Created 3.2 square feet of additional prep area using an over-sink bamboo bridge board and under-cabinet tension rails with zero landlord drilling.',
      spatialSpecs: '42" Galley Kitchen • 30" Sink Cutout • 100% Damage-Free Magnetic & Tension Mounts',
      palette: ['#FAF8F5', '#4A533E', '#D9D3C7', '#8C857B', '#1C1917'],
      stylingKeywords: ['Over-Sink Bridge', 'Magnetic Spice Armor', 'Under-Shelf Baskets', 'Zero-Drill Kitchen']
    },
    deliverablesOverview: 'Delivered as exactly 3 standalone PDF files: (1) PDF 01 Master Field Playbook (25–36 pages), (2) PDF 02 4×6" Pocket Field Cards (4 print-ready companion cards), and (3) PDF 03 Quick-Start Execution Checklist (1-page operational sheet).',
    totalAssetsCount: 3,
    files: generateThreePDFDeliverables(3)
  },

  // ==========================================
  // PRODUCT 4: DEPOSIT DEFENSE KIT (VOL 04)
  // ==========================================
  'kit-deposit-protection-defense': {
    productId: 'kit-deposit-protection-defense',
    rank: 4,
    title: 'The Renter Security Deposit Defense & Emergency Repair Kit',
    photography: {
      url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1600&q=85',
      alt: 'Clean freshly patched white apartment wall and move-out inspection clipboard with tenant rights documentation',
      caption: 'Tested in Toronto, Vancouver & Montreal rentals: Protected $14,000+ in tenant deposits with timestamped 4K video baselines, $12 emergency spackle repairs, and provincial tribunal scripts.',
      spatialSpecs: 'Universal Rental Property • Ontario LTB & BC RTB Compliant • $12 DIY Repair Matrix',
      palette: ['#FAF8F5', '#4A533E', '#D9D3C7', '#8C857B', '#1C1917'],
      stylingKeywords: ['Deposit Protection', 'Normal Wear & Tear', 'Move-Out Inspection', 'Drywall Spackle Patch']
    },
    deliverablesOverview: 'Delivered as exactly 3 standalone PDF files: (1) PDF 01 Master Field Playbook (25–36 pages), (2) PDF 02 4×6" Pocket Field Cards (4 print-ready companion cards), and (3) PDF 03 Quick-Start Execution Checklist (1-page operational sheet).',
    totalAssetsCount: 3,
    files: generateThreePDFDeliverables(4)
  }
};
