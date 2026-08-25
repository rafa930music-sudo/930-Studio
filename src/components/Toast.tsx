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

export const ToastContainer: React.FC<ToastProps> = ({ toasts, onDismiss, isDark = false }) => {
  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2.5 max-w-sm w-full pointer-events-none">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`pointer-events-auto flex items-start gap-3 p-4 rounded-xl shadow-lg border transition-all duration-300 transform translate-x-0 ${
            isDark
              ? 'bg-[#12121A] text-white border-white/10'
              : 'bg-white text-[#0F172A] border-[#E5E7EB]'
          }`}
          style={{ animation: 'slideInRight 0.3s cubic-bezier(0.4, 0, 0.2, 1)' }}
        >
          {/* Icon */}
          <div className="shrink-0 mt-0.5">
            {toast.type === 'success' && (
              <div className="w-6 h-6 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-[#00FF88] flex items-center justify-center">
                <CheckCircle2 className="w-4 h-4" />
              </div>
            )}
            {toast.type === 'error' && (
              <div className="w-6 h-6 rounded-lg bg-rose-500/10 text-rose-600 dark:text-[#FF2E63] flex items-center justify-center">
                <AlertCircle className="w-4 h-4" />
              </div>
            )}
            {toast.type === 'info' && (
              <div className="w-6 h-6 rounded-lg bg-cyan-500/10 text-[#00B8D4] dark:text-[#00E5FF] flex items-center justify-center">
                <Info className="w-4 h-4" />
              </div>
            )}
          </div>

          {/* Text */}
          <div className="flex-1 min-w-0">
            <h4 className="text-xs font-bold leading-tight tracking-tight text-[#0F172A] dark:text-white">{toast.title}</h4>
            {toast.description && (
              <p className="text-[11px] mt-1 leading-relaxed text-[#64748B] dark:text-neutral-400 font-medium">
                {toast.description}
              </p>
            )}
          </div>

          {/* Close */}
          <button
            onClick={() => onDismiss(toast.id)}
            className="p-1 rounded-lg hover:bg-[#F0F0F3] dark:hover:bg-white/10 text-[#64748B] hover:text-[#0F172A] dark:hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      ))}
    </div>
  );
};

