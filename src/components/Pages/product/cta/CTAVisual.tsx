// components/sections/CTASection/CTAVisual.tsx
import React from 'react';

const CTAVisual: React.FC = () => {
  return (
    <div className="relative w-full h-80 md:h-full flex items-center justify-center bg-gradient-to-br from-cyan-800/40 to-slate-900/30 rounded-2xl border border-white/10 shadow-inner">
      <div className="text-center px-6 py-4 rounded-xl border border-cyan-400 text-cyan-300 bg-black/30 backdrop-blur-md animate-pulse">
        <p className="text-sm uppercase tracking-wide">Let’s Animate It</p>
        <p className="text-lg font-semibold mt-1">Final Call to Partner</p>
        <p className="text-xs mt-2 text-white/60">Future version will include motion elements and embedded contact functionality.</p>
      </div>
    </div>
  );
};

export default CTAVisual;
