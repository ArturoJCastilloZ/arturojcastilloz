import { useEffect, useState } from 'react';
import { fetchImages } from '../../controllers/firebaseData';
import { SkillsContent } from './content/content'
import '../../styles/components/skills/skills.scss'

const Skills = ({ skills }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImageData = async () => {
      const aboutData = await fetchImages(skills.map(data => data.Imagen));
      setImages(aboutData)
    };
    fetchImageData();
  }, [skills])

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
                image={images[index]}
                width={data.Ancho}
              />
            )
          })}
        </div>
    </div>
  )
}

export {Skills}