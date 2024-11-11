import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../css/component/header.scss'


const Header = () => {

  const [scrollPosition, setScrollPosition] = useState();
  const updateScroll = ()=>{
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  }
  useEffect(()=>{
    window.addEventListener('scroll',updateScroll);
  },[])


  return (
    <div className={scrollPosition < 100 ? "header" : "header header-change"}>
        <div className="header-wrap">
            <div className='logo'>
              <Link to="/">YFLIX</Link> 
              </div>
            <ul className='header-ul'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/movies" state={{type:"movie"}}>Movies</Link></li>
                <li><Link to="/movies" state={{type:"tv"}}>TV Seies</Link></li>
                {/* <li><Link to="/login">Login</Link></li> */}
            </ul>
        </div>
    </div>
  )
}

export default Header