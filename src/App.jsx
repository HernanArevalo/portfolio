import { useEffect, useState } from 'react'
import './App.css'

import { Navbar } from './components/Navbar'
import { MeSection, ProjectsSection, SkillsSection, ContactSection } from './sections'

function App() {

  const [height, setHeight] = useState( window.innerHeight )
  const [width, setWidth] = useState( window.innerWidth )



  window.addEventListener('resize', function() {
    setHeight( window.innerHeight )
    setWidth( window.innerWidth )
  });

  return (
    <div className="App">
      <Navbar />

      {/* <div className="medidas-fix">
                        {`Height: ${height}px - Width: ${width}px`}

      </div> */}

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
