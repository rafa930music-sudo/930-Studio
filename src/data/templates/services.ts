import { TemplateDefinition } from '../../types';

export const SERVICES_TEMPLATES: TemplateDefinition[] = [
  // 1. HAVEN REAL ESTATE — Inmobiliaria de Lujo
  {
    id: 'haven-realestate',
    name: 'Haven Luxury Real Estate',
    tagline: 'Inmobiliaria boutique especializada en villas de lujo, áticos con vistas panorámicas y fincas privadas singulares',
    category: 'services',
    thumbnail: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    description: 'Estética luminosa en blanco marfil y azul océano #0284C7, tipografía Playfair Display & Plus Jakarta Sans, carrusel de propiedades exclusivas, bento de servicios patrimoniales, mapa y formulario de visita privada.',
    accentColor: '#0284C7',
    theme: 'light',
    defaultConfig: {
      templateId: 'haven-realestate',
      name: 'Haven Luxury Real Estate',
      slug: 'haven-luxury',
      domain: 'havenestates.com',
      theme: 'light',
      accentColor: '#0284C7',
      fontFamily: "'Playfair Display', Georgia, serif",
      borderRadius: 16,
      published: true,
      sectionOrder: [
        'navbar',
        'hero',
        'logos',
        'bentoFeatures',
        'productHighlight',
        'gallery',
        'stats',
        'testimonials',
        'pricing',
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
          ctaLink: '#pricing',
          links: [
            { label: 'Propiedades', href: '#pricing' },
            { label: 'Servicios VIP', href: '#features' },
            { label: 'Mansión Insignia', href: '#product' },
            { label: 'Galería', href: '#gallery' },
            { label: 'Preguntas', href: '#faq' }
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
          primaryCta: { text: 'Explorar Propiedades Destacadas', link: '#pricing' },
          secondaryCta: { text: 'Valoración Gratuita de tu Inmueble →', link: '#features' },
          imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
          style: 'centered'
        },
        logos: {
          enabled: true,
          title: 'MIEMBROS DE LAS REDES INMOBILIARIAS INTERNACIONALES LÍDERES',
          items: [
            { id: 'l1', name: 'Luxury Portfolio Int.', tagline: 'Global Network' },
            { id: 'l2', name: 'Leading Real Estate', tagline: 'Companies of the World' },
            { id: 'l3', name: 'RICS Certified', tagline: 'Royal Institution' }
          ]
        },
        bentoFeatures: {
          enabled: true,
          kicker: 'Servicios de Alta Gama',
          title: 'Gestión integral del patrimonio inmobiliario.',
          subtitle: 'Acompañamos a compradores, vendedores e inversores con un servicio 360° totalmente confidencial.',
          items: [
            {
              id: 'f1',
              title: 'Cartera Off-Market de Propiedades Secretas',
              description: 'Acceso a fincas y residencias singulares no publicadas en portales comerciales por expreso deseo de confidencialidad de sus propietarios.',
              icon: 'Key',
              tag: 'Cartera Confidencial',
              colSpan: 2,
              statNumber: '40%+',
              statLabel: 'De nuestras transacciones se cierran fuera de mercado'
            },
            {
              id: 'f2',
              title: 'Asesoría Jurídica y Fiscal Internacional',
              description: 'Equipo propio de abogados especializados en Golden Visa, estructuración fiscal patrimonial y due diligence urbanística.',
              icon: 'Scale',
              tag: 'Seguridad Legal',
              colSpan: 1
            },
            {
              id: 'f3',
              title: 'Tours Virtuales 3D y Grabación con Drones',
              description: 'Recorridos inmersivos de ultra alta definición y planimetría arquitectónica detallada para inversores no residentes.',
              icon: 'Video',
              tag: 'Tours Inmersivos',
              colSpan: 1
            },
            {
              id: 'f4',
              title: 'Gestión Posventa y Concierge Residencial',
              description: 'Supervisión de reformas, interiorismo llave en mano, mantenimiento de piscinas/jardines y administración patrimonial.',
              icon: 'ShieldCheck',
              tag: 'Concierge VIP',
              colSpan: 2,
              statNumber: '100%',
              statLabel: 'Atención personalizada en español, inglés, francés y alemán'
            }
          ]
        },
        productHighlight: {
          enabled: true,
          badge: 'Propiedad Insignia',
          kicker: 'Villa de Autor en Marbella',
          title: 'Villa Mirador: Vistas Panorámicas al Mediterráneo.',
          subtitle: '950 m² construidos sobre parcela de 2.200 m² en primera línea de golf.',
          description: '6 dormitorios en suite, piscina infinity climatizada con cloración salina, bodega climatizada para 800 botellas, spa privado con sauna finlandesa y garaje subterráneo para 5 vehículos con cargadores de alta potencia.',
          imageUrl: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1400&q=80',
          specs: [
            { label: 'Precio', value: '4.850.000 € (Impuestos no incluidos)' },
            { label: 'Ubicación', value: 'La Zagaleta, Benahavís (Málaga)' },
            { label: 'Seguridad', value: 'Urbanización privada con control de acceso 24/7' }
          ]
        },
        gallery: {
          enabled: true,
          title: 'Residencias de Nuestra Colección',
          images: [
            { id: 'g1', url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80', caption: 'Salón diáfano con chimenea de mármol y ventanales correderos' },
            { id: 'g2', url: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80', caption: 'Piscina infinity con vistas panorámicas al atardecer' }
          ]
        },
        stats: {
          enabled: true,
          items: [
            { id: 's1', value: '350M€+', label: 'Volumen Transaccionado' },
            { id: 's2', value: '98%', label: 'Satisfacción de Clientes' },
            { id: 's3', value: '18 Días', label: 'Tiempo Medio de Cierre Off-Market' }
          ]
        },
        testimonials: {
          enabled: true,
          title: 'La opinión de nuestros clientes propietarios y compradores.',
          items: [
            {
              id: 't1',
              author: 'Christian Weber',
              name: 'Christian Weber',
              role: 'Inversor & Propietario de Villa en Mallorca',
              company: 'Weber Holdings Zurich',
              quote: 'Haven gestionó la compra de nuestra residencia en Mallorca con una discreción y rigor técnico impecables. Su conocimiento del mercado y asesoría legal nos ahorraron meses de gestiones.',
              avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
              rating: 5
            }
          ]
        },
        pricing: {
          enabled: true,
          title: 'Tipologías Residenciales Disponibles',
          billingCycle: 'monthly',
          plans: [
            {
              id: 'p1',
              name: 'Áticos de Lujo & Penthouses',
              priceMonthly: 'Desde 1.200.000€',
              priceAnnual: 'Vistas urbanas o al mar',
              description: 'Residencias en plantas altas con terrazas privadas superiores a 80m² y piscina privada.',
              features: ['Ubicaciones prime en Madrid y Barcelona', 'Seguridad y conserjería 24 horas', 'Plazas de garaje dobles incluidas', 'Acabados en maderas nobles y mármol'],
              highlighted: false,
              ctaText: 'Ver Áticos Disponibles'
            },
            {
              id: 'p2',
              name: 'Villas & Mansiones Singulares',
              priceMonthly: 'Desde 2.500.000€',
              priceAnnual: 'Parcelas independientes privadas',
              description: 'Villas de autor con jardín maduro, piscina infinity y máxima privacidad en entornos exclusivos.',
              features: ['Parcelas superiores a 1.500 m²', 'Zonas de spa, gimnasio y bodega', 'Eficiencia energética Passivhaus A+', 'Servicio de Concierge durante 1 año'],
              highlighted: true,
              ctaText: 'Solicitar Dossier Confidencial'
            }
          ]
        },
        faq: {
          enabled: true,
          title: 'Preguntas Frecuentes sobre Compra e Inversión',
          items: [
            {
              id: 'q1',
              question: '¿Qué es el catálogo Off-Market y cómo puedo acceder a él?',
              answer: 'Es una selección exclusiva de propiedades que no se publicitan abiertamente en internet por petición de sus dueños. Para acceder, realizamos una breve reunión de cualificación confidencial.'
            },
            {
              id: 'q2',
              question: '¿Qué gastos e impuestos adicionales conlleva la compra de una propiedad en España?',
              answer: 'En viviendas de segunda mano aplica el Impuesto de Transmisiones Patrimoniales (ITP entre 6% y 10% según comunidad autónoma), más gastos de notaría, registro de la propiedad y asesoría legal (aprox. 1.5% adicional).'
            },
            {
              id: 'q3',
              question: '¿Ayudan a compradores extranjeros en la obtención del NIE y cuentas bancarias?',
              answer: 'Sí. Nuestro departamento jurídico gestiona íntegramente la solicitud de NIE para no residentes, apertura de cuentas en banca privada española y tramitación de la Golden Visa si aplica.'
            },
            {
              id: 'q4',
              question: '¿Cómo se solicita una visita privada a una villa de lujo?',
              answer: 'Puedes rellenar el formulario de contacto o llamarnos directamente. Coordinamos la visita con transporte privado o recogida en el aeropuerto si procedes de fuera.'
            },
            {
              id: 'q5',
              question: '¿Realizan valoraciones oficiales de fincas y mansiones?',
              answer: 'Contamos con peritos tasadores homologados RICS y arquitectos especialistas que emiten informes de valoración patrimonial rigurosos basados en transacciones reales del mercado prime.'
            },
            {
              id: 'q6',
              question: '¿Qué servicios posventa ofrecen una vez firmada la escritura?',
              answer: 'Nos encargamos de los cambios de titularidad en suministros, gestión de contratos de mantenimiento con empresas certificadas y enlace con diseñadores de interiores de primer nivel.'
            }
          ]
        },
        ctaFinal: {
          enabled: true,
          title: 'Encuentra la residencia que define tu estilo de vida.',
          subtitle: 'Solicita una consulta privada y confidencial con nuestros asesores patrimoniales.',
          primaryCta: { text: 'Contactar con Haven Real Estate', link: '#pricing' }
        },
        footer: {
          copyright: '© 2026 Haven Luxury Real Estate S.L. Todos los derechos reservados.',
          legalLinks: [
            { label: 'Aviso Legal', href: '#legal' },
            { label: 'Prevención Blanqueo de Capitales', href: '#pbc' },
            { label: 'Privacidad', href: '#privacy' }
          ],
          socialLinks: [
            { platform: 'Instagram', url: 'https://instagram.com' },
            { platform: 'LinkedIn', url: 'https://linkedin.com' }
          ]
        }
      }
    }
  },

  // 2. VANGUARD & PARTNERS — Abogados & Asesoría Corporativa M&A
  {
    id: 'lex-counsel',
    name: 'Vanguard & Partners',
    tagline: 'Despacho de abogados de élite especializado en fusiones y adquisiciones (M&A), derecho mercantil, fiscalidad y litigios complejos',
    category: 'services',
    thumbnail: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80',
    description: 'Estética en azul medianoche #0F172A y oro champán #D4AF37, tipografía Cinzel & Plus Jakarta Sans, áreas de práctica corporativa, casos de éxito en transacciones millonarias y consulta confidencial.',
    accentColor: '#D4AF37',
    theme: 'dark',
    defaultConfig: {
      templateId: 'lex-counsel',
      name: 'Vanguard & Partners Abogados',
      slug: 'vanguard-law',
      domain: 'vanguardlaw.es',
      theme: 'dark',
      accentColor: '#D4AF37',
      fontFamily: "'Cinzel', Georgia, serif",
      borderRadius: 14,
      published: true,
      sectionOrder: [
        'navbar',
        'hero',
        'logos',
        'bentoFeatures',
        'productHighlight',
        'gallery',
        'stats',
        'testimonials',
        'pricing',
        'faq',
        'ctaFinal',
        'footer'
      ],
      seo: {
        title: 'Vanguard & Partners — Abogados de Empresa, M&A y Litigios Complejos',
        description: 'Asesoramiento jurídico estratégico para multinacionales, fondos de capital riesgo y family offices.',
        keywords: 'abogados m&a, fusiones y adquisiciones, derecho mercantil, litigacion civil, fiscalidad corporativa'
      },
      sections: {
        navbar: {
          brandName: 'Vanguard',
          logoText: 'VANGUARD & PARTNERS',
          ctaText: 'Consulta Jurídica Confidencial',
          ctaLink: '#pricing',
          links: [
            { label: 'Áreas de Práctica', href: '#features' },
            { label: 'Transacciones M&A', href: '#product' },
            { label: 'Equipo & Socios', href: '#gallery' },
            { label: 'Honorarios', href: '#pricing' }
          ],
          glassBlur: true,
          sticky: true
        },
        hero: {
          enabled: true,
          badge: 'Reconocidos por Chambers and Partners & The Legal 500 (Tier 1)',
          kicker: 'Estrategia Jurídica & Defensa de Alto Nivel',
          title: 'Defensa implacable y rigor jurídico',
          highlightTitle: 'en cada transacción crítica.',
          subtitle: 'Acompañamos a corporaciones, consejos de administración y fondos de inversión en operaciones societarias complejas, reestructuraciones y resolución de conflictos de alto impacto.',
          primaryCta: { text: 'Agendar Reunión Confidencial', link: '#pricing' },
          secondaryCta: { text: 'Ver Casos y Áreas de Práctica →', link: '#features' },
          imageUrl: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1600&q=80',
          style: 'centered'
        },
        logos: {
          enabled: true,
          title: 'RANKINGS JURÍDICOS Y RECONOCIMIENTOS INTERNACIONALES',
          items: [
            { id: 'l1', name: 'Chambers Global 2026', tagline: 'Band 1 Corporate/M&A' },
            { id: 'l2', name: 'The Legal 500', tagline: 'Top Tier Firm' },
            { id: 'l3', name: 'Best Lawyers', tagline: 'Lawyer of the Year 2026' }
          ]
        },
        bentoFeatures: {
          enabled: true,
          kicker: 'Áreas de Práctica Jurídica',
          title: 'Soluciones jurídicas a medida para retos societarios de máxima exigencia.',
          subtitle: 'Combinamos una profunda visión de negocio con una técnica procesal impecable.',
          items: [
            {
              id: 'f1',
              title: 'Fusiones, Adquisiciones y Private Equity',
              description: 'Estructuración y cierre de transacciones de compraventa de empresas, due diligence integral, pactos de socios y rondas de financiación.',
              icon: 'Briefcase',
              tag: 'M&A Estratégico',
              colSpan: 2,
              statNumber: '1.2B€',
              statLabel: 'En transacciones asesoradas en el último ejercicio'
            },
            {
              id: 'f2',
              title: 'Litigación Compleja y Arbitraje Internacional',
              description: 'Representación en disputas contractuales multimillonarias ante tribunales mercantiles y cortes de arbitraje de París, Londres y Madrid.',
              icon: 'Scale',
              tag: 'Litigios & Arbitraje',
              colSpan: 1
            },
            {
              id: 'f3',
              title: 'Fiscalidad Corporativa y Reestructuraciones',
              description: 'Planificación fiscal estratégica de grupos multinacionales, precios de transferencia y defensa ante inspecciones tributarias.',
              icon: 'TrendingUp',
              tag: 'Fiscalidad Prime',
              colSpan: 1
            },
            {
              id: 'f4',
              title: 'Gobierno Corporativo y Compliance Penal',
              description: 'Asesoramiento directo a consejos de administración, prevención de riesgos penales y protocolos anticorrupción.',
              icon: 'ShieldCheck',
              tag: 'Compliance Penal',
              colSpan: 2,
              statNumber: '100%',
              statLabel: 'De confidencialidad garantizada bajo estricto secreto profesional'
            }
          ]
        },
        productHighlight: {
          enabled: true,
          badge: 'Transacción Destacada',
          kicker: 'Operación Cross-Border',
          title: 'Adquisición de Grupo Tecnológico Europeo por 240M€.',
          subtitle: 'Due diligence multidisciplinar, negociación de SPAs y autorización regulatoria de competencia.',
          description: 'Vanguard & Partners lideró el asesoramiento integral a un consorcio internacional de capital riesgo en la compra de una compañía líder de ciberseguridad industrial, coordinando equipos legales en 4 jurisdicciones europeas de forma simultánea.',
          imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80',
          specs: [
            { label: 'Volumen', value: '240.000.000 €' },
            { label: 'Jurisdicciones', value: 'España, Alemania, Francia y Reino Unido' },
            { label: 'Resultado', value: 'Cierre exitoso sin contingencias regulatorias' }
          ]
        },
        gallery: {
          enabled: true,
          title: 'Sede y Despachos de la Firma',
          images: [
            { id: 'g1', url: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80', caption: 'Biblioteca jurídica y sala de juntas de socios' },
            { id: 'g2', url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80', caption: 'Sede central en el distrito financiero' }
          ]
        },
        stats: {
          enabled: true,
          items: [
            { id: 's1', value: '1.2B€+', label: 'Transaccionado en M&A' },
            { id: 's2', value: '94%', label: 'Tasa de Éxito en Litigación' },
            { id: 's3', value: '25 Años', label: 'De Trayectoria Profesional' }
          ]
        },
        testimonials: {
          enabled: true,
          title: 'La valoración de directores generales y consejeros.',
          items: [
            {
              id: 't1',
              author: 'Rodrigo Mendoza',
              name: 'Rodrigo Mendoza',
              role: 'Managing Director en Iberia Capital Partners',
              company: 'Iberia Capital',
              quote: 'Vanguard & Partners no solo ofrece un rigor técnico impecable, sino una visión estratégica comercial indispensable para desbloquear negociaciones complejas de compraventa.',
              avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
              rating: 5
            }
          ]
        },
        pricing: {
          enabled: true,
          title: 'Modelos de Contratación de Servicios Jurídicos',
          billingCycle: 'monthly',
          plans: [
            {
              id: 'p1',
              name: 'Iguala Jurídica Corporativa',
              priceMonthly: '2.500€/mes',
              priceAnnual: 'Asesoría continua de empresa',
              description: 'Asesoramiento mercantil recurrente, secretaría de consejo de administración y revisión contractual continua.',
              features: ['Hasta 25 horas mensuales de asesoría legal', 'Acceso directo a socios sénior del despacho', 'Revisión y redacción de contratos mercantiles', 'Auditoría anual de compliance societario'],
              highlighted: false,
              ctaText: 'Solicitar Propuesta de Iguala'
            },
            {
              id: 'p2',
              name: 'Asesoramiento en Transacción M&A',
              priceMonthly: 'A Presupuesto',
              priceAnnual: 'Estructura mixta fixed + success fee',
              description: 'Acompañamiento integral en operaciones de compraventa de empresas, due diligence y negociación de SPAs.',
              features: ['Due diligence jurídica, fiscal y laboral completa', 'Redacción y negociación del contrato de compraventa (SPA)', 'Pacto de socios y acuerdos de no competencia', 'Gestión del cierre notarial y desembolsos'],
              highlighted: true,
              ctaText: 'Reunión de Planteamiento'
            }
          ]
        },
        faq: {
          enabled: true,
          title: 'Preguntas Frecuentes sobre el Servicio Jurídico',
          items: [
            {
              id: 'q1',
              question: '¿Cómo garantizan la confidencialidad de la información societaria?',
              answer: 'Firmamos un acuerdo de confidencialidad (NDA) vinculante con penalización antes de recibir cualquier documento y utilizamos cuartos de datos virtuales (VDR) con cifrado bancario de grado militar.'
            },
            {
              id: 'q2',
              question: '¿Qué experiencia tienen en litigios internacionales y arbitrajes?',
              answer: 'Nuestros socios han defendido con éxito más de 120 arbitrajes ante la Corte de Arbitraje de la CCI de París y la Corte Civil y Mercantil de Madrid con un 94% de laudos favorables.'
            },
            {
              id: 'q3',
              question: '¿Cuál es el tiempo medio requerido para completar una due diligence legal?',
              answer: 'Una auditoría legal completa estándar para una pyme o mediana empresa suele completarse en un plazo de entre 2 y 3 semanas, emitiendo un informe ejecutivo de red flags.'
            },
            {
              id: 'q4',
              question: '¿Trabajan con modelos de honorarios a éxito (Success Fee)?',
              answer: 'En operaciones corporativas de fusiones y adquisiciones combinamos un componente fijo por horas de due diligence con una comisión de éxito ligada al cierre efectivo de la transacción.'
            },
            {
              id: 'q5',
              question: '¿Tienen capacidad de actuación en operaciones fuera de España?',
              answer: 'Formamos parte de una red internacional de firmas legales líderes que nos permite coordinar transacciones en más de 45 países con un único interlocutor en nuestro despacho.'
            },
            {
              id: 'q6',
              question: '¿Cómo se solicita una primera reunión con un socio de la firma?',
              answer: 'A través de nuestro formulario confidencial o contacto telefónico. Asignamos al socio responsable del área correspondiente en menos de 4 horas laborables.'
            }
          ]
        },
        ctaFinal: {
          enabled: true,
          title: 'La seguridad jurídica que tu empresa necesita.',
          subtitle: 'Programa una sesión de trabajo confidencial con nuestros socios especialistas.',
          primaryCta: { text: 'Agendar Consulta Confidencial', link: '#pricing' }
        },
        footer: {
          copyright: '© 2026 Vanguard & Partners Abogados S.L.P. Todos los derechos reservados.',
          legalLinks: [
            { label: 'Normativa Deontológica', href: '#normativa' },
            { label: 'Aviso Legal', href: '#legal' },
            { label: 'Privacidad', href: '#privacy' }
          ],
          socialLinks: [
            { platform: 'LinkedIn', url: 'https://linkedin.com' }
          ]
        }
      }
    }
  },

  // 3. AXIS ARCHITECTS — Arquitectura Sostenible & Proyectos Singulares
  {
    id: 'axis-architects',
    name: 'Axis Architecture Studio',
    tagline: 'Estudio de arquitectura bioclimática, diseño de viviendas Passivhaus y proyectos singulares de vanguardia',
    category: 'services',
    thumbnail: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    description: 'Estética en gris hormigón visto y acento terracota #E2725B, tipografía Syne & Plus Jakarta Sans, renders 3D hiperrealistas, memoria técnica de materiales ecológicos y planos constructivos.',
    accentColor: '#E2725B',
    theme: 'dark',
    defaultConfig: {
      templateId: 'axis-architects',
      name: 'Axis Architecture Studio',
      slug: 'axis-architects',
      domain: 'axisstudio.es',
      theme: 'dark',
      accentColor: '#E2725B',
      fontFamily: "'Syne', sans-serif",
      borderRadius: 16,
      published: true,
      sectionOrder: [
        'navbar',
        'hero',
        'logos',
        'bentoFeatures',
        'productHighlight',
        'gallery',
        'stats',
        'testimonials',
        'pricing',
        'faq',
        'ctaFinal',
        'footer'
      ],
      seo: {
        title: 'Axis Architecture — Arquitectura Bioclimática & Casas Passivhaus',
        description: 'Diseño arquitectónico contemporáneo con máxima eficiencia energética, materiales nobles y respeto por el paisaje.',
        keywords: 'estudio arquitectura, casas passivhaus, arquitectura bioclimatica, diseño viviendas unifamiliares, rehabilitacion arquitectonica'
      },
      sections: {
        navbar: {
          brandName: 'Axis Studio',
          logoText: 'AXIS // ARCHITECTURE',
          ctaText: 'Presentar Proyecto',
          ctaLink: '#pricing',
          links: [
            { label: 'Filosofía', href: '#features' },
            { label: 'Casa Mirador', href: '#product' },
            { label: 'Proyectos', href: '#gallery' },
            { label: 'Fases', href: '#pricing' }
          ],
          glassBlur: true,
          sticky: true
        },
        hero: {
          enabled: true,
          badge: 'Estudio Certificado Passivhaus Designer • Ganadores Premios FAD 2025',
          kicker: 'Arquitectura Bioclimática & Belleza Sensorial',
          title: 'Espacios que dialogan con la luz,',
          highlightTitle: 'la materia y el paisaje.',
          subtitle: 'Diseñamos residencias y espacios singulares donde la pureza de líneas y la sostenibilidad ambiental se funden para crear hogares confortables y con consumo energético casi nulo.',
          primaryCta: { text: 'Descubrir Proyectos Singulares', link: '#gallery' },
          secondaryCta: { text: 'Agendar Consulta con el Arquitecto →', link: '#pricing' },
          imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
          style: 'centered'
        },
        logos: {
          enabled: true,
          title: 'CERTIFICACIONES Y PREMIOS DE ARQUITECTURA',
          items: [
            { id: 'l1', name: 'Passivhaus Institute', tagline: 'Certified Designer' },
            { id: 'l2', name: 'Premios FAD 2025', tagline: 'Arquitectura Residencial' },
            { id: 'l3', name: 'BREEAM Excellent', tagline: 'Sustainable Buildings' }
          ]
        },
        bentoFeatures: {
          enabled: true,
          kicker: 'Principios Constructivos',
          title: 'Arquitectura pensada desde el lugar y la orientación solar.',
          subtitle: 'Optimizamos la ventilación cruzada natural y el aislamiento térmico continuo.',
          items: [
            {
              id: 'f1',
              title: 'Estándar Passivhaus de Consumo Casi Nulo',
              description: 'Ahorro de hasta el 90% en la factura de calefacción y refrigeración gracias a triple acristalamiento, estanqueidad al aire y recuperadores de calor.',
              icon: 'Zap',
              tag: '90% Ahorro Energético',
              colSpan: 2,
              statNumber: '90%',
              statLabel: 'De reducción de demanda energética frente a construcción convencional'
            },
            {
              id: 'f2',
              title: 'Materiales Nobles: Madera, Piedra y Cal',
              description: 'Seleccionamos materiales de bajo impacto ecológico que respiran de forma natural y envejecen con una pátina hermosa.',
              icon: 'Layers',
              tag: 'Materiales Vivos',
              colSpan: 1
            },
            {
              id: 'f3',
              title: 'Modelado BIM 3D y Renders Hiperrealistas',
              description: 'Visualización precisa de cada rincón, textura e iluminación solar en cada estación del año antes de colocar el primer ladrillo.',
              icon: 'Box',
              tag: 'BIM 3D',
              colSpan: 1
            },
            {
              id: 'f4',
              title: 'Dirección de Obra Exhaustiva con Control de Costes',
              description: 'Supervisión semanal a pie de obra con mediciones milimétricas para garantizar que el proyecto se ejecute en el plazo y presupuesto acordado.',
              icon: 'CheckCircle',
              tag: 'Cero Desviaciones',
              colSpan: 2,
              statNumber: '0%',
              statLabel: 'Desviación media en presupuestos cerrados de construcción'
            }
          ]
        },
        productHighlight: {
          enabled: true,
          badge: 'Proyecto Galardonado',
          kicker: 'Residencia en la Costa Brava',
          title: 'Casa Pedra: Integrada en el Acantilado.',
          subtitle: 'Vivienda unifamiliar Passivhaus de 420 m² con muros de piedra seca local.',
          description: 'Estructurada en tres volúmenes escalonados que siguen la pendiente natural del terreno, abriendo todas las estancias principales al horizonte marino y protegiéndose del viento de tramuntana mediante patios vegetales interiores.',
          imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=80',
          specs: [
            { label: 'Superficie', value: '420 m² construidos sobre parcela de 1.800 m²' },
            { label: 'Certificación', value: 'Passivhaus Plus (Genera más energía de la que consume)' },
            { label: 'Premio', value: 'Primer Premio de Arquitectura y Sostenibilidad COAC 2025' }
          ]
        },
        gallery: {
          enabled: true,
          title: 'Portfolio de Obras Seleccionadas',
          images: [
            { id: 'g1', url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80', caption: 'Pórtico de hormigón visto y carpintería de madera de roble' },
            { id: 'g2', url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80', caption: 'Patio interior con piscina de piedra caliza y olivo centenario' }
          ]
        },
        stats: {
          enabled: true,
          items: [
            { id: 's1', value: '45+', label: 'Proyectos Passivhaus Construidos' },
            { id: 's2', value: '100%', label: 'Edificios de Consumo Nulo' },
            { id: 's3', value: '12', label: 'Premios de Arquitectura' }
          ]
        },
        testimonials: {
          enabled: true,
          title: 'La experiencia de nuestros clientes al vivir sus hogares.',
          items: [
            {
              id: 't1',
              author: 'Marc Rovira',
              name: 'Marc Rovira',
              role: 'Propietario de Casa Pedra en Begur',
              company: 'Cliente Axis',
              quote: 'Vivir en una casa diseñada por Axis ha cambiado por completo nuestro día a día. La luz natural, el silencio y la temperatura constante sin corrientes de aire hacen que sea un absoluto placer llegar a casa.',
              avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
              rating: 5
            }
          ]
        },
        pricing: {
          enabled: true,
          title: 'Fases del Proyecto Arquitectónico',
          billingCycle: 'monthly',
          plans: [
            {
              id: 'p1',
              name: 'Estudio Previo & Viabilidad Urbanística',
              priceMonthly: '1.800€',
              priceAnnual: 'Deducible del proyecto final',
              description: 'Análisis topográfico, normativa urbanística de la parcela, anteproyecto conceptual y estimación económica.',
              features: ['Visita técnica a la parcela y estudio solar', 'Comprobación de ordenanzas municipales', 'Primeros bocetos de distribución en 3D', 'Estimación de costes totales de construcción'],
              highlighted: false,
              ctaText: 'Solicitar Estudio Previo'
            },
            {
              id: 'p2',
              name: 'Proyecto Integral Llave en Mano',
              priceMonthly: 'A Presupuesto',
              priceAnnual: 'Honorarios según baremo COAM/COAC',
              description: 'Desde el diseño inicial y tramitación de licencias hasta la dirección de obra y entrega de llaves.',
              features: ['Proyecto Básico y de Ejecución visado', 'Cálculo estructural e ingeniería de instalaciones', 'Gestión completa de licencias municipales', 'Dirección facultativa semanal a pie de obra'],
              highlighted: true,
              ctaText: 'Presentar mi Proyecto'
            }
          ]
        },
        faq: {
          enabled: true,
          title: 'Preguntas Frecuentes sobre el Proceso',
          items: [
            {
              id: 'q1',
              question: '¿Qué es una casa Passivhaus y cuánto se ahorra en energía?',
              answer: 'Es un estándar de construcción que minimiza el uso de calefacción y refrigeración convencional mediante un aislamiento térmico continuo, hermeticidad y ventilación mecánica con recuperación de calor, logrando un ahorro de hasta el 90% en la factura eléctrica.'
            },
            {
              id: 'q2',
              question: '¿Cuánto tiempo dura el proceso completo desde el diseño hasta la entrega de llaves?',
              answer: 'El diseño y proyecto ejecutivo suele llevar de 3 a 5 meses; la tramitación de licencias municipales entre 3 y 8 meses (según ayuntamiento); y la fase de construcción aproximadamente entre 10 y 14 meses.'
            },
            {
              id: 'q3',
              question: '¿Cómo se controla que no haya sobrecostes durante la obra?',
              answer: 'Elaboramos un pliego de condiciones y mediciones exhaustivas para licitar la obra entre varias constructoras de confianza con precio cerrado y penalizaciones por retraso.'
            },
            {
              id: 'q4',
              question: '¿Nos ayudan a elegir la parcela adecuada antes de comprarla?',
              answer: 'Sí. Acompañamos a nuestros clientes a visitar terrenos para analizar orientación solar, desniveles topográficos, accesos y limitaciones urbanísticas antes de formalizar la compra.'
            },
            {
              id: 'q5',
              question: '¿Diseñan también el interiorismo y paisajismo?',
              answer: 'Entendemos la arquitectura como un todo integrado. Diseñamos el mobiliario a medida, iluminación arquitectónica y el paisajismo exterior con vegetación autóctona de bajo consumo hídrico.'
            },
            {
              id: 'q6',
              question: '¿En qué zonas geográficas desarrollan proyectos?',
              answer: 'Tenemos sedes en Madrid y Barcelona y desarrollamos proyectos residenciales en toda la península ibérica, Islas Baleares y sur de Francia.'
            }
          ]
        },
        ctaFinal: {
          enabled: true,
          title: 'Construyamos el hogar donde quieres vivir.',
          subtitle: 'Cuéntanos tu idea de proyecto y te presentaremos un estudio inicial sin compromiso.',
          primaryCta: { text: 'Agendar Consulta de Proyecto', link: '#pricing' }
        },
        footer: {
          copyright: '© 2026 Axis Architecture Studio S.L.P. Colegio Oficial de Arquitectos.',
          legalLinks: [
            { label: 'Colegiación Profesional', href: '#colegio' },
            { label: 'Aviso Legal', href: '#legal' },
            { label: 'Privacidad', href: '#privacy' }
          ],
          socialLinks: [
            { platform: 'Instagram', url: 'https://instagram.com' },
            { platform: 'Pinterest', url: 'https://pinterest.com' }
          ]
        }
      }
    }
  },

  // 4. APEX ADVISORS — Consultoría Estratégica & Finanzas Cuantitativas
  {
    id: 'apex-advisors',
    name: 'Apex Strategic Advisory',
    tagline: 'Consultoría estratégica de negocio, optimización financiera cuantitativa y escalado operativo para scale-ups y multinacionales',
    category: 'services',
    thumbnail: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    description: 'Estética corporativa sobria en azul marino #1E3A8A y blanco puro, tipografía Plus Jakarta Sans, dashboards de métricas financieras, marcos de consultoría cuantitativa y calculadora de ROI.',
    accentColor: '#1E3A8A',
    theme: 'light',
    defaultConfig: {
      templateId: 'apex-advisors',
      name: 'Apex Strategic Advisory',
      slug: 'apex-advisory',
      domain: 'apexadvisors.com',
      theme: 'light',
      accentColor: '#1E3A8A',
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      borderRadius: 14,
      published: true,
      sectionOrder: [
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
        title: 'Apex Strategic Advisory — Consultoría de Negocio & Finanzas Cuantitativas',
        description: 'Optimizamos márgenes operativos, estructuración de capital y modelos de crecimiento para empresas líderes.',
        keywords: 'consultoria estrategica, finanzas cuantitativas, optimizacion de margenes, reestructuracion operativa, valoracion de empresas'
      },
      sections: {
        navbar: {
          brandName: 'Apex Advisory',
          logoText: 'APEX STRATEGIC ADVISORY',
          ctaText: 'Auditoría Estratégica Inicial',
          ctaLink: '#pricing',
          links: [
            { label: 'Servicios', href: '#features' },
            { label: 'Metodología', href: '#product' },
            { label: 'Resultados', href: '#stats' },
            { label: 'Programas', href: '#pricing' }
          ],
          glassBlur: true,
          sticky: true
        },
        hero: {
          enabled: true,
          badge: 'Ex-Socios de McKinsey, BCG y Goldman Sachs • Más de 80 Proyectos Completados',
          kicker: 'Consultoría Estratégica & Métricas de Crecimiento',
          title: 'Decisiones estratégicas basadas en datos,',
          highlightTitle: 'no en intuiciones.',
          subtitle: 'Ayudamos a comités de dirección a desbloquear palancas de crecimiento rentable, optimizar estructuras de costes y maximizar el valor de la compañía ante rondas de inversión o ventas.',
          primaryCta: { text: 'Solicitar Diagnóstico Estratégico', link: '#pricing' },
          secondaryCta: { text: 'Conoce Nuestros Casos de Estudio →', link: '#features' },
          imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80',
          style: 'centered'
        },
        logos: {
          enabled: true,
          title: 'COMPAÑÍAS QUE HAN CONFIADO EN NUESTRO ASESORAMIENTO',
          items: [
            { id: 'l1', name: 'Banco Santander', tagline: 'Estrategia Digital' },
            { id: 'l2', name: 'Telefonica Open Future', tagline: 'Scale-up Scaling' },
            { id: 'l3', name: 'Inditex Supplier Guild', tagline: 'Eficiencia de Cadena' }
          ]
        },
        bentoFeatures: {
          enabled: true,
          kicker: 'Capacidades Estratégicas',
          title: 'Impacto medible en la cuenta de resultados en menos de 90 días.',
          subtitle: 'Sin informes teóricos que acumulan polvo: entregamos planes de acción ejecutables con métricas claras.',
          items: [
            {
              id: 'f1',
              title: 'Modelado Financiero y Planificación Cuantitativa',
              description: 'Modelos predictivos de tesorería, análisis de sensibilidad de precios y optimización del coste de adquisición de clientes (CAC / LTV).',
              icon: 'TrendingUp',
              tag: 'Finanzas Cuantitativas',
              colSpan: 2,
              statNumber: '3.4x',
              statLabel: 'Retorno medio sobre la inversión de nuestros proyectos de consultoría'
            },
            {
              id: 'f2',
              title: 'Reestructuración y Eficiencia Operativa',
              description: 'Eliminación de cuellos de botella en procesos de cadena de suministro y automatización de tareas administrativas.',
              icon: 'Sliders',
              tag: 'Eficiencia Operativa',
              colSpan: 1
            },
            {
              id: 'f3',
              title: 'Estrategia de Precios (Pricing Power)',
              description: 'Rediseño de empaquetado de productos y tarifas para capturar el valor real sin perder volumen de clientes.',
              icon: 'DollarSign',
              tag: 'Pricing & Monetización',
              colSpan: 1
            },
            {
              id: 'f4',
              title: 'Preparación para Rondas de Inversión y Salida (M&A)',
              description: 'Construcción del Equity Story, normalización del EBITDA y asesoramiento táctico en la negociación con fondos.',
              icon: 'CheckCircle2',
              tag: 'Exit Readiness',
              colSpan: 2,
              statNumber: '+38%',
              statLabel: 'De incremento medio en valoración de múltiplos tras nuestra intervención'
            }
          ]
        },
        productHighlight: {
          enabled: true,
          badge: 'Marco Metodológico',
          kicker: 'Metodología Apex Quantum Flow',
          title: 'El Framework de los 90 Días de Transformación.',
          subtitle: 'Diagnóstico rápido en 2 semanas, diseño táctico en 4 y ejecución guiada en 6.',
          description: 'Identificamos las 3 palancas de mayor retorno financiero de tu negocio y desplegamos un equipo sénior sobre el terreno para implementar los cambios operativos junto a tus directores de departamento.',
          imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=80',
          specs: [
            { label: 'Semanas 1-2', value: 'Auditoría financiera profunda y mapa de ineficiencias' },
            { label: 'Semanas 3-6', value: 'Rediseño de procesos, pricing y matriz de gobernanza' },
            { label: 'Semanas 7-12', value: 'Ejecución guiada, dashboards de control KPI y transferencia de conocimiento' }
          ]
        },
        stats: {
          enabled: true,
          items: [
            { id: 's1', value: '80+', label: 'Proyectos de Transformación Completados' },
            { id: 's2', value: '+24%', label: 'Mejora Media en Margen EBITDA' },
            { id: 's3', value: '98%', label: 'De Clientes Nos Recomiendan' }
          ]
        },
        testimonials: {
          enabled: true,
          title: 'Lo que opinan CEOs y Directores Financieros.',
          items: [
            {
              id: 't1',
              author: 'Álvaro Carvajal',
              name: 'Álvaro Carvajal',
              role: 'CEO & Cofundador en LogiTrans Europe',
              company: 'LogiTrans Europe',
              quote: 'Apex rediseñó nuestra estrategia de precios y estructura de costes en un momento crítico. En solo 6 meses pasamos de un EBITDA del 8% al 19%, preparándonos para una ronda Serie B exitosa.',
              avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
              rating: 5
            }
          ]
        },
        pricing: {
          enabled: true,
          title: 'Programas de Intervención Estratégica',
          billingCycle: 'monthly',
          plans: [
            {
              id: 'p1',
              name: 'Diagnóstico Estratégico Rápido (2 Semanas)',
              priceMonthly: '4.500€',
              priceAnnual: 'Pago único de auditoría',
              description: 'Análisis exhaustivo de cuentas, estructura de márgenes y benchmarking competitivo con informe ejecutivo.',
              features: ['Auditoría cuantitativa de la cuenta de resultados', 'Benchmarking de márgenes frente al sector', 'Matriz de las 5 palancas de mejora inmediata', 'Presentación ejecutiva al Comité de Dirección'],
              highlighted: false,
              ctaText: 'Solicitar Diagnóstico Rápido'
            },
            {
              id: 'p2',
              name: 'Programa Completo de Transformación 90 Días',
              priceMonthly: 'A Presupuesto',
              priceAnnual: 'Retribución ligada a hitos de EBITDA',
              description: 'Acompañamiento integral con equipo de consultores sénior para ejecutar el plan de eficiencia y escalado.',
              features: ['Equipo dedicado de 2 consultores sénior', 'Rediseño integral de modelos financieros y pricing', 'Implementación de dashboards de control en tiempo real', 'Compromiso de mejora medible en EBITDA'],
              highlighted: true,
              ctaText: 'Agendar Sesión con Socio'
            }
          ]
        },
        faq: {
          enabled: true,
          title: 'Preguntas Frecuentes sobre la Consultoría',
          items: [
            {
              id: 'q1',
              question: '¿Qué tipo de empresas se benefician más de los servicios de Apex?',
              answer: 'Empresas con facturación entre 3M€ y 100M€ que experimentan problemas de rentabilidad a pesar de crecer en ventas, o que preparan una ronda de inversión, venta o relevo generacional.'
            },
            {
              id: 'q2',
              question: '¿Cómo garantizan que las recomendaciones no queden solo en un documento teórico?',
              answer: 'Nuestros consultores trabajan codo con codo con los equipos operativos de la empresa, configurando herramientas reales y realizando seguimiento semanal hasta consolidar los nuevos procesos.'
            },
            {
              id: 'q3',
              question: '¿Cuánto tiempo de dedicación requiere el equipo interno de la empresa?',
              answer: 'Diseñamos el proceso para minimizar la interrupción operativa: requerimos unas 3 a 5 horas semanales del CFO/CEO durante las dos primeras semanas de recopilación de datos.'
            },
            {
              id: 'q4',
              question: '¿Ofrecen acuerdos con componentes retributivos a éxito?',
              answer: 'Sí. En proyectos de optimización de márgenes y preparación para rondas podemos estructurar parte de los honorarios ligados a la consecución efectiva de objetivos de EBITDA o valoración.'
            },
            {
              id: 'q5',
              question: '¿Qué perfil tienen los consultores asignados a cada proyecto?',
              answer: 'Únicamente asignamos consultores sénior con más de 10 años de experiencia previa en consultoras Tier 1 (McKinsey, BCG, Bain) o banca de inversión de primer nivel.'
            },
            {
              id: 'q6',
              question: '¿Cómo se solicita una primera reunión de evaluación?',
              answer: 'Puedes rellenar el formulario de contacto para fijar una videollamada de 30 minutos con un socio de la firma para evaluar preliminarmente la viabilidad del proyecto.'
            }
          ]
        },
        ctaFinal: {
          enabled: true,
          title: 'Desbloquea el verdadero potencial de tu compañía.',
          subtitle: 'Agenda un diagnóstico estratégico inicial con nuestros socios consultores.',
          primaryCta: { text: 'Solicitar Diagnóstico Estratégico', link: '#pricing' }
        },
        footer: {
          copyright: '© 2026 Apex Strategic Advisory S.L. Todos los derechos reservados.',
          legalLinks: [
            { label: 'Aviso Legal', href: '#legal' },
            { label: 'Política de Confidencialidad', href: '#confidencialidad' },
            { label: 'Privacidad', href: '#privacy' }
          ],
          socialLinks: [
            { platform: 'LinkedIn', url: 'https://linkedin.com' }
          ]
        }
      }
    }
  }
];
