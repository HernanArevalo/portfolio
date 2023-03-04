import { useEffect, useState } from 'react'
import './styles/ProjectItem.css'

export const ProjectItem = ( {project} ) => {

  const [lang, setLang] = useState('en')
  const pathname = window.location.pathname

  useEffect(() => {
    
    setLang( pathname.includes('es')? 'es':'en' )

  }, [pathname])


  return (
    <>
        <div className={`project-item ${project.size == "s"? "small":"large"}`}>

          <a className="project-image" href={ project.url } target="_blank" rel="noopener noreferrer">
            <img className="project-screenshot" src={`/assets/projects-section/projects-screenshots/${project.image_name}`}/>
            <div className="project-image-div">
                <img src={`/assets/projects-section/${project.image_name}`}/>
            </div>
          </a>

          <div className="project-info">

              <div className="project-info1">
                <div className="project-name">{project.name}</div>
                <div className="project-devices">
                  {project.mobile == true? 
                      <box-icon name='mobile' 
                                color="rgb(246, 218, 85)"
                                size={ project.size == "s"? "sm":"md"}

                      ></box-icon> : null}
                  {project.pc == true? 
                      <box-icon name='laptop' 
                                color="rgb(246, 218, 85)"
                                size={ project.size == "s"? "sm":"md"}
                      ></box-icon>
                      : null}
                </div>
              </div>
              
              <div className="project-bottom">
                <div className="project-description">
                    { lang === 'es'? project.descriptionEs : project.descriptionEn }
                </div>
                <a href={ project.github_url } target="_blank">
                  <box-icon type='logo' 
                            name='github' 
                            color="rgb(238, 117, 74)" 
                            size="40px" 
                            className="github-logo"
                  ></box-icon>
                </a>

              </div>
          </div>

        </div>
    </>
  )
}
