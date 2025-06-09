import React from 'react';

const BrainBodyText: React.FC = () => {
  return (
    <div className="space-y-6 text-white">
      <h2 className="text-4xl md:text-5xl font-bold">
        The Brain & Body Analogy
      </h2>
      <p className="text-lg text-text-secondary leading-relaxed font-light">
        Just like the human body relies on both a nervous system and a brain,
        an enterprise needs both physical assets and cognitive control.
      </p>
      <p className="text-lg text-text-secondary leading-relaxed font-light">
        In our model:
        <br />
        <span className="font-semibold text-white">The Body</span> represents machines, sensors, and infrastructure.
        <br />
        <span className="font-semibold text-white">The Brain</span> is composed of data logic, orchestration, and learning systems.
      </p>
      <p className="text-lg text-text-secondary leading-relaxed font-light">
        Evolution happens when these two realms connect — when a system begins to sense, interpret, and act with intelligence.
      </p>
    </div>
  );
};

export default BrainBodyText;
