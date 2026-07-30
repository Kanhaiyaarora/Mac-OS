import MacWindow from './MacWindow'
import './contact.scss'

const Contact = ({ windowName, setWindowsState }) => {

  return (
    <MacWindow windowName={windowName} setWindowsState={setWindowsState} >
      <div className="contact-window">
        <div className="contact">
          <div className="contact-img">
            <img src="/kanhaiya.jpeg" alt="contact svg" />
          </div>
          <div className="contact-details">
            <h1>Let's Connect</h1>
            <p>Got an idea? A bug to squash? Or just wanna talk tech? I'm in.</p>
            <h2>Contact Details</h2>
            <p>Name: Kanhaiya Arora</p>
            <p>Email: kanhaiyaarora75@example.com</p>
            <p>Phone: 7505200946</p>
          </div>
        </div>
        <div className="contact-links">
          <div onClick={() => window.open('https://github.com/kanhaiyaarora', '_blank')} className="github">
            <img src="/contact-icons/github.svg" alt="github svg" />
            <p >GitHub</p>
          </div>
          <div onClick={() => window.open('https://linkedin.com/in/kanhaiya-arora', '_blank')} className="linkedin">
            <img src="/contact-icons/linkedin.svg" alt="linkedin svg" />
            <p >LinkedIn</p>
          </div>
          <div onClick={() => window.open('https://x.com/KanhaiyaArora13', '_blank')} className="x">
            <img src="/contact-icons/X.svg" alt="x svg" />
            <p >Twitter/X</p>
          </div>
          <div onClick={() => window.open('https://instagram.com/kanhaiya_dev_journey', '_blank')} className="instagram">
            <img src="/contact-icons/instagram.svg" alt="instagram svg" />
            <p >Instagram</p>
          </div>
        </div>
      </div>
    </MacWindow>
  )
}

export default Contact
