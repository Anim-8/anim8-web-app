// components/sections/CrewSection/CrewText.tsx
import React from 'react';

const CrewText: React.FC = () => {
  return (
    <div className="text-white max-w-2xl space-y-6">
      <h2 className="text-4xl font-bold leading-tight">
        🧑‍✈️ The Cortex Crew – <span className="text-cyan-400">Who Builds the Brain?</span>
      </h2>

      <p className="text-lg">
        Cortex isn’t a self-install. It’s a co-creation. Our data engineers come from the factory floor.
      </p>

      <p className="text-lg">
        We speak the language of torque curves, station cycle time, and stack-up variation. We don’t just code. We understand manufacturing at its core.
      </p>

      <p className="text-lg">
        We’re not just devs — we’re builders. Cortex exists because we built it with you, not for you.
      </p>
    </div>
  );
};

export default CrewText;
