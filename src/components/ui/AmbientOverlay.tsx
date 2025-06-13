import React from 'react'

const AmbientOverlay:React.FC<{overlay?: string | null}> = ({ overlay }) => <div className={`absolute inset-0 bg-gradient-to-br ${overlay ?? 'from-indigo-900/30 to-black'} pointer-events-none`} />

export default AmbientOverlay