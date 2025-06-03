// components/sections/ImplementationSection/ImplementationSection.tsx
import React from 'react';
import ImplementationText from './ImplementationText';
import ImplementationVisual from './ImplementationVisual';

const ImplementationSection: React.FC = () => {
  return (
    <div className="relative w-full h-full flex flex-col md:flex-row items-center justify-center gap-10 px-6 md:px-20 py-20">
      {/* Text Block */}
      <div className="flex-1 z-10">
        <ImplementationText />
      </div>

      {/* Visual Block */}
      <div className="flex-1 z-10">
        <ImplementationVisual />
      </div>

      {/* Ambient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/30 to-black pointer-events-none" />
    </div>
  );
};

export default ImplementationSection;
