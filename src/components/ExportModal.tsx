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
  Zap
} from 'lucide-react';
import JSZip from 'jszip';

interface ExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  site: SiteConfig;
  isDark?: boolean;
  onOpenDonation?: () => void;
}

export const ExportModal: React.FC<ExportModalProps> = ({
  isOpen,
  onClose,
  site,
  isDark = false,
  onOpenDonation
}) => {
  const [copied, setCopied] = useState(false);
  const [isExportingZip, setIsExportingZip] = useState(false);
  const [isGuideOpen, setIsGuideOpen] = useState(false);
  const [activeGuideTab, setActiveGuideTab] = useState<'netlify' | 'vercel' | 'github' | 'cpanel'>('netlify');

  if (!isOpen) return null;

  const generateCleanHtml = (): string => {
    const s = site.sections;
    const isDarkTheme = site.theme === 'dark';
    const accent = site.accentColor || '#00E5FF';
    const radius = site.borderRadius ?? 20;

    const order: SectionType[] =
      site.sectionOrder && site.sectionOrder.length > 0
        ? site.sectionOrder
        : [
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
          ];

    const sectionHtmlParts: string[] = [];

    order.forEach((type) => {
      switch (type) {
        case 'navbar':
          if (s.navbar) {
            sectionHtmlParts.push(`
  <!-- Navbar -->
  <nav class="nav">
    <div class="container nav-inner">
      <a href="#" class="brand">${s.navbar.brandName || site.name}</a>
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
  <section class="hero reveal">
    <div class="container">
      ${s.hero.badge ? `<div class="badge">${s.hero.badge}</div>` : ''}
      ${s.hero.kicker ? `<div class="kicker">${s.hero.kicker}</div>` : ''}
      <h1>${s.hero.title} ${s.hero.highlightTitle ? `<span class="highlight">${s.hero.highlightTitle}</span>` : ''}</h1>
      <p class="hero-sub">${s.hero.subtitle || ''}</p>
      <div class="hero-cta-group">
        <a href="${s.hero.primaryCta?.link || '#pricing'}" class="btn-large btn-primary">${s.hero.primaryCta?.text || 'Comenzar'}</a>
        ${s.hero.secondaryCta?.text ? `<a href="${s.hero.secondaryCta.link || '#product'}" class="btn-large btn-secondary">${s.hero.secondaryCta.text}</a>` : ''}
      </div>
      ${s.hero.imageUrl ? `<div class="hero-img-wrap"><img src="${s.hero.imageUrl}" alt="${site.name}" loading="lazy"></div>` : ''}
    </div>
  </section>`);
          }
          break;

        case 'logos':
          if (s.logos?.enabled && s.logos.items?.length) {
            sectionHtmlParts.push(`
  <!-- Logos -->
  <section class="section-logos">
    <div class="container">
      ${s.logos.title ? `<p class="logos-title">${s.logos.title}</p>` : ''}
      <div class="logos-grid">
        ${s.logos.items.map((item) => `<div class="logo-item"><span>●</span> ${item.name}</div>`).join('')}
      </div>
    </div>
  </section>`);
          }
          break;

        case 'bentoFeatures':
          if (s.bentoFeatures?.enabled !== false && s.bentoFeatures) {
            sectionHtmlParts.push(`
  <!-- Bento Features -->
  <section id="features" class="section section-alt">
    <div class="container">
      <div class="sec-header reveal">
        ${s.bentoFeatures.kicker ? `<div class="kicker">${s.bentoFeatures.kicker}</div>` : ''}
        <h2 class="sec-title">${s.bentoFeatures.title}</h2>
        ${s.bentoFeatures.subtitle ? `<p class="sec-sub">${s.bentoFeatures.subtitle}</p>` : ''}
      </div>
      <div class="bento-grid">
        ${(s.bentoFeatures.items || [])
          .map(
            (item) => `
        <div class="bento-card ${item.colSpan === 2 ? 'span-2' : ''} reveal">
          ${item.tag ? `<span class="bento-tag">${item.tag}</span>` : ''}
          <h3>${item.title}</h3>
          <p>${item.description}</p>
          ${item.statNumber ? `<div class="bento-stat">${item.statNumber}</div><div class="bento-stat-label">${item.statLabel || ''}</div>` : ''}
          ${item.imageUrl ? `<div class="bento-img"><img src="${item.imageUrl}" alt="${item.title}" loading="lazy"></div>` : ''}
        </div>`
          )
          .join('')}
      </div>
    </div>
  </section>`);
          }
          break;

        case 'productHighlight':
          if (s.productHighlight?.enabled !== false && s.productHighlight) {
            sectionHtmlParts.push(`
  <!-- Product Highlight -->
  <section id="product" class="section">
    <div class="container">
      <div class="product-box reveal">
        <div class="product-content">
          ${s.productHighlight.kicker ? `<div class="kicker">${s.productHighlight.kicker}</div>` : ''}
          <h2>${s.productHighlight.title}</h2>
          <p>${s.productHighlight.description}</p>
          ${
            s.productHighlight.specs?.length
              ? `<ul class="specs-list">
            ${s.productHighlight.specs.map((sp) => `<li><strong>${sp.label}</strong> <span>${sp.value}</span></li>`).join('')}
          </ul>`
              : ''
          }
          <a href="${s.productHighlight.ctaLink || '#pricing'}" class="btn-pill" style="font-size: 0.95rem; padding: 12px 28px;">${s.productHighlight.ctaText || 'Descubrir'}</a>
        </div>
        <div>
          <img src="${s.productHighlight.imageUrl}" alt="Product" class="product-img" loading="lazy">
        </div>
      </div>
    </div>
  </section>`);
          }
          break;

        case 'stats':
          if (s.stats?.enabled && s.stats.items?.length) {
            sectionHtmlParts.push(`
  <!-- Stats -->
  <section class="section section-alt">
    <div class="container">
      <div class="stats-grid reveal">
        ${s.stats.items
          .map(
            (st) => `
        <div class="stat-box">
          <div class="stat-val">${st.value}</div>
          <div class="stat-lbl">${st.label}</div>
          ${st.description ? `<div class="stat-desc">${st.description}</div>` : ''}
        </div>`
          )
          .join('')}
      </div>
    </div>
  </section>`);
          }
          break;

        case 'testimonials':
          if (s.testimonials?.enabled !== false && s.testimonials?.items?.length) {
            sectionHtmlParts.push(`
  <!-- Testimonials -->
  <section id="testimonials" class="section section-alt">
    <div class="container">
      <div class="sec-header reveal">
        <h2 class="sec-title">${s.testimonials.title}</h2>
        ${s.testimonials.subtitle ? `<p class="sec-sub">${s.testimonials.subtitle}</p>` : ''}
      </div>
      <div class="test-grid">
        ${s.testimonials.items
          .map(
            (t) => `
        <div class="test-card reveal">
          <p class="test-quote">“${t.quote}”</p>
          <div class="test-author">
            <img src="${t.avatarUrl}" alt="${t.author}" class="test-avatar" loading="lazy">
            <div>
              <div class="test-name">${t.author}</div>
              <div class="test-role">${t.role}</div>
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
          if (s.pricing?.enabled !== false && s.pricing?.tiers?.length) {
            sectionHtmlParts.push(`
  <!-- Pricing -->
  <section id="pricing" class="section">
    <div class="container">
      <div class="sec-header reveal">
        <h2 class="sec-title">${s.pricing.title}</h2>
        ${s.pricing.subtitle ? `<p class="sec-sub">${s.pricing.subtitle}</p>` : ''}
      </div>
      <div class="pricing-grid">
        ${s.pricing.tiers
          .map(
            (tier) => `
        <div class="price-card ${tier.highlight ? 'featured' : ''} reveal">
          <div class="price-name">${tier.name}</div>
          <div class="price-num">${tier.price} <span style="font-size: 1rem; font-weight: normal; color: var(--text-sec);">${tier.period}</span></div>
          <p style="color: var(--text-sec); font-size: 0.9rem; margin-bottom: 20px;">${tier.description}</p>
          <a href="${tier.ctaLink || '#'}" class="btn-large ${tier.highlight ? 'btn-primary' : 'btn-secondary'}" style="width: 100%; display: block; text-align: center;">${tier.ctaText}</a>
          <ul class="price-features">
            ${tier.features.map((f) => `<li>✓ ${f}</li>`).join('')}
          </ul>
        </div>`
          )
          .join('')}
      </div>
    </div>
  </section>`);
          }
          break;

        case 'faq':
          if (s.faq?.enabled !== false && s.faq?.items?.length) {
            sectionHtmlParts.push(`
  <!-- FAQ -->
  <section class="section section-alt">
    <div class="container">
      <div class="sec-header reveal">
        <h2 class="sec-title">${s.faq.title}</h2>
        ${s.faq.subtitle ? `<p class="sec-sub">${s.faq.subtitle}</p>` : ''}
      </div>
      <div class="faq-wrap">
        ${s.faq.items
          .map(
            (item) => `
        <details class="faq-item">
          <summary class="faq-q">${item.question}</summary>
          <div class="faq-a">${item.answer}</div>
        </details>`
          )
          .join('')}
      </div>
    </div>
  </section>`);
          }
          break;

        case 'ctaFinal':
          if (s.ctaFinal?.enabled !== false && s.ctaFinal) {
            sectionHtmlParts.push(`
  <!-- Final CTA -->
  <section class="section" style="text-align: center;">
    <div class="container reveal">
      <h2 style="font-size: clamp(2rem, 4vw, 3rem); font-weight: 800; margin-bottom: 16px;">${s.ctaFinal.title}</h2>
      <p style="color: var(--text-sec); font-size: 1.15rem; max-width: 600px; margin: 0 auto 32px;">${s.ctaFinal.subtitle}</p>
      <a href="${s.ctaFinal.buttonLink || '#pricing'}" class="btn-large btn-primary">${s.ctaFinal.buttonText || 'Comenzar Ahora'}</a>
    </div>
  </section>`);
          }
          break;

        case 'footer':
          if (s.footer) {
            sectionHtmlParts.push(`
  <!-- Footer -->
  <footer>
    <div class="container">
      <div>${s.footer.copyright || `© ${new Date().getFullYear()} ${site.name}. Todos los derechos reservados.`}</div>
      <ul class="foot-links">
        ${(s.footer.links || []).map((l) => `<li><a href="${l.href}">${l.label}</a></li>`).join('')}
      </ul>
    </div>
  </footer>`);
          }
          break;
      }
    });

    return `<!DOCTYPE html>
<html lang="es">
<head>
  <!-- Generated with 930 Studio (https://930studio.app) -->
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${site.seo.title || site.name}</title>
  <meta name="description" content="${site.seo.description || ''}">
  <meta name="keywords" content="${site.seo.keywords || ''}">
  <meta name="generator" content="930 Studio">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    :root {
      --bg: ${isDarkTheme ? '#0A0A0F' : '#FAFAFC'};
      --bg-alt: ${isDarkTheme ? '#12121A' : '#FFFFFF'};
      --text: ${isDarkTheme ? '#FFFFFF' : '#0F172A'};
      --text-sec: ${isDarkTheme ? '#94A3B8' : '#64748B'};
      --accent: ${accent};
      --card-bg: ${isDarkTheme ? 'rgba(255,255,255,0.03)' : '#FFFFFF'};
      --card-border: ${isDarkTheme ? 'rgba(255,255,255,0.08)' : '#E5E7EB'};
      --radius: ${radius}px;
    }
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: var(--bg); color: var(--text); line-height: 1.6; -webkit-font-smoothing: antialiased; }
    .container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }
    .section { padding: 100px 0; }
    .section-alt { background: var(--bg-alt); }
    
    .nav { position: sticky; top: 0; z-index: 100; backdrop-filter: blur(16px); background: ${isDarkTheme ? 'rgba(10,10,15,0.85)' : 'rgba(255,255,255,0.85)'}; border-bottom: 1px solid var(--card-border); }
    .nav-inner { height: 70px; display: flex; align-items: center; justify-content: space-between; }
    .brand { font-size: 1.25rem; font-weight: 800; text-decoration: none; color: var(--text); letter-spacing: -0.5px; }
    .nav-links { display: flex; gap: 32px; list-style: none; }
    .nav-links a { text-decoration: none; color: var(--text-sec); font-size: 0.95rem; font-weight: 600; transition: 0.2s; }
    .nav-links a:hover { color: var(--accent); }
    
    .btn-pill { background: var(--text); color: var(--bg); padding: 10px 22px; border-radius: 9999px; font-weight: 700; text-decoration: none; font-size: 0.9rem; transition: 0.2s; display: inline-flex; align-items: center; justify-content: center; }
    .btn-pill:hover { opacity: 0.9; transform: scale(1.02); }
    .btn-large { padding: 16px 36px; border-radius: var(--radius); font-weight: 800; text-decoration: none; font-size: 1.05rem; display: inline-flex; align-items: center; justify-content: center; transition: 0.3s; }
    .btn-primary { background: var(--accent); color: #000000; box-shadow: 0 0 20px rgba(0, 229, 255, 0.35); }
    .btn-primary:hover { opacity: 0.95; transform: scale(1.03); }
    .btn-secondary { background: var(--card-bg); border: 1px solid var(--card-border); color: var(--text); }
    .btn-secondary:hover { border-color: var(--accent); }

    .hero { padding: 120px 0 80px; text-align: center; }
    .badge { display: inline-block; padding: 6px 16px; border-radius: 9999px; background: rgba(0, 229, 255, 0.1); border: 1px solid var(--accent); color: var(--accent); font-weight: 700; font-size: 0.85rem; margin-bottom: 24px; }
    .kicker { text-transform: uppercase; letter-spacing: 2px; font-size: 0.85rem; font-weight: 800; color: var(--accent); margin-bottom: 12px; }
    h1 { font-size: clamp(2.5rem, 6vw, 4.5rem); font-weight: 800; letter-spacing: -1.5px; line-height: 1.1; margin-bottom: 24px; }
    .highlight { color: var(--accent); }
    .hero-sub { font-size: 1.25rem; color: var(--text-sec); max-width: 680px; margin: 0 auto 40px; }
    .hero-cta-group { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; margin-bottom: 60px; }
    .hero-img-wrap { max-width: 1000px; margin: 0 auto; border-radius: var(--radius); overflow: hidden; border: 1px solid var(--card-border); box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25); }
    .hero-img-wrap img { width: 100%; display: block; }

    .section-logos { padding: 40px 0; border-top: 1px solid var(--card-border); border-bottom: 1px solid var(--card-border); }
    .logos-title { text-align: center; font-size: 0.85rem; color: var(--text-sec); font-weight: 600; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 24px; }
    .logos-grid { display: flex; justify-content: center; gap: 48px; flex-wrap: wrap; align-items: center; opacity: 0.7; }
    .logo-item { font-weight: 700; font-size: 1.1rem; }

    .sec-header { text-align: center; margin-bottom: 60px; }
    .sec-title { font-size: clamp(2rem, 4vw, 3rem); font-weight: 800; letter-spacing: -1px; margin-bottom: 16px; }
    .sec-sub { font-size: 1.15rem; color: var(--text-sec); max-width: 600px; margin: 0 auto; }

    .bento-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 24px; }
    .bento-card { background: var(--card-bg); border: 1px solid var(--card-border); border-radius: var(--radius); padding: 36px; transition: 0.3s; position: relative; overflow: hidden; }
    .bento-card:hover { border-color: var(--accent); transform: translateY(-4px); }
    .bento-card.span-2 { grid-column: span 2; }
    .bento-tag { display: inline-block; font-size: 0.75rem; font-weight: 800; text-transform: uppercase; color: var(--accent); margin-bottom: 12px; }
    .bento-card h3 { font-size: 1.5rem; font-weight: 800; margin-bottom: 12px; }
    .bento-card p { color: var(--text-sec); font-size: 0.95rem; }
    .bento-stat { font-size: 3rem; font-weight: 800; color: var(--accent); margin-top: 24px; }
    .bento-stat-label { font-size: 0.85rem; color: var(--text-sec); font-weight: 600; }
    .bento-img { margin-top: 24px; border-radius: 12px; overflow: hidden; }
    .bento-img img { width: 100%; display: block; }

    .product-box { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: center; background: var(--card-bg); border: 1px solid var(--card-border); border-radius: var(--radius); overflow: hidden; }
    .product-content { padding: 60px; }
    .product-content h2 { font-size: 2.2rem; font-weight: 800; margin-bottom: 16px; }
    .product-content p { color: var(--text-sec); font-size: 1.05rem; margin-bottom: 24px; }
    .specs-list { list-style: none; margin-bottom: 32px; display: flex; flex-direction: column; gap: 12px; }
    .specs-list li { display: flex; justify-content: space-between; border-bottom: 1px solid var(--card-border); padding-bottom: 8px; font-size: 0.95rem; }
    .product-img { width: 100%; height: 100%; object-fit: cover; }

    .stats-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 32px; text-align: center; }
    .stat-box { padding: 32px; background: var(--card-bg); border: 1px solid var(--card-border); border-radius: var(--radius); }
    .stat-val { font-size: 3rem; font-weight: 800; color: var(--accent); margin-bottom: 8px; }
    .stat-lbl { font-size: 1.05rem; font-weight: 700; }
    .stat-desc { font-size: 0.85rem; color: var(--text-sec); margin-top: 4px; }

    .test-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 24px; }
    .test-card { background: var(--card-bg); border: 1px solid var(--card-border); border-radius: var(--radius); padding: 32px; }
    .test-quote { font-size: 1.05rem; font-style: italic; margin-bottom: 24px; }
    .test-author { display: flex; align-items: center; gap: 16px; }
    .test-avatar { width: 48px; height: 48px; border-radius: 50%; object-fit: cover; }
    .test-name { font-weight: 800; font-size: 0.95rem; }
    .test-role { font-size: 0.8rem; color: var(--text-sec); }

    .pricing-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px; }
    .price-card { background: var(--card-bg); border: 1px solid var(--card-border); border-radius: var(--radius); padding: 40px; text-align: center; transition: 0.3s; }
    .price-card.featured { border-color: var(--accent); box-shadow: 0 0 25px rgba(0,229,255,0.25); }
    .price-name { font-size: 1.3rem; font-weight: 800; margin-bottom: 8px; }
    .price-num { font-size: 3rem; font-weight: 800; color: var(--accent); margin: 20px 0; }
    .price-features { list-style: none; text-align: left; margin: 28px 0; }
    .price-features li { padding: 8px 0; font-size: 0.95rem; color: var(--text-sec); border-bottom: 1px solid var(--card-border); }

    .faq-wrap { max-width: 760px; margin: 0 auto; display: flex; flex-direction: column; gap: 16px; }
    .faq-item { background: var(--card-bg); border: 1px solid var(--card-border); border-radius: 16px; padding: 20px 24px; cursor: pointer; }
    .faq-q { font-size: 1.1rem; font-weight: 700; outline: none; }
    .faq-a { color: var(--text-sec); font-size: 0.95rem; margin-top: 12px; line-height: 1.6; }

    footer { padding: 60px 0; background: var(--bg-alt); border-top: 1px solid var(--card-border); font-size: 0.85rem; color: var(--text-sec); text-align: center; }
    .foot-links { display: flex; justify-content: center; gap: 24px; margin-top: 16px; list-style: none; }
    .foot-links a { color: var(--text-sec); text-decoration: none; }
    .foot-links a:hover { color: var(--accent); }

    .reveal { opacity: 0; transform: translateY(20px); transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1); }
    .reveal.active { opacity: 1; transform: translateY(0); }

    ${site.customCss || ''}

    @media (max-width: 768px) {
      .bento-grid, .test-grid, .product-box { grid-template-columns: 1fr; }
      .bento-card.span-2 { grid-column: span 1; }
      .nav-links { display: none; }
      .product-content { padding: 32px; }
    }
  </style>
</head>
<body>
${sectionHtmlParts.join('\n')}

  <script>
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.08 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  </script>
</body>
</html>`;
  };

  const handleCopyCode = () => {
    const html = generateCleanHtml();
    navigator.clipboard.writeText(html);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownloadHtml = () => {
    const html = generateCleanHtml();
    const blob = new Blob([html], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${site.slug || 'sitio-930'}.html`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleDownloadZip = async () => {
    setIsExportingZip(true);
    try {
      const zip = new JSZip();
      const html = generateCleanHtml();

      zip.file('index.html', html);
      zip.file(
        'README.md',
        `# ${site.name} — 930 Studio Export\n\nEste sitio web fue creado y exportado con 930 Studio.\n\n### Despliegue:\n1. Abre \`index.html\` en cualquier navegador web o arrastra esta carpeta a Netlify Drop, Vercel o GitHub Pages.\n2. No requiere dependencias de backend, Node.js ni compiladores.`
      );
      zip.file('site-config.json', JSON.stringify(site, null, 2));

      const content = await zip.generateAsync({ type: 'blob' });
      const url = URL.createObjectURL(content);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${site.slug || 'sitio-930'}-produccion.zip`;
      a.click();
      URL.revokeObjectURL(url);
    } catch (e) {
      console.error('Error generating zip:', e);
    } finally {
      setIsExportingZip(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
      <div
        className={`border rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col transition-all ${
          isDark
            ? 'bg-[#12121A] border-white/10 text-white'
            : 'bg-white border-[#E5E7EB] text-[#0F172A]'
        }`}
      >
        {/* ========================================================================= */}
        {/* MODAL HEADER */}
        {/* ========================================================================= */}
        <div className="p-6 border-b border-inherit flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#00E5FF]/10 text-[#00E5FF] border border-[#00E5FF]/30 flex items-center justify-center shadow-[0_0_12px_rgba(0,229,255,0.2)]">
              <Download className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-extrabold tracking-tight">Exportar tu sitio web</h3>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#00E5FF]/10 text-[#00E5FF] border border-[#00E5FF]/30">
                  930 Studio
                </span>
              </div>
              <p className="text-xs text-[#64748B] dark:text-neutral-400">
                Código limpio, semántico, auto-contenido y listo para producción sin costes ni bloqueos.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#64748B] hover:text-[#0F172A] dark:hover:text-white rounded-lg hover:bg-[#F0F0F3] dark:hover:bg-white/5 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-6 flex-1">
          {/* ======================================================================= */}
          {/* SECTION 1: 3 EXPORT OPTIONS CARDS */}
          {/* ======================================================================= */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
            {/* Card 1: HTML */}
            <div
              className={`p-5 rounded-xl border flex flex-col justify-between transition-all ${
                isDark ? 'bg-white/[0.02] border-white/10 hover:border-[#00E5FF]' : 'bg-[#FAFAFC] border-[#E5E7EB] hover:border-[#00E5FF] shadow-xs'
              }`}
            >
              <div className="space-y-2">
                <div className="w-8 h-8 rounded-lg bg-[#00E5FF]/15 text-[#00E5FF] flex items-center justify-center">
                  <FileCode className="w-4 h-4" />
                </div>
                <h4 className="font-extrabold text-sm text-[#0F172A] dark:text-white">HTML Completo</h4>
                <p className="text-[11px] text-[#64748B] dark:text-neutral-400 leading-relaxed font-medium">
                  Archivo único <code>index.html</code> auto-contenido con CSS y JS embebidos.
                </p>
              </div>
              <button
                onClick={handleDownloadHtml}
                className="mt-4 w-full py-2.5 rounded-lg bg-white text-[#00E5FF] border border-[#00E5FF] hover:bg-[#00E5FF] hover:text-black text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Descargar HTML</span>
              </button>
            </div>

            {/* Card 2: ZIP */}
            <div
              className={`p-5 rounded-xl border flex flex-col justify-between transition-all ${
                isDark ? 'bg-white/[0.02] border-white/10 hover:border-[#FF00E5]' : 'bg-[#FAFAFC] border-[#E5E7EB] hover:border-[#FF00E5] shadow-xs'
              }`}
            >
              <div className="space-y-2">
                <div className="w-8 h-8 rounded-lg bg-[#FF00E5]/15 text-[#FF00E5] flex items-center justify-center">
                  <FolderArchive className="w-4 h-4" />
                </div>
                <h4 className="font-extrabold text-sm text-[#0F172A] dark:text-white">Paquete ZIP</h4>
                <p className="text-[11px] text-[#64748B] dark:text-neutral-400 leading-relaxed font-medium">
                  Estructura completa de proyecto con <code>index.html</code>, <code>README.md</code> y config.
                </p>
              </div>
              <button
                onClick={handleDownloadZip}
                disabled={isExportingZip}
                className="mt-4 w-full py-2.5 rounded-lg bg-[#0F172A] hover:bg-[#1E293B] text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
              >
                <Download className="w-3.5 h-3.5 text-[#00E5FF]" />
                <span>{isExportingZip ? 'Comprimiendo...' : 'Descargar ZIP'}</span>
              </button>
            </div>

            {/* Card 3: Copy to clipboard */}
            <div
              className={`p-5 rounded-xl border flex flex-col justify-between transition-all ${
                isDark ? 'bg-white/[0.02] border-white/10 hover:border-[#00FF88]' : 'bg-[#FAFAFC] border-[#E5E7EB] hover:border-[#00FF88] shadow-xs'
              }`}
            >
              <div className="space-y-2">
                <div className="w-8 h-8 rounded-lg bg-[#00FF88]/15 text-[#00FF88] flex items-center justify-center">
                  <Copy className="w-4 h-4" />
                </div>
                <h4 className="font-extrabold text-sm text-[#0F172A] dark:text-white">Copiar Código</h4>
                <p className="text-[11px] text-[#64748B] dark:text-neutral-400 leading-relaxed font-medium">
                  Copia todo el código HTML al portapapeles para pegarlo directamente donde desees.
                </p>
              </div>
              <button
                onClick={handleCopyCode}
                className="mt-4 w-full py-2.5 rounded-lg bg-white border border-[#D1D5DB] hover:bg-[#F0F0F3] dark:bg-white/10 dark:border-white/10 text-[#0F172A] dark:text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-[#00FF88]" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? '¡Código Copiado!' : 'Copiar al Portapapeles'}</span>
              </button>
            </div>
          </div>

          {/* ======================================================================= */}
          {/* SECTION 2: HOSTING RECOMENDADO */}
          {/* ======================================================================= */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#0F172A] dark:text-neutral-300 flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-[#00E5FF]" />
                <span>¿Dónde puedes publicarlo gratis en 1 minuto?</span>
              </h4>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              <div className={`p-3 rounded-lg border text-center ${isDark ? 'bg-white/5 border-white/10' : 'bg-[#FAFAFC] border-[#E5E7EB]'}`}>
                <div className="font-bold text-xs text-[#0F172A] dark:text-white mb-0.5">Netlify Drop</div>
                <div className="text-[10px] text-[#00B8D4] font-bold">Arrastrar y soltar</div>
              </div>
              <div className={`p-3 rounded-lg border text-center ${isDark ? 'bg-white/5 border-white/10' : 'bg-[#FAFAFC] border-[#E5E7EB]'}`}>
                <div className="font-bold text-xs text-[#0F172A] dark:text-white mb-0.5">Vercel</div>
                <div className="text-[10px] text-[#059669] font-bold">Despliegue ultrarrápido</div>
              </div>
              <div className={`p-3 rounded-lg border text-center ${isDark ? 'bg-white/5 border-white/10' : 'bg-[#FAFAFC] border-[#E5E7EB]'}`}>
                <div className="font-bold text-xs text-[#0F172A] dark:text-white mb-0.5">GitHub Pages</div>
                <div className="text-[10px] text-[#D946EF] font-bold">Repositorio libre</div>
              </div>
              <div className={`p-3 rounded-lg border text-center ${isDark ? 'bg-white/5 border-white/10' : 'bg-[#FAFAFC] border-[#E5E7EB]'}`}>
                <div className="font-bold text-xs text-[#0F172A] dark:text-white mb-0.5">Cloudflare Pages</div>
                <div className="text-[10px] text-amber-600 dark:text-amber-400 font-bold">CDN global ilimitado</div>
              </div>
            </div>
          </div>

          {/* ======================================================================= */}
          {/* SECTION 3: COLLAPSIBLE DEPLOYMENT ACCORDION */}
          {/* ======================================================================= */}
          <div className="border border-inherit rounded-xl overflow-hidden">
            <button
              onClick={() => setIsGuideOpen(!isGuideOpen)}
              className="w-full p-4 flex items-center justify-between hover:bg-[#FAFAFC] dark:hover:bg-white/5 transition-colors cursor-pointer text-left"
            >
              <div className="flex items-center gap-2">
                <Rocket className="w-4 h-4 text-[#00E5FF]" />
                <span className="font-bold text-xs text-[#0F172A] dark:text-white">
                  Guía rápida: ¿Cómo publicar tu sitio gratis paso a paso?
                </span>
              </div>
              {isGuideOpen ? <ChevronUp className="w-4 h-4 text-[#64748B]" /> : <ChevronDown className="w-4 h-4 text-[#64748B]" />}
            </button>

            {isGuideOpen && (
              <div className="p-4 border-t border-inherit space-y-3 bg-[#FAFAFC] dark:bg-white/[0.02]">
                <div className="flex gap-2 border-b border-inherit pb-2 text-xs font-bold overflow-x-auto">
                  <button
                    onClick={() => setActiveGuideTab('netlify')}
                    className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                      activeGuideTab === 'netlify' ? 'bg-[#00E5FF] text-black font-bold' : 'text-[#64748B] hover:text-[#0F172A] dark:hover:text-white'
                    }`}
                  >
                    1. Netlify Drop
                  </button>
                  <button
                    onClick={() => setActiveGuideTab('vercel')}
                    className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                      activeGuideTab === 'vercel' ? 'bg-[#00E5FF] text-black font-bold' : 'text-[#64748B] hover:text-[#0F172A] dark:hover:text-white'
                    }`}
                  >
                    2. Vercel
                  </button>
                  <button
                    onClick={() => setActiveGuideTab('github')}
                    className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                      activeGuideTab === 'github' ? 'bg-[#00E5FF] text-black font-bold' : 'text-[#64748B] hover:text-[#0F172A] dark:hover:text-white'
                    }`}
                  >
                    3. GitHub Pages
                  </button>
                  <button
                    onClick={() => setActiveGuideTab('cpanel')}
                    className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                      activeGuideTab === 'cpanel' ? 'bg-[#00E5FF] text-black font-bold' : 'text-[#64748B] hover:text-[#0F172A] dark:hover:text-white'
                    }`}
                  >
                    4. Hosting Tradicional (FTP)
                  </button>
                </div>

                <div className="text-xs text-[#334155] dark:text-neutral-300 leading-relaxed pt-1">
                  {activeGuideTab === 'netlify' && (
                    <ol className="list-decimal pl-4 space-y-1.5">
                      <li>Descarga el archivo <code>index.html</code> de esta ventana.</li>
                      <li>Ingresa en tu navegador a <strong>app.netlify.com/drop</strong>.</li>
                      <li>Arrastra el archivo o la carpeta descargada a la zona indicada.</li>
                      <li>¡Listo! Netlify te dará una URL HTTPS pública en segundos.</li>
                    </ol>
                  )}
                  {activeGuideTab === 'vercel' && (
                    <ol className="list-decimal pl-4 space-y-1.5">
                      <li>Crea una cuenta gratuita en <strong>vercel.com</strong>.</li>
                      <li>Crea un nuevo proyecto e importa el archivo <code>index.html</code>.</li>
                      <li>Presiona <strong>Deploy</strong> y tu sitio estará activo en la red global edge de Vercel.</li>
                    </ol>
                  )}
                  {activeGuideTab === 'github' && (
                    <ol className="list-decimal pl-4 space-y-1.5">
                      <li>Crea un repositorio público en <strong>github.com</strong>.</li>
                      <li>Sube el archivo <code>index.html</code> a la raíz del repositorio.</li>
                      <li>Ve a <strong>Settings → Pages</strong> y selecciona la rama <code>main</code> como fuente.</li>
                      <li>Tu web se publicará en <code>tunombre.github.io/tu-repo</code>.</li>
                    </ol>
                  )}
                  {activeGuideTab === 'cpanel' && (
                    <ol className="list-decimal pl-4 space-y-1.5">
                      <li>Abre el Administrador de Archivos de tu cPanel o conéctate por FTP.</li>
                      <li>Navega al directorio <code>public_html/</code>.</li>
                      <li>Sube tu archivo <code>index.html</code> reemplazando el anterior.</li>
                      <li>Tu dominio principal cargará inmediatamente tu nuevo sitio.</li>
                    </ol>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* ======================================================================= */}
          {/* SECTION 4: VOLUNTARY DONATION BANNER */}
          {/* ======================================================================= */}
          <div
            className={`p-4 rounded-xl border flex flex-col sm:flex-row items-center justify-between gap-3 ${
              isDark ? 'bg-gradient-to-r from-[#FF00E5]/10 via-[#00E5FF]/10 to-transparent border-white/10' : 'bg-[#FAFAFC] border-[#E5E7EB]'
            }`}
          >
            <div className="flex items-center gap-3 text-center sm:text-left">
              <div className="w-8 h-8 rounded-full bg-[#FF00E5]/20 text-[#FF00E5] flex items-center justify-center shrink-0">
                <Heart className="w-4 h-4 fill-current" />
              </div>
              <div className="text-xs">
                <div className="font-extrabold text-[#0F172A] dark:text-white">
                  ¿Te ha resultado útil 930 Studio?
                </div>
                <div className="text-[#64748B] dark:text-neutral-400">
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
                className="px-4 py-2 rounded-lg bg-[#0F172A] hover:bg-[#1E293B] text-white text-xs font-bold shadow-xs cursor-pointer shrink-0 transition-colors"
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
