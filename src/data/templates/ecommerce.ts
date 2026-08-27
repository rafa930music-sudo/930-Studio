import { TemplateDefinition } from '../../types';

export const ECOMMERCE_TEMPLATES: TemplateDefinition[] = [
  // 1. AURA WATCHES — Alta Relojería Suiza de Titanio
  {
    id: 'aura-watches',
    name: 'Aura Watches',
    tagline: 'Relojes automáticos de titanio aeroespacial Grado 5 y cristal de zafiro ensamblados a mano en Ginebra',
    category: 'ecommerce',
    thumbnail: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80',
    description: 'Estética monocromática en negro obsidiana #0A0A0F, acento cian glacial #00E5FF, tipografía Plus Jakarta Sans, especificaciones de calibre mecánico, galería macro y pasarela de pedido directo.',
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
        keywords: 'relojes suizos, titanio, zafiro, reloj automatico, lujo silencioso, cronografo de precision'
      },
      sections: {
        navbar: {
          brandName: 'AURA',
          logoText: 'AURA GENÈVE',
          ctaText: 'Ver Colección',
          ctaLink: '#pricing',
          links: [
            { label: 'Colección', href: '#pricing' },
            { label: 'Calibre', href: '#product' },
            { label: 'Artesanía', href: '#features' },
            { label: 'Galería Macro', href: '#gallery' },
            { label: 'Garantía', href: '#faq' }
          ],
          glassBlur: true,
          sticky: true
        },
        hero: {
          enabled: true,
          badge: 'Serie Limitada a 500 Unidades Numeradas',
          kicker: 'Calibre Automático Manufactura',
          title: 'Precisión eterna en titanio macizo.',
          highlightTitle: 'Ingeniería suiza pura.',
          subtitle: 'Esculpido a partir de un bloque macizo de titanio Grado 5 con 70 horas de reserva de marcha y bisel cerámico inalterable al paso del tiempo.',
          primaryCta: { text: 'Adquirir Aura Chrono I', link: '#pricing' },
          secondaryCta: { text: 'Explorar Galería Macro →', link: '#gallery' },
          imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1600&q=80',
          style: 'centered'
        },
        logos: {
          enabled: true,
          title: 'CERTIFICACIONES OFICIALES DE CRONOMETRÍA Y RESISTENCIA',
          items: [
            { id: 'l1', name: 'COSC Certified', tagline: 'Official Chronometer' },
            { id: 'l2', name: 'Swiss Made', tagline: 'Geneva Quality Seal' },
            { id: 'l3', name: 'Titanium Grade 5', tagline: 'Aerospace Alloy' }
          ]
        },
        marquee: {
          enabled: true,
          title: 'Puntos Destacados',
          items: [
            { id: 'm1', text: 'TITANIO GRADO 5 PULIDO A MANO' },
            { id: 'm2', text: 'CRISTAL DE ZAFIRO ANTIRREFLEJOS DOBLE' },
            { id: 'm3', text: 'RESERVA DE MARCHA DE 70 HORAS' },
            { id: 'm4', text: 'SUMERGIBLE HASTA 200 METROS (20 ATM)' },
            { id: 'm5', text: 'GARANTÍA INTERNACIONAL DE 5 AÑOS' }
          ]
        },
        productHighlight: {
          enabled: true,
          badge: 'El Calibre Manufactura',
          kicker: 'Mecánica de Precisión',
          title: 'Calibre Automático Suizo AUR-801.',
          subtitle: '28.800 alternancias por hora (4 Hz) con volante de inercia variable.',
          description: 'Desarrollado íntegramente en nuestro taller de Ginebra con 29 rubíes sintéticos, espiral de silicio antimagnética y masa oscilante de tungsteno calada con grabado Côtes de Genève.',
          imageUrl: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1400&q=80',
          specs: [
            { label: 'Precisión Diaria', value: '-2 / +4 segundos por día (Norma COSC)' },
            { label: 'Reserva de Marcha', value: '70 Horas de autonomía continua' },
            { label: 'Hermeticidad', value: '200 metros / 20 Bar con corona roscada' }
          ]
        },
        bentoFeatures: {
          enabled: true,
          kicker: 'Materiales & Acabados',
          title: 'La obsesión por el detalle en cada milímetro.',
          subtitle: 'Diseñado para soportar presiones extremas sin perder su elegancia refinada.',
          items: [
            {
              id: 'f1',
              title: 'Caja de Titanio Grado 5 Ultraligera',
              description: '45% más ligero que el acero inoxidable y el doble de resistente a la corrosión salina y los arañazos diarios.',
              icon: 'Shield',
              tag: 'Titanio Grado 5',
              colSpan: 2,
              statNumber: '68g',
              statLabel: 'Peso total de la caja sin correa'
            },
            {
              id: 'f2',
              title: 'Cristal de Zafiro con Tratamiento de 7 Capas',
              description: 'Doble curvatura con tratamiento antirreflejos en ambas caras para una legibilidad perfecta bajo luz solar directa.',
              icon: 'Eye',
              tag: 'Dureza 9 Mohs',
              colSpan: 1
            },
            {
              id: 'f3',
              title: 'Luminiscencia Super-LumiNova BGW9',
              description: 'Emisión de luz azul hielo de alta intensidad en agujas e índices con visibilidad garantizada durante 10 horas en oscuridad.',
              icon: 'Sparkles',
              tag: 'Brillo Azul',
              colSpan: 1
            },
            {
              id: 'f4',
              title: 'Correas Intercambiables de Liberación Rápida',
              description: 'Alterna en segundos entre el brazalete macizo de titanio y la correa de caucho FKM resistente a rayos UV y agua salada.',
              icon: 'Repeat',
              tag: 'Quick-Release',
              colSpan: 2,
              statNumber: '2',
              statLabel: 'Correas incluidas en el estuche de viaje'
            }
          ]
        },
        gallery: {
          enabled: true,
          title: 'Detalles de la Colección Aura',
          images: [
            { id: 'g1', url: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80', caption: 'Esfera negro mate con textura cepillada circular' },
            { id: 'g2', url: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80', caption: 'Fondo de caja de zafiro con rotor calado de tungsteno' },
            { id: 'g3', url: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80', caption: 'Brazalete articulado de titanio con cierre desplegable' }
          ]
        },
        stats: {
          enabled: true,
          items: [
            { id: 's1', value: '70h', label: 'Reserva de Marcha Continua' },
            { id: 's2', value: '200m', label: 'Hermeticidad Profesional' },
            { id: 's3', value: '5 Años', label: 'Garantía Internacional Completa' },
            { id: 's4', value: '500', label: 'Unidades Numeradas por Serie' }
          ]
        },
        testimonials: {
          enabled: true,
          title: 'Reseñas de coleccionistas y entusiastas de la relojería.',
          items: [
            {
              id: 't1',
              author: 'Marc Van Der Berg',
              name: 'Marc Van Der Berg',
              role: 'Coleccionista & Editor en WatchJournal',
              company: 'WatchJournal Zurich',
              quote: 'El acabado del titanio y la suavidad del rotor son comparables a piezas de manufacturas suizas del triple de precio. Un reloj para llevar puesto toda la vida.',
              avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
              rating: 5
            }
          ]
        },
        pricing: {
          enabled: true,
          title: 'Selecciona tu Configuración de Guardatiempo',
          billingCycle: 'monthly',
          plans: [
            {
              id: 'p1',
              name: 'Aura Chrono I — Titanio Puro',
              priceMonthly: '1.450€',
              priceAnnual: 'Envío asegurado incluido',
              description: 'Caja de titanio de 40mm con esfera negro obsidiana, brazalete de titanio y correa de caucho FKM.',
              features: ['Calibre automático AUR-801', 'Certificado COSC oficial numerado', 'Estuche de madera de nogal y piel', 'Herramienta de ajuste de eslabones'],
              highlighted: true,
              ctaText: 'Comprar Guardatiempo'
            },
            {
              id: 'p2',
              name: 'Aura Chrono I — Edición Cerámica Stealth',
              priceMonthly: '1.750€',
              priceAnnual: 'Serie limitada a 150 piezas',
              description: 'Bisel de cerámica de circonio pulida al diamante y caja con recubrimiento DLC negro profundo.',
              features: ['Recubrimiento DLC ultra resistente', 'Esfera esqueletada con rubíes vistos', 'Doble cristal de zafiro ahumado', 'Grabado personalizado en el lateral'],
              highlighted: false,
              ctaText: 'Reservar Edición Stealth'
            }
          ]
        },
        faq: {
          enabled: true,
          title: 'Preguntas Frecuentes sobre Compra y Envío',
          items: [
            {
              id: 'q1',
              question: '¿Qué cubre la garantía oficial de 5 años de Aura?',
              answer: 'Nuestra garantía internacional cubre cualquier anomalía en el funcionamiento del calibre mecánico, hermeticidad de la caja y defectos en materiales, con servicio técnico oficial gratuito en Europa y América.'
            },
            {
              id: 'q2',
              question: '¿Cómo se gestiona el envío de piezas de alto valor?',
              answer: 'Todos los envíos se realizan a través de transporte blindado urgente asegurado al 100% con entrega en mano y firma requerida en un plazo de 24-48 horas laborables.'
            },
            {
              id: 'q3',
              question: '¿Cuál es la política de devoluciones si no quedo satisfecho?',
              answer: 'Dispones de 30 días naturales desde la recepción de la pieza para examinarla en tu domicilio y solicitar una devolución íntegra con recogida gratuita siempre que el reloj conserve sus precintos originales.'
            },
            {
              id: 'q4',
              question: '¿Puedo solicitar un grabado personalizado en la tapa trasera?',
              answer: 'Sí. Ofrecemos grabado láser de iniciales, fechas o números de serie personalizados en la corona o el borde del cristal trasero sin coste añadido durante el proceso de compra.'
            },
            {
              id: 'q5',
              question: '¿Cada cuánto tiempo se recomienda realizar el mantenimiento del calibre?',
              answer: 'Gracias a nuestros lubricantes sintéticos de última generación y componentes de silicio, el intervalo de revisión completo recomendado es de 5 a 7 años.'
            },
            {
              id: 'q6',
              question: '¿Qué métodos de pago seguros aceptan en la tienda online?',
              answer: 'Aceptamos tarjetas de crédito/débito principales, transferencias bancarias directas con descuento del 2%, y pago financiado en 3 o 6 plazos sin intereses.'
            }
          ]
        },
        ctaFinal: {
          enabled: true,
          title: 'La elegancia del titanio en tu muñeca.',
          subtitle: 'Piezas numeradas con envío asegurado y garantía internacional de 5 años.',
          primaryCta: { text: 'Adquirir Aura Chrono I Ahora', link: '#pricing' }
        },
        footer: {
          copyright: '© 2026 Aura Horlogerie Genève S.A. Todos los derechos reservados.',
          legalLinks: [
            { label: 'Términos de Compra', href: '#terms' },
            { label: 'Servicio Técnico Oficial', href: '#service' },
            { label: 'Privacidad', href: '#privacy' }
          ],
          socialLinks: [
            { platform: 'Instagram', url: 'https://instagram.com' }
          ]
        }
      }
    }
  },

  // 2. SILVESTRE SKIN — Cosmética Botánica Orgánica
  {
    id: 'silvestre-skin',
    name: 'Silvestre Botanicals',
    tagline: 'Cosmética botánica orgánica y cuidado facial con principios activos de recolección silvestre sostenible',
    category: 'ecommerce',
    thumbnail: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1200&q=80',
    description: 'Estética en verde bosque oscuro y acento menta neón #00FF88, tipografía Syne, sérums concentrados con ácido hialurónico vegetal, aceites botánicos prensados en frío y pack de rutina completa.',
    accentColor: '#00FF88',
    theme: 'dark',
    defaultConfig: {
      templateId: 'silvestre-skin',
      name: 'Silvestre Skin Botanicals',
      slug: 'silvestre-skin',
      domain: 'silvestreskin.com',
      theme: 'dark',
      accentColor: '#00FF88',
      fontFamily: "'Syne', sans-serif",
      borderRadius: 18,
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
        title: 'Silvestre Skin — Cuidado Facial Botánico & Ingredientes Puros',
        description: 'Fórmulas limpias prensadas en frío para una piel radiante, calmada y protegida de la polución urbana.',
        keywords: 'cosmetica botanica, skincare organico, serum facial, aceites prensados en frio, vegano, cruelty free'
      },
      sections: {
        navbar: {
          brandName: 'Silvestre',
          logoText: 'SILVESTRE // BOTANICALS',
          ctaText: 'Ver Rutina Facial',
          ctaLink: '#pricing',
          links: [
            { label: 'Principios Activos', href: '#features' },
            { label: 'El Elixir Icono', href: '#product' },
            { label: 'Colección', href: '#pricing' },
            { label: 'Preguntas', href: '#faq' }
          ],
          glassBlur: true,
          sticky: true
        },
        hero: {
          enabled: true,
          badge: 'Fórmulas 100% Libres de Sulfatos, Parabenos y Siliconas',
          kicker: 'Botánica de Alta Eficacia',
          title: 'El poder regenerador de la naturaleza,',
          highlightTitle: 'en su forma más pura.',
          subtitle: 'Extractos de plantas silvestres recolectadas a mano y prensadas en frío para nutrir, calmar y restaurar la barrera cutánea sin agentes sintéticos agresivos.',
          primaryCta: { text: 'Descubrir la Rutina Botánica', link: '#pricing' },
          secondaryCta: { text: 'Ver Fórmulas y Testimonios →', link: '#features' },
          imageUrl: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1600&q=80',
          style: 'centered'
        },
        logos: {
          enabled: true,
          title: 'SELLOS DE CALIDAD ORGÁNICA Y CRUELTY-FREE',
          items: [
            { id: 'l1', name: 'ECOCERT Bio', tagline: '100% Organic' },
            { id: 'l2', name: 'Leaping Bunny', tagline: 'Cruelty Free' },
            { id: 'l3', name: 'Vegan Society', tagline: '100% Plant Based' }
          ]
        },
        bentoFeatures: {
          enabled: true,
          kicker: 'Ingredientes Vivos',
          title: 'Prensado en frío para mantener los antioxidantes intactos.',
          subtitle: 'Nuestros laboratorios artesanales preservan los polifenoles y ácidos grasos esenciales sin añadir calor ni disolventes.',
          items: [
            {
              id: 'f1',
              title: 'Aceite de Rosa Mosqueta Silvestre y Escualano',
              description: 'Estimula la producción natural de colágeno, atenúa manchas de sol y aporta elasticidad duradera sin sensación grasa.',
              icon: 'Sparkles',
              tag: '100% Puro',
              colSpan: 2,
              statNumber: '96%',
              statLabel: 'De usuarias notaron mayor luminosidad en 14 días'
            },
            {
              id: 'f2',
              title: 'Ácido Hialurónico Vegetal Multimolecular',
              description: 'Penetra en las capas profundas de la epidermis para retener hasta 1.000 veces su peso en agua y rellenar líneas de expresión.',
              icon: 'Droplets',
              tag: 'Hidratación Profunda',
              colSpan: 1
            },
            {
              id: 'f3',
              title: 'Envases de Vidrio Violeta Biofotónico',
              description: 'Protege las moléculas fotosensibles de los rayos solares, prolongando la frescura de los principios activos sin conservantes sintéticos.',
              icon: 'ShieldCheck',
              tag: 'Vidrio Miron',
              colSpan: 1
            },
            {
              id: 'f4',
              title: 'Testado Dermatológicamente en Pieles Sensibles',
              description: 'Fórmulas hipoalergénicas aptas para pieles con rosácea, dermatitis atópica y tendencia a la reactividad.',
              icon: 'Heart',
              tag: 'Pieles Sensibles',
              colSpan: 2,
              statNumber: '0%',
              statLabel: 'De fragancias artificiales o derivados del petróleo'
            }
          ]
        },
        productHighlight: {
          enabled: true,
          badge: 'El Producto Estrella',
          kicker: 'Sérum Reparador Nocturno',
          title: 'Elixir Botánico Midnight Nectar 30ml.',
          subtitle: 'Un concentrado oleoso de 12 extractos botánicos y bakuchiol natural.',
          description: 'Actúa durante las horas de sueño cuando la tasa de renovación celular es más alta. El bakuchiol (la alternativa vegetal al retinol sin irritación) regenera la textura de la piel mientras el aceite de jojoba silvestre equilibra la producción de sebo.',
          imageUrl: 'https://images.unsplash.com/photo-1608248597359-25f0a8277259?auto=format&fit=crop&w=1400&q=80',
          specs: [
            { label: 'Tipo de Piel', value: 'Todo tipo de pieles, incluidas mixtas y sensibles' },
            { label: 'Modo de Uso', value: '3 a 4 gotas sobre el rostro limpio antes de dormir' },
            { label: 'Textura', value: 'Aceite seco de absorción instantánea sin residuo pesado' }
          ]
        },
        gallery: {
          enabled: true,
          title: 'Detalles de los Productos Silvestre',
          images: [
            { id: 'g1', url: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80', caption: 'Frasco de vidrio violeta con gotero de precisión' },
            { id: 'g2', url: 'https://images.unsplash.com/photo-1608248597359-25f0a8277259?auto=format&fit=crop&w=800&q=80', caption: 'Textura dorada de rápida absorción dérmica' }
          ]
        },
        stats: {
          enabled: true,
          items: [
            { id: 's1', value: '100%', label: 'Ingredientes de Origen Vegetal' },
            { id: 's2', value: '14 Días', label: 'Para Ver Resultados Visibles' },
            { id: 's3', value: '4.9/5', label: 'Valoración en Más de 2.000 Clientes' }
          ]
        },
        testimonials: {
          enabled: true,
          title: 'Lo que opinan dermatólogas y clientas sobre Silvestre.',
          items: [
            {
              id: 't1',
              author: 'Dra. Carmen Soler',
              name: 'Dra. Carmen Soler',
              role: 'Dermatóloga Especialista en Barrera Cutánea',
              company: 'Clínica Dermatológica Madrid',
              quote: 'Recomiendo el Elixir Midnight Nectar a pacientes con piel reactiva que buscan los beneficios regeneradores del retinol pero no toleran la sequedad o irritación.',
              avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
              rating: 5
            }
          ]
        },
        pricing: {
          enabled: true,
          title: 'Fórmulas Individuales y Packs de Rutina Completa',
          billingCycle: 'monthly',
          plans: [
            {
              id: 'p1',
              name: 'Elixir Midnight Nectar (30ml)',
              priceMonthly: '42€',
              priceAnnual: 'Envío gratuito a partir de 50€',
              description: 'Tratamiento intensivo regenerador de noche para 3 meses de aplicación diaria.',
              features: ['Bakuchiol natural al 2%', '12 aceites botánicos prensados', 'Frasco de vidrio violeta protector', 'Muestra gratuita de crema de día'],
              highlighted: false,
              ctaText: 'Añadir al Carrito'
            },
            {
              id: 'p2',
              name: 'Pack Rutina Iluminadora Completa',
              priceMonthly: '89€',
              priceAnnual: 'Ahorro de 25€ frente a compra individual',
              description: 'Limpiador en gel botánico, Sérum de Ácido Hialurónico y Elixir Midnight Nectar.',
              features: ['3 productos de tamaño completo', 'Neceser de lino orgánico de regalo', 'Guía paso a paso de masaje facial Gua Sha', 'Envío urgente gratuito en 24h'],
              highlighted: true,
              ctaText: 'Comprar Rutina Completa'
            }
          ]
        },
        faq: {
          enabled: true,
          title: 'Preguntas Frecuentes sobre Cosmética Botánica',
          items: [
            {
              id: 'q1',
              question: '¿Los aceites faciales pueden obstruir los poros o causar brotes de acné?',
              answer: 'No. Utilizamos únicamente aceites botánicos no comedogénicos como la jojoba y el escualano de oliva que tienen una estructura molecular idéntica al sebo natural de la piel, ayudando a equilibrarla.'
            },
            {
              id: 'q2',
              question: '¿Los productos son aptos durante el embarazo y lactancia?',
              answer: 'Sí. Nuestras fórmulas no contienen retinol, aceites esenciales con contraindicaciones ni derivados de la vitamina A sintética, por lo que son completamente seguras durante estas etapas.'
            },
            {
              id: 'q3',
              question: '¿Cuánto tiempo dura un frasco de sérum de 30ml?',
              answer: 'Aplicando la dosis recomendada de 3 a 4 gotas diarias por la noche, un frasco de 30ml tiene una duración estimada de entre 90 y 110 días de uso continuado.'
            },
            {
              id: 'q4',
              question: '¿Los productos son 100% veganos y libres de crueldad animal?',
              answer: 'Absolutamente. No utilizamos ningún derivado de origen animal como ceras o colágeno bovino y contamos con la certificación internacional Leaping Bunny que garantiza cero pruebas en animales.'
            },
            {
              id: 'q5',
              question: '¿Cuál es la política de devoluciones de la tienda online?',
              answer: 'Si un producto no se adapta a tu piel, dispones de 30 días para devolverlo y recibir un reembolso íntegro o cambiarlo por otra fórmula que se adapte mejor a tus necesidades.'
            },
            {
              id: 'q6',
              question: '¿Cómo deben conservarse los productos en casa?',
              answer: 'Recomendamos mantener los frascos en un lugar fresco y seco alejados de fuentes directas de calor. No es necesario conservarlos en el frigorífico gracias a la protección de nuestro vidrio biofotónico.'
            }
          ]
        },
        ctaFinal: {
          enabled: true,
          title: 'Devuelve la vitalidad natural a tu piel.',
          subtitle: 'Fórmulas puras y respetuosas elaboradas con botánica silvestre sostenible.',
          primaryCta: { text: 'Descubrir Silvestre Skin', link: '#pricing' }
        },
        footer: {
          copyright: '© 2026 Silvestre Skin Botanicals S.L. Todos los derechos reservados.',
          legalLinks: [
            { label: 'Ingredientes INCI', href: '#inci' },
            { label: 'Sostenibilidad', href: '#eco' },
            { label: 'Aviso Legal', href: '#legal' }
          ],
          socialLinks: [
            { platform: 'Instagram', url: 'https://instagram.com' }
          ]
        }
      }
    }
  },

  // 3. VALKIRIA APPAREL — Moda Urbana & Sastrería Contemporánea
  {
    id: 'valkiria-apparel',
    name: 'Valkiria Studio',
    tagline: 'Moda urbana contemporánea, sastrería arquitectónica y tejidos técnicos reciclados de alta durabilidad',
    category: 'ecommerce',
    thumbnail: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=80',
    description: 'Estética en negro grafito #0E0E12, acento violeta neón #8B5CF6, tipografía Space Grotesk, catálogo de prendas de autor, tablas de tallas milimétricas, lookbooks editoriales y pasarela directa.',
    accentColor: '#8B5CF6',
    theme: 'dark',
    defaultConfig: {
      templateId: 'valkiria-apparel',
      name: 'Valkiria Studio Apparel',
      slug: 'valkiria-studio',
      domain: 'valkiriastudio.com',
      theme: 'dark',
      accentColor: '#8B5CF6',
      fontFamily: "'Space Grotesk', sans-serif",
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
        title: 'Valkiria Studio — Moda Urbana & Sastrería Arquitectónica',
        description: 'Prendas unisex confeccionadas en pequeñas tiradas con tejidos técnicos reciclados y patrones oversize de autor.',
        keywords: 'moda urbana, streetwear de autor, sastrería oversize, ropa tecnica, algodon organico, moda sostenible'
      },
      sections: {
        navbar: {
          brandName: 'Valkiria',
          logoText: 'VALKIRIA // STUDIO',
          ctaText: 'Ver Colección 04',
          ctaLink: '#pricing',
          links: [
            { label: 'Colección', href: '#pricing' },
            { label: 'Tejidos', href: '#features' },
            { label: 'Prenda Icono', href: '#product' },
            { label: 'Lookbook', href: '#gallery' }
          ],
          glassBlur: true,
          sticky: true
        },
        hero: {
          enabled: true,
          badge: 'Drop 04 — Edición Limitada a 250 Unidades por Modelo',
          kicker: 'Sastrería Urbana de Vanguardia',
          title: 'Arquitectura textil y volumen.',
          highlightTitle: 'Sin etiquetas convencionales.',
          subtitle: 'Prendas diseñadas para fluir con el movimiento urbano. Cortes volumétricos confeccionados con lanas recicladas italianas y algodón orgánico de 450 g/m².',
          primaryCta: { text: 'Explorar Drop 04', link: '#pricing' },
          secondaryCta: { text: 'Ver Editorial en Galería →', link: '#gallery' },
          imageUrl: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1600&q=80',
          style: 'centered'
        },
        logos: {
          enabled: true,
          title: 'PRESENTADO EN LAS PRINCIPALES SEMANAS DE LA MODA INDEPENDIENTE',
          items: [
            { id: 'l1', name: 'Berlin Fashion Week', tagline: 'Avant-Garde Selection' },
            { id: 'l2', name: 'Vogue Talents', tagline: 'Sustainable Designer' },
            { id: 'l3', name: 'Highsnobiety', tagline: 'Curated Drop' }
          ]
        },
        bentoFeatures: {
          enabled: true,
          kicker: 'Materiales & Patronaje',
          title: 'Confección ética en talleres locales de cercanía.',
          subtitle: 'Producimos exclusivamente en Portugal y España bajo condiciones de trabajo justas y con trazabilidad completa de cada fibra.',
          items: [
            {
              id: 'f1',
              title: 'Algodón Orgánico Pesado de 450 GSM',
              description: 'Tejido denso que mantiene la estructura volumétrica del patrón tras cientos de lavados sin deformarse ni generar bolitas.',
              icon: 'Sparkles',
              tag: '450 GSM Heavyweight',
              colSpan: 2,
              statNumber: '450',
              statLabel: 'Gramos por metro cuadrado de densidad textil'
            },
            {
              id: 'f2',
              title: 'Cremalleras Metálicas YKK Excella de Titanio',
              description: 'Dientes pulidos individualmente para un deslizamiento ultra suave y resistencia a la corrosión.',
              icon: 'Shield',
              tag: 'YKK Excella',
              colSpan: 1
            },
            {
              id: 'f3',
              title: 'Patronaje Unisex de Caída Impecable',
              description: 'Siluetas estudiadas para adaptarse a cualquier fisonomía mediante hombros caídos y pinzas dorsales estratégicas.',
              icon: 'Layers',
              tag: 'Genderless Cut',
              colSpan: 1
            },
            {
              id: 'f4',
              title: 'Tintes Minerales con Cero Residuos Tóxicos',
              description: 'Gama de colores tierra y carbón lograda mediante pigmentos naturales con un 85% de ahorro de agua en tintorería.',
              icon: 'Droplets',
              tag: 'Tintes Minerales',
              colSpan: 2,
              statNumber: '85%',
              statLabel: 'Menos consumo de agua respecto a tintes convencionales'
            }
          ]
        },
        productHighlight: {
          enabled: true,
          badge: 'La Pieza Maestra',
          kicker: 'Prenda de Abrigo',
          title: 'Overcoat Arquitectónico de Lana Reciclada.',
          subtitle: 'Estructura oversize con solapas cruzadas y forro térmico transpirable.',
          description: 'Confeccionado en lana hervida reciclada de 650 g/m² en talleres artesanos de Oporto. Su caída recta y bolsillos ocultos con cierre magnético lo convierten en el abrigo definitivo para el invierno urbano.',
          imageUrl: 'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=1400&q=80',
          specs: [
            { label: 'Composición', value: '80% Lana Reciclada Italiana, 20% Poliamida Técnica Regenerada' },
            { label: 'Aislamiento', value: 'Protección térmica confort hasta -5°C' },
            { label: 'Cuidados', value: 'Limpieza en seco profesional ecológica' }
          ]
        },
        gallery: {
          enabled: true,
          title: 'Editorial Lookbook Drop 04',
          images: [
            { id: 'g1', url: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80', caption: 'Pantalón ancho con pinzas y sudadera oversize de 450 gsm' },
            { id: 'g2', url: 'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80', caption: 'Detalle de costuras reforzadas en hombro caído' }
          ]
        },
        stats: {
          enabled: true,
          items: [
            { id: 's1', value: '250', label: 'Unidades Máximas por Drop' },
            { id: 's2', value: '100%', label: 'Confección Ética en la UE' },
            { id: 's3', value: '450g', label: 'Densidad del Algodón Orgánico' }
          ]
        },
        testimonials: {
          enabled: true,
          title: 'Lo que opinan estilistas y clientes de Valkiria.',
          items: [
            {
              id: 't1',
              author: 'Hugo Alarcón',
              name: 'Hugo Alarcón',
              role: 'Director Creativo & Estilista de Moda',
              company: 'Vogue España',
              quote: 'El patrón y el peso de las prendas de Valkiria están a la altura de las grandes firmas de pasarela internacional pero con una conciencia de sostenibilidad real.',
              avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
              rating: 5
            }
          ]
        },
        pricing: {
          enabled: true,
          title: 'Piezas Disponibles del Drop 04',
          billingCycle: 'monthly',
          plans: [
            {
              id: 'p1',
              name: 'Heavyweight Boxy Hoodie (450 GSM)',
              priceMonthly: '110€',
              priceAnnual: 'Algodón orgánico peinado',
              description: 'Sudadera sin cordones con capucha doble y bolsillo canguro oculto en costuras laterales.',
              features: ['Tejido pesado de 450 gsm', 'Corte boxy oversize con hombros caídos', 'Puños de canalé de alta resistencia', 'Envío gratuito en 24-48h'],
              highlighted: false,
              ctaText: 'Seleccionar Talla'
            },
            {
              id: 'p2',
              name: 'Overcoat Arquitectónico de Lana',
              priceMonthly: '285€',
              priceAnnual: 'Serie limitada a 80 unidades',
              description: 'Abrigo largo cruzado de lana reciclada italiana de 650 gsm con bolsillos magnéticos.',
              features: ['80% Lana reciclada italiana', 'Forro de cupro japonés antiestático', 'Botones de cuerno natural grabados', 'Bolsa portatrajes de lino de regalo'],
              highlighted: true,
              ctaText: 'Comprar Abrigo'
            }
          ]
        },
        faq: {
          enabled: true,
          title: 'Preguntas Frecuentes sobre Valkiria',
          items: [
            {
              id: 'q1',
              question: '¿Cómo elijo mi talla adecuada en los patrones oversize?',
              answer: 'Recomendamos elegir tu talla habitual para un fit holgado y estructurado tal como fue concebido en el diseño. Si prefieres un ajuste más entallado, te sugerimos seleccionar una talla menos.'
            },
            {
              id: 'q2',
              question: '¿Dónde se fabrican las colecciones de Valkiria?',
              answer: 'Todas nuestras prendas se diseñan en nuestro estudio de Madrid y se confeccionan en pequeños talleres familiares del norte de Portugal reconocidos por su maestría textil.'
            },
            {
              id: 'q3',
              question: '¿Qué política de cambios de talla disponen?',
              answer: 'Ofrecemos cambios de talla gratuitos a domicilio en un plazo de 14 días. Enviamos al mensajero con la nueva talla y recogemos la prenda original en el mismo momento.'
            },
            {
              id: 'q4',
              question: '¿Habrá reposición de stock una vez agotado un Drop?',
              answer: 'Para mantener la exclusividad y evitar la sobreproducción textil, cada Drop se produce en una única tirada limitada de 250 unidades y no vuelve a confeccionarse.'
            },
            {
              id: 'q5',
              question: '¿Cómo debo lavar las prendas de algodón pesado?',
              answer: 'Recomendamos lavar del revés en agua fría (máximo 30°C) con detergente neutro y secar en plano a la sombra para preservar la densidad y los tintes minerales durante años.'
            },
            {
              id: 'q6',
              question: '¿Realizan envíos a todo el mundo?',
              answer: 'Enviamos a toda la Unión Europea, Reino Unido, Estados Unidos y Japón con mensajería urgente y empaquetado 100% biodegradable libre de plásticos.'
            }
          ]
        },
        ctaFinal: {
          enabled: true,
          title: 'Viste la arquitectura urbana contemporánea.',
          subtitle: 'Unidades limitadas por drop con envío y cambios de talla sin coste.',
          primaryCta: { text: 'Explorar Tienda Valkiria', link: '#pricing' }
        },
        footer: {
          copyright: '© 2026 Valkiria Studio Apparel S.L. Todos los derechos reservados.',
          legalLinks: [
            { label: 'Guía de Tallas', href: '#tallas' },
            { label: 'Envíos y Cambios', href: '#envios' },
            { label: 'Términos de Venta', href: '#terms' }
          ],
          socialLinks: [
            { platform: 'Instagram', url: 'https://instagram.com' }
          ]
        }
      }
    }
  },

  // 4. LÚMINA HOME — Mobiliario Nórdico & Diseño de Interiores
  {
    id: 'lumina-home',
    name: 'Lúmina Living',
    tagline: 'Mobiliario de diseño escandinavo, maderas nobles de tala sostenible y lámparas escultóricas para hogares cálidos',
    category: 'ecommerce',
    thumbnail: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80',
    description: 'Estética en tonos arena y carbón con acento oro cálido #FFD700, tipografía Outfit, catálogo de sofás modulares de lino belga, mesas de roble macizo y servicio de interiorismo 3D.',
    accentColor: '#FFD700',
    theme: 'dark',
    defaultConfig: {
      templateId: 'lumina-home',
      name: 'Lúmina Living Scandinavian Design',
      slug: 'lumina-living',
      domain: 'luminaliving.com',
      theme: 'dark',
      accentColor: '#FFD700',
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
        'faq',
        'ctaFinal',
        'footer'
      ],
      seo: {
        title: 'Lúmina Living — Mobiliario Nórdico & Lámparas Escultóricas',
        description: 'Muebles de roble macizo sostenible, sofás de lino y luminarias de diseño para crear espacios llenos de calma y luz.',
        keywords: 'muebles nordicos, diseño escandinavo, sofas de lino, mesas de roble, lamparas de diseño, decoracion minimalista'
      },
      sections: {
        navbar: {
          brandName: 'Lúmina',
          logoText: 'LÚMINA // LIVING',
          ctaText: 'Ver Catálogo',
          ctaLink: '#pricing',
          links: [
            { label: 'Materiales', href: '#features' },
            { label: 'Pieza Icono', href: '#product' },
            { label: 'Colección', href: '#pricing' },
            { label: 'Espacios', href: '#gallery' }
          ],
          glassBlur: true,
          sticky: true
        },
        hero: {
          enabled: true,
          badge: 'Maderas con Certificación Forestal FSC 100%',
          kicker: 'Diseño Escandinavo & Calidez',
          title: 'Espacios que transmiten calma,',
          highlightTitle: 'creados para vivir.',
          subtitle: 'Mobiliario atemporal fabricado a mano en roble macizo, lino belga lavado y piedra caliza para transformar tu hogar en un refugio de serenidad y luz natural.',
          primaryCta: { text: 'Descubrir la Colección 2026', link: '#pricing' },
          secondaryCta: { text: 'Ver Galería de Espacios →', link: '#gallery' },
          imageUrl: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1600&q=80',
          style: 'centered'
        },
        logos: {
          enabled: true,
          title: 'PREMIOS INTERNACIONALES DE DISEÑO Y SOSTENIBILIDAD',
          items: [
            { id: 'l1', name: 'Red Dot Award', tagline: 'Best of the Best 2026' },
            { id: 'l2', name: 'FSC Certified', tagline: '100% Sustainable Forest' },
            { id: 'l3', name: 'Elle Decoration', tagline: 'Design of the Year' }
          ]
        },
        bentoFeatures: {
          enabled: true,
          kicker: 'Artesanía & Pureza',
          title: 'Materiales que envejecen con nobleza.',
          subtitle: 'Sin aglomerados ni plásticos: solo madera maciza aceitada, textiles naturales y ensamblajes tradicionales de cola de milano.',
          items: [
            {
              id: 'f1',
              title: 'Roble Blanco Europeo de Bosques Sostenibles',
              description: 'Madera secada al aire durante 18 meses para evitar tensiones estructurales, tratada con aceites vegetales naturales libres de COVs.',
              icon: 'TreePine',
              tag: '100% Roble Macizo',
              colSpan: 2,
              statNumber: '10 Años',
              statLabel: 'De garantía estructural en todas las piezas'
            },
            {
              id: 'f2',
              title: 'Tapicerías de Lino Belga y Lana Bouclé',
              description: 'Tejidos de tacto voluptuoso con test Martindale superior a 45.000 ciclos de resistencia al desgaste diario.',
              icon: 'Sparkles',
              tag: 'Lino Belga',
              colSpan: 1
            },
            {
              id: 'f3',
              title: 'Ensamblajes Ocultos sin Tornillos Vistos',
              description: 'Técnicas de ebanistería tradicional que permiten desmontar y reparar las piezas generación tras generación.',
              icon: 'Hammer',
              tag: 'Ebanistería Pura',
              colSpan: 1
            },
            {
              id: 'f4',
              title: 'Servicio de Entrega Guante Blanco con Montaje',
              description: 'Nuestro equipo especializado transporta el mueble, lo desembala en la habitación elegida y retira todos los embalajes.',
              icon: 'Truck',
              tag: 'Montaje Incluido',
              colSpan: 2,
              statNumber: '100%',
              statLabel: 'Embalajes de cartón reciclado libres de poliestireno'
            }
          ]
        },
        productHighlight: {
          enabled: true,
          badge: 'El Sofá Insignia',
          kicker: 'Confort Modular',
          title: 'Sofá Modular Fjord en Lino Natural Crudo.',
          subtitle: 'Estructura profunda de madera maciza con relleno de plumón y látex ecológico.',
          description: 'Diseñado por el estudio danés Holm & Vester. Sus módulos configurables permiten adaptar el sofá a cualquier salón con fundas completamente desenfundables y lavables en lavadora doméstica.',
          imageUrl: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1400&q=80',
          specs: [
            { label: 'Dimensiones', value: '280 x 105 x 75 cm (Configuración 3 plazas con chaiselongue)' },
            { label: 'Tapicería', value: '100% Lino Belga lavado a la piedra (480 g/m²)' },
            { label: 'Sostenibilidad', value: 'Relleno libre de espumas químicas de poliuretano' }
          ]
        },
        gallery: {
          enabled: true,
          title: 'Inspiración de Espacios Lúmina',
          images: [
            { id: 'g1', url: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80', caption: 'Salón con sofá Fjord y mesa de centro de roble macizo' },
            { id: 'g2', url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80', caption: 'Lámpara colgante de cerámica artesanal con luz cálida difusa' }
          ]
        },
        stats: {
          enabled: true,
          items: [
            { id: 's1', value: '10 Años', label: 'Garantía Estructural en Roble' },
            { id: 's2', value: '100% FSC', label: 'Madera de Bosques Responsables' },
            { id: 's3', value: '4.9/5', label: 'Satisfacción de Clientes' }
          ]
        },
        testimonials: {
          enabled: true,
          title: 'Lo que opinan interioristas y familias sobre Lúmina.',
          items: [
            {
              id: 't1',
              author: 'Sofia Lindqvist',
              name: 'Sofia Lindqvist',
              role: 'Arquitecta de Interiores en Studio Oslo',
              company: 'Studio Oslo',
              quote: 'La calidad del roble y la textura del lino del sofá Fjord son insuperables. Es una pieza que aporta una sensación inmediata de bienestar y orden visual a cualquier hogar.',
              avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
              rating: 5
            }
          ]
        },
        pricing: {
          enabled: true,
          title: 'Piezas Clave de la Colección',
          billingCycle: 'monthly',
          plans: [
            {
              id: 'p1',
              name: 'Mesa de Comedor Asger (220cm)',
              priceMonthly: '980€',
              priceAnnual: 'Roble macizo aceitado',
              description: 'Mesa de comedor para 8 personas con tablero de 4cm de grosor y bordes biselados suaves.',
              features: ['100% Roble macizo europeo', 'Tratamiento antimanchas natural', 'Patas con ensamblaje invisible', 'Entrega con montaje en domicilio'],
              highlighted: false,
              ctaText: 'Ver Mesa Asger'
            },
            {
              id: 'p2',
              name: 'Sofá Modular Fjord (3 Plazas)',
              priceMonthly: '1.850€',
              priceAnnual: 'El más vendido de la colección',
              description: 'Sofá modular de lino belga desenfundable con cojines de plumón y suspensión de muelles ensacados.',
              features: ['Fundas 100% lino desenfundables', 'Módulos intercambiables', '10 años de garantía en armazón', 'Entrega Guante Blanco incluida'],
              highlighted: true,
              ctaText: 'Configurar Sofá Fjord'
            }
          ]
        },
        faq: {
          enabled: true,
          title: 'Preguntas Frecuentes sobre Pedidos y Envíos',
          items: [
            {
              id: 'q1',
              question: '¿En qué consiste el servicio de entrega Guante Blanco?',
              answer: 'Dos operarios especializados transportan el mueble hasta la estancia que indiques en tu casa, lo montan completamente, comprueban su nivelado y retiran todos los plásticos y cartones para su reciclaje.'
            },
            {
              id: 'q2',
              question: '¿Puedo solicitar muestras de tela y madera antes de comprar?',
              answer: 'Sí. Enviamos un pack gratuito con 5 muestras de lino, lana bouclé y muestras de madera de roble natural y ahumado a tu domicilio en 48 horas.'
            },
            {
              id: 'q3',
              question: '¿Cómo se limpian las manchas en los sofás de lino?',
              answer: 'Todas las fundas son completamente desenfundables mediante cremalleras ocultas y pueden lavarse a máquina en programa delicado con agua fría o limpiarse localmente con un paño húmedo.'
            },
            {
              id: 'q4',
              question: '¿Cuánto tiempo tarda la fabricación y entrega de los muebles?',
              answer: 'Las piezas en stock se entregan en 3 a 5 días laborables, mientras que los sofás configurados a medida tienen un plazo de fabricación artesanal de 3 a 4 semanas.'
            },
            {
              id: 'q5',
              question: '¿Qué garantía tienen los muebles de madera maciza?',
              answer: 'Ofrecemos 10 años de garantía directa que cubre la integridad del armazón de madera maciza, ensamblajes y deformaciones imprevistas por temperatura.'
            },
            {
              id: 'q6',
              question: '¿Ofrecen servicio de asesoramiento en decoración e interiorismo?',
              answer: 'Contamos con un equipo de interioristas que pueden realizar una propuesta de distribución 3D de tu salón de forma gratuita al enviarnos el plano de tu casa.'
            }
          ]
        },
        ctaFinal: {
          enabled: true,
          title: 'Convierte tu casa en el hogar que sueñas.',
          subtitle: 'Diseño nórdico atemporal con entrega especializada y montaje en tu salón.',
          primaryCta: { text: 'Explorar Catálogo Lúmina', link: '#pricing' }
        },
        footer: {
          copyright: '© 2026 Lúmina Living Scandinavian Design S.L. Todos los derechos reservados.',
          legalLinks: [
            { label: 'Servicio de Interiorismo', href: '#interiorismo' },
            { label: 'Cuidado de la Madera', href: '#cuidados' },
            { label: 'Garantía y Devoluciones', href: '#garantia' }
          ],
          socialLinks: [
            { platform: 'Instagram', url: 'https://instagram.com' },
            { platform: 'Pinterest', url: 'https://pinterest.com' }
          ]
        }
      }
    }
  }
];
