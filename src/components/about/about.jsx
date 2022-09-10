import React from 'react'
import arturo from '../../assets/img1.png';
import '../../styles/components/about/about.scss';

const About = () => {
  return (
    <div className='about' id='about'>
      <div className='about-container'>
        <img data-aos="zoom-in" src={arturo} alt="arturo" />
        <div data-aos="zoom-in" className='col-2'>
          <h2>About</h2>
          <span className='line'></span>
          <p>Software development and management engineer</p>
          <p>I consider myself a person with the ability to web 
            development with different languages, frameworks and 
            libraries, even to be learning and, at the same time, 
            to be developing a project. I am a person committed to 
            what I do, I like to work orderly and research on 
            new technologies, I consider that my work is efficient,
             effective and of quality.</p>
            {/* <button className='button'>Explore more</button> */}
        </div>
      </div>
    </div>
  )
}

export default About