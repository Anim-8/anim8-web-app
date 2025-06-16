import React from 'react';
import ManufacturingLine from './ManufacturingLine'; 
import HeroTextGlowingBox from './HeroTextGlowingBox';
import humanoidImage from '../../../../assets/humanoid.webp'

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full h-screen bg-background overflow-visible md:overflow-hidden">
      <img
        src={humanoidImage}
        alt="Anim8 Consciousness"
        className="absolute top-0 left-1/2 -translate-x-1/2 translate-y-[-20%] h-[120vh] md:translate-y-[5%] md:h-[140vh] object-contain opacity-100 pointer-events-none z-20"
      />

      {/* Neural Pulse behind the head */}
      <div className="absolute z-10 w-24 h-24 left-1/2 top-[12%] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div className="absolute inset-0 rounded-full bg-blue-glow opacity-80 blur-2xl animate-pulse-slow"></div>
      </div>
      
      {/* Hero text Line - positioned to show at chest area on mobile, standard position on desktop */}
      <div className="absolute top-[30%] md:top-[45vh] left-0 right-0 z-30">
        <HeroTextGlowingBox />
      </div>
 
      {/* Manufacturing Line */}
      <div className="absolute top-[70%] md:bottom-0 left-1/2 -translate-x-1/2 z-30">
        <ManufacturingLine />
      </div>
    </section>
  );
};

export default HeroSection;