import React, { useState } from 'react'
import TrailerCard from './TrailerCard.jsx'

const Trailers = () => {
  const [currentBg, setCurrentBg] = useState('')

  return (
    <div
        className="relative pl-35 py-10 transition-all duration-700 ease-in-out"
        style={{
        backgroundImage: currentBg
            ? `linear-gradient(rgba(0, 50, 150, 0.5), rgba(0, 50, 150, 0.5)), url(${currentBg})`
            : `linear-gradient(rgba(0, 50, 150, 0.5), rgba(0, 50, 150, 0.5)), url(./assets/heroBG.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'all 0.7s ease-in-out',
        }}
    >   
      <h2 className="text-white text-3xl font-bold mb-4">Latest Trailers</h2>

      <TrailerCard setCurrentBg={setCurrentBg} />
    </div>
  )
}

export default Trailers