import React from 'react'

interface PageProps {
    children: React.ReactNode
}

const Page: React.FC<PageProps> = ({ children }) => {
  return (
    <div className="h-screen bg-background w-full overflow-y-scroll scroll-smooth snap-y snap-mandatory scrollwidth">
        { children }
    </div>
  )
}

export default Page