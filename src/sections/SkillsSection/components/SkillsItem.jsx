
export const SkillsItem = ({skill}) => {
  return (
    <div className='skill-item'>

        <div className="skill-name">
          <div>
            {skill.name.toUpperCase()}
          </div>
        </div>

        <div className="skill-image-container">
          
          <div className="skill-image">
              <div className="image-content">
                <img src={`/assets/skills-section/${skill.image_file}`} 
                      className="skill-image-svg"/>
              </div>

              <div className="image-background"></div>

          </div>

        </div>
    </div>
  )
}
