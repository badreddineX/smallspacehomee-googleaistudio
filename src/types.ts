export interface ProductScore {
  problemSeverity: number;
  searchAlignment: number;
  audienceRelevance: number;
  productUsefulness: number;
  perceivedValue: number;
  differentiation: number;
  visualPotential: number;
  easeOfProduction: number;
  bundlePotential: number;
  upsellPotential: number;
  evergreenPotential: number;
  blogPromotionFit: number;
  pinterestPotential: number;
  flagshipPotential: number;
  totalScore: number;
}

export type TabId = 
  | 'all-products'
  | 'first-product'
  | 'audience' 
  | 'top-20' 
  | 'top-10' 
  | 'ecosystem' 
  | 'flagship' 
  | 'bundles' 
  | 'blog-funnel' 
  | 'store-architecture' 
  | 'roadmap';

export type ProductLevel = 'quick-win' | 'premium' | 'flagship';

export type ProductFormat = 
  | 'Interactive PDF + Printables'
  | 'Notion Workspace + PDF'
  | 'Google Sheets + Excel + PDF'
  | 'Hybrid (Notion + Sheets + Interactive PDF)'
  | 'Canva Templates + Interactive PDF'
  | 'Interactive PDF + Canva Templates'
  | 'Interactive PDF + Notion'
  | string;

export interface DigitalProduct {
  id: string;
  rank: number;
  title: string;
  tagline: string;
  level: ProductLevel;
  priceRange: string;
  recommendedPrice: number;
  format: ProductFormat;
  targetProblem: string;
  valueProposition: string;
  differentiation: string;
  blogCategory: string;
  difficulty: 'Low' | 'Medium' | 'High';
  scores: ProductScore;
  whyBuild: string;
  deliverables: string[];
  keyModules: string[];
  blogTriggers: string[];
  fourthwallCategory: string;
  isTop10: boolean;
}

export interface ProductBundle {
  id: string;
  name: string;
  tagline: string;
  targetCustomer: string;
  problemSolved: string;
  productsIncluded: string[];
  totalComponents: string;
  recommendedFormats: string[];
  perceivedValue: number;
  suggestedPrice: number;
  savingsPercentage: number;
  buyingRationale: string;
  fourthwallPositioning: string;
  physicalCrossSell?: {
    productName: string;
    merchType: 'Wall Art' | 'Coffee Mug' | 'Tote Bag';
    synergyPitch: string;
  };
}

export interface BlogFunnelMapping {
  id: string;
  blogCategory: string;
  sampleArticleTitle: string;
  searchIntent: string;
  readerFriction: string;
  recommendedProduct: string;
  productPrice: string;
  ctaType: 'Inline Highlight' | 'End-of-Post Box' | 'Sticky Footer Banner' | 'Exit-Intent Lead Upgrade';
  ctaHeadline: string;
  ctaCopy: string;
  buttonText: string;
  pinterestAngle: string;
}

export interface FlagshipModule {
  id: string;
  moduleNumber: string;
  title: string;
  summary: string;
  toolsIncluded: string[];
  interactiveAssets: string[];
  transformation: string;
}
