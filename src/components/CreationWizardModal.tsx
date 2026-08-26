import React, { useState } from 'react';
import { SiteConfig, SectionType, BentoFeatureItem, PricingPlan, TestimonialItem, FaqItem } from '../types';
import { TEMPLATES } from '../data/templates';
import {
  X,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Check,
  Building2,
  UtensilsCrossed,
  ShoppingBag,
  Briefcase,
  Camera,
  HeartPulse,
  GraduationCap,
  Laptop,
  Globe2,
  Mail,
  Phone,
  MapPin,
  Clock,
  Instagram,
  Linkedin,
  Twitter,
  Plus,
  Trash2,
  Palette,
  Type,
  Layers,
  CheckCircle2,
  Image as ImageIcon
} from 'lucide-react';

interface CreationWizardModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSiteCreated: (newSite: SiteConfig) => void;
  initialTemplateId?: string;
}

// Pre-defined business sectors with customized preset data
const SECTORS = [
  {
    id: 'hospitality',
    name: 'Restaurante & Gastronomía',
    icon: UtensilsCrossed,
    defaultTemplate: 'savor-restaurant',
    presetTagline: 'Experiencias culinarias memorables con ingredientes de origen local',
    presetDescription: 'Cocina de autor elaborada con pasión y los productos de temporada más frescos del mercado.',
    presetServices: [
      {
        title: 'Menú Degustación de Temporada',
        description: '7 pases maridados con vinos seleccionados por nuestro sumiller.',
        price: '65€ / persona',
        imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80'
      },
      {
        title: 'Cena a la Carta',
        description: 'Especialidades a la brasa, pescados salvajes y postres artesanos.',
        price: '35€ - 50€',
        imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80'
      },
      {
        title: 'Eventos Privados & Catering',
        description: 'Salones exclusivos para celebraciones familiares y reuniones de empresa.',
        price: 'Consultar',
        imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80'
      }
    ]
  },
  {
    id: 'services',
    name: 'Servicios Profesionales & Consultoría',
    icon: Briefcase,
    defaultTemplate: 'core-consulting',
    presetTagline: 'Asesoramiento estratégico integral para potenciar el crecimiento de tu empresa',
    presetDescription: 'Ayudamos a pymes y directivos a optimizar procesos, maximizar rentabilidad y escalar operaciones.',
    presetServices: [
      {
        title: 'Diagnóstico & Estrategia Empresarial',
        description: 'Auditoría exhaustiva de modelo de negocio y plan de acción a 90 días.',
        price: '1.200€',
        imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80'
      },
      {
        title: 'Optimización de Procesos & Finanzas',
        description: 'Rediseño de costes operativos y digitalización de flujos de trabajo.',
        price: '2.500€ / mes',
        imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80'
      },
      {
        title: 'Consultoría Legal & Fiscal Corporativa',
        description: 'Blindaje jurídico y planificación fiscal óptima para sociedades.',
        price: '850€ / mes',
        imageUrl: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80'
      }
    ]
  },
  {
    id: 'wellness',
    name: 'Salud, Bienestar & Estética',
    icon: HeartPulse,
    defaultTemplate: 'serenity-spa',
    presetTagline: 'Tu espacio de calma, revitalización y cuidado holístico integral',
    presetDescription: 'Tratamientos personalizados de salud y relajación diseñados por terapeutas certificados.',
    presetServices: [
      {
        title: 'Circuito Spa & Hidroterapia',
        description: 'Piscina termal, sauna finlandesa, baño de vapor y aromaterapia.',
        price: '45€ (90 min)',
        imageUrl: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80'
      },
      {
        title: 'Masaje Terapéutico Descontracturante',
        description: 'Alivio profundo de tensiones musculares con aceites esenciales botánicos.',
        price: '60€ (60 min)',
        imageUrl: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=800&q=80'
      },
      {
        title: 'Ritual Facial Anti-Edad Glow',
        description: 'Limpieza profunda, radiofrecuencia y mascarilla de colágeno marino.',
        price: '75€',
        imageUrl: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80'
      }
    ]
  },
  {
    id: 'creative',
    name: 'Creativo, Fotografía & Portafolio',
    icon: Camera,
    defaultTemplate: 'eclipse-photo',
    presetTagline: 'Narrativas visuales y dirección de arte con impacto memorable',
    presetDescription: 'Especialistas en producción audiovisual, campañas de moda y diseño de marca contemporáneo.',
    presetServices: [
      {
        title: 'Sesión Fotográfica Editorial',
        description: 'Producción completa en estudio o exteriores con revelado de alta gama.',
        price: '450€',
        imageUrl: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=800&q=80'
      },
      {
        title: 'Identidad de Marca & Branding',
        description: 'Logotipo, guía tipográfica, paleta de color y aplicaciones corporativas.',
        price: '1.500€',
        imageUrl: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80'
      },
      {
        title: 'Dirección de Arte Digital & Web',
        description: 'Diseño UX/UI exclusivo adaptado a la esencia y valores de tu proyecto.',
        price: '2.200€',
        imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80'
      }
    ]
  },
  {
    id: 'tech',
    name: 'SaaS, Software & Tecnología',
    icon: Laptop,
    defaultTemplate: 'nexus-saas',
    presetTagline: 'La plataforma inteligente para automatizar y escalar tu operativa',
    presetDescription: 'Conecta tus herramientas, automatiza tareas repetitivas y obtén métricas en tiempo real.',
    presetServices: [
      {
        title: 'Plan Starter',
        description: 'Ideal para autónomos y pequeñas empresas que inician su digitalización.',
        price: '19€ / mes',
        imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80'
      },
      {
        title: 'Plan Pro Scale',
        description: 'Automatizaciones ilimitadas, analítica predictiva y soporte 24/7.',
        price: '49€ / mes',
        imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80'
      },
      {
        title: 'Plan Enterprise',
        description: 'Infraestructura dedicada, SLA garantizado y seguridad bancaria.',
        price: '149€ / mes',
        imageUrl: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80'
      }
    ]
  },
  {
    id: 'education',
    name: 'Cursos, Academia & Formación',
    icon: GraduationCap,
    defaultTemplate: 'academy-edtech',
    presetTagline: 'Aprende habilidades de alta demanda con mentores expertos en activo',
    presetDescription: 'Metodología práctica orientada a proyectos reales para transformar tu carrera profesional.',
    presetServices: [
      {
        title: 'Bootcamp Intensivo (12 Semanas)',
        description: 'Clases en directo, mentorías 1-a-1 y garantía de empleo al finalizar.',
        price: '1.950€',
        imageUrl: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80'
      },
      {
        title: 'Curso Especializado a tu Ritmo',
        description: 'Acceso de por vida a los módulos en vídeo, ejercicios y comunidad.',
        price: '290€',
        imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80'
      },
      {
        title: 'Membresía Anual Pro',
        description: 'Acceso a todo el catálogo de cursos, workshops mensuales y certificados.',
        price: '39€ / mes',
        imageUrl: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80'
      }
    ]
  }
];

const PRESET_COLORS = [
  { color: '#00E5FF', label: 'Cian Neón' },
  { color: '#FF00E5', label: 'Magenta Neón' },
  { color: '#00FF88', label: 'Verde Eléctrico' },
  { color: '#0071E3', label: 'Azul Apple' },
  { color: '#8B5CF6', label: 'Violeta Dev' },
  { color: '#F59E0B', label: 'Ámbar Cálido' },
  { color: '#10B981', label: 'Esmeralda Bio' },
  { color: '#D4AF37', label: 'Oro Lujo' }
];

const PRESET_FONTS = [
  { id: 'Plus Jakarta Sans', label: 'Plus Jakarta Sans (Moderno & UI)' },
  { id: 'Inter', label: 'Inter (Limpio & SaaS)' },
  { id: 'Poppins', label: 'Poppins (Amigable & Dinámico)' },
  { id: 'Playfair Display', label: 'Playfair Display (Elegante & Lujo)' },
  { id: 'Space Grotesk', label: 'Space Grotesk (Tech & Cyber)' },
  { id: 'Lato', label: 'Lato (Equilibrado & Corporativo)' }
];

export const CreationWizardModal: React.FC<CreationWizardModalProps> = ({
  isOpen,
  onClose,
  onSiteCreated,
  initialTemplateId = 'savor-restaurant'
}) => {
  // Wizard current step: 1 to 5, and 6 is generating
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [generationProgress, setGenerationProgress] = useState<number>(0);
  const [generationStatusText, setGenerationStatusText] = useState<string>('Iniciando configuración...');

  // Step 1: Selected sector and template
  const [selectedSectorId, setSelectedSectorId] = useState<string>('hospitality');
  const [selectedTemplateId, setSelectedTemplateId] = useState<string>(initialTemplateId);

  // Step 2: Business identity
  const [businessName, setBusinessName] = useState<string>('Bistró Lumière');
  const [tagline, setTagline] = useState<string>('Experiencias culinarias memorables con ingredientes de origen local');
  const [description, setDescription] = useState<string>(
    'Cocina de autor elaborada con pasión y los productos de temporada más frescos del mercado.'
  );
  const [location, setLocation] = useState<string>('Madrid, España');
  const [heroBadge, setHeroBadge] = useState<string>('Nueva Temporada 2026');

  // Step 3: Services / Products
  const [services, setServices] = useState<Array<{ title: string; description: string; price: string; imageUrl: string }>>([
    {
      title: 'Menú Degustación de Temporada',
      description: '7 pases maridados con vinos seleccionados por nuestro sumiller.',
      price: '65€ / persona',
      imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Cena a la Carta',
      description: 'Especialidades a la brasa, pescados salvajes y postres artesanos.',
      price: '35€ - 50€',
      imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Eventos Privados & Catering',
      description: 'Salones exclusivos para celebraciones familiares y reuniones de empresa.',
      price: 'Consultar',
      imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80'
    }
  ]);

  // Step 4: Contact & Social
  const [email, setEmail] = useState<string>('contacto@bistrolumiere.com');
  const [phone, setPhone] = useState<string>('+34 912 345 678');
  const [address, setAddress] = useState<string>('Calle de Serrano 42, 28001 Madrid');
  const [openingHours, setOpeningHours] = useState<string>('Mar - Dom: 13:00 - 16:30 | 20:00 - 23:30');
  const [socialInstagram, setSocialInstagram] = useState<string>('https://instagram.com/bistrolumiere');
  const [socialTwitter, setSocialTwitter] = useState<string>('');

  // Step 5: Colors, Typography & Sections
  const [accentColor, setAccentColor] = useState<string>('#EAB308');
  const [fontFamily, setFontFamily] = useState<string>('Playfair Display');
  const [includedSections, setIncludedSections] = useState<{ [key: string]: boolean }>({
    hero: true,
    logos: true,
    bentoFeatures: true,
    productHighlight: true,
    stats: true,
    testimonials: true,
    pricing: true,
    faq: true,
    map: true,
    ctaFinal: true,
    footer: true
  });

  if (!isOpen) return null;

  // Handle sector selection change with preset injection
  const handleSelectSector = (sectorId: string) => {
    setSelectedSectorId(sectorId);
    const sector = SECTORS.find((s) => s.id === sectorId);
    if (sector) {
      setSelectedTemplateId(sector.defaultTemplate);
      setTagline(sector.presetTagline);
      setDescription(sector.presetDescription);
      setServices([...sector.presetServices]);

      // Set thematic accents
      if (sectorId === 'hospitality') setAccentColor('#EAB308');
      if (sectorId === 'services') setAccentColor('#0066CC');
      if (sectorId === 'wellness') setAccentColor('#059669');
      if (sectorId === 'creative') setAccentColor('#F59E0B');
      if (sectorId === 'tech') setAccentColor('#00E5FF');
      if (sectorId === 'education') setAccentColor('#6366F1');
    }
  };

  const handleAddService = () => {
    if (services.length >= 6) return;
    setServices([
      ...services,
      {
        title: `Nuevo Servicio ${services.length + 1}`,
        description: 'Descripción breve de los beneficios y valor que aporta.',
        price: 'Consultar',
        imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80'
      }
    ]);
  };

  const handleRemoveService = (index: number) => {
    if (services.length <= 1) return;
    setServices(services.filter((_, i) => i !== index));
  };

  const handleUpdateService = (index: number, field: string, value: string) => {
    const updated = [...services];
    updated[index] = { ...updated[index], [field]: value };
    setServices(updated);
  };

  const handleToggleSection = (sectionKey: string) => {
    setIncludedSections((prev) => ({
      ...prev,
      [sectionKey]: !prev[sectionKey]
    }));
  };

  // Generate Final Site from Wizard
  const handleGenerateSite = () => {
    setIsGenerating(true);
    setGenerationProgress(15);
    setGenerationStatusText('Cargando plantilla base...');

    setTimeout(() => {
      setGenerationProgress(45);
      setGenerationStatusText('Rellenando huecos con tus contenidos y servicios...');
    }, 600);

    setTimeout(() => {
      setGenerationProgress(80);
      setGenerationStatusText('Aplicando paleta de color y tipografía...');
    }, 1200);

    setTimeout(() => {
      setGenerationProgress(100);
      setGenerationStatusText('¡Tu sitio web está listo!');

      // Find template
      const baseTemplate = TEMPLATES.find((t) => t.id === selectedTemplateId) || TEMPLATES[0];
      const baseConfig = JSON.parse(JSON.stringify(baseTemplate.defaultConfig)) as SiteConfig;

      const siteId = `site_${Date.now()}`;
      const slug = businessName.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '') || 'mi-web';

      // 1. Inyectar datos principales
      baseConfig.id = siteId;
      baseConfig.templateId = selectedTemplateId;
      baseConfig.name = businessName;
      baseConfig.slug = slug;
      baseConfig.domain = `${slug}.930studio.site`;
      baseConfig.accentColor = accentColor;
      baseConfig.fontFamily = fontFamily;
      baseConfig.published = true;
      baseConfig.updatedAt = new Date().toISOString();
      if (!baseConfig.createdAt) {
        baseConfig.createdAt = new Date().toISOString();
      }

      // 2. Inyectar SEO
      baseConfig.seo = {
        title: `${businessName} — ${tagline}`,
        description: description,
        keywords: `${businessName}, ${selectedSectorId}, servicios profesionales, ${location}`
      };

      // 3. Inyectar Navbar
      if (baseConfig.sections.navbar) {
        baseConfig.sections.navbar.brandName = businessName;
        baseConfig.sections.navbar.logoText = businessName.toUpperCase();
        baseConfig.sections.navbar.ctaText = 'Contactar Ahora';
        baseConfig.sections.navbar.ctaLink = '#contact';
      }

      // 4. Inyectar Hero
      if (baseConfig.sections.hero) {
        baseConfig.sections.hero.badge = heroBadge || baseConfig.sections.hero.badge;
        baseConfig.sections.hero.kicker = location ? `Ubicado en ${location}` : baseConfig.sections.hero.kicker;
        baseConfig.sections.hero.title = businessName;
        baseConfig.sections.hero.highlightTitle = tagline;
        baseConfig.sections.hero.subtitle = description;
        baseConfig.sections.hero.primaryCta = { text: 'Ver Servicios & Tarifas', link: '#services' };
        baseConfig.sections.hero.secondaryCta = { text: 'Reservar / Contacto →', link: '#contact' };
      }

      // 5. Inyectar BentoFeatures / Servicios
      if (baseConfig.sections.bentoFeatures) {
        baseConfig.sections.bentoFeatures.title = 'Nuestros Servicios Principales';
        baseConfig.sections.bentoFeatures.subtitle = tagline;
        baseConfig.sections.bentoFeatures.items = services.map((s, idx) => ({
          id: `wiz_f_${idx + 1}`,
          title: s.title,
          description: s.description,
          icon: idx === 0 ? 'Sparkles' : idx === 1 ? 'Shield' : 'TrendingUp',
          tag: s.price || 'Destacado',
          colSpan: idx === 0 || idx === 3 ? 2 : 1,
          imageUrl: s.imageUrl,
          statNumber: s.price,
          statLabel: 'Precio orientativo'
        }));
      }

      // 6. Inyectar Pricing si aplica
      if (baseConfig.sections.pricing && services.length > 0) {
        baseConfig.sections.pricing.title = 'Planes & Tarifas';
        baseConfig.sections.pricing.subtitle = 'Opciones transparentes adaptadas a tus necesidades.';
        baseConfig.sections.pricing.plans = services.slice(0, 3).map((s, idx) => ({
          id: `wiz_plan_${idx + 1}`,
          name: s.title,
          tag: idx === 1 ? 'Más Solicitado' : undefined,
          priceMonthly: s.price || 'Consultar',
          priceAnnual: s.price || 'Consultar',
          description: s.description,
          features: [
            'Atención personalizada y asesoramiento continuo',
            'Materiales y ejecución de máxima calidad',
            'Garantía de satisfacción y soporte directo',
            'Presupuesto cerrado sin sorpresas'
          ],
          ctaText: 'Solicitar Información',
          ctaLink: '#contact',
          highlighted: idx === 1
        }));
      }

      // 7. Inyectar Map / Ubicación / Contacto
      if (baseConfig.sections.map) {
        baseConfig.sections.map.title = 'Visítanos o Contáctanos';
        baseConfig.sections.map.subtitle = 'Estamos a tu disposición para cualquier consulta.';
        baseConfig.sections.map.address = address;
        baseConfig.sections.map.city = location;
        baseConfig.sections.map.hours = openingHours;
        baseConfig.sections.map.phone = phone;
        baseConfig.sections.map.email = email;
      }

      // 8. Inyectar Footer
      if (baseConfig.sections.footer) {
        baseConfig.sections.footer.copyright = `© ${new Date().getFullYear()} ${businessName}. Todos los derechos reservados. ${location}`;
      }

      // 9. Filtrar secciones habilitadas según checklist
      const newSectionOrder = (baseConfig.sectionOrder || []).filter((secKey) => {
        if (secKey === 'navbar' || secKey === 'footer') return true;
        return includedSections[secKey] !== false;
      });
      baseConfig.sectionOrder = newSectionOrder;

      // Final callback
      setTimeout(() => {
        setIsGenerating(false);
        onSiteCreated(baseConfig);
        onClose();
      }, 500);
    }, 1800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-[#14141E] border border-white/10 rounded-2xl shadow-2xl overflow-hidden text-white">
        {/* Header */}
        <div className="px-6 py-5 border-b border-white/10 flex items-center justify-between bg-[#12121A]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#00E5FF]/20 to-[#FF00E5]/20 border border-[#00E5FF]/40 flex items-center justify-center shadow-[0_0_15px_rgba(0,229,255,0.2)]">
              <Sparkles className="w-5 h-5 text-[#00E5FF]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-bold text-white tracking-wide">Asistente Rellena-Huecos</h2>
                <span className="px-2 py-0.5 rounded-full bg-[#00E5FF]/10 text-[#00E5FF] text-[11px] font-bold border border-[#00E5FF]/30">
                  Modo Fácil
                </span>
              </div>
              <p className="text-xs text-neutral-400">
                Paso {currentStep} de 5 — {currentStep === 1 && 'Elige tu sector y plantilla'}
                {currentStep === 2 && 'Identidad de tu negocio'}
                {currentStep === 3 && 'Servicios y productos'}
                {currentStep === 4 && 'Contacto y redes sociales'}
                {currentStep === 5 && 'Estilo visual y secciones'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Step Bar */}
        <div className="px-6 py-3 bg-[#0E0E16] border-b border-white/5 flex items-center justify-between gap-2 overflow-x-auto">
          {[
            { num: 1, label: 'Sector & Base' },
            { num: 2, label: 'Identidad' },
            { num: 3, label: 'Servicios' },
            { num: 4, label: 'Contacto' },
            { num: 5, label: 'Estilo' }
          ].map((s) => (
            <button
              key={s.num}
              onClick={() => !isGenerating && setCurrentStep(s.num)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
                currentStep === s.num
                  ? 'bg-[#00E5FF] text-black shadow-[0_0_12px_rgba(0,229,255,0.4)]'
                  : currentStep > s.num
                  ? 'bg-white/10 text-white'
                  : 'text-neutral-500 hover:text-neutral-300'
              }`}
            >
              <span
                className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                  currentStep === s.num
                    ? 'bg-black text-[#00E5FF]'
                    : currentStep > s.num
                    ? 'bg-[#00FF88] text-black'
                    : 'bg-white/10 text-neutral-400'
                }`}
              >
                {currentStep > s.num ? <Check className="w-3 h-3 stroke-[3]" /> : s.num}
              </span>
              <span>{s.label}</span>
            </button>
          ))}
        </div>

        {/* Modal Body with Animated Steps */}
        <div className="flex-1 overflow-y-auto p-6 relative">
          {/* GENERATION SPINNER OVERLAY */}
          {isGenerating && (
            <div className="absolute inset-0 z-30 bg-[#14141E]/95 backdrop-blur-md flex flex-col items-center justify-center p-8 text-center animate-in fade-in">
              <div className="relative w-20 h-20 mb-6">
                <div className="absolute inset-0 rounded-full border-4 border-white/10" />
                <div className="absolute inset-0 rounded-full border-4 border-[#00E5FF] border-t-transparent animate-spin" />
                <div className="absolute inset-3 rounded-full bg-gradient-to-tr from-[#00E5FF]/20 to-[#FF00E5]/20 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-[#00E5FF] animate-pulse" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-2">Generando tu web profesional...</h3>
              <p className="text-sm text-neutral-400 mb-6 max-w-md">{generationStatusText}</p>

              <div className="w-full max-w-md bg-white/10 h-2 rounded-full overflow-hidden mb-3">
                <div
                  className="h-full bg-gradient-to-r from-[#00E5FF] to-[#00FF88] transition-all duration-300 rounded-full"
                  style={{ width: `${generationProgress}%` }}
                />
              </div>
              <span className="text-xs font-mono text-[#00E5FF]">{generationProgress}% completado</span>
            </div>
          )}

          {/* STEP 1: SECTOR & TEMPLATE SELECTION */}
          {currentStep === 1 && (
            <div className="space-y-6 animate-in fade-in">
              <div>
                <h3 className="text-base font-bold text-white mb-1">¿A qué sector pertenece tu negocio o proyecto?</h3>
                <p className="text-xs text-neutral-400">
                  Selecciona tu actividad y adaptaremos la estructura y textos ideales de inmediato.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {SECTORS.map((sector) => {
                  const Icon = sector.icon;
                  const isSelected = selectedSectorId === sector.id;
                  return (
                    <button
                      key={sector.id}
                      onClick={() => handleSelectSector(sector.id)}
                      className={`p-4 rounded-xl border text-left flex flex-col gap-2 transition-all cursor-pointer ${
                        isSelected
                          ? 'border-[#00E5FF] bg-[#00E5FF]/10 shadow-[0_0_15px_rgba(0,229,255,0.2)]'
                          : 'border-white/10 bg-[#12121A] hover:border-white/20 hover:bg-[#1A1A24]'
                      }`}
                    >
                      <div
                        className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                          isSelected ? 'bg-[#00E5FF] text-black' : 'bg-white/5 text-neutral-300'
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-bold text-sm text-white">{sector.name}</span>
                      <span className="text-[11px] text-neutral-400 line-clamp-1">{sector.presetTagline}</span>
                    </button>
                  );
                })}
              </div>

              <div className="pt-4 border-t border-white/10">
                <label className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-2">
                  Plantilla Base Recomendada
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {TEMPLATES.slice(0, 4).map((tpl) => (
                    <div
                      key={tpl.id}
                      onClick={() => setSelectedTemplateId(tpl.id)}
                      className={`p-3 rounded-xl border flex items-center gap-3 cursor-pointer transition-all ${
                        selectedTemplateId === tpl.id
                          ? 'border-[#00E5FF] bg-[#00E5FF]/10 shadow-[0_0_12px_rgba(0,229,255,0.2)]'
                          : 'border-white/10 bg-[#12121A] hover:border-white/20'
                      }`}
                    >
                      <img
                        src={tpl.thumbnail}
                        alt={tpl.name}
                        className="w-16 h-12 object-cover rounded-lg border border-white/10"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h4 className="text-sm font-bold text-white truncate">{tpl.name}</h4>
                          <span
                            className="w-2.5 h-2.5 rounded-full"
                            style={{ backgroundColor: tpl.accentColor }}
                          />
                        </div>
                        <p className="text-xs text-neutral-400 truncate">{tpl.tagline}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: BUSINESS IDENTITY */}
          {currentStep === 2 && (
            <div className="space-y-4 animate-in fade-in">
              <div>
                <h3 className="text-base font-bold text-white mb-1">Identidad de tu Marca o Empresa</h3>
                <p className="text-xs text-neutral-400">
                  Rellena los huecos principales con el nombre y propósito de tu proyecto.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-neutral-300 flex items-center justify-between">
                    <span>Nombre de la Empresa / Marca *</span>
                    <span className="text-[10px] text-[#00E5FF]">Hueco Principal</span>
                  </label>
                  <input
                    type="text"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    placeholder="Ej. Bistró Lumière"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0A0A0F] border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-[#00E5FF] text-sm"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-neutral-300">Ubicación (Ciudad, País)</label>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Ej. Madrid, España"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0A0A0F] border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-[#00E5FF] text-sm"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-neutral-300">Eslogan o Claim Principal</label>
                <input
                  type="text"
                  value={tagline}
                  onChange={(e) => setTagline(e.target.value)}
                  placeholder="Ej. La auténtica cocina de autor con productos de temporada"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#0A0A0F] border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-[#00E5FF] text-sm"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-neutral-300">Descripción Breve (2-3 frases)</label>
                <textarea
                  rows={3}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Describe qué hace especial a tu negocio y por qué los clientes deberían elegirte..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#0A0A0F] border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-[#00E5FF] text-sm resize-none"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-neutral-300">Insignia / Badge de Cabecera (Opcional)</label>
                <input
                  type="text"
                  value={heroBadge}
                  onChange={(e) => setHeroBadge(e.target.value)}
                  placeholder="Ej. Guía Michelin 2026 • 100% Artesanal"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#0A0A0F] border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-[#00E5FF] text-sm"
                />
              </div>
            </div>
          )}

          {/* STEP 3: SERVICES / PRODUCTS */}
          {currentStep === 3 && (
            <div className="space-y-4 animate-in fade-in">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-white mb-1">Tus Servicios o Productos Clave</h3>
                  <p className="text-xs text-neutral-400">
                    Añade entre 2 y 6 ofertas principales con su precio orientativo.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleAddService}
                  disabled={services.length >= 6}
                  className="px-3 py-1.5 rounded-lg bg-[#00E5FF]/10 text-[#00E5FF] hover:bg-[#00E5FF]/20 border border-[#00E5FF]/30 text-xs font-bold flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Añadir Servicio</span>
                </button>
              </div>

              <div className="space-y-3">
                {services.map((item, index) => (
                  <div
                    key={index}
                    className="p-3.5 rounded-xl bg-[#12121A] border border-white/10 flex flex-col md:flex-row items-start md:items-center gap-3 relative group"
                  >
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-16 h-16 object-cover rounded-lg border border-white/10 flex-shrink-0"
                    />

                    <div className="flex-1 w-full grid grid-cols-1 md:grid-cols-3 gap-2">
                      <input
                        type="text"
                        value={item.title}
                        onChange={(e) => handleUpdateService(index, 'title', e.target.value)}
                        placeholder="Nombre del servicio"
                        className="px-2.5 py-1.5 rounded-lg bg-[#0A0A0F] border border-white/10 text-xs font-bold text-white focus:outline-none focus:border-[#00E5FF]"
                      />
                      <input
                        type="text"
                        value={item.description}
                        onChange={(e) => handleUpdateService(index, 'description', e.target.value)}
                        placeholder="Descripción corta (10-15 palabras)"
                        className="px-2.5 py-1.5 rounded-lg bg-[#0A0A0F] border border-white/10 text-xs text-neutral-300 focus:outline-none focus:border-[#00E5FF]"
                      />
                      <input
                        type="text"
                        value={item.price}
                        onChange={(e) => handleUpdateService(index, 'price', e.target.value)}
                        placeholder="Precio (ej. 45€ / persona)"
                        className="px-2.5 py-1.5 rounded-lg bg-[#0A0A0F] border border-white/10 text-xs font-mono text-[#00FF88] focus:outline-none focus:border-[#00E5FF]"
                      />
                    </div>

                    {services.length > 1 && (
                      <button
                        type="button"
                        onClick={() => handleRemoveService(index)}
                        className="p-1.5 rounded-lg text-neutral-400 hover:text-red-400 hover:bg-white/5 transition-colors cursor-pointer"
                        title="Eliminar este servicio"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* STEP 4: CONTACT & SOCIAL */}
          {currentStep === 4 && (
            <div className="space-y-4 animate-in fade-in">
              <div>
                <h3 className="text-base font-bold text-white mb-1">Información de Contacto & Redes</h3>
                <p className="text-xs text-neutral-400">
                  Permite a tus clientes llamarte, enviarte emails o visitarte físicamente.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-neutral-300 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-[#00E5FF]" />
                    <span>Email de Contacto *</span>
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="info@tunegocio.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0A0A0F] border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-[#00E5FF] text-sm"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-neutral-300 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#00FF88]" />
                    <span>Teléfono / WhatsApp *</span>
                  </label>
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+34 600 000 000"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0A0A0F] border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-[#00E5FF] text-sm"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-neutral-300 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#FF00E5]" />
                  <span>Dirección Física</span>
                </label>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Calle Gran Vía 28, Centro, Madrid"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#0A0A0F] border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-[#00E5FF] text-sm"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-neutral-300 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#F59E0B]" />
                  <span>Horario de Atención</span>
                </label>
                <input
                  type="text"
                  value={openingHours}
                  onChange={(e) => setOpeningHours(e.target.value)}
                  placeholder="Lun - Sáb: 09:30 - 20:30"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#0A0A0F] border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-[#00E5FF] text-sm"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-neutral-300 flex items-center gap-1.5">
                    <Instagram className="w-3.5 h-3.5 text-[#FF00E5]" />
                    <span>Instagram (URL o usuario)</span>
                  </label>
                  <input
                    type="text"
                    value={socialInstagram}
                    onChange={(e) => setSocialInstagram(e.target.value)}
                    placeholder="https://instagram.com/tunegocio"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0A0A0F] border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-[#00E5FF] text-sm"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-neutral-300 flex items-center gap-1.5">
                    <Twitter className="w-3.5 h-3.5 text-[#00E5FF]" />
                    <span>Twitter / X (Opcional)</span>
                  </label>
                  <input
                    type="text"
                    value={socialTwitter}
                    onChange={(e) => setSocialTwitter(e.target.value)}
                    placeholder="https://twitter.com/tunegocio"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0A0A0F] border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-[#00E5FF] text-sm"
                  />
                </div>
              </div>
            </div>
          )}

          {/* STEP 5: STYLE, COLORS & SECTIONS */}
          {currentStep === 5 && (
            <div className="space-y-6 animate-in fade-in">
              <div>
                <h3 className="text-base font-bold text-white mb-1">Personalización Visual & Secciones</h3>
                <p className="text-xs text-neutral-400">
                  Elige tu color insignia, tipografía y qué secciones deseas activar.
                </p>
              </div>

              {/* Color Presets */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-neutral-300 flex items-center gap-1.5">
                  <Palette className="w-3.5 h-3.5 text-[#00E5FF]" />
                  <span>Color de Acento de la Marca</span>
                </label>
                <div className="grid grid-cols-4 md:grid-cols-8 gap-2">
                  {PRESET_COLORS.map((item) => (
                    <button
                      key={item.color}
                      type="button"
                      onClick={() => setAccentColor(item.color)}
                      className={`p-2 rounded-xl border flex flex-col items-center gap-1.5 transition-all cursor-pointer ${
                        accentColor === item.color
                          ? 'border-white bg-white/10 shadow-[0_0_12px_rgba(255,255,255,0.3)]'
                          : 'border-white/10 bg-[#12121A] hover:border-white/20'
                      }`}
                    >
                      <span
                        className="w-6 h-6 rounded-full shadow-md"
                        style={{ backgroundColor: item.color }}
                      />
                      <span className="text-[10px] text-neutral-300 font-medium truncate w-full text-center">
                        {item.label.split(' ')[0]}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Typography */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-neutral-300 flex items-center gap-1.5">
                  <Type className="w-3.5 h-3.5 text-[#00FF88]" />
                  <span>Tipografía Principal</span>
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {PRESET_FONTS.map((font) => (
                    <button
                      key={font.id}
                      type="button"
                      onClick={() => setFontFamily(font.id)}
                      className={`p-2.5 rounded-xl border text-left flex items-center justify-between transition-all cursor-pointer ${
                        fontFamily === font.id
                          ? 'border-[#00E5FF] bg-[#00E5FF]/10 text-white'
                          : 'border-white/10 bg-[#12121A] text-neutral-400 hover:border-white/20'
                      }`}
                    >
                      <span className="text-xs font-medium" style={{ fontFamily: font.id }}>
                        {font.label}
                      </span>
                      {fontFamily === font.id && <Check className="w-4 h-4 text-[#00E5FF]" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sections Checklist */}
              <div className="space-y-2 pt-2 border-t border-white/10">
                <label className="text-xs font-bold text-neutral-300 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-[#FF00E5]" />
                  <span>Secciones a Incluir en tu Web</span>
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {[
                    { id: 'bentoFeatures', label: 'Servicios / Productos' },
                    { id: 'pricing', label: 'Tarifas & Planes' },
                    { id: 'testimonials', label: 'Testimonios de Clientes' },
                    { id: 'stats', label: 'Cifras & Métricas' },
                    { id: 'faq', label: 'Preguntas Frecuentes' },
                    { id: 'map', label: 'Mapa & Ubicación' }
                  ].map((sec) => (
                    <button
                      key={sec.id}
                      type="button"
                      onClick={() => handleToggleSection(sec.id)}
                      className={`p-2.5 rounded-xl border flex items-center justify-between text-xs font-medium transition-all cursor-pointer ${
                        includedSections[sec.id] !== false
                          ? 'border-[#00FF88]/40 bg-[#00FF88]/10 text-white'
                          : 'border-white/10 bg-[#12121A] text-neutral-500'
                      }`}
                    >
                      <span>{sec.label}</span>
                      <div
                        className={`w-4 h-4 rounded-md flex items-center justify-center ${
                          includedSections[sec.id] !== false ? 'bg-[#00FF88] text-black' : 'bg-white/10'
                        }`}
                      >
                        {includedSections[sec.id] !== false && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Controls */}
        <div className="px-6 py-4 border-t border-white/10 bg-[#12121A] flex items-center justify-between">
          <div>
            {currentStep > 1 && (
              <button
                type="button"
                onClick={() => setCurrentStep(currentStep - 1)}
                disabled={isGenerating}
                className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-neutral-300 text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer disabled:opacity-50"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Anterior</span>
              </button>
            )}
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-neutral-400 hover:text-white text-xs font-bold transition-colors cursor-pointer"
            >
              Cancelar
            </button>

            {currentStep < 5 ? (
              <button
                type="button"
                onClick={() => setCurrentStep(currentStep + 1)}
                className="px-5 py-2.5 rounded-xl bg-[#00E5FF] hover:bg-[#00C8E0] text-black text-xs font-bold flex items-center gap-1.5 shadow-[0_0_15px_rgba(0,229,255,0.3)] transition-all cursor-pointer"
              >
                <span>Continuar</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                type="button"
                onClick={handleGenerateSite}
                disabled={isGenerating}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#00E5FF] via-[#FF00E5] to-[#00FF88] hover:opacity-95 text-black font-bold text-xs flex items-center gap-2 shadow-[0_0_20px_rgba(0,229,255,0.4)] transition-all cursor-pointer disabled:opacity-50"
              >
                <Sparkles className="w-4 h-4 fill-black" />
                <span>¡Generar Mi Web Ahora!</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
