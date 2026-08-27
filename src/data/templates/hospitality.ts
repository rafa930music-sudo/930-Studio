import { TemplateDefinition } from '../../types';

export const HOSPITALITY_TEMPLATES: TemplateDefinition[] = [
  // 1. SAVOR — Alta Cocina de Autor & Menú Degustación Michelin
  {
    id: 'savor-restaurant',
    name: 'Savor Gastronomy',
    tagline: 'Restaurante gastronómico con dos estrellas Michelin, menú degustación de temporada y bodega de autor',
    category: 'hospitality',
    thumbnail: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80',
    description: 'Tonos carbón y ámbar cálido #F59E0B, tipografía Playfair Display, carrusel de pases gastronómicos, bento de huerto propio, galería de emplatados, reserva de mesa, mapa y cta.',
    accentColor: '#F59E0B',
    theme: 'dark',
    defaultConfig: {
      templateId: 'savor-restaurant',
      name: 'Savor Restaurante Gastronómico',
      slug: 'savor-gastronomy',
      domain: 'savorrestaurante.com',
      theme: 'dark',
      accentColor: '#F59E0B',
      fontFamily: "'Playfair Display', Georgia, serif",
      borderRadius: 14,
      published: true,
      sectionOrder: [
        'navbar',
        'hero',
        'logos',
        'slider',
        'bentoFeatures',
        'productHighlight',
        'gallery',
        'stats',
        'testimonials',
        'pricing',
        'map',
        'faq',
        'ctaFinal',
        'footer'
      ],
      seo: {
        title: 'Savor Restaurante — Cocina de Autor con 2 Estrellas Michelin',
        description: 'Una experiencia sensorial irrepetible inspirada en la huerta mediterránea, el fuego de leña y la pesca sostenible.',
        keywords: 'restaurante michelin, alta cocina, menu degustacion, cocina de autor, reservas restaurante de lujo, maridaje de vinos'
      },
      sections: {
        navbar: {
          brandName: 'Savor',
          logoText: 'SAVOR RESTAURANTE',
          ctaText: 'Reservar Mesa',
          ctaLink: '#pricing',
          links: [
            { label: 'Menú Degustación', href: '#pricing' },
            { label: 'La Huerta', href: '#features' },
            { label: 'Plato Icono', href: '#product' },
            { label: 'Galería', href: '#gallery' },
            { label: 'Ubicación', href: '#map' }
          ],
          glassBlur: true,
          sticky: true
        },
        hero: {
          enabled: true,
          badge: '2 Estrellas Michelin 2026 • 3 Soles Repsol',
          kicker: 'Cocina de Emoción y Paisaje',
          title: 'El sabor de la tierra, elevado a su',
          highlightTitle: 'máxima expresión.',
          subtitle: 'Un viaje sensorial de 16 pases ideado por el chef Mateo Arriaga donde el producto de proximidad dialoga con técnicas ancestrales de fermentación y brasa viva.',
          primaryCta: { text: 'Reservar Experiencia Gastronómica', link: '#pricing' },
          secondaryCta: { text: 'Ver Galería de Pases →', link: '#gallery' },
          imageUrl: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1600&q=80',
          style: 'centered'
        },
        logos: {
          enabled: true,
          title: 'DISTINCIONES Y GUÍAS GASTRONÓMICAS INTERNACIONALES',
          items: [
            { id: 'l1', name: 'Guía Michelin 2026', tagline: '2 Estrellas' },
            { id: 'l2', name: 'Guía Repsol', tagline: '3 Soles' },
            { id: 'l3', name: 'Relais & Châteaux', tagline: 'Miembro de Honor' },
            { id: 'l4', name: 'Les Grandes Tables', tagline: 'Excellence' }
          ]
        },
        slider: {
          enabled: true,
          title: 'Pases de la Temporada de Otoño & Invierno',
          slides: [
            {
              id: 's1',
              title: 'Cigala Real a la Brasa de Sarmiento',
              subtitle: 'Con emulsión de sus corales y jugo concentrado de chirivía tostada al humo.',
              imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=80',
              ctaText: 'Ver Detalle'
            },
            {
              id: 's2',
              title: 'Pichón de Bresse en Dos Cocciones',
              subtitle: 'Pechuga rosada con salsa perigueux de trufa negra melanosporum y milhojas de tubérculos.',
              imageUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1000&q=80',
              ctaText: 'Ver Detalle'
            },
            {
              id: 's3',
              title: 'Texturas de Cacao Criollo & Helado de Romero',
              subtitle: 'Ganache aireada de chocolate al 75%, tierra de avellanas y aceite de oliva virgen temprano.',
              imageUrl: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1000&q=80',
              ctaText: 'Ver Detalle'
            }
          ]
        },
        bentoFeatures: {
          enabled: true,
          kicker: 'Filosofía y Origen',
          title: 'Respeto absoluto por el producto y el tiempo.',
          subtitle: 'Cada ingrediente proviene de nuestra huerta biodinámica o de lonjas artesanales seleccionadas cada amanecer.',
          items: [
            {
              id: 'f1',
              title: 'Huerto Biodinámico Propio de 3 Hectáreas',
              description: 'Cultivamos más de 80 variedades de hortalizas olvidadas, flores comestibles y hierbas aromáticas recolectadas dos horas antes de cada servicio.',
              icon: 'Leaf',
              tag: '100% Km 0',
              colSpan: 2,
              statNumber: '80+',
              statLabel: 'Variedades botánicas autóctonas cultivadas'
            },
            {
              id: 'f2',
              title: 'Cava con Más de 1.400 Referencias',
              description: 'Nuestra sumiller jefa selecciona joyas de pequeños viticultores independientes, añadas históricas y vinos naturales.',
              icon: 'Wine',
              tag: 'Cava de Autor',
              colSpan: 1
            },
            {
              id: 'f3',
              title: 'Fuego de Encina y Fermentaciones',
              description: 'Técnicas ancestrales de brasa japonesa robata combinadas con koji, garums caseros y vinagres añejos.',
              icon: 'Flame',
              tag: 'Artesanal',
              colSpan: 1
            },
            {
              id: 'f4',
              title: 'Solo 10 Mesas por Servicio',
              description: 'Una atmósfera de serenidad e intimidad absoluta para que cada comensal disfrute de una atención exclusiva.',
              icon: 'Users',
              tag: 'Privacidad',
              colSpan: 2,
              statNumber: '28',
              statLabel: 'Comensales máximos por turno'
            }
          ]
        },
        productHighlight: {
          enabled: true,
          badge: 'El Plato Icono',
          kicker: 'Creación de Vanguardia',
          title: 'Huevo de Campo a 63° con Crema de Boletus y Trufa Negra.',
          subtitle: 'La síntesis de nuestro compromiso con el bosque y el tiempo.',
          description: 'Yema untuosa cocinada a baja temperatura milimétrica, reposada sobre un jugo denso de hongos silvestres recolectados en la sierra y láminas generosas de trufa negra de temporada rallada en mesa.',
          imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1400&q=80',
          specs: [
            { label: 'Maridaje Recomendado', value: 'Champagne Grand Cru Blanc de Blancs Millésimé' },
            { label: 'Tiempo de Preparación', value: '72 horas de reducción del caldo base' },
            { label: 'Temperatura de Servicio', value: '62.5°C exactos' }
          ]
        },
        gallery: {
          enabled: true,
          title: 'El Espacio y la Atmósfera',
          images: [
            { id: 'g1', url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80', caption: 'Sala principal con iluminación cenital cálida' },
            { id: 'g2', url: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=800&q=80', caption: 'Mesa del chef frente a la cocina vista' },
            { id: 'g3', url: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80', caption: 'Cava de cristal con temperatura controlada' },
            { id: 'g4', url: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80', caption: 'Pase de alta cocina con emplatado en vivo' }
          ]
        },
        stats: {
          enabled: true,
          items: [
            { id: 's1', value: '2', label: 'Estrellas Michelin Consecutivas' },
            { id: 's2', value: '16', label: 'Pases en el Menú Degustación' },
            { id: 's3', value: '1.400+', label: 'Referencias en Nuestra Cava' },
            { id: 's4', value: '98%', label: 'Ingredientes de Origen Local' }
          ]
        },
        testimonials: {
          enabled: true,
          title: 'Opiniones de críticos gastronómicos y comensales.',
          items: [
            {
              id: 't1',
              author: 'Rodrigo Castelló',
              name: 'Rodrigo Castelló',
              role: 'Crítico Gastronómico en Guía Gourmet',
              company: 'Guía Gourmet',
              quote: 'Savor no solo sirve platos extraordinarios, cuenta una historia viva del paisaje mediterráneo con una técnica y una delicadeza que conmueven en cada bocado.',
              avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
              rating: 5
            },
            {
              id: 't2',
              author: 'Valeria Montiel',
              name: 'Valeria Montiel',
              role: 'Sommelier Internacional',
              company: 'Vinum Society',
              quote: 'El maridaje propuesto por el equipo de sumillería es una clase magistral de armonía y sorpresa. Una de las mejores cenas de mi vida.',
              avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
              rating: 5
            }
          ]
        },
        pricing: {
          enabled: true,
          title: 'Nuestras Experiencias Degustación',
          billingCycle: 'monthly',
          plans: [
            {
              id: 'p1',
              name: 'Menú Esencia (12 Pases)',
              priceMonthly: '145€',
              priceAnnual: 'Por persona (Bebida aparte)',
              description: 'Un recorrido esencial por nuestros clásicos de huerta y mar de la temporada actual.',
              features: [
                '12 pases gastronómicos completos',
                'Aperitivo de bienvenida en bodega',
                'Selección de panes artesanos y aceites tempranos',
                'Servicio de café de especialidad e infusiones del huerto'
              ],
              highlighted: false,
              ctaText: 'Reservar Menú Esencia'
            },
            {
              id: 'p2',
              name: 'Menú Gran Savor (16 Pases)',
              priceMonthly: '195€',
              priceAnnual: 'Por persona (Bebida aparte)',
              description: 'La experiencia culinaria completa con los platos más complejos e innovadores del chef.',
              features: [
                '16 pases gastronómicos de autor',
                'Visita guiada a la huerta y cocina con el chef',
                'Pase exclusivo de quesos artesanos afinados',
                'Petit fours y cóctel de despedida en terraza'
              ],
              highlighted: true,
              ctaText: 'Reservar Gran Savor'
            }
          ]
        },
        map: {
          enabled: true,
          title: 'Ubicación & Horarios de Servicio',
          address: 'Paseo de la Alquería, 14, 46018 Valencia, España',
          latitude: 39.4699,
          longitude: -0.3763,
          hours: 'Almuerzos: Jueves a Domingo de 13:30 a 16:30 | Cenas: Miércoles a Sábado de 20:30 a 23:30'
        },
        faq: {
          enabled: true,
          title: 'Preguntas Frecuentes sobre Reservas',
          items: [
            {
              id: 'q1',
              question: '¿Con cuánta antelación se deben realizar las reservas?',
              answer: 'El calendario de reservas se abre con 60 días de antelación el primer día de cada mes a las 10:00h. Recomendamos reservar con tiempo para servicios de fin de semana.'
            },
            {
              id: 'q2',
              question: '¿Pueden adaptar el menú a alergias o dietas vegetarianas?',
              answer: 'Sí. Adaptamos nuestros menús con aviso previo de al menos 48 horas para celíacos, vegetarianos, embarazadas y comensales con intolerancias alimentarias severas.'
            },
            {
              id: 'q3',
              question: '¿Existe algún código de vestimenta requerido?',
              answer: 'Sugerimos un código elegante informal (smart casual). No está permitido el acceso con ropa deportiva o calzado de playa.'
            },
            {
              id: 'q4',
              question: '¿Disponen de maridaje de vinos para los menús?',
              answer: 'Ofrecemos dos propuestas de maridaje: Maridaje de Grandes Terruños (75€) y Maridaje Exclusivo de Joyas de Colección (120€), además de maridaje sin alcohol a base de kombuchas e infusiones propias.'
            },
            {
              id: 'q5',
              question: '¿Cuál es la política de cancelación de reservas?',
              answer: 'Las cancelaciones realizadas con más de 48 horas de antelación no tienen ningún coste. Para cancelaciones posteriores o no presentación se cargará una tarifa de 50€ por comensal.'
            },
            {
              id: 'q6',
              question: '¿Disponen de servicio de aparcacoches o parking privado?',
              answer: 'Contamos con parking privado vigilado y gratuito en el propio recinto del restaurante con plazas de recarga eléctrica para vehículos.'
            }
          ]
        },
        ctaFinal: {
          enabled: true,
          title: 'Una velada inolvidable te espera en Savor.',
          subtitle: 'Reserva tu mesa y déjate llevar por una experiencia gastronómica única.',
          primaryCta: { text: 'Solicitar Reserva de Mesa', link: '#pricing' }
        },
        footer: {
          copyright: '© 2026 Savor Restaurante Gastronómico S.L. Todos los derechos reservados.',
          legalLinks: [
            { label: 'Política de Reservas', href: '#reservas' },
            { label: 'Aviso Legal', href: '#legal' },
            { label: 'Privacidad', href: '#privacy' }
          ],
          socialLinks: [
            { platform: 'Instagram', url: 'https://instagram.com' },
            { platform: 'Facebook', url: 'https://facebook.com' }
          ]
        }
      }
    }
  },

  // 2. KANSO RAMEN — Taberna Japonesa & Ramen Artesanal
  {
    id: 'kanso-ramen',
    name: 'Kanso Ramen Bar',
    tagline: 'Taberna japonesa tradicional especializada en caldos tonkotsu cocinados a fuego lento durante 18 horas y fideos frescos caseros',
    category: 'hospitality',
    thumbnail: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=1200&q=80',
    description: 'Estética en negro carbón #12121A y rojo carmesí #EF4444, tipografía Space Grotesk, menú interactivo con fotos de cuencos de ramen, gyozas caseras y sake artesanal.',
    accentColor: '#EF4444',
    theme: 'dark',
    defaultConfig: {
      templateId: 'kanso-ramen',
      name: 'Kanso Ramen Bar',
      slug: 'kanso-ramen',
      domain: 'kansoramen.com',
      theme: 'dark',
      accentColor: '#EF4444',
      fontFamily: "'Space Grotesk', sans-serif",
      borderRadius: 12,
      published: true,
      sectionOrder: [
        'navbar',
        'hero',
        'bentoFeatures',
        'productHighlight',
        'gallery',
        'stats',
        'testimonials',
        'pricing',
        'map',
        'faq',
        'ctaFinal',
        'footer'
      ],
      seo: {
        title: 'Kanso Ramen — Auténtico Ramen Artesanal & Izakaya Japonesa',
        description: 'Caldos cocinados 18 horas, fideos amasados a diario y chashu braseado al soplete.',
        keywords: 'ramen artesanal, tonkotsu ramen, izakaya japonesa, fideos japoneses, sake bar'
      },
      sections: {
        navbar: {
          brandName: 'Kanso Ramen',
          logoText: 'KANSO // RAMEN',
          ctaText: 'Ver Carta & Pedir',
          ctaLink: '#pricing',
          links: [
            { label: 'El Caldo', href: '#features' },
            { label: 'Plato Estrella', href: '#product' },
            { label: 'Especialidades', href: '#pricing' },
            { label: 'Ubicación', href: '#map' }
          ],
          glassBlur: true,
          sticky: true
        },
        hero: {
          enabled: true,
          badge: 'Fideos amasados a diario en nuestro obrador propio',
          kicker: 'Tradición de Tokio & Fukuoka',
          title: 'El alma del ramen japonés,',
          highlightTitle: 'en cada cucharada.',
          subtitle: 'Caldos densos cocinados lentamente durante 18 horas, tare añejado en barrica de cedro y chashu de cerdo ibérico braseado al soplete al momento.',
          primaryCta: { text: 'Explorar Nuestra Carta', link: '#pricing' },
          secondaryCta: { text: 'Cómo Llegar a la Taberna →', link: '#map' },
          imageUrl: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=1600&q=80',
          style: 'centered'
        },
        bentoFeatures: {
          enabled: true,
          kicker: 'Los Cuatro Pilares',
          title: 'La obsesión por el detalle en cada ingrediente.',
          subtitle: 'No usamos polvos concentrados ni atajos industriales: solo materias primas puras y tiempo.',
          items: [
            {
              id: 'f1',
              title: 'Caldo Tonkotsu de 18 Horas de Ebullición',
              description: 'Huesos de cerdo seleccionados a fuego constante hasta extraer todo el colágeno y lograr una emulsión cremosa y aterciopelada.',
              icon: 'Flame',
              tag: '18h Fuego Lento',
              colSpan: 2,
              statNumber: '18h',
              statLabel: 'Tiempo mínimo de cocción ininterrumpida'
            },
            {
              id: 'f2',
              title: 'Fideos Frescos de Trigo Japonés',
              description: 'Amasados cada mañana con agua alcalina kansui para conseguir la elasticidad y textura al dente perfecta.',
              icon: 'Utensils',
              tag: 'Obrador Propio',
              colSpan: 1
            },
            {
              id: 'f3',
              title: 'Chashu Ibérico Marinado en Soja Dulce',
              description: 'Panceta enrollada y cocinada a baja temperatura durante 12 horas, marcada con soplete justo antes de servir.',
              icon: 'Sparkles',
              tag: 'Cerdo Ibérico',
              colSpan: 1
            },
            {
              id: 'f4',
              title: 'Huevo Ajitsuke de Yema Líquida',
              description: 'Huevos de campo marinados 24 horas en sake, mirin y soja con el centro meloso que se funde en el caldo.',
              icon: 'CheckCircle2',
              tag: 'Marinado 24h',
              colSpan: 2,
              statNumber: '100%',
              statLabel: 'Huevos de gallinas camperas criadas en libertad'
            }
          ]
        },
        productHighlight: {
          enabled: true,
          badge: 'El Cuenco Insignia',
          kicker: 'Especialidad de la Casa',
          title: 'Kanso Black Garlic Tonkotsu Ramen.',
          subtitle: 'Intensidad, umami profundo y aroma a ajo negro tostado.',
          description: 'Nuestro caldo tonkotsu estrella enriquecido con mayu (aceite artesanal de ajo negro asado al wok), doble ración de chashu, cebolleta tierna japonesa, alga nori crujiente y setas kikurage.',
          imageUrl: 'https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&w=1400&q=80',
          specs: [
            { label: 'Nivel de Picante', value: 'Suave / Medio / Extremo (a elegir)' },
            { label: 'Punto del Fideo', value: 'Firme (Katamé) o Clásico' },
            { label: 'Opción Sin Cerdo', value: 'Disponible en caldo Tori Paitan de ave y vegetariano Miso' }
          ]
        },
        gallery: {
          enabled: true,
          title: 'Ambiente de Taberna Japonesa',
          images: [
            { id: 'g1', url: 'https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&w=800&q=80', caption: 'Cuenco de Black Garlic Tonkotsu' },
            { id: 'g2', url: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=800&q=80', caption: 'Gyozas caseras doradas a la plancha' },
            { id: 'g3', url: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80', caption: 'Barra de madera con servicio directo desde cocina' }
          ]
        },
        stats: {
          enabled: true,
          items: [
            { id: 's1', value: '18h', label: 'Horas de Cocción del Caldo' },
            { id: 's2', value: '450+', label: 'Cuencos Servidos Diariamente' },
            { id: 's3', value: '4.9/5', label: 'Puntuación en Google Reviews' }
          ]
        },
        testimonials: {
          enabled: true,
          title: 'Opiniones de nuestros comensales.',
          items: [
            {
              id: 't1',
              author: 'Kenji Takahashi',
              name: 'Kenji Takahashi',
              role: 'Consultor Gastronómico Tokio-Madrid',
              company: 'Tokyo Food Lab',
              quote: 'Hacía años que no probaba un caldo tonkotsu tan auténtico fuera de Japón. La textura de los fideos caseros y el punto del ajitama son absolutamente perfectos.',
              avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
              rating: 5
            }
          ]
        },
        pricing: {
          enabled: true,
          title: 'Carta de Especialidades Principales',
          billingCycle: 'monthly',
          plans: [
            {
              id: 'p1',
              name: 'Tonkotsu Clásico de Fukuoka',
              priceMonthly: '13.50€',
              priceAnnual: 'Cuenco completo',
              description: 'Caldo blanco cremoso de cerdo, fideos rectos finos, chashu ibérico, bambú menma y huevo marinado.',
              features: ['Caldo tonkotsu 18h', '2 piezas de chashu ibérico', 'Huevo ajitsuke entero', 'Cebolleta negi y nori'],
              highlighted: false,
              ctaText: 'Pedir en Barra'
            },
            {
              id: 'p2',
              name: 'Black Garlic Tonkotsu Deluxe',
              priceMonthly: '15.50€',
              priceAnnual: 'El más solicitado',
              description: 'Nuestra receta insignia con aceite de ajo negro asado, triple chashu y setas kikurage crujientes.',
              features: ['Aceite mayu de ajo negro', '3 piezas de chashu al soplete', 'Huevo ajitsuke meloso', 'Ración extra de fideos (Kaedama) opcional'],
              highlighted: true,
              ctaText: 'Pedir Especialidad'
            }
          ]
        },
        map: {
          enabled: true,
          title: 'Encuéntranos en el Barrio de Malasaña',
          address: 'Calle del Pez, 22, 28004 Madrid, España',
          latitude: 40.4241,
          longitude: -3.7051,
          hours: 'Abierto todos los días de 13:00 a 16:30 y de 20:00 a 23:45. Sin reserva previa.'
        },
        faq: {
          enabled: true,
          title: 'Preguntas Frecuentes sobre la Taberna',
          items: [
            {
              id: 'q1',
              question: '¿Se admiten reservas previas para grupos?',
              answer: 'Funcionamos con el sistema tradicional japonés de entrada por orden de llegada para asegurar la máxima fluidez. El tiempo medio de espera en horas punta no suele superar los 15-20 minutos.'
            },
            {
              id: 'q2',
              question: '¿Tienen opciones vegetarianas o veganas disponibles?',
              answer: 'Sí. Preparamos a diario un delicioso ramen vegano con caldo a base de setas shiitake secas, alga kombu y miso blanco tostado acompañado de tofu marinado.'
            },
            {
              id: 'q3',
              question: '¿Qué es el servicio de Kaedama?',
              answer: 'El kaedama consiste en pedir una ración extra de fideos recién cocidos directamente a tu cuenco si todavía te queda caldo caliente por solo 2€ adicionales.'
            },
            {
              id: 'q4',
              question: '¿Tienen cervezas y sakes japoneses de importación?',
              answer: 'Disponemos de cervezas artesanales de Kioto, refrescos japoneses Ramune y una selección de sakes Junmai y Daiginjo servidos fríos o tibios.'
            },
            {
              id: 'q5',
              question: '¿Disponen de servicio de comida para llevar?',
              answer: 'Sí. Empacamos el caldo hirviendo y los fideos en compartimentos separados para que puedas combinarlos en casa manteniendo la textura óptima.'
            },
            {
              id: 'q6',
              question: '¿Los fideos contienen gluten?',
              answer: 'Nuestros fideos tradicionales se elaboran con harina de trigo alcalina con gluten. Contamos con fideos de arroz como sustituto bajo petición previa.'
            }
          ]
        },
        ctaFinal: {
          enabled: true,
          title: 'Un cuenco humeante de auténtico ramen te espera.',
          subtitle: 'Ven a disfrutar de la verdadera taberna japonesa en el centro de la ciudad.',
          primaryCta: { text: 'Ver Cómo Llegar', link: '#map' }
        },
        footer: {
          copyright: '© 2026 Kanso Ramen Bar S.L. Todos los derechos reservados.',
          legalLinks: [
            { label: 'Información de Alérgenos', href: '#alergenos' },
            { label: 'Aviso Legal', href: '#legal' }
          ],
          socialLinks: [
            { platform: 'Instagram', url: 'https://instagram.com' }
          ]
        }
      }
    }
  },

  // 3. VELVET LOUNGE — Cocktail Club & Speakeasy
  {
    id: 'velvet-lounge',
    name: 'Velvet Lounge & Jazz',
    tagline: 'Club clandestino de coctelería de autor, destilados de colección y sesiones nocturnas de jazz en directo',
    category: 'hospitality',
    thumbnail: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1200&q=80',
    description: 'Estética en negro medianoche y oro viejo #D97706, tipografía Playfair Display, carta de cócteles botánicos, agenda de conciertos de jazz y reserva de barra privada.',
    accentColor: '#D97706',
    theme: 'dark',
    defaultConfig: {
      templateId: 'velvet-lounge',
      name: 'Velvet Cocktail Club & Speakeasy',
      slug: 'velvet-lounge',
      domain: 'velvetcocktail.club',
      theme: 'dark',
      accentColor: '#D97706',
      fontFamily: "'Playfair Display', Georgia, serif",
      borderRadius: 14,
      published: true,
      sectionOrder: [
        'navbar',
        'hero',
        'slider',
        'bentoFeatures',
        'productHighlight',
        'gallery',
        'stats',
        'testimonials',
        'pricing',
        'map',
        'faq',
        'ctaFinal',
        'footer'
      ],
      seo: {
        title: 'Velvet Lounge — Coctelería de Autor & Club de Jazz Clandestino',
        description: 'Coctelería botánica, destilados de época y música en vivo en un ambiente íntimo y sofisticado.',
        keywords: 'cocteleria de autor, speakeasy, club de jazz, reservas cocktail bar, destilados raros'
      },
      sections: {
        navbar: {
          brandName: 'Velvet Lounge',
          logoText: 'VELVET // SPEAKEASY',
          ctaText: 'Reservar Mesa VIP',
          ctaLink: '#pricing',
          links: [
            { label: 'Coctelería', href: '#features' },
            { label: 'El Trago Icono', href: '#product' },
            { label: 'Experiencias', href: '#pricing' },
            { label: 'Ubicación Secreta', href: '#map' }
          ],
          glassBlur: true,
          sticky: true
        },
        hero: {
          enabled: true,
          badge: 'Top 50 Cocktail Bars of Europe 2026 • Jazz en Vivo Cada Noche',
          kicker: 'El Santuario de la Noche',
          title: 'Coctelería de autor y jazz.',
          highlightTitle: 'Tras la puerta secreta.',
          subtitle: 'Un espacio íntimo donde la mixología molecular se encuentra con los destilados de época y la música analógica en directo.',
          primaryCta: { text: 'Reservar Acceso VIP', link: '#pricing' },
          secondaryCta: { text: 'Explorar Menú de Tragos →', link: '#features' },
          imageUrl: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1600&q=80',
          style: 'centered'
        },
        slider: {
          enabled: true,
          title: 'Cócteles Insignia de la Temporada',
          slides: [
            {
              id: 's1',
              title: 'Smoked Bourbon Old Fashioned',
              subtitle: 'Bourbon añejado 12 años infusionado en roble quemado, amargo de angostura y piel de naranja confitada al soplete.',
              imageUrl: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1000&q=80',
              ctaText: 'Ver Detalle'
            },
            {
              id: 's2',
              title: 'Botanical Gin & Clarified Fig',
              subtitle: 'Ginebra artesanal destilada con botánicos silvestres, licor de higo clarificado y agua tónica artesanal.',
              imageUrl: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1000&q=80',
              ctaText: 'Ver Detalle'
            }
          ]
        },
        bentoFeatures: {
          enabled: true,
          kicker: 'Mixología Clandestina',
          title: 'El arte de la destilación y la mezcla impecable.',
          subtitle: 'Ingredientes infusionados en laboratorio propio con técnicas de rotovapor y clarificación por frío.',
          items: [
            {
              id: 'f1',
              title: 'Hielo Cristalino Tallado a Mano',
              description: 'Bloques de hielo puro con congelación direccional de 72 horas, tallados en diamantes y esferas para una dilución mínima.',
              icon: 'Sparkles',
              tag: 'Hielo Puro',
              colSpan: 2,
              statNumber: '72h',
              statLabel: 'Congelación direccional sin burbujas de aire'
            },
            {
              id: 'f2',
              title: 'Colección de Whiskeys & Rones Raros',
              description: 'Más de 350 botellas históricas de destilerías desaparecidas y barricas individuales de edición limitada.',
              icon: 'Wine',
              tag: 'Ediciones Raras',
              colSpan: 1
            },
            {
              id: 'f3',
              title: 'Cuarteto de Jazz Acústico en Directo',
              description: 'Músicos de renombre internacional interpretando standards de Blue Note y arreglos contemporáneos todas las noches.',
              icon: 'Music',
              tag: 'Jazz en Vivo',
              colSpan: 1
            },
            {
              id: 'f4',
              title: 'Acceso Restringido y Clave de Puerta',
              description: 'Aforo limitado a 45 personas para mantener una atmósfera de sosiego, conversación y privacidad total.',
              icon: 'Key',
              tag: 'Speakeasy',
              colSpan: 2,
              statNumber: '45',
              statLabel: 'Plazas exclusivas por sesión'
            }
          ]
        },
        productHighlight: {
          enabled: true,
          badge: 'El Trago Icono',
          kicker: 'Firma Velvet',
          title: 'The Golden Velvet Negroni.',
          subtitle: 'Ginebra macerada en azafrán, vermut rojo infusionado con piel de cacao y Campari clarificado.',
          description: 'Servido sobre un bloque cúbico de hielo con lámina de pan de oro comestible de 24 quilates y perfume de bergamota pulverizado al momento frente al comensal.',
          imageUrl: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1400&q=80',
          specs: [
            { label: 'Graduación', value: '24% Vol.' },
            { label: 'Servicio', value: 'Vaso Old Fashioned de cristal de Bohemia tallado' },
            { label: 'Perfil de Sabor', value: 'Amargo elegante, especiado noble y final largo de cacao' }
          ]
        },
        gallery: {
          enabled: true,
          title: 'La Atmósfera Clandestina',
          images: [
            { id: 'g1', url: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80', caption: 'Barra de mármol y latón iluminada con lámparas de época' },
            { id: 'g2', url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80', caption: 'Zona de sillones de terciopelo y escenario de jazz' }
          ]
        },
        stats: {
          enabled: true,
          items: [
            { id: 's1', value: '350+', label: 'Destilados de Colección en Carta' },
            { id: 's2', value: '6 Noches', label: 'De Jazz en Directo por Semana' },
            { id: 's3', value: 'Top 50', label: 'Bares de Europa 2026' }
          ]
        },
        testimonials: {
          enabled: true,
          title: 'Reseñas de visitantes y amantes de la mixología.',
          items: [
            {
              id: 't1',
              author: 'Hugo Berlanga',
              name: 'Hugo Berlanga',
              role: 'Escritor y Miembro del Club de Destilados',
              company: 'Cocktail Masters',
              quote: 'Velvet devuelve el misticismo a la noche. La atención en barra es quirúrgica y la acústica para escuchar el contrabajo mientras saboreas un Negroni es insuperable.',
              avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
              rating: 5
            }
          ]
        },
        pricing: {
          enabled: true,
          title: 'Experiencias de Barra & Reservas VIP',
          billingCycle: 'monthly',
          plans: [
            {
              id: 'p1',
              name: 'Mesa Lounge Jazz',
              priceMonthly: '45€',
              priceAnnual: 'Por persona (Crédito en consumiciones)',
              description: 'Reserva de mesa garantizada para 2 a 4 personas durante el concierto de jazz.',
              features: ['Mesa de terciopelo reservada', '2 cócteles de autor incluidos', 'Aperitivo gourmet de frutos secos trufados', 'Acceso prioritario sin cola'],
              highlighted: false,
              ctaText: 'Reservar Mesa'
            },
            {
              id: 'p2',
              name: 'Masterclass Privada de Mixología',
              priceMonthly: '95€',
              priceAnnual: 'Por persona (Grupos reducidos)',
              description: 'Sesión de 2 horas con nuestro head bartender aprendiendo técnicas de destilación y cata de 4 cócteles.',
              features: ['Cata de destilados de colección', 'Elaboración guiada de 3 cócteles propios', 'Dosier de recetas y técnicas', 'Regalo de jigger profesional'],
              highlighted: true,
              ctaText: 'Reservar Masterclass'
            }
          ]
        },
        map: {
          enabled: true,
          title: 'Ubicación Confidencial',
          address: 'Pasadizo de San Ginés, 7, 28013 Madrid, España (Detrás de la librería)',
          latitude: 40.4168,
          longitude: -3.7038,
          hours: 'Martes a Domingo de 19:30 a 03:00. Código de vestimenta elegante.'
        },
        faq: {
          enabled: true,
          title: 'Preguntas Frecuentes sobre Velvet',
          items: [
            {
              id: 'q1',
              question: '¿Cómo se obtiene la clave de acceso a la puerta secreta?',
              answer: 'Al confirmar tu reserva a través de nuestra web recibirás un SMS confidencial 2 horas antes con la contraseña del día para acceder por la entrada oculta.'
            },
            {
              id: 'q2',
              question: '¿A qué hora comienzan los pases de jazz en vivo?',
              answer: 'El primer set musical inicia a las 21:30 y el segundo a las 23:45, con descansos intercalados con música seleccionada en vinilo analógico.'
            },
            {
              id: 'q3',
              question: '¿Se sirven opciones de comida o picoteo en mesa?',
              answer: 'Disponemos de una carta selecta de aperitivos fríos: tablas de quesos afinados, jamón de bellota 100% ibérico, ostras frescas y trufas artesanales.'
            },
            {
              id: 'q4',
              question: '¿Hay algún requisito de edad o vestimenta?',
              answer: 'El acceso es exclusivo para mayores de 21 años. El código de vestimenta es elegante formal (no se admiten zapatillas deportivas ni ropa deportiva).'
            },
            {
              id: 'q5',
              question: '¿Se puede reservar el local para celebraciones privadas?',
              answer: 'Ofrecemos alquiler privado del club completo para eventos corporativos o aniversarios los lunes y martes bajo solicitud previa.'
            },
            {
              id: 'q6',
              question: '¿Tienen opciones de cócteles sin alcohol (Mocktails)?',
              answer: 'Diseñamos cócteles botánicos sin alcohol elaborados con destilados zero-proof, hidrolatos florales y fermentados caseros.'
            }
          ]
        },
        ctaFinal: {
          enabled: true,
          title: 'La noche cobra vida en Velvet.',
          subtitle: 'Reserva tu rincón exclusivo y déjate envolver por la música y la mixología.',
          primaryCta: { text: 'Solicitar Clave de Acceso', link: '#pricing' }
        },
        footer: {
          copyright: '© 2026 Velvet Lounge & Cocktail Club S.L. Todos los derechos reservados.',
          legalLinks: [
            { label: 'Normas del Club', href: '#normas' },
            { label: 'Privacidad', href: '#privacy' }
          ],
          socialLinks: [
            { platform: 'Instagram', url: 'https://instagram.com' }
          ]
        }
      }
    }
  },

  // 4. BOTANIK CAFÉ — Specialty Coffee & Artisan Bakery
  {
    id: 'botanik-cafe',
    name: 'Botanik Specialty Coffee',
    tagline: 'Cafetería de especialidad de origen ético, tostador artesanal y obrador de repostería con masa madre orgánica',
    category: 'hospitality',
    thumbnail: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80',
    description: 'Estética en blanco roto y verde esmeralda botánico #10B981, tipografía Outfit, menú de cafés de filtro V60, croissants de mantequilla francesa y suscripción de café en grano.',
    accentColor: '#10B981',
    theme: 'dark',
    defaultConfig: {
      templateId: 'botanik-cafe',
      name: 'Botanik Specialty Coffee & Roasters',
      slug: 'botanik-cafe',
      domain: 'botanikcoffee.com',
      theme: 'dark',
      accentColor: '#10B981',
      fontFamily: "'Outfit', sans-serif",
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
        'map',
        'faq',
        'ctaFinal',
        'footer'
      ],
      seo: {
        title: 'Botanik Coffee — Café de Especialidad & Tostador Artesanal',
        description: 'Lotes únicos de café de finca 100% Arábica con tueste semanal y bollería artesana de masa madre.',
        keywords: 'cafe de especialidad, tostador artesanal, v60 filter coffee, bolleria masa madre, brunch saludable'
      },
      sections: {
        navbar: {
          brandName: 'Botanik Café',
          logoText: 'BOTANIK // COFFEE',
          ctaText: 'Comprar Café en Grano',
          ctaLink: '#pricing',
          links: [
            { label: 'Nuestros Orígenes', href: '#features' },
            { label: 'El Lote Estrella', href: '#product' },
            { label: 'Suscripción', href: '#pricing' },
            { label: 'Visítanos', href: '#map' }
          ],
          glassBlur: true,
          sticky: true
        },
        hero: {
          enabled: true,
          badge: 'Tueste Artesanal Semanal • Puntuación SCA > 86 Puntos',
          kicker: 'Del Grano a la Taza',
          title: 'El ritual del café de especialidad,',
          highlightTitle: 'tostado con alma.',
          subtitle: 'Compramos directamente a pequeños caficultores de Etiopía, Colombia y Kenia a precios justos para ofrecerte tazas limpias, florales y llenas de matices.',
          primaryCta: { text: 'Ver Lotes de Café en Grano', link: '#pricing' },
          secondaryCta: { text: 'Conoce Nuestra Cafetería →', link: '#map' },
          imageUrl: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1600&q=80',
          style: 'centered'
        },
        logos: {
          enabled: true,
          title: 'CERTIFICACIONES DE COMERCIO DIRECTO Y CALIDAD SCA',
          items: [
            { id: 'l1', name: 'Specialty Coffee Association', tagline: 'Certified Roaster' },
            { id: 'l2', name: 'Direct Trade Certified', tagline: 'Fair Remuneration' },
            { id: 'l3', name: 'Organic Agriculture EU', tagline: '100% Bio' }
          ]
        },
        bentoFeatures: {
          enabled: true,
          kicker: 'Nuestra Filosofía',
          title: 'Transparencia total en cada eslabón de la cadena.',
          subtitle: 'Conocemos el nombre de cada productor, la altitud de la finca y el método de secado de cada grano.',
          items: [
            {
              id: 'f1',
              title: 'Tueste Medio Ligero en Máquina Loring',
              description: 'Tostamos por convección de aire caliente para preservar los azúcares naturales y la acidez brillante del fruto sin notas quemadas.',
              icon: 'Flame',
              tag: 'Tueste Óptimo',
              colSpan: 2,
              statNumber: '87.5',
              statLabel: 'Puntuación media en cata profesional SCA'
            },
            {
              id: 'f2',
              title: 'Métodos Manuales de Filtro V60, Aeropress y Chemex',
              description: 'Extracciones precisas con agua filtrada por ósmosis inversa remineralizada a 120 ppm para un perfil de sabor puro.',
              icon: 'Coffee',
              tag: 'Filtro & Espresso',
              colSpan: 1
            },
            {
              id: 'f3',
              title: 'Obrador Propio de Masa Madre y Croissants',
              description: 'Fermentaciones en frío de 36 horas con mantequilla francesa DOP de Normandía y harinas ecológicas molidas a la piedra.',
              icon: 'Wheat',
              tag: '36h Fermentación',
              colSpan: 1
            },
            {
              id: 'f4',
              title: 'Trato Directo con Caficultores Familiares',
              description: 'Pagamos hasta un 250% por encima del precio de mercado de bolsa para garantizar la sostenibilidad de las comunidades de origen.',
              icon: 'HeartHandshake',
              tag: 'Comercio Justo',
              colSpan: 2,
              statNumber: '250%',
              statLabel: 'Sobreprecio medio pagado al productor'
            }
          ]
        },
        productHighlight: {
          enabled: true,
          badge: 'El Lote Exclusivo',
          kicker: 'Origen Etiopía Guji',
          title: 'Etiopía Uraga Natural — Proceso Anaeróbico.',
          subtitle: 'Notas deslumbrantes a jazmín, melocotón blanco y bergamota.',
          description: 'Cultivado a 2.150 metros de altitud en suelos volcánicos fértiles. El proceso de fermentación anaeróbica en cereza durante 96 horas resalta una dulzura acaramelada y un cuerpo sedoso incomparable.',
          imageUrl: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1400&q=80',
          specs: [
            { label: 'Variedad', value: 'Heirloom Autóctona Etíope' },
            { label: 'Puntuación SCA', value: '88.75 Puntos' },
            { label: 'Recomendado Para', value: 'Filtro V60, Espresso frutal y Cold Brew' }
          ]
        },
        gallery: {
          enabled: true,
          title: 'El Espacio y la Experiencia',
          images: [
            { id: 'g1', url: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80', caption: 'Barra de espresso con máquina La Marzocco KB90' },
            { id: 'g2', url: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80', caption: 'Espacio lleno de luz natural y plantas tropicales' },
            { id: 'g3', url: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80', caption: 'Bollería artesanal recién horneada cada mañana' }
          ]
        },
        stats: {
          enabled: true,
          items: [
            { id: 's1', value: '88+', label: 'Puntuación SCA en Lotes Micro' },
            { id: 's2', value: '100%', label: 'Café de Comercio Directo' },
            { id: 's3', value: '36h', label: 'Fermentación en Masa Madre' }
          ]
        },
        testimonials: {
          enabled: true,
          title: 'Lo que dicen los apasionados del café.',
          items: [
            {
              id: 't1',
              author: 'Inés Carrasco',
              name: 'Inés Carrasco',
              role: 'Barista Certificada y Q-Grader',
              company: 'Coffee Guild Europe',
              quote: 'El tueste de Botanik es de una consistencia impecable. Cada lote expresa con honestidad el terroir y las flores del origen sin un ápice de amargor agresivo.',
              avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
              rating: 5
            }
          ]
        },
        pricing: {
          enabled: true,
          title: 'Planes de Suscripción de Café en Casa',
          billingCycle: 'monthly',
          plans: [
            {
              id: 'p1',
              name: 'Pack Amante del Espresso (500g)',
              priceMonthly: '18€',
              priceAnnual: 'Envío mensual a domicilio',
              description: 'Dos bolsas de 250g con perfiles dulces y achocolatados ideales para cafetera espresso o italiana.',
              features: ['2 bolsas de 250g recién tostadas', 'Origen rotativo cada mes', 'Molienda a medida o grano entero', 'Envío gratuito en 24 horas'],
              highlighted: false,
              ctaText: 'Suscribirse al Pack'
            },
            {
              id: 'p2',
              name: 'Club Geisha & Micro-Lotes (750g)',
              priceMonthly: '32€',
              priceAnnual: 'Para paladares exigentes',
              description: 'Tres bolsas de 250g con los lotes más exclusivos y florales de procesos experimentales.',
              features: ['3 bolsas de microlotes de finca limitada', 'Ficha de cata detallada del productor', 'Acceso anticipado a lotes Geisha de subasta', 'Descuento del 15% en accesorios de barista'],
              highlighted: true,
              ctaText: 'Unirse al Club VIP'
            }
          ]
        },
        map: {
          enabled: true,
          title: 'Visita Nuestro Espacio y Tostador',
          address: 'Calle Provenza, 188, 08036 Barcelona, España',
          latitude: 41.3888,
          longitude: 2.1589,
          hours: 'Lunes a Viernes de 08:00 a 19:30 | Sábados y Domingos de 09:00 a 20:00'
        },
        faq: {
          enabled: true,
          title: 'Preguntas Frecuentes sobre Botanik',
          items: [
            {
              id: 'q1',
              question: '¿Con qué frecuencia tuestan el café que envían a domicilio?',
              answer: 'Tostamos los lunes y miércoles de cada semana. Todos los envíos se despachan en las 24-48 horas posteriores al tueste para garantizar que el café llegue en su ventana óptima de desgasificación.'
            },
            {
              id: 'q2',
              question: '¿Pueden enviar el café molido para mi tipo de cafetera?',
              answer: 'Sí. Puedes seleccionar grano entero o molienda específica para Espresso, Cafetera Italiana Moka, Filtro V60, Prensa Francesa o Cold Brew sin coste adicional.'
            },
            {
              id: 'q3',
              question: '¿Disponen de opciones de leche vegetal y brunch sin gluten?',
              answer: 'Servimos leche de avena barista especializada y contamos con opciones de tostadas de pan sin gluten y bowls de acai orgánico preparados al momento.'
            },
            {
              id: 'q4',
              question: '¿Se puede trabajar con ordenador portátil en la cafetería?',
              answer: 'Contamos con una zona habilitada con enchufes y conexión Wi-Fi de alta velocidad para nómadas digitales de lunes a viernes hasta las 14:00h.'
            },
            {
              id: 'q5',
              question: '¿Es posible pausar o cancelar la suscripción de café?',
              answer: 'Puedes pausar, cambiar la frecuencia de envío o cancelar tu suscripción en cualquier momento con un solo clic desde tu panel de usuario sin penalizaciones.'
            },
            {
              id: 'q6',
              question: '¿Organizan cursos de cata o talleres de barista?',
              answer: 'Impartimos talleres prácticos de iniciación a la cata y técnicas de vertido en filtro los sábados por la tarde en grupos de máximo 6 personas.'
            }
          ]
        },
        ctaFinal: {
          enabled: true,
          title: 'Descubre cómo sabe el verdadero café.',
          subtitle: 'Pide tu bolsa de café recién tostado o ven a visitarnos a nuestra cafetería.',
          primaryCta: { text: 'Comprar Café en Grano Ahora', link: '#pricing' }
        },
        footer: {
          copyright: '© 2026 Botanik Specialty Coffee S.L. Todos los derechos reservados.',
          legalLinks: [
            { label: 'Envíos y Devoluciones', href: '#shipping' },
            { label: 'Sostenibilidad', href: '#sustainability' },
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
