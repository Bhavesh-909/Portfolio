
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import { styles } from '../style';
import { navLinks } from '../constans';
import { logo, menu, close } from '../assets';

const Navbar = () => {
  const [active , setActive ] = useState('')
  return (
    <nav className={`${styles.paddingX} w-full flex 
    item-center py-5 fixed top-0 z-20 bg-primary`}>
      
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto ">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        
        >
          <img src={logo} alt="Logo" className="w-16 h-16 objaict-contain"  />
        
          <p className="text-white text-[18px] font-bold cursor-pointer">
              Bhavesh <span 
              className="sm:block hidden"
          > | MERN Stack developer </span>
          </p>
        </Link>  
        <ul className="list-none hidden sm:flex flex-row gap-10">{
          navLinks.map((Link) => (
            <li
              key={Link.id}
              className={`${
                active === Link.title
                ? "text-white"
                :"text-secondary"
                } hover:text-white text-[18px] 
              font-medium cursor-pointer `}
              onClick={()=>setActive(Link.title)}
            >
              <a href={`#${Link.id}`}>{Link.title}</a>
            </li>
            
          ))
        }
        </ul>
        <div>
          
        </div>
      </div>

    </nav>
  )
}

export default Navbar