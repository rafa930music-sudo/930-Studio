import { TemplateDefinition } from '../../types';

export const SERVICES_TEMPLATES: TemplateDefinition[] = [
  // 12. HAVEN — Inmobiliaria de Lujo & Residencias Exclusivas
  {
    id: 'haven-realestate',
    name: 'Haven',
    tagline: 'Inmobiliaria boutique especializada en villas de lujo, áticos con vistas panorámicas y fincas privadas',
    category: 'services',
    thumbnail: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    description: 'Blanco luminoso y azul océano #0284C7, tipografía elegante, buscador de propiedades, carrusel de residencias exclusivas, bento de comodidades premium, galería de interiores, mapa y formulario de visita privada.',
    accentColor: '#0284C7',
    theme: 'light',
    defaultConfig: {
      templateId: 'haven-realestate',
      name: 'Haven Luxury Real Estate',
      slug: 'haven-luxury',
      domain: 'havenestates.com',
      theme: 'light',
      accentColor: '#0284C7',
      fontFamily: 'Inter, -apple-system, sans-serif',
      borderRadius: 16,
      published: true,
      sectionOrder: [
        'navbar',
        'hero',
        'slider',
        'bentoFeatures',
        'gallery',
        'stats',
        'testimonials',
        'leadForm',
        'map',
        'faq',
        'ctaFinal',
        'footer'
      ],
      seo: {
        title: 'Haven Luxury Real Estate — Villas Exclusivas, Áticos & Fincas Singulares',
        description: 'Catálogo privado de propiedades residenciales de alta gama en las ubicaciones más cotizadas de la Costa del Sol, Ibiza y Madrid.',
        keywords: 'inmobiliaria de lujo, villas exclusivas, aticos de lujo, comprar casa ibiza, marbella luxury villas, real estate espana'
      },
      sections: {
        navbar: {
          brandName: 'Haven',
          logoText: 'HAVEN REAL ESTATE',
          ctaText: 'Solicitar Visita Privada',
          ctaLink: '#contact',
          links: [
            { label: 'Propiedades', href: '#slider' },
            { label: 'Servicios VIP', href: '#features' },
            { label: 'Galería', href: '#gallery' },
            { label: 'Contacto', href: '#contact' },
            { label: 'Oficinas', href: '#map' }
          ],
          glassBlur: true,
          sticky: true
        },
        hero: {
          enabled: true,
          badge: 'Catálogo Confidencial 2026 • Asesoría Patrimonial Integral',
          kicker: 'Propiedades Singulares & Alta Inversión',
          title: 'El hogar donde tus sueños',
          highlightTitle: 'encuentran su lugar.',
          subtitle: 'Accede a la colección más exclusiva de villas frente al mar, áticos de diseño y residencias privadas con máxima discreción y seguridad jurídica.',
          primaryCta: { text: 'Explorar Propiedades Destacadas', link: '#slider' },
          secondaryCta: { text: 'Valoración Gratuita de tu Inmueble →', link: '#contact' },
          imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
          style: 'centered'
        },
        slider: {
          enabled: true,
          kicker: 'Residencias en Exclusiva',
          title: 'Propiedades destacadas de nuestra cartera.',
          subtitle: 'Villas seleccionadas por su valor arquitectónico, privacidad y vistas incomparables.',
          autoplay: true,
          slides: [
            {
              id: 'sl_1',
              title: 'Villa Solaria — La Zagaleta, Marbella (4,200,000€)',
              subtitle: '6 dormitorios en suite, piscina infinity climatizada, spa privado y vistas panorámicas al mar Mediterráneo.',
              tag: 'En Venta • Exclusiva',
              imageUrl: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80',
              ctaText: 'Ver Dosier Completo',
              ctaLink: '#contact'
            },
            {
              id: 'sl_2',
              title: 'Ático Dúplex Salamanca — Madrid Centro (3,100,000€)',
              subtitle: 'Terraza perimetral de 140m², domótica integral Lutron, 4 plazas de garaje y conserjería 24/7.',
              tag: 'En Venta • Prime Location',
              imageUrl: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
              ctaText: 'Ver Dosier del Ático',
              ctaLink: '#contact'
            },
            {
              id: 'sl_3',
              title: 'Finca Na Xamena — Ibiza Norte (5,800,000€)',
              subtitle: 'Arquitectura balear contemporánea con acceso directo a cala privada, helipuerto y jardines aromáticos.',
              tag: 'En Venta • Frente al Mar',
              imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
              ctaText: 'Ver Dosier de la Finca',
              ctaLink: '#contact'
            }
          ]
        },
        bentoFeatures: {
          enabled: true,
          kicker: 'Servicio Haven Bespoke',
          title: 'Asesoramiento inmobiliario con rigor patrimonial.',
          subtitle: 'Acompañamos a compradores, inversores y propietarios durante todo el ciclo de adquisición.',
          items: [
            {
              id: 'f1',
              title: 'Acceso a Cartera Off-Market (Venta Silenciosa)',
              description: 'Más del 40% de nuestras propiedades más exclusivas no se publicitan en internet para preservar la privacidad de las partes.',
              icon: 'ShieldCheck',
              tag: '100% Confidencial',
              colSpan: 2,
              statNumber: '+180M€',
              statLabel: 'Volumen de transacciones gestionadas en 2025'
            },
            {
              id: 'f2',
              title: 'Auditoría Legal & Fiscal de la Propiedad',
              description: 'Comprobación exhaustiva de cargas registrales, licencias urbanísticas y optimización tributaria de la compraventa.',
              icon: 'Scale',
              tag: 'Seguridad Jurídica',
              colSpan: 1
            },
            {
              id: 'f3',
              title: 'Servicio de Concierge & Arquitectura Interior',
              description: 'Gestión de reformas de alta gama, amueblamiento llave en mano con interioristas premiados y mantenimiento post-compra.',
              icon: 'Building2',
              tag: 'Llave en Mano',
              colSpan: 1
            },
            {
              id: 'f4',
              title: 'Golden Visa & Residencia para Inversores',
              description: 'Tramitación especializada de permisos de residencia por inversión inmobiliaria para clientes internacionales y familias.',
              icon: 'Globe2',
              tag: 'Asesoría Internacional',
              colSpan: 2,
              statNumber: '100%',
              statLabel: 'Éxito en aprobaciones de expedientes de residencia'
            }
          ]
        },
        gallery: {
          enabled: true,
          kicker: 'Interiores & Arquitectura',
          title: 'Espacios creados para ser disfrutados.',
          subtitle: 'Materiales nobles, luz natural y distribución pensada para el bienestar.',
          items: [
            {
              id: 'g1',
              title: 'Salón Principal con Grandes Ventanales — Villa Solaria',
              category: 'Marbella',
              imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
              aspectRatio: 'wide'
            },
            {
              id: 'g2',
              title: 'Cocina Minimalista con Isla de Mármol Calacatta',
              category: 'Diseño Interior',
              imageUrl: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80',
              aspectRatio: 'square'
            },
            {
              id: 'g3',
              title: 'Piscina Infinity al Atardecer con Vistas a la Bahía',
              category: 'Ibiza',
              imageUrl: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80',
              aspectRatio: 'square'
            }
          ]
        },
        stats: {
          enabled: true,
          kicker: 'Nuestra Trayectoria',
          title: 'Líderes en el segmento inmobiliario prime.',
          subtitle: 'Cifras que demuestran la confianza de clientes nacionales e internacionales.',
          items: [
            { id: 's1', value: '180M€+', label: 'Volumen Transaccionado', description: 'En propiedades singulares' },
            { id: 's2', value: '45 Días', label: 'Tiempo Medio de Venta', description: 'Gracias a nuestra red privada' },
            { id: 's3', value: '100%', label: 'Discreción Garantizada', description: 'Acuerdos de confidencialidad NDA' },
            { id: 's4', value: '98%', label: 'Clientes por Recomendación', description: 'Lealtad patrimonial' }
          ]
        },
        testimonials: {
          enabled: true,
          title: 'Lo que opinan nuestros compradores y propietarios.',
          subtitle: 'Experiencias compartidas tras adquirir o vender su propiedad con Haven.',
          items: [
            {
              id: 't1',
              name: 'Henrik & Astrid Lindqvist',
              role: 'Inversores Inmobiliarios',
              company: 'Estocolmo • Marbella',
              quote: 'Buscábamos una villa en La Zagaleta durante más de un año sin éxito. El equipo de Haven nos presentó una propiedad fuera de mercado en tres semanas y gestionó todo el proceso legal con una profesionalidad impecable.',
              avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
              rating: 5
            },
            {
              id: 't2',
              name: 'Carmen Martínez-Bordiú',
              role: 'Propietaria en Barrio de Salamanca',
              company: 'Madrid',
              quote: 'Vender nuestro ático familiar requería máxima discreción. Haven organizó únicamente visitas con compradores cualificados y cerramos la venta al precio acordado en menos de dos meses.',
              avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
              rating: 5
            }
          ]
        },
        leadForm: {
          enabled: true,
          kicker: 'Atención Personalizada',
          title: 'Solicita una consulta o visita privada.',
          subtitle: 'Un agente senior de Haven se pondrá en contacto contigo de forma estrictamente confidencial.',
          submitButtonText: 'Enviar Solicitud Inmobiliaria',
          successTitle: '¡Solicitud Recibida Correctamente!',
          successMessage: 'Gracias por confiar en Haven. Tu asesor patrimonial asignado te contactará en menos de 24 horas laborables.',
          steps: [
            {
              id: 'step_1',
              stepNumber: 1,
              title: 'Datos de Contacto',
              subtitle: 'Indícanos cómo prefieres que nos comuniquemos contigo.',
              fields: [
                { id: 'hf_name', label: 'Nombre Completo', type: 'text', placeholder: 'Ej. Alejandro Santos', required: true },
                { id: 'hf_email', label: 'Correo Electrónico', type: 'email', placeholder: 'alejandro@empresa.com', required: true },
                { id: 'hf_phone', label: 'Teléfono / WhatsApp', type: 'text', placeholder: '+34 600 000 000', required: true }
              ]
            },
            {
              id: 'step_2',
              stepNumber: 2,
              title: 'Interés Inmobiliario',
              subtitle: 'Ubicación, tipo de operación y rango de presupuesto.',
              fields: [
                {
                  id: 'hf_interest',
                  label: 'Tipo de Operación',
                  type: 'select',
                  options: ['Comprar una Propiedad Residencial', 'Vender mi Propiedad (Valoración)', 'Inversión Patrimonial / Rentabilidad', 'Alquiler de Temporada de Lujo'],
                  required: true
                },
                {
                  id: 'hf_location',
                  label: 'Zona de Interés',
                  type: 'select',
                  options: ['Marbella & Costa del Sol', 'Madrid (Salamanca / La Moraleja / El Viso)', 'Ibiza & Formentera', 'Mallorca (Son Vida / Andratx)', 'Otras Ubicaciones Exclusivas'],
                  required: true
                },
                {
                  id: 'hf_budget',
                  label: 'Rango de Inversión',
                  type: 'select',
                  options: ['1,000,000€ - 2,500,000€', '2,500,000€ - 5,000,000€', '+5,000,000€ (Cartera Ultra Prime)'],
                  required: true
                },
                { id: 'hf_notes', label: 'Comentarios adicionales o características específicas', type: 'textarea', placeholder: 'Ej. Villa con vistas al mar, mínimo 5 dormitorios, piscina climatizada...', required: false }
              ]
            }
          ]
        },
        map: {
          enabled: true,
          kicker: 'Nuestras Boutiques Inmobiliarias',
          title: 'Oficinas en las ubicaciones más prestigiosas.',
          subtitle: 'Visítanos para mantener una reunión privada con nuestros directores de zona.',
          address: 'Paseo de la Castellana 85, Planta 12',
          city: '28046 Madrid • Delegaciones en Puerto Banús (Marbella) y Marina Botafoch (Ibiza)',
          hours: 'Lunes a Viernes: 09:00 - 20:00 (Cita previa disponible fines de semana)',
          phone: '+34 910 000 890',
          email: 'private@havenestates.com',
          embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.5448371302824!2d-3.6918!3d40.4402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDI2JzI0LjciTiAzwrA0MSczMC41Ilc!5e0!3m2!1ses!2ses!4v1650000000000!5m2!1ses!2ses',
          directionsUrl: 'https://maps.google.com'
        },
        faq: {
          enabled: true,
          title: 'Preguntas Frecuentes sobre Haven Real Estate',
          subtitle: 'Todo sobre el proceso de compraventa, fiscalidad y discreción.',
          items: [
            {
              id: 'hf_q1',
              question: '¿Cómo garantizáis la confidencialidad en propiedades off-market?',
              answer: 'Exigimos la firma de un acuerdo de confidencialidad (NDA) y la acreditación de capacidad financiera previa antes de compartir la dirección exacta, planos y reportaje fotográfico de la vivienda.'
            },
            {
              id: 'hf_q2',
              question: '¿Qué gastos e impuestos implica comprar una vivienda de lujo en España?',
              answer: 'En obra nueva se aplica el 10% de IVA más el Impuesto de Actos Jurídicos Documentados (AJD, entre el 0.75% y el 1.5% según la comunidad autónoma). En segunda mano se abona el Impuesto de Transmisiones Patrimoniales (ITP, entre el 6% y el 10%). Nuestro equipo legal te entregará un desglose exacto antes de presentar cualquier oferta.'
            },
            {
              id: 'hf_q3',
              question: '¿Gestionáis la obtención del NIE y apertura de cuentas para compradores extranjeros?',
              answer: 'Sí. Nuestro departamento legal asiste a compradores internacionales con poderes notariales para tramitar el NIE, abrir cuentas bancarias en entidades de primera línea y tramitar la Golden Visa si procede.'
            }
          ]
        },
        ctaFinal: {
          enabled: true,
          kicker: 'Tu Próxima Residencia',
          title: 'Da el paso hacia un nuevo estándar de vida.',
          subtitle: 'Contáctanos hoy mismo para acceder a nuestro catálogo confidencial de propiedades.',
          primaryCta: { text: 'Agendar Reunión Privada', link: '#contact' },
          secondaryCta: { text: 'Descargar Catálogo Selección 2026', link: '#guide' },
          backgroundStyle: 'glow'
        },
        footer: {
          copyright: '© 2026 Haven Luxury Real Estate S.L. Madrid • Marbella • Ibiza • Mallorca.',
          legalLinks: [
            { label: 'Aviso Legal & Honorarios', href: '#legal' },
            { label: 'Prevención de Blanqueo', href: '#aml' },
            { label: 'Política de Privacidad', href: '#privacy' },
            { label: 'Registro de Agentes Inmobiliarios', href: '#register' }
          ],
          socialLinks: [
            { platform: 'Instagram', url: 'https://instagram.com' },
            { platform: 'LinkedIn', url: 'https://linkedin.com' },
            { platform: 'YouTube', url: 'https://youtube.com' }
          ]
        }
      }
    }
  },

  // 13. LEGAL — Bufete de Abogados, Asesoría Jurídica & Litigación Corporativa
  {
    id: 'legal-firm',
    name: 'Legal',
    tagline: 'Bufete de abogados corporativo especializado en fusiones y adquisiciones, derecho mercantil y litigación compleja',
    category: 'services',
    thumbnail: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80',
    description: 'Azul marino solemne y dorado #1E3A8A / #D97706, tipografía jurídica elegante, áreas de práctica en bento, pestañas de especialidades corporativas, métricas de casos ganados, formulario de consulta confidencial y mapa de sede.',
    accentColor: '#1E3A8A',
    theme: 'light',
    defaultConfig: {
      templateId: 'legal-firm',
      name: 'Vanguard Legal Partners',
      slug: 'vanguard-legal',
      domain: 'vanguardlegal.law',
      theme: 'light',
      accentColor: '#1E3A8A',
      fontFamily: 'Inter, -apple-system, sans-serif',
      borderRadius: 12,
      published: true,
      sectionOrder: [
        'navbar',
        'hero',
        'logos',
        'bentoFeatures',
        'tabs',
        'stats',
        'testimonials',
        'leadForm',
        'map',
        'faq',
        'ctaFinal',
        'footer'
      ],
      seo: {
        title: 'Vanguard Legal Partners — Bufete de Abogados Mercantil, Fiscal & Litigación',
        description: 'Defendemos los intereses corporativos de empresas líderes, fondos de inversión y directivos con máxima excelencia técnica.',
        keywords: 'bufete de abogados, derecho mercantil, fusiones y adquisiciones, m&a espana, litigacion mercantil, compliance tributario'
      },
      sections: {
        navbar: {
          brandName: 'Vanguard Legal',
          logoText: 'VANGUARD LEGAL',
          ctaText: 'Consulta Confidencial',
          ctaLink: '#contact',
          links: [
            { label: 'Áreas de Práctica', href: '#features' },
            { label: 'Servicios', href: '#tabs' },
            { label: 'Resultados', href: '#stats' },
            { label: 'Equipo', href: '#testimonials' },
            { label: 'Sede', href: '#map' }
          ],
          glassBlur: true,
          sticky: true
        },
        hero: {
          enabled: true,
          badge: 'Reconocidos por Chambers & Partners 2025 • Top Tier en M&A',
          kicker: 'Excelencia Jurídica & Estrategia Empresarial',
          title: 'Defensa implacable.',
          highlightTitle: 'Rigor jurídico sin fisuras.',
          subtitle: 'Asesoramos a corporaciones, consejos de administración y patrimonios familiares en las operaciones más complejas y litigios de alto impacto.',
          primaryCta: { text: 'Conocer Nuestras Áreas de Práctica', link: '#features' },
          secondaryCta: { text: 'Solicitar Reunión Confidencial →', link: '#contact' },
          imageUrl: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1600&q=80',
          style: 'centered'
        },
        logos: {
          enabled: true,
          title: 'RECONOCIMIENTOS DE LOS PRINCIPALES DIRECTORIOS JURÍDICOS MUNDIALES',
          items: [
            { id: 'l1', name: 'Chambers Global', tagline: 'Band 1 Corporate' },
            { id: 'l2', name: 'The Legal 500', tagline: 'Top Tier Firm' },
            { id: 'l3', name: 'Best Lawyers', tagline: 'Lawyer of the Year' },
            { id: 'l4', name: 'Leaders League', tagline: 'Excellent Dispute Resolution' },
            { id: 'l5', name: 'Iberian Lawyer', tagline: 'Gold Award M&A' }
          ]
        },
        bentoFeatures: {
          enabled: true,
          kicker: 'Áreas de Especialización',
          title: 'Soluciones jurídicas con visión de negocio.',
          subtitle: 'Nuestros socios combinan experiencia en las firmas internacionales más exigentes con un trato directo y personalizado.',
          items: [
            {
              id: 'f1',
              title: 'Fusiones, Adquisiciones & Private Equity (M&A)',
              description: 'Asesoramiento integral en compraventa de empresas, due diligence legal, pactos de socios y reestructuraciones societarias transfronterizas.',
              icon: 'Scale',
              tag: 'M&A Corporativo',
              colSpan: 2,
              statNumber: '+450M€',
              statLabel: 'En transacciones corporativas cerradas en el último ejercicio'
            },
            {
              id: 'f2',
              title: 'Litigación Mercantil & Arbitraje Internacional',
              description: 'Defensa de disputas societarias complejas ante los tribunales de justicia y cortes arbitrales de Madrid, París y Londres.',
              icon: 'ShieldCheck',
              tag: 'Litigios & Arbitraje',
              colSpan: 1
            },
            {
              id: 'f3',
              title: 'Derecho Fiscal & Planificación Patrimonial',
              description: 'Optimización tributaria corporativa, reorganización de holdings familiares y defensa en inspecciones de la Agencia Tributaria.',
              icon: 'Boxes',
              tag: 'Fiscalidad Prime',
              colSpan: 1
            },
            {
              id: 'f4',
              title: 'Gobierno Corporativo & Compliance Penal',
              description: 'Diseño e implantación de programas de prevención de delitos (Compliance) y asesoramiento a secretarías de consejos de administración.',
              icon: 'CheckCircle2',
              tag: 'Compliance 360°',
              colSpan: 2,
              statNumber: '99.2%',
              statLabel: 'De resoluciones y acuerdos extrajudiciales favorables para nuestros clientes'
            }
          ]
        },
        tabs: {
          enabled: true,
          kicker: 'Servicios Jurídicos Estructurados',
          title: 'Acompañamiento a medida según la etapa de tu empresa.',
          subtitle: 'Desde operaciones puntuales de gran escala hasta asesoría jurídica continuada.',
          tabs: [
            {
              id: 'tab_corporate',
              label: 'Operaciones de M&A y Rondas de Capital',
              icon: 'Scale',
              title: 'Seguridad absoluta en la compraventa de compañías',
              description: 'Lideramos la negociación de contratos de compraventa de acciones (SPA), acuerdos de inversión y financiación estructurada.',
              imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
              points: [
                'Redacción y negociación de Cartas de Intenciones (LOI) y Term Sheets',
                'Auditorías legales preventivas (Vendor Due Diligence)',
                'Cierre notarial y liquidación de garantías'
              ]
            },
            {
              id: 'tab_dispute',
              label: 'Resolución de Conflictos y Arbitraje',
              icon: 'ShieldCheck',
              title: 'Defensa firme en litigios comerciales de alto riesgo',
              description: 'Estrategias procesales agresivas y efectivas para salvaguardar el valor patrimonial de tu empresa ante incumplimientos contractuales.',
              imageUrl: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80',
              points: [
                'Acciones de responsabilidad de administradores y conflictos entre socios',
                'Medidas cautelares urgentes de embargo y protección de activos',
                'Negociación de acuerdos transaccionales confidenciales'
              ]
            }
          ]
        },
        stats: {
          enabled: true,
          kicker: 'Nuestras Métricas',
          title: 'Un historial consolidado de victorias jurídicas.',
          subtitle: 'Cifras auditadas de nuestra práctica legal durante los últimos 15 años.',
          items: [
            { id: 's1', value: '+450M€', label: 'Volumen Asesorado', description: 'En operaciones corporativas' },
            { id: 's2', value: '25 Años', label: 'Experiencia Media de Socios', description: 'Procedentes de firmas Tier 1' },
            { id: 's3', value: '94%', label: 'Litigios Resueltos con Éxito', description: 'En sede judicial y arbitral' },
            { id: 's4', value: '100%', label: 'Secreto Profesional Absoluto', description: 'Garantía deontológica estricta' }
          ]
        },
        testimonials: {
          enabled: true,
          title: 'La confianza de directores generales y consejeros.',
          subtitle: 'Opiniones de líderes corporativos que confían la defensa de sus empresas a Vanguard Legal.',
          items: [
            {
              id: 't1',
              name: 'Ignacio Larrea',
              role: 'Presidente del Consejo de Administración',
              company: 'Grupo Industrial Ibérico',
              quote: 'Vanguard Legal lideró la adquisición de nuestro competidor francés en una operación altamente compleja con tres jurisdicciones involucradas. Su agilidad, rigor técnico y capacidad de negociación fueron determinantes para cerrar el acuerdo con éxito.',
              avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
              rating: 5
            },
            {
              id: 't2',
              name: 'Helena Villalobos',
              role: 'Managing Director',
              company: 'Solaria Capital Partners',
              quote: 'En momentos de litigio crítico, tener al equipo de litigación de Vanguard Legal a tu lado te da una tranquilidad incalculable. Su estrategia procesal fue brillante desde el primer minuto.',
              avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
              rating: 5
            }
          ]
        },
        leadForm: {
          enabled: true,
          kicker: 'Consulta Jurídica Confidencial',
          title: 'Expón tu caso con total reserva profesional.',
          subtitle: 'Un socio del departamento correspondiente analizará la viabilidad y responderá en menos de 24 horas.',
          submitButtonText: 'Enviar Consulta Jurídica',
          successTitle: '¡Consulta Recibida Bajo Secreto Profesional!',
          successMessage: 'Un socio del bufete revisará los antecedentes de tu caso y se pondrá en contacto contigo para mantener una primera sesión de trabajo confidencial.',
          steps: [
            {
              id: 'step_1',
              stepNumber: 1,
              title: 'Datos del Solicitante',
              subtitle: 'Identificación corporativa o personal.',
              fields: [
                { id: 'lf_name', label: 'Nombre y Apellidos', type: 'text', placeholder: 'Ej. Dr. Roberto Mendoza', required: true },
                { id: 'lf_company', label: 'Empresa / Razón Social', type: 'text', placeholder: 'Nombre de la compañía', required: true },
                { id: 'lf_email', label: 'Correo Corporativo', type: 'email', placeholder: 'roberto.mendoza@empresa.com', required: true },
                { id: 'lf_phone', label: 'Teléfono Directo', type: 'text', placeholder: '+34 910 000 000', required: true }
              ]
            },
            {
              id: 'step_2',
              stepNumber: 2,
              title: 'Naturaleza del Asunto',
              subtitle: 'Área legal requerida y breve resumen de los hechos.',
              fields: [
                {
                  id: 'lf_area',
                  label: 'Área Jurídica de la Consulta',
                  type: 'select',
                  options: ['Fusiones y Adquisiciones / M&A', 'Litigio Mercantil o Conflicto Societario', 'Arbitraje Comercial Nacional o Internacional', 'Inspección Fiscal / Reorganización Tributaria', 'Compliance Penal & Gobierno Corporativo'],
                  required: true
                },
                {
                  id: 'lf_urgency',
                  label: 'Grado de Urgencia',
                  type: 'select',
                  options: ['Plazo procesal en curso (< 7 días)', 'Operación en negociación activa (< 30 días)', 'Planificación preventiva ordinaria'],
                  required: true
                },
                { id: 'lf_summary', label: 'Resumen sintético del asunto (protegido por secreto profesional)', type: 'textarea', placeholder: 'Indica brevemente el conflicto o la operación prevista...', required: true }
              ]
            }
          ]
        },
        map: {
          enabled: true,
          kicker: 'Sede Principal',
          title: 'Ubicados en el corazón financiero de Madrid.',
          subtitle: 'Salas de juntas confidenciales equipadas con sistemas de videoconferencia cifrada de alta seguridad.',
          address: 'Calle Serrano 45, Planta 6ª',
          city: '28001 Madrid • Despachos asociados en Barcelona, Londres y Lisboa',
          hours: 'Lunes a Jueves: 08:30 - 19:30 | Viernes: 08:30 - 15:00',
          phone: '+34 914 000 500',
          email: 'contacto@vanguardlegal.law',
          embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.123456789!2d-3.6872!3d40.4285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDI1JzQyLjYiTiAzwrA0MScxMy45Ilc!5e0!3m2!1ses!2ses!4v1650000000000!5m2!1ses!2ses',
          directionsUrl: 'https://maps.google.com'
        },
        faq: {
          enabled: true,
          title: 'Preguntas Frecuentes sobre Vanguard Legal',
          subtitle: 'Estructura de honorarios, plazos de respuesta y conflictos de interés.',
          items: [
            {
              id: 'lf_q1',
              question: '¿Cómo se verifica la ausencia de conflictos de interés antes de aceptar un caso?',
              answer: 'Antes de recibir información confidencial sensible, nuestro departamento de cumplimiento realiza un cotejo informático estricto para verificar que no asesoramos a partes con intereses contrapuestos en la misma operación o disputa.'
            },
            {
              id: 'lf_q2',
              question: '¿Cuál es la política de facturación y estructura de honorarios?',
              answer: 'Ofrecemos presupuestos cerrados por hitos procesales (cap fees), acuerdos de iguala mensual para asesoría corporativa recurrente o esquemas mixtos con prima de éxito (success fees) vinculada al resultado favorable de la operación o litigio.'
            },
            {
              id: 'lf_q3',
              question: '¿Trabajáis con empresas y fondos con sede fuera de España?',
              answer: 'Sí. Más del 50% de nuestros clientes corporativos son multinacionales con sede en Reino Unido, Estados Unidos, Alemania, Francia y Latinoamérica que realizan inversiones o mantienen litigios en España y la Unión Europea.'
            }
          ]
        },
        ctaFinal: {
          enabled: true,
          kicker: 'Protección Jurídica Integral',
          title: 'Asegura la posición de tu empresa hoy mismo.',
          subtitle: 'Solicita una reunión inicial con nuestros socios para evaluar tu caso con el máximo rigor.',
          primaryCta: { text: 'Agendar Sesión de Trabajo', link: '#contact' },
          secondaryCta: { text: 'Descargar Memoria Corporativa (PDF)', link: '#deck' },
          backgroundStyle: 'minimal'
        },
        footer: {
          copyright: '© 2026 Vanguard Legal Partners S.L.P. Ilustre Colegio de Abogados de Madrid.',
          legalLinks: [
            { label: 'Código Deontológico', href: '#ethics' },
            { label: 'Aviso Legal & Régimen Profesional', href: '#legal' },
            { label: 'Política de Privacidad', href: '#privacy' }
          ],
          socialLinks: [
            { platform: 'LinkedIn', url: 'https://linkedin.com' },
            { platform: 'Twitter / X', url: 'https://twitter.com' }
          ]
        }
      }
    }
  },

  // 20. CORE — Consultoría Estratégica, M&A & Transformación Empresarial
  {
    id: 'core-consulting',
    name: 'Core',
    tagline: 'Firma de consultoría de dirección estratégica especializada en fusiones y adquisiciones (M&A), optimización de operaciones y transformación digital para multinacionales',
    category: 'services',
    thumbnail: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    description: 'Azul marino corporativo #0A2540 y acento azul acero #0066CC, tipografía ejecutiva con carácter, marcas globales asesoradas, bento de casos de éxito y valor generado, itinerario de asesoramiento en fases, estadísticas auditadas y solicitud confidencial.',
    accentColor: '#0A2540',
    theme: 'light',
    defaultConfig: {
      templateId: 'core-consulting',
      name: 'Core Strategy Partners',
      slug: 'core-strategy',
      domain: 'corestrategy.partners',
      theme: 'light',
      accentColor: '#0A2540',
      fontFamily: 'Inter, -apple-system, sans-serif',
      borderRadius: 14,
      published: true,
      sectionOrder: [
        'navbar',
        'hero',
        'logos',
        'bentoFeatures',
        'productHighlight',
        'tabs',
        'timeline',
        'stats',
        'testimonials',
        'pricing',
        'faq',
        'ctaFinal',
        'footer'
      ],
      seo: {
        title: 'Core Strategy Partners — Consultoría Estratégica de Dirección & M&A',
        description: 'Asesoramiento de confianza para comités de dirección, fondos de capital privado y empresas del IBEX 35 en momentos críticos de crecimiento y transformación.',
        keywords: 'consultoria estrategica, mergers acquisitions, private equity advisory, transformacion digital ibex 35, valor empresarial'
      },
      sections: {
        navbar: {
          brandName: 'Core',
          logoText: 'CORE STRATEGY',
          ctaText: 'Consulta Confidencial',
          ctaLink: '#contact',
          links: [
            { label: 'Servicios', href: '#tabs' },
            { label: 'Impacto', href: '#features' },
            { label: 'Metodología', href: '#timeline' },
            { label: 'Casos de Éxito', href: '#stats' },
            { label: 'Contacto', href: '#contact' }
          ],
          glassBlur: true,
          sticky: true
        },
        hero: {
          enabled: true,
          badge: 'Asesores Estratégicos de Empresas Fortune 500 & Capital Privado',
          kicker: 'Liderazgo & Creación de Valor',
          title: 'Decisiones determinantes respaldadas por',
          highlightTitle: 'rigor analítico.',
          subtitle: 'Acompañamos a presidentes ejecutivos y consejos de administración en procesos de adquisiciones complejas, reestructuración operativa e integración tecnológica a escala.',
          primaryCta: { text: 'Agendar Consulta Estratégica', link: '#contact' },
          secondaryCta: { text: 'Descargar Informe de Tendencias 2026', link: '#report' },
          imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80',
          style: 'split'
        },
        logos: {
          enabled: true,
          title: 'CONFIADO POR FONDOS DE INVERSIÓN Y LÍDERES GLOBALES DE LA INDUSTRIA',
          items: [
            { id: 'cl1', name: 'Blackstone Group', tagline: 'Private Equity' },
            { id: 'cl2', name: 'Santander CIB', tagline: 'Banking & Advisory' },
            { id: 'cl3', name: 'Telefónica Tech', tagline: 'Digital Strategy' },
            { id: 'cl4', name: 'Ferrovial Infra', tagline: 'Infrastructure' },
            { id: 'cl5', name: 'Repsol Energy', tagline: 'Energy Transition' }
          ]
        },
        bentoFeatures: {
          enabled: true,
          kicker: 'Propuesta de Valor',
          title: 'Resultados medibles en el balance de situación.',
          subtitle: 'No entregamos diagnósticos teóricos de biblioteca; ejecutamos planes de acción directos junto al equipo directivo.',
          items: [
            {
              id: 'cf1',
              title: 'Due Diligence Comercial & Asesoramiento M&A',
              description: 'Evaluación exhaustiva de sinergias, posición competitiva en el mercado y planes de integración post-adquisición (PMI) en transacciones superiores a 50M€.',
              icon: 'TrendingUp',
              tag: 'M&A Advisory',
              colSpan: 2,
              statNumber: '4.8B €',
              statLabel: 'En transacciones corporativas asesoradas en los últimos 5 años'
            },
            {
              id: 'cf2',
              title: 'Optimización de EBITDA & Estructura de Costes',
              description: 'Rediseño de procesos críticos de cadena de suministro y reducción de gasto no operativo.',
              icon: 'Percent',
              tag: 'Operaciones',
              colSpan: 1
            },
            {
              id: 'cf3',
              title: 'Adopción de IA & Modernización Tecnológica',
              description: 'Modelos predictivos aplicados a la fijación dinámica de precios y automatización de procesos internos.',
              icon: 'Cpu',
              tag: 'Tech Transformation',
              colSpan: 1
            },
            {
              id: 'cf4',
              title: 'Estrategia de Entrada en Nuevos Mercados',
              description: 'Análisis regulatorio, planes de expansión internacional go-to-market y formación de alianzas estratégicas globales.',
              icon: 'Globe2',
              tag: 'Expansión Global',
              colSpan: 2,
              statNumber: '32 Países',
              statLabel: 'Mercados analizados e implementados para nuestros clientes'
            }
          ]
        },
        productHighlight: {
          enabled: true,
          kicker: 'Estudio de Caso Destacado',
          title: 'Transformación de un conglomerado industrial de 1,200M€.',
          subtitle: 'Cómo incrementamos el margen operativo un 380 bps en 18 meses manteniendo el 100% de la plantilla.',
          description: 'Alineamos el modelo operativo con una nueva división de servicios digitales recurrentes y desinvertimos en activos no estratégicos con múltiplos récord.',
          imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80',
          layout: 'image-right',
          ctaText: 'Ver Estudio de Caso Completo',
          ctaLink: '#contact',
          specs: [
            { label: 'Incremento de Valoración', value: '+42%', detail: 'Medido en múltiplos de salida' },
            { label: 'Ahorro Operativo Anual', value: '46M €', detail: 'Consolidadas en EBITDA recurrente' },
            { label: 'Tiempo de Ejecución', value: '18 Meses', detail: 'Con hitos trimestrales cumplidos' }
          ]
        },
        tabs: {
          enabled: true,
          kicker: 'Áreas de Práctica',
          title: 'Servicios de consultoría de alta dirección.',
          subtitle: 'Especialización sectorial profunda para responder a los desafíos más complejos.',
          tabs: [
            {
              id: 'tab_ma',
              label: 'Fusiones, Adquisiciones & Capital Privado',
              icon: 'Briefcase',
              title: 'Maximización del valor del capital antes, durante y después del deal',
              description: 'Apoyamos a fondos de inversión y directores de desarrollo corporativo en la identificación de targets, due diligence comercial e integración acelerada.',
              imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
              points: [
                'Valoración independiente de sinergias de ingresos y costes',
                'Plan de 100 días para la toma de control e integración',
                'Estrategias de salida y optimización del equity story'
              ]
            },
            {
              id: 'tab_ops',
              label: 'Rendimiento Operativo & Rediseño Organizativo',
              icon: 'Settings2',
              title: 'Eficiencia y agilidad organizativa para el nuevo ciclo económico',
              description: 'Rediseñamos la estructura jerárquica, los incentivos del equipo directivo y la cadena de suministro para ganar competitividad.',
              imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
              points: [
                'Revisión zero-based budgeting (presupuesto base cero)',
                'Automatización robótica de procesos y gobierno del dato',
                'Alineamiento del plan de incentivos a largo plazo (LTIP)'
              ]
            }
          ]
        },
        timeline: {
          enabled: true,
          kicker: 'El Método Core',
          title: 'De la formulación analítica al impacto real en cuenta.',
          subtitle: 'Una hoja de ruta clara dividida en cuatro etapas secuenciales.',
          milestones: [
            {
              id: 'm1',
              phase: 'Fase 01',
              dateOrQuarter: 'Semanas 1 a 4',
              title: 'Diagnóstico Cuantitativo & Benchmark de Mercado',
              description: 'Inmersión en los datos de la compañía, entrevistas con los principales líderes de división y análisis comparativo con competidores internacionales.',
              status: 'completed',
              points: ['Auditoría de márgenes unitarios', 'Mapeo de fugas de valor', 'Validación de hipótesis directivas']
            },
            {
              id: 'm2',
              phase: 'Fase 02',
              dateOrQuarter: 'Semanas 5 a 8',
              title: 'Diseño de Iniciativas Estratégicas & Business Case',
              description: 'Modelización financiera detallada de cada palanca de valor con priorización por impacto esperado y complejidad de implantación.',
              status: 'in_progress',
              points: ['Cuantificación de ROI por palanca', 'Asignación de responsables ejecutivos', 'Aprobación en Comité de Dirección']
            },
            {
              id: 'm3',
              phase: 'Fase 03',
              dateOrQuarter: 'Meses 3 a 12',
              title: 'Oficina de Transformación (PMO) & Ejecución',
              description: 'Despliegue operativo de las iniciativas con seguimiento semanal riguroso y resolución ágil de bloqueos organizativos.',
              status: 'upcoming',
              points: ['Tablero de control ejecutivo en tiempo real', 'Gestión del cambio y cultura', 'Captura progresiva de ahorros en P&L']
            }
          ]
        },
        stats: {
          enabled: true,
          kicker: 'Historial Auditado',
          title: 'Cifras contrastadas de nuestros proyectos de consultoría.',
          subtitle: 'Impacto medible en rentabilidad y valor para el accionista.',
          items: [
            { id: 'cs1', value: '4.8B €', label: 'Volumen de M&A Asesorado', description: 'En más de 60 transacciones cerradas' },
            { id: 'cs2', value: '+32%', label: 'Mejora Media de EBITDA', description: 'En programas de transformación a 24 meses' },
            { id: 'cs3', value: '92%', label: 'Tasa de Clientes Recurrentes', description: 'Fondos de capital y multinacionales líderes' },
            { id: 'cs4', value: '25+', label: 'Socios Seniors', description: 'Con experiencia previa en McKinsey, BCG y Bain' }
          ]
        },
        testimonials: {
          enabled: true,
          title: 'Lo que opinan los directores generales que confían en Core.',
          subtitle: 'Relaciones de confianza y confidencialidad mantenidas durante años.',
          items: [
            {
              id: 'ct1',
              name: 'Ignacio de la Serna',
              role: 'Managing Director en Iberia Private Equity',
              company: 'Fondo de Inversión',
              quote: 'El equipo de Core aportó un nivel de claridad analítica y pragmatismo que fue determinante para cerrar la adquisición de nuestro mayor activo industrial. Su equipo sénior estuvo presente en cada negociación clave.',
              avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
              rating: 5
            },
            {
              id: 'ct2',
              name: 'Beatriz Alarcón',
              role: 'CEO en Grupo Logístico Peninsular',
              company: 'Empresa IBEX Small Cap',
              quote: 'Reestructuramos toda la operativa de última milla con el acompañamiento de Core. Cumplieron con el 100% de los ahorros presupuestados en el calendario previsto sin desviar el foco del negocio diario.',
              avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
              rating: 5
            }
          ]
        },
        pricing: {
          enabled: true,
          title: 'Modelos de Colaboración & Honorarios',
          subtitle: 'Estructuras alineadas con la consecución de objetivos tangibles de negocio.',
          billingCycle: 'monthly',
          discountNote: 'Estructuras híbridas con honorarios fijos y comisiones por éxito (success fees) en M&A',
          plans: [
            {
              id: 'core_diagnostic',
              name: 'Strategic Health Check',
              tag: 'Diagnóstico Rápido',
              priceMonthly: '18,000€',
              priceAnnual: '18,000€',
              description: 'Auditoría integral de 4 semanas sobre márgenes, posición competitiva y oportunidades inmediatas de valor.',
              features: [
                'Análisis financiero de cuentas de resultados de los últimos 3 años',
                'Benchmark cuantitativo con los 5 principales rivales del sector',
                'Entrevistas con el comité de dirección y mandos intermedios',
                'Informe ejecutivo con 10 palancas de valor cuantificadas',
                'Presentación presencial en Consejo de Administración'
              ],
              ctaText: 'Solicitar Health Check',
              ctaLink: '#contact-healthcheck',
              highlighted: false
            },
            {
              id: 'core_transformation',
              name: 'Programa de Transformación Integral',
              tag: 'Mayor Impacto',
              priceMonthly: '45,000€',
              priceAnnual: '45,000€',
              description: 'Acompañamiento directivo continuo con equipo dedicado de socios y directores de proyecto en la sede del cliente.',
              features: [
                'Equipo sénior dedicado a tiempo completo in situ',
                'Oficina de Transformación (PMO) y cuadros de mando semanales',
                'Rediseño operativo y renegociación de contratos estratégicos',
                'Garantía de impacto en EBITDA ligada a honorarios variables',
                'Soporte directo ilimitado para el Presidente y Consejero Delegado'
              ],
              ctaText: 'Agendar Sesión con Socios',
              ctaLink: '#contact-transformation',
              highlighted: true
            }
          ]
        },
        faq: {
          enabled: true,
          title: 'Preguntas Frecuentes sobre Core',
          subtitle: 'Aspectos relativos a la confidencialidad, equipo y régimen de honorarios.',
          items: [
            {
              id: 'cfq_1',
              question: '¿Cómo garantizáis la estricta confidencialidad de la información?',
              answer: 'Firmamos acuerdos de confidencialidad reforzados (NDA) antes de cualquier intercambio de datos. Todos los análisis se realizan en entornos cifrados aislados y los socios firman compromisos de no competencia en el mismo sector.'
            },
            {
              id: 'cfq_2',
              question: '¿Quién compone el equipo que trabajará en nuestro proyecto?',
              answer: 'A diferencia de firmas tradicionales, en Core el proyecto es liderado de principio a fin por socios con más de 15 años de experiencia ejecutiva, sin delegar la responsabilidad en consultores junior.'
            },
            {
              id: 'cfq_3',
              question: '¿Trabajáis con esquemas de honorarios ligados a resultados (Success Fees)?',
              answer: 'Sí. En proyectos de M&A y programas de optimización de EBITDA estructuramos una parte significativa de nuestros honorarios ligada a la consecución efectiva de los objetivos pactados con el cliente.'
            }
          ]
        },
        ctaFinal: {
          enabled: true,
          kicker: 'Máxima Confidencialidad',
          title: 'Lideremos la próxima etapa de tu compañía.',
          subtitle: 'Solicita una reunión privada con uno de nuestros socios directores para explorar vías de colaboración.',
          primaryCta: { text: 'Solicitar Reunión Confidencial', link: '#contact' },
          secondaryCta: { text: 'Conocer a Nuestros Socios', link: '#team' },
          backgroundStyle: 'glow'
        },
        footer: {
          copyright: '© 2026 Core Strategy Partners S.L. Madrid • Barcelona • Londres • Zúrich.',
          legalLinks: [
            { label: 'Aviso Legal & Registro Mercantil', href: '#legal' },
            { label: 'Compromiso de Confidencialidad', href: '#confidentiality' },
            { label: 'Política de Privacidad', href: '#privacy' }
          ],
          socialLinks: [
            { platform: 'LinkedIn', url: 'https://linkedin.com' },
            { platform: 'Twitter / X', url: 'https://twitter.com' }
          ]
        }
      }
    }
  }
];
