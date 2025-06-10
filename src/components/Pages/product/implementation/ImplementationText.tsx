import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const phases = [
  {
    title: 'Ramp Phase',
    icon: '🛠️',
    desc: 'During ramp, Anim8 engineers work shoulder-to-shoulder with your team. Together we tune logic, build workflows, and dial in every interaction.'
  },
  {
    title: 'Stabilization',
    icon: '⚙️',
    desc: 'As Cortex stabilizes, the spotlight shifts. Client engineers take more control, our team fades back. The system starts to breathe on its own.'
  },
  {
    title: 'Autonomy',
    icon: '🧠',
    desc: 'Cortex now predicts and adapts. Operators monitor instead of intervene. It’s not just software anymore — it’s your factory’s second brain.'
  }
];

const ImplementationText: React.FC = () => {
  const [focusedIndex, setFocusedIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFocusedIndex((prev) => (prev + 1) % phases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative text-white space-y-12">
      {/* Title & Intro */}
      <div className="space-y-4 max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          Implementation – <span className="text-cyan-400">From Ramp to Autonomy 🗺️</span>
        </h2>
        <p className="text-lg text-white/80">
          Cortex isn't installed — it evolves. Our implementation strategy reflects this transformation,
          guiding factories from hands-on integration to full self-regulation.
        </p>
      </div>

      {/* 3-Card Layout */}
      <div className="relative z-10 flex flex-col md:flex-row justify-center items-start gap-6">
        {phases.map((phase, idx) => {
          const isFocused = idx === focusedIndex;
          return (
            <motion.div
              key={idx}
              initial={false}
              animate={{
                scale: isFocused ? 1.05 : 1,
                boxShadow: isFocused
                  ? '0 0 30px rgba(0, 255, 255, 0.15)'
                  : '0 0 0 rgba(0, 0, 0, 0)',
              }}
              transition={{
                type: 'spring',
                stiffness: 120,
                damping: 15,
              }}
              className="flex-1 bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl p-6 space-y-4 transition duration-300"
            >
              <motion.div
                className="text-3xl"
                animate={{ scale: isFocused ? [1, 1.1, 1] : 1 }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {phase.icon}
              </motion.div>
              <h3 className="text-cyan-300 font-semibold text-lg">{phase.title}</h3>
              <p className="text-sm text-white/80">{phase.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ImplementationText;
