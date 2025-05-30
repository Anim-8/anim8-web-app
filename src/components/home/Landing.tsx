// src/pages/Landing.tsx
import React from 'react';
import HeroSection from './hero/HeroSection';
import ProductInfoSection from './products/ProductInfoSection';


const Landing: React.FC = () => {
  return (
    <div className="h-screen w-full overflow-y-scroll scroll-smooth snap-y snap-mandatory">
        <section id="hero" className="h-screen snap-start">
            <HeroSection />
        </section>
        <section id="product" className="h-screen w-full snap-start snap-always">
            <ProductInfoSection />
        </section>
    </div>
  );
};

export default Landing;
