import React from 'react';

const features = [
  {
    title: 'Modular Architecture',
    description: 'Connect only what you need — scale when ready.',
  },
  {
    title: 'Live Data Streams',
    description: 'Visualize real-time dimensional, process, and production data.',
  },
  {
    title: 'Integrated Logic Engine',
    description: 'Automate feedback loops and cross-layer decision-making.',
  },
  {
    title: 'Factory Consciousness',
    description: 'Make your system self-aware — ready to adapt, learn, and improve.',
  },
];

const CortexIntegrationText: React.FC = () => {
  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
          Cortex Integration — <br />
          <span className="text-primary">Your Brain, Our Framework 🖼️</span>
        </h2>

        <p className="text-lg text-white/80 max-w-3xl mx-auto">
          Cortex is the digital brain of your operation — a custom-tailored framework that brings perception, memory, and decision-making into one intelligent system. It unifies your sensors, machines, and people through a responsive architecture that evolves with you.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 max-w-6xl mx-auto">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="flex-1 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 p-6 transition duration-300 shadow hover:shadow-indigo-400/10"
          >
            <h4 className="text-lg font-semibold text-indigo-300 mb-2">{feature.title}</h4>
            <p className="text-sm text-white/80">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CortexIntegrationText;
