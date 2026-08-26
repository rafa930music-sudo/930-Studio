import React from 'react';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export interface ToastMessage {
  id: string;
  type: 'success' | 'error' | 'info';
  title: string;
  description?: string;
}

interface ToastProps {
  toasts: ToastMessage[];
  onDismiss: (id: string) => void;
  isDark?: boolean;
}

export const ToastContainer: React.FC<ToastProps> = ({ toasts, onDismiss }) => {
  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2.5 max-w-sm w-full pointer-events-none">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="pointer-events-auto flex items-start gap-3 p-4 rounded-2xl shadow-[0_10px_35px_rgba(0,0,0,0.8)] border border-white/10 bg-[#12121A]/95 backdrop-blur-xl text-white transition-all duration-300 transform translate-x-0"
          style={{ animation: 'slideInRight 0.3s cubic-bezier(0.16, 1, 0.3, 1)' }}
        >
          {/* Icon */}
          <div className="shrink-0 mt-0.5">
            {toast.type === 'success' && (
              <div className="w-7 h-7 rounded-xl bg-[#00FF88]/15 border border-[#00FF88]/30 text-[#00FF88] flex items-center justify-center shadow-[0_0_10px_rgba(0,255,136,0.25)]">
                <CheckCircle2 className="w-4 h-4" />
              </div>
            )}
            {toast.type === 'error' && (
              <div className="w-7 h-7 rounded-xl bg-[#FF00E5]/15 border border-[#FF00E5]/30 text-[#FF00E5] flex items-center justify-center shadow-[0_0_10px_rgba(255,0,229,0.25)]">
                <AlertCircle className="w-4 h-4" />
              </div>
            )}
            {toast.type === 'info' && (
              <div className="w-7 h-7 rounded-xl bg-[#00E5FF]/15 border border-[#00E5FF]/30 text-[#00E5FF] flex items-center justify-center shadow-[0_0_10px_rgba(0,229,255,0.25)]">
                <Info className="w-4 h-4" />
              </div>
            )}
          </div>

          {/* Text */}
          <div className="flex-1 min-w-0">
            <h4 className="text-xs font-extrabold leading-tight tracking-tight text-white">{toast.title}</h4>
            {toast.description && (
              <p className="text-[11px] mt-1 leading-relaxed text-neutral-300 font-normal">
                {toast.description}
              </p>
            )}
          </div>

          {/* Close */}
          <button
            onClick={() => onDismiss(toast.id)}
            className="p-1 rounded-lg hover:bg-white/10 text-neutral-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Cerrar notificación"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      ))}
    </div>
  );
};

