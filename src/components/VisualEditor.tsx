import React, { useState, useEffect, useRef } from 'react';
import { SiteConfig, SectionType } from '../types';
import { WebsiteRenderer } from './WebsiteRenderer';
import { ImagePickerModal } from './ImagePickerModal';
import { ExportModal } from './ExportModal';
import { AddSectionModal } from './AddSectionModal';
import { getDefaultSectionData } from '../data/defaultSections';
import {
  ArrowLeft,
  Monitor,
  Tablet,
  Smartphone,
  Download,
  Moon,
  Sun,
  Eye,
  EyeOff,
  Check,
  Plus,
  Trash2,
  Layers,
  Palette,
  Settings2,
  Code,
  Image as ImageIcon,
  Edit3,
  Sparkles,
  GripVertical,
  Sliders,
  PanelRightClose,
  PanelRightOpen,
  PanelLeftClose,
  PanelLeftOpen,
  Coffee,
  Heart,
  ExternalLink,
  ChevronRight,
  HelpCircle,
  X,
  Type,
  FileText
} from 'lucide-react';

interface VisualEditorProps {
  site: SiteConfig;
  onSaveSite: (updatedSite: SiteConfig) => void;
  onBackToDashboard: () => void;
  onTogglePublish: (siteId: string) => void;
  onOpenDonation?: () => void;
  isDark?: boolean;
}

export const VisualEditor: React.FC<VisualEditorProps> = ({
  site: initialSite,
  onSaveSite,
  onBackToDashboard,
  onTogglePublish,
  onOpenDonation,
  isDark: initialIsDark = false
}) => {
  const [site, setSite] = useState<SiteConfig>(initialSite);
  const [history, setHistory] = useState<SiteConfig[]>([initialSite]);
  const [historyIndex, setHistoryIndex] = useState<number>(0);

  const [viewport, setViewport] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [activeTab, setActiveTab] = useState<'content' | 'style' | 'settings'>('content');
  const [activeSectionEdit, setActiveSectionEdit] = useState<SectionType | null>('hero');

  const [isLeftPanelOpen, setIsLeftPanelOpen] = useState(true);
  const [isRightPanelOpen, setIsRightPanelOpen] = useState(true);
  const [isSeoDrawerOpen, setIsSeoDrawerOpen] = useState(false);
  const [isAddSectionOpen, setIsAddSectionOpen] = useState(false);
  const [isExportOpen, setIsExportOpen] = useState(false);
  const [isPreviewModalOpen, setIsPreviewModalOpen] = useState(false);

  const [imagePickerTarget, setImagePickerTarget] = useState<{ path: string; currentUrl: string } | null>(null);
  const [saveStatus, setSaveStatus] = useState<'saved' | 'saving' | 'dirty'>('saved');
  const [isEditingSiteName, setIsEditingSiteName] = useState(false);
  const [siteNameDraft, setSiteNameDraft] = useState(initialSite.name);
  const [sectionToDelete, setSectionToDelete] = useState<SectionType | null>(null);

  // Drag & drop state for sections
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null);

  // Auto-save debounced effect (2 seconds)
  const autoSaveTimerRef = useRef<NodeJS.Timeout | null>(null);

  const updateSiteWithHistory = (newSite: SiteConfig) => {
    setSite(newSite);
    setSaveStatus('dirty');

    // Update history for undo/redo
    const newHistory = history.slice(0, historyIndex + 1);
    newHistory.push(newSite);
    if (newHistory.length > 20) newHistory.shift();
    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
  };

  useEffect(() => {
    if (saveStatus === 'dirty') {
      if (autoSaveTimerRef.current) clearTimeout(autoSaveTimerRef.current);
      setSaveStatus('saving');
      autoSaveTimerRef.current = setTimeout(() => {
        onSaveSite(site);
        setSaveStatus('saved');
      }, 2000);
    }
    return () => {
      if (autoSaveTimerRef.current) clearTimeout(autoSaveTimerRef.current);
    };
  }, [site, saveStatus, onSaveSite]);

  // Keyboard shortcuts: Ctrl+S / Cmd+S, Ctrl+E / Cmd+E, Ctrl+Z / Cmd+Z, Ctrl+Y / Cmd+Y
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
      const isCmdOrCtrl = isMac ? e.metaKey : e.ctrlKey;

      if (isCmdOrCtrl && e.key.toLowerCase() === 's') {
        e.preventDefault();
        onSaveSite(site);
        setSaveStatus('saved');
      } else if (isCmdOrCtrl && e.key.toLowerCase() === 'e') {
        e.preventDefault();
        setIsExportOpen(true);
      } else if (isCmdOrCtrl && e.key.toLowerCase() === 'z' && !e.shiftKey) {
        e.preventDefault();
        handleUndo();
      } else if (
        (isCmdOrCtrl && e.key.toLowerCase() === 'y') ||
        (isCmdOrCtrl && e.shiftKey && e.key.toLowerCase() === 'z')
      ) {
        e.preventDefault();
        handleRedo();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [site, history, historyIndex, onSaveSite]);

  const handleUndo = () => {
    if (historyIndex > 0) {
      const newIndex = historyIndex - 1;
      setHistoryIndex(newIndex);
      setSite(history[newIndex]);
      setSaveStatus('dirty');
    }
  };

  const handleRedo = () => {
    if (historyIndex < history.length - 1) {
      const newIndex = historyIndex + 1;
      setHistoryIndex(newIndex);
      setSite(history[newIndex]);
      setSaveStatus('dirty');
    }
  };

  const handleUpdateText = (path: string, value: string) => {
    const parts = path.split('.');
    if (parts.length < 2) return;
    const [sectionKey, field] = parts;
    updateSectionField(sectionKey as SectionType, field, value);
  };

  const currentOrder: SectionType[] =
    site.sectionOrder && site.sectionOrder.length > 0
      ? site.sectionOrder
      : [
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
        ];

  // Drag & Drop handlers
  const handleDragStart = (e: React.DragEvent, index: number) => {
    setDraggedIndex(index);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    if (draggedIndex === null || draggedIndex === index) return;
    setDragOverIndex(index);
  };

  const handleDrop = (e: React.DragEvent, targetIndex: number) => {
    e.preventDefault();
    if (draggedIndex === null || draggedIndex === targetIndex) {
      setDraggedIndex(null);
      setDragOverIndex(null);
      return;
    }

    const newOrder = [...currentOrder];
    const [movedItem] = newOrder.splice(draggedIndex, 1);
    newOrder.splice(targetIndex, 0, movedItem);

    updateSiteWithHistory({
      ...site,
      sectionOrder: newOrder
    });

    setDraggedIndex(null);
    setDragOverIndex(null);
  };

  const handleDragEnd = () => {
    setDraggedIndex(null);
    setDragOverIndex(null);
  };

  const handleAddSection = (type: SectionType) => {
    const existingData = site.sections[type];
    const defaultData = getDefaultSectionData(type);

    const updatedSections = {
      ...site.sections,
      [type]: existingData ? { ...(existingData as any), enabled: true } : defaultData
    };

    let insertIndex = currentOrder.indexOf('footer');
    if (insertIndex === -1) insertIndex = currentOrder.indexOf('ctaFinal');
    if (insertIndex === -1) insertIndex = currentOrder.length;

    const newOrder = [...currentOrder];
    if (!newOrder.includes(type)) {
      newOrder.splice(insertIndex, 0, type);
    }

    updateSiteWithHistory({
      ...site,
      sections: updatedSections,
      sectionOrder: newOrder
    });

    setActiveSectionEdit(type);
  };

  const handleRemoveSection = (sectionKey: SectionType) => {
    const newOrder = currentOrder.filter((key) => key !== sectionKey);
    const updatedSections = { ...site.sections };
    if (updatedSections[sectionKey]) {
      (updatedSections[sectionKey] as any).enabled = false;
    }

    updateSiteWithHistory({
      ...site,
      sections: updatedSections,
      sectionOrder: newOrder
    });

    if (activeSectionEdit === sectionKey) {
      setActiveSectionEdit(null);
    }
  };

  const toggleSectionEnabled = (sectionKey: SectionType) => {
    const sec = site.sections[sectionKey] as any;
    if (!sec) return;
    const updatedSections = {
      ...site.sections,
      [sectionKey]: {
        ...sec,
        enabled: sec.enabled === false ? true : false
      }
    };
    updateSiteWithHistory({ ...site, sections: updatedSections });
  };

  const updateSectionField = (sectionKey: SectionType, field: string, value: any) => {
    const sec = (site.sections[sectionKey] as any) || {};
    const updatedSections = {
      ...site.sections,
      [sectionKey]: {
        ...sec,
        [field]: value
      }
    };
    updateSiteWithHistory({ ...site, sections: updatedSections });
  };

  const neonPalettes = [
    { name: 'Cian Neón', hex: '#00E5FF' },
    { name: 'Magenta Neón', hex: '#FF00E5' },
    { name: 'Púrpura Cyber', hex: '#B900FF' },
    { name: 'Verde Neón', hex: '#00FF88' },
    { name: 'Azul Apple', hex: '#0071E3' }
  ];

  const sectionMeta: Record<SectionType, { label: string; icon: string }> = {
    navbar: { label: 'Barra de Navegación', icon: '🧭' },
    hero: { label: 'Cabecera Principal (Hero)', icon: '✨' },
    logos: { label: 'Logos de Confianza', icon: '💎' },
    bentoFeatures: { label: 'Rejilla Bento (Features)', icon: '🍱' },
    productHighlight: { label: 'Producto Destacado', icon: '📱' },
    stats: { label: 'Métricas & Estadísticas', icon: '📈' },
    testimonials: { label: 'Testimonios & Clientes', icon: '💬' },
    pricing: { label: 'Tabla de Precios', icon: '🏷️' },
    faq: { label: 'Preguntas Frecuentes', icon: '❓' },
    ctaFinal: { label: 'Llamada a la Acción Final', icon: '🚀' },
    footer: { label: 'Pie de Página', icon: '📄' },
    map: { label: 'Ubicación & Mapa', icon: '📍' },
    slider: { label: 'Carrusel de Diapositivas', icon: '🎞️' },
    gallery: { label: 'Galería Lightbox', icon: '🖼️' },
    tabs: { label: 'Pestañas Interactivas', icon: '📑' },
    marquee: { label: 'Marquesina Dinámica', icon: '⚡' },
    countdown: { label: 'Cuenta Regresiva', icon: '⏳' },
    leadForm: { label: 'Formulario Multi-Paso', icon: '📝' },
    timeline: { label: 'Hoja de Ruta (Roadmap)', icon: '🗺️' }
  };

  const handleSaveSiteName = () => {
    if (siteNameDraft.trim()) {
      updateSiteWithHistory({
        ...site,
        name: siteNameDraft.trim()
      });
    }
    setIsEditingSiteName(false);
  };

  return (
    <div className={`h-screen flex flex-col font-sans overflow-hidden ${initialIsDark ? 'bg-[#0A0A0F] text-white' : 'bg-[#FAFAFC] text-[#0F172A]'}`}>
      {/* ========================================================================= */}
      {/* 1. TOP BAR (Height 64px) */}
      {/* ========================================================================= */}
      <header
        className={`h-16 shrink-0 border-b px-4 sm:px-6 flex items-center justify-between z-30 transition-colors ${
          initialIsDark
            ? 'bg-[#12121A] border-white/10 text-white'
            : 'bg-white border-[#E5E7EB] shadow-[0_1px_3px_rgba(0,0,0,0.04)] text-[#0F172A]'
        }`}
      >
        {/* Left: Back button & editable site name */}
        <div className="flex items-center gap-3 min-w-0">
          <button
            onClick={onBackToDashboard}
            className="p-2 rounded-lg hover:bg-[#F0F0F3] dark:hover:bg-white/5 text-[#64748B] dark:text-neutral-400 hover:text-[#0F172A] dark:hover:text-white transition-colors cursor-pointer shrink-0"
            title="Volver a Mis Sitios"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>

          {isEditingSiteName ? (
            <input
              type="text"
              autoFocus
              value={siteNameDraft}
              onChange={(e) => setSiteNameDraft(e.target.value)}
              onBlur={handleSaveSiteName}
              onKeyDown={(e) => e.key === 'Enter' && handleSaveSiteName()}
              className="px-2.5 py-1 text-sm font-bold rounded-lg border-2 border-[#00E5FF] focus:outline-none bg-white dark:bg-white/10 text-[#0F172A] dark:text-white shadow-[0_0_10px_rgba(0,229,255,0.3)]"
            />
          ) : (
            <div
              onDoubleClick={() => setIsEditingSiteName(true)}
              className="flex items-center gap-1.5 cursor-pointer group py-1 px-2 rounded-lg hover:bg-[#F0F0F3] dark:hover:bg-white/5"
              title="Doble clic para editar nombre"
            >
              <span className="font-extrabold text-sm tracking-tight truncate max-w-[140px] sm:max-w-[220px]">
                {site.name}
              </span>
              <Edit3 className="w-3 h-3 text-[#64748B] group-hover:text-[#00E5FF] opacity-0 group-hover:opacity-100 transition-all shrink-0" />
            </div>
          )}
        </div>

        {/* Center: Breadcrumb */}
        <div className="hidden lg:flex items-center gap-1.5 text-xs text-[#64748B] dark:text-neutral-500 font-medium">
          <span className="hover:text-[#0F172A] dark:hover:text-neutral-300 cursor-pointer" onClick={onBackToDashboard}>Inicio</span>
          <span>/</span>
          <span className="hover:text-[#0F172A] dark:hover:text-neutral-300 cursor-pointer" onClick={onBackToDashboard}>Mis sitios</span>
          <span>/</span>
          <span className="text-[#0F172A] dark:text-white font-bold truncate max-w-[150px]">{site.name}</span>
        </div>

        {/* Right: Viewport switcher, Save status, Preview, Settings, Export */}
        <div className="flex items-center gap-2.5">
          {/* Viewport switchers */}
          <div className="hidden sm:flex items-center p-1 rounded-lg bg-[#F0F0F3] dark:bg-white/5 border border-[#E5E7EB] dark:border-white/10">
            <button
              onClick={() => setViewport('desktop')}
              className={`p-1.5 rounded-md transition-all cursor-pointer ${
                viewport === 'desktop'
                  ? 'bg-white dark:bg-white/20 text-[#0F172A] dark:text-white shadow-xs font-bold'
                  : 'text-[#64748B] dark:text-neutral-400 hover:text-[#0F172A]'
              }`}
              title="Escritorio (1440px)"
            >
              <Monitor className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setViewport('tablet')}
              className={`p-1.5 rounded-md transition-all cursor-pointer ${
                viewport === 'tablet'
                  ? 'bg-white dark:bg-white/20 text-[#0F172A] dark:text-white shadow-xs font-bold'
                  : 'text-[#64748B] dark:text-neutral-400 hover:text-[#0F172A]'
              }`}
              title="Tableta (768px)"
            >
              <Tablet className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setViewport('mobile')}
              className={`p-1.5 rounded-md transition-all cursor-pointer ${
                viewport === 'mobile'
                  ? 'bg-white dark:bg-white/20 text-[#0F172A] dark:text-white shadow-xs font-bold'
                  : 'text-[#64748B] dark:text-neutral-400 hover:text-[#0F172A]'
              }`}
              title="Móvil (375px)"
            >
              <Smartphone className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Save status badge */}
          <div className="hidden md:flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-semibold text-[#64748B] dark:text-neutral-400">
            <span
              className={`w-2 h-2 rounded-full ${
                saveStatus === 'saved'
                  ? 'bg-[#00FF88] shadow-[0_0_8px_rgba(0,255,136,0.6)]'
                  : 'bg-amber-400 animate-ping'
              }`}
            />
            <span>{saveStatus === 'saved' ? 'Todos los cambios guardados' : 'Guardando cambios…'}</span>
          </div>

          {/* Vista previa modal button */}
          <button
            onClick={() => setIsPreviewModalOpen(true)}
            className="px-3 py-1.5 rounded-lg border border-[#D1D5DB] dark:border-white/10 hover:bg-[#F0F0F3] dark:hover:bg-white/5 text-xs font-bold text-[#0F172A] dark:text-neutral-300 transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <Eye className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Vista previa</span>
          </button>

          {/* Configuración (SEO & Favicon) */}
          <button
            onClick={() => setIsSeoDrawerOpen(true)}
            className="p-2 rounded-lg border border-[#D1D5DB] dark:border-white/10 hover:bg-[#F0F0F3] dark:hover:bg-white/5 text-[#0F172A] dark:text-neutral-300 transition-colors cursor-pointer"
            title="Configuración SEO y Favicon"
          >
            <Settings2 className="w-4 h-4" />
          </button>

          {/* Exportar sitio button */}
          <button
            onClick={() => setIsExportOpen(true)}
            className="px-4 py-2 rounded-lg bg-[#0F172A] hover:bg-[#1E293B] text-white text-xs font-bold shadow-xs hover:shadow-md transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <Download className="w-3.5 h-3.5 text-[#00E5FF]" />
            <span>Exportar sitio</span>
          </button>
        </div>
      </header>

      {/* ========================================================================= */}
      {/* 2. THREE-PANE BODY */}
      {/* ========================================================================= */}
      <div className="flex-1 flex overflow-hidden relative">
        {/* ======================================================================= */}
        {/* 2.1 LEFT PANEL: SECCIONES (Width 280px) */}
        {/* ======================================================================= */}
        {isLeftPanelOpen ? (
          <aside
            className={`w-[280px] shrink-0 border-r flex flex-col justify-between z-20 transition-all ${
              initialIsDark ? 'bg-[#12121A] border-white/10' : 'bg-white border-[#E5E7EB]'
            }`}
          >
            {/* Header */}
            <div className="p-4 border-b border-inherit flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#00E5FF]" />
                <span className="font-extrabold text-xs uppercase tracking-wider text-[#0F172A] dark:text-white">
                  Secciones
                </span>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setIsAddSectionOpen(true)}
                  className="px-2.5 py-1 rounded-lg bg-[#00E5FF] hover:bg-[#00b4d8] text-black text-xs font-bold transition-all flex items-center gap-1 cursor-pointer"
                  title="Añadir nueva sección"
                >
                  <Plus className="w-3 h-3" />
                  <span>Añadir</span>
                </button>
                <button
                  onClick={() => setIsLeftPanelOpen(false)}
                  className="p-1 text-[#64748B] hover:text-[#0F172A] dark:hover:text-white rounded-md cursor-pointer"
                  title="Contraer panel"
                >
                  <PanelLeftClose className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Draggable Section List */}
            <div className="flex-1 overflow-y-auto p-3 space-y-1.5">
              {currentOrder.map((sectionKey, index) => {
                const meta = sectionMeta[sectionKey] || { label: sectionKey, icon: '📦' };
                const secData = site.sections[sectionKey] as any;
                const isEnabled = secData ? secData.enabled !== false : true;
                const isSelected = activeSectionEdit === sectionKey;

                return (
                  <div
                    key={sectionKey}
                    draggable
                    onDragStart={(e) => handleDragStart(e, index)}
                    onDragOver={(e) => handleDragOver(e, index)}
                    onDrop={(e) => handleDrop(e, index)}
                    onDragEnd={handleDragEnd}
                    onClick={() => setActiveSectionEdit(sectionKey)}
                    className={`p-2.5 rounded-lg border flex items-center justify-between gap-2 cursor-pointer transition-all ${
                      dragOverIndex === index
                        ? 'border-[#00E5FF] ring-2 ring-[#00E5FF] bg-[#00E5FF]/10'
                        : isSelected
                        ? 'border-[#00E5FF] ring-2 ring-[#00E5FF]/20 bg-[#FAFAFC] dark:bg-white/10 shadow-xs'
                        : initialIsDark
                        ? 'border-white/5 hover:border-white/20 bg-white/[0.02]'
                        : 'border-[#E5E7EB] hover:border-[#D1D5DB] bg-white hover:bg-[#FAFAFC]'
                    } ${!isEnabled ? 'opacity-50' : ''}`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="cursor-grab text-[#94A3B8] hover:text-[#0F172A] dark:hover:text-white">
                        <GripVertical className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-sm">{meta.icon}</span>
                      <span className="text-xs font-bold text-[#0F172A] dark:text-white truncate">
                        {meta.label}
                      </span>
                    </div>

                    <div className="flex items-center gap-1 shrink-0">
                      {/* Visibility Toggle */}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleSectionEnabled(sectionKey);
                        }}
                        className="p-1 text-[#64748B] hover:text-[#0F172A] dark:hover:text-white rounded-md cursor-pointer"
                        title={isEnabled ? 'Ocultar sección' : 'Mostrar sección'}
                      >
                        {isEnabled ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5 text-rose-500" />}
                      </button>

                      {/* Delete Section */}
                      {sectionKey !== 'navbar' && sectionKey !== 'footer' && (
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSectionToDelete(sectionKey);
                          }}
                          className="p-1 text-[#64748B] hover:text-rose-600 rounded-md cursor-pointer"
                          title="Eliminar sección"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom helper */}
            <div className="p-3 border-t border-inherit text-[11px] text-[#64748B] dark:text-neutral-500 text-center font-medium">
              Arrastra para reorganizar el orden
            </div>
          </aside>
        ) : (
          <button
            onClick={() => setIsLeftPanelOpen(true)}
            className="absolute left-2 top-2 z-20 p-2 rounded-lg bg-white dark:bg-[#12121A] border border-[#E5E7EB] shadow-md text-[#0F172A] dark:text-white hover:border-[#00E5FF] cursor-pointer"
            title="Expandir panel de secciones"
          >
            <PanelLeftOpen className="w-4 h-4" />
          </button>
        )}

        {/* ======================================================================= */}
        {/* 2.2 CENTRAL CANVAS (Device Simulator) */}
        {/* ======================================================================= */}
        <div className={`flex-1 overflow-y-auto p-4 sm:p-6 flex items-start justify-center transition-colors ${initialIsDark ? 'bg-[#09090F]' : 'bg-[#F5F5F7]'}`}>
          <div
            className={`transition-all duration-300 shadow-[0_4px_24px_rgba(0,0,0,0.06)] rounded-xl overflow-hidden border border-[#E5E7EB] dark:border-white/10 bg-white min-h-[90vh] ${
              viewport === 'desktop'
                ? 'w-full max-w-5xl'
                : viewport === 'tablet'
                ? 'w-[768px]'
                : 'w-[375px]'
            }`}
          >
            <WebsiteRenderer
              site={site}
              isEditable={true}
              onUpdateText={handleUpdateText}
            />
          </div>
        </div>

        {/* ======================================================================= */}
        {/* 2.3 RIGHT PANEL: INSPECTOR (Width 320px) */}
        {/* ======================================================================= */}
        {isRightPanelOpen ? (
          <aside
            className={`w-[320px] shrink-0 border-l flex flex-col justify-between z-20 transition-all ${
              initialIsDark ? 'bg-[#12121A] border-white/10' : 'bg-white border-[#E5E7EB]'
            }`}
          >
            {/* Header & Tabs */}
            <div>
              <div className="p-4 border-b border-inherit flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-[#00E5FF]" />
                  <span className="font-extrabold text-xs uppercase tracking-wider text-[#0F172A] dark:text-white">
                    Inspector
                  </span>
                </div>
                <button
                  onClick={() => setIsRightPanelOpen(false)}
                  className="p-1 text-[#64748B] hover:text-[#0F172A] dark:hover:text-white rounded-md cursor-pointer"
                  title="Contraer inspector"
                >
                  <PanelRightClose className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Tabs */}
              <div className="grid grid-cols-3 border-b border-inherit text-xs font-bold">
                <button
                  onClick={() => setActiveTab('content')}
                  className={`py-2.5 text-center transition-colors border-b-2 cursor-pointer ${
                    activeTab === 'content'
                      ? 'border-[#00E5FF] text-[#00E5FF]'
                      : 'border-transparent text-[#64748B] hover:text-[#0F172A] dark:text-neutral-400 dark:hover:text-white'
                  }`}
                >
                  Contenido
                </button>
                <button
                  onClick={() => setActiveTab('style')}
                  className={`py-2.5 text-center transition-colors border-b-2 cursor-pointer ${
                    activeTab === 'style'
                      ? 'border-[#00E5FF] text-[#00E5FF]'
                      : 'border-transparent text-[#64748B] hover:text-[#0F172A] dark:text-neutral-400 dark:hover:text-white'
                  }`}
                >
                  Estilo
                </button>
                <button
                  onClick={() => setActiveTab('settings')}
                  className={`py-2.5 text-center transition-colors border-b-2 cursor-pointer ${
                    activeTab === 'settings'
                      ? 'border-[#00E5FF] text-[#00E5FF]'
                      : 'border-transparent text-[#64748B] hover:text-[#0F172A] dark:text-neutral-400 dark:hover:text-white'
                  }`}
                >
                  Ajustes
                </button>
              </div>
            </div>

            {/* Inspector Body */}
            <div className="flex-1 overflow-y-auto p-4 space-y-5">
              {/* TAB 1: CONTENIDO */}
              {activeTab === 'content' && activeSectionEdit && (
                <div className="space-y-4 text-xs">
                  <div className="flex items-center justify-between pb-2 border-b border-inherit">
                    <span className="font-extrabold text-[#0F172A] dark:text-white flex items-center gap-1.5">
                      <span>{sectionMeta[activeSectionEdit]?.icon}</span>
                      <span>{sectionMeta[activeSectionEdit]?.label}</span>
                    </span>
                  </div>

                  {/* Section specific fields */}
                  {activeSectionEdit === 'hero' && (
                    <div className="space-y-3">
                      <div>
                        <label className="font-bold text-[#0F172A] dark:text-neutral-300 block mb-1">Título:</label>
                        <input
                          type="text"
                          value={site.sections.hero.title}
                          onChange={(e) => updateSectionField('hero', 'title', e.target.value)}
                          className="w-full px-3 py-1.5 rounded-lg border border-[#D1D5DB] dark:border-white/10 bg-white dark:bg-white/5 text-[#0F172A] dark:text-white font-medium focus:border-[#00E5FF] focus:ring-2 focus:ring-[#00E5FF]/10 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="font-bold text-[#0F172A] dark:text-neutral-300 block mb-1">Subtítulo:</label>
                        <textarea
                          rows={2}
                          value={site.sections.hero.subtitle}
                          onChange={(e) => updateSectionField('hero', 'subtitle', e.target.value)}
                          className="w-full px-3 py-1.5 rounded-lg border border-[#D1D5DB] dark:border-white/10 bg-white dark:bg-white/5 text-[#0F172A] dark:text-white font-medium focus:border-[#00E5FF] focus:ring-2 focus:ring-[#00E5FF]/10 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="font-bold text-[#0F172A] dark:text-neutral-300 block mb-1">Texto botón primario:</label>
                        <input
                          type="text"
                          value={site.sections.hero.primaryCta.text}
                          onChange={(e) =>
                            updateSectionField('hero', 'primaryCta', {
                              ...site.sections.hero.primaryCta,
                              text: e.target.value
                            })
                          }
                          className="w-full px-3 py-1.5 rounded-lg border border-[#D1D5DB] dark:border-white/10 bg-white dark:bg-white/5 text-[#0F172A] dark:text-white font-medium focus:border-[#00E5FF] focus:ring-2 focus:ring-[#00E5FF]/10 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="font-bold text-[#0F172A] dark:text-neutral-300 block mb-1">Imagen de fondo / mockup:</label>
                        <div className="flex items-center gap-2">
                          <input
                            type="text"
                            value={site.sections.hero.imageUrl}
                            onChange={(e) => updateSectionField('hero', 'imageUrl', e.target.value)}
                            className="flex-1 px-3 py-1.5 rounded-lg border border-[#D1D5DB] dark:border-white/10 bg-white dark:bg-white/5 text-[#0F172A] dark:text-white font-medium focus:border-[#00E5FF] focus:ring-2 focus:ring-[#00E5FF]/10 focus:outline-none text-[11px]"
                          />
                          <button
                            type="button"
                            onClick={() =>
                              setImagePickerTarget({
                                path: 'hero.imageUrl',
                                currentUrl: site.sections.hero.imageUrl
                              })
                            }
                            className="p-2 rounded-lg bg-[#F0F0F3] dark:bg-white/10 hover:bg-[#00E5FF] hover:text-black transition-colors cursor-pointer border border-[#E5E7EB]"
                            title="Seleccionar imagen"
                          >
                            <ImageIcon className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Other sections generic edit */}
                  {activeSectionEdit !== 'hero' && (
                    <div className="space-y-3">
                      <p className="text-[#64748B] dark:text-neutral-400 leading-relaxed font-medium">
                        Haz doble clic directamente en el texto del lienzo para editarlo en vivo, o añade elementos desde la sección correspondiente.
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* TAB 2: ESTILO */}
              {activeTab === 'style' && (
                <div className="space-y-5 text-xs">
                  {/* Tema del sitio */}
                  <div>
                    <label className="font-bold text-[#0F172A] dark:text-neutral-300 block mb-2">
                      Tema visual del sitio:
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => updateSiteWithHistory({ ...site, theme: 'light' })}
                        className={`p-2.5 rounded-lg border text-center font-bold flex items-center justify-center gap-1.5 cursor-pointer transition-all ${
                          site.theme === 'light'
                            ? 'border-[#00E5FF] bg-white text-[#0F172A] dark:text-white ring-2 ring-[#00E5FF]/20 shadow-xs'
                            : 'border-[#E5E7EB] bg-[#FAFAFC] dark:border-white/10 text-[#64748B] hover:border-[#D1D5DB]'
                        }`}
                      >
                        <Sun className="w-3.5 h-3.5" />
                        <span>Claro Neón</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => updateSiteWithHistory({ ...site, theme: 'dark' })}
                        className={`p-2.5 rounded-lg border text-center font-bold flex items-center justify-center gap-1.5 cursor-pointer transition-all ${
                          site.theme === 'dark'
                            ? 'border-[#00E5FF] bg-white dark:bg-white/10 text-[#0F172A] dark:text-white ring-2 ring-[#00E5FF]/20 shadow-xs'
                            : 'border-[#E5E7EB] bg-[#FAFAFC] dark:border-white/10 text-[#64748B] hover:border-[#D1D5DB]'
                        }`}
                      >
                        <Moon className="w-3.5 h-3.5" />
                        <span>Oscuro Cyber</span>
                      </button>
                    </div>
                  </div>

                  {/* Color de acento */}
                  <div>
                    <label className="font-bold text-[#0F172A] dark:text-neutral-300 block mb-2">
                      Color de acento neón:
                    </label>
                    <div className="grid grid-cols-5 gap-2">
                      {neonPalettes.map((p) => (
                        <button
                          key={p.hex}
                          type="button"
                          onClick={() => updateSiteWithHistory({ ...site, accentColor: p.hex })}
                          className={`p-2 rounded-lg border flex flex-col items-center gap-1 cursor-pointer transition-all ${
                            site.accentColor === p.hex
                              ? 'border-[#00E5FF] ring-2 ring-[#00E5FF]/20 bg-white dark:bg-white/10 shadow-xs'
                              : 'border-[#E5E7EB] bg-[#FAFAFC] dark:border-white/10 hover:border-[#D1D5DB]'
                          }`}
                          title={p.name}
                        >
                          <div className="w-4 h-4 rounded-full shadow-xs" style={{ backgroundColor: p.hex }} />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Radio de bordes */}
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label className="font-bold text-[#0F172A] dark:text-neutral-300">Radio de esquinas:</label>
                      <span className="font-mono text-[#64748B] font-bold">{site.borderRadius ?? 20}px</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="32"
                      step="4"
                      value={site.borderRadius ?? 20}
                      onChange={(e) =>
                        updateSiteWithHistory({
                          ...site,
                          borderRadius: Number(e.target.value)
                        })
                      }
                      className="w-full accent-[#00E5FF] cursor-pointer"
                    />
                  </div>
                </div>
              )}

              {/* TAB 3: AJUSTES */}
              {activeTab === 'settings' && (
                <div className="space-y-4 text-xs">
                  <div>
                    <h4 className="font-bold text-[#0F172A] dark:text-white mb-1">Animaciones suaves</h4>
                    <p className="text-[#64748B] dark:text-neutral-400 leading-relaxed font-medium">
                      El código exportado incluye efectos reveal automáticos al hacer scroll con CSS nativo optimizado.
                    </p>
                  </div>

                  <div className="pt-2 border-t border-inherit">
                    <button
                      onClick={() => setIsSeoDrawerOpen(true)}
                      className="w-full py-2.5 rounded-lg border border-[#E5E7EB] dark:border-white/10 hover:border-[#00E5FF] text-left px-3.5 flex items-center justify-between text-[#0F172A] dark:text-white font-bold bg-white dark:bg-white/5 hover:bg-[#FAFAFC] transition-colors cursor-pointer"
                    >
                      <span>Configuración SEO global</span>
                      <ChevronRight className="w-3.5 h-3.5 text-[#64748B]" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </aside>
        ) : (
          <button
            onClick={() => setIsRightPanelOpen(true)}
            className="absolute right-2 top-2 z-20 p-2 rounded-lg bg-white dark:bg-[#12121A] border border-[#E5E7EB] shadow-md text-[#0F172A] dark:text-white hover:border-[#00E5FF] cursor-pointer"
            title="Expandir inspector"
          >
            <PanelRightOpen className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* ========================================================================= */}
      {/* 3. SLIDE-OVER DRAWER: SEO & FAVICON SETTINGS */}
      {/* ========================================================================= */}
      {isSeoDrawerOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-xs animate-fade-in">
          <div
            className={`w-full max-w-md h-full border-l shadow-2xl flex flex-col justify-between ${
              initialIsDark ? 'bg-[#12121A] border-white/10 text-white' : 'bg-white border-[#E5E7EB] text-[#0F172A]'
            }`}
          >
            <div className="p-6 border-b border-inherit flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Settings2 className="w-5 h-5 text-[#00E5FF]" />
                <h3 className="font-extrabold text-base">Configuración SEO & Favicon</h3>
              </div>
              <button
                onClick={() => setIsSeoDrawerOpen(false)}
                className="p-1.5 text-[#64748B] hover:text-[#0F172A] dark:hover:text-white rounded-md cursor-pointer hover:bg-[#F0F0F3]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-4 overflow-y-auto flex-1 text-xs">
              <div>
                <label className="font-bold text-[#0F172A] dark:text-neutral-300 block mb-1">Título de la pestaña (Meta Title):</label>
                <input
                  type="text"
                  value={site.seo.title}
                  onChange={(e) =>
                    updateSiteWithHistory({
                      ...site,
                      seo: { ...site.seo, title: e.target.value }
                    })
                  }
                  className="w-full px-3 py-2 rounded-lg border border-[#D1D5DB] dark:border-white/10 bg-white dark:bg-white/5 font-medium focus:border-[#00E5FF] focus:ring-2 focus:ring-[#00E5FF]/10 focus:outline-none"
                />
              </div>

              <div>
                <label className="font-bold text-[#0F172A] dark:text-neutral-300 block mb-1">Descripción para buscadores (Meta Description):</label>
                <textarea
                  rows={3}
                  value={site.seo.description}
                  onChange={(e) =>
                    updateSiteWithHistory({
                      ...site,
                      seo: { ...site.seo, description: e.target.value }
                    })
                  }
                  className="w-full px-3 py-2 rounded-lg border border-[#D1D5DB] dark:border-white/10 bg-white dark:bg-white/5 font-medium focus:border-[#00E5FF] focus:ring-2 focus:ring-[#00E5FF]/10 focus:outline-none"
                />
              </div>

              <div>
                <label className="font-bold text-[#0F172A] dark:text-neutral-300 block mb-1">Palabras clave (Keywords):</label>
                <input
                  type="text"
                  value={site.seo.keywords || ''}
                  onChange={(e) =>
                    updateSiteWithHistory({
                      ...site,
                      seo: { ...site.seo, keywords: e.target.value }
                    })
                  }
                  placeholder="ej. saas, tecnología, moderno"
                  className="w-full px-3 py-2 rounded-lg border border-[#D1D5DB] dark:border-white/10 bg-white dark:bg-white/5 font-medium focus:border-[#00E5FF] focus:ring-2 focus:ring-[#00E5FF]/10 focus:outline-none"
                />
              </div>
            </div>

            <div className="p-4 border-t border-inherit flex justify-end bg-[#FAFAFC] dark:bg-white/[0.02]">
              <button
                onClick={() => setIsSeoDrawerOpen(false)}
                className="px-5 py-2.5 rounded-lg bg-[#0F172A] hover:bg-[#1E293B] text-white text-xs font-bold shadow-xs cursor-pointer transition-colors"
              >
                Guardar cambios
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 4. MODAL: PREVIEW COMPLETA */}
      {/* ========================================================================= */}
      {isPreviewModalOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-black">
          <div className="h-14 bg-[#12121A] border-b border-white/10 px-6 flex items-center justify-between shrink-0">
            <button
              onClick={() => setIsPreviewModalOpen(false)}
              className="px-3 py-1.5 rounded-lg bg-white/10 text-white text-xs font-semibold flex items-center gap-1.5 cursor-pointer hover:bg-white/20 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 text-[#00E5FF]" />
              <span>Cerrar vista previa</span>
            </button>
            <span className="text-xs font-bold text-neutral-400">Vista previa interactiva</span>
            <button
              onClick={() => {
                setIsPreviewModalOpen(false);
                setIsExportOpen(true);
              }}
              className="px-4 py-1.5 rounded-lg bg-[#00E5FF] hover:bg-[#00b4d8] text-black text-xs font-extrabold cursor-pointer transition-colors"
            >
              Exportar
            </button>
          </div>
          <div className="flex-1 overflow-y-auto bg-white">
            <WebsiteRenderer site={site} />
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 5. MODAL: ELIMINAR SECCIÓN */}
      {/* ========================================================================= */}
      {sectionToDelete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
          <div
            className={`rounded-2xl border max-w-sm w-full p-6 space-y-4 shadow-2xl ${
              initialIsDark ? 'bg-[#12121A] border-white/10 text-white' : 'bg-white border-[#E5E7EB] text-[#0F172A]'
            }`}
          >
            <div className="w-10 h-10 rounded-xl bg-rose-500/15 text-rose-500 flex items-center justify-center mx-auto">
              <Trash2 className="w-5 h-5" />
            </div>
            <div className="text-center space-y-1">
              <h3 className="font-extrabold text-base">¿Eliminar sección?</h3>
              <p className="text-xs text-[#64748B] dark:text-neutral-400">
                Se quitará la sección <strong>{sectionMeta[sectionToDelete]?.label}</strong> del sitio.
              </p>
            </div>
            <div className="flex items-center gap-2 pt-2">
              <button
                onClick={() => setSectionToDelete(null)}
                className="flex-1 py-2.5 rounded-lg text-xs font-semibold border border-[#D1D5DB] dark:border-white/10 hover:bg-[#F0F0F3] dark:hover:bg-white/5 cursor-pointer transition-colors"
              >
                Cancelar
              </button>
              <button
                onClick={() => {
                  handleRemoveSection(sectionToDelete);
                  setSectionToDelete(null);
                }}
                className="flex-1 py-2.5 rounded-lg text-xs font-bold bg-rose-600 hover:bg-rose-700 text-white shadow-xs cursor-pointer transition-colors"
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 6. MODALS: ADD SECTION, IMAGE PICKER, EXPORT */}
      {/* ========================================================================= */}
      <AddSectionModal
        isOpen={isAddSectionOpen}
        onClose={() => setIsAddSectionOpen(false)}
        onAddSection={handleAddSection}
        existingSections={currentOrder}
        isDark={initialIsDark}
      />

      <ImagePickerModal
        isOpen={!!imagePickerTarget}
        onClose={() => setImagePickerTarget(null)}
        onSelectImage={(url) => {
          if (imagePickerTarget) {
            handleUpdateText(imagePickerTarget.path, url);
          }
          setImagePickerTarget(null);
        }}
        currentUrl={imagePickerTarget?.currentUrl}
        isDark={initialIsDark}
      />

      <ExportModal
        isOpen={isExportOpen}
        onClose={() => setIsExportOpen(false)}
        site={site}
        isDark={initialIsDark}
        onOpenDonation={onOpenDonation}
      />
    </div>
  );
};
