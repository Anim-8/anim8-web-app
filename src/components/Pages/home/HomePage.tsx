import HeroSection from './hero/HeroSection';
import ProductInfoSection from './products/ProductInfoSection';
import ServiceInfoSection from './services/ServiceInfoSection';
import PhilosophySection from './philosophy/PhilosophySection';
import TeamInfoSection from './team/TeamInfoSection';

const HomePage: React.FC = () => {
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

      <section id="team" className="h-screen w-full snap-start snap-always">
        <TeamInfoSection />
      </section>
    </div>
  );
};

export default HomePage;
