import React from 'react';
import { Bold, Italic, Underline, Link, AlignLeft, AlignCenter, AlignRight, Sparkles, Palette } from 'lucide-react';

interface InlineTextToolbarProps {
  position: { top: number; left: number };
  onApplyFormat: (format: 'bold' | 'italic' | 'underline' | 'align-left' | 'align-center' | 'align-right' | 'color' | 'link') => void;
  onClose: () => void;
}

export const InlineTextToolbar: React.FC<InlineTextToolbarProps> = ({
  position,
  onApplyFormat,
  onClose
}) => {
  return (
    <div
      className="fixed z-50 flex items-center gap-1 p-1.5 rounded-2xl bg-[#12121A] border border-white/15 shadow-[0_10px_30px_rgba(0,0,0,0.8)] backdrop-blur-xl animate-fade-in text-white text-xs font-bold"
      style={{
        top: Math.max(10, position.top - 50),
        left: Math.max(10, position.left)
      }}
      onClick={(e) => e.stopPropagation()}
    >
      <button
        type="button"
        onClick={() => onApplyFormat('bold')}
        className="p-1.5 rounded-lg hover:bg-white/10 text-neutral-300 hover:text-white transition-colors cursor-pointer"
        title="Negrita"
      >
        <Bold className="w-3.5 h-3.5" />
      </button>

      <button
        type="button"
        onClick={() => onApplyFormat('italic')}
        className="p-1.5 rounded-lg hover:bg-white/10 text-neutral-300 hover:text-white transition-colors cursor-pointer"
        title="Cursiva"
      >
        <Italic className="w-3.5 h-3.5" />
      </button>

      <button
        type="button"
        onClick={() => onApplyFormat('underline')}
        className="p-1.5 rounded-lg hover:bg-white/10 text-neutral-300 hover:text-white transition-colors cursor-pointer"
        title="Subrayado"
      >
        <Underline className="w-3.5 h-3.5" />
      </button>

      <div className="h-4 w-px bg-white/10 mx-0.5" />

      <button
        type="button"
        onClick={() => onApplyFormat('align-left')}
        className="p-1.5 rounded-lg hover:bg-white/10 text-neutral-300 hover:text-white transition-colors cursor-pointer"
        title="Alinear a la izquierda"
      >
        <AlignLeft className="w-3.5 h-3.5" />
      </button>

      <button
        type="button"
        onClick={() => onApplyFormat('align-center')}
        className="p-1.5 rounded-lg hover:bg-white/10 text-neutral-300 hover:text-white transition-colors cursor-pointer"
        title="Centrar"
      >
        <AlignCenter className="w-3.5 h-3.5" />
      </button>

      <button
        type="button"
        onClick={() => onApplyFormat('align-right')}
        className="p-1.5 rounded-lg hover:bg-white/10 text-neutral-300 hover:text-white transition-colors cursor-pointer"
        title="Alinear a la derecha"
      >
        <AlignRight className="w-3.5 h-3.5" />
      </button>

      <div className="h-4 w-px bg-white/10 mx-0.5" />

      <button
        type="button"
        onClick={() => onApplyFormat('color')}
        className="p-1.5 rounded-lg hover:bg-[#00E5FF]/20 text-[#00E5FF] transition-colors cursor-pointer"
        title="Color Neón"
      >
        <Palette className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};
