import React from 'react';
import HMIText from './HMIText';

const HMISection: React.FC = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center px-6 md:px-20 py-20">
      {/* Full-Width Text Block */}
      <div className="w-full max-w-screen-xl z-10">
        <HMIText />
      </div>

      {/* Ambient Glow Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/30 to-black pointer-events-none" />
    </div>
  );
};

export default HMISection;
