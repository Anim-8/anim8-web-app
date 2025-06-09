import React from 'react';
import GradientButton from '../../../ui/GradientButton';
import { useLeadModal } from '../../../leads/useLeadModal';
import LeadModal from '../../../leads/leadModal';


const PhilosophySection = () => {
  const { open, source, triggerModal, closeModal } = useLeadModal();

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-8 py-20 bg-background text-center">
      <h2 className="text-2xl font-semibold text-white mb-6">Our Philosophy</h2>

      <p className="text-base text-white max-w-xl mb-6">
        At Anim8, we believe the future of manufacturing lies in conscious, adaptive organizations.
        Our philosophy is grounded in clarity, truth, and continuous learning. By combining engineering,
        education, and elegant design, we’re reimagining what factories can become — not just more productive,
        but more intelligent and purposeful.
      </p>

      <GradientButton
        text="Join the mouvement"
        onClick={() => triggerModal('philosophy-join')}
      />

      <LeadModal isOpen={open} onClose={closeModal} source={source} />
    </div>
  );
};

export default PhilosophySection;
