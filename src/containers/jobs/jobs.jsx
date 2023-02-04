import '../../styles/components/jobs/jobs.scss'

const Jobs = (props) => {
  return (
    <div className='jobs' id='jobs'>
      <h2 data-aos="zoom-in">Jobs</h2>
      <span className='line'></span>
      <div className='jobs-items'>
        {props.children}
      </div>
    </div>
  )
}

export {Jobs}