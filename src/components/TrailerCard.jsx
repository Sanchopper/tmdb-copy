import React, { useState, useEffect } from 'react'

const API_BASE_URL = "https://api.themoviedb.org/3"
const API_KEY = import.meta.env.VITE_TMDB_API_KEY

const API_OPTIONS = {
    method: 'GET', 
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${API_KEY}`
    }
}

const TrailerCard = ({setCurrentBg}) => {
    const [data, setData] = useState([])
    const fetchTrailers = async () => {
        try {
            const res = await fetch(`${API_BASE_URL}/movie/popular?language=en-US&page=1`, API_OPTIONS)
            const data = await res.json()
            setData(data.results)
            console.log(data)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(()=> {
        fetchTrailers()
    }, [])
  return (
    <section className=" flex gap-6 overflow-x-auto py-6">
        {
            data.map((movie)=> (
                <div
                    key={movie.id}
                    className="relative w-[300px] h-[170px] shrink-0 rounded-xl overflow-hidden group cursor-pointer transform transition-transform duration-500 hover:scale-105"
                    onMouseEnter={() => setCurrentBg(`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`)}
                    >
                    <img
                        src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
                        alt={movie.title}
                        className='w-full h-full object-cover absolute inset-0'
                    />


                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300"></div>


                    <div className="absolute inset-0 flex items-center justify-center">
                        <svg
                        className="w-12 h-12 text-white opacity-80 group-hover:opacity-100 transition"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        >
                        <path d="M8 5v14l11-7z" />
                        </svg>
                    </div>

                    <div className="absolute bottom-2 left-2 text-white text-lg font-semibold drop-shadow-lg">
                        {movie.title}
                    </div>
                </div>
            ))
        }
    </section>
  )
}

export default TrailerCard