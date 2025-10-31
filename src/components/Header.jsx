import React, { useState} from "react"
import { Link } from 'react-router-dom'
import Dropdown from './Dropdown'

const Header = () => {
    const [isOpenLanguage, setIsOpenLanguage] = useState(false)
    
    return (
        <header className="flex bg-[#032541] text-white py-4 px-6 pl-35">
            <nav className='flex justify-between items-center gap-x-6 w-full'>
                {/* Левая часть */}
                <div className="flex items-center gap-x-15">
                    <Link to='/' className="text-xl font-bold ">MyTMDB</Link>
                    <Dropdown 
                        title="Movies"
                        items={["Popular", "Now Playing", "Upcoming", "Top Rated"]}
                    />
                    <Dropdown
                        title="TV Shows"
                        items={["Popular", "Airing Today", "On TV", "Top Rated"]}
                    />
                    <Dropdown
                        title="People"
                        items={["Popular People"]}
                    />
                    <Dropdown
                        title="More"
                        items={["Discussions", "Leaderboard", "Support", "API Documentation", "API for Business"]}
                    />
                </div>

                {/* Правая часть */}
                <div className="flex items-center gap-x-6 ml-auto mr-20">
                    <div className="language relative"
                        onMouseEnter={() => setIsOpenLanguage(true)}
                        onMouseLeave={() => setIsOpenLanguage(false)}
                    >
                        <button className="">
                            Language
                        </button>
                        {isOpenLanguage && (
                            <div className="absolute top-full left-0 bg-white text-black min-w-[120px] rounded-md shadow-lg z-50 mt-1 py-2">
                                <button className="block w-full text-left px-4 py-2 hover:bg-gray-100 hover:text-[#01b4e4] transition-colors">
                                    ENG
                                </button>
                                <button className="block w-full text-left px-4 py-2 hover:bg-gray-100 hover:text-[#01b4e4] transition-colors">
                                    RUS
                                </button>
                                <button className="block w-full text-left px-4 py-2 hover:bg-gray-100 hover:text-[#01b4e4] transition-colors">
                                    KAZ
                                </button>
                            </div>
                        )}
                    </div>
                    
                    <Link 
                        to="login" 
                        className=""
                    >
                        Login
                    </Link>
                    
                    <Link 
                        to="sign-up" 
                        className=""
                    >
                        Join TMDB
                    </Link>
                    
                    <button className="search ">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 11 11 11C12.8956 11 14.6146 11.7525 15.8748 12.9753L16.0247 15.8748Z"/>
    </svg>
                    </button>
                </div>
            </nav>
        </header>
    )
}

export default Header