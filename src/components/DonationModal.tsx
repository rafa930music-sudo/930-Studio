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

export const DonationModal: React.FC<DonationModalProps> = ({ isOpen, onClose }) => {
  const [selectedTier, setSelectedTier] = useState<number>(10);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [hasDonated, setHasDonated] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  if (!isOpen) return null;

  const tiers = [
    { amount: 3, label: '1 Café', emoji: '☕', desc: 'Un detalle de agradecimiento' },
    { amount: 5, label: 'Desayuno', emoji: '🥐', desc: 'Apoya el hosting libre' },
    { amount: 10, label: 'Impulso Pro', emoji: '🚀', desc: 'Financia nuevas plantillas' },
    { amount: 25, label: 'Patrocinador', emoji: '💎', desc: 'Apoyo premium al proyecto' }
  ];

  const handlePayPalClick = () => {
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#00E5FF', '#FF00E5', '#00FF88', '#FFD700']
    });
    setHasDonated(true);
    const amount = customAmount ? customAmount : selectedTier;
    const paypalUrl = `https://www.paypal.me/rafa930music/${amount}`;
    window.open(paypalUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="border border-white/10 rounded-3xl w-full max-w-lg overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.9)] flex flex-col transition-all relative bg-[#12121A] text-white">
        {/* Ambient glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF00E5]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#00E5FF]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between relative z-10 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-[#FF00E5]/15 text-[#FF00E5] border border-[#FF00E5]/30 flex items-center justify-center shadow-[0_0_15px_rgba(255,0,229,0.3)]">
              <Heart className="w-5 h-5 fill-current" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-black tracking-tight text-white">
                  Apoya a 930 Studio
                </h3>
                <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-[#00E5FF]/10 text-[#00E5FF] border border-[#00E5FF]/30">
                  100% Libre
                </span>
              </div>
              <p className="text-xs text-neutral-400">Sin suscripciones forzadas • Donación voluntaria</p>
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

        {/* Body */}
        <div className="p-6 space-y-6 overflow-y-auto max-h-[75vh] relative z-10">
          {/* Main Description */}
          <div className="p-4 rounded-2xl border border-white/10 bg-white/5 text-xs leading-relaxed text-neutral-300 font-normal">
            930 Studio es y seguirá siendo una herramienta accesible para creadores y agencias. Si te ha ayudado a crear sitios web para ti o tus clientes, puedes hacer una contribución voluntaria vía PayPal para apoyar el mantenimiento continuo y el diseño de más componentes.
          </div>

          {/* Amount Tiers */}
          <div>
            <label className="text-xs font-bold text-neutral-300 block mb-2.5">
              Selecciona tu aporte (USD):
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {tiers.map((t) => (
                <button
                  key={t.amount}
                  type="button"
                  onClick={() => {
                    setSelectedTier(t.amount);
                    setCustomAmount('');
                  }}
                  className={`p-3.5 rounded-2xl border text-center transition-all cursor-pointer ${
                    selectedTier === t.amount && !customAmount
                      ? 'border-[#00E5FF] bg-[#00E5FF]/15 text-white ring-2 ring-[#00E5FF] shadow-[0_0_20px_rgba(0,229,255,0.3)] font-bold scale-102'
                      : 'bg-white/5 border-white/10 text-neutral-300 hover:border-white/20 hover:bg-white/10'
                  }`}
                >
                  <div className="text-xl mb-1">{t.emoji}</div>
                  <div className="text-base font-black text-white">${t.amount}</div>
                  <div className="text-[11px] text-neutral-400 truncate">{t.label}</div>
                </button>
              ))}
            </div>

            {/* Custom Amount */}
            <div className="mt-3.5 flex items-center gap-3">
              <span className="text-xs text-neutral-400 font-medium">O cantidad personalizada:</span>
              <div className="relative flex-1">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-neutral-400">$</span>
                <input
                  type="number"
                  min="1"
                  placeholder="Ej. 50"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value);
                    if (e.target.value) setSelectedTier(Number(e.target.value));
                  }}
                  className="w-full pl-8 pr-3 py-2.5 rounded-xl text-xs font-bold border border-white/10 bg-[#161622] text-white focus:outline-none focus:border-[#00E5FF] focus:ring-1 focus:ring-[#00E5FF]"
                />
              </div>
            </div>
          </div>

          {/* Primary Action Button */}
          <div className="space-y-3">
            <button
              onClick={handlePayPalClick}
              className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-[#00E5FF] via-[#00B4D8] to-[#FF00E5] text-black text-xs font-black flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(0,229,255,0.4)] hover:scale-[1.02] transition-all cursor-pointer"
            >
              <Heart className="w-4 h-4 fill-black" />
              <span>Donar ${customAmount ? customAmount : selectedTier} USD con PayPal</span>
              <ExternalLink className="w-3.5 h-3.5 ml-1" />
            </button>

            <div className="pt-1 flex flex-col sm:flex-row items-center justify-between gap-2 p-3 rounded-xl bg-white/5 border border-white/10 text-xs">
              <div className="text-neutral-300">
                <span className="text-neutral-400">Cuenta PayPal directa: </span>
                <strong className="text-white font-mono">rafa.930music@gmail.com</strong>
              </div>
              <button
                type="button"
                onClick={() => {
                  navigator.clipboard.writeText('rafa.930music@gmail.com');
                  setCopiedEmail(true);
                  setTimeout(() => setCopiedEmail(false), 2000);
                }}
                className="px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-neutral-200 text-[11px] font-bold transition-colors cursor-pointer shrink-0"
              >
                {copiedEmail ? '✓ Copiado' : 'Copiar email'}
              </button>
            </div>

            <p className="text-[11px] text-center text-neutral-400 leading-normal">
              Agradecemos de corazón tu confianza y respaldo a este proyecto independiente.
            </p>
          </div>

          {hasDonated && (
            <div className="p-4 rounded-2xl bg-[#00FF88]/15 border border-[#00FF88]/30 text-[#00FF88] text-xs font-bold text-center animate-fade-in flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(0,255,136,0.2)]">
              <Gift className="w-4 h-4" />
              <span>¡Muchísimas gracias por apoyar a 930 Studio!</span>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-white/10 flex items-center justify-between text-xs text-neutral-400 bg-white/[0.02] shrink-0">
          <div className="flex items-center gap-1.5 font-medium">
            <ShieldCheck className="w-4 h-4 text-[#00FF88]" />
            <span>Transacción segura y directa en PayPal</span>
          </div>
          <button
            onClick={onClose}
            className="px-3.5 py-1.5 rounded-xl hover:bg-white/10 text-neutral-300 font-bold transition-colors cursor-pointer"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};
