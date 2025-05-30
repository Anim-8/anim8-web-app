import React from 'react';

interface ProductIntroTextProps {
  title: string;
  description: string;
  className?: string;
}

const ProductIntroText: React.FC<ProductIntroTextProps> = ({ title, description, className = '' }) => {
  return (
    <div className={`text-left max-w-xl text-white ${className}`}>
      <h2 className="text-4xl font-bold text-[#00C4FF] mb-4">{title}</h2>
      <p className="text-lg leading-relaxed whitespace-pre-line">{description}</p>
    </div>
  );
};

export default ProductIntroText;
