import React from 'react'
import type { LabelValuePair } from '../../../models/common/LableValuePair'

interface SectionCardsProps {
  items: LabelValuePair[];
  primaryTitleColor?: string
}

const SectionCards: React.FC<SectionCardsProps> = ({ items, primaryTitleColor = "text-indigo-300" }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-lg">
      {items.map((item, idx) => (
        <div
          key={idx}
          className="rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 p-6 transition duration-300 shadow hover:shadow-indigo-400/10"
        >
          <h4 className={`text-lg font-semibold ${primaryTitleColor} mb-2`}>{item.label}</h4>
          <p className="text-sm text-white/80">{item.value}</p>
        </div>
      ))}
    </div>
  )
}

export default SectionCards