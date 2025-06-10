import React from 'react';

import humanoid from '../../../../assets/humanoid-nobg.webp'

const BrainBodyVisual: React.FC = () => {
  return (
    <div className="relative w-full h-80 md:h-full flex items-center justify-center bg-gradient-to-r from-red-800/30 via-yellow-500/20 to-green-400/30 rounded-2xl border border-white/10 shadow-inner overflow-hidden">
      <img
        src={humanoid}
        alt="Humanoid Nervous System Visualization"
        className="max-h-full object-contain"
      />
    </div>
  );
};

export default BrainBodyVisual;
