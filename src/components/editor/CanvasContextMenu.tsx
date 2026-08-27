import React from 'react';
import { SectionType } from '../../types';
import {
  Copy,
  Trash2,
  ArrowUp,
  ArrowDown,
  Edit3,
  Sliders,
  Sparkles,
  EyeOff,
  Eye,
  Layers
} from 'lucide-react';

interface CanvasContextMenuProps {
  x: number;
  y: number;
  section: SectionType;
  onClose: () => void;
  onEditContent: (section: SectionType) => void;
  onEditStyle: (section: SectionType) => void;
  onDuplicate: (section: SectionType) => void;
  onMoveUp: (section: SectionType) => void;
  onMoveDown: (section: SectionType) => void;
  onDelete: (section: SectionType) => void;
  onSaveAsComponent?: (section: SectionType) => void;
  onToggleVisibility?: (section: SectionType) => void;
}

export const CanvasContextMenu: React.FC<CanvasContextMenuProps> = ({
  x,
  y,
  section,
  onClose,
  onEditContent,
  onEditStyle,
  onDuplicate,
  onMoveUp,
  onMoveDown,
  onDelete,
  onSaveAsComponent
}) => {
  // Ensure menu stays within window bounds
  const adjustedX = Math.min(x, window.innerWidth - 220);
  const adjustedY = Math.min(y, window.innerHeight - 320);

  return (
    <>
      <div className="fixed inset-0 z-50" onClick={onClose} onContextMenu={(e) => { e.preventDefault(); onClose(); }} />
      <div
        className="fixed z-50 w-56 rounded-2xl bg-[#12121A] border border-white/15 p-1.5 shadow-[0_15px_40px_rgba(0,0,0,0.9)] backdrop-blur-2xl animate-fade-in text-white text-xs font-bold space-y-0.5"
        style={{ top: adjustedY, left: adjustedX }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-3 py-1.5 text-[10px] font-black uppercase tracking-wider text-neutral-400 border-b border-white/10 flex items-center justify-between">
          <span>Sección: {section}</span>
          <Layers className="w-3 h-3 text-[#00E5FF]" />
        </div>

        <button
          onClick={() => {
            onEditContent(section);
            onClose();
          }}
          className="w-full px-3 py-2 rounded-xl hover:bg-white/10 flex items-center gap-2.5 text-neutral-200 hover:text-white transition-colors cursor-pointer text-left"
        >
          <Edit3 className="w-3.5 h-3.5 text-[#00E5FF]" />
          <span>Editar Contenido</span>
        </button>

        <button
          onClick={() => {
            onEditStyle(section);
            onClose();
          }}
          className="w-full px-3 py-2 rounded-xl hover:bg-white/10 flex items-center gap-2.5 text-neutral-200 hover:text-white transition-colors cursor-pointer text-left"
        >
          <Sliders className="w-3.5 h-3.5 text-[#FF00E5]" />
          <span>Personalizar Estilo</span>
        </button>

        <div className="h-px bg-white/10 my-1" />

        <button
          onClick={() => {
            onDuplicate(section);
            onClose();
          }}
          className="w-full px-3 py-2 rounded-xl hover:bg-white/10 flex items-center gap-2.5 text-neutral-200 hover:text-white transition-colors cursor-pointer text-left"
        >
          <Copy className="w-3.5 h-3.5 text-[#00FF88]" />
          <span>Duplicar Sección</span>
        </button>

        {onSaveAsComponent && (
          <button
            onClick={() => {
              onSaveAsComponent(section);
              onClose();
            }}
            className="w-full px-3 py-2 rounded-xl hover:bg-white/10 flex items-center gap-2.5 text-neutral-200 hover:text-white transition-colors cursor-pointer text-left"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#FFD700]" />
            <span>Guardar en Biblioteca</span>
          </button>
        )}

        <button
          onClick={() => {
            onMoveUp(section);
            onClose();
          }}
          className="w-full px-3 py-2 rounded-xl hover:bg-white/10 flex items-center gap-2.5 text-neutral-200 hover:text-white transition-colors cursor-pointer text-left"
        >
          <ArrowUp className="w-3.5 h-3.5 text-neutral-400" />
          <span>Mover Arriba</span>
        </button>

        <button
          onClick={() => {
            onMoveDown(section);
            onClose();
          }}
          className="w-full px-3 py-2 rounded-xl hover:bg-white/10 flex items-center gap-2.5 text-neutral-200 hover:text-white transition-colors cursor-pointer text-left"
        >
          <ArrowDown className="w-3.5 h-3.5 text-neutral-400" />
          <span>Mover Abajo</span>
        </button>

        <div className="h-px bg-white/10 my-1" />

        <button
          onClick={() => {
            onDelete(section);
            onClose();
          }}
          className="w-full px-3 py-2 rounded-xl hover:bg-rose-500/20 text-rose-400 hover:text-rose-300 flex items-center gap-2.5 transition-colors cursor-pointer text-left"
        >
          <Trash2 className="w-3.5 h-3.5" />
          <span>Eliminar Sección</span>
        </button>
      </div>
    </>
  );
};
