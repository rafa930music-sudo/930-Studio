import React, { useState } from 'react';
import { SiteConfig, Template } from '../types';
import { TEMPLATES } from '../data/templates';
import { CreationWizardModal } from './CreationWizardModal';
import { QuickStartTourModal } from './QuickStartTourModal';
import confetti from 'canvas-confetti';
import {
  Sparkles,
  Plus,
  Globe,
  ExternalLink,
  Edit3,
  Copy,
  Trash2,
  Download,
  Search,
  CheckCircle2,
  LayoutGrid,
  Folder,
  BookOpen,
  Settings,
  Heart,
  Home,
  Menu,
  X,
  Sun,
  Moon,
  ChevronDown,
  ChevronUp,
  Clock,
  ArrowRight,
  ShieldCheck,
  Check,
  Layers,
  FileCode,
  Terminal,
  UploadCloud,
  HelpCircle,
  AlertTriangle,
  Flame,
  Palette,
  Eye,
  Crown,
  Zap,
  Rocket,
  Star,
  Award,
  TrendingUp,
  Building,
  Sliders,
  CheckCircle,
  Smartphone
} from 'lucide-react';

interface DashboardProps {
  sites: SiteConfig[];
  onOpenEditor: (site: SiteConfig) => void;
  onCreateSiteFromTemplate: (template: Template, customName?: string, chosenAccent?: string) => void;
  onCreateSiteFromConfig?: (site: SiteConfig) => void;
  onDeleteSite: (siteId: string) => void;
  onDuplicateSite: (site: SiteConfig) => void;
  onOpenDonation: () => void;
  onOpenExport: (site: SiteConfig) => void;
  onPreviewSite: (site: SiteConfig) => void;
  onResetAllData?: () => void;
  onTriggerSplash?: () => void;
}

export const Dashboard: React.FC<DashboardProps> = ({
  sites,
  onOpenEditor,
  onCreateSiteFromTemplate,
  onCreateSiteFromConfig,
  onDeleteSite,
  onDuplicateSite,
  onOpenDonation,
  onOpenExport,
  onPreviewSite,
  onResetAllData,
  onTriggerSplash
}) => {
  const isDark = true;
  // Navigation tabs: 'home' | 'templates' | 'sites' | 'donations' | 'guide' | 'settings'
  const [activeNav, setActiveNav] = useState<'home' | 'templates' | 'sites' | 'donations' | 'guide' | 'settings'>('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Wizard & Tour Modals
  const [isWizardOpen, setIsWizardOpen] = useState<boolean>(false);
  const [wizardInitialTemplateId, setWizardInitialTemplateId] = useState<string | undefined>(undefined);
  const [isTourOpen, setIsTourOpen] = useState<boolean>(false);

  // Donations Tab State
  const [selectedDonationTier, setSelectedDonationTier] = useState<number>(10);
  const [customDonationInput, setCustomDonationInput] = useState<string>('');
  const [hasTriggeredDonation, setHasTriggeredDonation] = useState<boolean>(false);
  const [copiedPaypalEmail, setCopiedPaypalEmail] = useState<boolean>(false);

  // Template page filters
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [styleFilter, setStyleFilter] = useState<string>('all');
  const [templateSearch, setTemplateSearch] = useState<string>('');

  // Template creation modal state
  const [selectedTemplateForModal, setSelectedTemplateForModal] = useState<Template | null>(null);
  const [modalProjectName, setModalProjectName] = useState<string>('');
  const [modalAccentColor, setModalAccentColor] = useState<string>('#00E5FF');

  // Sites page search & filter
  const [siteSearch, setSiteSearch] = useState<string>('');
  const [siteToDelete, setSiteToDelete] = useState<SiteConfig | null>(null);

  // Settings page reset confirmation
  const [isResetConfirmOpen, setIsResetConfirmOpen] = useState<boolean>(false);

  // Guide accordion state
  const [openAccordions, setOpenAccordions] = useState<{ [key: string]: boolean }>({
    'guide-1': true,
    'guide-2': false,
    'guide-3': false,
    'guide-4': false
  });

  const toggleAccordion = (key: string) => {
    setOpenAccordions((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  // Helper for relative time in Spanish
  const formatRelativeTime = (isoString?: string): string => {
    if (!isoString) return 'Editado recientemente';
    try {
      const now = new Date().getTime();
      const past = new Date(isoString).getTime();
      const diffInSeconds = Math.max(0, Math.floor((now - past) / 1000));

      if (diffInSeconds < 60) return 'Editado hace un momento';
      const diffInMinutes = Math.floor(diffInSeconds / 60);
      if (diffInMinutes < 60) return `Editado hace ${diffInMinutes} ${diffInMinutes === 1 ? 'minuto' : 'minutos'}`;
      const diffInHours = Math.floor(diffInMinutes / 60);
      if (diffInHours < 24) return `Editado hace ${diffInHours} ${diffInHours === 1 ? 'hora' : 'horas'}`;
      const diffInDays = Math.floor(diffInHours / 24);
      if (diffInDays < 30) return `Editado hace ${diffInDays} ${diffInDays === 1 ? 'día' : 'días'}`;
      const diffInMonths = Math.floor(diffInDays / 30);
      return `Editado hace ${diffInMonths} ${diffInMonths === 1 ? 'mes' : 'meses'}`;
    } catch {
      return 'Editado recientemente';
    }
  };

  // Category definitions for Templates tab
  const categories = [
    { id: 'all', label: 'Todos' },
    { id: 'saas', label: 'SaaS' },
    { id: 'ecommerce', label: 'E-commerce' },
    { id: 'portfolio', label: 'Portafolio' },
    { id: 'community', label: 'Comunidad & ONG' },
    { id: 'agencies', label: 'Agencia' },
    { id: 'luxury', label: 'Lujo' },
    { id: 'wellness', label: 'Salud' },
    { id: 'hospitality', label: 'Restaurante' },
    { id: 'services', label: 'Inmobiliaria' },
    { id: 'education', label: 'Educación' },
    { id: 'hardware', label: 'Hardware' }
  ];

  const styleOptions = [
    { id: 'all', label: 'Todos los estilos' },
    { id: 'minimalista', label: 'Minimalista' },
    { id: 'oscuro', label: 'Oscuro' },
    { id: 'creativo', label: 'Creativo' },
    { id: 'corporativo', label: 'Corporativo' },
    { id: 'natural', label: 'Natural' }
  ];

  const neonColorOptions = [
    { color: '#00E5FF', label: 'Cian Neón' },
    { color: '#FF00E5', label: 'Magenta Neón' },
    { color: '#B900FF', label: 'Púrpura Cyber' },
    { color: '#00FF88', label: 'Verde Neón' },
    { color: '#0071E3', label: 'Azul Eléctrico' }
  ];

  // Filter templates
  const filteredTemplates = TEMPLATES.filter((tpl) => {
    const matchesCategory = categoryFilter === 'all' || tpl.category === categoryFilter;
    const matchesStyle =
      styleFilter === 'all' ||
      (tpl.style && tpl.style.toLowerCase() === styleFilter.toLowerCase()) ||
      (styleFilter === 'oscuro' && tpl.theme === 'dark') ||
      (styleFilter === 'minimalista' && tpl.theme === 'light');
    const matchesSearch =
      tpl.name.toLowerCase().includes(templateSearch.toLowerCase()) ||
      tpl.tagline.toLowerCase().includes(templateSearch.toLowerCase()) ||
      tpl.description.toLowerCase().includes(templateSearch.toLowerCase());
    return matchesCategory && matchesStyle && matchesSearch;
  });

  // Filter sites
  const filteredSites = sites.filter((s) => {
    return (
      s.name.toLowerCase().includes(siteSearch.toLowerCase()) ||
      s.slug.toLowerCase().includes(siteSearch.toLowerCase())
    );
  });

  // Open Template modal setup
  const handleOpenTemplateModal = (template: Template) => {
    setSelectedTemplateForModal(template);
    setModalProjectName(template.name);
    setModalAccentColor(template.accentColor || '#00E5FF');
  };

  const handleStartWizardWithTemplate = (templateId?: string) => {
    setWizardInitialTemplateId(templateId);
    setIsWizardOpen(true);
  };

  const handleWizardSiteCreated = (newSite: SiteConfig) => {
    setIsWizardOpen(false);
    if (onCreateSiteFromConfig) {
      onCreateSiteFromConfig(newSite);
    } else {
      onCreateSiteFromTemplate(
        TEMPLATES.find((t) => t.id === newSite.templateId) || TEMPLATES[0],
        newSite.name,
        newSite.accentColor
      );
    }
  };

  const handlePayPalDirectDonate = () => {
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#00E5FF', '#FF00E5', '#00FF88', '#FFD700']
    });
    setHasTriggeredDonation(true);
    const amount = customDonationInput ? customDonationInput : selectedDonationTier;
    const paypalUrl = `https://www.paypal.me/Rafa930paypal/${amount}`;
    window.open(paypalUrl, '_blank', 'noopener,noreferrer');
  };

  const handleConfirmCreateFromModal = () => {
    if (!selectedTemplateForModal) return;
    onCreateSiteFromTemplate(
      selectedTemplateForModal,
      modalProjectName.trim() || selectedTemplateForModal.name,
      modalAccentColor
    );
    setSelectedTemplateForModal(null);
  };

  return (
    <div
      className={`min-h-screen font-sans flex flex-col md:flex-row transition-colors duration-300 ${
        isDark ? 'bg-[#0A0A0F] text-white' : 'bg-[#FAFAFC] text-[#0F172A]'
      }`}
    >
      {/* ========================================================================= */}
      {/* 1. SIDEBAR (DESKTOP) & MOBILE DRAWER */}
      {/* ========================================================================= */}

      {/* Mobile Top Bar */}
      <div
        className={`md:hidden flex items-center justify-between p-4 border-b z-40 sticky top-0 ${
          isDark ? 'bg-[#12121A] border-white/10' : 'bg-[#FAFAFC] border-[#E5E7EB]'
        }`}
      >
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#00E5FF] to-[#FF00E5] p-[1.5px] shadow-[0_0_12px_rgba(0,229,255,0.4)]">
            <div className={`w-full h-full rounded-[10px] flex items-center justify-center ${isDark ? 'bg-[#12121A]' : 'bg-white'}`}>
              <Sparkles className="w-4 h-4 text-[#00E5FF]" />
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="font-extrabold text-base tracking-tight text-[#0F172A] dark:text-white">
              930 Studio
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] shadow-[0_0_6px_#00E5FF]" />
          </div>
        </div>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`p-2 rounded-xl border ${
            isDark ? 'bg-white/5 border-white/10 text-white' : 'bg-white border-[#E5E7EB] text-slate-800'
          }`}
          aria-label="Abrir menú"
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Main Sidebar */}
      <aside
        className={`fixed md:sticky top-0 left-0 h-screen w-64 shrink-0 border-r z-40 flex flex-col justify-between transition-transform duration-300 ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        } ${
          isDark
            ? 'bg-[#12121A] border-white/10 text-white'
            : 'bg-[#FAFAFC] border-[#E5E7EB] text-[#0F172A]'
        }`}
      >
        <div>
          {/* Logo & Brand */}
          <div className="p-6 border-b border-inherit flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-2xl bg-gradient-to-tr from-[#00E5FF] to-[#FF00E5] p-[1.5px] shadow-[0_0_15px_rgba(0,229,255,0.4)]">
                <div className={`w-full h-full rounded-[14px] flex items-center justify-center ${isDark ? 'bg-[#12121A]' : 'bg-white'}`}>
                  <Sparkles className="w-4 h-4 text-[#00E5FF]" />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-extrabold text-base tracking-tight block text-[#0F172A] dark:text-white">
                    930 Studio
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#00E5FF] shadow-[0_0_8px_#00E5FF]" />
                </div>
                <span className="text-[10px] font-bold text-[#64748B] dark:text-neutral-500 uppercase tracking-widest">
                  Plataforma Gratuita
                </span>
              </div>
            </div>

            {/* Mobile close */}
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="md:hidden p-1.5 text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="p-4 space-y-1.5">
            {/* Action button: Asistente Rápido */}
            <button
              onClick={() => {
                setWizardInitialTemplateId(undefined);
                setIsWizardOpen(true);
                setIsMobileMenuOpen(false);
              }}
              className="w-full mb-3 py-2.5 px-3.5 rounded-xl bg-gradient-to-r from-[#00E5FF] via-[#00B4D8] to-[#FF00E5] text-black font-extrabold text-xs shadow-[0_0_15px_rgba(0,229,255,0.35)] hover:scale-[1.02] transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Rocket className="w-4 h-4" />
              <span>Crear con Asistente</span>
            </button>

            {/* Inicio */}
            <button
              onClick={() => {
                setActiveNav('home');
                setIsMobileMenuOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all relative cursor-pointer ${
                activeNav === 'home'
                  ? isDark
                    ? 'bg-white/10 text-white font-bold'
                    : 'bg-white text-[#0F172A] font-bold shadow-[0_1px_3px_rgba(0,0,0,0.04)] border border-[#E5E7EB]'
                  : 'text-[#64748B] dark:text-neutral-400 hover:bg-[#F0F0F3] dark:hover:bg-white/5 hover:text-[#0F172A]'
              }`}
            >
              {activeNav === 'home' && (
                <span className="absolute left-1 top-1/2 -translate-y-1/2 w-1.5 h-4 rounded-full bg-[#00E5FF] shadow-[0_0_8px_#00E5FF]" />
              )}
              <Home className={`w-4 h-4 ${activeNav === 'home' ? 'text-[#00E5FF]' : ''}`} />
              <span>Inicio</span>
            </button>

            {/* Plantillas */}
            <button
              onClick={() => {
                setActiveNav('templates');
                setIsMobileMenuOpen(false);
              }}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all relative cursor-pointer ${
                activeNav === 'templates'
                  ? isDark
                    ? 'bg-white/10 text-white font-bold'
                    : 'bg-white text-[#0F172A] font-bold shadow-[0_1px_3px_rgba(0,0,0,0.04)] border border-[#E5E7EB]'
                  : 'text-[#64748B] dark:text-neutral-400 hover:bg-[#F0F0F3] dark:hover:bg-white/5 hover:text-[#0F172A]'
              }`}
            >
              <div className="flex items-center gap-3">
                {activeNav === 'templates' && (
                  <span className="absolute left-1 top-1/2 -translate-y-1/2 w-1.5 h-4 rounded-full bg-[#00E5FF] shadow-[0_0_8px_#00E5FF]" />
                )}
                <LayoutGrid className={`w-4 h-4 ${activeNav === 'templates' ? 'text-[#00E5FF]' : ''}`} />
                <span>Plantillas</span>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#00E5FF]/20 text-[#00E5FF] font-extrabold border border-[#00E5FF]/30">
                {TEMPLATES.length}
              </span>
            </button>

            {/* Mis sitios */}
            <button
              onClick={() => {
                setActiveNav('sites');
                setIsMobileMenuOpen(false);
              }}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all relative cursor-pointer ${
                activeNav === 'sites'
                  ? isDark
                    ? 'bg-white/10 text-white font-bold'
                    : 'bg-white text-[#0F172A] font-bold shadow-[0_1px_3px_rgba(0,0,0,0.04)] border border-[#E5E7EB]'
                  : 'text-[#64748B] dark:text-neutral-400 hover:bg-[#F0F0F3] dark:hover:bg-white/5 hover:text-[#0F172A]'
              }`}
            >
              <div className="flex items-center gap-3">
                {activeNav === 'sites' && (
                  <span className="absolute left-1 top-1/2 -translate-y-1/2 w-1.5 h-4 rounded-full bg-[#00E5FF] shadow-[0_0_8px_#00E5FF]" />
                )}
                <Folder className={`w-4 h-4 ${activeNav === 'sites' ? 'text-[#00E5FF]' : ''}`} />
                <span>Mis sitios</span>
              </div>
              <span className="text-xs px-2 py-0.5 rounded-full bg-slate-200 dark:bg-white/10 font-bold text-slate-700 dark:text-neutral-300">
                {sites.length}
              </span>
            </button>

            {/* 100% Gratis & Donar */}
            <button
              onClick={() => {
                setActiveNav('donations');
                setIsMobileMenuOpen(false);
              }}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all relative cursor-pointer ${
                activeNav === 'donations'
                  ? isDark
                    ? 'bg-white/10 text-white font-bold'
                    : 'bg-white text-[#0F172A] font-bold shadow-[0_1px_3px_rgba(0,0,0,0.04)] border border-[#E5E7EB]'
                  : 'text-[#64748B] dark:text-neutral-400 hover:bg-[#F0F0F3] dark:hover:bg-white/5 hover:text-[#0F172A]'
              }`}
            >
              <div className="flex items-center gap-3">
                {activeNav === 'donations' && (
                  <span className="absolute left-1 top-1/2 -translate-y-1/2 w-1.5 h-4 rounded-full bg-[#FF00E5] shadow-[0_0_8px_#FF00E5]" />
                )}
                <Heart className={`w-4 h-4 ${activeNav === 'donations' ? 'text-[#FF00E5] fill-[#FF00E5]' : 'text-[#FF00E5]'}`} />
                <span>100% Gratis & Donar</span>
              </div>
              <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#00E5FF]/20 text-[#00E5FF] font-black tracking-wider uppercase border border-[#00E5FF]/30">
                PayPal
              </span>
            </button>

            {/* Guía */}
            <button
              onClick={() => {
                setActiveNav('guide');
                setIsMobileMenuOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all relative cursor-pointer ${
                activeNav === 'guide'
                  ? isDark
                    ? 'bg-white/10 text-white font-bold'
                    : 'bg-white text-[#0F172A] font-bold shadow-[0_1px_3px_rgba(0,0,0,0.04)] border border-[#E5E7EB]'
                  : 'text-[#64748B] dark:text-neutral-400 hover:bg-[#F0F0F3] dark:hover:bg-white/5 hover:text-[#0F172A]'
              }`}
            >
              {activeNav === 'guide' && (
                <span className="absolute left-1 top-1/2 -translate-y-1/2 w-1.5 h-4 rounded-full bg-[#00E5FF] shadow-[0_0_8px_#00E5FF]" />
              )}
              <BookOpen className={`w-4 h-4 ${activeNav === 'guide' ? 'text-[#00E5FF]' : ''}`} />
              <span>Guía</span>
            </button>

            {/* Ajustes */}
            <button
              onClick={() => {
                setActiveNav('settings');
                setIsMobileMenuOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all relative cursor-pointer ${
                activeNav === 'settings'
                  ? isDark
                    ? 'bg-white/10 text-white font-bold'
                    : 'bg-white text-[#0F172A] font-bold shadow-[0_1px_3px_rgba(0,0,0,0.04)] border border-[#E5E7EB]'
                  : 'text-[#64748B] dark:text-neutral-400 hover:bg-[#F0F0F3] dark:hover:bg-white/5 hover:text-[#0F172A]'
              }`}
            >
              {activeNav === 'settings' && (
                <span className="absolute left-1 top-1/2 -translate-y-1/2 w-1.5 h-4 rounded-full bg-[#00E5FF] shadow-[0_0_8px_#00E5FF]" />
              )}
              <Settings className={`w-4 h-4 ${activeNav === 'settings' ? 'text-[#00E5FF]' : ''}`} />
              <span>Ajustes</span>
            </button>
          </nav>
        </div>

        {/* Sidebar Footer: Apoyar button with neon border */}
        <div className="p-4 border-t border-inherit space-y-3">
          <button
            onClick={() => {
              onOpenDonation();
              setIsMobileMenuOpen(false);
            }}
            className="w-full py-2.5 px-3.5 rounded-2xl border border-[#FF00E5]/50 bg-gradient-to-r from-[#FF00E5]/10 via-[#00E5FF]/10 to-[#00FF88]/10 hover:border-[#FF00E5] hover:shadow-[0_0_15px_rgba(255,0,229,0.3)] transition-all flex items-center justify-between group cursor-pointer"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-xl bg-[#FF00E5]/20 flex items-center justify-center text-[#FF00E5]">
                <Heart className="w-3.5 h-3.5 fill-[#FF00E5]" />
              </div>
              <div className="text-left">
                <div className="text-xs font-extrabold text-slate-900 dark:text-white">Apoyar 930</div>
                <div className="text-[10px] text-[#64748B] dark:text-neutral-400">Donación PayPal</div>
              </div>
            </div>
            <Sparkles className="w-3.5 h-3.5 text-[#00E5FF] group-hover:rotate-12 transition-transform" />
          </button>

          <div className="flex items-center justify-between text-[11px] text-neutral-500 px-1">
            <span>930 Studio v1.0.0</span>
            <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] text-[#00E5FF]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] shadow-[0_0_6px_#00E5FF]" />
              <span>Modo Oscuro</span>
            </div>
          </div>
        </div>
      </aside>

      {/* ========================================================================= */}
      {/* 2. MAIN CONTENT AREA */}
      {/* ========================================================================= */}
      <main className="flex-1 min-h-screen overflow-y-auto flex flex-col">
        {/* ===================================================================== */}
        {/* VIEW A: INICIO (HOME) - PLATAFORMA COMERCIAL */}
        {/* ===================================================================== */}
        {activeNav === 'home' && (
          <div className="p-6 md:p-10 max-w-6xl mx-auto w-full space-y-12">
            {/* Hero Section */}
            <div
              className={`p-8 md:p-12 rounded-3xl border relative overflow-hidden transition-all ${
                isDark
                  ? 'bg-[#12121A] border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]'
                  : 'bg-white border-[#E5E7EB] shadow-[0_20px_50px_rgba(0,229,255,0.06)]'
              }`}
            >
              {/* Neon background ambient lights */}
              <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gradient-to-br from-[#00E5FF]/20 via-[#FF00E5]/15 to-transparent blur-3xl pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 w-72 h-72 rounded-full bg-[#00FF88]/15 blur-3xl pointer-events-none" />

              <div className="relative z-10 max-w-3xl space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-xs font-bold text-white border border-[#00E5FF]/40 shadow-[0_0_15px_rgba(0,229,255,0.25)]">
                  <span className="w-2 h-2 rounded-full bg-[#00FF88] animate-pulse" />
                  <span className="text-[#00E5FF] font-extrabold uppercase tracking-wide">Plataforma 100% Gratuita & Sin Límites</span>
                  <span className="text-neutral-400">•</span>
                  <span>Sin registro forzoso • Sin marcas de agua</span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]">
                  Crea tu web profesional en minutos, <span className="bg-gradient-to-r from-[#00E5FF] via-[#00B4D8] to-[#FF00E5] bg-clip-text text-transparent">100% gratis y sin límites.</span>
                </h1>

                <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-neutral-300 leading-relaxed font-normal">
                  Elige una plantilla, cambia el logo, los colores, los textos, añade secciones y exporta el código. Tú tienes el control total.
                </p>

                <div className="flex flex-wrap items-center gap-3.5 pt-2">
                  <button
                    onClick={() => {
                      setWizardInitialTemplateId(undefined);
                      setIsWizardOpen(true);
                    }}
                    className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-[#00E5FF] via-[#00B4D8] to-[#FF00E5] text-black font-black text-sm shadow-[0_0_25px_rgba(0,229,255,0.4)] hover:scale-105 transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <Rocket className="w-4 h-4" />
                    <span>Empezar con Asistente Rápido</span>
                    <ArrowRight className="w-4 h-4 ml-0.5" />
                  </button>

                  <button
                    onClick={() => setActiveNav('templates')}
                    className="px-5 py-3.5 rounded-2xl border border-[#00E5FF]/40 text-[#00E5FF] hover:bg-[#00E5FF]/10 text-sm font-bold transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <LayoutGrid className="w-4 h-4" />
                    <span>Explorar {TEMPLATES.length} Plantillas Pro</span>
                  </button>

                  <button
                    onClick={() => onOpenDonation()}
                    className="px-5 py-3.5 rounded-2xl border border-[#FF00E5]/30 bg-[#FF00E5]/10 hover:bg-[#FF00E5]/20 text-[#FF00E5] text-sm font-bold transition-all flex items-center gap-2 cursor-pointer backdrop-blur-sm"
                  >
                    <Heart className="w-4 h-4 fill-[#FF00E5]" />
                    <span>Apoyar en PayPal</span>
                  </button>
                </div>
              </div>
            </div>

            {/* 3 Pasos "Rellena Huecos" */}
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl md:text-2xl font-extrabold tracking-tight">Experiencia «Rellena Huecos»</h2>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-neutral-400">Tan fácil como rellenar un formulario, con resultados de diseñador senior.</p>
                </div>
                <button
                  onClick={() => setIsWizardOpen(true)}
                  className="hidden sm:flex items-center gap-1.5 text-xs font-bold text-[#00E5FF] hover:underline cursor-pointer"
                >
                  <span>Abrir Asistente</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {/* Step 1 */}
                <div
                  onClick={() => setActiveNav('templates')}
                  className={`p-6 rounded-3xl border flex flex-col justify-between transition-all hover:border-[#00E5FF]/60 cursor-pointer group hover:scale-[1.01] ${
                    isDark ? 'bg-[#12121A] border-white/10' : 'bg-white border-[#E5E7EB] shadow-sm'
                  }`}
                >
                  <div className="space-y-3.5">
                    <div className="w-12 h-12 rounded-2xl bg-[#00E5FF]/10 border border-[#00E5FF]/30 text-[#00E5FF] flex items-center justify-center font-black text-base shadow-[0_0_12px_rgba(0,229,255,0.2)]">
                      1
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-extrabold text-base flex items-center justify-between">
                        <span>Elige tu Plantilla</span>
                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 text-[#00E5FF] transition-all" />
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-neutral-400 leading-relaxed">
                        20 sectores: Restaurantes, Tiendas, SaaS, Agencias, Inmobiliarias, Salud, Gimnasios y más.
                      </p>
                    </div>
                  </div>
                  <div className="pt-4 mt-2 border-t border-inherit flex items-center gap-2 text-[11px] font-bold text-[#00E5FF]">
                    <LayoutGrid className="w-3.5 h-3.5" />
                    <span>Ver catálogo</span>
                  </div>
                </div>

                {/* Step 2 */}
                <div
                  onClick={() => setIsWizardOpen(true)}
                  className={`p-6 rounded-3xl border flex flex-col justify-between transition-all hover:border-[#FF00E5]/60 cursor-pointer group hover:scale-[1.01] ${
                    isDark ? 'bg-[#12121A] border-white/10' : 'bg-white border-[#E5E7EB] shadow-sm'
                  }`}
                >
                  <div className="space-y-3.5">
                    <div className="w-12 h-12 rounded-2xl bg-[#FF00E5]/10 border border-[#FF00E5]/30 text-[#FF00E5] flex items-center justify-center font-black text-base shadow-[0_0_12px_rgba(255,0,229,0.2)]">
                      2
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-extrabold text-base flex items-center justify-between">
                        <span>Rellena los Datos</span>
                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 text-[#FF00E5] transition-all" />
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-neutral-400 leading-relaxed">
                        Introduce tu nombre, servicios, precios, número de WhatsApp y fotos. El sistema genera todo al instante.
                      </p>
                    </div>
                  </div>
                  <div className="pt-4 mt-2 border-t border-inherit flex items-center gap-2 text-[11px] font-bold text-[#FF00E5]">
                    <Sliders className="w-3.5 h-3.5" />
                    <span>Modo Fácil o Avanzado</span>
                  </div>
                </div>

                {/* Step 3 */}
                <div
                  onClick={() => {
                    if (sites.length > 0) {
                      onOpenExport(sites[0]);
                    } else {
                      setActiveNav('templates');
                    }
                  }}
                  className={`p-6 rounded-3xl border flex flex-col justify-between transition-all hover:border-[#00FF88]/60 cursor-pointer group hover:scale-[1.01] ${
                    isDark ? 'bg-[#12121A] border-white/10' : 'bg-white border-[#E5E7EB] shadow-sm'
                  }`}
                >
                  <div className="space-y-3.5">
                    <div className="w-12 h-12 rounded-2xl bg-[#00FF88]/10 border border-[#00FF88]/30 text-[#00FF88] flex items-center justify-center font-black text-base shadow-[0_0_12px_rgba(0,255,136,0.2)]">
                      3
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-extrabold text-base flex items-center justify-between">
                        <span>Exporta & Factura</span>
                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 text-[#00FF88] transition-all" />
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-neutral-400 leading-relaxed">
                        Descarga el HTML limpio o paquete ZIP listo para subir a Netlify, Vercel o tu hosting. 100% tuyo sin ataduras.
                      </p>
                    </div>
                  </div>
                  <div className="pt-4 mt-2 border-t border-inherit flex items-center gap-2 text-[11px] font-bold text-[#00FF88]">
                    <Download className="w-3.5 h-3.5" />
                    <span>Exportación instantánea</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Value Proposition Bento Grid */}
            <div className="space-y-4">
              <h2 className="text-xl font-extrabold tracking-tight">Por qué 930 Studio es diferente</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className={`p-5 rounded-2xl border ${isDark ? 'bg-[#12121A] border-white/10' : 'bg-white border-[#E5E7EB]'}`}>
                  <div className="w-9 h-9 rounded-xl bg-[#00E5FF]/10 text-[#00E5FF] flex items-center justify-center mb-3">
                    <Zap className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-sm">Modo Fácil "Rellena Huecos"</h4>
                  <p className="text-xs text-neutral-400 mt-1 leading-relaxed">Sin necesidad de aprender CSS ni diseño. Solo rellenar campos.</p>
                </div>

                <div className={`p-5 rounded-2xl border ${isDark ? 'bg-[#12121A] border-white/10' : 'bg-white border-[#E5E7EB]'}`}>
                  <div className="w-9 h-9 rounded-xl bg-[#FF00E5]/10 text-[#FF00E5] flex items-center justify-center mb-3">
                    <Building className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-sm">Licencia Comercial 100%</h4>
                  <p className="text-xs text-neutral-400 mt-1 leading-relaxed">Cobra a tus clientes por crearles webs profesionales sin pagar comisiones.</p>
                </div>

                <div className={`p-5 rounded-2xl border ${isDark ? 'bg-[#12121A] border-white/10' : 'bg-white border-[#E5E7EB]'}`}>
                  <div className="w-9 h-9 rounded-xl bg-[#00FF88]/10 text-[#00FF88] flex items-center justify-center mb-3">
                    <Download className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-sm">Código Limpio & ZIP</h4>
                  <p className="text-xs text-neutral-400 mt-1 leading-relaxed">HTML semántico, Tailwind CSS, animaciones integradas y SEO listo.</p>
                </div>

                <div className={`p-5 rounded-2xl border ${isDark ? 'bg-[#12121A] border-white/10' : 'bg-white border-[#E5E7EB]'}`}>
                  <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-3">
                    <Smartphone className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-sm">Ultra Responsive</h4>
                  <p className="text-xs text-neutral-400 mt-1 leading-relaxed">Diseños probados en iPhone, Android, tablets y pantallas 4K.</p>
                </div>
              </div>
            </div>

            {/* Proyectos recientes */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold tracking-tight">Proyectos recientes</h2>
                {sites.length > 0 && (
                  <button
                    onClick={() => setActiveNav('sites')}
                    className="text-xs text-[#00E5FF] hover:underline font-bold cursor-pointer"
                  >
                    Ver todos ({sites.length})
                  </button>
                )}
              </div>

              {sites.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                  {sites.slice(0, 3).map((site) => (
                    <div
                      key={site.id}
                      className={`rounded-3xl border overflow-hidden transition-all group flex flex-col justify-between hover:border-[#00E5FF]/50 ${
                        isDark ? 'bg-[#12121A] border-white/10' : 'bg-white border-[#E5E7EB] shadow-sm'
                      }`}
                    >
                      <div>
                        <div className="aspect-[16/10] bg-slate-900 relative overflow-hidden">
                          <img
                            src={site.seo.ogImage || site.sections.hero.imageUrl || 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80'}
                            alt={site.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-bold text-white uppercase tracking-wider">
                            Borrador
                          </div>
                          <div
                            className="absolute top-2.5 left-2.5 w-3.5 h-3.5 rounded-full border border-white/40 shadow"
                            style={{ backgroundColor: site.accentColor }}
                          />
                        </div>

                        <div className="p-4 space-y-1">
                          <h3 className="font-bold text-sm text-slate-900 dark:text-white truncate">
                            {site.name}
                          </h3>
                          <p className="text-[11px] text-slate-500 dark:text-neutral-400">
                            {formatRelativeTime(site.updatedAt)}
                          </p>
                        </div>
                      </div>

                      <div className="p-4 pt-0 flex items-center gap-2">
                        <button
                          onClick={() => onOpenEditor(site)}
                          className="flex-1 py-2 rounded-xl bg-slate-100 dark:bg-white/10 hover:bg-[#00E5FF] hover:text-black text-slate-800 dark:text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                        >
                          <Edit3 className="w-3.5 h-3.5" />
                          <span>Editar</span>
                        </button>
                        <button
                          onClick={() => onPreviewSite(site)}
                          className="p-2 rounded-xl bg-slate-100 dark:bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                          title="Vista previa"
                        >
                          <Eye className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => onOpenExport(site)}
                          className="p-2 rounded-xl bg-slate-100 dark:bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                          title="Exportar HTML"
                        >
                          <Download className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                /* Empty state card */
                <div
                  className={`p-8 rounded-3xl border text-center space-y-3 ${
                    isDark ? 'bg-[#12121A] border-white/10' : 'bg-white border-[#E5E7EB]'
                  }`}
                >
                  <Folder className="w-8 h-8 text-slate-400 mx-auto" />
                  <p className="text-sm font-semibold text-slate-600 dark:text-neutral-400">
                    Aún no has creado ningún sitio
                  </p>
                  <button
                    onClick={() => setIsWizardOpen(true)}
                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#00E5FF] to-[#FF00E5] text-black text-xs font-extrabold hover:scale-105 transition-transform cursor-pointer"
                  >
                    Crear mi primer sitio con Asistente
                  </button>
                </div>
              )}
            </div>

            {/* Banner de donación / Apoyo */}
            <div
              className={`p-5 rounded-3xl border flex flex-col sm:flex-row items-center justify-between gap-4 ${
                isDark
                  ? 'bg-gradient-to-r from-white/5 to-[#FF00E5]/10 border-white/10'
                  : 'bg-gradient-to-r from-slate-50 to-[#FF00E5]/5 border-[#E5E7EB]'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-[#FF00E5]/15 text-[#FF00E5] flex items-center justify-center shrink-0">
                  <Heart className="w-5 h-5 fill-[#FF00E5]" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-white">¿Te gusta 930 Studio?</h4>
                  <p className="text-xs text-slate-600 dark:text-neutral-400">
                    Apóyanos con una donación voluntaria en PayPal para que sigamos añadiendo plantillas y funciones.
                  </p>
                </div>
              </div>

              <button
                onClick={onOpenDonation}
                className="px-5 py-2.5 rounded-xl bg-[#0070BA] hover:bg-[#005ea6] text-white text-xs font-bold shrink-0 shadow-sm flex items-center gap-1.5 transition-all cursor-pointer"
              >
                <span>Donar con PayPal</span>
                <Heart className="w-3.5 h-3.5 fill-white" />
              </button>
            </div>
          </div>
        )}

        {/* ===================================================================== */}
        {/* VIEW B: PLANTILLAS (TEMPLATES) */}
        {/* ===================================================================== */}
        {activeNav === 'templates' && (
          <div className="p-6 md:p-10 max-w-6xl mx-auto w-full space-y-8">
            {/* Header */}
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Plantillas profesionales</h1>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-neutral-400 mt-1">
                Diseños listos para usar, optimizados para convertir visitantes en clientes.
              </p>
            </div>

            {/* Filters Row 1: Categories */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setCategoryFilter(cat.id)}
                    className={`px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                      categoryFilter === cat.id
                        ? 'bg-[#00E5FF] text-black shadow-[0_0_12px_rgba(0,229,255,0.4)]'
                        : isDark
                        ? 'bg-white/5 text-neutral-300 hover:bg-white/10'
                        : 'bg-white border border-[#E5E7EB] text-[#334155] hover:bg-[#F0F0F3]'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* Filters Row 2: Styles & Search */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
                <div className="flex items-center gap-2 overflow-x-auto scrollbar-none">
                  {styleOptions.map((style) => (
                    <button
                      key={style.id}
                      onClick={() => setStyleFilter(style.id)}
                      className={`px-3 py-1 rounded-lg text-[11px] font-semibold whitespace-nowrap transition-all border cursor-pointer ${
                        styleFilter === style.id
                          ? 'border-[#FF00E5] text-[#FF00E5] bg-[#FF00E5]/10'
                          : isDark
                          ? 'border-white/10 text-neutral-400 hover:text-white'
                          : 'border-[#E5E7EB] bg-white text-[#64748B] hover:text-[#0F172A] hover:border-[#D1D5DB]'
                      }`}
                    >
                      {style.label}
                    </button>
                  ))}
                </div>

                <div className="relative w-full sm:w-64">
                  <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Buscar plantillas..."
                    value={templateSearch}
                    onChange={(e) => setTemplateSearch(e.target.value)}
                    className={`w-full pl-8 pr-3 py-1.5 rounded-lg text-xs border focus:outline-none focus:border-[#00E5FF] focus:ring-2 focus:ring-[#00E5FF]/10 ${
                      isDark ? 'bg-[#181824] border-white/10 text-white' : 'bg-white border-[#D1D5DB] text-[#0F172A]'
                    }`}
                  />
                </div>
              </div>
            </div>

            {/* Template Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTemplates.map((template) => (
                <div
                  key={template.id}
                  className={`rounded-xl border overflow-hidden flex flex-col justify-between transition-all group ${
                    isDark
                      ? 'bg-[#12121A] border-white/10 hover:border-[#00E5FF]/60'
                      : 'bg-white border-[#E5E7EB] shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_12px_rgba(0,0,0,0.04)] hover:border-[#00E5FF] hover:shadow-[0_8px_24px_rgba(0,229,255,0.12)] hover:-translate-y-1'
                  }`}
                >
                  <div>
                    {/* Thumbnail */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                      <img
                        src={template.thumbnail}
                        alt={template.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider text-white border border-white/10">
                        {template.category}
                      </div>

                      {/* Accent Color Dot */}
                      <div
                        className="absolute top-3 right-3 w-4 h-4 rounded-full border-2 border-white shadow-sm"
                        style={{ backgroundColor: template.accentColor }}
                        title={`Color base: ${template.accentColor}`}
                      />
                    </div>

                    {/* Content */}
                    <div className="p-5 space-y-1.5">
                      <h3 className="font-extrabold text-base text-[#0F172A] dark:text-white">
                        {template.name}
                      </h3>
                      <p className="text-xs text-[#334155] dark:text-neutral-400 font-medium line-clamp-1">
                        {template.tagline}
                      </p>
                      <p className="text-xs text-[#64748B] dark:text-neutral-500 line-clamp-2 leading-relaxed pt-1">
                        {template.description}
                      </p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="p-5 pt-0 space-y-2">
                    <button
                      onClick={() => handleStartWizardWithTemplate(template.id)}
                      className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#00E5FF] to-[#FF00E5] hover:opacity-90 text-black text-xs font-black transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-[0_0_15px_rgba(0,229,255,0.25)]"
                    >
                      <Rocket className="w-3.5 h-3.5" />
                      <span>Crear con Asistente Rápido</span>
                    </button>
                    <button
                      onClick={() => handleOpenTemplateModal(template)}
                      className="w-full py-2 rounded-xl bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer border border-white/10"
                    >
                      <Sparkles className="w-3 h-3 text-[#00E5FF]" />
                      <span>Personalizar directo</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {filteredTemplates.length === 0 && (
              <div className="p-12 text-center text-slate-400 space-y-3">
                <Search className="w-8 h-8 mx-auto opacity-50" />
                <p className="text-sm">No se encontraron plantillas con los filtros aplicados.</p>
                <button
                  onClick={() => {
                    setCategoryFilter('all');
                    setStyleFilter('all');
                    setTemplateSearch('');
                  }}
                  className="px-4 py-1.5 rounded-xl bg-[#00E5FF] text-black text-xs font-bold cursor-pointer"
                >
                  Restablecer filtros
                </button>
              </div>
            )}
          </div>
        )}

        {/* ===================================================================== */}
        {/* VIEW C: MIS SITIOS (MY SITES) */}
        {/* ===================================================================== */}
        {activeNav === 'sites' && (
          <div className="p-6 md:p-10 max-w-6xl mx-auto w-full space-y-8">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Mis sitios</h1>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-neutral-400 mt-1">
                  Administra, edita y exporta tus proyectos web guardados localmente.
                </p>
              </div>

              <button
                onClick={() => setActiveNav('templates')}
                className="px-5 py-2.5 rounded-2xl bg-[#00E5FF] hover:bg-[#00b4d8] text-black text-xs font-extrabold shadow-[0_0_15px_rgba(0,229,255,0.3)] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span>Nuevo sitio</span>
              </button>
            </div>

            {/* Search Bar */}
            {sites.length > 0 && (
              <div className="relative max-w-md">
                <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Buscar en mis sitios..."
                  value={siteSearch}
                  onChange={(e) => setSiteSearch(e.target.value)}
                  className={`w-full pl-8 pr-3 py-2 rounded-xl text-xs border focus:outline-none focus:border-[#00E5FF] ${
                    isDark ? 'bg-[#181824] border-white/10 text-white' : 'bg-white border-[#E5E7EB] text-slate-900'
                  }`}
                />
              </div>
            )}

            {/* Sites Grid */}
            {filteredSites.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSites.map((site) => (
                  <div
                    key={site.id}
                    className={`rounded-3xl border overflow-hidden flex flex-col justify-between transition-all group hover:border-[#00E5FF]/40 ${
                      isDark ? 'bg-[#12121A] border-white/10' : 'bg-white border-[#E5E7EB] shadow-sm'
                    }`}
                  >
                    <div>
                      {/* Thumbnail with overlay */}
                      <div className="relative aspect-[16/10] bg-slate-950 overflow-hidden">
                        <img
                          src={site.seo.ogImage || site.sections.hero.imageUrl || 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80'}
                          alt={site.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-3 left-3 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-bold text-white uppercase tracking-wider">
                          Borrador
                        </div>
                        <div
                          className="absolute top-3 right-3 w-3.5 h-3.5 rounded-full border-2 border-white shadow"
                          style={{ backgroundColor: site.accentColor }}
                        />
                      </div>

                      {/* Site Info */}
                      <div className="p-5 space-y-1">
                        <h3 className="font-extrabold text-base text-slate-900 dark:text-white truncate">
                          {site.name}
                        </h3>
                        <p className="text-xs text-slate-500 dark:text-neutral-400 flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          <span>{formatRelativeTime(site.updatedAt)}</span>
                        </p>
                      </div>
                    </div>

                    {/* Site Actions */}
                    <div className="p-5 pt-0 space-y-2">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => onOpenEditor(site)}
                          className="flex-1 py-2 rounded-xl bg-[#00E5FF] hover:bg-[#00b4d8] text-black text-xs font-extrabold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                        >
                          <Edit3 className="w-3.5 h-3.5" />
                          <span>Editar</span>
                        </button>
                        <button
                          onClick={() => onOpenExport(site)}
                          className="px-3 py-2 rounded-xl bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 text-slate-800 dark:text-white text-xs font-bold transition-all flex items-center justify-center gap-1 cursor-pointer"
                          title="Exportar archivo HTML"
                        >
                          <Download className="w-3.5 h-3.5" />
                          <span>Exportar</span>
                        </button>
                      </div>

                      {/* Context actions: Duplicar / Eliminar */}
                      <div className="flex items-center justify-between pt-1 text-xs text-slate-500 dark:text-neutral-400">
                        <button
                          onClick={() => onDuplicateSite(site)}
                          className="hover:text-[#00E5FF] flex items-center gap-1 transition-colors cursor-pointer"
                        >
                          <Copy className="w-3 h-3" />
                          <span>Duplicar</span>
                        </button>
                        <button
                          onClick={() => setSiteToDelete(site)}
                          className="hover:text-rose-500 flex items-center gap-1 transition-colors cursor-pointer"
                        >
                          <Trash2 className="w-3 h-3" />
                          <span>Eliminar</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              /* Empty state */
              <div
                className={`p-12 rounded-3xl border text-center space-y-4 max-w-md mx-auto my-8 ${
                  isDark ? 'bg-[#12121A] border-white/10' : 'bg-white border-[#E5E7EB]'
                }`}
              >
                <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-white/5 flex items-center justify-center mx-auto text-slate-400">
                  <Folder className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    No tienes sitios todavía
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-neutral-400">
                    Comienza eligiendo cualquiera de nuestras plantillas gratuitas.
                  </p>
                </div>
                <button
                  onClick={() => setActiveNav('templates')}
                  className="px-6 py-2.5 rounded-xl bg-[#00E5FF] hover:bg-[#00b4d8] text-black text-xs font-extrabold shadow-sm transition-all cursor-pointer"
                >
                  Crear mi primer sitio
                </button>
              </div>
            )}
          </div>
        )}

        {/* ===================================================================== */}
        {/* VIEW C2: 100% GRATIS & DONACIONES (PAYPAL DONATION HUB) */}
        {/* ===================================================================== */}
        {activeNav === 'donations' && (
          <div className="p-6 md:p-10 max-w-5xl mx-auto w-full space-y-10">
            {/* Header Banner */}
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-xs font-bold text-white border border-[#FF00E5]/40 shadow-[0_0_20px_rgba(255,0,229,0.25)]">
                <Heart className="w-3.5 h-3.5 text-[#FF00E5] fill-[#FF00E5]" />
                <span>100% Libre & Sin Costes • Proyecto Independiente</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
                930 Studio es <span className="bg-gradient-to-r from-[#00E5FF] via-[#00B4D8] to-[#FF00E5] bg-clip-text text-transparent">100% Gratis</span> para todos
              </h1>
              <p className="text-sm sm:text-base text-neutral-300 max-w-2xl mx-auto leading-relaxed">
                Sin precios, sin muros de pago ni suscripciones mensuales. Todas las plantillas, el editor visual, el asistente rápido y la exportación de código son totalmente libres. Aceptamos donativos voluntarios vía PayPal para apoyar el mantenimiento de la plataforma y el diseño de nuevos componentes.
              </p>
            </div>

            {/* Interactive PayPal Donation Card */}
            <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-[#181828] to-[#12121A] p-7 md:p-10 shadow-[0_0_40px_rgba(0,229,255,0.15)] relative overflow-hidden space-y-8">
              <div className="absolute top-0 right-0 w-80 h-80 bg-[#FF00E5]/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#00E5FF]/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
                  <div>
                    <h3 className="text-xl font-black text-white flex items-center gap-2">
                      <Heart className="w-5 h-5 text-[#FF00E5] fill-[#FF00E5]" />
                      <span>Hacer una Donación Voluntaria con PayPal</span>
                    </h3>
                    <p className="text-xs text-neutral-400 mt-1">
                      Elige el importe con el que deseas respaldar el proyecto o introduce una cantidad personalizada.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#00FF88]/10 text-[#00FF88] text-xs font-bold border border-[#00FF88]/30 shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Pago Seguro vía PayPal</span>
                  </div>
                </div>

                {/* Donation Tiers Grid */}
                <div className="space-y-4">
                  <label className="text-xs font-bold text-neutral-300 block">
                    Selecciona tu aportación (USD / EUR):
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[
                      { amount: 3, label: '1 Café', emoji: '☕', desc: 'Agradecimiento' },
                      { amount: 5, label: 'Desayuno', emoji: '🥐', desc: 'Hosting libre' },
                      { amount: 10, label: 'Impulso', emoji: '🚀', desc: 'Nuevas plantillas' },
                      { amount: 25, label: 'Patrocinador', emoji: '💎', desc: 'Apoyo destacado' }
                    ].map((tier) => (
                      <button
                        key={tier.amount}
                        type="button"
                        onClick={() => {
                          setSelectedDonationTier(tier.amount);
                          setCustomDonationInput('');
                        }}
                        className={`p-4 rounded-2xl border text-center transition-all cursor-pointer ${
                          selectedDonationTier === tier.amount && !customDonationInput
                            ? 'border-[#00E5FF] bg-[#00E5FF]/15 text-white ring-2 ring-[#00E5FF] shadow-[0_0_20px_rgba(0,229,255,0.3)] font-bold scale-102'
                            : 'bg-white/5 border-white/10 text-neutral-300 hover:border-white/20 hover:bg-white/10'
                        }`}
                      >
                        <div className="text-2xl mb-1">{tier.emoji}</div>
                        <div className="text-lg font-black text-white">${tier.amount}</div>
                        <div className="text-xs text-neutral-400 truncate">{tier.label}</div>
                      </button>
                    ))}
                  </div>

                  {/* Custom input */}
                  <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                    <span className="text-xs text-neutral-400 font-medium shrink-0">O introduce una cantidad personalizada:</span>
                    <div className="relative flex-1 w-full">
                      <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-neutral-400">$</span>
                      <input
                        type="number"
                        min="1"
                        placeholder="Ej. 50"
                        value={customDonationInput}
                        onChange={(e) => {
                          setCustomDonationInput(e.target.value);
                          if (e.target.value) setSelectedDonationTier(Number(e.target.value));
                        }}
                        className="w-full pl-8 pr-3 py-2.5 rounded-xl text-xs font-bold border border-white/10 bg-[#161622] text-white focus:outline-none focus:border-[#00E5FF] focus:ring-1 focus:ring-[#00E5FF]"
                      />
                    </div>
                  </div>
                </div>

                {/* Primary PayPal Action Button */}
                <div className="pt-2 space-y-4">
                  <button
                    onClick={handlePayPalDirectDonate}
                    className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#00E5FF] via-[#00B4D8] to-[#FF00E5] text-black text-sm font-black flex items-center justify-center gap-2.5 shadow-[0_0_30px_rgba(0,229,255,0.4)] hover:scale-[1.02] transition-all cursor-pointer"
                  >
                    <Heart className="w-5 h-5 fill-black" />
                    <span>Donar ${customDonationInput ? customDonationInput : selectedDonationTier} USD con PayPal</span>
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </button>

                  <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 text-xs">
                    <div className="text-neutral-300">
                      <span className="text-neutral-400">Dirección directa de PayPal: </span>
                      <strong className="text-white font-mono">rafa.930music@gmail.com</strong>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        navigator.clipboard.writeText('rafa.930music@gmail.com');
                        setCopiedPaypalEmail(true);
                        setTimeout(() => setCopiedPaypalEmail(false), 2000);
                      }}
                      className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-neutral-200 text-xs font-bold transition-colors cursor-pointer shrink-0"
                    >
                      {copiedPaypalEmail ? '✓ Copiado al portapapeles' : 'Copiar email PayPal'}
                    </button>
                  </div>
                </div>

                {hasTriggeredDonation && (
                  <div className="p-4 rounded-2xl bg-[#00FF88]/15 border border-[#00FF88]/30 text-[#00FF88] text-xs font-bold text-center flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,255,136,0.2)]">
                    <Sparkles className="w-4 h-4" />
                    <span>¡Muchísimas gracias por apoyar a 930 Studio y mantener el proyecto vivo!</span>
                  </div>
                )}
              </div>
            </div>

            {/* Transparencia: Todo lo que incluye 930 Studio 100% Gratis */}
            <div className="space-y-6">
              <div>
                <h2 className="text-xl md:text-2xl font-extrabold tracking-tight">Todo lo incluido, 100% Libre</h2>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-neutral-400">
                  Ninguna función está bloqueada detrás de pagos o registros.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="p-6 rounded-3xl border border-white/10 bg-[#12121A] space-y-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#00E5FF]/10 text-[#00E5FF] border border-[#00E5FF]/30 flex items-center justify-center">
                    <LayoutGrid className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-base text-white">Todas las Plantillas Libres</h3>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    Acceso irrestricto a todo el catálogo de SaaS, E-commerce, Portafolios, ONG, Salud, Hostelería, Lujo y Educación.
                  </p>
                </div>

                <div className="p-6 rounded-3xl border border-white/10 bg-[#12121A] space-y-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#FF00E5]/10 text-[#FF00E5] border border-[#FF00E5]/30 flex items-center justify-center">
                    <Rocket className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-base text-white">Asistente & Editor Visual</h3>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    Personaliza textos, colores, tipografías, orden de bloques y enlaces con previsualización responsive en tiempo real.
                  </p>
                </div>

                <div className="p-6 rounded-3xl border border-white/10 bg-[#12121A] space-y-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#00FF88]/10 text-[#00FF88] border border-[#00FF88]/30 flex items-center justify-center">
                    <Download className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-base text-white">Exportación HTML & ZIP Limpia</h3>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    Descarga tu código fuente autónomo sin dependencias complejas, listo para Netlify, Vercel, GitHub Pages o cPanel.
                  </p>
                </div>

                <div className="p-6 rounded-3xl border border-white/10 bg-[#12121A] space-y-3">
                  <div className="w-10 h-10 rounded-2xl bg-amber-400/10 text-amber-400 border border-amber-400/30 flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-base text-white">Uso Comercial Ilimitado</h3>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    Crea sitios web para ti o tus clientes y cóbrales lo que consideres justo sin pagar ninguna comisión o canon.
                  </p>
                </div>

                <div className="p-6 rounded-3xl border border-white/10 bg-[#12121A] space-y-3">
                  <div className="w-10 h-10 rounded-2xl bg-indigo-400/10 text-indigo-400 border border-indigo-400/30 flex items-center justify-center">
                    <Folder className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-base text-white">Privacidad & Almacenamiento Local</h3>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    Tus proyectos se guardan en tu navegador sin requerir cuentas de usuario ni rastreo de datos.
                  </p>
                </div>

                <div className="p-6 rounded-3xl border border-white/10 bg-[#12121A] space-y-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#00E5FF]/10 text-[#00E5FF] border border-[#00E5FF]/30 flex items-center justify-center">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-base text-white">Sin Marcas de Agua Forzadas</h3>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    El código generado es 100% tuyo, limpio, semántico y preparado para SEO de primer nivel.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom CTA to start creating */}
            <div className="p-8 rounded-3xl border border-white/10 bg-[#12121A] flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-1">
                <h4 className="text-lg font-bold text-white">¿Listo para crear tu próximo sitio web?</h4>
                <p className="text-xs text-neutral-400">
                  Explora las plantillas o genera una web al instante con el Asistente Rápido.
                </p>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <button
                  onClick={() => setActiveNav('templates')}
                  className="px-5 py-3 rounded-2xl border border-white/10 hover:bg-white/10 text-white font-bold text-xs transition-colors cursor-pointer"
                >
                  Ver Plantillas
                </button>
                <button
                  onClick={() => setIsWizardOpen(true)}
                  className="px-6 py-3 rounded-2xl bg-gradient-to-r from-[#00E5FF] to-[#FF00E5] text-black font-extrabold text-xs shadow-md transition-transform hover:scale-105 cursor-pointer"
                >
                  Empezar con Asistente
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ===================================================================== */}
        {/* VIEW D: GUÍA (GUIDE) */}
        {/* ===================================================================== */}
        {activeNav === 'guide' && (
          <div className="p-6 md:p-10 max-w-4xl mx-auto w-full space-y-8">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Guía de Uso y Publicación</h1>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-neutral-400 mt-1">
                Aprende a personalizar tu sitio en 930 Studio y publicarlo en cualquier hosting sin costes.
              </p>
            </div>

            {/* Accordions */}
            <div className="space-y-4">
              {/* Accordion 1: Primeros pasos */}
              <div
                className={`rounded-2xl border overflow-hidden transition-all ${
                  isDark ? 'bg-[#12121A] border-white/10' : 'bg-white border-[#E5E7EB]'
                }`}
              >
                <button
                  onClick={() => toggleAccordion('guide-1')}
                  className="w-full p-5 text-left flex items-center justify-between font-bold text-sm sm:text-base gap-3 cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-[#00E5FF]/10 text-[#00E5FF] flex items-center justify-center text-xs font-extrabold">
                      1
                    </div>
                    <span>Primeros pasos: Elegir plantilla y crear proyecto</span>
                  </div>
                  {openAccordions['guide-1'] ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>

                {openAccordions['guide-1'] && (
                  <div className="p-5 pt-0 text-xs sm:text-sm text-slate-600 dark:text-neutral-300 space-y-3 leading-relaxed border-t border-inherit">
                    <p>
                      En la pestaña <strong>Plantillas</strong>, encontrarás diseños para diversas categorías (SaaS, Hardware, Agencias, Lujo, Salud, Restaurantes, etc.).
                    </p>
                    <ol className="list-decimal list-inside space-y-1.5 pl-2">
                      <li>Haz clic en <strong>Elegir esta plantilla</strong>.</li>
                      <li>Personaliza el nombre de tu proyecto y selecciona un color de acento neón.</li>
                      <li>Presiona <strong>Comenzar a editar</strong> para abrir el editor visual en vivo.</li>
                    </ol>
                  </div>
                )}
              </div>

              {/* Accordion 2: Editor visual */}
              <div
                className={`rounded-2xl border overflow-hidden transition-all ${
                  isDark ? 'bg-[#12121A] border-white/10' : 'bg-white border-[#E5E7EB]'
                }`}
              >
                <button
                  onClick={() => toggleAccordion('guide-2')}
                  className="w-full p-5 text-left flex items-center justify-between font-bold text-sm sm:text-base gap-3 cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-[#FF00E5]/10 text-[#FF00E5] flex items-center justify-center text-xs font-extrabold">
                      2
                    </div>
                    <span>Editor visual: Paneles, arrastre y edición en vivo</span>
                  </div>
                  {openAccordions['guide-2'] ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>

                {openAccordions['guide-2'] && (
                  <div className="p-5 pt-0 text-xs sm:text-sm text-slate-600 dark:text-neutral-300 space-y-3 leading-relaxed border-t border-inherit">
                    <p>
                      El editor de 930 Studio se organiza en 3 áreas intuitivas:
                    </p>
                    <ul className="list-disc list-inside space-y-1.5 pl-2">
                      <li><strong>Panel izquierdo (Secciones):</strong> Reordena secciones arrastrándolas con el icono de agarre, ocúltalas o añade nuevas secciones desde el catálogo.</li>
                      <li><strong>Lienzo central:</strong> Visualiza en tiempo real y alterna entre vista de Escritorio, Tableta y Móvil.</li>
                      <li><strong>Panel derecho (Inspector):</strong> Modifica contenidos, colores, radios de bordes, espaciados y metadatos SEO.</li>
                    </ul>
                    <p className="text-xs text-slate-400 dark:text-neutral-500 pt-1">
                      * El guardado es automático en tu almacenamiento local.
                    </p>
                  </div>
                )}
              </div>

              {/* Accordion 3: Exportar y publicar */}
              <div
                className={`rounded-2xl border overflow-hidden transition-all ${
                  isDark ? 'bg-[#12121A] border-white/10' : 'bg-white border-[#E5E7EB]'
                }`}
              >
                <button
                  onClick={() => toggleAccordion('guide-3')}
                  className="w-full p-5 text-left flex items-center justify-between font-bold text-sm sm:text-base gap-3 cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-[#00FF88]/10 text-[#00FF88] flex items-center justify-center text-xs font-extrabold">
                      3
                    </div>
                    <span>Exportar y publicar: Netlify, Vercel, GitHub Pages y FTP</span>
                  </div>
                  {openAccordions['guide-3'] ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>

                {openAccordions['guide-3'] && (
                  <div className="p-5 pt-0 text-xs sm:text-sm text-slate-600 dark:text-neutral-300 space-y-4 leading-relaxed border-t border-inherit">
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5 mb-1">
                        <UploadCloud className="w-4 h-4 text-[#00E5FF]" />
                        1. Netlify Drop (La opción más rápida - 100% Gratis)
                      </h4>
                      <p>
                        Ve a <a href="https://app.netlify.com/drop" target="_blank" rel="noreferrer" className="text-[#00E5FF] underline font-bold">netlify.com/drop</a> y arrastra tu archivo <code>index.html</code> o la carpeta descargada en ZIP. En 5 segundos tendrás un enlace activo con HTTPS gratuito.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5 mb-1">
                        <Terminal className="w-4 h-4 text-[#FF00E5]" />
                        2. Vercel
                      </h4>
                      <p>
                        Instala Vercel CLI con <code>npm i -g vercel</code> o sube la carpeta a tu cuenta de Vercel desde el panel web para obtener un dominio instantáneo de alta velocidad.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5 mb-1">
                        <Globe className="w-4 h-4 text-[#00FF88]" />
                        3. GitHub Pages
                      </h4>
                      <p>
                        Crea un repositorio en GitHub, sube tu archivo <code>index.html</code> y activa GitHub Pages en <em>Settings &gt; Pages</em>.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5 mb-1">
                        <FileCode className="w-4 h-4 text-amber-400" />
                        4. Hosting Tradicional (cPanel / FTP)
                      </h4>
                      <p>
                        Conéctate por FileZilla o el Administrador de Archivos de tu cPanel y sube el <code>index.html</code> a la carpeta <code>public_html</code>.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Accordion 4: Preguntas frecuentes */}
              <div
                className={`rounded-2xl border overflow-hidden transition-all ${
                  isDark ? 'bg-[#12121A] border-white/10' : 'bg-white border-[#E5E7EB]'
                }`}
              >
                <button
                  onClick={() => toggleAccordion('guide-4')}
                  className="w-full p-5 text-left flex items-center justify-between font-bold text-sm sm:text-base gap-3 cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center text-xs font-extrabold">
                      ?
                    </div>
                    <span>Preguntas frecuentes</span>
                  </div>
                  {openAccordions['guide-4'] ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>

                {openAccordions['guide-4'] && (
                  <div className="p-5 pt-0 text-xs sm:text-sm text-slate-600 dark:text-neutral-300 space-y-3 leading-relaxed border-t border-inherit">
                    <div>
                      <p className="font-bold text-slate-900 dark:text-white">¿Es realmente 100% gratis?</p>
                      <p>Sí. No cobramos suscripciones ni bloqueamos la exportación de código.</p>
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 dark:text-white">¿Puedo usar los sitios para proyectos comerciales o clientes?</p>
                      <p>Absolutamente. Eres el dueño total del código HTML generado y puedes usarlo con clientes, venderlo o monetizarlo libremente.</p>
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 dark:text-white">¿Cómo puedo apoyar el proyecto?</p>
                      <p>
                        Aceptamos donaciones voluntarias a través de PayPal para continuar manteniendo 930 Studio y diseñando nuevas plantillas.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ===================================================================== */}
        {/* VIEW E: AJUSTES (SETTINGS) */}
        {/* ===================================================================== */}
        {activeNav === 'settings' && (
          <div className="p-6 md:p-10 max-w-3xl mx-auto w-full space-y-8">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Ajustes</h1>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-neutral-400 mt-1">
                Preferencias de la plataforma y almacenamiento local.
              </p>
            </div>

            <div
              className={`rounded-3xl border divide-y overflow-hidden ${
                isDark ? 'bg-[#12121A] border-white/10 divide-white/10' : 'bg-white border-[#E5E7EB] divide-slate-100'
              }`}
            >
              {/* Modo oscuro info */}
              <div className="p-6 flex items-center justify-between">
                <div className="space-y-0.5">
                  <h3 className="font-bold text-sm text-white">Modo oscuro permanente</h3>
                  <p className="text-xs text-neutral-400">
                    930 Studio está optimizado en modo oscuro con acentos neón (#0A0A0F / #00E5FF).
                  </p>
                </div>
                <div className="px-3 py-1 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/30 text-xs font-bold text-[#00E5FF]">
                  Activo
                </div>
              </div>

              {/* Selector de idioma */}
              <div className="p-6 flex items-center justify-between">
                <div className="space-y-0.5">
                  <h3 className="font-bold text-sm text-slate-900 dark:text-white">Idioma de la interfaz</h3>
                  <p className="text-xs text-slate-500 dark:text-neutral-400">
                    Actualmente configurado en Español.
                  </p>
                </div>
                <select
                  disabled
                  value="es"
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold border ${
                    isDark ? 'bg-[#181824] border-white/10 text-white' : 'bg-slate-50 border-[#E5E7EB] text-slate-800'
                  }`}
                >
                  <option value="es">Español (ES)</option>
                </select>
              </div>

              {/* Información de versión & almacenamiento */}
              <div className="p-6 flex items-center justify-between">
                <div className="space-y-0.5">
                  <h3 className="font-bold text-sm text-slate-900 dark:text-white">Almacenamiento Local</h3>
                  <p className="text-xs text-slate-500 dark:text-neutral-400">
                    {sites.length} {sites.length === 1 ? 'sitio guardado' : 'sitios guardados'} en localStorage.
                  </p>
                </div>
                <span className="text-xs font-mono px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-neutral-400">
                  930 Studio v1.0.0
                </span>
              </div>

              {/* Pantalla de presentación (Splash Screen) */}
              <div className="p-6 flex items-center justify-between">
                <div className="space-y-0.5">
                  <h3 className="font-bold text-sm text-slate-900 dark:text-white">Pantalla de presentación (Splash Screen)</h3>
                  <p className="text-xs text-slate-500 dark:text-neutral-400">
                    Presentación minimalista con el logotipo neón al inicio.
                  </p>
                </div>
                <button
                  onClick={() => {
                    try {
                      localStorage.removeItem('splashSeen');
                    } catch (e) {
                      console.warn('Error clearing splashSeen:', e);
                    }
                    if (onTriggerSplash) {
                      onTriggerSplash();
                    }
                  }}
                  className="px-3.5 py-2 rounded-xl bg-white/10 hover:bg-[#00E5FF] hover:text-black border border-white/10 text-white text-xs font-bold transition-all cursor-pointer shadow-sm flex items-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Reactivar Splash Screen</span>
                </button>
              </div>

              {/* Restablecer datos */}
              <div className="p-6 flex items-center justify-between">
                <div className="space-y-0.5">
                  <h3 className="font-bold text-sm text-rose-600">Restablecer datos</h3>
                  <p className="text-xs text-slate-500 dark:text-neutral-400">
                    Borra todos los sitios creados y restablece la configuración inicial.
                  </p>
                </div>
                <button
                  onClick={() => setIsResetConfirmOpen(true)}
                  className="px-4 py-2 rounded-xl border border-rose-500/30 text-rose-600 hover:bg-rose-500/10 text-xs font-bold transition-all cursor-pointer"
                >
                  Restablecer
                </button>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* ========================================================================= */}
      {/* 3. MODAL: ELEGIR PLANTILLA Y CREAR PROYECTO */}
      {/* ========================================================================= */}
      {selectedTemplateForModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
          <div
            className={`rounded-2xl border max-w-xl w-full overflow-hidden shadow-2xl flex flex-col ${
              isDark ? 'bg-[#12121A] border-white/10 text-white' : 'bg-white border-[#E5E7EB] text-[#0F172A]'
            }`}
          >
            {/* Modal Header */}
            <div className="p-6 border-b border-inherit flex items-center justify-between">
              <div>
                <h3 className="font-extrabold text-lg">Comenzar con {selectedTemplateForModal.name}</h3>
                <p className="text-xs text-[#64748B] dark:text-neutral-400">{selectedTemplateForModal.tagline}</p>
              </div>
              <button
                onClick={() => setSelectedTemplateForModal(null)}
                className="p-1.5 text-[#64748B] hover:text-[#0F172A] dark:hover:text-white rounded-lg hover:bg-[#F0F0F3] dark:hover:bg-white/5 cursor-pointer transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-5 overflow-y-auto max-h-[75vh]">
              {/* Preview image */}
              <div className="aspect-[16/9] rounded-xl overflow-hidden bg-slate-900 border border-[#E5E7EB] dark:border-white/10 relative">
                <img
                  src={selectedTemplateForModal.thumbnail}
                  alt={selectedTemplateForModal.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-white">
                  Plantilla: {selectedTemplateForModal.name}
                </div>
              </div>

              {/* Project name input */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-[#0F172A] dark:text-neutral-300">
                  Nombre del proyecto:
                </label>
                <input
                  type="text"
                  value={modalProjectName}
                  onChange={(e) => setModalProjectName(e.target.value)}
                  placeholder="Ej. Mi Nuevo Sitio Web"
                  className={`w-full px-3.5 py-2.5 rounded-lg text-xs font-semibold border focus:outline-none focus:border-[#00E5FF] focus:ring-2 focus:ring-[#00E5FF]/10 ${
                    isDark ? 'bg-[#181824] border-white/10 text-white' : 'bg-white border-[#D1D5DB] text-[#0F172A]'
                  }`}
                />
              </div>

              {/* Accent Color Picker (5 neon options) */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-[#0F172A] dark:text-neutral-300 block">
                  Color de acento neón:
                </label>
                <div className="grid grid-cols-5 gap-2">
                  {neonColorOptions.map((opt) => (
                    <button
                      key={opt.color}
                      type="button"
                      onClick={() => setModalAccentColor(opt.color)}
                      className={`p-2.5 rounded-lg border text-center transition-all flex flex-col items-center gap-1.5 cursor-pointer ${
                        modalAccentColor === opt.color
                          ? 'border-[#00E5FF] ring-2 ring-[#00E5FF]/20 bg-white dark:bg-white/10 shadow-xs font-bold'
                          : isDark
                          ? 'border-white/5 bg-white/5 text-neutral-400'
                          : 'border-[#E5E7EB] bg-[#FAFAFC] text-[#334155] hover:border-[#D1D5DB]'
                      }`}
                    >
                      <div
                        className="w-5 h-5 rounded-full shadow-xs"
                        style={{ backgroundColor: opt.color }}
                      />
                      <span className="text-[10px] truncate max-w-full font-medium">{opt.label.split(' ')[0]}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-inherit flex items-center justify-end gap-2 bg-[#FAFAFC] dark:bg-white/[0.02]">
              <button
                onClick={() => setSelectedTemplateForModal(null)}
                className="px-4 py-2.5 rounded-lg text-xs font-semibold text-[#64748B] hover:text-[#0F172A] dark:text-neutral-400 hover:bg-[#F0F0F3] dark:hover:bg-white/10 cursor-pointer transition-colors"
              >
                Cancelar
              </button>
              <button
                onClick={handleConfirmCreateFromModal}
                className="px-5 py-2.5 rounded-lg bg-[#0F172A] hover:bg-[#1E293B] text-white text-xs font-bold shadow-xs flex items-center gap-1.5 cursor-pointer transition-colors"
              >
                <span>Comenzar a editar</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 4. MODAL: CONFIRMAR ELIMINACIÓN DE SITIO */}
      {/* ========================================================================= */}
      {siteToDelete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
          <div
            className={`rounded-2xl border max-w-sm w-full p-6 space-y-4 shadow-2xl ${
              isDark ? 'bg-[#12121A] border-white/10 text-white' : 'bg-white border-[#E5E7EB] text-[#0F172A]'
            }`}
          >
            <div className="w-10 h-10 rounded-xl bg-rose-500/15 text-rose-500 flex items-center justify-center mx-auto">
              <Trash2 className="w-5 h-5" />
            </div>
            <div className="text-center space-y-1">
              <h3 className="font-extrabold text-base">¿Eliminar sitio?</h3>
              <p className="text-xs text-[#64748B] dark:text-neutral-400">
                Se eliminará permanentemente el sitio <strong>&ldquo;{siteToDelete.name}&rdquo;</strong>. Esta acción no se puede deshacer.
              </p>
            </div>
            <div className="flex items-center gap-2 pt-2">
              <button
                onClick={() => setSiteToDelete(null)}
                className="flex-1 py-2.5 rounded-lg text-xs font-semibold border border-[#D1D5DB] dark:border-white/10 hover:bg-[#F0F0F3] dark:hover:bg-white/5 cursor-pointer transition-colors"
              >
                Cancelar
              </button>
              <button
                onClick={() => {
                  onDeleteSite(siteToDelete.id);
                  setSiteToDelete(null);
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
      {/* 5. MODAL: CONFIRMAR RESTABLECER TODOS LOS DATOS */}
      {/* ========================================================================= */}
      {isResetConfirmOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
          <div
            className={`rounded-2xl border max-w-sm w-full p-6 space-y-4 shadow-2xl ${
              isDark ? 'bg-[#12121A] border-white/10 text-white' : 'bg-white border-[#E5E7EB] text-[#0F172A]'
            }`}
          >
            <div className="w-10 h-10 rounded-xl bg-rose-500/15 text-rose-500 flex items-center justify-center mx-auto">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div className="text-center space-y-1">
              <h3 className="font-extrabold text-base">Restablecer datos</h3>
              <p className="text-xs text-[#64748B] dark:text-neutral-400">
                Se borrarán todos tus sitios guardados en 930 Studio. ¿Continuar?
              </p>
            </div>
            <div className="flex items-center gap-2 pt-2">
              <button
                onClick={() => setIsResetConfirmOpen(false)}
                className="flex-1 py-2.5 rounded-lg text-xs font-semibold border border-[#D1D5DB] dark:border-white/10 hover:bg-[#F0F0F3] dark:hover:bg-white/5 cursor-pointer transition-colors"
              >
                Cancelar
              </button>
              <button
                onClick={() => {
                  if (onResetAllData) onResetAllData();
                  setIsResetConfirmOpen(false);
                }}
                className="flex-1 py-2.5 rounded-lg text-xs font-bold bg-rose-600 hover:bg-rose-700 text-white shadow-xs cursor-pointer transition-colors"
              >
                Sí, restablecer
              </button>
            </div>
          </div>
        </div>
      )}
      {/* ========================================================================= */}
      {/* 6. MODAL: ASISTENTE DE CREACIÓN (CREATION WIZARD) */}
      {/* ========================================================================= */}
      <CreationWizardModal
        isOpen={isWizardOpen}
        onClose={() => setIsWizardOpen(false)}
        onSiteCreated={handleWizardSiteCreated}
        initialTemplateId={wizardInitialTemplateId}
      />

      {/* ========================================================================= */}
      {/* 7. MODAL: TOUR RÁPIDO (QUICK START TOUR) */}
      {/* ========================================================================= */}
      <QuickStartTourModal
        isOpen={isTourOpen}
        onClose={() => setIsTourOpen(false)}
        onStartCreating={() => {
          setIsTourOpen(false);
          setIsWizardOpen(true);
        }}
      />
    </div>
  );
};
