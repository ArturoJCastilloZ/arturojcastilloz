import '../../styles/components/skills/skills.scss'
import { SkillsContent } from './content/content'

const Skills = ({ skills }) => {
  return (
    <div className='skills' id='skills'>
          <h2 data-aos="zoom-in">Habilidades e interéses</h2>
          <span className='line'></span>
        <div className="skills-container">
          {skills.map((data, index) => {
            return (
              <SkillsContent
                key={index}
                skill={data.Habilidad}
                image={data.Imagen}
                width={data.Ancho}
              />
            )
          })}
        </div>
    </div>
  )
}

export {Skills}