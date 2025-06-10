import React from 'react';
import EcosystemText from './EcosystemText';
import EcosystemVisual from './EcosystemVisual';

const EcosystemSection: React.FC = () => {
  return (
    <div className="relative w-full flex flex-col md:flex-row items-start justify-between px-6 md:px-20 py-24 gap-12">
      {/* Text Block */}
      <div className="w-full md:w-1/2 z-10">
        <EcosystemText />
      </div>

      {/* Visual Block */}
      <div className="w-full md:w-1/2 z-10 flex justify-center items-center">
        <EcosystemVisual />
      </div>

      {/* Ambient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-800/30 to-black pointer-events-none z-0" />
    </div>
  );
};

export default EcosystemSection;
