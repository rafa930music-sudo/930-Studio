import { TemplateDefinition } from '../../types';

export const AGENCIES_TEMPLATES: TemplateDefinition[] = [
  // 5. PULSE — Agencia Creativa Vibrante & Branding Digital
  {
    id: 'pulse-agency',
    name: 'Pulse',
    tagline: 'Agencia creativa de alto impacto con dirección de arte atrevida, experiencias inmersivas 3D y marcas memorables',
    category: 'agencies',
    thumbnail: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1200&q=80',
    description: 'Estética visual electrizante en negro y rosa magenta #EC4899, tipografía display gigante, marquesina de proyectos, vitrina visual en cuadrícula, proceso en fases, métricas de premios y paquetes de diseño.',
    accentColor: '#EC4899',
    theme: 'dark',
    defaultConfig: {
      templateId: 'pulse-agency',
      name: 'Pulse Creative Studio',
      slug: 'pulse-creative',
      domain: 'pulsestudio.design',
      theme: 'dark',
      accentColor: '#EC4899',
      fontFamily: 'Inter, -apple-system, sans-serif',
      borderRadius: 24,
      published: true,
      sectionOrder: [
        'navbar',
        'hero',
        'logos',
        'marquee',
        'gallery',
        'bentoFeatures',
        'stats',
        'testimonials',
        'pricing',
        'faq',
        'ctaFinal',
        'footer'
      ],
      seo: {
        title: 'Pulse Studio — Agencia de Branding Digital, 3D & Experiencias Web',
        description: 'Construimos marcas digitales memorables que rompen el ruido y conectan emocionalmente con audiencias globales.',
        keywords: 'agencia creativa, diseño web galardonado, branding digital, dirección de arte, experiencias 3D'
      },
      sections: {
        navbar: {
          brandName: 'Pulse',
          logoText: 'PULSE STUDIO',
          ctaText: 'Iniciar Proyecto',
          ctaLink: '#pricing',
          links: [
            { label: 'Proyectos', href: '#gallery' },
            { label: 'Servicios', href: '#features' },
            { label: 'Premios', href: '#stats' },
            { label: 'Paquetes', href: '#pricing' },
            { label: 'Proceso', href: '#faq' }
          ],
          glassBlur: true,
          sticky: true
        },
        hero: {
          enabled: true,
          badge: 'Agencia del Año Awwwards 2025 • +45 Premios Internacionales',
          kicker: 'Diseño Sin Límites',
          title: 'Creamos marcas que no pasan',
          highlightTitle: 'desapercibidas.',
          subtitle: 'Fusionamos estrategia visual, interactividad 3D y narrativa cinematográfica para posicionar a empresas visionarias en la cima de su industria.',
          primaryCta: { text: 'Ver Casos de Estudio', link: '#gallery' },
          secondaryCta: { text: 'Solicitar Presupuesto →', link: '#pricing' },
          imageUrl: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1600&q=80',
          style: 'centered'
        },
        logos: {
          enabled: true,
          title: 'MARCAS AUDACES QUE HAN CONFIADO SU IDENTIDAD A PULSE',
          items: [
            { id: 'l1', name: 'Nike Lab', tagline: 'Creative Direction' },
            { id: 'l2', name: 'Spotify Music', tagline: 'Interactive Campaigns' },
            { id: 'l3', name: 'Polestar Cars', tagline: 'Digital Experience' },
            { id: 'l4', name: 'Balenciaga', tagline: 'Digital Runway' },
            { id: 'l5', name: 'Red Bull Media', tagline: 'Brand Evolution' }
          ]
        },
        marquee: {
          enabled: true,
          speed: 'slow',
          direction: 'left',
          items: [
            { id: 'm1', text: 'BRANDING DIGITAL REVOLUCIONARIO', highlight: true, icon: 'Sparkles' },
            { id: 'm2', text: 'EXPERIENCIAS WEB 3D & THREE.JS', highlight: false, icon: 'Cpu' },
            { id: 'm3', text: 'ESTRATEGIA VISUAL DE ALTO IMPACTO', highlight: true, icon: 'Eye' },
            { id: 'm4', text: 'DIRECCIÓN DE ARTE CINEMATOGRÁFICA', highlight: false, icon: 'Palette' }
          ]
        },
        gallery: {
          enabled: true,
          kicker: 'Trabajos Seleccionados',
          title: 'Una muestra de nuestras obras más aclamadas.',
          subtitle: 'Haz clic en cada proyecto para explorar la dirección de arte y los resultados de negocio.',
          items: [
            {
              id: 'g1',
              title: 'Kinetix — Identidad y Metaverso para Calzado Urbano',
              category: 'Branding & 3D Web',
              imageUrl: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1200&q=80',
              aspectRatio: 'wide'
            },
            {
              id: 'g2',
              title: 'Aura Sound — Rediseño de Plataforma Sonora Inmersiva',
              category: 'UI/UX & Sonido',
              imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80',
              aspectRatio: 'square'
            },
            {
              id: 'g3',
              title: 'Vektor Architecture — Editorial Digital Minimalista',
              category: 'Diseño Web & Tipografía',
              imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
              aspectRatio: 'square'
            }
          ]
        },
        bentoFeatures: {
          enabled: true,
          kicker: 'Nuestra Especialidad',
          title: 'Servicios multidisciplinares para proyectos ambiciosos.',
          subtitle: 'No creemos en soluciones genéricas. Cada entrega es una pieza de diseño a medida.',
          items: [
            {
              id: 'f1',
              title: 'Identidad de Marca & Sistemas de Diseño',
              description: 'Desde el naming y el logotipo hasta el manual de marca completo, tipografía propietaria y guías de tono de voz.',
              icon: 'Palette',
              tag: 'Branding 360°',
              colSpan: 2,
              statNumber: '+45',
              statLabel: 'Premios internacionales ganados'
            },
            {
              id: 'f2',
              title: 'Desarrollo Web Creativo (WebGL/3D)',
              description: 'Sitios web que cargan a 60 FPS con transiciones fluidas, shaders personalizados y microinteracciones irresistibles.',
              icon: 'Zap',
              tag: 'Web & 3D',
              colSpan: 1
            },
            {
              id: 'f3',
              title: 'Motion Graphics & 3D Rendering',
              description: 'Animaciones cinematográficas de producto en Cinema 4D y Blender que cautivan en redes y lanzamientos mundiales.',
              icon: 'Eye',
              tag: 'Motion & CGI',
              colSpan: 1
            },
            {
              id: 'f4',
              title: 'Estrategia de Lanzamiento & Conversión',
              description: 'Diseño enfocado a resultados: duplicamos las tasas de conversión mediante pruebas de usuario y narrativa persuasiva.',
              icon: 'TrendingUp',
              tag: 'Crecimiento',
              colSpan: 2,
              statNumber: '3.4x',
              statLabel: 'Multiplicador promedio de conversión de nuestros clientes'
            }
          ]
        },
        stats: {
          enabled: true,
          kicker: 'Historial de Éxito',
          title: 'Cifras que respaldan nuestra pasión por la excelencia.',
          subtitle: 'Diez años redefiniendo los límites del diseño digital.',
          items: [
            { id: 's1', value: '45+', label: 'Premios Awwwards & FWA', description: 'Reconocimiento internacional' },
            { id: 's2', value: '180+', label: 'Marcas Lanzadas', description: 'En Europa, EE.UU. y Asia' },
            { id: 's3', value: '100%', label: 'Entregas a Tiempo', description: 'Metodología ágil sin sorpresas' },
            { id: 's4', value: '98%', label: 'Retención de Clientes', description: 'Relaciones duraderas' }
          ]
        },
        testimonials: {
          enabled: true,
          title: 'Lo que dicen quienes ya trabajaron con nosotros.',
          subtitle: 'Fundadores y directores de marketing que confiaron su visión a Pulse.',
          items: [
            {
              id: 't1',
              name: 'Valeria Fontaine',
              role: 'Global Marketing VP',
              company: 'Kinetix Global',
              quote: 'Trabajar con Pulse fue una de las mejores decisiones estratégicas que hemos tomado. Su visión creativa llevó nuestro lanzamiento a las portadas de los principales medios de diseño del mundo.',
              avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
              rating: 5
            },
            {
              id: 't2',
              name: 'Mateo Sandoval',
              role: 'Co-Fundador & CEO',
              company: 'Aura Sound Labs',
              quote: 'El nivel de detalle en las animaciones y la calidad tipográfica superó todas nuestras expectativas. Consiguieron duplicar nuestras reservas previas al lanzamiento.',
              avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
              rating: 5
            }
          ]
        },
        pricing: {
          enabled: true,
          title: 'Modalidades de Colaboración',
          subtitle: 'Transparencia total en tiempos y entregables para proyectos de cualquier escala.',
          billingCycle: 'monthly',
          discountNote: 'Disponibilidad reservada con depósito del 30%',
          plans: [
            {
              id: 'pulse_sprint',
              name: 'Brand Sprint',
              tag: 'Lanzamiento Ágil (3 Semanas)',
              priceMonthly: '4,500€',
              priceAnnual: '4,500€',
              description: 'Para startups que necesitan una identidad visual completa y landing page de lanzamiento.',
              features: [
                'Logotipo, paleta cromática y tipografía',
                'Landing page interactiva responsive',
                'Kit de recursos para redes sociales',
                'Manual de marca básico en PDF',
                'Entrega en 21 días laborables'
              ],
              ctaText: 'Reservar Brand Sprint',
              ctaLink: '#contact-sprint',
              highlighted: false
            },
            {
              id: 'pulse_flagship',
              name: 'Experiencia Flagship',
              tag: 'El Más Solicitado (6 Semanas)',
              priceMonthly: '9,800€',
              priceAnnual: '9,800€',
              description: 'Transformación total de marca con interactividad 3D, múltiples páginas y CMS.',
              features: [
                'Sistema de identidad visual completo y naming',
                'Web a medida con animaciones WebGL/3D',
                'Renderizado CGI de producto en alta resolución',
                'Estrategia de contenidos y copywriting',
                'Integración de CMS y analítica avanzada',
                'Soporte y mantenimiento post-lanzamiento por 60 días'
              ],
              ctaText: 'Solicitar Flagship',
              ctaLink: '#contact-flagship',
              highlighted: true
            }
          ]
        },
        faq: {
          enabled: true,
          title: 'Preguntas Frecuentes sobre Colaborar con Pulse',
          subtitle: 'Todo sobre nuestros plazos, metodología y disponibilidad.',
          items: [
            {
              id: 'pf_1',
              question: '¿Cómo es el proceso de trabajo y las revisiones?',
              answer: 'Trabajamos en sprints semanales con sesiones de revisión en vivo vía Figma y Loom. Tienes acceso a un tablero en tiempo real donde ves los avances día a día sin misterios.'
            },
            {
              id: 'pf_2',
              question: '¿Qué tecnologías utilizáis para el desarrollo web?',
              answer: 'Utilizamos React, Next.js, Three.js, GSAP y Tailwind CSS para asegurar un rendimiento estelar, accesibilidad y tiempos de carga relámpago.'
            },
            {
              id: 'pf_3',
              question: '¿Cuántos proyectos aceptáis simultáneamente?',
              answer: 'Limitamos nuestro cupo a un máximo de 3 proyectos concurrentes para garantizar que los directores de arte seniors dediquen el 100% de su atención a tu marca.'
            }
          ]
        },
        ctaFinal: {
          enabled: true,
          kicker: 'Hablemos de tu Proyecto',
          title: '¿Listo para hacer algo legendario?',
          subtitle: 'Cuéntanos tu visión y te responderemos con una propuesta estratégica en menos de 24 horas.',
          primaryCta: { text: 'Agendar Llamada Estratégica', link: '#pricing' },
          secondaryCta: { text: 'Ver Presentación de Agencia (PDF)', link: '#deck' },
          backgroundStyle: 'glow'
        },
        footer: {
          copyright: '© 2026 Pulse Creative Studio S.L. Todos los derechos reservados.',
          legalLinks: [
            { label: 'Manifiesto de Diseño', href: '#manifesto' },
            { label: 'Aviso Legal', href: '#legal' },
            { label: 'Privacidad', href: '#privacy' }
          ],
          socialLinks: [
            { platform: 'Instagram', url: 'https://instagram.com' },
            { platform: 'Dribbble', url: 'https://dribbble.com' },
            { platform: 'Behance', url: 'https://behance.net' },
            { platform: 'Twitter / X', url: 'https://twitter.com' }
          ]
        }
      }
    }
  },

  // 6. CANVAS — Portafolio Personal Minimalista para Creadores & Diseñadores
  {
    id: 'canvas-portfolio',
    name: 'Canvas',
    tagline: 'Portafolio personal de diseño minimalista con galería interactiva, casos de estudio detallados y formulario de contratación',
    category: 'agencies',
    thumbnail: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
    description: 'Estética monocromática de autor, acento azul cobalto #3B82F6, tipografía limpia, hero con presentación personal, galería de casos de estudio, habilidades en cuadrícula bento, experiencia en pestañas y formulario de contacto.',
    accentColor: '#3B82F6',
    theme: 'light',
    defaultConfig: {
      templateId: 'canvas-portfolio',
      name: 'Lucas Varela — Portfolio',
      slug: 'lucas-varela',
      domain: 'lucasvarela.design',
      theme: 'light',
      accentColor: '#3B82F6',
      fontFamily: 'Inter, -apple-system, sans-serif',
      borderRadius: 16,
      published: true,
      sectionOrder: [
        'navbar',
        'hero',
        'gallery',
        'bentoFeatures',
        'tabs',
        'stats',
        'testimonials',
        'leadForm',
        'ctaFinal',
        'footer'
      ],
      seo: {
        title: 'Lucas Varela — Lead Product Designer & Design Systems Architect',
        description: 'Portafolio de diseño de producto digital, sistemas de diseño y dirección de arte para aplicaciones web y móviles.',
        keywords: 'product designer, portfolio diseno, ux ui, design systems, freelance designer'
      },
      sections: {
        navbar: {
          brandName: 'Lucas Varela',
          logoText: 'LUCAS VARELA',
          ctaText: 'Contactar',
          ctaLink: '#contact',
          links: [
            { label: 'Proyectos', href: '#gallery' },
            { label: 'Habilidades', href: '#features' },
            { label: 'Trayectoria', href: '#tabs' },
            { label: 'Recomendaciones', href: '#testimonials' }
          ],
          glassBlur: true,
          sticky: true
        },
        hero: {
          enabled: true,
          badge: 'Disponible para proyectos selectos Q3/Q4 2026',
          kicker: 'Product Designer & Creative Technologist',
          title: 'Diseño interfaces elegantes que simplifican',
          highlightTitle: 'lo complejo.',
          subtitle: 'Con más de 8 años de experiencia liderando diseño en startups respaldadas por Y Combinator y marcas internacionales. Especializado en SaaS, sistemas de diseño y tipografía de precisión.',
          primaryCta: { text: 'Explorar Casos de Estudio', link: '#gallery' },
          secondaryCta: { text: 'Descargar CV (PDF) →', link: '#contact' },
          imageUrl: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1600&q=80',
          style: 'centered'
        },
        gallery: {
          enabled: true,
          kicker: 'Casos de Estudio Destacados',
          title: 'Trabajos recientes con impacto medible.',
          subtitle: 'Una selección de proyectos de diseño de producto y sistemas digitales.',
          items: [
            {
              id: 'g1',
              title: 'Apex Financial — Rediseño de Banca de Inversión',
              category: 'Fintech & SaaS',
              imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
              aspectRatio: 'wide'
            },
            {
              id: 'g2',
              title: 'Lumina Design System — Biblioteca para 80 Desarrolladores',
              category: 'Design Systems',
              imageUrl: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
              aspectRatio: 'square'
            },
            {
              id: 'g3',
              title: 'Orbit Travel — App de Movilidad Eléctrica Compartida',
              category: 'Mobile iOS / Android',
              imageUrl: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80',
              aspectRatio: 'square'
            }
          ]
        },
        bentoFeatures: {
          enabled: true,
          kicker: 'Áreas de Especialización',
          title: 'Un enfoque integral desde la investigación hasta el código.',
          subtitle: 'Combino criterio estético de alto nivel con comprensión profunda de la arquitectura técnica.',
          items: [
            {
              id: 'f1',
              title: 'Diseño de Producto Digital de Extremo a Extremo',
              description: 'Desde los wireframes iniciales y flujos de usuario complejos hasta prototipos de alta fidelidad validados con pruebas reales.',
              icon: 'Compass',
              tag: 'Product Design',
              colSpan: 2,
              statNumber: '8+ Años',
              statLabel: 'Diseñando productos digitales escalables'
            },
            {
              id: 'f2',
              title: 'Sistemas de Diseño (Design Systems)',
              description: 'Estructuración de tokens, componentes modulares en Figma y sincronización directa con repositorios React.',
              icon: 'Boxes',
              tag: 'Figma & Tokens',
              colSpan: 1
            },
            {
              id: 'f3',
              title: 'Prototipado Interactivo Avanzado',
              description: 'Interacciones realistas en Framer y código para validar hipótesis antes de escribir la primera línea de backend.',
              icon: 'Zap',
              tag: 'Microinteracciones',
              colSpan: 1
            },
            {
              id: 'f4',
              title: 'Estrategia de UX & Optimización CRO',
              description: 'Auditorías heurísticas y diseño orientado a conversión que reducen la fricción en el onboarding y mejoran el NPS.',
              icon: 'TrendingUp',
              tag: 'Resultados de Negocio',
              colSpan: 2,
              statNumber: '+42%',
              statLabel: 'Aumento de retención promedio en clientes'
            }
          ]
        },
        tabs: {
          enabled: true,
          kicker: 'Experiencia Profesional',
          title: 'Empresas donde he dejado huella.',
          subtitle: 'Historial de roles y responsabilidades clave en mi trayectoria.',
          tabs: [
            {
              id: 'tab_lead',
              label: '2023 - Presente (Staff Designer)',
              icon: 'Award',
              title: 'Staff Designer en Kinetix Cloud',
              description: 'Liderazgo del equipo de producto compuesto por 12 diseñadores e ingenieros de frontend.',
              imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
              points: [
                'Rediseño completo de la suite analítica utilizada por más de 100k usuarios diarios',
                'Creación y gobernanza del sistema de diseño unificado Lumina',
                'Mentoría a diseñadores junior y establecimiento de estándares de calidad visual'
              ]
            },
            {
              id: 'tab_senior',
              label: '2020 - 2023 (Senior UX/UI)',
              icon: 'Compass',
              title: 'Senior Product Designer en Apex Financial',
              description: 'Diseño integral de la aplicación móvil de banca y plataforma web de tesorería.',
              imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
              points: [
                'Incremento de la tasa de conversión en el proceso de registro del 18% al 34%',
                'Diseño de flujos de transferencias internacionales instantáneas sin fricción',
                'Premio a la Mejor App Financiera en los FinTech Europe Awards 2022'
              ]
            }
          ]
        },
        stats: {
          enabled: true,
          kicker: 'Trayectoria en Cifras',
          title: 'Impacto contrastado en productos en producción.',
          subtitle: 'Resultados reales de colaboraciones con fundadores y equipos de producto.',
          items: [
            { id: 's1', value: '8+ Años', label: 'Experiencia Profesional', description: 'En startups y agencias de primer nivel' },
            { id: 's2', value: '30+', label: 'Productos Lanzados', description: 'En sectores fintech, saas y salud' },
            { id: 's3', value: '4.9/5', label: 'Satisfacción de Clientes', description: 'Valoración en plataformas freelance' },
            { id: 's4', value: '2', label: 'Premios Awwwards Site of Day', description: 'Reconocimiento de diseño interactivo' }
          ]
        },
        testimonials: {
          enabled: true,
          title: 'Lo que dicen quienes han colaborado conmigo.',
          subtitle: 'Comentarios directos de CEOs, directores de ingeniería y product managers.',
          items: [
            {
              id: 't1',
              name: 'Guillermo Aranda',
              role: 'CEO & Co-Fundador',
              company: 'Kinetix Labs',
              quote: 'Lucas tiene esa rara combinación de sensibilidad visual exquisita y mentalidad de producto implacable. No solo diseñó nuestra plataforma, sino que nos ayudó a clarificar nuestro modelo de negocio.',
              avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
              rating: 5
            },
            {
              id: 't2',
              name: 'Clara Sotomayor',
              role: 'VP of Engineering',
              company: 'Apex Digital Bank',
              quote: 'Los componentes de Lucas en Figma son un sueño para cualquier desarrollador. Todo está perfectamente organizado con variantes, autolayout y especificaciones claras que ahorran semanas de trabajo.',
              avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
              rating: 5
            }
          ]
        },
        leadForm: {
          enabled: true,
          kicker: 'Hablemos de tu Proyecto',
          title: '¿Tienes una idea en mente?',
          subtitle: 'Rellena este breve formulario y me pondré en contacto contigo en menos de 24 horas laborables.',
          submitButtonText: 'Enviar Propuesta de Proyecto',
          successTitle: '¡Mensaje Recibido con Éxito!',
          successMessage: 'Gracias por tu interés. Revisaré los detalles de tu proyecto y te responderé en breve con mi disponibilidad.',
          steps: [
            {
              id: 'step_1',
              stepNumber: 1,
              title: 'Datos de Contacto',
              subtitle: 'Cuéntame quién eres y cómo puedo contactarte.',
              fields: [
                { id: 'f_name', label: 'Nombre Completo', type: 'text', placeholder: 'Ej. Carolina Gómez', required: true },
                { id: 'f_email', label: 'Correo Electrónico', type: 'email', placeholder: 'carolina@tuempresa.com', required: true },
                { id: 'f_company', label: 'Empresa / Proyecto', type: 'text', placeholder: 'Nombre de tu startup o marca', required: false }
              ]
            },
            {
              id: 'step_2',
              stepNumber: 2,
              title: 'Detalles del Proyecto',
              subtitle: 'Alcance, presupuesto y plazos estimados.',
              fields: [
                {
                  id: 'f_service',
                  label: 'Tipo de Servicio Requerido',
                  type: 'select',
                  options: ['Diseño de Producto Completo (SaaS / Web)', 'Sistema de Diseño (Design System)', 'Rediseño de UX / UI', 'Consultoría Estratégica'],
                  required: true
                },
                {
                  id: 'f_budget',
                  label: 'Presupuesto Estimado',
                  type: 'select',
                  options: ['3,000€ - 5,000€', '5,000€ - 10,000€', '10,000€ - 20,000€', '+20,000€'],
                  required: true
                },
                { id: 'f_message', label: 'Breve descripción de la visión y objetivos', type: 'textarea', placeholder: 'Cuéntame el problema principal que quieres resolver...', required: true }
              ]
            }
          ]
        },
        ctaFinal: {
          enabled: true,
          kicker: 'Colaboración Directa',
          title: 'Construyamos algo extraordinario juntos.',
          subtitle: 'Abierto a proyectos de diseño de producto, asesoramiento en sistemas de diseño y consultoría de UX.',
          primaryCta: { text: 'Escribirme por Correo', link: 'mailto:lucas@varela.design' },
          secondaryCta: { text: 'Conectar en LinkedIn', link: 'https://linkedin.com' },
          backgroundStyle: 'minimal'
        },
        footer: {
          copyright: '© 2026 Lucas Varela. Diseñado con precisión y respeto por la tipografía.',
          legalLinks: [
            { label: 'CV Completo', href: '#cv' },
            { label: 'Aviso Legal', href: '#legal' },
            { label: 'Privacidad', href: '#privacy' }
          ],
          socialLinks: [
            { platform: 'Twitter / X', url: 'https://twitter.com' },
            { platform: 'Dribbble', url: 'https://dribbble.com' },
            { platform: 'GitHub', url: 'https://github.com' },
            { platform: 'LinkedIn', url: 'https://linkedin.com' }
          ]
        }
      }
    }
  },

  // 7. STUDIO — Agencia Editorial & Dirección de Arte de Lujo
  {
    id: 'studio-agency',
    name: 'Studio',
    tagline: 'Agencia de diseño editorial, tipografía de autor, libros de arte y dirección creativa para marcas icónicas',
    category: 'agencies',
    thumbnail: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80',
    description: 'Estética editorial refinada en tonos lino y carbón #D97706, tipografía serif noble, hero con fotografía de autor, galería de publicaciones físicas y digitales, servicios de imprenta fina y testimonios culturales.',
    accentColor: '#D97706',
    theme: 'dark',
    defaultConfig: {
      templateId: 'studio-agency',
      name: 'Studio Atelier Editorial',
      slug: 'studio-atelier',
      domain: 'studioatelier.art',
      theme: 'dark',
      accentColor: '#D97706',
      fontFamily: 'Inter, -apple-system, sans-serif',
      borderRadius: 12,
      published: true,
      sectionOrder: [
        'navbar',
        'hero',
        'logos',
        'gallery',
        'bentoFeatures',
        'productHighlight',
        'stats',
        'testimonials',
        'faq',
        'ctaFinal',
        'footer'
      ],
      seo: {
        title: 'Studio Atelier — Dirección de Arte, Diseño Editorial & Publicaciones de Lujo',
        description: 'Concebimos libros de arte, identidades visuales para fundaciones culturales y piezas impresas de coleccionista.',
        keywords: 'diseño editorial, direccion de arte, libros de arte, imprenta fina, tipografia'
      },
      sections: {
        navbar: {
          brandName: 'Studio',
          logoText: 'STUDIO ATELIER',
          ctaText: 'Solicitar Dosier',
          ctaLink: '#contact',
          links: [
            { label: 'Publicaciones', href: '#gallery' },
            { label: 'Disciplina', href: '#features' },
            { label: 'El Libro', href: '#product' },
            { label: 'Trayectoria', href: '#stats' },
            { label: 'Contacto', href: '#faq' }
          ],
          glassBlur: true,
          sticky: true
        },
        hero: {
          enabled: true,
          badge: 'Premio Nacional de Diseño Editorial 2025 • Selección Frieze',
          kicker: 'Atelier de Dirección Creativa',
          title: 'El peso de la palabra.',
          highlightTitle: 'La belleza del papel.',
          subtitle: 'Diseñamos publicaciones, identidades y experiencias culturales que resisten el paso del tiempo y celebran el oficio del libro.',
          primaryCta: { text: 'Explorar Publicaciones', link: '#gallery' },
          secondaryCta: { text: 'Conocer Nuestra Metodología →', link: '#features' },
          imageUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1600&q=80',
          style: 'centered'
        },
        logos: {
          enabled: true,
          title: 'MUSEOS, CASAS EDITORIALES Y FUNDACIONES CON LAS QUE COLABORAMOS',
          items: [
            { id: 'l1', name: 'Museo Reina Sofía', tagline: 'Exhibition Catalogues' },
            { id: 'l2', name: 'Fondation Cartier', tagline: 'Art Monographs' },
            { id: 'l3', name: 'Taschen Books', tagline: 'Limited Editions' },
            { id: 'l4', name: 'La Biennale di Venezia', tagline: 'Identity & Books' },
            { id: 'l5', name: 'Phaidon Press', tagline: 'Architecture Monograph' }
          ]
        },
        gallery: {
          enabled: true,
          kicker: 'Archivo de Obras',
          title: 'Ediciones impresas y proyectos culturales.',
          subtitle: 'Cada publicación es tratada como un objeto de arte único con papeles especiales y encuadernación artesanal.',
          items: [
            {
              id: 'g1',
              title: 'Materia & Silencio — Monografía del Escultor Antoni Tàpies',
              category: 'Libro de Arte de Edición Limitada',
              imageUrl: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1200&q=80',
              aspectRatio: 'wide'
            },
            {
              id: 'g2',
              title: 'Cahiers d\'Architecture — Revista Semestral de Urbanismo',
              category: 'Diseño Periódico & Tipografía',
              imageUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80',
              aspectRatio: 'square'
            },
            {
              id: 'g3',
              title: 'Identidad para el Festival de Música Antigua de Arles',
              category: 'Branding Cultural & Cartelería',
              imageUrl: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80',
              aspectRatio: 'square'
            }
          ]
        },
        bentoFeatures: {
          enabled: true,
          kicker: 'Nuestras Disciplinas',
          title: 'Cuidado obsesivo del detalle tipográfico.',
          subtitle: 'Desde la selección del gramaje de papel de algodón hasta la comisaría de fotografía editorial.',
          items: [
            {
              id: 'f1',
              title: 'Diseño Editorial & Maquetación de Gran Formato',
              description: 'Retículas rigurosas construidas sobre cánones clásicos combinadas con experimentación tipográfica contemporánea.',
              icon: 'BookOpen',
              tag: 'Editorial',
              colSpan: 2,
              statNumber: '140+',
              statLabel: 'Libros y monografías editadas'
            },
            {
              id: 'f2',
              title: 'Dirección de Arte & Comisariado Fotográfico',
              description: 'Selección y producción de sesiones fotográficas que capturan la esencia íntima de la obra y el autor.',
              icon: 'Eye',
              tag: 'Fotografía',
              colSpan: 1
            },
            {
              id: 'f3',
              title: 'Imprenta Fina & Encuadernación Artesanal',
              description: 'Supervisión en talleres de prensas tradicionales: estampados en seco, pan de oro y cosido japonés.',
              icon: 'Layers',
              tag: 'Artesanía',
              colSpan: 1
            },
            {
              id: 'f4',
              title: 'Identidades para Instituciones de Cultura',
              description: 'Sistemas visuales pensados para perdurar décadas sin verse afectados por las modas efímeras.',
              icon: 'Award',
              tag: 'Branding Cultural',
              colSpan: 2,
              statNumber: '15 Años',
              statLabel: 'De trayectoria independiente en Europa'
            }
          ]
        },
        productHighlight: {
          enabled: true,
          kicker: 'Publicación del Año',
          title: 'Un homenaje tangible al espacio y la luz.',
          subtitle: 'Conoce los detalles técnicos de nuestra última publicación premiada.',
          description: 'Impreso en Milán sobre papel Fedrigoni de 170g con tinta negra carbón enriquecida y encuadernación en tela de lino belga.',
          imageUrl: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1600&q=80',
          layout: 'image-right',
          ctaText: 'Solicitar Ejemplar de Coleccionista',
          ctaLink: '#contact',
          specs: [
            { label: 'Papel Interior', value: 'Fedrigoni 170g', detail: 'Algodón puro libre de ácidos' },
            { label: 'Tipografía', value: 'Canela Fine & Neue Haas', detail: 'Familia a medida para el título' },
            { label: 'Tirada', value: '750 Ejemplares', detail: 'Numerados a mano' }
          ]
        },
        stats: {
          enabled: true,
          kicker: 'Reconocimiento',
          title: 'La huella de nuestro atelier en el mundo editorial.',
          subtitle: 'Obras presentes en bibliotecas nacionales y colecciones privadas.',
          items: [
            { id: 's1', value: '140+', label: 'Libros Publicados', description: 'En 12 países' },
            { id: 's2', value: '18', label: 'Premios de Tipografía', description: 'TDC New York & D&AD' },
            { id: 's3', value: '100%', label: 'Papeles Sostenibles FSC', description: 'Producción ética' },
            { id: 's4', value: '4', label: 'Monografías en la Tate Library', description: 'Fondos permanentes' }
          ]
        },
        testimonials: {
          enabled: true,
          title: 'Testimonios de directores de museos y autores.',
          subtitle: 'Palabras de quienes han confiado el legado de su obra a nuestras manos.',
          items: [
            {
              id: 't1',
              name: 'Dr. Jean-Luc Moreau',
              role: 'Conservador Jefe de Exposiciones',
              company: 'Fondation d\'Art Contemporain Paris',
              quote: 'Studio Atelier entiende el libro de arte no como un simple contenedor de imágenes, sino como una extensión física y espacial de la propia exposición. La sensibilidad de su equipo es inigualable.',
              avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
              rating: 5
            },
            {
              id: 't2',
              name: 'Beatrice Van Der Berg',
              role: 'Directora Editorial',
              company: 'Zurich Art Press',
              quote: 'Su dominio del ritmo editorial y la micro-tipografía coloca a cada publicación en una categoría aparte. Los coleccionistas agotan las ediciones en semanas.',
              avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
              rating: 5
            }
          ]
        },
        faq: {
          enabled: true,
          title: 'Preguntas Frecuentes sobre el Atelier',
          subtitle: 'Detalles sobre presupuestos de edición, tiradas y supervisión en imprenta.',
          items: [
            {
              id: 'sf_1',
              question: '¿Qué tipo de proyectos editoriales realizáis?',
              answer: 'Realizamos monografías de artistas, catálogos de exposiciones para museos y galerías, identidades visuales institucionales, revistas culturales y libros corporativos de coleccionista.'
            },
            {
              id: 'sf_2',
              question: '¿Supervisáis el proceso de impresión física en máquina?',
              answer: 'Sí. Un director de arte del atelier asiste presencialmente a la imprenta durante la tirada para calibrar los tonos de tinta, verificar las pruebas de color y firmar el visto bueno antes de la encuadernación.'
            }
          ]
        },
        ctaFinal: {
          enabled: true,
          kicker: 'Iniciemos un Diálogo',
          title: 'Demos forma tangible a tu próximo proyecto.',
          subtitle: 'Aceptamos encargos editoriales para el curso 2026/2027.',
          primaryCta: { text: 'Contactar con el Atelier', link: 'mailto:atelier@studioatelier.art' },
          secondaryCta: { text: 'Ver Catálogo de Muestras', link: '#gallery' },
          backgroundStyle: 'minimal'
        },
        footer: {
          copyright: '© 2026 Studio Atelier Editorial S.L. París • Madrid • Milán.',
          legalLinks: [
            { label: 'Archivo Histórico', href: '#archive' },
            { label: 'Aviso Legal', href: '#legal' },
            { label: 'Privacidad', href: '#privacy' }
          ],
          socialLinks: [
            { platform: 'Instagram', url: 'https://instagram.com' },
            { platform: 'Vimeo', url: 'https://vimeo.com' }
          ]
        }
      }
    }
  }
];
