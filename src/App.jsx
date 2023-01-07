import { MeSection, ProjectsSection, SkillsSection, ContactSection } from './sections'
import { Navbar, Likes } from './components'
import './App.css'


function App() {


  return (
    <div className="App">
      <Navbar />
      <Likes />

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
