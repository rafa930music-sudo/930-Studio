import React, { useState, useEffect } from 'react';
import { SiteConfig, SectionType } from '../types';
import {
  Sparkles,
  Zap,
  ShieldCheck,
  Globe2,
  Cpu,
  BrainCircuit,
  Layers,
  ArrowRight,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Star,
  Headphones,
  Smartphone,
  Flame,
  Award,
  Lock,
  Boxes,
  Code2,
  Edit3,
  Compass,
  Palette,
  Eye,
  HeartHandshake,
  BookOpen,
  Coffee,
  Building2,
  Scale,
  Utensils,
  Radio,
  PackageCheck,
  CheckCircle2,
  TrendingUp,
  Sliders,
  Maximize2,
  MapPin,
  Clock,
  Phone,
  Mail,
  Send,
  X,
  ExternalLink,
  Shield
} from 'lucide-react';

interface WebsiteRendererProps {
  site: SiteConfig;
  isEditable?: boolean;
  onEditSection?: (sectionKey: SectionType) => void;
  onUpdateText?: (path: string, value: string) => void;
  selectedSection?: SectionType | null;
  onSelectSection?: (sectionKey: SectionType) => void;
  onContextMenu?: (e: React.MouseEvent, sectionKey: SectionType) => void;
  onImageDoubleClick?: (path: string, currentUrl: string) => void;
}

const ICON_MAP: Record<string, React.ElementType> = {
  Sparkles,
  Zap,
  ShieldCheck,
  Globe2,
  Cpu,
  BrainCircuit,
  Layers,
  Star,
  Headphones,
  Smartphone,
  Flame,
  Award,
  Lock,
  Boxes,
  Code2,
  Compass,
  Palette,
  Eye,
  HeartHandshake,
  BookOpen,
  Coffee,
  Building2,
  Scale,
  Utensils,
  Radio,
  PackageCheck,
  CheckCircle2,
  TrendingUp,
  Sliders,
  Maximize2,
  Shield
};

export const WebsiteRenderer: React.FC<WebsiteRendererProps> = ({
  site,
  isEditable = false,
  onEditSection,
  onUpdateText,
  selectedSection,
  onSelectSection,
  onContextMenu,
  onImageDoubleClick
}) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');
  const [openFaq, setOpenFaq] = useState<Record<string, boolean>>({ f_1: true, f_0: true });

  // Interactive component states
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [activeTabId, setActiveTabId] = useState<string>('');
  const [lightboxImg, setLightboxImg] = useState<{ url: string; title: string } | null>(null);
  const [formStep, setFormStep] = useState<number>(1);
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [editingPath, setEditingPath] = useState<string | null>(null);
  const [editingVal, setEditingVal] = useState<string>('');

  // Countdown timer state
  const [timeLeft, setTimeLeft] = useState<{ days: number; hours: number; minutes: number; seconds: number }>({
    days: 12,
    hours: 8,
    minutes: 45,
    seconds: 30
  });

  const s = site.sections;
  const isDark = site.theme === 'dark';
  const accent = site.accentColor || '#0071E3';

  // Countdown effect
  useEffect(() => {
    const target = s.countdown?.targetDate ? new Date(s.countdown.targetDate).getTime() : Date.now() + 14 * 86400000;
    const interval = setInterval(() => {
      const now = Date.now();
      const diff = Math.max(0, target - now);
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);
    return () => clearInterval(interval);
  }, [s.countdown?.targetDate]);

  // Inline edit helper
  const handleInlineClick = (path: string, currentVal: string) => {
    if (!isEditable) return;
    setEditingPath(path);
    setEditingVal(currentVal);
  };

  const handleInlineSave = () => {
    if (editingPath && onUpdateText) {
      onUpdateText(editingPath, editingVal);
    }
    setEditingPath(null);
  };

  const renderEditableText = (
    path: string,
    value: string | undefined,
    className: string = '',
    style: React.CSSProperties = {},
    as: 'h1' | 'h2' | 'h3' | 'p' | 'span' = 'p'
  ) => {
    const val = value || '';
    if (isEditable && editingPath === path) {
      return (
        <input
          autoFocus
          type="text"
          value={editingVal}
          onChange={(e) => setEditingVal(e.target.value)}
          onBlur={handleInlineSave}
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleInlineSave();
            if (e.key === 'Escape') setEditingPath(null);
          }}
          className={`bg-blue-500/20 text-inherit border-2 border-blue-500 rounded-lg px-2 py-0.5 outline-none font-inherit w-full ${className}`}
          style={style}
          onClick={(e) => e.stopPropagation()}
        />
      );
    }

    const Tag = as;
    return (
      <Tag
        className={`${className} ${
          isEditable
            ? 'hover:outline-dashed hover:outline-1 hover:outline-blue-400/50 hover:bg-blue-500/5 rounded cursor-pointer transition-all duration-150'
            : ''
        }`}
        style={style}
        onDoubleClick={(e) => {
          if (isEditable) {
            e.stopPropagation();
            handleInlineClick(path, val);
          }
        }}
        title={isEditable ? 'Doble clic para editar texto directamente' : undefined}
      >
        {val}
      </Tag>
    );
  };

  const toggleFaq = (id: string) => {
    setOpenFaq((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const getIcon = (iconName?: string) => {
    if (!iconName) return Zap;
    return ICON_MAP[iconName] || Zap;
  };

  // Safe fallback section order
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

  // Render individual section
  const renderSection = (type: SectionType) => {
    switch (type) {
      case 'navbar':
        if (!s.navbar) return null;
        return (
          <header
            key="navbar"
            id="section-navbar"
            className={`sticky top-0 z-50 w-full transition-all duration-200 border-b ${
              isDark
                ? 'bg-[#000000]/80 border-white/10 text-white'
                : 'bg-white/80 border-black/5 text-[#1D1D1F]'
            } backdrop-blur-xl`}
          >
            <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <a href="#" className="font-semibold text-lg tracking-tight flex items-center gap-2">
                  <span
                    className="w-5 h-5 rounded-full flex items-center justify-center text-white"
                    style={{ backgroundColor: accent }}
                  >
                    <Sparkles className="w-3 h-3" />
                  </span>
                  {s.navbar.brandName || site.name}
                </a>
              </div>

              <nav className="hidden md:flex items-center gap-7 text-[13px] font-medium" style={{ color: isDark ? '#A1A1A6' : '#6E6E73' }}>
                {(s.navbar.links || []).map((link, idx) => (
                  <a
                    key={idx}
                    href={link.href}
                    className="hover:opacity-100 transition-opacity duration-150"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              <div className="flex items-center gap-3">
                <a
                  href={s.navbar.ctaLink || '#pricing'}
                  className="text-xs font-semibold px-4 py-1.5 rounded-full text-white transition-transform duration-150 hover:scale-105 active:scale-95 shadow-sm"
                  style={{ backgroundColor: accent }}
                >
                  {s.navbar.ctaText || 'Comenzar'}
                </a>
                {isEditable && onEditSection && (
                  <button
                    onClick={() => onEditSection('navbar')}
                    className="p-1 rounded-lg bg-blue-600/20 text-blue-400 hover:bg-blue-600/30 text-xs flex items-center gap-1"
                    title="Editar Barra de Navegación"
                  >
                    <Edit3 className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          </header>
        );

      case 'hero':
        if (!s.hero?.enabled) return null;
        return (
          <section
            key="hero"
            id="section-hero"
            className={`relative pt-24 pb-20 px-6 overflow-hidden text-center ${
              isEditable ? 'group hover:outline-1 hover:outline-dashed hover:outline-blue-500' : ''
            }`}
          >
            {isEditable && onEditSection && (
              <button
                onClick={() => onEditSection('hero')}
                className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity bg-blue-600 text-white text-xs px-3 py-1 rounded-full shadow-lg flex items-center gap-1"
              >
                <Edit3 className="w-3 h-3" />
                Editar Hero
              </button>
            )}

            <div className="max-w-4xl mx-auto flex flex-col items-center">
              {s.hero.badge && (
                <div
                  className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-medium mb-6 border transition-colors"
                  style={{
                    borderColor: isDark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.1)',
                    backgroundColor: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.03)',
                    color: isDark ? '#A1A1A6' : '#6E6E73'
                  }}
                >
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accent }} />
                  {s.hero.badge}
                </div>
              )}

              {s.hero.kicker && (
                <p
                  className="text-sm font-semibold tracking-wider uppercase mb-3"
                  style={{ color: accent }}
                >
                  {s.hero.kicker}
                </p>
              )}

              <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.08] mb-6">
                <span>{s.hero.title} </span>
                {s.hero.highlightTitle && (
                  <span
                    className="bg-clip-text text-transparent"
                    style={{
                      backgroundImage: isDark
                        ? `linear-gradient(135deg, #FFFFFF 40%, ${accent} 100%)`
                        : `linear-gradient(135deg, #1D1D1F 30%, ${accent} 100%)`
                    }}
                  >
                    {s.hero.highlightTitle}
                  </span>
                )}
              </h1>

              <p
                className="text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto font-normal leading-relaxed mb-10"
                style={{ color: isDark ? '#A1A1A6' : '#6E6E73' }}
              >
                {s.hero.subtitle}
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
                <a
                  href={s.hero.primaryCta?.link || '#pricing'}
                  className="px-7 py-3.5 rounded-full text-sm sm:text-base font-semibold text-white transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-lg flex items-center gap-2"
                  style={{ backgroundColor: accent }}
                >
                  {s.hero.primaryCta?.text || 'Comenzar Ahora'}
                  <ArrowRight className="w-4 h-4" />
                </a>

                {s.hero.secondaryCta?.text && (
                  <a
                    href={s.hero.secondaryCta.link || '#product'}
                    className={`px-7 py-3.5 rounded-full text-sm sm:text-base font-medium transition-all duration-200 border ${
                      isDark
                        ? 'border-white/20 text-white hover:bg-white/5'
                        : 'border-black/15 text-[#1D1D1F] hover:bg-black/5'
                    }`}
                  >
                    {s.hero.secondaryCta.text}
                  </a>
                )}
              </div>

              {s.hero.imageUrl && (
                <div
                  className="w-full max-w-5xl rounded-2xl md:rounded-3xl overflow-hidden border shadow-2xl transition-transform duration-500 hover:scale-[1.005]"
                  style={{
                    borderColor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)',
                    backgroundColor: isDark ? '#121214' : '#F5F5F7'
                  }}
                >
                  <img
                    src={s.hero.imageUrl}
                    alt={site.name}
                    className="w-full h-auto max-h-[560px] object-cover object-center"
                    loading="lazy"
                  />
                </div>
              )}
            </div>
          </section>
        );

      case 'logos':
        if (!s.logos?.enabled || !s.logos.items?.length) return null;
        return (
          <section
            key="logos"
            id="logos"
            className={`py-12 px-6 border-y ${
              isDark ? 'bg-[#080809] border-white/5' : 'bg-[#FAFAFC] border-black/5'
            } ${isEditable ? 'group hover:outline-1 hover:outline-dashed hover:outline-blue-500 relative' : ''}`}
          >
            {isEditable && onEditSection && (
              <button
                onClick={() => onEditSection('logos')}
                className="absolute top-2 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity bg-blue-600 text-white text-xs px-3 py-1 rounded-full shadow-lg flex items-center gap-1"
              >
                <Edit3 className="w-3 h-3" />
                Editar Logos
              </button>
            )}
            <div className="max-w-6xl mx-auto text-center">
              {s.logos.title && (
                <p
                  className="text-xs font-semibold tracking-widest uppercase mb-8"
                  style={{ color: isDark ? '#86868B' : '#86868B' }}
                >
                  {s.logos.title}
                </p>
              )}
              <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14 opacity-70 hover:opacity-100 transition-opacity">
                {s.logos.items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-2 text-sm md:text-base font-bold tracking-tight"
                    style={{ color: isDark ? '#E1E1E6' : '#4B4B50' }}
                  >
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: accent }} />
                    <span>{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );

      case 'bentoFeatures':
        if (!s.bentoFeatures?.enabled) return null;
        return (
          <section
            key="bentoFeatures"
            id="features"
            className={`py-24 px-6 relative ${
              isDark ? 'bg-[#0D0D0E]' : 'bg-[#F5F5F7]'
            } ${isEditable ? 'group hover:outline-1 hover:outline-dashed hover:outline-blue-500' : ''}`}
          >
            {isEditable && onEditSection && (
              <button
                onClick={() => onEditSection('bentoFeatures')}
                className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity bg-blue-600 text-white text-xs px-3 py-1 rounded-full shadow-lg flex items-center gap-1"
              >
                <Edit3 className="w-3 h-3" />
                Editar Características
              </button>
            )}

            <div className="max-w-6xl mx-auto">
              <div className="text-center max-w-2xl mx-auto mb-16">
                {s.bentoFeatures.kicker && (
                  <p
                    className="text-xs sm:text-sm font-semibold tracking-wider uppercase mb-2"
                    style={{ color: accent }}
                  >
                    {s.bentoFeatures.kicker}
                  </p>
                )}
                <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4">
                  {s.bentoFeatures.title}
                </h2>
                {s.bentoFeatures.subtitle && (
                  <p
                    className="text-base sm:text-lg"
                    style={{ color: isDark ? '#A1A1A6' : '#6E6E73' }}
                  >
                    {s.bentoFeatures.subtitle}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {(s.bentoFeatures.items || []).map((item) => {
                  const IconComp = getIcon(item.icon);
                  const isDouble = item.colSpan === 2;

                  return (
                    <div
                      key={item.id}
                      className={`rounded-2xl sm:rounded-3xl p-8 border transition-all duration-300 hover:translate-y-[-2px] flex flex-col justify-between ${
                        isDouble ? 'md:col-span-2' : 'md:col-span-1'
                      } ${
                        isDark
                          ? 'bg-[#1C1C1E] border-white/10 hover:border-white/20'
                          : 'bg-white border-black/5 hover:border-black/10 shadow-sm'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-6">
                          <div
                            className="w-12 h-12 rounded-2xl flex items-center justify-center"
                            style={{
                              backgroundColor: isDark
                                ? 'rgba(255,255,255,0.08)'
                                : 'rgba(0,0,0,0.04)',
                              color: accent
                            }}
                          >
                            <IconComp className="w-6 h-6" />
                          </div>
                          {item.tag && (
                            <span
                              className="text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider"
                              style={{
                                backgroundColor: isDark
                                  ? 'rgba(255,255,255,0.1)'
                                  : 'rgba(0,0,0,0.05)',
                                color: accent
                              }}
                            >
                              {item.tag}
                            </span>
                          )}
                        </div>

                        <h3 className="text-xl sm:text-2xl font-bold tracking-tight mb-2">
                          {item.title}
                        </h3>
                        <p
                          className="text-sm sm:text-base leading-relaxed"
                          style={{ color: isDark ? '#A1A1A6' : '#6E6E73' }}
                        >
                          {item.description}
                        </p>
                      </div>

                      {item.statNumber && (
                        <div className="mt-8 pt-6 border-t border-white/5">
                          <div
                            className="text-3xl sm:text-4xl font-extrabold tracking-tight"
                            style={{ color: accent }}
                          >
                            {item.statNumber}
                          </div>
                          {item.statLabel && (
                            <div
                              className="text-xs sm:text-sm font-medium mt-1"
                              style={{ color: isDark ? '#A1A1A6' : '#6E6E73' }}
                            >
                              {item.statLabel}
                            </div>
                          )}
                        </div>
                      )}

                      {item.imageUrl && (
                        <div className="mt-6 rounded-xl overflow-hidden border border-white/10 max-h-52">
                          <img
                            src={item.imageUrl}
                            alt={item.title}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        );

      case 'productHighlight':
        if (!s.productHighlight?.enabled) return null;
        return (
          <section
            key="productHighlight"
            id="product"
            className={`py-24 px-6 relative ${
              isEditable ? 'group hover:outline-1 hover:outline-dashed hover:outline-blue-500' : ''
            }`}
          >
            {isEditable && onEditSection && (
              <button
                onClick={() => onEditSection('productHighlight')}
                className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity bg-blue-600 text-white text-xs px-3 py-1 rounded-full shadow-lg flex items-center gap-1"
              >
                <Edit3 className="w-3 h-3" />
                Editar Producto
              </button>
            )}

            <div className="max-w-6xl mx-auto">
              <div
                className={`rounded-3xl border overflow-hidden grid grid-cols-1 lg:grid-cols-2 items-center ${
                  isDark ? 'bg-[#121214] border-white/10' : 'bg-[#FAFAFC] border-black/5 shadow-md'
                }`}
              >
                <div className={`p-8 sm:p-12 md:p-16 flex flex-col justify-center ${s.productHighlight.layout === 'image-left' ? 'order-2' : 'order-1'}`}>
                  {s.productHighlight.kicker && (
                    <p
                      className="text-xs sm:text-sm font-semibold tracking-wider uppercase mb-2"
                      style={{ color: accent }}
                    >
                      {s.productHighlight.kicker}
                    </p>
                  )}
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-3">
                    {s.productHighlight.title}
                  </h2>
                  <h3
                    className="text-xl sm:text-2xl font-medium mb-6"
                    style={{ color: isDark ? '#A1A1A6' : '#6E6E73' }}
                  >
                    {s.productHighlight.subtitle}
                  </h3>
                  <p
                    className="text-base sm:text-lg leading-relaxed mb-8"
                    style={{ color: isDark ? '#D1D1D6' : '#333336' }}
                  >
                    {s.productHighlight.description}
                  </p>

                  {s.productHighlight.specs?.length > 0 && (
                    <div className="space-y-4 mb-8 pt-4 border-t border-white/10">
                      {s.productHighlight.specs.map((spec, idx) => (
                        <div
                          key={idx}
                          className="flex items-center justify-between py-2 border-b border-white/5 text-sm"
                        >
                          <span className="font-medium" style={{ color: isDark ? '#A1A1A6' : '#6E6E73' }}>
                            {spec.label}
                          </span>
                          <span className="font-bold">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <div>
                    <a
                      href={s.productHighlight.ctaLink || '#pricing'}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white transition-all hover:scale-105"
                      style={{ backgroundColor: accent }}
                    >
                      {s.productHighlight.ctaText || 'Saber Más'}
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <div className={`h-full min-h-[340px] lg:min-h-[500px] overflow-hidden bg-black/5 ${s.productHighlight.layout === 'image-left' ? 'order-1' : 'order-2'}`}>
                  <img
                    src={s.productHighlight.imageUrl}
                    alt={s.productHighlight.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </section>
        );

      case 'stats':
        if (!s.stats?.enabled || !s.stats.items?.length) return null;
        return (
          <section
            key="stats"
            id="stats"
            className={`py-20 px-6 border-y ${
              isDark ? 'bg-[#08080A] border-white/10' : 'bg-[#F2F2F7] border-black/5'
            } ${isEditable ? 'group hover:outline-1 hover:outline-dashed hover:outline-blue-500 relative' : ''}`}
          >
            {isEditable && onEditSection && (
              <button
                onClick={() => onEditSection('stats')}
                className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity bg-blue-600 text-white text-xs px-3 py-1 rounded-full shadow-lg flex items-center gap-1"
              >
                <Edit3 className="w-3 h-3" />
                Editar Métricas
              </button>
            )}

            <div className="max-w-6xl mx-auto text-center">
              {s.stats.kicker && (
                <p className="text-xs font-semibold tracking-wider uppercase mb-2" style={{ color: accent }}>
                  {s.stats.kicker}
                </p>
              )}
              {s.stats.title && (
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">{s.stats.title}</h2>
              )}
              {s.stats.subtitle && (
                <p className="text-sm sm:text-base max-w-xl mx-auto mb-12" style={{ color: isDark ? '#A1A1A6' : '#6E6E73' }}>
                  {s.stats.subtitle}
                </p>
              )}

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {s.stats.items.map((stat) => (
                  <div key={stat.id} className="flex flex-col items-center">
                    <div className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-2" style={{ color: accent }}>
                      {stat.value}
                    </div>
                    <div className="font-bold text-sm sm:text-base mb-1">{stat.label}</div>
                    {stat.description && (
                      <div className="text-xs max-w-[180px]" style={{ color: isDark ? '#86868B' : '#6E6E73' }}>
                        {stat.description}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        );

      case 'testimonials':
        if (!s.testimonials?.enabled || !s.testimonials.items?.length) return null;
        return (
          <section
            key="testimonials"
            id="testimonials"
            className={`py-24 px-6 ${isDark ? 'bg-[#0A0A0B]' : 'bg-[#F5F5F7]'} ${
              isEditable ? 'group hover:outline-1 hover:outline-dashed hover:outline-blue-500' : ''
            }`}
          >
            {isEditable && onEditSection && (
              <button
                onClick={() => onEditSection('testimonials')}
                className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity bg-blue-600 text-white text-xs px-3 py-1 rounded-full shadow-lg flex items-center gap-1"
              >
                <Edit3 className="w-3 h-3" />
                Editar Testimonios
              </button>
            )}

            <div className="max-w-6xl mx-auto">
              <div className="text-center max-w-2xl mx-auto mb-16">
                <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4">
                  {s.testimonials.title}
                </h2>
                {s.testimonials.subtitle && (
                  <p
                    className="text-base sm:text-lg"
                    style={{ color: isDark ? '#A1A1A6' : '#6E6E73' }}
                  >
                    {s.testimonials.subtitle}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {s.testimonials.items.map((t) => (
                  <div
                    key={t.id}
                    className={`rounded-3xl p-8 border flex flex-col justify-between ${
                      isDark
                        ? 'bg-[#1C1C1E] border-white/10'
                        : 'bg-white border-black/5 shadow-sm'
                    }`}
                  >
                    <div>
                      <div className="flex gap-1 mb-6 text-amber-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <blockquote
                        className="text-base sm:text-lg leading-relaxed mb-8 font-normal"
                        style={{ color: isDark ? '#F5F5F7' : '#1D1D1F' }}
                      >
                        “{t.quote}”
                      </blockquote>
                    </div>

                    <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                      <img
                        src={t.avatarUrl}
                        alt={t.name}
                        className="w-12 h-12 rounded-full object-cover border border-white/10"
                        loading="lazy"
                      />
                      <div>
                        <div className="font-bold text-sm sm:text-base">{t.name}</div>
                        <div
                          className="text-xs sm:text-sm font-medium"
                          style={{ color: isDark ? '#A1A1A6' : '#6E6E73' }}
                        >
                          {t.role} · {t.company}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );

      case 'pricing':
        if (!s.pricing?.enabled || !s.pricing.plans?.length) return null;
        return (
          <section
            key="pricing"
            id="pricing"
            className={`py-24 px-6 relative ${
              isEditable ? 'group hover:outline-1 hover:outline-dashed hover:outline-blue-500' : ''
            }`}
          >
            {isEditable && onEditSection && (
              <button
                onClick={() => onEditSection('pricing')}
                className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity bg-blue-600 text-white text-xs px-3 py-1 rounded-full shadow-lg flex items-center gap-1"
              >
                <Edit3 className="w-3 h-3" />
                Editar Precios
              </button>
            )}

            <div className="max-w-6xl mx-auto">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4">
                  {s.pricing.title}
                </h2>
                {s.pricing.subtitle && (
                  <p
                    className="text-base sm:text-lg mb-8"
                    style={{ color: isDark ? '#A1A1A6' : '#6E6E73' }}
                  >
                    {s.pricing.subtitle}
                  </p>
                )}

                <div className="inline-flex items-center p-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
                  <button
                    onClick={() => setBillingCycle('monthly')}
                    className={`px-5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                      billingCycle === 'monthly'
                        ? 'bg-white text-black shadow-md'
                        : isDark ? 'text-neutral-400 hover:text-white' : 'text-neutral-600 hover:text-black'
                    }`}
                  >
                    Mensual
                  </button>
                  <button
                    onClick={() => setBillingCycle('annual')}
                    className={`px-5 py-1.5 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 ${
                      billingCycle === 'annual'
                        ? 'bg-white text-black shadow-md'
                        : isDark ? 'text-neutral-400 hover:text-white' : 'text-neutral-600 hover:text-black'
                    }`}
                  >
                    Anual
                    <span
                      className="text-[10px] px-1.5 py-0.5 rounded-full font-bold uppercase text-white"
                      style={{ backgroundColor: accent }}
                    >
                      -20%
                    </span>
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
                {s.pricing.plans.map((p) => {
                  const isHighlight = p.highlighted;
                  const price = billingCycle === 'annual' ? p.priceAnnual : p.priceMonthly;

                  return (
                    <div
                      key={p.id}
                      className={`rounded-3xl p-8 border flex flex-col justify-between transition-all duration-300 ${
                        isHighlight
                          ? 'border-2 shadow-2xl scale-[1.02] z-10'
                          : isDark ? 'bg-[#1C1C1E] border-white/10' : 'bg-white border-black/5 shadow-sm'
                      }`}
                      style={{
                        borderColor: isHighlight ? accent : undefined,
                        backgroundColor: isHighlight
                          ? isDark ? '#1C1C24' : '#FFFFFF'
                          : undefined
                      }}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-xl font-bold">{p.name}</h3>
                          {p.tag && (
                            <span
                              className="text-xs font-bold px-3 py-1 rounded-full uppercase"
                              style={{
                                backgroundColor: isDark
                                  ? 'rgba(255,255,255,0.1)'
                                  : 'rgba(0,0,0,0.05)',
                                color: accent
                              }}
                            >
                              {p.tag}
                            </span>
                          )}
                        </div>

                        <p
                          className="text-xs sm:text-sm mb-6"
                          style={{ color: isDark ? '#A1A1A6' : '#6E6E73' }}
                        >
                          {p.description}
                        </p>

                        <div className="mb-6 pb-6 border-b border-white/10">
                          <span className="text-4xl sm:text-5xl font-extrabold tracking-tight">
                            {price}
                          </span>
                          <span
                            className="text-xs sm:text-sm ml-1"
                            style={{ color: isDark ? '#A1A1A6' : '#6E6E73' }}
                          >
                            / pago {billingCycle === 'annual' ? '(anual)' : ''}
                          </span>
                        </div>

                        <ul className="space-y-3 mb-8 text-sm">
                          {(p.features || []).map((feat, fIdx) => (
                            <li key={fIdx} className="flex items-center gap-2.5">
                              <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                              <span style={{ color: isDark ? '#D1D1D6' : '#333336' }}>
                                {feat}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <a
                        href={p.ctaLink || '#contact'}
                        className={`w-full py-3.5 rounded-full text-center text-sm font-semibold transition-all ${
                          isHighlight
                            ? 'text-white hover:scale-[1.02] shadow-lg'
                            : isDark
                            ? 'bg-white/10 text-white hover:bg-white/15'
                            : 'bg-black/5 text-[#1D1D1F] hover:bg-black/10'
                        }`}
                        style={{
                          backgroundColor: isHighlight ? accent : undefined
                        }}
                      >
                        {p.ctaText || 'Seleccionar Plan'}
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        );

      case 'faq':
        if (!s.faq?.enabled || !s.faq.items?.length) return null;
        return (
          <section
            key="faq"
            id="faq"
            className={`py-24 px-6 ${isDark ? 'bg-[#0D0D0E]' : 'bg-[#F5F5F7]'} ${
              isEditable ? 'group hover:outline-1 hover:outline-dashed hover:outline-blue-500' : ''
            }`}
          >
            {isEditable && onEditSection && (
              <button
                onClick={() => onEditSection('faq')}
                className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity bg-blue-600 text-white text-xs px-3 py-1 rounded-full shadow-lg flex items-center gap-1"
              >
                <Edit3 className="w-3 h-3" />
                Editar FAQ
              </button>
            )}

            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-14">
                <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-3">
                  {s.faq.title}
                </h2>
                {s.faq.subtitle && (
                  <p
                    className="text-base sm:text-lg"
                    style={{ color: isDark ? '#A1A1A6' : '#6E6E73' }}
                  >
                    {s.faq.subtitle}
                  </p>
                )}
              </div>

              <div className="space-y-4">
                {s.faq.items.map((item) => {
                  const isOpen = !!openFaq[item.id];
                  return (
                    <div
                      key={item.id}
                      className={`rounded-2xl border transition-all ${
                        isDark ? 'bg-[#1C1C1E] border-white/10' : 'bg-white border-black/5'
                      }`}
                    >
                      <button
                        onClick={() => toggleFaq(item.id)}
                        className="w-full p-6 text-left flex items-center justify-between gap-4 font-semibold text-base sm:text-lg"
                      >
                        <span>{item.question}</span>
                        <ChevronDown
                          className={`w-5 h-5 transition-transform duration-200 shrink-0 ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                          style={{ color: accent }}
                        />
                      </button>
                      {isOpen && (
                        <div
                          className="px-6 pb-6 text-sm sm:text-base leading-relaxed border-t border-white/5 pt-4"
                          style={{ color: isDark ? '#A1A1A6' : '#6E6E73' }}
                        >
                          {item.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        );

      case 'ctaFinal':
        if (!s.ctaFinal?.enabled) return null;
        return (
          <section
            key="ctaFinal"
            id="contact"
            className={`py-28 px-6 text-center relative overflow-hidden ${
              isEditable ? 'group hover:outline-1 hover:outline-dashed hover:outline-blue-500' : ''
            }`}
          >
            {isEditable && onEditSection && (
              <button
                onClick={() => onEditSection('ctaFinal')}
                className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity bg-blue-600 text-white text-xs px-3 py-1 rounded-full shadow-lg flex items-center gap-1"
              >
                <Edit3 className="w-3 h-3" />
                Editar CTA Final
              </button>
            )}

            {/* Glowing background aura */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[140px] opacity-20 pointer-events-none"
              style={{ backgroundColor: accent }}
            />

            <div className="max-w-3xl mx-auto relative z-10">
              {s.ctaFinal.kicker && (
                <p
                  className="text-xs sm:text-sm font-semibold tracking-wider uppercase mb-3"
                  style={{ color: accent }}
                >
                  {s.ctaFinal.kicker}
                </p>
              )}

              <h2 className="text-4xl sm:text-6xl font-bold tracking-tight mb-6 leading-tight">
                {s.ctaFinal.title}
              </h2>

              <p
                className="text-lg sm:text-xl max-w-xl mx-auto leading-relaxed mb-10"
                style={{ color: isDark ? '#A1A1A6' : '#6E6E73' }}
              >
                {s.ctaFinal.subtitle}
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href={s.ctaFinal.primaryCta?.link || '#pricing'}
                  className="px-8 py-4 rounded-full text-base font-semibold text-white transition-all hover:scale-105 shadow-xl flex items-center gap-2"
                  style={{ backgroundColor: accent }}
                >
                  {s.ctaFinal.primaryCta?.text || 'Comenzar Ahora'}
                  <ArrowRight className="w-4 h-4" />
                </a>

                {s.ctaFinal.secondaryCta?.text && (
                  <a
                    href={s.ctaFinal.secondaryCta.link || '#product'}
                    className={`px-8 py-4 rounded-full text-base font-medium border ${
                      isDark
                        ? 'border-white/20 text-white hover:bg-white/5'
                        : 'border-black/15 text-[#1D1D1F] hover:bg-black/5'
                    }`}
                  >
                    {s.ctaFinal.secondaryCta.text}
                  </a>
                )}
              </div>
            </div>
          </section>
        );

      case 'map':
        if (!s.map || s.map.enabled === false) return null;
        return (
          <section
            key="map"
            id="map"
            className={`py-24 px-6 relative ${isDark ? 'bg-[#000000]' : 'bg-[#FFFFFF]'} ${
              isEditable ? 'group hover:outline-1 hover:outline-dashed hover:outline-blue-500' : ''
            }`}
          >
            {isEditable && onEditSection && (
              <button
                onClick={() => onEditSection('map')}
                className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity bg-blue-600 text-white text-xs px-3 py-1 rounded-full shadow-lg flex items-center gap-1"
              >
                <Edit3 className="w-3 h-3" />
                Editar Mapa & Contacto
              </button>
            )}
            <div className="max-w-6xl mx-auto">
              <div className="text-center max-w-3xl mx-auto mb-16">
                {s.map.kicker && (
                  <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase mb-3" style={{ color: accent }}>
                    {s.map.kicker}
                  </p>
                )}
                <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4">{s.map.title}</h2>
                {s.map.subtitle && (
                  <p className="text-base sm:text-lg" style={{ color: isDark ? '#A1A1A6' : '#6E6E73' }}>
                    {s.map.subtitle}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                {/* Contact Cards Info */}
                <div className="lg:col-span-5 flex flex-col justify-between gap-4">
                  <div
                    className={`p-6 rounded-2xl border ${
                      isDark ? 'bg-[#1C1C1E] border-white/10' : 'bg-[#F5F5F7] border-black/5'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-blue-500/10 text-blue-500 shrink-0">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm mb-1">Dirección</h4>
                        <p className="text-xs text-neutral-400 leading-relaxed">{s.map.address}</p>
                        <p className="text-xs text-neutral-400">{s.map.city}</p>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`p-6 rounded-2xl border ${
                      isDark ? 'bg-[#1C1C1E] border-white/10' : 'bg-[#F5F5F7] border-black/5'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-green-500/10 text-green-500 shrink-0">
                        <Clock className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm mb-1">Horario de Atención</h4>
                        <p className="text-xs text-neutral-400 leading-relaxed">{s.map.hours}</p>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`p-6 rounded-2xl border ${
                      isDark ? 'bg-[#1C1C1E] border-white/10' : 'bg-[#F5F5F7] border-black/5'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-purple-500/10 text-purple-500 shrink-0">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm mb-1">Contacto Directo</h4>
                        <p className="text-xs text-neutral-400">{s.map.phone}</p>
                        <p className="text-xs text-neutral-400">{s.map.email}</p>
                      </div>
                    </div>
                  </div>

                  {s.map.directionsUrl && (
                    <a
                      href={s.map.directionsUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full py-3.5 px-6 rounded-xl font-semibold text-xs text-white text-center flex items-center justify-center gap-2 transition-all hover:scale-[1.02] shadow-md"
                      style={{ backgroundColor: accent }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Cómo Llegar (Google Maps)</span>
                    </a>
                  )}
                </div>

                {/* Map Frame */}
                <div
                  className={`lg:col-span-7 rounded-3xl overflow-hidden border min-h-[380px] relative ${
                    isDark ? 'border-white/10 bg-[#161618]' : 'border-black/5 bg-[#F5F5F7]'
                  }`}
                >
                  <iframe
                    title="Ubicación"
                    src={s.map.embedUrl}
                    className="w-full h-full min-h-[380px] border-0"
                    loading="lazy"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </section>
        );

      case 'slider':
        if (!s.slider || s.slider.enabled === false || !s.slider.slides || s.slider.slides.length === 0) return null;
        const slides = s.slider.slides;
        const activeSlide = slides[currentSlide % slides.length];

        return (
          <section
            key="slider"
            id="slider"
            className={`py-24 px-6 relative overflow-hidden ${isDark ? 'bg-[#0E0E10]' : 'bg-[#FAFAFA]'} ${
              isEditable ? 'group hover:outline-1 hover:outline-dashed hover:outline-blue-500' : ''
            }`}
          >
            {isEditable && onEditSection && (
              <button
                onClick={() => onEditSection('slider')}
                className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity bg-blue-600 text-white text-xs px-3 py-1 rounded-full shadow-lg flex items-center gap-1"
              >
                <Edit3 className="w-3 h-3" />
                Editar Slider
              </button>
            )}
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                <div>
                  {s.slider.kicker && (
                    <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase mb-2" style={{ color: accent }}>
                      {s.slider.kicker}
                    </p>
                  )}
                  <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">{s.slider.title}</h2>
                  {s.slider.subtitle && (
                    <p className="text-base sm:text-lg mt-2" style={{ color: isDark ? '#A1A1A6' : '#6E6E73' }}>
                      {s.slider.subtitle}
                    </p>
                  )}
                </div>

                {/* Slider Controls */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setCurrentSlide((prev) => (prev > 0 ? prev - 1 : slides.length - 1))}
                    className={`p-3 rounded-full border transition-all ${
                      isDark ? 'border-white/10 bg-white/5 hover:bg-white/10' : 'border-black/10 bg-black/5 hover:bg-black/10'
                    }`}
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <span className="text-xs font-mono text-neutral-400">
                    {(currentSlide % slides.length) + 1} / {slides.length}
                  </span>
                  <button
                    onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
                    className={`p-3 rounded-full border transition-all ${
                      isDark ? 'border-white/10 bg-white/5 hover:bg-white/10' : 'border-black/10 bg-black/5 hover:bg-black/10'
                    }`}
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Active Slide Card */}
              <div
                className={`relative rounded-3xl overflow-hidden border transition-all duration-500 shadow-2xl grid grid-cols-1 lg:grid-cols-12 ${
                  isDark ? 'bg-[#1C1C1E] border-white/10' : 'bg-white border-black/5'
                }`}
              >
                <div className="lg:col-span-6 p-8 md:p-14 flex flex-col justify-center">
                  {activeSlide.tag && (
                    <span
                      className="inline-block self-start px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-4 border"
                      style={{ color: accent, borderColor: `${accent}40`, backgroundColor: `${accent}10` }}
                    >
                      {activeSlide.tag}
                    </span>
                  )}
                  <h3 className="text-2xl sm:text-4xl font-bold tracking-tight mb-4">{activeSlide.title}</h3>
                  <p className="text-sm sm:text-base leading-relaxed mb-8" style={{ color: isDark ? '#A1A1A6' : '#6E6E73' }}>
                    {activeSlide.subtitle}
                  </p>
                  {activeSlide.ctaText && (
                    <a
                      href={activeSlide.ctaLink || '#'}
                      className="self-start px-6 py-3 rounded-full text-xs font-semibold text-white transition-transform hover:scale-105 shadow-md flex items-center gap-2"
                      style={{ backgroundColor: accent }}
                    >
                      {activeSlide.ctaText}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>

                <div className="lg:col-span-6 aspect-[16/10] lg:aspect-auto overflow-hidden bg-black/50">
                  <img
                    src={activeSlide.imageUrl}
                    alt={activeSlide.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>

              {/* Slide Dots Indicator */}
              <div className="flex items-center justify-center gap-2 mt-8">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentSlide % slides.length === idx ? 'w-8 bg-blue-500' : 'w-2 bg-neutral-600'
                    }`}
                  />
                ))}
              </div>
            </div>
          </section>
        );

      case 'gallery':
        if (!s.gallery || s.gallery.enabled === false || !s.gallery.items) return null;
        return (
          <section
            key="gallery"
            id="gallery"
            className={`py-24 px-6 relative ${isDark ? 'bg-[#000000]' : 'bg-[#FFFFFF]'} ${
              isEditable ? 'group hover:outline-1 hover:outline-dashed hover:outline-blue-500' : ''
            }`}
          >
            {isEditable && onEditSection && (
              <button
                onClick={() => onEditSection('gallery')}
                className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity bg-blue-600 text-white text-xs px-3 py-1 rounded-full shadow-lg flex items-center gap-1"
              >
                <Edit3 className="w-3 h-3" />
                Editar Galería
              </button>
            )}
            <div className="max-w-6xl mx-auto">
              <div className="text-center max-w-3xl mx-auto mb-16">
                {s.gallery.kicker && (
                  <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase mb-3" style={{ color: accent }}>
                    {s.gallery.kicker}
                  </p>
                )}
                <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4">{s.gallery.title}</h2>
                {s.gallery.subtitle && (
                  <p className="text-base sm:text-lg" style={{ color: isDark ? '#A1A1A6' : '#6E6E73' }}>
                    {s.gallery.subtitle}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {s.gallery.items.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setLightboxImg({ url: item.imageUrl, title: item.title })}
                    className={`group/card rounded-2xl overflow-hidden border cursor-pointer relative transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${
                      isDark ? 'border-white/10 bg-[#161618]' : 'border-black/5 bg-[#F5F5F7]'
                    }`}
                  >
                    <div className="aspect-square overflow-hidden relative">
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/card:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="p-3 rounded-full bg-white/20 backdrop-blur-md text-white">
                          <Maximize2 className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <span className="text-[10px] uppercase font-bold tracking-wider text-neutral-400">
                        {item.category}
                      </span>
                      <h4 className="text-sm font-semibold mt-0.5">{item.title}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );

      case 'tabs':
        if (!s.tabs || s.tabs.enabled === false || !s.tabs.tabs || s.tabs.tabs.length === 0) return null;
        const currentTabs = s.tabs.tabs;
        const currentActiveTab = currentTabs.find((t) => t.id === activeTabId) || currentTabs[0];

        return (
          <section
            key="tabs"
            id="tabs"
            className={`py-24 px-6 relative ${isDark ? 'bg-[#0E0E10]' : 'bg-[#F9F9FA]'} ${
              isEditable ? 'group hover:outline-1 hover:outline-dashed hover:outline-blue-500' : ''
            }`}
          >
            {isEditable && onEditSection && (
              <button
                onClick={() => onEditSection('tabs')}
                className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity bg-blue-600 text-white text-xs px-3 py-1 rounded-full shadow-lg flex items-center gap-1"
              >
                <Edit3 className="w-3 h-3" />
                Editar Pestañas
              </button>
            )}
            <div className="max-w-6xl mx-auto">
              <div className="text-center max-w-3xl mx-auto mb-14">
                {s.tabs.kicker && (
                  <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase mb-3" style={{ color: accent }}>
                    {s.tabs.kicker}
                  </p>
                )}
                <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4">{s.tabs.title}</h2>
                {s.tabs.subtitle && (
                  <p className="text-base sm:text-lg" style={{ color: isDark ? '#A1A1A6' : '#6E6E73' }}>
                    {s.tabs.subtitle}
                  </p>
                )}
              </div>

              {/* Tabs Navigation */}
              <div className="flex items-center justify-center gap-2 mb-12 overflow-x-auto pb-2">
                <div
                  className={`p-1.5 rounded-full border flex items-center gap-1.5 ${
                    isDark ? 'bg-[#1C1C1E] border-white/10' : 'bg-[#E5E5EA] border-black/5'
                  }`}
                >
                  {currentTabs.map((tab) => {
                    const isSelected = (activeTabId || currentTabs[0].id) === tab.id;
                    const IconComp = getIcon(tab.icon);
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTabId(tab.id)}
                        className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all flex items-center gap-2 whitespace-nowrap ${
                          isSelected
                            ? 'bg-blue-600 text-white shadow-md'
                            : isDark
                            ? 'text-neutral-400 hover:text-white'
                            : 'text-neutral-600 hover:text-black'
                        }`}
                      >
                        <IconComp className="w-3.5 h-3.5" />
                        <span>{tab.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Tab Content Display */}
              <div
                className={`rounded-3xl border overflow-hidden p-8 md:p-14 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center shadow-xl ${
                  isDark ? 'bg-[#1C1C1E] border-white/10' : 'bg-white border-black/5'
                }`}
              >
                <div className="lg:col-span-6 space-y-6">
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight leading-tight">
                    {currentActiveTab.title}
                  </h3>
                  <p className="text-sm sm:text-base leading-relaxed" style={{ color: isDark ? '#A1A1A6' : '#6E6E73' }}>
                    {currentActiveTab.description}
                  </p>

                  <div className="space-y-3 pt-2">
                    {currentActiveTab.points.map((pt, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="p-1 rounded-full bg-blue-500/10 text-blue-500 shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-xs sm:text-sm font-medium">{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-6 rounded-2xl overflow-hidden border border-white/10 aspect-[16/10] bg-black/60 shadow-lg">
                  <img
                    src={currentActiveTab.imageUrl}
                    alt={currentActiveTab.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </section>
        );

      case 'marquee':
        if (!s.marquee || s.marquee.enabled === false || !s.marquee.items) return null;
        return (
          <div
            key="marquee"
            id="marquee"
            className={`py-8 border-y overflow-hidden relative ${
              isDark ? 'bg-[#161618] border-white/10 text-white' : 'bg-[#F5F5F7] border-black/5 text-[#1D1D1F]'
            } ${isEditable ? 'group hover:outline-1 hover:outline-dashed hover:outline-blue-500' : ''}`}
          >
            {isEditable && onEditSection && (
              <button
                onClick={() => onEditSection('marquee')}
                className="absolute top-2 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity bg-blue-600 text-white text-[10px] px-2.5 py-0.5 rounded-full shadow"
              >
                Editar Marquesina
              </button>
            )}
            <div className="flex w-max animate-marquee space-x-12">
              {[...s.marquee.items, ...s.marquee.items, ...s.marquee.items].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 whitespace-nowrap text-sm font-semibold tracking-wide">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: accent }} />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        );

      case 'countdown':
        if (!s.countdown || s.countdown.enabled === false) return null;
        return (
          <section
            key="countdown"
            id="countdown"
            className={`py-24 px-6 relative text-center overflow-hidden ${
              isDark ? 'bg-[#000000]' : 'bg-[#FFFFFF]'
            } ${isEditable ? 'group hover:outline-1 hover:outline-dashed hover:outline-blue-500' : ''}`}
          >
            {isEditable && onEditSection && (
              <button
                onClick={() => onEditSection('countdown')}
                className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity bg-blue-600 text-white text-xs px-3 py-1 rounded-full shadow-lg flex items-center gap-1"
              >
                <Edit3 className="w-3 h-3" />
                Editar Cuenta Regresiva
              </button>
            )}
            <div className="max-w-4xl mx-auto relative z-10">
              {s.countdown.badge && (
                <span
                  className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border"
                  style={{ color: accent, borderColor: `${accent}40`, backgroundColor: `${accent}15` }}
                >
                  {s.countdown.badge}
                </span>
              )}
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4">{s.countdown.title}</h2>
              <p className="text-base sm:text-lg max-w-2xl mx-auto mb-12" style={{ color: isDark ? '#A1A1A6' : '#6E6E73' }}>
                {s.countdown.subtitle}
              </p>

              {/* Countdown Digits Grid */}
              <div className="grid grid-cols-4 gap-3 sm:gap-6 max-w-xl mx-auto mb-10">
                {[
                  { label: 'DÍAS', value: timeLeft.days },
                  { label: 'HORAS', value: timeLeft.hours },
                  { label: 'MINUTOS', value: timeLeft.minutes },
                  { label: 'SEGUNDOS', value: timeLeft.seconds }
                ].map((slot, i) => (
                  <div
                    key={i}
                    className={`p-4 sm:p-6 rounded-2xl border flex flex-col items-center justify-center ${
                      isDark ? 'bg-[#1C1C1E] border-white/10' : 'bg-[#F5F5F7] border-black/5'
                    }`}
                  >
                    <span className="text-2xl sm:text-5xl font-bold font-mono tracking-tight text-white">
                      {String(slot.value).padStart(2, '0')}
                    </span>
                    <span className="text-[10px] sm:text-xs font-semibold tracking-wider text-neutral-400 mt-1 uppercase">
                      {slot.label}
                    </span>
                  </div>
                ))}
              </div>

              <a
                href={s.countdown.ctaLink || '#pricing'}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold text-white transition-all hover:scale-105 shadow-xl"
                style={{ backgroundColor: accent }}
              >
                <span>{s.countdown.ctaText || 'Reclamar Oferta'}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </section>
        );

      case 'leadForm':
        if (!s.leadForm || s.leadForm.enabled === false || !s.leadForm.steps) return null;
        const formSteps = s.leadForm.steps;
        const currentStepObj = formSteps.find((st) => st.stepNumber === formStep) || formSteps[0];

        return (
          <section
            key="leadForm"
            id="lead-form"
            className={`py-24 px-6 relative ${isDark ? 'bg-[#0E0E10]' : 'bg-[#FAFAFA]'} ${
              isEditable ? 'group hover:outline-1 hover:outline-dashed hover:outline-blue-500' : ''
            }`}
          >
            {isEditable && onEditSection && (
              <button
                onClick={() => onEditSection('leadForm')}
                className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity bg-blue-600 text-white text-xs px-3 py-1 rounded-full shadow-lg flex items-center gap-1"
              >
                <Edit3 className="w-3 h-3" />
                Editar Formulario
              </button>
            )}
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                {s.leadForm.kicker && (
                  <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase mb-2" style={{ color: accent }}>
                    {s.leadForm.kicker}
                  </p>
                )}
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">{s.leadForm.title}</h2>
                <p className="text-sm sm:text-base" style={{ color: isDark ? '#A1A1A6' : '#6E6E73' }}>
                  {s.leadForm.subtitle}
                </p>
              </div>

              <div
                className={`p-8 md:p-12 rounded-3xl border shadow-2xl ${
                  isDark ? 'bg-[#1C1C1E] border-white/10' : 'bg-white border-black/5'
                }`}
              >
                {formSubmitted ? (
                  <div className="text-center py-10 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-green-500/20 text-green-400 mx-auto flex items-center justify-center">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{s.leadForm.successTitle}</h3>
                    <p className="text-xs sm:text-sm text-neutral-400 max-w-md mx-auto">
                      {s.leadForm.successMessage}
                    </p>
                    <button
                      onClick={() => {
                        setFormSubmitted(false);
                        setFormStep(1);
                        setFormData({});
                      }}
                      className="mt-4 px-6 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-xs font-semibold text-white"
                    >
                      Enviar otra respuesta
                    </button>
                  </div>
                ) : (
                  <div>
                    {/* Stepper Progress */}
                    <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/10">
                      {formSteps.map((st) => (
                        <div key={st.id} className="flex items-center gap-2">
                          <span
                            className={`w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center transition-colors ${
                              formStep === st.stepNumber
                                ? 'bg-blue-600 text-white'
                                : formStep > st.stepNumber
                                ? 'bg-green-500 text-white'
                                : 'bg-white/10 text-neutral-400'
                            }`}
                          >
                            {formStep > st.stepNumber ? '✓' : st.stepNumber}
                          </span>
                          <span className="text-xs font-medium hidden sm:inline text-neutral-300">
                            Paso {st.stepNumber}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-bold text-white mb-1">{currentStepObj.title}</h4>
                      <p className="text-xs text-neutral-400">{currentStepObj.subtitle}</p>
                    </div>

                    {/* Step Fields */}
                    <div className="space-y-4 mb-8">
                      {currentStepObj.fields.map((fld) => (
                        <div key={fld.id} className="space-y-1.5">
                          <label className="text-xs font-semibold text-neutral-300 block">{fld.label}</label>
                          {fld.type === 'select' ? (
                            <select
                              value={formData[fld.id] || ''}
                              onChange={(e) => setFormData((prev) => ({ ...prev, [fld.id]: e.target.value }))}
                              className="w-full bg-[#161618] border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-blue-500"
                            >
                              <option value="">Selecciona una opción...</option>
                              {(fld.options || []).map((opt, oIdx) => (
                                <option key={oIdx} value={opt}>
                                  {opt}
                                </option>
                              ))}
                            </select>
                          ) : fld.type === 'textarea' ? (
                            <textarea
                              rows={3}
                              placeholder={fld.placeholder}
                              value={formData[fld.id] || ''}
                              onChange={(e) => setFormData((prev) => ({ ...prev, [fld.id]: e.target.value }))}
                              className="w-full bg-[#161618] border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-blue-500"
                            />
                          ) : (
                            <input
                              type={fld.type}
                              placeholder={fld.placeholder}
                              value={formData[fld.id] || ''}
                              onChange={(e) => setFormData((prev) => ({ ...prev, [fld.id]: e.target.value }))}
                              className="w-full bg-[#161618] border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-blue-500"
                            />
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Step Nav Actions */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                      {formStep > 1 ? (
                        <button
                          onClick={() => setFormStep((p) => p - 1)}
                          className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-semibold text-neutral-300"
                        >
                          Anterior
                        </button>
                      ) : (
                        <div />
                      )}

                      {formStep < formSteps.length ? (
                        <button
                          onClick={() => setFormStep((p) => p + 1)}
                          className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-xs font-semibold text-white flex items-center gap-1.5 shadow-md"
                        >
                          <span>Siguiente</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      ) : (
                        <button
                          onClick={() => setFormSubmitted(true)}
                          className="px-6 py-2.5 rounded-xl text-xs font-semibold text-white flex items-center gap-2 shadow-lg"
                          style={{ backgroundColor: accent }}
                        >
                          <Send className="w-3.5 h-3.5" />
                          <span>{s.leadForm.submitButtonText || 'Enviar Solicitud'}</span>
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        );

      case 'timeline':
        if (!s.timeline || s.timeline.enabled === false || !s.timeline.milestones) return null;
        return (
          <section
            key="timeline"
            id="timeline"
            className={`py-24 px-6 relative ${isDark ? 'bg-[#000000]' : 'bg-[#FFFFFF]'} ${
              isEditable ? 'group hover:outline-1 hover:outline-dashed hover:outline-blue-500' : ''
            }`}
          >
            {isEditable && onEditSection && (
              <button
                onClick={() => onEditSection('timeline')}
                className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity bg-blue-600 text-white text-xs px-3 py-1 rounded-full shadow-lg flex items-center gap-1"
              >
                <Edit3 className="w-3 h-3" />
                Editar Roadmap
              </button>
            )}
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                {s.timeline.kicker && (
                  <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase mb-2" style={{ color: accent }}>
                    {s.timeline.kicker}
                  </p>
                )}
                <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4">{s.timeline.title}</h2>
                {s.timeline.subtitle && (
                  <p className="text-base sm:text-lg" style={{ color: isDark ? '#A1A1A6' : '#6E6E73' }}>
                    {s.timeline.subtitle}
                  </p>
                )}
              </div>

              {/* Timeline Items */}
              <div className="relative pl-6 sm:pl-8 border-l border-white/15 space-y-12">
                {s.timeline.milestones.map((m) => (
                  <div key={m.id} className="relative">
                    {/* Node circle */}
                    <div
                      className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                        m.status === 'completed'
                          ? 'bg-green-500 border-green-400 text-white'
                          : m.status === 'in_progress'
                          ? 'bg-blue-600 border-blue-400 text-white'
                          : 'bg-[#1C1C1E] border-neutral-600 text-neutral-400'
                      }`}
                    >
                      {m.status === 'completed' && <Check className="w-3.5 h-3.5" />}
                    </div>

                    <div
                      className={`p-6 sm:p-8 rounded-2xl border ${
                        isDark ? 'bg-[#161618] border-white/10' : 'bg-[#F5F5F7] border-black/5'
                      }`}
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="text-[11px] font-mono uppercase tracking-wider font-semibold" style={{ color: accent }}>
                          {m.phase} • {m.dateOrQuarter}
                        </span>
                        <span
                          className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider ${
                            m.status === 'completed'
                              ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                              : m.status === 'in_progress'
                              ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                              : 'bg-white/5 text-neutral-400 border border-white/10'
                          }`}
                        >
                          {m.status === 'completed' ? 'Completado' : m.status === 'in_progress' ? 'En Curso' : 'Próximamente'}
                        </span>
                      </div>

                      <h4 className="text-lg sm:text-xl font-bold text-white mb-2">{m.title}</h4>
                      <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-4">{m.description}</p>

                      {m.points && m.points.length > 0 && (
                        <div className="space-y-1.5 pt-2 border-t border-white/5">
                          {m.points.map((pt, pIdx) => (
                            <div key={pIdx} className="flex items-center gap-2 text-xs text-neutral-300">
                              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                              <span>{pt}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );

      case 'footer':
        if (!s.footer) return null;
        return (
          <footer
            key="footer"
            id="section-footer"
            className={`py-14 px-6 border-t text-xs ${
              isDark ? 'bg-[#000000] border-white/10 text-neutral-500' : 'bg-[#F5F5F7] border-black/5 text-neutral-500'
            }`}
          >
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
              <p>{s.footer.copyright || `© 2026 ${site.name}. Todos los derechos reservados.`}</p>

              <div className="flex flex-wrap items-center gap-6">
                {(s.footer.legalLinks || []).map((legal, idx) => (
                  <a
                    key={idx}
                    href={legal.href}
                    className="hover:underline transition-colors"
                    style={{ color: isDark ? '#86868B' : '#6E6E73' }}
                  >
                    {legal.label}
                  </a>
                ))}
              </div>

              <div className="flex items-center gap-4">
                {(s.footer.socialLinks || []).map((soc, idx) => (
                  <a
                    key={idx}
                    href={soc.url}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white transition-colors font-medium"
                    style={{ color: isDark ? '#86868B' : '#6E6E73' }}
                  >
                    {soc.platform}
                  </a>
                ))}
              </div>
            </div>
          </footer>
        );

      default:
        return null;
    }
  };

  return (
    <div
      id="apple-website-root"
      className={`w-full min-h-screen transition-colors duration-300 ${
        isDark ? 'bg-[#000000] text-[#F5F5F7]' : 'bg-[#FFFFFF] text-[#1D1D1F]'
      }`}
      style={{
        fontFamily: site.fontFamily || 'Inter, -apple-system, sans-serif'
      }}
    >
      {/* Custom CSS injection */}
      {site.customCss && (
        <style dangerouslySetInnerHTML={{ __html: site.customCss }} />
      )}

      {/* Render sections according to dynamic sectionOrder */}
      {order.map((sectionType) => {
        const rendered = renderSection(sectionType);
        if (!rendered) return null;

        const isSelected = selectedSection === sectionType;
        const customStyle = site.customSectionStyles?.[sectionType] || {};
        const elementSettings = site.elementSettings?.[sectionType] || {};

        // Calculate dynamic style overrides
        const wrapperStyle: React.CSSProperties = {
          backgroundColor: customStyle.backgroundColor || undefined,
          backgroundImage: customStyle.backgroundGradient || undefined,
          color: customStyle.textColor || undefined,
          paddingTop: customStyle.paddingTop || undefined,
          paddingBottom: customStyle.paddingBottom || undefined,
          paddingLeft: customStyle.paddingLeft || undefined,
          paddingRight: customStyle.paddingRight || undefined,
          marginTop: customStyle.marginTop || undefined,
          marginBottom: customStyle.marginBottom || undefined,
          marginLeft: customStyle.marginLeft || undefined,
          marginRight: customStyle.marginRight || undefined,
          borderRadius: customStyle.borderRadius !== undefined ? `${customStyle.borderRadius}px` : undefined,
          borderTopLeftRadius: customStyle.borderTopLeftRadius !== undefined ? `${customStyle.borderTopLeftRadius}px` : undefined,
          borderTopRightRadius: customStyle.borderTopRightRadius !== undefined ? `${customStyle.borderTopRightRadius}px` : undefined,
          borderBottomRightRadius: customStyle.borderBottomRightRadius !== undefined ? `${customStyle.borderBottomRightRadius}px` : undefined,
          borderBottomLeftRadius: customStyle.borderBottomLeftRadius !== undefined ? `${customStyle.borderBottomLeftRadius}px` : undefined,
          opacity: customStyle.opacity !== undefined ? customStyle.opacity / 100 : undefined,
          filter: customStyle.blur ? `blur(${customStyle.blur}px)` : undefined,
          textAlign: customStyle.textAlign || undefined
        };

        // Visibility classes
        const visibilityClasses = [
          elementSettings.visibility?.hideOnMobile ? 'max-sm:hidden' : '',
          elementSettings.visibility?.hideOnTablet ? 'sm:max-lg:hidden' : '',
          elementSettings.visibility?.hideOnDesktop ? 'lg:hidden' : ''
        ].filter(Boolean).join(' ');

        if (!isEditable) {
          return (
            <div
              key={sectionType}
              id={elementSettings.customId || `section-${sectionType}`}
              className={`relative transition-all ${visibilityClasses} ${elementSettings.customClasses || ''}`}
              style={wrapperStyle}
            >
              {customStyle.customCss && (
                <style dangerouslySetInnerHTML={{ __html: `#section-${sectionType} { ${customStyle.customCss} }` }} />
              )}
              {rendered}
            </div>
          );
        }

        return (
          <div
            key={sectionType}
            id={`wrapper-${sectionType}`}
            onClick={(e) => {
              e.stopPropagation();
              if (onSelectSection) onSelectSection(sectionType);
              if (onEditSection) onEditSection(sectionType);
            }}
            onContextMenu={(e) => {
              if (onContextMenu) {
                e.preventDefault();
                e.stopPropagation();
                onContextMenu(e, sectionType);
              }
            }}
            style={wrapperStyle}
            className={`relative transition-all group/sec cursor-pointer ${visibilityClasses} ${elementSettings.customClasses || ''} ${
              isSelected
                ? 'ring-2 ring-[#00E5FF] ring-inset shadow-[0_0_20px_rgba(0,229,255,0.2)]'
                : 'hover:ring-1 hover:ring-[#00E5FF]/40 hover:ring-inset'
            }`}
          >
            {/* Active section floating badge */}
            <div
              className={`absolute top-2 left-2 z-40 px-2.5 py-1 rounded-md text-[10px] font-black uppercase tracking-wider transition-opacity flex items-center gap-1.5 shadow-md pointer-events-none ${
                isSelected
                  ? 'bg-[#00E5FF] text-black opacity-100'
                  : 'bg-black/70 text-white/80 opacity-0 group-hover/sec:opacity-100 border border-white/10'
              }`}
            >
              <span>✦</span>
              <span>{customStyle.customName || sectionType}</span>
            </div>
            {customStyle.customCss && (
              <style dangerouslySetInnerHTML={{ __html: `#wrapper-${sectionType} { ${customStyle.customCss} }` }} />
            )}
            {rendered}
          </div>
        );
      })}

      {/* Lightbox Modal for Gallery */}
      {lightboxImg && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setLightboxImg(null)}
        >
          <div className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setLightboxImg(null)}
              className="absolute -top-12 right-0 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={lightboxImg.url}
              alt={lightboxImg.title}
              className="max-w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl border border-white/10"
            />
            {lightboxImg.title && (
              <p className="text-white text-sm font-semibold mt-4 text-center">{lightboxImg.title}</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
