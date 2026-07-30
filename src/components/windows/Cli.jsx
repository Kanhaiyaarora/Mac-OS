import React from 'react'
import MacWindow from './MacWindow'
import TerminalModule from 'react-console-emulator'
import "./cli.scss"

const Terminal = TerminalModule.default ?? TerminalModule;

const Cli = ({ windowName, setWindowsState }) => {
  const commands = {
    about: {
      description: 'About me',
      usage: 'about',
      fn: () => `Hi, I'm Kanhaiya Arora 👋

A Full Stack MERN Developer from India passionate about building modern web applications, AI-powered products, and beautiful user experiences.

🏆 Gold Medalist (BCA)
💻 Open Source Contributor
🚀 Building SaaS & AI Projects
🎯 Currently exploring LangChain, LangGraph, Next.js and Cloud.`
    },

    skills: {
      description: 'List technical skills',
      usage: 'skills',
      fn: () => `Frontend:
• React.js
• Next.js
• JavaScript (ES6+)
• TypeScript
• Tailwind CSS
• HTML5 / CSS3
• GSAP
• Framer Motion

Backend:
• Node.js
• Express.js
• REST APIs
• JWT Authentication

Database:
• MongoDB
• Mongoose
• Pinecone Vector DB

AI:
• LangChain
• LangGraph
• Gemini
• Mistral AI
• Cohere AI

Tools:
• Git & GitHub
• Docker
• Kubernetes
• Vite
• Postman`
    },

    projects: {
      description: 'View my projects',
      usage: 'projects',
      fn: () => `🚀 Featured Projects

1. ResolveAI
   AI-powered customer support platform.

2. AI Battle Arena
   Compare multiple LLMs with an AI judge.

3. MERN E-Commerce
   Complete shopping platform with Stripe & Razorpay.

4. Visual DOM Editor
   Figma-inspired drag-and-drop page builder.

5. Portfolio Website
   Interactive developer portfolio with animations.`
    },

    experience: {
      description: 'Display experience',
      usage: 'experience',
      fn: () => `💼 Experience

Frontend Developer Intern
Digiglobe Solution
July 2024 (1 Month)

• Built responsive React applications
• Improved UI & user experience
• Worked with modern frontend technologies

🏅 Achievements
• Gold Medalist in BCA
• Team Lead - AI Hackathon
• Open Source Contributor`
    },

    contact: {
      description: 'Get contact information',
      usage: 'contact',
      fn: () => `📧 Email: kanhaiyaarora75@gmail.com
      📱 7505200946
📍 India
💼 Available for Full-Time, Freelance & Open Source`
    },

    github: {
      description: 'Open GitHub profile',
      usage: 'github',
      fn: () => {
        window.open('https://github.com/kanhaiyaarora', '_blank')
        return 'Opening GitHub...'
      }
    },

    linkedin: {
      description: 'Open LinkedIn profile',
      usage: 'linkedin',
      fn: () => {
        window.open('https://www.linkedin.com/in/kanhaiya-arora/', '_blank')
        return 'Opening LinkedIn...'
      }
    },

    resume: {
      description: 'Download resume',
      usage: 'resume',
      fn: () => {
        window.open('/resume.pdf', '_blank')
        return 'Opening resume...'
      }
    },

    social: {
      description: 'View social links',
      usage: 'social',
      fn: () => `GitHub   : https://github.com/kanhaiyaarora
LinkedIn : https://www.linkedin.com/in/kanhaiya-arora/
Portfolio: https://kanhaiyaarora.github.io`
    },

    echo: {
      description: 'Echo a passed string',
      usage: 'echo <string>',
      fn: (...args) => args.join(' ')
    }
  }

  const welcomeMessage = `
╔════════════════════════════════════════════════════════╗
║             Welcome to Kanhaiya's CLI 🚀              ║
╚════════════════════════════════════════════════════════╝

Hi there! 👋

I'm Kanhaiya Arora, a Full Stack MERN Developer
who loves building AI products, scalable web apps,
and contributing to Open Source.

Type 'help' to explore available commands.

Popular commands:
  • about • skills • projects
  • experience • contact • github
  • linkedin • resume

Happy Exploring! 🚀
`

  return (
    <MacWindow
      windowName={windowName}
      setWindowsState={setWindowsState}
    >
      <div className="cli-window">
        <Terminal
          commands={commands}
          welcomeMessage={welcomeMessage}
          promptLabel={'kanhaiya@portfolio:~$'}
          promptLabelStyle={{ color: '#00ff00' }}
        />
      </div>
    </MacWindow>
  )
}

export default Cli