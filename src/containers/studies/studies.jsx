import '../../styles/components/studies/studies.scss'
import { StudiesContent } from './content/content'

const Studies = ({ studies }) => {
  return (
    <div className='studies' id='studies'>
      <div className='studies-container'>
        <h2 data-aos="zoom-in">Mi educación</h2>
        <span data-aos="zoom-in" className='line'></span>
        <div data-aos="zoom-in" className='studies-content'>
            {studies.map((data, index) => {
              return(
                <StudiesContent
                  key={index}
                  title={data.Titulo}
                  institution={data.Escuela}
                  start={data.Inicio}
                  end={data.Fin}
                />
              )
            })}
        </div>
      </div>
    </div>
  )
}

export {Studies}