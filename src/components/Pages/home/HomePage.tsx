import HeroSection from './hero/HeroSection';
import PhilosophyHeroSection from './PhilosophyHeroSection';
import ProductHeroSection from './product/ProductHeroSection';
import ServiceHero from './ServiceHero';


const HomePage: React.FC = () => {
  return (
    <div className="h-screen w-full overflow-y-scroll scroll-smooth snap-y snap-mandatory scrollwidth">
      <section id="hero" className="h-screen snap-start">
        <HeroSection />
      </section>
      <section id="hero" className="h-screen snap-start">
        <ProductHeroSection />
      </section>
      <section id="hero" className="h-screen snap-start">
        <ServiceHero />
      </section>
      <section id="hero" className="h-screen snap-start">
        <PhilosophyHeroSection />
      </section>
    </div>
  );
};

export default HomePage;
