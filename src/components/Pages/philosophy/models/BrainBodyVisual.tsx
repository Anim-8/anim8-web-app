import React from 'react';
import humanoid from '../../../../assets/humanoid-nobg.webp';

const BrainBodyVisual: React.FC = () => {
  return (
    <div className="relative w-full h-80 md:h-[28rem] flex items-center justify-center rounded-2xl border border-white/10 overflow-hidden bg-transparent">
      <img
        src={humanoid}
        alt="Humanoid Nervous System Visualization"
        className="h-64 md:h-[22rem] object-contain"
      />
    </div>
  );
};

export default BrainBodyVisual;
