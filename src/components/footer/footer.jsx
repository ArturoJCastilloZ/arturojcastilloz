import React from 'react'
import '../../styles/components/footer/footer.scss'

const Footer = ({social}) => {
  const date = new Date();
  const now = date.getFullYear();
  return (
    <div className='footer'>
      <div className='footer-container'>
        <ul>
          {social.map((social, index) => {
            return (
              <li className='footer-item' key={index} style={{'--color': social.color}}>
                <a href={social.url}>{social.icon}</a>
                <a href={social.url_d}>{social.icon_d}</a>
              </li>
            )
          })}
        </ul>
        <div className='footer-container-bottom'>
          <span className='line'></span>
          <p>{now} ArturoJCastilloZ, All rights reserved</p>
        </div>
      </div>
    </div>
  )
}

export default Footer