import React from 'react';

interface StationProps extends React.SVGProps<SVGRectElement> {
  cx: number;
  cy: number;
  width?: number;
  height?: number;
  ref: any;
}

const Station: React.FC<StationProps> = ({
  cx,
  cy,
  width = 50,
  height = 25,
  ref,
  ...rest
}) => (
  <rect
    x={cx - width / 2}
    y={cy - height / 2}
    width={width}
    height={height}
    rx={8}
    fill="var(--color-accent-primary)"
    stroke="var(--color-blue-glow)"
    strokeWidth={1.5}
    filter="drop-shadow(var(--shadow-elevated))"
    ref={ref}
    {...rest}
  />
);

export default Station;
