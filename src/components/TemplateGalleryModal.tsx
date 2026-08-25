import React, { useState } from 'react';
import { APPLE_TEMPLATES } from '../data/templates';
import { TemplateDefinition } from '../types';
import { X, Sparkles, Check, ArrowRight, Eye, LayoutTemplate } from 'lucide-react';

interface TemplateGalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentTemplateId?: string;
  onSelectTemplate: (template: TemplateDefinition) => void;
  onGenerateWithTemplate?: (template: TemplateDefinition) => void;
  isDark?: boolean;
}

export const TemplateGalleryModal: React.FC<TemplateGalleryModalProps> = ({
  isOpen,
  onClose,
  currentTemplateId,
  onSelectTemplate,
  onGenerateWithTemplate,
  isDark = false
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [previewTemplate, setPreviewTemplate] = useState<TemplateDefinition | null>(null);

  if (!isOpen) return null;

  const categories = [
    { id: 'all', label: 'Todas las Plantillas' },
    { id: 'saas', label: 'SaaS & Software' },
    { id: 'hardware', label: 'Hardware & Tech' },
    { id: 'agencies', label: 'Agencias & Portafolio' },
    { id: 'luxury', label: 'Lujo & Moda' },
    { id: 'wellness', label: 'Salud & Bienestar' },
    { id: 'services', label: 'Inmobiliaria & Legal' },
    { id: 'hospitality', label: 'Restaurantes & Café' },
    { id: 'education', label: 'Educación & Cursos' }
  ];

  const filteredTemplates = APPLE_TEMPLATES.filter((tpl) => {
    if (selectedCategory === 'all') return true;
    return tpl.category === selectedCategory;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
      <div
        className={`border rounded-2xl w-full max-w-5xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh] transition-all ${
          isDark
            ? 'bg-[#12121A] border-white/10 text-white'
            : 'bg-white border-[#E5E7EB] text-[#0F172A]'
        }`}
      >
        {/* Header */}
        <div className="p-6 md:p-8 border-b border-inherit flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#00E5FF]/10 text-[#00E5FF] border border-[#00E5FF]/30 flex items-center justify-center shadow-[0_0_12px_rgba(0,229,255,0.2)]">
              <LayoutTemplate className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold tracking-tight">Galería de Plantillas — 930 Studio</h2>
              <p className="text-xs text-[#64748B] dark:text-neutral-400">Arquitecturas base con tipografía cuidada, bento grids y espaciado proporcional riguroso</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#64748B] hover:text-[#0F172A] dark:hover:text-white rounded-lg hover:bg-[#F0F0F3] dark:hover:bg-white/5 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Categories */}
        <div className="px-6 md:px-8 py-3.5 border-b border-inherit flex items-center gap-2 overflow-x-auto shrink-0 bg-[#FAFAFC] dark:bg-white/[0.02]">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#0F172A] text-white shadow-xs dark:bg-white dark:text-[#0F172A]'
                  : 'bg-white dark:bg-white/5 text-[#64748B] dark:text-neutral-400 border border-[#E5E7EB] dark:border-transparent hover:text-[#0F172A] dark:hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="p-6 md:p-8 overflow-y-auto flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-[#FAFAFC] dark:bg-transparent">
          {filteredTemplates.map((tpl) => {
            const isSelected = currentTemplateId === tpl.id;
            return (
              <div
                key={tpl.id}
                className={`rounded-xl border overflow-hidden flex flex-col justify-between transition-all group ${
                  isDark
                    ? 'bg-[#181824] border-white/10 hover:border-white/20'
                    : 'bg-white border-[#E5E7EB] hover:border-[#D1D5DB] shadow-xs'
                } ${isSelected ? 'ring-2 ring-[#00E5FF]' : ''}`}
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-black/10 dark:bg-black/40">
                    <img
                      src={tpl.thumbnail}
                      alt={tpl.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-white border border-white/10">
                      {tpl.category}
                    </div>
                    {isSelected && (
                      <div className="absolute top-3 right-3 bg-[#00E5FF] text-black p-1 rounded-full shadow-md font-bold">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                    )}
                  </div>

                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-1">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: tpl.accentColor }}
                      />
                      <h3 className="font-bold text-base text-[#0F172A] dark:text-white">{tpl.name}</h3>
                    </div>

                    <p className="text-xs text-[#00B8D4] dark:text-[#00E5FF] font-semibold mb-2">{tpl.tagline}</p>
                    <p className="text-xs text-[#64748B] dark:text-neutral-400 line-clamp-2 leading-relaxed font-medium">
                      {tpl.description}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0 flex gap-2">
                  <button
                    onClick={() => {
                      onSelectTemplate(tpl);
                      onClose();
                    }}
                    className={`flex-1 py-2.5 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                      isSelected
                        ? 'bg-[#0F172A] text-white dark:bg-white dark:text-[#0F172A]'
                        : 'bg-[#FAFAFC] hover:bg-[#F0F0F3] text-[#0F172A] border border-[#E5E7EB] dark:bg-white/10 dark:hover:bg-white/20 dark:text-white dark:border-transparent'
                    }`}
                  >
                    {isSelected ? 'Plantilla Activa' : 'Aplicar Estilo'}
                  </button>

                  {onGenerateWithTemplate && (
                    <button
                      onClick={() => {
                        onGenerateWithTemplate(tpl);
                        onClose();
                      }}
                      className="px-3.5 bg-[#00E5FF] hover:bg-[#00cce6] text-black py-2.5 rounded-lg text-xs font-bold transition-colors flex items-center justify-center gap-1 cursor-pointer shadow-xs"
                      title="Generar nuevo sitio con IA usando esta plantilla"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
