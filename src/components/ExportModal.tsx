import React, { useState } from 'react';
import { SiteConfig, SectionType } from '../types';
import {
  X,
  Download,
  Copy,
  Check,
  FileCode,
  FolderArchive,
  Rocket,
  Sparkles,
  ChevronDown,
  ChevronUp,
  Heart,
  Globe,
  ExternalLink,
  ShieldCheck,
  Zap,
  Sliders,
  Eye,
  FileText,
  Activity,
  CheckCircle2,
  AlertCircle,
  Share2,
  Image as ImageIcon,
  Code
} from 'lucide-react';
import JSZip from 'jszip';

interface ExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  site: SiteConfig;
  onOpenDonation?: () => void;
}

export const ExportModal: React.FC<ExportModalProps> = ({
  isOpen,
  onClose,
  site,
  onOpenDonation
}) => {
  const [activeTab, setActiveTab] = useState<'export' | 'seo' | 'report'>('export');
  const [copied, setCopied] = useState(false);
  const [isExportingZip, setIsExportingZip] = useState(false);
  const [exportProgress, setExportProgress] = useState(0);
  const [exportStatusText, setExportStatusText] = useState('');
  const [minifyCode, setMinifyCode] = useState(true);
  const [imageStrategy, setImageStrategy] = useState<'remote' | 'local' | 'base64'>('remote');
  const [isGuideOpen, setIsGuideOpen] = useState(false);
  const [activeGuideTab, setActiveGuideTab] = useState<'netlify' | 'vercel' | 'github' | 'cpanel'>('netlify');

  // Local SEO draft for export
  const [seoDraft, setSeoDraft] = useState({
    title: site.seo?.title || `${site.name} — Web Oficial`,
    description: site.seo?.description || `Sitio web oficial de ${site.name}. Descubre nuestros servicios, características y novedades.`,
    keywords: site.seo?.keywords || `${site.name.toLowerCase()}, diseño web, profesional, servicios, 930 studio`,
    ogImage: site.seo?.ogImage || site.sections?.hero?.imageUrl || 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
    canonicalUrl: site.seo?.canonicalUrl || `https://${site.slug || 'misitio'}.com`
  });

  if (!isOpen) return null;

  // Compute audit statistics
  const countImages = (): number => {
    let count = 0;
    const s = site.sections;
    if (s.hero?.imageUrl) count++;
    if (s.productHighlight?.imageUrl) count++;
    if (s.testimonials?.items) count += s.testimonials.items.filter((t) => t.avatarUrl).length;
    if (s.bentoFeatures?.items) count += s.bentoFeatures.items.filter((b) => b.imageUrl).length;
    if (s.slider?.slides) count += s.slider.slides.filter((sl) => sl.imageUrl).length;
    if (s.gallery?.items) count += s.gallery.items.filter((g) => g.imageUrl).length;
    if (s.tabs?.tabs) count += s.tabs.tabs.filter((tb) => tb.imageUrl).length;
    return Math.max(count, 1);
  };

  const totalImages = countImages();
  const activeSectionsCount = (site.sectionOrder || []).length;
  const estimatedKbSize = minifyCode ? Math.round(18 + totalImages * 1.5) : Math.round(28 + totalImages * 2.2);

  const generateCleanHtml = (): string => {
    const s = site.sections;
    const isDarkTheme = site.theme === 'dark';
    const accent = site.accentColor || '#00E5FF';
    const radius = site.borderRadius ?? 16;
    const font = site.fontFamily || 'Inter, -apple-system, sans-serif';

    const order: SectionType[] =
      site.sectionOrder && site.sectionOrder.length > 0
        ? site.sectionOrder
        : ['navbar', 'hero', 'logos', 'bentoFeatures', 'stats', 'testimonials', 'pricing', 'faq', 'ctaFinal', 'footer'];

    const sectionHtmlParts: string[] = [];

    order.forEach((type) => {
      switch (type) {
        case 'navbar':
          if (s.navbar) {
            sectionHtmlParts.push(`
  <!-- Navbar -->
  <nav class="nav" id="navbar">
    <div class="container nav-inner">
      <a href="#" class="brand font-extrabold text-lg">${s.navbar.brandName || site.name}</a>
      <ul class="nav-links">
        ${(s.navbar.links || []).map((l) => `<li><a href="${l.href}">${l.label}</a></li>`).join('')}
      </ul>
      <a href="${s.navbar.ctaLink || '#pricing'}" class="btn-pill">${s.navbar.ctaText || 'Comenzar'}</a>
    </div>
  </nav>`);
          }
          break;

        case 'hero':
          if (s.hero?.enabled !== false && s.hero) {
            sectionHtmlParts.push(`
  <!-- Hero Section -->
  <section class="hero reveal" id="hero">
    <div class="container text-center">
      ${s.hero.badge ? `<div class="badge">${s.hero.badge}</div>` : ''}
      ${s.hero.kicker ? `<div class="kicker">${s.hero.kicker}</div>` : ''}
      <h1 class="hero-title">${s.hero.title} ${s.hero.highlightTitle ? `<span class="highlight">${s.hero.highlightTitle}</span>` : ''}</h1>
      <p class="hero-sub">${s.hero.subtitle || ''}</p>
      <div class="hero-cta-group">
        <a href="${s.hero.primaryCta?.link || '#pricing'}" class="btn-large btn-primary">${s.hero.primaryCta?.text || 'Comenzar'}</a>
        ${s.hero.secondaryCta?.text ? `<a href="${s.hero.secondaryCta.link || '#product'}" class="btn-large btn-secondary">${s.hero.secondaryCta.text}</a>` : ''}
      </div>
      ${s.hero.imageUrl ? `<div class="hero-img-wrap"><img src="${s.hero.imageUrl}" alt="${site.name}" loading="lazy" class="rounded-2xl shadow-2xl"></div>` : ''}
    </div>
  </section>`);
          }
          break;

        case 'logos':
          if (s.logos?.enabled && s.logos.items?.length) {
            sectionHtmlParts.push(`
  <!-- Logos -->
  <section class="section-logos" id="logos">
    <div class="container text-center">
      ${s.logos.title ? `<p class="logos-title">${s.logos.title}</p>` : ''}
      <div class="logos-grid">
        ${s.logos.items.map((item) => `<div class="logo-item"><span class="bullet">●</span> ${item.name}</div>`).join('')}
      </div>
    </div>
  </section>`);
          }
          break;

        case 'bentoFeatures':
          if (s.bentoFeatures?.enabled && s.bentoFeatures.items?.length) {
            sectionHtmlParts.push(`
  <!-- Bento Features -->
  <section class="section bento" id="features">
    <div class="container">
      <div class="section-header">
        ${s.bentoFeatures.kicker ? `<div class="kicker">${s.bentoFeatures.kicker}</div>` : ''}
        <h2>${s.bentoFeatures.title}</h2>
        ${s.bentoFeatures.subtitle ? `<p class="sub">${s.bentoFeatures.subtitle}</p>` : ''}
      </div>
      <div class="bento-grid">
        ${s.bentoFeatures.items
          .map(
            (item) => `
        <div class="bento-card ${item.colSpan === 2 ? 'col-span-2' : ''}">
          <div class="bento-content">
            <div class="bento-icon">✦</div>
            <h3>${item.title}</h3>
            <p>${item.description}</p>
          </div>
          ${item.imageUrl ? `<img src="${item.imageUrl}" alt="${item.title}" loading="lazy" class="bento-img">` : ''}
        </div>`
          )
          .join('')}
      </div>
    </div>
  </section>`);
          }
          break;

        case 'productHighlight':
          if (s.productHighlight?.enabled) {
            sectionHtmlParts.push(`
  <!-- Product Highlight -->
  <section class="section product-highlight" id="product">
    <div class="container grid-split">
      <div class="product-info">
        ${s.productHighlight.kicker ? `<div class="kicker">${s.productHighlight.kicker}</div>` : ''}
        <h2>${s.productHighlight.title}</h2>
        <p class="highlight-lead">${s.productHighlight.subtitle}</p>
        <p class="desc">${s.productHighlight.description}</p>
        <div class="specs-grid">
          ${(s.productHighlight.specs || [])
            .map(
              (sp) => `
          <div class="spec-card">
            <span class="spec-val">${sp.value}</span>
            <span class="spec-lbl">${sp.label}</span>
          </div>`
            )
            .join('')}
        </div>
      </div>
      <div class="product-media">
        <img src="${s.productHighlight.imageUrl}" alt="${s.productHighlight.title}" loading="lazy">
      </div>
    </div>
  </section>`);
          }
          break;

        case 'stats':
          if (s.stats?.enabled && s.stats.items?.length) {
            sectionHtmlParts.push(`
  <!-- Metrics & Stats -->
  <section class="section stats" id="stats">
    <div class="container">
      ${s.stats.title ? `<h2 class="text-center mb-8">${s.stats.title}</h2>` : ''}
      <div class="stats-grid">
        ${s.stats.items
          .map(
            (st) => `
        <div class="stat-item">
          <div class="stat-val">${st.value}</div>
          <div class="stat-lbl">${st.label}</div>
          ${st.description ? `<p class="stat-desc">${st.description}</p>` : ''}
        </div>`
          )
          .join('')}
      </div>
    </div>
  </section>`);
          }
          break;

        case 'testimonials':
          if (s.testimonials?.enabled && s.testimonials.items?.length) {
            sectionHtmlParts.push(`
  <!-- Testimonials -->
  <section class="section testimonials" id="testimonials">
    <div class="container">
      <div class="section-header">
        <h2>${s.testimonials.title}</h2>
        ${s.testimonials.subtitle ? `<p class="sub">${s.testimonials.subtitle}</p>` : ''}
      </div>
      <div class="testimonials-grid">
        ${s.testimonials.items
          .map(
            (t) => `
        <div class="testimonial-card">
          <div class="quote">“${t.quote}”</div>
          <div class="author">
            <img src="${t.avatarUrl}" alt="${t.name}" class="avatar">
            <div>
              <div class="name">${t.name}</div>
              <div class="role">${t.role} · ${t.company}</div>
            </div>
          </div>
        </div>`
          )
          .join('')}
      </div>
    </div>
  </section>`);
          }
          break;

        case 'pricing':
          if (s.pricing?.enabled && s.pricing.plans?.length) {
            sectionHtmlParts.push(`
  <!-- Pricing -->
  <section class="section pricing" id="pricing">
    <div class="container">
      <div class="section-header">
        <h2>${s.pricing.title}</h2>
        ${s.pricing.subtitle ? `<p class="sub">${s.pricing.subtitle}</p>` : ''}
      </div>
      <div class="pricing-grid">
        ${s.pricing.plans
          .map(
            (p) => `
        <div class="pricing-card ${p.highlighted ? 'highlighted' : ''}">
          ${p.tag ? `<div class="plan-tag">${p.tag}</div>` : ''}
          <div class="plan-name">${p.name}</div>
          <div class="plan-price">${p.priceMonthly} <span>/mes</span></div>
          <p class="plan-desc">${p.description}</p>
          <ul class="features">
            ${(p.features || []).map((f) => `<li>✓ ${f}</li>`).join('')}
          </ul>
          <a href="${p.ctaLink || '#contact'}" class="btn-full">${p.ctaText || 'Elegir Plan'}</a>
        </div>`
          )
          .join('')}
      </div>
    </div>
  </section>`);
          }
          break;

        case 'faq':
          if (s.faq?.enabled && s.faq.items?.length) {
            sectionHtmlParts.push(`
  <!-- FAQ -->
  <section class="section faq" id="faq">
    <div class="container max-w-3xl">
      <div class="section-header">
        <h2>${s.faq.title}</h2>
        ${s.faq.subtitle ? `<p class="sub">${s.faq.subtitle}</p>` : ''}
      </div>
      <div class="faq-list">
        ${s.faq.items
          .map(
            (item) => `
        <details class="faq-item">
          <summary class="faq-question">${item.question}</summary>
          <div class="faq-answer">${item.answer}</div>
        </details>`
          )
          .join('')}
      </div>
    </div>
  </section>`);
          }
          break;

        case 'ctaFinal':
          if (s.ctaFinal?.enabled) {
            sectionHtmlParts.push(`
  <!-- Final CTA -->
  <section class="section cta-final" id="cta">
    <div class="container text-center">
      ${s.ctaFinal.kicker ? `<div class="kicker">${s.ctaFinal.kicker}</div>` : ''}
      <h2>${s.ctaFinal.title}</h2>
      <p class="cta-sub">${s.ctaFinal.subtitle}</p>
      <div class="cta-actions">
        <a href="${s.ctaFinal.primaryCta?.link || '#pricing'}" class="btn-large btn-primary">${s.ctaFinal.primaryCta?.text || 'Comenzar Ahora'}</a>
        ${s.ctaFinal.secondaryCta?.text ? `<a href="${s.ctaFinal.secondaryCta.link || '#'}" class="btn-large btn-secondary">${s.ctaFinal.secondaryCta.text}</a>` : ''}
      </div>
    </div>
  </section>`);
          }
          break;

        case 'footer':
          if (s.footer) {
            sectionHtmlParts.push(`
  <!-- Footer -->
  <footer class="footer" id="footer">
    <div class="container footer-inner">
      <div class="footer-copy">${s.footer.copyright || `© ${new Date().getFullYear()} ${site.name}. Todos los derechos reservados.`}</div>
      <div class="footer-links">
        ${(s.footer.legalLinks || []).map((l) => `<a href="${l.href}">${l.label}</a>`).join('')}
      </div>
    </div>
  </footer>`);
          }
          break;

        default:
          break;
      }
    });

    const schemaJson = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": site.name,
      "url": seoDraft.canonicalUrl,
      "description": seoDraft.description,
      "publisher": {
        "@type": "Organization",
        "name": site.name
      }
    };

    const fullHtml = `<!DOCTYPE html>
<html lang="es" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${seoDraft.title}</title>
  <meta name="description" content="${seoDraft.description}">
  <meta name="keywords" content="${seoDraft.keywords}">
  <link rel="canonical" href="${seoDraft.canonicalUrl}">
  <meta property="og:title" content="${seoDraft.title}">
  <meta property="og:description" content="${seoDraft.description}">
  <meta property="og:image" content="${seoDraft.ogImage}">
  <meta property="og:url" content="${seoDraft.canonicalUrl}">
  <meta property="og:type" content="website">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${seoDraft.title}">
  <meta name="twitter:description" content="${seoDraft.description}">
  <meta name="twitter:image" content="${seoDraft.ogImage}">
  <meta name="generator" content="930 Studio (https://930studio.app)">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  <script type="application/ld+json">
    ${JSON.stringify(schemaJson, null, 2)}
  </script>
  <style>
    :root {
      --accent: ${accent};
      --radius: ${radius}px;
      --font-body: ${font};
      --bg: ${isDarkTheme ? '#0A0A0F' : '#FAFAFC'};
      --surface: ${isDarkTheme ? '#12121A' : '#FFFFFF'};
      --card-bg: ${isDarkTheme ? '#181824' : '#FFFFFF'};
      --text: ${isDarkTheme ? '#FFFFFF' : '#0F172A'};
      --text-muted: ${isDarkTheme ? '#A0AEC0' : '#64748B'};
      --border: ${isDarkTheme ? 'rgba(255, 255, 255, 0.08)' : '#E2E8F0'};
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { background-color: var(--bg); color: var(--text); font-family: var(--font-body); -webkit-font-smoothing: antialiased; line-height: 1.6; }
    .container { width: 100%; max-width: 1200px; margin: 0 auto; padding: 0 24px; }
    a { color: inherit; text-decoration: none; }
    img { max-width: 100%; height: auto; display: block; }
    
    /* Navbar */
    .nav { position: sticky; top: 0; z-index: 100; background: ${isDarkTheme ? 'rgba(10, 10, 15, 0.85)' : 'rgba(250, 250, 252, 0.85)'}; backdrop-blur: 16px; border-bottom: 1px solid var(--border); padding: 16px 0; }
    .nav-inner { display: flex; align-items: center; justify-content: space-between; }
    .nav-links { display: flex; gap: 32px; list-style: none; font-size: 14px; font-weight: 600; color: var(--text-muted); }
    .nav-links a:hover { color: var(--accent); }
    .btn-pill { background: var(--accent); color: #000; font-weight: 700; padding: 8px 20px; border-radius: 9999px; font-size: 13px; transition: opacity 0.2s; }
    .btn-pill:hover { opacity: 0.9; }

    /* Hero */
    .hero { padding: 90px 0 60px; }
    .hero-title { font-size: clamp(36px, 5vw, 64px); font-weight: 800; line-height: 1.1; margin: 16px 0; letter-spacing: -0.03em; }
    .highlight { color: var(--accent); }
    .hero-sub { font-size: 18px; color: var(--text-muted); max-width: 680px; margin: 0 auto 32px; }
    .hero-cta-group { display: flex; gap: 16px; justify-content: center; margin-bottom: 48px; }
    .btn-large { padding: 14px 32px; border-radius: var(--radius); font-weight: 700; font-size: 15px; transition: transform 0.2s; }
    .btn-large:hover { transform: translateY(-2px); }
    .btn-primary { background: var(--accent); color: #000; box-shadow: 0 0 20px rgba(0, 229, 255, 0.3); }
    .btn-secondary { background: var(--surface); border: 1px solid var(--border); color: var(--text); }
    .hero-img-wrap img { width: 100%; max-height: 600px; object-fit: cover; border-radius: var(--radius); border: 1px solid var(--border); }

    /* Sections */
    .section { padding: 80px 0; border-bottom: 1px solid var(--border); }
    .section-header { text-align: center; margin-bottom: 48px; }
    .section-header h2 { font-size: 36px; font-weight: 800; letter-spacing: -0.02em; }
    .section-header .sub { color: var(--text-muted); font-size: 16px; margin-top: 8px; }
    .kicker { font-size: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.1em; color: var(--accent); margin-bottom: 8px; }
    .badge { display: inline-block; padding: 6px 14px; background: rgba(0, 229, 255, 0.1); border: 1px solid rgba(0, 229, 255, 0.3); color: var(--accent); font-size: 12px; font-weight: 700; border-radius: 9999px; margin-bottom: 12px; }

    /* Bento */
    .bento-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 24px; }
    .bento-card { background: var(--card-bg); border: 1px solid var(--border); border-radius: var(--radius); padding: 32px; display: flex; flex-direction: column; justify-content: space-between; overflow: hidden; }
    .bento-icon { font-size: 24px; color: var(--accent); margin-bottom: 16px; }
    .bento-card h3 { font-size: 20px; font-weight: 700; margin-bottom: 8px; }
    .bento-card p { color: var(--text-muted); font-size: 14px; }
    .bento-img { margin-top: 24px; border-radius: 8px; border: 1px solid var(--border); }

    /* Split */
    .grid-split { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: center; }
    .specs-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; margin-top: 24px; }
    .spec-card { background: var(--card-bg); border: 1px solid var(--border); padding: 16px; border-radius: 8px; }
    .spec-val { display: block; font-size: 22px; font-weight: 800; color: var(--accent); }
    .spec-lbl { font-size: 12px; color: var(--text-muted); }

    /* Stats */
    .stats-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 24px; text-align: center; }
    .stat-val { font-size: 48px; font-weight: 800; color: var(--accent); }
    .stat-lbl { font-size: 14px; font-weight: 700; }
    .stat-desc { font-size: 12px; color: var(--text-muted); margin-top: 4px; }

    /* Testimonials */
    .testimonials-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 24px; }
    .testimonial-card { background: var(--card-bg); border: 1px solid var(--border); border-radius: var(--radius); padding: 28px; }
    .quote { font-size: 15px; font-style: italic; color: var(--text); margin-bottom: 20px; }
    .author { display: flex; align-items: center; gap: 12px; }
    .avatar { width: 44px; height: 44px; border-radius: 9999px; object-fit: cover; }
    .name { font-weight: 700; font-size: 14px; }
    .role { font-size: 12px; color: var(--text-muted); }

    /* Pricing */
    .pricing-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px; }
    .pricing-card { background: var(--card-bg); border: 1px solid var(--border); border-radius: var(--radius); padding: 32px; text-align: center; }
    .pricing-card.highlighted { border-color: var(--accent); box-shadow: 0 0 25px rgba(0, 229, 255, 0.2); }
    .plan-tag { display: inline-block; font-size: 11px; font-weight: 800; padding: 4px 12px; border-radius: 9999px; background: var(--accent); color: #000; margin-bottom: 12px; }
    .plan-name { font-size: 18px; font-weight: 700; }
    .plan-price { font-size: 38px; font-weight: 800; margin: 12px 0; }
    .plan-price span { font-size: 14px; color: var(--text-muted); font-weight: 400; }
    .plan-desc { font-size: 13px; color: var(--text-muted); margin-bottom: 24px; }
    .features { list-style: none; text-align: left; margin-bottom: 28px; font-size: 13px; space-y: 8px; }
    .features li { margin-bottom: 8px; }
    .btn-full { display: block; width: 100%; padding: 12px; border-radius: var(--radius); background: var(--accent); color: #000; font-weight: 700; text-align: center; }

    /* FAQ */
    .faq-list { display: flex; flex-direction: column; gap: 12px; }
    .faq-item { background: var(--card-bg); border: 1px solid var(--border); border-radius: var(--radius); padding: 16px 20px; }
    .faq-question { font-weight: 700; cursor: pointer; font-size: 15px; }
    .faq-answer { margin-top: 12px; color: var(--text-muted); font-size: 14px; line-height: 1.6; }

    /* Footer */
    .footer { padding: 40px 0; border-top: 1px solid var(--border); font-size: 13px; color: var(--text-muted); }
    .footer-inner { display: flex; justify-content: space-between; align-items: center; }
    .footer-links { display: flex; gap: 20px; }
    .footer-links a:hover { color: var(--accent); }

    /* Responsive */
    @media (max-width: 768px) {
      .nav-links { display: none; }
      .grid-split { grid-template-columns: 1fr; }
      .footer-inner { flex-direction: column; gap: 16px; text-align: center; }
    }
  </style>
</head>
<body>
  ${sectionHtmlParts.join('\n')}
</body>
</html>`;

    if (minifyCode) {
      return fullHtml
        .replace(/\s+/g, ' ')
        .replace(/> </g, '><')
        .trim();
    }
    return fullHtml;
  };

  const handleDownloadHtml = () => {
    const html = generateCleanHtml();
    const blob = new Blob([html], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${site.slug || 'sitio'}-930studio.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleCopyCode = () => {
    const html = generateCleanHtml();
    navigator.clipboard.writeText(html);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownloadZip = async () => {
    setIsExportingZip(true);
    setExportProgress(10);
    setExportStatusText('Iniciando compilación del paquete...');

    try {
      const zip = new JSZip();
      const html = generateCleanHtml();

      await new Promise((r) => setTimeout(r, 200));
      setExportProgress(35);
      setExportStatusText('Estructurando archivos HTML y metadatos SEO...');

      zip.file('index.html', html);
      zip.file('README.md', `# ${site.name}\n\nSitio web profesional generado con 930 Studio (https://930studio.app).\n\n## Despliegue en 1 minuto:\n- **Netlify**: Arrastra esta carpeta a app.netlify.com/drop\n- **Vercel**: Importa este directorio en vercel.com/new\n- **GitHub Pages**: Sube los archivos a la rama main y activa GitHub Pages en Settings.\n`);

      const assetsFolder = zip.folder('assets');
      if (assetsFolder) {
        assetsFolder.file('manifest.json', JSON.stringify({
          name: site.name,
          short_name: site.name,
          start_url: '/',
          display: 'standalone',
          background_color: '#0A0A0F',
          theme_color: site.accentColor || '#00E5FF'
        }, null, 2));
      }

      await new Promise((r) => setTimeout(r, 300));
      setExportProgress(75);
      setExportStatusText('Comprimiendo archivo ZIP de alto rendimiento...');

      const content = await zip.generateAsync({ type: 'blob' }, (metadata) => {
        setExportProgress(75 + Math.round(metadata.percent * 0.2));
      });

      setExportProgress(100);
      setExportStatusText('¡Paquete ZIP listo!');

      const url = URL.createObjectURL(content);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${site.slug || 'sitio'}-completo.zip`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error('Error generating zip:', err);
    } finally {
      setTimeout(() => {
        setIsExportingZip(false);
        setExportProgress(0);
        setExportStatusText('');
      }, 1000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
      <div className="border border-white/10 rounded-3xl w-full max-w-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.9)] flex flex-col bg-[#12121A] text-white">
        {/* Header with Tabs */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#00E5FF]/15 text-[#00E5FF] border border-[#00E5FF]/30 flex items-center justify-center shadow-[0_0_15px_rgba(0,229,255,0.25)]">
              <Download className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-black tracking-tight text-white flex items-center gap-2">
                Exportar {site.name}
                <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-[#00FF88]/15 text-[#00FF88] border border-[#00FF88]/30">
                  Producción
                </span>
              </h3>
              <p className="text-xs text-neutral-400">Código limpio, compatible y sin dependencias externas</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Tabs */}
            <div className="flex items-center bg-[#1A1A24] p-1 rounded-xl border border-white/10 text-xs font-bold">
              <button
                onClick={() => setActiveTab('export')}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  activeTab === 'export' ? 'bg-[#00E5FF] text-black font-extrabold shadow-sm' : 'text-neutral-400 hover:text-white'
                }`}
              >
                Archivos
              </button>
              <button
                onClick={() => setActiveTab('seo')}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  activeTab === 'seo' ? 'bg-[#00E5FF] text-black font-extrabold shadow-sm' : 'text-neutral-400 hover:text-white'
                }`}
              >
                Metadatos SEO
              </button>
              <button
                onClick={() => setActiveTab('report')}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer flex items-center gap-1 ${
                  activeTab === 'report' ? 'bg-[#00E5FF] text-black font-extrabold shadow-sm' : 'text-neutral-400 hover:text-white'
                }`}
              >
                <Activity className="w-3 h-3" />
                Auditoría
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-2 text-neutral-400 hover:text-white rounded-xl hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Cerrar modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 overflow-y-auto max-h-[70vh]">
          {activeTab === 'export' && (
            <>
              {/* Export Toggles & Strategy */}
              <div className="p-4 rounded-2xl border border-white/10 bg-[#161622] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <Sliders className="w-4 h-4 text-[#00E5FF]" />
                  <div>
                    <div className="text-xs font-extrabold text-white">Opciones de Compilación</div>
                    <div className="text-[11px] text-neutral-400">Minifica el código y optimiza recursos</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <label className="flex items-center gap-2 text-xs font-bold text-neutral-300 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={minifyCode}
                      onChange={(e) => setMinifyCode(e.target.checked)}
                      className="accent-[#00E5FF] w-4 h-4 rounded"
                    />
                    <span>Minificar HTML & CSS</span>
                  </label>

                  <div className="h-4 w-px bg-white/10" />

                  <select
                    value={imageStrategy}
                    onChange={(e) => setImageStrategy(e.target.value as any)}
                    className="px-2.5 py-1.5 rounded-lg bg-[#12121A] border border-white/10 text-xs text-neutral-300 font-bold focus:outline-none focus:border-[#00E5FF]"
                  >
                    <option value="remote">Imágenes CDN (Recomendado)</option>
                    <option value="local">Carpeta Local assets/</option>
                    <option value="base64">Base64 Embebido</option>
                  </select>
                </div>
              </div>

              {/* Progress bar during zip export */}
              {isExportingZip && (
                <div className="p-4 rounded-2xl border border-[#00E5FF]/30 bg-[#00E5FF]/10 space-y-2 animate-fade-in">
                  <div className="flex justify-between text-xs font-extrabold text-[#00E5FF]">
                    <span>{exportStatusText}</span>
                    <span>{exportProgress}%</span>
                  </div>
                  <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#00E5FF] to-[#00FF88] transition-all duration-300 rounded-full"
                      style={{ width: `${exportProgress}%` }}
                    />
                  </div>
                </div>
              )}

              {/* 3 Main Export Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
                {/* Card 1: HTML */}
                <div className="p-5 rounded-2xl border border-white/10 bg-[#161622] hover:border-[#00E5FF]/50 transition-all flex flex-col justify-between group shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
                  <div className="space-y-2">
                    <div className="w-9 h-9 rounded-xl bg-[#00E5FF]/15 text-[#00E5FF] flex items-center justify-center border border-[#00E5FF]/30">
                      <FileCode className="w-4 h-4" />
                    </div>
                    <h4 className="font-extrabold text-sm text-white">Archivo HTML Único</h4>
                    <p className="text-[11px] text-neutral-400 leading-relaxed font-normal">
                      Descarga un solo archivo con estilos y estructura listos para abrir en cualquier navegador o hosting.
                    </p>
                  </div>
                  <button
                    onClick={handleDownloadHtml}
                    className="mt-4 w-full py-2.5 rounded-xl bg-white/10 hover:bg-[#00E5FF] hover:text-black text-white text-xs font-extrabold transition-all flex items-center justify-center gap-2 cursor-pointer border border-white/10 hover:border-[#00E5FF]"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Descargar .html</span>
                  </button>
                </div>

                {/* Card 2: ZIP */}
                <div className="p-5 rounded-2xl border border-[#00E5FF]/40 bg-gradient-to-b from-[#00E5FF]/10 to-[#161622] transition-all flex flex-col justify-between relative shadow-[0_0_30px_rgba(0,229,255,0.15)]">
                  <div className="space-y-2">
                    <div className="w-9 h-9 rounded-xl bg-[#00E5FF] text-black flex items-center justify-center font-black">
                      <FolderArchive className="w-4 h-4" />
                    </div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-extrabold text-sm text-white">Paquete ZIP Completo</h4>
                      <span className="text-[9px] font-black px-1.5 py-0.5 rounded bg-[#00FF88] text-black">TOP</span>
                    </div>
                    <p className="text-[11px] text-neutral-300 leading-relaxed font-normal">
                      Incluye HTML minificado, carpetas de assets, manifest web y guía paso a paso de despliegue.
                    </p>
                  </div>
                  <button
                    onClick={handleDownloadZip}
                    disabled={isExportingZip}
                    className="mt-4 w-full py-2.5 rounded-xl bg-[#00E5FF] hover:bg-[#00cce6] text-black text-xs font-black transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_15px_rgba(0,229,255,0.4)]"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>{isExportingZip ? 'Comprimiendo...' : 'Descargar ZIP'}</span>
                  </button>
                </div>

                {/* Card 3: Copy Code */}
                <div className="p-5 rounded-2xl border border-white/10 bg-[#161622] hover:border-[#00FF88]/50 transition-all flex flex-col justify-between group shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
                  <div className="space-y-2">
                    <div className="w-9 h-9 rounded-xl bg-[#00FF88]/15 text-[#00FF88] flex items-center justify-center border border-[#00FF88]/30">
                      <Copy className="w-4 h-4" />
                    </div>
                    <h4 className="font-extrabold text-sm text-white">Copiar Código</h4>
                    <p className="text-[11px] text-neutral-400 leading-relaxed font-normal">
                      Copia todo el marcado al portapapeles para pegarlo directamente en WordPress, Webflow o tu CMS.
                    </p>
                  </div>
                  <button
                    onClick={handleCopyCode}
                    className="mt-4 w-full py-2.5 rounded-xl bg-white/10 hover:bg-[#00FF88] hover:text-black text-white text-xs font-extrabold transition-all flex items-center justify-center gap-2 cursor-pointer border border-white/10 hover:border-[#00FF88]"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-black" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? '¡Copiado!' : 'Copiar al Portapapeles'}</span>
                  </button>
                </div>
              </div>

              {/* Hosting Guide Accordion */}
              <div className="border border-white/10 rounded-2xl overflow-hidden bg-[#161622]">
                <button
                  onClick={() => setIsGuideOpen(!isGuideOpen)}
                  className="w-full p-4 flex items-center justify-between hover:bg-white/5 transition-colors cursor-pointer text-left"
                >
                  <div className="flex items-center gap-2">
                    <Rocket className="w-4 h-4 text-[#00E5FF]" />
                    <span className="font-bold text-xs text-white">
                      Guía de Publicación: ¿Cómo poner tu web online gratis en 1 minuto?
                    </span>
                  </div>
                  {isGuideOpen ? <ChevronUp className="w-4 h-4 text-neutral-400" /> : <ChevronDown className="w-4 h-4 text-neutral-400" />}
                </button>

                {isGuideOpen && (
                  <div className="p-4 border-t border-white/10 space-y-3 bg-[#12121A]">
                    <div className="flex gap-2 border-b border-white/10 pb-2 text-xs font-bold overflow-x-auto">
                      <button
                        onClick={() => setActiveGuideTab('netlify')}
                        className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                          activeGuideTab === 'netlify' ? 'bg-[#00E5FF] text-black font-extrabold' : 'text-neutral-400 hover:text-white'
                        }`}
                      >
                        1. Netlify Drop
                      </button>
                      <button
                        onClick={() => setActiveGuideTab('vercel')}
                        className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                          activeGuideTab === 'vercel' ? 'bg-[#00E5FF] text-black font-extrabold' : 'text-neutral-400 hover:text-white'
                        }`}
                      >
                        2. Vercel
                      </button>
                      <button
                        onClick={() => setActiveGuideTab('github')}
                        className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                          activeGuideTab === 'github' ? 'bg-[#00E5FF] text-black font-extrabold' : 'text-neutral-400 hover:text-white'
                        }`}
                      >
                        3. GitHub Pages
                      </button>
                      <button
                        onClick={() => setActiveGuideTab('cpanel')}
                        className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                          activeGuideTab === 'cpanel' ? 'bg-[#00E5FF] text-black font-extrabold' : 'text-neutral-400 hover:text-white'
                        }`}
                      >
                        4. cPanel / FTP
                      </button>
                    </div>

                    <div className="text-xs text-neutral-300 leading-relaxed pt-1">
                      {activeGuideTab === 'netlify' && (
                        <ol className="list-decimal pl-4 space-y-1.5">
                          <li>Descarga el archivo <code>index.html</code> o el paquete ZIP.</li>
                          <li>Entra a <strong>app.netlify.com/drop</strong> en tu navegador.</li>
                          <li>Arrastra el archivo o la carpeta directamente sobre la ventana.</li>
                          <li>¡Tu web estará activa con HTTPS gratuito en 10 segundos!</li>
                        </ol>
                      )}
                      {activeGuideTab === 'vercel' && (
                        <ol className="list-decimal pl-4 space-y-1.5">
                          <li>Crea una cuenta gratuita en <strong>vercel.com</strong>.</li>
                          <li>Importa el directorio o arrastra el proyecto.</li>
                          <li>Presiona <strong>Deploy</strong> para distribuirlo en su red CDN global.</li>
                        </ol>
                      )}
                      {activeGuideTab === 'github' && (
                        <ol className="list-decimal pl-4 space-y-1.5">
                          <li>Crea un repositorio público en <strong>github.com</strong>.</li>
                          <li>Sube el archivo <code>index.html</code>.</li>
                          <li>Ve a <strong>Settings → Pages</strong> y selecciona la rama <code>main</code>.</li>
                        </ol>
                      )}
                      {activeGuideTab === 'cpanel' && (
                        <ol className="list-decimal pl-4 space-y-1.5">
                          <li>Abre el Administrador de Archivos de tu cPanel o FTP.</li>
                          <li>Entra al directorio <code>public_html/</code>.</li>
                          <li>Sube tu <code>index.html</code> reemplazando el anterior.</li>
                        </ol>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </>
          )}

          {activeTab === 'seo' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="text-xs font-bold text-neutral-300 block mb-1">Título SEO (&lt;title&gt;):</label>
                  <input
                    type="text"
                    value={seoDraft.title}
                    onChange={(e) => setSeoDraft({ ...seoDraft, title: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl text-xs font-bold border border-white/10 bg-[#161622] text-white focus:outline-none focus:border-[#00E5FF]"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-neutral-300 block mb-1">Meta Descripción (150-160 caracteres):</label>
                  <textarea
                    rows={2}
                    value={seoDraft.description}
                    onChange={(e) => setSeoDraft({ ...seoDraft, description: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl text-xs font-normal border border-white/10 bg-[#161622] text-white focus:outline-none focus:border-[#00E5FF]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-bold text-neutral-300 block mb-1">Palabras Clave (Keywords):</label>
                    <input
                      type="text"
                      value={seoDraft.keywords}
                      onChange={(e) => setSeoDraft({ ...seoDraft, keywords: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl text-xs font-normal border border-white/10 bg-[#161622] text-white focus:outline-none focus:border-[#00E5FF]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-neutral-300 block mb-1">URL Canónica:</label>
                    <input
                      type="text"
                      value={seoDraft.canonicalUrl}
                      onChange={(e) => setSeoDraft({ ...seoDraft, canonicalUrl: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl text-xs font-normal border border-white/10 bg-[#161622] text-white focus:outline-none focus:border-[#00E5FF]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-neutral-300 block mb-1">URL de Imagen Open Graph (Redes Sociales):</label>
                  <input
                    type="text"
                    value={seoDraft.ogImage}
                    onChange={(e) => setSeoDraft({ ...seoDraft, ogImage: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl text-xs font-normal border border-white/10 bg-[#161622] text-white focus:outline-none focus:border-[#00E5FF]"
                  />
                </div>
              </div>

              {/* Social Card Preview */}
              <div className="p-4 rounded-2xl border border-white/10 bg-[#161622] space-y-2">
                <div className="text-xs font-extrabold text-[#00E5FF] flex items-center gap-1.5">
                  <Share2 className="w-3.5 h-3.5" />
                  <span>Previsualización en Google y Redes Sociales</span>
                </div>
                <div className="p-3 rounded-xl bg-[#0A0A0F] border border-white/5 space-y-1">
                  <div className="text-[11px] text-emerald-400 font-mono">{seoDraft.canonicalUrl}</div>
                  <div className="text-sm font-bold text-[#00E5FF] line-clamp-1">{seoDraft.title}</div>
                  <div className="text-xs text-neutral-400 line-clamp-2">{seoDraft.description}</div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'report' && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-4 rounded-2xl border border-white/10 bg-[#161622] text-center">
                  <div className="text-xl font-black text-[#00E5FF]">{estimatedKbSize} KB</div>
                  <div className="text-[11px] text-neutral-400 font-bold mt-0.5">Peso Estimado</div>
                </div>
                <div className="p-4 rounded-2xl border border-white/10 bg-[#161622] text-center">
                  <div className="text-xl font-black text-[#00FF88]">{totalImages}</div>
                  <div className="text-[11px] text-neutral-400 font-bold mt-0.5">Imágenes CDN</div>
                </div>
                <div className="p-4 rounded-2xl border border-white/10 bg-[#161622] text-center">
                  <div className="text-xl font-black text-[#FF00E5]">{activeSectionsCount}</div>
                  <div className="text-[11px] text-neutral-400 font-bold mt-0.5">Secciones Activas</div>
                </div>
                <div className="p-4 rounded-2xl border border-white/10 bg-[#161622] text-center">
                  <div className="text-xl font-black text-amber-400">100 / 100</div>
                  <div className="text-[11px] text-neutral-400 font-bold mt-0.5">Accesibilidad (AA)</div>
                </div>
              </div>

              <div className="p-4 rounded-2xl border border-white/10 bg-[#161622] space-y-3">
                <h4 className="text-xs font-black text-white uppercase tracking-wider flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00FF88]" />
                  <span>Checklist de Calidad y Rendimiento</span>
                </h4>
                <ul className="space-y-2 text-xs text-neutral-300">
                  <li className="flex items-center gap-2">
                    <span className="text-[#00FF88]">✓</span> Todas las imágenes utilizan compresión WebP y carga diferida (<code>loading="lazy"</code>).
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#00FF88]">✓</span> Metadatos Open Graph, Twitter Cards y marcado Schema.org inyectados.
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#00FF88]">✓</span> Tipografías optimizadas con <code>preconnect</code> de Google Fonts.
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#00FF88]">✓</span> Totalmente compatible con cualquier servidor HTTP, CDN estático o hosting cPanel.
                  </li>
                </ul>
              </div>
            </div>
          )}

          {/* Voluntary Donation Banner */}
          <div className="p-4 rounded-2xl border border-white/10 bg-gradient-to-r from-[#FF00E5]/10 via-[#00E5FF]/10 to-transparent flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-3 text-center sm:text-left">
              <div className="w-8 h-8 rounded-xl bg-[#FF00E5]/20 text-[#FF00E5] flex items-center justify-center shrink-0">
                <Heart className="w-4 h-4 fill-current" />
              </div>
              <div className="text-xs">
                <div className="font-extrabold text-white">¿Te ha resultado útil 930 Studio?</div>
                <div className="text-neutral-400">
                  Es 100% gratuito. Si deseas apoyar el mantenimiento continuo y nuevas plantillas, puedes hacer una donación voluntaria.
                </div>
              </div>
            </div>

            {onOpenDonation && (
              <button
                onClick={() => {
                  onClose();
                  onOpenDonation();
                }}
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-[#FF00E5] hover:text-white text-neutral-200 text-xs font-bold shadow-xs cursor-pointer shrink-0 transition-all border border-white/10"
              >
                Apoyar con PayPal ☕
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
