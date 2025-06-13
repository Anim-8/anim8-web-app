import React from 'react'
import SectionHeader from './SectionHeader'
import SectionCards from './SectionCards'
import AmbientOverlay from '../AmbientOverlay'
import type { BaseSection } from '../../../models/common/Section'
import type { LabelValuePair } from '../../../models/common/LableValuePair'
import FeatureList from '../FeatureList'

interface SectionTextWithVisualProps {
  section: BaseSection
  primaryTitleColor?: string;
}

const SectionTextWithVisual: React.FC<SectionTextWithVisualProps> = ({ section, primaryTitleColor }) => {
  return (
    <div className="relative w-full min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-36 gap-12">
      {/* Text Block */}
      <div className="w-full md:w-1/2 z-10">
        <SectionHeader title={section.title} subtitleColor={section.subtitleColor} subtitle={section.subtitle} items={section.variant !== "cards" ? section.items as LabelValuePair[] : undefined} description={section.description} variant={section.variant} />
        {section.itemFooter && <FeatureList items={section.items as LabelValuePair[]} /> }
      </div>
      {
        section.variant === "cards" || section.visualSlot ?
          <div className="w-full md:w-1/2 z-10 flex justify-center items-start">
            { section.visualSlot ? section.visualSlot : <SectionCards items={section.items as LabelValuePair[]} primaryTitleColor={primaryTitleColor} /> }
          </div> : null
      }
      <AmbientOverlay overlay={section.overlayColor} />
    </div>
  )
}

export default SectionTextWithVisual