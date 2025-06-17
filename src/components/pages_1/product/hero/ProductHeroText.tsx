import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../ui/Button';

interface ProductHeroTextProps {
  openModal: (s: string) => void;
}

const ProductHeroText: React.FC<ProductHeroTextProps> = ({ openModal }) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-start h-full max-w-xl px-4 md:px-0 space-y-6">
      <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-cyan-400">
        Cortex: Your Factory's Brain
      </h1>

      <p className="text-lg md:text-xl text-gray-300">
        Cortex isn’t software — it’s a brain. And like any factory brain, it needs to be designed,
        built, commissioned, and tuned with precision. We don’t just install a tool — we integrate
        intelligence into your factory, hand-in-hand with your team.
      </p>

      <div className="flex flex-wrap gap-4 mt-4">
        <Button
          onClick={() => navigate('/product')}
          className="bg-white text-black font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-200 transition"
        >
          Discover Our Products
        </Button>

        <Button
          onClick={() => openModal('product-hero-contact')}
          className="border border-white/20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
        >
          Book a demo
        </Button>
      </div>
    </div>
  );
};

export default ProductHeroText;