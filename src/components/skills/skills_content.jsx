import { images } from "../../mock/images"

const SkillsContent = ({ image, skill, width }) => {
    const Image = images[image]
  return (
    <div className="skills-container-card" data-aos="zoom-in">
        <img src={Image} alt={skill} style={{"--width":width}} />
    </div>
  )
}

export {SkillsContent}