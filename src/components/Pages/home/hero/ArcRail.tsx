import React from 'react';

interface ArcRailProps {
  width: number;
  height: number;
}

const ArcRail: React.FC<ArcRailProps> = ({ width, height }) => {
  const padding = 40;
  const railWidth = width - 2 * padding;
  const radius = 3000;

  const startX = (width - railWidth) / 2;
  const endX = startX + railWidth;

  const arcPath = `
    M ${startX} ${height}
    A ${radius} ${radius} 0 0 1 ${endX} ${height}
  `;

  return (
    <svg
      className="absolute left-0 top-0 z-0"
      width={width}
      height={height}
    >
      <defs>
        <linearGradient id="railGlow" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#00C4FF" stopOpacity="0.2" />
          <stop offset="50%" stopColor="#00C4FF" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#00C4FF" stopOpacity="0.2" />
        </linearGradient>
      </defs>
      <path
        d={arcPath}
        fill="none"
        stroke="url(#railGlow)"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default ArcRail;
