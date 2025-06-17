import React from 'react';
import Button from './Button';

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

  if (onClick) {
    return (
      <Button onClick={onClick} className={commonClass} style={style}>
        {text}
      </Button>
    );
  }

  if (href) {
    return (
      <a href={href} className={commonClass} style={style}>
        {text}
      </a>
    );
  }

  return (
    <Button disabled className={`${commonClass} opacity-50`} style={style}>
      {text}
    </Button>
  );
};

export default GradientButton;
