import React from 'react';
import { SiteConfig, SectionType, ElementSettingsConfig } from '../../types';
import {
  Settings2,
  Zap,
  Smartphone,
  Tablet,
  Monitor,
  EyeOff,
  Code,
  ShieldCheck,
  Sparkles,
  Play
} from 'lucide-react';

interface SettingsInspectorProps {
  site: SiteConfig;
  activeSection: SectionType;
  onUpdateSite: (updatedSite: SiteConfig) => void;
}

export const SettingsInspector: React.FC<SettingsInspectorProps> = ({
  site,
  activeSection,
  onUpdateSite
}) => {
  const currentSettings: ElementSettingsConfig =
    (site.elementSettings?.[activeSection] as ElementSettingsConfig) || {};

  const handleSettingChange = (key: keyof ElementSettingsConfig, value: any) => {
    const updated = {
      ...site,
      elementSettings: {
        ...(site.elementSettings || {}),
        [activeSection]: {
          ...currentSettings,
          [key]: value
        }
      }
    };
    onUpdateSite(updated);
  };

  const animObj = typeof currentSettings.animation === 'object' && currentSettings.animation !== null
    ? currentSettings.animation
    : { type: typeof currentSettings.animation === 'string' ? currentSettings.animation : 'fadeIn', duration: 0.6, delay: 0 };

  return (
    <div className="p-4 space-y-6 text-white text-xs">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-white/10">
        <div>
          <span className="text-[10px] font-black uppercase tracking-wider text-[#00FF88]">
            Ajustes Avanzados
          </span>
          <h4 className="text-sm font-extrabold capitalize text-white">{activeSection}</h4>
        </div>
        <Settings2 className="w-4 h-4 text-[#00FF88]" />
      </div>

      {/* 1. Scroll Entry Animation */}
      <div className="space-y-3 p-3 rounded-2xl bg-white/[0.02] border border-white/5">
        <label className="font-extrabold text-neutral-300 flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-[#00FF88]" />
          <span>Animación de Entrada al Hacer Scroll:</span>
        </label>
        <select
          value={animObj.type || 'fadeIn'}
          onChange={(e) =>
            handleSettingChange('animation', {
              ...animObj,
              type: e.target.value
            })
          }
          className="w-full px-3 py-2 rounded-xl bg-[#1A1A24] border border-white/10 text-white font-bold focus:border-[#00FF88] outline-none"
        >
          <option value="none">Sin animación (Estático)</option>
          <option value="fadeIn">Aparición Suave (Fade In)</option>
          <option value="slideUp">Deslizar desde abajo (Slide Up)</option>
          <option value="slideDown">Deslizar desde arriba (Slide Down)</option>
          <option value="slideLeft">Deslizar desde la izquierda</option>
          <option value="slideRight">Deslizar desde la derecha</option>
          <option value="zoomIn">Aumento suave (Zoom In)</option>
          <option value="bounce">Rebote elástico (Bounce)</option>
        </select>

        <div className="grid grid-cols-2 gap-2 pt-1">
          <div>
            <span className="text-[10px] text-neutral-400 block mb-1">Duración (segundos):</span>
            <input
              type="number"
              step="0.1"
              min="0.1"
              max="5"
              value={animObj.duration ?? 0.6}
              onChange={(e) =>
                handleSettingChange('animation', {
                  ...animObj,
                  duration: parseFloat(e.target.value) || 0.6
                })
              }
              className="w-full px-2.5 py-1.5 rounded-lg bg-[#1A1A24] border border-white/10 text-white font-bold"
            />
          </div>
          <div>
            <span className="text-[10px] text-neutral-400 block mb-1">Retardo / Delay (s):</span>
            <input
              type="number"
              step="0.1"
              min="0"
              max="5"
              value={animObj.delay ?? 0}
              onChange={(e) =>
                handleSettingChange('animation', {
                  ...animObj,
                  delay: parseFloat(e.target.value) || 0
                })
              }
              className="w-full px-2.5 py-1.5 rounded-lg bg-[#1A1A24] border border-white/10 text-white font-bold"
            />
          </div>
        </div>
      </div>

      {/* 2. Responsive Device Visibility */}
      <div className="space-y-3 p-3 rounded-2xl bg-white/[0.02] border border-white/5">
        <label className="font-extrabold text-neutral-300 block">
          Visibilidad por Dispositivo:
        </label>
        <div className="space-y-2">
          <label className="flex items-center justify-between p-2 rounded-xl bg-[#1A1A24] border border-white/5 cursor-pointer">
            <div className="flex items-center gap-2 text-neutral-300">
              <Smartphone className="w-3.5 h-3.5 text-neutral-400" />
              <span>Ocultar en Móviles (&lt; 640px)</span>
            </div>
            <input
              type="checkbox"
              checked={!!currentSettings.visibility?.hideOnMobile}
              onChange={(e) =>
                handleSettingChange('visibility', {
                  ...(currentSettings.visibility || {}),
                  hideOnMobile: e.target.checked
                })
              }
              className="accent-[#00FF88] w-4 h-4 rounded"
            />
          </label>

          <label className="flex items-center justify-between p-2 rounded-xl bg-[#1A1A24] border border-white/5 cursor-pointer">
            <div className="flex items-center gap-2 text-neutral-300">
              <Tablet className="w-3.5 h-3.5 text-neutral-400" />
              <span>Ocultar en Tablets (640px - 1024px)</span>
            </div>
            <input
              type="checkbox"
              checked={!!currentSettings.visibility?.hideOnTablet}
              onChange={(e) =>
                handleSettingChange('visibility', {
                  ...(currentSettings.visibility || {}),
                  hideOnTablet: e.target.checked
                })
              }
              className="accent-[#00FF88] w-4 h-4 rounded"
            />
          </label>

          <label className="flex items-center justify-between p-2 rounded-xl bg-[#1A1A24] border border-white/5 cursor-pointer">
            <div className="flex items-center gap-2 text-neutral-300">
              <Monitor className="w-3.5 h-3.5 text-neutral-400" />
              <span>Ocultar en Computadoras (&gt; 1024px)</span>
            </div>
            <input
              type="checkbox"
              checked={!!currentSettings.visibility?.hideOnDesktop}
              onChange={(e) =>
                handleSettingChange('visibility', {
                  ...(currentSettings.visibility || {}),
                  hideOnDesktop: e.target.checked
                })
              }
              className="accent-[#00FF88] w-4 h-4 rounded"
            />
          </label>
        </div>
      </div>

      {/* 3. Custom CSS Classes & ID Anchor */}
      <div className="space-y-3">
        <div>
          <label className="font-extrabold text-neutral-300 block mb-1">
            Identificador ID / Ancla Web:
          </label>
          <input
            type="text"
            value={currentSettings.customId || `section-${activeSection}`}
            onChange={(e) => handleSettingChange('customId', e.target.value)}
            placeholder={`section-${activeSection}`}
            className="w-full px-3 py-2 rounded-xl bg-[#1A1A24] border border-white/10 text-white font-mono text-[11px] focus:border-[#00FF88] outline-none"
          />
        </div>

        <div>
          <label className="font-extrabold text-neutral-300 block mb-1">
            Clases CSS Personalizadas (Tailwind):
          </label>
          <input
            type="text"
            value={currentSettings.customClasses || ''}
            onChange={(e) => handleSettingChange('customClasses', e.target.value)}
            placeholder="Ej. relative overflow-hidden backdrop-blur-md"
            className="w-full px-3 py-2 rounded-xl bg-[#1A1A24] border border-white/10 text-white font-mono text-[11px] focus:border-[#00FF88] outline-none"
          />
        </div>
      </div>

      {/* 4. Accessibility & Semantics */}
      <div className="space-y-3 p-3 rounded-2xl bg-white/[0.02] border border-white/5">
        <label className="font-extrabold text-neutral-300 flex items-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-[#00FF88]" />
          <span>Accesibilidad (a11y):</span>
        </label>
        <div>
          <span className="text-[10px] text-neutral-400 block mb-1">Etiqueta ARIA (aria-label):</span>
          <input
            type="text"
            value={currentSettings.ariaLabel || ''}
            onChange={(e) => handleSettingChange('ariaLabel', e.target.value)}
            placeholder={`Sección de ${activeSection}`}
            className="w-full px-2.5 py-1.5 rounded-lg bg-[#1A1A24] border border-white/10 text-white"
          />
        </div>
      </div>
    </div>
  );
};
