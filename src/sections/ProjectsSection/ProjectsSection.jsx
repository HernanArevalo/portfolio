import React, { useState } from 'react'
import { ProjectItem } from './components/ProjectItem';
import { ProjectItemReduced } from './components/ProjectItemReduced';
import { projects } from './projects-data.json'

export const ProjectsSection = () => {

  const [height, setHeight] = useState( window.innerHeight )
  const [width, setWidth] = useState( window.innerWidth )

  window.addEventListener('resize', function() {
    
    setHeight( window.innerHeight )
    setWidth( window.innerWidth )
  });


  return (
    <div className="projects-container" id="projects">
        <div className="project1-container">

          <div className="project1-gri1-container">
            <div className="section-title">
              Projects
            </div>
          </div>

          <a href="https://github.com/HernanArevalo" target="_blank">
            <div className="github-repository">
              GitHub repository
              <box-icon type='logo' 
                              name='github' 
                              color="rgb(246, 218, 85)" 
                              size="50px" 
                              className="github-logo"
                    ></box-icon>
            </div>
          </a>
        </div>


          {height >= 810 || width <= 500 ? 
            <div className="project2-container">
              <div className="grid-projects large">
                { projects.filter(project => project.size == "l").map(project => (
                  <ProjectItem  key={ project.name } project={ project }/>
                ))}
              </div>

              <div className="grid-projects small">
                { projects.filter(project => project.size == "s").map(project => (
                  <ProjectItem  key={ project.name } project={ project }/>
                ))}

              </div>
            </div>
          
          
            :
            <div className="project2-container">
              <div className="grid-projects large">
                { projects.filter(project => project.size == "l").map(project => (
                  <ProjectItemReduced  key={ project.name } project={ project }/>
                ))}
              </div>

              <div className="grid-projects small">
                { projects.filter(project => project.size == "s").map(project => (
                  <ProjectItemReduced  key={ project.name } project={ project }/>
                ))}

              </div>
            </div>
          
          
          }


    </div>
  )
}
