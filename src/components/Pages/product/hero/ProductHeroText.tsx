// src/components/Product/Hero/ProductHeroText.tsx
import React from 'react';

const ProductHeroText: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-start h-full max-w-xl px-4 md:px-0">
      <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-cyan-400">
        Cortex: Your Factory's Brain
      </h1>
      <p className="mt-6 text-lg md:text-xl text-gray-300">
        Cortex isn’t software — it’s a brain. And like any factory brain, it needs to be designed,
        built, commissioned, and tuned with precision. We don’t just install a tool — we integrate
        intelligence into your factory, hand-in-hand with your team.
      </p>
    </div>
  );
};

export default ProductHeroText;
