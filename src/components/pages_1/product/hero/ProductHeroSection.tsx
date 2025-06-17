// src/components/Product/Hero/ProductHeroSection.tsx
import React from 'react';
import ProductHeroText from './ProductHeroText';
import CortexAnimation from './CortexAnimation';
import AmbientOverlay from '../../../ui/AmbientOverlay';

const ProductHeroSection: React.FC = () => {
  return (
    <div className="relative w-full h-full flex flex-col md:flex-row items-center justify-center gap-10 px-6 md:px-20 ">
      {/* Text Block */}
      <div className="flex-1 z-10">
        <ProductHeroText />
      </div>

      {/* Animation or Visual */}
      <div className="flex-1 z-10">
        <CortexAnimation />
      </div>
      <AmbientOverlay />
    </div>
  );
};

export default ProductHeroSection;
