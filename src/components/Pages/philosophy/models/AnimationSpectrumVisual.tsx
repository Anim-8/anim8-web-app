import React from 'react';
import animationSpectrum from '../../../../assets/spectrum-nobg.webp';

const AnimationSpectrumVisual: React.FC = () => {
  return (
    <div className="relative w-full h-60 md:h-72 flex items-center justify-center rounded-2xl border border-white/10 overflow-hidden bg-transparent">
      <img
        src={animationSpectrum}
        alt="Animation Spectrum Gradient"
        className="h- md:h-40 object-contain"
      />
    </div>
  );
};

export default AnimationSpectrumVisual;
