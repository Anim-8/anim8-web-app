import React from 'react'
import FeatureList from '../FeatureList'
import type { LabelValuePair } from '../../../models/common/LableValuePair';

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  description: string;
  items: LabelValuePair[]
  variant?: "list" | "stacked"
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, description, items, variant }) => {
  return (
    <div className="text-left">
      <h2 className="text-4xl font-bold mb-6 text-white">
        {title} — <br /><span className="text-cyan-400">{subtitle}</span>
      </h2>
      <p className="text-lg text-white max-w-xl mb-8">{description}</p>
      <FeatureList items={items} variant={variant} />
    </div>
  )
}

export default SectionHeader