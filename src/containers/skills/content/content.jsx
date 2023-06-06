import { LazyLoadImage } from "react-lazy-load-image-component"

const SkillsContent = ({ image, skill, width }) => {
  return (
    <div className="skills-container-card" data-aos="zoom-in">
        <LazyLoadImage src={image} alt={skill} style={{"--width":width}} />
    </div>
  )
}

export {SkillsContent}