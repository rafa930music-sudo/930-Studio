import React from 'react';
import { X, Command, Keyboard, Zap, Sparkles } from 'lucide-react';

interface KeyboardShortcutsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const KeyboardShortcutsModal: React.FC<KeyboardShortcutsModalProps> = ({
  isOpen,
  onClose
}) => {
  if (!isOpen) return null;

  const shortcuts = [
    { key: 'Ctrl + S / ⌘S', label: 'Guardar sitio web', desc: 'Guarda instantáneamente los cambios en el almacenamiento local.' },
    { key: 'Ctrl + E / ⌘E', label: 'Exportar proyecto', desc: 'Abre el modal de exportación (HTML, ZIP, SEO y código).' },
    { key: 'Ctrl + Z / ⌘Z', label: 'Deshacer cambio', desc: 'Revierte la última acción en el historial (hasta 50 snapshots).' },
    { key: 'Ctrl + Y / ⌘Y', label: 'Rehacer cambio', desc: 'Avanza hacia la acción previamente deshecha.' },
    { key: 'Ctrl + D / ⌘D', label: 'Duplicar sección', desc: 'Crea una copia idéntica de la sección actualmente seleccionada.' },
    { key: 'Supr / Delete', label: 'Eliminar sección', desc: 'Elimina la sección seleccionada tras confirmación rápida.' },
    { key: 'Shift + ↑ / ↓', label: 'Mover sección', desc: 'Sube o baja la posición de la sección en el orden visual del sitio.' },
    { key: 'Doble Clic', label: 'Edición en vivo', desc: 'Edita textos inline con barra flotante o cambia imágenes al instante.' },
    { key: 'Clic Derecho', label: 'Menú contextual', desc: 'Abre menú flotante de acciones rápidas sobre cualquier sección.' },
    { key: 'Ctrl + Rueda', label: 'Zoom de lienzo', desc: 'Amplía o aleja el lienzo de trabajo entre 25% y 200%.' },
    { key: 'Esc', label: 'Cerrar modales / paneles', desc: 'Cierra cualquier panel, modal o menú abierto.' },
    { key: '?', label: 'Atajos de teclado', desc: 'Muestra u oculta esta ventana de ayuda rápida.' }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="border border-white/10 rounded-3xl w-full max-w-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.9)] flex flex-col bg-[#12121A] text-white">
        {/* Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#00E5FF]/15 text-[#00E5FF] border border-[#00E5FF]/30 flex items-center justify-center shadow-[0_0_15px_rgba(0,229,255,0.25)]">
              <Keyboard className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-black tracking-tight text-white flex items-center gap-2">
                Atajos de Teclado del Editor
                <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-[#00FF88]/15 text-[#00FF88] border border-[#00FF88]/30">
                  Productividad ⚡
                </span>
              </h3>
              <p className="text-xs text-neutral-400">Controla 930 Studio a máxima velocidad</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-neutral-400 hover:text-white rounded-xl hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Shortcuts list */}
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[65vh] overflow-y-auto">
          {shortcuts.map((sc, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-[#00E5FF]/30 transition-all flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-extrabold text-xs text-white">{sc.label}</span>
                <kbd className="px-2 py-1 rounded-lg bg-[#1A1A24] border border-white/15 text-[11px] font-mono text-[#00E5FF] font-black shadow-inner">
                  {sc.key}
                </kbd>
              </div>
              <p className="text-[11px] text-neutral-400 leading-relaxed font-normal">
                {sc.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-white/10 flex items-center justify-between text-xs text-neutral-400 bg-white/[0.02]">
          <div className="flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5 text-[#00E5FF]" />
            <span>Presiona <kbd className="px-1.5 py-0.5 rounded bg-[#1A1A24] text-[10px] text-white">?</kbd> en el editor para abrir esta guía</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold transition-colors cursor-pointer"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
};
