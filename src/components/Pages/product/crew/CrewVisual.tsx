import React from 'react';

const CrewVisual: React.FC = () => {
  return (
    <div className="relative w-full h-80 md:h-full flex items-center justify-center bg-gradient-to-br from-cyan-800/40 to-slate-900/30 rounded-2xl border border-white/10 shadow-inner">
      <div className="text-center px-6 py-4 rounded-xl border border-cyan-400 text-cyan-300 bg-black/30 backdrop-blur-md animate-pulse">
        <p className="text-sm uppercase tracking-wide">Meet the Cortex Crew</p>
        <p className="text-lg font-semibold mt-1">Visual Team Module Incoming</p>
        <p className="text-xs mt-2 text-white/60">This block will showcase our team with avatars, roles, and stories from the line.</p>
      </div>
    </div>
  );
};

export default CrewVisual;
