import { TemplateDefinition } from '../../types';

export const SAAS_TEMPLATES: TemplateDefinition[] = [
  // 1. NEXUS — SaaS Minimalista Todo-en-Uno
  {
    id: 'nexus-saas',
    name: 'Nexus',
    tagline: 'SaaS minimalista con flujo de conversión optimizado, métricas en vivo y colaboración en tiempo real',
    category: 'saas',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    description: 'Estética blanca pulcra, acento azul #0071E3, tipografía Inter, hero con mockup interactivo, logos de confianza, rejilla bento, métricas animadas, pestañas interactivas, precios con toggle y FAQ.',
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
        title: 'Nexus — La plataforma todo-en-uno para equipos modernos',
        description: 'Gestiona proyectos, comunicación y análisis en un solo lugar sin fricción ni curvas de aprendizaje complejas.',
        keywords: 'saas, productividad, gestión de proyectos, analítica en vivo, colaboración en tiempo real'
      },
      sections: {
        navbar: {
          brandName: 'Nexus',
          logoText: 'NEXUS',
          ctaText: 'Comenzar Gratis',
          ctaLink: '#pricing',
          links: [
            { label: 'Producto', href: '#product' },
            { label: 'Características', href: '#features' },
            { label: 'Plataforma', href: '#tabs' },
            { label: 'Precios', href: '#pricing' },
            { label: 'FAQ', href: '#faq' }
          ],
          glassBlur: true,
          sticky: true
        },
        hero: {
          enabled: true,
          badge: 'Nexus v3.4 ya disponible • 10x más rápido',
          kicker: 'Productividad Sin Fricción',
          title: 'La plataforma todo-en-uno para',
          highlightTitle: 'equipos modernos.',
          subtitle: 'Gestiona proyectos, comunicación y análisis en un solo lugar, sin fricción ni retrasos. Diseñado para empresas que valoran la velocidad y la claridad.',
          primaryCta: { text: 'Comenzar Gratis', link: '#pricing' },
          secondaryCta: { text: 'Ver Demostración →', link: '#product' },
          imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80',
          style: 'centered'
        },
        logos: {
          enabled: true,
          title: 'EMPRESAS LÍDERES QUE CONFÍAN EN NEXUS',
          items: [
            { id: 'l1', name: 'Acme Corp', tagline: 'Enterprise Software' },
            { id: 'l2', name: 'Globex Digital', tagline: 'Global Logistics' },
            { id: 'l3', name: 'Initech Labs', tagline: 'Fintech Solutions' },
            { id: 'l4', name: 'Umbrella Tech', tagline: 'Cloud Security' },
            { id: 'l5', name: 'Stark Industries', tagline: 'Advanced Hardware' }
          ]
        },
        bentoFeatures: {
          enabled: true,
          kicker: 'Potencia & Simplicidad',
          title: 'Todo lo que necesitas para ejecutar más rápido.',
          subtitle: 'Herramientas integradas de extremo a extremo que sustituyen a más de cinco aplicaciones desconectadas.',
          items: [
            {
              id: 'f1',
              title: 'Velocidad de Carga Instantánea',
              description: 'Arquitectura sub-milisegundo que responde a cada clic y pulsación de tecla al instante, incluso con millones de registros activos.',
              icon: 'Zap',
              tag: '< 15ms Latencia',
              colSpan: 2,
              statNumber: '10x',
              statLabel: 'Más rápido que herramientas heredadas'
            },
            {
              id: 'f2',
              title: 'Seguridad de Nivel Bancario',
              description: 'Cifrado de extremo a extremo AES-256 en reposo y en tránsito con cumplimiento estricto de GDPR, SOC2 Tipo II e ISO 27001.',
              icon: 'ShieldCheck',
              tag: 'Zero-Trust',
              colSpan: 1
            },
            {
              id: 'f3',
              title: 'Flexibilidad sin Código',
              description: 'Personaliza vistas de Kanban, diagramas de Gantt, calendarios y tablas dinámicas sin escribir una sola línea de código.',
              icon: 'Layers',
              tag: '100% Adaptable',
              colSpan: 1
            },
            {
              id: 'f4',
              title: 'Automatizaciones Asistidas por IA',
              description: 'Detecta cuellos de botella antes de que ocurran, clasifica tickets de clientes y genera resúmenes ejecutivos diarios en un clic.',
              icon: 'BrainCircuit',
              tag: 'Inteligencia Nativa',
              colSpan: 2,
              statNumber: '99.9%',
              statLabel: 'Uptime garantizado por contrato SLA'
            }
          ]
        },
        productHighlight: {
          enabled: true,
          kicker: 'Control Unificado',
          title: 'Todo tu trabajo en un solo lugar.',
          subtitle: 'Visualiza el progreso de sprints, presupuestos y comunicación de equipo en un panel de control intuitivo.',
          description: 'Sincroniza tus flujos de trabajo con más de 200 integraciones nativas como GitHub, Slack, Jira, Figma y Google Workspace.',
          imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80',
          layout: 'image-right',
          ctaText: 'Explorar el Dashboard',
          ctaLink: '#pricing',
          specs: [
            { label: 'Tableros Personalizables', value: 'Vistas Ilimitadas', detail: 'Kanban, Tabla, Lista y Gantt' },
            { label: 'Integraciones Nativas', value: '+200 Conectores', detail: 'Sincronización bidireccional' },
            { label: 'Colaboración en Vivo', value: 'Tiempo Real', detail: 'Presencia de cursores múltiples' }
          ]
        },
        stats: {
          enabled: true,
          kicker: 'Métricas de Impacto',
          title: 'Resultados cuantificables desde el primer día.',
          subtitle: 'Equipos de ingeniería, producto y operaciones aceleran sus entregas con Nexus.',
          items: [
            { id: 's1', value: '12,000+', label: 'Usuarios Activos Diarios', description: 'En más de 75 países' },
            { id: 's2', value: '99.9%', label: 'Disponibilidad SLA', description: 'Infraestructura multi-región' },
            { id: 's3', value: '4.9/5', label: 'Valoración Media', description: 'Basada en +3,400 opiniones G2' },
            { id: 's4', value: '50M+', label: 'Tareas Completadas', description: 'Gestionadas con éxito este año' }
          ]
        },
        tabs: {
          enabled: true,
          kicker: 'Módulos del Sistema',
          title: 'Una suite integral diseñada para cada rol.',
          subtitle: 'Descubre cómo cada área de tu empresa multiplica su eficiencia.',
          tabs: [
            {
              id: 'tab_projects',
              label: 'Gestión de Proyectos',
              icon: 'Layers',
              title: 'Planificación ágil con visibilidad total',
              description: 'Organiza hojas de ruta trimestrales, asigna dependencias y sigue el avance de cada entregable en tiempo real.',
              imageUrl: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80',
              points: [
                'Priorización ponderada de tareas y épicas',
                'Diagramas de Gantt interactivos con cálculo de ruta crítica',
                'Alertas tempranas de sobrecarga de trabajo en miembros del equipo'
              ]
            },
            {
              id: 'tab_analytics',
              label: 'Analítica & KPIs',
              icon: 'TrendingUp',
              title: 'Métricas claras para decisiones fundamentadas',
              description: 'Convierte datos dispersos en paneles visuales comprensibles para stakeholders y directivos.',
              imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
              points: [
                'Informes de velocidad de sprint y tiempo de ciclo',
                'Previsiones de presupuesto y consumo de recursos',
                'Exportación automática en PDF y enlaces públicos compartibles'
              ]
            },
            {
              id: 'tab_collab',
              label: 'Comunicación en Contexto',
              icon: 'HeartHandshake',
              title: 'Conversaciones que no se pierden en el chat',
              description: 'Comenta directamente sobre documentos, diseños y tareas sin cambiar de pestaña.',
              imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
              points: [
                'Hilos organizados por tema y archivo adjunto',
                'Grabación de notas de audio y video pantalla integradas',
                'Resumen diario generado por IA en tu bandeja de entrada'
              ]
            }
          ]
        },
        testimonials: {
          enabled: true,
          title: 'Lo que dicen los líderes que ya transformaron su equipo.',
          subtitle: 'Empresas de alto crecimiento confían en Nexus para escalar sus operaciones.',
          items: [
            {
              id: 't1',
              name: 'María López',
              role: 'CEO & Co-Fundadora',
              company: 'Acme Digital Labs',
              quote: 'Nexus nos ayudó a reducir el tiempo de gestión de proyectos en un 40%. La interfaz es tan limpia que todo el equipo la adoptó sin necesidad de capacitación.',
              avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
              rating: 5
            },
            {
              id: 't2',
              name: 'Carlos Ruiz',
              role: 'Chief Technology Officer',
              company: 'Globex Logistics',
              quote: 'La mejor inversión que hemos hecho este año. La velocidad de carga y la robustez de sus APIs nos permitieron conectar todos nuestros microservicios en un fin de semana.',
              avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
              rating: 5
            },
            {
              id: 't3',
              name: 'Ana Pérez',
              role: 'Lead Product Manager',
              company: 'Initech Financial',
              quote: 'Fácil de usar y extraordinariamente potente. Los tableros dinámicos y el asistente de IA nos ahorran más de 6 horas semanales por persona en informes.',
              avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80',
              rating: 5
            }
          ]
        },
        pricing: {
          enabled: true,
          title: 'Planes flexibles que crecen con tu empresa.',
          subtitle: 'Comienza con nuestra prueba gratuita de 14 días. Cancela cuando quieras.',
          billingCycle: 'annual',
          discountNote: 'Ahorra un 20% al elegir facturación anual',
          plans: [
            {
              id: 'p_basic',
              name: 'Básico',
              tag: 'Para Equipos Pequeños',
              priceMonthly: '19€',
              priceAnnual: '15€',
              description: 'Ideal para startups y profesionales que buscan orden inmediato.',
              features: [
                'Hasta 5 proyectos simultáneos',
                '10 GB de almacenamiento seguro en nube',
                'Tableros Kanban y Listas ilimitadas',
                'Integración con Google Drive y Slack',
                'Soporte estándar por correo en 24h'
              ],
              ctaText: 'Comenzar Gratis',
              ctaLink: '#checkout-basic',
              highlighted: false
            },
            {
              id: 'p_pro',
              name: 'Pro',
              tag: 'Más Elegido',
              priceMonthly: '39€',
              priceAnnual: '31€',
              description: 'Para empresas en expansión que necesitan automatización y analítica.',
              features: [
                'Proyectos y tableros ilimitados',
                '100 GB de almacenamiento en nube',
                'Diagramas de Gantt y Cronogramas avanzados',
                'Asistente de IA para resúmenes y tareas',
                'Acceso completo a la API REST y Webhooks',
                'Soporte prioritario 24/7 con respuesta en 1h'
              ],
              ctaText: 'Probar Pro 14 Días',
              ctaLink: '#checkout-pro',
              highlighted: true
            },
            {
              id: 'p_enterprise',
              name: 'Empresa',
              tag: 'Gobernanza Total',
              priceMonthly: '99€',
              priceAnnual: '79€',
              description: 'Para corporaciones con requisitos estrictos de seguridad y cumplimiento.',
              features: [
                'Todo lo incluido en el plan Pro',
                'Almacenamiento ilimitado cifrado en reposo',
                'Acuerdo de nivel de servicio (SLA) 99.9%',
                'Inicio de sesión único (SSO) SAML y Okta',
                'Gerente de cuenta dedicado y onboarding a medida',
                'Auditorías de seguridad personalizadas y registros SIEM'
              ],
              ctaText: 'Contactar a Ventas',
              ctaLink: '#contact-sales',
              highlighted: false
            }
          ]
        },
        faq: {
          enabled: true,
          title: 'Preguntas Frecuentes',
          subtitle: 'Todo lo que necesitas saber antes de dar el paso con Nexus.',
          items: [
            {
              id: 'f_1',
              question: '¿Puedo cancelar o cambiar de plan en cualquier momento?',
              answer: 'Sí, por supuesto. Puedes ascender, descender o cancelar tu suscripción en cualquier instante desde el panel de administración con un solo clic.'
            },
            {
              id: 'f_2',
              question: '¿Ofrecen una prueba gratuita?',
              answer: 'Sí, dispones de 14 días de prueba completa en el plan Pro sin necesidad de introducir tu tarjeta de crédito.'
            },
            {
              id: 'f_3',
              question: '¿Tienen API para desarrolladores e integraciones personalizadas?',
              answer: 'Sí, nuestra API REST y Webhooks en tiempo real están disponibles desde el plan Pro con documentación interactiva Swagger y SDKs en TypeScript y Python.'
            },
            {
              id: 'f_4',
              question: '¿Mis datos están seguros y cumplen con la normativa europea?',
              answer: 'Cumplimos rigurosamente con el RGPD europeo, CCPA y contamos con certificación SOC2 Tipo II. Todos los datos se cifran con claves AES-256 en centros de datos de la UE.'
            }
          ]
        },
        ctaFinal: {
          enabled: true,
          kicker: 'Tu Próximo Nivel de Eficiencia',
          title: 'Empieza gratis hoy mismo.',
          subtitle: 'Únete a más de 12,000 equipos que ya trabajan mejor, más rápido y sin caos con Nexus.',
          primaryCta: { text: 'Crear Cuenta Gratuita', link: '#pricing' },
          secondaryCta: { text: 'Agendar Demostración con un Experto', link: '#demo' },
          backgroundStyle: 'glow'
        },
        footer: {
          copyright: '© 2026 Nexus Technologies Inc. Todos los derechos reservados.',
          legalLinks: [
            { label: 'Privacidad', href: '#privacy' },
            { label: 'Términos de Servicio', href: '#terms' },
            { label: 'Seguridad', href: '#security' },
            { label: 'Estado del Servicio', href: '#status' }
          ],
          socialLinks: [
            { platform: 'Twitter / X', url: 'https://twitter.com' },
            { platform: 'GitHub', url: 'https://github.com' },
            { platform: 'LinkedIn', url: 'https://linkedin.com' },
            { platform: 'YouTube', url: 'https://youtube.com' }
          ]
        }
      }
    }
  },

  // 2. QUANTUM — SaaS Oscuro Futurista & Cómputo Cuántico / AI
  {
    id: 'quantum-dark-saas',
    name: 'Quantum',
    tagline: 'SaaS oscuro futurista con aceleración cuántica, modelos neuronales profundos y baja latencia',
    category: 'saas',
    thumbnail: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    description: 'Fondo negro profundo, acentos cian neón #00E5FF, tipografía Space Grotesk / Inter, arquitectura de cluster cuántico, specs técnicas, timeline de investigación, testimonios de prensa y tabla de nodos.',
    accentColor: '#00E5FF',
    theme: 'dark',
    defaultConfig: {
      templateId: 'quantum-dark-saas',
      name: 'Quantum Engine',
      slug: 'quantum-engine',
      domain: 'quantumengine.ai',
      theme: 'dark',
      accentColor: '#00E5FF',
      fontFamily: 'Inter, -apple-system, sans-serif',
      borderRadius: 20,
      published: true,
      sectionOrder: [
        'navbar',
        'hero',
        'logos',
        'marquee',
        'bentoFeatures',
        'productHighlight',
        'stats',
        'timeline',
        'testimonials',
        'pricing',
        'faq',
        'ctaFinal',
        'footer'
      ],
      seo: {
        title: 'Quantum Engine — Infraestructura de Supercómputo Cuántico e Inteligencia Artificial',
        description: 'Potencia tus simulaciones moleculares y modelos fundacionales con computación cuántica distribuida.',
        keywords: 'computación cuántica, deep learning, aceleración GPU, tensores, infraestructura cloud'
      },
      sections: {
        navbar: {
          brandName: 'Quantum',
          logoText: 'QUANTUM OS',
          ctaText: 'Desplegar Cluster',
          ctaLink: '#pricing',
          links: [
            { label: 'Arquitectura', href: '#features' },
            { label: 'Especificaciones', href: '#product' },
            { label: 'Benchmarks', href: '#stats' },
            { label: 'Roadmap', href: '#timeline' },
            { label: 'Nodos', href: '#pricing' }
          ],
          glassBlur: true,
          sticky: true
        },
        hero: {
          enabled: true,
          badge: 'Cluster Quantum-7 • Qubits Lógicos Estabilizados',
          kicker: 'Supercomputación de Próxima Era',
          title: 'Cómputo a escala.',
          highlightTitle: 'Sin límites térmicos.',
          subtitle: 'Orquestación cuántica distribuida con simulación de tensores en tiempo real y compilador de grafos de alta concurrencia para resolver los desafíos computacionales más complejos.',
          primaryCta: { text: 'Solicitar Acceso al Cluster', link: '#pricing' },
          secondaryCta: { text: 'Leer Whitepaper Técnico →', link: '#product' },
          imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1600&q=80',
          style: 'centered'
        },
        logos: {
          enabled: true,
          title: 'LABORATORIOS E INSTITUCIONES QUE INVESTIGAN CON QUANTUM',
          items: [
            { id: 'l1', name: 'CERN OpenLab', tagline: 'Particle Physics' },
            { id: 'l2', name: 'DeepMind Labs', tagline: 'Neural Models' },
            { id: 'l3', name: 'Caltech Quantum', tagline: 'Quantum Optics' },
            { id: 'l4', name: 'MIT Lincoln Lab', tagline: 'Advanced Computing' },
            { id: 'l5', name: 'Max Planck Inst', tagline: 'Theoretical Physics' }
          ]
        },
        marquee: {
          enabled: true,
          speed: 'normal',
          direction: 'left',
          items: [
            { id: 'm1', text: '1,024 QUBITS LÓGICOS', highlight: true, icon: 'Cpu' },
            { id: 'm2', text: 'FIDELIDAD DE PUERTA 99.98%', highlight: false, icon: 'ShieldCheck' },
            { id: 'm3', text: 'TEMPERATURA OPERATIVA 15 mK', highlight: true, icon: 'Zap' },
            { id: 'm4', text: 'COMPILADOR Q-JIT COMPATIBLE PYTORCH', highlight: false, icon: 'Code2' },
            { id: 'm5', text: 'LATENCIA RPC < 2.4 MS', highlight: true, icon: 'Flame' }
          ]
        },
        bentoFeatures: {
          enabled: true,
          kicker: 'Ingeniería Crítica',
          title: 'Arquitectura cuántica tolerante a fallos.',
          subtitle: 'Supera los límites de la arquitectura Von Neumann tradicional con aceleración fotónica y criogénica.',
          items: [
            {
              id: 'f1',
              title: 'Entrelazamiento Coherente T2',
              description: 'Tiempo de coherencia extendido a 1.8 segundos gracias a microcavidades superconductoras de niobio purificado al 99.999%.',
              icon: 'Cpu',
              tag: 'Tolerancia Activa',
              colSpan: 2,
              statNumber: '1,024 Qubits',
              statLabel: 'Capacidad de cálculo paralelo'
            },
            {
              id: 'f2',
              title: 'Bus Fotónico de 800 Gbps',
              description: 'Interconexión óptica directa entre chips criogénicos con pérdida de inserción menor a 0.03 dB por canal.',
              icon: 'Zap',
              tag: 'Óptica Cuántica',
              colSpan: 1
            },
            {
              id: 'f3',
              title: 'Compilador Q-JIT en Rust',
              description: 'Convierte grafos de JAX y PyTorch directamente en secuencias de pulsos microondas optimizadas sin intermediarios.',
              icon: 'Code2',
              tag: 'Compilación Nativa',
              colSpan: 1
            },
            {
              id: 'f4',
              title: 'Cilindros Criogénicos de Dilución',
              description: 'Refrigeración continua a 15 milikelvin sin vibración acústica mecánica que altere las matrices cuánticas.',
              icon: 'ShieldCheck',
              tag: 'Criogenia Continua',
              colSpan: 2,
              statNumber: '15 mK',
              statLabel: 'Temperatura en cámara de reacción'
            }
          ]
        },
        productHighlight: {
          enabled: true,
          kicker: 'Rendimiento Masivo',
          title: 'Simulaciones moleculares en segundos.',
          subtitle: 'Resuelve problemas NP-hard en minutos en lugar de miles de años.',
          description: 'Integra tus pipelines de investigación mediante nuestro SDK en Rust y Python compatible con Qiskit, Cirq y PennyLane.',
          imageUrl: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=1600&q=80',
          layout: 'image-left',
          ctaText: 'Ver Documentación SDK',
          ctaLink: '#pricing',
          specs: [
            { label: 'Fidelidad de Puerta', value: '99.98%', detail: 'Medición de dos qubits' },
            { label: 'Tiempo de Ciclo', value: '45 ns', detail: 'Ejecución de puerta Pauli-X' },
            { label: 'Latencia de API', value: '< 2.4 ms', detail: 'Respuesta RPC gRPC dedicada' }
          ]
        },
        stats: {
          enabled: true,
          kicker: 'Métricas de Cluster',
          title: 'Rendimiento verificado por laboratorios internacionales.',
          subtitle: 'Resultados reproducibles en benchmarks estándar de física computacional.',
          items: [
            { id: 's1', value: '1.2M+', label: 'Circuitos Ejecutados/Día', description: 'En 6 regiones dedicadas' },
            { id: 's2', value: '99.98%', label: 'Fidelidad de Operación', description: 'Líder en hardware cuántico' },
            { id: 's3', value: '120x', label: 'Aceleración vs Cluster GPU', description: 'En plegamiento de proteínas' },
            { id: 's4', value: '0 Error', label: 'Corrección Activa', description: 'Código de superficie 17-qubit' }
          ]
        },
        timeline: {
          enabled: true,
          kicker: 'Hoja de Ruta Tecnológica',
          title: 'Evolución de la arquitectura Quantum.',
          subtitle: 'Nuestros hitos de investigación hacia la ventaja cuántica universal.',
          milestones: [
            {
              id: 'm1',
              phase: 'Fase 1 — Desplegada',
              dateOrQuarter: 'Q1 2025',
              title: 'Cluster Q-512 & Fidelidad 99.9%',
              description: 'Estabilización de los primeros 512 qubits superconductores con refrigeración por helio líquido.',
              status: 'completed',
              points: ['Lanzamiento de API gRPC', 'SDK en Python y Rust', 'Auditoría de seguridad']
            },
            {
              id: 'm2',
              phase: 'Fase 2 — Actual',
              dateOrQuarter: 'Q1 2026',
              title: 'Arquitectura Quantum-7 (1,024 Qubits)',
              description: 'Corrección activa de errores en tiempo real y compilador JIT neuronal con soporte PyTorch.',
              status: 'in_progress',
              points: ['Interconexión fotónica de 800 Gbps', 'Reducción de latencia a 2.4ms', 'Integración con Cirq']
            },
            {
              id: 'm3',
              phase: 'Fase 3 — Próximamente',
              dateOrQuarter: 'Q4 2026',
              title: 'Red Cuántica Distribuida Q-Net',
              description: 'Entrelazamiento de larga distancia entre centros de datos de Zúrich, Tokio y San Francisco.',
              status: 'upcoming',
              points: ['Repetidores cuánticos de estado sólido', 'Ventaja cuántica comercial', 'Cluster de 4,096 Qubits']
            }
          ]
        },
        testimonials: {
          enabled: true,
          title: 'Lo que opinan los científicos y directores de I+D.',
          subtitle: 'Pioneros en biotecnología, criptografía y ciencia de materiales.',
          items: [
            {
              id: 't1',
              name: 'Dr. Hiroshi Tanaka',
              role: 'Director de Computación Teórica',
              company: 'RIKEN Quantum Center',
              quote: 'Quantum nos permitió simular el estado fundamental de catalizadores enzimáticos en menos de tres horas de cálculo. Un hito sin precedentes en la química moderna.',
              avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
              rating: 5
            },
            {
              id: 't2',
              name: 'Dra. Astrid Lindholm',
              role: 'Principal Research Scientist',
              company: 'BioPharma AI Institute',
              quote: 'La API de Quantum es la más limpia y predecible de la industria. El compilador Q-JIT nos ahorró seis meses de desarrollo y calibración de pulsos físicos.',
              avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
              rating: 5
            }
          ]
        },
        pricing: {
          enabled: true,
          title: 'Acceso a Capacidad Cuántica',
          subtitle: 'Facturación transparente por tiempo de coherencia de circuito o reserva de nodos dedicados.',
          billingCycle: 'monthly',
          discountNote: '15% de crédito adicional para instituciones académicas',
          plans: [
            {
              id: 'q_dev',
              name: 'Developer Sandbox',
              tag: 'Simulador Q-GPU',
              priceMonthly: '149€',
              priceAnnual: '119€',
              description: 'Para probar y compilar algoritmos en simulador clásico de 36 qubits.',
              features: [
                'Simulación GPU de hasta 36 qubits',
                'Compilador Q-JIT con optimizaciones automáticas',
                'SDK en Python, Rust y TypeScript',
                'Acceso a la comunidad de investigadores Quantum'
              ],
              ctaText: 'Iniciar Sandbox',
              ctaLink: '#sandbox',
              highlighted: false
            },
            {
              id: 'q_cluster',
              name: 'Quantum Dedicated',
              tag: 'Hardware Real',
              priceMonthly: '990€',
              priceAnnual: '850€',
              description: 'Acceso directo a nodos criogénicos reales con fidelidad del 99.98%.',
              features: [
                'Acceso directo a chip de 1,024 qubits',
                '50,000 disparos de circuito / mes',
                'Prioridad de cola en cluster criogénico',
                'Corrección de errores activa en tiempo real',
                'Soporte técnico por físicos e ingenieros cuánticos'
              ],
              ctaText: 'Reservar Nodo',
              ctaLink: '#reserve-node',
              highlighted: true
            },
            {
              id: 'q_enterprise',
              name: 'Institutional Grid',
              tag: 'Dedicado On-Prem',
              priceMonthly: '3,500€',
              priceAnnual: '2,900€',
              description: 'Para laboratorios nacionales y consorcios farmacéuticos globales.',
              features: [
                'Cluster criogénico exclusivo 24/7',
                'Tiempo de circuito y disparos ilimitados',
                'SLA garantizado con calibración horaria',
                'Consultoría de diseño de algoritmos cuánticos',
                'Despliegue híbrido con conexión VPN dedicada'
              ],
              ctaText: 'Contactar Físicos de Enlace',
              ctaLink: '#contact-quantum',
              highlighted: false
            }
          ]
        },
        faq: {
          enabled: true,
          title: 'Preguntas Frecuentes sobre Quantum OS',
          subtitle: 'Detalles sobre compatibilidad, calibración y seguridad física.',
          items: [
            {
              id: 'qf_1',
              question: '¿Qué bibliotecas y frameworks cuánticos son compatibles?',
              answer: 'Nuestro SDK ofrece integración nativa con Python (Qiskit, PennyLane, Cirq), Rust, C++ y TypeScript mediante APIs gRPC de ultra baja latencia.'
            },
            {
              id: 'qf_2',
              question: '¿Con qué frecuencia se calibran los qubits físicos?',
              answer: 'Los clusters realizan recalibración óptica y microondas automatizada cada 6 horas para asegurar una fidelidad superior al 99.95% de forma ininterrumpida.'
            },
            {
              id: 'qf_3',
              question: '¿Cómo se garantiza la privacidad de los algoritmos propietarios?',
              answer: 'Los circuitos se compilan en memoria protegida en enclaves criptográficos hardware (AMD SEV-SNP) con destrucción instantánea de trazas de ejecución tras la medición.'
            }
          ]
        },
        ctaFinal: {
          enabled: true,
          kicker: 'Lidera la Nueva Era',
          title: 'Acelera tus descubrimientos científicos hoy.',
          subtitle: 'Despliega tu primer circuito cuántico en menos de 5 minutos con nuestra API.',
          primaryCta: { text: 'Obtener Clave de API', link: '#pricing' },
          secondaryCta: { text: 'Explorar Documentación', link: '#docs' },
          backgroundStyle: 'glow'
        },
        footer: {
          copyright: '© 2026 Quantum Computation Labs. Tecnologías patentadas de coherencia cuántica.',
          legalLinks: [
            { label: 'Arquitectura', href: '#arch' },
            { label: 'Seguridad Criptográfica', href: '#crypto' },
            { label: 'Aviso Legal', href: '#legal' }
          ],
          socialLinks: [
            { platform: 'Twitter / X', url: 'https://twitter.com' },
            { platform: 'GitHub', url: 'https://github.com' },
            { platform: 'LinkedIn', url: 'https://linkedin.com' }
          ]
        }
      }
    }
  },

  // 3. CIRCUIT — Startup Tecnológica & Herramientas DevTools
  {
    id: 'circuit-devtools',
    name: 'Circuit',
    tagline: 'Plataforma para desarrolladores con despliegues instantáneos, observabilidad de microservicios y edge computing',
    category: 'saas',
    thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
    description: 'Gradientes violeta profundo #8B5CF6, tipografía técnica, marquesina de tecnologías, pestañas de arquitectura de código, métricas de despliegue, planes para desarrolladores y FAQ técnica.',
    accentColor: '#8B5CF6',
    theme: 'dark',
    defaultConfig: {
      templateId: 'circuit-devtools',
      name: 'Circuit Cloud',
      slug: 'circuit-cloud',
      domain: 'circuitcloud.dev',
      theme: 'dark',
      accentColor: '#8B5CF6',
      fontFamily: 'Inter, -apple-system, sans-serif',
      borderRadius: 18,
      published: true,
      sectionOrder: [
        'navbar',
        'hero',
        'logos',
        'marquee',
        'bentoFeatures',
        'tabs',
        'stats',
        'testimonials',
        'pricing',
        'faq',
        'ctaFinal',
        'footer'
      ],
      seo: {
        title: 'Circuit — Edge Computing & Despliegues Instantáneos para Desarrolladores',
        description: 'Despliega microservicios en 300+ ubicaciones edge globales con cero configuración y observabilidad integrada.',
        keywords: 'devtools, edge computing, serverless, microservicios, ci/cd, observabilidad'
      },
      sections: {
        navbar: {
          brandName: 'Circuit',
          logoText: 'CIRCUIT.DEV',
          ctaText: 'Desplegar Ahora',
          ctaLink: '#pricing',
          links: [
            { label: 'Edge Network', href: '#features' },
            { label: 'Herramientas', href: '#tabs' },
            { label: 'Rendimiento', href: '#stats' },
            { label: 'Precios', href: '#pricing' },
            { label: 'Docs', href: '#faq' }
          ],
          glassBlur: true,
          sticky: true
        },
        hero: {
          enabled: true,
          badge: 'Circuit CLI v4.0 liberada • Despliegue en 2.1s',
          kicker: 'Infraestructura Edge para Creadores',
          title: 'Código al mundo en milisegundos.',
          highlightTitle: 'Sin servidores que mantener.',
          subtitle: 'La plataforma de despliegue global con base de datos distribuida, funciones serverless y observabilidad en tiempo real.',
          primaryCta: { text: 'Iniciar Gratis con GitHub', link: '#pricing' },
          secondaryCta: { text: 'Ver Documentación CLI →', link: '#tabs' },
          imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1600&q=80',
          style: 'centered'
        },
        logos: {
          enabled: true,
          title: 'DESARROLLADORES DE LAS MEJORES EMPRESAS TECH CONSTRUYEN EN CIRCUIT',
          items: [
            { id: 'l1', name: 'Supabase', tagline: 'Database' },
            { id: 'l2', name: 'Vercel', tagline: 'Frontend Cloud' },
            { id: 'l3', name: 'Stripe', tagline: 'Payments' },
            { id: 'l4', name: 'Prisma', tagline: 'ORM Framework' },
            { id: 'l5', name: 'PostHog', tagline: 'Analytics' }
          ]
        },
        marquee: {
          enabled: true,
          speed: 'normal',
          direction: 'left',
          items: [
            { id: 'm1', text: '320+ NODOS EDGE EN 90 PAÍSES', highlight: true, icon: 'Globe2' },
            { id: 'm2', text: 'ARQUITECTURA ZERO COLD-STARTS (<0.5ms)', highlight: false, icon: 'Zap' },
            { id: 'm3', text: 'BASE DE DATOS SQL GLOBALMENTE REPLICADA', highlight: true, icon: 'Boxes' },
            { id: 'm4', text: 'SOPORTE NATIVO RUST, TYPESCRIPT & GO', highlight: false, icon: 'Code2' }
          ]
        },
        bentoFeatures: {
          enabled: true,
          kicker: 'Desarrollado para la Velocidad',
          title: 'Todo lo que un equipo de ingeniería sueña.',
          subtitle: 'Elimina las horas invertidas en configurar Dockerfiles, clústeres Kubernetes y políticas complejas de IAM.',
          items: [
            {
              id: 'f1',
              title: 'Despliegues Git Instantáneos',
              description: 'Cada `git push` genera un entorno de vista previa aislado con URL propia y base de datos clonada en milisegundos.',
              icon: 'Zap',
              tag: 'GitOps Automático',
              colSpan: 2,
              statNumber: '2.1s',
              statLabel: 'Tiempo medio de compilación y despliegue global'
            },
            {
              id: 'f2',
              title: 'Bases de Datos Edge SQLite/SQL',
              description: 'Replicación multi-región activa-activa con consistencia serializable y lecturas locales ultra rápidas.',
              icon: 'Boxes',
              tag: 'Zero-Latency DB',
              colSpan: 1
            },
            {
              id: 'f3',
              title: 'Observabilidad & Trazas en Vivo',
              description: 'Monitorea errores, latencia p99 y logs en streaming directo desde la terminal sin agentes pesados.',
              icon: 'Cpu',
              tag: 'OpenTelemetry',
              colSpan: 1
            },
            {
              id: 'f4',
              title: 'Cero Arranques en Frío (Cold Starts)',
              description: 'Aislamiento V8 de última generación con tiempos de arranque inferiores a 500 microsegundos.',
              icon: 'ShieldCheck',
              tag: 'V8 Isolate Engine',
              colSpan: 2,
              statNumber: '99.999%',
              statLabel: 'Disponibilidad de red a nivel mundial'
            }
          ]
        },
        tabs: {
          enabled: true,
          kicker: 'Flujo del Desarrollador',
          title: 'Una experiencia de terminal y código sin fricción.',
          subtitle: 'Desde el primer comando hasta el escalado automático de millones de solicitudes.',
          tabs: [
            {
              id: 'tab_cli',
              label: 'CLI & Terminal',
              icon: 'Code2',
              title: 'Control total desde tu terminal preferida',
              description: 'Comandos intuitivos para crear secretos, clonar entornos y hacer debugging en tiempo real.',
              imageUrl: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&w=1200&q=80',
              points: [
                '`circuit deploy --env production` en un segundo',
                '`circuit logs --follow --tail 100` con resaltado de sintaxis',
                'Gestión de variables de entorno cifradas'
              ]
            },
            {
              id: 'tab_db',
              label: 'Edge SQL Database',
              icon: 'Boxes',
              title: 'Datos distribuidos cerca de tus usuarios',
              description: 'Elimina las consultas lentas a bases de datos situadas al otro lado del océano.',
              imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
              points: [
                'Lecturas automáticas en el nodo geográfico más cercano',
                'Backups continuos punto en el tiempo (PITR)',
                'Conexiones HTTP seguras sin saturación de sockets'
              ]
            },
            {
              id: 'tab_observability',
              label: 'Métricas & Trazabilidad',
              icon: 'TrendingUp',
              title: 'Telemetría transparente en cada endpoint',
              description: 'Rastrea cada invocación con flamegraphs detallados y desglose de tiempos de CPU y red.',
              imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
              points: [
                'Alertas instantáneas a Slack y Discord ante errores 5xx',
                'Métricas p50, p95 y p99 de latencia por país',
                'Exportación nativa compatible con Datadog y Prometheus'
              ]
            }
          ]
        },
        stats: {
          enabled: true,
          kicker: 'Rendimiento Global',
          title: 'Escala sin límites con infraestructura probada.',
          subtitle: 'Métricas de nuestra red global procesadas durante los últimos 30 días.',
          items: [
            { id: 's1', value: '320+', label: 'Ubicaciones Edge', description: 'En los 5 continentes' },
            { id: 's2', value: '< 15ms', label: 'Latencia p90', description: 'Para el 95% de la población mundial' },
            { id: 's3', value: '4.8B', label: 'Peticiones/Mes', description: 'Atendidas con cero caídas' },
            { id: 's4', value: '0 Cold-Starts', label: 'Tiempo de Arranque', description: 'Con aislamiento V8 Isolate' }
          ]
        },
        testimonials: {
          enabled: true,
          title: 'Lo que opinan los ingenieros de software.',
          subtitle: 'Desarrolladores independientes y líderes técnicos explican por qué migraron a Circuit.',
          items: [
            {
              id: 't1',
              name: 'David Navarrete',
              role: 'Staff Infrastructure Engineer',
              company: 'Krypton Labs',
              quote: 'Migramos 40 microservicios de AWS a Circuit en tres días. Redujimos nuestra factura de nube en un 65% y nuestra latencia en Europa bajó de 140ms a 18ms.',
              avatarUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=300&q=80',
              rating: 5
            },
            {
              id: 't2',
              name: 'Lucía Méndez',
              role: 'Head of Developer Experience',
              company: 'Voxel Media',
              quote: 'El flujo de despliegue con entornos de vista previa por rama de Git ha multiplicado la velocidad de nuestro equipo de producto. Ya no hay bloqueos en staging.',
              avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80',
              rating: 5
            }
          ]
        },
        pricing: {
          enabled: true,
          title: 'Precios justos para desarrolladores.',
          subtitle: 'Comienza gratis sin tarjeta. Paga solo cuando tu tráfico crezca.',
          billingCycle: 'monthly',
          discountNote: '2 meses gratis al elegir facturación anual',
          plans: [
            {
              id: 'c_hobby',
              name: 'Hobby',
              tag: 'Gratis para Siempre',
              priceMonthly: '0€',
              priceAnnual: '0€',
              description: 'Para proyectos personales, prototipos y experimentación.',
              features: [
                '100,000 peticiones edge al mes',
                'Hasta 3 proyectos activos',
                'Despliegues automáticos desde GitHub',
                '1 GB de almacenamiento SQL distribuido',
                'Certificados SSL automáticos ilimitados'
              ],
              ctaText: 'Comenzar Gratis',
              ctaLink: '#start-free',
              highlighted: false
            },
            {
              id: 'c_pro',
              name: 'Pro',
              tag: 'Recomendado',
              priceMonthly: '29€',
              priceAnnual: '24€',
              description: 'Para aplicaciones en producción con tráfico comercial activo.',
              features: [
                '10 millones de peticiones edge / mes',
                'Proyectos y dominios personalizados ilimitados',
                '50 GB de almacenamiento SQL con backups PITR',
                'Entornos de preview efímeros ilimitados',
                'Trazabilidad OpenTelemetry y logs por 30 días',
                'Soporte prioritario por Discord y correo'
              ],
              ctaText: 'Probar Plan Pro',
              ctaLink: '#checkout-pro',
              highlighted: true
            },
            {
              id: 'c_scale',
              name: 'Scale',
              tag: 'Alta Demanda',
              priceMonthly: '149€',
              priceAnnual: '125€',
              description: 'Para empresas con tráfico masivo y requerimientos de soporte 24/7.',
              features: [
                '100 millones de peticiones edge / mes',
                'Almacenamiento SQL auto-escalable',
                'SLA garantizado de 99.99%',
                'Direcciones IP estáticas dedicadas',
                'Canal de Slack compartido con ingenieros de Circuit',
                'Facturación personalizada por transferencia bancaria'
              ],
              ctaText: 'Hablar con Arquitectura',
              ctaLink: '#contact-scale',
              highlighted: false
            }
          ]
        },
        faq: {
          enabled: true,
          title: 'Preguntas Frecuentes Técnicas',
          subtitle: 'Todo lo que necesitas saber sobre runtime, compatibilidad y base de datos.',
          items: [
            {
              id: 'cf_1',
              question: '¿Qué lenguajes y runtimes soporta Circuit?',
              answer: 'Soportamos TypeScript, JavaScript, Rust, Go, Python y cualquier lenguaje compilable a WebAssembly (Wasm) con APIs web estándar (fetch, streams, crypto).'
            },
            {
              id: 'cf_2',
              question: '¿Cómo funciona la base de datos distribuida?',
              answer: 'Utilizamos un motor SQL distribuido basado en SQLite y replicación Raft. Las lecturas se ejecutan en el nodo edge más cercano en <2ms y las escrituras se sincronizan automáticamente con consenso global.'
            },
            {
              id: 'cf_3',
              question: '¿Puedo conectar mi propio dominio personalizado con SSL?',
              answer: 'Sí. Puedes añadir cualquier dominio o subdominio. Generamos y renovamos certificados SSL TLS 1.3 de Let\'s Encrypt automáticamente.'
            }
          ]
        },
        ctaFinal: {
          enabled: true,
          kicker: 'Despliega en Segundos',
          title: 'Construye tu próxima gran idea en Circuit.',
          subtitle: 'Únete a miles de desarrolladores que ya han dejado atrás los servidores tradicionales.',
          primaryCta: { text: 'Crear Proyecto Gratis', link: '#pricing' },
          secondaryCta: { text: 'Leer Guía de Inicio Rápido', link: '#docs' },
          backgroundStyle: 'glow'
        },
        footer: {
          copyright: '© 2026 Circuit Cloud Platform Inc. Construido para desarrolladores.',
          legalLinks: [
            { label: 'Documentación', href: '#docs' },
            { label: 'Estado de Red', href: '#status' },
            { label: 'Privacidad', href: '#privacy' },
            { label: 'Términos', href: '#terms' }
          ],
          socialLinks: [
            { platform: 'Twitter / X', url: 'https://twitter.com' },
            { platform: 'GitHub', url: 'https://github.com' },
            { platform: 'Discord', url: 'https://discord.com' }
          ]
        }
      }
    }
  },

  // 17. NIMBUS — SaaS Landing con Fondo Degradado & Glassmorphism
  {
    id: 'nimbus-saas',
    name: 'Nimbus',
    tagline: 'SaaS moderno de analítica y automatización con fondo degradado etéreo, tarjetas glassmorphism e integraciones nativas',
    category: 'saas',
    thumbnail: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80',
    description: 'Gradiente suave azul-violeta #6366F1 con efecto cristal translúcido, tipografía Inter, dashboard de analítica en tiempo real, catálogo de 50+ integraciones, métricas de retención, planes flexibles y soporte prioritario.',
    accentColor: '#6366F1',
    theme: 'dark',
    defaultConfig: {
      templateId: 'nimbus-saas',
      name: 'Nimbus Analytics',
      slug: 'nimbus-analytics',
      domain: 'nimbuscloud.io',
      theme: 'dark',
      accentColor: '#6366F1',
      fontFamily: 'Inter, -apple-system, sans-serif',
      borderRadius: 20,
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
        title: 'Nimbus — Plataforma de Inteligencia de Datos & Automatización en Tiempo Real',
        description: 'Conecta todas tus fuentes de datos, automatiza flujos de trabajo complejos y obtén predicciones precisas con IA.',
        keywords: 'saas, analítica de datos, automatización de workflows, inteligencia artificial, dashboard en tiempo real'
      },
      sections: {
        navbar: {
          brandName: 'Nimbus',
          logoText: 'NIMBUS',
          ctaText: 'Empezar Gratis',
          ctaLink: '#pricing',
          links: [
            { label: 'Plataforma', href: '#features' },
            { label: 'Integraciones', href: '#tabs' },
            { label: 'Rendimiento', href: '#stats' },
            { label: 'Planes', href: '#pricing' },
            { label: 'Preguntas', href: '#faq' }
          ],
          glassBlur: true,
          sticky: true
        },
        hero: {
          enabled: true,
          badge: 'Nimbus 4.0 con Motores de Predicción en Vivo',
          kicker: 'Inteligencia Operativa en Tiempo Real',
          title: 'Convierte tus datos caóticos en',
          highlightTitle: 'decisiones automáticas.',
          subtitle: 'Una sola plataforma con arquitectura serverless que ingiere millones de eventos por segundo, detecta anomalías y sincroniza tus herramientas favoritas sin latencia.',
          primaryCta: { text: 'Iniciar Prueba de 14 Días', link: '#pricing' },
          secondaryCta: { text: 'Explorar Sandbox Interactivo', link: '#product' },
          imageUrl: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1600&q=80',
          style: 'centered'
        },
        logos: {
          enabled: true,
          title: 'CONFIADO POR EQUIPOS DE INGENIERÍA Y PRODUCTO EN TODO EL MUNDO',
          items: [
            { id: 'nl1', name: 'Supabase', tagline: 'Database Partner' },
            { id: 'nl2', name: 'Datadog', tagline: 'Observability' },
            { id: 'nl3', name: 'Snowflake', tagline: 'Data Cloud' },
            { id: 'nl4', name: 'Postman', tagline: 'API Network' },
            { id: 'nl5', name: 'Linear', tagline: 'Issue Tracking' }
          ]
        },
        marquee: {
          enabled: true,
          speed: 'normal',
          direction: 'left',
          items: [
            { id: 'nm1', text: 'INGESTA DE 10M+ EVENTOS / SEGUNDO', highlight: true, icon: 'Zap' },
            { id: 'nm2', text: 'CONECTORES NATIVOS CON POSTGRESQL & BIGQUERY', highlight: false, icon: 'Database' },
            { id: 'nm3', text: 'ALERTAS INTELIGENTES MEDIANTE IA GENERATIVA', highlight: true, icon: 'Sparkles' },
            { id: 'nm4', text: 'CUMPLIMIENTO SOC2 TIPO II & RGPD EUROPEO', highlight: false, icon: 'ShieldCheck' }
          ]
        },
        bentoFeatures: {
          enabled: true,
          kicker: 'Arquitectura de Datos Nimbus',
          title: 'Potencia sin fricción, desde el primer evento.',
          subtitle: 'Elimina silos y pipelines frágiles con nuestro motor unificado de streaming y procesamiento en memoria.',
          items: [
            {
              id: 'nf1',
              title: 'Canales de Procesamiento en Tiempo Real',
              description: 'Transforma y limpia registros de datos al vuelo con funciones WebAssembly sin tocar servidores dedicados.',
              icon: 'Activity',
              tag: 'Sub-5ms Latency',
              colSpan: 2,
              statNumber: '99.99%',
              statLabel: 'Disponibilidad histórica de la infraestructura global'
            },
            {
              id: 'nf2',
              title: 'Constructor Visual de Automatizaciones',
              description: 'Orquesta flujos multi-paso con disparadores condicionales y reintentos inteligentes.',
              icon: 'GitBranch',
              tag: 'No-Code & SDK',
              colSpan: 1
            },
            {
              id: 'nf3',
              title: 'Gobernanza & Cifrado Granular',
              description: 'Políticas de control de acceso por rol (RBAC) y enmascaramiento dinámico de datos sensibles.',
              icon: 'Lock',
              tag: 'Seguridad Empresarial',
              colSpan: 1
            },
            {
              id: 'nf4',
              title: 'Predicciones con Modelos de Lenguaje y Machine Learning',
              description: 'Anticípate a la pérdida de clientes (churn), detecta picos anómalos de tráfico y proyecta ingresos recurrentes.',
              icon: 'BrainCircuit',
              tag: 'IA Integrada',
              colSpan: 2,
              statNumber: '4.2x',
              statLabel: 'Retorno de inversión promedio reportado por nuestros clientes'
            }
          ]
        },
        productHighlight: {
          enabled: true,
          kicker: 'Visualización Unificada',
          title: 'El centro de control que tu equipo siempre quiso.',
          subtitle: 'Cuadros de mando reactivos que se actualizan sin recargar la página, con filtros multidimensionales y exportación en 1 clic.',
          description: 'Diseñado tanto para analistas de datos que requieren consultas SQL avanzadas como para directores que necesitan resúmenes ejecutivos listos para presentar.',
          imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80',
          layout: 'image-right',
          ctaText: 'Ver Demostración en Directo',
          ctaLink: '#pricing',
          specs: [
            { label: 'Tiempo de Despliegue', value: '< 3 minutos', detail: 'Conexión con 1 línea de código' },
            { label: 'Integraciones Nativas', value: '50+ Conectores', detail: 'Stripe, Segment, Slack, BigQuery' },
            { label: 'SLA Empresarial', value: '99.99% Garantizado', detail: 'Soporte 24/7 con ingenieros dedicados' }
          ]
        },
        tabs: {
          enabled: true,
          kicker: 'Ecosistema Conectado',
          title: 'Se integra con tu pila tecnológica actual.',
          subtitle: 'Conecta tus aplicaciones en minutos sin necesidad de desarrollar APIs desde cero.',
          tabs: [
            {
              id: 'tab_db',
              label: 'Bases de Datos & Almacenes',
              icon: 'Database',
              title: 'Sincronización bidireccional con tus bases de datos',
              description: 'Conecta PostgreSQL, MySQL, MongoDB, Snowflake o BigQuery con replicación incremental en tiempo real.',
              imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
              points: [
                'Change Data Capture (CDC) de ultra baja sobrecarga',
                'Consultas SQL federadas entre múltiples motores',
                'Copia de seguridad y snapshots automatizados cada hora'
              ]
            },
            {
              id: 'tab_apps',
              label: 'SaaS & Herramientas de Negocio',
              icon: 'Layers',
              title: 'Unifica tus herramientas de marketing y finanzas',
              description: 'Recibe eventos desde Stripe, Salesforce, HubSpot, Zendesk y envía alertas a Slack o Microsoft Teams al instante.',
              imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
              points: [
                'Webhooks salientes con lógica de reintentos exponenciales',
                'Mapeo de esquemas JSON con transformaciones visuales',
                'Historial completo de ejecuciones y logs de auditoría'
              ]
            }
          ]
        },
        stats: {
          enabled: true,
          kicker: 'Métricas de Rendimiento',
          title: 'Escalabilidad comprobada a escala global.',
          subtitle: 'Infraestructura robusta construida para resistir los mayores picos de tráfico.',
          items: [
            { id: 'ns1', value: '18B+', label: 'Eventos Procesados / Mes', description: 'Con latencia media < 4.2ms' },
            { id: 'ns2', value: '99.99%', label: 'Disponibilidad de Servicio', description: 'Garantizada por contrato SLA' },
            { id: 'ns3', value: '45,000+', label: 'Equipos Activos', description: 'En más de 120 países' },
            { id: 'ns4', value: '4.9/5', label: 'Satisfacción de Clientes', description: 'Basado en 2,400+ reseñas G2' }
          ]
        },
        testimonials: {
          enabled: true,
          title: 'Lo que dicen los líderes tecnológicos.',
          subtitle: 'Empresas de alto crecimiento confían en Nimbus para su infraestructura analítica.',
          items: [
            {
              id: 'nt1',
              name: 'Laura Méndez',
              role: 'VP of Engineering en DataFlow',
              company: 'Unicornio FinTech',
              quote: 'Nimbus reemplazó tres herramientas distintas y redujo nuestros costes de infraestructura en un 45%. La velocidad con la que podemos crear cuadros de mando en tiempo real es insuperable.',
              avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
              rating: 5
            },
            {
              id: 'nt2',
              name: 'Andrés Collado',
              role: 'Head of Product en HyperScale',
              company: 'E-commerce Global',
              quote: 'El constructor visual de automatizaciones nos permitió conectar nuestras alertas de Stripe y Shopify con nuestro equipo de atención al cliente en una sola tarde.',
              avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
              rating: 5
            }
          ]
        },
        pricing: {
          enabled: true,
          title: 'Planes Transparentes para Cada Etapa',
          subtitle: 'Comienza gratis y escala a medida que aumente tu volumen de datos.',
          billingCycle: 'monthly',
          discountNote: 'Ahorra un 20% en facturación anual',
          plans: [
            {
              id: 'nimbus_starter',
              name: 'Starter',
              tag: 'Para Proyectos en Crecimiento',
              priceMonthly: '29€',
              priceAnnual: '24€',
              description: 'Ideal para startups y equipos pequeños que necesitan analítica fiable y hasta 1M de eventos mensuales.',
              features: [
                'Hasta 1,000,000 eventos mensuales incluidos',
                'Retención de datos en caliente durante 30 días',
                '3 Conexiones de base de datos activas',
                'Alertas por Slack y correo electrónico',
                'Soporte estándar por chat con respuesta < 4h'
              ],
              ctaText: 'Probar Starter Gratis',
              ctaLink: '#start-starter',
              highlighted: false
            },
            {
              id: 'nimbus_growth',
              name: 'Growth Pro',
              tag: 'Más Popular',
              priceMonthly: '89€',
              priceAnnual: '69€',
              description: 'Para empresas en rápida expansión que requieren pipelines avanzados, modelos de IA y soporte prioritario.',
              features: [
                'Hasta 10,000,000 eventos mensuales incluidos',
                'Retención de datos en caliente durante 1 año',
                'Conectores ilimitados y funciones WebAssembly',
                'Modelos de predicción y detección de anomalías IA',
                'SLA del 99.9% y soporte prioritario 24/7'
              ],
              ctaText: 'Comenzar con Growth Pro',
              ctaLink: '#start-growth',
              highlighted: true
            },
            {
              id: 'nimbus_enterprise',
              name: 'Enterprise Dedicado',
              tag: 'Máxima Potencia',
              priceMonthly: '299€',
              priceAnnual: '249€',
              description: 'Para corporaciones con requerimientos de despliegue dedicado en su propia VPC y cumplimiento normativo estricto.',
              features: [
                'Volumen masivo de eventos personalizado',
                'Despliegue On-Premise o VPC dedicada (AWS/GCP/Azure)',
                'Single Sign-On (SSO / SAML) y logs de auditoría SIEM',
                'Gerente de cuenta técnico asignado y SLA 99.99%',
                'Acuerdos de confidencialidad BAA / HIPAA disponibles'
              ],
              ctaText: 'Contactar a Ventas',
              ctaLink: '#contact-sales',
              highlighted: false
            }
          ]
        },
        faq: {
          enabled: true,
          title: 'Preguntas Frecuentes sobre Nimbus',
          subtitle: 'Todo lo que necesitas saber sobre nuestra arquitectura y seguridad.',
          items: [
            {
              id: 'nfq_1',
              question: '¿Cómo se conecta Nimbus a mis fuentes de datos?',
              answer: 'Ofrecemos conectores con un solo clic para los principales motores de bases de datos y servicios SaaS, así como SDKs ligeros para Node.js, Python, Go, Rust y navegadores web.'
            },
            {
              id: 'nfq_2',
              question: '¿Qué ocurre si supero el límite de eventos de mi plan?',
              answer: 'Tu servicio nunca se interrumpirá. Te notificaremos al alcanzar el 80% y 100% de tu cuota, y los eventos adicionales se tarificarán a un coste marginal muy reducido por millar.'
            },
            {
              id: 'nfq_3',
              question: '¿Están mis datos protegidos frente a accesos no autorizados?',
              answer: 'Sí. Todos los datos en tránsito se protegen con TLS 1.3 y en reposo mediante cifrado AES-256 con claves gestionadas por HSM. Contamos con auditorías anuales SOC2 Tipo II.'
            }
          ]
        },
        ctaFinal: {
          enabled: true,
          kicker: 'Despliegue Inmediato',
          title: 'Lleva la analítica de tu empresa al siguiente nivel.',
          subtitle: 'Crea tu cuenta en menos de dos minutos. Sin tarjeta de crédito requerida.',
          primaryCta: { text: 'Crear Cuenta Gratuita', link: '#pricing' },
          secondaryCta: { text: 'Ver Documentación Técnica', link: '#docs' },
          backgroundStyle: 'glow'
        },
        footer: {
          copyright: '© 2026 Nimbus Analytics Inc. Todos los derechos reservados.',
          legalLinks: [
            { label: 'Políticas de Privacidad', href: '#privacy' },
            { label: 'Condiciones del Servicio', href: '#terms' },
            { label: 'Seguridad & Cumplimiento', href: '#security' },
            { label: 'Estado de la Red', href: '#status' }
          ],
          socialLinks: [
            { platform: 'GitHub', url: 'https://github.com' },
            { platform: 'Twitter / X', url: 'https://twitter.com' },
            { platform: 'LinkedIn', url: 'https://linkedin.com' }
          ]
        }
      }
    }
  },

  // 19. FUSION — App Móvil con Mockups de Smartphone & Badges de Descarga
  {
    id: 'fusion-mobile-app',
    name: 'Fusion',
    tagline: 'Landing moderna para aplicaciones móviles iOS & Android con capturas interactivas, badges de descarga y reseñas de usuarios',
    category: 'saas',
    thumbnail: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80',
    description: 'Fondo claro impecable con acento azul cobalto #2563EB, mockups de teléfonos inteligentes de última generación, enlaces a App Store y Google Play, bento de características táctiles, calificaciones 5 estrellas y suscripciones in-app.',
    accentColor: '#2563EB',
    theme: 'light',
    defaultConfig: {
      templateId: 'fusion-mobile-app',
      name: 'Fusion App',
      slug: 'fusion-app',
      domain: 'fusionapp.mobile',
      theme: 'light',
      accentColor: '#2563EB',
      fontFamily: 'Inter, -apple-system, sans-serif',
      borderRadius: 22,
      published: true,
      sectionOrder: [
        'navbar',
        'hero',
        'logos',
        'marquee',
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
        title: 'Fusion — La App Móvil Definitiva para Productividad & Finanzas Personales',
        description: 'Disponible en App Store y Google Play. Controla tus gastos, ahorra automáticamente y gestiona tus metas financieras.',
        keywords: 'app movil, ios app, android app, finanzas personales, productividad, descargar app'
      },
      sections: {
        navbar: {
          brandName: 'Fusion',
          logoText: 'FUSION APP',
          ctaText: 'Descargar App',
          ctaLink: '#download',
          links: [
            { label: 'Funciones', href: '#features' },
            { label: 'Interfaz', href: '#product' },
            { label: 'Opiniones', href: '#testimonials' },
            { label: 'Planes Plus', href: '#pricing' },
            { label: 'Ayuda', href: '#faq' }
          ],
          glassBlur: true,
          sticky: true
        },
        hero: {
          enabled: true,
          badge: 'Nº 1 en Finanzas & Productividad • Más de 500,000 Descargas',
          kicker: 'Tu Vida Financiera Simplificada',
          title: 'El dinero en su estado más',
          highlightTitle: 'inteligente y fluido.',
          subtitle: 'Fusion reúne todas tus cuentas bancarias, categoriza tus gastos con inteligencia artificial y automatiza tus ahorros con una experiencia táctil intuitiva y segura.',
          primaryCta: { text: 'Descargar en App Store ', link: '#appstore' },
          secondaryCta: { text: 'Disponible en Google Play ▶', link: '#googleplay' },
          imageUrl: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1600&q=80',
          style: 'split'
        },
        logos: {
          enabled: true,
          title: 'RECONOCIDA POR LOS PRINCIPALES MEDIOS TECNOLÓGICOS',
          items: [
            { id: 'fl1', name: 'TechCrunch', tagline: 'App of the Week' },
            { id: 'fl2', name: 'The Verge', tagline: 'Best Design 2026' },
            { id: 'fl3', name: 'Wired', tagline: 'Editor\'s Choice' },
            { id: 'fl4', name: 'Product Hunt', tagline: '#1 Product of the Day' },
            { id: 'fl5', name: 'Forbes', tagline: 'Fintech 50' }
          ]
        },
        marquee: {
          enabled: true,
          speed: 'normal',
          direction: 'left',
          items: [
            { id: 'fm1', text: 'NOTIFICACIONES INSTANTÁNEAS DE GASTOS', highlight: true, icon: 'Bell' },
            { id: 'fm2', text: 'SEGURIDAD BIOMÉTRICA CON FACE ID & TOUCH ID', highlight: false, icon: 'ShieldCheck' },
            { id: 'fm3', text: 'REDONDEO AUTOMÁTICO DE COMPRAS PARA INVERSIÓN', highlight: true, icon: 'TrendingUp' },
            { id: 'fm4', text: 'SIN COMISIONES OCULTAS NI LETRA PEQUEÑA', highlight: false, icon: 'CheckCircle2' }
          ]
        },
        bentoFeatures: {
          enabled: true,
          kicker: 'Diseñada al Detalle',
          title: 'Todo lo que necesitas para dominar tu economía.',
          subtitle: 'Diseño nativo para iOS y Android con animaciones fluidas a 120 FPS y soporte offline.',
          items: [
            {
              id: 'ff1',
              title: 'Presupuestos Inteligentes con IA',
              description: 'Nuestra inteligencia artificial analiza tus patrones de consumo mensuales y te avisa antes de que sobrepases tus límites previstos.',
              icon: 'PieChart',
              tag: 'Algoritmo Predictivo',
              colSpan: 2,
              statNumber: '320€',
              statLabel: 'Ahorro promedio mensual registrado por usuario activo'
            },
            {
              id: 'ff2',
              title: 'Bóvedas de Ahorro con Rendimiento',
              description: 'Crea metas para viajes, emergencias o proyectos y haz crecer tu dinero día a día sin penalizaciones por retirada.',
              icon: 'Vault',
              tag: '3.5% TAE',
              colSpan: 1
            },
            {
              id: 'ff3',
              title: 'Tarjetas Virtuales de Uso Único',
              description: 'Genera tarjetas desechables instantáneas para comprar en internet con total tranquilidad y protección antifraude.',
              icon: 'CreditCard',
              tag: 'Seguridad Total',
              colSpan: 1
            },
            {
              id: 'ff4',
              title: 'Sincronización Bancaria Europea e Internacional',
              description: 'Conéctate de forma segura con más de 2,500 bancos mediante protocolos Open Banking regulados por el Banco Central Europeo.',
              icon: 'Building2',
              tag: 'Open Banking PSD2',
              colSpan: 2,
              statNumber: '2,500+',
              statLabel: 'Entidades financieras compatibles en Europa y América'
            }
          ]
        },
        productHighlight: {
          enabled: true,
          kicker: 'Experiencia Táctil',
          title: 'Una interfaz rápida, limpia y sin anuncios.',
          subtitle: 'Desliza para transferir, visualiza gráficos interactivos y gestiona tus suscripciones recurrentes con un solo toque.',
          description: 'Desarrollada íntegramente en código nativo para garantizar el menor consumo de batería, carga instantánea y soporte completo para widgets de pantalla de inicio.',
          imageUrl: 'https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=1600&q=80',
          layout: 'image-left',
          ctaText: 'Descargar Gratis',
          ctaLink: '#download',
          specs: [
            { label: 'Valoración en App Store', value: '4.9 ★★★★★', detail: 'Más de 38,000 reseñas' },
            { label: 'Tiempo de Carga', value: '< 0.2 segundos', detail: 'Arquitectura nativa ultra ligera' },
            { label: 'Privacidad', value: 'Cero Publicidad', detail: 'Tus datos financieros nunca se venden' }
          ]
        },
        stats: {
          enabled: true,
          kicker: 'Comunidad Fusion',
          title: 'Números que demuestran la confianza de nuestros usuarios.',
          subtitle: 'Una de las apps financieras de mayor crecimiento en el continente.',
          items: [
            { id: 'fs1', value: '500,000+', label: 'Usuarios Activos', description: 'Creciendo un 25% cada mes' },
            { id: 'fs2', value: '1.2B €', label: 'Transacciones Gestionadas', description: 'Con cero incidencias de seguridad' },
            { id: 'fs3', value: '4.9/5', label: 'Puntuación en App Store', description: 'Top 5 en la categoría de Finanzas' },
            { id: 'fs4', value: '100%', label: 'Cifrado de Extremo a Extremo', description: 'Estándar bancario AES-256' }
          ]
        },
        testimonials: {
          enabled: true,
          title: 'Lo que opinan los usuarios que usan Fusion cada día.',
          subtitle: 'Historias reales de personas que han tomado el control de sus finanzas.',
          items: [
            {
              id: 'ft1',
              name: 'Pablo Herrero',
              role: 'Diseñador de Producto en Madrid',
              company: 'Usuario Fusion Pro',
              quote: 'Es la app bancaria mejor diseñada que he probado en mi vida. El redondeo automático me ha permitido ahorrar casi 2,000 euros para mis vacaciones de verano casi sin darme cuenta.',
              avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
              rating: 5
            },
            {
              id: 'ft2',
              name: 'Marina Segovia',
              role: 'Emprendedora Digital',
              company: 'Usuaria Fusion desde 2024',
              quote: 'Poder ver mis cuentas personales y las de mi negocio en una sola pantalla con categorización automática me ahorra horas todos los fines de mes.',
              avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
              rating: 5
            }
          ]
        },
        pricing: {
          enabled: true,
          title: 'Planes Simples y Sin Compromiso',
          subtitle: 'Disfruta de Fusion de forma gratuita o desbloquea funciones premium con Fusion Plus.',
          billingCycle: 'monthly',
          discountNote: '2 meses gratis en el plan anual',
          plans: [
            {
              id: 'fusion_free',
              name: 'Fusion Estándar',
              tag: 'Para Siempre Gratis',
              priceMonthly: '0€',
              priceAnnual: '0€',
              description: 'Ideal para quienes quieren empezar a organizar sus gastos diarios y sincronizar hasta 2 cuentas bancarias.',
              features: [
                'Hasta 2 cuentas bancarias conectadas',
                'Categorización básica de gastos automáticos',
                '1 Bóveda de ahorro con redondeo',
                'Tarjetas virtuales estándares',
                'Soporte dentro de la app'
              ],
              ctaText: 'Descargar Gratis',
              ctaLink: '#download-free',
              highlighted: false
            },
            {
              id: 'fusion_plus',
              name: 'Fusion Plus',
              tag: 'Más Popular',
              priceMonthly: '4.99€',
              priceAnnual: '3.99€',
              description: 'Para personas que quieren maximizar su ahorro, desbloquear IA predictiva y cuentas internacionales multimoneda.',
              features: [
                'Cuentas bancarias ilimitadas y cuentas de inversión',
                'IA predictiva con avisos de gastos recurrentes',
                'Bóvedas ilimitadas con 3.5% TAE de rendimiento',
                'Tarjetas virtuales desechables ilimitadas',
                'Cuentas multimoneda sin comisiones de cambio',
                'Soporte prioritario VIP 24/7'
              ],
              ctaText: 'Probar 30 Días Gratis',
              ctaLink: '#start-plus',
              highlighted: true
            }
          ]
        },
        faq: {
          enabled: true,
          title: 'Preguntas Frecuentes sobre Fusion',
          subtitle: 'Todo sobre seguridad, compatibilidad bancaria y protección de fondos.',
          items: [
            {
              id: 'ffq_1',
              question: '¿Es seguro conectar mis cuentas bancarias a Fusion?',
              answer: 'Totalmente. Fusion opera bajo la directiva europea PSD2 con permisos de solo lectura. Nadie puede realizar transferencias ni mover fondos desde Fusion sin tu consentimiento biométrico explícito.'
            },
            {
              id: 'ffq_2',
              question: '¿Está Fusion disponible para dispositivos iOS y Android?',
              answer: 'Sí. Fusion es totalmente compatible con iOS 16+ en iPhone y con Android 11+ en smartphones y tablets, con modo oscuro y widgets de pantalla de inicio.'
            },
            {
              id: 'ffq_3',
              question: '¿Cómo puedo cancelar mi suscripción a Fusion Plus?',
              answer: 'Puedes cancelar en cualquier momento directamente desde los ajustes de la App Store de Apple o Google Play Store con un solo toque.'
            }
          ]
        },
        ctaFinal: {
          enabled: true,
          kicker: 'Disponible Hoy',
          title: 'Únete a más de 500,000 personas que ya disfrutan de Fusion.',
          subtitle: 'Descarga la app en tu teléfono y experimenta una nueva forma de entender tus finanzas.',
          primaryCta: { text: 'Descargar en App Store ', link: '#appstore' },
          secondaryCta: { text: 'Conseguir en Google Play ▶', link: '#googleplay' },
          backgroundStyle: 'glow'
        },
        footer: {
          copyright: '© 2026 Fusion Mobile Technologies S.L. Entidad regulada bajo normativa PSD2.',
          legalLinks: [
            { label: 'Aviso Legal', href: '#legal' },
            { label: 'Política de Privacidad', href: '#privacy' },
            { label: 'Seguridad Bancaria', href: '#security' },
            { label: 'Términos de Uso', href: '#terms' }
          ],
          socialLinks: [
            { platform: 'Instagram', url: 'https://instagram.com' },
            { platform: 'Twitter / X', url: 'https://twitter.com' },
            { platform: 'TikTok', url: 'https://tiktok.com' }
          ]
        }
      }
    }
  }
];
