import React from 'react'
import ServiceVisual from './ServiceVisual';
import SectionHeader from './SectionHeader';
import type { Section } from '../../../models/common/Section';


const ServiceSection:React.FC<{section: Section}> = ({ section }) => {
  return (
    <div className="relative w-full h-full flex items-center justify-between flex-col md:flex-row px-6 md:px-20 py-20">
      <div className="w-full md:w-1/2 z-10">
        <SectionHeader title={section.title} subtitle={section.subtitle} description={section.description} items={section.items} />
      </div>
      <div className="w-full md:w-1/2 mt-10 md:mt-0 z-10 flex justify-center items-center">
        <ServiceVisual />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-800/30 to-black pointer-events-none" />
    </div>
  )
}

export default ServiceSection