import React from 'react'
import FeatureList from '../FeatureList'
import type { LabelValuePair } from '../../../models/common/LableValuePair';
import type { SectionVariant } from '../../../models/service/ServiceSection';

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  description?: string;
  items?: LabelValuePair[]
  variant?: SectionVariant
  subtitleColor: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, description, items, variant, subtitleColor }) => {
  if (variant === "paragraph") {
    return (
      <div className="text-white max-w-2xl space-y-6">
        <h2 className="text-4xl font-bold leading-tight">
          {title} – <span className={`text-${subtitleColor}-400`}>{subtitle}</span>
        </h2>
        {items && items.map((item, i) => <p key={i} className='text-lg'>{item.value}</p>)}
      </div>
    )
  }
  return (
    <div className="text-left flex-1 z-10">
      <h2 className="text-4xl font-bold mb-6 text-white">
        {title} — <br /><span className={`text-${subtitleColor}-400`}>{subtitle}</span>
      </h2>
      {description && <p className="text-lg text-white max-w-xl mb-8">{description}</p>}
      {items && <FeatureList items={items} variant={variant} />}
    </div>
  )
}

export default SectionHeader