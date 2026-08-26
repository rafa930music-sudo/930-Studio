import { TemplateDefinition } from '../../types';

export const ECOMMERCE_TEMPLATES: TemplateDefinition[] = [
  // 1. AURA WATCHES — Relojería Suiza Minimalista
  {
    id: 'aura-watches',
    name: 'Aura Watches',
    tagline: 'Relojes automáticos de titanio aeroespacial y cristal de zafiro ensamblados a mano en Ginebra',
    category: 'ecommerce',
    style: 'minimalista',
    thumbnail: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80',
    description: 'Estética monocromática de lujo discreto, acento cian glacial #00E5FF, tipografía Playfair Display & Inter, visor 360 de caja, especificaciones de calibre automático y reservas exclusivas.',
    accentColor: '#00E5FF',
    theme: 'dark',
    defaultConfig: {
      templateId: 'aura-watches',
      name: 'Aura Horlogerie',
      slug: 'aura-horlogerie',
      domain: 'aurawatches.ch',
      theme: 'dark',
      accentColor: '#00E5FF',
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      borderRadius: 16,
      published: true,
      sectionOrder: [
        'navbar',
        'hero',
        'logos',
        'marquee',
        'productHighlight',
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
        title: 'Aura Watches — Alta Relojería Automática de Titanio',
        description: 'Descubre piezas de relojería suiza atemporales diseñadas para perdurar generaciones con calibres de máxima precisión.',
        keywords: 'relojes suizos, titanio, zafiro, reloj automático, lujo silencioso'
      },
      sections: {
        navbar: {
          brandName: 'AURA',
          logoText: 'AURA GENÈVE',
          ctaText: 'Ver Colección',
          ctaLink: '#pricing',
          links: [
            { label: 'Colección', href: '#pricing' },
            { label: 'Calibre', href: '#productHighlight' },
            { label: 'Artesanía', href: '#bentoFeatures' },
            { label: 'Galería', href: '#gallery' },
            { label: 'Garantía', href: '#faq' }
          ],
          glassBlur: true,
          sticky: true
        },
        hero: {
          enabled: true,
          badge: 'Edición Limitada 2026',
          kicker: 'Calibre Automático Suizo',
          title: 'Precisión eterna en titanio macizo.',
          highlightTitle: 'Ingeniería suiza pura.',
          subtitle: 'Diseñado sin ornamentos innecesarios. Cada componente del Aura Chrono I ha sido esculpido a partir de un bloque sólido de titanio Grado 5 con 70 horas de reserva de marcha.',
          primaryCta: { text: 'Adquirir Aura Chrono I', link: '#pricing' },
          secondaryCta: { text: 'Explorar Galería', link: '#gallery' },
          imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80',
          style: 'centered'
        },
        logos: {
          enabled: true,
          title: 'Reconocido en la prensa internacional de alta relojería',
          items: [
            { id: 'l1', name: 'Hodinkee', tagline: 'Premio al Diseño 2025' },
            { id: 'l2', name: 'GQ Magazine', tagline: 'Reloj del Año' },
            { id: 'l3', name: 'Monocle', tagline: 'Excelencia en Titanio' },
            { id: 'l4', name: 'Financial Times', tagline: 'Nueva Era Suiza' },
            { id: 'l5', name: 'Wired UK', tagline: 'Precisión Absoluta' }
          ]
        },
        marquee: {
          enabled: true,
          speed: 'normal',
          direction: 'left',
          items: [
            { id: 'm1', text: 'TITANIO GRADO 5', highlight: true },
            { id: 'm2', text: 'CRISTAL ZAFIRO ANTIRREFLEJOS' },
            { id: 'm3', text: 'RESERVA DE MARCHA 70H', highlight: true },
            { id: 'm4', text: 'SUMERGIBLE 200M' },
            { id: 'm5', text: 'GARANTÍA INTERNACIONAL 10 AÑOS', highlight: true }
          ]
        },
        productHighlight: {
          enabled: true,
          kicker: 'Mecanismo de Manufactura Propia',
          title: 'El Calibre A-930: 28.800 alternancias por hora.',
          subtitle: 'Desarrollado y calibrado durante 4 años en el valle de Joux.',
          description: 'Con escape de silicio antimagnético y rotor esqueletizado de tungsteno, el calibre ofrece una desviación cronométrica inferior a ±2 segundos diarios bajo cualquier condición climática o altitud.',
          imageUrl: 'https://images.unsplash.com/photo-1547996160-71dfabb18b5b?auto=format&fit=crop&w=1200&q=80',
          layout: 'image-left',
          ctaText: 'Ver Especificaciones Completas',
          ctaLink: '#faq',
          specs: [
            { label: 'Caja', value: '40mm', detail: 'Titanio Grado 5 cepillado a mano' },
            { label: 'Grosor', value: '9.8mm', detail: 'Perfil ultra delgado con cristal curvado' },
            { label: 'Resistencia', value: '20 ATM', detail: '200 metros con corona roscada' },
            { label: 'Correa', value: 'FKM / Titanio', detail: 'Sistema de cambio rápido sin herramientas' }
          ]
        },
        bentoFeatures: {
          enabled: true,
          kicker: 'Detalles que definen la excelencia',
          title: 'Obsesión por cada micrómetro.',
          subtitle: 'Innovación en materiales aeroespaciales combinada con la tradición relojera.',
          items: [
            {
              id: 'b1',
              title: 'Titanio Grado 5 Pulido',
              description: 'Un 45% más ligero que el acero inoxidable y 3 veces más resistente a la corrosión y el agua salada.',
              icon: 'Shield',
              tag: 'Material Aeroespacial',
              colSpan: 2,
              statNumber: '45%',
              statLabel: 'más ligero que el acero'
            },
            {
              id: 'b2',
              title: 'Super-LumiNova BGW9',
              description: 'Luminiscencia nocturna azul glaciar de máxima visibilidad durante más de 8 horas ininterrumpidas.',
              icon: 'Eye',
              tag: 'Visión Nocturna',
              colSpan: 1
            },
            {
              id: 'b3',
              title: 'Cristal Zafiro Doble',
              description: 'Tratamiento antirreflejante de 7 capas en cara interna y externa con dureza 9 en la escala Mohs.',
              icon: 'Sparkles',
              tag: 'Inrayable',
              colSpan: 1
            },
            {
              id: 'b4',
              title: 'Producción Numerada',
              description: 'Solo 500 unidades fabricadas al año. Cada reloj lleva su número de serie grabado al láser en el fondo visto.',
              icon: 'Award',
              tag: 'Exclusividad',
              colSpan: 2,
              statNumber: '500',
              statLabel: 'piezas al año en todo el mundo'
            }
          ]
        },
        gallery: {
          enabled: true,
          kicker: 'Fotografía de Detalle',
          title: 'Estética en cada ángulo.',
          subtitle: 'Imágenes reales tomadas en nuestro taller de manufactura en Ginebra.',
          items: [
            {
              id: 'g1',
              title: 'Dial Titanio Mate & Agujas Esqueletizadas',
              category: 'Dial',
              imageUrl: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80',
              aspectRatio: 'wide'
            },
            {
              id: 'g2',
              title: 'Corona con Doble Junta Tórica',
              category: 'Caja',
              imageUrl: 'https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&w=800&q=80',
              aspectRatio: 'square'
            },
            {
              id: 'g3',
              title: 'Rotor Esqueletizado de Masa Oscilante',
              category: 'Calibre',
              imageUrl: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80',
              aspectRatio: 'tall'
            }
          ]
        },
        stats: {
          enabled: true,
          kicker: 'Métricas de Calidad',
          title: 'Rigor suizo certificado.',
          items: [
            { id: 's1', value: '±2s/día', label: 'Precisión Cronómetro', description: 'Testado en 5 posiciones térmicas' },
            { id: 's2', value: '70 Horas', label: 'Reserva de Marcha', description: 'Fin de semana sin necesidad de cuerda' },
            { id: 's3', value: '200 Metros', label: 'Resistencia al Agua', description: 'Válvula y corona estanca certificada' },
            { id: 's4', value: '10 Años', label: 'Garantía Total', description: 'Mantenimiento gratuito en año 5' }
          ]
        },
        testimonials: {
          enabled: true,
          title: 'La voz de los coleccionistas.',
          subtitle: 'Opiniones verificadas de propietarios de piezas Aura.',
          items: [
            {
              id: 't1',
              name: 'Guillermo Aranda',
              role: 'Arquitecto y Coleccionista',
              company: 'Madrid',
              quote: 'Llevo 6 meses con el Chrono I en la muñeca a diario. La ligereza del titanio y la ausencia de reflejos en el zafiro hacen que olvides que lo llevas, hasta que lo miras y aprecias la pureza de sus líneas.',
              avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
              rating: 5
            },
            {
              id: 't2',
              name: 'Clara Van Der Bilt',
              role: 'Directora de Diseño',
              company: 'Zúrich',
              quote: 'Un ejercicio magistral de minimalismo industrial. La legibilidad nocturna es impresionante y el tacto del bisel es el más satisfactorio que he probado en años.',
              avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
              rating: 5
            }
          ]
        },
        pricing: {
          enabled: true,
          title: 'Configura tu modelo Aura.',
          subtitle: 'Envío asegurado a todo el mundo y 30 días de prueba sin compromiso.',
          billingCycle: 'annual',
          plans: [
            {
              id: 'chrono_steel_strap',
              name: 'Aura Chrono I — Titanio Puro',
              tag: 'Más Demandado',
              priceMonthly: '1.450 €',
              priceAnnual: '1.450 €',
              description: 'Incluye brazalete integral de titanio Grado 5 articulado con microajuste y estuche de madera maciza.',
              features: [
                'Calibre Automático Suizo A-930 (70h)',
                'Caja y brazalete de Titanio Grado 5',
                'Cristal zafiro doble con 7 capas antirreflejo',
                'Estuche de viaje en piel italiana curtida',
                'Garantía internacional de 10 años',
                'Envío exprés asegurado por DHL Express'
              ],
              ctaText: 'Comprar Titanio Puro',
              ctaLink: '#checkout-titanium',
              highlighted: true
            },
            {
              id: 'chrono_rubber_strap',
              name: 'Aura Chrono I — Sport Edition',
              priceMonthly: '1.250 €',
              priceAnnual: '1.250 €',
              description: 'Equipado con correa de caucho vulcanizado FKM de alta resistencia para uso deportivo y acuático.',
              features: [
                'Calibre Automático Suizo A-930 (70h)',
                'Caja de Titanio Grado 5 satinada',
                'Correa de caucho FKM hipoalergénico',
                'Sumergible hasta 200 metros (20 ATM)',
                'Garantía internacional de 10 años',
                'Envío gratuito con seguro a todo riesgo'
              ],
              ctaText: 'Comprar Sport Edition',
              ctaLink: '#checkout-sport',
              highlighted: false
            }
          ]
        },
        faq: {
          enabled: true,
          title: 'Preguntas Frecuentes',
          subtitle: 'Todo sobre envíos, mantenimiento y garantías.',
          items: [
            {
              id: 'f1',
              question: '¿Cómo funciona la garantía de 10 años?',
              answer: 'Cubre cualquier defecto de manufactura o desviación cronométrica. Además, incluye una revisión técnica gratuita y cambio de juntas de estanqueidad a los 5 años en nuestro taller oficial.'
            },
            {
              id: 'f2',
              question: '¿Qué método de envío utilizan para envíos internacionales?',
              answer: 'Enviamos todos nuestros pedidos mediante DHL Express asegurado al 100% del valor. El plazo habitual de entrega es de 24 a 48 horas en Europa y 72 horas en el resto del mundo.'
            },
            {
              id: 'f3',
              question: '¿Puedo devolver el reloj si no cumple mis expectativas?',
              answer: 'Sí. Dispones de 30 días desde la recepción para probar el reloj en casa. Si decides devolverlo en su estado original sin marcas de uso, gestionamos la recogida y el reembolso íntegro.'
            }
          ]
        },
        ctaFinal: {
          enabled: true,
          kicker: 'Piezas Limitadas',
          title: 'Lleva la ingeniería suiza más pura a tu muñeca.',
          subtitle: 'Reserva hoy tu unidad de la serie numerada con envío gratuito y seguro a todo riesgo.',
          primaryCta: { text: 'Adquirir Aura Chrono I — 1.450 €', link: '#pricing' },
          secondaryCta: { text: 'Contactar con Asesor', link: '#contact' },
          backgroundStyle: 'glow'
        },
        footer: {
          copyright: '© 2026 Aura Horlogerie Genève S.A. Todos los derechos reservados.',
          legalLinks: [
            { label: 'Garantía Oficial', href: '#warranty' },
            { label: 'Envíos y Devoluciones', href: '#shipping' },
            { label: 'Política de Privacidad', href: '#privacy' },
            { label: 'Aviso Legal', href: '#legal' }
          ],
          socialLinks: [
            { platform: 'Instagram', url: 'https://instagram.com' },
            { platform: 'YouTube', url: 'https://youtube.com' },
            { platform: 'Twitter', url: 'https://twitter.com' }
          ]
        }
      }
    }
  },

  // 2. LÚMINA HOME — Mobiliario Nórdico e Iluminación Escultórica
  {
    id: 'lumina-home',
    name: 'Lúmina Home',
    tagline: 'Mobiliario nórdico de roble macizo e iluminación escultórica para hogares conscientes y serenos',
    category: 'ecommerce',
    style: 'natural',
    thumbnail: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80',
    description: 'Estética escandinava cálida en madera natural y tonos arena, acento dorado #FFD700, tipografía Outfit, catálogo interactivo con filtros, detalles de sostenibilidad y compras seguras.',
    accentColor: '#FFD700',
    theme: 'dark',
    defaultConfig: {
      templateId: 'lumina-home',
      name: 'Lúmina Home Studio',
      slug: 'lumina-home-studio',
      domain: 'luminahome.es',
      theme: 'dark',
      accentColor: '#FFD700',
      fontFamily: "'Outfit', sans-serif",
      borderRadius: 18,
      published: true,
      sectionOrder: [
        'navbar',
        'hero',
        'logos',
        'marquee',
        'bentoFeatures',
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
        title: 'Lúmina Home — Mobiliario Nórdico & Lámparas Escultóricas',
        description: 'Muebles de madera noble sostenible certificada FSC e iluminación de diseño pensada para crear atmósferas acogedoras.',
        keywords: 'muebles nordicos, iluminacion diseño, roble macizo, diseño escandinavo, decoracion'
      },
      sections: {
        navbar: {
          brandName: 'LÚMINA',
          logoText: 'LÚMINA HOME',
          ctaText: 'Ver Catálogo',
          ctaLink: '#pricing',
          links: [
            { label: 'Muebles', href: '#pricing' },
            { label: 'Lámparas', href: '#gallery' },
            { label: 'Sostenibilidad', href: '#bentoFeatures' },
            { label: 'Colección', href: '#productHighlight' }
          ],
          glassBlur: true,
          sticky: true
        },
        hero: {
          enabled: true,
          badge: 'Colección Otoño 2026',
          kicker: 'Madera Sostenible FSC®',
          title: 'Espacios que transmiten calma y armonía natural.',
          highlightTitle: 'Diseño nórdico atemporal.',
          subtitle: 'Creaciones artesanales fabricadas en roble europeo y lino orgánico para quienes valoran la textura, la luz y la calidez en su hogar.',
          primaryCta: { text: 'Explorar Catálogo', link: '#pricing' },
          secondaryCta: { text: 'Ver Proyectos', link: '#gallery' },
          imageUrl: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80',
          style: 'split'
        },
        logos: {
          enabled: true,
          title: 'Publicado en los principales medios de interiorismo y arquitectura',
          items: [
            { id: 'l1', name: 'Arquitectura y Diseño', tagline: 'Selección 2026' },
            { id: 'l2', name: 'AD España', tagline: 'Diseño Sostenible' },
            { id: 'l3', name: 'Elle Decoration', tagline: 'Tendencia Cálida' },
            { id: 'l4', name: 'Apartamento', tagline: 'Espacios Vivos' }
          ]
        },
        marquee: {
          enabled: true,
          speed: 'normal',
          direction: 'left',
          items: [
            { id: 'm1', text: 'ROBLE MACIZO CERTIFICADO FSC®', highlight: true },
            { id: 'm2', text: 'ENVÍO CON MONTAJE INCLUIDO' },
            { id: 'm3', text: 'ACEITES VEGETALES NATURALES SIN COVs', highlight: true },
            { id: 'm4', text: 'FABRICADO EN EUROPA' }
          ]
        },
        bentoFeatures: {
          enabled: true,
          kicker: 'Nuestra Filosofía',
          title: 'El arte de habitar con calma.',
          subtitle: 'Diseñado para durar toda una vida sin pasar de moda.',
          items: [
            {
              id: 'b1',
              title: 'Roble de Bosques Sostenibles',
              description: 'Toda nuestra madera procede de talas controladas con replantación garantizada en el norte de Europa.',
              icon: 'Leaf',
              tag: '100% Sostenible',
              colSpan: 2,
              statNumber: '100%',
              statLabel: 'madera certificada FSC'
            },
            {
              id: 'b2',
              title: 'Iluminación Cálida 2700K',
              description: 'LEDs de espectro completo sin parpadeo que replican la temperatura de la luz dorada del atardecer.',
              icon: 'Sun',
              tag: 'Luz Agradable',
              colSpan: 1
            },
            {
              id: 'b3',
              title: 'Entrega con Montaje Pro',
              description: 'Subimos el producto a tu estancia, lo montamos y retiramos todos los embalajes reciclables.',
              icon: 'Truck',
              tag: 'Servicio Guante Blanco',
              colSpan: 1
            },
            {
              id: 'b4',
              title: 'Acabados al Aceite Natural',
              description: 'Protección transpirable que realza la veta natural del roble sin barnices químicos tóxicos.',
              icon: 'Sparkles',
              tag: 'Libre de Tóxicos',
              colSpan: 2
            }
          ]
        },
        gallery: {
          enabled: true,
          kicker: 'Inspiración para tu Hogar',
          title: 'Rincones diseñados para descansar.',
          items: [
            {
              id: 'g1',
              title: 'Lámpara Colgante Vesta en Vidrio Soplado',
              category: 'Iluminación',
              imageUrl: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80',
              aspectRatio: 'square'
            },
            {
              id: 'g2',
              title: 'Mesa de Comedor Fjord en Roble Macizo',
              category: 'Comedor',
              imageUrl: 'https://images.unsplash.com/photo-1530629013299-6cb10d168419?auto=format&fit=crop&w=800&q=80',
              aspectRatio: 'wide'
            },
            {
              id: 'g3',
              title: 'Butaca Koto en Lino Lavado Natural',
              category: 'Salón',
              imageUrl: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=800&q=80',
              aspectRatio: 'tall'
            }
          ]
        },
        productHighlight: {
          enabled: true,
          kicker: 'Pieza Estrella',
          title: 'Aparador Nórdico Fjord — 180cm',
          subtitle: 'El equilibrio perfecto entre almacenamiento silencioso y presencia escultórica.',
          description: 'Fabricado íntegramente en roble con puertas de lamas verticales y herrajes de cierre amortiguado Blum. Incluye pasacables oculto para equipos de sonido o televisión.',
          imageUrl: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1200&q=80',
          specs: [
            { label: 'Dimensiones', value: '180 x 45 x 75 cm', detail: 'Largo x Fondo x Alto' },
            { label: 'Madera', value: 'Roble Macizo', detail: 'Acabado en aceite vegetal incoloro' },
            { label: 'Cierre', value: 'Soft-Close', detail: 'Herrajes ocultos de alta gama' }
          ]
        },
        stats: {
          enabled: true,
          title: 'Compromiso y números que hablan.',
          items: [
            { id: 's1', value: '+4.800', label: 'Hogares Lúmina', description: 'Clientes satisfechos en España y Portugal' },
            { id: 's2', value: '10 Años', label: 'Garantía Estructural', description: 'En toda nuestra línea de madera maciza' },
            { id: 's3', value: '100%', label: 'Packaging Biodegradable', description: 'Sin plásticos de un solo uso' },
            { id: 's4', value: '1 Árbol', label: 'Por Cada Pedido', description: 'Plantado en proyectos de reforestación' }
          ]
        },
        testimonials: {
          enabled: true,
          title: 'Hogares reales, experiencias reales.',
          items: [
            {
              id: 't1',
              name: 'Laura Méndez',
              role: 'Interiorista',
              company: 'Barcelona',
              quote: 'La calidad del roble y el olor a madera natural al abrir el mueble es insuperable. Mis clientes quedan maravillados con la calidez de la lámpara Vesta.',
              avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
              rating: 5
            },
            {
              id: 't2',
              name: 'Javier Castillo',
              role: 'Arquitecto',
              company: 'Valencia',
              quote: 'El servicio de entrega con montaje fue impecable. Muy agradecido por el cuidado en cada detalle del embalaje.',
              avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
              rating: 5
            }
          ]
        },
        pricing: {
          enabled: true,
          title: 'Piezas Más Populares',
          subtitle: 'Precios con IVA y transporte especializado incluido.',
          billingCycle: 'annual',
          plans: [
            {
              id: 'p_fjord',
              name: 'Aparador Fjord Roble',
              tag: 'Bestseller',
              priceMonthly: '890 €',
              priceAnnual: '890 €',
              description: 'Roble macizo de 180cm con puertas correderas de lamas.',
              features: [
                'Roble macizo europeo certificado FSC',
                'Herrajes amortiguados de por vida',
                'Envío con subida a domicilio y montaje',
                'Tratamiento antimanchas natural',
                '10 años de garantía estructural'
              ],
              ctaText: 'Comprar Aparador',
              ctaLink: '#buy-fjord',
              highlighted: true
            },
            {
              id: 'p_vesta',
              name: 'Lámpara Vesta Colgante',
              priceMonthly: '290 €',
              priceAnnual: '290 €',
              description: 'Vidrio soplado artesanal y latón mate con LED regulable 2700K.',
              features: [
                'Vidrio soplado a boca por maestros vidrieros',
                'Bombilla LED cálida 2700K regulable incluida',
                'Cable textil trenzado de 2 metros ajustable',
                'Florón de latón macizo cepillado',
                'Envío protegido en 48 horas'
              ],
              ctaText: 'Comprar Lámpara',
              ctaLink: '#buy-vesta',
              highlighted: false
            }
          ]
        },
        faq: {
          enabled: true,
          title: 'Dudas Habituales',
          items: [
            {
              id: 'f1',
              question: '¿Cómo se limpia y mantiene la madera de roble?',
              answer: 'Basta con un paño ligeramente humedecido en agua templada. Cada 2 años recomendamos aplicar una fina capa de nuestro aceite vegetal protector para mantener la nutrición del poro.'
            },
            {
              id: 'f2',
              question: '¿Qué incluye el servicio de entrega con guante blanco?',
              answer: 'Dos operarios llevan el mueble hasta la habitación deseada, desembalan, montan las piezas necesarias y se llevan todos los cartones y protecciones para su reciclaje.'
            }
          ]
        },
        ctaFinal: {
          enabled: true,
          kicker: 'Transforma tu Espacio',
          title: 'Crea un hogar donde siempre apetezca estar.',
          subtitle: 'Compra hoy con envío gratuito y 100 días de devolución.',
          primaryCta: { text: 'Explorar Todo el Catálogo', link: '#pricing' },
          backgroundStyle: 'glow'
        },
        footer: {
          copyright: '© 2026 Lúmina Home Studio S.L.',
          legalLinks: [
            { label: 'Guía de Mantenimiento', href: '#care' },
            { label: 'Política de Devolución (100 días)', href: '#returns' },
            { label: 'Privacidad y Cookies', href: '#privacy' }
          ],
          socialLinks: [
            { platform: 'Pinterest', url: 'https://pinterest.com' },
            { platform: 'Instagram', url: 'https://instagram.com' }
          ]
        }
      }
    }
  },

  // 3. SILVESTRE SKINCARE — Cosmética Botánica Orgánica
  {
    id: 'silvestre-skin',
    name: 'Silvestre Skin',
    tagline: 'Cosmética botánica de alta eficacia formulada con extractos silvestres prensados en frío y biotecnología celular',
    category: 'ecommerce',
    style: 'natural',
    thumbnail: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1200&q=80',
    description: 'Estética limpia y orgánica en tonos musgo y crema, acento verde néctar #00FF88, tipografía Syne, rutina facial en 3 pasos, ingredientes limpios certificados y suscripciones de recarga.',
    accentColor: '#00FF88',
    theme: 'dark',
    defaultConfig: {
      templateId: 'silvestre-skin',
      name: 'Silvestre Botanicals',
      slug: 'silvestre-botanicals',
      domain: 'silvestreskin.com',
      theme: 'dark',
      accentColor: '#00FF88',
      fontFamily: "'Syne', sans-serif",
      borderRadius: 20,
      published: true,
      sectionOrder: [
        'navbar',
        'hero',
        'logos',
        'marquee',
        'productHighlight',
        'bentoFeatures',
        'gallery',
        'testimonials',
        'pricing',
        'faq',
        'ctaFinal',
        'footer'
      ],
      seo: {
        title: 'Silvestre Botanicals — Cuidado Facial Botánico de Alta Eficacia',
        description: 'Fórmulas limpias, veganas y libres de agua de relleno con aceites puros de recolección silvestre.',
        keywords: 'cosmetica botanica, skincare natural, serum acido hialuronico, vegano, cruelty free'
      },
      sections: {
        navbar: {
          brandName: 'SILVESTRE',
          logoText: 'SILVESTRE BOTANICALS',
          ctaText: 'Ver Rutinas',
          ctaLink: '#pricing',
          links: [
            { label: 'Productos', href: '#pricing' },
            { label: 'Ingredientes', href: '#bentoFeatures' },
            { label: 'Resultados', href: '#testimonials' },
            { label: 'Filosofía', href: '#faq' }
          ],
          glassBlur: true,
          sticky: true
        },
        hero: {
          enabled: true,
          badge: 'Fórmula 100% Activa',
          kicker: 'Biotecnología Botánica',
          title: 'Piel luminosa, nutrida por la fuerza del bosque.',
          highlightTitle: 'Sin agua de relleno. 100% activos.',
          subtitle: 'Sustituimos el agua común por hidrolatos puros de jara y rosas silvestres. Resultados clínicos visibles en textura, hidratación y luminosidad desde el día 14.',
          primaryCta: { text: 'Descubrir Rutina Esencial', link: '#pricing' },
          secondaryCta: { text: 'Conoce los Ingredientes', link: '#bentoFeatures' },
          imageUrl: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1200&q=80',
          style: 'centered'
        },
        logos: {
          enabled: true,
          title: 'Certificaciones internacionales de pureza y sostenibilidad',
          items: [
            { id: 'l1', name: 'ECOCERT Cosmos Organic', tagline: '100% Certificado' },
            { id: 'l2', name: 'Leaping Bunny Cruelty Free', tagline: 'No testado en animales' },
            { id: 'l3', name: 'The Vegan Society', tagline: '100% Vegano' },
            { id: 'l4', name: 'Dermatest Excellent', tagline: 'Testado en Piel Sensible' }
          ]
        },
        marquee: {
          enabled: true,
          speed: 'normal',
          direction: 'left',
          items: [
            { id: 'm1', text: 'PRENSADO EN FRÍO ARTESANAL', highlight: true },
            { id: 'm2', text: '0% SULFATOS, PARABENOS O PERFUMES SINTÉTICOS' },
            { id: 'm3', text: 'ENVASE DE VIDRIO VIOLETA BIOFOTÓNICO', highlight: true },
            { id: 'm4', text: 'RECARGAS ECO-RESPONSIBLES' }
          ]
        },
        productHighlight: {
          enabled: true,
          kicker: 'Serum Icono',
          title: 'Elixir Botánico Regenerador Nocturno',
          subtitle: 'Un concentrado de 18 aceites botánicos preciosos ricos en retinol vegetal (Bakuchiol al 2%).',
          description: 'Acelera la renovación celular mientras duermes, calma rojeces y restaura la barrera lipídica sin sensación grasa.',
          imageUrl: 'https://images.unsplash.com/photo-1608248597359-00994f71a4f0?auto=format&fit=crop&w=1200&q=80',
          specs: [
            { label: 'Bakuchiol', value: '2.0%', detail: 'Alternativa natural y suave al retinol' },
            { label: 'Escualano', value: 'Oliva Virgen', detail: 'Mimetiza el sebo natural de la piel' },
            { label: 'Vitamina C', value: 'Liposomada', detail: 'Alta estabilidad antioxidante' }
          ]
        },
        bentoFeatures: {
          enabled: true,
          kicker: 'Pureza Comprobada',
          title: 'Ingredientes puros que respetan tu piel.',
          items: [
            {
              id: 'b1',
              title: 'Vidrio Biofotónico Miron',
              description: 'Bloquea el espectro de luz visible dañina y solo permite el paso de rayos UVA e infrarrojos para conservar los principios activos frescos.',
              icon: 'ShieldCheck',
              tag: 'Conservación Óptima',
              colSpan: 2
            },
            {
              id: 'b2',
              title: 'Zero Perfume Sintético',
              description: 'El aroma proviene exclusivamente de los aceites esenciales puros de neroli y manzanilla silvestre.',
              icon: 'Flower',
              tag: 'Aroma Terapéutico',
              colSpan: 1
            },
            {
              id: 'b3',
              title: 'Recargas de Aluminio',
              description: 'Reduce un 85% tu huella de plástico pidiendo tus recargas en cápsulas de aluminio infinito.',
              icon: 'RefreshCw',
              tag: 'Economía Circular',
              colSpan: 1
            }
          ]
        },
        gallery: {
          enabled: true,
          title: 'Texturas y Rituales',
          items: [
            { id: 'g1', title: 'Gotas de Aceite Botánico de Rosa Mosqueta', category: 'Textura', imageUrl: 'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=800&q=80' },
            { id: 'g2', title: 'Bálsamo Limpiador de Camelia', category: 'Limpieza', imageUrl: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=80' }
          ]
        },
        testimonials: {
          enabled: true,
          title: 'Lo que dicen quienes ya lo usan.',
          items: [
            {
              id: 't1',
              name: 'Dr. Andrea Sola',
              role: 'Médico Dermatóloga',
              company: 'Madrid',
              quote: 'La formulación del Elixir Nocturno con Bakuchiol es formidable. Es la alternativa perfecta al retinol para pacientes con piel reactiva o rosácea.',
              avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
              rating: 5
            }
          ]
        },
        pricing: {
          enabled: true,
          title: 'Packs y Rutinas Completas',
          subtitle: 'Envío gratis a partir de 45€ y 3 muestras botánicas en cada pedido.',
          billingCycle: 'annual',
          plans: [
            {
              id: 'pack_esencial',
              name: 'Rutina Iluminadora Completa',
              tag: 'Ahorro 20%',
              priceMonthly: '84 €',
              priceAnnual: '84 €',
              description: 'Limpiador en Bálsamo (100ml) + Serum Ácido Hialurónico + Elixir Nocturno (30ml).',
              features: [
                'Bálsamo limpiador desmaquillante suave',
                'Serum de hidratación profunda multicapa',
                'Elixir regenerador con Bakuchiol al 2%',
                'Toalla facial de algodón orgánico de regalo',
                'Muestras personalizadas según tu tipo de piel'
              ],
              ctaText: 'Comprar Rutina Completa',
              ctaLink: '#buy-routine',
              highlighted: true
            },
            {
              id: 'elixir_single',
              name: 'Elixir Nocturno Bakuchiol (30ml)',
              priceMonthly: '46 €',
              priceAnnual: '46 €',
              description: 'Tratamiento intensivo antiedad y luminosidad para 3 meses de uso diario.',
              features: [
                'Concentrado de 18 aceites prensados en frío',
                'Botella de cristal violeta biofotónico',
                'Gotero dosificador de precisión',
                'Apto para pieles sensibles y embarazadas'
              ],
              ctaText: 'Comprar Elixir',
              ctaLink: '#buy-elixir',
              highlighted: false
            }
          ]
        },
        faq: {
          enabled: true,
          title: 'Preguntas Frecuentes',
          items: [
            {
              id: 'f1',
              question: '¿Es apto para pieles con tendencia acneica o grasa?',
              answer: 'Sí. Los aceites utilizados son 100% no comedogénicos (como el jojoba y el escualano), que ayudan a equilibrar la producción natural de sebo sin obstruir los poros.'
            }
          ]
        },
        ctaFinal: {
          enabled: true,
          kicker: 'Cuida tu Piel',
          title: 'Experimenta el poder reparador de la botánica viva.',
          subtitle: 'Recibe tu pedido en 24-48 horas con empaque compostable.',
          primaryCta: { text: 'Conseguir Mi Rutina', link: '#pricing' },
          backgroundStyle: 'glow'
        },
        footer: {
          copyright: '© 2026 Silvestre Botanicals Labs S.L.',
          legalLinks: [
            { label: 'Glosario de Ingredientes', href: '#ingredients' },
            { label: 'Envíos y Muestras', href: '#samples' },
            { label: 'Privacidad', href: '#privacy' }
          ],
          socialLinks: [
            { platform: 'Instagram', url: 'https://instagram.com' }
          ]
        }
      }
    }
  },

  // 4. VALKIRIA APPAREL — Moda Urbana Sostenible de Edición Limitada
  {
    id: 'valkiria-apparel',
    name: 'Valkiria Studio',
    tagline: 'Streetwear minimalista confeccionado con algodón orgánico de 450 GSM y tintes minerales en Portugal',
    category: 'ecommerce',
    style: 'creativo',
    thumbnail: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=80',
    description: 'Estética cyberpunk y streetwear contemporáneo en negro y violeta #8B5CF6, tipografía Space Grotesk, drops numerados, guía de tallas interactiva y lookbook inmersivo.',
    accentColor: '#8B5CF6',
    theme: 'dark',
    defaultConfig: {
      templateId: 'valkiria-apparel',
      name: 'Valkiria Studio',
      slug: 'valkiria-studio',
      domain: 'valkiria.store',
      theme: 'dark',
      accentColor: '#8B5CF6',
      fontFamily: "'Space Grotesk', sans-serif",
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
        title: 'Valkiria Studio — Streetwear Sostenible Pesado 450 GSM',
        description: 'Prendas de alta durabilidad cortadas y cosidas en Portugal con patrones holgados y algodón orgánico.',
        keywords: 'streetwear, hoodie 450gsm, moda sostenible, oversize, algodon organico'
      },
      sections: {
        navbar: {
          brandName: 'VALKIRIA',
          logoText: 'VALKIRIA LABS',
          ctaText: 'Ver Drop 04',
          ctaLink: '#pricing',
          links: [
            { label: 'Drop 04', href: '#pricing' },
            { label: 'Lookbook', href: '#gallery' },
            { label: 'Gramajes & Fit', href: '#bentoFeatures' },
            { label: 'Producción', href: '#faq' }
          ],
          glassBlur: true,
          sticky: true
        },
        hero: {
          enabled: true,
          badge: 'Drop 04 // Disponible',
          kicker: 'French Terry 450 GSM',
          title: 'Gramaje pesado. Caída perfecta. Cero compromisos.',
          highlightTitle: 'Diseñado para durar una década.',
          subtitle: 'Sudaderas, camisetas pesadas y pantalones técnicos confeccionados sin fibras sintéticas ni plásticos ocultos.',
          primaryCta: { text: 'Comprar Drop 04', link: '#pricing' },
          secondaryCta: { text: 'Ver Lookbook', link: '#gallery' },
          imageUrl: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=80',
          style: 'centered'
        },
        marquee: {
          enabled: true,
          speed: 'fast',
          direction: 'left',
          items: [
            { id: 'm1', text: '450 GSM HEAVYWEIGHT COTTON', highlight: true },
            { id: 'm2', text: 'MADE IN PORTO, PORTUGAL' },
            { id: 'm3', text: 'PRE-SHRUNK FABRIC // 0% ENCOGIMIENTO', highlight: true },
            { id: 'm4', text: 'LIMITED RUN // 300 PIECES' }
          ]
        },
        gallery: {
          enabled: true,
          title: 'Lookbook Drop 04',
          subtitle: 'Fotografía en localización industrial.',
          items: [
            { id: 'g1', title: 'Hoodie Boxy Fit en Antracita Mineral', category: 'Sudaderas', imageUrl: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80' },
            { id: 'g2', title: 'Heavy Tee 280 GSM en Blanco Crudo', category: 'Camisetas', imageUrl: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80' }
          ]
        },
        bentoFeatures: {
          enabled: true,
          title: 'La Anatomía de una Prenda Eterna',
          items: [
            {
              id: 'b1',
              title: 'Algodón Peinado 450 GSM',
              description: 'Tejido French Terry de bucle cerrado con tacto suave por dentro y estructura firme por fuera que mantiene el volumen sin deformarse.',
              icon: 'Layers',
              tag: 'Estructura Robusta',
              colSpan: 2
            },
            {
              id: 'b2',
              title: 'Patrón Boxy & Drop Shoulder',
              description: 'Hombros caídos con corte holgado contemporáneo que estiliza la silueta.',
              icon: 'User',
              tag: 'Corte Moderno',
              colSpan: 1
            }
          ]
        },
        productHighlight: {
          enabled: true,
          kicker: 'Prenda Insignia',
          title: 'The Heavy Hoodie 450 GSM — Carbon',
          subtitle: 'Capucha doble sin cordones innecesarios y puños acanalados de alta tensión.',
          description: 'Lavada a la piedra con enzimas naturales para un tacto vintage suave y sin encogimiento tras los lavados.',
          imageUrl: 'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?auto=format&fit=crop&w=1200&q=80',
          specs: [
            { label: 'Composición', value: '100% Orgánico', detail: 'Certificación GOTS' },
            { label: 'Gramaje', value: '450 GSM', detail: 'Peso total aprox. 1.1 kg' },
            { label: 'Origen', value: 'Porto', detail: 'Fabricación ética verificada' }
          ]
        },
        stats: {
          enabled: true,
          items: [
            { id: 's1', value: '300', label: 'Piezas por Drop', description: 'Numeradas y limitadas' },
            { id: 's2', value: '0%', label: 'Poliéster', description: '100% fibras naturales' },
            { id: 's3', value: '10 Años', label: 'Vida Útil Estimada', description: 'Costuras dobles reforzadas' }
          ]
        },
        testimonials: {
          enabled: true,
          title: 'Comunidad Valkiria',
          items: [
            {
              id: 't1',
              name: 'Sergio Valdés',
              role: 'Director Creativo',
              company: 'Berlín',
              quote: 'Es con diferencia la mejor sudadera que he tenido en cuanto a peso y caída de hombros. No pierde el color ni encoge ni un milímetro tras lavarla.',
              avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
              rating: 5
            }
          ]
        },
        pricing: {
          enabled: true,
          title: 'Piezas Disponibles Drop 04',
          billingCycle: 'annual',
          plans: [
            {
              id: 'heavy_hoodie',
              name: 'Heavy Hoodie 450 GSM',
              tag: 'Últimas 40 uds',
              priceMonthly: '110 €',
              priceAnnual: '110 €',
              description: 'Sudadera con capucha doble, corte boxy y bolsillo canguro reforzado.',
              features: [
                '100% Algodón orgánico GOTS de 450 GSM',
                'Capucha doble estructurada sin cordones',
                'Tratamiento preencogido al vapor',
                'Envío gratuito en 24h a Península'
              ],
              ctaText: 'Añadir al Carrito',
              ctaLink: '#buy-hoodie',
              highlighted: true
            },
            {
              id: 'heavy_tee',
              name: 'Heavy Tee 280 GSM',
              priceMonthly: '48 €',
              priceAnnual: '48 €',
              description: 'Camiseta pesada de cuello ajustado de 3cm que no se deforma.',
              features: [
                '100% Algodón peinado de 280 GSM',
                'Cuello ribeteado reforzado con doble pespunte',
                'Corte relajado de caída recta',
                'Tintado mineral no contaminante'
              ],
              ctaText: 'Añadir al Carrito',
              ctaLink: '#buy-tee',
              highlighted: false
            }
          ]
        },
        faq: {
          enabled: true,
          title: 'Guía de Tallas y Envíos',
          items: [
            {
              id: 'f1',
              question: '¿Qué talla debo elegir para un look oversize?',
              answer: 'Nuestras prendas ya cuentan con un corte holgado natural en su talla habitual. Si prefieres un ajuste más estándar al cuerpo, te recomendamos pedir una talla menos.'
            }
          ]
        },
        ctaFinal: {
          enabled: true,
          title: 'Sé parte del Drop 04 antes de que se agote.',
          subtitle: 'Unidades estrictamente limitadas a 300 piezas por colorway.',
          primaryCta: { text: 'Comprar Drop 04', link: '#pricing' },
          backgroundStyle: 'glow'
        },
        footer: {
          copyright: '© 2026 Valkiria Labs Lda. Made in Portugal.',
          legalLinks: [
            { label: 'Guía de Tallas', href: '#sizes' },
            { label: 'Envíos y Cambios Gratis', href: '#returns' }
          ],
          socialLinks: [
            { platform: 'Instagram', url: 'https://instagram.com' }
          ]
        }
      }
    }
  },

  // 5. NOVA PRO GEAR — Audio & Periféricos para Creadores
  {
    id: 'nova-gear',
    name: 'Nova Pro Gear',
    tagline: 'Micrófonos de condensador analógicos, brazos articulados de precisión y controladores para streamers y músicos',
    category: 'ecommerce',
    style: 'oscuro',
    thumbnail: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=1200&q=80',
    description: 'Estética tech studio en negro mate y acento cian #00E5FF, tipografía Inter, diagramas de patrón polar, grabaciones de audio comparativas en vivo y packs de estudio.',
    accentColor: '#00E5FF',
    theme: 'dark',
    defaultConfig: {
      templateId: 'nova-gear',
      name: 'Nova Pro Audio',
      slug: 'nova-pro-audio',
      domain: 'novaprogear.com',
      theme: 'dark',
      accentColor: '#00E5FF',
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      borderRadius: 16,
      published: true,
      sectionOrder: [
        'navbar',
        'hero',
        'logos',
        'marquee',
        'productHighlight',
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
        title: 'Nova Pro Audio — Micrófonos e Interfaces de Grado Estudio',
        description: 'Equipamiento de audio profesional para podcasters, streamers y creadores de contenido exigentes.',
        keywords: 'microfono condensador, interfaz audio usb-c, podcast, stream deck, audio pro'
      },
      sections: {
        navbar: {
          brandName: 'NOVA',
          logoText: 'NOVA PRO AUDIO',
          ctaText: 'Ver Equipos',
          ctaLink: '#pricing',
          links: [
            { label: 'Micrófonos', href: '#pricing' },
            { label: 'Especificaciones', href: '#productHighlight' },
            { label: 'Tecnología', href: '#bentoFeatures' },
            { label: 'Soporte', href: '#faq' }
          ],
          glassBlur: true,
          sticky: true
        },
        hero: {
          enabled: true,
          badge: 'Nova Podcaster X2',
          kicker: 'Cápsula de 34mm Bañada en Oro',
          title: 'Tu voz con la calidez y el detalle de una emisora de radio.',
          highlightTitle: 'Audio Broadcast Profesional.',
          subtitle: 'Micrófono de condensador dual XLR y USB-C con preamplificador analógico integrado de +70dB de ganancia limpia y cero ruido de fondo.',
          primaryCta: { text: 'Conseguir Nova Podcaster X2', link: '#pricing' },
          secondaryCta: { text: 'Escuchar Muestras de Audio', link: '#gallery' },
          imageUrl: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=1200&q=80',
          style: 'centered'
        },
        logos: {
          enabled: true,
          title: 'Utilizado a diario por los principales podcasts y emisoras digitales',
          items: [
            { id: 'l1', name: 'Twitch Studio Partner', tagline: 'Audio Oficial' },
            { id: 'l2', name: 'Spotify for Podcasters', tagline: 'Recomendado' },
            { id: 'l3', name: 'YouTube Creator Lab', tagline: 'Hardware Certificado' },
            { id: 'l4', name: 'Sound On Sound', tagline: '5 Estrellas' }
          ]
        },
        marquee: {
          enabled: true,
          speed: 'normal',
          direction: 'left',
          items: [
            { id: 'm1', text: 'DUAL XLR + USB-C 24-BIT / 192KHZ', highlight: true },
            { id: 'm2', text: 'BUILT-IN DSP PREAMP (+72DB GAIN)' },
            { id: 'm3', text: 'SHOCKMOUNT Y POP FILTER MAGNÉTICO INCLUIDO', highlight: true },
            { id: 'm4', text: 'COMPATIBLE MAC, WINDOWS, IPAD Y LINUX' }
          ]
        },
        productHighlight: {
          enabled: true,
          kicker: 'Ingeniería Acústica',
          title: 'Cápsula de Gran Diafragma Acondicionada',
          subtitle: 'Rechazo fuera del eje excepcional que aísla los teclados mecánicos y el ruido ambiental.',
          description: 'El patrón polar cardioide optimizado captura la resonancia natural de las frecuencias graves y medias sin necesidad de filtros ecualizadores complejos.',
          imageUrl: 'https://images.unsplash.com/photo-1520523839898-507121c172a7?auto=format&fit=crop&w=1200&q=80',
          specs: [
            { label: 'Frecuencia', value: '20Hz - 20kHz', detail: 'Curva plana de alta fidelidad' },
            { label: 'Conversión', value: '24-bit / 192kHz', detail: 'DAC ESS Sabre integrado' },
            { label: 'Conexión', value: 'XLR + USB-C', detail: 'Uso analógico o digital sin latencia' }
          ]
        },
        bentoFeatures: {
          enabled: true,
          title: 'Hardware Diseñado para Creadores',
          items: [
            {
              id: 'b1',
              title: 'Cuerpo de Zinc Fundido Macizo',
              description: 'Blindaje electromagnético completo contra interferencias de pantallas de ordenador, routers Wi-Fi o fuentes de alimentación.',
              icon: 'Shield',
              tag: 'Cero Ruido Eléctrico',
              colSpan: 2
            },
            {
              id: 'b2',
              title: 'Monitoreo Directo con Auriculares',
              description: 'Salida de 3.5mm de alta impedancia con control de mezcla entre el audio de tu ordenador y tu micrófono en tiempo real.',
              icon: 'Headphones',
              tag: 'Latencia Cero',
              colSpan: 1
            }
          ]
        },
        gallery: {
          enabled: true,
          title: 'Setups Profesionales en Acción',
          items: [
            { id: 'g1', title: 'Montaje con Brazo Articulado Oculto', category: 'Estudio', imageUrl: 'https://images.unsplash.com/photo-1589903308904-1010c2294adc?auto=format&fit=crop&w=800&q=80' },
            { id: 'g2', title: 'Conexión Directa a Portátil USB-C', category: 'Móvil', imageUrl: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=800&q=80' }
          ]
        },
        testimonials: {
          enabled: true,
          title: 'Opiniones de Creadores',
          items: [
            {
              id: 't1',
              name: 'David Forner',
              role: 'Host de Podcast',
              company: '500k oyentes/mes',
              quote: 'Pasar del micrófono habitual al Nova Podcaster X2 elevó la calidad de nuestro show a nivel de cadena nacional. Los oyentes lo notaron al instante en el primer episodio.',
              avatarUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
              rating: 5
            }
          ]
        },
        pricing: {
          enabled: true,
          title: 'Equipa tu Estudio',
          billingCycle: 'annual',
          plans: [
            {
              id: 'nova_x2_solo',
              name: 'Nova Podcaster X2 Solo',
              priceMonthly: '189 €',
              priceAnnual: '189 €',
              description: 'Micrófono USB-C/XLR + Soporte de mesa antivibración + Cable USB-C trenzado de 3m.',
              features: [
                'Cápsula de 34mm bañada en oro',
                'Salida dual USB-C + XLR analógica',
                'Soporte antivibraciones de escritorio',
                'Filtro antipop magnético metálico',
                'Software Nova Control para ecualización DSP'
              ],
              ctaText: 'Comprar Solo',
              ctaLink: '#buy-solo',
              highlighted: false
            },
            {
              id: 'nova_x2_studio_pack',
              name: 'Nova Pro Studio Pack',
              tag: 'Pack Completo',
              priceMonthly: '269 €',
              priceAnnual: '269 €',
              description: 'Incluye Micrófono X2 + Brazo articulado con muelle interno oculto + Auriculares de estudio Nova Monitor 40.',
              features: [
                'Todo lo incluido en el modelo Solo',
                'Brazo articulado de aluminio con pasacables',
                'Auriculares circumaurales cerrados de 50mm',
                'Cable XLR profesional de 3 metros blindado',
                'Garantía de reemplazo inmediato de 3 años'
              ],
              ctaText: 'Comprar Studio Pack',
              ctaLink: '#buy-studio-pack',
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
              question: '¿Necesito una tarjeta de sonido externa para usarlo?',
              answer: 'No. Al disponer de puerto USB-C, puedes conectarlo directamente a tu Mac, PC o iPad y funcionará de forma inmediata sin necesidad de drivers adicionales ni interfaz externa.'
            }
          ]
        },
        ctaFinal: {
          enabled: true,
          title: 'Lleva el sonido de tus creaciones al siguiente nivel.',
          subtitle: 'Envío en 24 horas y 30 días de prueba en tu propio estudio.',
          primaryCta: { text: 'Adquirir Nova Studio Pack', link: '#pricing' },
          backgroundStyle: 'glow'
        },
        footer: {
          copyright: '© 2026 Nova Pro Audio Inc.',
          legalLinks: [
            { label: 'Descarga de Software DSP', href: '#downloads' },
            { label: 'Garantía 3 Años', href: '#warranty' },
            { label: 'Contacto Técnico', href: '#support' }
          ],
          socialLinks: [
            { platform: 'YouTube', url: 'https://youtube.com' },
            { platform: 'Twitch', url: 'https://twitch.com' }
          ]
        }
      }
    }
  }
];
