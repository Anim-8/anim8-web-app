import React from 'react';
import CortexIntegrationText from './CortexIntegrationText';

const CortexIntegrationSection: React.FC = () => {
  return (
    <div className="relative w-full min-h-screen  flex flex-col items-center justify-center px-6 md:px-20 py-24 text-center">
      {/* Text Block */}
      <div className="w-full max-w-4xl z-10">
        <CortexIntegrationText />
      </div>

      {/* Ambient Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-800/30 to-black pointer-events-none z-0" />
    </div>
  );
};

export default CortexIntegrationSection;
