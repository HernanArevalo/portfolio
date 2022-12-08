import './App.css'

import { Navbar } from './components/Navbar'
import { MeSection, ProjectsSection, SkillsSection, ContactSection } from './sections'

function App() {

  return (
    <div className="App">
      <Navbar />
      <div className="content">

        <MeSection/>
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />

      </div>
    </div>
  )
}

export default App
