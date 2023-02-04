import React from 'react'
import '../../styles/components/studies/studies.scss'

const Studies = ({studies}) => {
  return (
    <div className='studies' id='studies'>
      <div className='studies-container'>
        <h2 data-aos="zoom-in">Studies</h2>
        <span data-aos="zoom-in" className='line'></span>
        <div data-aos="zoom-in" className='studies-content'>
            {studies.map((studies, index) => {
              return (
                <div className='studies-content-card' key={index}>
                  {/* <img src={studies.img} alt={studies.institution} /> */}
                  <p style={{ "fontSize": "23px" }}>{studies.title}</p>
                  <p><span>{studies.institution}</span></p>
                  <p>{studies.date}</p>
                </div>
              )
            })}
        </div>
      </div>
    </div>
  )
}

export default Studies