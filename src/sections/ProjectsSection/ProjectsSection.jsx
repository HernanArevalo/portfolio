import React from 'react'
import { ProjectItem } from './components/ProjectItem';
import { projects } from './projects-data.json'

export const ProjectsSection = () => {

  return (
    <div className="projects-container" id="projects">

        <div className="section-title">
          Projects
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
    </div>
  )
}
