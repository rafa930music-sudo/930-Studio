export type PlanType = 'FREE' | 'PRO' | 'BUSINESS';

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  plan: PlanType;
  sitesCreated: number;
  maxSites: number;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface NavbarSection {
  brandName: string;
  logoText?: string;
  ctaText: string;
  ctaLink: string;
  links: NavLink[];
  glassBlur: boolean;
  sticky: boolean;
}

export interface HeroSection {
  enabled: boolean;
  kicker?: string;
  title: string;
  highlightTitle?: string;
  subtitle: string;
  primaryCta: { text: string; link: string };
  secondaryCta?: { text: string; link: string };
  imageUrl: string;
  badge?: string;
  style?: 'centered' | 'split' | 'fullscreen';
}

export interface TrustLogoItem {
  id: string;
  name: string;
  tagline?: string;
}

export interface LogosSection {
  enabled: boolean;
  title?: string;
  items: TrustLogoItem[];
}

export interface BentoFeatureItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  tag?: string;
  colSpan?: number; // 1 or 2
  imageUrl?: string;
  statNumber?: string;
  statLabel?: string;
}

export interface BentoFeaturesSection {
  enabled: boolean;
  kicker?: string;
  title: string;
  subtitle?: string;
  items: BentoFeatureItem[];
}

export interface ProductSpec {
  label: string;
  value: string;
  detail?: string;
}

export interface ProductHighlightSection {
  enabled: boolean;
  kicker?: string;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  specs: ProductSpec[];
  ctaText?: string;
  ctaLink?: string;
  layout?: 'image-right' | 'image-left';
}

export interface StatMetricItem {
  id: string;
  value: string;
  label: string;
  description?: string;
}

export interface StatsSection {
  enabled: boolean;
  kicker?: string;
  title?: string;
  subtitle?: string;
  items: StatMetricItem[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  avatarUrl: string;
  rating?: number;
}

export interface TestimonialsSection {
  enabled: boolean;
  title: string;
  subtitle?: string;
  items: TestimonialItem[];
}

export interface PricingPlan {
  id: string;
  name: string;
  tag?: string;
  priceMonthly: string;
  priceAnnual: string;
  description: string;
  features: string[];
  ctaText: string;
  ctaLink: string;
  highlighted: boolean;
}

export interface PricingSection {
  enabled: boolean;
  title: string;
  subtitle?: string;
  billingCycle: 'monthly' | 'annual';
  discountNote?: string;
  plans: PricingPlan[];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface FaqSection {
  enabled: boolean;
  title: string;
  subtitle?: string;
  items: FaqItem[];
}

export interface CtaFinalSection {
  enabled: boolean;
  kicker?: string;
  title: string;
  subtitle: string;
  primaryCta: { text: string; link: string };
  secondaryCta?: { text: string; link: string };
  backgroundStyle?: 'gradient' | 'minimal' | 'glow';
}

export interface MapSection {
  enabled: boolean;
  kicker?: string;
  title: string;
  subtitle?: string;
  address: string;
  city: string;
  hours: string;
  phone: string;
  email: string;
  embedUrl: string;
  directionsUrl?: string;
}

export interface SliderSlide {
  id: string;
  title: string;
  subtitle: string;
  tag?: string;
  imageUrl: string;
  ctaText?: string;
  ctaLink?: string;
}

export interface SliderSection {
  enabled: boolean;
  kicker?: string;
  title: string;
  subtitle?: string;
  autoplay: boolean;
  slides: SliderSlide[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  aspectRatio?: 'square' | 'wide' | 'tall';
}

export interface GallerySection {
  enabled: boolean;
  kicker?: string;
  title: string;
  subtitle?: string;
  items: GalleryItem[];
}

export interface TabItem {
  id: string;
  label: string;
  icon?: string;
  title: string;
  description: string;
  imageUrl: string;
  points: string[];
}

export interface TabsSection {
  enabled: boolean;
  kicker?: string;
  title: string;
  subtitle?: string;
  tabs: TabItem[];
}

export interface MarqueeItem {
  id: string;
  text: string;
  icon?: string;
  highlight?: boolean;
}

export interface MarqueeSection {
  enabled: boolean;
  speed: 'slow' | 'normal' | 'fast';
  direction: 'left' | 'right';
  items: MarqueeItem[];
}

export interface CountdownSection {
  enabled: boolean;
  kicker?: string;
  title: string;
  subtitle: string;
  targetDate: string; // ISO or date string e.g. "2026-12-31T23:59:59"
  ctaText: string;
  ctaLink: string;
  badge?: string;
}

export interface LeadFormField {
  id: string;
  label: string;
  type: 'text' | 'email' | 'select' | 'textarea' | 'radio';
  placeholder?: string;
  options?: string[];
  required: boolean;
}

export interface LeadFormStep {
  id: string;
  stepNumber: number;
  title: string;
  subtitle: string;
  fields: LeadFormField[];
}

export interface LeadFormSection {
  enabled: boolean;
  kicker?: string;
  title: string;
  subtitle: string;
  submitButtonText: string;
  successTitle: string;
  successMessage: string;
  steps: LeadFormStep[];
}

export interface TimelineMilestone {
  id: string;
  phase: string;
  dateOrQuarter: string;
  title: string;
  description: string;
  status: 'completed' | 'in_progress' | 'upcoming';
  points?: string[];
}

export interface TimelineSection {
  enabled: boolean;
  kicker?: string;
  title: string;
  subtitle?: string;
  milestones: TimelineMilestone[];
}

export interface FooterSection {
  copyright: string;
  legalLinks: { label: string; href: string }[];
  socialLinks: { platform: string; url: string }[];
  columns?: { title: string; links: { label: string; href: string }[] }[];
}

export type SectionType =
  | 'navbar'
  | 'hero'
  | 'logos'
  | 'bentoFeatures'
  | 'productHighlight'
  | 'stats'
  | 'testimonials'
  | 'pricing'
  | 'faq'
  | 'ctaFinal'
  | 'footer'
  | 'map'
  | 'slider'
  | 'gallery'
  | 'tabs'
  | 'marquee'
  | 'countdown'
  | 'leadForm'
  | 'timeline';

export interface SiteSections {
  navbar: NavbarSection;
  hero: HeroSection;
  logos: LogosSection;
  bentoFeatures: BentoFeaturesSection;
  productHighlight: ProductHighlightSection;
  stats: StatsSection;
  testimonials: TestimonialsSection;
  pricing: PricingSection;
  faq: FaqSection;
  ctaFinal: CtaFinalSection;
  footer: FooterSection;
  map?: MapSection;
  slider?: SliderSection;
  gallery?: GallerySection;
  tabs?: TabsSection;
  marquee?: MarqueeSection;
  countdown?: CountdownSection;
  leadForm?: LeadFormSection;
  timeline?: TimelineSection;
}

export interface SiteAnalytics {
  views: number;
  uniqueVisitors: number;
  conversionRate: number;
  avgDuration: string;
  history: { date: string; views: number; clicks: number }[];
}

export interface SiteConfig {
  id: string;
  userId: string;
  name: string;
  slug: string;
  domain?: string;
  templateId: string;
  theme: 'light' | 'dark' | 'auto';
  accentColor: string;
  fontFamily: string;
  borderRadius: number;
  published: boolean;
  publishedAt?: string;
  createdAt: string;
  updatedAt: string;
  sectionOrder: SectionType[];
  seo: {
    title: string;
    description: string;
    keywords?: string;
    ogImage?: string;
  };
  analytics: SiteAnalytics;
  sections: SiteSections;
  customCss?: string;
}

export interface TemplateDefinition {
  id: string;
  name: string;
  tagline: string;
  category: 'saas' | 'hardware' | 'agencies' | 'luxury' | 'wellness' | 'services' | 'hospitality' | 'education' | 'portfolio' | string;
  style?: 'minimalista' | 'oscuro' | 'creativo' | 'corporativo' | 'natural' | string;
  thumbnail: string;
  description: string;
  accentColor: string;
  theme: 'light' | 'dark';
  defaultConfig: Partial<SiteConfig>;
}

export type Template = TemplateDefinition;
export type SectionConfig = any;
