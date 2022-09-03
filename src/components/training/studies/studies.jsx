import React from 'react'

const Studies = ({studies}) => {
  return (
    <section>
      <div className='studies'>
        <h1 className='studies-title'>studies &darr;</h1>
        <div className='studies-cards'>
        {studies.map((studies, index) => {
            return (
                <div className='studies-card' key={studies.title + index}>
                    <div className='studies-details' target="_blank">
                        <p className='studies-details-title'>{studies.title}</p>
                        <hr />
                        <p className='studies-details-institution'>{studies.career}</p>
                        <hr />
                        <p className='studies-details-date'>{studies.institution}</p>
                        <hr />
                        <p className='studies-details-activity'>{studies.date}</p>
                    </div>
                </div>
            )
        })}
        </div>            
      </div>
    </section>
  )
}

export default Studies