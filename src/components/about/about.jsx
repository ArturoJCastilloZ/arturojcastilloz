import React from 'react'
import '../../styles/components/about/about.scss';

const About = ({about}) => {
  return (
    <div className='about' id='about'>
      {about.map((about, index) => {
        return (
          <div className='about-container' key={index}>
              <img data-aos="zoom-in" src={about.img} alt={about.profesion} />
              <div data-aos="zoom-in" className='col-2'>
                <h2>About</h2>
                <span className='line'></span>
                <p>{about.profesion}</p>
                <p>{about.description}</p>
                  {/* <a className='button' href={about.document} download>Download resume</a> */}
              </div>
          </div>
        )
      })}
    </div>
  )
}

export default About