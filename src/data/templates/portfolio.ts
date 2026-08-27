import { TemplateDefinition } from '../../types';

export const PORTFOLIO_TEMPLATES: TemplateDefinition[] = [
  // 1. ESTUDIO FORMA — Branding de Autor & Dirección de Arte
  {
    id: 'estudio-forma',
    name: 'Estudio Forma',
    tagline: 'Estudio de dirección de arte, identidades visuales estratégicas y diseño editorial galardonado',
    category: 'portfolio',
    thumbnail: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=1200&q=80',
    description: 'Estética editorial brutalista en negro profundo #0A0A0E y acento lima neón #00FF88, tipografía Syne & Plus Jakarta Sans, cuadrícula de proyectos a sangre, ficha de caso de estudio y premios internacionales.',
    accentColor: '#00FF88',
    theme: 'dark',
    defaultConfig: {
      templateId: 'estudio-forma',
      name: 'Estudio Forma Design',
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
        'logos',
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
        description: 'Construimos universos visuales y sistemas de diseño para marcas valientes que buscan destacar.',
        keywords: 'branding, direccion de arte, diseño editorial, tipografia custom, identidad visual, packaging de autor'
      },
      sections: {
        navbar: {
          brandName: 'FORMA',
          logoText: 'ESTUDIO FORMA ©',
          ctaText: 'Iniciar Proyecto',
          ctaLink: '#pricing',
          links: [
            { label: 'Proyectos', href: '#gallery' },
            { label: 'Metodología', href: '#features' },
            { label: 'Caso Destacado', href: '#product' },
            { label: 'Servicios', href: '#pricing' }
          ],
          glassBlur: true,
          sticky: true
        },
        hero: {
          enabled: true,
          badge: 'Selección de Trabajos 2024—2026 • Ganadores Premios Laus de Oro',
          kicker: 'Branding, Tipografía & Dirección de Arte',
          title: 'Creamos identidades que perduran',
          highlightTitle: 'en la memoria colectiva.',
          subtitle: 'Trabajamos mano a mano con fundadores visionarios y marcas globales para destilar su esencia en sistemas visuales coherentes, tipografías a medida y empaques esculturales.',
          primaryCta: { text: 'Ver Selección de Proyectos', link: '#gallery' },
          secondaryCta: { text: 'Conocer Tarifas y Proceso →', link: '#pricing' },
          imageUrl: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=1600&q=80',
          style: 'centered'
        },
        logos: {
          enabled: true,
          title: 'CLIENTES Y MARCAS QUE HAN TRABAJADO CON ESTUDIO FORMA',
          items: [
            { id: 'l1', name: 'Zara Home', tagline: 'Editorial & Packaging' },
            { id: 'l2', name: 'Mutua Madrileña', tagline: 'Rebranding Visual' },
            { id: 'l3', name: 'Saffron Brand', tagline: 'Colaboración Estratégica' }
          ]
        },
        gallery: {
          enabled: true,
          title: 'Proyectos Seleccionados de Identidad & Packaging',
          images: [
            { id: 'g1', url: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=800&q=80', caption: 'Kanso Living: Identidad visual, papelería sobre papel Fedrigoni y packaging' },
            { id: 'g2', url: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=800&q=80', caption: 'Valkiria Studio: Dirección de arte editorial y diseño tipográfico propio' },
            { id: 'g3', url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80', caption: 'Aura Horlogerie: Libro de marca impreso en serigrafía y stamping cian' }
          ]
        },
        bentoFeatures: {
          enabled: true,
          kicker: 'Disciplinas Creativas',
          title: 'Un enfoque holístico donde la estrategia precede a la estética.',
          subtitle: 'Diseñamos marcas capaces de resistir el paso del tiempo y las modas pasajeras.',
          items: [
            {
              id: 'f1',
              title: 'Identidad Visual Integral & Brand Guidelines',
              description: 'Definición de tono de voz, logotipo primario y secundario, paleta cromática, sistemas de retículas y manual de marca de 120 páginas.',
              icon: 'Palette',
              tag: 'Sistemas Visuales',
              colSpan: 2,
              statNumber: '120+',
              statLabel: 'Páginas en cada Brand Book con especificaciones de aplicación'
            },
            {
              id: 'f2',
              title: 'Diseño Tipográfico Custom (Custom Typeface)',
              description: 'Dibujamos familias tipográficas a medida para dotar a la marca de una voz única y reconocible al instante.',
              icon: 'Type',
              tag: 'Tipografía de Autor',
              colSpan: 1
            },
            {
              id: 'f3',
              title: 'Packaging Sostenible y Acabados de Lujo',
              description: 'Selección de papeles FSC con textura, troqueles esculturales y acabados especiales como golpe en seco y foil metálico.',
              icon: 'Package',
              tag: 'Packaging Escultural',
              colSpan: 1
            },
            {
              id: 'f4',
              title: 'Dirección de Arte para Campañas de Lanzamiento',
              description: 'Conceptualización fotográfica, estilismo de producto y coordinación de rodajes publicitarios para lanzamientos globales.',
              icon: 'Camera',
              tag: 'Dirección de Arte',
              colSpan: 2,
              statNumber: '14',
              statLabel: 'Premios Laus y Red Dot de Diseño acumulados'
            }
          ]
        },
        productHighlight: {
          enabled: true,
          badge: 'Caso de Estudio Galardonado',
          kicker: 'Premio Laus de Oro 2025',
          title: 'Rebranding Global de Kanso Living.',
          subtitle: 'Una transformación visual completa que incrementó el valor de marca un 240%.',
          description: 'Desarrollamos una identidad minimalista inspirada en la arquitectura brutalista japonesa. Diseñamos una tipografía sans-serif de proporciones expandidas, un nuevo sistema de packaging ecológico con papel de residuos de uva y la dirección de arte de su catálogo internacional.',
          imageUrl: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=1400&q=80',
          specs: [
            { label: 'Cliente', value: 'Kanso Living (Tokio / Madrid)' },
            { label: 'Duración', value: '4 meses de consultoría e implementación' },
            { label: 'Reconocimiento', value: 'Laus de Oro en Identidad Corporativa y Packaging' }
          ]
        },
        stats: {
          enabled: true,
          items: [
            { id: 's1', value: '14', label: 'Premios de Diseño Internacional' },
            { id: 's2', value: '65+', label: 'Identidades de Marca Creadas' },
            { id: 's3', value: '10 Años', label: 'De Trayectoria Creativa' }
          ]
        },
        testimonials: {
          enabled: true,
          title: 'Lo que opinan fundadores y directores de marketing.',
          items: [
            {
              id: 't1',
              author: 'Kenji Takahashi',
              name: 'Kenji Takahashi',
              role: 'Fundador y Director Creativo en Kanso Living',
              company: 'Kanso Living',
              quote: 'Trabajar con Estudio Forma fue un punto de inflexión para nuestra compañía. Captaron con una precisión milimétrica la sutileza que buscábamos y elevaron nuestra marca a nivel internacional.',
              avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
              rating: 5
            }
          ]
        },
        pricing: {
          enabled: true,
          title: 'Formatos de Colaboración de Diseño',
          billingCycle: 'monthly',
          plans: [
            {
              id: 'p1',
              name: 'Identidad Visual & Sistema de Marca',
              priceMonthly: '6.500€',
              priceAnnual: 'Proceso de 6 a 8 semanas',
              description: 'Para marcas que nacen o necesitan un reposicionamiento integral con fundamentos visuales sólidos.',
              features: ['Estrategia de marca y auditoría de posicionamiento', 'Logotipo, subsistemas y paleta cromática', 'Brand Book digital interactivo de 100+ páginas', 'Diseño de papelería básica y plantillas para redes sociales'],
              highlighted: false,
              ctaText: 'Solicitar Propuesta'
            },
            {
              id: 'p2',
              name: 'Identidad Integral + Packaging + Dirección de Arte',
              priceMonthly: '12.000€',
              priceAnnual: 'El servicio más completo del estudio',
              description: 'Universo visual 360° que incluye diseño de empaques, tipografía custom y dirección de campaña fotográfica.',
              features: ['Todo lo incluido en Identidad Visual', 'Línea de packaging completa con troqueles y artes finales', 'Diseño de tipografía corporativa a medida (OTF/WOFF)', 'Dirección de arte y producción de sesión fotográfica de producto'],
              highlighted: true,
              ctaText: 'Iniciar Proyecto Integral'
            }
          ]
        },
        faq: {
          enabled: true,
          title: 'Preguntas Frecuentes sobre el Proceso de Diseño',
          items: [
            {
              id: 'q1',
              question: '¿Cómo es el proceso de trabajo paso a paso con el estudio?',
              answer: '1) Fase de inmersión y estrategia de marca, 2) Presentación de dos caminos creativos conceptuales completos con prototipos reales, 3) Desarrollo en profundidad del camino elegido, 4) Entrega de artes finales y Brand Guidelines.'
            },
            {
              id: 'q2',
              question: '¿Cuántos proyectos asume el estudio simultáneamente?',
              answer: 'Para garantizar la máxima atención al detalle y dedicación de los directores de arte, solo aceptamos un máximo de 3 proyectos en paralelo por trimestre.'
            },
            {
              id: 'q3',
              question: '¿Nos entregan los archivos vectoriales editables y fuentes tipográficas?',
              answer: 'Sí. Todos los archivos maestros se entregan en formatos vectoriales abiertos (Illustrator, SVG, PDF) junto con la cesión total de derechos de explotación comercial.'
            },
            {
              id: 'q4',
              question: '¿Trabajan con clientes y marcas fuera de España?',
              answer: 'El 50% de nuestros clientes se encuentran en Reino Unido, Suiza, Estados Unidos y Japón. Trabajamos de forma fluida en inglés mediante reuniones virtuales y envíos físicos de muestras.'
            },
            {
              id: 'q5',
              question: '¿Realizan también el diseño y desarrollo del sitio web de la marca?',
              answer: 'Diseñamos la interfaz y dirección de arte web en Figma y colaboramos con estudios de desarrollo frontend de primer nivel para llevarla a código con animaciones fluidas.'
            },
            {
              id: 'q6',
              question: '¿Cómo se estructura el pago de los proyectos?',
              answer: 'Estructuramos los pagos en 3 hitos: 40% al inicio del proyecto, 30% a la aprobación del concepto visual y 30% restante a la entrega final de artes y archivos maestros.'
            }
          ]
        },
        ctaFinal: {
          enabled: true,
          title: 'Construyamos una marca que deje huella.',
          subtitle: 'Cuéntanos tu proyecto y agendaremos una videollamada para conocer vuestra visión.',
          primaryCta: { text: 'Iniciar Conversación con el Estudio', link: '#pricing' }
        },
        footer: {
          copyright: '© 2026 Estudio Forma Design S.L. Todos los derechos reservados.',
          legalLinks: [
            { label: 'Manifiesto de Diseño', href: '#manifiesto' },
            { label: 'Aviso Legal', href: '#legal' },
            { label: 'Privacidad', href: '#privacy' }
          ],
          socialLinks: [
            { platform: 'Instagram', url: 'https://instagram.com' },
            { platform: 'Behance', url: 'https://behance.net' }
          ]
        }
      }
    }
  },

  // 2. LUMIÈRE FILMS — Productora Audiovisual & Cine Publicitario
  {
    id: 'lumiere-films',
    name: 'Lumière Cinema Lab',
    tagline: 'Productora audiovisual cinematográfica, comerciales de televisión, fashion films y videoclips de autor',
    category: 'portfolio',
    thumbnail: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80',
    description: 'Estética de celuloide cinematográfico en negro analógico #0B0B0E y acento ámbar dorado #F59E0B, tipografía Cinzel & Outfit, showreel a pantalla completa en 4K, desglose de rodajes y equipo de cámaras ARRI/RED.',
    accentColor: '#F59E0B',
    theme: 'dark',
    defaultConfig: {
      templateId: 'lumiere-films',
      name: 'Lumière Cinema Lab Production',
      slug: 'lumiere-films',
      domain: 'lumierefilms.co',
      theme: 'dark',
      accentColor: '#F59E0B',
      fontFamily: "'Cinzel', Georgia, serif",
      borderRadius: 14,
      published: true,
      sectionOrder: [
        'navbar',
        'hero',
        'logos',
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
        title: 'Lumière Cinema Lab — Productora Audiovisual & Cine Publicitario',
        description: 'Rodajes cinematográficos en 35mm y digital de alta gama para comerciales, marcas de lujo y artistas.',
        keywords: 'productora audiovisual, cine publicitario, spot television, fashion film, camaras arri alexa 35, correccion de color davinci'
      },
      sections: {
        navbar: {
          brandName: 'Lumière',
          logoText: 'LUMIÈRE // CINEMA LAB',
          ctaText: 'Solicitar Presupuesto de Rodaje',
          ctaLink: '#pricing',
          links: [
            { label: 'Showreel', href: '#gallery' },
            { label: 'Equipo Técnico', href: '#features' },
            { label: 'Film Destacado', href: '#product' },
            { label: 'Servicios', href: '#pricing' }
          ],
          glassBlur: true,
          sticky: true
        },
        hero: {
          enabled: true,
          badge: 'Selección Oficial Festival de Cannes Lions 2025 • Cámaras ARRI Alexa 35',
          kicker: 'Narrativa Visual Cinematográfica',
          title: 'Historias que conmueven y trascienden',
          highlightTitle: 'a través de la luz y el grano.',
          subtitle: 'Producimos comerciales de alto impacto, documentales de marca y videoclips musicales combinando ópticas anamórficas clásicas con postproducción y etalonaje de precisión.',
          primaryCta: { text: 'Ver Showreel 2026 (4K)', link: '#gallery' },
          secondaryCta: { text: 'Servicios de Producción →', link: '#pricing' },
          imageUrl: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1600&q=80',
          style: 'centered'
        },
        logos: {
          enabled: true,
          title: 'MARCAS Y CLIENTES QUE HAN RODADO CON LUMIÈRE',
          items: [
            { id: 'l1', name: 'Porsche Iberia', tagline: 'Comercial TV' },
            { id: 'l2', name: 'Loewe Perfumes', tagline: 'Fashion Film' },
            { id: 'l3', name: 'Sony Music', tagline: 'Videoclips Oficiales' }
          ]
        },
        gallery: {
          enabled: true,
          title: 'Trabajos Cinematográficos Recientes',
          images: [
            { id: 'g1', url: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80', caption: 'The Horizon: Comercial de automoción rodado en Islandia con ARRI Alexa 35' },
            { id: 'g2', url: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=800&q=80', caption: 'Silencio: Fashion film para firma de alta costura rodado en 35mm analógico' }
          ]
        },
        bentoFeatures: {
          enabled: true,
          kicker: 'Capacidad de Producción',
          title: 'Control total de la cadena de valor desde el guion hasta el máster.',
          subtitle: 'Equipo propio de directores, directores de fotografía (DoP), gaffers y coloristas certificados.',
          items: [
            {
              id: 'f1',
              title: 'Cámaras ARRI Alexa 35 & Ópticas Anamórficas Cooke',
              description: 'Rango dinámico de 17 pasos y texturas analógicas inigualables para un look cinematográfico auténtico.',
              icon: 'Video',
              tag: 'ARRI & Cooke',
              colSpan: 2,
              statNumber: '17 Stops',
              statLabel: 'De rango dinámico para captar sombras y luces perfectas'
            },
            {
              id: 'f2',
              title: 'Etalonaje y Color en DaVinci Resolve Studio',
              description: 'Sala de corrección de color calibrada según el estándar DCI-P3 para másters de cine y plataformas de streaming.',
              icon: 'Sparkles',
              tag: 'Color Grading',
              colSpan: 1
            },
            {
              id: 'f3',
              title: 'Diseño Sonoro y Mezcla Dolby Atmos',
              description: 'Foley artesanal, bandas sonoras compuestas a medida con instrumentos reales y mezcla envolvente multicanal.',
              icon: 'Volume2',
              tag: 'Dolby Atmos',
              colSpan: 1
            },
            {
              id: 'f4',
              title: 'Localizaciones Singulares y Permisos de Rodaje',
              description: 'Scouting de localizaciones exclusivas en España, Portugal e Islandia con tramitación integral de seguros y permisos.',
              icon: 'MapPin',
              tag: 'Scouting Global',
              colSpan: 2,
              statNumber: '100%',
              statLabel: 'De gestión de permisos, catering de rodaje y transporte de equipo'
            }
          ]
        },
        productHighlight: {
          enabled: true,
          badge: 'Campaña Destacada',
          kicker: 'Comercial de TV & Cine',
          title: 'The Silent Journey — Spot para Loewe Perfumes.',
          subtitle: 'Rodado íntegramente en las dunas de Fuerteventura al amanecer.',
          description: 'Una pieza poética de 90 segundos que explora la memoria olfativa. Rodada con ópticas anamórficas vintage Kowa de 1970 y banda sonora interpretada por un cuarteto de cuerda en directo.',
          imageUrl: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=1400&q=80',
          specs: [
            { label: 'Formato', value: 'Digital 4.6K ProRes 4444XQ Anamórfico 2:39:1' },
            { label: 'Equipo de Rodaje', value: '32 profesionales en set durante 3 jornadas' },
            { label: 'Premios', value: 'Mejor Fotografía en los Premios del Club de Creativos (c de c) 2025' }
          ]
        },
        stats: {
          enabled: true,
          items: [
            { id: 's1', value: '180+', label: 'Spots y Films Producidos' },
            { id: 's2', value: '8', label: 'Premios en Festivales de Cine Publicitario' },
            { id: 's3', value: '12 Años', label: 'Detrás de las Cámaras' }
          ]
        },
        testimonials: {
          enabled: true,
          title: 'Palabras de directores de marketing y agencias.',
          items: [
            {
              id: 't1',
              author: 'Beatriz Santamaría',
              name: 'Beatriz Santamaría',
              role: 'Directora de Marca en Loewe Beauty',
              company: 'Loewe Beauty',
              quote: 'Lumière aportó una sensibilidad plástica y un nivel de producción deslumbrante a nuestra última campaña. El spot no parece un anuncio publicitario, sino una obra de arte cinematográfica.',
              avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
              rating: 5
            }
          ]
        },
        pricing: {
          enabled: true,
          title: 'Formatos de Producción Audiovisual',
          billingCycle: 'monthly',
          plans: [
            {
              id: 'p1',
              name: 'Brand Film / Documental Corto (1 a 3 Min)',
              priceMonthly: '9.500€',
              priceAnnual: '2 jornadas de rodaje en localización',
              description: 'Para marcas que desean contar su historia de fundación o proceso artesanal con factura de cine.',
              features: ['Guion cinematográfico y storyboard detallado', '2 días de rodaje con equipo ARRI Alexa', 'Edición, diseño sonoro y música original licenciada', 'Etalonaje en DaVinci Resolve con entregables para web y redes'],
              highlighted: false,
              ctaText: 'Pedir Cotización Brand Film'
            },
            {
              id: 'p2',
              name: 'Comercial Publicitario TV & Cine',
              priceMonthly: 'A Presupuesto',
              priceAnnual: 'Producción de alta escala a medida',
              description: 'Campaña completa de gran envergadura para televisión, cines y plataformas digitales internacionales.',
              features: ['Equipo completo de 25+ personas en set', 'Casting de actores profesionales y estilismo a medida', 'Postproducción VFX, 3D y mezcla Dolby Atmos', 'Másteres DCI para salas de cine y emisión en TV (EBU R128)'],
              highlighted: true,
              ctaText: 'Planificar Rodaje de Spot'
            }
          ]
        },
        faq: {
          enabled: true,
          title: 'Preguntas Frecuentes sobre Producción',
          items: [
            {
              id: 'q1',
              question: '¿Cuánto tiempo de antelación se necesita para preparar un rodaje?',
              answer: 'El período de preproducción recomendado (casting, scouting de localizaciones, permisos y ensayos) es de 3 a 5 semanas para spots publicitarios y brand films de alta calidad.'
            },
            {
              id: 'q2',
              question: '¿Producen también las versiones adaptadas para redes sociales (9:16 vertical)?',
              answer: 'Sí. Planificamos los encuadres de cámara para extraer simultáneamente versiones horizontales 16:9 y verticales 9:16 en alta resolución para Instagram Reels y TikTok.'
            },
            {
              id: 'q3',
              question: '¿Qué incluye la fase de postproducción?',
              answer: 'Montaje de edición, corrección de color profesional, limpieza de audio y doblaje, composición de banda sonora original o gestión de derechos musicales y grafismo animado.'
            },
            {
              id: 'q4',
              question: '¿Disponen de drones certificados para planos aéreos de cine?',
              answer: 'Contamos con pilotos de dron certificados por AESA y drones pesados capaces de volar cámaras de cine con ópticas anamórficas de forma segura en entornos naturales y urbanos.'
            },
            {
              id: 'q5',
              question: '¿Pueden gestionar rodajes en localizaciones internacionales?',
              answer: 'Sí. Hemos rodado proyectos en más de 12 países, coordinando equipos locales de apoyo, transporte de material audiovisual asegurado y visados de trabajo.'
            },
            {
              id: 'q6',
              question: '¿Cómo se formaliza la reserva de fechas de rodaje?',
              answer: 'Tras la aprobación del presupuesto y cronograma, se formaliza el contrato de producción con el abono del 50% de preproducción para asegurar disponibilidad de equipo y actores.'
            }
          ]
        },
        ctaFinal: {
          enabled: true,
          title: 'Llevemos tu visión a la gran pantalla.',
          subtitle: 'Cuéntanos la historia que quieres contar y te presentaremos un dossier de dirección de arte.',
          primaryCta: { text: 'Agendar Reunión de Guion', link: '#pricing' }
        },
        footer: {
          copyright: '© 2026 Lumière Cinema Lab S.L. Productora Audiovisual.',
          legalLinks: [
            { label: 'Dossier de Equipamiento', href: '#equipo' },
            { label: 'Aviso Legal', href: '#legal' },
            { label: 'Privacidad', href: '#privacy' }
          ],
          socialLinks: [
            { platform: 'Vimeo', url: 'https://vimeo.com' },
            { platform: 'Instagram', url: 'https://instagram.com' }
          ]
        }
      }
    }
  },

  // 3. KROMA AGENCY — Diseño de Producto Digital & UI/UX
  {
    id: 'kroma-agency',
    name: 'Kroma Creative Lab',
    tagline: 'Agencia de diseño de producto digital, sistemas de diseño escalables y experiencias interactivas de vanguardia',
    category: 'portfolio',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    description: 'Estética en violeta eléctrico #8B5CF6 y modo oscuro de alta tecnología, tipografía Space Grotesk, interfaces de aplicaciones móviles premiadas en Awwwards, sistemas de diseño en Figma y métricas de retención de usuarios.',
    accentColor: '#8B5CF6',
    theme: 'dark',
    defaultConfig: {
      templateId: 'kroma-agency',
      name: 'Kroma Creative Lab UI/UX',
      slug: 'kroma-lab',
      domain: 'kromalab.io',
      theme: 'dark',
      accentColor: '#8B5CF6',
      fontFamily: "'Space Grotesk', sans-serif",
      borderRadius: 16,
      published: true,
      sectionOrder: [
        'navbar',
        'hero',
        'logos',
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
        title: 'Kroma Creative Lab — Diseño de Producto Digital & UI/UX de Élite',
        description: 'Diseñamos aplicaciones móviles y plataformas SaaS que enamoran a los usuarios y multiplican las conversiones.',
        keywords: 'diseño de producto digital, agencia ui ux, diseño figma, sistemas de diseño, diseño saas, awwwards agency'
      },
      sections: {
        navbar: {
          brandName: 'Kroma',
          logoText: 'KROMA // LAB',
          ctaText: 'Iniciar Sprint de Producto',
          ctaLink: '#pricing',
          links: [
            { label: 'Apps & Casos', href: '#gallery' },
            { label: 'Capacidades', href: '#features' },
            { label: 'Sistemas de Diseño', href: '#product' },
            { label: 'Tarifas', href: '#pricing' }
          ],
          glassBlur: true,
          sticky: true
        },
        hero: {
          enabled: true,
          badge: 'Agencia del Año en Awwwards & FWA • Más de 40 Apps Lanzadas',
          kicker: 'Diseño de Producto Digital & UX Research',
          title: 'Convertimos software complejo en',
          highlightTitle: 'experiencias intuitivas y deseadas.',
          subtitle: 'Rediseñamos productos digitales para startups respaldadas por fondos Tier 1 y gigantes tecnológicos, combinando investigación de usuarios rigurosa con interfaces de pulido milimétrico.',
          primaryCta: { text: 'Explorar Apps Diseñadas', link: '#gallery' },
          secondaryCta: { text: 'Ver Metodología de Sprints →', link: '#pricing' },
          imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80',
          style: 'centered'
        },
        logos: {
          enabled: true,
          title: 'STARTUPS Y SCALE-UPS QUE HAN ESCALADO CON KROMA',
          items: [
            { id: 'l1', name: 'Revolut Partner', tagline: 'Fintech UI' },
            { id: 'l2', name: 'Notion Community', tagline: 'Template Design' },
            { id: 'l3', name: 'Y Combinator W25', tagline: 'Batch Design Partner' }
          ]
        },
        gallery: {
          enabled: true,
          title: 'Casos de Estudio de Producto Digital',
          images: [
            { id: 'g1', url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80', caption: 'Vault Pay: Aplicación fintech de banca privada con gráficos de inversión en tiempo real' },
            { id: 'g2', url: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=800&q=80', caption: 'Nexus Core: Suite de productividad corporativa con modo oscuro y microinteracciones fluidas' }
          ]
        },
        bentoFeatures: {
          enabled: true,
          kicker: 'Capacidades de Diseño',
          title: 'De la arquitectura de información al prototipo interactivo listo para código.',
          subtitle: 'Diseñamos sistemas modulares pensados para que tus desarrolladores programen a doble velocidad.',
          items: [
            {
              id: 'f1',
              title: 'Design Systems en Figma con Tokens Variables',
              description: 'Componentes accesibles (WCAG AAA) con soporte nativo de modo claro/oscuro, auto-layout y variantes completas.',
              icon: 'Layers',
              tag: 'Figma Variables',
              colSpan: 2,
              statNumber: '250+',
              statLabel: 'Componentes interactivos en la librería de diseño modular'
            },
            {
              id: 'f2',
              title: 'UX Research & Test de Usabilidad con Usuarios Reales',
              description: 'Pruebas con mapas de calor, grabaciones de sesiones y entrevistas para eliminar fricciones antes de escribir código.',
              icon: 'Users',
              tag: 'Test con Usuarios',
              colSpan: 1
            },
            {
              id: 'f3',
              title: 'Microinteracciones y Prototipos en Motion',
              description: 'Animaciones de transición fluidas a 60 fps exportables directamente a JSON (Lottie) o código React.',
              icon: 'Sparkles',
              tag: 'Motion 60fps',
              colSpan: 1
            },
            {
              id: 'f4',
              title: 'Aumento Comprobado en Tasas de Conversión',
              description: 'Nuestros rediseños de onboarding y checkout aumentan la activación de usuarios en una media del 42%.',
              icon: 'TrendingUp',
              tag: '+42% Conversión',
              colSpan: 2,
              statNumber: '+42%',
              statLabel: 'De incremento medio en tasa de activación de usuarios nuevos'
            }
          ]
        },
        productHighlight: {
          enabled: true,
          badge: 'Rediseño Destacado',
          kicker: 'Fintech & Criptoactivos',
          title: 'Rediseño de Vault Pay: De 0 a 1M de Usuarios Activos.',
          subtitle: 'Simplificación radical de flujos de transferencias internacionales y custodia de activos.',
          description: 'Diseñamos la aplicación de principio a fin en 8 semanas de sprint. Redujimos el tiempo necesario para completar una transferencia transfronteriza de 7 clics a solo 2 pasos con confirmación biométrica.',
          imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80',
          specs: [
            { label: 'Retención D30', value: 'Aumento del 31% al 58% en retención al día 30' },
            { label: 'Entregables', value: 'Figma maestro de 85 pantallas, Design System completo y guía de animaciones' },
            { label: 'Premio', value: 'Site of the Day en Awwwards & Best Mobile UI en FWA' }
          ]
        },
        stats: {
          enabled: true,
          items: [
            { id: 's1', value: '40+', label: 'Apps y Productos SaaS Lanzados' },
            { id: 's2', value: '1M+', label: 'Usuarios Diarios en Nuestras Interfaces' },
            { id: 's3', value: '18', label: 'Premios Awwwards y FWA' }
          ]
        },
        testimonials: {
          enabled: true,
          title: 'Lo que opinan Product Managers y Fundadores.',
          items: [
            {
              id: 't1',
              author: 'Sergio Valdés',
              name: 'Sergio Valdés',
              role: 'CPO & Cofundador en Vault Pay',
              company: 'Vault Pay',
              quote: 'Kroma no son solo diseñadores que hacen pantallas bonitas: entienden la métrica de negocio y los cuellos de botella de desarrollo mejor que nadie. Su Design System nos ahorró meses de iteración.',
              avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
              rating: 5
            }
          ]
        },
        pricing: {
          enabled: true,
          title: 'Modelos de Contratación de Producto',
          billingCycle: 'monthly',
          plans: [
            {
              id: 'p1',
              name: 'Design Sprint MVP (4 Semanas)',
              priceMonthly: '7.500€',
              priceAnnual: 'Para startups que lanzan un producto nuevo',
              description: 'Desde la conceptualización del flujo clave hasta el prototipo de alta fidelidad listo para desarrollo.',
              features: ['Auditoría de UX e investigación de competencia', 'Wireframes interactivos de baja fidelidad', 'Diseño de 20 a 30 pantallas de alta fidelidad en Figma', 'Design System básico con componentes clave'],
              highlighted: false,
              ctaText: 'Reservar Sprint MVP'
            },
            {
              id: 'p2',
              name: 'Product Redesign Completo & Design System',
              priceMonthly: '14.000€',
              priceAnnual: 'Para scale-ups que necesitan escalar',
              description: 'Rediseño total de la plataforma web y app móvil con sistema de diseño modular de 200+ componentes.',
              features: ['Investigación con usuarios y tests de usabilidad reales', 'Rediseño completo de flujos de onboarding y producto (60+ pantallas)', 'Design System integral con tokens de color y tipografía', 'Acompañamiento a los desarrolladores durante el sprint de código'],
              highlighted: true,
              ctaText: 'Iniciar Rediseño de Producto'
            }
          ]
        },
        faq: {
          enabled: true,
          title: 'Preguntas Frecuentes sobre el Servicio',
          items: [
            {
              id: 'q1',
              question: '¿En qué formato se entregan los archivos de diseño a los programadores?',
              answer: 'Entregamos el archivo maestro de Figma organizado por páginas, flujos de usuario comentados, Design System estructurado con Auto-Layout y documentación técnica de estados (hover, active, disabled, loading).'
            },
            {
              id: 'q2',
              question: '¿Participan en reuniones con el equipo de frontend durante el desarrollo?',
              answer: 'Sí. Realizamos sesiones semanales de Design QA con los ingenieros para revisar las ramas de staging y asegurar que la interfaz implementada sea un calco exacto del diseño en Figma.'
            },
            {
              id: 'q3',
              question: '¿Diseñan tanto para iOS, Android como plataformas web SaaS?',
              answer: 'Sí. Aplicamos las guías de diseño nativo de Apple (Human Interface Guidelines) y Google (Material Design 3), además de crear interfaces web responsivas optimizadas para pantallas de escritorio.'
            },
            {
              id: 'q4',
              question: '¿Realizan pruebas con usuarios reales antes del lanzamiento?',
              answer: 'Sí. Reclutamos paneles de usuarios representativos de vuestro público objetivo y ejecutamos pruebas de tareas cronometradas para validar la intuición de los flujos antes de picar código.'
            },
            {
              id: 'q5',
              question: '¿Cuál es la disponibilidad de inicio de un nuevo proyecto?',
              answer: 'Planificamos nuestros sprints con un margen de 2 a 3 semanas de antelación para asegurar que el equipo sénior esté 100% enfocado en vuestro producto.'
            },
            {
              id: 'q6',
              question: '¿Cómo se solicita una propuesta personalizada?',
              answer: 'Completa el formulario indicando el enlace a tu producto actual o el resumen de la idea. Te responderemos en menos de 24 horas con una estimación de calendario y presupuesto.'
            }
          ]
        },
        ctaFinal: {
          enabled: true,
          title: 'Diseñemos el producto digital que tus usuarios amarán.',
          subtitle: 'Agenda un sprint de descubrimiento de 30 minutos con nuestros directores de diseño.',
          primaryCta: { text: 'Agendar Sprint de Producto', link: '#pricing' }
        },
        footer: {
          copyright: '© 2026 Kroma Creative Lab S.L. Todos los derechos reservados.',
          legalLinks: [
            { label: 'Design Tokens Hub', href: '#tokens' },
            { label: 'Aviso Legal', href: '#legal' },
            { label: 'Privacidad', href: '#privacy' }
          ],
          socialLinks: [
            { platform: 'Twitter', url: 'https://twitter.com' },
            { platform: 'Dribbble', url: 'https://dribbble.com' }
          ]
        }
      }
    }
  },

  // 4. MONO FRAME PHOTO — Fotografía Documental & Arquitectura
  {
    id: 'mono-photo',
    name: 'Mono Frame Photo',
    tagline: 'Estudio de fotografía de arquitectura contemporánea, retrato editorial y ensayo documental analógico en blanco y negro',
    category: 'portfolio',
    thumbnail: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=1200&q=80',
    description: 'Estética en escala de grises de museo #0B0B0E y acento plata platino #E2E8F0, tipografía Inter & Lora, visor de fotografías en gran formato, catálogo de copias de autor en papel baritado y exposiciones.',
    accentColor: '#E2E8F0',
    theme: 'dark',
    defaultConfig: {
      templateId: 'mono-photo',
      name: 'Mono Frame Photography Studio',
      slug: 'mono-photo',
      domain: 'monophoto.art',
      theme: 'dark',
      accentColor: '#E2E8F0',
      fontFamily: "'Lora', Georgia, serif",
      borderRadius: 14,
      published: true,
      sectionOrder: [
        'navbar',
        'hero',
        'logos',
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
        title: 'Mono Frame Photo — Fotografía de Arquitectura & Retrato de Autor',
        description: 'Fotografía en gran formato analógico y digital para arquitectos, editoriales y coleccionistas de arte.',
        keywords: 'fotografia arquitectura, fotografo de autor, retrato blanco y negro, copias en papel baritado, libro de fotografia'
      },
      sections: {
        navbar: {
          brandName: 'Mono',
          logoText: 'MONO FRAME // PHOTO',
          ctaText: 'Comprar Copias de Autor',
          ctaLink: '#pricing',
          links: [
            { label: 'Galería', href: '#gallery' },
            { label: 'Técnica & Cámara', href: '#features' },
            { label: 'Serie Expuesta', href: '#product' },
            { label: 'Copias de Colección', href: '#pricing' }
          ],
          glassBlur: true,
          sticky: true
        },
        hero: {
          enabled: true,
          badge: 'Premio Hasselblad Masters 2025 • Copias Firmadas en Papel Baritado',
          kicker: 'Luz, Geometría & Silencio',
          title: 'La arquitectura y la sombra',
          highlightTitle: 'capturadas en su máxima pureza.',
          subtitle: 'Fotografía de autor en cámaras de gran formato y película analógica de media pulgada para documentar proyectos de arquitectura de vanguardia y retratos de mirada profunda.',
          primaryCta: { text: 'Explorar Galería de Obras', link: '#gallery' },
          secondaryCta: { text: 'Encargar Reportaje de Arquitectura →', link: '#pricing' },
          imageUrl: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=1600&q=80',
          style: 'centered'
        },
        logos: {
          enabled: true,
          title: 'PUBLICADO EN LAS PRINCIPALES REVISTAS DE ARQUITECTURA DEL MUNDO',
          items: [
            { id: 'l1', name: 'Arquitectura Viva', tagline: 'Portada Oficial' },
            { id: 'l2', name: 'Domus Magazine', tagline: 'Ensayo Editorial' },
            { id: 'l3', name: 'The Architectural Review', tagline: 'Selección de Autor' }
          ]
        },
        gallery: {
          enabled: true,
          title: 'Series Fotográficas de Arquitectura y Sombra',
          images: [
            { id: 'g1', url: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=800&q=80', caption: 'Líneas de Hormigón: Estudio de sombras en la obra de Tadao Ando (Tokio)' },
            { id: 'g2', url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80', caption: 'Retrato de Ebanista en su Taller: Iluminación natural de claraboya en 120mm' }
          ]
        },
        bentoFeatures: {
          enabled: true,
          kicker: 'Maestría Fotográfica',
          title: 'El rigor del gran formato y el control absoluto de la perspectiva.',
          subtitle: 'Objetivos descentrables Tilt-Shift y película analógica de haluros de plata.',
          items: [
            {
              id: 'f1',
              title: 'Cámaras de Banco Óptico y Sensor de 100 Megapíxeles',
              description: 'Corrección de líneas de fuga y paralelismos arquitectónicos perfectos en el momento de la toma sin distorsiones digitales.',
              icon: 'Camera',
              tag: '100 Megapíxeles',
              colSpan: 2,
              statNumber: '100 MP',
              statLabel: 'De resolución para reproducciones murales de más de 3 metros'
            },
            {
              id: 'f2',
              title: 'Impresión Fine Art en Papel Baritado de Algodón',
              description: 'Tirajes limitados realizados a mano en laboratorio con tintas pigmentadas de archivo garantizadas durante más de 100 años.',
              icon: 'Printer',
              tag: 'Hahnemühle 310g',
              colSpan: 1
            },
            {
              id: 'f3',
              title: 'Estudio de la Luz Solar en Cada Estación',
              description: 'Planificación astronómica de la posición del sol para fotografiar cada fachada en su instante de mayor expresividad escultórica.',
              icon: 'Sun',
              tag: 'Luz Natural',
              colSpan: 1
            },
            {
              id: 'f4',
              title: 'Certificado de Autenticidad con Sello en Seco',
              description: 'Cada copia de colección incluye certificado numerado y firmado por el autor con holograma antifraude Hahnemühle.',
              icon: 'CheckCircle',
              tag: 'Copias Numeradas',
              colSpan: 2,
              statNumber: '25 Max',
              statLabel: 'Copias únicas por fotografía para asegurar la exclusividad'
            }
          ]
        },
        productHighlight: {
          enabled: true,
          badge: 'Serie Monográfica',
          kicker: 'Libro de Fotografía de Colección',
          title: 'Monografía "Geometría del Silencio".',
          subtitle: 'Edición limitada a 300 ejemplares encuadernados a mano en tela de lino negro.',
          description: 'Recoge 10 años de documentación de obras de arquitectura brutalista y minimalista en 8 países. Impreso en bitono en papel japonés de 180 gsm con prólogo del arquitecto Alberto Campo Baeza.',
          imageUrl: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1400&q=80',
          specs: [
            { label: 'Páginas', value: '240 páginas en gran formato (30 x 38 cm)' },
            { label: 'Encuadernación', value: 'Tapa dura en lino con golpe en seco y sobrecubierta de papel vegetal' },
            { label: 'Incluye', value: 'Una copia original de 20x25cm firmada y numerada' }
          ]
        },
        stats: {
          enabled: true,
          items: [
            { id: 's1', value: '25', label: 'Copias Máximas por Serie' },
            { id: 's2', value: '100 Años', label: 'De Durabilidad Garantizada' },
            { id: 's3', value: '12', label: 'Exposiciones en Galerías' }
          ]
        },
        testimonials: {
          enabled: true,
          title: 'Lo que opinan arquitectos y coleccionistas.',
          items: [
            {
              id: 't1',
              author: 'Álvaro Siza Studio',
              name: 'Álvaro Siza Studio',
              role: 'Estudio de Arquitectura Oporto',
              company: 'Siza Arquitectura',
              quote: 'Mono Frame no solo documenta un edificio: es capaz de captar la atmósfera, el peso del hormigón y el silencio del espacio interior como ningún otro fotógrafo.',
              avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
              rating: 5
            }
          ]
        },
        pricing: {
          enabled: true,
          title: 'Copias de Colección y Reportajes de Arquitectura',
          billingCycle: 'monthly',
          plans: [
            {
              id: 'p1',
              name: 'Copia Fine Art de Colección (50 x 70 cm)',
              priceMonthly: '450€',
              priceAnnual: 'Serie limitada a 25 ejemplares firmados',
              description: 'Fotografía en papel baritado Hahnemühle Photo Rag Baryta 315g con certificado de autenticidad.',
              features: ['Impresión giclée con tintas pigmentadas minerales', 'Passepartout de conservación libre de ácido', 'Certificado numerado con sello en seco del autor', 'Envío en tubo rígido de madera con seguro'],
              highlighted: false,
              ctaText: 'Adquirir Copia de Colección'
            },
            {
              id: 'p2',
              name: 'Reportaje Fotográfico de Arquitectura Completo',
              priceMonthly: '2.800€',
              priceAnnual: '2 jornadas de toma de luz día y noche',
              description: 'Documentación fotográfica integral de una obra arquitectónica para publicación editorial y premios.',
              features: ['2 días completos de tomas con luz de mañana, tarde y noche', 'Toma en gran formato digital de 100 MP y objetivos descentrables', 'Entrega de 30 fotografías seleccionadas y retocadas con mimo', 'Cesión completa de derechos de publicación editorial y web'],
              highlighted: true,
              ctaText: 'Encargar Reportaje de Obra'
            }
          ]
        },
        faq: {
          enabled: true,
          title: 'Preguntas Frecuentes sobre Copias y Encargos',
          items: [
            {
              id: 'q1',
              question: '¿Cómo se garantiza la durabilidad de las copias impresas?',
              answer: 'Utilizamos papel 100% algodón libre de blanqueantes ópticos y tintas de pigmentos minerales que cumplen con la norma ISO 9706 de permanencia museística, garantizando más de un siglo sin degradación de color.'
            },
            {
              id: 'q2',
              question: '¿Cuánto tiempo lleva la realización de un reportaje de arquitectura?',
              answer: 'Estudiamos la meteorología para elegir días con condiciones de luz óptimas. Las tomas se realizan en 2 jornadas y el revelado y procesado de archivos se entrega en un plazo de 10 a 14 días.'
            },
            {
              id: 'q3',
              question: '¿Se pueden solicitar copias enmarcadas con vidrio de museo?',
              answer: 'Sí. Ofrecemos servicio de enmarcación a medida en madera de roble natural o aluminio anodizado negro con vidrio antirreflejos Artglass de protección UV del 99%.'
            },
            {
              id: 'q4',
              question: '¿Realizan reportajes fuera del territorio nacional?',
              answer: 'Viajamos habitualmente a proyectos en toda Europa, Latinoamérica y Japón para documentar obras singulares.'
            },
            {
              id: 'q5',
              question: '¿Las fotografías se entregan con licencia para revistas de arquitectura?',
              answer: 'El encargo de un reportaje incluye la cesión ilimitada de derechos de reproducción para dosieres de prensa, redes del estudio, web y envío a concursos internacionales de arquitectura.'
            },
            {
              id: 'q6',
              question: '¿Cómo se envían las copias de arte a domicilio?',
              answer: 'Se protegen con papel de seda neutro y se embalan en cajas de madera rígida aseguradas contra cualquier daño durante el transporte.'
            }
          ]
        },
        ctaFinal: {
          enabled: true,
          title: 'Inmortalicemos tu proyecto en luz y sombra.',
          subtitle: 'Consulta disponibilidad para reportajes de arquitectura o adquiere copias de colección.',
          primaryCta: { text: 'Contactar con el Fotógrafo', link: '#pricing' }
        },
        footer: {
          copyright: '© 2026 Mono Frame Photography Studio. Todos los derechos reservados.',
          legalLinks: [
            { label: 'Certificados Hahnemühle', href: '#certificados' },
            { label: 'Aviso Legal', href: '#legal' },
            { label: 'Privacidad', href: '#privacy' }
          ],
          socialLinks: [
            { platform: 'Instagram', url: 'https://instagram.com' }
          ]
        }
      }
    }
  }
];
