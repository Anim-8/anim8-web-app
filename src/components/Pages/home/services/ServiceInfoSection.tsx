import React from 'react';
import GradientButton from '../../../ui/GradientButton';
import LeadModal from '../../../leads/LeadModal';
import useModal from '../../../../hooks/useModal';

const ServiceInfoSection = () => {
  const { open, source, openModal, closeModal } = useModal();

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-8 py-20 bg-background text-center">
      <h2 className="text-2xl font-semibold text-white mb-6">Our Service</h2>

      <p className="text-base text-white max-w-2xl mb-6">
        We design, build, and deliver complete quality control and supervision systems—from diagnostic to handover.
        We combine engineering, software, and data science to turn your factory into a conscious, high-performance operation.
      </p>

      <GradientButton
        text="Get a Diagnostic."
        onClick={() => openModal('service-diagnostic')}
      />

      <LeadModal isOpen={open} onClose={closeModal} source={source} />
    </div>
  );
};

export default ServiceInfoSection;
