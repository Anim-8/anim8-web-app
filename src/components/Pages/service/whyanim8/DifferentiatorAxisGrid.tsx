import React from 'react';

const differentiators = [
  {
    quadrant: 'top-left',
    title: 'Tech-Agnostic',
    description: 'We choose what’s best for your ROI — not our resale margin.',
    color: 'border-cyan-400 bg-cyan-800/10',
  },
  {
    quadrant: 'top-right',
    title: 'First-Principles Logic',
    description: 'Every decision is rooted in physics, data, and system thinking.',
    color: 'border-indigo-400 bg-indigo-800/10',
  },
  {
    quadrant: 'bottom-left',
    title: 'Tesla-Proven Expertise',
    description: 'We’ve led transformation from concept to execution on the world stage.',
    color: 'border-emerald-400 bg-emerald-800/10',
  },
  {
    quadrant: 'bottom-right',
    title: 'Emotional Intelligence',
    description: 'We design with human operators, not just machines, in mind.',
    color: 'border-pink-400 bg-pink-800/10',
  },
];

const quadrantStyles: Record<string, string> = {
  'top-left': 'top-6 left-6',
  'top-right': 'top-6 right-6',
  'bottom-left': 'bottom-6 left-6',
  'bottom-right': 'bottom-6 right-6',
};

const DifferentiatorAxisGrid: React.FC = () => {
  return (
    <div className="relative w-full h-[400px] md:h-[500px] border border-white/10 rounded-xl">
      {/* Center axis lines */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-white/10" />
      <div className="absolute left-1/2 top-0 h-full w-px bg-white/10" />

      {/* Quadrant cards */}
      {differentiators.map((item, idx) => (
        <div
          key={idx}
          className={`absolute w-[40%] max-w-[260px] p-4 border rounded-xl transition duration-300 hover:scale-105 hover:shadow-xl text-white/90 ${item.color} ${quadrantStyles[item.quadrant]}`}
        >
          <h4 className="text-base font-semibold mb-2 text-white">{item.title}</h4>
          <p className="text-sm text-white/70">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default DifferentiatorAxisGrid;
