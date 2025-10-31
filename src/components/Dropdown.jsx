import React,{useState} from 'react'
import { Link } from 'react-router-dom'

const Dropdown = ({title, items}) => {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="relative"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          {title}
          {isOpen && (
            <div className=" absolute flex flex-col bg-white text-black min-w-[180px] rounded-md shadow-lg px-2 py-2 font-light z-50">
                {items.map((item, index)=>(
                    <Link key = {index}>{item}</Link>
                ))}
            </div>
          )}
        </div>
  )
}

export default Dropdown