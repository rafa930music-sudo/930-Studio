import { TemplateDefinition } from '../../types';

export const SAAS_TEMPLATES: TemplateDefinition[] = [
  // 1. NEXUS — SaaS Minimalista Todo-en-Uno (Light Theme)
  {
    id: 'nexus-saas',
    name: 'Nexus',
    tagline: 'Plataforma colaborativa de alta velocidad con métricas en tiempo real y flujos de trabajo unificados',
    category: 'saas',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    description: 'Estética blanca pulcra, acento azul #0071E3, tipografía Inter, hero con vista previa interactiva, logotipos de confianza, cuadrícula bento, métricas dinámicas, pestañas interactivas, tabla de planes y acordeón FAQ.',
    accentColor: '#0071E3',
    theme: 'light',
    defaultConfig: {
      templateId: 'nexus-saas',
      name: 'Nexus Workspace',
      slug: 'nexus-workspace',
      domain: 'nexusworkspace.com',
      theme: 'light',
      accentColor: '#0071E3',
      fontFamily: 'Inter, -apple-system, sans-serif',
      borderRadius: 16,
      published: true,
      sectionOrder: [
        'navbar',
        'hero',
        'logos',
        'bentoFeatures',
        'productHighlight',
        'stats',
        'tabs',
        'testimonials',
        'pricing',
        'faq',
        'ctaFinal',
        'footer'
      ],
      seo: {
        title: 'Nexus — La plataforma de gestión ágil para equipos modernos',
        description: 'Coordina proyectos, comunicaciones y analíticas operativas en un solo entorno unificado sin fricción.',
        keywords: 'saas, productividad, gestion de proyectos, analitica en vivo, colaboracion en tiempo real'
      },
      sections: {
        navbar: {
          brandName: 'Nexus',
          logoText: 'NEXUS',
          ctaText: 'Comenzar Prueba',
          ctaLink: '#pricing',
          links: [
            { label: 'Producto', href: '#product' },
            { label: 'Características', href: '#features' },
            { label: 'Módulos', href: '#tabs' },
            { label: 'Planes', href: '#pricing' },
            { label: 'FAQ', href: '#faq' }
          ],
          glassBlur: true,
          sticky: true
        },
        hero: {
          enabled: true,
          badge: 'Versión 4.2 disponible • Arquitectura sub-milisegundo',
          kicker: 'Productividad Sin Fricción',
          title: 'La plataforma todo-en-uno para',
          highlightTitle: 'equipos modernos.',
          subtitle: 'Coordina proyectos estratégicos, comunicación síncrona y analíticas de rendimiento en un único panel de control intuitivo.',
          primaryCta: { text: 'Comenzar Prueba Gratuita', link: '#pricing' },
          secondaryCta: { text: 'Ver Demostración en Vivo →', link: '#product' },
          imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80',
          style: 'centered'
        },
        logos: {
          enabled: true,
          title: 'EMPRESAS QUE GESTIONAN SUS OPERACIONES CON NEXUS',
          items: [
            { id: 'l1', name: 'Acme Corp', tagline: 'Enterprise Software' },
            { id: 'l2', name: 'Globex Digital', tagline: 'Global Logistics' },
            { id: 'l3', name: 'Initech Labs', tagline: 'Fintech Solutions' },
            { id: 'l4', name: 'Umbrella Tech', tagline: 'Cloud Systems' },
            { id: 'l5', name: 'Stark Industries', tagline: 'Advanced Hardware' }
          ]
        },
        bentoFeatures: {
          enabled: true,
          kicker: 'Rendimiento & Precisión',
          title: 'Herramientas potentes para acelerar el ritmo de entrega.',
          subtitle: 'Todo el ciclo de vida de tus proyectos conectado mediante una interfaz limpia y sin interrupciones.',
          items: [
            {
              id: 'f1',
              title: 'Velocidad de Carga Instantánea',
              description: 'Arquitectura optimizada en el borde que procesa actualizaciones complejas en menos de 15 milisegundos.',
              icon: 'Zap',
              tag: '< 15ms Latencia',
              colSpan: 2,
              statNumber: '10x',
              statLabel: 'Más rápido que las herramientas convencionales'
            },
            {
              id: 'f2',
              title: 'Seguridad Empresarial Zero-Trust',
              description: 'Cifrado de extremo a extremo AES-256 en reposo y en tránsito con conformidad estricta SOC2 Tipo II.',
              icon: 'ShieldCheck',
              tag: 'Zero-Trust',
              colSpan: 1
            },
            {
              id: 'f3',
              title: 'Vistas Flexibles y Personalizables',
              description: 'Alterna al instante entre tableros Kanban, diagramas de Gantt, calendarios maestros y tablas relacionales.',
              icon: 'Layers',
              tag: '100% Adaptable',
              colSpan: 1
            },
            {
              id: 'f4',
              title: 'Automatización de Tareas Recurrentes',
              description: 'Configura disparadores lógicos, asignaciones automáticas y notificaciones sin necesidad de escribir código.',
              icon: 'Workflow',
              tag: 'Sin Código',
              colSpan: 2,
              statNumber: '14h',
              statLabel: 'Ahorradas por semana y empleado'
            }
          ]
        },
        productHighlight: {
          enabled: true,
          badge: 'Centro de Comando',
          kicker: 'Visión Global',
          title: 'Un panel unificado donde nada se escapa del control.',
          subtitle: 'Reemplaza hojas de cálculo dispersas y cadenas interminables de correos con un tablero visual claro.',
          description: 'Monitorea el progreso de sprints, asignaciones de carga laboral, presupuestos ejecutados y cuellos de botella en tiempo real con exportación instantánea de informes ejecutivos en PDF y CSV.',
          imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80',
          specs: [
            { label: 'Sincronización', value: 'Bilateral en tiempo real con WebSockets' },
            { label: 'Integraciones', value: 'Más de 140 conectores nativos para Slack, GitHub y Jira' },
            { label: 'Disponibilidad', value: '99.99% de SLA garantizado por contrato' }
          ]
        },
        stats: {
          enabled: true,
          items: [
            { id: 's1', value: '45.000+', label: 'Equipos Activos en Todo el Mundo' },
            { id: 's2', value: '99.99%', label: 'Disponibilidad de Servidores SLA' },
            { id: 's3', value: '4.9/5', label: 'Puntuación Promedio de Satisfacción' },
            { id: 's4', value: '62%', label: 'Aceleración en Tiempos de Entrega' }
          ]
        },
        tabs: {
          enabled: true,
          title: 'Módulos Especializados para Cada Departamento',
          tabs: [
            {
              id: 'tab_dev',
              label: 'Ingeniería & Producto',
              title: 'Gestión de Sprints y Backlog Técnico',
              description: 'Vinculación directa con repositorios de código, seguimiento de incidencias, trazabilidad de despliegues y métricas DORA.',
              imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1000&q=80',
              points: [
                'Sincronización automática de ramas y Pull Requests',
                'Gráficos de velocidad de equipo y Burn-down en vivo',
                'Gestión de deuda técnica y priorización matricial'
              ]
            },
            {
              id: 'tab_ops',
              label: 'Operaciones & Negocio',
              title: 'Planificación de Capacidad y Recursos',
              description: 'Visualiza la carga de trabajo de cada miembro del equipo para evitar la saturación y optimizar la asignación presupuestaria.',
              imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1000&q=80',
              points: [
                'Mapas de calor de disponibilidad y calendarios de ausencias',
                'Alertas tempranas de riesgo en fechas límite críticas',
                'Control de horas facturables y márgenes por proyecto'
              ]
            },
            {
              id: 'tab_exec',
              label: 'Dirección Ejecutiva',
              title: 'Informes de Alto Nivel y OKRs',
              description: 'Consolida objetivos estratégicos y resultados clave con actualización automática del progreso de toda la organización.',
              imageUrl: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=80',
              points: [
                'Cuadros de mando consolidados exportables en un clic',
                'Alineación piramidal de objetivos empresariales a tareas',
                'Histórico de rendimiento con análisis comparativo trimestral'
              ]
            }
          ]
        },
        testimonials: {
          enabled: true,
          title: 'Lo que dicen las empresas que han escalado con Nexus.',
          items: [
            {
              id: 't1',
              author: 'Elena Morales',
              name: 'Elena Morales',
              role: 'VP de Ingeniería en FinPay Global',
              company: 'FinPay Global',
              quote: 'Nexus redujo nuestras reuniones de sincronización en un 60%. La visibilidad del estado de cada proyecto es tan limpia que el equipo ejecuta con una autonomía sin precedentes.',
              avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
              rating: 5
            },
            {
              id: 't2',
              author: 'Marcos Benítez',
              name: 'Marcos Benítez',
              role: 'Director de Operaciones en LogisTech',
              company: 'LogisTech',
              quote: 'Migramos más de 200 proyectos desde tres herramientas diferentes en menos de 48 horas. La curva de aprendizaje fue prácticamente nula para todo el departamento.',
              avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
              rating: 5
            },
            {
              id: 't3',
              author: 'Clara Valverde',
              name: 'Clara Valverde',
              role: 'Head of Product en CloudWave',
              company: 'CloudWave',
              quote: 'La velocidad de la interfaz es adictiva. No hay retardos ni esperas al abrir tableros con miles de tareas. Es la mejor inversión en software de nuestro año.',
              avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
              rating: 5
            }
          ]
        },
        pricing: {
          enabled: true,
          title: 'Planes Diseñados para Cada Escala de Trabajo',
          billingCycle: 'monthly',
          plans: [
            {
              id: 'p1',
              name: 'Starter',
              priceMonthly: '12€',
              priceAnnual: '10€',
              description: 'Para profesionales independientes y equipos de hasta 5 personas que inician su actividad.',
              features: [
                'Hasta 5 miembros incluidos',
                'Tableros Kanban y listas ilimitadas',
                '5 GB de almacenamiento en la nube',
                'Histórico de actividad de 30 días',
                'Soporte por correo electrónico en 24h'
              ],
              highlighted: false,
              ctaText: 'Comenzar Prueba'
            },
            {
              id: 'p2',
              name: 'Professional Pro',
              priceMonthly: '29€',
              priceAnnual: '24€',
              description: 'Para organizaciones en crecimiento que requieren flujos automatizados y reportes detallados.',
              features: [
                'Miembros de equipo ilimitados',
                'Vistas Gantt, Calendario y Tablas relacionales',
                'Automatizaciones avanzadas sin límite',
                '100 GB de almacenamiento por usuario',
                'Permisos granulares por rol y proyecto',
                'Soporte prioritario por chat 24/7'
              ],
              highlighted: true,
              ctaText: 'Elegir Plan Pro'
            },
            {
              id: 'p3',
              name: 'Enterprise Matrix',
              priceMonthly: '69€',
              priceAnnual: '59€',
              description: 'Para grandes corporaciones que exigen máxima seguridad, SSO personalizado y SLA dedicado.',
              features: [
                'Todo lo del plan Professional Pro',
                'Autenticación Single Sign-On (SAML / Okta)',
                'Auditoría de accesos y registros forenses',
                'Gerente de cuenta técnico asignado',
                'SLA garantizado del 99.99% por contrato',
                'Despliegue opcional en VPC privada'
              ],
              highlighted: false,
              ctaText: 'Contactar a Ventas'
            }
          ]
        },
        faq: {
          enabled: true,
          title: 'Preguntas Frecuentes',
          items: [
            {
              id: 'q1',
              question: '¿Puedo migrar mis proyectos desde otras plataformas existentes?',
              answer: 'Sí. Nexus incluye un asistente de importación en un solo clic compatible con Trello, Asana, Jira, Notion y archivos CSV estándar, conservando miembros asignados, fechas límite, etiquetas y adjuntos intactos.'
            },
            {
              id: 'q2',
              question: '¿Cómo garantizan la seguridad y confidencialidad de nuestros datos?',
              answer: 'Toda la información se cifra mediante algoritmos AES-256 en reposo y TLS 1.3 en tránsito. Realizamos auditorías externas anuales de cumplimiento SOC2 Tipo II e ISO 27001, con centros de datos alojados en territorio de la Unión Europea.'
            },
            {
              id: 'q3',
              question: '¿Existe algún período de prueba antes de contratar un plan de pago?',
              answer: 'Ofrecemos 14 días de prueba completa con todas las características del plan Professional Pro desbloqueadas, sin necesidad de ingresar tarjeta de crédito ni compromiso de permanencia.'
            },
            {
              id: 'q4',
              question: '¿Qué sucede si superamos el número de usuarios previsto?',
              answer: 'Puedes añadir o dar de baja licencias en cualquier instante desde el panel de facturación. El coste se ajustará automáticamente de manera prorrateada al final del ciclo mensual.'
            },
            {
              id: 'q5',
              question: '¿Tienen aplicación móvil y de escritorio disponible?',
              answer: 'Contamos con aplicaciones nativas para macOS, Windows, Linux, iOS y Android con sincronización en segundo plano y modo sin conexión completo.'
            },
            {
              id: 'q6',
              question: '¿Cómo funciona el servicio de asistencia técnica para empresas?',
              answer: 'Los planes profesionales cuentan con soporte continuo por chat y correo con respuesta media inferior a 15 minutos, mientras que los clientes Enterprise disponen de un ingeniero de soporte dedicado.'
            }
          ]
        },
        ctaFinal: {
          enabled: true,
          title: 'Organiza el trabajo de tu equipo con claridad total.',
          subtitle: 'Únete a más de 45.000 organizaciones que han optimizado sus operaciones diarias.',
          primaryCta: { text: 'Empezar Gratis Ahora', link: '#pricing' }
        },
        footer: {
          copyright: '© 2026 Nexus Workspace Technologies Inc. Todos los derechos reservados.',
          legalLinks: [
            { label: 'Privacidad y RGPD', href: '#privacy' },
            { label: 'Términos de Servicio', href: '#terms' },
            { label: 'Seguridad', href: '#security' }
          ],
          socialLinks: [
            { platform: 'Twitter', url: 'https://twitter.com' },
            { platform: 'LinkedIn', url: 'https://linkedin.com' },
            { platform: 'GitHub', url: 'https://github.com' }
          ]
        }
      }
    }
  },

  // 2. QUANTUM — Cloud Infrastructure & DevOps (Dark Neon Cyan Theme)
  {
    id: 'quantum-dark-saas',
    name: 'Quantum Infrastructure',
    tagline: 'Plataforma en la nube distribuida para despliegues globales de microservicios con latencia ultra baja',
    category: 'saas',
    thumbnail: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
    description: 'Estética tecnológica en negro profundo #0A0A0F, acento cian neón #00E5FF, tipografía Inter, monitoreo en tiempo real, mapas de red globales y seguridad perimetral para clústeres Kubernetes.',
    accentColor: '#00E5FF',
    theme: 'dark',
    defaultConfig: {
      templateId: 'quantum-dark-saas',
      name: 'Quantum Cloud Engine',
      slug: 'quantum-cloud',
      domain: 'quantumcloud.io',
      theme: 'dark',
      accentColor: '#00E5FF',
      fontFamily: 'Inter, -apple-system, sans-serif',
      borderRadius: 14,
      published: true,
      sectionOrder: [
        'navbar',
        'hero',
        'logos',
        'bentoFeatures',
        'productHighlight',
        'stats',
        'tabs',
        'testimonials',
        'pricing',
        'faq',
        'ctaFinal',
        'footer'
      ],
      seo: {
        title: 'Quantum — Infraestructura Cloud & Orquestación Global',
        description: 'Despliega microservicios y contenedores en más de 280 puntos de presencia con autoescalado elástico.',
        keywords: 'cloud infrastructure, devops, kubernetes, edge computing, serverless, microservicios'
      },
      sections: {
        navbar: {
          brandName: 'Quantum Cloud',
          logoText: 'QUANTUM // CLOUD',
          ctaText: 'Crear Clúster',
          ctaLink: '#pricing',
          links: [
            { label: 'Red Global', href: '#features' },
            { label: 'Arquitectura', href: '#product' },
            { label: 'Rendimiento', href: '#stats' },
            { label: 'Planes', href: '#pricing' },
            { label: 'FAQ', href: '#faq' }
          ],
          glassBlur: true,
          sticky: true
        },
        hero: {
          enabled: true,
          badge: 'Red perimetral Anycast • 280+ Ciudades Conectadas',
          kicker: 'Infraestructura de Próxima Generación',
          title: 'Despliega código global en el borde',
          highlightTitle: 'en milisegundos.',
          subtitle: 'Orquestación nativa para contenedores, bases de datos distribuidas y microservicios con conmutación por error instantánea y cero tiempo de inactividad.',
          primaryCta: { text: 'Lanzar Primer Clúster Gratis', link: '#pricing' },
          secondaryCta: { text: 'Explorar Documentación CLI →', link: '#features' },
          imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=80',
          style: 'centered'
        },
        logos: {
          enabled: true,
          title: 'INFRAESTRUCTURA DE CONFIANZA PARA APLICACIONES CRÍTICAS',
          items: [
            { id: 'l1', name: 'Vanguard Systems', tagline: 'Global FinTech' },
            { id: 'l2', name: 'AeroStream Telecom', tagline: '5G Core Network' },
            { id: 'l3', name: 'HyperData Labs', tagline: 'Big Data Processing' },
            { id: 'l4', name: 'SecureVault', tagline: 'Identity Cloud' }
          ]
        },
        bentoFeatures: {
          enabled: true,
          kicker: 'Ingeniería Distribuida',
          title: 'Diseñado para cargas de trabajo extremas sin tolerancia a fallos.',
          subtitle: 'Autoescalado horizontal automático basado en telemetría de tráfico en tiempo real.',
          items: [
            {
              id: 'f1',
              title: 'Ruteo Inteligente Anycast BGP',
              description: 'Encamina las solicitudes de tus usuarios hacia el centro de datos más cercano, reduciendo la latencia de ida y vuelta a mínimos históricos.',
              icon: 'Globe',
              tag: '< 8ms RTT',
              colSpan: 2,
              statNumber: '280+',
              statLabel: 'Puntos de Presencia Edge'
            },
            {
              id: 'f2',
              title: 'Protección Anti-DDoS Layer 7',
              description: 'Mitigación volumétrica de ataques en tiempo real con capacidad de absorción de tráfico hostil de hasta 25 Tbps.',
              icon: 'Shield',
              tag: '25 Tbps Escudo',
              colSpan: 1
            },
            {
              id: 'f3',
              title: 'Bases de Datos con Replicación Global',
              description: 'Lecturas locales ultrarrápidas y escrituras sincronizadas con consistencia multi-región garantizada.',
              icon: 'Database',
              tag: 'Multi-Region',
              colSpan: 1
            },
            {
              id: 'f4',
              title: 'Despliegues Automáticos GitOps',
              description: 'Vincula tu repositorio Git y genera compilaciones inmutables con pruebas de humo y reversión instantánea ante anomalías.',
              icon: 'GitBranch',
              tag: 'CI/CD Nativo',
              colSpan: 2,
              statNumber: '0.4s',
              statLabel: 'Tiempo medio de cold-start'
            }
          ]
        },
        productHighlight: {
          enabled: true,
          badge: 'Observabilidad Completa',
          kicker: 'Métricas de Sistema',
          title: 'Telemetría granular sin sobrecarga de rendimiento.',
          subtitle: 'Trazas distribuidas, registros estructurados y alertas proactivas en una sola consola unificada.',
          description: 'Inspecciona llamadas HTTP, consultas a bases de datos y utilización de CPU/memoria con resolución milimétrica para diagnosticar cuellos de botella antes de que afecten a los usuarios finales.',
          imageUrl: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=1400&q=80',
          specs: [
            { label: 'Monitoreo', value: 'Resolución de 1 segundo con retención de métricas de 90 días' },
            { label: 'Contenedores', value: 'Soporte estándar OCI para Docker, Podman y Kubernetes' },
            { label: 'Red', value: 'Conexiones dedicadas de fibra oscura de 100 Gbps entre centros neurálgicos' }
          ]
        },
        stats: {
          enabled: true,
          items: [
            { id: 's1', value: '99.999%', label: 'Disponibilidad Anual de Red' },
            { id: 's2', value: '18B+', label: 'Peticiones Procesadas por Día' },
            { id: 's3', value: '7ms', label: 'Latencia Media Global' },
            { id: 's4', value: '25 Tbps', label: 'Capacidad de Mitigación DDoS' }
          ]
        },
        tabs: {
          enabled: true,
          title: 'Arquitectura Diseñada para Equipos de Ingeniería',
          tabs: [
            {
              id: 'tab_compute',
              label: 'Cómputo Serverless',
              title: 'Funciones en el Borde con Arranque Inmediato',
              description: 'Ejecuta lógica backend sin necesidad de aprovisionar ni administrar máquinas virtuales.',
              imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1000&q=80',
              points: [
                'Cold-starts inferiores a 5 milisegundos con aislamiento V8',
                'Facturación por milisegundo de ejecución real consumida',
                'Variables de entorno cifradas con gestión de secretos por hardware'
              ]
            },
            {
              id: 'tab_storage',
              label: 'Almacenamiento de Objetos',
              title: 'Almacenamiento Global S3-Compatible',
              description: 'Guarda activos estáticos, copias de seguridad y archivos multimedia con distribución CDN automática.',
              imageUrl: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1000&q=80',
              points: [
                'Durabilidad de datos calculada en 99.999999999% (11 nueves)',
                'Cero costes por transferencia de datos de salida (Egress Free)',
                'Políticas automáticas de ciclo de vida y archivo frío'
              ]
            }
          ]
        },
        testimonials: {
          enabled: true,
          title: 'Ingenieros líderes que confían su infraestructura a Quantum.',
          items: [
            {
              id: 't1',
              author: 'Sergio Rivas',
              name: 'Sergio Rivas',
              role: 'Chief Technology Officer en Kinesis Stream',
              company: 'Kinesis Stream',
              quote: 'Quantum nos permitió escalar de 50.000 a 4 millones de conexiones concurrentes en cuestión de minutos durante un evento masivo sin una sola caída de servicio.',
              avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
              rating: 5
            },
            {
              id: 't2',
              author: 'Beatriz Navarro',
              name: 'Beatriz Navarro',
              role: 'Lead Site Reliability Engineer en DataVault',
              company: 'DataVault',
              quote: 'La automatización de despliegues y la observabilidad integrada redujeron nuestro tiempo medio de resolución de incidencias en un 80%. Es la infraestructura que siempre soñamos tener.',
              avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80',
              rating: 5
            }
          ]
        },
        pricing: {
          enabled: true,
          title: 'Precios Claros Basados en Recursos Reales',
          billingCycle: 'monthly',
          plans: [
            {
              id: 'p1',
              name: 'Developer Node',
              priceMonthly: '19€',
              priceAnnual: '15€',
              description: 'Para proyectos personales, entornos de desarrollo y microservicios ligeros.',
              features: [
                '2 vCPU dedicadas con 4 GB de RAM',
                '50 GB de almacenamiento NVMe ultra rápido',
                '2 TB de transferencia de red mensual',
                'Certificados SSL automáticos ilimitados',
                'Soporte comunitario en Discord y foros'
              ],
              highlighted: false,
              ctaText: 'Desplegar Node'
            },
            {
              id: 'p2',
              name: 'Cluster Pro',
              priceMonthly: '89€',
              priceAnnual: '75€',
              description: 'Para aplicaciones de producción con requisitos de alta disponibilidad y autoescalado.',
              features: [
                '8 vCPU dedicadas con 16 GB de RAM',
                '250 GB de almacenamiento NVMe redundado',
                'Transferencia de datos mensual ilimitada',
                'Autoescalado horizontal de 1 a 20 réplicas',
                'Copias de seguridad automáticas cada hora',
                'Soporte técnico 24/7 con SLA de 15 minutos'
              ],
              highlighted: true,
              ctaText: 'Crear Clúster Pro'
            },
            {
              id: 'p3',
              name: 'Enterprise Dedicated',
              priceMonthly: '299€',
              priceAnnual: '249€',
              description: 'Para arquitecturas corporativas con aislamiento físico, red dedicada y cumplimiento específico.',
              features: [
                'Servidores bare-metal dedicados a medida',
                'Conexión directa por fibra a nubes públicas (AWS/GCP)',
                'IPs dedicadas Anycast BGP',
                'Auditoría y soporte forense personalizado',
                'Acuerdo de nivel de servicio 99.999% SLA',
                'Arquitecto de soluciones Cloud asignado'
              ],
              highlighted: false,
              ctaText: 'Consultar Arquitectura'
            }
          ]
        },
        faq: {
          enabled: true,
          title: 'Preguntas Frecuentes de Infraestructura',
          items: [
            {
              id: 'q1',
              question: '¿Qué diferencia a Quantum de proveedores cloud tradicionales?',
              answer: 'Quantum está concebido desde cero para el cómputo perimetral Anycast. No cobramos tarifas opacas por transferencia de datos de salida (egress) y nuestros tiempos de aprovisionamiento de clúster son de segundos en lugar de minutos.'
            },
            {
              id: 'q2',
              question: '¿Puedo conectar mis clústeres existentes de Kubernetes?',
              answer: 'Sí. Disponemos del agente Quantum Mesh que se instala con una sola línea de Helm, extendiendo tu clúster actual a nuestra red perimetral con túneles WireGuard cifrados automáticos.'
            },
            {
              id: 'q3',
              question: '¿Cómo funciona la facturación por segundo consumido?',
              answer: 'Calculamos el uso exacto de memoria y CPU por milisegundo de ejecución real. Si tu aplicación escala a cero durante horas de baja demanda, el coste de cómputo es nulo.'
            },
            {
              id: 'q4',
              question: '¿Cumplen con los estándares europeos de soberanía de datos?',
              answer: 'Todos los datos de clientes de la región europea residen exclusivamente en servidores ubicados en Fráncfort, París y Madrid, con estricto aislamiento conforme al RGPD y certificaciones ISO 27001.'
            },
            {
              id: 'q5',
              question: '¿Qué nivel de soporte técnico se incluye en los planes?',
              answer: 'Todos los planes de producción cuentan con soporte atendido por ingenieros de sistemas con experiencia directa en infraestructura, garantizando respuestas técnicas y resolutivas.'
            },
            {
              id: 'q6',
              question: '¿Es posible realizar pruebas de migración sin coste?',
              answer: 'Proporcionamos créditos de infraestructura de bienvenida para validar el rendimiento y evaluar la latencia de tu stack antes de migrar el tráfico de producción.'
            }
          ]
        },
        ctaFinal: {
          enabled: true,
          title: 'Eleva la velocidad y resiliencia de tu infraestructura.',
          subtitle: 'Aprovisiona tu primer entorno en menos de 60 segundos con nuestra CLI.',
          primaryCta: { text: 'Comenzar Ahora en Quantum', link: '#pricing' }
        },
        footer: {
          copyright: '© 2026 Quantum Infrastructure Global Inc. Todos los derechos reservados.',
          legalLinks: [
            { label: 'Estado del Servicio (Status)', href: '#status' },
            { label: 'SLA y Términos', href: '#terms' },
            { label: 'Seguridad y Cumplimiento', href: '#security' }
          ],
          socialLinks: [
            { platform: 'GitHub', url: 'https://github.com' },
            { platform: 'Twitter', url: 'https://twitter.com' }
          ]
        }
      }
    }
  },

  // 3. CIRCUIT — DevTools, API Management & Observability (Dark Violet Theme)
  {
    id: 'circuit-devtools',
    name: 'Circuit DevTools',
    tagline: 'Suite de observabilidad, pruebas de APIs y depuración distribuida para equipos de ingeniería de software',
    category: 'saas',
    thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
    description: 'Estética en gris carbón #0D1117, acento violeta neón #8B5CF6, tipografía Inter, cliente de pruebas de endpoints, trazado de microservicios e inspección de payloads con alertas en tiempo real.',
    accentColor: '#8B5CF6',
    theme: 'dark',
    defaultConfig: {
      templateId: 'circuit-devtools',
      name: 'Circuit DevTools Platform',
      slug: 'circuit-devtools',
      domain: 'circuitdev.tools',
      theme: 'dark',
      accentColor: '#8B5CF6',
      fontFamily: 'Inter, -apple-system, sans-serif',
      borderRadius: 12,
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
        title: 'Circuit — Suite de Pruebas de API y Observabilidad Distribuida',
        description: 'Diseña, prueba, documenta y supervisa APIs REST, GraphQL y gRPC en un único entorno colaborativo.',
        keywords: 'api testing, observabilidad, devtools, graphql, rest api, grpc, depuracion distribuida'
      },
      sections: {
        navbar: {
          brandName: 'Circuit',
          logoText: 'CIRCUIT // DEV',
          ctaText: 'Descargar CLI',
          ctaLink: '#pricing',
          links: [
            { label: 'Características', href: '#features' },
            { label: 'Inspección', href: '#product' },
            { label: 'Métricas', href: '#stats' },
            { label: 'Planes', href: '#pricing' },
            { label: 'FAQ', href: '#faq' }
          ],
          glassBlur: true,
          sticky: true
        },
        hero: {
          enabled: true,
          badge: 'Soporte completo para GraphQL, gRPC y WebSockets',
          kicker: 'Desarrollo & Depuración',
          title: 'La suite definitiva para probar y',
          highlightTitle: 'monitorear tus APIs.',
          subtitle: 'Diseña contratos de API, ejecuta pruebas de carga automatizadas en CI/CD e inspecciona trazas de extremo a extremo sin fricción.',
          primaryCta: { text: 'Descargar Gratis para macOS/Linux', link: '#pricing' },
          secondaryCta: { text: 'Ver Ejemplos de Pruebas →', link: '#features' },
          imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1600&q=80',
          style: 'centered'
        },
        logos: {
          enabled: true,
          title: 'UTILIZADO POR EQUIPOS DE DESARROLLO EN MÁS DE 80 PAÍSES',
          items: [
            { id: 'l1', name: 'OpenStream Dev', tagline: 'Streaming Engine' },
            { id: 'l2', name: 'HyperStack Labs', tagline: 'Full-Stack Frameworks' },
            { id: 'l3', name: 'CodeCraft Solutions', tagline: 'DevOps Tooling' }
          ]
        },
        bentoFeatures: {
          enabled: true,
          kicker: 'Herramientas de Precisión',
          title: 'Todo el flujo de trabajo de APIs en una sola ventana.',
          subtitle: 'Desde la definición del esquema OpenAPI hasta la supervisión sintética en producción.',
          items: [
            {
              id: 'f1',
              title: 'Pruebas de Carga en CI/CD',
              description: 'Ejecuta simulaciones de miles de usuarios concurrentes en cada Pull Request para detectar regresiones de rendimiento antes de desplegar.',
              icon: 'Activity',
              tag: '100k Req/s',
              colSpan: 2,
              statNumber: '99.4%',
              statLabel: 'Precisión en Detección de Fugas de Memoria'
            },
            {
              id: 'f2',
              title: 'Generación Automática de SDKs',
              description: 'Genera librerías cliente fuertemente tipadas en TypeScript, Python, Go, Rust y Swift a partir de tu esquema.',
              icon: 'Code2',
              tag: 'Multi-Lenguaje',
              colSpan: 1
            },
            {
              id: 'f3',
              title: 'Servidor Mock Integrado',
              description: 'Levanta entornos simulados realistas con datos dinámicos para que el equipo frontend trabaje sin esperar al backend.',
              icon: 'Server',
              tag: 'Zero-Wait',
              colSpan: 1
            },
            {
              id: 'f4',
              title: 'Trazas de Red en Tiempo Real',
              description: 'Captura y examina cabeceras HTTP, cuerpos comprimidos, tiempos de DNS y certificados TLS al milisegundo.',
              icon: 'Cpu',
              tag: 'Deep Inspect',
              colSpan: 2,
              statNumber: '< 1ms',
              statLabel: 'Sobrecarga de proxy en modo depuración'
            }
          ]
        },
        productHighlight: {
          enabled: true,
          badge: 'Inspección de Payloads',
          kicker: 'Visor de Contratos',
          title: 'Depura peticiones complejas con formateador inteligente.',
          subtitle: 'Validación en vivo contra esquemas JSON Schema, OpenAPI v3.1 y Protobuf.',
          description: 'Descubre al instante campos faltantes, tipos de datos incompatibles o respuestas lentas mediante un editor visual con autocompletado y resaltado de sintaxis.',
          imageUrl: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=1400&q=80',
          specs: [
            { label: 'Protocolos', value: 'HTTP/1.1, HTTP/2, HTTP/3, WebSockets, gRPC y SSE' },
            { label: 'Exportación', value: 'Formatos cURL, Fetch, Axios, Postman Collections y OpenAPI' },
            { label: 'Plataformas', value: 'macOS (Apple Silicon & Intel), Linux x64/ARM64 y Windows' }
          ]
        },
        stats: {
          enabled: true,
          items: [
            { id: 's1', value: '1.2M+', label: 'Desarrolladores Activos' },
            { id: 's2', value: '450M+', label: 'Peticiones Probadas al Mes' },
            { id: 's3', value: '70%', label: 'Reducción en Tiempo de Depuración' },
            { id: 's4', value: '100%', label: 'Cumplimiento OpenAPI v3.1' }
          ]
        },
        testimonials: {
          enabled: true,
          title: 'Lo que opinan desarrolladores y arquitectos de software.',
          items: [
            {
              id: 't1',
              author: 'Adrián Fuentes',
              name: 'Adrián Fuentes',
              role: 'Staff Software Engineer en GlobalAPI',
              company: 'GlobalAPI',
              quote: 'Circuit reemplazó tres herramientas pesadas por una sola aplicación ultraligera. Las pruebas automatizadas en nuestro pipeline de GitHub Actions nos han salvado de incontables errores.',
              avatarUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=300&q=80',
              rating: 5
            }
          ]
        },
        pricing: {
          enabled: true,
          title: 'Planes para Desarrolladores y Equipos',
          billingCycle: 'monthly',
          plans: [
            {
              id: 'p1',
              name: 'Community Open',
              priceMonthly: '0€',
              priceAnnual: '0€',
              description: 'Para desarrolladores individuales que necesitan una herramienta de pruebas rápida y ligera.',
              features: [
                'Peticiones ilimitadas locales',
                'Soporte completo REST, GraphQL y WebSockets',
                'Servidor Mock local básico',
                'Exportación de código a 12 lenguajes',
                'Almacenamiento de colecciones en disco local'
              ],
              highlighted: false,
              ctaText: 'Descargar Gratis'
            },
            {
              id: 'p2',
              name: 'Team Collaboration',
              priceMonthly: '18€',
              priceAnnual: '14€',
              description: 'Para equipos de ingeniería que comparten colecciones, entornos de staging y pruebas CI.',
              features: [
                'Espacios de trabajo compartidos en tiempo real',
                'Pruebas de carga automáticas en pipelines CI/CD',
                'Servidor Mock en la nube con endpoints públicos',
                'Gestión de secretos y variables de entorno seguras',
                'Historial de cambios y control de versiones de colecciones'
              ],
              highlighted: true,
              ctaText: 'Probar 14 Días'
            }
          ]
        },
        faq: {
          enabled: true,
          title: 'Preguntas Frecuentes sobre Circuit',
          items: [
            {
              id: 'q1',
              question: '¿Circuit funciona completamente offline sin conexión a internet?',
              answer: 'Sí. Todas las colecciones y pruebas pueden almacenarse en archivos JSON locales en tu máquina, permitiéndote trabajar con total privacidad sin enviar tus datos a la nube.'
            },
            {
              id: 'q2',
              question: '¿Puedo importar mis colecciones de Postman o Insomnia?',
              answer: 'Circuit cuenta con importador directo con un solo clic que reconoce variables de entorno, scripts de prueba pre/post solicitud y jerarquía de carpetas sin pérdidas.'
            },
            {
              id: 'q3',
              question: '¿Es compatible con protocolos gRPC y buffers de protocolo?',
              answer: 'Dispone de soporte nativo para importar archivos .proto o consultar endpoints con Server Reflection para autocompletar métodos y payloads de llamada de inmediato.'
            },
            {
              id: 'q4',
              question: '¿Cómo se integra Circuit en nuestros pipelines de integración continua?',
              answer: 'Nuestra herramienta de línea de comandos (CLI) permite ejecutar suites completas de pruebas con salida estándar JUnit o JSON para integrarse de forma nativa en GitHub Actions, GitLab CI y Jenkins.'
            },
            {
              id: 'q5',
              question: '¿Qué políticas de privacidad aplican a las claves de API?',
              answer: 'Las variables de entorno sensibles se cifran localmente con llaves derivadas por el usuario y nunca se sincronizan en texto plano con nuestros servidores.'
            },
            {
              id: 'q6',
              question: '¿Tienen soporte para extensiones y plugins personalizados?',
              answer: 'Sí. Disponemos de una API de extensiones en JavaScript/TypeScript que te permite crear transformadores de payloads y paneles personalizados.'
            }
          ]
        },
        ctaFinal: {
          enabled: true,
          title: 'Acelera el desarrollo y la calidad de tus APIs.',
          subtitle: 'Disponible para macOS, Windows y Linux con instalador oficial.',
          primaryCta: { text: 'Descargar Circuit Ahora', link: '#pricing' }
        },
        footer: {
          copyright: '© 2026 Circuit DevTools Open Source Project. Distribuido bajo licencia Apache 2.0.',
          legalLinks: [
            { label: 'Changelog', href: '#changelog' },
            { label: 'Documentación API', href: '#docs' },
            { label: 'Privacidad', href: '#privacy' }
          ],
          socialLinks: [
            { platform: 'GitHub', url: 'https://github.com' },
            { platform: 'Discord', url: 'https://discord.com' }
          ]
        }
      }
    }
  },

  // 4. NIMBUS — Data Analytics & Business Intelligence (Dark Indigo Theme)
  {
    id: 'nimbus-saas',
    name: 'Nimbus Analytics',
    tagline: 'Motor analítico y cuadros de mando interactivos para la visualización y modelado de datos a gran escala',
    category: 'saas',
    thumbnail: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1200&q=80',
    description: 'Estética analítica en azul marino oscuro #0F172A, acento índigo #6366F1, tipografía Inter, paneles en vivo con gráficos interactivos, alertas de anomalías y modelado relacional directo.',
    accentColor: '#6366F1',
    theme: 'dark',
    defaultConfig: {
      templateId: 'nimbus-saas',
      name: 'Nimbus Data Analytics',
      slug: 'nimbus-analytics',
      domain: 'nimbusanalytics.io',
      theme: 'dark',
      accentColor: '#6366F1',
      fontFamily: 'Inter, -apple-system, sans-serif',
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
        title: 'Nimbus Analytics — Cuadros de Mando y Analítica de Datos',
        description: 'Conecta tus almacenes de datos PostgreSQL, Snowflake y BigQuery para generar paneles visuales en segundos.',
        keywords: 'business intelligence, data analytics, cuadros de mando, sql visual, snowflake, postgresql'
      },
      sections: {
        navbar: {
          brandName: 'Nimbus Data',
          logoText: 'NIMBUS DATA',
          ctaText: 'Iniciar Demostración',
          ctaLink: '#pricing',
          links: [
            { label: 'Capacidades', href: '#features' },
            { label: 'Conectores', href: '#product' },
            { label: 'Impacto', href: '#stats' },
            { label: 'Planes', href: '#pricing' },
            { label: 'FAQ', href: '#faq' }
          ],
          glassBlur: true,
          sticky: true
        },
        hero: {
          enabled: true,
          badge: 'Consultas ultra rápidas sobre miles de millones de filas',
          kicker: 'Inteligencia de Negocio en Tiempo Real',
          title: 'Transforma tus datos en decisiones',
          highlightTitle: 'claras y accionables.',
          subtitle: 'Conecta tus fuentes de información, diseña cuadros de mando interactivos y comparte paneles seguros con toda tu organización en cuestión de minutos.',
          primaryCta: { text: 'Conectar Base de Datos', link: '#pricing' },
          secondaryCta: { text: 'Explorar Galería de Dashboards →', link: '#features' },
          imageUrl: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1600&q=80',
          style: 'centered'
        },
        logos: {
          enabled: true,
          title: 'COMPATIBLE CON TUS ALMACENES DE DATOS PRINCIPALES',
          items: [
            { id: 'l1', name: 'Snowflake', tagline: 'Data Warehouse' },
            { id: 'l2', name: 'PostgreSQL', tagline: 'Relational DB' },
            { id: 'l3', name: 'Google BigQuery', tagline: 'Cloud Analytics' },
            { id: 'l4', name: 'Amazon Redshift', tagline: 'Fast Analytics' }
          ]
        },
        bentoFeatures: {
          enabled: true,
          kicker: 'Capacidades Analíticas',
          title: 'Consultas directas sin necesidad de crear complejos pipelines ETL.',
          subtitle: 'El motor computacional de Nimbus ejecuta agregaciones sobre la fuente original con caché columnar en memoria.',
          items: [
            {
              id: 'f1',
              title: 'Constructor Visual de Consultas SQL',
              description: 'Genera consultas analíticas avanzadas con filtros relacionales y agregaciones complejas mediante arrastrar y soltar.',
              icon: 'BarChart2',
              tag: 'Sin Código / SQL',
              colSpan: 2,
              statNumber: '100M+',
              statLabel: 'Filas procesadas en menos de 2 segundos'
            },
            {
              id: 'f2',
              title: 'Detección Automática de Anomalías',
              description: 'Identifica picos inusuales de tráfico, caídas de conversión o desviaciones presupuestarias en tiempo real con alertas a Slack.',
              icon: 'TrendingUp',
              tag: 'Alertas en Vivo',
              colSpan: 1
            },
            {
              id: 'f3',
              title: 'Gobernanza y Permisos Granulares',
              description: 'Controla el acceso a nivel de fila y columna para asegurar que cada usuario visualice únicamente la información autorizada.',
              icon: 'Lock',
              tag: 'RBAC Seguro',
              colSpan: 1
            },
            {
              id: 'f4',
              title: 'Exportación y Embebido de Paneles',
              description: 'Inserta gráficos interactivos directamente en tu propia aplicación SaaS o genera reportes programados en PDF semanales.',
              icon: 'Share2',
              tag: 'SDK de Embebido',
              colSpan: 2,
              statNumber: '120+',
              statLabel: 'Tipos de visualizaciones y gráficos'
            }
          ]
        },
        productHighlight: {
          enabled: true,
          badge: 'Rendimiento In-Memory',
          kicker: 'Velocidad de Renderizado',
          title: 'Gráficos fluidos a 60 FPS con millones de puntos de datos.',
          subtitle: 'Motor gráfico basado en WebGL que permite exploración interactiva de series temporales sin congelamiento.',
          description: 'Aplica zoom temporal, filtra cohortes y compara períodos históricos de forma instantánea sin tener que recargar la página web ni esperar consultas lentas.',
          imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80',
          specs: [
            { label: 'Caché', value: 'Acelerador columnar en memoria RAM distribuida' },
            { label: 'Conectores', value: 'Más de 45 conectores JDBC/REST nativos' },
            { label: 'Seguridad', value: 'Conexión vía túnel SSH y enlace privado VPC' }
          ]
        },
        stats: {
          enabled: true,
          items: [
            { id: 's1', value: '3.800+', label: 'Empresas que Analizan con Nimbus' },
            { id: 's2', value: '500M+', label: 'Consultas Diarias Resueltas' },
            { id: 's3', value: '94%', label: 'Ahorro de Tiempo en Reportes' },
            { id: 's4', value: '4.9/5', label: 'Valoración en G2 Crowd' }
          ]
        },
        testimonials: {
          enabled: true,
          title: 'Lo que opinan directores de datos y analistas de negocio.',
          items: [
            {
              id: 't1',
              author: 'Carolina Méndez',
              name: 'Carolina Méndez',
              role: 'Chief Data Officer en RetailPulse',
              company: 'RetailPulse',
              quote: 'Nimbus democratizó el acceso a los datos en nuestra compañía. Ahora los equipos de marketing y ventas crean sus propios reportes sin depender del departamento de IT.',
              avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
              rating: 5
            }
          ]
        },
        pricing: {
          enabled: true,
          title: 'Planes Transparentes para Cualquier Volumen',
          billingCycle: 'monthly',
          plans: [
            {
              id: 'p1',
              name: 'Analyst Pro',
              priceMonthly: '49€',
              priceAnnual: '39€',
              description: 'Para analistas y equipos pequeños que necesitan explorar datos y publicar tableros clave.',
              features: [
                'Hasta 5 creadores de tableros incluidos',
                'Lectores ilimitados con enlaces seguros',
                'Conexión a 3 almacenes de datos simultáneos',
                'Actualización de datos programada cada hora',
                'Exportación de reportes a PDF y Excel'
              ],
              highlighted: false,
              ctaText: 'Comenzar Prueba'
            },
            {
              id: 'p2',
              name: 'Business Scale',
              priceMonthly: '149€',
              priceAnnual: '125€',
              description: 'Para organizaciones medianas con múltiples departamentos y altos volúmenes de consultas.',
              features: [
                'Creadores y lectores de tableros ilimitados',
                'Conectores ilimitados a bases de datos y almacenes',
                'Sincronización de datos en tiempo real (streaming)',
                'Alertas de anomalías a Slack y Teams',
                'Embebido de gráficos con autenticación SSO',
                'Soporte técnico prioritario'
              ],
              highlighted: true,
              ctaText: 'Elegir Business Scale'
            }
          ]
        },
        faq: {
          enabled: true,
          title: 'Preguntas Frecuentes sobre Nimbus',
          items: [
            {
              id: 'q1',
              question: '¿Nimbus almacena copias de nuestras bases de datos de clientes?',
              answer: 'No. Nimbus ejecuta consultas de solo lectura en origen y mantiene únicamente una capa de caché efímera en memoria para optimizar el renderizado visual, garantizando que tus datos nunca salgan de tu control.'
            },
            {
              id: 'q2',
              question: '¿Qué nivel de conocimientos técnicos se necesita para usar la herramienta?',
              answer: 'Nimbus está diseñado tanto para analistas experimentados que desean escribir código SQL directo como para usuarios de negocio que prefieren construir consultas visuales mediante filtros intuitivos.'
            },
            {
              id: 'q3',
              question: '¿Puedo embeber los cuadros de mando en mi propio producto SaaS?',
              answer: 'Sí. Ofrecemos un SDK de embebido con autenticación basada en tokens JWT que permite integrar paneles interactivos con el diseño y colores de tu propia marca.'
            },
            {
              id: 'q4',
              question: '¿Cómo se configuran los accesos seguros a bases de datos privadas?',
              answer: 'Puedes conectar tus bases de datos mediante túneles SSH inversos, listas blancas de IPs estáticas o enlaces privados AWS PrivateLink / GCP Private Service Connect.'
            },
            {
              id: 'q5',
              question: '¿Es posible programar envíos automáticos de informes por correo?',
              answer: 'Sí. Puedes definir envíos periódicos diarios, semanales o mensuales con capturas en PDF de alta resolución y adjuntos CSV para directivos y clientes externos.'
            },
            {
              id: 'q6',
              question: '¿Ofrecen acuerdos de nivel de servicio (SLA) para empresas?',
              answer: 'Nuestros planes para organizaciones incluyen un compromiso de disponibilidad del 99.95% con soporte telefónico y por chat 24/7.'
            }
          ]
        },
        ctaFinal: {
          enabled: true,
          title: 'Descubre el poder de tus datos con Nimbus.',
          subtitle: 'Inicia tu prueba gratuita de 14 días sin necesidad de tarjeta de crédito.',
          primaryCta: { text: 'Probar Nimbus Analytics', link: '#pricing' }
        },
        footer: {
          copyright: '© 2026 Nimbus Data Technologies S.L. Todos los derechos reservados.',
          legalLinks: [
            { label: 'Seguridad de Datos', href: '#security' },
            { label: 'Términos del Servicio', href: '#terms' },
            { label: 'Privacidad', href: '#privacy' }
          ],
          socialLinks: [
            { platform: 'LinkedIn', url: 'https://linkedin.com' },
            { platform: 'Twitter', url: 'https://twitter.com' }
          ]
        }
      }
    }
  }
];
