import { useState } from 'react'
import { SkillsItem } from './components/SkillsItem'
import { skills } from './skills-data.json'


export const SkillsSection = ({info}) => {



  return (
    <div className="skills-container" id="skills">
        <div className="section-title">{info.skills.title}</div>


        <div className="skills">
          <div className="skills-grid">
            { skills.map(skill => (<SkillsItem skill={skill} key={ skill.name }/>))}
          </div>
        </div>

    </div>  )
}
