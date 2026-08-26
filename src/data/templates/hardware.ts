import { TemplateDefinition } from '../../types';

export const HARDWARE_TEMPLATES: TemplateDefinition[] = [
  // 4. FORGE — Hardware Premium de Grado Aeroespacial & Audio Pro
  {
    id: 'forge-hardware',
    name: 'Forge',
    tagline: 'Hardware de grado aeroespacial forjado en titanio macizo con diafragmas de berilio y cancelación activa multicapa',
    category: 'hardware',
    thumbnail: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=1200&q=80',
    description: 'Estética escultural en titanio y aluminio anodizado, acento azul zafiro #2997FF, tipografía Inter Tight, imágenes colosales de ingeniería, especificaciones técnicas al milímetro, galería de despiece acústico y reservas.',
    accentColor: '#2997FF',
    theme: 'dark',
    defaultConfig: {
      templateId: 'forge-hardware',
      name: 'Forge Titan Pro',
      slug: 'forge-titan-pro',
      domain: 'forgetitan.audio',
      theme: 'dark',
      accentColor: '#2997FF',
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
        'gallery',
        'stats',
        'testimonials',
        'pricing',
        'faq',
        'ctaFinal',
        'footer'
      ],
      seo: {
        title: 'Forge Titan Pro — Auriculares Acústicos de Grado Aeroespacial',
        description: 'Chasis de titanio mecanizado por CNC de 5 ejes, diafragmas de berilio puro de 45mm y sistema de cancelación activa multicapa.',
        keywords: 'hardware premium, auriculares audiófilo, titanio aeroespacial, audio espacial de alta fidelidad, cancelacion de ruido'
      },
      sections: {
        navbar: {
          brandName: 'Forge',
          logoText: 'FORGE TITAN',
          ctaText: 'Reservar Unidad',
          ctaLink: '#pricing',
          links: [
            { label: 'Ingeniería', href: '#features' },
            { label: 'Especificaciones', href: '#product' },
            { label: 'Galería', href: '#gallery' },
            { label: 'Rendimiento', href: '#stats' },
            { label: 'Ediciones', href: '#pricing' }
          ],
          glassBlur: true,
          sticky: true
        },
        hero: {
          enabled: true,
          badge: 'Producción Limitada • Lote de Lanzamiento 2026',
          kicker: 'Ingeniería Acústica Sin Concesiones',
          title: 'Sonido puro.',
          highlightTitle: 'Forjado en titanio.',
          subtitle: 'Mecanizado a partir de un bloque macizo de titanio de grado aeroespacial. Diafragmas de berilio al 99.8% para una reproducción armónica de ultra alta fidelidad.',
          primaryCta: { text: 'Reservar Edición Titanio', link: '#pricing' },
          secondaryCta: { text: 'Ver Despiece Técnico →', link: '#product' },
          imageUrl: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=1600&q=80',
          style: 'centered'
        },
        logos: {
          enabled: true,
          title: 'PREMIADO Y UTILIZADO POR INGENIEROS DE MASTERIZACIÓN EN',
          items: [
            { id: 'l1', name: 'Abbey Road Studios', tagline: 'Mastering' },
            { id: 'l2', name: 'Dolby Atmos Labs', tagline: 'Spatial Audio' },
            { id: 'l3', name: 'Metropolis Studios', tagline: 'Acoustic Engineering' },
            { id: 'l4', name: 'AES Audio Society', tagline: 'Technical Excellence' },
            { id: 'l5', name: 'Red Dot Best of Best', tagline: 'Design Award 2025' }
          ]
        },
        marquee: {
          enabled: true,
          speed: 'normal',
          direction: 'left',
          items: [
            { id: 'm1', text: 'TITANIO GRADO 5 MECANIZADO CNC 5 EJES', highlight: true, icon: 'Shield' },
            { id: 'm2', text: 'RESPUESTA DE FRECUENCIA 4Hz - 52kHz', highlight: false, icon: 'Zap' },
            { id: 'm3', text: 'CANCELACIÓN ACTIVA HÍBRIDA 48dB', highlight: true, icon: 'Sliders' },
            { id: 'm4', text: '65 HORAS DE BATERÍA CON CARGA RÁPIDA', highlight: false, icon: 'Flame' }
          ]
        },
        bentoFeatures: {
          enabled: true,
          kicker: 'Materiales Nobles',
          title: 'Obsesión por cada milímetro de estructura.',
          subtitle: 'Cada componente ha sido diseñado para eliminar resonancias no deseadas y maximizar el confort auditivo durante horas.',
          items: [
            {
              id: 'f1',
              title: 'Diafragmas de Berilio Puro (45 mm)',
              description: 'Rigidez torsional inigualable con un peso microscópico. Elimina la distorsión armónica incluso a niveles de presión sonora extremos.',
              icon: 'Zap',
              tag: '< 0.02% THD',
              colSpan: 2,
              statNumber: '4Hz - 52kHz',
              statLabel: 'Rango de frecuencia certificado Hi-Res Audio'
            },
            {
              id: 'f2',
              title: 'Mecanizado CNC Monobloque',
              description: 'Cada copa acústica se talla a partir de un lingote sólido de titanio en un proceso de fresado de más de 4 horas.',
              icon: 'ShieldCheck',
              tag: 'Titanio Grado 5',
              colSpan: 1
            },
            {
              id: 'f3',
              title: 'Almohadillas de Espuma Viscoelástica & Piel Noble',
              description: 'Sellado acústico pasivo perfecto con alivio de presión en los puntos de contacto craneal.',
              icon: 'Maximize2',
              tag: 'Confort Ergonómico',
              colSpan: 1
            },
            {
              id: 'f4',
              title: 'Cancelación Activa Multicapa (ANC)',
              description: 'Matriz de 8 micrófonos de silicio MEMS calibrados por DSP para aislar ruidos ambientales de baja y media frecuencia hasta 48dB.',
              icon: 'Sliders',
              tag: 'Aislamiento 48dB',
              colSpan: 2,
              statNumber: '65 Horas',
              statLabel: 'Autonomía continua con ANC activado'
            }
          ]
        },
        productHighlight: {
          enabled: true,
          kicker: 'Especificaciones de Laboratorio',
          title: 'Acústica de estudio en cualquier entorno.',
          subtitle: 'Diseñado en colaboración con ingenieros de masterización galardonados con premios Grammy.',
          description: 'Incorpora DAC interno de 32 bits / 384 kHz con amplificación discreta Clase AB y soporte para códecs LDAC, aptX Adaptive y audio sin pérdidas por USB-C.',
          imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1600&q=80',
          layout: 'image-right',
          ctaText: 'Ver Ficha Técnica Completa',
          ctaLink: '#pricing',
          specs: [
            { label: 'Transductor', value: '45 mm Berilio', detail: 'Imán de neodimio N52' },
            { label: 'Distorsión Armónica', value: '< 0.02%', detail: 'A 1 kHz @ 100 dB SPL' },
            { label: 'Autonomía de Batería', value: '65 Horas', detail: 'Carga completa en 40 min' },
            { label: 'Conectividad', value: 'Bluetooth 5.4 + USB-C', detail: 'Audio lossless sin compresión' }
          ]
        },
        gallery: {
          enabled: true,
          kicker: 'Detalles de Fabricación',
          title: 'El arte de la precisión micrométrica.',
          subtitle: 'Inspecciona los acabados y componentes internos de Forge Titan Pro.',
          items: [
            {
              id: 'g1',
              title: 'Chasis de Titanio Pulido',
              category: 'Materiales',
              imageUrl: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=1200&q=80',
              aspectRatio: 'wide'
            },
            {
              id: 'g2',
              title: 'Diadema de Suspensión Dinámica',
              category: 'Ergonomía',
              imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=80',
              aspectRatio: 'square'
            },
            {
              id: 'g3',
              title: 'Despiece del Transductor de Berilio',
              category: 'Acústica',
              imageUrl: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=1200&q=80',
              aspectRatio: 'square'
            }
          ]
        },
        stats: {
          enabled: true,
          kicker: 'Rendimiento Acústico',
          title: 'Números que redefinen la escucha de alta gama.',
          subtitle: 'Pruebas realizadas en cámara anecoica certificada de clase 1.',
          items: [
            { id: 's1', value: '52,000 Hz', label: 'Límite de Agudos', description: 'Reproducción de micro-armónicos' },
            { id: 's2', value: '48 dB', label: 'Atenuación ANC', description: 'Cancelación de ruido ambiental' },
            { id: 's3', value: '318 g', label: 'Peso del Chasis', description: 'Distribución de masa optimizada' },
            { id: 's4', value: '5 Años', label: 'Garantía Oficial', description: 'Sustitución inmediata de piezas' }
          ]
        },
        testimonials: {
          enabled: true,
          title: 'La opinión de los oídos más exigentes.',
          subtitle: 'Ingenieros de audio, productores y músicos profesionales.',
          items: [
            {
              id: 't1',
              name: 'Guillermo Morales',
              role: 'Grammy-Winning Mastering Engineer',
              company: 'Sonic Horizon Studios',
              quote: 'Forge Titan Pro ofrece una resolución espacial y una separación de instrumentos que antes solo era posible con monitores de estudio de 15,000 euros en salas tratadas acústicamente.',
              avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
              rating: 5
            },
            {
              id: 't2',
              name: 'Adrián Del Bosque',
              role: 'Director de Innovación Sonora',
              company: 'Acoustic Labs Berlin',
              quote: 'El chasis de titanio elimina por completo cualquier coloración plástica en los medios graves. Es el auricular más transparente y analítico que he probado en mis 20 años de carrera.',
              avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
              rating: 5
            }
          ]
        },
        pricing: {
          enabled: true,
          title: 'Reserva tu Edición Limitada',
          subtitle: 'Cada unidad se fabrica por encargo con número de serie grabado a láser y certificado de calibración acústica individual.',
          billingCycle: 'monthly',
          discountNote: 'Incluye estuche de viaje de aluminio macizo y cable de plata pura balanceado',
          plans: [
            {
              id: 'f_standard',
              name: 'Titanium Pure',
              tag: 'Edición Limitada',
              priceMonthly: '599€',
              priceAnnual: '549€',
              description: 'Acabado en titanio natural mate con almohadillas en cuero negro italiano.',
              features: [
                'Chasis mecanizado en titanio grado 5',
                'Transductores de berilio de 45 mm',
                'Cancelación de ruido activa híbrida 48dB',
                'Estuche rígido de protección en aluminio',
                'Cable trenzado libre de oxígeno de 3.5mm y USB-C'
              ],
              ctaText: 'Reservar Titanium Pure',
              ctaLink: '#reserve-titanium',
              highlighted: false
            },
            {
              id: 'f_master',
              name: 'Obsidian Master',
              tag: 'Edición Audiófilo Coleccionista',
              priceMonthly: '899€',
              priceAnnual: '799€',
              description: 'Tratamiento PVD negro diamante, cable de plata de 8 núcleos y calibración bespoke.',
              features: [
                'Todo lo de Titanium Pure + Recubrimiento PVD Obsidian',
                'Cable balanceado de plata pura al 99.99% (4.4mm Pentaconn)',
                'Curva de calibración acústica firmada por el ingeniero',
                'Almohadillas adicionales de piel de alcántara perforada',
                'Garantía VIP vitalicia con recambio express'
              ],
              ctaText: 'Reservar Obsidian Master',
              ctaLink: '#reserve-obsidian',
              highlighted: true
            }
          ]
        },
        faq: {
          enabled: true,
          title: 'Preguntas Frecuentes sobre Forge Titan',
          subtitle: 'Detalles sobre compatibilidad, envíos y garantía.',
          items: [
            {
              id: 'ff_1',
              question: '¿Puedo utilizarlos con cable para escuchar audio sin pérdidas?',
              answer: 'Sí. Puedes conectarlos por USB-C digital directo a tu ordenador o smartphone para reproducir archivos FLAC/ALAC de hasta 32 bits / 384 kHz utilizando el DAC interno, o por cable analógico balanceado de 3.5mm/4.4mm.'
            },
            {
              id: 'ff_2',
              question: '¿Qué incluye la garantía oficial de 5 años?',
              answer: 'Cubre cualquier defecto mecánico o electrónico con sustitución directa de piezas o reemplazo completo de la unidad en menos de 48 horas laborables.'
            },
            {
              id: 'ff_3',
              question: '¿Las almohadillas son reemplazables por el usuario?',
              answer: 'Sí, las almohadillas disponen de un sistema de acople magnético de neodimio que permite intercambiarlas en segundos sin herramientas.'
            }
          ]
        },
        ctaFinal: {
          enabled: true,
          kicker: 'Lote de Lanzamiento Exclusivo',
          title: 'Experimenta el sonido en su máxima pureza.',
          subtitle: 'Las primeras 500 unidades numeradas incluyen grabado personalizado gratuito en la diadema.',
          primaryCta: { text: 'Reservar Mi Unidad', link: '#pricing' },
          secondaryCta: { text: 'Consultar Disponibilidad en Tiendas', link: '#dealers' },
          backgroundStyle: 'glow'
        },
        footer: {
          copyright: '© 2026 Forge Acoustic Engineering S.L. Todos los derechos reservados.',
          legalLinks: [
            { label: 'Garantía & Devoluciones', href: '#warranty' },
            { label: 'Certificado Hi-Res', href: '#hires' },
            { label: 'Privacidad', href: '#privacy' },
            { label: 'Términos', href: '#terms' }
          ],
          socialLinks: [
            { platform: 'Instagram', url: 'https://instagram.com' },
            { platform: 'YouTube', url: 'https://youtube.com' },
            { platform: 'Twitter / X', url: 'https://twitter.com' }
          ]
        }
      }
    }
  }
];
