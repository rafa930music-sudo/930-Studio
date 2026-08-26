import React, { useState } from 'react';
import { SiteConfig, SectionType, SavedComponent } from '../../types';
import {
  Layers,
  ChevronRight,
  ChevronDown,
  Eye,
  EyeOff,
  Copy,
  Trash2,
  ArrowUp,
  ArrowDown,
  Plus,
  Sparkles,
  Type,
  Image as ImageIcon,
  MousePointer,
  List,
  Sliders,
  Folder,
  Search,
  Lock,
  Unlock,
  Bookmark,
  BookmarkPlus,
  Box,
  LayoutGrid,
  Columns,
  Square,
  Edit2,
  Check,
  X
} from 'lucide-react';

interface HierarchyTreeProps {
  site: SiteConfig;
  activeSection: SectionType | null;
  onSelectSection: (section: SectionType) => void;
  onMoveUp: (index: number) => void;
  onMoveDown: (index: number) => void;
  onDuplicate: (section: SectionType) => void;
  onDelete: (section: SectionType) => void;
  onToggleVisibility: (section: SectionType) => void;
  onOpenAddSection: () => void;
  onUpdateSite?: (updatedSite: SiteConfig) => void;
}

const SECTION_ICON_MAP: Record<string, string> = {
  navbar: '🧭',
  hero: '🚀',
  logos: '🏢',
  bentoFeatures: '🍱',
  productHighlight: '✨',
  stats: '📊',
  testimonials: '💬',
  pricing: '💎',
  faq: '❓',
  timeline: '⏳',
  gallery: '🖼️',
  slider: '🎞️',
  tabs: '📑',
  marquee: '💫',
  countdown: '⏱️',
  leadForm: '📋',
  map: '🗺️',
  ctaFinal: '🎯',
  footer: '⚓',
  custom: '🧩'
};

export const HierarchyTree: React.FC<HierarchyTreeProps> = ({
  site,
  activeSection,
  onSelectSection,
  onMoveUp,
  onMoveDown,
  onDuplicate,
  onDelete,
  onToggleVisibility,
  onOpenAddSection,
  onUpdateSite
}) => {
  const [activeTab, setActiveTab] = useState<'tree' | 'components'>('tree');
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    hero: true,
    bentoFeatures: true,
    navbar: true
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [editingCustomName, setEditingCustomName] = useState<string | null>(null);
  const [customNameDraft, setCustomNameDraft] = useState<string>('');
  const [saveComponentModal, setSaveComponentModal] = useState<SectionType | null>(null);
  const [componentNameInput, setComponentNameInput] = useState('');

  // Local storage saved components
  const [savedComponents, setSavedComponents] = useState<SavedComponent[]>(() => {
    try {
      const stored = localStorage.getItem('930_saved_components');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  const toggleExpand = (sec: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setExpandedSections((prev) => ({ ...prev, [sec]: !prev[sec] }));
  };

  const sections = site.sectionOrder || [];

  const getSubElements = (type: SectionType) => {
    const s = site.sections[type] as any;
    if (!s) return [];

    const elements: { name: string; typeTag: string; icon: any }[] = [];
    elements.push({ name: 'Contenedor Principal', typeTag: 'Container', icon: Box });
    if (s.title || s.brandName) elements.push({ name: s.title || s.brandName || 'Título Principal', typeTag: 'Heading', icon: Type });
    if (s.subtitle || s.description) elements.push({ name: 'Subtítulo / Texto', typeTag: 'Paragraph', icon: Type });
    if (s.imageUrl) elements.push({ name: 'Imagen Principal', typeTag: 'Media', icon: ImageIcon });
    if (s.primaryCta || s.ctaText) elements.push({ name: 'Botón de Acción (CTA)', typeTag: 'Button', icon: MousePointer });
    if (s.items?.length) elements.push({ name: `Fila Grid (${s.items.length} tarjetas)`, typeTag: 'Grid', icon: LayoutGrid });
    if (s.plans?.length) elements.push({ name: `Columnas de Planes (${s.plans.length})`, typeTag: 'Columns', icon: Columns });
    if (s.specs?.length) elements.push({ name: `Lista de Especificaciones (${s.specs.length})`, typeTag: 'List', icon: Sliders });
    if (s.slides?.length) elements.push({ name: `Diapositivas (${s.slides.length})`, typeTag: 'Slider', icon: Square });
    return elements;
  };

  const handleToggleLock = (sec: SectionType, e: React.MouseEvent) => {
    e.stopPropagation();
    if (!onUpdateSite) return;
    const currentStyle = site.customSectionStyles?.[sec] || {};
    const isLocked = !currentStyle.isLocked;
    const updated = {
      ...site,
      customSectionStyles: {
        ...(site.customSectionStyles || {}),
        [sec]: {
          ...currentStyle,
          isLocked
        }
      }
    };
    onUpdateSite(updated);
  };

  const handleSaveCustomName = (sec: SectionType) => {
    if (!onUpdateSite) {
      setEditingCustomName(null);
      return;
    }
    const currentStyle = site.customSectionStyles?.[sec] || {};
    const updated = {
      ...site,
      customSectionStyles: {
        ...(site.customSectionStyles || {}),
        [sec]: {
          ...currentStyle,
          customName: customNameDraft.trim() || undefined
        }
      }
    };
    onUpdateSite(updated);
    setEditingCustomName(null);
  };

  const handleSaveComponent = (sec: SectionType) => {
    const data = site.sections[sec];
    if (!data) return;

    const newComp: SavedComponent = {
      id: `comp_${Date.now()}`,
      name: componentNameInput.trim() || `Componente ${sec}`,
      category: sec,
      sectionType: sec,
      data,
      customStyle: site.customSectionStyles?.[sec],
      createdAt: new Date().toISOString()
    };

    const updated = [newComp, ...savedComponents];
    setSavedComponents(updated);
    try {
      localStorage.setItem('930_saved_components', JSON.stringify(updated));
    } catch (err) {
      console.error(err);
    }
    setSaveComponentModal(null);
    setComponentNameInput('');
  };

  const handleInsertSavedComponent = (comp: SavedComponent) => {
    if (!onUpdateSite) return;
    const secType = comp.sectionType;
    const updatedSections = {
      ...site.sections,
      [secType]: { ...(comp.data as any), enabled: true }
    };

    let newOrder = [...site.sectionOrder];
    if (!newOrder.includes(secType)) {
      newOrder.push(secType);
    }

    const updated = {
      ...site,
      sections: updatedSections,
      sectionOrder: newOrder,
      customSectionStyles: {
        ...(site.customSectionStyles || {}),
        [secType]: comp.customStyle || {}
      }
    };
    onUpdateSite(updated);
    onSelectSection(secType);
  };

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

  const filteredSections = sections.filter((sec) => {
    const customName = site.customSectionStyles?.[sec]?.customName;
    return (
      sec.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (customName && customName.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });

  return (
    <div className="flex flex-col h-full bg-[#12121A] text-white">
      {/* Top Tabs */}
      <div className="p-2 border-b border-white/10 flex items-center bg-[#1A1A24] m-2 rounded-xl text-xs font-bold shrink-0">
        <button
          onClick={() => setActiveTab('tree')}
          className={`flex-1 py-1.5 rounded-lg flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
            activeTab === 'tree' ? 'bg-[#00E5FF] text-black font-black shadow-xs' : 'text-neutral-400 hover:text-white'
          }`}
        >
          <Layers className="w-3.5 h-3.5" />
          <span>Árbol DOM ({sections.length})</span>
        </button>
        <button
          onClick={() => setActiveTab('components')}
          className={`flex-1 py-1.5 rounded-lg flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
            activeTab === 'components' ? 'bg-[#FF00E5] text-black font-black shadow-xs' : 'text-neutral-400 hover:text-white'
          }`}
        >
          <Bookmark className="w-3.5 h-3.5" />
          <span>Guardados ({savedComponents.length})</span>
        </button>
      </div>

      {activeTab === 'tree' ? (
        <>
          {/* Search bar */}
          <div className="px-3 pb-2 border-b border-white/5 shrink-0">
            <div className="relative">
              <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-neutral-400" />
              <input
                type="text"
                placeholder="Filtrar por nombre..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-8 pr-3 py-1.5 rounded-xl text-xs bg-[#1A1A24] border border-white/10 text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#00E5FF]"
              />
            </div>
          </div>

          {/* Tree Nodes List */}
          <div className="flex-1 overflow-y-auto p-2 space-y-1">
            {filteredSections.map((sec, idx) => {
              const isSelected = activeSection === sec;
              const isExpanded = !!expandedSections[sec];
              const subElements = getSubElements(sec);
              const isVisible = (site.sections[sec] as any)?.enabled !== false;
              const isLocked = !!site.customSectionStyles?.[sec]?.isLocked;
              const customName = site.customSectionStyles?.[sec]?.customName;

              return (
                <div
                  key={`${sec}-${idx}`}
                  className={`rounded-2xl border transition-all ${
                    isSelected
                      ? 'border-[#00E5FF]/60 bg-[#00E5FF]/10 shadow-[0_0_15px_rgba(0,229,255,0.15)]'
                      : 'border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/10'
                  }`}
                >
                  {/* Section Main Row */}
                  <div
                    onClick={() => onSelectSection(sec)}
                    className="p-2 flex items-center justify-between gap-1.5 cursor-pointer group select-none"
                  >
                    <div className="flex items-center gap-1.5 min-w-0 flex-1">
                      <button
                        onClick={(e) => toggleExpand(sec, e)}
                        className="p-1 text-neutral-400 hover:text-white rounded-md hover:bg-white/10 transition-colors"
                      >
                        {isExpanded ? (
                          <ChevronDown className="w-3 h-3" />
                        ) : (
                          <ChevronRight className="w-3 h-3" />
                        )}
                      </button>

                      <span className="text-sm select-none">{SECTION_ICON_MAP[sec] || '📦'}</span>

                      {editingCustomName === sec ? (
                        <div className="flex items-center gap-1 min-w-0" onClick={(e) => e.stopPropagation()}>
                          <input
                            autoFocus
                            type="text"
                            value={customNameDraft}
                            onChange={(e) => setCustomNameDraft(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter') handleSaveCustomName(sec);
                              if (e.key === 'Escape') setEditingCustomName(null);
                            }}
                            className="px-1.5 py-0.5 rounded bg-[#1A1A24] border border-[#00E5FF] text-xs text-white outline-none w-28"
                          />
                          <button
                            onClick={() => handleSaveCustomName(sec)}
                            className="p-0.5 text-[#00FF88] hover:bg-white/10 rounded"
                          >
                            <Check className="w-3 h-3" />
                          </button>
                        </div>
                      ) : (
                        <div className="min-w-0 flex-1 flex items-center gap-1">
                          <span
                            className={`text-xs font-black truncate ${
                              isSelected ? 'text-[#00E5FF]' : 'text-neutral-200'
                            }`}
                          >
                            {customName || sec}
                          </span>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setEditingCustomName(sec);
                              setCustomNameDraft(customName || sec);
                            }}
                            className="opacity-0 group-hover:opacity-100 p-0.5 text-neutral-500 hover:text-white transition-opacity"
                            title="Renombrar nodo"
                          >
                            <Edit2 className="w-2.5 h-2.5" />
                          </button>
                        </div>
                      )}
                    </div>

                    {/* Quick Tools for node */}
                    <div className="flex items-center gap-0.5 shrink-0 opacity-80 group-hover:opacity-100">
                      {/* Lock */}
                      <button
                        onClick={(e) => handleToggleLock(sec, e)}
                        className={`p-1 rounded-md hover:bg-white/10 transition-colors ${
                          isLocked ? 'text-amber-400' : 'text-neutral-500 hover:text-white'
                        }`}
                        title={isLocked ? 'Bloqueado (no editable)' : 'Bloquear'}
                      >
                        {isLocked ? <Lock className="w-3 h-3" /> : <Unlock className="w-3 h-3" />}
                      </button>

                      {/* Save to Component Library */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSaveComponentModal(sec);
                          setComponentNameInput(customName || `Sección ${sec}`);
                        }}
                        className="p-1 text-neutral-500 hover:text-[#FF00E5] rounded-md hover:bg-white/10 transition-colors"
                        title="Guardar como componente reusable"
                      >
                        <BookmarkPlus className="w-3 h-3" />
                      </button>

                      {/* Visibility */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onToggleVisibility(sec);
                        }}
                        className={`p-1 rounded-md hover:bg-white/10 transition-colors ${
                          isVisible ? 'text-neutral-400 hover:text-white' : 'text-neutral-600'
                        }`}
                        title={isVisible ? 'Ocultar' : 'Mostrar'}
                      >
                        {isVisible ? <Eye className="w-3 h-3" /> : <EyeOff className="w-3 h-3" />}
                      </button>

                      {/* Move Up */}
                      <button
                        disabled={idx === 0}
                        onClick={(e) => {
                          e.stopPropagation();
                          onMoveUp(idx);
                        }}
                        className="p-1 text-neutral-400 hover:text-white disabled:opacity-20 rounded-md hover:bg-white/10 transition-colors"
                        title="Subir"
                      >
                        <ArrowUp className="w-3 h-3" />
                      </button>

                      {/* Move Down */}
                      <button
                        disabled={idx === sections.length - 1}
                        onClick={(e) => {
                          e.stopPropagation();
                          onMoveDown(idx);
                        }}
                        className="p-1 text-neutral-400 hover:text-white disabled:opacity-20 rounded-md hover:bg-white/10 transition-colors"
                        title="Bajar"
                      >
                        <ArrowDown className="w-3 h-3" />
                      </button>

                      {/* Duplicate */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onDuplicate(sec);
                        }}
                        className="p-1 text-neutral-400 hover:text-[#00E5FF] rounded-md hover:bg-white/10 transition-colors"
                        title="Duplicar"
                      >
                        <Copy className="w-3 h-3" />
                      </button>

                      {/* Delete */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onDelete(sec);
                        }}
                        className="p-1 text-neutral-400 hover:text-red-400 rounded-md hover:bg-white/10 transition-colors"
                        title="Eliminar"
                      >
                        <Trash2 className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                  {/* Sub Elements Tree Breakdown */}
                  {isExpanded && subElements.length > 0 && (
                    <div className="pl-6 pr-2 pb-2 space-y-1 border-t border-white/5 pt-1.5">
                      {subElements.map((sub, sIdx) => {
                        const Icon = sub.icon;
                        return (
                          <div
                            key={sIdx}
                            onClick={() => onSelectSection(sec)}
                            className="flex items-center justify-between px-2 py-1 rounded-lg text-[11px] text-neutral-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
                          >
                            <div className="flex items-center gap-1.5 truncate">
                              <Icon className="w-3 h-3 text-neutral-500" />
                              <span className="truncate">{sub.name}</span>
                            </div>
                            <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-white/5 border border-white/5 text-neutral-400">
                              {sub.typeTag}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Add Section Button Bottom */}
          <div className="p-3 border-t border-white/10 shrink-0">
            <button
              onClick={onOpenAddSection}
              className="w-full py-2 px-3 rounded-xl bg-white/5 hover:bg-[#00E5FF]/20 text-neutral-200 hover:text-[#00E5FF] border border-white/10 hover:border-[#00E5FF]/40 text-xs font-black flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Añadir Sección / Bloque</span>
            </button>
          </div>
        </>
      ) : (
        /* Saved Components Library Tab */
        <div className="flex-1 flex flex-col p-3 overflow-y-auto space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-white/10">
            <span className="text-[10px] font-black uppercase text-[#FF00E5] tracking-wider">
              Componentes Guardados
            </span>
            <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-white/5 text-neutral-400">
              {savedComponents.length} disponibles
            </span>
          </div>

          {savedComponents.length === 0 ? (
            <div className="p-6 text-center text-neutral-400 space-y-2 my-auto">
              <BookmarkPlus className="w-8 h-8 mx-auto text-neutral-600 mb-2" />
              <p className="text-xs font-bold text-neutral-300">Aún no tienes componentes guardados</p>
              <p className="text-[11px] text-neutral-500">
                Haz clic en el icono de marcador en cualquier sección del árbol DOM para guardarla y reutilizarla en otros sitios.
              </p>
            </div>
          ) : (
            <div className="space-y-2">
              {savedComponents.map((comp) => (
                <div
                  key={comp.id}
                  className="p-3 rounded-2xl bg-[#1A1A24] border border-white/10 hover:border-[#FF00E5]/50 transition-all group space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-sm">{SECTION_ICON_MAP[comp.sectionType] || '📦'}</span>
                      <div>
                        <h5 className="text-xs font-black text-white">{comp.name}</h5>
                        <span className="text-[9px] text-[#FF00E5] font-bold uppercase">
                          {comp.sectionType}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={(e) => handleDeleteSavedComponent(comp.id, e)}
                      className="p-1 text-neutral-500 hover:text-red-400 rounded-md hover:bg-white/10 transition-colors"
                      title="Eliminar de guardados"
                    >
                      <Trash2 className="w-3 h-3" />
                    </button>
                  </div>

                  <button
                    onClick={() => handleInsertSavedComponent(comp)}
                    className="w-full py-1.5 rounded-xl bg-white/5 hover:bg-[#FF00E5] text-neutral-300 hover:text-black text-xs font-bold transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Plus className="w-3 h-3" />
                    <span>Insertar en el Lienzo</span>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Modal to Name & Save Component */}
      {saveComponentModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="w-full max-w-sm rounded-2xl bg-[#12121A] border border-[#FF00E5]/40 p-5 space-y-4 shadow-2xl animate-fade-in">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <BookmarkPlus className="w-4 h-4 text-[#FF00E5]" />
                <h4 className="text-sm font-black text-white">Guardar como Componente</h4>
              </div>
              <button
                onClick={() => setSaveComponentModal(null)}
                className="p-1 text-neutral-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div>
              <label className="text-xs font-bold text-neutral-300 block mb-1">
                Nombre del Componente:
              </label>
              <input
                autoFocus
                type="text"
                value={componentNameInput}
                onChange={(e) => setComponentNameInput(e.target.value)}
                placeholder="Ej. Mi Hero Neón Cyber"
                className="w-full px-3 py-2 rounded-xl bg-[#1A1A24] border border-white/15 text-white text-xs font-bold focus:border-[#FF00E5] outline-none"
              />
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => setSaveComponentModal(null)}
                className="flex-1 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-neutral-300 text-xs font-bold transition-colors"
              >
                Cancelar
              </button>
              <button
                onClick={() => handleSaveComponent(saveComponentModal)}
                className="flex-1 py-2 rounded-xl bg-[#FF00E5] hover:bg-[#ff1ae8] text-black text-xs font-black transition-colors"
              >
                Guardar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
