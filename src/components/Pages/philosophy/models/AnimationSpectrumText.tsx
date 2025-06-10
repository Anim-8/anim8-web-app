import React from 'react';

const AnimationSpectrumText: React.FC = () => {
  return (
    <div className="space-y-6 text-white">
      <h2 className="text-4xl md:text-5xl font-bold">
        The Animation Spectrum 🎨
      </h2>
      <p className="text-lg text-text-secondary leading-relaxed font-light">
        Every enterprise lives somewhere along a spectrum of evolution.
        From manual repetition to autonomous adaptation — this journey defines the trajectory of manufacturing intelligence.
      </p>
      <p className="text-lg text-text-secondary leading-relaxed font-light">
        We classify systems across three states:
        <br />
        <span className="font-semibold text-white">Manual</span> – Repetitive tasks, poor data flow, high friction.  
        <br />
        <span className="font-semibold text-white">Automated</span> – Streamlined operations, connected tools, better decisions.  
        <br />
        <span className="font-semibold text-white">Animated</span> – Self-aware, predictive, evolving systems.
      </p>
      <p className="text-lg text-text-secondary leading-relaxed font-light">
        Our goal is to move every client toward animation — a state where systems come alive.
      </p>
    </div>
  );
};

export default AnimationSpectrumText;
