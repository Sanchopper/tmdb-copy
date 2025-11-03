import React from 'react'
import MovieCard from './MovieCard.jsx'

const TrendingList = () => {
  return (
    <div
      className="relative py-10 pl-35 "
    >
      <div className="trending-header">
        <h1 className="text-2xl font-bold">Trending</h1>
      </div>
      <div className="trending-content">
        <MovieCard/>
      </div>
    </div>
  )
}

export default TrendingList