import { TemplateDefinition } from '../../types';

export const HOSPITALITY_TEMPLATES: TemplateDefinition[] = [
  // 14. SAVOR — Restaurante Gastronómico de Autor & Alta Cocina
  {
    id: 'savor-restaurant',
    name: 'Savor',
    tagline: 'Restaurante gastronómico con dos estrellas Michelin, menú degustación de temporada y bodega de autor',
    category: 'hospitality',
    thumbnail: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80',
    description: 'Tonos carbón y ámbar cálido #F59E0B, tipografía culinaria noble, carrusel de pases gastronómicos, bento de filosofía de huerto propio, galería de emplatados de autor, formulario de reserva de mesa, mapa y cta.',
    accentColor: '#F59E0B',
    theme: 'dark',
    defaultConfig: {
      templateId: 'savor-restaurant',
      name: 'Savor Restaurante Gastronómico',
      slug: 'savor-gastronomy',
      domain: 'savorrestaurante.com',
      theme: 'dark',
      accentColor: '#F59E0B',
      fontFamily: 'Inter, -apple-system, sans-serif',
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
        'leadForm',
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
          ctaLink: '#booking',
          links: [
            { label: 'Menú Degustación', href: '#slider' },
            { label: 'La Huerta', href: '#features' },
            { label: 'El Plato Icono', href: '#product' },
            { label: 'Galería', href: '#gallery' },
            { label: 'Reservas', href: '#booking' },
            { label: 'Ubicación', href: '#map' }
          ],
          glassBlur: true,
          sticky: true
        },
        hero: {
          enabled: true,
          badge: '2 Estrellas Michelin • 3 Soles Guía Repsol 2026',
          kicker: 'Cocina de Emoción & Territorio',
          title: 'El sabor del origen.',
          highlightTitle: 'La poesía del fuego.',
          subtitle: 'Un viaje culinario de 16 pases ideado por el chef Mateo Arrieta, donde cada ingrediente rinde tributo a los productores locales y al ciclo natural de las estaciones.',
          primaryCta: { text: 'Descubrir el Menú de Temporada', link: '#slider' },
          secondaryCta: { text: 'Reservar Mesa en el Comedor →', link: '#booking' },
          imageUrl: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1600&q=80',
          style: 'centered'
        },
        slider: {
          enabled: true,
          kicker: 'Los Pases de la Temporada',
          title: 'Una muestra del menú degustación actual.',
          subtitle: 'Platos concebidos como lienzos de sabor, texturas contrastadas y armonía aromática.',
          autoplay: true,
          slides: [
            {
              id: 'sl_1',
              title: 'Cigala Real Asada sobre Leña de Olivo & Crema de Almendra Tierna',
              subtitle: 'Acompañada de emulsión de sus propios corales y aceite de hierbas silvestres recolectadas al amanecer.',
              tag: 'Pase Principal',
              imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80',
              ctaText: 'Ver Detalles del Plato',
              ctaLink: '#booking'
            },
            {
              id: 'sl_2',
              title: 'Alcachofa Confitada en Grasa de Jamón Ibérico de Bellota',
              subtitle: 'Corazón tierno con velo de panceta curada y caldo translúcido de setas de temporada.',
              tag: 'La Huerta Savor',
              imageUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80',
              ctaText: 'Ver Detalles del Plato',
              ctaLink: '#booking'
            },
            {
              id: 'sl_3',
              title: 'Esfera Glaseada de Cacao Criollo & Naranja Amarga',
              subtitle: 'Postre de chocolate bean-to-bar con helado de leche fresca infusionada en romero silvestre.',
              tag: 'El Cierre Dulce',
              imageUrl: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1200&q=80',
              ctaText: 'Ver Detalles del Plato',
              ctaLink: '#booking'
            }
          ]
        },
        bentoFeatures: {
          enabled: true,
          kicker: 'Nuestra Filosofía Gastronómica',
          title: 'Respeto absoluto por el producto y el productor.',
          subtitle: 'Trabajamos mano a mano con agricultores ecológicos, pastores y pescadores artesanales de bajura.',
          items: [
            {
              id: 'f1',
              title: 'Huerto Propio Biodinámico (a 3 km del restaurante)',
              description: 'Recolectamos verduras, brotes y flores comestibles dos veces al día para que lleguen vivas a la cocina.',
              icon: 'Sparkles',
              tag: 'Huerta Propia',
              colSpan: 2,
              statNumber: '100% Local',
              statLabel: 'Ingredientes obtenidos a menos de 50 km'
            },
            {
              id: 'f2',
              title: 'Bodega de Autor con +850 Referencias',
              description: 'Selección de vinos de pequeños viticultores independientes, añadas históricas y fermentaciones naturales guiadas por nuestro Sumiller Jefe.',
              icon: 'Flame',
              tag: 'Bodega Histórica',
              colSpan: 1
            },
            {
              id: 'f3',
              title: 'Mesa del Chef en la Cocina',
              description: 'Experiencia inmersiva para solo 4 comensales que presencian el servicio de emplatado frente a los fuegos.',
              icon: 'Eye',
              tag: 'Experiencia Exclusiva',
              colSpan: 1
            },
            {
              id: 'f4',
              title: 'Maridajes Armónicos y Sin Alcohol',
              description: 'Opciones de maridaje tradicional con grandes reservas o maridaje no alcohólico elaborado con hidrolatos botánicos y kombuchas de autor.',
              icon: 'HeartHandshake',
              tag: 'Maridajes de Autor',
              colSpan: 2,
              statNumber: '16 Pases',
              statLabel: 'Menú degustación completo con ritmo pausado y memorable'
            }
          ]
        },
        productHighlight: {
          enabled: true,
          kicker: 'Creación Emblemática',
          title: 'El arroz meloso de pichón de caserío y trufa negra.',
          subtitle: 'Un homenaje a la memoria gustativa y a la técnica culinaria más depurada.',
          description: 'Cocinamos el grano de arroz bomba en un fondo reducido durante 24 horas, servido con pechuga de pichón asada al punto sangrante y láminas finas de trufa melanosporum.',
          imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1600&q=80',
          layout: 'image-right',
          ctaText: 'Reservar la Experiencia Completa',
          ctaLink: '#booking',
          specs: [
            { label: 'Tiempo de Preparación', value: '24 Horas de Fondo', detail: 'Huesos tostados y verduras asadas' },
            { label: 'Variedad de Trufa', value: 'Tuber Melanosporum', detail: 'De Teruel seleccionada a mano' },
            { label: 'Maridaje Recomendado', value: 'Priorat Garnacha 2018', detail: 'Añada de parcela única' }
          ]
        },
        gallery: {
          enabled: true,
          kicker: 'Ambiente & Emplatados',
          title: 'La belleza efímera de cada servicio.',
          subtitle: 'Vajilla creada a mano por ceramistas locales y una iluminación cálida e intimista.',
          items: [
            {
              id: 'g1',
              title: 'Comedor Principal con Vigas de Madera y Luz Tenue',
              category: 'El Espacio',
              imageUrl: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80',
              aspectRatio: 'wide'
            },
            {
              id: 'g2',
              title: 'Pase de Pescado de Lonja con Salsa de Moluscos',
              category: 'Cocina Marina',
              imageUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80',
              aspectRatio: 'square'
            },
            {
              id: 'g3',
              title: 'Nuestra Cava Climatizada de Vinos Naturales',
              category: 'Bodega',
              imageUrl: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=80',
              aspectRatio: 'square'
            }
          ]
        },
        stats: {
          enabled: true,
          kicker: 'Reconocimiento Culinario',
          title: 'Una devoción constante por la excelencia gastronómica.',
          subtitle: 'Elogiado por críticos gastronómicos de las publicaciones más prestigiosas.',
          items: [
            { id: 's1', value: '2 Estrellas', label: 'Guía Michelin 2026', description: 'Reconocimiento internacional' },
            { id: 's2', value: '3 Soles', label: 'Guía Repsol', description: 'Máxima distinción nacional' },
            { id: 's3', value: '850+', label: 'Referencias de Vino', description: 'En bodega subterránea' },
            { id: 's4', value: '12 Mesas', label: 'Capacidad por Servicio', description: 'Para una atención exquisita' }
          ]
        },
        testimonials: {
          enabled: true,
          title: 'Lo que opinan los críticos y comensales.',
          subtitle: 'Críticas gastronómicas y sensaciones de quienes han vivido Savor.',
          items: [
            {
              id: 't1',
              name: 'Ignacio Medina',
              role: 'Crítico Gastronómico',
              company: 'Gourmet Gazette',
              quote: 'Savor logra lo que pocos restaurantes consiguen: emocionar profundamente con una cocina sobria, honesta y técnicamente deslumbrante. El pase de cigala con almendra es una obra maestra de la cocina contemporánea.',
              avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
              rating: 5
            },
            {
              id: 't2',
              name: 'Marta & Guillermo',
              role: 'Comensales de Madrid',
              company: 'Celebración Aniversario',
              quote: 'Celebramos nuestro décimo aniversario en la Mesa del Chef. La calidez del equipo, las historias detrás de cada plato y el maridaje de vinos hicieron que fuera la mejor velada de nuestras vidas.',
              avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
              rating: 5
            }
          ]
        },
        leadForm: {
          enabled: true,
          kicker: 'Reserva de Mesa',
          title: 'Asegura tu experiencia en Savor.',
          subtitle: 'Debido a nuestra capacidad reducida a 12 mesas por servicio, recomendamos reservar con antelación.',
          submitButtonText: 'Solicitar Reserva de Mesa',
          successTitle: '¡Solicitud de Reserva Registrada!',
          successMessage: 'Nuestro Maître se pondrá en contacto contigo por teléfono o correo electrónico para confirmar la mesa y consultar posibles alergias o intolerancias alimentarias.',
          steps: [
            {
              id: 'step_1',
              stepNumber: 1,
              title: 'Datos del Titular de la Reserva',
              subtitle: 'Nombre, teléfono y correo electrónico.',
              fields: [
                { id: 'rf_name', label: 'Nombre Completo', type: 'text', placeholder: 'Ej. Álvaro Soler', required: true },
                { id: 'rf_email', label: 'Correo Electrónico', type: 'email', placeholder: 'alvaro@email.com', required: true },
                { id: 'rf_phone', label: 'Teléfono de Contacto', type: 'text', placeholder: '+34 600 000 000', required: true }
              ]
            },
            {
              id: 'step_2',
              stepNumber: 2,
              title: 'Detalles del Servicio',
              subtitle: 'Fecha, turno y número de comensales.',
              fields: [
                {
                  id: 'rf_shift',
                  label: 'Turno de Servicio',
                  type: 'select',
                  options: ['Almuerzo (13:30 - 16:30)', 'Cena (20:30 - 23:30)', 'Mesa del Chef en Cocina (Turno Único 20:30)'],
                  required: true
                },
                {
                  id: 'rf_guests',
                  label: 'Número de Comensales',
                  type: 'select',
                  options: ['2 Comensales', '3 Comensales', '4 Comensales', 'Mesa de Grupo (5 a 8 Comensales)'],
                  required: true
                },
                { id: 'rf_dietary', label: 'Alergias, intolerancias alimentarias o celebración especial', type: 'textarea', placeholder: 'Indícanos si algún comensal es celíaco, no toma marisco, o si se trata de un cumpleaños...', required: false }
              ]
            }
          ]
        },
        map: {
          enabled: true,
          kicker: 'Dónde Encontrarnos',
          title: 'Un rincón íntimo en el casco histórico.',
          subtitle: 'Servicio de aparcacoches privado disponible en todos los servicios de almuerzo y cena.',
          address: 'Callejon del Candil 8, Casco Antiguo',
          city: '28005 Madrid • Cerca de Plaza de la Villa',
          hours: 'Miércoles a Domingo: 13:30 - 16:30 y 20:30 - 23:30 (Lunes y Martes cerrado)',
          phone: '+34 913 000 321',
          email: 'reservas@savorrestaurante.com',
          embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.654321!2d-3.7123!3d40.4145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDI0JzUyLjIiTiAzwrA0MicyNC4zIlc!5e0!3m2!1ses!2ses!4v1650000000000!5m2!1ses!2ses',
          directionsUrl: 'https://maps.google.com'
        },
        faq: {
          enabled: true,
          title: 'Preguntas Frecuentes sobre Savor',
          subtitle: 'Información sobre menús especiales, código de vestimenta y política de cancelación.',
          items: [
            {
              id: 'sf_q1',
              question: '¿Podéis adaptar el menú degustación para personas vegetarianas o celíacas?',
              answer: 'Sí. Si nos avisas con un mínimo de 48 horas de antelación en tu reserva, nuestro equipo adaptará los 16 pases manteniendo el mismo nivel de complejidad y emoción gastronómica.'
            },
            {
              id: 'sf_q2',
              question: '¿Cuál es el precio del Menú Degustación y los Maridajes?',
              answer: 'El Menú Degustación de 16 pases tiene un precio de 145€ por comensal. El Maridaje de Vinos de Autor tiene un suplemento de 75€ y el Maridaje No Alcohólico Botánico de 45€.'
            },
            {
              id: 'sf_q3',
              question: '¿Existe algún código de vestimenta requerido?',
              answer: 'Recomendamos un estilo elegante casual (smart casual). No es obligatorio el uso de corbata, pero rogamos evitar ropa deportiva o calzado de playa.'
            }
          ]
        },
        ctaFinal: {
          enabled: true,
          kicker: 'Regala una Experiencia Inolvidable',
          title: 'Bono Regalo Savor: la emoción de la alta gastronomía.',
          subtitle: 'Adquiere una tarjeta regalo personalizada con validez de un año para dos personas con menú degustación y maridaje incluido.',
          primaryCta: { text: 'Comprar Bono Regalo', link: '#booking' },
          secondaryCta: { text: 'Contactar con el Restaurante', link: 'tel:+34913000321' },
          backgroundStyle: 'glow'
        },
        footer: {
          copyright: '© 2026 Savor Restaurante Gastronómico S.L. Todos los derechos reservados.',
          legalLinks: [
            { label: 'Política de Cancelación', href: '#cancellation' },
            { label: 'Información de Alérgenos', href: '#allergens' },
            { label: 'Privacidad', href: '#privacy' },
            { label: 'Aviso Legal', href: '#legal' }
          ],
          socialLinks: [
            { platform: 'Instagram', url: 'https://instagram.com' },
            { platform: 'Guía Michelin', url: 'https://michelin.com' },
            { platform: 'TripAdvisor', url: 'https://tripadvisor.com' }
          ]
        }
      }
    }
  },

  // 15. BREW — Cafetería de Especialidad & Micro-Tostador Artesanal
  {
    id: 'brew-cafe',
    name: 'Brew',
    tagline: 'Cafetería de especialidad, micro-tostador de origen único y suscripción mensual de café en grano',
    category: 'hospitality',
    thumbnail: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80',
    description: 'Tonos tostados de café moka #D97706 y terracota, tipografía acogedora, orígenes de microlotes, bento de notas de cata y tueste, suscripción mensual en grano o molido, galería de cafetería y mapa.',
    accentColor: '#D97706',
    theme: 'light',
    defaultConfig: {
      templateId: 'brew-cafe',
      name: 'Brew Specialty Roasters',
      slug: 'brew-specialty',
      domain: 'brewroasters.coffee',
      theme: 'light',
      accentColor: '#D97706',
      fontFamily: 'Inter, -apple-system, sans-serif',
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
        title: 'Brew Specialty Roasters — Café de Especialidad & Suscripción de Granos de Origen',
        description: 'Tostamos artesanalmente microlotes de café de especialidad con puntuación +86 SCA procedentes de Etiopía, Colombia y Kenia.',
        keywords: 'cafe de especialidad, specialty coffee, tostador de cafe, comprar cafe en grano, suscripcion cafe, cafe v60 aeropress'
      },
      sections: {
        navbar: {
          brandName: 'Brew',
          logoText: 'BREW ROASTERS',
          ctaText: 'Suscribirse al Café',
          ctaLink: '#pricing',
          links: [
            { label: 'Microlotes', href: '#features' },
            { label: 'El Origen', href: '#product' },
            { label: 'Cafetería', href: '#gallery' },
            { label: 'Suscripción', href: '#pricing' },
            { label: 'Preguntas', href: '#faq' }
          ],
          glassBlur: true,
          sticky: true
        },
        hero: {
          enabled: true,
          badge: 'Tueste Semanal Fresco • Puntuación +86 SCA Certificada',
          kicker: 'Micro-Tostador de Café de Especialidad',
          title: 'El café como nunca',
          highlightTitle: 'lo habías probado.',
          subtitle: 'Cafés de finca de comercio directo, tostados en pequeños lotes para resaltar sus notas florales, afrutadas y achocolatadas naturales sin amargor.',
          primaryCta: { text: 'Explorar Cafés de Especialidad', link: '#pricing' },
          secondaryCta: { text: 'Visitar Nuestra Cafetería →', link: '#gallery' },
          imageUrl: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1600&q=80',
          style: 'centered'
        },
        logos: {
          enabled: true,
          title: 'ORÍGENES Y COOPERATIVAS CON LAS QUE TRABAJAMOS DIRECTAMENTE',
          items: [
            { id: 'l1', name: 'Yirgacheffe, Etiopía', tagline: 'Floral & Cítrico' },
            { id: 'l2', name: 'Huila, Colombia', tagline: 'Caramelo & Frutos Rojos' },
            { id: 'l3', name: 'Nyeri, Kenia', tagline: 'Grosella & Acidez Brillante' },
            { id: 'l4', name: 'Antigua, Guatemala', tagline: 'Cacao & Especias' },
            { id: 'l5', name: 'Tarrazú, Costa Rica', tagline: 'Miel & Manzana Verde' }
          ]
        },
        bentoFeatures: {
          enabled: true,
          kicker: 'Los Estándares Brew',
          title: 'Ciencia y pasión en cada extracción.',
          subtitle: 'Desde la altitud del cultivo hasta la curva de temperatura exacta en nuestra tostadora Giesen.',
          items: [
            {
              id: 'f1',
              title: 'Tueste Omniroast a Medida',
              description: 'Curvas de tueste optimizadas para brillar tanto en máquina espresso como en métodos de filtro manual (V60, Chemex, Aeropress).',
              icon: 'Flame',
              tag: 'Tueste Medio Ligero',
              colSpan: 2,
              statNumber: '+87 SCA',
              statLabel: 'Puntuación mínima de cata en todos nuestros lotes'
            },
            {
              id: 'f2',
              title: 'Comercio Directo y Justo',
              description: 'Pagamos hasta un 120% por encima del precio de mercado de la bolsa de Nueva York a los caficultores.',
              icon: 'HeartHandshake',
              tag: 'Trato Directo',
              colSpan: 1
            },
            {
              id: 'f3',
              title: 'Envío en Menos de 48h tras el Tueste',
              description: 'Recibe el café en su ventana óptima de desgasificación para disfrutar del aroma más intenso y fresco.',
              icon: 'Zap',
              tag: 'Frescura Total',
              colSpan: 1
            },
            {
              id: 'f4',
              title: 'Molido a Medida de tu Cafetera',
              description: 'Elige grano entero o molido profesional en molino Mahlkönig para espresso, moka italiana, filtro o prensa francesa.',
              icon: 'Sliders',
              tag: 'Molienda de Precisión',
              colSpan: 2,
              statNumber: '100% Arábica',
              statLabel: 'Variedades Geisha, Bourbon, Caturra y Pacamara'
            }
          ]
        },
        productHighlight: {
          enabled: true,
          kicker: 'Lote del Mes',
          title: 'Etiopía Yirgacheffe Washed: notas a jazmín y bergamota.',
          subtitle: 'Cultivado a 2,100 metros de altitud en suelos volcánicos de sombra.',
          description: 'Un café extraordinariamente limpio y elegante en taza. Perfecto para amantes del café de filtro con una acidez cítrica refrescante y final dulce a miel de azahar.',
          imageUrl: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1600&q=80',
          layout: 'image-left',
          ctaText: 'Comprar Bolsa de 250g',
          ctaLink: '#pricing',
          specs: [
            { label: 'Proceso', value: 'Lavado (Washed)', detail: 'Fermentación de 36 horas' },
            { label: 'Altitud de Cultivo', value: '2,050 - 2,200 m', detail: 'Recolección 100% manual' },
            { label: 'Notas de Cata', value: 'Jazmín, Bergamota, Melocotón', detail: 'Cuerpo sedoso y ligero' }
          ]
        },
        gallery: {
          enabled: true,
          kicker: 'Nuestra Cafetería',
          title: 'Un espacio pensado para los amantes del buen café.',
          subtitle: 'Ven a disfrutar de nuestro espresso bar y repostería artesanal horneada cada mañana.',
          items: [
            {
              id: 'g1',
              title: 'Barra de Café de Filtro V60 & Máquina La Marzocco',
              category: 'El Espresso Bar',
              imageUrl: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80',
              aspectRatio: 'wide'
            },
            {
              id: 'g2',
              title: 'Latte Art con Leche Fresca de Granja Local',
              category: 'Bebidas de Especialidad',
              imageUrl: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=1200&q=80',
              aspectRatio: 'square'
            },
            {
              id: 'g3',
              title: 'Tostadora Artesanal en Pleno Proceso de Tueste',
              category: 'El Tostador',
              imageUrl: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80',
              aspectRatio: 'square'
            }
          ]
        },
        stats: {
          enabled: true,
          kicker: 'Impacto & Calidad',
          title: 'El movimiento del café de especialidad en números.',
          subtitle: 'Llevando la cultura del café ético a miles de hogares.',
          items: [
            { id: 's1', value: '+87 SCA', label: 'Puntuación Media', description: 'Calidad excelente garantizada' },
            { id: 's2', value: '14 Fincas', label: 'Productores Directos', description: 'En América y África' },
            { id: 's3', value: '48 Horas', label: 'Tiempo tras el Tueste', description: 'Garantía de máxima frescura' },
            { id: 's4', value: '8,500+', label: 'Tazas Servidas al Mes', description: 'En nuestra cafetería de Madrid' }
          ]
        },
        testimonials: {
          enabled: true,
          title: 'Lo que dicen los auténticos apasionados del café.',
          subtitle: 'Reseñas de baristas, suscriptores y clientes diarios.',
          items: [
            {
              id: 't1',
              name: 'Guillermo Serrano',
              role: 'Suscriptor Mensual desde 2024',
              company: 'Madrid',
              quote: 'La suscripción de Brew cambió por completo mis mañanas. Poder probar un origen diferente cada mes recién tostado con notas tan aromáticas es una delicia que no cambio por nada.',
              avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
              rating: 5
            },
            {
              id: 't2',
              name: 'Laura Montero',
              role: 'Barista & Coffee Enthusiast',
              company: 'Barcelona',
              quote: 'La consistencia en el tueste de Brew es admirable. El lote de Etiopía lavado en V60 es una explosión de flores blancas y acidez limpia que demuestra un control milimétrico de la tostadora.',
              avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
              rating: 5
            }
          ]
        },
        pricing: {
          enabled: true,
          title: 'Suscripciones de Café a Domicilio',
          subtitle: 'Café recién tostado en tu buzón cada mes, sin gastos de envío y con cancelación libre.',
          billingCycle: 'monthly',
          discountNote: '10% de descuento incluido en todos los planes recurrentes',
          plans: [
            {
              id: 'b_explorer',
              name: 'Plan Explorador (2 Bolsas x 250g)',
              tag: 'Ideal para 1 Persona',
              priceMonthly: '22€',
              priceAnnual: '19€',
              description: '500g de café mensual (aprox. 30 tazas). Dos orígenes diferentes cada entrega.',
              features: [
                '2 bolsas de 250g con válvula desgasificadora',
                'Ficha de cata detallada con guía de preparación',
                'Elige en grano o con el molido exacto que necesites',
                'Envío gratuito a toda la península',
                'Pausa o cancela tu suscripción en cualquier momento'
              ],
              ctaText: 'Suscribirme al Plan Explorador',
              ctaLink: '#sub-explorer',
              highlighted: false
            },
            {
              id: 'b_connoisseur',
              name: 'Plan Connoisseur (4 Bolsas x 250g)',
              tag: 'Más Vendido (Parejas & Hogares)',
              priceMonthly: '39€',
              priceAnnual: '34€',
              description: '1 kg de café mensual (aprox. 65 tazas). Incluye microlotes raros de edición limitada.',
              features: [
                '4 bolsas de 250g de los mejores microlotes del mes',
                'Acceso preferente a lotes Geisha y cafés fermentados',
                '1 taza de cata cerámica Brew de regalo con el primer envío',
                'Envío express prioritario en 24h tras el tueste',
                'Descuento del 15% en cafeteras y accesorios en tienda'
              ],
              ctaText: 'Suscribirme al Plan Connoisseur',
              ctaLink: '#sub-connoisseur',
              highlighted: true
            }
          ]
        },
        faq: {
          enabled: true,
          title: 'Preguntas Frecuentes sobre el Café Brew',
          subtitle: 'Dudas sobre fechas de tueste, conservación y molienda.',
          items: [
            {
              id: 'bf_q1',
              question: '¿Cuándo es el mejor momento para consumir el café tras el tueste?',
              answer: 'Recomendamos dejar reposar el café entre 5 y 7 días tras la fecha de tueste para que libere el exceso de CO2. Su punto óptimo de sabor y complejidad aromática se mantiene durante las 4 a 6 semanas posteriores.'
            },
            {
              id: 'bf_q2',
              question: '¿Es mejor pedir el café en grano o molido?',
              answer: 'Siempre recomendamos pedir café en grano y molerlo justo antes de preparar la taza para preservar todos los aceites volátiles y aromas. Si no tienes molinillo en casa, indícanos tu método y te lo moleremos el mismo día del envío.'
            },
            {
              id: 'bf_q3',
              question: '¿Dónde está ubicada vuestra cafetería y tostador físico?',
              answer: 'Nuestra cafetería y espacio de tueste está en la Calle del Barco 14, en el barrio de Malasaña (Madrid). Estamos abiertos todos los días de 08:30 a 19:30.'
            }
          ]
        },
        ctaFinal: {
          enabled: true,
          kicker: 'Despierta con el Mejor Café',
          title: 'Transforma tu ritual cafetero diario.',
          subtitle: 'Únete a más de 2,500 personas que disfrutan cada mañana del café más fresco y ético.',
          primaryCta: { text: 'Iniciar Mi Suscripción de Café', link: '#pricing' },
          secondaryCta: { text: 'Comprar Bolsa Individual de Prueba', link: '#product' },
          backgroundStyle: 'glow'
        },
        footer: {
          copyright: '© 2026 Brew Specialty Roasters S.L. Madrid • Barcelona.',
          legalLinks: [
            { label: 'Guía de Métodos de Extracción', href: '#guide' },
            { label: 'Política de Envíos', href: '#shipping' },
            { label: 'Privacidad', href: '#privacy' },
            { label: 'Aviso Legal', href: '#legal' }
          ],
          socialLinks: [
            { platform: 'Instagram', url: 'https://instagram.com' },
            { platform: 'YouTube', url: 'https://youtube.com' },
            { platform: 'Spotify', url: 'https://spotify.com' }
          ]
        }
      }
    }
  }
];
