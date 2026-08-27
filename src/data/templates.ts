import { TemplateDefinition, SiteConfig } from '../types';
import { SAAS_TEMPLATES } from './templates/saas';
import { HOSPITALITY_TEMPLATES } from './templates/hospitality';
import { ECOMMERCE_TEMPLATES } from './templates/ecommerce';
import { WELLNESS_TEMPLATES } from './templates/wellness';
import { SERVICES_TEMPLATES } from './templates/services';
import { EDUCATION_TEMPLATES } from './templates/education';
import { PORTFOLIO_TEMPLATES } from './templates/portfolio';
import { COMMUNITY_TEMPLATES } from './templates/community';

export const APPLE_TEMPLATES: TemplateDefinition[] = [
  ...SAAS_TEMPLATES,         // 4 Plantillas SaaS & Software Cloud
  ...HOSPITALITY_TEMPLATES,  // 4 Plantillas Hospitality & Restauración
  ...ECOMMERCE_TEMPLATES,    // 4 Plantillas E-Commerce & Retail de Autor
  ...WELLNESS_TEMPLATES,      // 4 Plantillas Salud & Bienestar
  ...SERVICES_TEMPLATES,      // 4 Plantillas Servicios Profesionales & Consultoría
  ...EDUCATION_TEMPLATES,     // 3 Plantillas Educación & Eventos
  ...PORTFOLIO_TEMPLATES,     // 4 Plantillas Creativos & Portafolios
  ...COMMUNITY_TEMPLATES      // 3 Plantillas Comunidad & ONG
];

export const TEMPLATES = APPLE_TEMPLATES;

export function getTemplateById(id: string): TemplateDefinition {
  return APPLE_TEMPLATES.find((t) => t.id === id) || APPLE_TEMPLATES[0];
}

export function createSiteFromTemplate(
  templateOrId: TemplateDefinition | string,
  customName?: string,
  chosenAccentColor?: string,
  userId: string = 'user_default'
): SiteConfig {
  const template =
    typeof templateOrId === 'string'
      ? getTemplateById(templateOrId) || APPLE_TEMPLATES[0]
      : templateOrId;

  const cfg = template.defaultConfig;
  const now = new Date().toISOString();
  const siteName = customName || template.name;
  const siteSlug = siteName
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

  const effectiveAccent = chosenAccentColor || cfg.accentColor || template.accentColor || '#00E5FF';

  return {
    id: `site_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    userId,
    name: siteName,
    slug: siteSlug,
    domain: cfg.domain || `${siteSlug}.930studio.app`,
    templateId: template.id,
    theme: cfg.theme || template.theme || 'light',
    accentColor: effectiveAccent,
    fontFamily: cfg.fontFamily || "'Plus Jakarta Sans', sans-serif",
    borderRadius: cfg.borderRadius ?? 16,
    published: false,
    publishedAt: undefined,
    createdAt: now,
    updatedAt: now,
    sectionOrder: cfg.sectionOrder || [
      'navbar',
      'hero',
      'logos',
      'bentoFeatures',
      'productHighlight',
      'stats',
      'testimonials',
      'pricing',
      'faq',
      'ctaFinal',
      'footer'
    ],
    seo: {
      title: cfg.seo?.title || `${siteName} — Web Oficial`,
      description: cfg.seo?.description || template.description,
      keywords: cfg.seo?.keywords || 'diseno web, landing page, responsive, 930 studio',
      ogImage: cfg.seo?.ogImage || template.thumbnail
    },
    analytics: {
      views: 0,
      uniqueVisitors: 0,
      conversionRate: 0,
      avgDuration: '0m 00s',
      history: []
    },
    sections: (cfg.sections as any) || {
      navbar: {
        brandName: siteName,
        logoText: siteName.toUpperCase(),
        ctaText: 'Comenzar',
        ctaLink: '#pricing',
        links: [{ label: 'Características', href: '#features' }],
        glassBlur: true,
        sticky: true
      },
      hero: {
        enabled: true,
        title: siteName,
        subtitle: template.tagline,
        primaryCta: { text: 'Descubrir', link: '#pricing' },
        imageUrl: template.thumbnail,
        style: 'centered'
      },
      logos: { enabled: false, items: [] },
      bentoFeatures: { enabled: true, title: 'Características', items: [] },
      productHighlight: { enabled: true, title: 'Producto', subtitle: '', description: '', imageUrl: template.thumbnail, specs: [] },
      stats: { enabled: true, items: [] },
      testimonials: { enabled: true, title: 'Testimonios', items: [] },
      pricing: { enabled: true, title: 'Planes', billingCycle: 'annual', plans: [] },
      faq: { enabled: true, title: 'Preguntas', items: [] },
      ctaFinal: { enabled: true, title: 'Únete hoy', subtitle: '', primaryCta: { text: 'Empezar', link: '#pricing' } },
      footer: { copyright: `© 2026 ${siteName}.`, legalLinks: [], socialLinks: [] }
    },
    customCss: cfg.customCss || ''
  };
}
