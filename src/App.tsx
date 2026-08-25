import React, { useState, useEffect } from 'react';
import { SiteConfig, Template } from './types';
import { TEMPLATES, createSiteFromTemplate } from './data/templates';
import { Dashboard } from './components/Dashboard';
import { VisualEditor } from './components/VisualEditor';
import { WebsiteRenderer } from './components/WebsiteRenderer';
import { DonationModal } from './components/DonationModal';
import { ExportModal } from './components/ExportModal';
import { ArrowLeft, Monitor, Tablet, Smartphone, Sparkles, Heart } from 'lucide-react';

const STORAGE_KEY = '930studio_sites';
const LEGACY_STORAGE_KEY = 'appleweb_studio_sites';
const THEME_STORAGE_KEY = '930studio_theme';
const LEGACY_THEME_STORAGE_KEY = 'appleweb_theme_dark';

export default function App() {
  const [view, setView] = useState<'dashboard' | 'editor' | 'preview'>('dashboard');
  const [sites, setSites] = useState<SiteConfig[]>([]);
  const [selectedSite, setSelectedSite] = useState<SiteConfig | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [isDark, setIsDark] = useState<boolean>(() => {
    try {
      const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
      if (savedTheme !== null) {
        return savedTheme === 'dark';
      }
      const legacyTheme = localStorage.getItem(LEGACY_THEME_STORAGE_KEY);
      if (legacyTheme !== null) {
        return legacyTheme === 'true';
      }
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    } catch {
      return false;
    }
  });

  // Global modals
  const [isDonationOpen, setIsDonationOpen] = useState(false);
  const [activeModalSite, setActiveModalSite] = useState<SiteConfig | null>(null);
  const [modalType, setModalType] = useState<'export' | null>(null);

  // Preview viewport state
  const [previewViewport, setPreviewViewport] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

  // Sync dark mode class and storage
  useEffect(() => {
    try {
      localStorage.setItem(THEME_STORAGE_KEY, isDark ? 'dark' : 'light');
    } catch (e) {
      console.warn('Could not save theme to localStorage:', e);
    }
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  // Load sites from localStorage on mount
  useEffect(() => {
    loadSitesFromStorage();
  }, []);

  const loadSitesFromStorage = () => {
    setLoading(true);
    try {
      let stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) {
        stored = localStorage.getItem(LEGACY_STORAGE_KEY);
      }
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          const normalized = parsed.map((s: SiteConfig) => ({
            ...s,
            sectionOrder:
              s.sectionOrder && s.sectionOrder.length > 0
                ? s.sectionOrder
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
                  ]
          }));
          setSites(normalized);
          setSelectedSite(normalized[0]);
          setLoading(false);
          return;
        }
      }

      // Default initial site seeded from first template
      const defaultSite = createSiteFromTemplate(TEMPLATES[0], 'Nexus Cloud', '#00E5FF');
      setSites([defaultSite]);
      setSelectedSite(defaultSite);
      localStorage.setItem(STORAGE_KEY, JSON.stringify([defaultSite]));
    } catch (e) {
      console.warn('Could not read from localStorage, using fallback template:', e);
      const defaultSite = createSiteFromTemplate(TEMPLATES[0], 'Nexus Cloud', '#00E5FF');
      setSites([defaultSite]);
      setSelectedSite(defaultSite);
    } finally {
      setLoading(false);
    }
  };

  const persistSites = (updatedSites: SiteConfig[]) => {
    setSites(updatedSites);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedSites));
    } catch (e) {
      console.warn('Could not write to localStorage:', e);
    }
  };

  const handleSaveSite = (updatedSite: SiteConfig) => {
    const updated = sites.map((s) => (s.id === updatedSite.id ? updatedSite : s));
    persistSites(updated);
    setSelectedSite(updatedSite);
  };

  const handleDeleteSite = (siteId: string) => {
    const updated = sites.filter((s) => s.id !== siteId);
    persistSites(updated);
    if (selectedSite?.id === siteId) {
      setSelectedSite(updated[0] || null);
    }
  };

  const handleDuplicateSite = (siteToDupe: SiteConfig) => {
    const dupeSite: SiteConfig = {
      ...siteToDupe,
      id: `site_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
      name: `${siteToDupe.name} (Copia)`,
      slug: `${siteToDupe.slug}-copia`,
      published: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    const updated = [dupeSite, ...sites];
    persistSites(updated);
    setSelectedSite(dupeSite);
  };

  const handleTogglePublish = (siteId: string) => {
    const updated = sites.map((s) => {
      if (s.id === siteId) {
        return {
          ...s,
          published: !s.published,
          publishedAt: !s.published ? new Date().toISOString() : s.publishedAt
        };
      }
      return s;
    });
    persistSites(updated);
  };

  const handleCreateSiteFromTemplate = (
    template: Template,
    customName?: string,
    chosenAccent?: string
  ) => {
    const newSite = createSiteFromTemplate(template, customName, chosenAccent);
    const updated = [newSite, ...sites];
    persistSites(updated);
    setSelectedSite(newSite);
    setView('editor');
  };

  const handleResetAllData = () => {
    try {
      localStorage.removeItem(STORAGE_KEY);
      localStorage.removeItem(LEGACY_STORAGE_KEY);
      const defaultSite = createSiteFromTemplate(TEMPLATES[0], 'Nexus Cloud', '#00E5FF');
      setSites([defaultSite]);
      setSelectedSite(defaultSite);
      localStorage.setItem(STORAGE_KEY, JSON.stringify([defaultSite]));
    } catch (e) {
      console.warn('Error resetting data:', e);
    }
  };

  return (
    <div className={`min-h-screen font-sans selection:bg-[#00E5FF] selection:text-black transition-colors duration-300 ${isDark ? 'dark bg-[#0A0A0F] text-white' : 'bg-[#FAFAFC] text-[#0F172A]'}`}>
      {/* 1. DASHBOARD VIEW */}
      {view === 'dashboard' && (
        <Dashboard
          sites={sites}
          onOpenEditor={(site) => {
            setSelectedSite(site);
            setView('editor');
          }}
          onCreateSiteFromTemplate={handleCreateSiteFromTemplate}
          onDeleteSite={handleDeleteSite}
          onDuplicateSite={handleDuplicateSite}
          onOpenDonation={() => setIsDonationOpen(true)}
          onOpenExport={(site) => {
            setActiveModalSite(site);
            setModalType('export');
          }}
          onPreviewSite={(site) => {
            setSelectedSite(site);
            setView('preview');
          }}
          isDark={isDark}
          onToggleTheme={() => setIsDark(!isDark)}
          onResetAllData={handleResetAllData}
        />
      )}

      {/* 2. VISUAL LIVE EDITOR VIEW */}
      {view === 'editor' && selectedSite && (
        <VisualEditor
          site={selectedSite}
          onSaveSite={handleSaveSite}
          onBackToDashboard={() => setView('dashboard')}
          onTogglePublish={handleTogglePublish}
          onOpenDonation={() => setIsDonationOpen(true)}
          isDark={isDark}
        />
      )}

      {/* 3. FULLSCREEN PREVIEW VIEW */}
      {view === 'preview' && selectedSite && (
        <div className="fixed inset-0 z-50 bg-[#000000] flex flex-col">
          {/* Top Bar for Preview */}
          <div className="h-16 bg-[#12121A] border-b border-white/10 px-6 flex items-center justify-between shrink-0">
            <button
              onClick={() => setView('dashboard')}
              className="px-3.5 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-semibold text-neutral-300 flex items-center gap-2 border border-white/5 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 text-[#00E5FF]" />
              <span>Volver al Panel</span>
            </button>

            {/* Viewport switch */}
            <div className="flex items-center p-1 rounded-xl bg-white/5 border border-white/10">
              <button
                onClick={() => setPreviewViewport('desktop')}
                className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                  previewViewport === 'desktop' ? 'bg-white text-black' : 'text-neutral-400 hover:text-white'
                }`}
                title="Escritorio"
              >
                <Monitor className="w-4 h-4" />
              </button>
              <button
                onClick={() => setPreviewViewport('tablet')}
                className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                  previewViewport === 'tablet' ? 'bg-white text-black' : 'text-neutral-400 hover:text-white'
                }`}
                title="Tableta"
              >
                <Tablet className="w-4 h-4" />
              </button>
              <button
                onClick={() => setPreviewViewport('mobile')}
                className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                  previewViewport === 'mobile' ? 'bg-white text-black' : 'text-neutral-400 hover:text-white'
                }`}
                title="Móvil"
              >
                <Smartphone className="w-4 h-4" />
              </button>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  setActiveModalSite(selectedSite);
                  setModalType('export');
                }}
                className="px-3.5 py-2 bg-white/10 hover:bg-white/15 text-white rounded-xl text-xs font-semibold border border-white/10 cursor-pointer"
              >
                Exportar sitio
              </button>
              <button
                onClick={() => setView('editor')}
                className="px-4 py-2 bg-gradient-to-r from-[#00E5FF] to-[#FF00E5] text-white rounded-xl text-xs font-bold shadow-[0_0_15px_rgba(0,229,255,0.4)] hover:scale-105 transition-transform cursor-pointer"
              >
                Abrir en Editor
              </button>
            </div>
          </div>

          {/* Render frame */}
          <div className="flex-1 overflow-y-auto flex items-start justify-center p-4 bg-[#09090F]">
            <div
              className={`transition-all duration-300 shadow-2xl rounded-2xl overflow-hidden border border-white/10 bg-white min-h-screen ${
                previewViewport === 'desktop'
                  ? 'w-full max-w-6xl'
                  : previewViewport === 'tablet'
                  ? 'w-[768px]'
                  : 'w-[375px]'
              }`}
            >
              <WebsiteRenderer site={selectedSite} />
            </div>
          </div>
        </div>
      )}

      {/* GLOBAL MODALS */}
      <DonationModal
        isOpen={isDonationOpen}
        onClose={() => setIsDonationOpen(false)}
        isDark={isDark}
      />

      {activeModalSite && modalType === 'export' && (
        <ExportModal
          isOpen={true}
          onClose={() => {
            setActiveModalSite(null);
            setModalType(null);
          }}
          site={activeModalSite}
          isDark={isDark}
          onOpenDonation={() => setIsDonationOpen(true)}
        />
      )}
    </div>
  );
}
