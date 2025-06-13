import React from 'react'
import SimpleCard from '../../ui/section/SimpleCard';

interface ServiceCardLayoutProps {
    title: string;
    subtitle: string;
    description: string;
    items: {title: string, description: string}[]
    primaryTitleColor?: string;
}

const ServiceCardLayout: React.FC<ServiceCardLayoutProps> = ({ title, subtitle, description, items, primaryTitleColor }) => {
  return (
    <div className="relative w-full flex items-center justify-center px-6 py-24 text-center">
      <div className="w-full max-w-5xl z-10">
        <div className="space-y-12">
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white leading-snug">
          {title} — <br />
          <span className="text-primary">{subtitle}</span>
        </h2>

        <p className="text-lg text-white/80 max-w-3xl mx-auto mt-4">
          { description }
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 max-w-6xl mx-auto">
        {items.map((item) => 
          <SimpleCard
            key={item.title}
            title={item.title}
            description={item.description}
            titleColor={primaryTitleColor}
          />)}
      </div>
    </div>
      </div>
    </div>
  )
}

export default ServiceCardLayout