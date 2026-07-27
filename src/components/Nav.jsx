import React from 'react'
import './nav.scss'
import Date from './DateTime'


const Nav = () => {
  return (
    <nav>
      <div className="left">
        <div className="apple-icon">
          <img src="/navbar-icons/apple.svg" alt="apple svg" />
        </div>

        <div className="nav-items">
          <p>Kanhaiya Arora</p>
        </div>
        <div className="nav-items">
          <p>File</p>
        </div>
        <div className="nav-items">
          <p>Window</p>
        </div>
        <div className="nav-items">
          <p>Terminal</p>
        </div>

      </div>
      <div className="right">
        <div className="nav-icon">
          <img src="/navbar-icons/wifi.svg" alt="wifi svg" />
        </div>
        <div className="nav-item">
          <Date />
        </div>
      </div>
    </nav>
  )
}

export default Nav
