import { TemplateDefinition } from '../../types';

export const WELLNESS_TEMPLATES: TemplateDefinition[] = [
  // 1. PRANA SANCTUARY — Yoga, Meditación & Retiros Holísticos
  {
    id: 'zen-yoga',
    name: 'Prana Sanctuary',
    tagline: 'Estudio de yoga tradicional, meditación guiada y retiros holísticos en entornos naturales protegidos',
    category: 'wellness',
    thumbnail: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80',
    description: 'Estética en tonos salvia y tierra suave #2D5A27, tipografía Lora y Outfit, carrusel de retiros de fin de semana, cuadrícula de estilos de yoga, horarios semanales y reserva de clases.',
    accentColor: '#2D5A27',
    theme: 'light',
    defaultConfig: {
      templateId: 'zen-yoga',
      name: 'Prana Sanctuary Yoga & Retreats',
      slug: 'prana-sanctuary',
      domain: 'pranasanctuary.com',
      theme: 'light',
      accentColor: '#2D5A27',
      fontFamily: "'Lora', Georgia, serif",
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
        title: 'Prana Sanctuary — Yoga Consciente, Meditación & Retiros',
        description: 'Encuentra el equilibrio físico y mental a través de la respiración consciente, el movimiento fluido y el silencio.',
        keywords: 'estudio de yoga, hatha yoga, vinyasa flow, meditacion guiada, retiros holísticos, pranayama'
      },
      sections: {
        navbar: {
          brandName: 'Prana Sanctuary',
          logoText: 'PRANA SANCTUARY',
          ctaText: 'Reservar Primera Clase',
          ctaLink: '#pricing',
          links: [
            { label: 'Estilos de Yoga', href: '#features' },
            { label: 'El Santuario', href: '#product' },
            { label: 'Pases & Membresías', href: '#pricing' },
            { label: 'Espacios', href: '#gallery' }
          ],
          glassBlur: true,
          sticky: true
        },
        hero: {
          enabled: true,
          badge: 'Profesores Certificados Yoga Alliance 500h • Grupos Reducidos',
          kicker: 'Cuerpo, Mente & Respiración',
          title: 'Un refugio de paz para reconectar con',
          highlightTitle: 'tu verdadera esencia.',
          subtitle: 'Clases diarias de Hatha, Vinyasa y Yin Yoga en un espacio de madera natural bañado por luz suave, diseñado para cultivar la presencia y calmar el sistema nervioso.',
          primaryCta: { text: 'Probar Clase de Bienvenida (15€)', link: '#pricing' },
          secondaryCta: { text: 'Explorar Horarios y Estilos →', link: '#features' },
          imageUrl: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1600&q=80',
          style: 'centered'
        },
        logos: {
          enabled: true,
          title: 'AVALADO POR ASOCIACIONES INTERNACIONALES DE YOGA',
          items: [
            { id: 'l1', name: 'Yoga Alliance RYS 500', tagline: 'Certified School' },
            { id: 'l2', name: 'Mindfulness Association', tagline: 'Accredited Center' },
            { id: 'l3', name: 'Holistic Health Guild', tagline: 'Excellence in Wellness' }
          ]
        },
        bentoFeatures: {
          enabled: true,
          kicker: 'Nuestra Práctica',
          title: 'Clases adaptadas a todos los niveles de experiencia.',
          subtitle: 'Desde secuencias dinámicas vigorizantes hasta baños de sonido y relajación profunda.',
          items: [
            {
              id: 'f1',
              title: 'Vinyasa Flow Dinámico & Alineación',
              description: 'Secuencias fluidas que sincronizan respiración y movimiento para mejorar la flexibilidad, fuerza del core y concentración mental.',
              icon: 'Activity',
              tag: 'Fuerza & Fluidez',
              colSpan: 2,
              statNumber: '35+',
              statLabel: 'Clases semanales presenciales y online'
            },
            {
              id: 'f2',
              title: 'Yin Yoga & Baños de Sonido con Cuencos',
              description: 'Posturas pasivas mantenidas de 3 a 5 minutos sobre esterilla para relajar el tejido conectivo fascial y liberar tensión muscular profunda.',
              icon: 'Moon',
              tag: 'Calma Profunda',
              colSpan: 1
            },
            {
              id: 'f3',
              title: 'Suelo Radiante de Bambú & Aire Purificado',
              description: 'Instalaciones bioclimáticas con filtración HEPA continua y temperatura controlada para una práctica respiratoria sin impurezas.',
              icon: 'Sparkles',
              tag: 'Espacio Puro',
              colSpan: 1
            },
            {
              id: 'f4',
              title: 'Máximo 12 Alumnos por Sesión',
              description: 'Atención personalizada de los profesores con correcciones de postura manuales respetuosas y uso de accesorios ecológicos.',
              icon: 'Users',
              tag: 'Grupos Reducidos',
              colSpan: 2,
              statNumber: '12',
              statLabel: 'Plazas máximas por sala para máxima comodidad'
            }
          ]
        },
        productHighlight: {
          enabled: true,
          badge: 'La Experiencia Inmersiva',
          kicker: 'Retiro de Primavera en la Sierra',
          title: 'Retiro de Silencio & Yoga Prana de 3 Días.',
          subtitle: 'Desconexión digital, alimentación vegetariana orgánica y meditación en la naturaleza.',
          description: 'Alojamiento en una finca ecológica rehabilitada en la sierra. Incluye 6 sesiones de yoga, talleres de respiración Pranayama al aire libre, paseos meditativos por el bosque y menús de autor elaborados con ingredientes de huerto propio.',
          imageUrl: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=1400&q=80',
          specs: [
            { label: 'Fechas Próximas', value: '18 al 20 de Abril y 16 al 18 de Mayo 2026' },
            { label: 'Incluye', value: 'Pensión completa vegetariana, habitación individual y todo el material' },
            { label: 'Ubicación', value: 'Valle de Lozoya, Parque Nacional Sierra de Guadarrama' }
          ]
        },
        gallery: {
          enabled: true,
          title: 'El Estudio y la Comunidad',
          images: [
            { id: 'g1', url: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80', caption: 'Sala principal con ventanales de madera y luz matutina' },
            { id: 'g2', url: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=800&q=80', caption: 'Zona de té caliente e infusiones botánicas de bienvenida' }
          ]
        },
        stats: {
          enabled: true,
          items: [
            { id: 's1', value: '12 Max', label: 'Alumnos por Clase Presencial' },
            { id: 's2', value: '500h', label: 'Certificación Yoga Alliance' },
            { id: 's3', value: '4.9/5', label: 'Satisfacción de Nuestros Alumnos' }
          ]
        },
        testimonials: {
          enabled: true,
          title: 'Testimonios de alumnos y practicantes habituales.',
          items: [
            {
              id: 't1',
              author: 'Laura Miralles',
              name: 'Laura Miralles',
              role: 'Arquitecta y Practicante desde 2023',
              company: 'Prana Community',
              quote: 'Prana Sanctuary es mi momento de calma indispensable de la semana. Los profesores guían con una sensibilidad exquisita y el espacio transmite paz desde el primer paso que das dentro.',
              avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
              rating: 5
            }
          ]
        },
        pricing: {
          enabled: true,
          title: 'Planes de Práctica & Membresías',
          billingCycle: 'monthly',
          plans: [
            {
              id: 'p1',
              name: 'Bono 5 Clases Presenciales',
              priceMonthly: '65€',
              priceAnnual: 'Sin cuota de matrícula (Validez 2 meses)',
              description: 'Para personas con horarios variables que quieren practicar a su propio ritmo semanal.',
              features: ['Acceso a cualquier horario y estilo', 'Reserva y cancelación fácil desde app', 'Esterilla Manduka y bloques incluidos', 'Infusión biológica de bienvenida'],
              highlighted: false,
              ctaText: 'Comprar Bono 5'
            },
            {
              id: 'p2',
              name: 'Membresía Prana Ilimitada',
              priceMonthly: '95€',
              priceAnnual: 'Sin permanencia mínima',
              description: 'Acceso ilimitado a todas las clases presenciales, talleres mensuales y plataforma online.',
              features: ['Clases presenciales ilimitadas', 'Descuento del 20% en retiros y talleres', 'Acceso a la videoteca de clases grabadas', 'Invita a un amigo gratis cada mes'],
              highlighted: true,
              ctaText: 'Unirse a la Membresía'
            }
          ]
        },
        faq: {
          enabled: true,
          title: 'Preguntas Frecuentes sobre las Clases',
          items: [
            {
              id: 'q1',
              question: '¿Nunca he practicado yoga, puedo asistir a cualquier clase?',
              answer: 'Recomendamos comenzar por nuestras clases de Hatha Suave o Yoga para Principiantes los martes y jueves, donde se explican con detenimiento las bases de alineación y respiración.'
            },
            {
              id: 'q2',
              question: '¿Es necesario llevar mi propia esterilla o material?',
              answer: 'El estudio proporciona esterillas profesionales Manduka PRO, bloques de corcho ecológico, cinturones de algodón y mantas limpias sin coste adicional.'
            },
            {
              id: 'q3',
              question: '¿Cómo funciona la cancelación o cambio de reserva de clase?',
              answer: 'Puedes cancelar o reprogramar tu plaza hasta 2 horas antes del inicio de la sesión a través de nuestra aplicación sin perder el crédito de tu bono.'
            },
            {
              id: 'q4',
              question: '¿Disponen de vestuarios y duchas en el centro?',
              answer: 'Contamos con vestuarios individuales equipados con duchas de agua caliente, secadores de pelo y productos de higiene botánicos biodegradables.'
            },
            {
              id: 'q5',
              question: '¿Tienen clases adaptadas para mujeres embarazadas?',
              answer: 'Sí. Ofrecemos clases específicas de Yoga Prenatal impartidas por fisioterapeutas especializadas en suelo pélvico y preparación corporal al parto.'
            },
            {
              id: 'q6',
              question: '¿Puedo pausar mi membresía mensual durante las vacaciones?',
              answer: 'Puedes solicitar la pausa temporal de tu cuota mensual durante un período de hasta 30 días al año con solo avisar a recepción con 7 días de antelación.'
            }
          ]
        },
        ctaFinal: {
          enabled: true,
          title: 'Comienza tu viaje hacia el bienestar interior.',
          subtitle: 'Reserva tu clase de prueba en nuestro santuario de calma.',
          primaryCta: { text: 'Reservar Primera Clase', link: '#pricing' }
        },
        footer: {
          copyright: '© 2026 Prana Sanctuary Yoga & Wellness S.L. Todos los derechos reservados.',
          legalLinks: [
            { label: 'Normas del Estudio', href: '#normas' },
            { label: 'Política de Cancelaciones', href: '#cancelaciones' },
            { label: 'Privacidad', href: '#privacy' }
          ],
          socialLinks: [
            { platform: 'Instagram', url: 'https://instagram.com' }
          ]
        }
      }
    }
  },

  // 2. FORGE ATHLETICS — CrossFit & Alto Rendimiento
  {
    id: 'crossfit-forge',
    name: 'Forge Performance & CrossFit',
    tagline: 'Centro oficial de CrossFit, halterofilia y acondicionamiento metabólico con entrenadores certificados de élite',
    category: 'wellness',
    thumbnail: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80',
    description: 'Estética en negro asfalto #12121A y acento llama naranja #FF6B35, tipografía Space Grotesk, WOD interactivo del día, equipamiento Eleiko y Rogue, zonas de halterofilia y reserva de clases.',
    accentColor: '#FF6B35',
    theme: 'dark',
    defaultConfig: {
      templateId: 'crossfit-forge',
      name: 'Forge Performance CrossFit',
      slug: 'forge-crossfit',
      domain: 'forgecrossfit.com',
      theme: 'dark',
      accentColor: '#FF6B35',
      fontFamily: "'Space Grotesk', sans-serif",
      borderRadius: 12,
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
        title: 'Forge Performance — Box Oficial de CrossFit & Alto Rendimiento',
        description: 'Supera tus límites con entrenamientos funcionales de alta intensidad guiados por coaches certificados Level 3.',
        keywords: 'crossfit oficial, box de crossfit, halterofilia, entrenamiento funcional, acondicionamiento fisico, hyrox'
      },
      sections: {
        navbar: {
          brandName: 'Forge Box',
          logoText: 'FORGE // PERFORMANCE',
          ctaText: 'Clase de Prueba Gratis',
          ctaLink: '#pricing',
          links: [
            { label: 'Programas', href: '#features' },
            { label: 'Instalaciones', href: '#product' },
            { label: 'Membresías', href: '#pricing' },
            { label: 'El Box', href: '#gallery' }
          ],
          glassBlur: true,
          sticky: true
        },
        hero: {
          enabled: true,
          badge: 'Box Oficial Afiliado CrossFit Inc. • 1.200 m² de Instalaciones',
          kicker: 'Fuerza, Potencia & Disciplina',
          title: 'Construye tu mejor versión física',
          highlightTitle: 'en la arena de Forge.',
          subtitle: 'Entrenamientos funcionales constantemente variados ejecutados a alta intensidad para forjar fuerza real, resistencia cardiovascular y una mentalidad inquebrantable.',
          primaryCta: { text: 'Solicitar Clase de Prueba Gratis', link: '#pricing' },
          secondaryCta: { text: 'Conoce a los Coaches →', link: '#features' },
          imageUrl: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1600&q=80',
          style: 'centered'
        },
        logos: {
          enabled: true,
          title: 'MARCAS OFICIALES DE EQUIPAMIENTO PROFESIONAL EN EL BOX',
          items: [
            { id: 'l1', name: 'Rogue Fitness', tagline: 'Official Rigs & Racks' },
            { id: 'l2', name: 'Eleiko Sweden', tagline: 'Competition Barbells' },
            { id: 'l3', name: 'Concept2', tagline: 'RowErg & SkiErg' },
            { id: 'l4', name: 'CrossFit Affiliate', tagline: 'Official Box' }
          ]
        },
        bentoFeatures: {
          enabled: true,
          kicker: 'Metodología Probada',
          title: 'Entrenamiento basado en ciencia deportiva y progresión segura.',
          subtitle: 'Cada sesión está estructurada en calentamiento articular, trabajo de fuerza/técnica y WOD metabólico.',
          items: [
            {
              id: 'f1',
              title: 'Coaches Certificados CrossFit Level 2 & 3',
              description: 'Supervisión constante de la técnica de levantamiento olímpico y gimnasia para evitar lesiones y optimizar el progreso individual.',
              icon: 'ShieldCheck',
              tag: 'Supervisión Técnica',
              colSpan: 2,
              statNumber: '100%',
              statLabel: 'De clases guiadas por entrenadores certificados'
            },
            {
              id: 'f2',
              title: '1.200 m² con Zona Open Box Ilimitada',
              description: 'Plataformas de halterofilia de caucho macizo, 24 puestos de rack Rogue y zona de césped artificial para trineos.',
              icon: 'Dumbbell',
              tag: '1.200 m² Espacio',
              colSpan: 1
            },
            {
              id: 'f3',
              title: 'Programación Escalable a Cualquier Nivel',
              description: 'Desde atletas experimentados que preparan competiciones hasta personas que pisan un gimnasio por primera vez.',
              icon: 'Layers',
              tag: 'Todos los Niveles',
              colSpan: 1
            },
            {
              id: 'f4',
              title: 'Comunidad Fuerte y Motivadora',
              description: 'Entrena con compañeros que te animan a dar la última repetición en un ambiente de compañerismo absoluto.',
              icon: 'Users',
              tag: 'Comunidad Forge',
              colSpan: 2,
              statNumber: '15',
              statLabel: 'Atletas máximos por hora de WOD'
            }
          ]
        },
        productHighlight: {
          enabled: true,
          badge: 'Programa Estrella',
          kicker: 'Iniciación Segura',
          title: 'Curso On-Ramp de Fundamentos Técnicos.',
          subtitle: '4 sesiones individuales para aprender los 9 movimientos básicos del CrossFit.',
          description: 'Aprende sentadilla libre, sentadilla frontal, overhead squat, press de hombros, push press, push jerk, peso muerto y cargada olímpica con barra de técnica ligera antes de incorporarte a las clases grupales regulares.',
          imageUrl: 'https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?auto=format&fit=crop&w=1400&q=80',
          specs: [
            { label: 'Duración', value: '4 sesiones de 60 minutos con coach personal' },
            { label: 'Evaluación', value: 'Test de movilidad articular y composición corporal con escáner InBody' },
            { label: 'Garantía', value: 'Incluye 2 semanas de WODs ilimitados al finalizar el curso' }
          ]
        },
        gallery: {
          enabled: true,
          title: 'El Box en Acción',
          images: [
            { id: 'g1', url: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80', caption: 'Zona de barras Eleiko y jaula de dominadas Rogue' },
            { id: 'g2', url: 'https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?auto=format&fit=crop&w=800&q=80', caption: 'Entrenamiento metabólico de alta intensidad en grupo' }
          ]
        },
        stats: {
          enabled: true,
          items: [
            { id: 's1', value: '1.200 m²', label: 'Superficie de Entrenamiento' },
            { id: 's2', value: '15 Max', label: 'Atletas por Clase de WOD' },
            { id: 's3', value: '4.9/5', label: 'Valoración en Google Reviews' }
          ]
        },
        testimonials: {
          enabled: true,
          title: 'Lo que dicen los atletas de Forge.',
          items: [
            {
              id: 't1',
              author: 'Javier Domínguez',
              name: 'Javier Domínguez',
              role: 'Atleta Máster y Miembro desde 2022',
              company: 'Forge Community',
              quote: 'Empecé con 42 años sin haber levantado una barra en mi vida. En Forge no solo me enseñaron a moverme sin dolor de espalda, sino que he ganado más fuerza y energía que nunca.',
              avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
              rating: 5
            }
          ]
        },
        pricing: {
          enabled: true,
          title: 'Planes de Membresía del Box',
          billingCycle: 'monthly',
          plans: [
            {
              id: 'p1',
              name: 'Membresía 3 Días/Semana',
              priceMonthly: '85€',
              priceAnnual: '12 clases al mes con acceso Open Box',
              description: 'Ideal para personas que compaginan el CrossFit con running u otros deportes.',
              features: ['3 clases guiadas de WOD a la semana', 'Acceso a zona Open Box en horas libres', 'Seguimiento de marcas en app móvil', 'Uso completo de vestuarios y duchas'],
              highlighted: false,
              ctaText: 'Elegir 3 Días'
            },
            {
              id: 'p2',
              name: 'Membresía Unlimited Pro',
              priceMonthly: '115€',
              priceAnnual: 'Acceso total sin límites',
              description: 'Para atletas dedicados que quieren entrenar a diario y acceder a clases de halterofilia y gimnasia.',
              features: ['Clases de WOD ilimitadas de lunes a sábado', 'Clases especializadas de Halterofilia y Gymnastics', 'Acceso Open Box en cualquier horario', '1 análisis de composición corporal InBody al mes'],
              highlighted: true,
              ctaText: 'Unirse a Forge Unlimited'
            }
          ]
        },
        faq: {
          enabled: true,
          title: 'Preguntas Frecuentes sobre el Box',
          items: [
            {
              id: 'q1',
              question: '¿Qué necesito llevar para mi primera clase de prueba?',
              answer: 'Ropa deportiva cómoda, zapatillas de suela plana o de entrenamiento funcional, una toalla pequeña y una botella de agua. Nosotros proporcionamos magnesio y todo el material necesario.'
            },
            {
              id: 'q2',
              question: '¿Tengo que estar en buena forma física antes de apuntarme?',
              answer: 'Rotundamente no. El objetivo del CrossFit es ponerte en forma. Todos los ejercicios y cargas se adaptan individualmente por el coach al nivel y condición de cada persona.'
            },
            {
              id: 'q3',
              question: '¿Cómo se reservan las clases diarias de WOD?',
              answer: 'A través de nuestra aplicación móvil podrás ver los horarios disponibles desde las 07:00 hasta las 21:30 y reservar tu puesto con hasta 7 días de antelación.'
            },
            {
              id: 'q4',
              question: '¿Tienen aparcamiento privado para socios?',
              answer: 'Disponemos de un amplio aparcamiento gratuito para más de 40 vehículos justo frente a la puerta del box.'
            },
            {
              id: 'q5',
              question: '¿Existe algún compromiso de permanencia en las cuotas?',
              answer: 'No requerimos permanencias mínimas. Puedes pausar o darte de baja avisando antes del día 25 del mes en curso.'
            },
            {
              id: 'q6',
              question: '¿Qué es la zona Open Box y cuándo puedo usarla?',
              answer: 'Es un área habilitada para realizar entrenamientos libres, practicar técnica o trabajo accesorio de fuerza de forma autónoma durante todo el horario de apertura del centro.'
            }
          ]
        },
        ctaFinal: {
          enabled: true,
          title: 'El primer paso hacia tu nueva fuerza empieza hoy.',
          subtitle: 'Ven a probar una clase gratis guiada por nuestros coaches.',
          primaryCta: { text: 'Solicitar Clase Gratis Ahora', link: '#pricing' }
        },
        footer: {
          copyright: '© 2026 Forge Performance CrossFit S.L. Afiliado Oficial.',
          legalLinks: [
            { label: 'Normativa del Box', href: '#normativa' },
            { label: 'Aviso Legal', href: '#legal' }
          ],
          socialLinks: [
            { platform: 'Instagram', url: 'https://instagram.com' }
          ]
        }
      }
    }
  },

  // 3. LUMINA DENTAL — Odontología Digital Avanzada
  {
    id: 'dental-clinic',
    name: 'Lumina Dental Studio',
    tagline: 'Clínica odontológica de vanguardia especializada en ortodoncia invisible, diseño digital de sonrisas e implantes guiados 3D',
    category: 'wellness',
    thumbnail: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80',
    description: 'Estética clínica pulcra en blanco puro y azul cian médico #38BDF8, tipografía Montserrat, escáner intraoral 3D en vivo, tratamientos sin dolor con sedación consciente y financiación a medida.',
    accentColor: '#38BDF8',
    theme: 'light',
    defaultConfig: {
      templateId: 'dental-clinic',
      name: 'Lumina Dental Studio Odontología',
      slug: 'lumina-dental',
      domain: 'luminadental.es',
      theme: 'light',
      accentColor: '#38BDF8',
      fontFamily: "'Montserrat', sans-serif",
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
        title: 'Lumina Dental Studio — Odontología Digital & Estética Dental',
        description: 'Ortodoncia invisible, carillas de porcelana e implantología guiada por ordenador con tecnología 3D sin dolor.',
        keywords: 'clinica dental, ortodoncia invisible, carillas de porcelana, implantes dentales 3d, blanqueamiento dental'
      },
      sections: {
        navbar: {
          brandName: 'Lumina Dental',
          logoText: 'LUMINA DENTAL STUDIO',
          ctaText: 'Cita de Diagnóstico 3D',
          ctaLink: '#pricing',
          links: [
            { label: 'Tratamientos', href: '#features' },
            { label: 'Tecnología 3D', href: '#product' },
            { label: 'Especialidades', href: '#pricing' },
            { label: 'Instalaciones', href: '#gallery' }
          ],
          glassBlur: true,
          sticky: true
        },
        hero: {
          enabled: true,
          badge: 'Primera Consulta y Escáner 3D Digital Incluidos sin Compromiso',
          kicker: 'Odontología Digital de Precisión',
          title: 'La sonrisa de tus sueños, diseñada con',
          highlightTitle: 'tecnología 3D sin dolor.',
          subtitle: 'Especialistas en ortodoncia invisible, carillas cerámicas de mínima invasión e implantología guiada por ordenador en un entorno relajante y sin estrés.',
          primaryCta: { text: 'Pedir Cita Diagnóstica Gratuita', link: '#pricing' },
          secondaryCta: { text: 'Conoce Nuestras Especialidades →', link: '#features' },
          imageUrl: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1600&q=80',
          style: 'centered'
        },
        logos: {
          enabled: true,
          title: 'ACREDITACIONES Y SOCIEDADES ODONTOLÓGICAS OFICIALES',
          items: [
            { id: 'l1', name: 'Invisalign Diamond Apex', tagline: 'Top 1% Providers' },
            { id: 'l2', name: 'SEPA Periodoncia', tagline: 'Miembro Acreditado' },
            { id: 'l3', name: 'SEPES Prótesis & Estética', tagline: 'Sociedad Española' }
          ]
        },
        bentoFeatures: {
          enabled: true,
          kicker: 'Tratamientos Avanzados',
          title: 'Máxima precisión con mínima invasión.',
          subtitle: 'Sustituimos las pastas tradicionales de toma de moldes por escaneado óptico digital de alta velocidad.',
          items: [
            {
              id: 'f1',
              title: 'Escáner Intraoral 3D iTero Lumina',
              description: 'Visualiza la simulación exacta del resultado final de tu sonrisa antes de comenzar el tratamiento de ortodoncia invisible.',
              icon: 'Scan',
              tag: 'Sin Pastas Molestas',
              colSpan: 2,
              statNumber: '60s',
              statLabel: 'Tiempo de escaneado completo de la boca en 3D'
            },
            {
              id: 'f2',
              title: 'Carillas de Porcelana E-Max sin Tallado',
              description: 'Láminas cerámicas ultrafinas de 0.3mm que mejoran forma, color y simetría dental preservando la estructura del diente natural.',
              icon: 'Sparkles',
              tag: 'Mínima Invasión',
              colSpan: 1
            },
            {
              id: 'f3',
              title: 'Sedación Consciente Inhalatoria y Endovenosa',
              description: 'Tratamientos completamente indoloros y libres de ansiedad guiados por un médico anestesiólogo colegiado.',
              icon: 'Heart',
              tag: 'Cero Ansiedad',
              colSpan: 1
            },
            {
              id: 'f4',
              title: 'Implantes Guiados por Tomografía CBCT',
              description: 'Planificación quirúrgica digital milimétrica que reduce el tiempo de intervención a la mitad y permite una recuperación rápida.',
              icon: 'CheckCircle2',
              tag: 'Cirugía Guiada',
              colSpan: 2,
              statNumber: '99.2%',
              statLabel: 'Tasa de éxito comprobada en osteointegración'
            }
          ]
        },
        productHighlight: {
          enabled: true,
          badge: 'Simulación en Vivo',
          kicker: 'Diseño Digital de Sonrisa',
          title: 'Digital Smile Design (DSD) Personalizado.',
          subtitle: 'Diseñamos la armonía facial analizando tus proporciones de labios y rostro.',
          description: 'Mediante fotografía macro y análisis facial por ordenador realizamos una prueba estética (mock-up) directamente en tu boca para que te veas con tu nueva sonrisa antes de tocar una sola pieza dental.',
          imageUrl: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1400&q=80',
          specs: [
            { label: 'Tiempo de Mock-Up', value: 'Prueba en boca en la segunda cita' },
            { label: 'Materiales', value: 'Cerámica feldespática estratificada a mano' },
            { label: 'Financiación', value: 'Hasta 36 meses sin intereses con aprobación inmediata' }
          ]
        },
        gallery: {
          enabled: true,
          title: 'Nuestras Instalaciones Médicas',
          images: [
            { id: 'g1', url: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80', caption: 'Gabinete dental con luz natural y pantalla táctil para explicaciones' },
            { id: 'g2', url: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80', caption: 'Sala de radiología digital de baja radiación CBCT' }
          ]
        },
        stats: {
          enabled: true,
          items: [
            { id: 's1', value: '14.000+', label: 'Pacientes Satisfechos' },
            { id: 's2', value: '15 Años', label: 'De Experiencia Clínica' },
            { id: 's3', value: '4.9/5', label: 'Puntuación en Reseñas Médicas' }
          ]
        },
        testimonials: {
          enabled: true,
          title: 'Opiniones de nuestros pacientes.',
          items: [
            {
              id: 't1',
              author: 'Patricia Salgado',
              name: 'Patricia Salgado',
              role: 'Paciente de Ortodoncia Invisible',
              company: 'Lumina Patient',
              quote: 'Tenía pánico al dentista desde niña y en Lumina el trato humano y la tecnología cambiaron por completo mi experiencia. En 10 meses conseguí la sonrisa recta y natural que siempre quise.',
              avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
              rating: 5
            }
          ]
        },
        pricing: {
          enabled: true,
          title: 'Especialidades Principales y Diagnóstico',
          billingCycle: 'monthly',
          plans: [
            {
              id: 'p1',
              name: 'Primera Visita de Diagnóstico 3D',
              priceMonthly: '0€',
              priceAnnual: 'Incluido sin coste ni compromiso',
              description: 'Revisión bucodental integral, escáner intraoral 3D en color y ortopantomografía digital.',
              features: ['Escáner 3D con simulación de sonrisa', 'Ortopantomografía digital de baja radiación', 'Diagnóstico por doctor especialista', 'Plan de tratamiento y presupuesto detallado'],
              highlighted: false,
              ctaText: 'Solicitar Primera Cita'
            },
            {
              id: 'p2',
              name: 'Ortodoncia Invisible Todo Incluido',
              priceMonthly: '98€/mes',
              priceAnnual: 'Financiación hasta 36 meses sin intereses',
              description: 'Tratamiento completo con alineadores transparentes, revisiones presenciales y retenedores finales.',
              features: ['Todos los alineadores necesarios incluidos', 'Refinamientos adicionales sin coste', 'Kit de blanqueamiento dental de regalo', 'Juego de retenedores Vivera finales'],
              highlighted: true,
              ctaText: 'Pedir Valoración de Ortodoncia'
            }
          ]
        },
        faq: {
          enabled: true,
          title: 'Preguntas Frecuentes sobre Tratamientos',
          items: [
            {
              id: 'q1',
              question: '¿Qué ventajas ofrece la ortodoncia invisible frente a los brackets clásicos?',
              answer: 'Los alineadores transparentes son prácticamente invisibles a la vista, se pueden retirar para comer y cepillarse los dientes cómodamente y no producen rozaduras ni llagas en la boca.'
            },
            {
              id: 'q2',
              question: '¿La primera consulta diagnóstica tiene algún coste?',
              answer: 'No. La primera visita es totalmente gratuita e incluye el examen clínico completo, radiografía panorámica digital y escaneado 3D con simulación de resultados.'
            },
            {
              id: 'q3',
              question: '¿Cómo funciona la financiación de los tratamientos?',
              answer: 'Ofrecemos financiación directa en la clínica de 6 a 36 meses sin comisiones de apertura ni intereses previa aprobación bancaria inmediata con solo presentar DNI y nómina.'
            },
            {
              id: 'q4',
              question: '¿Los tratamientos con implantes dentales son dolorosos?',
              answer: 'Se realizan con anestesia local avanzada o sedación consciente. Durante la intervención no se siente ningún dolor y el postoperatorio se controla perfectamente con analgesia convencional.'
            },
            {
              id: 'q5',
              question: '¿Cuánto tiempo dura el blanqueamiento dental profesional?',
              answer: 'Con una adecuada higiene bucodental y evitando excesos de café o tabaco, los resultados de nuestro blanqueamiento combinado en clínica y casa duran entre 2 y 4 años.'
            },
            {
              id: 'q6',
              question: '¿Atienden urgencias dentales en el mismo día?',
              answer: 'Reservamos huecos diarios de agenda prioritarios para atender casos urgentes de dolor agudo, fracturas dentales o caídas de coronas.'
            }
          ]
        },
        ctaFinal: {
          enabled: true,
          title: 'Recupera la confianza al sonreír.',
          subtitle: 'Pide tu cita diagnóstica con escáner 3D gratuito en Lumina Dental.',
          primaryCta: { text: 'Agendar Cita Gratuita', link: '#pricing' }
        },
        footer: {
          copyright: '© 2026 Lumina Dental Studio S.L. Registro Sanitario Oficial.',
          legalLinks: [
            { label: 'Cuadro Médico', href: '#medicos' },
            { label: 'Aviso Legal Sanitario', href: '#sanidad' },
            { label: 'Privacidad', href: '#privacy' }
          ],
          socialLinks: [
            { platform: 'Instagram', url: 'https://instagram.com' }
          ]
        }
      }
    }
  },

  // 4. EQUILIBRIO PSICOLOGÍA — Salud Mental & Terapia Cognitiva
  {
    id: 'mental-health',
    name: 'Equilibrio Psicología',
    tagline: 'Centro de psicología clínica, terapia cognitivo-conductual, gestión de ansiedad y neurobienestar emocional',
    category: 'wellness',
    thumbnail: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80',
    description: 'Estética en lavanda suave y violeta sereno #8B5CF6, tipografía Nunito Sans, enfoque basado en evidencia científica, sesiones presenciales y online con confidencialidad absoluta.',
    accentColor: '#8B5CF6',
    theme: 'light',
    defaultConfig: {
      templateId: 'mental-health',
      name: 'Equilibrio Psicología Clínica',
      slug: 'equilibrio-psicologia',
      domain: 'equilibriopsicologia.es',
      theme: 'light',
      accentColor: '#8B5CF6',
      fontFamily: "'Nunito Sans', sans-serif",
      borderRadius: 18,
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
        title: 'Equilibrio Psicología — Psicología Clínica & Terapia Basada en Evidencia',
        description: 'Terapia para la ansiedad, estrés laboral, autoestima y relaciones con psicólogos sanitarios colegiados.',
        keywords: 'psicologo clinico, terapia de ansiedad, terapia online, autoestima, mindfulness, psicoterapia sanitaria'
      },
      sections: {
        navbar: {
          brandName: 'Equilibrio',
          logoText: 'EQUILIBRIO PSICOLOGÍA',
          ctaText: 'Primera Sesión Orientativa',
          ctaLink: '#pricing',
          links: [
            { label: 'Áreas de Ayuda', href: '#features' },
            { label: 'Metodología', href: '#product' },
            { label: 'Modalidades', href: '#pricing' },
            { label: 'Preguntas', href: '#faq' }
          ],
          glassBlur: true,
          sticky: true
        },
        hero: {
          enabled: true,
          badge: 'Psicólogos Sanitarios Colegiados • Más de 10 Años de Experiencia',
          kicker: 'Salud Mental & Bienestar Emocional',
          title: 'Un espacio seguro donde comprenderte y',
          highlightTitle: 'recuperar tu bienestar.',
          subtitle: 'Acompañamiento psicológico riguroso y humano basado en terapias de tercera generación para superar la ansiedad, el agotamiento emocional y reencontrar tu equilibrio interior.',
          primaryCta: { text: 'Agendar Primera Sesión de Orientación', link: '#pricing' },
          secondaryCta: { text: 'Conoce Nuestro Enfoque Terapéutico →', link: '#features' },
          imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1600&q=80',
          style: 'centered'
        },
        logos: {
          enabled: true,
          title: 'COLEGIOS PROFESIONALES Y SOCIEDADES CIENTÍFICAS',
          items: [
            { id: 'l1', name: 'Colegio Oficial de la Psicología', tagline: 'Psicólogos Sanitarios' },
            { id: 'l2', name: 'Asociación Española de Psicología Clínica', tagline: 'ASEPCO' },
            { id: 'l3', name: 'Federación Europea de Psicología', tagline: 'EFPA EuroPsy' }
          ]
        },
        bentoFeatures: {
          enabled: true,
          kicker: 'Áreas de Especialización',
          title: 'Herramientas prácticas para afrontar las dificultades de la vida.',
          subtitle: 'Intervenciones personalizadas sin juicios, orientadas a dotarte de recursos autónomos duraderos.',
          items: [
            {
              id: 'f1',
              title: 'Gestión de la Ansiedad y Ataques de Pánico',
              description: 'Técnicas de regulación fisiológica, reestructuración cognitiva y desensibilización sistemática para recuperar el control de tu día a día.',
              icon: 'HeartHandshake',
              tag: 'Terapia de Ansiedad',
              colSpan: 2,
              statNumber: '88%',
              statLabel: 'De mejoría clínica significativa en las primeras 8 sesiones'
            },
            {
              id: 'f2',
              title: 'Terapia de Aceptación y Compromiso (ACT)',
              description: 'Aprende a relacionarte de forma saludable con tus pensamientos y emociones para actuar conforme a tus valores vitales.',
              icon: 'Compass',
              tag: 'Tercera Generación',
              colSpan: 1
            },
            {
              id: 'f3',
              title: 'Modalidad Online y Presencial Flexible',
              description: 'Sesiones por videoconferencia cifrada de alta seguridad desde tu hogar o en nuestras consultas tranquilas y luminosas.',
              icon: 'Laptop',
              tag: '100% Confidencial',
              colSpan: 1
            },
            {
              id: 'f4',
              title: 'Autoestima y Relaciones Saludables',
              description: 'Establecimiento de límites asertivos, superación de la dependencia emocional y fortalecimiento de la seguridad personal.',
              icon: 'Smile',
              tag: 'Crecimiento Personal',
              colSpan: 2,
              statNumber: '100%',
              statLabel: 'Garantía de confidencialidad y secreto profesional estricto'
            }
          ]
        },
        productHighlight: {
          enabled: true,
          badge: 'El Proceso Terapéutico',
          kicker: 'Fases de Intervención',
          title: 'Un camino estructurado hacia el cambio positivo.',
          subtitle: 'Evaluación inicial, diseño conjunto de objetivos y dotación de herramientas prácticas.',
          description: 'No creemos en terapias interminables sin rumbo. Establecemos metas claras desde el inicio, revisando periódicamente tus avances para que compruebes tu evolución de forma tangible semana a semana.',
          imageUrl: 'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=1400&q=80',
          specs: [
            { label: 'Duración de Sesión', value: '55 minutos de atención individualizada' },
            { label: 'Frecuencia', value: 'Semanal o quincenal según tus necesidades' },
            { label: 'Material', value: 'Guías de ejercicios y registros de autorreflexión incluidos' }
          ]
        },
        stats: {
          enabled: true,
          items: [
            { id: 's1', value: '3.200+', label: 'Procesos de Terapia Completados' },
            { id: 's2', value: '10 Años', label: 'De Ejercicio Sanitario Colegiado' },
            { id: 's3', value: '4.9/5', label: 'Satisfacción de Nuestros Pacientes' }
          ]
        },
        testimonials: {
          enabled: true,
          title: 'Palabras de personas que han confiado en nuestro centro.',
          items: [
            {
              id: 't1',
              author: 'Guillermo Ramos',
              name: 'Guillermo Ramos',
              role: 'Paciente de Terapia para Ansiedad',
              company: 'Equilibrio Paciente',
              quote: 'Llegué a consulta sobrepasado por el estrés del trabajo y los ataques de pánico. Mi psicóloga me ayudó a entender lo que sentía y me dio herramientas que sigo usando a diario. Ha sido una de las mejores decisiones de mi vida.',
              avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
              rating: 5
            }
          ]
        },
        pricing: {
          enabled: true,
          title: 'Modalidades de Sesión Terapéutica',
          billingCycle: 'monthly',
          plans: [
            {
              id: 'p1',
              name: 'Sesión Individual (Online / Presencial)',
              priceMonthly: '65€',
              priceAnnual: '55 minutos de sesión',
              description: 'Consulta individualizada con tu psicólogo sanitario asignado según tu motivo de consulta.',
              features: ['55 minutos de terapia especializada', 'Plataforma de videollamada médica cifrada', 'Material complementario y ejercicios de apoyo', 'Flexibilidad de cambios con 24h de aviso'],
              highlighted: true,
              ctaText: 'Reservar Sesión'
            },
            {
              id: 'p2',
              name: 'Bono Mensual (4 Sesiones)',
              priceMonthly: '235€',
              priceAnnual: 'Ahorro de 25€ en el bono',
              description: 'Para personas comprometidas con un proceso continuo de trabajo personal y terapia semanal.',
              features: ['4 sesiones de 55 minutos', 'Horario fijo reservado cada semana', 'Contacto directo por correo para dudas puntuales', 'Validez de 60 días naturales'],
              highlighted: false,
              ctaText: 'Comprar Bono 4 Sesiones'
            }
          ]
        },
        faq: {
          enabled: true,
          title: 'Preguntas Frecuentes sobre la Terapia',
          items: [
            {
              id: 'q1',
              question: '¿Cómo sé si necesito acudir al psicólogo?',
              answer: 'Si sientes que la ansiedad, el desánimo o los problemas en tus relaciones interfieren en tu calidad de vida y las estrategias que has intentado no son suficientes, la terapia te proporcionará nuevas perspectivas y herramientas.'
            },
            {
              id: 'q2',
              question: '¿La terapia online es igual de eficaz que la presencial?',
              answer: 'Numerosos estudios científicos demuestran que la psicoterapia online ofrece la misma eficacia clínica que la presencial, con la ventaja añadida de evitar desplazamientos y poder realizar la sesión en tu entorno seguro.'
            },
            {
              id: 'q3',
              question: '¿Cuánto tiempo suele durar un proceso terapéutico completo?',
              answer: 'Depende de la problemática y objetivos. En general, los tratamientos cognitivo-conductuales tienen una duración media de 12 a 20 sesiones semanales con espaciamiento progresivo hacia el final.'
            },
            {
              id: 'q4',
              question: '¿Qué titulación tienen los terapeutas del equipo?',
              answer: 'Todos nuestros profesionales son graduados/licenciados en Psicología con Máster Oficial en Psicología General Sanitaria, colegiados en el Colegio Oficial de la Psicología y con formación continua acreditada.'
            },
            {
              id: 'q5',
              question: '¿Todo lo que hablemos en sesión es estrictamente confidencial?',
              answer: 'Absolutamente. Toda la información tratada está protegida por el secreto profesional del Código Deontológico de la Psicología y la legislación europea de protección de datos de salud.'
            },
            {
              id: 'q6',
              question: '¿Cómo puedo pagar las sesiones online?',
              answer: 'Puedes abonar las sesiones mediante tarjeta bancaria o transferencia a través de nuestra pasarela segura antes del inicio de la consulta.'
            }
          ]
        },
        ctaFinal: {
          enabled: true,
          title: 'Dar el primer paso es cuidarte.',
          subtitle: 'Estamos aquí para escucharte y acompañarte en tu proceso.',
          primaryCta: { text: 'Agendar Consulta de Orientación', link: '#pricing' }
        },
        footer: {
          copyright: '© 2026 Equilibrio Psicología Clínica S.L.P. Centro Sanitario Autorizado.',
          legalLinks: [
            { label: 'Código Deontológico', href: '#deontologico' },
            { label: 'Aviso Legal Sanitario', href: '#sanidad' },
            { label: 'Privacidad', href: '#privacy' }
          ],
          socialLinks: [
            { platform: 'LinkedIn', url: 'https://linkedin.com' }
          ]
        }
      }
    }
  }
];
