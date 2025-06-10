import React from 'react';
import LeadModal from '../../../shared/LeadModal';
import useModal from '../../../../hooks/useModal';
import ServiceHeroText from './ServiceHeroText';
import SectionVisual from '../../../ui/section/SectionVisual';

const ServiceHeroSection: React.FC = () => {
  const { open, source, openModal, closeModal } = useModal();

  return (
    <div className="relative w-full flex flex-col lg:flex-row items-center justify-between gap-12 px-8 py-20">
      <ServiceHeroText openModal={openModal} />
      <SectionVisual />

      {/* Detach modal from layout flow */}
      <LeadModal isOpen={open} onClose={closeModal} source={source} />
    </div>
  );
};

export default ServiceHeroSection;
