import React from 'react';
import ManifestoDownloadSection from './ManifestoDownloadSection';
import philosophyConfig from './philosophy.json'
import PhilosophySection from './PhilosophySection';
import Page from '../../ui/Page';
import ClosingSection from '../../ui/ClosingSection';
import useModal from '../../../hooks/useModal';

const sections = philosophyConfig.items.map((item) => ({
  ...item,
  visualSlot: <p>hey: {item.title}</p> 
}))

const PhilosophyPage: React.FC = () => {
  const { open, openModal, closeModal, source } = useModal()
  return (
    <Page>
      <Section>
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
      </Section>
      <Section>
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
      </Section>
      {sections.map(section => <PhilosophySection key={section.title} section={section} />)}
      <Section>
        <ManifestoDownloadSection />
      </Section>
      <Section>
        <ClosingSection
          titleSlot="Let’s Awaken Your Enterprise"
          description="If you resonate with our philosophy, we invite you to connect. Discover what animation could mean for your factory, your team, your future."
          buttonSlot={
            <button
              onClick={() => openModal('philosophy-cta-conversation')}
              className="inline-block px-6 py-3 bg-white text-black font-semibold rounded-xl hover:bg-gray-200 transition"
            >
              Start the Conversation
            </button>
          }
          open={open}
          handleClose={closeModal}
          source={source ?? ''}
        />
      </Section>
    </Page>
  );
};

const Section: React.FC<{ children: React.ReactNode }> = ({ children }) => <section className="h-screen snap-start">{children}</section>

export default PhilosophyPage;
