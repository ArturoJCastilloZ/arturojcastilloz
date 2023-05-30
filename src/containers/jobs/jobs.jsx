import '../../styles/components/jobs/jobs.scss'
import { JobsContent } from './content/content'

const Jobs = ({ jobs }) => {
  return (
    <div className='jobs' id='jobs'>
      <h2 data-aos="zoom-in">Mis empleos</h2>
      <span className='line'></span>
      <div className='jobs-items'>
        {jobs
        .sort((a, b) => a._id - b._id)
        .map((data, index) => {
          return (
            <JobsContent
              key={index}
              title={data.Puesto}
              institution={data.Empresa}
              activity={data.Actividades}
              start={data.Inicio}
              end={data.Fin}
            />
          )
        }).reverse()}
      </div>
    </div>
  )
}

export {Jobs}