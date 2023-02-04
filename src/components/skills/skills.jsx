import React from 'react'
import '../../styles/components/skills/skills.scss'

const Skills = ({skills}) => {
  return (
    <div className='skills' id='skills'>
          <h2 data-aos="zoom-in">Skills and interests</h2>
          <span className='line'></span>
        <div className="skills-container">
              {skills.map((skills, index) => {
                return (
                  <div className="skills-container-card" key={index} data-aos="zoom-in">
                    <img src={skills.image} alt={skills.skill} style={{"--width":skills.width}} />
                  </div>
                )
              })}
        </div>
    </div>
  )
}

export default Skills