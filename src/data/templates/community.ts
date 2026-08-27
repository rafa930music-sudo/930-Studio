import { TemplateDefinition } from '../../types';

export const COMMUNITY_TEMPLATES: TemplateDefinition[] = [
  // 1. OCÉANOS VIVOS — Conservación Marina & Restauración de Arrecifes
  {
    id: 'oceanos-vivos',
    name: 'Fundación Océanos Vivos',
    tagline: 'Conservación marina internacional, retirada de redes fantasma y regeneración de arrecifes de coral protegidos',
    category: 'community',
    thumbnail: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80',
    description: 'Estética oceánica en azul abisal #090E17 y cian bioluminiscente #00E5FF, tipografía Plus Jakarta Sans, contador de toneladas de plástico retiradas, mapas de expedición marina y aportaciones transparentes con deducción fiscal.',
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
        title: 'Fundación Océanos Vivos — Protección de Arrecifes y Mares Limpios',
        description: 'Apoya nuestras expediciones científicas marinas, la retirada de redes fantasma y la repoblación de corales.',
        keywords: 'conservacion marina, limpiar plasticos mar, proteger arrecifes de coral, voluntariado marino, donacion ong medio ambiente'
      },
      sections: {
        navbar: {
          brandName: 'Océanos Vivos',
          logoText: 'OCÉANOS VIVOS // ONG',
          ctaText: 'Hacer una Aportación',
          ctaLink: '#pricing',
          links: [
            { label: 'Misiones', href: '#features' },
            { label: 'El Arrecife Insignia', href: '#product' },
            { label: 'Impacto Real', href: '#stats' },
            { label: 'Socios & Cuotas', href: '#pricing' }
          ],
          glassBlur: true,
          sticky: true
        },
        hero: {
          enabled: true,
          badge: 'ONG Acreditada por la Fundación Lealtad • 100% Transparencia Financiera',
          kicker: 'Conservación Marina & Biodiversidad',
          title: 'Protegemos el latido azul de',
          highlightTitle: 'nuestros océanos.',
          subtitle: 'Trabajamos en primera línea retirando plásticos y redes fantasma del fondo marino, rehabilitando tortugas heridas y reforestando viveros de coral en el Mediterráneo y el Caribe.',
          primaryCta: { text: 'Unirme como Socio Defensor', link: '#pricing' },
          secondaryCta: { text: 'Conoce Nuestras Expediciones →', link: '#features' },
          imageUrl: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1600&q=80',
          style: 'centered'
        },
        logos: {
          enabled: true,
          title: 'ALIANZAS Y ACREDITACIONES CIENTÍFICAS INTERNACIONALES',
          items: [
            { id: 'l1', name: 'Fundación Lealtad', tagline: '100% Transparente' },
            { id: 'l2', name: 'IUCN Red List', tagline: 'Scientific Partner' },
            { id: 'l3', name: 'UN Ocean Decade', tagline: 'Official Action' }
          ]
        },
        bentoFeatures: {
          enabled: true,
          kicker: 'Misiones en Marcha',
          title: 'Acción directa en el agua respaldada por biólogos marinos.',
          subtitle: 'Cada euro donado se traduce en metros cuadrados de arrecife protegido y kilos de plástico retirados.',
          items: [
            {
              id: 'f1',
              title: 'Limpieza Submarina de Redes Fantasma',
              description: 'Buceadores técnicos recuperan aparejos de pesca perdidos que continúan atrapando fauna marina durante décadas en el fondo rocoso.',
              icon: 'Anchor',
              tag: 'Rescate Marino',
              colSpan: 2,
              statNumber: '145 Ton',
              statLabel: 'De redes y plásticos retirados del fondo marino este año'
            },
            {
              id: 'f2',
              title: 'Viveros de Coral y Microfragmentación',
              description: 'Cultivamos fragmentos de coral resistentes al calor en estructuras marinas y los reimplantamos en arrecifes degradados.',
              icon: 'Sparkles',
              tag: 'Regeneración Coralina',
              colSpan: 1
            },
            {
              id: 'f3',
              title: 'Hospital de Fauna Marina y Tortugas',
              description: 'Centro de rescate y recuperación veterinaria para tortugas atrapadas en plásticos antes de su devolución al mar.',
              icon: 'Heart',
              tag: 'Veterinaria Marina',
              colSpan: 1
            },
            {
              id: 'f4',
              title: 'Auditoría Pública y Cuentas Claras',
              description: 'El 88% de los fondos recibidos se destina directamente a misiones sobre el terreno, con auditoría anual disponible online.',
              icon: 'ShieldCheck',
              tag: '88% a Misión',
              colSpan: 2,
              statNumber: '88%',
              statLabel: 'De los fondos van directamente a la conservación en el mar'
            }
          ]
        },
        productHighlight: {
          enabled: true,
          badge: 'Misión Destacada 2026',
          kicker: 'Proyecto Posidonia',
          title: 'Santuario de Posidonia Oceánica en Baleares.',
          subtitle: 'Protegemos el pulmón del Mediterráneo y sumidero natural de carbono.',
          description: 'Instalamos boyas de fondeo ecológicas para evitar que las anclas de embarcaciones arrasen las praderas milenarias de posidonia, además de plantar 15.000 nuevos esquejes con la ayuda de voluntarios locales.',
          imageUrl: 'https://images.unsplash.com/photo-1682687220063-4742bd7fd538?auto=format&fit=crop&w=1400&q=80',
          specs: [
            { label: 'Superficie Protegida', value: '450 Hectáreas marinas delimitadas' },
            { label: 'Captura de Carbono', value: 'Hasta 15 veces más CO2 por m² que la selva amazónica' },
            { label: 'Estatus', value: 'Patrimonio de la Humanidad por la UNESCO' }
          ]
        },
        gallery: {
          enabled: true,
          title: 'Nuestras Expediciones en Imágenes',
          images: [
            { id: 'g1', url: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80', caption: 'Buceadores científicos monitorizando el crecimiento de corales' },
            { id: 'g2', url: 'https://images.unsplash.com/photo-1682687220063-4742bd7fd538?auto=format&fit=crop&w=800&q=80', caption: 'Liberación de tortuga boba recuperada en aguas abiertas' }
          ]
        },
        stats: {
          enabled: true,
          items: [
            { id: 's1', value: '145 Ton', label: 'Plásticos Retirados del Mar' },
            { id: 's2', value: '25.000', label: 'Corales Reimplantados' },
            { id: 's3', value: '88%', label: 'Fondos Directos a Conservación' }
          ]
        },
        testimonials: {
          enabled: true,
          title: 'Testimonios de socios y biólogos voluntarios.',
          items: [
            {
              id: 't1',
              author: 'Dra. Celia Fontcuberta',
              name: 'Dra. Celia Fontcuberta',
              role: 'Bióloga Marina & Directora Científica',
              company: 'Instituto de Ciencias del Mar',
              quote: 'Océanos Vivos demuestra que con rigor científico, pasión y transparencia total es posible revertir la degradación de nuestros ecosistemas marinos y devolver la vida al azul.',
              avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
              rating: 5
            }
          ]
        },
        pricing: {
          enabled: true,
          title: 'Formas de Colaboración y Apoyo',
          billingCycle: 'monthly',
          plans: [
            {
              id: 'p1',
              name: 'Socio Protector del Arrecife',
              priceMonthly: '15€/mes',
              priceAnnual: 'Solo 3€/mes tras desgravación fiscal del 80%',
              description: 'Permite retirar 5 kg de redes plásticas del fondo marino cada mes y plantar 2 nuevos corales.',
              features: ['Certificado digital oficial de socio protector', 'Boletín trimestral con informe de expediciones', 'Desgravación fiscal de hasta el 80% en tu IRPF', 'Invitación a jornadas de voluntariado de playa'],
              highlighted: false,
              ctaText: 'Hacerme Socio Protector'
            },
            {
              id: 'p2',
              name: 'Socio Guardián del Océano',
              priceMonthly: '30€/mes',
              priceAnnual: 'Solo 6€/mes tras desgravación fiscal',
              description: 'Financia una jornada mensual de barco de rescate y tratamiento veterinario de fauna marina herida.',
              features: ['Adopta y bautiza simbólicamente un arrecife de coral', 'Geolocalización satelital de tortugas liberadas', 'Deducción fiscal directa con certificado para Hacienda', 'Acceso a charlas online exclusivas con los biólogos en alta mar'],
              highlighted: true,
              ctaText: 'Ser Socio Guardián'
            }
          ]
        },
        faq: {
          enabled: true,
          title: 'Preguntas Frecuentes sobre Donaciones y la Fundación',
          items: [
            {
              id: 'q1',
              question: '¿Cómo funciona la desgravación fiscal de mi cuota de socio?',
              answer: 'Como ONG declarada de utilidad pública, los primeros 250€ donados al año desgravan el 80% en tu declaración de la renta (IRPF). Si donas 15€/mes (180€/año), Hacienda te devuelve 144€, por lo que tu aportación real neta es de solo 3€ al mes.'
            },
            {
              id: 'q2',
              question: '¿Dónde puedo ver en qué se gasta el dinero de las cuotas?',
              answer: 'Publicamos anualmente nuestra memoria de actividades y cuentas auditadas por una firma externa independiente en nuestra web oficial, desglosando cada gasto al céntimo.'
            },
            {
              id: 'q3',
              question: '¿Puedo colaborar como voluntario en las limpiezas de costa?',
              answer: 'Sí. Organizamos jornadas periódicas de limpieza de playas y concienciación en diferentes puntos de la costa donde toda persona interesada puede participar de forma gratuita.'
            },
            {
              id: 'q4',
              question: '¿Cómo puedo cancelar o modificar mi cuota si cambian mis circunstancias?',
              answer: 'Puedes pausar, reducir o cancelar tu aportación en cualquier momento y de forma inmediata enviando un correo a socios@oceanosvivos.org o llamando a nuestro teléfono gratuito.'
            },
            {
              id: 'q5',
              question: '¿Emiten el certificado de donaciones para la declaración de la renta?',
              answer: 'Sí. Cada mes de marzo enviamos automáticamente a tu correo el certificado fiscal y comunicamos los datos a la Agencia Tributaria para que aparezca ya aplicado en tu borrador.'
            },
            {
              id: 'q6',
              question: '¿Aceptan donaciones de empresas o colaboraciones corporativas?',
              answer: 'Contamos con programas específicos de Responsabilidad Social Corporativa (RSC) para empresas con deducciones del 40% al 50% en el Impuesto sobre Sociedades.'
            }
          ]
        },
        ctaFinal: {
          enabled: true,
          title: 'El mar nos necesita hoy, no mañana.',
          subtitle: 'Únete a más de 8.000 socios que protegen activamente la vida marina.',
          primaryCta: { text: 'Unirme a Océanos Vivos', link: '#pricing' }
        },
        footer: {
          copyright: '© 2026 Fundación Océanos Vivos. ONG de Utilidad Pública.',
          legalLinks: [
            { label: 'Cuentas Auditadas', href: '#cuentas' },
            { label: 'Estatutos Oficiales', href: '#estatutos' },
            { label: 'Privacidad', href: '#privacy' }
          ],
          socialLinks: [
            { platform: 'Instagram', url: 'https://instagram.com' },
            { platform: 'Twitter', url: 'https://twitter.com' }
          ]
        }
      }
    }
  },

  // 2. REFUGIO HUELLAS — Santuario & Adopción Responsable
  {
    id: 'refugio-huellas',
    name: 'Santuario Animal Huellas',
    tagline: 'Santuario de rescate, atención veterinaria integral y adopción responsable de perros y gatos abandonados',
    category: 'community',
    thumbnail: 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=1200&q=80',
    description: 'Estética en tonos tierra cálidos y naranja suave #F97316, tipografía Nunito & Plus Jakarta Sans, fichas de animales en adopción con historia real, formulario de preadopción y apadrinamiento mensual.',
    accentColor: '#F97316',
    theme: 'light',
    defaultConfig: {
      templateId: 'refugio-huellas',
      name: 'Santuario Animal Huellas',
      slug: 'santuario-huellas',
      domain: 'santuariohuellas.org',
      theme: 'light',
      accentColor: '#F97316',
      fontFamily: "'Nunito', sans-serif",
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
        title: 'Santuario Huellas — Rescate Animal & Adopción Responsable',
        description: 'Dales una segunda oportunidad. Conoce a los perros y gatos que esperan un hogar lleno de amor.',
        keywords: 'adopcion perros, adoptar gato, refugio animales, santuario animal, voluntariado protectora, apadrinar perro'
      },
      sections: {
        navbar: {
          brandName: 'Huellas',
          logoText: 'SANTUARIO // HUELLAS',
          ctaText: 'Adoptar un Amigo',
          ctaLink: '#pricing',
          links: [
            { label: 'Animales en Adopción', href: '#gallery' },
            { label: 'Nuestra Labor', href: '#features' },
            { label: 'Caso de Rescate', href: '#product' },
            { label: 'Apadrinar', href: '#pricing' }
          ],
          glassBlur: true,
          sticky: true
        },
        hero: {
          enabled: true,
          badge: 'Sacrificio Cero Garantizado • Más de 800 Rescates Exitosos',
          kicker: 'Amor, Rescate & Segundas Oportunidades',
          title: 'Cada vida rescatada es una historia',
          highlightTitle: 'que merece un final feliz.',
          subtitle: 'Acogemos, rehabilitamos física y emocionalmente a animales abandonados o maltratados, y encontramos familias definitivas y comprometidas para cada uno de ellos.',
          primaryCta: { text: 'Conoce a Nuestros Animales', link: '#gallery' },
          secondaryCta: { text: 'Apadrinar por 10€/mes →', link: '#pricing' },
          imageUrl: 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=1600&q=80',
          style: 'centered'
        },
        logos: {
          enabled: true,
          title: 'ASOCIACIONES VETERINARIAS Y PROTECTORAS COLABORADORAS',
          items: [
            { id: 'l1', name: 'Federación Animalia', tagline: 'Santuario Certificado' },
            { id: 'l2', name: 'Clínica VetSur', tagline: 'Atención 24h' },
            { id: 'l3', name: 'Red Adopta Responsable', tagline: 'Cero Sacrificio' }
          ]
        },
        bentoFeatures: {
          enabled: true,
          kicker: 'Nuestros Pilares de Cuidado',
          title: 'Un hogar de paso donde sanar cuerpo y corazón.',
          subtitle: 'No usamos jaulas frías: viven en patios ajardinados adaptados por grupos de afinidad.',
          items: [
            {
              id: 'f1',
              title: 'Atención Veterinaria Completa & Cirugías',
              description: 'Todos los animales se entregan con microchip oficial, pasaporte, vacunación al día, desparasitación y esterilizados.',
              icon: 'ShieldCheck',
              tag: '100% Salud',
              colSpan: 2,
              statNumber: '100%',
              statLabel: 'De animales entregados con chip, vacunas y esterilización'
            },
            {
              id: 'f2',
              title: 'Educadores Caninos en Positivo',
              description: 'Equipo de etólogos que rehabilitan traumas de miedo o reactividad mediante refuerzo positivo respetuoso.',
              icon: 'Smile',
              tag: 'Etología Positiva',
              colSpan: 1
            },
            {
              id: 'f3',
              title: 'Patios Libres de Esparcimiento de 5.000 m²',
              description: 'Zonas verdes con piscina canina para el verano donde socializan y juegan diariamente en libertad.',
              icon: 'Sun',
              tag: '5.000 m² Verdes',
              colSpan: 1
            },
            {
              id: 'f4',
              title: 'Seguimiento y Asesoramiento Posadopción',
              description: 'Acompañamos a la familia durante todo el proceso de adaptación en casa con consultas etológicas gratuitas.',
              icon: 'HeartHandshake',
              tag: 'Apoyo Continuo',
              colSpan: 2,
              statNumber: '99%',
              statLabel: 'De adopciones exitosas sin devoluciones gracias al protocolo'
            }
          ]
        },
        productHighlight: {
          enabled: true,
          badge: 'Historia de Superación',
          kicker: 'El Rescate de Bruno',
          title: 'Bruno: De la soledad a una familia para siempre.',
          subtitle: 'Rescatado con fractura de pata y desnutrición severa, hoy corre feliz.',
          description: 'Tras 4 meses de cirugías traumatológicas y rehabilitación en el santuario, Bruno recuperó la confianza en las personas y fue adoptado por una familia con jardín y dos niños que son sus compañeros inseparables de juegos.',
          imageUrl: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=1400&q=80',
          specs: [
            { label: 'Tiempo en Refugio', value: '4 meses de cuidados intensivos' },
            { label: 'Estado Actual', value: 'Adoptado y completamente recuperado' },
            { label: 'Mensaje', value: 'Adoptar salva dos vidas: la del animal que acoges y la del que entra en su lugar' }
          ]
        },
        gallery: {
          enabled: true,
          title: 'Amigos que Buscan una Familia',
          images: [
            { id: 'g1', url: 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=800&q=80', caption: 'Luna: Mestiza de 2 años, cariñosa y tranquila, perfecta para piso' },
            { id: 'g2', url: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=80', caption: 'Milo: Cachorrón juguetón rescatado en el campo, sociable con otros perros' }
          ]
        },
        stats: {
          enabled: true,
          items: [
            { id: 's1', value: '820+', label: 'Animales Rescatados y Adoptados' },
            { id: 's2', value: '0', label: 'Sacrificios (Sacrificio Cero)' },
            { id: 's3', value: '100%', label: 'Entregados Esterilizados' }
          ]
        },
        testimonials: {
          enabled: true,
          title: 'Historias de familias adoptantes.',
          items: [
            {
              id: 't1',
              author: 'Familia Gómez-Navarro',
              name: 'Familia Gómez-Navarro',
              role: 'Adoptantes de Max',
              company: 'Familia Huellas',
              quote: 'Adoptar a Max en el Santuario Huellas fue la mejor decisión familiar que hemos tomado. Nos asesoraron con una honestidad y cariño infinitos para encontrar al compañero ideal.',
              avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
              rating: 5
            }
          ]
        },
        pricing: {
          enabled: true,
          title: 'Formas de Ayudar al Santuario',
          billingCycle: 'monthly',
          plans: [
            {
              id: 'p1',
              name: 'Padrino / Madrina de un Peludo',
              priceMonthly: '10€/mes',
              priceAnnual: 'Desgravable en IRPF',
              description: 'Cubre la alimentación especial, juguetes y chequeos veterinarios mensuales de un perro o gato del refugio.',
              features: ['Fotografías y cartas mensuales de tu ahijado', 'Visitas programadas para pasearlo los fines de semana', 'Mención en la placa de padrinos del santuario', 'Certificado oficial de donación para Hacienda'],
              highlighted: false,
              ctaText: 'Apadrinar un Animal'
            },
            {
              id: 'p2',
              name: 'Socio de Rescate Médico y Cirugías',
              priceMonthly: '25€/mes',
              priceAnnual: 'Salva vidas en emergencias',
              description: 'Permite financiar intervenciones quirúrgicas urgentes, medicación crónica y pruebas diagnósticas complejas.',
              features: ['Financiación de cirugías traumatológicas de urgencia', 'Informe trimestral de altas médicas y rescates', 'Invitación a la Fiesta Anual de Adoptantes Huellas', 'Deducción fiscal directa del 80% en tu IRPF'],
              highlighted: true,
              ctaText: 'Hacerme Socio Médico'
            }
          ]
        },
        faq: {
          enabled: true,
          title: 'Preguntas Frecuentes sobre el Proceso de Adopción',
          items: [
            {
              id: 'q1',
              question: '¿Cuáles son los requisitos para adoptar un perro o gato?',
              answer: 'Completar un breve cuestionario de preadopción, una entrevista personal o videollamada para conocer tu estilo de vida y vivienda, y firmar el contrato de adopción responsable.'
            },
            {
              id: 'q2',
              question: '¿Por qué se pide una tasa de adopción y qué cubre?',
              answer: 'La tasa de adopción (140€ perros / 90€ gatos) es una contribución solidaria que cubre solo una parte de los costes veterinarios reales: chip, vacunas, desparasitación, analíticas y esterilización completa.'
            },
            {
              id: 'q3',
              question: '¿Puedo visitar el santuario antes de decidirme?',
              answer: 'Sí. Abrimos nuestras puertas los sábados y domingos por la mañana con cita previa para que puedas conocer a los animales en persona en nuestros patios de juego.'
            },
            {
              id: 'q4',
              question: '¿Qué ocurre si el animal no se adapta a mi hogar o a otras mascotas?',
              answer: 'Nuestro equipo de etólogos realiza un seguimiento estrecho para resolver cualquier problema de conducta. Si por motivos justificados no fuera posible la convivencia, el animal siempre puede regresar al santuario sin reproches.'
            },
            {
              id: 'q5',
              question: '¿Puedo ser casa de acogida temporal si no puedo adoptar para siempre?',
              answer: 'Sí. Las casas de acogida son vitales para cachorros lactantes, animales convalecientes de cirugías o ancianos. El santuario cubre el 100% de los gastos de comida y veterinario.'
            },
            {
              id: 'q6',
              question: '¿Cómo puedo desgravar mi cuota mensual en la declaración de la renta?',
              answer: 'Como asociación sin ánimo de lucro registrada, el 80% de tus aportaciones anuales hasta 250€ se deduce directamente de tu IRPF en la declaración anual.'
            }
          ]
        },
        ctaFinal: {
          enabled: true,
          title: 'No puedes cambiar el mundo entero, pero sí el suyo.',
          subtitle: 'Adopta, apadrina o hazte socio de nuestro santuario.',
          primaryCta: { text: 'Iniciar Solicitud de Adopción', link: '#pricing' }
        },
        footer: {
          copyright: '© 2026 Santuario Animal Huellas. Asociación sin Ánimo de Lucro.',
          legalLinks: [
            { label: 'Contrato de Adopción', href: '#adopcion' },
            { label: 'Estatutos', href: '#estatutos' },
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

  // 3. SEMILLAS DE LA TIERRA — Agroecología & Reforestación
  {
    id: 'semillas-tierra',
    name: 'Semillas de la Tierra',
    tagline: 'Movimiento agroecológico, reforestación comunitaria de bosques autóctonos y recuperación de variedades agrícolas tradicionales',
    category: 'community',
    thumbnail: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=80',
    description: 'Estética en verde bosque profundo #10B981 y tierra arcillosa, tipografía Outfit, contador de árboles plantados en tiempo real, mapas de corredores biológicos y apadrinamiento de bosques.',
    accentColor: '#10B981',
    theme: 'dark',
    defaultConfig: {
      templateId: 'semillas-tierra',
      name: 'Asociación Semillas de la Tierra',
      slug: 'semillas-tierra',
      domain: 'semillasdelatierra.eco',
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
        'faq',
        'ctaFinal',
        'footer'
      ],
      seo: {
        title: 'Semillas de la Tierra — Reforestación Comunitaria & Agroecología',
        description: 'Plantamos bosques autóctonos y recuperamos semillas tradicionales para frenar la desertificación y devolver la vida al campo.',
        keywords: 'reforestacion bosques, arboles autoctonos, agroecologia, banco de semillas tradicionales, voluntariado medioambiental'
      },
      sections: {
        navbar: {
          brandName: 'Semillas',
          logoText: 'SEMILLAS // TIERRA',
          ctaText: 'Plantar un Bosque',
          ctaLink: '#pricing',
          links: [
            { label: 'Proyectos', href: '#features' },
            { label: 'Bosque Insignia', href: '#product' },
            { label: 'Impacto', href: '#stats' },
            { label: 'Apadrinar', href: '#pricing' }
          ],
          glassBlur: true,
          sticky: true
        },
        hero: {
          enabled: true,
          badge: 'Más de 120.000 Árboles Autóctonos Plantados con Supervivencia del 85%',
          kicker: 'Regeneración Ecológica & Biodiversidad',
          title: 'Plantamos los bosques que darán sombra',
          highlightTitle: 'a las generaciones del futuro.',
          subtitle: 'Restauramos suelos erosionados plantando encinas, robles y quejigos mediante bombas de semillas y plantaciones comunitarias con custodia del territorio a largo plazo.',
          primaryCta: { text: 'Apadrinar un Árbol (5€)', link: '#pricing' },
          secondaryCta: { text: 'Conoce Nuestros Bosques Vivos →', link: '#features' },
          imageUrl: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1600&q=80',
          style: 'centered'
        },
        logos: {
          enabled: true,
          title: 'REDES DE CUSTODIA DEL TERRITORIO Y ALIANZAS AMBIENTALES',
          items: [
            { id: 'l1', name: 'Custodia del Territorio', tagline: 'Miembro Oficial' },
            { id: 'l2', name: 'Sociedad Española de Ornitología', tagline: 'SEO BirdLife' },
            { id: 'l3', name: 'FSC Regenerative', tagline: 'Bosques Sostenibles' }
          ]
        },
        bentoFeatures: {
          enabled: true,
          kicker: 'Metodología Regenerativa',
          title: 'No solo plantamos árboles: regeneramos el suelo fértil y el agua.',
          subtitle: 'Seleccionamos especies autóctonas locales con protectores biodegradables y riego de apoyo estival.',
          items: [
            {
              id: 'f1',
              title: 'Supervivencia del 85% con Riego Estival de Apoyo',
              description: 'A diferencia de reforestaciones masivas que se abandonan, regamos y cuidamos cada ejemplar durante sus 3 primeros veranos críticos.',
              icon: 'Droplets',
              tag: '85% Supervivencia',
              colSpan: 2,
              statNumber: '85%',
              statLabel: 'De tasa de supervivencia tras los primeros 3 años de vida del árbol'
            },
            {
              id: 'f2',
              title: 'Banco de Semillas Tradicionales y Variedades Antiguas',
              description: 'Conservamos más de 300 variedades de hortalizas y frutales autóctonos adaptados al estrés hídrico sin fertilizantes químicos.',
              icon: 'Sprout',
              tag: '300+ Semillas',
              colSpan: 1
            },
            {
              id: 'f3',
              title: 'Creación de Corredores Biológicos para Fauna',
              description: 'Conectamos espacios naturales fragmentados para permitir el paso seguro de polinizadores, aves y pequeños mamíferos.',
              icon: 'TreePine',
              tag: 'Corredores Vivos',
              colSpan: 1
            },
            {
              id: 'f4',
              title: 'Participación Ciudadana y Educación Ambiental',
              description: 'Más de 4.000 escolares y familias han participado en nuestras jornadas de siembra y bombas de semillas nendo dango.',
              icon: 'Users',
              tag: 'Comunidad Viva',
              colSpan: 2,
              statNumber: '4.000+',
              statLabel: 'Voluntarios y familias que han plantado con sus propias manos'
            }
          ]
        },
        productHighlight: {
          enabled: true,
          badge: 'Proyecto Emblemático',
          kicker: 'Bosque de Niebla del Valle',
          title: 'Regeneración de 80 Hectáreas de Dehesa Mediterránea.',
          subtitle: 'Plantación de 25.000 encinas, quejigos y alcornoques en suelo degradado.',
          description: 'Un proyecto a 10 años que frena la desertificación en una ladera erosionada por el sobrepastoreo. Incluye charcas para anfibios, cajas nido para lechuzas y acuerdos de custodia vinculantes con los propietarios rurales durante 50 años.',
          imageUrl: 'https://images.unsplash.com/photo-1511497584788-87676104235f?auto=format&fit=crop&w=1400&q=80',
          specs: [
            { label: 'Superficie', value: '80 Hectáreas en la Sierra Morena' },
            { label: 'Especies', value: 'Quercus ilex, Quercus faginea, Pistacia lentiscus, Arbutus unedo' },
            { label: 'Captura CO2', value: 'Estimada en 1.800 toneladas durante el ciclo de crecimiento' }
          ]
        },
        gallery: {
          enabled: true,
          title: 'Voluntariado y Bosques Plantados',
          images: [
            { id: 'g1', url: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80', caption: 'Jornada comunitaria de siembra de bellotas con familias' },
            { id: 'g2', url: 'https://images.unsplash.com/photo-1511497584788-87676104235f?auto=format&fit=crop&w=800&q=80', caption: 'Brote joven de encina con protector vegetal biodegradable' }
          ]
        },
        stats: {
          enabled: true,
          items: [
            { id: 's1', value: '120.000+', label: 'Árboles Plantados y Cuidados' },
            { id: 's2', value: '85%', label: 'Supervivencia Comprobada' },
            { id: 's3', value: '300+', label: 'Variedades de Semillas Protegidas' }
          ]
        },
        testimonials: {
          enabled: true,
          title: 'Lo que opinan agricultores y voluntarios.',
          items: [
            {
              id: 't1',
              author: 'Andrés Barroso',
              name: 'Andrés Barroso',
              role: 'Agricultor Agroecológico y Socio',
              company: 'Red Agroecológica',
              quote: 'Semillas de la Tierra ha devuelto la vida y la fertilidad a campos que se consideraban perdidos por la sequía. Su conocimiento de las semillas tradicionales y el trabajo en comunidad es un tesoro para el mundo rural.',
              avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
              rating: 5
            }
          ]
        },
        pricing: {
          enabled: true,
          title: 'Planes de Apadrinamiento de Bosques',
          billingCycle: 'monthly',
          plans: [
            {
              id: 'p1',
              name: 'Guardián del Bosque Joven',
              priceMonthly: '10€/mes',
              priceAnnual: 'Solo 2€/mes tras deducción de IRPF',
              description: 'Financia la plantación y 3 años de riego estival de 2 árboles autóctonos cada mes.',
              features: ['Certificado de apadrinamiento con coordenadas GPS del árbol', 'Acceso al visor satelital para ver crecer tu bosque', 'Deducción fiscal del 80% en tu declaración de la renta', 'Participación gratuita en las jornadas de siembra de otoño'],
              highlighted: false,
              ctaText: 'Apadrinar 2 Árboles'
            },
            {
              id: 'p2',
              name: 'Protector de Bosque y Suelo Vivo',
              priceMonthly: '25€/mes',
              priceAnnual: 'El mayor impacto ecológico directo',
              description: 'Permite reforestar 50 m² de bosque mediterráneo, crear charcas para fauna y conservar semillas.',
              features: ['Planta 5 árboles al mes con protectores biodegradables', 'Financia la conservación de variedades de semillas antiguas', 'Informe fotográfico semestral de la evolución de la parcela', 'Certificado oficial de compensación de huella de carbono'],
              highlighted: true,
              ctaText: 'Proteger 50 m² de Bosque'
            }
          ]
        },
        faq: {
          enabled: true,
          title: 'Preguntas Frecuentes sobre las Reforestaciones',
          items: [
            {
              id: 'q1',
              question: '¿Por qué la tasa de supervivencia de sus árboles es del 85%?',
              answer: 'Porque plantamos exclusivamente especies autóctonas adaptadas al suelo y clima local, protegemos los brotes con tubos biodegradables contra herbívoros y realizamos riegos de apoyo durante los meses más secos del verano.'
            },
            {
              id: 'q2',
              question: '¿Puedo visitar los árboles que he apadrinado?',
              answer: 'Sí. Todos los árboles y parcelas cuentan con coordenadas GPS públicas y organizamos visitas guiadas mensuales para que los padrinos y socias puedan comprobar su crecimiento sobre el terreno.'
            },
            {
              id: 'q3',
              question: '¿En qué terrenos se realizan las plantaciones?',
              answer: 'Trabajamos en montes públicos comunales mediante convenios con ayuntamientos rurales y en fincas privadas mediante contratos de Custodia del Territorio de 50 años que blindan los árboles ante talas.'
            },
            {
              id: 'q4',
              question: '¿Las donaciones son deducibles en el IRPF o Impuesto de Sociedades?',
              answer: 'Sí. Las donaciones particulares tienen una desgravación del 80% en los primeros 250€ anuales, y las aportaciones de empresas desgravan hasta el 50% en el Impuesto de Sociedades.'
            },
            {
              id: 'q5',
              question: '¿Cómo se garantiza que el bosque no arda en incendios forestales?',
              answer: 'Diseñamos mosaicos agroforestales discontinuos con fajas cortafuegos desbrozadas, pastoreo rotacional preventivo con ganado local y fomento de especies pirófilas resistentes como el alcornoque.'
            },
            {
              id: 'q6',
              question: '¿Cómo puedo conseguir semillas del banco tradicional para mi huerto?',
              answer: 'Los socios del banco de semillas pueden solicitar anualmente hasta 6 lotes de semillas tradicionales para reproducirlas en sus huertos con el compromiso de devolver parte de las semillas cosechadas.'
            }
          ]
        },
        ctaFinal: {
          enabled: true,
          title: 'Siembra vida hoy para cosechar futuro.',
          subtitle: 'Apadrina tu árbol o únete a nuestras jornadas de plantación comunitaria.',
          primaryCta: { text: 'Plantar con Semillas de la Tierra', link: '#pricing' }
        },
        footer: {
          copyright: '© 2026 Asociación Semillas de la Tierra. Custodia del Territorio.',
          legalLinks: [
            { label: 'Convenios de Custodia', href: '#custodia' },
            { label: 'Banco de Semillas', href: '#semillas' },
            { label: 'Privacidad', href: '#privacy' }
          ],
          socialLinks: [
            { platform: 'Instagram', url: 'https://instagram.com' },
            { platform: 'Twitter', url: 'https://twitter.com' }
          ]
        }
      }
    }
  }
];
