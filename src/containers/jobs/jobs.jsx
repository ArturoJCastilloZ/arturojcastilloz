import '../../styles/components/jobs/jobs.scss'

const Jobs = ({ children }) => {
  return (
    <div className='jobs' id='jobs'>
      <h2 data-aos="zoom-in">Mis empleos</h2>
      <span className='line'></span>
      <div className='jobs-items'>
        {children}
      </div>
    </div>
  )
}

export {Jobs}