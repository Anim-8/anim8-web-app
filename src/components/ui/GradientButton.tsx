import React from 'react';

interface GradientButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
  href?: string;
}

const GradientButton: React.FC<GradientButtonProps> = ({ text, onClick, className = '', href }) => {
  const baseClasses =
    'bg-gradient-to-r from-[#66DFFF] to-[#00AEEF] text-white font-medium px-6 py-3 rounded-full shadow-md hover:opacity-90 transition-opacity duration-300';

  if (href) {
    return (
      <a href={href} className={`${baseClasses} ${className}`}>
        {text}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={`${baseClasses} ${className}`}>
      {text}
    </button>
  );
};

export default GradientButton;
