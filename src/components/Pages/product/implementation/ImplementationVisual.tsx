import React from 'react';
import { motion } from 'framer-motion';

const crewOrbs = [
  { id: 1, delay: 0, label: 'Engineer A' },
  { id: 2, delay: 1, label: 'Operator B' },
  { id: 3, delay: 2, label: 'Integrator C' },
];

const ImplementationVisual: React.FC = () => {
  return (
    <div className="relative w-full h-80 md:h-full flex flex-col items-center justify-center bg-gradient-to-br from-cyan-800/40 to-slate-900/30 rounded-2xl border border-white/10 shadow-inner px-6 py-8">
      <div className="flex items-end justify-center gap-10">
        {crewOrbs.map(({ id, delay, label }) => (
          <div key={id} className="flex flex-col items-center space-y-2">
            <motion.div
              className="w-16 h-16 rounded-full bg-cyan-400/30 border border-cyan-300/40 backdrop-blur-md shadow-lg"
              animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.1, 1] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: 'loop',
                delay,
              }}
            />
            <p className="text-xs text-cyan-300 opacity-70">{label}</p>
          </div>
        ))}
      </div>

      <p className="text-xs text-white/40 mt-6 text-center max-w-xs">
        These are the people behind the code — avatars of real builders, with stories from the line.
      </p>
    </div>
  );
};

export default ImplementationVisual;
