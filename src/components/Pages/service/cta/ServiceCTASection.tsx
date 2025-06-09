import React from 'react';
import ServiceCTAText from './ServiceCTAText';

const ServiceCTASection: React.FC = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center px-6 md:px-20 py-20">
      <div className="w-full max-w-5xl z-10">
        <ServiceCTAText />
      </div>

      {/* Ambient Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-700/30 to-black pointer-events-none" />
    </div>
  );
};

export default ServiceCTASection;
