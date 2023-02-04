import React from 'react'
import '../../styles/components/jobs/jobs.scss'

const Jobs = ({jobs}) => {
  return (
    <div className='jobs' id='jobs'>
      <h2 data-aos="zoom-in">Jobs</h2>
      <span className='line'></span>
      <div className='jobs-items'>
        {jobs.map((jobs, index) => {
              return (
                <div className='jobs-items-item' data-aos="zoom-in" key={index}>
                  <div className='jobs-dot'></div>
                    <div className='jobs-items-item-date'>{jobs.date}</div>
                    <div className='jobs-content'>
                      {/* <img src={jobs.img} alt={jobs.institution} /> */}
                      <h3>{jobs.title}</h3>
                      <span>{jobs.institution}</span>
                      <p>{jobs.activity}</p>
                    </div>
                </div>
              )
          })}
      </div>
    </div>
  )
}

export default Jobs