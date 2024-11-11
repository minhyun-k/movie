import React from 'react'
import { Link } from 'react-router-dom'
import '../css/component/footer.scss'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='logo'>
        <Link to="/">YFLIX</Link>
      </div>
      <div className='f_con'>
        <ul className='f'>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Contact us</Link>
          </li>
          <li>
            <Link to="/">Term of services</Link>
          </li>
          <li>
            <Link to="/">about us</Link>
          </li>
        </ul>
        <ul className='f'>
          <li>
            <Link to="/">Live</Link>
          </li>
          <li>
            <Link to="/">FAQ</Link>
          </li>
          <li>
            <Link to="/">Premium</Link>
          </li>
          <li>
            <Link to="/">Pravacy policy</Link>
          </li>
        </ul>
        <ul className='f'>
          <li>
            <Link to="/">you must watch</Link>
          </li>
          <li>
            <Link to="/">Recent release</Link>
          </li>
          <li>
            <Link to="/">Top IMDB</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer