import { TemplateDefinition } from '../../types';

export const EDUCATION_TEMPLATES: TemplateDefinition[] = [
  // 1. VORTEX TECH ACADEMY — Bootcamps Tech & Sistemas
  {
    id: 'vortex-academy',
    name: 'Vortex Tech Academy',
    tagline: 'Bootcamp intensivo de desarrollo full-stack moderno, arquitectura en la nube y sistemas distribuidos con garantía de empleo',
    category: 'education',
    thumbnail: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
    description: 'Estética en azul índigo moderno #6366F1 y modo oscuro de alta legibilidad, tipografía Plus Jakarta Sans, empresas contratantes, bento de proyectos reales, métricas de inserción laboral y becas de talento.',
    accentColor: '#6366F1',
    theme: 'dark',
    defaultConfig: {
      templateId: 'vortex-academy',
      name: 'Vortex Tech Academy',
      slug: 'vortex-academy',
      domain: 'vortexacademy.dev',
      theme: 'dark',
      accentColor: '#6366F1',
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      borderRadius: 16,
      published: true,
      sectionOrder: [
        'navbar',
        'hero',
        'logos',
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
        title: 'Vortex Tech Academy — Bootcamp Full-Stack & Sistemas Cloud',
        description: 'Fórmate en 16 semanas con ingenieros sénior de empresas punteras. Proyectos reales en producción y 94% de colocación laboral.',
        keywords: 'bootcamp programacion, full stack developer, aprender react typescript python, cloud computing, garantia de empleo tech'
      },
      sections: {
        navbar: {
          brandName: 'Vortex',
          logoText: 'VORTEX // ACADEMY',
          ctaText: 'Solicitar Admisión',
          ctaLink: '#pricing',
          links: [
            { label: 'Metodología', href: '#features' },
            { label: 'Proyecto Final', href: '#product' },
            { label: 'Empleabilidad', href: '#stats' },
            { label: 'Matrícula & Becas', href: '#pricing' }
          ],
          glassBlur: true,
          sticky: true
        },
        hero: {
          enabled: true,
          badge: 'Convocatoria Octubre 2026 • 94% de Inserción Laboral Certificada',
          kicker: 'Educación Tecnológica de Alto Rendimiento',
          title: 'Aprende a programar.',
          highlightTitle: 'Construye sistemas reales.',
          subtitle: 'El bootcamp intensivo de 16 semanas diseñado por arquitectos de software para dominar TypeScript, Python, Kubernetes y bases de datos escalables con tutoría individual diaria.',
          primaryCta: { text: 'Solicitar Plaza en el Bootcamp', link: '#pricing' },
          secondaryCta: { text: 'Descargar Plan de Estudios (PDF) →', link: '#features' },
          imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80',
          style: 'centered'
        },
        logos: {
          enabled: true,
          title: 'EMPRESAS DONDE TRABAJAN NUESTROS GRADUADOS',
          items: [
            { id: 'l1', name: 'Cabify', tagline: 'Hiring Partner' },
            { id: 'l2', name: 'Glovo', tagline: 'Tech Hub' },
            { id: 'l3', name: 'Typeform', tagline: 'Engineering Team' }
          ]
        },
        bentoFeatures: {
          enabled: true,
          kicker: 'Metodología 100% Práctica',
          title: 'Aprende construyendo software en producción desde el día 1.',
          subtitle: 'Sin ejercicios de juguete: desarrollarás microservicios, bases de datos optimizadas y despliegues CI/CD.',
          items: [
            {
              id: 'f1',
              title: 'Tutorías Individuales Diarias (1 a 1)',
              description: 'Revisiones de código (Code Reviews) con ingenieros sénior que te enseñan buenas prácticas, testing y refactorización limpia.',
              icon: 'Code2',
              tag: 'Mentoría 1:1',
              colSpan: 2,
              statNumber: '1:6',
              statLabel: 'Ratio máximo de profesor por alumno para atención directa'
            },
            {
              id: 'f2',
              title: 'Stack Tecnológico Moderno y Demandado',
              description: 'React 19, TypeScript estricto, Node.js, Python, PostgreSQL, Docker y despliegues en contenedores Cloud.',
              icon: 'Terminal',
              tag: 'Stack Moderno',
              colSpan: 1
            },
            {
              id: 'f3',
              title: 'Entrenamientos para Entrevistas Técnicas',
              description: 'Simulacros de entrevistas con live-coding, algoritmos y diseño de sistemas distribuidos con recruiters tech.',
              icon: 'Award',
              tag: 'Career Services',
              colSpan: 1
            },
            {
              id: 'f4',
              title: 'Acuerdo de Ingresos Compartidos (ISA)',
              description: 'Paga tu formación solo cuando consigas un empleo en el sector tecnológico con un sueldo superior a 24.000€ brutos anuales.',
              icon: 'CheckCircle2',
              tag: 'Garantía Laboral',
              colSpan: 2,
              statNumber: '94%',
              statLabel: 'De graduados contratados en menos de 120 días'
            }
          ]
        },
        productHighlight: {
          enabled: true,
          badge: 'El Proyecto Capstone',
          kicker: 'Proyecto Final de Graduación',
          title: 'Construcción de una Plataforma SaaS Completa en Equipo.',
          subtitle: '4 semanas de desarrollo ágil con sprints semanales y Demo Day ante inversores y CTOs.',
          description: 'Los alumnos diseñan la arquitectura desde cero, implementan autenticación segura, procesamiento de pagos con Stripe, colas de mensajes en tiempo real y despliegue automatizado con pipelines de GitHub Actions.',
          imageUrl: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1400&q=80',
          specs: [
            { label: 'Metodología', value: 'Scrum real con sprints bisemanales y daily stand-ups' },
            { label: 'Presentación', value: 'Demo Day presencial y retransmitido ante más de 40 empresas tech' },
            { label: 'Portafolio', value: 'Código 100% público en GitHub con documentación técnica' }
          ]
        },
        stats: {
          enabled: true,
          items: [
            { id: 's1', value: '94%', label: 'Tasa de Empleabilidad a los 4 Meses' },
            { id: 's2', value: '32.500€', label: 'Salario Medio de Entrada' },
            { id: 's3', value: '450+', label: 'Desarrolladores Graduados' }
          ]
        },
        testimonials: {
          enabled: true,
          title: 'Historias de éxito de antiguos alumnos.',
          items: [
            {
              id: 't1',
              author: 'Elena Herranz',
              name: 'Elena Herranz',
              role: 'Full-Stack Software Engineer en Glovo',
              company: 'Glovo',
              quote: 'Venía del sector del marketing sin saber programar una sola línea de código. La exigencia y el nivel de los mentores en Vortex me permitieron pasar la prueba técnica de Glovo y conseguir mi primer trabajo en tech.',
              avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
              rating: 5
            }
          ]
        },
        pricing: {
          enabled: true,
          title: 'Modalidades de Matrícula y Financiación',
          billingCycle: 'monthly',
          plans: [
            {
              id: 'p1',
              name: 'Pago Único con Descuento Pronto Pago',
              priceMonthly: '5.900€',
              priceAnnual: 'Ahorro de 900€ sobre el precio regular',
              description: 'Matrícula completa del bootcamp intensivo de 16 semanas con todo el material y mentorías incluidas.',
              features: ['16 semanas de formación intensiva a jornada completa', 'Mentor personal asignado desde el día 1', 'Acceso de por vida a la comunidad de alumni', 'Garantía de devolución durante las primeras 2 semanas'],
              highlighted: false,
              ctaText: 'Solicitar con Pago Único'
            },
            {
              id: 'p2',
              name: 'Acuerdo de Ingresos Compartidos (ISA)',
              priceMonthly: '0€ Inicial',
              priceAnnual: 'Solo pagas cuando consigas empleo en tech',
              description: 'Estudia sin pagar matrícula por adelantado. Abonarás un 14% de tu salario bruto durante 24 meses solo si ganas más de 24k€.',
              features: ['0€ de cuota de entrada antes de graduarte', 'Sin intereses bancarios ni avales familiares', 'Soporte activo del equipo de Career Services', 'Cancelación automática si no encuentras trabajo'],
              highlighted: true,
              ctaText: 'Solicitar Beca ISA'
            }
          ]
        },
        faq: {
          enabled: true,
          title: 'Preguntas Frecuentes sobre el Bootcamp',
          items: [
            {
              id: 'q1',
              question: '¿Es necesario tener conocimientos previos de programación para entrar?',
              answer: 'No es imprescindible experiencia profesional, pero requerimos completar un curso preparatorio gratuito (Pre-work) de 40 horas en JavaScript y superar una breve prueba lógica de admisión.'
            },
            {
              id: 'q2',
              question: '¿Cuál es el horario y dedicación exigida durante las 16 semanas?',
              answer: 'El formato Full-Time requiere dedicación exclusiva de lunes a viernes de 09:00 a 18:00 (clases teóricas, ejercicios prácticos en parejas y tutorías individuales de código).'
            },
            {
              id: 'q3',
              question: '¿Cómo funciona exactamente el Acuerdo de Ingresos Compartidos (ISA)?',
              answer: 'No pagas nada durante el curso. Una vez graduado y tras conseguir un trabajo en el sector tecnológico con un sueldo bruto igual o superior a 24.000€/año, abonas un 14% de tu salario durante un máximo de 24 mensualidades.'
            },
            {
              id: 'q4',
              question: '¿Las clases son 100% en directo o grabadas?',
              answer: 'Todas las sesiones lectivas son en directo por videollamada con el profesor, combinando explicaciones conceptuales con sesiones de live-coding interactivo.'
            },
            {
              id: 'q5',
              question: '¿Qué titulación se obtiene al finalizar el programa?',
              answer: 'Se entrega el Diploma Oficial Vortex de Desarrollo Full-Stack y Arquitectura Cloud, avalado por nuestra red de empresas colaboradoras y con certificación de horas prácticas.'
            },
            {
              id: 'q6',
              question: '¿Cómo es el proceso de selección y admisión?',
              answer: '1) Solicitud online, 2) Entrevista personal de motivación de 20 min, 3) Realización del reto lógico/técnico, 4) Notificación de admisión en 48 horas.'
            }
          ]
        },
        ctaFinal: {
          enabled: true,
          title: 'Da el salto definitivo a tu carrera tecnológica.',
          subtitle: 'Las plazas están limitadas a 20 alumnos por convocatoria.',
          primaryCta: { text: 'Iniciar Proceso de Admisión', link: '#pricing' }
        },
        footer: {
          copyright: '© 2026 Vortex Tech Academy S.L. Todos los derechos reservados.',
          legalLinks: [
            { label: 'Términos de Admisión', href: '#admision' },
            { label: 'Condiciones del ISA', href: '#isa' },
            { label: 'Privacidad', href: '#privacy' }
          ],
          socialLinks: [
            { platform: 'GitHub', url: 'https://github.com' },
            { platform: 'LinkedIn', url: 'https://linkedin.com' }
          ]
        }
      }
    }
  },

  // 2. FUTURE SUMMIT 2026 — Congreso de Tecnología & Futuro
  {
    id: 'summit-conf',
    name: 'Future Summit 2026',
    tagline: 'El congreso internacional líder sobre el futuro de la tecnología, computación cuántica y sostenibilidad energética',
    category: 'education',
    thumbnail: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80',
    description: 'Estética futurista en negro carbón y cian eléctrico #06B6D4, tipografía Syne & Outfit, agenda detallada con ponentes de prestigio global, reserva de pases con descuento Early Bird y networking VIP.',
    accentColor: '#06B6D4',
    theme: 'dark',
    defaultConfig: {
      templateId: 'summit-conf',
      name: 'Future Summit 2026 Global Conference',
      slug: 'future-summit-2026',
      domain: 'futuresummit.org',
      theme: 'dark',
      accentColor: '#06B6D4',
      fontFamily: "'Syne', sans-serif",
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
        title: 'Future Summit 2026 — El Gran Congreso de Innovación y Tecnología',
        description: '3 días de ponencias magistrales, workshops prácticos y networking exclusivo con más de 3.000 líderes tecnológicos mundiales.',
        keywords: 'congreso tecnologia, future summit 2026, inteligencia artificial congreso, computacion cuantica, ponencias tech'
      },
      sections: {
        navbar: {
          brandName: 'Future Summit',
          logoText: 'FUTURE // SUMMIT 2026',
          ctaText: 'Comprar Pase Early Bird',
          ctaLink: '#pricing',
          links: [
            { label: 'Ponentes', href: '#features' },
            { label: 'Keynote Principal', href: '#product' },
            { label: 'Pases & Entradas', href: '#pricing' },
            { label: 'Ediciones Anteriores', href: '#gallery' }
          ],
          glassBlur: true,
          sticky: true
        },
        hero: {
          enabled: true,
          badge: '18-20 de Noviembre de 2026 • Palacio de Congresos & Streaming Global',
          kicker: 'Innovación, Ciencia & Futuro',
          title: 'Donde las mentes más brillantes',
          highlightTitle: 'redefinen el mañana.',
          subtitle: '3 días con más de 60 ponentes internacionales de primer nivel, mesas redondas sobre computación cuántica, energía de fusión y talleres prácticos de tecnología profunda.',
          primaryCta: { text: 'Reservar Pase con 30% Descuento', link: '#pricing' },
          secondaryCta: { text: 'Ver Agenda Completa de Ponencias →', link: '#features' },
          imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1600&q=80',
          style: 'centered'
        },
        logos: {
          enabled: true,
          title: 'PATROCINADORES Y PARTNERS GLOBALES DEL EVENTO',
          items: [
            { id: 'l1', name: 'NVIDIA Enterprise', tagline: 'Platinum Sponsor' },
            { id: 'l2', name: 'Google Cloud', tagline: 'Keynote Partner' },
            { id: 'l3', name: 'MIT Tech Review', tagline: 'Official Media Partner' }
          ]
        },
        bentoFeatures: {
          enabled: true,
          kicker: 'Pilares del Congreso',
          title: 'Una experiencia diseñada para inspirar y generar conexiones estratégicas.',
          subtitle: 'Estructurado en 4 escenarios simultáneos y zonas dedicadas a networking ejecutivo.',
          items: [
            {
              id: 'f1',
              title: '60+ Ponentes de Prestigio Internacional',
              description: 'Fundadores de unicornios, investigadores del CERN, directores de laboratorios de computación cuántica y pensadores contemporáneos.',
              icon: 'Mic2',
              tag: 'Keynote Speakers',
              colSpan: 2,
              statNumber: '60+',
              statLabel: 'Ponentes de más de 20 países'
            },
            {
              id: 'f2',
              title: 'Workshops Técnicos Hands-On',
              description: 'Laboratorios prácticos en grupos reducidos de 30 personas con acceso directo a hardware avanzado y frameworks de vanguardia.',
              icon: 'Cpu',
              tag: 'Talleres Prácticos',
              colSpan: 1
            },
            {
              id: 'f3',
              title: 'App de Networking con Matching 1:1',
              description: 'Algoritmo de recomendaciones para agendar reuniones privadas de 15 minutos en el Executive Lounge durante los 3 días.',
              icon: 'Users',
              tag: 'Networking VIP',
              colSpan: 1
            },
            {
              id: 'f4',
              title: 'Gala Dinner & Awards Night',
              description: 'Cena de gala exclusiva para pases VIP y ponentes en un espacio emblemático con entrega de los Future Tech Awards 2026.',
              icon: 'Sparkles',
              tag: 'Gala Exclusiva',
              colSpan: 2,
              statNumber: '3.000+',
              statLabel: 'Asistentes profesionales y ejecutivos del sector'
            }
          ]
        },
        productHighlight: {
          enabled: true,
          badge: 'La Ponencia Magistral',
          kicker: 'Keynote de Apertura',
          title: 'El Salto Cuántico en la Simulación Molecular.',
          subtitle: 'Impartida por la Dra. Aris Thorne (Laboratorio Cuántico de Zúrich).',
          description: 'Cómo los procesadores cuánticos superconductores de 10.000 cúbits están permitiendo modelar nuevos superconductores a temperatura ambiente y catalizadores enzimáticos para la captura de carbono a escala planetaria.',
          imageUrl: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1400&q=80',
          specs: [
            { label: 'Fecha y Hora', value: '18 de Noviembre 2026, 09:30 AM (Auditorio Principal)' },
            { label: 'Acceso', value: 'Incluido en todos los tipos de pases presenciales y virtuales' },
            { label: 'Traducción', value: 'Simultánea en inglés, español, alemán y japonés' }
          ]
        },
        gallery: {
          enabled: true,
          title: 'Ediciones Anteriores en Imágenes',
          images: [
            { id: 'g1', url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80', caption: 'Auditorio central durante la ponencia inaugural' },
            { id: 'g2', url: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80', caption: 'Zona de exposición tecnológica y stands de demostración' }
          ]
        },
        stats: {
          enabled: true,
          items: [
            { id: 's1', value: '3.000+', label: 'Líderes y Asistentes Presenciales' },
            { id: 's2', value: '60+', label: 'Ponentes Internacionales' },
            { id: 's3', value: '4', label: 'Escenarios Simultáneos' }
          ]
        },
        testimonials: {
          enabled: true,
          title: 'Lo que opinan los asistentes a Future Summit.',
          items: [
            {
              id: 't1',
              author: 'Dra. Miriam Koster',
              name: 'Dra. Miriam Koster',
              role: 'VP de Innovación en Horizon Energy',
              company: 'Horizon Energy',
              quote: 'Future Summit es con diferencia el evento tecnológico de mayor densidad de valor intelectual y contactos estratégicos de Europa. La calidad del programa es insuperable.',
              avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
              rating: 5
            }
          ]
        },
        pricing: {
          enabled: true,
          title: 'Pases de Acceso al Congreso',
          billingCycle: 'monthly',
          plans: [
            {
              id: 'p1',
              name: 'Pase General Early Bird',
              priceMonthly: '450€',
              priceAnnual: 'Tarifa reducida hasta agotar 500 plazas',
              description: 'Acceso completo durante los 3 días a todas las ponencias de los 4 escenarios, zona expositiva y catering.',
              features: ['Acceso a los 3 días de conferencias magistrales', 'Coffee breaks diarios y almuerzo buffet gourmet', 'Acceso a la app de networking del evento', 'Grabaciones de todas las charlas en 4K tras el evento'],
              highlighted: false,
              ctaText: 'Comprar Pase General'
            },
            {
              id: 'p2',
              name: 'Pase VIP & Executive Lounge',
              priceMonthly: '950€',
              priceAnnual: 'Plazas limitadas a 150 ejecutivos',
              description: 'Acceso prioritario a primera fila, Executive Lounge privado con barra libre, reserva de workshops y Cena de Gala.',
              features: ['Asientos reservados en primera fila en auditorio', 'Acceso al Executive Lounge con salas de reuniones privadas', 'Invitación a la Cena de Gala con los ponentes', 'Fast-track de acreditación y kit VIP de bienvenida'],
              highlighted: true,
              ctaText: 'Adquirir Pase VIP'
            }
          ]
        },
        faq: {
          enabled: true,
          title: 'Preguntas Frecuentes sobre el Evento',
          items: [
            {
              id: 'q1',
              question: '¿Dónde se celebrará el evento y cómo llegar?',
              answer: 'Tendrá lugar en el Palacio de Congresos, con conexión directa en metro y tren de alta velocidad con el aeropuerto internacional y las principales estaciones.'
            },
            {
              id: 'q2',
              question: '¿Se puede transferir la entrada a otra persona si no puedo asistir?',
              answer: 'Sí. El cambio de nombre en la entrada es completamente gratuito hasta 7 días naturales antes del inicio del congreso a través del panel de gestión de tickets.'
            },
            {
              id: 'q3',
              question: '¿Habrá traducción simultánea en las conferencias?',
              answer: 'Todas las ponencias del auditorio principal y el escenario de ciencia contarán con traducción simultánea inglés-español mediante auriculares inalámbricos proporcionados en sala.'
            },
            {
              id: 'q4',
              question: '¿Existen descuentos especiales para grupos o empresas?',
              answer: 'Ofrecemos un 15% de descuento adicional para compras corporativas a partir de 4 pases simultáneos gestionados a través de nuestro departamento corporativo.'
            },
            {
              id: 'q5',
              question: '¿Se emitirá certificado oficial de asistencia?',
              answer: 'Todos los asistentes recibirán un certificado digital de acreditación profesional emitido por la organización con detalle de los workshops completados.'
            },
            {
              id: 'q6',
              question: '¿Las opciones de catering cubren restricciones alimentarias?',
              answer: 'El catering incluye opciones vegetarianas, veganas, sin gluten y sin lactosa claramente etiquetadas en todas las estaciones de comida del recinto.'
            }
          ]
        },
        ctaFinal: {
          enabled: true,
          title: 'Sé parte de las conversaciones que marcarán la próxima década.',
          subtitle: 'Pases Early Bird con un 30% de descuento por tiempo limitado.',
          primaryCta: { text: 'Asegurar Entrada a Future Summit', link: '#pricing' }
        },
        footer: {
          copyright: '© 2026 Future Summit Global Foundation. Todos los derechos reservados.',
          legalLinks: [
            { label: 'Términos de Venta de Entradas', href: '#terms' },
            { label: 'Código de Conducta', href: '#conduct' },
            { label: 'Prensa y Medios', href: '#press' }
          ],
          socialLinks: [
            { platform: 'Twitter', url: 'https://twitter.com' },
            { platform: 'LinkedIn', url: 'https://linkedin.com' }
          ]
        }
      }
    }
  },

  // 3. MATERIA ARTESANA — Talleres Magistrales & Ebanistería
  {
    id: 'craft-masterclass',
    name: 'Materia Artesana',
    tagline: 'Escuela de oficios nobles, talleres magistrales de cerámica al torno, marroquinería y ebanistería tradicional',
    category: 'education',
    thumbnail: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=1200&q=80',
    description: 'Estética en arcilla cálida y terracota #D97706, tipografía Lora y Outfit, calendario interactivo de workshops de fin de semana, kit de herramientas de autor incluido y grupos reducidos de 8 alumnos.',
    accentColor: '#D97706',
    theme: 'light',
    defaultConfig: {
      templateId: 'craft-masterclass',
      name: 'Materia Artesana Escuela de Oficios',
      slug: 'materia-artesana',
      domain: 'materiaartesana.es',
      theme: 'light',
      accentColor: '#D97706',
      fontFamily: "'Lora', Georgia, serif",
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
        title: 'Materia Artesana — Cursos de Cerámica, Ebanistería y Oficios Nobles',
        description: 'Aprende a crear con tus propias manos en talleres de fin de semana con maestros artesanos y herramientas tradicionales.',
        keywords: 'taller ceramica, torno de alfarero, curso ebanisteria, marroquineria artesanal, escuela de oficios'
      },
      sections: {
        navbar: {
          brandName: 'Materia',
          logoText: 'MATERIA ARTESANA',
          ctaText: 'Ver Calendario de Talleres',
          ctaLink: '#pricing',
          links: [
            { label: 'Oficios', href: '#features' },
            { label: 'Taller Estrella', href: '#product' },
            { label: 'El Espacio', href: '#gallery' },
            { label: 'Precios', href: '#pricing' }
          ],
          glassBlur: true,
          sticky: true
        },
        hero: {
          enabled: true,
          badge: 'Maestros Artesanos con Premio Nacional • Grupos de 8 Alumnos',
          kicker: 'Oficios Nobles, Tiempo & Materia',
          title: 'El placer de crear con las manos',
          highlightTitle: 'piezas que perduran.',
          subtitle: 'Aprende las técnicas tradicionales de la cerámica al torno, el trabajo del cuero curtido al vegetal y el ensamblaje de madera maciza en un taller bañado por luz natural.',
          primaryCta: { text: 'Descubrir Cursos de Fin de Semana', link: '#pricing' },
          secondaryCta: { text: 'Conoce a Nuestros Maestros →', link: '#features' },
          imageUrl: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=1600&q=80',
          style: 'centered'
        },
        logos: {
          enabled: true,
          title: 'ACREDITACIONES Y GREMIOS DE ARTESANÍA TRADICIONAL',
          items: [
            { id: 'l1', name: 'Gremio de Alfareros', tagline: 'Maestría Tradicional' },
            { id: 'l2', name: 'Asociación Española de Ebanistería', tagline: 'Miembro de Honor' },
            { id: 'l3', name: 'Artesanía de España', tagline: 'Distintivo de Excelencia' }
          ]
        },
        bentoFeatures: {
          enabled: true,
          kicker: 'Disciplinas Formativas',
          title: 'Una inmersión profunda en la textura y el proceso manual.',
          subtitle: 'Trabajamos con materias primas nobles de procedencia local y herramientas forjadas a mano.',
          items: [
            {
              id: 'f1',
              title: 'Cerámica Gres y Porcelana al Torno',
              description: 'Aprende centrado, levantamiento de paredes, torneado de formas utilitarias, formulación de esmaltes minerales y cocción a 1.250°C.',
              icon: 'Sparkles',
              tag: 'Torno & Esmaltes',
              colSpan: 2,
              statNumber: '1 Torno',
              statLabel: 'Individual para cada alumno durante toda la sesión'
            },
            {
              id: 'f2',
              title: 'Ebanistería y Ensambles Tradicionales',
              description: 'Uso de cepillos manuales de carpintero, formones japoneses y realización de ensambles en cola de milano sin clavos.',
              icon: 'Hammer',
              tag: 'Madera Noble',
              colSpan: 1
            },
            {
              id: 'f3',
              title: 'Marroquinería y Cosido a Dos Agujas',
              description: 'Técnica de guarnicionería clásica con hilo de lino encerado sobre pieles curtidas con extractos vegetales de corteza de mimosa.',
              icon: 'Scissors',
              tag: 'Piel Vegetal',
              colSpan: 1
            },
            {
              id: 'f4',
              title: 'Te Llevas a Casa tus Propias Creaciones',
              description: 'Todas las piezas terminadas y cocidas en nuestros hornos profesionales son tuyas para usarlas y disfrutarlas en tu hogar.',
              icon: 'Gift',
              tag: 'Piezas Propias',
              colSpan: 2,
              statNumber: '8 Max',
              statLabel: 'Plazas máximas por taller para un acompañamiento constante'
            }
          ]
        },
        productHighlight: {
          enabled: true,
          badge: 'Taller Intensivo',
          kicker: 'Workshop de Fin de Semana',
          title: 'Inmersión en Cerámica Utilitaria: Vajilla Completa.',
          subtitle: 'Sábado y domingo (12 horas lectivas) con torno individual y esmaltado.',
          description: 'Crearás un juego completo de desayuno compuesto por 2 tazas de café torneadas, 2 cuencos y una tetera artesanal. Incluye primera cochura de bizcochado, aplicación de esmaltes mate de formulación propia y segunda cocción de alta temperatura.',
          imageUrl: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=1400&q=80',
          specs: [
            { label: 'Horario', value: 'Sábado 10:00 - 18:00 y Domingo 10:00 - 14:00' },
            { label: 'Incluye', value: 'Arcilla gres ilimitada, uso de torno profesional, esmaltes y 2 cocciones' },
            { label: 'Nivel', value: 'Apto para principiantes sin experiencia previa' }
          ]
        },
        gallery: {
          enabled: true,
          title: 'El Taller y los Procesos',
          images: [
            { id: 'g1', url: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=800&q=80', caption: 'Torno de alfarero en movimiento con barro blanco' },
            { id: 'g2', url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80', caption: 'Estantería de piezas bizcochadas listas para esmaltar' }
          ]
        },
        stats: {
          enabled: true,
          items: [
            { id: 's1', value: '8 Max', label: 'Alumnos por Masterclass' },
            { id: 's2', value: '100%', label: 'Materiales Nobles Incluidos' },
            { id: 's3', value: '4.9/5', label: 'Satisfacción de Nuestros Alumnos' }
          ]
        },
        testimonials: {
          enabled: true,
          title: 'Lo que cuentan quienes han pasado por el taller.',
          items: [
            {
              id: 't1',
              author: 'Clara Doménech',
              name: 'Clara Doménech',
              role: 'Diseñadora Gráfica y Alumna de Torno',
              company: 'Materia Alumna',
              quote: 'Pasar el fin de semana en Materia Artesana fue una experiencia reconstituyente. El ritmo pausado, el tacto del barro y la paciencia del maestro te hacen olvidar por completo las prisas de la pantalla.',
              avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
              rating: 5
            }
          ]
        },
        pricing: {
          enabled: true,
          title: 'Talleres Disponibles este Mes',
          billingCycle: 'monthly',
          plans: [
            {
              id: 'p1',
              name: 'Taller de Iniciación al Torno (4 Horas)',
              priceMonthly: '75€',
              priceAnnual: 'Materiales y cocción incluidos',
              description: 'Una mañana de toma de contacto con el barro para tornear tus primeras dos piezas de cerámica.',
              features: ['4 horas de práctica continua en torno individual', 'Delantal de lino y herramientas prestadas', 'Esmaltado en blanco mate o verde bosque', 'Recogida de piezas cocidas en 15 días'],
              highlighted: false,
              ctaText: 'Reservar Plaza Torno'
            },
            {
              id: 'p2',
              name: 'Inmersión Intensiva Fin de Semana (12 Horas)',
              priceMonthly: '190€',
              priceAnnual: 'El más completo de la escuela',
              description: 'Curso intensivo de sábado y domingo para crear una vajilla completa de gres con esmaltes minerales.',
              features: ['12 horas lectivas en grupo reducido (8 max)', 'Arcilla y esmaltes formulados a mano incluidos', 'Desayunos artesanos con café de especialidad', 'Cocción de alta temperatura a 1.250°C incluida'],
              highlighted: true,
              ctaText: 'Reservar Fin de Semana'
            }
          ]
        },
        faq: {
          enabled: true,
          title: 'Preguntas Frecuentes sobre los Cursos',
          items: [
            {
              id: 'q1',
              question: '¿Qué ropa debo llevar para los talleres de cerámica o madera?',
              answer: 'Recomendamos ropa cómoda que no te importe manchar y calzado cerrado. En el taller proporcionamos delantales de lino resistentes para protegerte.'
            },
            {
              id: 'q2',
              question: '¿Cuándo podré recoger mis piezas cerámicas terminadas?',
              answer: 'Las piezas necesitan secar lentamente durante 7 días antes de entrar al horno para evitar grietas. Tras el secado, realizamos dos cocciones y están listas para recoger en 2 a 3 semanas.'
            },
            {
              id: 'q3',
              question: '¿Las piezas de cerámica utilitaria son aptas para lavavajillas y microondas?',
              answer: 'Sí. Al ser cocidas a 1.250°C en gres de alta temperatura, nuestras arcillas y esmaltes son completamente impermeables, no tóxicos y aptos para uso alimentario diario.'
            },
            {
              id: 'q4',
              question: '¿Se puede regalar un taller con una tarjeta regalo personalizada?',
              answer: 'Sí. Emitimos bonos regalo impresos en papel artesanal con membrete dorado en un sobre lacrado con validez de 12 meses para que el destinatario elija la fecha que prefiera.'
            },
            {
              id: 'q5',
              question: '¿Qué ocurre si no puedo asistir en la fecha reservada?',
              answer: 'Puedes solicitar el cambio de fecha de tu plaza con hasta 7 días de antelación sin ningún cargo para reubicarte en la siguiente convocatoria disponible.'
            },
            {
              id: 'q6',
              question: '¿Organizan talleres privados para empresas o grupos de amigos?',
              answer: 'Sí. Diseñamos sesiones privadas exclusivas para eventos de team building, cumpleaños o grupos familiares a partir de 6 personas con aperitivo artesano incluido.'
            }
          ]
        },
        ctaFinal: {
          enabled: true,
          title: 'Recupera el tiempo para crear con tus manos.',
          subtitle: 'Plazas estrictamente limitadas a 8 alumnos por taller.',
          primaryCta: { text: 'Reservar Taller Artesano', link: '#pricing' }
        },
        footer: {
          copyright: '© 2026 Materia Artesana Escuela de Oficios S.L. Todos los derechos reservados.',
          legalLinks: [
            { label: 'Condiciones de Reserva', href: '#reservas' },
            { label: 'Tarjetas Regalo', href: '#regalo' },
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
