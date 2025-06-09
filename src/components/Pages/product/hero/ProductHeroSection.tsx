// src/components/Product/Hero/ProductHeroSection.tsx
import React from 'react';
import ProductHeroText from './ProductHeroText';
import CortexAnimation from './CortexAnimation';

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

      {/* Optional: Ambient Glow or Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/30 to-black pointer-events-none" />
    </div>
  );
};

export default ProductHeroSection;
