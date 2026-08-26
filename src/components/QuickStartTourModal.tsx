import React, { useState } from 'react';
import {
  X,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Layers,
  Edit3,
  Download,
  Zap,
  Globe2,
  Rocket
} from 'lucide-react';

interface QuickStartTourModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStartWizard: () => void;
}

const TOUR_STEPS = [
  {
    title: '¡Bienvenido a 930 Studio!',
    subtitle: 'La plataforma que crea tu web profesional en segundos sin tocar una sola línea de código.',
    badge: 'Paso 1 de 4',
    icon: Rocket,
    iconColor: '#00E5FF',
    content: (
      <div className="space-y-3 text-xs text-neutral-300">
        <p>
          Olvídate de configuraciones complicadas de hosting, servidores o código. 930 Studio está diseñado para que cualquier persona pueda tener una presencia digital de alto impacto en cuestión de minutos.
        </p>
        <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
          <div className="font-bold text-white flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00E5FF]" />
            <span>Resultado de nivel agencia de diseño</span>
          </div>
          <p className="text-[11px] text-neutral-400">
            Todas las plantillas cuentan con microinteracciones, tipografía curada y diseño adaptativo a móviles y tabletas.
          </p>
        </div>
      </div>
    )
  },
  {
    title: 'Asistente "Rellena Huecos"',
    subtitle: 'Elige tu sector y completa tus datos como si rellenaras un formulario simple.',
    badge: 'Paso 2 de 4',
    icon: Sparkles,
    iconColor: '#FF00E5',
    content: (
      <div className="space-y-3 text-xs text-neutral-300">
        <p>
          Con el Asistente Rápido solo necesitas introducir:
        </p>
        <ul className="space-y-2">
          <li className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#00FF88]" />
            <span>Nombre de tu negocio, eslogan y ubicación</span>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#00FF88]" />
            <span>Tus 3 o 4 servicios principales con precios orientativos</span>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#00FF88]" />
            <span>Email, WhatsApp, teléfono y redes sociales</span>
          </li>
        </ul>
        <p className="text-[11px] text-neutral-400">
          El sistema inyecta todo el contenido automáticamente en la plantilla perfecta para tu nicho.
        </p>
      </div>
    )
  },
  {
    title: 'Editor Visual Modo Fácil',
    subtitle: 'Haz doble clic en cualquier texto o imagen para cambiarlo al instante.',
    badge: 'Paso 3 de 4',
    icon: Edit3,
    iconColor: '#00FF88',
    content: (
      <div className="space-y-3 text-xs text-neutral-300">
        <p>
          En el editor dispones del <strong>Modo Fácil</strong> para usuarios sin conocimientos técnicos:
        </p>
        <div className="grid grid-cols-2 gap-2">
          <div className="p-2.5 rounded-lg bg-[#0A0A0F] border border-white/10">
            <span className="font-bold text-[#00E5FF] block mb-0.5">Colores de 1 Clic</span>
            <span className="text-[10px] text-neutral-400">Cambia la paleta global al instante con un solo toque.</span>
          </div>
          <div className="p-2.5 rounded-lg bg-[#0A0A0F] border border-white/10">
            <span className="font-bold text-[#00FF88] block mb-0.5">Secciones On/Off</span>
            <span className="text-[10px] text-neutral-400">Activa o desactiva testimonios, mapa o tarifas fácilmente.</span>
          </div>
        </div>
        <p className="text-[11px] text-neutral-400">
          ¿Quieres control total? Activa el <strong>Modo Avanzado</strong> en cualquier momento.
        </p>
      </div>
    )
  },
  {
    title: 'Descarga y Publica en 1 Clic',
    subtitle: 'Exporta tu web lista para producción o arrástrala a Netlify y Vercel gratis.',
    badge: 'Paso 4 de 4',
    icon: Download,
    iconColor: '#0071E3',
    content: (
      <div className="space-y-3 text-xs text-neutral-300">
        <p>
          Tu sitio web te pertenece al 100%. Cuando estés listo, haz clic en <strong>"Exportar / Descargar"</strong>:
        </p>
        <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-2">
          <div className="flex items-center justify-between text-white font-bold text-xs">
            <span>🚀 Despliegue en 30 segundos</span>
            <span className="text-[#00FF88]">100% Gratuito</span>
          </div>
          <p className="text-[11px] text-neutral-400">
            Incluye instrucciones visuales para publicar gratis en Netlify Drop, Vercel o tu propio dominio.
          </p>
        </div>
      </div>
    )
  }
];

export const QuickStartTourModal: React.FC<QuickStartTourModalProps> = ({
  isOpen,
  onClose,
  onStartWizard
}) => {
  const [currentStep, setCurrentStep] = useState<number>(0);

  if (!isOpen) return null;

  const step = TOUR_STEPS[currentStep];
  const StepIcon = step.icon;

  const handleNext = () => {
    if (currentStep < TOUR_STEPS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onClose();
      onStartWizard();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#14141E] border border-white/10 rounded-2xl shadow-2xl overflow-hidden text-white flex flex-col">
        {/* Header */}
        <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-[#12121A]">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded-full bg-white/10 text-white text-[11px] font-bold">
              {step.badge}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <div className="flex items-center gap-3">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center border shadow-lg"
              style={{
                backgroundColor: `${step.iconColor}15`,
                borderColor: `${step.iconColor}40`,
                color: step.iconColor
              }}
            >
              <StepIcon className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">{step.title}</h3>
              <p className="text-xs text-neutral-400">{step.subtitle}</p>
            </div>
          </div>

          <div className="pt-2">{step.content}</div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-1.5 pt-2">
            {TOUR_STEPS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentStep(idx)}
                className={`h-1.5 rounded-full transition-all cursor-pointer ${
                  currentStep === idx ? 'w-6 bg-[#00E5FF]' : 'w-1.5 bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-white/10 bg-[#12121A] flex items-center justify-between">
          <button
            onClick={onClose}
            className="text-xs text-neutral-400 hover:text-white transition-colors cursor-pointer"
          >
            Saltar Tour
          </button>

          <div className="flex items-center gap-2">
            {currentStep > 0 && (
              <button
                onClick={() => setCurrentStep(currentStep - 1)}
                className="px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-neutral-300 text-xs font-bold transition-colors cursor-pointer"
              >
                Anterior
              </button>
            )}

            <button
              onClick={handleNext}
              className="px-5 py-2 rounded-xl bg-[#00E5FF] hover:bg-[#00C8E0] text-black text-xs font-bold flex items-center gap-1.5 shadow-[0_0_15px_rgba(0,229,255,0.3)] transition-all cursor-pointer"
            >
              <span>{currentStep === TOUR_STEPS.length - 1 ? '¡Crear Mi Primera Web!' : 'Siguiente'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
