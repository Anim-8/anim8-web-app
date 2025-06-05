import React from 'react';

const CortexIntegrationText: React.FC = () => {
  return (
    <div className="text-left">
      <h2 className="text-4xl font-bold mb-6 text-white">
        Cortex Integration — <br />
        <span className="text-primary">Your Brain, Our Framework</span>
      </h2>
      <p className="text-lg text-white max-w-xl mb-8">
        Cortex is the digital brain of your operation — a custom-tailored framework that brings perception, memory, and decision-making into one intelligent system. It unifies your sensors, machines, and people through a responsive architecture that evolves with you.
      </p>

      <ul className="text-white text-sm space-y-3 list-disc pl-6">
        <li><strong className="text-cyan-300">Modular Architecture:</strong> Connect only what you need — scale when ready.</li>
        <li><strong className="text-cyan-300">Live Data Streams:</strong> Visualize real-time dimensional, process, and production data.</li>
        <li><strong className="text-cyan-300">Integrated Logic Engine:</strong> Automate feedback loops and cross-layer decision-making.</li>
        <li><strong className="text-cyan-300">Factory Consciousness:</strong> Make your system self-aware — ready to adapt, learn, and improve.</li>
      </ul>
    </div>
  );
};

export default CortexIntegrationText;
