import React from 'react';
import ProductIntroText from './ProductIntroText';
import GradientButton from '../../ui/GradientButton';
import brain from '../../../assets/brain.webp'

const ProductInfoSection: React.FC = () => {
  return (
    <section className="w-full h-full bg-[#0A0F14] text-white flex items-center justify-between px-16 relative overflow-hidden">
      {/* Left: Text & Button */}
      <div className="flex flex-col gap-6 max-w-[480px] z-10 w-full">
        <ProductIntroText
          title="Our Product: Cortex"
          description={`Fast forward your  ramp  and\nmaintain stable production using our\ndifferent HMIs and build your the\nbrain of your factory - Cortex`}
        />
        <GradientButton text="Request a demo." href="#contact" className='max-w-1/2 min-w-1/2' />
      </div>
      {/* Right: Full Visual Section */}
      <div className="relative w-full flex-1 h-full flex flex-col items-center justify-start mt-[250px]">

        {/* Head Div */}
        <div className="relative z-10 pt-8">
            <img src={brain} alt="Glowing Brain" className="w-[300px] h-auto" />
        </div>
        {/* Plane Div */}
        <div className="relative w-full h-[250px] mt-[-10px] z-0">
            <svg viewBox="0 0 650 250" className="w-full h-full">
            <path
                d="M 25 150 a 300 80 0 1 0 600 0 a 300 80 0 1 0 -600 0"
                stroke="#777"
                strokeWidth="1.2"
                strokeDasharray="0.5 3"
                strokeLinecap="round"
                fill="none"
            />
            </svg>
        </div>
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[650px] h-full pointer-events-none z-20">
            <svg viewBox="0 0 650 785" className="w-full h-full">
                <line x1="325" y1="100" x2="85" y2="350" stroke="#777" strokeWidth="1.2" />
                <line x1="325" y1="100" x2="205" y2="400" stroke="#777" strokeWidth="1.2" />
                <line x1="325" y1="100" x2="445" y2="400" stroke="#777" strokeWidth="1.2" />
                <line x1="325" y1="100" x2="565" y2="350" stroke="#777" strokeWidth="1.2" />
                <text x="75" y="370" textAnchor="middle" fill="#fff" fontSize="12">Dimensional</text>
                <text x="205" y="425" textAnchor="middle" fill="#fff" fontSize="12">Process</text>
                <text x="445" y="425" textAnchor="middle" fill="#fff" fontSize="12">Production</text>
                <text x="575" y="370" textAnchor="middle" fill="#fff" fontSize="12">Joining</text>
            </svg>
        </div>
        </div>
    </section>
  );
};

export default ProductInfoSection;
