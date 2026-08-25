import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json({ limit: "10mb" }));

// Lazy load Gemini AI instance
function getGeminiClient(): GoogleGenAI | null {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.warn("GEMINI_API_KEY is not set. Using intelligent fallback generator.");
    return null;
  }
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        "User-Agent": "aistudio-build",
      },
    },
  });
}

// In-memory store for generated sites with default initial sample sites
let savedSites: any[] = [
  {
    id: "site_novatech",
    userId: "user_rafa",
    name: "NovaTech Solutions",
    slug: "novatech",
    domain: "novatech.io",
    templateId: "apple-saas",
    theme: "dark",
    accentColor: "#2997FF",
    fontFamily: "Inter",
    borderRadius: 20,
    published: true,
    publishedAt: new Date().toISOString(),
    createdAt: new Date(Date.now() - 86400000 * 3).toISOString(),
    updatedAt: new Date().toISOString(),
    seo: {
      title: "NovaTech Solutions — Intelligent Digital Transformation",
      description: "Construimos software de alta ingeniería y soluciones de inteligencia artificial para líderes del sector.",
      keywords: "software, ia, transformacion digital, desarrollo cloud"
    },
    analytics: {
      views: 3420,
      uniqueVisitors: 2180,
      conversionRate: 6.8,
      avgDuration: "2m 45s",
      history: [
        { date: "Lun", views: 420, clicks: 35 },
        { date: "Mar", views: 530, clicks: 48 },
        { date: "Mié", views: 610, clicks: 52 },
        { date: "Jue", views: 490, clicks: 41 },
        { date: "Vie", views: 720, clicks: 65 },
        { date: "Sáb", views: 310, clicks: 24 },
        { date: "Dom", views: 340, clicks: 28 }
      ]
    },
    sections: {
      navbar: {
        brandName: "NovaTech",
        logoIcon: "Sparkles",
        ctaText: "Comenzar Ahora",
        ctaLink: "#contact",
        links: [
          { label: "Capacidades", href: "#features" },
          { label: "Plataforma", href: "#product" },
          { label: "Especificaciones", href: "#specs" },
          { label: "Planes", href: "#pricing" },
          { label: "FAQ", href: "#faq" }
        ],
        glassBlur: true,
        sticky: true
      },
      hero: {
        enabled: true,
        kicker: "Presentamos Nova Core 3.0",
        title: "Ingeniería digital.",
        highlightTitle: "Diseñada para la escala.",
        subtitle: "Desarrollamos ecosistemas de software a medida, inteligencia artificial predictiva y arquitectura cloud con la precisión y elegancia que tu empresa merece.",
        primaryCta: { text: "Solicitar Demostración", link: "#contact" },
        secondaryCta: { text: "Explorar Capacidades →", link: "#features" },
        imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1600&q=80",
        badge: "Nuevo • IA Generativa Integrada",
        style: "centered"
      },
      bentoFeatures: {
        enabled: true,
        kicker: "Rendimiento Incomparable",
        title: "Todo lo que necesitas. Rediseñado.",
        subtitle: "Cada microservicio y módulo ha sido forjado para ofrecer latencias mínimas y confiabilidad de grado aeroespacial.",
        items: [
          {
            id: "f1",
            title: "Modelos de IA Predictiva",
            description: "Pipelines neuronales que anticipan la demanda operativa con un 99.4% de precisión.",
            icon: "BrainCircuit",
            tag: "IA Nativa",
            colSpan: 2,
            statNumber: "99.4%",
            statLabel: "Precisión de pronóstico"
          },
          {
            id: "f2",
            title: "Despliegue Global Multi-Cloud",
            description: "Infraestructura edge distribuida con respuesta inferior a 25ms en todo el planeta.",
            icon: "Globe2",
            tag: "Edge Mesh",
            colSpan: 1,
            statNumber: "<25ms",
            statLabel: "Latencia global media"
          },
          {
            id: "f3",
            title: "Seguridad Zero-Trust",
            description: "Cifrado cuántico-resistente de extremo a extremo con autenticación biométrica continua.",
            icon: "ShieldCheck",
            tag: "Certificado SOC2",
            colSpan: 1,
            statNumber: "E2EE",
            statLabel: "Cifrado total"
          },
          {
            id: "f4",
            title: "Arquitectura Modular Ultra-Limpia",
            description: "APIs GraphQL y REST de alto rendimiento con documentación viva autogenerada.",
            icon: "Cpu",
            tag: "GraphQL / REST",
            colSpan: 2,
            imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80"
          }
        ]
      },
      productHighlight: {
        enabled: true,
        kicker: "Plataforma Central",
        title: "Nova Engine.",
        subtitle: "Poder incalculable en una interfaz de cristal.",
        description: "Un centro de mando unificado donde converge telemetría en tiempo real, gestión de clusters y automatización basada en agentes inteligentes.",
        imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1600&q=80",
        specs: [
          { label: "Throughput", value: "2.4M ops/s", detail: "Procesamiento concurrente" },
          { label: "Uptime SLA", value: "99.999%", detail: "Disponibilidad garantizada" },
          { label: "Setup", value: "< 5 Minutos", detail: "Integración sin fricción" }
        ],
        ctaText: "Explorar Documentación",
        ctaLink: "#contact"
      },
      specsSheet: {
        enabled: true,
        title: "Especificaciones Técnicas",
        subtitle: "Detalles rigurosos para mentes exigentes.",
        categories: [
          {
            name: "Cómputo y Rendimiento",
            specs: [
              { key: "Procesamiento de Eventos", value: "Motor Rust nativo de ultra baja sobrecarga" },
              { key: "Tasa de Rendimiento", value: "Hasta 2,400,000 transacciones por segundo" },
              { key: "Conectores", value: "Kafka, gRPC, WebSockets, REST, GraphQL" }
            ]
          },
          {
            name: "Cumplimiento y Gobernanza",
            specs: [
              { key: "Certificaciones", value: "SOC 2 Type II, ISO 27001, GDPR, HIPAA Ready" },
              { key: "Residencia de Datos", value: "Elección de región en UE, EE.UU. y LATAM" },
              { key: "Auditoría", value: "Registros inmutables con firma criptográfica" }
            ]
          }
        ]
      },
      testimonials: {
        enabled: true,
        title: "Avalado por pioneros de la industria.",
        subtitle: "Empresas líderes confían en NovaTech para acelerar su innovación.",
        items: [
          {
            id: "t1",
            name: "Elena Rostova",
            role: "CTO",
            company: "Aether Dynamics",
            quote: "La transición a NovaTech redujo nuestros tiempos de despliegue en un 70%. El nivel de acabado visual y la robustez técnica no tienen comparación.",
            avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
            rating: 5
          },
          {
            id: "t2",
            name: "Marc Valdés",
            role: "Head of Infrastructure",
            company: "Solaria Capital",
            quote: "Buscábamos una plataforma que combinara la sofisticación estética de Apple con un rendimiento de misión crítica. NovaTech superó todas las expectativas.",
            avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
            rating: 5
          },
          {
            id: "t3",
            name: "Sofia Arismendi",
            role: "VP of Product",
            company: "Luminary AI",
            quote: "La experiencia de desarrollo es un deleite absoluto. Nuestros ingenieros son el triple de productivos y nuestros clientes están fascinados.",
            avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
            rating: 5
          }
        ]
      },
      pricing: {
        enabled: true,
        title: "Inversión transparente.",
        subtitle: "Elige el plan que impulsará tu siguiente hito de crecimiento.",
        billingCycle: "annual",
        discountNote: "Ahorra 20% con facturación anual",
        plans: [
          {
            id: "p1",
            name: "Starter",
            tag: "Para Startups",
            priceMonthly: "€49",
            priceAnnual: "€39",
            description: "Ideal para equipos emergentes que requieren presencia digital de élite.",
            features: ["Hasta 3 proyectos activos", "IA Predictiva básica", "SLA 99.9% Uptime", "Soporte comunitario"],
            ctaText: "Elegir Starter",
            ctaLink: "#contact",
            highlighted: false
          },
          {
            id: "p2",
            name: "Pro Enterprise",
            tag: "Más Popular",
            priceMonthly: "€149",
            priceAnnual: "€119",
            description: "El paquete completo para organizaciones en rápida expansión.",
            features: [
              "Proyectos ilimitados",
              "Pipeline neuronal dedicado",
              "Latencia global <25ms",
              "Soporte 24/7 con Ingeniero Senior",
              "Dominio y SSL personalizados",
              "Exportación de código fuente"
            ],
            ctaText: "Comenzar Prueba Gratuita",
            ctaLink: "#contact",
            highlighted: true
          },
          {
            id: "p3",
            name: "Custom Sovereign",
            tag: "A Medida",
            priceMonthly: "€399",
            priceAnnual: "€319",
            description: "Implementación en infraestructura privada on-premise o nube aislada.",
            features: [
              "Instancia dedicada bare-metal",
              "Modelos de IA fine-tuneados",
              "Acuerdo de SLA 99.999%",
              "Auditorías de seguridad trimestrales",
              "Gerente de cuenta técnico exclusivo"
            ],
            ctaText: "Contactar a Ventas",
            ctaLink: "#contact",
            highlighted: false
          }
        ]
      },
      faq: {
        enabled: true,
        title: "Preguntas Frecuentes",
        subtitle: "Todo lo que necesitas saber antes de dar el siguiente salto.",
        items: [
          {
            id: "faq1",
            question: "¿Cuánto tiempo toma la integración con nuestros sistemas actuales?",
            answer: "Gracias a nuestras SDKs universales y APIs estandarizadas, la mayoría de los equipos logran una migración o despliegue inicial en menos de 48 horas."
          },
          {
            id: "faq2",
            question: "¿Mis datos se utilizan para entrenar modelos públicos de IA?",
            answer: "Rotundamente no. Garantizamos aislamiento estricto de tenants con enclaves seguros y acuerdos de privacidad corporativos."
          },
          {
            id: "faq3",
            question: "¿Puedo exportar el código generado o alojarlo en mi propio servidor?",
            answer: "Sí. Ofrecemos descarga completa de los paquetes optimizados en HTML/CSS/JS o integración directa con pipelines CI/CD."
          }
        ]
      },
      ctaFinal: {
        enabled: true,
        kicker: "¿Listo para la transformación?",
        title: "El futuro de tu empresa comienza hoy.",
        subtitle: "Únete a las compañías más visionarias y experimenta la diferencia de un diseño y tecnología excepcionales.",
        primaryCta: { text: "Agendar Demostración VIP", link: "#contact" },
        secondaryCta: { text: "Hablar con un Especialista", link: "#contact" },
        backgroundStyle: "glow"
      },
      footer: {
        copyright: "© 2026 NovaTech Solutions Inc. Todos los derechos reservados. Diseñado con rigor.",
        legalLinks: [
          { label: "Privacidad", href: "#" },
          { label: "Términos de Servicio", href: "#" },
          { label: "Seguridad", href: "#" },
          { label: "Cookies", href: "#" }
        ],
        socialLinks: [
          { platform: "Twitter / X", url: "https://twitter.com" },
          { platform: "GitHub", url: "https://github.com" },
          { platform: "LinkedIn", url: "https://linkedin.com" }
        ]
      }
    }
  }
];

// Helper to sanitize and complete AI JSON
function normalizeGeneratedConfig(raw: any, fallbackName: string): any {
  const accentColor = raw.accentColor || raw.accent_color || "#0071E3";
  const siteName = raw.site_name || raw.siteName || fallbackName || "AppleWeb Brand";
  const slug = siteName.toLowerCase().replace(/[^a-z0-9]/g, "-").replace(/-+/g, "-");

  return {
    id: "site_" + Date.now(),
    userId: "user_rafa",
    name: siteName,
    slug: slug || "apple-site-" + Math.floor(Math.random() * 1000),
    domain: "",
    templateId: raw.templateId || "apple-product",
    theme: raw.theme || "light",
    accentColor,
    fontFamily: raw.font || raw.fontFamily || "Inter",
    borderRadius: 20,
    published: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    seo: {
      title: `${siteName} — Minimalist & Premium Experience`,
      description: raw.hero?.subtitle || raw.description || `Sitio web premium generado con inteligencia artificial y estética Apple.`,
      keywords: "apple, minimal, premium, saas, design"
    },
    analytics: {
      views: 0,
      uniqueVisitors: 0,
      conversionRate: 0,
      avgDuration: "0m",
      history: [
        { date: "Lun", views: 0, clicks: 0 },
        { date: "Mar", views: 0, clicks: 0 },
        { date: "Mié", views: 0, clicks: 0 },
        { date: "Jue", views: 0, clicks: 0 },
        { date: "Vie", views: 0, clicks: 0 },
        { date: "Sáb", views: 0, clicks: 0 },
        { date: "Dom", views: 0, clicks: 0 }
      ]
    },
    sections: {
      navbar: {
        brandName: siteName,
        logoIcon: "Sparkles",
        ctaText: raw.hero?.cta_text || raw.hero?.ctaText || "Comenzar",
        ctaLink: "#contact",
        links: [
          { label: "Características", href: "#features" },
          { label: "Detalles", href: "#product" },
          { label: "Testimonios", href: "#testimonials" },
          { label: "Precios", href: "#pricing" },
          { label: "Contacto", href: "#contact" }
        ],
        glassBlur: true,
        sticky: true
      },
      hero: {
        enabled: true,
        kicker: raw.hero?.kicker || "Innovación Pura",
        title: raw.hero?.title || "Diseño trascendente.",
        highlightTitle: raw.hero?.highlightTitle || "Tecnología sin límites.",
        subtitle: raw.hero?.subtitle || "Una experiencia creada con minucioso detalle para elevar el estándar de tu industria.",
        primaryCta: {
          text: raw.hero?.cta_text || raw.hero?.ctaText || "Descubrir Más",
          link: raw.hero?.cta_link || raw.hero?.ctaLink || "#contact"
        },
        secondaryCta: {
          text: "Ver Demostración →",
          link: "#product"
        },
        imageUrl: raw.hero?.image_url || raw.hero?.imageUrl || "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1600&q=80",
        badge: "Edición Especial",
        style: "centered"
      },
      bentoFeatures: {
        enabled: true,
        kicker: "Excelencia de Diseño",
        title: raw.features_title || "Características revolucionarias.",
        subtitle: "Construido desde cero para ofrecer una ventaja competitiva insuperable.",
        items: Array.isArray(raw.features) ? raw.features.map((f: any, idx: number) => ({
          id: "f_" + idx,
          title: f.title || "Innovación Clave",
          description: f.description || "Potencia y precisión integradas con armonía.",
          icon: f.icon || (idx === 0 ? "Zap" : idx === 1 ? "ShieldCheck" : idx === 2 ? "Layers" : "Sparkles"),
          tag: idx === 0 ? "Destacado" : undefined,
          colSpan: idx === 0 ? 2 : 1,
          statNumber: f.statNumber || (idx === 0 ? "10x" : undefined),
          statLabel: f.statLabel || (idx === 0 ? "Mayor velocidad" : undefined)
        })) : [
          { id: "f_0", title: "Rendimiento Instantáneo", description: "Carga ultrarrápida optimizada al milisegundo.", icon: "Zap", tag: "Velocidad", colSpan: 2 },
          { id: "f_1", title: "Privacidad Blindada", description: "Arquitectura segura con protección integral.", icon: "ShieldCheck", tag: "Seguridad", colSpan: 1 },
          { id: "f_2", title: "Estética Minimalista", description: "Elegancia visual que destaca el valor de tu marca.", icon: "Sparkles", tag: "Diseño", colSpan: 1 },
          { id: "f_3", title: "Soporte Continuo", description: "Acompañamiento técnico especializado 24/7.", icon: "Headphones", tag: "24/7", colSpan: 2 }
        ]
      },
      productHighlight: {
        enabled: true,
        kicker: "Presentación",
        title: raw.product_highlight?.title || raw.productHighlight?.title || "El estándar supremo.",
        subtitle: raw.product_highlight?.subtitle || raw.productHighlight?.subtitle || "Armonía entre forma y función.",
        description: raw.product_highlight?.description || raw.productHighlight?.description || "Cada curva, cada línea y cada interacción han sido calibradas con obsesión por la perfección.",
        imageUrl: raw.product_highlight?.image_url || raw.productHighlight?.imageUrl || "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1600&q=80",
        specs: raw.product_highlight?.specs || [
          { label: "Materiales", value: "Acabado de titanio aeroespacial" },
          { label: "Eficiencia", value: "99.8% de optimización" },
          { label: "Garantía", value: "Soporte de por vida" }
        ],
        ctaText: "Saber más",
        ctaLink: "#contact"
      },
      specsSheet: {
        enabled: true,
        title: "Especificaciones Detalladas",
        subtitle: "Diseñado para superar cualquier expectativa.",
        categories: [
          {
            name: "Rendimiento & Capacidad",
            specs: [
              { key: "Arquitectura", value: "Motor optimizado para alta concurrencia" },
              { key: "Compatibilidad", value: "Integración universal vía API y Webhook" },
              { key: "Tiempo de Respuesta", value: "< 50ms promedio global" }
            ]
          }
        ]
      },
      testimonials: {
        enabled: true,
        title: "La voz de quienes lideran.",
        subtitle: "Historias reales de clientes que alcanzaron un nuevo nivel de impacto.",
        items: Array.isArray(raw.testimonials) ? raw.testimonials.map((t: any, idx: number) => ({
          id: "t_" + idx,
          name: t.name || "Cliente Satisfecho",
          role: t.role || "Director Ejecutivo",
          company: t.company || "Líder de Industria",
          quote: t.quote || "Una transformación total para nuestra marca. El diseño estilo Apple nos posicionó instantáneamente en el segmento premium.",
          avatarUrl: t.avatar_url || t.avatarUrl || `https://images.unsplash.com/photo-${idx === 0 ? "1534528741775-53994a69daeb" : idx === 1 ? "1507003211169-0a1dd7228f2d" : "1573496359142-b8d87734a5a2"}?auto=format&fit=crop&w=300&q=80`,
          rating: 5
        })) : []
      },
      pricing: {
        enabled: true,
        title: raw.pricing?.title || "Planes a tu medida.",
        subtitle: "Escoge la opción idónea para tus objetivos comerciales.",
        billingCycle: "annual",
        discountNote: "20% de descuento en pago anual",
        plans: Array.isArray(raw.pricing?.plans) ? raw.pricing.plans.map((p: any, idx: number) => ({
          id: "p_" + idx,
          name: p.name || `Plan ${idx + 1}`,
          tag: idx === 1 ? "Recomendado" : undefined,
          priceMonthly: p.priceMonthly || (p.price ? p.price : `€${(idx + 1) * 49}`),
          priceAnnual: p.priceAnnual || `€${Math.round(((idx + 1) * 49) * 0.8)}`,
          description: p.description || "Acceso a todas las herramientas esenciales.",
          features: Array.isArray(p.features) ? p.features : ["Características completas", "Soporte premium", "Actualizaciones periódicas"],
          ctaText: "Seleccionar Plan",
          ctaLink: "#contact",
          highlighted: p.highlighted || idx === 1
        })) : [
          {
            id: "p_1",
            name: "Esencial",
            priceMonthly: "€49",
            priceAnnual: "€39",
            description: "Para proyectos independientes.",
            features: ["Acceso completo", "Soporte prioritario", "Actualizaciones"],
            ctaText: "Comenzar",
            ctaLink: "#contact",
            highlighted: false
          },
          {
            id: "p_2",
            name: "Pro",
            priceMonthly: "€99",
            priceAnnual: "€79",
            description: "Para empresas y estudios en crecimiento.",
            features: ["Todo en Esencial", "Dominio personalizado", "Métricas avanzadas", "Soporte 24/7"],
            ctaText: "Elegir Pro",
            ctaLink: "#contact",
            highlighted: true
          }
        ]
      },
      faq: {
        enabled: true,
        title: "Preguntas Frecuentes",
        subtitle: "Claridad en cada detalle.",
        items: Array.isArray(raw.faq) ? raw.faq.map((fq: any, idx: number) => ({
          id: "faq_" + idx,
          question: fq.question || "¿Cómo funciona?",
          answer: fq.answer || "Nuestra plataforma genera y optimiza el sitio en segundos con total flexibilidad para personalizarlo."
        })) : [
          { id: "faq_1", question: "¿Qué hace especial este sitio web?", answer: "El diseño sigue las rigurosas pautas visuales de Apple: tipografía imponente, espacios limpios y transiciones imperceptibles." },
          { id: "faq_2", question: "¿Puedo personalizar los colores y textos?", answer: "Sí, dispones de un editor visual en tiempo real y asistencia de IA para modificar cualquier elemento." }
        ]
      },
      ctaFinal: {
        enabled: true,
        kicker: raw.cta_final?.subtitle || "Da el siguiente paso",
        title: raw.cta_final?.title || "Eleva tu presencia digital.",
        subtitle: "Construyamos juntos algo verdaderamente memorable.",
        primaryCta: {
          text: raw.cta_final?.button_text || "Comenzar Ahora",
          link: raw.cta_final?.button_link || "#contact"
        },
        secondaryCta: {
          text: "Contactar a un Asesor",
          link: "#contact"
        },
        backgroundStyle: "glow"
      },
      footer: {
        copyright: `© 2026 ${siteName}. Todos los derechos reservados. Diseñado con precisión y elegancia.`,
        legalLinks: [
          { label: "Privacidad", href: "#" },
          { label: "Términos", href: "#" },
          { label: "Aviso Legal", href: "#" }
        ],
        socialLinks: [
          { platform: "Twitter", url: raw.contact?.social_links?.twitter || "https://twitter.com" },
          { platform: "Instagram", url: raw.contact?.social_links?.instagram || "https://instagram.com" },
          { platform: "LinkedIn", url: raw.contact?.social_links?.linkedin || "https://linkedin.com" }
        ]
      }
    }
  };
}

// ----------------- API ROUTES -----------------

// 1. Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// 2. Get all sites for user
app.get("/api/sites", (req, res) => {
  res.json({ sites: savedSites });
});

// 3. Get single site
app.get("/api/sites/:id", (req, res) => {
  const site = savedSites.find((s) => s.id === req.params.id || s.slug === req.params.id);
  if (!site) {
    return res.status(404).json({ error: "Sitio no encontrado" });
  }
  res.json({ site });
});

// 4. Save/Update site
app.post("/api/sites", (req, res) => {
  const siteData = req.body;
  if (!siteData || !siteData.name) {
    return res.status(400).json({ error: "Datos de sitio incompletos" });
  }

  const existingIndex = savedSites.findIndex((s) => s.id === siteData.id);
  const now = new Date().toISOString();

  if (existingIndex >= 0) {
    savedSites[existingIndex] = {
      ...savedSites[existingIndex],
      ...siteData,
      updatedAt: now
    };
    return res.json({ site: savedSites[existingIndex], success: true });
  } else {
    const newSite = {
      ...siteData,
      id: siteData.id || "site_" + Date.now(),
      createdAt: now,
      updatedAt: now
    };
    savedSites.unshift(newSite);
    return res.json({ site: newSite, success: true });
  }
});

// 5. Delete site
app.delete("/api/sites/:id", (req, res) => {
  savedSites = savedSites.filter((s) => s.id !== req.params.id);
  res.json({ success: true });
});

// 6. Toggle publish status
app.post("/api/sites/:id/publish", (req, res) => {
  const site = savedSites.find((s) => s.id === req.params.id);
  if (!site) {
    return res.status(404).json({ error: "Sitio no encontrado" });
  }
  site.published = !site.published;
  site.publishedAt = site.published ? new Date().toISOString() : null;
  site.updatedAt = new Date().toISOString();
  res.json({ site, published: site.published });
});

// 7. Generate site with Gemini 3.7 Flash
app.post("/api/generate", async (req, res) => {
  try {
    const {
      businessName,
      industry,
      description,
      services,
      audience,
      tone,
      templateId,
      colorPreference,
      themePreference
    } = req.body;

    const ai = getGeminiClient();

    if (!ai) {
      // Fallback generator with high quality customized defaults
      const fallbackConfig = normalizeGeneratedConfig({
        site_name: businessName || "Lumina Design",
        accent_color: colorPreference || "#0071E3",
        theme: themePreference || "light",
        templateId: templateId || "apple-product",
        hero: {
          kicker: "Diseñado para líderes",
          title: `El futuro de ${industry || "tu negocio"}.`,
          highlightTitle: "Perfección en cada detalle.",
          subtitle: description || `${businessName || "Nuestra marca"} crea experiencias de alto impacto con rigor estético y tecnología de punta.`,
          cta_text: "Descubrir Ahora"
        },
        features: (services || "Innovación, Calidad, Soporte, Rapidez").split(",").map((s: string, idx: number) => ({
          title: s.trim() || `Servicio ${idx + 1}`,
          description: `Soluciones diseñadas específicamente para impulsar el crecimiento y la excelencia en ${industry || "el sector"}.`,
          icon: idx === 0 ? "Zap" : idx === 1 ? "ShieldCheck" : idx === 2 ? "Layers" : "Sparkles"
        }))
      }, businessName);

      return res.json({ site: fallbackConfig, isAiGenerated: false });
    }

    const systemInstruction = `
Eres un director creativo y copywriter de clase mundial especializado en sitios web minimalistas, elegantes y de altísima conversión con la estética visual y narrativa de Apple Inc.

Sigue estas directrices estrictas:
1. Copywriting: Titulares cortos, directos e impactantes (máximo 7 palabras). Subtítulos persuasivos y elegantes (máximo 25 palabras). Descripciones de características claras y de alto impacto (máximo 20 palabras).
2. Estilo Apple: Uso de verbos activos, contrastes elegantes, adjetivos precisos (p. ej., 'Ingeniería pura', 'Diseño trascendente', 'Rendimiento sin concesiones').
3. Imágenes de Unsplash: Elige imágenes de Unsplash en alta resolución (w=1600, q=80) pertinentes al sector.
4. Genera una estructura JSON completa y válida con: site_name, accent_color (hex), theme (light o dark), hero (title, highlightTitle, kicker, subtitle, cta_text, cta_link, image_url), features (array de 4 objetos con title, description, icon, statNumber, statLabel), product_highlight (title, subtitle, description, image_url, specs con label y value), testimonials (array de 3 con name, role, company, quote, avatar_url), pricing (title, subtitle, plans con name, priceMonthly, priceAnnual, description, features, highlighted), faq (array de 3 preguntas y respuestas), cta_final (kicker, title, subtitle, button_text).
5. Idioma: Español elegante y profesional.
`;

    const userPrompt = `
Genera el contenido estructurado completo para un sitio web estilo Apple con estos datos:
- Nombre del negocio: "${businessName || "Nova Tech"}"
- Sector/Industria: "${industry || "Tecnología y Software"}"
- Descripción: "${description || "Servicios avanzados de transformación digital y diseño de productos"}"
- Servicios/Productos principales: "${services || "Consultoría estratégica, Desarrollo de software de misión crítica, Inteligencia artificial, Experiencia de usuario"}"
- Público objetivo: "${audience || "Directores de tecnología, Startups en escala y Corporaciones"}"
- Tono deseado: "${tone || "Minimalista, visionario y premium"}"
- Color de acento preferido: "${colorPreference || "#0071E3"}"
- Tema preferido: "${themePreference || "light"}"
- Plantilla seleccionada: "${templateId || "apple-product"}"
`;

    const response = await ai.models.generateContent({
      model: "gemini-3.7-flash",
      contents: userPrompt,
      config: {
        systemInstruction,
        responseMimeType: "application/json",
        temperature: 0.7
      }
    });

    const responseText = response.text || "{}";
    let parsedJson: any = {};
    try {
      parsedJson = JSON.parse(responseText);
    } catch (parseErr) {
      console.warn("Failed to parse JSON response directly, cleaning markdown wrapper...");
      const cleaned = responseText.replace(/```json/gi, "").replace(/```/g, "").trim();
      parsedJson = JSON.parse(cleaned);
    }

    const finalSiteConfig = normalizeGeneratedConfig(parsedJson, businessName);
    if (templateId) finalSiteConfig.templateId = templateId;
    if (colorPreference) finalSiteConfig.accentColor = colorPreference;
    if (themePreference) finalSiteConfig.theme = themePreference;

    res.json({ site: finalSiteConfig, isAiGenerated: true });
  } catch (error: any) {
    console.error("Gemini generation error:", error);
    // Fallback safe return
    const fallbackConfig = normalizeGeneratedConfig({
      site_name: req.body?.businessName || "AppleWeb Creation",
      accent_color: req.body?.colorPreference || "#0071E3",
      hero: {
        title: "Diseño impecable.",
        highlightTitle: "Tecnología sin barreras.",
        subtitle: req.body?.description || "Construido para destacar en cada detalle y cautivar a tu audiencia desde el primer instante."
      }
    }, req.body?.businessName || "AppleWeb");

    res.json({ site: fallbackConfig, isAiGenerated: false, error: error.message });
  }
});

// 8. AI Refine / Copilot Assistant
app.post("/api/refine", async (req, res) => {
  try {
    const { prompt, currentSite, targetSection } = req.body;
    const ai = getGeminiClient();

    if (!ai) {
      return res.status(200).json({
        message: "Gemini API key no detectada. He aplicado un ajuste preestablecido.",
        updatedSite: currentSite
      });
    }

    const systemInstruction = `
Eres un asistente de diseño web e inteligencia artificial experto en optimizar landing pages estilo Apple.
El usuario te dará instrucciones para refinar su sitio web actual (p. ej. 'Haz el hero más persuasivo', 'Cambia el tono a lujo supremo', 'Añade una función de IA', 'Traduce o añade preguntas frecuentes').
Devuelve el JSON del sitio web actualizado manteniendo la misma estructura, mejorando únicamente los textos, secciones o estilos solicitados.
Responde estrictamente con un JSON válido.
`;

    const userPrompt = `
Instrucción del usuario: "${prompt}"
${targetSection ? `Sección prioritaria: ${targetSection}` : ""}
Sitio web actual (JSON):
${JSON.stringify(currentSite)}
`;

    const response = await ai.models.generateContent({
      model: "gemini-3.7-flash",
      contents: userPrompt,
      config: {
        systemInstruction,
        responseMimeType: "application/json"
      }
    });

    let updated = JSON.parse(response.text?.replace(/```json/g, "").replace(/```/g, "").trim() || "{}");
    if (!updated.id) updated.id = currentSite.id;
    updated.updatedAt = new Date().toISOString();

    res.json({ success: true, updatedSite: updated });
  } catch (err: any) {
    console.error("Refine error:", err);
    res.status(500).json({ error: "No se pudo refinar con IA", details: err.message });
  }
});

// 9. Export Standalone HTML file
app.post("/api/export/html", (req, res) => {
  const { site } = req.body;
  if (!site) return res.status(400).json({ error: "Falta configuración de sitio" });

  const html = generateStandaloneHtml(site);
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.setHeader("Content-Disposition", `attachment; filename="${site.slug || "apple-site"}.html"`);
  res.send(html);
});

// Helper for standalone Apple HTML generation
function generateStandaloneHtml(site: any): string {
  const s = site.sections || {};
  const isDark = site.theme === "dark";
  const accent = site.accentColor || "#0071E3";
  const bg = isDark ? "#000000" : "#FFFFFF";
  const bgAlt = isDark ? "#121214" : "#F5F5F7";
  const text = isDark ? "#F5F5F7" : "#1D1D1F";
  const textSecondary = isDark ? "#86868B" : "#6E6E73";
  const cardBg = isDark ? "#1C1C1E" : "#FFFFFF";
  const cardBorder = isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.08)";

  return `<!DOCTYPE html>
<html lang="es" class="${isDark ? "dark" : ""}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${site.seo?.title || site.name}</title>
  <meta name="description" content="${site.seo?.description || ""}">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    :root {
      --bg: ${bg};
      --bg-alt: ${bgAlt};
      --text: ${text};
      --text-sec: ${textSecondary};
      --accent: ${accent};
      --card-bg: ${cardBg};
      --card-border: ${cardBorder};
      --radius: ${site.borderRadius || 20}px;
      --font: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    }
    * { margin: 0; padding: 0; box-sizing: border-box; }
    html { scroll-behavior: smooth; }
    body {
      font-family: var(--font);
      background-color: var(--bg);
      color: var(--text);
      line-height: 1.6;
      -webkit-font-smoothing: antialiased;
    }
    .container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }
    
    /* Navigation */
    .nav {
      position: fixed; top: 0; left: 0; right: 0; z-index: 100;
      background: ${isDark ? "rgba(0,0,0,0.75)" : "rgba(255,255,255,0.8)"};
      backdrop-filter: blur(24px);
      -webkit-backdrop-filter: blur(24px);
      border-bottom: 1px solid var(--card-border);
      transition: all 0.3s ease;
    }
    .nav-inner { display: flex; justify-content: space-between; align-items: center; height: 56px; }
    .brand { font-weight: 700; font-size: 1.25rem; letter-spacing: -0.02em; color: var(--text); text-decoration: none; }
    .nav-links { display: flex; gap: 28px; list-style: none; align-items: center; }
    .nav-links a { text-decoration: none; color: var(--text-sec); font-size: 0.9rem; font-weight: 500; transition: color 0.2s; }
    .nav-links a:hover { color: var(--text); }
    .btn-pill {
      background: var(--accent); color: #fff; padding: 8px 18px; border-radius: 999px;
      text-decoration: none; font-size: 0.85rem; font-weight: 600; transition: transform 0.2s, opacity 0.2s;
    }
    .btn-pill:hover { opacity: 0.9; transform: scale(1.03); }

    /* Hero */
    .hero { padding: 140px 0 80px; text-align: center; }
    .kicker { font-size: 0.95rem; font-weight: 600; color: var(--accent); letter-spacing: 0.05em; text-transform: uppercase; margin-bottom: 16px; }
    .hero h1 { font-size: clamp(2.5rem, 6vw, 4.5rem); font-weight: 800; letter-spacing: -0.03em; line-height: 1.1; margin-bottom: 20px; }
    .hero h1 span { color: var(--accent); }
    .hero-sub { font-size: clamp(1.1rem, 2vw, 1.35rem); color: var(--text-sec); max-width: 720px; margin: 0 auto 36px; line-height: 1.5; font-weight: 400; }
    .hero-cta-group { display: flex; gap: 16px; justify-content: center; align-items: center; margin-bottom: 48px; }
    .btn-large { padding: 14px 32px; font-size: 1.05rem; border-radius: 999px; font-weight: 600; text-decoration: none; transition: 0.3s; }
    .btn-primary { background: var(--accent); color: #fff; }
    .btn-secondary { background: var(--card-bg); color: var(--text); border: 1px solid var(--card-border); }
    .btn-large:hover { transform: translateY(-2px); }
    .hero-img-wrap { border-radius: var(--radius); overflow: hidden; box-shadow: 0 20px 60px rgba(0,0,0,0.15); border: 1px solid var(--card-border); max-width: 1100px; margin: 0 auto; }
    .hero-img-wrap img { width: 100%; height: auto; display: block; }

    /* Sections */
    .section { padding: 100px 0; }
    .section-alt { background-color: var(--bg-alt); }
    .sec-header { text-align: center; max-width: 700px; margin: 0 auto 60px; }
    .sec-title { font-size: clamp(2rem, 4vw, 3rem); font-weight: 700; letter-spacing: -0.02em; margin-bottom: 16px; }
    .sec-sub { font-size: 1.15rem; color: var(--text-sec); }

    /* Bento Grid */
    .bento-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
    .bento-card {
      background: var(--card-bg); border: 1px solid var(--card-border); border-radius: var(--radius);
      padding: 36px; transition: transform 0.3s, box-shadow 0.3s;
    }
    .bento-card:hover { transform: translateY(-4px); box-shadow: 0 12px 36px rgba(0,0,0,0.08); }
    .bento-card.span-2 { grid-column: span 2; }
    .bento-tag { display: inline-block; font-size: 0.75rem; font-weight: 700; text-transform: uppercase; color: var(--accent); background: ${isDark ? "rgba(41,151,255,0.15)" : "rgba(0,113,227,0.1)"}; padding: 4px 10px; border-radius: 999px; margin-bottom: 16px; }
    .bento-card h3 { font-size: 1.4rem; font-weight: 700; margin-bottom: 12px; }
    .bento-card p { color: var(--text-sec); font-size: 1rem; }
    .bento-stat { font-size: 2.5rem; font-weight: 800; color: var(--accent); margin-top: 16px; }
    .bento-stat-label { font-size: 0.85rem; color: var(--text-sec); }

    /* Product Highlight */
    .product-box {
      background: var(--card-bg); border: 1px solid var(--card-border); border-radius: var(--radius);
      overflow: hidden; display: grid; grid-template-columns: 1fr 1fr; align-items: center;
    }
    .product-content { padding: 60px; }
    .product-content h2 { font-size: 2.5rem; font-weight: 700; margin-bottom: 16px; }
    .product-content p { color: var(--text-sec); font-size: 1.1rem; margin-bottom: 32px; }
    .specs-list { list-style: none; margin-bottom: 36px; }
    .specs-list li { display: flex; justify-content: space-between; padding: 12px 0; border-bottom: 1px solid var(--card-border); font-size: 0.95rem; }
    .product-img { width: 100%; height: 100%; object-fit: cover; }

    /* Testimonials */
    .test-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
    .test-card { background: var(--card-bg); border: 1px solid var(--card-border); border-radius: var(--radius); padding: 36px; }
    .test-quote { font-size: 1.05rem; line-height: 1.6; margin-bottom: 24px; color: var(--text); }
    .test-author { display: flex; align-items: center; gap: 14px; }
    .test-avatar { width: 44px; height: 44px; border-radius: 50%; object-fit: cover; }
    .test-name { font-weight: 700; font-size: 0.95rem; }
    .test-role { font-size: 0.8rem; color: var(--text-sec); }

    /* Pricing */
    .pricing-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px; }
    .price-card { background: var(--card-bg); border: 1px solid var(--card-border); border-radius: var(--radius); padding: 40px; text-align: center; }
    .price-card.featured { border-color: var(--accent); box-shadow: 0 0 0 2px var(--accent); }
    .price-name { font-size: 1.3rem; font-weight: 700; margin-bottom: 8px; }
    .price-num { font-size: 3rem; font-weight: 800; color: var(--accent); margin: 20px 0; }
    .price-features { list-style: none; text-align: left; margin: 28px 0; }
    .price-features li { padding: 8px 0; font-size: 0.95rem; color: var(--text-sec); border-bottom: 1px solid var(--card-border); }

    /* FAQ */
    .faq-wrap { max-width: 800px; margin: 0 auto; }
    .faq-item { background: var(--card-bg); border: 1px solid var(--card-border); border-radius: 12px; margin-bottom: 16px; padding: 24px; }
    .faq-q { font-size: 1.15rem; font-weight: 600; margin-bottom: 8px; }
    .faq-a { color: var(--text-sec); font-size: 1rem; line-height: 1.6; }

    /* Footer */
    footer { padding: 60px 0; background: var(--bg-alt); border-top: 1px solid var(--card-border); font-size: 0.85rem; color: var(--text-sec); text-align: center; }
    .foot-links { display: flex; justify-content: center; gap: 24px; margin-top: 16px; list-style: none; }
    .foot-links a { color: var(--text-sec); text-decoration: none; }
    .foot-links a:hover { color: var(--text); }

    /* Animations */
    .reveal { opacity: 0; transform: translateY(24px); transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1); }
    .reveal.active { opacity: 1; transform: translateY(0); }

    @media (max-width: 768px) {
      .bento-grid, .test-grid, .product-box { grid-template-columns: 1fr; }
      .bento-card.span-2 { grid-column: span 1; }
      .nav-links { display: none; }
      .product-content { padding: 32px; }
    }
  </style>
</head>
<body>

  <!-- Navigation -->
  <nav class="nav">
    <div class="container nav-inner">
      <a href="#" class="brand">${s.navbar?.brandName || site.name}</a>
      <ul class="nav-links">
        ${(s.navbar?.links || []).map((l: any) => `<li><a href="${l.href}">${l.label}</a></li>`).join("")}
      </ul>
      <a href="${s.navbar?.ctaLink || "#contact"}" class="btn-pill">${s.navbar?.ctaText || "Comenzar"}</a>
    </div>
  </nav>

  <!-- Hero Section -->
  ${s.hero?.enabled ? `
  <section class="hero reveal">
    <div class="container">
      ${s.hero.kicker ? `<div class="kicker">${s.hero.kicker}</div>` : ""}
      <h1>${s.hero.title} ${s.hero.highlightTitle ? `<span>${s.hero.highlightTitle}</span>` : ""}</h1>
      <p class="hero-sub">${s.hero.subtitle}</p>
      <div class="hero-cta-group">
        <a href="${s.hero.primaryCta?.link || "#contact"}" class="btn-large btn-primary">${s.hero.primaryCta?.text || "Comenzar"}</a>
        ${s.hero.secondaryCta?.text ? `<a href="${s.hero.secondaryCta.link}" class="btn-large btn-secondary">${s.hero.secondaryCta.text}</a>` : ""}
      </div>
      ${s.hero.imageUrl ? `
      <div class="hero-img-wrap">
        <img src="${s.hero.imageUrl}" alt="${site.name} Hero" loading="lazy">
      </div>` : ""}
    </div>
  </section>` : ""}

  <!-- Bento Features -->
  ${s.bentoFeatures?.enabled ? `
  <section id="features" class="section section-alt">
    <div class="container">
      <div class="sec-header reveal">
        ${s.bentoFeatures.kicker ? `<div class="kicker">${s.bentoFeatures.kicker}</div>` : ""}
        <h2 class="sec-title">${s.bentoFeatures.title}</h2>
        ${s.bentoFeatures.subtitle ? `<p class="sec-sub">${s.bentoFeatures.subtitle}</p>` : ""}
      </div>
      <div class="bento-grid">
        ${(s.bentoFeatures.items || []).map((item: any) => `
        <div class="bento-card ${item.colSpan === 2 ? "span-2" : ""} reveal">
          ${item.tag ? `<span class="bento-tag">${item.tag}</span>` : ""}
          <h3>${item.title}</h3>
          <p>${item.description}</p>
          ${item.statNumber ? `<div class="bento-stat">${item.statNumber}</div><div class="bento-stat-label">${item.statLabel || ""}</div>` : ""}
        </div>`).join("")}
      </div>
    </div>
  </section>` : ""}

  <!-- Product Highlight -->
  ${s.productHighlight?.enabled ? `
  <section id="product" class="section">
    <div class="container">
      <div class="product-box reveal">
        <div class="product-content">
          ${s.productHighlight.kicker ? `<div class="kicker">${s.productHighlight.kicker}</div>` : ""}
          <h2>${s.productHighlight.title}</h2>
          <p>${s.productHighlight.description}</p>
          <ul class="specs-list">
            ${(s.productHighlight.specs || []).map((sp: any) => `
            <li><strong>${sp.label}</strong> <span>${sp.value}</span></li>`).join("")}
          </ul>
          <a href="${s.productHighlight.ctaLink || "#contact"}" class="btn-pill" style="font-size: 1rem; padding: 12px 28px;">${s.productHighlight.ctaText || "Descubrir"}</a>
        </div>
        <div>
          <img src="${s.productHighlight.imageUrl}" alt="Product" class="product-img" loading="lazy">
        </div>
      </div>
    </div>
  </section>` : ""}

  <!-- Testimonials -->
  ${s.testimonials?.enabled && s.testimonials.items?.length ? `
  <section id="testimonials" class="section section-alt">
    <div class="container">
      <div class="sec-header reveal">
        <h2 class="sec-title">${s.testimonials.title}</h2>
        ${s.testimonials.subtitle ? `<p class="sec-sub">${s.testimonials.subtitle}</p>` : ""}
      </div>
      <div class="test-grid">
        ${s.testimonials.items.map((t: any) => `
        <div class="test-card reveal">
          <p class="test-quote">“${t.quote}”</p>
          <div class="test-author">
            <img src="${t.avatarUrl}" alt="${t.name}" class="test-avatar">
            <div>
              <div class="test-name">${t.name}</div>
              <div class="test-role">${t.role} · ${t.company}</div>
            </div>
          </div>
        </div>`).join("")}
      </div>
    </div>
  </section>` : ""}

  <!-- Pricing -->
  ${s.pricing?.enabled && s.pricing.plans?.length ? `
  <section id="pricing" class="section">
    <div class="container">
      <div class="sec-header reveal">
        <h2 class="sec-title">${s.pricing.title}</h2>
        <p class="sec-sub">${s.pricing.subtitle || ""}</p>
      </div>
      <div class="pricing-grid">
        ${s.pricing.plans.map((p: any) => `
        <div class="price-card ${p.highlighted ? "featured" : ""} reveal">
          <div class="price-name">${p.name}</div>
          <p style="color: var(--text-sec); font-size: 0.9rem;">${p.description}</p>
          <div class="price-num">${p.priceMonthly}<span style="font-size: 1rem; font-weight: normal; color: var(--text-sec);"> /mes</span></div>
          <ul class="price-features">
            ${(p.features || []).map((f: string) => `<li>✓ ${f}</li>`).join("")}
          </ul>
          <a href="${p.ctaLink || "#contact"}" class="btn-pill" style="display: block; width: 100%; text-align: center; box-sizing: border-box;">${p.ctaText || "Elegir Plan"}</a>
        </div>`).join("")}
      </div>
    </div>
  </section>` : ""}

  <!-- FAQ -->
  ${s.faq?.enabled && s.faq.items?.length ? `
  <section id="faq" class="section section-alt">
    <div class="container">
      <div class="sec-header reveal">
        <h2 class="sec-title">${s.faq.title}</h2>
        <p class="sec-sub">${s.faq.subtitle || ""}</p>
      </div>
      <div class="faq-wrap">
        ${s.faq.items.map((fq: any) => `
        <div class="faq-item reveal">
          <div class="faq-q">${fq.question}</div>
          <div class="faq-a">${fq.answer}</div>
        </div>`).join("")}
      </div>
    </div>
  </section>` : ""}

  <!-- CTA Final -->
  ${s.ctaFinal?.enabled ? `
  <section id="contact" class="section" style="text-align: center;">
    <div class="container reveal">
      ${s.ctaFinal.kicker ? `<div class="kicker">${s.ctaFinal.kicker}</div>` : ""}
      <h2 class="sec-title">${s.ctaFinal.title}</h2>
      <p class="sec-sub" style="max-width: 600px; margin: 0 auto 36px;">${s.ctaFinal.subtitle}</p>
      <a href="${s.ctaFinal.primaryCta?.link || "#"}" class="btn-large btn-primary">${s.ctaFinal.primaryCta?.text || "Comenzar"}</a>
    </div>
  </section>` : ""}

  <!-- Footer -->
  <footer>
    <div class="container">
      <p>${s.footer?.copyright || `© 2026 ${site.name}. Todos los derechos reservados.`}</p>
      <ul class="foot-links">
        ${(s.footer?.legalLinks || []).map((l: any) => `<li><a href="${l.href}">${l.label}</a></li>`).join("")}
      </ul>
    </div>
  </footer>

  <script>
    // Reveal on scroll observer
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
}

// ----------------- VITE MIDDLEWARE -----------------

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`AppleWeb SaaS Platform Server running on http://localhost:${PORT}`);
  });
}

startServer();
