import React, { useState, useEffect } from 'react';
import { SectionType, SavedComponent } from '../types';
import { X, Plus, Sparkles, Layers, Search, Bookmark, Trash2 } from 'lucide-react';

interface AddSectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddSection: (sectionType: SectionType) => void;
  onAddSavedComponent?: (savedComp: SavedComponent) => void;
  existingSections: SectionType[];
  isDark?: boolean;
}

interface SectionOption {
  type: SectionType;
  title: string;
  category: 'Estructura' | 'Conversión' | 'Interactivo' | 'Prueba Social';
  description: string;
  badge?: string;
  icon: string;
}

export const AddSectionModal: React.FC<AddSectionModalProps> = ({
  isOpen,
  onClose,
  onAddSection,
  onAddSavedComponent,
  existingSections,
  isDark = true
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [savedComponents, setSavedComponents] = useState<SavedComponent[]>([]);

  useEffect(() => {
    if (isOpen) {
      try {
        const saved = localStorage.getItem('930_saved_components') || localStorage.getItem('930studio_saved_components');
        if (saved) {
          setSavedComponents(JSON.parse(saved));
        }
      } catch (e) {
        console.error('Error loading saved components', e);
      }
    }
  }, [isOpen]);

  const handleDeleteSavedComponent = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const updated = savedComponents.filter((c) => c.id !== id);
    setSavedComponents(updated);
    try {
      localStorage.setItem('930_saved_components', JSON.stringify(updated));
    } catch (err) {
      console.error(err);
    }
  };

  if (!isOpen) return null;

  const catalog: SectionOption[] = [
    {
      type: 'hero',
      title: 'Cabecera Principal (Hero)',
      category: 'Estructura',
      description: 'Titular de alto impacto con subtítulo, CTAs dobles e imagen o maqueta de producto.',
      icon: '✨'
    },
    {
      type: 'bentoFeatures',
      title: 'Características Bento Grid',
      category: 'Estructura',
      description: 'Bloques asimétricos estilo Apple para destacar funciones y métricas clave.',
      badge: 'Estilo Apple',
      icon: '📦'
    },
    {
      type: 'productHighlight',
      title: 'Detalle de Producto',
      category: 'Estructura',
      description: 'Enfoque profundo en un dispositivo o producto estrella con especificaciones técnicas.',
      icon: '📱'
    },
    {
      type: 'stats',
      title: 'Métricas & Estadísticas',
      category: 'Prueba Social',
      description: 'Cifras clave con números gigantes y etiquetas de alto contraste.',
      icon: '📊'
    },
    {
      type: 'testimonials',
      title: 'Testimonios de Clientes',
      category: 'Prueba Social',
      description: 'Reseñas auténticas con avatares, cargos empresariales y citas.',
      icon: '⭐'
    },
    {
      type: 'pricing',
      title: 'Tabla de Precios',
      category: 'Conversión',
      description: 'Selector de planes con opción anual/mensual y llamada a la acción.',
      badge: 'Conversión',
      icon: '💳'
    },
    {
      type: 'faq',
      title: 'Preguntas Frecuentes (FAQ)',
      category: 'Conversión',
      description: 'Acordeones interactivos para resolver dudas de clientes.',
      icon: '❓'
    },
    {
      type: 'ctaFinal',
      title: 'Llamado a la Acción Final',
      category: 'Conversión',
      description: 'Cierre persuasivo a pantalla completa antes del pie de página.',
      icon: '🚀'
    },
    {
      type: 'logos',
      title: 'Logotipos de Confianza',
      category: 'Prueba Social',
      description: 'Barra horizontal con marcas y empresas que confían en tu producto.',
      icon: '🏢'
    },
    {
      type: 'slider',
      title: 'Slider / Carrusel Visual',
      category: 'Interactivo',
      description: 'Diapositivas navegables con imágenes en alta resolución y textos.',
      badge: 'Nuevo',
      icon: '🎠'
    },
    {
      type: 'countdown',
      title: 'Cuenta Regresiva de Lanzamiento',
      category: 'Interactivo',
      description: 'Reloj regresivo en tiempo real para ofertas por tiempo limitado o lanzamientos.',
      badge: 'Nuevo',
      icon: '⏱️'
    },
    {
      type: 'tabs',
      title: 'Pestañas de Contenido Dinámico',
      category: 'Interactivo',
      description: 'Organiza información compleja en pestañas limpias sin sobrecargar la página.',
      icon: '📑'
    },
    {
      type: 'marquee',
      title: 'Marquesina Continua de Texto',
      category: 'Interactivo',
      description: 'Cinta de texto infinito animado para frases clave y anuncios destacados.',
      icon: '⚡'
    },
    {
      type: 'map',
      title: 'Mapa & Ubicación de Sede',
      category: 'Estructura',
      description: 'Información de contacto físico, mapa interactivo y horarios de atención.',
      icon: '📍'
    }
  ];

  const categories = ['Todos', 'Estructura', 'Conversión', 'Interactivo', 'Prueba Social', 'Guardados'];

  const filtered = catalog.filter((item) => {
    if (selectedCategory === 'Guardados') return false;
    const matchesCat = selectedCategory === 'Todos' || item.category === selectedCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const filteredSaved = savedComponents.filter((comp) =>
    comp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    comp.sectionType.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fade-in">
      <div
        className={`border rounded-3xl w-full max-w-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.8)] flex flex-col max-h-[85vh] transition-all ${
          isDark
            ? 'bg-[#12121A] border-white/10 text-white'
            : 'bg-white border-[#E5E7EB] text-[#0F172A]'
        }`}
      >
        {/* Header */}
        <div className="p-6 border-b border-inherit flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#00E5FF]/15 text-[#00E5FF] border border-[#00E5FF]/30 flex items-center justify-center shadow-[0_0_15px_rgba(0,229,255,0.25)]">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-black tracking-tight">Catálogo de Secciones Modulares</h3>
              <p className="text-xs text-[#64748B] dark:text-neutral-400">Añade componentes o reutiliza tus bloques guardados</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#64748B] hover:text-[#0F172A] dark:hover:text-white rounded-xl hover:bg-[#F0F0F3] dark:hover:bg-white/5 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter bar */}
        <div className="p-4 border-b border-inherit space-y-3 shrink-0 bg-[#FAFAFC] dark:bg-white/[0.02]">
          <div className="relative">
            <Search className="w-4 h-4 text-[#64748B] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar sección o componente guardado..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full pl-10 pr-4 py-2.5 rounded-xl text-xs border focus:outline-none focus:border-[#00E5FF] ${
                isDark
                  ? 'bg-[#181824] border-white/10 text-white'
                  : 'bg-white border-[#E5E7EB] text-[#0F172A]'
              }`}
            />
          </div>

          <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer flex items-center gap-1.5 ${
                  selectedCategory === cat
                    ? 'bg-[#00E5FF] text-black font-extrabold shadow-[0_0_12px_rgba(0,229,255,0.35)]'
                    : 'bg-white dark:bg-white/5 text-[#64748B] dark:text-neutral-400 border border-[#E5E7EB] dark:border-transparent hover:text-[#0F172A] dark:hover:text-white'
                }`}
              >
                {cat === 'Guardados' && <Bookmark className="w-3 h-3" />}
                <span>{cat}</span>
                {cat === 'Guardados' && savedComponents.length > 0 && (
                  <span className="ml-0.5 px-1.5 py-0.2 rounded-full bg-white/20 text-[10px]">
                    {savedComponents.length}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Content list */}
        <div className="p-6 overflow-y-auto space-y-3 flex-1 bg-[#FAFAFC] dark:bg-transparent">
          {selectedCategory === 'Guardados' ? (
            savedComponents.length === 0 ? (
              <div className="p-8 text-center border border-dashed border-white/10 rounded-2xl space-y-2">
                <Bookmark className="w-8 h-8 text-neutral-500 mx-auto" />
                <p className="text-xs font-bold text-white">No tienes componentes guardados aún</p>
                <p className="text-[11px] text-neutral-400">
                  En el editor visual, haz clic en los 3 puntos de cualquier sección y elige &quot;Guardar como componente&quot; para reutilizarlo en otros proyectos.
                </p>
              </div>
            ) : (
              filteredSaved.map((comp) => (
                <div
                  key={comp.id}
                  className="p-4 rounded-2xl border border-white/10 bg-[#181824] hover:border-[#00E5FF]/40 flex items-center justify-between gap-4 transition-all"
                >
                  <div className="flex items-center gap-3.5 flex-1">
                    <div className="w-10 h-10 rounded-xl bg-[#00E5FF]/10 text-[#00E5FF] flex items-center justify-center font-bold text-sm">
                      <Bookmark className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-black text-white">{comp.name}</h4>
                      <p className="text-[11px] text-neutral-400 mt-0.5">
                        Tipo: <span className="text-[#00E5FF] font-mono">{comp.sectionType}</span> • Guardado: {new Date(comp.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={(e) => handleDeleteSavedComponent(comp.id, e)}
                      className="p-2 text-neutral-400 hover:text-rose-400 hover:bg-rose-500/10 rounded-xl transition-colors cursor-pointer"
                      title="Eliminar de guardados"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => {
                        if (onAddSavedComponent) {
                          onAddSavedComponent(comp);
                        } else {
                          onAddSection(comp.sectionType);
                        }
                        onClose();
                      }}
                      className="px-4 py-2 rounded-xl text-xs font-black bg-[#00E5FF] hover:bg-[#00cce6] text-black shadow-xs flex items-center gap-1.5 cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Insertar</span>
                    </button>
                  </div>
                </div>
              ))
            )
          ) : (
            filtered.map((item) => {
              const isAlreadyAdded = existingSections.includes(item.type);

              return (
                <div
                  key={item.type}
                  className={`p-4 rounded-2xl border flex items-center justify-between gap-4 transition-all ${
                    isDark
                      ? 'bg-[#181824] border-white/5 hover:border-white/20'
                      : 'bg-white border-[#E5E7EB] hover:border-[#D1D5DB] shadow-xs'
                  }`}
                >
                  <div className="flex items-center gap-3.5 flex-1">
                    <div className="w-10 h-10 rounded-2xl bg-[#FAFAFC] dark:bg-white/5 border border-inherit flex items-center justify-center text-xl shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-xs font-black text-[#0F172A] dark:text-white">{item.title}</h4>
                        {item.badge && (
                          <span className="text-[9px] bg-[#00E5FF]/15 text-[#00B8D4] dark:text-[#00E5FF] px-2 py-0.5 rounded-full font-bold">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-[#64748B] dark:text-neutral-400 mt-0.5 leading-relaxed font-medium">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      onAddSection(item.type);
                      onClose();
                    }}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shrink-0 cursor-pointer ${
                      isAlreadyAdded
                        ? 'bg-[#F0F0F3] dark:bg-white/5 text-[#64748B] dark:text-neutral-400 hover:text-[#0F172A] border border-[#E5E7EB] dark:border-transparent'
                        : 'bg-[#0F172A] text-white hover:bg-[#1E293B] shadow-xs dark:bg-[#00E5FF] dark:text-black dark:hover:bg-[#00cce6]'
                    }`}
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>{isAlreadyAdded ? 'Añadir otra vez' : 'Insertar'}</span>
                  </button>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};
