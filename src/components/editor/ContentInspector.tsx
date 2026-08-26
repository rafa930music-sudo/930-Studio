import React, { useState } from 'react';
import { SiteConfig, SectionType } from '../../types';
import {
  Image as ImageIcon,
  Plus,
  Trash2,
  Sparkles,
  Link,
  Type,
  Sliders,
  Check,
  Zap,
  AlignLeft,
  Calendar,
  DollarSign,
  HelpCircle,
  MessageSquare,
  Users,
  Upload,
  Search,
  Video,
  MapPin,
  Smile,
  MoveUp,
  MoveDown,
  Globe,
  Tag,
  Clock,
  LayoutGrid,
  ChevronDown,
  ChevronUp,
  X
} from 'lucide-react';

interface ContentInspectorProps {
  site: SiteConfig;
  activeSection: SectionType;
  onUpdateSite: (updatedSite: SiteConfig) => void;
  onOpenImagePicker: (path: string, currentUrl: string) => void;
}

const POPULAR_ICONS = [
  'Sparkles', 'Zap', 'ShieldCheck', 'Cpu', 'Layers', 'Activity', 'BarChart', 'Lock',
  'Rocket', 'Heart', 'Star', 'Globe', 'Compass', 'Flame', 'Award', 'Smile',
  'Code', 'Smartphone', 'Monitor', 'Tablet', 'Camera', 'Music', 'Cloud', 'Send',
  'Mail', 'Phone', 'MapPin', 'Clock', 'Calendar', 'DollarSign', 'CreditCard', 'ShoppingBag',
  'Coffee', 'CheckCircle', 'TrendingUp', 'Users', 'MessageSquare', 'Key', 'Eye', 'Sliders'
];

export const ContentInspector: React.FC<ContentInspectorProps> = ({
  site,
  activeSection,
  onUpdateSite,
  onOpenImagePicker
}) => {
  const [iconPickerTarget, setIconPickerTarget] = useState<{ path: string; current: string } | null>(null);
  const [iconSearch, setIconSearch] = useState('');

  const sectionData = (site.sections[activeSection] as any) || {};

  const handleFieldChange = (field: string, value: any) => {
    const updated = {
      ...site,
      sections: {
        ...site.sections,
        [activeSection]: {
          ...(site.sections[activeSection] as any),
          [field]: value
        }
      }
    };
    onUpdateSite(updated);
  };

  const handleNestedChange = (parentField: string, childField: string, value: any) => {
    const updated = {
      ...site,
      sections: {
        ...site.sections,
        [activeSection]: {
          ...(site.sections[activeSection] as any),
          [parentField]: {
            ...((site.sections[activeSection] as any)?.[parentField] || {}),
            [childField]: value
          }
        }
      }
    };
    onUpdateSite(updated);
  };

  const handleArrayItemChange = (arrayField: string, index: number, itemKey: string, value: any) => {
    const arr = [...((sectionData[arrayField] as any[]) || [])];
    if (arr[index]) {
      arr[index] = { ...arr[index], [itemKey]: value };
      handleFieldChange(arrayField, arr);
    }
  };

  const handleAddArrayItem = (arrayField: string, defaultItem: any) => {
    const arr = [...((sectionData[arrayField] as any[]) || []), defaultItem];
    handleFieldChange(arrayField, arr);
  };

  const handleRemoveArrayItem = (arrayField: string, index: number) => {
    const arr = ((sectionData[arrayField] as any[]) || []).filter((_, i) => i !== index);
    handleFieldChange(arrayField, arr);
  };

  const handleMoveArrayItem = (arrayField: string, fromIndex: number, toIndex: number) => {
    const arr = [...((sectionData[arrayField] as any[]) || [])];
    if (toIndex < 0 || toIndex >= arr.length) return;
    const item = arr.splice(fromIndex, 1)[0];
    arr.splice(toIndex, 0, item);
    handleFieldChange(arrayField, arr);
  };

  // Local Image Upload Handler
  const handleLocalImageUpload = (fieldPath: string, file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      if (result) {
        if (fieldPath.includes('.')) {
          const parts = fieldPath.split('.');
          if (parts.length === 2) {
            handleNestedChange(parts[0], parts[1], result);
          }
        } else {
          handleFieldChange(fieldPath, result);
        }
      }
    };
    reader.readAsDataURL(file);
  };

  const renderImageField = (label: string, fieldPath: string, value: string, placeholder?: string) => (
    <div className="space-y-1.5 p-3 rounded-2xl bg-white/[0.02] border border-white/5">
      <label className="font-bold text-neutral-300 block text-xs">{label}:</label>
      <div className="flex items-center gap-1.5">
        <input
          type="text"
          value={value || ''}
          onChange={(e) => {
            if (fieldPath.includes('.')) {
              const parts = fieldPath.split('.');
              handleNestedChange(parts[0], parts[1], e.target.value);
            } else {
              handleFieldChange(fieldPath, e.target.value);
            }
          }}
          placeholder={placeholder || 'https://...'}
          className="flex-1 px-2.5 py-1.5 rounded-lg bg-[#1A1A24] border border-white/10 text-white text-[11px] focus:border-[#00E5FF] outline-none truncate"
        />
        <button
          type="button"
          onClick={() => onOpenImagePicker(`sections.${activeSection}.${fieldPath}`, value || '')}
          className="p-1.5 rounded-lg bg-[#00E5FF]/20 hover:bg-[#00E5FF] text-[#00E5FF] hover:text-black border border-[#00E5FF]/30 transition-colors"
          title="Buscar en Unsplash"
        >
          <ImageIcon className="w-3.5 h-3.5" />
        </button>
        <label
          className="p-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-neutral-300 hover:text-white border border-white/10 transition-colors cursor-pointer"
          title="Subir archivo local"
        >
          <Upload className="w-3.5 h-3.5" />
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => {
              if (e.target.files?.[0]) {
                handleLocalImageUpload(fieldPath, e.target.files[0]);
              }
            }}
          />
        </label>
      </div>
      {value && (
        <div className="relative group w-full h-24 rounded-xl overflow-hidden border border-white/10 bg-black/40">
          <img src={value} alt="Preview" className="w-full h-full object-cover" />
          <button
            type="button"
            onClick={() => {
              if (fieldPath.includes('.')) {
                const parts = fieldPath.split('.');
                handleNestedChange(parts[0], parts[1], '');
              } else {
                handleFieldChange(fieldPath, '');
              }
            }}
            className="absolute top-1 right-1 p-1 rounded-md bg-black/70 hover:bg-red-500 text-white transition-colors"
            title="Eliminar imagen"
          >
            <Trash2 className="w-3 h-3" />
          </button>
        </div>
      )}
    </div>
  );

  return (
    <div className="p-4 space-y-5 text-white text-xs">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-white/10">
        <div>
          <span className="text-[10px] font-black uppercase tracking-wider text-[#00E5FF]">
            Edición de Contenido
          </span>
          <h4 className="text-sm font-extrabold capitalize text-white">{activeSection}</h4>
        </div>
        <label className="flex items-center gap-2 cursor-pointer">
          <span className="text-[11px] text-neutral-400 font-bold">Activo</span>
          <input
            type="checkbox"
            checked={sectionData.enabled !== false}
            onChange={(e) => handleFieldChange('enabled', e.target.checked)}
            className="accent-[#00E5FF] w-4 h-4 rounded"
          />
        </label>
      </div>

      {/* NAVBAR */}
      {activeSection === 'navbar' && (
        <div className="space-y-4">
          <div>
            <label className="font-bold text-neutral-300 block mb-1">Nombre de Marca / Logo Texto:</label>
            <input
              type="text"
              value={sectionData.brandName || site.name}
              onChange={(e) => handleFieldChange('brandName', e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-[#1A1A24] border border-white/10 text-white font-bold focus:border-[#00E5FF] outline-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="font-bold text-neutral-300 block mb-1">Texto Botón CTA:</label>
              <input
                type="text"
                value={sectionData.ctaText || 'Comenzar'}
                onChange={(e) => handleFieldChange('ctaText', e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-[#1A1A24] border border-white/10 text-white focus:border-[#00E5FF] outline-none"
              />
            </div>
            <div>
              <label className="font-bold text-neutral-300 block mb-1">Enlace Botón:</label>
              <input
                type="text"
                value={sectionData.ctaLink || '#pricing'}
                onChange={(e) => handleFieldChange('ctaLink', e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-[#1A1A24] border border-white/10 text-white focus:border-[#00E5FF] outline-none"
              />
            </div>
          </div>

          {/* Links */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-neutral-300">Enlaces de Navegación</span>
              <button
                type="button"
                onClick={() =>
                  handleAddArrayItem('links', { label: 'Nuevo Enlace', href: '#features' })
                }
                className="px-2 py-1 rounded-lg bg-[#00E5FF]/20 text-[#00E5FF] hover:bg-[#00E5FF] hover:text-black font-bold flex items-center gap-1"
              >
                <Plus className="w-3 h-3" />
                <span>Añadir</span>
              </button>
            </div>
            {(sectionData.links || []).map((lnk: any, idx: number) => (
              <div key={idx} className="flex items-center gap-2">
                <input
                  type="text"
                  value={lnk.label}
                  onChange={(e) => handleArrayItemChange('links', idx, 'label', e.target.value)}
                  placeholder="Etiqueta"
                  className="flex-1 px-2.5 py-1.5 rounded-lg bg-[#1A1A24] border border-white/10 text-white focus:border-[#00E5FF] outline-none text-xs"
                />
                <input
                  type="text"
                  value={lnk.href}
                  onChange={(e) => handleArrayItemChange('links', idx, 'href', e.target.value)}
                  placeholder="#seccion"
                  className="flex-1 px-2.5 py-1.5 rounded-lg bg-[#1A1A24] border border-white/10 text-white focus:border-[#00E5FF] outline-none text-xs font-mono"
                />
                <button
                  type="button"
                  onClick={() => handleRemoveArrayItem('links', idx)}
                  className="p-1.5 text-neutral-500 hover:text-red-400"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* HERO */}
      {activeSection === 'hero' && (
        <div className="space-y-4">
          <div>
            <label className="font-bold text-neutral-300 block mb-1">Badge / Kicker:</label>
            <input
              type="text"
              value={sectionData.badge || sectionData.kicker || ''}
              onChange={(e) => handleFieldChange('badge', e.target.value)}
              placeholder="Ej. Nueva Versión 2026"
              className="w-full px-3 py-2 rounded-xl bg-[#1A1A24] border border-white/10 text-white focus:border-[#00E5FF] outline-none"
            />
          </div>

          <div>
            <label className="font-bold text-neutral-300 block mb-1">Título Principal:</label>
            <input
              type="text"
              value={sectionData.title || ''}
              onChange={(e) => handleFieldChange('title', e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-[#1A1A24] border border-white/10 text-white font-bold focus:border-[#00E5FF] outline-none"
            />
          </div>

          <div>
            <label className="font-bold text-neutral-300 block mb-1">Texto Resaltado Neón:</label>
            <input
              type="text"
              value={sectionData.highlightTitle || ''}
              onChange={(e) => handleFieldChange('highlightTitle', e.target.value)}
              placeholder="Palabra destacada con gradiente"
              className="w-full px-3 py-2 rounded-xl bg-[#1A1A24] border border-white/10 text-[#00E5FF] font-black focus:border-[#00E5FF] outline-none"
            />
          </div>

          <div>
            <label className="font-bold text-neutral-300 block mb-1">Subtítulo / Bajada:</label>
            <textarea
              rows={3}
              value={sectionData.subtitle || ''}
              onChange={(e) => handleFieldChange('subtitle', e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-[#1A1A24] border border-white/10 text-neutral-200 focus:border-[#00E5FF] outline-none"
            />
          </div>

          {/* Primary CTA */}
          <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
            <span className="font-extrabold text-[11px] text-[#00E5FF]">Botón de Acción Principal (CTA)</span>
            <div className="grid grid-cols-2 gap-2">
              <input
                type="text"
                value={sectionData.primaryCta?.text || ''}
                onChange={(e) => handleNestedChange('primaryCta', 'text', e.target.value)}
                placeholder="Texto botón"
                className="w-full px-2.5 py-1.5 rounded-lg bg-[#1A1A24] border border-white/10 text-white focus:border-[#00E5FF] outline-none text-xs"
              />
              <input
                type="text"
                value={sectionData.primaryCta?.link || ''}
                onChange={(e) => handleNestedChange('primaryCta', 'link', e.target.value)}
                placeholder="Enlace URL"
                className="w-full px-2.5 py-1.5 rounded-lg bg-[#1A1A24] border border-white/10 text-white focus:border-[#00E5FF] outline-none text-xs font-mono"
              />
            </div>
          </div>

          {/* Secondary CTA */}
          <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
            <span className="font-extrabold text-[11px] text-neutral-300">Botón Secundario (Opcional)</span>
            <div className="grid grid-cols-2 gap-2">
              <input
                type="text"
                value={sectionData.secondaryCta?.text || ''}
                onChange={(e) => handleNestedChange('secondaryCta', 'text', e.target.value)}
                placeholder="Texto botón 2"
                className="w-full px-2.5 py-1.5 rounded-lg bg-[#1A1A24] border border-white/10 text-white focus:border-[#00E5FF] outline-none text-xs"
              />
              <input
                type="text"
                value={sectionData.secondaryCta?.link || ''}
                onChange={(e) => handleNestedChange('secondaryCta', 'link', e.target.value)}
                placeholder="Enlace URL 2"
                className="w-full px-2.5 py-1.5 rounded-lg bg-[#1A1A24] border border-white/10 text-white focus:border-[#00E5FF] outline-none text-xs font-mono"
              />
            </div>
          </div>

          {renderImageField('Imagen de Portada (Hero)', 'imageUrl', sectionData.imageUrl)}
        </div>
      )}

      {/* BENTO FEATURES */}
      {activeSection === 'bentoFeatures' && (
        <div className="space-y-4">
          <div>
            <label className="font-bold text-neutral-300 block mb-1">Título de Sección:</label>
            <input
              type="text"
              value={sectionData.title || ''}
              onChange={(e) => handleFieldChange('title', e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-[#1A1A24] border border-white/10 text-white font-bold focus:border-[#00E5FF] outline-none"
            />
          </div>

          <div>
            <label className="font-bold text-neutral-300 block mb-1">Subtítulo:</label>
            <input
              type="text"
              value={sectionData.subtitle || ''}
              onChange={(e) => handleFieldChange('subtitle', e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-[#1A1A24] border border-white/10 text-white focus:border-[#00E5FF] outline-none"
            />
          </div>

          {/* Bento items list */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-extrabold text-neutral-300">Tarjetas Bento ({sectionData.items?.length || 0})</span>
              <button
                type="button"
                onClick={() =>
                  handleAddArrayItem('items', {
                    id: `bento_${Date.now()}`,
                    title: 'Nueva Característica',
                    description: 'Descripción concisa de la funcionalidad.',
                    icon: 'Sparkles',
                    colSpan: 1
                  })
                }
                className="px-2.5 py-1 rounded-lg bg-[#00E5FF]/20 text-[#00E5FF] hover:bg-[#00E5FF] hover:text-black font-bold flex items-center gap-1 cursor-pointer"
              >
                <Plus className="w-3 h-3" />
                <span>Añadir</span>
              </button>
            </div>

            {(sectionData.items || []).map((item: any, idx: number) => (
              <div key={idx} className="p-3 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-black text-[10px] text-[#00E5FF]">Tarjeta #{idx + 1}</span>
                  <div className="flex items-center gap-1">
                    <button
                      type="button"
                      onClick={() => handleMoveArrayItem('items', idx, idx - 1)}
                      disabled={idx === 0}
                      className="p-1 text-neutral-400 hover:text-white disabled:opacity-20"
                    >
                      <MoveUp className="w-3 h-3" />
                    </button>
                    <button
                      type="button"
                      onClick={() => handleMoveArrayItem('items', idx, idx + 1)}
                      disabled={idx === (sectionData.items?.length || 0) - 1}
                      className="p-1 text-neutral-400 hover:text-white disabled:opacity-20"
                    >
                      <MoveDown className="w-3 h-3" />
                    </button>
                    <button
                      type="button"
                      onClick={() => handleRemoveArrayItem('items', idx)}
                      className="p-1 text-neutral-400 hover:text-red-400"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <div className="col-span-2">
                    <input
                      type="text"
                      value={item.title || ''}
                      onChange={(e) => handleArrayItemChange('items', idx, 'title', e.target.value)}
                      placeholder="Título"
                      className="w-full px-2.5 py-1.5 rounded-lg bg-[#1A1A24] border border-white/10 text-white font-bold focus:border-[#00E5FF] outline-none text-xs"
                    />
                  </div>
                  <div>
                    <select
                      value={item.colSpan || 1}
                      onChange={(e) => handleArrayItemChange('items', idx, 'colSpan', parseInt(e.target.value))}
                      className="w-full px-2 py-1.5 rounded-lg bg-[#1A1A24] border border-white/10 text-white text-xs"
                    >
                      <option value={1}>1 Columna</option>
                      <option value={2}>2 Columnas</option>
                    </select>
                  </div>
                </div>

                <textarea
                  rows={2}
                  value={item.description || ''}
                  onChange={(e) => handleArrayItemChange('items', idx, 'description', e.target.value)}
                  placeholder="Descripción"
                  className="w-full px-2.5 py-1.5 rounded-lg bg-[#1A1A24] border border-white/10 text-neutral-300 focus:border-[#00E5FF] outline-none text-xs"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* PRICING */}
      {activeSection === 'pricing' && (
        <div className="space-y-4">
          <div>
            <label className="font-bold text-neutral-300 block mb-1">Título de Planes:</label>
            <input
              type="text"
              value={sectionData.title || ''}
              onChange={(e) => handleFieldChange('title', e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-[#1A1A24] border border-white/10 text-white font-bold focus:border-[#00E5FF] outline-none"
            />
          </div>

          <div>
            <label className="font-bold text-neutral-300 block mb-1">Subtítulo / Nota de Descuento:</label>
            <input
              type="text"
              value={sectionData.subtitle || sectionData.discountNote || ''}
              onChange={(e) => handleFieldChange('subtitle', e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-[#1A1A24] border border-white/10 text-white focus:border-[#00E5FF] outline-none"
            />
          </div>

          {/* Pricing Plans */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-extrabold text-neutral-300">Planes ({sectionData.plans?.length || 0})</span>
              <button
                type="button"
                onClick={() =>
                  handleAddArrayItem('plans', {
                    id: `plan_${Date.now()}`,
                    name: 'Plan Personalizado',
                    priceMonthly: '€29',
                    priceAnnual: '€24',
                    description: 'Ideal para creadores y proyectos en crecimiento.',
                    features: ['Todas las herramientas', 'Soporte prioritario', 'Exportación ilimitada'],
                    ctaText: 'Empezar Plan',
                    ctaLink: '#checkout',
                    highlighted: false
                  })
                }
                className="px-2.5 py-1 rounded-lg bg-[#00E5FF]/20 text-[#00E5FF] hover:bg-[#00E5FF] hover:text-black font-bold flex items-center gap-1 cursor-pointer"
              >
                <Plus className="w-3 h-3" />
                <span>Añadir Plan</span>
              </button>
            </div>

            {(sectionData.plans || []).map((plan: any, idx: number) => (
              <div key={idx} className="p-3 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-black text-[10px] text-[#00E5FF]">Plan #{idx + 1}: {plan.name}</span>
                  <div className="flex items-center gap-2">
                    <label className="flex items-center gap-1 text-[10px] text-amber-400 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={!!plan.highlighted}
                        onChange={(e) => handleArrayItemChange('plans', idx, 'highlighted', e.target.checked)}
                        className="accent-[#00E5FF] rounded"
                      />
                      <span>Destacado</span>
                    </label>
                    <button
                      type="button"
                      onClick={() => handleRemoveArrayItem('plans', idx)}
                      className="p-1 text-neutral-400 hover:text-red-400"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    value={plan.name || ''}
                    onChange={(e) => handleArrayItemChange('plans', idx, 'name', e.target.value)}
                    placeholder="Nombre del Plan"
                    className="px-2.5 py-1.5 rounded-lg bg-[#1A1A24] border border-white/10 text-white font-bold focus:border-[#00E5FF] outline-none text-xs"
                  />
                  <input
                    type="text"
                    value={plan.priceMonthly || ''}
                    onChange={(e) => handleArrayItemChange('plans', idx, 'priceMonthly', e.target.value)}
                    placeholder="Precio (ej. €29/mes)"
                    className="px-2.5 py-1.5 rounded-lg bg-[#1A1A24] border border-white/10 text-[#00FF88] font-bold focus:border-[#00FF88] outline-none text-xs font-mono"
                  />
                </div>

                <input
                  type="text"
                  value={plan.description || ''}
                  onChange={(e) => handleArrayItemChange('plans', idx, 'description', e.target.value)}
                  placeholder="Descripción corta"
                  className="w-full px-2.5 py-1.5 rounded-lg bg-[#1A1A24] border border-white/10 text-neutral-300 focus:border-[#00E5FF] outline-none text-xs"
                />

                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    value={plan.ctaText || 'Comenzar'}
                    onChange={(e) => handleArrayItemChange('plans', idx, 'ctaText', e.target.value)}
                    placeholder="Texto Botón"
                    className="px-2.5 py-1.5 rounded-lg bg-[#1A1A24] border border-white/10 text-white focus:border-[#00E5FF] outline-none text-xs"
                  />
                  <input
                    type="text"
                    value={plan.ctaLink || '#'}
                    onChange={(e) => handleArrayItemChange('plans', idx, 'ctaLink', e.target.value)}
                    placeholder="Enlace URL"
                    className="px-2.5 py-1.5 rounded-lg bg-[#1A1A24] border border-white/10 text-white focus:border-[#00E5FF] outline-none text-xs font-mono"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TESTIMONIALS */}
      {activeSection === 'testimonials' && (
        <div className="space-y-4">
          <div>
            <label className="font-bold text-neutral-300 block mb-1">Título:</label>
            <input
              type="text"
              value={sectionData.title || ''}
              onChange={(e) => handleFieldChange('title', e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-[#1A1A24] border border-white/10 text-white font-bold focus:border-[#00E5FF] outline-none"
            />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-extrabold text-neutral-300">Testimonios ({sectionData.items?.length || 0})</span>
              <button
                type="button"
                onClick={() =>
                  handleAddArrayItem('items', {
                    id: `test_${Date.now()}`,
                    name: 'Nombre Cliente',
                    role: 'CEO',
                    company: 'Tech Studio',
                    quote: 'Una herramienta increíble que superó todas nuestras expectativas.',
                    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
                  })
                }
                className="px-2.5 py-1 rounded-lg bg-[#00E5FF]/20 text-[#00E5FF] hover:bg-[#00E5FF] hover:text-black font-bold flex items-center gap-1 cursor-pointer"
              >
                <Plus className="w-3 h-3" />
                <span>Añadir</span>
              </button>
            </div>

            {(sectionData.items || []).map((t: any, idx: number) => (
              <div key={idx} className="p-3 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-black text-[10px] text-[#00E5FF]">Testimonio #{idx + 1}</span>
                  <button
                    type="button"
                    onClick={() => handleRemoveArrayItem('items', idx)}
                    className="p-1 text-neutral-400 hover:text-red-400"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    value={t.name || ''}
                    onChange={(e) => handleArrayItemChange('items', idx, 'name', e.target.value)}
                    placeholder="Nombre"
                    className="px-2.5 py-1.5 rounded-lg bg-[#1A1A24] border border-white/10 text-white font-bold text-xs"
                  />
                  <input
                    type="text"
                    value={t.company || t.role || ''}
                    onChange={(e) => handleArrayItemChange('items', idx, 'company', e.target.value)}
                    placeholder="Empresa / Cargo"
                    className="px-2.5 py-1.5 rounded-lg bg-[#1A1A24] border border-white/10 text-neutral-300 text-xs"
                  />
                </div>

                <textarea
                  rows={2}
                  value={t.quote || ''}
                  onChange={(e) => handleArrayItemChange('items', idx, 'quote', e.target.value)}
                  placeholder="Cita del cliente"
                  className="w-full px-2.5 py-1.5 rounded-lg bg-[#1A1A24] border border-white/10 text-neutral-200 text-xs"
                />

                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={t.avatarUrl || ''}
                    onChange={(e) => handleArrayItemChange('items', idx, 'avatarUrl', e.target.value)}
                    placeholder="URL Avatar"
                    className="flex-1 px-2.5 py-1.5 rounded-lg bg-[#1A1A24] border border-white/10 text-white text-xs truncate"
                  />
                  <button
                    type="button"
                    onClick={() => onOpenImagePicker(`sections.testimonials.items.${idx}.avatarUrl`, t.avatarUrl || '')}
                    className="p-1.5 bg-[#00E5FF]/20 text-[#00E5FF] rounded-lg hover:bg-[#00E5FF] hover:text-black"
                  >
                    <ImageIcon className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* FAQ */}
      {activeSection === 'faq' && (
        <div className="space-y-4">
          <div>
            <label className="font-bold text-neutral-300 block mb-1">Título FAQ:</label>
            <input
              type="text"
              value={sectionData.title || ''}
              onChange={(e) => handleFieldChange('title', e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-[#1A1A24] border border-white/10 text-white font-bold focus:border-[#00E5FF] outline-none"
            />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-extrabold text-neutral-300">Preguntas Frecuentes ({sectionData.items?.length || 0})</span>
              <button
                type="button"
                onClick={() =>
                  handleAddArrayItem('items', {
                    id: `faq_${Date.now()}`,
                    question: '¿Nueva pregunta frecuente?',
                    answer: 'Respuesta detallada y clara para los usuarios.'
                  })
                }
                className="px-2.5 py-1 rounded-lg bg-[#00E5FF]/20 text-[#00E5FF] hover:bg-[#00E5FF] hover:text-black font-bold flex items-center gap-1 cursor-pointer"
              >
                <Plus className="w-3 h-3" />
                <span>Añadir</span>
              </button>
            </div>

            {(sectionData.items || []).map((faq: any, idx: number) => (
              <div key={idx} className="p-3 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-black text-[10px] text-[#00E5FF]">Pregunta #{idx + 1}</span>
                  <button
                    type="button"
                    onClick={() => handleRemoveArrayItem('items', idx)}
                    className="p-1 text-neutral-400 hover:text-red-400"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
                <input
                  type="text"
                  value={faq.question || ''}
                  onChange={(e) => handleArrayItemChange('items', idx, 'question', e.target.value)}
                  placeholder="¿Pregunta?"
                  className="w-full px-2.5 py-1.5 rounded-lg bg-[#1A1A24] border border-white/10 text-white font-bold text-xs"
                />
                <textarea
                  rows={2}
                  value={faq.answer || ''}
                  onChange={(e) => handleArrayItemChange('items', idx, 'answer', e.target.value)}
                  placeholder="Respuesta..."
                  className="w-full px-2.5 py-1.5 rounded-lg bg-[#1A1A24] border border-white/10 text-neutral-300 text-xs"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* MAP SECTION */}
      {activeSection === 'map' && (
        <div className="space-y-4">
          <div>
            <label className="font-bold text-neutral-300 block mb-1">Título:</label>
            <input
              type="text"
              value={sectionData.title || ''}
              onChange={(e) => handleFieldChange('title', e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-[#1A1A24] border border-white/10 text-white font-bold"
            />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="font-bold text-neutral-300 block mb-1">Dirección:</label>
              <input
                type="text"
                value={sectionData.address || ''}
                onChange={(e) => handleFieldChange('address', e.target.value)}
                placeholder="Paseo de la Castellana 42"
                className="w-full px-2.5 py-1.5 rounded-lg bg-[#1A1A24] border border-white/10 text-white text-xs"
              />
            </div>
            <div>
              <label className="font-bold text-neutral-300 block mb-1">Ciudad / País:</label>
              <input
                type="text"
                value={sectionData.city || ''}
                onChange={(e) => handleFieldChange('city', e.target.value)}
                placeholder="Madrid, España"
                className="w-full px-2.5 py-1.5 rounded-lg bg-[#1A1A24] border border-white/10 text-white text-xs"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="font-bold text-neutral-300 block mb-1">Teléfono:</label>
              <input
                type="text"
                value={sectionData.phone || ''}
                onChange={(e) => handleFieldChange('phone', e.target.value)}
                placeholder="+34 910 000 000"
                className="w-full px-2.5 py-1.5 rounded-lg bg-[#1A1A24] border border-white/10 text-white text-xs"
              />
            </div>
            <div>
              <label className="font-bold text-neutral-300 block mb-1">Horario:</label>
              <input
                type="text"
                value={sectionData.hours || ''}
                onChange={(e) => handleFieldChange('hours', e.target.value)}
                placeholder="Lun-Vie: 9:00 - 19:00"
                className="w-full px-2.5 py-1.5 rounded-lg bg-[#1A1A24] border border-white/10 text-white text-xs"
              />
            </div>
          </div>
        </div>
      )}

      {/* FOOTER */}
      {activeSection === 'footer' && (
        <div className="space-y-4">
          <div>
            <label className="font-bold text-neutral-300 block mb-1">Texto de Copyright:</label>
            <input
              type="text"
              value={sectionData.copyright || ''}
              onChange={(e) => handleFieldChange('copyright', e.target.value)}
              placeholder="© 2026 Todos los derechos reservados."
              className="w-full px-3 py-2 rounded-xl bg-[#1A1A24] border border-white/10 text-white font-bold"
            />
          </div>
        </div>
      )}

      {/* Generic fallback for any remaining section type */}
      {!['navbar', 'hero', 'bentoFeatures', 'pricing', 'testimonials', 'faq', 'map', 'footer'].includes(activeSection) && (
        <div className="space-y-4">
          {sectionData.title !== undefined && (
            <div>
              <label className="font-bold text-neutral-300 block mb-1">Título:</label>
              <input
                type="text"
                value={sectionData.title || ''}
                onChange={(e) => handleFieldChange('title', e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-[#1A1A24] border border-white/10 text-white font-bold focus:border-[#00E5FF] outline-none"
              />
            </div>
          )}

          {sectionData.subtitle !== undefined && (
            <div>
              <label className="font-bold text-neutral-300 block mb-1">Subtítulo / Bajada:</label>
              <textarea
                rows={2}
                value={sectionData.subtitle || ''}
                onChange={(e) => handleFieldChange('subtitle', e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-[#1A1A24] border border-white/10 text-neutral-200 focus:border-[#00E5FF] outline-none"
              />
            </div>
          )}

          {sectionData.imageUrl !== undefined && (
            renderImageField('Imagen', 'imageUrl', sectionData.imageUrl)
          )}
        </div>
      )}
    </div>
  );
};
