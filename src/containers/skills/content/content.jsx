const SkillsContent = ({ image, skill, width }) => {
  return (
    <div className="skills-container-card" data-aos="zoom-in">
        <img src={image} alt={skill} style={{"--width":width}} />
    </div>
  )
}

export {SkillsContent}