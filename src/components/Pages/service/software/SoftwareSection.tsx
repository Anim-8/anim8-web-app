import React from 'react';
import SoftwareText from './SoftwareText';
import FeatureGridVisual from './FeatureGridVisual';

const SoftwareSection: React.FC = () => {
  return (
    <div className="relative w-full min-h-screen flex flex-col md:flex-row items-start justify-between px-6 md:px-20 py-36 gap-12">
      {/* Text Block */}
      <div className="w-full md:w-1/2 z-10">
        <SoftwareText />
      </div>

      {/* Visual Grid Block */}
      <div className="w-full md:w-1/2 z-10 flex justify-center items-start">
        <FeatureGridVisual />
      </div>

      {/* Ambient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 to-black pointer-events-none z-0" />
    </div>
  );
};

export default SoftwareSection;


