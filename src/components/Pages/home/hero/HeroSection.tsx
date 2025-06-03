import React from 'react';
import ManufacturingLine from './ManufacturingLine'; 
import HeroTextGlowingBox from './HeroTextGlowingBox';
import humanoidImage from '../../../../assets/humanoid.webp'


const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full h-screen bg-background overflow-hidden flex flex-col items-center justify-center">
      {/* Background Humanoid Image */}
      <img
        src={humanoidImage}
        alt="Anim8 Consciousness"
        className="absolute top-0 left-1/2 -translate-x-1/2 translate-y-[5%] h-[140vh] object-contain opacity-100 pointer-events-none z-0"
      />

      {/* Neural Pulse on head */}
      <div className="absolute z-20 w-24 h-24 left-1/2 top-[12%] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        {/* Core pulse glow */}
        <div className="absolute inset-0 rounded-full bg-blueGlow opacity-80 blur-2xl animate-pulse-slow"></div>

        {/* Concentric ripple rings */}
        {/* <div className="absolute inset-0 rounded-full border border-blueGlow opacity-30 animate-ripple-ring"></div>
        <div className="absolute inset-0 rounded-full border border-blueGlow opacity-20 animate-ripple-ring delay-[1s]"></div> */}
      </div>
      
      {/* Hero text Line */}
      <HeroTextGlowingBox />
      
      {/* Manufacturing Line */}
      <ManufacturingLine />
    </section>
  );
};

export default HeroSection;
