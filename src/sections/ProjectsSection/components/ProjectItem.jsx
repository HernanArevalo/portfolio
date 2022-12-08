import '../projectsSection.css'


export const ProjectItem = ( {project} ) => {

  return (
    <>
        <div key={ project.name }className={`project-item ${project.size == "s"? "small":"large"}`}>
            <div className="project-image">
                <img src={`src/sections/ProjectsSection/assets/${project.image_name}`} 
                     className="project-image"/>
            </div>
            <div className="project-info">
                <div className="project-name">{project.name}</div>
            </div>
        </div>
    </>
  )
}
