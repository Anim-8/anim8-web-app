import React from 'react';
import { useLeadModal } from '../../../leads/useLeadModal';
import ServiceHeroText from './ServiceHeroText';
import LeadModal from '../../../leads/leadModal';

const ServiceHeroSection: React.FC = () => {
  const { open, source, triggerModal, closeModal } = useLeadModal();

  return (
    <div className="relative w-full min-h-[60vh] flex items-center justify-center px-8 py-40 text-center">
      <ServiceHeroText triggerModal={triggerModal} />
      <LeadModal isOpen={open} onClose={closeModal} source={source} />
    </div>
  );
};

export default ServiceHeroSection;
