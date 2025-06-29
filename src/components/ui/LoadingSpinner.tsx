import React from 'react'

interface LoadingSpinnerProps {
    width?: number;
    height?: number;
}

const LoadingSpinner:React.FC<LoadingSpinnerProps> = ({ width = 36, height = 36 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke="var(--color-blue-glow)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className='animate-spin'
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  )
}

export default LoadingSpinner