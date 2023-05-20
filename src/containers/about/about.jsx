import '../../styles/components/about/about.scss';
import { ContentAbout } from './content/content';

const About = ({ about }) => {
  return (
    <div className='about' id='about'>
      {about.map((data, index) => {
        return (
          <ContentAbout
            key={index}
            image={data.Imagen}
            profesion={data.Profesion}
            description={data.Descripcion}
          />
        )
      })}
    </div>
  )
}

export {About}