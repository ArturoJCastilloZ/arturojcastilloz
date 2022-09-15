import React from 'react'
import '../../styles/components/skills/skills.scss'

const Skills = ({skills}) => {
  return (
    <div className='skills' id='skills'>
          <h2 data-aos="zoom-in">Skills</h2>
          <span className='line'></span>
        <div className="skills-container">
              {skills.map((skills, index) => {
                return (
                  <div className="skills-container-card" key={index} data-aos="zoom-in">
                  <div className="skills-percent" style={{'--ctr':skills.color, '--num':skills.level}}>
                    <div className="dot"></div>
                    <svg>
                      <circle cx="70" cy="70" r="70"></circle>
                      <circle cx="70" cy="70" r="70"></circle>
                    </svg>
                    <div className="number">
                      <h2>{skills.level}<span>%</span></h2>
                      <p>{skills.skil}</p>
                    </div>
                  </div>
                </div>
                )
              })}
        </div>
    </div>
  )
}

export default Skills