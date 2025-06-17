// src/components/Product/Hero/ProductHeroSection.tsx
import React from 'react';
import ProductHeroText from './ProductHeroText';
import CortexAnimation from './CortexAnimation';
import AmbientOverlay from '../../../ui/AmbientOverlay';
import useModal from '../../../../hooks/useModal';
import LeadModal from '../../../shared/LeadModal';

const ProductHeroSection: React.FC = () => {
  const { open, openModal, closeModal, source } = useModal();
  return (
    <>
      <div className="relative w-full h-full flex flex-col md:flex-row items-center justify-center gap-10 px-6 md:px-20 ">
        {/* Text Block */}
        <div className="flex-1 z-10">
          <ProductHeroText openModal={openModal} />
        </div>

        {/* Animation or Visual */}
        <div className="flex-1 z-10">
          <CortexAnimation />
        </div>
        <AmbientOverlay />
      </div>
      <LeadModal isOpen={open} onClose={closeModal} source={source} />
    </>
  );
};

export default ProductHeroSection;
