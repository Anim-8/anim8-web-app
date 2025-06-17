import React from 'react';
import { useNavigate } from 'react-router';
import useModal from '../../../hooks/useModal';
import LeadModal from '../../shared/LeadModal'; 


const PhilosophyHeroSection: React.FC = () => {
  const navigate = useNavigate();
  const { open, source, openModal, closeModal } = useModal();

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center text-center px-10 overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F14] to-black opacity-80 z-0" />

      {/* Text content */}
      <div className="z-10 max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6">
          Philosophy of Animation
        </h1>
        <p className="text-lg md:text-xl text-white font-light mb-8">
          Anim8 doesn&rsquo;t just build software — we awaken enterprise consciousness.
          We see systems as living beings, evolving through perception, intelligence, and purpose.
          Our work is the architecture of awareness.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => openModal('philosophy-home-conversation')} // This now works correctly
            className="px-6 py-3 bg-white text-black font-semibold rounded-xl hover:bg-gray-200 transition"
          >
            Start the Conversation
          </button>
          <button
            onClick={() => navigate('/philosophy')}
            className="px-6 py-3 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition"
          >
            Discover our Philosophy
          </button>
        </div>
      </div>

      <LeadModal isOpen={open} onClose={closeModal} source={source} />
    </section>
  );
};

export default PhilosophyHeroSection;