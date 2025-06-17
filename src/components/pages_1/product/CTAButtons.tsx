import React from 'react'
import Button from '../../ui/Button'

const CTAButtons: React.FC<{handleClick: (s: string) => void}> = ({ handleClick }) => {
  return (
    <>
    <Button
          onClick={() => handleClick('product-discovery')}
          className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition"
        >
          Book a Discovery Session
        </Button>

        <Button
          onClick={() => handleClick('product-diagnostic')}
          className="bg-cyan-700 hover:bg-cyan-800 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition"
        >
          Get a Diagnostic
        </Button>

        <Button
          onClick={() => handleClick('product-hmi')}
          className="bg-white hover:bg-gray-100 text-cyan-800 font-semibold py-3 px-8 rounded-full shadow-lg transition"
        >
          See the Dimensional HMI in Action
        </Button>
    </>
  )
}

export default CTAButtons