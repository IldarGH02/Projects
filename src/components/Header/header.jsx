import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import './header.css'

function Header() {

  return <div className='header flex flex-row justify-around px-4 py-5 rounded-lg shadow-2xl'>
    <h2 className='header__title'>Информация о погоде и времени</h2>
    <nav className='header__nav flex items-center'>
      <Link to="/" className='header__link text-cyan-500 text-xl'>
        ГЛАВНАЯ
      </Link>
      <NavLink to="/clock" className="header__link text-cyan-500 text-xl">
        ВРЕМЯ
      </NavLink>
      <NavLink to="/weather" className="header__link text-cyan-500 text-xl">
        ПОГОДА
      </NavLink>
    </nav>
  </div>
}

export default Header
