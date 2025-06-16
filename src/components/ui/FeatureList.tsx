import React from 'react'
import type { LabelValuePair } from '../../models/common/LableValuePair'
import type { SectionVariant } from '../../models/common/Section';

interface FeatureListProps {
  items: LabelValuePair[];
  variant?: SectionVariant
  color?: string
}

const FeatureList: React.FC<FeatureListProps> = ({ items, variant = "list", color = "text-cyan-300" }) => {

  if (variant === "list") {
    return (
      <ul className="text-white text-sm space-y-3 list-disc pl-6">
        {items.map((item, i) => <li key={i}><strong className={color}>{item.label}</strong> {item.value}</li>)}
      </ul>
    )
  }

  return (
    <div className="space-y-4">
      {
        items.map((item, i) =>
          <div key={i}>
            <h3 className="text-cyan-300 font-semibold">{item.label}</h3>
            <p className="text-sm text-white/80">{item.value}</p>
          </div>
        )
      }
    </div>
  )
}

export default FeatureList