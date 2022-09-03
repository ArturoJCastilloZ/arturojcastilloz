import React from 'react'

const Jobs = ({jobs}) => {
  return (
    <section>
      <div className='jobs'>
        <h1 className='jobs-title'>Jobs &darr;</h1>
        <div className='jobs-cards'>
          {jobs.map((jobs, index) => {
              return (
                <div className='jobs-card' key={jobs.title + index}>
                    <div className='jobs-details' target="_blank">
                        <p className='jobs-details-title'>{jobs.title}</p>
                        <hr />
                        <p className='jobs-details-institution'>{jobs.institution}</p>
                        <hr />
                        <p className='jobs-details-date'>{jobs.date}</p>
                        <hr />
                        <p className='jobs-details-activity'>{jobs.activity}</p>
                    </div>
                </div>
              )
          })}
        </div>            
      </div>
    </section>
  )
}

export default Jobs