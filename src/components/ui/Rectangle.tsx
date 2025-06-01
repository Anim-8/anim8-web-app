import React from 'react';

interface RectangleProps extends React.SVGProps<SVGRectElement> {
  cx: number;
  cy: number;
  width?: number;
  height?: number;
  ref: any
}

const Rectangle: React.FC<RectangleProps> = ({
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
    rx={1}
    fill="#90cdf4"
    stroke="black"
    ref={ref}
    {...rest}
  />
);

export default Rectangle