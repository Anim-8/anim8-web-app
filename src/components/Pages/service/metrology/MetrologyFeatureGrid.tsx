import React from 'react';

const features = [
  {
    title: 'Measurement Plan Design',
    description: 'Build robust plans aligned with product intent and GD&T standards.',
  },
  {
    title: 'Turnkey Metrology Systems',
    description: 'From sensor selection to full implementation and commissioning.',
  },
  {
    title: 'GD&T and Tolerance Analysis',
    description: 'Identify critical interfaces, stack-ups, and inspection strategies.',
  },
  {
    title: 'Dimensional Monitoring & Analytics',
    description: 'Integrate live feedback loops into your control systems via Cortex.',
  },
];

const MetrologyFeatureGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-lg">
      {features.map((feature, idx) => (
        <div
          key={idx}
          className="rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 p-6 transition duration-300 shadow hover:shadow-emerald-400/10"
        >
          <h4 className="text-lg font-semibold text-emerald-300 mb-2">{feature.title}</h4>
          <p className="text-sm text-white/80">{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default MetrologyFeatureGrid;
