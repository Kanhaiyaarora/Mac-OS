import { Rnd } from 'react-rnd'
import './window.scss'

const MacWindow = ({ children, windowName, setWindowsState }) => {
  return (
    <Rnd default={{ x: 400, y: 100, width: "50vw", height: "60vh" }}>

      <div className="window">
        <div className="nav">
          <div className="dots">
            <div onClick={() => setWindowsState(state => ({ ...state, [windowName]: false }))} className="dot red"></div>
            <div className="dot yellow"></div>
            <div className="dot green"></div>
          </div>
          <div className="title"><p>kanhaiyaarora - zsh</p></div>
        </div>
        <div className="main-content">
          {children}
        </div>
      </div>
    </Rnd>

  )
}

export default MacWindow
