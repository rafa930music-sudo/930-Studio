import {
  NavbarSection,
  HeroSection,
  LogosSection,
  BentoFeaturesSection,
  ProductHighlightSection,
  StatsSection,
  TestimonialsSection,
  PricingSection,
  FaqSection,
  CtaFinalSection,
  FooterSection,
  MapSection,
  SliderSection,
  GallerySection,
  TabsSection,
  MarqueeSection,
  CountdownSection,
  LeadFormSection,
  TimelineSection,
  SectionType
} from '../types';

export const SECTION_CATALOG_ITEMS: {
  type: SectionType;
  title: string;
  category: 'core' | 'content' | 'interactive' | 'conversion';
  description: string;
  icon: string;
}[] = [
  {
    type: 'hero',
    title: 'Cabecera Principal (Hero)',
    category: 'core',
    description: 'Titular de gran impacto, subtítulo, botones CTA y mockup o imagen',
    icon: '✨'
  },
  {
    type: 'bentoFeatures',
    title: 'Rejilla Bento de Características',
    category: 'content',
    description: 'Cuadrícula asimétrica estilo Apple con tarjetas interactivas e iconos',
    icon: '🍱'
  },
  {
    type: 'slider',
    title: 'Slider / Carrusel Interactivo',
    category: 'interactive',
    description: 'Carrusel de diapositivas deslizables con transiciones fluidas y controles',
    icon: '🎠'
  },
  {
    type: 'tabs',
    title: 'Pestañas Interactivas (Tabs)',
    category: 'interactive',
    description: 'Selector dinámico por pestañas con vistas cambiantes e imágenes',
    icon: '📑'
  },
  {
    type: 'marquee',
    title: 'Cinta Marquesina (Marquee)',
    category: 'interactive',
    description: 'Ticker continuo con movimiento infinito de características clave o marcas',
    icon: '🎞️'
  },
  {
    type: 'countdown',
    title: 'Cuenta Regresiva (Countdown)',
    category: 'conversion',
    description: 'Temporizador de lanzamiento u oferta con días, horas, minutos y segundos',
    icon: '⏳'
  },
  {
    type: 'leadForm',
    title: 'Formulario Multi-Paso',
    category: 'conversion',
    description: 'Captura interactiva de clientes potenciales en pasos sencillos 1-2-3',
    icon: '📋'
  },
  {
    type: 'timeline',
    title: 'Línea de Tiempo (Roadmap)',
    category: 'content',
    description: 'Cronología de hitos, fases del proyecto o evolución histórica',
    icon: '🛣️'
  },
  {
    type: 'gallery',
    title: 'Galería Lightbox',
    category: 'content',
    description: 'Muestra visual en cuadrícula con visor modal para ampliar imágenes',
    icon: '🖼️'
  },
  {
    type: 'map',
    title: 'Mapa & Ubicación',
    category: 'content',
    description: 'Integración interactiva con Google Maps, horarios y datos de contacto',
    icon: '📍'
  },
  {
    type: 'productHighlight',
    title: 'Detalle de Producto',
    category: 'content',
    description: 'Ficha técnica de ingeniería con tabla de especificaciones milimétricas',
    icon: '📱'
  },
  {
    type: 'stats',
    title: 'Métricas & Impacto',
    category: 'content',
    description: 'Números grandes y estadísticas de confianza para tus clientes',
    icon: '📊'
  },
  {
    type: 'pricing',
    title: 'Tabla de Precios',
    category: 'conversion',
    description: 'Planes de suscripción con toggle mensual/anual y características',
    icon: '💳'
  },
  {
    type: 'testimonials',
    title: 'Testimonios & Clientes',
    category: 'content',
    description: 'Citas de clientes satisfechos con avatar, cargo y valoración 5 estrellas',
    icon: '💬'
  },
  {
    type: 'faq',
    title: 'Preguntas Frecuentes (FAQ)',
    category: 'content',
    description: 'Acordeón interactivo para resolver dudas y objeciones de compra',
    icon: '❓'
  },
  {
    type: 'logos',
    title: 'Logotipos de Confianza',
    category: 'content',
    description: 'Barra de marcas de clientes líderes que respaldan el producto',
    icon: '🏢'
  },
  {
    type: 'ctaFinal',
    title: 'Llamada a la Acción Final',
    category: 'conversion',
    description: 'Bloque de cierre con botón de alta conversión para maximizar registros',
    icon: '🚀'
  }
];

export function getDefaultSectionData(type: SectionType, siteName: string = 'Mi Proyecto'): any {
  switch (type) {
    case 'map':
      return {
        enabled: true,
        kicker: 'UBICACIÓN & VISITAS',
        title: 'Encuéntranos en el Corazón de la Ciudad',
        subtitle: 'Espacio insignia abierto de lunes a sábado para demostraciones privadas y atención personalizada.',
        address: 'Paseo de la Castellana 85, Planta 14',
        city: '28046 Madrid, España',
        hours: 'Lunes a Viernes: 09:00 – 19:00 | Sábados: Con Cita Previa',
        phone: '+34 910 889 200',
        email: 'contacto@' + siteName.toLowerCase().replace(/\s+/g, '') + '.com',
        embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.5492477546377!2d-3.6937409234851296!3d40.440939554160454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4228ec56be5845%3A0xc367683ca519db8!2sPaseo%20de%20la%20Castellana%2C%20Madrid!5e0!3m2!1ses!2ses!4v1700000000000!5m2!1ses!2ses',
        directionsUrl: 'https://maps.google.com'
      } as MapSection;

    case 'slider':
      return {
        enabled: true,
        kicker: 'EXPERIENCIAS DESTACADAS',
        title: 'Descubre Nuestras Innovaciones Clave',
        subtitle: 'Desliza para explorar los diferentes aspectos de nuestra tecnología y servicios exclusivos.',
        autoplay: true,
        slides: [
          {
            id: 'slide_1',
            title: 'Rendimiento Extremo de Última Generación',
            subtitle: 'Arquitectura diseñada para procesar millones de operaciones en milisegundos con latencia ultra baja.',
            tag: 'POTENCIA',
            imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1400&q=80',
            ctaText: 'Ver Especificaciones',
            ctaLink: '#specs'
          },
          {
            id: 'slide_2',
            title: 'Diseño Acústico y Ergonómico',
            subtitle: 'Materiales nobles seleccionados a mano para brindar confort incomparable durante todo el día.',
            tag: 'CONFORT',
            imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1400&q=80',
            ctaText: 'Explorar Galería',
            ctaLink: '#gallery'
          },
          {
            id: 'slide_3',
            title: 'Seguridad y Privacidad por Diseño',
            subtitle: 'Cifrado de grado militar de extremo a extremo sin comprometer la velocidad ni la accesibilidad.',
            tag: 'SEGURIDAD',
            imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1400&q=80',
            ctaText: 'Leer Auditoría',
            ctaLink: '#faq'
          }
        ]
      } as SliderSection;

    case 'gallery':
      return {
        enabled: true,
        kicker: 'LOOKBOOK VISUAL',
        title: 'Galería de Acabados & Detalles',
        subtitle: 'Haz clic en cualquier imagen para inspeccionar la precisión en alta definición.',
        items: [
          {
            id: 'gal_1',
            title: 'Detalle de Aleación de Titanio',
            category: 'Materiales',
            imageUrl: 'https://images.unsplash.com/photo-1526738549149-8e07eca6c147?auto=format&fit=crop&w=800&q=80',
            aspectRatio: 'square'
          },
          {
            id: 'gal_2',
            title: 'Espacio de Trabajo Minimalista',
            category: 'Entorno',
            imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
            aspectRatio: 'wide'
          },
          {
            id: 'gal_3',
            title: 'Precisión de Ensamblaje',
            category: 'Ingeniería',
            imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
            aspectRatio: 'square'
          },
          {
            id: 'gal_4',
            title: 'Interfaz con Modo Oscuro',
            category: 'Software',
            imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
            aspectRatio: 'wide'
          }
        ]
      } as GallerySection;

    case 'tabs':
      return {
        enabled: true,
        kicker: 'MODALIDADES DE USO',
        title: 'Diseñado para Adaptarse a tus Necesidades',
        subtitle: 'Selecciona una pestaña para ver cómo optimizamos cada faceta de tu flujo de trabajo.',
        tabs: [
          {
            id: 'tab_1',
            label: 'Para Creadores',
            icon: 'Palette',
            title: 'Herramientas de Edición a la Velocidad del Pensamiento',
            description: 'Accede a un lienzo infinito con atajos de teclado intuitivos y renderizado en tiempo real sin esperas.',
            imageUrl: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1000&q=80',
            points: [
              'Exportación instantánea en HTML5 limpio y minificado',
              'Sincronización en la nube en tiempo real con 0 pérdidas',
              'Soporte completo de tipografías y paletas dinámicas'
            ]
          },
          {
            id: 'tab_2',
            label: 'Para Equipos',
            icon: 'Boxes',
            title: 'Colaboración Fluida y Roles de Acceso',
            description: 'Invita a tu equipo con un enlace seguro y comparte comentarios milimétricos sobre cada bloque.',
            imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80',
            points: [
              'Permisos granulares de edición, revisión o solo lectura',
              'Historial de versiones restaurable con un solo clic',
              'Integración con webhooks y exportación continua'
            ]
          },
          {
            id: 'tab_3',
            label: 'Para Empresas',
            icon: 'Shield',
            title: 'Seguridad Empresarial & SLA del 99.99%',
            description: 'Infraestructura dedicada en Europa y América del Norte con cifrado AES-256 en reposo y tránsito.',
            imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80',
            points: [
              'Cumplimiento estricto de RGPD y SOC2 Tipo II',
              'Dominio personalizado con certificado SSL gestionado automático',
              'Soporte telefónico prioritario 24/7 con gestor de cuenta dedicado'
            ]
          }
        ]
      } as TabsSection;

    case 'marquee':
      return {
        enabled: true,
        speed: 'normal',
        direction: 'left',
        items: [
          { id: 'm1', text: '⚡ Rendimiento 100/100 en Google PageSpeed' },
          { id: 'm2', text: '🔒 Cifrado de Grado Militar de Extremo a Extremo' },
          { id: 'm3', text: '✨ Diseño Minimalista Inspirado en Cupertino' },
          { id: 'm4', text: '🌐 Dominios Personalizados con SSL Automático' },
          { id: 'm5', text: '📦 Exportación en ZIP de Código Limpio' },
          { id: 'm6', text: '📱 100% Adaptativo a Móviles y Pantallas Retina' }
        ]
      } as MarqueeSection;

    case 'countdown':
      return {
        enabled: true,
        kicker: 'LANZAMIENTO LIMITADO',
        title: 'Oferta Especial de Apertura con 40% Descuento',
        subtitle: 'Aprovecha las plazas de la primera cohorte antes de que finalice la cuenta atrás oficial.',
        targetDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString(),
        ctaText: 'Reclamar Descuento del 40%',
        ctaLink: '#pricing',
        badge: 'Solo 50 Plazas Disponibles'
      } as CountdownSection;

    case 'leadForm':
      return {
        enabled: true,
        kicker: 'COMIENZA HOY',
        title: 'Solicita una Demostración Personalizada',
        subtitle: 'Completa estos 3 pasos rápidos y un especialista diseñará una propuesta a la medida de tu negocio.',
        submitButtonText: 'Enviar Solicitud Inmediata',
        successTitle: '¡Solicitud Recibida con Éxito!',
        successMessage: 'Nos pondremos en contacto contigo en menos de 2 horas hábiles con tu propuesta personalizada.',
        steps: [
          {
            id: 'step_1',
            stepNumber: 1,
            title: '¿Qué tipo de proyecto deseas construir?',
            subtitle: 'Selecciona la opción que mejor describa tu objetivo principal.',
            fields: [
              {
                id: 'project_type',
                label: 'Tipo de Proyecto',
                type: 'select',
                options: ['Sitio Web Corporativo / SaaS', 'Tienda Online / E-commerce', 'Portafolio de Lujo', 'Landing Page de Alta Conversión'],
                required: true
              },
              {
                id: 'timeline',
                label: 'Plazo Estimado',
                type: 'select',
                options: ['Inmediato (menos de 2 semanas)', '1 a 2 meses', 'Explorando opciones'],
                required: true
              }
            ]
          },
          {
            id: 'step_2',
            stepNumber: 2,
            title: '¿Cuál es tu rango de presupuesto aproximado?',
            subtitle: 'Nos ayuda a asignar el equipo técnico y arquitectónico idóneo.',
            fields: [
              {
                id: 'budget',
                label: 'Presupuesto Estimado',
                type: 'select',
                options: ['1.000€ – 3.000€', '3.000€ – 10.000€', 'Más de 10.000€ / Empresa'],
                required: true
              },
              {
                id: 'notes',
                label: 'Detalles o Requisitos Específicos',
                type: 'textarea',
                placeholder: 'Cuéntanos brevemente sobre tu negocio, competidores o funcionalidades clave que necesitas...',
                required: false
              }
            ]
          },
          {
            id: 'step_3',
            stepNumber: 3,
            title: 'Datos de Contacto',
            subtitle: '¿A dónde enviamos tu propuesta y acceso previo?',
            fields: [
              {
                id: 'full_name',
                label: 'Nombre y Apellidos',
                type: 'text',
                placeholder: 'Elena Gómez',
                required: true
              },
              {
                id: 'work_email',
                label: 'Correo Electrónico de Trabajo',
                type: 'email',
                placeholder: 'elena@empresa.com',
                required: true
              }
            ]
          }
        ]
      } as LeadFormSection;

    case 'timeline':
      return {
        enabled: true,
        kicker: 'CRONOGRAMA ESTRATÉGICO',
        title: 'Nuestra Hoja de Ruta de Innovación',
        subtitle: 'Hitos clave alcanzados y próximos lanzamientos programados para este año.',
        milestones: [
          {
            id: 'm_1',
            phase: 'Fase 1',
            dateOrQuarter: 'Q1 2026',
            title: 'Lanzamiento del Motor de Renderizado V2',
            description: 'Arquitectura ultra-optimizada con tiempo de primera pintura por debajo de 50ms.',
            status: 'completed',
            points: ['Soporte de temas automáticos claro/oscuro', 'Generación de bundle estático']
          },
          {
            id: 'm_2',
            phase: 'Fase 2',
            dateOrQuarter: 'Q2 2026',
            title: 'Catálogo de 16 Plantillas de Grado Apple',
            description: 'Marcos especializados por industria con tipografías y estética de alto lujo.',
            status: 'completed',
            points: ['Rejillas Bento inteligentes', 'Editor visual con soporte arrastrar y soltar']
          },
          {
            id: 'm_3',
            phase: 'Fase 3',
            dateOrQuarter: 'Q3 2026',
            title: 'Inteligencia Artificial Generativa Integrada',
            description: 'Reescritura de copy en vivo, generación de esquemas de color y optimización SEO automática.',
            status: 'in_progress',
            points: ['Traducción multilingüe instantánea', 'Generación de imágenes contextuales']
          },
          {
            id: 'm_4',
            phase: 'Fase 4',
            dateOrQuarter: 'Q4 2026',
            title: 'Ecosistema de Plugins & Colaboración Multi-Usuario',
            description: 'Edición concurrente en tiempo real estilo Figma y mercado de extensiones.',
            status: 'upcoming',
            points: ['Webhooks de analítica avanzada', 'Integraciones directas con CRM y Stripe']
          }
        ]
      } as TimelineSection;

    default:
      return {};
  }
}
