import React from 'react';

const PhilosophyHeroSection: React.FC = () => {
  return (
    <div className="relative h-full w-full flex flex-col items-center justify-center text-center px-10">
      {/* Background Glow or Visual Layer (optional, if animated) */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F14] to-black opacity-80 z-0" />

      {/* Text Content */}
      <div className="z-10 max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6">
          Philosophy of Animation
        </h1>
        <p className="text-lg md:text-xl text-white font-light">
          Anim8 doesn’t just build software — we awaken enterprise consciousness.  
          We see systems as living beings, evolving through perception, intelligence, and purpose.  
          Our work is the architecture of awareness.
        </p>
      </div>
    </div>
  );
};

export default PhilosophyHeroSection;
