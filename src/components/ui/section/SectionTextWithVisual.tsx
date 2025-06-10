import React from 'react'
import SectionVisual from './SectionVisual'
import type { ServiceSection } from '../../../models/service/ServiceSection'
import SectionHeader from './SectionHeader'

interface SectionTextWithVisualProps {
  section: ServiceSection
}

const SectionTextWithVisual: React.FC<SectionTextWithVisualProps> = ({ section }) => {
  return (
    <div className="relative w-full h-full flex items-center justify-between flex-col md:flex-row px-6 md:px-20 py-20">
      <div className="w-full md:w-1/2 z-10">
        <SectionHeader title={section.title} subtitle={section.subtitle} description={section.description} items={section.items} variant={section.variant} />
      </div>
      <div className="w-full md:w-1/2 mt-10 md:mt-0 z-10 flex justify-center items-center">
        <SectionVisual />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-800/30 to-black pointer-events-none" />
    </div>
  )
}

export default SectionTextWithVisual