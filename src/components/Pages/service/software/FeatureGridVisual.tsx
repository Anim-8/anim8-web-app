import React from 'react';

const features = [
  {
    title: 'Custom Interfaces',
    description: 'Build tools that fit your workflow, not the other way around.',
  },
  {
    title: 'AI-Powered Logic',
    description: 'Automate decisions, detect patterns, and accelerate insight loops.',
  },
  {
    title: 'System Bridges',
    description: 'Seamlessly connect legacy tools, sensors, MES, ERP, and more.',
  },
  {
    title: 'Data Infrastructure',
    description: 'Lay the foundation for secure, scalable, cross-site intelligence.',
  },
];

const FeatureGridVisual: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-lg">
      {features.map((feature, idx) => (
        <div
          key={idx}
          className="rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 p-6 transition duration-300 shadow hover:shadow-indigo-400/10"
        >
          <h4 className="text-lg font-semibold text-indigo-300 mb-2">{feature.title}</h4>
          <p className="text-sm text-white/80">{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FeatureGridVisual;
