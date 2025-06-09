import React from 'react';
import ManifestoCard from './ManifestoCard';

const ManifestoDownloadSection: React.FC = () => {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center px-6 md:px-20 py-24 space-y-12">
      <h2 className="text-4xl md:text-5xl font-bold text-white text-center">
        Download the Anim8 Manifesto
      </h2>
      <p className="text-lg text-text-secondary max-w-2xl text-center font-light">
        Explore the full Anim8 philosophy — from our technological framework to the emotional and spiritual drivers behind our rebellion.
      </p>

      <div className="flex flex-col md:flex-row gap-10 mt-10 z-10">
        <ManifestoCard
          title="White Paper"
          description="Vision, architecture, and methodology. The cortex framework in depth."
          theme="light"
          fileName="/pdfs/anim8_whitepaper.pdf"
        />
        <ManifestoCard
          title="Black Paper"
          description="Spirit, soul, and rebellion. The emotional truth behind Anim8."
          theme="dark"
          fileName="/pdfs/anim8_blackpaper.pdf"
        />
      </div>

      {/* Ambient Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-black pointer-events-none" />
    </div>
  );
};

export default ManifestoDownloadSection;
