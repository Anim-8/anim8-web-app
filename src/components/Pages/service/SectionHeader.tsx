import React from 'react'
import type { LabelValuePair } from '../../../models/common/LableValuePair'
import FeatureList from '../../ui/FeatureList';

interface SectionHeaderProps {
    items: LabelValuePair[];
    title: string;
    subtitle: string;
    description: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, description, items }) => {
  return (
    <div className="text-left">
      <h2 className="text-4xl font-bold mb-6 text-white">
        {title} — <br /><span className="text-primary">{subtitle}</span>
      </h2>
      <p className="text-lg text-white max-w-xl mb-8">{description}</p>
      <ul className="text-white text-sm space-y-3 list-disc pl-6">
        <FeatureList items={items} />
      </ul>
    </div>
  )
}

export default SectionHeader