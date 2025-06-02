import React from 'react';
import HeroSection from './sections/hero/HeroSection';
import ProductInfoSection from './sections/products/ProductInfoSection';
import ServiceInfoSection from './sections/services/ServiceInfoSection';
import PhilosophySection from './sections/philosophy/PhilosophySection';

const Landing: React.FC = () => {
  return (
    <div className="h-screen w-full overflow-y-scroll scroll-smooth snap-y snap-mandatory">
      <section id="hero" className="h-screen snap-start">
        <HeroSection />
      </section>

      <section id="product" className="h-screen w-full snap-start snap-always">
        <ProductInfoSection />
      </section>

      <section id="service" className="h-screen w-full snap-start snap-always">
        <ServiceInfoSection />
      </section>
      
      <section id="philosophy" className="h-screen w-full snap-start snap-always">
        <PhilosophySection />
      </section>
    </div>
  );
};

export default Landing;
