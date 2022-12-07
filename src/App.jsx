import './App.css'
import './me.css'
import './projects.css'
import './skills.css'
import './contact.css'

import profile from './assets/profile.jpg'
import { Navbar } from './components/Navbar'

function App() {

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <div className="me-container" id="me">
          <div className="me1-container">
            <div className="me1-grid1-container">
              <h1>Me</h1>
              <h2>Hernán Arevalo</h2>
              <h3>Frontend developer</h3>
            </div>

            <div className="me1-grid2-container">
              <p className="studies">
                Bachiller Humanista.
                Estudiante de Ingeniería en
                Sistemas de Información.
                Desarrollador de proyectos web.
              </p>
              <p className="ubication">
                Córdoba, Argentina
              </p>
            </div>

          </div>
          <div className="me2-container">
            <div className="me2-grid1-container">
              <img src={ profile } alt=""/>
            </div>
            <div className="me2-grid2-container">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, dolorum. Omnis, delectus culpa! Sunt, nisi nemo minima fuga illo saepe, cum possimus at praesentium alias, totam doloribus rem repudiandae neque.</p>
            </div>
          </div>
        </div>
        <div className="projects-container" id="projects">
          <div className="project1-container">
            <span>Projects</span>
          </div>
        </div>
        <div className="skills-container" id="projects">
          Skills
        </div>
        <div className="contact-container" id="projects">
          Contact
        </div>

      </div>
    </div>
  )
}

export default App
