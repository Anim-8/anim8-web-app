import React from 'react';
import SoftwareText from './SoftwareText';
import SoftwareVisual from './SoftwareVisual';

const SoftwareSection: React.FC = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-between flex-col md:flex-row px-6 md:px-20 py-20">
      <div className="w-full md:w-1/2 z-10">
        <SoftwareText />
      </div>

      <div className="w-full md:w-1/2 mt-10 md:mt-0 z-10 flex justify-center items-center">
        <SoftwareVisual />
      </div>

      {/* Ambient Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 to-black pointer-events-none" />
    </div>
  );
};

export default SoftwareSection;
