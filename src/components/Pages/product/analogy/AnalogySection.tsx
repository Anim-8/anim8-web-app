import React from 'react';
import AnalogyText from './AnalogyText';
// import AnalogyVisual from './AnalogyVisual';

const AnalogySection: React.FC = () => {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center px-6 md:px-20">
      {/* Text Block */}
      <div className="z-10 w-full max-w-3xl mx-auto">
        <AnalogyText />
      </div>

      {/* Animation or Visual */}
      {/* <div className="flex-1 z-10">
        <AnalogyVisual />
      </div> */}

      {/* Optional: Ambient Glow or Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/30 to-black pointer-events-none" />
    </div>
  );
};

export default AnalogySection;
