import React from 'react';
import { useLeadModal } from '../../../leads/useLeadModal';
import LeadModal from '../../../leads/leadModal';


const ServiceCTAText: React.FC = () => {
  const { open, source, triggerModal, closeModal } = useLeadModal();

  return (
    <div className="text-center">
      <h2 className="text-5xl font-bold text-white mb-8 leading-tight">
        Let’s Commission <span className="text-primary">Your Cortex</span>
      </h2>

      <p className="text-lg text-white max-w-2xl mx-auto mb-10">
        Whether you're just beginning your transformation or ready to scale toward autonomy,
        our team is here to architect, animate, and evolve your factory — together.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <button
          onClick={() => triggerModal('service-cta-diagnostic')}
          className="bg-primary text-white px-8 py-4 rounded-lg font-semibold shadow hover:bg-primary/80 transition"
        >
          Book a Diagnostic
        </button>

        <button
          onClick={() => triggerModal('service-cta-architect')}
          className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition"
        >
          Talk to a System Architect
        </button>
      </div>

      <LeadModal isOpen={open} onClose={closeModal} source={source} />
    </div>
  );
};

export default ServiceCTAText;
