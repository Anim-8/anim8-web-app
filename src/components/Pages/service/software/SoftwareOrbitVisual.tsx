import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const nodes = [
  { label: 'Custom Interfaces', x: '50%', y: '15%' },
  { label: 'AI Logic', x: '85%', y: '50%' },
  { label: 'System Bridges', x: '50%', y: '85%' },
  { label: 'Data Infrastructure', x: '15%', y: '50%' },
];

const SoftwareVisual: React.FC = () => {
  const [focused, setFocused] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFocused((prev) => (prev + 1) % nodes.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[400px] md:h-[500px]">
      {/* Orbit container */}
      <div className="absolute inset-0">
        {nodes.map((node, idx) => {
          const isFocused = idx === focused;
          return (
            <motion.div
              key={idx}
              className={`absolute rounded-xl px-4 py-3 text-sm text-white shadow-md
                ${isFocused ? 'bg-indigo-600/30 border border-indigo-400 scale-110 z-20' : 'bg-white/5 border border-white/10 scale-100'}
              `}
              style={{
                top: node.y,
                left: node.x,
                transform: 'translate(-50%, -50%)',
                transition: 'all 0.4s ease-in-out',
              }}
              animate={{ opacity: isFocused ? 1 : 0.6 }}
            >
              <p className="text-center font-medium">{node.label}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default SoftwareVisual;
