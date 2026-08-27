import React, { useState, useEffect, useRef } from 'react';

interface SplashScreenProps {
  onFinish: () => void;
  forceShow?: boolean;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onFinish, forceShow = false }) => {
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [progress, setProgress] = useState(0);
  const completedRef = useRef(false);

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
        console.warn('Error reading splashSeen flag:', e);
      }
    }

    const startTime = Date.now();
    const fillDuration = 2000; // 2.0 seconds fill
    const totalDuration = 2500; // 2.5 seconds total before fadeout

    const interval = setInterval(() => {
      if (completedRef.current) {
        clearInterval(interval);
        return;
      }
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
    if (completedRef.current) return;
    completedRef.current = true;
    setIsFadingOut(true);
    try {
      localStorage.setItem('splashSeen', 'true');
    } catch (e) {
      console.warn('Error saving splashSeen flag:', e);
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
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0A0A0F] cursor-pointer select-none overflow-hidden transition-opacity duration-500 ${
        isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Centered Logo Container */}
      <div className="relative z-10 flex flex-col items-center animate-[splashLogoEntry_0.8s_ease-out_forwards]">
        {/* Brand Typography: 930 + Neon Cyan Dot + Studio */}
        <div className="flex items-baseline tracking-tight font-['Plus_Jakarta_Sans',sans-serif]">
          <span className="text-white font-[800] text-[56px] sm:text-[72px] leading-none">
            930
          </span>
          <span className="text-[#00E5FF] font-[800] text-[56px] sm:text-[72px] leading-none drop-shadow-[0_0_12px_#00E5FF] animate-[neonDotBlink_1.5s_ease-in-out_infinite]">
            .
          </span>
          <span className="ml-3 text-[#A0AEC0] font-[500] text-[24px] sm:text-[32px] leading-none tracking-normal">
            Studio
          </span>
        </div>

        {/* Progress Line (2px height, 140px width, #1A1A24 background, fill with cyan->magenta in 2s) */}
        <div className="w-[140px] h-[2px] bg-[#1A1A24] rounded-full mt-8 overflow-hidden relative">
          <div
            className="h-full rounded-full transition-all duration-75"
            style={{
              width: `${progress}%`,
              background: 'linear-gradient(90deg, #00E5FF 0%, #FF00E5 100%)',
              boxShadow: '0 0 8px rgba(0, 229, 255, 0.6)'
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes splashLogoEntry {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes neonDotBlink {
          0%, 100% {
            opacity: 1;
            filter: drop-shadow(0 0 14px #00E5FF);
          }
          50% {
            opacity: 0.5;
            filter: drop-shadow(0 0 4px #00E5FF);
          }
        }
      `}</style>
    </div>
  );
};


