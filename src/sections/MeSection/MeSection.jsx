import React from 'react'
import './MeSection.css'
import profile from '../../assets/profile.jpg'

export const MeSection = () => {
  return (
<div className="me-container" id="me">
          <div className="me1-container">
            <div className="me1-grid1-container">
              <div className="section-title">Me</div>
              <h2>Hernán Arévalo</h2>
              <h3>Frontend developer</h3>
            </div>

            <div className="me1-grid2-container">
              <div className="studies">
                  <span>Bachiller Humanista.</span>
                  <span>Information systems engineering student.</span>
                  <span>Intermediate English level (FL - UNC).</span>
                  <span>Website project developer.</span>
              </div>
              <p className="ubication">
                Córdoba, Argentina
              </p>
            </div>

          </div>
          <div className="me2-container">
            <div className="me2-grid1-container">
                  <span>Frontend knowledge of HTML, CSS, Javascript, React and Redux.</span>
                  <span>Strong understanding of design principles, Modular CSS, and responsive design.</span>
                  <span>Passionate learner of new technologies and tools with fast learning capability.</span>
                  <span>Intermediate English level (Facultad de Lenguas - UNC)</span>
              
            </div>
            <div className="me2-grid2-container">
              <img src={ profile } alt=""/>
            </div>
          </div>
        </div>  )
}
