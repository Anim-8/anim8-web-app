import React from 'react';
import { motion } from 'framer-motion';

const layers = [
  {
    label: 'Polyglot Data Handling',
    color: 'bg-cyan-500/20 border-cyan-400/30',
    delay: 0.6,
  },
  {
    label: 'Statistical Methods',
    color: 'bg-green-500/20 border-green-400/30',
    delay: 0.4,
  },
  {
    label: 'Unbiased Tech Stack',
    color: 'bg-purple-500/20 border-purple-400/30',
    delay: 0.2,
  },
  {
    label: 'Physics-Based Logic',
    color: 'bg-orange-500/20 border-orange-400/30',
    delay: 0,
  },
];

const WhyVisual: React.FC = () => {
  return (
    <div className="relative w-full h-80 md:h-full flex items-center justify-center bg-gradient-to-br from-cyan-800/40 to-slate-900/30 rounded-2xl border border-white/10 shadow-inner px-6 py-8">
      <div className="flex flex-col items-center justify-end gap-3 w-full max-w-sm">
        {layers.map((layer, idx) => (
          <motion.div
            key={idx}
            className={`w-full py-3 px-4 rounded-lg border text-sm text-white/80 text-center font-medium backdrop-blur-md ${layer.color}`}
            initial={{ opacity: 0.4, scale: 1 }}
            animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.02, 1] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: 'loop',
              delay: layer.delay,
            }}
          >
            {layer.label}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WhyVisual;