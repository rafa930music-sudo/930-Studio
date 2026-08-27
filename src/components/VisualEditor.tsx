import React, { useState, useEffect, useRef } from 'react';
import { SiteConfig, SectionType, SavedComponent } from '../types';
import { WebsiteRenderer } from './WebsiteRenderer';
import { ImagePickerModal } from './ImagePickerModal';
import { ExportModal } from './ExportModal';
import { AddSectionModal } from './AddSectionModal';
import { DonationModal } from './DonationModal';
import { KeyboardShortcutsModal } from './KeyboardShortcutsModal';
import { HierarchyTree } from './editor/HierarchyTree';
import { ContentInspector } from './editor/ContentInspector';
import { StyleInspector } from './editor/StyleInspector';
import { SettingsInspector } from './editor/SettingsInspector';
import { CanvasContextMenu } from './editor/CanvasContextMenu';
import { InlineTextToolbar } from './editor/InlineTextToolbar';
import { ToastContainer, ToastMessage } from './Toast';
import { getDefaultSectionData } from '../data/defaultSections';
import {
  ArrowLeft,
  Monitor,
  Tablet,
  Smartphone,
  Download,
  Eye,
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
  Sliders,
  PanelRightClose,
  PanelRightOpen,
  PanelLeftClose,
  PanelLeftOpen,
  Heart,
  ExternalLink,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  Navigation,
  ArrowUp,
  ArrowDown,
  HelpCircle,
  X,
  Type,
  FileText,
  Undo2,
  Redo2,
  ZoomIn,
  ZoomOut,
  Maximize,
  RotateCcw,
  Zap,
  Save,
  Tv,
  Bookmark,
  AlertTriangle
} from 'lucide-react';

const SECTION_ICONS: Record<string, string> = {
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

const SECTION_LABELS: Record<string, string> = {
  navbar: 'Barra de Navegación',
  hero: 'Encabezado Hero',
  logos: 'Logotipos de Confianza',
  bentoFeatures: 'Características Bento',
  productHighlight: 'Destacado de Producto',
  stats: 'Métricas & Estadísticas',
  testimonials: 'Testimonios & Clientes',
  pricing: 'Tabla de Precios',
  faq: 'Preguntas Frecuentes',
  timeline: 'Línea de Tiempo / Proceso',
  gallery: 'Galería Visual',
  slider: 'Carrusel de Diapositivas',
  tabs: 'Pestañas de Contenido',
  marquee: 'Marquesina Dinámica',
  countdown: 'Cuenta Regresiva',
  leadForm: 'Formulario de Contacto',
  map: 'Mapa de Ubicación',
  ctaFinal: 'Llamada a la Acción (CTA)',
  footer: 'Pie de Página',
  custom: 'Sección Personalizada'
};

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
  isDark: initialIsDark = true
}) => {
  const [site, setSite] = useState<SiteConfig>(initialSite);
  const [history, setHistory] = useState<SiteConfig[]>([initialSite]);
  const [historyIndex, setHistoryIndex] = useState<number>(0);

  // Viewport & Zoom
  const [viewport, setViewport] = useState<'mobile' | 'mobile-lg' | 'tablet' | 'laptop' | 'desktop' | 'ultrawide'>('desktop');
  const [zoomScale, setZoomScale] = useState<number>(100);

  // Panels & Tabs
  const [leftTab, setLeftTab] = useState<'hierarchy' | 'add'>('hierarchy');
  const [inspectorTab, setInspectorTab] = useState<'content' | 'style' | 'settings'>('content');
  const [activeSection, setActiveSection] = useState<SectionType | null>('hero');

  const [isLeftPanelOpen, setIsLeftPanelOpen] = useState(true);
  const [isRightPanelOpen, setIsRightPanelOpen] = useState(true);

  const [isPresentationMode, setIsPresentationMode] = useState(false);
  const [sectionToDelete, setSectionToDelete] = useState<SectionType | null>(null);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const addToast = (type: 'success' | 'error' | 'info', title: string, description?: string) => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, type, title, description }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3800);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // Scroll & Selection Indicator References
  const canvasScrollRef = useRef<HTMLDivElement>(null);
  const [highlightedSection, setHighlightedSection] = useState<SectionType | null>(null);
  const highlightTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Modals
  const [isAddSectionOpen, setIsAddSectionOpen] = useState(false);
  const [isExportOpen, setIsExportOpen] = useState(false);
  const [isPreviewModalOpen, setIsPreviewModalOpen] = useState(false);
  const [isShortcutsOpen, setIsShortcutsOpen] = useState(false);
  const [isDonationOpen, setIsDonationOpen] = useState(false);
  const [imagePickerTarget, setImagePickerTarget] = useState<{ path: string; currentUrl: string } | null>(null);

  // Context Menu & Inline Toolbar
  const [contextMenu, setContextMenu] = useState<{ x: number; y: number; section: SectionType } | null>(null);
  const [inlineToolbar, setInlineToolbar] = useState<{ top: number; left: number; path: string } | null>(null);

  // Save status & name editing
  const [saveStatus, setSaveStatus] = useState<'saved' | 'saving' | 'dirty'>('saved');
  const [isEditingSiteName, setIsEditingSiteName] = useState(false);
  const [siteNameDraft, setSiteNameDraft] = useState(initialSite.name);

  // Auto-save timer
  const autoSaveTimerRef = useRef<NodeJS.Timeout | null>(null);

  const updateSiteWithHistory = (newSite: SiteConfig) => {
    setSite(newSite);
    setSaveStatus('dirty');

    const newHistory = history.slice(0, historyIndex + 1);
    newHistory.push(newSite);
    if (newHistory.length > 50) newHistory.shift();
    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
  };

  const handleSelectAndScrollToSection = (sec: SectionType, shouldScroll: boolean = true) => {
    setActiveSection(sec);
    if (!isPresentationMode) {
      setIsRightPanelOpen(true);
    }
    setHighlightedSection(sec);

    if (highlightTimerRef.current) clearTimeout(highlightTimerRef.current);
    highlightTimerRef.current = setTimeout(() => {
      setHighlightedSection(null);
    }, 1800);

    if (shouldScroll) {
      setTimeout(() => {
        const el = document.getElementById(`wrapper-${sec}`) || document.getElementById(`section-${sec}`);
        if (el) {
          el.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
            inline: 'nearest'
          });
        }
      }, 50);
    }
  };

  const handleScrollToTop = () => {
    if (canvasScrollRef.current) {
      canvasScrollRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleScrollToBottom = () => {
    if (canvasScrollRef.current) {
      canvasScrollRef.current.scrollTo({
        top: canvasScrollRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    if (saveStatus === 'dirty') {
      if (autoSaveTimerRef.current) clearTimeout(autoSaveTimerRef.current);
      setSaveStatus('saving');
      autoSaveTimerRef.current = setTimeout(() => {
        onSaveSite(site);
        setSaveStatus('saved');
      }, 1500);
    }
    return () => {
      if (autoSaveTimerRef.current) clearTimeout(autoSaveTimerRef.current);
    };
  }, [site, saveStatus, onSaveSite]);

  // Undo / Redo handlers
  const handleUndo = () => {
    if (historyIndex > 0) {
      const newIndex = historyIndex - 1;
      setHistoryIndex(newIndex);
      setSite(history[newIndex]);
      setSaveStatus('dirty');
      addToast('info', 'Acción deshecha');
    }
  };

  const handleRedo = () => {
    if (historyIndex < history.length - 1) {
      const newIndex = historyIndex + 1;
      setHistoryIndex(newIndex);
      setSite(history[newIndex]);
      setSaveStatus('dirty');
      addToast('info', 'Acción rehecha');
    }
  };

  // Keyboard Shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const targetTag = (e.target as HTMLElement)?.tagName;
      const isTyping = ['INPUT', 'TEXTAREA', 'SELECT'].includes(targetTag) || (e.target as HTMLElement)?.isContentEditable;

      const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
      const isCmdOrCtrl = isMac ? e.metaKey : e.ctrlKey;

      if (isCmdOrCtrl && e.key.toLowerCase() === 's') {
        e.preventDefault();
        onSaveSite(site);
        setSaveStatus('saved');
        addToast('success', '¡Sitio guardado con éxito!', 'Tus cambios están respaldados en el almacenamiento local.');
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
      } else if (isCmdOrCtrl && e.key.toLowerCase() === 'd' && activeSection && !isTyping) {
        e.preventDefault();
        handleDuplicateSection(activeSection);
      } else if ((e.key === 'Delete' || e.key === 'Backspace') && activeSection && !isTyping && !isCmdOrCtrl) {
        e.preventDefault();
        setSectionToDelete(activeSection);
      } else if (e.code === 'Space' && !isTyping && !isCmdOrCtrl) {
        e.preventDefault();
        setIsPresentationMode((prev) => !prev);
      } else if (e.key === '?' && !isCmdOrCtrl && !isTyping) {
        setIsShortcutsOpen(true);
      } else if (e.key === 'Escape') {
        if (isPresentationMode) {
          setIsPresentationMode(false);
        } else {
          setContextMenu(null);
          setInlineToolbar(null);
          setSectionToDelete(null);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [site, history, historyIndex, activeSection, isPresentationMode, onSaveSite]);

  // Section Order & Hierarchy Operations
  const currentOrder: SectionType[] =
    site.sectionOrder && site.sectionOrder.length > 0
      ? site.sectionOrder
      : ['navbar', 'hero', 'logos', 'bentoFeatures', 'productHighlight', 'stats', 'testimonials', 'pricing', 'faq', 'ctaFinal', 'footer'];

  const handleMoveUp = (index: number) => {
    if (index <= 0) return;
    const newOrder = [...currentOrder];
    const temp = newOrder[index - 1];
    newOrder[index - 1] = newOrder[index];
    newOrder[index] = temp;
    updateSiteWithHistory({ ...site, sectionOrder: newOrder });
  };

  const handleMoveDown = (index: number) => {
    if (index >= currentOrder.length - 1) return;
    const newOrder = [...currentOrder];
    const temp = newOrder[index + 1];
    newOrder[index + 1] = newOrder[index];
    newOrder[index] = temp;
    updateSiteWithHistory({ ...site, sectionOrder: newOrder });
  };

  const handleDuplicateSection = (sec: SectionType) => {
    const existingData = site.sections[sec];
    if (!existingData) return;

    const newIndex = currentOrder.indexOf(sec) + 1;
    const newOrder = [...currentOrder];
    newOrder.splice(newIndex, 0, sec);

    updateSiteWithHistory({
      ...site,
      sectionOrder: newOrder
    });
    handleSelectAndScrollToSection(sec, true);
    addToast('success', 'Sección duplicada', `Se ha creado una copia de ${SECTION_LABELS[sec] || sec}.`);
  };

  const handleConfirmDeleteSection = () => {
    if (!sectionToDelete) return;
    const sec = sectionToDelete;
    const newOrder = currentOrder.filter((k) => k !== sec);
    updateSiteWithHistory({
      ...site,
      sectionOrder: newOrder
    });
    if (activeSection === sec) {
      setActiveSection(newOrder[0] || null);
    }
    setSectionToDelete(null);
    addToast('info', 'Sección eliminada', 'Puedes deshacer este cambio con Ctrl+Z.');
  };

  const handleDeleteSection = (sec: SectionType) => {
    setSectionToDelete(sec);
  };

  const handleSaveAsComponent = (sec: SectionType) => {
    try {
      const saved = localStorage.getItem('930_saved_components') || localStorage.getItem('930studio_saved_components');
      const list = saved ? JSON.parse(saved) : [];
      const newComp: SavedComponent = {
        id: `comp_${Date.now()}`,
        name: `${SECTION_LABELS[sec] || sec} personalizada`,
        category: sec,
        sectionType: sec,
        data: site.sections[sec],
        customStyle: site.customSectionStyles?.[sec],
        createdAt: new Date().toISOString()
      };
      const updated = [newComp, ...list];
      localStorage.setItem('930_saved_components', JSON.stringify(updated));
      addToast('success', 'Componente guardado en biblioteca', 'Puedes insertarlo en cualquier momento desde el catálogo.');
    } catch (err) {
      console.error(err);
      addToast('error', 'Error al guardar componente');
    }
  };

  const handleAddSavedComponent = (comp: SavedComponent) => {
    const secType = comp.sectionType;
    const updatedSections = {
      ...site.sections,
      [secType]: comp.data || getDefaultSectionData(secType)
    };

    let newOrder = [...currentOrder];
    if (!newOrder.includes(secType)) {
      let insertIndex = newOrder.indexOf('footer');
      if (insertIndex === -1) insertIndex = newOrder.length;
      newOrder.splice(insertIndex, 0, secType);
    }

    const updatedStyles = {
      ...(site.customSectionStyles || {}),
      ...(comp.customStyle ? { [secType]: comp.customStyle } : {})
    };

    updateSiteWithHistory({
      ...site,
      sections: updatedSections,
      sectionOrder: newOrder,
      customSectionStyles: updatedStyles
    });

    handleSelectAndScrollToSection(secType, true);
    setIsAddSectionOpen(false);
    addToast('success', 'Componente insertado', `Se añadió "${comp.name}" a tu sitio.`);
  };

  const handleToggleVisibility = (sec: SectionType) => {
    const current = (site.sections[sec] as any)?.enabled !== false;
    const updatedSections = {
      ...site.sections,
      [sec]: {
        ...((site.sections[sec] as any) || {}),
        enabled: !current
      }
    };
    updateSiteWithHistory({
      ...site,
      sections: updatedSections
    });
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

    handleSelectAndScrollToSection(type, true);
    setIsAddSectionOpen(false);
  };

  const handleNavigatePreviousSection = () => {
    if (!activeSection) {
      if (currentOrder.length > 0) handleSelectAndScrollToSection(currentOrder[0], true);
      return;
    }
    const currentIndex = currentOrder.indexOf(activeSection);
    if (currentIndex > 0) {
      handleSelectAndScrollToSection(currentOrder[currentIndex - 1], true);
    } else {
      handleSelectAndScrollToSection(currentOrder[currentOrder.length - 1], true);
    }
  };

  const handleNavigateNextSection = () => {
    if (!activeSection) {
      if (currentOrder.length > 0) handleSelectAndScrollToSection(currentOrder[0], true);
      return;
    }
    const currentIndex = currentOrder.indexOf(activeSection);
    if (currentIndex < currentOrder.length - 1 && currentIndex !== -1) {
      handleSelectAndScrollToSection(currentOrder[currentIndex + 1], true);
    } else {
      handleSelectAndScrollToSection(currentOrder[0], true);
    }
  };

  const handleUpdateText = (path: string, value: string) => {
    const parts = path.split('.');
    if (parts.length < 2) return;
    const [sectionKey, field] = parts;
    const sec = (site.sections[sectionKey as SectionType] as any) || {};
    const updatedSections = {
      ...site.sections,
      [sectionKey]: {
        ...sec,
        [field]: value
      }
    };
    updateSiteWithHistory({ ...site, sections: updatedSections });
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

  // Viewport widths mapping
  const viewportWidths = {
    mobile: '375px',
    'mobile-lg': '425px',
    tablet: '768px',
    laptop: '1024px',
    desktop: '1280px',
    ultrawide: '100%'
  };

  return (
    <div className="h-screen flex flex-col font-sans overflow-hidden bg-[#0A0A0F] text-white">
      {/* 1. TOP HEADER TOOLBAR */}
      <header className="h-16 shrink-0 border-b border-white/10 bg-[#12121A] px-4 flex items-center justify-between z-30">
        {/* Left: Back button & Site Name */}
        <div className="flex items-center gap-3">
          <button
            onClick={onBackToDashboard}
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white transition-colors cursor-pointer"
            title="Volver al panel"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>

          <div className="h-5 w-px bg-white/10" />

          {/* Project Name editable */}
          {isEditingSiteName ? (
            <div className="flex items-center gap-1.5">
              <input
                autoFocus
                type="text"
                value={siteNameDraft}
                onChange={(e) => setSiteNameDraft(e.target.value)}
                onBlur={handleSaveSiteName}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleSaveSiteName();
                  if (e.key === 'Escape') setIsEditingSiteName(false);
                }}
                className="px-2.5 py-1 rounded-lg bg-[#1A1A24] border border-[#00E5FF] text-white text-xs font-black outline-none"
              />
              <button
                onClick={handleSaveSiteName}
                className="p-1 rounded-md bg-[#00E5FF] text-black hover:bg-[#00cce6]"
              >
                <Check className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            <div
              onClick={() => setIsEditingSiteName(true)}
              className="flex items-center gap-1.5 cursor-pointer group hover:bg-white/5 px-2 py-1 rounded-lg transition-colors"
            >
              <h2 className="text-xs font-black tracking-tight text-white group-hover:text-[#00E5FF] transition-colors">
                {site.name}
              </h2>
              <Edit3 className="w-3 h-3 text-neutral-500 group-hover:text-[#00E5FF] transition-colors" />
            </div>
          )}

          {/* Save Status Badge */}
          <div className="hidden sm:flex items-center gap-1 text-[11px] font-bold">
            {saveStatus === 'saving' && (
              <span className="text-amber-400 flex items-center gap-1 animate-pulse">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                Guardando...
              </span>
            )}
            {saveStatus === 'saved' && (
              <span className="text-[#00FF88] flex items-center gap-1">
                <Check className="w-3 h-3" />
                Guardado
              </span>
            )}
            {saveStatus === 'dirty' && (
              <span className="text-neutral-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF]" />
                Cambios pendientes
              </span>
            )}
          </div>
        </div>

        {/* Center: Breakpoints & Zoom */}
        <div className="flex items-center gap-3">
          {/* Breakpoints switcher */}
          <div className="hidden md:flex items-center bg-[#1A1A24] p-1 rounded-xl border border-white/10 text-xs">
            <button
              onClick={() => setViewport('mobile')}
              className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                viewport === 'mobile' ? 'bg-[#00E5FF] text-black font-extrabold shadow-xs' : 'text-neutral-400 hover:text-white'
              }`}
              title="Móvil (375px)"
            >
              <Smartphone className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setViewport('tablet')}
              className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                viewport === 'tablet' ? 'bg-[#00E5FF] text-black font-extrabold shadow-xs' : 'text-neutral-400 hover:text-white'
              }`}
              title="Tablet (768px)"
            >
              <Tablet className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setViewport('desktop')}
              className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                viewport === 'desktop' ? 'bg-[#00E5FF] text-black font-extrabold shadow-xs' : 'text-neutral-400 hover:text-white'
              }`}
              title="Escritorio (1280px)"
            >
              <Monitor className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setViewport('ultrawide')}
              className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                viewport === 'ultrawide' ? 'bg-[#00E5FF] text-black font-extrabold shadow-xs' : 'text-neutral-400 hover:text-white'
              }`}
              title="Pantalla Completa 100%"
            >
              <Maximize className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Zoom controls */}
          <div className="hidden lg:flex items-center gap-1 bg-[#1A1A24] px-2 py-1 rounded-xl border border-white/10 text-xs">
            <button
              onClick={() => setZoomScale(Math.max(25, zoomScale - 10))}
              className="p-1 text-neutral-400 hover:text-white transition-colors"
              title="Reducir Zoom"
            >
              <ZoomOut className="w-3 h-3" />
            </button>
            <span className="font-mono text-[11px] font-bold text-neutral-300 w-10 text-center">
              {zoomScale}%
            </span>
            <button
              onClick={() => setZoomScale(Math.min(200, zoomScale + 10))}
              className="p-1 text-neutral-400 hover:text-white transition-colors"
              title="Aumentar Zoom"
            >
              <ZoomIn className="w-3 h-3" />
            </button>
            <button
              onClick={() => setZoomScale(100)}
              className="ml-1 px-1.5 py-0.5 rounded bg-white/5 hover:bg-white/10 text-[10px] text-neutral-400 hover:text-white"
              title="Restablecer al 100%"
            >
              100%
            </button>
          </div>

          {/* Undo / Redo */}
          <div className="flex items-center gap-0.5 bg-[#1A1A24] p-1 rounded-xl border border-white/10">
            <button
              disabled={historyIndex <= 0}
              onClick={handleUndo}
              className="p-1.5 text-neutral-400 hover:text-white disabled:opacity-20 rounded-lg transition-colors"
              title="Deshacer (Ctrl+Z)"
            >
              <Undo2 className="w-3.5 h-3.5" />
            </button>
            <button
              disabled={historyIndex >= history.length - 1}
              onClick={handleRedo}
              className="p-1.5 text-neutral-400 hover:text-white disabled:opacity-20 rounded-lg transition-colors"
              title="Rehacer (Ctrl+Y)"
            >
              <Redo2 className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2">
          {/* Presentation Mode Toggle */}
          <button
            onClick={() => setIsPresentationMode((prev) => !prev)}
            className={`p-2 rounded-xl transition-all cursor-pointer ${
              isPresentationMode
                ? 'bg-[#00E5FF] text-black font-extrabold shadow-[0_0_12px_rgba(0,229,255,0.4)]'
                : 'bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white'
            }`}
            title="Modo Presentación / Zen (Espacio)"
          >
            <Tv className="w-4 h-4" />
          </button>

          {/* Shortcuts guide button */}
          <button
            onClick={() => setIsShortcutsOpen(true)}
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition-colors cursor-pointer"
            title="Atajos de teclado (?)"
          >
            <HelpCircle className="w-4 h-4" />
          </button>

          {/* Voluntary Donation Button */}
          <button
            onClick={() => {
              if (onOpenDonation) onOpenDonation();
              else setIsDonationOpen(true);
            }}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#FF00E5]/15 hover:bg-[#FF00E5] text-[#FF00E5] hover:text-black border border-[#FF00E5]/30 text-xs font-black transition-all cursor-pointer shadow-[0_0_12px_rgba(255,0,229,0.2)]"
          >
            <Heart className="w-3.5 h-3.5 fill-current" />
            <span>Apoyar ☕</span>
          </button>

          {/* Preview Modal Trigger */}
          <button
            onClick={() => setIsPreviewModalOpen(true)}
            className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/15 text-neutral-200 text-xs font-extrabold flex items-center gap-1.5 transition-colors cursor-pointer border border-white/10"
          >
            <Eye className="w-3.5 h-3.5 text-[#00E5FF]" />
            <span className="hidden sm:inline">Vista Previa</span>
          </button>

          {/* Export Modal Trigger */}
          <button
            onClick={() => setIsExportOpen(true)}
            className="px-3.5 py-1.5 rounded-xl bg-[#00E5FF] hover:bg-[#00cce6] text-black text-xs font-black flex items-center gap-1.5 transition-all cursor-pointer shadow-[0_0_15px_rgba(0,229,255,0.35)] hover:scale-102"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Exportar</span>
          </button>
        </div>
      </header>

      {/* 2. MAIN 3-COLUMN EDITOR WORKSPACE */}
      <div className="flex-1 flex overflow-hidden relative">
        {/* ========================================================================= */}
        {/* LEFT PANEL: Jerarquía DOM & Biblioteca de Bloques */}
        {/* ========================================================================= */}
        {!isPresentationMode && (
          isLeftPanelOpen ? (
            <aside className="w-72 shrink-0 border-r border-white/10 bg-[#12121A] flex flex-col z-20 transition-all">
              {/* Left Header */}
              <div className="p-3 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#00E5FF]" />
                  <span className="text-xs font-black uppercase tracking-wider text-white">Estructura</span>
                </div>
                <button
                  onClick={() => setIsLeftPanelOpen(false)}
                  className="p-1 text-neutral-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
                  title="Ocultar panel izquierdo"
                >
                  <PanelLeftClose className="w-4 h-4" />
                </button>
              </div>

              {/* Tree Component */}
              <div className="flex-1 overflow-hidden">
                <HierarchyTree
                  site={site}
                  activeSection={activeSection}
                  onSelectSection={(sec) => {
                    handleSelectAndScrollToSection(sec, true);
                  }}
                  onMoveUp={handleMoveUp}
                  onMoveDown={handleMoveDown}
                  onDuplicate={handleDuplicateSection}
                  onDelete={handleDeleteSection}
                  onToggleVisibility={handleToggleVisibility}
                  onOpenAddSection={() => setIsAddSectionOpen(true)}
                  onUpdateSite={updateSiteWithHistory}
                />
              </div>
            </aside>
          ) : (
            <button
              onClick={() => setIsLeftPanelOpen(true)}
              className="absolute left-3 top-3 z-30 p-2 rounded-xl bg-[#12121A] border border-white/15 text-neutral-300 hover:text-white hover:border-[#00E5FF] shadow-lg transition-all"
              title="Abrir panel izquierdo"
            >
              <PanelLeftOpen className="w-4 h-4 text-[#00E5FF]" />
            </button>
          )
        )}

        {/* ========================================================================= */}
        {/* CENTER: Canvas de Renderizado & Barra de Navegación Rápida */}
        {/* ========================================================================= */}
        <div className="flex-1 flex flex-col bg-[#0A0A0F] overflow-hidden relative">
          {/* Floating Presentation Mode Pill HUD */}
          {isPresentationMode && (
            <div className="absolute top-4 left-1/2 -translate-x-1/2 z-40 px-4 py-2 rounded-2xl bg-[#12121A]/95 border border-[#00E5FF]/40 backdrop-blur-xl shadow-[0_10px_35px_rgba(0,0,0,0.85)] flex items-center gap-3 animate-fade-in text-xs">
              <div className="flex items-center gap-1.5 text-[#00E5FF] font-black">
                <Tv className="w-4 h-4" />
                <span>Modo Presentación (Zen)</span>
              </div>
              <div className="h-4 w-px bg-white/20" />
              <span className="text-neutral-400 text-[11px] hidden sm:inline">Presiona [Espacio] o [Esc] para volver</span>
              <button
                onClick={() => setIsPresentationMode(false)}
                className="px-2.5 py-1 rounded-lg bg-[#00E5FF] hover:bg-[#00cce6] text-black font-extrabold cursor-pointer transition-all"
              >
                Salir
              </button>
            </div>
          )}

          {/* Floating Canvas Helper Bar: Quick Section Jump & Vertical Scroll Steppers */}
          <div className="h-11 shrink-0 bg-[#12121A]/95 backdrop-blur-md border-b border-white/10 px-4 flex items-center justify-between z-10 select-none">
            {/* Left: Section Navigator stepper & quick dropdown */}
            <div className="flex items-center gap-2 text-xs">
              <span className="text-neutral-400 font-bold hidden sm:flex items-center gap-1.5">
                <Navigation className="w-3.5 h-3.5 text-[#00E5FF]" />
                <span>Sección:</span>
              </span>

              <div className="flex items-center bg-[#1A1A24] border border-white/10 rounded-xl p-0.5 shadow-xs">
                <button
                  onClick={handleNavigatePreviousSection}
                  className="p-1 rounded-lg text-neutral-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                  title="Sección anterior"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                </button>

                <select
                  value={activeSection || ''}
                  onChange={(e) => {
                    if (e.target.value) {
                      handleSelectAndScrollToSection(e.target.value as SectionType, true);
                    }
                  }}
                  aria-label="Seleccionar sección"
                  className="bg-transparent text-white font-extrabold px-2 py-0.5 text-xs outline-none cursor-pointer border-none"
                >
                  {currentOrder.map((sec, index) => {
                    const customName = site.customSectionStyles?.[sec]?.customName;
                    const icon = SECTION_ICONS[sec] || '📦';
                    const label = customName || SECTION_LABELS[sec] || sec;
                    return (
                      <option key={`${sec}-${index}`} value={sec} className="bg-[#1A1A24] text-white">
                        {icon} {index + 1}. {label}
                      </option>
                    );
                  })}
                </select>

                <button
                  onClick={handleNavigateNextSection}
                  className="p-1 rounded-lg text-neutral-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                  title="Siguiente sección"
                >
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {activeSection && (
                <button
                  onClick={() => handleSelectAndScrollToSection(activeSection, true)}
                  className="px-2.5 py-1 rounded-lg bg-[#00E5FF]/10 hover:bg-[#00E5FF]/25 text-[#00E5FF] text-[11px] font-black transition-all border border-[#00E5FF]/30 cursor-pointer hidden md:flex items-center gap-1"
                  title="Centrar y enfocar sección en el lienzo"
                >
                  <span>Enfocar</span>
                </button>
              )}
            </div>

            {/* Right: Quick scroll actions & Device specs indicator */}
            <div className="flex items-center gap-2">
              <div className="hidden lg:flex items-center gap-1.5 text-[11px] font-mono font-medium text-neutral-400 bg-[#1A1A24] px-2.5 py-0.5 rounded-lg border border-white/5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00FF88]" />
                <span>{viewportWidths[viewport]}</span>
              </div>

              <div className="flex items-center gap-1 bg-[#1A1A24] p-0.5 rounded-xl border border-white/10">
                <button
                  onClick={handleScrollToTop}
                  className="p-1 rounded-lg text-neutral-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                  title="Desplazarse al inicio de la plantilla (Arriba)"
                >
                  <ArrowUp className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={handleScrollToBottom}
                  className="p-1 rounded-lg text-neutral-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                  title="Desplazarse al final de la plantilla (Abajo)"
                >
                  <ArrowDown className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Scrollable Canvas Viewport with Custom Neon Scrollbar */}
          <main
            ref={canvasScrollRef}
            className="flex-1 editor-canvas-scroll bg-[#0A0A0F] overflow-y-auto overflow-x-hidden flex flex-col items-center p-4 sm:p-8 relative pb-52 select-none"
            onClick={() => {
              setContextMenu(null);
              setInlineToolbar(null);
            }}
          >
            <div
              className="transition-all duration-200 origin-top shadow-[0_20px_80px_rgba(0,0,0,0.9)] border border-white/15 rounded-2xl overflow-hidden bg-black w-full"
              style={{
                maxWidth: viewportWidths[viewport],
                transform: zoomScale !== 100 ? `scale(${zoomScale / 100})` : undefined,
                minHeight: 'min-content'
              }}
            >
              <WebsiteRenderer
                site={site}
                isEditable={true}
                selectedSection={activeSection}
                highlightedSection={highlightedSection}
                onSelectSection={(sec) => {
                  handleSelectAndScrollToSection(sec, false);
                }}
                onEditSection={(sec) => {
                  handleSelectAndScrollToSection(sec, false);
                }}
                onUpdateText={handleUpdateText}
                onContextMenu={(e, sec) => {
                  setContextMenu({ x: e.clientX, y: e.clientY, section: sec });
                }}
                onImageDoubleClick={(path, currentUrl) => {
                  setImagePickerTarget({ path, currentUrl });
                }}
              />
            </div>
          </main>
        </div>

        {/* ========================================================================= */}
        {/* ========================================================================= */}
        {/* RIGHT PANEL: Inspector Contextual (Contenido, Estilo, Ajustes) */}
        {/* ========================================================================= */}
        {!isPresentationMode && (
          isRightPanelOpen && activeSection ? (
            <aside className="w-84 shrink-0 border-l border-white/10 bg-[#12121A] flex flex-col z-20 transition-all">
              {/* Inspector Header with Tabs */}
              <div className="p-3 border-b border-white/10 flex items-center justify-between shrink-0">
                <div className="flex items-center bg-[#1A1A24] p-1 rounded-xl border border-white/10 text-xs font-bold w-full mr-2">
                  <button
                    onClick={() => setInspectorTab('content')}
                    className={`flex-1 py-1.5 rounded-lg transition-all cursor-pointer flex items-center justify-center gap-1 ${
                      inspectorTab === 'content' ? 'bg-[#00E5FF] text-black font-black shadow-xs' : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    <Type className="w-3 h-3" />
                    <span>Contenido</span>
                  </button>
                  <button
                    onClick={() => setInspectorTab('style')}
                    className={`flex-1 py-1.5 rounded-lg transition-all cursor-pointer flex items-center justify-center gap-1 ${
                      inspectorTab === 'style' ? 'bg-[#FF00E5] text-black font-black shadow-xs' : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    <Palette className="w-3 h-3" />
                    <span>Estilo</span>
                  </button>
                  <button
                    onClick={() => setInspectorTab('settings')}
                    className={`flex-1 py-1.5 rounded-lg transition-all cursor-pointer flex items-center justify-center gap-1 ${
                      inspectorTab === 'settings' ? 'bg-[#00FF88] text-black font-black shadow-xs' : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    <Settings2 className="w-3 h-3" />
                    <span>Ajustes</span>
                  </button>
                </div>

                <button
                  onClick={() => setIsRightPanelOpen(false)}
                  className="p-1.5 text-neutral-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
                  title="Ocultar inspector"
                >
                  <PanelRightClose className="w-4 h-4" />
                </button>
              </div>

              {/* Inspector Content Body */}
              <div className="flex-1 overflow-y-auto">
                {inspectorTab === 'content' && (
                  <ContentInspector
                    site={site}
                    activeSection={activeSection}
                    onUpdateSite={updateSiteWithHistory}
                    onOpenImagePicker={(path, currentUrl) => setImagePickerTarget({ path, currentUrl })}
                  />
                )}

                {inspectorTab === 'style' && (
                  <StyleInspector
                    site={site}
                    activeSection={activeSection}
                    onUpdateSite={updateSiteWithHistory}
                  />
                )}

                {inspectorTab === 'settings' && (
                  <SettingsInspector
                    site={site}
                    activeSection={activeSection}
                    onUpdateSite={updateSiteWithHistory}
                  />
                )}
              </div>
            </aside>
          ) : !isRightPanelOpen ? (
            <button
              onClick={() => setIsRightPanelOpen(true)}
              className="absolute right-3 top-3 z-30 p-2 rounded-xl bg-[#12121A] border border-white/15 text-neutral-300 hover:text-white hover:border-[#00E5FF] shadow-lg transition-all"
              title="Abrir inspector"
            >
              <PanelRightOpen className="w-4 h-4 text-[#00E5FF]" />
            </button>
          ) : null
        )}
      </div>

      {/* ========================================================================= */}
      {/* FLOATING CONTEXT MENU */}
      {/* ========================================================================= */}
      {contextMenu && (
        <CanvasContextMenu
          x={contextMenu.x}
          y={contextMenu.y}
          section={contextMenu.section}
          onClose={() => setContextMenu(null)}
          onEditContent={(sec) => {
            setActiveSection(sec);
            setInspectorTab('content');
            setIsRightPanelOpen(true);
          }}
          onEditStyle={(sec) => {
            setActiveSection(sec);
            setInspectorTab('style');
            setIsRightPanelOpen(true);
          }}
          onDuplicate={(sec) => handleDuplicateSection(sec)}
          onSaveAsComponent={(sec) => handleSaveAsComponent(sec)}
          onMoveUp={(sec) => {
            const idx = currentOrder.indexOf(sec);
            handleMoveUp(idx);
          }}
          onMoveDown={(sec) => {
            const idx = currentOrder.indexOf(sec);
            handleMoveDown(idx);
          }}
          onDelete={(sec) => handleDeleteSection(sec)}
        />
      )}

      {/* ========================================================================= */}
      {/* FLOATING INLINE TEXT TOOLBAR */}
      {/* ========================================================================= */}
      {inlineToolbar && (
        <InlineTextToolbar
          position={{ top: inlineToolbar.top, left: inlineToolbar.left }}
          onApplyFormat={(format) => {
            // Apply quick text transform or color
          }}
          onClose={() => setInlineToolbar(null)}
        />
      )}

      {/* ========================================================================= */}
      {/* MODALS & NOTIFICATIONS */}
      {/* ========================================================================= */}

      {/* Toast Notification HUD */}
      <ToastContainer toasts={toasts} onDismiss={removeToast} />

      {/* Delete Confirmation Modal */}
      {sectionToDelete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="border border-white/15 rounded-3xl w-full max-w-md p-6 bg-[#12121A] text-white shadow-2xl space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-rose-500/15 text-rose-400 border border-rose-500/30 flex items-center justify-center shrink-0">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-black">¿Eliminar sección?</h3>
                <p className="text-xs text-neutral-400">
                  Se eliminará &quot;{SECTION_LABELS[sectionToDelete] || sectionToDelete}&quot; del lienzo.
                </p>
              </div>
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed bg-white/5 p-3 rounded-xl border border-white/5">
              Esta acción eliminará el bloque del diseño. Puedes revertirlo inmediatamente pulsando <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white font-mono text-[10px] ml-1">Ctrl + Z</kbd>.
            </p>
            <div className="flex items-center justify-end gap-2 pt-2">
              <button
                onClick={() => setSectionToDelete(null)}
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-xs font-bold transition-colors cursor-pointer"
              >
                Cancelar
              </button>
              <button
                onClick={handleConfirmDeleteSection}
                className="px-4 py-2 rounded-xl bg-rose-500 hover:bg-rose-600 text-white text-xs font-black transition-colors cursor-pointer shadow-lg shadow-rose-500/20"
              >
                Eliminar Sección
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add Section Library */}
      <AddSectionModal
        isOpen={isAddSectionOpen}
        onClose={() => setIsAddSectionOpen(false)}
        onAddSection={handleAddSection}
        onAddSavedComponent={handleAddSavedComponent}
        existingSections={currentOrder}
      />

      {/* Export Engine Modal */}
      <ExportModal
        isOpen={isExportOpen}
        onClose={() => setIsExportOpen(false)}
        site={site}
        onOpenDonation={() => {
          setIsExportOpen(false);
          setIsDonationOpen(true);
        }}
      />

      {/* Unsplash Image Picker Modal */}
      {imagePickerTarget && (
        <ImagePickerModal
          isOpen={true}
          onClose={() => setImagePickerTarget(null)}
          currentUrl={imagePickerTarget.currentUrl}
          onSelectImage={(url) => {
            handleUpdateText(imagePickerTarget.path, url);
            setImagePickerTarget(null);
          }}
        />
      )}

      {/* Keyboard Shortcuts Cheat Sheet */}
      <KeyboardShortcutsModal
        isOpen={isShortcutsOpen}
        onClose={() => setIsShortcutsOpen(false)}
      />

      {/* Voluntary PayPal Donation Modal */}
      <DonationModal
        isOpen={isDonationOpen}
        onClose={() => setIsDonationOpen(false)}
      />

      {/* Live Full-Screen Preview Modal */}
      {isPreviewModalOpen && (
        <div className="fixed inset-0 z-50 bg-black flex flex-col animate-fade-in">
          <div className="h-14 border-b border-white/10 bg-[#12121A] px-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xs font-black text-white">Vista Previa en Vivo:</span>
              <span className="text-xs text-[#00E5FF] font-bold">{site.name}</span>
            </div>
            <button
              onClick={() => setIsPreviewModalOpen(false)}
              className="px-3.5 py-1.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-bold transition-colors cursor-pointer"
            >
              Cerrar Vista Previa
            </button>
          </div>
          <div className="flex-1 overflow-y-auto">
            <WebsiteRenderer site={site} isEditable={false} />
          </div>
        </div>
      )}
    </div>
  );
};
