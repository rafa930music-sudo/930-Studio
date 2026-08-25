import { TemplateDefinition } from '../../types';

export const EDUCATION_TEMPLATES: TemplateDefinition[] = [
  // 16. ACADEMY — Plataforma de Bootcamps Tech, Cursos Online & Certificaciones
  {
    id: 'academy-edu',
    name: 'Academy',
    tagline: 'Bootcamp intensivo de desarrollo full stack, inteligencia artificial aplicada y diseño de producto con garantía de empleo',
    category: 'education',
    thumbnail: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
    description: 'Azul índigo moderno #6366F1 con modo oscuro sofisticado, tipografía técnica clara, empresas contratantes, bento de metodología de proyectos reales, pestañas de itinerarios formativos, métricas de inserción laboral, precios y becas.',
    accentColor: '#6366F1',
    theme: 'dark',
    defaultConfig: {
      templateId: 'academy-edu',
      name: 'Vortex Tech Academy',
      slug: 'vortex-academy',
      domain: 'vortexacademy.dev',
      theme: 'dark',
      accentColor: '#6366F1',
      fontFamily: 'Inter, -apple-system, sans-serif',
      borderRadius: 18,
      published: true,
      sectionOrder: [
        'navbar',
        'hero',
        'logos',
        'marquee',
        'bentoFeatures',
        'productHighlight',
        'tabs',
        'stats',
        'testimonials',
        'pricing',
        'faq',
        'ctaFinal',
        'footer'
      ],
      seo: {
        title: 'Vortex Tech Academy — Bootcamp de IA, Full-Stack & Garantía de Empleo',
        description: 'Fórmate en 16 semanas con mentores seniors de Google, Meta y Stripe. Proyectos reales en producción y 94% de colocación laboral.',
        keywords: 'bootcamp programacion, curso inteligencia artificial, full stack developer, aprender react python, garantia de empleo tech'
      },
      sections: {
        navbar: {
          brandName: 'Academy',
          logoText: 'VORTEX ACADEMY',
          ctaText: 'Solicitar Plaza',
          ctaLink: '#pricing',
          links: [
            { label: 'Bootcamps', href: '#tabs' },
            { label: 'Metodología', href: '#features' },
            { label: 'El Proyecto Final', href: '#product' },
            { label: 'Empleabilidad', href: '#stats' },
            { label: 'Precios & Becas', href: '#pricing' }
          ],
          glassBlur: true,
          sticky: true
        },
        hero: {
          enabled: true,
          badge: 'Convocatoria Otoño 2026 • 94% de Inserción Laboral Certificada',
          kicker: 'Educación Tecnológica de Alto Rendimiento',
          title: 'Aprende a programar.',
          highlightTitle: 'Construye el futuro.',
          subtitle: 'El bootcamp intensivo de 16 semanas diseñado por ingenieros líderes para convertirte en desarrollador Full-Stack o especialista en IA con proyectos reales en tu portafolio.',
          primaryCta: { text: 'Ver Programas Formativos', link: '#tabs' },
          secondaryCta: { text: 'Descargar Plan de Estudios (PDF) →', link: '#pricing' },
          imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80',
          style: 'centered'
        },
        logos: {
          enabled: true,
          title: 'EMPRESAS LÍDERES QUE CONTRATAN A NUESTROS GRADUADOS',
          items: [
            { id: 'l1', name: 'Google Cloud', tagline: 'Hiring Partner' },
            { id: 'l2', name: 'Stripe Payments', tagline: 'Frontend & Backend' },
            { id: 'l3', name: 'Spotify Music', tagline: 'Data & Engineering' },
            { id: 'l4', name: 'Vercel Platform', tagline: 'Full Stack' },
            { id: 'l5', name: 'Revolut Bank', tagline: 'Software Engineers' }
          ]
        },
        marquee: {
          enabled: true,
          speed: 'normal',
          direction: 'left',
          items: [
            { id: 'm1', text: 'REACT 19 & NEXT.JS 15 EN PRODUCCIÓN', highlight: true, icon: 'Zap' },
            { id: 'm2', text: 'PYTHON, LLMS & AGENTES INTELIGENTES', highlight: false, icon: 'BrainCircuit' },
            { id: 'm3', text: 'MENTORÍA 1 A 1 CON INGENIEROS SENIOR', highlight: true, icon: 'UserCheck' },
            { id: 'm4', text: 'GARANTÍA DE EMPLEO POR CONTRATO', highlight: false, icon: 'ShieldCheck' }
          ]
        },
        bentoFeatures: {
          enabled: true,
          kicker: 'El Método Vortex',
          title: 'Aprende construyendo, no memorizando diapositivas.',
          subtitle: 'Simulamos el entorno de trabajo de las mejores empresas tecnológicas desde el primer día.',
          items: [
            {
              id: 'f1',
              title: 'Proyectos Reales en GitHub & Despliegue en Cloud',
              description: 'Construirás 6 aplicaciones complejas de extremo a extremo: autenticación, bases de datos PostgreSQL, APIs REST y agentes con Gemini/OpenAI.',
              icon: 'Code2',
              tag: '100% Práctico',
              colSpan: 2,
              statNumber: '94%',
              statLabel: 'De graduados contratados en menos de 180 días'
            },
            {
              id: 'f2',
              title: 'Mentoría Personalizada Semanal',
              description: 'Sesiones 1 a 1 de revisión de código (code reviews) y preparación para pruebas técnicas con ingenieros en activo.',
              icon: 'UserCheck',
              tag: 'Mentores Seniors',
              colSpan: 1
            },
            {
              id: 'f3',
              title: 'Simulacros de Entrevistas Técnicas',
              description: 'Entrenamiento intensivo en estructuras de datos, algoritmos de LeetCode y diseño de sistemas a escala.',
              icon: 'CheckCircle2',
              tag: 'Career Services',
              colSpan: 1
            },
            {
              id: 'f4',
              title: 'Comunidad Exclusiva de Alumni & Hiring Network',
              description: 'Acceso a un canal privado de empleo con más de 250 empresas asociadas que buscan talento activamente sin pasar por filtros automatizados.',
              icon: 'Globe2',
              tag: 'Red de Empleo',
              colSpan: 2,
              statNumber: '42,000€',
              statLabel: 'Salario medio de inicio para nuestros graduados'
            }
          ]
        },
        productHighlight: {
          enabled: true,
          kicker: 'El Proyecto Final',
          title: 'El Capstone Project: tu mejor carta de presentación.',
          subtitle: 'Durante las últimas 4 semanas desarrollarás en equipo un producto digital completo presentado ante fondos de inversión y directores de ingeniería.',
          description: 'Desde la arquitectura de microservicios hasta la integración de modelos de lenguaje multimodal, tu código será auditado bajo estándares de producción industrial.',
          imageUrl: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1600&q=80',
          layout: 'image-right',
          ctaText: 'Ver Proyectos de Alumnos Anteriores',
          ctaLink: '#pricing',
          specs: [
            { label: 'Duración del Capstone', value: '4 Semanas a Tiempo Completo', detail: 'Metodología Scrum & Agile' },
            { label: 'Stack Tecnológico', value: 'Next.js + Fastify + PostgreSQL', detail: 'TypeScript de principio a fin' },
            { label: 'Demo Day', value: 'Presentación en Vivo', detail: '+50 empresas contratantes en directo' }
          ]
        },
        tabs: {
          enabled: true,
          kicker: 'Nuestros Bootcamps',
          title: 'Itinerarios formativos diseñados para el mercado actual.',
          subtitle: 'Elige la especialización que impulsará tu carrera profesional.',
          tabs: [
            {
              id: 'tab_fullstack',
              label: 'Full-Stack Developer (16 Semanas)',
              icon: 'Code2',
              title: 'Domina el desarrollo web moderno de frontend y backend',
              description: 'Aprende TypeScript, React 19, Node.js, Next.js 15, PostgreSQL, Docker y patrones de arquitectura limpia.',
              imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
              points: [
                'Frontend reactivo con React, Tailwind CSS y gestión de estado avanzada',
                'Backend escalable con Node.js, Express, REST APIs y GraphQL',
                'Bases de datos relacionales con Drizzle ORM y despliegue CI/CD en la nube'
              ]
            },
            {
              id: 'tab_ai',
              label: 'AI & Data Engineering (16 Semanas)',
              icon: 'BrainCircuit',
              title: 'Crea aplicaciones inteligentes con modelos generativos',
              description: 'Aprende Python para IA, LangChain, embeddings vectoriales, fine-tuning y despliegue de agentes autónomos en producción.',
              imageUrl: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80',
              points: [
                'Programación avanzada en Python, NumPy y Pandas para ingeniería de datos',
                'Integración de APIs de Gemini y OpenAI con RAG (Retrieval Augmented Generation)',
                'Bases de datos vectoriales (Pinecone, pgvector) y pipelines de automatización'
              ]
            }
          ]
        },
        stats: {
          enabled: true,
          kicker: 'Resultados Comprobados',
          title: 'Las cifras que avalan nuestra calidad académica.',
          subtitle: 'Métricas auditadas por organismos independientes de educación tecnológica.',
          items: [
            { id: 's1', value: '94%', label: 'Tasa de Colocación', description: 'En los primeros 6 meses' },
            { id: 's2', value: '42,000€', label: 'Salario Medio Inicial', description: 'Para graduados sin experiencia previa' },
            { id: 's3', value: '1,200+', label: 'Alumni en el Sector', description: 'Trabajando en más de 20 países' },
            { id: 's4', value: '4.9/5', label: 'Valoración de Alumnos', description: 'En CourseReport y SwitchUp' }
          ]
        },
        testimonials: {
          enabled: true,
          title: 'Historias de transformación profesional real.',
          subtitle: 'De sectores no tecnológicos a ingenieros de software en empresas punteras.',
          items: [
            {
              id: 't1',
              name: 'David Navarrete',
              role: 'Software Engineer en Vercel',
              company: 'Ex-Profesor de Secundaria',
              quote: 'Antes del bootcamp de Vortex no había escrito una sola línea de código. La exigencia, el apoyo constante de los mentores y los proyectos reales me permitieron superar el proceso de selección de Vercel en mi primera entrevista.',
              avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
              rating: 5
            },
            {
              id: 't2',
              name: 'Elena Santamaría',
              role: 'AI Engineer en Revolut',
              company: 'Ex-Economista',
              quote: 'El módulo de agentes inteligentes y RAG fue clave. El proyecto final que desarrollé en Vortex llamó la atención del equipo de ingeniería de Revolut en el Demo Day. La mejor inversión de mi vida.',
              avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
              rating: 5
            }
          ]
        },
        pricing: {
          enabled: true,
          title: 'Opciones de Matrícula & Financiación',
          subtitle: 'Educación accesible con opciones de pago a plazos o pago tras conseguir empleo (ISA).',
          billingCycle: 'monthly',
          discountNote: 'Beca mujer en tech y becas por mérito académico disponibles de hasta 1,500€',
          plans: [
            {
              id: 'edu_upfront',
              name: 'Pago al Contado',
              tag: 'Mayor Ahorro',
              priceMonthly: '5,900€',
              priceAnnual: '5,900€',
              description: 'Matrícula completa con 1,000€ de descuento directo sobre el precio financiado.',
              features: [
                'Acceso completo al bootcamp intensivo de 16 semanas',
                'Mentorías 1 a 1 semanales con ingenieros senior',
                'Acceso de por vida a la plataforma y grabaciones',
                'Servicio de inserción laboral Career Coaching ilimitado',
                'Certificado acreditado oficial de Vortex Academy'
              ],
              ctaText: 'Matricularme con Descuento',
              ctaLink: '#apply-upfront',
              highlighted: false
            },
            {
              id: 'edu_isa',
              name: 'Acuerdo de Ingresos Compartidos (ISA)',
              tag: 'Garantía Total',
              priceMonthly: '0€ Inicial',
              priceAnnual: '0€ Inicial',
              description: 'Paga 0€ durante el curso. Solo abonas un porcentaje de tu sueldo cuando ganes más de 25,000€/año.',
              features: [
                'Sin coste inicial ni pagos mensuales durante el curso',
                'Pagas únicamente cuando estés trabajando en el sector tech',
                'Si no consigues trabajo en 12 meses, no pagas nada',
                'Mismo acceso completo y mentorías que la modalidad ordinaria',
                'Proceso de selección previo para evaluar motivación y lógica'
              ],
              ctaText: 'Solicitar Plaza ISA',
              ctaLink: '#apply-isa',
              highlighted: true
            }
          ]
        },
        faq: {
          enabled: true,
          title: 'Preguntas Frecuentes sobre Vortex Academy',
          subtitle: 'Requisitos de admisión, dedicación horaria y garantía de empleo.',
          items: [
            {
              id: 'ef_q1',
              question: '¿Necesito conocimientos previos de programación para acceder?',
              answer: 'No. Nuestros bootcamps comienzan desde los fundamentos de la lógica de programación y JavaScript/Python. Antes de empezar el curso realizarás un precourse guiado de 3 semanas para nivelar tus conocimientos básicos.'
            },
            {
              id: 'ef_q2',
              question: '¿Cuál es la dedicación horaria requerida?',
              answer: 'En la modalidad a tiempo completo (Full-Time) la dedicación es de lunes a viernes de 09:00 a 18:00 (40 horas semanales). También disponemos de modalidad a tiempo parcial (Part-Time) con clases en directo 3 tardes por semana y sábados por la mañana.'
            },
            {
              id: 'ef_q3',
              question: '¿Cómo funciona exactamente la garantía de empleo?',
              answer: 'Si tras graduarte y cumplir con las actividades del plan de empleabilidad durante 6 meses no recibes una oferta de trabajo en el sector tecnológico, te reembolsamos el 100% de la matrícula abonada conforme a las bases contractuales.'
            }
          ]
        },
        ctaFinal: {
          enabled: true,
          kicker: 'Plazas Limitadas por Cohorte',
          title: 'Tu nueva carrera tecnológica empieza aquí.',
          subtitle: 'Las inscripciones para la próxima convocatoria se cierran en pocos días. Solicita tu entrevista de admisión hoy mismo.',
          primaryCta: { text: 'Iniciar Proceso de Admisión', link: '#pricing' },
          secondaryCta: { text: 'Agendar Charla con un Asesor', link: '#advisor' },
          backgroundStyle: 'glow'
        },
        footer: {
          copyright: '© 2026 Vortex Tech Academy S.L. Madrid • Barcelona • Remoto Global.',
          legalLinks: [
            { label: 'Bases de Garantía de Empleo', href: '#job-guarantee' },
            { label: 'Reglamento Académico', href: '#academic' },
            { label: 'Política de Privacidad', href: '#privacy' },
            { label: 'Aviso Legal', href: '#legal' }
          ],
          socialLinks: [
            { platform: 'GitHub', url: 'https://github.com' },
            { platform: 'Discord', url: 'https://discord.com' },
            { platform: 'LinkedIn', url: 'https://linkedin.com' },
            { platform: 'YouTube', url: 'https://youtube.com' }
          ]
        }
      }
    }
  }
];
