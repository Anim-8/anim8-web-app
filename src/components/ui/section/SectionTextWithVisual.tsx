import React from 'react'
import SectionVisual from './SectionVisual'
import type { ServiceSection } from '../../../models/service/ServiceSection'
import SectionHeader from './SectionHeader'
import SectionCards from './SectionCards'

interface SectionTextWithVisualProps {
  section: ServiceSection
}

const SectionTextWithVisual: React.FC<SectionTextWithVisualProps> = ({ section }) => {
  return (
    <div className="relative w-full min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-36 gap-12">
      {/* Text Block */}
      <div className="w-full md:w-1/2 z-10">
        <SectionHeader title={section.title} subtitle={section.subtitle} items={section.variant !== "cards" ? section.items : undefined} description={section.description} variant={section.variant} />
      </div>
      {section.variant === "cards" && <SectionCards items={section.items} />}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 to-black pointer-events-none z-0" />
    </div>
  )
}

export default SectionTextWithVisual