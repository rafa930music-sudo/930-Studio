import { TemplateDefinition } from '../../types';

export const WELLNESS_TEMPLATES: TemplateDefinition[] = [
  // 10. VERDE — Salud Holística, Nutrición Consciente & Bienestar
  {
    id: 'verde-wellness',
    name: 'Verde',
    tagline: 'Plataforma de bienestar holístico, suplementos orgánicos puros y planes nutricionales personalizados',
    category: 'wellness',
    thumbnail: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=1200&q=80',
    description: 'Tonos naturales de hoja verde #10B981 y tierra suave, tipografía limpia y orgánica, sellos bio oficiales, cuadrícula bento de beneficios celulares, split de suplementación limpia, planes de suscripción y preguntas frecuentes.',
    accentColor: '#10B981',
    theme: 'light',
    defaultConfig: {
      templateId: 'verde-wellness',
      name: 'Verde Botanical Health',
      slug: 'verde-botanical',
      domain: 'verdebotanical.com',
      theme: 'light',
      accentColor: '#10B981',
      fontFamily: 'Inter, -apple-system, sans-serif',
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
        title: 'Verde Botanical — Suplementos Orgánicos & Nutrición Celular Basada en Evidencia',
        description: 'Fórmulas limpias con adaptógenos, hongos medicinales y micronutrientes biodisponibles para restaurar tu vitalidad natural.',
        keywords: 'salud holistica, suplementos organicos, adaptogenos, nutricion celular, longevidad, biohacking'
      },
      sections: {
        navbar: {
          brandName: 'Verde',
          logoText: 'VERDE BOTANICAL',
          ctaText: 'Test Nutricional Gratuito',
          ctaLink: '#pricing',
          links: [
            { label: 'Fórmulas', href: '#features' },
            { label: 'Ingredientes', href: '#product' },
            { label: 'Ciencia', href: '#stats' },
            { label: 'Planes', href: '#pricing' },
            { label: 'FAQ', href: '#faq' }
          ],
          glassBlur: true,
          sticky: true
        },
        hero: {
          enabled: true,
          badge: 'Certificado 100% Orgánico UE • Sin Aditivos ni Rellenos Sintéticos',
          kicker: 'Nutrición Botánica & Longevidad',
          title: 'Nutre tu cuerpo desde',
          highlightTitle: 'la raíz celular.',
          subtitle: 'Fórmulas adaptógenas desarrolladas por médicos y fitoterapeutas para optimizar tu energía diurna, claridad mental y descanso regenerativo nocturno.',
          primaryCta: { text: 'Descubrir la Rutina Vital', link: '#pricing' },
          secondaryCta: { text: 'Realizar Test Nutricional (2 min) →', link: '#product' },
          imageUrl: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=1600&q=80',
          style: 'centered'
        },
        logos: {
          enabled: true,
          title: 'SELLOS DE CALIDAD Y CERTIFICACIONES INDEPENDIENTES',
          items: [
            { id: 'l1', name: 'Agricultura Ecológica UE', tagline: '100% Bio' },
            { id: 'l2', name: 'GMP Certified Lab', tagline: 'Farmacéutica' },
            { id: 'l3', name: 'Non-GMO Project', tagline: 'Sin Transgénicos' },
            { id: 'l4', name: 'Vegan Society', tagline: '100% Vegetal' },
            { id: 'l5', name: 'Lab Test 3rd Party', tagline: 'Pureza Verificada' }
          ]
        },
        bentoFeatures: {
          enabled: true,
          kicker: 'Los Tres Pilares de Verde',
          title: 'Biodisponibilidad máxima sin químicos artificiales.',
          subtitle: 'Combinamos extractos botánicos estandarizados con minerales quelados para una absorción celular óptima.',
          items: [
            {
              id: 'f1',
              title: 'Complejo de Adaptógenos & Hongos Medicinales',
              description: 'Ashwagandha KSM-66, Melena de León y Reishi rojo orgánico que modulan la respuesta del sistema nervioso ante el estrés crónico.',
              icon: 'BrainCircuit',
              tag: 'Energía Sin Picos',
              colSpan: 2,
              statNumber: '100% Puro',
              statLabel: 'Extractos estandarizados en principios activos'
            },
            {
              id: 'f2',
              title: 'Cero Aglutinantes o Colorantes',
              description: 'Cápsulas de celulosa vegetal sin dióxido de titanio, estearato de magnesio ni azúcares añadidos.',
              icon: 'ShieldCheck',
              tag: 'Clean Label',
              colSpan: 1
            },
            {
              id: 'f3',
              title: 'Envases de Cristal Violeta Miron',
              description: 'Protege las moléculas fotosensibles de los fitonutrientes bloqueando el espectro de luz visible.',
              icon: 'Layers',
              tag: 'Cristal Biofotónico',
              colSpan: 1
            },
            {
              id: 'f4',
              title: 'Pruebas de Laboratorio por Lote',
              description: 'Análisis cromatográfico de metales pesados, pesticidas y microbiología accesible mediante código QR en cada frasco.',
              icon: 'CheckCircle2',
              tag: 'Trazabilidad Total',
              colSpan: 2,
              statNumber: '99.4%',
              statLabel: 'Tasa de satisfacción reportada por clientes habituales'
            }
          ]
        },
        productHighlight: {
          enabled: true,
          kicker: 'Fórmula Estrella',
          title: 'El Pack Diario Vitality & Sleep.',
          subtitle: 'Dos momentos clave: activación matutina y reparación profunda nocturna.',
          description: 'Despierta con vitalidad sostenida sin necesidad de exceso de cafeína y concilia un sueño reparador con magnesio bisglicinato y pasiflora silvestre.',
          imageUrl: 'https://images.unsplash.com/photo-1512290900672-1f41e176251b?auto=format&fit=crop&w=1600&q=80',
          layout: 'image-left',
          ctaText: 'Ver Ingredientes y Prospecto',
          ctaLink: '#pricing',
          specs: [
            { label: 'Energía Diurna', value: 'Ashwagandha + B-Complex', detail: 'Modula el cortisol' },
            { label: 'Descanso Nocturno', value: 'Magnesio + L-Teanina', detail: 'Fase REM profunda' },
            { label: 'Formato', value: '60 Días de Suministro', detail: 'Recargas ecológicas' }
          ]
        },
        stats: {
          enabled: true,
          kicker: 'Impacto en la Salud',
          title: 'Resultados clínicos respaldados por nuestros usuarios.',
          subtitle: 'Estudio observacional realizado con más de 1,200 personas tras 60 días de rutina.',
          items: [
            { id: 's1', value: '88%', label: 'Mayor Claridad Mental', description: 'Reducción del cansancio vespertino' },
            { id: 's2', value: '92%', label: 'Mejor Calidad de Sueño', description: 'Menos despertares nocturnos' },
            { id: 's3', value: '45,000+', label: 'Rutinas Entregadas', description: 'En España, Francia y Alemania' },
            { id: 's4', value: '0 Aditivos', label: 'Química Sintética', description: '100% ingredientes limpios' }
          ]
        },
        testimonials: {
          enabled: true,
          title: 'Opiniones de personas que han recuperado su energía.',
          subtitle: 'Historias reales de clientes que integraron Verde en su estilo de vida.',
          items: [
            {
              id: 't1',
              name: 'Dra. Sandra Beltrán',
              role: 'Médica de Familia & Nutricionista',
              company: 'Centro Médico Integrativo',
              quote: 'Recomiendo las fórmulas de Verde a mis pacientes porque la calidad y biodisponibilidad de sus materias primas es impecable. El complejo de adaptógenos es el más limpio del mercado europeo.',
              avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
              rating: 5
            },
            {
              id: 't2',
              name: 'Javier Doménech',
              role: 'Empresario & Atleta Amateur',
              company: 'Valencia',
              quote: 'Llevaba dos años arrastrando fatiga mental por las tardes. A las tres semanas de empezar con el pack diario de Verde noté una estabilidad energética asombrosa.',
              avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
              rating: 5
            }
          ]
        },
        pricing: {
          enabled: true,
          title: 'Elige tu Plan de Bienestar',
          subtitle: 'Suscripción flexible con envíos automáticos cada mes y cancelación en un clic.',
          billingCycle: 'monthly',
          discountNote: '15% de descuento permanente y gastos de envío gratuitos en suscripción mensual',
          plans: [
            {
              id: 'w_essential',
              name: 'Rutina Esencial (30 Días)',
              tag: 'Compra Única',
              priceMonthly: '45€',
              priceAnnual: '39€',
              description: 'Para quienes desean probar la fórmula antes de suscribirse.',
              features: [
                'Frasco de cristal Miron con 60 cápsulas',
                'Guía nutricional de hábitos matutinos en PDF',
                'Acceso al canal de consultas de fitoterapia',
                'Envío asegurado en 24-48 horas'
              ],
              ctaText: 'Comprar Rutina Esencial',
              ctaLink: '#buy-essential',
              highlighted: false
            },
            {
              id: 'w_subscription',
              name: 'Membresía Vitality Club',
              tag: 'Más Popular',
              priceMonthly: '38€',
              priceAnnual: '32€',
              description: 'Recargas automáticas en bolsa compostable sin interrupciones en tu rutina.',
              features: [
                '15% de descuento en todas las recargas mensuales',
                'Frasco de cristal Miron de bienvenida gratuito',
                'Bolsa de recarga 100% compostable cada 30 días',
                'Consulta mensual 1 a 1 con nutricionista colegiado',
                'Cancela o pausa cuando quieras sin permanencia'
              ],
              ctaText: 'Unirme a la Membresía',
              ctaLink: '#join-membership',
              highlighted: true
            }
          ]
        },
        faq: {
          enabled: true,
          title: 'Preguntas Frecuentes sobre Verde Botanical',
          subtitle: 'Todo sobre tomas recomendadas, alérgenos y envíos.',
          items: [
            {
              id: 'wf_1',
              question: '¿Cuándo empezaré a notar los efectos de los adaptógenos?',
              answer: 'La mayoría de las personas percibe una mejora en la estabilidad energética y el descanso durante los primeros 7 a 14 días. Los beneficios a nivel de regulación de cortisol y concentración se consolidan a las 4-6 semanas de toma continuada.'
            },
            {
              id: 'wf_2',
              question: '¿Las cápsulas son aptas para celíacos y personas veganas?',
              answer: 'Sí, todas nuestras fórmulas son 100% libres de gluten, lactosa, soja, huevo y están certificadas como veganas por The Vegan Society.'
            },
            {
              id: 'wf_3',
              question: '¿Cómo funciona la cancelación de la suscripción?',
              answer: 'Puedes pausar, adelantar o cancelar tu suscripción con un solo clic desde tu panel de usuario sin tener que llamar por teléfono ni justificar ningún motivo.'
            }
          ]
        },
        ctaFinal: {
          enabled: true,
          kicker: 'Empieza Hoy Mismo',
          title: 'Tu cuerpo agradecerá cada decisión consciente.',
          subtitle: 'Prueba la rutina durante 30 días. Si no sientes una diferencia real en tu energía, te devolvemos el 100% de tu dinero.',
          primaryCta: { text: 'Iniciar mi Rutina Verde', link: '#pricing' },
          secondaryCta: { text: 'Realizar el Test Nutricional', link: '#product' },
          backgroundStyle: 'glow'
        },
        footer: {
          copyright: '© 2026 Verde Botanical Health S.L. Madrid • Barcelona.',
          legalLinks: [
            { label: 'Certificados de Laboratorio', href: '#lab' },
            { label: 'Política de Envíos', href: '#shipping' },
            { label: 'Privacidad', href: '#privacy' },
            { label: 'Aviso Legal', href: '#legal' }
          ],
          socialLinks: [
            { platform: 'Instagram', url: 'https://instagram.com' },
            { platform: 'TikTok', url: 'https://tiktok.com' },
            { platform: 'YouTube', url: 'https://youtube.com' }
          ]
        }
      }
    }
  },

  // 11. SERENITY — Spa Termal, Retiros Holísticos & Tratamientos de Autor
  {
    id: 'serenity-spa',
    name: 'Serenity',
    tagline: 'Centro termal de autor con aguas mineromedicinales, masajes holísticos, circuito hidrotermal y suites de desconexión',
    category: 'wellness',
    thumbnail: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
    description: 'Blanco luminoso y azul celeste #06B6D4, tipografía relajante, carrusel de tratamientos sensoriales, pestañas de experiencias de día y fin de semana, formulario de reserva multi-paso, mapa de ubicación termal y testimonios.',
    accentColor: '#06B6D4',
    theme: 'light',
    defaultConfig: {
      templateId: 'serenity-spa',
      name: 'Serenity Thermal Spa',
      slug: 'serenity-spa',
      domain: 'serenityspa.wellness',
      theme: 'light',
      accentColor: '#06B6D4',
      fontFamily: 'Inter, -apple-system, sans-serif',
      borderRadius: 20,
      published: true,
      sectionOrder: [
        'navbar',
        'hero',
        'slider',
        'bentoFeatures',
        'tabs',
        'stats',
        'testimonials',
        'leadForm',
        'map',
        'faq',
        'ctaFinal',
        'footer'
      ],
      seo: {
        title: 'Serenity Thermal Spa — Circuito Hidrotermal, Masajes & Retiros de Bienestar',
        description: 'Un oasis de paz y silencio en plena naturaleza para revitalizar cuerpo y mente con terapias termales y aromaterapia.',
        keywords: 'spa termal, circuito hidrotermal, masajes relajantes, retiro de bienestar, escapada romantica, aguas termales'
      },
      sections: {
        navbar: {
          brandName: 'Serenity',
          logoText: 'SERENITY SPA',
          ctaText: 'Reservar Tratamiento',
          ctaLink: '#booking',
          links: [
            { label: 'Tratamientos', href: '#slider' },
            { label: 'Instalaciones', href: '#features' },
            { label: 'Experiencias', href: '#tabs' },
            { label: 'Reserva', href: '#booking' },
            { label: 'Ubicación', href: '#map' }
          ],
          glassBlur: true,
          sticky: true
        },
        hero: {
          enabled: true,
          badge: 'Mejor Spa de Destino España 2025 • World Luxury Spa Awards',
          kicker: 'Santuario de Calma & Regeneración',
          title: 'El lujo del silencio.',
          highlightTitle: 'El poder del agua.',
          subtitle: 'Sumérgete en nuestras piscinas termales a 36°C, desconecta del ruido del mundo y déjate cuidar por terapeutas expertos en un entorno de naturaleza virgen.',
          primaryCta: { text: 'Ver Menú de Tratamientos', link: '#slider' },
          secondaryCta: { text: 'Reservar Pase de Día →', link: '#booking' },
          imageUrl: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=80',
          style: 'centered'
        },
        slider: {
          enabled: true,
          kicker: 'Rituales de Autor',
          title: 'Terapias creadas para despertar tus sentidos.',
          subtitle: 'Elige el tratamiento ideal para tu momento vital.',
          autoplay: true,
          slides: [
            {
              id: 'sl_1',
              title: 'Ritual Sensorial con Piedras Volcánicas & Lavanda',
              subtitle: '90 minutos de masaje descontracturante y termoterapia que alivia tensiones musculares profundas.',
              tag: 'Ritual Estrella',
              imageUrl: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=80',
              ctaText: 'Reservar Ritual Volcánico',
              ctaLink: '#booking'
            },
            {
              id: 'sl_2',
              title: 'Circuito Hidrotermal Completo & Baño Turco',
              subtitle: 'Piscina de chorros subacuáticos, sauna finlandesa de cedro, pozo de agua fría y sala de cromoterapia.',
              tag: 'Acceso Termal',
              imageUrl: 'https://images.unsplash.com/photo-1583416750470-965b2707b355?auto=format&fit=crop&w=1200&q=80',
              ctaText: 'Reservar Circuito',
              ctaLink: '#booking'
            },
            {
              id: 'sl_3',
              title: 'Facial Iluminador con Oro Coloidal & Rosa Mosqueta',
              subtitle: 'Regeneración celular no invasiva con masaje linfático facial y mascarilla de colágeno marino puro.',
              tag: 'Cuidado Facial',
              imageUrl: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=80',
              ctaText: 'Reservar Facial',
              ctaLink: '#booking'
            }
          ]
        },
        bentoFeatures: {
          enabled: true,
          kicker: 'Las Instalaciones Serenity',
          title: 'Diseñado para inducir un estado de relajación profunda.',
          subtitle: 'Arquitectura bioclimática en piedra natural, madera cálida y vistas panorámicas a los bosques.',
          items: [
            {
              id: 'f1',
              title: 'Aguas Mineromedicinales a 36°C',
              description: 'Manantial termal propio rico en silicio, magnesio y sulfatos que revitalizan la dermis y desinflaman articulaciones.',
              icon: 'Sparkles',
              tag: 'Manantial Propio',
              colSpan: 2,
              statNumber: '36°C',
              statLabel: 'Temperatura constante todo el año'
            },
            {
              id: 'f2',
              title: 'Aromaterapia con Aceites Botánicos Puros',
              description: 'Destilación propia de eucalipto silvestre, lavanda y bergamota en salas climatizadas de inhalación.',
              icon: 'Flame',
              tag: 'Esencias 100% Bio',
              colSpan: 1
            },
            {
              id: 'f3',
              title: 'Terapeutas Colegiados & Quiromasaje',
              description: 'Equipo de terapeutas con formación internacional en técnicas tailandesas, ayurvédicas y osteopatía suave.',
              icon: 'HeartHandshake',
              tag: 'Manos Expertas',
              colSpan: 1
            },
            {
              id: 'f4',
              title: 'Ambiente Libre de Dispositivos (Digital Detox)',
              description: 'Política estricta de silencio y desconexión digital para garantizar una paz absoluta a todos los huéspedes.',
              icon: 'ShieldCheck',
              tag: 'Silencio Absoluto',
              colSpan: 2,
              statNumber: '100%',
              statLabel: 'Privacidad y serenidad garantizada'
            }
          ]
        },
        tabs: {
          enabled: true,
          kicker: 'Experiencias a tu Medida',
          title: 'Planes para disfrutar en solitario o en pareja.',
          subtitle: 'Elige la escapada perfecta según tu tiempo disponible.',
          tabs: [
            {
              id: 'tab_day',
              label: 'Pase Day Spa (1 Día)',
              icon: 'Sparkles',
              title: 'Una jornada completa de desconexión',
              description: 'Acceso ilimitado al circuito hidrotermal, masaje de autor de 60 minutos y almuerzo saludable en nuestro restaurante orgánico.',
              imageUrl: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
              points: [
                'Acceso al circuito de aguas termales de 10:00 a 20:00',
                'Albornoz de algodón egipcio, toallas y zapatillas incluidas',
                'Menú degustación de 3 pasos en el restaurante El Manantial'
              ]
            },
            {
              id: 'tab_getaway',
              label: 'Escapada Romántica (Fin de Semana)',
              icon: 'HeartHandshake',
              title: 'Dos noches inolvidables en suite con jacuzzi termal',
              description: 'Alojamiento en suite bioclimática, ritual para dos con cava ecológico y desayuno buffet servido en la terraza privada.',
              imageUrl: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
              points: [
                '2 noches en Suite Junior con chimenea y cama king-size',
                'Masaje sincronizado en cabina dúo con aromaterapia',
                'Cena a la luz de las velas con maridaje de vinos locales'
              ]
            }
          ]
        },
        stats: {
          enabled: true,
          kicker: 'Excelencia Premiada',
          title: 'La preferencia de los viajeros más exigentes.',
          subtitle: 'Reconocido unánimemente como el santuario de desconexión de referencia.',
          items: [
            { id: 's1', value: '4.95/5', label: 'Puntuación en Google', description: 'Más de 1,800 reseñas reales' },
            { id: 's2', value: '36°C', label: 'Temperatura Termal', description: 'Aguas mineromedicinales puras' },
            { id: 's3', value: '18 Cabinas', label: 'Espacios Privados', description: 'Con luz natural y vistas al bosque' },
            { id: 's4', value: 'Nº 1', label: 'Spa de Destino', description: 'Premios Luxury Travel 2025' }
          ]
        },
        testimonials: {
          enabled: true,
          title: 'Lo que dicen quienes han encontrado su refugio.',
          subtitle: 'Sensaciones compartidas tras una jornada de relajación en Serenity.',
          items: [
            {
              id: 't1',
              name: 'Patricia & Alberto',
              role: 'Huéspedes de Fin de Semana',
              company: 'Madrid',
              quote: 'Salimos sintiéndonos como personas completamente nuevas. La atención del personal, la temperatura del agua y el silencio de las instalaciones no tienen comparación.',
              avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
              rating: 5
            },
            {
              id: 't2',
              name: 'Dr. Fernando Valls',
              role: 'Cirujano & Huésped Frecuente',
              company: 'Barcelona',
              quote: 'El masaje con piedras volcánicas me quitó meses de sobrecarga en la espalda. Es el único lugar donde consigo desconectar al 100% de la rutina médica.',
              avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
              rating: 5
            }
          ]
        },
        leadForm: {
          enabled: true,
          kicker: 'Solicitud de Disponibilidad',
          title: 'Reserva tu momento de serenidad.',
          subtitle: 'Rellena este formulario y nuestro equipo de reservas te confirmará la cita en menos de 2 horas.',
          submitButtonText: 'Confirmar Solicitud de Reserva',
          successTitle: '¡Solicitud de Reserva Enviada!',
          successMessage: 'Nos pondremos en contacto contigo por teléfono o correo electrónico para confirmar tu horario preferido y enviarte los detalles de acceso.',
          steps: [
            {
              id: 'step_1',
              stepNumber: 1,
              title: 'Tus Datos Personales',
              subtitle: 'Indícanos a quién irá dirigida la reserva.',
              fields: [
                { id: 'rf_name', label: 'Nombre y Apellidos', type: 'text', placeholder: 'Ej. Laura Martínez', required: true },
                { id: 'rf_email', label: 'Correo Electrónico', type: 'email', placeholder: 'laura@email.com', required: true },
                { id: 'rf_phone', label: 'Teléfono de Contacto', type: 'text', placeholder: '+34 600 000 000', required: true }
              ]
            },
            {
              id: 'step_2',
              stepNumber: 2,
              title: 'Detalles de la Experiencia',
              subtitle: 'Tratamiento, fecha deseada y número de personas.',
              fields: [
                {
                  id: 'rf_service',
                  label: 'Experiencia Deseada',
                  type: 'select',
                  options: ['Pase Day Spa Completo', 'Ritual Volcánico de Autor (90 min)', 'Circuito Hidrotermal (2 horas)', 'Escapada Romántica Fin de Semana'],
                  required: true
                },
                {
                  id: 'rf_guests',
                  label: 'Número de Personas',
                  type: 'select',
                  options: ['1 Persona (Individual)', '2 Personas (Pareja)', 'Grupo Reducido (3-5 personas)'],
                  required: true
                },
                { id: 'rf_notes', label: 'Peticiones especiales o alergias', type: 'textarea', placeholder: 'Indícanos si es para un aniversario, regalo especial o tienes alguna condición...', required: false }
              ]
            }
          ]
        },
        map: {
          enabled: true,
          kicker: 'En Plena Naturaleza',
          title: 'Un entorno privilegiado a 45 minutos de la ciudad.',
          subtitle: 'Fácil acceso en vehículo privado con aparcamiento cubierto gratuito con cargadores para coches eléctricos.',
          address: 'Camino del Manantial, Km 4.2, Valle de la Calma',
          city: '28410 Manzanares el Real, Madrid',
          hours: 'Lunes a Domingo: 09:30 - 21:30 (Reserva previa requerida)',
          phone: '+34 918 000 789',
          email: 'reservas@serenityspa.wellness',
          embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.7947781035293!2d-3.8647!3d40.7275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQzJzM5LjAiTiAzwrA1MSc1Mi45Ilc!5e0!3m2!1ses!2ses!4v1650000000000!5m2!1ses!2ses',
          directionsUrl: 'https://maps.google.com'
        },
        faq: {
          enabled: true,
          title: 'Preguntas Frecuentes sobre Serenity Spa',
          subtitle: 'Todo lo que necesitas saber antes de tu llegada.',
          items: [
            {
              id: 'spf_1',
              question: '¿Qué indumentaria debo traer para el circuito termal?',
              answer: 'Solo necesitas traer tu traje de baño. A tu llegada te facilitaremos albornoz de rizo de algodón, toallas de felpa, zapatillas antideslizantes y taquilla privada con llave electrónica.'
            },
            {
              id: 'spf_2',
              question: '¿Puedo regalar una experiencia o comprar un bono regalo?',
              answer: 'Sí, disponemos de elegantes cajas de regalo físicas o tarjetas digitales personalizables con validez de 12 meses para cualquiera de nuestros tratamientos.'
            },
            {
              id: 'spf_3',
              question: '¿Cuál es la política de cancelación de reservas?',
              answer: 'Puedes cancelar o modificar la fecha de tu tratamiento sin coste alguno con hasta 24 horas de antelación comunicándolo por teléfono o correo electrónico.'
            }
          ]
        },
        ctaFinal: {
          enabled: true,
          kicker: 'Regálate un Respiro',
          title: 'Tu cuerpo y tu mente te lo agradecerán.',
          subtitle: 'Reserva hoy tu tratamiento y asegura tu horario preferido en nuestras cabinas de autor.',
          primaryCta: { text: 'Reservar Tratamiento Ahora', link: '#booking' },
          secondaryCta: { text: 'Comprar Bono Regalo', link: '#gift' },
          backgroundStyle: 'glow'
        },
        footer: {
          copyright: '© 2026 Serenity Thermal Spa S.L. Todos los derechos reservados.',
          legalLinks: [
            { label: 'Normas del Centro Termal', href: '#rules' },
            { label: 'Bonos Regalo', href: '#gift' },
            { label: 'Privacidad', href: '#privacy' },
            { label: 'Aviso Legal', href: '#legal' }
          ],
          socialLinks: [
            { platform: 'Instagram', url: 'https://instagram.com' },
            { platform: 'Facebook', url: 'https://facebook.com' },
            { platform: 'TripAdvisor', url: 'https://tripadvisor.com' }
          ]
        }
      }
    }
  }
];
