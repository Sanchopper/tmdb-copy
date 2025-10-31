import React, { useState } from 'react';

const Hero = () => {
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <div 
            className="relative bg-cover bg-center bg-no-repeat py-20  px-35"
            style={{
                backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(./src/assets/heroBG.jpg)'
            }}
        >
            <div className=" text-white">
                <h1 className="text-5xl font-bold mb-1 mr-auto">
                    Welcome.
                </h1>
                
                <p className="text-3xl mb-8 mr-auto">
                    Millions of movies, TV shows and people to discover. Explore now.
                </p>

                <div className="relative font-light w-full">
                    <input
                        type="text"
                        placeholder="Search for a movie, tv show, person......"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-white py-4 px-6 rounded-full text-gray-800 text-lg focus:outline-none focus:ring-2 focus:ring-[#01b4e4] "
                    />
                    <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-linear-to-r from-[#01b4e4] to-[#0099c3] text-white py-3 px-8 rounded-full font-bold hover:from-[#0099c3] hover:to-[#0082a3] transition-all">
                        Search
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;