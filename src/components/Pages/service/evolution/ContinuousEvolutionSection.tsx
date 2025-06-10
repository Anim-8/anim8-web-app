import React from 'react';
import ContinuousEvolutionText from './ContinuousEvolutionText';
import CycleWheelVisual from './CycleWheelVisual';

const ContinuousEvolutionSection: React.FC = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-between flex-col md:flex-row px-6 md:px-20 py-20">
      <div className="w-full md:w-1/2 z-10">
        <ContinuousEvolutionText />
      </div>

      <div className="w-full md:w-1/2 mt-10 md:mt-0 z-10 flex justify-center items-center">
        <CycleWheelVisual />
      </div>

      {/* Ambient Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-lime-800/30 to-black pointer-events-none" />
    </div>
  );
};

export default ContinuousEvolutionSection;
