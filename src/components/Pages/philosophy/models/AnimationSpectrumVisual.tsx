import React, { useEffect, useRef, useState } from 'react';
import brain from '../../../../assets/anim8-brain.webp';
import knob from '../../../../assets/knob.webp';
import spectrum from '../../../../assets/spectrum-nobg.webp';

const AnimationSpectrumVisual: React.FC = () => {
  const knobRef = useRef<HTMLDivElement>(null);
  const [glowLevel, setGlowLevel] = useState(0);

  useEffect(() => {
    let progress = 0;
    const interval = setInterval(() => {
      progress = (progress + 1) % 100;
      const knobElement = knobRef.current;
      if (knobElement) {
        knobElement.style.left = `${progress}%`;
        setGlowLevel(progress);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[30rem] md:h-[36rem] flex flex-col items-center justify-center gap-2 -mt-4 rounded-2xl overflow-visible bg-transparent">
      {/* Brain */}
      <div className="absolute -top-2 z-20">
        <img
          src={brain}
          alt="Brain"
          className="w-20 md:w-28 transition-transform duration-500"
          style={{ transform: `scale(${1 + glowLevel / 150})`, filter: `drop-shadow(0 0 ${glowLevel / 3}px cyan)` }}
        />
      </div>

      {/* Labels */}
      <div className="relative z-10 flex justify-between w-[80%] text-white/80 text-sm md:text-base font-semibold tracking-wide mb-1">
        <span className={glowLevel < 33 ? 'text-white' : ''}>Manual</span>
        <span className={glowLevel >= 33 && glowLevel < 66 ? 'text-white' : ''}>Automated</span>
        <span className={glowLevel >= 66 ? 'text-white' : ''}>Animated</span>
      </div>

      {/* Spectrum background with knob */}
      <div className="relative w-5/5 h-14 md:h-16 rounded-md overflow-hidden border border-white/20" style={{ backgroundImage: `url(${spectrum})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        {/* Knob */}
        <div ref={knobRef} className="absolute top-1/2 transform -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 -ml-5 transition-all duration-200 z-20">
          <img src={knob} alt="Knob" className="w-full h-full object-contain" />
        </div>
      </div>
    </div>
  );
};

export default AnimationSpectrumVisual;
