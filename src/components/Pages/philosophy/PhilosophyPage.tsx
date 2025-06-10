import React from 'react';
import ManifestoDownloadSection from './manifesto/ManifestoDownloadSection';
import PhilosophyCTASection from './cta/PhilosophyCTASection';
import philosophyConfig from './philosophy.json'
import PhilosophySection from './PhilosophySection';
import Page from '../../ui/Page';

const sections = philosophyConfig.items

const PhilosophyPage: React.FC = () => {
  return (
    <Page>
      <section id="hero" className="h-screen snap-start">
        <div className="relative h-full w-full flex flex-col items-center justify-center text-center px-10">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F14] to-black opacity-80 z-0" />
          <div className="z-10 max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6">
              Philosophy of Animation
            </h1>
            <p className="text-lg md:text-xl text-white font-light">
              Anim8 doesn&rsquo;t just build software — we awaken enterprise consciousness.
              We see systems as living beings, evolving through perception, intelligence, and purpose.
              Our work is the architecture of awareness.
            </p>
          </div>
        </div>
      </section>
      <section id="core" className="h-screen snap-start">
        <div className="relative h-full w-full flex items-center justify-center px-10 text-left">
          <div className="z-10 max-w-5xl space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Awakening the Living Enterprise
            </h2>
            <p className="text-lg md:text-xl text-white leading-relaxed font-light">
              At Anim8, we don&rsquo;t just install tools — we install awareness.
              We believe every enterprise is a living entity, shaped by its systems, its people, and its capacity to evolve.
            </p>
            <p className="text-lg md:text-xl text-white leading-relaxed font-light">
              True progress starts with perception. When systems can sense, remember, and act with intelligence,
              they become more than workflows — they become aware.
            </p>
            <p className="text-lg md:text-xl text-white leading-relaxed font-light">
              That&rsquo;s what we do. We awaken latent potential. We animate factories.
              We don&rsquo;t just deliver software — we architect consciousness.
            </p>
          </div>
        </div>
      </section>
      
      { sections.map(section => <PhilosophySection key={section.title} section={section} /> )}

      <section id="manifesto" className="h-screen snap-start">
        <ManifestoDownloadSection />
      </section>

      <section id="cta" className="h-screen snap-start">
        <PhilosophyCTASection />
      </section>
    </Page>
  );
};

export default PhilosophyPage;
