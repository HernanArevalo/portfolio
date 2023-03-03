import profile from '/assets/me-section/profile.jpg'

import { en, es } from '../../data/info.json'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

export const MeSection = () => {

  const navigate = useNavigate()
  
  const pathname = window.location.pathname

  useEffect(() => {

    if (!pathname.includes('es') && !pathname.includes('en')) {
      navigate('/en')
    }

  }, [])


  const [info, setInfo] = useState( pathname.includes('es')? es:en )

  useEffect(() => {
    
    setInfo( pathname.includes('es')? es:en )

  }, [pathname])
  
  


  return (
    <div className="me-container" id="me">
          <div className="section-title">
            { info.me.title }
          </div>
          <div className="me1-container">
            <div className="me1-grid1-container">
              <h2>Hernán Arévalo</h2>
              <h3>{ info.me.charge }</h3>
            </div>

            <div className="me1-grid2-container">
              <div className="studies">
                  <span>{ info.me.studies1 }</span>
                  <span>{ info.me.studies2 }</span>
                  <span>{ info.me.studies3 }</span>
              </div>
              <p className="ubication">
                Córdoba, Argentina
              </p>
            </div>

          </div>
          <div className="me2-container">
            <div className="me2-grid1-container">
                  <span className='span-1'>{ info.me.description1 }</span>
                  <span className='span-2'>{ info.me.description2 }</span>
                  <span className='span-1'>{ info.me.description3 }</span>
                  <span className='span-2'>{ info.me.description4 }</span>
                  <span className='span-1'>{ info.me.description5 }</span>
              
            </div>
            <div className="me2-grid2-container">
              <img src={ profile } alt="profile-picture"/>
            </div>
          </div>

          
    </div>
  )
}
