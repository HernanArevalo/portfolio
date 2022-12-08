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
        </div>  )
}
