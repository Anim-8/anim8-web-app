import React from 'react';
import ContinuousLoopText from './ContinuousLoopText';
import ContinuousLoopVisual from './ContinuousLoopVisual';

const ContinuousLoopSection: React.FC = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-between flex-col md:flex-row px-6 md:px-20 py-20">
      <div className="w-full md:w-1/2 z-10">
        <ContinuousLoopText />
      </div>

      <div className="w-full md:w-1/2 mt-10 md:mt-0 z-10 flex justify-center items-center">
        <ContinuousLoopVisual />
      </div>

      {/* Ambient Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-800/30 to-black pointer-events-none" />
    </div>
  );
};

export default ContinuousLoopSection;
