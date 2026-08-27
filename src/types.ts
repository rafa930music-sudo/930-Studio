export type PlanType = 'FREE' | 'PRO' | 'BUSINESS' | 'AGENCY' | 'free' | 'pro' | 'business' | 'agency';

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
  icon?: string;
  tag?: string;
  colSpan?: number; // 1 or 2
  imageUrl?: string;
  stat?: string;
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
  badge?: string;
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
  name?: string;
  author?: string;
  role: string;
  company?: string;
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
  ctaLink?: string;
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
  address?: string;
  city?: string;
  hours?: string;
  phone?: string;
  email?: string;
  embedUrl?: string;
  directionsUrl?: string;
  latitude?: number;
  longitude?: number;
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
  autoplay?: boolean;
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
  items?: GalleryItem[];
  images?: Array<string | { id: string; url: string; caption?: string }>;
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
  title?: string;
  subtitle?: string;
  speed?: 'slow' | 'normal' | 'fast';
  direction?: 'left' | 'right';
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
  logos?: LogosSection;
  bentoFeatures?: BentoFeaturesSection;
  productHighlight?: ProductHighlightSection;
  stats?: StatsSection;
  testimonials?: TestimonialsSection;
  pricing?: PricingSection;
  faq?: FaqSection;
  ctaFinal?: CtaFinalSection;
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

export interface ElementStyleConfig {
  // Background & Colors
  backgroundColor?: string;
  backgroundGradient?: string;
  textColor?: string;

  // Typography
  fontFamily?: string;
  fontWeight?: '300' | '400' | '500' | '600' | '700' | '800' | '900' | string;
  fontSize?: number; // in px
  fontSizeUnit?: 'px' | 'rem';
  lineHeight?: number; // e.g. 1.2, 1.5, 1.7
  letterSpacing?: number; // in px
  textAlign?: 'left' | 'center' | 'right' | 'justify';
  textTransform?: 'none' | 'uppercase' | 'lowercase' | 'capitalize';
  textDecoration?: 'none' | 'underline' | 'line-through';

  // Box Model: Padding (T, R, B, L)
  paddingTop?: number | string;
  paddingRight?: number | string;
  paddingBottom?: number | string;
  paddingLeft?: number | string;
  isPaddingLinked?: boolean;

  // Box Model: Margin (T, R, B, L)
  marginTop?: number | string;
  marginRight?: number | string;
  marginBottom?: number | string;
  marginLeft?: number | string;
  isMarginLinked?: boolean;

  // Sizing
  width?: string;
  maxWidth?: string;
  height?: string;
  minHeight?: string;

  // Layout: Flexbox / Grid
  display?: 'block' | 'flex' | 'grid' | 'inline-block';
  flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  alignItems?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
  justifyContent?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
  gap?: number; // in px
  gridCols?: number;

  // Positioning
  position?: 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky';
  top?: string;
  left?: string;
  zIndex?: number;

  // Borders & Corners
  borderRadius?: number;
  borderTopLeftRadius?: number;
  borderTopRightRadius?: number;
  borderBottomRightRadius?: number;
  borderBottomLeftRadius?: number;
  isRadiusLinked?: boolean;
  borderWidth?: number;
  borderStyle?: 'solid' | 'dashed' | 'dotted' | 'none';
  borderColor?: string;

  // Shadows & Glows
  shadowPreset?: 'none' | 'soft' | 'medium' | 'deep' | 'glow-cyan' | 'glow-magenta' | 'glow-green';
  shadowOffsetX?: number;
  shadowOffsetY?: number;
  shadowBlur?: number;
  shadowSpread?: number;
  shadowColor?: string;

  // Effects & Filters
  opacity?: number; // 0 to 100
  blur?: number; // 0 to 20px
  brightness?: number; // 50 to 150%
  contrast?: number; // 50 to 150%
  scale?: number; // 0.5 to 1.5
  rotate?: number; // -180 to 180 deg
  transitionDuration?: number; // in ms

  // Custom CSS Code
  customCss?: string;
}

export interface ElementSettingsConfig {
  // Animation
  animation?: {
    type?: 'none' | 'fadeIn' | 'slideUp' | 'slideDown' | 'slideLeft' | 'slideRight' | 'zoomIn' | 'bounce' | string;
    duration?: number;
    delay?: number;
  } | 'none' | 'fade-in' | 'slide-up' | 'slide-down' | 'slide-left' | 'slide-right' | 'zoom-in' | 'pulse';
  animationDuration?: number; // in ms
  animationDelay?: number; // in ms

  // Device Visibility
  visibility?: {
    hideOnMobile?: boolean;
    hideOnTablet?: boolean;
    hideOnDesktop?: boolean;
  };
  hideOnMobile?: boolean;
  hideOnTablet?: boolean;
  hideOnDesktop?: boolean;

  // Custom Classes & Semantic
  customId?: string;
  customClasses?: string;
  customClassName?: string;
  semanticTag?: 'section' | 'article' | 'div' | 'header' | 'footer' | 'nav' | 'aside';

  // Accessibility
  ariaLabel?: string;
  role?: string;
  altText?: string;
}

export interface SectionCustomStyle extends ElementStyleConfig {
  style?: ElementStyleConfig;
  settings?: ElementSettingsConfig;
  isLocked?: boolean;
  customName?: string;
}

export interface SavedComponent {
  id: string;
  name: string;
  category: string;
  thumbnail?: string;
  sectionType: SectionType;
  data: any;
  customStyle?: SectionCustomStyle;
  createdAt: string;
}

export interface HierarchyNode {
  id: string;
  name: string;
  type: 'section' | 'container' | 'row' | 'column' | 'element';
  sectionKey?: SectionType;
  children?: HierarchyNode[];
  isLocked?: boolean;
  isVisible?: boolean;
  icon?: string;
}

export type BreakpointType = 'base' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

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
  sectionStyles?: Partial<Record<SectionType, SectionCustomStyle>>;
  customSectionStyles?: Partial<Record<SectionType, SectionCustomStyle>>;
  elementSettings?: Partial<Record<SectionType, ElementSettingsConfig>>;
  savedComponents?: SavedComponent[];
  seo: {
    title: string;
    description: string;
    keywords?: string;
    ogImage?: string;
    canonicalUrl?: string;
    author?: string;
    robots?: string;
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
