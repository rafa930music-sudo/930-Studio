import { TemplateDefinition } from '../../types';

export const LUXURY_TEMPLATES: TemplateDefinition[] = [
  // 8. AURUM — Moda de Alta Costura & Colección de Lujo
  {
    id: 'aurum-luxury',
    name: 'Aurum',
    tagline: 'Maison de alta costura con estética de pasarela parisina, seda salvaje, cachemira italiana y fotografía editorial',
    category: 'luxury',
    thumbnail: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=80',
    description: 'Negro azabache con acento dorado #D4AF37, tipografía Playfair / Inter, hero a pantalla completa sobre pasarela, carrusel de colecciones de temporada, galería de piezas únicas, split de artesanía milanesa y newsletter VIP.',
    accentColor: '#D4AF37',
    theme: 'dark',
    defaultConfig: {
      templateId: 'aurum-luxury',
      name: 'Aurum Haute Couture',
      slug: 'aurum-couture',
      domain: 'aurumcouture.com',
      theme: 'dark',
      accentColor: '#D4AF37',
      fontFamily: 'Inter, -apple-system, sans-serif',
      borderRadius: 12,
      published: true,
      sectionOrder: [
        'navbar',
        'hero',
        'slider',
        'bentoFeatures',
        'gallery',
        'productHighlight',
        'stats',
        'testimonials',
        'faq',
        'ctaFinal',
        'footer'
      ],
      seo: {
        title: 'Aurum Haute Couture — Colección Invierno 2026 en Seda & Cachemira',
        description: 'Prendas confeccionadas a mano en Milán con tejidos nobles y detalles en oro de 24 quilates.',
        keywords: 'alta costura, moda de lujo, seda, cachemira, desfile paris, milan, pasarela'
      },
      sections: {
        navbar: {
          brandName: 'Aurum',
          logoText: 'AURUM MILANO',
          ctaText: 'Cita Privada en Boutique',
          ctaLink: '#contact',
          links: [
            { label: 'Colección', href: '#slider' },
            { label: 'Savoir-Faire', href: '#features' },
            { label: 'Lookbook', href: '#gallery' },
            { label: 'El Atelier', href: '#product' },
            { label: 'Boutiques', href: '#faq' }
          ],
          glassBlur: true,
          sticky: true
        },
        hero: {
          enabled: true,
          badge: 'Défilé Paris • Automne/Hiver 2026',
          kicker: 'Maison de Haute Couture',
          title: 'Elegancia atemporal.',
          highlightTitle: 'Belleza que trasciende.',
          subtitle: 'Piezas únicas diseñadas para trascender generaciones. Confeccionadas a mano en nuestro atelier histórico de Milán con los tejidos más puros del mundo.',
          primaryCta: { text: 'Descubrir la Nueva Colección', link: '#slider' },
          secondaryCta: { text: 'Solicitar Pase al Desfile Privado →', link: '#contact' },
          imageUrl: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1600&q=80',
          style: 'centered'
        },
        slider: {
          enabled: true,
          kicker: 'Línea de Temporada',
          title: 'Las siluetas icónicas del invierno.',
          subtitle: 'Desliza para explorar los vestidos y abrigos protagonistas de la pasarela de París.',
          autoplay: true,
          slides: [
            {
              id: 'sl_1',
              title: 'Robe du Soir — Seda Salvaje & Hilos de Oro',
              subtitle: 'Vestido de noche drapeado a mano con espalda descubierta y cola estructurada de 2.4 metros.',
              tag: 'Pieza de Pasarela',
              imageUrl: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80',
              ctaText: 'Ver Detalles del Vestido',
              ctaLink: '#contact'
            },
            {
              id: 'sl_2',
              title: 'Manteau Impérial — Cachemira Loro Piana Pura',
              subtitle: 'Abrigo sastre cruzado con solapas arquitectónicas y forro de satén italiano bordado a mano.',
              tag: 'Edición Limitada',
              imageUrl: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1200&q=80',
              ctaText: 'Ver Detalles del Abrigo',
              ctaLink: '#contact'
            },
            {
              id: 'sl_3',
              title: 'Tailleur Sartorial — Lana Fría & Botones de Nácar',
              subtitle: 'Traje de dos piezas con corte de precisión masculina reinterpretado para la silueta femenina.',
              tag: 'Icono Aurum',
              imageUrl: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=80',
              ctaText: 'Ver Detalles del Traje',
              ctaLink: '#contact'
            }
          ]
        },
        bentoFeatures: {
          enabled: true,
          kicker: 'El Savoir-Faire Aurum',
          title: 'El arte de la perfección artesanal.',
          subtitle: 'Cada puntada encarna siglos de tradición textil perfeccionada por maestras costureras.',
          items: [
            {
              id: 'f1',
              title: 'Tejidos Nobles de Origen Certificado',
              description: 'Seda de Como, cachemira de Mongolia peinada a mano y lino belga hilado en telares de baja velocidad.',
              icon: 'Sparkles',
              tag: '100% Pura Materia',
              colSpan: 2,
              statNumber: '120+',
              statLabel: 'Horas de confección manual por vestido'
            },
            {
              id: 'f2',
              title: 'Patronaje Anatómico de Precisión',
              description: 'Modelado directo sobre maniquí de alta costura para lograr una caída escultural que acompaña el movimiento.',
              icon: 'Layers',
              tag: 'Corte a Medida',
              colSpan: 1
            },
            {
              id: 'f3',
              title: 'Bordados con Hilo de Oro de 24k',
              description: 'Orfebrería textil realizada punto por punto por los mismos talleres que visten a las cortes europeas.',
              icon: 'Award',
              tag: 'Bordado Tradicional',
              colSpan: 1
            },
            {
              id: 'f4',
              title: 'Servicio Bespoke & Cita en Salón Privado',
              description: 'Atención personalizada por el director de sastrería con pruebas privadas en París, Milán, Londres y Nueva York.',
              icon: 'HeartHandshake',
              tag: 'Servicio VIP',
              colSpan: 2,
              statNumber: '12',
              statLabel: 'Salones privados exclusivos en las principales capitales'
            }
          ]
        },
        gallery: {
          enabled: true,
          kicker: 'Lookbook Editorial',
          title: 'Fotografía capturada entre bastidores y alta costura.',
          subtitle: 'Una mirada íntima al universo sensorial de la maison.',
          items: [
            {
              id: 'g1',
              title: 'Draped Gold — Desfile en el Palais de Tokyo',
              category: 'Pasarela París',
              imageUrl: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=80',
              aspectRatio: 'wide'
            },
            {
              id: 'g2',
              title: 'Atelier de Creación en Vía Montenapoleone',
              category: 'Milano',
              imageUrl: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=80',
              aspectRatio: 'square'
            },
            {
              id: 'g3',
              title: 'Texturas de Seda & Botonadura Esculpida',
              category: 'Detalles Nobles',
              imageUrl: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80',
              aspectRatio: 'square'
            }
          ]
        },
        productHighlight: {
          enabled: true,
          kicker: 'La Obra Maestra',
          title: 'El vestido Aurora: 180 horas de devoción.',
          subtitle: 'Una pieza irrepetible de seda dorada y corte al bies que redefine el lujo contemporáneo.',
          description: 'Presentado en la clausura de la semana de la alta costura de París. Solo se confeccionan 10 unidades numeradas en todo el mundo.',
          imageUrl: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1600&q=80',
          layout: 'image-right',
          ctaText: 'Solicitar Dosier de la Pieza',
          ctaLink: '#contact',
          specs: [
            { label: 'Tejido Principal', value: 'Seda Salvaje de Como', detail: 'Gramaje especial 240g/m²' },
            { label: 'Detalles de Orfebrería', value: 'Oro de 24 Quilates', detail: 'Broches labrados a mano' },
            { label: 'Disponibilidad Mundial', value: '10 Unidades', detail: 'Con certificado de procedencia' }
          ]
        },
        stats: {
          enabled: true,
          kicker: 'Legado de la Maison',
          title: 'Una historia forjada con devoción al tejido noble.',
          subtitle: 'Reconocida internacionalmente por las publicaciones de moda más prestigiosas.',
          items: [
            { id: 's1', value: '1974', label: 'Año de Fundación', description: 'Atelier histórico en Milán' },
            { id: 's2', value: '100%', label: 'Confección Artesanal', description: 'Hecho a mano en Italia' },
            { id: 's3', value: '12', label: 'Boutiques Privadas', description: 'En las capitales del lujo' },
            { id: 's4', value: '0 Compromiso', label: 'Calidad de Tejidos', description: 'Solo materias puras' }
          ]
        },
        testimonials: {
          enabled: true,
          title: 'Lo que opinan las damas y coleccionistas de alta costura.',
          subtitle: 'Elogios de clientas privadas y editoras de moda internacionales.',
          items: [
            {
              id: 't1',
              name: 'Countess Eleonora Visconti',
              role: 'Coleccionista de Alta Costura',
              company: 'Milano • Ginebra',
              quote: 'Aurum no crea ropa; crea esculturas vivas que realzan la presencia de quien las viste. El ajuste y la calidad de la seda de mi vestido de gala es insuperable.',
              avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
              rating: 5
            },
            {
              id: 't2',
              name: 'Charlotte de Montmirail',
              role: 'Crítica de Moda & Editora',
              company: 'Haute Revue Paris',
              quote: 'En una era de producción acelerada, Aurum representa el último bastión de la verdadera costura con alma, tiempo y respeto por las manos maestras.',
              avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80',
              rating: 5
            }
          ]
        },
        faq: {
          enabled: true,
          title: 'Preguntas Frecuentes sobre la Maison Aurum',
          subtitle: 'Detalles sobre citas privadas, confección bespoke y envíos internacionales.',
          items: [
            {
              id: 'af_1',
              question: '¿Cómo puedo agendar una cita en el salón privado?',
              answer: 'Puede solicitar una cita privada a través de nuestro formulario o comunicándose directamente con nuestro conserje en Milán o París. Dispondrá de un salón exclusivo con nuestro director de atelier.'
            },
            {
              id: 'af_2',
              question: '¿Cuánto tiempo requiere la confección de una pieza a medida?',
              answer: 'El proceso artesanal de alta costura requiere entre 4 y 8 semanas, incluyendo de dos a tres sesiones de pruebas para asegurar un ajuste milimétrico.'
            },
            {
              id: 'af_3',
              question: '¿Realizan entregas y pruebas en domicilios internacionales?',
              answer: 'Sí. Para nuestras clientas privadas, nuestro equipo de sastrería puede desplazarse a su residencia privada en cualquier ciudad del mundo con el baúl de pruebas.'
            }
          ]
        },
        ctaFinal: {
          enabled: true,
          kicker: 'Maison Aurum Privé',
          title: 'Acceda al círculo privado de la alta costura.',
          subtitle: 'Reciba invitaciones prioritarias a los desfiles de París y al catálogo exclusivo de piezas de coleccionista.',
          primaryCta: { text: 'Solicitar Cita en Salón Privado', link: 'mailto:concierge@aurumcouture.com' },
          secondaryCta: { text: 'Explorar Boutiques en el Mundo', link: '#dealers' },
          backgroundStyle: 'glow'
        },
        footer: {
          copyright: '© 2026 Aurum Haute Couture S.A. Milano • Paris • London • New York.',
          legalLinks: [
            { label: 'Sostenibilidad Textil', href: '#sustainability' },
            { label: 'Servicio al Cliente', href: '#concierge' },
            { label: 'Privacidad', href: '#privacy' },
            { label: 'Aviso Legal', href: '#legal' }
          ],
          socialLinks: [
            { platform: 'Instagram', url: 'https://instagram.com' },
            { platform: 'Pinterest', url: 'https://pinterest.com' },
            { platform: 'Vogue Runway', url: 'https://vogue.com' }
          ]
        }
      }
    }
  },

  // 9. VELVET — Joyería Fina, Alta Artesanía & Diamantes
  {
    id: 'velvet-jewelry',
    name: 'Velvet',
    tagline: 'Joyería fina y alta orfebrería con gemas éticas, oro macizo de 18k y diamantes de corte brillante',
    category: 'luxury',
    thumbnail: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=80',
    description: 'Blanco roto y burdeos terciopelo #BE123C con acentos dorados, tipografía de joyería de autor, carrusel de anillos de compromiso y alta joyería, cuadrícula bento de corte y claridad, galería de gemas y cotizaciones.',
    accentColor: '#BE123C',
    theme: 'light',
    defaultConfig: {
      templateId: 'velvet-jewelry',
      name: 'Velvet Haute Joaillerie',
      slug: 'velvet-joaillerie',
      domain: 'velvetjoaillerie.com',
      theme: 'light',
      accentColor: '#BE123C',
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
        'pricing',
        'faq',
        'ctaFinal',
        'footer'
      ],
      seo: {
        title: 'Velvet Haute Joaillerie — Diamantes de Laboratorio & Joyería Fina en Oro 18k',
        description: 'Anillos de compromiso, collares de zafiros y piezas únicas engastadas a mano por maestros orfebres.',
        keywords: 'joyeria fina, alta joyeria, anillos de compromiso, diamantes certificados gia, oro 18k, zafiros'
      },
      sections: {
        navbar: {
          brandName: 'Velvet',
          logoText: 'VELVET JOAILLERIE',
          ctaText: 'Cita en Joyería',
          ctaLink: '#pricing',
          links: [
            { label: 'Colecciones', href: '#slider' },
            { label: 'Maestría', href: '#features' },
            { label: 'Gemas', href: '#gallery' },
            { label: 'Precios', href: '#pricing' },
            { label: 'Garantía', href: '#faq' }
          ],
          glassBlur: true,
          sticky: true
        },
        hero: {
          enabled: true,
          badge: 'Diamantes Certificados GIA & Gemas Éticas de Origen Trazable',
          kicker: 'Alta Orfebrería Contemporánea',
          title: 'El brillo eterno.',
          highlightTitle: 'La joya de tu vida.',
          subtitle: 'Creaciones sublimes forjadas en oro macizo de 18 quilates y engastadas con diamantes seleccionados uno a uno por su pureza y fuego cromático.',
          primaryCta: { text: 'Explorar Anillos & Collares', link: '#slider' },
          secondaryCta: { text: 'Diseñar Joya Personalizada →', link: '#pricing' },
          imageUrl: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1600&q=80',
          style: 'centered'
        },
        slider: {
          enabled: true,
          kicker: 'Creaciones Exclusivas',
          title: 'Nuestras piezas de orfebrería más codiciadas.',
          subtitle: 'Descubre los diseños que sellan los compromisos más memorables del mundo.',
          autoplay: true,
          slides: [
            {
              id: 'sl_1',
              title: 'Solitaire Reine — Diamante Oval 3.20 ct',
              subtitle: 'Engaste invisible de cuatro garras de platino 950 sobre brazo en oro amarillo de 18k.',
              tag: 'Anillo de Compromiso',
              imageUrl: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1200&q=80',
              ctaText: 'Ver Detalles del Solitario',
              ctaLink: '#pricing'
            },
            {
              id: 'sl_2',
              title: 'Collier Étoile — Zafiro Azul Real de Ceilán (8.40 ct)',
              subtitle: 'Rodeado por una orla de 42 diamantes talla brillante y cadena de oro blanco con cierre de seguridad.',
              tag: 'Alta Joyería',
              imageUrl: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=80',
              ctaText: 'Ver Detalles del Collar',
              ctaLink: '#pricing'
            },
            {
              id: 'sl_3',
              title: 'Bracelet Rivière — Diamantes Talla Princesa (5.00 ct)',
              subtitle: 'Pulsera tenis de flexibilidad infinita elaborada en oro rosa de 18k con doble cierre italiano.',
              tag: 'Básico Imprescindible',
              imageUrl: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1200&q=80',
              ctaText: 'Ver Detalles de la Pulsera',
              ctaLink: '#pricing'
            }
          ]
        },
        bentoFeatures: {
          enabled: true,
          kicker: 'Los Cuatro Criterios Velvet',
          title: 'La máxima pureza en cada faceta.',
          subtitle: 'Seleccionamos solo el 0.1% superior de las gemas mundiales para garantizar un destello incomparable.',
          items: [
            {
              id: 'f1',
              title: 'Diamantes Triple Excelente (GIA / IGI)',
              description: 'Calificación máxima en corte, simetría y pulido para maximizar la refracción lumínica y el fuego óptico.',
              icon: 'Sparkles',
              tag: 'Corte Triple Excelente',
              colSpan: 2,
              statNumber: 'D - F / VVS1',
              statLabel: 'Rango de color incoloro y pureza microscópica'
            },
            {
              id: 'f2',
              title: 'Oro Macizo 18k & Platino 950 Reciclado',
              description: 'Metales preciosos libres de níquel con trazabilidad certificada por el Responsible Jewellery Council.',
              icon: 'ShieldCheck',
              tag: 'Metales Éticos',
              colSpan: 1
            },
            {
              id: 'f3',
              title: 'Engaste al Microscopio por Maestros Joyeros',
              description: 'Ajuste de cada garra con tolerancias de centésimas de milímetro para una sujeción eterna de la gema.',
              icon: 'Layers',
              tag: 'Engaste a Mano',
              colSpan: 1
            },
            {
              id: 'f4',
              title: 'Garantía Vitalicia & Mantenimiento Gratuito',
              description: 'Limpieza por ultrasonidos, ajuste de garras y abrillantado anual de cortesía en todas nuestras boutiques.',
              icon: 'Award',
              tag: 'Servicio de por Vida',
              colSpan: 2,
              statNumber: '100 Años',
              statLabel: 'De garantía estructural en cada joya Velvet'
            }
          ]
        },
        gallery: {
          enabled: true,
          kicker: 'Muestrario de Gemas',
          title: 'Colores puros nacidos de la tierra.',
          subtitle: 'Zafiros, esmeraldas de Colombia, rubíes birmanos y diamantes sin conflicto.',
          items: [
            {
              id: 'g1',
              title: 'Solitario Diamante Talla Esmeralda sobre Platino',
              category: 'Anillos de Compromiso',
              imageUrl: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1200&q=80',
              aspectRatio: 'wide'
            },
            {
              id: 'g2',
              title: 'Sortija de Zafiro Real con Diamantes Laterales',
              category: 'Gemas de Color',
              imageUrl: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=80',
              aspectRatio: 'square'
            },
            {
              id: 'g3',
              title: 'Pendientes de Perlas Akoya & Oro Amarillo 18k',
              category: 'Perlas Naturales',
              imageUrl: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1200&q=80',
              aspectRatio: 'square'
            }
          ]
        },
        stats: {
          enabled: true,
          kicker: 'Prestigio de Marca',
          title: 'Una tradición de confianza familiar.',
          subtitle: 'Más de 40 años acompañando los momentos más felices de miles de parejas.',
          items: [
            { id: 's1', value: '18k & Platino', label: 'Pureza de Metales', description: 'Aleaciones nobles de por vida' },
            { id: 's2', value: '100% GIA', label: 'Certificación Oficial', description: 'Diamantes con número láser' },
            { id: 's3', value: '15,000+', label: 'Momentos Sellados', description: 'Anillos de compromiso entregados' },
            { id: 's4', value: '4.98/5', label: 'Reseñas Verificadas', description: 'Excelencia en servicio y trato' }
          ]
        },
        testimonials: {
          enabled: true,
          title: 'Historias de amor con sello Velvet.',
          subtitle: 'La emoción de elegir el anillo que simbolizará toda una vida juntos.',
          items: [
            {
              id: 't1',
              name: 'Gonzalo & Valentina',
              role: 'Comprometidos en 2025',
              company: 'Madrid • Lisboa',
              quote: 'Elegir el anillo de compromiso con el asesor de Velvet fue una experiencia inolvidable. La transparencia con la que nos explicaron cada certificado GIA y el acabado del solitario nos dejó maravillados.',
              avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
              rating: 5
            },
            {
              id: 't2',
              name: 'Isabel Cárdenas',
              role: 'Coleccionista de Joyas',
              company: 'Barcelona',
              quote: 'El collar de zafiro de Velvet es la pieza central de mis ocasiones especiales. El brillo de los diamantes que lo enmarcan y la comodidad de su cierre son de auténtica joyería de museo.',
              avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
              rating: 5
            }
          ]
        },
        pricing: {
          enabled: true,
          title: 'Colecciones & Presupuestos Orientativos',
          subtitle: 'Cada joya se entrega en estuche de terciopelo lacado con certificado de autenticidad y seguro de transporte asegurado.',
          billingCycle: 'monthly',
          discountNote: 'Grabado interior personalizado de nombres y fecha sin coste adicional',
          plans: [
            {
              id: 'v_solitaire',
              name: 'Solitario Clásico 1.00 ct',
              tag: 'El Más Deseado',
              priceMonthly: '2,900€',
              priceAnnual: '2,900€',
              description: 'Diamante talla brillante natural certificado GIA color F pureza VS1 sobre oro 18k.',
              features: [
                'Diamante de 1.00 quilates certificado GIA',
                'Montura en oro blanco, amarillo o platino',
                'Estuche de lujo en terciopelo burdeos',
                'Mantenimiento y pulido anual de por vida',
                'Ajuste de talla gratuito en 30 días'
              ],
              ctaText: 'Solicitar Cita para Ver Anillo',
              ctaLink: '#contact-solitaire',
              highlighted: false
            },
            {
              id: 'v_bespoke',
              name: 'Creación Bespoke a Medida',
              tag: 'Diseño Exclusivo',
              priceMonthly: '5,500€',
              priceAnnual: '5,500€',
              description: 'Diseño 3D personalizado desde cero con selección de gema en bruto junto al maestro joyero.',
              features: [
                'Boceto a mano alzada y render 3D interactivo',
                'Gema central a elegir (Diamante 2+ ct, Zafiro, Esmeralda)',
                'Selección de metales preciosos personalizados',
                'Grabado a láser de huella o mensaje íntimo',
                'Álbum fotográfico del proceso de forja en taller'
              ],
              ctaText: 'Iniciar Creación Bespoke',
              ctaLink: '#contact-bespoke',
              highlighted: true
            }
          ]
        },
        faq: {
          enabled: true,
          title: 'Preguntas Frecuentes sobre Joyería Velvet',
          subtitle: 'Todo sobre autenticidad, tallas de anillo y envíos asegurados.',
          items: [
            {
              id: 'vf_1',
              question: '¿Cómo sé qué talla de anillo necesita mi pareja si es una sorpresa?',
              answer: 'Nuestros asesores pueden estimar la talla a partir de fotografías o anillos existentes. Además, incluimos el ajuste de talla completamente gratuito y express dentro de los primeros 60 días tras la entrega.'
            },
            {
              id: 'vf_2',
              question: '¿Los diamantes vienen con certificado oficial independiente?',
              answer: 'Sí. Todos nuestros diamantes a partir de 0.30 quilates incluyen certificado original del Gemological Institute of America (GIA) con el número de serie grabado a láser en el filetín del diamante.'
            },
            {
              id: 'vf_3',
              question: '¿Ofrecen financiación o pago fraccionado?',
              answer: 'Sí, disponemos de opciones de pago fraccionado en 3, 6 y 12 meses sin comisiones en nuestra boutique y a través de nuestra pasarela segura online.'
            }
          ]
        },
        ctaFinal: {
          enabled: true,
          kicker: 'Atención Privada & Discreta',
          title: 'Da el paso más importante con total seguridad.',
          subtitle: 'Reserva una cita con nuestros gemólogos para asesorarte sin compromiso en un ambiente cálido y confidencial.',
          primaryCta: { text: 'Agendar Cita en Joyería', link: '#pricing' },
          secondaryCta: { text: 'Descargar Guía de Diamantes (PDF)', link: '#guide' },
          backgroundStyle: 'minimal'
        },
        footer: {
          copyright: '© 2026 Velvet Haute Joaillerie S.L. Madrid • Barcelona • Ginebra.',
          legalLinks: [
            { label: 'Compromiso Ético Kimberley', href: '#kimberley' },
            { label: 'Garantía & Envíos', href: '#shipping' },
            { label: 'Privacidad', href: '#privacy' },
            { label: 'Aviso Legal', href: '#legal' }
          ],
          socialLinks: [
            { platform: 'Instagram', url: 'https://instagram.com' },
            { platform: 'Pinterest', url: 'https://pinterest.com' },
            { platform: 'Facebook', url: 'https://facebook.com' }
          ]
        }
      }
    }
  }
];
