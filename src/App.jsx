import { MeSection, ProjectsSection, SkillsSection, ContactSection } from './sections'
import { Navbar, Likes, Language } from './components'

import './App.css'
import './styles/MeSection.css'
import './styles/ProjectsSection.css'
import './styles/SkillsSection.css'
import './styles/ContactSection.css'
import { useHref, useNavigate, useParams } from 'react-router-dom'
import { useEffect, useLayoutEffect } from 'react'


function App(props) {




  return (
    <div className="App">
      <Navbar />
      <Likes />
      <Language />


      <div className="content">

        <MeSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />

      </div>

    </div>
  )
}

export default App
