// src/components/Product/Hero/ProductHeroText.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import useModal from '../../../../hooks/useModal';
import LeadModal from '../../../shared/LeadModal';

const ProductHeroText: React.FC = () => {
  const navigate = useNavigate();
  const { open, source, openModal, closeModal } = useModal();

  return (
    <div className="relative flex flex-col justify-center items-start h-full max-w-xl px-4 md:px-0 space-y-6">
      <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-cyan-400">
        Cortex: Your Factory's Brain
      </h1>

      <p className="text-lg md:text-xl text-gray-300">
        Cortex isn’t software — it’s a brain. And like any factory brain, it needs to be designed,
        built, commissioned, and tuned with precision. We don’t just install a tool — we integrate
        intelligence into your factory, hand-in-hand with your team.
      </p>

      <div className="flex flex-wrap gap-4 mt-4">
        <button
          onClick={() => navigate('/product')}
          className="bg-white text-black font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-200 transition"
        >
          Discover Our Products
        </button>

        <button
          onClick={() => openModal('product-hero-contact')}
          className="border border-white/20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
        >
          Book a Demo
        </button>
      </div>

      {/* LeadModal injected at same level */}
      <LeadModal isOpen={open} onClose={closeModal} source={source} />
    </div>
  );
};

export default ProductHeroText;
