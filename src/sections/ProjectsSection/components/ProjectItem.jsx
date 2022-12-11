import '../projectsSection.css'


export const ProjectItem = ( {project} ) => {

  return (
    <>
        <div className={`project-item ${project.size == "s"? "small":"large"}`}>
            <div className="project-image">
                <img src={`src/sections/ProjectsSection/assets/${project.image_name}`} 
                     className="project-image"/>
            </div>
            <div className="project-info">

                <div className="project-info1">
                  <div className="project-name">{project.name}</div>
                  <div className="project-devices">
                    {project.mobile == true? 
                        <box-icon name='mobile' 
                                  color="rgb(238, 117, 74)"
                                  size={ project.size == "s"? "sm":"md"}

                        ></box-icon> : null}
                    {project.pc == true? 
                        <box-icon name='laptop' 
                                  color="rgb(238, 117, 74)"
                                  size={ project.size == "s"? "sm":"md"}
                        ></box-icon>
                        : null}
                  </div>
                </div>
                
                <div className="project-description">
                    { project.description }
                </div>
            </div>
        </div>
    </>
  )
}
