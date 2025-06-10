import React from 'react';
import kaizenLoop from '../../../../assets/kaizen.webp';

const ContinuousLoopVisual: React.FC = () => {
  return (
    <div className="relative w-full h-80 md:h-[28rem] flex items-center justify-center rounded-2xl border border-white/10 overflow-hidden bg-transparent">
      <img
        src={kaizenLoop}
        alt="Kaizen Evolution Loop"
        className="max-h-full max-w-full object-contain drop-shadow-xl"
      />
    </div>
  );
};

export default ContinuousLoopVisual;
