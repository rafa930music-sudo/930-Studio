import React, { useState } from 'react';
import { SiteConfig, SectionType, SectionCustomStyle } from '../../types';
import {
  Palette,
  Type,
  Maximize2,
  Minimize2,
  Sparkles,
  Sliders,
  Code,
  Link,
  Unlink,
  Layers,
  Sun,
  Moon,
  Zap,
  Check,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  Grid,
  Box,
  Eye,
  RotateCw,
  SunMedium,
  Move
} from 'lucide-react';

interface StyleInspectorProps {
  site: SiteConfig;
  activeSection: SectionType;
  onUpdateSite: (updatedSite: SiteConfig) => void;
}

const NEON_PRESETS = [
  { name: 'Cian Neón', color: '#00E5FF', glow: '0 0 25px rgba(0, 229, 255, 0.35)' },
  { name: 'Magenta Eléctrico', color: '#FF00E5', glow: '0 0 25px rgba(255, 0, 229, 0.35)' },
  { name: 'Verde Matrix', color: '#00FF88', glow: '0 0 25px rgba(0, 255, 136, 0.35)' },
  { name: 'Oro Cósmico', color: '#FFD700', glow: '0 0 25px rgba(255, 215, 0, 0.35)' },
  { name: 'Violeta Cyber', color: '#8B5CF6', glow: '0 0 25px rgba(139, 92, 246, 0.35)' },
  { name: 'Naranja Hyper', color: '#FF6B00', glow: '0 0 25px rgba(255, 107, 0, 0.35)' },
  { name: 'Azul Klein', color: '#0055FF', glow: '0 0 25px rgba(0, 85, 255, 0.35)' },
  { name: 'Blanco Titanio', color: '#FFFFFF', glow: '0 0 25px rgba(255, 255, 255, 0.35)' },
  { name: 'Rosa Vaporwave', color: '#FF70A6', glow: '0 0 25px rgba(255, 112, 166, 0.35)' },
  { name: 'Menta Glaciar', color: '#38EF7D', glow: '0 0 25px rgba(56, 239, 125, 0.35)' },
  { name: 'Rojo Fuego', color: '#FF3366', glow: '0 0 25px rgba(255, 51, 102, 0.35)' },
  { name: 'Lima Ácida', color: '#CCFF00', glow: '0 0 25px rgba(204, 255, 0, 0.35)' },
  { name: 'Ámbar Cálido', color: '#FFB703', glow: '0 0 25px rgba(255, 183, 3, 0.35)' },
  { name: 'Turquesa Profundo', color: '#00B4D8', glow: '0 0 25px rgba(0, 180, 216, 0.35)' },
  { name: 'Índigo Real', color: '#4361EE', glow: '0 0 25px rgba(67, 97, 238, 0.35)' },
  { name: 'Púrpura Velvet', color: '#7209B7', glow: '0 0 25px rgba(114, 9, 183, 0.35)' }
];

const GOOGLE_FONTS = [
  { label: 'Plus Jakarta Sans (Moderna & Pro)', value: "'Plus Jakarta Sans', sans-serif" },
  { label: 'Inter (Limpia & Minimalista)', value: "'Inter', sans-serif" },
  { label: 'Outfit (Geométrica & Futurista)', value: "'Outfit', sans-serif" },
  { label: 'Space Grotesk (Tech & Web3)', value: "'Space Grotesk', sans-serif" },
  { label: 'Playfair Display (Elegante & Editorial)', value: "'Playfair Display', serif" },
  { label: 'Montserrat (Impacto & Títulos)', value: "'Montserrat', sans-serif" },
  { label: 'Poppins (Amigable & Geométrica)', value: "'Poppins', sans-serif" },
  { label: 'Syne (Vanguardista & Creativa)', value: "'Syne', sans-serif" },
  { label: 'Cabinet Grotesk (Bold Editorial)', value: "'Cabinet Grotesk', sans-serif" },
  { label: 'Roboto (Estándar & Neutra)', value: "'Roboto', sans-serif" },
  { label: 'Lexend (Alta Legibilidad)', value: "'Lexend', sans-serif" },
  { label: 'Raleway (Elegancia Fina)', value: "'Raleway', sans-serif" },
  { label: 'Oswald (Condensada & Titulares)', value: "'Oswald', sans-serif" },
  { label: 'DM Sans (Limpia & Geométrica)', value: "'DM Sans', sans-serif" },
  { label: 'Sora (Tech Moderna)', value: "'Sora', sans-serif" },
  { label: 'Manrope (Moderna & Suave)', value: "'Manrope', sans-serif" }
];

export const StyleInspector: React.FC<StyleInspectorProps> = ({
  site,
  activeSection,
  onUpdateSite
}) => {
  const [linkPadding, setLinkPadding] = useState(true);
  const [linkMargin, setLinkMargin] = useState(true);
  const [linkRadius, setLinkRadius] = useState(true);
  const [activeTab, setActiveTab] = useState<'visual' | 'layout' | 'effects' | 'code'>('visual');

  const currentStyles: SectionCustomStyle =
    site.customSectionStyles?.[activeSection] || {};

  const handleStyleChange = (key: keyof SectionCustomStyle, value: any) => {
    const updated = {
      ...site,
      customSectionStyles: {
        ...(site.customSectionStyles || {}),
        [activeSection]: {
          ...currentStyles,
          [key]: value
        }
      }
    };
    onUpdateSite(updated);
  };

  const handleUniformPadding = (val: string) => {
    handleStyleChange('paddingTop', val);
    handleStyleChange('paddingBottom', val);
    handleStyleChange('paddingLeft', val);
    handleStyleChange('paddingRight', val);
  };

  const handleUniformMargin = (val: string) => {
    handleStyleChange('marginTop', val);
    handleStyleChange('marginBottom', val);
    handleStyleChange('marginLeft', val);
    handleStyleChange('marginRight', val);
  };

  const handleUniformRadius = (val: number) => {
    handleStyleChange('borderRadius', val);
    handleStyleChange('borderTopLeftRadius', val);
    handleStyleChange('borderTopRightRadius', val);
    handleStyleChange('borderBottomRightRadius', val);
    handleStyleChange('borderBottomLeftRadius', val);
  };

  return (
    <div className="p-4 space-y-5 text-white text-xs">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-white/10">
        <div>
          <span className="text-[10px] font-black uppercase tracking-wider text-[#FF00E5]">
            Estilo e Identidad Visual
          </span>
          <h4 className="text-sm font-extrabold capitalize text-white">{activeSection}</h4>
        </div>
        <Sparkles className="w-4 h-4 text-[#FF00E5]" />
      </div>

      {/* Sub-tabs for Style Inspector */}
      <div className="flex rounded-xl bg-[#1A1A24] p-1 border border-white/10 text-[11px] font-bold">
        <button
          type="button"
          onClick={() => setActiveTab('visual')}
          className={`flex-1 py-1.5 rounded-lg text-center transition-all ${
            activeTab === 'visual' ? 'bg-[#FF00E5] text-black font-black' : 'text-neutral-400 hover:text-white'
          }`}
        >
          Colores & Texto
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('layout')}
          className={`flex-1 py-1.5 rounded-lg text-center transition-all ${
            activeTab === 'layout' ? 'bg-[#FF00E5] text-black font-black' : 'text-neutral-400 hover:text-white'
          }`}
        >
          Espaciado
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('effects')}
          className={`flex-1 py-1.5 rounded-lg text-center transition-all ${
            activeTab === 'effects' ? 'bg-[#FF00E5] text-black font-black' : 'text-neutral-400 hover:text-white'
          }`}
        >
          Filtros & Sombra
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('code')}
          className={`flex-1 py-1.5 rounded-lg text-center transition-all ${
            activeTab === 'code' ? 'bg-[#FF00E5] text-black font-black' : 'text-neutral-400 hover:text-white'
          }`}
        >
          CSS
        </button>
      </div>

      {/* TAB 1: VISUAL (Colors & Typography) */}
      {activeTab === 'visual' && (
        <div className="space-y-4">
          {/* Accent Color Presets */}
          <div className="space-y-2">
            <label className="font-extrabold text-neutral-300 block">Color de Acento Neón:</label>
            <div className="grid grid-cols-4 gap-1.5">
              {NEON_PRESETS.map((preset) => {
                const isSelected = (site.accentColor || '#00E5FF') === preset.color;
                return (
                  <button
                    key={preset.color}
                    type="button"
                    onClick={() => onUpdateSite({ ...site, accentColor: preset.color })}
                    className={`h-8 rounded-xl flex items-center justify-center transition-all cursor-pointer border ${
                      isSelected ? 'border-white scale-105 shadow-md ring-2 ring-white/50' : 'border-white/10 hover:scale-102'
                    }`}
                    style={{ backgroundColor: preset.color }}
                    title={preset.name}
                  >
                    {isSelected && <Check className="w-3.5 h-3.5 text-black drop-shadow" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Section Background */}
          <div className="space-y-3 p-3 rounded-2xl bg-white/[0.02] border border-white/5">
            <label className="font-extrabold text-neutral-300 block">Fondo de Sección:</label>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <span className="text-[10px] text-neutral-400 block mb-1">Color Sólido:</span>
                <div className="flex items-center gap-1.5">
                  <input
                    type="color"
                    value={currentStyles.backgroundColor || '#0A0A0F'}
                    onChange={(e) => handleStyleChange('backgroundColor', e.target.value)}
                    className="w-7 h-7 rounded-lg bg-transparent border border-white/20 cursor-pointer"
                  />
                  <input
                    type="text"
                    value={currentStyles.backgroundColor || ''}
                    placeholder="#0A0A0F"
                    onChange={(e) => handleStyleChange('backgroundColor', e.target.value)}
                    className="flex-1 px-2 py-1 rounded-lg bg-[#1A1A24] border border-white/10 text-white font-mono text-[11px]"
                  />
                </div>
              </div>

              <div>
                <span className="text-[10px] text-neutral-400 block mb-1">Color de Texto:</span>
                <div className="flex items-center gap-1.5">
                  <input
                    type="color"
                    value={currentStyles.textColor || '#FFFFFF'}
                    onChange={(e) => handleStyleChange('textColor', e.target.value)}
                    className="w-7 h-7 rounded-lg bg-transparent border border-white/20 cursor-pointer"
                  />
                  <input
                    type="text"
                    value={currentStyles.textColor || ''}
                    placeholder="#FFFFFF"
                    onChange={(e) => handleStyleChange('textColor', e.target.value)}
                    className="flex-1 px-2 py-1 rounded-lg bg-[#1A1A24] border border-white/10 text-white font-mono text-[11px]"
                  />
                </div>
              </div>
            </div>

            <div>
              <span className="text-[10px] text-neutral-400 block mb-1">Degradado Lineal / Radial:</span>
              <input
                type="text"
                value={currentStyles.backgroundGradient || ''}
                placeholder="linear-gradient(135deg, #12121A 0%, #0A0A0F 100%)"
                onChange={(e) => handleStyleChange('backgroundGradient', e.target.value)}
                className="w-full px-2.5 py-1.5 rounded-lg bg-[#1A1A24] border border-white/10 text-white text-[11px] font-mono"
              />
            </div>
          </div>

          {/* Typography */}
          <div className="space-y-3 p-3 rounded-2xl bg-white/[0.02] border border-white/5">
            <label className="font-extrabold text-neutral-300 block">Tipografía:</label>
            <div>
              <span className="text-[10px] text-neutral-400 block mb-1">Familia Tipográfica:</span>
              <select
                value={site.fontFamily || "'Plus Jakarta Sans', sans-serif"}
                onChange={(e) => onUpdateSite({ ...site, fontFamily: e.target.value })}
                className="w-full px-2.5 py-1.5 rounded-xl bg-[#1A1A24] border border-white/10 text-white font-bold text-xs"
              >
                {GOOGLE_FONTS.map((f) => (
                  <option key={f.value} value={f.value}>
                    {f.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <span className="text-[10px] text-neutral-400 block mb-1">Alineación:</span>
                <div className="flex rounded-lg bg-[#1A1A24] p-0.5 border border-white/10">
                  {(['left', 'center', 'right', 'justify'] as const).map((align) => (
                    <button
                      key={align}
                      type="button"
                      onClick={() => handleStyleChange('textAlign', align)}
                      className={`flex-1 p-1 rounded flex items-center justify-center transition-colors ${
                        (currentStyles.textAlign || 'center') === align
                          ? 'bg-[#00E5FF] text-black'
                          : 'text-neutral-400 hover:text-white'
                      }`}
                    >
                      {align === 'left' && <AlignLeft className="w-3 h-3" />}
                      {align === 'center' && <AlignCenter className="w-3 h-3" />}
                      {align === 'right' && <AlignRight className="w-3 h-3" />}
                      {align === 'justify' && <AlignJustify className="w-3 h-3" />}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-[10px] text-neutral-400 block mb-1">Transformación:</span>
                <select
                  value={currentStyles.textTransform || 'none'}
                  onChange={(e) => handleStyleChange('textTransform', e.target.value)}
                  className="w-full px-2 py-1.5 rounded-lg bg-[#1A1A24] border border-white/10 text-white text-xs"
                >
                  <option value="none">Normal</option>
                  <option value="uppercase">MAYÚSCULAS</option>
                  <option value="lowercase">minúsculas</option>
                  <option value="capitalize">Capitalizar</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: LAYOUT & SPACING */}
      {activeTab === 'layout' && (
        <div className="space-y-4">
          {/* Padding */}
          <div className="space-y-2 p-3 rounded-2xl bg-white/[0.02] border border-white/5">
            <div className="flex items-center justify-between">
              <label className="font-extrabold text-neutral-300">Relleno Interno (Padding):</label>
              <button
                type="button"
                onClick={() => setLinkPadding(!linkPadding)}
                className={`p-1 rounded-md transition-colors ${
                  linkPadding ? 'text-[#00E5FF] bg-[#00E5FF]/10' : 'text-neutral-400'
                }`}
                title={linkPadding ? 'Lados vinculados' : 'Lados independientes'}
              >
                {linkPadding ? <Link className="w-3.5 h-3.5" /> : <Unlink className="w-3.5 h-3.5" />}
              </button>
            </div>

            {linkPadding ? (
              <input
                type="text"
                value={currentStyles.paddingTop || '80px'}
                onChange={(e) => handleUniformPadding(e.target.value)}
                placeholder="80px"
                className="w-full px-3 py-1.5 rounded-xl bg-[#1A1A24] border border-white/10 text-white font-bold text-center text-xs"
              />
            ) : (
              <div className="grid grid-cols-4 gap-1.5 text-center">
                <div>
                  <span className="text-[9px] text-neutral-400 block">TOP</span>
                  <input
                    type="text"
                    value={currentStyles.paddingTop || '80px'}
                    onChange={(e) => handleStyleChange('paddingTop', e.target.value)}
                    className="w-full px-1.5 py-1 rounded-lg bg-[#1A1A24] border border-white/10 text-white text-center text-xs"
                  />
                </div>
                <div>
                  <span className="text-[9px] text-neutral-400 block">RIGHT</span>
                  <input
                    type="text"
                    value={currentStyles.paddingRight || '24px'}
                    onChange={(e) => handleStyleChange('paddingRight', e.target.value)}
                    className="w-full px-1.5 py-1 rounded-lg bg-[#1A1A24] border border-white/10 text-white text-center text-xs"
                  />
                </div>
                <div>
                  <span className="text-[9px] text-neutral-400 block">BOTTOM</span>
                  <input
                    type="text"
                    value={currentStyles.paddingBottom || '80px'}
                    onChange={(e) => handleStyleChange('paddingBottom', e.target.value)}
                    className="w-full px-1.5 py-1 rounded-lg bg-[#1A1A24] border border-white/10 text-white text-center text-xs"
                  />
                </div>
                <div>
                  <span className="text-[9px] text-neutral-400 block">LEFT</span>
                  <input
                    type="text"
                    value={currentStyles.paddingLeft || '24px'}
                    onChange={(e) => handleStyleChange('paddingLeft', e.target.value)}
                    className="w-full px-1.5 py-1 rounded-lg bg-[#1A1A24] border border-white/10 text-white text-center text-xs"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Margins */}
          <div className="space-y-2 p-3 rounded-2xl bg-white/[0.02] border border-white/5">
            <div className="flex items-center justify-between">
              <label className="font-extrabold text-neutral-300">Margen Externo (Margin):</label>
              <button
                type="button"
                onClick={() => setLinkMargin(!linkMargin)}
                className={`p-1 rounded-md transition-colors ${
                  linkMargin ? 'text-[#00E5FF] bg-[#00E5FF]/10' : 'text-neutral-400'
                }`}
              >
                {linkMargin ? <Link className="w-3.5 h-3.5" /> : <Unlink className="w-3.5 h-3.5" />}
              </button>
            </div>

            {linkMargin ? (
              <input
                type="text"
                value={currentStyles.marginTop || '0px'}
                onChange={(e) => handleUniformMargin(e.target.value)}
                placeholder="0px"
                className="w-full px-3 py-1.5 rounded-xl bg-[#1A1A24] border border-white/10 text-white font-bold text-center text-xs"
              />
            ) : (
              <div className="grid grid-cols-4 gap-1.5 text-center">
                <div>
                  <span className="text-[9px] text-neutral-400 block">TOP</span>
                  <input
                    type="text"
                    value={currentStyles.marginTop || '0px'}
                    onChange={(e) => handleStyleChange('marginTop', e.target.value)}
                    className="w-full px-1.5 py-1 rounded-lg bg-[#1A1A24] border border-white/10 text-white text-center text-xs"
                  />
                </div>
                <div>
                  <span className="text-[9px] text-neutral-400 block">RIGHT</span>
                  <input
                    type="text"
                    value={currentStyles.marginRight || '0px'}
                    onChange={(e) => handleStyleChange('marginRight', e.target.value)}
                    className="w-full px-1.5 py-1 rounded-lg bg-[#1A1A24] border border-white/10 text-white text-center text-xs"
                  />
                </div>
                <div>
                  <span className="text-[9px] text-neutral-400 block">BOTTOM</span>
                  <input
                    type="text"
                    value={currentStyles.marginBottom || '0px'}
                    onChange={(e) => handleStyleChange('marginBottom', e.target.value)}
                    className="w-full px-1.5 py-1 rounded-lg bg-[#1A1A24] border border-white/10 text-white text-center text-xs"
                  />
                </div>
                <div>
                  <span className="text-[9px] text-neutral-400 block">LEFT</span>
                  <input
                    type="text"
                    value={currentStyles.marginLeft || '0px'}
                    onChange={(e) => handleStyleChange('marginLeft', e.target.value)}
                    className="w-full px-1.5 py-1 rounded-lg bg-[#1A1A24] border border-white/10 text-white text-center text-xs"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Border Radius */}
          <div className="space-y-2 p-3 rounded-2xl bg-white/[0.02] border border-white/5">
            <div className="flex items-center justify-between">
              <label className="font-extrabold text-neutral-300">Radio de Bordes (px):</label>
              <button
                type="button"
                onClick={() => setLinkRadius(!linkRadius)}
                className={`p-1 rounded-md transition-colors ${
                  linkRadius ? 'text-[#00E5FF] bg-[#00E5FF]/10' : 'text-neutral-400'
                }`}
              >
                {linkRadius ? <Link className="w-3.5 h-3.5" /> : <Unlink className="w-3.5 h-3.5" />}
              </button>
            </div>

            {linkRadius ? (
              <div className="flex items-center gap-3">
                <input
                  type="range"
                  min="0"
                  max="48"
                  value={currentStyles.borderRadius ?? site.borderRadius ?? 16}
                  onChange={(e) => handleUniformRadius(Number(e.target.value))}
                  className="flex-1 accent-[#00E5FF]"
                />
                <span className="font-mono font-bold text-xs w-10 text-right">
                  {currentStyles.borderRadius ?? site.borderRadius ?? 16}px
                </span>
              </div>
            ) : (
              <div className="grid grid-cols-4 gap-1.5 text-center">
                <div>
                  <span className="text-[9px] text-neutral-400 block">TL</span>
                  <input
                    type="number"
                    value={currentStyles.borderTopLeftRadius ?? 16}
                    onChange={(e) => handleStyleChange('borderTopLeftRadius', Number(e.target.value))}
                    className="w-full px-1.5 py-1 rounded-lg bg-[#1A1A24] border border-white/10 text-white text-center text-xs"
                  />
                </div>
                <div>
                  <span className="text-[9px] text-neutral-400 block">TR</span>
                  <input
                    type="number"
                    value={currentStyles.borderTopRightRadius ?? 16}
                    onChange={(e) => handleStyleChange('borderTopRightRadius', Number(e.target.value))}
                    className="w-full px-1.5 py-1 rounded-lg bg-[#1A1A24] border border-white/10 text-white text-center text-xs"
                  />
                </div>
                <div>
                  <span className="text-[9px] text-neutral-400 block">BR</span>
                  <input
                    type="number"
                    value={currentStyles.borderBottomRightRadius ?? 16}
                    onChange={(e) => handleStyleChange('borderBottomRightRadius', Number(e.target.value))}
                    className="w-full px-1.5 py-1 rounded-lg bg-[#1A1A24] border border-white/10 text-white text-center text-xs"
                  />
                </div>
                <div>
                  <span className="text-[9px] text-neutral-400 block">BL</span>
                  <input
                    type="number"
                    value={currentStyles.borderBottomLeftRadius ?? 16}
                    onChange={(e) => handleStyleChange('borderBottomLeftRadius', Number(e.target.value))}
                    className="w-full px-1.5 py-1 rounded-lg bg-[#1A1A24] border border-white/10 text-white text-center text-xs"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* TAB 3: EFFECTS & SHADOWS */}
      {activeTab === 'effects' && (
        <div className="space-y-4">
          {/* Shadow Presets */}
          <div className="space-y-2 p-3 rounded-2xl bg-white/[0.02] border border-white/5">
            <label className="font-extrabold text-neutral-300 block">Sombra / Glow Neón:</label>
            <div className="grid grid-cols-2 gap-2">
              {[
                { id: 'none', label: 'Sin Sombra' },
                { id: 'soft', label: 'Suave Elegante' },
                { id: 'deep', label: 'Profunda' },
                { id: 'glow-cyan', label: 'Glow Cian' },
                { id: 'glow-magenta', label: 'Glow Magenta' },
                { id: 'glow-green', label: 'Glow Matrix' }
              ].map((s) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => handleStyleChange('shadowPreset', s.id)}
                  className={`py-1.5 px-2 rounded-xl text-xs font-bold border transition-all ${
                    (currentStyles.shadowPreset || 'none') === s.id
                      ? 'border-[#00E5FF] bg-[#00E5FF]/20 text-[#00E5FF]'
                      : 'border-white/10 bg-[#1A1A24] text-neutral-400 hover:text-white'
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          {/* Opacity slider */}
          <div className="space-y-2 p-3 rounded-2xl bg-white/[0.02] border border-white/5">
            <div className="flex items-center justify-between">
              <label className="font-extrabold text-neutral-300">Opacidad:</label>
              <span className="font-mono text-xs text-[#00E5FF]">
                {currentStyles.opacity ?? 100}%
              </span>
            </div>
            <input
              type="range"
              min="10"
              max="100"
              value={currentStyles.opacity ?? 100}
              onChange={(e) => handleStyleChange('opacity', Number(e.target.value))}
              className="w-full accent-[#00E5FF]"
            />
          </div>

          {/* Blur & Backdrop filter */}
          <div className="space-y-2 p-3 rounded-2xl bg-white/[0.02] border border-white/5">
            <div className="flex items-center justify-between">
              <label className="font-extrabold text-neutral-300">Desenfoque (Blur):</label>
              <span className="font-mono text-xs text-[#00E5FF]">
                {currentStyles.blur ?? 0}px
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="30"
              value={currentStyles.blur ?? 0}
              onChange={(e) => handleStyleChange('blur', Number(e.target.value))}
              className="w-full accent-[#00E5FF]"
            />
          </div>
        </div>
      )}

      {/* TAB 4: RAW CUSTOM CSS */}
      {activeTab === 'code' && (
        <div className="space-y-2">
          <label className="font-extrabold text-neutral-300 flex items-center gap-1.5">
            <Code className="w-3.5 h-3.5 text-[#00FF88]" />
            <span>CSS Personalizado para esta Sección:</span>
          </label>
          <textarea
            rows={8}
            value={currentStyles.customCss || ''}
            onChange={(e) => handleStyleChange('customCss', e.target.value)}
            placeholder="/* Escribe propiedades CSS estándar */&#10;border: 1px solid rgba(0, 229, 255, 0.3);&#10;backdrop-filter: blur(16px);&#10;box-shadow: 0 0 30px rgba(0, 229, 255, 0.15);"
            className="w-full px-3 py-2.5 rounded-xl bg-[#1A1A24] border border-white/10 text-[#00FF88] font-mono text-[11px] focus:border-[#00FF88] outline-none"
          />
          <p className="text-[10px] text-neutral-500">
            Los estilos CSS ingresados aquí se aplican dinámicamente sobre el contenedor de la sección seleccionada.
          </p>
        </div>
      )}
    </div>
  );
};
