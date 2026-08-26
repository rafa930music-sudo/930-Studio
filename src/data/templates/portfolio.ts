import { TemplateDefinition } from '../../types';

export const PORTFOLIO_TEMPLATES: TemplateDefinition[] = [
  // 1. ESTUDIO FORMA — Branding & Dirección de Arte
  {
    id: 'estudio-forma',
    name: 'Estudio Forma',
    tagline: 'Estudio de dirección de arte, identidades visuales estratégicas y diseño editorial galardonado',
    category: 'portfolio',
    style: 'creativo',
    thumbnail: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=1200&q=80',
    description: 'Estética editorial brutalista en blanco y negro con acento lima neón #00FF88, tipografía Syne & Inter, cuadrícula de proyectos a sangre, ficha de caso de estudio y premios internacionales.',
    accentColor: '#00FF88',
    theme: 'dark',
    defaultConfig: {
      templateId: 'estudio-forma',
      name: 'Estudio Forma',
      slug: 'estudio-forma',
      domain: 'estudioforma.design',
      theme: 'dark',
      accentColor: '#00FF88',
      fontFamily: "'Syne', sans-serif",
      borderRadius: 14,
      published: true,
      sectionOrder: [
        'navbar',
        'hero',
        'marquee',
        'gallery',
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
        title: 'Estudio Forma — Dirección de Arte & Branding Estratégico',
        description: 'Construimos universos visuales y sistemas de diseño para marcas que buscan destacar.',
        keywords: 'branding, direccion de arte, diseño editorial, tipografia, identidad visual'
      },
      sections: {
        navbar: {
          brandName: 'FORMA',
          logoText: 'ESTUDIO FORMA ©',
          ctaText: 'Iniciar Proyecto',
          ctaLink: '#pricing',
          links: [
            { label: 'Proyectos', href: '#gallery' },
            { label: 'Enfoque', href: '#bentoFeatures' },
            { label: 'Premios', href: '#stats' },
            { label: 'Servicios', href: '#pricing' }
          ],
          glassBlur: true,
          sticky: true
        },
        hero: {
          enabled: true,
          badge: 'Selección de Trabajos 2024—2026',
          kicker: 'Branding & Dirección de Arte',
          title: 'Creamos identidades que perduran en la memoria colectiva.',
          highlightTitle: 'Diseño radical con propósito.',
          subtitle: 'Trabajamos mano a mano con fundadores y marcas globales para destilar su esencia en sistemas visuales coherentes, tipografías a medida y empaques esculturales.',
          primaryCta: { text: 'Ver Galería de Proyectos', link: '#gallery' },
          secondaryCta: { text: 'Conocer Tarifas y Proceso', link: '#pricing' },
          imageUrl: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=1200&q=80',
          style: 'centered'
        },
        marquee: {
          enabled: true,
          speed: 'normal',
          direction: 'left',
          items: [
            { id: 'm1', text: 'BRAND STRATEGY', highlight: true },
            { id: 'm2', text: 'ART DIRECTION' },
            { id: 'm3', text: 'CUSTOM TYPOGRAPHY', highlight: true },
            { id: 'm4', text: 'PACKAGING SCULPTURE' },
            { id: 'm5', text: 'DIGITAL SYSTEMS', highlight: true }
          ]
        },
        gallery: {
          enabled: true,
          kicker: 'Trabajos Seleccionados',
          title: 'Casos de Estudio Recientes',
          subtitle: 'Identidades completas desarrolladas desde la estrategia conceptual hasta la producción final.',
          items: [
            {
              id: 'g1',
              title: 'Vértice Arquitectura — Rebranding Integral & Libro Monográfico',
              category: 'Branding & Editorial',
              imageUrl: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=800&q=80',
              aspectRatio: 'wide'
            },
            {
              id: 'g2',
              title: 'Alba Botánica — Packaging Cosmético en Vidrio Oscuro',
              category: 'Packaging',
              imageUrl: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80',
              aspectRatio: 'square'
            },
            {
              id: 'g3',
              title: 'Sombra Sound — Identidad Visual y Pósteres Serigrafiados',
              category: 'Dirección de Arte',
              imageUrl: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=800&q=80',
              aspectRatio: 'tall'
            }
          ]
        },
        bentoFeatures: {
          enabled: true,
          kicker: 'Metodología Forma',
          title: 'Cómo abordamos cada desafío visual.',
          subtitle: 'Un proceso estructurado en cuatro fases rigurosas.',
          items: [
            {
              id: 'b1',
              title: '1. Inmersión e Investigación Estratégica',
              description: 'Analizamos tu mercado, tu audiencia y tu legado para encontrar la tensión creativa que diferenciará a tu marca.',
              icon: 'Search',
              tag: 'Estrategia',
              colSpan: 2
            },
            {
              id: 'b2',
              title: '2. Exploración Tipográfica Única',
              description: 'Diseñamos jerarquías y caracteres personalizados que otorgan una voz inconfundible a cada frase.',
              icon: 'Type',
              tag: 'Tipografía',
              colSpan: 1
            },
            {
              id: 'b3',
              title: '3. Producción y Materialidad',
              description: 'Supervisión en imprenta, elección de papeles certificados y acabados especiales con relieve y stamping.',
              icon: 'Layers',
              tag: 'Artes Gráficas',
              colSpan: 1
            },
            {
              id: 'b4',
              title: '4. Manual de Marca Digital Interactivo',
              description: 'Entregamos un portal web privado con todos los assets vectoriales, tokens de diseño y reglas de uso listas para tu equipo.',
              icon: 'Globe',
              tag: 'Sistema Vivo',
              colSpan: 2
            }
          ]
        },
        productHighlight: {
          enabled: true,
          kicker: 'Servicio Destacado',
          title: 'Sistema de Identidad Visual Completo',
          subtitle: 'Para empresas en fase de lanzamiento o reposicionamiento global.',
          description: 'Desarrollamos todo el ecosistema gráfico: logotipo, tipografía, paleta cromática, estilo fotográfico, papelería corporativa, empaques y directrices digitales en un plazo de 6 a 8 semanas.',
          imageUrl: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
          specs: [
            { label: 'Duración', value: '6-8 Semanas', detail: 'De inicio a entrega final de archivos' },
            { label: 'Entregables', value: 'Brand Book + Assets', detail: 'Guía de 80+ páginas en PDF e interactiva' },
            { label: 'Soporte', value: '3 Meses', detail: 'Acompañamiento en aplicaciones iniciales' }
          ]
        },
        stats: {
          enabled: true,
          items: [
            { id: 's1', value: '14', label: 'Premios de Diseño', description: 'Laus, Awwwards y ADC*E' },
            { id: 's2', value: '+60', label: 'Marcas Creadas', description: 'En Europa, EE.UU. y Latinoamérica' },
            { id: 's3', value: '100%', label: 'Entregas a Tiempo', description: 'Compromiso riguroso de calendario' }
          ]
        },
        testimonials: {
          enabled: true,
          title: 'Lo que dicen nuestros clientes',
          items: [
            {
              id: 't1',
              name: 'Ignacio Larrea',
              role: 'Fundador & CEO',
              company: 'Vértice Arquitectura',
              quote: 'Trabajar con Estudio Forma fue un antes y un después para nuestro estudio. Captaron exactamente la sobriedad arquitectónica que buscábamos y la tradujeron en una identidad formidable.',
              avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
              rating: 5
            }
          ]
        },
        pricing: {
          enabled: true,
          title: 'Paquetes de Diseño & Tarifas',
          subtitle: 'Plazas limitadas a 3 proyectos simultáneos para garantizar máxima dedicación.',
          billingCycle: 'annual',
          plans: [
            {
              id: 'brand_express',
              name: 'Identidad Esencial',
              priceMonthly: '3.500 €',
              priceAnnual: '3.500 €',
              description: 'Para startups y proyectos independientes que necesitan una base visual sólida y profesional.',
              features: [
                'Estrategia y territorio visual de marca',
                'Logotipo principal, secundario y símbolos',
                'Paleta cromática y jerarquía tipográfica',
                'Plantillas para redes sociales (Figma)',
                'Manual de marca en PDF (30 páginas)',
                'Entrega en 4 semanas'
              ],
              ctaText: 'Solicitar Proyecto',
              ctaLink: '#contact-express',
              highlighted: false
            },
            {
              id: 'brand_full',
              name: 'Sistema de Marca Completo',
              tag: 'Recomendado',
              priceMonthly: '7.500 €',
              priceAnnual: '7.500 €',
              description: 'Para compañías consolidadas que requieren un universo gráfico integral con packaging y diseño web.',
              features: [
                'Investigación de mercado y benchmarking',
                'Identidad visual completa y tipografía custom',
                'Dirección de arte fotográfica y renders 3D',
                'Diseño de empaques o papelería corporativa',
                'Diseño UI/UX de landing page en Figma',
                'Portal digital de marca interactivo con tokens',
                'Acompañamiento en imprenta de 3 meses'
              ],
              ctaText: 'Reservar Proyecto Completo',
              ctaLink: '#contact-full',
              highlighted: true
            }
          ]
        },
        faq: {
          enabled: true,
          title: 'Preguntas Frecuentes',
          items: [
            {
              id: 'f1',
              question: '¿Cómo se distribuyen los pagos de un proyecto?',
              answer: 'Trabajamos habitualmente con un esquema de 50% al inicio para reservar fecha en calendario y 50% a la entrega final de todos los archivos maestros.'
            },
            {
              id: 'f2',
              question: '¿Qué tipo de archivos recibo al finalizar?',
              answer: 'Recibes todos los archivos originales en formatos vectoriales abiertos (AI, SVG, EPS, PDF) además de versiones listas para web (PNG, WebP), archivos de tipografía y el archivo maestro de Figma.'
            }
          ]
        },
        ctaFinal: {
          enabled: true,
          kicker: 'Hablemos de tu Marca',
          title: '¿Tienes un proyecto interesante entre manos?',
          subtitle: 'Cuéntanos tu visión y agendemos una llamada de valoración de 20 minutos sin compromiso.',
          primaryCta: { text: 'Agendar Llamada Inicial', link: '#pricing' },
          backgroundStyle: 'glow'
        },
        footer: {
          copyright: '© 2026 Estudio Forma S.L. Madrid & Barcelona.',
          legalLinks: [
            { label: 'Aviso Legal', href: '#legal' },
            { label: 'Política de Privacidad', href: '#privacy' }
          ],
          socialLinks: [
            { platform: 'Behance', url: 'https://behance.net' },
            { platform: 'Instagram', url: 'https://instagram.com' }
          ]
        }
      }
    }
  },

  // 2. MATEO SANTOS — Fotografía Editorial & Arquitectura
  {
    id: 'mateo-photo',
    name: 'Mateo Santos',
    tagline: 'Fotografía de arquitectura contemporánea, espacios habitados y reportaje editorial de gran formato',
    category: 'portfolio',
    style: 'minimalista',
    thumbnail: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80',
    description: 'Estética en escala de grises y luz natural con acento ámbar #FFB800, tipografía Playfair Display, visor de imágenes a pantalla completa sin cortes y reservas de sesiones.',
    accentColor: '#FFB800',
    theme: 'dark',
    defaultConfig: {
      templateId: 'mateo-photo',
      name: 'Mateo Santos Fotógrafo',
      slug: 'mateo-santos',
      domain: 'mateosantos.photo',
      theme: 'dark',
      accentColor: '#FFB800',
      fontFamily: "'Playfair Display', serif",
      borderRadius: 8,
      published: true,
      sectionOrder: [
        'navbar',
        'hero',
        'gallery',
        'productHighlight',
        'stats',
        'testimonials',
        'pricing',
        'faq',
        'ctaFinal',
        'footer'
      ],
      seo: {
        title: 'Mateo Santos — Fotografía de Arquitectura & Espacios',
        description: 'Documentación visual de arquitectura de autor y proyectos de interiorismo con luz natural.',
        keywords: 'fotografo arquitectura, fotografia interiorismo, editorial, fotos barcelona'
      },
      sections: {
        navbar: {
          brandName: 'MATEO SANTOS',
          logoText: 'MATEO SANTOS / FOTÓGRAFO',
          ctaText: 'Contratar Sesión',
          ctaLink: '#pricing',
          links: [
            { label: 'Portafolio', href: '#gallery' },
            { label: 'Sobre Mí', href: '#productHighlight' },
            { label: 'Publicaciones', href: '#stats' },
            { label: 'Tarifas', href: '#pricing' }
          ],
          glassBlur: true,
          sticky: true
        },
        hero: {
          enabled: true,
          badge: 'Base en Madrid y Barcelona',
          kicker: 'Luz Natural y Geometría',
          title: 'Documentando la poesía de los espacios habitados.',
          subtitle: 'Fotografía sosegada para arquitectos, interioristas y revistas de diseño que buscan inmortalizar la textura del hormigón, la madera y la luz.',
          primaryCta: { text: 'Explorar Obras Fotografiadas', link: '#gallery' },
          imageUrl: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80',
          style: 'fullscreen'
        },
        gallery: {
          enabled: true,
          title: 'Serie Arquitectura Mediterránea 2025—2026',
          items: [
            { id: 'g1', title: 'Casa en los Olivos — Almería', category: 'Arquitectura', imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80', aspectRatio: 'wide' },
            { id: 'g2', title: 'Pabellón de Hormigón y Luz — Girona', category: 'Detalle', imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80', aspectRatio: 'tall' }
          ]
        },
        productHighlight: {
          enabled: true,
          title: 'Técnica de Cámara de Banco Óptico Digital',
          subtitle: 'Control absoluto de las líneas verticales sin distorsión de perspectiva.',
          description: 'Utilizo respaldos digitales Phase One de 150 megapíxeles y lentes descentrables para capturar la volumetría exacta concebida por el arquitecto.',
          imageUrl: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=80',
          specs: [
            { label: 'Cámara', value: 'Phase One IQ4', detail: '150 MP de resolución media' },
            { label: 'Ópticas', value: 'Rodenstock', detail: 'Corrección descentrable milimétrica' }
          ]
        },
        stats: {
          enabled: true,
          items: [
            { id: 's1', value: '+120', label: 'Proyectos Documentados', description: 'En 8 países' },
            { id: 's2', value: '35', label: 'Portadas de Revistas', description: 'AD, Arquitectura Viva, El Croquis' }
          ]
        },
        testimonials: {
          enabled: true,
          title: 'Testimonios de Arquitectos',
          items: [
            {
              id: 't1',
              name: 'Carla Puig',
              role: 'Arquitecta Principal',
              company: 'Puig & Associats',
              quote: 'Mateo sabe esperar pacientemente a la hora dorada exacta en que la luz acaricia el patio interior. Sus fotos consiguieron que nuestra obra fuera portada de AD.',
              avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
              rating: 5
            }
          ]
        },
        pricing: {
          enabled: true,
          title: 'Servicios de Reportaje',
          billingCycle: 'annual',
          plans: [
            {
              id: 'session_half',
              name: 'Reportaje Media Jornada',
              priceMonthly: '1.200 €',
              priceAnnual: '1.200 €',
              description: 'Para viviendas unifamiliares, locales comerciales o apartamentos reformados.',
              features: [
                'Hasta 5 horas de sesión in situ',
                'Selección de 15 fotografías retocadas en alta',
                'Cesión de derechos para web, rrss y notas de prensa',
                'Entrega en 5 días laborables'
              ],
              ctaText: 'Reservar Media Jornada',
              ctaLink: '#book-half',
              highlighted: false
            },
            {
              id: 'session_full',
              name: 'Reportaje Jornada Completa',
              tag: 'Más Completo',
              priceMonthly: '2.100 €',
              priceAnnual: '2.100 €',
              description: 'Cobertura de día y noche (luz diurna y crepuscular/nocturna).',
              features: [
                'Jornada completa (mañana + atardecer + noche)',
                'Selección de 30 fotografías en máxima resolución',
                'Fotografía aérea con dron 4K incluida',
                'Derechos editoriales completos sin límite de tiempo',
                'Retoque fino de detalles y eliminación de imperfecciones'
              ],
              ctaText: 'Reservar Jornada Completa',
              ctaLink: '#book-full',
              highlighted: true
            }
          ]
        },
        faq: {
          enabled: true,
          title: 'Dudas y Condiciones',
          items: [
            {
              id: 'f1',
              question: '¿Qué ocurre si el día de la sesión llueve o está nublado?',
              answer: 'Hacemos seguimiento meteorológico 48h antes. Si las condiciones de luz no son las óptimas para el estilo del proyecto, reprogramamos la fecha sin coste alguno.'
            }
          ]
        },
        ctaFinal: {
          enabled: true,
          title: '¿Tienes una obra lista para ser fotografiada?',
          subtitle: 'Cuéntame la localización y fechas estimadas de entrega de llaves.',
          primaryCta: { text: 'Solicitar Presupuesto', link: '#pricing' },
          backgroundStyle: 'glow'
        },
        footer: {
          copyright: '© 2026 Mateo Santos Studio. Todos los derechos reservados.',
          legalLinks: [{ label: 'Condiciones de Cesión de Derechos', href: '#rights' }],
          socialLinks: [{ platform: 'Instagram', url: 'https://instagram.com' }]
        }
      }
    }
  },

  // 3. PIXEL CRAFT — Animación 3D, CGI & Motion Graphics
  {
    id: 'pixel-vfx',
    name: 'Pixel Craft',
    tagline: 'Estudio de animación 3D fotorrealista, simulación de fluidos, CGI para producto y motion graphics para marcas tech',
    category: 'portfolio',
    style: 'oscuro',
    thumbnail: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    description: 'Estética hiper-futurista en negro carbón y cian eléctrico #00E5FF, tipografía Outfit, video showreels en bucle, despieces de geometría en wireframe y cotizador de renders.',
    accentColor: '#00E5FF',
    theme: 'dark',
    defaultConfig: {
      templateId: 'pixel-vfx',
      name: 'Pixel Craft 3D Lab',
      slug: 'pixel-craft',
      domain: 'pixelcraft3d.com',
      theme: 'dark',
      accentColor: '#00E5FF',
      fontFamily: "'Outfit', sans-serif",
      borderRadius: 16,
      published: true,
      sectionOrder: [
        'navbar',
        'hero',
        'marquee',
        'gallery',
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
        title: 'Pixel Craft — Estudio de Animación 3D, CGI & Motion Graphics',
        description: 'Renders fotorrealistas de producto, spots comerciales 3D y simulaciones avanzadas.',
        keywords: 'animacion 3d, renders cgi, motion graphics, cinema 4d, houdini, blender'
      },
      sections: {
        navbar: {
          brandName: 'PIXEL CRAFT',
          logoText: 'PIXEL CRAFT // 3D',
          ctaText: 'Pedir Cotización',
          ctaLink: '#pricing',
          links: [
            { label: 'Showreel', href: '#gallery' },
            { label: 'Capacidades', href: '#bentoFeatures' },
            { label: 'Pipeline', href: '#productHighlight' },
            { label: 'Presupuestos', href: '#pricing' }
          ],
          glassBlur: true,
          sticky: true
        },
        hero: {
          enabled: true,
          badge: 'Showreel 2026 Disponible',
          kicker: 'Houdini & Octane Render',
          title: 'Damos vida a lo que aún no existe en el mundo físico.',
          highlightTitle: 'CGI y 3D de Grado Comercial.',
          subtitle: 'Creamos animaciones 3D hipnóticas de producto, simulaciones de fluidos orgánicos y visualizaciones técnicas para lanzamientos de impacto.',
          primaryCta: { text: 'Ver Showreel 4K', link: '#gallery' },
          secondaryCta: { text: 'Solicitar Presupuesto', link: '#pricing' },
          imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
          style: 'centered'
        },
        marquee: {
          enabled: true,
          speed: 'fast',
          direction: 'left',
          items: [
            { id: 'm1', text: 'PHOTOREALISTIC PRODUCT RENDERING', highlight: true },
            { id: 'm2', text: 'COMPLEX FLUID & PARTICLE SIMULATIONS' },
            { id: 'm3', text: 'HOUDINI + CINEMA 4D + UNREAL ENGINE 5', highlight: true },
            { id: 'm4', text: '4K PRORES / 60FPS DELIVERIES' }
          ]
        },
        gallery: {
          enabled: true,
          title: 'Trabajos Destacados 3D',
          items: [
            { id: 'g1', title: 'Aether Pods — Animación de Despiece Magnético', category: 'Hardware', imageUrl: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80', aspectRatio: 'wide' },
            { id: 'g2', title: 'Lumina Drink — Simulación de Gotas y Salpicaduras', category: 'Bebidas', imageUrl: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80', aspectRatio: 'square' }
          ]
        },
        bentoFeatures: {
          enabled: true,
          title: 'Capacidades del Estudio',
          items: [
            {
              id: 'b1',
              title: 'Renders Fotorrealistas 8K',
              description: 'Modelado CAD ultra detallado con materiales procedurales y texturas basadas en física (PBR).',
              icon: 'Box',
              tag: 'Hiperrealismo',
              colSpan: 2
            },
            {
              id: 'b2',
              title: 'Simulaciones Complejas en Houdini',
              description: 'Humo, fuego, agua, telas dinámicas y desintegración de partículas.',
              icon: 'Zap',
              tag: 'VFX',
              colSpan: 1
            }
          ]
        },
        productHighlight: {
          enabled: true,
          title: 'Pipeline de Render en la Nube',
          subtitle: 'Granjas de GPU RTX 4090 dedicadas para cumplir plazos ajustados.',
          description: 'Nuestra infraestructura nos permite procesar miles de fotogramas en 4K con iluminación global sin comprometer los tiempos de entrega.',
          imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
          specs: [
            { label: 'Resolución', value: 'Hasta 8K', detail: 'Sin pérdida de detalle' },
            { label: 'Tiempo de Entrega', value: '1-3 Semanas', detail: 'Para spots de 30 segundos' }
          ]
        },
        stats: {
          enabled: true,
          items: [
            { id: 's1', value: '+80', label: 'Spots 3D Producidos', description: 'Para marcas globales' },
            { id: 's2', value: '4K/60fps', label: 'Estándar Mínimo', description: 'Máxima fluidez' }
          ]
        },
        testimonials: {
          enabled: true,
          title: 'Clientes',
          items: [
            {
              id: 't1',
              name: 'Marcos Benítez',
              role: 'Marketing Lead',
              company: 'Nova Devices',
              quote: 'El spot 3D que hicieron para nuestro lanzamiento acumuló más de 2 millones de reproducciones en la primera semana. El nivel de detalle en los metales es asombroso.',
              avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
              rating: 5
            }
          ]
        },
        pricing: {
          enabled: true,
          title: 'Paquetes de Producción 3D',
          billingCycle: 'annual',
          plans: [
            {
              id: 'cgi_stills',
              name: 'Pack Renders de Producto (Stills)',
              priceMonthly: '1.800 €',
              priceAnnual: '1.800 €',
              description: '5 imágenes fotorrealistas en alta resolución para web, ecommerce y cartelería.',
              features: [
                'Modelado 3D a partir de planos o archivo CAD',
                'Texturizado fotorrealista PBR',
                '5 vistas en 4K sobre fondos abstractos o estudio',
                'Archivos PNG con canal alfa transparente',
                '2 rondas de revisiones incluidas'
              ],
              ctaText: 'Encargar Renders',
              ctaLink: '#order-stills',
              highlighted: false
            },
            {
              id: 'cgi_video',
              name: 'Spot Animado 3D (15-30s)',
              tag: 'Alta Demanda',
              priceMonthly: '4.900 €',
              priceAnnual: '4.900 €',
              description: 'Vídeo cinematográfico completo con música original y efectos de sonido.',
              features: [
                'Storyboard y animatic previo',
                'Animación de producto con movimientos de cámara dinámicos',
                'Iluminación realista y efectos de partículas',
                'Diseño de sonido y mezcla de audio profesional',
                'Formatos 16:9 (Horizontal) y 9:16 (Reels/TikTok)'
              ],
              ctaText: 'Cotizar Spot 3D',
              ctaLink: '#order-video',
              highlighted: true
            }
          ]
        },
        faq: {
          enabled: true,
          title: 'Preguntas Frecuentes',
          items: [
            {
              id: 'f1',
              question: '¿Qué necesito aportar para empezar un render de producto?',
              answer: 'Idealmente archivos CAD (STEP, IGES o OBJ). Si no dispones de ellos, podemos modelar el producto desde cero a partir de fotografías y medidas reales.'
            }
          ]
        },
        ctaFinal: {
          enabled: true,
          title: 'Haz que tu producto deslumbre en la pantalla.',
          subtitle: 'Envíanos los detalles y te responderemos con presupuesto y calendario en 24h.',
          primaryCta: { text: 'Solicitar Presupuesto 3D', link: '#pricing' },
          backgroundStyle: 'glow'
        },
        footer: {
          copyright: '© 2026 Pixel Craft 3D Animation Studio.',
          legalLinks: [{ label: 'Condiciones de Contratación', href: '#terms' }],
          socialLinks: [{ platform: 'Vimeo', url: 'https://vimeo.com' }, { platform: 'Instagram', url: 'https://instagram.com' }]
        }
      }
    }
  },

  // 4. ELENA ROYO — Interiorismo & Escenografía Comercial
  {
    id: 'elena-interior',
    name: 'Elena Royo',
    tagline: 'Diseño de interiores residenciales de autor, escenografía comercial y dirección de proyectos llave en mano',
    category: 'portfolio',
    style: 'natural',
    thumbnail: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
    description: 'Estética en tonos piedra caliza, lino y nogal con acento terracota #FF6B00, tipografía Cabinet Grotesk, planos interactivos, muestrario de materiales y gestión de reformas.',
    accentColor: '#FF6B00',
    theme: 'dark',
    defaultConfig: {
      templateId: 'elena-interior',
      name: 'Elena Royo Studio',
      slug: 'elena-royo',
      domain: 'elenaroyo.com',
      theme: 'dark',
      accentColor: '#FF6B00',
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      borderRadius: 14,
      published: true,
      sectionOrder: [
        'navbar',
        'hero',
        'marquee',
        'gallery',
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
        title: 'Elena Royo — Estudio de Arquitectura de Interiores',
        description: 'Proyectos de interiorismo residencial y comercial que equilibran luz, materialidad y funcionalidad.',
        keywords: 'interiorismo madrid, diseño interiores, reformas de lujo, interiorista'
      },
      sections: {
        navbar: {
          brandName: 'ELENA ROYO',
          logoText: 'ELENA ROYO / INTERIORES',
          ctaText: 'Contactar Estudio',
          ctaLink: '#pricing',
          links: [
            { label: 'Proyectos', href: '#gallery' },
            { label: 'Filosofía', href: '#bentoFeatures' },
            { label: 'Servicios', href: '#pricing' }
          ],
          glassBlur: true,
          sticky: true
        },
        hero: {
          enabled: true,
          badge: 'Proyectos Residenciales & Contract',
          kicker: 'Materialidad y Silencio Visual',
          title: 'Espacios creados para ser vividos sin artificios.',
          subtitle: 'Diseñamos hogares y espacios comerciales donde cada textura, rayo de sol y proporción responden a una búsqueda de serenidad cotidiana.',
          primaryCta: { text: 'Ver Obras Realizadas', link: '#gallery' },
          secondaryCta: { text: 'Conocer Tarifas', link: '#pricing' },
          imageUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
          style: 'centered'
        },
        marquee: {
          enabled: true,
          speed: 'normal',
          direction: 'left',
          items: [
            { id: 'm1', text: 'PROYECTOS LLAVE EN MANO', highlight: true },
            { id: 'm2', text: 'PIEDRA CALIZA & NOGAL MACIZO' },
            { id: 'm3', text: 'ILUMINACIÓN ARQUITECTÓNICA INTEGRADA', highlight: true },
            { id: 'm4', text: 'GESTIÓN INTEGRAL DE REFORMAS' }
          ]
        },
        gallery: {
          enabled: true,
          title: 'Proyectos Residenciales',
          items: [
            { id: 'g1', title: 'Ático en Chamberí — Luz y Caliza', category: 'Residencial', imageUrl: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80' },
            { id: 'g2', title: 'Boutique Floristería Silvestre', category: 'Comercial', imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80' }
          ]
        },
        bentoFeatures: {
          enabled: true,
          title: 'Nuestra Filosofía de Diseño',
          items: [
            {
              id: 'b1',
              title: 'Materiales Nobles y Auténticos',
              description: 'Cal, madera sin tratar, morteros de arcilla y linos naturales que envejecen con dignidad.',
              icon: 'Feather',
              tag: 'Pureza',
              colSpan: 2
            },
            {
              id: 'b2',
              title: 'Gestión Rigurosa de Presupuestos',
              description: 'Control de costes partidas por partida sin sorpresas durante la ejecución de obra.',
              icon: 'CheckCircle',
              tag: 'Transparencia',
              colSpan: 1
            }
          ]
        },
        productHighlight: {
          enabled: true,
          title: 'Servicio Integral Llave en Mano',
          subtitle: 'Nos ocupamos de absolutamente todo, desde la primera idea hasta colocar el último libro.',
          description: 'Diseño de planos, solicitud de licencias municipales, dirección de gremios, selección de mobiliario a medida y estilismo final.',
          imageUrl: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80',
          specs: [
            { label: 'Alcance', value: '100% Completo', detail: 'Diseño + Obra + Mobiliario' },
            { label: 'Garantía', value: '2 Años', detail: 'En todas las instalaciones' }
          ]
        },
        stats: {
          enabled: true,
          items: [
            { id: 's1', value: '+45', label: 'Hogares Transformados', description: 'En toda España' },
            { id: 's2', value: '12 Años', label: 'De Trayectoria', description: 'Experiencia en obra real' }
          ]
        },
        testimonials: {
          enabled: true,
          title: 'Opiniones de Propietarios',
          items: [
            {
              id: 't1',
              name: 'Fernando y Mónica',
              role: 'Propietarios',
              company: 'Madrid',
              quote: 'Elena logró convertir un piso oscuro y compartimentado en un templo de luz y serenidad. La distribución es sencillamente magistral.',
              avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
              rating: 5
            }
          ]
        },
        pricing: {
          enabled: true,
          title: 'Servicios de Interiorismo',
          billingCycle: 'annual',
          plans: [
            {
              id: 'pack_consultoria',
              name: 'Asesoría y Proyecto Conceptual',
              priceMonthly: '1.500 €',
              priceAnnual: '1.500 €',
              description: 'Para quienes desean reformar por su cuenta pero necesitan una guía experta.',
              features: [
                'Plano de nueva distribución con medidas',
                'Moodboard de materiales y paleta de colores',
                'Propuesta de iluminación y mobiliario con links de compra',
                'Reunión presencial u online de 3 horas'
              ],
              ctaText: 'Solicitar Asesoría',
              ctaLink: '#pack-concept',
              highlighted: false
            },
            {
              id: 'pack_integral',
              name: 'Proyecto Ejecutivo & Dirección de Obra',
              tag: 'Llave en Mano',
              priceMonthly: 'A consultar',
              priceAnnual: 'A consultar',
              description: 'Gestión completa de la reforma de inicio a fin.',
              features: [
                'Proyecto técnico con planos de demolición, fontanería y electricidad',
                'Renders 3D fotorrealistas de todas las estancias',
                'Presupuesto cerrado de constructora contrastada',
                'Visitas semanales de dirección de obra',
                'Estilismo y montaje de decoración final'
              ],
              ctaText: 'Pedir Visita al Inmueble',
              ctaLink: '#pack-full',
              highlighted: true
            }
          ]
        },
        faq: {
          enabled: true,
          title: 'Preguntas Frecuentes',
          items: [
            {
              id: 'f1',
              question: '¿Trabajáis fuera de Madrid?',
              answer: 'Sí. Realizamos proyectos en toda España y las Islas Baleares, desplazándonos puntualmente para las fases críticas de replanteo y dirección de obra.'
            }
          ]
        },
        ctaFinal: {
          enabled: true,
          title: '¿Quieres crear el hogar con el que sueñas?',
          subtitle: 'Solicita una primera toma de contacto sin coste en tu vivienda.',
          primaryCta: { text: 'Contactar con Elena', link: '#pricing' },
          backgroundStyle: 'glow'
        },
        footer: {
          copyright: '© 2026 Elena Royo Interior Design Studio.',
          legalLinks: [{ label: 'Aviso Legal', href: '#legal' }],
          socialLinks: [{ platform: 'Instagram', url: 'https://instagram.com' }]
        }
      }
    }
  },

  // 5. DUALIS STUDIO — Desarrollo Creativo Web & Experiencias Digitales
  {
    id: 'dualis-interactive',
    name: 'Dualis Studio',
    tagline: 'Desarrollo web interactivo, shaders WebGL a medida y animaciones de alto rendimiento para marcas de vanguardia',
    category: 'portfolio',
    style: 'creativo',
    thumbnail: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80',
    description: 'Estética futurista en negro abisal y magenta láser #FF00E5, tipografía Space Grotesk, micro-interacciones de física, rendimiento 60 FPS y stack moderno.',
    accentColor: '#FF00E5',
    theme: 'dark',
    defaultConfig: {
      templateId: 'dualis-interactive',
      name: 'Dualis Interactive Lab',
      slug: 'dualis-interactive',
      domain: 'dualis.tech',
      theme: 'dark',
      accentColor: '#FF00E5',
      fontFamily: "'Space Grotesk', sans-serif",
      borderRadius: 16,
      published: true,
      sectionOrder: [
        'navbar',
        'hero',
        'marquee',
        'gallery',
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
        title: 'Dualis Interactive — Desarrollo Web Creativo & WebGL',
        description: 'Construimos sitios web galardonados con animaciones fluidas y experiencias interactivas memorables.',
        keywords: 'desarrollo web creativo, webgl, threejs, gsap, awwwards, react'
      },
      sections: {
        navbar: {
          brandName: 'DUALIS',
          logoText: 'DUALIS // LAB',
          ctaText: 'Crear Experiencia',
          ctaLink: '#pricing',
          links: [
            { label: 'Proyectos', href: '#gallery' },
            { label: 'Stack', href: '#bentoFeatures' },
            { label: 'Rendimiento', href: '#productHighlight' },
            { label: 'Contacto', href: '#pricing' }
          ],
          glassBlur: true,
          sticky: true
        },
        hero: {
          enabled: true,
          badge: 'Creative Development 2026',
          kicker: 'WebGL / Three.js / React',
          title: 'Transformamos código en experiencias sensoriales inmersivas.',
          highlightTitle: 'Ingeniería frontend galardonada.',
          subtitle: 'Ayudamos a marcas y diseñadores a convertir conceptos atrevidos en sitios web rápidos, interactivos y con puntuación 100 en Core Web Vitals.',
          primaryCta: { text: 'Ver Proyectos Interactivos', link: '#gallery' },
          secondaryCta: { text: 'Cotizar Desarrollo', link: '#pricing' },
          imageUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80',
          style: 'centered'
        },
        marquee: {
          enabled: true,
          speed: 'fast',
          direction: 'left',
          items: [
            { id: 'm1', text: 'CREATIVE FRONTEND DEVELOPMENT', highlight: true },
            { id: 'm2', text: 'THREE.JS / WEBGL SHADERS' },
            { id: 'm3', text: '100% LIGHTHOUSE PERFORMANCE SCORE', highlight: true },
            { id: 'm4', text: 'AWWWARDS SITE OF THE DAY RECOGNITION' }
          ]
        },
        gallery: {
          enabled: true,
          title: 'Sitios Web en Vivo',
          items: [
            { id: 'g1', title: 'Kinetik — Experiencia WebGL con Audio Reactivo', category: 'Web3 / Tech', imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80' },
            { id: 'g2', title: 'Aura Luxury — E-commerce con Modelo 3D Interactivo', category: 'E-commerce', imageUrl: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=800&q=80' }
          ]
        },
        bentoFeatures: {
          enabled: true,
          title: 'Nuestro Stack Tecnológico',
          items: [
            {
              id: 'b1',
              title: 'Renderizado WebGL & Shaders GLSL',
              description: 'Efectos de distorsión líquida y partículas calculadas directamente en la GPU sin sobrecargar la CPU.',
              icon: 'Cpu',
              tag: 'GPU Powered',
              colSpan: 2
            },
            {
              id: 'b2',
              title: 'Animaciones Fluidas con GSAP & Motion',
              description: 'Transiciones de página cinemáticas con sincronización precisa de scroll.',
              icon: 'Play',
              tag: 'Smooth Scroll',
              colSpan: 1
            }
          ]
        },
        productHighlight: {
          enabled: true,
          title: 'Obsesión por los 60 FPS y la Accesibilidad',
          subtitle: 'El diseño experimental no debe comprometer la velocidad ni la usabilidad.',
          description: 'Optimizamos cada geometría, textura y asset para que la web cargue en menos de 1 segundo en cualquier dispositivo móvil.',
          imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
          specs: [
            { label: 'Lighthouse', value: '100/100', detail: 'En Performance, SEO y Accesibilidad' },
            { label: 'Carga', value: '< 800ms', detail: 'Primer renderizado con contenido' }
          ]
        },
        stats: {
          enabled: true,
          items: [
            { id: 's1', value: '9x', label: 'Site of the Day', description: 'En Awwwards y FWA' },
            { id: 's2', value: '60 FPS', label: 'Constantes', description: 'En móvil y desktop' }
          ]
        },
        testimonials: {
          enabled: true,
          title: 'Feedback de Estudios',
          items: [
            {
              id: 't1',
              name: 'Álvaro Cruz',
              role: 'Director Creativo',
              company: 'Cruz Agency',
              quote: 'Dualis es nuestro partner de desarrollo de confianza para todos los proyectos donde el diseño debe cobrar vida con animaciones de nivel mundial.',
              avatarUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
              rating: 5
            }
          ]
        },
        pricing: {
          enabled: true,
          title: 'Servicios de Desarrollo',
          billingCycle: 'annual',
          plans: [
            {
              id: 'dev_landing',
              name: 'Landing Page Interactiva',
              priceMonthly: '2.900 €',
              priceAnnual: '2.900 €',
              description: 'Desarrollo frontend a partir de tu diseño de Figma con animaciones suaves.',
              features: [
                'Desarrollo en React / Vite con Tailwind CSS',
                'Animaciones de entrada y scroll con Motion',
                'Formularios funcionales y analítica integrada',
                '100% responsivo y optimizado para móvil',
                'Despliegue y entrega en 2 semanas'
              ],
              ctaText: 'Contratar Desarrollo',
              ctaLink: '#order-landing',
              highlighted: false
            },
            {
              id: 'dev_webgl',
              name: 'Experiencia WebGL / 3D Completa',
              tag: 'Premio Asegurado',
              priceMonthly: '6.500 €',
              priceAnnual: '6.500 €',
              description: 'Sitio web multi-sección con shaders custom, canvas 3D interactivo y efectos cinemáticos.',
              features: [
                'Integración de Three.js / WebGL con canvas interactivo',
                'Shaders de distorsión y partículas procedurales',
                'Transiciones entre páginas sin recarga (SPA)',
                'Auditoría y optimización a 60 FPS',
                'Soporte técnico y post-lanzamiento de 1 mes'
              ],
              ctaText: 'Cotizar Proyecto WebGL',
              ctaLink: '#order-webgl',
              highlighted: true
            }
          ]
        },
        faq: {
          enabled: true,
          title: 'Preguntas Frecuentes',
          items: [
            {
              id: 'f1',
              question: '¿Trabajáis a partir de diseños existentes en Figma?',
              answer: 'Sí, nos integramos a la perfección con tu equipo de diseño para trasladar los prototipos a código limpio respetando cada detalle visual.'
            }
          ]
        },
        ctaFinal: {
          enabled: true,
          title: 'Construyamos la web de la que todo el sector hable.',
          subtitle: 'Agenda una llamada técnica y revisemos juntos tu proyecto.',
          primaryCta: { text: 'Agendar Llamada Técnica', link: '#pricing' },
          backgroundStyle: 'glow'
        },
        footer: {
          copyright: '© 2026 Dualis Interactive Studio.',
          legalLinks: [{ label: 'GitHub', href: 'https://github.com' }],
          socialLinks: [{ platform: 'Twitter / X', url: 'https://twitter.com' }]
        }
      }
    }
  }
];
