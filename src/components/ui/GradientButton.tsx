import React from 'react';

interface GradientButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
  href?: string;
}

const GradientButton: React.FC<GradientButtonProps> = ({
  text,
  onClick,
  href,
  className = '',
}) => {
  const style: React.CSSProperties = {
    backgroundImage: 'linear-gradient(to right, var(--color-gradient-pulse-start), var(--color-gradient-pulse-end))',
    color: 'var(--color-text-white)',
    padding: 'var(--space-sm) var(--space-lg)',
    borderRadius: '9999px', // full rounded
    boxShadow: 'var(--shadow-elevated)',
    transition: 'opacity 0.3s ease-in-out',
  };

  const commonClass = `hover:opacity-90 cursor-pointer ${className}`;

  return href ? (
    <a href={href} className={commonClass} style={style}>
      {text}
    </a>
  ) : (
    <button onClick={onClick} className={commonClass} style={style}>
      {text}
    </button>
  );
};

export default GradientButton;
