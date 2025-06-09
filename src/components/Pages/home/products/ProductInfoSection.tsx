// components/sections/Landing/ProductSection.tsx
import React from 'react';
import GradientButton from '../../../ui/GradientButton';
import LeadModal from '../../../leads/LeadModal';
import useModal from '../../../../hooks/useModal';


const ProductSection: React.FC = () => {
  const { open, source, openModal, closeModal } = useModal();

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-8 py-20 bg-background text-center">
      <h2 className="text-2xl font-semibold text-white mb-6">Our Product</h2>

      <p className="text-base text-white max-w-2xl mb-6">
        Fast forward your ramp and maintain stable production using our different HMIs and build the brain of your factory — Cortex.
      </p>

      <GradientButton
        text="Request a demo."
        onClick={() => openModal('product-request-demo')}
      />

      <LeadModal isOpen={open} onClose={closeModal} source={source} />
    </div>
  );
};

export default ProductSection;
