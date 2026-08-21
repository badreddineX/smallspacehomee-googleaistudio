import { PRODUCTS_1_TO_4 } from './products/products1to4';
import { PRODUCTS_5_TO_8 } from './products/products5to8';
import { PRODUCTS_9_TO_11 } from './products/products9to11';

export interface DetailedDeliverableFile {
  id: string;
  fileName: string;
  fileType: 'PDF Master Guide' | 'Spreadsheet (CSV/Excel)' | 'Notion Template' | 'Printable Cheatsheet' | 'Companion Tool' | 'High-Res Asset';
  extension: '.pdf' | '.csv' | '.xlsx' | '.json' | '.png' | '.zip';
  fileSize: string;
  badge: string;
  description: string;
  previewSnippet: string;
  downloadableContent: string;
}

export interface ProductAssetBundle {
  productId: string;
  rank: number;
  title: string;
  photography: {
    url: string;
    alt: string;
    caption: string;
    spatialSpecs: string;
    palette: string[];
    stylingKeywords: string[];
  };
  deliverablesOverview: string;
  totalAssetsCount: number;
  files: DetailedDeliverableFile[];
}

// Master combined bundle registry for all 11 products
export const PRODUCT_ASSET_BUNDLES: Record<string, ProductAssetBundle> = {
  ...PRODUCTS_1_TO_4,
  ...PRODUCTS_5_TO_8,
  ...PRODUCTS_9_TO_11,

  // Direct alias mappings to support any variation in product IDs
  'kit-kitchen-space-doubler': PRODUCTS_1_TO_4['kit-micro-kitchen-maxima'],
  'kit-closet-vertical-storage': PRODUCTS_1_TO_4['kit-closet-quadrupler'],
  'kit-deposit-defense': PRODUCTS_1_TO_4['kit-deposit-protection-defense'],
  'kit-acoustic-privacy': PRODUCTS_5_TO_8['kit-studio-acoustic-privacy'],
  'kit-micro-entryway': PRODUCTS_5_TO_8['kit-entryway-dropzone'],
  'kit-studio-bed-separation': PRODUCTS_5_TO_8['kit-studio-zoning-separation'],
  'kit-optical-space-expander': PRODUCTS_9_TO_11['kit-optical-expander-lighting'],
  'kit-small-bathroom-maximizer': PRODUCTS_9_TO_11['kit-small-bathroom-maximizer'],
  'kit-bathroom-vanity-shower': PRODUCTS_9_TO_11['kit-small-bathroom-maximizer']
};

export const getProductAssetBundle = (productId: string): ProductAssetBundle => {
  if (PRODUCT_ASSET_BUNDLES[productId]) {
    return PRODUCT_ASSET_BUNDLES[productId];
  }

  // Fallback to product 1 if unknown ID
  return PRODUCT_ASSET_BUNDLES['kit-zero-damage-mounting'];
};
