import React from 'react'

export const SkillsItem = ({skill}) => {
  return (
    <div className='skill-item'>
        <div className="skill-name">
            {skill.name.toUpperCase()}
        </div>
        <div className="skill-image">
            <img src={`/assets/skills-section/${skill.image_file}`} 
                    className="skill-image"/>
        </div>
    </div>
  )
}
