import '../../styles/components/skills/skills.scss'

const Skills = ({ children }) => {
  return (
    <div className='skills' id='skills'>
          <h2 data-aos="zoom-in">Skills and interests</h2>
          <span className='line'></span>
        <div className="skills-container">
          {children}
        </div>
    </div>
  )
}

export {Skills}