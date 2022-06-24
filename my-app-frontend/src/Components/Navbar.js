import React from 'react'
import {Link, NavLink} from 'react-router-dom'

function Navbar() {
  return (
      <header>
        <nav className="nav-bar">
            <Link to="/home" id="logo" style={{ textDecoration: 'none' }}>
                <img src="https://i.imgur.com/dJDG6GR.jpg?2" alt="logo"/>
            </Link>
            <NavLink to="/learn" className="nav-links">Learn</NavLink>
            <NavLink to="/journal" className="nav-links">Journal</NavLink>
            <NavLink to="/about" className="nav-links">About</NavLink>
        </nav>
  </header>
  )
}

export default Navbar