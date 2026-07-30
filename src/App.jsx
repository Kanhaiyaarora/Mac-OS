import { useState } from 'react'
import './app.scss'
import Dock from './components/Dock'
import Nav from './components/Nav'
import Cli from './components/windows/Cli'
import Github from './components/windows/Github'
import Note from './components/windows/Note'
import Resume from './components/windows/Resume'
import Spotify from './components/windows/Spotify'
import Contact from './components/windows/Contact'

function App() {
  const [windowsState, setWindowsState] = useState({
    github: false,
    note: false,
    resume: false,
    spotify: false,
    cli: false,
    contact: false,
  })

  return (
    <main>
      <Nav windowsState={windowsState} setWindowsState={setWindowsState} />
      <Dock windowsState={windowsState} setWindowsState={setWindowsState} />
      {windowsState.github && <Github windowName="github" setWindowsState={setWindowsState} />}
      {windowsState.note && <Note windowName="note" setWindowsState={setWindowsState} />}
      {windowsState.resume && <Resume windowName="resume" setWindowsState={setWindowsState} />}
      {windowsState.spotify && <Spotify windowName="spotify" setWindowsState={setWindowsState} />}
      {windowsState.cli && <Cli windowName="cli" setWindowsState={setWindowsState} />}
      {windowsState.contact && <Contact windowName="contact" setWindowsState={setWindowsState} />}
    </main>
  )
}

export default App
