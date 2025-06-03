import ProductHeroSection from './hero/ProductHeroSection';

const ProductPage: React.FC = () => {
  return (
    <div className="h-screen bg-background w-full overflow-y-scroll scroll-smooth snap-y snap-mandatory">
      <section id="hero" className="h-screen snap-start">
        <ProductHeroSection />
      </section>
      {/* Future sections go here... */}
    </div>
  );
};

export default ProductPage;

