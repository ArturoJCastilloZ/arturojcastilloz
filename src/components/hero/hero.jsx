import React from 'react'
import '../../styles/components/hero/hero.scss'

const Hero = ({hero, social}) => {
  return (
    <div className='hero' id='home'>
      <div className='hero-content'>
        {hero.map((hero, index) => {
          return (
            <div data-aos="zoom-in" key={index}>
              <p>{hero.greeting} </p>
              <p>{hero.author}</p>
              <p>{hero.presentation}</p>
            <div data-aos="zoom-in" className='hero-content-dir'>
            <ul>
              <li>{hero.mun}</li>
              <li>{hero.cdest}</li>
            </ul>
            <ul>
              <li>{hero.mun2}</li>
              <li>{hero.cdest2}</li>
            </ul>
            </div>
            <div className='social' data-aos="zoom-in">
              <div className='social-container'>
                <ul>
                  {social.map((social, index) => {
                    return (
                      <li className='social-item' key={index} style={{'--color':social.color}}>
                        <a href={social.url}>{social.icon}</a>
                        <a href={social.url_d} download={social.title_d}>{social.icon_d}</a>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          </div>
          )
        })}
        {/* <button href='/' className='button'>Call us</button> */}
      </div>
    </div>
  )
}

export default Hero
