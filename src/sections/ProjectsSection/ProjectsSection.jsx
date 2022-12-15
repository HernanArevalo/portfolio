import React from 'react'
import { ProjectItem } from './components/ProjectItem';

export const ProjectsSection = () => {

  const projects = [
    {
      name: "Movies App",
      pc: true,
      mobile: true,
      url: "hernanarevalo.github.io/1",
      description: "React.JS website to see movies information",
      size: "l",
      image_name: "movies-app.png"

    },
    {
      name: "ToDo App",
      pc: true,
      mobile: false,
      url: "hernanarevalo.github.io/1",
      description: "React.JS website to manage your responsabilities",
      size: "l",
      image_name: "todo-app.png"

    },
    {
      name: "Journal App",
      pc: true,
      mobile: false,
      url: "hernanarevalo.github.io/1",
      description: "React.JS website to save your journal with comments and images",
      size: "l",
      image_name: "journal-app.png"

    },
    {
      name: "Space Tourism",
      pc: true,
      mobile: true,
      url: "hernanarevalo.github.io/1",
      description: "React.JS website about space travels",
      size: "s",
      image_name: "space-tourism.png"

    },
    {
      name: "Twitter clone",
      pc: true,
      mobile: false,
      url: "hernanarevalo.github.io/1",
      description: "React.JS website imitating Twitter App. With no responses yet",
      size: "s",
      image_name: "twitter.png"

    },
    {
      name: "Gifs App",
      pc: true,
      mobile: false,
      url: "hernanarevalo.github.io/1",
      description: "React.JS simple website to search gifs",
      size: "s",
      image_name: "gifs-app.png"

    },
    {
      name: "Landing 1",
      pc: true,
      mobile: false,
      url: "hernanarevalo.github.io/1",
      description: "HTML/CSS/JS static website to show information as a blog",
      size: "s",
      image_name: "landing-1.png"

    },
    {
      name: "Landing 2",
      pc: true,
      mobile: false,
      url: "hernanarevalo.github.io/1",
      description: "HTML/CSS/JS static website to show information as a blog",
      size: "s",
      image_name: "landing-2.png"

    }
  ];

  return (
    <div className="projects-container" id="projects">

        <div className="section-title">
          Projects
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
