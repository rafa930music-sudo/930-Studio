import React, { useState } from 'react';
import {
  Heart,
  Sparkles,
  X,
  ExternalLink,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Gift
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
  isDark?: boolean;
}

export const DonationModal: React.FC<DonationModalProps> = ({ isOpen, onClose, isDark = false }) => {
  const [selectedTier, setSelectedTier] = useState<number>(10);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [hasDonated, setHasDonated] = useState(false);

  if (!isOpen) return null;

  const tiers = [
    { amount: 5, label: '1 Café', emoji: '☕', desc: 'Un detalle de agradecimiento' },
    { amount: 15, label: '3 Cafés', emoji: '🥐', desc: 'Mantiene la plataforma activa' },
    { amount: 30, label: 'Impulso Pro', emoji: '🚀', desc: 'Financia nuevas plantillas' },
    { amount: 60, label: 'Patrocinador', emoji: '💎', desc: 'Apoyo premium al software libre' }
  ];

  const handlePayPalClick = () => {
    confetti({
      particleCount: 90,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#00E5FF', '#FF00E5', '#00FF88', '#FFD700']
    });
    setHasDonated(true);
    const amount = customAmount ? customAmount : selectedTier;
    const paypalUrl = `https://www.paypal.me/930studio/${amount}`;
    window.open(paypalUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
      <div
        className={`border rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl flex flex-col transition-all relative ${
          isDark
            ? 'bg-[#12121A] border-white/10 text-white'
            : 'bg-white border-[#E5E7EB] text-[#0F172A]'
        }`}
      >
        {/* Header */}
        <div className="p-6 border-b border-inherit flex items-center justify-between relative z-10 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-pink-500/10 text-pink-500 border border-pink-500/20 flex items-center justify-center shadow-xs">
              <Heart className="w-5 h-5 fill-current" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-extrabold tracking-tight text-[#0F172A] dark:text-white">
                  Apoya 930 Studio
                </h3>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#00E5FF]/10 text-[#00B8D4] dark:text-[#00E5FF] border border-[#00E5FF]/20">
                  Gratuito
                </span>
              </div>
              <p className="text-xs text-[#64748B] dark:text-neutral-400">100% Gratuito y Libre de Suscripciones</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#64748B] hover:text-[#0F172A] dark:hover:text-white rounded-lg hover:bg-[#F0F0F3] dark:hover:bg-white/5 transition-colors cursor-pointer"
            title="Cerrar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-6 overflow-y-auto max-h-[75vh] relative z-10 bg-[#FAFAFC] dark:bg-transparent">
          {/* Main Description */}
          <div
            className={`p-4 rounded-xl border text-xs leading-relaxed font-medium ${
              isDark
                ? 'bg-white/5 border-white/10 text-neutral-300'
                : 'bg-white border-[#E5E7EB] text-[#334155] shadow-xs'
            }`}
          >
            Este proyecto es 100% gratuito y de libre uso. Si 930 Studio te ha resultado de gran ayuda para tus proyectos o clientes, puedes realizar una donación voluntaria vía PayPal para apoyar el mantenimiento y el diseño de más plantillas.
          </div>

          {/* Amount Tiers */}
          <div>
            <label className="text-xs font-bold text-[#0F172A] dark:text-neutral-300 block mb-2.5">
              Elige un monto de aporte (USD):
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {tiers.map((t) => (
                <button
                  key={t.amount}
                  type="button"
                  onClick={() => {
                    setSelectedTier(t.amount);
                    setCustomAmount('');
                  }}
                  className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                    selectedTier === t.amount && !customAmount
                      ? 'border-[#0F172A] bg-white text-[#0F172A] ring-2 ring-[#0F172A] dark:border-[#00E5FF] dark:bg-[#00E5FF]/10 dark:text-white dark:ring-[#00E5FF] shadow-xs font-bold'
                      : isDark
                      ? 'bg-white/5 border-white/5 text-neutral-300 hover:border-white/20'
                      : 'bg-white border-[#E5E7EB] text-[#334155] hover:border-[#D1D5DB] shadow-xs'
                  }`}
                >
                  <div className="text-base mb-1">{t.emoji}</div>
                  <div className="text-sm font-extrabold text-[#0F172A] dark:text-white">${t.amount}</div>
                  <div className="text-[10px] text-[#64748B] dark:text-neutral-400 truncate">{t.label}</div>
                </button>
              ))}
            </div>

            {/* Custom Amount */}
            <div className="mt-3 flex items-center gap-2">
              <span className="text-xs text-[#64748B] font-medium">O monto a tu elección:</span>
              <div className="relative flex-1">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-bold text-[#64748B]">$</span>
                <input
                  type="number"
                  min="1"
                  placeholder="Otro valor (ej. 25)"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value);
                    if (e.target.value) setSelectedTier(Number(e.target.value));
                  }}
                  className={`w-full pl-7 pr-3 py-2 rounded-lg text-xs font-bold border focus:outline-none focus:border-[#00E5FF] ${
                    isDark ? 'bg-[#181824] border-white/10 text-white' : 'bg-white border-[#E5E7EB] text-[#0F172A]'
                  }`}
                />
              </div>
            </div>
          </div>

          {/* Primary Action Button */}
          <div className="space-y-3">
            <button
              onClick={handlePayPalClick}
              className="w-full py-3.5 rounded-lg bg-[#0F172A] hover:bg-[#1E293B] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-xs transition-all cursor-pointer dark:bg-[#00E5FF] dark:text-black dark:hover:bg-[#00cce6]"
            >
              <Heart className="w-4 h-4 fill-current" />
              <span>Donar con PayPal (${customAmount ? customAmount : selectedTier} USD)</span>
              <ExternalLink className="w-3.5 h-3.5 ml-1" />
            </button>

            <p className="text-xs text-center text-[#64748B] dark:text-neutral-400 leading-normal font-medium">
              Cualquier contribución, grande o pequeña, es inmensamente valorada.
            </p>
          </div>

          {hasDonated && (
            <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-[#00FF88] text-xs font-bold text-center animate-fade-in flex items-center justify-center gap-2">
              <Gift className="w-4 h-4" />
              <span>¡Muchas gracias por apoyar el desarrollo de 930 Studio!</span>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-inherit flex items-center justify-between text-xs text-[#64748B] dark:text-neutral-500 bg-[#FAFAFC] dark:bg-white/[0.02] shrink-0">
          <div className="flex items-center gap-1.5 font-medium">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-[#00FF88]" />
            <span>Pago seguro procesado por PayPal.me</span>
          </div>
          <button
            onClick={onClose}
            className="px-3 py-1 rounded-lg hover:bg-[#F0F0F3] dark:hover:bg-white/10 text-[#64748B] dark:text-neutral-300 font-semibold transition-colors cursor-pointer"
          >
            Ahora no
          </button>
        </div>
      </div>
    </div>
  );
};
