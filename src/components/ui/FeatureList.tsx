import React from 'react'
import type { LabelValuePair } from '../../models/common/LableValuePair'

interface FeatureListProps {
    items: LabelValuePair[];
    color?: string
}

const FeatureList: React.FC<FeatureListProps> = ({ items, color = "text-cyan-300" }) => {
  return (
    <>
    {items.map((item, i) => <li key={i}><strong className={color}>{item.label}</strong> {item.value}</li>)}
    </>
  )
}

export default FeatureList