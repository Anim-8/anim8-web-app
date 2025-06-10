// components/sections/ImplementationSection/ImplementationSection.tsx
import React from 'react';
import ImplementationText from './ImplementationText';

const ImplementationSection: React.FC = () => {
  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center px-6 md:px-20 py-20 text-center">
      <div className="w-full max-w-6xl z-10">
        <ImplementationText />
      </div>

      {/* Ambient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/30 to-black pointer-events-none" />
    </div>
  );
};

export default ImplementationSection;
