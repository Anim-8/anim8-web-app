import React from 'react';
import { useLeadModal } from '../../../leads/useLeadModal';
import ServiceHeroText from './ServiceHeroText';
import ServiceHeroVisual from './ServiceHeroVisual';
import LeadModal from '../../../leads/leadModal';

const ServiceHeroSection: React.FC = () => {
  const { open, source, triggerModal, closeModal } = useLeadModal();

  return (
    <div className="relative w-full flex flex-col lg:flex-row items-center justify-between gap-12 px-8 py-20">
      <ServiceHeroText triggerModal={triggerModal} />
      <ServiceHeroVisual />

      {/* Detach modal from layout flow */}
      <LeadModal isOpen={open} onClose={closeModal} source={source} />
    </div>
  );
};

export default ServiceHeroSection;
