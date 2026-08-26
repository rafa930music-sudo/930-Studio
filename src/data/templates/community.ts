import { TemplateDefinition } from '../../types';

export const COMMUNITY_TEMPLATES: TemplateDefinition[] = [
  // 1. OCÉANOS VIVOS — Conservación Marina & Regeneración de Arrecifes
  {
    id: 'oceanos-vivos',
    name: 'Océanos Vivos',
    tagline: 'Fundación internacional dedicada a la limpieza de plásticos marinos, protección de cetáceos y restauración de arrecifes de coral',
    category: 'community',
    style: 'natural',
    thumbnail: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80',
    description: 'Estética oceánica profunda en azul marino y cian bioluminiscente #00E5FF, tipografía Inter, contador de toneladas de plástico retiradas, mapa de expediciones y pasarela de donaciones transparentes.',
    accentColor: '#00E5FF',
    theme: 'dark',
    defaultConfig: {
      templateId: 'oceanos-vivos',
      name: 'Fundación Océanos Vivos',
      slug: 'oceanos-vivos',
      domain: 'oceanosvivos.org',
      theme: 'dark',
      accentColor: '#00E5FF',
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      borderRadius: 18,
      published: true,
      sectionOrder: [
        'navbar',
        'hero',
        'logos',
        'marquee',
        'stats',
        'bentoFeatures',
        'gallery',
        'productHighlight',
        'testimonials',
        'pricing',
        'faq',
        'ctaFinal',
        'footer'
      ],
      seo: {
        title: 'Océanos Vivos — Protección de Arrecifes y Mares Limpios',
        description: 'Apoya nuestras expediciones marinas y los programas de recogida de redes fantasma y plásticos oceánicos.',
        keywords: 'ong marina, salvar oceanos, arrecifes de coral, voluntariado mar, donacion'
      },
      sections: {
        navbar: {
          brandName: 'OCÉANOS VIVOS',
          logoText: 'OCÉANOS VIVOS // ONG',
          ctaText: 'Hacer Donación',
          ctaLink: '#pricing',
          links: [
            { label: 'Misiones', href: '#bentoFeatures' },
            { label: 'Impacto', href: '#stats' },
            { label: 'Expediciones', href: '#gallery' },
            { label: 'Donar', href: '#pricing' }
          ],
          glassBlur: true,
          sticky: true
        },
        hero: {
          enabled: true,
          badge: 'Misión Arrecifes 2026',
          kicker: 'Conservación Marina Global',
          title: 'Protegemos el latido azul de nuestro planeta.',
          highlightTitle: 'Cada segundo cuenta.',
          subtitle: 'Trabajamos en primera línea recuperando ecosistemas de coral dañados, retirando redes de pesca abandonadas y protegiendo santuarios de ballenas.',
          primaryCta: { text: 'Unirme como Socio', link: '#pricing' },
          secondaryCta: { text: 'Ver Expediciones Activas', link: '#gallery' },
          imageUrl: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80',
          style: 'centered'
        },
        logos: {
          enabled: true,
          title: 'Organismos colaboradores y alianzas científicas internacionales',
          items: [
            { id: 'l1', name: 'UNESCO Ocean Decade', tagline: 'Partner Oficial' },
            { id: 'l2', name: 'IUCN Red List', tagline: 'Asesor Científico' },
            { id: 'l3', name: 'Global Coral Alliance', tagline: 'Investigación' },
            { id: 'l4', name: '1% for the Planet', tagline: 'Miembro Acreditado' }
          ]
        },
        marquee: {
          enabled: true,
          speed: 'normal',
          direction: 'left',
          items: [
            { id: 'm1', text: '+420 TONELADAS DE PLÁSTICO RETIRADAS', highlight: true },
            { id: 'm2', text: '18 SANTUARIOS MARINOS PROTEGIDOS' },
            { id: 'm3', text: '100% TRANSPARENCIA FINANCIERA AUDITADA', highlight: true },
            { id: 'm4', text: 'DESGRAVACIÓN FISCAL DEL 80% EN ESPAÑA' }
          ]
        },
        stats: {
          enabled: true,
          kicker: 'Impacto Real Medible',
          title: 'Nuestros números en los últimos 3 años.',
          items: [
            { id: 's1', value: '420 Tn', label: 'Plástico Recuperado', description: 'Transformado en materiales reciclados' },
            { id: 's2', value: '65.000', label: 'Corales Replantados', description: 'Con un 88% de tasa de supervivencia' },
            { id: 's3', value: '18', label: 'Áreas Marinas Protegidas', description: 'Libres de pesca de arrastre industrial' },
            { id: 's4', value: '12.400', label: 'Socios Activos', description: 'Que financian nuestra flota propia' }
          ]
        },
        bentoFeatures: {
          enabled: true,
          kicker: 'Líneas de Acción',
          title: 'Cómo defendemos la biodiversidad oceánica.',
          items: [
            {
              id: 'b1',
              title: 'Viveros Submarinos de Coral Resistente',
              description: 'Cultivamos microfragmentos de especies de coral térmicamente adaptadas para repoblar barreras degradadas por el cambio climático.',
              icon: 'Shield',
              tag: 'Regeneración',
              colSpan: 2
            },
            {
              id: 'b2',
              title: 'Retirada de Redes Fantasma',
              description: 'Buzos profesionales extraen aparejos de pesca a la deriva que atrapan tortugas, tiburones y focas.',
              icon: 'Anchor',
              tag: 'Rescate',
              colSpan: 1
            },
            {
              id: 'b3',
              title: 'Vigilancia Satelital Anti-Furtivos',
              description: 'Colaboramos con guardacostas para detectar buques ilegales en reservas de cría.',
              icon: 'Eye',
              tag: 'Vigilancia',
              colSpan: 1
            }
          ]
        },
        gallery: {
          enabled: true,
          title: 'Galería de Expediciones en el Mar',
          items: [
            { id: 'g1', title: 'Siembra de Coral en Arrecifes del Caribe', category: 'Conservación', imageUrl: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80', aspectRatio: 'wide' },
            { id: 'g2', title: 'Liberación de Tortuga Boba Marina', category: 'Rescate', imageUrl: 'https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?auto=format&fit=crop&w=800&q=80', aspectRatio: 'tall' }
          ]
        },
        productHighlight: {
          enabled: true,
          kicker: 'Barco de Investigación',
          title: 'El Buque Insignia "Poseidón III"',
          subtitle: 'Un catamarán híbrido equipado con laboratorio oceanográfico propio.',
          description: 'Permite a biólogos marinos y voluntarios navegar durante meses monitorizando la calidad de las aguas y cartografiando fondos marinos en 3D.',
          imageUrl: 'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?auto=format&fit=crop&w=1200&q=80',
          specs: [
            { label: 'Eslora', value: '38 Metros', detail: 'Propulsión solar e híbrida' },
            { label: 'Científicos', value: '14 Tripulantes', detail: 'Laboratorio de biología marina abordo' }
          ]
        },
        testimonials: {
          enabled: true,
          title: 'La voz de nuestros científicos y socios',
          items: [
            {
              id: 't1',
              name: 'Dra. Marina Valdés',
              role: 'Directora Científica',
              company: 'Expedición Coral',
              quote: 'Ver florecer de nuevo un arrecife que dábamos por muerto gracias a las donaciones mensuales de miles de personas anónimas es la mayor satisfacción de mi vida profesional.',
              avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
              rating: 5
            }
          ]
        },
        pricing: {
          enabled: true,
          title: 'Hazte Socio y Protege el Mar',
          subtitle: 'Tus aportaciones tienen hasta un 80% de desgravación en el IRPF.',
          billingCycle: 'annual',
          plans: [
            {
              id: 'donacion_coral',
              name: 'Guardián del Arrecife',
              priceMonthly: '9 € / mes',
              priceAnnual: '9 € / mes',
              description: 'Permite financiar la siembra de 3 corales al mes y recibir el informe trimestral.',
              features: [
                'Siembra certificada de corales a tu nombre',
                'Informe trimestral de expediciones en vídeo',
                'Certificado de donación para desgravación fiscal',
                'Acceso al canal privado de la tripulación'
              ],
              ctaText: 'Donar 9€ al Mes',
              ctaLink: '#donate-9',
              highlighted: false
            },
            {
              id: 'donacion_oceano',
              name: 'Defensor Oceánico',
              tag: 'Mayor Impacto',
              priceMonthly: '20 € / mes',
              priceAnnual: '20 € / mes',
              description: 'Financia combustible para el buque de rescate y la retirada de 50kg de plástico marino.',
              features: [
                'Retirada directa de 50kg de redes y plástico al mes',
                'Adopción y seguimiento GPS de una tortuga rescatada',
                'Invitación a las jornadas anuales de voluntariado',
                'Certificado oficial fiscal con desgravación del 80%',
                'Pack de bienvenida con camiseta de algodón orgánico'
              ],
              ctaText: 'Donar 20€ al Mes',
              ctaLink: '#donate-20',
              highlighted: true
            }
          ]
        },
        faq: {
          enabled: true,
          title: 'Preguntas sobre Donaciones',
          items: [
            {
              id: 'f1',
              question: '¿Cómo funciona la desgravación fiscal de mi donación?',
              answer: 'En los primeros 250€ donados al año te desgravas el 80% en tu declaración de la renta (si donas 100€, Hacienda te devuelve 80€). Emitimos el certificado oficial automáticamente.'
            }
          ]
        },
        ctaFinal: {
          enabled: true,
          title: 'Juntos podemos salvar nuestros océanos.',
          subtitle: 'Cada minuto que pasa, una tonelada de plástico entra al mar. Actúa hoy.',
          primaryCta: { text: 'Hacer una Donación Ahora', link: '#pricing' },
          backgroundStyle: 'glow'
        },
        footer: {
          copyright: '© 2026 Fundación Océanos Vivos. ONG inscrita en el Registro Oficial.',
          legalLinks: [
            { label: 'Memorias Económicas Auditadas', href: '#finances' },
            { label: 'Política de Transparencia', href: '#transparency' }
          ],
          socialLinks: [
            { platform: 'Instagram', url: 'https://instagram.com' },
            { platform: 'YouTube', url: 'https://youtube.com' }
          ]
        }
      }
    }
  },

  // 2. RAÍCES VERDES — Reforestación Autóctona & Huertos Urbanos
  {
    id: 'raices-verdes',
    name: 'Raíces Verdes',
    tagline: 'Asociación ecológica para la recuperación de bosques mediterráneos y creación de corredores biológicos verdes',
    category: 'community',
    style: 'natural',
    thumbnail: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=80',
    description: 'Estética en verde bosque y tierra fértil con acento verde esmeralda #00FF88, tipografía Outfit, mapa interactivo de bosques plantados, días de plantación comunitaria y apadrinamiento de árboles.',
    accentColor: '#00FF88',
    theme: 'dark',
    defaultConfig: {
      templateId: 'raices-verdes',
      name: 'Raíces Verdes Bosques',
      slug: 'raices-verdes',
      domain: 'raicesverdes.org',
      theme: 'dark',
      accentColor: '#00FF88',
      fontFamily: "'Outfit', sans-serif",
      borderRadius: 16,
      published: true,
      sectionOrder: [
        'navbar',
        'hero',
        'stats',
        'bentoFeatures',
        'gallery',
        'productHighlight',
        'testimonials',
        'pricing',
        'faq',
        'ctaFinal',
        'footer'
      ],
      seo: {
        title: 'Raíces Verdes — Reforestación y Bosques Autóctonos',
        description: 'Plantamos árboles autóctonos en zonas desertificadas e incendiadas con custodia del territorio.',
        keywords: 'reforestacion, plantar arboles, voluntariado ambiental, cambio climatico'
      },
      sections: {
        navbar: {
          brandName: 'RAÍCES VERDES',
          logoText: 'RAÍCES VERDES // ECO',
          ctaText: 'Plantar un Árbol',
          ctaLink: '#pricing',
          links: [
            { label: 'Bosques', href: '#bentoFeatures' },
            { label: 'Voluntariado', href: '#gallery' },
            { label: 'Impacto', href: '#stats' },
            { label: 'Apadrinar', href: '#pricing' }
          ],
          glassBlur: true,
          sticky: true
        },
        hero: {
          enabled: true,
          badge: 'Temporada de Siembra 2026',
          kicker: 'Custodia del Territorio',
          title: 'Devolvemos la vida a las tierras olvidadas.',
          subtitle: 'No solo plantamos árboles: regeneramos el suelo con especies autóctonas (encinas, quejigos, acebuches) y cuidamos cada brote durante sus primeros 3 veranos críticos.',
          primaryCta: { text: 'Apadrinar mi Primer Árbol — 12 €', link: '#pricing' },
          secondaryCta: { text: 'Ver Jornadas de Voluntariado', link: '#gallery' },
          imageUrl: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=80',
          style: 'centered'
        },
        stats: {
          enabled: true,
          items: [
            { id: 's1', value: '+185.000', label: 'Árboles Plantados', description: 'Con seguimiento geolocalizado' },
            { id: 's2', value: '91%', label: 'Supervivencia', description: 'Gracias al riego de apoyo estival' },
            { id: 's3', value: '450 Ha', label: 'Suelo Recuperado', description: 'Antiguas zonas incendiadas' }
          ]
        },
        bentoFeatures: {
          enabled: true,
          title: 'Nuestro Método de Reforestación Sostenible',
          items: [
            {
              id: 'b1',
              title: 'Diversidad Autóctona 100%',
              description: 'Combinamos estratos arbóreos y arbustivos para crear un ecosistema resiliente contra plagas e incendios.',
              icon: 'Leaf',
              tag: 'Biodiversidad',
              colSpan: 2
            },
            {
              id: 'b2',
              title: 'Protector Forestal Biodegradable',
              description: 'Tubos protectores de fibra de cartón que se disuelven de forma natural sin dejar microplásticos.',
              icon: 'CheckCircle',
              tag: 'Cero Plástico',
              colSpan: 1
            }
          ]
        },
        gallery: {
          enabled: true,
          title: 'Jornadas de Siembra en Comunidad',
          items: [
            { id: 'g1', title: 'Familias plantando en la Sierra de Guadarrama', category: 'Voluntariado', imageUrl: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80' },
            { id: 'g2', title: 'Primeros brotes de encina con micorrizas', category: 'Naturaleza', imageUrl: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80' }
          ]
        },
        productHighlight: {
          enabled: true,
          title: 'Seguimiento por Satélite de tu Árbol',
          subtitle: 'Recibe las coordenadas GPS exactas y fotos del crecimiento cada año.',
          description: 'A través de nuestra plataforma de custodia forestal, puedes visitar tu árbol en persona o ver su evolución fotográfica.',
          imageUrl: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80',
          specs: [
            { label: 'Geolocalización', value: 'GPS Único', detail: 'Margen de error menor a 1 metro' },
            { label: 'Cuidado', value: '3 Años', detail: 'Riegos y desbroce perimetral asegurado' }
          ]
        },
        testimonials: {
          enabled: true,
          title: 'Historias de Socios',
          items: [
            {
              id: 't1',
              name: 'Carmen y Pablo',
              role: 'Voluntarios Activos',
              company: 'Madrid',
              quote: 'Ir con nuestros hijos un sábado a plantar encinas y volver al año siguiente para verlas crecer no tiene precio. Una labor ejemplar.',
              avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
              rating: 5
            }
          ]
        },
        pricing: {
          enabled: true,
          title: 'Planes de Apadrinamiento',
          billingCycle: 'annual',
          plans: [
            {
              id: 'plan_arbol',
              name: 'Apadrinar 1 Árbol Autóctono',
              priceMonthly: '12 € (pago único)',
              priceAnnual: '12 € (pago único)',
              description: 'Planta y cuida una encina, alcornoque o quejigo en un bosque protegido.',
              features: [
                'Planta de semilla autóctona certificada',
                'Protector forestal y tutor biodegradable',
                'Coordenadas GPS y certificado de plantación digital',
                '3 años de riegos de mantenimiento garantizados'
              ],
              ctaText: 'Plantar 1 Árbol — 12 €',
              ctaLink: '#plant-1',
              highlighted: false
            },
            {
              id: 'plan_bosquete',
              name: 'Crear un Pequeño Bosquete (10 Árboles)',
              tag: 'Más Popular',
              priceMonthly: '95 € (pago único)',
              priceAnnual: '95 € (pago único)',
              description: 'Crea una masa forestal diversa que absorbe más de 2 toneladas de CO2.',
              features: [
                '10 árboles y arbustos autóctonos de distintas especies',
                'Placa conmemorativa de madera en el bosque',
                'Pase familiar VIP a la jornada anual de plantación',
                'Informe anual de absorción de carbono',
                'Certificado fiscal para deducción en el IRPF'
              ],
              ctaText: 'Plantar Bosquete — 95 €',
              ctaLink: '#plant-10',
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
              question: '¿Puedo visitar el lugar exacto donde se plantó mi árbol?',
              answer: 'Sí. Todos nuestros proyectos se sitúan en montes públicos o fincas con acuerdos de custodia abiertos al disfrute ciudadano.'
            }
          ]
        },
        ctaFinal: {
          enabled: true,
          title: 'Siembra el futuro hoy mismo.',
          subtitle: 'El mejor momento para plantar un árbol fue hace 20 años. El segundo mejor momento es hoy.',
          primaryCta: { text: 'Plantar Mi Árbol', link: '#pricing' },
          backgroundStyle: 'glow'
        },
        footer: {
          copyright: '© 2026 Asociación Raíces Verdes.',
          legalLinks: [{ label: 'Memoria de Sostenibilidad', href: '#sustainability' }],
          socialLinks: [{ platform: 'Instagram', url: 'https://instagram.com' }]
        }
      }
    }
  },

  // 3. ESPERANZA ANIMAL — Rescate, Rehabilitación & Adopción Responsable
  {
    id: 'esperanza-animal',
    name: 'Esperanza Animal',
    tagline: 'Refugio y santuario animal dedicado al rescate de animales abandonados, atención veterinaria y adopciones responsables',
    category: 'community',
    style: 'creativo',
    thumbnail: 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=1200&q=80',
    description: 'Estética cálida y amigable en blanco, negro y acento ámbar #FFB800, tipografía Plus Jakarta Sans, fichas de animales en adopción con fotos e historias, formulario de acogida y apadrinamiento veterinario.',
    accentColor: '#FFB800',
    theme: 'dark',
    defaultConfig: {
      templateId: 'esperanza-animal',
      name: 'Refugio Esperanza Animal',
      slug: 'esperanza-animal',
      domain: 'esperanzaanimal.org',
      theme: 'dark',
      accentColor: '#FFB800',
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      borderRadius: 18,
      published: true,
      sectionOrder: [
        'navbar',
        'hero',
        'stats',
        'gallery',
        'bentoFeatures',
        'productHighlight',
        'testimonials',
        'pricing',
        'faq',
        'ctaFinal',
        'footer'
      ],
      seo: {
        title: 'Esperanza Animal — Adopción de Perros y Gatos Rescatados',
        description: 'Encuentra a tu compañero de cuatro patas o colabora con nuestro refugio.',
        keywords: 'adopcion perros, protectora animales, acoger gatos, refugio animal'
      },
      sections: {
        navbar: {
          brandName: 'ESPERANZA ANIMAL',
          logoText: 'ESPERANZA ANIMAL // REFUGIO',
          ctaText: 'Adoptar / Ayudar',
          ctaLink: '#pricing',
          links: [
            { label: 'En Adopción', href: '#gallery' },
            { label: 'Refugio', href: '#bentoFeatures' },
            { label: 'Historias', href: '#testimonials' },
            { label: 'Dona', href: '#pricing' }
          ],
          glassBlur: true,
          sticky: true
        },
        hero: {
          enabled: true,
          badge: 'Adopta, No Compres',
          kicker: 'Segundas Oportunidades',
          title: 'Una segunda oportunidad para quienes solo saben dar amor.',
          subtitle: 'Rescatamos, curamos y cuidamos a perros y gatos sin hogar hasta encontrar la familia definitiva que se merecen.',
          primaryCta: { text: 'Ver Animales en Adopción', link: '#gallery' },
          secondaryCta: { text: 'Hacerte Padrino desde 6€/mes', link: '#pricing' },
          imageUrl: 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=1200&q=80',
          style: 'centered'
        },
        stats: {
          enabled: true,
          items: [
            { id: 's1', value: '+1.400', label: 'Vidas Salvadas', description: 'Animales adoptados con éxito' },
            { id: 's2', value: '100%', label: 'Esterilizados y Vacunados', description: 'Protocolo veterinario completo' },
            { id: 's3', value: '0', label: 'Sacrificios', description: 'Política estricta de sacrificio cero' }
          ]
        },
        gallery: {
          enabled: true,
          title: 'Peludos Buscando Hogar Definitivo',
          items: [
            { id: 'g1', title: 'Bruno — Mestizo cariñoso de 2 años', category: 'Perros', imageUrl: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=800&q=80' },
            { id: 'g2', title: 'Mía — Gata tricolor ronroneadora', category: 'Gatos', imageUrl: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80' }
          ]
        },
        bentoFeatures: {
          enabled: true,
          title: 'Cómo Funciona Nuestro Proceso de Adopción',
          items: [
            {
              id: 'b1',
              title: '1. Cuestionario de Compatibilidad',
              description: 'Evaluamos tu estilo de vida, espacio y experiencia para recomendarte al compañero ideal.',
              icon: 'Heart',
              tag: 'Bienestar Animal',
              colSpan: 2
            },
            {
              id: 'b2',
              title: '2. Visita y Encuentro Previo',
              description: 'Conoce al animal en nuestro refugio o en su casa de acogida temporal.',
              icon: 'Smile',
              tag: 'Conexión',
              colSpan: 1
            }
          ]
        },
        productHighlight: {
          enabled: true,
          title: 'Hospital Veterinario Propio del Refugio',
          subtitle: 'Tratamos casos graves de atropellos, leishmaniosis y desnutrición.',
          description: 'Gracias a los donantes, contamos con quirófano y salas de cuarentena climatizadas para asegurar una pronta recuperación.',
          imageUrl: 'https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?auto=format&fit=crop&w=1200&q=80',
          specs: [
            { label: 'Atención', value: '24/7', detail: 'Con veterinarios residentes' }
          ]
        },
        testimonials: {
          enabled: true,
          title: 'Finales Felices',
          items: [
            {
              id: 't1',
              name: 'Andrea y Toby',
              role: 'Adoptantes',
              company: 'Valencia',
              quote: 'Adoptar a Toby en Esperanza Animal fue la mejor decisión que he tomado. El proceso fue transparente, cariñoso y hoy es el rey de la casa.',
              avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
              rating: 5
            }
          ]
        },
        pricing: {
          enabled: true,
          title: 'Colabora con el Refugio',
          billingCycle: 'annual',
          plans: [
            {
              id: 'padrino_feed',
              name: 'Padrino de Alimentación',
              priceMonthly: '8 € / mes',
              priceAnnual: '8 € / mes',
              description: 'Cubre el pienso de calidad de un perro o gato durante todo el mes.',
              features: [
                'Alimento nutritivo de gama alta',
                'Foto y carta personalizada de tu apadrinado',
                'Visitas especiales los fines de semana',
                'Certificado de deducción fiscal'
              ],
              ctaText: 'Ser Padrino — 8€/mes',
              ctaLink: '#sponsor-feed',
              highlighted: false
            },
            {
              id: 'padrino_vet',
              name: 'Padrino de Salud Veterinario',
              tag: 'Muy Necesario',
              priceMonthly: '18 € / mes',
              priceAnnual: '18 € / mes',
              description: 'Financia vacunas, desparasitaciones y medicación para animales en tratamiento.',
              features: [
                'Tratamientos veterinarios y cirugías urgentes',
                'Informe médico del progreso del animal',
                'Acceso al grupo privado de padrinos del refugio',
                'Desgravación fiscal en la renta'
              ],
              ctaText: 'Ser Padrino Médico — 18€/mes',
              ctaLink: '#sponsor-vet',
              highlighted: true
            }
          ]
        },
        faq: {
          enabled: true,
          title: 'Dudas sobre Adopciones',
          items: [
            {
              id: 'f1',
              question: '¿Qué cuota de adopción se solicita y qué cubre?',
              answer: 'Solicitamos una cuota solidaria de 150€ para perros y 100€ para gatos que cubre solo una fracción del coste real: microchip oficial, pasaporte europeo, vacunas completas, test de enfermedades y esterilización.'
            }
          ]
        },
        ctaFinal: {
          enabled: true,
          title: 'Cambia una vida. Abre tu corazón.',
          subtitle: 'Hay cientos de miradas esperando un hogar lleno de cariño.',
          primaryCta: { text: 'Ver Lista de Animales', link: '#gallery' },
          backgroundStyle: 'glow'
        },
        footer: {
          copyright: '© 2026 Refugio Esperanza Animal. Asociación sin ánimo de lucro.',
          legalLinks: [{ label: 'Estatutos y Cuentas Claras', href: '#accounts' }],
          socialLinks: [{ platform: 'Instagram', url: 'https://instagram.com' }]
        }
      }
    }
  },

  // 4. MANOS QUE EDUCAN — Becas y Tecnología en Escuelas Rurales
  {
    id: 'manos-educan',
    name: 'Manos Que Educan',
    tagline: 'ONG educativa dedicada a equipar aulas con ordenadores, bibliotecas y becas escolares en comunidades desfavorecidas',
    category: 'community',
    style: 'corporativo',
    thumbnail: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80',
    description: 'Estética educativa limpia en azul marino y naranja brillante #FF6B00, tipografía Inter, contador de niños becados, proyectos de aulas digitales y voluntariado formativo.',
    accentColor: '#FF6B00',
    theme: 'dark',
    defaultConfig: {
      templateId: 'manos-educan',
      name: 'Manos Que Educan ONG',
      slug: 'manos-educan',
      domain: 'manosqueeducan.org',
      theme: 'dark',
      accentColor: '#FF6B00',
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      borderRadius: 16,
      published: true,
      sectionOrder: [
        'navbar',
        'hero',
        'stats',
        'bentoFeatures',
        'gallery',
        'productHighlight',
        'testimonials',
        'pricing',
        'faq',
        'ctaFinal',
        'footer'
      ],
      seo: {
        title: 'Manos Que Educan — Becas Escolares y Aulas Digitales',
        description: 'Garantizamos el acceso a una educación de calidad y herramientas tecnológicas para niños sin recursos.',
        keywords: 'becas escolares, donar educacion, aulas digitales, voluntariado educacion'
      },
      sections: {
        navbar: {
          brandName: 'MANOS QUE EDUCAN',
          logoText: 'MANOS QUE EDUCAN // ONG',
          ctaText: 'Becar a un Niño',
          ctaLink: '#pricing',
          links: [
            { label: 'Aulas', href: '#bentoFeatures' },
            { label: 'Resultados', href: '#stats' },
            { label: 'Escuelas', href: '#gallery' },
            { label: 'Becas', href: '#pricing' }
          ],
          glassBlur: true,
          sticky: true
        },
        hero: {
          enabled: true,
          badge: 'Campaña Curso 2026',
          kicker: 'Educación y Tecnología para Todos',
          title: 'El conocimiento es la herramienta más poderosa para romper el ciclo de la pobreza.',
          subtitle: 'Dotamos a escuelas rurales de ordenadores reacondicionados, conexión a internet y becas completas de libros y comedor.',
          primaryCta: { text: 'Becar Material Escolar — 15 €/mes', link: '#pricing' },
          secondaryCta: { text: 'Conocer Nuestras Escuelas', link: '#gallery' },
          imageUrl: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80',
          style: 'centered'
        },
        stats: {
          enabled: true,
          items: [
            { id: 's1', value: '3.850', label: 'Niños Becados', description: 'Con matrícula y material garantizado' },
            { id: 's2', value: '42', label: 'Aulas Digitales Creadas', description: 'Equipadas con ordenadores solares' },
            { id: 's3', value: '98%', label: 'Graduados', description: 'Tasa de finalización de primaria' }
          ]
        },
        bentoFeatures: {
          enabled: true,
          title: 'Pilares de Nuestros Programas Educativos',
          items: [
            {
              id: 'b1',
              title: 'Aulas Digitales con Energía Solar',
              description: 'Instalamos placas solares e internet satelital en escuelas remotas para garantizar el acceso al mundo digital.',
              icon: 'Laptop',
              tag: 'Brecha Digital',
              colSpan: 2
            },
            {
              id: 'b2',
              title: 'Comedores Escolares Saludables',
              description: 'Garantizamos un almuerzo caliente y nutritivo que combate el absentismo escolar.',
              icon: 'Coffee',
              tag: 'Nutrición',
              colSpan: 1
            }
          ]
        },
        gallery: {
          enabled: true,
          title: 'Aulas y Alumnos en Acción',
          items: [
            { id: 'g1', title: 'Nueva aula de informática en comunidad andina', category: 'Tecnología', imageUrl: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80' },
            { id: 'g2', title: 'Taller de lectura y biblioteca comunitaria', category: 'Lectura', imageUrl: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80' }
          ]
        },
        productHighlight: {
          enabled: true,
          title: 'Kit Escolar Completo para 1 Año',
          subtitle: 'Mochila, cuadernos, libros de texto, calculadora y uniforme.',
          description: 'Eliminamos cualquier barrera económica que impida a los padres enviar a sus hijos a clase.',
          imageUrl: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1200&q=80',
          specs: [
            { label: 'Coste', value: '45 € / Año', detail: 'Por alumno cubierto al 100%' }
          ]
        },
        testimonials: {
          enabled: true,
          title: 'Voz de los Maestros',
          items: [
            {
              id: 't1',
              name: 'Prof. Samuel Morales',
              role: 'Director de Escuela',
              company: 'Cajamarca',
              quote: 'Tener ordenadores e internet cambió la mirada de nuestros niños. Ahora investigan, programan y sueñan con ir a la universidad.',
              avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
              rating: 5
            }
          ]
        },
        pricing: {
          enabled: true,
          title: 'Opciones de Beca',
          billingCycle: 'annual',
          plans: [
            {
              id: 'beca_libros',
              name: 'Beca de Material y Libros',
              priceMonthly: '15 € / mes',
              priceAnnual: '15 € / mes',
              description: 'Cubre todo el material escolar, libros y uniforme de un estudiante.',
              features: [
                'Mochila y lote completo de libros de texto',
                'Seguimiento de las notas trimestrales del alumno',
                'Carta de agradecimiento escrita a mano por el estudiante',
                'Certificado de desgravación fiscal del 80%'
              ],
              ctaText: 'Becar por 15€/mes',
              ctaLink: '#scholarship-15',
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
              question: '¿Puedo enviar cartas o mensajes al alumno becado?',
              answer: 'Sí. Fomentamos el intercambio epistolar para que el estudiante sienta el apoyo de su padrino.'
            }
          ]
        },
        ctaFinal: {
          enabled: true,
          title: 'Invierte en el futuro de un niño hoy.',
          subtitle: 'Tu donación mensual transforma una vida para siempre.',
          primaryCta: { text: 'Crear Mi Beca Educativa', link: '#pricing' },
          backgroundStyle: 'glow'
        },
        footer: {
          copyright: '© 2026 Manos Que Educan Fundación.',
          legalLinks: [{ label: 'Transparencia y Cuentas', href: '#transparency' }],
          socialLinks: [{ platform: 'Instagram', url: 'https://instagram.com' }]
        }
      }
    }
  },

  // 5. RED SOLIDARIA — Comedores Sociales & Inclusión Comunitaria
  {
    id: 'red-solidaria',
    name: 'Red Solidaria',
    tagline: 'Red comunitaria de bancos de alimentos, comedores sociales dignos y asesoramiento sociolaboral para familias en riesgo',
    category: 'community',
    style: 'corporativo',
    thumbnail: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80',
    description: 'Estética cálida y solidaria en blanco y magenta #FF00E5, tipografía Inter, contador de comidas servidas al día, mapa de centros de acogida y pasarela de donaciones mensuales.',
    accentColor: '#FF00E5',
    theme: 'dark',
    defaultConfig: {
      templateId: 'red-solidaria',
      name: 'Red Solidaria Comunitaria',
      slug: 'red-solidaria',
      domain: 'redsolidaria.org',
      theme: 'dark',
      accentColor: '#FF00E5',
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      borderRadius: 16,
      published: true,
      sectionOrder: [
        'navbar',
        'hero',
        'stats',
        'bentoFeatures',
        'gallery',
        'testimonials',
        'pricing',
        'faq',
        'ctaFinal',
        'footer'
      ],
      seo: {
        title: 'Red Solidaria — Comedores Sociales y Banco de Alimentos',
        description: 'Ofrecemos alimentos diarios, duchas comunitarias y apoyo en la inserción laboral.',
        keywords: 'banco de alimentos, donar comida, comedor social, voluntariado social'
      },
      sections: {
        navbar: {
          brandName: 'RED SOLIDARIA',
          logoText: 'RED SOLIDARIA // SOCIAL',
          ctaText: 'Donar Comida',
          ctaLink: '#pricing',
          links: [
            { label: 'Comedores', href: '#bentoFeatures' },
            { label: 'Impacto', href: '#stats' },
            { label: 'Colaborar', href: '#pricing' }
          ],
          glassBlur: true,
          sticky: true
        },
        hero: {
          enabled: true,
          badge: 'Nadie Sin Plato de Comida',
          kicker: 'Acción Comunitaria Urgente',
          title: 'Dignidad, alimento caliente y esperanza cada día.',
          subtitle: 'Servimos más de 1.200 comidas diarias preparadas con ingredientes frescos y acompañamos a las personas en su camino hacia la reinserción social y laboral.',
          primaryCta: { text: 'Financiar 10 Menús — 20 €', link: '#pricing' },
          secondaryCta: { text: 'Hacerte Voluntario', link: '#bentoFeatures' },
          imageUrl: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80',
          style: 'centered'
        },
        stats: {
          enabled: true,
          items: [
            { id: 's1', value: '1.200', label: 'Menús Diarios', description: 'Elaborados por cocineros profesionales' },
            { id: 's2', value: '450 Tn', label: 'Alimentos Rescatados', description: 'De mermas de supermercados y huertas' },
            { id: 's3', value: '380', label: 'Personas Empleadas', description: 'Insertadas laboralmente este año' }
          ]
        },
        bentoFeatures: {
          enabled: true,
          title: 'Ecosistema de Ayuda Integral',
          items: [
            {
              id: 'b1',
              title: 'Comedores Sociales con Formato Restaurante',
              description: 'Servicio en mesa con respeto y calidez para preservar la dignidad de cada usuario.',
              icon: 'Coffee',
              tag: 'Dignidad',
              colSpan: 2
            },
            {
              id: 'b2',
              title: 'Talleres de Orientación y Búsqueda de Empleo',
              description: 'Clases de informática, elaboración de CV y preparación de entrevistas.',
              icon: 'Users',
              tag: 'Inserción',
              colSpan: 1
            }
          ]
        },
        gallery: {
          enabled: true,
          title: 'Nuestra Cocina Solidaria',
          items: [
            { id: 'g1', title: 'Preparación de menús equilibrados', category: 'Cocina', imageUrl: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80' }
          ]
        },
        testimonials: {
          enabled: true,
          title: 'Historias de Superación',
          items: [
            {
              id: 't1',
              name: 'Manuel García',
              role: 'Usuario y hoy Voluntario',
              company: 'Madrid',
              quote: 'Cuando perdí mi trabajo me encontré solo y desorientado. En Red Solidaria no solo encontré un plato caliente, encontré una familia que creyó en mí y me ayudó a salir adelante.',
              avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
              rating: 5
            }
          ]
        },
        pricing: {
          enabled: true,
          title: 'Donaciones y Menús Solidarios',
          billingCycle: 'annual',
          plans: [
            {
              id: 'pack_menus',
              name: 'Pack 10 Menús Calientes',
              priceMonthly: '20 €',
              priceAnnual: '20 €',
              description: 'Garantiza comida completa para una familia durante toda una semana.',
              features: [
                'Primer plato, segundo, postre y pan fresco',
                'Elaborado con nutricionistas colegiados',
                'Desgravación fiscal inmediata del 80%'
              ],
              ctaText: 'Donar 20€',
              ctaLink: '#donate-20',
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
              question: '¿Puedo donar alimentos directamente?',
              answer: 'Sí, recogemos alimentos no perecederos y productos frescos de empresas en todos nuestros centros de lunes a sábado.'
            }
          ]
        },
        ctaFinal: {
          enabled: true,
          title: 'Ayuda a que nadie se quede atrás.',
          subtitle: 'Un pequeño gesto tuyo es un plato caliente para quien más lo necesita.',
          primaryCta: { text: 'Donar Ahora', link: '#pricing' },
          backgroundStyle: 'glow'
        },
        footer: {
          copyright: '© 2026 Red Solidaria Comunitaria.',
          legalLinks: [{ label: 'Auditoría Anual', href: '#audit' }],
          socialLinks: [{ platform: 'Instagram', url: 'https://instagram.com' }]
        }
      }
    }
  }
];
