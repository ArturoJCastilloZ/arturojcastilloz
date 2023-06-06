import { useEffect, useState } from 'react';
import '../../styles/components/about/about.scss';
import { ContentAbout } from './content/content';
import { fetchImages } from '../../controllers/firebaseData';

const About = ({ about }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchAboutData = async () => {
      const aboutData = await fetchImages(about.map(data => data.Imagen));
      setImages(aboutData)
    };
    fetchAboutData();
  }, [about])

  return (
    <div className='about' id='about'>
      {about.map((data, index) => {
        return (
          <ContentAbout
            key={index}
            image={images[index]}
            profesion={data.Profesion}
            description={data.Descripcion}
          />
        )
      })}
    </div>
  )
}

export {About}