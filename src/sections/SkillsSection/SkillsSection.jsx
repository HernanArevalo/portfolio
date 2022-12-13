import React from 'react'
import { SkillsItem } from './components/SkillsItem'
// import './SkillsSection.css'


export const SkillsSection = () => {

  const skills = [
    {
      name:'React.js',
      image_file: 'reactjs.png'
    },
    { 
      name:'Javascript',
      image_file: 'javascript.png'
    }, 
    {
      name:'Bootstrap',
      image_file: 'bootstrap.png'
    },
    {
      name:'Illustrator',
      image_file: 'illustrator.png'
    },
    {
      name:'React Redux',
      image_file: 'redux.png'
    },
    {
      name:'python',
      image_file: 'python.png'
    },
    {
      name:'Firebase Firestore',
      image_file: 'firebase.png'
    },
    {
      name:'Photoshop',
      image_file: 'photoshop.png'
    },
    {
      name:'React Router',
      image_file: 'router.png'
    },
    { name:'Html Css',
    image_file: 'htmlcss.png'
  },
    {
      name:'Material UI',
      image_file: 'mui.png'
    },
    {
      name:'Premiere',
      image_file: 'premiere.png'
    },
     
  ]

  return (
    <div className="skills-container" id="skills">
        <div className="section-title">Skills</div>
        <div className="skills">
          <div className="skills-grid">
            { skills.map(skill => (<SkillsItem skill={skill} key={ skill.name }/>))}
          </div>
        </div>
    </div>  )
}
