import React from 'react';

import PhilosophyHeroSection from './hero/PhilosophyHeroSection';
import CorePhilosophySection from './core/CorePhilosophySection';
import BrainBodySection from './models/BrainBodySection';
import AnimationSpectrumSection from './models/AnimationSpectrumSection';
import ContinuousLoopSection from './models/ContinuousLoopSection';
import ManifestoDownloadSection from './manifesto/ManifestoDownloadSection';
import PhilosophyCTASection from './cta/PhilosophyCTASection';
import EcosystemSection from './ecosystem/EcosystemSection';
import SpectrumAnimation from './models/SpectrumAnimation';

const PhilosophyPage: React.FC = () => {
  return (
    <div className="h-screen bg-background w-full overflow-y-scroll scroll-smooth snap-y snap-mandatory">
      <section id="hero" className="h-screen snap-start">
        <PhilosophyHeroSection />
      </section>

      <section id="core" className="h-screen snap-start">
        <CorePhilosophySection />
      </section>

      <section id="brain-body" className="h-screen snap-start">
        <BrainBodySection />
      </section>

      <section id="spectrum" className="h-screen snap-start">
        {/* <AnimationSpectrumSection /> */}
        <AnimationSpectrumSection/>
      </section>

      <section id="loop" className="h-screen snap-start">
        <ContinuousLoopSection />
      </section>
      
      <section id="manifesto" className="h-screen snap-start">
        <EcosystemSection />
      </section>

      <section id="manifesto" className="h-screen snap-start">
        <ManifestoDownloadSection />
      </section>

      <section id="cta" className="h-screen snap-start">
        <PhilosophyCTASection />
      </section>
    </div>
  );
};

export default PhilosophyPage;
