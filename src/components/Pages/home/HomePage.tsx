import HeroSection from './hero/HeroSection';
import PhilosophyHeroSection from './PhilosophyHeroSection';
import ProductHeroSection from './product/ProductHeroSection';
import ServiceHero from './ServiceHero';


const HomePage: React.FC = () => {
  return (
    <div className="w-full overflow-y-scroll scroll-smooth scrollwidth snap-none md:snap-y md:snap-mandatory">
      <section id="hero" className="h-auto md:h-screen snap-start">
        <HeroSection />
      </section>
      <section id="product" className="h-auto md:h-screen snap-start">
        <ProductHeroSection />
      </section>
      <section id="service" className="h-auto md:h-screen snap-start">
        <ServiceHero />
      </section>
      <section id="philosophy" className="h-auto md:h-screen snap-start">
        <PhilosophyHeroSection />
      </section>
    </div>
  );
};


export default HomePage;
