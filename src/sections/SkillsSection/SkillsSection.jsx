import React, { useEffect, useState } from 'react'
import { SkillsItem } from './components/SkillsItem'
import { skills } from './skills-data.json'
import { en, es } from '../../data/info.json'


export const SkillsSection = () => {

  const pathname = window.location.pathname

  const [info, setInfo] = useState( pathname.includes('es')? es:en )

  useEffect(() => {
    
    setInfo( pathname.includes('es')? es:en )

  }, [pathname])

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
