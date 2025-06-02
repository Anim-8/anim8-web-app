import React from 'react';

interface DiamondProps {
  cx: number; // center x
  cy: number; // center y
  size?: number;
  fill?: string;
  stroke?: string;
  [x: string]: any
}

// on station passed -> green. station not visited -> gray. stroke -> passed -> gold. not visited gray
const Diamond: React.FC<DiamondProps> = ({ cx, cy, size = 6, fill = 'gray', stroke = 'gray', ...rest }) => (
  <g transform={`translate(${cx} ${cy}) rotate(-45)`}>
    <rect
      x={-size / 2}
      y={-size / 2}
      width={size}
      height={size}
      fill={fill}
      stroke={stroke}
      { ...rest }
    />
  </g>
);

export default Diamond;
