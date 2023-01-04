import React from 'react'
import './MeSection.css'
import profile from '/assets/me-section/profile.jpg'

export const MeSection = () => {
  return (
<div className="me-container" id="me">
          <div className="section-title">Me</div>
          <div className="me1-container">
            <div className="me1-grid1-container">
              <h2>Hernán Arévalo</h2>
              <h3>Frontend developer</h3>
            </div>

            <div className="me1-grid2-container">
              <div className="studies">
                  <span>Information systems engineering student.</span>
                  <span>B1 English level (FL - UNC).</span>
                  <span>Website project developer.</span>
              </div>
              <p className="ubication">
                Córdoba, Argentina
              </p>
            </div>

          </div>
          <div className="me2-container">
            <div className="me2-grid1-container">
                  <span className='span-1'>Frontend knowledge of HTML, CSS, Javascript, React and Redux.</span>
                  <span className='span-2'>Strong understanding of design principles, Modular CSS, and responsive design.</span>
                  <span className='span-1'>Passionate learner of new technologies and tools with fast learning capability.</span>
                  <span className='span-2'>Positive attitude, strong work ethic and out-of-the-box thinking.</span>
              
            </div>
            <div className="me2-grid2-container">
              <img src={ profile } alt=""/>
            </div>
          </div>

          <div className="likes-container animate__animated animate__flipInY">
            <box-icon type='solid' name='heart' className="likes-heart" color="rgb(238, 117, 74)"></box-icon>
            <div className="likes-counter">12</div>
          </div>
        </div>  )
}
