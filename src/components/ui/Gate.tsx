import React from 'react';

interface GateProps {
  cx: number; // center x
  cy: number; // center y
  size?: number;
  fill?: string;
  stroke?: string;
  [x: string]: any;
}

const Gate: React.FC<GateProps> = ({
  cx,
  cy,
  size = 10,
  fill = 'var(--color-accent-primary)',
  stroke = 'var(--color-blue-glow)',
  ...rest
}) => (
  <g transform={`translate(${cx} ${cy}) rotate(-45)`}>
    <rect
      x={-size / 2}
      y={-size / 2}
      width={size}
      height={size}
      rx={2}
      fill={fill}
      stroke={stroke}
      strokeWidth={1.2}
      filter="drop-shadow(var(--shadow-elevated))"
      {...rest}
    />
  </g>
);

export default Gate;
