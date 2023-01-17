import { MeSection, ProjectsSection, SkillsSection, ContactSection } from './sections'
import { Navbar, Likes } from './components'

import './App.css'
import './styles/MeSection.css'
import './styles/ProjectsSection.css'
import './styles/SkillsSection.css'
import './styles/ContactSection.css'


function App() {


  return (
    <div className="App">
      <Navbar />
      <Likes />

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
