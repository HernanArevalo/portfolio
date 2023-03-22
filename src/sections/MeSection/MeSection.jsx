import profile from '/assets/me-section/profile.jpg'


export const MeSection = ({info}) => {



  return (
    <div className="me-container" id="me">
          <div className="section-title animate__animated animate__fadeInLeft">
            { info.me.title }
          </div>
          <div className="me1-container">
            <div className="me1-grid1-container animate__animated animate__fadeInLeft">
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
