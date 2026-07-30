import React from 'react'
import './nav.scss'
import Date from './DateTime'


const Nav = ({ windowsState, setWindowsState }) => {
  return (
    <nav>
      <div className="left">
        <div className="apple-icon">
          <img src="/navbar-icons/apple.svg" alt="apple svg" />
        </div>

        <div className="nav-items">
          <p>Kanhaiya's Portfolio</p>
        </div>
        <div onClick={() => { setWindowsState(state => ({ ...state, github: true })) }} className="nav-items nav-links">
          <p>Projects</p>
        </div>
        <div onClick={() => { setWindowsState(state => ({ ...state, contact: true })) }} className="nav-items nav-links">
          <p>Contact</p>
        </div>
        <div className="nav-items nav-links">
          <p onClick={() => { setWindowsState(state => ({ ...state, cli: true })) }}>Terminal</p>
        </div>
        <div className="nav-items nav-links">
          <p onClick={() => { setWindowsState(state => ({ ...state, resume: true })) }}>Resume</p>
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
