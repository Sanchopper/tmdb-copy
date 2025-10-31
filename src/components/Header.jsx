import React from "react"
import { Link } from 'react-router-dom'
import Dropdown from './Dropdown'

const Header = () => {
//    const[isOpenMovie, setIsOpenMovie] = useState(false)
//    const[isOpenTVShows, setIsOpenTVShows] = useState(false)
//    const [IsOpenPeople, setIsOpenPeople] = useState(false)
//    const [isOpenMore, setIsOpenMore] = useState(false)
//    const [isOpenLanguage, setIsOpenLanguage] =useState(false)
  return (
    <header className="flex bg-[#032541] text-white py-5">
      <nav className='flex gap-x-4'>
        <Link to = '/' className="text-xl font-bold">MyTMDB</Link>
        <Dropdown title="Movies"
            items = {["Popular", "Now Playing", "Upcoming", "Top Rated"]}/>
        
        <Link to="login">Login</Link>
        <Link to="sign-up">Join TMDB</Link>
        <button className="search">🔍</button>
      </nav>
    </header>
  )
}

export default Header