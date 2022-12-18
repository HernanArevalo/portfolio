import './ProjectItemReduced.css'


export const ProjectItemReduced = ( {project} ) => {

    return (
      <>
          <div className={`project-item ${project.size == "s"? "small":"large"}`}>
  
            <a className="project-rectangle" href={ project.url } target="_blank" rel="noopener noreferrer">
                <div className="project-rectangle-div">
                    <div className="project-description">
                        <span>{ project.description }</span>
                    </div>
                    <div className="image">
                        <img src={`/assets/projects-section/${project.image_name}`}/>
                    </div>

                </div>
            </a>
  
                <div className="project-info">
  
                    <div className="project-info1">

                        <div className="project-name">
                            {project.name}
                        </div>

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

                        <a href={ project.github_url } target="_blank">
                            <box-icon type='logo' 
                                    name='github' 
                                    color="rgb(238, 117, 74)" 
                                    size={ project.size == "s"? "40px":"55px"} 
                                    className="github-logo"
                            ></box-icon>
                        </a>
                    </div>  
                </div>  
  
          </div>
      </>
    )
  }
  