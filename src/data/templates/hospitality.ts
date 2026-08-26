import { TemplateDefinition } from '../../types';

export const HOSPITALITY_TEMPLATES: TemplateDefinition[] = [
  // 1. SAVOR — Restaurante Gastronómico de Autor & Alta Cocina
  {
    id: 'savor-restaurant',
    name: 'Savor',
    tagline: 'Restaurante gastronómico con dos estrellas Michelin, menú degustación de temporada y bodega de autor',
    category: 'hospitality',
    style: 'elegante',
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
      fontFamily: "'Playfair Display', serif",
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
            { label: 'La Huerta', href: '#bentoFeatures' },
            { label: 'El Plato Icono', href: '#productHighlight' },
            { label: 'Galería', href: '#gallery' },
            { label: 'Ubicación', href: '#map' }
          ],
          glassBlur: true,
          sticky: true
        },
        hero: {
          enabled: true,
          badge: '2 Estrellas Michelin 2026',
          kicker: 'Cocina de Emoción y Paisaje',
          title: 'El sabor de la tierra, elevado a su máxima expresión.',
          highlightTitle: 'Arte culinario sin artificios.',
          subtitle: 'Un viaje de 16 pases ideado por el chef Mateo Arriaga donde el producto de proximidad dialoga con técnicas ancestrales de fermentación y brasa.',
          primaryCta: { text: 'Reservar Menú Degustación', link: '#pricing' },
          secondaryCta: { text: 'Descubrir los Pases', link: '#gallery' },
          imageUrl: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80',
          style: 'centered'
        },
        slider: {
          enabled: true,
          title: 'Menú Degustación "Origen" — Selección de Pases',
          subtitle: 'Cada plato representa un ecosistema de nuestro entorno natural.',
          autoplay: true,
          slides: [
            {
              id: 'sl1',
              title: 'Cigala de Lonja a la Brasa de Sarmientos',
              subtitle: 'Con emulsión de sus cabezas tostadas y crujiente de algas de roca.',
              imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80'
            },
            {
              id: 'sl2',
              title: 'Pichón Asado en Dos Cocciones',
              subtitle: 'Pechuga sonrosada con praliné de avellanas y ravioli de sus interiores.',
              imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80'
            }
          ]
        },
        bentoFeatures: {
          enabled: true,
          title: 'Los Tres Pilares de Savor',
          items: [
            {
              id: 'b1',
              title: 'Huerto Biodinámico Propio de 3 Hectáreas',
              description: 'Cosechamos cada mañana las verduras, brotes y flores que se servirán en el servicio de mediodía y noche.',
              icon: 'Leaf',
              tag: 'Km 0 Real',
              colSpan: 2
            },
            {
              id: 'b2',
              title: 'Bodega con Más de 800 Referencias',
              description: 'Pequeños viticultores independientes, añadas históricas y maridajes sin alcohol con kombuchas caseras.',
              icon: 'Wine',
              tag: 'Sumillería',
              colSpan: 1
            }
          ]
        },
        productHighlight: {
          enabled: true,
          title: 'El Plato Icono: Alcachofa Confitada & Trufa Negra',
          subtitle: 'Confitada durante 8 horas en grasa de jamón ibérico y terminada al carbón de encina.',
          description: 'Acompañada de yema de huevo de corral curada en miso blanco y láminas generosas de Tuber melanosporum.',
          imageUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80',
          specs: [
            { label: 'Origen', value: 'Huerta de Tudela', detail: 'Cultivo ecológico certificado' },
            { label: 'Maridaje', value: 'Palo Cortado VORS', detail: 'Bodegas Tradición 30 años' }
          ]
        },
        gallery: {
          enabled: true,
          title: 'Atmósfera y Creaciones',
          items: [
            { id: 'g1', title: 'Comedor Principal con Vistas al Jardín', category: 'Sala', imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80' },
            { id: 'g2', title: 'Postre de Cacao Silvestre y Helado de Levadura', category: 'Postres', imageUrl: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=800&q=80' }
          ]
        },
        stats: {
          enabled: true,
          items: [
            { id: 's1', value: '2', label: 'Estrellas Michelin', description: 'Y 3 Soles Repsol' },
            { id: 's2', value: '16', label: 'Pases Gastronómicos', description: 'Por comensal' },
            { id: 's3', value: '24', label: 'Comensales por Servicio', description: 'Intimidad absoluta' }
          ]
        },
        testimonials: {
          enabled: true,
          title: 'Crítica Gastronómica',
          items: [
            {
              id: 't1',
              name: 'Carlos Capel',
              role: 'Crítico Gastronómico',
              company: 'El País',
              quote: 'Una de las experiencias culinarias más conmovedoras y certeras del panorama europeo actual. El dominio del fuego y la pureza del vegetal son sublimes.',
              avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
              rating: 5
            }
          ]
        },
        pricing: {
          enabled: true,
          title: 'Menús y Experiencias',
          billingCycle: 'annual',
          plans: [
            {
              id: 'menu_origen',
              name: 'Menú "Origen" (12 Pases)',
              priceMonthly: '165 €',
              priceAnnual: '165 €',
              description: 'Un recorrido esencial por nuestros grandes clásicos y el producto estacional de lonja y huerto.',
              features: [
                '12 pases gastronómicos completos',
                'Aperitivo de bienvenida en bodega',
                'Panes artesanos de masa madre y mantequilla de pasto',
                'Petit fours y café de especialidad'
              ],
              ctaText: 'Reservar Menú Origen',
              ctaLink: '#book-origen',
              highlighted: false
            },
            {
              id: 'menu_gran_reserva',
              name: 'Menú "Gran Festival" (16 Pases + Maridaje)',
              tag: 'Experiencia Total',
              priceMonthly: '260 €',
              priceAnnual: '260 €',
              description: 'La experiencia completa que incluye los platos más icónicos y maridaje con vinos de autor.',
              features: [
                '16 pases gastronómicos con caviares y trufas',
                'Maridaje de 8 copas seleccionado por nuestro sumiller',
                'Mesa preferencial con vistas a la cocina vista',
                'Menú impreso firmado por el chef Mateo Arriaga'
              ],
              ctaText: 'Reservar Gran Festival',
              ctaLink: '#book-festival',
              highlighted: true
            }
          ]
        },
        map: {
          enabled: true,
          title: 'Dónde Encontrarnos',
          subtitle: 'Un enclave rodeado de viñedos y naturaleza a 20 minutos de la ciudad.',
          address: 'Camino de los Viñedos, s/n',
          city: '28000 Madrid / La Rioja',
          hours: 'Miércoles a Domingo: 13:30 - 16:30 | 20:30 - 23:30',
          phone: '+34 912 345 678',
          email: 'reservas@savorrestaurante.com',
          embedUrl: 'https://maps.google.com'
        },
        faq: {
          enabled: true,
          title: 'Preguntas Frecuentes',
          items: [
            {
              id: 'f1',
              question: '¿Con cuánta antelación abren las reservas?',
              answer: 'Abrimos el calendario con 90 días de antelación el primer día de cada mes a las 00:00h.'
            },
            {
              id: 'f2',
              question: '¿Adaptan el menú a intolerancias o alergias alimentarias?',
              answer: 'Sí. Rogamos indicar cualquier intolerancia o restricción alimentaria al momento de realizar la reserva para que el equipo de cocina prepare alternativas adecuadas.'
            }
          ]
        },
        ctaFinal: {
          enabled: true,
          title: 'Vive una velada gastronómica que recordarás siempre.',
          subtitle: 'Asegura tu mesa en Savor con confirmación inmediata.',
          primaryCta: { text: 'Reservar Mesa Ahora', link: '#pricing' },
          backgroundStyle: 'glow'
        },
        footer: {
          copyright: '© 2026 Savor Restaurante Gastronómico S.L.',
          legalLinks: [{ label: 'Política de Cancelación de Reservas', href: '#cancellation' }],
          socialLinks: [{ platform: 'Instagram', url: 'https://instagram.com' }]
        }
      }
    }
  },

  // 2. SOL & BRASAS — Asador de Leña & Cortes Madurados
  {
    id: 'sol-brasas',
    name: 'Sol & Brasas',
    tagline: 'Asador tradicional contemporáneo con parrilla de encina, cortes de vaca rubia gallega madurados 60 días y bodega de tintos',
    category: 'hospitality',
    style: 'oscuro',
    thumbnail: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80',
    description: 'Estética rústica industrial en negro carbón y fuego #FF6B00, tipografía robusta, carta de chuletones madurados, bodega climatizada y reservas en tiempo real.',
    accentColor: '#FF6B00',
    theme: 'dark',
    defaultConfig: {
      templateId: 'sol-brasas',
      name: 'Sol & Brasas Steakhouse',
      slug: 'sol-brasas',
      domain: 'solybrasas.es',
      theme: 'dark',
      accentColor: '#FF6B00',
      fontFamily: "'Outfit', sans-serif",
      borderRadius: 14,
      published: true,
      sectionOrder: ['navbar', 'hero', 'bentoFeatures', 'productHighlight', 'gallery', 'stats', 'pricing', 'map', 'faq', 'ctaFinal', 'footer'],
      seo: {
        title: 'Sol & Brasas — Asador de Leña y Carne Madurada',
        description: 'Chuletones de vaca rubia gallega madurados en cámara propia y asados sobre brasas de carbón de encina.',
        keywords: 'asador carnes, chuletón madurado, parrilla carbon, restaurante brasa'
      },
      sections: {
        navbar: {
          brandName: 'SOL & BRASAS',
          logoText: 'SOL & BRASAS // ASADOR',
          ctaText: 'Reservar Mesa',
          ctaLink: '#pricing',
          links: [
            { label: 'Cortes Madurados', href: '#pricing' },
            { label: 'Parrilla', href: '#bentoFeatures' },
            { label: 'Ubicación', href: '#map' }
          ],
          glassBlur: true,
          sticky: true
        },
        hero: {
          enabled: true,
          badge: 'Brasas de Encina Vivas',
          kicker: 'Maduración Propia Dry Aged',
          title: 'El templo de la carne a la brasa y la buena leña.',
          subtitle: 'Seleccionamos las mejores razas autóctonas y maduramos cada lomo en nuestra cámara a la vista con humedad y temperatura controladas al milímetro.',
          primaryCta: { text: 'Ver Cortes y Reservar', link: '#pricing' },
          imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80',
          style: 'centered'
        },
        bentoFeatures: {
          enabled: true,
          title: 'Nuestra Obsesión por el Fuego',
          items: [
            {
              id: 'b1',
              title: 'Parrilla Vasca con Elevación Milimétrica',
              description: 'Controlamos la distancia al ascua para sellar la grasa exterior y caramelizar la superficie manteniendo el corazón jugoso.',
              icon: 'Flame',
              tag: 'Fuego Vivo',
              colSpan: 2
            },
            {
              id: 'b2',
              title: 'Cámara Dry Aged a la Vista',
              description: 'Lomos madurados de 45 a 90 días donde la concentración de sabores minerales y textura alcanzan su cumbre.',
              icon: 'Award',
              tag: 'Dry Aged',
              colSpan: 1
            }
          ]
        },
        productHighlight: {
          enabled: true,
          title: 'Chuletón de Vaca Rubia Gallega — 60 Días',
          subtitle: 'Infiltración grasa sobresaliente y sabor a mantequilla y frutos secos.',
          description: 'Servido sobre plato caliente con sal marina en escamas de manantial y pimientos de Guernica confitados.',
          imageUrl: 'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=1200&q=80',
          specs: [
            { label: 'Peso', value: '1.2 - 1.5 kg', detail: 'Ideal para compartir entre 2 personas' },
            { label: 'Maduración', value: '60 Días', detail: 'Cámara Dry Aged con sal del Himalaya' }
          ]
        },
        gallery: {
          enabled: true,
          title: 'Nuestra Parrilla',
          items: [
            { id: 'g1', title: 'Chuletón sobre brasas crepitantes', category: 'Brasa', imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80' },
            { id: 'g2', title: 'Bodega de tintos de Ribera y Rioja', category: 'Vinos', imageUrl: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80' }
          ]
        },
        stats: {
          enabled: true,
          items: [
            { id: 's1', value: '60 Días', label: 'Maduración Media', description: 'Concentración óptima de sabor' },
            { id: 's2', value: '100%', label: 'Carbón de Encina', description: 'Aroma limpio sin humos químicos' }
          ]
        },
        pricing: {
          enabled: true,
          title: 'Cortes Principales & Menús',
          billingCycle: 'annual',
          plans: [
            {
              id: 'corte_rubia',
              name: 'Chuletón Vaca Rubia Gallega (1kg)',
              priceMonthly: '78 €',
              priceAnnual: '78 €',
              description: 'Para 2 personas. Incluye guarnición de patatas fritas en grasa de buey y pimientos asados.',
              features: ['Maduración de 45-60 días', 'Asado a la brasa al punto solicitado', 'Guarnición doble incluida', 'Sal en escamas volcánica'],
              ctaText: 'Reservar Mesa con Chuletón',
              ctaLink: '#book-rubia',
              highlighted: true
            }
          ]
        },
        map: {
          enabled: true,
          title: 'Ven a Disfrutar del Fuego',
          address: 'Calle Mayor 42',
          city: 'Madrid',
          hours: 'Martes a Domingo: 13:00 - 17:00 | 20:00 - 00:00',
          phone: '+34 913 222 111',
          email: 'contacto@solybrasas.es',
          embedUrl: 'https://maps.google.com'
        },
        faq: {
          enabled: true,
          title: 'Preguntas Frecuentes',
          items: [{ id: 'f1', question: '¿Tienen opciones para celíacos?', answer: 'Sí, todas nuestras carnes a la brasa y salsas son 100% libres de gluten.' }]
        },
        ctaFinal: {
          enabled: true,
          title: 'Reserva tu mesa en Sol & Brasas.',
          subtitle: 'Asegura tu corte de carne madurada hoy.',
          primaryCta: { text: 'Reservar Ahora', link: '#pricing' },
          backgroundStyle: 'glow'
        },
        footer: {
          copyright: '© 2026 Sol & Brasas Asadores S.L.',
          legalLinks: [{ label: 'Aviso Legal', href: '#legal' }],
          socialLinks: [{ platform: 'Instagram', url: 'https://instagram.com' }]
        }
      }
    }
  },

  // 3. KANSO RAMEN — Izakaya Tradicional & Coctelería Botánica
  {
    id: 'kanso-ramen',
    name: 'Kanso Ramen',
    tagline: 'Taberna japonesa artesanal con caldos tonkotsu hervidos 18 horas, fideos frescos hechos a mano y coctelería con sake',
    category: 'hospitality',
    style: 'oscuro',
    thumbnail: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=1200&q=80',
    description: 'Estética Tokio neo-noir en negro y rojo neón #EF4444, tipografía japonesa y occidental moderna, carta interactiva de ramen con nivel de picante y reserva de barra.',
    accentColor: '#EF4444',
    theme: 'dark',
    defaultConfig: {
      templateId: 'kanso-ramen',
      name: 'Kanso Ramen & Izakaya',
      slug: 'kanso-ramen',
      domain: 'kansoramen.es',
      theme: 'dark',
      accentColor: '#EF4444',
      fontFamily: "'Space Grotesk', sans-serif",
      borderRadius: 14,
      published: true,
      sectionOrder: ['navbar', 'hero', 'bentoFeatures', 'productHighlight', 'gallery', 'pricing', 'map', 'faq', 'ctaFinal', 'footer'],
      seo: {
        title: 'Kanso Ramen — Izakaya Japonesa & Fideos Artesanales',
        description: 'Auténtico ramen de Tokio en caldo tonkotsu denso y gyozas hechas a mano.',
        keywords: 'ramen artesanal, tonkotsu, izakaya, comida japonesa, gyoza'
      },
      sections: {
        navbar: {
          brandName: 'KANSO',
          logoText: 'KANSO // 簡素',
          ctaText: 'Reservar Barra',
          ctaLink: '#pricing',
          links: [
            { label: 'Carta de Ramen', href: '#pricing' },
            { label: 'El Caldo', href: '#productHighlight' },
            { label: 'Ubicación', href: '#map' }
          ],
          glassBlur: true,
          sticky: true
        },
        hero: {
          enabled: true,
          badge: 'Fideos Hechos a Diario',
          kicker: 'Caldo Tonkotsu de 18 Horas',
          title: 'El alma de Tokio en cada cuenco de ramen humeante.',
          subtitle: 'Fideos alcalinos frescos elaborados cada madrugada en nuestro obrador con harina japonesa y agua mineral filtrada.',
          primaryCta: { text: 'Ver la Carta', link: '#pricing' },
          imageUrl: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=1200&q=80',
          style: 'centered'
        },
        bentoFeatures: {
          enabled: true,
          title: 'El Secreto de Kanso',
          items: [
            {
              id: 'b1',
              title: 'Caldo Hervido 18 Horas Ininterrumpidas',
              description: 'Huesos de cerdo ibérico y verduras asadas a fuego lento hasta extraer todo el colágeno y umami profundo.',
              icon: 'Coffee',
              tag: 'Puro Colágeno',
              colSpan: 2
            },
            {
              id: 'b2',
              title: 'Chashu Marinado y Sopleteado',
              description: 'Panceta melosa cocinada a baja temperatura durante 12 horas con salsa tare de soja añeja y mirin.',
              icon: 'Flame',
              tag: 'Melosidad',
              colSpan: 1
            }
          ]
        },
        productHighlight: {
          enabled: true,
          title: 'Kanso Black Garlic Tonkotsu',
          subtitle: 'Nuestro plato insignia enriquecido con aceite de ajo negro Mayu tostado.',
          description: 'Servido con fideos al dente, huevo ajitama de yema líquida, alga nori crujiente y cebollino japonés.',
          imageUrl: 'https://images.unsplash.com/photo-1557872943-16a5ac26437e?auto=format&fit=crop&w=1200&q=80',
          specs: [
            { label: 'Tiempo de cocción', value: '18 Horas', detail: 'Caldo rico y untuoso' },
            { label: 'Nivel Picante', value: 'Personalizable', detail: 'Del 0 al 5' }
          ]
        },
        gallery: {
          enabled: true,
          title: 'La Experiencia en Barra',
          items: [
            { id: 'g1', title: 'Barra de madera y neon de Tokio', category: 'Ambiente', imageUrl: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80' }
          ]
        },
        pricing: {
          enabled: true,
          title: 'Ramen & Especialidades Izakaya',
          billingCycle: 'annual',
          plans: [
            {
              id: 'ramen_tonkotsu',
              name: 'Tonkotsu Black Garlic Ramen',
              tag: 'Favorito',
              priceMonthly: '14.50 €',
              priceAnnual: '14.50 €',
              description: 'Caldo denso de cerdo, ajo negro, 2 láminas de chashu, huevo ajitama y bambú menma.',
              features: ['Fideos frescos de elaboración propia', 'Chashu tierno a la llama', 'Huevo marinado ajitama con yema fundente', 'Opción picante disponible'],
              ctaText: 'Pedir en Local',
              ctaLink: '#order-ramen',
              highlighted: true
            }
          ]
        },
        map: {
          enabled: true,
          title: 'Visítanos en el Centro',
          address: 'Calle Luna 18',
          city: 'Barcelona / Madrid',
          hours: 'Todos los días: 13:00 - 16:30 | 20:00 - 23:45 (Sin reserva en barra)',
          phone: '+34 933 111 222',
          email: 'hola@kansoramen.es',
          embedUrl: 'https://maps.google.com'
        },
        faq: {
          enabled: true,
          title: 'Preguntas Frecuentes',
          items: [{ id: 'f1', question: '¿Tienen opciones veganas de ramen?', answer: 'Sí, disponemos de nuestro Creamy Tantanmen Vegano con caldo de sésamo y leche de soja y shiitake salteado.' }]
        },
        ctaFinal: {
          enabled: true,
          title: 'Ven a probar el mejor ramen de la ciudad.',
          subtitle: 'Sin esperas innecesarias con nuestro sistema de lista virtual.',
          primaryCta: { text: 'Ver Ubicación y Horarios', link: '#map' },
          backgroundStyle: 'glow'
        },
        footer: {
          copyright: '© 2026 Kanso Izakaya S.L.',
          legalLinks: [{ label: 'Aviso Legal', href: '#legal' }],
          socialLinks: [{ platform: 'Instagram', url: 'https://instagram.com' }]
        }
      }
    }
  },

  // 4. VELVET LOUNGE — Cocktail Bar Clandestino & Jazz
  {
    id: 'velvet-lounge',
    name: 'Velvet Lounge',
    tagline: 'Coctelería clandestina de autor, destilados raros, música jazz en directo y ambiente íntimo bajo luz tenue',
    category: 'hospitality',
    style: 'elegante',
    thumbnail: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1200&q=80',
    description: 'Estética en terciopelo azul noche y latón dorado #F59E0B, tipografía elegante, carta de cócteles de autor con ingredientes clarificados y reserva de reservados VIP.',
    accentColor: '#F59E0B',
    theme: 'dark',
    defaultConfig: {
      templateId: 'velvet-lounge',
      name: 'Velvet Speakeasy & Cocktails',
      slug: 'velvet-lounge',
      domain: 'velvetlounge.bar',
      theme: 'dark',
      accentColor: '#F59E0B',
      fontFamily: "'Playfair Display', serif",
      borderRadius: 16,
      published: true,
      sectionOrder: ['navbar', 'hero', 'bentoFeatures', 'productHighlight', 'gallery', 'pricing', 'map', 'faq', 'ctaFinal', 'footer'],
      seo: {
        title: 'Velvet Lounge — Coctelería Clandestina & Jazz en Directo',
        description: 'Cócteles de autor de vanguardia, hielo cristalino tallado a mano y noches de jazz íntimas.',
        keywords: 'cocteleria clandestina, speakeasy, jazz bar, cocteles de autor'
      },
      sections: {
        navbar: {
          brandName: 'VELVET',
          logoText: 'VELVET // SPEAKEASY',
          ctaText: 'Reservar Acceso',
          ctaLink: '#pricing',
          links: [{ label: 'Cócteles', href: '#pricing' }, { label: 'Jazz Sessions', href: '#bentoFeatures' }, { label: 'Acceso', href: '#map' }],
          glassBlur: true,
          sticky: true
        },
        hero: {
          enabled: true,
          badge: 'Top 50 Cocktail Bars 2026',
          kicker: 'Alquimia y Destilados Raros',
          title: 'El secreto mejor guardado de la noche.',
          subtitle: 'Entra a través de una puerta oculta y déjate envolver por el terciopelo, el sonido de un saxo tenor y cócteles clarificados con hielo puro de corte manual.',
          primaryCta: { text: 'Reservar Mesa Privada', link: '#pricing' },
          imageUrl: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1200&q=80',
          style: 'centered'
        },
        bentoFeatures: {
          enabled: true,
          title: 'Alquimia en la Barra',
          items: [
            {
              id: 'b1',
              title: 'Hielo Cristalino Tallado a Mano',
              description: 'Bloques de agua desmineralizada congelada lentamente durante 48h para una dilución mínima del cóctel.',
              icon: 'Sparkles',
              tag: 'Pureza',
              colSpan: 2
            },
            {
              id: 'b2',
              title: 'Jazz en Vivo Cada Jueves y Sábado',
              description: 'Tríos acústicos de contrabajo, batería con escobillas y piano Steinway.',
              icon: 'Music',
              tag: 'Música Viva',
              colSpan: 1
            }
          ]
        },
        productHighlight: {
          enabled: true,
          title: 'Cóctel Icono: "Nocturno en Do Menor"',
          subtitle: 'Bourbon envejecido en barricas de Oporto, cordial de higos tostados y bitter de haba tonka.',
          description: 'Ahumado al instante con madera de roble ante el cliente y servido en copa de cristal Baccarat.',
          imageUrl: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1200&q=80',
          specs: [{ label: 'Destilado', value: 'Bourbon Single Cask', detail: 'Edición limitada' }]
        },
        gallery: {
          enabled: true,
          title: 'Atmósfera Nocturna',
          items: [
            { id: 'g1', title: 'Barra de mármol negro y estantería retroiluminada', category: 'Barra', imageUrl: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80' }
          ]
        },
        pricing: {
          enabled: true,
          title: 'Experiencias de Coctelería',
          billingCycle: 'annual',
          plans: [
            {
              id: 'reserva_mesa',
              name: 'Reserva de Mesa + Cóctel de Bienvenida',
              priceMonthly: '18 €',
              priceAnnual: '18 €',
              description: 'Mesa garantizada en sala principal con espectáculo de jazz incluido.',
              features: ['Acceso sin cola por puerta secreta', 'Cóctel de autor de bienvenida', 'Snacks gourmet de la casa'],
              ctaText: 'Reservar Acceso',
              ctaLink: '#book-table',
              highlighted: true
            }
          ]
        },
        map: {
          enabled: true,
          title: 'Cómo Entrar',
          subtitle: 'La contraseña cambia cada semana y se envía por SMS al reservar.',
          address: 'Ubicación discreta en el barrio de Salamanca',
          city: 'Madrid',
          hours: 'Miércoles a Domingo: 19:30 - 03:00',
          phone: '+34 911 888 999',
          email: 'secret@velvetlounge.bar',
          embedUrl: 'https://maps.google.com'
        },
        faq: {
          enabled: true,
          title: 'Preguntas Frecuentes',
          items: [{ id: 'f1', question: '¿Existe código de vestimenta?', answer: 'Recomendamos un código Smart Casual / Elegante para mantener la atmósfera del club.' }]
        },
        ctaFinal: {
          enabled: true,
          title: 'Descubre el secreto de Velvet.',
          subtitle: 'Plazas estrictamente limitadas por capacidad.',
          primaryCta: { text: 'Reservar Mi Acceso', link: '#pricing' },
          backgroundStyle: 'glow'
        },
        footer: {
          copyright: '© 2026 Velvet Speakeasy Club.',
          legalLinks: [{ label: 'Aviso Legal', href: '#legal' }],
          socialLinks: [{ platform: 'Instagram', url: 'https://instagram.com' }]
        }
      }
    }
  },

  // 5. BOTANIK CAFÉ — Specialty Coffee & Brunch Artesanal
  {
    id: 'botanik-cafe',
    name: 'Botanik Café',
    tagline: 'Cafetería de especialidad con granos de origen único tostados en casa, repostería casera de masa madre y brunch saludable',
    category: 'hospitality',
    style: 'natural',
    thumbnail: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80',
    description: 'Estética en tonos madera clara, plantas tropicales y verde matcha #10B981, tipografía fresca, carta de cafés filtrados V60 y brunch.',
    accentColor: '#10B981',
    theme: 'dark',
    defaultConfig: {
      templateId: 'botanik-cafe',
      name: 'Botanik Specialty Coffee',
      slug: 'botanik-cafe',
      domain: 'botanikcafe.es',
      theme: 'dark',
      accentColor: '#10B981',
      fontFamily: "'Outfit', sans-serif",
      borderRadius: 16,
      published: true,
      sectionOrder: ['navbar', 'hero', 'bentoFeatures', 'productHighlight', 'gallery', 'pricing', 'map', 'faq', 'ctaFinal', 'footer'],
      seo: {
        title: 'Botanik Café — Café de Especialidad & Brunch Saludable',
        description: 'Cafés de origen etíope y colombiano, tostado propio y tostadas en pan de masa madre.',
        keywords: 'cafe especialidad, brunch madrid, flat white, repostería casera, v60'
      },
      sections: {
        navbar: {
          brandName: 'BOTANIK',
          logoText: 'BOTANIK COFFEE',
          ctaText: 'Ver Carta Brunch',
          ctaLink: '#pricing',
          links: [{ label: 'Cafés', href: '#pricing' }, { label: 'Orígenes', href: '#productHighlight' }, { label: 'Dónde Estamos', href: '#map' }],
          glassBlur: true,
          sticky: true
        },
        hero: {
          enabled: true,
          badge: 'Tueste Semanal Propio',
          kicker: 'Café 100% Arábica de Especialidad',
          title: 'El café que te mereces, preparado con rigor y cariño.',
          subtitle: 'Cafés de pequeños caficultores con puntuación SCA superior a 86 puntos. Máquinas La Marzocco y baristas formados en extracción de precisión.',
          primaryCta: { text: 'Ver Menú de Brunch y Cafés', link: '#pricing' },
          imageUrl: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80',
          style: 'centered'
        },
        bentoFeatures: {
          enabled: true,
          title: 'Nuestra Filosofía Cafetera',
          items: [
            {
              id: 'b1',
              title: 'Comercio Directo con Caficultores',
              description: 'Pagamos hasta 3 veces el precio de mercado a fincas familiares en Colombia, Etiopía y Guatemala.',
              icon: 'Heart',
              tag: 'Comercio Justo',
              colSpan: 2
            },
            {
              id: 'b2',
              title: 'Pan de Masa Madre 100% Fermentación Lenta',
              description: 'Obrador propio que elabora hogazas crujientes de trigo sarraceno y centeno para nuestros desayunos.',
              icon: 'Coffee',
              tag: 'Masa Madre',
              colSpan: 1
            }
          ]
        },
        productHighlight: {
          enabled: true,
          title: 'Etiopía Yirgacheffe — Proceso Lavado',
          subtitle: 'Notas florales de jazmín, bergamota y melocotón maduro con acidez brillante.',
          description: 'Extraído en filtro V60 para degustar todos los matices sutiles de la variedad Heirloom.',
          imageUrl: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80',
          specs: [{ label: 'Altitud', value: '2.100 m', detail: 'Alta montaña' }]
        },
        gallery: {
          enabled: true,
          title: 'Rincones Botanik',
          items: [
            { id: 'g1', title: 'Latte art perfecto y tostada de aguacate', category: 'Brunch', imageUrl: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80' }
          ]
        },
        pricing: {
          enabled: true,
          title: 'Favoritos de la Carta',
          billingCycle: 'annual',
          plans: [
            {
              id: 'brunch_completo',
              name: 'Pack Brunch Botanik Completo',
              tag: 'Top Ventas',
              priceMonthly: '16.50 €',
              priceAnnual: '16.50 €',
              description: 'Café de especialidad a elegir + Tostada de masa madre + Bowl de açai o yogur griego + Zumo de naranja natural.',
              features: ['Café con leche vegetal sin suplemento', 'Huevos benedictinos o aguacate', 'Zumo exprimido al momento', 'Cookie casera de avellanas'],
              ctaText: 'Ver en Local',
              ctaLink: '#brunch-menu',
              highlighted: true
            }
          ]
        },
        map: {
          enabled: true,
          title: 'Te Esperamos en el Barrio',
          address: 'Plaza del Roble 7',
          city: 'Valencia / Madrid',
          hours: 'Lunes a Domingo: 08:30 - 19:30',
          phone: '+34 961 000 333',
          email: 'hola@botanikcafe.es',
          embedUrl: 'https://maps.google.com'
        },
        faq: {
          enabled: true,
          title: 'Preguntas Frecuentes',
          items: [{ id: 'f1', question: '¿Aceptan mascotas?', answer: '¡Sí, somos 100% pet friendly! Tu perro siempre tendrá agua fresca y galletas caninas caseras.' }]
        },
        ctaFinal: {
          enabled: true,
          title: 'El mejor desayuno de tu semana te espera en Botanik.',
          subtitle: 'Pasa a por tu café de camino al trabajo o quédate a disfrutar de un brunch sin prisas.',
          primaryCta: { text: 'Cómo Llegar', link: '#map' },
          backgroundStyle: 'glow'
        },
        footer: {
          copyright: '© 2026 Botanik Specialty Coffee S.L.',
          legalLinks: [{ label: 'Aviso Legal', href: '#legal' }],
          socialLinks: [{ platform: 'Instagram', url: 'https://instagram.com' }]
        }
      }
    }
  }
];
