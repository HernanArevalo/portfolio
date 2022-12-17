

export const ProjectItem = ( {project} ) => {

  return (
    <>
        <div className={`project-item ${project.size == "s"? "small":"large"}`}>

          <a href={ project.url } target="_blank" rel="noopener noreferrer" className="project-image">
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
                
                <div className="project-bottom">
                  <div className="project-description">
                      { project.description }
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
