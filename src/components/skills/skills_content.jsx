import { images } from "../../mock/images"

const SkillsContent = (props) => {
    const image = images[props.image]
  return (
    <div className="skills-container-card" data-aos="zoom-in">
        <img src={image} alt={props.skill} style={{"--width":props.width}} />
    </div>
  )
}

export {SkillsContent}