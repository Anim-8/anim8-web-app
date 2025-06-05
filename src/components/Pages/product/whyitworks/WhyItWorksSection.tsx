import React from 'react';
import WhyItWorksText from './WhyItWorksText';
import WhyItWorksVisual from './WhyItWorksVisual';

const WhyItWorksSection: React.FC = () => {
  return (
    <div className="relative w-full h-full flex flex-col md:flex-row items-center justify-center gap-10 px-6 md:px-20 py-20">
      {/* Text Block */}
      <div className="flex-1 z-10">
        <WhyItWorksText />
      </div>

      {/* Visual Block */}
      <div className="flex-1 z-10">
        <WhyItWorksVisual />
      </div>

      {/* Ambient Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/30 to-black pointer-events-none" />
    </div>
  );
};

export default WhyItWorksSection;
