import React, { useState, useEffect } from 'react';

interface SplashScreenProps {
  onFinish: () => void;
  forceShow?: boolean;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onFinish, forceShow = false }) => {
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Check if splash was already seen
    if (!forceShow) {
      try {
        const seen = localStorage.getItem('splashSeen');
        if (seen === 'true') {
          onFinish();
          return;
        }
      } catch (e) {
        console.warn('Could not read splashSeen from localStorage:', e);
      }
    }

    // Progress bar fills over 2200ms, total duration 2500ms
    const startTime = Date.now();
    const fillDuration = 2200;
    const totalDuration = 2500;

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const currentProgress = Math.min(100, (elapsed / fillDuration) * 100);
      setProgress(currentProgress);

      if (elapsed >= totalDuration) {
        clearInterval(interval);
        handleComplete();
      }
    }, 16);

    return () => clearInterval(interval);
  }, [forceShow]);

  const handleComplete = () => {
    setIsFadingOut(true);
    try {
      localStorage.setItem('splashSeen', 'true');
    } catch (e) {
      console.warn('Could not save splashSeen flag:', e);
    }
    setTimeout(() => {
      onFinish();
    }, 500);
  };

  const handleSkip = () => {
    handleComplete();
  };

  return (
    <div
      onClick={handleSkip}
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center cursor-pointer select-none overflow-hidden transition-opacity duration-500 ${
        isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      style={{
        background: 'radial-gradient(circle at center, #12121A 0%, #0A0A0F 100%)'
      }}
    >
      {/* Floating subtle ambient lights */}
      <div className="absolute w-96 h-96 rounded-full bg-[#00E5FF]/6 blur-[100px] pointer-events-none -translate-x-1/3 -translate-y-1/3 animate-[floatSlow_8s_ease-in-out_infinite]" />
      <div className="absolute w-96 h-96 rounded-full bg-[#FF00E5]/6 blur-[100px] pointer-events-none translate-x-1/3 translate-y-1/3 animate-[floatSlow_8s_ease-in-out_infinite_4s]" />

      {/* Subtle background light grid/dots */}
      <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#00E5FF_1px,transparent_1px)] [background-size:28px_28px]" />

      {/* Main Logo Container */}
      <div className="relative z-10 flex flex-col items-center animate-[logoEntry_0.8s_cubic-bezier(0.16,1,0.3,1)_forwards]">
        {/* Brand Typography */}
        <div className="flex items-center tracking-tight font-['Plus_Jakarta_Sans',sans-serif]">
          <span className="text-white font-[800] text-[56px] sm:text-[64px] leading-none drop-shadow-[0_0_30px_rgba(255,255,255,0.15)]">
            930
          </span>
          <span className="inline-block w-3.5 h-3.5 rounded-full bg-[#00E5FF] mx-2 shadow-[0_0_16px_#00E5FF] animate-pulse" />
          <span className="text-[#A0AEC0] font-[500] text-[24px] sm:text-[28px] tracking-normal leading-none">
            Studio
          </span>
        </div>

        {/* Professional Tagline */}
        <p className="mt-3 text-xs tracking-[0.2em] uppercase text-neutral-400 font-medium">
          Diseño Web Estático Profesional
        </p>

        {/* Progress Bar (2px height, 160px width, #1A1A24 background) */}
        <div className="w-[160px] h-[2px] bg-[#1A1A24] rounded-full mt-7 overflow-hidden relative">
          <div
            className="h-full rounded-full transition-all duration-75"
            style={{
              width: `${progress}%`,
              background: 'linear-gradient(90deg, #00E5FF 0%, #FF00E5 100%)',
              boxShadow: '0 0 8px rgba(0, 229, 255, 0.7)'
            }}
          />
        </div>

        {/* Small subtle loading text */}
        <span className="mt-4 text-[11px] text-neutral-500 font-medium tracking-wide">
          Cargando entorno...
        </span>

        {/* Skip hint */}
        <span className="mt-3 text-[10px] text-neutral-600 hover:text-neutral-400 transition-colors">
          Haz clic para continuar
        </span>
      </div>

      <style>{`
        @keyframes logoEntry {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes floatSlow {
          0%, 100% {
            transform: translate(0px, 0px);
          }
          50% {
            transform: translate(25px, -20px);
          }
        }
      `}</style>
    </div>
  );
};

