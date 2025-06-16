import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const phases = [
  'Diagnostic',
  'Design',
  'Implementation',
  'Feedback',
  'Evolution',
];

const wheelRadius = 40; // percentage

const getPosition = (index: number, total: number) => {
  const angle = (2 * Math.PI * index) / total - Math.PI / 2;
  const x = 50 + wheelRadius * Math.cos(angle);
  const y = 50 + wheelRadius * Math.sin(angle);
  return { x: `${x}%`, y: `${y}%` };
};

const CycleWheelVisual: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % phases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[400px] md:h-[500px]">
      {phases.map((label, idx) => {
        const { x, y } = getPosition(idx, phases.length);
        const isActive = idx === activeIndex;
        return (
          <motion.div
            key={idx}
            className={`absolute text-white text-sm font-medium px-4 py-2 rounded-xl border
              ${isActive ? 'bg-cyan-500/20 border-cyan-400 scale-110 z-20 shadow-lg' : 'bg-white/5 border-white/10 scale-100 z-10'}
            `}
            style={{
              top: y,
              left: x,
              transform: 'translate(-50%, -50%)',
              transition: 'all 0.4s ease-in-out',
            }}
            animate={{ opacity: isActive ? 1 : 0.5 }}
          >
            {label}
          </motion.div>
        );
      })}
    </div>
  );
};

export default CycleWheelVisual;
