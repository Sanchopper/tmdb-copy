import React, {useEffect, useState} from 'react'

const API_BASE_URL = "https://api.themoviedb.org/3"

const API_KEY = import.meta.env.VITE_TMDB_API_KEY
const API_OPTIONS = {
    method: 'GET', 
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${API_KEY}`
    }
}

const MovieCard = () => {
    const [data, setData] = useState([])
    const fetchMovies = async () => {
        try {
            const res = await fetch(`${API_BASE_URL}/movie/popular?language=en-US&page=1`, API_OPTIONS)
            const data = await res.json()
            setData(data.results)
            console.log(data)
        } catch (error) {
            console.error("Error fetching movies:", error);
        }
    }

    useEffect(()=>{
        fetchMovies()
    }, [])
  return (
    <section className="movie-card-container flex gap-6 overflow-x-auto py-6">
        {
            data.map((movie)=> (
                <div
                    key={movie.id}
                    className="relative w-[150px] shrink-0 rounded-lg overflow-hidden shadow-lg"
                >
                    <img 
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                        className="w-full h-auto"
                    />
                    <h3 className="mt-2 text-sm font-semibold">{movie.title}</h3>
                    <p className="text-xs text-gray-500">{movie.release_date}</p>

                </div>
            ))
        }
    </section>
  )
}

export default MovieCard